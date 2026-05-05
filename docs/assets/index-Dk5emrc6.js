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
var Vm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function h0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var pc = { exports: {} },
  Ti = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qm;
function v0() {
  if (qm) return Ti;
  qm = 1;
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
  return ((Ti.Fragment = b), (Ti.jsx = T), (Ti.jsxs = T), Ti);
}
var Xm;
function g0() {
  return (Xm || ((Xm = 1), (pc.exports = v0())), pc.exports);
}
var $ = g0(),
  Sc = { exports: {} },
  Mi = {},
  xc = { exports: {} },
  Ec = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qm;
function y0() {
  return (
    Qm ||
      ((Qm = 1),
      (function (s) {
        function b(V, K) {
          var ne = V.length;
          V.push(K);
          e: for (; 0 < ne; ) {
            var se = (ne - 1) >>> 1,
              de = V[se];
            if (0 < h(de, K)) ((V[se] = K), (V[ne] = de), (ne = se));
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
            e: for (var se = 0, de = V.length, j = de >>> 1; se < j; ) {
              var F = 2 * (se + 1) - 1,
                le = V[F],
                ae = F + 1,
                oe = V[ae];
              if (0 > h(le, ne))
                ae < de && 0 > h(oe, le)
                  ? ((V[se] = oe), (V[ae] = ne), (se = ae))
                  : ((V[se] = le), (V[F] = ne), (se = F));
              else if (ae < de && 0 > h(oe, ne)) ((V[se] = oe), (V[ae] = ne), (se = ae));
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
          y = null,
          g = 3,
          r = !1,
          p = !1,
          v = !1,
          E = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          D = typeof clearTimeout == 'function' ? clearTimeout : null,
          w = typeof setImmediate < 'u' ? setImmediate : null;
        function L(V) {
          for (var K = T(m); K !== null; ) {
            if (K.callback === null) x(m);
            else if (K.startTime <= V) (x(m), (K.sortIndex = K.expirationTime), b(c, K));
            else break;
            K = T(m);
          }
        }
        function M(V) {
          if (((v = !1), L(V), !p))
            if (T(c) !== null) ((p = !0), _ || ((_ = !0), G()));
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
        function H() {
          if (((E = !1), _)) {
            var V = s.unstable_now();
            B = V;
            var K = !0;
            try {
              e: {
                ((p = !1), v && ((v = !1), D(O), (O = -1)), (r = !0));
                var ne = g;
                try {
                  t: {
                    for (L(V), y = T(c); y !== null && !(y.expirationTime > V && z()); ) {
                      var se = y.callback;
                      if (typeof se == 'function') {
                        ((y.callback = null), (g = y.priorityLevel));
                        var de = se(y.expirationTime <= V);
                        if (((V = s.unstable_now()), typeof de == 'function')) {
                          ((y.callback = de), L(V), (K = !0));
                          break t;
                        }
                        (y === T(c) && x(c), L(V));
                      } else x(c);
                      y = T(c);
                    }
                    if (y !== null) K = !0;
                    else {
                      var j = T(m);
                      (j !== null && ee(M, j.startTime - V), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((y = null), (g = ne), (r = !1));
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
            w(H);
          };
        else if (typeof MessageChannel < 'u') {
          var J = new MessageChannel(),
            te = J.port2;
          ((J.port1.onmessage = H),
            (G = function () {
              te.postMessage(null);
            }));
        } else
          G = function () {
            R(H, 0);
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
            return g;
          }),
          (s.unstable_next = function (V) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = g;
            }
            var ne = g;
            g = K;
            try {
              return V();
            } finally {
              g = ne;
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
            var ne = g;
            g = V;
            try {
              return K();
            } finally {
              g = ne;
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
              (de = ne + de),
              (V = {
                id: o++,
                callback: K,
                priorityLevel: V,
                startTime: ne,
                expirationTime: de,
                sortIndex: -1,
              }),
              ne > se
                ? ((V.sortIndex = ne),
                  b(m, V),
                  T(c) === null && V === T(m) && (v ? (D(O), (O = -1)) : (v = !0), ee(M, ne - se)))
                : ((V.sortIndex = de), b(c, V), p || r || ((p = !0), _ || ((_ = !0), G()))),
              V
            );
          }),
          (s.unstable_shouldYield = z),
          (s.unstable_wrapCallback = function (V) {
            var K = g;
            return function () {
              var ne = g;
              g = K;
              try {
                return V.apply(this, arguments);
              } finally {
                g = ne;
              }
            };
          }));
      })(Ec)),
    Ec
  );
}
var Zm;
function p0() {
  return (Zm || ((Zm = 1), (xc.exports = y0())), xc.exports);
}
var bc = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km;
function S0() {
  if (Km) return ge;
  Km = 1;
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
    y = Symbol.for('react.activity'),
    g = Symbol.iterator;
  function r(j) {
    return j === null || typeof j != 'object'
      ? null
      : ((j = (g && j[g]) || j['@@iterator']), typeof j == 'function' ? j : null);
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
  function R(j, F, le) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = le || p));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (j, F) {
      if (typeof j != 'object' && typeof j != 'function' && j != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, j, F, 'setState');
    }),
    (R.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, 'forceUpdate');
    }));
  function D() {}
  D.prototype = R.prototype;
  function w(j, F, le) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = le || p));
  }
  var L = (w.prototype = new D());
  ((L.constructor = w), v(L, R.prototype), (L.isPureReactComponent = !0));
  var M = Array.isArray;
  function _() {}
  var O = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function B(j, F, le) {
    var ae = le.ref;
    return { $$typeof: s, type: j, key: F, ref: ae !== void 0 ? ae : null, props: le };
  }
  function z(j, F) {
    return B(j.type, F, j.props);
  }
  function H(j) {
    return typeof j == 'object' && j !== null && j.$$typeof === s;
  }
  function G(j) {
    var F = { '=': '=0', ':': '=2' };
    return (
      '$' +
      j.replace(/[=:]/g, function (le) {
        return F[le];
      })
    );
  }
  var J = /\/+/g;
  function te(j, F) {
    return typeof j == 'object' && j !== null && j.key != null ? G('' + j.key) : F.toString(36);
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
                function (F) {
                  j.status === 'pending' && ((j.status = 'fulfilled'), (j.value = F));
                },
                function (F) {
                  j.status === 'pending' && ((j.status = 'rejected'), (j.reason = F));
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
  function V(j, F, le, ae, oe) {
    var ie = typeof j;
    (ie === 'undefined' || ie === 'boolean') && (j = null);
    var ve = !1;
    if (j === null) ve = !0;
    else
      switch (ie) {
        case 'bigint':
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (j.$$typeof) {
            case s:
            case b:
              ve = !0;
              break;
            case o:
              return ((ve = j._init), V(ve(j._payload), F, le, ae, oe));
          }
      }
    if (ve)
      return (
        (oe = oe(j)),
        (ve = ae === '' ? '.' + te(j, 0) : ae),
        M(oe)
          ? ((le = ''),
            ve != null && (le = ve.replace(J, '$&/') + '/'),
            V(oe, F, le, '', function (Xe) {
              return Xe;
            }))
          : oe != null &&
            (H(oe) &&
              (oe = z(
                oe,
                le +
                  (oe.key == null || (j && j.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(J, '$&/') + '/') +
                  ve
              )),
            F.push(oe)),
        1
      );
    ve = 0;
    var be = ae === '' ? '.' : ae + ':';
    if (M(j))
      for (var Ee = 0; Ee < j.length; Ee++)
        ((ae = j[Ee]), (ie = be + te(ae, Ee)), (ve += V(ae, F, le, ie, oe)));
    else if (((Ee = r(j)), typeof Ee == 'function'))
      for (j = Ee.call(j), Ee = 0; !(ae = j.next()).done; )
        ((ae = ae.value), (ie = be + te(ae, Ee++)), (ve += V(ae, F, le, ie, oe)));
    else if (ie === 'object') {
      if (typeof j.then == 'function') return V(ee(j), F, le, ae, oe);
      throw (
        (F = String(j)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]' ? 'object with keys {' + Object.keys(j).join(', ') + '}' : F) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ve;
  }
  function K(j, F, le) {
    if (j == null) return j;
    var ae = [],
      oe = 0;
    return (
      V(j, ae, '', '', function (ie) {
        return F.call(le, ie, oe++);
      }),
      ae
    );
  }
  function ne(j) {
    if (j._status === -1) {
      var F = j._result;
      ((F = F()),
        F.then(
          function (le) {
            (j._status === 0 || j._status === -1) && ((j._status = 1), (j._result = le));
          },
          function (le) {
            (j._status === 0 || j._status === -1) && ((j._status = 2), (j._result = le));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = F)));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var se =
      typeof reportError == 'function'
        ? reportError
        : function (j) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var F = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof j == 'object' && j !== null && typeof j.message == 'string'
                    ? String(j.message)
                    : String(j),
                error: j,
              });
              if (!window.dispatchEvent(F)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', j);
              return;
            }
            console.error(j);
          },
    de = {
      map: K,
      forEach: function (j, F, le) {
        K(
          j,
          function () {
            F.apply(this, arguments);
          },
          le
        );
      },
      count: function (j) {
        var F = 0;
        return (
          K(j, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (j) {
        return (
          K(j, function (F) {
            return F;
          }) || []
        );
      },
      only: function (j) {
        if (!H(j))
          throw Error('React.Children.only expected to receive a single React element child.');
        return j;
      },
    };
  return (
    (ge.Activity = y),
    (ge.Children = de),
    (ge.Component = R),
    (ge.Fragment = T),
    (ge.Profiler = h),
    (ge.PureComponent = w),
    (ge.StrictMode = x),
    (ge.Suspense = c),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return O.H.useMemoCache(j);
      },
    }),
    (ge.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (ge.cacheSignal = function () {
      return null;
    }),
    (ge.cloneElement = function (j, F, le) {
      if (j == null) throw Error('The argument must be a React element, but you passed ' + j + '.');
      var ae = v({}, j.props),
        oe = j.key;
      if (F != null)
        for (ie in (F.key !== void 0 && (oe = '' + F.key), F))
          !A.call(F, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && F.ref === void 0) ||
            (ae[ie] = F[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) ae.children = le;
      else if (1 < ie) {
        for (var ve = Array(ie), be = 0; be < ie; be++) ve[be] = arguments[be + 2];
        ae.children = ve;
      }
      return B(j.type, oe, ae);
    }),
    (ge.createContext = function (j) {
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
    (ge.createElement = function (j, F, le) {
      var ae,
        oe = {},
        ie = null;
      if (F != null)
        for (ae in (F.key !== void 0 && (ie = '' + F.key), F))
          A.call(F, ae) && ae !== 'key' && ae !== '__self' && ae !== '__source' && (oe[ae] = F[ae]);
      var ve = arguments.length - 2;
      if (ve === 1) oe.children = le;
      else if (1 < ve) {
        for (var be = Array(ve), Ee = 0; Ee < ve; Ee++) be[Ee] = arguments[Ee + 2];
        oe.children = be;
      }
      if (j && j.defaultProps)
        for (ae in ((ve = j.defaultProps), ve)) oe[ae] === void 0 && (oe[ae] = ve[ae]);
      return B(j, ie, oe);
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (j) {
      return { $$typeof: f, render: j };
    }),
    (ge.isValidElement = H),
    (ge.lazy = function (j) {
      return { $$typeof: o, _payload: { _status: -1, _result: j }, _init: ne };
    }),
    (ge.memo = function (j, F) {
      return { $$typeof: m, type: j, compare: F === void 0 ? null : F };
    }),
    (ge.startTransition = function (j) {
      var F = O.T,
        le = {};
      O.T = le;
      try {
        var ae = j(),
          oe = O.S;
        (oe !== null && oe(le, ae),
          typeof ae == 'object' && ae !== null && typeof ae.then == 'function' && ae.then(_, se));
      } catch (ie) {
        se(ie);
      } finally {
        (F !== null && le.types !== null && (F.types = le.types), (O.T = F));
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (ge.use = function (j) {
      return O.H.use(j);
    }),
    (ge.useActionState = function (j, F, le) {
      return O.H.useActionState(j, F, le);
    }),
    (ge.useCallback = function (j, F) {
      return O.H.useCallback(j, F);
    }),
    (ge.useContext = function (j) {
      return O.H.useContext(j);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (j, F) {
      return O.H.useDeferredValue(j, F);
    }),
    (ge.useEffect = function (j, F) {
      return O.H.useEffect(j, F);
    }),
    (ge.useEffectEvent = function (j) {
      return O.H.useEffectEvent(j);
    }),
    (ge.useId = function () {
      return O.H.useId();
    }),
    (ge.useImperativeHandle = function (j, F, le) {
      return O.H.useImperativeHandle(j, F, le);
    }),
    (ge.useInsertionEffect = function (j, F) {
      return O.H.useInsertionEffect(j, F);
    }),
    (ge.useLayoutEffect = function (j, F) {
      return O.H.useLayoutEffect(j, F);
    }),
    (ge.useMemo = function (j, F) {
      return O.H.useMemo(j, F);
    }),
    (ge.useOptimistic = function (j, F) {
      return O.H.useOptimistic(j, F);
    }),
    (ge.useReducer = function (j, F, le) {
      return O.H.useReducer(j, F, le);
    }),
    (ge.useRef = function (j) {
      return O.H.useRef(j);
    }),
    (ge.useState = function (j) {
      return O.H.useState(j);
    }),
    (ge.useSyncExternalStore = function (j, F, le) {
      return O.H.useSyncExternalStore(j, F, le);
    }),
    (ge.useTransition = function () {
      return O.H.useTransition();
    }),
    (ge.version = '19.2.5'),
    ge
  );
}
var Jm;
function jc() {
  return (Jm || ((Jm = 1), (bc.exports = S0())), bc.exports);
}
var Tc = { exports: {} },
  Et = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var km;
function x0() {
  if (km) return Et;
  km = 1;
  var s = jc();
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
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: y == null ? null : '' + y,
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
    (Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (Et.createPortal = function (c, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(b(299));
      return i(c, m, null, o);
    }),
    (Et.flushSync = function (c) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), c)) return c();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
      }
    }),
    (Et.preconnect = function (c, m) {
      typeof c == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(c, m));
    }),
    (Et.prefetchDNS = function (c) {
      typeof c == 'string' && x.d.D(c);
    }),
    (Et.preinit = function (c, m) {
      if (typeof c == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          y = f(o, m.crossOrigin),
          g = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(c, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: g,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(c, {
              crossOrigin: y,
              integrity: g,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (Et.preinitModule = function (c, m) {
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
    (Et.preload = function (c, m) {
      if (typeof c == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var o = m.as,
          y = f(o, m.crossOrigin);
        x.d.L(c, o, {
          crossOrigin: y,
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
    (Et.preloadModule = function (c, m) {
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
    (Et.requestFormReset = function (c) {
      x.d.r(c);
    }),
    (Et.unstable_batchedUpdates = function (c, m) {
      return c(m);
    }),
    (Et.useFormState = function (c, m, o) {
      return d.H.useFormState(c, m, o);
    }),
    (Et.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Et.version = '19.2.5'),
    Et
  );
}
var Fm;
function E0() {
  if (Fm) return Tc.exports;
  Fm = 1;
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
  return (s(), (Tc.exports = x0()), Tc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function b0() {
  if ($m) return Mi;
  $m = 1;
  var s = p0(),
    b = jc(),
    T = E0();
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
  var y = Object.assign,
    g = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.portal'),
    v = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    D = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    L = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    _ = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    B = Symbol.for('react.activity'),
    z = Symbol.for('react.memo_cache_sentinel'),
    H = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (H && e[H]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var J = Symbol.for('react.client.reference');
  function te(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === J ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case v:
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
        case p:
          return 'Portal';
        case w:
          return e.displayName || 'Context';
        case D:
          return (e._context.displayName || 'Context') + '.Consumer';
        case L:
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
    de = -1;
  function j(e) {
    return { current: e };
  }
  function F(e) {
    0 > de || ((e.current = se[de]), (se[de] = null), de--);
  }
  function le(e, t) {
    (de++, (se[de] = e.current), (e.current = t));
  }
  var ae = j(null),
    oe = j(null),
    ie = j(null),
    ve = j(null);
  function be(e, t) {
    switch ((le(ie, t), le(oe, e), le(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? om(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = om(t)), (e = fm(t, e)));
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
    (F(ae), le(ae, e));
  }
  function Ee() {
    (F(ae), F(oe), F(ie));
  }
  function Xe(e) {
    e.memoizedState !== null && le(ve, e);
    var t = ae.current,
      n = fm(t, e.type);
    t !== n && (le(oe, e), le(ae, n));
  }
  function We(e) {
    (oe.current === e && (F(ae), F(oe)), ve.current === e && (F(ve), (Si._currentValue = ne)));
  }
  var ke, bn;
  function Bt(e) {
    if (ke === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((ke = (t && t[1]) || ''),
          (bn =
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
      ke +
      e +
      bn
    );
  }
  var on = !1;
  function Tn(e, t) {
    if (!e || on) return '';
    on = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                } catch (k) {
                  var Z = k;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (k) {
                  Z = k;
                }
                e.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                Z = k;
              }
              (I = e()) && typeof I.catch == 'function' && I.catch(function () {});
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
      ((on = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Bt(n) : '';
  }
  function Fn(e, t) {
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
        return Tn(e.type, !1);
      case 11:
        return Tn(e.type.render, !1);
      case 1:
        return Tn(e.type, !0);
      case 31:
        return Bt('Activity');
      default:
        return '';
    }
  }
  function Rt(e) {
    try {
      var t = '',
        n = null;
      do ((t += Fn(e, n)), (n = e), (e = e.return));
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
  var bt = Object.prototype.hasOwnProperty,
    nn = s.unstable_scheduleCallback,
    Tt = s.unstable_cancelCallback,
    st = s.unstable_shouldYield,
    fn = s.unstable_requestPaint,
    ct = s.unstable_now,
    ql = s.unstable_getCurrentPriorityLevel,
    St = s.unstable_ImmediatePriority,
    dn = s.unstable_UserBlockingPriority,
    Mn = s.unstable_NormalPriority,
    Cn = s.unstable_LowPriority,
    mn = s.unstable_IdlePriority,
    ir = s.log,
    ur = s.unstable_setDisableYieldValue,
    El = null,
    Mt = null;
  function hn(e) {
    if ((typeof ir == 'function' && ur(e), Mt && typeof Mt.setStrictMode == 'function'))
      try {
        Mt.setStrictMode(El, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : sr,
    rr = Math.log,
    za = Math.LN2;
  function sr(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((rr(e) / za) | 0)) | 0);
  }
  var Xl = 256,
    ue = 262144,
    xe = 4194304;
  function Re(e) {
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
  function pe(e, t, n) {
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
            ? (a = Re(l))
            : ((S &= C), S !== 0 ? (a = Re(S)) : n || ((n = C & ~e), n !== 0 && (a = Re(n)))))
        : ((C = l & ~u),
          C !== 0
            ? (a = Re(C))
            : S !== 0
              ? (a = Re(S))
              : n || ((n = l & ~e), n !== 0 && (a = Re(n)))),
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
  function he(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Te(e, t) {
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
  function He() {
    var e = xe;
    return ((xe <<= 1), (xe & 62914560) === 0 && (xe = 4194304), e);
  }
  function Pe(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Qe(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ke(e, t, n, l, a, u) {
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
      var W = 31 - xt(n),
        I = 1 << W;
      ((C[W] = 0), (U[W] = -1));
      var Z = Q[W];
      if (Z !== null)
        for (Q[W] = null, W = 0; W < Z.length; W++) {
          var k = Z[W];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~I;
    }
    (l !== 0 && tt(e, l, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function tt(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - xt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function ft(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - xt(n),
        a = 1 << l;
      ((a & t) | (e[l] & t) && (e[l] |= t), (n &= ~a));
    }
  }
  function ht(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : vn(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function vn(e) {
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
  function qt(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function wa() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Bm(e.type));
  }
  function Na(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var Xt = Math.random().toString(36).slice(2),
    nt = '__reactFiber$' + Xt,
    At = '__reactProps$' + Xt,
    Ql = '__reactContainer$' + Xt,
    cr = '__reactEvents$' + Xt,
    lv = '__reactListeners$' + Xt,
    av = '__reactHandles$' + Xt,
    Fc = '__reactResources$' + Xt,
    Ba = '__reactMarker$' + Xt;
  function or(e) {
    (delete e[nt], delete e[At], delete e[cr], delete e[lv], delete e[av]);
  }
  function Zl(e) {
    var t = e[nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ql] || n[nt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = pm(e); e !== null; ) {
            if ((n = e[nt])) return n;
            e = pm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Kl(e) {
    if ((e = e[nt] || e[Ql])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ua(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function Jl(e) {
    var t = e[Fc];
    return (t || (t = e[Fc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function dt(e) {
    e[Ba] = !0;
  }
  var $c = new Set(),
    Wc = {};
  function bl(e, t) {
    (kl(e, t), kl(e + 'Capture', t));
  }
  function kl(e, t) {
    for (Wc[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
  }
  var iv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Pc = {},
    Ic = {};
  function uv(e) {
    return bt.call(Ic, e)
      ? !0
      : bt.call(Pc, e)
        ? !1
        : iv.test(e)
          ? (Ic[e] = !0)
          : ((Pc[e] = !0), !1);
  }
  function Bi(e, t, n) {
    if (uv(t))
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
  function Ui(e, t, n) {
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
  function Qt(e) {
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
  function eo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function rv(e, t, n) {
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
  function fr(e) {
    if (!e._valueTracker) {
      var t = eo(e) ? 'checked' : 'value';
      e._valueTracker = rv(e, t, '' + e[t]);
    }
  }
  function to(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = eo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Hi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var sv = /[\n"\\]/g;
  function Zt(e) {
    return e.replace(sv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function dr(e, t, n, l, a, u, S, C) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Qt(t))
          : e.value !== '' + Qt(t) && (e.value = '' + Qt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? mr(e, S, Qt(t))
        : n != null
          ? mr(e, S, Qt(n))
          : l != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Qt(C))
        : e.removeAttribute('name'));
  }
  function no(e, t, n, l, a, u, S, C) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        fr(e);
        return;
      }
      ((n = n != null ? '' + Qt(n) : ''),
        (t = t != null ? '' + Qt(t) : n),
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
      fr(e));
  }
  function mr(e, t, n) {
    (t === 'number' && Hi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Fl(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Qt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          ((e[a].selected = !0), l && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function lo(e, t, n) {
    if (t != null && ((t = '' + Qt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Qt(n) : '';
  }
  function ao(e, t, n, l) {
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
    ((n = Qt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      fr(e));
  }
  function $l(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function io(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || cv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function uo(e, t, n) {
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
      for (var a in t) ((l = t[a]), t.hasOwnProperty(a) && n[a] !== l && io(e, a, l));
    } else for (var u in t) t.hasOwnProperty(u) && io(e, u, t[u]);
  }
  function hr(e) {
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
  var ov = new Map([
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
    fv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Li(e) {
    return fv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function An() {}
  var vr = null;
  function gr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wl = null,
    Pl = null;
  function ro(e) {
    var t = Kl(e);
    if (t && (e = t.stateNode)) {
      var n = e[At] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (dr(
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
              n = n.querySelectorAll('input[name="' + Zt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[At] || null;
                if (!a) throw Error(x(90));
                dr(
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
            for (t = 0; t < n.length; t++) ((l = n[t]), l.form === e.form && to(l));
          }
          break e;
        case 'textarea':
          lo(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Fl(e, !!n.multiple, t, !1));
      }
    }
  }
  var yr = !1;
  function so(e, t, n) {
    if (yr) return e(t, n);
    yr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((yr = !1),
        (Wl !== null || Pl !== null) &&
          (Mu(), Wl && ((t = Wl), (e = Pl), (Pl = Wl = null), ro(t), e)))
      )
        for (t = 0; t < e.length; t++) ro(e[t]);
    }
  }
  function Ha(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[At] || null;
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
    pr = !1;
  if (_n)
    try {
      var La = {};
      (Object.defineProperty(La, 'passive', {
        get: function () {
          pr = !0;
        },
      }),
        window.addEventListener('test', La, La),
        window.removeEventListener('test', La, La));
    } catch {
      pr = !1;
    }
  var $n = null,
    Sr = null,
    ji = null;
  function co() {
    if (ji) return ji;
    var e,
      t = Sr,
      n = t.length,
      l,
      a = 'value' in $n ? $n.value : $n.textContent,
      u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var S = n - e;
    for (l = 1; l <= S && t[n - l] === a[u - l]; l++);
    return (ji = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Gi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yi() {
    return !0;
  }
  function oo() {
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
          ? Yi
          : oo),
        (this.isPropagationStopped = oo),
        this
      );
    }
    return (
      y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Yi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yi));
        },
        persist: function () {},
        isPersistent: Yi,
      }),
      t
    );
  }
  var Tl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vi = _t(Tl),
    ja = y({}, Tl, { view: 0, detail: 0 }),
    dv = _t(ja),
    xr,
    Er,
    Ga,
    qi = y({}, ja, {
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
      getModifierState: Tr,
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
          : (e !== Ga &&
              (Ga && e.type === 'mousemove'
                ? ((xr = e.screenX - Ga.screenX), (Er = e.screenY - Ga.screenY))
                : (Er = xr = 0),
              (Ga = e)),
            xr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Er;
      },
    }),
    fo = _t(qi),
    mv = y({}, qi, { dataTransfer: 0 }),
    hv = _t(mv),
    vv = y({}, ja, { relatedTarget: 0 }),
    br = _t(vv),
    gv = y({}, Tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yv = _t(gv),
    pv = y({}, Tl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sv = _t(pv),
    xv = y({}, Tl, { data: 0 }),
    mo = _t(xv),
    Ev = {
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
    bv = {
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
    Tv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function Mv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Tv[e]) ? !!t[e] : !1;
  }
  function Tr() {
    return Mv;
  }
  var Cv = y({}, ja, {
      key: function (e) {
        if (e.key) {
          var t = Ev[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Gi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? bv[e.keyCode] || 'Unidentified'
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
      getModifierState: Tr,
      charCode: function (e) {
        return e.type === 'keypress' ? Gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Gi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Rv = _t(Cv),
    Av = y({}, qi, {
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
    ho = _t(Av),
    _v = y({}, ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tr,
    }),
    Ov = _t(_v),
    Dv = y({}, Tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zv = _t(Dv),
    wv = y({}, qi, {
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
    Nv = _t(wv),
    Bv = y({}, Tl, { newState: 0, oldState: 0 }),
    Uv = _t(Bv),
    Hv = [9, 13, 27, 32],
    Mr = _n && 'CompositionEvent' in window,
    Ya = null;
  _n && 'documentMode' in document && (Ya = document.documentMode);
  var Lv = _n && 'TextEvent' in window && !Ya,
    vo = _n && (!Mr || (Ya && 8 < Ya && 11 >= Ya)),
    go = ' ',
    yo = !1;
  function po(e, t) {
    switch (e) {
      case 'keyup':
        return Hv.indexOf(t.keyCode) !== -1;
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
  function So(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Il = !1;
  function jv(e, t) {
    switch (e) {
      case 'compositionend':
        return So(t);
      case 'keypress':
        return t.which !== 32 ? null : ((yo = !0), go);
      case 'textInput':
        return ((e = t.data), e === go && yo ? null : e);
      default:
        return null;
    }
  }
  function Gv(e, t) {
    if (Il)
      return e === 'compositionend' || (!Mr && po(e, t))
        ? ((e = co()), (ji = Sr = $n = null), (Il = !1), e)
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
        return vo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Yv = {
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
  function xo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Yv[e.type] : t === 'textarea';
  }
  function Eo(e, t, n, l) {
    (Wl ? (Pl ? Pl.push(l) : (Pl = [l])) : (Wl = l),
      (t = zu(t, 'onChange')),
      0 < t.length &&
        ((n = new Vi('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t })));
  }
  var Va = null,
    qa = null;
  function Vv(e) {
    am(e, 0);
  }
  function Xi(e) {
    var t = Ua(e);
    if (to(t)) return e;
  }
  function bo(e, t) {
    if (e === 'change') return t;
  }
  var To = !1;
  if (_n) {
    var Cr;
    if (_n) {
      var Rr = 'oninput' in document;
      if (!Rr) {
        var Mo = document.createElement('div');
        (Mo.setAttribute('oninput', 'return;'), (Rr = typeof Mo.oninput == 'function'));
      }
      Cr = Rr;
    } else Cr = !1;
    To = Cr && (!document.documentMode || 9 < document.documentMode);
  }
  function Co() {
    Va && (Va.detachEvent('onpropertychange', Ro), (qa = Va = null));
  }
  function Ro(e) {
    if (e.propertyName === 'value' && Xi(qa)) {
      var t = [];
      (Eo(t, qa, e, gr(e)), so(Vv, t));
    }
  }
  function qv(e, t, n) {
    e === 'focusin'
      ? (Co(), (Va = t), (qa = n), Va.attachEvent('onpropertychange', Ro))
      : e === 'focusout' && Co();
  }
  function Xv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Xi(qa);
  }
  function Qv(e, t) {
    if (e === 'click') return Xi(t);
  }
  function Zv(e, t) {
    if (e === 'input' || e === 'change') return Xi(t);
  }
  function Kv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ut = typeof Object.is == 'function' ? Object.is : Kv;
  function Xa(e, t) {
    if (Ut(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!bt.call(t, a) || !Ut(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Ao(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _o(e, t) {
    var n = Ao(e);
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
      n = Ao(n);
    }
  }
  function Oo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Oo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Do(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Hi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hi(e.document);
    }
    return t;
  }
  function Ar(e) {
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
  var Jv = _n && 'documentMode' in document && 11 >= document.documentMode,
    ea = null,
    _r = null,
    Qa = null,
    Or = !1;
  function zo(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Or ||
      ea == null ||
      ea !== Hi(l) ||
      ((l = ea),
      'selectionStart' in l && Ar(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Qa && Xa(Qa, l)) ||
        ((Qa = l),
        (l = zu(_r, 'onSelect')),
        0 < l.length &&
          ((t = new Vi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = ea))));
  }
  function Ml(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var ta = {
      animationend: Ml('Animation', 'AnimationEnd'),
      animationiteration: Ml('Animation', 'AnimationIteration'),
      animationstart: Ml('Animation', 'AnimationStart'),
      transitionrun: Ml('Transition', 'TransitionRun'),
      transitionstart: Ml('Transition', 'TransitionStart'),
      transitioncancel: Ml('Transition', 'TransitionCancel'),
      transitionend: Ml('Transition', 'TransitionEnd'),
    },
    Dr = {},
    wo = {};
  _n &&
    ((wo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ta.animationend.animation,
      delete ta.animationiteration.animation,
      delete ta.animationstart.animation),
    'TransitionEvent' in window || delete ta.transitionend.transition);
  function Cl(e) {
    if (Dr[e]) return Dr[e];
    if (!ta[e]) return e;
    var t = ta[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in wo) return (Dr[e] = t[n]);
    return e;
  }
  var No = Cl('animationend'),
    Bo = Cl('animationiteration'),
    Uo = Cl('animationstart'),
    kv = Cl('transitionrun'),
    Fv = Cl('transitionstart'),
    $v = Cl('transitioncancel'),
    Ho = Cl('transitionend'),
    Lo = new Map(),
    zr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  zr.push('scrollEnd');
  function ln(e, t) {
    (Lo.set(e, t), bl(t, [e]));
  }
  var Qi =
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
    Kt = [],
    na = 0,
    wr = 0;
  function Zi() {
    for (var e = na, t = (wr = na = 0); t < e; ) {
      var n = Kt[t];
      Kt[t++] = null;
      var l = Kt[t];
      Kt[t++] = null;
      var a = Kt[t];
      Kt[t++] = null;
      var u = Kt[t];
      if (((Kt[t++] = null), l !== null && a !== null)) {
        var S = l.pending;
        (S === null ? (a.next = a) : ((a.next = S.next), (S.next = a)), (l.pending = a));
      }
      u !== 0 && jo(n, a, u);
    }
  }
  function Ki(e, t, n, l) {
    ((Kt[na++] = e),
      (Kt[na++] = t),
      (Kt[na++] = n),
      (Kt[na++] = l),
      (wr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Nr(e, t, n, l) {
    return (Ki(e, t, n, l), Ji(e));
  }
  function Rl(e, t) {
    return (Ki(e, null, null, t), Ji(e));
  }
  function jo(e, t, n) {
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
          ((a = 31 - xt(n)),
          (e = u.hiddenUpdates),
          (l = e[a]),
          l === null ? (e[a] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Ji(e) {
    if (50 < di) throw ((di = 0), (qs = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var la = {};
  function Wv(e, t, n, l) {
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
  function Ht(e, t, n, l) {
    return new Wv(e, t, n, l);
  }
  function Br(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function On(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ht(e.tag, t, e.key, e.mode)),
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
  function Go(e, t) {
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
  function ki(e, t, n, l, a, u) {
    var S = 0;
    if (((l = e), typeof e == 'function')) Br(e) && (S = 1);
    else if (typeof e == 'string')
      S = n0(e, n, ae.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return ((e = Ht(31, n, t, a)), (e.elementType = B), (e.lanes = u), e);
        case v:
          return Al(n.children, a, u, t);
        case E:
          ((S = 8), (a |= 24));
          break;
        case R:
          return ((e = Ht(12, n, t, a | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = Ht(13, n, t, a)), (e.elementType = M), (e.lanes = u), e);
        case _:
          return ((e = Ht(19, n, t, a)), (e.elementType = _), (e.lanes = u), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case w:
                S = 10;
                break e;
              case D:
                S = 9;
                break e;
              case L:
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
    return ((t = Ht(S, n, t, a)), (t.elementType = e), (t.type = l), (t.lanes = u), t);
  }
  function Al(e, t, n, l) {
    return ((e = Ht(7, e, l, t)), (e.lanes = n), e);
  }
  function Ur(e, t, n) {
    return ((e = Ht(6, e, null, t)), (e.lanes = n), e);
  }
  function Yo(e) {
    var t = Ht(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Hr(e, t, n) {
    return (
      (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Vo = new WeakMap();
  function Jt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Vo.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Rt(t) }), Vo.set(e, t), t);
    }
    return { value: e, source: t, stack: Rt(t) };
  }
  var aa = [],
    ia = 0,
    Fi = null,
    Za = 0,
    kt = [],
    Ft = 0,
    Wn = null,
    gn = 1,
    yn = '';
  function Dn(e, t) {
    ((aa[ia++] = Za), (aa[ia++] = Fi), (Fi = e), (Za = t));
  }
  function qo(e, t, n) {
    ((kt[Ft++] = gn), (kt[Ft++] = yn), (kt[Ft++] = Wn), (Wn = e));
    var l = gn;
    e = yn;
    var a = 32 - xt(l) - 1;
    ((l &= ~(1 << a)), (n += 1));
    var u = 32 - xt(t) + a;
    if (30 < u) {
      var S = a - (a % 5);
      ((u = (l & ((1 << S) - 1)).toString(32)),
        (l >>= S),
        (a -= S),
        (gn = (1 << (32 - xt(t) + a)) | (n << a) | l),
        (yn = u + e));
    } else ((gn = (1 << u) | (n << a) | l), (yn = e));
  }
  function Lr(e) {
    e.return !== null && (Dn(e, 1), qo(e, 1, 0));
  }
  function jr(e) {
    for (; e === Fi; ) ((Fi = aa[--ia]), (aa[ia] = null), (Za = aa[--ia]), (aa[ia] = null));
    for (; e === Wn; )
      ((Wn = kt[--Ft]),
        (kt[Ft] = null),
        (yn = kt[--Ft]),
        (kt[Ft] = null),
        (gn = kt[--Ft]),
        (kt[Ft] = null));
  }
  function Xo(e, t) {
    ((kt[Ft++] = gn), (kt[Ft++] = yn), (kt[Ft++] = Wn), (gn = t.id), (yn = t.overflow), (Wn = e));
  }
  var vt = null,
    Ve = null,
    Oe = !1,
    Pn = null,
    $t = !1,
    Gr = Error(x(519));
  function In(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Ka(Jt(t, e)), Gr);
  }
  function Qo(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[nt] = e), (t[At] = l), n)) {
      case 'dialog':
        (Ce('cancel', t), Ce('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ce('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < hi.length; n++) Ce(hi[n], t);
        break;
      case 'source':
        Ce('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ce('error', t), Ce('load', t));
        break;
      case 'details':
        Ce('toggle', t);
        break;
      case 'input':
        (Ce('invalid', t),
          no(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'select':
        Ce('invalid', t);
        break;
      case 'textarea':
        (Ce('invalid', t), ao(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      sm(t.textContent, n)
        ? (l.popover != null && (Ce('beforetoggle', t), Ce('toggle', t)),
          l.onScroll != null && Ce('scroll', t),
          l.onScrollEnd != null && Ce('scrollend', t),
          l.onClick != null && (t.onclick = An),
          (t = !0))
        : (t = !1),
      t || In(e, !0));
  }
  function Zo(e) {
    for (vt = e.return; vt; )
      switch (vt.tag) {
        case 5:
        case 31:
        case 13:
          $t = !1;
          return;
        case 27:
        case 3:
          $t = !0;
          return;
        default:
          vt = vt.return;
      }
  }
  function ua(e) {
    if (e !== vt) return !1;
    if (!Oe) return (Zo(e), (Oe = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || lc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ve && In(e),
      Zo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Ve = ym(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Ve = ym(e);
    } else
      t === 27
        ? ((t = Ve), ml(e.type) ? ((e = sc), (sc = null), (Ve = e)) : (Ve = t))
        : (Ve = vt ? Pt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function _l() {
    ((Ve = vt = null), (Oe = !1));
  }
  function Yr() {
    var e = Pn;
    return (e !== null && (wt === null ? (wt = e) : wt.push.apply(wt, e), (Pn = null)), e);
  }
  function Ka(e) {
    Pn === null ? (Pn = [e]) : Pn.push(e);
  }
  var Vr = j(null),
    Ol = null,
    zn = null;
  function el(e, t, n) {
    (le(Vr, t._currentValue), (t._currentValue = n));
  }
  function wn(e) {
    ((e._currentValue = Vr.current), F(Vr));
  }
  function qr(e, t, n) {
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
  function Xr(e, t, n, l) {
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
                qr(u.return, n, e),
                l || (S = null));
              break e;
            }
          u = C.next;
        }
      } else if (a.tag === 18) {
        if (((S = a.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), qr(S, n, e), (S = null));
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
  function ra(e, t, n, l) {
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
          Ut(a.pendingProps.value, S.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (a === ve.current) {
        if (((S = a.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Si) : (e = [Si]));
      }
      a = a.return;
    }
    (e !== null && Xr(t, e, n, l), (t.flags |= 262144));
  }
  function $i(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Dl(e) {
    ((Ol = e), (zn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function gt(e) {
    return Ko(Ol, e);
  }
  function Wi(e, t) {
    return (Ol === null && Dl(e), Ko(e, t));
  }
  function Ko(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), zn === null)) {
      if (e === null) throw Error(x(308));
      ((zn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else zn = zn.next = t;
    return n;
  }
  var Pv =
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
    Iv = s.unstable_scheduleCallback,
    eg = s.unstable_NormalPriority,
    lt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qr() {
    return { controller: new Pv(), data: new Map(), refCount: 0 };
  }
  function Ja(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Iv(eg, function () {
          e.controller.abort();
        }));
  }
  var ka = null,
    Zr = 0,
    sa = 0,
    ca = null;
  function tg(e, t) {
    if (ka === null) {
      var n = (ka = []);
      ((Zr = 0),
        (sa = ks()),
        (ca = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Zr++, t.then(Jo, Jo), t);
  }
  function Jo() {
    if (--Zr === 0 && ka !== null) {
      ca !== null && (ca.status = 'fulfilled');
      var e = ka;
      ((ka = null), (sa = 0), (ca = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ng(e, t) {
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
  var ko = V.S;
  V.S = function (e, t) {
    ((wd = ct()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && tg(e, t),
      ko !== null && ko(e, t));
  };
  var zl = j(null);
  function Kr() {
    var e = zl.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Pi(e, t) {
    t === null ? le(zl, zl.current) : le(zl, t.pool);
  }
  function Fo() {
    var e = Kr();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var oa = Error(x(460)),
    Jr = Error(x(474)),
    Ii = Error(x(542)),
    eu = { then: function () {} };
  function $o(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Wo(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(An, An), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Io(e), e);
      default:
        if (typeof t.status == 'string') t.then(An, An);
        else {
          if (((e = Ye), e !== null && 100 < e.shellSuspendCounter)) throw Error(x(482));
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
            throw ((e = t.reason), Io(e), e);
        }
        throw ((Nl = t), oa);
    }
  }
  function wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Nl = n), oa) : n;
    }
  }
  var Nl = null;
  function Po() {
    if (Nl === null) throw Error(x(459));
    var e = Nl;
    return ((Nl = null), e);
  }
  function Io(e) {
    if (e === oa || e === Ii) throw Error(x(483));
  }
  var fa = null,
    Fa = 0;
  function tu(e) {
    var t = Fa;
    return ((Fa += 1), fa === null && (fa = []), Wo(fa, e, t));
  }
  function $a(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function nu(e, t) {
    throw t.$$typeof === g
      ? Error(x(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          x(
            31,
            e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
          )
        ));
  }
  function ef(e) {
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
    function C(q, Y, X, P) {
      return Y === null || Y.tag !== 6
        ? ((Y = Ur(X, q.mode, P)), (Y.return = q), Y)
        : ((Y = a(Y, X)), (Y.return = q), Y);
    }
    function U(q, Y, X, P) {
      var fe = X.type;
      return fe === v
        ? W(q, Y, X.props.children, P, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && wl(fe) === Y.type))
          ? ((Y = a(Y, X.props)), $a(Y, X), (Y.return = q), Y)
          : ((Y = ki(X.type, X.key, X.props, null, q.mode, P)), $a(Y, X), (Y.return = q), Y);
    }
    function Q(q, Y, X, P) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Hr(X, q.mode, P)), (Y.return = q), Y)
        : ((Y = a(Y, X.children || [])), (Y.return = q), Y);
    }
    function W(q, Y, X, P, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = Al(X, q.mode, P, fe)), (Y.return = q), Y)
        : ((Y = a(Y, X)), (Y.return = q), Y);
    }
    function I(q, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Ur('' + Y, q.mode, X)), (Y.return = q), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = ki(Y.type, Y.key, Y.props, null, q.mode, X)), $a(X, Y), (X.return = q), X);
          case p:
            return ((Y = Hr(Y, q.mode, X)), (Y.return = q), Y);
          case A:
            return ((Y = wl(Y)), I(q, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = Al(Y, q.mode, X, null)), (Y.return = q), Y);
        if (typeof Y.then == 'function') return I(q, tu(Y), X);
        if (Y.$$typeof === w) return I(q, Wi(q, Y), X);
        nu(q, Y);
      }
      return null;
    }
    function Z(q, Y, X, P) {
      var fe = Y !== null ? Y.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : C(q, Y, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? U(q, Y, X, P) : null;
          case p:
            return X.key === fe ? Q(q, Y, X, P) : null;
          case A:
            return ((X = wl(X)), Z(q, Y, X, P));
        }
        if (ee(X) || G(X)) return fe !== null ? null : W(q, Y, X, P, null);
        if (typeof X.then == 'function') return Z(q, Y, tu(X), P);
        if (X.$$typeof === w) return Z(q, Y, Wi(q, X), P);
        nu(q, X);
      }
      return null;
    }
    function k(q, Y, X, P, fe) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return ((q = q.get(X) || null), C(Y, q, '' + P, fe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((q = q.get(P.key === null ? X : P.key) || null), U(Y, q, P, fe));
          case p:
            return ((q = q.get(P.key === null ? X : P.key) || null), Q(Y, q, P, fe));
          case A:
            return ((P = wl(P)), k(q, Y, X, P, fe));
        }
        if (ee(P) || G(P)) return ((q = q.get(X) || null), W(Y, q, P, fe, null));
        if (typeof P.then == 'function') return k(q, Y, X, tu(P), fe);
        if (P.$$typeof === w) return k(q, Y, X, Wi(Y, P), fe);
        nu(Y, P);
      }
      return null;
    }
    function re(q, Y, X, P) {
      for (
        var fe = null, De = null, ce = Y, Se = (Y = 0), _e = null;
        ce !== null && Se < X.length;
        Se++
      ) {
        ce.index > Se ? ((_e = ce), (ce = null)) : (_e = ce.sibling);
        var ze = Z(q, ce, X[Se], P);
        if (ze === null) {
          ce === null && (ce = _e);
          break;
        }
        (e && ce && ze.alternate === null && t(q, ce),
          (Y = u(ze, Y, Se)),
          De === null ? (fe = ze) : (De.sibling = ze),
          (De = ze),
          (ce = _e));
      }
      if (Se === X.length) return (n(q, ce), Oe && Dn(q, Se), fe);
      if (ce === null) {
        for (; Se < X.length; Se++)
          ((ce = I(q, X[Se], P)),
            ce !== null &&
              ((Y = u(ce, Y, Se)), De === null ? (fe = ce) : (De.sibling = ce), (De = ce)));
        return (Oe && Dn(q, Se), fe);
      }
      for (ce = l(ce); Se < X.length; Se++)
        ((_e = k(ce, q, Se, X[Se], P)),
          _e !== null &&
            (e && _e.alternate !== null && ce.delete(_e.key === null ? Se : _e.key),
            (Y = u(_e, Y, Se)),
            De === null ? (fe = _e) : (De.sibling = _e),
            (De = _e)));
      return (
        e &&
          ce.forEach(function (pl) {
            return t(q, pl);
          }),
        Oe && Dn(q, Se),
        fe
      );
    }
    function me(q, Y, X, P) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, De = null, ce = Y, Se = (Y = 0), _e = null, ze = X.next();
        ce !== null && !ze.done;
        Se++, ze = X.next()
      ) {
        ce.index > Se ? ((_e = ce), (ce = null)) : (_e = ce.sibling);
        var pl = Z(q, ce, ze.value, P);
        if (pl === null) {
          ce === null && (ce = _e);
          break;
        }
        (e && ce && pl.alternate === null && t(q, ce),
          (Y = u(pl, Y, Se)),
          De === null ? (fe = pl) : (De.sibling = pl),
          (De = pl),
          (ce = _e));
      }
      if (ze.done) return (n(q, ce), Oe && Dn(q, Se), fe);
      if (ce === null) {
        for (; !ze.done; Se++, ze = X.next())
          ((ze = I(q, ze.value, P)),
            ze !== null &&
              ((Y = u(ze, Y, Se)), De === null ? (fe = ze) : (De.sibling = ze), (De = ze)));
        return (Oe && Dn(q, Se), fe);
      }
      for (ce = l(ce); !ze.done; Se++, ze = X.next())
        ((ze = k(ce, q, Se, ze.value, P)),
          ze !== null &&
            (e && ze.alternate !== null && ce.delete(ze.key === null ? Se : ze.key),
            (Y = u(ze, Y, Se)),
            De === null ? (fe = ze) : (De.sibling = ze),
            (De = ze)));
      return (
        e &&
          ce.forEach(function (m0) {
            return t(q, m0);
          }),
        Oe && Dn(q, Se),
        fe
      );
    }
    function Ge(q, Y, X, P) {
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
              for (var fe = X.key; Y !== null; ) {
                if (Y.key === fe) {
                  if (((fe = X.type), fe === v)) {
                    if (Y.tag === 7) {
                      (n(q, Y.sibling), (P = a(Y, X.props.children)), (P.return = q), (q = P));
                      break e;
                    }
                  } else if (
                    Y.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === A && wl(fe) === Y.type)
                  ) {
                    (n(q, Y.sibling), (P = a(Y, X.props)), $a(P, X), (P.return = q), (q = P));
                    break e;
                  }
                  n(q, Y);
                  break;
                } else t(q, Y);
                Y = Y.sibling;
              }
              X.type === v
                ? ((P = Al(X.props.children, q.mode, P, X.key)), (P.return = q), (q = P))
                : ((P = ki(X.type, X.key, X.props, null, q.mode, P)),
                  $a(P, X),
                  (P.return = q),
                  (q = P));
            }
            return S(q);
          case p:
            e: {
              for (fe = X.key; Y !== null; ) {
                if (Y.key === fe)
                  if (
                    Y.tag === 4 &&
                    Y.stateNode.containerInfo === X.containerInfo &&
                    Y.stateNode.implementation === X.implementation
                  ) {
                    (n(q, Y.sibling), (P = a(Y, X.children || [])), (P.return = q), (q = P));
                    break e;
                  } else {
                    n(q, Y);
                    break;
                  }
                else t(q, Y);
                Y = Y.sibling;
              }
              ((P = Hr(X, q.mode, P)), (P.return = q), (q = P));
            }
            return S(q);
          case A:
            return ((X = wl(X)), Ge(q, Y, X, P));
        }
        if (ee(X)) return re(q, Y, X, P);
        if (G(X)) {
          if (((fe = G(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(q, Y, X, P));
        }
        if (typeof X.then == 'function') return Ge(q, Y, tu(X), P);
        if (X.$$typeof === w) return Ge(q, Y, Wi(q, X), P);
        nu(q, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(q, Y.sibling), (P = a(Y, X)), (P.return = q), (q = P))
            : (n(q, Y), (P = Ur(X, q.mode, P)), (P.return = q), (q = P)),
          S(q))
        : n(q, Y);
    }
    return function (q, Y, X, P) {
      try {
        Fa = 0;
        var fe = Ge(q, Y, X, P);
        return ((fa = null), fe);
      } catch (ce) {
        if (ce === oa || ce === Ii) throw ce;
        var De = Ht(29, ce, null, q.mode);
        return ((De.lanes = P), (De.return = q), De);
      } finally {
      }
    };
  }
  var Bl = ef(!0),
    tf = ef(!1),
    tl = !1;
  function kr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Fr(e, t) {
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
  function nl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ll(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ne & 2) !== 0)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        (t = Ji(e)),
        jo(e, null, n),
        t
      );
    }
    return (Ki(e, l, t, n), Ji(e));
  }
  function Wa(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), ft(e, n));
    }
  }
  function $r(e, t) {
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
  var Wr = !1;
  function Pa() {
    if (Wr) {
      var e = ca;
      if (e !== null) throw e;
    }
  }
  function Ia(e, t, n, l) {
    Wr = !1;
    var a = e.updateQueue;
    tl = !1;
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
      var I = a.baseState;
      ((S = 0), (W = Q = U = null), (C = u));
      do {
        var Z = C.lane & -536870913,
          k = Z !== C.lane;
        if (k ? (Ae & Z) === Z : (l & Z) === Z) {
          (Z !== 0 && Z === sa && (Wr = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }));
          e: {
            var re = e,
              me = C;
            Z = t;
            var Ge = n;
            switch (me.tag) {
              case 1:
                if (((re = me.payload), typeof re == 'function')) {
                  I = re.call(Ge, I, Z);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = me.payload),
                  (Z = typeof re == 'function' ? re.call(Ge, I, Z) : re),
                  Z == null)
                )
                  break e;
                I = y({}, I, Z);
                break e;
              case 2:
                tl = !0;
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
            W === null ? ((Q = W = k), (U = I)) : (W = W.next = k),
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
      (W === null && (U = I),
        (a.baseState = U),
        (a.firstBaseUpdate = Q),
        (a.lastBaseUpdate = W),
        u === null && (a.shared.lanes = 0),
        (sl |= S),
        (e.lanes = S),
        (e.memoizedState = I));
    }
  }
  function nf(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function lf(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) nf(n[e], t);
  }
  var da = j(null),
    lu = j(0);
  function af(e, t) {
    ((e = Vn), le(lu, e), le(da, t), (Vn = e | t.baseLanes));
  }
  function Pr() {
    (le(lu, Vn), le(da, da.current));
  }
  function Ir() {
    ((Vn = lu.current), F(da), F(lu));
  }
  var Lt = j(null),
    Wt = null;
  function al(e) {
    var t = e.alternate;
    (le(Ie, Ie.current & 1),
      le(Lt, e),
      Wt === null && (t === null || da.current !== null || t.memoizedState !== null) && (Wt = e));
  }
  function es(e) {
    (le(Ie, Ie.current), le(Lt, e), Wt === null && (Wt = e));
  }
  function uf(e) {
    e.tag === 22 ? (le(Ie, Ie.current), le(Lt, e), Wt === null && (Wt = e)) : il();
  }
  function il() {
    (le(Ie, Ie.current), le(Lt, Lt.current));
  }
  function jt(e) {
    (F(Lt), Wt === e && (Wt = null), F(Ie));
  }
  var Ie = j(0);
  function au(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || uc(n) || rc(n))) return t;
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
    ye = null,
    Le = null,
    at = null,
    iu = !1,
    ma = !1,
    Ul = !1,
    uu = 0,
    ei = 0,
    ha = null,
    lg = 0;
  function Fe() {
    throw Error(x(321));
  }
  function ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ut(e[n], t[n])) return !1;
    return !0;
  }
  function ns(e, t, n, l, a, u) {
    return (
      (Nn = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? Xf : ys),
      (Ul = !1),
      (u = n(l, a)),
      (Ul = !1),
      ma && (u = sf(t, n, l, a)),
      rf(e),
      u
    );
  }
  function rf(e) {
    V.H = li;
    var t = Le !== null && Le.next !== null;
    if (((Nn = 0), (at = Le = ye = null), (iu = !1), (ei = 0), (ha = null), t)) throw Error(x(300));
    e === null || it || ((e = e.dependencies), e !== null && $i(e) && (it = !0));
  }
  function sf(e, t, n, l) {
    ye = e;
    var a = 0;
    do {
      if ((ma && (ha = null), (ei = 0), (ma = !1), 25 <= a)) throw Error(x(301));
      if (((a += 1), (at = Le = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((V.H = Qf), (u = t(n, l)));
    } while (ma);
    return u;
  }
  function ag() {
    var e = V.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ti(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function ls() {
    var e = uu !== 0;
    return ((uu = 0), e);
  }
  function as(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function is(e) {
    if (iu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      iu = !1;
    }
    ((Nn = 0), (at = Le = ye = null), (ma = !1), (ei = uu = 0), (ha = null));
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (at === null ? (ye.memoizedState = at = e) : (at = at.next = e), at);
  }
  function et() {
    if (Le === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = at === null ? ye.memoizedState : at.next;
    if (t !== null) ((at = t), (Le = e));
    else {
      if (e === null) throw ye.alternate === null ? Error(x(467)) : Error(x(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        at === null ? (ye.memoizedState = at = e) : (at = at.next = e));
    }
    return at;
  }
  function ru() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return (
      (ei += 1),
      ha === null && (ha = []),
      (e = Wo(ha, e, t)),
      (t = ye),
      (at === null ? t.memoizedState : at.next) === null &&
        ((t = t.alternate), (V.H = t === null || t.memoizedState === null ? Xf : ys)),
      e
    );
  }
  function su(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ti(e);
      if (e.$$typeof === w) return gt(e);
    }
    throw Error(x(438, String(e)));
  }
  function us(e) {
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
      n === null && ((n = ru()), (ye.updateQueue = n)),
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
  function cu(e) {
    var t = et();
    return rs(t, Le, e);
  }
  function rs(e, t, n) {
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
        var I = Q.lane & -536870913;
        if (I !== Q.lane ? (Ae & I) === I : (Nn & I) === I) {
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
              I === sa && (W = !0));
          else if ((Nn & Z) === Z) {
            ((Q = Q.next), Z === sa && (W = !0));
            continue;
          } else
            ((I = {
              lane: 0,
              revertLane: Q.revertLane,
              gesture: null,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null,
            }),
              U === null ? ((C = U = I), (S = u)) : (U = U.next = I),
              (ye.lanes |= Z),
              (sl |= Z));
          ((I = Q.action), Ul && n(u, I), (u = Q.hasEagerState ? Q.eagerState : n(u, I)));
        } else
          ((Z = {
            lane: I,
            revertLane: Q.revertLane,
            gesture: Q.gesture,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null,
          }),
            U === null ? ((C = U = Z), (S = u)) : (U = U.next = Z),
            (ye.lanes |= I),
            (sl |= I));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = C),
        !Ut(u, e.memoizedState) && ((it = !0), W && ((n = ca), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (l.lastRenderedState = u));
    }
    return (a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function ss(e) {
    var t = et(),
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
      (Ut(u, t.memoizedState) || (it = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function cf(e, t, n) {
    var l = ye,
      a = et(),
      u = Oe;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Ut((Le || a).memoizedState, n);
    if (
      (S && ((a.memoizedState = n), (it = !0)),
      (a = a.queue),
      fs(df.bind(null, l, a, e), [e]),
      a.getSnapshot !== t || S || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        va(9, { destroy: void 0 }, ff.bind(null, l, a, n, t), null),
        Ye === null)
      )
        throw Error(x(349));
      u || (Nn & 127) !== 0 || of(l, t, n);
    }
    return n;
  }
  function of(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = ru()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ff(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), mf(t) && hf(e));
  }
  function df(e, t, n) {
    return n(function () {
      mf(t) && hf(e);
    });
  }
  function mf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ut(e, n);
    } catch {
      return !0;
    }
  }
  function hf(e) {
    var t = Rl(e, 2);
    t !== null && Nt(t, e, 2);
  }
  function cs(e) {
    var t = Ct();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ul)) {
        hn(!0);
        try {
          n();
        } finally {
          hn(!1);
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
  function vf(e, t, n, l) {
    return ((e.baseState = n), rs(e, Le, typeof l == 'function' ? l : Bn));
  }
  function ig(e, t, n, l, a) {
    if (du(e)) throw Error(x(485));
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
          ? ((u.next = t.pending = u), gf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function gf(e, t) {
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
        (U !== null && U(S, C), yf(e, t, C));
      } catch (Q) {
        os(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (V.T = u));
      }
    } else
      try {
        ((u = n(a, l)), yf(e, t, u));
      } catch (Q) {
        os(e, t, Q);
      }
  }
  function yf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            pf(e, t, l);
          },
          function (l) {
            return os(e, t, l);
          }
        )
      : pf(e, t, n);
  }
  function pf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Sf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), gf(e, n))));
  }
  function os(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Sf(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Sf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function xf(e, t) {
    return t;
  }
  function Ef(e, t) {
    if (Oe) {
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var l = ye;
          if (Oe) {
            if (Ve) {
              t: {
                for (var a = Ve, u = $t; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = Pt(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === 'F!' || u === 'F' ? a : null));
              }
              if (a) {
                ((Ve = Pt(a.nextSibling)), (l = a.data === 'F!'));
                break e;
              }
            }
            In(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Ct()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xf,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Yf.bind(null, ye, l)),
      (l.dispatch = n),
      (l = cs(!1)),
      (u = gs.bind(null, ye, !1, l.queue)),
      (l = Ct()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = a),
      (n = ig.bind(null, ye, a, u, n)),
      (a.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function bf(e) {
    var t = et();
    return Tf(t, Le, e);
  }
  function Tf(e, t, n) {
    if (
      ((t = rs(e, t, xf)[0]),
      (e = cu(Bn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ti(t);
      } catch (S) {
        throw S === oa ? Ii : S;
      }
    else l = t;
    t = et();
    var a = t.queue,
      u = a.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048), va(9, { destroy: void 0 }, ug.bind(null, a, n), null)),
      [l, u, e]
    );
  }
  function ug(e, t) {
    e.action = t;
  }
  function Mf(e) {
    var t = et(),
      n = Le;
    if (n !== null) return Tf(t, n, e);
    (et(), (t = t.memoizedState), (n = et()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function va(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = ru()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Cf() {
    return et().memoizedState;
  }
  function ou(e, t, n, l) {
    var a = Ct();
    ((ye.flags |= e),
      (a.memoizedState = va(1 | t, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function fu(e, t, n, l) {
    var a = et();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Le !== null && l !== null && ts(l, Le.memoizedState.deps)
      ? (a.memoizedState = va(t, u, n, l))
      : ((ye.flags |= e), (a.memoizedState = va(1 | t, u, n, l)));
  }
  function Rf(e, t) {
    ou(8390656, 8, e, t);
  }
  function fs(e, t) {
    fu(2048, 8, e, t);
  }
  function rg(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null) ((t = ru()), (ye.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Af(e) {
    var t = et().memoizedState;
    return (
      rg({ ref: t, nextImpl: e }),
      function () {
        if ((Ne & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function _f(e, t) {
    return fu(4, 2, e, t);
  }
  function Of(e, t) {
    return fu(4, 4, e, t);
  }
  function Df(e, t) {
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
  function zf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), fu(4, 4, Df.bind(null, t, e), n));
  }
  function ds() {}
  function wf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && ts(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Nf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && ts(t, l[1])) return l[0];
    if (((l = e()), Ul)) {
      hn(!0);
      try {
        e();
      } finally {
        hn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function ms(e, t, n) {
    return n === void 0 || ((Nn & 1073741824) !== 0 && (Ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Bd()), (ye.lanes |= e), (sl |= e), n);
  }
  function Bf(e, t, n, l) {
    return Ut(n, t)
      ? n
      : da.current !== null
        ? ((e = ms(e, n, l)), Ut(e, t) || (it = !0), e)
        : (Nn & 42) === 0 || ((Nn & 1073741824) !== 0 && (Ae & 261930) === 0)
          ? ((it = !0), (e.memoizedState = n))
          : ((e = Bd()), (ye.lanes |= e), (sl |= e), t);
  }
  function Uf(e, t, n, l, a) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = V.T,
      C = {};
    ((V.T = C), gs(e, !1, t, n));
    try {
      var U = a(),
        Q = V.S;
      if (
        (Q !== null && Q(C, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var W = ng(U, l);
        ni(e, t, W, Vt(e));
      } else ni(e, t, l, Vt(e));
    } catch (I) {
      ni(e, t, { then: function () {}, status: 'rejected', reason: I }, Vt());
    } finally {
      ((K.p = u), S !== null && C.types !== null && (S.types = C.types), (V.T = S));
    }
  }
  function sg() {}
  function hs(e, t, n, l) {
    if (e.tag !== 5) throw Error(x(476));
    var a = Hf(e).queue;
    Uf(
      e,
      a,
      t,
      ne,
      n === null
        ? sg
        : function () {
            return (Lf(e), n(l));
          }
    );
  }
  function Hf(e) {
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
  function Lf(e) {
    var t = Hf(e);
    (t.next === null && (t = e.alternate.memoizedState), ni(e, t.next.queue, {}, Vt()));
  }
  function vs() {
    return gt(Si);
  }
  function jf() {
    return et().memoizedState;
  }
  function Gf() {
    return et().memoizedState;
  }
  function cg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Vt();
          e = nl(n);
          var l = ll(t, e, n);
          (l !== null && (Nt(l, t, n), Wa(l, t, n)), (t = { cache: Qr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function og(e, t, n) {
    var l = Vt();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      du(e) ? Vf(t, n) : ((n = Nr(e, t, n, l)), n !== null && (Nt(n, e, l), qf(n, t, l))));
  }
  function Yf(e, t, n) {
    var l = Vt();
    ni(e, t, n, l);
  }
  function ni(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (du(e)) Vf(t, a);
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
          if (((a.hasEagerState = !0), (a.eagerState = C), Ut(C, S)))
            return (Ki(e, t, a, 0), Ye === null && Zi(), !1);
        } catch {
        } finally {
        }
      if (((n = Nr(e, t, a, l)), n !== null)) return (Nt(n, e, l), qf(n, t, l), !0);
    }
    return !1;
  }
  function gs(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: ks(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      du(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = Nr(e, n, l, 2)), t !== null && Nt(t, e, 2));
  }
  function du(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function Vf(e, t) {
    ma = iu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function qf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), ft(e, n));
    }
  }
  var li = {
    readContext: gt,
    use: su,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useLayoutEffect: Fe,
    useInsertionEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    useHostTransitionStatus: Fe,
    useFormState: Fe,
    useActionState: Fe,
    useOptimistic: Fe,
    useMemoCache: Fe,
    useCacheRefresh: Fe,
  };
  li.useEffectEvent = Fe;
  var Xf = {
      readContext: gt,
      use: su,
      useCallback: function (e, t) {
        return ((Ct().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: gt,
      useEffect: Rf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), ou(4194308, 4, Df.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ou(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ou(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        t = t === void 0 ? null : t;
        var l = e();
        if (Ul) {
          hn(!0);
          try {
            e();
          } finally {
            hn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = Ct();
        if (n !== void 0) {
          var a = n(t);
          if (Ul) {
            hn(!0);
            try {
              n(t);
            } finally {
              hn(!1);
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
          (e = e.dispatch = og.bind(null, ye, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = cs(e);
        var t = e.queue,
          n = Yf.bind(null, ye, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: ds,
      useDeferredValue: function (e, t) {
        var n = Ct();
        return ms(n, e, t);
      },
      useTransition: function () {
        var e = cs(!1);
        return ((e = Uf.bind(null, ye, e.queue, !0, !1)), (Ct().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var l = ye,
          a = Ct();
        if (Oe) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), Ye === null)) throw Error(x(349));
          (Ae & 127) !== 0 || of(l, t, n);
        }
        a.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (a.queue = u),
          Rf(df.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          va(9, { destroy: void 0 }, ff.bind(null, l, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = Ye.identifierPrefix;
        if (Oe) {
          var n = yn,
            l = gn;
          ((n = (l & ~(1 << (32 - xt(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = uu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = lg++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: vs,
      useFormState: Ef,
      useActionState: Ef,
      useOptimistic: function (e) {
        var t = Ct();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = gs.bind(null, ye, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: us,
      useCacheRefresh: function () {
        return (Ct().memoizedState = cg.bind(null, ye));
      },
      useEffectEvent: function (e) {
        var t = Ct(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ne & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ys = {
      readContext: gt,
      use: su,
      useCallback: wf,
      useContext: gt,
      useEffect: fs,
      useImperativeHandle: zf,
      useInsertionEffect: _f,
      useLayoutEffect: Of,
      useMemo: Nf,
      useReducer: cu,
      useRef: Cf,
      useState: function () {
        return cu(Bn);
      },
      useDebugValue: ds,
      useDeferredValue: function (e, t) {
        var n = et();
        return Bf(n, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cu(Bn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : ti(e), t];
      },
      useSyncExternalStore: cf,
      useId: jf,
      useHostTransitionStatus: vs,
      useFormState: bf,
      useActionState: bf,
      useOptimistic: function (e, t) {
        var n = et();
        return vf(n, Le, e, t);
      },
      useMemoCache: us,
      useCacheRefresh: Gf,
    };
  ys.useEffectEvent = Af;
  var Qf = {
    readContext: gt,
    use: su,
    useCallback: wf,
    useContext: gt,
    useEffect: fs,
    useImperativeHandle: zf,
    useInsertionEffect: _f,
    useLayoutEffect: Of,
    useMemo: Nf,
    useReducer: ss,
    useRef: Cf,
    useState: function () {
      return ss(Bn);
    },
    useDebugValue: ds,
    useDeferredValue: function (e, t) {
      var n = et();
      return Le === null ? ms(n, e, t) : Bf(n, Le.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ss(Bn)[0],
        t = et().memoizedState;
      return [typeof e == 'boolean' ? e : ti(e), t];
    },
    useSyncExternalStore: cf,
    useId: jf,
    useHostTransitionStatus: vs,
    useFormState: Mf,
    useActionState: Mf,
    useOptimistic: function (e, t) {
      var n = et();
      return Le !== null ? vf(n, Le, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: us,
    useCacheRefresh: Gf,
  };
  Qf.useEffectEvent = Af;
  function ps(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ss = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Vt(),
        a = nl(l);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = ll(e, a, l)),
        t !== null && (Nt(t, e, l), Wa(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Vt(),
        a = nl(l);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = ll(e, a, l)),
        t !== null && (Nt(t, e, l), Wa(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Vt(),
        l = nl(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ll(e, l, n)),
        t !== null && (Nt(t, e, n), Wa(t, e, n)));
    },
  };
  function Zf(e, t, n, l, a, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xa(n, l) || !Xa(a, u)
          : !0
    );
  }
  function Kf(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ss.enqueueReplaceState(t, t.state, null));
  }
  function Hl(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = y({}, n));
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function Jf(e) {
    Qi(e);
  }
  function kf(e) {
    console.error(e);
  }
  function Ff(e) {
    Qi(e);
  }
  function mu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function $f(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function xs(e, t, n) {
    return (
      (n = nl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        mu(e, t);
      }),
      n
    );
  }
  function Wf(e) {
    return ((e = nl(e)), (e.tag = 3), e);
  }
  function Pf(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          $f(t, n, l);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        ($f(t, n, l),
          typeof a != 'function' && (cl === null ? (cl = new Set([this])) : cl.add(this)));
        var C = l.stack;
        this.componentDidCatch(l.value, { componentStack: C !== null ? C : '' });
      });
  }
  function fg(e, t, n, l, a) {
    if (((n.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
      if (((t = n.alternate), t !== null && ra(t, n, a, !0), (n = Lt.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Wt === null ? Cu() : n.alternate === null && $e === 0 && ($e = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = a),
              l === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Zs(e, l, a)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Zs(e, l, a)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Zs(e, l, a), Cu(), !1);
    }
    if (Oe)
      return (
        (t = Lt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            l !== Gr && ((e = Error(x(422), { cause: l })), Ka(Jt(e, n))))
          : (l !== Gr && ((t = Error(x(423), { cause: l })), Ka(Jt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (l = Jt(l, n)),
            (a = xs(e.stateNode, l, a)),
            $r(e, a),
            $e !== 4 && ($e = 2)),
        !1
      );
    var u = Error(x(520), { cause: l });
    if (((u = Jt(u, n)), fi === null ? (fi = [u]) : fi.push(u), $e !== 4 && ($e = 2), t === null))
      return !0;
    ((l = Jt(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = a & -a),
            (n.lanes |= e),
            (e = xs(n.stateNode, l, e)),
            $r(n, e),
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
                  (cl === null || !cl.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (a &= -a),
              (n.lanes |= a),
              (a = Wf(a)),
              Pf(a, e, n, l),
              $r(n, a),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Es = Error(x(461)),
    it = !1;
  function yt(e, t, n, l) {
    t.child = e === null ? tf(t, null, n, l) : Bl(t, e.child, n, l);
  }
  function If(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var S = {};
      for (var C in l) C !== 'ref' && (S[C] = l[C]);
    } else S = l;
    return (
      Dl(t),
      (l = ns(e, t, n, S, u, a)),
      (C = ls()),
      e !== null && !it
        ? (as(e, t, a), Un(e, t, a))
        : (Oe && C && Lr(t), (t.flags |= 1), yt(e, t, l, a), t.child)
    );
  }
  function ed(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Br(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), td(e, t, u, l, a))
        : ((e = ki(n.type, null, l, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Os(e, a))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Xa), n(S, l) && e.ref === t.ref))
        return Un(e, t, a);
    }
    return ((t.flags |= 1), (e = On(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function td(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xa(u, l) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = l = u), Os(e, a))) (e.flags & 131072) !== 0 && (it = !0);
        else return ((t.lanes = e.lanes), Un(e, t, a));
    }
    return bs(e, t, n, l, a);
  }
  function nd(e, t, n, l) {
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
        return ld(e, t, u, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pi(t, u !== null ? u.cachePool : null),
          u !== null ? af(t, u) : Pr(),
          uf(t));
      else return ((l = t.lanes = 536870912), ld(e, t, u !== null ? u.baseLanes | n : n, n, l));
    } else
      u !== null
        ? (Pi(t, u.cachePool), af(t, u), il(), (t.memoizedState = null))
        : (e !== null && Pi(t, null), Pr(), il());
    return (yt(e, t, a, n), t.child);
  }
  function ai(e, t) {
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
  function ld(e, t, n, l, a) {
    var u = Kr();
    return (
      (u = u === null ? null : { parent: lt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Pi(t, null),
      Pr(),
      uf(t),
      e !== null && ra(e, t, l, !0),
      (t.childLanes = a),
      null
    );
  }
  function hu(e, t) {
    return (
      (t = gu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ad(e, t, n) {
    return (
      Bl(t, e.child, null, n),
      (e = hu(t, t.pendingProps)),
      (e.flags |= 2),
      jt(t),
      (t.memoizedState = null),
      e
    );
  }
  function dg(e, t, n) {
    var l = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Oe) {
        if (l.mode === 'hidden') return ((e = hu(t, l)), (t.lanes = 536870912), ai(null, e));
        if (
          (es(t),
          (e = Ve)
            ? ((e = gm(e, $t)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Wn !== null ? { id: gn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yo(e)),
                (n.return = t),
                (t.child = n),
                (vt = t),
                (Ve = null)))
            : (e = null),
          e === null)
        )
          throw In(t);
        return ((t.lanes = 536870912), null);
      }
      return hu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((es(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = ad(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((it || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), it || a)) {
        if (((l = Ye), l !== null && ((S = ht(l, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Rl(e, S), Nt(l, e, S), Es);
        (Cu(), (t = ad(e, t, n)));
      } else
        ((e = u.treeContext),
          (Ve = Pt(S.nextSibling)),
          (vt = t),
          (Oe = !0),
          (Pn = null),
          ($t = !1),
          e !== null && Xo(t, e),
          (t = hu(t, l)),
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
  function vu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function bs(e, t, n, l, a) {
    return (
      Dl(t),
      (n = ns(e, t, n, l, void 0, a)),
      (l = ls()),
      e !== null && !it
        ? (as(e, t, a), Un(e, t, a))
        : (Oe && l && Lr(t), (t.flags |= 1), yt(e, t, n, a), t.child)
    );
  }
  function id(e, t, n, l, a, u) {
    return (
      Dl(t),
      (t.updateQueue = null),
      (n = sf(t, l, n, a)),
      rf(e),
      (l = ls()),
      e !== null && !it
        ? (as(e, t, u), Un(e, t, u))
        : (Oe && l && Lr(t), (t.flags |= 1), yt(e, t, n, u), t.child)
    );
  }
  function ud(e, t, n, l, a) {
    if ((Dl(t), t.stateNode === null)) {
      var u = la,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = gt(S)),
        (u = new n(l, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ss),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        kr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? gt(S) : la),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (ps(t, n, S, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && Ss.enqueueReplaceState(u, u.state, null),
          Ia(t, l, u, a),
          Pa(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        U = Hl(n, C);
      u.props = U;
      var Q = u.context,
        W = n.contextType;
      ((S = la), typeof W == 'object' && W !== null && (S = gt(W)));
      var I = n.getDerivedStateFromProps;
      ((W = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((C || Q !== S) && Kf(t, u, l, S)),
        (tl = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Ia(t, l, u, a),
        Pa(),
        (Q = t.memoizedState),
        C || Z !== Q || tl
          ? (typeof I == 'function' && (ps(t, n, I, l), (Q = t.memoizedState)),
            (U = tl || Zf(t, n, U, l, Z, Q, S))
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
        Fr(e, t),
        (S = t.memoizedProps),
        (W = Hl(n, S)),
        (u.props = W),
        (I = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = la),
        typeof Q == 'object' && Q !== null && (U = gt(Q)),
        (C = n.getDerivedStateFromProps),
        (Q = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== I || Z !== U) && Kf(t, u, l, U)),
        (tl = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Ia(t, l, u, a),
        Pa());
      var k = t.memoizedState;
      S !== I || Z !== k || tl || (e !== null && e.dependencies !== null && $i(e.dependencies))
        ? (typeof C == 'function' && (ps(t, n, C, l), (k = t.memoizedState)),
          (W =
            tl ||
            Zf(t, n, W, l, Z, k, U) ||
            (e !== null && e.dependencies !== null && $i(e.dependencies)))
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
      vu(e, t),
      (l = (t.flags & 128) !== 0),
      u || l
        ? ((u = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Bl(t, e.child, null, a)), (t.child = Bl(t, null, n, a)))
            : yt(e, t, n, a),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Un(e, t, a)),
      e
    );
  }
  function rd(e, t, n, l) {
    return (_l(), (t.flags |= 256), yt(e, t, n, l), t.child);
  }
  var Ts = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ms(e) {
    return { baseLanes: e, cachePool: Fo() };
  }
  function Cs(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Yt), e);
  }
  function sd(e, t, n) {
    var l = t.pendingProps,
      a = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0),
      S && ((a = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Oe) {
        if (
          (a ? al(t) : il(),
          (e = Ve)
            ? ((e = gm(e, $t)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Wn !== null ? { id: gn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yo(e)),
                (n.return = t),
                (t.child = n),
                (vt = t),
                (Ve = null)))
            : (e = null),
          e === null)
        )
          throw In(t);
        return (rc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = l.children;
      return (
        (l = l.fallback),
        a
          ? (il(),
            (a = t.mode),
            (C = gu({ mode: 'hidden', children: C }, a)),
            (l = Al(l, a, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (l = t.child),
            (l.memoizedState = Ms(n)),
            (l.childLanes = Cs(e, S, n)),
            (t.memoizedState = Ts),
            ai(null, l))
          : (al(t), Rs(t, C))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((C = U.dehydrated), C !== null)) {
      if (u)
        t.flags & 256
          ? (al(t), (t.flags &= -257), (t = As(e, t, n)))
          : t.memoizedState !== null
            ? (il(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (il(),
              (C = l.fallback),
              (a = t.mode),
              (l = gu({ mode: 'visible', children: l.children }, a)),
              (C = Al(C, a, n, null)),
              (C.flags |= 2),
              (l.return = t),
              (C.return = t),
              (l.sibling = C),
              (t.child = l),
              Bl(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Ms(n)),
              (l.childLanes = Cs(e, S, n)),
              (t.memoizedState = Ts),
              (t = ai(null, l)));
      else if ((al(t), rc(C))) {
        if (((S = C.nextSibling && C.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (l = Error(x(419))),
          (l.stack = ''),
          (l.digest = S),
          Ka({ value: l, source: null, stack: null }),
          (t = As(e, t, n)));
      } else if ((it || ra(e, t, n, !1), (S = (n & e.childLanes) !== 0), it || S)) {
        if (((S = Ye), S !== null && ((l = ht(S, n)), l !== 0 && l !== U.retryLane)))
          throw ((U.retryLane = l), Rl(e, l), Nt(S, e, l), Es);
        (uc(C) || Cu(), (t = As(e, t, n)));
      } else
        uc(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (Ve = Pt(C.nextSibling)),
            (vt = t),
            (Oe = !0),
            (Pn = null),
            ($t = !1),
            e !== null && Xo(t, e),
            (t = Rs(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? (il(),
        (C = l.fallback),
        (a = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (l = On(U, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (C = On(Q, C)) : ((C = Al(C, a, n, null)), (C.flags |= 2)),
        (C.return = t),
        (l.return = t),
        (l.sibling = C),
        (t.child = l),
        ai(null, l),
        (l = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = Ms(n))
          : ((a = C.cachePool),
            a !== null
              ? ((U = lt._currentValue), (a = a.parent !== U ? { parent: U, pool: U } : a))
              : (a = Fo()),
            (C = { baseLanes: C.baseLanes | n, cachePool: a })),
        (l.memoizedState = C),
        (l.childLanes = Cs(e, S, n)),
        (t.memoizedState = Ts),
        ai(e.child, l))
      : (al(t),
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
  function Rs(e, t) {
    return ((t = gu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function gu(e, t) {
    return ((e = Ht(22, e, null, t)), (e.lanes = 0), e);
  }
  function As(e, t, n) {
    return (
      Bl(t, e.child, null, n),
      (e = Rs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), qr(e.return, t, n));
  }
  function _s(e, t, n, l, a, u) {
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
  function od(e, t, n) {
    var l = t.pendingProps,
      a = l.revealOrder,
      u = l.tail;
    l = l.children;
    var S = Ie.current,
      C = (S & 2) !== 0;
    if (
      (C ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      le(Ie, S),
      yt(e, t, l, n),
      (l = Oe ? Za : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cd(e, n, t);
        else if (e.tag === 19) cd(e, n, t);
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
          ((e = n.alternate), e !== null && au(e) === null && (a = n), (n = n.sibling));
        ((n = a),
          n === null ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
          _s(t, !1, a, n, u, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && au(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
        }
        _s(t, !0, n, null, u, l);
        break;
      case 'together':
        _s(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Un(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (sl |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Os(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && $i(e)));
  }
  function mg(e, t, n) {
    switch (t.tag) {
      case 3:
        (be(t, t.stateNode.containerInfo), el(t, lt, e.memoizedState.cache), _l());
        break;
      case 27:
      case 5:
        Xe(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        el(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), es(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (al(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? sd(e, t, n)
              : (al(t), (e = Un(e, t, n)), e !== null ? e.sibling : null);
        al(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (ra(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          a)
        ) {
          if (l) return od(e, t, n);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          le(Ie, Ie.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), nd(e, t, n, t.pendingProps));
      case 24:
        el(t, lt, e.memoizedState.cache);
    }
    return Un(e, t, n);
  }
  function fd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) it = !0;
      else {
        if (!Os(e, n) && (t.flags & 128) === 0) return ((it = !1), mg(e, t, n));
        it = (e.flags & 131072) !== 0;
      }
    else ((it = !1), Oe && (t.flags & 1048576) !== 0 && qo(t, Za, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = wl(t.elementType)), (t.type = e), typeof e == 'function'))
            Br(e)
              ? ((l = Hl(e, l)), (t.tag = 1), (t = ud(null, t, e, l, n)))
              : ((t.tag = 0), (t = bs(null, t, e, l, n)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === L) {
                ((t.tag = 11), (t = If(null, t, e, l, n)));
                break e;
              } else if (a === O) {
                ((t.tag = 14), (t = ed(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return bs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (a = Hl(l, t.pendingProps)), ud(e, t, l, a, n));
      case 3:
        e: {
          if ((be(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), Fr(e, t), Ia(t, l, null, n));
          var S = t.memoizedState;
          if (
            ((l = S.cache),
            el(t, lt, l),
            l !== u.cache && Xr(t, [lt], n, !0),
            Pa(),
            (l = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = rd(e, t, l, n);
              break e;
            } else if (l !== a) {
              ((a = Jt(Error(x(424)), t)), Ka(a), (t = rd(e, t, l, n)));
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
                Ve = Pt(e.firstChild),
                  vt = t,
                  Oe = !0,
                  Pn = null,
                  $t = !0,
                  n = tf(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((_l(), l === a)) {
              t = Un(e, t, n);
              break e;
            }
            yt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          vu(e, t),
          e === null
            ? (n = bm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Oe ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = wu(ie.current).createElement(n)),
                (l[nt] = t),
                (l[At] = e),
                pt(l, n, e),
                dt(l),
                (t.stateNode = l))
            : (t.memoizedState = bm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Xe(t),
          e === null &&
            Oe &&
            ((l = t.stateNode = Sm(t.type, t.pendingProps, ie.current)),
            (vt = t),
            ($t = !0),
            (a = Ve),
            ml(t.type) ? ((sc = a), (Ve = Pt(l.firstChild))) : (Ve = a)),
          yt(e, t, t.pendingProps.children, n),
          vu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Oe &&
            ((a = l = Ve) &&
              ((l = Xg(l, t.type, t.pendingProps, $t)),
              l !== null
                ? ((t.stateNode = l), (vt = t), (Ve = Pt(l.firstChild)), ($t = !1), (a = !0))
                : (a = !1)),
            a || In(t)),
          Xe(t),
          (a = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (l = u.children),
          lc(a, u) ? (l = null) : S !== null && lc(a, S) && (t.flags |= 32),
          t.memoizedState !== null && ((a = ns(e, t, ag, null, null, n)), (Si._currentValue = a)),
          vu(e, t),
          yt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Oe &&
            ((e = n = Ve) &&
              ((n = Qg(n, t.pendingProps, $t)),
              n !== null ? ((t.stateNode = n), (vt = t), (Ve = null), (e = !0)) : (e = !1)),
            e || In(t)),
          null
        );
      case 13:
        return sd(e, t, n);
      case 4:
        return (
          be(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Bl(t, null, l, n)) : yt(e, t, l, n),
          t.child
        );
      case 11:
        return If(e, t, t.type, t.pendingProps, n);
      case 7:
        return (yt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (yt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (yt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((l = t.pendingProps), el(t, t.type, l.value), yt(e, t, l.children, n), t.child);
      case 9:
        return (
          (a = t.type._context),
          (l = t.pendingProps.children),
          Dl(t),
          (a = gt(a)),
          (l = l(a)),
          (t.flags |= 1),
          yt(e, t, l, n),
          t.child
        );
      case 14:
        return ed(e, t, t.type, t.pendingProps, n);
      case 15:
        return td(e, t, t.type, t.pendingProps, n);
      case 19:
        return od(e, t, n);
      case 31:
        return dg(e, t, n);
      case 22:
        return nd(e, t, n, t.pendingProps);
      case 24:
        return (
          Dl(t),
          (l = gt(lt)),
          e === null
            ? ((a = Kr()),
              a === null &&
                ((a = Ye),
                (u = Qr()),
                (a.pooledCache = u),
                u.refCount++,
                u !== null && (a.pooledCacheLanes |= n),
                (a = u)),
              (t.memoizedState = { parent: l, cache: a }),
              kr(t),
              el(t, lt, a))
            : ((e.lanes & n) !== 0 && (Fr(e, t), Ia(t, null, null, n), Pa()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== l
                ? ((a = { parent: l, cache: l }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  el(t, lt, l))
                : ((l = u.cache), el(t, lt, l), l !== a.cache && Xr(t, [lt], n, !0))),
          yt(e, t, t.pendingProps.children, n),
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
  function Ds(e, t, n, l, a) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jd()) e.flags |= 8192;
        else throw ((Nl = eu), Jr);
    } else e.flags &= -16777217;
  }
  function dd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Am(t)))
      if (jd()) e.flags |= 8192;
      else throw ((Nl = eu), Jr);
  }
  function yu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? He() : 536870912), (e.lanes |= t), (Sa |= t)));
  }
  function ii(e, t) {
    if (!Oe)
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
  function qe(e) {
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
  function hg(e, t, n) {
    var l = t.pendingProps;
    switch ((jr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (qe(t), null);
      case 1:
        return (qe(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          wn(lt),
          Ee(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ua(t)
              ? Hn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Yr())),
          qe(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Hn(t), u !== null ? (qe(t), dd(t, u)) : (qe(t), Ds(t, a, null, l, n)))
            : u
              ? u !== e.memoizedState
                ? (Hn(t), qe(t), dd(t, u))
                : (qe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== l && Hn(t), qe(t), Ds(t, a, e, l, n)),
          null
        );
      case 27:
        if ((We(t), (n = ie.current), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Hn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (qe(t), null);
          }
          ((e = ae.current), ua(t) ? Qo(t) : ((e = Sm(a, l, n)), (t.stateNode = e), Hn(t)));
        }
        return (qe(t), null);
      case 5:
        if ((We(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Hn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(x(166));
            return (qe(t), null);
          }
          if (((u = ae.current), ua(t))) Qo(t);
          else {
            var S = wu(ie.current);
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
            ((u[nt] = t), (u[At] = l));
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
            e: switch ((pt(u, a, l), a)) {
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
        return (qe(t), Ds(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Hn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ie.current), ua(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (a = vt), a !== null))
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            ((e[nt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                sm(e.nodeValue, n)
              )),
              e || In(t, !0));
          } else ((e = wu(e).createTextNode(l)), (e[nt] = t), (t.stateNode = e));
        }
        return (qe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ua(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[nt] = t;
            } else (_l(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (qe(t), (e = !1));
          } else
            ((n = Yr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (qe(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = ua(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
                throw Error(x(317));
              a[nt] = t;
            } else (_l(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (qe(t), (a = !1));
          } else
            ((a = Yr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        return (
          jt(t),
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
              yu(t, t.updateQueue),
              qe(t),
              null)
        );
      case 4:
        return (Ee(), e === null && Ps(t.stateNode.containerInfo), qe(t), null);
      case 10:
        return (wn(t.type), qe(t), null);
      case 19:
        if ((F(Ie), (l = t.memoizedState), l === null)) return (qe(t), null);
        if (((a = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (a) ii(l, !1);
          else {
            if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = au(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ii(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      yu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Go(n, e), (n = n.sibling));
                  return (le(Ie, (Ie.current & 1) | 2), Oe && Dn(t, l.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              ct() > bu &&
              ((t.flags |= 128), (a = !0), ii(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = au(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yu(t, e),
                ii(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !u.alternate && !Oe)
              )
                return (qe(t), null);
            } else
              2 * ct() - l.renderingStartTime > bu &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), ii(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last), e !== null ? (e.sibling = u) : (t.child = u), (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = ct()),
            (e.sibling = null),
            (n = Ie.current),
            le(Ie, a ? (n & 1) | 2 : n & 1),
            Oe && Dn(t, l.treeForkCount),
            e)
          : (qe(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          Ir(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : qe(t),
          (n = t.updateQueue),
          n !== null && yu(t, n.retryQueue),
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
          e !== null && F(zl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          wn(lt),
          qe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(x(156, t.tag));
  }
  function vg(e, t) {
    switch ((jr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          wn(lt),
          Ee(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (We(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((jt(t), t.alternate === null)) throw Error(x(340));
          _l();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((jt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          _l();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (F(Ie), null);
      case 4:
        return (Ee(), null);
      case 10:
        return (wn(t.type), null);
      case 22:
      case 23:
        return (
          jt(t),
          Ir(),
          e !== null && F(zl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (wn(lt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(e, t) {
    switch ((jr(t), t.tag)) {
      case 3:
        (wn(lt), Ee());
        break;
      case 26:
      case 27:
      case 5:
        We(t);
        break;
      case 4:
        Ee();
        break;
      case 31:
        t.memoizedState !== null && jt(t);
        break;
      case 13:
        jt(t);
        break;
      case 19:
        F(Ie);
        break;
      case 10:
        wn(t.type);
        break;
      case 22:
      case 23:
        (jt(t), Ir(), e !== null && F(zl));
        break;
      case 24:
        wn(lt);
    }
  }
  function ui(e, t) {
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
      Ue(t, t.return, C);
    }
  }
  function ul(e, t, n) {
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
                Ue(a, U, W);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (W) {
      Ue(t, t.return, W);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        lf(t, n);
      } catch (l) {
        Ue(e, e.return, l);
      }
    }
  }
  function vd(e, t, n) {
    ((n.props = Hl(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ue(e, t, l);
    }
  }
  function ri(e, t) {
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
      Ue(e, t, a);
    }
  }
  function pn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (a) {
          Ue(e, t, a);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (a) {
          Ue(e, t, a);
        }
      else n.current = null;
  }
  function gd(e) {
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
      Ue(e, e.return, a);
    }
  }
  function zs(e, t, n) {
    try {
      var l = e.stateNode;
      (Lg(l, e.type, n, t), (l[At] = t));
    } catch (a) {
      Ue(e, e.return, a);
    }
  }
  function yd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ml(e.type)) || e.tag === 4
    );
  }
  function ws(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || yd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && ml(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ns(e, t, n) {
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
      (l === 27 && ml(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ns(e, t, n), e = e.sibling; e !== null; ) (Ns(e, t, n), (e = e.sibling));
  }
  function pu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && (l === 27 && ml(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (pu(e, t, n), e = e.sibling; e !== null; ) (pu(e, t, n), (e = e.sibling));
  }
  function pd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
      (pt(t, l, n), (t[nt] = e), (t[At] = n));
    } catch (u) {
      Ue(e, e.return, u);
    }
  }
  var Ln = !1,
    ut = !1,
    Bs = !1,
    Sd = typeof WeakSet == 'function' ? WeakSet : Set,
    mt = null;
  function gg(e, t) {
    if (((e = e.containerInfo), (tc = Gu), (e = Do(e)), Ar(e))) {
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
              I = e,
              Z = null;
            t: for (;;) {
              for (
                var k;
                I !== n || (a !== 0 && I.nodeType !== 3) || (C = S + a),
                  I !== u || (l !== 0 && I.nodeType !== 3) || (U = S + l),
                  I.nodeType === 3 && (S += I.nodeValue.length),
                  (k = I.firstChild) !== null;
              )
                ((Z = I), (I = k));
              for (;;) {
                if (I === e) break t;
                if (
                  (Z === n && ++Q === a && (C = S),
                  Z === u && ++W === l && (U = S),
                  (k = I.nextSibling) !== null)
                )
                  break;
                ((I = Z), (Z = I.parentNode));
              }
              I = k;
            }
            n = C === -1 || U === -1 ? null : { start: C, end: U };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (nc = { focusedElem: e, selectionRange: n }, Gu = !1, mt = t; mt !== null; )
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
                  var re = Hl(n.type, a);
                  ((e = l.getSnapshotBeforeUpdate(re, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (me) {
                  Ue(n, n.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ic(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      ic(e);
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
  function xd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Gn(e, n), l & 4 && ui(5, n));
        break;
      case 1:
        if ((Gn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              Ue(n, n.return, S);
            }
          else {
            var a = Hl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              Ue(n, n.return, S);
            }
          }
        (l & 64 && hd(n), l & 512 && ri(n, n.return));
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
            lf(e, t);
          } catch (S) {
            Ue(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && l & 4 && pd(n);
      case 26:
      case 5:
        (Gn(e, n), t === null && l & 4 && gd(n), l & 512 && ri(n, n.return));
        break;
      case 12:
        Gn(e, n);
        break;
      case 31:
        (Gn(e, n), l & 4 && Td(e, n));
        break;
      case 13:
        (Gn(e, n),
          l & 4 && Md(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Cg.bind(null, n)), Zg(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Ln), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || ut), (a = Ln));
          var u = ut;
          ((Ln = l),
            (ut = t) && !u ? Yn(e, n, (n.subtreeFlags & 8772) !== 0) : Gn(e, n),
            (Ln = a),
            (ut = u));
        }
        break;
      case 30:
        break;
      default:
        Gn(e, n);
    }
  }
  function Ed(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ed(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && or(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ze = null,
    Ot = !1;
  function jn(e, t, n) {
    for (n = n.child; n !== null; ) (bd(e, t, n), (n = n.sibling));
  }
  function bd(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == 'function')
      try {
        Mt.onCommitFiberUnmount(El, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (ut || pn(n, t),
          jn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        ut || pn(n, t);
        var l = Ze,
          a = Ot;
        (ml(n.type) && ((Ze = n.stateNode), (Ot = !1)),
          jn(e, t, n),
          gi(n.stateNode),
          (Ze = l),
          (Ot = a));
        break;
      case 5:
        ut || pn(n, t);
      case 6:
        if (((l = Ze), (a = Ot), (Ze = null), jn(e, t, n), (Ze = l), (Ot = a), Ze !== null))
          if (Ot)
            try {
              (Ze.nodeType === 9
                ? Ze.body
                : Ze.nodeName === 'HTML'
                  ? Ze.ownerDocument.body
                  : Ze
              ).removeChild(n.stateNode);
            } catch (u) {
              Ue(n, t, u);
            }
          else
            try {
              Ze.removeChild(n.stateNode);
            } catch (u) {
              Ue(n, t, u);
            }
        break;
      case 18:
        Ze !== null &&
          (Ot
            ? ((e = Ze),
              hm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Aa(e))
            : hm(Ze, n.stateNode));
        break;
      case 4:
        ((l = Ze),
          (a = Ot),
          (Ze = n.stateNode.containerInfo),
          (Ot = !0),
          jn(e, t, n),
          (Ze = l),
          (Ot = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ul(2, n, t), ut || ul(4, n, t), jn(e, t, n));
        break;
      case 1:
        (ut ||
          (pn(n, t), (l = n.stateNode), typeof l.componentWillUnmount == 'function' && vd(n, t, l)),
          jn(e, t, n));
        break;
      case 21:
        jn(e, t, n);
        break;
      case 22:
        ((ut = (l = ut) || n.memoizedState !== null), jn(e, t, n), (ut = l));
        break;
      default:
        jn(e, t, n);
    }
  }
  function Td(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Aa(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
    }
  }
  function Md(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Aa(e);
      } catch (n) {
        Ue(t, t.return, n);
      }
  }
  function yg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Sd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Sd()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function Su(e, t) {
    var n = yg(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Rg.bind(null, e, l);
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
              if (ml(C.type)) {
                ((Ze = C.stateNode), (Ot = !1));
                break e;
              }
              break;
            case 5:
              ((Ze = C.stateNode), (Ot = !1));
              break e;
            case 3:
            case 4:
              ((Ze = C.stateNode.containerInfo), (Ot = !0));
              break e;
          }
          C = C.return;
        }
        if (Ze === null) throw Error(x(160));
        (bd(u, S, a),
          (Ze = null),
          (Ot = !1),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Cd(t, e), (t = t.sibling));
  }
  var an = null;
  function Cd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Dt(t, e), zt(e), l & 4 && (ul(3, e, e.return), ui(3, e), ul(5, e, e.return)));
        break;
      case 1:
        (Dt(t, e),
          zt(e),
          l & 512 && (ut || n === null || pn(n, n.return)),
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
        var a = an;
        if ((Dt(t, e), zt(e), l & 512 && (ut || n === null || pn(n, n.return)), l & 4)) {
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
                          u[Ba] ||
                          u[nt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = a.createElement(l)),
                          a.head.insertBefore(u, a.querySelector('head > title'))),
                        pt(u, l, n),
                        (u[nt] = e),
                        dt(u),
                        (l = u));
                      break e;
                    case 'link':
                      var S = Cm('link', 'href', a).get(l + (n.href || ''));
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
                      ((u = a.createElement(l)), pt(u, l, n), a.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = Cm('meta', 'content', a).get(l + (n.content || '')))) {
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
                      ((u = a.createElement(l)), pt(u, l, n), a.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, l));
                  }
                  ((u[nt] = e), dt(u), (l = u));
                }
                e.stateNode = l;
              } else Rm(a, e.type, e.stateNode);
            else e.stateNode = Mm(a, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                l === null ? Rm(a, e.type, e.stateNode) : Mm(a, l, e.memoizedProps))
              : l === null && e.stateNode !== null && zs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Dt(t, e),
          zt(e),
          l & 512 && (ut || n === null || pn(n, n.return)),
          n !== null && l & 4 && zs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Dt(t, e), zt(e), l & 512 && (ut || n === null || pn(n, n.return)), e.flags & 32)) {
          a = e.stateNode;
          try {
            $l(a, '');
          } catch (re) {
            Ue(e, e.return, re);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), zs(e, a, n !== null ? n.memoizedProps : a)),
          l & 1024 && (Bs = !0));
        break;
      case 6:
        if ((Dt(t, e), zt(e), l & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (re) {
            Ue(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((Uu = null),
          (a = an),
          (an = Nu(t.containerInfo)),
          Dt(t, e),
          (an = a),
          zt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Aa(t.containerInfo);
          } catch (re) {
            Ue(e, e.return, re);
          }
        Bs && ((Bs = !1), Rd(e));
        break;
      case 4:
        ((l = an), (an = Nu(e.stateNode.containerInfo)), Dt(t, e), zt(e), (an = l));
        break;
      case 12:
        (Dt(t, e), zt(e));
        break;
      case 31:
        (Dt(t, e),
          zt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Su(e, l))));
        break;
      case 13:
        (Dt(t, e),
          zt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Eu = ct()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Su(e, l))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = Ln,
          W = ut;
        if (((Ln = Q || a), (ut = W || U), Dt(t, e), (ut = W), (Ln = Q), zt(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = a ? t._visibility & -2 : t._visibility | 1,
              a && (n === null || U || Ln || ut || Ll(e)),
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
                    var I = U.memoizedProps.style,
                      Z = I != null && I.hasOwnProperty('display') ? I.display : null;
                    C.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (re) {
                  Ue(U, U.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = a ? '' : U.memoizedProps;
                } catch (re) {
                  Ue(U, U.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                U = t;
                try {
                  var k = U.stateNode;
                  a ? vm(k, !0) : vm(U.stateNode, !1);
                } catch (re) {
                  Ue(U, U.return, re);
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
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Su(e, n))));
        break;
      case 19:
        (Dt(t, e),
          zt(e),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Su(e, l))));
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
          if (yd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode,
              u = ws(e);
            pu(e, u, a);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && ($l(S, ''), (n.flags &= -33));
            var C = ws(e);
            pu(e, C, S);
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo,
              Q = ws(e);
            Ns(e, Q, U);
            break;
          default:
            throw Error(x(161));
        }
      } catch (W) {
        Ue(e, e.return, W);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Rd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Gn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (xd(e, t.alternate, t), (t = t.sibling));
  }
  function Ll(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ul(4, t, t.return), Ll(t));
          break;
        case 1:
          pn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && vd(t, t.return, n), Ll(t));
          break;
        case 27:
          gi(t.stateNode);
        case 26:
        case 5:
          (pn(t, t.return), Ll(t));
          break;
        case 22:
          t.memoizedState === null && Ll(t);
          break;
        case 30:
          Ll(t);
          break;
        default:
          Ll(t);
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
          (Yn(a, u, n), ui(4, u));
          break;
        case 1:
          if ((Yn(a, u, n), (l = u), (a = l.stateNode), typeof a.componentDidMount == 'function'))
            try {
              a.componentDidMount();
            } catch (Q) {
              Ue(l, l.return, Q);
            }
          if (((l = u), (a = l.updateQueue), a !== null)) {
            var C = l.stateNode;
            try {
              var U = a.shared.hiddenCallbacks;
              if (U !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < U.length; a++) nf(U[a], C);
            } catch (Q) {
              Ue(l, l.return, Q);
            }
          }
          (n && S & 64 && hd(u), ri(u, u.return));
          break;
        case 27:
          pd(u);
        case 26:
        case 5:
          (Yn(a, u, n), n && l === null && S & 4 && gd(u), ri(u, u.return));
          break;
        case 12:
          Yn(a, u, n);
          break;
        case 31:
          (Yn(a, u, n), n && S & 4 && Td(a, u));
          break;
        case 13:
          (Yn(a, u, n), n && S & 4 && Md(a, u));
          break;
        case 22:
          (u.memoizedState === null && Yn(a, u, n), ri(u, u.return));
          break;
        case 30:
          break;
        default:
          Yn(a, u, n);
      }
      t = t.sibling;
    }
  }
  function Us(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ja(n)));
  }
  function Hs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ja(e)));
  }
  function un(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Ad(e, t, n, l), (t = t.sibling));
  }
  function Ad(e, t, n, l) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (un(e, t, n, l), a & 2048 && ui(9, t));
        break;
      case 1:
        un(e, t, n, l);
        break;
      case 3:
        (un(e, t, n, l),
          a & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ja(e))));
        break;
      case 12:
        if (a & 2048) {
          (un(e, t, n, l), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              C = u.onPostCommit;
            typeof C == 'function' &&
              C(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (U) {
            Ue(t, t.return, U);
          }
        } else un(e, t, n, l);
        break;
      case 31:
        un(e, t, n, l);
        break;
      case 13:
        un(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? un(e, t, n, l)
              : si(e, t)
            : u._visibility & 2
              ? un(e, t, n, l)
              : ((u._visibility |= 2), ga(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && Us(S, t));
        break;
      case 24:
        (un(e, t, n, l), a & 2048 && Hs(t.alternate, t));
        break;
      default:
        un(e, t, n, l);
    }
  }
  function ga(e, t, n, l, a) {
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
          (ga(u, S, C, U, a), ui(8, S));
          break;
        case 23:
          break;
        case 22:
          var W = S.stateNode;
          (S.memoizedState !== null
            ? W._visibility & 2
              ? ga(u, S, C, U, a)
              : si(u, S)
            : ((W._visibility |= 2), ga(u, S, C, U, a)),
            a && Q & 2048 && Us(S.alternate, S));
          break;
        case 24:
          (ga(u, S, C, U, a), a && Q & 2048 && Hs(S.alternate, S));
          break;
        default:
          ga(u, S, C, U, a);
      }
      t = t.sibling;
    }
  }
  function si(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          a = l.flags;
        switch (l.tag) {
          case 22:
            (si(n, l), a & 2048 && Us(l.alternate, l));
            break;
          case 24:
            (si(n, l), a & 2048 && Hs(l.alternate, l));
            break;
          default:
            si(n, l);
        }
        t = t.sibling;
      }
  }
  var ci = 8192;
  function ya(e, t, n) {
    if (e.subtreeFlags & ci) for (e = e.child; e !== null; ) (_d(e, t, n), (e = e.sibling));
  }
  function _d(e, t, n) {
    switch (e.tag) {
      case 26:
        (ya(e, t, n),
          e.flags & ci && e.memoizedState !== null && l0(n, an, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ya(e, t, n);
        break;
      case 3:
      case 4:
        var l = an;
        ((an = Nu(e.stateNode.containerInfo)), ya(e, t, n), (an = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ci), (ci = 16777216), ya(e, t, n), (ci = l))
            : ya(e, t, n));
        break;
      default:
        ya(e, t, n);
    }
  }
  function Od(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function oi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((mt = l), zd(l, e));
        }
      Od(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Dd(e), (e = e.sibling));
  }
  function Dd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (oi(e), e.flags & 2048 && ul(9, e, e.return));
        break;
      case 3:
        oi(e);
        break;
      case 12:
        oi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), xu(e))
          : oi(e);
        break;
      default:
        oi(e);
    }
  }
  function xu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((mt = l), zd(l, e));
        }
      Od(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ul(8, t, t.return), xu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), xu(t)));
          break;
        default:
          xu(t);
      }
      e = e.sibling;
    }
  }
  function zd(e, t) {
    for (; mt !== null; ) {
      var n = mt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ul(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ja(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (mt = l));
      else
        e: for (n = e; mt !== null; ) {
          l = mt;
          var a = l.sibling,
            u = l.return;
          if ((Ed(l), l === n)) {
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
  var pg = {
      getCacheForType: function (e) {
        var t = gt(lt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return gt(lt).controller.signal;
      },
    },
    Sg = typeof WeakMap == 'function' ? WeakMap : Map,
    Ne = 0,
    Ye = null,
    Me = null,
    Ae = 0,
    Be = 0,
    Gt = null,
    rl = !1,
    pa = !1,
    Ls = !1,
    Vn = 0,
    $e = 0,
    sl = 0,
    jl = 0,
    js = 0,
    Yt = 0,
    Sa = 0,
    fi = null,
    wt = null,
    Gs = !1,
    Eu = 0,
    wd = 0,
    bu = 1 / 0,
    Tu = null,
    cl = null,
    ot = 0,
    ol = null,
    xa = null,
    qn = 0,
    Ys = 0,
    Vs = null,
    Nd = null,
    di = 0,
    qs = null;
  function Vt() {
    return (Ne & 2) !== 0 && Ae !== 0 ? Ae & -Ae : V.T !== null ? ks() : wa();
  }
  function Bd() {
    if (Yt === 0)
      if ((Ae & 536870912) === 0 || Oe) {
        var e = ue;
        ((ue <<= 1), (ue & 3932160) === 0 && (ue = 262144), (Yt = e));
      } else Yt = 536870912;
    return ((e = Lt.current), e !== null && (e.flags |= 32), Yt);
  }
  function Nt(e, t, n) {
    (((e === Ye && (Be === 2 || Be === 9)) || e.cancelPendingCommit !== null) &&
      (Ea(e, 0), fl(e, Ae, Yt, !1)),
      Qe(e, n),
      ((Ne & 2) === 0 || e !== Ye) &&
        (e === Ye && ((Ne & 2) === 0 && (jl |= n), $e === 4 && fl(e, Ae, Yt, !1)), Sn(e)));
  }
  function Ud(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(x(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || he(e, t),
      a = l ? bg(e, t) : Qs(e, t, !0),
      u = l;
    do {
      if (a === 0) {
        pa && !l && fl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !xg(n))) {
          ((a = Qs(e, t, !1)), (u = !1));
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
              a = fi;
              var U = C.current.memoizedState.isDehydrated;
              if ((U && (Ea(C, S).flags |= 256), (S = Qs(C, S, !1)), S !== 2)) {
                if (Ls && !U) {
                  ((C.errorRecoveryDisabledLanes |= u), (jl |= u), (a = 4));
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
          (Ea(e, 0), fl(e, t, 0, !0));
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
              fl(l, t, Yt, !rl);
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
          if ((t & 62914560) === t && ((a = Eu + 300 - ct()), 10 < a)) {
            if ((fl(l, t, Yt, !rl), pe(l, 0, !0) !== 0)) break e;
            ((qn = t),
              (l.timeoutHandle = dm(
                Hd.bind(null, l, n, wt, Tu, Gs, t, Yt, jl, Sa, rl, u, 'Throttled', -0, 0),
                a
              )));
            break e;
          }
          Hd(l, n, wt, Tu, Gs, t, Yt, jl, Sa, rl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Sn(e);
  }
  function Hd(e, t, n, l, a, u, S, C, U, Q, W, I, Z, k) {
    if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: An,
      }),
        _d(t, u, I));
      var re = (u & 62914560) === u ? Eu - ct() : (u & 4194048) === u ? wd - ct() : 0;
      if (((re = a0(I, re)), re !== null)) {
        ((qn = u),
          (e.cancelPendingCommit = re(Qd.bind(null, e, t, u, n, l, a, S, C, U, W, I, null, Z, k))),
          fl(e, u, S, !Q));
        return;
      }
    }
    Qd(e, t, u, n, l, a, S, C, U);
  }
  function xg(e) {
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
            if (!Ut(u(), a)) return !1;
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
  function fl(e, t, n, l) {
    ((t &= ~js),
      (t &= ~jl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - xt(a),
        S = 1 << u;
      ((l[u] = -1), (a &= ~S));
    }
    n !== 0 && tt(e, n, t);
  }
  function Mu() {
    return (Ne & 6) === 0 ? (mi(0), !1) : !0;
  }
  function Xs() {
    if (Me !== null) {
      if (Be === 0) var e = Me.return;
      else ((e = Me), (zn = Ol = null), is(e), (fa = null), (Fa = 0), (e = Me));
      for (; e !== null; ) (md(e.alternate, e), (e = e.return));
      Me = null;
    }
  }
  function Ea(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Yg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (qn = 0),
      Xs(),
      (Ye = e),
      (Me = n = On(e.current, null)),
      (Ae = t),
      (Be = 0),
      (Gt = null),
      (rl = !1),
      (pa = he(e, t)),
      (Ls = !1),
      (Sa = Yt = js = jl = sl = $e = 0),
      (wt = fi = null),
      (Gs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - xt(l),
          u = 1 << a;
        ((t |= e[a]), (l &= ~u));
      }
    return ((Vn = t), Zi(), n);
  }
  function Ld(e, t) {
    ((ye = null),
      (V.H = li),
      t === oa || t === Ii
        ? ((t = Po()), (Be = 3))
        : t === Jr
          ? ((t = Po()), (Be = 4))
          : (Be =
              t === Es
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Gt = t),
      Me === null && (($e = 1), mu(e, Jt(t, e.current))));
  }
  function jd() {
    var e = Lt.current;
    return e === null
      ? !0
      : (Ae & 4194048) === Ae
        ? Wt === null
        : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0
          ? e === Wt
          : !1;
  }
  function Gd() {
    var e = V.H;
    return ((V.H = li), e === null ? li : e);
  }
  function Yd() {
    var e = V.A;
    return ((V.A = pg), e);
  }
  function Cu() {
    (($e = 4),
      rl || ((Ae & 4194048) !== Ae && Lt.current !== null) || (pa = !0),
      ((sl & 134217727) === 0 && (jl & 134217727) === 0) || Ye === null || fl(Ye, Ae, Yt, !1));
  }
  function Qs(e, t, n) {
    var l = Ne;
    Ne |= 2;
    var a = Gd(),
      u = Yd();
    ((Ye !== e || Ae !== t) && ((Tu = null), Ea(e, t)), (t = !1));
    var S = $e;
    e: do
      try {
        if (Be !== 0 && Me !== null) {
          var C = Me,
            U = Gt;
          switch (Be) {
            case 8:
              (Xs(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (t = !0);
              var Q = Be;
              if (((Be = 0), (Gt = null), ba(e, C, U, Q), n && pa)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Be), (Be = 0), (Gt = null), ba(e, C, U, Q));
          }
        }
        (Eg(), (S = $e));
        break;
      } catch (W) {
        Ld(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (zn = Ol = null),
      (Ne = l),
      (V.H = a),
      (V.A = u),
      Me === null && ((Ye = null), (Ae = 0), Zi()),
      S
    );
  }
  function Eg() {
    for (; Me !== null; ) Vd(Me);
  }
  function bg(e, t) {
    var n = Ne;
    Ne |= 2;
    var l = Gd(),
      a = Yd();
    Ye !== e || Ae !== t ? ((Tu = null), (bu = ct() + 500), Ea(e, t)) : (pa = he(e, t));
    e: do
      try {
        if (Be !== 0 && Me !== null) {
          t = Me;
          var u = Gt;
          t: switch (Be) {
            case 1:
              ((Be = 0), (Gt = null), ba(e, t, u, 1));
              break;
            case 2:
            case 9:
              if ($o(u)) {
                ((Be = 0), (Gt = null), qd(t));
                break;
              }
              ((t = function () {
                ((Be !== 2 && Be !== 9) || Ye !== e || (Be = 7), Sn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              $o(u) ? ((Be = 0), (Gt = null), qd(t)) : ((Be = 0), (Gt = null), ba(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (Me.tag) {
                case 26:
                  S = Me.memoizedState;
                case 5:
                case 27:
                  var C = Me;
                  if (S ? Am(S) : C.stateNode.complete) {
                    ((Be = 0), (Gt = null));
                    var U = C.sibling;
                    if (U !== null) Me = U;
                    else {
                      var Q = C.return;
                      Q !== null ? ((Me = Q), Ru(Q)) : (Me = null);
                    }
                    break t;
                  }
              }
              ((Be = 0), (Gt = null), ba(e, t, u, 5));
              break;
            case 6:
              ((Be = 0), (Gt = null), ba(e, t, u, 6));
              break;
            case 8:
              (Xs(), ($e = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        Tg();
        break;
      } catch (W) {
        Ld(e, W);
      }
    while (!0);
    return (
      (zn = Ol = null),
      (V.H = l),
      (V.A = a),
      (Ne = n),
      Me !== null ? 0 : ((Ye = null), (Ae = 0), Zi(), $e)
    );
  }
  function Tg() {
    for (; Me !== null && !st(); ) Vd(Me);
  }
  function Vd(e) {
    var t = fd(e.alternate, e, Vn);
    ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (Me = t));
  }
  function qd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = id(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = id(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        is(t);
      default:
        (md(n, t), (t = Me = Go(t, Vn)), (t = fd(n, t, Vn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (Me = t));
  }
  function ba(e, t, n, l) {
    ((zn = Ol = null), is(t), (fa = null), (Fa = 0));
    var a = t.return;
    try {
      if (fg(e, a, t, n, Ae)) {
        (($e = 1), mu(e, Jt(n, e.current)), (Me = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((Me = a), u);
      (($e = 1), mu(e, Jt(n, e.current)), (Me = null));
      return;
    }
    t.flags & 32768
      ? (Oe || l === 1
          ? (e = !0)
          : pa || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((rl = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Lt.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Xd(t, e))
      : Ru(t);
  }
  function Ru(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Xd(t, rl);
        return;
      }
      e = t.return;
      var n = hg(t.alternate, t, Vn);
      if (n !== null) {
        Me = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Xd(e, t) {
    do {
      var n = vg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Me = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Me = e;
        return;
      }
      Me = e = n;
    } while (e !== null);
    (($e = 6), (Me = null));
  }
  function Qd(e, t, n, l, a, u, S, C, U) {
    e.cancelPendingCommit = null;
    do Au();
    while (ot !== 0);
    if ((Ne & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= wr),
        Ke(e, n, u, S, C, U),
        e === Ye && ((Me = Ye = null), (Ae = 0)),
        (xa = t),
        (ol = e),
        (qn = n),
        (Ys = u),
        (Vs = a),
        (Nd = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ag(Mn, function () {
              return (Fd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = V.T), (V.T = null), (a = K.p), (K.p = 2), (S = Ne), (Ne |= 4));
        try {
          gg(e, t, n);
        } finally {
          ((Ne = S), (K.p = a), (V.T = l));
        }
      }
      ((ot = 1), Zd(), Kd(), Jd());
    }
  }
  function Zd() {
    if (ot === 1) {
      ot = 0;
      var e = ol,
        t = xa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = Ne;
        Ne |= 4;
        try {
          Cd(t, e);
          var u = nc,
            S = Do(e.containerInfo),
            C = u.focusedElem,
            U = u.selectionRange;
          if (S !== C && C && C.ownerDocument && Oo(C.ownerDocument.documentElement, C)) {
            if (U !== null && Ar(C)) {
              var Q = U.start,
                W = U.end;
              if ((W === void 0 && (W = Q), 'selectionStart' in C))
                ((C.selectionStart = Q), (C.selectionEnd = Math.min(W, C.value.length)));
              else {
                var I = C.ownerDocument || document,
                  Z = (I && I.defaultView) || window;
                if (Z.getSelection) {
                  var k = Z.getSelection(),
                    re = C.textContent.length,
                    me = Math.min(U.start, re),
                    Ge = U.end === void 0 ? me : Math.min(U.end, re);
                  !k.extend && me > Ge && ((S = Ge), (Ge = me), (me = S));
                  var q = _o(C, me),
                    Y = _o(C, Ge);
                  if (
                    q &&
                    Y &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== q.node ||
                      k.anchorOffset !== q.offset ||
                      k.focusNode !== Y.node ||
                      k.focusOffset !== Y.offset)
                  ) {
                    var X = I.createRange();
                    (X.setStart(q.node, q.offset),
                      k.removeAllRanges(),
                      me > Ge
                        ? (k.addRange(X), k.extend(Y.node, Y.offset))
                        : (X.setEnd(Y.node, Y.offset), k.addRange(X)));
                  }
                }
              }
            }
            for (I = [], k = C; (k = k.parentNode); )
              k.nodeType === 1 && I.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (typeof C.focus == 'function' && C.focus(), C = 0; C < I.length; C++) {
              var P = I[C];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((Gu = !!tc), (nc = tc = null));
        } finally {
          ((Ne = a), (K.p = l), (V.T = n));
        }
      }
      ((e.current = t), (ot = 2));
    }
  }
  function Kd() {
    if (ot === 2) {
      ot = 0;
      var e = ol,
        t = xa,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = V.T), (V.T = null));
        var l = K.p;
        K.p = 2;
        var a = Ne;
        Ne |= 4;
        try {
          xd(e, t.alternate, t);
        } finally {
          ((Ne = a), (K.p = l), (V.T = n));
        }
      }
      ot = 3;
    }
  }
  function Jd() {
    if (ot === 4 || ot === 3) {
      ((ot = 0), fn());
      var e = ol,
        t = xa,
        n = qn,
        l = Nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ot = 5)
        : ((ot = 0), (xa = ol = null), kd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (cl = null),
        qt(n),
        (t = t.stateNode),
        Mt && typeof Mt.onCommitFiberRoot == 'function')
      )
        try {
          Mt.onCommitFiberRoot(El, t, void 0, (t.current.flags & 128) === 128);
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
      ((qn & 3) !== 0 && Au(),
        Sn(e),
        (a = e.pendingLanes),
        (n & 261930) !== 0 && (a & 42) !== 0 ? (e === qs ? di++ : ((di = 0), (qs = e))) : (di = 0),
        mi(0));
    }
  }
  function kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ja(t)));
  }
  function Au() {
    return (Zd(), Kd(), Jd(), Fd());
  }
  function Fd() {
    if (ot !== 5) return !1;
    var e = ol,
      t = Ys;
    Ys = 0;
    var n = qt(qn),
      l = V.T,
      a = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (V.T = null), (n = Vs), (Vs = null));
      var u = ol,
        S = qn;
      if (((ot = 0), (xa = ol = null), (qn = 0), (Ne & 6) !== 0)) throw Error(x(331));
      var C = Ne;
      if (
        ((Ne |= 4),
        Dd(u.current),
        Ad(u, u.current, S, n),
        (Ne = C),
        mi(0, !1),
        Mt && typeof Mt.onPostCommitFiberRoot == 'function')
      )
        try {
          Mt.onPostCommitFiberRoot(El, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = a), (V.T = l), kd(e, t));
    }
  }
  function $d(e, t, n) {
    ((t = Jt(n, t)),
      (t = xs(e.stateNode, t, 2)),
      (e = ll(e, t, 2)),
      e !== null && (Qe(e, 2), Sn(e)));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) $d(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $d(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (cl === null || !cl.has(l)))
          ) {
            ((e = Jt(n, e)),
              (n = Wf(2)),
              (l = ll(t, n, 2)),
              l !== null && (Pf(n, l, t, e), Qe(l, 2), Sn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zs(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Sg();
      var a = new Set();
      l.set(t, a);
    } else ((a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a)));
    a.has(n) || ((Ls = !0), a.add(n), (e = Mg.bind(null, e, t, n)), t.then(e, e));
  }
  function Mg(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ye === e &&
        (Ae & n) === n &&
        ($e === 4 || ($e === 3 && (Ae & 62914560) === Ae && 300 > ct() - Eu)
          ? (Ne & 2) === 0 && Ea(e, 0)
          : (js |= n),
        Sa === Ae && (Sa = 0)),
      Sn(e));
  }
  function Wd(e, t) {
    (t === 0 && (t = He()), (e = Rl(e, t)), e !== null && (Qe(e, t), Sn(e)));
  }
  function Cg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Wd(e, n));
  }
  function Rg(e, t) {
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
    (l !== null && l.delete(t), Wd(e, n));
  }
  function Ag(e, t) {
    return nn(e, t);
  }
  var _u = null,
    Ta = null,
    Ks = !1,
    Ou = !1,
    Js = !1,
    dl = 0;
  function Sn(e) {
    (e !== Ta && e.next === null && (Ta === null ? (_u = Ta = e) : (Ta = Ta.next = e)),
      (Ou = !0),
      Ks || ((Ks = !0), Og()));
  }
  function mi(e, t) {
    if (!Js && Ou) {
      Js = !0;
      do
        for (var n = !1, l = _u; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var S = l.suspendedLanes,
                C = l.pingedLanes;
              ((u = (1 << (31 - xt(42 | e) + 1)) - 1),
                (u &= a & ~(S & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), tm(l, u));
          } else
            ((u = Ae),
              (u = pe(
                l,
                l === Ye ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || he(l, u) || ((n = !0), tm(l, u)));
          l = l.next;
        }
      while (n);
      Js = !1;
    }
  }
  function _g() {
    Pd();
  }
  function Pd() {
    Ou = Ks = !1;
    var e = 0;
    dl !== 0 && Gg() && (e = dl);
    for (var t = ct(), n = null, l = _u; l !== null; ) {
      var a = l.next,
        u = Id(l, t);
      (u === 0
        ? ((l.next = null), n === null ? (_u = a) : (n.next = a), a === null && (Ta = n))
        : ((n = l), (e !== 0 || (u & 3) !== 0) && (Ou = !0)),
        (l = a));
    }
    ((ot !== 0 && ot !== 5) || mi(e), dl !== 0 && (dl = 0));
  }
  function Id(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - xt(u),
        C = 1 << S,
        U = a[S];
      (U === -1
        ? ((C & n) === 0 || (C & l) !== 0) && (a[S] = Te(C, t))
        : U <= t && (e.expiredLanes |= C),
        (u &= ~C));
    }
    if (
      ((t = Ye),
      (n = Ae),
      (n = pe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      n === 0 || (e === t && (Be === 2 || Be === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && Tt(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || he(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Tt(l), qt(n))) {
        case 2:
        case 8:
          n = dn;
          break;
        case 32:
          n = Mn;
          break;
        case 268435456:
          n = mn;
          break;
        default:
          n = Mn;
      }
      return (
        (l = em.bind(null, e)),
        (n = nn(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Tt(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function em(e, t) {
    if (ot !== 0 && ot !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Au() && e.callbackNode !== n) return null;
    var l = Ae;
    return (
      (l = pe(e, e === Ye ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Ud(e, l, t),
          Id(e, ct()),
          e.callbackNode != null && e.callbackNode === n ? em.bind(null, e) : null)
    );
  }
  function tm(e, t) {
    if (Au()) return null;
    Ud(e, t, !0);
  }
  function Og() {
    Vg(function () {
      (Ne & 6) !== 0 ? nn(St, _g) : Pd();
    });
  }
  function ks() {
    if (dl === 0) {
      var e = sa;
      (e === 0 && ((e = Xl), (Xl <<= 1), (Xl & 261888) === 0 && (Xl = 256)), (dl = e));
    }
    return dl;
  }
  function nm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Li('' + e);
  }
  function lm(e, t) {
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
  function Dg(e, t, n, l, a) {
    if (t === 'submit' && n && n.stateNode === a) {
      var u = nm((a[At] || null).action),
        S = l.submitter;
      S &&
        ((t = (t = S[At] || null) ? nm(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var C = new Vi('action', 'action', null, l, a);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (dl !== 0) {
                  var U = S ? lm(a, S) : new FormData(a);
                  hs(n, { pending: !0, data: U, method: a.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (C.preventDefault(),
                  (U = S ? lm(a, S) : new FormData(a)),
                  hs(n, { pending: !0, data: U, method: a.method, action: u }, u, U));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Fs = 0; Fs < zr.length; Fs++) {
    var $s = zr[Fs],
      zg = $s.toLowerCase(),
      wg = $s[0].toUpperCase() + $s.slice(1);
    ln(zg, 'on' + wg);
  }
  (ln(No, 'onAnimationEnd'),
    ln(Bo, 'onAnimationIteration'),
    ln(Uo, 'onAnimationStart'),
    ln('dblclick', 'onDoubleClick'),
    ln('focusin', 'onFocus'),
    ln('focusout', 'onBlur'),
    ln(kv, 'onTransitionRun'),
    ln(Fv, 'onTransitionStart'),
    ln($v, 'onTransitionCancel'),
    ln(Ho, 'onTransitionEnd'),
    kl('onMouseEnter', ['mouseout', 'mouseover']),
    kl('onMouseLeave', ['mouseout', 'mouseover']),
    kl('onPointerEnter', ['pointerout', 'pointerover']),
    kl('onPointerLeave', ['pointerout', 'pointerover']),
    bl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    bl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    bl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    bl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    bl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    bl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var hi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ng = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(hi)
    );
  function am(e, t) {
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
              Qi(W);
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
              Qi(W);
            }
            ((a.currentTarget = null), (u = U));
          }
      }
    }
  }
  function Ce(e, t) {
    var n = t[cr];
    n === void 0 && (n = t[cr] = new Set());
    var l = e + '__bubble';
    n.has(l) || (im(t, e, 2, !1), n.add(l));
  }
  function Ws(e, t, n) {
    var l = 0;
    (t && (l |= 4), im(n, e, l, t));
  }
  var Du = '_reactListening' + Math.random().toString(36).slice(2);
  function Ps(e) {
    if (!e[Du]) {
      ((e[Du] = !0),
        $c.forEach(function (n) {
          n !== 'selectionchange' && (Ng.has(n) || Ws(n, !1, e), Ws(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Du] || ((t[Du] = !0), Ws('selectionchange', !1, t));
    }
  }
  function im(e, t, n, l) {
    switch (Bm(t)) {
      case 2:
        var a = r0;
        break;
      case 8:
        a = s0;
        break;
      default:
        a = mc;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !pr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : a !== void 0
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Is(e, t, n, l, a) {
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
            if (((S = Zl(C)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              l = u = S;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    so(function () {
      var Q = u,
        W = gr(n),
        I = [];
      e: {
        var Z = Lo.get(e);
        if (Z !== void 0) {
          var k = Vi,
            re = e;
          switch (e) {
            case 'keypress':
              if (Gi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = Rv;
              break;
            case 'focusin':
              ((re = 'focus'), (k = br));
              break;
            case 'focusout':
              ((re = 'blur'), (k = br));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = br;
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
              k = fo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = hv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = Ov;
              break;
            case No:
            case Bo:
            case Uo:
              k = yv;
              break;
            case Ho:
              k = zv;
              break;
            case 'scroll':
            case 'scrollend':
              k = dv;
              break;
            case 'wheel':
              k = Nv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = Sv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = ho;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = Uv;
          }
          var me = (t & 4) !== 0,
            Ge = !me && (e === 'scroll' || e === 'scrollend'),
            q = me ? (Z !== null ? Z + 'Capture' : null) : Z;
          me = [];
          for (var Y = Q, X; Y !== null; ) {
            var P = Y;
            if (
              ((X = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                X === null ||
                q === null ||
                ((P = Ha(Y, q)), P != null && me.push(vi(Y, P, X))),
              Ge)
            )
              break;
            Y = Y.return;
          }
          0 < me.length && ((Z = new k(Z, re, null, n, W)), I.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            Z && n !== vr && (re = n.relatedTarget || n.fromElement) && (Zl(re) || re[Ql]))
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
                (re = re ? Zl(re) : null),
                re !== null &&
                  ((Ge = i(re)), (me = re.tag), re !== Ge || (me !== 5 && me !== 27 && me !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((me = fo),
              (P = 'onMouseLeave'),
              (q = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = ho), (P = 'onPointerLeave'), (q = 'onPointerEnter'), (Y = 'pointer')),
              (Ge = k == null ? Z : Ua(k)),
              (X = re == null ? Z : Ua(re)),
              (Z = new me(P, Y + 'leave', k, n, W)),
              (Z.target = Ge),
              (Z.relatedTarget = X),
              (P = null),
              Zl(W) === Q &&
                ((me = new me(q, Y + 'enter', re, n, W)),
                (me.target = X),
                (me.relatedTarget = Ge),
                (P = me)),
              (Ge = P),
              k && re)
            )
              t: {
                for (me = Bg, q = k, Y = re, X = 0, P = q; P; P = me(P)) X++;
                P = 0;
                for (var fe = Y; fe; fe = me(fe)) P++;
                for (; 0 < X - P; ) ((q = me(q)), X--);
                for (; 0 < P - X; ) ((Y = me(Y)), P--);
                for (; X--; ) {
                  if (q === Y || (Y !== null && q === Y.alternate)) {
                    me = q;
                    break t;
                  }
                  ((q = me(q)), (Y = me(Y)));
                }
                me = null;
              }
            else me = null;
            (k !== null && um(I, Z, k, me, !1),
              re !== null && Ge !== null && um(I, Ge, re, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Ua(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var De = bo;
          else if (xo(Z))
            if (To) De = Zv;
            else {
              De = Xv;
              var ce = qv;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && hr(Q.elementType) && (De = bo)
                : (De = Qv));
          if (De && (De = De(e, Q))) {
            Eo(I, De, n, W);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              mr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Ua(Q) : window), e)) {
          case 'focusin':
            (xo(ce) || ce.contentEditable === 'true') && ((ea = ce), (_r = Q), (Qa = null));
            break;
          case 'focusout':
            Qa = _r = ea = null;
            break;
          case 'mousedown':
            Or = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Or = !1), zo(I, n, W));
            break;
          case 'selectionchange':
            if (Jv) break;
          case 'keydown':
          case 'keyup':
            zo(I, n, W);
        }
        var Se;
        if (Mr)
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
          Il
            ? po(e, n) && (_e = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (_e = 'onCompositionStart');
        (_e &&
          (vo &&
            n.locale !== 'ko' &&
            (Il || _e !== 'onCompositionStart'
              ? _e === 'onCompositionEnd' && Il && (Se = co())
              : (($n = W), (Sr = 'value' in $n ? $n.value : $n.textContent), (Il = !0))),
          (ce = zu(Q, _e)),
          0 < ce.length &&
            ((_e = new mo(_e, e, null, n, W)),
            I.push({ event: _e, listeners: ce }),
            Se ? (_e.data = Se) : ((Se = So(n)), Se !== null && (_e.data = Se)))),
          (Se = Lv ? jv(e, n) : Gv(e, n)) &&
            ((_e = zu(Q, 'onBeforeInput')),
            0 < _e.length &&
              ((ce = new mo('onBeforeInput', 'beforeinput', null, n, W)),
              I.push({ event: ce, listeners: _e }),
              (ce.data = Se))),
          Dg(I, e, Q, n, W));
      }
      am(I, t);
    });
  }
  function vi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = Ha(e, n)),
          a != null && l.unshift(vi(e, a, u)),
          (a = Ha(e, t)),
          a != null && l.push(vi(e, a, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Bg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function um(e, t, n, l, a) {
    for (var u = t._reactName, S = []; n !== null && n !== l; ) {
      var C = n,
        U = C.alternate,
        Q = C.stateNode;
      if (((C = C.tag), U !== null && U === l)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        Q === null ||
        ((U = Q),
        a
          ? ((Q = Ha(n, u)), Q != null && S.unshift(vi(n, Q, U)))
          : a || ((Q = Ha(n, u)), Q != null && S.push(vi(n, Q, U)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var Ug = /\r\n?/g,
    Hg = /\u0000|\uFFFD/g;
  function rm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Ug,
        `
`
      )
      .replace(Hg, '');
  }
  function sm(e, t) {
    return ((t = rm(t)), rm(e) === t);
  }
  function je(e, t, n, l, a, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || $l(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && t !== 'body' && $l(e, '' + l);
        break;
      case 'className':
        Ui(e, 'class', l);
        break;
      case 'tabIndex':
        Ui(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ui(e, n, l);
        break;
      case 'style':
        uo(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          Ui(e, 'data', l);
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
        ((l = Li('' + l)), e.setAttribute(n, l));
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
              ? (t !== 'input' && je(e, t, 'name', a.name, a, null),
                je(e, t, 'formEncType', a.formEncType, a, null),
                je(e, t, 'formMethod', a.formMethod, a, null),
                je(e, t, 'formTarget', a.formTarget, a, null))
              : (je(e, t, 'encType', a.encType, a, null),
                je(e, t, 'method', a.method, a, null),
                je(e, t, 'target', a.target, a, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = Li('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = An);
        break;
      case 'onScroll':
        l != null && Ce('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ce('scrollend', e);
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
        ((n = Li('' + l)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Ce('beforetoggle', e), Ce('toggle', e), Bi(e, 'popover', l));
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
        Bi(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = ov.get(n) || n), Bi(e, n, l));
    }
  }
  function ec(e, t, n, l, a, u) {
    switch (n) {
      case 'style':
        uo(e, l, u);
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
          ? $l(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && $l(e, '' + l);
        break;
      case 'onScroll':
        l != null && Ce('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ce('scrollend', e);
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
        if (!Wc.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((a = n.endsWith('Capture')),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              (u = e[At] || null),
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
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : Bi(e, n, l);
          }
    }
  }
  function pt(e, t, n) {
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
        (Ce('error', e), Ce('load', e));
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
                  je(e, t, u, S, n, null);
              }
          }
        (a && je(e, t, 'srcSet', n.srcSet, n, null), l && je(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Ce('invalid', e);
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
                  je(e, t, l, W, n, null);
              }
          }
        no(e, u, C, U, Q, S, a, !1);
        return;
      case 'select':
        (Ce('invalid', e), (l = S = u = null));
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
                je(e, t, a, C, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!l),
          t != null ? Fl(e, !!l, t, !1) : n != null && Fl(e, !!l, n, !0));
        return;
      case 'textarea':
        (Ce('invalid', e), (u = a = l = null));
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
                je(e, t, S, C, n, null);
            }
        ao(e, l, a, u);
        return;
      case 'option':
        for (U in n)
          if (n.hasOwnProperty(U) && ((l = n[U]), l != null))
            switch (U) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                je(e, t, U, l, n, null);
            }
        return;
      case 'dialog':
        (Ce('beforetoggle', e), Ce('toggle', e), Ce('cancel', e), Ce('close', e));
        break;
      case 'iframe':
      case 'object':
        Ce('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < hi.length; l++) Ce(hi[l], e);
        break;
      case 'image':
        (Ce('error', e), Ce('load', e));
        break;
      case 'details':
        Ce('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ce('error', e), Ce('load', e));
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
                je(e, t, Q, l, n, null);
            }
        return;
      default:
        if (hr(t)) {
          for (W in n)
            n.hasOwnProperty(W) && ((l = n[W]), l !== void 0 && ec(e, t, W, l, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((l = n[C]), l != null && je(e, t, C, l, n, null));
  }
  function Lg(e, t, n, l) {
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
          var I = n[k];
          if (n.hasOwnProperty(k) && I != null)
            switch (k) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                U = I;
              default:
                l.hasOwnProperty(k) || je(e, t, k, null, l, I);
            }
        }
        for (var Z in l) {
          var k = l[Z];
          if (((I = n[Z]), l.hasOwnProperty(Z) && (k != null || I != null)))
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
                k !== I && je(e, t, Z, k, l, I);
            }
        }
        dr(e, S, C, U, Q, W, u, a);
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
                l.hasOwnProperty(u) || je(e, t, u, null, l, U);
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
                u !== U && je(e, t, a, u, l, U);
            }
        ((t = C),
          (n = S),
          (l = k),
          Z != null
            ? Fl(e, !!n, Z, !1)
            : !!l != !!n && (t != null ? Fl(e, !!n, t, !0) : Fl(e, !!n, n ? [] : '', !1)));
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
                je(e, t, C, null, l, a);
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
                a !== u && je(e, t, S, a, l, u);
            }
        lo(e, Z, k);
        return;
      case 'option':
        for (var re in n)
          if (((Z = n[re]), n.hasOwnProperty(re) && Z != null && !l.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                je(e, t, re, null, l, Z);
            }
        for (U in l)
          if (((Z = l[U]), (k = n[U]), l.hasOwnProperty(U) && Z !== k && (Z != null || k != null)))
            switch (U) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                je(e, t, U, Z, l, k);
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
            n.hasOwnProperty(me) && Z != null && !l.hasOwnProperty(me) && je(e, t, me, null, l, Z));
        for (Q in l)
          if (((Z = l[Q]), (k = n[Q]), l.hasOwnProperty(Q) && Z !== k && (Z != null || k != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                je(e, t, Q, Z, l, k);
            }
        return;
      default:
        if (hr(t)) {
          for (var Ge in n)
            ((Z = n[Ge]),
              n.hasOwnProperty(Ge) &&
                Z !== void 0 &&
                !l.hasOwnProperty(Ge) &&
                ec(e, t, Ge, void 0, l, Z));
          for (W in l)
            ((Z = l[W]),
              (k = n[W]),
              !l.hasOwnProperty(W) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                ec(e, t, W, Z, l, k));
          return;
        }
    }
    for (var q in n)
      ((Z = n[q]),
        n.hasOwnProperty(q) && Z != null && !l.hasOwnProperty(q) && je(e, t, q, null, l, Z));
    for (I in l)
      ((Z = l[I]),
        (k = n[I]),
        !l.hasOwnProperty(I) || Z === k || (Z == null && k == null) || je(e, t, I, Z, l, k));
  }
  function cm(e) {
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
  function jg() {
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
        if (u && C && cm(S)) {
          for (S = 0, C = a.responseEnd, l += 1; l < n.length; l++) {
            var U = n[l],
              Q = U.startTime;
            if (Q > C) break;
            var W = U.transferSize,
              I = U.initiatorType;
            W && cm(I) && ((U = U.responseEnd), (S += W * (U < C ? 1 : (C - Q) / (U - Q))));
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
  var tc = null,
    nc = null;
  function wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function om(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function fm(e, t) {
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
  function lc(e, t) {
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
  var ac = null;
  function Gg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === ac ? !1 : ((ac = e), !0)) : ((ac = null), !1);
  }
  var dm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Yg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    mm = typeof Promise == 'function' ? Promise : void 0,
    Vg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof mm < 'u'
          ? function (e) {
              return mm.resolve(null).then(e).catch(qg);
            }
          : dm;
  function qg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ml(e) {
    return e === 'head';
  }
  function hm(e, t) {
    var n = t,
      l = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(a), Aa(t));
            return;
          }
          l--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') l++;
        else if (n === 'html') gi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), gi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              C = u.nodeName;
            (u[Ba] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && gi(e.ownerDocument.body);
      n = a;
    } while (n);
    Aa(t);
  }
  function vm(e, t) {
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
  function ic(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (ic(n), or(n));
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
  function Xg(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ba])
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
      if (((e = Pt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Qg(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = Pt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Pt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function uc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function rc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function Zg(e, t) {
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
  function Pt(e) {
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
  var sc = null;
  function ym(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return Pt(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function pm(e) {
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
  function Sm(e, t, n) {
    switch (((t = wu(n)), e)) {
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
  function gi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    or(e);
  }
  var It = new Map(),
    xm = new Set();
  function Nu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Xn = K.d;
  K.d = { f: Kg, r: Jg, D: kg, C: Fg, L: $g, m: Wg, X: Ig, S: Pg, M: e0 };
  function Kg() {
    var e = Xn.f(),
      t = Mu();
    return e || t;
  }
  function Jg(e) {
    var t = Kl(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Lf(t) : Xn.r(e);
  }
  var Ma = typeof document > 'u' ? null : document;
  function Em(e, t, n) {
    var l = Ma;
    if (l && typeof t == 'string' && t) {
      var a = Zt(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof n == 'string' && (a += '[crossorigin="' + n + '"]'),
        xm.has(a) ||
          (xm.add(a),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(a) === null &&
            ((t = l.createElement('link')), pt(t, 'link', e), dt(t), l.head.appendChild(t))));
    }
  }
  function kg(e) {
    (Xn.D(e), Em('dns-prefetch', e, null));
  }
  function Fg(e, t) {
    (Xn.C(e, t), Em('preconnect', e, t));
  }
  function $g(e, t, n) {
    Xn.L(e, t, n);
    var l = Ma;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + Zt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((a += '[imagesrcset="' + Zt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (a += '[imagesizes="' + Zt(n.imageSizes) + '"]'))
        : (a += '[href="' + Zt(e) + '"]');
      var u = a;
      switch (t) {
        case 'style':
          u = Ca(e);
          break;
        case 'script':
          u = Ra(e);
      }
      It.has(u) ||
        ((e = y(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        It.set(u, e),
        l.querySelector(a) !== null ||
          (t === 'style' && l.querySelector(yi(u))) ||
          (t === 'script' && l.querySelector(pi(u))) ||
          ((t = l.createElement('link')), pt(t, 'link', e), dt(t), l.head.appendChild(t)));
    }
  }
  function Wg(e, t) {
    Xn.m(e, t);
    var n = Ma;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        a = 'link[rel="modulepreload"][as="' + Zt(l) + '"][href="' + Zt(e) + '"]',
        u = a;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Ra(e);
      }
      if (
        !It.has(u) &&
        ((e = y({ rel: 'modulepreload', href: e }, t)), It.set(u, e), n.querySelector(a) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(pi(u))) return;
        }
        ((l = n.createElement('link')), pt(l, 'link', e), dt(l), n.head.appendChild(l));
      }
    }
  }
  function Pg(e, t, n) {
    Xn.S(e, t, n);
    var l = Ma;
    if (l && e) {
      var a = Jl(l).hoistableStyles,
        u = Ca(e);
      t = t || 'default';
      var S = a.get(u);
      if (!S) {
        var C = { loading: 0, preload: null };
        if ((S = l.querySelector(yi(u)))) C.loading = 5;
        else {
          ((e = y({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = It.get(u)) && cc(e, n));
          var U = (S = l.createElement('link'));
          (dt(U),
            pt(U, 'link', e),
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
            Bu(S, t, l));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: C }), a.set(u, S));
      }
    }
  }
  function Ig(e, t) {
    Xn.X(e, t);
    var n = Ma;
    if (n && e) {
      var l = Jl(n).hoistableScripts,
        a = Ra(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(pi(a))),
        u ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = It.get(a)) && oc(e, t),
          (u = n.createElement('script')),
          dt(u),
          pt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function e0(e, t) {
    Xn.M(e, t);
    var n = Ma;
    if (n && e) {
      var l = Jl(n).hoistableScripts,
        a = Ra(e),
        u = l.get(a);
      u ||
        ((u = n.querySelector(pi(a))),
        u ||
          ((e = y({ src: e, async: !0, type: 'module' }, t)),
          (t = It.get(a)) && oc(e, t),
          (u = n.createElement('script')),
          dt(u),
          pt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        l.set(a, u));
    }
  }
  function bm(e, t, n, l) {
    var a = (a = ie.current) ? Nu(a) : null;
    if (!a) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ca(n.href)),
            (n = Jl(a).hoistableStyles),
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
          e = Ca(n.href);
          var u = Jl(a).hoistableStyles,
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
              (u = a.querySelector(yi(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
              It.has(e) ||
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
                It.set(e, n),
                u || t0(a, e, n, S.state))),
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
            ? ((t = Ra(n)),
              (n = Jl(a).hoistableScripts),
              (l = n.get(t)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function Ca(e) {
    return 'href="' + Zt(e) + '"';
  }
  function yi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Tm(e) {
    return y({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function t0(e, t, n, l) {
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
        pt(t, 'link', n),
        dt(t),
        e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + Zt(e) + '"]';
  }
  function pi(e) {
    return 'script[async]' + e;
  }
  function Mm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Zt(n.href) + '"]');
          if (l) return ((t.instance = l), dt(l), l);
          var a = y({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            dt(l),
            pt(l, 'style', a),
            Bu(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          a = Ca(n.href);
          var u = e.querySelector(yi(a));
          if (u) return ((t.state.loading |= 4), (t.instance = u), dt(u), u);
          ((l = Tm(n)),
            (a = It.get(a)) && cc(l, a),
            (u = (e.ownerDocument || e).createElement('link')),
            dt(u));
          var S = u;
          return (
            (S._p = new Promise(function (C, U) {
              ((S.onload = C), (S.onerror = U));
            })),
            pt(u, 'link', l),
            (t.state.loading |= 4),
            Bu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Ra(n.src)),
            (a = e.querySelector(pi(u)))
              ? ((t.instance = a), dt(a), a)
              : ((l = n),
                (a = It.get(u)) && ((l = y({}, n)), oc(l, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                dt(a),
                pt(a, 'link', l),
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
        ((l = t.instance), (t.state.loading |= 4), Bu(l, n.precedence, e));
    return t.instance;
  }
  function Bu(e, t, n) {
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
  function cc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function oc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Uu = null;
  function Cm(e, t, n) {
    if (Uu === null) {
      var l = new Map(),
        a = (Uu = new Map());
      a.set(n, l);
    } else ((a = Uu), (l = a.get(n)), l || ((l = new Map()), a.set(n, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (
        !(u[Ba] || u[nt] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function Rm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function n0(e, t, n) {
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
  function Am(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function l0(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var a = Ca(l.href),
          u = t.querySelector(yi(a));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Hu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            dt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (l = Tm(l)),
          (a = It.get(a)) && cc(l, a),
          (u = u.createElement('link')),
          dt(u));
        var S = u;
        ((S._p = new Promise(function (C, U) {
          ((S.onload = C), (S.onerror = U));
        })),
          pt(u, 'link', l),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Hu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var fc = 0;
  function a0(e, t) {
    return (
      e.stylesheets && e.count === 0 && ju(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && ju(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && fc === 0 && (fc = 62500 * jg());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && ju(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > fc ? 50 : 800) + t
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
  function Hu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Lu = null;
  function ju(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Lu = new Map()), t.forEach(i0, e), (Lu = null), Hu.call(e)));
  }
  function i0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Lu.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Lu.set(e, n));
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
        (l = Hu.bind(this)),
        a.addEventListener('load', l),
        a.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Si = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function u0(e, t, n, l, a, u, S, C, U) {
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
      (this.expirationTimes = Pe(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Pe(0)),
      (this.hiddenUpdates = Pe(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = a),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function _m(e, t, n, l, a, u, S, C, U, Q, W, I) {
    return (
      (e = new u0(e, t, n, S, U, Q, W, I, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Qr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      kr(u),
      e
    );
  }
  function Om(e) {
    return e ? ((e = la), e) : la;
  }
  function Dm(e, t, n, l, a, u) {
    ((a = Om(a)),
      l.context === null ? (l.context = a) : (l.pendingContext = a),
      (l = nl(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (n = ll(e, l, t)),
      n !== null && (Nt(n, e, t), Wa(n, e, t)));
  }
  function zm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function dc(e, t) {
    (zm(e, t), (e = e.alternate) && zm(e, t));
  }
  function wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rl(e, 67108864);
      (t !== null && Nt(t, e, 67108864), dc(e, 67108864));
    }
  }
  function Nm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vt();
      t = vn(t);
      var n = Rl(e, t);
      (n !== null && Nt(n, e, t), dc(e, t));
    }
  }
  var Gu = !0;
  function r0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 2), mc(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function s0(e, t, n, l) {
    var a = V.T;
    V.T = null;
    var u = K.p;
    try {
      ((K.p = 8), mc(e, t, n, l));
    } finally {
      ((K.p = u), (V.T = a));
    }
  }
  function mc(e, t, n, l) {
    if (Gu) {
      var a = hc(l);
      if (a === null) (Is(e, t, l, Yu, n), Um(e, l));
      else if (o0(a, e, t, n, l)) l.stopPropagation();
      else if ((Um(e, l), t & 4 && -1 < c0.indexOf(e))) {
        for (; a !== null; ) {
          var u = Kl(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Re(u.pendingLanes);
                  if (S !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - xt(S));
                      ((C.entanglements[1] |= U), (S &= ~U));
                    }
                    (Sn(u), (Ne & 6) === 0 && ((bu = ct() + 500), mi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = Rl(u, 2)), C !== null && Nt(C, u, 2), Mu(), dc(u, 2));
            }
          if (((u = hc(l)), u === null && Is(e, t, l, Yu, n), u === a)) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else Is(e, t, l, null, n);
    }
  }
  function hc(e) {
    return ((e = gr(e)), vc(e));
  }
  var Yu = null;
  function vc(e) {
    if (((Yu = null), (e = Zl(e)), e !== null)) {
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
    return ((Yu = e), null);
  }
  function Bm(e) {
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
        switch (ql()) {
          case St:
            return 2;
          case dn:
            return 8;
          case Mn:
          case Cn:
            return 32;
          case mn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gc = !1,
    hl = null,
    vl = null,
    gl = null,
    xi = new Map(),
    Ei = new Map(),
    yl = [],
    c0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Um(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        hl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        vl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        gl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        xi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ei.delete(t.pointerId);
    }
  }
  function bi(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Kl(t)), t !== null && wm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function o0(e, t, n, l, a) {
    switch (t) {
      case 'focusin':
        return ((hl = bi(hl, e, t, n, l, a)), !0);
      case 'dragenter':
        return ((vl = bi(vl, e, t, n, l, a)), !0);
      case 'mouseover':
        return ((gl = bi(gl, e, t, n, l, a)), !0);
      case 'pointerover':
        var u = a.pointerId;
        return (xi.set(u, bi(xi.get(u) || null, e, t, n, l, a)), !0);
      case 'gotpointercapture':
        return ((u = a.pointerId), Ei.set(u, bi(Ei.get(u) || null, e, t, n, l, a)), !0);
    }
    return !1;
  }
  function Hm(e) {
    var t = Zl(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Na(e.priority, function () {
                Nm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Na(e.priority, function () {
                Nm(n);
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
  function Vu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = hc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((vr = l), n.target.dispatchEvent(l), (vr = null));
      } else return ((t = Kl(n)), t !== null && wm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Lm(e, t, n) {
    Vu(e) && n.delete(t);
  }
  function f0() {
    ((gc = !1),
      hl !== null && Vu(hl) && (hl = null),
      vl !== null && Vu(vl) && (vl = null),
      gl !== null && Vu(gl) && (gl = null),
      xi.forEach(Lm),
      Ei.forEach(Lm));
  }
  function qu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      gc || ((gc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, f0)));
  }
  var Xu = null;
  function jm(e) {
    Xu !== e &&
      ((Xu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Xu === e && (Xu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            a = e[t + 2];
          if (typeof l != 'function') {
            if (vc(l || n) === null) continue;
            break;
          }
          var u = Kl(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            hs(u, { pending: !0, data: a, method: n.method, action: l }, l, a));
        }
      }));
  }
  function Aa(e) {
    function t(U) {
      return qu(U, e);
    }
    (hl !== null && qu(hl, e),
      vl !== null && qu(vl, e),
      gl !== null && qu(gl, e),
      xi.forEach(t),
      Ei.forEach(t));
    for (var n = 0; n < yl.length; n++) {
      var l = yl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < yl.length && ((n = yl[0]), n.blockedOn === null); )
      (Hm(n), n.blockedOn === null && yl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var a = n[l],
          u = n[l + 1],
          S = a[At] || null;
        if (typeof u == 'function') S || jm(n);
        else if (S) {
          var C = null;
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (S = u[At] || null))) C = S.formAction;
            else if (vc(a) !== null) continue;
          } else C = S.action;
          (typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)), jm(n));
        }
      }
  }
  function Gm() {
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
  function yc(e) {
    this._internalRoot = e;
  }
  ((Qu.prototype.render = yc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        l = Vt();
      Dm(n, l, e, t, null, null);
    }),
    (Qu.prototype.unmount = yc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Dm(e.current, 2, null, e, null, null), Mu(), (t[Ql] = null));
        }
      }));
  function Qu(e) {
    this._internalRoot = e;
  }
  Qu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < yl.length && t !== 0 && t < yl[n].priority; n++);
      (yl.splice(n, 0, e), n === 0 && Hm(e));
    }
  };
  var Ym = b.version;
  if (Ym !== '19.2.5') throw Error(x(527, Ym, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var d0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: V,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zu.isDisabled && Zu.supportsFiber)
      try {
        ((El = Zu.inject(d0)), (Mt = Zu));
      } catch {}
  }
  return (
    (Mi.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        l = '',
        a = Jf,
        u = kf,
        S = Ff;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = _m(e, 1, !1, null, null, n, l, null, a, u, S, Gm)),
        (e[Ql] = t.current),
        Ps(e),
        new yc(t)
      );
    }),
    (Mi.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var l = !1,
        a = '',
        u = Jf,
        S = kf,
        C = Ff,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = _m(e, 1, !0, t, n ?? null, l, a, U, u, S, C, Gm)),
        (t.context = Om(null)),
        (n = t.current),
        (l = Vt()),
        (l = vn(l)),
        (a = nl(l)),
        (a.callback = null),
        ll(n, a, l),
        (n = l),
        (t.current.lanes = n),
        Qe(t, n),
        Sn(t),
        (e[Ql] = t.current),
        Ps(e),
        new Qu(t)
      );
    }),
    (Mi.version = '19.2.5'),
    Mi
  );
}
var Wm;
function T0() {
  if (Wm) return Sc.exports;
  Wm = 1;
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
  return (s(), (Sc.exports = b0()), Sc.exports);
}
var M0 = T0(),
  N = jc();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Pm = 'popstate';
function Im(s) {
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
function C0(s = {}) {
  function b(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: c } = i || x.location;
    return Nc(
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
    return typeof h == 'string' ? h : Di(h);
  }
  return A0(b, T, null, s);
}
function Je(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function En(s, b) {
  if (!s) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function R0() {
  return Math.random().toString(36).substring(2, 10);
}
function eh(s, b) {
  return {
    usr: s.state,
    key: s.key,
    idx: b,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Nc(s, b, T = null, x, h) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Oa(b) : b),
    state: T,
    key: (b && b.key) || x || R0(),
    unstable_mask: h,
  };
}
function Di({ pathname: s = '/', search: b = '', hash: T = '' }) {
  return (
    b && b !== '?' && (s += b.charAt(0) === '?' ? b : '?' + b),
    T && T !== '#' && (s += T.charAt(0) === '#' ? T : '#' + T),
    s
  );
}
function Oa(s) {
  let b = {};
  if (s) {
    let T = s.indexOf('#');
    T >= 0 && ((b.hash = s.substring(T)), (s = s.substring(0, T)));
    let x = s.indexOf('?');
    (x >= 0 && ((b.search = s.substring(x)), (s = s.substring(0, x))), s && (b.pathname = s));
  }
  return b;
}
function A0(s, b, T, x = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = x,
    d = h.history,
    f = 'POP',
    c = null,
    m = o();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ''));
  function o() {
    return (d.state || { idx: null }).idx;
  }
  function y() {
    f = 'POP';
    let E = o(),
      R = E == null ? null : E - m;
    ((m = E), c && c({ action: f, location: v.location, delta: R }));
  }
  function g(E, R) {
    f = 'PUSH';
    let D = Im(E) ? E : Nc(v.location, E, R);
    m = o() + 1;
    let w = eh(D, m),
      L = v.createHref(D.unstable_mask || D);
    try {
      d.pushState(w, '', L);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      h.location.assign(L);
    }
    i && c && c({ action: f, location: v.location, delta: 1 });
  }
  function r(E, R) {
    f = 'REPLACE';
    let D = Im(E) ? E : Nc(v.location, E, R);
    m = o();
    let w = eh(D, m),
      L = v.createHref(D.unstable_mask || D);
    (d.replaceState(w, '', L), i && c && c({ action: f, location: v.location, delta: 0 }));
  }
  function p(E) {
    return _0(E);
  }
  let v = {
    get action() {
      return f;
    },
    get location() {
      return s(h, d);
    },
    listen(E) {
      if (c) throw new Error('A history only accepts one active listener');
      return (
        h.addEventListener(Pm, y),
        (c = E),
        () => {
          (h.removeEventListener(Pm, y), (c = null));
        }
      );
    },
    createHref(E) {
      return b(h, E);
    },
    createURL: p,
    encodeLocation(E) {
      let R = p(E);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: g,
    replace: r,
    go(E) {
      return d.go(E);
    },
  };
  return v;
}
function _0(s, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Je(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof s == 'string' ? s : Di(s);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function ph(s, b, T = '/') {
  return O0(s, b, T, !1);
}
function O0(s, b, T, x) {
  let h = typeof b == 'string' ? Oa(b) : b,
    i = Kn(h.pathname || '/', T);
  if (i == null) return null;
  let d = Sh(s);
  D0(d);
  let f = null;
  for (let c = 0; f == null && c < d.length; ++c) {
    let m = V0(i);
    f = G0(d[c], m, x);
  }
  return f;
}
function Sh(s, b = [], T = [], x = '', h = !1) {
  let i = (d, f, c = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && c) return;
      (Je(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let y = sn([x, o.relativePath]),
      g = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (Je(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Sh(d.children, b, g, y, c)),
      !(d.path == null && !d.index) && b.push({ path: y, score: L0(y, d.index), routesMeta: g }));
  };
  return (
    s.forEach((d, f) => {
      var c;
      if (d.path === '' || !((c = d.path) != null && c.includes('?'))) i(d, f);
      else for (let m of xh(d.path)) i(d, f, !0, m);
    }),
    b
  );
}
function xh(s) {
  let b = s.split('/');
  if (b.length === 0) return [];
  let [T, ...x] = b,
    h = T.endsWith('?'),
    i = T.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = xh(x.join('/')),
    f = [];
  return (
    f.push(...d.map((c) => (c === '' ? i : [i, c].join('/')))),
    h && f.push(...d),
    f.map((c) => (s.startsWith('/') && c === '' ? '/' : c))
  );
}
function D0(s) {
  s.sort((b, T) =>
    b.score !== T.score
      ? T.score - b.score
      : j0(
          b.routesMeta.map((x) => x.childrenIndex),
          T.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var z0 = /^:[\w-]+$/,
  w0 = 3,
  N0 = 2,
  B0 = 1,
  U0 = 10,
  H0 = -2,
  th = (s) => s === '*';
function L0(s, b) {
  let T = s.split('/'),
    x = T.length;
  return (
    T.some(th) && (x += H0),
    b && (x += N0),
    T.filter((h) => !th(h)).reduce((h, i) => h + (z0.test(i) ? w0 : i === '' ? B0 : U0), x)
  );
}
function j0(s, b) {
  return s.length === b.length && s.slice(0, -1).every((x, h) => x === b[h])
    ? s[s.length - 1] - b[b.length - 1]
    : 0;
}
function G0(s, b, T = !1) {
  let { routesMeta: x } = s,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let c = x[f],
      m = f === x.length - 1,
      o = i === '/' ? b : b.slice(i.length) || '/',
      y = Wu({ path: c.relativePath, caseSensitive: c.caseSensitive, end: m }, o),
      g = c.route;
    if (
      (!y &&
        m &&
        T &&
        !x[x.length - 1].route.index &&
        (y = Wu({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, o)),
      !y)
    )
      return null;
    (Object.assign(h, y.params),
      d.push({
        params: h,
        pathname: sn([i, y.pathname]),
        pathnameBase: Z0(sn([i, y.pathnameBase])),
        route: g,
      }),
      y.pathnameBase !== '/' && (i = sn([i, y.pathnameBase])));
  }
  return d;
}
function Wu(s, b) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [T, x] = Y0(s.path, s.caseSensitive, s.end),
    h = b.match(T);
  if (!h) return null;
  let i = h[0],
    d = i.replace(/(.)\/+$/, '$1'),
    f = h.slice(1);
  return {
    params: x.reduce((m, { paramName: o, isOptional: y }, g) => {
      if (o === '*') {
        let p = f[g] || '';
        d = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      const r = f[g];
      return (y && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: d,
    pattern: s,
  };
}
function Y0(s, b = !1, T = !0) {
  En(
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
            let y = o.charAt(m + d.length);
            return y && y !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
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
function V0(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      En(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      s
    );
  }
}
function Kn(s, b) {
  if (b === '/') return s;
  if (!s.toLowerCase().startsWith(b.toLowerCase())) return null;
  let T = b.endsWith('/') ? b.length - 1 : b.length,
    x = s.charAt(T);
  return x && x !== '/' ? null : s.slice(T) || '/';
}
var q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function X0(s, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof s == 'string' ? Oa(s) : s,
    i;
  return (
    T ? ((T = bh(T)), T.startsWith('/') ? (i = nh(T.substring(1), '/')) : (i = nh(T, b))) : (i = b),
    { pathname: i, search: K0(x), hash: J0(h) }
  );
}
function nh(s, b) {
  let T = Pu(b).split('/');
  return (
    s.split('/').forEach((h) => {
      h === '..' ? T.length > 1 && T.pop() : h !== '.' && T.push(h);
    }),
    T.length > 1 ? T.join('/') : '/'
  );
}
function Mc(s, b, T, x) {
  return `Cannot include a '${s}' character in a manually specified \`to.${b}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Q0(s) {
  return s.filter((b, T) => T === 0 || (b.route.path && b.route.path.length > 0));
}
function Eh(s) {
  let b = Q0(s);
  return b.map((T, x) => (x === b.length - 1 ? T.pathname : T.pathnameBase));
}
function Gc(s, b, T, x = !1) {
  let h;
  typeof s == 'string'
    ? (h = Oa(s))
    : ((h = { ...s }),
      Je(!h.pathname || !h.pathname.includes('?'), Mc('?', 'pathname', 'search', h)),
      Je(!h.pathname || !h.pathname.includes('#'), Mc('#', 'pathname', 'hash', h)),
      Je(!h.search || !h.search.includes('#'), Mc('#', 'search', 'hash', h)));
  let i = s === '' || h.pathname === '',
    d = i ? '/' : h.pathname,
    f;
  if (d == null) f = T;
  else {
    let y = b.length - 1;
    if (!x && d.startsWith('..')) {
      let g = d.split('/');
      for (; g[0] === '..'; ) (g.shift(), (y -= 1));
      h.pathname = g.join('/');
    }
    f = y >= 0 ? b[y] : '/';
  }
  let c = X0(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && T.endsWith('/');
  return (!c.pathname.endsWith('/') && (m || o) && (c.pathname += '/'), c);
}
var bh = (s) => s.replace(/\/\/+/g, '/'),
  sn = (s) => bh(s.join('/')),
  Pu = (s) => s.replace(/\/+$/, ''),
  Z0 = (s) => Pu(s).replace(/^\/*/, '/'),
  K0 = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  J0 = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  k0 = class {
    constructor(s, b, T, x = !1) {
      ((this.status = s),
        (this.statusText = b || ''),
        (this.internal = x),
        T instanceof Error ? ((this.data = T.toString()), (this.error = T)) : (this.data = T));
    }
  };
function F0(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function $0(s) {
  let b = s.map((T) => T.route.path).filter(Boolean);
  return sn(b) || '/';
}
var Th =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Mh(s, b) {
  let T = s;
  if (typeof T != 'string' || !q0.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (Th)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = Kn(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      En(
        !1,
        `<Link to="${T}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: T };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Ch = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Ch);
var W0 = ['GET', ...Ch];
new Set(W0);
var Da = N.createContext(null);
Da.displayName = 'DataRouter';
var er = N.createContext(null);
er.displayName = 'DataRouterState';
var Rh = N.createContext(!1);
function P0() {
  return N.useContext(Rh);
}
var Ah = N.createContext({ isTransitioning: !1 });
Ah.displayName = 'ViewTransition';
var I0 = N.createContext(new Map());
I0.displayName = 'Fetchers';
var ey = N.createContext(null);
ey.displayName = 'Await';
var tn = N.createContext(null);
tn.displayName = 'Navigation';
var zi = N.createContext(null);
zi.displayName = 'Location';
var Jn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Jn.displayName = 'Route';
var Yc = N.createContext(null);
Yc.displayName = 'RouteError';
var _h = 'REACT_ROUTER_ERROR',
  ty = 'REDIRECT',
  ny = 'ROUTE_ERROR_RESPONSE';
function ly(s) {
  if (s.startsWith(`${_h}:${ty}:{`))
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
function ay(s) {
  if (s.startsWith(`${_h}:${ny}:{`))
    try {
      let b = JSON.parse(s.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new k0(b.status, b.statusText, b.data);
    } catch {}
}
function iy(s, { relative: b } = {}) {
  Je(wi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = N.useContext(tn),
    { hash: h, pathname: i, search: d } = Ni(s, { relative: b }),
    f = i;
  return (
    T !== '/' && (f = i === '/' ? T : sn([T, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function wi() {
  return N.useContext(zi) != null;
}
function kn() {
  return (
    Je(wi(), 'useLocation() may be used only in the context of a <Router> component.'),
    N.useContext(zi).location
  );
}
var Oh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Dh(s) {
  N.useContext(tn).static || N.useLayoutEffect(s);
}
function uy() {
  let { isDataRoute: s } = N.useContext(Jn);
  return s ? Sy() : ry();
}
function ry() {
  Je(wi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = N.useContext(Da),
    { basename: b, navigator: T } = N.useContext(tn),
    { matches: x } = N.useContext(Jn),
    { pathname: h } = kn(),
    i = JSON.stringify(Eh(x)),
    d = N.useRef(!1);
  return (
    Dh(() => {
      d.current = !0;
    }),
    N.useCallback(
      (c, m = {}) => {
        if ((En(d.current, Oh), !d.current)) return;
        if (typeof c == 'number') {
          T.go(c);
          return;
        }
        let o = Gc(c, JSON.parse(i), h, m.relative === 'path');
        (s == null && b !== '/' && (o.pathname = o.pathname === '/' ? b : sn([b, o.pathname])),
          (m.replace ? T.replace : T.push)(o, m.state, m));
      },
      [b, T, i, h, s]
    )
  );
}
N.createContext(null);
function Ni(s, { relative: b } = {}) {
  let { matches: T } = N.useContext(Jn),
    { pathname: x } = kn(),
    h = JSON.stringify(Eh(T));
  return N.useMemo(() => Gc(s, JSON.parse(h), x, b === 'path'), [s, h, x, b]);
}
function sy(s, b) {
  return zh(s, b);
}
function zh(s, b, T) {
  var E;
  Je(wi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = N.useContext(tn),
    { matches: h } = N.useContext(Jn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    c = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let R = (m && m.path) || '';
    Nh(
      f,
      !m || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let o = kn(),
    y;
  if (b) {
    let R = typeof b == 'string' ? Oa(b) : b;
    (Je(
      c === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (y = R));
  } else y = o;
  let g = y.pathname || '/',
    r = g;
  if (c !== '/') {
    let R = c.replace(/^\//, '').split('/');
    r = '/' + g.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let p = ph(s, { pathname: r });
  (En(m || p != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `),
    En(
      p == null ||
        p[p.length - 1].route.element !== void 0 ||
        p[p.length - 1].route.Component !== void 0 ||
        p[p.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = my(
    p &&
      p.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, d, R.params),
          pathname: sn([
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
              : sn([
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
  return b && v
    ? N.createElement(
        zi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...y,
            },
            navigationType: 'POP',
          },
        },
        v
      )
    : v;
}
function cy() {
  let s = py(),
    b = F0(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
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
var oy = N.createElement(cy, null),
  wh = class extends N.Component {
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
        const T = ay(s.digest);
        T && (s = T);
      }
      let b =
        s !== void 0
          ? N.createElement(
              Jn.Provider,
              { value: this.props.routeContext },
              N.createElement(Yc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? N.createElement(fy, { error: s }, b) : b;
    }
  };
wh.contextType = Rh;
var Cc = new WeakMap();
function fy({ children: s, error: b }) {
  let { basename: T } = N.useContext(tn);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = ly(b.digest);
    if (x) {
      let h = Cc.get(b);
      if (h) throw h;
      let i = Mh(x.location, T);
      if (Th && !Cc.get(b))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (Cc.set(b, d), d);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return s;
}
function dy({ routeContext: s, match: b, children: T }) {
  let x = N.useContext(Da);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    N.createElement(Jn.Provider, { value: s }, T)
  );
}
function my(s, b = [], T) {
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
    let o = h.findIndex((y) => y.route.id && (i == null ? void 0 : i[y.route.id]) !== void 0);
    (Je(
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
      let y = h[o];
      if (((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (f = o), y.route.id)) {
        let { loaderData: g, errors: r } = x,
          p = y.route.loader && !g.hasOwnProperty(y.route.id) && (!r || r[y.route.id] === void 0);
        if (y.route.lazy || p) {
          (T.isStatic && (d = !0), f >= 0 ? (h = h.slice(0, f + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  }
  let c = T == null ? void 0 : T.onError,
    m =
      x && c
        ? (o, y) => {
            var g, r;
            c(o, {
              location: x.location,
              params:
                ((r = (g = x.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: $0(x.matches),
              errorInfo: y,
            });
          }
        : void 0;
  return h.reduceRight((o, y, g) => {
    let r,
      p = !1,
      v = null,
      E = null;
    x &&
      ((r = i && y.route.id ? i[y.route.id] : void 0),
      (v = y.route.errorElement || oy),
      d &&
        (f < 0 && g === 0
          ? (Nh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (p = !0),
            (E = null))
          : f === g && ((p = !0), (E = y.route.hydrateFallbackElement || null))));
    let R = b.concat(h.slice(0, g + 1)),
      D = () => {
        let w;
        return (
          r
            ? (w = v)
            : p
              ? (w = E)
              : y.route.Component
                ? (w = N.createElement(y.route.Component, null))
                : y.route.element
                  ? (w = y.route.element)
                  : (w = o),
          N.createElement(dy, {
            match: y,
            routeContext: { outlet: o, matches: R, isDataRoute: x != null },
            children: w,
          })
        );
      };
    return x && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? N.createElement(wh, {
          location: x.location,
          revalidation: x.revalidation,
          component: v,
          error: r,
          children: D(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: m,
        })
      : D();
  }, null);
}
function Vc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hy(s) {
  let b = N.useContext(Da);
  return (Je(b, Vc(s)), b);
}
function vy(s) {
  let b = N.useContext(er);
  return (Je(b, Vc(s)), b);
}
function gy(s) {
  let b = N.useContext(Jn);
  return (Je(b, Vc(s)), b);
}
function qc(s) {
  let b = gy(s),
    T = b.matches[b.matches.length - 1];
  return (Je(T.route.id, `${s} can only be used on routes that contain a unique "id"`), T.route.id);
}
function yy() {
  return qc('useRouteId');
}
function py() {
  var x;
  let s = N.useContext(Yc),
    b = vy('useRouteError'),
    T = qc('useRouteError');
  return s !== void 0 ? s : (x = b.errors) == null ? void 0 : x[T];
}
function Sy() {
  let { router: s } = hy('useNavigate'),
    b = qc('useNavigate'),
    T = N.useRef(!1);
  return (
    Dh(() => {
      T.current = !0;
    }),
    N.useCallback(
      async (h, i = {}) => {
        (En(T.current, Oh),
          T.current &&
            (typeof h == 'number'
              ? await s.navigate(h)
              : await s.navigate(h, { fromRouteId: b, ...i })));
      },
      [s, b]
    )
  );
}
var lh = {};
function Nh(s, b, T) {
  !b && !lh[s] && ((lh[s] = !0), En(!1, T));
}
N.memo(xy);
function xy({ routes: s, future: b, state: T, isStatic: x, onError: h }) {
  return zh(s, void 0, { state: T, isStatic: x, onError: h });
}
function Bc(s) {
  Je(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Ey({
  basename: s = '/',
  children: b = null,
  location: T,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: d,
}) {
  Je(
    !wi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = s.replace(/^\/*/, '/'),
    c = N.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = Oa(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: y = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: p,
    } = T,
    v = N.useMemo(() => {
      let E = Kn(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: y, state: g, key: r, unstable_mask: p },
            navigationType: x,
          };
    }, [f, m, o, y, g, r, x, p]);
  return (
    En(
      v != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : N.createElement(
          tn.Provider,
          { value: c },
          N.createElement(zi.Provider, { children: b, value: v })
        )
  );
}
function by({ children: s, location: b }) {
  return sy(Uc(s), b);
}
function Uc(s, b = []) {
  let T = [];
  return (
    N.Children.forEach(s, (x, h) => {
      if (!N.isValidElement(x)) return;
      let i = [...b, h];
      if (x.type === N.Fragment) {
        T.push.apply(T, Uc(x.props.children, i));
        return;
      }
      (Je(
        x.type === Bc,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Je(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
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
      (x.props.children && (d.children = Uc(x.props.children, i)), T.push(d));
    }),
    T
  );
}
var ku = 'get',
  Fu = 'application/x-www-form-urlencoded';
function tr(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function Ty(s) {
  return tr(s) && s.tagName.toLowerCase() === 'button';
}
function My(s) {
  return tr(s) && s.tagName.toLowerCase() === 'form';
}
function Cy(s) {
  return tr(s) && s.tagName.toLowerCase() === 'input';
}
function Ry(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function Ay(s, b) {
  return s.button === 0 && (!b || b === '_self') && !Ry(s);
}
var Ku = null;
function _y() {
  if (Ku === null)
    try {
      (new FormData(document.createElement('form'), 0), (Ku = !1));
    } catch {
      Ku = !0;
    }
  return Ku;
}
var Oy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Rc(s) {
  return s != null && !Oy.has(s)
    ? (En(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fu}"`
      ),
      null)
    : s;
}
function Dy(s, b) {
  let T, x, h, i, d;
  if (My(s)) {
    let f = s.getAttribute('action');
    ((x = f ? Kn(f, b) : null),
      (T = s.getAttribute('method') || ku),
      (h = Rc(s.getAttribute('enctype')) || Fu),
      (i = new FormData(s)));
  } else if (Ty(s) || (Cy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let f = s.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = s.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = c ? Kn(c, b) : null),
      (T = s.getAttribute('formmethod') || f.getAttribute('method') || ku),
      (h = Rc(s.getAttribute('formenctype')) || Rc(f.getAttribute('enctype')) || Fu),
      (i = new FormData(f, s)),
      !_y())
    ) {
      let { name: m, type: o, value: y } = s;
      if (o === 'image') {
        let g = m ? `${m}.` : '';
        (i.append(`${g}x`, '0'), i.append(`${g}y`, '0'));
      } else m && i.append(m, y);
    }
  } else {
    if (tr(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((T = ku), (x = null), (h = Fu), (d = s));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: T.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Xc(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function Bh(s, b, T, x) {
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
        : b && Kn(h.pathname, b) === '/'
          ? (h.pathname = `${Pu(b)}/_root.${x}`)
          : (h.pathname = `${Pu(h.pathname)}.${x}`),
    h
  );
}
async function zy(s, b) {
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
function wy(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Ny(s, b, T) {
  let x = await Promise.all(
    s.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let d = await zy(i, T);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Ly(
    x
      .flat(1)
      .filter(wy)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function ah(s, b, T, x, h, i) {
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
          var y;
          let o = x.routes[c.route.id];
          if (!o || !o.hasLoader) return !1;
          if (d(c, m) || f(c, m)) return !0;
          if (c.route.shouldRevalidate) {
            let g = c.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((y = T[0]) == null ? void 0 : y.params) || {},
              nextUrl: new URL(s, window.origin),
              nextParams: c.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == 'boolean') return g;
          }
          return !0;
        })
      : [];
}
function By(s, b, { includeHydrateFallback: T } = {}) {
  return Uy(
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
function Uy(s) {
  return [...new Set(s)];
}
function Hy(s) {
  let b = {},
    T = Object.keys(s).sort();
  for (let x of T) b[x] = s[x];
  return b;
}
function Ly(s, b) {
  let T = new Set();
  return (
    new Set(b),
    s.reduce((x, h) => {
      let i = JSON.stringify(Hy(h));
      return (T.has(i) || (T.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Qc() {
  let s = N.useContext(Da);
  return (Xc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function jy() {
  let s = N.useContext(er);
  return (
    Xc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var Zc = N.createContext(void 0);
Zc.displayName = 'FrameworkContext';
function Kc() {
  let s = N.useContext(Zc);
  return (Xc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function Gy(s, b) {
  let T = N.useContext(Zc),
    [x, h] = N.useState(!1),
    [i, d] = N.useState(!1),
    { onFocus: f, onBlur: c, onMouseEnter: m, onMouseLeave: o, onTouchStart: y } = b,
    g = N.useRef(null);
  (N.useEffect(() => {
    if ((s === 'render' && d(!0), s === 'viewport')) {
      let v = (R) => {
          R.forEach((D) => {
            d(D.isIntersecting);
          });
        },
        E = new IntersectionObserver(v, { threshold: 0.5 });
      return (
        g.current && E.observe(g.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [s]),
    N.useEffect(() => {
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
  return T
    ? s !== 'intent'
      ? [i, g, {}]
      : [
          i,
          g,
          {
            onFocus: Ci(f, r),
            onBlur: Ci(c, p),
            onMouseEnter: Ci(m, r),
            onMouseLeave: Ci(o, p),
            onTouchStart: Ci(y, r),
          },
        ]
    : [!1, g, {}];
}
function Ci(s, b) {
  return (T) => {
    (s && s(T), T.defaultPrevented || b(T));
  };
}
function Yy({ page: s, ...b }) {
  let T = P0(),
    { router: x } = Qc(),
    h = N.useMemo(() => ph(x.routes, s, x.basename), [x.routes, s, x.basename]);
  return h
    ? T
      ? N.createElement(qy, { page: s, matches: h, ...b })
      : N.createElement(Xy, { page: s, matches: h, ...b })
    : null;
}
function Vy(s) {
  let { manifest: b, routeModules: T } = Kc(),
    [x, h] = N.useState([]);
  return (
    N.useEffect(() => {
      let i = !1;
      return (
        Ny(s, b, T).then((d) => {
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
function qy({ page: s, matches: b, ...T }) {
  let x = kn(),
    { future: h } = Kc(),
    { basename: i } = Qc(),
    d = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let f = Bh(s, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
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
function Xy({ page: s, matches: b, ...T }) {
  let x = kn(),
    { future: h, manifest: i, routeModules: d } = Kc(),
    { basename: f } = Qc(),
    { loaderData: c, matches: m } = jy(),
    o = N.useMemo(() => ah(s, b, m, i, x, 'data'), [s, b, m, i, x]),
    y = N.useMemo(() => ah(s, b, m, i, x, 'assets'), [s, b, m, i, x]),
    g = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (b.forEach((D) => {
          var L;
          let w = i.routes[D.route.id];
          !w ||
            !w.hasLoader ||
            ((!o.some((M) => M.route.id === D.route.id) &&
              D.route.id in c &&
              (L = d[D.route.id]) != null &&
              L.shouldRevalidate) ||
            w.hasClientLoader
              ? (E = !0)
              : v.add(D.route.id));
        }),
        v.size === 0)
      )
        return [];
      let R = Bh(s, f, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        E &&
          v.size > 0 &&
          R.searchParams.set(
            '_routes',
            b
              .filter((D) => v.has(D.route.id))
              .map((D) => D.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [f, h.unstable_trailingSlashAwareDataRequests, c, x, i, o, b, s, d]),
    r = N.useMemo(() => By(y, i), [y, i]),
    p = Vy(y);
  return N.createElement(
    N.Fragment,
    null,
    g.map((v) => N.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...T })),
    r.map((v) => N.createElement('link', { key: v, rel: 'modulepreload', href: v, ...T })),
    p.map(({ key: v, link: E }) =>
      N.createElement('link', {
        key: v,
        nonce: T.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? T.crossOrigin,
      })
    )
  );
}
function Qy(...s) {
  return (b) => {
    s.forEach((T) => {
      typeof T == 'function' ? T(b) : T != null && (T.current = b);
    });
  };
}
var Zy =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Zy && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Ky({ basename: s, children: b, unstable_useTransitions: T, window: x }) {
  let h = N.useRef();
  h.current == null && (h.current = C0({ window: x, v5Compat: !0 }));
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
    N.createElement(Ey, {
      basename: s,
      children: b,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: T,
    })
  );
}
var Uh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hh = N.forwardRef(function (
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
      preventScrollReset: y,
      viewTransition: g,
      unstable_defaultShouldRevalidate: r,
      ...p
    },
    v
  ) {
    let { basename: E, navigator: R, unstable_useTransitions: D } = N.useContext(tn),
      w = typeof o == 'string' && Uh.test(o),
      L = Mh(o, E);
    o = L.to;
    let M = iy(o, { relative: h }),
      _ = kn(),
      O = null;
    if (f) {
      let ee = Gc(f, [], _.unstable_mask ? _.unstable_mask.pathname : '/', !0);
      (E !== '/' && (ee.pathname = ee.pathname === '/' ? E : sn([E, ee.pathname])),
        (O = R.createHref(ee)));
    }
    let [A, B, z] = Gy(x, p),
      H = $y(o, {
        replace: d,
        unstable_mask: f,
        state: c,
        target: m,
        preventScrollReset: y,
        relative: h,
        viewTransition: g,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: D,
      });
    function G(ee) {
      (b && b(ee), ee.defaultPrevented || H(ee));
    }
    let J = !(L.isExternal || i),
      te = N.createElement('a', {
        ...p,
        ...z,
        href: (J ? O : void 0) || L.absoluteURL || M,
        onClick: J ? G : b,
        ref: Qy(v, B),
        target: m,
        'data-discover': !w && T === 'render' ? 'true' : void 0,
      });
    return A && !w ? N.createElement(N.Fragment, null, te, N.createElement(Yy, { page: M })) : te;
  });
Hh.displayName = 'Link';
var Jy = N.forwardRef(function (
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
  let y = Ni(d, { relative: m.relative }),
    g = kn(),
    r = N.useContext(er),
    { navigator: p, basename: v } = N.useContext(tn),
    E = r != null && tp(y) && f === !0,
    R = p.encodeLocation ? p.encodeLocation(y).pathname : y.pathname,
    D = g.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((D = D.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && v && (w = Kn(w, v) || w));
  const L = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = D === R || (!h && D.startsWith(R) && D.charAt(L) === '/'),
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
    Hh,
    { ...m, 'aria-current': A, className: B, ref: o, style: z, to: d, viewTransition: f },
    typeof c == 'function' ? c(O) : c
  );
});
Jy.displayName = 'NavLink';
var ky = N.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: b,
      navigate: T,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = ku,
      action: f,
      onSubmit: c,
      relative: m,
      preventScrollReset: o,
      viewTransition: y,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    p
  ) => {
    let { unstable_useTransitions: v } = N.useContext(tn),
      E = Iy(),
      R = ep(f, { relative: m }),
      D = d.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof f == 'string' && Uh.test(f),
      L = (M) => {
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
              viewTransition: y,
              unstable_defaultShouldRevalidate: g,
            });
        v && T !== !1 ? N.startTransition(() => A()) : A();
      };
    return N.createElement('form', {
      ref: p,
      method: D,
      action: R,
      onSubmit: x ? c : L,
      ...r,
      'data-discover': !w && s === 'render' ? 'true' : void 0,
    });
  }
);
ky.displayName = 'Form';
function Fy(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lh(s) {
  let b = N.useContext(Da);
  return (Je(b, Fy(s)), b);
}
function $y(
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
  let o = uy(),
    y = kn(),
    g = Ni(s, { relative: d });
  return N.useCallback(
    (r) => {
      if (Ay(r, b)) {
        r.preventDefault();
        let p = T !== void 0 ? T : Di(y) === Di(g),
          v = () =>
            o(s, {
              replace: p,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: d,
              viewTransition: f,
              unstable_defaultShouldRevalidate: c,
            });
        m ? N.startTransition(() => v()) : v();
      }
    },
    [y, o, g, T, x, h, b, s, i, d, f, c, m]
  );
}
var Wy = 0,
  Py = () => `__${String(++Wy)}__`;
function Iy() {
  let { router: s } = Lh('useSubmit'),
    { basename: b } = N.useContext(tn),
    T = yy(),
    x = s.fetch,
    h = s.navigate;
  return N.useCallback(
    async (i, d = {}) => {
      let { action: f, method: c, encType: m, formData: o, body: y } = Dy(i, b);
      if (d.navigate === !1) {
        let g = d.fetcherKey || Py();
        await x(g, T, d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: y,
          formMethod: d.method || c,
          formEncType: d.encType || m,
          flushSync: d.flushSync,
        });
      } else
        await h(d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: y,
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
function ep(s, { relative: b } = {}) {
  let { basename: T } = N.useContext(tn),
    x = N.useContext(Jn);
  Je(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...Ni(s || '.', { relative: b }) },
    d = kn();
  if (s == null) {
    i.search = d.search;
    let f = new URLSearchParams(i.search),
      c = f.getAll('index');
    if (c.some((o) => o === '')) {
      (f.delete('index'), c.filter((y) => y).forEach((y) => f.append('index', y)));
      let o = f.toString();
      i.search = o ? `?${o}` : '';
    }
  }
  return (
    (!s || s === '.') &&
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    T !== '/' && (i.pathname = i.pathname === '/' ? T : sn([T, i.pathname])),
    Di(i)
  );
}
function tp(s, { relative: b } = {}) {
  let T = N.useContext(Ah);
  Je(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Lh('useViewTransitionState'),
    h = Ni(s, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = Kn(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = Kn(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return Wu(h.pathname, d) != null || Wu(h.pathname, i) != null;
}
const np = 'modulepreload',
  lp = function (s) {
    return '/ochimono-game/' + s;
  },
  ih = {},
  ap = function (b, T, x) {
    let h = Promise.resolve();
    if (T && T.length > 0) {
      let d = function (m) {
        return Promise.all(
          m.map((o) =>
            Promise.resolve(o).then(
              (y) => ({ status: 'fulfilled', value: y }),
              (y) => ({ status: 'rejected', reason: y })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const f = document.querySelector('meta[property=csp-nonce]'),
        c = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute('nonce'));
      h = d(
        T.map((m) => {
          if (((m = lp(m)), m in ih)) return;
          ih[m] = !0;
          const o = m.endsWith('.css'),
            y = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${y}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = o ? 'stylesheet' : np),
            o || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = m),
            c && g.setAttribute('nonce', c),
            document.head.appendChild(g),
            o)
          )
            return new Promise((r, p) => {
              (g.addEventListener('load', r),
                g.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${m}`))));
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
function ip(s = {}) {
  const {
    immediate: b = !1,
    onNeedRefresh: T,
    onOfflineReady: x,
    onRegistered: h,
    onRegisteredSW: i,
    onRegisterError: d,
  } = s;
  let f, c, m;
  const o = async (g = !0) => {
    (await c, m == null || m());
  };
  async function y() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await ap(async () => {
          const { Workbox: g } = await import('./workbox-window.prod.es5-BIl4cyR9.js');
          return { Workbox: g };
        }, [])
          .then(
            ({ Workbox: g }) =>
              new g('/ochimono-game/sw.js', { scope: '/ochimono-game/', type: 'classic' })
          )
          .catch((g) => {
            d == null || d(g);
          })),
        !f)
      )
        return;
      m = () => {
        f == null || f.messageSkipWaiting();
      };
      {
        let g = !1;
        const r = () => {
          ((g = !0),
            f == null ||
              f.addEventListener('controlling', (p) => {
                p.isUpdate && window.location.reload();
              }),
            T == null || T());
        };
        (f.addEventListener('installed', (p) => {
          typeof p.isUpdate > 'u'
            ? typeof p.isExternal < 'u' && p.isExternal
              ? r()
              : !g && (x == null || x())
            : p.isUpdate || x == null || x();
        }),
          f.addEventListener('waiting', r));
      }
      f.register({ immediate: b })
        .then((g) => {
          i ? i('/ochimono-game/sw.js', g) : h == null || h(g);
        })
        .catch((g) => {
          d == null || d(g);
        });
    }
  }
  return ((c = y()), o);
}
function up(s = {}) {
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
    [y] = N.useState(() =>
      ip({
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
  return { needRefresh: [f, c], offlineReady: [m, o], updateServiceWorker: y };
}
const rp = '_banner_1qruq_1',
  sp = '_message_1qruq_21',
  cp = '_button_1qruq_25',
  Ac = { banner: rp, message: sp, button: cp },
  op = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: b,
    } = up();
    return s
      ? $.jsxs('div', {
          className: Ac.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            $.jsx('span', { className: Ac.message, children: '新しいバージョンがあります' }),
            $.jsx('button', {
              type: 'button',
              className: Ac.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  fp = '_index_r8hfh_1',
  dp = { index: fp },
  mp = '_layout_u1qv8_1',
  hp = '_top_bar_placeholder_u1qv8_10',
  vp = '_main_u1qv8_15',
  gp = '_field_wrapper_u1qv8_23',
  yp = '_skill_button_wrapper_u1qv8_28',
  Yl = {
    layout: mp,
    top_bar_placeholder: hp,
    main: vp,
    field_wrapper: gp,
    skill_button_wrapper: yp,
  },
  pp = '_surface_6wr97_1',
  Sp = '_canvas_layer_6wr97_11',
  xp = '_game_over_line_6wr97_22',
  _c = { surface: pp, canvas_layer: Sp, game_over_line: xp },
  Ep = '_layer_z1h0v_1',
  bp = '_effect_z1h0v_7',
  Tp = '_ring_z1h0v_12',
  Mp = '_score_z1h0v_24',
  Cp = '_special_z1h0v_36',
  Ri = { layer: Ep, effect: bp, ring: Tp, score: Mp, special: Cp },
  jh = N.memo(
    N.forwardRef((s, b) => {
      const T = N.useRef(null),
        x = N.useCallback((i) => {
          const d = T.current;
          if (!d) return;
          const f = document.createElement('div');
          ((f.className = `${Ri.effect} ${i.isSpecial ? Ri.special : ''}`),
            (f.style.left = `${i.x}px`),
            (f.style.top = `${i.y}px`),
            f.setAttribute('aria-hidden', 'true'));
          const c = document.createElement('span');
          ((c.className = Ri.ring), f.appendChild(c));
          const m = () => {
            (c.removeEventListener('animationend', m), f.parentNode === d && d.removeChild(f));
          };
          if ((c.addEventListener('animationend', m), i.score > 0)) {
            const o = document.createElement('span');
            ((o.className = Ri.score), (o.textContent = `+${i.score}`), f.appendChild(o));
          }
          d.appendChild(f);
        }, []),
        h = N.useCallback(() => {
          const i = T.current;
          if (i) for (; i.firstChild; ) i.removeChild(i.firstChild);
        }, []);
      return (
        N.useImperativeHandle(b, () => ({ add: x, clear: h }), [x, h]),
        $.jsx('div', { ref: T, className: Ri.layer, 'aria-hidden': 'true' })
      );
    })
  );
jh.displayName = 'MergeEffect';
const Rp = '_line_yymkz_1',
  Ap = '_preview_wrap_yymkz_11',
  _p = '_preview_yymkz_11',
  Oc = { line: Rp, preview_wrap: Ap, preview: _p },
  Op = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Gh = N.memo(
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
      return $.jsxs($.Fragment, {
        children: [
          $.jsx('div', {
            ref: h,
            className: Oc.line,
            style: { height: `${b}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          $.jsx('div', {
            ref: i,
            className: Oc.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${s - T.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: $.jsx('img', {
              src: Op(T.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Oc.preview,
            }),
          }),
        ],
      });
    })
  );
Gh.displayName = 'DropIndicator';
const Dp = (s) => Math.max(0, Math.min(1, s)),
  zp = ({
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
      y = N.useRef(null),
      g = N.useRef(0.5),
      r = N.useRef(null),
      p = N.useRef(h);
    p.current = h;
    const v = N.useRef(b);
    v.current = b;
    const E = N.useCallback((A) => {
        const B = p.current,
          z = v.current;
        return B ? Math.max(B.radius, Math.min(z - B.radius, A * z)) : A * z;
      }, []),
      R = N.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = y.current) == null || A.setX(E(g.current)));
          }));
      }, [E]),
      D = N.useCallback(
        (A) => {
          const B = o.current;
          if (!B) return;
          const z = B.getBoundingClientRect(),
            H = Dp((A - z.left) / z.width);
          ((g.current = H), R());
        },
        [R]
      );
    (N.useEffect(() => {
      ((g.current = 0.5), R());
    }, [h == null ? void 0 : h.level, R]),
      N.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const w = i && !c,
      L = (A) => {
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
          const H = z.getBoundingClientRect();
          m(A.clientX - H.left, A.clientY - H.top);
          return;
        }
        w &&
          (D(A.clientX),
          d(g.current),
          (B = o.current) == null || B.releasePointerCapture(A.pointerId));
      },
      O = E(0.5);
    return $.jsxs('div', {
      ref: o,
      className: _c.surface,
      style: { width: `${b}px`, height: `${T}px` },
      onPointerDown: L,
      onPointerMove: M,
      onPointerUp: _,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        $.jsx('div', { ref: s, className: _c.canvas_layer }),
        $.jsx('div', {
          className: _c.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        w ? $.jsx(Gh, { ref: y, initialX: O, fieldHeight: T, item: h }) : null,
        $.jsx(jh, { ref: f }),
      ],
    });
  },
  wp = '_overlay_efysu_1',
  Np = '_number_efysu_11',
  uh = { overlay: wp, number: Np },
  Yh = N.memo(({ seconds: s }) =>
    s === null
      ? null
      : $.jsx('div', {
          className: uh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: $.jsx('span', { className: uh.number, children: s }, s),
        })
  );
Yh.displayName = 'CountdownOverlay';
const Bp = '_overlay_o79hb_1',
  Up = '_panel_o79hb_13',
  Hp = '_new_record_o79hb_24',
  Lp = '_title_o79hb_32',
  jp = '_scores_o79hb_40',
  Gp = '_row_o79hb_46',
  Yp = '_gold_o79hb_64',
  Vp = '_restart_o79hb_69',
  Qn = {
    overlay: Bp,
    panel: Up,
    new_record: Hp,
    title: Lp,
    scores: jp,
    row: Gp,
    gold: Yp,
    restart: Vp,
  },
  qp = ({ score: s, bestScore: b, isNewRecord: T, onRestart: x }) =>
    $.jsx('div', {
      className: Qn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: $.jsxs('div', {
        className: Qn.panel,
        children: [
          T ? $.jsx('p', { className: Qn.new_record, children: '🎉 新記録！' }) : null,
          $.jsx('h2', { className: Qn.title, children: 'GAME OVER' }),
          $.jsxs('dl', {
            className: Qn.scores,
            children: [
              $.jsxs('div', {
                className: Qn.row,
                children: [
                  $.jsx('dt', { children: 'スコア' }),
                  $.jsx('dd', { className: T ? Qn.gold : '', children: s }),
                ],
              }),
              $.jsxs('div', {
                className: Qn.row,
                children: [$.jsx('dt', { children: 'ベスト' }), $.jsx('dd', { children: b })],
              }),
            ],
          }),
          $.jsx('button', {
            type: 'button',
            className: Qn.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Xp = '_root_1svqx_1',
  Qp = '_message_1svqx_13',
  Zp = '_icon_1svqx_30',
  Kp = '_text_1svqx_34',
  Jp = '_cancel_1svqx_38',
  Ai = { root: Xp, message: Qp, icon: Zp, text: Kp, cancel: Jp },
  Vh = N.memo(({ active: s, onCancel: b }) =>
    s
      ? $.jsxs('div', {
          className: Ai.root,
          children: [
            $.jsxs('div', {
              className: Ai.message,
              children: [
                $.jsx('span', { className: Ai.icon, children: '🧲' }),
                $.jsx('span', { className: Ai.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            $.jsx('button', {
              type: 'button',
              className: Ai.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
Vh.displayName = 'MagnetSelectingOverlay';
const kp = '_gravity_flip_14l5j_1',
  Fp = '_arrow_14l5j_9',
  rh = { gravity_flip: kp, arrow: Fp },
  qh = N.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? $.jsx('div', {
          className: rh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, T) =>
            $.jsx(
              'span',
              {
                className: rh.arrow,
                style: { left: `${(T + 1) * 14}%`, animationDelay: `${T * 0.12}s` },
                children: '⬆',
              },
              T
            )
          ),
        })
      : null
  );
qh.displayName = 'SkillEffectOverlay';
const $p = '_overlay_1xsci_1',
  Wp = '_panel_1xsci_12',
  Pp = '_title_1xsci_22',
  Ip = '_lead_1xsci_30',
  e1 = '_start_1xsci_37',
  _i = { overlay: $p, panel: Wp, title: Pp, lead: Ip, start: e1 },
  t1 = ({ onStart: s }) =>
    $.jsx('div', {
      className: _i.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: $.jsxs('div', {
        className: _i.panel,
        children: [
          $.jsxs('h2', {
            className: _i.title,
            children: ['💖🍓🐱', $.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          $.jsxs('p', {
            className: _i.lead,
            children: [
              '同じアイテム同士をくっつけて',
              $.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          $.jsx('button', {
            type: 'button',
            className: _i.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  n1 = '_backdrop_1we7g_1',
  l1 = '_drawer_1we7g_11',
  a1 = '_header_1we7g_23',
  i1 = '_title_1we7g_30',
  u1 = '_close_1we7g_38',
  r1 = '_row_1we7g_54',
  s1 = '_row_label_1we7g_62',
  c1 = '_footer_1we7g_68',
  o1 = '_version_1we7g_74',
  rn = {
    backdrop: n1,
    drawer: l1,
    header: a1,
    title: i1,
    close: u1,
    row: r1,
    row_label: s1,
    footer: c1,
    version: o1,
  },
  f1 = '_toggle_1ap46_1',
  d1 = { toggle: f1 },
  Xh = N.memo(({ isOn: s, onToggle: b }) =>
    $.jsx('button', {
      type: 'button',
      className: d1.toggle,
      onClick: b,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: $.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
Xh.displayName = 'SoundToggle';
const m1 = '_toggle_15urq_1',
  h1 = { toggle: m1 },
  Jc = [{ id: 'gumi', label: 'グミ' }],
  kc = 'gumi',
  Qh = (s) => typeof s == 'string' && Jc.some((b) => b.id === s),
  Zh = N.memo(({ value: s, onChange: b }) => {
    const T = (x) => {
      const h = x.target.value;
      Qh(h) && b(h);
    };
    return $.jsx('select', {
      className: h1.toggle,
      value: s,
      onChange: T,
      'aria-label': 'アセットテーマ',
      children: Jc.map((x) => $.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
Zh.displayName = 'ThemeToggle';
const Kh = N.memo(
  ({ open: s, onClose: b, themeId: T, onChangeTheme: x, isSoundOn: h, onToggleSound: i }) =>
    s
      ? $.jsx('div', {
          className: rn.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: $.jsxs('aside', {
            className: rn.drawer,
            onClick: (d) => d.stopPropagation(),
            children: [
              $.jsxs('header', {
                className: rn.header,
                children: [
                  $.jsx('h2', { className: rn.title, children: '設定' }),
                  $.jsx('button', {
                    type: 'button',
                    className: rn.close,
                    onClick: b,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              $.jsxs('div', {
                className: rn.row,
                children: [
                  $.jsx('span', { className: rn.row_label, children: 'テーマ' }),
                  $.jsx(Zh, { value: T, onChange: x }),
                ],
              }),
              $.jsxs('div', {
                className: rn.row,
                children: [
                  $.jsx('span', { className: rn.row_label, children: 'サウンド' }),
                  $.jsx(Xh, { isOn: h, onToggle: i }),
                ],
              }),
              $.jsx('footer', {
                className: rn.footer,
                children: $.jsxs('span', { className: rn.version, children: ['v', '1.0.18'] }),
              }),
            ],
          }),
        })
      : null
);
Kh.displayName = 'SettingsDrawer';
const v1 = '_button_12i3t_1',
  g1 = '_gauge_12i3t_23',
  y1 = '_gauge_track_12i3t_32',
  p1 = '_gauge_fill_12i3t_39',
  S1 = '_gauge_fill_full_12i3t_47',
  x1 = '_icon_12i3t_52',
  E1 = '_ready_12i3t_60',
  b1 = '_fully_ready_12i3t_65',
  Sl = {
    button: v1,
    gauge: g1,
    gauge_track: y1,
    gauge_fill: p1,
    gauge_fill_full: S1,
    icon: x1,
    ready: E1,
    fully_ready: b1,
  },
  Iu = 32,
  sh = 40,
  ch = 110,
  T1 = 360,
  oh = (s) => {
    const b = ((s - 90) * Math.PI) / 180;
    return { x: sh + Iu * Math.cos(b), y: sh + Iu * Math.sin(b) };
  },
  M1 = (s, b) => {
    const T = oh(s),
      x = oh(b),
      h = b - s > 180 ? 1 : 0;
    return `M ${T.x} ${T.y} A ${Iu} ${Iu} 0 ${h} 1 ${x.x} ${x.y}`;
  },
  Dc = 1,
  Jh = N.memo(({ gauge: s, segmentMax: b, segmentCount: T, canOpen: x, onClick: h }) => {
    const i = Math.round((s / (b * T)) * 100),
      d = T1 / T,
      f = d - ch,
      c = Array.from({ length: T }, (y, g) => {
        const r = g * b;
        return Math.max(0, Math.min(b, s - r)) / b;
      }),
      o = c.filter((y) => y >= 1).length === T;
    return $.jsxs('button', {
      type: 'button',
      className: [Sl.button, x ? Sl.ready : '', o ? Sl.fully_ready : ''].filter(Boolean).join(' '),
      onClick: h,
      disabled: !x,
      'aria-label': x ? '必殺技を選択' : `必殺技ゲージ ${i}%`,
      children: [
        $.jsx('svg', {
          className: Sl.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: c.map((y, g) => {
            const r = g * d + f / 2,
              p = r + ch,
              v = M1(r, p),
              E = y >= 1;
            return $.jsxs(
              'g',
              {
                children: [
                  $.jsx('path', { className: Sl.gauge_track, d: v, pathLength: Dc }),
                  $.jsx('path', {
                    className: `${Sl.gauge_fill} ${E ? Sl.gauge_fill_full : ''}`,
                    d: v,
                    pathLength: Dc,
                    strokeDasharray: `${y} ${Dc - y}`,
                  }),
                ],
              },
              g
            );
          }),
        }),
        $.jsx('span', { className: Sl.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
Jh.displayName = 'SkillButton';
const C1 = '_backdrop_1xhs1_1',
  R1 = '_menu_1xhs1_12',
  A1 = '_title_1xhs1_21',
  _1 = '_choices_1xhs1_30',
  O1 = '_choice_1xhs1_30',
  D1 = '_choice_disabled_1xhs1_60',
  z1 = '_choice_icon_1xhs1_65',
  w1 = '_choice_label_1xhs1_72',
  N1 = '_choice_desc_1xhs1_79',
  B1 = '_choice_cost_1xhs1_85',
  U1 = '_cost_pip_1xhs1_93',
  H1 = '_cancel_1xhs1_101',
  en = {
    backdrop: C1,
    menu: R1,
    title: A1,
    choices: _1,
    choice: O1,
    choice_disabled: D1,
    choice_icon: z1,
    choice_label: w1,
    choice_desc: N1,
    choice_cost: B1,
    cost_pip: U1,
    cancel: H1,
  },
  Hc = 100,
  Lc = 3,
  rt = {
    gaugeMax: Hc * Lc,
    segmentMax: Hc,
    segmentCount: Lc,
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
  L1 = (s) => s,
  kh = { shake: 1, gravityFlip: 1, magnet: Lc },
  Oi = (s) => kh[s] * Hc,
  j1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
    },
  ],
  Fh = N.memo(({ open: s, onSelect: b, onClose: T, canUse: x }) =>
    s
      ? $.jsx('div', {
          className: en.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: $.jsxs('div', {
            className: en.menu,
            onClick: (h) => h.stopPropagation(),
            children: [
              $.jsx('h2', { className: en.title, children: '必殺技を選択' }),
              $.jsx('div', {
                className: en.choices,
                children: j1.map((h) => {
                  const i = kh[h.kind],
                    d = x[h.kind];
                  return $.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: `${en.choice} ${d ? '' : en.choice_disabled}`,
                      onClick: () => d && b(h.kind),
                      disabled: !d,
                      children: [
                        $.jsx('span', {
                          className: en.choice_icon,
                          'aria-hidden': 'true',
                          children: h.icon,
                        }),
                        $.jsx('span', { className: en.choice_label, children: h.label }),
                        $.jsx('span', { className: en.choice_desc, children: h.description }),
                        $.jsx('span', {
                          className: en.choice_cost,
                          'aria-label': `コスト ${i} ゲージ`,
                          children: Array.from({ length: i }, (f, c) =>
                            $.jsx('span', { className: en.cost_pip }, c)
                          ),
                        }),
                      ],
                    },
                    h.kind
                  );
                }),
              }),
              $.jsx('button', {
                type: 'button',
                className: en.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
Fh.displayName = 'SkillMenu';
const G1 = '_top_bar_15roj_1',
  Y1 = '_right_15roj_12',
  V1 = '_settings_15roj_18',
  zc = { top_bar: G1, right: Y1, settings: V1 },
  q1 = '_next_1n5pn_1',
  X1 = '_label_1n5pn_7',
  Q1 = '_thumb_1n5pn_14',
  Z1 = '_image_1n5pn_27',
  Ju = { next: q1, label: X1, thumb: Q1, image: Z1 },
  K1 = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  $h = N.memo(({ item: s }) =>
    $.jsxs('div', {
      className: Ju.next,
      children: [
        $.jsx('span', { className: Ju.label, children: 'NEXT' }),
        $.jsx('div', {
          className: Ju.thumb,
          'data-testid': 'next-item',
          children: s
            ? $.jsx('img', { src: K1(s.svgPath), alt: s.name, className: Ju.image })
            : null,
        }),
      ],
    })
  );
$h.displayName = 'NextItemPreview';
const J1 = '_score_display_pgke7_1',
  k1 = '_row_pgke7_7',
  F1 = '_label_pgke7_13',
  $1 = '_value_pgke7_20',
  W1 = '_label_small_pgke7_28',
  P1 = '_value_small_pgke7_35',
  Gl = { score_display: J1, row: k1, label: F1, value: $1, label_small: W1, value_small: P1 },
  Wh = N.memo(({ score: s, bestScore: b }) =>
    $.jsxs('div', {
      className: Gl.score_display,
      children: [
        $.jsxs('div', {
          className: Gl.row,
          children: [
            $.jsx('span', { className: Gl.label, children: 'SCORE' }),
            $.jsx('span', { className: Gl.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        $.jsxs('div', {
          className: Gl.row,
          children: [
            $.jsx('span', { className: Gl.label_small, children: 'BEST' }),
            $.jsx('span', { className: Gl.value_small, children: b }),
          ],
        }),
      ],
    })
  );
Wh.displayName = 'ScoreDisplay';
const I1 = ({ score: s, bestScore: b, nextItem: T, onOpenSettings: x }) =>
  $.jsxs('header', {
    className: zc.top_bar,
    children: [
      $.jsx(Wh, { score: s, bestScore: b }),
      $.jsxs('div', {
        className: zc.right,
        children: [
          $.jsx($h, { item: T }),
          $.jsx('button', {
            type: 'button',
            className: zc.settings,
            onClick: x,
            'aria-label': '設定を開く',
            children: $.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var $u = { exports: {} };
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
 */ var eS = $u.exports,
  fh;
function tS() {
  return (
    fh ||
      ((fh = 1),
      (function (s, b) {
        (function (x, h) {
          s.exports = h();
        })(eS, function () {
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
                        var y = arguments[o];
                        if (y)
                          for (var g in y)
                            m &&
                            y[g] &&
                            y[g].constructor === Object &&
                            (!d[g] || d[g].constructor === Object)
                              ? ((d[g] = d[g] || {}), h.extend(d[g], m, y[g]))
                              : (d[g] = y[g]);
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
                      var y = f.split('.').slice(m, o);
                      return ((h.get(d, f, 0, -1)[y[y.length - 1]] = c), c);
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
                      var y = m[d] || [];
                      c[d] = !0;
                      for (var g = 0; g < y.length; g += 1) {
                        var r = y[g];
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
                          var o, y = new Array(arguments.length), g = 0, r = arguments.length;
                          g < r;
                          g++
                        )
                          y[g] = arguments[g];
                        for (g = 0; g < d.length; g += 1) {
                          var p = d[g].apply(o, y);
                          typeof p < 'u' && (o = p);
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
                          !d && typeof Vm < 'u' && (d = Vm.decomp));
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
                      var y = f.x + ((i.x - f.x) * m - (i.y - f.y) * o);
                      return ((c.y = f.y + ((i.x - f.x) * o + (i.y - f.y) * m)), (c.x = y), c);
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
                  for (var o = [], y = 0; y < c.length; y++) {
                    var g = c[y],
                      r = { x: g.x, y: g.y, index: y, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (c, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      y = [];
                    return (
                      c.replace(o, function (g, r, p) {
                        y.push({ x: parseFloat(r), y: parseFloat(p) });
                      }),
                      i.create(y, m)
                    );
                  }),
                  (i.centre = function (c) {
                    for (
                      var m = i.area(c, !0), o = { x: 0, y: 0 }, y, g, r, p = 0;
                      p < c.length;
                      p++
                    )
                      ((r = (p + 1) % c.length),
                        (y = d.cross(c[p], c[r])),
                        (g = d.mult(d.add(c[p], c[r]), y)),
                        (o = d.add(o, g)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (c) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < c.length; o++)
                      ((m.x += c[o].x), (m.y += c[o].y));
                    return d.div(m, c.length);
                  }),
                  (i.area = function (c, m) {
                    for (var o = 0, y = c.length - 1, g = 0; g < c.length; g++)
                      ((o += (c[y].x - c[g].x) * (c[y].y + c[g].y)), (y = g));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (c, m) {
                    for (var o = 0, y = 0, g = c, r, p, v = 0; v < g.length; v++)
                      ((p = (v + 1) % g.length),
                        (r = Math.abs(d.cross(g[p], g[v]))),
                        (o += r * (d.dot(g[p], g[p]) + d.dot(g[p], g[v]) + d.dot(g[v], g[v]))),
                        (y += r));
                    return (m / 6) * (o / y);
                  }),
                  (i.translate = function (c, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var y = c.length,
                      g = m.x * o,
                      r = m.y * o,
                      p;
                    for (p = 0; p < y; p++) ((c[p].x += g), (c[p].y += r));
                    return c;
                  }),
                  (i.rotate = function (c, m, o) {
                    if (m !== 0) {
                      var y = Math.cos(m),
                        g = Math.sin(m),
                        r = o.x,
                        p = o.y,
                        v = c.length,
                        E,
                        R,
                        D,
                        w;
                      for (w = 0; w < v; w++)
                        ((E = c[w]),
                          (R = E.x - r),
                          (D = E.y - p),
                          (E.x = r + (R * y - D * g)),
                          (E.y = p + (R * g + D * y)));
                      return c;
                    }
                  }),
                  (i.contains = function (c, m) {
                    for (var o = m.x, y = m.y, g = c.length, r = c[g - 1], p, v = 0; v < g; v++) {
                      if (((p = c[v]), (o - r.x) * (p.y - r.y) + (y - r.y) * (r.x - p.x) > 0))
                        return !1;
                      r = p;
                    }
                    return !0;
                  }),
                  (i.scale = function (c, m, o, y) {
                    if (m === 1 && o === 1) return c;
                    y = y || i.centre(c);
                    for (var g, r, p = 0; p < c.length; p++)
                      ((g = c[p]),
                        (r = d.sub(g, y)),
                        (c[p].x = y.x + r.x * m),
                        (c[p].y = y.y + r.y * o));
                    return c;
                  }),
                  (i.chamfer = function (c, m, o, y, g) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (y = y || 2),
                      (g = g || 14));
                    for (var r = [], p = 0; p < c.length; p++) {
                      var v = c[p - 1 >= 0 ? p - 1 : c.length - 1],
                        E = c[p],
                        R = c[(p + 1) % c.length],
                        D = m[p < m.length ? p : m.length - 1];
                      if (D === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        L = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(D, 2)),
                        _ = d.mult(f.clone(w), D),
                        O = d.normalise(d.mult(d.add(w, L), 0.5)),
                        A = d.sub(E, d.mult(O, M)),
                        B = o;
                      (o === -1 && (B = Math.pow(D, 0.32) * 1.75),
                        (B = f.clamp(B, y, g)),
                        B % 2 === 1 && (B += 1));
                      for (var z = Math.acos(d.dot(w, L)), H = z / B, G = 0; G < B; G++)
                        r.push(d.add(d.rotate(_, H * G), A));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (c) {
                    var m = i.mean(c);
                    return (
                      c.sort(function (o, y) {
                        return d.angle(m, o) - d.angle(m, y);
                      }),
                      c
                    );
                  }),
                  (i.isConvex = function (c) {
                    var m = 0,
                      o = c.length,
                      y,
                      g,
                      r,
                      p;
                    if (o < 3) return null;
                    for (y = 0; y < o; y++)
                      if (
                        ((g = (y + 1) % o),
                        (r = (y + 2) % o),
                        (p = (c[g].x - c[y].x) * (c[r].y - c[g].y)),
                        (p -= (c[g].y - c[y].y) * (c[r].x - c[g].x)),
                        p < 0 ? (m |= 1) : p > 0 && (m |= 2),
                        m === 3)
                      )
                        return !1;
                    return m !== 0 ? !0 : null;
                  }),
                  (i.hull = function (c) {
                    var m = [],
                      o = [],
                      y,
                      g;
                    for (
                      c = c.slice(0),
                        c.sort(function (r, p) {
                          var v = r.x - p.x;
                          return v !== 0 ? v : r.y - p.y;
                        }),
                        g = 0;
                      g < c.length;
                      g += 1
                    ) {
                      for (
                        y = c[g];
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], y) <= 0;
                      )
                        o.pop();
                      o.push(y);
                    }
                    for (g = c.length - 1; g >= 0; g -= 1) {
                      for (
                        y = c[g];
                        m.length >= 2 && d.cross3(m[m.length - 2], m[m.length - 1], y) <= 0;
                      )
                        m.pop();
                      m.push(y);
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
                y = h(11);
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
                    return (g(v, r), v);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var g = function (r, p) {
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
                    y.rotate(r.axes, r.angle),
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
                    R = r.isStatic && r.render.fillStyle === null ? 1 : 0;
                  ((r.render.fillStyle = r.render.fillStyle || v),
                    (r.render.strokeStyle = r.render.strokeStyle || E),
                    (r.render.lineWidth = r.render.lineWidth || R),
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
                          c.set(r, v);
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
                      (r.axes = y.fromVertices(r.vertices)),
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
                      var R = p[E];
                      R !== r && ((R.parent = r), r.parts.push(R));
                    }
                    if (r.parts.length !== 1) {
                      if (((v = typeof v < 'u' ? v : !0), v)) {
                        var D = [];
                        for (E = 0; E < p.length; E++) D = D.concat(p[E].vertices);
                        d.clockwiseSort(D);
                        var w = d.hull(D),
                          L = d.centre(w);
                        (i.setVertices(r, w), d.translate(r.vertices, L));
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
                    for (var R = 0; R < r.parts.length; R++) {
                      var D = r.parts[R];
                      ((D.position.x += E.x),
                        (D.position.y += E.y),
                        d.translate(D.vertices, E),
                        o.update(D.bounds, D.vertices, r.velocity));
                    }
                  }),
                  (i.setAngle = function (r, p, v) {
                    var E = p - r.angle;
                    v
                      ? ((r.anglePrev = r.angle),
                        (r.angularVelocity = E),
                        (r.angularSpeed = Math.abs(E)))
                      : (r.anglePrev += E);
                    for (var R = 0; R < r.parts.length; R++) {
                      var D = r.parts[R];
                      ((D.angle += E),
                        d.rotate(D.vertices, E, r.position),
                        y.rotate(D.axes, E),
                        o.update(D.bounds, D.vertices, r.velocity),
                        R > 0 && f.rotateAbout(D.position, E, r.position, D.position));
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
                      var R = Math.cos(p),
                        D = Math.sin(p),
                        w = r.position.x - v.x,
                        L = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (w * R - L * D), y: v.y + (w * D + L * R) }, E),
                        i.setAngle(r, r.angle + p, E));
                    }
                  }),
                  (i.scale = function (r, p, v, E) {
                    var R = 0,
                      D = 0;
                    E = E || r.position;
                    for (var w = 0; w < r.parts.length; w++) {
                      var L = r.parts[w];
                      (d.scale(L.vertices, p, v, E),
                        (L.axes = y.fromVertices(L.vertices)),
                        (L.area = d.area(L.vertices)),
                        i.setMass(L, r.density * L.area),
                        d.translate(L.vertices, { x: -L.position.x, y: -L.position.y }),
                        i.setInertia(L, i._inertiaScale * d.inertia(L.vertices, L.mass)),
                        d.translate(L.vertices, { x: L.position.x, y: L.position.y }),
                        w > 0 && ((R += L.area), (D += L.inertia)),
                        (L.position.x = E.x + (L.position.x - E.x) * p),
                        (L.position.y = E.y + (L.position.y - E.y) * v),
                        o.update(L.bounds, L.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (i.setMass(r, r.density * R), i.setInertia(r, D))),
                      r.circleRadius &&
                        (p === v ? (r.circleRadius *= p) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, p) {
                    p = (typeof p < 'u' ? p : 1e3 / 60) * r.timeScale;
                    var v = p * p,
                      E = i._timeCorrection ? p / (r.deltaTime || p) : 1,
                      R = 1 - r.frictionAir * (p / m._baseDelta),
                      D = (r.position.x - r.positionPrev.x) * E,
                      w = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = D * R + (r.force.x / r.mass) * v),
                      (r.velocity.y = w * R + (r.force.y / r.mass) * v),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = p),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * E + (r.torque / r.inertia) * v),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var L = 0; L < r.parts.length; L++) {
                      var M = r.parts[L];
                      (d.translate(M.vertices, r.velocity),
                        L > 0 && ((M.position.x += r.velocity.x), (M.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (d.rotate(M.vertices, r.angularVelocity, r.position),
                          y.rotate(M.axes, r.angularVelocity),
                          L > 0 &&
                            f.rotateAbout(M.position, r.angularVelocity, r.position, M.position)),
                        o.update(M.bounds, M.vertices, r.velocity));
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
                        R = E.mass !== 1 / 0 ? E.mass : 1;
                      ((p.mass += R),
                        (p.area += E.area),
                        (p.inertia += E.inertia),
                        (p.centre = f.add(p.centre, f.mult(E.position, R))));
                    }
                    return ((p.centre = f.div(p.centre, p.mass)), p);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(0);
              (function () {
                ((i.on = function (f, c, m) {
                  for (var o = c.split(' '), y, g = 0; g < o.length; g++)
                    ((y = o[g]),
                      (f.events = f.events || {}),
                      (f.events[y] = f.events[y] || []),
                      f.events[y].push(m));
                  return m;
                }),
                  (i.off = function (f, c, m) {
                    if (!c) {
                      f.events = {};
                      return;
                    }
                    typeof c == 'function' && ((m = c), (c = d.keys(f.events).join(' ')));
                    for (var o = c.split(' '), y = 0; y < o.length; y++) {
                      var g = f.events[o[y]],
                        r = [];
                      if (m && g) for (var p = 0; p < g.length; p++) g[p] !== m && r.push(g[p]);
                      f.events[o[y]] = r;
                    }
                  }),
                  (i.trigger = function (f, c, m) {
                    var o,
                      y,
                      g,
                      r,
                      p = f.events;
                    if (p && d.keys(p).length > 0) {
                      (m || (m = {}), (o = c.split(' ')));
                      for (var v = 0; v < o.length; v++)
                        if (((y = o[v]), (g = p[y]), g)) {
                          ((r = d.clone(m, !1)), (r.name = y), (r.source = f));
                          for (var E = 0; E < g.length; E++) g[E].apply(f, [r]);
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
                  (i.setModified = function (o, y, g, r) {
                    if (
                      ((o.isModified = y),
                      y &&
                        o.cache &&
                        ((o.cache.allBodies = null),
                        (o.cache.allConstraints = null),
                        (o.cache.allComposites = null)),
                      g && o.parent && i.setModified(o.parent, y, g, r),
                      r)
                    )
                      for (var p = 0; p < o.composites.length; p++) {
                        var v = o.composites[p];
                        i.setModified(v, y, g, r);
                      }
                  }),
                  (i.add = function (o, y) {
                    var g = [].concat(y);
                    d.trigger(o, 'beforeAdd', { object: y });
                    for (var r = 0; r < g.length; r++) {
                      var p = g[r];
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
                    return (d.trigger(o, 'afterAdd', { object: y }), o);
                  }),
                  (i.remove = function (o, y, g) {
                    var r = [].concat(y);
                    d.trigger(o, 'beforeRemove', { object: y });
                    for (var p = 0; p < r.length; p++) {
                      var v = r[p];
                      switch (v.type) {
                        case 'body':
                          i.removeBody(o, v, g);
                          break;
                        case 'constraint':
                          i.removeConstraint(o, v, g);
                          break;
                        case 'composite':
                          i.removeComposite(o, v, g);
                          break;
                        case 'mouseConstraint':
                          i.removeConstraint(o, v.constraint);
                          break;
                      }
                    }
                    return (d.trigger(o, 'afterRemove', { object: y }), o);
                  }),
                  (i.addComposite = function (o, y) {
                    return (o.composites.push(y), (y.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, y, g) {
                    var r = f.indexOf(o.composites, y);
                    if (r !== -1) {
                      var p = i.allBodies(y);
                      i.removeCompositeAt(o, r);
                      for (var v = 0; v < p.length; v++) p[v].sleepCounter = 0;
                    }
                    if (g)
                      for (var v = 0; v < o.composites.length; v++)
                        i.removeComposite(o.composites[v], y, !0);
                    return o;
                  }),
                  (i.removeCompositeAt = function (o, y) {
                    return (o.composites.splice(y, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addBody = function (o, y) {
                    return (o.bodies.push(y), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeBody = function (o, y, g) {
                    var r = f.indexOf(o.bodies, y);
                    if ((r !== -1 && (i.removeBodyAt(o, r), (y.sleepCounter = 0)), g))
                      for (var p = 0; p < o.composites.length; p++)
                        i.removeBody(o.composites[p], y, !0);
                    return o;
                  }),
                  (i.removeBodyAt = function (o, y) {
                    return (o.bodies.splice(y, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addConstraint = function (o, y) {
                    return (o.constraints.push(y), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeConstraint = function (o, y, g) {
                    var r = f.indexOf(o.constraints, y);
                    if ((r !== -1 && i.removeConstraintAt(o, r), g))
                      for (var p = 0; p < o.composites.length; p++)
                        i.removeConstraint(o.composites[p], y, !0);
                    return o;
                  }),
                  (i.removeConstraintAt = function (o, y) {
                    return (o.constraints.splice(y, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.clear = function (o, y, g) {
                    if (g)
                      for (var r = 0; r < o.composites.length; r++) i.clear(o.composites[r], y, !0);
                    return (
                      y
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
                    for (var y = [].concat(o.bodies), g = 0; g < o.composites.length; g++)
                      y = y.concat(i.allBodies(o.composites[g]));
                    return (o.cache && (o.cache.allBodies = y), y);
                  }),
                  (i.allConstraints = function (o) {
                    if (o.cache && o.cache.allConstraints) return o.cache.allConstraints;
                    for (var y = [].concat(o.constraints), g = 0; g < o.composites.length; g++)
                      y = y.concat(i.allConstraints(o.composites[g]));
                    return (o.cache && (o.cache.allConstraints = y), y);
                  }),
                  (i.allComposites = function (o) {
                    if (o.cache && o.cache.allComposites) return o.cache.allComposites;
                    for (var y = [].concat(o.composites), g = 0; g < o.composites.length; g++)
                      y = y.concat(i.allComposites(o.composites[g]));
                    return (o.cache && (o.cache.allComposites = y), y);
                  }),
                  (i.get = function (o, y, g) {
                    var r, p;
                    switch (g) {
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
                          return v.id.toString() === y.toString();
                        })),
                        p.length === 0 ? null : p[0])
                      : null;
                  }),
                  (i.move = function (o, y, g) {
                    return (i.remove(o, y), i.add(g, y), o);
                  }),
                  (i.rebase = function (o) {
                    for (
                      var y = i.allBodies(o).concat(i.allConstraints(o)).concat(i.allComposites(o)),
                        g = 0;
                      g < y.length;
                      g++
                    )
                      y[g].id = f.nextId();
                    return o;
                  }),
                  (i.translate = function (o, y, g) {
                    for (var r = g ? i.allBodies(o) : o.bodies, p = 0; p < r.length; p++)
                      m.translate(r[p], y);
                    return o;
                  }),
                  (i.rotate = function (o, y, g, r) {
                    for (
                      var p = Math.cos(y),
                        v = Math.sin(y),
                        E = r ? i.allBodies(o) : o.bodies,
                        R = 0;
                      R < E.length;
                      R++
                    ) {
                      var D = E[R],
                        w = D.position.x - g.x,
                        L = D.position.y - g.y;
                      (m.setPosition(D, { x: g.x + (w * p - L * v), y: g.y + (w * v + L * p) }),
                        m.rotate(D, y));
                    }
                    return o;
                  }),
                  (i.scale = function (o, y, g, r, p) {
                    for (var v = p ? i.allBodies(o) : o.bodies, E = 0; E < v.length; E++) {
                      var R = v[E],
                        D = R.position.x - r.x,
                        w = R.position.y - r.y;
                      (m.setPosition(R, { x: r.x + D * y, y: r.y + w * g }), m.scale(R, y, g));
                    }
                    return o;
                  }),
                  (i.bounds = function (o) {
                    for (var y = i.allBodies(o), g = [], r = 0; r < y.length; r += 1) {
                      var p = y[r];
                      g.push(p.bounds.min, p.bounds.max);
                    }
                    return c.create(g);
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
                      var y = o / c._baseDelta, g = i._motionSleepThreshold, r = 0;
                      r < m.length;
                      r++
                    ) {
                      var p = m[r],
                        v = d.getSpeed(p),
                        E = d.getAngularSpeed(p),
                        R = v * v + E * E;
                      if (p.force.x !== 0 || p.force.y !== 0) {
                        i.set(p, !1);
                        continue;
                      }
                      var D = Math.min(p.motion, R),
                        w = Math.max(p.motion, R);
                      ((p.motion = i._minBias * D + (1 - i._minBias) * w),
                        p.sleepThreshold > 0 && p.motion < g
                          ? ((p.sleepCounter += 1),
                            p.sleepCounter >= p.sleepThreshold / y && i.set(p, !0))
                          : p.sleepCounter > 0 && (p.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (m) {
                    for (var o = i._motionSleepThreshold, y = 0; y < m.length; y++) {
                      var g = m[y];
                      if (g.isActive) {
                        var r = g.collision,
                          p = r.bodyA.parent,
                          v = r.bodyB.parent;
                        if (
                          !((p.isSleeping && v.isSleeping) || p.isStatic || v.isStatic) &&
                          (p.isSleeping || v.isSleeping)
                        ) {
                          var E = p.isSleeping && !p.isStatic ? p : v,
                            R = E === p ? v : p;
                          !E.isStatic && R.motion > o && i.set(E, !1);
                        }
                      }
                    }
                  }),
                  (i.set = function (m, o) {
                    var y = m.isSleeping;
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
                        y || f.trigger(m, 'sleepStart'))
                      : ((m.isSleeping = !1), (m.sleepCounter = 0), y && f.trigger(m, 'sleepEnd'));
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
                ((i.create = function (y, g) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: y,
                    bodyB: g,
                    parentA: y.parent,
                    parentB: g.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (y, g, r) {
                    if (
                      (i._overlapAxes(m, y.vertices, g.vertices, y.axes),
                      m.overlap <= 0 ||
                        (i._overlapAxes(o, g.vertices, y.vertices, g.axes), o.overlap <= 0))
                    )
                      return null;
                    var p = r && r.table[f.id(y, g)],
                      v;
                    (p
                      ? (v = p.collision)
                      : ((v = i.create(y, g)),
                        (v.collided = !0),
                        (v.bodyA = y.id < g.id ? y : g),
                        (v.bodyB = y.id < g.id ? g : y),
                        (v.parentA = v.bodyA.parent),
                        (v.parentB = v.bodyB.parent)),
                      (y = v.bodyA),
                      (g = v.bodyB));
                    var E;
                    m.overlap < o.overlap ? (E = m) : (E = o);
                    var R = v.normal,
                      D = v.tangent,
                      w = v.penetration,
                      L = v.supports,
                      M = E.overlap,
                      _ = E.axis,
                      O = _.x,
                      A = _.y,
                      B = g.position.x - y.position.x,
                      z = g.position.y - y.position.y;
                    (O * B + A * z >= 0 && ((O = -O), (A = -A)),
                      (R.x = O),
                      (R.y = A),
                      (D.x = -A),
                      (D.y = O),
                      (w.x = O * M),
                      (w.y = A * M),
                      (v.depth = M));
                    var H = i._findSupports(y, g, R, 1),
                      G = 0;
                    if (
                      (d.contains(y.vertices, H[0]) && (L[G++] = H[0]),
                      d.contains(y.vertices, H[1]) && (L[G++] = H[1]),
                      G < 2)
                    ) {
                      var J = i._findSupports(g, y, R, -1);
                      (d.contains(g.vertices, J[0]) && (L[G++] = J[0]),
                        G < 2 && d.contains(g.vertices, J[1]) && (L[G++] = J[1]));
                    }
                    return (G === 0 && (L[G++] = H[0]), (v.supportCount = G), v);
                  }),
                  (i._overlapAxes = function (y, g, r, p) {
                    var v = g.length,
                      E = r.length,
                      R = g[0].x,
                      D = g[0].y,
                      w = r[0].x,
                      L = r[0].y,
                      M = p.length,
                      _ = Number.MAX_VALUE,
                      O = 0,
                      A,
                      B,
                      z,
                      H,
                      G,
                      J;
                    for (G = 0; G < M; G++) {
                      var te = p[G],
                        ee = te.x,
                        V = te.y,
                        K = R * ee + D * V,
                        ne = w * ee + L * V,
                        se = K,
                        de = ne;
                      for (J = 1; J < v; J += 1)
                        ((H = g[J].x * ee + g[J].y * V), H > se ? (se = H) : H < K && (K = H));
                      for (J = 1; J < E; J += 1)
                        ((H = r[J].x * ee + r[J].y * V), H > de ? (de = H) : H < ne && (ne = H));
                      if (
                        ((B = se - ne),
                        (z = de - K),
                        (A = B < z ? B : z),
                        A < _ && ((_ = A), (O = G), A <= 0))
                      )
                        break;
                    }
                    ((y.axis = p[O]), (y.overlap = _));
                  }),
                  (i._findSupports = function (y, g, r, p) {
                    var v = g.vertices,
                      E = v.length,
                      R = y.position.x,
                      D = y.position.y,
                      w = r.x * p,
                      L = r.y * p,
                      M = v[0],
                      _ = M,
                      O = w * (R - _.x) + L * (D - _.y),
                      A,
                      B,
                      z;
                    for (z = 1; z < E; z += 1)
                      ((_ = v[z]),
                        (B = w * (R - _.x) + L * (D - _.y)),
                        B < O && ((O = B), (M = _)));
                    return (
                      (A = v[(E + M.index - 1) % E]),
                      (O = w * (R - A.x) + L * (D - A.y)),
                      (_ = v[(M.index + 1) % E]),
                      w * (R - _.x) + L * (D - _.y) < O
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
                    y = {
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
                  return (i.update(y, f, c), y);
                }),
                  (i.update = function (f, c, m) {
                    var o = c.supports,
                      y = c.supportCount,
                      g = f.contacts,
                      r = c.parentA,
                      p = c.parentB;
                    ((f.isActive = !0),
                      (f.timeUpdated = m),
                      (f.collision = c),
                      (f.separation = c.depth),
                      (f.inverseMass = r.inverseMass + p.inverseMass),
                      (f.friction = r.friction < p.friction ? r.friction : p.friction),
                      (f.frictionStatic =
                        r.frictionStatic > p.frictionStatic ? r.frictionStatic : p.frictionStatic),
                      (f.restitution =
                        r.restitution > p.restitution ? r.restitution : p.restitution),
                      (f.slop = r.slop > p.slop ? r.slop : p.slop),
                      (f.contactCount = y),
                      (c.pair = f));
                    var v = o[0],
                      E = g[0],
                      R = o[1],
                      D = g[1];
                    ((D.vertex === v || E.vertex === R) && ((g[1] = E), (g[0] = E = D), (D = g[1])),
                      (E.vertex = v),
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
                y = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (g) {
                    var r = g;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var p = r.bodyA ? f.add(r.bodyA.position, r.pointA) : r.pointA,
                      v = r.bodyB ? f.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = f.magnitude(f.sub(p, v));
                    ((r.length = typeof r.length < 'u' ? r.length : E),
                      (r.id = r.id || y.nextId()),
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
                      (r.render = y.extend(R, r.render)),
                      r
                    );
                  }),
                  (i.preSolveAll = function (g) {
                    for (var r = 0; r < g.length; r += 1) {
                      var p = g[r],
                        v = p.constraintImpulse;
                      p.isStatic ||
                        (v.x === 0 && v.y === 0 && v.angle === 0) ||
                        ((p.position.x += v.x), (p.position.y += v.y), (p.angle += v.angle));
                    }
                  }),
                  (i.solveAll = function (g, r) {
                    for (var p = y.clamp(r / y._baseDelta, 0, 1), v = 0; v < g.length; v += 1) {
                      var E = g[v],
                        R = !E.bodyA || (E.bodyA && E.bodyA.isStatic),
                        D = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (R || D) && i.solve(g[v], p);
                    }
                    for (v = 0; v < g.length; v += 1)
                      ((E = g[v]),
                        (R = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (D = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !R && !D && i.solve(g[v], p));
                  }),
                  (i.solve = function (g, r) {
                    var p = g.bodyA,
                      v = g.bodyB,
                      E = g.pointA,
                      R = g.pointB;
                    if (!(!p && !v)) {
                      (p &&
                        !p.isStatic &&
                        (f.rotate(E, p.angle - g.angleA, E), (g.angleA = p.angle)),
                        v &&
                          !v.isStatic &&
                          (f.rotate(R, v.angle - g.angleB, R), (g.angleB = v.angle)));
                      var D = E,
                        w = R;
                      if (
                        (p && (D = f.add(p.position, E)),
                        v && (w = f.add(v.position, R)),
                        !(!D || !w))
                      ) {
                        var L = f.sub(D, w),
                          M = f.magnitude(L);
                        M < i._minLength && (M = i._minLength);
                        var _ = (M - g.length) / M,
                          O = g.stiffness >= 1 || g.length === 0,
                          A = O ? g.stiffness * r : g.stiffness * r * r,
                          B = g.damping * r,
                          z = f.mult(L, _ * A),
                          H = (p ? p.inverseMass : 0) + (v ? v.inverseMass : 0),
                          G = (p ? p.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          J = H + G,
                          te,
                          ee,
                          V,
                          K,
                          ne;
                        if (B > 0) {
                          var se = f.create();
                          ((V = f.div(L, M)),
                            (ne = f.sub(
                              (v && f.sub(v.position, v.positionPrev)) || se,
                              (p && f.sub(p.position, p.positionPrev)) || se
                            )),
                            (K = f.dot(V, ne)));
                        }
                        (p &&
                          !p.isStatic &&
                          ((ee = p.inverseMass / H),
                          (p.constraintImpulse.x -= z.x * ee),
                          (p.constraintImpulse.y -= z.y * ee),
                          (p.position.x -= z.x * ee),
                          (p.position.y -= z.y * ee),
                          B > 0 &&
                            ((p.positionPrev.x -= B * V.x * K * ee),
                            (p.positionPrev.y -= B * V.y * K * ee)),
                          (te =
                            (f.cross(E, z) / J) *
                            i._torqueDampen *
                            p.inverseInertia *
                            (1 - g.angularStiffness)),
                          (p.constraintImpulse.angle -= te),
                          (p.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((ee = v.inverseMass / H),
                            (v.constraintImpulse.x += z.x * ee),
                            (v.constraintImpulse.y += z.y * ee),
                            (v.position.x += z.x * ee),
                            (v.position.y += z.y * ee),
                            B > 0 &&
                              ((v.positionPrev.x += B * V.x * K * ee),
                              (v.positionPrev.y += B * V.y * K * ee)),
                            (te =
                              (f.cross(R, z) / J) *
                              i._torqueDampen *
                              v.inverseInertia *
                              (1 - g.angularStiffness)),
                            (v.constraintImpulse.angle += te),
                            (v.angle += te)));
                      }
                    }
                  }),
                  (i.postSolveAll = function (g) {
                    for (var r = 0; r < g.length; r++) {
                      var p = g[r],
                        v = p.constraintImpulse;
                      if (!(p.isStatic || (v.x === 0 && v.y === 0 && v.angle === 0))) {
                        c.set(p, !1);
                        for (var E = 0; E < p.parts.length; E++) {
                          var R = p.parts[E];
                          (d.translate(R.vertices, v),
                            E > 0 && ((R.position.x += v.x), (R.position.y += v.y)),
                            v.angle !== 0 &&
                              (d.rotate(R.vertices, v.angle, p.position),
                              o.rotate(R.axes, v.angle),
                              E > 0 && f.rotateAbout(R.position, v.angle, p.position, R.position)),
                            m.update(R.bounds, R.vertices, p.velocity));
                        }
                        ((v.angle *= i._warming), (v.x *= i._warming), (v.y *= i._warming));
                      }
                    }
                  }),
                  (i.pointAWorld = function (g) {
                    return {
                      x: (g.bodyA ? g.bodyA.position.x : 0) + (g.pointA ? g.pointA.x : 0),
                      y: (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                    };
                  }),
                  (i.pointBWorld = function (g) {
                    return {
                      x: (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      y: (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                    };
                  }),
                  (i.currentLength = function (g) {
                    var r = (g.bodyA ? g.bodyA.position.x : 0) + (g.pointA ? g.pointA.x : 0),
                      p = (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                      v = (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      E = (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                      R = r - v,
                      D = p - E;
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
                    var y = (o + 1) % c.length,
                      g = d.normalise({ x: c[y].y - c[o].y, y: c[o].x - c[y].x }),
                      r = g.y === 0 ? 1 / 0 : g.x / g.y;
                    ((r = r.toFixed(3).toString()), (m[r] = g));
                  }
                  return f.values(m);
                }),
                  (i.rotate = function (c, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), y = Math.sin(m), g = 0; g < c.length; g++) {
                        var r = c[g],
                          p;
                        ((p = r.x * o - r.y * y), (r.y = r.x * y + r.y * o), (r.x = p));
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
                ((i.rectangle = function (y, g, r, p, v) {
                  v = v || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: y, y: g },
                    vertices: d.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + p + ' L 0 ' + p),
                  };
                  if (v.chamfer) {
                    var R = v.chamfer;
                    ((E.vertices = d.chamfer(
                      E.vertices,
                      R.radius,
                      R.quality,
                      R.qualityMin,
                      R.qualityMax
                    )),
                      delete v.chamfer);
                  }
                  return c.create(f.extend({}, E, v));
                }),
                  (i.trapezoid = function (y, g, r, p, v, E) {
                    ((E = E || {}),
                      v >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var R = (1 - v * 2) * r,
                      D = r * v,
                      w = D + R,
                      L = w + D,
                      M;
                    v < 0.5
                      ? (M = 'L 0 0 L ' + D + ' ' + -p + ' L ' + w + ' ' + -p + ' L ' + L + ' 0')
                      : (M = 'L 0 0 L ' + w + ' ' + -p + ' L ' + L + ' 0');
                    var _ = {
                      label: 'Trapezoid Body',
                      position: { x: y, y: g },
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
                  (i.circle = function (y, g, r, p, v) {
                    p = p || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    v = v || 25;
                    var R = Math.ceil(Math.max(10, Math.min(v, r)));
                    return (R % 2 === 1 && (R += 1), i.polygon(y, g, R, r, f.extend({}, E, p)));
                  }),
                  (i.polygon = function (y, g, r, p, v) {
                    if (((v = v || {}), r < 3)) return i.circle(y, g, p, v);
                    for (var E = (2 * Math.PI) / r, R = '', D = E * 0.5, w = 0; w < r; w += 1) {
                      var L = D + w * E,
                        M = Math.cos(L) * p,
                        _ = Math.sin(L) * p;
                      R += 'L ' + M.toFixed(3) + ' ' + _.toFixed(3) + ' ';
                    }
                    var O = {
                      label: 'Polygon Body',
                      position: { x: y, y: g },
                      vertices: d.fromPath(R),
                    };
                    if (v.chamfer) {
                      var A = v.chamfer;
                      ((O.vertices = d.chamfer(
                        O.vertices,
                        A.radius,
                        A.quality,
                        A.qualityMin,
                        A.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return c.create(f.extend({}, O, v));
                  }),
                  (i.fromVertices = function (y, g, r, p, v, E, R, D) {
                    var w = f.getDecomp(),
                      L,
                      M,
                      _,
                      O,
                      A,
                      B,
                      z,
                      H,
                      G,
                      J,
                      te;
                    for (
                      L = !!(w && w.quickDecomp),
                        p = p || {},
                        _ = [],
                        v = typeof v < 'u' ? v : !1,
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
                          !L &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        O || !L)
                      )
                        (O ? (B = d.clockwiseSort(B)) : (B = d.hull(B)),
                          _.push({ position: { x: y, y: g }, vertices: B }));
                      else {
                        var ee = B.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          D !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, D));
                        var V = w.quickDecomp(ee);
                        for (z = 0; z < V.length; z++) {
                          var K = V[z],
                            ne = K.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            _.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (z = 0; z < _.length; z++) _[z] = c.create(f.extend(_[z], p));
                    if (v) {
                      var se = 5;
                      for (z = 0; z < _.length; z++) {
                        var de = _[z];
                        for (H = z + 1; H < _.length; H++) {
                          var j = _[H];
                          if (m.overlaps(de.bounds, j.bounds)) {
                            var F = de.vertices,
                              le = j.vertices;
                            for (G = 0; G < de.vertices.length; G++)
                              for (te = 0; te < j.vertices.length; te++) {
                                var ae = o.magnitudeSquared(o.sub(F[(G + 1) % F.length], le[te])),
                                  oe = o.magnitudeSquared(o.sub(F[G], le[(te + 1) % le.length]));
                                ae < se &&
                                  oe < se &&
                                  ((F[G].isInternal = !0), (le[te].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return _.length > 1
                      ? ((M = c.create(f.extend({ parts: _.slice(0) }, p))),
                        c.setPosition(M, { x: y, y: g }),
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
                      y = o.length,
                      g = i.canCollide,
                      r = f.collides,
                      p = c.collisions,
                      v = 0,
                      E,
                      R;
                    for (o.sort(i._compareBoundsX), E = 0; E < y; E++) {
                      var D = o[E],
                        w = D.bounds,
                        L = D.bounds.max.x,
                        M = D.bounds.max.y,
                        _ = D.bounds.min.y,
                        O = D.isStatic || D.isSleeping,
                        A = D.parts.length,
                        B = A === 1;
                      for (R = E + 1; R < y; R++) {
                        var z = o[R],
                          H = z.bounds;
                        if (H.min.x > L) break;
                        if (
                          !(M < H.min.y || _ > H.max.y) &&
                          !(O && (z.isStatic || z.isSleeping)) &&
                          g(D.collisionFilter, z.collisionFilter)
                        ) {
                          var G = z.parts.length;
                          if (B && G === 1) {
                            var J = r(D, z, m);
                            J && (p[v++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, V = te; V < A; V++)
                              for (var K = D.parts[V], w = K.bounds, ne = ee; ne < G; ne++) {
                                var se = z.parts[ne],
                                  H = se.bounds;
                                if (
                                  !(
                                    w.min.x > H.max.x ||
                                    w.max.x < H.min.x ||
                                    w.max.y < H.min.y ||
                                    w.min.y > H.max.y
                                  )
                                ) {
                                  var J = r(K, se, m);
                                  J && (p[v++] = J);
                                }
                              }
                        }
                      }
                    }
                    return (p.length !== v && (p.length = v), p);
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
                        y = m.changedTouches;
                      (y && ((c.button = 0), m.preventDefault()),
                        (c.absolute.x = o.x),
                        (c.absolute.y = o.y),
                        (c.position.x = c.absolute.x * c.scale.x + c.offset.x),
                        (c.position.y = c.absolute.y * c.scale.y + c.offset.y),
                        (c.sourceEvents.mousemove = m));
                    }),
                    (c.mousedown = function (m) {
                      var o = i._getRelativeMousePosition(m, c.element, c.pixelRatio),
                        y = m.changedTouches;
                      (y ? ((c.button = 0), m.preventDefault()) : (c.button = m.button),
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
                        y = m.changedTouches;
                      (y && m.preventDefault(),
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
                      y = document.documentElement || document.body.parentNode || document.body,
                      g = window.pageXOffset !== void 0 ? window.pageXOffset : y.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : y.scrollTop,
                      p = f.changedTouches,
                      v,
                      E;
                    return (
                      p
                        ? ((v = p[0].pageX - o.left - g), (E = p[0].pageY - o.top - r))
                        : ((v = f.pageX - o.left - g), (E = f.pageY - o.top - r)),
                      {
                        x: v / ((c.clientWidth / (c.width || c.clientWidth)) * m),
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
                      var m = i.dependencies(f), o = d.topologicalSort(m), y = [], g = 0;
                      g < o.length;
                      g += 1
                    )
                      if (o[g] !== f.name) {
                        var r = i.resolve(o[g]);
                        if (!r) {
                          y.push('❌ ' + o[g]);
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
                            ? (y.push('🔶 ' + i.toString(r)), delete r._warned)
                            : y.push('✅ ' + i.toString(r)),
                          f.used.push(r.name));
                      }
                    y.length > 0 && d.info(y.join('  '));
                  }),
                  (i.dependencies = function (f, c) {
                    var m = i.dependencyParse(f),
                      o = m.name;
                    if (((c = c || {}), !(o in c))) {
                      ((f = i.resolve(f) || f),
                        (c[o] = d.map(f.uses || [], function (g) {
                          i.isPlugin(g) && i.register(g);
                          var r = i.dependencyParse(g),
                            p = i.resolve(g);
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
                                  i.toString(g),
                                  'used by',
                                  i.toString(m),
                                  'could not be resolved.'
                                ),
                                (f._warned = !0)),
                            r.name
                          );
                        })));
                      for (var y = 0; y < c[o].length; y += 1) i.dependencies(c[o][y], c);
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
                      y = Number(m[5]),
                      g = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: f,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: y,
                      patch: g,
                      parts: [o, y, g],
                      prerelease: m[7],
                      number: o * 1e8 + y * 1e4 + g,
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
                y = h(6),
                g = h(10),
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
                      R = r.extend(E, v);
                    return (
                      (R.world = v.world || y.create({ label: 'World' })),
                      (R.pairs = v.pairs || m.create()),
                      (R.detector = v.detector || c.create()),
                      (R.detector.pairs = R.pairs),
                      (R.grid = { buckets: [] }),
                      (R.world.gravity = R.gravity),
                      (R.broadphase = R.grid),
                      (R.metrics = {}),
                      R
                    );
                  }),
                  (i.update = function (v, E) {
                    var R = r.now(),
                      D = v.world,
                      w = v.detector,
                      L = v.pairs,
                      M = v.timing,
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
                    o.trigger(v, 'beforeUpdate', A);
                    var B = y.allBodies(D),
                      z = y.allConstraints(D);
                    for (
                      D.isModified && (c.setBodies(w, B), y.setModified(D, !1, !1, !0)),
                        v.enableSleeping && d.update(B, E),
                        i._bodiesApplyGravity(B, v.gravity),
                        E > 0 && i._bodiesUpdate(B, E),
                        o.trigger(v, 'beforeSolve', A),
                        g.preSolveAll(B),
                        O = 0;
                      O < v.constraintIterations;
                      O++
                    )
                      g.solveAll(z, E);
                    g.postSolveAll(B);
                    var H = c.collisions(w);
                    (m.update(L, H, _),
                      v.enableSleeping && d.afterCollisions(L.list),
                      L.collisionStart.length > 0 &&
                        o.trigger(v, 'collisionStart', {
                          pairs: L.collisionStart,
                          timestamp: M.timestamp,
                          delta: E,
                        }));
                    var G = r.clamp(20 / v.positionIterations, 0, 1);
                    for (f.preSolvePosition(L.list), O = 0; O < v.positionIterations; O++)
                      f.solvePosition(L.list, E, G);
                    for (
                      f.postSolvePosition(B), g.preSolveAll(B), O = 0;
                      O < v.constraintIterations;
                      O++
                    )
                      g.solveAll(z, E);
                    for (
                      g.postSolveAll(B), f.preSolveVelocity(L.list), O = 0;
                      O < v.velocityIterations;
                      O++
                    )
                      f.solveVelocity(L.list, E);
                    return (
                      i._bodiesUpdateVelocities(B),
                      L.collisionActive.length > 0 &&
                        o.trigger(v, 'collisionActive', {
                          pairs: L.collisionActive,
                          timestamp: M.timestamp,
                          delta: E,
                        }),
                      L.collisionEnd.length > 0 &&
                        o.trigger(v, 'collisionEnd', {
                          pairs: L.collisionEnd,
                          timestamp: M.timestamp,
                          delta: E,
                        }),
                      i._bodiesClearForces(B),
                      o.trigger(v, 'afterUpdate', A),
                      (v.timing.lastElapsed = r.now() - R),
                      v
                    );
                  }),
                  (i.merge = function (v, E) {
                    if ((r.extend(v, E), E.world)) {
                      ((v.world = E.world), i.clear(v));
                      for (var R = y.allBodies(v.world), D = 0; D < R.length; D++) {
                        var w = R[D];
                        (d.set(w, !1), (w.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (v) {
                    (m.clear(v.pairs), c.clear(v.detector));
                  }),
                  (i._bodiesClearForces = function (v) {
                    for (var E = v.length, R = 0; R < E; R++) {
                      var D = v[R];
                      ((D.force.x = 0), (D.force.y = 0), (D.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (v, E) {
                    var R = typeof E.scale < 'u' ? E.scale : 0.001,
                      D = v.length;
                    if (!((E.x === 0 && E.y === 0) || R === 0))
                      for (var w = 0; w < D; w++) {
                        var L = v[w];
                        L.isStatic ||
                          L.isSleeping ||
                          ((L.force.y += L.mass * E.y * R), (L.force.x += L.mass * E.x * R));
                      }
                  }),
                  (i._bodiesUpdate = function (v, E) {
                    for (var R = v.length, D = 0; D < R; D++) {
                      var w = v[D];
                      w.isStatic || w.isSleeping || p.update(w, E);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (v) {
                    for (var E = v.length, R = 0; R < E; R++) p.updateVelocities(v[R]);
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
                      y,
                      g,
                      r = m.length;
                    for (o = 0; o < r; o++)
                      ((y = m[o]),
                        y.isActive &&
                          ((g = y.contactCount),
                          (y.collision.parentA.totalContacts += g),
                          (y.collision.parentB.totalContacts += g)));
                  }),
                  (i.solvePosition = function (m, o, y) {
                    var g,
                      r,
                      p,
                      v,
                      E,
                      R,
                      D,
                      w,
                      L = i._positionDampen * (y || 1),
                      M = f.clamp(o / f._baseDelta, 0, 1),
                      _ = m.length;
                    for (g = 0; g < _; g++)
                      ((r = m[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (v = p.parentA),
                          (E = p.parentB),
                          (R = p.normal),
                          (r.separation =
                            p.depth +
                            R.x * (E.positionImpulse.x - v.positionImpulse.x) +
                            R.y * (E.positionImpulse.y - v.positionImpulse.y))));
                    for (g = 0; g < _; g++)
                      ((r = m[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (v = p.parentA),
                          (E = p.parentB),
                          (R = p.normal),
                          (w = r.separation - r.slop * M),
                          (v.isStatic || E.isStatic) && (w *= 2),
                          v.isStatic ||
                            v.isSleeping ||
                            ((D = L / v.totalContacts),
                            (v.positionImpulse.x += R.x * w * D),
                            (v.positionImpulse.y += R.y * w * D)),
                          E.isStatic ||
                            E.isSleeping ||
                            ((D = L / E.totalContacts),
                            (E.positionImpulse.x -= R.x * w * D),
                            (E.positionImpulse.y -= R.y * w * D))));
                  }),
                  (i.postSolvePosition = function (m) {
                    for (
                      var o = i._positionWarming,
                        y = m.length,
                        g = d.translate,
                        r = c.update,
                        p = 0;
                      p < y;
                      p++
                    ) {
                      var v = m[p],
                        E = v.positionImpulse,
                        R = E.x,
                        D = E.y,
                        w = v.velocity;
                      if (((v.totalContacts = 0), R !== 0 || D !== 0)) {
                        for (var L = 0; L < v.parts.length; L++) {
                          var M = v.parts[L];
                          (g(M.vertices, E),
                            r(M.bounds, M.vertices, w),
                            (M.position.x += R),
                            (M.position.y += D));
                        }
                        ((v.positionPrev.x += R),
                          (v.positionPrev.y += D),
                          R * w.x + D * w.y < 0
                            ? ((E.x = 0), (E.y = 0))
                            : ((E.x *= o), (E.y *= o)));
                      }
                    }
                  }),
                  (i.preSolveVelocity = function (m) {
                    var o = m.length,
                      y,
                      g;
                    for (y = 0; y < o; y++) {
                      var r = m[y];
                      if (!(!r.isActive || r.isSensor)) {
                        var p = r.contacts,
                          v = r.contactCount,
                          E = r.collision,
                          R = E.parentA,
                          D = E.parentB,
                          w = E.normal,
                          L = E.tangent;
                        for (g = 0; g < v; g++) {
                          var M = p[g],
                            _ = M.vertex,
                            O = M.normalImpulse,
                            A = M.tangentImpulse;
                          if (O !== 0 || A !== 0) {
                            var B = w.x * O + L.x * A,
                              z = w.y * O + L.y * A;
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
                    var y = o / f._baseDelta,
                      g = y * y,
                      r = g * y,
                      p = -i._restingThresh * y,
                      v = i._restingThreshTangent,
                      E = i._frictionNormalMultiplier * y,
                      R = i._frictionMaxStatic,
                      D = m.length,
                      w,
                      L,
                      M,
                      _;
                    for (M = 0; M < D; M++) {
                      var O = m[M];
                      if (!(!O.isActive || O.isSensor)) {
                        var A = O.collision,
                          B = A.parentA,
                          z = A.parentB,
                          H = A.normal.x,
                          G = A.normal.y,
                          J = A.tangent.x,
                          te = A.tangent.y,
                          ee = O.inverseMass,
                          V = O.friction * O.frictionStatic * E,
                          K = O.contacts,
                          ne = O.contactCount,
                          se = 1 / ne,
                          de = B.position.x - B.positionPrev.x,
                          j = B.position.y - B.positionPrev.y,
                          F = B.angle - B.anglePrev,
                          le = z.position.x - z.positionPrev.x,
                          ae = z.position.y - z.positionPrev.y,
                          oe = z.angle - z.anglePrev;
                        for (_ = 0; _ < ne; _++) {
                          var ie = K[_],
                            ve = ie.vertex,
                            be = ve.x - B.position.x,
                            Ee = ve.y - B.position.y,
                            Xe = ve.x - z.position.x,
                            We = ve.y - z.position.y,
                            ke = de - Ee * F,
                            bn = j + be * F,
                            Bt = le - We * oe,
                            on = ae + Xe * oe,
                            Tn = ke - Bt,
                            Fn = bn - on,
                            Rt = H * Tn + G * Fn,
                            bt = J * Tn + te * Fn,
                            nn = O.separation + Rt,
                            Tt = Math.min(nn, 1);
                          Tt = nn < 0 ? 0 : Tt;
                          var st = Tt * V;
                          bt < -st || bt > st
                            ? ((L = bt > 0 ? bt : -bt),
                              (w = O.friction * (bt > 0 ? 1 : -1) * r),
                              w < -L ? (w = -L) : w > L && (w = L))
                            : ((w = bt), (L = R));
                          var fn = be * G - Ee * H,
                            ct = Xe * G - We * H,
                            ql =
                              se / (ee + B.inverseInertia * fn * fn + z.inverseInertia * ct * ct),
                            St = (1 + O.restitution) * Rt * ql;
                          if (((w *= ql), Rt < p)) ie.normalImpulse = 0;
                          else {
                            var dn = ie.normalImpulse;
                            ((ie.normalImpulse += St),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (St = ie.normalImpulse - dn));
                          }
                          if (bt < -v || bt > v) ie.tangentImpulse = 0;
                          else {
                            var Mn = ie.tangentImpulse;
                            ((ie.tangentImpulse += w),
                              ie.tangentImpulse < -L && (ie.tangentImpulse = -L),
                              ie.tangentImpulse > L && (ie.tangentImpulse = L),
                              (w = ie.tangentImpulse - Mn));
                          }
                          var Cn = H * St + J * w,
                            mn = G * St + te * w;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += Cn * B.inverseMass),
                            (B.positionPrev.y += mn * B.inverseMass),
                            (B.anglePrev += (be * mn - Ee * Cn) * B.inverseInertia)),
                            z.isStatic ||
                              z.isSleeping ||
                              ((z.positionPrev.x -= Cn * z.inverseMass),
                              (z.positionPrev.y -= mn * z.inverseMass),
                              (z.anglePrev -= (Xe * mn - We * Cn) * z.inverseInertia)));
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
                    var y = d.update,
                      g = d.create,
                      r = d.setActive,
                      p = c.table,
                      v = c.list,
                      E = v.length,
                      R = E,
                      D = c.collisionStart,
                      w = c.collisionEnd,
                      L = c.collisionActive,
                      M = m.length,
                      _ = 0,
                      O = 0,
                      A = 0,
                      B,
                      z,
                      H;
                    for (H = 0; H < M; H++)
                      ((B = m[H]),
                        (z = B.pair),
                        z
                          ? (z.isActive && (L[A++] = z), y(z, B, o))
                          : ((z = g(B, o)), (p[z.id] = z), (D[_++] = z), (v[R++] = z)));
                    for (R = 0, E = v.length, H = 0; H < E; H++)
                      ((z = v[H]),
                        z.timeUpdated >= o
                          ? (v[R++] = z)
                          : (r(z, !1, o),
                            z.collision.bodyA.sleepCounter > 0 && z.collision.bodyB.sleepCounter > 0
                              ? (v[R++] = z)
                              : ((w[O++] = z), delete p[z.id])));
                    (v.length !== R && (v.length = R),
                      D.length !== _ && (D.length = _),
                      w.length !== O && (w.length = O),
                      L.length !== A && (L.length = A));
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
                y = c.deprecated;
              (function () {
                ((i.stack = function (g, r, p, v, E, R, D) {
                  for (
                    var w = d.create({ label: 'Stack' }), L = g, M = r, _, O = 0, A = 0;
                    A < v;
                    A++
                  ) {
                    for (var B = 0, z = 0; z < p; z++) {
                      var H = D(L, M, z, A, _, O);
                      if (H) {
                        var G = H.bounds.max.y - H.bounds.min.y,
                          J = H.bounds.max.x - H.bounds.min.x;
                        (G > B && (B = G),
                          m.translate(H, { x: J * 0.5, y: G * 0.5 }),
                          (L = H.bounds.max.x + E),
                          d.addBody(w, H),
                          (_ = H),
                          (O += 1));
                      } else L += E;
                    }
                    ((M += B + R), (L = g));
                  }
                  return w;
                }),
                  (i.chain = function (g, r, p, v, E, R) {
                    for (var D = g.bodies, w = 1; w < D.length; w++) {
                      var L = D[w - 1],
                        M = D[w],
                        _ = L.bounds.max.y - L.bounds.min.y,
                        O = L.bounds.max.x - L.bounds.min.x,
                        A = M.bounds.max.y - M.bounds.min.y,
                        B = M.bounds.max.x - M.bounds.min.x,
                        z = {
                          bodyA: L,
                          pointA: { x: O * r, y: _ * p },
                          bodyB: M,
                          pointB: { x: B * v, y: A * E },
                        },
                        H = c.extend(z, R);
                      d.addConstraint(g, f.create(H));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (i.mesh = function (g, r, p, v, E) {
                    var R = g.bodies,
                      D,
                      w,
                      L,
                      M,
                      _;
                    for (D = 0; D < p; D++) {
                      for (w = 1; w < r; w++)
                        ((L = R[w - 1 + D * r]),
                          (M = R[w + D * r]),
                          d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: M }, E))));
                      if (D > 0)
                        for (w = 0; w < r; w++)
                          ((L = R[w + (D - 1) * r]),
                            (M = R[w + D * r]),
                            d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: M }, E))),
                            v &&
                              w > 0 &&
                              ((_ = R[w - 1 + (D - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: _, bodyB: M }, E)))),
                            v &&
                              w < r - 1 &&
                              ((_ = R[w + 1 + (D - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: _, bodyB: M }, E)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (i.pyramid = function (g, r, p, v, E, R, D) {
                    return i.stack(g, r, p, v, E, R, function (w, L, M, _, O, A) {
                      var B = Math.min(v, Math.ceil(p / 2)),
                        z = O ? O.bounds.max.x - O.bounds.min.x : 0;
                      if (!(_ > B)) {
                        _ = B - _;
                        var H = _,
                          G = p - 1 - _;
                        if (!(M < H || M > G)) {
                          A === 1 && m.translate(O, { x: (M + (p % 2 === 1 ? 1 : -1)) * z, y: 0 });
                          var J = O ? M * z : 0;
                          return D(g + J + M * E, L, M, _, O, A);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (g, r, p, v, E) {
                    for (var R = d.create({ label: 'Newtons Cradle' }), D = 0; D < p; D++) {
                      var w = 1.9,
                        L = o.circle(g + D * (v * w), r + E, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = f.create({ pointA: { x: g + D * (v * w), y: r }, bodyB: L });
                      (d.addBody(R, L), d.addConstraint(R, M));
                    }
                    return R;
                  }),
                  y(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (g, r, p, v, E) {
                    var R = m.nextGroup(!0),
                      D = 20,
                      w = -p * 0.5 + D,
                      L = p * 0.5 - D,
                      M = 0,
                      _ = d.create({ label: 'Car' }),
                      O = o.rectangle(g, r, p, v, {
                        collisionFilter: { group: R },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      A = o.circle(g + w, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = o.circle(g + L, r + M, E, {
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
                      H = f.create({
                        bodyB: O,
                        pointB: { x: L, y: M },
                        bodyA: B,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(_, O),
                      d.addBody(_, A),
                      d.addBody(_, B),
                      d.addConstraint(_, z),
                      d.addConstraint(_, H),
                      _
                    );
                  }),
                  y(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (g, r, p, v, E, R, D, w, L, M) {
                    ((L = c.extend({ inertia: 1 / 0 }, L)),
                      (M = c.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var _ = i.stack(g, r, p, v, E, R, function (O, A) {
                      return o.circle(O, A, w, L);
                    });
                    return (i.mesh(_, p, v, D, M), (_.label = 'Soft Body'), _);
                  }),
                  y(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
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
                  (i.update = function (m, o, y, g) {
                    var r,
                      p,
                      v,
                      E = y.world,
                      R = m.buckets,
                      D,
                      w,
                      L = !1;
                    for (r = 0; r < o.length; r++) {
                      var M = o[r];
                      if (
                        !(M.isSleeping && !g) &&
                        !(
                          E.bounds &&
                          (M.bounds.max.x < E.bounds.min.x ||
                            M.bounds.min.x > E.bounds.max.x ||
                            M.bounds.max.y < E.bounds.min.y ||
                            M.bounds.min.y > E.bounds.max.y)
                        )
                      ) {
                        var _ = i._getRegion(m, M);
                        if (!M.region || _.id !== M.region.id || g) {
                          (!M.region || g) && (M.region = _);
                          var O = i._regionUnion(_, M.region);
                          for (p = O.startCol; p <= O.endCol; p++)
                            for (v = O.startRow; v <= O.endRow; v++) {
                              ((w = i._getBucketId(p, v)), (D = R[w]));
                              var A =
                                  p >= _.startCol &&
                                  p <= _.endCol &&
                                  v >= _.startRow &&
                                  v <= _.endRow,
                                B =
                                  p >= M.region.startCol &&
                                  p <= M.region.endCol &&
                                  v >= M.region.startRow &&
                                  v <= M.region.endRow;
                              (!A && B && B && D && i._bucketRemoveBody(m, D, M),
                                (M.region === _ || (A && !B) || g) &&
                                  (D || (D = i._createBucket(R, w)), i._bucketAddBody(m, D, M)));
                            }
                          ((M.region = _), (L = !0));
                        }
                      }
                    }
                    L && (m.pairsList = i._createActivePairsList(m));
                  }),
                  c(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (m) {
                    ((m.buckets = {}), (m.pairs = {}), (m.pairsList = []));
                  }),
                  c(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
                  (i._regionUnion = function (m, o) {
                    var y = Math.min(m.startCol, o.startCol),
                      g = Math.max(m.endCol, o.endCol),
                      r = Math.min(m.startRow, o.startRow),
                      p = Math.max(m.endRow, o.endRow);
                    return i._createRegion(y, g, r, p);
                  }),
                  (i._getRegion = function (m, o) {
                    var y = o.bounds,
                      g = Math.floor(y.min.x / m.bucketWidth),
                      r = Math.floor(y.max.x / m.bucketWidth),
                      p = Math.floor(y.min.y / m.bucketHeight),
                      v = Math.floor(y.max.y / m.bucketHeight);
                    return i._createRegion(g, r, p, v);
                  }),
                  (i._createRegion = function (m, o, y, g) {
                    return {
                      id: m + ',' + o + ',' + y + ',' + g,
                      startCol: m,
                      endCol: o,
                      startRow: y,
                      endRow: g,
                    };
                  }),
                  (i._getBucketId = function (m, o) {
                    return 'C' + m + 'R' + o;
                  }),
                  (i._createBucket = function (m, o) {
                    var y = (m[o] = []);
                    return y;
                  }),
                  (i._bucketAddBody = function (m, o, y) {
                    var g = m.pairs,
                      r = d.id,
                      p = o.length,
                      v;
                    for (v = 0; v < p; v++) {
                      var E = o[v];
                      if (!(y.id === E.id || (y.isStatic && E.isStatic))) {
                        var R = r(y, E),
                          D = g[R];
                        D ? (D[2] += 1) : (g[R] = [y, E, 1]);
                      }
                    }
                    o.push(y);
                  }),
                  (i._bucketRemoveBody = function (m, o, y) {
                    var g = m.pairs,
                      r = d.id,
                      p;
                    o.splice(f.indexOf(o, y), 1);
                    var v = o.length;
                    for (p = 0; p < v; p++) {
                      var E = g[r(y, o[p])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      y = m.pairs,
                      g = f.keys(y),
                      r = g.length,
                      p = [],
                      v;
                    for (v = 0; v < r; v++) ((o = y[g[v]]), o[2] > 0 ? p.push(o) : delete y[g[v]]);
                    return p;
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
                y = h(10),
                g = h(6),
                r = h(0),
                p = h(1);
              (function () {
                ((i.create = function (v, E) {
                  var R = (v ? v.mouse : null) || (E ? E.mouse : null);
                  R ||
                    (v && v.render && v.render.canvas
                      ? (R = c.create(v.render.canvas))
                      : E && E.element
                        ? (R = c.create(E.element))
                        : ((R = c.create()),
                          r.warn(
                            'MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected'
                          )));
                  var D = y.create({
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
                    L = r.extend(w, E);
                  return (
                    m.on(v, 'beforeUpdate', function () {
                      var M = g.allBodies(v.world);
                      (i.update(L, M), i._triggerEvents(L));
                    }),
                    L
                  );
                }),
                  (i.update = function (v, E) {
                    var R = v.mouse,
                      D = v.constraint,
                      w = v.body;
                    if (R.button === 0) {
                      if (D.bodyB) (f.set(D.bodyB, !1), (D.pointA = R.position));
                      else
                        for (var L = 0; L < E.length; L++)
                          if (
                            ((w = E[L]),
                            p.contains(w.bounds, R.position) &&
                              o.canCollide(w.collisionFilter, v.collisionFilter))
                          )
                            for (var M = w.parts.length > 1 ? 1 : 0; M < w.parts.length; M++) {
                              var _ = w.parts[M];
                              if (d.contains(_.vertices, R.position)) {
                                ((D.pointA = R.position),
                                  (D.bodyB = v.body = w),
                                  (D.pointB = {
                                    x: R.position.x - w.position.x,
                                    y: R.position.y - w.position.y,
                                  }),
                                  (D.angleB = w.angle),
                                  f.set(w, !1),
                                  m.trigger(v, 'startdrag', { mouse: R, body: w }));
                                break;
                              }
                            }
                    } else
                      ((D.bodyB = v.body = null),
                        (D.pointB = null),
                        w && m.trigger(v, 'enddrag', { mouse: R, body: w }));
                  }),
                  (i._triggerEvents = function (v) {
                    var E = v.mouse,
                      R = E.sourceEvents;
                    (R.mousemove && m.trigger(v, 'mousemove', { mouse: E }),
                      R.mousedown && m.trigger(v, 'mousedown', { mouse: E }),
                      R.mouseup && m.trigger(v, 'mouseup', { mouse: E }),
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
                ((i.collides = function (y, g) {
                  for (
                    var r = [], p = g.length, v = y.bounds, E = f.collides, R = c.overlaps, D = 0;
                    D < p;
                    D++
                  ) {
                    var w = g[D],
                      L = w.parts.length,
                      M = L === 1 ? 0 : 1;
                    if (R(w.bounds, v))
                      for (var _ = M; _ < L; _++) {
                        var O = w.parts[_];
                        if (R(O.bounds, v)) {
                          var A = E(O, y);
                          if (A) {
                            r.push(A);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (i.ray = function (y, g, r, p) {
                    p = p || 1e-100;
                    for (
                      var v = d.angle(g, r),
                        E = d.magnitude(d.sub(g, r)),
                        R = (r.x + g.x) * 0.5,
                        D = (r.y + g.y) * 0.5,
                        w = m.rectangle(R, D, E, p, { angle: v }),
                        L = i.collides(w, y),
                        M = 0;
                      M < L.length;
                      M += 1
                    ) {
                      var _ = L[M];
                      _.body = _.bodyB = _.bodyA;
                    }
                    return L;
                  }),
                  (i.region = function (y, g, r) {
                    for (var p = [], v = 0; v < y.length; v++) {
                      var E = y[v],
                        R = c.overlaps(E.bounds, g);
                      ((R && !r) || (!R && r)) && p.push(E);
                    }
                    return p;
                  }),
                  (i.point = function (y, g) {
                    for (var r = [], p = 0; p < y.length; p++) {
                      var v = y[p];
                      if (c.contains(v.bounds, g))
                        for (var E = v.parts.length === 1 ? 0 : 1; E < v.parts.length; E++) {
                          var R = v.parts[E];
                          if (c.contains(R.bounds, g) && o.contains(R.vertices, g)) {
                            r.push(v);
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
                y = h(2),
                g = h(14);
              (function () {
                var r, p;
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
                  (p =
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
                        v(M, O),
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
                    p(M.frameRequestId);
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
                      var H = _[z],
                        G = H.bounds ? H.bounds.min : H.min || H.position || H,
                        J = H.bounds ? H.bounds.max : H.max || H.position || H;
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
                      de = 1,
                      j = 1;
                    (se > ne ? (j = se / ne) : (de = ne / se),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = B.min.x),
                      (M.bounds.max.x = B.min.x + te * de),
                      (M.bounds.min.y = B.min.y),
                      (M.bounds.max.y = B.min.y + ee * j),
                      A &&
                        ((M.bounds.min.x += te * 0.5 - te * de * 0.5),
                        (M.bounds.max.x += te * 0.5 - te * de * 0.5),
                        (M.bounds.min.y += ee * 0.5 - ee * j * 0.5),
                        (M.bounds.max.y += ee * 0.5 - ee * j * 0.5)),
                      (M.bounds.min.x -= O.x),
                      (M.bounds.max.x -= O.x),
                      (M.bounds.min.y -= O.y),
                      (M.bounds.max.y -= O.y),
                      M.mouse &&
                        (g.setScale(M.mouse, {
                          x: (M.bounds.max.x - M.bounds.min.x) / M.canvas.width,
                          y: (M.bounds.max.y - M.bounds.min.y) / M.canvas.height,
                        }),
                        g.setOffset(M.mouse, M.bounds.min)));
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
                      H = M.context,
                      G = M.options,
                      J = M.timing,
                      te = c.allBodies(B),
                      ee = c.allConstraints(B),
                      V = G.wireframes ? G.wireframeBackground : G.background,
                      K = [],
                      ne = [],
                      se,
                      de = { timestamp: A.timing.timestamp };
                    if (
                      (o.trigger(M, 'beforeRender', de),
                      M.currentBackground !== V && L(M, V),
                      (H.globalCompositeOperation = 'source-in'),
                      (H.fillStyle = 'transparent'),
                      H.fillRect(0, 0, z.width, z.height),
                      (H.globalCompositeOperation = 'source-over'),
                      G.hasBounds)
                    ) {
                      for (se = 0; se < te.length; se++) {
                        var j = te[se];
                        m.overlaps(j.bounds, M.bounds) && K.push(j);
                      }
                      for (se = 0; se < ee.length; se++) {
                        var F = ee[se],
                          le = F.bodyA,
                          ae = F.bodyB,
                          oe = F.pointA,
                          ie = F.pointB;
                        (le && (oe = y.add(le.position, F.pointA)),
                          ae && (ie = y.add(ae.position, F.pointB)),
                          !(!oe || !ie) &&
                            (m.contains(M.bounds, oe) || m.contains(M.bounds, ie)) &&
                            ne.push(F));
                      }
                      (i.startViewTransform(M),
                        M.mouse &&
                          (g.setScale(M.mouse, {
                            x: (M.bounds.max.x - M.bounds.min.x) / M.options.width,
                            y: (M.bounds.max.y - M.bounds.min.y) / M.options.height,
                          }),
                          g.setOffset(M.mouse, M.bounds.min)));
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
                      ? i.bodies(M, K, H)
                      : (G.showConvexHulls && i.bodyConvexHulls(M, K, H),
                        i.bodyWireframes(M, K, H)),
                      G.showBounds && i.bodyBounds(M, K, H),
                      (G.showAxes || G.showAngleIndicator) && i.bodyAxes(M, K, H),
                      G.showPositions && i.bodyPositions(M, K, H),
                      G.showVelocity && i.bodyVelocity(M, K, H),
                      G.showIds && i.bodyIds(M, K, H),
                      G.showSeparations && i.separations(M, A.pairs.list, H),
                      G.showCollisions && i.collisions(M, A.pairs.list, H),
                      G.showVertexNumbers && i.vertexNumbers(M, K, H),
                      G.showMousePosition && i.mousePosition(M, M.mouse, H),
                      i.constraints(ne, H),
                      G.hasBounds && i.endViewTransform(M),
                      o.trigger(M, 'afterRender', de),
                      (J.lastElapsed = f.now() - O));
                  }),
                  (i.stats = function (M, _, O) {
                    for (
                      var A = M.engine,
                        B = A.world,
                        z = c.allBodies(B),
                        H = 0,
                        G = 55,
                        J = 44,
                        te = 0,
                        ee = 0,
                        V = 0;
                      V < z.length;
                      V += 1
                    )
                      H += z[V].parts.length;
                    var K = {
                      Part: H,
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
                      H = A.timestampElapsedHistory,
                      G = A.engineDeltaHistory,
                      J = A.engineUpdatesHistory,
                      te = A.engineElapsedHistory,
                      ee = O.timing.lastUpdatesPerFrame,
                      V = O.timing.lastDelta,
                      K = E(B),
                      ne = E(z),
                      se = E(G),
                      de = E(J),
                      j = E(te),
                      F = E(H),
                      le = F / K || 0,
                      ae = Math.round(K / V),
                      oe = 1e3 / K || 0,
                      ie = 4,
                      ve = 12,
                      be = 60,
                      Ee = 34,
                      Xe = 10,
                      We = 69;
                    ((_.fillStyle = '#0e0f19'),
                      _.fillRect(0, 50, ve * 5 + be * 6 + 22, Ee),
                      i.status(
                        _,
                        Xe,
                        We,
                        be,
                        ie,
                        B.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function (ke) {
                          return B[ke] / K - 1;
                        }
                      ),
                      i.status(
                        _,
                        Xe + ve + be,
                        We,
                        be,
                        ie,
                        G.length,
                        V.toFixed(2) + ' dt',
                        i._goodDelta / V,
                        function (ke) {
                          return G[ke] / se - 1;
                        }
                      ),
                      i.status(
                        _,
                        Xe + (ve + be) * 2,
                        We,
                        be,
                        ie,
                        J.length,
                        ee + ' upf',
                        Math.pow(f.clamp(de / ae || 1, 0, 1), 4),
                        function (ke) {
                          return J[ke] / de - 1;
                        }
                      ),
                      i.status(
                        _,
                        Xe + (ve + be) * 3,
                        We,
                        be,
                        ie,
                        te.length,
                        j.toFixed(2) + ' ut',
                        1 - (ee * j) / i._goodFps,
                        function (ke) {
                          return te[ke] / j - 1;
                        }
                      ),
                      i.status(
                        _,
                        Xe + (ve + be) * 4,
                        We,
                        be,
                        ie,
                        z.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function (ke) {
                          return z[ke] / ne - 1;
                        }
                      ),
                      i.status(
                        _,
                        Xe + (ve + be) * 5,
                        We,
                        be,
                        ie,
                        H.length,
                        le.toFixed(2) + ' x',
                        le * le * le,
                        function (ke) {
                          return (H[ke] / B[ke] / le || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (M, _, O, A, B, z, H, G, J) {
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
                      M.fillText(H, _ + A, O - 5));
                  }),
                  (i.constraints = function (M, _) {
                    for (var O = _, A = 0; A < M.length; A++) {
                      var B = M[A];
                      if (!(!B.render.visible || !B.pointA || !B.pointB)) {
                        var z = B.bodyA,
                          H = B.bodyB,
                          G,
                          J;
                        if (
                          (z ? (G = y.add(z.position, B.pointA)) : (G = B.pointA),
                          B.render.type === 'pin')
                        )
                          (O.beginPath(), O.arc(G.x, G.y, 3, 0, 2 * Math.PI), O.closePath());
                        else {
                          if (
                            (H ? (J = y.add(H.position, B.pointB)) : (J = B.pointB),
                            O.beginPath(),
                            O.moveTo(G.x, G.y),
                            B.render.type === 'spring')
                          )
                            for (
                              var te = y.sub(J, G),
                                ee = y.perp(y.normalise(te)),
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
                      H,
                      G,
                      J,
                      te;
                    for (J = 0; J < _.length; J++)
                      if (((H = _[J]), !!H.render.visible)) {
                        for (te = H.parts.length > 1 ? 1 : 0; te < H.parts.length; te++)
                          if (((G = H.parts[te]), !!G.render.visible)) {
                            if (
                              (B.showSleeping && H.isSleeping
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
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.render.visible))
                        for (te = z.parts.length > 1 ? 1 : 0; te < z.parts.length; te++) {
                          for (
                            H = z.parts[te], A.moveTo(H.vertices[0].x, H.vertices[0].y), J = 1;
                            J < H.vertices.length;
                            J++
                          )
                            (!H.vertices[J - 1].isInternal || B
                              ? A.lineTo(H.vertices[J].x, H.vertices[J].y)
                              : A.moveTo(H.vertices[J].x, H.vertices[J].y),
                              H.vertices[J].isInternal &&
                                !B &&
                                A.moveTo(
                                  H.vertices[(J + 1) % H.vertices.length].x,
                                  H.vertices[(J + 1) % H.vertices.length].y
                                ));
                          A.lineTo(H.vertices[0].x, H.vertices[0].y);
                        }
                    ((A.lineWidth = 1),
                      (A.strokeStyle = M.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (i.bodyConvexHulls = function (M, _, O) {
                    var A = O,
                      B,
                      z,
                      H;
                    for (A.beginPath(), z = 0; z < _.length; z++)
                      if (((B = _[z]), !(!B.render.visible || B.parts.length === 1))) {
                        for (
                          A.moveTo(B.vertices[0].x, B.vertices[0].y), H = 1;
                          H < B.vertices.length;
                          H++
                        )
                          A.lineTo(B.vertices[H].x, B.vertices[H].y);
                        A.lineTo(B.vertices[0].x, B.vertices[0].y);
                      }
                    ((A.lineWidth = 1), (A.strokeStyle = 'rgba(255,255,255,0.2)'), A.stroke());
                  }),
                  (i.vertexNumbers = function (M, _, O) {
                    var A = O,
                      B,
                      z,
                      H;
                    for (B = 0; B < _.length; B++) {
                      var G = _[B].parts;
                      for (H = G.length > 1 ? 1 : 0; H < G.length; H++) {
                        var J = G[H];
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
                      var H = _[z];
                      if (H.render.visible)
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
                      H,
                      G,
                      J;
                    for (A.beginPath(), H = 0; H < _.length; H++) {
                      var te = _[H],
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
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.render.visible))
                        for (J = 0; J < z.parts.length; J++)
                          ((H = z.parts[J]),
                            A.arc(H.position.x, H.position.y, 3, 0, 2 * Math.PI, !1),
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
                        var H = d.getVelocity(z);
                        (A.moveTo(z.position.x, z.position.y),
                          A.lineTo(z.position.x + H.x, z.position.y + H.y));
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
                        var H = _[B].parts;
                        for (z = H.length > 1 ? 1 : 0; z < H.length; z++) {
                          var G = H[z];
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
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < _.length; G++)
                      if (((z = _[G]), !!z.isActive))
                        for (H = z.collision, J = 0; J < z.contactCount; J++) {
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
                      if (((z = _[G]), !!z.isActive && ((H = z.collision), z.contactCount > 0))) {
                        var V = z.contacts[0].vertex.x,
                          K = z.contacts[0].vertex.y;
                        (z.contactCount === 2 &&
                          ((V = (z.contacts[0].vertex.x + z.contacts[1].vertex.x) / 2),
                          (K = (z.contacts[0].vertex.y + z.contacts[1].vertex.y) / 2)),
                          H.bodyB === H.supports[0].body || H.bodyA.isStatic === !0
                            ? A.moveTo(V - H.normal.x * 8, K - H.normal.y * 8)
                            : A.moveTo(V + H.normal.x * 8, K + H.normal.y * 8),
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
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), te = 0; te < _.length; te++)
                      if (((z = _[te]), !!z.isActive)) {
                        ((H = z.collision), (G = H.bodyA), (J = H.bodyB));
                        var ee = 1;
                        (!J.isStatic && !G.isStatic && (ee = 0.5),
                          J.isStatic && (ee = 0),
                          A.moveTo(J.position.x, J.position.y),
                          A.lineTo(
                            J.position.x - H.penetration.x * ee,
                            J.position.y - H.penetration.y * ee
                          ),
                          (ee = 1),
                          !J.isStatic && !G.isStatic && (ee = 0.5),
                          G.isStatic && (ee = 0),
                          A.moveTo(G.position.x, G.position.y),
                          A.lineTo(
                            G.position.x + H.penetration.x * ee,
                            G.position.y + H.penetration.y * ee
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
                      var H = A.bounds.max.x - A.bounds.min.x,
                        G = A.bounds.max.y - A.bounds.min.y,
                        J = H / A.options.width,
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
                var v = function (M, _) {
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
                  L = function (M, _) {
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
                    var y = {
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
                      g = c.extend(y, o);
                    return ((g.fps = 0), g);
                  }),
                  (i.run = function (o, y) {
                    return (
                      (o.timeBuffer = i._frameDeltaFallback),
                      (function g(r) {
                        ((o.frameRequestId = i._onNextFrame(o, g)),
                          r && o.enabled && i.tick(o, y, r));
                      })(),
                      o
                    );
                  }),
                  (i.tick = function (o, y, g) {
                    var r = c.now(),
                      p = o.delta,
                      v = 0,
                      E = g - o.timeLastTick;
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
                      (o.timeLastTick = g),
                      (o.timeBuffer += o.frameDelta),
                      (o.timeBuffer = c.clamp(
                        o.timeBuffer,
                        0,
                        o.frameDelta + p * i._timeBufferMargin
                      )),
                      (o.lastUpdatesDeferred = 0));
                    var L = o.maxUpdates || Math.ceil(o.maxFrameTime / p),
                      M = { timestamp: y.timing.timestamp };
                    (d.trigger(o, 'beforeTick', M), d.trigger(o, 'tick', M));
                    for (var _ = c.now(); p > 0 && o.timeBuffer >= p * i._timeBufferMargin; ) {
                      (d.trigger(o, 'beforeUpdate', M),
                        f.update(y, p),
                        d.trigger(o, 'afterUpdate', M),
                        (o.timeBuffer -= p),
                        (v += 1));
                      var O = c.now() - r,
                        A = c.now() - _,
                        B = O + (i._elapsedNextEstimate * A) / v;
                      if (v >= L || B > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / p - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((y.timing.lastUpdatesPerFrame = v),
                      d.trigger(o, 'afterTick', M),
                      o.frameDeltaHistory.length >= 100 &&
                        (o.lastUpdatesDeferred && Math.round(o.frameDelta / p) > L
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
                  (i._onNextFrame = function (o, y) {
                    if (typeof window < 'u' && window.requestAnimationFrame)
                      o.frameRequestId = window.requestAnimationFrame(y);
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
                  for (var y = 0, g = o.length, r = 0; r < g; r += 1) y += o[r];
                  return y / g || 0;
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
                    y,
                    g,
                    r,
                    p,
                    v,
                    E,
                    R,
                    D,
                    w = [],
                    L,
                    M,
                    _ = 0,
                    O = 0,
                    A = 0;
                  c = c || 15;
                  var B = function (H, G, J) {
                      var te = J % 2 === 1 && J > 1;
                      if (!R || H != R.x || G != R.y) {
                        R && te ? ((L = R.x), (M = R.y)) : ((L = 0), (M = 0));
                        var ee = { x: L + H, y: M + G };
                        ((te || !R) && (R = ee), w.push(ee), (O = L + H), (A = M + G));
                      }
                    },
                    z = function (H) {
                      var G = H.pathSegTypeAsLetter.toUpperCase();
                      if (G !== 'Z') {
                        switch (G) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((O = H.x), (A = H.y));
                            break;
                          case 'H':
                            O = H.x;
                            break;
                          case 'V':
                            A = H.y;
                            break;
                        }
                        B(O, A, H.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(f), y = f.getTotalLength(), p = [], m = 0;
                    m < f.pathSegList.numberOfItems;
                    m += 1
                  )
                    p.push(f.pathSegList.getItem(m));
                  for (v = p.concat(); _ < y; ) {
                    if (((D = f.getPathSegAtLength(_)), (r = p[D]), r != E)) {
                      for (; v.length && v[0] != r; ) z(v.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = f.getPointAtLength(_)), B(g.x, g.y, 0));
                        break;
                    }
                    _ += c;
                  }
                  for (m = 0, o = v.length; m < o; ++m) z(v[m]);
                  return w;
                }),
                  (i._svgPathToAbsolute = function (f) {
                    for (
                      var c,
                        m,
                        o,
                        y,
                        g,
                        r,
                        p = f.pathSegList,
                        v = 0,
                        E = 0,
                        R = p.numberOfItems,
                        D = 0;
                      D < R;
                      ++D
                    ) {
                      var w = p.getItem(D),
                        L = w.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(L)) ('x' in w && (v = w.x), 'y' in w && (E = w.y));
                      else
                        switch (
                          ('x1' in w && (o = v + w.x1),
                          'x2' in w && (g = v + w.x2),
                          'y1' in w && (y = E + w.y1),
                          'y2' in w && (r = E + w.y2),
                          'x' in w && (v += w.x),
                          'y' in w && (E += w.y),
                          L)
                        ) {
                          case 'm':
                            p.replaceItem(f.createSVGPathSegMovetoAbs(v, E), D);
                            break;
                          case 'l':
                            p.replaceItem(f.createSVGPathSegLinetoAbs(v, E), D);
                            break;
                          case 'h':
                            p.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(v), D);
                            break;
                          case 'v':
                            p.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), D);
                            break;
                          case 'c':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicAbs(v, E, o, y, g, r), D);
                            break;
                          case 's':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(v, E, g, r), D);
                            break;
                          case 'q':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(v, E, o, y), D);
                            break;
                          case 't':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(v, E), D);
                            break;
                          case 'a':
                            p.replaceItem(
                              f.createSVGPathSegArcAbs(
                                v,
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
                            ((v = c), (E = m));
                            break;
                        }
                      (L == 'M' || L == 'm') && ((c = v), (m = E));
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
      })($u)),
    $u.exports
  );
}
var nS = tS();
const we = h0(nS),
  cn = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  lS = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  aS = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  iS = {
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
  uS = {
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
  Ph = (s, b) => {
    const T = String(b).padStart(2, '0');
    return `images/${s}/level${T}.png`;
  },
  rS = 256,
  dh = {
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
  sS = (s) => (s * (s + 1)) / 2,
  cS = (s) => ({
    id: s,
    level: s,
    name: iS[s],
    theme: uS[s],
    radius: lS[s],
    restitution: aS[s],
    friction: 0.3,
    density: 0.001,
    score: sS(s),
    svgPath: Ph(kc, s),
    color: dh[s].color,
    glowColor: dh[s].glow,
  }),
  Vl = 10,
  nr = Object.fromEntries(Array.from({ length: Vl }, (s, b) => b + 1).map((s) => [s, cS(s)]));
Array.from({ length: Vl }, (s, b) => nr[b + 1]);
const oS = 3,
  fS = 360,
  dS = (s) => Math.min(1, s / fS),
  mh = new Map(),
  _a = (s, b, T = kc) => {
    const x = `${s}|${b}|${T}`,
      h = mh.get(x);
    if (h) return h;
    const i = nr[s],
      d = { ...i, radius: i.radius * dS(b), svgPath: Ph(T, s) };
    return (mh.set(x, d), d);
  },
  xn = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  Zn = { wall: 1, item: 2, magnetTarget: 4 },
  Ih = Zn.wall | Zn.item | Zn.magnetTarget,
  mS = Zn.wall | Zn.magnetTarget,
  ev = typeof window < 'u' && typeof window.localStorage < 'u',
  lr = (s) => {
    if (!ev) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  ar = (s, b) => {
    if (ev)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  hS = () => {
    const s = lr(cn.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  vS = (s) => {
    ar(cn.storageKeys.bestScore, String(s));
  },
  gS = () => {
    const s = lr(cn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  yS = (s) => {
    const b = [s, ...gS()].slice(0, cn.maxScoreHistory);
    return (ar(cn.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  pS = () => {
    const s = lr(cn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  SS = (s) => {
    ar(cn.storageKeys.isSoundOn, String(s));
  },
  xS = () => {
    const s = lr(cn.storageKeys.themeId);
    return Qh(s) ? s : kc;
  },
  ES = (s) => {
    ar(cn.storageKeys.themeId, s);
  },
  bS = () => {
    const [s, b] = N.useState(0),
      [T, x] = N.useState(0),
      [h, i] = N.useState(!1),
      d = N.useRef(0),
      f = N.useRef(0);
    N.useEffect(() => {
      const y = hS();
      ((f.current = y), x(y));
    }, []);
    const c = N.useCallback((y) => {
        ((d.current += y), b(d.current));
      }, []),
      m = N.useCallback(() => {
        ((d.current = 0), b(0), i(!1));
      }, []),
      o = N.useCallback(() => {
        const y = d.current,
          g = y > f.current;
        return (
          g && ((f.current = y), vS(y), x(y)),
          yS(y),
          i(g),
          { isNewRecord: g, finalScore: y }
        );
      }, []);
    return { score: s, bestScore: T, isNewRecord: h, add: c, reset: m, finalize: o };
  },
  TS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  MS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  CS = 0.7,
  RS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  AS = () => {
    const [s, b] = N.useState(!0),
      T = N.useRef(null),
      x = N.useRef({});
    (N.useEffect(() => {
      b(pS());
    }, []),
      N.useEffect(() => {
        const d = RS();
        if (!d) return;
        const f = new d();
        T.current = f;
        let c = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, y] of Object.entries(MS))
              try {
                const r = await (await fetch(TS(y))).arrayBuffer();
                if (c) return;
                const p = await f.decodeAudioData(r);
                if (c) return;
                m[o] = p;
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
          return (SS(f), f);
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
          ((o.gain.value = CS), m.connect(o).connect(f.destination), m.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: h, play: i };
  },
  hh = (s, b, T, x) => {
    const h = we.Bodies.circle(b, T, s.radius, {
      restitution: s.restitution,
      friction: s.friction,
      density: s.density,
      label: `item-${s.level}`,
      collisionFilter: { category: Zn.item, mask: Ih },
    });
    return ((h.plugin.itemData = { level: s.level, consumed: !1, droppedAt: x }), h);
  },
  xl = (s) => s.plugin.itemData,
  _S = (s, b) => {
    const T = xn.wallThickness,
      x = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: Zn.wall },
      },
      h = we.Bodies.rectangle(s / 2, b + T / 2, s + T * 2, T, x),
      i = we.Bodies.rectangle(-T / 2, b / 2, T, b * 2, x),
      d = we.Bodies.rectangle(s + T / 2, b / 2, T, b * 2, x),
      f = we.Bodies.rectangle(s / 2, -T / 2, s + T * 2, T, x);
    return { ground: h, leftWall: i, rightWall: d, ceiling: f };
  },
  OS = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  DS = (s) => (s < 2 || s > Vl ? 0 : nr[s].score),
  zS = () => nr[Vl].score,
  vh = new Map(),
  tv = (s) => {
    const b = vh.get(s);
    if (b) return b;
    const T = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (vh.set(s, T), T);
  },
  wc = (s, b) => {
    const T = (b.radius * 2) / rS;
    s.render.sprite = { texture: tv(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  gh = new Set(),
  yh = (s) => {
    for (let b = 1; b <= Vl; b += 1) {
      const T = _a(b, 1, s),
        x = tv(T.svgPath);
      if (gh.has(x)) continue;
      gh.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  wS = ({ fieldWidth: s, fieldHeight: b }) => {
    const T = N.useRef(null),
      x = N.useRef(null),
      h = N.useRef(null),
      i = N.useRef(null),
      d = N.useRef(null),
      [f, c] = N.useState('idle'),
      [m, o] = N.useState(null),
      [y, g] = N.useState(null),
      r = N.useRef(null),
      p = N.useRef(null),
      v = N.useCallback((ue) => {
        ((r.current = ue), o(ue));
      }, []),
      E = N.useCallback((ue) => {
        ((p.current = ue), g(ue));
      }, []),
      R = N.useRef(!0),
      D = N.useRef(0),
      w = N.useRef('idle'),
      L = N.useRef(null),
      M = N.useRef(s),
      _ = N.useRef(b),
      [O, A] = N.useState(() => xS()),
      B = N.useRef(O);
    B.current = O;
    const z = bS(),
      H = AS(),
      G = N.useRef(z.add);
    G.current = z.add;
    const J = N.useRef(H.play);
    J.current = H.play;
    const te = N.useRef(z.finalize);
    te.current = z.finalize;
    const [ee, V] = N.useState(0),
      K = N.useRef(0),
      ne = N.useCallback((ue) => {
        ((K.current = ue), V(ue));
      }, []),
      se = N.useCallback(
        (ue) => {
          const xe = Math.min(rt.gaugeMax, K.current + ue);
          xe !== K.current && ne(xe);
        },
        [ne]
      ),
      de = N.useRef(se);
    de.current = se;
    const [j, F] = N.useState(!1),
      [le, ae] = N.useState(!1),
      oe = N.useRef(!1),
      [ie, ve] = N.useState(!1),
      be = N.useRef(!1),
      Ee = N.useRef(null),
      Xe = N.useRef(null),
      We = N.useRef(null),
      ke = N.useRef(null),
      bn = N.useRef(new Set()),
      Bt = N.useCallback((ue) => {
        ((ue.collisionFilter.category = Zn.magnetTarget),
          (ue.collisionFilter.mask = mS),
          bn.current.add(ue));
      }, []),
      on = N.useCallback(() => {
        for (const ue of bn.current)
          ((ue.collisionFilter.category = Zn.item), (ue.collisionFilter.mask = Ih));
        bn.current.clear();
      }, []),
      Tn = N.useCallback(() => {
        (on(),
          (We.current = null),
          (ke.current = null),
          Ee.current === 'magnet' && (Ee.current = null));
      }, [on]),
      Fn = N.useRef(Tn);
    Fn.current = Tn;
    const Rt = N.useRef(null),
      [bt, nn] = N.useState(null),
      Tt = N.useRef(null),
      st = N.useRef(new Set()),
      fn = N.useCallback(() => {
        const ue = Math.floor(Math.random() * oS) + 1;
        return _a(ue, M.current, B.current);
      }, []);
    N.useEffect(() => {
      const ue = T.current;
      if (!ue) return;
      const xe = M.current,
        Re = _.current,
        pe = we.Engine.create({ gravity: { x: 0, y: xn.gravityY } }),
        he = we.Render.create({
          element: ue,
          engine: pe,
          options: {
            width: xe,
            height: Re,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: Te, leftWall: He, rightWall: Pe, ceiling: Qe } = _S(xe, Re);
      ([Te, He, Pe, Qe].forEach((ht) => {
        ht.render.visible = !1;
      }),
        we.World.add(pe.world, [Te, He, Pe, Qe]),
        we.Render.run(he));
      const Ke = we.Runner.create();
      (we.Runner.run(Ke, pe), (x.current = pe), (h.current = he), (i.current = Ke));
      for (const ht of Jc) yh(ht.id);
      const tt = () => {
        document.hidden
          ? (we.Runner.stop(Ke), we.Render.stop(he))
          : (we.Render.run(he), we.Runner.run(Ke, pe));
      };
      document.addEventListener('visibilitychange', tt);
      const ft = st.current;
      return () => {
        (document.removeEventListener('visibilitychange', tt),
          we.Runner.stop(Ke),
          we.Render.stop(he),
          we.World.clear(pe.world, !1),
          we.Engine.clear(pe),
          he.canvas.parentNode && he.canvas.parentNode.removeChild(he.canvas),
          (he.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          ft.clear());
      };
    }, []);
    const ct = N.useCallback((ue, xe) => {
      var tt;
      const Re = x.current;
      if (!Re) return;
      const pe = xl(ue),
        he = xl(xe);
      if (!pe || !he || pe.consumed || he.consumed || pe.level !== he.level) return;
      ((pe.consumed = !0), (he.consumed = !0));
      const Te = pe.level + 1,
        He = OS(ue, xe);
      (we.World.remove(Re.world, [ue, xe]), st.current.delete(ue), st.current.delete(xe));
      let Pe = 0,
        Qe = !1,
        Ke = L1(Te);
      if (Te > Vl)
        ((Pe = zS()), (Qe = !0), (Ke += rt.bonusOnSpecialElimination), J.current('special'));
      else {
        const ft = _a(Te, M.current, B.current),
          ht = hh(ft, He.x, He.y, performance.now());
        (wc(ht, ft),
          we.World.add(Re.world, ht),
          st.current.add(ht),
          (Pe = DS(Te)),
          (Qe = Te === Vl),
          Qe && (Ke += rt.bonusOnLevel10Created),
          J.current(Qe ? 'special' : 'merge'));
      }
      (G.current(Pe),
        de.current(Ke),
        (tt = d.current) == null || tt.add({ x: He.x, y: He.y, score: Pe, isSpecial: Qe }));
    }, []);
    (N.useEffect(() => {
      const ue = x.current;
      if (!ue) return;
      const xe = (Re) => {
        for (const pe of Re.pairs) ct(pe.bodyA, pe.bodyB);
      };
      return (
        we.Events.on(ue, 'collisionStart', xe),
        () => {
          we.Events.off(ue, 'collisionStart', xe);
        }
      );
    }, [ct]),
      N.useEffect(() => {
        const ue = x.current;
        if (!ue) return;
        const xe = xn.gameOverLineOffset;
        let Re = 0;
        const pe = () => {
            ((Rt.current = null), Tt.current !== null && ((Tt.current = null), nn(null)));
          },
          he = () => {
            if (We.current !== null)
              if (performance.now() >= We.current) Fn.current();
              else {
                const ft = [];
                for (const ht of bn.current) {
                  const vn = xl(ht);
                  vn && !vn.consumed && ft.push(ht);
                }
                if (ft.length >= 2) {
                  let ht = 0,
                    vn = 0;
                  for (const qt of ft) ((ht += qt.position.x), (vn += qt.position.y));
                  ((ht /= ft.length), (vn /= ft.length));
                  for (const qt of ft) {
                    const wa = ht - qt.position.x,
                      Na = vn - qt.position.y,
                      Xt = Math.hypot(wa, Na);
                    if (Xt < 1) continue;
                    const nt = rt.magnet.forceMagnitude * qt.mass;
                    we.Body.applyForce(qt, qt.position, { x: (wa / Xt) * nt, y: (Na / Xt) * nt });
                  }
                } else Fn.current();
              }
            if (w.current !== 'playing') return;
            if (be.current) {
              Rt.current !== null &&
                ((Rt.current = null), Tt.current !== null && ((Tt.current = null), nn(null)));
              return;
            }
            if (((Re = (Re + 1) % 6), Re !== 0)) return;
            const Te = performance.now();
            let He = !1;
            for (const tt of st.current) {
              const ft = xl(tt);
              if (
                !(!ft || ft.consumed) &&
                !(Te - ft.droppedAt < xn.gameOverGracePeriodMs) &&
                !(Math.abs(tt.velocity.y) > xn.restingVelocityThreshold) &&
                tt.position.y - tt.circleRadius < xe
              ) {
                He = !0;
                break;
              }
            }
            if (!He) {
              pe();
              return;
            }
            Rt.current === null && (Rt.current = Te);
            const Pe = Te - Rt.current,
              Qe = xn.gameOverDangerLimitMs;
            if (Pe >= Qe) {
              (pe(), (w.current = 'gameover'), c('gameover'));
              const tt = te.current();
              J.current(tt.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Ke = Math.max(1, Math.ceil((Qe - Pe) / 1e3));
            Ke !== Tt.current && ((Tt.current = Ke), nn(Ke));
          };
        return (
          we.Events.on(ue, 'afterUpdate', he),
          () => {
            we.Events.off(ue, 'afterUpdate', he);
          }
        );
      }, []),
      N.useEffect(() => {
        if (x.current) {
          yh(O);
          for (const pe of st.current) {
            const he = xl(pe);
            if (!he || he.consumed) continue;
            const Te = _a(he.level, M.current, O);
            wc(pe, Te);
          }
        }
        const xe = r.current ? _a(r.current.level, M.current, O) : null,
          Re = p.current ? _a(p.current.level, M.current, O) : null;
        (v(xe), E(Re));
      }, [O, v, E]));
    const ql = N.useCallback((ue) => {
        (A(ue), ES(ue));
      }, []),
      St = N.useCallback((ue) => {
        ((oe.current = ue), ae(ue));
      }, []),
      dn = N.useCallback(
        (ue) => {
          ne(Math.max(0, K.current - ue));
        },
        [ne]
      ),
      Mn = N.useCallback(() => {
        if (!x.current) return;
        Ee.current = 'shake';
        const { impulseMin: xe, impulseMax: Re, upwardBias: pe } = rt.shake;
        for (const he of st.current) {
          const Te = xl(he);
          if (!Te || Te.consumed) continue;
          const He = Math.random() * Math.PI * 2,
            Pe = xe + Math.random() * (Re - xe),
            Qe = Math.cos(He) * Pe * he.mass,
            Ke = (Math.sin(He) * Pe - pe) * he.mass;
          we.Body.applyForce(he, he.position, { x: Qe, y: Ke });
        }
        (J.current('special'), (Ee.current = null));
      }, []),
      Cn = N.useCallback(() => {
        const ue = x.current;
        if (!ue || Xe.current !== null) return;
        ((Ee.current = 'gravityFlip'), (be.current = !0));
        const xe = xn.gravityY;
        ue.gravity.y = xe * rt.gravityFlip.multiplier;
        const Re = new Map(),
          pe = new Map();
        for (const he of st.current)
          (Re.set(he, he.frictionAir),
            pe.set(he, he.restitution),
            (he.frictionAir = rt.gravityFlip.frictionAir),
            we.Body.setVelocity(he, { x: he.velocity.x, y: rt.gravityFlip.liftKickVelocity }));
        (ve(!0),
          J.current('special'),
          (Xe.current = window.setTimeout(() => {
            const he = x.current;
            he && (he.gravity.y = xe * rt.gravityFlip.slamGravityMultiplier);
            for (const Te of st.current)
              ((Te.frictionAir = rt.gravityFlip.slamFrictionAir),
                pe.has(Te) || pe.set(Te, Te.restitution),
                (Te.restitution = rt.gravityFlip.slamRestitution),
                we.Body.setVelocity(Te, { x: Te.velocity.x, y: rt.gravityFlip.slamKickVelocity }));
            (ve(!1),
              J.current('special'),
              (Xe.current = window.setTimeout(() => {
                const Te = x.current;
                Te && (Te.gravity.y = xe);
                for (const He of st.current)
                  ((He.frictionAir = Re.get(He) ?? 0.01), (He.restitution = pe.get(He) ?? 0.4));
                ((Xe.current = null),
                  (be.current = !1),
                  Ee.current === 'gravityFlip' && (Ee.current = null));
              }, rt.gravityFlip.slamDurationMs)));
          }, rt.gravityFlip.durationMs)));
      }, []),
      mn = N.useCallback(() => {
        ((Ee.current = 'magnet'), St(!0));
      }, [St]),
      ir = N.useCallback(() => {
        oe.current && (St(!1), (Ee.current = null));
      }, [St]),
      ur = N.useCallback(
        (ue, xe) => {
          if (!oe.current) return;
          const Re = Array.from(st.current),
            pe = we.Query.point(Re, { x: ue, y: xe });
          if (pe.length === 0) return;
          const he = pe[0],
            Te = xl(he);
          if (!Te) return;
          const He = Re.filter((Qe) => {
            if (Qe === he) return !1;
            const Ke = xl(Qe);
            return !!Ke && !Ke.consumed && Ke.level === Te.level;
          });
          if (He.length === 0) return;
          const Pe = He[Math.floor(Math.random() * He.length)];
          (Bt(he),
            Bt(Pe),
            (ke.current = Te.level),
            (We.current = performance.now() + rt.magnet.durationMs),
            St(!1),
            J.current('special'),
            dn(Oi('magnet')));
        },
        [dn, St, Bt]
      ),
      El = N.useCallback(() => {
        K.current < rt.segmentMax || (w.current === 'playing' && F(!0));
      }, []),
      Mt = N.useCallback(() => {
        F(!1);
      }, []),
      hn = N.useCallback(
        (ue) => {
          const xe = Oi(ue);
          K.current < xe ||
            (F(!1),
            ue === 'shake'
              ? (Mn(), dn(xe))
              : ue === 'gravityFlip'
                ? (Cn(), dn(xe))
                : ue === 'magnet' && mn());
        },
        [Mn, Cn, mn, dn]
      ),
      xt = N.useCallback(() => {
        Xe.current !== null && (window.clearTimeout(Xe.current), (Xe.current = null));
        const ue = x.current;
        (ue && (ue.gravity.y = xn.gravityY),
          ve(!1),
          (be.current = !1),
          on(),
          (We.current = null),
          (ke.current = null),
          (Ee.current = null),
          F(!1),
          St(!1),
          ne(0));
      }, [St, ne, on]),
      rr = N.useCallback(
        (ue) => {
          const xe = x.current;
          if (!xe || w.current !== 'playing' || !R.current) return;
          const Re = r.current;
          if (!Re) return;
          const pe = performance.now();
          if (pe - D.current < cn.dropCooldownMs) return;
          const he = Math.max(0, Math.min(1, ue)),
            Te = Re.radius + xn.wallThickness / 2,
            He = Te,
            Pe = M.current - Te,
            Qe = He + he * (Pe - He),
            Ke = Re.radius + 4,
            tt = hh(Re, Qe, Ke, pe);
          (wc(tt, Re),
            we.World.add(xe.world, tt),
            st.current.add(tt),
            J.current('drop'),
            (R.current = !1),
            (D.current = pe),
            L.current !== null && window.clearTimeout(L.current),
            (L.current = window.setTimeout(() => {
              ((L.current = null),
                w.current === 'playing' && (v(p.current), E(fn()), (R.current = !0)));
            }, cn.dropCooldownMs)));
        },
        [fn, v, E]
      ),
      za = N.useCallback(() => {
        var ue;
        (z.reset(),
          (ue = d.current) == null || ue.clear(),
          xt(),
          (Rt.current = null),
          (Tt.current = null),
          nn(null),
          v(fn()),
          E(fn()),
          (R.current = !0),
          (D.current = 0),
          (w.current = 'playing'),
          c('playing'));
      }, [z, fn, xt, v, E]),
      sr = N.useCallback(() => {
        const ue = x.current;
        if (ue) {
          for (const xe of st.current) we.World.remove(ue.world, xe);
          st.current.clear();
        }
        (L.current !== null && (window.clearTimeout(L.current), (L.current = null)), za());
      }, [za]),
      Xl = xn.gameOverLineOffset;
    return {
      status: f,
      score: z.score,
      bestScore: z.bestScore,
      isNewRecord: z.isNewRecord,
      currentItem: m,
      nextItem: y,
      isSoundOn: H.isSoundOn,
      themeId: O,
      mergeEffectRef: d,
      canvasContainerRef: T,
      drop: rr,
      start: za,
      restart: sr,
      toggleSound: H.toggle,
      setThemeId: ql,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: Xl,
      skillGauge: ee,
      skillGaugeMax: rt.gaugeMax,
      skillSegmentMax: rt.segmentMax,
      skillSegmentCount: rt.segmentCount,
      canOpenSkillMenu: ee >= rt.segmentMax,
      canUseSkill: {
        shake: ee >= Oi('shake'),
        gravityFlip: ee >= Oi('gravityFlip'),
        magnet: ee >= Oi('magnet'),
      },
      isSkillMenuOpen: j,
      openSkillMenu: El,
      closeSkillMenu: Mt,
      selectSkill: hn,
      isMagnetSelecting: le,
      cancelMagnetSelecting: ir,
      selectMagnetTarget: ur,
      isGravityFlipped: ie,
      gameOverCountdown: bt,
    };
  },
  NS = ({ size: s }) => {
    const b = wS({ fieldWidth: s.width, fieldHeight: s.height }),
      [T, x] = N.useState(!1),
      h = N.useCallback(() => x(!0), []),
      i = N.useCallback(() => x(!1), []);
    return $.jsxs($.Fragment, {
      children: [
        $.jsx(I1, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          onOpenSettings: h,
        }),
        $.jsx('main', {
          className: Yl.main,
          children: $.jsxs('div', {
            className: Yl.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              $.jsx(zp, {
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
              $.jsx(qh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              $.jsx(Vh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              $.jsx(Yh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? $.jsx('div', {
                    className: Yl.skill_button_wrapper,
                    children: $.jsx(Jh, {
                      gauge: b.skillGauge,
                      segmentMax: b.skillSegmentMax,
                      segmentCount: b.skillSegmentCount,
                      canOpen: b.canOpenSkillMenu,
                      onClick: b.openSkillMenu,
                    }),
                  })
                : null,
              b.status === 'idle' ? $.jsx(t1, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? $.jsx(qp, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
        $.jsx(Fh, {
          open: b.isSkillMenuOpen,
          onSelect: b.selectSkill,
          onClose: b.closeSkillMenu,
          canUse: b.canUseSkill,
        }),
        $.jsx(Kh, {
          open: T,
          onClose: i,
          themeId: b.themeId,
          onChangeTheme: b.setThemeId,
          isSoundOn: b.isSoundOn,
          onToggleSound: b.toggleSound,
        }),
      ],
    });
  },
  BS = () => {
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
        ? $.jsxs('div', {
            className: Yl.layout,
            children: [
              $.jsx('div', { className: Yl.top_bar_placeholder, 'aria-hidden': 'true' }),
              $.jsx('main', { ref: s, className: Yl.main }),
            ],
          })
        : $.jsx('div', { className: Yl.layout, children: $.jsx(NS, { size: b }) })
    );
  },
  US = () => $.jsx('div', { className: dp.index, children: $.jsx(BS, {}) }),
  HS = () => $.jsx('div', { children: $.jsx('h1', { children: 'Not Found' }) });
function LS() {
  return $.jsxs($.Fragment, {
    children: [
      $.jsxs(by, {
        children: [
          $.jsx(Bc, { path: '/', element: $.jsx(US, {}) }),
          $.jsx(Bc, { path: '*', element: $.jsx(HS, {}) }),
        ],
      }),
      $.jsx(op, {}),
    ],
  });
}
const nv = document.getElementById('root');
if (!nv) throw new Error('Failed to find #root element');
M0.createRoot(nv).render($.jsx(Ky, { basename: '/ochimono-game', children: $.jsx(LS, {}) }));
