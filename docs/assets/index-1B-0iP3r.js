(function () {
  const A = document.createElement('link').relList;
  if (A && A.supports && A.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) E(h);
  new MutationObserver((h) => {
    for (const i of h)
      if (i.type === 'childList')
        for (const c of i.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && E(c);
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
  function E(h) {
    if (h.ep) return;
    h.ep = !0;
    const i = b(h);
    fetch(h.href, i);
  }
})();
var yv =
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
var Ff = { exports: {} },
  Jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pv;
function z0() {
  if (pv) return Jn;
  pv = 1;
  var o = Symbol.for('react.transitional.element'),
    A = Symbol.for('react.fragment');
  function b(E, h, i) {
    var c = null;
    if ((i !== void 0 && (c = '' + i), h.key !== void 0 && (c = '' + h.key), 'key' in h)) {
      i = {};
      for (var m in h) m !== 'key' && (i[m] = h[m]);
    } else i = h;
    return ((h = i.ref), { $$typeof: o, type: E, key: c, ref: h !== void 0 ? h : null, props: i });
  }
  return ((Jn.Fragment = A), (Jn.jsx = b), (Jn.jsxs = b), Jn);
}
var Sv;
function D0() {
  return (Sv || ((Sv = 1), (Ff.exports = z0())), Ff.exports);
}
var ie = D0(),
  $f = { exports: {} },
  Fn = {},
  Wf = { exports: {} },
  kf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xv;
function O0() {
  return (
    xv ||
      ((xv = 1),
      (function (o) {
        function A(j, J) {
          var te = j.length;
          j.push(J);
          e: for (; 0 < te; ) {
            var ue = (te - 1) >>> 1,
              de = j[ue];
            if (0 < h(de, J)) ((j[ue] = J), (j[te] = de), (te = ue));
            else break e;
          }
        }
        function b(j) {
          return j.length === 0 ? null : j[0];
        }
        function E(j) {
          if (j.length === 0) return null;
          var J = j[0],
            te = j.pop();
          if (te !== J) {
            j[0] = te;
            e: for (var ue = 0, de = j.length, L = de >>> 1; ue < L; ) {
              var $ = 2 * (ue + 1) - 1,
                le = j[$],
                ae = $ + 1,
                oe = j[ae];
              if (0 > h(le, te))
                ae < de && 0 > h(oe, le)
                  ? ((j[ue] = oe), (j[ae] = te), (ue = ae))
                  : ((j[ue] = le), (j[$] = te), (ue = $));
              else if (ae < de && 0 > h(oe, te)) ((j[ue] = oe), (j[ae] = te), (ue = ae));
              else break e;
            }
          }
          return J;
        }
        function h(j, J) {
          var te = j.sortIndex - J.sortIndex;
          return te !== 0 ? te : j.id - J.id;
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
        var f = [],
          d = [],
          s = 1,
          g = null,
          S = 3,
          r = !1,
          y = !1,
          v = !1,
          x = !1,
          C = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          U = typeof setImmediate < 'u' ? setImmediate : null;
        function Y(j) {
          for (var J = b(d); J !== null; ) {
            if (J.callback === null) E(d);
            else if (J.startTime <= j) (E(d), (J.sortIndex = J.expirationTime), A(f, J));
            else break;
            J = b(d);
          }
        }
        function T(j) {
          if (((v = !1), Y(j), !y))
            if (b(f) !== null) ((y = !0), z || ((z = !0), H()));
            else {
              var J = b(d);
              J !== null && P(T, J.startTime - j);
            }
        }
        var z = !1,
          D = -1,
          R = 5,
          N = -1;
        function B() {
          return x ? !0 : !(o.unstable_now() - N < R);
        }
        function w() {
          if (((x = !1), z)) {
            var j = o.unstable_now();
            N = j;
            var J = !0;
            try {
              e: {
                ((y = !1), v && ((v = !1), O(D), (D = -1)), (r = !0));
                var te = S;
                try {
                  t: {
                    for (Y(j), g = b(f); g !== null && !(g.expirationTime > j && B()); ) {
                      var ue = g.callback;
                      if (typeof ue == 'function') {
                        ((g.callback = null), (S = g.priorityLevel));
                        var de = ue(g.expirationTime <= j);
                        if (((j = o.unstable_now()), typeof de == 'function')) {
                          ((g.callback = de), Y(j), (J = !0));
                          break t;
                        }
                        (g === b(f) && E(f), Y(j));
                      } else E(f);
                      g = b(f);
                    }
                    if (g !== null) J = !0;
                    else {
                      var L = b(d);
                      (L !== null && P(T, L.startTime - j), (J = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (S = te), (r = !1));
                }
                J = void 0;
              }
            } finally {
              J ? H() : (z = !1);
            }
          }
        }
        var H;
        if (typeof U == 'function')
          H = function () {
            U(w);
          };
        else if (typeof MessageChannel < 'u') {
          var K = new MessageChannel(),
            ee = K.port2;
          ((K.port1.onmessage = w),
            (H = function () {
              ee.postMessage(null);
            }));
        } else
          H = function () {
            C(w, 0);
          };
        function P(j, J) {
          D = C(function () {
            j(o.unstable_now());
          }, J);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (o.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (R = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (o.unstable_next = function (j) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = S;
            }
            var te = S;
            S = J;
            try {
              return j();
            } finally {
              S = te;
            }
          }),
          (o.unstable_requestPaint = function () {
            x = !0;
          }),
          (o.unstable_runWithPriority = function (j, J) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var te = S;
            S = j;
            try {
              return J();
            } finally {
              S = te;
            }
          }),
          (o.unstable_scheduleCallback = function (j, J, te) {
            var ue = o.unstable_now();
            switch (
              (typeof te == 'object' && te !== null
                ? ((te = te.delay), (te = typeof te == 'number' && 0 < te ? ue + te : ue))
                : (te = ue),
              j)
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
              (de = te + de),
              (j = {
                id: s++,
                callback: J,
                priorityLevel: j,
                startTime: te,
                expirationTime: de,
                sortIndex: -1,
              }),
              te > ue
                ? ((j.sortIndex = te),
                  A(d, j),
                  b(f) === null && j === b(d) && (v ? (O(D), (D = -1)) : (v = !0), P(T, te - ue)))
                : ((j.sortIndex = de), A(f, j), y || r || ((y = !0), z || ((z = !0), H()))),
              j
            );
          }),
          (o.unstable_shouldYield = B),
          (o.unstable_wrapCallback = function (j) {
            var J = S;
            return function () {
              var te = S;
              S = J;
              try {
                return j.apply(this, arguments);
              } finally {
                S = te;
              }
            };
          }));
      })(kf)),
    kf
  );
}
var Ev;
function B0() {
  return (Ev || ((Ev = 1), (Wf.exports = O0())), Wf.exports);
}
var Pf = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tv;
function U0() {
  if (Tv) return ve;
  Tv = 1;
  var o = Symbol.for('react.transitional.element'),
    A = Symbol.for('react.portal'),
    b = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    f = Symbol.for('react.suspense'),
    d = Symbol.for('react.memo'),
    s = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    S = Symbol.iterator;
  function r(L) {
    return L === null || typeof L != 'object'
      ? null
      : ((L = (S && L[S]) || L['@@iterator']), typeof L == 'function' ? L : null);
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
  function C(L, $, le) {
    ((this.props = L), (this.context = $), (this.refs = x), (this.updater = le || y));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (L, $) {
      if (typeof L != 'object' && typeof L != 'function' && L != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, L, $, 'setState');
    }),
    (C.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, 'forceUpdate');
    }));
  function O() {}
  O.prototype = C.prototype;
  function U(L, $, le) {
    ((this.props = L), (this.context = $), (this.refs = x), (this.updater = le || y));
  }
  var Y = (U.prototype = new O());
  ((Y.constructor = U), v(Y, C.prototype), (Y.isPureReactComponent = !0));
  var T = Array.isArray;
  function z() {}
  var D = { H: null, A: null, T: null, S: null },
    R = Object.prototype.hasOwnProperty;
  function N(L, $, le) {
    var ae = le.ref;
    return { $$typeof: o, type: L, key: $, ref: ae !== void 0 ? ae : null, props: le };
  }
  function B(L, $) {
    return N(L.type, $, L.props);
  }
  function w(L) {
    return typeof L == 'object' && L !== null && L.$$typeof === o;
  }
  function H(L) {
    var $ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      L.replace(/[=:]/g, function (le) {
        return $[le];
      })
    );
  }
  var K = /\/+/g;
  function ee(L, $) {
    return typeof L == 'object' && L !== null && L.key != null ? H('' + L.key) : $.toString(36);
  }
  function P(L) {
    switch (L.status) {
      case 'fulfilled':
        return L.value;
      case 'rejected':
        throw L.reason;
      default:
        switch (
          (typeof L.status == 'string'
            ? L.then(z, z)
            : ((L.status = 'pending'),
              L.then(
                function ($) {
                  L.status === 'pending' && ((L.status = 'fulfilled'), (L.value = $));
                },
                function ($) {
                  L.status === 'pending' && ((L.status = 'rejected'), (L.reason = $));
                }
              )),
          L.status)
        ) {
          case 'fulfilled':
            return L.value;
          case 'rejected':
            throw L.reason;
        }
    }
    throw L;
  }
  function j(L, $, le, ae, oe) {
    var ne = typeof L;
    (ne === 'undefined' || ne === 'boolean') && (L = null);
    var me = !1;
    if (L === null) me = !0;
    else
      switch (ne) {
        case 'bigint':
        case 'string':
        case 'number':
          me = !0;
          break;
        case 'object':
          switch (L.$$typeof) {
            case o:
            case A:
              me = !0;
              break;
            case s:
              return ((me = L._init), j(me(L._payload), $, le, ae, oe));
          }
      }
    if (me)
      return (
        (oe = oe(L)),
        (me = ae === '' ? '.' + ee(L, 0) : ae),
        T(oe)
          ? ((le = ''),
            me != null && (le = me.replace(K, '$&/') + '/'),
            j(oe, $, le, '', function (tt) {
              return tt;
            }))
          : oe != null &&
            (w(oe) &&
              (oe = B(
                oe,
                le +
                  (oe.key == null || (L && L.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(K, '$&/') + '/') +
                  me
              )),
            $.push(oe)),
        1
      );
    me = 0;
    var Te = ae === '' ? '.' : ae + ':';
    if (T(L))
      for (var Be = 0; Be < L.length; Be++)
        ((ae = L[Be]), (ne = Te + ee(ae, Be)), (me += j(ae, $, le, ne, oe)));
    else if (((Be = r(L)), typeof Be == 'function'))
      for (L = Be.call(L), Be = 0; !(ae = L.next()).done; )
        ((ae = ae.value), (ne = Te + ee(ae, Be++)), (me += j(ae, $, le, ne, oe)));
    else if (ne === 'object') {
      if (typeof L.then == 'function') return j(P(L), $, le, ae, oe);
      throw (
        ($ = String(L)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ($ === '[object Object]' ? 'object with keys {' + Object.keys(L).join(', ') + '}' : $) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return me;
  }
  function J(L, $, le) {
    if (L == null) return L;
    var ae = [],
      oe = 0;
    return (
      j(L, ae, '', '', function (ne) {
        return $.call(le, ne, oe++);
      }),
      ae
    );
  }
  function te(L) {
    if (L._status === -1) {
      var $ = L._result;
      (($ = $()),
        $.then(
          function (le) {
            (L._status === 0 || L._status === -1) && ((L._status = 1), (L._result = le));
          },
          function (le) {
            (L._status === 0 || L._status === -1) && ((L._status = 2), (L._result = le));
          }
        ),
        L._status === -1 && ((L._status = 0), (L._result = $)));
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ue =
      typeof reportError == 'function'
        ? reportError
        : function (L) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var $ = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof L == 'object' && L !== null && typeof L.message == 'string'
                    ? String(L.message)
                    : String(L),
                error: L,
              });
              if (!window.dispatchEvent($)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', L);
              return;
            }
            console.error(L);
          },
    de = {
      map: J,
      forEach: function (L, $, le) {
        J(
          L,
          function () {
            $.apply(this, arguments);
          },
          le
        );
      },
      count: function (L) {
        var $ = 0;
        return (
          J(L, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (L) {
        return (
          J(L, function ($) {
            return $;
          }) || []
        );
      },
      only: function (L) {
        if (!w(L))
          throw Error('React.Children.only expected to receive a single React element child.');
        return L;
      },
    };
  return (
    (ve.Activity = g),
    (ve.Children = de),
    (ve.Component = C),
    (ve.Fragment = b),
    (ve.Profiler = h),
    (ve.PureComponent = U),
    (ve.StrictMode = E),
    (ve.Suspense = f),
    (ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (ve.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (L) {
        return D.H.useMemoCache(L);
      },
    }),
    (ve.cache = function (L) {
      return function () {
        return L.apply(null, arguments);
      };
    }),
    (ve.cacheSignal = function () {
      return null;
    }),
    (ve.cloneElement = function (L, $, le) {
      if (L == null) throw Error('The argument must be a React element, but you passed ' + L + '.');
      var ae = v({}, L.props),
        oe = L.key;
      if ($ != null)
        for (ne in ($.key !== void 0 && (oe = '' + $.key), $))
          !R.call($, ne) ||
            ne === 'key' ||
            ne === '__self' ||
            ne === '__source' ||
            (ne === 'ref' && $.ref === void 0) ||
            (ae[ne] = $[ne]);
      var ne = arguments.length - 2;
      if (ne === 1) ae.children = le;
      else if (1 < ne) {
        for (var me = Array(ne), Te = 0; Te < ne; Te++) me[Te] = arguments[Te + 2];
        ae.children = me;
      }
      return N(L.type, oe, ae);
    }),
    (ve.createContext = function (L) {
      return (
        (L = {
          $$typeof: c,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (L.Provider = L),
        (L.Consumer = { $$typeof: i, _context: L }),
        L
      );
    }),
    (ve.createElement = function (L, $, le) {
      var ae,
        oe = {},
        ne = null;
      if ($ != null)
        for (ae in ($.key !== void 0 && (ne = '' + $.key), $))
          R.call($, ae) && ae !== 'key' && ae !== '__self' && ae !== '__source' && (oe[ae] = $[ae]);
      var me = arguments.length - 2;
      if (me === 1) oe.children = le;
      else if (1 < me) {
        for (var Te = Array(me), Be = 0; Be < me; Be++) Te[Be] = arguments[Be + 2];
        oe.children = Te;
      }
      if (L && L.defaultProps)
        for (ae in ((me = L.defaultProps), me)) oe[ae] === void 0 && (oe[ae] = me[ae]);
      return N(L, ne, oe);
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (L) {
      return { $$typeof: m, render: L };
    }),
    (ve.isValidElement = w),
    (ve.lazy = function (L) {
      return { $$typeof: s, _payload: { _status: -1, _result: L }, _init: te };
    }),
    (ve.memo = function (L, $) {
      return { $$typeof: d, type: L, compare: $ === void 0 ? null : $ };
    }),
    (ve.startTransition = function (L) {
      var $ = D.T,
        le = {};
      D.T = le;
      try {
        var ae = L(),
          oe = D.S;
        (oe !== null && oe(le, ae),
          typeof ae == 'object' && ae !== null && typeof ae.then == 'function' && ae.then(z, ue));
      } catch (ne) {
        ue(ne);
      } finally {
        ($ !== null && le.types !== null && ($.types = le.types), (D.T = $));
      }
    }),
    (ve.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (ve.use = function (L) {
      return D.H.use(L);
    }),
    (ve.useActionState = function (L, $, le) {
      return D.H.useActionState(L, $, le);
    }),
    (ve.useCallback = function (L, $) {
      return D.H.useCallback(L, $);
    }),
    (ve.useContext = function (L) {
      return D.H.useContext(L);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (L, $) {
      return D.H.useDeferredValue(L, $);
    }),
    (ve.useEffect = function (L, $) {
      return D.H.useEffect(L, $);
    }),
    (ve.useEffectEvent = function (L) {
      return D.H.useEffectEvent(L);
    }),
    (ve.useId = function () {
      return D.H.useId();
    }),
    (ve.useImperativeHandle = function (L, $, le) {
      return D.H.useImperativeHandle(L, $, le);
    }),
    (ve.useInsertionEffect = function (L, $) {
      return D.H.useInsertionEffect(L, $);
    }),
    (ve.useLayoutEffect = function (L, $) {
      return D.H.useLayoutEffect(L, $);
    }),
    (ve.useMemo = function (L, $) {
      return D.H.useMemo(L, $);
    }),
    (ve.useOptimistic = function (L, $) {
      return D.H.useOptimistic(L, $);
    }),
    (ve.useReducer = function (L, $, le) {
      return D.H.useReducer(L, $, le);
    }),
    (ve.useRef = function (L) {
      return D.H.useRef(L);
    }),
    (ve.useState = function (L) {
      return D.H.useState(L);
    }),
    (ve.useSyncExternalStore = function (L, $, le) {
      return D.H.useSyncExternalStore(L, $, le);
    }),
    (ve.useTransition = function () {
      return D.H.useTransition();
    }),
    (ve.version = '19.2.5'),
    ve
  );
}
var bv;
function ss() {
  return (bv || ((bv = 1), (Pf.exports = U0())), Pf.exports);
}
var If = { exports: {} },
  at = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mv;
function N0() {
  if (Mv) return at;
  Mv = 1;
  var o = ss();
  function A(f) {
    var d = 'https://react.dev/errors/' + f;
    if (1 < arguments.length) {
      d += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++) d += '&args[]=' + encodeURIComponent(arguments[s]);
    }
    return (
      'Minified React error #' +
      f +
      '; visit ' +
      d +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function b() {}
  var E = {
      d: {
        f: b,
        r: function () {
          throw Error(A(522));
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
  function i(f, d, s) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: g == null ? null : '' + g,
      children: f,
      containerInfo: d,
      implementation: s,
    };
  }
  var c = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(f, d) {
    if (f === 'font') return '';
    if (typeof d == 'string') return d === 'use-credentials' ? d : '';
  }
  return (
    (at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (at.createPortal = function (f, d) {
      var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || (d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)) throw Error(A(299));
      return i(f, d, null, s);
    }),
    (at.flushSync = function (f) {
      var d = c.T,
        s = E.p;
      try {
        if (((c.T = null), (E.p = 2), f)) return f();
      } finally {
        ((c.T = d), (E.p = s), E.d.f());
      }
    }),
    (at.preconnect = function (f, d) {
      typeof f == 'string' &&
        (d
          ? ((d = d.crossOrigin),
            (d = typeof d == 'string' ? (d === 'use-credentials' ? d : '') : void 0))
          : (d = null),
        E.d.C(f, d));
    }),
    (at.prefetchDNS = function (f) {
      typeof f == 'string' && E.d.D(f);
    }),
    (at.preinit = function (f, d) {
      if (typeof f == 'string' && d && typeof d.as == 'string') {
        var s = d.as,
          g = m(s, d.crossOrigin),
          S = typeof d.integrity == 'string' ? d.integrity : void 0,
          r = typeof d.fetchPriority == 'string' ? d.fetchPriority : void 0;
        s === 'style'
          ? E.d.S(f, typeof d.precedence == 'string' ? d.precedence : void 0, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: r,
            })
          : s === 'script' &&
            E.d.X(f, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: r,
              nonce: typeof d.nonce == 'string' ? d.nonce : void 0,
            });
      }
    }),
    (at.preinitModule = function (f, d) {
      if (typeof f == 'string')
        if (typeof d == 'object' && d !== null) {
          if (d.as == null || d.as === 'script') {
            var s = m(d.as, d.crossOrigin);
            E.d.M(f, {
              crossOrigin: s,
              integrity: typeof d.integrity == 'string' ? d.integrity : void 0,
              nonce: typeof d.nonce == 'string' ? d.nonce : void 0,
            });
          }
        } else d == null && E.d.M(f);
    }),
    (at.preload = function (f, d) {
      if (typeof f == 'string' && typeof d == 'object' && d !== null && typeof d.as == 'string') {
        var s = d.as,
          g = m(s, d.crossOrigin);
        E.d.L(f, s, {
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
    (at.preloadModule = function (f, d) {
      if (typeof f == 'string')
        if (d) {
          var s = m(d.as, d.crossOrigin);
          E.d.m(f, {
            as: typeof d.as == 'string' && d.as !== 'script' ? d.as : void 0,
            crossOrigin: s,
            integrity: typeof d.integrity == 'string' ? d.integrity : void 0,
          });
        } else E.d.m(f);
    }),
    (at.requestFormReset = function (f) {
      E.d.r(f);
    }),
    (at.unstable_batchedUpdates = function (f, d) {
      return f(d);
    }),
    (at.useFormState = function (f, d, s) {
      return c.H.useFormState(f, d, s);
    }),
    (at.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (at.version = '19.2.5'),
    at
  );
}
var Av;
function _0() {
  if (Av) return If.exports;
  Av = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (A) {
        console.error(A);
      }
  }
  return (o(), (If.exports = N0()), If.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cv;
function H0() {
  if (Cv) return Fn;
  Cv = 1;
  var o = B0(),
    A = ss(),
    b = _0();
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
  function f(e) {
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
          if (u === l) return (f(n), e);
          if (u === a) return (f(n), t);
          u = u.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var p = !1, M = n.child; M; ) {
          if (M === l) {
            ((p = !0), (l = n), (a = u));
            break;
          }
          if (M === a) {
            ((p = !0), (a = n), (l = u));
            break;
          }
          M = M.sibling;
        }
        if (!p) {
          for (M = u.child; M; ) {
            if (M === l) {
              ((p = !0), (l = u), (a = n));
              break;
            }
            if (M === a) {
              ((p = !0), (a = u), (l = n));
              break;
            }
            M = M.sibling;
          }
          if (!p) throw Error(E(189));
        }
      }
      if (l.alternate !== a) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? e : t;
  }
  function s(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = s(e)), t !== null)) return t;
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
    U = Symbol.for('react.context'),
    Y = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    z = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    R = Symbol.for('react.lazy'),
    N = Symbol.for('react.activity'),
    B = Symbol.for('react.memo_cache_sentinel'),
    w = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (w && e[w]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var K = Symbol.for('react.client.reference');
  function ee(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === K ? null : e.displayName || e.name || null;
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
      case z:
        return 'SuspenseList';
      case N:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case y:
          return 'Portal';
        case U:
          return e.displayName || 'Context';
        case O:
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
        case D:
          return ((t = e.displayName || null), t !== null ? t : ee(e.type) || 'Memo');
        case R:
          ((t = e._payload), (e = e._init));
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  var P = Array.isArray,
    j = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    te = { pending: !1, data: null, method: null, action: null },
    ue = [],
    de = -1;
  function L(e) {
    return { current: e };
  }
  function $(e) {
    0 > de || ((e.current = ue[de]), (ue[de] = null), de--);
  }
  function le(e, t) {
    (de++, (ue[de] = e.current), (e.current = t));
  }
  var ae = L(null),
    oe = L(null),
    ne = L(null),
    me = L(null);
  function Te(e, t) {
    switch ((le(ne, t), le(oe, e), le(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? jd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = jd(t)), (e = Vd(t, e)));
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
    ($(ae), le(ae, e));
  }
  function Be() {
    ($(ae), $(oe), $(ne));
  }
  function tt(e) {
    e.memoizedState !== null && le(me, e);
    var t = ae.current,
      l = Vd(t, e.type);
    t !== l && (le(oe, e), le(ae, l));
  }
  function nt(e) {
    (oe.current === e && ($(ae), $(oe)), me.current === e && ($(me), (Xn._currentValue = te)));
  }
  var Je, ai;
  function Zt(e) {
    if (Je === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Je = (t && t[1]) || ''),
          (ai =
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
      ai
    );
  }
  var Ia = !1;
  function ra(e, t) {
    if (!e || Ia) return '';
    Ia = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var I = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(I.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(I, []);
                } catch (F) {
                  var Z = F;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (F) {
                  Z = F;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                Z = F;
              }
              (I = e()) && typeof I.catch == 'function' && I.catch(function () {});
            }
          } catch (F) {
            if (F && Z && typeof F.stack == 'string') return [F.stack, Z.stack];
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
        M = u[1];
      if (p && M) {
        var _ = p.split(`
`),
          X = M.split(`
`);
        for (n = a = 0; a < _.length && !_[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; n < X.length && !X[n].includes('DetermineComponentFrameRoot'); ) n++;
        if (a === _.length || n === X.length)
          for (a = _.length - 1, n = X.length - 1; 1 <= a && 0 <= n && _[a] !== X[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (_[a] !== X[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || _[a] !== X[n])) {
                  var W =
                    `
` + _[a].replace(' at new ', ' at ');
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
      ((Ia = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? Zt(l) : '';
  }
  function ni(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Zt(e.type);
      case 16:
        return Zt('Lazy');
      case 13:
        return e.child !== t && t !== null ? Zt('Suspense Fallback') : Zt('Suspense');
      case 19:
        return Zt('SuspenseList');
      case 0:
      case 15:
        return ra(e.type, !1);
      case 11:
        return ra(e.type.render, !1);
      case 1:
        return ra(e.type, !0);
      case 31:
        return Zt('Activity');
      default:
        return '';
    }
  }
  function fa(e) {
    try {
      var t = '',
        l = null;
      do ((t += ni(e, l)), (l = e), (e = e.return));
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
    sa = o.unstable_scheduleCallback,
    Gl = o.unstable_cancelCallback,
    ii = o.unstable_shouldYield,
    ui = o.unstable_requestPaint,
    lt = o.unstable_now,
    ri = o.unstable_getCurrentPriorityLevel,
    jl = o.unstable_ImmediatePriority,
    fi = o.unstable_UserBlockingPriority,
    oa = o.unstable_NormalPriority,
    ca = o.unstable_LowPriority,
    Vl = o.unstable_IdlePriority,
    sm = o.log,
    om = o.unstable_setDisableYieldValue,
    en = null,
    ht = null;
  function ml(e) {
    if ((typeof sm == 'function' && om(e), ht && typeof ht.setStrictMode == 'function'))
      try {
        ht.setStrictMode(en, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : vm,
    cm = Math.log,
    dm = Math.LN2;
  function vm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cm(e) / dm) | 0)) | 0);
  }
  var si = 256,
    oi = 262144,
    ci = 4194304;
  function ql(e) {
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
  function di(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var M = a & 134217727;
    return (
      M !== 0
        ? ((a = M & ~u),
          a !== 0
            ? (n = ql(a))
            : ((p &= M), p !== 0 ? (n = ql(p)) : l || ((l = M & ~e), l !== 0 && (n = ql(l)))))
        : ((M = a & ~u),
          M !== 0
            ? (n = ql(M))
            : p !== 0
              ? (n = ql(p))
              : l || ((l = a & ~e), l !== 0 && (n = ql(l)))),
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
  function tn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function mm(e, t) {
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
  function xs() {
    var e = ci;
    return ((ci <<= 1), (ci & 62914560) === 0 && (ci = 4194304), e);
  }
  function Hu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ln(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function hm(e, t, l, a, n, u) {
    var p = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var M = e.entanglements,
      _ = e.expirationTimes,
      X = e.hiddenUpdates;
    for (l = p & ~l; 0 < l; ) {
      var W = 31 - gt(l),
        I = 1 << W;
      ((M[W] = 0), (_[W] = -1));
      var Z = X[W];
      if (Z !== null)
        for (X[W] = null, W = 0; W < Z.length; W++) {
          var F = Z[W];
          F !== null && (F.lane &= -536870913);
        }
      l &= ~I;
    }
    (a !== 0 && Es(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t)));
  }
  function Es(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - gt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Ts(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - gt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function bs(e, t) {
    var l = t & -t;
    return ((l = (l & 42) !== 0 ? 1 : wu(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
  }
  function wu(e) {
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
  function Lu(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Ms() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ov(e.type));
  }
  function As(e, t) {
    var l = J.p;
    try {
      return ((J.p = e), t());
    } finally {
      J.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + hl,
    ut = '__reactProps$' + hl,
    da = '__reactContainer$' + hl,
    Yu = '__reactEvents$' + hl,
    gm = '__reactListeners$' + hl,
    ym = '__reactHandles$' + hl,
    Cs = '__reactResources$' + hl,
    an = '__reactMarker$' + hl;
  function Gu(e) {
    (delete e[We], delete e[ut], delete e[Yu], delete e[gm], delete e[ym]);
  }
  function va(e) {
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
  function ma(e) {
    if ((e = e[We] || e[da])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function nn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(E(33));
  }
  function ha(e) {
    var t = e[Cs];
    return (t || (t = e[Cs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Fe(e) {
    e[an] = !0;
  }
  var Rs = new Set(),
    zs = {};
  function Xl(e, t) {
    (ga(e, t), ga(e + 'Capture', t));
  }
  function ga(e, t) {
    for (zs[e] = t, e = 0; e < t.length; e++) Rs.add(t[e]);
  }
  var pm = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Ds = {},
    Os = {};
  function Sm(e) {
    return mt.call(Os, e)
      ? !0
      : mt.call(Ds, e)
        ? !1
        : pm.test(e)
          ? (Os[e] = !0)
          : ((Ds[e] = !0), !1);
  }
  function vi(e, t, l) {
    if (Sm(t))
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
  function mi(e, t, l) {
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
  function Kt(e, t, l, a) {
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
  function Mt(e) {
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
  function Bs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function xm(e, t, l) {
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
  function ju(e) {
    if (!e._valueTracker) {
      var t = Bs(e) ? 'checked' : 'value';
      e._valueTracker = xm(e, t, '' + e[t]);
    }
  }
  function Us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e && (a = Bs(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function hi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Em = /[\n"\\]/g;
  function At(e) {
    return e.replace(Em, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Vu(e, t, l, a, n, u, p, M) {
    ((e.name = ''),
      p != null && typeof p != 'function' && typeof p != 'symbol' && typeof p != 'boolean'
        ? (e.type = p)
        : e.removeAttribute('type'),
      t != null
        ? p === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Mt(t))
          : e.value !== '' + Mt(t) && (e.value = '' + Mt(t))
        : (p !== 'submit' && p !== 'reset') || e.removeAttribute('value'),
      t != null
        ? qu(e, p, Mt(t))
        : l != null
          ? qu(e, p, Mt(l))
          : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      M != null && typeof M != 'function' && typeof M != 'symbol' && typeof M != 'boolean'
        ? (e.name = '' + Mt(M))
        : e.removeAttribute('name'));
  }
  function Ns(e, t, l, a, n, u, p, M) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        ju(e);
        return;
      }
      ((l = l != null ? '' + Mt(l) : ''),
        (t = t != null ? '' + Mt(t) : l),
        M || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = M ? e.checked : !!a),
      (e.defaultChecked = !!a),
      p != null &&
        typeof p != 'function' &&
        typeof p != 'symbol' &&
        typeof p != 'boolean' &&
        (e.name = p),
      ju(e));
  }
  function qu(e, t, l) {
    (t === 'number' && hi(e.ownerDocument) === e) ||
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
      for (l = '' + Mt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _s(e, t, l) {
    if (t != null && ((t = '' + Mt(t)), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + Mt(l) : '';
  }
  function Hs(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(E(92));
        if (P(a)) {
          if (1 < a.length) throw Error(E(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = Mt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a),
      ju(e));
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
  var Tm = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function ws(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Tm.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function Ls(e, t, l) {
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
      for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && ws(e, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && ws(e, u, t[u]);
  }
  function Xu(e) {
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
  var bm = new Map([
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
    Mm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gi(e) {
    return Mm.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Jt() {}
  var Qu = null;
  function Zu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Sa = null,
    xa = null;
  function Ys(e) {
    var t = ma(e);
    if (t && (e = t.stateNode)) {
      var l = e[ut] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Vu(
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
              l = l.querySelectorAll('input[name="' + At('' + t) + '"][type="radio"]'), t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[ut] || null;
                if (!n) throw Error(E(90));
                Vu(
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
            for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && Us(a));
          }
          break e;
        case 'textarea':
          _s(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && ya(e, !!l.multiple, t, !1));
      }
    }
  }
  var Ku = !1;
  function Gs(e, t, l) {
    if (Ku) return e(t, l);
    Ku = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ku = !1),
        (Sa !== null || xa !== null) &&
          (au(), Sa && ((t = Sa), (e = xa), (xa = Sa = null), Ys(t), e)))
      )
        for (t = 0; t < e.length; t++) Ys(e[t]);
    }
  }
  function un(e, t) {
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
  var Ft = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ju = !1;
  if (Ft)
    try {
      var rn = {};
      (Object.defineProperty(rn, 'passive', {
        get: function () {
          Ju = !0;
        },
      }),
        window.addEventListener('test', rn, rn),
        window.removeEventListener('test', rn, rn));
    } catch {
      Ju = !1;
    }
  var gl = null,
    Fu = null,
    yi = null;
  function js() {
    if (yi) return yi;
    var e,
      t = Fu,
      l = t.length,
      a,
      n = 'value' in gl ? gl.value : gl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var p = l - e;
    for (a = 1; a <= p && t[l - a] === n[u - a]; a++);
    return (yi = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function pi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Si() {
    return !0;
  }
  function Vs() {
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
      for (var M in e) e.hasOwnProperty(M) && ((l = e[M]), (this[M] = l ? l(u) : u[M]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Si
          : Vs),
        (this.isPropagationStopped = Vs),
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
            (this.isDefaultPrevented = Si));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Si));
        },
        persist: function () {},
        isPersistent: Si,
      }),
      t
    );
  }
  var Ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xi = rt(Ql),
    fn = g({}, Ql, { view: 0, detail: 0 }),
    Am = rt(fn),
    $u,
    Wu,
    sn,
    Ei = g({}, fn, {
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
      getModifierState: Pu,
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
          : (e !== sn &&
              (sn && e.type === 'mousemove'
                ? (($u = e.screenX - sn.screenX), (Wu = e.screenY - sn.screenY))
                : (Wu = $u = 0),
              (sn = e)),
            $u);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Wu;
      },
    }),
    qs = rt(Ei),
    Cm = g({}, Ei, { dataTransfer: 0 }),
    Rm = rt(Cm),
    zm = g({}, fn, { relatedTarget: 0 }),
    ku = rt(zm),
    Dm = g({}, Ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Om = rt(Dm),
    Bm = g({}, Ql, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Um = rt(Bm),
    Nm = g({}, Ql, { data: 0 }),
    Xs = rt(Nm),
    _m = {
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
    Hm = {
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
    wm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Lm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1;
  }
  function Pu() {
    return Lm;
  }
  var Ym = g({}, fn, {
      key: function (e) {
        if (e.key) {
          var t = _m[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = pi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Hm[e.keyCode] || 'Unidentified'
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
      getModifierState: Pu,
      charCode: function (e) {
        return e.type === 'keypress' ? pi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? pi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Gm = rt(Ym),
    jm = g({}, Ei, {
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
    Qs = rt(jm),
    Vm = g({}, fn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pu,
    }),
    qm = rt(Vm),
    Xm = g({}, Ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qm = rt(Xm),
    Zm = g({}, Ei, {
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
    Km = rt(Zm),
    Jm = g({}, Ql, { newState: 0, oldState: 0 }),
    Fm = rt(Jm),
    $m = [9, 13, 27, 32],
    Iu = Ft && 'CompositionEvent' in window,
    on = null;
  Ft && 'documentMode' in document && (on = document.documentMode);
  var Wm = Ft && 'TextEvent' in window && !on,
    Zs = Ft && (!Iu || (on && 8 < on && 11 >= on)),
    Ks = ' ',
    Js = !1;
  function Fs(e, t) {
    switch (e) {
      case 'keyup':
        return $m.indexOf(t.keyCode) !== -1;
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
  function $s(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Ea = !1;
  function km(e, t) {
    switch (e) {
      case 'compositionend':
        return $s(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Js = !0), Ks);
      case 'textInput':
        return ((e = t.data), e === Ks && Js ? null : e);
      default:
        return null;
    }
  }
  function Pm(e, t) {
    if (Ea)
      return e === 'compositionend' || (!Iu && Fs(e, t))
        ? ((e = js()), (yi = Fu = gl = null), (Ea = !1), e)
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
        return Zs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Im = {
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
  function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Im[e.type] : t === 'textarea';
  }
  function ks(e, t, l, a) {
    (Sa ? (xa ? xa.push(a) : (xa = [a])) : (Sa = a),
      (t = ou(t, 'onChange')),
      0 < t.length &&
        ((l = new xi('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
  }
  var cn = null,
    dn = null;
  function eh(e) {
    _d(e, 0);
  }
  function Ti(e) {
    var t = nn(e);
    if (Us(t)) return e;
  }
  function Ps(e, t) {
    if (e === 'change') return t;
  }
  var Is = !1;
  if (Ft) {
    var er;
    if (Ft) {
      var tr = 'oninput' in document;
      if (!tr) {
        var eo = document.createElement('div');
        (eo.setAttribute('oninput', 'return;'), (tr = typeof eo.oninput == 'function'));
      }
      er = tr;
    } else er = !1;
    Is = er && (!document.documentMode || 9 < document.documentMode);
  }
  function to() {
    cn && (cn.detachEvent('onpropertychange', lo), (dn = cn = null));
  }
  function lo(e) {
    if (e.propertyName === 'value' && Ti(dn)) {
      var t = [];
      (ks(t, dn, e, Zu(e)), Gs(eh, t));
    }
  }
  function th(e, t, l) {
    e === 'focusin'
      ? (to(), (cn = t), (dn = l), cn.attachEvent('onpropertychange', lo))
      : e === 'focusout' && to();
  }
  function lh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ti(dn);
  }
  function ah(e, t) {
    if (e === 'click') return Ti(t);
  }
  function nh(e, t) {
    if (e === 'input' || e === 'change') return Ti(t);
  }
  function ih(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var yt = typeof Object.is == 'function' ? Object.is : ih;
  function vn(e, t) {
    if (yt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mt.call(t, n) || !yt(e[n], t[n])) return !1;
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
    for (var t = hi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = hi(e.document);
    }
    return t;
  }
  function lr(e) {
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
  var uh = Ft && 'documentMode' in document && 11 >= document.documentMode,
    Ta = null,
    ar = null,
    mn = null,
    nr = !1;
  function ro(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nr ||
      Ta == null ||
      Ta !== hi(a) ||
      ((a = Ta),
      'selectionStart' in a && lr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (mn && vn(mn, a)) ||
        ((mn = a),
        (a = ou(ar, 'onSelect')),
        0 < a.length &&
          ((t = new xi('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Ta))));
  }
  function Zl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ba = {
      animationend: Zl('Animation', 'AnimationEnd'),
      animationiteration: Zl('Animation', 'AnimationIteration'),
      animationstart: Zl('Animation', 'AnimationStart'),
      transitionrun: Zl('Transition', 'TransitionRun'),
      transitionstart: Zl('Transition', 'TransitionStart'),
      transitioncancel: Zl('Transition', 'TransitionCancel'),
      transitionend: Zl('Transition', 'TransitionEnd'),
    },
    ir = {},
    fo = {};
  Ft &&
    ((fo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ba.animationend.animation,
      delete ba.animationiteration.animation,
      delete ba.animationstart.animation),
    'TransitionEvent' in window || delete ba.transitionend.transition);
  function Kl(e) {
    if (ir[e]) return ir[e];
    if (!ba[e]) return e;
    var t = ba[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in fo) return (ir[e] = t[l]);
    return e;
  }
  var so = Kl('animationend'),
    oo = Kl('animationiteration'),
    co = Kl('animationstart'),
    rh = Kl('transitionrun'),
    fh = Kl('transitionstart'),
    sh = Kl('transitioncancel'),
    vo = Kl('transitionend'),
    mo = new Map(),
    ur =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  ur.push('scrollEnd');
  function Ht(e, t) {
    (mo.set(e, t), Xl(t, [e]));
  }
  var bi =
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
    Ct = [],
    Ma = 0,
    rr = 0;
  function Mi() {
    for (var e = Ma, t = (rr = Ma = 0); t < e; ) {
      var l = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var u = Ct[t];
      if (((Ct[t++] = null), a !== null && n !== null)) {
        var p = a.pending;
        (p === null ? (n.next = n) : ((n.next = p.next), (p.next = n)), (a.pending = n));
      }
      u !== 0 && ho(l, n, u);
    }
  }
  function Ai(e, t, l, a) {
    ((Ct[Ma++] = e),
      (Ct[Ma++] = t),
      (Ct[Ma++] = l),
      (Ct[Ma++] = a),
      (rr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function fr(e, t, l, a) {
    return (Ai(e, t, l, a), Ci(e));
  }
  function Jl(e, t) {
    return (Ai(e, null, null, t), Ci(e));
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
          ((n = 31 - gt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function Ci(e) {
    if (50 < wn) throw ((wn = 0), (pf = null), Error(E(185)));
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
  function pt(e, t, l, a) {
    return new oh(e, t, l, a);
  }
  function sr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function $t(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = pt(e.tag, t, e.key, e.mode)),
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
  function Ri(e, t, l, a, n, u) {
    var p = 0;
    if (((a = e), typeof e == 'function')) sr(e) && (p = 1);
    else if (typeof e == 'string')
      p = h0(e, l, ae.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case N:
          return ((e = pt(31, l, t, n)), (e.elementType = N), (e.lanes = u), e);
        case v:
          return Fl(l.children, n, u, t);
        case x:
          ((p = 8), (n |= 24));
          break;
        case C:
          return ((e = pt(12, l, t, n | 2)), (e.elementType = C), (e.lanes = u), e);
        case T:
          return ((e = pt(13, l, t, n)), (e.elementType = T), (e.lanes = u), e);
        case z:
          return ((e = pt(19, l, t, n)), (e.elementType = z), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case U:
                p = 10;
                break e;
              case O:
                p = 9;
                break e;
              case Y:
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
    return ((t = pt(p, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Fl(e, t, l, a) {
    return ((e = pt(7, e, a, t)), (e.lanes = l), e);
  }
  function or(e, t, l) {
    return ((e = pt(6, e, null, t)), (e.lanes = l), e);
  }
  function yo(e) {
    var t = pt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function cr(e, t, l) {
    return (
      (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
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
  function Rt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = po.get(e);
      return l !== void 0 ? l : ((t = { value: e, source: t, stack: fa(t) }), po.set(e, t), t);
    }
    return { value: e, source: t, stack: fa(t) };
  }
  var Ca = [],
    Ra = 0,
    zi = null,
    hn = 0,
    zt = [],
    Dt = 0,
    yl = null,
    Gt = 1,
    jt = '';
  function Wt(e, t) {
    ((Ca[Ra++] = hn), (Ca[Ra++] = zi), (zi = e), (hn = t));
  }
  function So(e, t, l) {
    ((zt[Dt++] = Gt), (zt[Dt++] = jt), (zt[Dt++] = yl), (yl = e));
    var a = Gt;
    e = jt;
    var n = 32 - gt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - gt(t) + n;
    if (30 < u) {
      var p = n - (n % 5);
      ((u = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (n -= p),
        (Gt = (1 << (32 - gt(t) + n)) | (l << n) | a),
        (jt = u + e));
    } else ((Gt = (1 << u) | (l << n) | a), (jt = e));
  }
  function dr(e) {
    e.return !== null && (Wt(e, 1), So(e, 1, 0));
  }
  function vr(e) {
    for (; e === zi; ) ((zi = Ca[--Ra]), (Ca[Ra] = null), (hn = Ca[--Ra]), (Ca[Ra] = null));
    for (; e === yl; )
      ((yl = zt[--Dt]),
        (zt[Dt] = null),
        (jt = zt[--Dt]),
        (zt[Dt] = null),
        (Gt = zt[--Dt]),
        (zt[Dt] = null));
  }
  function xo(e, t) {
    ((zt[Dt++] = Gt), (zt[Dt++] = jt), (zt[Dt++] = yl), (Gt = t.id), (jt = t.overflow), (yl = e));
  }
  var ke = null,
    Ne = null,
    Ee = !1,
    pl = null,
    Ot = !1,
    mr = Error(E(519));
  function Sl(e) {
    var t = Error(
      E(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (gn(Rt(t, e)), mr);
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
        for (l = 0; l < Yn.length; l++) pe(Yn[l], t);
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
          Ns(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        pe('invalid', t);
        break;
      case 'textarea':
        (pe('invalid', t), Hs(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Yd(t.textContent, l)
        ? (a.popover != null && (pe('beforetoggle', t), pe('toggle', t)),
          a.onScroll != null && pe('scroll', t),
          a.onScrollEnd != null && pe('scrollend', t),
          a.onClick != null && (t.onclick = Jt),
          (t = !0))
        : (t = !1),
      t || Sl(e, !0));
  }
  function To(e) {
    for (ke = e.return; ke; )
      switch (ke.tag) {
        case 5:
        case 31:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
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
          ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Nf(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ne && Sl(e),
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
        ? ((t = Ne), Nl(e.type) ? ((e = Yf), (Yf = null), (Ne = e)) : (Ne = t))
        : (Ne = ke ? Ut(e.stateNode.nextSibling) : null);
    return !0;
  }
  function $l() {
    ((Ne = ke = null), (Ee = !1));
  }
  function hr() {
    var e = pl;
    return (e !== null && (ct === null ? (ct = e) : ct.push.apply(ct, e), (pl = null)), e);
  }
  function gn(e) {
    pl === null ? (pl = [e]) : pl.push(e);
  }
  var gr = L(null),
    Wl = null,
    kt = null;
  function xl(e, t, l) {
    (le(gr, t._currentValue), (t._currentValue = l));
  }
  function Pt(e) {
    ((e._currentValue = gr.current), $(gr));
  }
  function yr(e, t, l) {
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
  function pr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var p = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var M = u;
          u = n;
          for (var _ = 0; _ < t.length; _++)
            if (M.context === t[_]) {
              ((u.lanes |= l),
                (M = u.alternate),
                M !== null && (M.lanes |= l),
                yr(u.return, l, e),
                a || (p = null));
              break e;
            }
          u = M.next;
        }
      } else if (n.tag === 18) {
        if (((p = n.return), p === null)) throw Error(E(341));
        ((p.lanes |= l), (u = p.alternate), u !== null && (u.lanes |= l), yr(p, l, e), (p = null));
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
          var M = n.type;
          yt(n.pendingProps.value, p.value) || (e !== null ? e.push(M) : (e = [M]));
        }
      } else if (n === me.current) {
        if (((p = n.alternate), p === null)) throw Error(E(387));
        p.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Xn) : (e = [Xn]));
      }
      n = n.return;
    }
    (e !== null && pr(t, e, l, a), (t.flags |= 262144));
  }
  function Di(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    ((Wl = e), (kt = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function Pe(e) {
    return bo(Wl, e);
  }
  function Oi(e, t) {
    return (Wl === null && kl(e), bo(e, t));
  }
  function bo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), kt === null)) {
      if (e === null) throw Error(E(308));
      ((kt = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else kt = kt.next = t;
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
    vh = o.unstable_NormalPriority,
    qe = {
      $$typeof: U,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Sr() {
    return { controller: new ch(), data: new Map(), refCount: 0 };
  }
  function yn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        dh(vh, function () {
          e.controller.abort();
        }));
  }
  var pn = null,
    xr = 0,
    Oa = 0,
    Ba = null;
  function mh(e, t) {
    if (pn === null) {
      var l = (pn = []);
      ((xr = 0),
        (Oa = Mf()),
        (Ba = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (xr++, t.then(Mo, Mo), t);
  }
  function Mo() {
    if (--xr === 0 && pn !== null) {
      Ba !== null && (Ba.status = 'fulfilled');
      var e = pn;
      ((pn = null), (Oa = 0), (Ba = null));
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
  var Ao = j.S;
  j.S = function (e, t) {
    ((fd = lt()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && mh(e, t),
      Ao !== null && Ao(e, t));
  };
  var Pl = L(null);
  function Er() {
    var e = Pl.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function Bi(e, t) {
    t === null ? le(Pl, Pl.current) : le(Pl, t.pool);
  }
  function Co() {
    var e = Er();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Ua = Error(E(460)),
    Tr = Error(E(474)),
    Ui = Error(E(542)),
    Ni = { then: function () {} };
  function Ro(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function zo(e, t, l) {
    switch (
      ((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), (t = l)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Oo(e), e);
      default:
        if (typeof t.status == 'string') t.then(Jt, Jt);
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
        throw ((ea = t), Ua);
    }
  }
  function Il(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((ea = l), Ua) : l;
    }
  }
  var ea = null;
  function Do() {
    if (ea === null) throw Error(E(459));
    var e = ea;
    return ((ea = null), e);
  }
  function Oo(e) {
    if (e === Ua || e === Ui) throw Error(E(483));
  }
  var Na = null,
    Sn = 0;
  function _i(e) {
    var t = Sn;
    return ((Sn += 1), Na === null && (Na = []), zo(Na, e, t));
  }
  function xn(e, t) {
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
    function t(V, G) {
      if (e) {
        var q = V.deletions;
        q === null ? ((V.deletions = [G]), (V.flags |= 16)) : q.push(G);
      }
    }
    function l(V, G) {
      if (!e) return null;
      for (; G !== null; ) (t(V, G), (G = G.sibling));
      return null;
    }
    function a(V) {
      for (var G = new Map(); V !== null; )
        (V.key !== null ? G.set(V.key, V) : G.set(V.index, V), (V = V.sibling));
      return G;
    }
    function n(V, G) {
      return ((V = $t(V, G)), (V.index = 0), (V.sibling = null), V);
    }
    function u(V, G, q) {
      return (
        (V.index = q),
        e
          ? ((q = V.alternate),
            q !== null
              ? ((q = q.index), q < G ? ((V.flags |= 67108866), G) : q)
              : ((V.flags |= 67108866), G))
          : ((V.flags |= 1048576), G)
      );
    }
    function p(V) {
      return (e && V.alternate === null && (V.flags |= 67108866), V);
    }
    function M(V, G, q, k) {
      return G === null || G.tag !== 6
        ? ((G = or(q, V.mode, k)), (G.return = V), G)
        : ((G = n(G, q)), (G.return = V), G);
    }
    function _(V, G, q, k) {
      var se = q.type;
      return se === v
        ? W(V, G, q.props.children, k, q.key)
        : G !== null &&
            (G.elementType === se ||
              (typeof se == 'object' && se !== null && se.$$typeof === R && Il(se) === G.type))
          ? ((G = n(G, q.props)), xn(G, q), (G.return = V), G)
          : ((G = Ri(q.type, q.key, q.props, null, V.mode, k)), xn(G, q), (G.return = V), G);
    }
    function X(V, G, q, k) {
      return G === null ||
        G.tag !== 4 ||
        G.stateNode.containerInfo !== q.containerInfo ||
        G.stateNode.implementation !== q.implementation
        ? ((G = cr(q, V.mode, k)), (G.return = V), G)
        : ((G = n(G, q.children || [])), (G.return = V), G);
    }
    function W(V, G, q, k, se) {
      return G === null || G.tag !== 7
        ? ((G = Fl(q, V.mode, k, se)), (G.return = V), G)
        : ((G = n(G, q)), (G.return = V), G);
    }
    function I(V, G, q) {
      if ((typeof G == 'string' && G !== '') || typeof G == 'number' || typeof G == 'bigint')
        return ((G = or('' + G, V.mode, q)), (G.return = V), G);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case r:
            return ((q = Ri(G.type, G.key, G.props, null, V.mode, q)), xn(q, G), (q.return = V), q);
          case y:
            return ((G = cr(G, V.mode, q)), (G.return = V), G);
          case R:
            return ((G = Il(G)), I(V, G, q));
        }
        if (P(G) || H(G)) return ((G = Fl(G, V.mode, q, null)), (G.return = V), G);
        if (typeof G.then == 'function') return I(V, _i(G), q);
        if (G.$$typeof === U) return I(V, Oi(V, G), q);
        Hi(V, G);
      }
      return null;
    }
    function Z(V, G, q, k) {
      var se = G !== null ? G.key : null;
      if ((typeof q == 'string' && q !== '') || typeof q == 'number' || typeof q == 'bigint')
        return se !== null ? null : M(V, G, '' + q, k);
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case r:
            return q.key === se ? _(V, G, q, k) : null;
          case y:
            return q.key === se ? X(V, G, q, k) : null;
          case R:
            return ((q = Il(q)), Z(V, G, q, k));
        }
        if (P(q) || H(q)) return se !== null ? null : W(V, G, q, k, null);
        if (typeof q.then == 'function') return Z(V, G, _i(q), k);
        if (q.$$typeof === U) return Z(V, G, Oi(V, q), k);
        Hi(V, q);
      }
      return null;
    }
    function F(V, G, q, k, se) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number' || typeof k == 'bigint')
        return ((V = V.get(q) || null), M(G, V, '' + k, se));
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case r:
            return ((V = V.get(k.key === null ? q : k.key) || null), _(G, V, k, se));
          case y:
            return ((V = V.get(k.key === null ? q : k.key) || null), X(G, V, k, se));
          case R:
            return ((k = Il(k)), F(V, G, q, k, se));
        }
        if (P(k) || H(k)) return ((V = V.get(q) || null), W(G, V, k, se, null));
        if (typeof k.then == 'function') return F(V, G, q, _i(k), se);
        if (k.$$typeof === U) return F(V, G, q, Oi(G, k), se);
        Hi(G, k);
      }
      return null;
    }
    function re(V, G, q, k) {
      for (
        var se = null, be = null, fe = G, ge = (G = 0), xe = null;
        fe !== null && ge < q.length;
        ge++
      ) {
        fe.index > ge ? ((xe = fe), (fe = null)) : (xe = fe.sibling);
        var Me = Z(V, fe, q[ge], k);
        if (Me === null) {
          fe === null && (fe = xe);
          break;
        }
        (e && fe && Me.alternate === null && t(V, fe),
          (G = u(Me, G, ge)),
          be === null ? (se = Me) : (be.sibling = Me),
          (be = Me),
          (fe = xe));
      }
      if (ge === q.length) return (l(V, fe), Ee && Wt(V, ge), se);
      if (fe === null) {
        for (; ge < q.length; ge++)
          ((fe = I(V, q[ge], k)),
            fe !== null &&
              ((G = u(fe, G, ge)), be === null ? (se = fe) : (be.sibling = fe), (be = fe)));
        return (Ee && Wt(V, ge), se);
      }
      for (fe = a(fe); ge < q.length; ge++)
        ((xe = F(fe, V, ge, q[ge], k)),
          xe !== null &&
            (e && xe.alternate !== null && fe.delete(xe.key === null ? ge : xe.key),
            (G = u(xe, G, ge)),
            be === null ? (se = xe) : (be.sibling = xe),
            (be = xe)));
      return (
        e &&
          fe.forEach(function (Yl) {
            return t(V, Yl);
          }),
        Ee && Wt(V, ge),
        se
      );
    }
    function ce(V, G, q, k) {
      if (q == null) throw Error(E(151));
      for (
        var se = null, be = null, fe = G, ge = (G = 0), xe = null, Me = q.next();
        fe !== null && !Me.done;
        ge++, Me = q.next()
      ) {
        fe.index > ge ? ((xe = fe), (fe = null)) : (xe = fe.sibling);
        var Yl = Z(V, fe, Me.value, k);
        if (Yl === null) {
          fe === null && (fe = xe);
          break;
        }
        (e && fe && Yl.alternate === null && t(V, fe),
          (G = u(Yl, G, ge)),
          be === null ? (se = Yl) : (be.sibling = Yl),
          (be = Yl),
          (fe = xe));
      }
      if (Me.done) return (l(V, fe), Ee && Wt(V, ge), se);
      if (fe === null) {
        for (; !Me.done; ge++, Me = q.next())
          ((Me = I(V, Me.value, k)),
            Me !== null &&
              ((G = u(Me, G, ge)), be === null ? (se = Me) : (be.sibling = Me), (be = Me)));
        return (Ee && Wt(V, ge), se);
      }
      for (fe = a(fe); !Me.done; ge++, Me = q.next())
        ((Me = F(fe, V, ge, Me.value, k)),
          Me !== null &&
            (e && Me.alternate !== null && fe.delete(Me.key === null ? ge : Me.key),
            (G = u(Me, G, ge)),
            be === null ? (se = Me) : (be.sibling = Me),
            (be = Me)));
      return (
        e &&
          fe.forEach(function (C0) {
            return t(V, C0);
          }),
        Ee && Wt(V, ge),
        se
      );
    }
    function Oe(V, G, q, k) {
      if (
        (typeof q == 'object' &&
          q !== null &&
          q.type === v &&
          q.key === null &&
          (q = q.props.children),
        typeof q == 'object' && q !== null)
      ) {
        switch (q.$$typeof) {
          case r:
            e: {
              for (var se = q.key; G !== null; ) {
                if (G.key === se) {
                  if (((se = q.type), se === v)) {
                    if (G.tag === 7) {
                      (l(V, G.sibling), (k = n(G, q.props.children)), (k.return = V), (V = k));
                      break e;
                    }
                  } else if (
                    G.elementType === se ||
                    (typeof se == 'object' && se !== null && se.$$typeof === R && Il(se) === G.type)
                  ) {
                    (l(V, G.sibling), (k = n(G, q.props)), xn(k, q), (k.return = V), (V = k));
                    break e;
                  }
                  l(V, G);
                  break;
                } else t(V, G);
                G = G.sibling;
              }
              q.type === v
                ? ((k = Fl(q.props.children, V.mode, k, q.key)), (k.return = V), (V = k))
                : ((k = Ri(q.type, q.key, q.props, null, V.mode, k)),
                  xn(k, q),
                  (k.return = V),
                  (V = k));
            }
            return p(V);
          case y:
            e: {
              for (se = q.key; G !== null; ) {
                if (G.key === se)
                  if (
                    G.tag === 4 &&
                    G.stateNode.containerInfo === q.containerInfo &&
                    G.stateNode.implementation === q.implementation
                  ) {
                    (l(V, G.sibling), (k = n(G, q.children || [])), (k.return = V), (V = k));
                    break e;
                  } else {
                    l(V, G);
                    break;
                  }
                else t(V, G);
                G = G.sibling;
              }
              ((k = cr(q, V.mode, k)), (k.return = V), (V = k));
            }
            return p(V);
          case R:
            return ((q = Il(q)), Oe(V, G, q, k));
        }
        if (P(q)) return re(V, G, q, k);
        if (H(q)) {
          if (((se = H(q)), typeof se != 'function')) throw Error(E(150));
          return ((q = se.call(q)), ce(V, G, q, k));
        }
        if (typeof q.then == 'function') return Oe(V, G, _i(q), k);
        if (q.$$typeof === U) return Oe(V, G, Oi(V, q), k);
        Hi(V, q);
      }
      return (typeof q == 'string' && q !== '') || typeof q == 'number' || typeof q == 'bigint'
        ? ((q = '' + q),
          G !== null && G.tag === 6
            ? (l(V, G.sibling), (k = n(G, q)), (k.return = V), (V = k))
            : (l(V, G), (k = or(q, V.mode, k)), (k.return = V), (V = k)),
          p(V))
        : l(V, G);
    }
    return function (V, G, q, k) {
      try {
        Sn = 0;
        var se = Oe(V, G, q, k);
        return ((Na = null), se);
      } catch (fe) {
        if (fe === Ua || fe === Ui) throw fe;
        var be = pt(29, fe, null, V.mode);
        return ((be.lanes = k), (be.return = V), be);
      } finally {
      }
    };
  }
  var ta = Bo(!0),
    Uo = Bo(!1),
    El = !1;
  function br(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mr(e, t) {
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
  function Tl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ae & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Ci(e)),
        ho(e, null, l),
        t
      );
    }
    return (Ai(e, a, t, l), Ci(e));
  }
  function En(e, t, l) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ts(e, l));
    }
  }
  function Ar(e, t) {
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
  var Cr = !1;
  function Tn() {
    if (Cr) {
      var e = Ba;
      if (e !== null) throw e;
    }
  }
  function bn(e, t, l, a) {
    Cr = !1;
    var n = e.updateQueue;
    El = !1;
    var u = n.firstBaseUpdate,
      p = n.lastBaseUpdate,
      M = n.shared.pending;
    if (M !== null) {
      n.shared.pending = null;
      var _ = M,
        X = _.next;
      ((_.next = null), p === null ? (u = X) : (p.next = X), (p = _));
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (M = W.lastBaseUpdate),
        M !== p && (M === null ? (W.firstBaseUpdate = X) : (M.next = X), (W.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var I = n.baseState;
      ((p = 0), (W = X = _ = null), (M = u));
      do {
        var Z = M.lane & -536870913,
          F = Z !== M.lane;
        if (F ? (Se & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === Oa && (Cr = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null }));
          e: {
            var re = e,
              ce = M;
            Z = t;
            var Oe = l;
            switch (ce.tag) {
              case 1:
                if (((re = ce.payload), typeof re == 'function')) {
                  I = re.call(Oe, I, Z);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ce.payload),
                  (Z = typeof re == 'function' ? re.call(Oe, I, Z) : re),
                  Z == null)
                )
                  break e;
                I = g({}, I, Z);
                break e;
              case 2:
                El = !0;
            }
          }
          ((Z = M.callback),
            Z !== null &&
              ((e.flags |= 64),
              F && (e.flags |= 8192),
              (F = n.callbacks),
              F === null ? (n.callbacks = [Z]) : F.push(Z)));
        } else
          ((F = { lane: Z, tag: M.tag, payload: M.payload, callback: M.callback, next: null }),
            W === null ? ((X = W = F), (_ = I)) : (W = W.next = F),
            (p |= Z));
        if (((M = M.next), M === null)) {
          if (((M = n.shared.pending), M === null)) break;
          ((F = M),
            (M = F.next),
            (F.next = null),
            (n.lastBaseUpdate = F),
            (n.shared.pending = null));
        }
      } while (!0);
      (W === null && (_ = I),
        (n.baseState = _),
        (n.firstBaseUpdate = X),
        (n.lastBaseUpdate = W),
        u === null && (n.shared.lanes = 0),
        (zl |= p),
        (e.lanes = p),
        (e.memoizedState = I));
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
  var _a = L(null),
    wi = L(0);
  function Ho(e, t) {
    ((e = rl), le(wi, e), le(_a, t), (rl = e | t.baseLanes));
  }
  function Rr() {
    (le(wi, rl), le(_a, _a.current));
  }
  function zr() {
    ((rl = wi.current), $(_a), $(wi));
  }
  var St = L(null),
    Bt = null;
  function Ml(e) {
    var t = e.alternate;
    (le(je, je.current & 1),
      le(St, e),
      Bt === null && (t === null || _a.current !== null || t.memoizedState !== null) && (Bt = e));
  }
  function Dr(e) {
    (le(je, je.current), le(St, e), Bt === null && (Bt = e));
  }
  function wo(e) {
    e.tag === 22 ? (le(je, je.current), le(St, e), Bt === null && (Bt = e)) : Al();
  }
  function Al() {
    (le(je, je.current), le(St, St.current));
  }
  function xt(e) {
    ($(St), Bt === e && (Bt = null), $(je));
  }
  var je = L(0);
  function Li(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || wf(l) || Lf(l))) return t;
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
    he = null,
    ze = null,
    Xe = null,
    Yi = !1,
    Ha = !1,
    la = !1,
    Gi = 0,
    Mn = 0,
    wa = null,
    gh = 0;
  function Ye() {
    throw Error(E(321));
  }
  function Or(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++) if (!yt(e[l], t[l])) return !1;
    return !0;
  }
  function Br(e, t, l, a, n, u) {
    return (
      (It = u),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (j.H = e === null || e.memoizedState === null ? Sc : Kr),
      (la = !1),
      (u = l(a, n)),
      (la = !1),
      Ha && (u = Yo(t, l, a, n)),
      Lo(e),
      u
    );
  }
  function Lo(e) {
    j.H = Rn;
    var t = ze !== null && ze.next !== null;
    if (((It = 0), (Xe = ze = he = null), (Yi = !1), (Mn = 0), (wa = null), t)) throw Error(E(300));
    e === null || Qe || ((e = e.dependencies), e !== null && Di(e) && (Qe = !0));
  }
  function Yo(e, t, l, a) {
    he = e;
    var n = 0;
    do {
      if ((Ha && (wa = null), (Mn = 0), (Ha = !1), 25 <= n)) throw Error(E(301));
      if (((n += 1), (Xe = ze = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((j.H = xc), (u = t(l, a)));
    } while (Ha);
    return u;
  }
  function yh() {
    var e = j.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? An(t) : t),
      (e = e.useState()[0]),
      (ze !== null ? ze.memoizedState : null) !== e && (he.flags |= 1024),
      t
    );
  }
  function Ur() {
    var e = Gi !== 0;
    return ((Gi = 0), e);
  }
  function Nr(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function _r(e) {
    if (Yi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Yi = !1;
    }
    ((It = 0), (Xe = ze = he = null), (Ha = !1), (Mn = Gi = 0), (wa = null));
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
  function ji() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function An(e) {
    var t = Mn;
    return (
      (Mn += 1),
      wa === null && (wa = []),
      (e = zo(wa, e, t)),
      (t = he),
      (Xe === null ? t.memoizedState : Xe.next) === null &&
        ((t = t.alternate), (j.H = t === null || t.memoizedState === null ? Sc : Kr)),
      e
    );
  }
  function Vi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return An(e);
      if (e.$$typeof === U) return Pe(e);
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
      l === null && ((l = ji()), (he.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = B;
    return (t.index++, l);
  }
  function el(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function qi(e) {
    var t = Ve();
    return wr(t, ze, e);
  }
  function wr(e, t, l) {
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
      var M = (p = null),
        _ = null,
        X = t,
        W = !1;
      do {
        var I = X.lane & -536870913;
        if (I !== X.lane ? (Se & I) === I : (It & I) === I) {
          var Z = X.revertLane;
          if (Z === 0)
            (_ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: X.action,
                  hasEagerState: X.hasEagerState,
                  eagerState: X.eagerState,
                  next: null,
                }),
              I === Oa && (W = !0));
          else if ((It & Z) === Z) {
            ((X = X.next), Z === Oa && (W = !0));
            continue;
          } else
            ((I = {
              lane: 0,
              revertLane: X.revertLane,
              gesture: null,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null,
            }),
              _ === null ? ((M = _ = I), (p = u)) : (_ = _.next = I),
              (he.lanes |= Z),
              (zl |= Z));
          ((I = X.action), la && l(u, I), (u = X.hasEagerState ? X.eagerState : l(u, I)));
        } else
          ((Z = {
            lane: I,
            revertLane: X.revertLane,
            gesture: X.gesture,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null,
          }),
            _ === null ? ((M = _ = Z), (p = u)) : (_ = _.next = Z),
            (he.lanes |= I),
            (zl |= I));
        X = X.next;
      } while (X !== null && X !== t);
      if (
        (_ === null ? (p = u) : (_.next = M),
        !yt(u, e.memoizedState) && ((Qe = !0), W && ((l = Ba), l !== null)))
      )
        throw l;
      ((e.memoizedState = u), (e.baseState = p), (e.baseQueue = _), (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Lr(e) {
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
      (yt(u, t.memoizedState) || (Qe = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Go(e, t, l) {
    var a = he,
      n = Ve(),
      u = Ee;
    if (u) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else l = t();
    var p = !yt((ze || n).memoizedState, l);
    if (
      (p && ((n.memoizedState = l), (Qe = !0)),
      (n = n.queue),
      jr(qo.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        La(9, { destroy: void 0 }, Vo.bind(null, a, n, l, t), null),
        Ue === null)
      )
        throw Error(E(349));
      u || (It & 127) !== 0 || jo(a, t, l);
    }
    return l;
  }
  function jo(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = he.updateQueue),
      t === null
        ? ((t = ji()), (he.updateQueue = t), (t.stores = [e]))
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
      return !yt(e, l);
    } catch {
      return !0;
    }
  }
  function Qo(e) {
    var t = Jl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Yr(e) {
    var t = it();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), la)) {
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
        lastRenderedReducer: el,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Zo(e, t, l, a) {
    return ((e.baseState = l), wr(e, ze, typeof a == 'function' ? a : el));
  }
  function ph(e, t, l, a, n) {
    if (Zi(e)) throw Error(E(485));
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
      (j.T !== null ? l(!0) : (u.isTransition = !1),
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
      var u = j.T,
        p = {};
      j.T = p;
      try {
        var M = l(n, a),
          _ = j.S;
        (_ !== null && _(p, M), Jo(e, t, M));
      } catch (X) {
        Gr(e, t, X);
      } finally {
        (u !== null && p.types !== null && (u.types = p.types), (j.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Jo(e, t, u));
      } catch (X) {
        Gr(e, t, X);
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
                for (var n = Ne, u = Ot; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Ut(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((Ne = Ut(n.nextSibling)), (a = n.data === 'F!'));
                break e;
              }
            }
            Sl(a);
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
      (a = Yr(!1)),
      (u = Zr.bind(null, he, !1, a.queue)),
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
      ((t = wr(e, t, Wo)[0]),
      (e = qi(el)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = An(t);
      } catch (p) {
        throw p === Ua ? Ui : p;
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
      t === null && ((t = ji()), (he.updateQueue = t)),
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
  function Xi(e, t, l, a) {
    var n = it();
    ((he.flags |= e),
      (n.memoizedState = La(1 | t, { destroy: void 0 }, l, a === void 0 ? null : a)));
  }
  function Qi(e, t, l, a) {
    var n = Ve();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ze !== null && a !== null && Or(a, ze.memoizedState.deps)
      ? (n.memoizedState = La(t, u, l, a))
      : ((he.flags |= e), (n.memoizedState = La(1 | t, u, l, a)));
  }
  function lc(e, t) {
    Xi(8390656, 8, e, t);
  }
  function jr(e, t) {
    Qi(2048, 8, e, t);
  }
  function xh(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null) ((t = ji()), (he.updateQueue = t), (t.events = [e]));
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
    return Qi(4, 2, e, t);
  }
  function ic(e, t) {
    return Qi(4, 4, e, t);
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
    ((l = l != null ? l.concat([e]) : null), Qi(4, 4, uc.bind(null, t, e), l));
  }
  function Vr() {}
  function fc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Or(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function sc(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Or(t, a[1])) return a[0];
    if (((a = e()), la)) {
      ml(!0);
      try {
        e();
      } finally {
        ml(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function qr(e, t, l) {
    return l === void 0 || ((It & 1073741824) !== 0 && (Se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = od()), (he.lanes |= e), (zl |= e), l);
  }
  function oc(e, t, l, a) {
    return yt(l, t)
      ? l
      : _a.current !== null
        ? ((e = qr(e, l, a)), yt(e, t) || (Qe = !0), e)
        : (It & 42) === 0 || ((It & 1073741824) !== 0 && (Se & 261930) === 0)
          ? ((Qe = !0), (e.memoizedState = l))
          : ((e = od()), (he.lanes |= e), (zl |= e), t);
  }
  function cc(e, t, l, a, n) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var p = j.T,
      M = {};
    ((j.T = M), Zr(e, !1, t, l));
    try {
      var _ = n(),
        X = j.S;
      if (
        (X !== null && X(M, _), _ !== null && typeof _ == 'object' && typeof _.then == 'function')
      ) {
        var W = hh(_, a);
        Cn(e, t, W, bt(e));
      } else Cn(e, t, a, bt(e));
    } catch (I) {
      Cn(e, t, { then: function () {}, status: 'rejected', reason: I }, bt());
    } finally {
      ((J.p = u), p !== null && M.types !== null && (p.types = M.types), (j.T = p));
    }
  }
  function Eh() {}
  function Xr(e, t, l, a) {
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
            return (vc(e), l(a));
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
        lastRenderedReducer: el,
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
          lastRenderedReducer: el,
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
  function vc(e) {
    var t = dc(e);
    (t.next === null && (t = e.alternate.memoizedState), Cn(e, t.next.queue, {}, bt()));
  }
  function Qr() {
    return Pe(Xn);
  }
  function mc() {
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
          var l = bt();
          e = Tl(l);
          var a = bl(t, e, l);
          (a !== null && (dt(a, t, l), En(a, t, l)), (t = { cache: Sr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function bh(e, t, l) {
    var a = bt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Zi(e) ? yc(t, l) : ((l = fr(e, t, l, a)), l !== null && (dt(l, e, a), pc(l, t, a))));
  }
  function gc(e, t, l) {
    var a = bt();
    Cn(e, t, l, a);
  }
  function Cn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Zi(e)) yc(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            M = u(p, l);
          if (((n.hasEagerState = !0), (n.eagerState = M), yt(M, p)))
            return (Ai(e, t, n, 0), Ue === null && Mi(), !1);
        } catch {
        } finally {
        }
      if (((l = fr(e, t, n, a)), l !== null)) return (dt(l, e, a), pc(l, t, a), !0);
    }
    return !1;
  }
  function Zr(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Mf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Zi(e))
    ) {
      if (t) throw Error(E(479));
    } else ((t = fr(e, l, a, 2)), t !== null && dt(t, e, 2));
  }
  function Zi(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function yc(e, t) {
    Ha = Yi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
  }
  function pc(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Ts(e, l));
    }
  }
  var Rn = {
    readContext: Pe,
    use: Vi,
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
  Rn.useEffectEvent = Ye;
  var Sc = {
      readContext: Pe,
      use: Vi,
      useCallback: function (e, t) {
        return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: lc,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Xi(4194308, 4, uc.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Xi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Xi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = it();
        t = t === void 0 ? null : t;
        var a = e();
        if (la) {
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
          if (la) {
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
        e = Yr(e);
        var t = e.queue,
          l = gc.bind(null, he, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Vr,
      useDeferredValue: function (e, t) {
        var l = it();
        return qr(l, e, t);
      },
      useTransition: function () {
        var e = Yr(!1);
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
          (Se & 127) !== 0 || jo(a, t, l);
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
            a = Gt;
          ((l = (a & ~(1 << (32 - gt(a) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = Gi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = gh++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Qr,
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
        return ((t.queue = l), (t = Zr.bind(null, he, !0, l)), (l.dispatch = t), [e, t]);
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
    Kr = {
      readContext: Pe,
      use: Vi,
      useCallback: fc,
      useContext: Pe,
      useEffect: jr,
      useImperativeHandle: rc,
      useInsertionEffect: nc,
      useLayoutEffect: ic,
      useMemo: sc,
      useReducer: qi,
      useRef: tc,
      useState: function () {
        return qi(el);
      },
      useDebugValue: Vr,
      useDeferredValue: function (e, t) {
        var l = Ve();
        return oc(l, ze.memoizedState, e, t);
      },
      useTransition: function () {
        var e = qi(el)[0],
          t = Ve().memoizedState;
        return [typeof e == 'boolean' ? e : An(e), t];
      },
      useSyncExternalStore: Go,
      useId: mc,
      useHostTransitionStatus: Qr,
      useFormState: Po,
      useActionState: Po,
      useOptimistic: function (e, t) {
        var l = Ve();
        return Zo(l, ze, e, t);
      },
      useMemoCache: Hr,
      useCacheRefresh: hc,
    };
  Kr.useEffectEvent = ac;
  var xc = {
    readContext: Pe,
    use: Vi,
    useCallback: fc,
    useContext: Pe,
    useEffect: jr,
    useImperativeHandle: rc,
    useInsertionEffect: nc,
    useLayoutEffect: ic,
    useMemo: sc,
    useReducer: Lr,
    useRef: tc,
    useState: function () {
      return Lr(el);
    },
    useDebugValue: Vr,
    useDeferredValue: function (e, t) {
      var l = Ve();
      return ze === null ? qr(l, e, t) : oc(l, ze.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Lr(el)[0],
        t = Ve().memoizedState;
      return [typeof e == 'boolean' ? e : An(e), t];
    },
    useSyncExternalStore: Go,
    useId: mc,
    useHostTransitionStatus: Qr,
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
  function Jr(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : g({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Fr = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = bt(),
        n = Tl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (dt(t, e, a), En(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = bt(),
        n = Tl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = bl(e, n, a)),
        t !== null && (dt(t, e, a), En(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = bt(),
        a = Tl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = bl(e, a, l)),
        t !== null && (dt(t, e, l), En(t, e, l)));
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
      t.state !== e && Fr.enqueueReplaceState(t, t.state, null));
  }
  function aa(e, t) {
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
    bi(e);
  }
  function Mc(e) {
    console.error(e);
  }
  function Ac(e) {
    bi(e);
  }
  function Ki(e, t) {
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
  function $r(e, t, l) {
    return (
      (l = Tl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ki(e, t);
      }),
      l
    );
  }
  function Rc(e) {
    return ((e = Tl(e)), (e.tag = 3), e);
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
          typeof n != 'function' && (Dl === null ? (Dl = new Set([this])) : Dl.add(this)));
        var M = a.stack;
        this.componentDidCatch(a.value, { componentStack: M !== null ? M : '' });
      });
  }
  function Mh(e, t, l, a, n) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = l.alternate), t !== null && Da(t, l, n, !0), (l = St.current), l !== null)) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Bt === null ? nu() : l.alternate === null && Ge === 0 && (Ge = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Ni
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Ef(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Ni
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Ef(e, a, n)),
              !1
            );
        }
        throw Error(E(435, l.tag));
      }
      return (Ef(e, a, n), nu(), !1);
    }
    if (Ee)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== mr && ((e = Error(E(422), { cause: a })), gn(Rt(e, l))))
          : (a !== mr && ((t = Error(E(423), { cause: a })), gn(Rt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Rt(a, l)),
            (n = $r(e.stateNode, a, n)),
            Ar(e, n),
            Ge !== 4 && (Ge = 2)),
        !1
      );
    var u = Error(E(520), { cause: a });
    if (((u = Rt(u, l)), Hn === null ? (Hn = [u]) : Hn.push(u), Ge !== 4 && (Ge = 2), t === null))
      return !0;
    ((a = Rt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = $r(l.stateNode, a, e)),
            Ar(l, e),
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
                  (Dl === null || !Dl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Rc(n)),
              zc(n, e, l, a),
              Ar(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Wr = Error(E(461)),
    Qe = !1;
  function Ie(e, t, l, a) {
    t.child = e === null ? Uo(t, null, l, a) : ta(t, e.child, l, a);
  }
  function Dc(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
      var p = {};
      for (var M in a) M !== 'ref' && (p[M] = a[M]);
    } else p = a;
    return (
      kl(t),
      (a = Br(e, t, l, p, u, n)),
      (M = Ur()),
      e !== null && !Qe
        ? (Nr(e, t, n), tl(e, t, n))
        : (Ee && M && dr(t), (t.flags |= 1), Ie(e, t, a, n), t.child)
    );
  }
  function Oc(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == 'function' && !sr(u) && u.defaultProps === void 0 && l.compare === null
        ? ((t.tag = 15), (t.type = u), Bc(e, t, u, a, n))
        : ((e = Ri(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !nf(e, n))) {
      var p = u.memoizedProps;
      if (((l = l.compare), (l = l !== null ? l : vn), l(p, a) && e.ref === t.ref))
        return tl(e, t, n);
    }
    return ((t.flags |= 1), (e = $t(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Bc(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (vn(u, a) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = a = u), nf(e, n))) (e.flags & 131072) !== 0 && (Qe = !0);
        else return ((t.lanes = e.lanes), tl(e, t, n));
    }
    return kr(e, t, l, a, n);
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
          e !== null && Bi(t, u !== null ? u.cachePool : null),
          u !== null ? Ho(t, u) : Rr(),
          wo(t));
      else return ((a = t.lanes = 536870912), Nc(e, t, u !== null ? u.baseLanes | l : l, l, a));
    } else
      u !== null
        ? (Bi(t, u.cachePool), Ho(t, u), Al(), (t.memoizedState = null))
        : (e !== null && Bi(t, null), Rr(), Al());
    return (Ie(e, t, n, l), t.child);
  }
  function zn(e, t) {
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
    var u = Er();
    return (
      (u = u === null ? null : { parent: qe._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && Bi(t, null),
      Rr(),
      wo(t),
      e !== null && Da(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Ji(e, t) {
    return (
      (t = $i({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function _c(e, t, l) {
    return (
      ta(t, e.child, null, l),
      (e = Ji(t, t.pendingProps)),
      (e.flags |= 2),
      xt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Ah(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ee) {
        if (a.mode === 'hidden') return ((e = Ji(t, a)), (t.lanes = 536870912), zn(null, e));
        if (
          (Dr(t),
          (e = Ne)
            ? ((e = Kd(e, Ot)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: yl !== null ? { id: Gt, overflow: jt } : null,
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
          throw Sl(t);
        return ((t.lanes = 536870912), null);
      }
      return Ji(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var p = u.dehydrated;
      if ((Dr(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = _c(e, t, l)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(E(558));
      else if ((Qe || Da(e, t, l, !1), (n = (l & e.childLanes) !== 0), Qe || n)) {
        if (((a = Ue), a !== null && ((p = bs(a, l)), p !== 0 && p !== u.retryLane)))
          throw ((u.retryLane = p), Jl(e, p), dt(a, e, p), Wr);
        (nu(), (t = _c(e, t, l)));
      } else
        ((e = u.treeContext),
          (Ne = Ut(p.nextSibling)),
          (ke = t),
          (Ee = !0),
          (pl = null),
          (Ot = !1),
          e !== null && xo(t, e),
          (t = Ji(t, a)),
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
  function Fi(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(E(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function kr(e, t, l, a, n) {
    return (
      kl(t),
      (l = Br(e, t, l, a, void 0, n)),
      (a = Ur()),
      e !== null && !Qe
        ? (Nr(e, t, n), tl(e, t, n))
        : (Ee && a && dr(t), (t.flags |= 1), Ie(e, t, l, n), t.child)
    );
  }
  function Hc(e, t, l, a, n, u) {
    return (
      kl(t),
      (t.updateQueue = null),
      (l = Yo(t, a, l, n)),
      Lo(e),
      (a = Ur()),
      e !== null && !Qe
        ? (Nr(e, t, u), tl(e, t, u))
        : (Ee && a && dr(t), (t.flags |= 1), Ie(e, t, l, u), t.child)
    );
  }
  function wc(e, t, l, a, n) {
    if ((kl(t), t.stateNode === null)) {
      var u = Aa,
        p = l.contextType;
      (typeof p == 'object' && p !== null && (u = Pe(p)),
        (u = new l(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Fr),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        br(t),
        (p = l.contextType),
        (u.context = typeof p == 'object' && p !== null ? Pe(p) : Aa),
        (u.state = t.memoizedState),
        (p = l.getDerivedStateFromProps),
        typeof p == 'function' && (Jr(t, l, p, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((p = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          p !== u.state && Fr.enqueueReplaceState(u, u.state, null),
          bn(t, a, u, n),
          Tn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var M = t.memoizedProps,
        _ = aa(l, M);
      u.props = _;
      var X = u.context,
        W = l.contextType;
      ((p = Aa), typeof W == 'object' && W !== null && (p = Pe(W)));
      var I = l.getDerivedStateFromProps;
      ((W = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (M = t.pendingProps !== M),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((M || X !== p) && Tc(t, u, a, p)),
        (El = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        bn(t, a, u, n),
        Tn(),
        (X = t.memoizedState),
        M || Z !== X || El
          ? (typeof I == 'function' && (Jr(t, l, I, a), (X = t.memoizedState)),
            (_ = El || Ec(t, l, _, a, Z, X, p))
              ? (W ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = X)),
            (u.props = a),
            (u.state = X),
            (u.context = p),
            (a = _))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        Mr(e, t),
        (p = t.memoizedProps),
        (W = aa(l, p)),
        (u.props = W),
        (I = t.pendingProps),
        (Z = u.context),
        (X = l.contextType),
        (_ = Aa),
        typeof X == 'object' && X !== null && (_ = Pe(X)),
        (M = l.getDerivedStateFromProps),
        (X = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((p !== I || Z !== _) && Tc(t, u, a, _)),
        (El = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        bn(t, a, u, n),
        Tn());
      var F = t.memoizedState;
      p !== I || Z !== F || El || (e !== null && e.dependencies !== null && Di(e.dependencies))
        ? (typeof M == 'function' && (Jr(t, l, M, a), (F = t.memoizedState)),
          (W =
            El ||
            Ec(t, l, W, a, Z, F, _) ||
            (e !== null && e.dependencies !== null && Di(e.dependencies)))
            ? (X ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, F, _),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, F, _)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = F)),
          (u.props = a),
          (u.state = F),
          (u.context = _),
          (a = W))
        : (typeof u.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Fi(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l = a && typeof l.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ta(t, e.child, null, n)), (t.child = ta(t, null, l, n)))
            : Ie(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = tl(e, t, n)),
      e
    );
  }
  function Lc(e, t, l, a) {
    return ($l(), (t.flags |= 256), Ie(e, t, l, a), t.child);
  }
  var Pr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ir(e) {
    return { baseLanes: e, cachePool: Co() };
  }
  function ef(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Tt), e);
  }
  function Yc(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      p;
    if (
      ((p = u) || (p = e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0),
      p && ((n = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ee) {
        if (
          (n ? Ml(t) : Al(),
          (e = Ne)
            ? ((e = Kd(e, Ot)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: yl !== null ? { id: Gt, overflow: jt } : null,
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
          throw Sl(t);
        return (Lf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var M = a.children;
      return (
        (a = a.fallback),
        n
          ? (Al(),
            (n = t.mode),
            (M = $i({ mode: 'hidden', children: M }, n)),
            (a = Fl(a, n, l, null)),
            (M.return = t),
            (a.return = t),
            (M.sibling = a),
            (t.child = M),
            (a = t.child),
            (a.memoizedState = Ir(l)),
            (a.childLanes = ef(e, p, l)),
            (t.memoizedState = Pr),
            zn(null, a))
          : (Ml(t), tf(t, M))
      );
    }
    var _ = e.memoizedState;
    if (_ !== null && ((M = _.dehydrated), M !== null)) {
      if (u)
        t.flags & 256
          ? (Ml(t), (t.flags &= -257), (t = lf(e, t, l)))
          : t.memoizedState !== null
            ? (Al(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Al(),
              (M = a.fallback),
              (n = t.mode),
              (a = $i({ mode: 'visible', children: a.children }, n)),
              (M = Fl(M, n, l, null)),
              (M.flags |= 2),
              (a.return = t),
              (M.return = t),
              (a.sibling = M),
              (t.child = a),
              ta(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Ir(l)),
              (a.childLanes = ef(e, p, l)),
              (t.memoizedState = Pr),
              (t = zn(null, a)));
      else if ((Ml(t), Lf(M))) {
        if (((p = M.nextSibling && M.nextSibling.dataset), p)) var X = p.dgst;
        ((p = X),
          (a = Error(E(419))),
          (a.stack = ''),
          (a.digest = p),
          gn({ value: a, source: null, stack: null }),
          (t = lf(e, t, l)));
      } else if ((Qe || Da(e, t, l, !1), (p = (l & e.childLanes) !== 0), Qe || p)) {
        if (((p = Ue), p !== null && ((a = bs(p, l)), a !== 0 && a !== _.retryLane)))
          throw ((_.retryLane = a), Jl(e, a), dt(p, e, a), Wr);
        (wf(M) || nu(), (t = lf(e, t, l)));
      } else
        wf(M)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = _.treeContext),
            (Ne = Ut(M.nextSibling)),
            (ke = t),
            (Ee = !0),
            (pl = null),
            (Ot = !1),
            e !== null && xo(t, e),
            (t = tf(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (Al(),
        (M = a.fallback),
        (n = t.mode),
        (_ = e.child),
        (X = _.sibling),
        (a = $t(_, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = _.subtreeFlags & 65011712),
        X !== null ? (M = $t(X, M)) : ((M = Fl(M, n, l, null)), (M.flags |= 2)),
        (M.return = t),
        (a.return = t),
        (a.sibling = M),
        (t.child = a),
        zn(null, a),
        (a = t.child),
        (M = e.child.memoizedState),
        M === null
          ? (M = Ir(l))
          : ((n = M.cachePool),
            n !== null
              ? ((_ = qe._currentValue), (n = n.parent !== _ ? { parent: _, pool: _ } : n))
              : (n = Co()),
            (M = { baseLanes: M.baseLanes | l, cachePool: n })),
        (a.memoizedState = M),
        (a.childLanes = ef(e, p, l)),
        (t.memoizedState = Pr),
        zn(e.child, a))
      : (Ml(t),
        (l = e.child),
        (e = l.sibling),
        (l = $t(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((p = t.deletions), p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function tf(e, t) {
    return ((t = $i({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function $i(e, t) {
    return ((e = pt(22, e, null, t)), (e.lanes = 0), e);
  }
  function lf(e, t, l) {
    return (
      ta(t, e.child, null, l),
      (e = tf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Gc(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), yr(e.return, t, l));
  }
  function af(e, t, l, a, n, u) {
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
  function jc(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var p = je.current,
      M = (p & 2) !== 0;
    if (
      (M ? ((p = (p & 1) | 2), (t.flags |= 128)) : (p &= 1),
      le(je, p),
      Ie(e, t, a, l),
      (a = Ee ? hn : 0),
      !M && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gc(e, l, t);
        else if (e.tag === 19) Gc(e, l, t);
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
          ((e = l.alternate), e !== null && Li(e) === null && (n = l), (l = l.sibling));
        ((l = n),
          l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)),
          af(t, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Li(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        af(t, !0, l, null, u, a);
        break;
      case 'together':
        af(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function tl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (zl |= t.lanes), (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Da(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
      for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        ((e = e.sibling), (l = l.sibling = $t(e, e.pendingProps)), (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function nf(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Di(e)));
  }
  function Ch(e, t, l) {
    switch (t.tag) {
      case 3:
        (Te(t, t.stateNode.containerInfo), xl(t, qe, e.memoizedState.cache), $l());
        break;
      case 27:
      case 5:
        tt(t);
        break;
      case 4:
        Te(t, t.stateNode.containerInfo);
        break;
      case 10:
        xl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Dr(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Ml(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Yc(e, t, l)
              : (Ml(t), (e = tl(e, t, l)), e !== null ? e.sibling : null);
        Ml(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (Da(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return jc(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          le(je, je.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Uc(e, t, l, t.pendingProps));
      case 24:
        xl(t, qe, e.memoizedState.cache);
    }
    return tl(e, t, l);
  }
  function Vc(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qe = !0;
      else {
        if (!nf(e, l) && (t.flags & 128) === 0) return ((Qe = !1), Ch(e, t, l));
        Qe = (e.flags & 131072) !== 0;
      }
    else ((Qe = !1), Ee && (t.flags & 1048576) !== 0 && So(t, hn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Il(t.elementType)), (t.type = e), typeof e == 'function'))
            sr(e)
              ? ((a = aa(e, a)), (t.tag = 1), (t = wc(null, t, e, a, l)))
              : ((t.tag = 0), (t = kr(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Y) {
                ((t.tag = 11), (t = Dc(null, t, e, a, l)));
                break e;
              } else if (n === D) {
                ((t.tag = 14), (t = Oc(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = ee(e) || e), Error(E(306, t, '')));
          }
        }
        return t;
      case 0:
        return kr(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = aa(a, t.pendingProps)), wc(e, t, a, n, l));
      case 3:
        e: {
          if ((Te(t, t.stateNode.containerInfo), e === null)) throw Error(E(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Mr(e, t), bn(t, a, null, l));
          var p = t.memoizedState;
          if (
            ((a = p.cache),
            xl(t, qe, a),
            a !== u.cache && pr(t, [qe], l, !0),
            Tn(),
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
              ((n = Rt(Error(E(424)), t)), gn(n), (t = Lc(e, t, a, l)));
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
                Ne = Ut(e.firstChild),
                  ke = t,
                  Ee = !0,
                  pl = null,
                  Ot = !0,
                  l = Uo(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if (($l(), a === n)) {
              t = tl(e, t, l);
              break e;
            }
            Ie(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Fi(e, t),
          e === null
            ? (l = Pd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ee ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = cu(ne.current).createElement(l)),
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
            ((a = t.stateNode = $d(t.type, t.pendingProps, ne.current)),
            (ke = t),
            (Ot = !0),
            (n = Ne),
            Nl(t.type) ? ((Yf = n), (Ne = Ut(a.firstChild))) : (Ne = n)),
          Ie(e, t, t.pendingProps.children, l),
          Fi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ee &&
            ((n = a = Ne) &&
              ((a = l0(a, t.type, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a), (ke = t), (Ne = Ut(a.firstChild)), (Ot = !1), (n = !0))
                : (n = !1)),
            n || Sl(t)),
          tt(t),
          (n = t.type),
          (u = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Nf(n, u) ? (a = null) : p !== null && Nf(n, p) && (t.flags |= 32),
          t.memoizedState !== null && ((n = Br(e, t, yh, null, null, l)), (Xn._currentValue = n)),
          Fi(e, t),
          Ie(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ee &&
            ((e = l = Ne) &&
              ((l = a0(l, t.pendingProps, Ot)),
              l !== null ? ((t.stateNode = l), (ke = t), (Ne = null), (e = !0)) : (e = !1)),
            e || Sl(t)),
          null
        );
      case 13:
        return Yc(e, t, l);
      case 4:
        return (
          Te(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ta(t, null, a, l)) : Ie(e, t, a, l),
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
        return ((a = t.pendingProps), xl(t, t.type, a.value), Ie(e, t, a.children, l), t.child);
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          kl(t),
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
        return jc(e, t, l);
      case 31:
        return Ah(e, t, l);
      case 22:
        return Uc(e, t, l, t.pendingProps);
      case 24:
        return (
          kl(t),
          (a = Pe(qe)),
          e === null
            ? ((n = Er()),
              n === null &&
                ((n = Ue),
                (u = Sr()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              br(t),
              xl(t, qe, n))
            : ((e.lanes & l) !== 0 && (Mr(e, t), bn(t, null, null, l), Tn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                  xl(t, qe, a))
                : ((a = u.cache), xl(t, qe, a), a !== n.cache && pr(t, [qe], l, !0))),
          Ie(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(E(156, t.tag));
  }
  function ll(e) {
    e.flags |= 4;
  }
  function uf(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (md()) e.flags |= 8192;
        else throw ((ea = Ni), Tr);
    } else e.flags &= -16777217;
  }
  function qc(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !av(t)))
      if (md()) e.flags |= 8192;
      else throw ((ea = Ni), Tr);
  }
  function Wi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? xs() : 536870912), (e.lanes |= t), (Va |= t)));
  }
  function Dn(e, t) {
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
          Pt(qe),
          Be(),
          l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (za(t)
              ? ll(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), hr())),
          _e(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (ll(t), u !== null ? (_e(t), qc(t, u)) : (_e(t), uf(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (ll(t), _e(t), qc(t, u))
                : (_e(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && ll(t), _e(t), uf(t, n, e, a, l)),
          null
        );
      case 27:
        if ((nt(t), (l = ne.current), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && ll(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(E(166));
            return (_e(t), null);
          }
          ((e = ae.current), za(t) ? Eo(t) : ((e = $d(n, a, l)), (t.stateNode = e), ll(t)));
        }
        return (_e(t), null);
      case 5:
        if ((nt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && ll(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(E(166));
            return (_e(t), null);
          }
          if (((u = ae.current), za(t))) Eo(t);
          else {
            var p = cu(ne.current);
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
            a && ll(t);
          }
        }
        return (_e(t), uf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && ll(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(E(166));
          if (((e = ne.current), za(t))) {
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
              e || Sl(t, !0));
          } else ((e = cu(e).createTextNode(a)), (e[We] = t), (t.stateNode = e));
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
            } else ($l(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (e = !1));
          } else
            ((l = hr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (xt(t), t) : (xt(t), null);
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
            } else ($l(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (_e(t), (n = !1));
          } else
            ((n = hr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (xt(t), t) : (xt(t), null);
        }
        return (
          xt(t),
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
              Wi(t, t.updateQueue),
              _e(t),
              null)
        );
      case 4:
        return (Be(), e === null && zf(t.stateNode.containerInfo), _e(t), null);
      case 10:
        return (Pt(t.type), _e(t), null);
      case 19:
        if (($(je), (a = t.memoizedState), a === null)) return (_e(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Dn(a, !1);
          else {
            if (Ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Li(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Dn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Wi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (go(l, e), (l = l.sibling));
                  return (le(je, (je.current & 1) | 2), Ee && Wt(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              lt() > tu &&
              ((t.flags |= 128), (n = !0), Dn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Li(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Wi(t, e),
                Dn(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ee)
              )
                return (_e(t), null);
            } else
              2 * lt() - a.renderingStartTime > tu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Dn(a, !1), (t.lanes = 4194304));
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
            (l = je.current),
            le(je, n ? (l & 1) | 2 : l & 1),
            Ee && Wt(t, a.treeForkCount),
            e)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          xt(t),
          zr(),
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
          l !== null && Wi(t, l.retryQueue),
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
          e !== null && $(Pl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Pt(qe),
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
          Pt(qe),
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
          if ((xt(t), t.alternate === null)) throw Error(E(340));
          $l();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((xt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(E(340));
          $l();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return ($(je), null);
      case 4:
        return (Be(), null);
      case 10:
        return (Pt(t.type), null);
      case 22:
      case 23:
        return (
          xt(t),
          zr(),
          e !== null && $(Pl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Pt(qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xc(e, t) {
    switch ((vr(t), t.tag)) {
      case 3:
        (Pt(qe), Be());
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
        t.memoizedState !== null && xt(t);
        break;
      case 13:
        xt(t);
        break;
      case 19:
        $(je);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        (xt(t), zr(), e !== null && $(Pl));
        break;
      case 24:
        Pt(qe);
    }
  }
  function On(e, t) {
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
    } catch (M) {
      Re(t, t.return, M);
    }
  }
  function Cl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var p = a.inst,
              M = p.destroy;
            if (M !== void 0) {
              ((p.destroy = void 0), (n = t));
              var _ = l,
                X = M;
              try {
                X();
              } catch (W) {
                Re(n, _, W);
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
    ((l.props = aa(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Re(e, t, a);
    }
  }
  function Bn(e, t) {
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
  function Vt(e, t) {
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
  function rf(e, t, l) {
    try {
      var a = e.stateNode;
      (Wh(a, e.type, l, t), (a[ut] = t));
    } catch (n) {
      Re(e, e.return, n);
    }
  }
  function Jc(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Nl(e.type)) || e.tag === 4
    );
  }
  function ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && Nl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, t, l) {
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
            l != null || t.onclick !== null || (t.onclick = Jt)));
    else if (
      a !== 4 &&
      (a === 27 && Nl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (sf(e, t, l), e = e.sibling; e !== null; ) (sf(e, t, l), (e = e.sibling));
  }
  function ki(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (a !== 4 && (a === 27 && Nl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
      for (ki(e, t, l), e = e.sibling; e !== null; ) (ki(e, t, l), (e = e.sibling));
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
  var al = !1,
    Ze = !1,
    of = !1,
    $c = typeof WeakSet == 'function' ? WeakSet : Set,
    $e = null;
  function Dh(e, t) {
    if (((e = e.containerInfo), (Bf = pu), (e = uo(e)), lr(e))) {
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
              M = -1,
              _ = -1,
              X = 0,
              W = 0,
              I = e,
              Z = null;
            t: for (;;) {
              for (
                var F;
                I !== l || (n !== 0 && I.nodeType !== 3) || (M = p + n),
                  I !== u || (a !== 0 && I.nodeType !== 3) || (_ = p + a),
                  I.nodeType === 3 && (p += I.nodeValue.length),
                  (F = I.firstChild) !== null;
              )
                ((Z = I), (I = F));
              for (;;) {
                if (I === e) break t;
                if (
                  (Z === l && ++X === n && (M = p),
                  Z === u && ++W === a && (_ = p),
                  (F = I.nextSibling) !== null)
                )
                  break;
                ((I = Z), (Z = I.parentNode));
              }
              I = F;
            }
            l = M === -1 || _ === -1 ? null : { start: M, end: _ };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Uf = { focusedElem: e, selectionRange: l }, pu = !1, $e = t; $e !== null; )
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
                  var re = aa(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(re, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ce) {
                  Re(l, l.return, ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) Hf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Hf(e);
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
        (il(e, l), a & 4 && On(5, l));
        break;
      case 1:
        if ((il(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Re(l, l.return, p);
            }
          else {
            var n = aa(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Re(l, l.return, p);
            }
          }
        (a & 64 && Qc(l), a & 512 && Bn(l, l.return));
        break;
      case 3:
        if ((il(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
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
        (il(e, l), t === null && a & 4 && Kc(l), a & 512 && Bn(l, l.return));
        break;
      case 12:
        il(e, l);
        break;
      case 31:
        (il(e, l), a & 4 && Ic(e, l));
        break;
      case 13:
        (il(e, l),
          a & 4 && ed(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((l = Yh.bind(null, l)), n0(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || al), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ze), (n = al));
          var u = Ze;
          ((al = a),
            (Ze = t) && !u ? ul(e, l, (l.subtreeFlags & 8772) !== 0) : il(e, l),
            (al = n),
            (Ze = u));
        }
        break;
      case 30:
        break;
      default:
        il(e, l);
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
  var He = null,
    ft = !1;
  function nl(e, t, l) {
    for (l = l.child; l !== null; ) (Pc(e, t, l), (l = l.sibling));
  }
  function Pc(e, t, l) {
    if (ht && typeof ht.onCommitFiberUnmount == 'function')
      try {
        ht.onCommitFiberUnmount(en, l);
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
        var a = He,
          n = ft;
        (Nl(l.type) && ((He = l.stateNode), (ft = !1)),
          nl(e, t, l),
          jn(l.stateNode),
          (He = a),
          (ft = n));
        break;
      case 5:
        Ze || Vt(l, t);
      case 6:
        if (((a = He), (n = ft), (He = null), nl(e, t, l), (He = a), (ft = n), He !== null))
          if (ft)
            try {
              (He.nodeType === 9
                ? He.body
                : He.nodeName === 'HTML'
                  ? He.ownerDocument.body
                  : He
              ).removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
          else
            try {
              He.removeChild(l.stateNode);
            } catch (u) {
              Re(l, t, u);
            }
        break;
      case 18:
        He !== null &&
          (ft
            ? ((e = He),
              Qd(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                l.stateNode
              ),
              $a(e))
            : Qd(He, l.stateNode));
        break;
      case 4:
        ((a = He),
          (n = ft),
          (He = l.stateNode.containerInfo),
          (ft = !0),
          nl(e, t, l),
          (He = a),
          (ft = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Cl(2, l, t), Ze || Cl(4, l, t), nl(e, t, l));
        break;
      case 1:
        (Ze ||
          (Vt(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && Zc(l, t, a)),
          nl(e, t, l));
        break;
      case 21:
        nl(e, t, l);
        break;
      case 22:
        ((Ze = (a = Ze) || l.memoizedState !== null), nl(e, t, l), (Ze = a));
        break;
      default:
        nl(e, t, l);
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
  function Pi(e, t) {
    var l = Oh(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Gh.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          p = t,
          M = p;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (Nl(M.type)) {
                ((He = M.stateNode), (ft = !1));
                break e;
              }
              break;
            case 5:
              ((He = M.stateNode), (ft = !1));
              break e;
            case 3:
            case 4:
              ((He = M.stateNode.containerInfo), (ft = !0));
              break e;
          }
          M = M.return;
        }
        if (He === null) throw Error(E(160));
        (Pc(u, p, n),
          (He = null),
          (ft = !1),
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
        (st(t, e), ot(e), a & 4 && (Cl(3, e, e.return), On(3, e), Cl(5, e, e.return)));
        break;
      case 1:
        (st(t, e),
          ot(e),
          a & 512 && (Ze || l === null || Vt(l, l.return)),
          a & 64 &&
            al &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = wt;
        if ((st(t, e), ot(e), a & 512 && (Ze || l === null || Vt(l, l.return)), a & 4)) {
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
                          u[an] ||
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
                      var p = tv('link', 'href', n).get(a + (l.href || ''));
                      if (p) {
                        for (var M = 0; M < p.length; M++)
                          if (
                            ((u = p[M]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              u.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') === (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            p.splice(M, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)), et(u, a, l), n.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((p = tv('meta', 'content', n).get(a + (l.content || '')))) {
                        for (M = 0; M < p.length; M++)
                          if (
                            ((u = p[M]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') === (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            p.splice(M, 1);
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
              } else lv(n, e.type, e.stateNode);
            else e.stateNode = ev(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null ? lv(n, e.type, e.stateNode) : ev(n, a, e.memoizedProps))
              : a === null && e.stateNode !== null && rf(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (st(t, e),
          ot(e),
          a & 512 && (Ze || l === null || Vt(l, l.return)),
          l !== null && a & 4 && rf(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((st(t, e), ot(e), a & 512 && (Ze || l === null || Vt(l, l.return)), e.flags & 32)) {
          n = e.stateNode;
          try {
            pa(n, '');
          } catch (re) {
            Re(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), rf(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (of = !0));
        break;
      case 6:
        if ((st(t, e), ot(e), a & 4)) {
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
          ((mu = null),
          (n = wt),
          (wt = du(t.containerInfo)),
          st(t, e),
          (wt = n),
          ot(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            $a(t.containerInfo);
          } catch (re) {
            Re(e, e.return, re);
          }
        of && ((of = !1), ld(e));
        break;
      case 4:
        ((a = wt), (wt = du(e.stateNode.containerInfo)), st(t, e), ot(e), (wt = a));
        break;
      case 12:
        (st(t, e), ot(e));
        break;
      case 31:
        (st(t, e),
          ot(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Pi(e, a))));
        break;
      case 13:
        (st(t, e),
          ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (eu = lt()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Pi(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var _ = l !== null && l.memoizedState !== null,
          X = al,
          W = Ze;
        if (((al = X || n), (Ze = W || _), st(t, e), (Ze = W), (al = X), ot(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || _ || al || Ze || na(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                _ = l = t;
                try {
                  if (((u = _.stateNode), n))
                    ((p = u.style),
                      typeof p.setProperty == 'function'
                        ? p.setProperty('display', 'none', 'important')
                        : (p.display = 'none'));
                  else {
                    M = _.stateNode;
                    var I = _.memoizedProps.style,
                      Z = I != null && I.hasOwnProperty('display') ? I.display : null;
                    M.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (re) {
                  Re(_, _.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                _ = t;
                try {
                  _.stateNode.nodeValue = n ? '' : _.memoizedProps;
                } catch (re) {
                  Re(_, _.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                _ = t;
                try {
                  var F = _.stateNode;
                  n ? Zd(F, !0) : Zd(_.stateNode, !1);
                } catch (re) {
                  Re(_, _.return, re);
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
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Pi(e, l))));
        break;
      case 19:
        (st(t, e),
          ot(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Pi(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (st(t, e), ot(e));
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
              u = ff(e);
            ki(e, u, n);
            break;
          case 5:
            var p = l.stateNode;
            l.flags & 32 && (pa(p, ''), (l.flags &= -33));
            var M = ff(e);
            ki(e, M, p);
            break;
          case 3:
          case 4:
            var _ = l.stateNode.containerInfo,
              X = ff(e);
            sf(e, X, _);
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
  function il(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Wc(e, t.alternate, t), (t = t.sibling));
  }
  function na(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Cl(4, t, t.return), na(t));
          break;
        case 1:
          Vt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && Zc(t, t.return, l), na(t));
          break;
        case 27:
          jn(t.stateNode);
        case 26:
        case 5:
          (Vt(t, t.return), na(t));
          break;
        case 22:
          t.memoizedState === null && na(t);
          break;
        case 30:
          na(t);
          break;
        default:
          na(t);
      }
      e = e.sibling;
    }
  }
  function ul(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (ul(n, u, l), On(4, u));
          break;
        case 1:
          if ((ul(n, u, l), (a = u), (n = a.stateNode), typeof n.componentDidMount == 'function'))
            try {
              n.componentDidMount();
            } catch (X) {
              Re(a, a.return, X);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var M = a.stateNode;
            try {
              var _ = n.shared.hiddenCallbacks;
              if (_ !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < _.length; n++) No(_[n], M);
            } catch (X) {
              Re(a, a.return, X);
            }
          }
          (l && p & 64 && Qc(u), Bn(u, u.return));
          break;
        case 27:
          Fc(u);
        case 26:
        case 5:
          (ul(n, u, l), l && a === null && p & 4 && Kc(u), Bn(u, u.return));
          break;
        case 12:
          ul(n, u, l);
          break;
        case 31:
          (ul(n, u, l), l && p & 4 && Ic(n, u));
          break;
        case 13:
          (ul(n, u, l), l && p & 4 && ed(n, u));
          break;
        case 22:
          (u.memoizedState === null && ul(n, u, l), Bn(u, u.return));
          break;
        case 30:
          break;
        default:
          ul(n, u, l);
      }
      t = t.sibling;
    }
  }
  function cf(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && yn(l)));
  }
  function df(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && yn(e)));
  }
  function Lt(e, t, l, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (ad(e, t, l, a), (t = t.sibling));
  }
  function ad(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(e, t, l, a), n & 2048 && On(9, t));
        break;
      case 1:
        Lt(e, t, l, a);
        break;
      case 3:
        (Lt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && yn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Lt(e, t, l, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              p = u.id,
              M = u.onPostCommit;
            typeof M == 'function' &&
              M(p, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (_) {
            Re(t, t.return, _);
          }
        } else Lt(e, t, l, a);
        break;
      case 31:
        Lt(e, t, l, a);
        break;
      case 13:
        Lt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Lt(e, t, l, a)
              : Un(e, t)
            : u._visibility & 2
              ? Lt(e, t, l, a)
              : ((u._visibility |= 2), Ya(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && cf(p, t));
        break;
      case 24:
        (Lt(e, t, l, a), n & 2048 && df(t.alternate, t));
        break;
      default:
        Lt(e, t, l, a);
    }
  }
  function Ya(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        p = t,
        M = l,
        _ = a,
        X = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Ya(u, p, M, _, n), On(8, p));
          break;
        case 23:
          break;
        case 22:
          var W = p.stateNode;
          (p.memoizedState !== null
            ? W._visibility & 2
              ? Ya(u, p, M, _, n)
              : Un(u, p)
            : ((W._visibility |= 2), Ya(u, p, M, _, n)),
            n && X & 2048 && cf(p.alternate, p));
          break;
        case 24:
          (Ya(u, p, M, _, n), n && X & 2048 && df(p.alternate, p));
          break;
        default:
          Ya(u, p, M, _, n);
      }
      t = t.sibling;
    }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Un(l, a), n & 2048 && cf(a.alternate, a));
            break;
          case 24:
            (Un(l, a), n & 2048 && df(a.alternate, a));
            break;
          default:
            Un(l, a);
        }
        t = t.sibling;
      }
  }
  var Nn = 8192;
  function Ga(e, t, l) {
    if (e.subtreeFlags & Nn) for (e = e.child; e !== null; ) (nd(e, t, l), (e = e.sibling));
  }
  function nd(e, t, l) {
    switch (e.tag) {
      case 26:
        (Ga(e, t, l),
          e.flags & Nn && e.memoizedState !== null && g0(l, wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ga(e, t, l);
        break;
      case 3:
      case 4:
        var a = wt;
        ((wt = du(e.stateNode.containerInfo)), Ga(e, t, l), (wt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Nn), (Nn = 16777216), Ga(e, t, l), (Nn = a))
            : Ga(e, t, l));
        break;
      default:
        Ga(e, t, l);
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
  function _n(e) {
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
        (_n(e), e.flags & 2048 && Cl(9, e, e.return));
        break;
      case 3:
        _n(e);
        break;
      case 12:
        _n(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ii(e))
          : _n(e);
        break;
      default:
        _n(e);
    }
  }
  function Ii(e) {
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
          (Cl(8, t, t.return), Ii(t));
          break;
        case 22:
          ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Ii(t)));
          break;
        default:
          Ii(t);
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
          Cl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          yn(l.memoizedState.cache);
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
    Et = null,
    Rl = !1,
    ja = !1,
    vf = !1,
    rl = 0,
    Ge = 0,
    zl = 0,
    ia = 0,
    mf = 0,
    Tt = 0,
    Va = 0,
    Hn = null,
    ct = null,
    hf = !1,
    eu = 0,
    fd = 0,
    tu = 1 / 0,
    lu = null,
    Dl = null,
    Ke = 0,
    Ol = null,
    qa = null,
    fl = 0,
    gf = 0,
    yf = null,
    sd = null,
    wn = 0,
    pf = null;
  function bt() {
    return (Ae & 2) !== 0 && Se !== 0 ? Se & -Se : j.T !== null ? Mf() : Ms();
  }
  function od() {
    if (Tt === 0)
      if ((Se & 536870912) === 0 || Ee) {
        var e = oi;
        ((oi <<= 1), (oi & 3932160) === 0 && (oi = 262144), (Tt = e));
      } else Tt = 536870912;
    return ((e = St.current), e !== null && (e.flags |= 32), Tt);
  }
  function dt(e, t, l) {
    (((e === Ue && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null) &&
      (Xa(e, 0), Bl(e, Se, Tt, !1)),
      ln(e, l),
      ((Ae & 2) === 0 || e !== Ue) &&
        (e === Ue && ((Ae & 2) === 0 && (ia |= l), Ge === 4 && Bl(e, Se, Tt, !1)), qt(e)));
  }
  function cd(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(E(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || tn(e, t),
      n = a ? Hh(e, t) : xf(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        ja && !a && Bl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Nh(l))) {
          ((n = xf(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var p = 0;
          else
            ((p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            t = p;
            e: {
              var M = e;
              n = Hn;
              var _ = M.current.memoizedState.isDehydrated;
              if ((_ && (Xa(M, p).flags |= 256), (p = xf(M, p, !1)), p !== 2)) {
                if (vf && !_) {
                  ((M.errorRecoveryDisabledLanes |= u), (ia |= u), (n = 4));
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
          (Xa(e, 0), Bl(e, t, 0, !0));
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
              Bl(a, t, Tt, !Rl);
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
          if ((t & 62914560) === t && ((n = eu + 300 - lt()), 10 < n)) {
            if ((Bl(a, t, Tt, !Rl), di(a, 0, !0) !== 0)) break e;
            ((fl = t),
              (a.timeoutHandle = qd(
                dd.bind(null, a, l, ct, lu, hf, t, Tt, ia, Va, Rl, u, 'Throttled', -0, 0),
                n
              )));
            break e;
          }
          dd(a, l, ct, lu, hf, t, Tt, ia, Va, Rl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    qt(e);
  }
  function dd(e, t, l, a, n, u, p, M, _, X, W, I, Z, F) {
    if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Jt,
      }),
        nd(t, u, I));
      var re = (u & 62914560) === u ? eu - lt() : (u & 4194048) === u ? fd - lt() : 0;
      if (((re = y0(I, re)), re !== null)) {
        ((fl = u),
          (e.cancelPendingCommit = re(xd.bind(null, e, t, u, l, a, n, p, M, _, W, I, null, Z, F))),
          Bl(e, u, p, !X));
        return;
      }
    }
    xd(e, t, u, l, a, n, p, M, _);
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
            if (!yt(u(), n)) return !1;
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
  function Bl(e, t, l, a) {
    ((t &= ~mf),
      (t &= ~ia),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - gt(n),
        p = 1 << u;
      ((a[u] = -1), (n &= ~p));
    }
    l !== 0 && Es(e, l, t);
  }
  function au() {
    return (Ae & 6) === 0 ? (Ln(0), !1) : !0;
  }
  function Sf() {
    if (ye !== null) {
      if (Ce === 0) var e = ye.return;
      else ((e = ye), (kt = Wl = null), _r(e), (Na = null), (Sn = 0), (e = ye));
      for (; e !== null; ) (Xc(e.alternate, e), (e = e.return));
      ye = null;
    }
  }
  function Xa(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Ih(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (fl = 0),
      Sf(),
      (Ue = e),
      (ye = l = $t(e.current, null)),
      (Se = t),
      (Ce = 0),
      (Et = null),
      (Rl = !1),
      (ja = tn(e, t)),
      (vf = !1),
      (Va = Tt = mf = ia = zl = Ge = 0),
      (ct = Hn = null),
      (hf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - gt(a),
          u = 1 << n;
        ((t |= e[n]), (a &= ~u));
      }
    return ((rl = t), Mi(), l);
  }
  function vd(e, t) {
    ((he = null),
      (j.H = Rn),
      t === Ua || t === Ui
        ? ((t = Do()), (Ce = 3))
        : t === Tr
          ? ((t = Do()), (Ce = 4))
          : (Ce =
              t === Wr
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Et = t),
      ye === null && ((Ge = 1), Ki(e, Rt(t, e.current))));
  }
  function md() {
    var e = St.current;
    return e === null
      ? !0
      : (Se & 4194048) === Se
        ? Bt === null
        : (Se & 62914560) === Se || (Se & 536870912) !== 0
          ? e === Bt
          : !1;
  }
  function hd() {
    var e = j.H;
    return ((j.H = Rn), e === null ? Rn : e);
  }
  function gd() {
    var e = j.A;
    return ((j.A = Bh), e);
  }
  function nu() {
    ((Ge = 4),
      Rl || ((Se & 4194048) !== Se && St.current !== null) || (ja = !0),
      ((zl & 134217727) === 0 && (ia & 134217727) === 0) || Ue === null || Bl(Ue, Se, Tt, !1));
  }
  function xf(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var n = hd(),
      u = gd();
    ((Ue !== e || Se !== t) && ((lu = null), Xa(e, t)), (t = !1));
    var p = Ge;
    e: do
      try {
        if (Ce !== 0 && ye !== null) {
          var M = ye,
            _ = Et;
          switch (Ce) {
            case 8:
              (Sf(), (p = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var X = Ce;
              if (((Ce = 0), (Et = null), Qa(e, M, _, X), l && ja)) {
                p = 0;
                break e;
              }
              break;
            default:
              ((X = Ce), (Ce = 0), (Et = null), Qa(e, M, _, X));
          }
        }
        (_h(), (p = Ge));
        break;
      } catch (W) {
        vd(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (kt = Wl = null),
      (Ae = a),
      (j.H = n),
      (j.A = u),
      ye === null && ((Ue = null), (Se = 0), Mi()),
      p
    );
  }
  function _h() {
    for (; ye !== null; ) yd(ye);
  }
  function Hh(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = hd(),
      n = gd();
    Ue !== e || Se !== t ? ((lu = null), (tu = lt() + 500), Xa(e, t)) : (ja = tn(e, t));
    e: do
      try {
        if (Ce !== 0 && ye !== null) {
          t = ye;
          var u = Et;
          t: switch (Ce) {
            case 1:
              ((Ce = 0), (Et = null), Qa(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Ro(u)) {
                ((Ce = 0), (Et = null), pd(t));
                break;
              }
              ((t = function () {
                ((Ce !== 2 && Ce !== 9) || Ue !== e || (Ce = 7), qt(e));
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
              Ro(u) ? ((Ce = 0), (Et = null), pd(t)) : ((Ce = 0), (Et = null), Qa(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (ye.tag) {
                case 26:
                  p = ye.memoizedState;
                case 5:
                case 27:
                  var M = ye;
                  if (p ? av(p) : M.stateNode.complete) {
                    ((Ce = 0), (Et = null));
                    var _ = M.sibling;
                    if (_ !== null) ye = _;
                    else {
                      var X = M.return;
                      X !== null ? ((ye = X), iu(X)) : (ye = null);
                    }
                    break t;
                  }
              }
              ((Ce = 0), (Et = null), Qa(e, t, u, 5));
              break;
            case 6:
              ((Ce = 0), (Et = null), Qa(e, t, u, 6));
              break;
            case 8:
              (Sf(), (Ge = 6));
              break e;
            default:
              throw Error(E(462));
          }
        }
        wh();
        break;
      } catch (W) {
        vd(e, W);
      }
    while (!0);
    return (
      (kt = Wl = null),
      (j.H = a),
      (j.A = n),
      (Ae = l),
      ye !== null ? 0 : ((Ue = null), (Se = 0), Mi(), Ge)
    );
  }
  function wh() {
    for (; ye !== null && !ii(); ) yd(ye);
  }
  function yd(e) {
    var t = Vc(e.alternate, e, rl);
    ((e.memoizedProps = e.pendingProps), t === null ? iu(e) : (ye = t));
  }
  function pd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hc(l, t, t.pendingProps, t.type, void 0, Se);
        break;
      case 11:
        t = Hc(l, t, t.pendingProps, t.type.render, t.ref, Se);
        break;
      case 5:
        _r(t);
      default:
        (Xc(l, t), (t = ye = go(t, rl)), (t = Vc(l, t, rl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? iu(e) : (ye = t));
  }
  function Qa(e, t, l, a) {
    ((kt = Wl = null), _r(t), (Na = null), (Sn = 0));
    var n = t.return;
    try {
      if (Mh(e, n, t, l, Se)) {
        ((Ge = 1), Ki(e, Rt(l, e.current)), (ye = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ye = n), u);
      ((Ge = 1), Ki(e, Rt(l, e.current)), (ye = null));
      return;
    }
    t.flags & 32768
      ? (Ee || a === 1
          ? (e = !0)
          : ja || (Se & 536870912) !== 0
            ? (e = !1)
            : ((Rl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = St.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sd(t, e))
      : iu(t);
  }
  function iu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sd(t, Rl);
        return;
      }
      e = t.return;
      var l = Rh(t.alternate, t, rl);
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
    Ge === 0 && (Ge = 5);
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
    ((Ge = 6), (ye = null));
  }
  function xd(e, t, l, a, n, u, p, M, _) {
    e.cancelPendingCommit = null;
    do uu();
    while (Ke !== 0);
    if ((Ae & 6) !== 0) throw Error(E(327));
    if (t !== null) {
      if (t === e.current) throw Error(E(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= rr),
        hm(e, l, u, p, M, _),
        e === Ue && ((ye = Ue = null), (Se = 0)),
        (qa = t),
        (Ol = e),
        (fl = l),
        (gf = u),
        (yf = n),
        (sd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            jh(oa, function () {
              return (Ad(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = j.T), (j.T = null), (n = J.p), (J.p = 2), (p = Ae), (Ae |= 4));
        try {
          Dh(e, t, l);
        } finally {
          ((Ae = p), (J.p = n), (j.T = a));
        }
      }
      ((Ke = 1), Ed(), Td(), bd());
    }
  }
  function Ed() {
    if (Ke === 1) {
      Ke = 0;
      var e = Ol,
        t = qa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = j.T), (j.T = null));
        var a = J.p;
        J.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          td(t, e);
          var u = Uf,
            p = uo(e.containerInfo),
            M = u.focusedElem,
            _ = u.selectionRange;
          if (p !== M && M && M.ownerDocument && io(M.ownerDocument.documentElement, M)) {
            if (_ !== null && lr(M)) {
              var X = _.start,
                W = _.end;
              if ((W === void 0 && (W = X), 'selectionStart' in M))
                ((M.selectionStart = X), (M.selectionEnd = Math.min(W, M.value.length)));
              else {
                var I = M.ownerDocument || document,
                  Z = (I && I.defaultView) || window;
                if (Z.getSelection) {
                  var F = Z.getSelection(),
                    re = M.textContent.length,
                    ce = Math.min(_.start, re),
                    Oe = _.end === void 0 ? ce : Math.min(_.end, re);
                  !F.extend && ce > Oe && ((p = Oe), (Oe = ce), (ce = p));
                  var V = no(M, ce),
                    G = no(M, Oe);
                  if (
                    V &&
                    G &&
                    (F.rangeCount !== 1 ||
                      F.anchorNode !== V.node ||
                      F.anchorOffset !== V.offset ||
                      F.focusNode !== G.node ||
                      F.focusOffset !== G.offset)
                  ) {
                    var q = I.createRange();
                    (q.setStart(V.node, V.offset),
                      F.removeAllRanges(),
                      ce > Oe
                        ? (F.addRange(q), F.extend(G.node, G.offset))
                        : (q.setEnd(G.node, G.offset), F.addRange(q)));
                  }
                }
              }
            }
            for (I = [], F = M; (F = F.parentNode); )
              F.nodeType === 1 && I.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (typeof M.focus == 'function' && M.focus(), M = 0; M < I.length; M++) {
              var k = I[M];
              ((k.element.scrollLeft = k.left), (k.element.scrollTop = k.top));
            }
          }
          ((pu = !!Bf), (Uf = Bf = null));
        } finally {
          ((Ae = n), (J.p = a), (j.T = l));
        }
      }
      ((e.current = t), (Ke = 2));
    }
  }
  function Td() {
    if (Ke === 2) {
      Ke = 0;
      var e = Ol,
        t = qa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = j.T), (j.T = null));
        var a = J.p;
        J.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          Wc(e, t.alternate, t);
        } finally {
          ((Ae = n), (J.p = a), (j.T = l));
        }
      }
      Ke = 3;
    }
  }
  function bd() {
    if (Ke === 4 || Ke === 3) {
      ((Ke = 0), ui());
      var e = Ol,
        t = qa,
        l = fl,
        a = sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ke = 5)
        : ((Ke = 0), (qa = Ol = null), Md(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Dl = null),
        Lu(l),
        (t = t.stateNode),
        ht && typeof ht.onCommitFiberRoot == 'function')
      )
        try {
          ht.onCommitFiberRoot(en, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = j.T), (n = J.p), (J.p = 2), (j.T = null));
        try {
          for (var u = e.onRecoverableError, p = 0; p < a.length; p++) {
            var M = a[p];
            u(M.value, { componentStack: M.stack });
          }
        } finally {
          ((j.T = t), (J.p = n));
        }
      }
      ((fl & 3) !== 0 && uu(),
        qt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0 ? (e === pf ? wn++ : ((wn = 0), (pf = e))) : (wn = 0),
        Ln(0));
    }
  }
  function Md(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), yn(t)));
  }
  function uu() {
    return (Ed(), Td(), bd(), Ad());
  }
  function Ad() {
    if (Ke !== 5) return !1;
    var e = Ol,
      t = gf;
    gf = 0;
    var l = Lu(fl),
      a = j.T,
      n = J.p;
    try {
      ((J.p = 32 > l ? 32 : l), (j.T = null), (l = yf), (yf = null));
      var u = Ol,
        p = fl;
      if (((Ke = 0), (qa = Ol = null), (fl = 0), (Ae & 6) !== 0)) throw Error(E(331));
      var M = Ae;
      if (
        ((Ae |= 4),
        ud(u.current),
        ad(u, u.current, p, l),
        (Ae = M),
        Ln(0, !1),
        ht && typeof ht.onPostCommitFiberRoot == 'function')
      )
        try {
          ht.onPostCommitFiberRoot(en, u);
        } catch {}
      return !0;
    } finally {
      ((J.p = n), (j.T = a), Md(e, t));
    }
  }
  function Cd(e, t, l) {
    ((t = Rt(l, t)),
      (t = $r(e.stateNode, t, 2)),
      (e = bl(e, t, 2)),
      e !== null && (ln(e, 2), qt(e)));
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
            (typeof a.componentDidCatch == 'function' && (Dl === null || !Dl.has(a)))
          ) {
            ((e = Rt(l, e)),
              (l = Rc(2)),
              (a = bl(t, l, 2)),
              a !== null && (zc(l, a, t, e), ln(a, 2), qt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Uh();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) || ((vf = !0), n.add(l), (e = Lh.bind(null, e, t, l)), t.then(e, e));
  }
  function Lh(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ue === e &&
        (Se & l) === l &&
        (Ge === 4 || (Ge === 3 && (Se & 62914560) === Se && 300 > lt() - eu)
          ? (Ae & 2) === 0 && Xa(e, 0)
          : (mf |= l),
        Va === Se && (Va = 0)),
      qt(e));
  }
  function Rd(e, t) {
    (t === 0 && (t = xs()), (e = Jl(e, t)), e !== null && (ln(e, t), qt(e)));
  }
  function Yh(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Rd(e, l));
  }
  function Gh(e, t) {
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
  function jh(e, t) {
    return sa(e, t);
  }
  var ru = null,
    Za = null,
    Tf = !1,
    fu = !1,
    bf = !1,
    Ul = 0;
  function qt(e) {
    (e !== Za && e.next === null && (Za === null ? (ru = Za = e) : (Za = Za.next = e)),
      (fu = !0),
      Tf || ((Tf = !0), qh()));
  }
  function Ln(e, t) {
    if (!bf && fu) {
      bf = !0;
      do
        for (var l = !1, a = ru; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var p = a.suspendedLanes,
                M = a.pingedLanes;
              ((u = (1 << (31 - gt(42 | e) + 1)) - 1),
                (u &= n & ~(p & ~M)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), Bd(a, u));
          } else
            ((u = Se),
              (u = di(
                a,
                a === Ue ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || tn(a, u) || ((l = !0), Bd(a, u)));
          a = a.next;
        }
      while (l);
      bf = !1;
    }
  }
  function Vh() {
    zd();
  }
  function zd() {
    fu = Tf = !1;
    var e = 0;
    Ul !== 0 && Ph() && (e = Ul);
    for (var t = lt(), l = null, a = ru; a !== null; ) {
      var n = a.next,
        u = Dd(a, t);
      (u === 0
        ? ((a.next = null), l === null ? (ru = n) : (l.next = n), n === null && (Za = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (fu = !0)),
        (a = n));
    }
    ((Ke !== 0 && Ke !== 5) || Ln(e), Ul !== 0 && (Ul = 0));
  }
  function Dd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var p = 31 - gt(u),
        M = 1 << p,
        _ = n[p];
      (_ === -1
        ? ((M & l) === 0 || (M & a) !== 0) && (n[p] = mm(M, t))
        : _ <= t && (e.expiredLanes |= M),
        (u &= ~M));
    }
    if (
      ((t = Ue),
      (l = Se),
      (l = di(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      l === 0 || (e === t && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Gl(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((l & 3) === 0 || tn(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Gl(a), Lu(l))) {
        case 2:
        case 8:
          l = fi;
          break;
        case 32:
          l = oa;
          break;
        case 268435456:
          l = Vl;
          break;
        default:
          l = oa;
      }
      return (
        (a = Od.bind(null, e)),
        (l = sa(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Gl(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Od(e, t) {
    if (Ke !== 0 && Ke !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (uu() && e.callbackNode !== l) return null;
    var a = Se;
    return (
      (a = di(e, e === Ue ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (cd(e, a, t),
          Dd(e, lt()),
          e.callbackNode != null && e.callbackNode === l ? Od.bind(null, e) : null)
    );
  }
  function Bd(e, t) {
    if (uu()) return null;
    cd(e, t, !0);
  }
  function qh() {
    e0(function () {
      (Ae & 6) !== 0 ? sa(jl, Vh) : zd();
    });
  }
  function Mf() {
    if (Ul === 0) {
      var e = Oa;
      (e === 0 && ((e = si), (si <<= 1), (si & 261888) === 0 && (si = 256)), (Ul = e));
    }
    return Ul;
  }
  function Ud(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : gi('' + e);
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
      var M = new xi('action', 'action', null, a, n);
      e.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ul !== 0) {
                  var _ = p ? Nd(n, p) : new FormData(n);
                  Xr(l, { pending: !0, data: _, method: n.method, action: u }, null, _);
                }
              } else
                typeof u == 'function' &&
                  (M.preventDefault(),
                  (_ = p ? Nd(n, p) : new FormData(n)),
                  Xr(l, { pending: !0, data: _, method: n.method, action: u }, u, _));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Af = 0; Af < ur.length; Af++) {
    var Cf = ur[Af],
      Qh = Cf.toLowerCase(),
      Zh = Cf[0].toUpperCase() + Cf.slice(1);
    Ht(Qh, 'on' + Zh);
  }
  (Ht(so, 'onAnimationEnd'),
    Ht(oo, 'onAnimationIteration'),
    Ht(co, 'onAnimationStart'),
    Ht('dblclick', 'onDoubleClick'),
    Ht('focusin', 'onFocus'),
    Ht('focusout', 'onBlur'),
    Ht(rh, 'onTransitionRun'),
    Ht(fh, 'onTransitionStart'),
    Ht(sh, 'onTransitionCancel'),
    Ht(vo, 'onTransitionEnd'),
    ga('onMouseEnter', ['mouseout', 'mouseover']),
    ga('onMouseLeave', ['mouseout', 'mouseover']),
    ga('onPointerEnter', ['pointerout', 'pointerover']),
    ga('onPointerLeave', ['pointerout', 'pointerover']),
    Xl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Xl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Xl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Xl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Xl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Xl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Yn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Kh = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Yn)
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
            var M = a[p],
              _ = M.instance,
              X = M.currentTarget;
            if (((M = M.listener), _ !== u && n.isPropagationStopped())) break e;
            ((u = M), (n.currentTarget = X));
            try {
              u(n);
            } catch (W) {
              bi(W);
            }
            ((n.currentTarget = null), (u = _));
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((M = a[p]),
              (_ = M.instance),
              (X = M.currentTarget),
              (M = M.listener),
              _ !== u && n.isPropagationStopped())
            )
              break e;
            ((u = M), (n.currentTarget = X));
            try {
              u(n);
            } catch (W) {
              bi(W);
            }
            ((n.currentTarget = null), (u = _));
          }
      }
    }
  }
  function pe(e, t) {
    var l = t[Yu];
    l === void 0 && (l = t[Yu] = new Set());
    var a = e + '__bubble';
    l.has(a) || (Hd(t, e, 2, !1), l.add(a));
  }
  function Rf(e, t, l) {
    var a = 0;
    (t && (a |= 4), Hd(l, e, a, t));
  }
  var su = '_reactListening' + Math.random().toString(36).slice(2);
  function zf(e) {
    if (!e[su]) {
      ((e[su] = !0),
        Rs.forEach(function (l) {
          l !== 'selectionchange' && (Kh.has(l) || Rf(l, !1, e), Rf(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[su] || ((t[su] = !0), Rf('selectionchange', !1, t));
    }
  }
  function Hd(e, t, l, a) {
    switch (ov(t)) {
      case 2:
        var n = x0;
        break;
      case 8:
        n = E0;
        break;
      default:
        n = Xf;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Ju || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function Df(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var M = a.stateNode.containerInfo;
          if (M === n) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var _ = p.tag;
              if ((_ === 3 || _ === 4) && p.stateNode.containerInfo === n) return;
              p = p.return;
            }
          for (; M !== null; ) {
            if (((p = va(M)), p === null)) return;
            if (((_ = p.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              a = u = p;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
    Gs(function () {
      var X = u,
        W = Zu(l),
        I = [];
      e: {
        var Z = mo.get(e);
        if (Z !== void 0) {
          var F = xi,
            re = e;
          switch (e) {
            case 'keypress':
              if (pi(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              F = Gm;
              break;
            case 'focusin':
              ((re = 'focus'), (F = ku));
              break;
            case 'focusout':
              ((re = 'blur'), (F = ku));
              break;
            case 'beforeblur':
            case 'afterblur':
              F = ku;
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
              F = qs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              F = Rm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              F = qm;
              break;
            case so:
            case oo:
            case co:
              F = Om;
              break;
            case vo:
              F = Qm;
              break;
            case 'scroll':
            case 'scrollend':
              F = Am;
              break;
            case 'wheel':
              F = Km;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              F = Um;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              F = Qs;
              break;
            case 'toggle':
            case 'beforetoggle':
              F = Fm;
          }
          var ce = (t & 4) !== 0,
            Oe = !ce && (e === 'scroll' || e === 'scrollend'),
            V = ce ? (Z !== null ? Z + 'Capture' : null) : Z;
          ce = [];
          for (var G = X, q; G !== null; ) {
            var k = G;
            if (
              ((q = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                q === null ||
                V === null ||
                ((k = un(G, V)), k != null && ce.push(Gn(G, k, q))),
              Oe)
            )
              break;
            G = G.return;
          }
          0 < ce.length && ((Z = new F(Z, re, null, l, W)), I.push({ event: Z, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (F = e === 'mouseout' || e === 'pointerout'),
            Z && l !== Qu && (re = l.relatedTarget || l.fromElement) && (va(re) || re[da]))
          )
            break e;
          if (
            (F || Z) &&
            ((Z =
              W.window === W
                ? W
                : (Z = W.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            F
              ? ((re = l.relatedTarget || l.toElement),
                (F = X),
                (re = re ? va(re) : null),
                re !== null &&
                  ((Oe = i(re)), (ce = re.tag), re !== Oe || (ce !== 5 && ce !== 27 && ce !== 6)) &&
                  (re = null))
              : ((F = null), (re = X)),
            F !== re)
          ) {
            if (
              ((ce = qs),
              (k = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (G = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ce = Qs), (k = 'onPointerLeave'), (V = 'onPointerEnter'), (G = 'pointer')),
              (Oe = F == null ? Z : nn(F)),
              (q = re == null ? Z : nn(re)),
              (Z = new ce(k, G + 'leave', F, l, W)),
              (Z.target = Oe),
              (Z.relatedTarget = q),
              (k = null),
              va(W) === X &&
                ((ce = new ce(V, G + 'enter', re, l, W)),
                (ce.target = q),
                (ce.relatedTarget = Oe),
                (k = ce)),
              (Oe = k),
              F && re)
            )
              t: {
                for (ce = Jh, V = F, G = re, q = 0, k = V; k; k = ce(k)) q++;
                k = 0;
                for (var se = G; se; se = ce(se)) k++;
                for (; 0 < q - k; ) ((V = ce(V)), q--);
                for (; 0 < k - q; ) ((G = ce(G)), k--);
                for (; q--; ) {
                  if (V === G || (G !== null && V === G.alternate)) {
                    ce = V;
                    break t;
                  }
                  ((V = ce(V)), (G = ce(G)));
                }
                ce = null;
              }
            else ce = null;
            (F !== null && wd(I, Z, F, ce, !1),
              re !== null && Oe !== null && wd(I, Oe, re, ce, !0));
          }
        }
        e: {
          if (
            ((Z = X ? nn(X) : window),
            (F = Z.nodeName && Z.nodeName.toLowerCase()),
            F === 'select' || (F === 'input' && Z.type === 'file'))
          )
            var be = Ps;
          else if (Ws(Z))
            if (Is) be = nh;
            else {
              be = lh;
              var fe = th;
            }
          else
            ((F = Z.nodeName),
              !F || F.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? X && Xu(X.elementType) && (be = Ps)
                : (be = ah));
          if (be && (be = be(e, X))) {
            ks(I, be, l, W);
            break e;
          }
          (fe && fe(e, Z, X),
            e === 'focusout' &&
              X &&
              Z.type === 'number' &&
              X.memoizedProps.value != null &&
              qu(Z, 'number', Z.value));
        }
        switch (((fe = X ? nn(X) : window), e)) {
          case 'focusin':
            (Ws(fe) || fe.contentEditable === 'true') && ((Ta = fe), (ar = X), (mn = null));
            break;
          case 'focusout':
            mn = ar = Ta = null;
            break;
          case 'mousedown':
            nr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((nr = !1), ro(I, l, W));
            break;
          case 'selectionchange':
            if (uh) break;
          case 'keydown':
          case 'keyup':
            ro(I, l, W);
        }
        var ge;
        if (Iu)
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
            ? Fs(e, l) && (xe = 'onCompositionEnd')
            : e === 'keydown' && l.keyCode === 229 && (xe = 'onCompositionStart');
        (xe &&
          (Zs &&
            l.locale !== 'ko' &&
            (Ea || xe !== 'onCompositionStart'
              ? xe === 'onCompositionEnd' && Ea && (ge = js())
              : ((gl = W), (Fu = 'value' in gl ? gl.value : gl.textContent), (Ea = !0))),
          (fe = ou(X, xe)),
          0 < fe.length &&
            ((xe = new Xs(xe, e, null, l, W)),
            I.push({ event: xe, listeners: fe }),
            ge ? (xe.data = ge) : ((ge = $s(l)), ge !== null && (xe.data = ge)))),
          (ge = Wm ? km(e, l) : Pm(e, l)) &&
            ((xe = ou(X, 'onBeforeInput')),
            0 < xe.length &&
              ((fe = new Xs('onBeforeInput', 'beforeinput', null, l, W)),
              I.push({ event: fe, listeners: xe }),
              (fe.data = ge))),
          Xh(I, e, X, l, W));
      }
      _d(I, t);
    });
  }
  function Gn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ou(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = un(e, l)),
          n != null && a.unshift(Gn(e, n, u)),
          (n = un(e, t)),
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
  function wd(e, t, l, a, n) {
    for (var u = t._reactName, p = []; l !== null && l !== a; ) {
      var M = l,
        _ = M.alternate,
        X = M.stateNode;
      if (((M = M.tag), _ !== null && _ === a)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        X === null ||
        ((_ = X),
        n
          ? ((X = un(l, u)), X != null && p.unshift(Gn(l, X, _)))
          : n || ((X = un(l, u)), X != null && p.push(Gn(l, X, _)))),
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
        mi(e, 'class', a);
        break;
      case 'tabIndex':
        mi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        mi(e, l, a);
        break;
      case 'style':
        Ls(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          mi(e, 'data', a);
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
        ((a = gi('' + a)), e.setAttribute(l, a));
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
        ((a = gi('' + a)), e.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Jt);
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
        ((l = gi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
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
        vi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = bm.get(l) || l), vi(e, l, a));
    }
  }
  function Of(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        Ls(e, a, u);
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
        if (!zs.hasOwnProperty(l))
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
        var M = (u = p = n = null),
          _ = null,
          X = null;
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
                  _ = W;
                  break;
                case 'defaultChecked':
                  X = W;
                  break;
                case 'value':
                  u = W;
                  break;
                case 'defaultValue':
                  M = W;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (W != null) throw Error(E(137, t));
                  break;
                default:
                  De(e, t, a, W, l, null);
              }
          }
        Ns(e, u, M, _, X, p, n, !1);
        return;
      case 'select':
        (pe('invalid', e), (a = p = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((M = l[n]), M != null))
            switch (n) {
              case 'value':
                u = M;
                break;
              case 'defaultValue':
                p = M;
                break;
              case 'multiple':
                a = M;
              default:
                De(e, t, n, M, l, null);
            }
        ((t = u),
          (l = p),
          (e.multiple = !!a),
          t != null ? ya(e, !!a, t, !1) : l != null && ya(e, !!a, l, !0));
        return;
      case 'textarea':
        (pe('invalid', e), (u = n = a = null));
        for (p in l)
          if (l.hasOwnProperty(p) && ((M = l[p]), M != null))
            switch (p) {
              case 'value':
                a = M;
                break;
              case 'defaultValue':
                n = M;
                break;
              case 'children':
                u = M;
                break;
              case 'dangerouslySetInnerHTML':
                if (M != null) throw Error(E(91));
                break;
              default:
                De(e, t, p, M, l, null);
            }
        Hs(e, a, n, u);
        return;
      case 'option':
        for (_ in l)
          if (l.hasOwnProperty(_) && ((a = l[_]), a != null))
            switch (_) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                De(e, t, _, a, l, null);
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
        for (a = 0; a < Yn.length; a++) pe(Yn[a], e);
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
        for (X in l)
          if (l.hasOwnProperty(X) && ((a = l[X]), a != null))
            switch (X) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(E(137, t));
              default:
                De(e, t, X, a, l, null);
            }
        return;
      default:
        if (Xu(t)) {
          for (W in l)
            l.hasOwnProperty(W) && ((a = l[W]), a !== void 0 && Of(e, t, W, a, l, void 0));
          return;
        }
    }
    for (M in l) l.hasOwnProperty(M) && ((a = l[M]), a != null && De(e, t, M, a, l, null));
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
          M = null,
          _ = null,
          X = null,
          W = null;
        for (F in l) {
          var I = l[F];
          if (l.hasOwnProperty(F) && I != null)
            switch (F) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                _ = I;
              default:
                a.hasOwnProperty(F) || De(e, t, F, null, a, I);
            }
        }
        for (var Z in a) {
          var F = a[Z];
          if (((I = l[Z]), a.hasOwnProperty(Z) && (F != null || I != null)))
            switch (Z) {
              case 'type':
                u = F;
                break;
              case 'name':
                n = F;
                break;
              case 'checked':
                X = F;
                break;
              case 'defaultChecked':
                W = F;
                break;
              case 'value':
                p = F;
                break;
              case 'defaultValue':
                M = F;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(E(137, t));
                break;
              default:
                F !== I && De(e, t, Z, F, a, I);
            }
        }
        Vu(e, p, M, _, X, W, u, n);
        return;
      case 'select':
        F = p = M = Z = null;
        for (u in l)
          if (((_ = l[u]), l.hasOwnProperty(u) && _ != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                F = _;
              default:
                a.hasOwnProperty(u) || De(e, t, u, null, a, _);
            }
        for (n in a)
          if (((u = a[n]), (_ = l[n]), a.hasOwnProperty(n) && (u != null || _ != null)))
            switch (n) {
              case 'value':
                Z = u;
                break;
              case 'defaultValue':
                M = u;
                break;
              case 'multiple':
                p = u;
              default:
                u !== _ && De(e, t, n, u, a, _);
            }
        ((t = M),
          (l = p),
          (a = F),
          Z != null
            ? ya(e, !!l, Z, !1)
            : !!a != !!l && (t != null ? ya(e, !!l, t, !0) : ya(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        F = Z = null;
        for (M in l)
          if (((n = l[M]), l.hasOwnProperty(M) && n != null && !a.hasOwnProperty(M)))
            switch (M) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                De(e, t, M, null, a, n);
            }
        for (p in a)
          if (((n = a[p]), (u = l[p]), a.hasOwnProperty(p) && (n != null || u != null)))
            switch (p) {
              case 'value':
                Z = n;
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
        _s(e, Z, F);
        return;
      case 'option':
        for (var re in l)
          if (((Z = l[re]), l.hasOwnProperty(re) && Z != null && !a.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                De(e, t, re, null, a, Z);
            }
        for (_ in a)
          if (((Z = a[_]), (F = l[_]), a.hasOwnProperty(_) && Z !== F && (Z != null || F != null)))
            switch (_) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                De(e, t, _, Z, a, F);
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
        for (var ce in l)
          ((Z = l[ce]),
            l.hasOwnProperty(ce) && Z != null && !a.hasOwnProperty(ce) && De(e, t, ce, null, a, Z));
        for (X in a)
          if (((Z = a[X]), (F = l[X]), a.hasOwnProperty(X) && Z !== F && (Z != null || F != null)))
            switch (X) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(E(137, t));
                break;
              default:
                De(e, t, X, Z, a, F);
            }
        return;
      default:
        if (Xu(t)) {
          for (var Oe in l)
            ((Z = l[Oe]),
              l.hasOwnProperty(Oe) &&
                Z !== void 0 &&
                !a.hasOwnProperty(Oe) &&
                Of(e, t, Oe, void 0, a, Z));
          for (W in a)
            ((Z = a[W]),
              (F = l[W]),
              !a.hasOwnProperty(W) ||
                Z === F ||
                (Z === void 0 && F === void 0) ||
                Of(e, t, W, Z, a, F));
          return;
        }
    }
    for (var V in l)
      ((Z = l[V]),
        l.hasOwnProperty(V) && Z != null && !a.hasOwnProperty(V) && De(e, t, V, null, a, Z));
    for (I in a)
      ((Z = a[I]),
        (F = l[I]),
        !a.hasOwnProperty(I) || Z === F || (Z == null && F == null) || De(e, t, I, Z, a, F));
  }
  function Gd(e) {
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
          M = n.duration;
        if (u && M && Gd(p)) {
          for (p = 0, M = n.responseEnd, a += 1; a < l.length; a++) {
            var _ = l[a],
              X = _.startTime;
            if (X > M) break;
            var W = _.transferSize,
              I = _.initiatorType;
            W && Gd(I) && ((_ = _.responseEnd), (p += W * (_ < M ? 1 : (M - X) / (_ - X))));
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
  var Bf = null,
    Uf = null;
  function cu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function jd(e) {
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
  function Nf(e, t) {
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
  var _f = null;
  function Ph() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === _f ? !1 : ((_f = e), !0)) : ((_f = null), !1);
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
  function Nl(e) {
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
        else if (l === 'html') jn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), jn(l));
          for (var u = l.firstChild; u; ) {
            var p = u.nextSibling,
              M = u.nodeName;
            (u[an] ||
              M === 'SCRIPT' ||
              M === 'STYLE' ||
              (M === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = p));
          }
        } else l === 'body' && jn(e.ownerDocument.body);
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
  function Hf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Hf(l), Gu(l));
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
        if (!e[an])
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
      if (((e = Ut(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function a0(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
        ((e = Ut(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Kd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Ut(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function wf(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Lf(e) {
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
  function Ut(e) {
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
  var Yf = null;
  function Jd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '/$' || l === '/&') {
          if (t === 0) return Ut(e.nextSibling);
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
    switch (((t = cu(l)), e)) {
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
  function jn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Gu(e);
  }
  var Nt = new Map(),
    Wd = new Set();
  function du(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var sl = J.d;
  J.d = { f: i0, r: u0, D: r0, C: f0, L: s0, m: o0, X: d0, S: c0, M: v0 };
  function i0() {
    var e = sl.f(),
      t = au();
    return e || t;
  }
  function u0(e) {
    var t = ma(e);
    t !== null && t.tag === 5 && t.type === 'form' ? vc(t) : sl.r(e);
  }
  var Ka = typeof document > 'u' ? null : document;
  function kd(e, t, l) {
    var a = Ka;
    if (a && typeof t == 'string' && t) {
      var n = At(t);
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
  function f0(e, t) {
    (sl.C(e, t), kd('preconnect', e, t));
  }
  function s0(e, t, l) {
    sl.L(e, t, l);
    var a = Ka;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + At(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + At(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' && (n += '[imagesizes="' + At(l.imageSizes) + '"]'))
        : (n += '[href="' + At(e) + '"]');
      var u = n;
      switch (t) {
        case 'style':
          u = Ja(e);
          break;
        case 'script':
          u = Fa(e);
      }
      Nt.has(u) ||
        ((e = g(
          { rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t },
          l
        )),
        Nt.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(Vn(u))) ||
          (t === 'script' && a.querySelector(qn(u))) ||
          ((t = a.createElement('link')), et(t, 'link', e), Fe(t), a.head.appendChild(t)));
    }
  }
  function o0(e, t) {
    sl.m(e, t);
    var l = Ka;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n = 'link[rel="modulepreload"][as="' + At(a) + '"][href="' + At(e) + '"]',
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
        !Nt.has(u) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)), Nt.set(u, e), l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(qn(u))) return;
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
        var M = { loading: 0, preload: null };
        if ((p = a.querySelector(Vn(u)))) M.loading = 5;
        else {
          ((e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Nt.get(u)) && Gf(e, l));
          var _ = (p = a.createElement('link'));
          (Fe(_),
            et(_, 'link', e),
            (_._p = new Promise(function (X, W) {
              ((_.onload = X), (_.onerror = W));
            })),
            _.addEventListener('load', function () {
              M.loading |= 1;
            }),
            _.addEventListener('error', function () {
              M.loading |= 2;
            }),
            (M.loading |= 4),
            vu(p, t, a));
        }
        ((p = { type: 'stylesheet', instance: p, count: 1, state: M }), n.set(u, p));
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
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Nt.get(n)) && jf(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function v0(e, t) {
    sl.M(e, t);
    var l = Ka;
    if (l && e) {
      var a = ha(l).hoistableScripts,
        n = Fa(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Nt.get(n)) && jf(e, t),
          (u = l.createElement('script')),
          Fe(u),
          et(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Pd(e, t, l, a) {
    var n = (n = ne.current) ? du(n) : null;
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
              (u = n.querySelector(Vn(e))) && !u._p && ((p.instance = u), (p.state.loading = 5)),
              Nt.has(e) ||
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
                Nt.set(e, l),
                u || m0(n, e, l, p.state))),
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
    return 'href="' + At(e) + '"';
  }
  function Vn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Id(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function m0(e, t, l, a) {
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
    return '[src="' + At(e) + '"]';
  }
  function qn(e) {
    return 'script[async]' + e;
  }
  function ev(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + At(l.href) + '"]');
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
          var u = e.querySelector(Vn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Fe(u), u);
          ((a = Id(l)),
            (n = Nt.get(n)) && Gf(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Fe(u));
          var p = u;
          return (
            (p._p = new Promise(function (M, _) {
              ((p.onload = M), (p.onerror = _));
            })),
            et(u, 'link', a),
            (t.state.loading |= 4),
            vu(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Fa(l.src)),
            (n = e.querySelector(qn(u)))
              ? ((t.instance = n), Fe(n), n)
              : ((a = l),
                (n = Nt.get(u)) && ((a = g({}, l)), jf(a, n)),
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
      var M = a[p];
      if (M.dataset.precedence === t) u = M;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Gf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function jf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var mu = null;
  function tv(e, t, l) {
    if (mu === null) {
      var a = new Map(),
        n = (mu = new Map());
      n.set(l, a);
    } else ((n = mu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (
        !(u[an] || u[We] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var p = u.getAttribute(t) || '';
        p = e + p;
        var M = a.get(p);
        M ? M.push(u) : a.set(p, [u]);
      }
    }
    return a;
  }
  function lv(e, t, l) {
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
  function av(e) {
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
          u = t.querySelector(Vn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = hu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Fe(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Id(a)),
          (n = Nt.get(n)) && Gf(a, n),
          (u = u.createElement('link')),
          Fe(u));
        var p = u;
        ((p._p = new Promise(function (M, _) {
          ((p.onload = M), (p.onerror = _));
        })),
          et(u, 'link', a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = hu.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var Vf = 0;
  function y0(e, t) {
    return (
      e.stylesheets && e.count === 0 && yu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && yu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Vf === 0 && (Vf = 62500 * kh());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && yu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Vf ? 50 : 800) + t
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
  function hu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) yu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var gu = null;
  function yu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (gu = new Map()), t.forEach(p0, e), (gu = null), hu.call(e)));
  }
  function p0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = gu.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), gu.set(e, l));
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
        (a = hu.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Xn = {
    $$typeof: U,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0,
  };
  function S0(e, t, l, a, n, u, p, M, _) {
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
      (this.formState = _),
      (this.incompleteTransitions = new Map()));
  }
  function nv(e, t, l, a, n, u, p, M, _, X, W, I) {
    return (
      (e = new S0(e, t, l, p, _, X, W, I, M)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = pt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Sr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      br(u),
      e
    );
  }
  function iv(e) {
    return e ? ((e = Aa), e) : Aa;
  }
  function uv(e, t, l, a, n, u) {
    ((n = iv(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = Tl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = bl(e, a, t)),
      l !== null && (dt(l, e, t), En(l, e, t)));
  }
  function rv(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function qf(e, t) {
    (rv(e, t), (e = e.alternate) && rv(e, t));
  }
  function fv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Jl(e, 67108864);
      (t !== null && dt(t, e, 67108864), qf(e, 67108864));
    }
  }
  function sv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bt();
      t = wu(t);
      var l = Jl(e, t);
      (l !== null && dt(l, e, t), qf(e, t));
    }
  }
  var pu = !0;
  function x0(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var u = J.p;
    try {
      ((J.p = 2), Xf(e, t, l, a));
    } finally {
      ((J.p = u), (j.T = n));
    }
  }
  function E0(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var u = J.p;
    try {
      ((J.p = 8), Xf(e, t, l, a));
    } finally {
      ((J.p = u), (j.T = n));
    }
  }
  function Xf(e, t, l, a) {
    if (pu) {
      var n = Qf(a);
      if (n === null) (Df(e, t, a, Su, l), cv(e, a));
      else if (b0(n, e, t, l, a)) a.stopPropagation();
      else if ((cv(e, a), t & 4 && -1 < T0.indexOf(e))) {
        for (; n !== null; ) {
          var u = ma(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var p = ql(u.pendingLanes);
                  if (p !== 0) {
                    var M = u;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; p; ) {
                      var _ = 1 << (31 - gt(p));
                      ((M.entanglements[1] |= _), (p &= ~_));
                    }
                    (qt(u), (Ae & 6) === 0 && ((tu = lt() + 500), Ln(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = Jl(u, 2)), M !== null && dt(M, u, 2), au(), qf(u, 2));
            }
          if (((u = Qf(a)), u === null && Df(e, t, a, Su, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Df(e, t, a, null, l);
    }
  }
  function Qf(e) {
    return ((e = Zu(e)), Zf(e));
  }
  var Su = null;
  function Zf(e) {
    if (((Su = null), (e = va(e)), e !== null)) {
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
    return ((Su = e), null);
  }
  function ov(e) {
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
        switch (ri()) {
          case jl:
            return 2;
          case fi:
            return 8;
          case oa:
          case ca:
            return 32;
          case Vl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kf = !1,
    _l = null,
    Hl = null,
    wl = null,
    Qn = new Map(),
    Zn = new Map(),
    Ll = [],
    T0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function cv(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        _l = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Hl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        wl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Qn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Zn.delete(t.pointerId);
    }
  }
  function Kn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = ma(t)), t !== null && fv(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function b0(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((_l = Kn(_l, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((Hl = Kn(Hl, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((wl = Kn(wl, e, t, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Qn.set(u, Kn(Qn.get(u) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return ((u = n.pointerId), Zn.set(u, Kn(Zn.get(u) || null, e, t, l, a, n)), !0);
    }
    return !1;
  }
  function dv(e) {
    var t = va(e.target);
    if (t !== null) {
      var l = i(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = c(l)), t !== null)) {
            ((e.blockedOn = t),
              As(e.priority, function () {
                sv(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(l)), t !== null)) {
            ((e.blockedOn = t),
              As(e.priority, function () {
                sv(l);
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
  function xu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Qf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Qu = a), l.target.dispatchEvent(a), (Qu = null));
      } else return ((t = ma(l)), t !== null && fv(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function vv(e, t, l) {
    xu(e) && l.delete(t);
  }
  function M0() {
    ((Kf = !1),
      _l !== null && xu(_l) && (_l = null),
      Hl !== null && xu(Hl) && (Hl = null),
      wl !== null && xu(wl) && (wl = null),
      Qn.forEach(vv),
      Zn.forEach(vv));
  }
  function Eu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Kf || ((Kf = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, M0)));
  }
  var Tu = null;
  function mv(e) {
    Tu !== e &&
      ((Tu = e),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Tu === e && (Tu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (Zf(a || l) === null) continue;
            break;
          }
          var u = ma(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Xr(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function $a(e) {
    function t(_) {
      return Eu(_, e);
    }
    (_l !== null && Eu(_l, e),
      Hl !== null && Eu(Hl, e),
      wl !== null && Eu(wl, e),
      Qn.forEach(t),
      Zn.forEach(t));
    for (var l = 0; l < Ll.length; l++) {
      var a = Ll[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ll.length && ((l = Ll[0]), l.blockedOn === null); )
      (dv(l), l.blockedOn === null && Ll.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          p = n[ut] || null;
        if (typeof u == 'function') p || mv(l);
        else if (p) {
          var M = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (p = u[ut] || null))) M = p.formAction;
            else if (Zf(n) !== null) continue;
          } else M = p.action;
          (typeof M == 'function' ? (l[a + 1] = M) : (l.splice(a, 3), (a -= 3)), mv(l));
        }
      }
  }
  function hv() {
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
  function Jf(e) {
    this._internalRoot = e;
  }
  ((bu.prototype.render = Jf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(E(409));
      var l = t.current,
        a = bt();
      uv(l, a, e, t, null, null);
    }),
    (bu.prototype.unmount = Jf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (uv(e.current, 2, null, e, null, null), au(), (t[da] = null));
        }
      }));
  function bu(e) {
    this._internalRoot = e;
  }
  bu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ms();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ll.length && t !== 0 && t < Ll[l].priority; l++);
      (Ll.splice(l, 0, e), l === 0 && dv(e));
    }
  };
  var gv = A.version;
  if (gv !== '19.2.5') throw Error(E(527, gv, '19.2.5'));
  J.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(E(188))
        : ((e = Object.keys(e).join(',')), Error(E(268, e)));
    return ((e = d(t)), (e = e !== null ? s(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var A0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: j,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        ((en = Mu.inject(A0)), (ht = Mu));
      } catch {}
  }
  return (
    (Fn.createRoot = function (e, t) {
      if (!h(e)) throw Error(E(299));
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
        (t = nv(e, 1, !1, null, null, l, a, null, n, u, p, hv)),
        (e[da] = t.current),
        zf(e),
        new Jf(t)
      );
    }),
    (Fn.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(E(299));
      var a = !1,
        n = '',
        u = bc,
        p = Mc,
        M = Ac,
        _ = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (p = l.onCaughtError),
          l.onRecoverableError !== void 0 && (M = l.onRecoverableError),
          l.formState !== void 0 && (_ = l.formState)),
        (t = nv(e, 1, !0, t, l ?? null, a, n, _, u, p, M, hv)),
        (t.context = iv(null)),
        (l = t.current),
        (a = bt()),
        (a = wu(a)),
        (n = Tl(a)),
        (n.callback = null),
        bl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        ln(t, l),
        qt(t),
        (e[da] = t.current),
        zf(e),
        new bu(t)
      );
    }),
    (Fn.version = '19.2.5'),
    Fn
  );
}
var Rv;
function w0() {
  if (Rv) return $f.exports;
  Rv = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (A) {
        console.error(A);
      }
  }
  return (o(), ($f.exports = H0()), $f.exports);
}
var L0 = w0(),
  Q = ss();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var zv = 'popstate';
function Dv(o) {
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
  function A(E, h) {
    var d;
    let i = (d = h.state) == null ? void 0 : d.masked,
      { pathname: c, search: m, hash: f } = i || E.location;
    return us(
      '',
      { pathname: c, search: m, hash: f },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || 'default',
      i
        ? { pathname: E.location.pathname, search: E.location.search, hash: E.location.hash }
        : void 0
    );
  }
  function b(E, h) {
    return typeof h == 'string' ? h : Pn(h);
  }
  return j0(A, b, null, o);
}
function Le(o, A) {
  if (o === !1 || o === null || typeof o > 'u') throw new Error(A);
}
function Qt(o, A) {
  if (!o) {
    typeof console < 'u' && console.warn(A);
    try {
      throw new Error(A);
    } catch {}
  }
}
function G0() {
  return Math.random().toString(36).substring(2, 10);
}
function Ov(o, A) {
  return {
    usr: o.state,
    key: o.key,
    idx: A,
    masked: o.unstable_mask ? { pathname: o.pathname, search: o.search, hash: o.hash } : void 0,
  };
}
function us(o, A, b = null, E, h) {
  return {
    pathname: typeof o == 'string' ? o : o.pathname,
    search: '',
    hash: '',
    ...(typeof A == 'string' ? ka(A) : A),
    state: b,
    key: (A && A.key) || E || G0(),
    unstable_mask: h,
  };
}
function Pn({ pathname: o = '/', search: A = '', hash: b = '' }) {
  return (
    A && A !== '?' && (o += A.charAt(0) === '?' ? A : '?' + A),
    b && b !== '#' && (o += b.charAt(0) === '#' ? b : '#' + b),
    o
  );
}
function ka(o) {
  let A = {};
  if (o) {
    let b = o.indexOf('#');
    b >= 0 && ((A.hash = o.substring(b)), (o = o.substring(0, b)));
    let E = o.indexOf('?');
    (E >= 0 && ((A.search = o.substring(E)), (o = o.substring(0, E))), o && (A.pathname = o));
  }
  return A;
}
function j0(o, A, b, E = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = E,
    c = h.history,
    m = 'POP',
    f = null,
    d = s();
  d == null && ((d = 0), c.replaceState({ ...c.state, idx: d }, ''));
  function s() {
    return (c.state || { idx: null }).idx;
  }
  function g() {
    m = 'POP';
    let x = s(),
      C = x == null ? null : x - d;
    ((d = x), f && f({ action: m, location: v.location, delta: C }));
  }
  function S(x, C) {
    m = 'PUSH';
    let O = Dv(x) ? x : us(v.location, x, C);
    d = s() + 1;
    let U = Ov(O, d),
      Y = v.createHref(O.unstable_mask || O);
    try {
      c.pushState(U, '', Y);
    } catch (T) {
      if (T instanceof DOMException && T.name === 'DataCloneError') throw T;
      h.location.assign(Y);
    }
    i && f && f({ action: m, location: v.location, delta: 1 });
  }
  function r(x, C) {
    m = 'REPLACE';
    let O = Dv(x) ? x : us(v.location, x, C);
    d = s();
    let U = Ov(O, d),
      Y = v.createHref(O.unstable_mask || O);
    (c.replaceState(U, '', Y), i && f && f({ action: m, location: v.location, delta: 0 }));
  }
  function y(x) {
    return V0(x);
  }
  let v = {
    get action() {
      return m;
    },
    get location() {
      return o(h, c);
    },
    listen(x) {
      if (f) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(zv, g),
        (f = x),
        () => {
          (h.removeEventListener(zv, g), (f = null));
        }
      );
    },
    createHref(x) {
      return A(h, x);
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
function V0(o, A = !1) {
  let b = 'http://localhost';
  (typeof window < 'u' &&
    (b = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Le(b, 'No window.location.(origin|href) available to create URL'));
  let E = typeof o == 'string' ? o : Pn(o);
  return ((E = E.replace(/ $/, '%20')), !A && E.startsWith('//') && (E = b + E), new URL(E, b));
}
function Vv(o, A, b = '/') {
  return q0(o, A, b, !1);
}
function q0(o, A, b, E) {
  let h = typeof A == 'string' ? ka(A) : A,
    i = cl(h.pathname || '/', b);
  if (i == null) return null;
  let c = qv(o);
  X0(c);
  let m = null;
  for (let f = 0; m == null && f < c.length; ++f) {
    let d = eg(i);
    m = P0(c[f], d, E);
  }
  return m;
}
function qv(o, A = [], b = [], E = '', h = !1) {
  let i = (c, m, f = h, d) => {
    let s = {
      relativePath: d === void 0 ? c.path || '' : d,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: m,
      route: c,
    };
    if (s.relativePath.startsWith('/')) {
      if (!s.relativePath.startsWith(E) && f) return;
      (Le(
        s.relativePath.startsWith(E),
        `Absolute route path "${s.relativePath}" nested under path "${E}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (s.relativePath = s.relativePath.slice(E.length)));
    }
    let g = Yt([E, s.relativePath]),
      S = b.concat(s);
    (c.children &&
      c.children.length > 0 &&
      (Le(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      qv(c.children, A, S, g, f)),
      !(c.path == null && !c.index) && A.push({ path: g, score: W0(g, c.index), routesMeta: S }));
  };
  return (
    o.forEach((c, m) => {
      var f;
      if (c.path === '' || !((f = c.path) != null && f.includes('?'))) i(c, m);
      else for (let d of Xv(c.path)) i(c, m, !0, d);
    }),
    A
  );
}
function Xv(o) {
  let A = o.split('/');
  if (A.length === 0) return [];
  let [b, ...E] = A,
    h = b.endsWith('?'),
    i = b.replace(/\?$/, '');
  if (E.length === 0) return h ? [i, ''] : [i];
  let c = Xv(E.join('/')),
    m = [];
  return (
    m.push(...c.map((f) => (f === '' ? i : [i, f].join('/')))),
    h && m.push(...c),
    m.map((f) => (o.startsWith('/') && f === '' ? '/' : f))
  );
}
function X0(o) {
  o.sort((A, b) =>
    A.score !== b.score
      ? b.score - A.score
      : k0(
          A.routesMeta.map((E) => E.childrenIndex),
          b.routesMeta.map((E) => E.childrenIndex)
        )
  );
}
var Q0 = /^:[\w-]+$/,
  Z0 = 3,
  K0 = 2,
  J0 = 1,
  F0 = 10,
  $0 = -2,
  Bv = (o) => o === '*';
function W0(o, A) {
  let b = o.split('/'),
    E = b.length;
  return (
    b.some(Bv) && (E += $0),
    A && (E += K0),
    b.filter((h) => !Bv(h)).reduce((h, i) => h + (Q0.test(i) ? Z0 : i === '' ? J0 : F0), E)
  );
}
function k0(o, A) {
  return o.length === A.length && o.slice(0, -1).every((E, h) => E === A[h])
    ? o[o.length - 1] - A[A.length - 1]
    : 0;
}
function P0(o, A, b = !1) {
  let { routesMeta: E } = o,
    h = {},
    i = '/',
    c = [];
  for (let m = 0; m < E.length; ++m) {
    let f = E[m],
      d = m === E.length - 1,
      s = i === '/' ? A : A.slice(i.length) || '/',
      g = Bu({ path: f.relativePath, caseSensitive: f.caseSensitive, end: d }, s),
      S = f.route;
    if (
      (!g &&
        d &&
        b &&
        !E[E.length - 1].route.index &&
        (g = Bu({ path: f.relativePath, caseSensitive: f.caseSensitive, end: !1 }, s)),
      !g)
    )
      return null;
    (Object.assign(h, g.params),
      c.push({
        params: h,
        pathname: Yt([i, g.pathname]),
        pathnameBase: ng(Yt([i, g.pathnameBase])),
        route: S,
      }),
      g.pathnameBase !== '/' && (i = Yt([i, g.pathnameBase])));
  }
  return c;
}
function Bu(o, A) {
  typeof o == 'string' && (o = { path: o, caseSensitive: !1, end: !0 });
  let [b, E] = I0(o.path, o.caseSensitive, o.end),
    h = A.match(b);
  if (!h) return null;
  let i = h[0],
    c = i.replace(/(.)\/+$/, '$1'),
    m = h.slice(1);
  return {
    params: E.reduce((d, { paramName: s, isOptional: g }, S) => {
      if (s === '*') {
        let y = m[S] || '';
        c = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const r = m[S];
      return (g && !r ? (d[s] = void 0) : (d[s] = (r || '').replace(/%2F/g, '/')), d);
    }, {}),
    pathname: i,
    pathnameBase: c,
    pattern: o,
  };
}
function I0(o, A = !1, b = !0) {
  Qt(
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
        .replace(/\/:([\w-]+)(\?)?/g, (c, m, f, d, s) => {
          if ((E.push({ paramName: m, isOptional: f != null }), f)) {
            let g = s.charAt(d + c.length);
            return g && g !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    o.endsWith('*')
      ? (E.push({ paramName: '*' }), (h += o === '*' || o === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : b
        ? (h += '\\/*$')
        : o !== '' && o !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, A ? void 0 : 'i'), E]
  );
}
function eg(o) {
  try {
    return o
      .split('/')
      .map((A) => decodeURIComponent(A).replace(/\//g, '%2F'))
      .join('/');
  } catch (A) {
    return (
      Qt(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${A}).`
      ),
      o
    );
  }
}
function cl(o, A) {
  if (A === '/') return o;
  if (!o.toLowerCase().startsWith(A.toLowerCase())) return null;
  let b = A.endsWith('/') ? A.length - 1 : A.length,
    E = o.charAt(b);
  return E && E !== '/' ? null : o.slice(b) || '/';
}
var tg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function lg(o, A = '/') {
  let { pathname: b, search: E = '', hash: h = '' } = typeof o == 'string' ? ka(o) : o,
    i;
  return (
    b ? ((b = Zv(b)), b.startsWith('/') ? (i = Uv(b.substring(1), '/')) : (i = Uv(b, A))) : (i = A),
    { pathname: i, search: ig(E), hash: ug(h) }
  );
}
function Uv(o, A) {
  let b = Uu(A).split('/');
  return (
    o.split('/').forEach((h) => {
      h === '..' ? b.length > 1 && b.pop() : h !== '.' && b.push(h);
    }),
    b.length > 1 ? b.join('/') : '/'
  );
}
function es(o, A, b, E) {
  return `Cannot include a '${o}' character in a manually specified \`to.${A}\` field [${JSON.stringify(E)}].  Please separate it out to the \`to.${b}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ag(o) {
  return o.filter((A, b) => b === 0 || (A.route.path && A.route.path.length > 0));
}
function Qv(o) {
  let A = ag(o);
  return A.map((b, E) => (E === A.length - 1 ? b.pathname : b.pathnameBase));
}
function os(o, A, b, E = !1) {
  let h;
  typeof o == 'string'
    ? (h = ka(o))
    : ((h = { ...o }),
      Le(!h.pathname || !h.pathname.includes('?'), es('?', 'pathname', 'search', h)),
      Le(!h.pathname || !h.pathname.includes('#'), es('#', 'pathname', 'hash', h)),
      Le(!h.search || !h.search.includes('#'), es('#', 'search', 'hash', h)));
  let i = o === '' || h.pathname === '',
    c = i ? '/' : h.pathname,
    m;
  if (c == null) m = b;
  else {
    let g = A.length - 1;
    if (!E && c.startsWith('..')) {
      let S = c.split('/');
      for (; S[0] === '..'; ) (S.shift(), (g -= 1));
      h.pathname = S.join('/');
    }
    m = g >= 0 ? A[g] : '/';
  }
  let f = lg(h, m),
    d = c && c !== '/' && c.endsWith('/'),
    s = (i || c === '.') && b.endsWith('/');
  return (!f.pathname.endsWith('/') && (d || s) && (f.pathname += '/'), f);
}
var Zv = (o) => o.replace(/\/\/+/g, '/'),
  Yt = (o) => Zv(o.join('/')),
  Uu = (o) => o.replace(/\/+$/, ''),
  ng = (o) => Uu(o).replace(/^\/*/, '/'),
  ig = (o) => (!o || o === '?' ? '' : o.startsWith('?') ? o : '?' + o),
  ug = (o) => (!o || o === '#' ? '' : o.startsWith('#') ? o : '#' + o),
  rg = class {
    constructor(o, A, b, E = !1) {
      ((this.status = o),
        (this.statusText = A || ''),
        (this.internal = E),
        b instanceof Error ? ((this.data = b.toString()), (this.error = b)) : (this.data = b));
    }
  };
function fg(o) {
  return (
    o != null &&
    typeof o.status == 'number' &&
    typeof o.statusText == 'string' &&
    typeof o.internal == 'boolean' &&
    'data' in o
  );
}
function sg(o) {
  let A = o.map((b) => b.route.path).filter(Boolean);
  return Yt(A) || '/';
}
var Kv =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Jv(o, A) {
  let b = o;
  if (typeof b != 'string' || !tg.test(b)) return { absoluteURL: void 0, isExternal: !1, to: b };
  let E = b,
    h = !1;
  if (Kv)
    try {
      let i = new URL(window.location.href),
        c = b.startsWith('//') ? new URL(i.protocol + b) : new URL(b),
        m = cl(c.pathname, A);
      c.origin === i.origin && m != null ? (b = m + c.search + c.hash) : (h = !0);
    } catch {
      Qt(
        !1,
        `<Link to="${b}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: E, isExternal: h, to: b };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Fv = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Fv);
var og = ['GET', ...Fv];
new Set(og);
var Pa = Q.createContext(null);
Pa.displayName = 'DataRouter';
var Nu = Q.createContext(null);
Nu.displayName = 'DataRouterState';
var $v = Q.createContext(!1);
function cg() {
  return Q.useContext($v);
}
var Wv = Q.createContext({ isTransitioning: !1 });
Wv.displayName = 'ViewTransition';
var dg = Q.createContext(new Map());
dg.displayName = 'Fetchers';
var vg = Q.createContext(null);
vg.displayName = 'Await';
var _t = Q.createContext(null);
_t.displayName = 'Navigation';
var In = Q.createContext(null);
In.displayName = 'Location';
var dl = Q.createContext({ outlet: null, matches: [], isDataRoute: !1 });
dl.displayName = 'Route';
var cs = Q.createContext(null);
cs.displayName = 'RouteError';
var kv = 'REACT_ROUTER_ERROR',
  mg = 'REDIRECT',
  hg = 'ROUTE_ERROR_RESPONSE';
function gg(o) {
  if (o.startsWith(`${kv}:${mg}:{`))
    try {
      let A = JSON.parse(o.slice(28));
      if (
        typeof A == 'object' &&
        A &&
        typeof A.status == 'number' &&
        typeof A.statusText == 'string' &&
        typeof A.location == 'string' &&
        typeof A.reloadDocument == 'boolean' &&
        typeof A.replace == 'boolean'
      )
        return A;
    } catch {}
}
function yg(o) {
  if (o.startsWith(`${kv}:${hg}:{`))
    try {
      let A = JSON.parse(o.slice(40));
      if (
        typeof A == 'object' &&
        A &&
        typeof A.status == 'number' &&
        typeof A.statusText == 'string'
      )
        return new rg(A.status, A.statusText, A.data);
    } catch {}
}
function pg(o, { relative: A } = {}) {
  Le(ei(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: b, navigator: E } = Q.useContext(_t),
    { hash: h, pathname: i, search: c } = ti(o, { relative: A }),
    m = i;
  return (
    b !== '/' && (m = i === '/' ? b : Yt([b, i])),
    E.createHref({ pathname: m, search: c, hash: h })
  );
}
function ei() {
  return Q.useContext(In) != null;
}
function vl() {
  return (
    Le(ei(), 'useLocation() may be used only in the context of a <Router> component.'),
    Q.useContext(In).location
  );
}
var Pv =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Iv(o) {
  Q.useContext(_t).static || Q.useLayoutEffect(o);
}
function Sg() {
  let { isDataRoute: o } = Q.useContext(dl);
  return o ? Ug() : xg();
}
function xg() {
  Le(ei(), 'useNavigate() may be used only in the context of a <Router> component.');
  let o = Q.useContext(Pa),
    { basename: A, navigator: b } = Q.useContext(_t),
    { matches: E } = Q.useContext(dl),
    { pathname: h } = vl(),
    i = JSON.stringify(Qv(E)),
    c = Q.useRef(!1);
  return (
    Iv(() => {
      c.current = !0;
    }),
    Q.useCallback(
      (f, d = {}) => {
        if ((Qt(c.current, Pv), !c.current)) return;
        if (typeof f == 'number') {
          b.go(f);
          return;
        }
        let s = os(f, JSON.parse(i), h, d.relative === 'path');
        (o == null && A !== '/' && (s.pathname = s.pathname === '/' ? A : Yt([A, s.pathname])),
          (d.replace ? b.replace : b.push)(s, d.state, d));
      },
      [A, b, i, h, o]
    )
  );
}
Q.createContext(null);
function ti(o, { relative: A } = {}) {
  let { matches: b } = Q.useContext(dl),
    { pathname: E } = vl(),
    h = JSON.stringify(Qv(b));
  return Q.useMemo(() => os(o, JSON.parse(h), E, A === 'path'), [o, h, E, A]);
}
function Eg(o, A) {
  return em(o, A);
}
function em(o, A, b) {
  var x;
  Le(ei(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: E } = Q.useContext(_t),
    { matches: h } = Q.useContext(dl),
    i = h[h.length - 1],
    c = i ? i.params : {},
    m = i ? i.pathname : '/',
    f = i ? i.pathnameBase : '/',
    d = i && i.route;
  {
    let C = (d && d.path) || '';
    lm(
      m,
      !d || C.endsWith('*') || C.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === '/' ? '*' : `${C}/*`}">.`
    );
  }
  let s = vl(),
    g;
  if (A) {
    let C = typeof A == 'string' ? ka(A) : A;
    (Le(
      f === '/' || ((x = C.pathname) == null ? void 0 : x.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ),
      (g = C));
  } else g = s;
  let S = g.pathname || '/',
    r = S;
  if (f !== '/') {
    let C = f.replace(/^\//, '').split('/');
    r = '/' + S.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let y = Vv(o, { pathname: r });
  (Qt(d || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    Qt(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = Cg(
    y &&
      y.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, c, C.params),
          pathname: Yt([
            f,
            E.encodeLocation
              ? E.encodeLocation(
                  C.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === '/'
              ? f
              : Yt([
                  f,
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
    b
  );
  return A && v
    ? Q.createElement(
        In.Provider,
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
function Tg() {
  let o = Bg(),
    A = fg(o) ? `${o.status} ${o.statusText}` : o instanceof Error ? o.message : JSON.stringify(o),
    b = o instanceof Error ? o.stack : null,
    E = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: E },
    i = { padding: '2px 4px', backgroundColor: E },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', o),
    (c = Q.createElement(
      Q.Fragment,
      null,
      Q.createElement('p', null, '💿 Hey developer 👋'),
      Q.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        Q.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        Q.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    Q.createElement(
      Q.Fragment,
      null,
      Q.createElement('h2', null, 'Unexpected Application Error!'),
      Q.createElement('h3', { style: { fontStyle: 'italic' } }, A),
      b ? Q.createElement('pre', { style: h }, b) : null,
      c
    )
  );
}
var bg = Q.createElement(Tg, null),
  tm = class extends Q.Component {
    constructor(o) {
      (super(o),
        (this.state = { location: o.location, revalidation: o.revalidation, error: o.error }));
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, A) {
      return A.location !== o.location || (A.revalidation !== 'idle' && o.revalidation === 'idle')
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : A.error,
            location: A.location,
            revalidation: o.revalidation || A.revalidation,
          };
    }
    componentDidCatch(o, A) {
      this.props.onError
        ? this.props.onError(o, A)
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
        const b = yg(o.digest);
        b && (o = b);
      }
      let A =
        o !== void 0
          ? Q.createElement(
              dl.Provider,
              { value: this.props.routeContext },
              Q.createElement(cs.Provider, { value: o, children: this.props.component })
            )
          : this.props.children;
      return this.context ? Q.createElement(Mg, { error: o }, A) : A;
    }
  };
tm.contextType = $v;
var ts = new WeakMap();
function Mg({ children: o, error: A }) {
  let { basename: b } = Q.useContext(_t);
  if (typeof A == 'object' && A && 'digest' in A && typeof A.digest == 'string') {
    let E = gg(A.digest);
    if (E) {
      let h = ts.get(A);
      if (h) throw h;
      let i = Jv(E.location, b);
      if (Kv && !ts.get(A))
        if (i.isExternal || E.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: E.replace })
          );
          throw (ts.set(A, c), c);
        }
      return Q.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return o;
}
function Ag({ routeContext: o, match: A, children: b }) {
  let E = Q.useContext(Pa);
  return (
    E &&
      E.static &&
      E.staticContext &&
      (A.route.errorElement || A.route.ErrorBoundary) &&
      (E.staticContext._deepestRenderedBoundaryId = A.route.id),
    Q.createElement(dl.Provider, { value: o }, b)
  );
}
function Cg(o, A = [], b) {
  let E = b == null ? void 0 : b.state;
  if (o == null) {
    if (!E) return null;
    if (E.errors) o = E.matches;
    else if (A.length === 0 && !E.initialized && E.matches.length > 0) o = E.matches;
    else return null;
  }
  let h = o,
    i = E == null ? void 0 : E.errors;
  if (i != null) {
    let s = h.findIndex((g) => g.route.id && (i == null ? void 0 : i[g.route.id]) !== void 0);
    (Le(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (h = h.slice(0, Math.min(h.length, s + 1))));
  }
  let c = !1,
    m = -1;
  if (b && E) {
    c = E.renderFallback;
    for (let s = 0; s < h.length; s++) {
      let g = h[s];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = s), g.route.id)) {
        let { loaderData: S, errors: r } = E,
          y = g.route.loader && !S.hasOwnProperty(g.route.id) && (!r || r[g.route.id] === void 0);
        if (g.route.lazy || y) {
          (b.isStatic && (c = !0), m >= 0 ? (h = h.slice(0, m + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  }
  let f = b == null ? void 0 : b.onError,
    d =
      E && f
        ? (s, g) => {
            var S, r;
            f(s, {
              location: E.location,
              params:
                ((r = (S = E.matches) == null ? void 0 : S[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: sg(E.matches),
              errorInfo: g,
            });
          }
        : void 0;
  return h.reduceRight((s, g, S) => {
    let r,
      y = !1,
      v = null,
      x = null;
    E &&
      ((r = i && g.route.id ? i[g.route.id] : void 0),
      (v = g.route.errorElement || bg),
      c &&
        (m < 0 && S === 0
          ? (lm(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (x = null))
          : m === S && ((y = !0), (x = g.route.hydrateFallbackElement || null))));
    let C = A.concat(h.slice(0, S + 1)),
      O = () => {
        let U;
        return (
          r
            ? (U = v)
            : y
              ? (U = x)
              : g.route.Component
                ? (U = Q.createElement(g.route.Component, null))
                : g.route.element
                  ? (U = g.route.element)
                  : (U = s),
          Q.createElement(Ag, {
            match: g,
            routeContext: { outlet: s, matches: C, isDataRoute: E != null },
            children: U,
          })
        );
      };
    return E && (g.route.ErrorBoundary || g.route.errorElement || S === 0)
      ? Q.createElement(tm, {
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
function ds(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rg(o) {
  let A = Q.useContext(Pa);
  return (Le(A, ds(o)), A);
}
function zg(o) {
  let A = Q.useContext(Nu);
  return (Le(A, ds(o)), A);
}
function Dg(o) {
  let A = Q.useContext(dl);
  return (Le(A, ds(o)), A);
}
function vs(o) {
  let A = Dg(o),
    b = A.matches[A.matches.length - 1];
  return (Le(b.route.id, `${o} can only be used on routes that contain a unique "id"`), b.route.id);
}
function Og() {
  return vs('useRouteId');
}
function Bg() {
  var E;
  let o = Q.useContext(cs),
    A = zg('useRouteError'),
    b = vs('useRouteError');
  return o !== void 0 ? o : (E = A.errors) == null ? void 0 : E[b];
}
function Ug() {
  let { router: o } = Rg('useNavigate'),
    A = vs('useNavigate'),
    b = Q.useRef(!1);
  return (
    Iv(() => {
      b.current = !0;
    }),
    Q.useCallback(
      async (h, i = {}) => {
        (Qt(b.current, Pv),
          b.current &&
            (typeof h == 'number'
              ? await o.navigate(h)
              : await o.navigate(h, { fromRouteId: A, ...i })));
      },
      [o, A]
    )
  );
}
var Nv = {};
function lm(o, A, b) {
  !A && !Nv[o] && ((Nv[o] = !0), Qt(!1, b));
}
Q.memo(Ng);
function Ng({ routes: o, future: A, state: b, isStatic: E, onError: h }) {
  return em(o, void 0, { state: b, isStatic: E, onError: h });
}
function rs(o) {
  Le(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function _g({
  basename: o = '/',
  children: A = null,
  location: b,
  navigationType: E = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: c,
}) {
  Le(
    !ei(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let m = o.replace(/^\/*/, '/'),
    f = Q.useMemo(
      () => ({ basename: m, navigator: h, static: i, unstable_useTransitions: c, future: {} }),
      [m, h, i, c]
    );
  typeof b == 'string' && (b = ka(b));
  let {
      pathname: d = '/',
      search: s = '',
      hash: g = '',
      state: S = null,
      key: r = 'default',
      unstable_mask: y,
    } = b,
    v = Q.useMemo(() => {
      let x = cl(d, m);
      return x == null
        ? null
        : {
            location: { pathname: x, search: s, hash: g, state: S, key: r, unstable_mask: y },
            navigationType: E,
          };
    }, [m, d, s, g, S, r, E, y]);
  return (
    Qt(
      v != null,
      `<Router basename="${m}"> is not able to match the URL "${d}${s}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : Q.createElement(
          _t.Provider,
          { value: f },
          Q.createElement(In.Provider, { children: A, value: v })
        )
  );
}
function Hg({ children: o, location: A }) {
  return Eg(fs(o), A);
}
function fs(o, A = []) {
  let b = [];
  return (
    Q.Children.forEach(o, (E, h) => {
      if (!Q.isValidElement(E)) return;
      let i = [...A, h];
      if (E.type === Q.Fragment) {
        b.push.apply(b, fs(E.props.children, i));
        return;
      }
      (Le(
        E.type === rs,
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
      (E.props.children && (c.children = fs(E.props.children, i)), b.push(c));
    }),
    b
  );
}
var zu = 'get',
  Du = 'application/x-www-form-urlencoded';
function _u(o) {
  return typeof HTMLElement < 'u' && o instanceof HTMLElement;
}
function wg(o) {
  return _u(o) && o.tagName.toLowerCase() === 'button';
}
function Lg(o) {
  return _u(o) && o.tagName.toLowerCase() === 'form';
}
function Yg(o) {
  return _u(o) && o.tagName.toLowerCase() === 'input';
}
function Gg(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function jg(o, A) {
  return o.button === 0 && (!A || A === '_self') && !Gg(o);
}
var Au = null;
function Vg() {
  if (Au === null)
    try {
      (new FormData(document.createElement('form'), 0), (Au = !1));
    } catch {
      Au = !0;
    }
  return Au;
}
var qg = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function ls(o) {
  return o != null && !qg.has(o)
    ? (Qt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`
      ),
      null)
    : o;
}
function Xg(o, A) {
  let b, E, h, i, c;
  if (Lg(o)) {
    let m = o.getAttribute('action');
    ((E = m ? cl(m, A) : null),
      (b = o.getAttribute('method') || zu),
      (h = ls(o.getAttribute('enctype')) || Du),
      (i = new FormData(o)));
  } else if (wg(o) || (Yg(o) && (o.type === 'submit' || o.type === 'image'))) {
    let m = o.form;
    if (m == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = o.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((E = f ? cl(f, A) : null),
      (b = o.getAttribute('formmethod') || m.getAttribute('method') || zu),
      (h = ls(o.getAttribute('formenctype')) || ls(m.getAttribute('enctype')) || Du),
      (i = new FormData(m, o)),
      !Vg())
    ) {
      let { name: d, type: s, value: g } = o;
      if (s === 'image') {
        let S = d ? `${d}.` : '';
        (i.append(`${S}x`, '0'), i.append(`${S}y`, '0'));
      } else d && i.append(d, g);
    }
  } else {
    if (_u(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((b = zu), (E = null), (h = Du), (c = o));
  }
  return (
    i && h === 'text/plain' && ((c = i), (i = void 0)),
    { action: E, method: b.toLowerCase(), encType: h, formData: i, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ms(o, A) {
  if (o === !1 || o === null || typeof o > 'u') throw new Error(A);
}
function am(o, A, b, E) {
  let h =
    typeof o == 'string'
      ? new URL(o, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : o;
  return (
    b
      ? h.pathname.endsWith('/')
        ? (h.pathname = `${h.pathname}_.${E}`)
        : (h.pathname = `${h.pathname}.${E}`)
      : h.pathname === '/'
        ? (h.pathname = `_root.${E}`)
        : A && cl(h.pathname, A) === '/'
          ? (h.pathname = `${Uu(A)}/_root.${E}`)
          : (h.pathname = `${Uu(h.pathname)}.${E}`),
    h
  );
}
async function Qg(o, A) {
  if (o.id in A) return A[o.id];
  try {
    let b = await import(o.module);
    return ((A[o.id] = b), b);
  } catch (b) {
    return (
      console.error(`Error loading route module \`${o.module}\`, reloading page...`),
      console.error(b),
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
async function Kg(o, A, b) {
  let E = await Promise.all(
    o.map(async (h) => {
      let i = A.routes[h.route.id];
      if (i) {
        let c = await Qg(i, b);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Wg(
    E.flat(1)
      .filter(Zg)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function _v(o, A, b, E, h, i) {
  let c = (f, d) => (b[d] ? f.route.id !== b[d].route.id : !0),
    m = (f, d) => {
      var s;
      return (
        b[d].pathname !== f.pathname ||
        (((s = b[d].route.path) == null ? void 0 : s.endsWith('*')) &&
          b[d].params['*'] !== f.params['*'])
      );
    };
  return i === 'assets'
    ? A.filter((f, d) => c(f, d) || m(f, d))
    : i === 'data'
      ? A.filter((f, d) => {
          var g;
          let s = E.routes[f.route.id];
          if (!s || !s.hasLoader) return !1;
          if (c(f, d) || m(f, d)) return !0;
          if (f.route.shouldRevalidate) {
            let S = f.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((g = b[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(o, window.origin),
              nextParams: f.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function Jg(o, A, { includeHydrateFallback: b } = {}) {
  return Fg(
    o
      .map((E) => {
        let h = A.routes[E.route.id];
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
function Fg(o) {
  return [...new Set(o)];
}
function $g(o) {
  let A = {},
    b = Object.keys(o).sort();
  for (let E of b) A[E] = o[E];
  return A;
}
function Wg(o, A) {
  let b = new Set();
  return (
    new Set(A),
    o.reduce((E, h) => {
      let i = JSON.stringify($g(h));
      return (b.has(i) || (b.add(i), E.push({ key: i, link: h })), E);
    }, [])
  );
}
function hs() {
  let o = Q.useContext(Pa);
  return (ms(o, 'You must render this element inside a <DataRouterContext.Provider> element'), o);
}
function kg() {
  let o = Q.useContext(Nu);
  return (
    ms(o, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    o
  );
}
var gs = Q.createContext(void 0);
gs.displayName = 'FrameworkContext';
function ys() {
  let o = Q.useContext(gs);
  return (ms(o, 'You must render this element inside a <HydratedRouter> element'), o);
}
function Pg(o, A) {
  let b = Q.useContext(gs),
    [E, h] = Q.useState(!1),
    [i, c] = Q.useState(!1),
    { onFocus: m, onBlur: f, onMouseEnter: d, onMouseLeave: s, onTouchStart: g } = A,
    S = Q.useRef(null);
  (Q.useEffect(() => {
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
    Q.useEffect(() => {
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
  return b
    ? o !== 'intent'
      ? [i, S, {}]
      : [
          i,
          S,
          {
            onFocus: $n(m, r),
            onBlur: $n(f, y),
            onMouseEnter: $n(d, r),
            onMouseLeave: $n(s, y),
            onTouchStart: $n(g, r),
          },
        ]
    : [!1, S, {}];
}
function $n(o, A) {
  return (b) => {
    (o && o(b), b.defaultPrevented || A(b));
  };
}
function Ig({ page: o, ...A }) {
  let b = cg(),
    { router: E } = hs(),
    h = Q.useMemo(() => Vv(E.routes, o, E.basename), [E.routes, o, E.basename]);
  return h
    ? b
      ? Q.createElement(ty, { page: o, matches: h, ...A })
      : Q.createElement(ly, { page: o, matches: h, ...A })
    : null;
}
function ey(o) {
  let { manifest: A, routeModules: b } = ys(),
    [E, h] = Q.useState([]);
  return (
    Q.useEffect(() => {
      let i = !1;
      return (
        Kg(o, A, b).then((c) => {
          i || h(c);
        }),
        () => {
          i = !0;
        }
      );
    }, [o, A, b]),
    E
  );
}
function ty({ page: o, matches: A, ...b }) {
  let E = vl(),
    { future: h } = ys(),
    { basename: i } = hs(),
    c = Q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let m = am(o, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        f = !1,
        d = [];
      for (let s of A)
        typeof s.route.shouldRevalidate == 'function' ? (f = !0) : d.push(s.route.id);
      return (
        f && d.length > 0 && m.searchParams.set('_routes', d.join(',')),
        [m.pathname + m.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, o, E, A]);
  return Q.createElement(
    Q.Fragment,
    null,
    c.map((m) => Q.createElement('link', { key: m, rel: 'prefetch', as: 'fetch', href: m, ...b }))
  );
}
function ly({ page: o, matches: A, ...b }) {
  let E = vl(),
    { future: h, manifest: i, routeModules: c } = ys(),
    { basename: m } = hs(),
    { loaderData: f, matches: d } = kg(),
    s = Q.useMemo(() => _v(o, A, d, i, E, 'data'), [o, A, d, i, E]),
    g = Q.useMemo(() => _v(o, A, d, i, E, 'assets'), [o, A, d, i, E]),
    S = Q.useMemo(() => {
      if (o === E.pathname + E.search + E.hash) return [];
      let v = new Set(),
        x = !1;
      if (
        (A.forEach((O) => {
          var Y;
          let U = i.routes[O.route.id];
          !U ||
            !U.hasLoader ||
            ((!s.some((T) => T.route.id === O.route.id) &&
              O.route.id in f &&
              (Y = c[O.route.id]) != null &&
              Y.shouldRevalidate) ||
            U.hasClientLoader
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
            A.filter((O) => v.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [m, h.unstable_trailingSlashAwareDataRequests, f, E, i, s, A, o, c]),
    r = Q.useMemo(() => Jg(g, i), [g, i]),
    y = ey(g);
  return Q.createElement(
    Q.Fragment,
    null,
    S.map((v) => Q.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...b })),
    r.map((v) => Q.createElement('link', { key: v, rel: 'modulepreload', href: v, ...b })),
    y.map(({ key: v, link: x }) =>
      Q.createElement('link', {
        key: v,
        nonce: b.nonce,
        ...x,
        crossOrigin: x.crossOrigin ?? b.crossOrigin,
      })
    )
  );
}
function ay(...o) {
  return (A) => {
    o.forEach((b) => {
      typeof b == 'function' ? b(A) : b != null && (b.current = A);
    });
  };
}
var ny =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  ny && (window.__reactRouterVersion = '7.14.2');
} catch {}
function iy({ basename: o, children: A, unstable_useTransitions: b, window: E }) {
  let h = Q.useRef();
  h.current == null && (h.current = Y0({ window: E, v5Compat: !0 }));
  let i = h.current,
    [c, m] = Q.useState({ action: i.action, location: i.location }),
    f = Q.useCallback(
      (d) => {
        b === !1 ? m(d) : Q.startTransition(() => m(d));
      },
      [b]
    );
  return (
    Q.useLayoutEffect(() => i.listen(f), [i, f]),
    Q.createElement(_g, {
      basename: o,
      children: A,
      location: c.location,
      navigationType: c.action,
      navigator: i,
      unstable_useTransitions: b,
    })
  );
}
var nm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  im = Q.forwardRef(function (
    {
      onClick: A,
      discover: b = 'render',
      prefetch: E = 'none',
      relative: h,
      reloadDocument: i,
      replace: c,
      unstable_mask: m,
      state: f,
      target: d,
      to: s,
      preventScrollReset: g,
      viewTransition: S,
      unstable_defaultShouldRevalidate: r,
      ...y
    },
    v
  ) {
    let { basename: x, navigator: C, unstable_useTransitions: O } = Q.useContext(_t),
      U = typeof s == 'string' && nm.test(s),
      Y = Jv(s, x);
    s = Y.to;
    let T = pg(s, { relative: h }),
      z = vl(),
      D = null;
    if (m) {
      let P = os(m, [], z.unstable_mask ? z.unstable_mask.pathname : '/', !0);
      (x !== '/' && (P.pathname = P.pathname === '/' ? x : Yt([x, P.pathname])),
        (D = C.createHref(P)));
    }
    let [R, N, B] = Pg(E, y),
      w = sy(s, {
        replace: c,
        unstable_mask: m,
        state: f,
        target: d,
        preventScrollReset: g,
        relative: h,
        viewTransition: S,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function H(P) {
      (A && A(P), P.defaultPrevented || w(P));
    }
    let K = !(Y.isExternal || i),
      ee = Q.createElement('a', {
        ...y,
        ...B,
        href: (K ? D : void 0) || Y.absoluteURL || T,
        onClick: K ? H : A,
        ref: ay(v, N),
        target: d,
        'data-discover': !U && b === 'render' ? 'true' : void 0,
      });
    return R && !U ? Q.createElement(Q.Fragment, null, ee, Q.createElement(Ig, { page: T })) : ee;
  });
im.displayName = 'Link';
var uy = Q.forwardRef(function (
  {
    'aria-current': A = 'page',
    caseSensitive: b = !1,
    className: E = '',
    end: h = !1,
    style: i,
    to: c,
    viewTransition: m,
    children: f,
    ...d
  },
  s
) {
  let g = ti(c, { relative: d.relative }),
    S = vl(),
    r = Q.useContext(Nu),
    { navigator: y, basename: v } = Q.useContext(_t),
    x = r != null && my(g) && m === !0,
    C = y.encodeLocation ? y.encodeLocation(g).pathname : g.pathname,
    O = S.pathname,
    U = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (b || ((O = O.toLowerCase()), (U = U ? U.toLowerCase() : null), (C = C.toLowerCase())),
    U && v && (U = cl(U, v) || U));
  const Y = C !== '/' && C.endsWith('/') ? C.length - 1 : C.length;
  let T = O === C || (!h && O.startsWith(C) && O.charAt(Y) === '/'),
    z = U != null && (U === C || (!h && U.startsWith(C) && U.charAt(C.length) === '/')),
    D = { isActive: T, isPending: z, isTransitioning: x },
    R = T ? A : void 0,
    N;
  typeof E == 'function'
    ? (N = E(D))
    : (N = [E, T ? 'active' : null, z ? 'pending' : null, x ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let B = typeof i == 'function' ? i(D) : i;
  return Q.createElement(
    im,
    { ...d, 'aria-current': R, className: N, ref: s, style: B, to: c, viewTransition: m },
    typeof f == 'function' ? f(D) : f
  );
});
uy.displayName = 'NavLink';
var ry = Q.forwardRef(
  (
    {
      discover: o = 'render',
      fetcherKey: A,
      navigate: b,
      reloadDocument: E,
      replace: h,
      state: i,
      method: c = zu,
      action: m,
      onSubmit: f,
      relative: d,
      preventScrollReset: s,
      viewTransition: g,
      unstable_defaultShouldRevalidate: S,
      ...r
    },
    y
  ) => {
    let { unstable_useTransitions: v } = Q.useContext(_t),
      x = dy(),
      C = vy(m, { relative: d }),
      O = c.toLowerCase() === 'get' ? 'get' : 'post',
      U = typeof m == 'string' && nm.test(m),
      Y = (T) => {
        if ((f && f(T), T.defaultPrevented)) return;
        T.preventDefault();
        let z = T.nativeEvent.submitter,
          D = (z == null ? void 0 : z.getAttribute('formmethod')) || c,
          R = () =>
            x(z || T.currentTarget, {
              fetcherKey: A,
              method: D,
              navigate: b,
              replace: h,
              state: i,
              relative: d,
              preventScrollReset: s,
              viewTransition: g,
              unstable_defaultShouldRevalidate: S,
            });
        v && b !== !1 ? Q.startTransition(() => R()) : R();
      };
    return Q.createElement('form', {
      ref: y,
      method: O,
      action: C,
      onSubmit: E ? f : Y,
      ...r,
      'data-discover': !U && o === 'render' ? 'true' : void 0,
    });
  }
);
ry.displayName = 'Form';
function fy(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function um(o) {
  let A = Q.useContext(Pa);
  return (Le(A, fy(o)), A);
}
function sy(
  o,
  {
    target: A,
    replace: b,
    unstable_mask: E,
    state: h,
    preventScrollReset: i,
    relative: c,
    viewTransition: m,
    unstable_defaultShouldRevalidate: f,
    unstable_useTransitions: d,
  } = {}
) {
  let s = Sg(),
    g = vl(),
    S = ti(o, { relative: c });
  return Q.useCallback(
    (r) => {
      if (jg(r, A)) {
        r.preventDefault();
        let y = b !== void 0 ? b : Pn(g) === Pn(S),
          v = () =>
            s(o, {
              replace: y,
              unstable_mask: E,
              state: h,
              preventScrollReset: i,
              relative: c,
              viewTransition: m,
              unstable_defaultShouldRevalidate: f,
            });
        d ? Q.startTransition(() => v()) : v();
      }
    },
    [g, s, S, b, E, h, A, o, i, c, m, f, d]
  );
}
var oy = 0,
  cy = () => `__${String(++oy)}__`;
function dy() {
  let { router: o } = um('useSubmit'),
    { basename: A } = Q.useContext(_t),
    b = Og(),
    E = o.fetch,
    h = o.navigate;
  return Q.useCallback(
    async (i, c = {}) => {
      let { action: m, method: f, encType: d, formData: s, body: g } = Xg(i, A);
      if (c.navigate === !1) {
        let S = c.fetcherKey || cy();
        await E(S, b, c.action || m, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: s,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || d,
          flushSync: c.flushSync,
        });
      } else
        await h(c.action || m, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: s,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || d,
          replace: c.replace,
          state: c.state,
          fromRouteId: b,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [E, h, A, b]
  );
}
function vy(o, { relative: A } = {}) {
  let { basename: b } = Q.useContext(_t),
    E = Q.useContext(dl);
  Le(E, 'useFormAction must be used inside a RouteContext');
  let [h] = E.matches.slice(-1),
    i = { ...ti(o || '.', { relative: A }) },
    c = vl();
  if (o == null) {
    i.search = c.search;
    let m = new URLSearchParams(i.search),
      f = m.getAll('index');
    if (f.some((s) => s === '')) {
      (m.delete('index'), f.filter((g) => g).forEach((g) => m.append('index', g)));
      let s = m.toString();
      i.search = s ? `?${s}` : '';
    }
  }
  return (
    (!o || o === '.') &&
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    b !== '/' && (i.pathname = i.pathname === '/' ? b : Yt([b, i.pathname])),
    Pn(i)
  );
}
function my(o, { relative: A } = {}) {
  let b = Q.useContext(Wv);
  Le(
    b != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: E } = um('useViewTransitionState'),
    h = ti(o, { relative: A });
  if (!b.isTransitioning) return !1;
  let i = cl(b.currentLocation.pathname, E) || b.currentLocation.pathname,
    c = cl(b.nextLocation.pathname, E) || b.nextLocation.pathname;
  return Bu(h.pathname, c) != null || Bu(h.pathname, i) != null;
}
const hy = '_index_r8hfh_1',
  gy = { index: hy },
  yy = '_layout_8uopd_1',
  py = '_main_8uopd_9',
  Sy = '_field_wrapper_8uopd_17',
  as = { layout: yy, main: py, field_wrapper: Sy },
  xy = '_surface_lbcvb_1',
  Ey = '_canvas_layer_lbcvb_12',
  Ty = '_game_over_line_lbcvb_23',
  ns = { surface: xy, canvas_layer: Ey, game_over_line: Ty },
  by = '_layer_z1h0v_1',
  My = '_effect_z1h0v_7',
  Ay = '_ring_z1h0v_12',
  Cy = '_score_z1h0v_24',
  Ry = '_special_z1h0v_36',
  Wn = { layer: by, effect: My, ring: Ay, score: Cy, special: Ry },
  zy = ({ effects: o }) =>
    ie.jsx('div', {
      className: Wn.layer,
      'aria-hidden': 'true',
      children: o.map((A) =>
        ie.jsxs(
          'div',
          {
            className: `${Wn.effect} ${A.isSpecial ? Wn.special : ''}`,
            style: { left: `${A.x}px`, top: `${A.y}px` },
            children: [
              ie.jsx('span', { className: Wn.ring }),
              A.score > 0
                ? ie.jsxs('span', { className: Wn.score, children: ['+', A.score] })
                : null,
            ],
          },
          A.id
        )
      ),
    }),
  Dy = '_line_1ia7c_1',
  Oy = '_preview_1ia7c_9',
  Hv = { line: Dy, preview: Oy },
  By = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  Uy = ({ x: o, fieldHeight: A, item: b }) => {
    if (!b) return null;
    const E = b.radius * 2;
    return ie.jsxs(ie.Fragment, {
      children: [
        ie.jsx('div', {
          className: Hv.line,
          style: { left: `${o}px`, height: `${A}px` },
          'aria-hidden': 'true',
        }),
        ie.jsx('img', {
          src: By(b.svgPath),
          alt: '',
          'aria-hidden': 'true',
          className: Hv.preview,
          style: { left: `${o - b.radius}px`, width: `${E}px`, height: `${E}px` },
        }),
      ],
    });
  },
  Ny = (o) => Math.max(0, Math.min(1, o)),
  _y = ({
    canvasContainerRef: o,
    fieldWidth: A,
    fieldHeight: b,
    gameOverLineY: E,
    currentItem: h,
    mergeEffects: i,
    canInteract: c,
    onDrop: m,
  }) => {
    const f = Q.useRef(null),
      [d, s] = Q.useState(0.5),
      g = Q.useCallback((x) => {
        const C = f.current;
        if (!C) return;
        const O = C.getBoundingClientRect(),
          U = Ny((x - O.left) / O.width);
        s(U);
      }, []);
    Q.useEffect(() => {
      s(0.5);
    }, [h == null ? void 0 : h.level]);
    const S = (x) => {
        var C;
        c && (g(x.clientX), (C = f.current) == null || C.setPointerCapture(x.pointerId));
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
        c && (g(x.clientX), m(d), (C = f.current) == null || C.releasePointerCapture(x.pointerId));
      },
      v = h ? Math.max(h.radius, Math.min(A - h.radius, d * A)) : d * A;
    return ie.jsxs('div', {
      ref: f,
      className: ns.surface,
      style: { width: `${A}px`, height: `${b}px` },
      onPointerDown: S,
      onPointerMove: r,
      onPointerUp: y,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        ie.jsx('div', { ref: o, className: ns.canvas_layer }),
        ie.jsx('div', {
          className: ns.game_over_line,
          style: { top: `${E}px` },
          'aria-hidden': 'true',
        }),
        c ? ie.jsx(Uy, { x: v, fieldHeight: b, item: h }) : null,
        ie.jsx(zy, { effects: i }),
      ],
    });
  },
  Hy = '_overlay_o79hb_1',
  wy = '_panel_o79hb_13',
  Ly = '_new_record_o79hb_24',
  Yy = '_title_o79hb_32',
  Gy = '_scores_o79hb_40',
  jy = '_row_o79hb_46',
  Vy = '_gold_o79hb_64',
  qy = '_restart_o79hb_69',
  ol = {
    overlay: Hy,
    panel: wy,
    new_record: Ly,
    title: Yy,
    scores: Gy,
    row: jy,
    gold: Vy,
    restart: qy,
  },
  Xy = ({ score: o, bestScore: A, isNewRecord: b, onRestart: E }) =>
    ie.jsx('div', {
      className: ol.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: ie.jsxs('div', {
        className: ol.panel,
        children: [
          b ? ie.jsx('p', { className: ol.new_record, children: '🎉 新記録！' }) : null,
          ie.jsx('h2', { className: ol.title, children: 'GAME OVER' }),
          ie.jsxs('dl', {
            className: ol.scores,
            children: [
              ie.jsxs('div', {
                className: ol.row,
                children: [
                  ie.jsx('dt', { children: 'スコア' }),
                  ie.jsx('dd', { className: b ? ol.gold : '', children: o }),
                ],
              }),
              ie.jsxs('div', {
                className: ol.row,
                children: [ie.jsx('dt', { children: 'ベスト' }), ie.jsx('dd', { children: A })],
              }),
            ],
          }),
          ie.jsx('button', {
            type: 'button',
            className: ol.restart,
            onClick: E,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Qy = '_overlay_1xsci_1',
  Zy = '_panel_1xsci_12',
  Ky = '_title_1xsci_22',
  Jy = '_lead_1xsci_30',
  Fy = '_start_1xsci_37',
  kn = { overlay: Qy, panel: Zy, title: Ky, lead: Jy, start: Fy },
  $y = ({ onStart: o }) =>
    ie.jsx('div', {
      className: kn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: ie.jsxs('div', {
        className: kn.panel,
        children: [
          ie.jsxs('h2', {
            className: kn.title,
            children: ['💖🍓🐱', ie.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          ie.jsxs('p', {
            className: kn.lead,
            children: [
              '同じアイテム同士をくっつけて',
              ie.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          ie.jsx('button', {
            type: 'button',
            className: kn.start,
            onClick: o,
            children: 'スタート',
          }),
        ],
      }),
    }),
  Wy = '_top_bar_14avc_1',
  ky = '_right_14avc_10',
  wv = { top_bar: Wy, right: ky },
  Py = '_next_1h3di_1',
  Iy = '_label_1h3di_7',
  ep = '_thumb_1h3di_14',
  tp = '_image_1h3di_26',
  Cu = { next: Py, label: Iy, thumb: ep, image: tp },
  lp = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  ap = ({ item: o }) =>
    ie.jsxs('div', {
      className: Cu.next,
      children: [
        ie.jsx('span', { className: Cu.label, children: 'NEXT' }),
        ie.jsx('div', {
          className: Cu.thumb,
          'data-testid': 'next-item',
          children: o
            ? ie.jsx('img', { src: lp(o.svgPath), alt: o.name, className: Cu.image })
            : null,
        }),
      ],
    }),
  np = '_score_display_pgke7_1',
  ip = '_row_pgke7_7',
  up = '_label_pgke7_13',
  rp = '_value_pgke7_20',
  fp = '_label_small_pgke7_28',
  sp = '_value_small_pgke7_35',
  ua = { score_display: np, row: ip, label: up, value: rp, label_small: fp, value_small: sp },
  op = ({ score: o, bestScore: A }) =>
    ie.jsxs('div', {
      className: ua.score_display,
      children: [
        ie.jsxs('div', {
          className: ua.row,
          children: [
            ie.jsx('span', { className: ua.label, children: 'SCORE' }),
            ie.jsx('span', { className: ua.value, 'data-testid': 'score-value', children: o }),
          ],
        }),
        ie.jsxs('div', {
          className: ua.row,
          children: [
            ie.jsx('span', { className: ua.label_small, children: 'BEST' }),
            ie.jsx('span', { className: ua.value_small, children: A }),
          ],
        }),
      ],
    }),
  cp = '_toggle_1ap46_1',
  dp = { toggle: cp },
  vp = ({ isOn: o, onToggle: A }) =>
    ie.jsx('button', {
      type: 'button',
      className: dp.toggle,
      onClick: A,
      'aria-label': o ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': o,
      children: ie.jsx('span', { 'aria-hidden': 'true', children: o ? '🔊' : '🔇' }),
    }),
  mp = ({ score: o, bestScore: A, nextItem: b, isSoundOn: E, onToggleSound: h }) =>
    ie.jsxs('header', {
      className: wv.top_bar,
      children: [
        ie.jsx(op, { score: o, bestScore: A }),
        ie.jsxs('div', {
          className: wv.right,
          children: [ie.jsx(ap, { item: b }), ie.jsx(vp, { isOn: E, onToggle: h })],
        }),
      ],
    });
var Ou = { exports: {} };
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
 */ var hp = Ou.exports,
  Lv;
function gp() {
  return (
    Lv ||
      ((Lv = 1),
      (function (o, A) {
        (function (E, h) {
          o.exports = h();
        })(hp, function () {
          return (function (b) {
            var E = {};
            function h(i) {
              if (E[i]) return E[i].exports;
              var c = (E[i] = { i, l: !1, exports: {} });
              return (b[i].call(c.exports, c, c.exports, h), (c.l = !0), c.exports);
            }
            return (
              (h.m = b),
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
                  for (var f in i)
                    h.d(
                      m,
                      f,
                      function (d) {
                        return i[d];
                      }.bind(null, f)
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
            function (b, E) {
              var h = {};
              ((b.exports = h),
                (function () {
                  ((h._baseDelta = 1e3 / 60),
                    (h._nextId = 0),
                    (h._seed = 0),
                    (h._nowStartTime = +new Date()),
                    (h._warnedOnce = {}),
                    (h._decomp = null),
                    (h.extend = function (c, m) {
                      var f, d;
                      typeof m == 'boolean' ? ((f = 2), (d = m)) : ((f = 1), (d = !0));
                      for (var s = f; s < arguments.length; s++) {
                        var g = arguments[s];
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
                      for (var f in c) m.push(f);
                      return m;
                    }),
                    (h.values = function (c) {
                      var m = [];
                      if (Object.keys) {
                        for (var f = Object.keys(c), d = 0; d < f.length; d++) m.push(c[f[d]]);
                        return m;
                      }
                      for (var s in c) m.push(c[s]);
                      return m;
                    }),
                    (h.get = function (c, m, f, d) {
                      m = m.split('.').slice(f, d);
                      for (var s = 0; s < m.length; s += 1) c = c[m[s]];
                      return c;
                    }),
                    (h.set = function (c, m, f, d, s) {
                      var g = m.split('.').slice(d, s);
                      return ((h.get(c, m, 0, -1)[g[g.length - 1]] = f), f);
                    }),
                    (h.shuffle = function (c) {
                      for (var m = c.length - 1; m > 0; m--) {
                        var f = Math.floor(h.random() * (m + 1)),
                          d = c[m];
                        ((c[m] = c[f]), (c[f] = d));
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
                    (h.clamp = function (c, m, f) {
                      return c < m ? m : c > f ? f : c;
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
                    (h.deprecated = function (c, m, f) {
                      c[m] = h.chain(function () {
                        h.warnOnce('🔅 deprecated 🔅', f);
                      }, c[m]);
                    }),
                    (h.nextId = function () {
                      return h._nextId++;
                    }),
                    (h.indexOf = function (c, m) {
                      if (c.indexOf) return c.indexOf(m);
                      for (var f = 0; f < c.length; f++) if (c[f] === m) return f;
                      return -1;
                    }),
                    (h.map = function (c, m) {
                      if (c.map) return c.map(m);
                      for (var f = [], d = 0; d < c.length; d += 1) f.push(m(c[d]));
                      return f;
                    }),
                    (h.topologicalSort = function (c) {
                      var m = [],
                        f = [],
                        d = [];
                      for (var s in c) !f[s] && !d[s] && h._topologicalSort(s, f, d, c, m);
                      return m;
                    }),
                    (h._topologicalSort = function (c, m, f, d, s) {
                      var g = d[c] || [];
                      f[c] = !0;
                      for (var S = 0; S < g.length; S += 1) {
                        var r = g[S];
                        f[r] || m[r] || h._topologicalSort(r, m, f, d, s);
                      }
                      ((f[c] = !1), (m[c] = !0), s.push(c));
                    }),
                    (h.chain = function () {
                      for (var c = [], m = 0; m < arguments.length; m += 1) {
                        var f = arguments[m];
                        f._chained ? c.push.apply(c, f._chained) : c.push(f);
                      }
                      var d = function () {
                        for (
                          var s, g = new Array(arguments.length), S = 0, r = arguments.length;
                          S < r;
                          S++
                        )
                          g[S] = arguments[S];
                        for (S = 0; S < c.length; S += 1) {
                          var y = c[S].apply(s, g);
                          typeof y < 'u' && (s = y);
                        }
                        return s;
                      };
                      return ((d._chained = c), d);
                    }),
                    (h.chainPathBefore = function (c, m, f) {
                      return h.set(c, m, h.chain(f, h.get(c, m)));
                    }),
                    (h.chainPathAfter = function (c, m, f) {
                      return h.set(c, m, h.chain(h.get(c, m), f));
                    }),
                    (h.setDecomp = function (c) {
                      h._decomp = c;
                    }),
                    (h.getDecomp = function () {
                      var c = h._decomp;
                      try {
                        (!c && typeof window < 'u' && (c = window.decomp),
                          !c && typeof yv < 'u' && (c = yv.decomp));
                      } catch {
                        c = null;
                      }
                      return c;
                    }));
                })());
            },
            function (b, E) {
              var h = {};
              ((b.exports = h),
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
                      for (var f = 0; f < c.length; f++) {
                        var d = c[f];
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
                        f = i.max.y - i.min.y;
                      ((i.min.x = c.x), (i.max.x = c.x + m), (i.min.y = c.y), (i.max.y = c.y + f));
                    }));
                })());
            },
            function (b, E) {
              var h = {};
              ((b.exports = h),
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
                      var f = Math.cos(c),
                        d = Math.sin(c);
                      m || (m = {});
                      var s = i.x * f - i.y * d;
                      return ((m.y = i.x * d + i.y * f), (m.x = s), m);
                    }),
                    (h.rotateAbout = function (i, c, m, f) {
                      var d = Math.cos(c),
                        s = Math.sin(c);
                      f || (f = {});
                      var g = m.x + ((i.x - m.x) * d - (i.y - m.y) * s);
                      return ((f.y = m.y + ((i.x - m.x) * s + (i.y - m.y) * d)), (f.x = g), f);
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
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(2),
                m = h(0);
              (function () {
                ((i.create = function (f, d) {
                  for (var s = [], g = 0; g < f.length; g++) {
                    var S = f[g],
                      r = { x: S.x, y: S.y, index: g, body: d, isInternal: !1 };
                    s.push(r);
                  }
                  return s;
                }),
                  (i.fromPath = function (f, d) {
                    var s = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      g = [];
                    return (
                      f.replace(s, function (S, r, y) {
                        g.push({ x: parseFloat(r), y: parseFloat(y) });
                      }),
                      i.create(g, d)
                    );
                  }),
                  (i.centre = function (f) {
                    for (
                      var d = i.area(f, !0), s = { x: 0, y: 0 }, g, S, r, y = 0;
                      y < f.length;
                      y++
                    )
                      ((r = (y + 1) % f.length),
                        (g = c.cross(f[y], f[r])),
                        (S = c.mult(c.add(f[y], f[r]), g)),
                        (s = c.add(s, S)));
                    return c.div(s, 6 * d);
                  }),
                  (i.mean = function (f) {
                    for (var d = { x: 0, y: 0 }, s = 0; s < f.length; s++)
                      ((d.x += f[s].x), (d.y += f[s].y));
                    return c.div(d, f.length);
                  }),
                  (i.area = function (f, d) {
                    for (var s = 0, g = f.length - 1, S = 0; S < f.length; S++)
                      ((s += (f[g].x - f[S].x) * (f[g].y + f[S].y)), (g = S));
                    return d ? s / 2 : Math.abs(s) / 2;
                  }),
                  (i.inertia = function (f, d) {
                    for (var s = 0, g = 0, S = f, r, y, v = 0; v < S.length; v++)
                      ((y = (v + 1) % S.length),
                        (r = Math.abs(c.cross(S[y], S[v]))),
                        (s += r * (c.dot(S[y], S[y]) + c.dot(S[y], S[v]) + c.dot(S[v], S[v]))),
                        (g += r));
                    return (d / 6) * (s / g);
                  }),
                  (i.translate = function (f, d, s) {
                    s = typeof s < 'u' ? s : 1;
                    var g = f.length,
                      S = d.x * s,
                      r = d.y * s,
                      y;
                    for (y = 0; y < g; y++) ((f[y].x += S), (f[y].y += r));
                    return f;
                  }),
                  (i.rotate = function (f, d, s) {
                    if (d !== 0) {
                      var g = Math.cos(d),
                        S = Math.sin(d),
                        r = s.x,
                        y = s.y,
                        v = f.length,
                        x,
                        C,
                        O,
                        U;
                      for (U = 0; U < v; U++)
                        ((x = f[U]),
                          (C = x.x - r),
                          (O = x.y - y),
                          (x.x = r + (C * g - O * S)),
                          (x.y = y + (C * S + O * g)));
                      return f;
                    }
                  }),
                  (i.contains = function (f, d) {
                    for (var s = d.x, g = d.y, S = f.length, r = f[S - 1], y, v = 0; v < S; v++) {
                      if (((y = f[v]), (s - r.x) * (y.y - r.y) + (g - r.y) * (r.x - y.x) > 0))
                        return !1;
                      r = y;
                    }
                    return !0;
                  }),
                  (i.scale = function (f, d, s, g) {
                    if (d === 1 && s === 1) return f;
                    g = g || i.centre(f);
                    for (var S, r, y = 0; y < f.length; y++)
                      ((S = f[y]),
                        (r = c.sub(S, g)),
                        (f[y].x = g.x + r.x * d),
                        (f[y].y = g.y + r.y * s));
                    return f;
                  }),
                  (i.chamfer = function (f, d, s, g, S) {
                    (typeof d == 'number' ? (d = [d]) : (d = d || [8]),
                      (s = typeof s < 'u' ? s : -1),
                      (g = g || 2),
                      (S = S || 14));
                    for (var r = [], y = 0; y < f.length; y++) {
                      var v = f[y - 1 >= 0 ? y - 1 : f.length - 1],
                        x = f[y],
                        C = f[(y + 1) % f.length],
                        O = d[y < d.length ? y : d.length - 1];
                      if (O === 0) {
                        r.push(x);
                        continue;
                      }
                      var U = c.normalise({ x: x.y - v.y, y: v.x - x.x }),
                        Y = c.normalise({ x: C.y - x.y, y: x.x - C.x }),
                        T = Math.sqrt(2 * Math.pow(O, 2)),
                        z = c.mult(m.clone(U), O),
                        D = c.normalise(c.mult(c.add(U, Y), 0.5)),
                        R = c.sub(x, c.mult(D, T)),
                        N = s;
                      (s === -1 && (N = Math.pow(O, 0.32) * 1.75),
                        (N = m.clamp(N, g, S)),
                        N % 2 === 1 && (N += 1));
                      for (var B = Math.acos(c.dot(U, Y)), w = B / N, H = 0; H < N; H++)
                        r.push(c.add(c.rotate(z, w * H), R));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (f) {
                    var d = i.mean(f);
                    return (
                      f.sort(function (s, g) {
                        return c.angle(d, s) - c.angle(d, g);
                      }),
                      f
                    );
                  }),
                  (i.isConvex = function (f) {
                    var d = 0,
                      s = f.length,
                      g,
                      S,
                      r,
                      y;
                    if (s < 3) return null;
                    for (g = 0; g < s; g++)
                      if (
                        ((S = (g + 1) % s),
                        (r = (g + 2) % s),
                        (y = (f[S].x - f[g].x) * (f[r].y - f[S].y)),
                        (y -= (f[S].y - f[g].y) * (f[r].x - f[S].x)),
                        y < 0 ? (d |= 1) : y > 0 && (d |= 2),
                        d === 3)
                      )
                        return !1;
                    return d !== 0 ? !0 : null;
                  }),
                  (i.hull = function (f) {
                    var d = [],
                      s = [],
                      g,
                      S;
                    for (
                      f = f.slice(0),
                        f.sort(function (r, y) {
                          var v = r.x - y.x;
                          return v !== 0 ? v : r.y - y.y;
                        }),
                        S = 0;
                      S < f.length;
                      S += 1
                    ) {
                      for (
                        g = f[S];
                        s.length >= 2 && c.cross3(s[s.length - 2], s[s.length - 1], g) <= 0;
                      )
                        s.pop();
                      s.push(g);
                    }
                    for (S = f.length - 1; S >= 0; S -= 1) {
                      for (
                        g = f[S];
                        d.length >= 2 && c.cross3(d[d.length - 2], d[d.length - 1], g) <= 0;
                      )
                        d.pop();
                      d.push(g);
                    }
                    return (d.pop(), s.pop(), d.concat(s));
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(2),
                f = h(7),
                d = h(0),
                s = h(1),
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
                      bounds: r.bounds || s.create(r.vertices),
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
                    s.update(r.bounds, r.vertices, r.velocity),
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
                          f.set(r, v);
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
                      s.update(r.bounds, r.vertices, r.velocity));
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
                        var U = c.hull(O),
                          Y = c.centre(U);
                        (i.setVertices(r, U), c.translate(r.vertices, Y));
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
                        s.update(O.bounds, O.vertices, r.velocity));
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
                        s.update(O.bounds, O.vertices, r.velocity),
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
                        U = r.position.x - v.x,
                        Y = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (U * C - Y * O), y: v.y + (U * O + Y * C) }, x),
                        i.setAngle(r, r.angle + y, x));
                    }
                  }),
                  (i.scale = function (r, y, v, x) {
                    var C = 0,
                      O = 0;
                    x = x || r.position;
                    for (var U = 0; U < r.parts.length; U++) {
                      var Y = r.parts[U];
                      (c.scale(Y.vertices, y, v, x),
                        (Y.axes = g.fromVertices(Y.vertices)),
                        (Y.area = c.area(Y.vertices)),
                        i.setMass(Y, r.density * Y.area),
                        c.translate(Y.vertices, { x: -Y.position.x, y: -Y.position.y }),
                        i.setInertia(Y, i._inertiaScale * c.inertia(Y.vertices, Y.mass)),
                        c.translate(Y.vertices, { x: Y.position.x, y: Y.position.y }),
                        U > 0 && ((C += Y.area), (O += Y.inertia)),
                        (Y.position.x = x.x + (Y.position.x - x.x) * y),
                        (Y.position.y = x.y + (Y.position.y - x.y) * v),
                        s.update(Y.bounds, Y.vertices, r.velocity));
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
                      U = (r.position.y - r.positionPrev.y) * x;
                    ((r.velocity.x = O * C + (r.force.x / r.mass) * v),
                      (r.velocity.y = U * C + (r.force.y / r.mass) * v),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = y),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * C * x + (r.torque / r.inertia) * v),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var Y = 0; Y < r.parts.length; Y++) {
                      var T = r.parts[Y];
                      (c.translate(T.vertices, r.velocity),
                        Y > 0 && ((T.position.x += r.velocity.x), (T.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (c.rotate(T.vertices, r.angularVelocity, r.position),
                          g.rotate(T.axes, r.angularVelocity),
                          Y > 0 &&
                            m.rotateAbout(T.position, r.angularVelocity, r.position, T.position)),
                        s.update(T.bounds, T.vertices, r.velocity));
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
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(0);
              (function () {
                ((i.on = function (m, f, d) {
                  for (var s = f.split(' '), g, S = 0; S < s.length; S++)
                    ((g = s[S]),
                      (m.events = m.events || {}),
                      (m.events[g] = m.events[g] || []),
                      m.events[g].push(d));
                  return d;
                }),
                  (i.off = function (m, f, d) {
                    if (!f) {
                      m.events = {};
                      return;
                    }
                    typeof f == 'function' && ((d = f), (f = c.keys(m.events).join(' ')));
                    for (var s = f.split(' '), g = 0; g < s.length; g++) {
                      var S = m.events[s[g]],
                        r = [];
                      if (d && S) for (var y = 0; y < S.length; y++) S[y] !== d && r.push(S[y]);
                      m.events[s[g]] = r;
                    }
                  }),
                  (i.trigger = function (m, f, d) {
                    var s,
                      g,
                      S,
                      r,
                      y = m.events;
                    if (y && c.keys(y).length > 0) {
                      (d || (d = {}), (s = f.split(' ')));
                      for (var v = 0; v < s.length; v++)
                        if (((g = s[v]), (S = y[g]), S)) {
                          ((r = c.clone(d, !1)), (r.name = g), (r.source = m));
                          for (var x = 0; x < S.length; x++) S[x].apply(m, [r]);
                        }
                    }
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(5),
                m = h(0),
                f = h(1),
                d = h(4);
              (function () {
                ((i.create = function (s) {
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
                    s
                  );
                }),
                  (i.setModified = function (s, g, S, r) {
                    if (
                      ((s.isModified = g),
                      g &&
                        s.cache &&
                        ((s.cache.allBodies = null),
                        (s.cache.allConstraints = null),
                        (s.cache.allComposites = null)),
                      S && s.parent && i.setModified(s.parent, g, S, r),
                      r)
                    )
                      for (var y = 0; y < s.composites.length; y++) {
                        var v = s.composites[y];
                        i.setModified(v, g, S, r);
                      }
                  }),
                  (i.add = function (s, g) {
                    var S = [].concat(g);
                    c.trigger(s, 'beforeAdd', { object: g });
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
                          i.addBody(s, y);
                          break;
                        case 'constraint':
                          i.addConstraint(s, y);
                          break;
                        case 'composite':
                          i.addComposite(s, y);
                          break;
                        case 'mouseConstraint':
                          i.addConstraint(s, y.constraint);
                          break;
                      }
                    }
                    return (c.trigger(s, 'afterAdd', { object: g }), s);
                  }),
                  (i.remove = function (s, g, S) {
                    var r = [].concat(g);
                    c.trigger(s, 'beforeRemove', { object: g });
                    for (var y = 0; y < r.length; y++) {
                      var v = r[y];
                      switch (v.type) {
                        case 'body':
                          i.removeBody(s, v, S);
                          break;
                        case 'constraint':
                          i.removeConstraint(s, v, S);
                          break;
                        case 'composite':
                          i.removeComposite(s, v, S);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(s, v.constraint);
                          break;
                      }
                    }
                    return (c.trigger(s, 'afterRemove', { object: g }), s);
                  }),
                  (i.addComposite = function (s, g) {
                    return (s.composites.push(g), (g.parent = s), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.removeComposite = function (s, g, S) {
                    var r = m.indexOf(s.composites, g);
                    if (r !== -1) {
                      var y = i.allBodies(g);
                      i.removeCompositeAt(s, r);
                      for (var v = 0; v < y.length; v++) y[v].sleepCounter = 0;
                    }
                    if (S)
                      for (var v = 0; v < s.composites.length; v++)
                        i.removeComposite(s.composites[v], g, !0);
                    return s;
                  }),
                  (i.removeCompositeAt = function (s, g) {
                    return (s.composites.splice(g, 1), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.addBody = function (s, g) {
                    return (s.bodies.push(g), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.removeBody = function (s, g, S) {
                    var r = m.indexOf(s.bodies, g);
                    if ((r !== -1 && (i.removeBodyAt(s, r), (g.sleepCounter = 0)), S))
                      for (var y = 0; y < s.composites.length; y++)
                        i.removeBody(s.composites[y], g, !0);
                    return s;
                  }),
                  (i.removeBodyAt = function (s, g) {
                    return (s.bodies.splice(g, 1), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.addConstraint = function (s, g) {
                    return (s.constraints.push(g), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.removeConstraint = function (s, g, S) {
                    var r = m.indexOf(s.constraints, g);
                    if ((r !== -1 && i.removeConstraintAt(s, r), S))
                      for (var y = 0; y < s.composites.length; y++)
                        i.removeConstraint(s.composites[y], g, !0);
                    return s;
                  }),
                  (i.removeConstraintAt = function (s, g) {
                    return (s.constraints.splice(g, 1), i.setModified(s, !0, !0, !1), s);
                  }),
                  (i.clear = function (s, g, S) {
                    if (S)
                      for (var r = 0; r < s.composites.length; r++) i.clear(s.composites[r], g, !0);
                    return (
                      g
                        ? (s.bodies = s.bodies.filter(function (y) {
                            return y.isStatic;
                          }))
                        : (s.bodies.length = 0),
                      (s.constraints.length = 0),
                      (s.composites.length = 0),
                      i.setModified(s, !0, !0, !1),
                      s
                    );
                  }),
                  (i.allBodies = function (s) {
                    if (s.cache && s.cache.allBodies) return s.cache.allBodies;
                    for (var g = [].concat(s.bodies), S = 0; S < s.composites.length; S++)
                      g = g.concat(i.allBodies(s.composites[S]));
                    return (s.cache && (s.cache.allBodies = g), g);
                  }),
                  (i.allConstraints = function (s) {
                    if (s.cache && s.cache.allConstraints) return s.cache.allConstraints;
                    for (var g = [].concat(s.constraints), S = 0; S < s.composites.length; S++)
                      g = g.concat(i.allConstraints(s.composites[S]));
                    return (s.cache && (s.cache.allConstraints = g), g);
                  }),
                  (i.allComposites = function (s) {
                    if (s.cache && s.cache.allComposites) return s.cache.allComposites;
                    for (var g = [].concat(s.composites), S = 0; S < s.composites.length; S++)
                      g = g.concat(i.allComposites(s.composites[S]));
                    return (s.cache && (s.cache.allComposites = g), g);
                  }),
                  (i.get = function (s, g, S) {
                    var r, y;
                    switch (S) {
                      case 'body':
                        r = i.allBodies(s);
                        break;
                      case 'constraint':
                        r = i.allConstraints(s);
                        break;
                      case 'composite':
                        r = i.allComposites(s).concat(s);
                        break;
                    }
                    return r
                      ? ((y = r.filter(function (v) {
                          return v.id.toString() === g.toString();
                        })),
                        y.length === 0 ? null : y[0])
                      : null;
                  }),
                  (i.move = function (s, g, S) {
                    return (i.remove(s, g), i.add(S, g), s);
                  }),
                  (i.rebase = function (s) {
                    for (
                      var g = i.allBodies(s).concat(i.allConstraints(s)).concat(i.allComposites(s)),
                        S = 0;
                      S < g.length;
                      S++
                    )
                      g[S].id = m.nextId();
                    return s;
                  }),
                  (i.translate = function (s, g, S) {
                    for (var r = S ? i.allBodies(s) : s.bodies, y = 0; y < r.length; y++)
                      d.translate(r[y], g);
                    return s;
                  }),
                  (i.rotate = function (s, g, S, r) {
                    for (
                      var y = Math.cos(g),
                        v = Math.sin(g),
                        x = r ? i.allBodies(s) : s.bodies,
                        C = 0;
                      C < x.length;
                      C++
                    ) {
                      var O = x[C],
                        U = O.position.x - S.x,
                        Y = O.position.y - S.y;
                      (d.setPosition(O, { x: S.x + (U * y - Y * v), y: S.y + (U * v + Y * y) }),
                        d.rotate(O, g));
                    }
                    return s;
                  }),
                  (i.scale = function (s, g, S, r, y) {
                    for (var v = y ? i.allBodies(s) : s.bodies, x = 0; x < v.length; x++) {
                      var C = v[x],
                        O = C.position.x - r.x,
                        U = C.position.y - r.y;
                      (d.setPosition(C, { x: r.x + O * g, y: r.y + U * S }), d.scale(C, g, S));
                    }
                    return s;
                  }),
                  (i.bounds = function (s) {
                    for (var g = i.allBodies(s), S = [], r = 0; r < g.length; r += 1) {
                      var y = g[r];
                      S.push(y.bounds.min, y.bounds.max);
                    }
                    return f.create(S);
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(4),
                m = h(5),
                f = h(0);
              (function () {
                ((i._motionWakeThreshold = 0.18),
                  (i._motionSleepThreshold = 0.08),
                  (i._minBias = 0.9),
                  (i.update = function (d, s) {
                    for (
                      var g = s / f._baseDelta, S = i._motionSleepThreshold, r = 0;
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
                        U = Math.max(y.motion, C);
                      ((y.motion = i._minBias * O + (1 - i._minBias) * U),
                        y.sleepThreshold > 0 && y.motion < S
                          ? ((y.sleepCounter += 1),
                            y.sleepCounter >= y.sleepThreshold / g && i.set(y, !0))
                          : y.sleepCounter > 0 && (y.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (d) {
                    for (var s = i._motionSleepThreshold, g = 0; g < d.length; g++) {
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
                          !x.isStatic && C.motion > s && i.set(x, !1);
                        }
                      }
                    }
                  }),
                  (i.set = function (d, s) {
                    var g = d.isSleeping;
                    s
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
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(9);
              (function () {
                var f = [],
                  d = { overlap: 0, axis: null },
                  s = { overlap: 0, axis: null };
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
                        (i._overlapAxes(s, S.vertices, g.vertices, S.axes), s.overlap <= 0))
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
                    d.overlap < s.overlap ? (x = d) : (x = s);
                    var C = v.normal,
                      O = v.tangent,
                      U = v.penetration,
                      Y = v.supports,
                      T = x.overlap,
                      z = x.axis,
                      D = z.x,
                      R = z.y,
                      N = S.position.x - g.position.x,
                      B = S.position.y - g.position.y;
                    (D * N + R * B >= 0 && ((D = -D), (R = -R)),
                      (C.x = D),
                      (C.y = R),
                      (O.x = -R),
                      (O.y = D),
                      (U.x = D * T),
                      (U.y = R * T),
                      (v.depth = T));
                    var w = i._findSupports(g, S, C, 1),
                      H = 0;
                    if (
                      (c.contains(g.vertices, w[0]) && (Y[H++] = w[0]),
                      c.contains(g.vertices, w[1]) && (Y[H++] = w[1]),
                      H < 2)
                    ) {
                      var K = i._findSupports(S, g, C, -1);
                      (c.contains(S.vertices, K[0]) && (Y[H++] = K[0]),
                        H < 2 && c.contains(S.vertices, K[1]) && (Y[H++] = K[1]));
                    }
                    return (H === 0 && (Y[H++] = w[0]), (v.supportCount = H), v);
                  }),
                  (i._overlapAxes = function (g, S, r, y) {
                    var v = S.length,
                      x = r.length,
                      C = S[0].x,
                      O = S[0].y,
                      U = r[0].x,
                      Y = r[0].y,
                      T = y.length,
                      z = Number.MAX_VALUE,
                      D = 0,
                      R,
                      N,
                      B,
                      w,
                      H,
                      K;
                    for (H = 0; H < T; H++) {
                      var ee = y[H],
                        P = ee.x,
                        j = ee.y,
                        J = C * P + O * j,
                        te = U * P + Y * j,
                        ue = J,
                        de = te;
                      for (K = 1; K < v; K += 1)
                        ((w = S[K].x * P + S[K].y * j), w > ue ? (ue = w) : w < J && (J = w));
                      for (K = 1; K < x; K += 1)
                        ((w = r[K].x * P + r[K].y * j), w > de ? (de = w) : w < te && (te = w));
                      if (
                        ((N = ue - te),
                        (B = de - J),
                        (R = N < B ? N : B),
                        R < z && ((z = R), (D = H), R <= 0))
                      )
                        break;
                    }
                    ((g.axis = y[D]), (g.overlap = z));
                  }),
                  (i._findSupports = function (g, S, r, y) {
                    var v = S.vertices,
                      x = v.length,
                      C = g.position.x,
                      O = g.position.y,
                      U = r.x * y,
                      Y = r.y * y,
                      T = v[0],
                      z = T,
                      D = U * (C - z.x) + Y * (O - z.y),
                      R,
                      N,
                      B;
                    for (B = 1; B < x; B += 1)
                      ((z = v[B]),
                        (N = U * (C - z.x) + Y * (O - z.y)),
                        N < D && ((D = N), (T = z)));
                    return (
                      (R = v[(x + T.index - 1) % x]),
                      (D = U * (C - R.x) + Y * (O - R.y)),
                      (z = v[(T.index + 1) % x]),
                      U * (C - z.x) + Y * (O - z.y) < D
                        ? ((f[0] = T), (f[1] = z), f)
                        : ((f[0] = T), (f[1] = R), f)
                    );
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(16);
              (function () {
                ((i.create = function (m, f) {
                  var d = m.bodyA,
                    s = m.bodyB,
                    g = {
                      id: i.id(d, s),
                      bodyA: d,
                      bodyB: s,
                      collision: m,
                      contacts: [c.create(), c.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: d.isSensor || s.isSensor,
                      timeCreated: f,
                      timeUpdated: f,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (i.update(g, m, f), g);
                }),
                  (i.update = function (m, f, d) {
                    var s = f.supports,
                      g = f.supportCount,
                      S = m.contacts,
                      r = f.parentA,
                      y = f.parentB;
                    ((m.isActive = !0),
                      (m.timeUpdated = d),
                      (m.collision = f),
                      (m.separation = f.depth),
                      (m.inverseMass = r.inverseMass + y.inverseMass),
                      (m.friction = r.friction < y.friction ? r.friction : y.friction),
                      (m.frictionStatic =
                        r.frictionStatic > y.frictionStatic ? r.frictionStatic : y.frictionStatic),
                      (m.restitution =
                        r.restitution > y.restitution ? r.restitution : y.restitution),
                      (m.slop = r.slop > y.slop ? r.slop : y.slop),
                      (m.contactCount = g),
                      (f.pair = m));
                    var v = s[0],
                      x = S[0],
                      C = s[1],
                      O = S[1];
                    ((O.vertex === v || x.vertex === C) && ((S[1] = x), (S[0] = x = O), (O = S[1])),
                      (x.vertex = v),
                      (O.vertex = C));
                  }),
                  (i.setActive = function (m, f, d) {
                    f
                      ? ((m.isActive = !0), (m.timeUpdated = d))
                      : ((m.isActive = !1), (m.contactCount = 0));
                  }),
                  (i.id = function (m, f) {
                    return m.id < f.id
                      ? m.id.toString(36) + ':' + f.id.toString(36)
                      : f.id.toString(36) + ':' + m.id.toString(36);
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(2),
                f = h(7),
                d = h(1),
                s = h(11),
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
                        U = C;
                      if (
                        (y && (O = m.add(y.position, x)),
                        v && (U = m.add(v.position, C)),
                        !(!O || !U))
                      ) {
                        var Y = m.sub(O, U),
                          T = m.magnitude(Y);
                        T < i._minLength && (T = i._minLength);
                        var z = (T - S.length) / T,
                          D = S.stiffness >= 1 || S.length === 0,
                          R = D ? S.stiffness * r : S.stiffness * r * r,
                          N = S.damping * r,
                          B = m.mult(Y, z * R),
                          w = (y ? y.inverseMass : 0) + (v ? v.inverseMass : 0),
                          H = (y ? y.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          K = w + H,
                          ee,
                          P,
                          j,
                          J,
                          te;
                        if (N > 0) {
                          var ue = m.create();
                          ((j = m.div(Y, T)),
                            (te = m.sub(
                              (v && m.sub(v.position, v.positionPrev)) || ue,
                              (y && m.sub(y.position, y.positionPrev)) || ue
                            )),
                            (J = m.dot(j, te)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((P = y.inverseMass / w),
                          (y.constraintImpulse.x -= B.x * P),
                          (y.constraintImpulse.y -= B.y * P),
                          (y.position.x -= B.x * P),
                          (y.position.y -= B.y * P),
                          N > 0 &&
                            ((y.positionPrev.x -= N * j.x * J * P),
                            (y.positionPrev.y -= N * j.y * J * P)),
                          (ee =
                            (m.cross(x, B) / K) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - S.angularStiffness)),
                          (y.constraintImpulse.angle -= ee),
                          (y.angle -= ee)),
                          v &&
                            !v.isStatic &&
                            ((P = v.inverseMass / w),
                            (v.constraintImpulse.x += B.x * P),
                            (v.constraintImpulse.y += B.y * P),
                            (v.position.x += B.x * P),
                            (v.position.y += B.y * P),
                            N > 0 &&
                              ((v.positionPrev.x += N * j.x * J * P),
                              (v.positionPrev.y += N * j.y * J * P)),
                            (ee =
                              (m.cross(C, B) / K) *
                              i._torqueDampen *
                              v.inverseInertia *
                              (1 - S.angularStiffness)),
                            (v.constraintImpulse.angle += ee),
                            (v.angle += ee)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (S) {
                    for (var r = 0; r < S.length; r++) {
                      var y = S[r],
                        v = y.constraintImpulse;
                      if (!(y.isStatic || (v.x === 0 && v.y === 0 && v.angle === 0))) {
                        f.set(y, !1);
                        for (var x = 0; x < y.parts.length; x++) {
                          var C = y.parts[x];
                          (c.translate(C.vertices, v),
                            x > 0 && ((C.position.x += v.x), (C.position.y += v.y)),
                            v.angle !== 0 &&
                              (c.rotate(C.vertices, v.angle, y.position),
                              s.rotate(C.axes, v.angle),
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
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(2),
                m = h(0);
              (function () {
                ((i.fromVertices = function (f) {
                  for (var d = {}, s = 0; s < f.length; s++) {
                    var g = (s + 1) % f.length,
                      S = c.normalise({ x: f[g].y - f[s].y, y: f[s].x - f[g].x }),
                      r = S.y === 0 ? 1 / 0 : S.x / S.y;
                    ((r = r.toFixed(3).toString()), (d[r] = S));
                  }
                  return m.values(d);
                }),
                  (i.rotate = function (f, d) {
                    if (d !== 0)
                      for (var s = Math.cos(d), g = Math.sin(d), S = 0; S < f.length; S++) {
                        var r = f[S],
                          y;
                        ((y = r.x * s - r.y * g), (r.y = r.x * g + r.y * s), (r.x = y));
                      }
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(0),
                f = h(4),
                d = h(1),
                s = h(2);
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
                  return f.create(m.extend({}, x, v));
                }),
                  (i.trapezoid = function (g, S, r, y, v, x) {
                    ((x = x || {}),
                      v >= 1 && m.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var C = (1 - v * 2) * r,
                      O = r * v,
                      U = O + C,
                      Y = U + O,
                      T;
                    v < 0.5
                      ? (T = 'L 0 0 L ' + O + ' ' + -y + ' L ' + U + ' ' + -y + ' L ' + Y + ' 0')
                      : (T = 'L 0 0 L ' + U + ' ' + -y + ' L ' + Y + ' 0');
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
                    return f.create(m.extend({}, z, x));
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
                    for (var x = (2 * Math.PI) / r, C = '', O = x * 0.5, U = 0; U < r; U += 1) {
                      var Y = O + U * x,
                        T = Math.cos(Y) * y,
                        z = Math.sin(Y) * y;
                      C += 'L ' + T.toFixed(3) + ' ' + z.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: g, y: S },
                      vertices: c.fromPath(C),
                    };
                    if (v.chamfer) {
                      var R = v.chamfer;
                      ((D.vertices = c.chamfer(
                        D.vertices,
                        R.radius,
                        R.quality,
                        R.qualityMin,
                        R.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return f.create(m.extend({}, D, v));
                  }),
                  (i.fromVertices = function (g, S, r, y, v, x, C, O) {
                    var U = m.getDecomp(),
                      Y,
                      T,
                      z,
                      D,
                      R,
                      N,
                      B,
                      w,
                      H,
                      K,
                      ee;
                    for (
                      Y = !!(U && U.quickDecomp),
                        y = y || {},
                        z = [],
                        v = typeof v < 'u' ? v : !1,
                        x = typeof x < 'u' ? x : 0.01,
                        C = typeof C < 'u' ? C : 10,
                        O = typeof O < 'u' ? O : 0.01,
                        m.isArray(r[0]) || (r = [r]),
                        K = 0;
                      K < r.length;
                      K += 1
                    )
                      if (
                        ((N = r[K]),
                        (D = c.isConvex(N)),
                        (R = !D),
                        R &&
                          !Y &&
                          m.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !Y)
                      )
                        (D ? (N = c.clockwiseSort(N)) : (N = c.hull(N)),
                          z.push({ position: { x: g, y: S }, vertices: N }));
                      else {
                        var P = N.map(function (ne) {
                          return [ne.x, ne.y];
                        });
                        (U.makeCCW(P),
                          x !== !1 && U.removeCollinearPoints(P, x),
                          O !== !1 && U.removeDuplicatePoints && U.removeDuplicatePoints(P, O));
                        var j = U.quickDecomp(P);
                        for (B = 0; B < j.length; B++) {
                          var J = j[B],
                            te = J.map(function (ne) {
                              return { x: ne[0], y: ne[1] };
                            });
                          (C > 0 && c.area(te) < C) ||
                            z.push({ position: c.centre(te), vertices: te });
                        }
                      }
                    for (B = 0; B < z.length; B++) z[B] = f.create(m.extend(z[B], y));
                    if (v) {
                      var ue = 5;
                      for (B = 0; B < z.length; B++) {
                        var de = z[B];
                        for (w = B + 1; w < z.length; w++) {
                          var L = z[w];
                          if (d.overlaps(de.bounds, L.bounds)) {
                            var $ = de.vertices,
                              le = L.vertices;
                            for (H = 0; H < de.vertices.length; H++)
                              for (ee = 0; ee < L.vertices.length; ee++) {
                                var ae = s.magnitudeSquared(s.sub($[(H + 1) % $.length], le[ee])),
                                  oe = s.magnitudeSquared(s.sub($[H], le[(ee + 1) % le.length]));
                                ae < ue &&
                                  oe < ue &&
                                  (($[H].isInternal = !0), (le[ee].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return z.length > 1
                      ? ((T = f.create(m.extend({ parts: z.slice(0) }, y))),
                        f.setPosition(T, { x: g, y: S }),
                        T)
                      : z[0];
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(0),
                m = h(8);
              (function () {
                ((i.create = function (f) {
                  var d = { bodies: [], collisions: [], pairs: null };
                  return c.extend(d, f);
                }),
                  (i.setBodies = function (f, d) {
                    f.bodies = d.slice(0);
                  }),
                  (i.clear = function (f) {
                    ((f.bodies = []), (f.collisions = []));
                  }),
                  (i.collisions = function (f) {
                    var d = f.pairs,
                      s = f.bodies,
                      g = s.length,
                      S = i.canCollide,
                      r = m.collides,
                      y = f.collisions,
                      v = 0,
                      x,
                      C;
                    for (s.sort(i._compareBoundsX), x = 0; x < g; x++) {
                      var O = s[x],
                        U = O.bounds,
                        Y = O.bounds.max.x,
                        T = O.bounds.max.y,
                        z = O.bounds.min.y,
                        D = O.isStatic || O.isSleeping,
                        R = O.parts.length,
                        N = R === 1;
                      for (C = x + 1; C < g; C++) {
                        var B = s[C],
                          w = B.bounds;
                        if (w.min.x > Y) break;
                        if (
                          !(T < w.min.y || z > w.max.y) &&
                          !(D && (B.isStatic || B.isSleeping)) &&
                          S(O.collisionFilter, B.collisionFilter)
                        ) {
                          var H = B.parts.length;
                          if (N && H === 1) {
                            var K = r(O, B, d);
                            K && (y[v++] = K);
                          } else
                            for (var ee = R > 1 ? 1 : 0, P = H > 1 ? 1 : 0, j = ee; j < R; j++)
                              for (var J = O.parts[j], U = J.bounds, te = P; te < H; te++) {
                                var ue = B.parts[te],
                                  w = ue.bounds;
                                if (
                                  !(
                                    U.min.x > w.max.x ||
                                    U.max.x < w.min.x ||
                                    U.max.y < w.min.y ||
                                    U.min.y > w.max.y
                                  )
                                ) {
                                  var K = r(J, ue, d);
                                  K && (y[v++] = K);
                                }
                              }
                        }
                      }
                    }
                    return (y.length !== v && (y.length = v), y);
                  }),
                  (i.canCollide = function (f, d) {
                    return f.group === d.group && f.group !== 0
                      ? f.group > 0
                      : (f.mask & d.category) !== 0 && (d.mask & f.category) !== 0;
                  }),
                  (i._compareBoundsX = function (f, d) {
                    return f.bounds.min.x - d.bounds.min.x;
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(0);
              (function () {
                ((i.create = function (m) {
                  var f = {};
                  return (
                    m ||
                      c.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (f.element = m || document.body),
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
                    (f.mousemove = function (d) {
                      var s = i._getRelativeMousePosition(d, f.element, f.pixelRatio),
                        g = d.changedTouches;
                      (g && ((f.button = 0), d.preventDefault()),
                        (f.absolute.x = s.x),
                        (f.absolute.y = s.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.sourceEvents.mousemove = d));
                    }),
                    (f.mousedown = function (d) {
                      var s = i._getRelativeMousePosition(d, f.element, f.pixelRatio),
                        g = d.changedTouches;
                      (g ? ((f.button = 0), d.preventDefault()) : (f.button = d.button),
                        (f.absolute.x = s.x),
                        (f.absolute.y = s.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mousedownPosition.x = f.position.x),
                        (f.mousedownPosition.y = f.position.y),
                        (f.sourceEvents.mousedown = d));
                    }),
                    (f.mouseup = function (d) {
                      var s = i._getRelativeMousePosition(d, f.element, f.pixelRatio),
                        g = d.changedTouches;
                      (g && d.preventDefault(),
                        (f.button = -1),
                        (f.absolute.x = s.x),
                        (f.absolute.y = s.y),
                        (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                        (f.position.y = f.absolute.y * f.scale.y + f.offset.y),
                        (f.mouseupPosition.x = f.position.x),
                        (f.mouseupPosition.y = f.position.y),
                        (f.sourceEvents.mouseup = d));
                    }),
                    (f.mousewheel = function (d) {
                      ((f.wheelDelta = Math.max(-1, Math.min(1, d.wheelDelta || -d.detail))),
                        d.preventDefault(),
                        (f.sourceEvents.mousewheel = d));
                    }),
                    i.setElement(f, f.element),
                    f
                  );
                }),
                  (i.setElement = function (m, f) {
                    ((m.element = f),
                      f.addEventListener('mousemove', m.mousemove, { passive: !0 }),
                      f.addEventListener('mousedown', m.mousedown, { passive: !0 }),
                      f.addEventListener('mouseup', m.mouseup, { passive: !0 }),
                      f.addEventListener('wheel', m.mousewheel, { passive: !1 }),
                      f.addEventListener('touchmove', m.mousemove, { passive: !1 }),
                      f.addEventListener('touchstart', m.mousedown, { passive: !1 }),
                      f.addEventListener('touchend', m.mouseup, { passive: !1 }));
                  }),
                  (i.clearSourceEvents = function (m) {
                    ((m.sourceEvents.mousemove = null),
                      (m.sourceEvents.mousedown = null),
                      (m.sourceEvents.mouseup = null),
                      (m.sourceEvents.mousewheel = null),
                      (m.wheelDelta = 0));
                  }),
                  (i.setOffset = function (m, f) {
                    ((m.offset.x = f.x),
                      (m.offset.y = f.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (i.setScale = function (m, f) {
                    ((m.scale.x = f.x),
                      (m.scale.y = f.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (i._getRelativeMousePosition = function (m, f, d) {
                    var s = f.getBoundingClientRect(),
                      g = document.documentElement || document.body.parentNode || document.body,
                      S = window.pageXOffset !== void 0 ? window.pageXOffset : g.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : g.scrollTop,
                      y = m.changedTouches,
                      v,
                      x;
                    return (
                      y
                        ? ((v = y[0].pageX - s.left - S), (x = y[0].pageY - s.top - r))
                        : ((v = m.pageX - s.left - S), (x = m.pageY - s.top - r)),
                      {
                        x: v / ((f.clientWidth / (f.width || f.clientWidth)) * d),
                        y: x / ((f.clientHeight / (f.height || f.clientHeight)) * d),
                      }
                    );
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
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
                      var f = i._registry[m.name],
                        d = i.versionParse(m.version).number,
                        s = i.versionParse(f.version).number;
                      d > s
                        ? (c.warn(
                            'Plugin.register:',
                            i.toString(f),
                            'was upgraded to',
                            i.toString(m)
                          ),
                          (i._registry[m.name] = m))
                        : d < s
                          ? c.warn(
                              'Plugin.register:',
                              i.toString(f),
                              'can not be downgraded to',
                              i.toString(m)
                            )
                          : m !== f &&
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
                  (i.isUsed = function (m, f) {
                    return m.used.indexOf(f) > -1;
                  }),
                  (i.isFor = function (m, f) {
                    var d = m.for && i.dependencyParse(m.for);
                    return !m.for || (f.name === d.name && i.versionSatisfies(f.version, d.range));
                  }),
                  (i.use = function (m, f) {
                    if (((m.uses = (m.uses || []).concat(f || [])), m.uses.length === 0)) {
                      c.warn(
                        'Plugin.use:',
                        i.toString(m),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var d = i.dependencies(m), s = c.topologicalSort(d), g = [], S = 0;
                      S < s.length;
                      S += 1
                    )
                      if (s[S] !== m.name) {
                        var r = i.resolve(s[S]);
                        if (!r) {
                          g.push('❌ ' + s[S]);
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
                  (i.dependencies = function (m, f) {
                    var d = i.dependencyParse(m),
                      s = d.name;
                    if (((f = f || {}), !(s in f))) {
                      ((m = i.resolve(m) || m),
                        (f[s] = c.map(m.uses || [], function (S) {
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
                      for (var g = 0; g < f[s].length; g += 1) i.dependencies(f[s][g], f);
                      return f;
                    }
                  }),
                  (i.dependencyParse = function (m) {
                    if (c.isString(m)) {
                      var f = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        f.test(m) ||
                          c.warn('Plugin.dependencyParse:', m, 'is not a valid dependency string.'),
                        { name: m.split('@')[0], range: m.split('@')[1] || '*' }
                      );
                    }
                    return { name: m.name, range: m.range || m.version };
                  }),
                  (i.versionParse = function (m) {
                    var f = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    f.test(m) ||
                      c.warn('Plugin.versionParse:', m, 'is not a valid version or range.');
                    var d = f.exec(m),
                      s = Number(d[4]),
                      g = Number(d[5]),
                      S = Number(d[6]);
                    return {
                      isRange: !!(d[1] || d[2]),
                      version: d[3],
                      range: m,
                      operator: d[1] || d[2] || '',
                      major: s,
                      minor: g,
                      patch: S,
                      parts: [s, g, S],
                      prerelease: d[7],
                      number: s * 1e8 + g * 1e4 + S,
                    };
                  }),
                  (i.versionSatisfies = function (m, f) {
                    f = f || '*';
                    var d = i.versionParse(f),
                      s = i.versionParse(m);
                    if (d.isRange) {
                      if (d.operator === '*' || m === '*') return !0;
                      if (d.operator === '>') return s.number > d.number;
                      if (d.operator === '>=') return s.number >= d.number;
                      if (d.operator === '~')
                        return s.major === d.major && s.minor === d.minor && s.patch >= d.patch;
                      if (d.operator === '^')
                        return d.major > 0
                          ? s.major === d.major && s.number >= d.number
                          : d.minor > 0
                            ? s.minor === d.minor && s.patch >= d.patch
                            : s.patch === d.patch;
                    }
                    return m === f || m === '*';
                  }));
              })();
            },
            function (b, E) {
              var h = {};
              ((b.exports = h),
                (function () {
                  h.create = function (i) {
                    return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(7),
                m = h(18),
                f = h(13),
                d = h(19),
                s = h(5),
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
                      (C.detector = v.detector || f.create()),
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
                      U = v.detector,
                      Y = v.pairs,
                      T = v.timing,
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
                    s.trigger(v, 'beforeUpdate', R);
                    var N = g.allBodies(O),
                      B = g.allConstraints(O);
                    for (
                      O.isModified && (f.setBodies(U, N), g.setModified(O, !1, !1, !0)),
                        v.enableSleeping && c.update(N, x),
                        i._bodiesApplyGravity(N, v.gravity),
                        x > 0 && i._bodiesUpdate(N, x),
                        s.trigger(v, 'beforeSolve', R),
                        S.preSolveAll(N),
                        D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      S.solveAll(B, x);
                    S.postSolveAll(N);
                    var w = f.collisions(U);
                    (d.update(Y, w, z),
                      v.enableSleeping && c.afterCollisions(Y.list),
                      Y.collisionStart.length > 0 &&
                        s.trigger(v, 'collisionStart', {
                          pairs: Y.collisionStart,
                          timestamp: T.timestamp,
                          delta: x,
                        }));
                    var H = r.clamp(20 / v.positionIterations, 0, 1);
                    for (m.preSolvePosition(Y.list), D = 0; D < v.positionIterations; D++)
                      m.solvePosition(Y.list, x, H);
                    for (
                      m.postSolvePosition(N), S.preSolveAll(N), D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      S.solveAll(B, x);
                    for (
                      S.postSolveAll(N), m.preSolveVelocity(Y.list), D = 0;
                      D < v.velocityIterations;
                      D++
                    )
                      m.solveVelocity(Y.list, x);
                    return (
                      i._bodiesUpdateVelocities(N),
                      Y.collisionActive.length > 0 &&
                        s.trigger(v, 'collisionActive', {
                          pairs: Y.collisionActive,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      Y.collisionEnd.length > 0 &&
                        s.trigger(v, 'collisionEnd', {
                          pairs: Y.collisionEnd,
                          timestamp: T.timestamp,
                          delta: x,
                        }),
                      i._bodiesClearForces(N),
                      s.trigger(v, 'afterUpdate', R),
                      (v.timing.lastElapsed = r.now() - C),
                      v
                    );
                  }),
                  (i.merge = function (v, x) {
                    if ((r.extend(v, x), x.world)) {
                      ((v.world = x.world), i.clear(v));
                      for (var C = g.allBodies(v.world), O = 0; O < C.length; O++) {
                        var U = C[O];
                        (c.set(U, !1), (U.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (v) {
                    (d.clear(v.pairs), f.clear(v.detector));
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
                      for (var U = 0; U < O; U++) {
                        var Y = v[U];
                        Y.isStatic ||
                          Y.isSleeping ||
                          ((Y.force.y += Y.mass * x.y * C), (Y.force.x += Y.mass * x.x * C));
                      }
                  }),
                  (i._bodiesUpdate = function (v, x) {
                    for (var C = v.length, O = 0; O < C; O++) {
                      var U = v[O];
                      U.isStatic || U.isSleeping || y.update(U, x);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (v) {
                    for (var x = v.length, C = 0; C < x; C++) y.updateVelocities(v[C]);
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(0),
                f = h(1);
              (function () {
                ((i._restingThresh = 2),
                  (i._restingThreshTangent = Math.sqrt(6)),
                  (i._positionDampen = 0.9),
                  (i._positionWarming = 0.8),
                  (i._frictionNormalMultiplier = 5),
                  (i._frictionMaxStatic = Number.MAX_VALUE),
                  (i.preSolvePosition = function (d) {
                    var s,
                      g,
                      S,
                      r = d.length;
                    for (s = 0; s < r; s++)
                      ((g = d[s]),
                        g.isActive &&
                          ((S = g.contactCount),
                          (g.collision.parentA.totalContacts += S),
                          (g.collision.parentB.totalContacts += S)));
                  }),
                  (i.solvePosition = function (d, s, g) {
                    var S,
                      r,
                      y,
                      v,
                      x,
                      C,
                      O,
                      U,
                      Y = i._positionDampen * (g || 1),
                      T = m.clamp(s / m._baseDelta, 0, 1),
                      z = d.length;
                    for (S = 0; S < z; S++)
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
                    for (S = 0; S < z; S++)
                      ((r = d[S]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (v = y.parentA),
                          (x = y.parentB),
                          (C = y.normal),
                          (U = r.separation - r.slop * T),
                          (v.isStatic || x.isStatic) && (U *= 2),
                          v.isStatic ||
                            v.isSleeping ||
                            ((O = Y / v.totalContacts),
                            (v.positionImpulse.x += C.x * U * O),
                            (v.positionImpulse.y += C.y * U * O)),
                          x.isStatic ||
                            x.isSleeping ||
                            ((O = Y / x.totalContacts),
                            (x.positionImpulse.x -= C.x * U * O),
                            (x.positionImpulse.y -= C.y * U * O))));
                  }),
                  (i.postSolvePosition = function (d) {
                    for (
                      var s = i._positionWarming,
                        g = d.length,
                        S = c.translate,
                        r = f.update,
                        y = 0;
                      y < g;
                      y++
                    ) {
                      var v = d[y],
                        x = v.positionImpulse,
                        C = x.x,
                        O = x.y,
                        U = v.velocity;
                      if (((v.totalContacts = 0), C !== 0 || O !== 0)) {
                        for (var Y = 0; Y < v.parts.length; Y++) {
                          var T = v.parts[Y];
                          (S(T.vertices, x),
                            r(T.bounds, T.vertices, U),
                            (T.position.x += C),
                            (T.position.y += O));
                        }
                        ((v.positionPrev.x += C),
                          (v.positionPrev.y += O),
                          C * U.x + O * U.y < 0
                            ? ((x.x = 0), (x.y = 0))
                            : ((x.x *= s), (x.y *= s)));
                      }
                    }
                  }),
                  (i.preSolveVelocity = function (d) {
                    var s = d.length,
                      g,
                      S;
                    for (g = 0; g < s; g++) {
                      var r = d[g];
                      if (!(!r.isActive || r.isSensor)) {
                        var y = r.contacts,
                          v = r.contactCount,
                          x = r.collision,
                          C = x.parentA,
                          O = x.parentB,
                          U = x.normal,
                          Y = x.tangent;
                        for (S = 0; S < v; S++) {
                          var T = y[S],
                            z = T.vertex,
                            D = T.normalImpulse,
                            R = T.tangentImpulse;
                          if (D !== 0 || R !== 0) {
                            var N = U.x * D + Y.x * R,
                              B = U.y * D + Y.y * R;
                            (C.isStatic ||
                              C.isSleeping ||
                              ((C.positionPrev.x += N * C.inverseMass),
                              (C.positionPrev.y += B * C.inverseMass),
                              (C.anglePrev +=
                                C.inverseInertia *
                                ((z.x - C.position.x) * B - (z.y - C.position.y) * N))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= N * O.inverseMass),
                                (O.positionPrev.y -= B * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((z.x - O.position.x) * B - (z.y - O.position.y) * N))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (d, s) {
                    var g = s / m._baseDelta,
                      S = g * g,
                      r = S * g,
                      y = -i._restingThresh * g,
                      v = i._restingThreshTangent,
                      x = i._frictionNormalMultiplier * g,
                      C = i._frictionMaxStatic,
                      O = d.length,
                      U,
                      Y,
                      T,
                      z;
                    for (T = 0; T < O; T++) {
                      var D = d[T];
                      if (!(!D.isActive || D.isSensor)) {
                        var R = D.collision,
                          N = R.parentA,
                          B = R.parentB,
                          w = R.normal.x,
                          H = R.normal.y,
                          K = R.tangent.x,
                          ee = R.tangent.y,
                          P = D.inverseMass,
                          j = D.friction * D.frictionStatic * x,
                          J = D.contacts,
                          te = D.contactCount,
                          ue = 1 / te,
                          de = N.position.x - N.positionPrev.x,
                          L = N.position.y - N.positionPrev.y,
                          $ = N.angle - N.anglePrev,
                          le = B.position.x - B.positionPrev.x,
                          ae = B.position.y - B.positionPrev.y,
                          oe = B.angle - B.anglePrev;
                        for (z = 0; z < te; z++) {
                          var ne = J[z],
                            me = ne.vertex,
                            Te = me.x - N.position.x,
                            Be = me.y - N.position.y,
                            tt = me.x - B.position.x,
                            nt = me.y - B.position.y,
                            Je = de - Be * $,
                            ai = L + Te * $,
                            Zt = le - nt * oe,
                            Ia = ae + tt * oe,
                            ra = Je - Zt,
                            ni = ai - Ia,
                            fa = w * ra + H * ni,
                            mt = K * ra + ee * ni,
                            sa = D.separation + fa,
                            Gl = Math.min(sa, 1);
                          Gl = sa < 0 ? 0 : Gl;
                          var ii = Gl * j;
                          mt < -ii || mt > ii
                            ? ((Y = mt > 0 ? mt : -mt),
                              (U = D.friction * (mt > 0 ? 1 : -1) * r),
                              U < -Y ? (U = -Y) : U > Y && (U = Y))
                            : ((U = mt), (Y = C));
                          var ui = Te * H - Be * w,
                            lt = tt * H - nt * w,
                            ri = ue / (P + N.inverseInertia * ui * ui + B.inverseInertia * lt * lt),
                            jl = (1 + D.restitution) * fa * ri;
                          if (((U *= ri), fa < y)) ne.normalImpulse = 0;
                          else {
                            var fi = ne.normalImpulse;
                            ((ne.normalImpulse += jl),
                              ne.normalImpulse > 0 && (ne.normalImpulse = 0),
                              (jl = ne.normalImpulse - fi));
                          }
                          if (mt < -v || mt > v) ne.tangentImpulse = 0;
                          else {
                            var oa = ne.tangentImpulse;
                            ((ne.tangentImpulse += U),
                              ne.tangentImpulse < -Y && (ne.tangentImpulse = -Y),
                              ne.tangentImpulse > Y && (ne.tangentImpulse = Y),
                              (U = ne.tangentImpulse - oa));
                          }
                          var ca = w * jl + K * U,
                            Vl = H * jl + ee * U;
                          (N.isStatic ||
                            N.isSleeping ||
                            ((N.positionPrev.x += ca * N.inverseMass),
                            (N.positionPrev.y += Vl * N.inverseMass),
                            (N.anglePrev += (Te * Vl - Be * ca) * N.inverseInertia)),
                            B.isStatic ||
                              B.isSleeping ||
                              ((B.positionPrev.x -= ca * B.inverseMass),
                              (B.positionPrev.y -= Vl * B.inverseMass),
                              (B.anglePrev -= (tt * Vl - nt * ca) * B.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(9),
                m = h(0);
              (function () {
                ((i.create = function (f) {
                  return m.extend(
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
                  (i.update = function (f, d, s) {
                    var g = c.update,
                      S = c.create,
                      r = c.setActive,
                      y = f.table,
                      v = f.list,
                      x = v.length,
                      C = x,
                      O = f.collisionStart,
                      U = f.collisionEnd,
                      Y = f.collisionActive,
                      T = d.length,
                      z = 0,
                      D = 0,
                      R = 0,
                      N,
                      B,
                      w;
                    for (w = 0; w < T; w++)
                      ((N = d[w]),
                        (B = N.pair),
                        B
                          ? (B.isActive && (Y[R++] = B), g(B, N, s))
                          : ((B = S(N, s)), (y[B.id] = B), (O[z++] = B), (v[C++] = B)));
                    for (C = 0, x = v.length, w = 0; w < x; w++)
                      ((B = v[w]),
                        B.timeUpdated >= s
                          ? (v[C++] = B)
                          : (r(B, !1, s),
                            B.collision.bodyA.sleepCounter > 0 && B.collision.bodyB.sleepCounter > 0
                              ? (v[C++] = B)
                              : ((U[D++] = B), delete y[B.id])));
                    (v.length !== C && (v.length = C),
                      O.length !== z && (O.length = z),
                      U.length !== D && (U.length = D),
                      Y.length !== R && (Y.length = R));
                  }),
                  (i.clear = function (f) {
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
            function (b, E, h) {
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
            function (b, E, h) {
              var i = {};
              b.exports = i;
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
                  (i.before = function (f, d) {
                    return ((f = f.replace(/^Matter./, '')), m.chainPathBefore(i, f, d));
                  }),
                  (i.after = function (f, d) {
                    return ((f = f.replace(/^Matter./, '')), m.chainPathAfter(i, f, d));
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(6),
                m = h(10),
                f = h(0),
                d = h(4),
                s = h(12),
                g = f.deprecated;
              (function () {
                ((i.stack = function (S, r, y, v, x, C, O) {
                  for (
                    var U = c.create({ label: 'Stack' }), Y = S, T = r, z, D = 0, R = 0;
                    R < v;
                    R++
                  ) {
                    for (var N = 0, B = 0; B < y; B++) {
                      var w = O(Y, T, B, R, z, D);
                      if (w) {
                        var H = w.bounds.max.y - w.bounds.min.y,
                          K = w.bounds.max.x - w.bounds.min.x;
                        (H > N && (N = H),
                          d.translate(w, { x: K * 0.5, y: H * 0.5 }),
                          (Y = w.bounds.max.x + x),
                          c.addBody(U, w),
                          (z = w),
                          (D += 1));
                      } else Y += x;
                    }
                    ((T += N + C), (Y = S));
                  }
                  return U;
                }),
                  (i.chain = function (S, r, y, v, x, C) {
                    for (var O = S.bodies, U = 1; U < O.length; U++) {
                      var Y = O[U - 1],
                        T = O[U],
                        z = Y.bounds.max.y - Y.bounds.min.y,
                        D = Y.bounds.max.x - Y.bounds.min.x,
                        R = T.bounds.max.y - T.bounds.min.y,
                        N = T.bounds.max.x - T.bounds.min.x,
                        B = {
                          bodyA: Y,
                          pointA: { x: D * r, y: z * y },
                          bodyB: T,
                          pointB: { x: N * v, y: R * x },
                        },
                        w = f.extend(B, C);
                      c.addConstraint(S, m.create(w));
                    }
                    return ((S.label += ' Chain'), S);
                  }),
                  (i.mesh = function (S, r, y, v, x) {
                    var C = S.bodies,
                      O,
                      U,
                      Y,
                      T,
                      z;
                    for (O = 0; O < y; O++) {
                      for (U = 1; U < r; U++)
                        ((Y = C[U - 1 + O * r]),
                          (T = C[U + O * r]),
                          c.addConstraint(S, m.create(f.extend({ bodyA: Y, bodyB: T }, x))));
                      if (O > 0)
                        for (U = 0; U < r; U++)
                          ((Y = C[U + (O - 1) * r]),
                            (T = C[U + O * r]),
                            c.addConstraint(S, m.create(f.extend({ bodyA: Y, bodyB: T }, x))),
                            v &&
                              U > 0 &&
                              ((z = C[U - 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(f.extend({ bodyA: z, bodyB: T }, x)))),
                            v &&
                              U < r - 1 &&
                              ((z = C[U + 1 + (O - 1) * r]),
                              c.addConstraint(S, m.create(f.extend({ bodyA: z, bodyB: T }, x)))));
                    }
                    return ((S.label += ' Mesh'), S);
                  }),
                  (i.pyramid = function (S, r, y, v, x, C, O) {
                    return i.stack(S, r, y, v, x, C, function (U, Y, T, z, D, R) {
                      var N = Math.min(v, Math.ceil(y / 2)),
                        B = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(z > N)) {
                        z = N - z;
                        var w = z,
                          H = y - 1 - z;
                        if (!(T < w || T > H)) {
                          R === 1 && d.translate(D, { x: (T + (y % 2 === 1 ? 1 : -1)) * B, y: 0 });
                          var K = D ? T * B : 0;
                          return O(S + K + T * x, Y, T, z, D, R);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (S, r, y, v, x) {
                    for (var C = c.create({ label: 'Newtons Cradle' }), O = 0; O < y; O++) {
                      var U = 1.9,
                        Y = s.circle(S + O * (v * U), r + x, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        T = m.create({ pointA: { x: S + O * (v * U), y: r }, bodyB: Y });
                      (c.addBody(C, Y), c.addConstraint(C, T));
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
                      U = -y * 0.5 + O,
                      Y = y * 0.5 - O,
                      T = 0,
                      z = c.create({ label: 'Car' }),
                      D = s.rectangle(S, r, y, v, {
                        collisionFilter: { group: C },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      R = s.circle(S + U, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      N = s.circle(S + Y, r + T, x, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      B = m.create({
                        bodyB: D,
                        pointB: { x: U, y: T },
                        bodyA: R,
                        stiffness: 1,
                        length: 0,
                      }),
                      w = m.create({
                        bodyB: D,
                        pointB: { x: Y, y: T },
                        bodyA: N,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      c.addBody(z, D),
                      c.addBody(z, R),
                      c.addBody(z, N),
                      c.addConstraint(z, B),
                      c.addConstraint(z, w),
                      z
                    );
                  }),
                  g(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (S, r, y, v, x, C, O, U, Y, T) {
                    ((Y = f.extend({ inertia: 1 / 0 }, Y)),
                      (T = f.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, T)));
                    var z = i.stack(S, r, y, v, x, C, function (D, R) {
                      return s.circle(D, R, U, Y);
                    });
                    return (i.mesh(z, y, v, O, T), (z.label = 'Soft Body'), z);
                  }),
                  g(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(9),
                m = h(0),
                f = m.deprecated;
              (function () {
                ((i.create = function (d) {
                  var s = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return m.extend(s, d);
                }),
                  (i.update = function (d, s, g, S) {
                    var r,
                      y,
                      v,
                      x = g.world,
                      C = d.buckets,
                      O,
                      U,
                      Y = !1;
                    for (r = 0; r < s.length; r++) {
                      var T = s[r];
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
                            for (v = D.startRow; v <= D.endRow; v++) {
                              ((U = i._getBucketId(y, v)), (O = C[U]));
                              var R =
                                  y >= z.startCol &&
                                  y <= z.endCol &&
                                  v >= z.startRow &&
                                  v <= z.endRow,
                                N =
                                  y >= T.region.startCol &&
                                  y <= T.region.endCol &&
                                  v >= T.region.startRow &&
                                  v <= T.region.endRow;
                              (!R && N && N && O && i._bucketRemoveBody(d, O, T),
                                (T.region === z || (R && !N) || S) &&
                                  (O || (O = i._createBucket(C, U)), i._bucketAddBody(d, O, T)));
                            }
                          ((T.region = z), (Y = !0));
                        }
                      }
                    }
                    Y && (d.pairsList = i._createActivePairsList(d));
                  }),
                  f(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (d) {
                    ((d.buckets = {}), (d.pairs = {}), (d.pairsList = []));
                  }),
                  f(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (i._regionUnion = function (d, s) {
                    var g = Math.min(d.startCol, s.startCol),
                      S = Math.max(d.endCol, s.endCol),
                      r = Math.min(d.startRow, s.startRow),
                      y = Math.max(d.endRow, s.endRow);
                    return i._createRegion(g, S, r, y);
                  }),
                  (i._getRegion = function (d, s) {
                    var g = s.bounds,
                      S = Math.floor(g.min.x / d.bucketWidth),
                      r = Math.floor(g.max.x / d.bucketWidth),
                      y = Math.floor(g.min.y / d.bucketHeight),
                      v = Math.floor(g.max.y / d.bucketHeight);
                    return i._createRegion(S, r, y, v);
                  }),
                  (i._createRegion = function (d, s, g, S) {
                    return {
                      id: d + ',' + s + ',' + g + ',' + S,
                      startCol: d,
                      endCol: s,
                      startRow: g,
                      endRow: S,
                    };
                  }),
                  (i._getBucketId = function (d, s) {
                    return 'C' + d + 'R' + s;
                  }),
                  (i._createBucket = function (d, s) {
                    var g = (d[s] = []);
                    return g;
                  }),
                  (i._bucketAddBody = function (d, s, g) {
                    var S = d.pairs,
                      r = c.id,
                      y = s.length,
                      v;
                    for (v = 0; v < y; v++) {
                      var x = s[v];
                      if (!(g.id === x.id || (g.isStatic && x.isStatic))) {
                        var C = r(g, x),
                          O = S[C];
                        O ? (O[2] += 1) : (S[C] = [g, x, 1]);
                      }
                    }
                    s.push(g);
                  }),
                  (i._bucketRemoveBody = function (d, s, g) {
                    var S = d.pairs,
                      r = c.id,
                      y;
                    s.splice(m.indexOf(s, g), 1);
                    var v = s.length;
                    for (y = 0; y < v; y++) {
                      var x = S[r(g, s[y])];
                      x && (x[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (d) {
                    var s,
                      g = d.pairs,
                      S = m.keys(g),
                      r = S.length,
                      y = [],
                      v;
                    for (v = 0; v < r; v++) ((s = g[S[v]]), s[2] > 0 ? y.push(s) : delete g[S[v]]);
                    return y;
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(3),
                m = h(7),
                f = h(14),
                d = h(5),
                s = h(13),
                g = h(10),
                S = h(6),
                r = h(0),
                y = h(1);
              (function () {
                ((i.create = function (v, x) {
                  var C = (v ? v.mouse : null) || (x ? x.mouse : null);
                  C ||
                    (v && v.render && v.render.canvas
                      ? (C = f.create(v.render.canvas))
                      : x && x.element
                        ? (C = f.create(x.element))
                        : ((C = f.create()),
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
                    U = {
                      type: 'mouseConstraint',
                      mouse: C,
                      element: null,
                      body: null,
                      constraint: O,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    Y = r.extend(U, x);
                  return (
                    d.on(v, 'beforeUpdate', function () {
                      var T = S.allBodies(v.world);
                      (i.update(Y, T), i._triggerEvents(Y));
                    }),
                    Y
                  );
                }),
                  (i.update = function (v, x) {
                    var C = v.mouse,
                      O = v.constraint,
                      U = v.body;
                    if (C.button === 0) {
                      if (O.bodyB) (m.set(O.bodyB, !1), (O.pointA = C.position));
                      else
                        for (var Y = 0; Y < x.length; Y++)
                          if (
                            ((U = x[Y]),
                            y.contains(U.bounds, C.position) &&
                              s.canCollide(U.collisionFilter, v.collisionFilter))
                          )
                            for (var T = U.parts.length > 1 ? 1 : 0; T < U.parts.length; T++) {
                              var z = U.parts[T];
                              if (c.contains(z.vertices, C.position)) {
                                ((O.pointA = C.position),
                                  (O.bodyB = v.body = U),
                                  (O.pointB = {
                                    x: C.position.x - U.position.x,
                                    y: C.position.y - U.position.y,
                                  }),
                                  (O.angleB = U.angle),
                                  m.set(U, !1),
                                  d.trigger(v, 'startdrag', { mouse: C, body: U }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = v.body = null),
                        (O.pointB = null),
                        U && d.trigger(v, 'enddrag', { mouse: C, body: U }));
                  }),
                  (i._triggerEvents = function (v) {
                    var x = v.mouse,
                      C = x.sourceEvents;
                    (C.mousemove && d.trigger(v, 'mousemove', { mouse: x }),
                      C.mousedown && d.trigger(v, 'mousedown', { mouse: x }),
                      C.mouseup && d.trigger(v, 'mouseup', { mouse: x }),
                      f.clearSourceEvents(x));
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(2),
                m = h(8),
                f = h(1),
                d = h(12),
                s = h(3);
              (function () {
                ((i.collides = function (g, S) {
                  for (
                    var r = [], y = S.length, v = g.bounds, x = m.collides, C = f.overlaps, O = 0;
                    O < y;
                    O++
                  ) {
                    var U = S[O],
                      Y = U.parts.length,
                      T = Y === 1 ? 0 : 1;
                    if (C(U.bounds, v))
                      for (var z = T; z < Y; z++) {
                        var D = U.parts[z];
                        if (C(D.bounds, v)) {
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
                      var v = c.angle(S, r),
                        x = c.magnitude(c.sub(S, r)),
                        C = (r.x + S.x) * 0.5,
                        O = (r.y + S.y) * 0.5,
                        U = d.rectangle(C, O, x, y, { angle: v }),
                        Y = i.collides(U, g),
                        T = 0;
                      T < Y.length;
                      T += 1
                    ) {
                      var z = Y[T];
                      z.body = z.bodyB = z.bodyA;
                    }
                    return Y;
                  }),
                  (i.region = function (g, S, r) {
                    for (var y = [], v = 0; v < g.length; v++) {
                      var x = g[v],
                        C = f.overlaps(x.bounds, S);
                      ((C && !r) || (!C && r)) && y.push(x);
                    }
                    return y;
                  }),
                  (i.point = function (g, S) {
                    for (var r = [], y = 0; y < g.length; y++) {
                      var v = g[y];
                      if (f.contains(v.bounds, S))
                        for (var x = v.parts.length === 1 ? 0 : 1; x < v.parts.length; x++) {
                          var C = v.parts[x];
                          if (f.contains(C.bounds, S) && s.contains(C.vertices, S)) {
                            r.push(v);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(4),
                m = h(0),
                f = h(6),
                d = h(1),
                s = h(5),
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
                      var N = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, B = 0;
                      B < z.length;
                      B += 1
                    ) {
                      var w = z[B],
                        H = w.bounds ? w.bounds.min : w.min || w.position || w,
                        K = w.bounds ? w.bounds.max : w.max || w.position || w;
                      H &&
                        K &&
                        (H.x < N.min.x && (N.min.x = H.x),
                        K.x > N.max.x && (N.max.x = K.x),
                        H.y < N.min.y && (N.min.y = H.y),
                        K.y > N.max.y && (N.max.y = K.y));
                    }
                    var ee = N.max.x - N.min.x + 2 * D.x,
                      P = N.max.y - N.min.y + 2 * D.y,
                      j = T.canvas.height,
                      J = T.canvas.width,
                      te = J / j,
                      ue = ee / P,
                      de = 1,
                      L = 1;
                    (ue > te ? (L = ue / te) : (de = te / ue),
                      (T.options.hasBounds = !0),
                      (T.bounds.min.x = N.min.x),
                      (T.bounds.max.x = N.min.x + ee * de),
                      (T.bounds.min.y = N.min.y),
                      (T.bounds.max.y = N.min.y + P * L),
                      R &&
                        ((T.bounds.min.x += ee * 0.5 - ee * de * 0.5),
                        (T.bounds.max.x += ee * 0.5 - ee * de * 0.5),
                        (T.bounds.min.y += P * 0.5 - P * L * 0.5),
                        (T.bounds.max.y += P * 0.5 - P * L * 0.5)),
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
                      N = D / T.options.height;
                    (T.context.setTransform(
                      T.options.pixelRatio / R,
                      0,
                      0,
                      T.options.pixelRatio / N,
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
                      N = R.world,
                      B = T.canvas,
                      w = T.context,
                      H = T.options,
                      K = T.timing,
                      ee = f.allBodies(N),
                      P = f.allConstraints(N),
                      j = H.wireframes ? H.wireframeBackground : H.background,
                      J = [],
                      te = [],
                      ue,
                      de = { timestamp: R.timing.timestamp };
                    if (
                      (s.trigger(T, 'beforeRender', de),
                      T.currentBackground !== j && Y(T, j),
                      (w.globalCompositeOperation = 'source-in'),
                      (w.fillStyle = 'transparent'),
                      w.fillRect(0, 0, B.width, B.height),
                      (w.globalCompositeOperation = 'source-over'),
                      H.hasBounds)
                    ) {
                      for (ue = 0; ue < ee.length; ue++) {
                        var L = ee[ue];
                        d.overlaps(L.bounds, T.bounds) && J.push(L);
                      }
                      for (ue = 0; ue < P.length; ue++) {
                        var $ = P[ue],
                          le = $.bodyA,
                          ae = $.bodyB,
                          oe = $.pointA,
                          ne = $.pointB;
                        (le && (oe = g.add(le.position, $.pointA)),
                          ae && (ne = g.add(ae.position, $.pointB)),
                          !(!oe || !ne) &&
                            (d.contains(T.bounds, oe) || d.contains(T.bounds, ne)) &&
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
                      ((te = P),
                        (J = ee),
                        T.options.pixelRatio !== 1 &&
                          T.context.setTransform(
                            T.options.pixelRatio,
                            0,
                            0,
                            T.options.pixelRatio,
                            0,
                            0
                          ));
                    (!H.wireframes || (R.enableSleeping && H.showSleeping)
                      ? i.bodies(T, J, w)
                      : (H.showConvexHulls && i.bodyConvexHulls(T, J, w),
                        i.bodyWireframes(T, J, w)),
                      H.showBounds && i.bodyBounds(T, J, w),
                      (H.showAxes || H.showAngleIndicator) && i.bodyAxes(T, J, w),
                      H.showPositions && i.bodyPositions(T, J, w),
                      H.showVelocity && i.bodyVelocity(T, J, w),
                      H.showIds && i.bodyIds(T, J, w),
                      H.showSeparations && i.separations(T, R.pairs.list, w),
                      H.showCollisions && i.collisions(T, R.pairs.list, w),
                      H.showVertexNumbers && i.vertexNumbers(T, J, w),
                      H.showMousePosition && i.mousePosition(T, T.mouse, w),
                      i.constraints(te, w),
                      H.hasBounds && i.endViewTransform(T),
                      s.trigger(T, 'afterRender', de),
                      (K.lastElapsed = m.now() - D));
                  }),
                  (i.stats = function (T, z, D) {
                    for (
                      var R = T.engine,
                        N = R.world,
                        B = f.allBodies(N),
                        w = 0,
                        H = 55,
                        K = 44,
                        ee = 0,
                        P = 0,
                        j = 0;
                      j < B.length;
                      j += 1
                    )
                      w += B[j].parts.length;
                    var J = {
                      Part: w,
                      Body: B.length,
                      Cons: f.allConstraints(N).length,
                      Comp: f.allComposites(N).length,
                      Pair: R.pairs.list.length,
                    };
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(ee, P, H * 5.5, K),
                      (z.font = '12px Arial'),
                      (z.textBaseline = 'top'),
                      (z.textAlign = 'right'));
                    for (var te in J) {
                      var ue = J[te];
                      ((z.fillStyle = '#aaa'),
                        z.fillText(te, ee + H, P + 8),
                        (z.fillStyle = '#eee'),
                        z.fillText(ue, ee + H, P + 26),
                        (ee += H));
                    }
                  }),
                  (i.performance = function (T, z) {
                    var D = T.engine,
                      R = T.timing,
                      N = R.deltaHistory,
                      B = R.elapsedHistory,
                      w = R.timestampElapsedHistory,
                      H = R.engineDeltaHistory,
                      K = R.engineUpdatesHistory,
                      ee = R.engineElapsedHistory,
                      P = D.timing.lastUpdatesPerFrame,
                      j = D.timing.lastDelta,
                      J = x(N),
                      te = x(B),
                      ue = x(H),
                      de = x(K),
                      L = x(ee),
                      $ = x(w),
                      le = $ / J || 0,
                      ae = Math.round(J / j),
                      oe = 1e3 / J || 0,
                      ne = 4,
                      me = 12,
                      Te = 60,
                      Be = 34,
                      tt = 10,
                      nt = 69;
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(0, 50, me * 5 + Te * 6 + 22, Be),
                      i.status(
                        z,
                        tt,
                        nt,
                        Te,
                        ne,
                        N.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function (Je) {
                          return N[Je] / J - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + me + Te,
                        nt,
                        Te,
                        ne,
                        H.length,
                        j.toFixed(2) + ' dt',
                        i._goodDelta / j,
                        function (Je) {
                          return H[Je] / ue - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (me + Te) * 2,
                        nt,
                        Te,
                        ne,
                        K.length,
                        P + ' upf',
                        Math.pow(m.clamp(de / ae || 1, 0, 1), 4),
                        function (Je) {
                          return K[Je] / de - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (me + Te) * 3,
                        nt,
                        Te,
                        ne,
                        ee.length,
                        L.toFixed(2) + ' ut',
                        1 - (P * L) / i._goodFps,
                        function (Je) {
                          return ee[Je] / L - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (me + Te) * 4,
                        nt,
                        Te,
                        ne,
                        B.length,
                        te.toFixed(2) + ' rt',
                        1 - te / i._goodFps,
                        function (Je) {
                          return B[Je] / te - 1;
                        }
                      ),
                      i.status(
                        z,
                        tt + (me + Te) * 5,
                        nt,
                        Te,
                        ne,
                        w.length,
                        le.toFixed(2) + ' x',
                        le * le * le,
                        function (Je) {
                          return (w[Je] / N[Je] / le || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (T, z, D, R, N, B, w, H, K) {
                    ((T.strokeStyle = '#888'),
                      (T.fillStyle = '#444'),
                      (T.lineWidth = 1),
                      T.fillRect(z, D + 7, R, 1),
                      T.beginPath(),
                      T.moveTo(z, D + 7 - N * m.clamp(0.4 * K(0), -2, 2)));
                    for (var ee = 0; ee < R; ee += 1)
                      T.lineTo(z + ee, D + 7 - (ee < B ? N * m.clamp(0.4 * K(ee), -2, 2) : 0));
                    (T.stroke(),
                      (T.fillStyle = 'hsl(' + m.clamp(25 + 95 * H, 0, 120) + ',100%,60%)'),
                      T.fillRect(z, D - 7, 4, 4),
                      (T.font = '12px Arial'),
                      (T.textBaseline = 'middle'),
                      (T.textAlign = 'right'),
                      (T.fillStyle = '#eee'),
                      T.fillText(w, z + R, D - 5));
                  }),
                  (i.constraints = function (T, z) {
                    for (var D = z, R = 0; R < T.length; R++) {
                      var N = T[R];
                      if (!(!N.render.visible || !N.pointA || !N.pointB)) {
                        var B = N.bodyA,
                          w = N.bodyB,
                          H,
                          K;
                        if (
                          (B ? (H = g.add(B.position, N.pointA)) : (H = N.pointA),
                          N.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(H.x, H.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (w ? (K = g.add(w.position, N.pointB)) : (K = N.pointB),
                            D.beginPath(),
                            D.moveTo(H.x, H.y),
                            N.render.type === 'spring')
                          )
                            for (
                              var ee = g.sub(K, H),
                                P = g.perp(g.normalise(ee)),
                                j = Math.ceil(m.clamp(N.length / 5, 12, 20)),
                                J,
                                te = 1;
                              te < j;
                              te += 1
                            )
                              ((J = te % 2 === 0 ? 1 : -1),
                                D.lineTo(
                                  H.x + ee.x * (te / j) + P.x * J * 4,
                                  H.y + ee.y * (te / j) + P.y * J * 4
                                ));
                          D.lineTo(K.x, K.y);
                        }
                        (N.render.lineWidth &&
                          ((D.lineWidth = N.render.lineWidth),
                          (D.strokeStyle = N.render.strokeStyle),
                          D.stroke()),
                          N.render.anchors &&
                            ((D.fillStyle = N.render.strokeStyle),
                            D.beginPath(),
                            D.arc(H.x, H.y, 3, 0, 2 * Math.PI),
                            D.arc(K.x, K.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var N = T.options,
                      B = N.showInternalEdges || !N.wireframes,
                      w,
                      H,
                      K,
                      ee;
                    for (K = 0; K < z.length; K++)
                      if (((w = z[K]), !!w.render.visible)) {
                        for (ee = w.parts.length > 1 ? 1 : 0; ee < w.parts.length; ee++)
                          if (((H = w.parts[ee]), !!H.render.visible)) {
                            if (
                              (N.showSleeping && w.isSleeping
                                ? (R.globalAlpha = 0.5 * H.render.opacity)
                                : H.render.opacity !== 1 && (R.globalAlpha = H.render.opacity),
                              H.render.sprite && H.render.sprite.texture && !N.wireframes)
                            ) {
                              var P = H.render.sprite,
                                j = U(T, P.texture);
                              (R.translate(H.position.x, H.position.y),
                                R.rotate(H.angle),
                                R.drawImage(
                                  j,
                                  j.width * -P.xOffset * P.xScale,
                                  j.height * -P.yOffset * P.yScale,
                                  j.width * P.xScale,
                                  j.height * P.yScale
                                ),
                                R.rotate(-H.angle),
                                R.translate(-H.position.x, -H.position.y));
                            } else {
                              if (H.circleRadius)
                                (R.beginPath(),
                                  R.arc(
                                    H.position.x,
                                    H.position.y,
                                    H.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (R.beginPath(), R.moveTo(H.vertices[0].x, H.vertices[0].y));
                                for (var J = 1; J < H.vertices.length; J++)
                                  (!H.vertices[J - 1].isInternal || B
                                    ? R.lineTo(H.vertices[J].x, H.vertices[J].y)
                                    : R.moveTo(H.vertices[J].x, H.vertices[J].y),
                                    H.vertices[J].isInternal &&
                                      !B &&
                                      R.moveTo(
                                        H.vertices[(J + 1) % H.vertices.length].x,
                                        H.vertices[(J + 1) % H.vertices.length].y
                                      ));
                                (R.lineTo(H.vertices[0].x, H.vertices[0].y), R.closePath());
                              }
                              N.wireframes
                                ? ((R.lineWidth = 1),
                                  (R.strokeStyle = T.options.wireframeStrokeStyle),
                                  R.stroke())
                                : ((R.fillStyle = H.render.fillStyle),
                                  H.render.lineWidth &&
                                    ((R.lineWidth = H.render.lineWidth),
                                    (R.strokeStyle = H.render.strokeStyle),
                                    R.stroke()),
                                  R.fill());
                            }
                            R.globalAlpha = 1;
                          }
                      }
                  }),
                  (i.bodyWireframes = function (T, z, D) {
                    var R = D,
                      N = T.options.showInternalEdges,
                      B,
                      w,
                      H,
                      K,
                      ee;
                    for (R.beginPath(), H = 0; H < z.length; H++)
                      if (((B = z[H]), !!B.render.visible))
                        for (ee = B.parts.length > 1 ? 1 : 0; ee < B.parts.length; ee++) {
                          for (
                            w = B.parts[ee], R.moveTo(w.vertices[0].x, w.vertices[0].y), K = 1;
                            K < w.vertices.length;
                            K++
                          )
                            (!w.vertices[K - 1].isInternal || N
                              ? R.lineTo(w.vertices[K].x, w.vertices[K].y)
                              : R.moveTo(w.vertices[K].x, w.vertices[K].y),
                              w.vertices[K].isInternal &&
                                !N &&
                                R.moveTo(
                                  w.vertices[(K + 1) % w.vertices.length].x,
                                  w.vertices[(K + 1) % w.vertices.length].y
                                ));
                          R.lineTo(w.vertices[0].x, w.vertices[0].y);
                        }
                    ((R.lineWidth = 1),
                      (R.strokeStyle = T.options.wireframeStrokeStyle),
                      R.stroke());
                  }),
                  (i.bodyConvexHulls = function (T, z, D) {
                    var R = D,
                      N,
                      B,
                      w;
                    for (R.beginPath(), B = 0; B < z.length; B++)
                      if (((N = z[B]), !(!N.render.visible || N.parts.length === 1))) {
                        for (
                          R.moveTo(N.vertices[0].x, N.vertices[0].y), w = 1;
                          w < N.vertices.length;
                          w++
                        )
                          R.lineTo(N.vertices[w].x, N.vertices[w].y);
                        R.lineTo(N.vertices[0].x, N.vertices[0].y);
                      }
                    ((R.lineWidth = 1), (R.strokeStyle = 'rgba(255,255,255,0.2)'), R.stroke());
                  }),
                  (i.vertexNumbers = function (T, z, D) {
                    var R = D,
                      N,
                      B,
                      w;
                    for (N = 0; N < z.length; N++) {
                      var H = z[N].parts;
                      for (w = H.length > 1 ? 1 : 0; w < H.length; w++) {
                        var K = H[w];
                        for (B = 0; B < K.vertices.length; B++)
                          ((R.fillStyle = 'rgba(255,255,255,0.2)'),
                            R.fillText(
                              N + '_' + B,
                              K.position.x + (K.vertices[B].x - K.position.x) * 0.8,
                              K.position.y + (K.vertices[B].y - K.position.y) * 0.8
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
                    var N = T.options;
                    R.beginPath();
                    for (var B = 0; B < z.length; B++) {
                      var w = z[B];
                      if (w.render.visible)
                        for (var H = z[B].parts, K = H.length > 1 ? 1 : 0; K < H.length; K++) {
                          var ee = H[K];
                          R.rect(
                            ee.bounds.min.x,
                            ee.bounds.min.y,
                            ee.bounds.max.x - ee.bounds.min.x,
                            ee.bounds.max.y - ee.bounds.min.y
                          );
                        }
                    }
                    (N.wireframes
                      ? (R.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (R.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (R.lineWidth = 1),
                      R.stroke());
                  }),
                  (i.bodyAxes = function (T, z, D) {
                    var R = D;
                    T.engine;
                    var N = T.options,
                      B,
                      w,
                      H,
                      K;
                    for (R.beginPath(), w = 0; w < z.length; w++) {
                      var ee = z[w],
                        P = ee.parts;
                      if (ee.render.visible)
                        if (N.showAxes)
                          for (H = P.length > 1 ? 1 : 0; H < P.length; H++)
                            for (B = P[H], K = 0; K < B.axes.length; K++) {
                              var j = B.axes[K];
                              (R.moveTo(B.position.x, B.position.y),
                                R.lineTo(B.position.x + j.x * 20, B.position.y + j.y * 20));
                            }
                        else
                          for (H = P.length > 1 ? 1 : 0; H < P.length; H++)
                            for (B = P[H], K = 0; K < B.axes.length; K++)
                              (R.moveTo(B.position.x, B.position.y),
                                R.lineTo(
                                  (B.vertices[0].x + B.vertices[B.vertices.length - 1].x) / 2,
                                  (B.vertices[0].y + B.vertices[B.vertices.length - 1].y) / 2
                                ));
                    }
                    (N.wireframes
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
                    var N = T.options,
                      B,
                      w,
                      H,
                      K;
                    for (R.beginPath(), H = 0; H < z.length; H++)
                      if (((B = z[H]), !!B.render.visible))
                        for (K = 0; K < B.parts.length; K++)
                          ((w = B.parts[K]),
                            R.arc(w.position.x, w.position.y, 3, 0, 2 * Math.PI, !1),
                            R.closePath());
                    for (
                      N.wireframes
                        ? (R.fillStyle = 'indianred')
                        : (R.fillStyle = 'rgba(0,0,0,0.5)'),
                        R.fill(),
                        R.beginPath(),
                        H = 0;
                      H < z.length;
                      H++
                    )
                      ((B = z[H]),
                        B.render.visible &&
                          (R.arc(B.positionPrev.x, B.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          R.closePath()));
                    ((R.fillStyle = 'rgba(255,165,0,0.8)'), R.fill());
                  }),
                  (i.bodyVelocity = function (T, z, D) {
                    var R = D;
                    R.beginPath();
                    for (var N = 0; N < z.length; N++) {
                      var B = z[N];
                      if (B.render.visible) {
                        var w = c.getVelocity(B);
                        (R.moveTo(B.position.x, B.position.y),
                          R.lineTo(B.position.x + w.x, B.position.y + w.y));
                      }
                    }
                    ((R.lineWidth = 3), (R.strokeStyle = 'cornflowerblue'), R.stroke());
                  }),
                  (i.bodyIds = function (T, z, D) {
                    var R = D,
                      N,
                      B;
                    for (N = 0; N < z.length; N++)
                      if (z[N].render.visible) {
                        var w = z[N].parts;
                        for (B = w.length > 1 ? 1 : 0; B < w.length; B++) {
                          var H = w[B];
                          ((R.font = '12px Arial'),
                            (R.fillStyle = 'rgba(255,255,255,0.5)'),
                            R.fillText(H.id, H.position.x + 10, H.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (T, z, D) {
                    var R = D,
                      N = T.options,
                      B,
                      w,
                      H,
                      K;
                    for (R.beginPath(), H = 0; H < z.length; H++)
                      if (((B = z[H]), !!B.isActive))
                        for (w = B.collision, K = 0; K < B.contactCount; K++) {
                          var ee = B.contacts[K],
                            P = ee.vertex;
                          R.rect(P.x - 1.5, P.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      N.wireframes
                        ? (R.fillStyle = 'rgba(255,255,255,0.7)')
                        : (R.fillStyle = 'orange'),
                        R.fill(),
                        R.beginPath(),
                        H = 0;
                      H < z.length;
                      H++
                    )
                      if (((B = z[H]), !!B.isActive && ((w = B.collision), B.contactCount > 0))) {
                        var j = B.contacts[0].vertex.x,
                          J = B.contacts[0].vertex.y;
                        (B.contactCount === 2 &&
                          ((j = (B.contacts[0].vertex.x + B.contacts[1].vertex.x) / 2),
                          (J = (B.contacts[0].vertex.y + B.contacts[1].vertex.y) / 2)),
                          w.bodyB === w.supports[0].body || w.bodyA.isStatic === !0
                            ? R.moveTo(j - w.normal.x * 8, J - w.normal.y * 8)
                            : R.moveTo(j + w.normal.x * 8, J + w.normal.y * 8),
                          R.lineTo(j, J));
                      }
                    (N.wireframes
                      ? (R.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (R.strokeStyle = 'orange'),
                      (R.lineWidth = 1),
                      R.stroke());
                  }),
                  (i.separations = function (T, z, D) {
                    var R = D,
                      N = T.options,
                      B,
                      w,
                      H,
                      K,
                      ee;
                    for (R.beginPath(), ee = 0; ee < z.length; ee++)
                      if (((B = z[ee]), !!B.isActive)) {
                        ((w = B.collision), (H = w.bodyA), (K = w.bodyB));
                        var P = 1;
                        (!K.isStatic && !H.isStatic && (P = 0.5),
                          K.isStatic && (P = 0),
                          R.moveTo(K.position.x, K.position.y),
                          R.lineTo(
                            K.position.x - w.penetration.x * P,
                            K.position.y - w.penetration.y * P
                          ),
                          (P = 1),
                          !K.isStatic && !H.isStatic && (P = 0.5),
                          H.isStatic && (P = 0),
                          R.moveTo(H.position.x, H.position.y),
                          R.lineTo(
                            H.position.x + w.penetration.x * P,
                            H.position.y + w.penetration.y * P
                          ));
                      }
                    (N.wireframes
                      ? (R.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (R.strokeStyle = 'orange'),
                      R.stroke());
                  }),
                  (i.inspector = function (T, z) {
                    T.engine;
                    var D = T.selected,
                      R = T.render,
                      N = R.options,
                      B;
                    if (N.hasBounds) {
                      var w = R.bounds.max.x - R.bounds.min.x,
                        H = R.bounds.max.y - R.bounds.min.y,
                        K = w / R.options.width,
                        ee = H / R.options.height;
                      (z.scale(1 / K, 1 / ee), z.translate(-R.bounds.min.x, -R.bounds.min.y));
                    }
                    for (var P = 0; P < D.length; P++) {
                      var j = D[P].data;
                      switch (
                        (z.translate(0.5, 0.5),
                        (z.lineWidth = 1),
                        (z.strokeStyle = 'rgba(255,165,0,0.9)'),
                        z.setLineDash([1, 2]),
                        j.type)
                      ) {
                        case 'body':
                          ((B = j.bounds),
                            z.beginPath(),
                            z.rect(
                              Math.floor(B.min.x - 3),
                              Math.floor(B.min.y - 3),
                              Math.floor(B.max.x - B.min.x + 6),
                              Math.floor(B.max.y - B.min.y + 6)
                            ),
                            z.closePath(),
                            z.stroke());
                          break;
                        case 'constraint':
                          var J = j.pointA;
                          (j.bodyA && (J = j.pointB),
                            z.beginPath(),
                            z.arc(J.x, J.y, 10, 0, 2 * Math.PI),
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
                      (B = T.selectBounds),
                      z.beginPath(),
                      z.rect(
                        Math.floor(B.min.x),
                        Math.floor(B.min.y),
                        Math.floor(B.max.x - B.min.x),
                        Math.floor(B.max.y - B.min.y)
                      ),
                      z.closePath(),
                      z.stroke(),
                      z.fill(),
                      z.translate(-0.5, -0.5)),
                      N.hasBounds && z.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (T, z) {
                    var D = T.engine,
                      R = T.timing,
                      N = R.historySize,
                      B = D.timing.timestamp;
                    ((R.delta = z - R.lastTime || i._goodDelta),
                      (R.lastTime = z),
                      (R.timestampElapsed = B - R.lastTimestamp || 0),
                      (R.lastTimestamp = B),
                      R.deltaHistory.unshift(R.delta),
                      (R.deltaHistory.length = Math.min(R.deltaHistory.length, N)),
                      R.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (R.engineDeltaHistory.length = Math.min(R.engineDeltaHistory.length, N)),
                      R.timestampElapsedHistory.unshift(R.timestampElapsed),
                      (R.timestampElapsedHistory.length = Math.min(
                        R.timestampElapsedHistory.length,
                        N
                      )),
                      R.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (R.engineUpdatesHistory.length = Math.min(R.engineUpdatesHistory.length, N)),
                      R.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (R.engineElapsedHistory.length = Math.min(R.engineElapsedHistory.length, N)),
                      R.elapsedHistory.unshift(R.lastElapsed),
                      (R.elapsedHistory.length = Math.min(R.elapsedHistory.length, N)));
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
                  U = function (T, z) {
                    var D = T.textures[z];
                    return D || ((D = T.textures[z] = new Image()), (D.src = z), D);
                  },
                  Y = function (T, z) {
                    var D = z;
                    (/(jpg|gif|png)$/.test(z) && (D = 'url(' + z + ')'),
                      (T.canvas.style.background = D),
                      (T.canvas.style.backgroundSize = 'contain'),
                      (T.currentBackground = z));
                  };
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(5),
                m = h(17),
                f = h(0);
              (function () {
                ((i._maxFrameDelta = 1e3 / 15),
                  (i._frameDeltaFallback = 1e3 / 60),
                  (i._timeBufferMargin = 1.5),
                  (i._elapsedNextEstimate = 1),
                  (i._smoothingLowerBound = 0.1),
                  (i._smoothingUpperBound = 0.9),
                  (i.create = function (s) {
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
                      S = f.extend(g, s);
                    return ((S.fps = 0), S);
                  }),
                  (i.run = function (s, g) {
                    return (
                      (s.timeBuffer = i._frameDeltaFallback),
                      (function S(r) {
                        ((s.frameRequestId = i._onNextFrame(s, S)),
                          r && s.enabled && i.tick(s, g, r));
                      })(),
                      s
                    );
                  }),
                  (i.tick = function (s, g, S) {
                    var r = f.now(),
                      y = s.delta,
                      v = 0,
                      x = S - s.timeLastTick;
                    if (
                      ((!x || !s.timeLastTick || x > Math.max(i._maxFrameDelta, s.maxFrameTime)) &&
                        (x = s.frameDelta || i._frameDeltaFallback),
                      s.frameDeltaSmoothing)
                    ) {
                      (s.frameDeltaHistory.push(x),
                        (s.frameDeltaHistory = s.frameDeltaHistory.slice(
                          -s.frameDeltaHistorySize
                        )));
                      var C = s.frameDeltaHistory.slice(0).sort(),
                        O = s.frameDeltaHistory.slice(
                          C.length * i._smoothingLowerBound,
                          C.length * i._smoothingUpperBound
                        ),
                        U = d(O);
                      x = U || x;
                    }
                    (s.frameDeltaSnapping && (x = 1e3 / Math.round(1e3 / x)),
                      (s.frameDelta = x),
                      (s.timeLastTick = S),
                      (s.timeBuffer += s.frameDelta),
                      (s.timeBuffer = f.clamp(
                        s.timeBuffer,
                        0,
                        s.frameDelta + y * i._timeBufferMargin
                      )),
                      (s.lastUpdatesDeferred = 0));
                    var Y = s.maxUpdates || Math.ceil(s.maxFrameTime / y),
                      T = { timestamp: g.timing.timestamp };
                    (c.trigger(s, 'beforeTick', T), c.trigger(s, 'tick', T));
                    for (var z = f.now(); y > 0 && s.timeBuffer >= y * i._timeBufferMargin; ) {
                      (c.trigger(s, 'beforeUpdate', T),
                        m.update(g, y),
                        c.trigger(s, 'afterUpdate', T),
                        (s.timeBuffer -= y),
                        (v += 1));
                      var D = f.now() - r,
                        R = f.now() - z,
                        N = D + (i._elapsedNextEstimate * R) / v;
                      if (v >= Y || N > s.maxFrameTime) {
                        s.lastUpdatesDeferred = Math.round(
                          Math.max(0, s.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((g.timing.lastUpdatesPerFrame = v),
                      c.trigger(s, 'afterTick', T),
                      s.frameDeltaHistory.length >= 100 &&
                        (s.lastUpdatesDeferred && Math.round(s.frameDelta / y) > Y
                          ? f.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : s.lastUpdatesDeferred &&
                            f.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof s.isFixed < 'u' &&
                          f.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (s.deltaMin || s.deltaMax) &&
                          f.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        s.fps !== 0 &&
                          f.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (i.stop = function (s) {
                    i._cancelNextFrame(s);
                  }),
                  (i._onNextFrame = function (s, g) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      s.frameRequestId = window.requestAnimationFrame(g);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.requestAnimationFrame.'
                      );
                    return s.frameRequestId;
                  }),
                  (i._cancelNextFrame = function (s) {
                    if (typeof window < 'u' && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(s.frameRequestId);
                    else
                      throw new Error(
                        'Matter.Runner: missing required global window.cancelAnimationFrame.'
                      );
                  }));
                var d = function (s) {
                  for (var g = 0, S = s.length, r = 0; r < S; r += 1) g += s[r];
                  return g / S || 0;
                };
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
              var c = h(8),
                m = h(0),
                f = m.deprecated;
              (function () {
                ((i.collides = function (d, s) {
                  return c.collides(d, s);
                }),
                  f(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (b, E, h) {
              var i = {};
              ((b.exports = i), h(1));
              var c = h(0);
              (function () {
                ((i.pathToVertices = function (m, f) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    c.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var d,
                    s,
                    g,
                    S,
                    r,
                    y,
                    v,
                    x,
                    C,
                    O,
                    U = [],
                    Y,
                    T,
                    z = 0,
                    D = 0,
                    R = 0;
                  f = f || 15;
                  var N = function (w, H, K) {
                      var ee = K % 2 === 1 && K > 1;
                      if (!C || w != C.x || H != C.y) {
                        C && ee ? ((Y = C.x), (T = C.y)) : ((Y = 0), (T = 0));
                        var P = { x: Y + w, y: T + H };
                        ((ee || !C) && (C = P), U.push(P), (D = Y + w), (R = T + H));
                      }
                    },
                    B = function (w) {
                      var H = w.pathSegTypeAsLetter.toUpperCase();
                      if (H !== 'Z') {
                        switch (H) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = w.x), (R = w.y));
                            break;
                          case 'H':
                            D = w.x;
                            break;
                          case 'V':
                            R = w.y;
                            break;
                        }
                        N(D, R, w.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(m), g = m.getTotalLength(), y = [], d = 0;
                    d < m.pathSegList.numberOfItems;
                    d += 1
                  )
                    y.push(m.pathSegList.getItem(d));
                  for (v = y.concat(); z < g; ) {
                    if (((O = m.getPathSegAtLength(z)), (r = y[O]), r != x)) {
                      for (; v.length && v[0] != r; ) B(v.shift());
                      x = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((S = m.getPointAtLength(z)), N(S.x, S.y, 0));
                        break;
                    }
                    z += f;
                  }
                  for (d = 0, s = v.length; d < s; ++d) B(v[d]);
                  return U;
                }),
                  (i._svgPathToAbsolute = function (m) {
                    for (
                      var f,
                        d,
                        s,
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
                      var U = y.getItem(O),
                        Y = U.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(Y)) ('x' in U && (v = U.x), 'y' in U && (x = U.y));
                      else
                        switch (
                          ('x1' in U && (s = v + U.x1),
                          'x2' in U && (S = v + U.x2),
                          'y1' in U && (g = x + U.y1),
                          'y2' in U && (r = x + U.y2),
                          'x' in U && (v += U.x),
                          'y' in U && (x += U.y),
                          Y)
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
                            y.replaceItem(m.createSVGPathSegCurvetoCubicAbs(v, x, s, g, S, r), O);
                            break;
                          case 's':
                            y.replaceItem(m.createSVGPathSegCurvetoCubicSmoothAbs(v, x, S, r), O);
                            break;
                          case 'q':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticAbs(v, x, s, g), O);
                            break;
                          case 't':
                            y.replaceItem(m.createSVGPathSegCurvetoQuadraticSmoothAbs(v, x), O);
                            break;
                          case 'a':
                            y.replaceItem(
                              m.createSVGPathSegArcAbs(
                                v,
                                x,
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
                            ((v = f), (x = d));
                            break;
                        }
                      (Y == 'M' || Y == 'm') && ((f = v), (d = x));
                    }
                  }));
              })();
            },
            function (b, E, h) {
              var i = {};
              b.exports = i;
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
      })(Ou)),
    Ou.exports
  );
}
var yp = gp();
const we = R0(yp),
  Xt = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    mergeEffectDurationMs: 700,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
    },
  },
  pp = { 1: 20, 2: 32, 3: 46, 4: 58, 5: 72, 6: 86, 7: 98, 8: 112, 9: 128, 10: 150 },
  Sp = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  xp = {
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
  Ep = {
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
  Tp = {
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
  Yv = {
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
  bp = (o) => (o * (o + 1)) / 2,
  Mp = (o) => ({
    id: o,
    level: o,
    name: xp[o],
    theme: Ep[o],
    radius: pp[o],
    restitution: Sp[o],
    friction: 0.3,
    density: 0.001,
    score: bp(o),
    svgPath: Tp[o],
    color: Yv[o].color,
    glowColor: Yv[o].glow,
  }),
  Wa = 10,
  li = Object.fromEntries(Array.from({ length: Wa }, (o, A) => A + 1).map((o) => [o, Mp(o)]));
Array.from({ length: Wa }, (o, A) => li[A + 1]);
const Ap = 4,
  vt = {
    gravityY: 1.5,
    fieldWidth: 360,
    fieldHeight: 560,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
  },
  rm = typeof window < 'u' && typeof window.localStorage < 'u',
  ps = (o) => {
    if (!rm) return null;
    try {
      return window.localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  Ss = (o, A) => {
    if (rm)
      try {
        window.localStorage.setItem(o, A);
      } catch {}
  },
  Cp = () => {
    const o = ps(Xt.storageKeys.bestScore);
    if (o === null) return 0;
    const A = Number(o);
    return Number.isFinite(A) ? A : 0;
  },
  Rp = (o) => {
    Ss(Xt.storageKeys.bestScore, String(o));
  },
  zp = () => {
    const o = ps(Xt.storageKeys.scoreHistory);
    if (o === null) return [];
    try {
      const A = JSON.parse(o);
      return Array.isArray(A) ? A.filter((b) => typeof b == 'number' && Number.isFinite(b)) : [];
    } catch {
      return [];
    }
  },
  Dp = (o) => {
    const A = [o, ...zp()].slice(0, Xt.maxScoreHistory);
    return (Ss(Xt.storageKeys.scoreHistory, JSON.stringify(A)), A);
  },
  Op = () => {
    const o = ps(Xt.storageKeys.isSoundOn);
    return o === null ? !0 : o === 'true';
  },
  Bp = (o) => {
    Ss(Xt.storageKeys.isSoundOn, String(o));
  },
  Up = () => {
    const [o, A] = Q.useState(0),
      [b, E] = Q.useState(0),
      [h, i] = Q.useState(!1),
      c = Q.useRef(0),
      m = Q.useRef(0);
    Q.useEffect(() => {
      const g = Cp();
      ((m.current = g), E(g));
    }, []);
    const f = Q.useCallback((g) => {
        ((c.current += g), A(c.current));
      }, []),
      d = Q.useCallback(() => {
        ((c.current = 0), A(0), i(!1));
      }, []),
      s = Q.useCallback(() => {
        const g = c.current,
          S = g > m.current;
        return (
          S && ((m.current = g), Rp(g), E(g)),
          Dp(g),
          i(S),
          { isNewRecord: S, finalScore: g }
        );
      }, []);
    return { score: o, bestScore: b, isNewRecord: h, add: f, reset: d, finalize: s };
  },
  Np = () => {
    const [o, A] = Q.useState(!0);
    Q.useEffect(() => {
      A(Op());
    }, []);
    const b = Q.useCallback(() => {
        A((h) => {
          const i = !h;
          return (Bp(i), i);
        });
      }, []),
      E = Q.useCallback((h) => {}, [o]);
    return { isSoundOn: o, toggle: b, play: E };
  },
  Gv = (o, A, b, E) => {
    const h = we.Bodies.circle(A, b, o.radius, {
      restitution: o.restitution,
      friction: o.friction,
      density: o.density,
      label: `item-${o.level}`,
    });
    return ((h.plugin.itemData = { level: o.level, consumed: !1, droppedAt: E }), h);
  },
  Ru = (o) => o.plugin.itemData,
  _p = (o, A) => {
    const b = vt.wallThickness,
      E = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = we.Bodies.rectangle(o / 2, A + b / 2, o + b * 2, b, E),
      i = we.Bodies.rectangle(-b / 2, A / 2, b, A * 2, E),
      c = we.Bodies.rectangle(o + b / 2, A / 2, b, A * 2, E);
    return { ground: h, leftWall: i, rightWall: c };
  },
  Hp = (o, A) => ({ x: (o.position.x + A.position.x) / 2, y: (o.position.y + A.position.y) / 2 }),
  wp = (o) => li[o] ?? null,
  Lp = (o) => (o < 2 || o > Wa ? 0 : li[o].score),
  Yp = () => li[Wa].score,
  is = () => {
    const o = Math.floor(Math.random() * Ap) + 1;
    return li[o];
  },
  Gp = (o) => `/ochimono-game/${o}`.replace(/\/{2,}/g, '/'),
  jv = (o, A) => {
    const b = (A.radius * 2) / 100;
    o.render.sprite = { texture: Gp(A.svgPath), xScale: b, yScale: b };
  },
  jp = () => {
    const o = Q.useRef(null),
      A = Q.useRef(null),
      b = Q.useRef(null),
      E = Q.useRef(null),
      [h, i] = Q.useState('idle'),
      [c, m] = Q.useState(null),
      [f, d] = Q.useState(null),
      [s, g] = Q.useState([]),
      S = Q.useRef(!0),
      r = Q.useRef(0),
      y = Q.useRef('idle'),
      v = Up(),
      x = Np();
    Q.useEffect(() => {
      const R = o.current;
      if (!R) return;
      const N = we.Engine.create({ gravity: { x: 0, y: vt.gravityY } }),
        B = we.Render.create({
          element: R,
          engine: N,
          options: {
            width: vt.fieldWidth,
            height: vt.fieldHeight,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: window.devicePixelRatio || 1,
          },
        }),
        { ground: w, leftWall: H, rightWall: K } = _p(vt.fieldWidth, vt.fieldHeight);
      ([w, H, K].forEach((P) => {
        P.render.visible = !1;
      }),
        we.World.add(N.world, [w, H, K]),
        we.Render.run(B));
      const ee = we.Runner.create();
      return (
        we.Runner.run(ee, N),
        (A.current = N),
        (b.current = B),
        (E.current = ee),
        () => {
          (we.Runner.stop(ee),
            we.Render.stop(B),
            we.World.clear(N.world, !1),
            we.Engine.clear(N),
            B.canvas.parentNode && B.canvas.parentNode.removeChild(B.canvas),
            (B.textures = {}),
            (A.current = null),
            (b.current = null),
            (E.current = null));
        }
      );
    }, []);
    const C = Q.useCallback(
      (R, N) => {
        const B = A.current;
        if (!B) return;
        const w = Ru(R),
          H = Ru(N);
        if (!w || !H || w.consumed || H.consumed || w.level !== H.level) return;
        ((w.consumed = !0), (H.consumed = !0));
        const K = w.level + 1,
          ee = Hp(R, N);
        we.World.remove(B.world, [R, N]);
        let P = 0,
          j = !1;
        if (K > Wa) ((P = Yp()), (j = !0), x.play('special'));
        else {
          const te = wp(K);
          if (te) {
            const ue = Gv(te, ee.x, ee.y, performance.now());
            (jv(ue, te), we.World.add(B.world, ue));
          }
          ((P = Lp(K)), (j = K === Wa), x.play(j ? 'special' : 'merge'));
        }
        v.add(P);
        const J = {
          id: `${performance.now()}-${Math.random().toString(36).slice(2)}`,
          x: ee.x,
          y: ee.y,
          level: K,
          score: P,
          isSpecial: j,
          createdAt: performance.now(),
        };
        (g((te) => [...te, J]),
          window.setTimeout(() => {
            g((te) => te.filter((ue) => ue.id !== J.id));
          }, Xt.mergeEffectDurationMs));
      },
      [v, x]
    );
    Q.useEffect(() => {
      const R = A.current;
      if (!R) return;
      const N = (B) => {
        for (const w of B.pairs) C(w.bodyA, w.bodyB);
      };
      return (
        we.Events.on(R, 'collisionStart', N),
        () => {
          we.Events.off(R, 'collisionStart', N);
        }
      );
    }, [C]);
    const O = Q.useRef(v.finalize);
    O.current = v.finalize;
    const U = Q.useRef(x.play);
    ((U.current = x.play),
      Q.useEffect(() => {
        const R = A.current;
        if (!R) return;
        const N = vt.gameOverLineOffset,
          B = () => {
            if (y.current !== 'playing') return;
            const w = performance.now(),
              H = we.Composite.allBodies(R.world);
            for (const K of H) {
              const ee = Ru(K);
              if (
                !(!ee || ee.consumed) &&
                !(w - ee.droppedAt < vt.gameOverGracePeriodMs) &&
                !(Math.abs(K.velocity.y) > vt.restingVelocityThreshold) &&
                K.position.y - K.circleRadius < N
              ) {
                ((y.current = 'gameover'), i('gameover'));
                const P = O.current();
                U.current(P.isNewRecord ? 'highscore' : 'gameover');
                return;
              }
            }
          };
        return (
          we.Events.on(R, 'afterUpdate', B),
          () => {
            we.Events.off(R, 'afterUpdate', B);
          }
        );
      }, []));
    const Y = Q.useCallback(
        (R) => {
          const N = A.current;
          if (!N || y.current !== 'playing' || !S.current || !c) return;
          const B = performance.now();
          if (B - r.current < Xt.dropCooldownMs) return;
          const w = Math.max(0, Math.min(1, R)),
            H = c.radius + vt.wallThickness / 2,
            K = H,
            ee = vt.fieldWidth - H,
            P = K + w * (ee - K),
            j = c.radius + 4,
            J = Gv(c, P, j, B);
          (jv(J, c),
            we.World.add(N.world, J),
            x.play('drop'),
            (S.current = !1),
            (r.current = B),
            window.setTimeout(() => {
              y.current === 'playing' && (m(f), d(is()), (S.current = !0));
            }, Xt.dropCooldownMs));
        },
        [c, f, x]
      ),
      T = Q.useCallback(() => {
        (v.reset(),
          g([]),
          m(is()),
          d(is()),
          (S.current = !0),
          (r.current = 0),
          (y.current = 'playing'),
          i('playing'));
      }, [v]),
      z = Q.useCallback(() => {
        const R = A.current;
        if (R) {
          const N = we.Composite.allBodies(R.world);
          for (const B of N) Ru(B) && we.World.remove(R.world, B);
        }
        T();
      }, [T]),
      D = vt.gameOverLineOffset;
    return {
      status: h,
      score: v.score,
      bestScore: v.bestScore,
      isNewRecord: v.isNewRecord,
      currentItem: c,
      nextItem: f,
      isSoundOn: x.isSoundOn,
      mergeEffects: s,
      canvasContainerRef: o,
      drop: Y,
      start: T,
      restart: z,
      toggleSound: x.toggle,
      fieldWidth: vt.fieldWidth,
      fieldHeight: vt.fieldHeight,
      gameOverLineY: D,
    };
  },
  Vp = () => {
    const o = jp();
    return ie.jsxs('div', {
      className: as.layout,
      children: [
        ie.jsx(mp, {
          score: o.score,
          bestScore: o.bestScore,
          nextItem: o.nextItem,
          isSoundOn: o.isSoundOn,
          onToggleSound: o.toggleSound,
        }),
        ie.jsx('main', {
          className: as.main,
          children: ie.jsxs('div', {
            className: as.field_wrapper,
            children: [
              ie.jsx(_y, {
                canvasContainerRef: o.canvasContainerRef,
                fieldWidth: o.fieldWidth,
                fieldHeight: o.fieldHeight,
                gameOverLineY: o.gameOverLineY,
                currentItem: o.currentItem,
                mergeEffects: o.mergeEffects,
                canInteract: o.status === 'playing',
                onDrop: o.drop,
              }),
              o.status === 'idle' ? ie.jsx($y, { onStart: o.start }) : null,
              o.status === 'gameover'
                ? ie.jsx(Xy, {
                    score: o.score,
                    bestScore: o.bestScore,
                    isNewRecord: o.isNewRecord,
                    onRestart: o.restart,
                  })
                : null,
            ],
          }),
        }),
      ],
    });
  },
  qp = () => ie.jsx('div', { className: gy.index, children: ie.jsx(Vp, {}) }),
  Xp = () => ie.jsx('div', { children: ie.jsx('h1', { children: 'Not Found' }) });
function Qp() {
  return ie.jsxs(Hg, {
    children: [
      ie.jsx(rs, { path: '/', element: ie.jsx(qp, {}) }),
      ie.jsx(rs, { path: '*', element: ie.jsx(Xp, {}) }),
    ],
  });
}
const fm = document.getElementById('root');
if (!fm) throw new Error('Failed to find #root element');
L0.createRoot(fm).render(ie.jsx(iy, { basename: '/ochimono-game', children: ie.jsx(Qp, {}) }));
