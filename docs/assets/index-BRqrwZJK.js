(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) x(h);
  new MutationObserver((h) => {
    for (const i of h)
      if (i.type === 'childList')
        for (const d of i.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && x(d);
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
  kl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm;
function Z0() {
  if (Cm) return kl;
  Cm = 1;
  var c = Symbol.for('react.transitional.element'),
    C = Symbol.for('react.fragment');
  function b(x, h, i) {
    var d = null;
    if ((i !== void 0 && (d = '' + i), h.key !== void 0 && (d = '' + h.key), 'key' in h)) {
      i = {};
      for (var f in h) f !== 'key' && (i[f] = h[f]);
    } else i = h;
    return ((h = i.ref), { $$typeof: c, type: x, key: d, ref: h !== void 0 ? h : null, props: i });
  }
  return ((kl.Fragment = C), (kl.jsx = b), (kl.jsxs = b), kl);
}
var Rm;
function K0() {
  return (Rm || ((Rm = 1), (Ws.exports = Z0())), Ws.exports);
}
var ie = K0(),
  Ps = { exports: {} },
  Wl = {},
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
        function C(V, K) {
          var le = V.length;
          V.push(K);
          e: for (; 0 < le; ) {
            var oe = (le - 1) >>> 1,
              de = V[oe];
            if (0 < h(de, K)) ((V[oe] = K), (V[le] = de), (le = oe));
            else break e;
          }
        }
        function b(V) {
          return V.length === 0 ? null : V[0];
        }
        function x(V) {
          if (V.length === 0) return null;
          var K = V[0],
            le = V.pop();
          if (le !== K) {
            V[0] = le;
            e: for (var oe = 0, de = V.length, H = de >>> 1; oe < H; ) {
              var $ = 2 * (oe + 1) - 1,
                W = V[$],
                ae = $ + 1,
                ue = V[ae];
              if (0 > h(W, le))
                ae < de && 0 > h(ue, W)
                  ? ((V[oe] = ue), (V[ae] = le), (oe = ae))
                  : ((V[oe] = W), (V[$] = le), (oe = $));
              else if (ae < de && 0 > h(ue, le)) ((V[oe] = ue), (V[ae] = le), (oe = ae));
              else break e;
            }
          }
          return K;
        }
        function h(V, K) {
          var le = V.sortIndex - K.sortIndex;
          return le !== 0 ? le : V.id - K.id;
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
          var d = Date,
            f = d.now();
          c.unstable_now = function () {
            return d.now() - f;
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
            else if (K.startTime <= V) (x(m), (K.sortIndex = K.expirationTime), C(s, K));
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
          B = -1;
        function w() {
          return E ? !0 : !(c.unstable_now() - B < D);
        }
        function j() {
          if (((E = !1), M)) {
            var V = c.unstable_now();
            B = V;
            var K = !0;
            try {
              e: {
                ((p = !1), v && ((v = !1), O(z), (z = -1)), (r = !0));
                var le = y;
                try {
                  t: {
                    for (_(V), g = b(s); g !== null && !(g.expirationTime > V && w()); ) {
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
                  ((g = null), (y = le), (r = !1));
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
            var le = y;
            y = K;
            try {
              return V();
            } finally {
              y = le;
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
            var le = y;
            y = V;
            try {
              return K();
            } finally {
              y = le;
            }
          }),
          (c.unstable_scheduleCallback = function (V, K, le) {
            var oe = c.unstable_now();
            switch (
              (typeof le == 'object' && le !== null
                ? ((le = le.delay), (le = typeof le == 'number' && 0 < le ? oe + le : oe))
                : (le = oe),
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
              (de = le + de),
              (V = {
                id: o++,
                callback: K,
                priorityLevel: V,
                startTime: le,
                expirationTime: de,
                sortIndex: -1,
              }),
              le > oe
                ? ((V.sortIndex = le),
                  C(m, V),
                  b(s) === null && V === b(m) && (v ? (O(z), (z = -1)) : (v = !0), I(T, le - oe)))
                : ((V.sortIndex = de), C(s, V), p || r || ((p = !0), M || ((M = !0), L()))),
              V
            );
          }),
          (c.unstable_shouldYield = w),
          (c.unstable_wrapCallback = function (V) {
            var K = y;
            return function () {
              var le = y;
              y = K;
              try {
                return V.apply(this, arguments);
              } finally {
                y = le;
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
    C = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
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
  function B(H, $, W) {
    var ae = W.ref;
    return { $$typeof: c, type: H, key: $, ref: ae !== void 0 ? ae : null, props: W };
  }
  function w(H, $) {
    return B(H.type, $, H.props);
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
  function V(H, $, W, ae, ue) {
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
            case C:
              re = !0;
              break;
            case o:
              return ((re = H._init), V(re(H._payload), $, W, ae, ue));
          }
      }
    if (re)
      return (
        (ue = ue(H)),
        (re = ae === '' ? '.' + te(H, 0) : ae),
        T(ue)
          ? ((W = ''),
            re != null && (W = re.replace(F, '$&/') + '/'),
            V(ue, $, W, '', function (De) {
              return De;
            }))
          : ue != null &&
            (j(ue) &&
              (ue = w(
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
    var he = ae === '' ? '.' : ae + ':';
    if (T(H))
      for (var ge = 0; ge < H.length; ge++)
        ((ae = H[ge]), (ne = he + te(ae, ge)), (re += V(ae, $, W, ne, ue)));
    else if (((ge = r(H)), typeof ge == 'function'))
      for (H = ge.call(H), ge = 0; !(ae = H.next()).done; )
        ((ae = ae.value), (ne = he + te(ae, ge++)), (re += V(ae, $, W, ne, ue)));
    else if (ne === 'object') {
      if (typeof H.then == 'function') return V(I(H), $, W, ae, ue);
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
    var ae = [],
      ue = 0;
    return (
      V(H, ae, '', '', function (ne) {
        return $.call(W, ne, ue++);
      }),
      ae
    );
  }
  function le(H) {
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
      var ae = v({}, H.props),
        ue = H.key;
      if ($ != null)
        for (ne in ($.key !== void 0 && (ue = '' + $.key), $))
          !D.call($, ne) ||
            ne === 'key' ||
            ne === '__self' ||
            ne === '__source' ||
            (ne === 'ref' && $.ref === void 0) ||
            (ae[ne] = $[ne]);
      var ne = arguments.length - 2;
      if (ne === 1) ae.children = W;
      else if (1 < ne) {
        for (var re = Array(ne), he = 0; he < ne; he++) re[he] = arguments[he + 2];
        ae.children = re;
      }
      return B(H.type, ue, ae);
    }),
    (ve.createContext = function (H) {
      return (
        (H = {
          $$typeof: d,
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
      var ae,
        ue = {},
        ne = null;
      if ($ != null)
        for (ae in ($.key !== void 0 && (ne = '' + $.key), $))
          D.call($, ae) && ae !== 'key' && ae !== '__self' && ae !== '__source' && (ue[ae] = $[ae]);
      var re = arguments.length - 2;
      if (re === 1) ue.children = W;
      else if (1 < re) {
        for (var he = Array(re), ge = 0; ge < re; ge++) he[ge] = arguments[ge + 2];
        ue.children = he;
      }
      if (H && H.defaultProps)
        for (ae in ((re = H.defaultProps), re)) ue[ae] === void 0 && (ue[ae] = re[ae]);
      return B(H, ne, ue);
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (H) {
      return { $$typeof: f, render: H };
    }),
    (ve.isValidElement = j),
    (ve.lazy = function (H) {
      return { $$typeof: o, _payload: { _status: -1, _result: H }, _init: le };
    }),
    (ve.memo = function (H, $) {
      return { $$typeof: m, type: H, compare: $ === void 0 ? null : $ };
    }),
    (ve.startTransition = function (H) {
      var $ = z.T,
        W = {};
      z.T = W;
      try {
        var ae = H(),
          ue = z.S;
        (ue !== null && ue(W, ae),
          typeof ae == 'object' && ae !== null && typeof ae.then == 'function' && ae.then(M, oe));
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
  function C(s) {
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
          throw Error(C(522));
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
  var d = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(s, m) {
    if (s === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (it.createPortal = function (s, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(C(299));
      return i(s, m, null, o);
    }),
    (it.flushSync = function (s) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), s)) return s();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
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
          g = f(o, m.crossOrigin),
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
            var o = f(m.as, m.crossOrigin);
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
          g = f(o, m.crossOrigin);
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
          var o = f(m.as, m.crossOrigin);
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
      return d.H.useFormState(s, m, o);
    }),
    (it.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
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
      } catch (C) {
        console.error(C);
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
 */ var wm;
function P0() {
  if (wm) return Wl;
  wm = 1;
  var c = F0(),
    C = vo(),
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
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function f(e) {
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
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return (s(l), e);
          if (u === a) return (s(l), t);
          u = u.sibling;
        }
        throw Error(x(188));
      }
      if (n.return !== a.return) ((n = l), (a = u));
      else {
        for (var S = !1, R = l.child; R; ) {
          if (R === n) {
            ((S = !0), (n = l), (a = u));
            break;
          }
          if (R === a) {
            ((S = !0), (a = l), (n = u));
            break;
          }
          R = R.sibling;
        }
        if (!S) {
          for (R = u.child; R; ) {
            if (R === n) {
              ((S = !0), (n = u), (a = l));
              break;
            }
            if (R === a) {
              ((S = !0), (a = u), (n = l));
              break;
            }
            R = R.sibling;
          }
          if (!S) throw Error(x(189));
        }
      }
      if (n.alternate !== a) throw Error(x(190));
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
    B = Symbol.for('react.activity'),
    w = Symbol.for('react.memo_cache_sentinel'),
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
      case B:
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
    V = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = { pending: !1, data: null, method: null, action: null },
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
  var ae = H(null),
    ue = H(null),
    ne = H(null),
    re = H(null);
  function he(e, t) {
    switch ((W(ne, t), W(ue, e), W(ae, null), t.nodeType)) {
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
    ($(ae), W(ae, e));
  }
  function ge() {
    ($(ae), $(ue), $(ne));
  }
  function De(e) {
    e.memoizedState !== null && W(re, e);
    var t = ae.current,
      n = Jd(t, e.type);
    t !== n && (W(ue, e), W(ae, n));
  }
  function Oe(e) {
    (ue.current === e && ($(ae), $(ue)), re.current === e && ($(re), (Kl._currentValue = le)));
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
  var al = !1;
  function ca(e, t) {
    if (!e || al) return '';
    al = !0;
    var n = Error.prepareStackTrace;
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
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        S = u[0],
        R = u[1];
      if (S && R) {
        var N = S.split(`
`),
          Q = R.split(`
`);
        for (l = a = 0; a < N.length && !N[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; l < Q.length && !Q[l].includes('DetermineComponentFrameRoot'); ) l++;
        if (a === N.length || l === Q.length)
          for (a = N.length - 1, l = Q.length - 1; 1 <= a && 0 <= l && N[a] !== Q[l]; ) l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (N[a] !== Q[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || N[a] !== Q[l])) {
                  var k =
                    `
` + N[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      k.includes('<anonymous>') &&
                      (k = k.replace('<anonymous>', e.displayName)),
                    k
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((al = !1), (Error.prepareStackTrace = n));
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
        return ca(e.type, !1);
      case 11:
        return ca(e.type.render, !1);
      case 1:
        return ca(e.type, !0);
      case 31:
        return Pe('Activity');
      default:
        return '';
    }
  }
  function fa(e) {
    try {
      var t = '',
        n = null;
      do ((t += ii(e, n)), (n = e), (e = e.return));
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
  var vt = Object.prototype.hasOwnProperty,
    da = c.unstable_scheduleCallback,
    Gn = c.unstable_cancelCallback,
    ui = c.unstable_shouldYield,
    ri = c.unstable_requestPaint,
    lt = c.unstable_now,
    si = c.unstable_getCurrentPriorityLevel,
    Vn = c.unstable_ImmediatePriority,
    oi = c.unstable_UserBlockingPriority,
    ma = c.unstable_NormalPriority,
    ha = c.unstable_LowPriority,
    qn = c.unstable_IdlePriority,
    Ah = c.log,
    Mh = c.unstable_setDisableYieldValue,
    ll = null,
    gt = null;
  function vn(e) {
    if ((typeof Ah == 'function' && Mh(e), gt && typeof gt.setStrictMode == 'function'))
      try {
        gt.setStrictMode(ll, e);
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
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      S = e.pingedLanes;
    e = e.warmLanes;
    var R = a & 134217727;
    return (
      R !== 0
        ? ((a = R & ~u),
          a !== 0
            ? (l = Xn(a))
            : ((S &= R), S !== 0 ? (l = Xn(S)) : n || ((n = R & ~e), n !== 0 && (l = Xn(n)))))
        : ((R = a & ~u),
          R !== 0
            ? (l = Xn(R))
            : S !== 0
              ? (l = Xn(S))
              : n || ((n = a & ~e), n !== 0 && (l = Xn(n)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & u) === 0 &&
            ((u = l & -l), (n = t & -t), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? t
          : l
    );
  }
  function il(e, t) {
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
  function ul(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function wh(e, t, n, a, l, u) {
    var S = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var R = e.entanglements,
      N = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (n = S & ~n; 0 < n; ) {
      var k = 31 - yt(n),
        ee = 1 << k;
      ((R[k] = 0), (N[k] = -1));
      var Z = Q[k];
      if (Z !== null)
        for (Q[k] = null, k = 0; k < Z.length; k++) {
          var J = Z[k];
          J !== null && (J.lane &= -536870913);
        }
      n &= ~ee;
    }
    (a !== 0 && Mo(e, a, 0),
      u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function Mo(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - yt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function zo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - yt(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
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
    va = '__reactContainer$' + gn,
    qu = '__reactEvents$' + gn,
    Bh = '__reactListeners$' + gn,
    Nh = '__reactHandles$' + gn,
    wo = '__reactResources$' + gn,
    rl = '__reactMarker$' + gn;
  function Xu(e) {
    (delete e[Ie], delete e[rt], delete e[qu], delete e[Bh], delete e[Nh]);
  }
  function ga(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[va] || n[Ie])) {
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
  function ya(e) {
    if ((e = e[Ie] || e[va])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function sl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function pa(e) {
    var t = e[wo];
    return (t || (t = e[wo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ke(e) {
    e[rl] = !0;
  }
  var Bo = new Set(),
    No = {};
  function Qn(e, t) {
    (Sa(e, t), Sa(e + 'Capture', t));
  }
  function Sa(e, t) {
    for (No[e] = t, e = 0; e < t.length; e++) Bo.add(t[e]);
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
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
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
  function Kt(e, t, n, a) {
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
  function Rt(e) {
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
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var l = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (S) {
            ((n = '' + S), u.call(this, S));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
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
      a = '';
    return (
      e && (a = Lo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
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
  function Zu(e, t, n, a, l, u, S, R) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Rt(t))
          : e.value !== '' + Rt(t) && (e.value = '' + Rt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Ku(e, S, Rt(t))
        : n != null
          ? Ku(e, S, Rt(n))
          : a != null && e.removeAttribute('value'),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      R != null && typeof R != 'function' && typeof R != 'symbol' && typeof R != 'boolean'
        ? (e.name = '' + Rt(R))
        : e.removeAttribute('name'));
  }
  function Yo(e, t, n, a, l, u, S, R) {
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
      ((n = n != null ? '' + Rt(n) : ''),
        (t = t != null ? '' + Rt(t) : n),
        R || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? l),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = R ? e.checked : !!a),
      (e.defaultChecked = !!a),
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
  function xa(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Rt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Go(e, t, n) {
    if (t != null && ((t = '' + Rt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Rt(n) : '';
  }
  function Vo(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(x(92));
        if (I(a)) {
          if (1 < a.length) throw Error(x(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Rt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      Qu(e));
  }
  function Ea(e, t) {
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
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
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
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && qo(e, l, a));
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
  var Ta = null,
    ba = null;
  function Qo(e) {
    var t = ya(e);
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
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[rt] || null;
                if (!l) throw Error(x(90));
                Zu(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && jo(a));
          }
          break e;
        case 'textarea':
          Go(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && xa(e, !!n.multiple, t, !1));
      }
    }
  }
  var ku = !1;
  function Zo(e, t, n) {
    if (ku) return e(t, n);
    ku = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((ku = !1),
        (Ta !== null || ba !== null) &&
          (lu(), Ta && ((t = Ta), (e = ba), (ba = Ta = null), Qo(t), e)))
      )
        for (t = 0; t < e.length; t++) Qo(e[t]);
    }
  }
  function ol(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[rt] || null;
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
      var cl = {};
      (Object.defineProperty(cl, 'passive', {
        get: function () {
          Wu = !0;
        },
      }),
        window.addEventListener('test', cl, cl),
        window.removeEventListener('test', cl, cl));
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
      a,
      l = 'value' in yn ? yn.value : yn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var S = n - e;
    for (a = 1; a <= S && t[n - a] === l[u - a]; a++);
    return (pi = l.slice(e, 1 < a ? 1 - a : void 0));
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
    function t(n, a, l, u, S) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = S),
        (this.currentTarget = null));
      for (var R in e) e.hasOwnProperty(R) && ((n = e[R]), (this[R] = n ? n(u) : u[R]));
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
    fl = g({}, Zn, { view: 0, detail: 0 }),
    qh = st(fl),
    Iu,
    er,
    dl,
    Ti = g({}, fl, {
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
          : (e !== dl &&
              (dl && e.type === 'mousemove'
                ? ((Iu = e.screenX - dl.screenX), (er = e.screenY - dl.screenY))
                : (er = Iu = 0),
              (dl = e)),
            Iu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : er;
      },
    }),
    Fo = st(Ti),
    Xh = g({}, Ti, { dataTransfer: 0 }),
    Qh = st(Xh),
    Zh = g({}, fl, { relatedTarget: 0 }),
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
  var tv = g({}, fl, {
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
    av = g({}, Ti, {
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
    ko = st(av),
    lv = g({}, fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nr,
    }),
    iv = st(lv),
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
    ar = Ft && 'CompositionEvent' in window,
    ml = null;
  Ft && 'documentMode' in document && (ml = document.documentMode);
  var mv = Ft && 'TextEvent' in window && !ml,
    Wo = Ft && (!ar || (ml && 8 < ml && 11 >= ml)),
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
  var Ca = !1;
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
    if (Ca)
      return e === 'compositionend' || (!ar && ec(e, t))
        ? ((e = Ko()), (pi = Pu = yn = null), (Ca = !1), e)
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
  function ac(e, t, n, a) {
    (Ta ? (ba ? ba.push(a) : (ba = [a])) : (Ta = a),
      (t = fu(t, 'onChange')),
      0 < t.length &&
        ((n = new Ei('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var hl = null,
    vl = null;
  function yv(e) {
    Gd(e, 0);
  }
  function bi(e) {
    var t = sl(e);
    if (jo(t)) return e;
  }
  function lc(e, t) {
    if (e === 'change') return t;
  }
  var ic = !1;
  if (Ft) {
    var lr;
    if (Ft) {
      var ir = 'oninput' in document;
      if (!ir) {
        var uc = document.createElement('div');
        (uc.setAttribute('oninput', 'return;'), (ir = typeof uc.oninput == 'function'));
      }
      lr = ir;
    } else lr = !1;
    ic = lr && (!document.documentMode || 9 < document.documentMode);
  }
  function rc() {
    hl && (hl.detachEvent('onpropertychange', sc), (vl = hl = null));
  }
  function sc(e) {
    if (e.propertyName === 'value' && bi(vl)) {
      var t = [];
      (ac(t, vl, e, $u(e)), Zo(yv, t));
    }
  }
  function pv(e, t, n) {
    e === 'focusin'
      ? (rc(), (hl = t), (vl = n), hl.attachEvent('onpropertychange', sc))
      : e === 'focusout' && rc();
  }
  function Sv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bi(vl);
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
  function gl(e, t) {
    if (pt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!vt.call(t, l) || !pt(e[l], t[l])) return !1;
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
    Ra = null,
    rr = null,
    yl = null,
    sr = !1;
  function mc(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sr ||
      Ra == null ||
      Ra !== gi(a) ||
      ((a = Ra),
      'selectionStart' in a && ur(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (yl && gl(yl, a)) ||
        ((yl = a),
        (a = fu(rr, 'onSelect')),
        0 < a.length &&
          ((t = new Ei('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Ra))));
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
  var Aa = {
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
      (delete Aa.animationend.animation,
      delete Aa.animationiteration.animation,
      delete Aa.animationstart.animation),
    'TransitionEvent' in window || delete Aa.transitionend.transition);
  function Jn(e) {
    if (or[e]) return or[e];
    if (!Aa[e]) return e;
    var t = Aa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in hc) return (or[e] = t[n]);
    return e;
  }
  var vc = Jn('animationend'),
    gc = Jn('animationiteration'),
    yc = Jn('animationstart'),
    Cv = Jn('transitionrun'),
    Rv = Jn('transitionstart'),
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
  var Ci =
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
    Ma = 0,
    fr = 0;
  function Ri() {
    for (var e = Ma, t = (fr = Ma = 0); t < e; ) {
      var n = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var l = Mt[t];
      Mt[t++] = null;
      var u = Mt[t];
      if (((Mt[t++] = null), a !== null && l !== null)) {
        var S = a.pending;
        (S === null ? (l.next = l) : ((l.next = S.next), (S.next = l)), (a.pending = l));
      }
      u !== 0 && xc(n, l, u);
    }
  }
  function Ai(e, t, n, a) {
    ((Mt[Ma++] = e),
      (Mt[Ma++] = t),
      (Mt[Ma++] = n),
      (Mt[Ma++] = a),
      (fr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function dr(e, t, n, a) {
    return (Ai(e, t, n, a), Mi(e));
  }
  function Fn(e, t) {
    return (Ai(e, null, null, t), Mi(e));
  }
  function xc(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      ((u.childLanes |= n),
        (a = u.alternate),
        a !== null && (a.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        l &&
          t !== null &&
          ((l = 31 - yt(n)),
          (e = u.hiddenUpdates),
          (a = e[l]),
          a === null ? (e[l] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Mi(e) {
    if (50 < Yl) throw ((Yl = 0), (Es = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var za = {};
  function Mv(e, t, n, a) {
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
  function St(e, t, n, a) {
    return new Mv(e, t, n, a);
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
  function zi(e, t, n, a, l, u) {
    var S = 0;
    if (((a = e), typeof e == 'function')) mr(e) && (S = 1);
    else if (typeof e == 'string')
      S = w0(e, n, ae.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return ((e = St(31, n, t, l)), (e.elementType = B), (e.lanes = u), e);
        case v:
          return $n(n.children, l, u, t);
        case E:
          ((S = 8), (l |= 24));
          break;
        case A:
          return ((e = St(12, n, t, l | 2)), (e.elementType = A), (e.lanes = u), e);
        case T:
          return ((e = St(13, n, t, l)), (e.elementType = T), (e.lanes = u), e);
        case M:
          return ((e = St(19, n, t, l)), (e.elementType = M), (e.lanes = u), e);
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
                ((S = 16), (a = null));
                break e;
            }
          ((S = 29), (n = Error(x(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = St(S, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function $n(e, t, n, a) {
    return ((e = St(7, e, a, t)), (e.lanes = n), e);
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
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: fa(t) }), bc.set(e, t), t);
    }
    return { value: e, source: t, stack: fa(t) };
  }
  var Da = [],
    Oa = 0,
    Di = null,
    pl = 0,
    Dt = [],
    Ot = 0,
    pn = null,
    Vt = 1,
    qt = '';
  function kt(e, t) {
    ((Da[Oa++] = pl), (Da[Oa++] = Di), (Di = e), (pl = t));
  }
  function Cc(e, t, n) {
    ((Dt[Ot++] = Vt), (Dt[Ot++] = qt), (Dt[Ot++] = pn), (pn = e));
    var a = Vt;
    e = qt;
    var l = 32 - yt(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - yt(t) + l;
    if (30 < u) {
      var S = l - (l % 5);
      ((u = (a & ((1 << S) - 1)).toString(32)),
        (a >>= S),
        (l -= S),
        (Vt = (1 << (32 - yt(t) + l)) | (n << l) | a),
        (qt = u + e));
    } else ((Vt = (1 << u) | (n << l) | a), (qt = e));
  }
  function gr(e) {
    e.return !== null && (kt(e, 1), Cc(e, 1, 0));
  }
  function yr(e) {
    for (; e === Di; ) ((Di = Da[--Oa]), (Da[Oa] = null), (pl = Da[--Oa]), (Da[Oa] = null));
    for (; e === pn; )
      ((pn = Dt[--Ot]),
        (Dt[Ot] = null),
        (qt = Dt[--Ot]),
        (Dt[Ot] = null),
        (Vt = Dt[--Ot]),
        (Dt[Ot] = null));
  }
  function Rc(e, t) {
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
    throw (Sl(zt(t, e)), pr);
  }
  function Ac(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Ie] = e), (t[rt] = a), n)) {
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
        for (n = 0; n < Vl.length; n++) xe(Vl[n], t);
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
          Yo(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        xe('invalid', t);
        break;
      case 'textarea':
        (xe('invalid', t), Vo(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      Qd(t.textContent, n)
        ? (a.popover != null && (xe('beforetoggle', t), xe('toggle', t)),
          a.onScroll != null && xe('scroll', t),
          a.onScrollEnd != null && xe('scrollend', t),
          a.onClick != null && (t.onclick = Jt),
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
  function Ua(e) {
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
        : (Le = et ? Bt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function kn() {
    ((Le = et = null), (be = !1));
  }
  function Sr() {
    var e = Sn;
    return (e !== null && (dt === null ? (dt = e) : dt.push.apply(dt, e), (Sn = null)), e);
  }
  function Sl(e) {
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
  function Tr(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var S = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var R = u;
          u = l;
          for (var N = 0; N < t.length; N++)
            if (R.context === t[N]) {
              ((u.lanes |= n),
                (R = u.alternate),
                R !== null && (R.lanes |= n),
                Er(u.return, n, e),
                a || (S = null));
              break e;
            }
          u = R.next;
        }
      } else if (l.tag === 18) {
        if (((S = l.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Er(S, n, e), (S = null));
      } else S = l.child;
      if (S !== null) S.return = l;
      else
        for (S = l; S !== null; ) {
          if (S === e) {
            S = null;
            break;
          }
          if (((l = S.sibling), l !== null)) {
            ((l.return = S.return), (S = l));
            break;
          }
          S = S.return;
        }
      l = S;
    }
  }
  function wa(e, t, n, a) {
    e = null;
    for (var l = t, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var S = l.alternate;
        if (S === null) throw Error(x(387));
        if (((S = S.memoizedProps), S !== null)) {
          var R = l.type;
          pt(l.pendingProps.value, S.value) || (e !== null ? e.push(R) : (e = [R]));
        }
      } else if (l === re.current) {
        if (((S = l.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(Kl) : (e = [Kl]));
      }
      l = l.return;
    }
    (e !== null && Tr(t, e, n, a), (t.flags |= 262144));
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
  function xl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Dv(Ov, function () {
          e.controller.abort();
        }));
  }
  var El = null,
    Cr = 0,
    Ba = 0,
    Na = null;
  function Uv(e, t) {
    if (El === null) {
      var n = (El = []);
      ((Cr = 0),
        (Ba = Ms()),
        (Na = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Cr++, t.then(Dc, Dc), t);
  }
  function Dc() {
    if (--Cr === 0 && El !== null) {
      Na !== null && (Na.status = 'fulfilled');
      var e = El;
      ((El = null), (Ba = 0), (Na = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wv(e, t) {
    var n = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var l = 0; l < n.length; l++) (0, n[l])(t);
        },
        function (l) {
          for (a.status = 'rejected', a.reason = l, l = 0; l < n.length; l++) (0, n[l])(void 0);
        }
      ),
      a
    );
  }
  var Oc = V.S;
  V.S = function (e, t) {
    ((hd = lt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Uv(e, t),
      Oc !== null && Oc(e, t));
  };
  var In = H(null);
  function Rr() {
    var e = In.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function wi(e, t) {
    t === null ? W(In, In.current) : W(In, t.pool);
  }
  function Uc() {
    var e = Rr();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var _a = Error(x(460)),
    Ar = Error(x(474)),
    Bi = Error(x(542)),
    Ni = { then: function () {} };
  function wc(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Bc(e, t, n) {
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
              function (a) {
                if (t.status === 'pending') {
                  var l = t;
                  ((l.status = 'fulfilled'), (l.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var l = t;
                  ((l.status = 'rejected'), (l.reason = a));
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
        throw ((ta = t), _a);
    }
  }
  function ea(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((ta = n), _a) : n;
    }
  }
  var ta = null;
  function Nc() {
    if (ta === null) throw Error(x(459));
    var e = ta;
    return ((ta = null), e);
  }
  function _c(e) {
    if (e === _a || e === Bi) throw Error(x(483));
  }
  var Ha = null,
    Tl = 0;
  function _i(e) {
    var t = Tl;
    return ((Tl += 1), Ha === null && (Ha = []), Bc(Ha, e, t));
  }
  function bl(e, t) {
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
    function a(q) {
      for (var G = new Map(); q !== null; )
        (q.key !== null ? G.set(q.key, q) : G.set(q.index, q), (q = q.sibling));
      return G;
    }
    function l(q, G) {
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
    function R(q, G, X, P) {
      return G === null || G.tag !== 6
        ? ((G = hr(X, q.mode, P)), (G.return = q), G)
        : ((G = l(G, X)), (G.return = q), G);
    }
    function N(q, G, X, P) {
      var fe = X.type;
      return fe === v
        ? k(q, G, X.props.children, P, X.key)
        : G !== null &&
            (G.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === D && ea(fe) === G.type))
          ? ((G = l(G, X.props)), bl(G, X), (G.return = q), G)
          : ((G = zi(X.type, X.key, X.props, null, q.mode, P)), bl(G, X), (G.return = q), G);
    }
    function Q(q, G, X, P) {
      return G === null ||
        G.tag !== 4 ||
        G.stateNode.containerInfo !== X.containerInfo ||
        G.stateNode.implementation !== X.implementation
        ? ((G = vr(X, q.mode, P)), (G.return = q), G)
        : ((G = l(G, X.children || [])), (G.return = q), G);
    }
    function k(q, G, X, P, fe) {
      return G === null || G.tag !== 7
        ? ((G = $n(X, q.mode, P, fe)), (G.return = q), G)
        : ((G = l(G, X)), (G.return = q), G);
    }
    function ee(q, G, X) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return ((G = hr('' + G, q.mode, X)), (G.return = q), G);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case r:
            return ((X = zi(G.type, G.key, G.props, null, q.mode, X)), bl(X, G), (X.return = q), X);
          case p:
            return ((G = vr(G, q.mode, X)), (G.return = q), G);
          case D:
            return ((G = ea(G)), ee(q, G, X));
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
        return fe !== null ? null : R(q, G, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? N(q, G, X, P) : null;
          case p:
            return X.key === fe ? Q(q, G, X, P) : null;
          case D:
            return ((X = ea(X)), Z(q, G, X, P));
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
        return ((q = q.get(X) || null), R(G, q, '' + P, fe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((q = q.get(P.key === null ? X : P.key) || null), N(G, q, P, fe));
          case p:
            return ((q = q.get(P.key === null ? X : P.key) || null), Q(G, q, P, fe));
          case D:
            return ((P = ea(P)), J(q, G, X, P, fe));
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
        var fe = null, Ce = null, ce = G, pe = (G = 0), Te = null;
        ce !== null && pe < X.length;
        pe++
      ) {
        ce.index > pe ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var Re = Z(q, ce, X[pe], P);
        if (Re === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && Re.alternate === null && t(q, ce),
          (G = u(Re, G, pe)),
          Ce === null ? (fe = Re) : (Ce.sibling = Re),
          (Ce = Re),
          (ce = Te));
      }
      if (pe === X.length) return (n(q, ce), be && kt(q, pe), fe);
      if (ce === null) {
        for (; pe < X.length; pe++)
          ((ce = ee(q, X[pe], P)),
            ce !== null &&
              ((G = u(ce, G, pe)), Ce === null ? (fe = ce) : (Ce.sibling = ce), (Ce = ce)));
        return (be && kt(q, pe), fe);
      }
      for (ce = a(ce); pe < X.length; pe++)
        ((Te = J(ce, q, pe, X[pe], P)),
          Te !== null &&
            (e && Te.alternate !== null && ce.delete(Te.key === null ? pe : Te.key),
            (G = u(Te, G, pe)),
            Ce === null ? (fe = Te) : (Ce.sibling = Te),
            (Ce = Te)));
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
        var fe = null, Ce = null, ce = G, pe = (G = 0), Te = null, Re = X.next();
        ce !== null && !Re.done;
        pe++, Re = X.next()
      ) {
        ce.index > pe ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var Yn = Z(q, ce, Re.value, P);
        if (Yn === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && Yn.alternate === null && t(q, ce),
          (G = u(Yn, G, pe)),
          Ce === null ? (fe = Yn) : (Ce.sibling = Yn),
          (Ce = Yn),
          (ce = Te));
      }
      if (Re.done) return (n(q, ce), be && kt(q, pe), fe);
      if (ce === null) {
        for (; !Re.done; pe++, Re = X.next())
          ((Re = ee(q, Re.value, P)),
            Re !== null &&
              ((G = u(Re, G, pe)), Ce === null ? (fe = Re) : (Ce.sibling = Re), (Ce = Re)));
        return (be && kt(q, pe), fe);
      }
      for (ce = a(ce); !Re.done; pe++, Re = X.next())
        ((Re = J(ce, q, pe, Re.value, P)),
          Re !== null &&
            (e && Re.alternate !== null && ce.delete(Re.key === null ? pe : Re.key),
            (G = u(Re, G, pe)),
            Ce === null ? (fe = Re) : (Ce.sibling = Re),
            (Ce = Re)));
      return (
        e &&
          ce.forEach(function (X0) {
            return t(q, X0);
          }),
        be && kt(q, pe),
        fe
      );
    }
    function Be(q, G, X, P) {
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
                      (n(q, G.sibling), (P = l(G, X.props.children)), (P.return = q), (q = P));
                      break e;
                    }
                  } else if (
                    G.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === D && ea(fe) === G.type)
                  ) {
                    (n(q, G.sibling), (P = l(G, X.props)), bl(P, X), (P.return = q), (q = P));
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
                  bl(P, X),
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
                    (n(q, G.sibling), (P = l(G, X.children || [])), (P.return = q), (q = P));
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
            return ((X = ea(X)), Be(q, G, X, P));
        }
        if (I(X)) return se(q, G, X, P);
        if (L(X)) {
          if (((fe = L(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(q, G, X, P));
        }
        if (typeof X.then == 'function') return Be(q, G, _i(X), P);
        if (X.$$typeof === U) return Be(q, G, Ui(q, X), P);
        Hi(q, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          G !== null && G.tag === 6
            ? (n(q, G.sibling), (P = l(G, X)), (P.return = q), (q = P))
            : (n(q, G), (P = hr(X, q.mode, P)), (P.return = q), (q = P)),
          S(q))
        : n(q, G);
    }
    return function (q, G, X, P) {
      try {
        Tl = 0;
        var fe = Be(q, G, X, P);
        return ((Ha = null), fe);
      } catch (ce) {
        if (ce === _a || ce === Bi) throw ce;
        var Ce = St(29, ce, null, q.mode);
        return ((Ce.lanes = P), (Ce.return = q), Ce);
      } finally {
      }
    };
  }
  var na = Hc(!0),
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
  function Cn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ae & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = Mi(e)),
        xc(e, null, n),
        t
      );
    }
    return (Ai(e, a, t, n), Mi(e));
  }
  function Cl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), zo(e, n));
    }
  }
  function Dr(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var S = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (l = u = S) : (u = u.next = S), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
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
  var Or = !1;
  function Rl() {
    if (Or) {
      var e = Na;
      if (e !== null) throw e;
    }
  }
  function Al(e, t, n, a) {
    Or = !1;
    var l = e.updateQueue;
    Tn = !1;
    var u = l.firstBaseUpdate,
      S = l.lastBaseUpdate,
      R = l.shared.pending;
    if (R !== null) {
      l.shared.pending = null;
      var N = R,
        Q = N.next;
      ((N.next = null), S === null ? (u = Q) : (S.next = Q), (S = N));
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (R = k.lastBaseUpdate),
        R !== S && (R === null ? (k.firstBaseUpdate = Q) : (R.next = Q), (k.lastBaseUpdate = N)));
    }
    if (u !== null) {
      var ee = l.baseState;
      ((S = 0), (k = Q = N = null), (R = u));
      do {
        var Z = R.lane & -536870913,
          J = Z !== R.lane;
        if (J ? (Ee & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === Ba && (Or = !0),
            k !== null &&
              (k = k.next =
                { lane: 0, tag: R.tag, payload: R.payload, callback: null, next: null }));
          e: {
            var se = e,
              me = R;
            Z = t;
            var Be = n;
            switch (me.tag) {
              case 1:
                if (((se = me.payload), typeof se == 'function')) {
                  ee = se.call(Be, ee, Z);
                  break e;
                }
                ee = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = me.payload),
                  (Z = typeof se == 'function' ? se.call(Be, ee, Z) : se),
                  Z == null)
                )
                  break e;
                ee = g({}, ee, Z);
                break e;
              case 2:
                Tn = !0;
            }
          }
          ((Z = R.callback),
            Z !== null &&
              ((e.flags |= 64),
              J && (e.flags |= 8192),
              (J = l.callbacks),
              J === null ? (l.callbacks = [Z]) : J.push(Z)));
        } else
          ((J = { lane: Z, tag: R.tag, payload: R.payload, callback: R.callback, next: null }),
            k === null ? ((Q = k = J), (N = ee)) : (k = k.next = J),
            (S |= Z));
        if (((R = R.next), R === null)) {
          if (((R = l.shared.pending), R === null)) break;
          ((J = R),
            (R = J.next),
            (J.next = null),
            (l.lastBaseUpdate = J),
            (l.shared.pending = null));
        }
      } while (!0);
      (k === null && (N = ee),
        (l.baseState = N),
        (l.firstBaseUpdate = Q),
        (l.lastBaseUpdate = k),
        u === null && (l.shared.lanes = 0),
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
  var La = H(null),
    Li = H(0);
  function Gc(e, t) {
    ((e = sn), W(Li, e), W(La, t), (sn = e | t.baseLanes));
  }
  function Ur() {
    (W(Li, sn), W(La, La.current));
  }
  function wr() {
    ((sn = Li.current), $(La), $(Li));
  }
  var xt = H(null),
    wt = null;
  function Rn(e) {
    var t = e.alternate;
    (W(Xe, Xe.current & 1),
      W(xt, e),
      wt === null && (t === null || La.current !== null || t.memoizedState !== null) && (wt = e));
  }
  function Br(e) {
    (W(Xe, Xe.current), W(xt, e), wt === null && (wt = e));
  }
  function Vc(e) {
    e.tag === 22 ? (W(Xe, Xe.current), W(xt, e), wt === null && (wt = e)) : An();
  }
  function An() {
    (W(Xe, Xe.current), W(xt, xt.current));
  }
  function Et(e) {
    ($(xt), wt === e && (wt = null), $(Xe));
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
    ja = !1,
    aa = !1,
    Gi = 0,
    Ml = 0,
    Ya = null,
    Bv = 0;
  function Ve() {
    throw Error(x(321));
  }
  function Nr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function _r(e, t, n, a, l, u) {
    return (
      (It = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Rf : kr),
      (aa = !1),
      (u = n(a, l)),
      (aa = !1),
      ja && (u = Xc(t, n, a, l)),
      qc(e),
      u
    );
  }
  function qc(e) {
    V.H = Ol;
    var t = Ue !== null && Ue.next !== null;
    if (((It = 0), (Ke = Ue = ye = null), (Yi = !1), (Ml = 0), (Ya = null), t)) throw Error(x(300));
    e === null || Je || ((e = e.dependencies), e !== null && Oi(e) && (Je = !0));
  }
  function Xc(e, t, n, a) {
    ye = e;
    var l = 0;
    do {
      if ((ja && (Ya = null), (Ml = 0), (ja = !1), 25 <= l)) throw Error(x(301));
      if (((l += 1), (Ke = Ue = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((V.H = Af), (u = t(n, a)));
    } while (ja);
    return u;
  }
  function Nv() {
    var e = V.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? zl(t) : t),
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
    ((It = 0), (Ke = Ue = ye = null), (ja = !1), (Ml = Gi = 0), (Ya = null));
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
  function zl(e) {
    var t = Ml;
    return (
      (Ml += 1),
      Ya === null && (Ya = []),
      (e = Bc(Ya, e, t)),
      (t = ye),
      (Ke === null ? t.memoizedState : Ke.next) === null &&
        ((t = t.alternate), (V.H = t === null || t.memoizedState === null ? Rf : kr)),
      e
    );
  }
  function qi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return zl(e);
      if (e.$$typeof === U) return tt(e);
    }
    throw Error(x(438, String(e)));
  }
  function Yr(e) {
    var t = null,
      n = ye.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = ye.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (l) {
                return l.slice();
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
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = w;
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
    var a = e.queue;
    if (a === null) throw Error(x(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (l !== null) {
        var S = l.next;
        ((l.next = u.next), (u.next = S));
      }
      ((t.baseQueue = l = u), (a.pending = null));
    }
    if (((u = e.baseState), l === null)) e.memoizedState = u;
    else {
      t = l.next;
      var R = (S = null),
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
              ee === Ba && (k = !0));
          else if ((It & Z) === Z) {
            ((Q = Q.next), Z === Ba && (k = !0));
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
              N === null ? ((R = N = ee), (S = u)) : (N = N.next = ee),
              (ye.lanes |= Z),
              (Dn |= Z));
          ((ee = Q.action), aa && n(u, ee), (u = Q.hasEagerState ? Q.eagerState : n(u, ee)));
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
            N === null ? ((R = N = Z), (S = u)) : (N = N.next = Z),
            (ye.lanes |= ee),
            (Dn |= ee));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (N === null ? (S = u) : (N.next = R),
        !pt(u, e.memoizedState) && ((Je = !0), k && ((n = Na), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = N), (a.lastRenderedState = u));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Vr(e) {
    var t = Qe(),
      n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var S = (l = l.next);
      do ((u = e(u, S.action)), (S = S.next));
      while (S !== l);
      (pt(u, t.memoizedState) || (Je = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function Qc(e, t, n) {
    var a = ye,
      l = Qe(),
      u = be;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !pt((Ue || l).memoizedState, n);
    if (
      (S && ((l.memoizedState = n), (Je = !0)),
      (l = l.queue),
      Qr(Jc.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || S || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ga(9, { destroy: void 0 }, Kc.bind(null, a, l, n, t), null),
        Ne === null)
      )
        throw Error(x(349));
      u || (It & 127) !== 0 || Zc(a, t, n);
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
  function Kc(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Fc(t) && $c(e));
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
      if (((e = n()), aa)) {
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
  function kc(e, t, n, a) {
    return ((e.baseState = n), Gr(e, Ue, typeof a == 'function' ? a : en));
  }
  function _v(e, t, n, a, l) {
    if (Ki(e)) throw Error(x(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: l,
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
        a(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), Wc(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function Wc(e, t) {
    var n = t.action,
      a = t.payload,
      l = e.state;
    if (t.isTransition) {
      var u = V.T,
        S = {};
      V.T = S;
      try {
        var R = n(l, a),
          N = V.S;
        (N !== null && N(S, R), Pc(e, t, R));
      } catch (Q) {
        Xr(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (V.T = u));
      }
    } else
      try {
        ((u = n(l, a)), Pc(e, t, u));
      } catch (Q) {
        Xr(e, t, Q);
      }
  }
  function Pc(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            Ic(e, t, a);
          },
          function (a) {
            return Xr(e, t, a);
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
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), ef(t), (t = t.next));
      while (t !== a);
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
          var a = ye;
          if (be) {
            if (Le) {
              t: {
                for (var l = Le, u = Ut; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (((l = Bt(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((u = l.data), (l = u === 'F!' || u === 'F' ? l : null));
              }
              if (l) {
                ((Le = Bt(l.nextSibling)), (a = l.data === 'F!'));
                break e;
              }
            }
            xn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = ut()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Tf.bind(null, ye, a)),
      (a.dispatch = n),
      (a = qr(!1)),
      (u = $r.bind(null, ye, !1, a.queue)),
      (a = ut()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = _v.bind(null, ye, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function af(e) {
    var t = Qe();
    return lf(t, Ue, e);
  }
  function lf(e, t, n) {
    if (
      ((t = Gr(e, t, tf)[0]),
      (e = Xi(en)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = zl(t);
      } catch (S) {
        throw S === _a ? Bi : S;
      }
    else a = t;
    t = Qe();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048), Ga(9, { destroy: void 0 }, Hv.bind(null, l, n), null)),
      [a, u, e]
    );
  }
  function Hv(e, t) {
    e.action = t;
  }
  function uf(e) {
    var t = Qe(),
      n = Ue;
    if (n !== null) return lf(t, n, e);
    (Qe(), (t = t.memoizedState), (n = Qe()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Ga(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = Vi()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function rf() {
    return Qe().memoizedState;
  }
  function Qi(e, t, n, a) {
    var l = ut();
    ((ye.flags |= e),
      (l.memoizedState = Ga(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function Zi(e, t, n, a) {
    var l = Qe();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ue !== null && a !== null && Nr(a, Ue.memoizedState.deps)
      ? (l.memoizedState = Ga(t, u, n, a))
      : ((ye.flags |= e), (l.memoizedState = Ga(1 | t, u, n, a)));
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
    var a = n.memoizedState;
    return t !== null && Nr(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function vf(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Nr(t, a[1])) return a[0];
    if (((a = e()), aa)) {
      vn(!0);
      try {
        e();
      } finally {
        vn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Kr(e, t, n) {
    return n === void 0 || ((It & 1073741824) !== 0 && (Ee & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = gd()), (ye.lanes |= e), (Dn |= e), n);
  }
  function gf(e, t, n, a) {
    return pt(n, t)
      ? n
      : La.current !== null
        ? ((e = Kr(e, n, a)), pt(e, t) || (Je = !0), e)
        : (It & 42) === 0 || ((It & 1073741824) !== 0 && (Ee & 261930) === 0)
          ? ((Je = !0), (e.memoizedState = n))
          : ((e = gd()), (ye.lanes |= e), (Dn |= e), t);
  }
  function yf(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = V.T,
      R = {};
    ((V.T = R), $r(e, !1, t, n));
    try {
      var N = l(),
        Q = V.S;
      if (
        (Q !== null && Q(R, N), N !== null && typeof N == 'object' && typeof N.then == 'function')
      ) {
        var k = wv(N, a);
        Dl(e, t, k, Ct(e));
      } else Dl(e, t, a, Ct(e));
    } catch (ee) {
      Dl(e, t, { then: function () {}, status: 'rejected', reason: ee }, Ct());
    } finally {
      ((K.p = u), S !== null && R.types !== null && (S.types = R.types), (V.T = S));
    }
  }
  function jv() {}
  function Jr(e, t, n, a) {
    if (e.tag !== 5) throw Error(x(476));
    var l = pf(e).queue;
    yf(
      e,
      l,
      t,
      le,
      n === null
        ? jv
        : function () {
            return (Sf(e), n(a));
          }
    );
  }
  function pf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: le,
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
    (t.next === null && (t = e.alternate.memoizedState), Dl(e, t.next.queue, {}, Ct()));
  }
  function Fr() {
    return tt(Kl);
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
          var n = Ct();
          e = bn(n);
          var a = Cn(t, e, n);
          (a !== null && (mt(a, t, n), Cl(a, t, n)), (t = { cache: br() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Gv(e, t, n) {
    var a = Ct();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ki(e) ? bf(t, n) : ((n = dr(e, t, n, a)), n !== null && (mt(n, e, a), Cf(n, t, a))));
  }
  function Tf(e, t, n) {
    var a = Ct();
    Dl(e, t, n, a);
  }
  function Dl(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ki(e)) bf(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var S = t.lastRenderedState,
            R = u(S, n);
          if (((l.hasEagerState = !0), (l.eagerState = R), pt(R, S)))
            return (Ai(e, t, l, 0), Ne === null && Ri(), !1);
        } catch {
        } finally {
        }
      if (((n = dr(e, t, l, a)), n !== null)) return (mt(n, e, a), Cf(n, t, a), !0);
    }
    return !1;
  }
  function $r(e, t, n, a) {
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
      if (t) throw Error(x(479));
    } else ((t = dr(e, n, a, 2)), t !== null && mt(t, e, 2));
  }
  function Ki(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function bf(e, t) {
    ja = Yi = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Cf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), zo(e, n));
    }
  }
  var Ol = {
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
  Ol.useEffectEvent = Ve;
  var Rf = {
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
        var a = e();
        if (aa) {
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
        var a = ut();
        if (n !== void 0) {
          var l = n(t);
          if (aa) {
            vn(!0);
            try {
              n(t);
            } finally {
              vn(!1);
            }
          }
        } else l = t;
        return (
          (a.memoizedState = a.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (a.queue = e),
          (e = e.dispatch = Gv.bind(null, ye, e)),
          [a.memoizedState, e]
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
        var a = ye,
          l = ut();
        if (be) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), Ne === null)) throw Error(x(349));
          (Ee & 127) !== 0 || Zc(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          sf(Jc.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Ga(9, { destroy: void 0 }, Kc.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ut(),
          t = Ne.identifierPrefix;
        if (be) {
          var n = qt,
            a = Vt;
          ((n = (a & ~(1 << (32 - yt(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = Gi++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Bv++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
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
        return [typeof e == 'boolean' ? e : zl(e), t];
      },
      useSyncExternalStore: Qc,
      useId: xf,
      useHostTransitionStatus: Fr,
      useFormState: af,
      useActionState: af,
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
      return [typeof e == 'boolean' ? e : zl(e), t];
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
  function Wr(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : g({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Pr = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ct(),
        l = bn(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = Cn(e, l, a)),
        t !== null && (mt(t, e, a), Cl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ct(),
        l = bn(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = Cn(e, l, a)),
        t !== null && (mt(t, e, a), Cl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ct(),
        a = bn(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Cn(e, a, n)),
        t !== null && (mt(t, e, n), Cl(t, e, n)));
    },
  };
  function Mf(e, t, n, a, l, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gl(n, a) || !gl(l, u)
          : !0
    );
  }
  function zf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Pr.enqueueReplaceState(t, t.state, null));
  }
  function la(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var a in t) a !== 'ref' && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = g({}, n));
      for (var l in e) n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Df(e) {
    Ci(e);
  }
  function Of(e) {
    console.error(e);
  }
  function Uf(e) {
    Ci(e);
  }
  function Ji(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function wf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
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
  function Bf(e) {
    return ((e = bn(e)), (e.tag = 3), e);
  }
  function Nf(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          wf(t, n, a);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (wf(t, n, a),
          typeof l != 'function' && (On === null ? (On = new Set([this])) : On.add(this)));
        var R = a.stack;
        this.componentDidCatch(a.value, { componentStack: R !== null ? R : '' });
      });
  }
  function Vv(e, t, n, a, l) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && wa(t, n, l, !0), (n = xt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              wt === null ? iu() : n.alternate === null && qe === 0 && (qe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Ni
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Cs(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Ni
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  Cs(e, a, l)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Cs(e, a, l), iu(), !1);
    }
    if (be)
      return (
        (t = xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== pr && ((e = Error(x(422), { cause: a })), Sl(zt(e, n))))
          : (a !== pr && ((t = Error(x(423), { cause: a })), Sl(zt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = zt(a, n)),
            (l = Ir(e.stateNode, a, l)),
            Dr(e, l),
            qe !== 4 && (qe = 2)),
        !1
      );
    var u = Error(x(520), { cause: a });
    if (((u = zt(u, n)), jl === null ? (jl = [u]) : jl.push(u), qe !== 4 && (qe = 2), t === null))
      return !0;
    ((a = zt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = Ir(n.stateNode, a, e)),
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
              (l &= -l),
              (n.lanes |= l),
              (l = Bf(l)),
              Nf(l, e, n, a),
              Dr(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var es = Error(x(461)),
    Je = !1;
  function nt(e, t, n, a) {
    t.child = e === null ? Lc(t, null, n, a) : na(t, e.child, n, a);
  }
  function _f(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var S = {};
      for (var R in a) R !== 'ref' && (S[R] = a[R]);
    } else S = a;
    return (
      Pn(t),
      (a = _r(e, t, n, S, u, l)),
      (R = Hr()),
      e !== null && !Je
        ? (Lr(e, t, l), tn(e, t, l))
        : (be && R && gr(t), (t.flags |= 1), nt(e, t, a, l), t.child)
    );
  }
  function Hf(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !mr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Lf(e, t, u, a, l))
        : ((e = zi(n.type, null, a, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !ss(e, l))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : gl), n(S, a) && e.ref === t.ref))
        return tn(e, t, l);
    }
    return ((t.flags |= 1), (e = $t(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Lf(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (gl(u, a) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = a = u), ss(e, l))) (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), tn(e, t, l));
    }
    return ts(e, t, n, a, l);
  }
  function jf(e, t, n, a) {
    var l = a.children,
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
          for (a = t.child = e.child, l = 0; a !== null; )
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          a = l & ~u;
        } else ((a = 0), (t.child = null));
        return Yf(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && wi(t, u !== null ? u.cachePool : null),
          u !== null ? Gc(t, u) : Ur(),
          Vc(t));
      else return ((a = t.lanes = 536870912), Yf(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (wi(t, u.cachePool), Gc(t, u), An(), (t.memoizedState = null))
        : (e !== null && wi(t, null), Ur(), An());
    return (nt(e, t, l, n), t.child);
  }
  function Ul(e, t) {
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
  function Yf(e, t, n, a, l) {
    var u = Rr();
    return (
      (u = u === null ? null : { parent: Ze._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && wi(t, null),
      Ur(),
      Vc(t),
      e !== null && wa(e, t, a, !0),
      (t.childLanes = l),
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
      na(t, e.child, null, n),
      (e = Fi(t, t.pendingProps)),
      (e.flags |= 2),
      Et(t),
      (t.memoizedState = null),
      e
    );
  }
  function qv(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (be) {
        if (a.mode === 'hidden') return ((e = Fi(t, a)), (t.lanes = 536870912), Ul(null, e));
        if (
          (Br(t),
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
      return Fi(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((Br(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = Gf(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((Je || wa(e, t, n, !1), (l = (n & e.childLanes) !== 0), Je || l)) {
        if (((a = Ne), a !== null && ((S = Do(a, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Fn(e, S), mt(a, e, S), es);
        (iu(), (t = Gf(e, t, n)));
      } else
        ((e = u.treeContext),
          (Le = Bt(S.nextSibling)),
          (et = t),
          (be = !0),
          (Sn = null),
          (Ut = !1),
          e !== null && Rc(t, e),
          (t = Fi(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = $t(e.child, { mode: a.mode, children: a.children })),
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
  function ts(e, t, n, a, l) {
    return (
      Pn(t),
      (n = _r(e, t, n, a, void 0, l)),
      (a = Hr()),
      e !== null && !Je
        ? (Lr(e, t, l), tn(e, t, l))
        : (be && a && gr(t), (t.flags |= 1), nt(e, t, n, l), t.child)
    );
  }
  function Vf(e, t, n, a, l, u) {
    return (
      Pn(t),
      (t.updateQueue = null),
      (n = Xc(t, a, n, l)),
      qc(e),
      (a = Hr()),
      e !== null && !Je
        ? (Lr(e, t, u), tn(e, t, u))
        : (be && a && gr(t), (t.flags |= 1), nt(e, t, n, u), t.child)
    );
  }
  function qf(e, t, n, a, l) {
    if ((Pn(t), t.stateNode === null)) {
      var u = za,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = tt(S)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Pr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Mr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? tt(S) : za),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (Wr(t, n, S, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && Pr.enqueueReplaceState(u, u.state, null),
          Al(t, a, u, l),
          Rl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var R = t.memoizedProps,
        N = la(n, R);
      u.props = N;
      var Q = u.context,
        k = n.contextType;
      ((S = za), typeof k == 'object' && k !== null && (S = tt(k)));
      var ee = n.getDerivedStateFromProps;
      ((k = typeof ee == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (R = t.pendingProps !== R),
        k ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((R || Q !== S) && zf(t, u, a, S)),
        (Tn = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Al(t, a, u, l),
        Rl(),
        (Q = t.memoizedState),
        R || Z !== Q || Tn
          ? (typeof ee == 'function' && (Wr(t, n, ee, a), (Q = t.memoizedState)),
            (N = Tn || Mf(t, n, N, a, Z, Q, S))
              ? (k ||
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
            (u.context = S),
            (a = N))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        zr(e, t),
        (S = t.memoizedProps),
        (k = la(n, S)),
        (u.props = k),
        (ee = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (N = za),
        typeof Q == 'object' && Q !== null && (N = tt(Q)),
        (R = n.getDerivedStateFromProps),
        (Q = typeof R == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== ee || Z !== N) && zf(t, u, a, N)),
        (Tn = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Al(t, a, u, l),
        Rl());
      var J = t.memoizedState;
      S !== ee || Z !== J || Tn || (e !== null && e.dependencies !== null && Oi(e.dependencies))
        ? (typeof R == 'function' && (Wr(t, n, R, a), (J = t.memoizedState)),
          (k =
            Tn ||
            Mf(t, n, k, a, Z, J, N) ||
            (e !== null && e.dependencies !== null && Oi(e.dependencies)))
            ? (Q ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, J, N),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, J, N)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = J)),
          (u.props = a),
          (u.state = J),
          (u.context = N),
          (a = k))
        : (typeof u.componentDidUpdate != 'function' ||
            (S === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (S === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      $i(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = na(t, e.child, null, l)), (t.child = na(t, null, n, l)))
            : nt(e, t, n, l),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = tn(e, t, l)),
      e
    );
  }
  function Xf(e, t, n, a) {
    return (kn(), (t.flags |= 256), nt(e, t, n, a), t.child);
  }
  var ns = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function as(e) {
    return { baseLanes: e, cachePool: Uc() };
  }
  function ls(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= bt), e);
  }
  function Qf(e, t, n) {
    var a = t.pendingProps,
      l = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0),
      S && ((l = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (be) {
        if (
          (l ? Rn(t) : An(),
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
      var R = a.children;
      return (
        (a = a.fallback),
        l
          ? (An(),
            (l = t.mode),
            (R = ki({ mode: 'hidden', children: R }, l)),
            (a = $n(a, l, n, null)),
            (R.return = t),
            (a.return = t),
            (R.sibling = a),
            (t.child = R),
            (a = t.child),
            (a.memoizedState = as(n)),
            (a.childLanes = ls(e, S, n)),
            (t.memoizedState = ns),
            Ul(null, a))
          : (Rn(t), is(t, R))
      );
    }
    var N = e.memoizedState;
    if (N !== null && ((R = N.dehydrated), R !== null)) {
      if (u)
        t.flags & 256
          ? (Rn(t), (t.flags &= -257), (t = us(e, t, n)))
          : t.memoizedState !== null
            ? (An(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (An(),
              (R = a.fallback),
              (l = t.mode),
              (a = ki({ mode: 'visible', children: a.children }, l)),
              (R = $n(R, l, n, null)),
              (R.flags |= 2),
              (a.return = t),
              (R.return = t),
              (a.sibling = R),
              (t.child = a),
              na(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = as(n)),
              (a.childLanes = ls(e, S, n)),
              (t.memoizedState = ns),
              (t = Ul(null, a)));
      else if ((Rn(t), Gs(R))) {
        if (((S = R.nextSibling && R.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (a = Error(x(419))),
          (a.stack = ''),
          (a.digest = S),
          Sl({ value: a, source: null, stack: null }),
          (t = us(e, t, n)));
      } else if ((Je || wa(e, t, n, !1), (S = (n & e.childLanes) !== 0), Je || S)) {
        if (((S = Ne), S !== null && ((a = Do(S, n)), a !== 0 && a !== N.retryLane)))
          throw ((N.retryLane = a), Fn(e, a), mt(S, e, a), es);
        (Ys(R) || iu(), (t = us(e, t, n)));
      } else
        Ys(R)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = N.treeContext),
            (Le = Bt(R.nextSibling)),
            (et = t),
            (be = !0),
            (Sn = null),
            (Ut = !1),
            e !== null && Rc(t, e),
            (t = is(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (An(),
        (R = a.fallback),
        (l = t.mode),
        (N = e.child),
        (Q = N.sibling),
        (a = $t(N, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = N.subtreeFlags & 65011712),
        Q !== null ? (R = $t(Q, R)) : ((R = $n(R, l, n, null)), (R.flags |= 2)),
        (R.return = t),
        (a.return = t),
        (a.sibling = R),
        (t.child = a),
        Ul(null, a),
        (a = t.child),
        (R = e.child.memoizedState),
        R === null
          ? (R = as(n))
          : ((l = R.cachePool),
            l !== null
              ? ((N = Ze._currentValue), (l = l.parent !== N ? { parent: N, pool: N } : l))
              : (l = Uc()),
            (R = { baseLanes: R.baseLanes | n, cachePool: l })),
        (a.memoizedState = R),
        (a.childLanes = ls(e, S, n)),
        (t.memoizedState = ns),
        Ul(e.child, a))
      : (Rn(t),
        (n = e.child),
        (e = n.sibling),
        (n = $t(n, { mode: 'visible', children: a.children })),
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
      na(t, e.child, null, n),
      (e = is(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Er(e.return, t, n));
  }
  function rs(e, t, n, a, l, u) {
    var S = e.memoizedState;
    S === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
          treeForkCount: u,
        })
      : ((S.isBackwards = t),
        (S.rendering = null),
        (S.renderingStartTime = 0),
        (S.last = a),
        (S.tail = n),
        (S.tailMode = l),
        (S.treeForkCount = u));
  }
  function Kf(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    a = a.children;
    var S = Xe.current,
      R = (S & 2) !== 0;
    if (
      (R ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      W(Xe, S),
      nt(e, t, a, n),
      (a = be ? pl : 0),
      !R && e !== null && (e.flags & 128) !== 0)
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
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && ji(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          rs(t, !1, l, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ji(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        rs(t, !0, n, null, u, a);
        break;
      case 'together':
        rs(t, !1, null, null, void 0, a);
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
        if ((wa(e, t, n, !1), (n & t.childLanes) === 0)) return null;
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
        if (t.memoizedState !== null) return ((t.flags |= 128), Br(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Rn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Qf(e, t, n)
              : (Rn(t), (e = tn(e, t, n)), e !== null ? e.sibling : null);
        Rn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (wa(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return Kf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          W(Xe, Xe.current),
          a)
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
    else ((Je = !1), be && (t.flags & 1048576) !== 0 && Cc(t, pl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = ea(t.elementType)), (t.type = e), typeof e == 'function'))
            mr(e)
              ? ((a = la(e, a)), (t.tag = 1), (t = qf(null, t, e, a, n)))
              : ((t.tag = 0), (t = ts(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === _) {
                ((t.tag = 11), (t = _f(null, t, e, a, n)));
                break e;
              } else if (l === z) {
                ((t.tag = 14), (t = Hf(null, t, e, a, n)));
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
        return ((a = t.type), (l = la(a, t.pendingProps)), qf(e, t, a, l, n));
      case 3:
        e: {
          if ((he(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((l = u.element), zr(e, t), Al(t, a, null, n));
          var S = t.memoizedState;
          if (
            ((a = S.cache),
            En(t, Ze, a),
            a !== u.cache && Tr(t, [Ze], n, !0),
            Rl(),
            (a = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Xf(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = zt(Error(x(424)), t)), Sl(l), (t = Xf(e, t, a, n)));
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
                Le = Bt(e.firstChild),
                  et = t,
                  be = !0,
                  Sn = null,
                  Ut = !0,
                  n = Lc(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((kn(), a === l)) {
              t = tn(e, t, n);
              break e;
            }
            nt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          $i(e, t),
          e === null
            ? (n = lm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : be ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = du(ne.current).createElement(n)),
                (a[Ie] = t),
                (a[rt] = e),
                at(a, n, e),
                ke(a),
                (t.stateNode = a))
            : (t.memoizedState = lm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          De(t),
          e === null &&
            be &&
            ((a = t.stateNode = tm(t.type, t.pendingProps, ne.current)),
            (et = t),
            (Ut = !0),
            (l = Le),
            Nn(t.type) ? ((Vs = l), (Le = Bt(a.firstChild))) : (Le = l)),
          nt(e, t, t.pendingProps.children, n),
          $i(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            be &&
            ((l = a = Le) &&
              ((a = S0(a, t.type, t.pendingProps, Ut)),
              a !== null
                ? ((t.stateNode = a), (et = t), (Le = Bt(a.firstChild)), (Ut = !1), (l = !0))
                : (l = !1)),
            l || xn(t)),
          De(t),
          (l = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Hs(l, u) ? (a = null) : S !== null && Hs(l, S) && (t.flags |= 32),
          t.memoizedState !== null && ((l = _r(e, t, Nv, null, null, n)), (Kl._currentValue = l)),
          $i(e, t),
          nt(e, t, a, n),
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
          (a = t.pendingProps),
          e === null ? (t.child = na(t, null, a, n)) : nt(e, t, a, n),
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
        return ((a = t.pendingProps), En(t, t.type, a.value), nt(e, t, a.children, n), t.child);
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          Pn(t),
          (l = tt(l)),
          (a = a(l)),
          (t.flags |= 1),
          nt(e, t, a, n),
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
          (a = tt(Ze)),
          e === null
            ? ((l = Rr()),
              l === null &&
                ((l = Ne),
                (u = br()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: a, cache: l }),
              Mr(t),
              En(t, Ze, l))
            : ((e.lanes & n) !== 0 && (zr(e, t), Al(t, null, null, n), Rl()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  En(t, Ze, a))
                : ((a = u.cache), En(t, Ze, a), a !== l.cache && Tr(t, [Ze], n, !0))),
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
  function os(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (xd()) e.flags |= 8192;
        else throw ((ta = Ni), Ar);
    } else e.flags &= -16777217;
  }
  function Ff(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !om(t)))
      if (xd()) e.flags |= 8192;
      else throw ((ta = Ni), Ar);
  }
  function Wi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Ao() : 536870912), (e.lanes |= t), (Qa |= t)));
  }
  function wl(e, t) {
    if (!be)
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
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function Qv(e, t, n) {
    var a = t.pendingProps;
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
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Pt(Ze),
          ge(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ua(t)
              ? nn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sr())),
          je(t),
          null
        );
      case 26:
        var l = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (nn(t), u !== null ? (je(t), Ff(t, u)) : (je(t), os(t, l, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (nn(t), je(t), Ff(t, u))
                : (je(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && nn(t), je(t), os(t, l, e, a, n)),
          null
        );
      case 27:
        if ((Oe(t), (n = ne.current), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && nn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (je(t), null);
          }
          ((e = ae.current), Ua(t) ? Ac(t) : ((e = tm(l, a, n)), (t.stateNode = e), nn(t)));
        }
        return (je(t), null);
      case 5:
        if ((Oe(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && nn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (je(t), null);
          }
          if (((u = ae.current), Ua(t))) Ac(t);
          else {
            var S = du(ne.current);
            switch (u) {
              case 1:
                u = S.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                u = S.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    u = S.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    u = S.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                    break;
                  case 'script':
                    ((u = S.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string'
                        ? S.createElement('select', { is: a.is })
                        : S.createElement('select')),
                      a.multiple ? (u.multiple = !0) : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? S.createElement(l, { is: a.is })
                        : S.createElement(l);
                }
            }
            ((u[Ie] = t), (u[rt] = a));
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
            e: switch ((at(u, l, a), l)) {
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
            a && nn(t);
          }
        }
        return (je(t), os(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && nn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ne.current), Ua(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (l = et), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((e[Ie] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Qd(e.nodeValue, n)
              )),
              e || xn(t, !0));
          } else ((e = du(e).createTextNode(a)), (e[Ie] = t), (t.stateNode = e));
        }
        return (je(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Ua(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
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
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = Ua(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(x(317));
              l[Ie] = t;
            } else (kn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (je(t), (l = !1));
          } else
            ((l = Sr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return (
          Et(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (l = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (l = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== l && (a.flags |= 2048)),
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
        if (($(Xe), (a = t.memoizedState), a === null)) return (je(t), null);
        if (((l = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (l) wl(a, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ji(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      wl(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Wi(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Ec(n, e), (n = n.sibling));
                  return (W(Xe, (Xe.current & 1) | 2), be && kt(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              lt() > nu &&
              ((t.flags |= 128), (l = !0), wl(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = ji(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Wi(t, e),
                wl(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !be)
              )
                return (je(t), null);
            } else
              2 * lt() - a.renderingStartTime > nu &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), wl(a, !1), (t.lanes = 4194304));
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
            (n = Xe.current),
            W(Xe, l ? (n & 1) | 2 : n & 1),
            be && kt(t, a.treeForkCount),
            e)
          : (je(t), null);
      case 22:
      case 23:
        return (
          Et(t),
          wr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
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
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
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
          wr(),
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
        (Et(t), wr(), e !== null && $(In));
        break;
      case 24:
        Pt(Ze);
    }
  }
  function Bl(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create,
              S = n.inst;
            ((a = u()), (S.destroy = a));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (R) {
      ze(t, t.return, R);
    }
  }
  function Mn(e, t, n) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var S = a.inst,
              R = S.destroy;
            if (R !== void 0) {
              ((S.destroy = void 0), (l = t));
              var N = n,
                Q = R;
              try {
                Q();
              } catch (k) {
                ze(l, N, k);
              }
            }
          }
          a = a.next;
        } while (a !== u);
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
      } catch (a) {
        ze(e, e.return, a);
      }
    }
  }
  function Wf(e, t, n) {
    ((n.props = la(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      ze(e, t, a);
    }
  }
  function Nl(e, t) {
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
    } catch (l) {
      ze(e, t, l);
    }
  }
  function Xt(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (l) {
          ze(e, t, l);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (l) {
          ze(e, t, l);
        }
      else n.current = null;
  }
  function Pf(e) {
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
    } catch (l) {
      ze(e, e.return, l);
    }
  }
  function cs(e, t, n) {
    try {
      var a = e.stateNode;
      (m0(a, e.type, n, t), (a[rt] = t));
    } catch (l) {
      ze(e, e.return, l);
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
            n != null || t.onclick !== null || (t.onclick = Jt)));
    else if (
      a !== 4 &&
      (a === 27 && Nn(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (ds(e, t, n), e = e.sibling; e !== null; ) (ds(e, t, n), (e = e.sibling));
  }
  function Pi(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && Nn(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Pi(e, t, n), e = e.sibling; e !== null; ) (Pi(e, t, n), (e = e.sibling));
  }
  function ed(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      (at(t, a, n), (t[Ie] = e), (t[rt] = n));
    } catch (u) {
      ze(e, e.return, u);
    }
  }
  var an = !1,
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
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var S = 0,
              R = -1,
              N = -1,
              Q = 0,
              k = 0,
              ee = e,
              Z = null;
            t: for (;;) {
              for (
                var J;
                ee !== n || (l !== 0 && ee.nodeType !== 3) || (R = S + l),
                  ee !== u || (a !== 0 && ee.nodeType !== 3) || (N = S + a),
                  ee.nodeType === 3 && (S += ee.nodeValue.length),
                  (J = ee.firstChild) !== null;
              )
                ((Z = ee), (ee = J));
              for (;;) {
                if (ee === e) break t;
                if (
                  (Z === n && ++Q === l && (R = S),
                  Z === u && ++k === a && (N = S),
                  (J = ee.nextSibling) !== null)
                )
                  break;
                ((ee = Z), (Z = ee.parentNode));
              }
              ee = J;
            }
            n = R === -1 || N === -1 ? null : { start: R, end: N };
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
                for (n = 0; n < e.length; n++) ((l = e[n]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (n = t),
                  (l = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = n.stateNode));
                try {
                  var se = la(n.type, l);
                  ((e = a.getSnapshotBeforeUpdate(se, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
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
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (un(e, n), a & 4 && Bl(5, n));
        break;
      case 1:
        if ((un(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              ze(n, n.return, S);
            }
          else {
            var l = la(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              ze(n, n.return, S);
            }
          }
        (a & 64 && kf(n), a & 512 && Nl(n, n.return));
        break;
      case 3:
        if ((un(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
        t === null && a & 4 && ed(n);
      case 26:
      case 5:
        (un(e, n), t === null && a & 4 && Pf(n), a & 512 && Nl(n, n.return));
        break;
      case 12:
        un(e, n);
        break;
      case 31:
        (un(e, n), a & 4 && id(e, n));
        break;
      case 13:
        (un(e, n),
          a & 4 && ud(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = t0.bind(null, n)), E0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || an), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Fe), (l = an));
          var u = Fe;
          ((an = a),
            (Fe = t) && !u ? rn(e, n, (n.subtreeFlags & 8772) !== 0) : un(e, n),
            (an = l),
            (Fe = u));
        }
        break;
      case 30:
        break;
      default:
        un(e, n);
    }
  }
  function ad(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ad(t)),
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
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) (ld(e, t, n), (n = n.sibling));
  }
  function ld(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == 'function')
      try {
        gt.onCommitFiberUnmount(ll, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Fe || Xt(n, t),
          ln(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Fe || Xt(n, t);
        var a = Ye,
          l = ot;
        (Nn(n.type) && ((Ye = n.stateNode), (ot = !1)),
          ln(e, t, n),
          Xl(n.stateNode),
          (Ye = a),
          (ot = l));
        break;
      case 5:
        Fe || Xt(n, t);
      case 6:
        if (((a = Ye), (l = ot), (Ye = null), ln(e, t, n), (Ye = a), (ot = l), Ye !== null))
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
              Pa(e))
            : kd(Ye, n.stateNode));
        break;
      case 4:
        ((a = Ye),
          (l = ot),
          (Ye = n.stateNode.containerInfo),
          (ot = !0),
          ln(e, t, n),
          (Ye = a),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Mn(2, n, t), Fe || Mn(4, n, t), ln(e, t, n));
        break;
      case 1:
        (Fe ||
          (Xt(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Wf(n, t, a)),
          ln(e, t, n));
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        ((Fe = (a = Fe) || n.memoizedState !== null), ln(e, t, n), (Fe = a));
        break;
      default:
        ln(e, t, n);
    }
  }
  function id(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Pa(e);
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
        Pa(e);
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
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = n0.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          u = e,
          S = t,
          R = S;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 27:
              if (Nn(R.type)) {
                ((Ye = R.stateNode), (ot = !1));
                break e;
              }
              break;
            case 5:
              ((Ye = R.stateNode), (ot = !1));
              break e;
            case 3:
            case 4:
              ((Ye = R.stateNode.containerInfo), (ot = !0));
              break e;
          }
          R = R.return;
        }
        if (Ye === null) throw Error(x(160));
        (ld(u, S, l),
          (Ye = null),
          (ot = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (rd(t, e), (t = t.sibling));
  }
  var Lt = null;
  function rd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ct(t, e), ft(e), a & 4 && (Mn(3, e, e.return), Bl(3, e), Mn(5, e, e.return)));
        break;
      case 1:
        (ct(t, e),
          ft(e),
          a & 512 && (Fe || n === null || Xt(n, n.return)),
          a & 64 &&
            an &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = Lt;
        if ((ct(t, e), ft(e), a & 512 && (Fe || n === null || Xt(n, n.return)), a & 4)) {
          var u = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type), (n = e.memoizedProps), (l = l.ownerDocument || l));
                  t: switch (a) {
                    case 'title':
                      ((u = l.getElementsByTagName('title')[0]),
                        (!u ||
                          u[rl] ||
                          u[Ie] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = l.createElement(a)),
                          l.head.insertBefore(u, l.querySelector('head > title'))),
                        at(u, a, n),
                        (u[Ie] = e),
                        ke(u),
                        (a = u));
                      break e;
                    case 'link':
                      var S = rm('link', 'href', l).get(a + (n.href || ''));
                      if (S) {
                        for (var R = 0; R < S.length; R++)
                          if (
                            ((u = S[R]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            S.splice(R, 1);
                            break t;
                          }
                      }
                      ((u = l.createElement(a)), at(u, a, n), l.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = rm('meta', 'content', l).get(a + (n.content || '')))) {
                        for (R = 0; R < S.length; R++)
                          if (
                            ((u = S[R]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            S.splice(R, 1);
                            break t;
                          }
                      }
                      ((u = l.createElement(a)), at(u, a, n), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, a));
                  }
                  ((u[Ie] = e), ke(u), (a = u));
                }
                e.stateNode = a;
              } else sm(l, e.type, e.stateNode);
            else e.stateNode = um(l, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? sm(l, e.type, e.stateNode) : um(l, a, e.memoizedProps))
              : a === null && e.stateNode !== null && cs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ct(t, e),
          ft(e),
          a & 512 && (Fe || n === null || Xt(n, n.return)),
          n !== null && a & 4 && cs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((ct(t, e), ft(e), a & 512 && (Fe || n === null || Xt(n, n.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            Ea(l, '');
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), cs(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (ms = !0));
        break;
      case 6:
        if ((ct(t, e), ft(e), a & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (se) {
            ze(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((vu = null),
          (l = Lt),
          (Lt = mu(t.containerInfo)),
          ct(t, e),
          (Lt = l),
          ft(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Pa(t.containerInfo);
          } catch (se) {
            ze(e, e.return, se);
          }
        ms && ((ms = !1), sd(e));
        break;
      case 4:
        ((a = Lt), (Lt = mu(e.stateNode.containerInfo)), ct(t, e), ft(e), (Lt = a));
        break;
      case 12:
        (ct(t, e), ft(e));
        break;
      case 31:
        (ct(t, e),
          ft(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
        break;
      case 13:
        (ct(t, e),
          ft(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (tu = lt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var N = n !== null && n.memoizedState !== null,
          Q = an,
          k = Fe;
        if (((an = Q || l), (Fe = k || N), ct(t, e), (Fe = k), (an = Q), ft(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || N || an || Fe || ia(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                N = n = t;
                try {
                  if (((u = N.stateNode), l))
                    ((S = u.style),
                      typeof S.setProperty == 'function'
                        ? S.setProperty('display', 'none', 'important')
                        : (S.display = 'none'));
                  else {
                    R = N.stateNode;
                    var ee = N.memoizedProps.style,
                      Z = ee != null && ee.hasOwnProperty('display') ? ee.display : null;
                    R.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (se) {
                  ze(N, N.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = l ? '' : N.memoizedProps;
                } catch (se) {
                  ze(N, N.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                N = t;
                try {
                  var J = N.stateNode;
                  l ? Wd(J, !0) : Wd(N.stateNode, !1);
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
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Ii(e, n))));
        break;
      case 19:
        (ct(t, e),
          ft(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
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
        for (var n, a = e.return; a !== null; ) {
          if (If(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = fs(e);
            Pi(e, u, l);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (Ea(S, ''), (n.flags &= -33));
            var R = fs(e);
            Pi(e, R, S);
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
  function ia(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Mn(4, t, t.return), ia(t));
          break;
        case 1:
          Xt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Wf(t, t.return, n), ia(t));
          break;
        case 27:
          Xl(t.stateNode);
        case 26:
        case 5:
          (Xt(t, t.return), ia(t));
          break;
        case 22:
          t.memoizedState === null && ia(t);
          break;
        case 30:
          ia(t);
          break;
        default:
          ia(t);
      }
      e = e.sibling;
    }
  }
  function rn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        l = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (rn(l, u, n), Bl(4, u));
          break;
        case 1:
          if ((rn(l, u, n), (a = u), (l = a.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (Q) {
              ze(a, a.return, Q);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var R = a.stateNode;
            try {
              var N = l.shared.hiddenCallbacks;
              if (N !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < N.length; l++) jc(N[l], R);
            } catch (Q) {
              ze(a, a.return, Q);
            }
          }
          (n && S & 64 && kf(u), Nl(u, u.return));
          break;
        case 27:
          ed(u);
        case 26:
        case 5:
          (rn(l, u, n), n && a === null && S & 4 && Pf(u), Nl(u, u.return));
          break;
        case 12:
          rn(l, u, n);
          break;
        case 31:
          (rn(l, u, n), n && S & 4 && id(l, u));
          break;
        case 13:
          (rn(l, u, n), n && S & 4 && ud(l, u));
          break;
        case 22:
          (u.memoizedState === null && rn(l, u, n), Nl(u, u.return));
          break;
        case 30:
          break;
        default:
          rn(l, u, n);
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
      e !== n && (e != null && e.refCount++, n != null && xl(n)));
  }
  function vs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && xl(e)));
  }
  function jt(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (od(e, t, n, a), (t = t.sibling));
  }
  function od(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jt(e, t, n, a), l & 2048 && Bl(9, t));
        break;
      case 1:
        jt(e, t, n, a);
        break;
      case 3:
        (jt(e, t, n, a),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && xl(e))));
        break;
      case 12:
        if (l & 2048) {
          (jt(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              R = u.onPostCommit;
            typeof R == 'function' &&
              R(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (N) {
            ze(t, t.return, N);
          }
        } else jt(e, t, n, a);
        break;
      case 31:
        jt(e, t, n, a);
        break;
      case 13:
        jt(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? jt(e, t, n, a)
              : _l(e, t)
            : u._visibility & 2
              ? jt(e, t, n, a)
              : ((u._visibility |= 2), Va(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && hs(S, t));
        break;
      case 24:
        (jt(e, t, n, a), l & 2048 && vs(t.alternate, t));
        break;
      default:
        jt(e, t, n, a);
    }
  }
  function Va(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        S = t,
        R = n,
        N = a,
        Q = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          (Va(u, S, R, N, l), Bl(8, S));
          break;
        case 23:
          break;
        case 22:
          var k = S.stateNode;
          (S.memoizedState !== null
            ? k._visibility & 2
              ? Va(u, S, R, N, l)
              : _l(u, S)
            : ((k._visibility |= 2), Va(u, S, R, N, l)),
            l && Q & 2048 && hs(S.alternate, S));
          break;
        case 24:
          (Va(u, S, R, N, l), l && Q & 2048 && vs(S.alternate, S));
          break;
        default:
          Va(u, S, R, N, l);
      }
      t = t.sibling;
    }
  }
  function _l(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (_l(n, a), l & 2048 && hs(a.alternate, a));
            break;
          case 24:
            (_l(n, a), l & 2048 && vs(a.alternate, a));
            break;
          default:
            _l(n, a);
        }
        t = t.sibling;
      }
  }
  var Hl = 8192;
  function qa(e, t, n) {
    if (e.subtreeFlags & Hl) for (e = e.child; e !== null; ) (cd(e, t, n), (e = e.sibling));
  }
  function cd(e, t, n) {
    switch (e.tag) {
      case 26:
        (qa(e, t, n),
          e.flags & Hl && e.memoizedState !== null && B0(n, Lt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        qa(e, t, n);
        break;
      case 3:
      case 4:
        var a = Lt;
        ((Lt = mu(e.stateNode.containerInfo)), qa(e, t, n), (Lt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Hl), (Hl = 16777216), qa(e, t, n), (Hl = a))
            : qa(e, t, n));
        break;
      default:
        qa(e, t, n);
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
  function Ll(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((We = a), md(a, e));
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
        (Ll(e), e.flags & 2048 && Mn(9, e, e.return));
        break;
      case 3:
        Ll(e);
        break;
      case 12:
        Ll(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), eu(e))
          : Ll(e);
        break;
      default:
        Ll(e);
    }
  }
  function eu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((We = a), md(a, e));
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
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          xl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (We = a));
      else
        e: for (n = e; We !== null; ) {
          a = We;
          var l = a.sibling,
            u = a.return;
          if ((ad(a), a === n)) {
            We = null;
            break e;
          }
          if (l !== null) {
            ((l.return = u), (We = l));
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
    Xa = !1,
    gs = !1,
    sn = 0,
    qe = 0,
    Dn = 0,
    ua = 0,
    ys = 0,
    bt = 0,
    Qa = 0,
    jl = null,
    dt = null,
    ps = !1,
    tu = 0,
    hd = 0,
    nu = 1 / 0,
    au = null,
    On = null,
    $e = 0,
    Un = null,
    Za = null,
    on = 0,
    Ss = 0,
    xs = null,
    vd = null,
    Yl = 0,
    Es = null;
  function Ct() {
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
      (Ka(e, 0), wn(e, Ee, bt, !1)),
      ul(e, n),
      ((Ae & 2) === 0 || e !== Ne) &&
        (e === Ne && ((Ae & 2) === 0 && (ua |= n), qe === 4 && wn(e, Ee, bt, !1)), Qt(e)));
  }
  function yd(e, t, n) {
    if ((Ae & 6) !== 0) throw Error(x(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || il(e, t),
      l = a ? Pv(e, t) : bs(e, t, !0),
      u = a;
    do {
      if (l === 0) {
        Xa && !a && wn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !kv(n))) {
          ((l = bs(e, t, !1)), (u = !1));
          continue;
        }
        if (l === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var S = 0;
          else
            ((S = e.pendingLanes & -536870913), (S = S !== 0 ? S : S & 536870912 ? 536870912 : 0));
          if (S !== 0) {
            t = S;
            e: {
              var R = e;
              l = jl;
              var N = R.current.memoizedState.isDehydrated;
              if ((N && (Ka(R, S).flags |= 256), (S = bs(R, S, !1)), S !== 2)) {
                if (gs && !N) {
                  ((R.errorRecoveryDisabledLanes |= u), (ua |= u), (l = 4));
                  break e;
                }
                ((u = dt), (dt = l), u !== null && (dt === null ? (dt = u) : dt.push.apply(dt, u)));
              }
              l = S;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Ka(e, 0), wn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = l), u)) {
            case 0:
            case 1:
              throw Error(x(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              wn(a, t, bt, !zn);
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
          if ((t & 62914560) === t && ((l = tu + 300 - lt()), 10 < l)) {
            if ((wn(a, t, bt, !zn), mi(a, 0, !0) !== 0)) break e;
            ((on = t),
              (a.timeoutHandle = Fd(
                pd.bind(null, a, n, dt, au, ps, t, bt, ua, Qa, zn, u, 'Throttled', -0, 0),
                l
              )));
            break e;
          }
          pd(a, n, dt, au, ps, t, bt, ua, Qa, zn, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Qt(e);
  }
  function pd(e, t, n, a, l, u, S, R, N, Q, k, ee, Z, J) {
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
      var se = (u & 62914560) === u ? tu - lt() : (u & 4194048) === u ? hd - lt() : 0;
      if (((se = N0(ee, se)), se !== null)) {
        ((on = u),
          (e.cancelPendingCommit = se(Ad.bind(null, e, t, u, n, a, l, S, R, N, k, ee, null, Z, J))),
          wn(e, u, S, !Q));
        return;
      }
    }
    Ad(e, t, u, n, a, l, S, R, N);
  }
  function kv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(u(), l)) return !1;
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
  function wn(e, t, n, a) {
    ((t &= ~ys),
      (t &= ~ua),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var l = t; 0 < l; ) {
      var u = 31 - yt(l),
        S = 1 << u;
      ((a[u] = -1), (l &= ~S));
    }
    n !== 0 && Mo(e, n, t);
  }
  function lu() {
    return (Ae & 6) === 0 ? (Gl(0), !1) : !0;
  }
  function Ts() {
    if (Se !== null) {
      if (Me === 0) var e = Se.return;
      else ((e = Se), (Wt = Wn = null), jr(e), (Ha = null), (Tl = 0), (e = Se));
      for (; e !== null; ) ($f(e.alternate, e), (e = e.return));
      Se = null;
    }
  }
  function Ka(e, t) {
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
      (Xa = il(e, t)),
      (gs = !1),
      (Qa = bt = ys = ua = Dn = qe = 0),
      (dt = jl = null),
      (ps = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - yt(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return ((sn = t), Ri(), n);
  }
  function Sd(e, t) {
    ((ye = null),
      (V.H = Ol),
      t === _a || t === Bi
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
        ? wt === null
        : (Ee & 62914560) === Ee || (Ee & 536870912) !== 0
          ? e === wt
          : !1;
  }
  function Ed() {
    var e = V.H;
    return ((V.H = Ol), e === null ? Ol : e);
  }
  function Td() {
    var e = V.A;
    return ((V.A = Fv), e);
  }
  function iu() {
    ((qe = 4),
      zn || ((Ee & 4194048) !== Ee && xt.current !== null) || (Xa = !0),
      ((Dn & 134217727) === 0 && (ua & 134217727) === 0) || Ne === null || wn(Ne, Ee, bt, !1));
  }
  function bs(e, t, n) {
    var a = Ae;
    Ae |= 2;
    var l = Ed(),
      u = Td();
    ((Ne !== e || Ee !== t) && ((au = null), Ka(e, t)), (t = !1));
    var S = qe;
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          var R = Se,
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
              if (((Me = 0), (Tt = null), Ja(e, R, N, Q), n && Xa)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Me), (Me = 0), (Tt = null), Ja(e, R, N, Q));
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
      (Ae = a),
      (V.H = l),
      (V.A = u),
      Se === null && ((Ne = null), (Ee = 0), Ri()),
      S
    );
  }
  function Wv() {
    for (; Se !== null; ) bd(Se);
  }
  function Pv(e, t) {
    var n = Ae;
    Ae |= 2;
    var a = Ed(),
      l = Td();
    Ne !== e || Ee !== t ? ((au = null), (nu = lt() + 500), Ka(e, t)) : (Xa = il(e, t));
    e: do
      try {
        if (Me !== 0 && Se !== null) {
          t = Se;
          var u = Tt;
          t: switch (Me) {
            case 1:
              ((Me = 0), (Tt = null), Ja(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (wc(u)) {
                ((Me = 0), (Tt = null), Cd(t));
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
              wc(u) ? ((Me = 0), (Tt = null), Cd(t)) : ((Me = 0), (Tt = null), Ja(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (Se.tag) {
                case 26:
                  S = Se.memoizedState;
                case 5:
                case 27:
                  var R = Se;
                  if (S ? om(S) : R.stateNode.complete) {
                    ((Me = 0), (Tt = null));
                    var N = R.sibling;
                    if (N !== null) Se = N;
                    else {
                      var Q = R.return;
                      Q !== null ? ((Se = Q), uu(Q)) : (Se = null);
                    }
                    break t;
                  }
              }
              ((Me = 0), (Tt = null), Ja(e, t, u, 5));
              break;
            case 6:
              ((Me = 0), (Tt = null), Ja(e, t, u, 6));
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
      (V.H = a),
      (V.A = l),
      (Ae = n),
      Se !== null ? 0 : ((Ne = null), (Ee = 0), Ri(), qe)
    );
  }
  function Iv() {
    for (; Se !== null && !ui(); ) bd(Se);
  }
  function bd(e) {
    var t = Jf(e.alternate, e, sn);
    ((e.memoizedProps = e.pendingProps), t === null ? uu(e) : (Se = t));
  }
  function Cd(e) {
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
  function Ja(e, t, n, a) {
    ((Wt = Wn = null), jr(t), (Ha = null), (Tl = 0));
    var l = t.return;
    try {
      if (Vv(e, l, t, n, Ee)) {
        ((qe = 1), Ji(e, zt(n, e.current)), (Se = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((Se = l), u);
      ((qe = 1), Ji(e, zt(n, e.current)), (Se = null));
      return;
    }
    t.flags & 32768
      ? (be || a === 1
          ? (e = !0)
          : Xa || (Ee & 536870912) !== 0
            ? (e = !1)
            : ((zn = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = xt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Rd(t, e))
      : uu(t);
  }
  function uu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rd(t, zn);
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
  function Rd(e, t) {
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
  function Ad(e, t, n, a, l, u, S, R, N) {
    e.cancelPendingCommit = null;
    do ru();
    while ($e !== 0);
    if ((Ae & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= fr),
        wh(e, n, u, S, R, N),
        e === Ne && ((Se = Ne = null), (Ee = 0)),
        (Za = t),
        (Un = e),
        (on = n),
        (Ss = u),
        (xs = l),
        (vd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            a0(ma, function () {
              return (Ud(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = V.T), (V.T = null), (l = K.p), (K.p = 2), (S = Ae), (Ae |= 4));
        try {
          Kv(e, t, n);
        } finally {
          ((Ae = S), (K.p = l), (V.T = a));
        }
      }
      (($e = 1), Md(), zd(), Dd());
    }
  }
  function Md() {
    if ($e === 1) {
      $e = 0;
      var e = Un,
        t = Za,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var a = K.p;
        K.p = 2;
        var l = Ae;
        Ae |= 4;
        try {
          rd(t, e);
          var u = _s,
            S = dc(e.containerInfo),
            R = u.focusedElem,
            N = u.selectionRange;
          if (S !== R && R && R.ownerDocument && fc(R.ownerDocument.documentElement, R)) {
            if (N !== null && ur(R)) {
              var Q = N.start,
                k = N.end;
              if ((k === void 0 && (k = Q), 'selectionStart' in R))
                ((R.selectionStart = Q), (R.selectionEnd = Math.min(k, R.value.length)));
              else {
                var ee = R.ownerDocument || document,
                  Z = (ee && ee.defaultView) || window;
                if (Z.getSelection) {
                  var J = Z.getSelection(),
                    se = R.textContent.length,
                    me = Math.min(N.start, se),
                    Be = N.end === void 0 ? me : Math.min(N.end, se);
                  !J.extend && me > Be && ((S = Be), (Be = me), (me = S));
                  var q = cc(R, me),
                    G = cc(R, Be);
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
                      me > Be
                        ? (J.addRange(X), J.extend(G.node, G.offset))
                        : (X.setEnd(G.node, G.offset), J.addRange(X)));
                  }
                }
              }
            }
            for (ee = [], J = R; (J = J.parentNode); )
              J.nodeType === 1 && ee.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
            for (typeof R.focus == 'function' && R.focus(), R = 0; R < ee.length; R++) {
              var P = ee[R];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((Su = !!Ns), (_s = Ns = null));
        } finally {
          ((Ae = l), (K.p = a), (V.T = n));
        }
      }
      ((e.current = t), ($e = 2));
    }
  }
  function zd() {
    if ($e === 2) {
      $e = 0;
      var e = Un,
        t = Za,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var a = K.p;
        K.p = 2;
        var l = Ae;
        Ae |= 4;
        try {
          nd(e, t.alternate, t);
        } finally {
          ((Ae = l), (K.p = a), (V.T = n));
        }
      }
      $e = 3;
    }
  }
  function Dd() {
    if ($e === 4 || $e === 3) {
      (($e = 0), ri());
      var e = Un,
        t = Za,
        n = on,
        a = vd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? ($e = 5)
        : (($e = 0), (Za = Un = null), Od(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (On = null),
        Vu(n),
        (t = t.stateNode),
        gt && typeof gt.onCommitFiberRoot == 'function')
      )
        try {
          gt.onCommitFiberRoot(ll, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = V.T), (l = K.p), (K.p = 2), (V.T = null));
        try {
          for (var u = e.onRecoverableError, S = 0; S < a.length; S++) {
            var R = a[S];
            u(R.value, { componentStack: R.stack });
          }
        } finally {
          ((V.T = t), (K.p = l));
        }
      }
      ((on & 3) !== 0 && ru(),
        Qt(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0 ? (e === Es ? Yl++ : ((Yl = 0), (Es = e))) : (Yl = 0),
        Gl(0));
    }
  }
  function Od(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), xl(t)));
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
      a = V.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (V.T = null), (n = xs), (xs = null));
      var u = Un,
        S = on;
      if ((($e = 0), (Za = Un = null), (on = 0), (Ae & 6) !== 0)) throw Error(x(331));
      var R = Ae;
      if (
        ((Ae |= 4),
        dd(u.current),
        od(u, u.current, S, n),
        (Ae = R),
        Gl(0, !1),
        gt && typeof gt.onPostCommitFiberRoot == 'function')
      )
        try {
          gt.onPostCommitFiberRoot(ll, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (V.T = a), Od(e, t));
    }
  }
  function wd(e, t, n) {
    ((t = zt(n, t)),
      (t = Ir(e.stateNode, t, 2)),
      (e = Cn(e, t, 2)),
      e !== null && (ul(e, 2), Qt(e)));
  }
  function ze(e, t, n) {
    if (e.tag === 3) wd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (On === null || !On.has(a)))
          ) {
            ((e = zt(n, e)),
              (n = Bf(2)),
              (a = Cn(t, n, 2)),
              a !== null && (Nf(n, a, t, e), ul(a, 2), Qt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new $v();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || ((gs = !0), l.add(n), (e = e0.bind(null, e, t, n)), t.then(e, e));
  }
  function e0(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ne === e &&
        (Ee & n) === n &&
        (qe === 4 || (qe === 3 && (Ee & 62914560) === Ee && 300 > lt() - tu)
          ? (Ae & 2) === 0 && Ka(e, 0)
          : (ys |= n),
        Qa === Ee && (Qa = 0)),
      Qt(e));
  }
  function Bd(e, t) {
    (t === 0 && (t = Ao()), (e = Fn(e, t)), e !== null && (ul(e, t), Qt(e)));
  }
  function t0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Bd(e, n));
  }
  function n0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(x(314));
    }
    (a !== null && a.delete(t), Bd(e, n));
  }
  function a0(e, t) {
    return da(e, t);
  }
  var su = null,
    Fa = null,
    Rs = !1,
    ou = !1,
    As = !1,
    Bn = 0;
  function Qt(e) {
    (e !== Fa && e.next === null && (Fa === null ? (su = Fa = e) : (Fa = Fa.next = e)),
      (ou = !0),
      Rs || ((Rs = !0), i0()));
  }
  function Gl(e, t) {
    if (!As && ou) {
      As = !0;
      do
        for (var n = !1, a = su; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var S = a.suspendedLanes,
                R = a.pingedLanes;
              ((u = (1 << (31 - yt(42 | e) + 1)) - 1),
                (u &= l & ~(S & ~R)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Ld(a, u));
          } else
            ((u = Ee),
              (u = mi(
                a,
                a === Ne ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || il(a, u) || ((n = !0), Ld(a, u)));
          a = a.next;
        }
      while (n);
      As = !1;
    }
  }
  function l0() {
    Nd();
  }
  function Nd() {
    ou = Rs = !1;
    var e = 0;
    Bn !== 0 && v0() && (e = Bn);
    for (var t = lt(), n = null, a = su; a !== null; ) {
      var l = a.next,
        u = _d(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (su = l) : (n.next = l), l === null && (Fa = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (ou = !0)),
        (a = l));
    }
    (($e !== 0 && $e !== 5) || Gl(e), Bn !== 0 && (Bn = 0));
  }
  function _d(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - yt(u),
        R = 1 << S,
        N = l[S];
      (N === -1
        ? ((R & n) === 0 || (R & a) !== 0) && (l[S] = Uh(R, t))
        : N <= t && (e.expiredLanes |= R),
        (u &= ~R));
    }
    if (
      ((t = Ne),
      (n = Ee),
      (n = mi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Me === 2 || Me === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Gn(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || il(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Gn(a), Vu(n))) {
        case 2:
        case 8:
          n = oi;
          break;
        case 32:
          n = ma;
          break;
        case 268435456:
          n = qn;
          break;
        default:
          n = ma;
      }
      return (
        (a = Hd.bind(null, e)),
        (n = da(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Gn(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Hd(e, t) {
    if ($e !== 0 && $e !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (ru() && e.callbackNode !== n) return null;
    var a = Ee;
    return (
      (a = mi(e, e === Ne ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (yd(e, a, t),
          _d(e, lt()),
          e.callbackNode != null && e.callbackNode === n ? Hd.bind(null, e) : null)
    );
  }
  function Ld(e, t) {
    if (ru()) return null;
    yd(e, t, !0);
  }
  function i0() {
    y0(function () {
      (Ae & 6) !== 0 ? da(Vn, l0) : Nd();
    });
  }
  function Ms() {
    if (Bn === 0) {
      var e = Ba;
      (e === 0 && ((e = ci), (ci <<= 1), (ci & 261888) === 0 && (ci = 256)), (Bn = e));
    }
    return Bn;
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
  function u0(e, t, n, a, l) {
    if (t === 'submit' && n && n.stateNode === l) {
      var u = jd((l[rt] || null).action),
        S = a.submitter;
      S &&
        ((t = (t = S[rt] || null) ? jd(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var R = new Ei('action', 'action', null, a, l);
      e.push({
        event: R,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Bn !== 0) {
                  var N = S ? Yd(l, S) : new FormData(l);
                  Jr(n, { pending: !0, data: N, method: l.method, action: u }, null, N);
                }
              } else
                typeof u == 'function' &&
                  (R.preventDefault(),
                  (N = S ? Yd(l, S) : new FormData(l)),
                  Jr(n, { pending: !0, data: N, method: l.method, action: u }, u, N));
            },
            currentTarget: l,
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
    Ht(Cv, 'onTransitionRun'),
    Ht(Rv, 'onTransitionStart'),
    Ht(Av, 'onTransitionCancel'),
    Ht(pc, 'onTransitionEnd'),
    Sa('onMouseEnter', ['mouseout', 'mouseover']),
    Sa('onMouseLeave', ['mouseout', 'mouseover']),
    Sa('onPointerEnter', ['pointerout', 'pointerover']),
    Sa('onPointerLeave', ['pointerout', 'pointerover']),
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
  var Vl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    o0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Vl)
    );
  function Gd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var S = a.length - 1; 0 <= S; S--) {
            var R = a[S],
              N = R.instance,
              Q = R.currentTarget;
            if (((R = R.listener), N !== u && l.isPropagationStopped())) break e;
            ((u = R), (l.currentTarget = Q));
            try {
              u(l);
            } catch (k) {
              Ci(k);
            }
            ((l.currentTarget = null), (u = N));
          }
        else
          for (S = 0; S < a.length; S++) {
            if (
              ((R = a[S]),
              (N = R.instance),
              (Q = R.currentTarget),
              (R = R.listener),
              N !== u && l.isPropagationStopped())
            )
              break e;
            ((u = R), (l.currentTarget = Q));
            try {
              u(l);
            } catch (k) {
              Ci(k);
            }
            ((l.currentTarget = null), (u = N));
          }
      }
    }
  }
  function xe(e, t) {
    var n = t[qu];
    n === void 0 && (n = t[qu] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Vd(t, e, 2, !1), n.add(a));
  }
  function Os(e, t, n) {
    var a = 0;
    (t && (a |= 4), Vd(n, e, a, t));
  }
  var cu = '_reactListening' + Math.random().toString(36).slice(2);
  function Us(e) {
    if (!e[cu]) {
      ((e[cu] = !0),
        Bo.forEach(function (n) {
          n !== 'selectionchange' && (o0.has(n) || Os(n, !1, e), Os(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cu] || ((t[cu] = !0), Os('selectionchange', !1, t));
    }
  }
  function Vd(e, t, n, a) {
    switch (gm(t)) {
      case 2:
        var l = L0;
        break;
      case 8:
        l = j0;
        break;
      default:
        l = Ks;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Wu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ws(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var S = a.tag;
        if (S === 3 || S === 4) {
          var R = a.stateNode.containerInfo;
          if (R === l) break;
          if (S === 4)
            for (S = a.return; S !== null; ) {
              var N = S.tag;
              if ((N === 3 || N === 4) && S.stateNode.containerInfo === l) return;
              S = S.return;
            }
          for (; R !== null; ) {
            if (((S = ga(R)), S === null)) return;
            if (((N = S.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
              a = u = S;
              continue e;
            }
            R = R.parentNode;
          }
        }
        a = a.return;
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
            Be = !me && (e === 'scroll' || e === 'scrollend'),
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
                ((P = ol(G, q)), P != null && me.push(ql(G, P, X))),
              Be)
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
            Z && n !== Fu && (se = n.relatedTarget || n.fromElement) && (ga(se) || se[va]))
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
                (se = se ? ga(se) : null),
                se !== null &&
                  ((Be = i(se)), (me = se.tag), se !== Be || (me !== 5 && me !== 27 && me !== 6)) &&
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
              (Be = J == null ? Z : sl(J)),
              (X = se == null ? Z : sl(se)),
              (Z = new me(P, G + 'leave', J, n, k)),
              (Z.target = Be),
              (Z.relatedTarget = X),
              (P = null),
              ga(k) === Q &&
                ((me = new me(q, G + 'enter', se, n, k)),
                (me.target = X),
                (me.relatedTarget = Be),
                (P = me)),
              (Be = P),
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
              se !== null && Be !== null && qd(ee, Be, se, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? sl(Q) : window),
            (J = Z.nodeName && Z.nodeName.toLowerCase()),
            J === 'select' || (J === 'input' && Z.type === 'file'))
          )
            var Ce = lc;
          else if (nc(Z))
            if (ic) Ce = Ev;
            else {
              Ce = Sv;
              var ce = pv;
            }
          else
            ((J = Z.nodeName),
              !J || J.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && Ju(Q.elementType) && (Ce = lc)
                : (Ce = xv));
          if (Ce && (Ce = Ce(e, Q))) {
            ac(ee, Ce, n, k);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              Ku(Z, 'number', Z.value));
        }
        switch (((ce = Q ? sl(Q) : window), e)) {
          case 'focusin':
            (nc(ce) || ce.contentEditable === 'true') && ((Ra = ce), (rr = Q), (yl = null));
            break;
          case 'focusout':
            yl = rr = Ra = null;
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
        if (ar)
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
          Ca
            ? ec(e, n) && (Te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Te = 'onCompositionStart');
        (Te &&
          (Wo &&
            n.locale !== 'ko' &&
            (Ca || Te !== 'onCompositionStart'
              ? Te === 'onCompositionEnd' && Ca && (pe = Ko())
              : ((yn = k), (Pu = 'value' in yn ? yn.value : yn.textContent), (Ca = !0))),
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
  function ql(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fu(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          u === null ||
          ((l = ol(e, n)),
          l != null && a.unshift(ql(e, l, u)),
          (l = ol(e, t)),
          l != null && a.push(ql(e, l, u))),
        e.tag === 3)
      )
        return a;
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
  function qd(e, t, n, a, l) {
    for (var u = t._reactName, S = []; n !== null && n !== a; ) {
      var R = n,
        N = R.alternate,
        Q = R.stateNode;
      if (((R = R.tag), N !== null && N === a)) break;
      ((R !== 5 && R !== 26 && R !== 27) ||
        Q === null ||
        ((N = Q),
        l
          ? ((Q = ol(n, u)), Q != null && S.unshift(ql(n, Q, N)))
          : l || ((Q = ol(n, u)), Q != null && S.push(ql(n, Q, N)))),
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
  function we(e, t, n, a, l, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Ea(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && Ea(e, '' + a);
        break;
      case 'className':
        vi(e, 'class', a);
        break;
      case 'tabIndex':
        vi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        vi(e, n, a);
        break;
      case 'style':
        Xo(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          vi(e, 'data', a);
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
        ((a = yi('' + a)), e.setAttribute(n, a));
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
              ? (t !== 'input' && we(e, t, 'name', l.name, l, null),
                we(e, t, 'formEncType', l.formEncType, l, null),
                we(e, t, 'formMethod', l.formMethod, l, null),
                we(e, t, 'formTarget', l.formTarget, l, null))
              : (we(e, t, 'encType', l.encType, l, null),
                we(e, t, 'method', l.method, l, null),
                we(e, t, 'target', l.target, l, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = yi('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Jt);
        break;
      case 'onScroll':
        a != null && xe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && xe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(x(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(x(60));
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
        ((n = yi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (xe('beforetoggle', e), xe('toggle', e), hi(e, 'popover', a));
        break;
      case 'xlinkActuate':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Kt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Kt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        hi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Gh.get(n) || n), hi(e, n, a));
    }
  }
  function Bs(e, t, n, a, l, u) {
    switch (n) {
      case 'style':
        Xo(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(x(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(x(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? Ea(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Ea(e, '' + a);
        break;
      case 'onScroll':
        a != null && xe('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && xe('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Jt);
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
              ((l = n.endsWith('Capture')),
              (t = n.slice(2, l ? n.length - 7 : void 0)),
              (u = e[rt] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, l),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, l));
              break e;
            }
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : hi(e, n, a);
          }
    }
  }
  function at(e, t, n) {
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
        var a = !1,
          l = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var S = n[u];
            if (S != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  l = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(x(137, t));
                default:
                  we(e, t, u, S, n, null);
              }
          }
        (l && we(e, t, 'srcSet', n.srcSet, n, null), a && we(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        xe('invalid', e);
        var R = (u = S = l = null),
          N = null,
          Q = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var k = n[a];
            if (k != null)
              switch (a) {
                case 'name':
                  l = k;
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
                  R = k;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (k != null) throw Error(x(137, t));
                  break;
                default:
                  we(e, t, a, k, n, null);
              }
          }
        Yo(e, u, R, N, Q, S, l, !1);
        return;
      case 'select':
        (xe('invalid', e), (a = S = u = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((R = n[l]), R != null))
            switch (l) {
              case 'value':
                u = R;
                break;
              case 'defaultValue':
                S = R;
                break;
              case 'multiple':
                a = R;
              default:
                we(e, t, l, R, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!a),
          t != null ? xa(e, !!a, t, !1) : n != null && xa(e, !!a, n, !0));
        return;
      case 'textarea':
        (xe('invalid', e), (u = l = a = null));
        for (S in n)
          if (n.hasOwnProperty(S) && ((R = n[S]), R != null))
            switch (S) {
              case 'value':
                a = R;
                break;
              case 'defaultValue':
                l = R;
                break;
              case 'children':
                u = R;
                break;
              case 'dangerouslySetInnerHTML':
                if (R != null) throw Error(x(91));
                break;
              default:
                we(e, t, S, R, n, null);
            }
        Vo(e, a, l, u);
        return;
      case 'option':
        for (N in n)
          if (n.hasOwnProperty(N) && ((a = n[N]), a != null))
            switch (N) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                we(e, t, N, a, n, null);
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
        for (a = 0; a < Vl.length; a++) xe(Vl[a], e);
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
          if (n.hasOwnProperty(Q) && ((a = n[Q]), a != null))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(x(137, t));
              default:
                we(e, t, Q, a, n, null);
            }
        return;
      default:
        if (Ju(t)) {
          for (k in n)
            n.hasOwnProperty(k) && ((a = n[k]), a !== void 0 && Bs(e, t, k, a, n, void 0));
          return;
        }
    }
    for (R in n) n.hasOwnProperty(R) && ((a = n[R]), a != null && we(e, t, R, a, n, null));
  }
  function m0(e, t, n, a) {
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
        var l = null,
          u = null,
          S = null,
          R = null,
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
                a.hasOwnProperty(J) || we(e, t, J, null, a, ee);
            }
        }
        for (var Z in a) {
          var J = a[Z];
          if (((ee = n[Z]), a.hasOwnProperty(Z) && (J != null || ee != null)))
            switch (Z) {
              case 'type':
                u = J;
                break;
              case 'name':
                l = J;
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
                R = J;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (J != null) throw Error(x(137, t));
                break;
              default:
                J !== ee && we(e, t, Z, J, a, ee);
            }
        }
        Zu(e, S, R, N, Q, k, u, l);
        return;
      case 'select':
        J = S = R = Z = null;
        for (u in n)
          if (((N = n[u]), n.hasOwnProperty(u) && N != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                J = N;
              default:
                a.hasOwnProperty(u) || we(e, t, u, null, a, N);
            }
        for (l in a)
          if (((u = a[l]), (N = n[l]), a.hasOwnProperty(l) && (u != null || N != null)))
            switch (l) {
              case 'value':
                Z = u;
                break;
              case 'defaultValue':
                R = u;
                break;
              case 'multiple':
                S = u;
              default:
                u !== N && we(e, t, l, u, a, N);
            }
        ((t = R),
          (n = S),
          (a = J),
          Z != null
            ? xa(e, !!n, Z, !1)
            : !!a != !!n && (t != null ? xa(e, !!n, t, !0) : xa(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        J = Z = null;
        for (R in n)
          if (((l = n[R]), n.hasOwnProperty(R) && l != null && !a.hasOwnProperty(R)))
            switch (R) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                we(e, t, R, null, a, l);
            }
        for (S in a)
          if (((l = a[S]), (u = n[S]), a.hasOwnProperty(S) && (l != null || u != null)))
            switch (S) {
              case 'value':
                Z = l;
                break;
              case 'defaultValue':
                J = l;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (l != null) throw Error(x(91));
                break;
              default:
                l !== u && we(e, t, S, l, a, u);
            }
        Go(e, Z, J);
        return;
      case 'option':
        for (var se in n)
          if (((Z = n[se]), n.hasOwnProperty(se) && Z != null && !a.hasOwnProperty(se)))
            switch (se) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                we(e, t, se, null, a, Z);
            }
        for (N in a)
          if (((Z = a[N]), (J = n[N]), a.hasOwnProperty(N) && Z !== J && (Z != null || J != null)))
            switch (N) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                we(e, t, N, Z, a, J);
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
            n.hasOwnProperty(me) && Z != null && !a.hasOwnProperty(me) && we(e, t, me, null, a, Z));
        for (Q in a)
          if (((Z = a[Q]), (J = n[Q]), a.hasOwnProperty(Q) && Z !== J && (Z != null || J != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                we(e, t, Q, Z, a, J);
            }
        return;
      default:
        if (Ju(t)) {
          for (var Be in n)
            ((Z = n[Be]),
              n.hasOwnProperty(Be) &&
                Z !== void 0 &&
                !a.hasOwnProperty(Be) &&
                Bs(e, t, Be, void 0, a, Z));
          for (k in a)
            ((Z = a[k]),
              (J = n[k]),
              !a.hasOwnProperty(k) ||
                Z === J ||
                (Z === void 0 && J === void 0) ||
                Bs(e, t, k, Z, a, J));
          return;
        }
    }
    for (var q in n)
      ((Z = n[q]),
        n.hasOwnProperty(q) && Z != null && !a.hasOwnProperty(q) && we(e, t, q, null, a, Z));
    for (ee in a)
      ((Z = a[ee]),
        (J = n[ee]),
        !a.hasOwnProperty(ee) || Z === J || (Z == null && J == null) || we(e, t, ee, Z, a, J));
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
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          u = l.transferSize,
          S = l.initiatorType,
          R = l.duration;
        if (u && R && Zd(S)) {
          for (S = 0, R = l.responseEnd, a += 1; a < n.length; a++) {
            var N = n[a],
              Q = N.startTime;
            if (Q > R) break;
            var k = N.transferSize,
              ee = N.initiatorType;
            k && Zd(ee) && ((N = N.responseEnd), (S += k * (N < R ? 1 : (R - Q) / (N - Q))));
          }
          if ((--a, (t += (8 * (u + S)) / (l.duration / 1e3)), e++, 10 < e)) break;
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
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(l), Pa(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') Xl(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Xl(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              R = u.nodeName;
            (u[rl] ||
              R === 'SCRIPT' ||
              R === 'STYLE' ||
              (R === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && Xl(e.ownerDocument.body);
      n = l;
    } while (n);
    Pa(t);
  }
  function Wd(e, t) {
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
  function S0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[rl])
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
                u !== l.rel ||
                e.getAttribute('href') !== (l.href == null || l.href === '' ? null : l.href) ||
                e.getAttribute('crossorigin') !== (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute('title') !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (l.src == null ? null : l.src) ||
                  e.getAttribute('type') !== (l.type == null ? null : l.type) ||
                  e.getAttribute('crossorigin') !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
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
        var u = l.name == null ? null : '' + l.name;
        if (l.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Bt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function x0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Pd(e, t) {
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
  function Id(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return Bt(e.nextSibling);
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
  function Xl(e) {
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
  K.d = { f: T0, r: b0, D: C0, C: R0, L: A0, m: M0, X: D0, S: z0, M: O0 };
  function T0() {
    var e = cn.f(),
      t = lu();
    return e || t;
  }
  function b0(e) {
    var t = ya(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Sf(t) : cn.r(e);
  }
  var $a = typeof document > 'u' ? null : document;
  function am(e, t, n) {
    var a = $a;
    if (a && typeof t == 'string' && t) {
      var l = At(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
        nm.has(l) ||
          (nm.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement('link')), at(t, 'link', e), ke(t), a.head.appendChild(t))));
    }
  }
  function C0(e) {
    (cn.D(e), am('dns-prefetch', e, null));
  }
  function R0(e, t) {
    (cn.C(e, t), am('preconnect', e, t));
  }
  function A0(e, t, n) {
    cn.L(e, t, n);
    var a = $a;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + At(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + At(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (l += '[imagesizes="' + At(n.imageSizes) + '"]'))
        : (l += '[href="' + At(e) + '"]');
      var u = l;
      switch (t) {
        case 'style':
          u = ka(e);
          break;
        case 'script':
          u = Wa(e);
      }
      Nt.has(u) ||
        ((e = g(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Nt.set(u, e),
        a.querySelector(l) !== null ||
          (t === 'style' && a.querySelector(Ql(u))) ||
          (t === 'script' && a.querySelector(Zl(u))) ||
          ((t = a.createElement('link')), at(t, 'link', e), ke(t), a.head.appendChild(t)));
    }
  }
  function M0(e, t) {
    cn.m(e, t);
    var n = $a;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + At(a) + '"][href="' + At(e) + '"]',
        u = l;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Wa(e);
      }
      if (
        !Nt.has(u) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)), Nt.set(u, e), n.querySelector(l) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Zl(u))) return;
        }
        ((a = n.createElement('link')), at(a, 'link', e), ke(a), n.head.appendChild(a));
      }
    }
  }
  function z0(e, t, n) {
    cn.S(e, t, n);
    var a = $a;
    if (a && e) {
      var l = pa(a).hoistableStyles,
        u = ka(e);
      t = t || 'default';
      var S = l.get(u);
      if (!S) {
        var R = { loading: 0, preload: null };
        if ((S = a.querySelector(Ql(u)))) R.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Nt.get(u)) && qs(e, n));
          var N = (S = a.createElement('link'));
          (ke(N),
            at(N, 'link', e),
            (N._p = new Promise(function (Q, k) {
              ((N.onload = Q), (N.onerror = k));
            })),
            N.addEventListener('load', function () {
              R.loading |= 1;
            }),
            N.addEventListener('error', function () {
              R.loading |= 2;
            }),
            (R.loading |= 4),
            hu(S, t, a));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: R }), l.set(u, S));
      }
    }
  }
  function D0(e, t) {
    cn.X(e, t);
    var n = $a;
    if (n && e) {
      var a = pa(n).hoistableScripts,
        l = Wa(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(Zl(l))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Nt.get(l)) && Xs(e, t),
          (u = n.createElement('script')),
          ke(u),
          at(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function O0(e, t) {
    cn.M(e, t);
    var n = $a;
    if (n && e) {
      var a = pa(n).hoistableScripts,
        l = Wa(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(Zl(l))),
        u ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Nt.get(l)) && Xs(e, t),
          (u = n.createElement('script')),
          ke(u),
          at(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function lm(e, t, n, a) {
    var l = (l = ne.current) ? mu(l) : null;
    if (!l) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = ka(n.href)),
            (n = pa(l).hoistableStyles),
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
          e = ka(n.href);
          var u = pa(l).hoistableStyles,
            S = u.get(e);
          if (
            (S ||
              ((l = l.ownerDocument || l),
              (S = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, S),
              (u = l.querySelector(Ql(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
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
                u || U0(l, e, n, S.state))),
            t && a === null)
          )
            throw Error(x(528, ''));
          return S;
        }
        if (t && a !== null) throw Error(x(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((t = Wa(n)),
              (n = pa(l).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function ka(e) {
    return 'href="' + At(e) + '"';
  }
  function Ql(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function im(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function U0(e, t, n, a) {
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
        at(t, 'link', n),
        ke(t),
        e.head.appendChild(t));
  }
  function Wa(e) {
    return '[src="' + At(e) + '"]';
  }
  function Zl(e) {
    return 'script[async]' + e;
  }
  function um(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + At(n.href) + '"]');
          if (a) return ((t.instance = a), ke(a), a);
          var l = g({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            ke(a),
            at(a, 'style', l),
            hu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = ka(n.href);
          var u = e.querySelector(Ql(l));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ke(u), u);
          ((a = im(n)),
            (l = Nt.get(l)) && qs(a, l),
            (u = (e.ownerDocument || e).createElement('link')),
            ke(u));
          var S = u;
          return (
            (S._p = new Promise(function (R, N) {
              ((S.onload = R), (S.onerror = N));
            })),
            at(u, 'link', a),
            (t.state.loading |= 4),
            hu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Wa(n.src)),
            (l = e.querySelector(Zl(u)))
              ? ((t.instance = l), ke(l), l)
              : ((a = n),
                (l = Nt.get(u)) && ((a = g({}, n)), Xs(a, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                ke(l),
                at(l, 'link', a),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case 'void':
          return null;
        default:
          throw Error(x(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), hu(a, n.precedence, e));
    return t.instance;
  }
  function hu(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        l = a.length ? a[a.length - 1] : null,
        u = l,
        S = 0;
      S < a.length;
      S++
    ) {
      var R = a[S];
      if (R.dataset.precedence === t) u = R;
      else if (u !== l) break;
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
      var a = new Map(),
        l = (vu = new Map());
      l.set(n, a);
    } else ((l = vu), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (
        !(u[rl] || u[Ie] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var S = u.getAttribute(t) || '';
        S = e + S;
        var R = a.get(S);
        R ? R.push(u) : a.set(S, [u]);
      }
    }
    return a;
  }
  function sm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function w0(e, t, n) {
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
  function B0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = ka(a.href),
          u = t.querySelector(Ql(l));
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
          (a = im(a)),
          (l = Nt.get(l)) && qs(a, l),
          (u = u.createElement('link')),
          ke(u));
        var S = u;
        ((S._p = new Promise(function (R, N) {
          ((S.onload = R), (S.onerror = N));
        })),
          at(u, 'link', a),
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
            var a = setTimeout(function () {
              if ((e.stylesheets && pu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Qs === 0 && (Qs = 62500 * h0());
            var l = setTimeout(
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
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(l));
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
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), yu.set(e, n));
        for (
          var l = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < l.length;
          u++
        ) {
          var S = l[u];
          (S.nodeName === 'LINK' || S.getAttribute('media') !== 'not all') &&
            (n.set(S.dataset.precedence, S), (a = S));
        }
        a && n.set(null, a);
      }
      ((l = t.instance),
        (S = l.getAttribute('data-precedence')),
        (u = n.get(S) || a),
        u === a && n.set(null, l),
        n.set(S, l),
        this.count++,
        (a = gu.bind(this)),
        l.addEventListener('load', a),
        l.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Kl = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0,
  };
  function H0(e, t, n, a, l, u, S, R, N) {
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
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = N),
      (this.incompleteTransitions = new Map()));
  }
  function cm(e, t, n, a, l, u, S, R, N, Q, k, ee) {
    return (
      (e = new H0(e, t, n, S, N, Q, k, ee, R)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = St(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = br()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Mr(u),
      e
    );
  }
  function fm(e) {
    return e ? ((e = za), e) : za;
  }
  function dm(e, t, n, a, l, u) {
    ((l = fm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = bn(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = Cn(e, a, t)),
      n !== null && (mt(n, e, t), Cl(n, e, t)));
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
      var t = Ct();
      t = Gu(t);
      var n = Fn(e, t);
      (n !== null && mt(n, e, t), Zs(e, t));
    }
  }
  var Su = !0;
  function L0(e, t, n, a) {
    var l = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 2), Ks(e, t, n, a));
    } finally {
      ((K.p = u), (V.T = l));
    }
  }
  function j0(e, t, n, a) {
    var l = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 8), Ks(e, t, n, a));
    } finally {
      ((K.p = u), (V.T = l));
    }
  }
  function Ks(e, t, n, a) {
    if (Su) {
      var l = Js(a);
      if (l === null) (ws(e, t, a, xu, n), ym(e, a));
      else if (G0(l, e, t, n, a)) a.stopPropagation();
      else if ((ym(e, a), t & 4 && -1 < Y0.indexOf(e))) {
        for (; l !== null; ) {
          var u = ya(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Xn(u.pendingLanes);
                  if (S !== 0) {
                    var R = u;
                    for (R.pendingLanes |= 2, R.entangledLanes |= 2; S; ) {
                      var N = 1 << (31 - yt(S));
                      ((R.entanglements[1] |= N), (S &= ~N));
                    }
                    (Qt(u), (Ae & 6) === 0 && ((nu = lt() + 500), Gl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((R = Fn(u, 2)), R !== null && mt(R, u, 2), lu(), Zs(u, 2));
            }
          if (((u = Js(a)), u === null && ws(e, t, a, xu, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else ws(e, t, a, null, n);
    }
  }
  function Js(e) {
    return ((e = $u(e)), Fs(e));
  }
  var xu = null;
  function Fs(e) {
    if (((xu = null), (e = ga(e)), e !== null)) {
      var t = i(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = f(t)), e !== null)) return e;
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
          case ma:
          case ha:
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
    Jl = new Map(),
    Fl = new Map(),
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
        Jl.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Fl.delete(t.pointerId);
    }
  }
  function $l(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = ya(t)), t !== null && hm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function G0(e, t, n, a, l) {
    switch (t) {
      case 'focusin':
        return ((_n = $l(_n, e, t, n, a, l)), !0);
      case 'dragenter':
        return ((Hn = $l(Hn, e, t, n, a, l)), !0);
      case 'mouseover':
        return ((Ln = $l(Ln, e, t, n, a, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (Jl.set(u, $l(Jl.get(u) || null, e, t, n, a, l)), !0);
      case 'gotpointercapture':
        return ((u = l.pointerId), Fl.set(u, $l(Fl.get(u) || null, e, t, n, a, l)), !0);
    }
    return !1;
  }
  function pm(e) {
    var t = ga(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Uo(e.priority, function () {
                vm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
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
        var a = new n.constructor(n.type, n);
        ((Fu = a), n.target.dispatchEvent(a), (Fu = null));
      } else return ((t = ya(n)), t !== null && hm(t), (e.blockedOn = n), !1);
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
      Jl.forEach(Sm),
      Fl.forEach(Sm));
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
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != 'function') {
            if (Fs(a || n) === null) continue;
            break;
          }
          var u = ya(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Jr(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Pa(e) {
    function t(N) {
      return Tu(N, e);
    }
    (_n !== null && Tu(_n, e),
      Hn !== null && Tu(Hn, e),
      Ln !== null && Tu(Ln, e),
      Jl.forEach(t),
      Fl.forEach(t));
    for (var n = 0; n < jn.length; n++) {
      var a = jn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
      (pm(n), n.blockedOn === null && jn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          S = l[rt] || null;
        if (typeof u == 'function') S || xm(n);
        else if (S) {
          var R = null;
          if (u && u.hasAttribute('formAction')) {
            if (((l = u), (S = u[rt] || null))) R = S.formAction;
            else if (Fs(l) !== null) continue;
          } else R = S.action;
          (typeof R == 'function' ? (n[a + 1] = R) : (n.splice(a, 3), (a -= 3)), xm(n));
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
              return (l = S);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (l !== null && (l(), (l = null)), a || setTimeout(n, 20));
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
        l = null;
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
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function ks(e) {
    this._internalRoot = e;
  }
  ((Cu.prototype.render = ks.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        a = Ct();
      dm(n, a, e, t, null, null);
    }),
    (Cu.prototype.unmount = ks.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (dm(e.current, 2, null, e, null, null), lu(), (t[va] = null));
        }
      }));
  function Cu(e) {
    this._internalRoot = e;
  }
  Cu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
      (jn.splice(n, 0, e), n === 0 && pm(e));
    }
  };
  var Tm = C.version;
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
    var Ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ru.isDisabled && Ru.supportsFiber)
      try {
        ((ll = Ru.inject(q0)), (gt = Ru));
      } catch {}
  }
  return (
    (Wl.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        a = '',
        l = Df,
        u = Of,
        S = Uf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = cm(e, 1, !1, null, null, n, a, null, l, u, S, Em)),
        (e[va] = t.current),
        Us(e),
        new ks(t)
      );
    }),
    (Wl.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var a = !1,
        l = '',
        u = Df,
        S = Of,
        R = Uf,
        N = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (R = n.onRecoverableError),
          n.formState !== void 0 && (N = n.formState)),
        (t = cm(e, 1, !0, t, n ?? null, a, l, N, u, S, R, Em)),
        (t.context = fm(null)),
        (n = t.current),
        (a = Ct()),
        (a = Gu(a)),
        (l = bn(a)),
        (l.callback = null),
        Cn(n, l, a),
        (n = a),
        (t.current.lanes = n),
        ul(t, n),
        Qt(t),
        (e[va] = t.current),
        Us(e),
        new Cu(t)
      );
    }),
    (Wl.version = '19.2.5'),
    Wl
  );
}
var Bm;
function I0() {
  if (Bm) return Ps.exports;
  Bm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (C) {
        console.error(C);
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
  function C(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: s } = i || x.location;
    return fo(
      '',
      { pathname: d, search: f, hash: s },
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
  return ag(C, b, null, c);
}
function Ge(c, C) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(C);
}
function Zt(c, C) {
  if (!c) {
    typeof console < 'u' && console.warn(C);
    try {
      throw new Error(C);
    } catch {}
  }
}
function ng() {
  return Math.random().toString(36).substring(2, 10);
}
function Hm(c, C) {
  return {
    usr: c.state,
    key: c.key,
    idx: C,
    masked: c.unstable_mask ? { pathname: c.pathname, search: c.search, hash: c.hash } : void 0,
  };
}
function fo(c, C, b = null, x, h) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof C == 'string' ? tl(C) : C),
    state: b,
    key: (C && C.key) || x || ng(),
    unstable_mask: h,
  };
}
function ti({ pathname: c = '/', search: C = '', hash: b = '' }) {
  return (
    C && C !== '?' && (c += C.charAt(0) === '?' ? C : '?' + C),
    b && b !== '#' && (c += b.charAt(0) === '#' ? b : '#' + b),
    c
  );
}
function tl(c) {
  let C = {};
  if (c) {
    let b = c.indexOf('#');
    b >= 0 && ((C.hash = c.substring(b)), (c = c.substring(0, b)));
    let x = c.indexOf('?');
    (x >= 0 && ((C.search = c.substring(x)), (c = c.substring(0, x))), c && (C.pathname = c));
  }
  return C;
}
function ag(c, C, b, x = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = x,
    d = h.history,
    f = 'POP',
    s = null,
    m = o();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ''));
  function o() {
    return (d.state || { idx: null }).idx;
  }
  function g() {
    f = 'POP';
    let E = o(),
      A = E == null ? null : E - m;
    ((m = E), s && s({ action: f, location: v.location, delta: A }));
  }
  function y(E, A) {
    f = 'PUSH';
    let O = _m(E) ? E : fo(v.location, E, A);
    m = o() + 1;
    let U = Hm(O, m),
      _ = v.createHref(O.unstable_mask || O);
    try {
      d.pushState(U, '', _);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      h.location.assign(_);
    }
    i && s && s({ action: f, location: v.location, delta: 1 });
  }
  function r(E, A) {
    f = 'REPLACE';
    let O = _m(E) ? E : fo(v.location, E, A);
    m = o();
    let U = Hm(O, m),
      _ = v.createHref(O.unstable_mask || O);
    (d.replaceState(U, '', _), i && s && s({ action: f, location: v.location, delta: 0 }));
  }
  function p(E) {
    return lg(E);
  }
  let v = {
    get action() {
      return f;
    },
    get location() {
      return c(h, d);
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
      return C(h, E);
    },
    createURL: p,
    encodeLocation(E) {
      let A = p(E);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: y,
    replace: r,
    go(E) {
      return d.go(E);
    },
  };
  return v;
}
function lg(c, C = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Ge(b, 'No window.location.(origin|href) available to create URL'));
  let x = typeof c == 'string' ? c : ti(c);
  return ((x = x.replace(/ $/, '%20')), !C && x.startsWith('//') && (x = b + x), new URL(x, b));
}
function $m(c, C, b = '/') {
  return ig(c, C, b, !1);
}
function ig(c, C, b, x) {
  let h = typeof C == 'string' ? tl(C) : C,
    i = dn(h.pathname || '/', b);
  if (i == null) return null;
  let d = km(c);
  ug(d);
  let f = null;
  for (let s = 0; f == null && s < d.length; ++s) {
    let m = yg(i);
    f = vg(d[s], m, x);
  }
  return f;
}
function km(c, C = [], b = [], x = '', h = !1) {
  let i = (d, f, s = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
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
    (d.children &&
      d.children.length > 0 &&
      (Ge(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      km(d.children, C, y, g, s)),
      !(d.path == null && !d.index) && C.push({ path: g, score: mg(g, d.index), routesMeta: y }));
  };
  return (
    c.forEach((d, f) => {
      var s;
      if (d.path === '' || !((s = d.path) != null && s.includes('?'))) i(d, f);
      else for (let m of Wm(d.path)) i(d, f, !0, m);
    }),
    C
  );
}
function Wm(c) {
  let C = c.split('/');
  if (C.length === 0) return [];
  let [b, ...x] = C,
    h = b.endsWith('?'),
    i = b.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = Wm(x.join('/')),
    f = [];
  return (
    f.push(...d.map((s) => (s === '' ? i : [i, s].join('/')))),
    h && f.push(...d),
    f.map((s) => (c.startsWith('/') && s === '' ? '/' : s))
  );
}
function ug(c) {
  c.sort((C, b) =>
    C.score !== b.score
      ? b.score - C.score
      : hg(
          C.routesMeta.map((x) => x.childrenIndex),
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
function mg(c, C) {
  let b = c.split('/'),
    x = b.length;
  return (
    b.some(Lm) && (x += dg),
    C && (x += og),
    b.filter((h) => !Lm(h)).reduce((h, i) => h + (rg.test(i) ? sg : i === '' ? cg : fg), x)
  );
}
function hg(c, C) {
  return c.length === C.length && c.slice(0, -1).every((x, h) => x === C[h])
    ? c[c.length - 1] - C[C.length - 1]
    : 0;
}
function vg(c, C, b = !1) {
  let { routesMeta: x } = c,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let s = x[f],
      m = f === x.length - 1,
      o = i === '/' ? C : C.slice(i.length) || '/',
      g = wu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: m }, o),
      y = s.route;
    if (
      (!g &&
        m &&
        b &&
        !x[x.length - 1].route.index &&
        (g = wu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, o)),
      !g)
    )
      return null;
    (Object.assign(h, g.params),
      d.push({
        params: h,
        pathname: Yt([i, g.pathname]),
        pathnameBase: Eg(Yt([i, g.pathnameBase])),
        route: y,
      }),
      g.pathnameBase !== '/' && (i = Yt([i, g.pathnameBase])));
  }
  return d;
}
function wu(c, C) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [b, x] = gg(c.path, c.caseSensitive, c.end),
    h = C.match(b);
  if (!h) return null;
  let i = h[0],
    d = i.replace(/(.)\/+$/, '$1'),
    f = h.slice(1);
  return {
    params: x.reduce((m, { paramName: o, isOptional: g }, y) => {
      if (o === '*') {
        let p = f[y] || '';
        d = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      const r = f[y];
      return (g && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: d,
    pattern: c,
  };
}
function gg(c, C = !1, b = !0) {
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
        .replace(/\/:([\w-]+)(\?)?/g, (d, f, s, m, o) => {
          if ((x.push({ paramName: f, isOptional: s != null }), s)) {
            let g = o.charAt(m + d.length);
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
    [new RegExp(h, C ? void 0 : 'i'), x]
  );
}
function yg(c) {
  try {
    return c
      .split('/')
      .map((C) => decodeURIComponent(C).replace(/\//g, '%2F'))
      .join('/');
  } catch (C) {
    return (
      Zt(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${C}).`
      ),
      c
    );
  }
}
function dn(c, C) {
  if (C === '/') return c;
  if (!c.toLowerCase().startsWith(C.toLowerCase())) return null;
  let b = C.endsWith('/') ? C.length - 1 : C.length,
    x = c.charAt(b);
  return x && x !== '/' ? null : c.slice(b) || '/';
}
var pg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Sg(c, C = '/') {
  let { pathname: b, search: x = '', hash: h = '' } = typeof c == 'string' ? tl(c) : c,
    i;
  return (
    b ? ((b = Im(b)), b.startsWith('/') ? (i = jm(b.substring(1), '/')) : (i = jm(b, C))) : (i = C),
    { pathname: i, search: Tg(x), hash: bg(h) }
  );
}
function jm(c, C) {
  let b = Bu(C).split('/');
  return (
    c.split('/').forEach((h) => {
      h === '..' ? b.length > 1 && b.pop() : h !== '.' && b.push(h);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function ao(c, C, b, x) {
  return `Cannot include a '${c}' character in a manually specified \`to.${C}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xg(c) {
  return c.filter((C, b) => b === 0 || (C.route.path && C.route.path.length > 0));
}
function Pm(c) {
  let C = xg(c);
  return C.map((b, x) => (x === C.length - 1 ? b.pathname : b.pathnameBase));
}
function go(c, C, b, x = !1) {
  let h;
  typeof c == 'string'
    ? (h = tl(c))
    : ((h = { ...c }),
      Ge(!h.pathname || !h.pathname.includes('?'), ao('?', 'pathname', 'search', h)),
      Ge(!h.pathname || !h.pathname.includes('#'), ao('#', 'pathname', 'hash', h)),
      Ge(!h.search || !h.search.includes('#'), ao('#', 'search', 'hash', h)));
  let i = c === '' || h.pathname === '',
    d = i ? '/' : h.pathname,
    f;
  if (d == null) f = b;
  else {
    let g = C.length - 1;
    if (!x && d.startsWith('..')) {
      let y = d.split('/');
      for (; y[0] === '..'; ) (y.shift(), (g -= 1));
      h.pathname = y.join('/');
    }
    f = g >= 0 ? C[g] : '/';
  }
  let s = Sg(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && b.endsWith('/');
  return (!s.pathname.endsWith('/') && (m || o) && (s.pathname += '/'), s);
}
var Im = (c) => c.replace(/\/\/+/g, '/'),
  Yt = (c) => Im(c.join('/')),
  Bu = (c) => c.replace(/\/+$/, ''),
  Eg = (c) => Bu(c).replace(/^\/*/, '/'),
  Tg = (c) => (!c || c === '?' ? '' : c.startsWith('?') ? c : '?' + c),
  bg = (c) => (!c || c === '#' ? '' : c.startsWith('#') ? c : '#' + c),
  Cg = class {
    constructor(c, C, b, x = !1) {
      ((this.status = c),
        (this.statusText = C || ''),
        (this.internal = x),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function Rg(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Ag(c) {
  let C = c.map((b) => b.route.path).filter(Boolean);
  return Yt(C) || '/';
}
var eh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function th(c, C) {
  let b = c;
  if (typeof b != 'string' || !pg.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let x = b,
    h = !1;
  if (eh)
    try {
      let i = new URL(window.location.href),
        d = b.startsWith('//') ? new URL(i.protocol + b) : new URL(b),
        f = dn(d.pathname, C);
      d.origin === i.origin && f != null ? (b = f + d.search + d.hash) : (h = !0);
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
var nl = Y.createContext(null);
nl.displayName = 'DataRouter';
var Nu = Y.createContext(null);
Nu.displayName = 'DataRouterState';
var ah = Y.createContext(!1);
function zg() {
  return Y.useContext(ah);
}
var lh = Y.createContext({ isTransitioning: !1 });
lh.displayName = 'ViewTransition';
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
  wg = 'ROUTE_ERROR_RESPONSE';
function Bg(c) {
  if (c.startsWith(`${ih}:${Ug}:{`))
    try {
      let C = JSON.parse(c.slice(28));
      if (
        typeof C == 'object' &&
        C &&
        typeof C.status == 'number' &&
        typeof C.statusText == 'string' &&
        typeof C.location == 'string' &&
        typeof C.reloadDocument == 'boolean' &&
        typeof C.replace == 'boolean'
      )
        return C;
    } catch {}
}
function Ng(c) {
  if (c.startsWith(`${ih}:${wg}:{`))
    try {
      let C = JSON.parse(c.slice(40));
      if (
        typeof C == 'object' &&
        C &&
        typeof C.status == 'number' &&
        typeof C.statusText == 'string'
      )
        return new Cg(C.status, C.statusText, C.data);
    } catch {}
}
function _g(c, { relative: C } = {}) {
  Ge(ai(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: x } = Y.useContext(_t),
    { hash: h, pathname: i, search: d } = li(c, { relative: C }),
    f = i;
  return (
    b !== '/' && (f = i === '/' ? b : Yt([b, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function ai() {
  return Y.useContext(ni) != null;
}
function hn() {
  return (
    Ge(ai(), 'useLocation() may be used only in the context of a <Router> component.'),
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
  Ge(ai(), 'useNavigate() may be used only in the context of a <Router> component.');
  let c = Y.useContext(nl),
    { basename: C, navigator: b } = Y.useContext(_t),
    { matches: x } = Y.useContext(mn),
    { pathname: h } = hn(),
    i = JSON.stringify(Pm(x)),
    d = Y.useRef(!1);
  return (
    rh(() => {
      d.current = !0;
    }),
    Y.useCallback(
      (s, m = {}) => {
        if ((Zt(d.current, uh), !d.current)) return;
        if (typeof s == 'number') {
          b.go(s);
          return;
        }
        let o = go(s, JSON.parse(i), h, m.relative === 'path');
        (c == null && C !== '/' && (o.pathname = o.pathname === '/' ? C : Yt([C, o.pathname])),
          (m.replace ? b.replace : b.push)(o, m.state, m));
      },
      [C, b, i, h, c]
    )
  );
}
Y.createContext(null);
function li(c, { relative: C } = {}) {
  let { matches: b } = Y.useContext(mn),
    { pathname: x } = hn(),
    h = JSON.stringify(Pm(b));
  return Y.useMemo(() => go(c, JSON.parse(h), x, C === 'path'), [c, h, x, C]);
}
function jg(c, C) {
  return sh(c, C);
}
function sh(c, C, b) {
  var E;
  Ge(ai(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = Y.useContext(_t),
    { matches: h } = Y.useContext(mn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let A = (m && m.path) || '';
    ch(
      f,
      !m || A.endsWith('*') || A.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === '/' ? '*' : `${A}/*`}">.`
    );
  }
  let o = hn(),
    g;
  if (C) {
    let A = typeof C == 'string' ? tl(C) : C;
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
          params: Object.assign({}, d, A.params),
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
  return C && v
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
    C = Rg(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
    b = c instanceof Error ? c.stack : null,
    x = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: x },
    i = { padding: '2px 4px', backgroundColor: x },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (d = Y.createElement(
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
      Y.createElement('h3', { style: { fontStyle: 'italic' } }, C),
      b ? Y.createElement('pre', { style: h }, b) : null,
      d
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
    static getDerivedStateFromProps(c, C) {
      return C.location !== c.location || (C.revalidation !== 'idle' && c.revalidation === 'idle')
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : C.error,
            location: C.location,
            revalidation: c.revalidation || C.revalidation,
          };
    }
    componentDidCatch(c, C) {
      this.props.onError
        ? this.props.onError(c, C)
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
      let C =
        c !== void 0
          ? Y.createElement(
              mn.Provider,
              { value: this.props.routeContext },
              Y.createElement(yo.Provider, { value: c, children: this.props.component })
            )
          : this.props.children;
      return this.context ? Y.createElement(Vg, { error: c }, C) : C;
    }
  };
oh.contextType = ah;
var lo = new WeakMap();
function Vg({ children: c, error: C }) {
  let { basename: b } = Y.useContext(_t);
  if (typeof C == 'object' && C && 'digest' in C && typeof C.digest == 'string') {
    let x = Bg(C.digest);
    if (x) {
      let h = lo.get(C);
      if (h) throw h;
      let i = th(x.location, b);
      if (eh && !lo.get(C))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (lo.set(C, d), d);
        }
      return Y.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return c;
}
function qg({ routeContext: c, match: C, children: b }) {
  let x = Y.useContext(nl);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (C.route.errorElement || C.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = C.route.id),
    Y.createElement(mn.Provider, { value: c }, b)
  );
}
function Xg(c, C = [], b) {
  let x = b == null ? void 0 : b.state;
  if (c == null) {
    if (!x) return null;
    if (x.errors) c = x.matches;
    else if (C.length === 0 && !x.initialized && x.matches.length > 0) c = x.matches;
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
  let d = !1,
    f = -1;
  if (b && x) {
    d = x.renderFallback;
    for (let o = 0; o < h.length; o++) {
      let g = h[o];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = o), g.route.id)) {
        let { loaderData: y, errors: r } = x,
          p = g.route.loader && !y.hasOwnProperty(g.route.id) && (!r || r[g.route.id] === void 0);
        if (g.route.lazy || p) {
          (b.isStatic && (d = !0), f >= 0 ? (h = h.slice(0, f + 1)) : (h = [h[0]]));
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
      d &&
        (f < 0 && y === 0
          ? (ch(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (p = !0),
            (E = null))
          : f === y && ((p = !0), (E = g.route.hydrateFallbackElement || null))));
    let A = C.concat(h.slice(0, y + 1)),
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
  let C = Y.useContext(nl);
  return (Ge(C, po(c)), C);
}
function Zg(c) {
  let C = Y.useContext(Nu);
  return (Ge(C, po(c)), C);
}
function Kg(c) {
  let C = Y.useContext(mn);
  return (Ge(C, po(c)), C);
}
function So(c) {
  let C = Kg(c),
    b = C.matches[C.matches.length - 1];
  return (Ge(b.route.id, `${c} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Jg() {
  return So('useRouteId');
}
function Fg() {
  var x;
  let c = Y.useContext(yo),
    C = Zg('useRouteError'),
    b = So('useRouteError');
  return c !== void 0 ? c : (x = C.errors) == null ? void 0 : x[b];
}
function $g() {
  let { router: c } = Qg('useNavigate'),
    C = So('useNavigate'),
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
              : await c.navigate(h, { fromRouteId: C, ...i })));
      },
      [c, C]
    )
  );
}
var Ym = {};
function ch(c, C, b) {
  !C && !Ym[c] && ((Ym[c] = !0), Zt(!1, b));
}
Y.memo(kg);
function kg({ routes: c, future: C, state: b, isStatic: x, onError: h }) {
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
  children: C = null,
  location: b,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: d,
}) {
  Ge(
    !ai(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = c.replace(/^\/*/, '/'),
    s = Y.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof b == 'string' && (b = tl(b));
  let {
      pathname: m = '/',
      search: o = '',
      hash: g = '',
      state: y = null,
      key: r = 'default',
      unstable_mask: p,
    } = b,
    v = Y.useMemo(() => {
      let E = dn(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: g, state: y, key: r, unstable_mask: p },
            navigationType: x,
          };
    }, [f, m, o, g, y, r, x, p]);
  return (
    Zt(
      v != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : Y.createElement(
          _t.Provider,
          { value: s },
          Y.createElement(ni.Provider, { children: C, value: v })
        )
  );
}
function Pg({ children: c, location: C }) {
  return jg(ho(c), C);
}
function ho(c, C = []) {
  let b = [];
  return (
    Y.Children.forEach(c, (x, h) => {
      if (!Y.isValidElement(x)) return;
      let i = [...C, h];
      if (x.type === Y.Fragment) {
        b.push.apply(b, ho(x.props.children, i));
        return;
      }
      (Ge(
        x.type === mo,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ge(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
      let d = {
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
      (x.props.children && (d.children = ho(x.props.children, i)), b.push(d));
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
function ay(c, C) {
  return c.button === 0 && (!C || C === '_self') && !ny(c);
}
var Au = null;
function ly() {
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
function uy(c, C) {
  let b, x, h, i, d;
  if (ey(c)) {
    let f = c.getAttribute('action');
    ((x = f ? dn(f, C) : null),
      (b = c.getAttribute('method') || Du),
      (h = io(c.getAttribute('enctype')) || Ou),
      (i = new FormData(c)));
  } else if (Ig(c) || (ty(c) && (c.type === 'submit' || c.type === 'image'))) {
    let f = c.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = c.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = s ? dn(s, C) : null),
      (b = c.getAttribute('formmethod') || f.getAttribute('method') || Du),
      (h = io(c.getAttribute('formenctype')) || io(f.getAttribute('enctype')) || Ou),
      (i = new FormData(f, c)),
      !ly())
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
    ((b = Du), (x = null), (h = Ou), (d = c));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: b.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function xo(c, C) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(C);
}
function fh(c, C, b, x) {
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
        : C && dn(h.pathname, C) === '/'
          ? (h.pathname = `${Bu(C)}/_root.${x}`)
          : (h.pathname = `${Bu(h.pathname)}.${x}`),
    h
  );
}
async function ry(c, C) {
  if (c.id in C) return C[c.id];
  try {
    let b = await import(c.module);
    return ((C[c.id] = b), b);
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
async function oy(c, C, b) {
  let x = await Promise.all(
    c.map(async (h) => {
      let i = C.routes[h.route.id];
      if (i) {
        let d = await ry(i, b);
        return d.links ? d.links() : [];
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
function Gm(c, C, b, x, h, i) {
  let d = (s, m) => (b[m] ? s.route.id !== b[m].route.id : !0),
    f = (s, m) => {
      var o;
      return (
        b[m].pathname !== s.pathname ||
        (((o = b[m].route.path) == null ? void 0 : o.endsWith('*')) &&
          b[m].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? C.filter((s, m) => d(s, m) || f(s, m))
    : i === 'data'
      ? C.filter((s, m) => {
          var g;
          let o = x.routes[s.route.id];
          if (!o || !o.hasLoader) return !1;
          if (d(s, m) || f(s, m)) return !0;
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
function cy(c, C, { includeHydrateFallback: b } = {}) {
  return fy(
    c
      .map((x) => {
        let h = C.routes[x.route.id];
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
  let C = {},
    b = Object.keys(c).sort();
  for (let x of b) C[x] = c[x];
  return C;
}
function my(c, C) {
  let b = new Set();
  return (
    new Set(C),
    c.reduce((x, h) => {
      let i = JSON.stringify(dy(h));
      return (b.has(i) || (b.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Eo() {
  let c = Y.useContext(nl);
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
function vy(c, C) {
  let b = Y.useContext(To),
    [x, h] = Y.useState(!1),
    [i, d] = Y.useState(!1),
    { onFocus: f, onBlur: s, onMouseEnter: m, onMouseLeave: o, onTouchStart: g } = C,
    y = Y.useRef(null);
  (Y.useEffect(() => {
    if ((c === 'render' && d(!0), c === 'viewport')) {
      let v = (A) => {
          A.forEach((O) => {
            d(O.isIntersecting);
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
          d(!0);
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
      (h(!1), d(!1));
    };
  return b
    ? c !== 'intent'
      ? [i, y, {}]
      : [
          i,
          y,
          {
            onFocus: Pl(f, r),
            onBlur: Pl(s, p),
            onMouseEnter: Pl(m, r),
            onMouseLeave: Pl(o, p),
            onTouchStart: Pl(g, r),
          },
        ]
    : [!1, y, {}];
}
function Pl(c, C) {
  return (b) => {
    (c && c(b), b.defaultPrevented || C(b));
  };
}
function gy({ page: c, ...C }) {
  let b = zg(),
    { router: x } = Eo(),
    h = Y.useMemo(() => $m(x.routes, c, x.basename), [x.routes, c, x.basename]);
  return h
    ? b
      ? Y.createElement(py, { page: c, matches: h, ...C })
      : Y.createElement(Sy, { page: c, matches: h, ...C })
    : null;
}
function yy(c) {
  let { manifest: C, routeModules: b } = bo(),
    [x, h] = Y.useState([]);
  return (
    Y.useEffect(() => {
      let i = !1;
      return (
        oy(c, C, b).then((d) => {
          i || h(d);
        }),
        () => {
          i = !0;
        }
      );
    }, [c, C, b]),
    x
  );
}
function py({ page: c, matches: C, ...b }) {
  let x = hn(),
    { future: h } = bo(),
    { basename: i } = Eo(),
    d = Y.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let f = fh(c, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        s = !1,
        m = [];
      for (let o of C)
        typeof o.route.shouldRevalidate == 'function' ? (s = !0) : m.push(o.route.id);
      return (
        s && m.length > 0 && f.searchParams.set('_routes', m.join(',')),
        [f.pathname + f.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, c, x, C]);
  return Y.createElement(
    Y.Fragment,
    null,
    d.map((f) => Y.createElement('link', { key: f, rel: 'prefetch', as: 'fetch', href: f, ...b }))
  );
}
function Sy({ page: c, matches: C, ...b }) {
  let x = hn(),
    { future: h, manifest: i, routeModules: d } = bo(),
    { basename: f } = Eo(),
    { loaderData: s, matches: m } = hy(),
    o = Y.useMemo(() => Gm(c, C, m, i, x, 'data'), [c, C, m, i, x]),
    g = Y.useMemo(() => Gm(c, C, m, i, x, 'assets'), [c, C, m, i, x]),
    y = Y.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (C.forEach((O) => {
          var _;
          let U = i.routes[O.route.id];
          !U ||
            !U.hasLoader ||
            ((!o.some((T) => T.route.id === O.route.id) &&
              O.route.id in s &&
              (_ = d[O.route.id]) != null &&
              _.shouldRevalidate) ||
            U.hasClientLoader
              ? (E = !0)
              : v.add(O.route.id));
        }),
        v.size === 0)
      )
        return [];
      let A = fh(c, f, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        E &&
          v.size > 0 &&
          A.searchParams.set(
            '_routes',
            C.filter((O) => v.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [A.pathname + A.search]
      );
    }, [f, h.unstable_trailingSlashAwareDataRequests, s, x, i, o, C, c, d]),
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
  return (C) => {
    c.forEach((b) => {
      typeof b == 'function' ? b(C) : b != null && (b.current = C);
    });
  };
}
var Ey =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Ey && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Ty({ basename: c, children: C, unstable_useTransitions: b, window: x }) {
  let h = Y.useRef();
  h.current == null && (h.current = tg({ window: x, v5Compat: !0 }));
  let i = h.current,
    [d, f] = Y.useState({ action: i.action, location: i.location }),
    s = Y.useCallback(
      (m) => {
        b === !1 ? f(m) : Y.startTransition(() => f(m));
      },
      [b]
    );
  return (
    Y.useLayoutEffect(() => i.listen(s), [i, s]),
    Y.createElement(Wg, {
      basename: c,
      children: C,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: b,
    })
  );
}
var dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mh = Y.forwardRef(function (
    {
      onClick: C,
      discover: b = 'render',
      prefetch: x = 'none',
      relative: h,
      reloadDocument: i,
      replace: d,
      unstable_mask: f,
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
    if (f) {
      let I = go(f, [], M.unstable_mask ? M.unstable_mask.pathname : '/', !0);
      (E !== '/' && (I.pathname = I.pathname === '/' ? E : Yt([E, I.pathname])),
        (z = A.createHref(I)));
    }
    let [D, B, w] = vy(x, p),
      j = Ay(o, {
        replace: d,
        unstable_mask: f,
        state: s,
        target: m,
        preventScrollReset: g,
        relative: h,
        viewTransition: y,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function L(I) {
      (C && C(I), I.defaultPrevented || j(I));
    }
    let F = !(_.isExternal || i),
      te = Y.createElement('a', {
        ...p,
        ...w,
        href: (F ? z : void 0) || _.absoluteURL || T,
        onClick: F ? L : C,
        ref: xy(v, B),
        target: m,
        'data-discover': !U && b === 'render' ? 'true' : void 0,
      });
    return D && !U ? Y.createElement(Y.Fragment, null, te, Y.createElement(gy, { page: T })) : te;
  });
mh.displayName = 'Link';
var by = Y.forwardRef(function (
  {
    'aria-current': C = 'page',
    caseSensitive: b = !1,
    className: x = '',
    end: h = !1,
    style: i,
    to: d,
    viewTransition: f,
    children: s,
    ...m
  },
  o
) {
  let g = li(d, { relative: m.relative }),
    y = hn(),
    r = Y.useContext(Nu),
    { navigator: p, basename: v } = Y.useContext(_t),
    E = r != null && Uy(g) && f === !0,
    A = p.encodeLocation ? p.encodeLocation(g).pathname : g.pathname,
    O = y.pathname,
    U = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((O = O.toLowerCase()), (U = U ? U.toLowerCase() : null), (A = A.toLowerCase())),
    U && v && (U = dn(U, v) || U));
  const _ = A !== '/' && A.endsWith('/') ? A.length - 1 : A.length;
  let T = O === A || (!h && O.startsWith(A) && O.charAt(_) === '/'),
    M = U != null && (U === A || (!h && U.startsWith(A) && U.charAt(A.length) === '/')),
    z = { isActive: T, isPending: M, isTransitioning: E },
    D = T ? C : void 0,
    B;
  typeof x == 'function'
    ? (B = x(z))
    : (B = [x, T ? 'active' : null, M ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let w = typeof i == 'function' ? i(z) : i;
  return Y.createElement(
    mh,
    { ...m, 'aria-current': D, className: B, ref: o, style: w, to: d, viewTransition: f },
    typeof s == 'function' ? s(z) : s
  );
});
by.displayName = 'NavLink';
var Cy = Y.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: C,
      navigate: b,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = Du,
      action: f,
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
      A = Oy(f, { relative: m }),
      O = d.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof f == 'string' && dh.test(f),
      _ = (T) => {
        if ((s && s(T), T.defaultPrevented)) return;
        T.preventDefault();
        let M = T.nativeEvent.submitter,
          z = (M == null ? void 0 : M.getAttribute('formmethod')) || d,
          D = () =>
            E(M || T.currentTarget, {
              fetcherKey: C,
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
Cy.displayName = 'Form';
function Ry(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hh(c) {
  let C = Y.useContext(nl);
  return (Ge(C, Ry(c)), C);
}
function Ay(
  c,
  {
    target: C,
    replace: b,
    unstable_mask: x,
    state: h,
    preventScrollReset: i,
    relative: d,
    viewTransition: f,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: m,
  } = {}
) {
  let o = Hg(),
    g = hn(),
    y = li(c, { relative: d });
  return Y.useCallback(
    (r) => {
      if (ay(r, C)) {
        r.preventDefault();
        let p = b !== void 0 ? b : ti(g) === ti(y),
          v = () =>
            o(c, {
              replace: p,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: d,
              viewTransition: f,
              unstable_defaultShouldRevalidate: s,
            });
        m ? Y.startTransition(() => v()) : v();
      }
    },
    [g, o, y, b, x, h, C, c, i, d, f, s, m]
  );
}
var My = 0,
  zy = () => `__${String(++My)}__`;
function Dy() {
  let { router: c } = hh('useSubmit'),
    { basename: C } = Y.useContext(_t),
    b = Jg(),
    x = c.fetch,
    h = c.navigate;
  return Y.useCallback(
    async (i, d = {}) => {
      let { action: f, method: s, encType: m, formData: o, body: g } = uy(i, C);
      if (d.navigate === !1) {
        let y = d.fetcherKey || zy();
        await x(y, b, d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: g,
          formMethod: d.method || s,
          formEncType: d.encType || m,
          flushSync: d.flushSync,
        });
      } else
        await h(d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: g,
          formMethod: d.method || s,
          formEncType: d.encType || m,
          replace: d.replace,
          state: d.state,
          fromRouteId: b,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [x, h, C, b]
  );
}
function Oy(c, { relative: C } = {}) {
  let { basename: b } = Y.useContext(_t),
    x = Y.useContext(mn);
  Ge(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...li(c || '.', { relative: C }) },
    d = hn();
  if (c == null) {
    i.search = d.search;
    let f = new URLSearchParams(i.search),
      s = f.getAll('index');
    if (s.some((o) => o === '')) {
      (f.delete('index'), s.filter((g) => g).forEach((g) => f.append('index', g)));
      let o = f.toString();
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
function Uy(c, { relative: C } = {}) {
  let b = Y.useContext(lh);
  Ge(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = hh('useViewTransitionState'),
    h = li(c, { relative: C });
  if (!b.isTransitioning) return !1;
  let i = dn(b.currentLocation.pathname, x) || b.currentLocation.pathname,
    d = dn(b.nextLocation.pathname, x) || b.nextLocation.pathname;
  return wu(h.pathname, d) != null || wu(h.pathname, i) != null;
}
const wy = 'modulepreload',
  By = function (c) {
    return '/ochimono-game/' + c;
  },
  Vm = {},
  Ny = function (C, b, x) {
    let h = Promise.resolve();
    if (b && b.length > 0) {
      let d = function (m) {
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
      const f = document.querySelector('meta[property=csp-nonce]'),
        s = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute('nonce'));
      h = d(
        b.map((m) => {
          if (((m = By(m)), m in Vm)) return;
          Vm[m] = !0;
          const o = m.endsWith('.css'),
            g = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const y = document.createElement('link');
          if (
            ((y.rel = o ? 'stylesheet' : wy),
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
    function i(d) {
      const f = new Event('vite:preloadError', { cancelable: !0 });
      if (((f.payload = d), window.dispatchEvent(f), !f.defaultPrevented)) throw d;
    }
    return h.then((d) => {
      for (const f of d || []) f.status === 'rejected' && i(f.reason);
      return C().catch(i);
    });
  };
function _y(c = {}) {
  const {
    immediate: C = !1,
    onNeedRefresh: b,
    onOfflineReady: x,
    onRegistered: h,
    onRegisteredSW: i,
    onRegisterError: d,
  } = c;
  let f, s, m;
  const o = async (y = !0) => {
    (await s, m == null || m());
  };
  async function g() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await Ny(async () => {
          const { Workbox: y } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: y };
        }, [])
          .then(
            ({ Workbox: y }) =>
              new y('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((y) => {
            d == null || d(y);
          })),
        !f)
      )
        return;
      m = () => {
        f == null || f.messageSkipWaiting();
      };
      {
        let y = !1;
        const r = () => {
          ((y = !0),
            f == null ||
              f.addEventListener('controlling', (p) => {
                p.isUpdate && window.location.reload();
              }),
            b == null || b());
        };
        (f.addEventListener('installed', (p) => {
          typeof p.isUpdate > 'u'
            ? typeof p.isExternal < 'u' && p.isExternal
              ? r()
              : !y && (x == null || x())
            : p.isUpdate || x == null || x();
        }),
          f.addEventListener('waiting', r));
      }
      f.register({ immediate: C })
        .then((y) => {
          i ? i('/ochimono-game/sw.js', y) : h == null || h(y);
        })
        .catch((y) => {
          d == null || d(y);
        });
    }
  }
  return ((s = g()), o);
}
function Hy(c = {}) {
  const {
      immediate: C = !0,
      onNeedRefresh: b,
      onOfflineReady: x,
      onRegistered: h,
      onRegisteredSW: i,
      onRegisterError: d,
    } = c,
    [f, s] = Y.useState(!1),
    [m, o] = Y.useState(!1),
    [g] = Y.useState(() =>
      _y({
        immediate: C,
        onOfflineReady() {
          (o(!0), x == null || x());
        },
        onNeedRefresh() {
          (s(!0), b == null || b());
        },
        onRegistered: h,
        onRegisteredSW: i,
        onRegisterError: d,
      })
    );
  return { needRefresh: [f, s], offlineReady: [m, o], updateServiceWorker: g };
}
const Ly = '_banner_1qruq_1',
  jy = '_message_1qruq_21',
  Yy = '_button_1qruq_25',
  uo = { banner: Ly, message: jy, button: Yy },
  Gy = () => {
    const {
      needRefresh: [c],
      updateServiceWorker: C,
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
              onClick: () => C(!0),
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
  el = { layout: Xy, top_bar_placeholder: Qy, main: Zy, field_wrapper: Ky },
  Jy = '_surface_6wr97_1',
  Fy = '_canvas_layer_6wr97_11',
  $y = '_game_over_line_6wr97_22',
  ro = { surface: Jy, canvas_layer: Fy, game_over_line: $y },
  ky = '_layer_z1h0v_1',
  Wy = '_effect_z1h0v_7',
  Py = '_ring_z1h0v_12',
  Iy = '_score_z1h0v_24',
  ep = '_special_z1h0v_36',
  Il = { layer: ky, effect: Wy, ring: Py, score: Iy, special: ep },
  vh = Y.memo(
    Y.forwardRef((c, C) => {
      const b = Y.useRef(null),
        x = Y.useCallback((i) => {
          const d = b.current;
          if (!d) return;
          const f = document.createElement('div');
          ((f.className = `${Il.effect} ${i.isSpecial ? Il.special : ''}`),
            (f.style.left = `${i.x}px`),
            (f.style.top = `${i.y}px`),
            f.setAttribute('aria-hidden', 'true'));
          const s = document.createElement('span');
          ((s.className = Il.ring), f.appendChild(s));
          const m = () => {
            (s.removeEventListener('animationend', m), f.parentNode === d && d.removeChild(f));
          };
          if ((s.addEventListener('animationend', m), i.score > 0)) {
            const o = document.createElement('span');
            ((o.className = Il.score), (o.textContent = `+${i.score}`), f.appendChild(o));
          }
          d.appendChild(f);
        }, []),
        h = Y.useCallback(() => {
          const i = b.current;
          if (i) for (; i.firstChild; ) i.removeChild(i.firstChild);
        }, []);
      return (
        Y.useImperativeHandle(C, () => ({ add: x, clear: h }), [x, h]),
        ie.jsx('div', { ref: b, className: Il.layer, 'aria-hidden': 'true' })
      );
    })
  );
vh.displayName = 'MergeEffect';
const tp = '_line_yymkz_1',
  np = '_preview_wrap_yymkz_11',
  ap = '_preview_yymkz_11',
  so = { line: tp, preview_wrap: np, preview: ap },
  lp = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  gh = Y.memo(
    Y.forwardRef(({ initialX: c, fieldHeight: C, item: b }, x) => {
      const h = Y.useRef(null),
        i = Y.useRef(null),
        d = Y.useRef((b == null ? void 0 : b.radius) ?? 0);
      if (
        ((d.current = (b == null ? void 0 : b.radius) ?? 0),
        Y.useImperativeHandle(
          x,
          () => ({
            setX: (s) => {
              const m = h.current,
                o = i.current;
              (m && (m.style.transform = `translate3d(${s}px, 0, 0)`),
                o && (o.style.transform = `translate3d(${s - d.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !b)
      )
        return null;
      const f = b.radius * 2;
      return ie.jsxs(ie.Fragment, {
        children: [
          ie.jsx('div', {
            ref: h,
            className: so.line,
            style: { height: `${C}px`, transform: `translate3d(${c}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          ie.jsx('div', {
            ref: i,
            className: so.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${c - b.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: ie.jsx('img', {
              src: lp(b.svgPath),
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
    fieldWidth: C,
    fieldHeight: b,
    gameOverLineY: x,
    currentItem: h,
    canInteract: i,
    onDrop: d,
    mergeEffectRef: f,
  }) => {
    const s = Y.useRef(null),
      m = Y.useRef(null),
      o = Y.useRef(0.5),
      g = Y.useRef(null),
      y = Y.useRef(h);
    y.current = h;
    const r = Y.useRef(C);
    r.current = C;
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
          d(o.current),
          (M = s.current) == null || M.releasePointerCapture(T.pointerId));
      },
      _ = p(0.5);
    return ie.jsxs('div', {
      ref: s,
      className: ro.surface,
      style: { width: `${C}px`, height: `${b}px` },
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
        ie.jsx(vh, { ref: f }),
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
  vp = ({ score: c, bestScore: C, isNewRecord: b, onRestart: x }) =>
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
                children: [ie.jsx('dt', { children: 'ベスト' }), ie.jsx('dd', { children: C })],
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
  Cp = '_version_1dke1_18',
  oo = { top_bar: Tp, right: bp, version: Cp },
  Rp = '_next_1n5pn_1',
  Ap = '_label_1n5pn_7',
  Mp = '_thumb_1n5pn_14',
  zp = '_image_1n5pn_27',
  Mu = { next: Rp, label: Ap, thumb: Mp, image: zp },
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
  wp = '_label_pgke7_13',
  Bp = '_value_pgke7_20',
  Np = '_label_small_pgke7_28',
  _p = '_value_small_pgke7_35',
  ra = { score_display: Op, row: Up, label: wp, value: Bp, label_small: Np, value_small: _p },
  ph = Y.memo(({ score: c, bestScore: C }) =>
    ie.jsxs('div', {
      className: ra.score_display,
      children: [
        ie.jsxs('div', {
          className: ra.row,
          children: [
            ie.jsx('span', { className: ra.label, children: 'SCORE' }),
            ie.jsx('span', { className: ra.value, 'data-testid': 'score-value', children: c }),
          ],
        }),
        ie.jsxs('div', {
          className: ra.row,
          children: [
            ie.jsx('span', { className: ra.label_small, children: 'BEST' }),
            ie.jsx('span', { className: ra.value_small, children: C }),
          ],
        }),
      ],
    })
  );
ph.displayName = 'ScoreDisplay';
const Hp = '_toggle_1ap46_1',
  Lp = { toggle: Hp },
  Sh = Y.memo(({ isOn: c, onToggle: C }) =>
    ie.jsx('button', {
      type: 'button',
      className: Lp.toggle,
      onClick: C,
      'aria-label': c ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': c,
      children: ie.jsx('span', { 'aria-hidden': 'true', children: c ? '🔊' : '🔇' }),
    })
  );
Sh.displayName = 'SoundToggle';
const jp = '_toggle_15urq_1',
  Yp = { toggle: jp },
  Co = [{ id: 'gumi', label: 'グミ' }],
  Ro = 'gumi',
  xh = (c) => typeof c == 'string' && Co.some((C) => C.id === c),
  Eh = Y.memo(({ value: c, onChange: C }) => {
    const b = (x) => {
      const h = x.target.value;
      xh(h) && C(h);
    };
    return ie.jsx('select', {
      className: Yp.toggle,
      value: c,
      onChange: b,
      'aria-label': 'アセットテーマ',
      children: Co.map((x) => ie.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
Eh.displayName = 'ThemeToggle';
const Gp = ({
  score: c,
  bestScore: C,
  nextItem: b,
  isSoundOn: x,
  onToggleSound: h,
  themeId: i,
  onChangeTheme: d,
}) =>
  ie.jsxs('header', {
    className: oo.top_bar,
    children: [
      ie.jsx(ph, { score: c, bestScore: C }),
      ie.jsxs('div', {
        className: oo.right,
        children: [
          ie.jsx(yh, { item: b }),
          ie.jsx(Eh, { value: i, onChange: d }),
          ie.jsx(Sh, { isOn: x, onToggle: h }),
          ie.jsxs('span', {
            className: oo.version,
            'aria-label': 'ビルドバージョン',
            children: ['v', '1.0.11'],
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
      (function (c, C) {
        (function (x, h) {
          c.exports = h();
        })(Vp, function () {
          return (function (b) {
            var x = {};
            function h(i) {
              if (x[i]) return x[i].exports;
              var d = (x[i] = { i, l: !1, exports: {} });
              return (b[i].call(d.exports, d, d.exports, h), (d.l = !0), d.exports);
            }
            return (
              (h.m = b),
              (h.c = x),
              (h.d = function (i, d, f) {
                h.o(i, d) || Object.defineProperty(i, d, { enumerable: !0, get: f });
              }),
              (h.r = function (i) {
                (typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(i, '__esModule', { value: !0 }));
              }),
              (h.t = function (i, d) {
                if (
                  (d & 1 && (i = h(i)),
                  d & 8 || (d & 4 && typeof i == 'object' && i && i.__esModule))
                )
                  return i;
                var f = Object.create(null);
                if (
                  (h.r(f),
                  Object.defineProperty(f, 'default', { enumerable: !0, value: i }),
                  d & 2 && typeof i != 'string')
                )
                  for (var s in i)
                    h.d(
                      f,
                      s,
                      function (m) {
                        return i[m];
                      }.bind(null, s)
                    );
                return f;
              }),
              (h.n = function (i) {
                var d =
                  i && i.__esModule
                    ? function () {
                        return i.default;
                      }
                    : function () {
                        return i;
                      };
                return (h.d(d, 'a', d), d);
              }),
              (h.o = function (i, d) {
                return Object.prototype.hasOwnProperty.call(i, d);
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
                    (h.extend = function (d, f) {
                      var s, m;
                      typeof f == 'boolean' ? ((s = 2), (m = f)) : ((s = 1), (m = !0));
                      for (var o = s; o < arguments.length; o++) {
                        var g = arguments[o];
                        if (g)
                          for (var y in g)
                            m &&
                            g[y] &&
                            g[y].constructor === Object &&
                            (!d[y] || d[y].constructor === Object)
                              ? ((d[y] = d[y] || {}), h.extend(d[y], m, g[y]))
                              : (d[y] = g[y]);
                      }
                      return d;
                    }),
                    (h.clone = function (d, f) {
                      return h.extend({}, f, d);
                    }),
                    (h.keys = function (d) {
                      if (Object.keys) return Object.keys(d);
                      var f = [];
                      for (var s in d) f.push(s);
                      return f;
                    }),
                    (h.values = function (d) {
                      var f = [];
                      if (Object.keys) {
                        for (var s = Object.keys(d), m = 0; m < s.length; m++) f.push(d[s[m]]);
                        return f;
                      }
                      for (var o in d) f.push(d[o]);
                      return f;
                    }),
                    (h.get = function (d, f, s, m) {
                      f = f.split('.').slice(s, m);
                      for (var o = 0; o < f.length; o += 1) d = d[f[o]];
                      return d;
                    }),
                    (h.set = function (d, f, s, m, o) {
                      var g = f.split('.').slice(m, o);
                      return ((h.get(d, f, 0, -1)[g[g.length - 1]] = s), s);
                    }),
                    (h.shuffle = function (d) {
                      for (var f = d.length - 1; f > 0; f--) {
                        var s = Math.floor(h.random() * (f + 1)),
                          m = d[f];
                        ((d[f] = d[s]), (d[s] = m));
                      }
                      return d;
                    }),
                    (h.choose = function (d) {
                      return d[Math.floor(h.random() * d.length)];
                    }),
                    (h.isElement = function (d) {
                      return typeof HTMLElement < 'u'
                        ? d instanceof HTMLElement
                        : !!(d && d.nodeType && d.nodeName);
                    }),
                    (h.isArray = function (d) {
                      return Object.prototype.toString.call(d) === '[object Array]';
                    }),
                    (h.isFunction = function (d) {
                      return typeof d == 'function';
                    }),
                    (h.isPlainObject = function (d) {
                      return typeof d == 'object' && d.constructor === Object;
                    }),
                    (h.isString = function (d) {
                      return toString.call(d) === '[object String]';
                    }),
                    (h.clamp = function (d, f, s) {
                      return d < f ? f : d > s ? s : d;
                    }),
                    (h.sign = function (d) {
                      return d < 0 ? -1 : 1;
                    }),
                    (h.now = function () {
                      if (typeof window < 'u' && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        if (window.performance.webkitNow) return window.performance.webkitNow();
                      }
                      return Date.now ? Date.now() : new Date() - h._nowStartTime;
                    }),
                    (h.random = function (d, f) {
                      return (
                        (d = typeof d < 'u' ? d : 0),
                        (f = typeof f < 'u' ? f : 1),
                        d + i() * (f - d)
                      );
                    }));
                  var i = function () {
                    return ((h._seed = (h._seed * 9301 + 49297) % 233280), h._seed / 233280);
                  };
                  ((h.colorToNumber = function (d) {
                    return (
                      (d = d.replace('#', '')),
                      d.length == 3 &&
                        (d =
                          d.charAt(0) +
                          d.charAt(0) +
                          d.charAt(1) +
                          d.charAt(1) +
                          d.charAt(2) +
                          d.charAt(2)),
                      parseInt(d, 16)
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
                      var d = Array.prototype.slice.call(arguments).join(' ');
                      h._warnedOnce[d] || (h.warn(d), (h._warnedOnce[d] = !0));
                    }),
                    (h.deprecated = function (d, f, s) {
                      d[f] = h.chain(function () {
                        h.warnOnce('🔅 deprecated 🔅', s);
                      }, d[f]);
                    }),
                    (h.nextId = function () {
                      return h._nextId++;
                    }),
                    (h.indexOf = function (d, f) {
                      if (d.indexOf) return d.indexOf(f);
                      for (var s = 0; s < d.length; s++) if (d[s] === f) return s;
                      return -1;
                    }),
                    (h.map = function (d, f) {
                      if (d.map) return d.map(f);
                      for (var s = [], m = 0; m < d.length; m += 1) s.push(f(d[m]));
                      return s;
                    }),
                    (h.topologicalSort = function (d) {
                      var f = [],
                        s = [],
                        m = [];
                      for (var o in d) !s[o] && !m[o] && h._topologicalSort(o, s, m, d, f);
                      return f;
                    }),
                    (h._topologicalSort = function (d, f, s, m, o) {
                      var g = m[d] || [];
                      s[d] = !0;
                      for (var y = 0; y < g.length; y += 1) {
                        var r = g[y];
                        s[r] || f[r] || h._topologicalSort(r, f, s, m, o);
                      }
                      ((s[d] = !1), (f[d] = !0), o.push(d));
                    }),
                    (h.chain = function () {
                      for (var d = [], f = 0; f < arguments.length; f += 1) {
                        var s = arguments[f];
                        s._chained ? d.push.apply(d, s._chained) : d.push(s);
                      }
                      var m = function () {
                        for (
                          var o, g = new Array(arguments.length), y = 0, r = arguments.length;
                          y < r;
                          y++
                        )
                          g[y] = arguments[y];
                        for (y = 0; y < d.length; y += 1) {
                          var p = d[y].apply(o, g);
                          typeof p < 'u' && (o = p);
                        }
                        return o;
                      };
                      return ((m._chained = d), m);
                    }),
                    (h.chainPathBefore = function (d, f, s) {
                      return h.set(d, f, h.chain(s, h.get(d, f)));
                    }),
                    (h.chainPathAfter = function (d, f, s) {
                      return h.set(d, f, h.chain(h.get(d, f), s));
                    }),
                    (h.setDecomp = function (d) {
                      h._decomp = d;
                    }),
                    (h.getDecomp = function () {
                      var d = h._decomp;
                      try {
                        (!d && typeof window < 'u' && (d = window.decomp),
                          !d && typeof bm < 'u' && (d = bm.decomp));
                      } catch {
                        d = null;
                      }
                      return d;
                    }));
                })());
            },
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h.create = function (i) {
                    var d = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (i && h.update(d, i), d);
                  }),
                    (h.update = function (i, d, f) {
                      ((i.min.x = 1 / 0),
                        (i.max.x = -1 / 0),
                        (i.min.y = 1 / 0),
                        (i.max.y = -1 / 0));
                      for (var s = 0; s < d.length; s++) {
                        var m = d[s];
                        (m.x > i.max.x && (i.max.x = m.x),
                          m.x < i.min.x && (i.min.x = m.x),
                          m.y > i.max.y && (i.max.y = m.y),
                          m.y < i.min.y && (i.min.y = m.y));
                      }
                      f &&
                        (f.x > 0 ? (i.max.x += f.x) : (i.min.x += f.x),
                        f.y > 0 ? (i.max.y += f.y) : (i.min.y += f.y));
                    }),
                    (h.contains = function (i, d) {
                      return d.x >= i.min.x && d.x <= i.max.x && d.y >= i.min.y && d.y <= i.max.y;
                    }),
                    (h.overlaps = function (i, d) {
                      return (
                        i.min.x <= d.max.x &&
                        i.max.x >= d.min.x &&
                        i.max.y >= d.min.y &&
                        i.min.y <= d.max.y
                      );
                    }),
                    (h.translate = function (i, d) {
                      ((i.min.x += d.x), (i.max.x += d.x), (i.min.y += d.y), (i.max.y += d.y));
                    }),
                    (h.shift = function (i, d) {
                      var f = i.max.x - i.min.x,
                        s = i.max.y - i.min.y;
                      ((i.min.x = d.x), (i.max.x = d.x + f), (i.min.y = d.y), (i.max.y = d.y + s));
                    }));
                })());
            },
            function (b, x) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h.create = function (i, d) {
                    return { x: i || 0, y: d || 0 };
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
                    (h.rotate = function (i, d, f) {
                      var s = Math.cos(d),
                        m = Math.sin(d);
                      f || (f = {});
                      var o = i.x * s - i.y * m;
                      return ((f.y = i.x * m + i.y * s), (f.x = o), f);
                    }),
                    (h.rotateAbout = function (i, d, f, s) {
                      var m = Math.cos(d),
                        o = Math.sin(d);
                      s || (s = {});
                      var g = f.x + ((i.x - f.x) * m - (i.y - f.y) * o);
                      return ((s.y = f.y + ((i.x - f.x) * o + (i.y - f.y) * m)), (s.x = g), s);
                    }),
                    (h.normalise = function (i) {
                      var d = h.magnitude(i);
                      return d === 0 ? { x: 0, y: 0 } : { x: i.x / d, y: i.y / d };
                    }),
                    (h.dot = function (i, d) {
                      return i.x * d.x + i.y * d.y;
                    }),
                    (h.cross = function (i, d) {
                      return i.x * d.y - i.y * d.x;
                    }),
                    (h.cross3 = function (i, d, f) {
                      return (d.x - i.x) * (f.y - i.y) - (d.y - i.y) * (f.x - i.x);
                    }),
                    (h.add = function (i, d, f) {
                      return (f || (f = {}), (f.x = i.x + d.x), (f.y = i.y + d.y), f);
                    }),
                    (h.sub = function (i, d, f) {
                      return (f || (f = {}), (f.x = i.x - d.x), (f.y = i.y - d.y), f);
                    }),
                    (h.mult = function (i, d) {
                      return { x: i.x * d, y: i.y * d };
                    }),
                    (h.div = function (i, d) {
                      return { x: i.x / d, y: i.y / d };
                    }),
                    (h.perp = function (i, d) {
                      return ((d = d === !0 ? -1 : 1), { x: d * -i.y, y: d * i.x });
                    }),
                    (h.neg = function (i) {
                      return { x: -i.x, y: -i.y };
                    }),
                    (h.angle = function (i, d) {
                      return Math.atan2(d.y - i.y, d.x - i.x);
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
              var d = h(2),
                f = h(0);
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
                        (g = d.cross(s[p], s[r])),
                        (y = d.mult(d.add(s[p], s[r]), g)),
                        (o = d.add(o, y)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (s) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < s.length; o++)
                      ((m.x += s[o].x), (m.y += s[o].y));
                    return d.div(m, s.length);
                  }),
                  (i.area = function (s, m) {
                    for (var o = 0, g = s.length - 1, y = 0; y < s.length; y++)
                      ((o += (s[g].x - s[y].x) * (s[g].y + s[y].y)), (g = y));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (s, m) {
                    for (var o = 0, g = 0, y = s, r, p, v = 0; v < y.length; v++)
                      ((p = (v + 1) % y.length),
                        (r = Math.abs(d.cross(y[p], y[v]))),
                        (o += r * (d.dot(y[p], y[p]) + d.dot(y[p], y[v]) + d.dot(y[v], y[v]))),
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
                        (r = d.sub(y, g)),
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
                      var U = d.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        _ = d.normalise({ x: A.y - E.y, y: E.x - A.x }),
                        T = Math.sqrt(2 * Math.pow(O, 2)),
                        M = d.mult(f.clone(U), O),
                        z = d.normalise(d.mult(d.add(U, _), 0.5)),
                        D = d.sub(E, d.mult(z, T)),
                        B = o;
                      (o === -1 && (B = Math.pow(O, 0.32) * 1.75),
                        (B = f.clamp(B, g, y)),
                        B % 2 === 1 && (B += 1));
                      for (var w = Math.acos(d.dot(U, _)), j = w / B, L = 0; L < B; L++)
                        r.push(d.add(d.rotate(M, j * L), D));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (s) {
                    var m = i.mean(s);
                    return (
                      s.sort(function (o, g) {
                        return d.angle(m, o) - d.angle(m, g);
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
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], g) <= 0;
                      )
                        o.pop();
                      o.push(g);
                    }
                    for (y = s.length - 1; y >= 0; y -= 1) {
                      for (
                        g = s[y];
                        m.length >= 2 && d.cross3(m[m.length - 2], m[m.length - 1], g) <= 0;
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
              var d = h(3),
                f = h(2),
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
                        vertices: d.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
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
                      positionPrev: r.positionPrev || f.clone(r.position),
                      anglePrev: r.anglePrev || r.angle,
                      vertices: r.vertices,
                      parts: r.parts || [r],
                      isStatic: r.isStatic,
                      isSleeping: r.isSleeping,
                      parent: r.parent || r,
                    }),
                    d.rotate(r.vertices, r.angle, r.position),
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
                    (p[0].body === r ? (r.vertices = p) : (r.vertices = d.create(p, r)),
                      (r.axes = g.fromVertices(r.vertices)),
                      (r.area = d.area(r.vertices)),
                      i.setMass(r, r.density * r.area));
                    var v = d.centre(r.vertices);
                    (d.translate(r.vertices, v, -1),
                      i.setInertia(r, i._inertiaScale * d.inertia(r.vertices, r.mass)),
                      d.translate(r.vertices, r.position),
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
                        d.clockwiseSort(O);
                        var U = d.hull(O),
                          _ = d.centre(U);
                        (i.setVertices(r, U), d.translate(r.vertices, _));
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
                    var E = f.sub(p, r.position);
                    v
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = E.x),
                        (r.velocity.y = E.y),
                        (r.speed = f.magnitude(E)))
                      : ((r.positionPrev.x += E.x), (r.positionPrev.y += E.y));
                    for (var A = 0; A < r.parts.length; A++) {
                      var O = r.parts[A];
                      ((O.position.x += E.x),
                        (O.position.y += E.y),
                        d.translate(O.vertices, E),
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
                        d.rotate(O.vertices, E, r.position),
                        g.rotate(O.axes, E),
                        o.update(O.bounds, O.vertices, r.velocity),
                        A > 0 && f.rotateAbout(O.position, E, r.position, O.position));
                    }
                  }),
                  (i.setVelocity = function (r, p) {
                    var v = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - p.x * v),
                      (r.positionPrev.y = r.position.y - p.y * v),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / v),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / v),
                      (r.speed = f.magnitude(r.velocity)));
                  }),
                  (i.getVelocity = function (r) {
                    var p = i._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * p,
                      y: (r.position.y - r.positionPrev.y) * p,
                    };
                  }),
                  (i.getSpeed = function (r) {
                    return f.magnitude(i.getVelocity(r));
                  }),
                  (i.setSpeed = function (r, p) {
                    i.setVelocity(r, f.mult(f.normalise(i.getVelocity(r)), p));
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
                    i.setPosition(r, f.add(r.position, p), v);
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
                      (d.scale(_.vertices, p, v, E),
                        (_.axes = g.fromVertices(_.vertices)),
                        (_.area = d.area(_.vertices)),
                        i.setMass(_, r.density * _.area),
                        d.translate(_.vertices, { x: -_.position.x, y: -_.position.y }),
                        i.setInertia(_, i._inertiaScale * d.inertia(_.vertices, _.mass)),
                        d.translate(_.vertices, { x: _.position.x, y: _.position.y }),
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
                      (d.translate(T.vertices, r.velocity),
                        _ > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (d.rotate(T.vertices, r.angularVelocity, r.position),
                          g.rotate(T.axes, r.angularVelocity),
                          _ > 0 &&
                            f.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
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
                        (p.centre = f.add(p.centre, f.mult(E.position, A))));
                    }
                    return ((p.centre = f.div(p.centre, p.mass)), p);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(0);
              (function () {
                ((i.on = function (f, s, m) {
                  for (var o = s.split(' '), g, y = 0; y < o.length; y++)
                    ((g = o[y]),
                      (f.events = f.events || {}),
                      (f.events[g] = f.events[g] || []),
                      f.events[g].push(m));
                  return m;
                }),
                  (i.off = function (f, s, m) {
                    if (!s) {
                      f.events = {};
                      return;
                    }
                    typeof s == 'function' && ((m = s), (s = d.keys(f.events).join(' ')));
                    for (var o = s.split(' '), g = 0; g < o.length; g++) {
                      var y = f.events[o[g]],
                        r = [];
                      if (m && y) for (var p = 0; p < y.length; p++) y[p] !== m && r.push(y[p]);
                      f.events[o[g]] = r;
                    }
                  }),
                  (i.trigger = function (f, s, m) {
                    var o,
                      g,
                      y,
                      r,
                      p = f.events;
                    if (p && d.keys(p).length > 0) {
                      (m || (m = {}), (o = s.split(' ')));
                      for (var v = 0; v < o.length; v++)
                        if (((g = o[v]), (y = p[g]), y)) {
                          ((r = d.clone(m, !1)), (r.name = g), (r.source = f));
                          for (var E = 0; E < y.length; E++) y[E].apply(f, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(5),
                f = h(0),
                s = h(1),
                m = h(4);
              (function () {
                ((i.create = function (o) {
                  return f.extend(
                    {
                      id: f.nextId(),
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
                    d.trigger(o, 'beforeAdd', { object: g });
                    for (var r = 0; r < y.length; r++) {
                      var p = y[r];
                      switch (p.type) {
                        case 'body':
                          if (p.parent !== p) {
                            f.warn(
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
                    return (d.trigger(o, 'afterAdd', { object: g }), o);
                  }),
                  (i.remove = function (o, g, y) {
                    var r = [].concat(g);
                    d.trigger(o, 'beforeRemove', { object: g });
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
                    return (d.trigger(o, 'afterRemove', { object: g }), o);
                  }),
                  (i.addComposite = function (o, g) {
                    return (o.composites.push(g), (g.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, g, y) {
                    var r = f.indexOf(o.composites, g);
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
                    var r = f.indexOf(o.bodies, g);
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
                    var r = f.indexOf(o.constraints, g);
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
                      g[y].id = f.nextId();
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
              var d = h(4),
                f = h(5),
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
                        v = d.getSpeed(p),
                        E = d.getAngularSpeed(p),
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
                        g || f.trigger(m, 'sleepStart'))
                      : ((m.isSleeping = !1), (m.sleepCounter = 0), g && f.trigger(m, 'sleepEnd'));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(3),
                f = h(9);
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
                    var p = r && r.table[f.id(g, y)],
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
                      B = y.position.x - g.position.x,
                      w = y.position.y - g.position.y;
                    (z * B + D * w >= 0 && ((z = -z), (D = -D)),
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
                      (d.contains(g.vertices, j[0]) && (_[L++] = j[0]),
                      d.contains(g.vertices, j[1]) && (_[L++] = j[1]),
                      L < 2)
                    ) {
                      var F = i._findSupports(y, g, A, -1);
                      (d.contains(y.vertices, F[0]) && (_[L++] = F[0]),
                        L < 2 && d.contains(y.vertices, F[1]) && (_[L++] = F[1]));
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
                      B,
                      w,
                      j,
                      L,
                      F;
                    for (L = 0; L < T; L++) {
                      var te = p[L],
                        I = te.x,
                        V = te.y,
                        K = A * I + O * V,
                        le = U * I + _ * V,
                        oe = K,
                        de = le;
                      for (F = 1; F < v; F += 1)
                        ((j = y[F].x * I + y[F].y * V), j > oe ? (oe = j) : j < K && (K = j));
                      for (F = 1; F < E; F += 1)
                        ((j = r[F].x * I + r[F].y * V), j > de ? (de = j) : j < le && (le = j));
                      if (
                        ((B = oe - le),
                        (w = de - K),
                        (D = B < w ? B : w),
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
                      B,
                      w;
                    for (w = 1; w < E; w += 1)
                      ((M = v[w]),
                        (B = U * (A - M.x) + _ * (O - M.y)),
                        B < z && ((z = B), (T = M)));
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
              var d = h(16);
              (function () {
                ((i.create = function (f, s) {
                  var m = f.bodyA,
                    o = f.bodyB,
                    g = {
                      id: i.id(m, o),
                      bodyA: m,
                      bodyB: o,
                      collision: f,
                      contacts: [d.create(), d.create()],
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
                  return (i.update(g, f, s), g);
                }),
                  (i.update = function (f, s, m) {
                    var o = s.supports,
                      g = s.supportCount,
                      y = f.contacts,
                      r = s.parentA,
                      p = s.parentB;
                    ((f.isActive = !0),
                      (f.timeUpdated = m),
                      (f.collision = s),
                      (f.separation = s.depth),
                      (f.inverseMass = r.inverseMass + p.inverseMass),
                      (f.friction = r.friction < p.friction ? r.friction : p.friction),
                      (f.frictionStatic =
                        r.frictionStatic > p.frictionStatic ? r.frictionStatic : p.frictionStatic),
                      (f.restitution =
                        r.restitution > p.restitution ? r.restitution : p.restitution),
                      (f.slop = r.slop > p.slop ? r.slop : p.slop),
                      (f.contactCount = g),
                      (s.pair = f));
                    var v = o[0],
                      E = y[0],
                      A = o[1],
                      O = y[1];
                    ((O.vertex === v || E.vertex === A) && ((y[1] = E), (y[0] = E = O), (O = y[1])),
                      (E.vertex = v),
                      (O.vertex = A));
                  }),
                  (i.setActive = function (f, s, m) {
                    s
                      ? ((f.isActive = !0), (f.timeUpdated = m))
                      : ((f.isActive = !1), (f.contactCount = 0));
                  }),
                  (i.id = function (f, s) {
                    return f.id < s.id
                      ? f.id.toString(36) + ':' + s.id.toString(36)
                      : s.id.toString(36) + ':' + f.id.toString(36);
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(3),
                f = h(2),
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
                    var p = r.bodyA ? f.add(r.bodyA.position, r.pointA) : r.pointA,
                      v = r.bodyB ? f.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = f.magnitude(f.sub(p, v));
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
                        (f.rotate(E, p.angle - y.angleA, E), (y.angleA = p.angle)),
                        v &&
                          !v.isStatic &&
                          (f.rotate(A, v.angle - y.angleB, A), (y.angleB = v.angle)));
                      var O = E,
                        U = A;
                      if (
                        (p && (O = f.add(p.position, E)),
                        v && (U = f.add(v.position, A)),
                        !(!O || !U))
                      ) {
                        var _ = f.sub(O, U),
                          T = f.magnitude(_);
                        T < i._minLength && (T = i._minLength);
                        var M = (T - y.length) / T,
                          z = y.stiffness >= 1 || y.length === 0,
                          D = z ? y.stiffness * r : y.stiffness * r * r,
                          B = y.damping * r,
                          w = f.mult(_, M * D),
                          j = (p ? p.inverseMass : 0) + (v ? v.inverseMass : 0),
                          L = (p ? p.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          F = j + L,
                          te,
                          I,
                          V,
                          K,
                          le;
                        if (B > 0) {
                          var oe = f.create();
                          ((V = f.div(_, T)),
                            (le = f.sub(
                              (v && f.sub(v.position, v.positionPrev)) || oe,
                              (p && f.sub(p.position, p.positionPrev)) || oe
                            )),
                            (K = f.dot(V, le)));
                        }
                        (p &&
                          !p.isStatic &&
                          ((I = p.inverseMass / j),
                          (p.constraintImpulse.x -= w.x * I),
                          (p.constraintImpulse.y -= w.y * I),
                          (p.position.x -= w.x * I),
                          (p.position.y -= w.y * I),
                          B > 0 &&
                            ((p.positionPrev.x -= B * V.x * K * I),
                            (p.positionPrev.y -= B * V.y * K * I)),
                          (te =
                            (f.cross(E, w) / F) *
                            i._torqueDampen *
                            p.inverseInertia *
                            (1 - y.angularStiffness)),
                          (p.constraintImpulse.angle -= te),
                          (p.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((I = v.inverseMass / j),
                            (v.constraintImpulse.x += w.x * I),
                            (v.constraintImpulse.y += w.y * I),
                            (v.position.x += w.x * I),
                            (v.position.y += w.y * I),
                            B > 0 &&
                              ((v.positionPrev.x += B * V.x * K * I),
                              (v.positionPrev.y += B * V.y * K * I)),
                            (te =
                              (f.cross(A, w) / F) *
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
                          (d.translate(A.vertices, v),
                            E > 0 && ((A.position.x += v.x), (A.position.y += v.y)),
                            v.angle !== 0 &&
                              (d.rotate(A.vertices, v.angle, p.position),
                              o.rotate(A.axes, v.angle),
                              E > 0 && f.rotateAbout(A.position, v.angle, p.position, A.position)),
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
              var d = h(2),
                f = h(0);
              (function () {
                ((i.fromVertices = function (s) {
                  for (var m = {}, o = 0; o < s.length; o++) {
                    var g = (o + 1) % s.length,
                      y = d.normalise({ x: s[g].y - s[o].y, y: s[o].x - s[g].x }),
                      r = y.y === 0 ? 1 / 0 : y.x / y.y;
                    ((r = r.toFixed(3).toString()), (m[r] = y));
                  }
                  return f.values(m);
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
              var d = h(3),
                f = h(0),
                s = h(4),
                m = h(1),
                o = h(2);
              (function () {
                ((i.rectangle = function (g, y, r, p, v) {
                  v = v || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: g, y },
                    vertices: d.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + p + ' L 0 ' + p),
                  };
                  if (v.chamfer) {
                    var A = v.chamfer;
                    ((E.vertices = d.chamfer(
                      E.vertices,
                      A.radius,
                      A.quality,
                      A.qualityMin,
                      A.qualityMax
                    )),
                      delete v.chamfer);
                  }
                  return s.create(f.extend({}, E, v));
                }),
                  (i.trapezoid = function (g, y, r, p, v, E) {
                    ((E = E || {}),
                      v >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
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
                      vertices: d.fromPath(T),
                    };
                    if (E.chamfer) {
                      var z = E.chamfer;
                      ((M.vertices = d.chamfer(
                        M.vertices,
                        z.radius,
                        z.quality,
                        z.qualityMin,
                        z.qualityMax
                      )),
                        delete E.chamfer);
                    }
                    return s.create(f.extend({}, M, E));
                  }),
                  (i.circle = function (g, y, r, p, v) {
                    p = p || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    v = v || 25;
                    var A = Math.ceil(Math.max(10, Math.min(v, r)));
                    return (A % 2 === 1 && (A += 1), i.polygon(g, y, A, r, f.extend({}, E, p)));
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
                      vertices: d.fromPath(A),
                    };
                    if (v.chamfer) {
                      var D = v.chamfer;
                      ((z.vertices = d.chamfer(
                        z.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return s.create(f.extend({}, z, v));
                  }),
                  (i.fromVertices = function (g, y, r, p, v, E, A, O) {
                    var U = f.getDecomp(),
                      _,
                      T,
                      M,
                      z,
                      D,
                      B,
                      w,
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
                        f.isArray(r[0]) || (r = [r]),
                        F = 0;
                      F < r.length;
                      F += 1
                    )
                      if (
                        ((B = r[F]),
                        (z = d.isConvex(B)),
                        (D = !z),
                        D &&
                          !_ &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        z || !_)
                      )
                        (z ? (B = d.clockwiseSort(B)) : (B = d.hull(B)),
                          M.push({ position: { x: g, y }, vertices: B }));
                      else {
                        var I = B.map(function (ne) {
                          return [ne.x, ne.y];
                        });
                        (U.makeCCW(I),
                          E !== !1 && U.removeCollinearPoints(I, E),
                          O !== !1 && U.removeDuplicatePoints && U.removeDuplicatePoints(I, O));
                        var V = U.quickDecomp(I);
                        for (w = 0; w < V.length; w++) {
                          var K = V[w],
                            le = K.map(function (ne) {
                              return { x: ne[0], y: ne[1] };
                            });
                          (A > 0 && d.area(le) < A) ||
                            M.push({ position: d.centre(le), vertices: le });
                        }
                      }
                    for (w = 0; w < M.length; w++) M[w] = s.create(f.extend(M[w], p));
                    if (v) {
                      var oe = 5;
                      for (w = 0; w < M.length; w++) {
                        var de = M[w];
                        for (j = w + 1; j < M.length; j++) {
                          var H = M[j];
                          if (m.overlaps(de.bounds, H.bounds)) {
                            var $ = de.vertices,
                              W = H.vertices;
                            for (L = 0; L < de.vertices.length; L++)
                              for (te = 0; te < H.vertices.length; te++) {
                                var ae = o.magnitudeSquared(o.sub($[(L + 1) % $.length], W[te])),
                                  ue = o.magnitudeSquared(o.sub($[L], W[(te + 1) % W.length]));
                                ae < oe &&
                                  ue < oe &&
                                  (($[L].isInternal = !0), (W[te].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return M.length > 1
                      ? ((T = s.create(f.extend({ parts: M.slice(0) }, p))),
                        s.setPosition(T, { x: g, y }),
                        T)
                      : M[0];
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(0),
                f = h(8);
              (function () {
                ((i.create = function (s) {
                  var m = { bodies: [], collisions: [], pairs: null };
                  return d.extend(m, s);
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
                      r = f.collides,
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
                        B = D === 1;
                      for (A = E + 1; A < g; A++) {
                        var w = o[A],
                          j = w.bounds;
                        if (j.min.x > _) break;
                        if (
                          !(T < j.min.y || M > j.max.y) &&
                          !(z && (w.isStatic || w.isSleeping)) &&
                          y(O.collisionFilter, w.collisionFilter)
                        ) {
                          var L = w.parts.length;
                          if (B && L === 1) {
                            var F = r(O, w, m);
                            F && (p[v++] = F);
                          } else
                            for (var te = D > 1 ? 1 : 0, I = L > 1 ? 1 : 0, V = te; V < D; V++)
                              for (var K = O.parts[V], U = K.bounds, le = I; le < L; le++) {
                                var oe = w.parts[le],
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
              var d = h(0);
              (function () {
                ((i.create = function (f) {
                  var s = {};
                  return (
                    f ||
                      d.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (s.element = f || document.body),
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
                  (i.setElement = function (f, s) {
                    ((f.element = s),
                      s.addEventListener('mousemove', f.mousemove, { passive: !0 }),
                      s.addEventListener('mousedown', f.mousedown, { passive: !0 }),
                      s.addEventListener('mouseup', f.mouseup, { passive: !0 }),
                      s.addEventListener('wheel', f.mousewheel, { passive: !1 }),
                      s.addEventListener('touchmove', f.mousemove, { passive: !1 }),
                      s.addEventListener('touchstart', f.mousedown, { passive: !1 }),
                      s.addEventListener('touchend', f.mouseup, { passive: !1 }));
                  }),
                  (i.clearSourceEvents = function (f) {
                    ((f.sourceEvents.mousemove = null),
                      (f.sourceEvents.mousedown = null),
                      (f.sourceEvents.mouseup = null),
                      (f.sourceEvents.mousewheel = null),
                      (f.wheelDelta = 0));
                  }),
                  (i.setOffset = function (f, s) {
                    ((f.offset.x = s.x),
                      (f.offset.y = s.y),
                      (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                      (f.position.y = f.absolute.y * f.scale.y + f.offset.y));
                  }),
                  (i.setScale = function (f, s) {
                    ((f.scale.x = s.x),
                      (f.scale.y = s.y),
                      (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                      (f.position.y = f.absolute.y * f.scale.y + f.offset.y));
                  }),
                  (i._getRelativeMousePosition = function (f, s, m) {
                    var o = s.getBoundingClientRect(),
                      g = document.documentElement || document.body.parentNode || document.body,
                      y = window.pageXOffset !== void 0 ? window.pageXOffset : g.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : g.scrollTop,
                      p = f.changedTouches,
                      v,
                      E;
                    return (
                      p
                        ? ((v = p[0].pageX - o.left - y), (E = p[0].pageY - o.top - r))
                        : ((v = f.pageX - o.left - y), (E = f.pageY - o.top - r)),
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
              var d = h(0);
              (function () {
                ((i._registry = {}),
                  (i.register = function (f) {
                    if (
                      (i.isPlugin(f) ||
                        d.warn(
                          'Plugin.register:',
                          i.toString(f),
                          'does not implement all required fields.'
                        ),
                      f.name in i._registry)
                    ) {
                      var s = i._registry[f.name],
                        m = i.versionParse(f.version).number,
                        o = i.versionParse(s.version).number;
                      m > o
                        ? (d.warn(
                            'Plugin.register:',
                            i.toString(s),
                            'was upgraded to',
                            i.toString(f)
                          ),
                          (i._registry[f.name] = f))
                        : m < o
                          ? d.warn(
                              'Plugin.register:',
                              i.toString(s),
                              'can not be downgraded to',
                              i.toString(f)
                            )
                          : f !== s &&
                            d.warn(
                              'Plugin.register:',
                              i.toString(f),
                              'is already registered to different plugin object'
                            );
                    } else i._registry[f.name] = f;
                    return f;
                  }),
                  (i.resolve = function (f) {
                    return i._registry[i.dependencyParse(f).name];
                  }),
                  (i.toString = function (f) {
                    return typeof f == 'string'
                      ? f
                      : (f.name || 'anonymous') + '@' + (f.version || f.range || '0.0.0');
                  }),
                  (i.isPlugin = function (f) {
                    return f && f.name && f.version && f.install;
                  }),
                  (i.isUsed = function (f, s) {
                    return f.used.indexOf(s) > -1;
                  }),
                  (i.isFor = function (f, s) {
                    var m = f.for && i.dependencyParse(f.for);
                    return !f.for || (s.name === m.name && i.versionSatisfies(s.version, m.range));
                  }),
                  (i.use = function (f, s) {
                    if (((f.uses = (f.uses || []).concat(s || [])), f.uses.length === 0)) {
                      d.warn(
                        'Plugin.use:',
                        i.toString(f),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var m = i.dependencies(f), o = d.topologicalSort(m), g = [], y = 0;
                      y < o.length;
                      y += 1
                    )
                      if (o[y] !== f.name) {
                        var r = i.resolve(o[y]);
                        if (!r) {
                          g.push('❌ ' + o[y]);
                          continue;
                        }
                        i.isUsed(f, r.name) ||
                          (i.isFor(r, f) ||
                            (d.warn(
                              'Plugin.use:',
                              i.toString(r),
                              'is for',
                              r.for,
                              'but installed on',
                              i.toString(f) + '.'
                            ),
                            (r._warned = !0)),
                          r.install
                            ? r.install(f)
                            : (d.warn(
                                'Plugin.use:',
                                i.toString(r),
                                'does not specify an install function.'
                              ),
                              (r._warned = !0)),
                          r._warned
                            ? (g.push('🔶 ' + i.toString(r)), delete r._warned)
                            : g.push('✅ ' + i.toString(r)),
                          f.used.push(r.name));
                      }
                    g.length > 0 && d.info(g.join('  '));
                  }),
                  (i.dependencies = function (f, s) {
                    var m = i.dependencyParse(f),
                      o = m.name;
                    if (((s = s || {}), !(o in s))) {
                      ((f = i.resolve(f) || f),
                        (s[o] = d.map(f.uses || [], function (y) {
                          i.isPlugin(y) && i.register(y);
                          var r = i.dependencyParse(y),
                            p = i.resolve(y);
                          return (
                            p && !i.versionSatisfies(p.version, r.range)
                              ? (d.warn(
                                  'Plugin.dependencies:',
                                  i.toString(p),
                                  'does not satisfy',
                                  i.toString(r),
                                  'used by',
                                  i.toString(m) + '.'
                                ),
                                (p._warned = !0),
                                (f._warned = !0))
                              : p ||
                                (d.warn(
                                  'Plugin.dependencies:',
                                  i.toString(y),
                                  'used by',
                                  i.toString(m),
                                  'could not be resolved.'
                                ),
                                (f._warned = !0)),
                            r.name
                          );
                        })));
                      for (var g = 0; g < s[o].length; g += 1) i.dependencies(s[o][g], s);
                      return s;
                    }
                  }),
                  (i.dependencyParse = function (f) {
                    if (d.isString(f)) {
                      var s = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        s.test(f) ||
                          d.warn('Plugin.dependencyParse:', f, 'is not a valid dependency string.'),
                        { name: f.split('@')[0], range: f.split('@')[1] || '*' }
                      );
                    }
                    return { name: f.name, range: f.range || f.version };
                  }),
                  (i.versionParse = function (f) {
                    var s = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    s.test(f) ||
                      d.warn('Plugin.versionParse:', f, 'is not a valid version or range.');
                    var m = s.exec(f),
                      o = Number(m[4]),
                      g = Number(m[5]),
                      y = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: f,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: g,
                      patch: y,
                      parts: [o, g, y],
                      prerelease: m[7],
                      number: o * 1e8 + g * 1e4 + y,
                    };
                  }),
                  (i.versionSatisfies = function (f, s) {
                    s = s || '*';
                    var m = i.versionParse(s),
                      o = i.versionParse(f);
                    if (m.isRange) {
                      if (m.operator === '*' || f === '*') return !0;
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
                    return f === s || f === '*';
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
              var d = h(7),
                f = h(18),
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
                    var B = g.allBodies(O),
                      w = g.allConstraints(O);
                    for (
                      O.isModified && (s.setBodies(U, B), g.setModified(O, !1, !1, !0)),
                        v.enableSleeping && d.update(B, E),
                        i._bodiesApplyGravity(B, v.gravity),
                        E > 0 && i._bodiesUpdate(B, E),
                        o.trigger(v, 'beforeSolve', D),
                        y.preSolveAll(B),
                        z = 0;
                      z < v.constraintIterations;
                      z++
                    )
                      y.solveAll(w, E);
                    y.postSolveAll(B);
                    var j = s.collisions(U);
                    (m.update(_, j, M),
                      v.enableSleeping && d.afterCollisions(_.list),
                      _.collisionStart.length > 0 &&
                        o.trigger(v, 'collisionStart', {
                          pairs: _.collisionStart,
                          timestamp: T.timestamp,
                          delta: E,
                        }));
                    var L = r.clamp(20 / v.positionIterations, 0, 1);
                    for (f.preSolvePosition(_.list), z = 0; z < v.positionIterations; z++)
                      f.solvePosition(_.list, E, L);
                    for (
                      f.postSolvePosition(B), y.preSolveAll(B), z = 0;
                      z < v.constraintIterations;
                      z++
                    )
                      y.solveAll(w, E);
                    for (
                      y.postSolveAll(B), f.preSolveVelocity(_.list), z = 0;
                      z < v.velocityIterations;
                      z++
                    )
                      f.solveVelocity(_.list, E);
                    return (
                      i._bodiesUpdateVelocities(B),
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
                      i._bodiesClearForces(B),
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
                        (d.set(U, !1), (U.id = r.nextId()));
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
              var d = h(3),
                f = h(0),
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
                      T = f.clamp(o / f._baseDelta, 0, 1),
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
                        y = d.translate,
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
                            var B = U.x * z + _.x * D,
                              w = U.y * z + _.y * D;
                            (A.isStatic ||
                              A.isSleeping ||
                              ((A.positionPrev.x += B * A.inverseMass),
                              (A.positionPrev.y += w * A.inverseMass),
                              (A.anglePrev +=
                                A.inverseInertia *
                                ((M.x - A.position.x) * w - (M.y - A.position.y) * B))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= B * O.inverseMass),
                                (O.positionPrev.y -= w * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((M.x - O.position.x) * w - (M.y - O.position.y) * B))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (m, o) {
                    var g = o / f._baseDelta,
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
                          B = D.parentA,
                          w = D.parentB,
                          j = D.normal.x,
                          L = D.normal.y,
                          F = D.tangent.x,
                          te = D.tangent.y,
                          I = z.inverseMass,
                          V = z.friction * z.frictionStatic * E,
                          K = z.contacts,
                          le = z.contactCount,
                          oe = 1 / le,
                          de = B.position.x - B.positionPrev.x,
                          H = B.position.y - B.positionPrev.y,
                          $ = B.angle - B.anglePrev,
                          W = w.position.x - w.positionPrev.x,
                          ae = w.position.y - w.positionPrev.y,
                          ue = w.angle - w.anglePrev;
                        for (M = 0; M < le; M++) {
                          var ne = K[M],
                            re = ne.vertex,
                            he = re.x - B.position.x,
                            ge = re.y - B.position.y,
                            De = re.x - w.position.x,
                            Oe = re.y - w.position.y,
                            _e = de - ge * $,
                            ht = H + he * $,
                            Pe = W - Oe * ue,
                            al = ae + De * ue,
                            ca = _e - Pe,
                            ii = ht - al,
                            fa = j * ca + L * ii,
                            vt = F * ca + te * ii,
                            da = z.separation + fa,
                            Gn = Math.min(da, 1);
                          Gn = da < 0 ? 0 : Gn;
                          var ui = Gn * V;
                          vt < -ui || vt > ui
                            ? ((_ = vt > 0 ? vt : -vt),
                              (U = z.friction * (vt > 0 ? 1 : -1) * r),
                              U < -_ ? (U = -_) : U > _ && (U = _))
                            : ((U = vt), (_ = A));
                          var ri = he * L - ge * j,
                            lt = De * L - Oe * j,
                            si = oe / (I + B.inverseInertia * ri * ri + w.inverseInertia * lt * lt),
                            Vn = (1 + z.restitution) * fa * si;
                          if (((U *= si), fa < p)) ne.normalImpulse = 0;
                          else {
                            var oi = ne.normalImpulse;
                            ((ne.normalImpulse += Vn),
                              ne.normalImpulse > 0 && (ne.normalImpulse = 0),
                              (Vn = ne.normalImpulse - oi));
                          }
                          if (vt < -v || vt > v) ne.tangentImpulse = 0;
                          else {
                            var ma = ne.tangentImpulse;
                            ((ne.tangentImpulse += U),
                              ne.tangentImpulse < -_ && (ne.tangentImpulse = -_),
                              ne.tangentImpulse > _ && (ne.tangentImpulse = _),
                              (U = ne.tangentImpulse - ma));
                          }
                          var ha = j * Vn + F * U,
                            qn = L * Vn + te * U;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += ha * B.inverseMass),
                            (B.positionPrev.y += qn * B.inverseMass),
                            (B.anglePrev += (he * qn - ge * ha) * B.inverseInertia)),
                            w.isStatic ||
                              w.isSleeping ||
                              ((w.positionPrev.x -= ha * w.inverseMass),
                              (w.positionPrev.y -= qn * w.inverseMass),
                              (w.anglePrev -= (De * qn - Oe * ha) * w.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(9),
                f = h(0);
              (function () {
                ((i.create = function (s) {
                  return f.extend(
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
                    var g = d.update,
                      y = d.create,
                      r = d.setActive,
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
                      B,
                      w,
                      j;
                    for (j = 0; j < T; j++)
                      ((B = m[j]),
                        (w = B.pair),
                        w
                          ? (w.isActive && (_[D++] = w), g(w, B, o))
                          : ((w = y(B, o)), (p[w.id] = w), (O[M++] = w), (v[A++] = w)));
                    for (A = 0, E = v.length, j = 0; j < E; j++)
                      ((w = v[j]),
                        w.timeUpdated >= o
                          ? (v[A++] = w)
                          : (r(w, !1, o),
                            w.collision.bodyA.sleepCounter > 0 && w.collision.bodyB.sleepCounter > 0
                              ? (v[A++] = w)
                              : ((U[z++] = w), delete p[w.id])));
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
              var d = h(15),
                f = h(0);
              (function () {
                ((i.name = 'matter-js'),
                  (i.version = '0.20.0'),
                  (i.uses = []),
                  (i.used = []),
                  (i.use = function () {
                    d.use(i, Array.prototype.slice.call(arguments));
                  }),
                  (i.before = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), f.chainPathBefore(i, s, m));
                  }),
                  (i.after = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), f.chainPathAfter(i, s, m));
                  }));
              })();
            },
            function (b, x, h) {
              var i = {};
              b.exports = i;
              var d = h(6),
                f = h(10),
                s = h(0),
                m = h(4),
                o = h(12),
                g = s.deprecated;
              (function () {
                ((i.stack = function (y, r, p, v, E, A, O) {
                  for (
                    var U = d.create({ label: 'Stack' }), _ = y, T = r, M, z = 0, D = 0;
                    D < v;
                    D++
                  ) {
                    for (var B = 0, w = 0; w < p; w++) {
                      var j = O(_, T, w, D, M, z);
                      if (j) {
                        var L = j.bounds.max.y - j.bounds.min.y,
                          F = j.bounds.max.x - j.bounds.min.x;
                        (L > B && (B = L),
                          m.translate(j, { x: F * 0.5, y: L * 0.5 }),
                          (_ = j.bounds.max.x + E),
                          d.addBody(U, j),
                          (M = j),
                          (z += 1));
                      } else _ += E;
                    }
                    ((T += B + A), (_ = y));
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
                        B = T.bounds.max.x - T.bounds.min.x,
                        w = {
                          bodyA: _,
                          pointA: { x: z * r, y: M * p },
                          bodyB: T,
                          pointB: { x: B * v, y: D * E },
                        },
                        j = s.extend(w, A);
                      d.addConstraint(y, f.create(j));
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
                          d.addConstraint(y, f.create(s.extend({ bodyA: _, bodyB: T }, E))));
                      if (O > 0)
                        for (U = 0; U < r; U++)
                          ((_ = A[U + (O - 1) * r]),
                            (T = A[U + O * r]),
                            d.addConstraint(y, f.create(s.extend({ bodyA: _, bodyB: T }, E))),
                            v &&
                              U > 0 &&
                              ((M = A[U - 1 + (O - 1) * r]),
                              d.addConstraint(y, f.create(s.extend({ bodyA: M, bodyB: T }, E)))),
                            v &&
                              U < r - 1 &&
                              ((M = A[U + 1 + (O - 1) * r]),
                              d.addConstraint(y, f.create(s.extend({ bodyA: M, bodyB: T }, E)))));
                    }
                    return ((y.label += ' Mesh'), y);
                  }),
                  (i.pyramid = function (y, r, p, v, E, A, O) {
                    return i.stack(y, r, p, v, E, A, function (U, _, T, M, z, D) {
                      var B = Math.min(v, Math.ceil(p / 2)),
                        w = z ? z.bounds.max.x - z.bounds.min.x : 0;
                      if (!(M > B)) {
                        M = B - M;
                        var j = M,
                          L = p - 1 - M;
                        if (!(T < j || T > L)) {
                          D === 1 && m.translate(z, { x: (T + (p % 2 === 1 ? 1 : -1)) * w, y: 0 });
                          var F = z ? T * w : 0;
                          return O(y + F + T * E, _, T, M, z, D);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (y, r, p, v, E) {
                    for (var A = d.create({ label: 'Newtons Cradle' }), O = 0; O < p; O++) {
                      var U = 1.9,
                        _ = o.circle(y + O * (v * U), r + E, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = f.create({ pointA: { x: y + O * (v * U), y: r }, bodyB: _ });
                      (d.addBody(A, _), d.addConstraint(A, T));
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
                      M = d.create({ label: 'Car' }),
                      z = o.rectangle(y, r, p, v, {
                        collisionFilter: { group: A },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      D = o.circle(y + U, r + T, E, {
                        collisionFilter: { group: A },
                        friction: 0.8,
                      }),
                      B = o.circle(y + _, r + T, E, {
                        collisionFilter: { group: A },
                        friction: 0.8,
                      }),
                      w = f.create({
                        bodyB: z,
                        pointB: { x: U, y: T },
                        bodyA: D,
                        stiffness: 1,
                        length: 0,
                      }),
                      j = f.create({
                        bodyB: z,
                        pointB: { x: _, y: T },
                        bodyA: B,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(M, z),
                      d.addBody(M, D),
                      d.addBody(M, B),
                      d.addConstraint(M, w),
                      d.addConstraint(M, j),
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
              var d = h(9),
                f = h(0),
                s = f.deprecated;
              (function () {
                ((i.create = function (m) {
                  var o = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return f.extend(o, m);
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
                                B =
                                  p >= T.region.startCol &&
                                  p <= T.region.endCol &&
                                  v >= T.region.startRow &&
                                  v <= T.region.endRow;
                              (!D && B && B && O && i._bucketRemoveBody(m, O, T),
                                (T.region === M || (D && !B) || y) &&
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
                      r = d.id,
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
                      r = d.id,
                      p;
                    o.splice(f.indexOf(o, g), 1);
                    var v = o.length;
                    for (p = 0; p < v; p++) {
                      var E = y[r(g, o[p])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      g = m.pairs,
                      y = f.keys(g),
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
              var d = h(3),
                f = h(7),
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
                      if (O.bodyB) (f.set(O.bodyB, !1), (O.pointA = A.position));
                      else
                        for (var _ = 0; _ < E.length; _++)
                          if (
                            ((U = E[_]),
                            p.contains(U.bounds, A.position) &&
                              o.canCollide(U.collisionFilter, v.collisionFilter))
                          )
                            for (var T = U.parts.length > 1 ? 1 : 0; T < U.parts.length; T++) {
                              var M = U.parts[T];
                              if (d.contains(M.vertices, A.position)) {
                                ((O.pointA = A.position),
                                  (O.bodyB = v.body = U),
                                  (O.pointB = {
                                    x: A.position.x - U.position.x,
                                    y: A.position.y - U.position.y,
                                  }),
                                  (O.angleB = U.angle),
                                  f.set(U, !1),
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
              var d = h(2),
                f = h(8),
                s = h(1),
                m = h(12),
                o = h(3);
              (function () {
                ((i.collides = function (g, y) {
                  for (
                    var r = [], p = y.length, v = g.bounds, E = f.collides, A = s.overlaps, O = 0;
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
                      var v = d.angle(y, r),
                        E = d.magnitude(d.sub(y, r)),
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
              var d = h(4),
                f = h(0),
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
                        T(f.now());
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
                      z = f.extend(M, T);
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
                      f.isElement(z.element) && z.element.appendChild(z.canvas),
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
                      (M = f.isArray(M) ? M : [M]),
                      (z = z || { x: 0, y: 0 }));
                    for (
                      var B = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, w = 0;
                      w < M.length;
                      w += 1
                    ) {
                      var j = M[w],
                        L = j.bounds ? j.bounds.min : j.min || j.position || j,
                        F = j.bounds ? j.bounds.max : j.max || j.position || j;
                      L &&
                        F &&
                        (L.x < B.min.x && (B.min.x = L.x),
                        F.x > B.max.x && (B.max.x = F.x),
                        L.y < B.min.y && (B.min.y = L.y),
                        F.y > B.max.y && (B.max.y = F.y));
                    }
                    var te = B.max.x - B.min.x + 2 * z.x,
                      I = B.max.y - B.min.y + 2 * z.y,
                      V = T.canvas.height,
                      K = T.canvas.width,
                      le = K / V,
                      oe = te / I,
                      de = 1,
                      H = 1;
                    (oe > le ? (H = oe / le) : (de = le / oe),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = B.min.x),
                      (T.bounds.max.x = B.min.x + te * de),
                      (T.bounds.min.y = B.min.y),
                      (T.bounds.max.y = B.min.y + I * H),
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
                      B = z / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / D,
                      0,
                      0,
                      T.options.pixelRatio / B,
                      0,
                      0
                    ),
                      T.context.translate(-T.bounds.min.x, -T.bounds.min.y));
                  }),
                  (i.endViewTransform = function (T) {
                    T.context.setTransform(T.options.pixelRatio, 0, 0, T.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (T, M) {
                    var z = f.now(),
                      D = T.engine,
                      B = D.world,
                      w = T.canvas,
                      j = T.context,
                      L = T.options,
                      F = T.timing,
                      te = s.allBodies(B),
                      I = s.allConstraints(B),
                      V = L.wireframes ? L.wireframeBackground : L.background,
                      K = [],
                      le = [],
                      oe,
                      de = { timestamp: D.timing.timestamp };
                    if (
                      (o.trigger(T, 'beforeRender', de),
                      T.currentBackground !== V && _(T, V),
                      (j.globalCompositeOperation = 'source-in'),
                      (j.fillStyle = 'transparent'),
                      j.fillRect(0, 0, w.width, w.height),
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
                          ae = $.bodyB,
                          ue = $.pointA,
                          ne = $.pointB;
                        (W && (ue = g.add(W.position, $.pointA)),
                          ae && (ne = g.add(ae.position, $.pointB)),
                          !(!ue || !ne) &&
                            (m.contains(T.bounds, ue) || m.contains(T.bounds, ne)) &&
                            le.push($));
                      }
                      (i.startViewTransform(T),
                        T.mouse &&
                          (y.setScale(T.mouse, {
                            x: (T.bounds.max.x - T.bounds.min.x) / T.options.width,
                            y: (T.bounds.max.y - T.bounds.min.y) / T.options.height,
                          }),
                          y.setOffset(T.mouse, T.bounds.min)));
                    } else
                      ((le = I),
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
                      i.constraints(le, j),
                      L.hasBounds && i.endViewTransform(T),
                      o.trigger(T, 'afterRender', de),
                      (F.lastElapsed = f.now() - z));
                  }),
                  (i.stats = function (T, M, z) {
                    for (
                      var D = T.engine,
                        B = D.world,
                        w = s.allBodies(B),
                        j = 0,
                        L = 55,
                        F = 44,
                        te = 0,
                        I = 0,
                        V = 0;
                      V < w.length;
                      V += 1
                    )
                      j += w[V].parts.length;
                    var K = {
                      Part: j,
                      Body: w.length,
                      Cons: s.allConstraints(B).length,
                      Comp: s.allComposites(B).length,
                      Pair: D.pairs.list.length,
                    };
                    ((M.fillStyle = '#0e0f19'),
                      M.fillRect(te, I, L * 5.5, F),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'top'),
                      (M.textAlign = 'right'));
                    for (var le in K) {
                      var oe = K[le];
                      ((M.fillStyle = '#aaa'),
                        M.fillText(le, te + L, I + 8),
                        (M.fillStyle = '#eee'),
                        M.fillText(oe, te + L, I + 26),
                        (te += L));
                    }
                  }),
                  (i.performance = function (T, M) {
                    var z = T.engine,
                      D = T.timing,
                      B = D.deltaHistory,
                      w = D.elapsedHistory,
                      j = D.timestampElapsedHistory,
                      L = D.engineDeltaHistory,
                      F = D.engineUpdatesHistory,
                      te = D.engineElapsedHistory,
                      I = z.timing.lastUpdatesPerFrame,
                      V = z.timing.lastDelta,
                      K = E(B),
                      le = E(w),
                      oe = E(L),
                      de = E(F),
                      H = E(te),
                      $ = E(j),
                      W = $ / K || 0,
                      ae = Math.round(K / V),
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
                        B.length,
                        Math.round(ue) + ' fps',
                        ue / i._goodFps,
                        function (_e) {
                          return B[_e] / K - 1;
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
                        Math.pow(f.clamp(de / ae || 1, 0, 1), 4),
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
                        w.length,
                        le.toFixed(2) + ' rt',
                        1 - le / i._goodFps,
                        function (_e) {
                          return w[_e] / le - 1;
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
                          return (j[_e] / B[_e] / W || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (T, M, z, D, B, w, j, L, F) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(M, z + 7, D, 1),
                      T.beginPath(),
                      T.moveTo(M, z + 7 - B * f.clamp(0.4 * F(0), -2, 2)));
                    for (var te = 0; te < D; te += 1)
                      T.lineTo(M + te, z + 7 - (te < w ? B * f.clamp(0.4 * F(te), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + f.clamp(25 + 95 * L, 0, 120) + ',100%,60%)'),
                      T.fillRect(M, z - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(j, M + D, z - 5));
                  }),
                  (i.constraints = function (T, M) {
                    for (var z = M, D = 0; D < T.length; D++) {
                      var B = T[D];
                      if (!(!B.render.visible || !B.pointA || !B.pointB)) {
                        var w = B.bodyA,
                          j = B.bodyB,
                          L,
                          F;
                        if (
                          (w ? (L = g.add(w.position, B.pointA)) : (L = B.pointA),
                          B.render.type === 'pin')
                        )
                          (z.beginPath(), z.arc(L.x, L.y, 3, 0, 2 * Math.PI), z.closePath());
                        else {
                          if (
                            (j ? (F = g.add(j.position, B.pointB)) : (F = B.pointB),
                            z.beginPath(),
                            z.moveTo(L.x, L.y),
                            B.render.type === 'spring')
                          )
                            for (
                              var te = g.sub(F, L),
                                I = g.perp(g.normalise(te)),
                                V = Math.ceil(f.clamp(B.length / 5, 12, 20)),
                                K,
                                le = 1;
                              le < V;
                              le += 1
                            )
                              ((K = le % 2 === 0 ? 1 : -1),
                                z.lineTo(
                                  L.x + te.x * (le / V) + I.x * K * 4,
                                  L.y + te.y * (le / V) + I.y * K * 4
                                ));
                          z.lineTo(F.x, F.y);
                        }
                        (B.render.lineWidth &&
                          ((z.lineWidth = B.render.lineWidth),
                          (z.strokeStyle = B.render.strokeStyle),
                          z.stroke()),
                          B.render.anchors &&
                            ((z.fillStyle = B.render.strokeStyle),
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
                    var B = T.options,
                      w = B.showInternalEdges || !B.wireframes,
                      j,
                      L,
                      F,
                      te;
                    for (F = 0; F < M.length; F++)
                      if (((j = M[F]), !!j.render.visible)) {
                        for (te = j.parts.length > 1 ? 1 : 0; te < j.parts.length; te++)
                          if (((L = j.parts[te]), !!L.render.visible)) {
                            if (
                              (B.showSleeping && j.isSleeping
                                ? (D.globalAlpha = 0.5 * L.render.opacity)
                                : L.render.opacity !== 1 && (D.globalAlpha = L.render.opacity),
                              L.render.sprite && L.render.sprite.texture && !B.wireframes)
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
                                  (!L.vertices[K - 1].isInternal || w
                                    ? D.lineTo(L.vertices[K].x, L.vertices[K].y)
                                    : D.moveTo(L.vertices[K].x, L.vertices[K].y),
                                    L.vertices[K].isInternal &&
                                      !w &&
                                      D.moveTo(
                                        L.vertices[(K + 1) % L.vertices.length].x,
                                        L.vertices[(K + 1) % L.vertices.length].y
                                      ));
                                (D.lineTo(L.vertices[0].x, L.vertices[0].y), D.closePath());
                              }
                              B.wireframes
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
                      B = T.options.showInternalEdges,
                      w,
                      j,
                      L,
                      F,
                      te;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((w = M[L]), !!w.render.visible))
                        for (te = w.parts.length > 1 ? 1 : 0; te < w.parts.length; te++) {
                          for (
                            j = w.parts[te], D.moveTo(j.vertices[0].x, j.vertices[0].y), F = 1;
                            F < j.vertices.length;
                            F++
                          )
                            (!j.vertices[F - 1].isInternal || B
                              ? D.lineTo(j.vertices[F].x, j.vertices[F].y)
                              : D.moveTo(j.vertices[F].x, j.vertices[F].y),
                              j.vertices[F].isInternal &&
                                !B &&
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
                      B,
                      w,
                      j;
                    for (D.beginPath(), w = 0; w < M.length; w++)
                      if (((B = M[w]), !(!B.render.visible || B.parts.length === 1))) {
                        for (
                          D.moveTo(B.vertices[0].x, B.vertices[0].y), j = 1;
                          j < B.vertices.length;
                          j++
                        )
                          D.lineTo(B.vertices[j].x, B.vertices[j].y);
                        D.lineTo(B.vertices[0].x, B.vertices[0].y);
                      }
                    ((D.lineWidth = 1), (D.strokeStyle = 'rgba(255,255,255,0.2)'), D.stroke());
                  }),
                  (i.vertexNumbers = function (T, M, z) {
                    var D = z,
                      B,
                      w,
                      j;
                    for (B = 0; B < M.length; B++) {
                      var L = M[B].parts;
                      for (j = L.length > 1 ? 1 : 0; j < L.length; j++) {
                        var F = L[j];
                        for (w = 0; w < F.vertices.length; w++)
                          ((D.fillStyle = 'rgba(255,255,255,0.2)'),
                            D.fillText(
                              B + '_' + w,
                              F.position.x + (F.vertices[w].x - F.position.x) * 0.8,
                              F.position.y + (F.vertices[w].y - F.position.y) * 0.8
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
                    var B = T.options;
                    D.beginPath();
                    for (var w = 0; w < M.length; w++) {
                      var j = M[w];
                      if (j.render.visible)
                        for (var L = M[w].parts, F = L.length > 1 ? 1 : 0; F < L.length; F++) {
                          var te = L[F];
                          D.rect(
                            te.bounds.min.x,
                            te.bounds.min.y,
                            te.bounds.max.x - te.bounds.min.x,
                            te.bounds.max.y - te.bounds.min.y
                          );
                        }
                    }
                    (B.wireframes
                      ? (D.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (D.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (D.lineWidth = 1),
                      D.stroke());
                  }),
                  (i.bodyAxes = function (T, M, z) {
                    var D = z;
                    T.engine;
                    var B = T.options,
                      w,
                      j,
                      L,
                      F;
                    for (D.beginPath(), j = 0; j < M.length; j++) {
                      var te = M[j],
                        I = te.parts;
                      if (te.render.visible)
                        if (B.showAxes)
                          for (L = I.length > 1 ? 1 : 0; L < I.length; L++)
                            for (w = I[L], F = 0; F < w.axes.length; F++) {
                              var V = w.axes[F];
                              (D.moveTo(w.position.x, w.position.y),
                                D.lineTo(w.position.x + V.x * 20, w.position.y + V.y * 20));
                            }
                        else
                          for (L = I.length > 1 ? 1 : 0; L < I.length; L++)
                            for (w = I[L], F = 0; F < w.axes.length; F++)
                              (D.moveTo(w.position.x, w.position.y),
                                D.lineTo(
                                  (w.vertices[0].x + w.vertices[w.vertices.length - 1].x) / 2,
                                  (w.vertices[0].y + w.vertices[w.vertices.length - 1].y) / 2
                                ));
                    }
                    (B.wireframes
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
                    var B = T.options,
                      w,
                      j,
                      L,
                      F;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((w = M[L]), !!w.render.visible))
                        for (F = 0; F < w.parts.length; F++)
                          ((j = w.parts[F]),
                            D.arc(j.position.x, j.position.y, 3, 0, 2 * Math.PI, !1),
                            D.closePath());
                    for (
                      B.wireframes
                        ? (D.fillStyle = 'indianred')
                        : (D.fillStyle = 'rgba(0,0,0,0.5)'),
                        D.fill(),
                        D.beginPath(),
                        L = 0;
                      L < M.length;
                      L++
                    )
                      ((w = M[L]),
                        w.render.visible &&
                          (D.arc(w.positionPrev.x, w.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          D.closePath()));
                    ((D.fillStyle = 'rgba(255,165,0,0.8)'), D.fill());
                  }),
                  (i.bodyVelocity = function (T, M, z) {
                    var D = z;
                    D.beginPath();
                    for (var B = 0; B < M.length; B++) {
                      var w = M[B];
                      if (w.render.visible) {
                        var j = d.getVelocity(w);
                        (D.moveTo(w.position.x, w.position.y),
                          D.lineTo(w.position.x + j.x, w.position.y + j.y));
                      }
                    }
                    ((D.lineWidth = 3), (D.strokeStyle = 'cornflowerblue'), D.stroke());
                  }),
                  (i.bodyIds = function (T, M, z) {
                    var D = z,
                      B,
                      w;
                    for (B = 0; B < M.length; B++)
                      if (M[B].render.visible) {
                        var j = M[B].parts;
                        for (w = j.length > 1 ? 1 : 0; w < j.length; w++) {
                          var L = j[w];
                          ((D.font = '12px Arial'),
                            (D.fillStyle = 'rgba(255,255,255,0.5)'),
                            D.fillText(L.id, L.position.x + 10, L.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (T, M, z) {
                    var D = z,
                      B = T.options,
                      w,
                      j,
                      L,
                      F;
                    for (D.beginPath(), L = 0; L < M.length; L++)
                      if (((w = M[L]), !!w.isActive))
                        for (j = w.collision, F = 0; F < w.contactCount; F++) {
                          var te = w.contacts[F],
                            I = te.vertex;
                          D.rect(I.x - 1.5, I.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      B.wireframes
                        ? (D.fillStyle = 'rgba(255,255,255,0.7)')
                        : (D.fillStyle = 'orange'),
                        D.fill(),
                        D.beginPath(),
                        L = 0;
                      L < M.length;
                      L++
                    )
                      if (((w = M[L]), !!w.isActive && ((j = w.collision), w.contactCount > 0))) {
                        var V = w.contacts[0].vertex.x,
                          K = w.contacts[0].vertex.y;
                        (w.contactCount === 2 &&
                          ((V = (w.contacts[0].vertex.x + w.contacts[1].vertex.x) / 2),
                          (K = (w.contacts[0].vertex.y + w.contacts[1].vertex.y) / 2)),
                          j.bodyB === j.supports[0].body || j.bodyA.isStatic === !0
                            ? D.moveTo(V - j.normal.x * 8, K - j.normal.y * 8)
                            : D.moveTo(V + j.normal.x * 8, K + j.normal.y * 8),
                          D.lineTo(V, K));
                      }
                    (B.wireframes
                      ? (D.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (D.strokeStyle = 'orange'),
                      (D.lineWidth = 1),
                      D.stroke());
                  }),
                  (i.separations = function (T, M, z) {
                    var D = z,
                      B = T.options,
                      w,
                      j,
                      L,
                      F,
                      te;
                    for (D.beginPath(), te = 0; te < M.length; te++)
                      if (((w = M[te]), !!w.isActive)) {
                        ((j = w.collision), (L = j.bodyA), (F = j.bodyB));
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
                    (B.wireframes
                      ? (D.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (D.strokeStyle = 'orange'),
                      D.stroke());
                  }),
                  (i.inspector = function (T, M) {
                    T.engine;
                    var z = T.selected,
                      D = T.render,
                      B = D.options,
                      w;
                    if (B.hasBounds) {
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
                          ((w = V.bounds),
                            M.beginPath(),
                            M.rect(
                              Math.floor(w.min.x - 3),
                              Math.floor(w.min.y - 3),
                              Math.floor(w.max.x - w.min.x + 6),
                              Math.floor(w.max.y - w.min.y + 6)
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
                      (w = T.selectBounds),
                      M.beginPath(),
                      M.rect(
                        Math.floor(w.min.x),
                        Math.floor(w.min.y),
                        Math.floor(w.max.x - w.min.x),
                        Math.floor(w.max.y - w.min.y)
                      ),
                      M.closePath(),
                      M.stroke(),
                      M.fill(),
                      M.translate(-0.5, -0.5)),
                      B.hasBounds && M.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (T, M) {
                    var z = T.engine,
                      D = T.timing,
                      B = D.historySize,
                      w = z.timing.timestamp;
                    ((D.delta = M - D.lastTime || i._goodDelta),
                      (D.lastTime = M),
                      (D.timestampElapsed = w - D.lastTimestamp || 0),
                      (D.lastTimestamp = w),
                      D.deltaHistory.unshift(D.delta),
                      (D.deltaHistory.length = Math.min(D.deltaHistory.length, B)),
                      D.engineDeltaHistory.unshift(z.timing.lastDelta),
                      (D.engineDeltaHistory.length = Math.min(D.engineDeltaHistory.length, B)),
                      D.timestampElapsedHistory.unshift(D.timestampElapsed),
                      (D.timestampElapsedHistory.length = Math.min(
                        D.timestampElapsedHistory.length,
                        B
                      )),
                      D.engineUpdatesHistory.unshift(z.timing.lastUpdatesPerFrame),
                      (D.engineUpdatesHistory.length = Math.min(D.engineUpdatesHistory.length, B)),
                      D.engineElapsedHistory.unshift(z.timing.lastElapsed),
                      (D.engineElapsedHistory.length = Math.min(D.engineElapsedHistory.length, B)),
                      D.elapsedHistory.unshift(D.lastElapsed),
                      (D.elapsedHistory.length = Math.min(D.elapsedHistory.length, B)));
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
              var d = h(5),
                f = h(17),
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
                    (d.trigger(o, 'beforeTick', T), d.trigger(o, 'tick', T));
                    for (var M = s.now(); p > 0 && o.timeBuffer >= p * i._timeBufferMargin; ) {
                      (d.trigger(o, 'beforeUpdate', T),
                        f.update(g, p),
                        d.trigger(o, 'afterUpdate', T),
                        (o.timeBuffer -= p),
                        (v += 1));
                      var z = s.now() - r,
                        D = s.now() - M,
                        B = z + (i._elapsedNextEstimate * D) / v;
                      if (v >= _ || B > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / p - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((g.timing.lastUpdatesPerFrame = v),
                      d.trigger(o, 'afterTick', T),
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
              var d = h(8),
                f = h(0),
                s = f.deprecated;
              (function () {
                ((i.collides = function (m, o) {
                  return d.collides(m, o);
                }),
                  s(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, x, h) {
              var i = {};
              ((b.exports = i), h(1));
              var d = h(0);
              (function () {
                ((i.pathToVertices = function (f, s) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    d.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
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
                  var B = function (j, L, F) {
                      var te = F % 2 === 1 && F > 1;
                      if (!A || j != A.x || L != A.y) {
                        A && te ? ((_ = A.x), (T = A.y)) : ((_ = 0), (T = 0));
                        var I = { x: _ + j, y: T + L };
                        ((te || !A) && (A = I), U.push(I), (z = _ + j), (D = T + L));
                      }
                    },
                    w = function (j) {
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
                        B(z, D, j.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(f), g = f.getTotalLength(), p = [], m = 0;
                    m < f.pathSegList.numberOfItems;
                    m += 1
                  )
                    p.push(f.pathSegList.getItem(m));
                  for (v = p.concat(); M < g; ) {
                    if (((O = f.getPathSegAtLength(M)), (r = p[O]), r != E)) {
                      for (; v.length && v[0] != r; ) w(v.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((y = f.getPointAtLength(M)), B(y.x, y.y, 0));
                        break;
                    }
                    M += s;
                  }
                  for (m = 0, o = v.length; m < o; ++m) w(v[m]);
                  return U;
                }),
                  (i._svgPathToAbsolute = function (f) {
                    for (
                      var s,
                        m,
                        o,
                        g,
                        y,
                        r,
                        p = f.pathSegList,
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
                            p.replaceItem(f.createSVGPathSegMovetoAbs(v, E), O);
                            break;
                          case 'l':
                            p.replaceItem(f.createSVGPathSegLinetoAbs(v, E), O);
                            break;
                          case 'h':
                            p.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(v), O);
                            break;
                          case 'v':
                            p.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), O);
                            break;
                          case 'c':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicAbs(v, E, o, g, y, r), O);
                            break;
                          case 's':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(v, E, y, r), O);
                            break;
                          case 'q':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(v, E, o, g), O);
                            break;
                          case 't':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(v, E), O);
                            break;
                          case 'a':
                            p.replaceItem(
                              f.createSVGPathSegArcAbs(
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
              var d = h(6);
              (h(0),
                (function () {
                  ((i.create = d.create),
                    (i.add = d.add),
                    (i.remove = d.remove),
                    (i.clear = d.clear),
                    (i.addComposite = d.addComposite),
                    (i.addBody = d.addBody),
                    (i.addConstraint = d.addConstraint));
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
  Th = (c, C) => {
    const b = String(C).padStart(2, '0');
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
    svgPath: Th(Ro, c),
    color: Xm[c].color,
    glowColor: Xm[c].glow,
  }),
  oa = 10,
  Hu = Object.fromEntries(Array.from({ length: oa }, (c, C) => C + 1).map((c) => [c, kp(c)]));
Array.from({ length: oa }, (c, C) => Hu[C + 1]);
const Wp = 3,
  Pp = 360,
  Ip = (c) => Math.min(1, c / Pp),
  Qm = new Map(),
  Ia = (c, C, b = Ro) => {
    const x = `${c}|${C}|${b}`,
      h = Qm.get(x);
    if (h) return h;
    const i = Hu[c],
      d = { ...i, radius: i.radius * Ip(C), svgPath: Th(b, c) };
    return (Qm.set(x, d), d);
  },
  sa = {
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
  ju = (c, C) => {
    if (bh)
      try {
        window.localStorage.setItem(c, C);
      } catch {}
  },
  e1 = () => {
    const c = Lu(Gt.storageKeys.bestScore);
    if (c === null) return 0;
    const C = Number(c);
    return Number.isFinite(C) ? C : 0;
  },
  t1 = (c) => {
    ju(Gt.storageKeys.bestScore, String(c));
  },
  n1 = () => {
    const c = Lu(Gt.storageKeys.scoreHistory);
    if (c === null) return [];
    try {
      const C = JSON.parse(c);
      return Array.isArray(C) ? C.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  a1 = (c) => {
    const C = [c, ...n1()].slice(0, Gt.maxScoreHistory);
    return (ju(Gt.storageKeys.scoreHistory, JSON.stringify(C)), C);
  },
  l1 = () => {
    const c = Lu(Gt.storageKeys.isSoundOn);
    return c === null ? !0 : c === 'true';
  },
  i1 = (c) => {
    ju(Gt.storageKeys.isSoundOn, String(c));
  },
  u1 = () => {
    const c = Lu(Gt.storageKeys.themeId);
    return xh(c) ? c : Ro;
  },
  r1 = (c) => {
    ju(Gt.storageKeys.themeId, c);
  },
  s1 = () => {
    const [c, C] = Y.useState(0),
      [b, x] = Y.useState(0),
      [h, i] = Y.useState(!1),
      d = Y.useRef(0),
      f = Y.useRef(0);
    Y.useEffect(() => {
      const g = e1();
      ((f.current = g), x(g));
    }, []);
    const s = Y.useCallback((g) => {
        ((d.current += g), C(d.current));
      }, []),
      m = Y.useCallback(() => {
        ((d.current = 0), C(0), i(!1));
      }, []),
      o = Y.useCallback(() => {
        const g = d.current,
          y = g > f.current;
        return (
          y && ((f.current = g), t1(g), x(g)),
          a1(g),
          i(y),
          { isNewRecord: y, finalScore: g }
        );
      }, []);
    return { score: c, bestScore: b, isNewRecord: h, add: s, reset: m, finalize: o };
  },
  o1 = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  c1 = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  f1 = 0.7,
  d1 = () => {
    if (typeof window > 'u') return null;
    const c = window;
    return c.AudioContext ?? c.webkitAudioContext ?? null;
  },
  m1 = () => {
    const [c, C] = Y.useState(!0),
      b = Y.useRef(null),
      x = Y.useRef({});
    (Y.useEffect(() => {
      C(l1());
    }, []),
      Y.useEffect(() => {
        const d = d1();
        if (!d) return;
        const f = new d();
        b.current = f;
        let s = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, g] of Object.entries(c1))
              try {
                const r = await (await fetch(o1(g))).arrayBuffer();
                if (s) return;
                const p = await f.decodeAudioData(r);
                if (s) return;
                m[o] = p;
              } catch {}
            x.current = m;
          })(),
          () => {
            ((s = !0), f.close().catch(() => {}), (b.current = null), (x.current = {}));
          }
        );
      }, []));
    const h = Y.useCallback(() => {
        C((d) => {
          const f = !d;
          return (i1(f), f);
        });
      }, []),
      i = Y.useCallback(
        (d) => {
          if (!c) return;
          const f = b.current,
            s = x.current[d];
          if (!f || !s) return;
          f.state === 'suspended' && f.resume().catch(() => {});
          const m = f.createBufferSource();
          m.buffer = s;
          const o = f.createGain();
          ((o.gain.value = f1), m.connect(o).connect(f.destination), m.start(0));
        },
        [c]
      );
    return { isSoundOn: c, toggle: h, play: i };
  },
  Zm = (c, C, b, x) => {
    const h = He.Bodies.circle(C, b, c.radius, {
      restitution: c.restitution,
      friction: c.friction,
      density: c.density,
      label: `item-${c.level}`,
    });
    return ((h.plugin.itemData = { level: c.level, consumed: !1, droppedAt: x }), h);
  },
  zu = (c) => c.plugin.itemData,
  h1 = (c, C) => {
    const b = sa.wallThickness,
      x = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = He.Bodies.rectangle(c / 2, C + b / 2, c + b * 2, b, x),
      i = He.Bodies.rectangle(-b / 2, C / 2, b, C * 2, x),
      d = He.Bodies.rectangle(c + b / 2, C / 2, b, C * 2, x);
    return { ground: h, leftWall: i, rightWall: d };
  },
  v1 = (c, C) => ({ x: (c.position.x + C.position.x) / 2, y: (c.position.y + C.position.y) / 2 }),
  g1 = (c) => (c < 2 || c > oa ? 0 : Hu[c].score),
  y1 = () => Hu[oa].score,
  Km = new Map(),
  Ch = (c) => {
    const C = Km.get(c);
    if (C) return C;
    const b = `/ochimono-game/${c}`.replace(/\/{2,}/g, '/');
    return (Km.set(c, b), b);
  },
  co = (c, C) => {
    const b = (C.radius * 2) / Fp;
    c.render.sprite = { texture: Ch(C.svgPath), xScale: b, yScale: b, xOffset: 0.5, yOffset: 0.5 };
  },
  Jm = new Set(),
  Fm = (c) => {
    for (let C = 1; C <= oa; C += 1) {
      const b = Ia(C, 1, c),
        x = Ch(b.svgPath);
      if (Jm.has(x)) continue;
      Jm.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  p1 = ({ fieldWidth: c, fieldHeight: C }) => {
    const b = Y.useRef(null),
      x = Y.useRef(null),
      h = Y.useRef(null),
      i = Y.useRef(null),
      d = Y.useRef(null),
      [f, s] = Y.useState('idle'),
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
      M = Y.useRef(C),
      [z, D] = Y.useState(() => u1()),
      B = Y.useRef(z);
    B.current = z;
    const w = s1(),
      j = m1(),
      L = Y.useRef(w.add);
    L.current = w.add;
    const F = Y.useRef(j.play);
    F.current = j.play;
    const te = Y.useRef(w.finalize);
    te.current = w.finalize;
    const I = Y.useRef(new Set()),
      V = Y.useCallback(() => {
        const W = Math.floor(Math.random() * Wp) + 1;
        return Ia(W, T.current, B.current);
      }, []);
    Y.useEffect(() => {
      const W = b.current;
      if (!W) return;
      const ae = T.current,
        ue = M.current,
        ne = He.Engine.create({ gravity: { x: 0, y: sa.gravityY } }),
        re = He.Render.create({
          element: W,
          engine: ne,
          options: {
            width: ae,
            height: ue,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: he, leftWall: ge, rightWall: De } = h1(ae, ue);
      ([he, ge, De].forEach((Pe) => {
        Pe.render.visible = !1;
      }),
        He.World.add(ne.world, [he, ge, De]),
        He.Render.run(re));
      const Oe = He.Runner.create();
      (He.Runner.run(Oe, ne), (x.current = ne), (h.current = re), (i.current = Oe));
      for (const Pe of Co) Fm(Pe.id);
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
    const K = Y.useCallback((W, ae) => {
      var _e;
      const ue = x.current;
      if (!ue) return;
      const ne = zu(W),
        re = zu(ae);
      if (!ne || !re || ne.consumed || re.consumed || ne.level !== re.level) return;
      ((ne.consumed = !0), (re.consumed = !0));
      const he = ne.level + 1,
        ge = v1(W, ae);
      (He.World.remove(ue.world, [W, ae]), I.current.delete(W), I.current.delete(ae));
      let De = 0,
        Oe = !1;
      if (he > oa) ((De = y1()), (Oe = !0), F.current('special'));
      else {
        const ht = Ia(he, T.current, B.current),
          Pe = Zm(ht, ge.x, ge.y, performance.now());
        (co(Pe, ht),
          He.World.add(ue.world, Pe),
          I.current.add(Pe),
          (De = g1(he)),
          (Oe = he === oa),
          F.current(Oe ? 'special' : 'merge'));
      }
      (L.current(De),
        (_e = d.current) == null || _e.add({ x: ge.x, y: ge.y, score: De, isSpecial: Oe }));
    }, []);
    (Y.useEffect(() => {
      const W = x.current;
      if (!W) return;
      const ae = (ue) => {
        for (const ne of ue.pairs) K(ne.bodyA, ne.bodyB);
      };
      return (
        He.Events.on(W, 'collisionStart', ae),
        () => {
          He.Events.off(W, 'collisionStart', ae);
        }
      );
    }, [K]),
      Y.useEffect(() => {
        const W = x.current;
        if (!W) return;
        const ae = sa.gameOverLineOffset;
        let ue = 0;
        const ne = () => {
          if (U.current !== 'playing' || ((ue = (ue + 1) % 6), ue !== 0)) return;
          const re = performance.now();
          for (const he of I.current) {
            const ge = zu(he);
            if (
              !(!ge || ge.consumed) &&
              !(re - ge.droppedAt < sa.gameOverGracePeriodMs) &&
              !(Math.abs(he.velocity.y) > sa.restingVelocityThreshold) &&
              he.position.y - he.circleRadius < ae
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
            const he = Ia(re.level, T.current, z);
            co(ne, he);
          }
        }
        const ae = r.current ? Ia(r.current.level, T.current, z) : null,
          ue = p.current ? Ia(p.current.level, T.current, z) : null;
        (v(ae), E(ue));
      }, [z, v, E]));
    const le = Y.useCallback((W) => {
        (D(W), r1(W));
      }, []),
      oe = Y.useCallback(
        (W) => {
          const ae = x.current;
          if (!ae || U.current !== 'playing' || !A.current) return;
          const ue = r.current;
          if (!ue) return;
          const ne = performance.now();
          if (ne - O.current < Gt.dropCooldownMs) return;
          const re = Math.max(0, Math.min(1, W)),
            he = ue.radius + sa.wallThickness / 2,
            ge = he,
            De = T.current - he,
            Oe = ge + re * (De - ge),
            _e = ue.radius + 4,
            ht = Zm(ue, Oe, _e, ne);
          (co(ht, ue),
            He.World.add(ae.world, ht),
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
        (w.reset(),
          (W = d.current) == null || W.clear(),
          v(V()),
          E(V()),
          (A.current = !0),
          (O.current = 0),
          (U.current = 'playing'),
          s('playing'));
      }, [w, V, v, E]),
      H = Y.useCallback(() => {
        const W = x.current;
        if (W) {
          for (const ae of I.current) He.World.remove(W.world, ae);
          I.current.clear();
        }
        (_.current !== null && (window.clearTimeout(_.current), (_.current = null)), de());
      }, [de]),
      $ = sa.gameOverLineOffset;
    return {
      status: f,
      score: w.score,
      bestScore: w.bestScore,
      isNewRecord: w.isNewRecord,
      currentItem: m,
      nextItem: g,
      isSoundOn: j.isSoundOn,
      themeId: z,
      mergeEffectRef: d,
      canvasContainerRef: b,
      drop: oe,
      start: de,
      restart: H,
      toggleSound: j.toggle,
      setThemeId: le,
      fieldWidth: c,
      fieldHeight: C,
      gameOverLineY: $,
    };
  },
  S1 = ({ size: c }) => {
    const C = p1({ fieldWidth: c.width, fieldHeight: c.height });
    return ie.jsxs(ie.Fragment, {
      children: [
        ie.jsx(Gp, {
          score: C.score,
          bestScore: C.bestScore,
          nextItem: C.nextItem,
          isSoundOn: C.isSoundOn,
          onToggleSound: C.toggleSound,
          themeId: C.themeId,
          onChangeTheme: C.setThemeId,
        }),
        ie.jsx('main', {
          className: el.main,
          children: ie.jsxs('div', {
            className: el.field_wrapper,
            style: { width: `${c.width}px`, height: `${c.height}px` },
            children: [
              ie.jsx(up, {
                canvasContainerRef: C.canvasContainerRef,
                fieldWidth: c.width,
                fieldHeight: c.height,
                gameOverLineY: C.gameOverLineY,
                currentItem: C.currentItem,
                mergeEffectRef: C.mergeEffectRef,
                canInteract: C.status === 'playing',
                onDrop: C.drop,
              }),
              C.status === 'idle' ? ie.jsx(Ep, { onStart: C.start }) : null,
              C.status === 'gameover'
                ? ie.jsx(vp, {
                    score: C.score,
                    bestScore: C.bestScore,
                    isNewRecord: C.isNewRecord,
                    onRestart: C.restart,
                  })
                : null,
            ],
          }),
        }),
      ],
    });
  },
  x1 = () => {
    const c = Y.useRef(null),
      [C, b] = Y.useState(null);
    return (
      Y.useLayoutEffect(() => {
        const x = c.current;
        if (!x) return;
        const h = x.getBoundingClientRect();
        b({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      C === null
        ? ie.jsxs('div', {
            className: el.layout,
            children: [
              ie.jsx('div', { className: el.top_bar_placeholder, 'aria-hidden': 'true' }),
              ie.jsx('main', { ref: c, className: el.main }),
            ],
          })
        : ie.jsx('div', { className: el.layout, children: ie.jsx(S1, { size: C }) })
    );
  },
  E1 = () => ie.jsx('div', { className: qy.index, children: ie.jsx(x1, {}) }),
  T1 = () => ie.jsx('div', { children: ie.jsx('h1', { children: 'Not Found' }) });
function b1() {
  return ie.jsxs(ie.Fragment, {
    children: [
      ie.jsxs(Pg, {
        children: [
          ie.jsx(mo, { path: '/', element: ie.jsx(E1, {}) }),
          ie.jsx(mo, { path: '*', element: ie.jsx(T1, {}) }),
        ],
      }),
      ie.jsx(Gy, {}),
    ],
  });
}
const Rh = document.getElementById('root');
if (!Rh) throw new Error('Failed to find #root element');
eg.createRoot(Rh).render(ie.jsx(Ty, { basename: '/ochimono-game', children: ie.jsx(b1, {}) }));
