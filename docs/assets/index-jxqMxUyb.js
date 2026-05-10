(function () {
  const b = document.createElement('link').relList;
  if (b && b.supports && b.supports('modulepreload')) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) x(h);
  new MutationObserver((h) => {
    for (const i of h)
      if (i.type === 'childList')
        for (const d of i.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && x(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function T(h) {
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
    const i = T(h);
    fetch(h.href, i);
  }
})();
var Jm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function x0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var bc = { exports: {} },
  Ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var km;
function E0() {
  if (km) return Ai;
  km = 1;
  var s = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function T(x, h, i) {
    var d = null;
    if ((i !== void 0 && (d = '' + i), h.key !== void 0 && (d = '' + h.key), 'key' in h)) {
      i = {};
      for (var f in h) f !== 'key' && (i[f] = h[f]);
    } else i = h;
    return ((h = i.ref), { $$typeof: s, type: x, key: d, ref: h !== void 0 ? h : null, props: i });
  }
  return ((Ai.Fragment = b), (Ai.jsx = T), (Ai.jsxs = T), Ai);
}
var Fm;
function b0() {
  return (Fm || ((Fm = 1), (bc.exports = E0())), bc.exports);
}
var F = b0(),
  Tc = { exports: {} },
  _i = {},
  Mc = { exports: {} },
  Cc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function T0() {
  return (
    $m ||
      (($m = 1),
      (function (s) {
        function b(V, K) {
          var ne = V.length;
          V.push(K);
          e: for (; 0 < ne; ) {
            var se = (ne - 1) >>> 1,
              he = V[se];
            if (0 < h(he, K)) ((V[se] = K), (V[ne] = he), (ne = se));
            else break e;
          }
        }
        function T(V) {
          return V.length === 0 ? null : V[0];
        }
        function x(V) {
          if (V.length === 0) return null;
          var K = V[0],
            ne = V.pop();
          if (ne !== K) {
            V[0] = ne;
            e: for (var se = 0, he = V.length, j = he >>> 1; se < j; ) {
              var $ = 2 * (se + 1) - 1,
                ae = V[$],
                ie = $ + 1,
                oe = V[ie];
              if (0 > h(ae, ne))
                ie < he && 0 > h(oe, ae)
                  ? ((V[se] = oe), (V[ie] = ne), (se = ie))
                  : ((V[se] = ae), (V[$] = ne), (se = $));
              else if (ie < he && 0 > h(oe, ne)) ((V[se] = oe), (V[ie] = ne), (se = ie));
              else break e;
            }
          }
          return K;
        }
        function h(V, K) {
          var ne = V.sortIndex - K.sortIndex;
          return ne !== 0 ? ne : V.id - K.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var i = performance;
          s.unstable_now = function () {
            return i.now();
          };
        } else {
          var d = Date,
            f = d.now();
          s.unstable_now = function () {
            return d.now() - f;
          };
        }
        var c = [],
          m = [],
          o = 1,
          p = null,
          v = 3,
          r = !1,
          y = !1,
          g = !1,
          E = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          D = typeof clearTimeout == 'function' ? clearTimeout : null,
          w = typeof setImmediate < 'u' ? setImmediate : null;
        function H(V) {
          for (var K = T(m); K !== null; ) {
            if (K.callback === null) x(m);
            else if (K.startTime <= V) (x(m), (K.sortIndex = K.expirationTime), b(c, K));
            else break;
            K = T(m);
          }
        }
        function M(V) {
          if (((g = !1), H(V), !y))
            if (T(c) !== null) ((y = !0), _ || ((_ = !0), G()));
            else {
              var K = T(m);
              K !== null && ee(M, K.startTime - V);
            }
        }
        var _ = !1,
          O = -1,
          A = 5,
          B = -1;
        function z() {
          return E ? !0 : !(s.unstable_now() - B < A);
        }
        function L() {
          if (((E = !1), _)) {
            var V = s.unstable_now();
            B = V;
            var K = !0;
            try {
              e: {
                ((y = !1), g && ((g = !1), D(O), (O = -1)), (r = !0));
                var ne = v;
                try {
                  t: {
                    for (H(V), p = T(c); p !== null && !(p.expirationTime > V && z()); ) {
                      var se = p.callback;
                      if (typeof se == 'function') {
                        ((p.callback = null), (v = p.priorityLevel));
                        var he = se(p.expirationTime <= V);
                        if (((V = s.unstable_now()), typeof he == 'function')) {
                          ((p.callback = he), H(V), (K = !0));
                          break t;
                        }
                        (p === T(c) && x(c), H(V));
                      } else x(c);
                      p = T(c);
                    }
                    if (p !== null) K = !0;
                    else {
                      var j = T(m);
                      (j !== null && ee(M, j.startTime - V), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((p = null), (v = ne), (r = !1));
                }
                K = void 0;
              }
            } finally {
              K ? G() : (_ = !1);
            }
          }
        }
        var G;
        if (typeof w == 'function')
          G = function () {
            w(L);
          };
        else if (typeof MessageChannel < 'u') {
          var J = new MessageChannel(),
            te = J.port2;
          ((J.port1.onmessage = L),
            (G = function () {
              te.postMessage(null);
            }));
        } else
          G = function () {
            R(L, 0);
          };
        function ee(V, K) {
          O = R(function () {
            V(s.unstable_now());
          }, K);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (s.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (A = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (s.unstable_next = function (V) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = v;
            }
            var ne = v;
            v = K;
            try {
              return V();
            } finally {
              v = ne;
            }
          }),
          (s.unstable_requestPaint = function () {
            E = !0;
          }),
          (s.unstable_runWithPriority = function (V, K) {
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
            var ne = v;
            v = V;
            try {
              return K();
            } finally {
              v = ne;
            }
          }),
          (s.unstable_scheduleCallback = function (V, K, ne) {
            var se = s.unstable_now();
            switch (
              (typeof ne == 'object' && ne !== null
                ? ((ne = ne.delay), (ne = typeof ne == 'number' && 0 < ne ? se + ne : se))
                : (ne = se),
              V)
            ) {
              case 1:
                var he = -1;
                break;
              case 2:
                he = 250;
                break;
              case 5:
                he = 1073741823;
                break;
              case 4:
                he = 1e4;
                break;
              default:
                he = 5e3;
            }
            return (
              (he = ne + he),
              (V = {
                id: o++,
                callback: K,
                priorityLevel: V,
                startTime: ne,
                expirationTime: he,
                sortIndex: -1,
              }),
              ne > se
                ? ((V.sortIndex = ne),
                  b(m, V),
                  T(c) === null && V === T(m) && (g ? (D(O), (O = -1)) : (g = !0), ee(M, ne - se)))
                : ((V.sortIndex = he), b(c, V), y || r || ((y = !0), _ || ((_ = !0), G()))),
              V
            );
          }),
          (s.unstable_shouldYield = z),
          (s.unstable_wrapCallback = function (V) {
            var K = v;
            return function () {
              var ne = v;
              v = K;
              try {
                return V.apply(this, arguments);
              } finally {
                v = ne;
              }
            };
          }));
      })(Cc)),
    Cc
  );
}
var Wm;
function M0() {
  return (Wm || ((Wm = 1), (Mc.exports = T0())), Mc.exports);
}
var Rc = { exports: {} },
  Se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im;
function C0() {
  if (Im) return Se;
  Im = 1;
  var s = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    T = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
    c = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    o = Symbol.for('react.lazy'),
    p = Symbol.for('react.activity'),
    v = Symbol.iterator;
  function r(j) {
    return j === null || typeof j != 'object'
      ? null
      : ((j = (v && j[v]) || j['@@iterator']), typeof j == 'function' ? j : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    E = {};
  function R(j, $, ae) {
    ((this.props = j), (this.context = $), (this.refs = E), (this.updater = ae || y));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (j, $) {
      if (typeof j != 'object' && typeof j != 'function' && j != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, j, $, 'setState');
    }),
    (R.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, 'forceUpdate');
    }));
  function D() {}
  D.prototype = R.prototype;
  function w(j, $, ae) {
    ((this.props = j), (this.context = $), (this.refs = E), (this.updater = ae || y));
  }
  var H = (w.prototype = new D());
  ((H.constructor = w), g(H, R.prototype), (H.isPureReactComponent = !0));
  var M = Array.isArray;
  function _() {}
  var O = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function B(j, $, ae) {
    var ie = ae.ref;
    return { $$typeof: s, type: j, key: $, ref: ie !== void 0 ? ie : null, props: ae };
  }
  function z(j, $) {
    return B(j.type, $, j.props);
  }
  function L(j) {
    return typeof j == 'object' && j !== null && j.$$typeof === s;
  }
  function G(j) {
    var $ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      j.replace(/[=:]/g, function (ae) {
        return $[ae];
      })
    );
  }
  var J = /\/+/g;
  function te(j, $) {
    return typeof j == 'object' && j !== null && j.key != null ? G('' + j.key) : $.toString(36);
  }
  function ee(j) {
    switch (j.status) {
      case 'fulfilled':
        return j.value;
      case 'rejected':
        throw j.reason;
      default:
        switch (
          (typeof j.status == 'string'
            ? j.then(_, _)
            : ((j.status = 'pending'),
              j.then(
                function ($) {
                  j.status === 'pending' && ((j.status = 'fulfilled'), (j.value = $));
                },
                function ($) {
                  j.status === 'pending' && ((j.status = 'rejected'), (j.reason = $));
                }
              )),
          j.status)
        ) {
          case 'fulfilled':
            return j.value;
          case 'rejected':
            throw j.reason;
        }
    }
    throw j;
  }
  function V(j, $, ae, ie, oe) {
    var ue = typeof j;
    (ue === 'undefined' || ue === 'boolean') && (j = null);
    var ye = !1;
    if (j === null) ye = !0;
    else
      switch (ue) {
        case 'bigint':
        case 'string':
        case 'number':
          ye = !0;
          break;
        case 'object':
          switch (j.$$typeof) {
            case s:
            case b:
              ye = !0;
              break;
            case o:
              return ((ye = j._init), V(ye(j._payload), $, ae, ie, oe));
          }
      }
    if (ye)
      return (
        (oe = oe(j)),
        (ye = ie === '' ? '.' + te(j, 0) : ie),
        M(oe)
          ? ((ae = ''),
            ye != null && (ae = ye.replace(J, '$&/') + '/'),
            V(oe, $, ae, '', function (Ke) {
              return Ke;
            }))
          : oe != null &&
            (L(oe) &&
              (oe = z(
                oe,
                ae +
                  (oe.key == null || (j && j.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(J, '$&/') + '/') +
                  ye
              )),
            $.push(oe)),
        1
      );
    ye = 0;
    var Me = ie === '' ? '.' : ie + ':';
    if (M(j))
      for (var be = 0; be < j.length; be++)
        ((ie = j[be]), (ue = Me + te(ie, be)), (ye += V(ie, $, ae, ue, oe)));
    else if (((be = r(j)), typeof be == 'function'))
      for (j = be.call(j), be = 0; !(ie = j.next()).done; )
        ((ie = ie.value), (ue = Me + te(ie, be++)), (ye += V(ie, $, ae, ue, oe)));
    else if (ue === 'object') {
      if (typeof j.then == 'function') return V(ee(j), $, ae, ie, oe);
      throw (
        ($ = String(j)),
        Error(
          'Objects are not valid as a React child (found: ' +
            ($ === '[object Object]' ? 'object with keys {' + Object.keys(j).join(', ') + '}' : $) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ye;
  }
  function K(j, $, ae) {
    if (j == null) return j;
    var ie = [],
      oe = 0;
    return (
      V(j, ie, '', '', function (ue) {
        return $.call(ae, ue, oe++);
      }),
      ie
    );
  }
  function ne(j) {
    if (j._status === -1) {
      var $ = j._result;
      (($ = $()),
        $.then(
          function (ae) {
            (j._status === 0 || j._status === -1) && ((j._status = 1), (j._result = ae));
          },
          function (ae) {
            (j._status === 0 || j._status === -1) && ((j._status = 2), (j._result = ae));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = $)));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var se =
      typeof reportError == 'function'
        ? reportError
        : function (j) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var $ = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof j == 'object' && j !== null && typeof j.message == 'string'
                    ? String(j.message)
                    : String(j),
                error: j,
              });
              if (!window.dispatchEvent($)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', j);
              return;
            }
            console.error(j);
          },
    he = {
      map: K,
      forEach: function (j, $, ae) {
        K(
          j,
          function () {
            $.apply(this, arguments);
          },
          ae
        );
      },
      count: function (j) {
        var $ = 0;
        return (
          K(j, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (j) {
        return (
          K(j, function ($) {
            return $;
          }) || []
        );
      },
      only: function (j) {
        if (!L(j))
          throw Error('React.Children.only expected to receive a single React element child.');
        return j;
      },
    };
  return (
    (Se.Activity = p),
    (Se.Children = he),
    (Se.Component = R),
    (Se.Fragment = T),
    (Se.Profiler = h),
    (Se.PureComponent = w),
    (Se.StrictMode = x),
    (Se.Suspense = c),
    (Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return O.H.useMemoCache(j);
      },
    }),
    (Se.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (Se.cacheSignal = function () {
      return null;
    }),
    (Se.cloneElement = function (j, $, ae) {
      if (j == null) throw Error('The argument must be a React element, but you passed ' + j + '.');
      var ie = g({}, j.props),
        oe = j.key;
      if ($ != null)
        for (ue in ($.key !== void 0 && (oe = '' + $.key), $))
          !A.call($, ue) ||
            ue === 'key' ||
            ue === '__self' ||
            ue === '__source' ||
            (ue === 'ref' && $.ref === void 0) ||
            (ie[ue] = $[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) ie.children = ae;
      else if (1 < ue) {
        for (var ye = Array(ue), Me = 0; Me < ue; Me++) ye[Me] = arguments[Me + 2];
        ie.children = ye;
      }
      return B(j.type, oe, ie);
    }),
    (Se.createContext = function (j) {
      return (
        (j = {
          $$typeof: d,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (j.Provider = j),
        (j.Consumer = { $$typeof: i, _context: j }),
        j
      );
    }),
    (Se.createElement = function (j, $, ae) {
      var ie,
        oe = {},
        ue = null;
      if ($ != null)
        for (ie in ($.key !== void 0 && (ue = '' + $.key), $))
          A.call($, ie) && ie !== 'key' && ie !== '__self' && ie !== '__source' && (oe[ie] = $[ie]);
      var ye = arguments.length - 2;
      if (ye === 1) oe.children = ae;
      else if (1 < ye) {
        for (var Me = Array(ye), be = 0; be < ye; be++) Me[be] = arguments[be + 2];
        oe.children = Me;
      }
      if (j && j.defaultProps)
        for (ie in ((ye = j.defaultProps), ye)) oe[ie] === void 0 && (oe[ie] = ye[ie]);
      return B(j, ue, oe);
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (j) {
      return { $$typeof: f, render: j };
    }),
    (Se.isValidElement = L),
    (Se.lazy = function (j) {
      return { $$typeof: o, _payload: { _status: -1, _result: j }, _init: ne };
    }),
    (Se.memo = function (j, $) {
      return { $$typeof: m, type: j, compare: $ === void 0 ? null : $ };
    }),
    (Se.startTransition = function (j) {
      var $ = O.T,
        ae = {};
      O.T = ae;
      try {
        var ie = j(),
          oe = O.S;
        (oe !== null && oe(ae, ie),
          typeof ie == 'object' && ie !== null && typeof ie.then == 'function' && ie.then(_, se));
      } catch (ue) {
        se(ue);
      } finally {
        ($ !== null && ae.types !== null && ($.types = ae.types), (O.T = $));
      }
    }),
    (Se.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Se.use = function (j) {
      return O.H.use(j);
    }),
    (Se.useActionState = function (j, $, ae) {
      return O.H.useActionState(j, $, ae);
    }),
    (Se.useCallback = function (j, $) {
      return O.H.useCallback(j, $);
    }),
    (Se.useContext = function (j) {
      return O.H.useContext(j);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (j, $) {
      return O.H.useDeferredValue(j, $);
    }),
    (Se.useEffect = function (j, $) {
      return O.H.useEffect(j, $);
    }),
    (Se.useEffectEvent = function (j) {
      return O.H.useEffectEvent(j);
    }),
    (Se.useId = function () {
      return O.H.useId();
    }),
    (Se.useImperativeHandle = function (j, $, ae) {
      return O.H.useImperativeHandle(j, $, ae);
    }),
    (Se.useInsertionEffect = function (j, $) {
      return O.H.useInsertionEffect(j, $);
    }),
    (Se.useLayoutEffect = function (j, $) {
      return O.H.useLayoutEffect(j, $);
    }),
    (Se.useMemo = function (j, $) {
      return O.H.useMemo(j, $);
    }),
    (Se.useOptimistic = function (j, $) {
      return O.H.useOptimistic(j, $);
    }),
    (Se.useReducer = function (j, $, ae) {
      return O.H.useReducer(j, $, ae);
    }),
    (Se.useRef = function (j) {
      return O.H.useRef(j);
    }),
    (Se.useState = function (j) {
      return O.H.useState(j);
    }),
    (Se.useSyncExternalStore = function (j, $, ae) {
      return O.H.useSyncExternalStore(j, $, ae);
    }),
    (Se.useTransition = function () {
      return O.H.useTransition();
    }),
    (Se.version = '19.2.5'),
    Se
  );
}
var Pm;
function Xc() {
  return (Pm || ((Pm = 1), (Rc.exports = C0())), Rc.exports);
}
var Ac = { exports: {} },
  Tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eh;
function R0() {
  if (eh) return Tt;
  eh = 1;
  var s = Xc();
  function b(c) {
    var m = 'https://react.dev/errors/' + c;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++) m += '&args[]=' + encodeURIComponent(arguments[o]);
    }
    return (
      'Minified React error #' +
      c +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function T() {}
  var x = {
      d: {
        f: T,
        r: function () {
          throw Error(b(522));
        },
        D: T,
        C: T,
        L: T,
        m: T,
        X: T,
        S: T,
        M: T,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for('react.portal');
  function i(c, m, o) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: p == null ? null : '' + p,
      children: c,
      containerInfo: m,
      implementation: o,
    };
  }
  var d = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(c, m) {
    if (c === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (Tt.createPortal = function (c, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(b(299));
      return i(c, m, null, o);
    }),
    (Tt.flushSync = function (c) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), c)) return c();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
      }
    }),
    (Tt.preconnect = function (c, m) {
      typeof c == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(c, m));
    }),
    (Tt.prefetchDNS = function (c) {
      typeof c == 'string' && x.d.D(c);
    }),
    (Tt.preinit = function (c, m) {
      if (typeof c == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          p = f(o, m.crossOrigin),
          v = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(c, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: p,
              integrity: v,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(c, {
              crossOrigin: p,
              integrity: v,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (Tt.preinitModule = function (c, m) {
      if (typeof c == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var o = f(m.as, m.crossOrigin);
            x.d.M(c, {
              crossOrigin: o,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && x.d.M(c);
    }),
    (Tt.preload = function (c, m) {
      if (typeof c == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var o = m.as,
          p = f(o, m.crossOrigin);
        x.d.L(c, o, {
          crossOrigin: p,
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
    (Tt.preloadModule = function (c, m) {
      if (typeof c == 'string')
        if (m) {
          var o = f(m.as, m.crossOrigin);
          x.d.m(c, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: o,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else x.d.m(c);
    }),
    (Tt.requestFormReset = function (c) {
      x.d.r(c);
    }),
    (Tt.unstable_batchedUpdates = function (c, m) {
      return c(m);
    }),
    (Tt.useFormState = function (c, m, o) {
      return d.H.useFormState(c, m, o);
    }),
    (Tt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Tt.version = '19.2.5'),
    Tt
  );
}
var th;
function A0() {
  if (th) return Ac.exports;
  th = 1;
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
  return (s(), (Ac.exports = R0()), Ac.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nh;
function _0() {
  if (nh) return _i;
  nh = 1;
  var s = M0(),
    b = Xc(),
    T = A0();
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
  function c(e) {
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
          if (u === n) return (c(a), e);
          if (u === l) return (c(a), t);
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
  var p = Object.assign,
    v = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    y = Symbol.for('react.portal'),
    g = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    D = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    H = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    _ = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    B = Symbol.for('react.activity'),
    z = Symbol.for('react.memo_cache_sentinel'),
    L = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (L && e[L]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var J = Symbol.for('react.client.reference');
  function te(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === J ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case g:
        return 'Fragment';
      case R:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case M:
        return 'Suspense';
      case _:
        return 'SuspenseList';
      case B:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case y:
          return 'Portal';
        case w:
          return e.displayName || 'Context';
        case D:
          return (e._context.displayName || 'Context') + '.Consumer';
        case H:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case O:
          return ((t = e.displayName || null), t !== null ? t : te(e.type) || 'Memo');
        case A:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var ee = Array.isArray,
    V = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = { pending: !1, data: null, method: null, action: null },
    se = [],
    he = -1;
  function j(e) {
    return { current: e };
  }
  function $(e) {
    0 > he || ((e.current = se[he]), (se[he] = null), he--);
  }
  function ae(e, t) {
    (he++, (se[he] = e.current), (e.current = t));
  }
  var ie = j(null),
    oe = j(null),
    ue = j(null),
    ye = j(null);
  function Me(e, t) {
    switch ((ae(ue, t), ae(oe, e), ae(ie, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? gm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = gm(t)), (e = ym(t, e)));
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
    ($(ie), ae(ie, e));
  }
  function be() {
    ($(ie), $(oe), $(ue));
  }
  function Ke(e) {
    e.memoizedState !== null && ae(ye, e);
    var t = ie.current,
      n = ym(t, e.type);
    t !== n && (ae(oe, e), ae(ie, n));
  }
  function et(e) {
    (oe.current === e && ($(ie), $(oe)), ye.current === e && ($(ye), (Ti._currentValue = ne)));
  }
  var $e, xn;
  function Bt(e) {
    if ($e === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (($e = (t && t[1]) || ''),
          (xn =
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
      $e +
      e +
      xn
    );
  }
  var fn = !1;
  function En(e, t) {
    if (!e || fn) return '';
    fn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                } catch (k) {
                  var Z = k;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (k) {
                  Z = k;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                Z = k;
              }
              (P = e()) && typeof P.catch == 'function' && P.catch(function () {});
            }
          } catch (k) {
            if (k && Z && typeof k.stack == 'string') return [k.stack, Z.stack];
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
        var U = S.split(`
`),
          Q = C.split(`
`);
        for (a = l = 0; l < U.length && !U[l].includes('DetermineComponentFrameRoot'); ) l++;
        for (; a < Q.length && !Q[a].includes('DetermineComponentFrameRoot'); ) a++;
        if (l === U.length || a === Q.length)
          for (l = U.length - 1, a = Q.length - 1; 1 <= l && 0 <= a && U[l] !== Q[a]; ) a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (U[l] !== Q[a]) {
            if (l !== 1 || a !== 1)
              do
                if ((l--, a--, 0 > a || U[l] !== Q[a])) {
                  var W =
                    `
` + U[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', e.displayName)),
                    W
                  );
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      ((fn = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Bt(n) : '';
  }
  function Pn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Bt(e.type);
      case 16:
        return Bt('Lazy');
      case 13:
        return e.child !== t && t !== null ? Bt('Suspense Fallback') : Bt('Suspense');
      case 19:
        return Bt('SuspenseList');
      case 0:
      case 15:
        return En(e.type, !1);
      case 11:
        return En(e.type.render, !1);
      case 1:
        return En(e.type, !0);
      case 31:
        return Bt('Activity');
      default:
        return '';
    }
  }
  function bt(e) {
    try {
      var t = '',
        n = null;
      do ((t += Pn(e, n)), (n = e), (e = e.return));
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
  var Mt = Object.prototype.hasOwnProperty,
    Ut = s.unstable_scheduleCallback,
    ht = s.unstable_cancelCallback,
    Xe = s.unstable_shouldYield,
    Jl = s.unstable_requestPaint,
    We = s.unstable_now,
    Rl = s.unstable_getCurrentPriorityLevel,
    bn = s.unstable_ImmediatePriority,
    Ht = s.unstable_UserBlockingPriority,
    Zt = s.unstable_NormalPriority,
    Tn = s.unstable_LowPriority,
    dn = s.unstable_IdlePriority,
    ji = s.log,
    dr = s.unstable_setDisableYieldValue,
    Al = null,
    Ct = null;
  function mn(e) {
    if ((typeof ji == 'function' && dr(e), Ct && typeof Ct.setStrictMode == 'function'))
      try {
        Ct.setStrictMode(Al, e);
      } catch {}
  }
  var Rt = Math.clz32 ? Math.clz32 : La,
    el = Math.log,
    mr = Math.LN2;
  function La(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((el(e) / mr) | 0)) | 0);
  }
  var kl = 256,
    Fl = 262144,
    $l = 4194304;
  function Mn(e) {
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
  function le(e, t, n) {
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
            ? (a = Mn(l))
            : ((S &= C), S !== 0 ? (a = Mn(S)) : n || ((n = C & ~e), n !== 0 && (a = Mn(n)))))
        : ((C = l & ~u),
          C !== 0
            ? (a = Mn(C))
            : S !== 0
              ? (a = Mn(S))
              : n || ((n = l & ~e), n !== 0 && (a = Mn(n)))),
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
  function ge(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Oe(e, t) {
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
  function pe() {
    var e = $l;
    return (($l <<= 1), ($l & 62914560) === 0 && ($l = 4194304), e);
  }
  function de(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function me(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function ze(e, t, n, l, a, u) {
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
      U = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (n = S & ~n; 0 < n; ) {
      var W = 31 - Rt(n),
        P = 1 << W;
      ((C[W] = 0), (U[W] = -1));
      var Z = Q[W];
      if (Z !== null)
        for (Q[W] = null, W = 0; W < Z.length; W++) {
          var k = Z[W];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~P;
    }
    (l !== 0 && we(e, l, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function we(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Rt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Je(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Rt(n),
        a = 1 << l;
      ((a & t) | (e[l] & t) && (e[l] |= t), (n &= ~a));
    }
  }
  function Ue(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : tt(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function tt(e) {
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
  function ot(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function vt() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ym(e.type));
  }
  function Cn(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var gt = Math.random().toString(36).slice(2),
    it = '__reactFiber$' + gt,
    yt = '__reactProps$' + gt,
    hn = '__reactContainer$' + gt,
    Wl = '__reactEvents$' + gt,
    cv = '__reactListeners$' + gt,
    ov = '__reactHandles$' + gt,
    to = '__reactResources$' + gt,
    ja = '__reactMarker$' + gt;
  function hr(e) {
    (delete e[it], delete e[yt], delete e[Wl], delete e[cv], delete e[ov]);
  }
  function Il(e) {
    var t = e[it];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[hn] || n[it])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Mm(e); e !== null; ) {
            if ((n = e[it])) return n;
            e = Mm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Pl(e) {
    if ((e = e[it] || e[hn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ga(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function ea(e) {
    var t = e[to];
    return (t || (t = e[to] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function dt(e) {
    e[ja] = !0;
  }
  var no = new Set(),
    lo = {};
  function _l(e, t) {
    (ta(e, t), ta(e + 'Capture', t));
  }
  function ta(e, t) {
    for (lo[e] = t, e = 0; e < t.length; e++) no.add(t[e]);
  }
  var fv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    ao = {},
    io = {};
  function dv(e) {
    return Mt.call(io, e)
      ? !0
      : Mt.call(ao, e)
        ? !1
        : fv.test(e)
          ? (io[e] = !0)
          : ((ao[e] = !0), !1);
  }
  function Gi(e, t, n) {
    if (dv(t))
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
  function Yi(e, t, n) {
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
  function Rn(e, t, n, l) {
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
  function Kt(e) {
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
  function uo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function mv(e, t, n) {
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
  function vr(e) {
    if (!e._valueTracker) {
      var t = uo(e) ? 'checked' : 'value';
      e._valueTracker = mv(e, t, '' + e[t]);
    }
  }
  function ro(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = uo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Vi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var hv = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(hv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function gr(e, t, n, l, a, u, S, C) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Kt(t))
          : e.value !== '' + Kt(t) && (e.value = '' + Kt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? yr(e, S, Kt(t))
        : n != null
          ? yr(e, S, Kt(n))
          : l != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Kt(C))
        : e.removeAttribute('name'));
  }
  function so(e, t, n, l, a, u, S, C) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        vr(e);
        return;
      }
      ((n = n != null ? '' + Kt(n) : ''),
        (t = t != null ? '' + Kt(t) : n),
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
      vr(e));
  }
  function yr(e, t, n) {
    (t === 'number' && Vi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function na(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Kt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          ((e[a].selected = !0), l && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function co(e, t, n) {
    if (t != null && ((t = '' + Kt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Kt(n) : '';
  }
  function oo(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(x(92));
        if (ee(l)) {
          if (1 < l.length) throw Error(x(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Kt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      vr(e));
  }
  function la(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function fo(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || vv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function mo(e, t, n) {
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
      for (var a in t) ((l = t[a]), t.hasOwnProperty(a) && n[a] !== l && fo(e, a, l));
    } else for (var u in t) t.hasOwnProperty(u) && fo(e, u, t[u]);
  }
  function pr(e) {
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
  var gv = new Map([
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
    yv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qi(e) {
    return yv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function An() {}
  var Sr = null;
  function xr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var aa = null,
    ia = null;
  function ho(e) {
    var t = Pl(e);
    if (t && (e = t.stateNode)) {
      var n = e[yt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (gr(
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
              n = n.querySelectorAll('input[name="' + Jt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[yt] || null;
                if (!a) throw Error(x(90));
                gr(
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
            for (t = 0; t < n.length; t++) ((l = n[t]), l.form === e.form && ro(l));
          }
          break e;
        case 'textarea':
          co(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && na(e, !!n.multiple, t, !1));
      }
    }
  }
  var Er = !1;
  function vo(e, t, n) {
    if (Er) return e(t, n);
    Er = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Er = !1),
        (aa !== null || ia !== null) &&
          (Ou(), aa && ((t = aa), (e = ia), (ia = aa = null), ho(t), e)))
      )
        for (t = 0; t < e.length; t++) ho(e[t]);
    }
  }
  function Ya(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[yt] || null;
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
  var _n = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    br = !1;
  if (_n)
    try {
      var Va = {};
      (Object.defineProperty(Va, 'passive', {
        get: function () {
          br = !0;
        },
      }),
        window.addEventListener('test', Va, Va),
        window.removeEventListener('test', Va, Va));
    } catch {
      br = !1;
    }
  var tl = null,
    Tr = null,
    Xi = null;
  function go() {
    if (Xi) return Xi;
    var e,
      t = Tr,
      n = t.length,
      l,
      a = 'value' in tl ? tl.value : tl.textContent,
      u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var S = n - e;
    for (l = 1; l <= S && t[n - l] === a[u - l]; l++);
    return (Xi = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Qi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zi() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function _t(e) {
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
          ? Zi
          : yo),
        (this.isPropagationStopped = yo),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Zi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Zi));
        },
        persist: function () {},
        isPersistent: Zi,
      }),
      t
    );
  }
  var Ol = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ki = _t(Ol),
    qa = p({}, Ol, { view: 0, detail: 0 }),
    pv = _t(qa),
    Mr,
    Cr,
    Xa,
    Ji = p({}, qa, {
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
      getModifierState: Ar,
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
          : (e !== Xa &&
              (Xa && e.type === 'mousemove'
                ? ((Mr = e.screenX - Xa.screenX), (Cr = e.screenY - Xa.screenY))
                : (Cr = Mr = 0),
              (Xa = e)),
            Mr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Cr;
      },
    }),
    po = _t(Ji),
    Sv = p({}, Ji, { dataTransfer: 0 }),
    xv = _t(Sv),
    Ev = p({}, qa, { relatedTarget: 0 }),
    Rr = _t(Ev),
    bv = p({}, Ol, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tv = _t(bv),
    Mv = p({}, Ol, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Cv = _t(Mv),
    Rv = p({}, Ol, { data: 0 }),
    So = _t(Rv),
    Av = {
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
    _v = {
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
    Ov = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Dv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ov[e]) ? !!t[e] : !1;
  }
  function Ar() {
    return Dv;
  }
  var zv = p({}, qa, {
      key: function (e) {
        if (e.key) {
          var t = Av[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Qi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? _v[e.keyCode] || 'Unidentified'
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
      getModifierState: Ar,
      charCode: function (e) {
        return e.type === 'keypress' ? Qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Qi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    wv = _t(zv),
    Nv = p({}, Ji, {
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
    xo = _t(Nv),
    Bv = p({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ar,
    }),
    Uv = _t(Bv),
    Hv = p({}, Ol, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lv = _t(Hv),
    jv = p({}, Ji, {
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
    Gv = _t(jv),
    Yv = p({}, Ol, { newState: 0, oldState: 0 }),
    Vv = _t(Yv),
    qv = [9, 13, 27, 32],
    _r = _n && 'CompositionEvent' in window,
    Qa = null;
  _n && 'documentMode' in document && (Qa = document.documentMode);
  var Xv = _n && 'TextEvent' in window && !Qa,
    Eo = _n && (!_r || (Qa && 8 < Qa && 11 >= Qa)),
    bo = ' ',
    To = !1;
  function Mo(e, t) {
    switch (e) {
      case 'keyup':
        return qv.indexOf(t.keyCode) !== -1;
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
  function Co(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var ua = !1;
  function Qv(e, t) {
    switch (e) {
      case 'compositionend':
        return Co(t);
      case 'keypress':
        return t.which !== 32 ? null : ((To = !0), bo);
      case 'textInput':
        return ((e = t.data), e === bo && To ? null : e);
      default:
        return null;
    }
  }
  function Zv(e, t) {
    if (ua)
      return e === 'compositionend' || (!_r && Mo(e, t))
        ? ((e = go()), (Xi = Tr = tl = null), (ua = !1), e)
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
        return Eo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Kv = {
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
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Kv[e.type] : t === 'textarea';
  }
  function Ao(e, t, n, l) {
    (aa ? (ia ? ia.push(l) : (ia = [l])) : (aa = l),
      (t = Hu(t, 'onChange')),
      0 < t.length &&
        ((n = new Ki('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t })));
  }
  var Za = null,
    Ka = null;
  function Jv(e) {
    om(e, 0);
  }
  function ki(e) {
    var t = Ga(e);
    if (ro(t)) return e;
  }
  function _o(e, t) {
    if (e === 'change') return t;
  }
  var Oo = !1;
  if (_n) {
    var Or;
    if (_n) {
      var Dr = 'oninput' in document;
      if (!Dr) {
        var Do = document.createElement('div');
        (Do.setAttribute('oninput', 'return;'), (Dr = typeof Do.oninput == 'function'));
      }
      Or = Dr;
    } else Or = !1;
    Oo = Or && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Za && (Za.detachEvent('onpropertychange', wo), (Ka = Za = null));
  }
  function wo(e) {
    if (e.propertyName === 'value' && ki(Ka)) {
      var t = [];
      (Ao(t, Ka, e, xr(e)), vo(Jv, t));
    }
  }
  function kv(e, t, n) {
    e === 'focusin'
      ? (zo(), (Za = t), (Ka = n), Za.attachEvent('onpropertychange', wo))
      : e === 'focusout' && zo();
  }
  function Fv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ki(Ka);
  }
  function $v(e, t) {
    if (e === 'click') return ki(t);
  }
  function Wv(e, t) {
    if (e === 'input' || e === 'change') return ki(t);
  }
  function Iv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Lt = typeof Object.is == 'function' ? Object.is : Iv;
  function Ja(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Mt.call(t, a) || !Lt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function No(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bo(e, t) {
    var n = No(e);
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
      n = No(n);
    }
  }
  function Uo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Uo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ho(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Vi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Vi(e.document);
    }
    return t;
  }
  function zr(e) {
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
  var Pv = _n && 'documentMode' in document && 11 >= document.documentMode,
    ra = null,
    wr = null,
    ka = null,
    Nr = !1;
  function Lo(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nr ||
      ra == null ||
      ra !== Vi(l) ||
      ((l = ra),
      'selectionStart' in l && zr(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ka && Ja(ka, l)) ||
        ((ka = l),
        (l = Hu(wr, 'onSelect')),
        0 < l.length &&
          ((t = new Ki('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = ra))));
  }
  function Dl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var sa = {
      animationend: Dl('Animation', 'AnimationEnd'),
      animationiteration: Dl('Animation', 'AnimationIteration'),
      animationstart: Dl('Animation', 'AnimationStart'),
      transitionrun: Dl('Transition', 'TransitionRun'),
      transitionstart: Dl('Transition', 'TransitionStart'),
      transitioncancel: Dl('Transition', 'TransitionCancel'),
      transitionend: Dl('Transition', 'TransitionEnd'),
    },
    Br = {},
    jo = {};
  _n &&
    ((jo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete sa.animationend.animation,
      delete sa.animationiteration.animation,
      delete sa.animationstart.animation),
    'TransitionEvent' in window || delete sa.transitionend.transition);
  function zl(e) {
    if (Br[e]) return Br[e];
    if (!sa[e]) return e;
    var t = sa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in jo) return (Br[e] = t[n]);
    return e;
  }
  var Go = zl('animationend'),
    Yo = zl('animationiteration'),
    Vo = zl('animationstart'),
    eg = zl('transitionrun'),
    tg = zl('transitionstart'),
    ng = zl('transitioncancel'),
    qo = zl('transitionend'),
    Xo = new Map(),
    Ur =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Ur.push('scrollEnd');
  function rn(e, t) {
    (Xo.set(e, t), _l(t, [e]));
  }
  var Fi =
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
    kt = [],
    ca = 0,
    Hr = 0;
  function $i() {
    for (var e = ca, t = (Hr = ca = 0); t < e; ) {
      var n = kt[t];
      kt[t++] = null;
      var l = kt[t];
      kt[t++] = null;
      var a = kt[t];
      kt[t++] = null;
      var u = kt[t];
      if (((kt[t++] = null), l !== null && a !== null)) {
        var S = l.pending;
        (S === null ? (a.next = a) : ((a.next = S.next), (S.next = a)), (l.pending = a));
      }
      u !== 0 && Qo(n, a, u);
    }
  }
  function Wi(e, t, n, l) {
    ((kt[ca++] = e),
      (kt[ca++] = t),
      (kt[ca++] = n),
      (kt[ca++] = l),
      (Hr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Lr(e, t, n, l) {
    return (Wi(e, t, n, l), Ii(e));
  }
  function wl(e, t) {
    return (Wi(e, null, null, t), Ii(e));
  }
  function Qo(e, t, n) {
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
          ((a = 31 - Rt(n)),
          (e = u.hiddenUpdates),
          (l = e[a]),
          l === null ? (e[a] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Ii(e) {
    if (50 < gi) throw ((gi = 0), (Ks = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function lg(e, t, n, l) {
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
  function jt(e, t, n, l) {
    return new lg(e, t, n, l);
  }
  function jr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function On(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = jt(e.tag, t, e.key, e.mode)),
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
  function Zo(e, t) {
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
  function Pi(e, t, n, l, a, u) {
    var S = 0;
    if (((l = e), typeof e == 'function')) jr(e) && (S = 1);
    else if (typeof e == 'string')
      S = s0(e, n, ie.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return ((e = jt(31, n, t, a)), (e.elementType = B), (e.lanes = u), e);
        case g:
          return Nl(n.children, a, u, t);
        case E:
          ((S = 8), (a |= 24));
          break;
        case R:
          return ((e = jt(12, n, t, a | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = jt(13, n, t, a)), (e.elementType = M), (e.lanes = u), e);
        case _:
          return ((e = jt(19, n, t, a)), (e.elementType = _), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case w:
                S = 10;
                break e;
              case D:
                S = 9;
                break e;
              case H:
                S = 11;
                break e;
              case O:
                S = 14;
                break e;
              case A:
                ((S = 16), (l = null));
                break e;
            }
          ((S = 29), (n = Error(x(130, e === null ? 'null' : typeof e, ''))), (l = null));
      }
    return ((t = jt(S, n, t, a)), (t.elementType = e), (t.type = l), (t.lanes = u), t);
  }
  function Nl(e, t, n, l) {
    return ((e = jt(7, e, l, t)), (e.lanes = n), e);
  }
  function Gr(e, t, n) {
    return ((e = jt(6, e, null, t)), (e.lanes = n), e);
  }
  function Ko(e) {
    var t = jt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Yr(e, t, n) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Jo = new WeakMap();
  function Ft(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Jo.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: bt(t) }), Jo.set(e, t), t);
    }
    return { value: e, source: t, stack: bt(t) };
  }
  var fa = [],
    da = 0,
    eu = null,
    Fa = 0,
    $t = [],
    Wt = 0,
    nl = null,
    vn = 1,
    gn = '';
  function Dn(e, t) {
    ((fa[da++] = Fa), (fa[da++] = eu), (eu = e), (Fa = t));
  }
  function ko(e, t, n) {
    (($t[Wt++] = vn), ($t[Wt++] = gn), ($t[Wt++] = nl), (nl = e));
    var l = vn;
    e = gn;
    var a = 32 - Rt(l) - 1;
    ((l &= ~(1 << a)), (n += 1));
    var u = 32 - Rt(t) + a;
    if (30 < u) {
      var S = a - (a % 5);
      ((u = (l & ((1 << S) - 1)).toString(32)),
        (l >>= S),
        (a -= S),
        (vn = (1 << (32 - Rt(t) + a)) | (n << a) | l),
        (gn = u + e));
    } else ((vn = (1 << u) | (n << a) | l), (gn = e));
  }
  function Vr(e) {
    e.return !== null && (Dn(e, 1), ko(e, 1, 0));
  }
  function qr(e) {
    for (; e === eu; ) ((eu = fa[--da]), (fa[da] = null), (Fa = fa[--da]), (fa[da] = null));
    for (; e === nl; )
      ((nl = $t[--Wt]),
        ($t[Wt] = null),
        (gn = $t[--Wt]),
        ($t[Wt] = null),
        (vn = $t[--Wt]),
        ($t[Wt] = null));
  }
  function Fo(e, t) {
    (($t[Wt++] = vn), ($t[Wt++] = gn), ($t[Wt++] = nl), (vn = t.id), (gn = t.overflow), (nl = e));
  }
  var pt = null,
    Qe = null,
    De = !1,
    ll = null,
    It = !1,
    Xr = Error(x(519));
  function al(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw ($a(Ft(t, e)), Xr);
  }
  function $o(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[it] = e), (t[yt] = l), n)) {
      case 'dialog':
        (Re('cancel', t), Re('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Re('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < pi.length; n++) Re(pi[n], t);
        break;
      case 'source':
        Re('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Re('error', t), Re('load', t));
        break;
      case 'details':
        Re('toggle', t);
        break;
      case 'input':
        (Re('invalid', t),
          so(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Re('invalid', t);
        break;
      case 'textarea':
        (Re('invalid', t), oo(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      hm(t.textContent, n)
        ? (l.popover != null && (Re('beforetoggle', t), Re('toggle', t)),
          l.onScroll != null && Re('scroll', t),
          l.onScrollEnd != null && Re('scrollend', t),
          l.onClick != null && (t.onclick = An),
          (t = !0))
        : (t = !1),
      t || al(e, !0));
  }
  function Wo(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          It = !1;
          return;
        case 27:
        case 3:
          It = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function ma(e) {
    if (e !== pt) return !1;
    if (!De) return (Wo(e), (De = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || rc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Qe && al(e),
      Wo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Qe = Tm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Qe = Tm(e);
    } else
      t === 27
        ? ((t = Qe), pl(e.type) ? ((e = dc), (dc = null), (Qe = e)) : (Qe = t))
        : (Qe = pt ? en(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bl() {
    ((Qe = pt = null), (De = !1));
  }
  function Qr() {
    var e = ll;
    return (e !== null && (wt === null ? (wt = e) : wt.push.apply(wt, e), (ll = null)), e);
  }
  function $a(e) {
    ll === null ? (ll = [e]) : ll.push(e);
  }
  var Zr = j(null),
    Ul = null,
    zn = null;
  function il(e, t, n) {
    (ae(Zr, t._currentValue), (t._currentValue = n));
  }
  function wn(e) {
    ((e._currentValue = Zr.current), $(Zr));
  }
  function Kr(e, t, n) {
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
  function Jr(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var S = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var C = u;
          u = a;
          for (var U = 0; U < t.length; U++)
            if (C.context === t[U]) {
              ((u.lanes |= n),
                (C = u.alternate),
                C !== null && (C.lanes |= n),
                Kr(u.return, n, e),
                l || (S = null));
              break e;
            }
          u = C.next;
        }
      } else if (a.tag === 18) {
        if (((S = a.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Kr(S, n, e), (S = null));
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
  function ha(e, t, n, l) {
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
          Lt(a.pendingProps.value, S.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (a === ye.current) {
        if (((S = a.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Ti) : (e = [Ti]));
      }
      a = a.return;
    }
    (e !== null && Jr(t, e, n, l), (t.flags |= 262144));
  }
  function tu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Lt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Hl(e) {
    ((Ul = e), (zn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function St(e) {
    return Io(Ul, e);
  }
  function nu(e, t) {
    return (Ul === null && Hl(e), Io(e, t));
  }
  function Io(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), zn === null)) {
      if (e === null) throw Error(x(308));
      ((zn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else zn = zn.next = t;
    return n;
  }
  var ag =
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
    ig = s.unstable_scheduleCallback,
    ug = s.unstable_NormalPriority,
    ut = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function kr() {
    return { controller: new ag(), data: new Map(), refCount: 0 };
  }
  function Wa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        ig(ug, function () {
          e.controller.abort();
        }));
  }
  var Ia = null,
    Fr = 0,
    va = 0,
    ga = null;
  function rg(e, t) {
    if (Ia === null) {
      var n = (Ia = []);
      ((Fr = 0),
        (va = Is()),
        (ga = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Fr++, t.then(Po, Po), t);
  }
  function Po() {
    if (--Fr === 0 && Ia !== null) {
      ga !== null && (ga.status = 'fulfilled');
      var e = Ia;
      ((Ia = null), (va = 0), (ga = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sg(e, t) {
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
  var ef = V.S;
  V.S = function (e, t) {
    ((jd = We()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && rg(e, t),
      ef !== null && ef(e, t));
  };
  var Ll = j(null);
  function $r() {
    var e = Ll.current;
    return e !== null ? e : qe.pooledCache;
  }
  function lu(e, t) {
    t === null ? ae(Ll, Ll.current) : ae(Ll, t.pool);
  }
  function tf() {
    var e = $r();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var ya = Error(x(460)),
    Wr = Error(x(474)),
    au = Error(x(542)),
    iu = { then: function () {} };
  function nf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function lf(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(An, An), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), uf(e), e);
      default:
        if (typeof t.status == 'string') t.then(An, An);
        else {
          if (((e = qe), e !== null && 100 < e.shellSuspendCounter)) throw Error(x(482));
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
            throw ((e = t.reason), uf(e), e);
        }
        throw ((Gl = t), ya);
    }
  }
  function jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Gl = n), ya) : n;
    }
  }
  var Gl = null;
  function af() {
    if (Gl === null) throw Error(x(459));
    var e = Gl;
    return ((Gl = null), e);
  }
  function uf(e) {
    if (e === ya || e === au) throw Error(x(483));
  }
  var pa = null,
    Pa = 0;
  function uu(e) {
    var t = Pa;
    return ((Pa += 1), pa === null && (pa = []), lf(pa, e, t));
  }
  function ei(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function ru(e, t) {
    throw t.$$typeof === v
      ? Error(x(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          x(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function rf(e) {
    function t(q, Y) {
      if (e) {
        var X = q.deletions;
        X === null ? ((q.deletions = [Y]), (q.flags |= 16)) : X.push(Y);
      }
    }
    function n(q, Y) {
      if (!e) return null;
      for (; Y !== null; ) (t(q, Y), (Y = Y.sibling));
      return null;
    }
    function l(q) {
      for (var Y = new Map(); q !== null; )
        (q.key !== null ? Y.set(q.key, q) : Y.set(q.index, q), (q = q.sibling));
      return Y;
    }
    function a(q, Y) {
      return ((q = On(q, Y)), (q.index = 0), (q.sibling = null), q);
    }
    function u(q, Y, X) {
      return (
        (q.index = X),
        e
          ? ((X = q.alternate),
            X !== null
              ? ((X = X.index), X < Y ? ((q.flags |= 67108866), Y) : X)
              : ((q.flags |= 67108866), Y))
          : ((q.flags |= 1048576), Y)
      );
    }
    function S(q) {
      return (e && q.alternate === null && (q.flags |= 67108866), q);
    }
    function C(q, Y, X, I) {
      return Y === null || Y.tag !== 6
        ? ((Y = Gr(X, q.mode, I)), (Y.return = q), Y)
        : ((Y = a(Y, X)), (Y.return = q), Y);
    }
    function U(q, Y, X, I) {
      var fe = X.type;
      return fe === g
        ? W(q, Y, X.props.children, I, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && jl(fe) === Y.type))
          ? ((Y = a(Y, X.props)), ei(Y, X), (Y.return = q), Y)
          : ((Y = Pi(X.type, X.key, X.props, null, q.mode, I)), ei(Y, X), (Y.return = q), Y);
    }
    function Q(q, Y, X, I) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Yr(X, q.mode, I)), (Y.return = q), Y)
        : ((Y = a(Y, X.children || [])), (Y.return = q), Y);
    }
    function W(q, Y, X, I, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = Nl(X, q.mode, I, fe)), (Y.return = q), Y)
        : ((Y = a(Y, X)), (Y.return = q), Y);
    }
    function P(q, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Gr('' + Y, q.mode, X)), (Y.return = q), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = Pi(Y.type, Y.key, Y.props, null, q.mode, X)), ei(X, Y), (X.return = q), X);
          case y:
            return ((Y = Yr(Y, q.mode, X)), (Y.return = q), Y);
          case A:
            return ((Y = jl(Y)), P(q, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = Nl(Y, q.mode, X, null)), (Y.return = q), Y);
        if (typeof Y.then == 'function') return P(q, uu(Y), X);
        if (Y.$$typeof === w) return P(q, nu(q, Y), X);
        ru(q, Y);
      }
      return null;
    }
    function Z(q, Y, X, I) {
      var fe = Y !== null ? Y.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : C(q, Y, '' + X, I);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? U(q, Y, X, I) : null;
          case y:
            return X.key === fe ? Q(q, Y, X, I) : null;
          case A:
            return ((X = jl(X)), Z(q, Y, X, I));
        }
        if (ee(X) || G(X)) return fe !== null ? null : W(q, Y, X, I, null);
        if (typeof X.then == 'function') return Z(q, Y, uu(X), I);
        if (X.$$typeof === w) return Z(q, Y, nu(q, X), I);
        ru(q, X);
      }
      return null;
    }
    function k(q, Y, X, I, fe) {
      if ((typeof I == 'string' && I !== '') || typeof I == 'number' || typeof I == 'bigint')
        return ((q = q.get(X) || null), C(Y, q, '' + I, fe));
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case r:
            return ((q = q.get(I.key === null ? X : I.key) || null), U(Y, q, I, fe));
          case y:
            return ((q = q.get(I.key === null ? X : I.key) || null), Q(Y, q, I, fe));
          case A:
            return ((I = jl(I)), k(q, Y, X, I, fe));
        }
        if (ee(I) || G(I)) return ((q = q.get(X) || null), W(Y, q, I, fe, null));
        if (typeof I.then == 'function') return k(q, Y, X, uu(I), fe);
        if (I.$$typeof === w) return k(q, Y, X, nu(Y, I), fe);
        ru(Y, I);
      }
      return null;
    }
    function re(q, Y, X, I) {
      for (
        var fe = null, Ne = null, ce = Y, Ee = (Y = 0), _e = null;
        ce !== null && Ee < X.length;
        Ee++
      ) {
        ce.index > Ee ? ((_e = ce), (ce = null)) : (_e = ce.sibling);
        var Be = Z(q, ce, X[Ee], I);
        if (Be === null) {
          ce === null && (ce = _e);
          break;
        }
        (e && ce && Be.alternate === null && t(q, ce),
          (Y = u(Be, Y, Ee)),
          Ne === null ? (fe = Be) : (Ne.sibling = Be),
          (Ne = Be),
          (ce = _e));
      }
      if (Ee === X.length) return (n(q, ce), De && Dn(q, Ee), fe);
      if (ce === null) {
        for (; Ee < X.length; Ee++)
          ((ce = P(q, X[Ee], I)),
            ce !== null &&
              ((Y = u(ce, Y, Ee)), Ne === null ? (fe = ce) : (Ne.sibling = ce), (Ne = ce)));
        return (De && Dn(q, Ee), fe);
      }
      for (ce = l(ce); Ee < X.length; Ee++)
        ((_e = k(ce, q, Ee, X[Ee], I)),
          _e !== null &&
            (e && _e.alternate !== null && ce.delete(_e.key === null ? Ee : _e.key),
            (Y = u(_e, Y, Ee)),
            Ne === null ? (fe = _e) : (Ne.sibling = _e),
            (Ne = _e)));
      return (
        e &&
          ce.forEach(function (Tl) {
            return t(q, Tl);
          }),
        De && Dn(q, Ee),
        fe
      );
    }
    function ve(q, Y, X, I) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, Ne = null, ce = Y, Ee = (Y = 0), _e = null, Be = X.next();
        ce !== null && !Be.done;
        Ee++, Be = X.next()
      ) {
        ce.index > Ee ? ((_e = ce), (ce = null)) : (_e = ce.sibling);
        var Tl = Z(q, ce, Be.value, I);
        if (Tl === null) {
          ce === null && (ce = _e);
          break;
        }
        (e && ce && Tl.alternate === null && t(q, ce),
          (Y = u(Tl, Y, Ee)),
          Ne === null ? (fe = Tl) : (Ne.sibling = Tl),
          (Ne = Tl),
          (ce = _e));
      }
      if (Be.done) return (n(q, ce), De && Dn(q, Ee), fe);
      if (ce === null) {
        for (; !Be.done; Ee++, Be = X.next())
          ((Be = P(q, Be.value, I)),
            Be !== null &&
              ((Y = u(Be, Y, Ee)), Ne === null ? (fe = Be) : (Ne.sibling = Be), (Ne = Be)));
        return (De && Dn(q, Ee), fe);
      }
      for (ce = l(ce); !Be.done; Ee++, Be = X.next())
        ((Be = k(ce, q, Ee, Be.value, I)),
          Be !== null &&
            (e && Be.alternate !== null && ce.delete(Be.key === null ? Ee : Be.key),
            (Y = u(Be, Y, Ee)),
            Ne === null ? (fe = Be) : (Ne.sibling = Be),
            (Ne = Be)));
      return (
        e &&
          ce.forEach(function (S0) {
            return t(q, S0);
          }),
        De && Dn(q, Ee),
        fe
      );
    }
    function Ve(q, Y, X, I) {
      if (
        (typeof X == 'object' &&
          X !== null &&
          X.type === g &&
          X.key === null &&
          (X = X.props.children),
        typeof X == 'object' && X !== null)
      ) {
        switch (X.$$typeof) {
          case r:
            e: {
              for (var fe = X.key; Y !== null; ) {
                if (Y.key === fe) {
                  if (((fe = X.type), fe === g)) {
                    if (Y.tag === 7) {
                      (n(q, Y.sibling), (I = a(Y, X.props.children)), (I.return = q), (q = I));
                      break e;
                    }
                  } else if (
                    Y.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === A && jl(fe) === Y.type)
                  ) {
                    (n(q, Y.sibling), (I = a(Y, X.props)), ei(I, X), (I.return = q), (q = I));
                    break e;
                  }
                  n(q, Y);
                  break;
                } else t(q, Y);
                Y = Y.sibling;
              }
              X.type === g
                ? ((I = Nl(X.props.children, q.mode, I, X.key)), (I.return = q), (q = I))
                : ((I = Pi(X.type, X.key, X.props, null, q.mode, I)),
                  ei(I, X),
                  (I.return = q),
                  (q = I));
            }
            return S(q);
          case y:
            e: {
              for (fe = X.key; Y !== null; ) {
                if (Y.key === fe)
                  if (
                    Y.tag === 4 &&
                    Y.stateNode.containerInfo === X.containerInfo &&
                    Y.stateNode.implementation === X.implementation
                  ) {
                    (n(q, Y.sibling), (I = a(Y, X.children || [])), (I.return = q), (q = I));
                    break e;
                  } else {
                    n(q, Y);
                    break;
                  }
                else t(q, Y);
                Y = Y.sibling;
              }
              ((I = Yr(X, q.mode, I)), (I.return = q), (q = I));
            }
            return S(q);
          case A:
            return ((X = jl(X)), Ve(q, Y, X, I));
        }
        if (ee(X)) return re(q, Y, X, I);
        if (G(X)) {
          if (((fe = G(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), ve(q, Y, X, I));
        }
        if (typeof X.then == 'function') return Ve(q, Y, uu(X), I);
        if (X.$$typeof === w) return Ve(q, Y, nu(q, X), I);
        ru(q, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(q, Y.sibling), (I = a(Y, X)), (I.return = q), (q = I))
            : (n(q, Y), (I = Gr(X, q.mode, I)), (I.return = q), (q = I)),
          S(q))
        : n(q, Y);
    }
    return function (q, Y, X, I) {
      try {
        Pa = 0;
        var fe = Ve(q, Y, X, I);
        return ((pa = null), fe);
      } catch (ce) {
        if (ce === ya || ce === au) throw ce;
        var Ne = jt(29, ce, null, q.mode);
        return ((Ne.lanes = I), (Ne.return = q), Ne);
      } finally {
      }
    };
  }
  var Yl = rf(!0),
    sf = rf(!1),
    ul = !1;
  function Ir(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pr(e, t) {
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
  function rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (He & 2) !== 0)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        (t = Ii(e)),
        Qo(e, null, n),
        t
      );
    }
    return (Wi(e, l, t, n), Ii(e));
  }
  function ti(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Je(e, n));
    }
  }
  function es(e, t) {
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
  var ts = !1;
  function ni() {
    if (ts) {
      var e = ga;
      if (e !== null) throw e;
    }
  }
  function li(e, t, n, l) {
    ts = !1;
    var a = e.updateQueue;
    ul = !1;
    var u = a.firstBaseUpdate,
      S = a.lastBaseUpdate,
      C = a.shared.pending;
    if (C !== null) {
      a.shared.pending = null;
      var U = C,
        Q = U.next;
      ((U.next = null), S === null ? (u = Q) : (S.next = Q), (S = U));
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (C = W.lastBaseUpdate),
        C !== S && (C === null ? (W.firstBaseUpdate = Q) : (C.next = Q), (W.lastBaseUpdate = U)));
    }
    if (u !== null) {
      var P = a.baseState;
      ((S = 0), (W = Q = U = null), (C = u));
      do {
        var Z = C.lane & -536870913,
          k = Z !== C.lane;
        if (k ? (Ae & Z) === Z : (l & Z) === Z) {
          (Z !== 0 && Z === va && (ts = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }));
          e: {
            var re = e,
              ve = C;
            Z = t;
            var Ve = n;
            switch (ve.tag) {
              case 1:
                if (((re = ve.payload), typeof re == 'function')) {
                  P = re.call(Ve, P, Z);
                  break e;
                }
                P = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ve.payload),
                  (Z = typeof re == 'function' ? re.call(Ve, P, Z) : re),
                  Z == null)
                )
                  break e;
                P = p({}, P, Z);
                break e;
              case 2:
                ul = !0;
            }
          }
          ((Z = C.callback),
            Z !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = a.callbacks),
              k === null ? (a.callbacks = [Z]) : k.push(Z)));
        } else
          ((k = { lane: Z, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            W === null ? ((Q = W = k), (U = P)) : (W = W.next = k),
            (S |= Z));
        if (((C = C.next), C === null)) {
          if (((C = a.shared.pending), C === null)) break;
          ((k = C),
            (C = k.next),
            (k.next = null),
            (a.lastBaseUpdate = k),
            (a.shared.pending = null));
        }
      } while (!0);
      (W === null && (U = P),
        (a.baseState = U),
        (a.firstBaseUpdate = Q),
        (a.lastBaseUpdate = W),
        u === null && (a.shared.lanes = 0),
        (ml |= S),
        (e.lanes = S),
        (e.memoizedState = P));
    }
  }
  function cf(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function of(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) cf(n[e], t);
  }
  var Sa = j(null),
    su = j(0);
  function ff(e, t) {
    ((e = Vn), ae(su, e), ae(Sa, t), (Vn = e | t.baseLanes));
  }
  function ns() {
    (ae(su, Vn), ae(Sa, Sa.current));
  }
  function ls() {
    ((Vn = su.current), $(Sa), $(su));
  }
  var Gt = j(null),
    Pt = null;
  function cl(e) {
    var t = e.alternate;
    (ae(nt, nt.current & 1),
      ae(Gt, e),
      Pt === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (Pt = e));
  }
  function as(e) {
    (ae(nt, nt.current), ae(Gt, e), Pt === null && (Pt = e));
  }
  function df(e) {
    e.tag === 22 ? (ae(nt, nt.current), ae(Gt, e), Pt === null && (Pt = e)) : ol();
  }
  function ol() {
    (ae(nt, nt.current), ae(Gt, Gt.current));
  }
  function Yt(e) {
    ($(Gt), Pt === e && (Pt = null), $(nt));
  }
  var nt = j(0);
  function cu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || oc(n) || fc(n))) return t;
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
  var Nn = 0,
    xe = null,
    Ge = null,
    rt = null,
    ou = !1,
    xa = !1,
    Vl = !1,
    fu = 0,
    ai = 0,
    Ea = null,
    cg = 0;
  function Ie() {
    throw Error(x(321));
  }
  function is(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
    return !0;
  }
  function us(e, t, n, l, a, u) {
    return (
      (Nn = u),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Ff : Es),
      (Vl = !1),
      (u = n(l, a)),
      (Vl = !1),
      xa && (u = hf(t, n, l, a)),
      mf(e),
      u
    );
  }
  function mf(e) {
    V.H = ri;
    var t = Ge !== null && Ge.next !== null;
    if (((Nn = 0), (rt = Ge = xe = null), (ou = !1), (ai = 0), (Ea = null), t)) throw Error(x(300));
    e === null || st || ((e = e.dependencies), e !== null && tu(e) && (st = !0));
  }
  function hf(e, t, n, l) {
    xe = e;
    var a = 0;
    do {
      if ((xa && (Ea = null), (ai = 0), (xa = !1), 25 <= a)) throw Error(x(301));
      if (((a += 1), (rt = Ge = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((V.H = $f), (u = t(n, l)));
    } while (xa);
    return u;
  }
  function og() {
    var e = V.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ii(t) : t),
      (e = e.useState()[0]),
      (Ge !== null ? Ge.memoizedState : null) !== e && (xe.flags |= 1024),
      t
    );
  }
  function rs() {
    var e = fu !== 0;
    return ((fu = 0), e);
  }
  function ss(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function cs(e) {
    if (ou) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ou = !1;
    }
    ((Nn = 0), (rt = Ge = xe = null), (xa = !1), (ai = fu = 0), (Ea = null));
  }
  function At() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (rt === null ? (xe.memoizedState = rt = e) : (rt = rt.next = e), rt);
  }
  function lt() {
    if (Ge === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = rt === null ? xe.memoizedState : rt.next;
    if (t !== null) ((rt = t), (Ge = e));
    else {
      if (e === null) throw xe.alternate === null ? Error(x(467)) : Error(x(310));
      ((Ge = e),
        (e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null,
        }),
        rt === null ? (xe.memoizedState = rt = e) : (rt = rt.next = e));
    }
    return rt;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ii(e) {
    var t = ai;
    return (
      (ai += 1),
      Ea === null && (Ea = []),
      (e = lf(Ea, e, t)),
      (t = xe),
      (rt === null ? t.memoizedState : rt.next) === null &&
        ((t = t.alternate), (V.H = t === null || t.memoizedState === null ? Ff : Es)),
      e
    );
  }
  function mu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ii(e);
      if (e.$$typeof === w) return St(e);
    }
    throw Error(x(438, String(e)));
  }
  function os(e) {
    var t = null,
      n = xe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = xe.alternate;
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
      n === null && ((n = du()), (xe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = z;
    return (t.index++, n);
  }
  function Bn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function hu(e) {
    var t = lt();
    return fs(t, Ge, e);
  }
  function fs(e, t, n) {
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
        U = null,
        Q = t,
        W = !1;
      do {
        var P = Q.lane & -536870913;
        if (P !== Q.lane ? (Ae & P) === P : (Nn & P) === P) {
          var Z = Q.revertLane;
          if (Z === 0)
            (U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Q.action,
                  hasEagerState: Q.hasEagerState,
                  eagerState: Q.eagerState,
                  next: null,
                }),
              P === va && (W = !0));
          else if ((Nn & Z) === Z) {
            ((Q = Q.next), Z === va && (W = !0));
            continue;
          } else
            ((P = {
              lane: 0,
              revertLane: Q.revertLane,
              gesture: null,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null,
            }),
              U === null ? ((C = U = P), (S = u)) : (U = U.next = P),
              (xe.lanes |= Z),
              (ml |= Z));
          ((P = Q.action), Vl && n(u, P), (u = Q.hasEagerState ? Q.eagerState : n(u, P)));
        } else
          ((Z = {
            lane: P,
            revertLane: Q.revertLane,
            gesture: Q.gesture,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null,
          }),
            U === null ? ((C = U = Z), (S = u)) : (U = U.next = Z),
            (xe.lanes |= P),
            (ml |= P));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = C),
        !Lt(u, e.memoizedState) && ((st = !0), W && ((n = ga), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (l.lastRenderedState = u));
    }
    return (a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function ds(e) {
    var t = lt(),
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
      (Lt(u, t.memoizedState) || (st = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function vf(e, t, n) {
    var l = xe,
      a = lt(),
      u = De;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Lt((Ge || a).memoizedState, n);
    if (
      (S && ((a.memoizedState = n), (st = !0)),
      (a = a.queue),
      vs(pf.bind(null, l, a, e), [e]),
      a.getSnapshot !== t || S || (rt !== null && rt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ba(9, { destroy: void 0 }, yf.bind(null, l, a, n, t), null),
        qe === null)
      )
        throw Error(x(349));
      u || (Nn & 127) !== 0 || gf(l, t, n);
    }
    return n;
  }
  function gf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = du()), (xe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function yf(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Sf(t) && xf(e));
  }
  function pf(e, t, n) {
    return n(function () {
      Sf(t) && xf(e);
    });
  }
  function Sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Lt(e, n);
    } catch {
      return !0;
    }
  }
  function xf(e) {
    var t = wl(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function ms(e) {
    var t = At();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Vl)) {
        mn(!0);
        try {
          n();
        } finally {
          mn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Ef(e, t, n, l) {
    return ((e.baseState = n), fs(e, Ge, typeof l == 'function' ? l : Bn));
  }
  function fg(e, t, n, l, a) {
    if (yu(e)) throw Error(x(485));
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
          ? ((u.next = t.pending = u), bf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function bf(e, t) {
    var n = t.action,
      l = t.payload,
      a = e.state;
    if (t.isTransition) {
      var u = V.T,
        S = {};
      V.T = S;
      try {
        var C = n(a, l),
          U = V.S;
        (U !== null && U(S, C), Tf(e, t, C));
      } catch (Q) {
        hs(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (V.T = u));
      }
    } else
      try {
        ((u = n(a, l)), Tf(e, t, u));
      } catch (Q) {
        hs(e, t, Q);
      }
  }
  function Tf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            Mf(e, t, l);
          },
          function (l) {
            return hs(e, t, l);
          }
        )
      : Mf(e, t, n);
  }
  function Mf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Cf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), bf(e, n))));
  }
  function hs(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Cf(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Cf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Rf(e, t) {
    return t;
  }
  function Af(e, t) {
    if (De) {
      var n = qe.formState;
      if (n !== null) {
        e: {
          var l = xe;
          if (De) {
            if (Qe) {
              t: {
                for (var a = Qe, u = It; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = en(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === 'F!' || u === 'F' ? a : null));
              }
              if (a) {
                ((Qe = en(a.nextSibling)), (l = a.data === 'F!'));
                break e;
              }
            }
            al(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = At()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rf,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Kf.bind(null, xe, l)),
      (l.dispatch = n),
      (l = ms(!1)),
      (u = xs.bind(null, xe, !1, l.queue)),
      (l = At()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = a),
      (n = fg.bind(null, xe, a, u, n)),
      (a.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function _f(e) {
    var t = lt();
    return Of(t, Ge, e);
  }
  function Of(e, t, n) {
    if (
      ((t = fs(e, t, Rf)[0]),
      (e = hu(Bn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ii(t);
      } catch (S) {
        throw S === ya ? au : S;
      }
    else l = t;
    t = lt();
    var a = t.queue,
      u = a.dispatch;
    return (
      n !== t.memoizedState &&
        ((xe.flags |= 2048), ba(9, { destroy: void 0 }, dg.bind(null, a, n), null)),
      [l, u, e]
    );
  }
  function dg(e, t) {
    e.action = t;
  }
  function Df(e) {
    var t = lt(),
      n = Ge;
    if (n !== null) return Of(t, n, e);
    (lt(), (t = t.memoizedState), (n = lt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function ba(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = xe.updateQueue),
      t === null && ((t = du()), (xe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function zf() {
    return lt().memoizedState;
  }
  function vu(e, t, n, l) {
    var a = At();
    ((xe.flags |= e),
      (a.memoizedState = ba(1 | t, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function gu(e, t, n, l) {
    var a = lt();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Ge !== null && l !== null && is(l, Ge.memoizedState.deps)
      ? (a.memoizedState = ba(t, u, n, l))
      : ((xe.flags |= e), (a.memoizedState = ba(1 | t, u, n, l)));
  }
  function wf(e, t) {
    vu(8390656, 8, e, t);
  }
  function vs(e, t) {
    gu(2048, 8, e, t);
  }
  function mg(e) {
    xe.flags |= 4;
    var t = xe.updateQueue;
    if (t === null) ((t = du()), (xe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Nf(e) {
    var t = lt().memoizedState;
    return (
      mg({ ref: t, nextImpl: e }),
      function () {
        if ((He & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Bf(e, t) {
    return gu(4, 2, e, t);
  }
  function Uf(e, t) {
    return gu(4, 4, e, t);
  }
  function Hf(e, t) {
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
  function Lf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), gu(4, 4, Hf.bind(null, t, e), n));
  }
  function gs() {}
  function jf(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && is(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Gf(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && is(t, l[1])) return l[0];
    if (((l = e()), Vl)) {
      mn(!0);
      try {
        e();
      } finally {
        mn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function ys(e, t, n) {
    return n === void 0 || ((Nn & 1073741824) !== 0 && (Ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Yd()), (xe.lanes |= e), (ml |= e), n);
  }
  function Yf(e, t, n, l) {
    return Lt(n, t)
      ? n
      : Sa.current !== null
        ? ((e = ys(e, n, l)), Lt(e, t) || (st = !0), e)
        : (Nn & 42) === 0 || ((Nn & 1073741824) !== 0 && (Ae & 261930) === 0)
          ? ((st = !0), (e.memoizedState = n))
          : ((e = Yd()), (xe.lanes |= e), (ml |= e), t);
  }
  function Vf(e, t, n, l, a) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = V.T,
      C = {};
    ((V.T = C), xs(e, !1, t, n));
    try {
      var U = a(),
        Q = V.S;
      if (
        (Q !== null && Q(C, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var W = sg(U, l);
        ui(e, t, W, Xt(e));
      } else ui(e, t, l, Xt(e));
    } catch (P) {
      ui(e, t, { then: function () {}, status: 'rejected', reason: P }, Xt());
    } finally {
      ((K.p = u), S !== null && C.types !== null && (S.types = C.types), (V.T = S));
    }
  }
  function hg() {}
  function ps(e, t, n, l) {
    if (e.tag !== 5) throw Error(x(476));
    var a = qf(e).queue;
    Vf(
      e,
      a,
      t,
      ne,
      n === null
        ? hg
        : function () {
            return (Xf(e), n(l));
          }
    );
  }
  function qf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: ne,
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
          lastRenderedReducer: Bn,
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
  function Xf(e) {
    var t = qf(e);
    (t.next === null && (t = e.alternate.memoizedState), ui(e, t.next.queue, {}, Xt()));
  }
  function Ss() {
    return St(Ti);
  }
  function Qf() {
    return lt().memoizedState;
  }
  function Zf() {
    return lt().memoizedState;
  }
  function vg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Xt();
          e = rl(n);
          var l = sl(t, e, n);
          (l !== null && (Nt(l, t, n), ti(l, t, n)), (t = { cache: kr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function gg(e, t, n) {
    var l = Xt();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yu(e) ? Jf(t, n) : ((n = Lr(e, t, n, l)), n !== null && (Nt(n, e, l), kf(n, t, l))));
  }
  function Kf(e, t, n) {
    var l = Xt();
    ui(e, t, n, l);
  }
  function ui(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yu(e)) Jf(t, a);
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
          if (((a.hasEagerState = !0), (a.eagerState = C), Lt(C, S)))
            return (Wi(e, t, a, 0), qe === null && $i(), !1);
        } catch {
        } finally {
        }
      if (((n = Lr(e, t, a, l)), n !== null)) return (Nt(n, e, l), kf(n, t, l), !0);
    }
    return !1;
  }
  function xs(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Is(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yu(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = Lr(e, n, l, 2)), t !== null && Nt(t, e, 2));
  }
  function yu(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Jf(e, t) {
    xa = ou = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function kf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Je(e, n));
    }
  }
  var ri = {
    readContext: St,
    use: mu,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useLayoutEffect: Ie,
    useInsertionEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    useHostTransitionStatus: Ie,
    useFormState: Ie,
    useActionState: Ie,
    useOptimistic: Ie,
    useMemoCache: Ie,
    useCacheRefresh: Ie,
  };
  ri.useEffectEvent = Ie;
  var Ff = {
      readContext: St,
      use: mu,
      useCallback: function (e, t) {
        return ((At().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: St,
      useEffect: wf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), vu(4194308, 4, Hf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return vu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        vu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = At();
        t = t === void 0 ? null : t;
        var l = e();
        if (Vl) {
          mn(!0);
          try {
            e();
          } finally {
            mn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = At();
        if (n !== void 0) {
          var a = n(t);
          if (Vl) {
            mn(!0);
            try {
              n(t);
            } finally {
              mn(!1);
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
          (e = e.dispatch = gg.bind(null, xe, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = At();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ms(e);
        var t = e.queue,
          n = Kf.bind(null, xe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: gs,
      useDeferredValue: function (e, t) {
        var n = At();
        return ys(n, e, t);
      },
      useTransition: function () {
        var e = ms(!1);
        return ((e = Vf.bind(null, xe, e.queue, !0, !1)), (At().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var l = xe,
          a = At();
        if (De) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), qe === null)) throw Error(x(349));
          (Ae & 127) !== 0 || gf(l, t, n);
        }
        a.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (a.queue = u),
          wf(pf.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          ba(9, { destroy: void 0 }, yf.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = At(),
          t = qe.identifierPrefix;
        if (De) {
          var n = gn,
            l = vn;
          ((n = (l & ~(1 << (32 - Rt(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = fu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = cg++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ss,
      useFormState: Af,
      useActionState: Af,
      useOptimistic: function (e) {
        var t = At();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = xs.bind(null, xe, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: os,
      useCacheRefresh: function () {
        return (At().memoizedState = vg.bind(null, xe));
      },
      useEffectEvent: function (e) {
        var t = At(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((He & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Es = {
      readContext: St,
      use: mu,
      useCallback: jf,
      useContext: St,
      useEffect: vs,
      useImperativeHandle: Lf,
      useInsertionEffect: Bf,
      useLayoutEffect: Uf,
      useMemo: Gf,
      useReducer: hu,
      useRef: zf,
      useState: function () {
        return hu(Bn);
      },
      useDebugValue: gs,
      useDeferredValue: function (e, t) {
        var n = lt();
        return Yf(n, Ge.memoizedState, e, t);
      },
      useTransition: function () {
        var e = hu(Bn)[0],
          t = lt().memoizedState;
        return [typeof e == 'boolean' ? e : ii(e), t];
      },
      useSyncExternalStore: vf,
      useId: Qf,
      useHostTransitionStatus: Ss,
      useFormState: _f,
      useActionState: _f,
      useOptimistic: function (e, t) {
        var n = lt();
        return Ef(n, Ge, e, t);
      },
      useMemoCache: os,
      useCacheRefresh: Zf,
    };
  Es.useEffectEvent = Nf;
  var $f = {
    readContext: St,
    use: mu,
    useCallback: jf,
    useContext: St,
    useEffect: vs,
    useImperativeHandle: Lf,
    useInsertionEffect: Bf,
    useLayoutEffect: Uf,
    useMemo: Gf,
    useReducer: ds,
    useRef: zf,
    useState: function () {
      return ds(Bn);
    },
    useDebugValue: gs,
    useDeferredValue: function (e, t) {
      var n = lt();
      return Ge === null ? ys(n, e, t) : Yf(n, Ge.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ds(Bn)[0],
        t = lt().memoizedState;
      return [typeof e == 'boolean' ? e : ii(e), t];
    },
    useSyncExternalStore: vf,
    useId: Qf,
    useHostTransitionStatus: Ss,
    useFormState: Df,
    useActionState: Df,
    useOptimistic: function (e, t) {
      var n = lt();
      return Ge !== null ? Ef(n, Ge, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: os,
    useCacheRefresh: Zf,
  };
  $f.useEffectEvent = Nf;
  function bs(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ts = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Xt(),
        a = rl(l);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = sl(e, a, l)),
        t !== null && (Nt(t, e, l), ti(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Xt(),
        a = rl(l);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = sl(e, a, l)),
        t !== null && (Nt(t, e, l), ti(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Xt(),
        l = rl(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = sl(e, l, n)),
        t !== null && (Nt(t, e, n), ti(t, e, n)));
    },
  };
  function Wf(e, t, n, l, a, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ja(n, l) || !Ja(a, u)
          : !0
    );
  }
  function If(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ts.enqueueReplaceState(t, t.state, null));
  }
  function ql(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = p({}, n));
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Pf(e) {
    Fi(e);
  }
  function ed(e) {
    console.error(e);
  }
  function td(e) {
    Fi(e);
  }
  function pu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function nd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ms(e, t, n) {
    return (
      (n = rl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        pu(e, t);
      }),
      n
    );
  }
  function ld(e) {
    return ((e = rl(e)), (e.tag = 3), e);
  }
  function ad(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          nd(t, n, l);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (nd(t, n, l),
          typeof a != 'function' && (hl === null ? (hl = new Set([this])) : hl.add(this)));
        var C = l.stack;
        this.componentDidCatch(l.value, { componentStack: C !== null ? C : '' });
      });
  }
  function yg(e, t, n, l, a) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && ha(t, n, a, !0), (n = Gt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Pt === null ? Du() : n.alternate === null && Pe === 0 && (Pe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = a),
              l === iu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Fs(e, l, a)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === iu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Fs(e, l, a)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Fs(e, l, a), Du(), !1);
    }
    if (De)
      return (
        (t = Gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            l !== Xr && ((e = Error(x(422), { cause: l })), $a(Ft(e, n))))
          : (l !== Xr && ((t = Error(x(423), { cause: l })), $a(Ft(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (l = Ft(l, n)),
            (a = Ms(e.stateNode, l, a)),
            es(e, a),
            Pe !== 4 && (Pe = 2)),
        !1
      );
    var u = Error(x(520), { cause: l });
    if (((u = Ft(u, n)), vi === null ? (vi = [u]) : vi.push(u), Pe !== 4 && (Pe = 2), t === null))
      return !0;
    ((l = Ft(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = a & -a),
            (n.lanes |= e),
            (e = Ms(n.stateNode, l, e)),
            es(n, e),
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
                  (hl === null || !hl.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (a &= -a),
              (n.lanes |= a),
              (a = ld(a)),
              ad(a, e, n, l),
              es(n, a),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Cs = Error(x(461)),
    st = !1;
  function xt(e, t, n, l) {
    t.child = e === null ? sf(t, null, n, l) : Yl(t, e.child, n, l);
  }
  function id(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var S = {};
      for (var C in l) C !== 'ref' && (S[C] = l[C]);
    } else S = l;
    return (
      Hl(t),
      (l = us(e, t, n, S, u, a)),
      (C = rs()),
      e !== null && !st
        ? (ss(e, t, a), Un(e, t, a))
        : (De && C && Vr(t), (t.flags |= 1), xt(e, t, l, a), t.child)
    );
  }
  function ud(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !jr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), rd(e, t, u, l, a))
        : ((e = Pi(n.type, null, l, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Ns(e, a))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ja), n(S, l) && e.ref === t.ref))
        return Un(e, t, a);
    }
    return ((t.flags |= 1), (e = On(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function rd(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ja(u, l) && e.ref === t.ref)
        if (((st = !1), (t.pendingProps = l = u), Ns(e, a))) (e.flags & 131072) !== 0 && (st = !0);
        else return ((t.lanes = e.lanes), Un(e, t, a));
    }
    return Rs(e, t, n, l, a);
  }
  function sd(e, t, n, l) {
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
        return cd(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && lu(t, u !== null ? u.cachePool : null),
          u !== null ? ff(t, u) : ns(),
          df(t));
      else return ((l = t.lanes = 536870912), cd(e, t, u !== null ? u.baseLanes | n : n, n, l));
    } else
      u !== null
        ? (lu(t, u.cachePool), ff(t, u), ol(), (t.memoizedState = null))
        : (e !== null && lu(t, null), ns(), ol());
    return (xt(e, t, a, n), t.child);
  }
  function si(e, t) {
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
  function cd(e, t, n, l, a) {
    var u = $r();
    return (
      (u = u === null ? null : { parent: ut._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && lu(t, null),
      ns(),
      df(t),
      e !== null && ha(e, t, l, !0),
      (t.childLanes = a),
      null
    );
  }
  function Su(e, t) {
    return (
      (t = Eu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function od(e, t, n) {
    return (
      Yl(t, e.child, null, n),
      (e = Su(t, t.pendingProps)),
      (e.flags |= 2),
      Yt(t),
      (t.memoizedState = null),
      e
    );
  }
  function pg(e, t, n) {
    var l = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (De) {
        if (l.mode === 'hidden') return ((e = Su(t, l)), (t.lanes = 536870912), si(null, e));
        if (
          (as(t),
          (e = Qe)
            ? ((e = bm(e, It)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: nl !== null ? { id: vn, overflow: gn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ko(e)),
                (n.return = t),
                (t.child = n),
                (pt = t),
                (Qe = null)))
            : (e = null),
          e === null)
        )
          throw al(t);
        return ((t.lanes = 536870912), null);
      }
      return Su(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((as(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = od(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((st || ha(e, t, n, !1), (a = (n & e.childLanes) !== 0), st || a)) {
        if (((l = qe), l !== null && ((S = Ue(l, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), wl(e, S), Nt(l, e, S), Cs);
        (Du(), (t = od(e, t, n)));
      } else
        ((e = u.treeContext),
          (Qe = en(S.nextSibling)),
          (pt = t),
          (De = !0),
          (ll = null),
          (It = !1),
          e !== null && Fo(t, e),
          (t = Su(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = On(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function xu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Rs(e, t, n, l, a) {
    return (
      Hl(t),
      (n = us(e, t, n, l, void 0, a)),
      (l = rs()),
      e !== null && !st
        ? (ss(e, t, a), Un(e, t, a))
        : (De && l && Vr(t), (t.flags |= 1), xt(e, t, n, a), t.child)
    );
  }
  function fd(e, t, n, l, a, u) {
    return (
      Hl(t),
      (t.updateQueue = null),
      (n = hf(t, l, n, a)),
      mf(e),
      (l = rs()),
      e !== null && !st
        ? (ss(e, t, u), Un(e, t, u))
        : (De && l && Vr(t), (t.flags |= 1), xt(e, t, n, u), t.child)
    );
  }
  function dd(e, t, n, l, a) {
    if ((Hl(t), t.stateNode === null)) {
      var u = oa,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = St(S)),
        (u = new n(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ts),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Ir(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? St(S) : oa),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (bs(t, n, S, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && Ts.enqueueReplaceState(u, u.state, null),
          li(t, l, u, a),
          ni(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        U = ql(n, C);
      u.props = U;
      var Q = u.context,
        W = n.contextType;
      ((S = oa), typeof W == 'object' && W !== null && (S = St(W)));
      var P = n.getDerivedStateFromProps;
      ((W = typeof P == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((C || Q !== S) && If(t, u, l, S)),
        (ul = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        li(t, l, u, a),
        ni(),
        (Q = t.memoizedState),
        C || Z !== Q || ul
          ? (typeof P == 'function' && (bs(t, n, P, l), (Q = t.memoizedState)),
            (U = ul || Wf(t, n, U, l, Z, Q, S))
              ? (W ||
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
            (l = U))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (l = !1)));
    } else {
      ((u = t.stateNode),
        Pr(e, t),
        (S = t.memoizedProps),
        (W = ql(n, S)),
        (u.props = W),
        (P = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = oa),
        typeof Q == 'object' && Q !== null && (U = St(Q)),
        (C = n.getDerivedStateFromProps),
        (Q = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== P || Z !== U) && If(t, u, l, U)),
        (ul = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        li(t, l, u, a),
        ni());
      var k = t.memoizedState;
      S !== P || Z !== k || ul || (e !== null && e.dependencies !== null && tu(e.dependencies))
        ? (typeof C == 'function' && (bs(t, n, C, l), (k = t.memoizedState)),
          (W =
            ul ||
            Wf(t, n, W, l, Z, k, U) ||
            (e !== null && e.dependencies !== null && tu(e.dependencies)))
            ? (Q ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, k, U),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, k, U)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = k)),
          (u.props = l),
          (u.state = k),
          (u.context = U),
          (l = W))
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
      xu(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Yl(t, e.child, null, a)), (t.child = Yl(t, null, n, a)))
            : xt(e, t, n, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Un(e, t, a)),
      e
    );
  }
  function md(e, t, n, l) {
    return (Bl(), (t.flags |= 256), xt(e, t, n, l), t.child);
  }
  var As = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function _s(e) {
    return { baseLanes: e, cachePool: tf() };
  }
  function Os(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= qt), e);
  }
  function hd(e, t, n) {
    var l = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (nt.current & 2) !== 0),
      S && ((a = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (De) {
        if (
          (a ? cl(t) : ol(),
          (e = Qe)
            ? ((e = bm(e, It)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: nl !== null ? { id: vn, overflow: gn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ko(e)),
                (n.return = t),
                (t.child = n),
                (pt = t),
                (Qe = null)))
            : (e = null),
          e === null)
        )
          throw al(t);
        return (fc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = l.children;
      return (
        (l = l.fallback),
        a
          ? (ol(),
            (a = t.mode),
            (C = Eu({ mode: 'hidden', children: C }, a)),
            (l = Nl(l, a, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (l = t.child),
            (l.memoizedState = _s(n)),
            (l.childLanes = Os(e, S, n)),
            (t.memoizedState = As),
            si(null, l))
          : (cl(t), Ds(t, C))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((C = U.dehydrated), C !== null)) {
      if (u)
        t.flags & 256
          ? (cl(t), (t.flags &= -257), (t = zs(e, t, n)))
          : t.memoizedState !== null
            ? (ol(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ol(),
              (C = l.fallback),
              (a = t.mode),
              (l = Eu({ mode: 'visible', children: l.children }, a)),
              (C = Nl(C, a, n, null)),
              (C.flags |= 2),
              (l.return = t),
              (C.return = t),
              (l.sibling = C),
              (t.child = l),
              Yl(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = _s(n)),
              (l.childLanes = Os(e, S, n)),
              (t.memoizedState = As),
              (t = si(null, l)));
      else if ((cl(t), fc(C))) {
        if (((S = C.nextSibling && C.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (l = Error(x(419))),
          (l.stack = ''),
          (l.digest = S),
          $a({ value: l, source: null, stack: null }),
          (t = zs(e, t, n)));
      } else if ((st || ha(e, t, n, !1), (S = (n & e.childLanes) !== 0), st || S)) {
        if (((S = qe), S !== null && ((l = Ue(S, n)), l !== 0 && l !== U.retryLane)))
          throw ((U.retryLane = l), wl(e, l), Nt(S, e, l), Cs);
        (oc(C) || Du(), (t = zs(e, t, n)));
      } else
        oc(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (Qe = en(C.nextSibling)),
            (pt = t),
            (De = !0),
            (ll = null),
            (It = !1),
            e !== null && Fo(t, e),
            (t = Ds(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? (ol(),
        (C = l.fallback),
        (a = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (l = On(U, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (C = On(Q, C)) : ((C = Nl(C, a, n, null)), (C.flags |= 2)),
        (C.return = t),
        (l.return = t),
        (l.sibling = C),
        (t.child = l),
        si(null, l),
        (l = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = _s(n))
          : ((a = C.cachePool),
            a !== null
              ? ((U = ut._currentValue), (a = a.parent !== U ? { parent: U, pool: U } : a))
              : (a = tf()),
            (C = { baseLanes: C.baseLanes | n, cachePool: a })),
        (l.memoizedState = C),
        (l.childLanes = Os(e, S, n)),
        (t.memoizedState = As),
        si(e.child, l))
      : (cl(t),
        (n = e.child),
        (e = n.sibling),
        (n = On(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((S = t.deletions), S === null ? ((t.deletions = [e]), (t.flags |= 16)) : S.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Ds(e, t) {
    return ((t = Eu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Eu(e, t) {
    return ((e = jt(22, e, null, t)), (e.lanes = 0), e);
  }
  function zs(e, t, n) {
    return (
      Yl(t, e.child, null, n),
      (e = Ds(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Kr(e.return, t, n));
  }
  function ws(e, t, n, l, a, u) {
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
  function gd(e, t, n) {
    var l = t.pendingProps,
      a = l.revealOrder,
      u = l.tail;
    l = l.children;
    var S = nt.current,
      C = (S & 2) !== 0;
    if (
      (C ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      ae(nt, S),
      xt(e, t, l, n),
      (l = De ? Fa : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vd(e, n, t);
        else if (e.tag === 19) vd(e, n, t);
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
          ((e = n.alternate), e !== null && cu(e) === null && (a = n), (n = n.sibling));
        ((n = a),
          n === null ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
          ws(t, !1, a, n, u, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && cu(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
        }
        ws(t, !0, n, null, u, l);
        break;
      case 'together':
        ws(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Un(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ml |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ha(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ns(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && tu(e)));
  }
  function Sg(e, t, n) {
    switch (t.tag) {
      case 3:
        (Me(t, t.stateNode.containerInfo), il(t, ut, e.memoizedState.cache), Bl());
        break;
      case 27:
      case 5:
        Ke(t);
        break;
      case 4:
        Me(t, t.stateNode.containerInfo);
        break;
      case 10:
        il(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), as(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (cl(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? hd(e, t, n)
              : (cl(t), (e = Un(e, t, n)), e !== null ? e.sibling : null);
        cl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (ha(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          a)
        ) {
          if (l) return gd(e, t, n);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          ae(nt, nt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), sd(e, t, n, t.pendingProps));
      case 24:
        il(t, ut, e.memoizedState.cache);
    }
    return Un(e, t, n);
  }
  function yd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) st = !0;
      else {
        if (!Ns(e, n) && (t.flags & 128) === 0) return ((st = !1), Sg(e, t, n));
        st = (e.flags & 131072) !== 0;
      }
    else ((st = !1), De && (t.flags & 1048576) !== 0 && ko(t, Fa, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = jl(t.elementType)), (t.type = e), typeof e == 'function'))
            jr(e)
              ? ((l = ql(e, l)), (t.tag = 1), (t = dd(null, t, e, l, n)))
              : ((t.tag = 0), (t = Rs(null, t, e, l, n)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === H) {
                ((t.tag = 11), (t = id(null, t, e, l, n)));
                break e;
              } else if (a === O) {
                ((t.tag = 14), (t = ud(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return Rs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (a = ql(l, t.pendingProps)), dd(e, t, l, a, n));
      case 3:
        e: {
          if ((Me(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), Pr(e, t), li(t, l, null, n));
          var S = t.memoizedState;
          if (
            ((l = S.cache),
            il(t, ut, l),
            l !== u.cache && Jr(t, [ut], n, !0),
            ni(),
            (l = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = md(e, t, l, n);
              break e;
            } else if (l !== a) {
              ((a = Ft(Error(x(424)), t)), $a(a), (t = md(e, t, l, n)));
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
                Qe = en(e.firstChild),
                  pt = t,
                  De = !0,
                  ll = null,
                  It = !0,
                  n = sf(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Bl(), l === a)) {
              t = Un(e, t, n);
              break e;
            }
            xt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xu(e, t),
          e === null
            ? (n = _m(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : De ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Lu(ue.current).createElement(n)),
                (l[it] = t),
                (l[yt] = e),
                Et(l, n, e),
                dt(l),
                (t.stateNode = l))
            : (t.memoizedState = _m(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ke(t),
          e === null &&
            De &&
            ((l = t.stateNode = Cm(t.type, t.pendingProps, ue.current)),
            (pt = t),
            (It = !0),
            (a = Qe),
            pl(t.type) ? ((dc = a), (Qe = en(l.firstChild))) : (Qe = a)),
          xt(e, t, t.pendingProps.children, n),
          xu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            De &&
            ((a = l = Qe) &&
              ((l = Fg(l, t.type, t.pendingProps, It)),
              l !== null
                ? ((t.stateNode = l), (pt = t), (Qe = en(l.firstChild)), (It = !1), (a = !0))
                : (a = !1)),
            a || al(t)),
          Ke(t),
          (a = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (l = u.children),
          rc(a, u) ? (l = null) : S !== null && rc(a, S) && (t.flags |= 32),
          t.memoizedState !== null && ((a = us(e, t, og, null, null, n)), (Ti._currentValue = a)),
          xu(e, t),
          xt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            De &&
            ((e = n = Qe) &&
              ((n = $g(n, t.pendingProps, It)),
              n !== null ? ((t.stateNode = n), (pt = t), (Qe = null), (e = !0)) : (e = !1)),
            e || al(t)),
          null
        );
      case 13:
        return hd(e, t, n);
      case 4:
        return (
          Me(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Yl(t, null, l, n)) : xt(e, t, l, n),
          t.child
        );
      case 11:
        return id(e, t, t.type, t.pendingProps, n);
      case 7:
        return (xt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (xt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (xt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((l = t.pendingProps), il(t, t.type, l.value), xt(e, t, l.children, n), t.child);
      case 9:
        return (
          (a = t.type._context),
          (l = t.pendingProps.children),
          Hl(t),
          (a = St(a)),
          (l = l(a)),
          (t.flags |= 1),
          xt(e, t, l, n),
          t.child
        );
      case 14:
        return ud(e, t, t.type, t.pendingProps, n);
      case 15:
        return rd(e, t, t.type, t.pendingProps, n);
      case 19:
        return gd(e, t, n);
      case 31:
        return pg(e, t, n);
      case 22:
        return sd(e, t, n, t.pendingProps);
      case 24:
        return (
          Hl(t),
          (l = St(ut)),
          e === null
            ? ((a = $r()),
              a === null &&
                ((a = qe),
                (u = kr()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= n),
                (a = u)),
              (t.memoizedState = { parent: l, cache: a }),
              Ir(t),
              il(t, ut, a))
            : ((e.lanes & n) !== 0 && (Pr(e, t), li(t, null, null, n), ni()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== l
                ? ((a = { parent: l, cache: l }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  il(t, ut, l))
                : ((l = u.cache), il(t, ut, l), l !== a.cache && Jr(t, [ut], n, !0))),
          xt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function Hn(e) {
    e.flags |= 4;
  }
  function Bs(e, t, n, l, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Qd()) e.flags |= 8192;
        else throw ((Gl = iu), Wr);
    } else e.flags &= -16777217;
  }
  function pd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Nm(t)))
      if (Qd()) e.flags |= 8192;
      else throw ((Gl = iu), Wr);
  }
  function bu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? pe() : 536870912), (e.lanes |= t), (Ra |= t)));
  }
  function ci(e, t) {
    if (!De)
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
  function Ze(e) {
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
  function xg(e, t, n) {
    var l = t.pendingProps;
    switch ((qr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ze(t), null);
      case 1:
        return (Ze(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          wn(ut),
          be(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ma(t)
              ? Hn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Qr())),
          Ze(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Hn(t), u !== null ? (Ze(t), pd(t, u)) : (Ze(t), Bs(t, a, null, l, n)))
            : u
              ? u !== e.memoizedState
                ? (Hn(t), Ze(t), pd(t, u))
                : (Ze(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== l && Hn(t), Ze(t), Bs(t, a, e, l, n)),
          null
        );
      case 27:
        if ((et(t), (n = ue.current), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Hn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ze(t), null);
          }
          ((e = ie.current), ma(t) ? $o(t) : ((e = Cm(a, l, n)), (t.stateNode = e), Hn(t)));
        }
        return (Ze(t), null);
      case 5:
        if ((et(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Hn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ze(t), null);
          }
          if (((u = ie.current), ma(t))) $o(t);
          else {
            var S = Lu(ue.current);
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
            ((u[it] = t), (u[yt] = l));
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
            e: switch ((Et(u, a, l), a)) {
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
            l && Hn(t);
          }
        }
        return (Ze(t), Bs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Hn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ue.current), ma(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (a = pt), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            ((e[it] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                hm(e.nodeValue, n)
              )),
              e || al(t, !0));
          } else ((e = Lu(e).createTextNode(l)), (e[it] = t), (t.stateNode = e));
        }
        return (Ze(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ma(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[it] = t;
            } else (Bl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (e = !1));
          } else
            ((n = Qr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (Ze(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = ma(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(x(317));
              a[it] = t;
            } else (Bl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ze(t), (a = !1));
          } else
            ((a = Qr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        return (
          Yt(t),
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
              bu(t, t.updateQueue),
              Ze(t),
              null)
        );
      case 4:
        return (be(), e === null && nc(t.stateNode.containerInfo), Ze(t), null);
      case 10:
        return (wn(t.type), Ze(t), null);
      case 19:
        if (($(nt), (l = t.memoizedState), l === null)) return (Ze(t), null);
        if (((a = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (a) ci(l, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = cu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ci(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      bu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Zo(n, e), (n = n.sibling));
                  return (ae(nt, (nt.current & 1) | 2), De && Dn(t, l.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              We() > Au &&
              ((t.flags |= 128), (a = !0), ci(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = cu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                bu(t, e),
                ci(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !u.alternate && !De)
              )
                return (Ze(t), null);
            } else
              2 * We() - l.renderingStartTime > Au &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), ci(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last), e !== null ? (e.sibling = u) : (t.child = u), (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = We()),
            (e.sibling = null),
            (n = nt.current),
            ae(nt, a ? (n & 1) | 2 : n & 1),
            De && Dn(t, l.treeForkCount),
            e)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          Yt(t),
          ls(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          (n = t.updateQueue),
          n !== null && bu(t, n.retryQueue),
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
          e !== null && $(Ll),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          wn(ut),
          Ze(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(x(156, t.tag));
  }
  function Eg(e, t) {
    switch ((qr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          wn(ut),
          be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (et(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Yt(t), t.alternate === null)) throw Error(x(340));
          Bl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Yt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          Bl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return ($(nt), null);
      case 4:
        return (be(), null);
      case 10:
        return (wn(t.type), null);
      case 22:
      case 23:
        return (
          Yt(t),
          ls(),
          e !== null && $(Ll),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (wn(ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sd(e, t) {
    switch ((qr(t), t.tag)) {
      case 3:
        (wn(ut), be());
        break;
      case 26:
      case 27:
      case 5:
        et(t);
        break;
      case 4:
        be();
        break;
      case 31:
        t.memoizedState !== null && Yt(t);
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        $(nt);
        break;
      case 10:
        wn(t.type);
        break;
      case 22:
      case 23:
        (Yt(t), ls(), e !== null && $(Ll));
        break;
      case 24:
        wn(ut);
    }
  }
  function oi(e, t) {
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
      je(t, t.return, C);
    }
  }
  function fl(e, t, n) {
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
              var U = n,
                Q = C;
              try {
                Q();
              } catch (W) {
                je(a, U, W);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (W) {
      je(t, t.return, W);
    }
  }
  function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        of(t, n);
      } catch (l) {
        je(e, e.return, l);
      }
    }
  }
  function Ed(e, t, n) {
    ((n.props = ql(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      je(e, t, l);
    }
  }
  function fi(e, t) {
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
      je(e, t, a);
    }
  }
  function yn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (a) {
          je(e, t, a);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (a) {
          je(e, t, a);
        }
      else n.current = null;
  }
  function bd(e) {
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
      je(e, e.return, a);
    }
  }
  function Us(e, t, n) {
    try {
      var l = e.stateNode;
      (Xg(l, e.type, n, t), (l[yt] = t));
    } catch (a) {
      je(e, e.return, a);
    }
  }
  function Td(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && pl(e.type)) || e.tag === 4
    );
  }
  function Hs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Td(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && pl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ls(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = An)));
    else if (
      l !== 4 &&
      (l === 27 && pl(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ls(e, t, n), e = e.sibling; e !== null; ) (Ls(e, t, n), (e = e.sibling));
  }
  function Tu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && (l === 27 && pl(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (Tu(e, t, n), e = e.sibling; e !== null; ) (Tu(e, t, n), (e = e.sibling));
  }
  function Md(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      (Et(t, l, n), (t[it] = e), (t[yt] = n));
    } catch (u) {
      je(e, e.return, u);
    }
  }
  var Ln = !1,
    ct = !1,
    js = !1,
    Cd = typeof WeakSet == 'function' ? WeakSet : Set,
    mt = null;
  function bg(e, t) {
    if (((e = e.containerInfo), (ic = Qu), (e = Ho(e)), zr(e))) {
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
              U = -1,
              Q = 0,
              W = 0,
              P = e,
              Z = null;
            t: for (;;) {
              for (
                var k;
                P !== n || (a !== 0 && P.nodeType !== 3) || (C = S + a),
                  P !== u || (l !== 0 && P.nodeType !== 3) || (U = S + l),
                  P.nodeType === 3 && (S += P.nodeValue.length),
                  (k = P.firstChild) !== null;
              )
                ((Z = P), (P = k));
              for (;;) {
                if (P === e) break t;
                if (
                  (Z === n && ++Q === a && (C = S),
                  Z === u && ++W === l && (U = S),
                  (k = P.nextSibling) !== null)
                )
                  break;
                ((P = Z), (Z = P.parentNode));
              }
              P = k;
            }
            n = C === -1 || U === -1 ? null : { start: C, end: U };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (uc = { focusedElem: e, selectionRange: n }, Qu = !1, mt = t; mt !== null; )
      if (((t = mt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (mt = e));
      else
        for (; mt !== null; ) {
          switch (((t = mt), (u = t.alternate), (e = t.flags), t.tag)) {
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
                  var re = ql(n.type, a);
                  ((e = l.getSnapshotBeforeUpdate(re, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ve) {
                  je(n, n.return, ve);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) cc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      cc(e);
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
            ((e.return = t.return), (mt = e));
            break;
          }
          mt = t.return;
        }
  }
  function Rd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Gn(e, n), l & 4 && oi(5, n));
        break;
      case 1:
        if ((Gn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              je(n, n.return, S);
            }
          else {
            var a = ql(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              je(n, n.return, S);
            }
          }
        (l & 64 && xd(n), l & 512 && fi(n, n.return));
        break;
      case 3:
        if ((Gn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
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
            of(e, t);
          } catch (S) {
            je(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Md(n);
      case 26:
      case 5:
        (Gn(e, n), t === null && l & 4 && bd(n), l & 512 && fi(n, n.return));
        break;
      case 12:
        Gn(e, n);
        break;
      case 31:
        (Gn(e, n), l & 4 && Od(e, n));
        break;
      case 13:
        (Gn(e, n),
          l & 4 && Dd(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = zg.bind(null, n)), Wg(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Ln), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || ct), (a = Ln));
          var u = ct;
          ((Ln = l),
            (ct = t) && !u ? Yn(e, n, (n.subtreeFlags & 8772) !== 0) : Gn(e, n),
            (Ln = a),
            (ct = u));
        }
        break;
      case 30:
        break;
      default:
        Gn(e, n);
    }
  }
  function Ad(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ad(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && hr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ke = null,
    Ot = !1;
  function jn(e, t, n) {
    for (n = n.child; n !== null; ) (_d(e, t, n), (n = n.sibling));
  }
  function _d(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
      try {
        Ct.onCommitFiberUnmount(Al, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (ct || yn(n, t),
          jn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        ct || yn(n, t);
        var l = ke,
          a = Ot;
        (pl(n.type) && ((ke = n.stateNode), (Ot = !1)),
          jn(e, t, n),
          xi(n.stateNode),
          (ke = l),
          (Ot = a));
        break;
      case 5:
        ct || yn(n, t);
      case 6:
        if (((l = ke), (a = Ot), (ke = null), jn(e, t, n), (ke = l), (Ot = a), ke !== null))
          if (Ot)
            try {
              (ke.nodeType === 9
                ? ke.body
                : ke.nodeName === 'HTML'
                  ? ke.ownerDocument.body
                  : ke
              ).removeChild(n.stateNode);
            } catch (u) {
              je(n, t, u);
            }
          else
            try {
              ke.removeChild(n.stateNode);
            } catch (u) {
              je(n, t, u);
            }
        break;
      case 18:
        ke !== null &&
          (Ot
            ? ((e = ke),
              xm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Ba(e))
            : xm(ke, n.stateNode));
        break;
      case 4:
        ((l = ke),
          (a = Ot),
          (ke = n.stateNode.containerInfo),
          (Ot = !0),
          jn(e, t, n),
          (ke = l),
          (Ot = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fl(2, n, t), ct || fl(4, n, t), jn(e, t, n));
        break;
      case 1:
        (ct ||
          (yn(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && Ed(n, t, l)),
          jn(e, t, n));
        break;
      case 21:
        jn(e, t, n);
        break;
      case 22:
        ((ct = (l = ct) || n.memoizedState !== null), jn(e, t, n), (ct = l));
        break;
      default:
        jn(e, t, n);
    }
  }
  function Od(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ba(e);
      } catch (n) {
        je(t, t.return, n);
      }
    }
  }
  function Dd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ba(e);
      } catch (n) {
        je(t, t.return, n);
      }
  }
  function Tg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Cd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Cd()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function Mu(e, t) {
    var n = Tg(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var a = wg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Dt(e, t) {
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
              if (pl(C.type)) {
                ((ke = C.stateNode), (Ot = !1));
                break e;
              }
              break;
            case 5:
              ((ke = C.stateNode), (Ot = !1));
              break e;
            case 3:
            case 4:
              ((ke = C.stateNode.containerInfo), (Ot = !0));
              break e;
          }
          C = C.return;
        }
        if (ke === null) throw Error(x(160));
        (_d(u, S, a),
          (ke = null),
          (Ot = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (zd(t, e), (t = t.sibling));
  }
  var sn = null;
  function zd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Dt(t, e), zt(e), l & 4 && (fl(3, e, e.return), oi(3, e), fl(5, e, e.return)));
        break;
      case 1:
        (Dt(t, e),
          zt(e),
          l & 512 && (ct || n === null || yn(n, n.return)),
          l & 64 &&
            Ln &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var a = sn;
        if ((Dt(t, e), zt(e), l & 512 && (ct || n === null || yn(n, n.return)), l & 4)) {
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
                          u[ja] ||
                          u[it] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = a.createElement(l)),
                          a.head.insertBefore(u, a.querySelector('head > title'))),
                        Et(u, l, n),
                        (u[it] = e),
                        dt(u),
                        (l = u));
                      break e;
                    case 'link':
                      var S = zm('link', 'href', a).get(l + (n.href || ''));
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
                      ((u = a.createElement(l)), Et(u, l, n), a.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = zm('meta', 'content', a).get(l + (n.content || '')))) {
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
                      ((u = a.createElement(l)), Et(u, l, n), a.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, l));
                  }
                  ((u[it] = e), dt(u), (l = u));
                }
                e.stateNode = l;
              } else wm(a, e.type, e.stateNode);
            else e.stateNode = Dm(a, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null ? wm(a, e.type, e.stateNode) : Dm(a, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Us(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Dt(t, e),
          zt(e),
          l & 512 && (ct || n === null || yn(n, n.return)),
          n !== null && l & 4 && Us(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Dt(t, e), zt(e), l & 512 && (ct || n === null || yn(n, n.return)), e.flags & 32)) {
          a = e.stateNode;
          try {
            la(a, '');
          } catch (re) {
            je(e, e.return, re);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), Us(e, a, n !== null ? n.memoizedProps : a)),
          l & 1024 && (js = !0));
        break;
      case 6:
        if ((Dt(t, e), zt(e), l & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (re) {
            je(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((Yu = null),
          (a = sn),
          (sn = ju(t.containerInfo)),
          Dt(t, e),
          (sn = a),
          zt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ba(t.containerInfo);
          } catch (re) {
            je(e, e.return, re);
          }
        js && ((js = !1), wd(e));
        break;
      case 4:
        ((l = sn), (sn = ju(e.stateNode.containerInfo)), Dt(t, e), zt(e), (sn = l));
        break;
      case 12:
        (Dt(t, e), zt(e));
        break;
      case 31:
        (Dt(t, e),
          zt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Mu(e, l))));
        break;
      case 13:
        (Dt(t, e),
          zt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Ru = We()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Mu(e, l))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = Ln,
          W = ct;
        if (((Ln = Q || a), (ct = W || U), Dt(t, e), (ct = W), (Ln = Q), zt(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (n === null || U || Ln || ct || Xl(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                U = n = t;
                try {
                  if (((u = U.stateNode), a))
                    ((S = u.style),
                      typeof S.setProperty == 'function'
                        ? S.setProperty('display', 'none', 'important')
                        : (S.display = 'none'));
                  else {
                    C = U.stateNode;
                    var P = U.memoizedProps.style,
                      Z = P != null && P.hasOwnProperty('display') ? P.display : null;
                    C.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (re) {
                  je(U, U.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = a ? '' : U.memoizedProps;
                } catch (re) {
                  je(U, U.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                U = t;
                try {
                  var k = U.stateNode;
                  a ? Em(k, !0) : Em(U.stateNode, !1);
                } catch (re) {
                  je(U, U.return, re);
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
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Mu(e, n))));
        break;
      case 19:
        (Dt(t, e),
          zt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Mu(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Dt(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Td(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode,
              u = Hs(e);
            Tu(e, u, a);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (la(S, ''), (n.flags &= -33));
            var C = Hs(e);
            Tu(e, C, S);
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo,
              Q = Hs(e);
            Ls(e, Q, U);
            break;
          default:
            throw Error(x(161));
        }
      } catch (W) {
        je(e, e.return, W);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (wd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Rd(e, t.alternate, t), (t = t.sibling));
  }
  function Xl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fl(4, t, t.return), Xl(t));
          break;
        case 1:
          yn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Ed(t, t.return, n), Xl(t));
          break;
        case 27:
          xi(t.stateNode);
        case 26:
        case 5:
          (yn(t, t.return), Xl(t));
          break;
        case 22:
          t.memoizedState === null && Xl(t);
          break;
        case 30:
          Xl(t);
          break;
        default:
          Xl(t);
      }
      e = e.sibling;
    }
  }
  function Yn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        a = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Yn(a, u, n), oi(4, u));
          break;
        case 1:
          if ((Yn(a, u, n), (l = u), (a = l.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount();
            } catch (Q) {
              je(l, l.return, Q);
            }
          if (((l = u), (a = l.updateQueue), a !== null)) {
            var C = l.stateNode;
            try {
              var U = a.shared.hiddenCallbacks;
              if (U !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < U.length; a++) cf(U[a], C);
            } catch (Q) {
              je(l, l.return, Q);
            }
          }
          (n && S & 64 && xd(u), fi(u, u.return));
          break;
        case 27:
          Md(u);
        case 26:
        case 5:
          (Yn(a, u, n), n && l === null && S & 4 && bd(u), fi(u, u.return));
          break;
        case 12:
          Yn(a, u, n);
          break;
        case 31:
          (Yn(a, u, n), n && S & 4 && Od(a, u));
          break;
        case 13:
          (Yn(a, u, n), n && S & 4 && Dd(a, u));
          break;
        case 22:
          (u.memoizedState === null && Yn(a, u, n), fi(u, u.return));
          break;
        case 30:
          break;
        default:
          Yn(a, u, n);
      }
      t = t.sibling;
    }
  }
  function Gs(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Wa(n)));
  }
  function Ys(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Wa(e)));
  }
  function cn(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Nd(e, t, n, l), (t = t.sibling));
  }
  function Nd(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (cn(e, t, n, l), a & 2048 && oi(9, t));
        break;
      case 1:
        cn(e, t, n, l);
        break;
      case 3:
        (cn(e, t, n, l),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Wa(e))));
        break;
      case 12:
        if (a & 2048) {
          (cn(e, t, n, l), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              C = u.onPostCommit;
            typeof C == 'function' &&
              C(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (U) {
            je(t, t.return, U);
          }
        } else cn(e, t, n, l);
        break;
      case 31:
        cn(e, t, n, l);
        break;
      case 13:
        cn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? cn(e, t, n, l)
              : di(e, t)
            : u._visibility & 2
              ? cn(e, t, n, l)
              : ((u._visibility |= 2), Ta(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && Gs(S, t));
        break;
      case 24:
        (cn(e, t, n, l), a & 2048 && Ys(t.alternate, t));
        break;
      default:
        cn(e, t, n, l);
    }
  }
  function Ta(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        S = t,
        C = n,
        U = l,
        Q = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          (Ta(u, S, C, U, a), oi(8, S));
          break;
        case 23:
          break;
        case 22:
          var W = S.stateNode;
          (S.memoizedState !== null
            ? W._visibility & 2
              ? Ta(u, S, C, U, a)
              : di(u, S)
            : ((W._visibility |= 2), Ta(u, S, C, U, a)),
            a && Q & 2048 && Gs(S.alternate, S));
          break;
        case 24:
          (Ta(u, S, C, U, a), a && Q & 2048 && Ys(S.alternate, S));
          break;
        default:
          Ta(u, S, C, U, a);
      }
      t = t.sibling;
    }
  }
  function di(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          a = l.flags;
        switch (l.tag) {
          case 22:
            (di(n, l), a & 2048 && Gs(l.alternate, l));
            break;
          case 24:
            (di(n, l), a & 2048 && Ys(l.alternate, l));
            break;
          default:
            di(n, l);
        }
        t = t.sibling;
      }
  }
  var mi = 8192;
  function Ma(e, t, n) {
    if (e.subtreeFlags & mi) for (e = e.child; e !== null; ) (Bd(e, t, n), (e = e.sibling));
  }
  function Bd(e, t, n) {
    switch (e.tag) {
      case 26:
        (Ma(e, t, n),
          e.flags & mi && e.memoizedState !== null && c0(n, sn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ma(e, t, n);
        break;
      case 3:
      case 4:
        var l = sn;
        ((sn = ju(e.stateNode.containerInfo)), Ma(e, t, n), (sn = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = mi), (mi = 16777216), Ma(e, t, n), (mi = l))
            : Ma(e, t, n));
        break;
      default:
        Ma(e, t, n);
    }
  }
  function Ud(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function hi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((mt = l), Ld(l, e));
        }
      Ud(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Hd(e), (e = e.sibling));
  }
  function Hd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (hi(e), e.flags & 2048 && fl(9, e, e.return));
        break;
      case 3:
        hi(e);
        break;
      case 12:
        hi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Cu(e))
          : hi(e);
        break;
      default:
        hi(e);
    }
  }
  function Cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((mt = l), Ld(l, e));
        }
      Ud(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (fl(8, t, t.return), Cu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Cu(t)));
          break;
        default:
          Cu(t);
      }
      e = e.sibling;
    }
  }
  function Ld(e, t) {
    for (; mt !== null; ) {
      var n = mt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Wa(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (mt = l));
      else
        e: for (n = e; mt !== null; ) {
          l = mt;
          var a = l.sibling,
            u = l.return;
          if ((Ad(l), l === n)) {
            mt = null;
            break e;
          }
          if (a !== null) {
            ((a.return = u), (mt = a));
            break e;
          }
          mt = u;
        }
    }
  }
  var Mg = {
      getCacheForType: function (e) {
        var t = St(ut),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return St(ut).controller.signal;
      },
    },
    Cg = typeof WeakMap == 'function' ? WeakMap : Map,
    He = 0,
    qe = null,
    Ce = null,
    Ae = 0,
    Le = 0,
    Vt = null,
    dl = !1,
    Ca = !1,
    Vs = !1,
    Vn = 0,
    Pe = 0,
    ml = 0,
    Ql = 0,
    qs = 0,
    qt = 0,
    Ra = 0,
    vi = null,
    wt = null,
    Xs = !1,
    Ru = 0,
    jd = 0,
    Au = 1 / 0,
    _u = null,
    hl = null,
    ft = 0,
    vl = null,
    Aa = null,
    qn = 0,
    Qs = 0,
    Zs = null,
    Gd = null,
    gi = 0,
    Ks = null;
  function Xt() {
    return (He & 2) !== 0 && Ae !== 0 ? Ae & -Ae : V.T !== null ? Is() : vt();
  }
  function Yd() {
    if (qt === 0)
      if ((Ae & 536870912) === 0 || De) {
        var e = Fl;
        ((Fl <<= 1), (Fl & 3932160) === 0 && (Fl = 262144), (qt = e));
      } else qt = 536870912;
    return ((e = Gt.current), e !== null && (e.flags |= 32), qt);
  }
  function Nt(e, t, n) {
    (((e === qe && (Le === 2 || Le === 9)) || e.cancelPendingCommit !== null) &&
      (_a(e, 0), gl(e, Ae, qt, !1)),
      me(e, n),
      ((He & 2) === 0 || e !== qe) &&
        (e === qe && ((He & 2) === 0 && (Ql |= n), Pe === 4 && gl(e, Ae, qt, !1)), pn(e)));
  }
  function Vd(e, t, n) {
    if ((He & 6) !== 0) throw Error(x(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || ge(e, t),
      a = l ? _g(e, t) : ks(e, t, !0),
      u = l;
    do {
      if (a === 0) {
        Ca && !l && gl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !Rg(n))) {
          ((a = ks(e, t, !1)), (u = !1));
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
              a = vi;
              var U = C.current.memoizedState.isDehydrated;
              if ((U && (_a(C, S).flags |= 256), (S = ks(C, S, !1)), S !== 2)) {
                if (Vs && !U) {
                  ((C.errorRecoveryDisabledLanes |= u), (Ql |= u), (a = 4));
                  break e;
                }
                ((u = wt), (wt = a), u !== null && (wt === null ? (wt = u) : wt.push.apply(wt, u)));
              }
              a = S;
            }
            if (((u = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (_a(e, 0), gl(e, t, 0, !0));
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
              gl(l, t, qt, !dl);
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((t & 62914560) === t && ((a = Ru + 300 - We()), 10 < a)) {
            if ((gl(l, t, qt, !dl), le(l, 0, !0) !== 0)) break e;
            ((qn = t),
              (l.timeoutHandle = pm(
                qd.bind(null, l, n, wt, _u, Xs, t, qt, Ql, Ra, dl, u, 'Throttled', -0, 0),
                a
              )));
            break e;
          }
          qd(l, n, wt, _u, Xs, t, qt, Ql, Ra, dl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    pn(e);
  }
  function qd(e, t, n, l, a, u, S, C, U, Q, W, P, Z, k) {
    if (((e.timeoutHandle = -1), (P = t.subtreeFlags), P & 8192 || (P & 16785408) === 16785408)) {
      ((P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: An,
      }),
        Bd(t, u, P));
      var re = (u & 62914560) === u ? Ru - We() : (u & 4194048) === u ? jd - We() : 0;
      if (((re = o0(P, re)), re !== null)) {
        ((qn = u),
          (e.cancelPendingCommit = re($d.bind(null, e, t, u, n, l, a, S, C, U, W, P, null, Z, k))),
          gl(e, u, S, !Q));
        return;
      }
    }
    $d(e, t, u, n, l, a, S, C, U);
  }
  function Rg(e) {
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
            if (!Lt(u(), a)) return !1;
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
  function gl(e, t, n, l) {
    ((t &= ~qs),
      (t &= ~Ql),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - Rt(a),
        S = 1 << u;
      ((l[u] = -1), (a &= ~S));
    }
    n !== 0 && we(e, n, t);
  }
  function Ou() {
    return (He & 6) === 0 ? (yi(0), !1) : !0;
  }
  function Js() {
    if (Ce !== null) {
      if (Le === 0) var e = Ce.return;
      else ((e = Ce), (zn = Ul = null), cs(e), (pa = null), (Pa = 0), (e = Ce));
      for (; e !== null; ) (Sd(e.alternate, e), (e = e.return));
      Ce = null;
    }
  }
  function _a(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Kg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (qn = 0),
      Js(),
      (qe = e),
      (Ce = n = On(e.current, null)),
      (Ae = t),
      (Le = 0),
      (Vt = null),
      (dl = !1),
      (Ca = ge(e, t)),
      (Vs = !1),
      (Ra = qt = qs = Ql = ml = Pe = 0),
      (wt = vi = null),
      (Xs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - Rt(l),
          u = 1 << a;
        ((t |= e[a]), (l &= ~u));
      }
    return ((Vn = t), $i(), n);
  }
  function Xd(e, t) {
    ((xe = null),
      (V.H = ri),
      t === ya || t === au
        ? ((t = af()), (Le = 3))
        : t === Wr
          ? ((t = af()), (Le = 4))
          : (Le =
              t === Cs
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Vt = t),
      Ce === null && ((Pe = 1), pu(e, Ft(t, e.current))));
  }
  function Qd() {
    var e = Gt.current;
    return e === null
      ? !0
      : (Ae & 4194048) === Ae
        ? Pt === null
        : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0
          ? e === Pt
          : !1;
  }
  function Zd() {
    var e = V.H;
    return ((V.H = ri), e === null ? ri : e);
  }
  function Kd() {
    var e = V.A;
    return ((V.A = Mg), e);
  }
  function Du() {
    ((Pe = 4),
      dl || ((Ae & 4194048) !== Ae && Gt.current !== null) || (Ca = !0),
      ((ml & 134217727) === 0 && (Ql & 134217727) === 0) || qe === null || gl(qe, Ae, qt, !1));
  }
  function ks(e, t, n) {
    var l = He;
    He |= 2;
    var a = Zd(),
      u = Kd();
    ((qe !== e || Ae !== t) && ((_u = null), _a(e, t)), (t = !1));
    var S = Pe;
    e: do
      try {
        if (Le !== 0 && Ce !== null) {
          var C = Ce,
            U = Vt;
          switch (Le) {
            case 8:
              (Js(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var Q = Le;
              if (((Le = 0), (Vt = null), Oa(e, C, U, Q), n && Ca)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Le), (Le = 0), (Vt = null), Oa(e, C, U, Q));
          }
        }
        (Ag(), (S = Pe));
        break;
      } catch (W) {
        Xd(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (zn = Ul = null),
      (He = l),
      (V.H = a),
      (V.A = u),
      Ce === null && ((qe = null), (Ae = 0), $i()),
      S
    );
  }
  function Ag() {
    for (; Ce !== null; ) Jd(Ce);
  }
  function _g(e, t) {
    var n = He;
    He |= 2;
    var l = Zd(),
      a = Kd();
    qe !== e || Ae !== t ? ((_u = null), (Au = We() + 500), _a(e, t)) : (Ca = ge(e, t));
    e: do
      try {
        if (Le !== 0 && Ce !== null) {
          t = Ce;
          var u = Vt;
          t: switch (Le) {
            case 1:
              ((Le = 0), (Vt = null), Oa(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (nf(u)) {
                ((Le = 0), (Vt = null), kd(t));
                break;
              }
              ((t = function () {
                ((Le !== 2 && Le !== 9) || qe !== e || (Le = 7), pn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              nf(u) ? ((Le = 0), (Vt = null), kd(t)) : ((Le = 0), (Vt = null), Oa(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (Ce.tag) {
                case 26:
                  S = Ce.memoizedState;
                case 5:
                case 27:
                  var C = Ce;
                  if (S ? Nm(S) : C.stateNode.complete) {
                    ((Le = 0), (Vt = null));
                    var U = C.sibling;
                    if (U !== null) Ce = U;
                    else {
                      var Q = C.return;
                      Q !== null ? ((Ce = Q), zu(Q)) : (Ce = null);
                    }
                    break t;
                  }
              }
              ((Le = 0), (Vt = null), Oa(e, t, u, 5));
              break;
            case 6:
              ((Le = 0), (Vt = null), Oa(e, t, u, 6));
              break;
            case 8:
              (Js(), (Pe = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        Og();
        break;
      } catch (W) {
        Xd(e, W);
      }
    while (!0);
    return (
      (zn = Ul = null),
      (V.H = l),
      (V.A = a),
      (He = n),
      Ce !== null ? 0 : ((qe = null), (Ae = 0), $i(), Pe)
    );
  }
  function Og() {
    for (; Ce !== null && !Xe(); ) Jd(Ce);
  }
  function Jd(e) {
    var t = yd(e.alternate, e, Vn);
    ((e.memoizedProps = e.pendingProps), t === null ? zu(e) : (Ce = t));
  }
  function kd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fd(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = fd(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        cs(t);
      default:
        (Sd(n, t), (t = Ce = Zo(t, Vn)), (t = yd(n, t, Vn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? zu(e) : (Ce = t));
  }
  function Oa(e, t, n, l) {
    ((zn = Ul = null), cs(t), (pa = null), (Pa = 0));
    var a = t.return;
    try {
      if (yg(e, a, t, n, Ae)) {
        ((Pe = 1), pu(e, Ft(n, e.current)), (Ce = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((Ce = a), u);
      ((Pe = 1), pu(e, Ft(n, e.current)), (Ce = null));
      return;
    }
    t.flags & 32768
      ? (De || l === 1
          ? (e = !0)
          : Ca || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((dl = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Gt.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Fd(t, e))
      : zu(t);
  }
  function zu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fd(t, dl);
        return;
      }
      e = t.return;
      var n = xg(t.alternate, t, Vn);
      if (n !== null) {
        Ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Fd(e, t) {
    do {
      var n = Eg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Ce = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ce = e;
        return;
      }
      Ce = e = n;
    } while (e !== null);
    ((Pe = 6), (Ce = null));
  }
  function $d(e, t, n, l, a, u, S, C, U) {
    e.cancelPendingCommit = null;
    do wu();
    while (ft !== 0);
    if ((He & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Hr),
        ze(e, n, u, S, C, U),
        e === qe && ((Ce = qe = null), (Ae = 0)),
        (Aa = t),
        (vl = e),
        (qn = n),
        (Qs = u),
        (Zs = a),
        (Gd = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ng(Zt, function () {
              return (tm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = V.T), (V.T = null), (a = K.p), (K.p = 2), (S = He), (He |= 4));
        try {
          bg(e, t, n);
        } finally {
          ((He = S), (K.p = a), (V.T = l));
        }
      }
      ((ft = 1), Wd(), Id(), Pd());
    }
  }
  function Wd() {
    if (ft === 1) {
      ft = 0;
      var e = vl,
        t = Aa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = He;
        He |= 4;
        try {
          zd(t, e);
          var u = uc,
            S = Ho(e.containerInfo),
            C = u.focusedElem,
            U = u.selectionRange;
          if (S !== C && C && C.ownerDocument && Uo(C.ownerDocument.documentElement, C)) {
            if (U !== null && zr(C)) {
              var Q = U.start,
                W = U.end;
              if ((W === void 0 && (W = Q), 'selectionStart' in C))
                ((C.selectionStart = Q), (C.selectionEnd = Math.min(W, C.value.length)));
              else {
                var P = C.ownerDocument || document,
                  Z = (P && P.defaultView) || window;
                if (Z.getSelection) {
                  var k = Z.getSelection(),
                    re = C.textContent.length,
                    ve = Math.min(U.start, re),
                    Ve = U.end === void 0 ? ve : Math.min(U.end, re);
                  !k.extend && ve > Ve && ((S = Ve), (Ve = ve), (ve = S));
                  var q = Bo(C, ve),
                    Y = Bo(C, Ve);
                  if (
                    q &&
                    Y &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== q.node ||
                      k.anchorOffset !== q.offset ||
                      k.focusNode !== Y.node ||
                      k.focusOffset !== Y.offset)
                  ) {
                    var X = P.createRange();
                    (X.setStart(q.node, q.offset),
                      k.removeAllRanges(),
                      ve > Ve
                        ? (k.addRange(X), k.extend(Y.node, Y.offset))
                        : (X.setEnd(Y.node, Y.offset), k.addRange(X)));
                  }
                }
              }
            }
            for (P = [], k = C; (k = k.parentNode); )
              k.nodeType === 1 && P.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (typeof C.focus == 'function' && C.focus(), C = 0; C < P.length; C++) {
              var I = P[C];
              ((I.element.scrollLeft = I.left), (I.element.scrollTop = I.top));
            }
          }
          ((Qu = !!ic), (uc = ic = null));
        } finally {
          ((He = a), (K.p = l), (V.T = n));
        }
      }
      ((e.current = t), (ft = 2));
    }
  }
  function Id() {
    if (ft === 2) {
      ft = 0;
      var e = vl,
        t = Aa,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = He;
        He |= 4;
        try {
          Rd(e, t.alternate, t);
        } finally {
          ((He = a), (K.p = l), (V.T = n));
        }
      }
      ft = 3;
    }
  }
  function Pd() {
    if (ft === 4 || ft === 3) {
      ((ft = 0), Jl());
      var e = vl,
        t = Aa,
        n = qn,
        l = Gd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ft = 5)
        : ((ft = 0), (Aa = vl = null), em(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (hl = null),
        ot(n),
        (t = t.stateNode),
        Ct && typeof Ct.onCommitFiberRoot == 'function')
      )
        try {
          Ct.onCommitFiberRoot(Al, t, void 0, (t.current.flags & 128) === 128);
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
      ((qn & 3) !== 0 && wu(),
        pn(e),
        (a = e.pendingLanes),
        (n & 261930) !== 0 && (a & 42) !== 0 ? (e === Ks ? gi++ : ((gi = 0), (Ks = e))) : (gi = 0),
        yi(0));
    }
  }
  function em(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Wa(t)));
  }
  function wu() {
    return (Wd(), Id(), Pd(), tm());
  }
  function tm() {
    if (ft !== 5) return !1;
    var e = vl,
      t = Qs;
    Qs = 0;
    var n = ot(qn),
      l = V.T,
      a = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (V.T = null), (n = Zs), (Zs = null));
      var u = vl,
        S = qn;
      if (((ft = 0), (Aa = vl = null), (qn = 0), (He & 6) !== 0)) throw Error(x(331));
      var C = He;
      if (
        ((He |= 4),
        Hd(u.current),
        Nd(u, u.current, S, n),
        (He = C),
        yi(0, !1),
        Ct && typeof Ct.onPostCommitFiberRoot == 'function')
      )
        try {
          Ct.onPostCommitFiberRoot(Al, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = a), (V.T = l), em(e, t));
    }
  }
  function nm(e, t, n) {
    ((t = Ft(n, t)),
      (t = Ms(e.stateNode, t, 2)),
      (e = sl(e, t, 2)),
      e !== null && (me(e, 2), pn(e)));
  }
  function je(e, t, n) {
    if (e.tag === 3) nm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          nm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (hl === null || !hl.has(l)))
          ) {
            ((e = Ft(n, e)),
              (n = ld(2)),
              (l = sl(t, n, 2)),
              l !== null && (ad(n, l, t, e), me(l, 2), pn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Fs(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Cg();
      var a = new Set();
      l.set(t, a);
    } else ((a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a)));
    a.has(n) || ((Vs = !0), a.add(n), (e = Dg.bind(null, e, t, n)), t.then(e, e));
  }
  function Dg(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      qe === e &&
        (Ae & n) === n &&
        (Pe === 4 || (Pe === 3 && (Ae & 62914560) === Ae && 300 > We() - Ru)
          ? (He & 2) === 0 && _a(e, 0)
          : (qs |= n),
        Ra === Ae && (Ra = 0)),
      pn(e));
  }
  function lm(e, t) {
    (t === 0 && (t = pe()), (e = wl(e, t)), e !== null && (me(e, t), pn(e)));
  }
  function zg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), lm(e, n));
  }
  function wg(e, t) {
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
    (l !== null && l.delete(t), lm(e, n));
  }
  function Ng(e, t) {
    return Ut(e, t);
  }
  var Nu = null,
    Da = null,
    $s = !1,
    Bu = !1,
    Ws = !1,
    yl = 0;
  function pn(e) {
    (e !== Da && e.next === null && (Da === null ? (Nu = Da = e) : (Da = Da.next = e)),
      (Bu = !0),
      $s || (($s = !0), Ug()));
  }
  function yi(e, t) {
    if (!Ws && Bu) {
      Ws = !0;
      do
        for (var n = !1, l = Nu; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var S = l.suspendedLanes,
                C = l.pingedLanes;
              ((u = (1 << (31 - Rt(42 | e) + 1)) - 1),
                (u &= a & ~(S & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), rm(l, u));
          } else
            ((u = Ae),
              (u = le(
                l,
                l === qe ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || ge(l, u) || ((n = !0), rm(l, u)));
          l = l.next;
        }
      while (n);
      Ws = !1;
    }
  }
  function Bg() {
    am();
  }
  function am() {
    Bu = $s = !1;
    var e = 0;
    yl !== 0 && Zg() && (e = yl);
    for (var t = We(), n = null, l = Nu; l !== null; ) {
      var a = l.next,
        u = im(l, t);
      (u === 0
        ? ((l.next = null), n === null ? (Nu = a) : (n.next = a), a === null && (Da = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (Bu = !0)),
        (l = a));
    }
    ((ft !== 0 && ft !== 5) || yi(e), yl !== 0 && (yl = 0));
  }
  function im(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - Rt(u),
        C = 1 << S,
        U = a[S];
      (U === -1
        ? ((C & n) === 0 || (C & l) !== 0) && (a[S] = Oe(C, t))
        : U <= t && (e.expiredLanes |= C),
        (u &= ~C));
    }
    if (
      ((t = qe),
      (n = Ae),
      (n = le(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      n === 0 || (e === t && (Le === 2 || Le === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && ht(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || ge(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && ht(l), ot(n))) {
        case 2:
        case 8:
          n = Ht;
          break;
        case 32:
          n = Zt;
          break;
        case 268435456:
          n = dn;
          break;
        default:
          n = Zt;
      }
      return (
        (l = um.bind(null, e)),
        (n = Ut(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && ht(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function um(e, t) {
    if (ft !== 0 && ft !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (wu() && e.callbackNode !== n) return null;
    var l = Ae;
    return (
      (l = le(e, e === qe ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Vd(e, l, t),
          im(e, We()),
          e.callbackNode != null && e.callbackNode === n ? um.bind(null, e) : null)
    );
  }
  function rm(e, t) {
    if (wu()) return null;
    Vd(e, t, !0);
  }
  function Ug() {
    Jg(function () {
      (He & 6) !== 0 ? Ut(bn, Bg) : am();
    });
  }
  function Is() {
    if (yl === 0) {
      var e = va;
      (e === 0 && ((e = kl), (kl <<= 1), (kl & 261888) === 0 && (kl = 256)), (yl = e));
    }
    return yl;
  }
  function sm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : qi('' + e);
  }
  function cm(e, t) {
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
  function Hg(e, t, n, l, a) {
    if (t === 'submit' && n && n.stateNode === a) {
      var u = sm((a[yt] || null).action),
        S = l.submitter;
      S &&
        ((t = (t = S[yt] || null) ? sm(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var C = new Ki('action', 'action', null, l, a);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (yl !== 0) {
                  var U = S ? cm(a, S) : new FormData(a);
                  ps(n, { pending: !0, data: U, method: a.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (C.preventDefault(),
                  (U = S ? cm(a, S) : new FormData(a)),
                  ps(n, { pending: !0, data: U, method: a.method, action: u }, u, U));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Ps = 0; Ps < Ur.length; Ps++) {
    var ec = Ur[Ps],
      Lg = ec.toLowerCase(),
      jg = ec[0].toUpperCase() + ec.slice(1);
    rn(Lg, 'on' + jg);
  }
  (rn(Go, 'onAnimationEnd'),
    rn(Yo, 'onAnimationIteration'),
    rn(Vo, 'onAnimationStart'),
    rn('dblclick', 'onDoubleClick'),
    rn('focusin', 'onFocus'),
    rn('focusout', 'onBlur'),
    rn(eg, 'onTransitionRun'),
    rn(tg, 'onTransitionStart'),
    rn(ng, 'onTransitionCancel'),
    rn(qo, 'onTransitionEnd'),
    ta('onMouseEnter', ['mouseout', 'mouseover']),
    ta('onMouseLeave', ['mouseout', 'mouseover']),
    ta('onPointerEnter', ['pointerout', 'pointerover']),
    ta('onPointerLeave', ['pointerout', 'pointerover']),
    _l('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    _l(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    _l('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    _l('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    _l(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    _l(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var pi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Gg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(pi)
    );
  function om(e, t) {
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
              U = C.instance,
              Q = C.currentTarget;
            if (((C = C.listener), U !== u && a.isPropagationStopped())) break e;
            ((u = C), (a.currentTarget = Q));
            try {
              u(a);
            } catch (W) {
              Fi(W);
            }
            ((a.currentTarget = null), (u = U));
          }
        else
          for (S = 0; S < l.length; S++) {
            if (
              ((C = l[S]),
              (U = C.instance),
              (Q = C.currentTarget),
              (C = C.listener),
              U !== u && a.isPropagationStopped())
            )
              break e;
            ((u = C), (a.currentTarget = Q));
            try {
              u(a);
            } catch (W) {
              Fi(W);
            }
            ((a.currentTarget = null), (u = U));
          }
      }
    }
  }
  function Re(e, t) {
    var n = t[Wl];
    n === void 0 && (n = t[Wl] = new Set());
    var l = e + '__bubble';
    n.has(l) || (fm(t, e, 2, !1), n.add(l));
  }
  function tc(e, t, n) {
    var l = 0;
    (t && (l |= 4), fm(n, e, l, t));
  }
  var Uu = '_reactListening' + Math.random().toString(36).slice(2);
  function nc(e) {
    if (!e[Uu]) {
      ((e[Uu] = !0),
        no.forEach(function (n) {
          n !== 'selectionchange' && (Gg.has(n) || tc(n, !1, e), tc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Uu] || ((t[Uu] = !0), tc('selectionchange', !1, t));
    }
  }
  function fm(e, t, n, l) {
    switch (Ym(t)) {
      case 2:
        var a = m0;
        break;
      case 8:
        a = h0;
        break;
      default:
        a = yc;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !br || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : a !== void 0
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function lc(e, t, n, l, a) {
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
              var U = S.tag;
              if ((U === 3 || U === 4) && S.stateNode.containerInfo === a) return;
              S = S.return;
            }
          for (; C !== null; ) {
            if (((S = Il(C)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              l = u = S;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    vo(function () {
      var Q = u,
        W = xr(n),
        P = [];
      e: {
        var Z = Xo.get(e);
        if (Z !== void 0) {
          var k = Ki,
            re = e;
          switch (e) {
            case 'keypress':
              if (Qi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = wv;
              break;
            case 'focusin':
              ((re = 'focus'), (k = Rr));
              break;
            case 'focusout':
              ((re = 'blur'), (k = Rr));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = Rr;
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
              k = po;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = xv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = Uv;
              break;
            case Go:
            case Yo:
            case Vo:
              k = Tv;
              break;
            case qo:
              k = Lv;
              break;
            case 'scroll':
            case 'scrollend':
              k = pv;
              break;
            case 'wheel':
              k = Gv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = Cv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = xo;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = Vv;
          }
          var ve = (t & 4) !== 0,
            Ve = !ve && (e === 'scroll' || e === 'scrollend'),
            q = ve ? (Z !== null ? Z + 'Capture' : null) : Z;
          ve = [];
          for (var Y = Q, X; Y !== null; ) {
            var I = Y;
            if (
              ((X = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                X === null ||
                q === null ||
                ((I = Ya(Y, q)), I != null && ve.push(Si(Y, I, X))),
              Ve)
            )
              break;
            Y = Y.return;
          }
          0 < ve.length && ((Z = new k(Z, re, null, n, W)), P.push({ event: Z, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            Z && n !== Sr && (re = n.relatedTarget || n.fromElement) && (Il(re) || re[hn]))
          )
            break e;
          if (
            (k || Z) &&
            ((Z =
              W.window === W
                ? W
                : (Z = W.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            k
              ? ((re = n.relatedTarget || n.toElement),
                (k = Q),
                (re = re ? Il(re) : null),
                re !== null &&
                  ((Ve = i(re)), (ve = re.tag), re !== Ve || (ve !== 5 && ve !== 27 && ve !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((ve = po),
              (I = 'onMouseLeave'),
              (q = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ve = xo), (I = 'onPointerLeave'), (q = 'onPointerEnter'), (Y = 'pointer')),
              (Ve = k == null ? Z : Ga(k)),
              (X = re == null ? Z : Ga(re)),
              (Z = new ve(I, Y + 'leave', k, n, W)),
              (Z.target = Ve),
              (Z.relatedTarget = X),
              (I = null),
              Il(W) === Q &&
                ((ve = new ve(q, Y + 'enter', re, n, W)),
                (ve.target = X),
                (ve.relatedTarget = Ve),
                (I = ve)),
              (Ve = I),
              k && re)
            )
              t: {
                for (ve = Yg, q = k, Y = re, X = 0, I = q; I; I = ve(I)) X++;
                I = 0;
                for (var fe = Y; fe; fe = ve(fe)) I++;
                for (; 0 < X - I; ) ((q = ve(q)), X--);
                for (; 0 < I - X; ) ((Y = ve(Y)), I--);
                for (; X--; ) {
                  if (q === Y || (Y !== null && q === Y.alternate)) {
                    ve = q;
                    break t;
                  }
                  ((q = ve(q)), (Y = ve(Y)));
                }
                ve = null;
              }
            else ve = null;
            (k !== null && dm(P, Z, k, ve, !1),
              re !== null && Ve !== null && dm(P, Ve, re, ve, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Ga(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var Ne = _o;
          else if (Ro(Z))
            if (Oo) Ne = Wv;
            else {
              Ne = Fv;
              var ce = kv;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && pr(Q.elementType) && (Ne = _o)
                : (Ne = $v));
          if (Ne && (Ne = Ne(e, Q))) {
            Ao(P, Ne, n, W);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              yr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Ga(Q) : window), e)) {
          case 'focusin':
            (Ro(ce) || ce.contentEditable === 'true') && ((ra = ce), (wr = Q), (ka = null));
            break;
          case 'focusout':
            ka = wr = ra = null;
            break;
          case 'mousedown':
            Nr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Nr = !1), Lo(P, n, W));
            break;
          case 'selectionchange':
            if (Pv) break;
          case 'keydown':
          case 'keyup':
            Lo(P, n, W);
        }
        var Ee;
        if (_r)
          e: {
            switch (e) {
              case 'compositionstart':
                var _e = 'onCompositionStart';
                break e;
              case 'compositionend':
                _e = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                _e = 'onCompositionUpdate';
                break e;
            }
            _e = void 0;
          }
        else
          ua
            ? Mo(e, n) && (_e = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (_e = 'onCompositionStart');
        (_e &&
          (Eo &&
            n.locale !== 'ko' &&
            (ua || _e !== 'onCompositionStart'
              ? _e === 'onCompositionEnd' && ua && (Ee = go())
              : ((tl = W), (Tr = 'value' in tl ? tl.value : tl.textContent), (ua = !0))),
          (ce = Hu(Q, _e)),
          0 < ce.length &&
            ((_e = new So(_e, e, null, n, W)),
            P.push({ event: _e, listeners: ce }),
            Ee ? (_e.data = Ee) : ((Ee = Co(n)), Ee !== null && (_e.data = Ee)))),
          (Ee = Xv ? Qv(e, n) : Zv(e, n)) &&
            ((_e = Hu(Q, 'onBeforeInput')),
            0 < _e.length &&
              ((ce = new So('onBeforeInput', 'beforeinput', null, n, W)),
              P.push({ event: ce, listeners: _e }),
              (ce.data = Ee))),
          Hg(P, e, Q, n, W));
      }
      om(P, t);
    });
  }
  function Si(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = Ya(e, n)),
          a != null && l.unshift(Si(e, a, u)),
          (a = Ya(e, t)),
          a != null && l.push(Si(e, a, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Yg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function dm(e, t, n, l, a) {
    for (var u = t._reactName, S = []; n !== null && n !== l; ) {
      var C = n,
        U = C.alternate,
        Q = C.stateNode;
      if (((C = C.tag), U !== null && U === l)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        Q === null ||
        ((U = Q),
        a
          ? ((Q = Ya(n, u)), Q != null && S.unshift(Si(n, Q, U)))
          : a || ((Q = Ya(n, u)), Q != null && S.push(Si(n, Q, U)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var Vg = /\r\n?/g,
    qg = /\u0000|\uFFFD/g;
  function mm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Vg,
        `
`
      )
      .replace(qg, '');
  }
  function hm(e, t) {
    return ((t = mm(t)), mm(e) === t);
  }
  function Ye(e, t, n, l, a, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || la(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && la(e, '' + l);
        break;
      case 'className':
        Yi(e, 'class', l);
        break;
      case 'tabIndex':
        Yi(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Yi(e, n, l);
        break;
      case 'style':
        mo(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          Yi(e, 'data', l);
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
        ((l = qi('' + l)), e.setAttribute(n, l));
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
              ? (t !== 'input' && Ye(e, t, 'name', a.name, a, null),
                Ye(e, t, 'formEncType', a.formEncType, a, null),
                Ye(e, t, 'formMethod', a.formMethod, a, null),
                Ye(e, t, 'formTarget', a.formTarget, a, null))
              : (Ye(e, t, 'encType', a.encType, a, null),
                Ye(e, t, 'method', a.method, a, null),
                Ye(e, t, 'target', a.target, a, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = qi('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = An);
        break;
      case 'onScroll':
        l != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Re('scrollend', e);
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
        ((n = qi('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Re('beforetoggle', e), Re('toggle', e), Gi(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Rn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Rn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Rn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Rn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Gi(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = gv.get(n) || n), Gi(e, n, l));
    }
  }
  function ac(e, t, n, l, a, u) {
    switch (n) {
      case 'style':
        mo(e, l, u);
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
          ? la(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && la(e, '' + l);
        break;
      case 'onScroll':
        l != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Re('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = An);
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
        if (!lo.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((a = n.endsWith('Capture')),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              (u = e[yt] || null),
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
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : Gi(e, n, l);
          }
    }
  }
  function Et(e, t, n) {
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
        (Re('error', e), Re('load', e));
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
                  Ye(e, t, u, S, n, null);
              }
          }
        (a && Ye(e, t, 'srcSet', n.srcSet, n, null), l && Ye(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Re('invalid', e);
        var C = (u = S = a = null),
          U = null,
          Q = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var W = n[l];
            if (W != null)
              switch (l) {
                case 'name':
                  a = W;
                  break;
                case 'type':
                  S = W;
                  break;
                case 'checked':
                  U = W;
                  break;
                case 'defaultChecked':
                  Q = W;
                  break;
                case 'value':
                  u = W;
                  break;
                case 'defaultValue':
                  C = W;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (W != null) throw Error(x(137, t));
                  break;
                default:
                  Ye(e, t, l, W, n, null);
              }
          }
        so(e, u, C, U, Q, S, a, !1);
        return;
      case 'select':
        (Re('invalid', e), (l = S = u = null));
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
                Ye(e, t, a, C, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!l),
          t != null ? na(e, !!l, t, !1) : n != null && na(e, !!l, n, !0));
        return;
      case 'textarea':
        (Re('invalid', e), (u = a = l = null));
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
                Ye(e, t, S, C, n, null);
            }
        oo(e, l, a, u);
        return;
      case 'option':
        for (U in n)
          if (n.hasOwnProperty(U) && ((l = n[U]), l != null))
            switch (U) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ye(e, t, U, l, n, null);
            }
        return;
      case 'dialog':
        (Re('beforetoggle', e), Re('toggle', e), Re('cancel', e), Re('close', e));
        break;
      case 'iframe':
      case 'object':
        Re('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < pi.length; l++) Re(pi[l], e);
        break;
      case 'image':
        (Re('error', e), Re('load', e));
        break;
      case 'details':
        Re('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Re('error', e), Re('load', e));
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
                Ye(e, t, Q, l, n, null);
            }
        return;
      default:
        if (pr(t)) {
          for (W in n)
            n.hasOwnProperty(W) && ((l = n[W]), l !== void 0 && ac(e, t, W, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && Ye(e, t, C, l, n, null));
  }
  function Xg(e, t, n, l) {
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
          U = null,
          Q = null,
          W = null;
        for (k in n) {
          var P = n[k];
          if (n.hasOwnProperty(k) && P != null)
            switch (k) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                U = P;
              default:
                l.hasOwnProperty(k) || Ye(e, t, k, null, l, P);
            }
        }
        for (var Z in l) {
          var k = l[Z];
          if (((P = n[Z]), l.hasOwnProperty(Z) && (k != null || P != null)))
            switch (Z) {
              case 'type':
                u = k;
                break;
              case 'name':
                a = k;
                break;
              case 'checked':
                Q = k;
                break;
              case 'defaultChecked':
                W = k;
                break;
              case 'value':
                S = k;
                break;
              case 'defaultValue':
                C = k;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (k != null) throw Error(x(137, t));
                break;
              default:
                k !== P && Ye(e, t, Z, k, l, P);
            }
        }
        gr(e, S, C, U, Q, W, u, a);
        return;
      case 'select':
        k = S = C = Z = null;
        for (u in n)
          if (((U = n[u]), n.hasOwnProperty(u) && U != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                k = U;
              default:
                l.hasOwnProperty(u) || Ye(e, t, u, null, l, U);
            }
        for (a in l)
          if (((u = l[a]), (U = n[a]), l.hasOwnProperty(a) && (u != null || U != null)))
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
                u !== U && Ye(e, t, a, u, l, U);
            }
        ((t = C),
          (n = S),
          (l = k),
          Z != null
            ? na(e, !!n, Z, !1)
            : !!l != !!n && (t != null ? na(e, !!n, t, !0) : na(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        k = Z = null;
        for (C in n)
          if (((a = n[C]), n.hasOwnProperty(C) && a != null && !l.hasOwnProperty(C)))
            switch (C) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ye(e, t, C, null, l, a);
            }
        for (S in l)
          if (((a = l[S]), (u = n[S]), l.hasOwnProperty(S) && (a != null || u != null)))
            switch (S) {
              case 'value':
                Z = a;
                break;
              case 'defaultValue':
                k = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(x(91));
                break;
              default:
                a !== u && Ye(e, t, S, a, l, u);
            }
        co(e, Z, k);
        return;
      case 'option':
        for (var re in n)
          if (((Z = n[re]), n.hasOwnProperty(re) && Z != null && !l.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ye(e, t, re, null, l, Z);
            }
        for (U in l)
          if (((Z = l[U]), (k = n[U]), l.hasOwnProperty(U) && Z !== k && (Z != null || k != null)))
            switch (U) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                Ye(e, t, U, Z, l, k);
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
        for (var ve in n)
          ((Z = n[ve]),
            n.hasOwnProperty(ve) && Z != null && !l.hasOwnProperty(ve) && Ye(e, t, ve, null, l, Z));
        for (Q in l)
          if (((Z = l[Q]), (k = n[Q]), l.hasOwnProperty(Q) && Z !== k && (Z != null || k != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                Ye(e, t, Q, Z, l, k);
            }
        return;
      default:
        if (pr(t)) {
          for (var Ve in n)
            ((Z = n[Ve]),
              n.hasOwnProperty(Ve) &&
                Z !== void 0 &&
                !l.hasOwnProperty(Ve) &&
                ac(e, t, Ve, void 0, l, Z));
          for (W in l)
            ((Z = l[W]),
              (k = n[W]),
              !l.hasOwnProperty(W) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                ac(e, t, W, Z, l, k));
          return;
        }
    }
    for (var q in n)
      ((Z = n[q]),
        n.hasOwnProperty(q) && Z != null && !l.hasOwnProperty(q) && Ye(e, t, q, null, l, Z));
    for (P in l)
      ((Z = l[P]),
        (k = n[P]),
        !l.hasOwnProperty(P) || Z === k || (Z == null && k == null) || Ye(e, t, P, Z, l, k));
  }
  function vm(e) {
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
  function Qg() {
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
        if (u && C && vm(S)) {
          for (S = 0, C = a.responseEnd, l += 1; l < n.length; l++) {
            var U = n[l],
              Q = U.startTime;
            if (Q > C) break;
            var W = U.transferSize,
              P = U.initiatorType;
            W && vm(P) && ((U = U.responseEnd), (S += W * (U < C ? 1 : (C - Q) / (U - Q))));
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
  var ic = null,
    uc = null;
  function Lu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function gm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function ym(e, t) {
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
  function rc(e, t) {
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
  var sc = null;
  function Zg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === sc ? !1 : ((sc = e), !0)) : ((sc = null), !1);
  }
  var pm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Kg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Sm = typeof Promise == 'function' ? Promise : void 0,
    Jg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Sm < 'u'
          ? function (e) {
              return Sm.resolve(null).then(e).catch(kg);
            }
          : pm;
  function kg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function pl(e) {
    return e === 'head';
  }
  function xm(e, t) {
    var n = t,
      l = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(a), Ba(t));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') xi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), xi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              C = u.nodeName;
            (u[ja] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && xi(e.ownerDocument.body);
      n = a;
    } while (n);
    Ba(t);
  }
  function Em(e, t) {
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
  function cc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (cc(n), hr(n));
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
  function Fg(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[ja])
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
      if (((e = en(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function $g(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = en(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function bm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = en(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function oc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function fc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function Wg(e, t) {
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
  function en(e) {
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
  var dc = null;
  function Tm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return en(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mm(e) {
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
  function Cm(e, t, n) {
    switch (((t = Lu(n)), e)) {
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
  function xi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    hr(e);
  }
  var tn = new Map(),
    Rm = new Set();
  function ju(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Xn = K.d;
  K.d = { f: Ig, r: Pg, D: e0, C: t0, L: n0, m: l0, X: i0, S: a0, M: u0 };
  function Ig() {
    var e = Xn.f(),
      t = Ou();
    return e || t;
  }
  function Pg(e) {
    var t = Pl(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Xf(t) : Xn.r(e);
  }
  var za = typeof document > 'u' ? null : document;
  function Am(e, t, n) {
    var l = za;
    if (l && typeof t == 'string' && t) {
      var a = Jt(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof n == 'string' && (a += '[crossorigin="' + n + '"]'),
        Rm.has(a) ||
          (Rm.add(a),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(a) === null &&
            ((t = l.createElement('link')), Et(t, 'link', e), dt(t), l.head.appendChild(t))));
    }
  }
  function e0(e) {
    (Xn.D(e), Am('dns-prefetch', e, null));
  }
  function t0(e, t) {
    (Xn.C(e, t), Am('preconnect', e, t));
  }
  function n0(e, t, n) {
    Xn.L(e, t, n);
    var l = za;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((a += '[imagesrcset="' + Jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (a += '[imagesizes="' + Jt(n.imageSizes) + '"]'))
        : (a += '[href="' + Jt(e) + '"]');
      var u = a;
      switch (t) {
        case 'style':
          u = wa(e);
          break;
        case 'script':
          u = Na(e);
      }
      tn.has(u) ||
        ((e = p(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        tn.set(u, e),
        l.querySelector(a) !== null ||
          (t === 'style' && l.querySelector(Ei(u))) ||
          (t === 'script' && l.querySelector(bi(u))) ||
          ((t = l.createElement('link')), Et(t, 'link', e), dt(t), l.head.appendChild(t)));
    }
  }
  function l0(e, t) {
    Xn.m(e, t);
    var n = za;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        a = 'link[rel="modulepreload"][as="' + Jt(l) + '"][href="' + Jt(e) + '"]',
        u = a;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Na(e);
      }
      if (
        !tn.has(u) &&
        ((e = p({ rel: 'modulepreload', href: e }, t)), tn.set(u, e), n.querySelector(a) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(bi(u))) return;
        }
        ((l = n.createElement('link')), Et(l, 'link', e), dt(l), n.head.appendChild(l));
      }
    }
  }
  function a0(e, t, n) {
    Xn.S(e, t, n);
    var l = za;
    if (l && e) {
      var a = ea(l).hoistableStyles,
        u = wa(e);
      t = t || 'default';
      var S = a.get(u);
      if (!S) {
        var C = { loading: 0, preload: null };
        if ((S = l.querySelector(Ei(u)))) C.loading = 5;
        else {
          ((e = p({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = tn.get(u)) && mc(e, n));
          var U = (S = l.createElement('link'));
          (dt(U),
            Et(U, 'link', e),
            (U._p = new Promise(function (Q, W) {
              ((U.onload = Q), (U.onerror = W));
            })),
            U.addEventListener('load', function () {
              C.loading |= 1;
            }),
            U.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            Gu(S, t, l));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: C }), a.set(u, S));
      }
    }
  }
  function i0(e, t) {
    Xn.X(e, t);
    var n = za;
    if (n && e) {
      var l = ea(n).hoistableScripts,
        a = Na(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(bi(a))),
        u ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = tn.get(a)) && hc(e, t),
          (u = n.createElement('script')),
          dt(u),
          Et(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function u0(e, t) {
    Xn.M(e, t);
    var n = za;
    if (n && e) {
      var l = ea(n).hoistableScripts,
        a = Na(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(bi(a))),
        u ||
          ((e = p({ src: e, async: !0, type: 'module' }, t)),
          (t = tn.get(a)) && hc(e, t),
          (u = n.createElement('script')),
          dt(u),
          Et(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function _m(e, t, n, l) {
    var a = (a = ue.current) ? ju(a) : null;
    if (!a) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = wa(n.href)),
            (n = ea(a).hoistableStyles),
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
          e = wa(n.href);
          var u = ea(a).hoistableStyles,
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
              (u = a.querySelector(Ei(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
              tn.has(e) ||
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
                tn.set(e, n),
                u || r0(a, e, n, S.state))),
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
            ? ((t = Na(n)),
              (n = ea(a).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function wa(e) {
    return 'href="' + Jt(e) + '"';
  }
  function Ei(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Om(e) {
    return p({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function r0(e, t, n, l) {
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
        Et(t, 'link', n),
        dt(t),
        e.head.appendChild(t));
  }
  function Na(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function bi(e) {
    return 'script[async]' + e;
  }
  function Dm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Jt(n.href) + '"]');
          if (l) return ((t.instance = l), dt(l), l);
          var a = p({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            dt(l),
            Et(l, 'style', a),
            Gu(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          a = wa(n.href);
          var u = e.querySelector(Ei(a));
          if (u) return ((t.state.loading |= 4), (t.instance = u), dt(u), u);
          ((l = Om(n)),
            (a = tn.get(a)) && mc(l, a),
            (u = (e.ownerDocument || e).createElement('link')),
            dt(u));
          var S = u;
          return (
            (S._p = new Promise(function (C, U) {
              ((S.onload = C), (S.onerror = U));
            })),
            Et(u, 'link', l),
            (t.state.loading |= 4),
            Gu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Na(n.src)),
            (a = e.querySelector(bi(u)))
              ? ((t.instance = a), dt(a), a)
              : ((l = n),
                (a = tn.get(u)) && ((l = p({}, n)), hc(l, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                dt(a),
                Et(a, 'link', l),
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
        ((l = t.instance), (t.state.loading |= 4), Gu(l, n.precedence, e));
    return t.instance;
  }
  function Gu(e, t, n) {
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
  function mc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function hc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Yu = null;
  function zm(e, t, n) {
    if (Yu === null) {
      var l = new Map(),
        a = (Yu = new Map());
      a.set(n, l);
    } else ((a = Yu), (l = a.get(n)), l || ((l = new Map()), a.set(n, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (
        !(u[ja] || u[it] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function wm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function s0(e, t, n) {
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
  function Nm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function c0(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var a = wa(l.href),
          u = t.querySelector(Ei(a));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Vu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            dt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (l = Om(l)),
          (a = tn.get(a)) && mc(l, a),
          (u = u.createElement('link')),
          dt(u));
        var S = u;
        ((S._p = new Promise(function (C, U) {
          ((S.onload = C), (S.onerror = U));
        })),
          Et(u, 'link', l),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Vu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var vc = 0;
  function o0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Xu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Xu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && vc === 0 && (vc = 62500 * Qg());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > vc ? 50 : 800) + t
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
  function Vu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Xu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var qu = null;
  function Xu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (qu = new Map()), t.forEach(f0, e), (qu = null), Vu.call(e)));
  }
  function f0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = qu.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), qu.set(e, n));
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
        (l = Vu.bind(this)),
        a.addEventListener('load', l),
        a.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ti = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function d0(e, t, n, l, a, u, S, C, U) {
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
      (this.expirationTimes = de(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = de(0)),
      (this.hiddenUpdates = de(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function Bm(e, t, n, l, a, u, S, C, U, Q, W, P) {
    return (
      (e = new d0(e, t, n, S, U, Q, W, P, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = jt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = kr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Ir(u),
      e
    );
  }
  function Um(e) {
    return e ? ((e = oa), e) : oa;
  }
  function Hm(e, t, n, l, a, u) {
    ((a = Um(a)),
      l.context === null ? (l.context = a) : (l.pendingContext = a),
      (l = rl(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = sl(e, l, t)),
      n !== null && (Nt(n, e, t), ti(n, e, t)));
  }
  function Lm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gc(e, t) {
    (Lm(e, t), (e = e.alternate) && Lm(e, t));
  }
  function jm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = wl(e, 67108864);
      (t !== null && Nt(t, e, 67108864), gc(e, 67108864));
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xt();
      t = tt(t);
      var n = wl(e, t);
      (n !== null && Nt(n, e, t), gc(e, t));
    }
  }
  var Qu = !0;
  function m0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 2), yc(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function h0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 8), yc(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function yc(e, t, n, l) {
    if (Qu) {
      var a = pc(l);
      if (a === null) (lc(e, t, l, Zu, n), Vm(e, l));
      else if (g0(a, e, t, n, l)) l.stopPropagation();
      else if ((Vm(e, l), t & 4 && -1 < v0.indexOf(e))) {
        for (; a !== null; ) {
          var u = Pl(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Mn(u.pendingLanes);
                  if (S !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - Rt(S));
                      ((C.entanglements[1] |= U), (S &= ~U));
                    }
                    (pn(u), (He & 6) === 0 && ((Au = We() + 500), yi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = wl(u, 2)), C !== null && Nt(C, u, 2), Ou(), gc(u, 2));
            }
          if (((u = pc(l)), u === null && lc(e, t, l, Zu, n), u === a)) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else lc(e, t, l, null, n);
    }
  }
  function pc(e) {
    return ((e = xr(e)), Sc(e));
  }
  var Zu = null;
  function Sc(e) {
    if (((Zu = null), (e = Il(e)), e !== null)) {
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
    return ((Zu = e), null);
  }
  function Ym(e) {
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
        switch (Rl()) {
          case bn:
            return 2;
          case Ht:
            return 8;
          case Zt:
          case Tn:
            return 32;
          case dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xc = !1,
    Sl = null,
    xl = null,
    El = null,
    Mi = new Map(),
    Ci = new Map(),
    bl = [],
    v0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Vm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Sl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        xl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        El = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Mi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ci.delete(t.pointerId);
    }
  }
  function Ri(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Pl(t)), t !== null && jm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function g0(e, t, n, l, a) {
    switch (t) {
      case 'focusin':
        return ((Sl = Ri(Sl, e, t, n, l, a)), !0);
      case 'dragenter':
        return ((xl = Ri(xl, e, t, n, l, a)), !0);
      case 'mouseover':
        return ((El = Ri(El, e, t, n, l, a)), !0);
      case 'pointerover':
        var u = a.pointerId;
        return (Mi.set(u, Ri(Mi.get(u) || null, e, t, n, l, a)), !0);
      case 'gotpointercapture':
        return ((u = a.pointerId), Ci.set(u, Ri(Ci.get(u) || null, e, t, n, l, a)), !0);
    }
    return !1;
  }
  function qm(e) {
    var t = Il(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Cn(e.priority, function () {
                Gm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Cn(e.priority, function () {
                Gm(n);
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
  function Ku(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = pc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Sr = l), n.target.dispatchEvent(l), (Sr = null));
      } else return ((t = Pl(n)), t !== null && jm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Xm(e, t, n) {
    Ku(e) && n.delete(t);
  }
  function y0() {
    ((xc = !1),
      Sl !== null && Ku(Sl) && (Sl = null),
      xl !== null && Ku(xl) && (xl = null),
      El !== null && Ku(El) && (El = null),
      Mi.forEach(Xm),
      Ci.forEach(Xm));
  }
  function Ju(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xc || ((xc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, y0)));
  }
  var ku = null;
  function Qm(e) {
    ku !== e &&
      ((ku = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        ku === e && (ku = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            a = e[t + 2];
          if (typeof l != 'function') {
            if (Sc(l || n) === null) continue;
            break;
          }
          var u = Pl(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ps(u, { pending: !0, data: a, method: n.method, action: l }, l, a));
        }
      }));
  }
  function Ba(e) {
    function t(U) {
      return Ju(U, e);
    }
    (Sl !== null && Ju(Sl, e),
      xl !== null && Ju(xl, e),
      El !== null && Ju(El, e),
      Mi.forEach(t),
      Ci.forEach(t));
    for (var n = 0; n < bl.length; n++) {
      var l = bl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < bl.length && ((n = bl[0]), n.blockedOn === null); )
      (qm(n), n.blockedOn === null && bl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var a = n[l],
          u = n[l + 1],
          S = a[yt] || null;
        if (typeof u == 'function') S || Qm(n);
        else if (S) {
          var C = null;
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (S = u[yt] || null))) C = S.formAction;
            else if (Sc(a) !== null) continue;
          } else C = S.action;
          (typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), Qm(n));
        }
      }
  }
  function Zm() {
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
  function Ec(e) {
    this._internalRoot = e;
  }
  ((Fu.prototype.render = Ec.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        l = Xt();
      Hm(n, l, e, t, null, null);
    }),
    (Fu.prototype.unmount = Ec.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Hm(e.current, 2, null, e, null, null), Ou(), (t[hn] = null));
        }
      }));
  function Fu(e) {
    this._internalRoot = e;
  }
  Fu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = vt();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < bl.length && t !== 0 && t < bl[n].priority; n++);
      (bl.splice(n, 0, e), n === 0 && qm(e));
    }
  };
  var Km = b.version;
  if (Km !== '19.2.5') throw Error(x(527, Km, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var p0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: V,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var $u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$u.isDisabled && $u.supportsFiber)
      try {
        ((Al = $u.inject(p0)), (Ct = $u));
      } catch {}
  }
  return (
    (_i.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        l = '',
        a = Pf,
        u = ed,
        S = td;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = Bm(e, 1, !1, null, null, n, l, null, a, u, S, Zm)),
        (e[hn] = t.current),
        nc(e),
        new Ec(t)
      );
    }),
    (_i.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var l = !1,
        a = '',
        u = Pf,
        S = ed,
        C = td,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = Bm(e, 1, !0, t, n ?? null, l, a, U, u, S, C, Zm)),
        (t.context = Um(null)),
        (n = t.current),
        (l = Xt()),
        (l = tt(l)),
        (a = rl(l)),
        (a.callback = null),
        sl(n, a, l),
        (n = l),
        (t.current.lanes = n),
        me(t, n),
        pn(t),
        (e[hn] = t.current),
        nc(e),
        new Fu(t)
      );
    }),
    (_i.version = '19.2.5'),
    _i
  );
}
var lh;
function O0() {
  if (lh) return Tc.exports;
  lh = 1;
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
  return (s(), (Tc.exports = _0()), Tc.exports);
}
var D0 = O0(),
  N = Xc();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ah = 'popstate';
function ih(s) {
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
function z0(s = {}) {
  function b(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: c } = i || x.location;
    return jc(
      '',
      { pathname: d, search: f, hash: c },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || 'default',
      i
        ? { pathname: x.location.pathname, search: x.location.search, hash: x.location.hash }
        : void 0
    );
  }
  function T(x, h) {
    return typeof h == 'string' ? h : Bi(h);
  }
  return N0(b, T, null, s);
}
function Fe(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function Sn(s, b) {
  if (!s) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function w0() {
  return Math.random().toString(36).substring(2, 10);
}
function uh(s, b) {
  return {
    usr: s.state,
    key: s.key,
    idx: b,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function jc(s, b, T = null, x, h) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Ua(b) : b),
    state: T,
    key: (b && b.key) || x || w0(),
    unstable_mask: h,
  };
}
function Bi({ pathname: s = '/', search: b = '', hash: T = '' }) {
  return (
    b && b !== '?' && (s += b.charAt(0) === '?' ? b : '?' + b),
    T && T !== '#' && (s += T.charAt(0) === '#' ? T : '#' + T),
    s
  );
}
function Ua(s) {
  let b = {};
  if (s) {
    let T = s.indexOf('#');
    T >= 0 && ((b.hash = s.substring(T)), (s = s.substring(0, T)));
    let x = s.indexOf('?');
    (x >= 0 && ((b.search = s.substring(x)), (s = s.substring(0, x))), s && (b.pathname = s));
  }
  return b;
}
function N0(s, b, T, x = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = x,
    d = h.history,
    f = 'POP',
    c = null,
    m = o();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ''));
  function o() {
    return (d.state || { idx: null }).idx;
  }
  function p() {
    f = 'POP';
    let E = o(),
      R = E == null ? null : E - m;
    ((m = E), c && c({ action: f, location: g.location, delta: R }));
  }
  function v(E, R) {
    f = 'PUSH';
    let D = ih(E) ? E : jc(g.location, E, R);
    m = o() + 1;
    let w = uh(D, m),
      H = g.createHref(D.unstable_mask || D);
    try {
      d.pushState(w, '', H);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      h.location.assign(H);
    }
    i && c && c({ action: f, location: g.location, delta: 1 });
  }
  function r(E, R) {
    f = 'REPLACE';
    let D = ih(E) ? E : jc(g.location, E, R);
    m = o();
    let w = uh(D, m),
      H = g.createHref(D.unstable_mask || D);
    (d.replaceState(w, '', H), i && c && c({ action: f, location: g.location, delta: 0 }));
  }
  function y(E) {
    return B0(E);
  }
  let g = {
    get action() {
      return f;
    },
    get location() {
      return s(h, d);
    },
    listen(E) {
      if (c) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(ah, p),
        (c = E),
        () => {
          (h.removeEventListener(ah, p), (c = null));
        }
      );
    },
    createHref(E) {
      return b(h, E);
    },
    createURL: y,
    encodeLocation(E) {
      let R = y(E);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: v,
    replace: r,
    go(E) {
      return d.go(E);
    },
  };
  return g;
}
function B0(s, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Fe(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof s == 'string' ? s : Bi(s);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function Mh(s, b, T = '/') {
  return U0(s, b, T, !1);
}
function U0(s, b, T, x) {
  let h = typeof b == 'string' ? Ua(b) : b,
    i = $n(h.pathname || '/', T);
  if (i == null) return null;
  let d = Ch(s);
  H0(d);
  let f = null;
  for (let c = 0; f == null && c < d.length; ++c) {
    let m = J0(i);
    f = Z0(d[c], m, x);
  }
  return f;
}
function Ch(s, b = [], T = [], x = '', h = !1) {
  let i = (d, f, c = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && c) return;
      (Fe(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let p = on([x, o.relativePath]),
      v = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (Fe(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      Ch(d.children, b, v, p, c)),
      !(d.path == null && !d.index) && b.push({ path: p, score: X0(p, d.index), routesMeta: v }));
  };
  return (
    s.forEach((d, f) => {
      var c;
      if (d.path === '' || !((c = d.path) != null && c.includes('?'))) i(d, f);
      else for (let m of Rh(d.path)) i(d, f, !0, m);
    }),
    b
  );
}
function Rh(s) {
  let b = s.split('/');
  if (b.length === 0) return [];
  let [T, ...x] = b,
    h = T.endsWith('?'),
    i = T.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = Rh(x.join('/')),
    f = [];
  return (
    f.push(...d.map((c) => (c === '' ? i : [i, c].join('/')))),
    h && f.push(...d),
    f.map((c) => (s.startsWith('/') && c === '' ? '/' : c))
  );
}
function H0(s) {
  s.sort((b, T) =>
    b.score !== T.score
      ? T.score - b.score
      : Q0(
          b.routesMeta.map((x) => x.childrenIndex),
          T.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var L0 = /^:[\w-]+$/,
  j0 = 3,
  G0 = 2,
  Y0 = 1,
  V0 = 10,
  q0 = -2,
  rh = (s) => s === '*';
function X0(s, b) {
  let T = s.split('/'),
    x = T.length;
  return (
    T.some(rh) && (x += q0),
    b && (x += G0),
    T.filter((h) => !rh(h)).reduce((h, i) => h + (L0.test(i) ? j0 : i === '' ? Y0 : V0), x)
  );
}
function Q0(s, b) {
  return s.length === b.length && s.slice(0, -1).every((x, h) => x === b[h])
    ? s[s.length - 1] - b[b.length - 1]
    : 0;
}
function Z0(s, b, T = !1) {
  let { routesMeta: x } = s,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let c = x[f],
      m = f === x.length - 1,
      o = i === '/' ? b : b.slice(i.length) || '/',
      p = lr({ path: c.relativePath, caseSensitive: c.caseSensitive, end: m }, o),
      v = c.route;
    if (
      (!p &&
        m &&
        T &&
        !x[x.length - 1].route.index &&
        (p = lr({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, o)),
      !p)
    )
      return null;
    (Object.assign(h, p.params),
      d.push({
        params: h,
        pathname: on([i, p.pathname]),
        pathnameBase: W0(on([i, p.pathnameBase])),
        route: v,
      }),
      p.pathnameBase !== '/' && (i = on([i, p.pathnameBase])));
  }
  return d;
}
function lr(s, b) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [T, x] = K0(s.path, s.caseSensitive, s.end),
    h = b.match(T);
  if (!h) return null;
  let i = h[0],
    d = i.replace(/(.)\/+$/, '$1'),
    f = h.slice(1);
  return {
    params: x.reduce((m, { paramName: o, isOptional: p }, v) => {
      if (o === '*') {
        let y = f[v] || '';
        d = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const r = f[v];
      return (p && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: d,
    pattern: s,
  };
}
function K0(s, b = !1, T = !0) {
  Sn(
    s === '*' || !s.endsWith('*') || s.endsWith('/*'),
    `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, '/*')}".`
  );
  let x = [],
    h =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (d, f, c, m, o) => {
          if ((x.push({ paramName: f, isOptional: c != null }), c)) {
            let p = o.charAt(m + d.length);
            return p && p !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    s.endsWith('*')
      ? (x.push({ paramName: '*' }), (h += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : T
        ? (h += '\\/*$')
        : s !== '' && s !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, b ? void 0 : 'i'), x]
  );
}
function J0(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      Sn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      s
    );
  }
}
function $n(s, b) {
  if (b === '/') return s;
  if (!s.toLowerCase().startsWith(b.toLowerCase())) return null;
  let T = b.endsWith('/') ? b.length - 1 : b.length,
    x = s.charAt(T);
  return x && x !== '/' ? null : s.slice(T) || '/';
}
var k0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function F0(s, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof s == 'string' ? Ua(s) : s,
    i;
  return (
    T ? ((T = _h(T)), T.startsWith('/') ? (i = sh(T.substring(1), '/')) : (i = sh(T, b))) : (i = b),
    { pathname: i, search: I0(x), hash: P0(h) }
  );
}
function sh(s, b) {
  let T = ar(b).split('/');
  return (
    s.split('/').forEach((h) => {
      h === '..' ? T.length > 1 && T.pop() : h !== '.' && T.push(h);
    }),
    T.length > 1 ? T.join('/') : '/'
  );
}
function _c(s, b, T, x) {
  return `Cannot include a '${s}' character in a manually specified \`to.${b}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $0(s) {
  return s.filter((b, T) => T === 0 || (b.route.path && b.route.path.length > 0));
}
function Ah(s) {
  let b = $0(s);
  return b.map((T, x) => (x === b.length - 1 ? T.pathname : T.pathnameBase));
}
function Qc(s, b, T, x = !1) {
  let h;
  typeof s == 'string'
    ? (h = Ua(s))
    : ((h = { ...s }),
      Fe(!h.pathname || !h.pathname.includes('?'), _c('?', 'pathname', 'search', h)),
      Fe(!h.pathname || !h.pathname.includes('#'), _c('#', 'pathname', 'hash', h)),
      Fe(!h.search || !h.search.includes('#'), _c('#', 'search', 'hash', h)));
  let i = s === '' || h.pathname === '',
    d = i ? '/' : h.pathname,
    f;
  if (d == null) f = T;
  else {
    let p = b.length - 1;
    if (!x && d.startsWith('..')) {
      let v = d.split('/');
      for (; v[0] === '..'; ) (v.shift(), (p -= 1));
      h.pathname = v.join('/');
    }
    f = p >= 0 ? b[p] : '/';
  }
  let c = F0(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && T.endsWith('/');
  return (!c.pathname.endsWith('/') && (m || o) && (c.pathname += '/'), c);
}
var _h = (s) => s.replace(/\/\/+/g, '/'),
  on = (s) => _h(s.join('/')),
  ar = (s) => s.replace(/\/+$/, ''),
  W0 = (s) => ar(s).replace(/^\/*/, '/'),
  I0 = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  P0 = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  ey = class {
    constructor(s, b, T, x = !1) {
      ((this.status = s),
        (this.statusText = b || ''),
        (this.internal = x),
        T instanceof Error ? ((this.data = T.toString()), (this.error = T)) : (this.data = T));
    }
  };
function ty(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function ny(s) {
  let b = s.map((T) => T.route.path).filter(Boolean);
  return on(b) || '/';
}
var Oh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Dh(s, b) {
  let T = s;
  if (typeof T != 'string' || !k0.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (Oh)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = $n(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      Sn(
        !1,
        `<Link to="${T}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: T };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var zh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(zh);
var ly = ['GET', ...zh];
new Set(ly);
var Ha = N.createContext(null);
Ha.displayName = 'DataRouter';
var ur = N.createContext(null);
ur.displayName = 'DataRouterState';
var wh = N.createContext(!1);
function ay() {
  return N.useContext(wh);
}
var Nh = N.createContext({ isTransitioning: !1 });
Nh.displayName = 'ViewTransition';
var iy = N.createContext(new Map());
iy.displayName = 'Fetchers';
var uy = N.createContext(null);
uy.displayName = 'Await';
var un = N.createContext(null);
un.displayName = 'Navigation';
var Ui = N.createContext(null);
Ui.displayName = 'Location';
var Wn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Wn.displayName = 'Route';
var Zc = N.createContext(null);
Zc.displayName = 'RouteError';
var Bh = 'REACT_ROUTER_ERROR',
  ry = 'REDIRECT',
  sy = 'ROUTE_ERROR_RESPONSE';
function cy(s) {
  if (s.startsWith(`${Bh}:${ry}:{`))
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
function oy(s) {
  if (s.startsWith(`${Bh}:${sy}:{`))
    try {
      let b = JSON.parse(s.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new ey(b.status, b.statusText, b.data);
    } catch {}
}
function fy(s, { relative: b } = {}) {
  Fe(Hi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = N.useContext(un),
    { hash: h, pathname: i, search: d } = Li(s, { relative: b }),
    f = i;
  return (
    T !== '/' && (f = i === '/' ? T : on([T, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function Hi() {
  return N.useContext(Ui) != null;
}
function In() {
  return (
    Fe(Hi(), 'useLocation() may be used only in the context of a <Router> component.'),
    N.useContext(Ui).location
  );
}
var Uh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Hh(s) {
  N.useContext(un).static || N.useLayoutEffect(s);
}
function dy() {
  let { isDataRoute: s } = N.useContext(Wn);
  return s ? Cy() : my();
}
function my() {
  Fe(Hi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = N.useContext(Ha),
    { basename: b, navigator: T } = N.useContext(un),
    { matches: x } = N.useContext(Wn),
    { pathname: h } = In(),
    i = JSON.stringify(Ah(x)),
    d = N.useRef(!1);
  return (
    Hh(() => {
      d.current = !0;
    }),
    N.useCallback(
      (c, m = {}) => {
        if ((Sn(d.current, Uh), !d.current)) return;
        if (typeof c == 'number') {
          T.go(c);
          return;
        }
        let o = Qc(c, JSON.parse(i), h, m.relative === 'path');
        (s == null && b !== '/' && (o.pathname = o.pathname === '/' ? b : on([b, o.pathname])),
          (m.replace ? T.replace : T.push)(o, m.state, m));
      },
      [b, T, i, h, s]
    )
  );
}
N.createContext(null);
function Li(s, { relative: b } = {}) {
  let { matches: T } = N.useContext(Wn),
    { pathname: x } = In(),
    h = JSON.stringify(Ah(T));
  return N.useMemo(() => Qc(s, JSON.parse(h), x, b === 'path'), [s, h, x, b]);
}
function hy(s, b) {
  return Lh(s, b);
}
function Lh(s, b, T) {
  var E;
  Fe(Hi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = N.useContext(un),
    { matches: h } = N.useContext(Wn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    c = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let R = (m && m.path) || '';
    Gh(
      f,
      !m || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let o = In(),
    p;
  if (b) {
    let R = typeof b == 'string' ? Ua(b) : b;
    (Fe(
      c === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (p = R));
  } else p = o;
  let v = p.pathname || '/',
    r = v;
  if (c !== '/') {
    let R = c.replace(/^\//, '').split('/');
    r = '/' + v.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let y = Mh(s, { pathname: r });
  (Sn(m || y != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `),
    Sn(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let g = Sy(
    y &&
      y.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, d, R.params),
          pathname: on([
            c,
            x.encodeLocation
              ? x.encodeLocation(
                  R.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? c
              : on([
                  c,
                  x.encodeLocation
                    ? x.encodeLocation(
                        R.pathnameBase
                          .replace(/%/g, '%25')
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : R.pathnameBase,
                ]),
        })
      ),
    h,
    T
  );
  return b && g
    ? N.createElement(
        Ui.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...p,
            },
            navigationType: 'POP',
          },
        },
        g
      )
    : g;
}
function vy() {
  let s = My(),
    b = ty(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    T = s instanceof Error ? s.stack : null,
    x = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: x },
    i = { padding: '2px 4px', backgroundColor: x },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (d = N.createElement(
      N.Fragment,
      null,
      N.createElement('p', null, '💿 Hey developer 👋'),
      N.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        N.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        N.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement('h2', null, 'Unexpected Application Error!'),
      N.createElement('h3', { style: { fontStyle: 'italic' } }, b),
      T ? N.createElement('pre', { style: h }, T) : null,
      d
    )
  );
}
var gy = N.createElement(vy, null),
  jh = class extends N.Component {
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
        const T = oy(s.digest);
        T && (s = T);
      }
      let b =
        s !== void 0
          ? N.createElement(
              Wn.Provider,
              { value: this.props.routeContext },
              N.createElement(Zc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? N.createElement(yy, { error: s }, b) : b;
    }
  };
jh.contextType = wh;
var Oc = new WeakMap();
function yy({ children: s, error: b }) {
  let { basename: T } = N.useContext(un);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = cy(b.digest);
    if (x) {
      let h = Oc.get(b);
      if (h) throw h;
      let i = Dh(x.location, T);
      if (Oh && !Oc.get(b))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (Oc.set(b, d), d);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return s;
}
function py({ routeContext: s, match: b, children: T }) {
  let x = N.useContext(Ha);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    N.createElement(Wn.Provider, { value: s }, T)
  );
}
function Sy(s, b = [], T) {
  let x = T == null ? void 0 : T.state;
  if (s == null) {
    if (!x) return null;
    if (x.errors) s = x.matches;
    else if (b.length === 0 && !x.initialized && x.matches.length > 0) s = x.matches;
    else return null;
  }
  let h = s,
    i = x == null ? void 0 : x.errors;
  if (i != null) {
    let o = h.findIndex((p) => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0);
    (Fe(
      o >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (h = h.slice(0, Math.min(h.length, o + 1))));
  }
  let d = !1,
    f = -1;
  if (T && x) {
    d = x.renderFallback;
    for (let o = 0; o < h.length; o++) {
      let p = h[o];
      if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (f = o), p.route.id)) {
        let { loaderData: v, errors: r } = x,
          y = p.route.loader && !v.hasOwnProperty(p.route.id) && (!r || r[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (T.isStatic && (d = !0), f >= 0 ? (h = h.slice(0, f + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  }
  let c = T == null ? void 0 : T.onError,
    m =
      x && c
        ? (o, p) => {
            var v, r;
            c(o, {
              location: x.location,
              params:
                ((r = (v = x.matches) == null ? void 0 : v[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: ny(x.matches),
              errorInfo: p,
            });
          }
        : void 0;
  return h.reduceRight((o, p, v) => {
    let r,
      y = !1,
      g = null,
      E = null;
    x &&
      ((r = i && p.route.id ? i[p.route.id] : void 0),
      (g = p.route.errorElement || gy),
      d &&
        (f < 0 && v === 0
          ? (Gh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (E = null))
          : f === v && ((y = !0), (E = p.route.hydrateFallbackElement || null))));
    let R = b.concat(h.slice(0, v + 1)),
      D = () => {
        let w;
        return (
          r
            ? (w = g)
            : y
              ? (w = E)
              : p.route.Component
                ? (w = N.createElement(p.route.Component, null))
                : p.route.element
                  ? (w = p.route.element)
                  : (w = o),
          N.createElement(py, {
            match: p,
            routeContext: { outlet: o, matches: R, isDataRoute: x != null },
            children: w,
          })
        );
      };
    return x && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? N.createElement(jh, {
          location: x.location,
          revalidation: x.revalidation,
          component: g,
          error: r,
          children: D(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: m,
        })
      : D();
  }, null);
}
function Kc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xy(s) {
  let b = N.useContext(Ha);
  return (Fe(b, Kc(s)), b);
}
function Ey(s) {
  let b = N.useContext(ur);
  return (Fe(b, Kc(s)), b);
}
function by(s) {
  let b = N.useContext(Wn);
  return (Fe(b, Kc(s)), b);
}
function Jc(s) {
  let b = by(s),
    T = b.matches[b.matches.length - 1];
  return (Fe(T.route.id, `${s} can only be used on routes that contain a unique "id"`), T.route.id);
}
function Ty() {
  return Jc('useRouteId');
}
function My() {
  var x;
  let s = N.useContext(Zc),
    b = Ey('useRouteError'),
    T = Jc('useRouteError');
  return s !== void 0 ? s : (x = b.errors) == null ? void 0 : x[T];
}
function Cy() {
  let { router: s } = xy('useNavigate'),
    b = Jc('useNavigate'),
    T = N.useRef(!1);
  return (
    Hh(() => {
      T.current = !0;
    }),
    N.useCallback(
      async (h, i = {}) => {
        (Sn(T.current, Uh),
          T.current &&
            (typeof h == 'number'
              ? await s.navigate(h)
              : await s.navigate(h, { fromRouteId: b, ...i })));
      },
      [s, b]
    )
  );
}
var ch = {};
function Gh(s, b, T) {
  !b && !ch[s] && ((ch[s] = !0), Sn(!1, T));
}
N.memo(Ry);
function Ry({ routes: s, future: b, state: T, isStatic: x, onError: h }) {
  return Lh(s, void 0, { state: T, isStatic: x, onError: h });
}
function Gc(s) {
  Fe(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Ay({
  basename: s = '/',
  children: b = null,
  location: T,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: d,
}) {
  Fe(
    !Hi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = s.replace(/^\/*/, '/'),
    c = N.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = Ua(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: p = '',
      state: v = null,
      key: r = 'default',
      unstable_mask: y,
    } = T,
    g = N.useMemo(() => {
      let E = $n(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: p, state: v, key: r, unstable_mask: y },
            navigationType: x,
          };
    }, [f, m, o, p, v, r, x, y]);
  return (
    Sn(
      g != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : N.createElement(
          un.Provider,
          { value: c },
          N.createElement(Ui.Provider, { children: b, value: g })
        )
  );
}
function _y({ children: s, location: b }) {
  return hy(Yc(s), b);
}
function Yc(s, b = []) {
  let T = [];
  return (
    N.Children.forEach(s, (x, h) => {
      if (!N.isValidElement(x)) return;
      let i = [...b, h];
      if (x.type === N.Fragment) {
        T.push.apply(T, Yc(x.props.children, i));
        return;
      }
      (Fe(
        x.type === Gc,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Fe(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
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
      (x.props.children && (d.children = Yc(x.props.children, i)), T.push(d));
    }),
    T
  );
}
var er = 'get',
  tr = 'application/x-www-form-urlencoded';
function rr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function Oy(s) {
  return rr(s) && s.tagName.toLowerCase() === 'button';
}
function Dy(s) {
  return rr(s) && s.tagName.toLowerCase() === 'form';
}
function zy(s) {
  return rr(s) && s.tagName.toLowerCase() === 'input';
}
function wy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function Ny(s, b) {
  return s.button === 0 && (!b || b === '_self') && !wy(s);
}
var Wu = null;
function By() {
  if (Wu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Wu = !1));
    } catch {
      Wu = !0;
    }
  return Wu;
}
var Uy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Dc(s) {
  return s != null && !Uy.has(s)
    ? (Sn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`
      ),
      null)
    : s;
}
function Hy(s, b) {
  let T, x, h, i, d;
  if (Dy(s)) {
    let f = s.getAttribute('action');
    ((x = f ? $n(f, b) : null),
      (T = s.getAttribute('method') || er),
      (h = Dc(s.getAttribute('enctype')) || tr),
      (i = new FormData(s)));
  } else if (Oy(s) || (zy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let f = s.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = s.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = c ? $n(c, b) : null),
      (T = s.getAttribute('formmethod') || f.getAttribute('method') || er),
      (h = Dc(s.getAttribute('formenctype')) || Dc(f.getAttribute('enctype')) || tr),
      (i = new FormData(f, s)),
      !By())
    ) {
      let { name: m, type: o, value: p } = s;
      if (o === 'image') {
        let v = m ? `${m}.` : '';
        (i.append(`${v}x`, '0'), i.append(`${v}y`, '0'));
      } else m && i.append(m, p);
    }
  } else {
    if (rr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((T = er), (x = null), (h = tr), (d = s));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: T.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function kc(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function Yh(s, b, T, x) {
  let h =
    typeof s == 'string'
      ? new URL(s, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : s;
  return (
    T
      ? h.pathname.endsWith('/')
        ? (h.pathname = `${h.pathname}_.${x}`)
        : (h.pathname = `${h.pathname}.${x}`)
      : h.pathname === '/'
        ? (h.pathname = `_root.${x}`)
        : b && $n(h.pathname, b) === '/'
          ? (h.pathname = `${ar(b)}/_root.${x}`)
          : (h.pathname = `${ar(h.pathname)}.${x}`),
    h
  );
}
async function Ly(s, b) {
  if (s.id in b) return b[s.id];
  try {
    let T = await import(s.module);
    return ((b[s.id] = T), T);
  } catch (T) {
    return (
      console.error(`Error loading route module \`${s.module}\`, reloading page...`),
      console.error(T),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function jy(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Gy(s, b, T) {
  let x = await Promise.all(
    s.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let d = await Ly(i, T);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Xy(
    x
      .flat(1)
      .filter(jy)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function oh(s, b, T, x, h, i) {
  let d = (c, m) => (T[m] ? c.route.id !== T[m].route.id : !0),
    f = (c, m) => {
      var o;
      return (
        T[m].pathname !== c.pathname ||
        (((o = T[m].route.path) == null ? void 0 : o.endsWith('*')) &&
          T[m].params['*'] !== c.params['*'])
      );
    };
  return i === 'assets'
    ? b.filter((c, m) => d(c, m) || f(c, m))
    : i === 'data'
      ? b.filter((c, m) => {
          var p;
          let o = x.routes[c.route.id];
          if (!o || !o.hasLoader) return !1;
          if (d(c, m) || f(c, m)) return !0;
          if (c.route.shouldRevalidate) {
            let v = c.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((p = T[0]) == null ? void 0 : p.params) || {},
              nextUrl: new URL(s, window.origin),
              nextParams: c.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function Yy(s, b, { includeHydrateFallback: T } = {}) {
  return Vy(
    s
      .map((x) => {
        let h = b.routes[x.route.id];
        if (!h) return [];
        let i = [h.module];
        return (
          h.clientActionModule && (i = i.concat(h.clientActionModule)),
          h.clientLoaderModule && (i = i.concat(h.clientLoaderModule)),
          T && h.hydrateFallbackModule && (i = i.concat(h.hydrateFallbackModule)),
          h.imports && (i = i.concat(h.imports)),
          i
        );
      })
      .flat(1)
  );
}
function Vy(s) {
  return [...new Set(s)];
}
function qy(s) {
  let b = {},
    T = Object.keys(s).sort();
  for (let x of T) b[x] = s[x];
  return b;
}
function Xy(s, b) {
  let T = new Set();
  return (
    new Set(b),
    s.reduce((x, h) => {
      let i = JSON.stringify(qy(h));
      return (T.has(i) || (T.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Fc() {
  let s = N.useContext(Ha);
  return (kc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function Qy() {
  let s = N.useContext(ur);
  return (
    kc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var $c = N.createContext(void 0);
$c.displayName = 'FrameworkContext';
function Wc() {
  let s = N.useContext($c);
  return (kc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function Zy(s, b) {
  let T = N.useContext($c),
    [x, h] = N.useState(!1),
    [i, d] = N.useState(!1),
    { onFocus: f, onBlur: c, onMouseEnter: m, onMouseLeave: o, onTouchStart: p } = b,
    v = N.useRef(null);
  (N.useEffect(() => {
    if ((s === 'render' && d(!0), s === 'viewport')) {
      let g = (R) => {
          R.forEach((D) => {
            d(D.isIntersecting);
          });
        },
        E = new IntersectionObserver(g, { threshold: 0.5 });
      return (
        v.current && E.observe(v.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [s]),
    N.useEffect(() => {
      if (x) {
        let g = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(g);
        };
      }
    }, [x]));
  let r = () => {
      h(!0);
    },
    y = () => {
      (h(!1), d(!1));
    };
  return T
    ? s !== 'intent'
      ? [i, v, {}]
      : [
          i,
          v,
          {
            onFocus: Oi(f, r),
            onBlur: Oi(c, y),
            onMouseEnter: Oi(m, r),
            onMouseLeave: Oi(o, y),
            onTouchStart: Oi(p, r),
          },
        ]
    : [!1, v, {}];
}
function Oi(s, b) {
  return (T) => {
    (s && s(T), T.defaultPrevented || b(T));
  };
}
function Ky({ page: s, ...b }) {
  let T = ay(),
    { router: x } = Fc(),
    h = N.useMemo(() => Mh(x.routes, s, x.basename), [x.routes, s, x.basename]);
  return h
    ? T
      ? N.createElement(ky, { page: s, matches: h, ...b })
      : N.createElement(Fy, { page: s, matches: h, ...b })
    : null;
}
function Jy(s) {
  let { manifest: b, routeModules: T } = Wc(),
    [x, h] = N.useState([]);
  return (
    N.useEffect(() => {
      let i = !1;
      return (
        Gy(s, b, T).then((d) => {
          i || h(d);
        }),
        () => {
          i = !0;
        }
      );
    }, [s, b, T]),
    x
  );
}
function ky({ page: s, matches: b, ...T }) {
  let x = In(),
    { future: h } = Wc(),
    { basename: i } = Fc(),
    d = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let f = Yh(s, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        c = !1,
        m = [];
      for (let o of b)
        typeof o.route.shouldRevalidate == 'function' ? (c = !0) : m.push(o.route.id);
      return (
        c && m.length > 0 && f.searchParams.set('_routes', m.join(',')),
        [f.pathname + f.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, s, x, b]);
  return N.createElement(
    N.Fragment,
    null,
    d.map((f) => N.createElement('link', { key: f, rel: 'prefetch', as: 'fetch', href: f, ...T }))
  );
}
function Fy({ page: s, matches: b, ...T }) {
  let x = In(),
    { future: h, manifest: i, routeModules: d } = Wc(),
    { basename: f } = Fc(),
    { loaderData: c, matches: m } = Qy(),
    o = N.useMemo(() => oh(s, b, m, i, x, 'data'), [s, b, m, i, x]),
    p = N.useMemo(() => oh(s, b, m, i, x, 'assets'), [s, b, m, i, x]),
    v = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let g = new Set(),
        E = !1;
      if (
        (b.forEach((D) => {
          var H;
          let w = i.routes[D.route.id];
          !w ||
            !w.hasLoader ||
            ((!o.some((M) => M.route.id === D.route.id) &&
              D.route.id in c &&
              (H = d[D.route.id]) != null &&
              H.shouldRevalidate) ||
            w.hasClientLoader
              ? (E = !0)
              : g.add(D.route.id));
        }),
        g.size === 0)
      )
        return [];
      let R = Yh(s, f, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        E &&
          g.size > 0 &&
          R.searchParams.set(
            '_routes',
            b
              .filter((D) => g.has(D.route.id))
              .map((D) => D.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [f, h.unstable_trailingSlashAwareDataRequests, c, x, i, o, b, s, d]),
    r = N.useMemo(() => Yy(p, i), [p, i]),
    y = Jy(p);
  return N.createElement(
    N.Fragment,
    null,
    v.map((g) => N.createElement('link', { key: g, rel: 'prefetch', as: 'fetch', href: g, ...T })),
    r.map((g) => N.createElement('link', { key: g, rel: 'modulepreload', href: g, ...T })),
    y.map(({ key: g, link: E }) =>
      N.createElement('link', {
        key: g,
        nonce: T.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? T.crossOrigin,
      })
    )
  );
}
function $y(...s) {
  return (b) => {
    s.forEach((T) => {
      typeof T == 'function' ? T(b) : T != null && (T.current = b);
    });
  };
}
var Wy =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Wy && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Iy({ basename: s, children: b, unstable_useTransitions: T, window: x }) {
  let h = N.useRef();
  h.current == null && (h.current = z0({ window: x, v5Compat: !0 }));
  let i = h.current,
    [d, f] = N.useState({ action: i.action, location: i.location }),
    c = N.useCallback(
      (m) => {
        T === !1 ? f(m) : N.startTransition(() => f(m));
      },
      [T]
    );
  return (
    N.useLayoutEffect(() => i.listen(c), [i, c]),
    N.createElement(Ay, {
      basename: s,
      children: b,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: T,
    })
  );
}
var Vh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qh = N.forwardRef(function (
    {
      onClick: b,
      discover: T = 'render',
      prefetch: x = 'none',
      relative: h,
      reloadDocument: i,
      replace: d,
      unstable_mask: f,
      state: c,
      target: m,
      to: o,
      preventScrollReset: p,
      viewTransition: v,
      unstable_defaultShouldRevalidate: r,
      ...y
    },
    g
  ) {
    let { basename: E, navigator: R, unstable_useTransitions: D } = N.useContext(un),
      w = typeof o == 'string' && Vh.test(o),
      H = Dh(o, E);
    o = H.to;
    let M = fy(o, { relative: h }),
      _ = In(),
      O = null;
    if (f) {
      let ee = Qc(f, [], _.unstable_mask ? _.unstable_mask.pathname : '/', !0);
      (E !== '/' && (ee.pathname = ee.pathname === '/' ? E : on([E, ee.pathname])),
        (O = R.createHref(ee)));
    }
    let [A, B, z] = Zy(x, y),
      L = np(o, {
        replace: d,
        unstable_mask: f,
        state: c,
        target: m,
        preventScrollReset: p,
        relative: h,
        viewTransition: v,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: D,
      });
    function G(ee) {
      (b && b(ee), ee.defaultPrevented || L(ee));
    }
    let J = !(H.isExternal || i),
      te = N.createElement('a', {
        ...y,
        ...z,
        href: (J ? O : void 0) || H.absoluteURL || M,
        onClick: J ? G : b,
        ref: $y(g, B),
        target: m,
        'data-discover': !w && T === 'render' ? 'true' : void 0,
      });
    return A && !w ? N.createElement(N.Fragment, null, te, N.createElement(Ky, { page: M })) : te;
  });
qh.displayName = 'Link';
var Py = N.forwardRef(function (
  {
    'aria-current': b = 'page',
    caseSensitive: T = !1,
    className: x = '',
    end: h = !1,
    style: i,
    to: d,
    viewTransition: f,
    children: c,
    ...m
  },
  o
) {
  let p = Li(d, { relative: m.relative }),
    v = In(),
    r = N.useContext(ur),
    { navigator: y, basename: g } = N.useContext(un),
    E = r != null && rp(p) && f === !0,
    R = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname,
    D = v.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((D = D.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && g && (w = $n(w, g) || w));
  const H = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = D === R || (!h && D.startsWith(R) && D.charAt(H) === '/'),
    _ = w != null && (w === R || (!h && w.startsWith(R) && w.charAt(R.length) === '/')),
    O = { isActive: M, isPending: _, isTransitioning: E },
    A = M ? b : void 0,
    B;
  typeof x == 'function'
    ? (B = x(O))
    : (B = [x, M ? 'active' : null, _ ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let z = typeof i == 'function' ? i(O) : i;
  return N.createElement(
    qh,
    { ...m, 'aria-current': A, className: B, ref: o, style: z, to: d, viewTransition: f },
    typeof c == 'function' ? c(O) : c
  );
});
Py.displayName = 'NavLink';
var ep = N.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: b,
      navigate: T,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = er,
      action: f,
      onSubmit: c,
      relative: m,
      preventScrollReset: o,
      viewTransition: p,
      unstable_defaultShouldRevalidate: v,
      ...r
    },
    y
  ) => {
    let { unstable_useTransitions: g } = N.useContext(un),
      E = ip(),
      R = up(f, { relative: m }),
      D = d.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof f == 'string' && Vh.test(f),
      H = (M) => {
        if ((c && c(M), M.defaultPrevented)) return;
        M.preventDefault();
        let _ = M.nativeEvent.submitter,
          O = (_ == null ? void 0 : _.getAttribute('formmethod')) || d,
          A = () =>
            E(_ || M.currentTarget, {
              fetcherKey: b,
              method: O,
              navigate: T,
              replace: h,
              state: i,
              relative: m,
              preventScrollReset: o,
              viewTransition: p,
              unstable_defaultShouldRevalidate: v,
            });
        g && T !== !1 ? N.startTransition(() => A()) : A();
      };
    return N.createElement('form', {
      ref: y,
      method: D,
      action: R,
      onSubmit: x ? c : H,
      ...r,
      'data-discover': !w && s === 'render' ? 'true' : void 0,
    });
  }
);
ep.displayName = 'Form';
function tp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xh(s) {
  let b = N.useContext(Ha);
  return (Fe(b, tp(s)), b);
}
function np(
  s,
  {
    target: b,
    replace: T,
    unstable_mask: x,
    state: h,
    preventScrollReset: i,
    relative: d,
    viewTransition: f,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: m,
  } = {}
) {
  let o = dy(),
    p = In(),
    v = Li(s, { relative: d });
  return N.useCallback(
    (r) => {
      if (Ny(r, b)) {
        r.preventDefault();
        let y = T !== void 0 ? T : Bi(p) === Bi(v),
          g = () =>
            o(s, {
              replace: y,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: d,
              viewTransition: f,
              unstable_defaultShouldRevalidate: c,
            });
        m ? N.startTransition(() => g()) : g();
      }
    },
    [p, o, v, T, x, h, b, s, i, d, f, c, m]
  );
}
var lp = 0,
  ap = () => `__${String(++lp)}__`;
function ip() {
  let { router: s } = Xh('useSubmit'),
    { basename: b } = N.useContext(un),
    T = Ty(),
    x = s.fetch,
    h = s.navigate;
  return N.useCallback(
    async (i, d = {}) => {
      let { action: f, method: c, encType: m, formData: o, body: p } = Hy(i, b);
      if (d.navigate === !1) {
        let v = d.fetcherKey || ap();
        await x(v, T, d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: p,
          formMethod: d.method || c,
          formEncType: d.encType || m,
          flushSync: d.flushSync,
        });
      } else
        await h(d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: p,
          formMethod: d.method || c,
          formEncType: d.encType || m,
          replace: d.replace,
          state: d.state,
          fromRouteId: T,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [x, h, b, T]
  );
}
function up(s, { relative: b } = {}) {
  let { basename: T } = N.useContext(un),
    x = N.useContext(Wn);
  Fe(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...Li(s || '.', { relative: b }) },
    d = In();
  if (s == null) {
    i.search = d.search;
    let f = new URLSearchParams(i.search),
      c = f.getAll('index');
    if (c.some((o) => o === '')) {
      (f.delete('index'), c.filter((p) => p).forEach((p) => f.append('index', p)));
      let o = f.toString();
      i.search = o ? `?${o}` : '';
    }
  }
  return (
    (!s || s === '.') &&
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    T !== '/' && (i.pathname = i.pathname === '/' ? T : on([T, i.pathname])),
    Bi(i)
  );
}
function rp(s, { relative: b } = {}) {
  let T = N.useContext(Nh);
  Fe(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Xh('useViewTransitionState'),
    h = Li(s, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = $n(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = $n(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return lr(h.pathname, d) != null || lr(h.pathname, i) != null;
}
const sp = 'modulepreload',
  cp = function (s) {
    return '/ochimono-game/' + s;
  },
  fh = {},
  op = function (b, T, x) {
    let h = Promise.resolve();
    if (T && T.length > 0) {
      let d = function (m) {
        return Promise.all(
          m.map((o) =>
            Promise.resolve(o).then(
              (p) => ({ status: 'fulfilled', value: p }),
              (p) => ({ status: 'rejected', reason: p })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const f = document.querySelector('meta[property=csp-nonce]'),
        c = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute('nonce'));
      h = d(
        T.map((m) => {
          if (((m = cp(m)), m in fh)) return;
          fh[m] = !0;
          const o = m.endsWith('.css'),
            p = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${p}`)) return;
          const v = document.createElement('link');
          if (
            ((v.rel = o ? 'stylesheet' : sp),
            o || (v.as = 'script'),
            (v.crossOrigin = ''),
            (v.href = m),
            c && v.setAttribute('nonce', c),
            document.head.appendChild(v),
            o)
          )
            return new Promise((r, y) => {
              (v.addEventListener('load', r),
                v.addEventListener('error', () => y(new Error(`Unable to preload CSS for ${m}`))));
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
      return b().catch(i);
    });
  };
function fp(s = {}) {
  const {
    immediate: b = !1,
    onNeedRefresh: T,
    onOfflineReady: x,
    onRegistered: h,
    onRegisteredSW: i,
    onRegisterError: d,
  } = s;
  let f, c, m;
  const o = async (v = !0) => {
    (await c, m == null || m());
  };
  async function p() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await op(async () => {
          const { Workbox: v } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: v };
        }, [])
          .then(
            ({ Workbox: v }) =>
              new v('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((v) => {
            d == null || d(v);
          })),
        !f)
      )
        return;
      m = () => {
        f == null || f.messageSkipWaiting();
      };
      {
        let v = !1;
        const r = () => {
          ((v = !0),
            f == null ||
              f.addEventListener('controlling', (y) => {
                y.isUpdate && window.location.reload();
              }),
            T == null || T());
        };
        (f.addEventListener('installed', (y) => {
          typeof y.isUpdate > 'u'
            ? typeof y.isExternal < 'u' && y.isExternal
              ? r()
              : !v && (x == null || x())
            : y.isUpdate || x == null || x();
        }),
          f.addEventListener('waiting', r));
      }
      f.register({ immediate: b })
        .then((v) => {
          i ? i('/ochimono-game/sw.js', v) : h == null || h(v);
        })
        .catch((v) => {
          d == null || d(v);
        });
    }
  }
  return ((c = p()), o);
}
function dp(s = {}) {
  const {
      immediate: b = !0,
      onNeedRefresh: T,
      onOfflineReady: x,
      onRegistered: h,
      onRegisteredSW: i,
      onRegisterError: d,
    } = s,
    [f, c] = N.useState(!1),
    [m, o] = N.useState(!1),
    [p] = N.useState(() =>
      fp({
        immediate: b,
        onOfflineReady() {
          (o(!0), x == null || x());
        },
        onNeedRefresh() {
          (c(!0), T == null || T());
        },
        onRegistered: h,
        onRegisteredSW: i,
        onRegisterError: d,
      })
    );
  return { needRefresh: [f, c], offlineReady: [m, o], updateServiceWorker: p };
}
const mp = '_banner_1qruq_1',
  hp = '_message_1qruq_21',
  vp = '_button_1qruq_25',
  zc = { banner: mp, message: hp, button: vp },
  gp = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: b,
    } = dp();
    return s
      ? F.jsxs('div', {
          className: zc.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            F.jsx('span', { className: zc.message, children: '新しいバージョンがあります' }),
            F.jsx('button', {
              type: 'button',
              className: zc.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  yp = '_index_r8hfh_1',
  pp = { index: yp },
  Sp = '_layout_u1qv8_1',
  xp = '_top_bar_placeholder_u1qv8_10',
  Ep = '_main_u1qv8_15',
  bp = '_field_wrapper_u1qv8_23',
  Tp = '_skill_button_wrapper_u1qv8_28',
  Kl = {
    layout: Sp,
    top_bar_placeholder: xp,
    main: Ep,
    field_wrapper: bp,
    skill_button_wrapper: Tp,
  },
  Mp = '_surface_6wr97_1',
  Cp = '_canvas_layer_6wr97_11',
  Rp = '_game_over_line_6wr97_22',
  wc = { surface: Mp, canvas_layer: Cp, game_over_line: Rp },
  Ap = '_layer_1dvsy_1',
  _p = '_effect_1dvsy_7',
  Op = '_ring_1dvsy_12',
  Dp = '_score_1dvsy_24',
  zp = '_special_1dvsy_36',
  Di = { layer: Ap, effect: _p, ring: Op, score: Dp, special: zp },
  Qh = N.memo(
    N.forwardRef((s, b) => {
      const T = N.useRef(null),
        x = N.useCallback((i) => {
          const d = T.current;
          if (!d) return;
          const f = document.createElement('div');
          ((f.className = `${Di.effect} ${i.isSpecial ? Di.special : ''}`),
            (f.style.left = `${i.x}px`),
            (f.style.top = `${i.y}px`),
            f.setAttribute('aria-hidden', 'true'));
          const c = document.createElement('span');
          ((c.className = Di.ring), f.appendChild(c));
          const m = () => {
            (c.removeEventListener('animationend', m), f.parentNode === d && d.removeChild(f));
          };
          if ((c.addEventListener('animationend', m), i.score > 0)) {
            const o = document.createElement('span');
            ((o.className = Di.score), (o.textContent = `+${i.score}`), f.appendChild(o));
          }
          d.appendChild(f);
        }, []),
        h = N.useCallback(() => {
          const i = T.current;
          if (i) for (; i.firstChild; ) i.removeChild(i.firstChild);
        }, []);
      return (
        N.useImperativeHandle(b, () => ({ add: x, clear: h }), [x, h]),
        F.jsx('div', { ref: T, className: Di.layer, 'aria-hidden': 'true' })
      );
    })
  );
Qh.displayName = 'MergeEffect';
const wp = '_line_yymkz_1',
  Np = '_preview_wrap_yymkz_11',
  Bp = '_preview_yymkz_11',
  Nc = { line: wp, preview_wrap: Np, preview: Bp },
  Up = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Zh = N.memo(
    N.forwardRef(({ initialX: s, fieldHeight: b, item: T }, x) => {
      const h = N.useRef(null),
        i = N.useRef(null),
        d = N.useRef((T == null ? void 0 : T.radius) ?? 0);
      if (
        ((d.current = (T == null ? void 0 : T.radius) ?? 0),
        N.useImperativeHandle(
          x,
          () => ({
            setX: (c) => {
              const m = h.current,
                o = i.current;
              (m && (m.style.transform = `translate3d(${c}px, 0, 0)`),
                o && (o.style.transform = `translate3d(${c - d.current}px, 0, 0)`));
            },
          }),
          []
        ),
        !T)
      )
        return null;
      const f = T.radius * 2;
      return F.jsxs(F.Fragment, {
        children: [
          F.jsx('div', {
            ref: h,
            className: Nc.line,
            style: { height: `${b}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          F.jsx('div', {
            ref: i,
            className: Nc.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${s - T.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: F.jsx('img', {
              src: Up(T.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Nc.preview,
            }),
          }),
        ],
      });
    })
  );
Zh.displayName = 'DropIndicator';
const Hp = (s) => Math.max(0, Math.min(1, s)),
  Lp = ({
    canvasContainerRef: s,
    fieldWidth: b,
    fieldHeight: T,
    gameOverLineY: x,
    currentItem: h,
    canInteract: i,
    onDrop: d,
    mergeEffectRef: f,
    isMagnetSelecting: c,
    onMagnetSelect: m,
  }) => {
    const o = N.useRef(null),
      p = N.useRef(null),
      v = N.useRef(0.5),
      r = N.useRef(null),
      y = N.useRef(h);
    y.current = h;
    const g = N.useRef(b);
    g.current = b;
    const E = N.useCallback((A) => {
        const B = y.current,
          z = g.current;
        return B ? Math.max(B.radius, Math.min(z - B.radius, A * z)) : A * z;
      }, []),
      R = N.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = p.current) == null || A.setX(E(v.current)));
          }));
      }, [E]),
      D = N.useCallback(
        (A) => {
          const B = o.current;
          if (!B) return;
          const z = B.getBoundingClientRect(),
            L = Hp((A - z.left) / z.width);
          ((v.current = L), R());
        },
        [R]
      );
    (N.useEffect(() => {
      ((v.current = 0.5), R());
    }, [h == null ? void 0 : h.level, R]),
      N.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const w = i && !c,
      H = (A) => {
        var B;
        c || (w && (D(A.clientX), (B = o.current) == null || B.setPointerCapture(A.pointerId)));
      },
      M = (A) => {
        if (!c) {
          if (A.buttons === 0 && A.pointerType === 'mouse') {
            D(A.clientX);
            return;
          }
          D(A.clientX);
        }
      },
      _ = (A) => {
        var B;
        if (c) {
          const z = o.current;
          if (!z) return;
          const L = z.getBoundingClientRect();
          m(A.clientX - L.left, A.clientY - L.top);
          return;
        }
        w &&
          (D(A.clientX),
          d(v.current),
          (B = o.current) == null || B.releasePointerCapture(A.pointerId));
      },
      O = E(0.5);
    return F.jsxs('div', {
      ref: o,
      className: wc.surface,
      style: { width: `${b}px`, height: `${T}px` },
      onPointerDown: H,
      onPointerMove: M,
      onPointerUp: _,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        F.jsx('div', { ref: s, className: wc.canvas_layer }),
        F.jsx('div', {
          className: wc.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        w ? F.jsx(Zh, { ref: p, initialX: O, fieldHeight: T, item: h }) : null,
        F.jsx(Qh, { ref: f }),
      ],
    });
  },
  jp = '_overlay_efysu_1',
  Gp = '_number_efysu_11',
  dh = { overlay: jp, number: Gp },
  Kh = N.memo(({ seconds: s }) =>
    s === null
      ? null
      : F.jsx('div', {
          className: dh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: F.jsx('span', { className: dh.number, children: s }, s),
        })
  );
Kh.displayName = 'CountdownOverlay';
const Yp = '_overlay_o79hb_1',
  Vp = '_panel_o79hb_13',
  qp = '_new_record_o79hb_24',
  Xp = '_title_o79hb_32',
  Qp = '_scores_o79hb_40',
  Zp = '_row_o79hb_46',
  Kp = '_gold_o79hb_64',
  Jp = '_restart_o79hb_69',
  Qn = {
    overlay: Yp,
    panel: Vp,
    new_record: qp,
    title: Xp,
    scores: Qp,
    row: Zp,
    gold: Kp,
    restart: Jp,
  },
  kp = ({ score: s, bestScore: b, isNewRecord: T, onRestart: x }) =>
    F.jsx('div', {
      className: Qn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: F.jsxs('div', {
        className: Qn.panel,
        children: [
          T ? F.jsx('p', { className: Qn.new_record, children: '🎉 新記録！' }) : null,
          F.jsx('h2', { className: Qn.title, children: 'GAME OVER' }),
          F.jsxs('dl', {
            className: Qn.scores,
            children: [
              F.jsxs('div', {
                className: Qn.row,
                children: [
                  F.jsx('dt', { children: 'スコア' }),
                  F.jsx('dd', { className: T ? Qn.gold : '', children: s }),
                ],
              }),
              F.jsxs('div', {
                className: Qn.row,
                children: [F.jsx('dt', { children: 'ベスト' }), F.jsx('dd', { children: b })],
              }),
            ],
          }),
          F.jsx('button', {
            type: 'button',
            className: Qn.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Fp = '_root_1svqx_1',
  $p = '_message_1svqx_13',
  Wp = '_icon_1svqx_30',
  Ip = '_text_1svqx_34',
  Pp = '_cancel_1svqx_38',
  zi = { root: Fp, message: $p, icon: Wp, text: Ip, cancel: Pp },
  Jh = N.memo(({ active: s, onCancel: b }) =>
    s
      ? F.jsxs('div', {
          className: zi.root,
          children: [
            F.jsxs('div', {
              className: zi.message,
              children: [
                F.jsx('span', { className: zi.icon, children: '🧲' }),
                F.jsx('span', { className: zi.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            F.jsx('button', {
              type: 'button',
              className: zi.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
Jh.displayName = 'MagnetSelectingOverlay';
const e1 = '_backdrop_1weqi_1',
  t1 = '_dialog_1weqi_12',
  n1 = '_title_1weqi_22',
  l1 = '_body_1weqi_30',
  a1 = '_actions_1weqi_36',
  i1 = '_button_1weqi_42',
  u1 = '_yes_1weqi_57',
  r1 = '_no_1weqi_63',
  Zn = { backdrop: e1, dialog: t1, title: n1, body: l1, actions: a1, button: i1, yes: u1, no: r1 },
  kh = N.memo(({ open: s, onYes: b, onNo: T }) =>
    s
      ? F.jsx('div', {
          className: Zn.backdrop,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '中断データの再開確認',
          children: F.jsxs('div', {
            className: Zn.dialog,
            children: [
              F.jsx('h2', { className: Zn.title, children: '中断データが見つかりました' }),
              F.jsx('p', { className: Zn.body, children: '中断したところから再開しますか？' }),
              F.jsxs('div', {
                className: Zn.actions,
                children: [
                  F.jsx('button', {
                    type: 'button',
                    className: `${Zn.button} ${Zn.yes}`,
                    onClick: b,
                    children: 'はい',
                  }),
                  F.jsx('button', {
                    type: 'button',
                    className: `${Zn.button} ${Zn.no}`,
                    onClick: T,
                    children: 'いいえ',
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
kh.displayName = 'ResumeDialog';
const s1 = '_gravity_flip_14l5j_1',
  c1 = '_arrow_14l5j_9',
  mh = { gravity_flip: s1, arrow: c1 },
  Fh = N.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? F.jsx('div', {
          className: mh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, T) =>
            F.jsx(
              'span',
              {
                className: mh.arrow,
                style: { left: `${(T + 1) * 14}%`, animationDelay: `${T * 0.12}s` },
                children: '⬆',
              },
              T
            )
          ),
        })
      : null
  );
Fh.displayName = 'SkillEffectOverlay';
const o1 = '_overlay_1xsci_1',
  f1 = '_panel_1xsci_12',
  d1 = '_title_1xsci_22',
  m1 = '_lead_1xsci_30',
  h1 = '_start_1xsci_37',
  wi = { overlay: o1, panel: f1, title: d1, lead: m1, start: h1 },
  v1 = ({ onStart: s }) =>
    F.jsx('div', {
      className: wi.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: F.jsxs('div', {
        className: wi.panel,
        children: [
          F.jsxs('h2', {
            className: wi.title,
            children: ['💖🍓🐱', F.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          F.jsxs('p', {
            className: wi.lead,
            children: [
              '同じアイテム同士をくっつけて',
              F.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          F.jsx('button', {
            type: 'button',
            className: wi.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  g1 = '_backdrop_6euhx_1',
  y1 = '_drawer_6euhx_11',
  p1 = '_header_6euhx_23',
  S1 = '_title_6euhx_30',
  x1 = '_close_6euhx_38',
  E1 = '_row_6euhx_54',
  b1 = '_row_label_6euhx_62',
  T1 = '_suspend_6euhx_68',
  M1 = '_footer_6euhx_88',
  C1 = '_version_6euhx_94',
  nn = {
    backdrop: g1,
    drawer: y1,
    header: p1,
    title: S1,
    close: x1,
    row: E1,
    row_label: b1,
    suspend: T1,
    footer: M1,
    version: C1,
  },
  R1 = '_toggle_1ap46_1',
  A1 = { toggle: R1 },
  $h = N.memo(({ isOn: s, onToggle: b }) =>
    F.jsx('button', {
      type: 'button',
      className: A1.toggle,
      onClick: b,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: F.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
$h.displayName = 'SoundToggle';
const _1 = '_toggle_15urq_1',
  O1 = { toggle: _1 },
  Ic = [{ id: 'gumi', label: 'グミ' }],
  sr = 'gumi',
  Pc = (s) => typeof s == 'string' && Ic.some((b) => b.id === s),
  Wh = N.memo(({ value: s, onChange: b }) => {
    const T = (x) => {
      const h = x.target.value;
      Pc(h) && b(h);
    };
    return F.jsx('select', {
      className: O1.toggle,
      value: s,
      onChange: T,
      'aria-label': 'アセットテーマ',
      children: Ic.map((x) => F.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
Wh.displayName = 'ThemeToggle';
const Ih = N.memo(
  ({
    open: s,
    onClose: b,
    themeId: T,
    onChangeTheme: x,
    isSoundOn: h,
    onToggleSound: i,
    canSuspend: d,
    onSuspend: f,
  }) =>
    s
      ? F.jsx('div', {
          className: nn.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: F.jsxs('aside', {
            className: nn.drawer,
            onClick: (c) => c.stopPropagation(),
            children: [
              F.jsxs('header', {
                className: nn.header,
                children: [
                  F.jsx('h2', { className: nn.title, children: '設定' }),
                  F.jsx('button', {
                    type: 'button',
                    className: nn.close,
                    onClick: b,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              F.jsxs('div', {
                className: nn.row,
                children: [
                  F.jsx('span', { className: nn.row_label, children: 'テーマ' }),
                  F.jsx(Wh, { value: T, onChange: x }),
                ],
              }),
              F.jsxs('div', {
                className: nn.row,
                children: [
                  F.jsx('span', { className: nn.row_label, children: 'サウンド' }),
                  F.jsx($h, { isOn: h, onToggle: i }),
                ],
              }),
              d
                ? F.jsx('button', {
                    type: 'button',
                    className: nn.suspend,
                    onClick: () => {
                      (f(), b());
                    },
                    children: '中断',
                  })
                : null,
              F.jsx('footer', {
                className: nn.footer,
                children: F.jsxs('span', { className: nn.version, children: ['v', '1.0.25'] }),
              }),
            ],
          }),
        })
      : null
);
Ih.displayName = 'SettingsDrawer';
const D1 = '_button_12i3t_1',
  z1 = '_gauge_12i3t_23',
  w1 = '_gauge_track_12i3t_32',
  N1 = '_gauge_fill_12i3t_39',
  B1 = '_gauge_fill_full_12i3t_47',
  U1 = '_icon_12i3t_52',
  H1 = '_ready_12i3t_60',
  L1 = '_fully_ready_12i3t_65',
  Ml = {
    button: D1,
    gauge: z1,
    gauge_track: w1,
    gauge_fill: N1,
    gauge_fill_full: B1,
    icon: U1,
    ready: H1,
    fully_ready: L1,
  },
  ir = 32,
  hh = 40,
  vh = 110,
  j1 = 360,
  gh = (s) => {
    const b = ((s - 90) * Math.PI) / 180;
    return { x: hh + ir * Math.cos(b), y: hh + ir * Math.sin(b) };
  },
  G1 = (s, b) => {
    const T = gh(s),
      x = gh(b),
      h = b - s > 180 ? 1 : 0;
    return `M ${T.x} ${T.y} A ${ir} ${ir} 0 ${h} 1 ${x.x} ${x.y}`;
  },
  Bc = 1,
  Ph = N.memo(({ gauge: s, segmentMax: b, segmentCount: T, canOpen: x, onClick: h }) => {
    const i = Math.round((s / (b * T)) * 100),
      d = j1 / T,
      f = d - vh,
      c = Array.from({ length: T }, (p, v) => {
        const r = v * b;
        return Math.max(0, Math.min(b, s - r)) / b;
      }),
      o = c.filter((p) => p >= 1).length === T;
    return F.jsxs('button', {
      type: 'button',
      className: [Ml.button, x ? Ml.ready : '', o ? Ml.fully_ready : ''].filter(Boolean).join(' '),
      onClick: h,
      disabled: !x,
      'aria-label': x ? '必殺技を選択' : `必殺技ゲージ ${i}%`,
      children: [
        F.jsx('svg', {
          className: Ml.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: c.map((p, v) => {
            const r = v * d + f / 2,
              y = r + vh,
              g = G1(r, y),
              E = p >= 1;
            return F.jsxs(
              'g',
              {
                children: [
                  F.jsx('path', { className: Ml.gauge_track, d: g, pathLength: Bc }),
                  F.jsx('path', {
                    className: `${Ml.gauge_fill} ${E ? Ml.gauge_fill_full : ''}`,
                    d: g,
                    pathLength: Bc,
                    strokeDasharray: `${p} ${Bc - p}`,
                  }),
                ],
              },
              v
            );
          }),
        }),
        F.jsx('span', { className: Ml.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
Ph.displayName = 'SkillButton';
const Y1 = '_backdrop_1xhs1_1',
  V1 = '_menu_1xhs1_12',
  q1 = '_title_1xhs1_21',
  X1 = '_choices_1xhs1_30',
  Q1 = '_choice_1xhs1_30',
  Z1 = '_choice_disabled_1xhs1_60',
  K1 = '_choice_icon_1xhs1_65',
  J1 = '_choice_label_1xhs1_72',
  k1 = '_choice_desc_1xhs1_79',
  F1 = '_choice_cost_1xhs1_85',
  $1 = '_cost_pip_1xhs1_93',
  W1 = '_cancel_1xhs1_101',
  ln = {
    backdrop: Y1,
    menu: V1,
    title: q1,
    choices: X1,
    choice: Q1,
    choice_disabled: Z1,
    choice_icon: K1,
    choice_label: J1,
    choice_desc: k1,
    choice_cost: F1,
    cost_pip: $1,
    cancel: W1,
  },
  Vc = 100,
  qc = 3,
  at = {
    gaugeMax: Vc * qc,
    segmentMax: Vc,
    segmentCount: qc,
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
  ev = { shake: 1, gravityFlip: 1, magnet: qc },
  Ni = (s) => ev[s] * Vc,
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
  tv = N.memo(({ open: s, onSelect: b, onClose: T, canUse: x }) =>
    s
      ? F.jsx('div', {
          className: ln.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: F.jsxs('div', {
            className: ln.menu,
            onClick: (h) => h.stopPropagation(),
            children: [
              F.jsx('h2', { className: ln.title, children: '必殺技を選択' }),
              F.jsx('div', {
                className: ln.choices,
                children: P1.map((h) => {
                  const i = ev[h.kind],
                    d = x[h.kind];
                  return F.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: `${ln.choice} ${d ? '' : ln.choice_disabled}`,
                      onClick: () => d && b(h.kind),
                      disabled: !d,
                      children: [
                        F.jsx('span', {
                          className: ln.choice_icon,
                          'aria-hidden': 'true',
                          children: h.icon,
                        }),
                        F.jsx('span', { className: ln.choice_label, children: h.label }),
                        F.jsx('span', { className: ln.choice_desc, children: h.description }),
                        F.jsx('span', {
                          className: ln.choice_cost,
                          'aria-label': `コスト ${i} ゲージ`,
                          children: Array.from({ length: i }, (f, c) =>
                            F.jsx('span', { className: ln.cost_pip }, c)
                          ),
                        }),
                      ],
                    },
                    h.kind
                  );
                }),
              }),
              F.jsx('button', {
                type: 'button',
                className: ln.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
tv.displayName = 'SkillMenu';
const eS = '_top_bar_15roj_1',
  tS = '_right_15roj_12',
  nS = '_settings_15roj_18',
  Uc = { top_bar: eS, right: tS, settings: nS },
  lS = '_next_1n5pn_1',
  aS = '_label_1n5pn_7',
  iS = '_thumb_1n5pn_14',
  uS = '_image_1n5pn_27',
  Iu = { next: lS, label: aS, thumb: iS, image: uS },
  rS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  nv = N.memo(({ item: s }) =>
    F.jsxs('div', {
      className: Iu.next,
      children: [
        F.jsx('span', { className: Iu.label, children: 'NEXT' }),
        F.jsx('div', {
          className: Iu.thumb,
          'data-testid': 'next-item',
          children: s
            ? F.jsx('img', { src: rS(s.svgPath), alt: s.name, className: Iu.image })
            : null,
        }),
      ],
    })
  );
nv.displayName = 'NextItemPreview';
const sS = '_score_display_pgke7_1',
  cS = '_row_pgke7_7',
  oS = '_label_pgke7_13',
  fS = '_value_pgke7_20',
  dS = '_label_small_pgke7_28',
  mS = '_value_small_pgke7_35',
  Zl = { score_display: sS, row: cS, label: oS, value: fS, label_small: dS, value_small: mS },
  lv = N.memo(({ score: s, bestScore: b }) =>
    F.jsxs('div', {
      className: Zl.score_display,
      children: [
        F.jsxs('div', {
          className: Zl.row,
          children: [
            F.jsx('span', { className: Zl.label, children: 'SCORE' }),
            F.jsx('span', { className: Zl.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        F.jsxs('div', {
          className: Zl.row,
          children: [
            F.jsx('span', { className: Zl.label_small, children: 'BEST' }),
            F.jsx('span', { className: Zl.value_small, children: b }),
          ],
        }),
      ],
    })
  );
lv.displayName = 'ScoreDisplay';
const hS = ({ score: s, bestScore: b, nextItem: T, onOpenSettings: x }) =>
  F.jsxs('header', {
    className: Uc.top_bar,
    children: [
      F.jsx(lv, { score: s, bestScore: b }),
      F.jsxs('div', {
        className: Uc.right,
        children: [
          F.jsx(nv, { item: T }),
          F.jsx('button', {
            type: 'button',
            className: Uc.settings,
            onClick: x,
            'aria-label': '設定を開く',
            children: F.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var nr = { exports: {} };
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
 */ var vS = nr.exports,
  yh;
function gS() {
  return (
    yh ||
      ((yh = 1),
      (function (s, b) {
        (function (x, h) {
          s.exports = h();
        })(vS, function () {
          return (function (T) {
            var x = {};
            function h(i) {
              if (x[i]) return x[i].exports;
              var d = (x[i] = { i, l: !1, exports: {} });
              return (T[i].call(d.exports, d, d.exports, h), (d.l = !0), d.exports);
            }
            return (
              (h.m = T),
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
                  for (var c in i)
                    h.d(
                      f,
                      c,
                      function (m) {
                        return i[m];
                      }.bind(null, c)
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
            function (T, x) {
              var h = {};
              ((T.exports = h),
                (function () {
                  ((h._baseDelta = 1e3 / 60),
                    (h._nextId = 0),
                    (h._seed = 0),
                    (h._nowStartTime = +new Date()),
                    (h._warnedOnce = {}),
                    (h._decomp = null),
                    (h.extend = function (d, f) {
                      var c, m;
                      typeof f == 'boolean' ? ((c = 2), (m = f)) : ((c = 1), (m = !0));
                      for (var o = c; o < arguments.length; o++) {
                        var p = arguments[o];
                        if (p)
                          for (var v in p)
                            m &&
                            p[v] &&
                            p[v].constructor === Object &&
                            (!d[v] || d[v].constructor === Object)
                              ? ((d[v] = d[v] || {}), h.extend(d[v], m, p[v]))
                              : (d[v] = p[v]);
                      }
                      return d;
                    }),
                    (h.clone = function (d, f) {
                      return h.extend({}, f, d);
                    }),
                    (h.keys = function (d) {
                      if (Object.keys) return Object.keys(d);
                      var f = [];
                      for (var c in d) f.push(c);
                      return f;
                    }),
                    (h.values = function (d) {
                      var f = [];
                      if (Object.keys) {
                        for (var c = Object.keys(d), m = 0; m < c.length; m++) f.push(d[c[m]]);
                        return f;
                      }
                      for (var o in d) f.push(d[o]);
                      return f;
                    }),
                    (h.get = function (d, f, c, m) {
                      f = f.split('.').slice(c, m);
                      for (var o = 0; o < f.length; o += 1) d = d[f[o]];
                      return d;
                    }),
                    (h.set = function (d, f, c, m, o) {
                      var p = f.split('.').slice(m, o);
                      return ((h.get(d, f, 0, -1)[p[p.length - 1]] = c), c);
                    }),
                    (h.shuffle = function (d) {
                      for (var f = d.length - 1; f > 0; f--) {
                        var c = Math.floor(h.random() * (f + 1)),
                          m = d[f];
                        ((d[f] = d[c]), (d[c] = m));
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
                    (h.clamp = function (d, f, c) {
                      return d < f ? f : d > c ? c : d;
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
                    (h.deprecated = function (d, f, c) {
                      d[f] = h.chain(function () {
                        h.warnOnce('🔅 deprecated 🔅', c);
                      }, d[f]);
                    }),
                    (h.nextId = function () {
                      return h._nextId++;
                    }),
                    (h.indexOf = function (d, f) {
                      if (d.indexOf) return d.indexOf(f);
                      for (var c = 0; c < d.length; c++) if (d[c] === f) return c;
                      return -1;
                    }),
                    (h.map = function (d, f) {
                      if (d.map) return d.map(f);
                      for (var c = [], m = 0; m < d.length; m += 1) c.push(f(d[m]));
                      return c;
                    }),
                    (h.topologicalSort = function (d) {
                      var f = [],
                        c = [],
                        m = [];
                      for (var o in d) !c[o] && !m[o] && h._topologicalSort(o, c, m, d, f);
                      return f;
                    }),
                    (h._topologicalSort = function (d, f, c, m, o) {
                      var p = m[d] || [];
                      c[d] = !0;
                      for (var v = 0; v < p.length; v += 1) {
                        var r = p[v];
                        c[r] || f[r] || h._topologicalSort(r, f, c, m, o);
                      }
                      ((c[d] = !1), (f[d] = !0), o.push(d));
                    }),
                    (h.chain = function () {
                      for (var d = [], f = 0; f < arguments.length; f += 1) {
                        var c = arguments[f];
                        c._chained ? d.push.apply(d, c._chained) : d.push(c);
                      }
                      var m = function () {
                        for (
                          var o, p = new Array(arguments.length), v = 0, r = arguments.length;
                          v < r;
                          v++
                        )
                          p[v] = arguments[v];
                        for (v = 0; v < d.length; v += 1) {
                          var y = d[v].apply(o, p);
                          typeof y < 'u' && (o = y);
                        }
                        return o;
                      };
                      return ((m._chained = d), m);
                    }),
                    (h.chainPathBefore = function (d, f, c) {
                      return h.set(d, f, h.chain(c, h.get(d, f)));
                    }),
                    (h.chainPathAfter = function (d, f, c) {
                      return h.set(d, f, h.chain(h.get(d, f), c));
                    }),
                    (h.setDecomp = function (d) {
                      h._decomp = d;
                    }),
                    (h.getDecomp = function () {
                      var d = h._decomp;
                      try {
                        (!d && typeof window < 'u' && (d = window.decomp),
                          !d && typeof Jm < 'u' && (d = Jm.decomp));
                      } catch {
                        d = null;
                      }
                      return d;
                    }));
                })());
            },
            function (T, x) {
              var h = {};
              ((T.exports = h),
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
                      for (var c = 0; c < d.length; c++) {
                        var m = d[c];
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
                        c = i.max.y - i.min.y;
                      ((i.min.x = d.x), (i.max.x = d.x + f), (i.min.y = d.y), (i.max.y = d.y + c));
                    }));
                })());
            },
            function (T, x) {
              var h = {};
              ((T.exports = h),
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
                      var c = Math.cos(d),
                        m = Math.sin(d);
                      f || (f = {});
                      var o = i.x * c - i.y * m;
                      return ((f.y = i.x * m + i.y * c), (f.x = o), f);
                    }),
                    (h.rotateAbout = function (i, d, f, c) {
                      var m = Math.cos(d),
                        o = Math.sin(d);
                      c || (c = {});
                      var p = f.x + ((i.x - f.x) * m - (i.y - f.y) * o);
                      return ((c.y = f.y + ((i.x - f.x) * o + (i.y - f.y) * m)), (c.x = p), c);
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
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(2),
                f = h(0);
              (function () {
                ((i.create = function (c, m) {
                  for (var o = [], p = 0; p < c.length; p++) {
                    var v = c[p],
                      r = { x: v.x, y: v.y, index: p, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (c, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      p = [];
                    return (
                      c.replace(o, function (v, r, y) {
                        p.push({ x: parseFloat(r), y: parseFloat(y) });
                      }),
                      i.create(p, m)
                    );
                  }),
                  (i.centre = function (c) {
                    for (
                      var m = i.area(c, !0), o = { x: 0, y: 0 }, p, v, r, y = 0;
                      y < c.length;
                      y++
                    )
                      ((r = (y + 1) % c.length),
                        (p = d.cross(c[y], c[r])),
                        (v = d.mult(d.add(c[y], c[r]), p)),
                        (o = d.add(o, v)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (c) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < c.length; o++)
                      ((m.x += c[o].x), (m.y += c[o].y));
                    return d.div(m, c.length);
                  }),
                  (i.area = function (c, m) {
                    for (var o = 0, p = c.length - 1, v = 0; v < c.length; v++)
                      ((o += (c[p].x - c[v].x) * (c[p].y + c[v].y)), (p = v));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (c, m) {
                    for (var o = 0, p = 0, v = c, r, y, g = 0; g < v.length; g++)
                      ((y = (g + 1) % v.length),
                        (r = Math.abs(d.cross(v[y], v[g]))),
                        (o += r * (d.dot(v[y], v[y]) + d.dot(v[y], v[g]) + d.dot(v[g], v[g]))),
                        (p += r));
                    return (m / 6) * (o / p);
                  }),
                  (i.translate = function (c, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var p = c.length,
                      v = m.x * o,
                      r = m.y * o,
                      y;
                    for (y = 0; y < p; y++) ((c[y].x += v), (c[y].y += r));
                    return c;
                  }),
                  (i.rotate = function (c, m, o) {
                    if (m !== 0) {
                      var p = Math.cos(m),
                        v = Math.sin(m),
                        r = o.x,
                        y = o.y,
                        g = c.length,
                        E,
                        R,
                        D,
                        w;
                      for (w = 0; w < g; w++)
                        ((E = c[w]),
                          (R = E.x - r),
                          (D = E.y - y),
                          (E.x = r + (R * p - D * v)),
                          (E.y = y + (R * v + D * p)));
                      return c;
                    }
                  }),
                  (i.contains = function (c, m) {
                    for (var o = m.x, p = m.y, v = c.length, r = c[v - 1], y, g = 0; g < v; g++) {
                      if (((y = c[g]), (o - r.x) * (y.y - r.y) + (p - r.y) * (r.x - y.x) > 0))
                        return !1;
                      r = y;
                    }
                    return !0;
                  }),
                  (i.scale = function (c, m, o, p) {
                    if (m === 1 && o === 1) return c;
                    p = p || i.centre(c);
                    for (var v, r, y = 0; y < c.length; y++)
                      ((v = c[y]),
                        (r = d.sub(v, p)),
                        (c[y].x = p.x + r.x * m),
                        (c[y].y = p.y + r.y * o));
                    return c;
                  }),
                  (i.chamfer = function (c, m, o, p, v) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (p = p || 2),
                      (v = v || 14));
                    for (var r = [], y = 0; y < c.length; y++) {
                      var g = c[y - 1 >= 0 ? y - 1 : c.length - 1],
                        E = c[y],
                        R = c[(y + 1) % c.length],
                        D = m[y < m.length ? y : m.length - 1];
                      if (D === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - g.y, y: g.x - E.x }),
                        H = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(D, 2)),
                        _ = d.mult(f.clone(w), D),
                        O = d.normalise(d.mult(d.add(w, H), 0.5)),
                        A = d.sub(E, d.mult(O, M)),
                        B = o;
                      (o === -1 && (B = Math.pow(D, 0.32) * 1.75),
                        (B = f.clamp(B, p, v)),
                        B % 2 === 1 && (B += 1));
                      for (var z = Math.acos(d.dot(w, H)), L = z / B, G = 0; G < B; G++)
                        r.push(d.add(d.rotate(_, L * G), A));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (c) {
                    var m = i.mean(c);
                    return (
                      c.sort(function (o, p) {
                        return d.angle(m, o) - d.angle(m, p);
                      }),
                      c
                    );
                  }),
                  (i.isConvex = function (c) {
                    var m = 0,
                      o = c.length,
                      p,
                      v,
                      r,
                      y;
                    if (o < 3) return null;
                    for (p = 0; p < o; p++)
                      if (
                        ((v = (p + 1) % o),
                        (r = (p + 2) % o),
                        (y = (c[v].x - c[p].x) * (c[r].y - c[v].y)),
                        (y -= (c[v].y - c[p].y) * (c[r].x - c[v].x)),
                        y < 0 ? (m |= 1) : y > 0 && (m |= 2),
                        m === 3)
                      )
                        return !1;
                    return m !== 0 ? !0 : null;
                  }),
                  (i.hull = function (c) {
                    var m = [],
                      o = [],
                      p,
                      v;
                    for (
                      c = c.slice(0),
                        c.sort(function (r, y) {
                          var g = r.x - y.x;
                          return g !== 0 ? g : r.y - y.y;
                        }),
                        v = 0;
                      v < c.length;
                      v += 1
                    ) {
                      for (
                        p = c[v];
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], p) <= 0;
                      )
                        o.pop();
                      o.push(p);
                    }
                    for (v = c.length - 1; v >= 0; v -= 1) {
                      for (
                        p = c[v];
                        m.length >= 2 && d.cross3(m[m.length - 2], m[m.length - 1], p) <= 0;
                      )
                        m.pop();
                      m.push(p);
                    }
                    return (m.pop(), o.pop(), m.concat(o));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(2),
                c = h(7),
                m = h(0),
                o = h(1),
                p = h(11);
              (function () {
                ((i._timeCorrection = !0),
                  (i._inertiaScale = 4),
                  (i._nextCollidingGroupId = 1),
                  (i._nextNonCollidingGroupId = -1),
                  (i._nextCategory = 1),
                  (i._baseDelta = 1e3 / 60),
                  (i.create = function (r) {
                    var y = {
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
                      g = m.extend(y, r);
                    return (v(g, r), g);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var v = function (r, y) {
                  ((y = y || {}),
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
                    p.rotate(r.axes, r.angle),
                    o.update(r.bounds, r.vertices, r.velocity),
                    i.set(r, {
                      axes: y.axes || r.axes,
                      area: y.area || r.area,
                      mass: y.mass || r.mass,
                      inertia: y.inertia || r.inertia,
                    }));
                  var g = r.isStatic
                      ? '#14151f'
                      : m.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']),
                    E = r.isStatic ? '#555' : '#ccc',
                    R = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || g),
                    (r.render.strokeStyle = r.render.strokeStyle || E),
                    (r.render.lineWidth = r.render.lineWidth || R),
                    (r.render.sprite.xOffset +=
                      -(r.bounds.min.x - r.position.x) / (r.bounds.max.x - r.bounds.min.x)),
                    (r.render.sprite.yOffset +=
                      -(r.bounds.min.y - r.position.y) / (r.bounds.max.y - r.bounds.min.y)));
                };
                ((i.set = function (r, y, g) {
                  var E;
                  typeof y == 'string' && ((E = y), (y = {}), (y[E] = g));
                  for (E in y)
                    if (Object.prototype.hasOwnProperty.call(y, E))
                      switch (((g = y[E]), E)) {
                        case 'isStatic':
                          i.setStatic(r, g);
                          break;
                        case 'isSleeping':
                          c.set(r, g);
                          break;
                        case 'mass':
                          i.setMass(r, g);
                          break;
                        case 'density':
                          i.setDensity(r, g);
                          break;
                        case 'inertia':
                          i.setInertia(r, g);
                          break;
                        case 'vertices':
                          i.setVertices(r, g);
                          break;
                        case 'position':
                          i.setPosition(r, g);
                          break;
                        case 'angle':
                          i.setAngle(r, g);
                          break;
                        case 'velocity':
                          i.setVelocity(r, g);
                          break;
                        case 'angularVelocity':
                          i.setAngularVelocity(r, g);
                          break;
                        case 'speed':
                          i.setSpeed(r, g);
                          break;
                        case 'angularSpeed':
                          i.setAngularSpeed(r, g);
                          break;
                        case 'parts':
                          i.setParts(r, g);
                          break;
                        case 'centre':
                          i.setCentre(r, g);
                          break;
                        default:
                          r[E] = g;
                      }
                }),
                  (i.setStatic = function (r, y) {
                    for (var g = 0; g < r.parts.length; g++) {
                      var E = r.parts[g];
                      (y
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
                        (E.isStatic = y));
                    }
                  }),
                  (i.setMass = function (r, y) {
                    var g = r.inertia / (r.mass / 6);
                    ((r.inertia = g * (y / 6)),
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
                    (y[0].body === r ? (r.vertices = y) : (r.vertices = d.create(y, r)),
                      (r.axes = p.fromVertices(r.vertices)),
                      (r.area = d.area(r.vertices)),
                      i.setMass(r, r.density * r.area));
                    var g = d.centre(r.vertices);
                    (d.translate(r.vertices, g, -1),
                      i.setInertia(r, i._inertiaScale * d.inertia(r.vertices, r.mass)),
                      d.translate(r.vertices, r.position),
                      o.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, y, g) {
                    var E;
                    for (
                      y = y.slice(0), r.parts.length = 0, r.parts.push(r), r.parent = r, E = 0;
                      E < y.length;
                      E++
                    ) {
                      var R = y[E];
                      R !== r && ((R.parent = r), r.parts.push(R));
                    }
                    if (r.parts.length !== 1) {
                      if (((g = typeof g < 'u' ? g : !0), g)) {
                        var D = [];
                        for (E = 0; E < y.length; E++) D = D.concat(y[E].vertices);
                        d.clockwiseSort(D);
                        var w = d.hull(D),
                          H = d.centre(w);
                        (i.setVertices(r, w), d.translate(r.vertices, H));
                      }
                      var M = i._totalProperties(r);
                      ((r.area = M.area),
                        (r.parent = r),
                        (r.position.x = M.centre.x),
                        (r.position.y = M.centre.y),
                        (r.positionPrev.x = M.centre.x),
                        (r.positionPrev.y = M.centre.y),
                        i.setMass(r, M.mass),
                        i.setInertia(r, M.inertia),
                        i.setPosition(r, M.centre));
                    }
                  }),
                  (i.setCentre = function (r, y, g) {
                    g
                      ? ((r.positionPrev.x += y.x),
                        (r.positionPrev.y += y.y),
                        (r.position.x += y.x),
                        (r.position.y += y.y))
                      : ((r.positionPrev.x = y.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = y.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = y.x),
                        (r.position.y = y.y));
                  }),
                  (i.setPosition = function (r, y, g) {
                    var E = f.sub(y, r.position);
                    g
                      ? ((r.positionPrev.x = r.position.x),
                        (r.positionPrev.y = r.position.y),
                        (r.velocity.x = E.x),
                        (r.velocity.y = E.y),
                        (r.speed = f.magnitude(E)))
                      : ((r.positionPrev.x += E.x), (r.positionPrev.y += E.y));
                    for (var R = 0; R < r.parts.length; R++) {
                      var D = r.parts[R];
                      ((D.position.x += E.x),
                        (D.position.y += E.y),
                        d.translate(D.vertices, E),
                        o.update(D.bounds, D.vertices, r.velocity));
                    }
                  }),
                  (i.setAngle = function (r, y, g) {
                    var E = y - r.angle;
                    g
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = E),
                        (r.angularSpeed = Math.abs(E)))
                      : (r.anglePrev += E);
                    for (var R = 0; R < r.parts.length; R++) {
                      var D = r.parts[R];
                      ((D.angle += E),
                        d.rotate(D.vertices, E, r.position),
                        p.rotate(D.axes, E),
                        o.update(D.bounds, D.vertices, r.velocity),
                        R > 0 && f.rotateAbout(D.position, E, r.position, D.position));
                    }
                  }),
                  (i.setVelocity = function (r, y) {
                    var g = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - y.x * g),
                      (r.positionPrev.y = r.position.y - y.y * g),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / g),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / g),
                      (r.speed = f.magnitude(r.velocity)));
                  }),
                  (i.getVelocity = function (r) {
                    var y = i._baseDelta / r.deltaTime;
                    return {
                      x: (r.position.x - r.positionPrev.x) * y,
                      y: (r.position.y - r.positionPrev.y) * y,
                    };
                  }),
                  (i.getSpeed = function (r) {
                    return f.magnitude(i.getVelocity(r));
                  }),
                  (i.setSpeed = function (r, y) {
                    i.setVelocity(r, f.mult(f.normalise(i.getVelocity(r)), y));
                  }),
                  (i.setAngularVelocity = function (r, y) {
                    var g = r.deltaTime / i._baseDelta;
                    ((r.anglePrev = r.angle - y * g),
                      (r.angularVelocity = (r.angle - r.anglePrev) / g),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.getAngularVelocity = function (r) {
                    return ((r.angle - r.anglePrev) * i._baseDelta) / r.deltaTime;
                  }),
                  (i.getAngularSpeed = function (r) {
                    return Math.abs(i.getAngularVelocity(r));
                  }),
                  (i.setAngularSpeed = function (r, y) {
                    i.setAngularVelocity(r, m.sign(i.getAngularVelocity(r)) * y);
                  }),
                  (i.translate = function (r, y, g) {
                    i.setPosition(r, f.add(r.position, y), g);
                  }),
                  (i.rotate = function (r, y, g, E) {
                    if (!g) i.setAngle(r, r.angle + y, E);
                    else {
                      var R = Math.cos(y),
                        D = Math.sin(y),
                        w = r.position.x - g.x,
                        H = r.position.y - g.y;
                      (i.setPosition(r, { x: g.x + (w * R - H * D), y: g.y + (w * D + H * R) }, E),
                        i.setAngle(r, r.angle + y, E));
                    }
                  }),
                  (i.scale = function (r, y, g, E) {
                    var R = 0,
                      D = 0;
                    E = E || r.position;
                    for (var w = 0; w < r.parts.length; w++) {
                      var H = r.parts[w];
                      (d.scale(H.vertices, y, g, E),
                        (H.axes = p.fromVertices(H.vertices)),
                        (H.area = d.area(H.vertices)),
                        i.setMass(H, r.density * H.area),
                        d.translate(H.vertices, { x: -H.position.x, y: -H.position.y }),
                        i.setInertia(H, i._inertiaScale * d.inertia(H.vertices, H.mass)),
                        d.translate(H.vertices, { x: H.position.x, y: H.position.y }),
                        w > 0 && ((R += H.area), (D += H.inertia)),
                        (H.position.x = E.x + (H.position.x - E.x) * y),
                        (H.position.y = E.y + (H.position.y - E.y) * g),
                        o.update(H.bounds, H.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (i.setMass(r, r.density * R), i.setInertia(r, D))),
                      r.circleRadius &&
                        (y === g ? (r.circleRadius *= y) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, y) {
                    y = (typeof y < 'u' ? y : 1e3 / 60) * r.timeScale;
                    var g = y * y,
                      E = i._timeCorrection ? y / (r.deltaTime || y) : 1,
                      R = 1 - r.frictionAir * (y / m._baseDelta),
                      D = (r.position.x - r.positionPrev.x) * E,
                      w = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = D * R + (r.force.x / r.mass) * g),
                      (r.velocity.y = w * R + (r.force.y / r.mass) * g),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = y),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * E + (r.torque / r.inertia) * g),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var H = 0; H < r.parts.length; H++) {
                      var M = r.parts[H];
                      (d.translate(M.vertices, r.velocity),
                        H > 0 && ((M.position.x += r.velocity.x), (M.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (d.rotate(M.vertices, r.angularVelocity, r.position),
                          p.rotate(M.axes, r.angularVelocity),
                          H > 0 &&
                            f.rotateAbout(M.position, r.angularVelocity, r.position, M.position)),
                        o.update(M.bounds, M.vertices, r.velocity));
                    }
                  }),
                  (i.updateVelocities = function (r) {
                    var y = i._baseDelta / r.deltaTime,
                      g = r.velocity;
                    ((g.x = (r.position.x - r.positionPrev.x) * y),
                      (g.y = (r.position.y - r.positionPrev.y) * y),
                      (r.speed = Math.sqrt(g.x * g.x + g.y * g.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * y),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.applyForce = function (r, y, g) {
                    var E = { x: y.x - r.position.x, y: y.y - r.position.y };
                    ((r.force.x += g.x), (r.force.y += g.y), (r.torque += E.x * g.y - E.y * g.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var y = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        g = r.parts.length === 1 ? 0 : 1;
                      g < r.parts.length;
                      g++
                    ) {
                      var E = r.parts[g],
                        R = E.mass !== 1 / 0 ? E.mass : 1;
                      ((y.mass += R),
                        (y.area += E.area),
                        (y.inertia += E.inertia),
                        (y.centre = f.add(y.centre, f.mult(E.position, R))));
                    }
                    return ((y.centre = f.div(y.centre, y.mass)), y);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(0);
              (function () {
                ((i.on = function (f, c, m) {
                  for (var o = c.split(' '), p, v = 0; v < o.length; v++)
                    ((p = o[v]),
                      (f.events = f.events || {}),
                      (f.events[p] = f.events[p] || []),
                      f.events[p].push(m));
                  return m;
                }),
                  (i.off = function (f, c, m) {
                    if (!c) {
                      f.events = {};
                      return;
                    }
                    typeof c == 'function' && ((m = c), (c = d.keys(f.events).join(' ')));
                    for (var o = c.split(' '), p = 0; p < o.length; p++) {
                      var v = f.events[o[p]],
                        r = [];
                      if (m && v) for (var y = 0; y < v.length; y++) v[y] !== m && r.push(v[y]);
                      f.events[o[p]] = r;
                    }
                  }),
                  (i.trigger = function (f, c, m) {
                    var o,
                      p,
                      v,
                      r,
                      y = f.events;
                    if (y && d.keys(y).length > 0) {
                      (m || (m = {}), (o = c.split(' ')));
                      for (var g = 0; g < o.length; g++)
                        if (((p = o[g]), (v = y[p]), v)) {
                          ((r = d.clone(m, !1)), (r.name = p), (r.source = f));
                          for (var E = 0; E < v.length; E++) v[E].apply(f, [r]);
                        }
                    }
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(5),
                f = h(0),
                c = h(1),
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
                  (i.setModified = function (o, p, v, r) {
                    if (
                      ((o.isModified = p),
                      p &&
                        o.cache &&
                        ((o.cache.allBodies = null),
                        (o.cache.allConstraints = null),
                        (o.cache.allComposites = null)),
                      v && o.parent && i.setModified(o.parent, p, v, r),
                      r)
                    )
                      for (var y = 0; y < o.composites.length; y++) {
                        var g = o.composites[y];
                        i.setModified(g, p, v, r);
                      }
                  }),
                  (i.add = function (o, p) {
                    var v = [].concat(p);
                    d.trigger(o, 'beforeAdd', { object: p });
                    for (var r = 0; r < v.length; r++) {
                      var y = v[r];
                      switch (y.type) {
                        case 'body':
                          if (y.parent !== y) {
                            f.warn(
                              'Composite.add: skipped adding a compound body part (you must add its parent instead)'
                            );
                            break;
                          }
                          i.addBody(o, y);
                          break;
                        case 'constraint':
                          i.addConstraint(o, y);
                          break;
                        case 'composite':
                          i.addComposite(o, y);
                          break;
                        case 'mouseConstraint':
                          i.addConstraint(o, y.constraint);
                          break;
                      }
                    }
                    return (d.trigger(o, 'afterAdd', { object: p }), o);
                  }),
                  (i.remove = function (o, p, v) {
                    var r = [].concat(p);
                    d.trigger(o, 'beforeRemove', { object: p });
                    for (var y = 0; y < r.length; y++) {
                      var g = r[y];
                      switch (g.type) {
                        case 'body':
                          i.removeBody(o, g, v);
                          break;
                        case 'constraint':
                          i.removeConstraint(o, g, v);
                          break;
                        case 'composite':
                          i.removeComposite(o, g, v);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(o, g.constraint);
                          break;
                      }
                    }
                    return (d.trigger(o, 'afterRemove', { object: p }), o);
                  }),
                  (i.addComposite = function (o, p) {
                    return (o.composites.push(p), (p.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, p, v) {
                    var r = f.indexOf(o.composites, p);
                    if (r !== -1) {
                      var y = i.allBodies(p);
                      i.removeCompositeAt(o, r);
                      for (var g = 0; g < y.length; g++) y[g].sleepCounter = 0;
                    }
                    if (v)
                      for (var g = 0; g < o.composites.length; g++)
                        i.removeComposite(o.composites[g], p, !0);
                    return o;
                  }),
                  (i.removeCompositeAt = function (o, p) {
                    return (o.composites.splice(p, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addBody = function (o, p) {
                    return (o.bodies.push(p), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeBody = function (o, p, v) {
                    var r = f.indexOf(o.bodies, p);
                    if ((r !== -1 && (i.removeBodyAt(o, r), (p.sleepCounter = 0)), v))
                      for (var y = 0; y < o.composites.length; y++)
                        i.removeBody(o.composites[y], p, !0);
                    return o;
                  }),
                  (i.removeBodyAt = function (o, p) {
                    return (o.bodies.splice(p, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addConstraint = function (o, p) {
                    return (o.constraints.push(p), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeConstraint = function (o, p, v) {
                    var r = f.indexOf(o.constraints, p);
                    if ((r !== -1 && i.removeConstraintAt(o, r), v))
                      for (var y = 0; y < o.composites.length; y++)
                        i.removeConstraint(o.composites[y], p, !0);
                    return o;
                  }),
                  (i.removeConstraintAt = function (o, p) {
                    return (o.constraints.splice(p, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.clear = function (o, p, v) {
                    if (v)
                      for (var r = 0; r < o.composites.length; r++) i.clear(o.composites[r], p, !0);
                    return (
                      p
                        ? (o.bodies = o.bodies.filter(function (y) {
                            return y.isStatic;
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
                    for (var p = [].concat(o.bodies), v = 0; v < o.composites.length; v++)
                      p = p.concat(i.allBodies(o.composites[v]));
                    return (o.cache && (o.cache.allBodies = p), p);
                  }),
                  (i.allConstraints = function (o) {
                    if (o.cache && o.cache.allConstraints) return o.cache.allConstraints;
                    for (var p = [].concat(o.constraints), v = 0; v < o.composites.length; v++)
                      p = p.concat(i.allConstraints(o.composites[v]));
                    return (o.cache && (o.cache.allConstraints = p), p);
                  }),
                  (i.allComposites = function (o) {
                    if (o.cache && o.cache.allComposites) return o.cache.allComposites;
                    for (var p = [].concat(o.composites), v = 0; v < o.composites.length; v++)
                      p = p.concat(i.allComposites(o.composites[v]));
                    return (o.cache && (o.cache.allComposites = p), p);
                  }),
                  (i.get = function (o, p, v) {
                    var r, y;
                    switch (v) {
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
                      ? ((y = r.filter(function (g) {
                          return g.id.toString() === p.toString();
                        })),
                        y.length === 0 ? null : y[0])
                      : null;
                  }),
                  (i.move = function (o, p, v) {
                    return (i.remove(o, p), i.add(v, p), o);
                  }),
                  (i.rebase = function (o) {
                    for (
                      var p = i.allBodies(o).concat(i.allConstraints(o)).concat(i.allComposites(o)),
                        v = 0;
                      v < p.length;
                      v++
                    )
                      p[v].id = f.nextId();
                    return o;
                  }),
                  (i.translate = function (o, p, v) {
                    for (var r = v ? i.allBodies(o) : o.bodies, y = 0; y < r.length; y++)
                      m.translate(r[y], p);
                    return o;
                  }),
                  (i.rotate = function (o, p, v, r) {
                    for (
                      var y = Math.cos(p),
                        g = Math.sin(p),
                        E = r ? i.allBodies(o) : o.bodies,
                        R = 0;
                      R < E.length;
                      R++
                    ) {
                      var D = E[R],
                        w = D.position.x - v.x,
                        H = D.position.y - v.y;
                      (m.setPosition(D, { x: v.x + (w * y - H * g), y: v.y + (w * g + H * y) }),
                        m.rotate(D, p));
                    }
                    return o;
                  }),
                  (i.scale = function (o, p, v, r, y) {
                    for (var g = y ? i.allBodies(o) : o.bodies, E = 0; E < g.length; E++) {
                      var R = g[E],
                        D = R.position.x - r.x,
                        w = R.position.y - r.y;
                      (m.setPosition(R, { x: r.x + D * p, y: r.y + w * v }), m.scale(R, p, v));
                    }
                    return o;
                  }),
                  (i.bounds = function (o) {
                    for (var p = i.allBodies(o), v = [], r = 0; r < p.length; r += 1) {
                      var y = p[r];
                      v.push(y.bounds.min, y.bounds.max);
                    }
                    return c.create(v);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(4),
                f = h(5),
                c = h(0);
              (function () {
                ((i._motionWakeThreshold = 0.18),
                  (i._motionSleepThreshold = 0.08),
                  (i._minBias = 0.9),
                  (i.update = function (m, o) {
                    for (
                      var p = o / c._baseDelta, v = i._motionSleepThreshold, r = 0;
                      r < m.length;
                      r++
                    ) {
                      var y = m[r],
                        g = d.getSpeed(y),
                        E = d.getAngularSpeed(y),
                        R = g * g + E * E;
                      if (y.force.x !== 0 || y.force.y !== 0) {
                        i.set(y, !1);
                        continue;
                      }
                      var D = Math.min(y.motion, R),
                        w = Math.max(y.motion, R);
                      ((y.motion = i._minBias * D + (1 - i._minBias) * w),
                        y.sleepThreshold > 0 && y.motion < v
                          ? ((y.sleepCounter += 1),
                            y.sleepCounter >= y.sleepThreshold / p && i.set(y, !0))
                          : y.sleepCounter > 0 && (y.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (m) {
                    for (var o = i._motionSleepThreshold, p = 0; p < m.length; p++) {
                      var v = m[p];
                      if (v.isActive) {
                        var r = v.collision,
                          y = r.bodyA.parent,
                          g = r.bodyB.parent;
                        if (
                          !((y.isSleeping && g.isSleeping) || y.isStatic || g.isStatic) &&
                          (y.isSleeping || g.isSleeping)
                        ) {
                          var E = y.isSleeping && !y.isStatic ? y : g,
                            R = E === y ? g : y;
                          !E.isStatic && R.motion > o && i.set(E, !1);
                        }
                      }
                    }
                  }),
                  (i.set = function (m, o) {
                    var p = m.isSleeping;
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
                        p || f.trigger(m, 'sleepStart'))
                      : ((m.isSleeping = !1), (m.sleepCounter = 0), p && f.trigger(m, 'sleepEnd'));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(9);
              (function () {
                var c = [],
                  m = { overlap: 0, axis: null },
                  o = { overlap: 0, axis: null };
                ((i.create = function (p, v) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: p,
                    bodyB: v,
                    parentA: p.parent,
                    parentB: v.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (p, v, r) {
                    if (
                      (i._overlapAxes(m, p.vertices, v.vertices, p.axes),
                      m.overlap <= 0 ||
                        (i._overlapAxes(o, v.vertices, p.vertices, v.axes), o.overlap <= 0))
                    )
                      return null;
                    var y = r && r.table[f.id(p, v)],
                      g;
                    (y
                      ? (g = y.collision)
                      : ((g = i.create(p, v)),
                        (g.collided = !0),
                        (g.bodyA = p.id < v.id ? p : v),
                        (g.bodyB = p.id < v.id ? v : p),
                        (g.parentA = g.bodyA.parent),
                        (g.parentB = g.bodyB.parent)),
                      (p = g.bodyA),
                      (v = g.bodyB));
                    var E;
                    m.overlap < o.overlap ? (E = m) : (E = o);
                    var R = g.normal,
                      D = g.tangent,
                      w = g.penetration,
                      H = g.supports,
                      M = E.overlap,
                      _ = E.axis,
                      O = _.x,
                      A = _.y,
                      B = v.position.x - p.position.x,
                      z = v.position.y - p.position.y;
                    (O * B + A * z >= 0 && ((O = -O), (A = -A)),
                      (R.x = O),
                      (R.y = A),
                      (D.x = -A),
                      (D.y = O),
                      (w.x = O * M),
                      (w.y = A * M),
                      (g.depth = M));
                    var L = i._findSupports(p, v, R, 1),
                      G = 0;
                    if (
                      (d.contains(p.vertices, L[0]) && (H[G++] = L[0]),
                      d.contains(p.vertices, L[1]) && (H[G++] = L[1]),
                      G < 2)
                    ) {
                      var J = i._findSupports(v, p, R, -1);
                      (d.contains(v.vertices, J[0]) && (H[G++] = J[0]),
                        G < 2 && d.contains(v.vertices, J[1]) && (H[G++] = J[1]));
                    }
                    return (G === 0 && (H[G++] = L[0]), (g.supportCount = G), g);
                  }),
                  (i._overlapAxes = function (p, v, r, y) {
                    var g = v.length,
                      E = r.length,
                      R = v[0].x,
                      D = v[0].y,
                      w = r[0].x,
                      H = r[0].y,
                      M = y.length,
                      _ = Number.MAX_VALUE,
                      O = 0,
                      A,
                      B,
                      z,
                      L,
                      G,
                      J;
                    for (G = 0; G < M; G++) {
                      var te = y[G],
                        ee = te.x,
                        V = te.y,
                        K = R * ee + D * V,
                        ne = w * ee + H * V,
                        se = K,
                        he = ne;
                      for (J = 1; J < g; J += 1)
                        ((L = v[J].x * ee + v[J].y * V), L > se ? (se = L) : L < K && (K = L));
                      for (J = 1; J < E; J += 1)
                        ((L = r[J].x * ee + r[J].y * V), L > he ? (he = L) : L < ne && (ne = L));
                      if (
                        ((B = se - ne),
                        (z = he - K),
                        (A = B < z ? B : z),
                        A < _ && ((_ = A), (O = G), A <= 0))
                      )
                        break;
                    }
                    ((p.axis = y[O]), (p.overlap = _));
                  }),
                  (i._findSupports = function (p, v, r, y) {
                    var g = v.vertices,
                      E = g.length,
                      R = p.position.x,
                      D = p.position.y,
                      w = r.x * y,
                      H = r.y * y,
                      M = g[0],
                      _ = M,
                      O = w * (R - _.x) + H * (D - _.y),
                      A,
                      B,
                      z;
                    for (z = 1; z < E; z += 1)
                      ((_ = g[z]),
                        (B = w * (R - _.x) + H * (D - _.y)),
                        B < O && ((O = B), (M = _)));
                    return (
                      (A = g[(E + M.index - 1) % E]),
                      (O = w * (R - A.x) + H * (D - A.y)),
                      (_ = g[(M.index + 1) % E]),
                      w * (R - _.x) + H * (D - _.y) < O
                        ? ((c[0] = M), (c[1] = _), c)
                        : ((c[0] = M), (c[1] = A), c)
                    );
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(16);
              (function () {
                ((i.create = function (f, c) {
                  var m = f.bodyA,
                    o = f.bodyB,
                    p = {
                      id: i.id(m, o),
                      bodyA: m,
                      bodyB: o,
                      collision: f,
                      contacts: [d.create(), d.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: m.isSensor || o.isSensor,
                      timeCreated: c,
                      timeUpdated: c,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (i.update(p, f, c), p);
                }),
                  (i.update = function (f, c, m) {
                    var o = c.supports,
                      p = c.supportCount,
                      v = f.contacts,
                      r = c.parentA,
                      y = c.parentB;
                    ((f.isActive = !0),
                      (f.timeUpdated = m),
                      (f.collision = c),
                      (f.separation = c.depth),
                      (f.inverseMass = r.inverseMass + y.inverseMass),
                      (f.friction = r.friction < y.friction ? r.friction : y.friction),
                      (f.frictionStatic =
                        r.frictionStatic > y.frictionStatic ? r.frictionStatic : y.frictionStatic),
                      (f.restitution =
                        r.restitution > y.restitution ? r.restitution : y.restitution),
                      (f.slop = r.slop > y.slop ? r.slop : y.slop),
                      (f.contactCount = p),
                      (c.pair = f));
                    var g = o[0],
                      E = v[0],
                      R = o[1],
                      D = v[1];
                    ((D.vertex === g || E.vertex === R) && ((v[1] = E), (v[0] = E = D), (D = v[1])),
                      (E.vertex = g),
                      (D.vertex = R));
                  }),
                  (i.setActive = function (f, c, m) {
                    c
                      ? ((f.isActive = !0), (f.timeUpdated = m))
                      : ((f.isActive = !1), (f.contactCount = 0));
                  }),
                  (i.id = function (f, c) {
                    return f.id < c.id
                      ? f.id.toString(36) + ':' + c.id.toString(36)
                      : c.id.toString(36) + ':' + f.id.toString(36);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(2),
                c = h(7),
                m = h(1),
                o = h(11),
                p = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (v) {
                    var r = v;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var y = r.bodyA ? f.add(r.bodyA.position, r.pointA) : r.pointA,
                      g = r.bodyB ? f.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = f.magnitude(f.sub(y, g));
                    ((r.length = typeof r.length < 'u' ? r.length : E),
                      (r.id = r.id || p.nextId()),
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
                      (r.render = p.extend(R, r.render)),
                      r
                    );
                  }),
                  (i.preSolveAll = function (v) {
                    for (var r = 0; r < v.length; r += 1) {
                      var y = v[r],
                        g = y.constraintImpulse;
                      y.isStatic ||
                        (g.x === 0 && g.y === 0 && g.angle === 0) ||
                        ((y.position.x += g.x), (y.position.y += g.y), (y.angle += g.angle));
                    }
                  }),
                  (i.solveAll = function (v, r) {
                    for (var y = p.clamp(r / p._baseDelta, 0, 1), g = 0; g < v.length; g += 1) {
                      var E = v[g],
                        R = !E.bodyA || (E.bodyA && E.bodyA.isStatic),
                        D = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (R || D) && i.solve(v[g], y);
                    }
                    for (g = 0; g < v.length; g += 1)
                      ((E = v[g]),
                        (R = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (D = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !R && !D && i.solve(v[g], y));
                  }),
                  (i.solve = function (v, r) {
                    var y = v.bodyA,
                      g = v.bodyB,
                      E = v.pointA,
                      R = v.pointB;
                    if (!(!y && !g)) {
                      (y &&
                        !y.isStatic &&
                        (f.rotate(E, y.angle - v.angleA, E), (v.angleA = y.angle)),
                        g &&
                          !g.isStatic &&
                          (f.rotate(R, g.angle - v.angleB, R), (v.angleB = g.angle)));
                      var D = E,
                        w = R;
                      if (
                        (y && (D = f.add(y.position, E)),
                        g && (w = f.add(g.position, R)),
                        !(!D || !w))
                      ) {
                        var H = f.sub(D, w),
                          M = f.magnitude(H);
                        M < i._minLength && (M = i._minLength);
                        var _ = (M - v.length) / M,
                          O = v.stiffness >= 1 || v.length === 0,
                          A = O ? v.stiffness * r : v.stiffness * r * r,
                          B = v.damping * r,
                          z = f.mult(H, _ * A),
                          L = (y ? y.inverseMass : 0) + (g ? g.inverseMass : 0),
                          G = (y ? y.inverseInertia : 0) + (g ? g.inverseInertia : 0),
                          J = L + G,
                          te,
                          ee,
                          V,
                          K,
                          ne;
                        if (B > 0) {
                          var se = f.create();
                          ((V = f.div(H, M)),
                            (ne = f.sub(
                              (g && f.sub(g.position, g.positionPrev)) || se,
                              (y && f.sub(y.position, y.positionPrev)) || se
                            )),
                            (K = f.dot(V, ne)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((ee = y.inverseMass / L),
                          (y.constraintImpulse.x -= z.x * ee),
                          (y.constraintImpulse.y -= z.y * ee),
                          (y.position.x -= z.x * ee),
                          (y.position.y -= z.y * ee),
                          B > 0 &&
                            ((y.positionPrev.x -= B * V.x * K * ee),
                            (y.positionPrev.y -= B * V.y * K * ee)),
                          (te =
                            (f.cross(E, z) / J) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - v.angularStiffness)),
                          (y.constraintImpulse.angle -= te),
                          (y.angle -= te)),
                          g &&
                            !g.isStatic &&
                            ((ee = g.inverseMass / L),
                            (g.constraintImpulse.x += z.x * ee),
                            (g.constraintImpulse.y += z.y * ee),
                            (g.position.x += z.x * ee),
                            (g.position.y += z.y * ee),
                            B > 0 &&
                              ((g.positionPrev.x += B * V.x * K * ee),
                              (g.positionPrev.y += B * V.y * K * ee)),
                            (te =
                              (f.cross(R, z) / J) *
                              i._torqueDampen *
                              g.inverseInertia *
                              (1 - v.angularStiffness)),
                            (g.constraintImpulse.angle += te),
                            (g.angle += te)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (v) {
                    for (var r = 0; r < v.length; r++) {
                      var y = v[r],
                        g = y.constraintImpulse;
                      if (!(y.isStatic || (g.x === 0 && g.y === 0 && g.angle === 0))) {
                        c.set(y, !1);
                        for (var E = 0; E < y.parts.length; E++) {
                          var R = y.parts[E];
                          (d.translate(R.vertices, g),
                            E > 0 && ((R.position.x += g.x), (R.position.y += g.y)),
                            g.angle !== 0 &&
                              (d.rotate(R.vertices, g.angle, y.position),
                              o.rotate(R.axes, g.angle),
                              E > 0 && f.rotateAbout(R.position, g.angle, y.position, R.position)),
                            m.update(R.bounds, R.vertices, y.velocity));
                        }
                        ((g.angle *= i._warming), (g.x *= i._warming), (g.y *= i._warming));
                      }
                    }
                  }),
                  (i.pointAWorld = function (v) {
                    return {
                      x: (v.bodyA ? v.bodyA.position.x : 0) + (v.pointA ? v.pointA.x : 0),
                      y: (v.bodyA ? v.bodyA.position.y : 0) + (v.pointA ? v.pointA.y : 0),
                    };
                  }),
                  (i.pointBWorld = function (v) {
                    return {
                      x: (v.bodyB ? v.bodyB.position.x : 0) + (v.pointB ? v.pointB.x : 0),
                      y: (v.bodyB ? v.bodyB.position.y : 0) + (v.pointB ? v.pointB.y : 0),
                    };
                  }),
                  (i.currentLength = function (v) {
                    var r = (v.bodyA ? v.bodyA.position.x : 0) + (v.pointA ? v.pointA.x : 0),
                      y = (v.bodyA ? v.bodyA.position.y : 0) + (v.pointA ? v.pointA.y : 0),
                      g = (v.bodyB ? v.bodyB.position.x : 0) + (v.pointB ? v.pointB.x : 0),
                      E = (v.bodyB ? v.bodyB.position.y : 0) + (v.pointB ? v.pointB.y : 0),
                      R = r - g,
                      D = y - E;
                    return Math.sqrt(R * R + D * D);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(2),
                f = h(0);
              (function () {
                ((i.fromVertices = function (c) {
                  for (var m = {}, o = 0; o < c.length; o++) {
                    var p = (o + 1) % c.length,
                      v = d.normalise({ x: c[p].y - c[o].y, y: c[o].x - c[p].x }),
                      r = v.y === 0 ? 1 / 0 : v.x / v.y;
                    ((r = r.toFixed(3).toString()), (m[r] = v));
                  }
                  return f.values(m);
                }),
                  (i.rotate = function (c, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), p = Math.sin(m), v = 0; v < c.length; v++) {
                        var r = c[v],
                          y;
                        ((y = r.x * o - r.y * p), (r.y = r.x * p + r.y * o), (r.x = y));
                      }
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(0),
                c = h(4),
                m = h(1),
                o = h(2);
              (function () {
                ((i.rectangle = function (p, v, r, y, g) {
                  g = g || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: p, y: v },
                    vertices: d.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + y + ' L 0 ' + y),
                  };
                  if (g.chamfer) {
                    var R = g.chamfer;
                    ((E.vertices = d.chamfer(
                      E.vertices,
                      R.radius,
                      R.quality,
                      R.qualityMin,
                      R.qualityMax
                    )),
                      delete g.chamfer);
                  }
                  return c.create(f.extend({}, E, g));
                }),
                  (i.trapezoid = function (p, v, r, y, g, E) {
                    ((E = E || {}),
                      g >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (g *= 0.5));
                    var R = (1 - g * 2) * r,
                      D = r * g,
                      w = D + R,
                      H = w + D,
                      M;
                    g < 0.5
                      ? (M = 'L 0 0 L ' + D + ' ' + -y + ' L ' + w + ' ' + -y + ' L ' + H + ' 0')
                      : (M = 'L 0 0 L ' + w + ' ' + -y + ' L ' + H + ' 0');
                    var _ = {
                      label: 'Trapezoid Body',
                      position: { x: p, y: v },
                      vertices: d.fromPath(M),
                    };
                    if (E.chamfer) {
                      var O = E.chamfer;
                      ((_.vertices = d.chamfer(
                        _.vertices,
                        O.radius,
                        O.quality,
                        O.qualityMin,
                        O.qualityMax
                      )),
                        delete E.chamfer);
                    }
                    return c.create(f.extend({}, _, E));
                  }),
                  (i.circle = function (p, v, r, y, g) {
                    y = y || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    g = g || 25;
                    var R = Math.ceil(Math.max(10, Math.min(g, r)));
                    return (R % 2 === 1 && (R += 1), i.polygon(p, v, R, r, f.extend({}, E, y)));
                  }),
                  (i.polygon = function (p, v, r, y, g) {
                    if (((g = g || {}), r < 3)) return i.circle(p, v, y, g);
                    for (var E = (2 * Math.PI) / r, R = '', D = E * 0.5, w = 0; w < r; w += 1) {
                      var H = D + w * E,
                        M = Math.cos(H) * y,
                        _ = Math.sin(H) * y;
                      R += 'L ' + M.toFixed(3) + ' ' + _.toFixed(3) + ' ';
                    }
                    var O = {
                      label: 'Polygon Body',
                      position: { x: p, y: v },
                      vertices: d.fromPath(R),
                    };
                    if (g.chamfer) {
                      var A = g.chamfer;
                      ((O.vertices = d.chamfer(
                        O.vertices,
                        A.radius,
                        A.quality,
                        A.qualityMin,
                        A.qualityMax
                      )),
                        delete g.chamfer);
                    }
                    return c.create(f.extend({}, O, g));
                  }),
                  (i.fromVertices = function (p, v, r, y, g, E, R, D) {
                    var w = f.getDecomp(),
                      H,
                      M,
                      _,
                      O,
                      A,
                      B,
                      z,
                      L,
                      G,
                      J,
                      te;
                    for (
                      H = !!(w && w.quickDecomp),
                        y = y || {},
                        _ = [],
                        g = typeof g < 'u' ? g : !1,
                        E = typeof E < 'u' ? E : 0.01,
                        R = typeof R < 'u' ? R : 10,
                        D = typeof D < 'u' ? D : 0.01,
                        f.isArray(r[0]) || (r = [r]),
                        J = 0;
                      J < r.length;
                      J += 1
                    )
                      if (
                        ((B = r[J]),
                        (O = d.isConvex(B)),
                        (A = !O),
                        A &&
                          !H &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        O || !H)
                      )
                        (O ? (B = d.clockwiseSort(B)) : (B = d.hull(B)),
                          _.push({ position: { x: p, y: v }, vertices: B }));
                      else {
                        var ee = B.map(function (ue) {
                          return [ue.x, ue.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          D !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, D));
                        var V = w.quickDecomp(ee);
                        for (z = 0; z < V.length; z++) {
                          var K = V[z],
                            ne = K.map(function (ue) {
                              return { x: ue[0], y: ue[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            _.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (z = 0; z < _.length; z++) _[z] = c.create(f.extend(_[z], y));
                    if (g) {
                      var se = 5;
                      for (z = 0; z < _.length; z++) {
                        var he = _[z];
                        for (L = z + 1; L < _.length; L++) {
                          var j = _[L];
                          if (m.overlaps(he.bounds, j.bounds)) {
                            var $ = he.vertices,
                              ae = j.vertices;
                            for (G = 0; G < he.vertices.length; G++)
                              for (te = 0; te < j.vertices.length; te++) {
                                var ie = o.magnitudeSquared(o.sub($[(G + 1) % $.length], ae[te])),
                                  oe = o.magnitudeSquared(o.sub($[G], ae[(te + 1) % ae.length]));
                                ie < se &&
                                  oe < se &&
                                  (($[G].isInternal = !0), (ae[te].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return _.length > 1
                      ? ((M = c.create(f.extend({ parts: _.slice(0) }, y))),
                        c.setPosition(M, { x: p, y: v }),
                        M)
                      : _[0];
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(0),
                f = h(8);
              (function () {
                ((i.create = function (c) {
                  var m = { bodies: [], collisions: [], pairs: null };
                  return d.extend(m, c);
                }),
                  (i.setBodies = function (c, m) {
                    c.bodies = m.slice(0);
                  }),
                  (i.clear = function (c) {
                    ((c.bodies = []), (c.collisions = []));
                  }),
                  (i.collisions = function (c) {
                    var m = c.pairs,
                      o = c.bodies,
                      p = o.length,
                      v = i.canCollide,
                      r = f.collides,
                      y = c.collisions,
                      g = 0,
                      E,
                      R;
                    for (o.sort(i._compareBoundsX), E = 0; E < p; E++) {
                      var D = o[E],
                        w = D.bounds,
                        H = D.bounds.max.x,
                        M = D.bounds.max.y,
                        _ = D.bounds.min.y,
                        O = D.isStatic || D.isSleeping,
                        A = D.parts.length,
                        B = A === 1;
                      for (R = E + 1; R < p; R++) {
                        var z = o[R],
                          L = z.bounds;
                        if (L.min.x > H) break;
                        if (
                          !(M < L.min.y || _ > L.max.y) &&
                          !(O && (z.isStatic || z.isSleeping)) &&
                          v(D.collisionFilter, z.collisionFilter)
                        ) {
                          var G = z.parts.length;
                          if (B && G === 1) {
                            var J = r(D, z, m);
                            J && (y[g++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, V = te; V < A; V++)
                              for (var K = D.parts[V], w = K.bounds, ne = ee; ne < G; ne++) {
                                var se = z.parts[ne],
                                  L = se.bounds;
                                if (
                                  !(
                                    w.min.x > L.max.x ||
                                    w.max.x < L.min.x ||
                                    w.max.y < L.min.y ||
                                    w.min.y > L.max.y
                                  )
                                ) {
                                  var J = r(K, se, m);
                                  J && (y[g++] = J);
                                }
                              }
                        }
                      }
                    }
                    return (y.length !== g && (y.length = g), y);
                  }),
                  (i.canCollide = function (c, m) {
                    return c.group === m.group && c.group !== 0
                      ? c.group > 0
                      : (c.mask & m.category) !== 0 && (m.mask & c.category) !== 0;
                  }),
                  (i._compareBoundsX = function (c, m) {
                    return c.bounds.min.x - m.bounds.min.x;
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(0);
              (function () {
                ((i.create = function (f) {
                  var c = {};
                  return (
                    f ||
                      d.log(
                        'Mouse.create: element was undefined, defaulting to document.body',
                        'warn'
                      ),
                    (c.element = f || document.body),
                    (c.absolute = { x: 0, y: 0 }),
                    (c.position = { x: 0, y: 0 }),
                    (c.mousedownPosition = { x: 0, y: 0 }),
                    (c.mouseupPosition = { x: 0, y: 0 }),
                    (c.offset = { x: 0, y: 0 }),
                    (c.scale = { x: 1, y: 1 }),
                    (c.wheelDelta = 0),
                    (c.button = -1),
                    (c.pixelRatio = parseInt(c.element.getAttribute('data-pixel-ratio'), 10) || 1),
                    (c.sourceEvents = {
                      mousemove: null,
                      mousedown: null,
                      mouseup: null,
                      mousewheel: null,
                    }),
                    (c.mousemove = function (m) {
                      var o = i._getRelativeMousePosition(m, c.element, c.pixelRatio),
                        p = m.changedTouches;
                      (p && ((c.button = 0), m.preventDefault()),
                        (c.absolute.x = o.x),
                        (c.absolute.y = o.y),
                        (c.position.x = c.absolute.x * c.scale.x + c.offset.x),
                        (c.position.y = c.absolute.y * c.scale.y + c.offset.y),
                        (c.sourceEvents.mousemove = m));
                    }),
                    (c.mousedown = function (m) {
                      var o = i._getRelativeMousePosition(m, c.element, c.pixelRatio),
                        p = m.changedTouches;
                      (p ? ((c.button = 0), m.preventDefault()) : (c.button = m.button),
                        (c.absolute.x = o.x),
                        (c.absolute.y = o.y),
                        (c.position.x = c.absolute.x * c.scale.x + c.offset.x),
                        (c.position.y = c.absolute.y * c.scale.y + c.offset.y),
                        (c.mousedownPosition.x = c.position.x),
                        (c.mousedownPosition.y = c.position.y),
                        (c.sourceEvents.mousedown = m));
                    }),
                    (c.mouseup = function (m) {
                      var o = i._getRelativeMousePosition(m, c.element, c.pixelRatio),
                        p = m.changedTouches;
                      (p && m.preventDefault(),
                        (c.button = -1),
                        (c.absolute.x = o.x),
                        (c.absolute.y = o.y),
                        (c.position.x = c.absolute.x * c.scale.x + c.offset.x),
                        (c.position.y = c.absolute.y * c.scale.y + c.offset.y),
                        (c.mouseupPosition.x = c.position.x),
                        (c.mouseupPosition.y = c.position.y),
                        (c.sourceEvents.mouseup = m));
                    }),
                    (c.mousewheel = function (m) {
                      ((c.wheelDelta = Math.max(-1, Math.min(1, m.wheelDelta || -m.detail))),
                        m.preventDefault(),
                        (c.sourceEvents.mousewheel = m));
                    }),
                    i.setElement(c, c.element),
                    c
                  );
                }),
                  (i.setElement = function (f, c) {
                    ((f.element = c),
                      c.addEventListener('mousemove', f.mousemove, { passive: !0 }),
                      c.addEventListener('mousedown', f.mousedown, { passive: !0 }),
                      c.addEventListener('mouseup', f.mouseup, { passive: !0 }),
                      c.addEventListener('wheel', f.mousewheel, { passive: !1 }),
                      c.addEventListener('touchmove', f.mousemove, { passive: !1 }),
                      c.addEventListener('touchstart', f.mousedown, { passive: !1 }),
                      c.addEventListener('touchend', f.mouseup, { passive: !1 }));
                  }),
                  (i.clearSourceEvents = function (f) {
                    ((f.sourceEvents.mousemove = null),
                      (f.sourceEvents.mousedown = null),
                      (f.sourceEvents.mouseup = null),
                      (f.sourceEvents.mousewheel = null),
                      (f.wheelDelta = 0));
                  }),
                  (i.setOffset = function (f, c) {
                    ((f.offset.x = c.x),
                      (f.offset.y = c.y),
                      (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                      (f.position.y = f.absolute.y * f.scale.y + f.offset.y));
                  }),
                  (i.setScale = function (f, c) {
                    ((f.scale.x = c.x),
                      (f.scale.y = c.y),
                      (f.position.x = f.absolute.x * f.scale.x + f.offset.x),
                      (f.position.y = f.absolute.y * f.scale.y + f.offset.y));
                  }),
                  (i._getRelativeMousePosition = function (f, c, m) {
                    var o = c.getBoundingClientRect(),
                      p = document.documentElement || document.body.parentNode || document.body,
                      v = window.pageXOffset !== void 0 ? window.pageXOffset : p.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : p.scrollTop,
                      y = f.changedTouches,
                      g,
                      E;
                    return (
                      y
                        ? ((g = y[0].pageX - o.left - v), (E = y[0].pageY - o.top - r))
                        : ((g = f.pageX - o.left - v), (E = f.pageY - o.top - r)),
                      {
                        x: g / ((c.clientWidth / (c.width || c.clientWidth)) * m),
                        y: E / ((c.clientHeight / (c.height || c.clientHeight)) * m),
                      }
                    );
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
                      var c = i._registry[f.name],
                        m = i.versionParse(f.version).number,
                        o = i.versionParse(c.version).number;
                      m > o
                        ? (d.warn(
                            'Plugin.register:',
                            i.toString(c),
                            'was upgraded to',
                            i.toString(f)
                          ),
                          (i._registry[f.name] = f))
                        : m < o
                          ? d.warn(
                              'Plugin.register:',
                              i.toString(c),
                              'can not be downgraded to',
                              i.toString(f)
                            )
                          : f !== c &&
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
                  (i.isUsed = function (f, c) {
                    return f.used.indexOf(c) > -1;
                  }),
                  (i.isFor = function (f, c) {
                    var m = f.for && i.dependencyParse(f.for);
                    return !f.for || (c.name === m.name && i.versionSatisfies(c.version, m.range));
                  }),
                  (i.use = function (f, c) {
                    if (((f.uses = (f.uses || []).concat(c || [])), f.uses.length === 0)) {
                      d.warn(
                        'Plugin.use:',
                        i.toString(f),
                        'does not specify any dependencies to install.'
                      );
                      return;
                    }
                    for (
                      var m = i.dependencies(f), o = d.topologicalSort(m), p = [], v = 0;
                      v < o.length;
                      v += 1
                    )
                      if (o[v] !== f.name) {
                        var r = i.resolve(o[v]);
                        if (!r) {
                          p.push('❌ ' + o[v]);
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
                            ? (p.push('🔶 ' + i.toString(r)), delete r._warned)
                            : p.push('✅ ' + i.toString(r)),
                          f.used.push(r.name));
                      }
                    p.length > 0 && d.info(p.join('  '));
                  }),
                  (i.dependencies = function (f, c) {
                    var m = i.dependencyParse(f),
                      o = m.name;
                    if (((c = c || {}), !(o in c))) {
                      ((f = i.resolve(f) || f),
                        (c[o] = d.map(f.uses || [], function (v) {
                          i.isPlugin(v) && i.register(v);
                          var r = i.dependencyParse(v),
                            y = i.resolve(v);
                          return (
                            y && !i.versionSatisfies(y.version, r.range)
                              ? (d.warn(
                                  'Plugin.dependencies:',
                                  i.toString(y),
                                  'does not satisfy',
                                  i.toString(r),
                                  'used by',
                                  i.toString(m) + '.'
                                ),
                                (y._warned = !0),
                                (f._warned = !0))
                              : y ||
                                (d.warn(
                                  'Plugin.dependencies:',
                                  i.toString(v),
                                  'used by',
                                  i.toString(m),
                                  'could not be resolved.'
                                ),
                                (f._warned = !0)),
                            r.name
                          );
                        })));
                      for (var p = 0; p < c[o].length; p += 1) i.dependencies(c[o][p], c);
                      return c;
                    }
                  }),
                  (i.dependencyParse = function (f) {
                    if (d.isString(f)) {
                      var c = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        c.test(f) ||
                          d.warn('Plugin.dependencyParse:', f, 'is not a valid dependency string.'),
                        { name: f.split('@')[0], range: f.split('@')[1] || '*' }
                      );
                    }
                    return { name: f.name, range: f.range || f.version };
                  }),
                  (i.versionParse = function (f) {
                    var c = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    c.test(f) ||
                      d.warn('Plugin.versionParse:', f, 'is not a valid version or range.');
                    var m = c.exec(f),
                      o = Number(m[4]),
                      p = Number(m[5]),
                      v = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: f,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: p,
                      patch: v,
                      parts: [o, p, v],
                      prerelease: m[7],
                      number: o * 1e8 + p * 1e4 + v,
                    };
                  }),
                  (i.versionSatisfies = function (f, c) {
                    c = c || '*';
                    var m = i.versionParse(c),
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
                    return f === c || f === '*';
                  }));
              })();
            },
            function (T, x) {
              var h = {};
              ((T.exports = h),
                (function () {
                  h.create = function (i) {
                    return { vertex: i, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(7),
                f = h(18),
                c = h(13),
                m = h(19),
                o = h(5),
                p = h(6),
                v = h(10),
                r = h(0),
                y = h(4);
              (function () {
                ((i._deltaMax = 1e3 / 60),
                  (i.create = function (g) {
                    g = g || {};
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
                      R = r.extend(E, g);
                    return (
                      (R.world = g.world || p.create({ label: 'World' })),
                      (R.pairs = g.pairs || m.create()),
                      (R.detector = g.detector || c.create()),
                      (R.detector.pairs = R.pairs),
                      (R.grid = { buckets: [] }),
                      (R.world.gravity = R.gravity),
                      (R.broadphase = R.grid),
                      (R.metrics = {}),
                      R
                    );
                  }),
                  (i.update = function (g, E) {
                    var R = r.now(),
                      D = g.world,
                      w = g.detector,
                      H = g.pairs,
                      M = g.timing,
                      _ = M.timestamp,
                      O;
                    (E > i._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        i._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (E = typeof E < 'u' ? E : r._baseDelta),
                      (E *= M.timeScale),
                      (M.timestamp += E),
                      (M.lastDelta = E));
                    var A = { timestamp: M.timestamp, delta: E };
                    o.trigger(g, 'beforeUpdate', A);
                    var B = p.allBodies(D),
                      z = p.allConstraints(D);
                    for (
                      D.isModified && (c.setBodies(w, B), p.setModified(D, !1, !1, !0)),
                        g.enableSleeping && d.update(B, E),
                        i._bodiesApplyGravity(B, g.gravity),
                        E > 0 && i._bodiesUpdate(B, E),
                        o.trigger(g, 'beforeSolve', A),
                        v.preSolveAll(B),
                        O = 0;
                      O < g.constraintIterations;
                      O++
                    )
                      v.solveAll(z, E);
                    v.postSolveAll(B);
                    var L = c.collisions(w);
                    (m.update(H, L, _),
                      g.enableSleeping && d.afterCollisions(H.list),
                      H.collisionStart.length > 0 &&
                        o.trigger(g, 'collisionStart', {
                          pairs: H.collisionStart,
                          timestamp: M.timestamp,
                          delta: E,
                        }));
                    var G = r.clamp(20 / g.positionIterations, 0, 1);
                    for (f.preSolvePosition(H.list), O = 0; O < g.positionIterations; O++)
                      f.solvePosition(H.list, E, G);
                    for (
                      f.postSolvePosition(B), v.preSolveAll(B), O = 0;
                      O < g.constraintIterations;
                      O++
                    )
                      v.solveAll(z, E);
                    for (
                      v.postSolveAll(B), f.preSolveVelocity(H.list), O = 0;
                      O < g.velocityIterations;
                      O++
                    )
                      f.solveVelocity(H.list, E);
                    return (
                      i._bodiesUpdateVelocities(B),
                      H.collisionActive.length > 0 &&
                        o.trigger(g, 'collisionActive', {
                          pairs: H.collisionActive,
                          timestamp: M.timestamp,
                          delta: E,
                        }),
                      H.collisionEnd.length > 0 &&
                        o.trigger(g, 'collisionEnd', {
                          pairs: H.collisionEnd,
                          timestamp: M.timestamp,
                          delta: E,
                        }),
                      i._bodiesClearForces(B),
                      o.trigger(g, 'afterUpdate', A),
                      (g.timing.lastElapsed = r.now() - R),
                      g
                    );
                  }),
                  (i.merge = function (g, E) {
                    if ((r.extend(g, E), E.world)) {
                      ((g.world = E.world), i.clear(g));
                      for (var R = p.allBodies(g.world), D = 0; D < R.length; D++) {
                        var w = R[D];
                        (d.set(w, !1), (w.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (g) {
                    (m.clear(g.pairs), c.clear(g.detector));
                  }),
                  (i._bodiesClearForces = function (g) {
                    for (var E = g.length, R = 0; R < E; R++) {
                      var D = g[R];
                      ((D.force.x = 0), (D.force.y = 0), (D.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (g, E) {
                    var R = typeof E.scale < 'u' ? E.scale : 0.001,
                      D = g.length;
                    if (!((E.x === 0 && E.y === 0) || R === 0))
                      for (var w = 0; w < D; w++) {
                        var H = g[w];
                        H.isStatic ||
                          H.isSleeping ||
                          ((H.force.y += H.mass * E.y * R), (H.force.x += H.mass * E.x * R));
                      }
                  }),
                  (i._bodiesUpdate = function (g, E) {
                    for (var R = g.length, D = 0; D < R; D++) {
                      var w = g[D];
                      w.isStatic || w.isSleeping || y.update(w, E);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (g) {
                    for (var E = g.length, R = 0; R < E; R++) y.updateVelocities(g[R]);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(0),
                c = h(1);
              (function () {
                ((i._restingThresh = 2),
                  (i._restingThreshTangent = Math.sqrt(6)),
                  (i._positionDampen = 0.9),
                  (i._positionWarming = 0.8),
                  (i._frictionNormalMultiplier = 5),
                  (i._frictionMaxStatic = Number.MAX_VALUE),
                  (i.preSolvePosition = function (m) {
                    var o,
                      p,
                      v,
                      r = m.length;
                    for (o = 0; o < r; o++)
                      ((p = m[o]),
                        p.isActive &&
                          ((v = p.contactCount),
                          (p.collision.parentA.totalContacts += v),
                          (p.collision.parentB.totalContacts += v)));
                  }),
                  (i.solvePosition = function (m, o, p) {
                    var v,
                      r,
                      y,
                      g,
                      E,
                      R,
                      D,
                      w,
                      H = i._positionDampen * (p || 1),
                      M = f.clamp(o / f._baseDelta, 0, 1),
                      _ = m.length;
                    for (v = 0; v < _; v++)
                      ((r = m[v]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (g = y.parentA),
                          (E = y.parentB),
                          (R = y.normal),
                          (r.separation =
                            y.depth +
                            R.x * (E.positionImpulse.x - g.positionImpulse.x) +
                            R.y * (E.positionImpulse.y - g.positionImpulse.y))));
                    for (v = 0; v < _; v++)
                      ((r = m[v]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (g = y.parentA),
                          (E = y.parentB),
                          (R = y.normal),
                          (w = r.separation - r.slop * M),
                          (g.isStatic || E.isStatic) && (w *= 2),
                          g.isStatic ||
                            g.isSleeping ||
                            ((D = H / g.totalContacts),
                            (g.positionImpulse.x += R.x * w * D),
                            (g.positionImpulse.y += R.y * w * D)),
                          E.isStatic ||
                            E.isSleeping ||
                            ((D = H / E.totalContacts),
                            (E.positionImpulse.x -= R.x * w * D),
                            (E.positionImpulse.y -= R.y * w * D))));
                  }),
                  (i.postSolvePosition = function (m) {
                    for (
                      var o = i._positionWarming,
                        p = m.length,
                        v = d.translate,
                        r = c.update,
                        y = 0;
                      y < p;
                      y++
                    ) {
                      var g = m[y],
                        E = g.positionImpulse,
                        R = E.x,
                        D = E.y,
                        w = g.velocity;
                      if (((g.totalContacts = 0), R !== 0 || D !== 0)) {
                        for (var H = 0; H < g.parts.length; H++) {
                          var M = g.parts[H];
                          (v(M.vertices, E),
                            r(M.bounds, M.vertices, w),
                            (M.position.x += R),
                            (M.position.y += D));
                        }
                        ((g.positionPrev.x += R),
                          (g.positionPrev.y += D),
                          R * w.x + D * w.y < 0
                            ? ((E.x = 0), (E.y = 0))
                            : ((E.x *= o), (E.y *= o)));
                      }
                    }
                  }),
                  (i.preSolveVelocity = function (m) {
                    var o = m.length,
                      p,
                      v;
                    for (p = 0; p < o; p++) {
                      var r = m[p];
                      if (!(!r.isActive || r.isSensor)) {
                        var y = r.contacts,
                          g = r.contactCount,
                          E = r.collision,
                          R = E.parentA,
                          D = E.parentB,
                          w = E.normal,
                          H = E.tangent;
                        for (v = 0; v < g; v++) {
                          var M = y[v],
                            _ = M.vertex,
                            O = M.normalImpulse,
                            A = M.tangentImpulse;
                          if (O !== 0 || A !== 0) {
                            var B = w.x * O + H.x * A,
                              z = w.y * O + H.y * A;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += B * R.inverseMass),
                              (R.positionPrev.y += z * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((_.x - R.position.x) * z - (_.y - R.position.y) * B))),
                              D.isStatic ||
                                D.isSleeping ||
                                ((D.positionPrev.x -= B * D.inverseMass),
                                (D.positionPrev.y -= z * D.inverseMass),
                                (D.anglePrev -=
                                  D.inverseInertia *
                                  ((_.x - D.position.x) * z - (_.y - D.position.y) * B))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (m, o) {
                    var p = o / f._baseDelta,
                      v = p * p,
                      r = v * p,
                      y = -i._restingThresh * p,
                      g = i._restingThreshTangent,
                      E = i._frictionNormalMultiplier * p,
                      R = i._frictionMaxStatic,
                      D = m.length,
                      w,
                      H,
                      M,
                      _;
                    for (M = 0; M < D; M++) {
                      var O = m[M];
                      if (!(!O.isActive || O.isSensor)) {
                        var A = O.collision,
                          B = A.parentA,
                          z = A.parentB,
                          L = A.normal.x,
                          G = A.normal.y,
                          J = A.tangent.x,
                          te = A.tangent.y,
                          ee = O.inverseMass,
                          V = O.friction * O.frictionStatic * E,
                          K = O.contacts,
                          ne = O.contactCount,
                          se = 1 / ne,
                          he = B.position.x - B.positionPrev.x,
                          j = B.position.y - B.positionPrev.y,
                          $ = B.angle - B.anglePrev,
                          ae = z.position.x - z.positionPrev.x,
                          ie = z.position.y - z.positionPrev.y,
                          oe = z.angle - z.anglePrev;
                        for (_ = 0; _ < ne; _++) {
                          var ue = K[_],
                            ye = ue.vertex,
                            Me = ye.x - B.position.x,
                            be = ye.y - B.position.y,
                            Ke = ye.x - z.position.x,
                            et = ye.y - z.position.y,
                            $e = he - be * $,
                            xn = j + Me * $,
                            Bt = ae - et * oe,
                            fn = ie + Ke * oe,
                            En = $e - Bt,
                            Pn = xn - fn,
                            bt = L * En + G * Pn,
                            Mt = J * En + te * Pn,
                            Ut = O.separation + bt,
                            ht = Math.min(Ut, 1);
                          ht = Ut < 0 ? 0 : ht;
                          var Xe = ht * V;
                          Mt < -Xe || Mt > Xe
                            ? ((H = Mt > 0 ? Mt : -Mt),
                              (w = O.friction * (Mt > 0 ? 1 : -1) * r),
                              w < -H ? (w = -H) : w > H && (w = H))
                            : ((w = Mt), (H = R));
                          var Jl = Me * G - be * L,
                            We = Ke * G - et * L,
                            Rl =
                              se / (ee + B.inverseInertia * Jl * Jl + z.inverseInertia * We * We),
                            bn = (1 + O.restitution) * bt * Rl;
                          if (((w *= Rl), bt < y)) ue.normalImpulse = 0;
                          else {
                            var Ht = ue.normalImpulse;
                            ((ue.normalImpulse += bn),
                              ue.normalImpulse > 0 && (ue.normalImpulse = 0),
                              (bn = ue.normalImpulse - Ht));
                          }
                          if (Mt < -g || Mt > g) ue.tangentImpulse = 0;
                          else {
                            var Zt = ue.tangentImpulse;
                            ((ue.tangentImpulse += w),
                              ue.tangentImpulse < -H && (ue.tangentImpulse = -H),
                              ue.tangentImpulse > H && (ue.tangentImpulse = H),
                              (w = ue.tangentImpulse - Zt));
                          }
                          var Tn = L * bn + J * w,
                            dn = G * bn + te * w;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += Tn * B.inverseMass),
                            (B.positionPrev.y += dn * B.inverseMass),
                            (B.anglePrev += (Me * dn - be * Tn) * B.inverseInertia)),
                            z.isStatic ||
                              z.isSleeping ||
                              ((z.positionPrev.x -= Tn * z.inverseMass),
                              (z.positionPrev.y -= dn * z.inverseMass),
                              (z.anglePrev -= (Ke * dn - et * Tn) * z.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(9),
                f = h(0);
              (function () {
                ((i.create = function (c) {
                  return f.extend(
                    {
                      table: {},
                      list: [],
                      collisionStart: [],
                      collisionActive: [],
                      collisionEnd: [],
                    },
                    c
                  );
                }),
                  (i.update = function (c, m, o) {
                    var p = d.update,
                      v = d.create,
                      r = d.setActive,
                      y = c.table,
                      g = c.list,
                      E = g.length,
                      R = E,
                      D = c.collisionStart,
                      w = c.collisionEnd,
                      H = c.collisionActive,
                      M = m.length,
                      _ = 0,
                      O = 0,
                      A = 0,
                      B,
                      z,
                      L;
                    for (L = 0; L < M; L++)
                      ((B = m[L]),
                        (z = B.pair),
                        z
                          ? (z.isActive && (H[A++] = z), p(z, B, o))
                          : ((z = v(B, o)), (y[z.id] = z), (D[_++] = z), (g[R++] = z)));
                    for (R = 0, E = g.length, L = 0; L < E; L++)
                      ((z = g[L]),
                        z.timeUpdated >= o
                          ? (g[R++] = z)
                          : (r(z, !1, o),
                            z.collision.bodyA.sleepCounter > 0 && z.collision.bodyB.sleepCounter > 0
                              ? (g[R++] = z)
                              : ((w[O++] = z), delete y[z.id])));
                    (g.length !== R && (g.length = R),
                      D.length !== _ && (D.length = _),
                      w.length !== O && (w.length = O),
                      H.length !== A && (H.length = A));
                  }),
                  (i.clear = function (c) {
                    return (
                      (c.table = {}),
                      (c.list.length = 0),
                      (c.collisionStart.length = 0),
                      (c.collisionActive.length = 0),
                      (c.collisionEnd.length = 0),
                      c
                    );
                  }));
              })();
            },
            function (T, x, h) {
              var i = (T.exports = h(21));
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
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
                  (i.before = function (c, m) {
                    return ((c = c.replace(/^Matter./, '')), f.chainPathBefore(i, c, m));
                  }),
                  (i.after = function (c, m) {
                    return ((c = c.replace(/^Matter./, '')), f.chainPathAfter(i, c, m));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(6),
                f = h(10),
                c = h(0),
                m = h(4),
                o = h(12),
                p = c.deprecated;
              (function () {
                ((i.stack = function (v, r, y, g, E, R, D) {
                  for (
                    var w = d.create({ label: 'Stack' }), H = v, M = r, _, O = 0, A = 0;
                    A < g;
                    A++
                  ) {
                    for (var B = 0, z = 0; z < y; z++) {
                      var L = D(H, M, z, A, _, O);
                      if (L) {
                        var G = L.bounds.max.y - L.bounds.min.y,
                          J = L.bounds.max.x - L.bounds.min.x;
                        (G > B && (B = G),
                          m.translate(L, { x: J * 0.5, y: G * 0.5 }),
                          (H = L.bounds.max.x + E),
                          d.addBody(w, L),
                          (_ = L),
                          (O += 1));
                      } else H += E;
                    }
                    ((M += B + R), (H = v));
                  }
                  return w;
                }),
                  (i.chain = function (v, r, y, g, E, R) {
                    for (var D = v.bodies, w = 1; w < D.length; w++) {
                      var H = D[w - 1],
                        M = D[w],
                        _ = H.bounds.max.y - H.bounds.min.y,
                        O = H.bounds.max.x - H.bounds.min.x,
                        A = M.bounds.max.y - M.bounds.min.y,
                        B = M.bounds.max.x - M.bounds.min.x,
                        z = {
                          bodyA: H,
                          pointA: { x: O * r, y: _ * y },
                          bodyB: M,
                          pointB: { x: B * g, y: A * E },
                        },
                        L = c.extend(z, R);
                      d.addConstraint(v, f.create(L));
                    }
                    return ((v.label += ' Chain'), v);
                  }),
                  (i.mesh = function (v, r, y, g, E) {
                    var R = v.bodies,
                      D,
                      w,
                      H,
                      M,
                      _;
                    for (D = 0; D < y; D++) {
                      for (w = 1; w < r; w++)
                        ((H = R[w - 1 + D * r]),
                          (M = R[w + D * r]),
                          d.addConstraint(v, f.create(c.extend({ bodyA: H, bodyB: M }, E))));
                      if (D > 0)
                        for (w = 0; w < r; w++)
                          ((H = R[w + (D - 1) * r]),
                            (M = R[w + D * r]),
                            d.addConstraint(v, f.create(c.extend({ bodyA: H, bodyB: M }, E))),
                            g &&
                              w > 0 &&
                              ((_ = R[w - 1 + (D - 1) * r]),
                              d.addConstraint(v, f.create(c.extend({ bodyA: _, bodyB: M }, E)))),
                            g &&
                              w < r - 1 &&
                              ((_ = R[w + 1 + (D - 1) * r]),
                              d.addConstraint(v, f.create(c.extend({ bodyA: _, bodyB: M }, E)))));
                    }
                    return ((v.label += ' Mesh'), v);
                  }),
                  (i.pyramid = function (v, r, y, g, E, R, D) {
                    return i.stack(v, r, y, g, E, R, function (w, H, M, _, O, A) {
                      var B = Math.min(g, Math.ceil(y / 2)),
                        z = O ? O.bounds.max.x - O.bounds.min.x : 0;
                      if (!(_ > B)) {
                        _ = B - _;
                        var L = _,
                          G = y - 1 - _;
                        if (!(M < L || M > G)) {
                          A === 1 && m.translate(O, { x: (M + (y % 2 === 1 ? 1 : -1)) * z, y: 0 });
                          var J = O ? M * z : 0;
                          return D(v + J + M * E, H, M, _, O, A);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (v, r, y, g, E) {
                    for (var R = d.create({ label: 'Newtons Cradle' }), D = 0; D < y; D++) {
                      var w = 1.9,
                        H = o.circle(v + D * (g * w), r + E, g, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = f.create({ pointA: { x: v + D * (g * w), y: r }, bodyB: H });
                      (d.addBody(R, H), d.addConstraint(R, M));
                    }
                    return R;
                  }),
                  p(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (v, r, y, g, E) {
                    var R = m.nextGroup(!0),
                      D = 20,
                      w = -y * 0.5 + D,
                      H = y * 0.5 - D,
                      M = 0,
                      _ = d.create({ label: 'Car' }),
                      O = o.rectangle(v, r, y, g, {
                        collisionFilter: { group: R },
                        chamfer: { radius: g * 0.5 },
                        density: 2e-4,
                      }),
                      A = o.circle(v + w, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = o.circle(v + H, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      z = f.create({
                        bodyB: O,
                        pointB: { x: w, y: M },
                        bodyA: A,
                        stiffness: 1,
                        length: 0,
                      }),
                      L = f.create({
                        bodyB: O,
                        pointB: { x: H, y: M },
                        bodyA: B,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(_, O),
                      d.addBody(_, A),
                      d.addBody(_, B),
                      d.addConstraint(_, z),
                      d.addConstraint(_, L),
                      _
                    );
                  }),
                  p(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (v, r, y, g, E, R, D, w, H, M) {
                    ((H = c.extend({ inertia: 1 / 0 }, H)),
                      (M = c.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var _ = i.stack(v, r, y, g, E, R, function (O, A) {
                      return o.circle(O, A, w, H);
                    });
                    return (i.mesh(_, y, g, D, M), (_.label = 'Soft Body'), _);
                  }),
                  p(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(9),
                f = h(0),
                c = f.deprecated;
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
                  (i.update = function (m, o, p, v) {
                    var r,
                      y,
                      g,
                      E = p.world,
                      R = m.buckets,
                      D,
                      w,
                      H = !1;
                    for (r = 0; r < o.length; r++) {
                      var M = o[r];
                      if (
                        !(M.isSleeping && !v) &&
                        !(
                          E.bounds &&
                          (M.bounds.max.x < E.bounds.min.x ||
                            M.bounds.min.x > E.bounds.max.x ||
                            M.bounds.max.y < E.bounds.min.y ||
                            M.bounds.min.y > E.bounds.max.y)
                        )
                      ) {
                        var _ = i._getRegion(m, M);
                        if (!M.region || _.id !== M.region.id || v) {
                          (!M.region || v) && (M.region = _);
                          var O = i._regionUnion(_, M.region);
                          for (y = O.startCol; y <= O.endCol; y++)
                            for (g = O.startRow; g <= O.endRow; g++) {
                              ((w = i._getBucketId(y, g)), (D = R[w]));
                              var A =
                                  y >= _.startCol &&
                                  y <= _.endCol &&
                                  g >= _.startRow &&
                                  g <= _.endRow,
                                B =
                                  y >= M.region.startCol &&
                                  y <= M.region.endCol &&
                                  g >= M.region.startRow &&
                                  g <= M.region.endRow;
                              (!A && B && B && D && i._bucketRemoveBody(m, D, M),
                                (M.region === _ || (A && !B) || v) &&
                                  (D || (D = i._createBucket(R, w)), i._bucketAddBody(m, D, M)));
                            }
                          ((M.region = _), (H = !0));
                        }
                      }
                    }
                    H && (m.pairsList = i._createActivePairsList(m));
                  }),
                  c(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (m) {
                    ((m.buckets = {}), (m.pairs = {}), (m.pairsList = []));
                  }),
                  c(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (i._regionUnion = function (m, o) {
                    var p = Math.min(m.startCol, o.startCol),
                      v = Math.max(m.endCol, o.endCol),
                      r = Math.min(m.startRow, o.startRow),
                      y = Math.max(m.endRow, o.endRow);
                    return i._createRegion(p, v, r, y);
                  }),
                  (i._getRegion = function (m, o) {
                    var p = o.bounds,
                      v = Math.floor(p.min.x / m.bucketWidth),
                      r = Math.floor(p.max.x / m.bucketWidth),
                      y = Math.floor(p.min.y / m.bucketHeight),
                      g = Math.floor(p.max.y / m.bucketHeight);
                    return i._createRegion(v, r, y, g);
                  }),
                  (i._createRegion = function (m, o, p, v) {
                    return {
                      id: m + ',' + o + ',' + p + ',' + v,
                      startCol: m,
                      endCol: o,
                      startRow: p,
                      endRow: v,
                    };
                  }),
                  (i._getBucketId = function (m, o) {
                    return 'C' + m + 'R' + o;
                  }),
                  (i._createBucket = function (m, o) {
                    var p = (m[o] = []);
                    return p;
                  }),
                  (i._bucketAddBody = function (m, o, p) {
                    var v = m.pairs,
                      r = d.id,
                      y = o.length,
                      g;
                    for (g = 0; g < y; g++) {
                      var E = o[g];
                      if (!(p.id === E.id || (p.isStatic && E.isStatic))) {
                        var R = r(p, E),
                          D = v[R];
                        D ? (D[2] += 1) : (v[R] = [p, E, 1]);
                      }
                    }
                    o.push(p);
                  }),
                  (i._bucketRemoveBody = function (m, o, p) {
                    var v = m.pairs,
                      r = d.id,
                      y;
                    o.splice(f.indexOf(o, p), 1);
                    var g = o.length;
                    for (y = 0; y < g; y++) {
                      var E = v[r(p, o[y])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      p = m.pairs,
                      v = f.keys(p),
                      r = v.length,
                      y = [],
                      g;
                    for (g = 0; g < r; g++) ((o = p[v[g]]), o[2] > 0 ? y.push(o) : delete p[v[g]]);
                    return y;
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(7),
                c = h(14),
                m = h(5),
                o = h(13),
                p = h(10),
                v = h(6),
                r = h(0),
                y = h(1);
              (function () {
                ((i.create = function (g, E) {
                  var R = (g ? g.mouse : null) || (E ? E.mouse : null);
                  R ||
                    (g && g.render && g.render.canvas
                      ? (R = c.create(g.render.canvas))
                      : E && E.element
                        ? (R = c.create(E.element))
                        : ((R = c.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var D = p.create({
                      label: 'Mouse Constraint',
                      pointA: R.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: '#90EE90', lineWidth: 3 },
                    }),
                    w = {
                      type: 'mouseConstraint',
                      mouse: R,
                      element: null,
                      body: null,
                      constraint: D,
                      collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                    },
                    H = r.extend(w, E);
                  return (
                    m.on(g, 'beforeUpdate', function () {
                      var M = v.allBodies(g.world);
                      (i.update(H, M), i._triggerEvents(H));
                    }),
                    H
                  );
                }),
                  (i.update = function (g, E) {
                    var R = g.mouse,
                      D = g.constraint,
                      w = g.body;
                    if (R.button === 0) {
                      if (D.bodyB) (f.set(D.bodyB, !1), (D.pointA = R.position));
                      else
                        for (var H = 0; H < E.length; H++)
                          if (
                            ((w = E[H]),
                            y.contains(w.bounds, R.position) &&
                              o.canCollide(w.collisionFilter, g.collisionFilter))
                          )
                            for (var M = w.parts.length > 1 ? 1 : 0; M < w.parts.length; M++) {
                              var _ = w.parts[M];
                              if (d.contains(_.vertices, R.position)) {
                                ((D.pointA = R.position),
                                  (D.bodyB = g.body = w),
                                  (D.pointB = {
                                    x: R.position.x - w.position.x,
                                    y: R.position.y - w.position.y,
                                  }),
                                  (D.angleB = w.angle),
                                  f.set(w, !1),
                                  m.trigger(g, 'startdrag', { mouse: R, body: w }));
                                break;
                              }
                            }
                    } else
                      ((D.bodyB = g.body = null),
                        (D.pointB = null),
                        w && m.trigger(g, 'enddrag', { mouse: R, body: w }));
                  }),
                  (i._triggerEvents = function (g) {
                    var E = g.mouse,
                      R = E.sourceEvents;
                    (R.mousemove && m.trigger(g, 'mousemove', { mouse: E }),
                      R.mousedown && m.trigger(g, 'mousedown', { mouse: E }),
                      R.mouseup && m.trigger(g, 'mouseup', { mouse: E }),
                      c.clearSourceEvents(E));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(2),
                f = h(8),
                c = h(1),
                m = h(12),
                o = h(3);
              (function () {
                ((i.collides = function (p, v) {
                  for (
                    var r = [], y = v.length, g = p.bounds, E = f.collides, R = c.overlaps, D = 0;
                    D < y;
                    D++
                  ) {
                    var w = v[D],
                      H = w.parts.length,
                      M = H === 1 ? 0 : 1;
                    if (R(w.bounds, g))
                      for (var _ = M; _ < H; _++) {
                        var O = w.parts[_];
                        if (R(O.bounds, g)) {
                          var A = E(O, p);
                          if (A) {
                            r.push(A);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (i.ray = function (p, v, r, y) {
                    y = y || 1e-100;
                    for (
                      var g = d.angle(v, r),
                        E = d.magnitude(d.sub(v, r)),
                        R = (r.x + v.x) * 0.5,
                        D = (r.y + v.y) * 0.5,
                        w = m.rectangle(R, D, E, y, { angle: g }),
                        H = i.collides(w, p),
                        M = 0;
                      M < H.length;
                      M += 1
                    ) {
                      var _ = H[M];
                      _.body = _.bodyB = _.bodyA;
                    }
                    return H;
                  }),
                  (i.region = function (p, v, r) {
                    for (var y = [], g = 0; g < p.length; g++) {
                      var E = p[g],
                        R = c.overlaps(E.bounds, v);
                      ((R && !r) || (!R && r)) && y.push(E);
                    }
                    return y;
                  }),
                  (i.point = function (p, v) {
                    for (var r = [], y = 0; y < p.length; y++) {
                      var g = p[y];
                      if (c.contains(g.bounds, v))
                        for (var E = g.parts.length === 1 ? 0 : 1; E < g.parts.length; E++) {
                          var R = g.parts[E];
                          if (c.contains(R.bounds, v) && o.contains(R.vertices, v)) {
                            r.push(g);
                            break;
                          }
                        }
                    }
                    return r;
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(4),
                f = h(0),
                c = h(6),
                m = h(1),
                o = h(5),
                p = h(2),
                v = h(14);
              (function () {
                var r, y;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (M) {
                      window.setTimeout(function () {
                        M(f.now());
                      }, 1e3 / 60);
                    }),
                  (y =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (i._goodFps = 30),
                  (i._goodDelta = 1e3 / 60),
                  (i.create = function (M) {
                    var _ = {
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
                      O = f.extend(_, M);
                    return (
                      O.canvas &&
                        ((O.canvas.width = O.options.width || O.canvas.width),
                        (O.canvas.height = O.options.height || O.canvas.height)),
                      (O.mouse = M.mouse),
                      (O.engine = M.engine),
                      (O.canvas = O.canvas || R(O.options.width, O.options.height)),
                      (O.context = O.canvas.getContext('2d')),
                      (O.textures = {}),
                      (O.bounds = O.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: O.canvas.width, y: O.canvas.height },
                      }),
                      (O.controller = i),
                      (O.options.showBroadphase = !1),
                      O.options.pixelRatio !== 1 && i.setPixelRatio(O, O.options.pixelRatio),
                      f.isElement(O.element) && O.element.appendChild(O.canvas),
                      O
                    );
                  }),
                  (i.run = function (M) {
                    (function _(O) {
                      ((M.frameRequestId = r(_)),
                        g(M, O),
                        i.world(M, O),
                        M.context.setTransform(
                          M.options.pixelRatio,
                          0,
                          0,
                          M.options.pixelRatio,
                          0,
                          0
                        ),
                        (M.options.showStats || M.options.showDebug) && i.stats(M, M.context, O),
                        (M.options.showPerformance || M.options.showDebug) &&
                          i.performance(M, M.context, O),
                        M.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (i.stop = function (M) {
                    y(M.frameRequestId);
                  }),
                  (i.setPixelRatio = function (M, _) {
                    var O = M.options,
                      A = M.canvas;
                    (_ === 'auto' && (_ = D(A)),
                      (O.pixelRatio = _),
                      A.setAttribute('data-pixel-ratio', _),
                      (A.width = O.width * _),
                      (A.height = O.height * _),
                      (A.style.width = O.width + 'px'),
                      (A.style.height = O.height + 'px'));
                  }),
                  (i.setSize = function (M, _, O) {
                    ((M.options.width = _),
                      (M.options.height = O),
                      (M.bounds.max.x = M.bounds.min.x + _),
                      (M.bounds.max.y = M.bounds.min.y + O),
                      M.options.pixelRatio !== 1
                        ? i.setPixelRatio(M, M.options.pixelRatio)
                        : ((M.canvas.width = _), (M.canvas.height = O)));
                  }),
                  (i.lookAt = function (M, _, O, A) {
                    ((A = typeof A < 'u' ? A : !0),
                      (_ = f.isArray(_) ? _ : [_]),
                      (O = O || { x: 0, y: 0 }));
                    for (
                      var B = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, z = 0;
                      z < _.length;
                      z += 1
                    ) {
                      var L = _[z],
                        G = L.bounds ? L.bounds.min : L.min || L.position || L,
                        J = L.bounds ? L.bounds.max : L.max || L.position || L;
                      G &&
                        J &&
                        (G.x < B.min.x && (B.min.x = G.x),
                        J.x > B.max.x && (B.max.x = J.x),
                        G.y < B.min.y && (B.min.y = G.y),
                        J.y > B.max.y && (B.max.y = J.y));
                    }
                    var te = B.max.x - B.min.x + 2 * O.x,
                      ee = B.max.y - B.min.y + 2 * O.y,
                      V = M.canvas.height,
                      K = M.canvas.width,
                      ne = K / V,
                      se = te / ee,
                      he = 1,
                      j = 1;
                    (se > ne ? (j = se / ne) : (he = ne / se),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = B.min.x),
                      (M.bounds.max.x = B.min.x + te * he),
                      (M.bounds.min.y = B.min.y),
                      (M.bounds.max.y = B.min.y + ee * j),
                      A &&
                        ((M.bounds.min.x += te * 0.5 - te * he * 0.5),
                        (M.bounds.max.x += te * 0.5 - te * he * 0.5),
                        (M.bounds.min.y += ee * 0.5 - ee * j * 0.5),
                        (M.bounds.max.y += ee * 0.5 - ee * j * 0.5)),
                      (M.bounds.min.x -= O.x),
                      (M.bounds.max.x -= O.x),
                      (M.bounds.min.y -= O.y),
                      (M.bounds.max.y -= O.y),
                      M.mouse &&
                        (v.setScale(M.mouse, {
                          x: (M.bounds.max.x - M.bounds.min.x) / M.canvas.width,
                          y: (M.bounds.max.y - M.bounds.min.y) / M.canvas.height,
                        }),
                        v.setOffset(M.mouse, M.bounds.min)));
                  }),
                  (i.startViewTransform = function (M) {
                    var _ = M.bounds.max.x - M.bounds.min.x,
                      O = M.bounds.max.y - M.bounds.min.y,
                      A = _ / M.options.width,
                      B = O / M.options.height;
                    (M.context.setTransform(
                      M.options.pixelRatio / A,
                      0,
                      0,
                      M.options.pixelRatio / B,
                      0,
                      0
                    ),
                      M.context.translate(-M.bounds.min.x, -M.bounds.min.y));
                  }),
                  (i.endViewTransform = function (M) {
                    M.context.setTransform(M.options.pixelRatio, 0, 0, M.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (M, _) {
                    var O = f.now(),
                      A = M.engine,
                      B = A.world,
                      z = M.canvas,
                      L = M.context,
                      G = M.options,
                      J = M.timing,
                      te = c.allBodies(B),
                      ee = c.allConstraints(B),
                      V = G.wireframes ? G.wireframeBackground : G.background,
                      K = [],
                      ne = [],
                      se,
                      he = { timestamp: A.timing.timestamp };
                    if (
                      (o.trigger(M, 'beforeRender', he),
                      M.currentBackground !== V && H(M, V),
                      (L.globalCompositeOperation = 'source-in'),
                      (L.fillStyle = 'transparent'),
                      L.fillRect(0, 0, z.width, z.height),
                      (L.globalCompositeOperation = 'source-over'),
                      G.hasBounds)
                    ) {
                      for (se = 0; se < te.length; se++) {
                        var j = te[se];
                        m.overlaps(j.bounds, M.bounds) && K.push(j);
                      }
                      for (se = 0; se < ee.length; se++) {
                        var $ = ee[se],
                          ae = $.bodyA,
                          ie = $.bodyB,
                          oe = $.pointA,
                          ue = $.pointB;
                        (ae && (oe = p.add(ae.position, $.pointA)),
                          ie && (ue = p.add(ie.position, $.pointB)),
                          !(!oe || !ue) &&
                            (m.contains(M.bounds, oe) || m.contains(M.bounds, ue)) &&
                            ne.push($));
                      }
                      (i.startViewTransform(M),
                        M.mouse &&
                          (v.setScale(M.mouse, {
                            x: (M.bounds.max.x - M.bounds.min.x) / M.options.width,
                            y: (M.bounds.max.y - M.bounds.min.y) / M.options.height,
                          }),
                          v.setOffset(M.mouse, M.bounds.min)));
                    } else
                      ((ne = ee),
                        (K = te),
                        M.options.pixelRatio !== 1 &&
                          M.context.setTransform(
                            M.options.pixelRatio,
                            0,
                            0,
                            M.options.pixelRatio,
                            0,
                            0
                          ));
                    (!G.wireframes || (A.enableSleeping && G.showSleeping)
                      ? i.bodies(M, K, L)
                      : (G.showConvexHulls && i.bodyConvexHulls(M, K, L),
                        i.bodyWireframes(M, K, L)),
                      G.showBounds && i.bodyBounds(M, K, L),
                      (G.showAxes || G.showAngleIndicator) && i.bodyAxes(M, K, L),
                      G.showPositions && i.bodyPositions(M, K, L),
                      G.showVelocity && i.bodyVelocity(M, K, L),
                      G.showIds && i.bodyIds(M, K, L),
                      G.showSeparations && i.separations(M, A.pairs.list, L),
                      G.showCollisions && i.collisions(M, A.pairs.list, L),
                      G.showVertexNumbers && i.vertexNumbers(M, K, L),
                      G.showMousePosition && i.mousePosition(M, M.mouse, L),
                      i.constraints(ne, L),
                      G.hasBounds && i.endViewTransform(M),
                      o.trigger(M, 'afterRender', he),
                      (J.lastElapsed = f.now() - O));
                  }),
                  (i.stats = function (M, _, O) {
                    for (
                      var A = M.engine,
                        B = A.world,
                        z = c.allBodies(B),
                        L = 0,
                        G = 55,
                        J = 44,
                        te = 0,
                        ee = 0,
                        V = 0;
                      V < z.length;
                      V += 1
                    )
                      L += z[V].parts.length;
                    var K = {
                      Part: L,
                      Body: z.length,
                      Cons: c.allConstraints(B).length,
                      Comp: c.allComposites(B).length,
                      Pair: A.pairs.list.length,
                    };
                    ((_.fillStyle = '#0e0f19'),
                      _.fillRect(te, ee, G * 5.5, J),
                      (_.font = '12px Arial'),
                      (_.textBaseline = 'top'),
                      (_.textAlign = 'right'));
                    for (var ne in K) {
                      var se = K[ne];
                      ((_.fillStyle = '#aaa'),
                        _.fillText(ne, te + G, ee + 8),
                        (_.fillStyle = '#eee'),
                        _.fillText(se, te + G, ee + 26),
                        (te += G));
                    }
                  }),
                  (i.performance = function (M, _) {
                    var O = M.engine,
                      A = M.timing,
                      B = A.deltaHistory,
                      z = A.elapsedHistory,
                      L = A.timestampElapsedHistory,
                      G = A.engineDeltaHistory,
                      J = A.engineUpdatesHistory,
                      te = A.engineElapsedHistory,
                      ee = O.timing.lastUpdatesPerFrame,
                      V = O.timing.lastDelta,
                      K = E(B),
                      ne = E(z),
                      se = E(G),
                      he = E(J),
                      j = E(te),
                      $ = E(L),
                      ae = $ / K || 0,
                      ie = Math.round(K / V),
                      oe = 1e3 / K || 0,
                      ue = 4,
                      ye = 12,
                      Me = 60,
                      be = 34,
                      Ke = 10,
                      et = 69;
                    ((_.fillStyle = '#0e0f19'),
                      _.fillRect(0, 50, ye * 5 + Me * 6 + 22, be),
                      i.status(
                        _,
                        Ke,
                        et,
                        Me,
                        ue,
                        B.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function ($e) {
                          return B[$e] / K - 1;
                        }
                      ),
                      i.status(
                        _,
                        Ke + ye + Me,
                        et,
                        Me,
                        ue,
                        G.length,
                        V.toFixed(2) + ' dt',
                        i._goodDelta / V,
                        function ($e) {
                          return G[$e] / se - 1;
                        }
                      ),
                      i.status(
                        _,
                        Ke + (ye + Me) * 2,
                        et,
                        Me,
                        ue,
                        J.length,
                        ee + ' upf',
                        Math.pow(f.clamp(he / ie || 1, 0, 1), 4),
                        function ($e) {
                          return J[$e] / he - 1;
                        }
                      ),
                      i.status(
                        _,
                        Ke + (ye + Me) * 3,
                        et,
                        Me,
                        ue,
                        te.length,
                        j.toFixed(2) + ' ut',
                        1 - (ee * j) / i._goodFps,
                        function ($e) {
                          return te[$e] / j - 1;
                        }
                      ),
                      i.status(
                        _,
                        Ke + (ye + Me) * 4,
                        et,
                        Me,
                        ue,
                        z.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function ($e) {
                          return z[$e] / ne - 1;
                        }
                      ),
                      i.status(
                        _,
                        Ke + (ye + Me) * 5,
                        et,
                        Me,
                        ue,
                        L.length,
                        ae.toFixed(2) + ' x',
                        ae * ae * ae,
                        function ($e) {
                          return (L[$e] / B[$e] / ae || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (M, _, O, A, B, z, L, G, J) {
                    ((M.strokeStyle = '#888'),
                      (M.fillStyle = '#444'),
                      (M.lineWidth = 1),
                      M.fillRect(_, O + 7, A, 1),
                      M.beginPath(),
                      M.moveTo(_, O + 7 - B * f.clamp(0.4 * J(0), -2, 2)));
                    for (var te = 0; te < A; te += 1)
                      M.lineTo(_ + te, O + 7 - (te < z ? B * f.clamp(0.4 * J(te), -2, 2) : 0));
                    (M.stroke(),
                      (M.fillStyle = 'hsl(' + f.clamp(25 + 95 * G, 0, 120) + ',100%,60%)'),
                      M.fillRect(_, O - 7, 4, 4),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'middle'),
                      (M.textAlign = 'right'),
                      (M.fillStyle = '#eee'),
                      M.fillText(L, _ + A, O - 5));
                  }),
                  (i.constraints = function (M, _) {
                    for (var O = _, A = 0; A < M.length; A++) {
                      var B = M[A];
                      if (!(!B.render.visible || !B.pointA || !B.pointB)) {
                        var z = B.bodyA,
                          L = B.bodyB,
                          G,
                          J;
                        if (
                          (z ? (G = p.add(z.position, B.pointA)) : (G = B.pointA),
                          B.render.type === 'pin')
                        )
                          (O.beginPath(), O.arc(G.x, G.y, 3, 0, 2 * Math.PI), O.closePath());
                        else {
                          if (
                            (L ? (J = p.add(L.position, B.pointB)) : (J = B.pointB),
                            O.beginPath(),
                            O.moveTo(G.x, G.y),
                            B.render.type === 'spring')
                          )
                            for (
                              var te = p.sub(J, G),
                                ee = p.perp(p.normalise(te)),
                                V = Math.ceil(f.clamp(B.length / 5, 12, 20)),
                                K,
                                ne = 1;
                              ne < V;
                              ne += 1
                            )
                              ((K = ne % 2 === 0 ? 1 : -1),
                                O.lineTo(
                                  G.x + te.x * (ne / V) + ee.x * K * 4,
                                  G.y + te.y * (ne / V) + ee.y * K * 4
                                ));
                          O.lineTo(J.x, J.y);
                        }
                        (B.render.lineWidth &&
                          ((O.lineWidth = B.render.lineWidth),
                          (O.strokeStyle = B.render.strokeStyle),
                          O.stroke()),
                          B.render.anchors &&
                            ((O.fillStyle = B.render.strokeStyle),
                            O.beginPath(),
                            O.arc(G.x, G.y, 3, 0, 2 * Math.PI),
                            O.arc(J.x, J.y, 3, 0, 2 * Math.PI),
                            O.closePath(),
                            O.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (M, _, O) {
                    var A = O;
                    M.engine;
                    var B = M.options,
                      z = B.showInternalEdges || !B.wireframes,
                      L,
                      G,
                      J,
                      te;
                    for (J = 0; J < _.length; J++)
                      if (((L = _[J]), !!L.render.visible)) {
                        for (te = L.parts.length > 1 ? 1 : 0; te < L.parts.length; te++)
                          if (((G = L.parts[te]), !!G.render.visible)) {
                            if (
                              (B.showSleeping && L.isSleeping
                                ? (A.globalAlpha = 0.5 * G.render.opacity)
                                : G.render.opacity !== 1 && (A.globalAlpha = G.render.opacity),
                              G.render.sprite && G.render.sprite.texture && !B.wireframes)
                            ) {
                              var ee = G.render.sprite,
                                V = w(M, ee.texture);
                              (A.translate(G.position.x, G.position.y),
                                A.rotate(G.angle),
                                A.drawImage(
                                  V,
                                  V.width * -ee.xOffset * ee.xScale,
                                  V.height * -ee.yOffset * ee.yScale,
                                  V.width * ee.xScale,
                                  V.height * ee.yScale
                                ),
                                A.rotate(-G.angle),
                                A.translate(-G.position.x, -G.position.y));
                            } else {
                              if (G.circleRadius)
                                (A.beginPath(),
                                  A.arc(
                                    G.position.x,
                                    G.position.y,
                                    G.circleRadius,
                                    0,
                                    2 * Math.PI
                                  ));
                              else {
                                (A.beginPath(), A.moveTo(G.vertices[0].x, G.vertices[0].y));
                                for (var K = 1; K < G.vertices.length; K++)
                                  (!G.vertices[K - 1].isInternal || z
                                    ? A.lineTo(G.vertices[K].x, G.vertices[K].y)
                                    : A.moveTo(G.vertices[K].x, G.vertices[K].y),
                                    G.vertices[K].isInternal &&
                                      !z &&
                                      A.moveTo(
                                        G.vertices[(K + 1) % G.vertices.length].x,
                                        G.vertices[(K + 1) % G.vertices.length].y
                                      ));
                                (A.lineTo(G.vertices[0].x, G.vertices[0].y), A.closePath());
                              }
                              B.wireframes
                                ? ((A.lineWidth = 1),
                                  (A.strokeStyle = M.options.wireframeStrokeStyle),
                                  A.stroke())
                                : ((A.fillStyle = G.render.fillStyle),
                                  G.render.lineWidth &&
                                    ((A.lineWidth = G.render.lineWidth),
                                    (A.strokeStyle = G.render.strokeStyle),
                                    A.stroke()),
                                  A.fill());
                            }
                            A.globalAlpha = 1;
                          }
                      }
                  }),
                  (i.bodyWireframes = function (M, _, O) {
                    var A = O,
                      B = M.options.showInternalEdges,
                      z,
                      L,
                      G,
                      J,
                      te;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.render.visible))
                        for (te = z.parts.length > 1 ? 1 : 0; te < z.parts.length; te++) {
                          for (
                            L = z.parts[te], A.moveTo(L.vertices[0].x, L.vertices[0].y), J = 1;
                            J < L.vertices.length;
                            J++
                          )
                            (!L.vertices[J - 1].isInternal || B
                              ? A.lineTo(L.vertices[J].x, L.vertices[J].y)
                              : A.moveTo(L.vertices[J].x, L.vertices[J].y),
                              L.vertices[J].isInternal &&
                                !B &&
                                A.moveTo(
                                  L.vertices[(J + 1) % L.vertices.length].x,
                                  L.vertices[(J + 1) % L.vertices.length].y
                                ));
                          A.lineTo(L.vertices[0].x, L.vertices[0].y);
                        }
                    ((A.lineWidth = 1),
                      (A.strokeStyle = M.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (i.bodyConvexHulls = function (M, _, O) {
                    var A = O,
                      B,
                      z,
                      L;
                    for (A.beginPath(), z = 0; z < _.length; z++)
                      if (((B = _[z]), !(!B.render.visible || B.parts.length === 1))) {
                        for (
                          A.moveTo(B.vertices[0].x, B.vertices[0].y), L = 1;
                          L < B.vertices.length;
                          L++
                        )
                          A.lineTo(B.vertices[L].x, B.vertices[L].y);
                        A.lineTo(B.vertices[0].x, B.vertices[0].y);
                      }
                    ((A.lineWidth = 1), (A.strokeStyle = 'rgba(255,255,255,0.2)'), A.stroke());
                  }),
                  (i.vertexNumbers = function (M, _, O) {
                    var A = O,
                      B,
                      z,
                      L;
                    for (B = 0; B < _.length; B++) {
                      var G = _[B].parts;
                      for (L = G.length > 1 ? 1 : 0; L < G.length; L++) {
                        var J = G[L];
                        for (z = 0; z < J.vertices.length; z++)
                          ((A.fillStyle = 'rgba(255,255,255,0.2)'),
                            A.fillText(
                              B + '_' + z,
                              J.position.x + (J.vertices[z].x - J.position.x) * 0.8,
                              J.position.y + (J.vertices[z].y - J.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (M, _, O) {
                    var A = O;
                    ((A.fillStyle = 'rgba(255,255,255,0.8)'),
                      A.fillText(
                        _.position.x + '  ' + _.position.y,
                        _.position.x + 5,
                        _.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (M, _, O) {
                    var A = O;
                    M.engine;
                    var B = M.options;
                    A.beginPath();
                    for (var z = 0; z < _.length; z++) {
                      var L = _[z];
                      if (L.render.visible)
                        for (var G = _[z].parts, J = G.length > 1 ? 1 : 0; J < G.length; J++) {
                          var te = G[J];
                          A.rect(
                            te.bounds.min.x,
                            te.bounds.min.y,
                            te.bounds.max.x - te.bounds.min.x,
                            te.bounds.max.y - te.bounds.min.y
                          );
                        }
                    }
                    (B.wireframes
                      ? (A.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (A.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (i.bodyAxes = function (M, _, O) {
                    var A = O;
                    M.engine;
                    var B = M.options,
                      z,
                      L,
                      G,
                      J;
                    for (A.beginPath(), L = 0; L < _.length; L++) {
                      var te = _[L],
                        ee = te.parts;
                      if (te.render.visible)
                        if (B.showAxes)
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (z = ee[G], J = 0; J < z.axes.length; J++) {
                              var V = z.axes[J];
                              (A.moveTo(z.position.x, z.position.y),
                                A.lineTo(z.position.x + V.x * 20, z.position.y + V.y * 20));
                            }
                        else
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (z = ee[G], J = 0; J < z.axes.length; J++)
                              (A.moveTo(z.position.x, z.position.y),
                                A.lineTo(
                                  (z.vertices[0].x + z.vertices[z.vertices.length - 1].x) / 2,
                                  (z.vertices[0].y + z.vertices[z.vertices.length - 1].y) / 2
                                ));
                    }
                    (B.wireframes
                      ? ((A.strokeStyle = 'indianred'), (A.lineWidth = 1))
                      : ((A.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (A.globalCompositeOperation = 'overlay'),
                        (A.lineWidth = 2)),
                      A.stroke(),
                      (A.globalCompositeOperation = 'source-over'));
                  }),
                  (i.bodyPositions = function (M, _, O) {
                    var A = O;
                    M.engine;
                    var B = M.options,
                      z,
                      L,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.render.visible))
                        for (J = 0; J < z.parts.length; J++)
                          ((L = z.parts[J]),
                            A.arc(L.position.x, L.position.y, 3, 0, 2 * Math.PI, !1),
                            A.closePath());
                    for (
                      B.wireframes
                        ? (A.fillStyle = 'indianred')
                        : (A.fillStyle = 'rgba(0,0,0,0.5)'),
                        A.fill(),
                        A.beginPath(),
                        G = 0;
                      G < _.length;
                      G++
                    )
                      ((z = _[G]),
                        z.render.visible &&
                          (A.arc(z.positionPrev.x, z.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          A.closePath()));
                    ((A.fillStyle = 'rgba(255,165,0,0.8)'), A.fill());
                  }),
                  (i.bodyVelocity = function (M, _, O) {
                    var A = O;
                    A.beginPath();
                    for (var B = 0; B < _.length; B++) {
                      var z = _[B];
                      if (z.render.visible) {
                        var L = d.getVelocity(z);
                        (A.moveTo(z.position.x, z.position.y),
                          A.lineTo(z.position.x + L.x, z.position.y + L.y));
                      }
                    }
                    ((A.lineWidth = 3), (A.strokeStyle = 'cornflowerblue'), A.stroke());
                  }),
                  (i.bodyIds = function (M, _, O) {
                    var A = O,
                      B,
                      z;
                    for (B = 0; B < _.length; B++)
                      if (_[B].render.visible) {
                        var L = _[B].parts;
                        for (z = L.length > 1 ? 1 : 0; z < L.length; z++) {
                          var G = L[z];
                          ((A.font = '12px Arial'),
                            (A.fillStyle = 'rgba(255,255,255,0.5)'),
                            A.fillText(G.id, G.position.x + 10, G.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (M, _, O) {
                    var A = O,
                      B = M.options,
                      z,
                      L,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.isActive))
                        for (L = z.collision, J = 0; J < z.contactCount; J++) {
                          var te = z.contacts[J],
                            ee = te.vertex;
                          A.rect(ee.x - 1.5, ee.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      B.wireframes
                        ? (A.fillStyle = 'rgba(255,255,255,0.7)')
                        : (A.fillStyle = 'orange'),
                        A.fill(),
                        A.beginPath(),
                        G = 0;
                      G < _.length;
                      G++
                    )
                      if (((z = _[G]), !!z.isActive && ((L = z.collision), z.contactCount > 0))) {
                        var V = z.contacts[0].vertex.x,
                          K = z.contacts[0].vertex.y;
                        (z.contactCount === 2 &&
                          ((V = (z.contacts[0].vertex.x + z.contacts[1].vertex.x) / 2),
                          (K = (z.contacts[0].vertex.y + z.contacts[1].vertex.y) / 2)),
                          L.bodyB === L.supports[0].body || L.bodyA.isStatic === !0
                            ? A.moveTo(V - L.normal.x * 8, K - L.normal.y * 8)
                            : A.moveTo(V + L.normal.x * 8, K + L.normal.y * 8),
                          A.lineTo(V, K));
                      }
                    (B.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (A.strokeStyle = 'orange'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (i.separations = function (M, _, O) {
                    var A = O,
                      B = M.options,
                      z,
                      L,
                      G,
                      J,
                      te;
                    for (A.beginPath(), te = 0; te < _.length; te++)
                      if (((z = _[te]), !!z.isActive)) {
                        ((L = z.collision), (G = L.bodyA), (J = L.bodyB));
                        var ee = 1;
                        (!J.isStatic && !G.isStatic && (ee = 0.5),
                          J.isStatic && (ee = 0),
                          A.moveTo(J.position.x, J.position.y),
                          A.lineTo(
                            J.position.x - L.penetration.x * ee,
                            J.position.y - L.penetration.y * ee
                          ),
                          (ee = 1),
                          !J.isStatic && !G.isStatic && (ee = 0.5),
                          G.isStatic && (ee = 0),
                          A.moveTo(G.position.x, G.position.y),
                          A.lineTo(
                            G.position.x + L.penetration.x * ee,
                            G.position.y + L.penetration.y * ee
                          ));
                      }
                    (B.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (A.strokeStyle = 'orange'),
                      A.stroke());
                  }),
                  (i.inspector = function (M, _) {
                    M.engine;
                    var O = M.selected,
                      A = M.render,
                      B = A.options,
                      z;
                    if (B.hasBounds) {
                      var L = A.bounds.max.x - A.bounds.min.x,
                        G = A.bounds.max.y - A.bounds.min.y,
                        J = L / A.options.width,
                        te = G / A.options.height;
                      (_.scale(1 / J, 1 / te), _.translate(-A.bounds.min.x, -A.bounds.min.y));
                    }
                    for (var ee = 0; ee < O.length; ee++) {
                      var V = O[ee].data;
                      switch (
                        (_.translate(0.5, 0.5),
                        (_.lineWidth = 1),
                        (_.strokeStyle = 'rgba(255,165,0,0.9)'),
                        _.setLineDash([1, 2]),
                        V.type)
                      ) {
                        case 'body':
                          ((z = V.bounds),
                            _.beginPath(),
                            _.rect(
                              Math.floor(z.min.x - 3),
                              Math.floor(z.min.y - 3),
                              Math.floor(z.max.x - z.min.x + 6),
                              Math.floor(z.max.y - z.min.y + 6)
                            ),
                            _.closePath(),
                            _.stroke());
                          break;
                        case 'constraint':
                          var K = V.pointA;
                          (V.bodyA && (K = V.pointB),
                            _.beginPath(),
                            _.arc(K.x, K.y, 10, 0, 2 * Math.PI),
                            _.closePath(),
                            _.stroke());
                          break;
                      }
                      (_.setLineDash([]), _.translate(-0.5, -0.5));
                    }
                    (M.selectStart !== null &&
                      (_.translate(0.5, 0.5),
                      (_.lineWidth = 1),
                      (_.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (_.fillStyle = 'rgba(255,165,0,0.1)'),
                      (z = M.selectBounds),
                      _.beginPath(),
                      _.rect(
                        Math.floor(z.min.x),
                        Math.floor(z.min.y),
                        Math.floor(z.max.x - z.min.x),
                        Math.floor(z.max.y - z.min.y)
                      ),
                      _.closePath(),
                      _.stroke(),
                      _.fill(),
                      _.translate(-0.5, -0.5)),
                      B.hasBounds && _.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var g = function (M, _) {
                    var O = M.engine,
                      A = M.timing,
                      B = A.historySize,
                      z = O.timing.timestamp;
                    ((A.delta = _ - A.lastTime || i._goodDelta),
                      (A.lastTime = _),
                      (A.timestampElapsed = z - A.lastTimestamp || 0),
                      (A.lastTimestamp = z),
                      A.deltaHistory.unshift(A.delta),
                      (A.deltaHistory.length = Math.min(A.deltaHistory.length, B)),
                      A.engineDeltaHistory.unshift(O.timing.lastDelta),
                      (A.engineDeltaHistory.length = Math.min(A.engineDeltaHistory.length, B)),
                      A.timestampElapsedHistory.unshift(A.timestampElapsed),
                      (A.timestampElapsedHistory.length = Math.min(
                        A.timestampElapsedHistory.length,
                        B
                      )),
                      A.engineUpdatesHistory.unshift(O.timing.lastUpdatesPerFrame),
                      (A.engineUpdatesHistory.length = Math.min(A.engineUpdatesHistory.length, B)),
                      A.engineElapsedHistory.unshift(O.timing.lastElapsed),
                      (A.engineElapsedHistory.length = Math.min(A.engineElapsedHistory.length, B)),
                      A.elapsedHistory.unshift(A.lastElapsed),
                      (A.elapsedHistory.length = Math.min(A.elapsedHistory.length, B)));
                  },
                  E = function (M) {
                    for (var _ = 0, O = 0; O < M.length; O += 1) _ += M[O];
                    return _ / M.length || 0;
                  },
                  R = function (M, _) {
                    var O = document.createElement('canvas');
                    return (
                      (O.width = M),
                      (O.height = _),
                      (O.oncontextmenu = function () {
                        return !1;
                      }),
                      (O.onselectstart = function () {
                        return !1;
                      }),
                      O
                    );
                  },
                  D = function (M) {
                    var _ = M.getContext('2d'),
                      O = window.devicePixelRatio || 1,
                      A =
                        _.webkitBackingStorePixelRatio ||
                        _.mozBackingStorePixelRatio ||
                        _.msBackingStorePixelRatio ||
                        _.oBackingStorePixelRatio ||
                        _.backingStorePixelRatio ||
                        1;
                    return O / A;
                  },
                  w = function (M, _) {
                    var O = M.textures[_];
                    return O || ((O = M.textures[_] = new Image()), (O.src = _), O);
                  },
                  H = function (M, _) {
                    var O = _;
                    (/(jpg|gif|png)$/.test(_) && (O = 'url(' + _ + ')'),
                      (M.canvas.style.background = O),
                      (M.canvas.style.backgroundSize = 'contain'),
                      (M.currentBackground = _));
                  };
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(5),
                f = h(17),
                c = h(0);
              (function () {
                ((i._maxFrameDelta = 1e3 / 15),
                  (i._frameDeltaFallback = 1e3 / 60),
                  (i._timeBufferMargin = 1.5),
                  (i._elapsedNextEstimate = 1),
                  (i._smoothingLowerBound = 0.1),
                  (i._smoothingUpperBound = 0.9),
                  (i.create = function (o) {
                    var p = {
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
                      v = c.extend(p, o);
                    return ((v.fps = 0), v);
                  }),
                  (i.run = function (o, p) {
                    return (
                      (o.timeBuffer = i._frameDeltaFallback),
                      (function v(r) {
                        ((o.frameRequestId = i._onNextFrame(o, v)),
                          r && o.enabled && i.tick(o, p, r));
                      })(),
                      o
                    );
                  }),
                  (i.tick = function (o, p, v) {
                    var r = c.now(),
                      y = o.delta,
                      g = 0,
                      E = v - o.timeLastTick;
                    if (
                      ((!E || !o.timeLastTick || E > Math.max(i._maxFrameDelta, o.maxFrameTime)) &&
                        (E = o.frameDelta || i._frameDeltaFallback),
                      o.frameDeltaSmoothing)
                    ) {
                      (o.frameDeltaHistory.push(E),
                        (o.frameDeltaHistory = o.frameDeltaHistory.slice(
                          -o.frameDeltaHistorySize
                        )));
                      var R = o.frameDeltaHistory.slice(0).sort(),
                        D = o.frameDeltaHistory.slice(
                          R.length * i._smoothingLowerBound,
                          R.length * i._smoothingUpperBound
                        ),
                        w = m(D);
                      E = w || E;
                    }
                    (o.frameDeltaSnapping && (E = 1e3 / Math.round(1e3 / E)),
                      (o.frameDelta = E),
                      (o.timeLastTick = v),
                      (o.timeBuffer += o.frameDelta),
                      (o.timeBuffer = c.clamp(
                        o.timeBuffer,
                        0,
                        o.frameDelta + y * i._timeBufferMargin
                      )),
                      (o.lastUpdatesDeferred = 0));
                    var H = o.maxUpdates || Math.ceil(o.maxFrameTime / y),
                      M = { timestamp: p.timing.timestamp };
                    (d.trigger(o, 'beforeTick', M), d.trigger(o, 'tick', M));
                    for (var _ = c.now(); y > 0 && o.timeBuffer >= y * i._timeBufferMargin; ) {
                      (d.trigger(o, 'beforeUpdate', M),
                        f.update(p, y),
                        d.trigger(o, 'afterUpdate', M),
                        (o.timeBuffer -= y),
                        (g += 1));
                      var O = c.now() - r,
                        A = c.now() - _,
                        B = O + (i._elapsedNextEstimate * A) / g;
                      if (g >= H || B > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((p.timing.lastUpdatesPerFrame = g),
                      d.trigger(o, 'afterTick', M),
                      o.frameDeltaHistory.length >= 100 &&
                        (o.lastUpdatesDeferred && Math.round(o.frameDelta / y) > H
                          ? c.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.')
                          : o.lastUpdatesDeferred &&
                            c.warnOnce(
                              'Matter.Runner: runner reached runner.maxFrameTime, see docs.'
                            ),
                        typeof o.isFixed < 'u' &&
                          c.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.'),
                        (o.deltaMin || o.deltaMax) &&
                          c.warnOnce(
                            'Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.'
                          ),
                        o.fps !== 0 &&
                          c.warnOnce(
                            'Matter.Runner: runner.fps was replaced by runner.delta, see docs.'
                          )));
                  }),
                  (i.stop = function (o) {
                    i._cancelNextFrame(o);
                  }),
                  (i._onNextFrame = function (o, p) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      o.frameRequestId = window.requestAnimationFrame(p);
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
                  for (var p = 0, v = o.length, r = 0; r < v; r += 1) p += o[r];
                  return p / v || 0;
                };
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(8),
                f = h(0),
                c = f.deprecated;
              (function () {
                ((i.collides = function (m, o) {
                  return d.collides(m, o);
                }),
                  c(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (T, x, h) {
              var i = {};
              ((T.exports = i), h(1));
              var d = h(0);
              (function () {
                ((i.pathToVertices = function (f, c) {
                  typeof window < 'u' &&
                    !('SVGPathSeg' in window) &&
                    d.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
                  var m,
                    o,
                    p,
                    v,
                    r,
                    y,
                    g,
                    E,
                    R,
                    D,
                    w = [],
                    H,
                    M,
                    _ = 0,
                    O = 0,
                    A = 0;
                  c = c || 15;
                  var B = function (L, G, J) {
                      var te = J % 2 === 1 && J > 1;
                      if (!R || L != R.x || G != R.y) {
                        R && te ? ((H = R.x), (M = R.y)) : ((H = 0), (M = 0));
                        var ee = { x: H + L, y: M + G };
                        ((te || !R) && (R = ee), w.push(ee), (O = H + L), (A = M + G));
                      }
                    },
                    z = function (L) {
                      var G = L.pathSegTypeAsLetter.toUpperCase();
                      if (G !== 'Z') {
                        switch (G) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((O = L.x), (A = L.y));
                            break;
                          case 'H':
                            O = L.x;
                            break;
                          case 'V':
                            A = L.y;
                            break;
                        }
                        B(O, A, L.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(f), p = f.getTotalLength(), y = [], m = 0;
                    m < f.pathSegList.numberOfItems;
                    m += 1
                  )
                    y.push(f.pathSegList.getItem(m));
                  for (g = y.concat(); _ < p; ) {
                    if (((D = f.getPathSegAtLength(_)), (r = y[D]), r != E)) {
                      for (; g.length && g[0] != r; ) z(g.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((v = f.getPointAtLength(_)), B(v.x, v.y, 0));
                        break;
                    }
                    _ += c;
                  }
                  for (m = 0, o = g.length; m < o; ++m) z(g[m]);
                  return w;
                }),
                  (i._svgPathToAbsolute = function (f) {
                    for (
                      var c,
                        m,
                        o,
                        p,
                        v,
                        r,
                        y = f.pathSegList,
                        g = 0,
                        E = 0,
                        R = y.numberOfItems,
                        D = 0;
                      D < R;
                      ++D
                    ) {
                      var w = y.getItem(D),
                        H = w.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(H)) ('x' in w && (g = w.x), 'y' in w && (E = w.y));
                      else
                        switch (
                          ('x1' in w && (o = g + w.x1),
                          'x2' in w && (v = g + w.x2),
                          'y1' in w && (p = E + w.y1),
                          'y2' in w && (r = E + w.y2),
                          'x' in w && (g += w.x),
                          'y' in w && (E += w.y),
                          H)
                        ) {
                          case 'm':
                            y.replaceItem(f.createSVGPathSegMovetoAbs(g, E), D);
                            break;
                          case 'l':
                            y.replaceItem(f.createSVGPathSegLinetoAbs(g, E), D);
                            break;
                          case 'h':
                            y.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(g), D);
                            break;
                          case 'v':
                            y.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), D);
                            break;
                          case 'c':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicAbs(g, E, o, p, v, r), D);
                            break;
                          case 's':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(g, E, v, r), D);
                            break;
                          case 'q':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(g, E, o, p), D);
                            break;
                          case 't':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(g, E), D);
                            break;
                          case 'a':
                            y.replaceItem(
                              f.createSVGPathSegArcAbs(
                                g,
                                E,
                                w.r1,
                                w.r2,
                                w.angle,
                                w.largeArcFlag,
                                w.sweepFlag
                              ),
                              D
                            );
                            break;
                          case 'z':
                          case 'Z':
                            ((g = c), (E = m));
                            break;
                        }
                      (H == 'M' || H == 'm') && ((c = g), (m = E));
                    }
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
      })(nr)),
    nr.exports
  );
}
var yS = gS();
const Te = x0(yS),
  an = {
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
  pS = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 46, 6: 54, 7: 62, 8: 72, 9: 82, 10: 104 },
  SS = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  xS = {
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
  ES = {
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
  av = (s, b) => {
    const T = String(b).padStart(2, '0');
    return `images/${s}/level${T}.png`;
  },
  bS = 256,
  ph = {
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
  TS = (s) => (s * (s + 1)) / 2,
  MS = (s) => ({
    id: s,
    level: s,
    name: xS[s],
    theme: ES[s],
    radius: pS[s],
    restitution: SS[s],
    friction: 0.3,
    density: 0.001,
    score: TS(s),
    svgPath: av(sr, s),
    color: ph[s].color,
    glowColor: ph[s].glow,
  }),
  Cl = 10,
  cr = Object.fromEntries(Array.from({ length: Cl }, (s, b) => b + 1).map((s) => [s, MS(s)]));
Array.from({ length: Cl }, (s, b) => cr[b + 1]);
const Hc = 3,
  CS = 360,
  RS = (s) => Math.min(1, s / CS),
  Sh = new Map(),
  Jn = (s, b, T = sr) => {
    const x = `${s}|${b}|${T}`,
      h = Sh.get(x);
    if (h) return h;
    const i = cr[s],
      d = { ...i, radius: i.radius * RS(b), svgPath: av(T, s) };
    return (Sh.set(x, d), d);
  },
  kn = {
    gravityY: 1.5,
    wallThickness: 150,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  Fn = { wall: 1, item: 2, magnetTarget: 4 },
  iv = Fn.wall | Fn.item | Fn.magnetTarget,
  AS = Fn.wall | Fn.magnetTarget,
  uv = typeof window < 'u' && typeof window.localStorage < 'u',
  or = (s) => {
    if (!uv) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  fr = (s, b) => {
    if (uv)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  _S = () => {
    const s = or(an.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  OS = (s) => {
    fr(an.storageKeys.bestScore, String(s));
  },
  DS = () => {
    const s = or(an.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  zS = (s) => {
    const b = [s, ...DS()].slice(0, an.maxScoreHistory);
    return (fr(an.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  wS = () => {
    const s = or(an.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  NS = (s) => {
    fr(an.storageKeys.isSoundOn, String(s));
  },
  BS = () => {
    const s = or(an.storageKeys.themeId);
    return Pc(s) ? s : sr;
  },
  xh = (s) => {
    fr(an.storageKeys.themeId, s);
  },
  US = () => {
    const [s, b] = N.useState(0),
      [T, x] = N.useState(0),
      [h, i] = N.useState(!1),
      d = N.useRef(0),
      f = N.useRef(0);
    N.useEffect(() => {
      const v = _S();
      ((f.current = v), x(v));
    }, []);
    const c = N.useCallback((v) => {
        ((d.current += v), b(d.current));
      }, []),
      m = N.useCallback((v) => {
        ((d.current = v), b(v));
      }, []),
      o = N.useCallback(() => {
        ((d.current = 0), b(0), i(!1));
      }, []),
      p = N.useCallback(() => {
        const v = d.current,
          r = v > f.current;
        return (
          r && ((f.current = v), OS(v), x(v)),
          zS(v),
          i(r),
          { isNewRecord: r, finalScore: v }
        );
      }, []);
    return { score: s, bestScore: T, isNewRecord: h, add: c, setRaw: m, reset: o, finalize: p };
  },
  HS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  LS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  jS = 0.7,
  GS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  YS = () => {
    const [s, b] = N.useState(!0),
      T = N.useRef(null),
      x = N.useRef({});
    (N.useEffect(() => {
      b(wS());
    }, []),
      N.useEffect(() => {
        const d = GS();
        if (!d) return;
        const f = new d();
        T.current = f;
        let c = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, p] of Object.entries(LS))
              try {
                const r = await (await fetch(HS(p))).arrayBuffer();
                if (c) return;
                const y = await f.decodeAudioData(r);
                if (c) return;
                m[o] = y;
              } catch {}
            x.current = m;
          })(),
          () => {
            ((c = !0), f.close().catch(() => {}), (T.current = null), (x.current = {}));
          }
        );
      }, []));
    const h = N.useCallback(() => {
        b((d) => {
          const f = !d;
          return (NS(f), f);
        });
      }, []),
      i = N.useCallback(
        (d) => {
          if (!s) return;
          const f = T.current,
            c = x.current[d];
          if (!f || !c) return;
          f.state === 'suspended' && f.resume().catch(() => {});
          const m = f.createBufferSource();
          m.buffer = c;
          const o = f.createGain();
          ((o.gain.value = jS), m.connect(o).connect(f.destination), m.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: h, play: i };
  },
  Lc = (s, b, T, x) => {
    const h = Te.Bodies.circle(b, T, s.radius, {
      restitution: s.restitution,
      friction: s.friction,
      density: s.density,
      label: `item-${s.level}`,
      collisionFilter: { category: Fn.item, mask: iv },
    });
    return ((h.plugin.itemData = { level: s.level, consumed: !1, droppedAt: x }), h);
  },
  Kn = (s) => s.plugin.itemData,
  VS = (s, b) => {
    const T = kn.wallThickness,
      x = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: Fn.wall },
      },
      h = Te.Bodies.rectangle(s / 2, b + T / 2, s + T * 2, T, x),
      i = Te.Bodies.rectangle(-T / 2, b / 2, T, b * 2, x),
      d = Te.Bodies.rectangle(s + T / 2, b / 2, T, b * 2, x),
      f = Te.Bodies.rectangle(s / 2, -T / 2, s + T * 2, T, { ...x, restitution: 0 });
    return { ground: h, leftWall: i, rightWall: d, ceiling: f };
  },
  qS = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  XS = (s) => (s < 2 || s > Cl ? 0 : cr[s].score),
  QS = () => cr[Cl].score,
  eo = an.storageKeys.suspended,
  ZS = 1,
  Qt = (s) => typeof s == 'number' && Number.isFinite(s),
  KS = (s) => {
    if (typeof s != 'object' || s === null) return null;
    const b = s;
    return !Qt(b.level) || !Qt(b.x) || !Qt(b.y)
      ? null
      : {
          level: b.level,
          x: b.x,
          y: b.y,
          vx: Qt(b.vx) ? b.vx : 0,
          vy: Qt(b.vy) ? b.vy : 0,
          angle: Qt(b.angle) ? b.angle : 0,
          angularVelocity: Qt(b.angularVelocity) ? b.angularVelocity : 0,
        };
  },
  JS = () => {
    if (typeof window > 'u' || typeof window.localStorage > 'u') return null;
    let s = null;
    try {
      s = window.localStorage.getItem(eo);
    } catch {
      return null;
    }
    if (s === null) return null;
    try {
      const b = JSON.parse(s);
      if (typeof b != 'object' || b === null) return null;
      const T = b;
      if (!Qt(T.score) || !Array.isArray(T.bodies)) return null;
      const x = [];
      for (const h of T.bodies) {
        const i = KS(h);
        i && x.push(i);
      }
      return {
        version: Qt(T.version) ? T.version : 0,
        savedAt: Qt(T.savedAt) ? T.savedAt : 0,
        score: T.score,
        themeId: Pc(T.themeId) ? T.themeId : sr,
        currentItemLevel: Qt(T.currentItemLevel) ? T.currentItemLevel : 1,
        nextItemLevel: Qt(T.nextItemLevel) ? T.nextItemLevel : 1,
        skillGauge: Qt(T.skillGauge) ? T.skillGauge : 0,
        bodies: x,
      };
    } catch {
      return null;
    }
  },
  kS = (s) => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        const b = { ...s, version: ZS, savedAt: Date.now() };
        window.localStorage.setItem(eo, JSON.stringify(b));
      } catch {}
  },
  FS = () => {
    if (!(typeof window > 'u' || typeof window.localStorage > 'u'))
      try {
        window.localStorage.removeItem(eo);
      } catch {}
  },
  Eh = new Map(),
  rv = (s) => {
    const b = Eh.get(s);
    if (b) return b;
    const T = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (Eh.set(s, T), T);
  },
  Pu = (s, b) => {
    const T = (b.radius * 2) / bS;
    s.render.sprite = { texture: rv(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  bh = new Set(),
  Th = async (s, b) => {
    for (let T = 1; T <= Cl; T += 1) {
      const x = Jn(T, 1, s),
        h = rv(x.svgPath);
      if (!bh.has(h)) {
        bh.add(h);
        try {
          const d = await (await fetch(h)).blob(),
            f = await createImageBitmap(d);
          b && (b.textures[h] = f);
        } catch {
          const i = new Image();
          i.src = h;
        }
      }
    }
  },
  $S = ({ fieldWidth: s, fieldHeight: b }) => {
    const T = N.useRef(null),
      x = N.useRef(null),
      h = N.useRef(null),
      i = N.useRef(null),
      d = N.useRef(null),
      [f, c] = N.useState('idle'),
      [m, o] = N.useState(null),
      [p, v] = N.useState(null),
      r = N.useRef(null),
      y = N.useRef(null),
      g = N.useCallback((le) => {
        ((r.current = le), o(le));
      }, []),
      E = N.useCallback((le) => {
        ((y.current = le), v(le));
      }, []),
      R = N.useRef(!0),
      D = N.useRef(0),
      w = N.useRef('idle'),
      H = N.useRef(null),
      M = N.useRef(s),
      _ = N.useRef(b),
      [O, A] = N.useState(() => BS()),
      B = N.useRef(O);
    B.current = O;
    const z = US(),
      L = YS(),
      G = N.useRef(z.add);
    G.current = z.add;
    const J = N.useRef(L.play);
    J.current = L.play;
    const te = N.useRef(z.finalize);
    te.current = z.finalize;
    const [ee, V] = N.useState(0),
      K = N.useRef(0),
      ne = N.useCallback((le) => {
        ((K.current = le), V(le));
      }, []),
      se = N.useCallback(
        (le) => {
          const ge = Math.min(at.gaugeMax, K.current + le);
          ge !== K.current && ne(ge);
        },
        [ne]
      ),
      he = N.useRef(se);
    he.current = se;
    const [j, $] = N.useState(!1),
      [ae, ie] = N.useState(!1),
      oe = N.useRef(!1),
      [ue, ye] = N.useState(!1),
      Me = N.useRef(!1),
      be = N.useRef(null),
      Ke = N.useRef(null),
      et = N.useRef(null),
      $e = N.useRef(null),
      xn = N.useRef(new Set()),
      Bt = N.useCallback((le) => {
        ((le.collisionFilter.category = Fn.magnetTarget),
          (le.collisionFilter.mask = AS),
          xn.current.add(le));
      }, []),
      fn = N.useCallback(() => {
        for (const le of xn.current)
          ((le.collisionFilter.category = Fn.item), (le.collisionFilter.mask = iv));
        xn.current.clear();
      }, []),
      En = N.useCallback(() => {
        (fn(),
          (et.current = null),
          ($e.current = null),
          be.current === 'magnet' && (be.current = null));
      }, [fn]),
      Pn = N.useRef(En);
    Pn.current = En;
    const bt = N.useRef(null),
      [Mt, Ut] = N.useState(null),
      ht = N.useRef(null),
      Xe = N.useRef(new Set()),
      Jl = N.useRef(1),
      We = N.useCallback(() => {
        let le;
        return ((le = Math.floor(Math.random() * Hc) + 1), Jn(le, M.current, B.current));
      }, []);
    N.useEffect(() => {
      const le = T.current;
      if (!le) return;
      const ge = M.current,
        Oe = _.current,
        pe = Te.Engine.create({ gravity: { x: 0, y: kn.gravityY } }),
        de = Te.Render.create({
          element: le,
          engine: pe,
          options: {
            width: ge,
            height: Oe,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: me, leftWall: ze, rightWall: we, ceiling: Je } = VS(ge, Oe);
      ([me, ze, we, Je].forEach((vt) => {
        vt.render.visible = !1;
      }),
        Te.World.add(pe.world, [me, ze, we, Je]),
        Te.Render.run(de));
      const Ue = Te.Runner.create();
      (Te.Runner.run(Ue, pe), (x.current = pe), (h.current = de), (i.current = Ue));
      for (const vt of Ic) Th(vt.id, de);
      const tt = () => {
        document.hidden
          ? (Te.Runner.stop(Ue), Te.Render.stop(de))
          : (Te.Render.run(de), Te.Runner.run(Ue, pe));
      };
      document.addEventListener('visibilitychange', tt);
      const ot = Xe.current;
      return () => {
        (document.removeEventListener('visibilitychange', tt),
          Te.Runner.stop(Ue),
          Te.Render.stop(de),
          Te.World.clear(pe.world, !1),
          Te.Engine.clear(pe),
          de.canvas.parentNode && de.canvas.parentNode.removeChild(de.canvas),
          (de.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          ot.clear());
      };
    }, []);
    const Rl = N.useCallback((le, ge) => {
      var tt;
      const Oe = x.current;
      if (!Oe) return;
      const pe = Kn(le),
        de = Kn(ge);
      if (!pe || !de || pe.consumed || de.consumed || pe.level !== de.level) return;
      ((pe.consumed = !0), (de.consumed = !0));
      const me = pe.level + 1,
        ze = qS(le, ge);
      (Te.World.remove(Oe.world, [le, ge]), Xe.current.delete(le), Xe.current.delete(ge));
      let we = 0,
        Je = !1,
        Ue = I1(me);
      if (me > Cl)
        ((we = QS()), (Je = !0), (Ue += at.bonusOnSpecialElimination), J.current('special'));
      else {
        const ot = Jn(me, M.current, B.current),
          vt = Lc(ot, ze.x, ze.y, performance.now());
        (Pu(vt, ot),
          Te.World.add(Oe.world, vt),
          Xe.current.add(vt),
          (we = XS(me)),
          (Je = me === Cl),
          Je && (Ue += at.bonusOnLevel10Created),
          J.current(Je ? 'special' : 'merge'));
      }
      (G.current(we),
        he.current(Ue),
        (tt = d.current) == null || tt.add({ x: ze.x, y: ze.y, score: we, isSpecial: Je }));
    }, []);
    (N.useEffect(() => {
      const le = x.current;
      if (!le) return;
      const ge = (Oe) => {
        for (const pe of Oe.pairs) Rl(pe.bodyA, pe.bodyB);
      };
      return (
        Te.Events.on(le, 'collisionStart', ge),
        () => {
          Te.Events.off(le, 'collisionStart', ge);
        }
      );
    }, [Rl]),
      N.useEffect(() => {
        const le = x.current;
        if (!le) return;
        const ge = kn.gameOverLineOffset;
        let Oe = 0;
        const pe = () => {
            ((bt.current = null), ht.current !== null && ((ht.current = null), Ut(null)));
          },
          de = () => {
            if (et.current !== null)
              if (performance.now() >= et.current) Pn.current();
              else {
                const ot = [];
                for (const vt of xn.current) {
                  const Cn = Kn(vt);
                  Cn && !Cn.consumed && ot.push(vt);
                }
                if (ot.length >= 2) {
                  let vt = 0,
                    Cn = 0;
                  for (const gt of ot) ((vt += gt.position.x), (Cn += gt.position.y));
                  ((vt /= ot.length), (Cn /= ot.length));
                  for (const gt of ot) {
                    const it = vt - gt.position.x,
                      yt = Cn - gt.position.y,
                      hn = Math.hypot(it, yt);
                    if (hn < 1) continue;
                    const Wl = at.magnet.forceMagnitude * gt.mass;
                    Te.Body.applyForce(gt, gt.position, { x: (it / hn) * Wl, y: (yt / hn) * Wl });
                  }
                } else Pn.current();
              }
            if (w.current !== 'playing') return;
            if (Me.current) {
              bt.current !== null &&
                ((bt.current = null), ht.current !== null && ((ht.current = null), Ut(null)));
              return;
            }
            if (((Oe = (Oe + 1) % 6), Oe !== 0)) return;
            const me = performance.now();
            let ze = !1;
            for (const tt of Xe.current) {
              const ot = Kn(tt);
              if (
                !(!ot || ot.consumed) &&
                !(me - ot.droppedAt < kn.gameOverGracePeriodMs) &&
                !(Math.abs(tt.velocity.y) > kn.restingVelocityThreshold) &&
                tt.position.y - tt.circleRadius < ge
              ) {
                ze = !0;
                break;
              }
            }
            if (!ze) {
              pe();
              return;
            }
            bt.current === null && (bt.current = me);
            const we = me - bt.current,
              Je = kn.gameOverDangerLimitMs;
            if (we >= Je) {
              (pe(), (w.current = 'gameover'), c('gameover'));
              const tt = te.current();
              J.current(tt.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Ue = Math.max(1, Math.ceil((Je - we) / 1e3));
            Ue !== ht.current && ((ht.current = Ue), Ut(Ue));
          };
        return (
          Te.Events.on(le, 'afterUpdate', de),
          () => {
            Te.Events.off(le, 'afterUpdate', de);
          }
        );
      }, []),
      N.useEffect(() => {
        if (x.current) {
          Th(O, h.current);
          for (const pe of Xe.current) {
            const de = Kn(pe);
            if (!de || de.consumed) continue;
            const me = Jn(de.level, M.current, O);
            Pu(pe, me);
          }
        }
        const ge = r.current ? Jn(r.current.level, M.current, O) : null,
          Oe = y.current ? Jn(y.current.level, M.current, O) : null;
        (g(ge), E(Oe));
      }, [O, g, E]));
    const bn = N.useCallback((le) => {
        (A(le), xh(le));
      }, []),
      Ht = N.useCallback((le) => {
        ((oe.current = le), ie(le));
      }, []),
      Zt = N.useCallback(
        (le) => {
          ne(Math.max(0, K.current - le));
        },
        [ne]
      ),
      Tn = N.useCallback(() => {
        if (!x.current) return;
        be.current = 'shake';
        const { impulseMin: ge, impulseMax: Oe, upwardBias: pe } = at.shake;
        for (const de of Xe.current) {
          const me = Kn(de);
          if (!me || me.consumed) continue;
          const ze = Math.random() * Math.PI * 2,
            we = ge + Math.random() * (Oe - ge),
            Je = Math.cos(ze) * we * de.mass,
            Ue = (Math.sin(ze) * we - pe) * de.mass;
          Te.Body.applyForce(de, de.position, { x: Je, y: Ue });
        }
        (J.current('special'), (be.current = null));
      }, []),
      dn = N.useCallback(() => {
        const le = x.current;
        if (!le || Ke.current !== null) return;
        ((be.current = 'gravityFlip'), (Me.current = !0));
        const ge = kn.gravityY;
        le.gravity.y = ge * at.gravityFlip.multiplier;
        const Oe = new Map(),
          pe = new Map();
        for (const de of Xe.current)
          (Oe.set(de, de.frictionAir),
            pe.set(de, de.restitution),
            (de.frictionAir = at.gravityFlip.frictionAir),
            Te.Body.setVelocity(de, { x: de.velocity.x, y: at.gravityFlip.liftKickVelocity }));
        (ye(!0),
          J.current('special'),
          (Ke.current = window.setTimeout(() => {
            const de = x.current;
            de && (de.gravity.y = ge * at.gravityFlip.slamGravityMultiplier);
            for (const me of Xe.current)
              ((me.frictionAir = at.gravityFlip.slamFrictionAir),
                pe.has(me) || pe.set(me, me.restitution),
                (me.restitution = at.gravityFlip.slamRestitution),
                Te.Body.setVelocity(me, { x: me.velocity.x, y: at.gravityFlip.slamKickVelocity }));
            (ye(!1),
              J.current('special'),
              (Ke.current = window.setTimeout(() => {
                const me = x.current;
                me && (me.gravity.y = ge);
                for (const ze of Xe.current)
                  ((ze.frictionAir = Oe.get(ze) ?? 0.01), (ze.restitution = pe.get(ze) ?? 0.4));
                ((Ke.current = null),
                  (Me.current = !1),
                  be.current === 'gravityFlip' && (be.current = null));
              }, at.gravityFlip.slamDurationMs)));
          }, at.gravityFlip.durationMs)));
      }, []),
      ji = N.useCallback(() => {
        ((be.current = 'magnet'), Ht(!0));
      }, [Ht]),
      dr = N.useCallback(() => {
        oe.current && (Ht(!1), (be.current = null));
      }, [Ht]),
      Al = N.useCallback(
        (le, ge) => {
          if (!oe.current) return;
          const Oe = Array.from(Xe.current),
            pe = Te.Query.point(Oe, { x: le, y: ge });
          if (pe.length === 0) return;
          const de = pe[0],
            me = Kn(de);
          if (!me) return;
          const ze = Oe.filter((Je) => {
            if (Je === de) return !1;
            const Ue = Kn(Je);
            return !!Ue && !Ue.consumed && Ue.level === me.level;
          });
          if (ze.length === 0) return;
          const we = ze[Math.floor(Math.random() * ze.length)];
          (Bt(de),
            Bt(we),
            ($e.current = me.level),
            (et.current = performance.now() + at.magnet.durationMs),
            Ht(!1),
            J.current('special'),
            Zt(Ni('magnet')));
        },
        [Zt, Ht, Bt]
      ),
      Ct = N.useCallback(() => {
        K.current < at.segmentMax || (w.current === 'playing' && $(!0));
      }, []),
      mn = N.useCallback(() => {
        $(!1);
      }, []),
      Rt = N.useCallback(
        (le) => {
          const ge = Ni(le);
          K.current < ge ||
            ($(!1),
            le === 'shake'
              ? (Tn(), Zt(ge))
              : le === 'gravityFlip'
                ? (dn(), Zt(ge))
                : le === 'magnet' && ji());
        },
        [Tn, dn, ji, Zt]
      ),
      el = N.useCallback(() => {
        Ke.current !== null && (window.clearTimeout(Ke.current), (Ke.current = null));
        const le = x.current;
        (le && (le.gravity.y = kn.gravityY),
          ye(!1),
          (Me.current = !1),
          fn(),
          (et.current = null),
          ($e.current = null),
          (be.current = null),
          $(!1),
          Ht(!1),
          ne(0));
      }, [Ht, ne, fn]),
      mr = N.useCallback(
        (le) => {
          const ge = x.current;
          if (!ge || w.current !== 'playing' || !R.current) return;
          const Oe = r.current;
          if (!Oe) return;
          const pe = performance.now();
          if (pe - D.current < an.dropCooldownMs) return;
          const de = Math.max(0, Math.min(1, le)),
            me = Oe.radius,
            ze = me,
            we = M.current - me,
            Je = ze + de * (we - ze),
            Ue = Oe.radius + 4,
            tt = Lc(Oe, Je, Ue, pe);
          (Pu(tt, Oe),
            Te.World.add(ge.world, tt),
            Xe.current.add(tt),
            J.current('drop'),
            (R.current = !1),
            (D.current = pe),
            H.current !== null && window.clearTimeout(H.current),
            (H.current = window.setTimeout(() => {
              ((H.current = null),
                w.current === 'playing' && (g(y.current), E(We()), (R.current = !0)));
            }, an.dropCooldownMs)));
        },
        [We, g, E]
      ),
      La = N.useCallback(() => {
        var le;
        (z.reset(),
          (le = d.current) == null || le.clear(),
          el(),
          (bt.current = null),
          (ht.current = null),
          Ut(null),
          (Jl.current = 1),
          g(We()),
          E(We()),
          (R.current = !0),
          (D.current = 0),
          (w.current = 'playing'),
          c('playing'));
      }, [z, We, el, g, E]),
      kl = N.useCallback(() => {
        const le = x.current;
        if (le) {
          for (const ge of Xe.current) Te.World.remove(le.world, ge);
          Xe.current.clear();
        }
        (H.current !== null && (window.clearTimeout(H.current), (H.current = null)), La());
      }, [La]),
      Fl = N.useCallback(() => {
        var Oe, pe, de;
        if (w.current !== 'playing') return;
        const le = [];
        for (const me of Xe.current) {
          const ze = Kn(me);
          !ze ||
            ze.consumed ||
            le.push({
              level: ze.level,
              x: me.position.x,
              y: me.position.y,
              vx: me.velocity.x,
              vy: me.velocity.y,
              angle: me.angle,
              angularVelocity: me.angularVelocity,
            });
        }
        kS({
          score: z.score,
          themeId: B.current,
          currentItemLevel: ((Oe = r.current) == null ? void 0 : Oe.level) ?? 1,
          nextItemLevel: ((pe = y.current) == null ? void 0 : pe.level) ?? 1,
          skillGauge: K.current,
          bodies: le,
        });
        const ge = x.current;
        if (ge) {
          for (const me of Xe.current) Te.World.remove(ge.world, me);
          Xe.current.clear();
        }
        (H.current !== null && (window.clearTimeout(H.current), (H.current = null)),
          (de = d.current) == null || de.clear(),
          el(),
          (bt.current = null),
          (ht.current = null),
          Ut(null),
          g(null),
          E(null),
          z.reset(),
          (R.current = !0),
          (D.current = 0),
          (w.current = 'idle'),
          c('idle'));
      }, [el, z, g, E]),
      $l = N.useCallback(
        (le) => {
          var ze;
          const ge = x.current;
          if (!ge) return;
          for (const we of Xe.current) Te.World.remove(ge.world, we);
          (Xe.current.clear(),
            H.current !== null && (window.clearTimeout(H.current), (H.current = null)),
            (ze = d.current) == null || ze.clear(),
            el(),
            (bt.current = null),
            (ht.current = null),
            Ut(null),
            le.themeId !== B.current && (A(le.themeId), (B.current = le.themeId), xh(le.themeId)));
          const Oe = performance.now();
          for (const we of le.bodies) {
            if (we.level < 1 || we.level > Cl) continue;
            const Je = Jn(we.level, M.current, le.themeId),
              Ue = Lc(Je, we.x, we.y, Oe);
            (Te.Body.setVelocity(Ue, { x: we.vx, y: we.vy }),
              Te.Body.setAngle(Ue, we.angle),
              Te.Body.setAngularVelocity(Ue, we.angularVelocity),
              Pu(Ue, Je),
              Te.World.add(ge.world, Ue),
              Xe.current.add(Ue));
          }
          const pe =
              le.currentItemLevel >= 1 && le.currentItemLevel <= Hc ? le.currentItemLevel : 1,
            de = le.nextItemLevel >= 1 && le.nextItemLevel <= Hc ? le.nextItemLevel : 1;
          (g(Jn(pe, M.current, le.themeId)), E(Jn(de, M.current, le.themeId)));
          const me = Math.max(0, Math.min(at.gaugeMax, le.skillGauge));
          (ne(me),
            z.reset(),
            z.setRaw(Math.max(0, le.score)),
            (R.current = !0),
            (D.current = 0),
            (w.current = 'playing'),
            c('playing'));
        },
        [el, z, g, E, ne]
      ),
      Mn = kn.gameOverLineOffset;
    return {
      status: f,
      score: z.score,
      bestScore: z.bestScore,
      isNewRecord: z.isNewRecord,
      currentItem: m,
      nextItem: p,
      isSoundOn: L.isSoundOn,
      themeId: O,
      mergeEffectRef: d,
      canvasContainerRef: T,
      drop: mr,
      start: La,
      restart: kl,
      toggleSound: L.toggle,
      setThemeId: bn,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: Mn,
      skillGauge: ee,
      skillGaugeMax: at.gaugeMax,
      skillSegmentMax: at.segmentMax,
      skillSegmentCount: at.segmentCount,
      canOpenSkillMenu: ee >= at.segmentMax,
      canUseSkill: {
        shake: ee >= Ni('shake'),
        gravityFlip: ee >= Ni('gravityFlip'),
        magnet: ee >= Ni('magnet'),
      },
      isSkillMenuOpen: j,
      openSkillMenu: Ct,
      closeSkillMenu: mn,
      selectSkill: Rt,
      isMagnetSelecting: ae,
      cancelMagnetSelecting: dr,
      selectMagnetTarget: Al,
      isGravityFlipped: ue,
      gameOverCountdown: Mt,
      suspend: Fl,
      resume: $l,
      loadSuspended: JS,
      clearSuspended: FS,
    };
  },
  WS = ({ size: s }) => {
    const b = $S({ fieldWidth: s.width, fieldHeight: s.height }),
      [T, x] = N.useState(!1),
      h = N.useCallback(() => x(!0), []),
      i = N.useCallback(() => x(!1), []),
      [d, f] = N.useState(null),
      c = N.useCallback(() => {
        const p = b.loadSuspended();
        p ? f(p) : b.start();
      }, [b]),
      m = N.useCallback(() => {
        (d && b.resume(d), b.clearSuspended(), f(null));
      }, [b, d]),
      o = N.useCallback(() => {
        (b.clearSuspended(), f(null), b.start());
      }, [b]);
    return F.jsxs(F.Fragment, {
      children: [
        F.jsx(hS, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          onOpenSettings: h,
        }),
        F.jsx('main', {
          className: Kl.main,
          children: F.jsxs('div', {
            className: Kl.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              F.jsx(Lp, {
                canvasContainerRef: b.canvasContainerRef,
                fieldWidth: s.width,
                fieldHeight: s.height,
                gameOverLineY: b.gameOverLineY,
                currentItem: b.currentItem,
                mergeEffectRef: b.mergeEffectRef,
                canInteract: b.status === 'playing',
                onDrop: b.drop,
                isMagnetSelecting: b.isMagnetSelecting,
                onMagnetSelect: b.selectMagnetTarget,
              }),
              F.jsx(Fh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              F.jsx(Jh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              F.jsx(Kh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? F.jsx('div', {
                    className: Kl.skill_button_wrapper,
                    children: F.jsx(Ph, {
                      gauge: b.skillGauge,
                      segmentMax: b.skillSegmentMax,
                      segmentCount: b.skillSegmentCount,
                      canOpen: b.canOpenSkillMenu,
                      onClick: b.openSkillMenu,
                    }),
                  })
                : null,
              b.status === 'idle' ? F.jsx(v1, { onStart: c }) : null,
              b.status === 'gameover'
                ? F.jsx(kp, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
        F.jsx(tv, {
          open: b.isSkillMenuOpen,
          onSelect: b.selectSkill,
          onClose: b.closeSkillMenu,
          canUse: b.canUseSkill,
        }),
        F.jsx(Ih, {
          open: T,
          onClose: i,
          themeId: b.themeId,
          onChangeTheme: b.setThemeId,
          isSoundOn: b.isSoundOn,
          onToggleSound: b.toggleSound,
          canSuspend: b.status === 'playing',
          onSuspend: b.suspend,
        }),
        F.jsx(kh, { open: d !== null, onYes: m, onNo: o }),
      ],
    });
  },
  IS = () => {
    const s = N.useRef(null),
      [b, T] = N.useState(null);
    return (
      N.useLayoutEffect(() => {
        const x = s.current;
        if (!x) return;
        const h = x.getBoundingClientRect();
        T({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      b === null
        ? F.jsxs('div', {
            className: Kl.layout,
            children: [
              F.jsx('div', { className: Kl.top_bar_placeholder, 'aria-hidden': 'true' }),
              F.jsx('main', { ref: s, className: Kl.main }),
            ],
          })
        : F.jsx('div', { className: Kl.layout, children: F.jsx(WS, { size: b }) })
    );
  },
  PS = () => F.jsx('div', { className: pp.index, children: F.jsx(IS, {}) }),
  ex = () => F.jsx('div', { children: F.jsx('h1', { children: 'Not Found' }) });
function tx() {
  return F.jsxs(F.Fragment, {
    children: [
      F.jsxs(_y, {
        children: [
          F.jsx(Gc, { path: '/', element: F.jsx(PS, {}) }),
          F.jsx(Gc, { path: '*', element: F.jsx(ex, {}) }),
        ],
      }),
      F.jsx(gp, {}),
    ],
  });
}
const sv = document.getElementById('root');
if (!sv) throw new Error('Failed to find #root element');
D0.createRoot(sv).render(F.jsx(Iy, { basename: '/ochimono-game', children: F.jsx(tx, {}) }));
