(function () {
  const R = document.createElement('link').relList;
  if (R && R.supports && R.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) x(h);
  new MutationObserver((h) => {
    for (const i of h)
      if (i.type === 'childList')
        for (const f of i.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && x(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(h) {
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
  function x(h) {
    if (h.ep) return;
    h.ep = !0;
    const i = b(h);
    fetch(h.href, i);
  }
})();
var bm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Q0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
var Ws = { exports: {} },
  ka = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm;
function Z0() {
  if (Rm) return ka;
  Rm = 1;
  var c = Symbol.for('react.transitional.element'),
    R = Symbol.for('react.fragment');
  function b(x, h, i) {
    var f = null;
    if ((i !== void 0 && (f = '' + i), h.key !== void 0 && (f = '' + h.key), 'key' in h)) {
      i = {};
      for (var d in h) d !== 'key' && (i[d] = h[d]);
    } else i = h;
    return ((h = i.ref), { $$typeof: c, type: x, key: f, ref: h !== void 0 ? h : null, props: i });
  }
  return ((ka.Fragment = R), (ka.jsx = b), (ka.jsxs = b), ka);
}
var Cm;
function K0() {
  return (Cm || ((Cm = 1), (Ws.exports = Z0())), Ws.exports);
}
var ie = K0(),
  Ps = { exports: {} },
  Wa = {},
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
 */ var Am;
function J0() {
  return (
    Am ||
      ((Am = 1),
      (function (c) {
        function R(V, K) {
          var ae = V.length;
          V.push(K);
          e: for (; 0 < ae; ) {
            var oe = (ae - 1) >>> 1,
              de = V[oe];
            if (0 < h(de, K)) ((V[oe] = K), (V[ae] = de), (ae = oe));
            else break e;
          }
        }
        function b(V) {
          return V.length === 0 ? null : V[0];
        }
        function x(V) {
          if (V.length === 0) return null;
          var K = V[0],
            ae = V.pop();
          if (ae !== K) {
            V[0] = ae;
            e: for (var oe = 0, de = V.length, H = de >>> 1; oe < H; ) {
              var $ = 2 * (oe + 1) - 1,
                W = V[$],
                le = $ + 1,
                ue = V[le];
              if (0 > h(W, ae))
                le < de && 0 > h(ue, W)
                  ? ((V[oe] = ue), (V[le] = ae), (oe = le))
                  : ((V[oe] = W), (V[$] = ae), (oe = $));
              else if (le < de && 0 > h(ue, ae)) ((V[oe] = ue), (V[le] = ae), (oe = le));
              else break e;
            }
          }
          return K;
        }
        function h(V, K) {
          var ae = V.sortIndex - K.sortIndex;
          return ae !== 0 ? ae : V.id - K.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var i = performance;
          c.unstable_now = function () {
            return i.now();
          };
        } else {
          var f = Date,
            d = f.now();
          c.unstable_now = function () {
            return f.now() - d;
          };
        }
        var s = [],
          m = [],
          o = 1,
          g = null,
          y = 3,
          r = !1,
          p = !1,
          v = !1,
          E = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          U = typeof setImmediate < 'u' ? setImmediate : null;
        function _(V) {
          for (var K = b(m); K !== null; ) {
            if (K.callback === null) x(m);
            else if (K.startTime <= V) (x(m), (K.sortIndex = K.expirationTime), R(s, K));
            else break;
            K = b(m);
          }
        }
        function T(V) {
          if (((v = !1), _(V), !p))
            if (b(s) !== null) ((p = !0), M || ((M = !0), L()));
            else {
              var K = b(m);
              K !== null && I(T, K.startTime - V);
            }
        }
        var M = !1,
          z = -1,
          D = 5,
          w = -1;
        function B() {
          return E ? !0 : !(c.unstable_now() - w < D);
        }
        function j() {
          if (((E = !1), M)) {
            var V = c.unstable_now();
            w = V;
            var K = !0;
            try {
              e: {
                ((p = !1), v && ((v = !1), O(z), (z = -1)), (r = !0));
                var ae = y;
                try {
                  t: {
                    for (_(V), g = b(s); g !== null && !(g.expirationTime > V && B()); ) {
                      var oe = g.callback;
                      if (typeof oe == 'function') {
                        ((g.callback = null), (y = g.priorityLevel));
                        var de = oe(g.expirationTime <= V);
                        if (((V = c.unstable_now()), typeof de == 'function')) {
                          ((g.callback = de), _(V), (K = !0));
                          break t;
                        }
                        (g === b(s) && x(s), _(V));
                      } else x(s);
                      g = b(s);
                    }
                    if (g !== null) K = !0;
                    else {
                      var H = b(m);
                      (H !== null && I(T, H.startTime - V), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (y = ae), (r = !1));
                }
                K = void 0;
              }
            } finally {
              K ? L() : (M = !1);
            }
          }
        }
        var L;
        if (typeof U == 'function')
          L = function () {
            U(j);
          };
        else if (typeof MessageChannel < 'u') {
          var F = new MessageChannel(),
            te = F.port2;
          ((F.port1.onmessage = j),
            (L = function () {
              te.postMessage(null);
            }));
        } else
          L = function () {
            A(j, 0);
          };
        function I(V, K) {
          z = A(function () {
            V(c.unstable_now());
          }, K);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (c.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (D = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (c.unstable_next = function (V) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = y;
            }
            var ae = y;
            y = K;
            try {
              return V();
            } finally {
              y = ae;
            }
          }),
          (c.unstable_requestPaint = function () {
            E = !0;
          }),
          (c.unstable_runWithPriority = function (V, K) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var ae = y;
            y = V;
            try {
              return K();
            } finally {
              y = ae;
            }
          }),
          (c.unstable_scheduleCallback = function (V, K, ae) {
            var oe = c.unstable_now();
            switch (
              (typeof ae == 'object' && ae !== null
                ? ((ae = ae.delay), (ae = typeof ae == 'number' && 0 < ae ? oe + ae : oe))
                : (ae = oe),
              V)
            ) {
              case 1:
                var de = -1;
                break;
              case 2:
                de = 250;
                break;
              case 5:
                de = 1073741823;
                break;
              case 4:
                de = 1e4;
                break;
              default:
                de = 5e3;
            }
            return (
              (de = ae + de),
              (V = {
                id: o++,
                callback: K,
                priorityLevel: V,
                startTime: ae,
                expirationTime: de,
                sortIndex: -1,
              }),
              ae > oe
                ? ((V.sortIndex = ae),
                  R(m, V),
                  b(s) === null && V === b(m) && (v ? (O(z), (z = -1)) : (v = !0), I(T, ae - oe)))
                : ((V.sortIndex = de), R(s, V), p || r || ((p = !0), M || ((M = !0), L()))),
              V
            );
          }),
          (c.unstable_shouldYield = B),
          (c.unstable_wrapCallback = function (V) {
            var K = y;
            return function () {
              var ae = y;
              y = K;
              try {
                return V.apply(this, arguments);
              } finally {
                y = ae;
              }
            };
          }));
      })(eo)),
    eo
  );
}
var Mm;
function F0() {
  return (Mm || ((Mm = 1), (Is.exports = J0())), Is.exports);
}
var to = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm;
function $0() {
  if (zm) return ve;
  zm = 1;
  var c = Symbol.for('react.transitional.element'),
    R = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    f = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    o = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    y = Symbol.iterator;
  function r(H) {
    return H === null || typeof H != 'object'
      ? null
      : ((H = (y && H[y]) || H['@@iterator']), typeof H == 'function' ? H : null);
  }
  var p = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    v = Object.assign,
    E = {};
  function A(H, $, W) {
    ((this.props = H), (this.context = $), (this.refs = E), (this.updater = W || p));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (H, $) {
      if (typeof H != 'object' && typeof H != 'function' && H != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, H, $, 'setState');
    }),
    (A.prototype.forceUpdate = function (H) {
      this.updater.enqueueForceUpdate(this, H, 'forceUpdate');
    }));
  function O() {}
  O.prototype = A.prototype;
  function U(H, $, W) {
    ((this.props = H), (this.context = $), (this.refs = E), (this.updater = W || p));
  }
  var _ = (U.prototype = new O());
  ((_.constructor = U), v(_, A.prototype), (_.isPureReactComponent = !0));
  var T = Array.isArray;
  function M() {}
  var z = { H: null, A: null, T: null, S: null },
    D = Object.prototype.hasOwnProperty;
  function w(H, $, W) {
    var le = W.ref;
    return { $$typeof: c, type: H, key: $, ref: le !== void 0 ? le : null, props: W };
  }
  function B(H, $) {
    return w(H.type, $, H.props);
  }
  function j(H) {
    return typeof H == 'object' && H !== null && H.$$typeof === c;
  }
  function L(H) {
    var $ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      H.replace(/[=:]/g, function (W) {
        return $[W];
      })
    );
  }
  var F = /\/+/g;
  function te(H, $) {
    return typeof H == 'object' && H !== null && H.key != null ? L('' + H.key) : $.toString(36);
  }
  function I(H) {
    switch (H.status) {
      case 'fulfilled':
        return H.value;
      case 'rejected':
        throw H.reason;
      default:
        switch (
          (typeof H.status == 'string'
            ? H.then(M, M)
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
  function V(H, $, W, le, ue) {
    var ne = typeof H;
    (ne === 'undefined' || ne === 'boolean') && (H = null);
    var re = !1;
    if (H === null) re = !0;
    else
      switch (ne) {
        case 'bigint':
        case 'string':
        case 'number':
          re = !0;
          break;
        case 'object':
          switch (H.$$typeof) {
            case c:
            case R:
              re = !0;
              break;
            case o:
              return ((re = H._init), V(re(H._payload), $, W, le, ue));
          }
      }
    if (re)
      return (
        (ue = ue(H)),
        (re = le === '' ? '.' + te(H, 0) : le),
        T(ue)
          ? ((W = ''),
            re != null && (W = re.replace(F, '$&/') + '/'),
            V(ue, $, W, '', function (De) {
              return De;
            }))
          : ue != null &&
            (j(ue) &&
              (ue = B(
                ue,
                W +
                  (ue.key == null || (H && H.key === ue.key)
                    ? ''
                    : ('' + ue.key).replace(F, '$&/') + '/') +
                  re
              )),
            $.push(ue)),
        1
      );
    re = 0;
    var he = le === '' ? '.' : le + ':';
    if (T(H))
      for (var ge = 0; ge < H.length; ge++)
        ((le = H[ge]), (ne = he + te(le, ge)), (re += V(le, $, W, ne, ue)));
    else if (((ge = r(H)), typeof ge == 'function'))
      for (H = ge.call(H), ge = 0; !(le = H.next()).done; )
        ((le = le.value), (ne = he + te(le, ge++)), (re += V(le, $, W, ne, ue)));
    else if (ne === 'object') {
      if (typeof H.then == 'function') return V(I(H), $, W, le, ue);
      throw (
        ($ = String(H)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ($ === '[object Object]' ? 'object with keys {' + Object.keys(H).join(', ') + '}' : $) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return re;
  }
  function K(H, $, W) {
    if (H == null) return H;
    var le = [],
      ue = 0;
    return (
      V(H, le, '', '', function (ne) {
        return $.call(W, ne, ue++);
      }),
      le
    );
  }
  function ae(H) {
    if (H._status === -1) {
      var $ = H._result;
      (($ = $()),
        $.then(
          function (W) {
            (H._status === 0 || H._status === -1) && ((H._status = 1), (H._result = W));
          },
          function (W) {
            (H._status === 0 || H._status === -1) && ((H._status = 2), (H._result = W));
          }
        ),
        H._status === -1 && ((H._status = 0), (H._result = $)));
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var oe =
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
    de = {
      map: K,
      forEach: function (H, $, W) {
        K(
          H,
          function () {
            $.apply(this, arguments);
          },
          W
        );
      },
      count: function (H) {
        var $ = 0;
        return (
          K(H, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (H) {
        return (
          K(H, function ($) {
            return $;
          }) || []
        );
      },
      only: function (H) {
        if (!j(H))
          throw Error('React.Children.only expected to receive a single React element child.');
        return H;
      },
    };
  return (
    (ve.Activity = g),
    (ve.Children = de),
    (ve.Component = A),
    (ve.Fragment = b),
    (ve.Profiler = h),
    (ve.PureComponent = U),
    (ve.StrictMode = x),
    (ve.Suspense = s),
    (ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (ve.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (H) {
        return z.H.useMemoCache(H);
      },
    }),
    (ve.cache = function (H) {
      return function () {
        return H.apply(null, arguments);
      };
    }),
    (ve.cacheSignal = function () {
      return null;
    }),
    (ve.cloneElement = function (H, $, W) {
      if (H == null) throw Error('The argument must be a React element, but you passed ' + H + '.');
      var le = v({}, H.props),
        ue = H.key;
      if ($ != null)
        for (ne in ($.key !== void 0 && (ue = '' + $.key), $))
          !D.call($, ne) ||
            ne === 'key' ||
            ne === '__self' ||
            ne === '__source' ||
            (ne === 'ref' && $.ref === void 0) ||
            (le[ne] = $[ne]);
      var ne = arguments.length - 2;
      if (ne === 1) le.children = W;
      else if (1 < ne) {
        for (var re = Array(ne), he = 0; he < ne; he++) re[he] = arguments[he + 2];
        le.children = re;
      }
      return w(H.type, ue, le);
    }),
    (ve.createContext = function (H) {
      return (
        (H = {
          $$typeof: f,
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
    (ve.createElement = function (H, $, W) {
      var le,
        ue = {},
        ne = null;
      if ($ != null)
        for (le in ($.key !== void 0 && (ne = '' + $.key), $))
          D.call($, le) && le !== 'key' && le !== '__self' && le !== '__source' && (ue[le] = $[le]);
      var re = arguments.length - 2;
      if (re === 1) ue.children = W;
      else if (1 < re) {
        for (var he = Array(re), ge = 0; ge < re; ge++) he[ge] = arguments[ge + 2];
        ue.children = he;
      }
      if (H && H.defaultProps)
        for (le in ((re = H.defaultProps), re)) ue[le] === void 0 && (ue[le] = re[le]);
      return w(H, ne, ue);
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (H) {
      return { $$typeof: d, render: H };
    }),
    (ve.isValidElement = j),
    (ve.lazy = function (H) {
      return { $$typeof: o, _payload: { _status: -1, _result: H }, _init: ae };
    }),
    (ve.memo = function (H, $) {
      return { $$typeof: m, type: H, compare: $ === void 0 ? null : $ };
    }),
    (ve.startTransition = function (H) {
      var $ = z.T,
        W = {};
      z.T = W;
      try {
        var le = H(),
          ue = z.S;
        (ue !== null && ue(W, le),
          typeof le == 'object' && le !== null && typeof le.then == 'function' && le.then(M, oe));
      } catch (ne) {
        oe(ne);
      } finally {
        ($ !== null && W.types !== null && ($.types = W.types), (z.T = $));
      }
    }),
    (ve.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (ve.use = function (H) {
      return z.H.use(H);
    }),
    (ve.useActionState = function (H, $, W) {
      return z.H.useActionState(H, $, W);
    }),
    (ve.useCallback = function (H, $) {
      return z.H.useCallback(H, $);
    }),
    (ve.useContext = function (H) {
      return z.H.useContext(H);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (H, $) {
      return z.H.useDeferredValue(H, $);
    }),
    (ve.useEffect = function (H, $) {
      return z.H.useEffect(H, $);
    }),
    (ve.useEffectEvent = function (H) {
      return z.H.useEffectEvent(H);
    }),
    (ve.useId = function () {
      return z.H.useId();
    }),
    (ve.useImperativeHandle = function (H, $, W) {
      return z.H.useImperativeHandle(H, $, W);
    }),
    (ve.useInsertionEffect = function (H, $) {
      return z.H.useInsertionEffect(H, $);
    }),
    (ve.useLayoutEffect = function (H, $) {
      return z.H.useLayoutEffect(H, $);
    }),
    (ve.useMemo = function (H, $) {
      return z.H.useMemo(H, $);
    }),
    (ve.useOptimistic = function (H, $) {
      return z.H.useOptimistic(H, $);
    }),
    (ve.useReducer = function (H, $, W) {
      return z.H.useReducer(H, $, W);
    }),
    (ve.useRef = function (H) {
      return z.H.useRef(H);
    }),
    (ve.useState = function (H) {
      return z.H.useState(H);
    }),
    (ve.useSyncExternalStore = function (H, $, W) {
      return z.H.useSyncExternalStore(H, $, W);
    }),
    (ve.useTransition = function () {
      return z.H.useTransition();
    }),
    (ve.version = '19.2.5'),
    ve
  );
}
var Dm;
function vo() {
  return (Dm || ((Dm = 1), (to.exports = $0())), to.exports);
}
var no = { exports: {} },
  it = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om;
function k0() {
  if (Om) return it;
  Om = 1;
  var c = vo();
  function R(s) {
    var m = 'https://react.dev/errors/' + s;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++) m += '&args[]=' + encodeURIComponent(arguments[o]);
    }
    return (
      'Minified React error #' +
      s +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function b() {}
  var x = {
      d: {
        f: b,
        r: function () {
          throw Error(R(522));
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
    h = Symbol.for('react.portal');
  function i(s, m, o) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: g == null ? null : '' + g,
      children: s,
      containerInfo: m,
      implementation: o,
    };
  }
  var f = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(s, m) {
    if (s === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (it.createPortal = function (s, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(R(299));
      return i(s, m, null, o);
    }),
    (it.flushSync = function (s) {
      var m = f.T,
        o = x.p;
      try {
        if (((f.T = null), (x.p = 2), s)) return s();
      } finally {
        ((f.T = m), (x.p = o), x.d.f());
      }
    }),
    (it.preconnect = function (s, m) {
      typeof s == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(s, m));
    }),
    (it.prefetchDNS = function (s) {
      typeof s == 'string' && x.d.D(s);
    }),
    (it.preinit = function (s, m) {
      if (typeof s == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          g = d(o, m.crossOrigin),
          y = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(s, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: y,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(s, {
              crossOrigin: g,
              integrity: y,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (it.preinitModule = function (s, m) {
      if (typeof s == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var o = d(m.as, m.crossOrigin);
            x.d.M(s, {
              crossOrigin: o,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && x.d.M(s);
    }),
    (it.preload = function (s, m) {
      if (typeof s == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var o = m.as,
          g = d(o, m.crossOrigin);
        x.d.L(s, o, {
          crossOrigin: g,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        });
      }
    }),
    (it.preloadModule = function (s, m) {
      if (typeof s == 'string')
        if (m) {
          var o = d(m.as, m.crossOrigin);
          x.d.m(s, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: o,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else x.d.m(s);
    }),
    (it.requestFormReset = function (s) {
      x.d.r(s);
    }),
    (it.unstable_batchedUpdates = function (s, m) {
      return s(m);
    }),
    (it.useFormState = function (s, m, o) {
      return f.H.useFormState(s, m, o);
    }),
    (it.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (it.version = '19.2.5'),
    it
  );
}
var Um;
function W0() {
  if (Um) return no.exports;
  Um = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (R) {
        console.error(R);
      }
  }
  return (c(), (no.exports = k0()), no.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm;
function P0() {
  if (Bm) return Wa;
  Bm = 1;
  var c = F0(),
    R = vo(),
    b = W0();
  function x(e) {
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
  function h(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function i(e) {
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
  function d(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function s(e) {
    if (i(e) !== e) throw Error(x(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = i(e)), t === null)) throw Error(x(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((l = a.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return (s(a), e);
          if (u === l) return (s(a), t);
          u = u.sibling;
        }
        throw Error(x(188));
      }
      if (n.return !== l.return) ((n = a), (l = u));
      else {
        for (var S = !1, C = a.child; C; ) {
          if (C === n) {
            ((S = !0), (n = a), (l = u));
            break;
          }
          if (C === l) {
            ((S = !0), (l = a), (n = u));
            break;
          }
          C = C.sibling;
        }
        if (!S) {
          for (C = u.child; C; ) {
            if (C === n) {
              ((S = !0), (n = u), (l = a));
              break;
            }
            if (C === l) {
              ((S = !0), (l = u), (n = a));
              break;
            }
            C = C.sibling;
          }
          if (!S) throw Error(x(189));
        }
      }
      if (n.alternate !== l) throw Error(x(190));
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? e : t;
  }
  function o(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = o(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    y = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.portal'),
    v = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    A = Symbol.for('react.profiler'),
    O = Symbol.for('react.consumer'),
    U = Symbol.for('react.context'),
    _ = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    M = Symbol.for('react.suspense_list'),
    z = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    w = Symbol.for('react.activity'),
    B = Symbol.for('react.memo_cache_sentinel'),
    j = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (j && e[j]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var F = Symbol.for('react.client.reference');
  function te(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === F ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case v:
        return 'Fragment';
      case A:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case T:
        return 'Suspense';
      case M:
        return 'SuspenseList';
      case w:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case p:
          return 'Portal';
        case U:
          return e.displayName || 'Context';
        case O:
          return (e._context.displayName || 'Context') + '.Consumer';
        case _:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case z:
          return ((t = e.displayName || null), t !== null ? t : te(e.type) || 'Memo');
        case D:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var I = Array.isArray,
    V = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    oe = [],
    de = -1;
  function H(e) {
    return { current: e };
  }
  function $(e) {
    0 > de || ((e.current = oe[de]), (oe[de] = null), de--);
  }
  function W(e, t) {
    (de++, (oe[de] = e.current), (e.current = t));
  }
  var le = H(null),
    ue = H(null),
    ne = H(null),
    re = H(null);
  function he(e, t) {
    switch ((W(ne, t), W(ue, e), W(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Kd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = Kd(t)), (e = Jd(t, e)));
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
    ($(le), W(le, e));
  }
  function ge() {
    ($(le), $(ue), $(ne));
  }
  function De(e) {
    e.memoizedState !== null && W(re, e);
    var t = le.current,
      n = Jd(t, e.type);
    t !== n && (W(ue, e), W(le, n));
  }
  function Oe(e) {
    (ue.current === e && ($(le), $(ue)), re.current === e && ($(re), (Ka._currentValue = ae)));
  }
  var _e, ht;
  function Pe(e) {
    if (_e === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((_e = (t && t[1]) || ''),
          (ht =
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
      _e +
      e +
      ht
    );
  }
  var la = !1;
  function cl(e, t) {
    if (!e || la) return '';
    la = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                } catch (J) {
                  var Z = J;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (J) {
                  Z = J;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                Z = J;
              }
              (ee = e()) && typeof ee.catch == 'function' && ee.catch(function () {});
            }
          } catch (J) {
            if (J && Z && typeof J.stack == 'string') return [J.stack, Z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var a = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, 'name');
      a &&
        a.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = l.DetermineComponentFrameRoot(),
        S = u[0],
        C = u[1];
      if (S && C) {
        var N = S.split(`
`),
          Q = C.split(`
`);
        for (a = l = 0; l < N.length && !N[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; a < Q.length && !Q[a].includes('DetermineComponentFrameRoot'); ) a++;
        if (l === N.length || a === Q.length)
          for (l = N.length - 1, a = Q.length - 1; 1 <= l && 0 <= a && N[l] !== Q[a]; ) a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (N[l] !== Q[a]) {
            if (l !== 1 || a !== 1)
              do
                if ((l--, a--, 0 > a || N[l] !== Q[a])) {
                  var k =
                    `
` + N[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      k.includes('<anonymous>') &&
                      (k = k.replace('<anonymous>', e.displayName)),
                    k
                  );
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      ((la = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Pe(n) : '';
  }
  function ii(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(e.type);
      case 16:
        return Pe('Lazy');
      case 13:
        return e.child !== t && t !== null ? Pe('Suspense Fallback') : Pe('Suspense');
      case 19:
        return Pe('SuspenseList');
      case 0:
      case 15:
        return cl(e.type, !1);
      case 11:
        return cl(e.type.render, !1);
      case 1:
        return cl(e.type, !0);
      case 31:
        return Pe('Activity');
      default:
        return '';
    }
  }
  function fl(e) {
    try {
      var t = '',
        n = null;
      do ((t += ii(e, n)), (n = e), (e = e.return));
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
  var vt = Object.prototype.hasOwnProperty,
    dl = c.unstable_scheduleCallback,
    Gn = c.unstable_cancelCallback,
    ui = c.unstable_shouldYield,
    ri = c.unstable_requestPaint,
    at = c.unstable_now,
    si = c.unstable_getCurrentPriorityLevel,
    Vn = c.unstable_ImmediatePriority,
    oi = c.unstable_UserBlockingPriority,
    ml = c.unstable_NormalPriority,
    hl = c.unstable_LowPriority,
    qn = c.unstable_IdlePriority,
    Ah = c.log,
    Mh = c.unstable_setDisableYieldValue,
    aa = null,
    gt = null;
  function vn(e) {
    if ((typeof Ah == 'function' && Mh(e), gt && typeof gt.setStrictMode == 'function'))
      try {
        gt.setStrictMode(aa, e);
      } catch {}
  }
  var yt = Math.clz32 ? Math.clz32 : Oh,
    zh = Math.log,
    Dh = Math.LN2;
  function Oh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((zh(e) / Dh) | 0)) | 0);
  }
  var ci = 256,
    fi = 262144,
    di = 4194304;
  function Xn(e) {
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
  function mi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      S = e.pingedLanes;
    e = e.warmLanes;
    var C = l & 134217727;
    return (
      C !== 0
        ? ((l = C & ~u),
          l !== 0
            ? (a = Xn(l))
            : ((S &= C), S !== 0 ? (a = Xn(S)) : n || ((n = C & ~e), n !== 0 && (a = Xn(n)))))
        : ((C = l & ~u),
          C !== 0
            ? (a = Xn(C))
            : S !== 0
              ? (a = Xn(S))
              : n || ((n = l & ~e), n !== 0 && (a = Xn(n)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            (t & u) === 0 &&
            ((u = a & -a), (n = t & -t), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? t
          : a
    );
  }
  function ia(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Uh(e, t) {
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
  function Ao() {
    var e = di;
    return ((di <<= 1), (di & 62914560) === 0 && (di = 4194304), e);
  }
  function Yu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ua(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Bh(e, t, n, l, a, u) {
    var S = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var C = e.entanglements,
      N = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (n = S & ~n; 0 < n; ) {
      var k = 31 - yt(n),
        ee = 1 << k;
      ((C[k] = 0), (N[k] = -1));
      var Z = Q[k];
      if (Z !== null)
        for (Q[k] = null, k = 0; k < Z.length; k++) {
          var J = Z[k];
          J !== null && (J.lane &= -536870913);
        }
      n &= ~ee;
    }
    (l !== 0 && Mo(e, l, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function Mo(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - yt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function zo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - yt(n),
        a = 1 << l;
      ((a & t) | (e[l] & t) && (e[l] |= t), (n &= ~a));
    }
  }
  function Do(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : Gu(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
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
  function Oo() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : gm(e.type));
  }
  function Uo(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var gn = Math.random().toString(36).slice(2),
    Ie = '__reactFiber$' + gn,
    rt = '__reactProps$' + gn,
    vl = '__reactContainer$' + gn,
    qu = '__reactEvents$' + gn,
    wh = '__reactListeners$' + gn,
    Nh = '__reactHandles$' + gn,
    Bo = '__reactResources$' + gn,
    ra = '__reactMarker$' + gn;
  function Xu(e) {
    (delete e[Ie], delete e[rt], delete e[qu], delete e[wh], delete e[Nh]);
  }
  function gl(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[vl] || n[Ie])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = em(e); e !== null; ) {
            if ((n = e[Ie])) return n;
            e = em(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function yl(e) {
    if ((e = e[Ie] || e[vl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function sa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function pl(e) {
    var t = e[Bo];
    return (t || (t = e[Bo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ke(e) {
    e[ra] = !0;
  }
  var wo = new Set(),
    No = {};
  function Qn(e, t) {
    (Sl(e, t), Sl(e + 'Capture', t));
  }
  function Sl(e, t) {
    for (No[e] = t, e = 0; e < t.length; e++) wo.add(t[e]);
  }
  var _h = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    _o = {},
    Ho = {};
  function Hh(e) {
    return vt.call(Ho, e)
      ? !0
      : vt.call(_o, e)
        ? !1
        : _h.test(e)
          ? (Ho[e] = !0)
          : ((_o[e] = !0), !1);
  }
  function hi(e, t, n) {
    if (Hh(t))
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
  function vi(e, t, n) {
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
  function Kt(e, t, n, l) {
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
  function Ct(e) {
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
  function Lo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Lh(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var a = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (S) {
            ((n = '' + S), u.call(this, S));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (S) {
            n = '' + S;
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
      var t = Lo(e) ? 'checked' : 'value';
      e._valueTracker = Lh(e, t, '' + e[t]);
    }
  }
  function jo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = Lo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
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
  var jh = /[\n"\\]/g;
  function At(e) {
    return e.replace(jh, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Zu(e, t, n, l, a, u, S, C) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Ct(t))
          : e.value !== '' + Ct(t) && (e.value = '' + Ct(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Ku(e, S, Ct(t))
        : n != null
          ? Ku(e, S, Ct(n))
          : l != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Ct(C))
        : e.removeAttribute('name'));
  }
  function Yo(e, t, n, l, a, u, S, C) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        Qu(e);
        return;
      }
      ((n = n != null ? '' + Ct(n) : ''),
        (t = t != null ? '' + Ct(t) : n),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? a),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = C ? e.checked : !!l),
      (e.defaultChecked = !!l),
      S != null &&
        typeof S != 'function' &&
        typeof S != 'symbol' &&
        typeof S != 'boolean' &&
        (e.name = S),
      Qu(e));
  }
  function Ku(e, t, n) {
    (t === 'number' && gi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function xl(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Ct(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          ((e[a].selected = !0), l && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Go(e, t, n) {
    if (t != null && ((t = '' + Ct(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Ct(n) : '';
  }
  function Vo(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(x(92));
        if (I(l)) {
          if (1 < l.length) throw Error(x(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Ct(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      Qu(e));
  }
  function El(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yh = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function qo(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Yh.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Xo(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(x(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var a in t) ((l = t[a]), t.hasOwnProperty(a) && n[a] !== l && qo(e, a, l));
    } else for (var u in t) t.hasOwnProperty(u) && qo(e, u, t[u]);
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
  var Gh = new Map([
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
    Vh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yi(e) {
    return Vh.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Jt() {}
  var Fu = null;
  function $u(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Tl = null,
    bl = null;
  function Qo(e) {
    var t = yl(e);
    if (t && (e = t.stateNode)) {
      var n = e[rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Zu(
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
              n = n.querySelectorAll('input[name="' + At('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[rt] || null;
                if (!a) throw Error(x(90));
                Zu(
                  l,
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
            for (t = 0; t < n.length; t++) ((l = n[t]), l.form === e.form && jo(l));
          }
          break e;
        case 'textarea':
          Go(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && xl(e, !!n.multiple, t, !1));
      }
    }
  }
  var ku = !1;
  function Zo(e, t, n) {
    if (ku) return e(t, n);
    ku = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((ku = !1),
        (Tl !== null || bl !== null) &&
          (au(), Tl && ((t = Tl), (e = bl), (bl = Tl = null), Qo(t), e)))
      )
        for (t = 0; t < e.length; t++) Qo(e[t]);
    }
  }
  function oa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[rt] || null;
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
    if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
    return n;
  }
  var Ft = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Wu = !1;
  if (Ft)
    try {
      var ca = {};
      (Object.defineProperty(ca, 'passive', {
        get: function () {
          Wu = !0;
        },
      }),
        window.addEventListener('test', ca, ca),
        window.removeEventListener('test', ca, ca));
    } catch {
      Wu = !1;
    }
  var yn = null,
    Pu = null,
    pi = null;
  function Ko() {
    if (pi) return pi;
    var e,
      t = Pu,
      n = t.length,
      l,
      a = 'value' in yn ? yn.value : yn.textContent,
      u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var S = n - e;
    for (l = 1; l <= S && t[n - l] === a[u - l]; l++);
    return (pi = a.slice(e, 1 < l ? 1 - l : void 0));
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
  function Jo() {
    return !1;
  }
  function st(e) {
    function t(n, l, a, u, S) {
      ((this._reactName = n),
        (this._targetInst = a),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = S),
        (this.currentTarget = null));
      for (var C in e) e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(u) : u[C]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? xi
          : Jo),
        (this.isPropagationStopped = Jo),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = xi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = xi));
        },
        persist: function () {},
        isPersistent: xi,
      }),
      t
    );
  }
  var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ei = st(Zn),
    fa = g({}, Zn, { view: 0, detail: 0 }),
    qh = st(fa),
    Iu,
    er,
    da,
    Ti = g({}, fa, {
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
      getModifierState: nr,
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
          : (e !== da &&
              (da && e.type === 'mousemove'
                ? ((Iu = e.screenX - da.screenX), (er = e.screenY - da.screenY))
                : (er = Iu = 0),
              (da = e)),
            Iu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : er;
      },
    }),
    Fo = st(Ti),
    Xh = g({}, Ti, { dataTransfer: 0 }),
    Qh = st(Xh),
    Zh = g({}, fa, { relatedTarget: 0 }),
    tr = st(Zh),
    Kh = g({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jh = st(Kh),
    Fh = g({}, Zn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $h = st(Fh),
    kh = g({}, Zn, { data: 0 }),
    $o = st(kh),
    Wh = {
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
    Ph = {
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
    Ih = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function ev(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ih[e]) ? !!t[e] : !1;
  }
  function nr() {
    return ev;
  }
  var tv = g({}, fa, {
      key: function (e) {
        if (e.key) {
          var t = Wh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Si(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Ph[e.keyCode] || 'Unidentified'
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
      getModifierState: nr,
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
    nv = st(tv),
    lv = g({}, Ti, {
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
    ko = st(lv),
    av = g({}, fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nr,
    }),
    iv = st(av),
    uv = g({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rv = st(uv),
    sv = g({}, Ti, {
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
    ov = st(sv),
    cv = g({}, Zn, { newState: 0, oldState: 0 }),
    fv = st(cv),
    dv = [9, 13, 27, 32],
    lr = Ft && 'CompositionEvent' in window,
    ma = null;
  Ft && 'documentMode' in document && (ma = document.documentMode);
  var mv = Ft && 'TextEvent' in window && !ma,
    Wo = Ft && (!lr || (ma && 8 < ma && 11 >= ma)),
    Po = ' ',
    Io = !1;
  function ec(e, t) {
    switch (e) {
      case 'keyup':
        return dv.indexOf(t.keyCode) !== -1;
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
  function tc(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Rl = !1;
  function hv(e, t) {
    switch (e) {
      case 'compositionend':
        return tc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Io = !0), Po);
      case 'textInput':
        return ((e = t.data), e === Po && Io ? null : e);
      default:
        return null;
    }
  }
  function vv(e, t) {
    if (Rl)
      return e === 'compositionend' || (!lr && ec(e, t))
        ? ((e = Ko()), (pi = Pu = yn = null), (Rl = !1), e)
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
        return Wo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var gv = {
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
  function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!gv[e.type] : t === 'textarea';
  }
  function lc(e, t, n, l) {
    (Tl ? (bl ? bl.push(l) : (bl = [l])) : (Tl = l),
      (t = fu(t, 'onChange')),
      0 < t.length &&
        ((n = new Ei('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t })));
  }
  var ha = null,
    va = null;
  function yv(e) {
    Gd(e, 0);
  }
  function bi(e) {
    var t = sa(e);
    if (jo(t)) return e;
  }
  function ac(e, t) {
    if (e === 'change') return t;
  }
  var ic = !1;
  if (Ft) {
    var ar;
    if (Ft) {
      var ir = 'oninput' in document;
      if (!ir) {
        var uc = document.createElement('div');
        (uc.setAttribute('oninput', 'return;'), (ir = typeof uc.oninput == 'function'));
      }
      ar = ir;
    } else ar = !1;
    ic = ar && (!document.documentMode || 9 < document.documentMode);
  }
  function rc() {
    ha && (ha.detachEvent('onpropertychange', sc), (va = ha = null));
  }
  function sc(e) {
    if (e.propertyName === 'value' && bi(va)) {
      var t = [];
      (lc(t, va, e, $u(e)), Zo(yv, t));
    }
  }
  function pv(e, t, n) {
    e === 'focusin'
      ? (rc(), (ha = t), (va = n), ha.attachEvent('onpropertychange', sc))
      : e === 'focusout' && rc();
  }
  function Sv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bi(va);
  }
  function xv(e, t) {
    if (e === 'click') return bi(t);
  }
  function Ev(e, t) {
    if (e === 'input' || e === 'change') return bi(t);
  }
  function Tv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == 'function' ? Object.is : Tv;
  function ga(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!vt.call(t, a) || !pt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function oc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function cc(e, t) {
    var n = oc(e);
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
      n = oc(n);
    }
  }
  function fc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function dc(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gi(e.document);
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
  var bv = Ft && 'documentMode' in document && 11 >= document.documentMode,
    Cl = null,
    rr = null,
    ya = null,
    sr = !1;
  function mc(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sr ||
      Cl == null ||
      Cl !== gi(l) ||
      ((l = Cl),
      'selectionStart' in l && ur(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ya && ga(ya, l)) ||
        ((ya = l),
        (l = fu(rr, 'onSelect')),
        0 < l.length &&
          ((t = new Ei('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Cl))));
  }
  function Kn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Al = {
      animationend: Kn('Animation', 'AnimationEnd'),
      animationiteration: Kn('Animation', 'AnimationIteration'),
      animationstart: Kn('Animation', 'AnimationStart'),
      transitionrun: Kn('Transition', 'TransitionRun'),
      transitionstart: Kn('Transition', 'TransitionStart'),
      transitioncancel: Kn('Transition', 'TransitionCancel'),
      transitionend: Kn('Transition', 'TransitionEnd'),
    },
    or = {},
    hc = {};
  Ft &&
    ((hc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Al.animationend.animation,
      delete Al.animationiteration.animation,
      delete Al.animationstart.animation),
    'TransitionEvent' in window || delete Al.transitionend.transition);
  function Jn(e) {
    if (or[e]) return or[e];
    if (!Al[e]) return e;
    var t = Al[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in hc) return (or[e] = t[n]);
    return e;
  }
  var vc = Jn('animationend'),
    gc = Jn('animationiteration'),
    yc = Jn('animationstart'),
    Rv = Jn('transitionrun'),
    Cv = Jn('transitionstart'),
    Av = Jn('transitioncancel'),
    pc = Jn('transitionend'),
    Sc = new Map(),
    cr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  cr.push('scrollEnd');
  function Ht(e, t) {
    (Sc.set(e, t), Qn(t, [e]));
  }
  var Ri =
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
    Mt = [],
    Ml = 0,
    fr = 0;
  function Ci() {
    for (var e = Ml, t = (fr = Ml = 0); t < e; ) {
      var n = Mt[t];
      Mt[t++] = null;
      var l = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var u = Mt[t];
      if (((Mt[t++] = null), l !== null && a !== null)) {
        var S = l.pending;
        (S === null ? (a.next = a) : ((a.next = S.next), (S.next = a)), (l.pending = a));
      }
      u !== 0 && xc(n, a, u);
    }
  }
  function Ai(e, t, n, l) {
    ((Mt[Ml++] = e),
      (Mt[Ml++] = t),
      (Mt[Ml++] = n),
      (Mt[Ml++] = l),
      (fr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function dr(e, t, n, l) {
    return (Ai(e, t, n, l), Mi(e));
  }
  function Fn(e, t) {
    return (Ai(e, null, null, t), Mi(e));
  }
  function xc(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      ((u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        a &&
          t !== null &&
          ((a = 31 - yt(n)),
          (e = u.hiddenUpdates),
          (l = e[a]),
          l === null ? (e[a] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Mi(e) {
    if (50 < Ya) throw ((Ya = 0), (Es = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var zl = {};
  function Mv(e, t, n, l) {
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
  function St(e, t, n, l) {
    return new Mv(e, t, n, l);
  }
  function mr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function $t(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = St(e.tag, t, e.key, e.mode)),
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
  function Ec(e, t) {
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
  function zi(e, t, n, l, a, u) {
    var S = 0;
    if (((l = e), typeof e == 'function')) mr(e) && (S = 1);
    else if (typeof e == 'string')
      S = B0(e, n, le.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case w:
          return ((e = St(31, n, t, a)), (e.elementType = w), (e.lanes = u), e);
        case v:
          return $n(n.children, a, u, t);
        case E:
          ((S = 8), (a |= 24));
          break;
        case A:
          return ((e = St(12, n, t, a | 2)), (e.elementType = A), (e.lanes = u), e);
        case T:
          return ((e = St(13, n, t, a)), (e.elementType = T), (e.lanes = u), e);
        case M:
          return ((e = St(19, n, t, a)), (e.elementType = M), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case U:
                S = 10;
                break e;
              case O:
                S = 9;
                break e;
              case _:
                S = 11;
                break e;
              case z:
                S = 14;
                break e;
              case D:
                ((S = 16), (l = null));
                break e;
            }
          ((S = 29), (n = Error(x(130, e === null ? 'null' : typeof e, ''))), (l = null));
      }
    return ((t = St(S, n, t, a)), (t.elementType = e), (t.type = l), (t.lanes = u), t);
  }
  function $n(e, t, n, l) {
    return ((e = St(7, e, l, t)), (e.lanes = n), e);
  }
  function hr(e, t, n) {
    return ((e = St(6, e, null, t)), (e.lanes = n), e);
  }
  function Tc(e) {
    var t = St(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function vr(e, t, n) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var bc = new WeakMap();
  function zt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = bc.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: fl(t) }), bc.set(e, t), t);
    }
    return { value: e, source: t, stack: fl(t) };
  }
  var Dl = [],
    Ol = 0,
    Di = null,
    pa = 0,
    Dt = [],
    Ot = 0,
    pn = null,
    Vt = 1,
    qt = '';
  function kt(e, t) {
    ((Dl[Ol++] = pa), (Dl[Ol++] = Di), (Di = e), (pa = t));
  }
  function Rc(e, t, n) {
    ((Dt[Ot++] = Vt), (Dt[Ot++] = qt), (Dt[Ot++] = pn), (pn = e));
    var l = Vt;
    e = qt;
    var a = 32 - yt(l) - 1;
    ((l &= ~(1 << a)), (n += 1));
    var u = 32 - yt(t) + a;
    if (30 < u) {
      var S = a - (a % 5);
      ((u = (l & ((1 << S) - 1)).toString(32)),
        (l >>= S),
        (a -= S),
        (Vt = (1 << (32 - yt(t) + a)) | (n << a) | l),
        (qt = u + e));
    } else ((Vt = (1 << u) | (n << a) | l), (qt = e));
  }
  function gr(e) {
    e.return !== null && (kt(e, 1), Rc(e, 1, 0));
  }
  function yr(e) {
    for (; e === Di; ) ((Di = Dl[--Ol]), (Dl[Ol] = null), (pa = Dl[--Ol]), (Dl[Ol] = null));
    for (; e === pn; )
      ((pn = Dt[--Ot]),
        (Dt[Ot] = null),
        (qt = Dt[--Ot]),
        (Dt[Ot] = null),
        (Vt = Dt[--Ot]),
        (Dt[Ot] = null));
  }
  function Cc(e, t) {
    ((Dt[Ot++] = Vt), (Dt[Ot++] = qt), (Dt[Ot++] = pn), (Vt = t.id), (qt = t.overflow), (pn = e));
  }
  var et = null,
    Le = null,
    be = !1,
    Sn = null,
    Ut = !1,
    pr = Error(x(519));
  function xn(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Sa(zt(t, e)), pr);
  }
  function Ac(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Ie] = e), (t[rt] = l), n)) {
      case 'dialog':
        (xe('cancel', t), xe('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        xe('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Va.length; n++) xe(Va[n], t);
        break;
      case 'source':
        xe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (xe('error', t), xe('load', t));
        break;
      case 'details':
        xe('toggle', t);
        break;
      case 'input':
        (xe('invalid', t),
          Yo(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        xe('invalid', t);
        break;
      case 'textarea':
        (xe('invalid', t), Vo(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      Qd(t.textContent, n)
        ? (l.popover != null && (xe('beforetoggle', t), xe('toggle', t)),
          l.onScroll != null && xe('scroll', t),
          l.onScrollEnd != null && xe('scrollend', t),
          l.onClick != null && (t.onclick = Jt),
          (t = !0))
        : (t = !1),
      t || xn(e, !0));
  }
  function Mc(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Ul(e) {
    if (e !== et) return !1;
    if (!be) return (Mc(e), (be = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || Hs(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && xn(e),
      Mc(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Le = Id(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Le = Id(e);
    } else
      t === 27
        ? ((t = Le), Nn(e.type) ? ((e = Vs), (Vs = null), (Le = e)) : (Le = t))
        : (Le = et ? wt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function kn() {
    ((Le = et = null), (be = !1));
  }
  function Sr() {
    var e = Sn;
    return (e !== null && (dt === null ? (dt = e) : dt.push.apply(dt, e), (Sn = null)), e);
  }
  function Sa(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
  }
  var xr = H(null),
    Wn = null,
    Wt = null;
  function En(e, t, n) {
    (W(xr, t._currentValue), (t._currentValue = n));
  }
  function Pt(e) {
    ((e._currentValue = xr.current), $(xr));
  }
  function Er(e, t, n) {
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
  function Tr(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var S = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var C = u;
          u = a;
          for (var N = 0; N < t.length; N++)
            if (C.context === t[N]) {
              ((u.lanes |= n),
                (C = u.alternate),
                C !== null && (C.lanes |= n),
                Er(u.return, n, e),
                l || (S = null));
              break e;
            }
          u = C.next;
        }
      } else if (a.tag === 18) {
        if (((S = a.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Er(S, n, e), (S = null));
      } else S = a.child;
      if (S !== null) S.return = a;
      else
        for (S = a; S !== null; ) {
          if (S === e) {
            S = null;
            break;
          }
          if (((a = S.sibling), a !== null)) {
            ((a.return = S.return), (S = a));
            break;
          }
          S = S.return;
        }
      a = S;
    }
  }
  function Bl(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var S = a.alternate;
        if (S === null) throw Error(x(387));
        if (((S = S.memoizedProps), S !== null)) {
          var C = a.type;
          pt(a.pendingProps.value, S.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (a === re.current) {
        if (((S = a.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Ka) : (e = [Ka]));
      }
      a = a.return;
    }
    (e !== null && Tr(t, e, n, l), (t.flags |= 262144));
  }
  function Oi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Pn(e) {
    ((Wn = e), (Wt = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function tt(e) {
    return zc(Wn, e);
  }
  function Ui(e, t) {
    return (Wn === null && Pn(e), zc(e, t));
  }
  function zc(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Wt === null)) {
      if (e === null) throw Error(x(308));
      ((Wt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Wt = Wt.next = t;
    return n;
  }
  var zv =
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
    Dv = c.unstable_scheduleCallback,
    Ov = c.unstable_NormalPriority,
    Ze = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function br() {
    return { controller: new zv(), data: new Map(), refCount: 0 };
  }
  function xa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Dv(Ov, function () {
          e.controller.abort();
        }));
  }
  var Ea = null,
    Rr = 0,
    wl = 0,
    Nl = null;
  function Uv(e, t) {
    if (Ea === null) {
      var n = (Ea = []);
      ((Rr = 0),
        (wl = Ms()),
        (Nl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Rr++, t.then(Dc, Dc), t);
  }
  function Dc() {
    if (--Rr === 0 && Ea !== null) {
      Nl !== null && (Nl.status = 'fulfilled');
      var e = Ea;
      ((Ea = null), (wl = 0), (Nl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Bv(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          n.push(a);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var a = 0; a < n.length; a++) (0, n[a])(t);
        },
        function (a) {
          for (l.status = 'rejected', l.reason = a, a = 0; a < n.length; a++) (0, n[a])(void 0);
        }
      ),
      l
    );
  }
  var Oc = V.S;
  V.S = function (e, t) {
    ((hd = at()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Uv(e, t),
      Oc !== null && Oc(e, t));
  };
  var In = H(null);
  function Cr() {
    var e = In.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function Bi(e, t) {
    t === null ? W(In, In.current) : W(In, t.pool);
  }
  function Uc() {
    var e = Cr();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var _l = Error(x(460)),
    Ar = Error(x(474)),
    wi = Error(x(542)),
    Ni = { then: function () {} };
  function Bc(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function wc(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Jt, Jt), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), _c(e), e);
      default:
        if (typeof t.status == 'string') t.then(Jt, Jt);
        else {
          if (((e = Ne), e !== null && 100 < e.shellSuspendCounter)) throw Error(x(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var a = t;
                  ((a.status = 'fulfilled'), (a.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var a = t;
                  ((a.status = 'rejected'), (a.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), _c(e), e);
        }
        throw ((tl = t), _l);
    }
  }
  function el(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((tl = n), _l) : n;
    }
  }
  var tl = null;
  function Nc() {
    if (tl === null) throw Error(x(459));
    var e = tl;
    return ((tl = null), e);
  }
  function _c(e) {
    if (e === _l || e === wi) throw Error(x(483));
  }
  var Hl = null,
    Ta = 0;
  function _i(e) {
    var t = Ta;
    return ((Ta += 1), Hl === null && (Hl = []), wc(Hl, e, t));
  }
  function ba(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Hi(e, t) {
    throw t.$$typeof === y
      ? Error(x(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          x(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function Hc(e) {
    function t(q, G) {
      if (e) {
        var X = q.deletions;
        X === null ? ((q.deletions = [G]), (q.flags |= 16)) : X.push(G);
      }
    }
    function n(q, G) {
      if (!e) return null;
      for (; G !== null; ) (t(q, G), (G = G.sibling));
      return null;
    }
    function l(q) {
      for (var G = new Map(); q !== null; )
        (q.key !== null ? G.set(q.key, q) : G.set(q.index, q), (q = q.sibling));
      return G;
    }
    function a(q, G) {
      return ((q = $t(q, G)), (q.index = 0), (q.sibling = null), q);
    }
    function u(q, G, X) {
      return (
        (q.index = X),
        e
          ? ((X = q.alternate),
            X !== null
              ? ((X = X.index), X < G ? ((q.flags |= 67108866), G) : X)
              : ((q.flags |= 67108866), G))
          : ((q.flags |= 1048576), G)
      );
    }
    function S(q) {
      return (e && q.alternate === null && (q.flags |= 67108866), q);
    }
    function C(q, G, X, P) {
      return G === null || G.tag !== 6
        ? ((G = hr(X, q.mode, P)), (G.return = q), G)
        : ((G = a(G, X)), (G.return = q), G);
    }
    function N(q, G, X, P) {
      var fe = X.type;
      return fe === v
        ? k(q, G, X.props.children, P, X.key)
        : G !== null &&
            (G.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === D && el(fe) === G.type))
          ? ((G = a(G, X.props)), ba(G, X), (G.return = q), G)
          : ((G = zi(X.type, X.key, X.props, null, q.mode, P)), ba(G, X), (G.return = q), G);
    }
    function Q(q, G, X, P) {
      return G === null ||
        G.tag !== 4 ||
        G.stateNode.containerInfo !== X.containerInfo ||
        G.stateNode.implementation !== X.implementation
        ? ((G = vr(X, q.mode, P)), (G.return = q), G)
        : ((G = a(G, X.children || [])), (G.return = q), G);
    }
    function k(q, G, X, P, fe) {
      return G === null || G.tag !== 7
        ? ((G = $n(X, q.mode, P, fe)), (G.return = q), G)
        : ((G = a(G, X)), (G.return = q), G);
    }
    function ee(q, G, X) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return ((G = hr('' + G, q.mode, X)), (G.return = q), G);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case r:
            return ((X = zi(G.type, G.key, G.props, null, q.mode, X)), ba(X, G), (X.return = q), X);
          case p:
            return ((G = vr(G, q.mode, X)), (G.return = q), G);
          case D:
            return ((G = el(G)), ee(q, G, X));
        }
        if (I(G) || L(G)) return ((G = $n(G, q.mode, X, null)), (G.return = q), G);
        if (typeof G.then == 'function') return ee(q, _i(G), X);
        if (G.$$typeof === U) return ee(q, Ui(q, G), X);
        Hi(q, G);
      }
      return null;
    }
    function Z(q, G, X, P) {
      var fe = G !== null ? G.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : C(q, G, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? N(q, G, X, P) : null;
          case p:
            return X.key === fe ? Q(q, G, X, P) : null;
          case D:
            return ((X = el(X)), Z(q, G, X, P));
        }
        if (I(X) || L(X)) return fe !== null ? null : k(q, G, X, P, null);
        if (typeof X.then == 'function') return Z(q, G, _i(X), P);
        if (X.$$typeof === U) return Z(q, G, Ui(q, X), P);
        Hi(q, X);
      }
      return null;
    }
    function J(q, G, X, P, fe) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return ((q = q.get(X) || null), C(G, q, '' + P, fe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((q = q.get(P.key === null ? X : P.key) || null), N(G, q, P, fe));
          case p:
            return ((q = q.get(P.key === null ? X : P.key) || null), Q(G, q, P, fe));
          case D:
            return ((P = el(P)), J(q, G, X, P, fe));
        }
        if (I(P) || L(P)) return ((q = q.get(X) || null), k(G, q, P, fe, null));
        if (typeof P.then == 'function') return J(q, G, X, _i(P), fe);
        if (P.$$typeof === U) return J(q, G, X, Ui(G, P), fe);
        Hi(G, P);
      }
      return null;
    }
    function se(q, G, X, P) {
      for (
        var fe = null, Re = null, ce = G, pe = (G = 0), Te = null;
        ce !== null && pe < X.length;
        pe++
      ) {
        ce.index > pe ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var Ce = Z(q, ce, X[pe], P);
        if (Ce === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && Ce.alternate === null && t(q, ce),
          (G = u(Ce, G, pe)),
          Re === null ? (fe = Ce) : (Re.sibling = Ce),
          (Re = Ce),
          (ce = Te));
      }
      if (pe === X.length) return (n(q, ce), be && kt(q, pe), fe);
      if (ce === null) {
        for (; pe < X.length; pe++)
          ((ce = ee(q, X[pe], P)),
            ce !== null &&
              ((G = u(ce, G, pe)), Re === null ? (fe = ce) : (Re.sibling = ce), (Re = ce)));
        return (be && kt(q, pe), fe);
      }
      for (ce = l(ce); pe < X.length; pe++)
        ((Te = J(ce, q, pe, X[pe], P)),
          Te !== null &&
            (e && Te.alternate !== null && ce.delete(Te.key === null ? pe : Te.key),
            (G = u(Te, G, pe)),
            Re === null ? (fe = Te) : (Re.sibling = Te),
            (Re = Te)));
      return (
        e &&
          ce.forEach(function (Yn) {
            return t(q, Yn);
          }),
        be && kt(q, pe),
        fe
      );
    }
    function me(q, G, X, P) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, Re = null, ce = G, pe = (G = 0), Te = null, Ce = X.next();
        ce !== null && !Ce.done;
        pe++, Ce = X.next()
      ) {
        ce.index > pe ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var Yn = Z(q, ce, Ce.value, P);
        if (Yn === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && Yn.alternate === null && t(q, ce),
          (G = u(Yn, G, pe)),
          Re === null ? (fe = Yn) : (Re.sibling = Yn),
          (Re = Yn),
          (ce = Te));
      }
      if (Ce.done) return (n(q, ce), be && kt(q, pe), fe);
      if (ce === null) {
        for (; !Ce.done; pe++, Ce = X.next())
          ((Ce = ee(q, Ce.value, P)),
            Ce !== null &&
              ((G = u(Ce, G, pe)), Re === null ? (fe = Ce) : (Re.sibling = Ce), (Re = Ce)));
        return (be && kt(q, pe), fe);
      }
      for (ce = l(ce); !Ce.done; pe++, Ce = X.next())
        ((Ce = J(ce, q, pe, Ce.value, P)),
          Ce !== null &&
            (e && Ce.alternate !== null && ce.delete(Ce.key === null ? pe : Ce.key),
            (G = u(Ce, G, pe)),
            Re === null ? (fe = Ce) : (Re.sibling = Ce),
            (Re = Ce)));
      return (
        e &&
          ce.forEach(function (X0) {
            return t(q, X0);
          }),
        be && kt(q, pe),
        fe
      );
    }
    function we(q, G, X, P) {
      if (
        (typeof X == 'object' &&
          X !== null &&
          X.type === v &&
          X.key === null &&
          (X = X.props.children),
        typeof X == 'object' && X !== null)
      ) {
        switch (X.$$typeof) {
          case r:
            e: {
              for (var fe = X.key; G !== null; ) {
                if (G.key === fe) {
                  if (((fe = X.type), fe === v)) {
                    if (G.tag === 7) {
                      (n(q, G.sibling), (P = a(G, X.props.children)), (P.return = q), (q = P));
                      break e;
                    }
                  } else if (
                    G.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === D && el(fe) === G.type)
                  ) {
                    (n(q, G.sibling), (P = a(G, X.props)), ba(P, X), (P.return = q), (q = P));
                    break e;
                  }
                  n(q, G);
                  break;
                } else t(q, G);
                G = G.sibling;
              }
              X.type === v
                ? ((P = $n(X.props.children, q.mode, P, X.key)), (P.return = q), (q = P))
                : ((P = zi(X.type, X.key, X.props, null, q.mode, P)),
                  ba(P, X),
                  (P.return = q),
                  (q = P));
            }
            return S(q);
          case p:
            e: {
              for (fe = X.key; G !== null; ) {
                if (G.key === fe)
                  if (
                    G.tag === 4 &&
                    G.stateNode.containerInfo === X.containerInfo &&
                    G.stateNode.implementation === X.implementation
                  ) {
                    (n(q, G.sibling), (P = a(G, X.children || [])), (P.return = q), (q = P));
                    break e;
                  } else {
                    n(q, G);
                    break;
                  }
                else t(q, G);
                G = G.sibling;
              }
              ((P = vr(X, q.mode, P)), (P.return = q), (q = P));
            }
            return S(q);
          case D:
            return ((X = el(X)), we(q, G, X, P));
        }
        if (I(X)) return se(q, G, X, P);
        if (L(X)) {
          if (((fe = L(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(q, G, X, P));
        }
        if (typeof X.then == 'function') return we(q, G, _i(X), P);
        if (X.$$typeof === U) return we(q, G, Ui(q, X), P);
        Hi(q, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          G !== null && G.tag === 6
            ? (n(q, G.sibling), (P = a(G, X)), (P.return = q), (q = P))
            : (n(q, G), (P = hr(X, q.mode, P)), (P.return = q), (q = P)),
          S(q))
        : n(q, G);
    }
    return function (q, G, X, P) {
      try {
        Ta = 0;
        var fe = we(q, G, X, P);
        return ((Hl = null), fe);
      } catch (ce) {
        if (ce === _l || ce === wi) throw ce;
        var Re = St(29, ce, null, q.mode);
        return ((Re.lanes = P), (Re.return = q), Re);
      } finally {
      }
    };
  }
  var nl = Hc(!0),
    Lc = Hc(!1),
    Tn = !1;
  function Mr(e) {
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
  function bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ae & 2) !== 0)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        (t = Mi(e)),
        xc(e, null, n),
        t
      );
    }
    return (Ai(e, l, t, n), Mi(e));
  }
  function Ra(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), zo(e, n));
    }
  }
  function Dr(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var a = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var S = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (a = u = S) : (u = u.next = S), (n = n.next));
        } while (n !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
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
  var Or = !1;
  function Ca() {
    if (Or) {
      var e = Nl;
      if (e !== null) throw e;
    }
  }
  function Aa(e, t, n, l) {
    Or = !1;
    var a = e.updateQueue;
    Tn = !1;
    var u = a.firstBaseUpdate,
      S = a.lastBaseUpdate,
      C = a.shared.pending;
    if (C !== null) {
      a.shared.pending = null;
      var N = C,
        Q = N.next;
      ((N.next = null), S === null ? (u = Q) : (S.next = Q), (S = N));
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (C = k.lastBaseUpdate),
        C !== S && (C === null ? (k.firstBaseUpdate = Q) : (C.next = Q), (k.lastBaseUpdate = N)));
    }
    if (u !== null) {
      var ee = a.baseState;
      ((S = 0), (k = Q = N = null), (C = u));
      do {
        var Z = C.lane & -536870913,
          J = Z !== C.lane;
        if (J ? (Ee & Z) === Z : (l & Z) === Z) {
          (Z !== 0 && Z === wl && (Or = !0),
            k !== null &&
              (k = k.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }));
          e: {
            var se = e,
              me = C;
            Z = t;
            var we = n;
            switch (me.tag) {
              case 1:
                if (((se = me.payload), typeof se == 'function')) {
                  ee = se.call(we, ee, Z);
                  break e;
                }
                ee = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = me.payload),
                  (Z = typeof se == 'function' ? se.call(we, ee, Z) : se),
                  Z == null)
                )
                  break e;
                ee = g({}, ee, Z);
                break e;
              case 2:
                Tn = !0;
            }
          }
          ((Z = C.callback),
            Z !== null &&
              ((e.flags |= 64),
              J && (e.flags |= 8192),
              (J = a.callbacks),
              J === null ? (a.callbacks = [Z]) : J.push(Z)));
        } else
          ((J = { lane: Z, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            k === null ? ((Q = k = J), (N = ee)) : (k = k.next = J),
            (S |= Z));
        if (((C = C.next), C === null)) {
          if (((C = a.shared.pending), C === null)) break;
          ((J = C),
            (C = J.next),
            (J.next = null),
            (a.lastBaseUpdate = J),
            (a.shared.pending = null));
        }
      } while (!0);
      (k === null && (N = ee),
        (a.baseState = N),
        (a.firstBaseUpdate = Q),
        (a.lastBaseUpdate = k),
        u === null && (a.shared.lanes = 0),
        (Dn |= S),
        (e.lanes = S),
        (e.memoizedState = ee));
    }
  }
  function jc(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function Yc(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) jc(n[e], t);
  }
  var Ll = H(null),
    Li = H(0);
  function Gc(e, t) {
    ((e = sn), W(Li, e), W(Ll, t), (sn = e | t.baseLanes));
  }
  function Ur() {
    (W(Li, sn), W(Ll, Ll.current));
  }
  function Br() {
    ((sn = Li.current), $(Ll), $(Li));
  }
  var xt = H(null),
    Bt = null;
  function Cn(e) {
    var t = e.alternate;
    (W(Xe, Xe.current & 1),
      W(xt, e),
      Bt === null && (t === null || Ll.current !== null || t.memoizedState !== null) && (Bt = e));
  }
  function wr(e) {
    (W(Xe, Xe.current), W(xt, e), Bt === null && (Bt = e));
  }
  function Vc(e) {
    e.tag === 22 ? (W(Xe, Xe.current), W(xt, e), Bt === null && (Bt = e)) : An();
  }
  function An() {
    (W(Xe, Xe.current), W(xt, xt.current));
  }
  function Et(e) {
    ($(xt), Bt === e && (Bt = null), $(Xe));
  }
  var Xe = H(0);
  function ji(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Ys(n) || Gs(n))) return t;
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
  var It = 0,
    ye = null,
    Ue = null,
    Ke = null,
    Yi = !1,
    jl = !1,
    ll = !1,
    Gi = 0,
    Ma = 0,
    Yl = null,
    wv = 0;
  function Ve() {
    throw Error(x(321));
  }
  function Nr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function _r(e, t, n, l, a, u) {
    return (
      (It = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Cf : kr),
      (ll = !1),
      (u = n(l, a)),
      (ll = !1),
      jl && (u = Xc(t, n, l, a)),
      qc(e),
      u
    );
  }
  function qc(e) {
    V.H = Oa;
    var t = Ue !== null && Ue.next !== null;
    if (((It = 0), (Ke = Ue = ye = null), (Yi = !1), (Ma = 0), (Yl = null), t)) throw Error(x(300));
    e === null || Je || ((e = e.dependencies), e !== null && Oi(e) && (Je = !0));
  }
  function Xc(e, t, n, l) {
    ye = e;
    var a = 0;
    do {
      if ((jl && (Yl = null), (Ma = 0), (jl = !1), 25 <= a)) throw Error(x(301));
      if (((a += 1), (Ke = Ue = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((V.H = Af), (u = t(n, l)));
    } while (jl);
    return u;
  }
  function Nv() {
    var e = V.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? za(t) : t),
      (e = e.useState()[0]),
      (Ue !== null ? Ue.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function Hr() {
    var e = Gi !== 0;
    return ((Gi = 0), e);
  }
  function Lr(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function jr(e) {
    if (Yi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Yi = !1;
    }
    ((It = 0), (Ke = Ue = ye = null), (jl = !1), (Ma = Gi = 0), (Yl = null));
  }
  function ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ke === null ? (ye.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke);
  }
  function Qe() {
    if (Ue === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Ke === null ? ye.memoizedState : Ke.next;
    if (t !== null) ((Ke = t), (Ue = e));
    else {
      if (e === null) throw ye.alternate === null ? Error(x(467)) : Error(x(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        Ke === null ? (ye.memoizedState = Ke = e) : (Ke = Ke.next = e));
    }
    return Ke;
  }
  function Vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function za(e) {
    var t = Ma;
    return (
      (Ma += 1),
      Yl === null && (Yl = []),
      (e = wc(Yl, e, t)),
      (t = ye),
      (Ke === null ? t.memoizedState : Ke.next) === null &&
        ((t = t.alternate), (V.H = t === null || t.memoizedState === null ? Cf : kr)),
      e
    );
  }
  function qi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return za(e);
      if (e.$$typeof === U) return tt(e);
    }
    throw Error(x(438, String(e)));
  }
  function Yr(e) {
    var t = null,
      n = ye.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ye.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Vi()), (ye.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = B;
    return (t.index++, n);
  }
  function en(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Xi(e) {
    var t = Qe();
    return Gr(t, Ue, e);
  }
  function Gr(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(x(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var S = a.next;
        ((a.next = u.next), (u.next = S));
      }
      ((t.baseQueue = a = u), (l.pending = null));
    }
    if (((u = e.baseState), a === null)) e.memoizedState = u;
    else {
      t = a.next;
      var C = (S = null),
        N = null,
        Q = t,
        k = !1;
      do {
        var ee = Q.lane & -536870913;
        if (ee !== Q.lane ? (Ee & ee) === ee : (It & ee) === ee) {
          var Z = Q.revertLane;
          if (Z === 0)
            (N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Q.action,
                  hasEagerState: Q.hasEagerState,
                  eagerState: Q.eagerState,
                  next: null,
                }),
              ee === wl && (k = !0));
          else if ((It & Z) === Z) {
            ((Q = Q.next), Z === wl && (k = !0));
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
              N === null ? ((C = N = ee), (S = u)) : (N = N.next = ee),
              (ye.lanes |= Z),
              (Dn |= Z));
          ((ee = Q.action), ll && n(u, ee), (u = Q.hasEagerState ? Q.eagerState : n(u, ee)));
        } else
          ((Z = {
            lane: ee,
            revertLane: Q.revertLane,
            gesture: Q.gesture,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null,
          }),
            N === null ? ((C = N = Z), (S = u)) : (N = N.next = Z),
            (ye.lanes |= ee),
            (Dn |= ee));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (N === null ? (S = u) : (N.next = C),
        !pt(u, e.memoizedState) && ((Je = !0), k && ((n = Nl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = N), (l.lastRenderedState = u));
    }
    return (a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Vr(e) {
    var t = Qe(),
      n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      a = n.pending,
      u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var S = (a = a.next);
      do ((u = e(u, S.action)), (S = S.next));
      while (S !== a);
      (pt(u, t.memoizedState) || (Je = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function Qc(e, t, n) {
    var l = ye,
      a = Qe(),
      u = be;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !pt((Ue || a).memoizedState, n);
    if (
      (S && ((a.memoizedState = n), (Je = !0)),
      (a = a.queue),
      Qr(Jc.bind(null, l, a, e), [e]),
      a.getSnapshot !== t || S || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Gl(9, { destroy: void 0 }, Kc.bind(null, l, a, n, t), null),
        Ne === null)
      )
        throw Error(x(349));
      u || (It & 127) !== 0 || Zc(l, t, n);
    }
    return n;
  }
  function Zc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = Vi()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Kc(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Fc(t) && $c(e));
  }
  function Jc(e, t, n) {
    return n(function () {
      Fc(t) && $c(e);
    });
  }
  function Fc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function $c(e) {
    var t = Fn(e, 2);
    t !== null && mt(t, e, 2);
  }
  function qr(e) {
    var t = ut();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), ll)) {
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
        lastRenderedReducer: en,
        lastRenderedState: e,
      }),
      t
    );
  }
  function kc(e, t, n, l) {
    return ((e.baseState = n), Gr(e, Ue, typeof l == 'function' ? l : en));
  }
  function _v(e, t, n, l, a) {
    if (Ki(e)) throw Error(x(485));
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
        then: function (S) {
          u.listeners.push(S);
        },
      };
      (V.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), Wc(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function Wc(e, t) {
    var n = t.action,
      l = t.payload,
      a = e.state;
    if (t.isTransition) {
      var u = V.T,
        S = {};
      V.T = S;
      try {
        var C = n(a, l),
          N = V.S;
        (N !== null && N(S, C), Pc(e, t, C));
      } catch (Q) {
        Xr(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (V.T = u));
      }
    } else
      try {
        ((u = n(a, l)), Pc(e, t, u));
      } catch (Q) {
        Xr(e, t, Q);
      }
  }
  function Pc(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Ic(e, t, l);
          },
          function (l) {
            return Xr(e, t, l);
          }
        )
      : Ic(e, t, n);
  }
  function Ic(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      ef(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Wc(e, n))));
  }
  function Xr(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), ef(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function ef(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function tf(e, t) {
    return t;
  }
  function nf(e, t) {
    if (be) {
      var n = Ne.formState;
      if (n !== null) {
        e: {
          var l = ye;
          if (be) {
            if (Le) {
              t: {
                for (var a = Le, u = Ut; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = wt(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === 'F!' || u === 'F' ? a : null));
              }
              if (a) {
                ((Le = wt(a.nextSibling)), (l = a.data === 'F!'));
                break e;
              }
            }
            xn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = ut()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tf,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Tf.bind(null, ye, l)),
      (l.dispatch = n),
      (l = qr(!1)),
      (u = $r.bind(null, ye, !1, l.queue)),
      (l = ut()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = a),
      (n = _v.bind(null, ye, a, u, n)),
      (a.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function lf(e) {
    var t = Qe();
    return af(t, Ue, e);
  }
  function af(e, t, n) {
    if (
      ((t = Gr(e, t, tf)[0]),
      (e = Xi(en)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = za(t);
      } catch (S) {
        throw S === _l ? wi : S;
      }
    else l = t;
    t = Qe();
    var a = t.queue,
      u = a.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048), Gl(9, { destroy: void 0 }, Hv.bind(null, a, n), null)),
      [l, u, e]
    );
  }
  function Hv(e, t) {
    e.action = t;
  }
  function uf(e) {
    var t = Qe(),
      n = Ue;
    if (n !== null) return af(t, n, e);
    (Qe(), (t = t.memoizedState), (n = Qe()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Gl(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = Vi()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function rf() {
    return Qe().memoizedState;
  }
  function Qi(e, t, n, l) {
    var a = ut();
    ((ye.flags |= e),
      (a.memoizedState = Gl(1 | t, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function Zi(e, t, n, l) {
    var a = Qe();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Ue !== null && l !== null && Nr(l, Ue.memoizedState.deps)
      ? (a.memoizedState = Gl(t, u, n, l))
      : ((ye.flags |= e), (a.memoizedState = Gl(1 | t, u, n, l)));
  }
  function sf(e, t) {
    Qi(8390656, 8, e, t);
  }
  function Qr(e, t) {
    Zi(2048, 8, e, t);
  }
  function Lv(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null) ((t = Vi()), (ye.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function of(e) {
    var t = Qe().memoizedState;
    return (
      Lv({ ref: t, nextImpl: e }),
      function () {
        if ((Ae & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function cf(e, t) {
    return Zi(4, 2, e, t);
  }
  function ff(e, t) {
    return Zi(4, 4, e, t);
  }
  function df(e, t) {
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
  function mf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Zi(4, 4, df.bind(null, t, e), n));
  }
  function Zr() {}
  function hf(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Nr(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function vf(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Nr(t, l[1])) return l[0];
    if (((l = e()), ll)) {
      vn(!0);
      try {
        e();
      } finally {
        vn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function Kr(e, t, n) {
    return n === void 0 || ((It & 1073741824) !== 0 && (Ee & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = gd()), (ye.lanes |= e), (Dn |= e), n);
  }
  function gf(e, t, n, l) {
    return pt(n, t)
      ? n
      : Ll.current !== null
        ? ((e = Kr(e, n, l)), pt(e, t) || (Je = !0), e)
        : (It & 42) === 0 || ((It & 1073741824) !== 0 && (Ee & 261930) === 0)
          ? ((Je = !0), (e.memoizedState = n))
          : ((e = gd()), (ye.lanes |= e), (Dn |= e), t);
  }
  function yf(e, t, n, l, a) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = V.T,
      C = {};
    ((V.T = C), $r(e, !1, t, n));
    try {
      var N = a(),
        Q = V.S;
      if (
        (Q !== null && Q(C, N), N !== null && typeof N == 'object' && typeof N.then == 'function')
      ) {
        var k = Bv(N, l);
        Da(e, t, k, Rt(e));
      } else Da(e, t, l, Rt(e));
    } catch (ee) {
      Da(e, t, { then: function () {}, status: 'rejected', reason: ee }, Rt());
    } finally {
      ((K.p = u), S !== null && C.types !== null && (S.types = C.types), (V.T = S));
    }
  }
  function jv() {}
  function Jr(e, t, n, l) {
    if (e.tag !== 5) throw Error(x(476));
    var a = pf(e).queue;
    yf(
      e,
      a,
      t,
      ae,
      n === null
        ? jv
        : function () {
            return (Sf(e), n(l));
          }
    );
  }
  function pf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: ae,
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
          lastRenderedReducer: en,
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
  function Sf(e) {
    var t = pf(e);
    (t.next === null && (t = e.alternate.memoizedState), Da(e, t.next.queue, {}, Rt()));
  }
  function Fr() {
    return tt(Ka);
  }
  function xf() {
    return Qe().memoizedState;
  }
  function Ef() {
    return Qe().memoizedState;
  }
  function Yv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Rt();
          e = bn(n);
          var l = Rn(t, e, n);
          (l !== null && (mt(l, t, n), Ra(l, t, n)), (t = { cache: br() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Gv(e, t, n) {
    var l = Rt();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ki(e) ? bf(t, n) : ((n = dr(e, t, n, l)), n !== null && (mt(n, e, l), Rf(n, t, l))));
  }
  function Tf(e, t, n) {
    var l = Rt();
    Da(e, t, n, l);
  }
  function Da(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ki(e)) bf(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var S = t.lastRenderedState,
            C = u(S, n);
          if (((a.hasEagerState = !0), (a.eagerState = C), pt(C, S)))
            return (Ai(e, t, a, 0), Ne === null && Ci(), !1);
        } catch {
        } finally {
        }
      if (((n = dr(e, t, a, l)), n !== null)) return (mt(n, e, l), Rf(n, t, l), !0);
    }
    return !1;
  }
  function $r(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Ms(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ki(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = dr(e, n, l, 2)), t !== null && mt(t, e, 2));
  }
  function Ki(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function bf(e, t) {
    jl = Yi = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Rf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), zo(e, n));
    }
  }
  var Oa = {
    readContext: tt,
    use: qi,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve,
  };
  Oa.useEffectEvent = Ve;
  var Cf = {
      readContext: tt,
      use: qi,
      useCallback: function (e, t) {
        return ((ut().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: tt,
      useEffect: sf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Qi(4194308, 4, df.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Qi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Qi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ut();
        t = t === void 0 ? null : t;
        var l = e();
        if (ll) {
          vn(!0);
          try {
            e();
          } finally {
            vn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = ut();
        if (n !== void 0) {
          var a = n(t);
          if (ll) {
            vn(!0);
            try {
              n(t);
            } finally {
              vn(!1);
            }
          }
        } else a = t;
        return (
          (l.memoizedState = l.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (l.queue = e),
          (e = e.dispatch = Gv.bind(null, ye, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ut();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = qr(e);
        var t = e.queue,
          n = Tf.bind(null, ye, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var n = ut();
        return Kr(n, e, t);
      },
      useTransition: function () {
        var e = qr(!1);
        return ((e = yf.bind(null, ye, e.queue, !0, !1)), (ut().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var l = ye,
          a = ut();
        if (be) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), Ne === null)) throw Error(x(349));
          (Ee & 127) !== 0 || Zc(l, t, n);
        }
        a.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (a.queue = u),
          sf(Jc.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          Gl(9, { destroy: void 0 }, Kc.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ut(),
          t = Ne.identifierPrefix;
        if (be) {
          var n = qt,
            l = Vt;
          ((n = (l & ~(1 << (32 - yt(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = Gi++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = wv++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Fr,
      useFormState: nf,
      useActionState: nf,
      useOptimistic: function (e) {
        var t = ut();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = $r.bind(null, ye, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: Yr,
      useCacheRefresh: function () {
        return (ut().memoizedState = Yv.bind(null, ye));
      },
      useEffectEvent: function (e) {
        var t = ut(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ae & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    kr = {
      readContext: tt,
      use: qi,
      useCallback: hf,
      useContext: tt,
      useEffect: Qr,
      useImperativeHandle: mf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: vf,
      useReducer: Xi,
      useRef: rf,
      useState: function () {
        return Xi(en);
      },
      useDebugValue: Zr,
      useDeferredValue: function (e, t) {
        var n = Qe();
        return gf(n, Ue.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Xi(en)[0],
          t = Qe().memoizedState;
        return [typeof e == 'boolean' ? e : za(e), t];
      },
      useSyncExternalStore: Qc,
      useId: xf,
      useHostTransitionStatus: Fr,
      useFormState: lf,
      useActionState: lf,
      useOptimistic: function (e, t) {
        var n = Qe();
        return kc(n, Ue, e, t);
      },
      useMemoCache: Yr,
      useCacheRefresh: Ef,
    };
  kr.useEffectEvent = of;
  var Af = {
    readContext: tt,
    use: qi,
    useCallback: hf,
    useContext: tt,
    useEffect: Qr,
    useImperativeHandle: mf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: vf,
    useReducer: Vr,
    useRef: rf,
    useState: function () {
      return Vr(en);
    },
    useDebugValue: Zr,
    useDeferredValue: function (e, t) {
      var n = Qe();
      return Ue === null ? Kr(n, e, t) : gf(n, Ue.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Vr(en)[0],
        t = Qe().memoizedState;
      return [typeof e == 'boolean' ? e : za(e), t];
    },
    useSyncExternalStore: Qc,
    useId: xf,
    useHostTransitionStatus: Fr,
    useFormState: uf,
    useActionState: uf,
    useOptimistic: function (e, t) {
      var n = Qe();
      return Ue !== null ? kc(n, Ue, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Yr,
    useCacheRefresh: Ef,
  };
  Af.useEffectEvent = of;
  function Wr(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : g({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Pr = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Rt(),
        a = bn(l);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = Rn(e, a, l)),
        t !== null && (mt(t, e, l), Ra(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Rt(),
        a = bn(l);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = Rn(e, a, l)),
        t !== null && (mt(t, e, l), Ra(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Rt(),
        l = bn(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Rn(e, l, n)),
        t !== null && (mt(t, e, n), Ra(t, e, n)));
    },
  };
  function Mf(e, t, n, l, a, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ga(n, l) || !ga(a, u)
          : !0
    );
  }
  function zf(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Pr.enqueueReplaceState(t, t.state, null));
  }
  function al(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = g({}, n));
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Df(e) {
    Ri(e);
  }
  function Of(e) {
    console.error(e);
  }
  function Uf(e) {
    Ri(e);
  }
  function Ji(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Bf(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ir(e, t, n) {
    return (
      (n = bn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ji(e, t);
      }),
      n
    );
  }
  function wf(e) {
    return ((e = bn(e)), (e.tag = 3), e);
  }
  function Nf(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          Bf(t, n, l);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Bf(t, n, l),
          typeof a != 'function' && (On === null ? (On = new Set([this])) : On.add(this)));
        var C = l.stack;
        this.componentDidCatch(l.value, { componentStack: C !== null ? C : '' });
      });
  }
  function Vv(e, t, n, l, a) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && Bl(t, n, a, !0), (n = xt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Bt === null ? iu() : n.alternate === null && qe === 0 && (qe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = a),
              l === Ni
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Rs(e, l, a)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Ni
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Rs(e, l, a)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Rs(e, l, a), iu(), !1);
    }
    if (be)
      return (
        (t = xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            l !== pr && ((e = Error(x(422), { cause: l })), Sa(zt(e, n))))
          : (l !== pr && ((t = Error(x(423), { cause: l })), Sa(zt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (l = zt(l, n)),
            (a = Ir(e.stateNode, l, a)),
            Dr(e, a),
            qe !== 4 && (qe = 2)),
        !1
      );
    var u = Error(x(520), { cause: l });
    if (((u = zt(u, n)), ja === null ? (ja = [u]) : ja.push(u), qe !== 4 && (qe = 2), t === null))
      return !0;
    ((l = zt(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = a & -a),
            (n.lanes |= e),
            (e = Ir(n.stateNode, l, e)),
            Dr(n, e),
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
                  (On === null || !On.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (a &= -a),
              (n.lanes |= a),
              (a = wf(a)),
              Nf(a, e, n, l),
              Dr(n, a),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var es = Error(x(461)),
    Je = !1;
  function nt(e, t, n, l) {
    t.child = e === null ? Lc(t, null, n, l) : nl(t, e.child, n, l);
  }
  function _f(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var S = {};
      for (var C in l) C !== 'ref' && (S[C] = l[C]);
    } else S = l;
    return (
      Pn(t),
      (l = _r(e, t, n, S, u, a)),
      (C = Hr()),
      e !== null && !Je
        ? (Lr(e, t, a), tn(e, t, a))
        : (be && C && gr(t), (t.flags |= 1), nt(e, t, l, a), t.child)
    );
  }
  function Hf(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !mr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Lf(e, t, u, l, a))
        : ((e = zi(n.type, null, l, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !ss(e, a))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ga), n(S, l) && e.ref === t.ref))
        return tn(e, t, a);
    }
    return ((t.flags |= 1), (e = $t(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Lf(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ga(u, l) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = l = u), ss(e, a))) (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), tn(e, t, a));
    }
    return ts(e, t, n, l, a);
  }
  function jf(e, t, n, l) {
    var a = l.children,
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
          for (l = t.child = e.child, a = 0; l !== null; )
            ((a = a | l.lanes | l.childLanes), (l = l.sibling));
          l = a & ~u;
        } else ((l = 0), (t.child = null));
        return Yf(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Bi(t, u !== null ? u.cachePool : null),
          u !== null ? Gc(t, u) : Ur(),
          Vc(t));
      else return ((l = t.lanes = 536870912), Yf(e, t, u !== null ? u.baseLanes | n : n, n, l));
    } else
      u !== null
        ? (Bi(t, u.cachePool), Gc(t, u), An(), (t.memoizedState = null))
        : (e !== null && Bi(t, null), Ur(), An());
    return (nt(e, t, a, n), t.child);
  }
  function Ua(e, t) {
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
  function Yf(e, t, n, l, a) {
    var u = Cr();
    return (
      (u = u === null ? null : { parent: Ze._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Bi(t, null),
      Ur(),
      Vc(t),
      e !== null && Bl(e, t, l, !0),
      (t.childLanes = a),
      null
    );
  }
  function Fi(e, t) {
    return (
      (t = ki({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Gf(e, t, n) {
    return (
      nl(t, e.child, null, n),
      (e = Fi(t, t.pendingProps)),
      (e.flags |= 2),
      Et(t),
      (t.memoizedState = null),
      e
    );
  }
  function qv(e, t, n) {
    var l = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (be) {
        if (l.mode === 'hidden') return ((e = Fi(t, l)), (t.lanes = 536870912), Ua(null, e));
        if (
          (wr(t),
          (e = Le)
            ? ((e = Pd(e, Ut)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: pn !== null ? { id: Vt, overflow: qt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Tc(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw xn(t);
        return ((t.lanes = 536870912), null);
      }
      return Fi(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((wr(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = Gf(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((Je || Bl(e, t, n, !1), (a = (n & e.childLanes) !== 0), Je || a)) {
        if (((l = Ne), l !== null && ((S = Do(l, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Fn(e, S), mt(l, e, S), es);
        (iu(), (t = Gf(e, t, n)));
      } else
        ((e = u.treeContext),
          (Le = wt(S.nextSibling)),
          (et = t),
          (be = !0),
          (Sn = null),
          (Ut = !1),
          e !== null && Cc(t, e),
          (t = Fi(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = $t(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function $i(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ts(e, t, n, l, a) {
    return (
      Pn(t),
      (n = _r(e, t, n, l, void 0, a)),
      (l = Hr()),
      e !== null && !Je
        ? (Lr(e, t, a), tn(e, t, a))
        : (be && l && gr(t), (t.flags |= 1), nt(e, t, n, a), t.child)
    );
  }
  function Vf(e, t, n, l, a, u) {
    return (
      Pn(t),
      (t.updateQueue = null),
      (n = Xc(t, l, n, a)),
      qc(e),
      (l = Hr()),
      e !== null && !Je
        ? (Lr(e, t, u), tn(e, t, u))
        : (be && l && gr(t), (t.flags |= 1), nt(e, t, n, u), t.child)
    );
  }
  function qf(e, t, n, l, a) {
    if ((Pn(t), t.stateNode === null)) {
      var u = zl,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = tt(S)),
        (u = new n(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Pr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Mr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? tt(S) : zl),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (Wr(t, n, S, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && Pr.enqueueReplaceState(u, u.state, null),
          Aa(t, l, u, a),
          Ca(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        N = al(n, C);
      u.props = N;
      var Q = u.context,
        k = n.contextType;
      ((S = zl), typeof k == 'object' && k !== null && (S = tt(k)));
      var ee = n.getDerivedStateFromProps;
      ((k = typeof ee == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        k ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((C || Q !== S) && zf(t, u, l, S)),
        (Tn = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Aa(t, l, u, a),
        Ca(),
        (Q = t.memoizedState),
        C || Z !== Q || Tn
          ? (typeof ee == 'function' && (Wr(t, n, ee, l), (Q = t.memoizedState)),
            (N = Tn || Mf(t, n, N, l, Z, Q, S))
              ? (k ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = Q)),
            (u.props = l),
            (u.state = Q),
            (u.context = S),
            (l = N))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1)));
    } else {
      ((u = t.stateNode),
        zr(e, t),
        (S = t.memoizedProps),
        (k = al(n, S)),
        (u.props = k),
        (ee = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (N = zl),
        typeof Q == 'object' && Q !== null && (N = tt(Q)),
        (C = n.getDerivedStateFromProps),
        (Q = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== ee || Z !== N) && zf(t, u, l, N)),
        (Tn = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Aa(t, l, u, a),
        Ca());
      var J = t.memoizedState;
      S !== ee || Z !== J || Tn || (e !== null && e.dependencies !== null && Oi(e.dependencies))
        ? (typeof C == 'function' && (Wr(t, n, C, l), (J = t.memoizedState)),
          (k =
            Tn ||
            Mf(t, n, k, l, Z, J, N) ||
            (e !== null && e.dependencies !== null && Oi(e.dependencies)))
            ? (Q ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, J, N),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, J, N)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = J)),
          (u.props = l),
          (u.state = J),
          (u.context = N),
          (l = k))
        : (typeof u.componentDidUpdate != 'function' ||
            (S === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (S === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      $i(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = nl(t, e.child, null, a)), (t.child = nl(t, null, n, a)))
            : nt(e, t, n, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = tn(e, t, a)),
      e
    );
  }
  function Xf(e, t, n, l) {
    return (kn(), (t.flags |= 256), nt(e, t, n, l), t.child);
  }
  var ns = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ls(e) {
    return { baseLanes: e, cachePool: Uc() };
  }
  function as(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= bt), e);
  }
  function Qf(e, t, n) {
    var l = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0),
      S && ((a = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (be) {
        if (
          (a ? Cn(t) : An(),
          (e = Le)
            ? ((e = Pd(e, Ut)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: pn !== null ? { id: Vt, overflow: qt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Tc(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw xn(t);
        return (Gs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = l.children;
      return (
        (l = l.fallback),
        a
          ? (An(),
            (a = t.mode),
            (C = ki({ mode: 'hidden', children: C }, a)),
            (l = $n(l, a, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (l = t.child),
            (l.memoizedState = ls(n)),
            (l.childLanes = as(e, S, n)),
            (t.memoizedState = ns),
            Ua(null, l))
          : (Cn(t), is(t, C))
      );
    }
    var N = e.memoizedState;
    if (N !== null && ((C = N.dehydrated), C !== null)) {
      if (u)
        t.flags & 256
          ? (Cn(t), (t.flags &= -257), (t = us(e, t, n)))
          : t.memoizedState !== null
            ? (An(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (An(),
              (C = l.fallback),
              (a = t.mode),
              (l = ki({ mode: 'visible', children: l.children }, a)),
              (C = $n(C, a, n, null)),
              (C.flags |= 2),
              (l.return = t),
              (C.return = t),
              (l.sibling = C),
              (t.child = l),
              nl(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = ls(n)),
              (l.childLanes = as(e, S, n)),
              (t.memoizedState = ns),
              (t = Ua(null, l)));
      else if ((Cn(t), Gs(C))) {
        if (((S = C.nextSibling && C.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (l = Error(x(419))),
          (l.stack = ''),
          (l.digest = S),
          Sa({ value: l, source: null, stack: null }),
          (t = us(e, t, n)));
      } else if ((Je || Bl(e, t, n, !1), (S = (n & e.childLanes) !== 0), Je || S)) {
        if (((S = Ne), S !== null && ((l = Do(S, n)), l !== 0 && l !== N.retryLane)))
          throw ((N.retryLane = l), Fn(e, l), mt(S, e, l), es);
        (Ys(C) || iu(), (t = us(e, t, n)));
      } else
        Ys(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = N.treeContext),
            (Le = wt(C.nextSibling)),
            (et = t),
            (be = !0),
            (Sn = null),
            (Ut = !1),
            e !== null && Cc(t, e),
            (t = is(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? (An(),
        (C = l.fallback),
        (a = t.mode),
        (N = e.child),
        (Q = N.sibling),
        (l = $t(N, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = N.subtreeFlags & 65011712),
        Q !== null ? (C = $t(Q, C)) : ((C = $n(C, a, n, null)), (C.flags |= 2)),
        (C.return = t),
        (l.return = t),
        (l.sibling = C),
        (t.child = l),
        Ua(null, l),
        (l = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = ls(n))
          : ((a = C.cachePool),
            a !== null
              ? ((N = Ze._currentValue), (a = a.parent !== N ? { parent: N, pool: N } : a))
              : (a = Uc()),
            (C = { baseLanes: C.baseLanes | n, cachePool: a })),
        (l.memoizedState = C),
        (l.childLanes = as(e, S, n)),
        (t.memoizedState = ns),
        Ua(e.child, l))
      : (Cn(t),
        (n = e.child),
        (e = n.sibling),
        (n = $t(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((S = t.deletions), S === null ? ((t.deletions = [e]), (t.flags |= 16)) : S.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function is(e, t) {
    return ((t = ki({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function ki(e, t) {
    return ((e = St(22, e, null, t)), (e.lanes = 0), e);
  }
  function us(e, t, n) {
    return (
      nl(t, e.child, null, n),
      (e = is(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zf(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Er(e.return, t, n));
  }
  function rs(e, t, n, l, a, u) {
    var S = e.memoizedState;
    S === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: a,
          treeForkCount: u,
        })
      : ((S.isBackwards = t),
        (S.rendering = null),
        (S.renderingStartTime = 0),
        (S.last = l),
        (S.tail = n),
        (S.tailMode = a),
        (S.treeForkCount = u));
  }
  function Kf(e, t, n) {
    var l = t.pendingProps,
      a = l.revealOrder,
      u = l.tail;
    l = l.children;
    var S = Xe.current,
      C = (S & 2) !== 0;
    if (
      (C ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      W(Xe, S),
      nt(e, t, l, n),
      (l = be ? pa : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zf(e, n, t);
        else if (e.tag === 19) Zf(e, n, t);
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
        for (n = t.child, a = null; n !== null; )
          ((e = n.alternate), e !== null && ji(e) === null && (a = n), (n = n.sibling));
        ((n = a),
          n === null ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
          rs(t, !1, a, n, u, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && ji(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
        }
        rs(t, !0, n, null, u, l);
        break;
      case 'together':
        rs(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function tn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Dn |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Bl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Oi(e)));
  }
  function Xv(e, t, n) {
    switch (t.tag) {
      case 3:
        (he(t, t.stateNode.containerInfo), En(t, Ze, e.memoizedState.cache), kn());
        break;
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        he(t, t.stateNode.containerInfo);
        break;
      case 10:
        En(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), wr(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Cn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Qf(e, t, n)
              : (Cn(t), (e = tn(e, t, n)), e !== null ? e.sibling : null);
        Cn(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Bl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          a)
        ) {
          if (l) return Kf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          W(Xe, Xe.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), jf(e, t, n, t.pendingProps));
      case 24:
        En(t, Ze, e.memoizedState.cache);
    }
    return tn(e, t, n);
  }
  function Jf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Je = !0;
      else {
        if (!ss(e, n) && (t.flags & 128) === 0) return ((Je = !1), Xv(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), be && (t.flags & 1048576) !== 0 && Rc(t, pa, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = el(t.elementType)), (t.type = e), typeof e == 'function'))
            mr(e)
              ? ((l = al(e, l)), (t.tag = 1), (t = qf(null, t, e, l, n)))
              : ((t.tag = 0), (t = ts(null, t, e, l, n)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === _) {
                ((t.tag = 11), (t = _f(null, t, e, l, n)));
                break e;
              } else if (a === z) {
                ((t.tag = 14), (t = Hf(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return ts(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (a = al(l, t.pendingProps)), qf(e, t, l, a, n));
      case 3:
        e: {
          if ((he(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), zr(e, t), Aa(t, l, null, n));
          var S = t.memoizedState;
          if (
            ((l = S.cache),
            En(t, Ze, l),
            l !== u.cache && Tr(t, [Ze], n, !0),
            Ca(),
            (l = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Xf(e, t, l, n);
              break e;
            } else if (l !== a) {
              ((a = zt(Error(x(424)), t)), Sa(a), (t = Xf(e, t, l, n)));
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
                Le = wt(e.firstChild),
                  et = t,
                  be = !0,
                  Sn = null,
                  Ut = !0,
                  n = Lc(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((kn(), l === a)) {
              t = tn(e, t, n);
              break e;
            }
            nt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          $i(e, t),
          e === null
            ? (n = am(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : be ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = du(ne.current).createElement(n)),
                (l[Ie] = t),
                (l[rt] = e),
                lt(l, n, e),
                ke(l),
                (t.stateNode = l))
            : (t.memoizedState = am(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          De(t),
          e === null &&
            be &&
            ((l = t.stateNode = tm(t.type, t.pendingProps, ne.current)),
            (et = t),
            (Ut = !0),
            (a = Le),
            Nn(t.type) ? ((Vs = a), (Le = wt(l.firstChild))) : (Le = a)),
          nt(e, t, t.pendingProps.children, n),
          $i(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            be &&
            ((a = l = Le) &&
              ((l = S0(l, t.type, t.pendingProps, Ut)),
              l !== null
                ? ((t.stateNode = l), (et = t), (Le = wt(l.firstChild)), (Ut = !1), (a = !0))
                : (a = !1)),
            a || xn(t)),
          De(t),
          (a = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (l = u.children),
          Hs(a, u) ? (l = null) : S !== null && Hs(a, S) && (t.flags |= 32),
          t.memoizedState !== null && ((a = _r(e, t, Nv, null, null, n)), (Ka._currentValue = a)),
          $i(e, t),
          nt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            be &&
            ((e = n = Le) &&
              ((n = x0(n, t.pendingProps, Ut)),
              n !== null ? ((t.stateNode = n), (et = t), (Le = null), (e = !0)) : (e = !1)),
            e || xn(t)),
          null
        );
      case 13:
        return Qf(e, t, n);
      case 4:
        return (
          he(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = nl(t, null, l, n)) : nt(e, t, l, n),
          t.child
        );
      case 11:
        return _f(e, t, t.type, t.pendingProps, n);
      case 7:
        return (nt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (nt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (nt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((l = t.pendingProps), En(t, t.type, l.value), nt(e, t, l.children, n), t.child);
      case 9:
        return (
          (a = t.type._context),
          (l = t.pendingProps.children),
          Pn(t),
          (a = tt(a)),
          (l = l(a)),
          (t.flags |= 1),
          nt(e, t, l, n),
          t.child
        );
      case 14:
        return Hf(e, t, t.type, t.pendingProps, n);
      case 15:
        return Lf(e, t, t.type, t.pendingProps, n);
      case 19:
        return Kf(e, t, n);
      case 31:
        return qv(e, t, n);
      case 22:
        return jf(e, t, n, t.pendingProps);
      case 24:
        return (
          Pn(t),
          (l = tt(Ze)),
          e === null
            ? ((a = Cr()),
              a === null &&
                ((a = Ne),
                (u = br()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= n),
                (a = u)),
              (t.memoizedState = { parent: l, cache: a }),
              Mr(t),
              En(t, Ze, a))
            : ((e.lanes & n) !== 0 && (zr(e, t), Aa(t, null, null, n), Ca()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== l
                ? ((a = { parent: l, cache: l }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  En(t, Ze, l))
                : ((l = u.cache), En(t, Ze, l), l !== a.cache && Tr(t, [Ze], n, !0))),
          nt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function nn(e) {
    e.flags |= 4;
  }
  function os(e, t, n, l, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (xd()) e.flags |= 8192;
        else throw ((tl = Ni), Ar);
    } else e.flags &= -16777217;
  }
  function Ff(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !om(t)))
      if (xd()) e.flags |= 8192;
      else throw ((tl = Ni), Ar);
  }
  function Wi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Ao() : 536870912), (e.lanes |= t), (Ql |= t)));
  }
  function Ba(e, t) {
    if (!be)
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
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        ((n |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags & 65011712),
          (l |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((n |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags),
          (l |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Qv(e, t, n) {
    var l = t.pendingProps;
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
        return (je(t), null);
      case 1:
        return (je(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Pt(Ze),
          ge(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ul(t)
              ? nn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sr())),
          je(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (nn(t), u !== null ? (je(t), Ff(t, u)) : (je(t), os(t, a, null, l, n)))
            : u
              ? u !== e.memoizedState
                ? (nn(t), je(t), Ff(t, u))
                : (je(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== l && nn(t), je(t), os(t, a, e, l, n)),
          null
        );
      case 27:
        if ((Oe(t), (n = ne.current), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && nn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (je(t), null);
          }
          ((e = le.current), Ul(t) ? Ac(t) : ((e = tm(a, l, n)), (t.stateNode = e), nn(t)));
        }
        return (je(t), null);
      case 5:
        if ((Oe(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && nn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (je(t), null);
          }
          if (((u = le.current), Ul(t))) Ac(t);
          else {
            var S = du(ne.current);
            switch (u) {
              case 1:
                u = S.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                u = S.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    u = S.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    u = S.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                    break;
                  case 'script':
                    ((u = S.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof l.is == 'string'
                        ? S.createElement('select', { is: l.is })
                        : S.createElement('select')),
                      l.multiple ? (u.multiple = !0) : l.size && (u.size = l.size));
                    break;
                  default:
                    u =
                      typeof l.is == 'string'
                        ? S.createElement(a, { is: l.is })
                        : S.createElement(a);
                }
            }
            ((u[Ie] = t), (u[rt] = l));
            e: for (S = t.child; S !== null; ) {
              if (S.tag === 5 || S.tag === 6) u.appendChild(S.stateNode);
              else if (S.tag !== 4 && S.tag !== 27 && S.child !== null) {
                ((S.child.return = S), (S = S.child));
                continue;
              }
              if (S === t) break e;
              for (; S.sibling === null; ) {
                if (S.return === null || S.return === t) break e;
                S = S.return;
              }
              ((S.sibling.return = S.return), (S = S.sibling));
            }
            t.stateNode = u;
            e: switch ((lt(u, a, l), a)) {
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
            l && nn(t);
          }
        }
        return (je(t), os(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && nn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ne.current), Ul(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (a = et), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            ((e[Ie] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Qd(e.nodeValue, n)
              )),
              e || xn(t, !0));
          } else ((e = du(e).createTextNode(l)), (e[Ie] = t), (t.stateNode = e));
        }
        return (je(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Ul(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[Ie] = t;
            } else (kn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (je(t), (e = !1));
          } else
            ((n = Sr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (je(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = Ul(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(x(317));
              a[Ie] = t;
            } else (kn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (je(t), (a = !1));
          } else
            ((a = Sr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return (
          Et(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (a = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (a = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== a && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Wi(t, t.updateQueue),
              je(t),
              null)
        );
      case 4:
        return (ge(), e === null && Us(t.stateNode.containerInfo), je(t), null);
      case 10:
        return (Pt(t.type), je(t), null);
      case 19:
        if (($(Xe), (l = t.memoizedState), l === null)) return (je(t), null);
        if (((a = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (a) Ba(l, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ji(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Ba(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Wi(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Ec(n, e), (n = n.sibling));
                  return (W(Xe, (Xe.current & 1) | 2), be && kt(t, l.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              at() > nu &&
              ((t.flags |= 128), (a = !0), Ba(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = ji(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Wi(t, e),
                Ba(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !u.alternate && !be)
              )
                return (je(t), null);
            } else
              2 * at() - l.renderingStartTime > nu &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), Ba(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last), e !== null ? (e.sibling = u) : (t.child = u), (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = at()),
            (e.sibling = null),
            (n = Xe.current),
            W(Xe, a ? (n & 1) | 2 : n & 1),
            be && kt(t, l.treeForkCount),
            e)
          : (je(t), null);
      case 22:
      case 23:
        return (
          Et(t),
          Br(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : je(t),
          (n = t.updateQueue),
          n !== null && Wi(t, n.retryQueue),
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
          e !== null && $(In),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Pt(Ze),
          je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(x(156, t.tag));
  }
  function Zv(e, t) {
    switch ((yr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Pt(Ze),
          ge(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Oe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Et(t), t.alternate === null)) throw Error(x(340));
          kn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Et(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          kn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return ($(Xe), null);
      case 4:
        return (ge(), null);
      case 10:
        return (Pt(t.type), null);
      case 22:
      case 23:
        return (
          Et(t),
          Br(),
          e !== null && $(In),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Pt(Ze), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $f(e, t) {
    switch ((yr(t), t.tag)) {
      case 3:
        (Pt(Ze), ge());
        break;
      case 26:
      case 27:
      case 5:
        Oe(t);
        break;
      case 4:
        ge();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        $(Xe);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        (Et(t), Br(), e !== null && $(In));
        break;
      case 24:
        Pt(Ze);
    }
  }
  function wa(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create,
              S = n.inst;
            ((l = u()), (S.destroy = l));
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (C) {
      ze(t, t.return, C);
    }
  }
  function Mn(e, t, n) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var S = l.inst,
              C = S.destroy;
            if (C !== void 0) {
              ((S.destroy = void 0), (a = t));
              var N = n,
                Q = C;
              try {
                Q();
              } catch (k) {
                ze(a, N, k);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (k) {
      ze(t, t.return, k);
    }
  }
  function kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Yc(t, n);
      } catch (l) {
        ze(e, e.return, l);
      }
    }
  }
  function Wf(e, t, n) {
    ((n.props = al(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      ze(e, t, l);
    }
  }
  function Na(e, t) {
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
    } catch (a) {
      ze(e, t, a);
    }
  }
  function Xt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (a) {
          ze(e, t, a);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (a) {
          ze(e, t, a);
        }
      else n.current = null;
  }
  function Pf(e) {
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
    } catch (a) {
      ze(e, e.return, a);
    }
  }
  function cs(e, t, n) {
    try {
      var l = e.stateNode;
      (m0(l, e.type, n, t), (l[rt] = t));
    } catch (a) {
      ze(e, e.return, a);
    }
  }
  function If(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Nn(e.type)) || e.tag === 4
    );
  }
  function fs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || If(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Nn(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ds(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Jt)));
    else if (
      l !== 4 &&
      (l === 27 && Nn(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (ds(e, t, n), e = e.sibling; e !== null; ) (ds(e, t, n), (e = e.sibling));
  }
  function Pi(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && (l === 27 && Nn(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; ) (Pi(e, t, n), (e = e.sibling));
  }
  function ed(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      (lt(t, l, n), (t[Ie] = e), (t[rt] = n));
    } catch (u) {
      ze(e, e.return, u);
    }
  }
  var ln = !1,
    Fe = !1,
    ms = !1,
    td = typeof WeakSet == 'function' ? WeakSet : Set,
    We = null;
  function Kv(e, t) {
    if (((e = e.containerInfo), (Ns = Su), (e = dc(e)), ur(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var S = 0,
              C = -1,
              N = -1,
              Q = 0,
              k = 0,
              ee = e,
              Z = null;
            t: for (;;) {
              for (
                var J;
                ee !== n || (a !== 0 && ee.nodeType !== 3) || (C = S + a),
                  ee !== u || (l !== 0 && ee.nodeType !== 3) || (N = S + l),
                  ee.nodeType === 3 && (S += ee.nodeValue.length),
                  (J = ee.firstChild) !== null;
              )
                ((Z = ee), (ee = J));
              for (;;) {
                if (ee === e) break t;
                if (
                  (Z === n && ++Q === a && (C = S),
                  Z === u && ++k === l && (N = S),
                  (J = ee.nextSibling) !== null)
                )
                  break;
                ((ee = Z), (Z = ee.parentNode));
              }
              ee = J;
            }
            n = C === -1 || N === -1 ? null : { start: C, end: N };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_s = { focusedElem: e, selectionRange: n }, Su = !1, We = t; We !== null; )
      if (((t = We), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (We = e));
      else
        for (; We !== null; ) {
          switch (((t = We), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (n = 0; n < e.length; n++) ((a = e[n]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (n = t),
                  (a = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = n.stateNode));
                try {
                  var se = al(n.type, a);
                  ((e = l.getSnapshotBeforeUpdate(se, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (me) {
                  ze(n, n.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) js(e);
                else if (n === 1)
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
              if ((e & 1024) !== 0) throw Error(x(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (We = e));
            break;
          }
          We = t.return;
        }
  }
  function nd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (un(e, n), l & 4 && wa(5, n));
        break;
      case 1:
        if ((un(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              ze(n, n.return, S);
            }
          else {
            var a = al(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              ze(n, n.return, S);
            }
          }
        (l & 64 && kf(n), l & 512 && Na(n, n.return));
        break;
      case 3:
        if ((un(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
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
            Yc(e, t);
          } catch (S) {
            ze(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && l & 4 && ed(n);
      case 26:
      case 5:
        (un(e, n), t === null && l & 4 && Pf(n), l & 512 && Na(n, n.return));
        break;
      case 12:
        un(e, n);
        break;
      case 31:
        (un(e, n), l & 4 && id(e, n));
        break;
      case 13:
        (un(e, n),
          l & 4 && ud(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = t0.bind(null, n)), E0(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || ln), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Fe), (a = ln));
          var u = Fe;
          ((ln = l),
            (Fe = t) && !u ? rn(e, n, (n.subtreeFlags & 8772) !== 0) : un(e, n),
            (ln = a),
            (Fe = u));
        }
        break;
      case 30:
        break;
      default:
        un(e, n);
    }
  }
  function ld(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ld(t)),
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
  var Ye = null,
    ot = !1;
  function an(e, t, n) {
    for (n = n.child; n !== null; ) (ad(e, t, n), (n = n.sibling));
  }
  function ad(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == 'function')
      try {
        gt.onCommitFiberUnmount(aa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Fe || Xt(n, t),
          an(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Fe || Xt(n, t);
        var l = Ye,
          a = ot;
        (Nn(n.type) && ((Ye = n.stateNode), (ot = !1)),
          an(e, t, n),
          Xa(n.stateNode),
          (Ye = l),
          (ot = a));
        break;
      case 5:
        Fe || Xt(n, t);
      case 6:
        if (((l = Ye), (a = ot), (Ye = null), an(e, t, n), (Ye = l), (ot = a), Ye !== null))
          if (ot)
            try {
              (Ye.nodeType === 9
                ? Ye.body
                : Ye.nodeName === 'HTML'
                  ? Ye.ownerDocument.body
                  : Ye
              ).removeChild(n.stateNode);
            } catch (u) {
              ze(n, t, u);
            }
          else
            try {
              Ye.removeChild(n.stateNode);
            } catch (u) {
              ze(n, t, u);
            }
        break;
      case 18:
        Ye !== null &&
          (ot
            ? ((e = Ye),
              kd(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Pl(e))
            : kd(Ye, n.stateNode));
        break;
      case 4:
        ((l = Ye),
          (a = ot),
          (Ye = n.stateNode.containerInfo),
          (ot = !0),
          an(e, t, n),
          (Ye = l),
          (ot = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Mn(2, n, t), Fe || Mn(4, n, t), an(e, t, n));
        break;
      case 1:
        (Fe ||
          (Xt(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && Wf(n, t, l)),
          an(e, t, n));
        break;
      case 21:
        an(e, t, n);
        break;
      case 22:
        ((Fe = (l = Fe) || n.memoizedState !== null), an(e, t, n), (Fe = l));
        break;
      default:
        an(e, t, n);
    }
  }
  function id(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Pl(e);
      } catch (n) {
        ze(t, t.return, n);
      }
    }
  }
  function ud(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Pl(e);
      } catch (n) {
        ze(t, t.return, n);
      }
  }
  function Jv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new td()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new td()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function Ii(e, t) {
    var n = Jv(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var a = n0.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l],
          u = e,
          S = t,
          C = S;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (Nn(C.type)) {
                ((Ye = C.stateNode), (ot = !1));
                break e;
              }
              break;
            case 5:
              ((Ye = C.stateNode), (ot = !1));
              break e;
            case 3:
            case 4:
              ((Ye = C.stateNode.containerInfo), (ot = !0));
              break e;
          }
          C = C.return;
        }
        if (Ye === null) throw Error(x(160));
        (ad(u, S, a),
          (Ye = null),
          (ot = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (rd(t, e), (t = t.sibling));
  }
  var Lt = null;
  function rd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ct(t, e), ft(e), l & 4 && (Mn(3, e, e.return), wa(3, e), Mn(5, e, e.return)));
        break;
      case 1:
        (ct(t, e),
          ft(e),
          l & 512 && (Fe || n === null || Xt(n, n.return)),
          l & 64 &&
            ln &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var a = Lt;
        if ((ct(t, e), ft(e), l & 512 && (Fe || n === null || Xt(n, n.return)), l & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                  t: switch (l) {
                    case 'title':
                      ((u = a.getElementsByTagName('title')[0]),
                        (!u ||
                          u[ra] ||
                          u[Ie] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = a.createElement(l)),
                          a.head.insertBefore(u, a.querySelector('head > title'))),
                        lt(u, l, n),
                        (u[Ie] = e),
                        ke(u),
                        (l = u));
                      break e;
                    case 'link':
                      var S = rm('link', 'href', a).get(l + (n.href || ''));
                      if (S) {
                        for (var C = 0; C < S.length; C++)
                          if (
                            ((u = S[C]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            S.splice(C, 1);
                            break t;
                          }
                      }
                      ((u = a.createElement(l)), lt(u, l, n), a.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = rm('meta', 'content', a).get(l + (n.content || '')))) {
                        for (C = 0; C < S.length; C++)
                          if (
                            ((u = S[C]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            S.splice(C, 1);
                            break t;
                          }
                      }
                      ((u = a.createElement(l)), lt(u, l, n), a.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, l));
                  }
                  ((u[Ie] = e), ke(u), (l = u));
                }
                e.stateNode = l;
              } else sm(a, e.type, e.stateNode);
            else e.stateNode = um(a, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null ? sm(a, e.type, e.stateNode) : um(a, l, e.memoizedProps))
              : l === null && e.stateNode !== null && cs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ct(t, e),
          ft(e),
          l & 512 && (Fe || n === null || Xt(n, n.return)),
          n !== null && l & 4 && cs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((ct(t, e), ft(e), l & 512 && (Fe || n === null || Xt(n, n.return)), e.flags & 32)) {
          a = e.stateNode;
          try {
            El(a, '');
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), cs(e, a, n !== null ? n.memoizedProps : a)),
          l & 1024 && (ms = !0));
        break;
      case 6:
        if ((ct(t, e), ft(e), l & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((vu = null),
          (a = Lt),
          (Lt = mu(t.containerInfo)),
          ct(t, e),
          (Lt = a),
          ft(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Pl(t.containerInfo);
          } catch (se) {
            ze(e, e.return, se);
          }
        ms && ((ms = !1), sd(e));
        break;
      case 4:
        ((l = Lt), (Lt = mu(e.stateNode.containerInfo)), ct(t, e), ft(e), (Lt = l));
        break;
      case 12:
        (ct(t, e), ft(e));
        break;
      case 31:
        (ct(t, e),
          ft(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ii(e, l))));
        break;
      case 13:
        (ct(t, e),
          ft(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (tu = at()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ii(e, l))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var N = n !== null && n.memoizedState !== null,
          Q = ln,
          k = Fe;
        if (((ln = Q || a), (Fe = k || N), ct(t, e), (Fe = k), (ln = Q), ft(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (n === null || N || ln || Fe || il(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                N = n = t;
                try {
                  if (((u = N.stateNode), a))
                    ((S = u.style),
                      typeof S.setProperty == 'function'
                        ? S.setProperty('display', 'none', 'important')
                        : (S.display = 'none'));
                  else {
                    C = N.stateNode;
                    var ee = N.memoizedProps.style,
                      Z = ee != null && ee.hasOwnProperty('display') ? ee.display : null;
                    C.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (se) {
                  ze(N, N.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = a ? '' : N.memoizedProps;
                } catch (se) {
                  ze(N, N.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                N = t;
                try {
                  var J = N.stateNode;
                  a ? Wd(J, !0) : Wd(N.stateNode, !1);
                } catch (se) {
                  ze(N, N.return, se);
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
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Ii(e, n))));
        break;
      case 19:
        (ct(t, e),
          ft(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Ii(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ct(t, e), ft(e));
    }
  }
  function ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (If(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode,
              u = fs(e);
            Pi(e, u, a);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (El(S, ''), (n.flags &= -33));
            var C = fs(e);
            Pi(e, C, S);
            break;
          case 3:
          case 4:
            var N = n.stateNode.containerInfo,
              Q = fs(e);
            ds(e, Q, N);
            break;
          default:
            throw Error(x(161));
        }
      } catch (k) {
        ze(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (nd(e, t.alternate, t), (t = t.sibling));
  }
  function il(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Mn(4, t, t.return), il(t));
          break;
        case 1:
          Xt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Wf(t, t.return, n), il(t));
          break;
        case 27:
          Xa(t.stateNode);
        case 26:
        case 5:
          (Xt(t, t.return), il(t));
          break;
        case 22:
          t.memoizedState === null && il(t);
          break;
        case 30:
          il(t);
          break;
        default:
          il(t);
      }
      e = e.sibling;
    }
  }
  function rn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        a = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (rn(a, u, n), wa(4, u));
          break;
        case 1:
          if ((rn(a, u, n), (l = u), (a = l.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount();
            } catch (Q) {
              ze(l, l.return, Q);
            }
          if (((l = u), (a = l.updateQueue), a !== null)) {
            var C = l.stateNode;
            try {
              var N = a.shared.hiddenCallbacks;
              if (N !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < N.length; a++) jc(N[a], C);
            } catch (Q) {
              ze(l, l.return, Q);
            }
          }
          (n && S & 64 && kf(u), Na(u, u.return));
          break;
        case 27:
          ed(u);
        case 26:
        case 5:
          (rn(a, u, n), n && l === null && S & 4 && Pf(u), Na(u, u.return));
          break;
        case 12:
          rn(a, u, n);
          break;
        case 31:
          (rn(a, u, n), n && S & 4 && id(a, u));
          break;
        case 13:
          (rn(a, u, n), n && S & 4 && ud(a, u));
          break;
        case 22:
          (u.memoizedState === null && rn(a, u, n), Na(u, u.return));
          break;
        case 30:
          break;
        default:
          rn(a, u, n);
      }
      t = t.sibling;
    }
  }
  function hs(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && xa(n)));
  }
  function vs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && xa(e)));
  }
  function jt(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (od(e, t, n, l), (t = t.sibling));
  }
  function od(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jt(e, t, n, l), a & 2048 && wa(9, t));
        break;
      case 1:
        jt(e, t, n, l);
        break;
      case 3:
        (jt(e, t, n, l),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && xa(e))));
        break;
      case 12:
        if (a & 2048) {
          (jt(e, t, n, l), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              C = u.onPostCommit;
            typeof C == 'function' &&
              C(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (N) {
            ze(t, t.return, N);
          }
        } else jt(e, t, n, l);
        break;
      case 31:
        jt(e, t, n, l);
        break;
      case 13:
        jt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? jt(e, t, n, l)
              : _a(e, t)
            : u._visibility & 2
              ? jt(e, t, n, l)
              : ((u._visibility |= 2), Vl(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && hs(S, t));
        break;
      case 24:
        (jt(e, t, n, l), a & 2048 && vs(t.alternate, t));
        break;
      default:
        jt(e, t, n, l);
    }
  }
  function Vl(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        S = t,
        C = n,
        N = l,
        Q = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          (Vl(u, S, C, N, a), wa(8, S));
          break;
        case 23:
          break;
        case 22:
          var k = S.stateNode;
          (S.memoizedState !== null
            ? k._visibility & 2
              ? Vl(u, S, C, N, a)
              : _a(u, S)
            : ((k._visibility |= 2), Vl(u, S, C, N, a)),
            a && Q & 2048 && hs(S.alternate, S));
          break;
        case 24:
          (Vl(u, S, C, N, a), a && Q & 2048 && vs(S.alternate, S));
          break;
        default:
          Vl(u, S, C, N, a);
      }
      t = t.sibling;
    }
  }
  function _a(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          a = l.flags;
        switch (l.tag) {
          case 22:
            (_a(n, l), a & 2048 && hs(l.alternate, l));
            break;
          case 24:
            (_a(n, l), a & 2048 && vs(l.alternate, l));
            break;
          default:
            _a(n, l);
        }
        t = t.sibling;
      }
  }
  var Ha = 8192;
  function ql(e, t, n) {
    if (e.subtreeFlags & Ha) for (e = e.child; e !== null; ) (cd(e, t, n), (e = e.sibling));
  }
  function cd(e, t, n) {
    switch (e.tag) {
      case 26:
        (ql(e, t, n),
          e.flags & Ha && e.memoizedState !== null && w0(n, Lt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ql(e, t, n);
        break;
      case 3:
      case 4:
        var l = Lt;
        ((Lt = mu(e.stateNode.containerInfo)), ql(e, t, n), (Lt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Ha), (Ha = 16777216), ql(e, t, n), (Ha = l))
            : ql(e, t, n));
        break;
      default:
        ql(e, t, n);
    }
  }
  function fd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function La(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((We = l), md(l, e));
        }
      fd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (dd(e), (e = e.sibling));
  }
  function dd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (La(e), e.flags & 2048 && Mn(9, e, e.return));
        break;
      case 3:
        La(e);
        break;
      case 12:
        La(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), eu(e))
          : La(e);
        break;
      default:
        La(e);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((We = l), md(l, e));
        }
      fd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Mn(8, t, t.return), eu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), eu(t)));
          break;
        default:
          eu(t);
      }
      e = e.sibling;
    }
  }
  function md(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Mn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          xa(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (We = l));
      else
        e: for (n = e; We !== null; ) {
          l = We;
          var a = l.sibling,
            u = l.return;
          if ((ld(l), l === n)) {
            We = null;
            break e;
          }
          if (a !== null) {
            ((a.return = u), (We = a));
            break e;
          }
          We = u;
        }
    }
  }
  var Fv = {
      getCacheForType: function (e) {
        var t = tt(Ze),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return tt(Ze).controller.signal;
      },
    },
    $v = typeof WeakMap == 'function' ? WeakMap : Map,
    Ae = 0,
    Ne = null,
    Se = null,
    Ee = 0,
    Me = 0,
    Tt = null,
    zn = !1,
    Xl = !1,
    gs = !1,
    sn = 0,
    qe = 0,
    Dn = 0,
    ul = 0,
    ys = 0,
    bt = 0,
    Ql = 0,
    ja = null,
    dt = null,
    ps = !1,
    tu = 0,
    hd = 0,
    nu = 1 / 0,
    lu = null,
    On = null,
    $e = 0,
    Un = null,
    Zl = null,
    on = 0,
    Ss = 0,
    xs = null,
    vd = null,
    Ya = 0,
    Es = null;
  function Rt() {
    return (Ae & 2) !== 0 && Ee !== 0 ? Ee & -Ee : V.T !== null ? Ms() : Oo();
  }
  function gd() {
    if (bt === 0)
      if ((Ee & 536870912) === 0 || be) {
        var e = fi;
        ((fi <<= 1), (fi & 3932160) === 0 && (fi = 262144), (bt = e));
      } else bt = 536870912;
    return ((e = xt.current), e !== null && (e.flags |= 32), bt);
  }
  function mt(e, t, n) {
    (((e === Ne && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null) &&
      (Kl(e, 0), Bn(e, Ee, bt, !1)),
      ua(e, n),
      ((Ae & 2) === 0 || e !== Ne) &&
        (e === Ne && ((Ae & 2) === 0 && (ul |= n), qe === 4 && Bn(e, Ee, bt, !1)), Qt(e)));
  }
  function yd(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(x(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || ia(e, t),
      a = l ? Pv(e, t) : bs(e, t, !0),
      u = l;
    do {
      if (a === 0) {
        Xl && !l && Bn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !kv(n))) {
          ((a = bs(e, t, !1)), (u = !1));
          continue;
        }
        if (a === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var S = 0;
          else
            ((S = e.pendingLanes & -536870913), (S = S !== 0 ? S : S & 536870912 ? 536870912 : 0));
          if (S !== 0) {
            t = S;
            e: {
              var C = e;
              a = ja;
              var N = C.current.memoizedState.isDehydrated;
              if ((N && (Kl(C, S).flags |= 256), (S = bs(C, S, !1)), S !== 2)) {
                if (gs && !N) {
                  ((C.errorRecoveryDisabledLanes |= u), (ul |= u), (a = 4));
                  break e;
                }
                ((u = dt), (dt = a), u !== null && (dt === null ? (dt = u) : dt.push.apply(dt, u)));
              }
              a = S;
            }
            if (((u = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Kl(e, 0), Bn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (u = a), u)) {
            case 0:
            case 1:
              throw Error(x(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bn(l, t, bt, !zn);
              break e;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((t & 62914560) === t && ((a = tu + 300 - at()), 10 < a)) {
            if ((Bn(l, t, bt, !zn), mi(l, 0, !0) !== 0)) break e;
            ((on = t),
              (l.timeoutHandle = Fd(
                pd.bind(null, l, n, dt, lu, ps, t, bt, ul, Ql, zn, u, 'Throttled', -0, 0),
                a
              )));
            break e;
          }
          pd(l, n, dt, lu, ps, t, bt, ul, Ql, zn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Qt(e);
  }
  function pd(e, t, n, l, a, u, S, C, N, Q, k, ee, Z, J) {
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
        unsuspend: Jt,
      }),
        cd(t, u, ee));
      var se = (u & 62914560) === u ? tu - at() : (u & 4194048) === u ? hd - at() : 0;
      if (((se = N0(ee, se)), se !== null)) {
        ((on = u),
          (e.cancelPendingCommit = se(Ad.bind(null, e, t, u, n, l, a, S, C, N, k, ee, null, Z, J))),
          Bn(e, u, S, !Q));
        return;
      }
    }
    Ad(e, t, u, n, l, a, S, C, N);
  }
  function kv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var a = n[l],
            u = a.getSnapshot;
          a = a.value;
          try {
            if (!pt(u(), a)) return !1;
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
  function Bn(e, t, n, l) {
    ((t &= ~ys),
      (t &= ~ul),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - yt(a),
        S = 1 << u;
      ((l[u] = -1), (a &= ~S));
    }
    n !== 0 && Mo(e, n, t);
  }
  function au() {
    return (Ae & 6) === 0 ? (Ga(0), !1) : !0;
  }
  function Ts() {
    if (Se !== null) {
      if (Me === 0) var e = Se.return;
      else ((e = Se), (Wt = Wn = null), jr(e), (Hl = null), (Ta = 0), (e = Se));
      for (; e !== null; ) ($f(e.alternate, e), (e = e.return));
      Se = null;
    }
  }
  function Kl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), g0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (on = 0),
      Ts(),
      (Ne = e),
      (Se = n = $t(e.current, null)),
      (Ee = t),
      (Me = 0),
      (Tt = null),
      (zn = !1),
      (Xl = ia(e, t)),
      (gs = !1),
      (Ql = bt = ys = ul = Dn = qe = 0),
      (dt = ja = null),
      (ps = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - yt(l),
          u = 1 << a;
        ((t |= e[a]), (l &= ~u));
      }
    return ((sn = t), Ci(), n);
  }
  function Sd(e, t) {
    ((ye = null),
      (V.H = Oa),
      t === _l || t === wi
        ? ((t = Nc()), (Me = 3))
        : t === Ar
          ? ((t = Nc()), (Me = 4))
          : (Me =
              t === es
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Tt = t),
      Se === null && ((qe = 1), Ji(e, zt(t, e.current))));
  }
  function xd() {
    var e = xt.current;
    return e === null
      ? !0
      : (Ee & 4194048) === Ee
        ? Bt === null
        : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0
          ? e === Bt
          : !1;
  }
  function Ed() {
    var e = V.H;
    return ((V.H = Oa), e === null ? Oa : e);
  }
  function Td() {
    var e = V.A;
    return ((V.A = Fv), e);
  }
  function iu() {
    ((qe = 4),
      zn || ((Ee & 4194048) !== Ee && xt.current !== null) || (Xl = !0),
      ((Dn & 134217727) === 0 && (ul & 134217727) === 0) || Ne === null || Bn(Ne, Ee, bt, !1));
  }
  function bs(e, t, n) {
    var l = Ae;
    Ae |= 2;
    var a = Ed(),
      u = Td();
    ((Ne !== e || Ee !== t) && ((lu = null), Kl(e, t)), (t = !1));
    var S = qe;
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          var C = Se,
            N = Tt;
          switch (Me) {
            case 8:
              (Ts(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var Q = Me;
              if (((Me = 0), (Tt = null), Jl(e, C, N, Q), n && Xl)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Me), (Me = 0), (Tt = null), Jl(e, C, N, Q));
          }
        }
        (Wv(), (S = qe));
        break;
      } catch (k) {
        Sd(e, k);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Wt = Wn = null),
      (Ae = l),
      (V.H = a),
      (V.A = u),
      Se === null && ((Ne = null), (Ee = 0), Ci()),
      S
    );
  }
  function Wv() {
    for (; Se !== null; ) bd(Se);
  }
  function Pv(e, t) {
    var n = Ae;
    Ae |= 2;
    var l = Ed(),
      a = Td();
    Ne !== e || Ee !== t ? ((lu = null), (nu = at() + 500), Kl(e, t)) : (Xl = ia(e, t));
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          t = Se;
          var u = Tt;
          t: switch (Me) {
            case 1:
              ((Me = 0), (Tt = null), Jl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Bc(u)) {
                ((Me = 0), (Tt = null), Rd(t));
                break;
              }
              ((t = function () {
                ((Me !== 2 && Me !== 9) || Ne !== e || (Me = 7), Qt(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Me = 7;
              break e;
            case 4:
              Me = 5;
              break e;
            case 7:
              Bc(u) ? ((Me = 0), (Tt = null), Rd(t)) : ((Me = 0), (Tt = null), Jl(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (Se.tag) {
                case 26:
                  S = Se.memoizedState;
                case 5:
                case 27:
                  var C = Se;
                  if (S ? om(S) : C.stateNode.complete) {
                    ((Me = 0), (Tt = null));
                    var N = C.sibling;
                    if (N !== null) Se = N;
                    else {
                      var Q = C.return;
                      Q !== null ? ((Se = Q), uu(Q)) : (Se = null);
                    }
                    break t;
                  }
              }
              ((Me = 0), (Tt = null), Jl(e, t, u, 5));
              break;
            case 6:
              ((Me = 0), (Tt = null), Jl(e, t, u, 6));
              break;
            case 8:
              (Ts(), (qe = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        Iv();
        break;
      } catch (k) {
        Sd(e, k);
      }
    while (!0);
    return (
      (Wt = Wn = null),
      (V.H = l),
      (V.A = a),
      (Ae = n),
      Se !== null ? 0 : ((Ne = null), (Ee = 0), Ci(), qe)
    );
  }
  function Iv() {
    for (; Se !== null && !ui(); ) bd(Se);
  }
  function bd(e) {
    var t = Jf(e.alternate, e, sn);
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (Se = t));
  }
  function Rd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vf(n, t, t.pendingProps, t.type, void 0, Ee);
        break;
      case 11:
        t = Vf(n, t, t.pendingProps, t.type.render, t.ref, Ee);
        break;
      case 5:
        jr(t);
      default:
        ($f(n, t), (t = Se = Ec(t, sn)), (t = Jf(n, t, sn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (Se = t));
  }
  function Jl(e, t, n, l) {
    ((Wt = Wn = null), jr(t), (Hl = null), (Ta = 0));
    var a = t.return;
    try {
      if (Vv(e, a, t, n, Ee)) {
        ((qe = 1), Ji(e, zt(n, e.current)), (Se = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((Se = a), u);
      ((qe = 1), Ji(e, zt(n, e.current)), (Se = null));
      return;
    }
    t.flags & 32768
      ? (be || l === 1
          ? (e = !0)
          : Xl || (Ee & 536870912) !== 0
            ? (e = !1)
            : ((zn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = xt.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Cd(t, e))
      : uu(t);
  }
  function uu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Cd(t, zn);
        return;
      }
      e = t.return;
      var n = Qv(t.alternate, t, sn);
      if (n !== null) {
        Se = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Cd(e, t) {
    do {
      var n = Zv(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Se = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Se = e;
        return;
      }
      Se = e = n;
    } while (e !== null);
    ((qe = 6), (Se = null));
  }
  function Ad(e, t, n, l, a, u, S, C, N) {
    e.cancelPendingCommit = null;
    do ru();
    while ($e !== 0);
    if ((Ae & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= fr),
        Bh(e, n, u, S, C, N),
        e === Ne && ((Se = Ne = null), (Ee = 0)),
        (Zl = t),
        (Un = e),
        (on = n),
        (Ss = u),
        (xs = a),
        (vd = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            l0(ml, function () {
              return (Ud(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = V.T), (V.T = null), (a = K.p), (K.p = 2), (S = Ae), (Ae |= 4));
        try {
          Kv(e, t, n);
        } finally {
          ((Ae = S), (K.p = a), (V.T = l));
        }
      }
      (($e = 1), Md(), zd(), Dd());
    }
  }
  function Md() {
    if ($e === 1) {
      $e = 0;
      var e = Un,
        t = Zl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          rd(t, e);
          var u = _s,
            S = dc(e.containerInfo),
            C = u.focusedElem,
            N = u.selectionRange;
          if (S !== C && C && C.ownerDocument && fc(C.ownerDocument.documentElement, C)) {
            if (N !== null && ur(C)) {
              var Q = N.start,
                k = N.end;
              if ((k === void 0 && (k = Q), 'selectionStart' in C))
                ((C.selectionStart = Q), (C.selectionEnd = Math.min(k, C.value.length)));
              else {
                var ee = C.ownerDocument || document,
                  Z = (ee && ee.defaultView) || window;
                if (Z.getSelection) {
                  var J = Z.getSelection(),
                    se = C.textContent.length,
                    me = Math.min(N.start, se),
                    we = N.end === void 0 ? me : Math.min(N.end, se);
                  !J.extend && me > we && ((S = we), (we = me), (me = S));
                  var q = cc(C, me),
                    G = cc(C, we);
                  if (
                    q &&
                    G &&
                    (J.rangeCount !== 1 ||
                      J.anchorNode !== q.node ||
                      J.anchorOffset !== q.offset ||
                      J.focusNode !== G.node ||
                      J.focusOffset !== G.offset)
                  ) {
                    var X = ee.createRange();
                    (X.setStart(q.node, q.offset),
                      J.removeAllRanges(),
                      me > we
                        ? (J.addRange(X), J.extend(G.node, G.offset))
                        : (X.setEnd(G.node, G.offset), J.addRange(X)));
                  }
                }
              }
            }
            for (ee = [], J = C; (J = J.parentNode); )
              J.nodeType === 1 && ee.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
            for (typeof C.focus == 'function' && C.focus(), C = 0; C < ee.length; C++) {
              var P = ee[C];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((Su = !!Ns), (_s = Ns = null));
        } finally {
          ((Ae = a), (K.p = l), (V.T = n));
        }
      }
      ((e.current = t), ($e = 2));
    }
  }
  function zd() {
    if ($e === 2) {
      $e = 0;
      var e = Un,
        t = Zl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          nd(e, t.alternate, t);
        } finally {
          ((Ae = a), (K.p = l), (V.T = n));
        }
      }
      $e = 3;
    }
  }
  function Dd() {
    if ($e === 4 || $e === 3) {
      (($e = 0), ri());
      var e = Un,
        t = Zl,
        n = on,
        l = vd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? ($e = 5)
        : (($e = 0), (Zl = Un = null), Od(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (On = null),
        Vu(n),
        (t = t.stateNode),
        gt && typeof gt.onCommitFiberRoot == 'function')
      )
        try {
          gt.onCommitFiberRoot(aa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = V.T), (a = K.p), (K.p = 2), (V.T = null));
        try {
          for (var u = e.onRecoverableError, S = 0; S < l.length; S++) {
            var C = l[S];
            u(C.value, { componentStack: C.stack });
          }
        } finally {
          ((V.T = t), (K.p = a));
        }
      }
      ((on & 3) !== 0 && ru(),
        Qt(e),
        (a = e.pendingLanes),
        (n & 261930) !== 0 && (a & 42) !== 0 ? (e === Es ? Ya++ : ((Ya = 0), (Es = e))) : (Ya = 0),
        Ga(0));
    }
  }
  function Od(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), xa(t)));
  }
  function ru() {
    return (Md(), zd(), Dd(), Ud());
  }
  function Ud() {
    if ($e !== 5) return !1;
    var e = Un,
      t = Ss;
    Ss = 0;
    var n = Vu(on),
      l = V.T,
      a = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (V.T = null), (n = xs), (xs = null));
      var u = Un,
        S = on;
      if ((($e = 0), (Zl = Un = null), (on = 0), (Ae & 6) !== 0)) throw Error(x(331));
      var C = Ae;
      if (
        ((Ae |= 4),
        dd(u.current),
        od(u, u.current, S, n),
        (Ae = C),
        Ga(0, !1),
        gt && typeof gt.onPostCommitFiberRoot == 'function')
      )
        try {
          gt.onPostCommitFiberRoot(aa, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = a), (V.T = l), Od(e, t));
    }
  }
  function Bd(e, t, n) {
    ((t = zt(n, t)),
      (t = Ir(e.stateNode, t, 2)),
      (e = Rn(e, t, 2)),
      e !== null && (ua(e, 2), Qt(e)));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Bd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (On === null || !On.has(l)))
          ) {
            ((e = zt(n, e)),
              (n = wf(2)),
              (l = Rn(t, n, 2)),
              l !== null && (Nf(n, l, t, e), ua(l, 2), Qt(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rs(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $v();
      var a = new Set();
      l.set(t, a);
    } else ((a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a)));
    a.has(n) || ((gs = !0), a.add(n), (e = e0.bind(null, e, t, n)), t.then(e, e));
  }
  function e0(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ne === e &&
        (Ee & n) === n &&
        (qe === 4 || (qe === 3 && (Ee & 62914560) === Ee && 300 > at() - tu)
          ? (Ae & 2) === 0 && Kl(e, 0)
          : (ys |= n),
        Ql === Ee && (Ql = 0)),
      Qt(e));
  }
  function wd(e, t) {
    (t === 0 && (t = Ao()), (e = Fn(e, t)), e !== null && (ua(e, t), Qt(e)));
  }
  function t0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wd(e, n));
  }
  function n0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(x(314));
    }
    (l !== null && l.delete(t), wd(e, n));
  }
  function l0(e, t) {
    return dl(e, t);
  }
  var su = null,
    Fl = null,
    Cs = !1,
    ou = !1,
    As = !1,
    wn = 0;
  function Qt(e) {
    (e !== Fl && e.next === null && (Fl === null ? (su = Fl = e) : (Fl = Fl.next = e)),
      (ou = !0),
      Cs || ((Cs = !0), i0()));
  }
  function Ga(e, t) {
    if (!As && ou) {
      As = !0;
      do
        for (var n = !1, l = su; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var S = l.suspendedLanes,
                C = l.pingedLanes;
              ((u = (1 << (31 - yt(42 | e) + 1)) - 1),
                (u &= a & ~(S & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Ld(l, u));
          } else
            ((u = Ee),
              (u = mi(
                l,
                l === Ne ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || ia(l, u) || ((n = !0), Ld(l, u)));
          l = l.next;
        }
      while (n);
      As = !1;
    }
  }
  function a0() {
    Nd();
  }
  function Nd() {
    ou = Cs = !1;
    var e = 0;
    wn !== 0 && v0() && (e = wn);
    for (var t = at(), n = null, l = su; l !== null; ) {
      var a = l.next,
        u = _d(l, t);
      (u === 0
        ? ((l.next = null), n === null ? (su = a) : (n.next = a), a === null && (Fl = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (ou = !0)),
        (l = a));
    }
    (($e !== 0 && $e !== 5) || Ga(e), wn !== 0 && (wn = 0));
  }
  function _d(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - yt(u),
        C = 1 << S,
        N = a[S];
      (N === -1
        ? ((C & n) === 0 || (C & l) !== 0) && (a[S] = Uh(C, t))
        : N <= t && (e.expiredLanes |= C),
        (u &= ~C));
    }
    if (
      ((t = Ne),
      (n = Ee),
      (n = mi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      n === 0 || (e === t && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Gn(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || ia(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Gn(l), Vu(n))) {
        case 2:
        case 8:
          n = oi;
          break;
        case 32:
          n = ml;
          break;
        case 268435456:
          n = qn;
          break;
        default:
          n = ml;
      }
      return (
        (l = Hd.bind(null, e)),
        (n = dl(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Gn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Hd(e, t) {
    if ($e !== 0 && $e !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ru() && e.callbackNode !== n) return null;
    var l = Ee;
    return (
      (l = mi(e, e === Ne ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (yd(e, l, t),
          _d(e, at()),
          e.callbackNode != null && e.callbackNode === n ? Hd.bind(null, e) : null)
    );
  }
  function Ld(e, t) {
    if (ru()) return null;
    yd(e, t, !0);
  }
  function i0() {
    y0(function () {
      (Ae & 6) !== 0 ? dl(Vn, a0) : Nd();
    });
  }
  function Ms() {
    if (wn === 0) {
      var e = wl;
      (e === 0 && ((e = ci), (ci <<= 1), (ci & 261888) === 0 && (ci = 256)), (wn = e));
    }
    return wn;
  }
  function jd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : yi('' + e);
  }
  function Yd(e, t) {
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
  function u0(e, t, n, l, a) {
    if (t === 'submit' && n && n.stateNode === a) {
      var u = jd((a[rt] || null).action),
        S = l.submitter;
      S &&
        ((t = (t = S[rt] || null) ? jd(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var C = new Ei('action', 'action', null, l, a);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (wn !== 0) {
                  var N = S ? Yd(a, S) : new FormData(a);
                  Jr(n, { pending: !0, data: N, method: a.method, action: u }, null, N);
                }
              } else
                typeof u == 'function' &&
                  (C.preventDefault(),
                  (N = S ? Yd(a, S) : new FormData(a)),
                  Jr(n, { pending: !0, data: N, method: a.method, action: u }, u, N));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var zs = 0; zs < cr.length; zs++) {
    var Ds = cr[zs],
      r0 = Ds.toLowerCase(),
      s0 = Ds[0].toUpperCase() + Ds.slice(1);
    Ht(r0, 'on' + s0);
  }
  (Ht(vc, 'onAnimationEnd'),
    Ht(gc, 'onAnimationIteration'),
    Ht(yc, 'onAnimationStart'),
    Ht('dblclick', 'onDoubleClick'),
    Ht('focusin', 'onFocus'),
    Ht('focusout', 'onBlur'),
    Ht(Rv, 'onTransitionRun'),
    Ht(Cv, 'onTransitionStart'),
    Ht(Av, 'onTransitionCancel'),
    Ht(pc, 'onTransitionEnd'),
    Sl('onMouseEnter', ['mouseout', 'mouseover']),
    Sl('onMouseLeave', ['mouseout', 'mouseover']),
    Sl('onPointerEnter', ['pointerout', 'pointerover']),
    Sl('onPointerLeave', ['pointerout', 'pointerover']),
    Qn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Qn(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Qn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Qn(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Qn(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Va =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    o0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Va)
    );
  function Gd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        a = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var S = l.length - 1; 0 <= S; S--) {
            var C = l[S],
              N = C.instance,
              Q = C.currentTarget;
            if (((C = C.listener), N !== u && a.isPropagationStopped())) break e;
            ((u = C), (a.currentTarget = Q));
            try {
              u(a);
            } catch (k) {
              Ri(k);
            }
            ((a.currentTarget = null), (u = N));
          }
        else
          for (S = 0; S < l.length; S++) {
            if (
              ((C = l[S]),
              (N = C.instance),
              (Q = C.currentTarget),
              (C = C.listener),
              N !== u && a.isPropagationStopped())
            )
              break e;
            ((u = C), (a.currentTarget = Q));
            try {
              u(a);
            } catch (k) {
              Ri(k);
            }
            ((a.currentTarget = null), (u = N));
          }
      }
    }
  }
  function xe(e, t) {
    var n = t[qu];
    n === void 0 && (n = t[qu] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Vd(t, e, 2, !1), n.add(l));
  }
  function Os(e, t, n) {
    var l = 0;
    (t && (l |= 4), Vd(n, e, l, t));
  }
  var cu = '_reactListening' + Math.random().toString(36).slice(2);
  function Us(e) {
    if (!e[cu]) {
      ((e[cu] = !0),
        wo.forEach(function (n) {
          n !== 'selectionchange' && (o0.has(n) || Os(n, !1, e), Os(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cu] || ((t[cu] = !0), Os('selectionchange', !1, t));
    }
  }
  function Vd(e, t, n, l) {
    switch (gm(t)) {
      case 2:
        var a = L0;
        break;
      case 8:
        a = j0;
        break;
      default:
        a = Ks;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !Wu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : a !== void 0
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Bs(e, t, n, l, a) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var S = l.tag;
        if (S === 3 || S === 4) {
          var C = l.stateNode.containerInfo;
          if (C === a) break;
          if (S === 4)
            for (S = l.return; S !== null; ) {
              var N = S.tag;
              if ((N === 3 || N === 4) && S.stateNode.containerInfo === a) return;
              S = S.return;
            }
          for (; C !== null; ) {
            if (((S = gl(C)), S === null)) return;
            if (((N = S.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
              l = u = S;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    Zo(function () {
      var Q = u,
        k = $u(n),
        ee = [];
      e: {
        var Z = Sc.get(e);
        if (Z !== void 0) {
          var J = Ei,
            se = e;
          switch (e) {
            case 'keypress':
              if (Si(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              J = nv;
              break;
            case 'focusin':
              ((se = 'focus'), (J = tr));
              break;
            case 'focusout':
              ((se = 'blur'), (J = tr));
              break;
            case 'beforeblur':
            case 'afterblur':
              J = tr;
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
              J = Fo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              J = Qh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              J = iv;
              break;
            case vc:
            case gc:
            case yc:
              J = Jh;
              break;
            case pc:
              J = rv;
              break;
            case 'scroll':
            case 'scrollend':
              J = qh;
              break;
            case 'wheel':
              J = ov;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              J = $h;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              J = ko;
              break;
            case 'toggle':
            case 'beforetoggle':
              J = fv;
          }
          var me = (t & 4) !== 0,
            we = !me && (e === 'scroll' || e === 'scrollend'),
            q = me ? (Z !== null ? Z + 'Capture' : null) : Z;
          me = [];
          for (var G = Q, X; G !== null; ) {
            var P = G;
            if (
              ((X = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                X === null ||
                q === null ||
                ((P = oa(G, q)), P != null && me.push(qa(G, P, X))),
              we)
            )
              break;
            G = G.return;
          }
          0 < me.length && ((Z = new J(Z, se, null, n, k)), ee.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (J = e === 'mouseout' || e === 'pointerout'),
            Z && n !== Fu && (se = n.relatedTarget || n.fromElement) && (gl(se) || se[vl]))
          )
            break e;
          if (
            (J || Z) &&
            ((Z =
              k.window === k
                ? k
                : (Z = k.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            J
              ? ((se = n.relatedTarget || n.toElement),
                (J = Q),
                (se = se ? gl(se) : null),
                se !== null &&
                  ((we = i(se)), (me = se.tag), se !== we || (me !== 5 && me !== 27 && me !== 6)) &&
                  (se = null))
              : ((J = null), (se = Q)),
            J !== se)
          ) {
            if (
              ((me = Fo),
              (P = 'onMouseLeave'),
              (q = 'onMouseEnter'),
              (G = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = ko), (P = 'onPointerLeave'), (q = 'onPointerEnter'), (G = 'pointer')),
              (we = J == null ? Z : sa(J)),
              (X = se == null ? Z : sa(se)),
              (Z = new me(P, G + 'leave', J, n, k)),
              (Z.target = we),
              (Z.relatedTarget = X),
              (P = null),
              gl(k) === Q &&
                ((me = new me(q, G + 'enter', se, n, k)),
                (me.target = X),
                (me.relatedTarget = we),
                (P = me)),
              (we = P),
              J && se)
            )
              t: {
                for (me = c0, q = J, G = se, X = 0, P = q; P; P = me(P)) X++;
                P = 0;
                for (var fe = G; fe; fe = me(fe)) P++;
                for (; 0 < X - P; ) ((q = me(q)), X--);
                for (; 0 < P - X; ) ((G = me(G)), P--);
                for (; X--; ) {
                  if (q === G || (G !== null && q === G.alternate)) {
                    me = q;
                    break t;
                  }
                  ((q = me(q)), (G = me(G)));
                }
                me = null;
              }
            else me = null;
            (J !== null && qd(ee, Z, J, me, !1),
              se !== null && we !== null && qd(ee, we, se, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? sa(Q) : window),
            (J = Z.nodeName && Z.nodeName.toLowerCase()),
            J === 'select' || (J === 'input' && Z.type === 'file'))
          )
            var Re = ac;
          else if (nc(Z))
            if (ic) Re = Ev;
            else {
              Re = Sv;
              var ce = pv;
            }
          else
            ((J = Z.nodeName),
              !J || J.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && Ju(Q.elementType) && (Re = ac)
                : (Re = xv));
          if (Re && (Re = Re(e, Q))) {
            lc(ee, Re, n, k);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              Ku(Z, 'number', Z.value));
        }
        switch (((ce = Q ? sa(Q) : window), e)) {
          case 'focusin':
            (nc(ce) || ce.contentEditable === 'true') && ((Cl = ce), (rr = Q), (ya = null));
            break;
          case 'focusout':
            ya = rr = Cl = null;
            break;
          case 'mousedown':
            sr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((sr = !1), mc(ee, n, k));
            break;
          case 'selectionchange':
            if (bv) break;
          case 'keydown':
          case 'keyup':
            mc(ee, n, k);
        }
        var pe;
        if (lr)
          e: {
            switch (e) {
              case 'compositionstart':
                var Te = 'onCompositionStart';
                break e;
              case 'compositionend':
                Te = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Te = 'onCompositionUpdate';
                break e;
            }
            Te = void 0;
          }
        else
          Rl
            ? ec(e, n) && (Te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Te = 'onCompositionStart');
        (Te &&
          (Wo &&
            n.locale !== 'ko' &&
            (Rl || Te !== 'onCompositionStart'
              ? Te === 'onCompositionEnd' && Rl && (pe = Ko())
              : ((yn = k), (Pu = 'value' in yn ? yn.value : yn.textContent), (Rl = !0))),
          (ce = fu(Q, Te)),
          0 < ce.length &&
            ((Te = new $o(Te, e, null, n, k)),
            ee.push({ event: Te, listeners: ce }),
            pe ? (Te.data = pe) : ((pe = tc(n)), pe !== null && (Te.data = pe)))),
          (pe = mv ? hv(e, n) : vv(e, n)) &&
            ((Te = fu(Q, 'onBeforeInput')),
            0 < Te.length &&
              ((ce = new $o('onBeforeInput', 'beforeinput', null, n, k)),
              ee.push({ event: ce, listeners: Te }),
              (ce.data = pe))),
          u0(ee, e, Q, n, k));
      }
      Gd(ee, t);
    });
  }
  function qa(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = oa(e, n)),
          a != null && l.unshift(qa(e, a, u)),
          (a = oa(e, t)),
          a != null && l.push(qa(e, a, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function c0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qd(e, t, n, l, a) {
    for (var u = t._reactName, S = []; n !== null && n !== l; ) {
      var C = n,
        N = C.alternate,
        Q = C.stateNode;
      if (((C = C.tag), N !== null && N === l)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        Q === null ||
        ((N = Q),
        a
          ? ((Q = oa(n, u)), Q != null && S.unshift(qa(n, Q, N)))
          : a || ((Q = oa(n, u)), Q != null && S.push(qa(n, Q, N)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var f0 = /\r\n?/g,
    d0 = /\u0000|\uFFFD/g;
  function Xd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        f0,
        `
`
      )
      .replace(d0, '');
  }
  function Qd(e, t) {
    return ((t = Xd(t)), Xd(e) === t);
  }
  function Be(e, t, n, l, a, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || El(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && El(e, '' + l);
        break;
      case 'className':
        vi(e, 'class', l);
        break;
      case 'tabIndex':
        vi(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        vi(e, n, l);
        break;
      case 'style':
        Xo(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          vi(e, 'data', l);
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
        ((l = yi('' + l)), e.setAttribute(n, l));
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
              ? (t !== 'input' && Be(e, t, 'name', a.name, a, null),
                Be(e, t, 'formEncType', a.formEncType, a, null),
                Be(e, t, 'formMethod', a.formMethod, a, null),
                Be(e, t, 'formTarget', a.formTarget, a, null))
              : (Be(e, t, 'encType', a.encType, a, null),
                Be(e, t, 'method', a.method, a, null),
                Be(e, t, 'target', a.target, a, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = yi('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Jt);
        break;
      case 'onScroll':
        l != null && xe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && xe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(x(61));
          if (((n = l.__html), n != null)) {
            if (a.children != null) throw Error(x(60));
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
        ((n = yi('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (xe('beforetoggle', e), xe('toggle', e), hi(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        hi(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Gh.get(n) || n), hi(e, n, l));
    }
  }
  function ws(e, t, n, l, a, u) {
    switch (n) {
      case 'style':
        Xo(e, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(x(61));
          if (((n = l.__html), n != null)) {
            if (a.children != null) throw Error(x(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? El(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && El(e, '' + l);
        break;
      case 'onScroll':
        l != null && xe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && xe('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Jt);
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
        if (!No.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((a = n.endsWith('Capture')),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              (u = e[rt] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, a),
              typeof l == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, a));
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : hi(e, n, l);
          }
    }
  }
  function lt(e, t, n) {
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
        (xe('error', e), xe('load', e));
        var l = !1,
          a = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var S = n[u];
            if (S != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  a = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(x(137, t));
                default:
                  Be(e, t, u, S, n, null);
              }
          }
        (a && Be(e, t, 'srcSet', n.srcSet, n, null), l && Be(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        xe('invalid', e);
        var C = (u = S = a = null),
          N = null,
          Q = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var k = n[l];
            if (k != null)
              switch (l) {
                case 'name':
                  a = k;
                  break;
                case 'type':
                  S = k;
                  break;
                case 'checked':
                  N = k;
                  break;
                case 'defaultChecked':
                  Q = k;
                  break;
                case 'value':
                  u = k;
                  break;
                case 'defaultValue':
                  C = k;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (k != null) throw Error(x(137, t));
                  break;
                default:
                  Be(e, t, l, k, n, null);
              }
          }
        Yo(e, u, C, N, Q, S, a, !1);
        return;
      case 'select':
        (xe('invalid', e), (l = S = u = null));
        for (a in n)
          if (n.hasOwnProperty(a) && ((C = n[a]), C != null))
            switch (a) {
              case 'value':
                u = C;
                break;
              case 'defaultValue':
                S = C;
                break;
              case 'multiple':
                l = C;
              default:
                Be(e, t, a, C, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!l),
          t != null ? xl(e, !!l, t, !1) : n != null && xl(e, !!l, n, !0));
        return;
      case 'textarea':
        (xe('invalid', e), (u = a = l = null));
        for (S in n)
          if (n.hasOwnProperty(S) && ((C = n[S]), C != null))
            switch (S) {
              case 'value':
                l = C;
                break;
              case 'defaultValue':
                a = C;
                break;
              case 'children':
                u = C;
                break;
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(x(91));
                break;
              default:
                Be(e, t, S, C, n, null);
            }
        Vo(e, l, a, u);
        return;
      case 'option':
        for (N in n)
          if (n.hasOwnProperty(N) && ((l = n[N]), l != null))
            switch (N) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Be(e, t, N, l, n, null);
            }
        return;
      case 'dialog':
        (xe('beforetoggle', e), xe('toggle', e), xe('cancel', e), xe('close', e));
        break;
      case 'iframe':
      case 'object':
        xe('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Va.length; l++) xe(Va[l], e);
        break;
      case 'image':
        (xe('error', e), xe('load', e));
        break;
      case 'details':
        xe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (xe('error', e), xe('load', e));
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
        for (Q in n)
          if (n.hasOwnProperty(Q) && ((l = n[Q]), l != null))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(x(137, t));
              default:
                Be(e, t, Q, l, n, null);
            }
        return;
      default:
        if (Ju(t)) {
          for (k in n)
            n.hasOwnProperty(k) && ((l = n[k]), l !== void 0 && ws(e, t, k, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && Be(e, t, C, l, n, null));
  }
  function m0(e, t, n, l) {
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
          S = null,
          C = null,
          N = null,
          Q = null,
          k = null;
        for (J in n) {
          var ee = n[J];
          if (n.hasOwnProperty(J) && ee != null)
            switch (J) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                N = ee;
              default:
                l.hasOwnProperty(J) || Be(e, t, J, null, l, ee);
            }
        }
        for (var Z in l) {
          var J = l[Z];
          if (((ee = n[Z]), l.hasOwnProperty(Z) && (J != null || ee != null)))
            switch (Z) {
              case 'type':
                u = J;
                break;
              case 'name':
                a = J;
                break;
              case 'checked':
                Q = J;
                break;
              case 'defaultChecked':
                k = J;
                break;
              case 'value':
                S = J;
                break;
              case 'defaultValue':
                C = J;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (J != null) throw Error(x(137, t));
                break;
              default:
                J !== ee && Be(e, t, Z, J, l, ee);
            }
        }
        Zu(e, S, C, N, Q, k, u, a);
        return;
      case 'select':
        J = S = C = Z = null;
        for (u in n)
          if (((N = n[u]), n.hasOwnProperty(u) && N != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                J = N;
              default:
                l.hasOwnProperty(u) || Be(e, t, u, null, l, N);
            }
        for (a in l)
          if (((u = l[a]), (N = n[a]), l.hasOwnProperty(a) && (u != null || N != null)))
            switch (a) {
              case 'value':
                Z = u;
                break;
              case 'defaultValue':
                C = u;
                break;
              case 'multiple':
                S = u;
              default:
                u !== N && Be(e, t, a, u, l, N);
            }
        ((t = C),
          (n = S),
          (l = J),
          Z != null
            ? xl(e, !!n, Z, !1)
            : !!l != !!n && (t != null ? xl(e, !!n, t, !0) : xl(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        J = Z = null;
        for (C in n)
          if (((a = n[C]), n.hasOwnProperty(C) && a != null && !l.hasOwnProperty(C)))
            switch (C) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Be(e, t, C, null, l, a);
            }
        for (S in l)
          if (((a = l[S]), (u = n[S]), l.hasOwnProperty(S) && (a != null || u != null)))
            switch (S) {
              case 'value':
                Z = a;
                break;
              case 'defaultValue':
                J = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(x(91));
                break;
              default:
                a !== u && Be(e, t, S, a, l, u);
            }
        Go(e, Z, J);
        return;
      case 'option':
        for (var se in n)
          if (((Z = n[se]), n.hasOwnProperty(se) && Z != null && !l.hasOwnProperty(se)))
            switch (se) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Be(e, t, se, null, l, Z);
            }
        for (N in l)
          if (((Z = l[N]), (J = n[N]), l.hasOwnProperty(N) && Z !== J && (Z != null || J != null)))
            switch (N) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                Be(e, t, N, Z, l, J);
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
        for (var me in n)
          ((Z = n[me]),
            n.hasOwnProperty(me) && Z != null && !l.hasOwnProperty(me) && Be(e, t, me, null, l, Z));
        for (Q in l)
          if (((Z = l[Q]), (J = n[Q]), l.hasOwnProperty(Q) && Z !== J && (Z != null || J != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                Be(e, t, Q, Z, l, J);
            }
        return;
      default:
        if (Ju(t)) {
          for (var we in n)
            ((Z = n[we]),
              n.hasOwnProperty(we) &&
                Z !== void 0 &&
                !l.hasOwnProperty(we) &&
                ws(e, t, we, void 0, l, Z));
          for (k in l)
            ((Z = l[k]),
              (J = n[k]),
              !l.hasOwnProperty(k) ||
                Z === J ||
                (Z === void 0 && J === void 0) ||
                ws(e, t, k, Z, l, J));
          return;
        }
    }
    for (var q in n)
      ((Z = n[q]),
        n.hasOwnProperty(q) && Z != null && !l.hasOwnProperty(q) && Be(e, t, q, null, l, Z));
    for (ee in l)
      ((Z = l[ee]),
        (J = n[ee]),
        !l.hasOwnProperty(ee) || Z === J || (Z == null && J == null) || Be(e, t, ee, Z, l, J));
  }
  function Zd(e) {
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
  function h0() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), l = 0;
        l < n.length;
        l++
      ) {
        var a = n[l],
          u = a.transferSize,
          S = a.initiatorType,
          C = a.duration;
        if (u && C && Zd(S)) {
          for (S = 0, C = a.responseEnd, l += 1; l < n.length; l++) {
            var N = n[l],
              Q = N.startTime;
            if (Q > C) break;
            var k = N.transferSize,
              ee = N.initiatorType;
            k && Zd(ee) && ((N = N.responseEnd), (S += k * (N < C ? 1 : (C - Q) / (N - Q))));
          }
          if ((--l, (t += (8 * (u + S)) / (a.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var Ns = null,
    _s = null;
  function du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Kd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Jd(e, t) {
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
  function Hs(e, t) {
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
  function v0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Ls ? !1 : ((Ls = e), !0)) : ((Ls = null), !1);
  }
  var Fd = typeof setTimeout == 'function' ? setTimeout : void 0,
    g0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $d = typeof Promise == 'function' ? Promise : void 0,
    y0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $d < 'u'
          ? function (e) {
              return $d.resolve(null).then(e).catch(p0);
            }
          : Fd;
  function p0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Nn(e) {
    return e === 'head';
  }
  function kd(e, t) {
    var n = t,
      l = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(a), Pl(t));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') Xa(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Xa(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              C = u.nodeName;
            (u[ra] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && Xa(e.ownerDocument.body);
      n = a;
    } while (n);
    Pl(t);
  }
  function Wd(e, t) {
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
  function js(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (js(n), Xu(n));
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
  function S0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[ra])
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
      if (((e = wt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function x0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Pd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = wt(e.nextSibling)), e === null)
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
  function E0(e, t) {
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
  function wt(e) {
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
  function Id(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return wt(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function em(e) {
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
  function tm(e, t, n) {
    switch (((t = du(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(x(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(x(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(x(454));
        return e;
      default:
        throw Error(x(451));
    }
  }
  function Xa(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Xu(e);
  }
  var Nt = new Map(),
    nm = new Set();
  function mu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var cn = K.d;
  K.d = { f: T0, r: b0, D: R0, C: C0, L: A0, m: M0, X: D0, S: z0, M: O0 };
  function T0() {
    var e = cn.f(),
      t = au();
    return e || t;
  }
  function b0(e) {
    var t = yl(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Sf(t) : cn.r(e);
  }
  var $l = typeof document > 'u' ? null : document;
  function lm(e, t, n) {
    var l = $l;
    if (l && typeof t == 'string' && t) {
      var a = At(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof n == 'string' && (a += '[crossorigin="' + n + '"]'),
        nm.has(a) ||
          (nm.add(a),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(a) === null &&
            ((t = l.createElement('link')), lt(t, 'link', e), ke(t), l.head.appendChild(t))));
    }
  }
  function R0(e) {
    (cn.D(e), lm('dns-prefetch', e, null));
  }
  function C0(e, t) {
    (cn.C(e, t), lm('preconnect', e, t));
  }
  function A0(e, t, n) {
    cn.L(e, t, n);
    var l = $l;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + At(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((a += '[imagesrcset="' + At(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (a += '[imagesizes="' + At(n.imageSizes) + '"]'))
        : (a += '[href="' + At(e) + '"]');
      var u = a;
      switch (t) {
        case 'style':
          u = kl(e);
          break;
        case 'script':
          u = Wl(e);
      }
      Nt.has(u) ||
        ((e = g(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Nt.set(u, e),
        l.querySelector(a) !== null ||
          (t === 'style' && l.querySelector(Qa(u))) ||
          (t === 'script' && l.querySelector(Za(u))) ||
          ((t = l.createElement('link')), lt(t, 'link', e), ke(t), l.head.appendChild(t)));
    }
  }
  function M0(e, t) {
    cn.m(e, t);
    var n = $l;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        a = 'link[rel="modulepreload"][as="' + At(l) + '"][href="' + At(e) + '"]',
        u = a;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Wl(e);
      }
      if (
        !Nt.has(u) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)), Nt.set(u, e), n.querySelector(a) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Za(u))) return;
        }
        ((l = n.createElement('link')), lt(l, 'link', e), ke(l), n.head.appendChild(l));
      }
    }
  }
  function z0(e, t, n) {
    cn.S(e, t, n);
    var l = $l;
    if (l && e) {
      var a = pl(l).hoistableStyles,
        u = kl(e);
      t = t || 'default';
      var S = a.get(u);
      if (!S) {
        var C = { loading: 0, preload: null };
        if ((S = l.querySelector(Qa(u)))) C.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Nt.get(u)) && qs(e, n));
          var N = (S = l.createElement('link'));
          (ke(N),
            lt(N, 'link', e),
            (N._p = new Promise(function (Q, k) {
              ((N.onload = Q), (N.onerror = k));
            })),
            N.addEventListener('load', function () {
              C.loading |= 1;
            }),
            N.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            hu(S, t, l));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: C }), a.set(u, S));
      }
    }
  }
  function D0(e, t) {
    cn.X(e, t);
    var n = $l;
    if (n && e) {
      var l = pl(n).hoistableScripts,
        a = Wl(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(Za(a))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Nt.get(a)) && Xs(e, t),
          (u = n.createElement('script')),
          ke(u),
          lt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function O0(e, t) {
    cn.M(e, t);
    var n = $l;
    if (n && e) {
      var l = pl(n).hoistableScripts,
        a = Wl(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(Za(a))),
        u ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Nt.get(a)) && Xs(e, t),
          (u = n.createElement('script')),
          ke(u),
          lt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function am(e, t, n, l) {
    var a = (a = ne.current) ? mu(a) : null;
    if (!a) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = kl(n.href)),
            (n = pl(a).hoistableStyles),
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
          e = kl(n.href);
          var u = pl(a).hoistableStyles,
            S = u.get(e);
          if (
            (S ||
              ((a = a.ownerDocument || a),
              (S = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, S),
              (u = a.querySelector(Qa(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
              Nt.has(e) ||
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
                Nt.set(e, n),
                u || U0(a, e, n, S.state))),
            t && l === null)
          )
            throw Error(x(528, ''));
          return S;
        }
        if (t && l !== null) throw Error(x(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Wl(n)),
              (n = pl(a).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function kl(e) {
    return 'href="' + At(e) + '"';
  }
  function Qa(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function im(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function U0(e, t, n, l) {
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
        lt(t, 'link', n),
        ke(t),
        e.head.appendChild(t));
  }
  function Wl(e) {
    return '[src="' + At(e) + '"]';
  }
  function Za(e) {
    return 'script[async]' + e;
  }
  function um(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + At(n.href) + '"]');
          if (l) return ((t.instance = l), ke(l), l);
          var a = g({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            ke(l),
            lt(l, 'style', a),
            hu(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          a = kl(n.href);
          var u = e.querySelector(Qa(a));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ke(u), u);
          ((l = im(n)),
            (a = Nt.get(a)) && qs(l, a),
            (u = (e.ownerDocument || e).createElement('link')),
            ke(u));
          var S = u;
          return (
            (S._p = new Promise(function (C, N) {
              ((S.onload = C), (S.onerror = N));
            })),
            lt(u, 'link', l),
            (t.state.loading |= 4),
            hu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Wl(n.src)),
            (a = e.querySelector(Za(u)))
              ? ((t.instance = a), ke(a), a)
              : ((l = n),
                (a = Nt.get(u)) && ((l = g({}, n)), Xs(l, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                ke(a),
                lt(a, 'link', l),
                e.head.appendChild(a),
                (t.instance = a))
          );
        case 'void':
          return null;
        default:
          throw Error(x(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), hu(l, n.precedence, e));
    return t.instance;
  }
  function hu(e, t, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = l.length ? l[l.length - 1] : null,
        u = a,
        S = 0;
      S < l.length;
      S++
    ) {
      var C = l[S];
      if (C.dataset.precedence === t) u = C;
      else if (u !== a) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
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
  var vu = null;
  function rm(e, t, n) {
    if (vu === null) {
      var l = new Map(),
        a = (vu = new Map());
      a.set(n, l);
    } else ((a = vu), (l = a.get(n)), l || ((l = new Map()), a.set(n, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (
        !(u[ra] || u[Ie] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var S = u.getAttribute(t) || '';
        S = e + S;
        var C = l.get(S);
        C ? C.push(u) : l.set(S, [u]);
      }
    }
    return l;
  }
  function sm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function B0(e, t, n) {
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
  function om(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function w0(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var a = kl(l.href),
          u = t.querySelector(Qa(a));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = gu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ke(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (l = im(l)),
          (a = Nt.get(a)) && qs(l, a),
          (u = u.createElement('link')),
          ke(u));
        var S = u;
        ((S._p = new Promise(function (C, N) {
          ((S.onload = C), (S.onerror = N));
        })),
          lt(u, 'link', l),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = gu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Qs = 0;
  function N0(e, t) {
    return (
      e.stylesheets && e.count === 0 && pu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && pu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Qs === 0 && (Qs = 62500 * h0());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && pu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Qs ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(a));
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
        (e.count++, (yu = new Map()), t.forEach(_0, e), (yu = null), gu.call(e)));
  }
  function _0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = yu.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), yu.set(e, n));
        for (
          var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < a.length;
          u++
        ) {
          var S = a[u];
          (S.nodeName === 'LINK' || S.getAttribute('media') !== 'not all') &&
            (n.set(S.dataset.precedence, S), (l = S));
        }
        l && n.set(null, l);
      }
      ((a = t.instance),
        (S = a.getAttribute('data-precedence')),
        (u = n.get(S) || l),
        u === l && n.set(null, a),
        n.set(S, a),
        this.count++,
        (l = gu.bind(this)),
        a.addEventListener('load', l),
        a.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ka = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function H0(e, t, n, l, a, u, S, C, N) {
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
      (this.identifierPrefix = l),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = N),
      (this.incompleteTransitions = new Map()));
  }
  function cm(e, t, n, l, a, u, S, C, N, Q, k, ee) {
    return (
      (e = new H0(e, t, n, S, N, Q, k, ee, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = St(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = br()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Mr(u),
      e
    );
  }
  function fm(e) {
    return e ? ((e = zl), e) : zl;
  }
  function dm(e, t, n, l, a, u) {
    ((a = fm(a)),
      l.context === null ? (l.context = a) : (l.pendingContext = a),
      (l = bn(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = Rn(e, l, t)),
      n !== null && (mt(n, e, t), Ra(n, e, t)));
  }
  function mm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Zs(e, t) {
    (mm(e, t), (e = e.alternate) && mm(e, t));
  }
  function hm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Fn(e, 67108864);
      (t !== null && mt(t, e, 67108864), Zs(e, 67108864));
    }
  }
  function vm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = Gu(t);
      var n = Fn(e, t);
      (n !== null && mt(n, e, t), Zs(e, t));
    }
  }
  var Su = !0;
  function L0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 2), Ks(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function j0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 8), Ks(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function Ks(e, t, n, l) {
    if (Su) {
      var a = Js(l);
      if (a === null) (Bs(e, t, l, xu, n), ym(e, l));
      else if (G0(a, e, t, n, l)) l.stopPropagation();
      else if ((ym(e, l), t & 4 && -1 < Y0.indexOf(e))) {
        for (; a !== null; ) {
          var u = yl(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Xn(u.pendingLanes);
                  if (S !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var N = 1 << (31 - yt(S));
                      ((C.entanglements[1] |= N), (S &= ~N));
                    }
                    (Qt(u), (Ae & 6) === 0 && ((nu = at() + 500), Ga(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = Fn(u, 2)), C !== null && mt(C, u, 2), au(), Zs(u, 2));
            }
          if (((u = Js(l)), u === null && Bs(e, t, l, xu, n), u === a)) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else Bs(e, t, l, null, n);
    }
  }
  function Js(e) {
    return ((e = $u(e)), Fs(e));
  }
  var xu = null;
  function Fs(e) {
    if (((xu = null), (e = gl(e)), e !== null)) {
      var t = i(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = f(t)), e !== null)) return e;
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
    return ((xu = e), null);
  }
  function gm(e) {
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
          case Vn:
            return 2;
          case oi:
            return 8;
          case ml:
          case hl:
            return 32;
          case qn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $s = !1,
    _n = null,
    Hn = null,
    Ln = null,
    Ja = new Map(),
    Fa = new Map(),
    jn = [],
    Y0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function ym(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        _n = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Hn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ln = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ja.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Fa.delete(t.pointerId);
    }
  }
  function $a(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = yl(t)), t !== null && hm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function G0(e, t, n, l, a) {
    switch (t) {
      case 'focusin':
        return ((_n = $a(_n, e, t, n, l, a)), !0);
      case 'dragenter':
        return ((Hn = $a(Hn, e, t, n, l, a)), !0);
      case 'mouseover':
        return ((Ln = $a(Ln, e, t, n, l, a)), !0);
      case 'pointerover':
        var u = a.pointerId;
        return (Ja.set(u, $a(Ja.get(u) || null, e, t, n, l, a)), !0);
      case 'gotpointercapture':
        return ((u = a.pointerId), Fa.set(u, $a(Fa.get(u) || null, e, t, n, l, a)), !0);
    }
    return !1;
  }
  function pm(e) {
    var t = gl(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Uo(e.priority, function () {
                vm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Uo(e.priority, function () {
                vm(n);
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
  function Eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Js(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Fu = l), n.target.dispatchEvent(l), (Fu = null));
      } else return ((t = yl(n)), t !== null && hm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Sm(e, t, n) {
    Eu(e) && n.delete(t);
  }
  function V0() {
    (($s = !1),
      _n !== null && Eu(_n) && (_n = null),
      Hn !== null && Eu(Hn) && (Hn = null),
      Ln !== null && Eu(Ln) && (Ln = null),
      Ja.forEach(Sm),
      Fa.forEach(Sm));
  }
  function Tu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      $s || (($s = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, V0)));
  }
  var bu = null;
  function xm(e) {
    bu !== e &&
      ((bu = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        bu === e && (bu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            a = e[t + 2];
          if (typeof l != 'function') {
            if (Fs(l || n) === null) continue;
            break;
          }
          var u = yl(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Jr(u, { pending: !0, data: a, method: n.method, action: l }, l, a));
        }
      }));
  }
  function Pl(e) {
    function t(N) {
      return Tu(N, e);
    }
    (_n !== null && Tu(_n, e),
      Hn !== null && Tu(Hn, e),
      Ln !== null && Tu(Ln, e),
      Ja.forEach(t),
      Fa.forEach(t));
    for (var n = 0; n < jn.length; n++) {
      var l = jn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
      (pm(n), n.blockedOn === null && jn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var a = n[l],
          u = n[l + 1],
          S = a[rt] || null;
        if (typeof u == 'function') S || xm(n);
        else if (S) {
          var C = null;
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (S = u[rt] || null))) C = S.formAction;
            else if (Fs(a) !== null) continue;
          } else C = S.action;
          (typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), xm(n));
        }
      }
  }
  function Em() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (S) {
              return (a = S);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (a !== null && (a(), (a = null)), l || setTimeout(n, 20));
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
        a = null;
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
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function ks(e) {
    this._internalRoot = e;
  }
  ((Ru.prototype.render = ks.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        l = Rt();
      dm(n, l, e, t, null, null);
    }),
    (Ru.prototype.unmount = ks.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (dm(e.current, 2, null, e, null, null), au(), (t[vl] = null));
        }
      }));
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
      (jn.splice(n, 0, e), n === 0 && pm(e));
    }
  };
  var Tm = R.version;
  if (Tm !== '19.2.5') throw Error(x(527, Tm, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var q0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: V,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        ((aa = Cu.inject(q0)), (gt = Cu));
      } catch {}
  }
  return (
    (Wa.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        l = '',
        a = Df,
        u = Of,
        S = Uf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = cm(e, 1, !1, null, null, n, l, null, a, u, S, Em)),
        (e[vl] = t.current),
        Us(e),
        new ks(t)
      );
    }),
    (Wa.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var l = !1,
        a = '',
        u = Df,
        S = Of,
        C = Uf,
        N = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (N = n.formState)),
        (t = cm(e, 1, !0, t, n ?? null, l, a, N, u, S, C, Em)),
        (t.context = fm(null)),
        (n = t.current),
        (l = Rt()),
        (l = Gu(l)),
        (a = bn(l)),
        (a.callback = null),
        Rn(n, a, l),
        (n = l),
        (t.current.lanes = n),
        ua(t, n),
        Qt(t),
        (e[vl] = t.current),
        Us(e),
        new Ru(t)
      );
    }),
    (Wa.version = '19.2.5'),
    Wa
  );
}
var wm;
function I0() {
  if (wm) return Ps.exports;
  wm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (R) {
        console.error(R);
      }
  }
  return (c(), (Ps.exports = P0()), Ps.exports);
}
var eg = I0(),
  Y = vo();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Nm = 'popstate';
function _m(c) {
  return (
    typeof c == 'object' &&
    c != null &&
    'pathname' in c &&
    'search' in c &&
    'hash' in c &&
    'state' in c &&
    'key' in c
  );
}
function tg(c = {}) {
  function R(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: f, search: d, hash: s } = i || x.location;
    return fo(
      '',
      { pathname: f, search: d, hash: s },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || 'default',
      i
        ? { pathname: x.location.pathname, search: x.location.search, hash: x.location.hash }
        : void 0
    );
  }
  function b(x, h) {
    return typeof h == 'string' ? h : ti(h);
  }
  return lg(R, b, null, c);
}
function Ge(c, R) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(R);
}
function Zt(c, R) {
  if (!c) {
    typeof console < 'u' && console.warn(R);
    try {
      throw new Error(R);
    } catch {}
  }
}
function ng() {
  return Math.random().toString(36).substring(2, 10);
}
function Hm(c, R) {
  return {
    usr: c.state,
    key: c.key,
    idx: R,
    masked: c.unstable_mask ? { pathname: c.pathname, search: c.search, hash: c.hash } : void 0,
  };
}
function fo(c, R, b = null, x, h) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof R == 'string' ? ta(R) : R),
    state: b,
    key: (R && R.key) || x || ng(),
    unstable_mask: h,
  };
}
function ti({ pathname: c = '/', search: R = '', hash: b = '' }) {
  return (
    R && R !== '?' && (c += R.charAt(0) === '?' ? R : '?' + R),
    b && b !== '#' && (c += b.charAt(0) === '#' ? b : '#' + b),
    c
  );
}
function ta(c) {
  let R = {};
  if (c) {
    let b = c.indexOf('#');
    b >= 0 && ((R.hash = c.substring(b)), (c = c.substring(0, b)));
    let x = c.indexOf('?');
    (x >= 0 && ((R.search = c.substring(x)), (c = c.substring(0, x))), c && (R.pathname = c));
  }
  return R;
}
function lg(c, R, b, x = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = x,
    f = h.history,
    d = 'POP',
    s = null,
    m = o();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ''));
  function o() {
    return (f.state || { idx: null }).idx;
  }
  function g() {
    d = 'POP';
    let E = o(),
      A = E == null ? null : E - m;
    ((m = E), s && s({ action: d, location: v.location, delta: A }));
  }
  function y(E, A) {
    d = 'PUSH';
    let O = _m(E) ? E : fo(v.location, E, A);
    m = o() + 1;
    let U = Hm(O, m),
      _ = v.createHref(O.unstable_mask || O);
    try {
      f.pushState(U, '', _);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      h.location.assign(_);
    }
    i && s && s({ action: d, location: v.location, delta: 1 });
  }
  function r(E, A) {
    d = 'REPLACE';
    let O = _m(E) ? E : fo(v.location, E, A);
    m = o();
    let U = Hm(O, m),
      _ = v.createHref(O.unstable_mask || O);
    (f.replaceState(U, '', _), i && s && s({ action: d, location: v.location, delta: 0 }));
  }
  function p(E) {
    return ag(E);
  }
  let v = {
    get action() {
      return d;
    },
    get location() {
      return c(h, f);
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(Nm, g),
        (s = E),
        () => {
          (h.removeEventListener(Nm, g), (s = null));
        }
      );
    },
    createHref(E) {
      return R(h, E);
    },
    createURL: p,
    encodeLocation(E) {
      let A = p(E);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: y,
    replace: r,
    go(E) {
      return f.go(E);
    },
  };
  return v;
}
function ag(c, R = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Ge(b, 'No window.location.(origin|href) available to create URL'));
  let x = typeof c == 'string' ? c : ti(c);
  return ((x = x.replace(/ $/, '%20')), !R && x.startsWith('//') && (x = b + x), new URL(x, b));
}
function $m(c, R, b = '/') {
  return ig(c, R, b, !1);
}
function ig(c, R, b, x) {
  let h = typeof R == 'string' ? ta(R) : R,
    i = dn(h.pathname || '/', b);
  if (i == null) return null;
  let f = km(c);
  ug(f);
  let d = null;
  for (let s = 0; d == null && s < f.length; ++s) {
    let m = yg(i);
    d = vg(f[s], m, x);
  }
  return d;
}
function km(c, R = [], b = [], x = '', h = !1) {
  let i = (f, d, s = h, m) => {
    let o = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && s) return;
      (Ge(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let g = Yt([x, o.relativePath]),
      y = b.concat(o);
    (f.children &&
      f.children.length > 0 &&
      (Ge(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      km(f.children, R, y, g, s)),
      !(f.path == null && !f.index) && R.push({ path: g, score: mg(g, f.index), routesMeta: y }));
  };
  return (
    c.forEach((f, d) => {
      var s;
      if (f.path === '' || !((s = f.path) != null && s.includes('?'))) i(f, d);
      else for (let m of Wm(f.path)) i(f, d, !0, m);
    }),
    R
  );
}
function Wm(c) {
  let R = c.split('/');
  if (R.length === 0) return [];
  let [b, ...x] = R,
    h = b.endsWith('?'),
    i = b.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let f = Wm(x.join('/')),
    d = [];
  return (
    d.push(...f.map((s) => (s === '' ? i : [i, s].join('/')))),
    h && d.push(...f),
    d.map((s) => (c.startsWith('/') && s === '' ? '/' : s))
  );
}
function ug(c) {
  c.sort((R, b) =>
    R.score !== b.score
      ? b.score - R.score
      : hg(
          R.routesMeta.map((x) => x.childrenIndex),
          b.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var rg = /^:[\w-]+$/,
  sg = 3,
  og = 2,
  cg = 1,
  fg = 10,
  dg = -2,
  Lm = (c) => c === '*';
function mg(c, R) {
  let b = c.split('/'),
    x = b.length;
  return (
    b.some(Lm) && (x += dg),
    R && (x += og),
    b.filter((h) => !Lm(h)).reduce((h, i) => h + (rg.test(i) ? sg : i === '' ? cg : fg), x)
  );
}
function hg(c, R) {
  return c.length === R.length && c.slice(0, -1).every((x, h) => x === R[h])
    ? c[c.length - 1] - R[R.length - 1]
    : 0;
}
function vg(c, R, b = !1) {
  let { routesMeta: x } = c,
    h = {},
    i = '/',
    f = [];
  for (let d = 0; d < x.length; ++d) {
    let s = x[d],
      m = d === x.length - 1,
      o = i === '/' ? R : R.slice(i.length) || '/',
      g = Bu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: m }, o),
      y = s.route;
    if (
      (!g &&
        m &&
        b &&
        !x[x.length - 1].route.index &&
        (g = Bu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, o)),
      !g)
    )
      return null;
    (Object.assign(h, g.params),
      f.push({
        params: h,
        pathname: Yt([i, g.pathname]),
        pathnameBase: Eg(Yt([i, g.pathnameBase])),
        route: y,
      }),
      g.pathnameBase !== '/' && (i = Yt([i, g.pathnameBase])));
  }
  return f;
}
function Bu(c, R) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [b, x] = gg(c.path, c.caseSensitive, c.end),
    h = R.match(b);
  if (!h) return null;
  let i = h[0],
    f = i.replace(/(.)\/+$/, '$1'),
    d = h.slice(1);
  return {
    params: x.reduce((m, { paramName: o, isOptional: g }, y) => {
      if (o === '*') {
        let p = d[y] || '';
        f = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      const r = d[y];
      return (g && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: f,
    pattern: c,
  };
}
function gg(c, R = !1, b = !0) {
  Zt(
    c === '*' || !c.endsWith('*') || c.endsWith('/*'),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, '/*')}".`
  );
  let x = [],
    h =
      '^' +
      c
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (f, d, s, m, o) => {
          if ((x.push({ paramName: d, isOptional: s != null }), s)) {
            let g = o.charAt(m + f.length);
            return g && g !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    c.endsWith('*')
      ? (x.push({ paramName: '*' }), (h += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : b
        ? (h += '\\/*$')
        : c !== '' && c !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, R ? void 0 : 'i'), x]
  );
}
function yg(c) {
  try {
    return c
      .split('/')
      .map((R) => decodeURIComponent(R).replace(/\//g, '%2F'))
      .join('/');
  } catch (R) {
    return (
      Zt(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${R}).`
      ),
      c
    );
  }
}
function dn(c, R) {
  if (R === '/') return c;
  if (!c.toLowerCase().startsWith(R.toLowerCase())) return null;
  let b = R.endsWith('/') ? R.length - 1 : R.length,
    x = c.charAt(b);
  return x && x !== '/' ? null : c.slice(b) || '/';
}
var pg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Sg(c, R = '/') {
  let { pathname: b, search: x = '', hash: h = '' } = typeof c == 'string' ? ta(c) : c,
    i;
  return (
    b ? ((b = Im(b)), b.startsWith('/') ? (i = jm(b.substring(1), '/')) : (i = jm(b, R))) : (i = R),
    { pathname: i, search: Tg(x), hash: bg(h) }
  );
}
function jm(c, R) {
  let b = wu(R).split('/');
  return (
    c.split('/').forEach((h) => {
      h === '..' ? b.length > 1 && b.pop() : h !== '.' && b.push(h);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function lo(c, R, b, x) {
  return `Cannot include a '${c}' character in a manually specified \`to.${R}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xg(c) {
  return c.filter((R, b) => b === 0 || (R.route.path && R.route.path.length > 0));
}
function Pm(c) {
  let R = xg(c);
  return R.map((b, x) => (x === R.length - 1 ? b.pathname : b.pathnameBase));
}
function go(c, R, b, x = !1) {
  let h;
  typeof c == 'string'
    ? (h = ta(c))
    : ((h = { ...c }),
      Ge(!h.pathname || !h.pathname.includes('?'), lo('?', 'pathname', 'search', h)),
      Ge(!h.pathname || !h.pathname.includes('#'), lo('#', 'pathname', 'hash', h)),
      Ge(!h.search || !h.search.includes('#'), lo('#', 'search', 'hash', h)));
  let i = c === '' || h.pathname === '',
    f = i ? '/' : h.pathname,
    d;
  if (f == null) d = b;
  else {
    let g = R.length - 1;
    if (!x && f.startsWith('..')) {
      let y = f.split('/');
      for (; y[0] === '..'; ) (y.shift(), (g -= 1));
      h.pathname = y.join('/');
    }
    d = g >= 0 ? R[g] : '/';
  }
  let s = Sg(h, d),
    m = f && f !== '/' && f.endsWith('/'),
    o = (i || f === '.') && b.endsWith('/');
  return (!s.pathname.endsWith('/') && (m || o) && (s.pathname += '/'), s);
}
var Im = (c) => c.replace(/\/\/+/g, '/'),
  Yt = (c) => Im(c.join('/')),
  wu = (c) => c.replace(/\/+$/, ''),
  Eg = (c) => wu(c).replace(/^\/*/, '/'),
  Tg = (c) => (!c || c === '?' ? '' : c.startsWith('?') ? c : '?' + c),
  bg = (c) => (!c || c === '#' ? '' : c.startsWith('#') ? c : '#' + c),
  Rg = class {
    constructor(c, R, b, x = !1) {
      ((this.status = c),
        (this.statusText = R || ''),
        (this.internal = x),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function Cg(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Ag(c) {
  let R = c.map((b) => b.route.path).filter(Boolean);
  return Yt(R) || '/';
}
var eh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function th(c, R) {
  let b = c;
  if (typeof b != 'string' || !pg.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let x = b,
    h = !1;
  if (eh)
    try {
      let i = new URL(window.location.href),
        f = b.startsWith('//') ? new URL(i.protocol + b) : new URL(b),
        d = dn(f.pathname, R);
      f.origin === i.origin && d != null ? (b = d + f.search + f.hash) : (h = !0);
    } catch {
      Zt(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var nh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(nh);
var Mg = ['GET', ...nh];
new Set(Mg);
var na = Y.createContext(null);
na.displayName = 'DataRouter';
var Nu = Y.createContext(null);
Nu.displayName = 'DataRouterState';
var lh = Y.createContext(!1);
function zg() {
  return Y.useContext(lh);
}
var ah = Y.createContext({ isTransitioning: !1 });
ah.displayName = 'ViewTransition';
var Dg = Y.createContext(new Map());
Dg.displayName = 'Fetchers';
var Og = Y.createContext(null);
Og.displayName = 'Await';
var _t = Y.createContext(null);
_t.displayName = 'Navigation';
var ni = Y.createContext(null);
ni.displayName = 'Location';
var mn = Y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
mn.displayName = 'Route';
var yo = Y.createContext(null);
yo.displayName = 'RouteError';
var ih = 'REACT_ROUTER_ERROR',
  Ug = 'REDIRECT',
  Bg = 'ROUTE_ERROR_RESPONSE';
function wg(c) {
  if (c.startsWith(`${ih}:${Ug}:{`))
    try {
      let R = JSON.parse(c.slice(28));
      if (
        typeof R == 'object' &&
        R &&
        typeof R.status == 'number' &&
        typeof R.statusText == 'string' &&
        typeof R.location == 'string' &&
        typeof R.reloadDocument == 'boolean' &&
        typeof R.replace == 'boolean'
      )
        return R;
    } catch {}
}
function Ng(c) {
  if (c.startsWith(`${ih}:${Bg}:{`))
    try {
      let R = JSON.parse(c.slice(40));
      if (
        typeof R == 'object' &&
        R &&
        typeof R.status == 'number' &&
        typeof R.statusText == 'string'
      )
        return new Rg(R.status, R.statusText, R.data);
    } catch {}
}
function _g(c, { relative: R } = {}) {
  Ge(li(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: x } = Y.useContext(_t),
    { hash: h, pathname: i, search: f } = ai(c, { relative: R }),
    d = i;
  return (
    b !== '/' && (d = i === '/' ? b : Yt([b, i])),
    x.createHref({ pathname: d, search: f, hash: h })
  );
}
function li() {
  return Y.useContext(ni) != null;
}
function hn() {
  return (
    Ge(li(), 'useLocation() may be used only in the context of a <Router> component.'),
    Y.useContext(ni).location
  );
}
var uh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function rh(c) {
  Y.useContext(_t).static || Y.useLayoutEffect(c);
}
function Hg() {
  let { isDataRoute: c } = Y.useContext(mn);
  return c ? $g() : Lg();
}
function Lg() {
  Ge(li(), 'useNavigate() may be used only in the context of a <Router> component.');
  let c = Y.useContext(na),
    { basename: R, navigator: b } = Y.useContext(_t),
    { matches: x } = Y.useContext(mn),
    { pathname: h } = hn(),
    i = JSON.stringify(Pm(x)),
    f = Y.useRef(!1);
  return (
    rh(() => {
      f.current = !0;
    }),
    Y.useCallback(
      (s, m = {}) => {
        if ((Zt(f.current, uh), !f.current)) return;
        if (typeof s == 'number') {
          b.go(s);
          return;
        }
        let o = go(s, JSON.parse(i), h, m.relative === 'path');
        (c == null && R !== '/' && (o.pathname = o.pathname === '/' ? R : Yt([R, o.pathname])),
          (m.replace ? b.replace : b.push)(o, m.state, m));
      },
      [R, b, i, h, c]
    )
  );
}
Y.createContext(null);
function ai(c, { relative: R } = {}) {
  let { matches: b } = Y.useContext(mn),
    { pathname: x } = hn(),
    h = JSON.stringify(Pm(b));
  return Y.useMemo(() => go(c, JSON.parse(h), x, R === 'path'), [c, h, x, R]);
}
function jg(c, R) {
  return sh(c, R);
}
function sh(c, R, b) {
  var E;
  Ge(li(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = Y.useContext(_t),
    { matches: h } = Y.useContext(mn),
    i = h[h.length - 1],
    f = i ? i.params : {},
    d = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let A = (m && m.path) || '';
    ch(
      d,
      !m || A.endsWith('*') || A.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === '/' ? '*' : `${A}/*`}">.`
    );
  }
  let o = hn(),
    g;
  if (R) {
    let A = typeof R == 'string' ? ta(R) : R;
    (Ge(
      s === '/' || ((E = A.pathname) == null ? void 0 : E.startsWith(s)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ),
      (g = A));
  } else g = o;
  let y = g.pathname || '/',
    r = y;
  if (s !== '/') {
    let A = s.replace(/^\//, '').split('/');
    r = '/' + y.replace(/^\//, '').split('/').slice(A.length).join('/');
  }
  let p = $m(c, { pathname: r });
  (Zt(m || p != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    Zt(
      p == null ||
        p[p.length - 1].route.element !== void 0 ||
        p[p.length - 1].route.Component !== void 0 ||
        p[p.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = Xg(
    p &&
      p.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, f, A.params),
          pathname: Yt([
            s,
            x.encodeLocation
              ? x.encodeLocation(
                  A.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === '/'
              ? s
              : Yt([
                  s,
                  x.encodeLocation
                    ? x.encodeLocation(
                        A.pathnameBase
                          .replace(/%/g, '%25')
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : A.pathnameBase,
                ]),
        })
      ),
    h,
    b
  );
  return R && v
    ? Y.createElement(
        ni.Provider,
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
function Yg() {
  let c = Fg(),
    R = Cg(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
    b = c instanceof Error ? c.stack : null,
    x = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: x },
    i = { padding: '2px 4px', backgroundColor: x },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (f = Y.createElement(
      Y.Fragment,
      null,
      Y.createElement('p', null, '💿 Hey developer 👋'),
      Y.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        Y.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        Y.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    Y.createElement(
      Y.Fragment,
      null,
      Y.createElement('h2', null, 'Unexpected Application Error!'),
      Y.createElement('h3', { style: { fontStyle: 'italic' } }, R),
      b ? Y.createElement('pre', { style: h }, b) : null,
      f
    )
  );
}
var Gg = Y.createElement(Yg, null),
  oh = class extends Y.Component {
    constructor(c) {
      (super(c),
        (this.state = { location: c.location, revalidation: c.revalidation, error: c.error }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, R) {
      return R.location !== c.location || (R.revalidation !== 'idle' && c.revalidation === 'idle')
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : R.error,
            location: R.location,
            revalidation: c.revalidation || R.revalidation,
          };
    }
    componentDidCatch(c, R) {
      this.props.onError
        ? this.props.onError(c, R)
        : console.error('React Router caught the following error during render', c);
    }
    render() {
      let c = this.state.error;
      if (
        this.context &&
        typeof c == 'object' &&
        c &&
        'digest' in c &&
        typeof c.digest == 'string'
      ) {
        const b = Ng(c.digest);
        b && (c = b);
      }
      let R =
        c !== void 0
          ? Y.createElement(
              mn.Provider,
              { value: this.props.routeContext },
              Y.createElement(yo.Provider, { value: c, children: this.props.component })
            )
          : this.props.children;
      return this.context ? Y.createElement(Vg, { error: c }, R) : R;
    }
  };
oh.contextType = lh;
var ao = new WeakMap();
function Vg({ children: c, error: R }) {
  let { basename: b } = Y.useContext(_t);
  if (typeof R == 'object' && R && 'digest' in R && typeof R.digest == 'string') {
    let x = wg(R.digest);
    if (x) {
      let h = ao.get(R);
      if (h) throw h;
      let i = th(x.location, b);
      if (eh && !ao.get(R))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const f = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (ao.set(R, f), f);
        }
      return Y.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return c;
}
function qg({ routeContext: c, match: R, children: b }) {
  let x = Y.useContext(na);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (R.route.errorElement || R.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = R.route.id),
    Y.createElement(mn.Provider, { value: c }, b)
  );
}
function Xg(c, R = [], b) {
  let x = b == null ? void 0 : b.state;
  if (c == null) {
    if (!x) return null;
    if (x.errors) c = x.matches;
    else if (R.length === 0 && !x.initialized && x.matches.length > 0) c = x.matches;
    else return null;
  }
  let h = c,
    i = x == null ? void 0 : x.errors;
  if (i != null) {
    let o = h.findIndex((g) => g.route.id && (i == null ? void 0 : i[g.route.id]) !== void 0);
    (Ge(
      o >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (h = h.slice(0, Math.min(h.length, o + 1))));
  }
  let f = !1,
    d = -1;
  if (b && x) {
    f = x.renderFallback;
    for (let o = 0; o < h.length; o++) {
      let g = h[o];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (d = o), g.route.id)) {
        let { loaderData: y, errors: r } = x,
          p = g.route.loader && !y.hasOwnProperty(g.route.id) && (!r || r[g.route.id] === void 0);
        if (g.route.lazy || p) {
          (b.isStatic && (f = !0), d >= 0 ? (h = h.slice(0, d + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  }
  let s = b == null ? void 0 : b.onError,
    m =
      x && s
        ? (o, g) => {
            var y, r;
            s(o, {
              location: x.location,
              params:
                ((r = (y = x.matches) == null ? void 0 : y[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: Ag(x.matches),
              errorInfo: g,
            });
          }
        : void 0;
  return h.reduceRight((o, g, y) => {
    let r,
      p = !1,
      v = null,
      E = null;
    x &&
      ((r = i && g.route.id ? i[g.route.id] : void 0),
      (v = g.route.errorElement || Gg),
      f &&
        (d < 0 && y === 0
          ? (ch(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (p = !0),
            (E = null))
          : d === y && ((p = !0), (E = g.route.hydrateFallbackElement || null))));
    let A = R.concat(h.slice(0, y + 1)),
      O = () => {
        let U;
        return (
          r
            ? (U = v)
            : p
              ? (U = E)
              : g.route.Component
                ? (U = Y.createElement(g.route.Component, null))
                : g.route.element
                  ? (U = g.route.element)
                  : (U = o),
          Y.createElement(qg, {
            match: g,
            routeContext: { outlet: o, matches: A, isDataRoute: x != null },
            children: U,
          })
        );
      };
    return x && (g.route.ErrorBoundary || g.route.errorElement || y === 0)
      ? Y.createElement(oh, {
          location: x.location,
          revalidation: x.revalidation,
          component: v,
          error: r,
          children: O(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: m,
        })
      : O();
  }, null);
}
function po(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qg(c) {
  let R = Y.useContext(na);
  return (Ge(R, po(c)), R);
}
function Zg(c) {
  let R = Y.useContext(Nu);
  return (Ge(R, po(c)), R);
}
function Kg(c) {
  let R = Y.useContext(mn);
  return (Ge(R, po(c)), R);
}
function So(c) {
  let R = Kg(c),
    b = R.matches[R.matches.length - 1];
  return (Ge(b.route.id, `${c} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Jg() {
  return So('useRouteId');
}
function Fg() {
  var x;
  let c = Y.useContext(yo),
    R = Zg('useRouteError'),
    b = So('useRouteError');
  return c !== void 0 ? c : (x = R.errors) == null ? void 0 : x[b];
}
function $g() {
  let { router: c } = Qg('useNavigate'),
    R = So('useNavigate'),
    b = Y.useRef(!1);
  return (
    rh(() => {
      b.current = !0;
    }),
    Y.useCallback(
      async (h, i = {}) => {
        (Zt(b.current, uh),
          b.current &&
            (typeof h == 'number'
              ? await c.navigate(h)
              : await c.navigate(h, { fromRouteId: R, ...i })));
      },
      [c, R]
    )
  );
}
var Ym = {};
function ch(c, R, b) {
  !R && !Ym[c] && ((Ym[c] = !0), Zt(!1, b));
}
Y.memo(kg);
function kg({ routes: c, future: R, state: b, isStatic: x, onError: h }) {
  return sh(c, void 0, { state: b, isStatic: x, onError: h });
}
function mo(c) {
  Ge(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Wg({
  basename: c = '/',
  children: R = null,
  location: b,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: f,
}) {
  Ge(
    !li(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let d = c.replace(/^\/*/, '/'),
    s = Y.useMemo(
      () => ({ basename: d, navigator: h, static: i, unstable_useTransitions: f, future: {} }),
      [d, h, i, f]
    );
  typeof b == 'string' && (b = ta(b));
  let {
      pathname: m = '/',
      search: o = '',
      hash: g = '',
      state: y = null,
      key: r = 'default',
      unstable_mask: p,
    } = b,
    v = Y.useMemo(() => {
      let E = dn(m, d);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: g, state: y, key: r, unstable_mask: p },
            navigationType: x,
          };
    }, [d, m, o, g, y, r, x, p]);
  return (
    Zt(
      v != null,
      `<Router basename="${d}"> is not able to match the URL "${m}${o}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : Y.createElement(
          _t.Provider,
          { value: s },
          Y.createElement(ni.Provider, { children: R, value: v })
        )
  );
}
function Pg({ children: c, location: R }) {
  return jg(ho(c), R);
}
function ho(c, R = []) {
  let b = [];
  return (
    Y.Children.forEach(c, (x, h) => {
      if (!Y.isValidElement(x)) return;
      let i = [...R, h];
      if (x.type === Y.Fragment) {
        b.push.apply(b, ho(x.props.children, i));
        return;
      }
      (Ge(
        x.type === mo,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ge(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
      let f = {
        id: x.props.id || i.join('-'),
        caseSensitive: x.props.caseSensitive,
        element: x.props.element,
        Component: x.props.Component,
        index: x.props.index,
        path: x.props.path,
        middleware: x.props.middleware,
        loader: x.props.loader,
        action: x.props.action,
        hydrateFallbackElement: x.props.hydrateFallbackElement,
        HydrateFallback: x.props.HydrateFallback,
        errorElement: x.props.errorElement,
        ErrorBoundary: x.props.ErrorBoundary,
        hasErrorBoundary:
          x.props.hasErrorBoundary === !0 ||
          x.props.ErrorBoundary != null ||
          x.props.errorElement != null,
        shouldRevalidate: x.props.shouldRevalidate,
        handle: x.props.handle,
        lazy: x.props.lazy,
      };
      (x.props.children && (f.children = ho(x.props.children, i)), b.push(f));
    }),
    b
  );
}
var Du = 'get',
  Ou = 'application/x-www-form-urlencoded';
function _u(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function Ig(c) {
  return _u(c) && c.tagName.toLowerCase() === 'button';
}
function ey(c) {
  return _u(c) && c.tagName.toLowerCase() === 'form';
}
function ty(c) {
  return _u(c) && c.tagName.toLowerCase() === 'input';
}
function ny(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function ly(c, R) {
  return c.button === 0 && (!R || R === '_self') && !ny(c);
}
var Au = null;
function ay() {
  if (Au === null)
    try {
      (new FormData(document.createElement('form'), 0), (Au = !1));
    } catch {
      Au = !0;
    }
  return Au;
}
var iy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function io(c) {
  return c != null && !iy.has(c)
    ? (Zt(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`
      ),
      null)
    : c;
}
function uy(c, R) {
  let b, x, h, i, f;
  if (ey(c)) {
    let d = c.getAttribute('action');
    ((x = d ? dn(d, R) : null),
      (b = c.getAttribute('method') || Du),
      (h = io(c.getAttribute('enctype')) || Ou),
      (i = new FormData(c)));
  } else if (Ig(c) || (ty(c) && (c.type === 'submit' || c.type === 'image'))) {
    let d = c.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = c.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((x = s ? dn(s, R) : null),
      (b = c.getAttribute('formmethod') || d.getAttribute('method') || Du),
      (h = io(c.getAttribute('formenctype')) || io(d.getAttribute('enctype')) || Ou),
      (i = new FormData(d, c)),
      !ay())
    ) {
      let { name: m, type: o, value: g } = c;
      if (o === 'image') {
        let y = m ? `${m}.` : '';
        (i.append(`${y}x`, '0'), i.append(`${y}y`, '0'));
      } else m && i.append(m, g);
    }
  } else {
    if (_u(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((b = Du), (x = null), (h = Ou), (f = c));
  }
  return (
    i && h === 'text/plain' && ((f = i), (i = void 0)),
    { action: x, method: b.toLowerCase(), encType: h, formData: i, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function xo(c, R) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(R);
}
function fh(c, R, b, x) {
  let h =
    typeof c == 'string'
      ? new URL(c, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : c;
  return (
    b
      ? h.pathname.endsWith('/')
        ? (h.pathname = `${h.pathname}_.${x}`)
        : (h.pathname = `${h.pathname}.${x}`)
      : h.pathname === '/'
        ? (h.pathname = `_root.${x}`)
        : R && dn(h.pathname, R) === '/'
          ? (h.pathname = `${wu(R)}/_root.${x}`)
          : (h.pathname = `${wu(h.pathname)}.${x}`),
    h
  );
}
async function ry(c, R) {
  if (c.id in R) return R[c.id];
  try {
    let b = await import(c.module);
    return ((R[c.id] = b), b);
  } catch (b) {
    return (
      console.error(`Error loading route module \`${c.module}\`, reloading page...`),
      console.error(b),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function sy(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === 'preload' && typeof c.imageSrcSet == 'string' && typeof c.imageSizes == 'string'
      : typeof c.rel == 'string' && typeof c.href == 'string';
}
async function oy(c, R, b) {
  let x = await Promise.all(
    c.map(async (h) => {
      let i = R.routes[h.route.id];
      if (i) {
        let f = await ry(i, b);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return my(
    x
      .flat(1)
      .filter(sy)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function Gm(c, R, b, x, h, i) {
  let f = (s, m) => (b[m] ? s.route.id !== b[m].route.id : !0),
    d = (s, m) => {
      var o;
      return (
        b[m].pathname !== s.pathname ||
        (((o = b[m].route.path) == null ? void 0 : o.endsWith('*')) &&
          b[m].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? R.filter((s, m) => f(s, m) || d(s, m))
    : i === 'data'
      ? R.filter((s, m) => {
          var g;
          let o = x.routes[s.route.id];
          if (!o || !o.hasLoader) return !1;
          if (f(s, m) || d(s, m)) return !0;
          if (s.route.shouldRevalidate) {
            let y = s.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((g = b[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(c, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof y == 'boolean') return y;
          }
          return !0;
        })
      : [];
}
function cy(c, R, { includeHydrateFallback: b } = {}) {
  return fy(
    c
      .map((x) => {
        let h = R.routes[x.route.id];
        if (!h) return [];
        let i = [h.module];
        return (
          h.clientActionModule && (i = i.concat(h.clientActionModule)),
          h.clientLoaderModule && (i = i.concat(h.clientLoaderModule)),
          b && h.hydrateFallbackModule && (i = i.concat(h.hydrateFallbackModule)),
          h.imports && (i = i.concat(h.imports)),
          i
        );
      })
      .flat(1)
  );
}
function fy(c) {
  return [...new Set(c)];
}
function dy(c) {
  let R = {},
    b = Object.keys(c).sort();
  for (let x of b) R[x] = c[x];
  return R;
}
function my(c, R) {
  let b = new Set();
  return (
    new Set(R),
    c.reduce((x, h) => {
      let i = JSON.stringify(dy(h));
      return (b.has(i) || (b.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Eo() {
  let c = Y.useContext(na);
  return (xo(c, 'You must render this element inside a <DataRouterContext.Provider> element'), c);
}
function hy() {
  let c = Y.useContext(Nu);
  return (
    xo(c, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    c
  );
}
var To = Y.createContext(void 0);
To.displayName = 'FrameworkContext';
function bo() {
  let c = Y.useContext(To);
  return (xo(c, 'You must render this element inside a <HydratedRouter> element'), c);
}
function vy(c, R) {
  let b = Y.useContext(To),
    [x, h] = Y.useState(!1),
    [i, f] = Y.useState(!1),
    { onFocus: d, onBlur: s, onMouseEnter: m, onMouseLeave: o, onTouchStart: g } = R,
    y = Y.useRef(null);
  (Y.useEffect(() => {
    if ((c === 'render' && f(!0), c === 'viewport')) {
      let v = (A) => {
          A.forEach((O) => {
            f(O.isIntersecting);
          });
        },
        E = new IntersectionObserver(v, { threshold: 0.5 });
      return (
        y.current && E.observe(y.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [c]),
    Y.useEffect(() => {
      if (x) {
        let v = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(v);
        };
      }
    }, [x]));
  let r = () => {
      h(!0);
    },
    p = () => {
      (h(!1), f(!1));
    };
  return b
    ? c !== 'intent'
      ? [i, y, {}]
      : [
          i,
          y,
          {
            onFocus: Pa(d, r),
            onBlur: Pa(s, p),
            onMouseEnter: Pa(m, r),
            onMouseLeave: Pa(o, p),
            onTouchStart: Pa(g, r),
          },
        ]
    : [!1, y, {}];
}
function Pa(c, R) {
  return (b) => {
    (c && c(b), b.defaultPrevented || R(b));
  };
}
function gy({ page: c, ...R }) {
  let b = zg(),
    { router: x } = Eo(),
    h = Y.useMemo(() => $m(x.routes, c, x.basename), [x.routes, c, x.basename]);
  return h
    ? b
      ? Y.createElement(py, { page: c, matches: h, ...R })
      : Y.createElement(Sy, { page: c, matches: h, ...R })
    : null;
}
function yy(c) {
  let { manifest: R, routeModules: b } = bo(),
    [x, h] = Y.useState([]);
  return (
    Y.useEffect(() => {
      let i = !1;
      return (
        oy(c, R, b).then((f) => {
          i || h(f);
        }),
        () => {
          i = !0;
        }
      );
    }, [c, R, b]),
    x
  );
}
function py({ page: c, matches: R, ...b }) {
  let x = hn(),
    { future: h } = bo(),
    { basename: i } = Eo(),
    f = Y.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let d = fh(c, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        s = !1,
        m = [];
      for (let o of R)
        typeof o.route.shouldRevalidate == 'function' ? (s = !0) : m.push(o.route.id);
      return (
        s && m.length > 0 && d.searchParams.set('_routes', m.join(',')),
        [d.pathname + d.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, c, x, R]);
  return Y.createElement(
    Y.Fragment,
    null,
    f.map((d) => Y.createElement('link', { key: d, rel: 'prefetch', as: 'fetch', href: d, ...b }))
  );
}
function Sy({ page: c, matches: R, ...b }) {
  let x = hn(),
    { future: h, manifest: i, routeModules: f } = bo(),
    { basename: d } = Eo(),
    { loaderData: s, matches: m } = hy(),
    o = Y.useMemo(() => Gm(c, R, m, i, x, 'data'), [c, R, m, i, x]),
    g = Y.useMemo(() => Gm(c, R, m, i, x, 'assets'), [c, R, m, i, x]),
    y = Y.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (R.forEach((O) => {
          var _;
          let U = i.routes[O.route.id];
          !U ||
            !U.hasLoader ||
            ((!o.some((T) => T.route.id === O.route.id) &&
              O.route.id in s &&
              (_ = f[O.route.id]) != null &&
              _.shouldRevalidate) ||
            U.hasClientLoader
              ? (E = !0)
              : v.add(O.route.id));
        }),
        v.size === 0)
      )
        return [];
      let A = fh(c, d, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        E &&
          v.size > 0 &&
          A.searchParams.set(
            '_routes',
            R.filter((O) => v.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [A.pathname + A.search]
      );
    }, [d, h.unstable_trailingSlashAwareDataRequests, s, x, i, o, R, c, f]),
    r = Y.useMemo(() => cy(g, i), [g, i]),
    p = yy(g);
  return Y.createElement(
    Y.Fragment,
    null,
    y.map((v) => Y.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...b })),
    r.map((v) => Y.createElement('link', { key: v, rel: 'modulepreload', href: v, ...b })),
    p.map(({ key: v, link: E }) =>
      Y.createElement('link', {
        key: v,
        nonce: b.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? b.crossOrigin,
      })
    )
  );
}
function xy(...c) {
  return (R) => {
    c.forEach((b) => {
      typeof b == 'function' ? b(R) : b != null && (b.current = R);
    });
  };
}
var Ey =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Ey && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Ty({ basename: c, children: R, unstable_useTransitions: b, window: x }) {
  let h = Y.useRef();
  h.current == null && (h.current = tg({ window: x, v5Compat: !0 }));
  let i = h.current,
    [f, d] = Y.useState({ action: i.action, location: i.location }),
    s = Y.useCallback(
      (m) => {
        b === !1 ? d(m) : Y.startTransition(() => d(m));
      },
      [b]
    );
  return (
    Y.useLayoutEffect(() => i.listen(s), [i, s]),
    Y.createElement(Wg, {
      basename: c,
      children: R,
      location: f.location,
      navigationType: f.action,
      navigator: i,
      unstable_useTransitions: b,
    })
  );
}
var dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mh = Y.forwardRef(function (
    {
      onClick: R,
      discover: b = 'render',
      prefetch: x = 'none',
      relative: h,
      reloadDocument: i,
      replace: f,
      unstable_mask: d,
      state: s,
      target: m,
      to: o,
      preventScrollReset: g,
      viewTransition: y,
      unstable_defaultShouldRevalidate: r,
      ...p
    },
    v
  ) {
    let { basename: E, navigator: A, unstable_useTransitions: O } = Y.useContext(_t),
      U = typeof o == 'string' && dh.test(o),
      _ = th(o, E);
    o = _.to;
    let T = _g(o, { relative: h }),
      M = hn(),
      z = null;
    if (d) {
      let I = go(d, [], M.unstable_mask ? M.unstable_mask.pathname : '/', !0);
      (E !== '/' && (I.pathname = I.pathname === '/' ? E : Yt([E, I.pathname])),
        (z = A.createHref(I)));
    }
    let [D, w, B] = vy(x, p),
      j = Ay(o, {
        replace: f,
        unstable_mask: d,
        state: s,
        target: m,
        preventScrollReset: g,
        relative: h,
        viewTransition: y,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function L(I) {
      (R && R(I), I.defaultPrevented || j(I));
    }
    let F = !(_.isExternal || i),
      te = Y.createElement('a', {
        ...p,
        ...B,
        href: (F ? z : void 0) || _.absoluteURL || T,
        onClick: F ? L : R,
        ref: xy(v, w),
        target: m,
        'data-discover': !U && b === 'render' ? 'true' : void 0,
      });
    return D && !U ? Y.createElement(Y.Fragment, null, te, Y.createElement(gy, { page: T })) : te;
  });
mh.displayName = 'Link';
var by = Y.forwardRef(function (
  {
    'aria-current': R = 'page',
    caseSensitive: b = !1,
    className: x = '',
    end: h = !1,
    style: i,
    to: f,
    viewTransition: d,
    children: s,
    ...m
  },
  o
) {
  let g = ai(f, { relative: m.relative }),
    y = hn(),
    r = Y.useContext(Nu),
    { navigator: p, basename: v } = Y.useContext(_t),
    E = r != null && Uy(g) && d === !0,
    A = p.encodeLocation ? p.encodeLocation(g).pathname : g.pathname,
    O = y.pathname,
    U = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((O = O.toLowerCase()), (U = U ? U.toLowerCase() : null), (A = A.toLowerCase())),
    U && v && (U = dn(U, v) || U));
  const _ = A !== '/' && A.endsWith('/') ? A.length - 1 : A.length;
  let T = O === A || (!h && O.startsWith(A) && O.charAt(_) === '/'),
    M = U != null && (U === A || (!h && U.startsWith(A) && U.charAt(A.length) === '/')),
    z = { isActive: T, isPending: M, isTransitioning: E },
    D = T ? R : void 0,
    w;
  typeof x == 'function'
    ? (w = x(z))
    : (w = [x, T ? 'active' : null, M ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof i == 'function' ? i(z) : i;
  return Y.createElement(
    mh,
    { ...m, 'aria-current': D, className: w, ref: o, style: B, to: f, viewTransition: d },
    typeof s == 'function' ? s(z) : s
  );
});
by.displayName = 'NavLink';
var Ry = Y.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: R,
      navigate: b,
      reloadDocument: x,
      replace: h,
      state: i,
      method: f = Du,
      action: d,
      onSubmit: s,
      relative: m,
      preventScrollReset: o,
      viewTransition: g,
      unstable_defaultShouldRevalidate: y,
      ...r
    },
    p
  ) => {
    let { unstable_useTransitions: v } = Y.useContext(_t),
      E = Dy(),
      A = Oy(d, { relative: m }),
      O = f.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof d == 'string' && dh.test(d),
      _ = (T) => {
        if ((s && s(T), T.defaultPrevented)) return;
        T.preventDefault();
        let M = T.nativeEvent.submitter,
          z = (M == null ? void 0 : M.getAttribute('formmethod')) || f,
          D = () =>
            E(M || T.currentTarget, {
              fetcherKey: R,
              method: z,
              navigate: b,
              replace: h,
              state: i,
              relative: m,
              preventScrollReset: o,
              viewTransition: g,
              unstable_defaultShouldRevalidate: y,
            });
        v && b !== !1 ? Y.startTransition(() => D()) : D();
      };
    return Y.createElement('form', {
      ref: p,
      method: O,
      action: A,
      onSubmit: x ? s : _,
      ...r,
      'data-discover': !U && c === 'render' ? 'true' : void 0,
    });
  }
);
Ry.displayName = 'Form';
function Cy(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hh(c) {
  let R = Y.useContext(na);
  return (Ge(R, Cy(c)), R);
}
function Ay(
  c,
  {
    target: R,
    replace: b,
    unstable_mask: x,
    state: h,
    preventScrollReset: i,
    relative: f,
    viewTransition: d,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: m,
  } = {}
) {
  let o = Hg(),
    g = hn(),
    y = ai(c, { relative: f });
  return Y.useCallback(
    (r) => {
      if (ly(r, R)) {
        r.preventDefault();
        let p = b !== void 0 ? b : ti(g) === ti(y),
          v = () =>
            o(c, {
              replace: p,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: f,
              viewTransition: d,
              unstable_defaultShouldRevalidate: s,
            });
        m ? Y.startTransition(() => v()) : v();
      }
    },
    [g, o, y, b, x, h, R, c, i, f, d, s, m]
  );
}
var My = 0,
  zy = () => `__${String(++My)}__`;
function Dy() {
  let { router: c } = hh('useSubmit'),
    { basename: R } = Y.useContext(_t),
    b = Jg(),
    x = c.fetch,
    h = c.navigate;
  return Y.useCallback(
    async (i, f = {}) => {
      let { action: d, method: s, encType: m, formData: o, body: g } = uy(i, R);
      if (f.navigate === !1) {
        let y = f.fetcherKey || zy();
        await x(y, b, f.action || d, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: o,
          body: g,
          formMethod: f.method || s,
          formEncType: f.encType || m,
          flushSync: f.flushSync,
        });
      } else
        await h(f.action || d, {
          unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: o,
          body: g,
          formMethod: f.method || s,
          formEncType: f.encType || m,
          replace: f.replace,
          state: f.state,
          fromRouteId: b,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [x, h, R, b]
  );
}
function Oy(c, { relative: R } = {}) {
  let { basename: b } = Y.useContext(_t),
    x = Y.useContext(mn);
  Ge(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...ai(c || '.', { relative: R }) },
    f = hn();
  if (c == null) {
    i.search = f.search;
    let d = new URLSearchParams(i.search),
      s = d.getAll('index');
    if (s.some((o) => o === '')) {
      (d.delete('index'), s.filter((g) => g).forEach((g) => d.append('index', g)));
      let o = d.toString();
      i.search = o ? `?${o}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    b !== '/' && (i.pathname = i.pathname === '/' ? b : Yt([b, i.pathname])),
    ti(i)
  );
}
function Uy(c, { relative: R } = {}) {
  let b = Y.useContext(ah);
  Ge(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = hh('useViewTransitionState'),
    h = ai(c, { relative: R });
  if (!b.isTransitioning) return !1;
  let i = dn(b.currentLocation.pathname, x) || b.currentLocation.pathname,
    f = dn(b.nextLocation.pathname, x) || b.nextLocation.pathname;
  return Bu(h.pathname, f) != null || Bu(h.pathname, i) != null;
}
const By = 'modulepreload',
  wy = function (c) {
    return '/ochimono-game/' + c;
  },
  Vm = {},
  Ny = function (R, b, x) {
    let h = Promise.resolve();
    if (b && b.length > 0) {
      let f = function (m) {
        return Promise.all(
          m.map((o) =>
            Promise.resolve(o).then(
              (g) => ({ status: 'fulfilled', value: g }),
              (g) => ({ status: 'rejected', reason: g })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        s = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute('nonce'));
      h = f(
        b.map((m) => {
          if (((m = wy(m)), m in Vm)) return;
          Vm[m] = !0;
          const o = m.endsWith('.css'),
            g = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const y = document.createElement('link');
          if (
            ((y.rel = o ? 'stylesheet' : By),
            o || (y.as = 'script'),
            (y.crossOrigin = ''),
            (y.href = m),
            s && y.setAttribute('nonce', s),
            document.head.appendChild(y),
            o)
          )
            return new Promise((r, p) => {
              (y.addEventListener('load', r),
                y.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${m}`))));
            });
        })
      );
    }
    function i(f) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = f), window.dispatchEvent(d), !d.defaultPrevented)) throw f;
    }
    return h.then((f) => {
      for (const d of f || []) d.status === 'rejected' && i(d.reason);
      return R().catch(i);
    });
  };
function _y(c = {}) {
  const {
    immediate: R = !1,
    onNeedRefresh: b,
    onOfflineReady: x,
    onRegistered: h,
    onRegisteredSW: i,
    onRegisterError: f,
  } = c;
  let d, s, m;
  const o = async (y = !0) => {
    (await s, m == null || m());
  };
  async function g() {
    if ('serviceWorker' in navigator) {
      if (
        ((d = await Ny(async () => {
          const { Workbox: y } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: y };
        }, [])
          .then(
            ({ Workbox: y }) =>
              new y('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((y) => {
            f == null || f(y);
          })),
        !d)
      )
        return;
      m = () => {
        d == null || d.messageSkipWaiting();
      };
      {
        let y = !1;
        const r = () => {
          ((y = !0),
            d == null ||
              d.addEventListener('controlling', (p) => {
                p.isUpdate && window.location.reload();
              }),
            b == null || b());
        };
        (d.addEventListener('installed', (p) => {
          typeof p.isUpdate > 'u'
            ? typeof p.isExternal < 'u' && p.isExternal
              ? r()
              : !y && (x == null || x())
            : p.isUpdate || x == null || x();
        }),
          d.addEventListener('waiting', r));
      }
      d.register({ immediate: R })
        .then((y) => {
          i ? i('/ochimono-game/sw.js', y) : h == null || h(y);
        })
        .catch((y) => {
          f == null || f(y);
        });
    }
  }
  return ((s = g()), o);
}
function Hy(c = {}) {
  const {
      immediate: R = !0,
      onNeedRefresh: b,
      onOfflineReady: x,
      onRegistered: h,
      onRegisteredSW: i,
      onRegisterError: f,
    } = c,
    [d, s] = Y.useState(!1),
    [m, o] = Y.useState(!1),
    [g] = Y.useState(() =>
      _y({
        immediate: R,
        onOfflineReady() {
          (o(!0), x == null || x());
        },
        onNeedRefresh() {
          (s(!0), b == null || b());
        },
        onRegistered: h,
        onRegisteredSW: i,
        onRegisterError: f,
      })
    );
  return { needRefresh: [d, s], offlineReady: [m, o], updateServiceWorker: g };
}
const Ly = '_banner_1qruq_1',
  jy = '_message_1qruq_21',
  Yy = '_button_1qruq_25',
  uo = { banner: Ly, message: jy, button: Yy },
  Gy = () => {
    const {
      needRefresh: [c],
      updateServiceWorker: R,
    } = Hy();
    return c
      ? ie.jsxs('div', {
          className: uo.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            ie.jsx('span', { className: uo.message, children: '新しいバージョンがあります' }),
            ie.jsx('button', {
              type: 'button',
              className: uo.button,
              onClick: () => R(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  Vy = '_index_r8hfh_1',
  qy = { index: Vy },
  Xy = '_layout_r42u5_1',
  Qy = '_top_bar_placeholder_r42u5_10',
  Zy = '_main_r42u5_15',
  Ky = '_field_wrapper_r42u5_23',
  ea = { layout: Xy, top_bar_placeholder: Qy, main: Zy, field_wrapper: Ky },
  Jy = '_surface_6wr97_1',
  Fy = '_canvas_layer_6wr97_11',
  $y = '_game_over_line_6wr97_22',
  ro = { surface: Jy, canvas_layer: Fy, game_over_line: $y },
  ky = '_layer_z1h0v_1',
  Wy = '_effect_z1h0v_7',
  Py = '_ring_z1h0v_12',
  Iy = '_score_z1h0v_24',
  ep = '_special_z1h0v_36',
  Ia = { layer: ky, effect: Wy, ring: Py, score: Iy, special: ep },
  vh = Y.memo(
    Y.forwardRef((c, R) => {
      const b = Y.useRef(null),
        x = Y.useCallback((i) => {
          const f = b.current;
          if (!f) return;
          const d = document.createElement('div');
          ((d.className = `${Ia.effect} ${i.isSpecial ? Ia.special : ''}`),
            (d.style.left = `${i.x}px`),
            (d.style.top = `${i.y}px`),
            d.setAttribute('aria-hidden', 'true'));
          const s = document.createElement('span');
          ((s.className = Ia.ring), d.appendChild(s));
          const m = () => {
            (s.removeEventListener('animationend', m), d.parentNode === f && f.removeChild(d));
          };
          if ((s.addEventListener('animationend', m), i.score > 0)) {
            const o = document.createElement('span');
            ((o.className = Ia.score), (o.textContent = `+${i.score}`), d.appendChild(o));
          }
          f.appendChild(d);
        }, []),
        h = Y.useCallback(() => {
          const i = b.current;
          if (i) for (; i.firstChild; ) i.removeChild(i.firstChild);
        }, []);
      return (
        Y.useImperativeHandle(R, () => ({ add: x, clear: h }), [x, h]),
        ie.jsx('div', { ref: b, className: Ia.layer, 'aria-hidden': 'true' })
      );
    })
  );
vh.displayName = 'MergeEffect';
const tp = '_line_yymkz_1',
  np = '_preview_wrap_yymkz_11',
  lp = '_preview_yymkz_11',
  so = { line: tp, preview_wrap: np, preview: lp },
  ap = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  gh = Y.memo(
    Y.forwardRef(({ initialX: c, fieldHeight: R, item: b }, x) => {
      const h = Y.useRef(null),
        i = Y.useRef(null),
        f = Y.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((f.current = (b == null ? void 0 : b.radius) ?? 0),
        Y.useImperativeHandle(
          x,
          () => ({
            setX: (s) => {
              const m = h.current,
                o = i.current;
              (m && (m.style.transform = `translate3d(${s}px, 0, 0)`),
                o && (o.style.transform = `translate3d(${s - f.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !b)
      )
        return null;
      const d = b.radius * 2;
      return ie.jsxs(ie.Fragment, {
        children: [
          ie.jsx('div', {
            ref: h,
            className: so.line,
            style: { height: `${R}px`, transform: `translate3d(${c}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          ie.jsx('div', {
            ref: i,
            className: so.preview_wrap,
            style: {
              width: `${d}px`,
              height: `${d}px`,
              transform: `translate3d(${c - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: ie.jsx('img', {
              src: ap(b.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: so.preview,
            }),
          }),
        ],
      });
    })
  );
gh.displayName = 'DropIndicator';
const ip = (c) => Math.max(0, Math.min(1, c)),
  up = ({
    canvasContainerRef: c,
    fieldWidth: R,
    fieldHeight: b,
    gameOverLineY: x,
    currentItem: h,
    canInteract: i,
    onDrop: f,
    mergeEffectRef: d,
  }) => {
    const s = Y.useRef(null),
      m = Y.useRef(null),
      o = Y.useRef(0.5),
      g = Y.useRef(null),
      y = Y.useRef(h);
    y.current = h;
    const r = Y.useRef(R);
    r.current = R;
    const p = Y.useCallback((T) => {
        const M = y.current,
          z = r.current;
        return M ? Math.max(M.radius, Math.min(z - M.radius, T * z)) : T * z;
      }, []),
      v = Y.useCallback(() => {
        g.current === null &&
          (g.current = window.requestAnimationFrame(() => {
            var T;
            ((g.current = null), (T = m.current) == null || T.setX(p(o.current)));
          }));
      }, [p]),
      E = Y.useCallback(
        (T) => {
          const M = s.current;
          if (!M) return;
          const z = M.getBoundingClientRect(),
            D = ip((T - z.left) / z.width);
          ((o.current = D), v());
        },
        [v]
      );
    (Y.useEffect(() => {
      ((o.current = 0.5), v());
    }, [h == null ? void 0 : h.level, v]),
      Y.useEffect(
        () => () => {
          g.current !== null && (window.cancelAnimationFrame(g.current), (g.current = null));
        },
        []
      ));
    const A = (T) => {
        var M;
        i && (E(T.clientX), (M = s.current) == null || M.setPointerCapture(T.pointerId));
      },
      O = (T) => {
        if (T.buttons === 0 && T.pointerType === 'mouse') {
          E(T.clientX);
          return;
        }
        E(T.clientX);
      },
      U = (T) => {
        var M;
        i &&
          (E(T.clientX),
          f(o.current),
          (M = s.current) == null || M.releasePointerCapture(T.pointerId));
      },
      _ = p(0.5);
    return ie.jsxs('div', {
      ref: s,
      className: ro.surface,
      style: { width: `${R}px`, height: `${b}px` },
      onPointerDown: A,
      onPointerMove: O,
      onPointerUp: U,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        ie.jsx('div', { ref: c, className: ro.canvas_layer }),
        ie.jsx('div', {
          className: ro.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        i ? ie.jsx(gh, { ref: m, initialX: _, fieldHeight: b, item: h }) : null,
        ie.jsx(vh, { ref: d }),
      ],
    });
  },
  rp = '_overlay_o79hb_1',
  sp = '_panel_o79hb_13',
  op = '_new_record_o79hb_24',
  cp = '_title_o79hb_32',
  fp = '_scores_o79hb_40',
  dp = '_row_o79hb_46',
  mp = '_gold_o79hb_64',
  hp = '_restart_o79hb_69',
  fn = {
    overlay: rp,
    panel: sp,
    new_record: op,
    title: cp,
    scores: fp,
    row: dp,
    gold: mp,
    restart: hp,
  },
  vp = ({ score: c, bestScore: R, isNewRecord: b, onRestart: x }) =>
    ie.jsx('div', {
      className: fn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: ie.jsxs('div', {
        className: fn.panel,
        children: [
          b ? ie.jsx('p', { className: fn.new_record, children: '🎉 新記録！' }) : null,
          ie.jsx('h2', { className: fn.title, children: 'GAME OVER' }),
          ie.jsxs('dl', {
            className: fn.scores,
            children: [
              ie.jsxs('div', {
                className: fn.row,
                children: [
                  ie.jsx('dt', { children: 'スコア' }),
                  ie.jsx('dd', { className: b ? fn.gold : '', children: c }),
                ],
              }),
              ie.jsxs('div', {
                className: fn.row,
                children: [ie.jsx('dt', { children: 'ベスト' }), ie.jsx('dd', { children: R })],
              }),
            ],
          }),
          ie.jsx('button', {
            type: 'button',
            className: fn.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  gp = '_overlay_1xsci_1',
  yp = '_panel_1xsci_12',
  pp = '_title_1xsci_22',
  Sp = '_lead_1xsci_30',
  xp = '_start_1xsci_37',
  ei = { overlay: gp, panel: yp, title: pp, lead: Sp, start: xp },
  Ep = ({ onStart: c }) =>
    ie.jsx('div', {
      className: ei.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: ie.jsxs('div', {
        className: ei.panel,
        children: [
          ie.jsxs('h2', {
            className: ei.title,
            children: ['💖🍓🐱', ie.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          ie.jsxs('p', {
            className: ei.lead,
            children: [
              '同じアイテム同士をくっつけて',
              ie.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          ie.jsx('button', {
            type: 'button',
            className: ei.start,
            onClick: c,
            children: 'スタート',
          }),
        ],
      }),
    }),
  Tp = '_top_bar_1dke1_1',
  bp = '_right_1dke1_12',
  Rp = '_version_1dke1_18',
  oo = { top_bar: Tp, right: bp, version: Rp },
  Cp = '_next_1n5pn_1',
  Ap = '_label_1n5pn_7',
  Mp = '_thumb_1n5pn_14',
  zp = '_image_1n5pn_27',
  Mu = { next: Cp, label: Ap, thumb: Mp, image: zp },
  Dp = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  yh = Y.memo(({ item: c }) =>
    ie.jsxs('div', {
      className: Mu.next,
      children: [
        ie.jsx('span', { className: Mu.label, children: 'NEXT' }),
        ie.jsx('div', {
          className: Mu.thumb,
          'data-testid': 'next-item',
          children: c
            ? ie.jsx('img', { src: Dp(c.svgPath), alt: c.name, className: Mu.image })
            : null,
        }),
      ],
    })
  );
yh.displayName = 'NextItemPreview';
const Op = '_score_display_pgke7_1',
  Up = '_row_pgke7_7',
  Bp = '_label_pgke7_13',
  wp = '_value_pgke7_20',
  Np = '_label_small_pgke7_28',
  _p = '_value_small_pgke7_35',
  rl = { score_display: Op, row: Up, label: Bp, value: wp, label_small: Np, value_small: _p },
  ph = Y.memo(({ score: c, bestScore: R }) =>
    ie.jsxs('div', {
      className: rl.score_display,
      children: [
        ie.jsxs('div', {
          className: rl.row,
          children: [
            ie.jsx('span', { className: rl.label, children: 'SCORE' }),
            ie.jsx('span', { className: rl.value, 'data-testid': 'score-value', children: c }),
          ],
        }),
        ie.jsxs('div', {
          className: rl.row,
          children: [
            ie.jsx('span', { className: rl.label_small, children: 'BEST' }),
            ie.jsx('span', { className: rl.value_small, children: R }),
          ],
        }),
      ],
    })
  );
ph.displayName = 'ScoreDisplay';
const Hp = '_toggle_1ap46_1',
  Lp = { toggle: Hp },
  Sh = Y.memo(({ isOn: c, onToggle: R }) =>
    ie.jsx('button', {
      type: 'button',
      className: Lp.toggle,
      onClick: R,
      'aria-label': c ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': c,
      children: ie.jsx('span', { 'aria-hidden': 'true', children: c ? '🔊' : '🔇' }),
    })
  );
Sh.displayName = 'SoundToggle';
const jp = '_toggle_15urq_1',
  Yp = { toggle: jp },
  Ro = [{ id: 'gumi', label: 'グミ' }],
  Co = 'gumi',
  xh = (c) => typeof c == 'string' && Ro.some((R) => R.id === c),
  Eh = Y.memo(({ value: c, onChange: R }) => {
    const b = (x) => {
      const h = x.target.value;
      xh(h) && R(h);
    };
    return ie.jsx('select', {
      className: Yp.toggle,
      value: c,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: Ro.map((x) => ie.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
Eh.displayName = 'ThemeToggle';
const Gp = ({
  score: c,
  bestScore: R,
  nextItem: b,
  isSoundOn: x,
  onToggleSound: h,
  themeId: i,
  onChangeTheme: f,
}) =>
  ie.jsxs('header', {
    className: oo.top_bar,
    children: [
      ie.jsx(ph, { score: c, bestScore: R }),
      ie.jsxs('div', {
        className: oo.right,
        children: [
          ie.jsx(yh, { item: b }),
          ie.jsx(Eh, { value: i, onChange: f }),
          ie.jsx(Sh, { isOn: x, onToggle: h }),
          ie.jsxs('span', {
            className: oo.version,
            'aria-label': 'ビルドバージョン',
            children: ['v', '1.0.8'],
          }),
        ],
      }),
    ],
  });
var Uu = { exports: {} };
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
 */ var Vp = Uu.exports,
  qm;
function qp() {
  return (
    qm ||
      ((qm = 1),
      (function (c, R) {
        (function (x, h) {
          c.exports = h();
        })(Vp, function () {
          return (function (b) {
            var x = {};
            function h(i) {
              if (x[i]) return x[i].exports;
              var f = (x[i] = { i, l: !1, exports: {} });
              return (b[i].call(f.exports, f, f.exports, h), (f.l = !0), f.exports);
            }
            return (
              (h.m = b),
              (h.c = x),
              (h.d = function (i, f, d) {
                h.o(i, f) || Object.defineProperty(i, f, { enumerable: !0, get: d });
              }),
              (h.r = function (i) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(i, '__esModule', { value: !0 }));
              }),
              (h.t = function (i, f) {
                if (
                  (f & 1 && (i = h(i)),
                  f & 8 || (f & 4 && typeof i == 'object' && i && i.__esModule))
                )
                  return i;
                var d = Object.create(null);
                if (
                  (h.r(d),
                  Object.defineProperty(d, 'default', { enumerable: !0, value: i }),
                  f & 2 && typeof i != 'string')
                )
                  for (var s in i)
                    h.d(
                      d,
                      s,
                      function (m) {
                        return i[m];
                      }.bind(null, s)
                    );
                return d;
              }),
              (h.n = function (i) {
                var f =
                  i && i.__esModule
                    ? function () {
                        return i.default;
                      }
                    : function () {
                        return i;
                      };
                return (h.d(f, 'a', f), f);
              }),
              (h.o = function (i, f) {
                return Object.prototype.hasOwnProperty.call(i, f);
              }),
              (h.p = ''),
              h((h.s = 20))
            );
          })([
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h._baseDelta = 1e3 / 60),
                    (h._nextId = 0),
                    (h._seed = 0),
                    (h._nowStartTime = +new Date()),
                    (h._warnedOnce = {}),
                    (h._decomp = null),
                    (h.extend = function (f, d) {
                      var s, m;
                      typeof d == 'boolean' ? ((s = 2), (m = d)) : ((s = 1), (m = !0));
                      for (var o = s; o < arguments.length; o++) {
                        var g = arguments[o];
                        if (g)
                          for (var y in g)
                            m &&
                            g[y] &&
                            g[y].constructor === Object &&
                            (!f[y] || f[y].constructor === Object)
                              ? ((f[y] = f[y] || {}), h.extend(f[y], m, g[y]))
                              : (f[y] = g[y]);
                      }
                      return f;
                    }),
                    (h.clone = function (f, d) {
                      return h.extend({}, d, f);
                    }),
                    (h.keys = function (f) {
                      if (Object.keys) return Object.keys(f);
                      var d = [];
                      for (var s in f) d.push(s);
                      return d;
                    }),
                    (h.values = function (f) {
                      var d = [];
                      if (Object.keys) {
                        for (var s = Object.keys(f), m = 0; m < s.length; m++) d.push(f[s[m]]);
                        return d;
                      }
                      for (var o in f) d.push(f[o]);
                      return d;
                    }),
                    (h.get = function (f, d, s, m) {
                      d = d.split('.').slice(s, m);
                      for (var o = 0; o < d.length; o += 1) f = f[d[o]];
                      return f;
                    }),
                    (h.set = function (f, d, s, m, o) {
                      var g = d.split('.').slice(m, o);
                      return ((h.get(f, d, 0, -1)[g[g.length - 1]] = s), s);
                    }),
                    (h.shuffle = function (f) {
                      for (var d = f.length - 1; d > 0; d--) {
                        var s = Math.floor(h.random() * (d + 1)),
                          m = f[d];
                        ((f[d] = f[s]), (f[s] = m));
                      }
                      return f;
                    }),
                    (h.choose = function (f) {
                      return f[Math.floor(h.random() * f.length)];
                    }),
                    (h.isElement = function (f) {
                      return typeof HTMLElement < 'u'
                        ? f instanceof HTMLElement
                        : !!(f && f.nodeType && f.nodeName);
                    }),
                    (h.isArray = function (f) {
                      return Object.prototype.toString.call(f) === '[object Array]';
                    }),
                    (h.isFunction = function (f) {
                      return typeof f == 'function';
                    }),
                    (h.isPlainObject = function (f) {
                      return typeof f == 'object' && f.constructor === Object;
                    }),
                    (h.isString = function (f) {
                      return toString.call(f) === '[object String]';
                    }),
                    (h.clamp = function (f, d, s) {
                      return f < d ? d : f > s ? s : f;
                    }),
                    (h.sign = function (f) {
                      return f < 0 ? -1 : 1;
                    }),
                    (h.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - h._nowStartTime;
                    }),
                    (h.random = function (f, d) {
                      return (
                        (f = typeof f < 'u' ? f : 0),
                        (d = typeof d < 'u' ? d : 1),
                        f + i() * (d - f)
                      );
                    }));
                  var i = function () {
                    return ((h._seed = (h._seed * 9301 + 49297) % 233280), h._seed / 233280);
                  };
                  ((h.colorToNumber = function (f) {
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
                      var f = Array.prototype.slice.call(arguments).join(' ');
                      h._warnedOnce[f] || (h.warn(f), (h._warnedOnce[f] = !0));
                    }),
                    (h.deprecated = function (f, d, s) {
                      f[d] = h.chain(function () {
                        h.warnOnce('🔅 deprecated 🔅', s);
                      }, f[d]);
                    }),
                    (h.nextId = function () {
                      return h._nextId++;
                    }),
                    (h.indexOf = function (f, d) {
                      if (f.indexOf) return f.indexOf(d);
                      for (var s = 0; s < f.length; s++) if (f[s] === d) return s;
                      return -1;
                    }),
                    (h.map = function (f, d) {
                      if (f.map) return f.map(d);
                      for (var s = [], m = 0; m < f.length; m += 1) s.push(d(f[m]));
                      return s;
                    }),
                    (h.topologicalSort = function (f) {
                      var d = [],
                        s = [],
                        m = [];
                      for (var o in f) !s[o] && !m[o] && h._topologicalSort(o, s, m, f, d);
                      return d;
                    }),
                    (h._topologicalSort = function (f, d, s, m, o) {
                      var g = m[f] || [];
                      s[f] = !0;
                      for (var y = 0; y < g.length; y += 1) {
                        var r = g[y];
                        s[r] || d[r] || h._topologicalSort(r, d, s, m, o);
                      }
                      ((s[f] = !1), (d[f] = !0), o.push(f));
                    }),
                    (h.chain = function () {
                      for (var f = [], d = 0; d < arguments.length; d += 1) {
                        var s = arguments[d];
                        s._chained ? f.push.apply(f, s._chained) : f.push(s);
                      }
                      var m = function () {
                        for (
                          var o, g = new Array(arguments.length), y = 0, r = arguments.length;
                          y < r;
                          y++
                        )
                          g[y] = arguments[y];
                        for (y = 0; y < f.length; y += 1) {
                          var p = f[y].apply(o, g);
                          typeof p < 'u' && (o = p);
                        }
                        return o;
                      };
                      return ((m._chained = f), m);
                    }),
                    (h.chainPathBefore = function (f, d, s) {
                      return h.set(f, d, h.chain(s, h.get(f, d)));
                    }),
                    (h.chainPathAfter = function (f, d, s) {
                      return h.set(f, d, h.chain(h.get(f, d), s));
                    }),
                    (h.setDecomp = function (f) {
                      h._decomp = f;
                    }),
                    (h.getDecomp = function () {
                      var f = h._decomp;
                      try {
                        (!f && typeof window < 'u' && (f = window.decomp),
                          !f && typeof bm < 'u' && (f = bm.decomp));
                      } catch {
                        f = null;
                      }
                      return f;
                    }));
                })());
            },
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h.create = function (i) {
                    var f = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (i && h.update(f, i), f);
                  }),
                    (h.update = function (i, f, d) {
                      ((i.min.x = 1 / 0),
                        (i.max.x = -1 / 0),
                        (i.min.y = 1 / 0),
                        (i.max.y = -1 / 0));
                      for (var s = 0; s < f.length; s++) {
                        var m = f[s];
                        (m.x > i.max.x && (i.max.x = m.x),
                          m.x < i.min.x && (i.min.x = m.x),
                          m.y > i.max.y && (i.max.y = m.y),
                          m.y < i.min.y && (i.min.y = m.y));
                      }
                      d &&
                        (d.x > 0 ? (i.max.x += d.x) : (i.min.x += d.x),
                        d.y > 0 ? (i.max.y += d.y) : (i.min.y += d.y));
                    }),
                    (h.contains = function (i, f) {
                      return f.x >= i.min.x && f.x <= i.max.x && f.y >= i.min.y && f.y <= i.max.y;
                    }),
                    (h.overlaps = function (i, f) {
                      return (
                        i.min.x <= f.max.x &&
                        i.max.x >= f.min.x &&
                        i.max.y >= f.min.y &&
                        i.min.y <= f.max.y
                      );
                    }),
                    (h.translate = function (i, f) {
                      ((i.min.x += f.x), (i.max.x += f.x), (i.min.y += f.y), (i.max.y += f.y));
                    }),
                    (h.shift = function (i, f) {
                      var d = i.max.x - i.min.x,
                        s = i.max.y - i.min.y;
                      ((i.min.x = f.x), (i.max.x = f.x + d), (i.min.y = f.y), (i.max.y = f.y + s));
                    }));
                })());
            },
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h.create = function (i, f) {
                    return { x: i || 0, y: f || 0 };
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
                    (h.rotate = function (i, f, d) {
                      var s = Math.cos(f),
                        m = Math.sin(f);
                      d || (d = {});
                      var o = i.x * s - i.y * m;
                      return ((d.y = i.x * m + i.y * s), (d.x = o), d);
                    }),
                    (h.rotateAbout = function (i, f, d, s) {
                      var m = Math.cos(f),
                        o = Math.sin(f);
                      s || (s = {});
                      var g = d.x + ((i.x - d.x) * m - (i.y - d.y) * o);
                      return ((s.y = d.y + ((i.x - d.x) * o + (i.y - d.y) * m)), (s.x = g), s);
                    }),
                    (h.normalise = function (i) {
                      var f = h.magnitude(i);
                      return f === 0 ? { x: 0, y: 0 } : { x: i.x / f, y: i.y / f };
                    }),
                    (h.dot = function (i, f) {
                      return i.x * f.x + i.y * f.y;
                    }),
                    (h.cross = function (i, f) {
                      return i.x * f.y - i.y * f.x;
                    }),
                    (h.cross3 = function (i, f, d) {
                      return (f.x - i.x) * (d.y - i.y) - (f.y - i.y) * (d.x - i.x);
                    }),
                    (h.add = function (i, f, d) {
                      return (d || (d = {}), (d.x = i.x + f.x), (d.y = i.y + f.y), d);
                    }),
                    (h.sub = function (i, f, d) {
                      return (d || (d = {}), (d.x = i.x - f.x), (d.y = i.y - f.y), d);
                    }),
                    (h.mult = function (i, f) {
                      return { x: i.x * f, y: i.y * f };
                    }),
                    (h.div = function (i, f) {
                      return { x: i.x / f, y: i.y / f };
                    }),
                    (h.perp = function (i, f) {
                      return ((f = f === !0 ? -1 : 1), { x: f * -i.y, y: f * i.x });
                    }),
                    (h.neg = function (i) {
                      return { x: -i.x, y: -i.y };
                    }),
                    (h.angle = function (i, f) {
                      return Math.atan2(f.y - i.y, f.x - i.x);
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
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(2),
                d = h(0);
              (function () {
                ((i.create = function (s, m) {
                  for (var o = [], g = 0; g < s.length; g++) {
                    var y = s[g],
                      r = { x: y.x, y: y.y, index: g, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (s, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      g = [];
                    return (
                      s.replace(o, function (y, r, p) {
                        g.push({ x: parseFloat(r), y: parseFloat(p) });
                      }),
                      i.create(g, m)
                    );
                  }),
                  (i.centre = function (s) {
                    for (
                      var m = i.area(s, !0), o = { x: 0, y: 0 }, g, y, r, p = 0;
                      p < s.length;
                      p++
                    )
                      ((r = (p + 1) % s.length),
                        (g = f.cross(s[p], s[r])),
                        (y = f.mult(f.add(s[p], s[r]), g)),
                        (o = f.add(o, y)));
                    return f.div(o, 6 * m);
                  }),
                  (i.mean = function (s) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < s.length; o++)
                      ((m.x += s[o].x), (m.y += s[o].y));
                    return f.div(m, s.length);
                  }),
                  (i.area = function (s, m) {
                    for (var o = 0, g = s.length - 1, y = 0; y < s.length; y++)
                      ((o += (s[g].x - s[y].x) * (s[g].y + s[y].y)), (g = y));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (s, m) {
                    for (var o = 0, g = 0, y = s, r, p, v = 0; v < y.length; v++)
                      ((p = (v + 1) % y.length),
                        (r = Math.abs(f.cross(y[p], y[v]))),
                        (o += r * (f.dot(y[p], y[p]) + f.dot(y[p], y[v]) + f.dot(y[v], y[v]))),
                        (g += r));
                    return (m / 6) * (o / g);
                  }),
                  (i.translate = function (s, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var g = s.length,
                      y = m.x * o,
                      r = m.y * o,
                      p;
                    for (p = 0; p < g; p++) ((s[p].x += y), (s[p].y += r));
                    return s;
                  }),
                  (i.rotate = function (s, m, o) {
                    if (m !== 0) {
                      var g = Math.cos(m),
                        y = Math.sin(m),
                        r = o.x,
                        p = o.y,
                        v = s.length,
                        E,
                        A,
                        O,
                        U;
                      for (U = 0; U < v; U++)
                        ((E = s[U]),
                          (A = E.x - r),
                          (O = E.y - p),
                          (E.x = r + (A * g - O * y)),
                          (E.y = p + (A * y + O * g)));
                      return s;
                    }
                  }),
                  (i.contains = function (s, m) {
                    for (var o = m.x, g = m.y, y = s.length, r = s[y - 1], p, v = 0; v < y; v++) {
                      if (((p = s[v]), (o - r.x) * (p.y - r.y) + (g - r.y) * (r.x - p.x) > 0))
                        return !1;
                      r = p;
                    }
                    return !0;
                  }),
                  (i.scale = function (s, m, o, g) {
                    if (m === 1 && o === 1) return s;
                    g = g || i.centre(s);
                    for (var y, r, p = 0; p < s.length; p++)
                      ((y = s[p]),
                        (r = f.sub(y, g)),
                        (s[p].x = g.x + r.x * m),
                        (s[p].y = g.y + r.y * o));
                    return s;
                  }),
                  (i.chamfer = function (s, m, o, g, y) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (g = g || 2),
                      (y = y || 14));
                    for (var r = [], p = 0; p < s.length; p++) {
                      var v = s[p - 1 >= 0 ? p - 1 : s.length - 1],
                        E = s[p],
                        A = s[(p + 1) % s.length],
                        O = m[p < m.length ? p : m.length - 1];
                      if (O === 0) {
                        r.push(E);
                        continue;
                      }
                      var U = f.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        _ = f.normalise({ x: A.y - E.y, y: E.x - A.x }),
                        T = Math.sqrt(2 * Math.pow(O, 2)),
                        M = f.mult(d.clone(U), O),
                        z = f.normalise(f.mult(f.add(U, _), 0.5)),
                        D = f.sub(E, f.mult(z, T)),
                        w = o;
                      (o === -1 && (w = Math.pow(O, 0.32) * 1.75),
                        (w = d.clamp(w, g, y)),
                        w % 2 === 1 && (w += 1));
                      for (var B = Math.acos(f.dot(U, _)), j = B / w, L = 0; L < w; L++)
                        r.push(f.add(f.rotate(M, j * L), D));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (s) {
                    var m = i.mean(s);
                    return (
                      s.sort(function (o, g) {
                        return f.angle(m, o) - f.angle(m, g);
                      }),
                      s
                    );
                  }),
                  (i.isConvex = function (s) {
                    var m = 0,
                      o = s.length,
                      g,
                      y,
                      r,
                      p;
                    if (o < 3) return null;
                    for (g = 0; g < o; g++)
                      if (
                        ((y = (g + 1) % o),
                        (r = (g + 2) % o),
                        (p = (s[y].x - s[g].x) * (s[r].y - s[y].y)),
                        (p -= (s[y].y - s[g].y) * (s[r].x - s[y].x)),
                        p < 0 ? (m |= 1) : p > 0 && (m |= 2),
                        m === 3)
                      )
                        return !1;
                    return m !== 0 ? !0 : null;
                  }),
                  (i.hull = function (s) {
                    var m = [],
                      o = [],
                      g,
                      y;
                    for (
                      s = s.slice(0),
                        s.sort(function (r, p) {
                          var v = r.x - p.x;
                          return v !== 0 ? v : r.y - p.y;
                        }),
                        y = 0;
                      y < s.length;
                      y += 1
                    ) {
                      for (
                        g = s[y];
                        o.length >= 2 && f.cross3(o[o.length - 2], o[o.length - 1], g) <= 0;
                      )
                        o.pop();
                      o.push(g);
                    }
                    for (y = s.length - 1; y >= 0; y -= 1) {
                      for (
                        g = s[y];
                        m.length >= 2 && f.cross3(m[m.length - 2], m[m.length - 1], g) <= 0;
                      )
                        m.pop();
                      m.push(g);
                    }
                    return (m.pop(), o.pop(), m.concat(o));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(2),
                s = h(7),
                m = h(0),
                o = h(1),
                g = h(11);
              (function () {
                ((i._timeCorrection = !0),
                  (i._inertiaScale = 4),
                  (i._nextCollidingGroupId = 1),
                  (i._nextNonCollidingGroupId = -1),
                  (i._nextCategory = 1),
                  (i._baseDelta = 1e3 / 60),
                  (i.create = function (r) {
                    var p = {
                        id: m.nextId(),
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
                      v = m.extend(p, r);
                    return (y(v, r), v);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var y = function (r, p) {
                  ((p = p || {}),
                    i.set(r, {
                      bounds: r.bounds || o.create(r.vertices),
                      positionPrev: r.positionPrev || d.clone(r.position),
                      anglePrev: r.anglePrev || r.angle,
                      vertices: r.vertices,
                      parts: r.parts || [r],
                      isStatic: r.isStatic,
                      isSleeping: r.isSleeping,
                      parent: r.parent || r,
                    }),
                    f.rotate(r.vertices, r.angle, r.position),
                    g.rotate(r.axes, r.angle),
                    o.update(r.bounds, r.vertices, r.velocity),
                    i.set(r, {
                      axes: p.axes || r.axes,
                      area: p.area || r.area,
                      mass: p.mass || r.mass,
                      inertia: p.inertia || r.inertia,
                    }));
                  var v = r.isStatic
                      ? '#14151f'
                      : m.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    E = r.isStatic ? '#555' : '#ccc',
                    A = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || v),
                    (r.render.strokeStyle = r.render.strokeStyle || E),
                    (r.render.lineWidth = r.render.lineWidth || A),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((i.set = function (r, p, v) {
                  var E;
                  typeof p == 'string' && ((E = p), (p = {}), (p[E] = v));
                  for (E in p)
                    if (Object.prototype.hasOwnProperty.call(p, E))
                      switch (((v = p[E]), E)) {
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
                          r[E] = v;
                      }
                }),
                  (i.setStatic = function (r, p) {
                    for (var v = 0; v < r.parts.length; v++) {
                      var E = r.parts[v];
                      (p
                        ? (E.isStatic ||
                            (E._original = {
                              restitution: E.restitution,
                              friction: E.friction,
                              mass: E.mass,
                              inertia: E.inertia,
                              density: E.density,
                              inverseMass: E.inverseMass,
                              inverseInertia: E.inverseInertia,
                            }),
                          (E.restitution = 0),
                          (E.friction = 1),
                          (E.mass = E.inertia = E.density = 1 / 0),
                          (E.inverseMass = E.inverseInertia = 0),
                          (E.positionPrev.x = E.position.x),
                          (E.positionPrev.y = E.position.y),
                          (E.anglePrev = E.angle),
                          (E.angularVelocity = 0),
                          (E.speed = 0),
                          (E.angularSpeed = 0),
                          (E.motion = 0))
                        : E._original &&
                          ((E.restitution = E._original.restitution),
                          (E.friction = E._original.friction),
                          (E.mass = E._original.mass),
                          (E.inertia = E._original.inertia),
                          (E.density = E._original.density),
                          (E.inverseMass = E._original.inverseMass),
                          (E.inverseInertia = E._original.inverseInertia),
                          (E._original = null)),
                        (E.isStatic = p));
                    }
                  }),
                  (i.setMass = function (r, p) {
                    var v = r.inertia / (r.mass / 6);
                    ((r.inertia = v * (p / 6)),
                      (r.inverseInertia = 1 / r.inertia),
                      (r.mass = p),
                      (r.inverseMass = 1 / r.mass),
                      (r.density = r.mass / r.area));
                  }),
                  (i.setDensity = function (r, p) {
                    (i.setMass(r, p * r.area), (r.density = p));
                  }),
                  (i.setInertia = function (r, p) {
                    ((r.inertia = p), (r.inverseInertia = 1 / r.inertia));
                  }),
                  (i.setVertices = function (r, p) {
                    (p[0].body === r ? (r.vertices = p) : (r.vertices = f.create(p, r)),
                      (r.axes = g.fromVertices(r.vertices)),
                      (r.area = f.area(r.vertices)),
                      i.setMass(r, r.density * r.area));
                    var v = f.centre(r.vertices);
                    (f.translate(r.vertices, v, -1),
                      i.setInertia(r, i._inertiaScale * f.inertia(r.vertices, r.mass)),
                      f.translate(r.vertices, r.position),
                      o.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, p, v) {
                    var E;
                    for (
                      p = p.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, E = 0;
                      E < p.length;
                      E++
                    ) {
                      var A = p[E];
                      A !== r && ((A.parent = r), r.parts.push(A));
                    }
                    if (r.parts.length !== 1) {
                      if (((v = typeof v < 'u' ? v : !0), v)) {
                        var O = [];
                        for (E = 0; E < p.length; E++) O = O.concat(p[E].vertices);
                        f.clockwiseSort(O);
                        var U = f.hull(O),
                          _ = f.centre(U);
                        (i.setVertices(r, U), f.translate(r.vertices, _));
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
                  (i.setCentre = function (r, p, v) {
                    v
                      ? ((r.positionPrev.x += p.x),
                        (r.positionPrev.y += p.y),
                        (r.position.x += p.x),
                        (r.position.y += p.y))
                      : ((r.positionPrev.x = p.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = p.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = p.x),
                        (r.position.y = p.y));
                  }),
                  (i.setPosition = function (r, p, v) {
                    var E = d.sub(p, r.position);
                    v
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = E.x),
                        (r.velocity.y = E.y),
                        (r.speed = d.magnitude(E)))
                      : ((r.positionPrev.x += E.x), (r.positionPrev.y += E.y));
                    for (var A = 0; A < r.parts.length; A++) {
                      var O = r.parts[A];
                      ((O.position.x += E.x),
                        (O.position.y += E.y),
                        f.translate(O.vertices, E),
                        o.update(O.bounds, O.vertices, r.velocity));
                    }
                  }),
                  (i.setAngle = function (r, p, v) {
                    var E = p - r.angle;
                    v
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = E),
                        (r.angularSpeed = Math.abs(E)))
                      : (r.anglePrev += E);
                    for (var A = 0; A < r.parts.length; A++) {
                      var O = r.parts[A];
                      ((O.angle += E),
                        f.rotate(O.vertices, E, r.position),
                        g.rotate(O.axes, E),
                        o.update(O.bounds, O.vertices, r.velocity),
                        A > 0 && d.rotateAbout(O.position, E, r.position, O.position));
                    }
                  }),
                  (i.setVelocity = function (r, p) {
                    var v = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - p.x * v),
                      (r.positionPrev.y = r.position.y - p.y * v),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / v),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / v),
                      (r.speed = d.magnitude(r.velocity)));
                  }),
                  (i.getVelocity = function (r) {
                    var p = i._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * p,
                      y: (r.position.y - r.positionPrev.y) * p,
                    };
                  }),
                  (i.getSpeed = function (r) {
                    return d.magnitude(i.getVelocity(r));
                  }),
                  (i.setSpeed = function (r, p) {
                    i.setVelocity(r, d.mult(d.normalise(i.getVelocity(r)), p));
                  }),
                  (i.setAngularVelocity = function (r, p) {
                    var v = r.deltaTime / i._baseDelta;
                    ((r.anglePrev = r.angle - p * v),
                      (r.angularVelocity = (r.angle - r.anglePrev) / v),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * i._baseDelta) / r.deltaTime;
                  }),
                  (i.getAngularSpeed = function (r) {
                    return Math.abs(i.getAngularVelocity(r));
                  }),
                  (i.setAngularSpeed = function (r, p) {
                    i.setAngularVelocity(r, m.sign(i.getAngularVelocity(r)) * p);
                  }),
                  (i.translate = function (r, p, v) {
                    i.setPosition(r, d.add(r.position, p), v);
                  }),
                  (i.rotate = function (r, p, v, E) {
                    if (!v) i.setAngle(r, r.angle + p, E);
                    else {
                      var A = Math.cos(p),
                        O = Math.sin(p),
                        U = r.position.x - v.x,
                        _ = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (U * A - _ * O), y: v.y + (U * O + _ * A) }, E),
                        i.setAngle(r, r.angle + p, E));
                    }
                  }),
                  (i.scale = function (r, p, v, E) {
                    var A = 0,
                      O = 0;
                    E = E || r.position;
                    for (var U = 0; U < r.parts.length; U++) {
                      var _ = r.parts[U];
                      (f.scale(_.vertices, p, v, E),
                        (_.axes = g.fromVertices(_.vertices)),
                        (_.area = f.area(_.vertices)),
                        i.setMass(_, r.density * _.area),
                        f.translate(_.vertices, { x: -_.position.x, y: -_.position.y }),
                        i.setInertia(_, i._inertiaScale * f.inertia(_.vertices, _.mass)),
                        f.translate(_.vertices, { x: _.position.x, y: _.position.y }),
                        U > 0 && ((A += _.area), (O += _.inertia)),
                        (_.position.x = E.x + (_.position.x - E.x) * p),
                        (_.position.y = E.y + (_.position.y - E.y) * v),
                        o.update(_.bounds, _.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = A),
                      r.isStatic || (i.setMass(r, r.density * A), i.setInertia(r, O))),
                      r.circleRadius &&
                        (p === v ? (r.circleRadius *= p) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, p) {
                    p = (typeof p < 'u' ? p : 1e3 / 60) * r.timeScale;
                    var v = p * p,
                      E = i._timeCorrection ? p / (r.deltaTime || p) : 1,
                      A = 1 - r.frictionAir * (p / m._baseDelta),
                      O = (r.position.x - r.positionPrev.x) * E,
                      U = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = O * A + (r.force.x / r.mass) * v),
                      (r.velocity.y = U * A + (r.force.y / r.mass) * v),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = p),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * A * E + (r.torque / r.inertia) * v),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var _ = 0; _ < r.parts.length; _++) {
                      var T = r.parts[_];
                      (f.translate(T.vertices, r.velocity),
                        _ > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (f.rotate(T.vertices, r.angularVelocity, r.position),
                          g.rotate(T.axes, r.angularVelocity),
                          _ > 0 &&
                            d.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
                        o.update(T.bounds, T.vertices, r.velocity));
                    }
                  }),
                  (i.updateVelocities = function (r) {
                    var p = i._baseDelta / r.deltaTime,
                      v = r.velocity;
                    ((v.x = (r.position.x - r.positionPrev.x) * p),
                      (v.y = (r.position.y - r.positionPrev.y) * p),
                      (r.speed = Math.sqrt(v.x * v.x + v.y * v.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * p),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.applyForce = function (r, p, v) {
                    var E = { x: p.x - r.position.x, y: p.y - r.position.y };
                    ((r.force.x += v.x), (r.force.y += v.y), (r.torque += E.x * v.y - E.y * v.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var p = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        v = r.parts.length === 1 ? 0 : 1;
                      v < r.parts.length;
                      v++
                    ) {
                      var E = r.parts[v],
                        A = E.mass !== 1 / 0 ? E.mass : 1;
                      ((p.mass += A),
                        (p.area += E.area),
                        (p.inertia += E.inertia),
                        (p.centre = d.add(p.centre, d.mult(E.position, A))));
                    }
                    return ((p.centre = d.div(p.centre, p.mass)), p);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(0);
              (function () {
                ((i.on = function (d, s, m) {
                  for (var o = s.split(' '), g, y = 0; y < o.length; y++)
                    ((g = o[y]),
                      (d.events = d.events || {}),
                      (d.events[g] = d.events[g] || []),
                      d.events[g].push(m));
                  return m;
                }),
                  (i.off = function (d, s, m) {
                    if (!s) {
                      d.events = {};
                      return;
                    }
                    typeof s == 'function' && ((m = s), (s = f.keys(d.events).join(' ')));
                    for (var o = s.split(' '), g = 0; g < o.length; g++) {
                      var y = d.events[o[g]],
                        r = [];
                      if (m && y) for (var p = 0; p < y.length; p++) y[p] !== m && r.push(y[p]);
                      d.events[o[g]] = r;
                    }
                  }),
                  (i.trigger = function (d, s, m) {
                    var o,
                      g,
                      y,
                      r,
                      p = d.events;
                    if (p && f.keys(p).length > 0) {
                      (m || (m = {}), (o = s.split(' ')));
                      for (var v = 0; v < o.length; v++)
                        if (((g = o[v]), (y = p[g]), y)) {
                          ((r = f.clone(m, !1)), (r.name = g), (r.source = d));
                          for (var E = 0; E < y.length; E++) y[E].apply(d, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(5),
                d = h(0),
                s = h(1),
                m = h(4);
              (function () {
                ((i.create = function (o) {
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
                    o
                  );
                }),
                  (i.setModified = function (o, g, y, r) {
                    if (
                      ((o.isModified = g),
                      g &&
                        o.cache &&
                        ((o.cache.allBodies = null),
                        (o.cache.allConstraints = null),
                        (o.cache.allComposites = null)),
                      y && o.parent && i.setModified(o.parent, g, y, r),
                      r)
                    )
                      for (var p = 0; p < o.composites.length; p++) {
                        var v = o.composites[p];
                        i.setModified(v, g, y, r);
                      }
                  }),
                  (i.add = function (o, g) {
                    var y = [].concat(g);
                    f.trigger(o, 'beforeAdd', { object: g });
                    for (var r = 0; r < y.length; r++) {
                      var p = y[r];
                      switch (p.type) {
                        case 'body':
                          if (p.parent !== p) {
                            d.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          i.addBody(o, p);
                          break;
                        case 'constraint':
                          i.addConstraint(o, p);
                          break;
                        case 'composite':
                          i.addComposite(o, p);
                          break;
                        case 'mouseConstraint':
                          i.addConstraint(o, p.constraint);
                          break;
                      }
                    }
                    return (f.trigger(o, 'afterAdd', { object: g }), o);
                  }),
                  (i.remove = function (o, g, y) {
                    var r = [].concat(g);
                    f.trigger(o, 'beforeRemove', { object: g });
                    for (var p = 0; p < r.length; p++) {
                      var v = r[p];
                      switch (v.type) {
                        case 'body':
                          i.removeBody(o, v, y);
                          break;
                        case 'constraint':
                          i.removeConstraint(o, v, y);
                          break;
                        case 'composite':
                          i.removeComposite(o, v, y);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(o, v.constraint);
                          break;
                      }
                    }
                    return (f.trigger(o, 'afterRemove', { object: g }), o);
                  }),
                  (i.addComposite = function (o, g) {
                    return (o.composites.push(g), (g.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, g, y) {
                    var r = d.indexOf(o.composites, g);
                    if (r !== -1) {
                      var p = i.allBodies(g);
                      i.removeCompositeAt(o, r);
                      for (var v = 0; v < p.length; v++) p[v].sleepCounter = 0;
                    }
                    if (y)
                      for (var v = 0; v < o.composites.length; v++)
                        i.removeComposite(o.composites[v], g, !0);
                    return o;
                  }),
                  (i.removeCompositeAt = function (o, g) {
                    return (o.composites.splice(g, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addBody = function (o, g) {
                    return (o.bodies.push(g), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeBody = function (o, g, y) {
                    var r = d.indexOf(o.bodies, g);
                    if ((r !== -1 && (i.removeBodyAt(o, r), (g.sleepCounter = 0)), y))
                      for (var p = 0; p < o.composites.length; p++)
                        i.removeBody(o.composites[p], g, !0);
                    return o;
                  }),
                  (i.removeBodyAt = function (o, g) {
                    return (o.bodies.splice(g, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addConstraint = function (o, g) {
                    return (o.constraints.push(g), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeConstraint = function (o, g, y) {
                    var r = d.indexOf(o.constraints, g);
                    if ((r !== -1 && i.removeConstraintAt(o, r), y))
                      for (var p = 0; p < o.composites.length; p++)
                        i.removeConstraint(o.composites[p], g, !0);
                    return o;
                  }),
                  (i.removeConstraintAt = function (o, g) {
                    return (o.constraints.splice(g, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.clear = function (o, g, y) {
                    if (y)
                      for (var r = 0; r < o.composites.length; r++) i.clear(o.composites[r], g, !0);
                    return (
                      g
                        ? (o.bodies = o.bodies.filter(function (p) {
                            return p.isStatic;
                          }))
                        : (o.bodies.length = 0),
                      (o.constraints.length = 0),
                      (o.composites.length = 0),
                      i.setModified(o, !0, !0, !1),
                      o
                    );
                  }),
                  (i.allBodies = function (o) {
                    if (o.cache && o.cache.allBodies) return o.cache.allBodies;
                    for (var g = [].concat(o.bodies), y = 0; y < o.composites.length; y++)
                      g = g.concat(i.allBodies(o.composites[y]));
                    return (o.cache && (o.cache.allBodies = g), g);
                  }),
                  (i.allConstraints = function (o) {
                    if (o.cache && o.cache.allConstraints) return o.cache.allConstraints;
                    for (var g = [].concat(o.constraints), y = 0; y < o.composites.length; y++)
                      g = g.concat(i.allConstraints(o.composites[y]));
                    return (o.cache && (o.cache.allConstraints = g), g);
                  }),
                  (i.allComposites = function (o) {
                    if (o.cache && o.cache.allComposites) return o.cache.allComposites;
                    for (var g = [].concat(o.composites), y = 0; y < o.composites.length; y++)
                      g = g.concat(i.allComposites(o.composites[y]));
                    return (o.cache && (o.cache.allComposites = g), g);
                  }),
                  (i.get = function (o, g, y) {
                    var r, p;
                    switch (y) {
                      case 'body':
                        r = i.allBodies(o);
                        break;
                      case 'constraint':
                        r = i.allConstraints(o);
                        break;
                      case 'composite':
                        r = i.allComposites(o).concat(o);
                        break;
                    }
                    return r
                      ? ((p = r.filter(function (v) {
                          return v.id.toString() === g.toString();
                        })),
                        p.length === 0 ? null : p[0])
                      : null;
                  }),
                  (i.move = function (o, g, y) {
                    return (i.remove(o, g), i.add(y, g), o);
                  }),
                  (i.rebase = function (o) {
                    for (
                      var g = i.allBodies(o).concat(i.allConstraints(o)).concat(i.allComposites(o)),
                        y = 0;
                      y < g.length;
                      y++
                    )
                      g[y].id = d.nextId();
                    return o;
                  }),
                  (i.translate = function (o, g, y) {
                    for (var r = y ? i.allBodies(o) : o.bodies, p = 0; p < r.length; p++)
                      m.translate(r[p], g);
                    return o;
                  }),
                  (i.rotate = function (o, g, y, r) {
                    for (
                      var p = Math.cos(g),
                        v = Math.sin(g),
                        E = r ? i.allBodies(o) : o.bodies,
                        A = 0;
                      A < E.length;
                      A++
                    ) {
                      var O = E[A],
                        U = O.position.x - y.x,
                        _ = O.position.y - y.y;
                      (m.setPosition(O, { x: y.x + (U * p - _ * v), y: y.y + (U * v + _ * p) }),
                        m.rotate(O, g));
                    }
                    return o;
                  }),
                  (i.scale = function (o, g, y, r, p) {
                    for (var v = p ? i.allBodies(o) : o.bodies, E = 0; E < v.length; E++) {
                      var A = v[E],
                        O = A.position.x - r.x,
                        U = A.position.y - r.y;
                      (m.setPosition(A, { x: r.x + O * g, y: r.y + U * y }), m.scale(A, g, y));
                    }
                    return o;
                  }),
                  (i.bounds = function (o) {
                    for (var g = i.allBodies(o), y = [], r = 0; r < g.length; r += 1) {
                      var p = g[r];
                      y.push(p.bounds.min, p.bounds.max);
                    }
                    return s.create(y);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(4),
                d = h(5),
                s = h(0);
              (function () {
                ((i._motionWakeThreshold = 0.18),
                  (i._motionSleepThreshold = 0.08),
                  (i._minBias = 0.9),
                  (i.update = function (m, o) {
                    for (
                      var g = o / s._baseDelta, y = i._motionSleepThreshold, r = 0;
                      r < m.length;
                      r++
                    ) {
                      var p = m[r],
                        v = f.getSpeed(p),
                        E = f.getAngularSpeed(p),
                        A = v * v + E * E;
                      if (p.force.x !== 0 || p.force.y !== 0) {
                        i.set(p, !1);
                        continue;
                      }
                      var O = Math.min(p.motion, A),
                        U = Math.max(p.motion, A);
                      ((p.motion = i._minBias * O + (1 - i._minBias) * U),
                        p.sleepThreshold > 0 && p.motion < y
                          ? ((p.sleepCounter += 1),
                            p.sleepCounter >= p.sleepThreshold / g && i.set(p, !0))
                          : p.sleepCounter > 0 && (p.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (m) {
                    for (var o = i._motionSleepThreshold, g = 0; g < m.length; g++) {
                      var y = m[g];
                      if (y.isActive) {
                        var r = y.collision,
                          p = r.bodyA.parent,
                          v = r.bodyB.parent;
                        if (
                          !((p.isSleeping && v.isSleeping) || p.isStatic || v.isStatic) &&
                          (p.isSleeping || v.isSleeping)
                        ) {
                          var E = p.isSleeping && !p.isStatic ? p : v,
                            A = E === p ? v : p;
                          !E.isStatic && A.motion > o && i.set(E, !1);
                        }
                      }
                    }
                  }),
                  (i.set = function (m, o) {
                    var g = m.isSleeping;
                    o
                      ? ((m.isSleeping = !0),
                        (m.sleepCounter = m.sleepThreshold),
                        (m.positionImpulse.x = 0),
                        (m.positionImpulse.y = 0),
                        (m.positionPrev.x = m.position.x),
                        (m.positionPrev.y = m.position.y),
                        (m.anglePrev = m.angle),
                        (m.speed = 0),
                        (m.angularSpeed = 0),
                        (m.motion = 0),
                        g || d.trigger(m, 'sleepStart'))
                      : ((m.isSleeping = !1), (m.sleepCounter = 0), g && d.trigger(m, 'sleepEnd'));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(9);
              (function () {
                var s = [],
                  m = { overlap: 0, axis: null },
                  o = { overlap: 0, axis: null };
                ((i.create = function (g, y) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: g,
                    bodyB: y,
                    parentA: g.parent,
                    parentB: y.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (g, y, r) {
                    if (
                      (i._overlapAxes(m, g.vertices, y.vertices, g.axes),
                      m.overlap <= 0 ||
                        (i._overlapAxes(o, y.vertices, g.vertices, y.axes), o.overlap <= 0))
                    )
                      return null;
                    var p = r && r.table[d.id(g, y)],
                      v;
                    (p
                      ? (v = p.collision)
                      : ((v = i.create(g, y)),
                        (v.collided = !0),
                        (v.bodyA = g.id < y.id ? g : y),
                        (v.bodyB = g.id < y.id ? y : g),
                        (v.parentA = v.bodyA.parent),
                        (v.parentB = v.bodyB.parent)),
                      (g = v.bodyA),
                      (y = v.bodyB));
                    var E;
                    m.overlap < o.overlap ? (E = m) : (E = o);
                    var A = v.normal,
                      O = v.tangent,
                      U = v.penetration,
                      _ = v.supports,
                      T = E.overlap,
                      M = E.axis,
                      z = M.x,
                      D = M.y,
                      w = y.position.x - g.position.x,
                      B = y.position.y - g.position.y;
                    (z * w + D * B >= 0 && ((z = -z), (D = -D)),
                      (A.x = z),
                      (A.y = D),
                      (O.x = -D),
                      (O.y = z),
                      (U.x = z * T),
                      (U.y = D * T),
                      (v.depth = T));
                    var j = i._findSupports(g, y, A, 1),
                      L = 0;
                    if (
                      (f.contains(g.vertices, j[0]) && (_[L++] = j[0]),
                      f.contains(g.vertices, j[1]) && (_[L++] = j[1]),
                      L < 2)
                    ) {
                      var F = i._findSupports(y, g, A, -1);
                      (f.contains(y.vertices, F[0]) && (_[L++] = F[0]),
                        L < 2 && f.contains(y.vertices, F[1]) && (_[L++] = F[1]));
                    }
                    return (L === 0 && (_[L++] = j[0]), (v.supportCount = L), v);
                  }),
                  (i._overlapAxes = function (g, y, r, p) {
                    var v = y.length,
                      E = r.length,
                      A = y[0].x,
                      O = y[0].y,
                      U = r[0].x,
                      _ = r[0].y,
                      T = p.length,
                      M = Number.MAX_VALUE,
                      z = 0,
                      D,
                      w,
                      B,
                      j,
                      L,
                      F;
                    for (L = 0; L < T; L++) {
                      var te = p[L],
                        I = te.x,
                        V = te.y,
                        K = A * I + O * V,
                        ae = U * I + _ * V,
                        oe = K,
                        de = ae;
                      for (F = 1; F < v; F += 1)
                        ((j = y[F].x * I + y[F].y * V), j > oe ? (oe = j) : j < K && (K = j));
                      for (F = 1; F < E; F += 1)
                        ((j = r[F].x * I + r[F].y * V), j > de ? (de = j) : j < ae && (ae = j));
                      if (
                        ((w = oe - ae),
                        (B = de - K),
                        (D = w < B ? w : B),
                        D < M && ((M = D), (z = L), D <= 0))
                      )
                        break;
                    }
                    ((g.axis = p[z]), (g.overlap = M));
                  }),
                  (i._findSupports = function (g, y, r, p) {
                    var v = y.vertices,
                      E = v.length,
                      A = g.position.x,
                      O = g.position.y,
                      U = r.x * p,
                      _ = r.y * p,
                      T = v[0],
                      M = T,
                      z = U * (A - M.x) + _ * (O - M.y),
                      D,
                      w,
                      B;
                    for (B = 1; B < E; B += 1)
                      ((M = v[B]),
                        (w = U * (A - M.x) + _ * (O - M.y)),
                        w < z && ((z = w), (T = M)));
                    return (
                      (D = v[(E + T.index - 1) % E]),
                      (z = U * (A - D.x) + _ * (O - D.y)),
                      (M = v[(T.index + 1) % E]),
                      U * (A - M.x) + _ * (O - M.y) < z
                        ? ((s[0] = T), (s[1] = M), s)
                        : ((s[0] = T), (s[1] = D), s)
                    );
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(16);
              (function () {
                ((i.create = function (d, s) {
                  var m = d.bodyA,
                    o = d.bodyB,
                    g = {
                      id: i.id(m, o),
                      bodyA: m,
                      bodyB: o,
                      collision: d,
                      contacts: [f.create(), f.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: m.isSensor || o.isSensor,
                      timeCreated: s,
                      timeUpdated: s,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (i.update(g, d, s), g);
                }),
                  (i.update = function (d, s, m) {
                    var o = s.supports,
                      g = s.supportCount,
                      y = d.contacts,
                      r = s.parentA,
                      p = s.parentB;
                    ((d.isActive = !0),
                      (d.timeUpdated = m),
                      (d.collision = s),
                      (d.separation = s.depth),
                      (d.inverseMass = r.inverseMass + p.inverseMass),
                      (d.friction = r.friction < p.friction ? r.friction : p.friction),
                      (d.frictionStatic =
                        r.frictionStatic > p.frictionStatic ? r.frictionStatic : p.frictionStatic),
                      (d.restitution =
                        r.restitution > p.restitution ? r.restitution : p.restitution),
                      (d.slop = r.slop > p.slop ? r.slop : p.slop),
                      (d.contactCount = g),
                      (s.pair = d));
                    var v = o[0],
                      E = y[0],
                      A = o[1],
                      O = y[1];
                    ((O.vertex === v || E.vertex === A) && ((y[1] = E), (y[0] = E = O), (O = y[1])),
                      (E.vertex = v),
                      (O.vertex = A));
                  }),
                  (i.setActive = function (d, s, m) {
                    s
                      ? ((d.isActive = !0), (d.timeUpdated = m))
                      : ((d.isActive = !1), (d.contactCount = 0));
                  }),
                  (i.id = function (d, s) {
                    return d.id < s.id
                      ? d.id.toString(36) + ':' + s.id.toString(36)
                      : s.id.toString(36) + ':' + d.id.toString(36);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(2),
                s = h(7),
                m = h(1),
                o = h(11),
                g = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (y) {
                    var r = y;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var p = r.bodyA ? d.add(r.bodyA.position, r.pointA) : r.pointA,
                      v = r.bodyB ? d.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = d.magnitude(d.sub(p, v));
                    ((r.length = typeof r.length < 'u' ? r.length : E),
                      (r.id = r.id || g.nextId()),
                      (r.label = r.label || 'Constraint'),
                      (r.type = 'constraint'),
                      (r.stiffness = r.stiffness || (r.length > 0 ? 1 : 0.7)),
                      (r.damping = r.damping || 0),
                      (r.angularStiffness = r.angularStiffness || 0),
                      (r.angleA = r.bodyA ? r.bodyA.angle : r.angleA),
                      (r.angleB = r.bodyB ? r.bodyB.angle : r.angleB),
                      (r.plugin = {}));
                    var A = {
                      visible: !0,
                      lineWidth: 2,
                      strokeStyle: '#ffffff',
                      type: 'line',
                      anchors: !0,
                    };
                    return (
                      r.length === 0 && r.stiffness > 0.1
                        ? ((A.type = 'pin'), (A.anchors = !1))
                        : r.stiffness < 0.9 && (A.type = 'spring'),
                      (r.render = g.extend(A, r.render)),
                      r
                    );
                  }),
                  (i.preSolveAll = function (y) {
                    for (var r = 0; r < y.length; r += 1) {
                      var p = y[r],
                        v = p.constraintImpulse;
                      p.isStatic ||
                        (v.x === 0 && v.y === 0 && v.angle === 0) ||
                        ((p.position.x += v.x), (p.position.y += v.y), (p.angle += v.angle));
                    }
                  }),
                  (i.solveAll = function (y, r) {
                    for (var p = g.clamp(r / g._baseDelta, 0, 1), v = 0; v < y.length; v += 1) {
                      var E = y[v],
                        A = !E.bodyA || (E.bodyA && E.bodyA.isStatic),
                        O = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (A || O) && i.solve(y[v], p);
                    }
                    for (v = 0; v < y.length; v += 1)
                      ((E = y[v]),
                        (A = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (O = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !A && !O && i.solve(y[v], p));
                  }),
                  (i.solve = function (y, r) {
                    var p = y.bodyA,
                      v = y.bodyB,
                      E = y.pointA,
                      A = y.pointB;
                    if (!(!p && !v)) {
                      (p &&
                        !p.isStatic &&
                        (d.rotate(E, p.angle - y.angleA, E), (y.angleA = p.angle)),
                        v &&
                          !v.isStatic &&
                          (d.rotate(A, v.angle - y.angleB, A), (y.angleB = v.angle)));
                      var O = E,
                        U = A;
                      if (
                        (p && (O = d.add(p.position, E)),
                        v && (U = d.add(v.position, A)),
                        !(!O || !U))
                      ) {
                        var _ = d.sub(O, U),
                          T = d.magnitude(_);
                        T < i._minLength && (T = i._minLength);
                        var M = (T - y.length) / T,
                          z = y.stiffness >= 1 || y.length === 0,
                          D = z ? y.stiffness * r : y.stiffness * r * r,
                          w = y.damping * r,
                          B = d.mult(_, M * D),
                          j = (p ? p.inverseMass : 0) + (v ? v.inverseMass : 0),
                          L = (p ? p.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          F = j + L,
                          te,
                          I,
                          V,
                          K,
                          ae;
                        if (w > 0) {
                          var oe = d.create();
                          ((V = d.div(_, T)),
                            (ae = d.sub(
                              (v && d.sub(v.position, v.positionPrev)) || oe,
                              (p && d.sub(p.position, p.positionPrev)) || oe
                            )),
                            (K = d.dot(V, ae)));
                        }
                        (p &&
                          !p.isStatic &&
                          ((I = p.inverseMass / j),
                          (p.constraintImpulse.x -= B.x * I),
                          (p.constraintImpulse.y -= B.y * I),
                          (p.position.x -= B.x * I),
                          (p.position.y -= B.y * I),
                          w > 0 &&
                            ((p.positionPrev.x -= w * V.x * K * I),
                            (p.positionPrev.y -= w * V.y * K * I)),
                          (te =
                            (d.cross(E, B) / F) *
                            i._torqueDampen *
                            p.inverseInertia *
                            (1 - y.angularStiffness)),
                          (p.constraintImpulse.angle -= te),
                          (p.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((I = v.inverseMass / j),
                            (v.constraintImpulse.x += B.x * I),
                            (v.constraintImpulse.y += B.y * I),
                            (v.position.x += B.x * I),
                            (v.position.y += B.y * I),
                            w > 0 &&
                              ((v.positionPrev.x += w * V.x * K * I),
                              (v.positionPrev.y += w * V.y * K * I)),
                            (te =
                              (d.cross(A, B) / F) *
                              i._torqueDampen *
                              v.inverseInertia *
                              (1 - y.angularStiffness)),
                            (v.constraintImpulse.angle += te),
                            (v.angle += te)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (y) {
                    for (var r = 0; r < y.length; r++) {
                      var p = y[r],
                        v = p.constraintImpulse;
                      if (!(p.isStatic || (v.x === 0 && v.y === 0 && v.angle === 0))) {
                        s.set(p, !1);
                        for (var E = 0; E < p.parts.length; E++) {
                          var A = p.parts[E];
                          (f.translate(A.vertices, v),
                            E > 0 && ((A.position.x += v.x), (A.position.y += v.y)),
                            v.angle !== 0 &&
                              (f.rotate(A.vertices, v.angle, p.position),
                              o.rotate(A.axes, v.angle),
                              E > 0 && d.rotateAbout(A.position, v.angle, p.position, A.position)),
                            m.update(A.bounds, A.vertices, p.velocity));
                        }
                        ((v.angle *= i._warming), (v.x *= i._warming), (v.y *= i._warming));
                      }
                    }
                  }),
                  (i.pointAWorld = function (y) {
                    return {
                      x: (y.bodyA ? y.bodyA.position.x : 0) + (y.pointA ? y.pointA.x : 0),
                      y: (y.bodyA ? y.bodyA.position.y : 0) + (y.pointA ? y.pointA.y : 0),
                    };
                  }),
                  (i.pointBWorld = function (y) {
                    return {
                      x: (y.bodyB ? y.bodyB.position.x : 0) + (y.pointB ? y.pointB.x : 0),
                      y: (y.bodyB ? y.bodyB.position.y : 0) + (y.pointB ? y.pointB.y : 0),
                    };
                  }),
                  (i.currentLength = function (y) {
                    var r = (y.bodyA ? y.bodyA.position.x : 0) + (y.pointA ? y.pointA.x : 0),
                      p = (y.bodyA ? y.bodyA.position.y : 0) + (y.pointA ? y.pointA.y : 0),
                      v = (y.bodyB ? y.bodyB.position.x : 0) + (y.pointB ? y.pointB.x : 0),
                      E = (y.bodyB ? y.bodyB.position.y : 0) + (y.pointB ? y.pointB.y : 0),
                      A = r - v,
                      O = p - E;
                    return Math.sqrt(A * A + O * O);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(2),
                d = h(0);
              (function () {
                ((i.fromVertices = function (s) {
                  for (var m = {}, o = 0; o < s.length; o++) {
                    var g = (o + 1) % s.length,
                      y = f.normalise({ x: s[g].y - s[o].y, y: s[o].x - s[g].x }),
                      r = y.y === 0 ? 1 / 0 : y.x / y.y;
                    ((r = r.toFixed(3).toString()), (m[r] = y));
                  }
                  return d.values(m);
                }),
                  (i.rotate = function (s, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), g = Math.sin(m), y = 0; y < s.length; y++) {
                        var r = s[y],
                          p;
                        ((p = r.x * o - r.y * g), (r.y = r.x * g + r.y * o), (r.x = p));
                      }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(0),
                s = h(4),
                m = h(1),
                o = h(2);
              (function () {
                ((i.rectangle = function (g, y, r, p, v) {
                  v = v || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: g, y },
                    vertices: f.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + p + ' L 0 ' + p),
                  };
                  if (v.chamfer) {
                    var A = v.chamfer;
                    ((E.vertices = f.chamfer(
                      E.vertices,
                      A.radius,
                      A.quality,
                      A.qualityMin,
                      A.qualityMax
                    )),
                      delete v.chamfer);
                  }
                  return s.create(d.extend({}, E, v));
                }),
                  (i.trapezoid = function (g, y, r, p, v, E) {
                    ((E = E || {}),
                      v >= 1 && d.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var A = (1 - v * 2) * r,
                      O = r * v,
                      U = O + A,
                      _ = U + O,
                      T;
                    v < 0.5
                      ? (T = 'L 0 0 L ' + O + ' ' + -p + ' L ' + U + ' ' + -p + ' L ' + _ + ' 0')
                      : (T = 'L 0 0 L ' + U + ' ' + -p + ' L ' + _ + ' 0');
                    var M = {
                      label: 'Trapezoid Body',
                      position: { x: g, y },
                      vertices: f.fromPath(T),
                    };
                    if (E.chamfer) {
                      var z = E.chamfer;
                      ((M.vertices = f.chamfer(
                        M.vertices,
                        z.radius,
                        z.quality,
                        z.qualityMin,
                        z.qualityMax
                      )),
                        delete E.chamfer);
                    }
                    return s.create(d.extend({}, M, E));
                  }),
                  (i.circle = function (g, y, r, p, v) {
                    p = p || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    v = v || 25;
                    var A = Math.ceil(Math.max(10, Math.min(v, r)));
                    return (A % 2 === 1 && (A += 1), i.polygon(g, y, A, r, d.extend({}, E, p)));
                  }),
                  (i.polygon = function (g, y, r, p, v) {
                    if (((v = v || {}), r < 3)) return i.circle(g, y, p, v);
                    for (var E = (2 * Math.PI) / r, A = '', O = E * 0.5, U = 0; U < r; U += 1) {
                      var _ = O + U * E,
                        T = Math.cos(_) * p,
                        M = Math.sin(_) * p;
                      A += 'L ' + T.toFixed(3) + ' ' + M.toFixed(3) + ' ';
                    }
                    var z = {
                      label: 'Polygon Body',
                      position: { x: g, y },
                      vertices: f.fromPath(A),
                    };
                    if (v.chamfer) {
                      var D = v.chamfer;
                      ((z.vertices = f.chamfer(
                        z.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return s.create(d.extend({}, z, v));
                  }),
                  (i.fromVertices = function (g, y, r, p, v, E, A, O) {
                    var U = d.getDecomp(),
                      _,
                      T,
                      M,
                      z,
                      D,
                      w,
                      B,
                      j,
                      L,
                      F,
                      te;
                    for (
                      _ = !!(U && U.quickDecomp),
                        p = p || {},
                        M = [],
                        v = typeof v < 'u' ? v : !1,
                        E = typeof E < 'u' ? E : 0.01,
                        A = typeof A < 'u' ? A : 10,
                        O = typeof O < 'u' ? O : 0.01,
                        d.isArray(r[0]) || (r = [r]),
                        F = 0;
                      F < r.length;
                      F += 1
                    )
                      if (
                        ((w = r[F]),
                        (z = f.isConvex(w)),
                        (D = !z),
                        D &&
                          !_ &&
                          d.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        z || !_)
                      )
                        (z ? (w = f.clockwiseSort(w)) : (w = f.hull(w)),
                          M.push({ position: { x: g, y }, vertices: w }));
                      else {
                        var I = w.map(function (ne) {
                          return [ne.x, ne.y];
                        });
                        (U.makeCCW(I),
                          E !== !1 && U.removeCollinearPoints(I, E),
                          O !== !1 && U.removeDuplicatePoints && U.removeDuplicatePoints(I, O));
                        var V = U.quickDecomp(I);
                        for (B = 0; B < V.length; B++) {
                          var K = V[B],
                            ae = K.map(function (ne) {
                              return { x: ne[0], y: ne[1] };
                            });
                          (A > 0 && f.area(ae) < A) ||
                            M.push({ position: f.centre(ae), vertices: ae });
                        }
                      }
                    for (B = 0; B < M.length; B++) M[B] = s.create(d.extend(M[B], p));
                    if (v) {
                      var oe = 5;
                      for (B = 0; B < M.length; B++) {
                        var de = M[B];
                        for (j = B + 1; j < M.length; j++) {
                          var H = M[j];
                          if (m.overlaps(de.bounds, H.bounds)) {
                            var $ = de.vertices,
                              W = H.vertices;
                            for (L = 0; L < de.vertices.length; L++)
                              for (te = 0; te < H.vertices.length; te++) {
                                var le = o.magnitudeSquared(o.sub($[(L + 1) % $.length], W[te])),
                                  ue = o.magnitudeSquared(o.sub($[L], W[(te + 1) % W.length]));
                                le < oe &&
                                  ue < oe &&
                                  (($[L].isInternal = !0), (W[te].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return M.length > 1
                      ? ((T = s.create(d.extend({ parts: M.slice(0) }, p))),
                        s.setPosition(T, { x: g, y }),
                        T)
                      : M[0];
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(0),
                d = h(8);
              (function () {
                ((i.create = function (s) {
                  var m = { bodies: [], collisions: [], pairs: null };
                  return f.extend(m, s);
                }),
                  (i.setBodies = function (s, m) {
                    s.bodies = m.slice(0);
                  }),
                  (i.clear = function (s) {
                    ((s.bodies = []), (s.collisions = []));
                  }),
                  (i.collisions = function (s) {
                    var m = s.pairs,
                      o = s.bodies,
                      g = o.length,
                      y = i.canCollide,
                      r = d.collides,
                      p = s.collisions,
                      v = 0,
                      E,
                      A;
                    for (o.sort(i._compareBoundsX), E = 0; E < g; E++) {
                      var O = o[E],
                        U = O.bounds,
                        _ = O.bounds.max.x,
                        T = O.bounds.max.y,
                        M = O.bounds.min.y,
                        z = O.isStatic || O.isSleeping,
                        D = O.parts.length,
                        w = D === 1;
                      for (A = E + 1; A < g; A++) {
                        var B = o[A],
                          j = B.bounds;
                        if (j.min.x > _) break;
                        if (
                          !(T < j.min.y || M > j.max.y) &&
                          !(z && (B.isStatic || B.isSleeping)) &&
                          y(O.collisionFilter, B.collisionFilter)
                        ) {
                          var L = B.parts.length;
                          if (w && L === 1) {
                            var F = r(O, B, m);
                            F && (p[v++] = F);
                          } else
                            for (var te = D > 1 ? 1 : 0, I = L > 1 ? 1 : 0, V = te; V < D; V++)
                              for (var K = O.parts[V], U = K.bounds, ae = I; ae < L; ae++) {
                                var oe = B.parts[ae],
                                  j = oe.bounds;
                                if (
                                  !(
                                    U.min.x > j.max.x ||
                                    U.max.x < j.min.x ||
                                    U.max.y < j.min.y ||
                                    U.min.y > j.max.y
                                  )
                                ) {
                                  var F = r(K, oe, m);
                                  F && (p[v++] = F);
                                }
                              }
                        }
                      }
                    }
                    return (p.length !== v && (p.length = v), p);
                  }),
                  (i.canCollide = function (s, m) {
                    return s.group === m.group && s.group !== 0
                      ? s.group > 0
                      : (s.mask & m.category) !== 0 && (m.mask & s.category) !== 0;
                  }),
                  (i._compareBoundsX = function (s, m) {
                    return s.bounds.min.x - m.bounds.min.x;
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(0);
              (function () {
                ((i.create = function (d) {
                  var s = {};
                  return (
                    d ||
                      f.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (s.element = d || document.body),
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
                    (s.mousemove = function (m) {
                      var o = i._getRelativeMousePosition(m, s.element, s.pixelRatio),
                        g = m.changedTouches;
                      (g && ((s.button = 0), m.preventDefault()),
                        (s.absolute.x = o.x),
                        (s.absolute.y = o.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.sourceEvents.mousemove = m));
                    }),
                    (s.mousedown = function (m) {
                      var o = i._getRelativeMousePosition(m, s.element, s.pixelRatio),
                        g = m.changedTouches;
                      (g ? ((s.button = 0), m.preventDefault()) : (s.button = m.button),
                        (s.absolute.x = o.x),
                        (s.absolute.y = o.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.mousedownPosition.x = s.position.x),
                        (s.mousedownPosition.y = s.position.y),
                        (s.sourceEvents.mousedown = m));
                    }),
                    (s.mouseup = function (m) {
                      var o = i._getRelativeMousePosition(m, s.element, s.pixelRatio),
                        g = m.changedTouches;
                      (g && m.preventDefault(),
                        (s.button = -1),
                        (s.absolute.x = o.x),
                        (s.absolute.y = o.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.mouseupPosition.x = s.position.x),
                        (s.mouseupPosition.y = s.position.y),
                        (s.sourceEvents.mouseup = m));
                    }),
                    (s.mousewheel = function (m) {
                      ((s.wheelDelta = Math.max(-1, Math.min(1, m.wheelDelta || -m.detail))),
                        m.preventDefault(),
                        (s.sourceEvents.mousewheel = m));
                    }),
                    i.setElement(s, s.element),
                    s
                  );
                }),
                  (i.setElement = function (d, s) {
                    ((d.element = s),
                      s.addEventListener('mousemove', d.mousemove, { passive: !0 }),
                      s.addEventListener('mousedown', d.mousedown, { passive: !0 }),
                      s.addEventListener('mouseup', d.mouseup, { passive: !0 }),
                      s.addEventListener('wheel', d.mousewheel, { passive: !1 }),
                      s.addEventListener('touchmove', d.mousemove, { passive: !1 }),
                      s.addEventListener('touchstart', d.mousedown, { passive: !1 }),
                      s.addEventListener('touchend', d.mouseup, { passive: !1 }));
                  }),
                  (i.clearSourceEvents = function (d) {
                    ((d.sourceEvents.mousemove = null),
                      (d.sourceEvents.mousedown = null),
                      (d.sourceEvents.mouseup = null),
                      (d.sourceEvents.mousewheel = null),
                      (d.wheelDelta = 0));
                  }),
                  (i.setOffset = function (d, s) {
                    ((d.offset.x = s.x),
                      (d.offset.y = s.y),
                      (d.position.x = d.absolute.x * d.scale.x + d.offset.x),
                      (d.position.y = d.absolute.y * d.scale.y + d.offset.y));
                  }),
                  (i.setScale = function (d, s) {
                    ((d.scale.x = s.x),
                      (d.scale.y = s.y),
                      (d.position.x = d.absolute.x * d.scale.x + d.offset.x),
                      (d.position.y = d.absolute.y * d.scale.y + d.offset.y));
                  }),
                  (i._getRelativeMousePosition = function (d, s, m) {
                    var o = s.getBoundingClientRect(),
                      g = document.documentElement || document.body.parentNode || document.body,
                      y = window.pageXOffset !== void 0 ? window.pageXOffset : g.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : g.scrollTop,
                      p = d.changedTouches,
                      v,
                      E;
                    return (
                      p
                        ? ((v = p[0].pageX - o.left - y), (E = p[0].pageY - o.top - r))
                        : ((v = d.pageX - o.left - y), (E = d.pageY - o.top - r)),
                      {
                        x: v / ((s.clientWidth / (s.width || s.clientWidth)) * m),
                        y: E / ((s.clientHeight / (s.height || s.clientHeight)) * m),
                      }
                    );
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(0);
              (function () {
                ((i._registry = {}),
                  (i.register = function (d) {
                    if (
                      (i.isPlugin(d) ||
                        f.warn(
                          'Plugin.register:',
                          i.toString(d),
                          'does not implement all required fields.'
                        ),
                      d.name in i._registry)
                    ) {
                      var s = i._registry[d.name],
                        m = i.versionParse(d.version).number,
                        o = i.versionParse(s.version).number;
                      m > o
                        ? (f.warn(
                            'Plugin.register:',
                            i.toString(s),
                            'was upgraded to',
                            i.toString(d)
                          ),
                          (i._registry[d.name] = d))
                        : m < o
                          ? f.warn(
                              'Plugin.register:',
                              i.toString(s),
                              'can not be downgraded to',
                              i.toString(d)
                            )
                          : d !== s &&
                            f.warn(
                              'Plugin.register:',
                              i.toString(d),
                              'is already registered to different plugin object'
                            );
                    } else i._registry[d.name] = d;
                    return d;
                  }),
                  (i.resolve = function (d) {
                    return i._registry[i.dependencyParse(d).name];
                  }),
                  (i.toString = function (d) {
                    return typeof d == 'string'
                      ? d
                      : (d.name || 'anonymous') + '@' + (d.version || d.range || '0.0.0');
                  }),
                  (i.isPlugin = function (d) {
                    return d && d.name && d.version && d.install;
                  }),
                  (i.isUsed = function (d, s) {
                    return d.used.indexOf(s) > -1;
                  }),
                  (i.isFor = function (d, s) {
                    var m = d.for && i.dependencyParse(d.for);
                    return !d.for || (s.name === m.name && i.versionSatisfies(s.version, m.range));
                  }),
                  (i.use = function (d, s) {
                    if (((d.uses = (d.uses || []).concat(s || [])), d.uses.length === 0)) {
                      f.warn(
                        'Plugin.use:',
                        i.toString(d),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var m = i.dependencies(d), o = f.topologicalSort(m), g = [], y = 0;
                      y < o.length;
                      y += 1
                    )
                      if (o[y] !== d.name) {
                        var r = i.resolve(o[y]);
                        if (!r) {
                          g.push('❌ ' + o[y]);
                          continue;
                        }
                        i.isUsed(d, r.name) ||
                          (i.isFor(r, d) ||
                            (f.warn(
                              'Plugin.use:',
                              i.toString(r),
                              'is for',
                              r.for,
                              'but installed on',
                              i.toString(d) + '.'
                            ),
                            (r._warned = !0)),
                          r.install
                            ? r.install(d)
                            : (f.warn(
                                'Plugin.use:',
                                i.toString(r),
                                'does not specify an install function.'
                              ),
                              (r._warned = !0)),
                          r._warned
                            ? (g.push('🔶 ' + i.toString(r)), delete r._warned)
                            : g.push('✅ ' + i.toString(r)),
                          d.used.push(r.name));
                      }
                    g.length > 0 && f.info(g.join('  '));
                  }),
                  (i.dependencies = function (d, s) {
                    var m = i.dependencyParse(d),
                      o = m.name;
                    if (((s = s || {}), !(o in s))) {
                      ((d = i.resolve(d) || d),
                        (s[o] = f.map(d.uses || [], function (y) {
                          i.isPlugin(y) && i.register(y);
                          var r = i.dependencyParse(y),
                            p = i.resolve(y);
                          return (
                            p && !i.versionSatisfies(p.version, r.range)
                              ? (f.warn(
                                  'Plugin.dependencies:',
                                  i.toString(p),
                                  'does not satisfy',
                                  i.toString(r),
                                  'used by',
                                  i.toString(m) + '.'
                                ),
                                (p._warned = !0),
                                (d._warned = !0))
                              : p ||
                                (f.warn(
                                  'Plugin.dependencies:',
                                  i.toString(y),
                                  'used by',
                                  i.toString(m),
                                  'could not be resolved.'
                                ),
                                (d._warned = !0)),
                            r.name
                          );
                        })));
                      for (var g = 0; g < s[o].length; g += 1) i.dependencies(s[o][g], s);
                      return s;
                    }
                  }),
                  (i.dependencyParse = function (d) {
                    if (f.isString(d)) {
                      var s = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        s.test(d) ||
                          f.warn('Plugin.dependencyParse:', d, 'is not a valid dependency string.'),
                        { name: d.split('@')[0], range: d.split('@')[1] || '*' }
                      );
                    }
                    return { name: d.name, range: d.range || d.version };
                  }),
                  (i.versionParse = function (d) {
                    var s = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    s.test(d) ||
                      f.warn('Plugin.versionParse:', d, 'is not a valid version or range.');
                    var m = s.exec(d),
                      o = Number(m[4]),
                      g = Number(m[5]),
                      y = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: d,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: g,
                      patch: y,
                      parts: [o, g, y],
                      prerelease: m[7],
                      number: o * 1e8 + g * 1e4 + y,
                    };
                  }),
                  (i.versionSatisfies = function (d, s) {
                    s = s || '*';
                    var m = i.versionParse(s),
                      o = i.versionParse(d);
                    if (m.isRange) {
                      if (m.operator === '*' || d === '*') return !0;
                      if (m.operator === '>') return o.number > m.number;
                      if (m.operator === '>=') return o.number >= m.number;
                      if (m.operator === '~')
                        return o.major === m.major && o.minor === m.minor && o.patch >= m.patch;
                      if (m.operator === '^')
                        return m.major > 0
                          ? o.major === m.major && o.number >= m.number
                          : m.minor > 0
                            ? o.minor === m.minor && o.patch >= m.patch
                            : o.patch === m.patch;
                    }
                    return d === s || d === '*';
                  }));
              })();
            },
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  h.create = function (i) {
                    return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(7),
                d = h(18),
                s = h(13),
                m = h(19),
                o = h(5),
                g = h(6),
                y = h(10),
                r = h(0),
                p = h(4);
              (function () {
                ((i._deltaMax = 1e3 / 60),
                  (i.create = function (v) {
                    v = v || {};
                    var E = {
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
                      A = r.extend(E, v);
                    return (
                      (A.world = v.world || g.create({ label: 'World' })),
                      (A.pairs = v.pairs || m.create()),
                      (A.detector = v.detector || s.create()),
                      (A.detector.pairs = A.pairs),
                      (A.grid = { buckets: [] }),
                      (A.world.gravity = A.gravity),
                      (A.broadphase = A.grid),
                      (A.metrics = {}),
                      A
                    );
                  }),
                  (i.update = function (v, E) {
                    var A = r.now(),
                      O = v.world,
                      U = v.detector,
                      _ = v.pairs,
                      T = v.timing,
                      M = T.timestamp,
                      z;
                    (E > i._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        i._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (E = typeof E < 'u' ? E : r._baseDelta),
                      (E *= T.timeScale),
                      (T.timestamp += E),
                      (T.lastDelta = E));
                    var D = { timestamp: T.timestamp, delta: E };
                    o.trigger(v, 'beforeUpdate', D);
                    var w = g.allBodies(O),
                      B = g.allConstraints(O);
                    for (
                      O.isModified && (s.setBodies(U, w), g.setModified(O, !1, !1, !0)),
                        v.enableSleeping && f.update(w, E),
                        i._bodiesApplyGravity(w, v.gravity),
                        E > 0 && i._bodiesUpdate(w, E),
                        o.trigger(v, 'beforeSolve', D),
                        y.preSolveAll(w),
                        z = 0;
                      z < v.constraintIterations;
                      z++
                    )
                      y.solveAll(B, E);
                    y.postSolveAll(w);
                    var j = s.collisions(U);
                    (m.update(_, j, M),
                      v.enableSleeping && f.afterCollisions(_.list),
                      _.collisionStart.length > 0 &&
                        o.trigger(v, 'collisionStart', {
                          pairs: _.collisionStart,
                          timestamp: T.timestamp,
                          delta: E,
                        }));
                    var L = r.clamp(20 / v.positionIterations, 0, 1);
                    for (d.preSolvePosition(_.list), z = 0; z < v.positionIterations; z++)
                      d.solvePosition(_.list, E, L);
                    for (
                      d.postSolvePosition(w), y.preSolveAll(w), z = 0;
                      z < v.constraintIterations;
                      z++
                    )
                      y.solveAll(B, E);
                    for (
                      y.postSolveAll(w), d.preSolveVelocity(_.list), z = 0;
                      z < v.velocityIterations;
                      z++
                    )
                      d.solveVelocity(_.list, E);
                    return (
                      i._bodiesUpdateVelocities(w),
                      _.collisionActive.length > 0 &&
                        o.trigger(v, 'collisionActive', {
                          pairs: _.collisionActive,
                          timestamp: T.timestamp,
                          delta: E,
                        }),
                      _.collisionEnd.length > 0 &&
                        o.trigger(v, 'collisionEnd', {
                          pairs: _.collisionEnd,
                          timestamp: T.timestamp,
                          delta: E,
                        }),
                      i._bodiesClearForces(w),
                      o.trigger(v, 'afterUpdate', D),
                      (v.timing.lastElapsed = r.now() - A),
                      v
                    );
                  }),
                  (i.merge = function (v, E) {
                    if ((r.extend(v, E), E.world)) {
                      ((v.world = E.world), i.clear(v));
                      for (var A = g.allBodies(v.world), O = 0; O < A.length; O++) {
                        var U = A[O];
                        (f.set(U, !1), (U.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (v) {
                    (m.clear(v.pairs), s.clear(v.detector));
                  }),
                  (i._bodiesClearForces = function (v) {
                    for (var E = v.length, A = 0; A < E; A++) {
                      var O = v[A];
                      ((O.force.x = 0), (O.force.y = 0), (O.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (v, E) {
                    var A = typeof E.scale < 'u' ? E.scale : 0.001,
                      O = v.length;
                    if (!((E.x === 0 && E.y === 0) || A === 0))
                      for (var U = 0; U < O; U++) {
                        var _ = v[U];
                        _.isStatic ||
                          _.isSleeping ||
                          ((_.force.y += _.mass * E.y * A), (_.force.x += _.mass * E.x * A));
                      }
                  }),
                  (i._bodiesUpdate = function (v, E) {
                    for (var A = v.length, O = 0; O < A; O++) {
                      var U = v[O];
                      U.isStatic || U.isSleeping || p.update(U, E);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (v) {
                    for (var E = v.length, A = 0; A < E; A++) p.updateVelocities(v[A]);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(0),
                s = h(1);
              (function () {
                ((i._restingThresh = 2),
                  (i._restingThreshTangent = Math.sqrt(6)),
                  (i._positionDampen = 0.9),
                  (i._positionWarming = 0.8),
                  (i._frictionNormalMultiplier = 5),
                  (i._frictionMaxStatic = Number.MAX_VALUE),
                  (i.preSolvePosition = function (m) {
                    var o,
                      g,
                      y,
                      r = m.length;
                    for (o = 0; o < r; o++)
                      ((g = m[o]),
                        g.isActive &&
                          ((y = g.contactCount),
                          (g.collision.parentA.totalContacts += y),
                          (g.collision.parentB.totalContacts += y)));
                  }),
                  (i.solvePosition = function (m, o, g) {
                    var y,
                      r,
                      p,
                      v,
                      E,
                      A,
                      O,
                      U,
                      _ = i._positionDampen * (g || 1),
                      T = d.clamp(o / d._baseDelta, 0, 1),
                      M = m.length;
                    for (y = 0; y < M; y++)
                      ((r = m[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (v = p.parentA),
                          (E = p.parentB),
                          (A = p.normal),
                          (r.separation =
                            p.depth +
                            A.x * (E.positionImpulse.x - v.positionImpulse.x) +
                            A.y * (E.positionImpulse.y - v.positionImpulse.y))));
                    for (y = 0; y < M; y++)
                      ((r = m[y]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (v = p.parentA),
                          (E = p.parentB),
                          (A = p.normal),
                          (U = r.separation - r.slop * T),
                          (v.isStatic || E.isStatic) && (U *= 2),
                          v.isStatic ||
                            v.isSleeping ||
                            ((O = _ / v.totalContacts),
                            (v.positionImpulse.x += A.x * U * O),
                            (v.positionImpulse.y += A.y * U * O)),
                          E.isStatic ||
                            E.isSleeping ||
                            ((O = _ / E.totalContacts),
                            (E.positionImpulse.x -= A.x * U * O),
                            (E.positionImpulse.y -= A.y * U * O))));
                  }),
                  (i.postSolvePosition = function (m) {
                    for (
                      var o = i._positionWarming,
                        g = m.length,
                        y = f.translate,
                        r = s.update,
                        p = 0;
                      p < g;
                      p++
                    ) {
                      var v = m[p],
                        E = v.positionImpulse,
                        A = E.x,
                        O = E.y,
                        U = v.velocity;
                      if (((v.totalContacts = 0), A !== 0 || O !== 0)) {
                        for (var _ = 0; _ < v.parts.length; _++) {
                          var T = v.parts[_];
                          (y(T.vertices, E),
                            r(T.bounds, T.vertices, U),
                            (T.position.x += A),
                            (T.position.y += O));
                        }
                        ((v.positionPrev.x += A),
                          (v.positionPrev.y += O),
                          A * U.x + O * U.y < 0
                            ? ((E.x = 0), (E.y = 0))
                            : ((E.x *= o), (E.y *= o)));
                      }
                    }
                  }),
                  (i.preSolveVelocity = function (m) {
                    var o = m.length,
                      g,
                      y;
                    for (g = 0; g < o; g++) {
                      var r = m[g];
                      if (!(!r.isActive || r.isSensor)) {
                        var p = r.contacts,
                          v = r.contactCount,
                          E = r.collision,
                          A = E.parentA,
                          O = E.parentB,
                          U = E.normal,
                          _ = E.tangent;
                        for (y = 0; y < v; y++) {
                          var T = p[y],
                            M = T.vertex,
                            z = T.normalImpulse,
                            D = T.tangentImpulse;
                          if (z !== 0 || D !== 0) {
                            var w = U.x * z + _.x * D,
                              B = U.y * z + _.y * D;
                            (A.isStatic ||
                              A.isSleeping ||
                              ((A.positionPrev.x += w * A.inverseMass),
                              (A.positionPrev.y += B * A.inverseMass),
                              (A.anglePrev +=
                                A.inverseInertia *
                                ((M.x - A.position.x) * B - (M.y - A.position.y) * w))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= w * O.inverseMass),
                                (O.positionPrev.y -= B * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((M.x - O.position.x) * B - (M.y - O.position.y) * w))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (m, o) {
                    var g = o / d._baseDelta,
                      y = g * g,
                      r = y * g,
                      p = -i._restingThresh * g,
                      v = i._restingThreshTangent,
                      E = i._frictionNormalMultiplier * g,
                      A = i._frictionMaxStatic,
                      O = m.length,
                      U,
                      _,
                      T,
                      M;
                    for (T = 0; T < O; T++) {
                      var z = m[T];
                      if (!(!z.isActive || z.isSensor)) {
                        var D = z.collision,
                          w = D.parentA,
                          B = D.parentB,
                          j = D.normal.x,
                          L = D.normal.y,
                          F = D.tangent.x,
                          te = D.tangent.y,
                          I = z.inverseMass,
                          V = z.friction * z.frictionStatic * E,
                          K = z.contacts,
                          ae = z.contactCount,
                          oe = 1 / ae,
                          de = w.position.x - w.positionPrev.x,
                          H = w.position.y - w.positionPrev.y,
                          $ = w.angle - w.anglePrev,
                          W = B.position.x - B.positionPrev.x,
                          le = B.position.y - B.positionPrev.y,
                          ue = B.angle - B.anglePrev;
                        for (M = 0; M < ae; M++) {
                          var ne = K[M],
                            re = ne.vertex,
                            he = re.x - w.position.x,
                            ge = re.y - w.position.y,
                            De = re.x - B.position.x,
                            Oe = re.y - B.position.y,
                            _e = de - ge * $,
                            ht = H + he * $,
                            Pe = W - Oe * ue,
                            la = le + De * ue,
                            cl = _e - Pe,
                            ii = ht - la,
                            fl = j * cl + L * ii,
                            vt = F * cl + te * ii,
                            dl = z.separation + fl,
                            Gn = Math.min(dl, 1);
                          Gn = dl < 0 ? 0 : Gn;
                          var ui = Gn * V;
                          vt < -ui || vt > ui
                            ? ((_ = vt > 0 ? vt : -vt),
                              (U = z.friction * (vt > 0 ? 1 : -1) * r),
                              U < -_ ? (U = -_) : U > _ && (U = _))
                            : ((U = vt), (_ = A));
                          var ri = he * L - ge * j,
                            at = De * L - Oe * j,
                            si = oe / (I + w.inverseInertia * ri * ri + B.inverseInertia * at * at),
                            Vn = (1 + z.restitution) * fl * si;
                          if (((U *= si), fl < p)) ne.normalImpulse = 0;
                          else {
                            var oi = ne.normalImpulse;
                            ((ne.normalImpulse += Vn),
                              ne.normalImpulse > 0 && (ne.normalImpulse = 0),
                              (Vn = ne.normalImpulse - oi));
                          }
                          if (vt < -v || vt > v) ne.tangentImpulse = 0;
                          else {
                            var ml = ne.tangentImpulse;
                            ((ne.tangentImpulse += U),
                              ne.tangentImpulse < -_ && (ne.tangentImpulse = -_),
                              ne.tangentImpulse > _ && (ne.tangentImpulse = _),
                              (U = ne.tangentImpulse - ml));
                          }
                          var hl = j * Vn + F * U,
                            qn = L * Vn + te * U;
                          (w.isStatic ||
                            w.isSleeping ||
                            ((w.positionPrev.x += hl * w.inverseMass),
                            (w.positionPrev.y += qn * w.inverseMass),
                            (w.anglePrev += (he * qn - ge * hl) * w.inverseInertia)),
                            B.isStatic ||
                              B.isSleeping ||
                              ((B.positionPrev.x -= hl * B.inverseMass),
                              (B.positionPrev.y -= qn * B.inverseMass),
                              (B.anglePrev -= (De * qn - Oe * hl) * B.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(9),
                d = h(0);
              (function () {
                ((i.create = function (s) {
                  return d.extend(
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
                  (i.update = function (s, m, o) {
                    var g = f.update,
                      y = f.create,
                      r = f.setActive,
                      p = s.table,
                      v = s.list,
                      E = v.length,
                      A = E,
                      O = s.collisionStart,
                      U = s.collisionEnd,
                      _ = s.collisionActive,
                      T = m.length,
                      M = 0,
                      z = 0,
                      D = 0,
                      w,
                      B,
                      j;
                    for (j = 0; j < T; j++)
                      ((w = m[j]),
                        (B = w.pair),
                        B
                          ? (B.isActive && (_[D++] = B), g(B, w, o))
                          : ((B = y(w, o)), (p[B.id] = B), (O[M++] = B), (v[A++] = B)));
                    for (A = 0, E = v.length, j = 0; j < E; j++)
                      ((B = v[j]),
                        B.timeUpdated >= o
                          ? (v[A++] = B)
                          : (r(B, !1, o),
                            B.collision.bodyA.sleepCounter > 0 && B.collision.bodyB.sleepCounter > 0
                              ? (v[A++] = B)
                              : ((U[z++] = B), delete p[B.id])));
                    (v.length !== A && (v.length = A),
                      O.length !== M && (O.length = M),
                      U.length !== z && (U.length = z),
                      _.length !== D && (_.length = D));
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
            function (b, x, h) {
              var i = (b.exports = h(21));
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
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(15),
                d = h(0);
              (function () {
                ((i.name = 'matter-js'),
                  (i.version = '0.20.0'),
                  (i.uses = []),
                  (i.used = []),
                  (i.use = function () {
                    f.use(i, Array.prototype.slice.call(arguments));
                  }),
                  (i.before = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), d.chainPathBefore(i, s, m));
                  }),
                  (i.after = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), d.chainPathAfter(i, s, m));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(6),
                d = h(10),
                s = h(0),
                m = h(4),
                o = h(12),
                g = s.deprecated;
              (function () {
                ((i.stack = function (y, r, p, v, E, A, O) {
                  for (
                    var U = f.create({ label: 'Stack' }), _ = y, T = r, M, z = 0, D = 0;
                    D < v;
                    D++
                  ) {
                    for (var w = 0, B = 0; B < p; B++) {
                      var j = O(_, T, B, D, M, z);
                      if (j) {
                        var L = j.bounds.max.y - j.bounds.min.y,
                          F = j.bounds.max.x - j.bounds.min.x;
                        (L > w && (w = L),
                          m.translate(j, { x: F * 0.5, y: L * 0.5 }),
                          (_ = j.bounds.max.x + E),
                          f.addBody(U, j),
                          (M = j),
                          (z += 1));
                      } else _ += E;
                    }
                    ((T += w + A), (_ = y));
                  }
                  return U;
                }),
                  (i.chain = function (y, r, p, v, E, A) {
                    for (var O = y.bodies, U = 1; U < O.length; U++) {
                      var _ = O[U - 1],
                        T = O[U],
                        M = _.bounds.max.y - _.bounds.min.y,
                        z = _.bounds.max.x - _.bounds.min.x,
                        D = T.bounds.max.y - T.bounds.min.y,
                        w = T.bounds.max.x - T.bounds.min.x,
                        B = {
                          bodyA: _,
                          pointA: { x: z * r, y: M * p },
                          bodyB: T,
                          pointB: { x: w * v, y: D * E },
                        },
                        j = s.extend(B, A);
                      f.addConstraint(y, d.create(j));
                    }
                    return ((y.label += ' Chain'), y);
                  }),
                  (i.mesh = function (y, r, p, v, E) {
                    var A = y.bodies,
                      O,
                      U,
                      _,
                      T,
                      M;
                    for (O = 0; O < p; O++) {
                      for (U = 1; U < r; U++)
                        ((_ = A[U - 1 + O * r]),
                          (T = A[U + O * r]),
                          f.addConstraint(y, d.create(s.extend({ bodyA: _, bodyB: T }, E))));
                      if (O > 0)
                        for (U = 0; U < r; U++)
                          ((_ = A[U + (O - 1) * r]),
                            (T = A[U + O * r]),
                            f.addConstraint(y, d.create(s.extend({ bodyA: _, bodyB: T }, E))),
                            v &&
                              U > 0 &&
                              ((M = A[U - 1 + (O - 1) * r]),
                              f.addConstraint(y, d.create(s.extend({ bodyA: M, bodyB: T }, E)))),
                            v &&
                              U < r - 1 &&
                              ((M = A[U + 1 + (O - 1) * r]),
                              f.addConstraint(y, d.create(s.extend({ bodyA: M, bodyB: T }, E)))));
                    }
                    return ((y.label += ' Mesh'), y);
                  }),
                  (i.pyramid = function (y, r, p, v, E, A, O) {
                    return i.stack(y, r, p, v, E, A, function (U, _, T, M, z, D) {
                      var w = Math.min(v, Math.ceil(p / 2)),
                        B = z ? z.bounds.max.x - z.bounds.min.x : 0;
                      if (!(M > w)) {
                        M = w - M;
                        var j = M,
                          L = p - 1 - M;
                        if (!(T < j || T > L)) {
                          D === 1 && m.translate(z, { x: (T + (p % 2 === 1 ? 1 : -1)) * B, y: 0 });
                          var F = z ? T * B : 0;
                          return O(y + F + T * E, _, T, M, z, D);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (y, r, p, v, E) {
                    for (var A = f.create({ label: 'Newtons Cradle' }), O = 0; O < p; O++) {
                      var U = 1.9,
                        _ = o.circle(y + O * (v * U), r + E, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = d.create({ pointA: { x: y + O * (v * U), y: r }, bodyB: _ });
                      (f.addBody(A, _), f.addConstraint(A, T));
                    }
                    return A;
                  }),
                  g(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (y, r, p, v, E) {
                    var A = m.nextGroup(!0),
                      O = 20,
                      U = -p * 0.5 + O,
                      _ = p * 0.5 - O,
                      T = 0,
                      M = f.create({ label: 'Car' }),
                      z = o.rectangle(y, r, p, v, {
                        collisionFilter: { group: A },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      D = o.circle(y + U, r + T, E, {
                        collisionFilter: { group: A },
                        friction: 0.8,
                      }),
                      w = o.circle(y + _, r + T, E, {
                        collisionFilter: { group: A },
                        friction: 0.8,
                      }),
                      B = d.create({
                        bodyB: z,
                        pointB: { x: U, y: T },
                        bodyA: D,
                        stiffness: 1,
                        length: 0,
                      }),
                      j = d.create({
                        bodyB: z,
                        pointB: { x: _, y: T },
                        bodyA: w,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      f.addBody(M, z),
                      f.addBody(M, D),
                      f.addBody(M, w),
                      f.addConstraint(M, B),
                      f.addConstraint(M, j),
                      M
                    );
                  }),
                  g(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (y, r, p, v, E, A, O, U, _, T) {
                    ((_ = s.extend({ inertia: 1 / 0 }, _)),
                      (T = s.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var M = i.stack(y, r, p, v, E, A, function (z, D) {
                      return o.circle(z, D, U, _);
                    });
                    return (i.mesh(M, p, v, O, T), (M.label = 'Soft Body'), M);
                  }),
                  g(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(9),
                d = h(0),
                s = d.deprecated;
              (function () {
                ((i.create = function (m) {
                  var o = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return d.extend(o, m);
                }),
                  (i.update = function (m, o, g, y) {
                    var r,
                      p,
                      v,
                      E = g.world,
                      A = m.buckets,
                      O,
                      U,
                      _ = !1;
                    for (r = 0; r < o.length; r++) {
                      var T = o[r];
                      if (
                        !(T.isSleeping && !y) &&
                        !(
                          E.bounds &&
                          (T.bounds.max.x < E.bounds.min.x ||
                            T.bounds.min.x > E.bounds.max.x ||
                            T.bounds.max.y < E.bounds.min.y ||
                            T.bounds.min.y > E.bounds.max.y)
                        )
                      ) {
                        var M = i._getRegion(m, T);
                        if (!T.region || M.id !== T.region.id || y) {
                          (!T.region || y) && (T.region = M);
                          var z = i._regionUnion(M, T.region);
                          for (p = z.startCol; p <= z.endCol; p++)
                            for (v = z.startRow; v <= z.endRow; v++) {
                              ((U = i._getBucketId(p, v)), (O = A[U]));
                              var D =
                                  p >= M.startCol &&
                                  p <= M.endCol &&
                                  v >= M.startRow &&
                                  v <= M.endRow,
                                w =
                                  p >= T.region.startCol &&
                                  p <= T.region.endCol &&
                                  v >= T.region.startRow &&
                                  v <= T.region.endRow;
                              (!D && w && w && O && i._bucketRemoveBody(m, O, T),
                                (T.region === M || (D && !w) || y) &&
                                  (O || (O = i._createBucket(A, U)), i._bucketAddBody(m, O, T)));
                            }
                          ((T.region = M), (_ = !0));
                        }
                      }
                    }
                    _ && (m.pairsList = i._createActivePairsList(m));
                  }),
                  s(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (m) {
                    ((m.buckets = {}), (m.pairs = {}), (m.pairsList = []));
                  }),
                  s(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (i._regionUnion = function (m, o) {
                    var g = Math.min(m.startCol, o.startCol),
                      y = Math.max(m.endCol, o.endCol),
                      r = Math.min(m.startRow, o.startRow),
                      p = Math.max(m.endRow, o.endRow);
                    return i._createRegion(g, y, r, p);
                  }),
                  (i._getRegion = function (m, o) {
                    var g = o.bounds,
                      y = Math.floor(g.min.x / m.bucketWidth),
                      r = Math.floor(g.max.x / m.bucketWidth),
                      p = Math.floor(g.min.y / m.bucketHeight),
                      v = Math.floor(g.max.y / m.bucketHeight);
                    return i._createRegion(y, r, p, v);
                  }),
                  (i._createRegion = function (m, o, g, y) {
                    return {
                      id: m + ',' + o + ',' + g + ',' + y,
                      startCol: m,
                      endCol: o,
                      startRow: g,
                      endRow: y,
                    };
                  }),
                  (i._getBucketId = function (m, o) {
                    return 'C' + m + 'R' + o;
                  }),
                  (i._createBucket = function (m, o) {
                    var g = (m[o] = []);
                    return g;
                  }),
                  (i._bucketAddBody = function (m, o, g) {
                    var y = m.pairs,
                      r = f.id,
                      p = o.length,
                      v;
                    for (v = 0; v < p; v++) {
                      var E = o[v];
                      if (!(g.id === E.id || (g.isStatic && E.isStatic))) {
                        var A = r(g, E),
                          O = y[A];
                        O ? (O[2] += 1) : (y[A] = [g, E, 1]);
                      }
                    }
                    o.push(g);
                  }),
                  (i._bucketRemoveBody = function (m, o, g) {
                    var y = m.pairs,
                      r = f.id,
                      p;
                    o.splice(d.indexOf(o, g), 1);
                    var v = o.length;
                    for (p = 0; p < v; p++) {
                      var E = y[r(g, o[p])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      g = m.pairs,
                      y = d.keys(g),
                      r = y.length,
                      p = [],
                      v;
                    for (v = 0; v < r; v++) ((o = g[y[v]]), o[2] > 0 ? p.push(o) : delete g[y[v]]);
                    return p;
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(3),
                d = h(7),
                s = h(14),
                m = h(5),
                o = h(13),
                g = h(10),
                y = h(6),
                r = h(0),
                p = h(1);
              (function () {
                ((i.create = function (v, E) {
                  var A = (v ? v.mouse : null) || (E ? E.mouse : null);
                  A ||
                    (v && v.render && v.render.canvas
                      ? (A = s.create(v.render.canvas))
                      : E && E.element
                        ? (A = s.create(E.element))
                        : ((A = s.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var O = g.create({
                      label: 'Mouse Constraint',
                      pointA: A.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    U = {
                      type: 'mouseConstraint',
                      mouse: A,
                      element: null,
                      body: null,
                      constraint: O,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    _ = r.extend(U, E);
                  return (
                    m.on(v, 'beforeUpdate', function () {
                      var T = y.allBodies(v.world);
                      (i.update(_, T), i._triggerEvents(_));
                    }),
                    _
                  );
                }),
                  (i.update = function (v, E) {
                    var A = v.mouse,
                      O = v.constraint,
                      U = v.body;
                    if (A.button === 0) {
                      if (O.bodyB) (d.set(O.bodyB, !1), (O.pointA = A.position));
                      else
                        for (var _ = 0; _ < E.length; _++)
                          if (
                            ((U = E[_]),
                            p.contains(U.bounds, A.position) &&
                              o.canCollide(U.collisionFilter, v.collisionFilter))
                          )
                            for (var T = U.parts.length > 1 ? 1 : 0; T < U.parts.length; T++) {
                              var M = U.parts[T];
                              if (f.contains(M.vertices, A.position)) {
                                ((O.pointA = A.position),
                                  (O.bodyB = v.body = U),
                                  (O.pointB = {
                                    x: A.position.x - U.position.x,
                                    y: A.position.y - U.position.y,
                                  }),
                                  (O.angleB = U.angle),
                                  d.set(U, !1),
                                  m.trigger(v, 'startdrag', { mouse: A, body: U }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = v.body = null),
                        (O.pointB = null),
                        U && m.trigger(v, 'enddrag', { mouse: A, body: U }));
                  }),
                  (i._triggerEvents = function (v) {
                    var E = v.mouse,
                      A = E.sourceEvents;
                    (A.mousemove && m.trigger(v, 'mousemove', { mouse: E }),
                      A.mousedown && m.trigger(v, 'mousedown', { mouse: E }),
                      A.mouseup && m.trigger(v, 'mouseup', { mouse: E }),
                      s.clearSourceEvents(E));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(2),
                d = h(8),
                s = h(1),
                m = h(12),
                o = h(3);
              (function () {
                ((i.collides = function (g, y) {
                  for (
                    var r = [], p = y.length, v = g.bounds, E = d.collides, A = s.overlaps, O = 0;
                    O < p;
                    O++
                  ) {
                    var U = y[O],
                      _ = U.parts.length,
                      T = _ === 1 ? 0 : 1;
                    if (A(U.bounds, v))
                      for (var M = T; M < _; M++) {
                        var z = U.parts[M];
                        if (A(z.bounds, v)) {
                          var D = E(z, g);
                          if (D) {
                            r.push(D);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (i.ray = function (g, y, r, p) {
                    p = p || 1e-100;
                    for (
                      var v = f.angle(y, r),
                        E = f.magnitude(f.sub(y, r)),
                        A = (r.x + y.x) * 0.5,
                        O = (r.y + y.y) * 0.5,
                        U = m.rectangle(A, O, E, p, { angle: v }),
                        _ = i.collides(U, g),
                        T = 0;
                      T < _.length;
                      T += 1
                    ) {
                      var M = _[T];
                      M.body = M.bodyB = M.bodyA;
                    }
                    return _;
                  }),
                  (i.region = function (g, y, r) {
                    for (var p = [], v = 0; v < g.length; v++) {
                      var E = g[v],
                        A = s.overlaps(E.bounds, y);
                      ((A && !r) || (!A && r)) && p.push(E);
                    }
                    return p;
                  }),
                  (i.point = function (g, y) {
                    for (var r = [], p = 0; p < g.length; p++) {
                      var v = g[p];
                      if (s.contains(v.bounds, y))
                        for (var E = v.parts.length === 1 ? 0 : 1; E < v.parts.length; E++) {
                          var A = v.parts[E];
                          if (s.contains(A.bounds, y) && o.contains(A.vertices, y)) {
                            r.push(v);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(4),
                d = h(0),
                s = h(6),
                m = h(1),
                o = h(5),
                g = h(2),
                y = h(14);
              (function () {
                var r, p;
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
                  (p =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (i._goodFps = 30),
                  (i._goodDelta = 1e3 / 60),
                  (i.create = function (T) {
                    var M = {
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
                      z = d.extend(M, T);
                    return (
                      z.canvas &&
                        ((z.canvas.width = z.options.width || z.canvas.width),
                        (z.canvas.height = z.options.height || z.canvas.height)),
                      (z.mouse = T.mouse),
                      (z.engine = T.engine),
                      (z.canvas = z.canvas || A(z.options.width, z.options.height)),
                      (z.context = z.canvas.getContext('2d')),
                      (z.textures = {}),
                      (z.bounds = z.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: z.canvas.width, y: z.canvas.height },
                      }),
                      (z.controller = i),
                      (z.options.showBroadphase = !1),
                      z.options.pixelRatio !== 1 && i.setPixelRatio(z, z.options.pixelRatio),
                      d.isElement(z.element) && z.element.appendChild(z.canvas),
                      z
                    );
                  }),
                  (i.run = function (T) {
                    (function M(z) {
                      ((T.frameRequestId = r(M)),
                        v(T, z),
                        i.world(T, z),
                        T.context.setTransform(
                          T.options.pixelRatio,
                          0,
                          0,
                          T.options.pixelRatio,
                          0,
                          0
                        ),
                        (T.options.showStats || T.options.showDebug) && i.stats(T, T.context, z),
                        (T.options.showPerformance || T.options.showDebug) &&
                          i.performance(T, T.context, z),
                        T.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (i.stop = function (T) {
                    p(T.frameRequestId);
                  }),
                  (i.setPixelRatio = function (T, M) {
                    var z = T.options,
                      D = T.canvas;
                    (M === 'auto' && (M = O(D)),
                      (z.pixelRatio = M),
                      D.setAttribute('data-pixel-ratio', M),
                      (D.width = z.width * M),
                      (D.height = z.height * M),
                      (D.style.width = z.width + 'px'),
                      (D.style.height = z.height + 'px'));
                  }),
                  (i.setSize = function (T, M, z) {
                    ((T.options.width = M),
                      (T.options.height = z),
                      (T.bounds.max.x = T.bounds.min.x + M),
                      (T.bounds.max.y = T.bounds.min.y + z),
                      T.options.pixelRatio !== 1
                        ? i.setPixelRatio(T, T.options.pixelRatio)
                        : ((T.canvas.width = M), (T.canvas.height = z)));
                  }),
                  (i.lookAt = function (T, M, z, D) {
                    ((D = typeof D < 'u' ? D : !0),
                      (M = d.isArray(M) ? M : [M]),
                      (z = z || { x: 0, y: 0 }));
                    for (
                      var w = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, B = 0;
                      B < M.length;
                      B += 1
                    ) {
                      var j = M[B],
                        L = j.bounds ? j.bounds.min : j.min || j.position || j,
                        F = j.bounds ? j.bounds.max : j.max || j.position || j;
                      L &&
                        F &&
                        (L.x < w.min.x && (w.min.x = L.x),
                        F.x > w.max.x && (w.max.x = F.x),
                        L.y < w.min.y && (w.min.y = L.y),
                        F.y > w.max.y && (w.max.y = F.y));
                    }
                    var te = w.max.x - w.min.x + 2 * z.x,
                      I = w.max.y - w.min.y + 2 * z.y,
                      V = T.canvas.height,
                      K = T.canvas.width,
                      ae = K / V,
                      oe = te / I,
                      de = 1,
                      H = 1;
                    (oe > ae ? (H = oe / ae) : (de = ae / oe),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = w.min.x),
                      (T.bounds.max.x = w.min.x + te * de),
                      (T.bounds.min.y = w.min.y),
                      (T.bounds.max.y = w.min.y + I * H),
                      D &&
                        ((T.bounds.min.x += te * 0.5 - te * de * 0.5),
                        (T.bounds.max.x += te * 0.5 - te * de * 0.5),
                        (T.bounds.min.y += I * 0.5 - I * H * 0.5),
                        (T.bounds.max.y += I * 0.5 - I * H * 0.5)),
                      (T.bounds.min.x -= z.x),
                      (T.bounds.max.x -= z.x),
                      (T.bounds.min.y -= z.y),
                      (T.bounds.max.y -= z.y),
                      T.mouse &&
                        (y.setScale(T.mouse, {
                          x: (T.bounds.max.x - T.bounds.min.x) / T.canvas.width,
                          y: (T.bounds.max.y - T.bounds.min.y) / T.canvas.height,
                        }),
                        y.setOffset(T.mouse, T.bounds.min)));
                  }),
                  (i.startViewTransform = function (T) {
                    var M = T.bounds.max.x - T.bounds.min.x,
                      z = T.bounds.max.y - T.bounds.min.y,
                      D = M / T.options.width,
                      w = z / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / D,
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
                  (i.world = function (T, M) {
                    var z = d.now(),
                      D = T.engine,
                      w = D.world,
                      B = T.canvas,
                      j = T.context,
                      L = T.options,
                      F = T.timing,
                      te = s.allBodies(w),
                      I = s.allConstraints(w),
                      V = L.wireframes ? L.wireframeBackground : L.background,
                      K = [],
                      ae = [],
                      oe,
                      de = { timestamp: D.timing.timestamp };
                    if (
                      (o.trigger(T, 'beforeRender', de),
                      T.currentBackground !== V && _(T, V),
                      (j.globalCompositeOperation = 'source-in'),
                      (j.fillStyle = 'transparent'),
                      j.fillRect(0, 0, B.width, B.height),
                      (j.globalCompositeOperation = 'source-over'),
                      L.hasBounds)
                    ) {
                      for (oe = 0; oe < te.length; oe++) {
                        var H = te[oe];
                        m.overlaps(H.bounds, T.bounds) && K.push(H);
                      }
                      for (oe = 0; oe < I.length; oe++) {
                        var $ = I[oe],
                          W = $.bodyA,
                          le = $.bodyB,
                          ue = $.pointA,
                          ne = $.pointB;
                        (W && (ue = g.add(W.position, $.pointA)),
                          le && (ne = g.add(le.position, $.pointB)),
                          !(!ue || !ne) &&
                            (m.contains(T.bounds, ue) || m.contains(T.bounds, ne)) &&
                            ae.push($));
                      }
                      (i.startViewTransform(T),
                        T.mouse &&
                          (y.setScale(T.mouse, {
                            x: (T.bounds.max.x - T.bounds.min.x) / T.options.width,
                            y: (T.bounds.max.y - T.bounds.min.y) / T.options.height,
                          }),
                          y.setOffset(T.mouse, T.bounds.min)));
                    } else
                      ((ae = I),
                        (K = te),
                        T.options.pixelRatio !== 1 &&
                          T.context.setTransform(
                            T.options.pixelRatio,
                            0,
                            0,
                            T.options.pixelRatio,
                            0,
                            0
                          ));
                    (!L.wireframes || (D.enableSleeping && L.showSleeping)
                      ? i.bodies(T, K, j)
                      : (L.showConvexHulls && i.bodyConvexHulls(T, K, j),
                        i.bodyWireframes(T, K, j)),
                      L.showBounds && i.bodyBounds(T, K, j),
                      (L.showAxes || L.showAngleIndicator) && i.bodyAxes(T, K, j),
                      L.showPositions && i.bodyPositions(T, K, j),
                      L.showVelocity && i.bodyVelocity(T, K, j),
                      L.showIds && i.bodyIds(T, K, j),
                      L.showSeparations && i.separations(T, D.pairs.list, j),
                      L.showCollisions && i.collisions(T, D.pairs.list, j),
                      L.showVertexNumbers && i.vertexNumbers(T, K, j),
                      L.showMousePosition && i.mousePosition(T, T.mouse, j),
                      i.constraints(ae, j),
                      L.hasBounds && i.endViewTransform(T),
                      o.trigger(T, 'afterRender', de),
                      (F.lastElapsed = d.now() - z));
                  }),
                  (i.stats = function (T, M, z) {
                    for (
                      var D = T.engine,
                        w = D.world,
                        B = s.allBodies(w),
                        j = 0,
                        L = 55,
                        F = 44,
                        te = 0,
                        I = 0,
                        V = 0;
                      V < B.length;
                      V += 1
                    )
                      j += B[V].parts.length;
                    var K = {
                      Part: j,
                      Body: B.length,
                      Cons: s.allConstraints(w).length,
                      Comp: s.allComposites(w).length,
                      Pair: D.pairs.list.length,
                    };
                    ((M.fillStyle = '#0e0f19'),
                      M.fillRect(te, I, L * 5.5, F),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'top'),
                      (M.textAlign = 'right'));
                    for (var ae in K) {
                      var oe = K[ae];
                      ((M.fillStyle = '#aaa'),
                        M.fillText(ae, te + L, I + 8),
                        (M.fillStyle = '#eee'),
                        M.fillText(oe, te + L, I + 26),
                        (te += L));
                    }
                  }),
                  (i.performance = function (T, M) {
                    var z = T.engine,
                      D = T.timing,
                      w = D.deltaHistory,
                      B = D.elapsedHistory,
                      j = D.timestampElapsedHistory,
                      L = D.engineDeltaHistory,
                      F = D.engineUpdatesHistory,
                      te = D.engineElapsedHistory,
                      I = z.timing.lastUpdatesPerFrame,
                      V = z.timing.lastDelta,
                      K = E(w),
                      ae = E(B),
                      oe = E(L),
                      de = E(F),
                      H = E(te),
                      $ = E(j),
                      W = $ / K || 0,
                      le = Math.round(K / V),
                      ue = 1e3 / K || 0,
                      ne = 4,
                      re = 12,
                      he = 60,
                      ge = 34,
                      De = 10,
                      Oe = 69;
                    ((M.fillStyle = '#0e0f19'),
                      M.fillRect(0, 50, re * 5 + he * 6 + 22, ge),
                      i.status(
                        M,
                        De,
                        Oe,
                        he,
                        ne,
                        w.length,
                        Math.round(ue) + ' fps',
                        ue / i._goodFps,
                        function (_e) {
                          return w[_e] / K - 1;
                        }
                      ),
                      i.status(
                        M,
                        De + re + he,
                        Oe,
                        he,
                        ne,
                        L.length,
                        V.toFixed(2) + ' dt',
                        i._goodDelta / V,
                        function (_e) {
                          return L[_e] / oe - 1;
                        }
                      ),
                      i.status(
                        M,
                        De + (re + he) * 2,
                        Oe,
                        he,
                        ne,
                        F.length,
                        I + ' upf',
                        Math.pow(d.clamp(de / le || 1, 0, 1), 4),
                        function (_e) {
                          return F[_e] / de - 1;
                        }
                      ),
                      i.status(
                        M,
                        De + (re + he) * 3,
                        Oe,
                        he,
                        ne,
                        te.length,
                        H.toFixed(2) + ' ut',
                        1 - (I * H) / i._goodFps,
                        function (_e) {
                          return te[_e] / H - 1;
                        }
                      ),
                      i.status(
                        M,
                        De + (re + he) * 4,
                        Oe,
                        he,
                        ne,
                        B.length,
                        ae.toFixed(2) + ' rt',
                        1 - ae / i._goodFps,
                        function (_e) {
                          return B[_e] / ae - 1;
                        }
                      ),
                      i.status(
                        M,
                        De + (re + he) * 5,
                        Oe,
                        he,
                        ne,
                        j.length,
                        W.toFixed(2) + ' x',
                        W * W * W,
                        function (_e) {
                          return (j[_e] / w[_e] / W || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (T, M, z, D, w, B, j, L, F) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(M, z + 7, D, 1),
                      T.beginPath(),
                      T.moveTo(M, z + 7 - w * d.clamp(0.4 * F(0), -2, 2)));
                    for (var te = 0; te < D; te += 1)
                      T.lineTo(M + te, z + 7 - (te < B ? w * d.clamp(0.4 * F(te), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + d.clamp(25 + 95 * L, 0, 120) + ',100%,60%)'),
                      T.fillRect(M, z - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(j, M + D, z - 5));
                  }),
                  (i.constraints = function (T, M) {
                    for (var z = M, D = 0; D < T.length; D++) {
                      var w = T[D];
                      if (!(!w.render.visible || !w.pointA || !w.pointB)) {
                        var B = w.bodyA,
                          j = w.bodyB,
                          L,
                          F;
                        if (
                          (B ? (L = g.add(B.position, w.pointA)) : (L = w.pointA),
                          w.render.type === 'pin')
                        )
                          (z.beginPath(), z.arc(L.x, L.y, 3, 0, 2 * Math.PI), z.closePath());
                        else {
                          if (
                            (j ? (F = g.add(j.position, w.pointB)) : (F = w.pointB),
                            z.beginPath(),
                            z.moveTo(L.x, L.y),
                            w.render.type === 'spring')
                          )
                            for (
                              var te = g.sub(F, L),
                                I = g.perp(g.normalise(te)),
                                V = Math.ceil(d.clamp(w.length / 5, 12, 20)),
                                K,
                                ae = 1;
                              ae < V;
                              ae += 1
                            )
                              ((K = ae % 2 === 0 ? 1 : -1),
                                z.lineTo(
                                  L.x + te.x * (ae / V) + I.x * K * 4,
                                  L.y + te.y * (ae / V) + I.y * K * 4
                                ));
                          z.lineTo(F.x, F.y);
                        }
                        (w.render.lineWidth &&
                          ((z.lineWidth = w.render.lineWidth),
                          (z.strokeStyle = w.render.strokeStyle),
                          z.stroke()),
                          w.render.anchors &&
                            ((z.fillStyle = w.render.strokeStyle),
                            z.beginPath(),
                            z.arc(L.x, L.y, 3, 0, 2 * Math.PI),
                            z.arc(F.x, F.y, 3, 0, 2 * Math.PI),
                            z.closePath(),
                            z.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (T, M, z) {
                    var D = z;
                    T.engine;
                    var w = T.options,
                      B = w.showInternalEdges || !w.wireframes,
                      j,
                      L,
                      F,
                      te;
                    for (F = 0; F < M.length; F++)
                      if (((j = M[F]), !!j.render.visible)) {
                        for (te = j.parts.length > 1 ? 1 : 0; te < j.parts.length; te++)
                          if (((L = j.parts[te]), !!L.render.visible)) {
                            if (
                              (w.showSleeping && j.isSleeping
                                ? (D.globalAlpha = 0.5 * L.render.opacity)
                                : L.render.opacity !== 1 && (D.globalAlpha = L.render.opacity),
                              L.render.sprite && L.render.sprite.texture && !w.wireframes)
                            ) {
                              var I = L.render.sprite,
                                V = U(T, I.texture);
                              (D.translate(L.position.x, L.position.y),
                                D.rotate(L.angle),
                                D.drawImage(
                                  V,
                                  V.width * -I.xOffset * I.xScale,
                                  V.height * -I.yOffset * I.yScale,
                                  V.width * I.xScale,
                                  V.height * I.yScale
                                ),
                                D.rotate(-L.angle),
                                D.translate(-L.position.x, -L.position.y));
                            } else {
                              if (L.circleRadius)
                                (D.beginPath(),
                                  D.arc(
                                    L.position.x,
                                    L.position.y,
                                    L.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (D.beginPath(), D.moveTo(L.vertices[0].x, L.vertices[0].y));
                                for (var K = 1; K < L.vertices.length; K++)
                                  (!L.vertices[K - 1].isInternal || B
                                    ? D.lineTo(L.vertices[K].x, L.vertices[K].y)
                                    : D.moveTo(L.vertices[K].x, L.vertices[K].y),
                                    L.vertices[K].isInternal &&
                                      !B &&
                                      D.moveTo(
                                        L.vertices[(K + 1) % L.vertices.length].x,
                                        L.vertices[(K + 1) % L.vertices.length].y
                                      ));
                                (D.lineTo(L.vertices[0].x, L.vertices[0].y), D.closePath());
                              }
                              w.wireframes
                                ? ((D.lineWidth = 1),
                                  (D.strokeStyle = T.options.wireframeStrokeStyle),
                                  D.stroke())
                                : ((D.fillStyle = L.render.fillStyle),
                                  L.render.lineWidth &&
                                    ((D.lineWidth = L.render.lineWidth),
                                    (D.strokeStyle = L.render.strokeStyle),
                                    D.stroke()),
                                  D.fill());
                            }
                            D.globalAlpha = 1;
                          }
                      }
                  }),
                  (i.bodyWireframes = function (T, M, z) {
                    var D = z,
                      w = T.options.showInternalEdges,
                      B,
                      j,
                      L,
                      F,
                      te;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((B = M[L]), !!B.render.visible))
                        for (te = B.parts.length > 1 ? 1 : 0; te < B.parts.length; te++) {
                          for (
                            j = B.parts[te], D.moveTo(j.vertices[0].x, j.vertices[0].y), F = 1;
                            F < j.vertices.length;
                            F++
                          )
                            (!j.vertices[F - 1].isInternal || w
                              ? D.lineTo(j.vertices[F].x, j.vertices[F].y)
                              : D.moveTo(j.vertices[F].x, j.vertices[F].y),
                              j.vertices[F].isInternal &&
                                !w &&
                                D.moveTo(
                                  j.vertices[(F + 1) % j.vertices.length].x,
                                  j.vertices[(F + 1) % j.vertices.length].y
                                ));
                          D.lineTo(j.vertices[0].x, j.vertices[0].y);
                        }
                    ((D.lineWidth = 1),
                      (D.strokeStyle = T.options.wireframeStrokeStyle),
                      D.stroke());
                  }),
                  (i.bodyConvexHulls = function (T, M, z) {
                    var D = z,
                      w,
                      B,
                      j;
                    for (D.beginPath(), B = 0; B < M.length; B++)
                      if (((w = M[B]), !(!w.render.visible || w.parts.length === 1))) {
                        for (
                          D.moveTo(w.vertices[0].x, w.vertices[0].y), j = 1;
                          j < w.vertices.length;
                          j++
                        )
                          D.lineTo(w.vertices[j].x, w.vertices[j].y);
                        D.lineTo(w.vertices[0].x, w.vertices[0].y);
                      }
                    ((D.lineWidth = 1), (D.strokeStyle = 'rgba(255,255,255,0.2)'), D.stroke());
                  }),
                  (i.vertexNumbers = function (T, M, z) {
                    var D = z,
                      w,
                      B,
                      j;
                    for (w = 0; w < M.length; w++) {
                      var L = M[w].parts;
                      for (j = L.length > 1 ? 1 : 0; j < L.length; j++) {
                        var F = L[j];
                        for (B = 0; B < F.vertices.length; B++)
                          ((D.fillStyle = 'rgba(255,255,255,0.2)'),
                            D.fillText(
                              w + '_' + B,
                              F.position.x + (F.vertices[B].x - F.position.x) * 0.8,
                              F.position.y + (F.vertices[B].y - F.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (T, M, z) {
                    var D = z;
                    ((D.fillStyle = 'rgba(255,255,255,0.8)'),
                      D.fillText(
                        M.position.x + '  ' + M.position.y,
                        M.position.x + 5,
                        M.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (T, M, z) {
                    var D = z;
                    T.engine;
                    var w = T.options;
                    D.beginPath();
                    for (var B = 0; B < M.length; B++) {
                      var j = M[B];
                      if (j.render.visible)
                        for (var L = M[B].parts, F = L.length > 1 ? 1 : 0; F < L.length; F++) {
                          var te = L[F];
                          D.rect(
                            te.bounds.min.x,
                            te.bounds.min.y,
                            te.bounds.max.x - te.bounds.min.x,
                            te.bounds.max.y - te.bounds.min.y
                          );
                        }
                    }
                    (w.wireframes
                      ? (D.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (D.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (D.lineWidth = 1),
                      D.stroke());
                  }),
                  (i.bodyAxes = function (T, M, z) {
                    var D = z;
                    T.engine;
                    var w = T.options,
                      B,
                      j,
                      L,
                      F;
                    for (D.beginPath(), j = 0; j < M.length; j++) {
                      var te = M[j],
                        I = te.parts;
                      if (te.render.visible)
                        if (w.showAxes)
                          for (L = I.length > 1 ? 1 : 0; L < I.length; L++)
                            for (B = I[L], F = 0; F < B.axes.length; F++) {
                              var V = B.axes[F];
                              (D.moveTo(B.position.x, B.position.y),
                                D.lineTo(B.position.x + V.x * 20, B.position.y + V.y * 20));
                            }
                        else
                          for (L = I.length > 1 ? 1 : 0; L < I.length; L++)
                            for (B = I[L], F = 0; F < B.axes.length; F++)
                              (D.moveTo(B.position.x, B.position.y),
                                D.lineTo(
                                  (B.vertices[0].x + B.vertices[B.vertices.length - 1].x) / 2,
                                  (B.vertices[0].y + B.vertices[B.vertices.length - 1].y) / 2
                                ));
                    }
                    (w.wireframes
                      ? ((D.strokeStyle = 'indianred'), (D.lineWidth = 1))
                      : ((D.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (D.globalCompositeOperation = 'overlay'),
                        (D.lineWidth = 2)),
                      D.stroke(),
                      (D.globalCompositeOperation = 'source-over'));
                  }),
                  (i.bodyPositions = function (T, M, z) {
                    var D = z;
                    T.engine;
                    var w = T.options,
                      B,
                      j,
                      L,
                      F;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((B = M[L]), !!B.render.visible))
                        for (F = 0; F < B.parts.length; F++)
                          ((j = B.parts[F]),
                            D.arc(j.position.x, j.position.y, 3, 0, 2 * Math.PI, !1),
                            D.closePath());
                    for (
                      w.wireframes
                        ? (D.fillStyle = 'indianred')
                        : (D.fillStyle = 'rgba(0,0,0,0.5)'),
                        D.fill(),
                        D.beginPath(),
                        L = 0;
                      L < M.length;
                      L++
                    )
                      ((B = M[L]),
                        B.render.visible &&
                          (D.arc(B.positionPrev.x, B.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          D.closePath()));
                    ((D.fillStyle = 'rgba(255,165,0,0.8)'), D.fill());
                  }),
                  (i.bodyVelocity = function (T, M, z) {
                    var D = z;
                    D.beginPath();
                    for (var w = 0; w < M.length; w++) {
                      var B = M[w];
                      if (B.render.visible) {
                        var j = f.getVelocity(B);
                        (D.moveTo(B.position.x, B.position.y),
                          D.lineTo(B.position.x + j.x, B.position.y + j.y));
                      }
                    }
                    ((D.lineWidth = 3), (D.strokeStyle = 'cornflowerblue'), D.stroke());
                  }),
                  (i.bodyIds = function (T, M, z) {
                    var D = z,
                      w,
                      B;
                    for (w = 0; w < M.length; w++)
                      if (M[w].render.visible) {
                        var j = M[w].parts;
                        for (B = j.length > 1 ? 1 : 0; B < j.length; B++) {
                          var L = j[B];
                          ((D.font = '12px Arial'),
                            (D.fillStyle = 'rgba(255,255,255,0.5)'),
                            D.fillText(L.id, L.position.x + 10, L.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (T, M, z) {
                    var D = z,
                      w = T.options,
                      B,
                      j,
                      L,
                      F;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((B = M[L]), !!B.isActive))
                        for (j = B.collision, F = 0; F < B.contactCount; F++) {
                          var te = B.contacts[F],
                            I = te.vertex;
                          D.rect(I.x - 1.5, I.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      w.wireframes
                        ? (D.fillStyle = 'rgba(255,255,255,0.7)')
                        : (D.fillStyle = 'orange'),
                        D.fill(),
                        D.beginPath(),
                        L = 0;
                      L < M.length;
                      L++
                    )
                      if (((B = M[L]), !!B.isActive && ((j = B.collision), B.contactCount > 0))) {
                        var V = B.contacts[0].vertex.x,
                          K = B.contacts[0].vertex.y;
                        (B.contactCount === 2 &&
                          ((V = (B.contacts[0].vertex.x + B.contacts[1].vertex.x) / 2),
                          (K = (B.contacts[0].vertex.y + B.contacts[1].vertex.y) / 2)),
                          j.bodyB === j.supports[0].body || j.bodyA.isStatic === !0
                            ? D.moveTo(V - j.normal.x * 8, K - j.normal.y * 8)
                            : D.moveTo(V + j.normal.x * 8, K + j.normal.y * 8),
                          D.lineTo(V, K));
                      }
                    (w.wireframes
                      ? (D.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (D.strokeStyle = 'orange'),
                      (D.lineWidth = 1),
                      D.stroke());
                  }),
                  (i.separations = function (T, M, z) {
                    var D = z,
                      w = T.options,
                      B,
                      j,
                      L,
                      F,
                      te;
                    for (D.beginPath(), te = 0; te < M.length; te++)
                      if (((B = M[te]), !!B.isActive)) {
                        ((j = B.collision), (L = j.bodyA), (F = j.bodyB));
                        var I = 1;
                        (!F.isStatic && !L.isStatic && (I = 0.5),
                          F.isStatic && (I = 0),
                          D.moveTo(F.position.x, F.position.y),
                          D.lineTo(
                            F.position.x - j.penetration.x * I,
                            F.position.y - j.penetration.y * I
                          ),
                          (I = 1),
                          !F.isStatic && !L.isStatic && (I = 0.5),
                          L.isStatic && (I = 0),
                          D.moveTo(L.position.x, L.position.y),
                          D.lineTo(
                            L.position.x + j.penetration.x * I,
                            L.position.y + j.penetration.y * I
                          ));
                      }
                    (w.wireframes
                      ? (D.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (D.strokeStyle = 'orange'),
                      D.stroke());
                  }),
                  (i.inspector = function (T, M) {
                    T.engine;
                    var z = T.selected,
                      D = T.render,
                      w = D.options,
                      B;
                    if (w.hasBounds) {
                      var j = D.bounds.max.x - D.bounds.min.x,
                        L = D.bounds.max.y - D.bounds.min.y,
                        F = j / D.options.width,
                        te = L / D.options.height;
                      (M.scale(1 / F, 1 / te), M.translate(-D.bounds.min.x, -D.bounds.min.y));
                    }
                    for (var I = 0; I < z.length; I++) {
                      var V = z[I].data;
                      switch (
                        (M.translate(0.5, 0.5),
                        (M.lineWidth = 1),
                        (M.strokeStyle = 'rgba(255,165,0,0.9)'),
                        M.setLineDash([1, 2]),
                        V.type)
                      ) {
                        case 'body':
                          ((B = V.bounds),
                            M.beginPath(),
                            M.rect(
                              Math.floor(B.min.x - 3),
                              Math.floor(B.min.y - 3),
                              Math.floor(B.max.x - B.min.x + 6),
                              Math.floor(B.max.y - B.min.y + 6)
                            ),
                            M.closePath(),
                            M.stroke());
                          break;
                        case 'constraint':
                          var K = V.pointA;
                          (V.bodyA && (K = V.pointB),
                            M.beginPath(),
                            M.arc(K.x, K.y, 10, 0, 2 * Math.PI),
                            M.closePath(),
                            M.stroke());
                          break;
                      }
                      (M.setLineDash([]), M.translate(-0.5, -0.5));
                    }
                    (T.selectStart !== null &&
                      (M.translate(0.5, 0.5),
                      (M.lineWidth = 1),
                      (M.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (M.fillStyle = 'rgba(255,165,0,0.1)'),
                      (B = T.selectBounds),
                      M.beginPath(),
                      M.rect(
                        Math.floor(B.min.x),
                        Math.floor(B.min.y),
                        Math.floor(B.max.x - B.min.x),
                        Math.floor(B.max.y - B.min.y)
                      ),
                      M.closePath(),
                      M.stroke(),
                      M.fill(),
                      M.translate(-0.5, -0.5)),
                      w.hasBounds && M.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (T, M) {
                    var z = T.engine,
                      D = T.timing,
                      w = D.historySize,
                      B = z.timing.timestamp;
                    ((D.delta = M - D.lastTime || i._goodDelta),
                      (D.lastTime = M),
                      (D.timestampElapsed = B - D.lastTimestamp || 0),
                      (D.lastTimestamp = B),
                      D.deltaHistory.unshift(D.delta),
                      (D.deltaHistory.length = Math.min(D.deltaHistory.length, w)),
                      D.engineDeltaHistory.unshift(z.timing.lastDelta),
                      (D.engineDeltaHistory.length = Math.min(D.engineDeltaHistory.length, w)),
                      D.timestampElapsedHistory.unshift(D.timestampElapsed),
                      (D.timestampElapsedHistory.length = Math.min(
                        D.timestampElapsedHistory.length,
                        w
                      )),
                      D.engineUpdatesHistory.unshift(z.timing.lastUpdatesPerFrame),
                      (D.engineUpdatesHistory.length = Math.min(D.engineUpdatesHistory.length, w)),
                      D.engineElapsedHistory.unshift(z.timing.lastElapsed),
                      (D.engineElapsedHistory.length = Math.min(D.engineElapsedHistory.length, w)),
                      D.elapsedHistory.unshift(D.lastElapsed),
                      (D.elapsedHistory.length = Math.min(D.elapsedHistory.length, w)));
                  },
                  E = function (T) {
                    for (var M = 0, z = 0; z < T.length; z += 1) M += T[z];
                    return M / T.length || 0;
                  },
                  A = function (T, M) {
                    var z = document.createElement('canvas');
                    return (
                      (z.width = T),
                      (z.height = M),
                      (z.oncontextmenu = function () {
                        return !1;
                      }),
                      (z.onselectstart = function () {
                        return !1;
                      }),
                      z
                    );
                  },
                  O = function (T) {
                    var M = T.getContext('2d'),
                      z = window.devicePixelRatio || 1,
                      D =
                        M.webkitBackingStorePixelRatio ||
                        M.mozBackingStorePixelRatio ||
                        M.msBackingStorePixelRatio ||
                        M.oBackingStorePixelRatio ||
                        M.backingStorePixelRatio ||
                        1;
                    return z / D;
                  },
                  U = function (T, M) {
                    var z = T.textures[M];
                    return z || ((z = T.textures[M] = new Image()), (z.src = M), z);
                  },
                  _ = function (T, M) {
                    var z = M;
                    (/(jpg|gif|png)$/.test(M) && (z = 'url(' + M + ')'),
                      (T.canvas.style.background = z),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = M));
                  };
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(5),
                d = h(17),
                s = h(0);
              (function () {
                ((i._maxFrameDelta = 1e3 / 15),
                  (i._frameDeltaFallback = 1e3 / 60),
                  (i._timeBufferMargin = 1.5),
                  (i._elapsedNextEstimate = 1),
                  (i._smoothingLowerBound = 0.1),
                  (i._smoothingUpperBound = 0.9),
                  (i.create = function (o) {
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
                      y = s.extend(g, o);
                    return ((y.fps = 0), y);
                  }),
                  (i.run = function (o, g) {
                    return (
                      (o.timeBuffer = i._frameDeltaFallback),
                      (function y(r) {
                        ((o.frameRequestId = i._onNextFrame(o, y)),
                          r && o.enabled && i.tick(o, g, r));
                      })(),
                      o
                    );
                  }),
                  (i.tick = function (o, g, y) {
                    var r = s.now(),
                      p = o.delta,
                      v = 0,
                      E = y - o.timeLastTick;
                    if (
                      ((!E || !o.timeLastTick || E > Math.max(i._maxFrameDelta, o.maxFrameTime)) &&
                        (E = o.frameDelta || i._frameDeltaFallback),
                      o.frameDeltaSmoothing)
                    ) {
                      (o.frameDeltaHistory.push(E),
                        (o.frameDeltaHistory = o.frameDeltaHistory.slice(
                          -o.frameDeltaHistorySize
                        )));
                      var A = o.frameDeltaHistory.slice(0).sort(),
                        O = o.frameDeltaHistory.slice(
                          A.length * i._smoothingLowerBound,
                          A.length * i._smoothingUpperBound
                        ),
                        U = m(O);
                      E = U || E;
                    }
                    (o.frameDeltaSnapping && (E = 1e3 / Math.round(1e3 / E)),
                      (o.frameDelta = E),
                      (o.timeLastTick = y),
                      (o.timeBuffer += o.frameDelta),
                      (o.timeBuffer = s.clamp(
                        o.timeBuffer,
                        0,
                        o.frameDelta + p * i._timeBufferMargin
                      )),
                      (o.lastUpdatesDeferred = 0));
                    var _ = o.maxUpdates || Math.ceil(o.maxFrameTime / p),
                      T = { timestamp: g.timing.timestamp };
                    (f.trigger(o, 'beforeTick', T), f.trigger(o, 'tick', T));
                    for (var M = s.now(); p > 0 && o.timeBuffer >= p * i._timeBufferMargin; ) {
                      (f.trigger(o, 'beforeUpdate', T),
                        d.update(g, p),
                        f.trigger(o, 'afterUpdate', T),
                        (o.timeBuffer -= p),
                        (v += 1));
                      var z = s.now() - r,
                        D = s.now() - M,
                        w = z + (i._elapsedNextEstimate * D) / v;
                      if (v >= _ || w > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / p - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((g.timing.lastUpdatesPerFrame = v),
                      f.trigger(o, 'afterTick', T),
                      o.frameDeltaHistory.length >= 100 &&
                        (o.lastUpdatesDeferred && Math.round(o.frameDelta / p) > _
                          ? s.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : o.lastUpdatesDeferred &&
                            s.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof o.isFixed < 'u' &&
                          s.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (o.deltaMin || o.deltaMax) &&
                          s.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        o.fps !== 0 &&
                          s.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (i.stop = function (o) {
                    i._cancelNextFrame(o);
                  }),
                  (i._onNextFrame = function (o, g) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      o.frameRequestId = window.requestAnimationFrame(g);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.requestAnimationFrame.'
                      );
                    return o.frameRequestId;
                  }),
                  (i._cancelNextFrame = function (o) {
                    if (typeof window < 'u' && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(o.frameRequestId);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.cancelAnimationFrame.'
                      );
                  }));
                var m = function (o) {
                  for (var g = 0, y = o.length, r = 0; r < y; r += 1) g += o[r];
                  return g / y || 0;
                };
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(8),
                d = h(0),
                s = d.deprecated;
              (function () {
                ((i.collides = function (m, o) {
                  return f.collides(m, o);
                }),
                  s(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, x, h) {
              var i = {};
              ((b.exports = i), h(1));
              var f = h(0);
              (function () {
                ((i.pathToVertices = function (d, s) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    f.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var m,
                    o,
                    g,
                    y,
                    r,
                    p,
                    v,
                    E,
                    A,
                    O,
                    U = [],
                    _,
                    T,
                    M = 0,
                    z = 0,
                    D = 0;
                  s = s || 15;
                  var w = function (j, L, F) {
                      var te = F % 2 === 1 && F > 1;
                      if (!A || j != A.x || L != A.y) {
                        A && te ? ((_ = A.x), (T = A.y)) : ((_ = 0), (T = 0));
                        var I = { x: _ + j, y: T + L };
                        ((te || !A) && (A = I), U.push(I), (z = _ + j), (D = T + L));
                      }
                    },
                    B = function (j) {
                      var L = j.pathSegTypeAsLetter.toUpperCase();
                      if (L !== 'Z') {
                        switch (L) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((z = j.x), (D = j.y));
                            break;
                          case 'H':
                            z = j.x;
                            break;
                          case 'V':
                            D = j.y;
                            break;
                        }
                        w(z, D, j.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(d), g = d.getTotalLength(), p = [], m = 0;
                    m < d.pathSegList.numberOfItems;
                    m += 1
                  )
                    p.push(d.pathSegList.getItem(m));
                  for (v = p.concat(); M < g; ) {
                    if (((O = d.getPathSegAtLength(M)), (r = p[O]), r != E)) {
                      for (; v.length && v[0] != r; ) B(v.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((y = d.getPointAtLength(M)), w(y.x, y.y, 0));
                        break;
                    }
                    M += s;
                  }
                  for (m = 0, o = v.length; m < o; ++m) B(v[m]);
                  return U;
                }),
                  (i._svgPathToAbsolute = function (d) {
                    for (
                      var s,
                        m,
                        o,
                        g,
                        y,
                        r,
                        p = d.pathSegList,
                        v = 0,
                        E = 0,
                        A = p.numberOfItems,
                        O = 0;
                      O < A;
                      ++O
                    ) {
                      var U = p.getItem(O),
                        _ = U.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(_)) ('x' in U && (v = U.x), 'y' in U && (E = U.y));
                      else
                        switch (
                          ('x1' in U && (o = v + U.x1),
                          'x2' in U && (y = v + U.x2),
                          'y1' in U && (g = E + U.y1),
                          'y2' in U && (r = E + U.y2),
                          'x' in U && (v += U.x),
                          'y' in U && (E += U.y),
                          _)
                        ) {
                          case 'm':
                            p.replaceItem(d.createSVGPathSegMovetoAbs(v, E), O);
                            break;
                          case 'l':
                            p.replaceItem(d.createSVGPathSegLinetoAbs(v, E), O);
                            break;
                          case 'h':
                            p.replaceItem(d.createSVGPathSegLinetoHorizontalAbs(v), O);
                            break;
                          case 'v':
                            p.replaceItem(d.createSVGPathSegLinetoVerticalAbs(E), O);
                            break;
                          case 'c':
                            p.replaceItem(d.createSVGPathSegCurvetoCubicAbs(v, E, o, g, y, r), O);
                            break;
                          case 's':
                            p.replaceItem(d.createSVGPathSegCurvetoCubicSmoothAbs(v, E, y, r), O);
                            break;
                          case 'q':
                            p.replaceItem(d.createSVGPathSegCurvetoQuadraticAbs(v, E, o, g), O);
                            break;
                          case 't':
                            p.replaceItem(d.createSVGPathSegCurvetoQuadraticSmoothAbs(v, E), O);
                            break;
                          case 'a':
                            p.replaceItem(
                              d.createSVGPathSegArcAbs(
                                v,
                                E,
                                U.r1,
                                U.r2,
                                U.angle,
                                U.largeArcFlag,
                                U.sweepFlag
                              ),
                              O
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((v = s), (E = m));
                            break;
                        }
                      (_ == 'M' || _ == 'm') && ((s = v), (m = E));
                    }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var f = h(6);
              (h(0),
                (function () {
                  ((i.create = f.create),
                    (i.add = f.add),
                    (i.remove = f.remove),
                    (i.clear = f.clear),
                    (i.addComposite = f.addComposite),
                    (i.addBody = f.addBody),
                    (i.addConstraint = f.addConstraint));
                })());
            },
          ]);
        });
      })(Uu)),
    Uu.exports
  );
}
var Xp = qp();
const He = Q0(Xp),
  Gt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  Qp = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  Zp = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Kp = {
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
  Jp = {
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
  Th = (c, R) => {
    const b = String(R).padStart(2, '0');
    return `images/${c}/level${b}.png`;
  },
  Fp = 256,
  Xm = {
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
  $p = (c) => (c * (c + 1)) / 2,
  kp = (c) => ({
    id: c,
    level: c,
    name: Kp[c],
    theme: Jp[c],
    radius: Qp[c],
    restitution: Zp[c],
    friction: 0.3,
    density: 0.001,
    score: $p(c),
    svgPath: Th(Co, c),
    color: Xm[c].color,
    glowColor: Xm[c].glow,
  }),
  ol = 10,
  Hu = Object.fromEntries(Array.from({ length: ol }, (c, R) => R + 1).map((c) => [c, kp(c)]));
Array.from({ length: ol }, (c, R) => Hu[R + 1]);
const Wp = 3,
  Pp = 360,
  Ip = (c) => Math.min(1, c / Pp),
  Qm = new Map(),
  Il = (c, R, b = Co) => {
    const x = `${c}|${R}|${b}`,
      h = Qm.get(x);
    if (h) return h;
    const i = Hu[c],
      f = { ...i, radius: i.radius * Ip(R), svgPath: Th(b, c) };
    return (Qm.set(x, f), f);
  },
  sl = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
  },
  bh = typeof window < 'u' && typeof window.localStorage < 'u',
  Lu = (c) => {
    if (!bh) return null;
    try {
      return window.localStorage.getItem(c);
    } catch {
      return null;
    }
  },
  ju = (c, R) => {
    if (bh)
      try {
        window.localStorage.setItem(c, R);
      } catch {}
  },
  e1 = () => {
    const c = Lu(Gt.storageKeys.bestScore);
    if (c === null) return 0;
    const R = Number(c);
    return Number.isFinite(R) ? R : 0;
  },
  t1 = (c) => {
    ju(Gt.storageKeys.bestScore, String(c));
  },
  n1 = () => {
    const c = Lu(Gt.storageKeys.scoreHistory);
    if (c === null) return [];
    try {
      const R = JSON.parse(c);
      return Array.isArray(R) ? R.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  l1 = (c) => {
    const R = [c, ...n1()].slice(0, Gt.maxScoreHistory);
    return (ju(Gt.storageKeys.scoreHistory, JSON.stringify(R)), R);
  },
  a1 = () => {
    const c = Lu(Gt.storageKeys.isSoundOn);
    return c === null ? !0 : c === 'true';
  },
  i1 = (c) => {
    ju(Gt.storageKeys.isSoundOn, String(c));
  },
  u1 = () => {
    const c = Lu(Gt.storageKeys.themeId);
    return xh(c) ? c : Co;
  },
  r1 = (c) => {
    ju(Gt.storageKeys.themeId, c);
  },
  s1 = () => {
    const [c, R] = Y.useState(0),
      [b, x] = Y.useState(0),
      [h, i] = Y.useState(!1),
      f = Y.useRef(0),
      d = Y.useRef(0);
    Y.useEffect(() => {
      const g = e1();
      ((d.current = g), x(g));
    }, []);
    const s = Y.useCallback((g) => {
        ((f.current += g), R(f.current));
      }, []),
      m = Y.useCallback(() => {
        ((f.current = 0), R(0), i(!1));
      }, []),
      o = Y.useCallback(() => {
        const g = f.current,
          y = g > d.current;
        return (
          y && ((d.current = g), t1(g), x(g)),
          l1(g),
          i(y),
          { isNewRecord: y, finalScore: g }
        );
      }, []);
    return { score: c, bestScore: b, isNewRecord: h, add: s, reset: m, finalize: o };
  },
  o1 = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  c1 = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  f1 = () => {
    const [c, R] = Y.useState(!0),
      b = Y.useRef({});
    (Y.useEffect(() => {
      R(a1());
    }, []),
      Y.useEffect(() => {
        const i = {};
        for (const [f, d] of Object.entries(c1)) {
          const s = new Audio(o1(d));
          ((s.preload = 'auto'), (s.volume = 0.7), (i[f] = s));
        }
        return (
          (b.current = i),
          () => {
            for (const f of Object.values(i)) f == null || f.pause();
            b.current = {};
          }
        );
      }, []));
    const x = Y.useCallback(() => {
        R((i) => {
          const f = !i;
          return (i1(f), f);
        });
      }, []),
      h = Y.useCallback(
        (i) => {
          if (!c) return;
          const f = b.current[i];
          f && (f.pause(), (f.currentTime = 0), f.play().catch(() => {}));
        },
        [c]
      );
    return { isSoundOn: c, toggle: x, play: h };
  },
  Zm = (c, R, b, x) => {
    const h = He.Bodies.circle(R, b, c.radius, {
      restitution: c.restitution,
      friction: c.friction,
      density: c.density,
      label: `item-${c.level}`,
    });
    return ((h.plugin.itemData = { level: c.level, consumed: !1, droppedAt: x }), h);
  },
  zu = (c) => c.plugin.itemData,
  d1 = (c, R) => {
    const b = sl.wallThickness,
      x = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = He.Bodies.rectangle(c / 2, R + b / 2, c + b * 2, b, x),
      i = He.Bodies.rectangle(-b / 2, R / 2, b, R * 2, x),
      f = He.Bodies.rectangle(c + b / 2, R / 2, b, R * 2, x);
    return { ground: h, leftWall: i, rightWall: f };
  },
  m1 = (c, R) => ({ x: (c.position.x + R.position.x) / 2, y: (c.position.y + R.position.y) / 2 }),
  h1 = (c) => (c < 2 || c > ol ? 0 : Hu[c].score),
  v1 = () => Hu[ol].score,
  Km = new Map(),
  Rh = (c) => {
    const R = Km.get(c);
    if (R) return R;
    const b = `/ochimono-game/${c}`.replace(/\/{2,}/g, '/');
    return (Km.set(c, b), b);
  },
  co = (c, R) => {
    const b = (R.radius * 2) / Fp;
    c.render.sprite = { texture: Rh(R.svgPath), xScale: b, yScale: b, xOffset: 0.5, yOffset: 0.5 };
  },
  Jm = new Set(),
  Fm = (c) => {
    for (let R = 1; R <= ol; R += 1) {
      const b = Il(R, 1, c),
        x = Rh(b.svgPath);
      if (Jm.has(x)) continue;
      Jm.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  g1 = ({ fieldWidth: c, fieldHeight: R }) => {
    const b = Y.useRef(null),
      x = Y.useRef(null),
      h = Y.useRef(null),
      i = Y.useRef(null),
      f = Y.useRef(null),
      [d, s] = Y.useState('idle'),
      [m, o] = Y.useState(null),
      [g, y] = Y.useState(null),
      r = Y.useRef(null),
      p = Y.useRef(null),
      v = Y.useCallback((W) => {
        ((r.current = W), o(W));
      }, []),
      E = Y.useCallback((W) => {
        ((p.current = W), y(W));
      }, []),
      A = Y.useRef(!0),
      O = Y.useRef(0),
      U = Y.useRef('idle'),
      _ = Y.useRef(null),
      T = Y.useRef(c),
      M = Y.useRef(R),
      [z, D] = Y.useState(() => u1()),
      w = Y.useRef(z);
    w.current = z;
    const B = s1(),
      j = f1(),
      L = Y.useRef(B.add);
    L.current = B.add;
    const F = Y.useRef(j.play);
    F.current = j.play;
    const te = Y.useRef(B.finalize);
    te.current = B.finalize;
    const I = Y.useRef(new Set()),
      V = Y.useCallback(() => {
        const W = Math.floor(Math.random() * Wp) + 1;
        return Il(W, T.current, w.current);
      }, []);
    Y.useEffect(() => {
      const W = b.current;
      if (!W) return;
      const le = T.current,
        ue = M.current,
        ne = He.Engine.create({ gravity: { x: 0, y: sl.gravityY } }),
        re = He.Render.create({
          element: W,
          engine: ne,
          options: {
            width: le,
            height: ue,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: he, leftWall: ge, rightWall: De } = d1(le, ue);
      ([he, ge, De].forEach((Pe) => {
        Pe.render.visible = !1;
      }),
        He.World.add(ne.world, [he, ge, De]),
        He.Render.run(re));
      const Oe = He.Runner.create();
      (He.Runner.run(Oe, ne), (x.current = ne), (h.current = re), (i.current = Oe));
      for (const Pe of Ro) Fm(Pe.id);
      const _e = () => {
        document.hidden
          ? (He.Runner.stop(Oe), He.Render.stop(re))
          : (He.Render.run(re), He.Runner.run(Oe, ne));
      };
      document.addEventListener('visibilitychange', _e);
      const ht = I.current;
      return () => {
        (document.removeEventListener('visibilitychange', _e),
          He.Runner.stop(Oe),
          He.Render.stop(re),
          He.World.clear(ne.world, !1),
          He.Engine.clear(ne),
          re.canvas.parentNode && re.canvas.parentNode.removeChild(re.canvas),
          (re.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          ht.clear());
      };
    }, []);
    const K = Y.useCallback((W, le) => {
      var _e;
      const ue = x.current;
      if (!ue) return;
      const ne = zu(W),
        re = zu(le);
      if (!ne || !re || ne.consumed || re.consumed || ne.level !== re.level) return;
      ((ne.consumed = !0), (re.consumed = !0));
      const he = ne.level + 1,
        ge = m1(W, le);
      (He.World.remove(ue.world, [W, le]), I.current.delete(W), I.current.delete(le));
      let De = 0,
        Oe = !1;
      if (he > ol) ((De = v1()), (Oe = !0), F.current('special'));
      else {
        const ht = Il(he, T.current, w.current),
          Pe = Zm(ht, ge.x, ge.y, performance.now());
        (co(Pe, ht),
          He.World.add(ue.world, Pe),
          I.current.add(Pe),
          (De = h1(he)),
          (Oe = he === ol),
          F.current(Oe ? 'special' : 'merge'));
      }
      (L.current(De),
        (_e = f.current) == null || _e.add({ x: ge.x, y: ge.y, score: De, isSpecial: Oe }));
    }, []);
    (Y.useEffect(() => {
      const W = x.current;
      if (!W) return;
      const le = (ue) => {
        for (const ne of ue.pairs) K(ne.bodyA, ne.bodyB);
      };
      return (
        He.Events.on(W, 'collisionStart', le),
        () => {
          He.Events.off(W, 'collisionStart', le);
        }
      );
    }, [K]),
      Y.useEffect(() => {
        const W = x.current;
        if (!W) return;
        const le = sl.gameOverLineOffset;
        let ue = 0;
        const ne = () => {
          if (U.current !== 'playing' || ((ue = (ue + 1) % 6), ue !== 0)) return;
          const re = performance.now();
          for (const he of I.current) {
            const ge = zu(he);
            if (
              !(!ge || ge.consumed) &&
              !(re - ge.droppedAt < sl.gameOverGracePeriodMs) &&
              !(Math.abs(he.velocity.y) > sl.restingVelocityThreshold) &&
              he.position.y - he.circleRadius < le
            ) {
              ((U.current = 'gameover'), s('gameover'));
              const De = te.current();
              F.current(De.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
          }
        };
        return (
          He.Events.on(W, 'afterUpdate', ne),
          () => {
            He.Events.off(W, 'afterUpdate', ne);
          }
        );
      }, []),
      Y.useEffect(() => {
        if (x.current) {
          Fm(z);
          for (const ne of I.current) {
            const re = zu(ne);
            if (!re || re.consumed) continue;
            const he = Il(re.level, T.current, z);
            co(ne, he);
          }
        }
        const le = r.current ? Il(r.current.level, T.current, z) : null,
          ue = p.current ? Il(p.current.level, T.current, z) : null;
        (v(le), E(ue));
      }, [z, v, E]));
    const ae = Y.useCallback((W) => {
        (D(W), r1(W));
      }, []),
      oe = Y.useCallback(
        (W) => {
          const le = x.current;
          if (!le || U.current !== 'playing' || !A.current) return;
          const ue = r.current;
          if (!ue) return;
          const ne = performance.now();
          if (ne - O.current < Gt.dropCooldownMs) return;
          const re = Math.max(0, Math.min(1, W)),
            he = ue.radius + sl.wallThickness / 2,
            ge = he,
            De = T.current - he,
            Oe = ge + re * (De - ge),
            _e = ue.radius + 4,
            ht = Zm(ue, Oe, _e, ne);
          (co(ht, ue),
            He.World.add(le.world, ht),
            I.current.add(ht),
            F.current('drop'),
            (A.current = !1),
            (O.current = ne),
            _.current !== null && window.clearTimeout(_.current),
            (_.current = window.setTimeout(() => {
              ((_.current = null),
                U.current === 'playing' && (v(p.current), E(V()), (A.current = !0)));
            }, Gt.dropCooldownMs)));
        },
        [V, v, E]
      ),
      de = Y.useCallback(() => {
        var W;
        (B.reset(),
          (W = f.current) == null || W.clear(),
          v(V()),
          E(V()),
          (A.current = !0),
          (O.current = 0),
          (U.current = 'playing'),
          s('playing'));
      }, [B, V, v, E]),
      H = Y.useCallback(() => {
        const W = x.current;
        if (W) {
          for (const le of I.current) He.World.remove(W.world, le);
          I.current.clear();
        }
        (_.current !== null && (window.clearTimeout(_.current), (_.current = null)), de());
      }, [de]),
      $ = sl.gameOverLineOffset;
    return {
      status: d,
      score: B.score,
      bestScore: B.bestScore,
      isNewRecord: B.isNewRecord,
      currentItem: m,
      nextItem: g,
      isSoundOn: j.isSoundOn,
      themeId: z,
      mergeEffectRef: f,
      canvasContainerRef: b,
      drop: oe,
      start: de,
      restart: H,
      toggleSound: j.toggle,
      setThemeId: ae,
      fieldWidth: c,
      fieldHeight: R,
      gameOverLineY: $,
    };
  },
  y1 = ({ size: c }) => {
    const R = g1({ fieldWidth: c.width, fieldHeight: c.height });
    return ie.jsxs(ie.Fragment, {
      children: [
        ie.jsx(Gp, {
          score: R.score,
          bestScore: R.bestScore,
          nextItem: R.nextItem,
          isSoundOn: R.isSoundOn,
          onToggleSound: R.toggleSound,
          themeId: R.themeId,
          onChangeTheme: R.setThemeId,
        }),
        ie.jsx('main', {
          className: ea.main,
          children: ie.jsxs('div', {
            className: ea.field_wrapper,
            style: { width: `${c.width}px`, height: `${c.height}px` },
            children: [
              ie.jsx(up, {
                canvasContainerRef: R.canvasContainerRef,
                fieldWidth: c.width,
                fieldHeight: c.height,
                gameOverLineY: R.gameOverLineY,
                currentItem: R.currentItem,
                mergeEffectRef: R.mergeEffectRef,
                canInteract: R.status === 'playing',
                onDrop: R.drop,
              }),
              R.status === 'idle' ? ie.jsx(Ep, { onStart: R.start }) : null,
              R.status === 'gameover'
                ? ie.jsx(vp, {
                    score: R.score,
                    bestScore: R.bestScore,
                    isNewRecord: R.isNewRecord,
                    onRestart: R.restart,
                  })
                : null,
            ],
          }),
        }),
      ],
    });
  },
  p1 = () => {
    const c = Y.useRef(null),
      [R, b] = Y.useState(null);
    return (
      Y.useLayoutEffect(() => {
        const x = c.current;
        if (!x) return;
        const h = x.getBoundingClientRect();
        b({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      R === null
        ? ie.jsxs('div', {
            className: ea.layout,
            children: [
              ie.jsx('div', { className: ea.top_bar_placeholder, 'aria-hidden': 'true' }),
              ie.jsx('main', { ref: c, className: ea.main }),
            ],
          })
        : ie.jsx('div', { className: ea.layout, children: ie.jsx(y1, { size: R }) })
    );
  },
  S1 = () => ie.jsx('div', { className: qy.index, children: ie.jsx(p1, {}) }),
  x1 = () => ie.jsx('div', { children: ie.jsx('h1', { children: 'Not Found' }) });
function E1() {
  return ie.jsxs(ie.Fragment, {
    children: [
      ie.jsxs(Pg, {
        children: [
          ie.jsx(mo, { path: '/', element: ie.jsx(S1, {}) }),
          ie.jsx(mo, { path: '*', element: ie.jsx(x1, {}) }),
        ],
      }),
      ie.jsx(Gy, {}),
    ],
  });
}
const Ch = document.getElementById('root');
if (!Ch) throw new Error('Failed to find #root element');
eg.createRoot(Ch).render(ie.jsx(Ty, { basename: '/ochimono-game', children: ie.jsx(E1, {}) }));
