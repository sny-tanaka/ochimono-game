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
var qm =
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
 */ var Vm;
function v0() {
  if (Vm) return Ti;
  Vm = 1;
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
        function b(q, K) {
          var ne = q.length;
          q.push(K);
          e: for (; 0 < ne; ) {
            var se = (ne - 1) >>> 1,
              de = q[se];
            if (0 < h(de, K)) ((q[se] = K), (q[ne] = de), (ne = se));
            else break e;
          }
        }
        function T(q) {
          return q.length === 0 ? null : q[0];
        }
        function x(q) {
          if (q.length === 0) return null;
          var K = q[0],
            ne = q.pop();
          if (ne !== K) {
            q[0] = ne;
            e: for (var se = 0, de = q.length, j = de >>> 1; se < j; ) {
              var F = 2 * (se + 1) - 1,
                ae = q[F],
                le = F + 1,
                oe = q[le];
              if (0 > h(ae, ne))
                le < de && 0 > h(oe, ae)
                  ? ((q[se] = oe), (q[le] = ne), (se = le))
                  : ((q[se] = ae), (q[F] = ne), (se = F));
              else if (le < de && 0 > h(oe, ne)) ((q[se] = oe), (q[le] = ne), (se = le));
              else break e;
            }
          }
          return K;
        }
        function h(q, K) {
          var ne = q.sortIndex - K.sortIndex;
          return ne !== 0 ? ne : q.id - K.id;
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
          v = 3,
          r = !1,
          p = !1,
          g = !1,
          E = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          D = typeof clearTimeout == 'function' ? clearTimeout : null,
          w = typeof setImmediate < 'u' ? setImmediate : null;
        function L(q) {
          for (var K = T(m); K !== null; ) {
            if (K.callback === null) x(m);
            else if (K.startTime <= q) (x(m), (K.sortIndex = K.expirationTime), b(c, K));
            else break;
            K = T(m);
          }
        }
        function M(q) {
          if (((g = !1), L(q), !p))
            if (T(c) !== null) ((p = !0), _ || ((_ = !0), G()));
            else {
              var K = T(m);
              K !== null && ee(M, K.startTime - q);
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
            var q = s.unstable_now();
            B = q;
            var K = !0;
            try {
              e: {
                ((p = !1), g && ((g = !1), D(O), (O = -1)), (r = !0));
                var ne = v;
                try {
                  t: {
                    for (L(q), y = T(c); y !== null && !(y.expirationTime > q && z()); ) {
                      var se = y.callback;
                      if (typeof se == 'function') {
                        ((y.callback = null), (v = y.priorityLevel));
                        var de = se(y.expirationTime <= q);
                        if (((q = s.unstable_now()), typeof de == 'function')) {
                          ((y.callback = de), L(q), (K = !0));
                          break t;
                        }
                        (y === T(c) && x(c), L(q));
                      } else x(c);
                      y = T(c);
                    }
                    if (y !== null) K = !0;
                    else {
                      var j = T(m);
                      (j !== null && ee(M, j.startTime - q), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((y = null), (v = ne), (r = !1));
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
        function ee(q, K) {
          O = R(function () {
            q(s.unstable_now());
          }, K);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (s.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (A = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (s.unstable_next = function (q) {
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
              return q();
            } finally {
              v = ne;
            }
          }),
          (s.unstable_requestPaint = function () {
            E = !0;
          }),
          (s.unstable_runWithPriority = function (q, K) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var ne = v;
            v = q;
            try {
              return K();
            } finally {
              v = ne;
            }
          }),
          (s.unstable_scheduleCallback = function (q, K, ne) {
            var se = s.unstable_now();
            switch (
              (typeof ne == 'object' && ne !== null
                ? ((ne = ne.delay), (ne = typeof ne == 'number' && 0 < ne ? se + ne : se))
                : (ne = se),
              q)
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
              (q = {
                id: o++,
                callback: K,
                priorityLevel: q,
                startTime: ne,
                expirationTime: de,
                sortIndex: -1,
              }),
              ne > se
                ? ((q.sortIndex = ne),
                  b(m, q),
                  T(c) === null && q === T(m) && (g ? (D(O), (O = -1)) : (g = !0), ee(M, ne - se)))
                : ((q.sortIndex = de), b(c, q), p || r || ((p = !0), _ || ((_ = !0), G()))),
              q
            );
          }),
          (s.unstable_shouldYield = z),
          (s.unstable_wrapCallback = function (q) {
            var K = v;
            return function () {
              var ne = v;
              v = K;
              try {
                return q.apply(this, arguments);
              } finally {
                v = ne;
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
    v = Symbol.iterator;
  function r(j) {
    return j === null || typeof j != 'object'
      ? null
      : ((j = (v && j[v]) || j['@@iterator']), typeof j == 'function' ? j : null);
  }
  var p = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    E = {};
  function R(j, F, ae) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = ae || p));
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
  function w(j, F, ae) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = ae || p));
  }
  var L = (w.prototype = new D());
  ((L.constructor = w), g(L, R.prototype), (L.isPureReactComponent = !0));
  var M = Array.isArray;
  function _() {}
  var O = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function B(j, F, ae) {
    var le = ae.ref;
    return { $$typeof: s, type: j, key: F, ref: le !== void 0 ? le : null, props: ae };
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
      j.replace(/[=:]/g, function (ae) {
        return F[ae];
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
  function q(j, F, ae, le, oe) {
    var ie = typeof j;
    (ie === 'undefined' || ie === 'boolean') && (j = null);
    var he = !1;
    if (j === null) he = !0;
    else
      switch (ie) {
        case 'bigint':
        case 'string':
        case 'number':
          he = !0;
          break;
        case 'object':
          switch (j.$$typeof) {
            case s:
            case b:
              he = !0;
              break;
            case o:
              return ((he = j._init), q(he(j._payload), F, ae, le, oe));
          }
      }
    if (he)
      return (
        (oe = oe(j)),
        (he = le === '' ? '.' + te(j, 0) : le),
        M(oe)
          ? ((ae = ''),
            he != null && (ae = he.replace(J, '$&/') + '/'),
            q(oe, F, ae, '', function (Je) {
              return Je;
            }))
          : oe != null &&
            (H(oe) &&
              (oe = z(
                oe,
                ae +
                  (oe.key == null || (j && j.key === oe.key)
                    ? ''
                    : ('' + oe.key).replace(J, '$&/') + '/') +
                  he
              )),
            F.push(oe)),
        1
      );
    he = 0;
    var ye = le === '' ? '.' : le + ':';
    if (M(j))
      for (var Ae = 0; Ae < j.length; Ae++)
        ((le = j[Ae]), (ie = ye + te(le, Ae)), (he += q(le, F, ae, ie, oe)));
    else if (((Ae = r(j)), typeof Ae == 'function'))
      for (j = Ae.call(j), Ae = 0; !(le = j.next()).done; )
        ((le = le.value), (ie = ye + te(le, Ae++)), (he += q(le, F, ae, ie, oe)));
    else if (ie === 'object') {
      if (typeof j.then == 'function') return q(ee(j), F, ae, le, oe);
      throw (
        (F = String(j)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]' ? 'object with keys {' + Object.keys(j).join(', ') + '}' : F) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return he;
  }
  function K(j, F, ae) {
    if (j == null) return j;
    var le = [],
      oe = 0;
    return (
      q(j, le, '', '', function (ie) {
        return F.call(ae, ie, oe++);
      }),
      le
    );
  }
  function ne(j) {
    if (j._status === -1) {
      var F = j._result;
      ((F = F()),
        F.then(
          function (ae) {
            (j._status === 0 || j._status === -1) && ((j._status = 1), (j._result = ae));
          },
          function (ae) {
            (j._status === 0 || j._status === -1) && ((j._status = 2), (j._result = ae));
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
      forEach: function (j, F, ae) {
        K(
          j,
          function () {
            F.apply(this, arguments);
          },
          ae
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
    (ge.cloneElement = function (j, F, ae) {
      if (j == null) throw Error('The argument must be a React element, but you passed ' + j + '.');
      var le = g({}, j.props),
        oe = j.key;
      if (F != null)
        for (ie in (F.key !== void 0 && (oe = '' + F.key), F))
          !A.call(F, ie) ||
            ie === 'key' ||
            ie === '__self' ||
            ie === '__source' ||
            (ie === 'ref' && F.ref === void 0) ||
            (le[ie] = F[ie]);
      var ie = arguments.length - 2;
      if (ie === 1) le.children = ae;
      else if (1 < ie) {
        for (var he = Array(ie), ye = 0; ye < ie; ye++) he[ye] = arguments[ye + 2];
        le.children = he;
      }
      return B(j.type, oe, le);
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
    (ge.createElement = function (j, F, ae) {
      var le,
        oe = {},
        ie = null;
      if (F != null)
        for (le in (F.key !== void 0 && (ie = '' + F.key), F))
          A.call(F, le) && le !== 'key' && le !== '__self' && le !== '__source' && (oe[le] = F[le]);
      var he = arguments.length - 2;
      if (he === 1) oe.children = ae;
      else if (1 < he) {
        for (var ye = Array(he), Ae = 0; Ae < he; Ae++) ye[Ae] = arguments[Ae + 2];
        oe.children = ye;
      }
      if (j && j.defaultProps)
        for (le in ((he = j.defaultProps), he)) oe[le] === void 0 && (oe[le] = he[le]);
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
        ae = {};
      O.T = ae;
      try {
        var le = j(),
          oe = O.S;
        (oe !== null && oe(ae, le),
          typeof le == 'object' && le !== null && typeof le.then == 'function' && le.then(_, se));
      } catch (ie) {
        se(ie);
      } finally {
        (F !== null && ae.types !== null && (F.types = ae.types), (O.T = F));
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (ge.use = function (j) {
      return O.H.use(j);
    }),
    (ge.useActionState = function (j, F, ae) {
      return O.H.useActionState(j, F, ae);
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
    (ge.useImperativeHandle = function (j, F, ae) {
      return O.H.useImperativeHandle(j, F, ae);
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
    (ge.useReducer = function (j, F, ae) {
      return O.H.useReducer(j, F, ae);
    }),
    (ge.useRef = function (j) {
      return O.H.useRef(j);
    }),
    (ge.useState = function (j) {
      return O.H.useState(j);
    }),
    (ge.useSyncExternalStore = function (j, F, ae) {
      return O.H.useSyncExternalStore(j, F, ae);
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
  pt = {};
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
  if (km) return pt;
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
    (pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (pt.createPortal = function (c, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(b(299));
      return i(c, m, null, o);
    }),
    (pt.flushSync = function (c) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), c)) return c();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
      }
    }),
    (pt.preconnect = function (c, m) {
      typeof c == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(c, m));
    }),
    (pt.prefetchDNS = function (c) {
      typeof c == 'string' && x.d.D(c);
    }),
    (pt.preinit = function (c, m) {
      if (typeof c == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          y = f(o, m.crossOrigin),
          v = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(c, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(c, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (pt.preinitModule = function (c, m) {
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
    (pt.preload = function (c, m) {
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
    (pt.preloadModule = function (c, m) {
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
    (pt.requestFormReset = function (c) {
      x.d.r(c);
    }),
    (pt.unstable_batchedUpdates = function (c, m) {
      return c(m);
    }),
    (pt.useFormState = function (c, m, o) {
      return d.H.useFormState(c, m, o);
    }),
    (pt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (pt.version = '19.2.5'),
    pt
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
          if (u === n) return (c(l), e);
          if (u === a) return (c(l), t);
          u = u.sibling;
        }
        throw Error(x(188));
      }
      if (n.return !== a.return) ((n = l), (a = u));
      else {
        for (var S = !1, C = l.child; C; ) {
          if (C === n) {
            ((S = !0), (n = l), (a = u));
            break;
          }
          if (C === a) {
            ((S = !0), (a = l), (n = u));
            break;
          }
          C = C.sibling;
        }
        if (!S) {
          for (C = u.child; C; ) {
            if (C === n) {
              ((S = !0), (n = u), (a = l));
              break;
            }
            if (C === a) {
              ((S = !0), (a = u), (n = l));
              break;
            }
            C = C.sibling;
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
  var y = Object.assign,
    v = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    p = Symbol.for('react.portal'),
    g = Symbol.for('react.fragment'),
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
    q = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
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
  function ae(e, t) {
    (de++, (se[de] = e.current), (e.current = t));
  }
  var le = j(null),
    oe = j(null),
    ie = j(null),
    he = j(null);
  function ye(e, t) {
    switch ((ae(ie, t), ae(oe, e), ae(le, null), t.nodeType)) {
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
    (F(le), ae(le, e));
  }
  function Ae() {
    (F(le), F(oe), F(ie));
  }
  function Je(e) {
    e.memoizedState !== null && ae(he, e);
    var t = le.current,
      n = fm(t, e.type);
    t !== n && (ae(oe, e), ae(le, n));
  }
  function ut(e) {
    (oe.current === e && (F(le), F(oe)), he.current === e && (F(he), (Si._currentValue = ne)));
  }
  var Ze, Kn;
  function bt(e) {
    if (Ze === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ze = (t && t[1]) || ''),
          (Kn =
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
      Ze +
      e +
      Kn
    );
  }
  var Jn = !1;
  function on(e, t) {
    if (!e || Jn) return '';
    Jn = !0;
    var n = Error.prepareStackTrace;
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
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var l = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        S = u[0],
        C = u[1];
      if (S && C) {
        var U = S.split(`
`),
          Q = C.split(`
`);
        for (l = a = 0; a < U.length && !U[a].includes('DetermineComponentFrameRoot'); ) a++;
        for (; l < Q.length && !Q[l].includes('DetermineComponentFrameRoot'); ) l++;
        if (a === U.length || l === Q.length)
          for (a = U.length - 1, l = Q.length - 1; 1 <= a && 0 <= l && U[a] !== Q[l]; ) l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (U[a] !== Q[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || U[a] !== Q[l])) {
                  var W =
                    `
` + U[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      W.includes('<anonymous>') &&
                      (W = W.replace('<anonymous>', e.displayName)),
                    W
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Jn = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? bt(n) : '';
  }
  function fn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return bt(e.type);
      case 16:
        return bt('Lazy');
      case 13:
        return e.child !== t && t !== null ? bt('Suspense Fallback') : bt('Suspense');
      case 19:
        return bt('SuspenseList');
      case 0:
      case 15:
        return on(e.type, !1);
      case 11:
        return on(e.type.render, !1);
      case 1:
        return on(e.type, !0);
      case 31:
        return bt('Activity');
      default:
        return '';
    }
  }
  function kn(e) {
    try {
      var t = '',
        n = null;
      do ((t += fn(e, n)), (n = e), (e = e.return));
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
  var dt = Object.prototype.hasOwnProperty,
    qt = s.unstable_scheduleCallback,
    We = s.unstable_cancelCallback,
    dn = s.unstable_shouldYield,
    Sa = s.unstable_requestPaint,
    st = s.unstable_now,
    zt = s.unstable_getCurrentPriorityLevel,
    wt = s.unstable_ImmediatePriority,
    xa = s.unstable_UserBlockingPriority,
    pn = s.unstable_NormalPriority,
    Sn = s.unstable_LowPriority,
    xn = s.unstable_IdlePriority,
    ir = s.log,
    ur = s.unstable_setDisableYieldValue,
    Ea = null,
    St = null;
  function tn(e) {
    if ((typeof ir == 'function' && ur(e), St && typeof St.setStrictMode == 'function'))
      try {
        St.setStrictMode(Ea, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : sr,
    wl = Math.log,
    rr = Math.LN2;
  function sr(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((wl(e) / rr) | 0)) | 0);
  }
  var ue = 256,
    Ee = 262144,
    _e = 4194304;
  function ve(e) {
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
  function Se(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      S = e.pingedLanes;
    e = e.warmLanes;
    var C = a & 134217727;
    return (
      C !== 0
        ? ((a = C & ~u),
          a !== 0
            ? (l = ve(a))
            : ((S &= C), S !== 0 ? (l = ve(S)) : n || ((n = C & ~e), n !== 0 && (l = ve(n)))))
        : ((C = a & ~u),
          C !== 0
            ? (l = ve(C))
            : S !== 0
              ? (l = ve(S))
              : n || ((n = a & ~e), n !== 0 && (l = ve(n)))),
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
  function we(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ke(e, t) {
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
  function et() {
    var e = _e;
    return ((_e <<= 1), (_e & 62914560) === 0 && (_e = 4194304), e);
  }
  function Ye(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xe(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function ct(e, t, n, a, l, u) {
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
    (a !== 0 && tt(e, a, 0),
      u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function tt(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - xt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function Nt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - xt(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  function En(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : Vt(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function Vt(e) {
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
  function Xa(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Nl() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Bm(e.type));
  }
  function Qa(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var nn = Math.random().toString(36).slice(2),
    mt = '__reactFiber$' + nn,
    Tt = '__reactProps$' + nn,
    Za = '__reactContainer$' + nn,
    cr = '__reactEvents$' + nn,
    av = '__reactListeners$' + nn,
    lv = '__reactHandles$' + nn,
    Fc = '__reactResources$' + nn,
    Bl = '__reactMarker$' + nn;
  function or(e) {
    (delete e[mt], delete e[Tt], delete e[cr], delete e[av], delete e[lv]);
  }
  function Ka(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Za] || n[mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = pm(e); e !== null; ) {
            if ((n = e[mt])) return n;
            e = pm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ja(e) {
    if ((e = e[mt] || e[Za])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ul(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function ka(e) {
    var t = e[Fc];
    return (t || (t = e[Fc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ot(e) {
    e[Bl] = !0;
  }
  var $c = new Set(),
    Wc = {};
  function ba(e, t) {
    (Fa(e, t), Fa(e + 'Capture', t));
  }
  function Fa(e, t) {
    for (Wc[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
  }
  var iv = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Pc = {},
    Ic = {};
  function uv(e) {
    return dt.call(Ic, e)
      ? !0
      : dt.call(Pc, e)
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
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
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
  function bn(e, t, n, a) {
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
  function Xt(e) {
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
      a = '';
    return (
      e && (a = eo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
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
  function Qt(e) {
    return e.replace(sv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function dr(e, t, n, a, l, u, S, C) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Xt(t))
          : e.value !== '' + Xt(t) && (e.value = '' + Xt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? mr(e, S, Xt(t))
        : n != null
          ? mr(e, S, Xt(n))
          : a != null && e.removeAttribute('value'),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Xt(C))
        : e.removeAttribute('name'));
  }
  function no(e, t, n, a, l, u, S, C) {
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
      ((n = n != null ? '' + Xt(n) : ''),
        (t = t != null ? '' + Xt(t) : n),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? l),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = C ? e.checked : !!a),
      (e.defaultChecked = !!a),
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
  function $a(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Xt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ao(e, t, n) {
    if (t != null && ((t = '' + Xt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Xt(n) : '';
  }
  function lo(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(x(92));
        if (ee(a)) {
          if (1 < a.length) throw Error(x(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Xt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      fr(e));
  }
  function Wa(e, t) {
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
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
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
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && io(e, l, a));
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
  function Tn() {}
  var vr = null;
  function gr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pa = null,
    Ia = null;
  function ro(e) {
    var t = Ja(e);
    if (t && (e = t.stateNode)) {
      var n = e[Tt] || null;
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
              n = n.querySelectorAll('input[name="' + Qt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[Tt] || null;
                if (!l) throw Error(x(90));
                dr(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && to(a));
          }
          break e;
        case 'textarea':
          ao(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && $a(e, !!n.multiple, t, !1));
      }
    }
  }
  var yr = !1;
  function so(e, t, n) {
    if (yr) return e(t, n);
    yr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((yr = !1),
        (Pa !== null || Ia !== null) &&
          (Mu(), Pa && ((t = Pa), (e = Ia), (Ia = Pa = null), ro(t), e)))
      )
        for (t = 0; t < e.length; t++) ro(e[t]);
    }
  }
  function Hl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Tt] || null;
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
  var Mn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    pr = !1;
  if (Mn)
    try {
      var Ll = {};
      (Object.defineProperty(Ll, 'passive', {
        get: function () {
          pr = !0;
        },
      }),
        window.addEventListener('test', Ll, Ll),
        window.removeEventListener('test', Ll, Ll));
    } catch {
      pr = !1;
    }
  var Fn = null,
    Sr = null,
    ji = null;
  function co() {
    if (ji) return ji;
    var e,
      t = Sr,
      n = t.length,
      a,
      l = 'value' in Fn ? Fn.value : Fn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var S = n - e;
    for (a = 1; a <= S && t[n - a] === l[u - a]; a++);
    return (ji = l.slice(e, 1 < a ? 1 - a : void 0));
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
  function Mt(e) {
    function t(n, a, l, u, S) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
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
  var Ta = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qi = Mt(Ta),
    jl = y({}, Ta, { view: 0, detail: 0 }),
    dv = Mt(jl),
    xr,
    Er,
    Gl,
    Vi = y({}, jl, {
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
          : (e !== Gl &&
              (Gl && e.type === 'mousemove'
                ? ((xr = e.screenX - Gl.screenX), (Er = e.screenY - Gl.screenY))
                : (Er = xr = 0),
              (Gl = e)),
            xr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Er;
      },
    }),
    fo = Mt(Vi),
    mv = y({}, Vi, { dataTransfer: 0 }),
    hv = Mt(mv),
    vv = y({}, jl, { relatedTarget: 0 }),
    br = Mt(vv),
    gv = y({}, Ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yv = Mt(gv),
    pv = y({}, Ta, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Sv = Mt(pv),
    xv = y({}, Ta, { data: 0 }),
    mo = Mt(xv),
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
  var Cv = y({}, jl, {
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
    Rv = Mt(Cv),
    Av = y({}, Vi, {
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
    ho = Mt(Av),
    _v = y({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tr,
    }),
    Ov = Mt(_v),
    Dv = y({}, Ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zv = Mt(Dv),
    wv = y({}, Vi, {
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
    Nv = Mt(wv),
    Bv = y({}, Ta, { newState: 0, oldState: 0 }),
    Uv = Mt(Bv),
    Hv = [9, 13, 27, 32],
    Mr = Mn && 'CompositionEvent' in window,
    Yl = null;
  Mn && 'documentMode' in document && (Yl = document.documentMode);
  var Lv = Mn && 'TextEvent' in window && !Yl,
    vo = Mn && (!Mr || (Yl && 8 < Yl && 11 >= Yl)),
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
  var el = !1;
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
    if (el)
      return e === 'compositionend' || (!Mr && po(e, t))
        ? ((e = co()), (ji = Sr = Fn = null), (el = !1), e)
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
  function Eo(e, t, n, a) {
    (Pa ? (Ia ? Ia.push(a) : (Ia = [a])) : (Pa = a),
      (t = zu(t, 'onChange')),
      0 < t.length &&
        ((n = new qi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var ql = null,
    Vl = null;
  function qv(e) {
    lm(e, 0);
  }
  function Xi(e) {
    var t = Ul(e);
    if (to(t)) return e;
  }
  function bo(e, t) {
    if (e === 'change') return t;
  }
  var To = !1;
  if (Mn) {
    var Cr;
    if (Mn) {
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
    ql && (ql.detachEvent('onpropertychange', Ro), (Vl = ql = null));
  }
  function Ro(e) {
    if (e.propertyName === 'value' && Xi(Vl)) {
      var t = [];
      (Eo(t, Vl, e, gr(e)), so(qv, t));
    }
  }
  function Vv(e, t, n) {
    e === 'focusin'
      ? (Co(), (ql = t), (Vl = n), ql.attachEvent('onpropertychange', Ro))
      : e === 'focusout' && Co();
  }
  function Xv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Xi(Vl);
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
  var Bt = typeof Object.is == 'function' ? Object.is : Kv;
  function Xl(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!dt.call(t, l) || !Bt(e[l], t[l])) return !1;
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
  var Jv = Mn && 'documentMode' in document && 11 >= document.documentMode,
    tl = null,
    _r = null,
    Ql = null,
    Or = !1;
  function zo(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Or ||
      tl == null ||
      tl !== Hi(a) ||
      ((a = tl),
      'selectionStart' in a && Ar(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ql && Xl(Ql, a)) ||
        ((Ql = a),
        (a = zu(_r, 'onSelect')),
        0 < a.length &&
          ((t = new qi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = tl))));
  }
  function Ma(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var nl = {
      animationend: Ma('Animation', 'AnimationEnd'),
      animationiteration: Ma('Animation', 'AnimationIteration'),
      animationstart: Ma('Animation', 'AnimationStart'),
      transitionrun: Ma('Transition', 'TransitionRun'),
      transitionstart: Ma('Transition', 'TransitionStart'),
      transitioncancel: Ma('Transition', 'TransitionCancel'),
      transitionend: Ma('Transition', 'TransitionEnd'),
    },
    Dr = {},
    wo = {};
  Mn &&
    ((wo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete nl.animationend.animation,
      delete nl.animationiteration.animation,
      delete nl.animationstart.animation),
    'TransitionEvent' in window || delete nl.transitionend.transition);
  function Ca(e) {
    if (Dr[e]) return Dr[e];
    if (!nl[e]) return e;
    var t = nl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in wo) return (Dr[e] = t[n]);
    return e;
  }
  var No = Ca('animationend'),
    Bo = Ca('animationiteration'),
    Uo = Ca('animationstart'),
    kv = Ca('transitionrun'),
    Fv = Ca('transitionstart'),
    $v = Ca('transitioncancel'),
    Ho = Ca('transitionend'),
    Lo = new Map(),
    zr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  zr.push('scrollEnd');
  function an(e, t) {
    (Lo.set(e, t), ba(t, [e]));
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
    Zt = [],
    al = 0,
    wr = 0;
  function Zi() {
    for (var e = al, t = (wr = al = 0); t < e; ) {
      var n = Zt[t];
      Zt[t++] = null;
      var a = Zt[t];
      Zt[t++] = null;
      var l = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      if (((Zt[t++] = null), a !== null && l !== null)) {
        var S = a.pending;
        (S === null ? (l.next = l) : ((l.next = S.next), (S.next = l)), (a.pending = l));
      }
      u !== 0 && jo(n, l, u);
    }
  }
  function Ki(e, t, n, a) {
    ((Zt[al++] = e),
      (Zt[al++] = t),
      (Zt[al++] = n),
      (Zt[al++] = a),
      (wr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Nr(e, t, n, a) {
    return (Ki(e, t, n, a), Ji(e));
  }
  function Ra(e, t) {
    return (Ki(e, null, null, t), Ji(e));
  }
  function jo(e, t, n) {
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
          ((l = 31 - xt(n)),
          (e = u.hiddenUpdates),
          (a = e[l]),
          a === null ? (e[l] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Ji(e) {
    if (50 < di) throw ((di = 0), (Vs = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ll = {};
  function Wv(e, t, n, a) {
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
  function Ut(e, t, n, a) {
    return new Wv(e, t, n, a);
  }
  function Br(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Cn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ut(e.tag, t, e.key, e.mode)),
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
  function ki(e, t, n, a, l, u) {
    var S = 0;
    if (((a = e), typeof e == 'function')) Br(e) && (S = 1);
    else if (typeof e == 'string')
      S = n0(e, n, le.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return ((e = Ut(31, n, t, l)), (e.elementType = B), (e.lanes = u), e);
        case g:
          return Aa(n.children, l, u, t);
        case E:
          ((S = 8), (l |= 24));
          break;
        case R:
          return ((e = Ut(12, n, t, l | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = Ut(13, n, t, l)), (e.elementType = M), (e.lanes = u), e);
        case _:
          return ((e = Ut(19, n, t, l)), (e.elementType = _), (e.lanes = u), e);
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
                ((S = 16), (a = null));
                break e;
            }
          ((S = 29), (n = Error(x(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = Ut(S, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function Aa(e, t, n, a) {
    return ((e = Ut(7, e, a, t)), (e.lanes = n), e);
  }
  function Ur(e, t, n) {
    return ((e = Ut(6, e, null, t)), (e.lanes = n), e);
  }
  function Yo(e) {
    var t = Ut(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Hr(e, t, n) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var qo = new WeakMap();
  function Kt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = qo.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: kn(t) }), qo.set(e, t), t);
    }
    return { value: e, source: t, stack: kn(t) };
  }
  var il = [],
    ul = 0,
    Fi = null,
    Zl = 0,
    Jt = [],
    kt = 0,
    $n = null,
    mn = 1,
    hn = '';
  function Rn(e, t) {
    ((il[ul++] = Zl), (il[ul++] = Fi), (Fi = e), (Zl = t));
  }
  function Vo(e, t, n) {
    ((Jt[kt++] = mn), (Jt[kt++] = hn), (Jt[kt++] = $n), ($n = e));
    var a = mn;
    e = hn;
    var l = 32 - xt(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - xt(t) + l;
    if (30 < u) {
      var S = l - (l % 5);
      ((u = (a & ((1 << S) - 1)).toString(32)),
        (a >>= S),
        (l -= S),
        (mn = (1 << (32 - xt(t) + l)) | (n << l) | a),
        (hn = u + e));
    } else ((mn = (1 << u) | (n << l) | a), (hn = e));
  }
  function Lr(e) {
    e.return !== null && (Rn(e, 1), Vo(e, 1, 0));
  }
  function jr(e) {
    for (; e === Fi; ) ((Fi = il[--ul]), (il[ul] = null), (Zl = il[--ul]), (il[ul] = null));
    for (; e === $n; )
      (($n = Jt[--kt]),
        (Jt[kt] = null),
        (hn = Jt[--kt]),
        (Jt[kt] = null),
        (mn = Jt[--kt]),
        (Jt[kt] = null));
  }
  function Xo(e, t) {
    ((Jt[kt++] = mn), (Jt[kt++] = hn), (Jt[kt++] = $n), (mn = t.id), (hn = t.overflow), ($n = e));
  }
  var ht = null,
    qe = null,
    Re = !1,
    Wn = null,
    Ft = !1,
    Gr = Error(x(519));
  function Pn(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Kl(Kt(t, e)), Gr);
  }
  function Qo(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[mt] = e), (t[Tt] = a), n)) {
      case 'dialog':
        (Te('cancel', t), Te('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Te('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < hi.length; n++) Te(hi[n], t);
        break;
      case 'source':
        Te('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Te('error', t), Te('load', t));
        break;
      case 'details':
        Te('toggle', t);
        break;
      case 'input':
        (Te('invalid', t),
          no(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        Te('invalid', t);
        break;
      case 'textarea':
        (Te('invalid', t), lo(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      sm(t.textContent, n)
        ? (a.popover != null && (Te('beforetoggle', t), Te('toggle', t)),
          a.onScroll != null && Te('scroll', t),
          a.onScrollEnd != null && Te('scrollend', t),
          a.onClick != null && (t.onclick = Tn),
          (t = !0))
        : (t = !1),
      t || Pn(e, !0));
  }
  function Zo(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          Ft = !1;
          return;
        case 27:
        case 3:
          Ft = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function rl(e) {
    if (e !== ht) return !1;
    if (!Re) return (Zo(e), (Re = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || ac(e.type, e.memoizedProps))),
        (n = !n)),
      n && qe && Pn(e),
      Zo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = ym(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = ym(e);
    } else
      t === 27
        ? ((t = qe), da(e.type) ? ((e = sc), (sc = null), (qe = e)) : (qe = t))
        : (qe = ht ? Wt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function _a() {
    ((qe = ht = null), (Re = !1));
  }
  function Yr() {
    var e = Wn;
    return (e !== null && (_t === null ? (_t = e) : _t.push.apply(_t, e), (Wn = null)), e);
  }
  function Kl(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  var qr = j(null),
    Oa = null,
    An = null;
  function In(e, t, n) {
    (ae(qr, t._currentValue), (t._currentValue = n));
  }
  function _n(e) {
    ((e._currentValue = qr.current), F(qr));
  }
  function Vr(e, t, n) {
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
  function Xr(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var S = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var C = u;
          u = l;
          for (var U = 0; U < t.length; U++)
            if (C.context === t[U]) {
              ((u.lanes |= n),
                (C = u.alternate),
                C !== null && (C.lanes |= n),
                Vr(u.return, n, e),
                a || (S = null));
              break e;
            }
          u = C.next;
        }
      } else if (l.tag === 18) {
        if (((S = l.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Vr(S, n, e), (S = null));
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
  function sl(e, t, n, a) {
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
          var C = l.type;
          Bt(l.pendingProps.value, S.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (l === he.current) {
        if (((S = l.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(Si) : (e = [Si]));
      }
      l = l.return;
    }
    (e !== null && Xr(t, e, n, a), (t.flags |= 262144));
  }
  function $i(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Da(e) {
    ((Oa = e), (An = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function vt(e) {
    return Ko(Oa, e);
  }
  function Wi(e, t) {
    return (Oa === null && Da(e), Ko(e, t));
  }
  function Ko(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), An === null)) {
      if (e === null) throw Error(x(308));
      ((An = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else An = An.next = t;
    return n;
  }
  var Pv =
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
    Iv = s.unstable_scheduleCallback,
    eg = s.unstable_NormalPriority,
    nt = {
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
  function Jl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Iv(eg, function () {
          e.controller.abort();
        }));
  }
  var kl = null,
    Zr = 0,
    cl = 0,
    ol = null;
  function tg(e, t) {
    if (kl === null) {
      var n = (kl = []);
      ((Zr = 0),
        (cl = ks()),
        (ol = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Zr++, t.then(Jo, Jo), t);
  }
  function Jo() {
    if (--Zr === 0 && kl !== null) {
      ol !== null && (ol.status = 'fulfilled');
      var e = kl;
      ((kl = null), (cl = 0), (ol = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ng(e, t) {
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
  var ko = q.S;
  q.S = function (e, t) {
    ((wd = st()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && tg(e, t),
      ko !== null && ko(e, t));
  };
  var za = j(null);
  function Kr() {
    var e = za.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Pi(e, t) {
    t === null ? ae(za, za.current) : ae(za, t.pool);
  }
  function Fo() {
    var e = Kr();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var fl = Error(x(460)),
    Jr = Error(x(474)),
    Ii = Error(x(542)),
    eu = { then: function () {} };
  function $o(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Wo(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Io(e), e);
      default:
        if (typeof t.status == 'string') t.then(Tn, Tn);
        else {
          if (((e = Ge), e !== null && 100 < e.shellSuspendCounter)) throw Error(x(482));
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
            throw ((e = t.reason), Io(e), e);
        }
        throw ((Na = t), fl);
    }
  }
  function wa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Na = n), fl) : n;
    }
  }
  var Na = null;
  function Po() {
    if (Na === null) throw Error(x(459));
    var e = Na;
    return ((Na = null), e);
  }
  function Io(e) {
    if (e === fl || e === Ii) throw Error(x(483));
  }
  var dl = null,
    Fl = 0;
  function tu(e) {
    var t = Fl;
    return ((Fl += 1), dl === null && (dl = []), Wo(dl, e, t));
  }
  function $l(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function nu(e, t) {
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
  function ef(e) {
    function t(V, Y) {
      if (e) {
        var X = V.deletions;
        X === null ? ((V.deletions = [Y]), (V.flags |= 16)) : X.push(Y);
      }
    }
    function n(V, Y) {
      if (!e) return null;
      for (; Y !== null; ) (t(V, Y), (Y = Y.sibling));
      return null;
    }
    function a(V) {
      for (var Y = new Map(); V !== null; )
        (V.key !== null ? Y.set(V.key, V) : Y.set(V.index, V), (V = V.sibling));
      return Y;
    }
    function l(V, Y) {
      return ((V = Cn(V, Y)), (V.index = 0), (V.sibling = null), V);
    }
    function u(V, Y, X) {
      return (
        (V.index = X),
        e
          ? ((X = V.alternate),
            X !== null
              ? ((X = X.index), X < Y ? ((V.flags |= 67108866), Y) : X)
              : ((V.flags |= 67108866), Y))
          : ((V.flags |= 1048576), Y)
      );
    }
    function S(V) {
      return (e && V.alternate === null && (V.flags |= 67108866), V);
    }
    function C(V, Y, X, P) {
      return Y === null || Y.tag !== 6
        ? ((Y = Ur(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function U(V, Y, X, P) {
      var fe = X.type;
      return fe === g
        ? W(V, Y, X.props.children, P, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && wa(fe) === Y.type))
          ? ((Y = l(Y, X.props)), $l(Y, X), (Y.return = V), Y)
          : ((Y = ki(X.type, X.key, X.props, null, V.mode, P)), $l(Y, X), (Y.return = V), Y);
    }
    function Q(V, Y, X, P) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Hr(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X.children || [])), (Y.return = V), Y);
    }
    function W(V, Y, X, P, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = Aa(X, V.mode, P, fe)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function I(V, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Ur('' + Y, V.mode, X)), (Y.return = V), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = ki(Y.type, Y.key, Y.props, null, V.mode, X)), $l(X, Y), (X.return = V), X);
          case p:
            return ((Y = Hr(Y, V.mode, X)), (Y.return = V), Y);
          case A:
            return ((Y = wa(Y)), I(V, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = Aa(Y, V.mode, X, null)), (Y.return = V), Y);
        if (typeof Y.then == 'function') return I(V, tu(Y), X);
        if (Y.$$typeof === w) return I(V, Wi(V, Y), X);
        nu(V, Y);
      }
      return null;
    }
    function Z(V, Y, X, P) {
      var fe = Y !== null ? Y.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : C(V, Y, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? U(V, Y, X, P) : null;
          case p:
            return X.key === fe ? Q(V, Y, X, P) : null;
          case A:
            return ((X = wa(X)), Z(V, Y, X, P));
        }
        if (ee(X) || G(X)) return fe !== null ? null : W(V, Y, X, P, null);
        if (typeof X.then == 'function') return Z(V, Y, tu(X), P);
        if (X.$$typeof === w) return Z(V, Y, Wi(V, X), P);
        nu(V, X);
      }
      return null;
    }
    function k(V, Y, X, P, fe) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return ((V = V.get(X) || null), C(Y, V, '' + P, fe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((V = V.get(P.key === null ? X : P.key) || null), U(Y, V, P, fe));
          case p:
            return ((V = V.get(P.key === null ? X : P.key) || null), Q(Y, V, P, fe));
          case A:
            return ((P = wa(P)), k(V, Y, X, P, fe));
        }
        if (ee(P) || G(P)) return ((V = V.get(X) || null), W(Y, V, P, fe, null));
        if (typeof P.then == 'function') return k(V, Y, X, tu(P), fe);
        if (P.$$typeof === w) return k(V, Y, X, Wi(Y, P), fe);
        nu(Y, P);
      }
      return null;
    }
    function re(V, Y, X, P) {
      for (
        var fe = null, Oe = null, ce = Y, xe = (Y = 0), Ce = null;
        ce !== null && xe < X.length;
        xe++
      ) {
        ce.index > xe ? ((Ce = ce), (ce = null)) : (Ce = ce.sibling);
        var De = Z(V, ce, X[xe], P);
        if (De === null) {
          ce === null && (ce = Ce);
          break;
        }
        (e && ce && De.alternate === null && t(V, ce),
          (Y = u(De, Y, xe)),
          Oe === null ? (fe = De) : (Oe.sibling = De),
          (Oe = De),
          (ce = Ce));
      }
      if (xe === X.length) return (n(V, ce), Re && Rn(V, xe), fe);
      if (ce === null) {
        for (; xe < X.length; xe++)
          ((ce = I(V, X[xe], P)),
            ce !== null &&
              ((Y = u(ce, Y, xe)), Oe === null ? (fe = ce) : (Oe.sibling = ce), (Oe = ce)));
        return (Re && Rn(V, xe), fe);
      }
      for (ce = a(ce); xe < X.length; xe++)
        ((Ce = k(ce, V, xe, X[xe], P)),
          Ce !== null &&
            (e && Ce.alternate !== null && ce.delete(Ce.key === null ? xe : Ce.key),
            (Y = u(Ce, Y, xe)),
            Oe === null ? (fe = Ce) : (Oe.sibling = Ce),
            (Oe = Ce)));
      return (
        e &&
          ce.forEach(function (ya) {
            return t(V, ya);
          }),
        Re && Rn(V, xe),
        fe
      );
    }
    function me(V, Y, X, P) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, Oe = null, ce = Y, xe = (Y = 0), Ce = null, De = X.next();
        ce !== null && !De.done;
        xe++, De = X.next()
      ) {
        ce.index > xe ? ((Ce = ce), (ce = null)) : (Ce = ce.sibling);
        var ya = Z(V, ce, De.value, P);
        if (ya === null) {
          ce === null && (ce = Ce);
          break;
        }
        (e && ce && ya.alternate === null && t(V, ce),
          (Y = u(ya, Y, xe)),
          Oe === null ? (fe = ya) : (Oe.sibling = ya),
          (Oe = ya),
          (ce = Ce));
      }
      if (De.done) return (n(V, ce), Re && Rn(V, xe), fe);
      if (ce === null) {
        for (; !De.done; xe++, De = X.next())
          ((De = I(V, De.value, P)),
            De !== null &&
              ((Y = u(De, Y, xe)), Oe === null ? (fe = De) : (Oe.sibling = De), (Oe = De)));
        return (Re && Rn(V, xe), fe);
      }
      for (ce = a(ce); !De.done; xe++, De = X.next())
        ((De = k(ce, V, xe, De.value, P)),
          De !== null &&
            (e && De.alternate !== null && ce.delete(De.key === null ? xe : De.key),
            (Y = u(De, Y, xe)),
            Oe === null ? (fe = De) : (Oe.sibling = De),
            (Oe = De)));
      return (
        e &&
          ce.forEach(function (m0) {
            return t(V, m0);
          }),
        Re && Rn(V, xe),
        fe
      );
    }
    function je(V, Y, X, P) {
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
                      (n(V, Y.sibling), (P = l(Y, X.props.children)), (P.return = V), (V = P));
                      break e;
                    }
                  } else if (
                    Y.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === A && wa(fe) === Y.type)
                  ) {
                    (n(V, Y.sibling), (P = l(Y, X.props)), $l(P, X), (P.return = V), (V = P));
                    break e;
                  }
                  n(V, Y);
                  break;
                } else t(V, Y);
                Y = Y.sibling;
              }
              X.type === g
                ? ((P = Aa(X.props.children, V.mode, P, X.key)), (P.return = V), (V = P))
                : ((P = ki(X.type, X.key, X.props, null, V.mode, P)),
                  $l(P, X),
                  (P.return = V),
                  (V = P));
            }
            return S(V);
          case p:
            e: {
              for (fe = X.key; Y !== null; ) {
                if (Y.key === fe)
                  if (
                    Y.tag === 4 &&
                    Y.stateNode.containerInfo === X.containerInfo &&
                    Y.stateNode.implementation === X.implementation
                  ) {
                    (n(V, Y.sibling), (P = l(Y, X.children || [])), (P.return = V), (V = P));
                    break e;
                  } else {
                    n(V, Y);
                    break;
                  }
                else t(V, Y);
                Y = Y.sibling;
              }
              ((P = Hr(X, V.mode, P)), (P.return = V), (V = P));
            }
            return S(V);
          case A:
            return ((X = wa(X)), je(V, Y, X, P));
        }
        if (ee(X)) return re(V, Y, X, P);
        if (G(X)) {
          if (((fe = G(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(V, Y, X, P));
        }
        if (typeof X.then == 'function') return je(V, Y, tu(X), P);
        if (X.$$typeof === w) return je(V, Y, Wi(V, X), P);
        nu(V, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(V, Y.sibling), (P = l(Y, X)), (P.return = V), (V = P))
            : (n(V, Y), (P = Ur(X, V.mode, P)), (P.return = V), (V = P)),
          S(V))
        : n(V, Y);
    }
    return function (V, Y, X, P) {
      try {
        Fl = 0;
        var fe = je(V, Y, X, P);
        return ((dl = null), fe);
      } catch (ce) {
        if (ce === fl || ce === Ii) throw ce;
        var Oe = Ut(29, ce, null, V.mode);
        return ((Oe.lanes = P), (Oe.return = V), Oe);
      } finally {
      }
    };
  }
  var Ba = ef(!0),
    tf = ef(!1),
    ea = !1;
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
  function ta(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function na(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ze & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = Ji(e)),
        jo(e, null, n),
        t
      );
    }
    return (Ki(e, a, t, n), Ji(e));
  }
  function Wl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Nt(e, n));
    }
  }
  function $r(e, t) {
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
  var Wr = !1;
  function Pl() {
    if (Wr) {
      var e = ol;
      if (e !== null) throw e;
    }
  }
  function Il(e, t, n, a) {
    Wr = !1;
    var l = e.updateQueue;
    ea = !1;
    var u = l.firstBaseUpdate,
      S = l.lastBaseUpdate,
      C = l.shared.pending;
    if (C !== null) {
      l.shared.pending = null;
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
      var I = l.baseState;
      ((S = 0), (W = Q = U = null), (C = u));
      do {
        var Z = C.lane & -536870913,
          k = Z !== C.lane;
        if (k ? (Me & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === cl && (Wr = !0),
            W !== null &&
              (W = W.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }));
          e: {
            var re = e,
              me = C;
            Z = t;
            var je = n;
            switch (me.tag) {
              case 1:
                if (((re = me.payload), typeof re == 'function')) {
                  I = re.call(je, I, Z);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = me.payload),
                  (Z = typeof re == 'function' ? re.call(je, I, Z) : re),
                  Z == null)
                )
                  break e;
                I = y({}, I, Z);
                break e;
              case 2:
                ea = !0;
            }
          }
          ((Z = C.callback),
            Z !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = l.callbacks),
              k === null ? (l.callbacks = [Z]) : k.push(Z)));
        } else
          ((k = { lane: Z, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            W === null ? ((Q = W = k), (U = I)) : (W = W.next = k),
            (S |= Z));
        if (((C = C.next), C === null)) {
          if (((C = l.shared.pending), C === null)) break;
          ((k = C),
            (C = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null));
        }
      } while (!0);
      (W === null && (U = I),
        (l.baseState = U),
        (l.firstBaseUpdate = Q),
        (l.lastBaseUpdate = W),
        u === null && (l.shared.lanes = 0),
        (ra |= S),
        (e.lanes = S),
        (e.memoizedState = I));
    }
  }
  function nf(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function af(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) nf(n[e], t);
  }
  var ml = j(null),
    au = j(0);
  function lf(e, t) {
    ((e = Ln), ae(au, e), ae(ml, t), (Ln = e | t.baseLanes));
  }
  function Pr() {
    (ae(au, Ln), ae(ml, ml.current));
  }
  function Ir() {
    ((Ln = au.current), F(ml), F(au));
  }
  var Ht = j(null),
    $t = null;
  function aa(e) {
    var t = e.alternate;
    (ae(Pe, Pe.current & 1),
      ae(Ht, e),
      $t === null && (t === null || ml.current !== null || t.memoizedState !== null) && ($t = e));
  }
  function es(e) {
    (ae(Pe, Pe.current), ae(Ht, e), $t === null && ($t = e));
  }
  function uf(e) {
    e.tag === 22 ? (ae(Pe, Pe.current), ae(Ht, e), $t === null && ($t = e)) : la();
  }
  function la() {
    (ae(Pe, Pe.current), ae(Ht, Ht.current));
  }
  function Lt(e) {
    (F(Ht), $t === e && ($t = null), F(Pe));
  }
  var Pe = j(0);
  function lu(e) {
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
  var On = 0,
    pe = null,
    He = null,
    at = null,
    iu = !1,
    hl = !1,
    Ua = !1,
    uu = 0,
    ei = 0,
    vl = null,
    ag = 0;
  function Fe() {
    throw Error(x(321));
  }
  function ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function ns(e, t, n, a, l, u) {
    return (
      (On = u),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Xf : ys),
      (Ua = !1),
      (u = n(a, l)),
      (Ua = !1),
      hl && (u = sf(t, n, a, l)),
      rf(e),
      u
    );
  }
  function rf(e) {
    q.H = ai;
    var t = He !== null && He.next !== null;
    if (((On = 0), (at = He = pe = null), (iu = !1), (ei = 0), (vl = null), t)) throw Error(x(300));
    e === null || lt || ((e = e.dependencies), e !== null && $i(e) && (lt = !0));
  }
  function sf(e, t, n, a) {
    pe = e;
    var l = 0;
    do {
      if ((hl && (vl = null), (ei = 0), (hl = !1), 25 <= l)) throw Error(x(301));
      if (((l += 1), (at = He = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((q.H = Qf), (u = t(n, a)));
    } while (hl);
    return u;
  }
  function lg() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ti(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function as() {
    var e = uu !== 0;
    return ((uu = 0), e);
  }
  function ls(e, t, n) {
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
    ((On = 0), (at = He = pe = null), (hl = !1), (ei = uu = 0), (vl = null));
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (at === null ? (pe.memoizedState = at = e) : (at = at.next = e), at);
  }
  function Ie() {
    if (He === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = at === null ? pe.memoizedState : at.next;
    if (t !== null) ((at = t), (He = e));
    else {
      if (e === null) throw pe.alternate === null ? Error(x(467)) : Error(x(310));
      ((He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        at === null ? (pe.memoizedState = at = e) : (at = at.next = e));
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
      vl === null && (vl = []),
      (e = Wo(vl, e, t)),
      (t = pe),
      (at === null ? t.memoizedState : at.next) === null &&
        ((t = t.alternate), (q.H = t === null || t.memoizedState === null ? Xf : ys)),
      e
    );
  }
  function su(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ti(e);
      if (e.$$typeof === w) return vt(e);
    }
    throw Error(x(438, String(e)));
  }
  function us(e) {
    var t = null,
      n = pe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = pe.alternate;
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
      n === null && ((n = ru()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = z;
    return (t.index++, n);
  }
  function Dn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function cu(e) {
    var t = Ie();
    return rs(t, He, e);
  }
  function rs(e, t, n) {
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
      var C = (S = null),
        U = null,
        Q = t,
        W = !1;
      do {
        var I = Q.lane & -536870913;
        if (I !== Q.lane ? (Me & I) === I : (On & I) === I) {
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
              I === cl && (W = !0));
          else if ((On & Z) === Z) {
            ((Q = Q.next), Z === cl && (W = !0));
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
              (pe.lanes |= Z),
              (ra |= Z));
          ((I = Q.action), Ua && n(u, I), (u = Q.hasEagerState ? Q.eagerState : n(u, I)));
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
            (pe.lanes |= I),
            (ra |= I));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = C),
        !Bt(u, e.memoizedState) && ((lt = !0), W && ((n = ol), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (a.lastRenderedState = u));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function ss(e) {
    var t = Ie(),
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
      (Bt(u, t.memoizedState) || (lt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function cf(e, t, n) {
    var a = pe,
      l = Ie(),
      u = Re;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Bt((He || l).memoizedState, n);
    if (
      (S && ((l.memoizedState = n), (lt = !0)),
      (l = l.queue),
      fs(df.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || S || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        gl(9, { destroy: void 0 }, ff.bind(null, a, l, n, t), null),
        Ge === null)
      )
        throw Error(x(349));
      u || (On & 127) !== 0 || of(a, t, n);
    }
    return n;
  }
  function of(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = ru()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ff(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), mf(t) && hf(e));
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
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function hf(e) {
    var t = Ra(e, 2);
    t !== null && Ot(t, e, 2);
  }
  function cs(e) {
    var t = Et();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ua)) {
        tn(!0);
        try {
          n();
        } finally {
          tn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function vf(e, t, n, a) {
    return ((e.baseState = n), rs(e, He, typeof a == 'function' ? a : Dn));
  }
  function ig(e, t, n, a, l) {
    if (du(e)) throw Error(x(485));
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
      (q.T !== null ? n(!0) : (u.isTransition = !1),
        a(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), gf(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function gf(e, t) {
    var n = t.action,
      a = t.payload,
      l = e.state;
    if (t.isTransition) {
      var u = q.T,
        S = {};
      q.T = S;
      try {
        var C = n(l, a),
          U = q.S;
        (U !== null && U(S, C), yf(e, t, C));
      } catch (Q) {
        os(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (q.T = u));
      }
    } else
      try {
        ((u = n(l, a)), yf(e, t, u));
      } catch (Q) {
        os(e, t, Q);
      }
  }
  function yf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            pf(e, t, a);
          },
          function (a) {
            return os(e, t, a);
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
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), Sf(t), (t = t.next));
      while (t !== a);
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
    if (Re) {
      var n = Ge.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Re) {
            if (qe) {
              t: {
                for (var l = qe, u = Ft; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (((l = Wt(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((u = l.data), (l = u === 'F!' || u === 'F' ? l : null));
              }
              if (l) {
                ((qe = Wt(l.nextSibling)), (a = l.data === 'F!'));
                break e;
              }
            }
            Pn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = Et()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Yf.bind(null, pe, a)),
      (a.dispatch = n),
      (a = cs(!1)),
      (u = gs.bind(null, pe, !1, a.queue)),
      (a = Et()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = ig.bind(null, pe, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function bf(e) {
    var t = Ie();
    return Tf(t, He, e);
  }
  function Tf(e, t, n) {
    if (
      ((t = rs(e, t, xf)[0]),
      (e = cu(Dn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = ti(t);
      } catch (S) {
        throw S === fl ? Ii : S;
      }
    else a = t;
    t = Ie();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048), gl(9, { destroy: void 0 }, ug.bind(null, l, n), null)),
      [a, u, e]
    );
  }
  function ug(e, t) {
    e.action = t;
  }
  function Mf(e) {
    var t = Ie(),
      n = He;
    if (n !== null) return Tf(t, n, e);
    (Ie(), (t = t.memoizedState), (n = Ie()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function gl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = ru()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Cf() {
    return Ie().memoizedState;
  }
  function ou(e, t, n, a) {
    var l = Et();
    ((pe.flags |= e),
      (l.memoizedState = gl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function fu(e, t, n, a) {
    var l = Ie();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    He !== null && a !== null && ts(a, He.memoizedState.deps)
      ? (l.memoizedState = gl(t, u, n, a))
      : ((pe.flags |= e), (l.memoizedState = gl(1 | t, u, n, a)));
  }
  function Rf(e, t) {
    ou(8390656, 8, e, t);
  }
  function fs(e, t) {
    fu(2048, 8, e, t);
  }
  function rg(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = ru()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Af(e) {
    var t = Ie().memoizedState;
    return (
      rg({ ref: t, nextImpl: e }),
      function () {
        if ((ze & 2) !== 0) throw Error(x(440));
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
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && ts(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Nf(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && ts(t, a[1])) return a[0];
    if (((a = e()), Ua)) {
      tn(!0);
      try {
        e();
      } finally {
        tn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function ms(e, t, n) {
    return n === void 0 || ((On & 1073741824) !== 0 && (Me & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Bd()), (pe.lanes |= e), (ra |= e), n);
  }
  function Bf(e, t, n, a) {
    return Bt(n, t)
      ? n
      : ml.current !== null
        ? ((e = ms(e, n, a)), Bt(e, t) || (lt = !0), e)
        : (On & 42) === 0 || ((On & 1073741824) !== 0 && (Me & 261930) === 0)
          ? ((lt = !0), (e.memoizedState = n))
          : ((e = Bd()), (pe.lanes |= e), (ra |= e), t);
  }
  function Uf(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = q.T,
      C = {};
    ((q.T = C), gs(e, !1, t, n));
    try {
      var U = l(),
        Q = q.S;
      if (
        (Q !== null && Q(C, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var W = ng(U, a);
        ni(e, t, W, Yt(e));
      } else ni(e, t, a, Yt(e));
    } catch (I) {
      ni(e, t, { then: function () {}, status: 'rejected', reason: I }, Yt());
    } finally {
      ((K.p = u), S !== null && C.types !== null && (S.types = C.types), (q.T = S));
    }
  }
  function sg() {}
  function hs(e, t, n, a) {
    if (e.tag !== 5) throw Error(x(476));
    var l = Hf(e).queue;
    Uf(
      e,
      l,
      t,
      ne,
      n === null
        ? sg
        : function () {
            return (Lf(e), n(a));
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
        lastRenderedReducer: Dn,
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
          lastRenderedReducer: Dn,
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
    (t.next === null && (t = e.alternate.memoizedState), ni(e, t.next.queue, {}, Yt()));
  }
  function vs() {
    return vt(Si);
  }
  function jf() {
    return Ie().memoizedState;
  }
  function Gf() {
    return Ie().memoizedState;
  }
  function cg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Yt();
          e = ta(n);
          var a = na(t, e, n);
          (a !== null && (Ot(a, t, n), Wl(a, t, n)), (t = { cache: Qr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function og(e, t, n) {
    var a = Yt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      du(e) ? qf(t, n) : ((n = Nr(e, t, n, a)), n !== null && (Ot(n, e, a), Vf(n, t, a))));
  }
  function Yf(e, t, n) {
    var a = Yt();
    ni(e, t, n, a);
  }
  function ni(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (du(e)) qf(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = C), Bt(C, S)))
            return (Ki(e, t, l, 0), Ge === null && Zi(), !1);
        } catch {
        } finally {
        }
      if (((n = Nr(e, t, l, a)), n !== null)) return (Ot(n, e, a), Vf(n, t, a), !0);
    }
    return !1;
  }
  function gs(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ks(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      du(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = Nr(e, n, a, 2)), t !== null && Ot(t, e, 2));
  }
  function du(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function qf(e, t) {
    hl = iu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Vf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Nt(e, n));
    }
  }
  var ai = {
    readContext: vt,
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
  ai.useEffectEvent = Fe;
  var Xf = {
      readContext: vt,
      use: su,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
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
        var n = Et();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ua) {
          tn(!0);
          try {
            e();
          } finally {
            tn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Et();
        if (n !== void 0) {
          var l = n(t);
          if (Ua) {
            tn(!0);
            try {
              n(t);
            } finally {
              tn(!1);
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
          (e = e.dispatch = og.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = cs(e);
        var t = e.queue,
          n = Yf.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: ds,
      useDeferredValue: function (e, t) {
        var n = Et();
        return ms(n, e, t);
      },
      useTransition: function () {
        var e = cs(!1);
        return ((e = Uf.bind(null, pe, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = pe,
          l = Et();
        if (Re) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), Ge === null)) throw Error(x(349));
          (Me & 127) !== 0 || of(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Rf(df.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          gl(9, { destroy: void 0 }, ff.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = Ge.identifierPrefix;
        if (Re) {
          var n = hn,
            a = mn;
          ((n = (a & ~(1 << (32 - xt(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = uu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = ag++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: vs,
      useFormState: Ef,
      useActionState: Ef,
      useOptimistic: function (e) {
        var t = Et();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = n), (t = gs.bind(null, pe, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: us,
      useCacheRefresh: function () {
        return (Et().memoizedState = cg.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = Et(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((ze & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ys = {
      readContext: vt,
      use: su,
      useCallback: wf,
      useContext: vt,
      useEffect: fs,
      useImperativeHandle: zf,
      useInsertionEffect: _f,
      useLayoutEffect: Of,
      useMemo: Nf,
      useReducer: cu,
      useRef: Cf,
      useState: function () {
        return cu(Dn);
      },
      useDebugValue: ds,
      useDeferredValue: function (e, t) {
        var n = Ie();
        return Bf(n, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cu(Dn)[0],
          t = Ie().memoizedState;
        return [typeof e == 'boolean' ? e : ti(e), t];
      },
      useSyncExternalStore: cf,
      useId: jf,
      useHostTransitionStatus: vs,
      useFormState: bf,
      useActionState: bf,
      useOptimistic: function (e, t) {
        var n = Ie();
        return vf(n, He, e, t);
      },
      useMemoCache: us,
      useCacheRefresh: Gf,
    };
  ys.useEffectEvent = Af;
  var Qf = {
    readContext: vt,
    use: su,
    useCallback: wf,
    useContext: vt,
    useEffect: fs,
    useImperativeHandle: zf,
    useInsertionEffect: _f,
    useLayoutEffect: Of,
    useMemo: Nf,
    useReducer: ss,
    useRef: Cf,
    useState: function () {
      return ss(Dn);
    },
    useDebugValue: ds,
    useDeferredValue: function (e, t) {
      var n = Ie();
      return He === null ? ms(n, e, t) : Bf(n, He.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ss(Dn)[0],
        t = Ie().memoizedState;
      return [typeof e == 'boolean' ? e : ti(e), t];
    },
    useSyncExternalStore: cf,
    useId: jf,
    useHostTransitionStatus: vs,
    useFormState: Mf,
    useActionState: Mf,
    useOptimistic: function (e, t) {
      var n = Ie();
      return He !== null ? vf(n, He, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: us,
    useCacheRefresh: Gf,
  };
  Qf.useEffectEvent = Af;
  function ps(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ss = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Yt(),
        l = ta(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = na(e, l, a)),
        t !== null && (Ot(t, e, a), Wl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Yt(),
        l = ta(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = na(e, l, a)),
        t !== null && (Ot(t, e, a), Wl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Yt(),
        a = ta(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = na(e, a, n)),
        t !== null && (Ot(t, e, n), Wl(t, e, n)));
    },
  };
  function Zf(e, t, n, a, l, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xl(n, a) || !Xl(l, u)
          : !0
    );
  }
  function Kf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Ss.enqueueReplaceState(t, t.state, null));
  }
  function Ha(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var a in t) a !== 'ref' && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = y({}, n));
      for (var l in e) n[l] === void 0 && (n[l] = e[l]);
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
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function $f(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function xs(e, t, n) {
    return (
      (n = ta(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        mu(e, t);
      }),
      n
    );
  }
  function Wf(e) {
    return ((e = ta(e)), (e.tag = 3), e);
  }
  function Pf(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          $f(t, n, a);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        ($f(t, n, a),
          typeof l != 'function' && (sa === null ? (sa = new Set([this])) : sa.add(this)));
        var C = a.stack;
        this.componentDidCatch(a.value, { componentStack: C !== null ? C : '' });
      });
  }
  function fg(e, t, n, a, l) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && sl(t, n, l, !0), (n = Ht.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              $t === null ? Cu() : n.alternate === null && $e === 0 && ($e = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Zs(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === eu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  Zs(e, a, l)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Zs(e, a, l), Cu(), !1);
    }
    if (Re)
      return (
        (t = Ht.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== Gr && ((e = Error(x(422), { cause: a })), Kl(Kt(e, n))))
          : (a !== Gr && ((t = Error(x(423), { cause: a })), Kl(Kt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = Kt(a, n)),
            (l = xs(e.stateNode, a, l)),
            $r(e, l),
            $e !== 4 && ($e = 2)),
        !1
      );
    var u = Error(x(520), { cause: a });
    if (((u = Kt(u, n)), fi === null ? (fi = [u]) : fi.push(u), $e !== 4 && ($e = 2), t === null))
      return !0;
    ((a = Kt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = xs(n.stateNode, a, e)),
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
                  (sa === null || !sa.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Wf(l)),
              Pf(l, e, n, a),
              $r(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Es = Error(x(461)),
    lt = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? tf(t, null, n, a) : Ba(t, e.child, n, a);
  }
  function If(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var S = {};
      for (var C in a) C !== 'ref' && (S[C] = a[C]);
    } else S = a;
    return (
      Da(t),
      (a = ns(e, t, n, S, u, l)),
      (C = as()),
      e !== null && !lt
        ? (ls(e, t, l), zn(e, t, l))
        : (Re && C && Lr(t), (t.flags |= 1), gt(e, t, a, l), t.child)
    );
  }
  function ed(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Br(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), td(e, t, u, a, l))
        : ((e = ki(n.type, null, a, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Os(e, l))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Xl), n(S, a) && e.ref === t.ref))
        return zn(e, t, l);
    }
    return ((t.flags |= 1), (e = Cn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function td(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xl(u, a) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = a = u), Os(e, l))) (e.flags & 131072) !== 0 && (lt = !0);
        else return ((t.lanes = e.lanes), zn(e, t, l));
    }
    return bs(e, t, n, a, l);
  }
  function nd(e, t, n, a) {
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
        return ad(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pi(t, u !== null ? u.cachePool : null),
          u !== null ? lf(t, u) : Pr(),
          uf(t));
      else return ((a = t.lanes = 536870912), ad(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (Pi(t, u.cachePool), lf(t, u), la(), (t.memoizedState = null))
        : (e !== null && Pi(t, null), Pr(), la());
    return (gt(e, t, l, n), t.child);
  }
  function li(e, t) {
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
  function ad(e, t, n, a, l) {
    var u = Kr();
    return (
      (u = u === null ? null : { parent: nt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Pi(t, null),
      Pr(),
      uf(t),
      e !== null && sl(e, t, a, !0),
      (t.childLanes = l),
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
  function ld(e, t, n) {
    return (
      Ba(t, e.child, null, n),
      (e = hu(t, t.pendingProps)),
      (e.flags |= 2),
      Lt(t),
      (t.memoizedState = null),
      e
    );
  }
  function dg(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Re) {
        if (a.mode === 'hidden') return ((e = hu(t, a)), (t.lanes = 536870912), li(null, e));
        if (
          (es(t),
          (e = qe)
            ? ((e = gm(e, Ft)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: $n !== null ? { id: mn, overflow: hn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yo(e)),
                (n.return = t),
                (t.child = n),
                (ht = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Pn(t);
        return ((t.lanes = 536870912), null);
      }
      return hu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((es(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = ld(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((lt || sl(e, t, n, !1), (l = (n & e.childLanes) !== 0), lt || l)) {
        if (((a = Ge), a !== null && ((S = En(a, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Ra(e, S), Ot(a, e, S), Es);
        (Cu(), (t = ld(e, t, n)));
      } else
        ((e = u.treeContext),
          (qe = Wt(S.nextSibling)),
          (ht = t),
          (Re = !0),
          (Wn = null),
          (Ft = !1),
          e !== null && Xo(t, e),
          (t = hu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Cn(e.child, { mode: a.mode, children: a.children })),
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
  function bs(e, t, n, a, l) {
    return (
      Da(t),
      (n = ns(e, t, n, a, void 0, l)),
      (a = as()),
      e !== null && !lt
        ? (ls(e, t, l), zn(e, t, l))
        : (Re && a && Lr(t), (t.flags |= 1), gt(e, t, n, l), t.child)
    );
  }
  function id(e, t, n, a, l, u) {
    return (
      Da(t),
      (t.updateQueue = null),
      (n = sf(t, a, n, l)),
      rf(e),
      (a = as()),
      e !== null && !lt
        ? (ls(e, t, u), zn(e, t, u))
        : (Re && a && Lr(t), (t.flags |= 1), gt(e, t, n, u), t.child)
    );
  }
  function ud(e, t, n, a, l) {
    if ((Da(t), t.stateNode === null)) {
      var u = ll,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = vt(S)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ss),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        kr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? vt(S) : ll),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (ps(t, n, S, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && Ss.enqueueReplaceState(u, u.state, null),
          Il(t, a, u, l),
          Pl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        U = Ha(n, C);
      u.props = U;
      var Q = u.context,
        W = n.contextType;
      ((S = ll), typeof W == 'object' && W !== null && (S = vt(W)));
      var I = n.getDerivedStateFromProps;
      ((W = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        W ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((C || Q !== S) && Kf(t, u, a, S)),
        (ea = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Il(t, a, u, l),
        Pl(),
        (Q = t.memoizedState),
        C || Z !== Q || ea
          ? (typeof I == 'function' && (ps(t, n, I, a), (Q = t.memoizedState)),
            (U = ea || Zf(t, n, U, a, Z, Q, S))
              ? (W ||
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
            (a = U))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
    } else {
      ((u = t.stateNode),
        Fr(e, t),
        (S = t.memoizedProps),
        (W = Ha(n, S)),
        (u.props = W),
        (I = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = ll),
        typeof Q == 'object' && Q !== null && (U = vt(Q)),
        (C = n.getDerivedStateFromProps),
        (Q = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== I || Z !== U) && Kf(t, u, a, U)),
        (ea = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Il(t, a, u, l),
        Pl());
      var k = t.memoizedState;
      S !== I || Z !== k || ea || (e !== null && e.dependencies !== null && $i(e.dependencies))
        ? (typeof C == 'function' && (ps(t, n, C, a), (k = t.memoizedState)),
          (W =
            ea ||
            Zf(t, n, W, a, Z, k, U) ||
            (e !== null && e.dependencies !== null && $i(e.dependencies)))
            ? (Q ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(a, k, U),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, k, U)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = k)),
          (u.props = a),
          (u.state = k),
          (u.context = U),
          (a = W))
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
      vu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ba(t, e.child, null, l)), (t.child = Ba(t, null, n, l)))
            : gt(e, t, n, l),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = zn(e, t, l)),
      e
    );
  }
  function rd(e, t, n, a) {
    return (_a(), (t.flags |= 256), gt(e, t, n, a), t.child);
  }
  var Ts = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ms(e) {
    return { baseLanes: e, cachePool: Fo() };
  }
  function Cs(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Gt), e);
  }
  function sd(e, t, n) {
    var a = t.pendingProps,
      l = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0),
      S && ((l = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Re) {
        if (
          (l ? aa(t) : la(),
          (e = qe)
            ? ((e = gm(e, Ft)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: $n !== null ? { id: mn, overflow: hn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Yo(e)),
                (n.return = t),
                (t.child = n),
                (ht = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Pn(t);
        return (rc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = a.children;
      return (
        (a = a.fallback),
        l
          ? (la(),
            (l = t.mode),
            (C = gu({ mode: 'hidden', children: C }, l)),
            (a = Aa(a, l, n, null)),
            (C.return = t),
            (a.return = t),
            (C.sibling = a),
            (t.child = C),
            (a = t.child),
            (a.memoizedState = Ms(n)),
            (a.childLanes = Cs(e, S, n)),
            (t.memoizedState = Ts),
            li(null, a))
          : (aa(t), Rs(t, C))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((C = U.dehydrated), C !== null)) {
      if (u)
        t.flags & 256
          ? (aa(t), (t.flags &= -257), (t = As(e, t, n)))
          : t.memoizedState !== null
            ? (la(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (la(),
              (C = a.fallback),
              (l = t.mode),
              (a = gu({ mode: 'visible', children: a.children }, l)),
              (C = Aa(C, l, n, null)),
              (C.flags |= 2),
              (a.return = t),
              (C.return = t),
              (a.sibling = C),
              (t.child = a),
              Ba(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Ms(n)),
              (a.childLanes = Cs(e, S, n)),
              (t.memoizedState = Ts),
              (t = li(null, a)));
      else if ((aa(t), rc(C))) {
        if (((S = C.nextSibling && C.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (a = Error(x(419))),
          (a.stack = ''),
          (a.digest = S),
          Kl({ value: a, source: null, stack: null }),
          (t = As(e, t, n)));
      } else if ((lt || sl(e, t, n, !1), (S = (n & e.childLanes) !== 0), lt || S)) {
        if (((S = Ge), S !== null && ((a = En(S, n)), a !== 0 && a !== U.retryLane)))
          throw ((U.retryLane = a), Ra(e, a), Ot(S, e, a), Es);
        (uc(C) || Cu(), (t = As(e, t, n)));
      } else
        uc(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (qe = Wt(C.nextSibling)),
            (ht = t),
            (Re = !0),
            (Wn = null),
            (Ft = !1),
            e !== null && Xo(t, e),
            (t = Rs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (la(),
        (C = a.fallback),
        (l = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (a = Cn(U, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (C = Cn(Q, C)) : ((C = Aa(C, l, n, null)), (C.flags |= 2)),
        (C.return = t),
        (a.return = t),
        (a.sibling = C),
        (t.child = a),
        li(null, a),
        (a = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = Ms(n))
          : ((l = C.cachePool),
            l !== null
              ? ((U = nt._currentValue), (l = l.parent !== U ? { parent: U, pool: U } : l))
              : (l = Fo()),
            (C = { baseLanes: C.baseLanes | n, cachePool: l })),
        (a.memoizedState = C),
        (a.childLanes = Cs(e, S, n)),
        (t.memoizedState = Ts),
        li(e.child, a))
      : (aa(t),
        (n = e.child),
        (e = n.sibling),
        (n = Cn(n, { mode: 'visible', children: a.children })),
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
    return ((e = Ut(22, e, null, t)), (e.lanes = 0), e);
  }
  function As(e, t, n) {
    return (
      Ba(t, e.child, null, n),
      (e = Rs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Vr(e.return, t, n));
  }
  function _s(e, t, n, a, l, u) {
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
  function od(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    a = a.children;
    var S = Pe.current,
      C = (S & 2) !== 0;
    if (
      (C ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      ae(Pe, S),
      gt(e, t, a, n),
      (a = Re ? Zl : 0),
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
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && lu(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          _s(t, !1, l, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && lu(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        _s(t, !0, n, null, u, a);
        break;
      case 'together':
        _s(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ra |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((sl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t));
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
        (ye(t, t.stateNode.containerInfo), In(t, nt, e.memoizedState.cache), _a());
        break;
      case 27:
      case 5:
        Je(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        In(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), es(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (aa(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? sd(e, t, n)
              : (aa(t), (e = zn(e, t, n)), e !== null ? e.sibling : null);
        aa(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (sl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return od(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ae(Pe, Pe.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), nd(e, t, n, t.pendingProps));
      case 24:
        In(t, nt, e.memoizedState.cache);
    }
    return zn(e, t, n);
  }
  function fd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) lt = !0;
      else {
        if (!Os(e, n) && (t.flags & 128) === 0) return ((lt = !1), mg(e, t, n));
        lt = (e.flags & 131072) !== 0;
      }
    else ((lt = !1), Re && (t.flags & 1048576) !== 0 && Vo(t, Zl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = wa(t.elementType)), (t.type = e), typeof e == 'function'))
            Br(e)
              ? ((a = Ha(e, a)), (t.tag = 1), (t = ud(null, t, e, a, n)))
              : ((t.tag = 0), (t = bs(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                ((t.tag = 11), (t = If(null, t, e, a, n)));
                break e;
              } else if (l === O) {
                ((t.tag = 14), (t = ed(null, t, e, a, n)));
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
        return ((a = t.type), (l = Ha(a, t.pendingProps)), ud(e, t, a, l, n));
      case 3:
        e: {
          if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((l = u.element), Fr(e, t), Il(t, a, null, n));
          var S = t.memoizedState;
          if (
            ((a = S.cache),
            In(t, nt, a),
            a !== u.cache && Xr(t, [nt], n, !0),
            Pl(),
            (a = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = rd(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = Kt(Error(x(424)), t)), Kl(l), (t = rd(e, t, a, n)));
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
                qe = Wt(e.firstChild),
                  ht = t,
                  Re = !0,
                  Wn = null,
                  Ft = !0,
                  n = tf(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((_a(), a === l)) {
              t = zn(e, t, n);
              break e;
            }
            gt(e, t, a, n);
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
              : Re ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = wu(ie.current).createElement(n)),
                (a[mt] = t),
                (a[Tt] = e),
                yt(a, n, e),
                ot(a),
                (t.stateNode = a))
            : (t.memoizedState = bm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Je(t),
          e === null &&
            Re &&
            ((a = t.stateNode = Sm(t.type, t.pendingProps, ie.current)),
            (ht = t),
            (Ft = !0),
            (l = qe),
            da(t.type) ? ((sc = l), (qe = Wt(a.firstChild))) : (qe = l)),
          gt(e, t, t.pendingProps.children, n),
          vu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Re &&
            ((l = a = qe) &&
              ((a = Xg(a, t.type, t.pendingProps, Ft)),
              a !== null
                ? ((t.stateNode = a), (ht = t), (qe = Wt(a.firstChild)), (Ft = !1), (l = !0))
                : (l = !1)),
            l || Pn(t)),
          Je(t),
          (l = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (a = u.children),
          ac(l, u) ? (a = null) : S !== null && ac(l, S) && (t.flags |= 32),
          t.memoizedState !== null && ((l = ns(e, t, lg, null, null, n)), (Si._currentValue = l)),
          vu(e, t),
          gt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Re &&
            ((e = n = qe) &&
              ((n = Qg(n, t.pendingProps, Ft)),
              n !== null ? ((t.stateNode = n), (ht = t), (qe = null), (e = !0)) : (e = !1)),
            e || Pn(t)),
          null
        );
      case 13:
        return sd(e, t, n);
      case 4:
        return (
          ye(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ba(t, null, a, n)) : gt(e, t, a, n),
          t.child
        );
      case 11:
        return If(e, t, t.type, t.pendingProps, n);
      case 7:
        return (gt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), In(t, t.type, a.value), gt(e, t, a.children, n), t.child);
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          Da(t),
          (l = vt(l)),
          (a = a(l)),
          (t.flags |= 1),
          gt(e, t, a, n),
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
          Da(t),
          (a = vt(nt)),
          e === null
            ? ((l = Kr()),
              l === null &&
                ((l = Ge),
                (u = Qr()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: a, cache: l }),
              kr(t),
              In(t, nt, l))
            : ((e.lanes & n) !== 0 && (Fr(e, t), Il(t, null, null, n), Pl()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  In(t, nt, a))
                : ((a = u.cache), In(t, nt, a), a !== l.cache && Xr(t, [nt], n, !0))),
          gt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function wn(e) {
    e.flags |= 4;
  }
  function Ds(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jd()) e.flags |= 8192;
        else throw ((Na = eu), Jr);
    } else e.flags &= -16777217;
  }
  function dd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Am(t)))
      if (jd()) e.flags |= 8192;
      else throw ((Na = eu), Jr);
  }
  function yu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? et() : 536870912), (e.lanes |= t), (xl |= t)));
  }
  function ii(e, t) {
    if (!Re)
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
  function Ve(e) {
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
  function hg(e, t, n) {
    var a = t.pendingProps;
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
        return (Ve(t), null);
      case 1:
        return (Ve(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          _n(nt),
          Ae(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (rl(t)
              ? wn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Yr())),
          Ve(t),
          null
        );
      case 26:
        var l = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (wn(t), u !== null ? (Ve(t), dd(t, u)) : (Ve(t), Ds(t, l, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (wn(t), Ve(t), dd(t, u))
                : (Ve(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && wn(t), Ve(t), Ds(t, l, e, a, n)),
          null
        );
      case 27:
        if ((ut(t), (n = ie.current), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && wn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          ((e = le.current), rl(t) ? Qo(t) : ((e = Sm(l, a, n)), (t.stateNode = e), wn(t)));
        }
        return (Ve(t), null);
      case 5:
        if ((ut(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && wn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          if (((u = le.current), rl(t))) Qo(t);
          else {
            var S = wu(ie.current);
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
            ((u[mt] = t), (u[Tt] = a));
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
            e: switch ((yt(u, l, a), l)) {
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
            a && wn(t);
          }
        }
        return (Ve(t), Ds(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && wn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ie.current), rl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (l = ht), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((e[mt] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                sm(e.nodeValue, n)
              )),
              e || Pn(t, !0));
          } else ((e = wu(e).createTextNode(a)), (e[mt] = t), (t.stateNode = e));
        }
        return (Ve(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = rl(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[mt] = t;
            } else (_a(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (e = !1));
          } else
            ((n = Yr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (Ve(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = rl(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(x(317));
              l[mt] = t;
            } else (_a(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (l = !1));
          } else
            ((l = Yr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
        }
        return (
          Lt(t),
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
              yu(t, t.updateQueue),
              Ve(t),
              null)
        );
      case 4:
        return (Ae(), e === null && Ps(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (_n(t.type), Ve(t), null);
      case 19:
        if ((F(Pe), (a = t.memoizedState), a === null)) return (Ve(t), null);
        if (((l = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (l) ii(a, !1);
          else {
            if ($e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = lu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ii(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      yu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Go(n, e), (n = n.sibling));
                  return (ae(Pe, (Pe.current & 1) | 2), Re && Rn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              st() > bu &&
              ((t.flags |= 128), (l = !0), ii(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = lu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yu(t, e),
                ii(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Re)
              )
                return (Ve(t), null);
            } else
              2 * st() - a.renderingStartTime > bu &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ii(a, !1), (t.lanes = 4194304));
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
            (n = Pe.current),
            ae(Pe, l ? (n & 1) | 2 : n & 1),
            Re && Rn(t, a.treeForkCount),
            e)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Lt(t),
          Ir(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          (n = t.updateQueue),
          n !== null && yu(t, n.retryQueue),
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
          e !== null && F(za),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          _n(nt),
          Ve(t),
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
          _n(nt),
          Ae(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (ut(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Lt(t), t.alternate === null)) throw Error(x(340));
          _a();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Lt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          _a();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (F(Pe), null);
      case 4:
        return (Ae(), null);
      case 10:
        return (_n(t.type), null);
      case 22:
      case 23:
        return (
          Lt(t),
          Ir(),
          e !== null && F(za),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (_n(nt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(e, t) {
    switch ((jr(t), t.tag)) {
      case 3:
        (_n(nt), Ae());
        break;
      case 26:
      case 27:
      case 5:
        ut(t);
        break;
      case 4:
        Ae();
        break;
      case 31:
        t.memoizedState !== null && Lt(t);
        break;
      case 13:
        Lt(t);
        break;
      case 19:
        F(Pe);
        break;
      case 10:
        _n(t.type);
        break;
      case 22:
      case 23:
        (Lt(t), Ir(), e !== null && F(za));
        break;
      case 24:
        _n(nt);
    }
  }
  function ui(e, t) {
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
    } catch (C) {
      Be(t, t.return, C);
    }
  }
  function ia(e, t, n) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var S = a.inst,
              C = S.destroy;
            if (C !== void 0) {
              ((S.destroy = void 0), (l = t));
              var U = n,
                Q = C;
              try {
                Q();
              } catch (W) {
                Be(l, U, W);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (W) {
      Be(t, t.return, W);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        af(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function vd(e, t, n) {
    ((n.props = Ha(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Be(e, t, a);
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
      Be(e, t, l);
    }
  }
  function vn(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (l) {
          Be(e, t, l);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (l) {
          Be(e, t, l);
        }
      else n.current = null;
  }
  function gd(e) {
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
      Be(e, e.return, l);
    }
  }
  function zs(e, t, n) {
    try {
      var a = e.stateNode;
      (Lg(a, e.type, n, t), (a[Tt] = t));
    } catch (l) {
      Be(e, e.return, l);
    }
  }
  function yd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && da(e.type)) || e.tag === 4
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
        if ((e.tag === 27 && da(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ns(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Tn)));
    else if (
      a !== 4 &&
      (a === 27 && da(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ns(e, t, n), e = e.sibling; e !== null; ) (Ns(e, t, n), (e = e.sibling));
  }
  function pu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && da(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (pu(e, t, n), e = e.sibling; e !== null; ) (pu(e, t, n), (e = e.sibling));
  }
  function pd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      (yt(t, a, n), (t[mt] = e), (t[Tt] = n));
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var Nn = !1,
    it = !1,
    Bs = !1,
    Sd = typeof WeakSet == 'function' ? WeakSet : Set,
    ft = null;
  function gg(e, t) {
    if (((e = e.containerInfo), (tc = Gu), (e = Do(e)), Ar(e))) {
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
              C = -1,
              U = -1,
              Q = 0,
              W = 0,
              I = e,
              Z = null;
            t: for (;;) {
              for (
                var k;
                I !== n || (l !== 0 && I.nodeType !== 3) || (C = S + l),
                  I !== u || (a !== 0 && I.nodeType !== 3) || (U = S + a),
                  I.nodeType === 3 && (S += I.nodeValue.length),
                  (k = I.firstChild) !== null;
              )
                ((Z = I), (I = k));
              for (;;) {
                if (I === e) break t;
                if (
                  (Z === n && ++Q === l && (C = S),
                  Z === u && ++W === a && (U = S),
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
    for (nc = { focusedElem: e, selectionRange: n }, Gu = !1, ft = t; ft !== null; )
      if (((t = ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (ft = e));
      else
        for (; ft !== null; ) {
          switch (((t = ft), (u = t.alternate), (e = t.flags), t.tag)) {
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
                  var re = Ha(n.type, l);
                  ((e = a.getSnapshotBeforeUpdate(re, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (me) {
                  Be(n, n.return, me);
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
            ((e.return = t.return), (ft = e));
            break;
          }
          ft = t.return;
        }
  }
  function xd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Un(e, n), a & 4 && ui(5, n));
        break;
      case 1:
        if ((Un(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              Be(n, n.return, S);
            }
          else {
            var l = Ha(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              Be(n, n.return, S);
            }
          }
        (a & 64 && hd(n), a & 512 && ri(n, n.return));
        break;
      case 3:
        if ((Un(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            af(e, t);
          } catch (S) {
            Be(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && a & 4 && pd(n);
      case 26:
      case 5:
        (Un(e, n), t === null && a & 4 && gd(n), a & 512 && ri(n, n.return));
        break;
      case 12:
        Un(e, n);
        break;
      case 31:
        (Un(e, n), a & 4 && Td(e, n));
        break;
      case 13:
        (Un(e, n),
          a & 4 && Md(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = Cg.bind(null, n)), Zg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Nn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || it), (l = Nn));
          var u = it;
          ((Nn = a),
            (it = t) && !u ? Hn(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n),
            (Nn = l),
            (it = u));
        }
        break;
      case 30:
        break;
      default:
        Un(e, n);
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
  var Qe = null,
    Ct = !1;
  function Bn(e, t, n) {
    for (n = n.child; n !== null; ) (bd(e, t, n), (n = n.sibling));
  }
  function bd(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(Ea, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (it || vn(n, t),
          Bn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        it || vn(n, t);
        var a = Qe,
          l = Ct;
        (da(n.type) && ((Qe = n.stateNode), (Ct = !1)),
          Bn(e, t, n),
          gi(n.stateNode),
          (Qe = a),
          (Ct = l));
        break;
      case 5:
        it || vn(n, t);
      case 6:
        if (((a = Qe), (l = Ct), (Qe = null), Bn(e, t, n), (Qe = a), (Ct = l), Qe !== null))
          if (Ct)
            try {
              (Qe.nodeType === 9
                ? Qe.body
                : Qe.nodeName === 'HTML'
                  ? Qe.ownerDocument.body
                  : Qe
              ).removeChild(n.stateNode);
            } catch (u) {
              Be(n, t, u);
            }
          else
            try {
              Qe.removeChild(n.stateNode);
            } catch (u) {
              Be(n, t, u);
            }
        break;
      case 18:
        Qe !== null &&
          (Ct
            ? ((e = Qe),
              hm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              _l(e))
            : hm(Qe, n.stateNode));
        break;
      case 4:
        ((a = Qe),
          (l = Ct),
          (Qe = n.stateNode.containerInfo),
          (Ct = !0),
          Bn(e, t, n),
          (Qe = a),
          (Ct = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ia(2, n, t), it || ia(4, n, t), Bn(e, t, n));
        break;
      case 1:
        (it ||
          (vn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && vd(n, t, a)),
          Bn(e, t, n));
        break;
      case 21:
        Bn(e, t, n);
        break;
      case 22:
        ((it = (a = it) || n.memoizedState !== null), Bn(e, t, n), (it = a));
        break;
      default:
        Bn(e, t, n);
    }
  }
  function Td(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        _l(e);
      } catch (n) {
        Be(t, t.return, n);
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
        _l(e);
      } catch (n) {
        Be(t, t.return, n);
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
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Rg.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          u = e,
          S = t,
          C = S;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (da(C.type)) {
                ((Qe = C.stateNode), (Ct = !1));
                break e;
              }
              break;
            case 5:
              ((Qe = C.stateNode), (Ct = !1));
              break e;
            case 3:
            case 4:
              ((Qe = C.stateNode.containerInfo), (Ct = !0));
              break e;
          }
          C = C.return;
        }
        if (Qe === null) throw Error(x(160));
        (bd(u, S, l),
          (Qe = null),
          (Ct = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Cd(t, e), (t = t.sibling));
  }
  var ln = null;
  function Cd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Rt(t, e), At(e), a & 4 && (ia(3, e, e.return), ui(3, e), ia(5, e, e.return)));
        break;
      case 1:
        (Rt(t, e),
          At(e),
          a & 512 && (it || n === null || vn(n, n.return)),
          a & 64 &&
            Nn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = ln;
        if ((Rt(t, e), At(e), a & 512 && (it || n === null || vn(n, n.return)), a & 4)) {
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
                          u[Bl] ||
                          u[mt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = l.createElement(a)),
                          l.head.insertBefore(u, l.querySelector('head > title'))),
                        yt(u, a, n),
                        (u[mt] = e),
                        ot(u),
                        (a = u));
                      break e;
                    case 'link':
                      var S = Cm('link', 'href', l).get(a + (n.href || ''));
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
                      ((u = l.createElement(a)), yt(u, a, n), l.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = Cm('meta', 'content', l).get(a + (n.content || '')))) {
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
                      ((u = l.createElement(a)), yt(u, a, n), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, a));
                  }
                  ((u[mt] = e), ot(u), (a = u));
                }
                e.stateNode = a;
              } else Rm(l, e.type, e.stateNode);
            else e.stateNode = Mm(l, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? Rm(l, e.type, e.stateNode) : Mm(l, a, e.memoizedProps))
              : a === null && e.stateNode !== null && zs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Rt(t, e),
          At(e),
          a & 512 && (it || n === null || vn(n, n.return)),
          n !== null && a & 4 && zs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Rt(t, e), At(e), a & 512 && (it || n === null || vn(n, n.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            Wa(l, '');
          } catch (re) {
            Be(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), zs(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (Bs = !0));
        break;
      case 6:
        if ((Rt(t, e), At(e), a & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (re) {
            Be(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((Uu = null),
          (l = ln),
          (ln = Nu(t.containerInfo)),
          Rt(t, e),
          (ln = l),
          At(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            _l(t.containerInfo);
          } catch (re) {
            Be(e, e.return, re);
          }
        Bs && ((Bs = !1), Rd(e));
        break;
      case 4:
        ((a = ln), (ln = Nu(e.stateNode.containerInfo)), Rt(t, e), At(e), (ln = a));
        break;
      case 12:
        (Rt(t, e), At(e));
        break;
      case 31:
        (Rt(t, e),
          At(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Su(e, a))));
        break;
      case 13:
        (Rt(t, e),
          At(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Eu = st()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Su(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = Nn,
          W = it;
        if (((Nn = Q || l), (it = W || U), Rt(t, e), (it = W), (Nn = Q), At(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || U || Nn || it || La(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                U = n = t;
                try {
                  if (((u = U.stateNode), l))
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
                  Be(U, U.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = l ? '' : U.memoizedProps;
                } catch (re) {
                  Be(U, U.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                U = t;
                try {
                  var k = U.stateNode;
                  l ? vm(k, !0) : vm(U.stateNode, !1);
                } catch (re) {
                  Be(U, U.return, re);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Su(e, n))));
        break;
      case 19:
        (Rt(t, e),
          At(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Su(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Rt(t, e), At(e));
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (yd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = ws(e);
            pu(e, u, l);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (Wa(S, ''), (n.flags &= -33));
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
        Be(e, e.return, W);
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
  function Un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (xd(e, t.alternate, t), (t = t.sibling));
  }
  function La(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ia(4, t, t.return), La(t));
          break;
        case 1:
          vn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && vd(t, t.return, n), La(t));
          break;
        case 27:
          gi(t.stateNode);
        case 26:
        case 5:
          (vn(t, t.return), La(t));
          break;
        case 22:
          t.memoizedState === null && La(t);
          break;
        case 30:
          La(t);
          break;
        default:
          La(t);
      }
      e = e.sibling;
    }
  }
  function Hn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        l = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Hn(l, u, n), ui(4, u));
          break;
        case 1:
          if ((Hn(l, u, n), (a = u), (l = a.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (Q) {
              Be(a, a.return, Q);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var C = a.stateNode;
            try {
              var U = l.shared.hiddenCallbacks;
              if (U !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < U.length; l++) nf(U[l], C);
            } catch (Q) {
              Be(a, a.return, Q);
            }
          }
          (n && S & 64 && hd(u), ri(u, u.return));
          break;
        case 27:
          pd(u);
        case 26:
        case 5:
          (Hn(l, u, n), n && a === null && S & 4 && gd(u), ri(u, u.return));
          break;
        case 12:
          Hn(l, u, n);
          break;
        case 31:
          (Hn(l, u, n), n && S & 4 && Td(l, u));
          break;
        case 13:
          (Hn(l, u, n), n && S & 4 && Md(l, u));
          break;
        case 22:
          (u.memoizedState === null && Hn(l, u, n), ri(u, u.return));
          break;
        case 30:
          break;
        default:
          Hn(l, u, n);
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
      e !== n && (e != null && e.refCount++, n != null && Jl(n)));
  }
  function Hs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Jl(e)));
  }
  function un(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Ad(e, t, n, a), (t = t.sibling));
  }
  function Ad(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (un(e, t, n, a), l & 2048 && ui(9, t));
        break;
      case 1:
        un(e, t, n, a);
        break;
      case 3:
        (un(e, t, n, a),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Jl(e))));
        break;
      case 12:
        if (l & 2048) {
          (un(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              C = u.onPostCommit;
            typeof C == 'function' &&
              C(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (U) {
            Be(t, t.return, U);
          }
        } else un(e, t, n, a);
        break;
      case 31:
        un(e, t, n, a);
        break;
      case 13:
        un(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? un(e, t, n, a)
              : si(e, t)
            : u._visibility & 2
              ? un(e, t, n, a)
              : ((u._visibility |= 2), yl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && Us(S, t));
        break;
      case 24:
        (un(e, t, n, a), l & 2048 && Hs(t.alternate, t));
        break;
      default:
        un(e, t, n, a);
    }
  }
  function yl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        S = t,
        C = n,
        U = a,
        Q = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          (yl(u, S, C, U, l), ui(8, S));
          break;
        case 23:
          break;
        case 22:
          var W = S.stateNode;
          (S.memoizedState !== null
            ? W._visibility & 2
              ? yl(u, S, C, U, l)
              : si(u, S)
            : ((W._visibility |= 2), yl(u, S, C, U, l)),
            l && Q & 2048 && Us(S.alternate, S));
          break;
        case 24:
          (yl(u, S, C, U, l), l && Q & 2048 && Hs(S.alternate, S));
          break;
        default:
          yl(u, S, C, U, l);
      }
      t = t.sibling;
    }
  }
  function si(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (si(n, a), l & 2048 && Us(a.alternate, a));
            break;
          case 24:
            (si(n, a), l & 2048 && Hs(a.alternate, a));
            break;
          default:
            si(n, a);
        }
        t = t.sibling;
      }
  }
  var ci = 8192;
  function pl(e, t, n) {
    if (e.subtreeFlags & ci) for (e = e.child; e !== null; ) (_d(e, t, n), (e = e.sibling));
  }
  function _d(e, t, n) {
    switch (e.tag) {
      case 26:
        (pl(e, t, n),
          e.flags & ci && e.memoizedState !== null && a0(n, ln, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        pl(e, t, n);
        break;
      case 3:
      case 4:
        var a = ln;
        ((ln = Nu(e.stateNode.containerInfo)), pl(e, t, n), (ln = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ci), (ci = 16777216), pl(e, t, n), (ci = a))
            : pl(e, t, n));
        break;
      default:
        pl(e, t, n);
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
          var a = t[n];
          ((ft = a), zd(a, e));
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
        (oi(e), e.flags & 2048 && ia(9, e, e.return));
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
          var a = t[n];
          ((ft = a), zd(a, e));
        }
      Od(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ia(8, t, t.return), xu(t));
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
    for (; ft !== null; ) {
      var n = ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Jl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (ft = a));
      else
        e: for (n = e; ft !== null; ) {
          a = ft;
          var l = a.sibling,
            u = a.return;
          if ((Ed(a), a === n)) {
            ft = null;
            break e;
          }
          if (l !== null) {
            ((l.return = u), (ft = l));
            break e;
          }
          ft = u;
        }
    }
  }
  var pg = {
      getCacheForType: function (e) {
        var t = vt(nt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return vt(nt).controller.signal;
      },
    },
    Sg = typeof WeakMap == 'function' ? WeakMap : Map,
    ze = 0,
    Ge = null,
    be = null,
    Me = 0,
    Ne = 0,
    jt = null,
    ua = !1,
    Sl = !1,
    Ls = !1,
    Ln = 0,
    $e = 0,
    ra = 0,
    ja = 0,
    js = 0,
    Gt = 0,
    xl = 0,
    fi = null,
    _t = null,
    Gs = !1,
    Eu = 0,
    wd = 0,
    bu = 1 / 0,
    Tu = null,
    sa = null,
    rt = 0,
    ca = null,
    El = null,
    jn = 0,
    Ys = 0,
    qs = null,
    Nd = null,
    di = 0,
    Vs = null;
  function Yt() {
    return (ze & 2) !== 0 && Me !== 0 ? Me & -Me : q.T !== null ? ks() : Nl();
  }
  function Bd() {
    if (Gt === 0)
      if ((Me & 536870912) === 0 || Re) {
        var e = Ee;
        ((Ee <<= 1), (Ee & 3932160) === 0 && (Ee = 262144), (Gt = e));
      } else Gt = 536870912;
    return ((e = Ht.current), e !== null && (e.flags |= 32), Gt);
  }
  function Ot(e, t, n) {
    (((e === Ge && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (bl(e, 0), oa(e, Me, Gt, !1)),
      Xe(e, n),
      ((ze & 2) === 0 || e !== Ge) &&
        (e === Ge && ((ze & 2) === 0 && (ja |= n), $e === 4 && oa(e, Me, Gt, !1)), gn(e)));
  }
  function Ud(e, t, n) {
    if ((ze & 6) !== 0) throw Error(x(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || we(e, t),
      l = a ? bg(e, t) : Qs(e, t, !0),
      u = a;
    do {
      if (l === 0) {
        Sl && !a && oa(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !xg(n))) {
          ((l = Qs(e, t, !1)), (u = !1));
          continue;
        }
        if (l === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var S = 0;
          else
            ((S = e.pendingLanes & -536870913), (S = S !== 0 ? S : S & 536870912 ? 536870912 : 0));
          if (S !== 0) {
            t = S;
            e: {
              var C = e;
              l = fi;
              var U = C.current.memoizedState.isDehydrated;
              if ((U && (bl(C, S).flags |= 256), (S = Qs(C, S, !1)), S !== 2)) {
                if (Ls && !U) {
                  ((C.errorRecoveryDisabledLanes |= u), (ja |= u), (l = 4));
                  break e;
                }
                ((u = _t), (_t = l), u !== null && (_t === null ? (_t = u) : _t.push.apply(_t, u)));
              }
              l = S;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (bl(e, 0), oa(e, t, 0, !0));
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
              oa(a, t, Gt, !ua);
              break e;
            case 2:
              _t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((t & 62914560) === t && ((l = Eu + 300 - st()), 10 < l)) {
            if ((oa(a, t, Gt, !ua), Se(a, 0, !0) !== 0)) break e;
            ((jn = t),
              (a.timeoutHandle = dm(
                Hd.bind(null, a, n, _t, Tu, Gs, t, Gt, ja, xl, ua, u, 'Throttled', -0, 0),
                l
              )));
            break e;
          }
          Hd(a, n, _t, Tu, Gs, t, Gt, ja, xl, ua, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    gn(e);
  }
  function Hd(e, t, n, a, l, u, S, C, U, Q, W, I, Z, k) {
    if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Tn,
      }),
        _d(t, u, I));
      var re = (u & 62914560) === u ? Eu - st() : (u & 4194048) === u ? wd - st() : 0;
      if (((re = l0(I, re)), re !== null)) {
        ((jn = u),
          (e.cancelPendingCommit = re(Qd.bind(null, e, t, u, n, a, l, S, C, U, W, I, null, Z, k))),
          oa(e, u, S, !Q));
        return;
      }
    }
    Qd(e, t, u, n, a, l, S, C, U);
  }
  function xg(e) {
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
            if (!Bt(u(), l)) return !1;
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
  function oa(e, t, n, a) {
    ((t &= ~js),
      (t &= ~ja),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var l = t; 0 < l; ) {
      var u = 31 - xt(l),
        S = 1 << u;
      ((a[u] = -1), (l &= ~S));
    }
    n !== 0 && tt(e, n, t);
  }
  function Mu() {
    return (ze & 6) === 0 ? (mi(0), !1) : !0;
  }
  function Xs() {
    if (be !== null) {
      if (Ne === 0) var e = be.return;
      else ((e = be), (An = Oa = null), is(e), (dl = null), (Fl = 0), (e = be));
      for (; e !== null; ) (md(e.alternate, e), (e = e.return));
      be = null;
    }
  }
  function bl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Yg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (jn = 0),
      Xs(),
      (Ge = e),
      (be = n = Cn(e.current, null)),
      (Me = t),
      (Ne = 0),
      (jt = null),
      (ua = !1),
      (Sl = we(e, t)),
      (Ls = !1),
      (xl = Gt = js = ja = ra = $e = 0),
      (_t = fi = null),
      (Gs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - xt(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return ((Ln = t), Zi(), n);
  }
  function Ld(e, t) {
    ((pe = null),
      (q.H = ai),
      t === fl || t === Ii
        ? ((t = Po()), (Ne = 3))
        : t === Jr
          ? ((t = Po()), (Ne = 4))
          : (Ne =
              t === Es
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (jt = t),
      be === null && (($e = 1), mu(e, Kt(t, e.current))));
  }
  function jd() {
    var e = Ht.current;
    return e === null
      ? !0
      : (Me & 4194048) === Me
        ? $t === null
        : (Me & 62914560) === Me || (Me & 536870912) !== 0
          ? e === $t
          : !1;
  }
  function Gd() {
    var e = q.H;
    return ((q.H = ai), e === null ? ai : e);
  }
  function Yd() {
    var e = q.A;
    return ((q.A = pg), e);
  }
  function Cu() {
    (($e = 4),
      ua || ((Me & 4194048) !== Me && Ht.current !== null) || (Sl = !0),
      ((ra & 134217727) === 0 && (ja & 134217727) === 0) || Ge === null || oa(Ge, Me, Gt, !1));
  }
  function Qs(e, t, n) {
    var a = ze;
    ze |= 2;
    var l = Gd(),
      u = Yd();
    ((Ge !== e || Me !== t) && ((Tu = null), bl(e, t)), (t = !1));
    var S = $e;
    e: do
      try {
        if (Ne !== 0 && be !== null) {
          var C = be,
            U = jt;
          switch (Ne) {
            case 8:
              (Xs(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ht.current === null && (t = !0);
              var Q = Ne;
              if (((Ne = 0), (jt = null), Tl(e, C, U, Q), n && Sl)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Ne), (Ne = 0), (jt = null), Tl(e, C, U, Q));
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
      (An = Oa = null),
      (ze = a),
      (q.H = l),
      (q.A = u),
      be === null && ((Ge = null), (Me = 0), Zi()),
      S
    );
  }
  function Eg() {
    for (; be !== null; ) qd(be);
  }
  function bg(e, t) {
    var n = ze;
    ze |= 2;
    var a = Gd(),
      l = Yd();
    Ge !== e || Me !== t ? ((Tu = null), (bu = st() + 500), bl(e, t)) : (Sl = we(e, t));
    e: do
      try {
        if (Ne !== 0 && be !== null) {
          t = be;
          var u = jt;
          t: switch (Ne) {
            case 1:
              ((Ne = 0), (jt = null), Tl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if ($o(u)) {
                ((Ne = 0), (jt = null), Vd(t));
                break;
              }
              ((t = function () {
                ((Ne !== 2 && Ne !== 9) || Ge !== e || (Ne = 7), gn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              $o(u) ? ((Ne = 0), (jt = null), Vd(t)) : ((Ne = 0), (jt = null), Tl(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (be.tag) {
                case 26:
                  S = be.memoizedState;
                case 5:
                case 27:
                  var C = be;
                  if (S ? Am(S) : C.stateNode.complete) {
                    ((Ne = 0), (jt = null));
                    var U = C.sibling;
                    if (U !== null) be = U;
                    else {
                      var Q = C.return;
                      Q !== null ? ((be = Q), Ru(Q)) : (be = null);
                    }
                    break t;
                  }
              }
              ((Ne = 0), (jt = null), Tl(e, t, u, 5));
              break;
            case 6:
              ((Ne = 0), (jt = null), Tl(e, t, u, 6));
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
      (An = Oa = null),
      (q.H = a),
      (q.A = l),
      (ze = n),
      be !== null ? 0 : ((Ge = null), (Me = 0), Zi(), $e)
    );
  }
  function Tg() {
    for (; be !== null && !dn(); ) qd(be);
  }
  function qd(e) {
    var t = fd(e.alternate, e, Ln);
    ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (be = t));
  }
  function Vd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = id(n, t, t.pendingProps, t.type, void 0, Me);
        break;
      case 11:
        t = id(n, t, t.pendingProps, t.type.render, t.ref, Me);
        break;
      case 5:
        is(t);
      default:
        (md(n, t), (t = be = Go(t, Ln)), (t = fd(n, t, Ln)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (be = t));
  }
  function Tl(e, t, n, a) {
    ((An = Oa = null), is(t), (dl = null), (Fl = 0));
    var l = t.return;
    try {
      if (fg(e, l, t, n, Me)) {
        (($e = 1), mu(e, Kt(n, e.current)), (be = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((be = l), u);
      (($e = 1), mu(e, Kt(n, e.current)), (be = null));
      return;
    }
    t.flags & 32768
      ? (Re || a === 1
          ? (e = !0)
          : Sl || (Me & 536870912) !== 0
            ? (e = !1)
            : ((ua = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ht.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Xd(t, e))
      : Ru(t);
  }
  function Ru(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Xd(t, ua);
        return;
      }
      e = t.return;
      var n = hg(t.alternate, t, Ln);
      if (n !== null) {
        be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        be = t;
        return;
      }
      be = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function Xd(e, t) {
    do {
      var n = vg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (be = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        be = e;
        return;
      }
      be = e = n;
    } while (e !== null);
    (($e = 6), (be = null));
  }
  function Qd(e, t, n, a, l, u, S, C, U) {
    e.cancelPendingCommit = null;
    do Au();
    while (rt !== 0);
    if ((ze & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= wr),
        ct(e, n, u, S, C, U),
        e === Ge && ((be = Ge = null), (Me = 0)),
        (El = t),
        (ca = e),
        (jn = n),
        (Ys = u),
        (qs = l),
        (Nd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ag(pn, function () {
              return (Fd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = q.T), (q.T = null), (l = K.p), (K.p = 2), (S = ze), (ze |= 4));
        try {
          gg(e, t, n);
        } finally {
          ((ze = S), (K.p = l), (q.T = a));
        }
      }
      ((rt = 1), Zd(), Kd(), Jd());
    }
  }
  function Zd() {
    if (rt === 1) {
      rt = 0;
      var e = ca,
        t = El,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = ze;
        ze |= 4;
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
                    je = U.end === void 0 ? me : Math.min(U.end, re);
                  !k.extend && me > je && ((S = je), (je = me), (me = S));
                  var V = _o(C, me),
                    Y = _o(C, je);
                  if (
                    V &&
                    Y &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== V.node ||
                      k.anchorOffset !== V.offset ||
                      k.focusNode !== Y.node ||
                      k.focusOffset !== Y.offset)
                  ) {
                    var X = I.createRange();
                    (X.setStart(V.node, V.offset),
                      k.removeAllRanges(),
                      me > je
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
          ((ze = l), (K.p = a), (q.T = n));
        }
      }
      ((e.current = t), (rt = 2));
    }
  }
  function Kd() {
    if (rt === 2) {
      rt = 0;
      var e = ca,
        t = El,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = ze;
        ze |= 4;
        try {
          xd(e, t.alternate, t);
        } finally {
          ((ze = l), (K.p = a), (q.T = n));
        }
      }
      rt = 3;
    }
  }
  function Jd() {
    if (rt === 4 || rt === 3) {
      ((rt = 0), Sa());
      var e = ca,
        t = El,
        n = jn,
        a = Nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (rt = 5)
        : ((rt = 0), (El = ca = null), kd(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (sa = null),
        Xa(n),
        (t = t.stateNode),
        St && typeof St.onCommitFiberRoot == 'function')
      )
        try {
          St.onCommitFiberRoot(Ea, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = q.T), (l = K.p), (K.p = 2), (q.T = null));
        try {
          for (var u = e.onRecoverableError, S = 0; S < a.length; S++) {
            var C = a[S];
            u(C.value, { componentStack: C.stack });
          }
        } finally {
          ((q.T = t), (K.p = l));
        }
      }
      ((jn & 3) !== 0 && Au(),
        gn(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0 ? (e === Vs ? di++ : ((di = 0), (Vs = e))) : (di = 0),
        mi(0));
    }
  }
  function kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Jl(t)));
  }
  function Au() {
    return (Zd(), Kd(), Jd(), Fd());
  }
  function Fd() {
    if (rt !== 5) return !1;
    var e = ca,
      t = Ys;
    Ys = 0;
    var n = Xa(jn),
      a = q.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (q.T = null), (n = qs), (qs = null));
      var u = ca,
        S = jn;
      if (((rt = 0), (El = ca = null), (jn = 0), (ze & 6) !== 0)) throw Error(x(331));
      var C = ze;
      if (
        ((ze |= 4),
        Dd(u.current),
        Ad(u, u.current, S, n),
        (ze = C),
        mi(0, !1),
        St && typeof St.onPostCommitFiberRoot == 'function')
      )
        try {
          St.onPostCommitFiberRoot(Ea, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (q.T = a), kd(e, t));
    }
  }
  function $d(e, t, n) {
    ((t = Kt(n, t)),
      (t = xs(e.stateNode, t, 2)),
      (e = na(e, t, 2)),
      e !== null && (Xe(e, 2), gn(e)));
  }
  function Be(e, t, n) {
    if (e.tag === 3) $d(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $d(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (sa === null || !sa.has(a)))
          ) {
            ((e = Kt(n, e)),
              (n = Wf(2)),
              (a = na(t, n, 2)),
              a !== null && (Pf(n, a, t, e), Xe(a, 2), gn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Sg();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || ((Ls = !0), l.add(n), (e = Mg.bind(null, e, t, n)), t.then(e, e));
  }
  function Mg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ge === e &&
        (Me & n) === n &&
        ($e === 4 || ($e === 3 && (Me & 62914560) === Me && 300 > st() - Eu)
          ? (ze & 2) === 0 && bl(e, 0)
          : (js |= n),
        xl === Me && (xl = 0)),
      gn(e));
  }
  function Wd(e, t) {
    (t === 0 && (t = et()), (e = Ra(e, t)), e !== null && (Xe(e, t), gn(e)));
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
    (a !== null && a.delete(t), Wd(e, n));
  }
  function Ag(e, t) {
    return qt(e, t);
  }
  var _u = null,
    Ml = null,
    Ks = !1,
    Ou = !1,
    Js = !1,
    fa = 0;
  function gn(e) {
    (e !== Ml && e.next === null && (Ml === null ? (_u = Ml = e) : (Ml = Ml.next = e)),
      (Ou = !0),
      Ks || ((Ks = !0), Og()));
  }
  function mi(e, t) {
    if (!Js && Ou) {
      Js = !0;
      do
        for (var n = !1, a = _u; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var S = a.suspendedLanes,
                C = a.pingedLanes;
              ((u = (1 << (31 - xt(42 | e) + 1)) - 1),
                (u &= l & ~(S & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), tm(a, u));
          } else
            ((u = Me),
              (u = Se(
                a,
                a === Ge ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || we(a, u) || ((n = !0), tm(a, u)));
          a = a.next;
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
    fa !== 0 && Gg() && (e = fa);
    for (var t = st(), n = null, a = _u; a !== null; ) {
      var l = a.next,
        u = Id(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (_u = l) : (n.next = l), l === null && (Ml = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Ou = !0)),
        (a = l));
    }
    ((rt !== 0 && rt !== 5) || mi(e), fa !== 0 && (fa = 0));
  }
  function Id(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - xt(u),
        C = 1 << S,
        U = l[S];
      (U === -1
        ? ((C & n) === 0 || (C & a) !== 0) && (l[S] = ke(C, t))
        : U <= t && (e.expiredLanes |= C),
        (u &= ~C));
    }
    if (
      ((t = Ge),
      (n = Me),
      (n = Se(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && We(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || we(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && We(a), Xa(n))) {
        case 2:
        case 8:
          n = xa;
          break;
        case 32:
          n = pn;
          break;
        case 268435456:
          n = xn;
          break;
        default:
          n = pn;
      }
      return (
        (a = em.bind(null, e)),
        (n = qt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && We(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function em(e, t) {
    if (rt !== 0 && rt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Au() && e.callbackNode !== n) return null;
    var a = Me;
    return (
      (a = Se(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Ud(e, a, t),
          Id(e, st()),
          e.callbackNode != null && e.callbackNode === n ? em.bind(null, e) : null)
    );
  }
  function tm(e, t) {
    if (Au()) return null;
    Ud(e, t, !0);
  }
  function Og() {
    qg(function () {
      (ze & 6) !== 0 ? qt(wt, _g) : Pd();
    });
  }
  function ks() {
    if (fa === 0) {
      var e = cl;
      (e === 0 && ((e = ue), (ue <<= 1), (ue & 261888) === 0 && (ue = 256)), (fa = e));
    }
    return fa;
  }
  function nm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Li('' + e);
  }
  function am(e, t) {
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
  function Dg(e, t, n, a, l) {
    if (t === 'submit' && n && n.stateNode === l) {
      var u = nm((l[Tt] || null).action),
        S = a.submitter;
      S &&
        ((t = (t = S[Tt] || null) ? nm(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var C = new qi('action', 'action', null, a, l);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (fa !== 0) {
                  var U = S ? am(l, S) : new FormData(l);
                  hs(n, { pending: !0, data: U, method: l.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (C.preventDefault(),
                  (U = S ? am(l, S) : new FormData(l)),
                  hs(n, { pending: !0, data: U, method: l.method, action: u }, u, U));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Fs = 0; Fs < zr.length; Fs++) {
    var $s = zr[Fs],
      zg = $s.toLowerCase(),
      wg = $s[0].toUpperCase() + $s.slice(1);
    an(zg, 'on' + wg);
  }
  (an(No, 'onAnimationEnd'),
    an(Bo, 'onAnimationIteration'),
    an(Uo, 'onAnimationStart'),
    an('dblclick', 'onDoubleClick'),
    an('focusin', 'onFocus'),
    an('focusout', 'onBlur'),
    an(kv, 'onTransitionRun'),
    an(Fv, 'onTransitionStart'),
    an($v, 'onTransitionCancel'),
    an(Ho, 'onTransitionEnd'),
    Fa('onMouseEnter', ['mouseout', 'mouseover']),
    Fa('onMouseLeave', ['mouseout', 'mouseover']),
    Fa('onPointerEnter', ['pointerout', 'pointerover']),
    Fa('onPointerLeave', ['pointerout', 'pointerover']),
    ba('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ba(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ba('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ba('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ba(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ba(
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
  function lm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var S = a.length - 1; 0 <= S; S--) {
            var C = a[S],
              U = C.instance,
              Q = C.currentTarget;
            if (((C = C.listener), U !== u && l.isPropagationStopped())) break e;
            ((u = C), (l.currentTarget = Q));
            try {
              u(l);
            } catch (W) {
              Qi(W);
            }
            ((l.currentTarget = null), (u = U));
          }
        else
          for (S = 0; S < a.length; S++) {
            if (
              ((C = a[S]),
              (U = C.instance),
              (Q = C.currentTarget),
              (C = C.listener),
              U !== u && l.isPropagationStopped())
            )
              break e;
            ((u = C), (l.currentTarget = Q));
            try {
              u(l);
            } catch (W) {
              Qi(W);
            }
            ((l.currentTarget = null), (u = U));
          }
      }
    }
  }
  function Te(e, t) {
    var n = t[cr];
    n === void 0 && (n = t[cr] = new Set());
    var a = e + '__bubble';
    n.has(a) || (im(t, e, 2, !1), n.add(a));
  }
  function Ws(e, t, n) {
    var a = 0;
    (t && (a |= 4), im(n, e, a, t));
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
  function im(e, t, n, a) {
    switch (Bm(t)) {
      case 2:
        var l = r0;
        break;
      case 8:
        l = s0;
        break;
      default:
        l = mc;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !pr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Is(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var S = a.tag;
        if (S === 3 || S === 4) {
          var C = a.stateNode.containerInfo;
          if (C === l) break;
          if (S === 4)
            for (S = a.return; S !== null; ) {
              var U = S.tag;
              if ((U === 3 || U === 4) && S.stateNode.containerInfo === l) return;
              S = S.return;
            }
          for (; C !== null; ) {
            if (((S = Ka(C)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              a = u = S;
              continue e;
            }
            C = C.parentNode;
          }
        }
        a = a.return;
      }
    so(function () {
      var Q = u,
        W = gr(n),
        I = [];
      e: {
        var Z = Lo.get(e);
        if (Z !== void 0) {
          var k = qi,
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
            je = !me && (e === 'scroll' || e === 'scrollend'),
            V = me ? (Z !== null ? Z + 'Capture' : null) : Z;
          me = [];
          for (var Y = Q, X; Y !== null; ) {
            var P = Y;
            if (
              ((X = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                X === null ||
                V === null ||
                ((P = Hl(Y, V)), P != null && me.push(vi(Y, P, X))),
              je)
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
            Z && n !== vr && (re = n.relatedTarget || n.fromElement) && (Ka(re) || re[Za]))
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
                (re = re ? Ka(re) : null),
                re !== null &&
                  ((je = i(re)), (me = re.tag), re !== je || (me !== 5 && me !== 27 && me !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((me = fo),
              (P = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = ho), (P = 'onPointerLeave'), (V = 'onPointerEnter'), (Y = 'pointer')),
              (je = k == null ? Z : Ul(k)),
              (X = re == null ? Z : Ul(re)),
              (Z = new me(P, Y + 'leave', k, n, W)),
              (Z.target = je),
              (Z.relatedTarget = X),
              (P = null),
              Ka(W) === Q &&
                ((me = new me(V, Y + 'enter', re, n, W)),
                (me.target = X),
                (me.relatedTarget = je),
                (P = me)),
              (je = P),
              k && re)
            )
              t: {
                for (me = Bg, V = k, Y = re, X = 0, P = V; P; P = me(P)) X++;
                P = 0;
                for (var fe = Y; fe; fe = me(fe)) P++;
                for (; 0 < X - P; ) ((V = me(V)), X--);
                for (; 0 < P - X; ) ((Y = me(Y)), P--);
                for (; X--; ) {
                  if (V === Y || (Y !== null && V === Y.alternate)) {
                    me = V;
                    break t;
                  }
                  ((V = me(V)), (Y = me(Y)));
                }
                me = null;
              }
            else me = null;
            (k !== null && um(I, Z, k, me, !1),
              re !== null && je !== null && um(I, je, re, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Ul(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var Oe = bo;
          else if (xo(Z))
            if (To) Oe = Zv;
            else {
              Oe = Xv;
              var ce = Vv;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && hr(Q.elementType) && (Oe = bo)
                : (Oe = Qv));
          if (Oe && (Oe = Oe(e, Q))) {
            Eo(I, Oe, n, W);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              mr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Ul(Q) : window), e)) {
          case 'focusin':
            (xo(ce) || ce.contentEditable === 'true') && ((tl = ce), (_r = Q), (Ql = null));
            break;
          case 'focusout':
            Ql = _r = tl = null;
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
        var xe;
        if (Mr)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ce = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ce = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ce = 'onCompositionUpdate';
                break e;
            }
            Ce = void 0;
          }
        else
          el
            ? po(e, n) && (Ce = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Ce = 'onCompositionStart');
        (Ce &&
          (vo &&
            n.locale !== 'ko' &&
            (el || Ce !== 'onCompositionStart'
              ? Ce === 'onCompositionEnd' && el && (xe = co())
              : ((Fn = W), (Sr = 'value' in Fn ? Fn.value : Fn.textContent), (el = !0))),
          (ce = zu(Q, Ce)),
          0 < ce.length &&
            ((Ce = new mo(Ce, e, null, n, W)),
            I.push({ event: Ce, listeners: ce }),
            xe ? (Ce.data = xe) : ((xe = So(n)), xe !== null && (Ce.data = xe)))),
          (xe = Lv ? jv(e, n) : Gv(e, n)) &&
            ((Ce = zu(Q, 'onBeforeInput')),
            0 < Ce.length &&
              ((ce = new mo('onBeforeInput', 'beforeinput', null, n, W)),
              I.push({ event: ce, listeners: Ce }),
              (ce.data = xe))),
          Dg(I, e, Q, n, W));
      }
      lm(I, t);
    });
  }
  function vi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zu(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          u === null ||
          ((l = Hl(e, n)),
          l != null && a.unshift(vi(e, l, u)),
          (l = Hl(e, t)),
          l != null && a.push(vi(e, l, u))),
        e.tag === 3)
      )
        return a;
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
  function um(e, t, n, a, l) {
    for (var u = t._reactName, S = []; n !== null && n !== a; ) {
      var C = n,
        U = C.alternate,
        Q = C.stateNode;
      if (((C = C.tag), U !== null && U === a)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        Q === null ||
        ((U = Q),
        l
          ? ((Q = Hl(n, u)), Q != null && S.unshift(vi(n, Q, U)))
          : l || ((Q = Hl(n, u)), Q != null && S.push(vi(n, Q, U)))),
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
  function Le(e, t, n, a, l, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Wa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && Wa(e, '' + a);
        break;
      case 'className':
        Ui(e, 'class', a);
        break;
      case 'tabIndex':
        Ui(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ui(e, n, a);
        break;
      case 'style':
        uo(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Ui(e, 'data', a);
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
        ((a = Li('' + a)), e.setAttribute(n, a));
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
              ? (t !== 'input' && Le(e, t, 'name', l.name, l, null),
                Le(e, t, 'formEncType', l.formEncType, l, null),
                Le(e, t, 'formMethod', l.formMethod, l, null),
                Le(e, t, 'formTarget', l.formTarget, l, null))
              : (Le(e, t, 'encType', l.encType, l, null),
                Le(e, t, 'method', l.method, l, null),
                Le(e, t, 'target', l.target, l, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = Li('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Tn);
        break;
      case 'onScroll':
        a != null && Te('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Te('scrollend', e);
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
        ((n = Li('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Te('beforetoggle', e), Te('toggle', e), Bi(e, 'popover', a));
        break;
      case 'xlinkActuate':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        bn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        bn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        bn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        bn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Bi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = ov.get(n) || n), Bi(e, n, a));
    }
  }
  function ec(e, t, n, a, l, u) {
    switch (n) {
      case 'style':
        uo(e, a, u);
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
          ? Wa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Wa(e, '' + a);
        break;
      case 'onScroll':
        a != null && Te('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Te('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Tn);
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
              ((l = n.endsWith('Capture')),
              (t = n.slice(2, l ? n.length - 7 : void 0)),
              (u = e[Tt] || null),
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Bi(e, n, a);
          }
    }
  }
  function yt(e, t, n) {
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
        (Te('error', e), Te('load', e));
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
                  Le(e, t, u, S, n, null);
              }
          }
        (l && Le(e, t, 'srcSet', n.srcSet, n, null), a && Le(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Te('invalid', e);
        var C = (u = S = l = null),
          U = null,
          Q = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var W = n[a];
            if (W != null)
              switch (a) {
                case 'name':
                  l = W;
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
                  Le(e, t, a, W, n, null);
              }
          }
        no(e, u, C, U, Q, S, l, !1);
        return;
      case 'select':
        (Te('invalid', e), (a = S = u = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((C = n[l]), C != null))
            switch (l) {
              case 'value':
                u = C;
                break;
              case 'defaultValue':
                S = C;
                break;
              case 'multiple':
                a = C;
              default:
                Le(e, t, l, C, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!a),
          t != null ? $a(e, !!a, t, !1) : n != null && $a(e, !!a, n, !0));
        return;
      case 'textarea':
        (Te('invalid', e), (u = l = a = null));
        for (S in n)
          if (n.hasOwnProperty(S) && ((C = n[S]), C != null))
            switch (S) {
              case 'value':
                a = C;
                break;
              case 'defaultValue':
                l = C;
                break;
              case 'children':
                u = C;
                break;
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(x(91));
                break;
              default:
                Le(e, t, S, C, n, null);
            }
        lo(e, a, l, u);
        return;
      case 'option':
        for (U in n)
          if (n.hasOwnProperty(U) && ((a = n[U]), a != null))
            switch (U) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                Le(e, t, U, a, n, null);
            }
        return;
      case 'dialog':
        (Te('beforetoggle', e), Te('toggle', e), Te('cancel', e), Te('close', e));
        break;
      case 'iframe':
      case 'object':
        Te('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < hi.length; a++) Te(hi[a], e);
        break;
      case 'image':
        (Te('error', e), Te('load', e));
        break;
      case 'details':
        Te('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Te('error', e), Te('load', e));
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
                Le(e, t, Q, a, n, null);
            }
        return;
      default:
        if (hr(t)) {
          for (W in n)
            n.hasOwnProperty(W) && ((a = n[W]), a !== void 0 && ec(e, t, W, a, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((a = n[C]), a != null && Le(e, t, C, a, n, null));
  }
  function Lg(e, t, n, a) {
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
                a.hasOwnProperty(k) || Le(e, t, k, null, a, I);
            }
        }
        for (var Z in a) {
          var k = a[Z];
          if (((I = n[Z]), a.hasOwnProperty(Z) && (k != null || I != null)))
            switch (Z) {
              case 'type':
                u = k;
                break;
              case 'name':
                l = k;
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
                k !== I && Le(e, t, Z, k, a, I);
            }
        }
        dr(e, S, C, U, Q, W, u, l);
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
                a.hasOwnProperty(u) || Le(e, t, u, null, a, U);
            }
        for (l in a)
          if (((u = a[l]), (U = n[l]), a.hasOwnProperty(l) && (u != null || U != null)))
            switch (l) {
              case 'value':
                Z = u;
                break;
              case 'defaultValue':
                C = u;
                break;
              case 'multiple':
                S = u;
              default:
                u !== U && Le(e, t, l, u, a, U);
            }
        ((t = C),
          (n = S),
          (a = k),
          Z != null
            ? $a(e, !!n, Z, !1)
            : !!a != !!n && (t != null ? $a(e, !!n, t, !0) : $a(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        k = Z = null;
        for (C in n)
          if (((l = n[C]), n.hasOwnProperty(C) && l != null && !a.hasOwnProperty(C)))
            switch (C) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Le(e, t, C, null, a, l);
            }
        for (S in a)
          if (((l = a[S]), (u = n[S]), a.hasOwnProperty(S) && (l != null || u != null)))
            switch (S) {
              case 'value':
                Z = l;
                break;
              case 'defaultValue':
                k = l;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (l != null) throw Error(x(91));
                break;
              default:
                l !== u && Le(e, t, S, l, a, u);
            }
        ao(e, Z, k);
        return;
      case 'option':
        for (var re in n)
          if (((Z = n[re]), n.hasOwnProperty(re) && Z != null && !a.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Le(e, t, re, null, a, Z);
            }
        for (U in a)
          if (((Z = a[U]), (k = n[U]), a.hasOwnProperty(U) && Z !== k && (Z != null || k != null)))
            switch (U) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                Le(e, t, U, Z, a, k);
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
            n.hasOwnProperty(me) && Z != null && !a.hasOwnProperty(me) && Le(e, t, me, null, a, Z));
        for (Q in a)
          if (((Z = a[Q]), (k = n[Q]), a.hasOwnProperty(Q) && Z !== k && (Z != null || k != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                Le(e, t, Q, Z, a, k);
            }
        return;
      default:
        if (hr(t)) {
          for (var je in n)
            ((Z = n[je]),
              n.hasOwnProperty(je) &&
                Z !== void 0 &&
                !a.hasOwnProperty(je) &&
                ec(e, t, je, void 0, a, Z));
          for (W in a)
            ((Z = a[W]),
              (k = n[W]),
              !a.hasOwnProperty(W) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                ec(e, t, W, Z, a, k));
          return;
        }
    }
    for (var V in n)
      ((Z = n[V]),
        n.hasOwnProperty(V) && Z != null && !a.hasOwnProperty(V) && Le(e, t, V, null, a, Z));
    for (I in a)
      ((Z = a[I]),
        (k = n[I]),
        !a.hasOwnProperty(I) || Z === k || (Z == null && k == null) || Le(e, t, I, Z, a, k));
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
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          u = l.transferSize,
          S = l.initiatorType,
          C = l.duration;
        if (u && C && cm(S)) {
          for (S = 0, C = l.responseEnd, a += 1; a < n.length; a++) {
            var U = n[a],
              Q = U.startTime;
            if (Q > C) break;
            var W = U.transferSize,
              I = U.initiatorType;
            W && cm(I) && ((U = U.responseEnd), (S += W * (U < C ? 1 : (C - Q) / (U - Q))));
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
  function ac(e, t) {
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
  var lc = null;
  function Gg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === lc ? !1 : ((lc = e), !0)) : ((lc = null), !1);
  }
  var dm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Yg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    mm = typeof Promise == 'function' ? Promise : void 0,
    qg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof mm < 'u'
          ? function (e) {
              return mm.resolve(null).then(e).catch(Vg);
            }
          : dm;
  function Vg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function da(e) {
    return e === 'head';
  }
  function hm(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(l), _l(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') gi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), gi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              C = u.nodeName;
            (u[Bl] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && gi(e.ownerDocument.body);
      n = l;
    } while (n);
    _l(t);
  }
  function vm(e, t) {
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
  function Xg(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Bl])
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
      if (((e = Wt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Qg(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = Wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = Wt(e.nextSibling)), e === null)
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
      var a = function () {
        (t(), n.removeEventListener('DOMContentLoaded', a));
      };
      (n.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function Wt(e) {
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
          if (t === 0) return Wt(e.nextSibling);
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
  var Pt = new Map(),
    xm = new Set();
  function Nu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Gn = K.d;
  K.d = { f: Kg, r: Jg, D: kg, C: Fg, L: $g, m: Wg, X: Ig, S: Pg, M: e0 };
  function Kg() {
    var e = Gn.f(),
      t = Mu();
    return e || t;
  }
  function Jg(e) {
    var t = Ja(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Lf(t) : Gn.r(e);
  }
  var Cl = typeof document > 'u' ? null : document;
  function Em(e, t, n) {
    var a = Cl;
    if (a && typeof t == 'string' && t) {
      var l = Qt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
        xm.has(l) ||
          (xm.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement('link')), yt(t, 'link', e), ot(t), a.head.appendChild(t))));
    }
  }
  function kg(e) {
    (Gn.D(e), Em('dns-prefetch', e, null));
  }
  function Fg(e, t) {
    (Gn.C(e, t), Em('preconnect', e, t));
  }
  function $g(e, t, n) {
    Gn.L(e, t, n);
    var a = Cl;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + Qt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (l += '[imagesizes="' + Qt(n.imageSizes) + '"]'))
        : (l += '[href="' + Qt(e) + '"]');
      var u = l;
      switch (t) {
        case 'style':
          u = Rl(e);
          break;
        case 'script':
          u = Al(e);
      }
      Pt.has(u) ||
        ((e = y(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Pt.set(u, e),
        a.querySelector(l) !== null ||
          (t === 'style' && a.querySelector(yi(u))) ||
          (t === 'script' && a.querySelector(pi(u))) ||
          ((t = a.createElement('link')), yt(t, 'link', e), ot(t), a.head.appendChild(t)));
    }
  }
  function Wg(e, t) {
    Gn.m(e, t);
    var n = Cl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + Qt(a) + '"][href="' + Qt(e) + '"]',
        u = l;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Al(e);
      }
      if (
        !Pt.has(u) &&
        ((e = y({ rel: 'modulepreload', href: e }, t)), Pt.set(u, e), n.querySelector(l) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(pi(u))) return;
        }
        ((a = n.createElement('link')), yt(a, 'link', e), ot(a), n.head.appendChild(a));
      }
    }
  }
  function Pg(e, t, n) {
    Gn.S(e, t, n);
    var a = Cl;
    if (a && e) {
      var l = ka(a).hoistableStyles,
        u = Rl(e);
      t = t || 'default';
      var S = l.get(u);
      if (!S) {
        var C = { loading: 0, preload: null };
        if ((S = a.querySelector(yi(u)))) C.loading = 5;
        else {
          ((e = y({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Pt.get(u)) && cc(e, n));
          var U = (S = a.createElement('link'));
          (ot(U),
            yt(U, 'link', e),
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
            Bu(S, t, a));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: C }), l.set(u, S));
      }
    }
  }
  function Ig(e, t) {
    Gn.X(e, t);
    var n = Cl;
    if (n && e) {
      var a = ka(n).hoistableScripts,
        l = Al(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(pi(l))),
        u ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = Pt.get(l)) && oc(e, t),
          (u = n.createElement('script')),
          ot(u),
          yt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function e0(e, t) {
    Gn.M(e, t);
    var n = Cl;
    if (n && e) {
      var a = ka(n).hoistableScripts,
        l = Al(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(pi(l))),
        u ||
          ((e = y({ src: e, async: !0, type: 'module' }, t)),
          (t = Pt.get(l)) && oc(e, t),
          (u = n.createElement('script')),
          ot(u),
          yt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function bm(e, t, n, a) {
    var l = (l = ie.current) ? Nu(l) : null;
    if (!l) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Rl(n.href)),
            (n = ka(l).hoistableStyles),
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
          e = Rl(n.href);
          var u = ka(l).hoistableStyles,
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
              (u = l.querySelector(yi(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
              Pt.has(e) ||
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
                Pt.set(e, n),
                u || t0(l, e, n, S.state))),
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
            ? ((t = Al(n)),
              (n = ka(l).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function Rl(e) {
    return 'href="' + Qt(e) + '"';
  }
  function yi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Tm(e) {
    return y({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function t0(e, t, n, a) {
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
        yt(t, 'link', n),
        ot(t),
        e.head.appendChild(t));
  }
  function Al(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function pi(e) {
    return 'script[async]' + e;
  }
  function Mm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Qt(n.href) + '"]');
          if (a) return ((t.instance = a), ot(a), a);
          var l = y({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            ot(a),
            yt(a, 'style', l),
            Bu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = Rl(n.href);
          var u = e.querySelector(yi(l));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ot(u), u);
          ((a = Tm(n)),
            (l = Pt.get(l)) && cc(a, l),
            (u = (e.ownerDocument || e).createElement('link')),
            ot(u));
          var S = u;
          return (
            (S._p = new Promise(function (C, U) {
              ((S.onload = C), (S.onerror = U));
            })),
            yt(u, 'link', a),
            (t.state.loading |= 4),
            Bu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Al(n.src)),
            (l = e.querySelector(pi(u)))
              ? ((t.instance = l), ot(l), l)
              : ((a = n),
                (l = Pt.get(u)) && ((a = y({}, n)), oc(a, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                ot(l),
                yt(l, 'link', a),
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
        ((a = t.instance), (t.state.loading |= 4), Bu(a, n.precedence, e));
    return t.instance;
  }
  function Bu(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        l = a.length ? a[a.length - 1] : null,
        u = l,
        S = 0;
      S < a.length;
      S++
    ) {
      var C = a[S];
      if (C.dataset.precedence === t) u = C;
      else if (u !== l) break;
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
      var a = new Map(),
        l = (Uu = new Map());
      l.set(n, a);
    } else ((l = Uu), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (
        !(u[Bl] || u[mt] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var S = u.getAttribute(t) || '';
        S = e + S;
        var C = a.get(S);
        C ? C.push(u) : a.set(S, [u]);
      }
    }
    return a;
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
  function a0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Rl(a.href),
          u = t.querySelector(yi(l));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Hu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ot(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Tm(a)),
          (l = Pt.get(l)) && cc(a, l),
          (u = u.createElement('link')),
          ot(u));
        var S = u;
        ((S._p = new Promise(function (C, U) {
          ((S.onload = C), (S.onerror = U));
        })),
          yt(u, 'link', a),
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
  function l0(e, t) {
    return (
      e.stylesheets && e.count === 0 && ju(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && ju(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && fc === 0 && (fc = 62500 * jg());
            var l = setTimeout(
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
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(l));
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
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Lu.set(e, n));
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
        (a = Hu.bind(this)),
        l.addEventListener('load', a),
        l.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
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
  function u0(e, t, n, a, l, u, S, C, U) {
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
      (this.expirationTimes = Ye(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ye(0)),
      (this.hiddenUpdates = Ye(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function _m(e, t, n, a, l, u, S, C, U, Q, W, I) {
    return (
      (e = new u0(e, t, n, S, U, Q, W, I, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Ut(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Qr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      kr(u),
      e
    );
  }
  function Om(e) {
    return e ? ((e = ll), e) : ll;
  }
  function Dm(e, t, n, a, l, u) {
    ((l = Om(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = ta(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = na(e, a, t)),
      n !== null && (Ot(n, e, t), Wl(n, e, t)));
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
      var t = Ra(e, 67108864);
      (t !== null && Ot(t, e, 67108864), dc(e, 67108864));
    }
  }
  function Nm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = Vt(t);
      var n = Ra(e, t);
      (n !== null && Ot(n, e, t), dc(e, t));
    }
  }
  var Gu = !0;
  function r0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 2), mc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function s0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 8), mc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function mc(e, t, n, a) {
    if (Gu) {
      var l = hc(a);
      if (l === null) (Is(e, t, a, Yu, n), Um(e, a));
      else if (o0(l, e, t, n, a)) a.stopPropagation();
      else if ((Um(e, a), t & 4 && -1 < c0.indexOf(e))) {
        for (; l !== null; ) {
          var u = Ja(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = ve(u.pendingLanes);
                  if (S !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - xt(S));
                      ((C.entanglements[1] |= U), (S &= ~U));
                    }
                    (gn(u), (ze & 6) === 0 && ((bu = st() + 500), mi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = Ra(u, 2)), C !== null && Ot(C, u, 2), Mu(), dc(u, 2));
            }
          if (((u = hc(a)), u === null && Is(e, t, a, Yu, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Is(e, t, a, null, n);
    }
  }
  function hc(e) {
    return ((e = gr(e)), vc(e));
  }
  var Yu = null;
  function vc(e) {
    if (((Yu = null), (e = Ka(e)), e !== null)) {
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
        switch (zt()) {
          case wt:
            return 2;
          case xa:
            return 8;
          case pn:
          case Sn:
            return 32;
          case xn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gc = !1,
    ma = null,
    ha = null,
    va = null,
    xi = new Map(),
    Ei = new Map(),
    ga = [],
    c0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Um(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ma = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ha = null;
        break;
      case 'mouseover':
      case 'mouseout':
        va = null;
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
  function bi(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = Ja(t)), t !== null && wm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function o0(e, t, n, a, l) {
    switch (t) {
      case 'focusin':
        return ((ma = bi(ma, e, t, n, a, l)), !0);
      case 'dragenter':
        return ((ha = bi(ha, e, t, n, a, l)), !0);
      case 'mouseover':
        return ((va = bi(va, e, t, n, a, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (xi.set(u, bi(xi.get(u) || null, e, t, n, a, l)), !0);
      case 'gotpointercapture':
        return ((u = l.pointerId), Ei.set(u, bi(Ei.get(u) || null, e, t, n, a, l)), !0);
    }
    return !1;
  }
  function Hm(e) {
    var t = Ka(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Qa(e.priority, function () {
                Nm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Qa(e.priority, function () {
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
  function qu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = hc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((vr = a), n.target.dispatchEvent(a), (vr = null));
      } else return ((t = Ja(n)), t !== null && wm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Lm(e, t, n) {
    qu(e) && n.delete(t);
  }
  function f0() {
    ((gc = !1),
      ma !== null && qu(ma) && (ma = null),
      ha !== null && qu(ha) && (ha = null),
      va !== null && qu(va) && (va = null),
      xi.forEach(Lm),
      Ei.forEach(Lm));
  }
  function Vu(e, t) {
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
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != 'function') {
            if (vc(a || n) === null) continue;
            break;
          }
          var u = Ja(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            hs(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function _l(e) {
    function t(U) {
      return Vu(U, e);
    }
    (ma !== null && Vu(ma, e),
      ha !== null && Vu(ha, e),
      va !== null && Vu(va, e),
      xi.forEach(t),
      Ei.forEach(t));
    for (var n = 0; n < ga.length; n++) {
      var a = ga[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ga.length && ((n = ga[0]), n.blockedOn === null); )
      (Hm(n), n.blockedOn === null && ga.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          S = l[Tt] || null;
        if (typeof u == 'function') S || jm(n);
        else if (S) {
          var C = null;
          if (u && u.hasAttribute('formAction')) {
            if (((l = u), (S = u[Tt] || null))) C = S.formAction;
            else if (vc(l) !== null) continue;
          } else C = S.action;
          (typeof C == 'function' ? (n[a + 1] = C) : (n.splice(a, 3), (a -= 3)), jm(n));
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
  function yc(e) {
    this._internalRoot = e;
  }
  ((Qu.prototype.render = yc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        a = Yt();
      Dm(n, a, e, t, null, null);
    }),
    (Qu.prototype.unmount = yc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Dm(e.current, 2, null, e, null, null), Mu(), (t[Za] = null));
        }
      }));
  function Qu(e) {
    this._internalRoot = e;
  }
  Qu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Nl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ga.length && t !== 0 && t < ga[n].priority; n++);
      (ga.splice(n, 0, e), n === 0 && Hm(e));
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
    currentDispatcherRef: q,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zu.isDisabled && Zu.supportsFiber)
      try {
        ((Ea = Zu.inject(d0)), (St = Zu));
      } catch {}
  }
  return (
    (Mi.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        a = '',
        l = Jf,
        u = kf,
        S = Ff;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = _m(e, 1, !1, null, null, n, a, null, l, u, S, Gm)),
        (e[Za] = t.current),
        Ps(e),
        new yc(t)
      );
    }),
    (Mi.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var a = !1,
        l = '',
        u = Jf,
        S = kf,
        C = Ff,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = _m(e, 1, !0, t, n ?? null, a, l, U, u, S, C, Gm)),
        (t.context = Om(null)),
        (n = t.current),
        (a = Yt()),
        (a = Vt(a)),
        (l = ta(a)),
        (l.callback = null),
        na(n, l, a),
        (n = a),
        (t.current.lanes = n),
        Xe(t, n),
        gn(t),
        (e[Za] = t.current),
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
function Ke(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function yn(s, b) {
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
    ...(typeof b == 'string' ? Dl(b) : b),
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
function Dl(s) {
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
    ((m = E), c && c({ action: f, location: g.location, delta: R }));
  }
  function v(E, R) {
    f = 'PUSH';
    let D = Im(E) ? E : Nc(g.location, E, R);
    m = o() + 1;
    let w = eh(D, m),
      L = g.createHref(D.unstable_mask || D);
    try {
      d.pushState(w, '', L);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      h.location.assign(L);
    }
    i && c && c({ action: f, location: g.location, delta: 1 });
  }
  function r(E, R) {
    f = 'REPLACE';
    let D = Im(E) ? E : Nc(g.location, E, R);
    m = o();
    let w = eh(D, m),
      L = g.createHref(D.unstable_mask || D);
    (d.replaceState(w, '', L), i && c && c({ action: f, location: g.location, delta: 0 }));
  }
  function p(E) {
    return _0(E);
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
    push: v,
    replace: r,
    go(E) {
      return d.go(E);
    },
  };
  return g;
}
function _0(s, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Ke(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof s == 'string' ? s : Di(s);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function ph(s, b, T = '/') {
  return O0(s, b, T, !1);
}
function O0(s, b, T, x) {
  let h = typeof b == 'string' ? Dl(b) : b,
    i = Xn(h.pathname || '/', T);
  if (i == null) return null;
  let d = Sh(s);
  D0(d);
  let f = null;
  for (let c = 0; f == null && c < d.length; ++c) {
    let m = q0(i);
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
      (Ke(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let y = sn([x, o.relativePath]),
      v = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (Ke(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Sh(d.children, b, v, y, c)),
      !(d.path == null && !d.index) && b.push({ path: y, score: L0(y, d.index), routesMeta: v }));
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
      v = c.route;
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
        route: v,
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
    params: x.reduce((m, { paramName: o, isOptional: y }, v) => {
      if (o === '*') {
        let p = f[v] || '';
        d = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      const r = f[v];
      return (y && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: d,
    pattern: s,
  };
}
function Y0(s, b = !1, T = !0) {
  yn(
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
function q0(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      yn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      s
    );
  }
}
function Xn(s, b) {
  if (b === '/') return s;
  if (!s.toLowerCase().startsWith(b.toLowerCase())) return null;
  let T = b.endsWith('/') ? b.length - 1 : b.length,
    x = s.charAt(T);
  return x && x !== '/' ? null : s.slice(T) || '/';
}
var V0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function X0(s, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof s == 'string' ? Dl(s) : s,
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
    ? (h = Dl(s))
    : ((h = { ...s }),
      Ke(!h.pathname || !h.pathname.includes('?'), Mc('?', 'pathname', 'search', h)),
      Ke(!h.pathname || !h.pathname.includes('#'), Mc('#', 'pathname', 'hash', h)),
      Ke(!h.search || !h.search.includes('#'), Mc('#', 'search', 'hash', h)));
  let i = s === '' || h.pathname === '',
    d = i ? '/' : h.pathname,
    f;
  if (d == null) f = T;
  else {
    let y = b.length - 1;
    if (!x && d.startsWith('..')) {
      let v = d.split('/');
      for (; v[0] === '..'; ) (v.shift(), (y -= 1));
      h.pathname = v.join('/');
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
  if (typeof T != 'string' || !V0.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (Th)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = Xn(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      yn(
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
var zl = N.createContext(null);
zl.displayName = 'DataRouter';
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
var en = N.createContext(null);
en.displayName = 'Navigation';
var zi = N.createContext(null);
zi.displayName = 'Location';
var Qn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qn.displayName = 'Route';
var Yc = N.createContext(null);
Yc.displayName = 'RouteError';
var _h = 'REACT_ROUTER_ERROR',
  ty = 'REDIRECT',
  ny = 'ROUTE_ERROR_RESPONSE';
function ay(s) {
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
function ly(s) {
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
  Ke(wi(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = N.useContext(en),
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
function Zn() {
  return (
    Ke(wi(), 'useLocation() may be used only in the context of a <Router> component.'),
    N.useContext(zi).location
  );
}
var Oh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Dh(s) {
  N.useContext(en).static || N.useLayoutEffect(s);
}
function uy() {
  let { isDataRoute: s } = N.useContext(Qn);
  return s ? Sy() : ry();
}
function ry() {
  Ke(wi(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = N.useContext(zl),
    { basename: b, navigator: T } = N.useContext(en),
    { matches: x } = N.useContext(Qn),
    { pathname: h } = Zn(),
    i = JSON.stringify(Eh(x)),
    d = N.useRef(!1);
  return (
    Dh(() => {
      d.current = !0;
    }),
    N.useCallback(
      (c, m = {}) => {
        if ((yn(d.current, Oh), !d.current)) return;
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
  let { matches: T } = N.useContext(Qn),
    { pathname: x } = Zn(),
    h = JSON.stringify(Eh(T));
  return N.useMemo(() => Gc(s, JSON.parse(h), x, b === 'path'), [s, h, x, b]);
}
function sy(s, b) {
  return zh(s, b);
}
function zh(s, b, T) {
  var E;
  Ke(wi(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = N.useContext(en),
    { matches: h } = N.useContext(Qn),
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
  let o = Zn(),
    y;
  if (b) {
    let R = typeof b == 'string' ? Dl(b) : b;
    (Ke(
      c === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (y = R));
  } else y = o;
  let v = y.pathname || '/',
    r = v;
  if (c !== '/') {
    let R = c.replace(/^\//, '').split('/');
    r = '/' + v.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let p = ph(s, { pathname: r });
  (yn(m || p != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `),
    yn(
      p == null ||
        p[p.length - 1].route.element !== void 0 ||
        p[p.length - 1].route.Component !== void 0 ||
        p[p.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let g = my(
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
  return b && g
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
        g
      )
    : g;
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
        const T = ly(s.digest);
        T && (s = T);
      }
      let b =
        s !== void 0
          ? N.createElement(
              Qn.Provider,
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
  let { basename: T } = N.useContext(en);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = ay(b.digest);
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
  let x = N.useContext(zl);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    N.createElement(Qn.Provider, { value: s }, T)
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
    (Ke(
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
        let { loaderData: v, errors: r } = x,
          p = y.route.loader && !v.hasOwnProperty(y.route.id) && (!r || r[y.route.id] === void 0);
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
            var v, r;
            c(o, {
              location: x.location,
              params:
                ((r = (v = x.matches) == null ? void 0 : v[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: $0(x.matches),
              errorInfo: y,
            });
          }
        : void 0;
  return h.reduceRight((o, y, v) => {
    let r,
      p = !1,
      g = null,
      E = null;
    x &&
      ((r = i && y.route.id ? i[y.route.id] : void 0),
      (g = y.route.errorElement || oy),
      d &&
        (f < 0 && v === 0
          ? (Nh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (p = !0),
            (E = null))
          : f === v && ((p = !0), (E = y.route.hydrateFallbackElement || null))));
    let R = b.concat(h.slice(0, v + 1)),
      D = () => {
        let w;
        return (
          r
            ? (w = g)
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
    return x && (y.route.ErrorBoundary || y.route.errorElement || v === 0)
      ? N.createElement(wh, {
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
function qc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hy(s) {
  let b = N.useContext(zl);
  return (Ke(b, qc(s)), b);
}
function vy(s) {
  let b = N.useContext(er);
  return (Ke(b, qc(s)), b);
}
function gy(s) {
  let b = N.useContext(Qn);
  return (Ke(b, qc(s)), b);
}
function Vc(s) {
  let b = gy(s),
    T = b.matches[b.matches.length - 1];
  return (Ke(T.route.id, `${s} can only be used on routes that contain a unique "id"`), T.route.id);
}
function yy() {
  return Vc('useRouteId');
}
function py() {
  var x;
  let s = N.useContext(Yc),
    b = vy('useRouteError'),
    T = Vc('useRouteError');
  return s !== void 0 ? s : (x = b.errors) == null ? void 0 : x[T];
}
function Sy() {
  let { router: s } = hy('useNavigate'),
    b = Vc('useNavigate'),
    T = N.useRef(!1);
  return (
    Dh(() => {
      T.current = !0;
    }),
    N.useCallback(
      async (h, i = {}) => {
        (yn(T.current, Oh),
          T.current &&
            (typeof h == 'number'
              ? await s.navigate(h)
              : await s.navigate(h, { fromRouteId: b, ...i })));
      },
      [s, b]
    )
  );
}
var ah = {};
function Nh(s, b, T) {
  !b && !ah[s] && ((ah[s] = !0), yn(!1, T));
}
N.memo(xy);
function xy({ routes: s, future: b, state: T, isStatic: x, onError: h }) {
  return zh(s, void 0, { state: T, isStatic: x, onError: h });
}
function Bc(s) {
  Ke(
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
  Ke(
    !wi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = s.replace(/^\/*/, '/'),
    c = N.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = Dl(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: y = '',
      state: v = null,
      key: r = 'default',
      unstable_mask: p,
    } = T,
    g = N.useMemo(() => {
      let E = Xn(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: y, state: v, key: r, unstable_mask: p },
            navigationType: x,
          };
    }, [f, m, o, y, v, r, x, p]);
  return (
    yn(
      g != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    g == null
      ? null
      : N.createElement(
          en.Provider,
          { value: c },
          N.createElement(zi.Provider, { children: b, value: g })
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
      (Ke(
        x.type === Bc,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ke(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
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
    ? (yn(
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
    ((x = f ? Xn(f, b) : null),
      (T = s.getAttribute('method') || ku),
      (h = Rc(s.getAttribute('enctype')) || Fu),
      (i = new FormData(s)));
  } else if (Ty(s) || (Cy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let f = s.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = s.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = c ? Xn(c, b) : null),
      (T = s.getAttribute('formmethod') || f.getAttribute('method') || ku),
      (h = Rc(s.getAttribute('formenctype')) || Rc(f.getAttribute('enctype')) || Fu),
      (i = new FormData(f, s)),
      !_y())
    ) {
      let { name: m, type: o, value: y } = s;
      if (o === 'image') {
        let v = m ? `${m}.` : '';
        (i.append(`${v}x`, '0'), i.append(`${v}y`, '0'));
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
        : b && Xn(h.pathname, b) === '/'
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
function lh(s, b, T, x, h, i) {
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
            let v = c.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((y = T[0]) == null ? void 0 : y.params) || {},
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
  let s = N.useContext(zl);
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
    p = () => {
      (h(!1), d(!1));
    };
  return T
    ? s !== 'intent'
      ? [i, v, {}]
      : [
          i,
          v,
          {
            onFocus: Ci(f, r),
            onBlur: Ci(c, p),
            onMouseEnter: Ci(m, r),
            onMouseLeave: Ci(o, p),
            onTouchStart: Ci(y, r),
          },
        ]
    : [!1, v, {}];
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
      ? N.createElement(Vy, { page: s, matches: h, ...b })
      : N.createElement(Xy, { page: s, matches: h, ...b })
    : null;
}
function qy(s) {
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
function Vy({ page: s, matches: b, ...T }) {
  let x = Zn(),
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
  let x = Zn(),
    { future: h, manifest: i, routeModules: d } = Kc(),
    { basename: f } = Qc(),
    { loaderData: c, matches: m } = jy(),
    o = N.useMemo(() => lh(s, b, m, i, x, 'data'), [s, b, m, i, x]),
    y = N.useMemo(() => lh(s, b, m, i, x, 'assets'), [s, b, m, i, x]),
    v = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let g = new Set(),
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
              : g.add(D.route.id));
        }),
        g.size === 0)
      )
        return [];
      let R = Bh(s, f, h.unstable_trailingSlashAwareDataRequests, 'data');
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
    r = N.useMemo(() => By(y, i), [y, i]),
    p = qy(y);
  return N.createElement(
    N.Fragment,
    null,
    v.map((g) => N.createElement('link', { key: g, rel: 'prefetch', as: 'fetch', href: g, ...T })),
    r.map((g) => N.createElement('link', { key: g, rel: 'modulepreload', href: g, ...T })),
    p.map(({ key: g, link: E }) =>
      N.createElement('link', {
        key: g,
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
      viewTransition: v,
      unstable_defaultShouldRevalidate: r,
      ...p
    },
    g
  ) {
    let { basename: E, navigator: R, unstable_useTransitions: D } = N.useContext(en),
      w = typeof o == 'string' && Uh.test(o),
      L = Mh(o, E);
    o = L.to;
    let M = iy(o, { relative: h }),
      _ = Zn(),
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
        viewTransition: v,
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
        ref: Qy(g, B),
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
    v = Zn(),
    r = N.useContext(er),
    { navigator: p, basename: g } = N.useContext(en),
    E = r != null && tp(y) && f === !0,
    R = p.encodeLocation ? p.encodeLocation(y).pathname : y.pathname,
    D = v.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((D = D.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && g && (w = Xn(w, g) || w));
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
      unstable_defaultShouldRevalidate: v,
      ...r
    },
    p
  ) => {
    let { unstable_useTransitions: g } = N.useContext(en),
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
              unstable_defaultShouldRevalidate: v,
            });
        g && T !== !1 ? N.startTransition(() => A()) : A();
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
  let b = N.useContext(zl);
  return (Ke(b, Fy(s)), b);
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
    y = Zn(),
    v = Ni(s, { relative: d });
  return N.useCallback(
    (r) => {
      if (Ay(r, b)) {
        r.preventDefault();
        let p = T !== void 0 ? T : Di(y) === Di(v),
          g = () =>
            o(s, {
              replace: p,
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
    [y, o, v, T, x, h, b, s, i, d, f, c, m]
  );
}
var Wy = 0,
  Py = () => `__${String(++Wy)}__`;
function Iy() {
  let { router: s } = Lh('useSubmit'),
    { basename: b } = N.useContext(en),
    T = yy(),
    x = s.fetch,
    h = s.navigate;
  return N.useCallback(
    async (i, d = {}) => {
      let { action: f, method: c, encType: m, formData: o, body: y } = Dy(i, b);
      if (d.navigate === !1) {
        let v = d.fetcherKey || Py();
        await x(v, T, d.action || f, {
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
  let { basename: T } = N.useContext(en),
    x = N.useContext(Qn);
  Ke(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...Ni(s || '.', { relative: b }) },
    d = Zn();
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
  Ke(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Lh('useViewTransitionState'),
    h = Ni(s, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = Xn(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = Xn(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return Wu(h.pathname, d) != null || Wu(h.pathname, i) != null;
}
const np = 'modulepreload',
  ap = function (s) {
    return '/ochimono-game/' + s;
  },
  ih = {},
  lp = function (b, T, x) {
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
          if (((m = ap(m)), m in ih)) return;
          ih[m] = !0;
          const o = m.endsWith('.css'),
            y = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${y}`)) return;
          const v = document.createElement('link');
          if (
            ((v.rel = o ? 'stylesheet' : np),
            o || (v.as = 'script'),
            (v.crossOrigin = ''),
            (v.href = m),
            c && v.setAttribute('nonce', c),
            document.head.appendChild(v),
            o)
          )
            return new Promise((r, p) => {
              (v.addEventListener('load', r),
                v.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${m}`))));
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
  const o = async (v = !0) => {
    (await c, m == null || m());
  };
  async function y() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await lp(async () => {
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
              f.addEventListener('controlling', (p) => {
                p.isUpdate && window.location.reload();
              }),
            T == null || T());
        };
        (f.addEventListener('installed', (p) => {
          typeof p.isUpdate > 'u'
            ? typeof p.isExternal < 'u' && p.isExternal
              ? r()
              : !v && (x == null || x())
            : p.isUpdate || x == null || x();
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
  qa = {
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
      v = N.useRef(0.5),
      r = N.useRef(null),
      p = N.useRef(h);
    p.current = h;
    const g = N.useRef(b);
    g.current = b;
    const E = N.useCallback((A) => {
        const B = p.current,
          z = g.current;
        return B ? Math.max(B.radius, Math.min(z - B.radius, A * z)) : A * z;
      }, []),
      R = N.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = y.current) == null || A.setX(E(v.current)));
          }));
      }, [E]),
      D = N.useCallback(
        (A) => {
          const B = o.current;
          if (!B) return;
          const z = B.getBoundingClientRect(),
            H = Dp((A - z.left) / z.width);
          ((v.current = H), R());
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
          d(v.current),
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
  qp = '_restart_o79hb_69',
  Yn = {
    overlay: Bp,
    panel: Up,
    new_record: Hp,
    title: Lp,
    scores: jp,
    row: Gp,
    gold: Yp,
    restart: qp,
  },
  Vp = ({ score: s, bestScore: b, isNewRecord: T, onRestart: x }) =>
    $.jsx('div', {
      className: Yn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: $.jsxs('div', {
        className: Yn.panel,
        children: [
          T ? $.jsx('p', { className: Yn.new_record, children: '🎉 新記録！' }) : null,
          $.jsx('h2', { className: Yn.title, children: 'GAME OVER' }),
          $.jsxs('dl', {
            className: Yn.scores,
            children: [
              $.jsxs('div', {
                className: Yn.row,
                children: [
                  $.jsx('dt', { children: 'スコア' }),
                  $.jsx('dd', { className: T ? Yn.gold : '', children: s }),
                ],
              }),
              $.jsxs('div', {
                className: Yn.row,
                children: [$.jsx('dt', { children: 'ベスト' }), $.jsx('dd', { children: b })],
              }),
            ],
          }),
          $.jsx('button', {
            type: 'button',
            className: Yn.restart,
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
  qh = N.memo(({ active: s, onCancel: b }) =>
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
qh.displayName = 'MagnetSelectingOverlay';
const kp = '_gravity_flip_14l5j_1',
  Fp = '_arrow_14l5j_9',
  rh = { gravity_flip: kp, arrow: Fp },
  Vh = N.memo(({ effect: s }) =>
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
Vh.displayName = 'SkillEffectOverlay';
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
  a1 = '_drawer_1we7g_11',
  l1 = '_header_1we7g_23',
  i1 = '_title_1we7g_30',
  u1 = '_close_1we7g_38',
  r1 = '_row_1we7g_54',
  s1 = '_row_label_1we7g_62',
  c1 = '_footer_1we7g_68',
  o1 = '_version_1we7g_74',
  rn = {
    backdrop: n1,
    drawer: a1,
    header: l1,
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
                children: $.jsxs('span', { className: rn.version, children: ['v', '1.0.16'] }),
              }),
            ],
          }),
        })
      : null
);
Kh.displayName = 'SettingsDrawer';
const v1 = '_button_nrb3a_1',
  g1 = '_gauge_nrb3a_23',
  y1 = '_gauge_track_nrb3a_31',
  p1 = '_gauge_fill_nrb3a_38',
  S1 = '_gauge_fill_full_nrb3a_46',
  x1 = '_icon_nrb3a_51',
  E1 = '_ready_nrb3a_59',
  Ga = {
    button: v1,
    gauge: g1,
    gauge_track: y1,
    gauge_fill: p1,
    gauge_fill_full: S1,
    icon: x1,
    ready: E1,
  },
  Iu = 32,
  sh = 40,
  ch = 110,
  b1 = 360,
  oh = (s) => {
    const b = ((s - 90) * Math.PI) / 180;
    return { x: sh + Iu * Math.cos(b), y: sh + Iu * Math.sin(b) };
  },
  T1 = (s, b) => {
    const T = oh(s),
      x = oh(b),
      h = b - s > 180 ? 1 : 0;
    return `M ${T.x} ${T.y} A ${Iu} ${Iu} 0 ${h} 1 ${x.x} ${x.y}`;
  },
  Dc = 1,
  Jh = N.memo(({ gauge: s, segmentMax: b, segmentCount: T, canOpen: x, onClick: h }) => {
    const i = Math.round((s / (b * T)) * 100),
      d = b1 / T,
      f = d - ch,
      c = Array.from({ length: T }, (m, o) => {
        const y = o * b;
        return Math.max(0, Math.min(b, s - y)) / b;
      });
    return $.jsxs('button', {
      type: 'button',
      className: `${Ga.button} ${x ? Ga.ready : ''}`,
      onClick: h,
      disabled: !x,
      'aria-label': x ? '必殺技を選択' : `必殺技ゲージ ${i}%`,
      children: [
        $.jsx('svg', {
          className: Ga.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: c.map((m, o) => {
            const y = o * d + f / 2,
              v = y + ch,
              r = T1(y, v),
              p = m >= 1;
            return $.jsxs(
              'g',
              {
                children: [
                  $.jsx('path', { className: Ga.gauge_track, d: r, pathLength: Dc }),
                  $.jsx('path', {
                    className: `${Ga.gauge_fill} ${p ? Ga.gauge_fill_full : ''}`,
                    d: r,
                    pathLength: Dc,
                    strokeDasharray: `${m} ${Dc - m}`,
                  }),
                ],
              },
              o
            );
          }),
        }),
        $.jsx('span', { className: Ga.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
Jh.displayName = 'SkillButton';
const M1 = '_backdrop_1xhs1_1',
  C1 = '_menu_1xhs1_12',
  R1 = '_title_1xhs1_21',
  A1 = '_choices_1xhs1_30',
  _1 = '_choice_1xhs1_30',
  O1 = '_choice_disabled_1xhs1_60',
  D1 = '_choice_icon_1xhs1_65',
  z1 = '_choice_label_1xhs1_72',
  w1 = '_choice_desc_1xhs1_79',
  N1 = '_choice_cost_1xhs1_85',
  B1 = '_cost_pip_1xhs1_93',
  U1 = '_cancel_1xhs1_101',
  It = {
    backdrop: M1,
    menu: C1,
    title: R1,
    choices: A1,
    choice: _1,
    choice_disabled: O1,
    choice_icon: D1,
    choice_label: z1,
    choice_desc: w1,
    choice_cost: N1,
    cost_pip: B1,
    cancel: U1,
  },
  Hc = 100,
  Lc = 3,
  Dt = {
    gaugeMax: Hc * Lc,
    segmentMax: Hc,
    segmentCount: Lc,
    bonusOnLevel10Created: 8,
    bonusOnSpecialElimination: 25,
    shake: { impulseMin: 0.04, impulseMax: 0.12, upwardBias: 0.05 },
    gravityFlip: { durationMs: 3e3, multiplier: -0.35, frictionAir: 0.04 },
    magnet: { durationMs: 2500, forceMagnitude: 0.005 },
  },
  H1 = (s) => s,
  kh = { shake: 1, gravityFlip: 1, magnet: Lc },
  Oi = (s) => kh[s] * Hc,
  L1 = [
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
          className: It.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: $.jsxs('div', {
            className: It.menu,
            onClick: (h) => h.stopPropagation(),
            children: [
              $.jsx('h2', { className: It.title, children: '必殺技を選択' }),
              $.jsx('div', {
                className: It.choices,
                children: L1.map((h) => {
                  const i = kh[h.kind],
                    d = x[h.kind];
                  return $.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: `${It.choice} ${d ? '' : It.choice_disabled}`,
                      onClick: () => d && b(h.kind),
                      disabled: !d,
                      children: [
                        $.jsx('span', {
                          className: It.choice_icon,
                          'aria-hidden': 'true',
                          children: h.icon,
                        }),
                        $.jsx('span', { className: It.choice_label, children: h.label }),
                        $.jsx('span', { className: It.choice_desc, children: h.description }),
                        $.jsx('span', {
                          className: It.choice_cost,
                          'aria-label': `コスト ${i} ゲージ`,
                          children: Array.from({ length: i }, (f, c) =>
                            $.jsx('span', { className: It.cost_pip }, c)
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
                className: It.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
Fh.displayName = 'SkillMenu';
const j1 = '_top_bar_15roj_1',
  G1 = '_right_15roj_12',
  Y1 = '_settings_15roj_18',
  zc = { top_bar: j1, right: G1, settings: Y1 },
  q1 = '_next_1n5pn_1',
  V1 = '_label_1n5pn_7',
  X1 = '_thumb_1n5pn_14',
  Q1 = '_image_1n5pn_27',
  Ju = { next: q1, label: V1, thumb: X1, image: Q1 },
  Z1 = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  $h = N.memo(({ item: s }) =>
    $.jsxs('div', {
      className: Ju.next,
      children: [
        $.jsx('span', { className: Ju.label, children: 'NEXT' }),
        $.jsx('div', {
          className: Ju.thumb,
          'data-testid': 'next-item',
          children: s
            ? $.jsx('img', { src: Z1(s.svgPath), alt: s.name, className: Ju.image })
            : null,
        }),
      ],
    })
  );
$h.displayName = 'NextItemPreview';
const K1 = '_score_display_pgke7_1',
  J1 = '_row_pgke7_7',
  k1 = '_label_pgke7_13',
  F1 = '_value_pgke7_20',
  $1 = '_label_small_pgke7_28',
  W1 = '_value_small_pgke7_35',
  Ya = { score_display: K1, row: J1, label: k1, value: F1, label_small: $1, value_small: W1 },
  Wh = N.memo(({ score: s, bestScore: b }) =>
    $.jsxs('div', {
      className: Ya.score_display,
      children: [
        $.jsxs('div', {
          className: Ya.row,
          children: [
            $.jsx('span', { className: Ya.label, children: 'SCORE' }),
            $.jsx('span', { className: Ya.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        $.jsxs('div', {
          className: Ya.row,
          children: [
            $.jsx('span', { className: Ya.label_small, children: 'BEST' }),
            $.jsx('span', { className: Ya.value_small, children: b }),
          ],
        }),
      ],
    })
  );
Wh.displayName = 'ScoreDisplay';
const P1 = ({ score: s, bestScore: b, nextItem: T, onOpenSettings: x }) =>
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
 */ var I1 = $u.exports,
  fh;
function eS() {
  return (
    fh ||
      ((fh = 1),
      (function (s, b) {
        (function (x, h) {
          s.exports = h();
        })(I1, function () {
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
                          for (var v in y)
                            m &&
                            y[v] &&
                            y[v].constructor === Object &&
                            (!d[v] || d[v].constructor === Object)
                              ? ((d[v] = d[v] || {}), h.extend(d[v], m, y[v]))
                              : (d[v] = y[v]);
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
                      for (var v = 0; v < y.length; v += 1) {
                        var r = y[v];
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
                          var o, y = new Array(arguments.length), v = 0, r = arguments.length;
                          v < r;
                          v++
                        )
                          y[v] = arguments[v];
                        for (v = 0; v < d.length; v += 1) {
                          var p = d[v].apply(o, y);
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
                          !d && typeof qm < 'u' && (d = qm.decomp));
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
                    var v = c[y],
                      r = { x: v.x, y: v.y, index: y, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (c, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      y = [];
                    return (
                      c.replace(o, function (v, r, p) {
                        y.push({ x: parseFloat(r), y: parseFloat(p) });
                      }),
                      i.create(y, m)
                    );
                  }),
                  (i.centre = function (c) {
                    for (
                      var m = i.area(c, !0), o = { x: 0, y: 0 }, y, v, r, p = 0;
                      p < c.length;
                      p++
                    )
                      ((r = (p + 1) % c.length),
                        (y = d.cross(c[p], c[r])),
                        (v = d.mult(d.add(c[p], c[r]), y)),
                        (o = d.add(o, v)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (c) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < c.length; o++)
                      ((m.x += c[o].x), (m.y += c[o].y));
                    return d.div(m, c.length);
                  }),
                  (i.area = function (c, m) {
                    for (var o = 0, y = c.length - 1, v = 0; v < c.length; v++)
                      ((o += (c[y].x - c[v].x) * (c[y].y + c[v].y)), (y = v));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (c, m) {
                    for (var o = 0, y = 0, v = c, r, p, g = 0; g < v.length; g++)
                      ((p = (g + 1) % v.length),
                        (r = Math.abs(d.cross(v[p], v[g]))),
                        (o += r * (d.dot(v[p], v[p]) + d.dot(v[p], v[g]) + d.dot(v[g], v[g]))),
                        (y += r));
                    return (m / 6) * (o / y);
                  }),
                  (i.translate = function (c, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var y = c.length,
                      v = m.x * o,
                      r = m.y * o,
                      p;
                    for (p = 0; p < y; p++) ((c[p].x += v), (c[p].y += r));
                    return c;
                  }),
                  (i.rotate = function (c, m, o) {
                    if (m !== 0) {
                      var y = Math.cos(m),
                        v = Math.sin(m),
                        r = o.x,
                        p = o.y,
                        g = c.length,
                        E,
                        R,
                        D,
                        w;
                      for (w = 0; w < g; w++)
                        ((E = c[w]),
                          (R = E.x - r),
                          (D = E.y - p),
                          (E.x = r + (R * y - D * v)),
                          (E.y = p + (R * v + D * y)));
                      return c;
                    }
                  }),
                  (i.contains = function (c, m) {
                    for (var o = m.x, y = m.y, v = c.length, r = c[v - 1], p, g = 0; g < v; g++) {
                      if (((p = c[g]), (o - r.x) * (p.y - r.y) + (y - r.y) * (r.x - p.x) > 0))
                        return !1;
                      r = p;
                    }
                    return !0;
                  }),
                  (i.scale = function (c, m, o, y) {
                    if (m === 1 && o === 1) return c;
                    y = y || i.centre(c);
                    for (var v, r, p = 0; p < c.length; p++)
                      ((v = c[p]),
                        (r = d.sub(v, y)),
                        (c[p].x = y.x + r.x * m),
                        (c[p].y = y.y + r.y * o));
                    return c;
                  }),
                  (i.chamfer = function (c, m, o, y, v) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (y = y || 2),
                      (v = v || 14));
                    for (var r = [], p = 0; p < c.length; p++) {
                      var g = c[p - 1 >= 0 ? p - 1 : c.length - 1],
                        E = c[p],
                        R = c[(p + 1) % c.length],
                        D = m[p < m.length ? p : m.length - 1];
                      if (D === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - g.y, y: g.x - E.x }),
                        L = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(D, 2)),
                        _ = d.mult(f.clone(w), D),
                        O = d.normalise(d.mult(d.add(w, L), 0.5)),
                        A = d.sub(E, d.mult(O, M)),
                        B = o;
                      (o === -1 && (B = Math.pow(D, 0.32) * 1.75),
                        (B = f.clamp(B, y, v)),
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
                      v,
                      r,
                      p;
                    if (o < 3) return null;
                    for (y = 0; y < o; y++)
                      if (
                        ((v = (y + 1) % o),
                        (r = (y + 2) % o),
                        (p = (c[v].x - c[y].x) * (c[r].y - c[v].y)),
                        (p -= (c[v].y - c[y].y) * (c[r].x - c[v].x)),
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
                      v;
                    for (
                      c = c.slice(0),
                        c.sort(function (r, p) {
                          var g = r.x - p.x;
                          return g !== 0 ? g : r.y - p.y;
                        }),
                        v = 0;
                      v < c.length;
                      v += 1
                    ) {
                      for (
                        y = c[v];
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], y) <= 0;
                      )
                        o.pop();
                      o.push(y);
                    }
                    for (v = c.length - 1; v >= 0; v -= 1) {
                      for (
                        y = c[v];
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
                      g = m.extend(p, r);
                    return (v(g, r), g);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var v = function (r, p) {
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
                ((i.set = function (r, p, g) {
                  var E;
                  typeof p == 'string' && ((E = p), (p = {}), (p[E] = g));
                  for (E in p)
                    if (Object.prototype.hasOwnProperty.call(p, E))
                      switch (((g = p[E]), E)) {
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
                  (i.setStatic = function (r, p) {
                    for (var g = 0; g < r.parts.length; g++) {
                      var E = r.parts[g];
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
                    var g = r.inertia / (r.mass / 6);
                    ((r.inertia = g * (p / 6)),
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
                    var g = d.centre(r.vertices);
                    (d.translate(r.vertices, g, -1),
                      i.setInertia(r, i._inertiaScale * d.inertia(r.vertices, r.mass)),
                      d.translate(r.vertices, r.position),
                      o.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, p, g) {
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
                      if (((g = typeof g < 'u' ? g : !0), g)) {
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
                  (i.setCentre = function (r, p, g) {
                    g
                      ? ((r.positionPrev.x += p.x),
                        (r.positionPrev.y += p.y),
                        (r.position.x += p.x),
                        (r.position.y += p.y))
                      : ((r.positionPrev.x = p.x - (r.position.x - r.positionPrev.x)),
                        (r.positionPrev.y = p.y - (r.position.y - r.positionPrev.y)),
                        (r.position.x = p.x),
                        (r.position.y = p.y));
                  }),
                  (i.setPosition = function (r, p, g) {
                    var E = f.sub(p, r.position);
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
                  (i.setAngle = function (r, p, g) {
                    var E = p - r.angle;
                    g
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
                    var g = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - p.x * g),
                      (r.positionPrev.y = r.position.y - p.y * g),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / g),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / g),
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
                    var g = r.deltaTime / i._baseDelta;
                    ((r.anglePrev = r.angle - p * g),
                      (r.angularVelocity = (r.angle - r.anglePrev) / g),
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
                  (i.translate = function (r, p, g) {
                    i.setPosition(r, f.add(r.position, p), g);
                  }),
                  (i.rotate = function (r, p, g, E) {
                    if (!g) i.setAngle(r, r.angle + p, E);
                    else {
                      var R = Math.cos(p),
                        D = Math.sin(p),
                        w = r.position.x - g.x,
                        L = r.position.y - g.y;
                      (i.setPosition(r, { x: g.x + (w * R - L * D), y: g.y + (w * D + L * R) }, E),
                        i.setAngle(r, r.angle + p, E));
                    }
                  }),
                  (i.scale = function (r, p, g, E) {
                    var R = 0,
                      D = 0;
                    E = E || r.position;
                    for (var w = 0; w < r.parts.length; w++) {
                      var L = r.parts[w];
                      (d.scale(L.vertices, p, g, E),
                        (L.axes = y.fromVertices(L.vertices)),
                        (L.area = d.area(L.vertices)),
                        i.setMass(L, r.density * L.area),
                        d.translate(L.vertices, { x: -L.position.x, y: -L.position.y }),
                        i.setInertia(L, i._inertiaScale * d.inertia(L.vertices, L.mass)),
                        d.translate(L.vertices, { x: L.position.x, y: L.position.y }),
                        w > 0 && ((R += L.area), (D += L.inertia)),
                        (L.position.x = E.x + (L.position.x - E.x) * p),
                        (L.position.y = E.y + (L.position.y - E.y) * g),
                        o.update(L.bounds, L.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (i.setMass(r, r.density * R), i.setInertia(r, D))),
                      r.circleRadius &&
                        (p === g ? (r.circleRadius *= p) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, p) {
                    p = (typeof p < 'u' ? p : 1e3 / 60) * r.timeScale;
                    var g = p * p,
                      E = i._timeCorrection ? p / (r.deltaTime || p) : 1,
                      R = 1 - r.frictionAir * (p / m._baseDelta),
                      D = (r.position.x - r.positionPrev.x) * E,
                      w = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = D * R + (r.force.x / r.mass) * g),
                      (r.velocity.y = w * R + (r.force.y / r.mass) * g),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = p),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * E + (r.torque / r.inertia) * g),
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
                      g = r.velocity;
                    ((g.x = (r.position.x - r.positionPrev.x) * p),
                      (g.y = (r.position.y - r.positionPrev.y) * p),
                      (r.speed = Math.sqrt(g.x * g.x + g.y * g.y)),
                      (r.angularVelocity = (r.angle - r.anglePrev) * p),
                      (r.angularSpeed = Math.abs(r.angularVelocity)));
                  }),
                  (i.applyForce = function (r, p, g) {
                    var E = { x: p.x - r.position.x, y: p.y - r.position.y };
                    ((r.force.x += g.x), (r.force.y += g.y), (r.torque += E.x * g.y - E.y * g.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var p = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        g = r.parts.length === 1 ? 0 : 1;
                      g < r.parts.length;
                      g++
                    ) {
                      var E = r.parts[g],
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
                  for (var o = c.split(' '), y, v = 0; v < o.length; v++)
                    ((y = o[v]),
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
                      var v = f.events[o[y]],
                        r = [];
                      if (m && v) for (var p = 0; p < v.length; p++) v[p] !== m && r.push(v[p]);
                      f.events[o[y]] = r;
                    }
                  }),
                  (i.trigger = function (f, c, m) {
                    var o,
                      y,
                      v,
                      r,
                      p = f.events;
                    if (p && d.keys(p).length > 0) {
                      (m || (m = {}), (o = c.split(' ')));
                      for (var g = 0; g < o.length; g++)
                        if (((y = o[g]), (v = p[y]), v)) {
                          ((r = d.clone(m, !1)), (r.name = y), (r.source = f));
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
                  (i.setModified = function (o, y, v, r) {
                    if (
                      ((o.isModified = y),
                      y &&
                        o.cache &&
                        ((o.cache.allBodies = null),
                        (o.cache.allConstraints = null),
                        (o.cache.allComposites = null)),
                      v && o.parent && i.setModified(o.parent, y, v, r),
                      r)
                    )
                      for (var p = 0; p < o.composites.length; p++) {
                        var g = o.composites[p];
                        i.setModified(g, y, v, r);
                      }
                  }),
                  (i.add = function (o, y) {
                    var v = [].concat(y);
                    d.trigger(o, 'beforeAdd', { object: y });
                    for (var r = 0; r < v.length; r++) {
                      var p = v[r];
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
                  (i.remove = function (o, y, v) {
                    var r = [].concat(y);
                    d.trigger(o, 'beforeRemove', { object: y });
                    for (var p = 0; p < r.length; p++) {
                      var g = r[p];
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
                    return (d.trigger(o, 'afterRemove', { object: y }), o);
                  }),
                  (i.addComposite = function (o, y) {
                    return (o.composites.push(y), (y.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, y, v) {
                    var r = f.indexOf(o.composites, y);
                    if (r !== -1) {
                      var p = i.allBodies(y);
                      i.removeCompositeAt(o, r);
                      for (var g = 0; g < p.length; g++) p[g].sleepCounter = 0;
                    }
                    if (v)
                      for (var g = 0; g < o.composites.length; g++)
                        i.removeComposite(o.composites[g], y, !0);
                    return o;
                  }),
                  (i.removeCompositeAt = function (o, y) {
                    return (o.composites.splice(y, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addBody = function (o, y) {
                    return (o.bodies.push(y), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeBody = function (o, y, v) {
                    var r = f.indexOf(o.bodies, y);
                    if ((r !== -1 && (i.removeBodyAt(o, r), (y.sleepCounter = 0)), v))
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
                  (i.removeConstraint = function (o, y, v) {
                    var r = f.indexOf(o.constraints, y);
                    if ((r !== -1 && i.removeConstraintAt(o, r), v))
                      for (var p = 0; p < o.composites.length; p++)
                        i.removeConstraint(o.composites[p], y, !0);
                    return o;
                  }),
                  (i.removeConstraintAt = function (o, y) {
                    return (o.constraints.splice(y, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.clear = function (o, y, v) {
                    if (v)
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
                    for (var y = [].concat(o.bodies), v = 0; v < o.composites.length; v++)
                      y = y.concat(i.allBodies(o.composites[v]));
                    return (o.cache && (o.cache.allBodies = y), y);
                  }),
                  (i.allConstraints = function (o) {
                    if (o.cache && o.cache.allConstraints) return o.cache.allConstraints;
                    for (var y = [].concat(o.constraints), v = 0; v < o.composites.length; v++)
                      y = y.concat(i.allConstraints(o.composites[v]));
                    return (o.cache && (o.cache.allConstraints = y), y);
                  }),
                  (i.allComposites = function (o) {
                    if (o.cache && o.cache.allComposites) return o.cache.allComposites;
                    for (var y = [].concat(o.composites), v = 0; v < o.composites.length; v++)
                      y = y.concat(i.allComposites(o.composites[v]));
                    return (o.cache && (o.cache.allComposites = y), y);
                  }),
                  (i.get = function (o, y, v) {
                    var r, p;
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
                      ? ((p = r.filter(function (g) {
                          return g.id.toString() === y.toString();
                        })),
                        p.length === 0 ? null : p[0])
                      : null;
                  }),
                  (i.move = function (o, y, v) {
                    return (i.remove(o, y), i.add(v, y), o);
                  }),
                  (i.rebase = function (o) {
                    for (
                      var y = i.allBodies(o).concat(i.allConstraints(o)).concat(i.allComposites(o)),
                        v = 0;
                      v < y.length;
                      v++
                    )
                      y[v].id = f.nextId();
                    return o;
                  }),
                  (i.translate = function (o, y, v) {
                    for (var r = v ? i.allBodies(o) : o.bodies, p = 0; p < r.length; p++)
                      m.translate(r[p], y);
                    return o;
                  }),
                  (i.rotate = function (o, y, v, r) {
                    for (
                      var p = Math.cos(y),
                        g = Math.sin(y),
                        E = r ? i.allBodies(o) : o.bodies,
                        R = 0;
                      R < E.length;
                      R++
                    ) {
                      var D = E[R],
                        w = D.position.x - v.x,
                        L = D.position.y - v.y;
                      (m.setPosition(D, { x: v.x + (w * p - L * g), y: v.y + (w * g + L * p) }),
                        m.rotate(D, y));
                    }
                    return o;
                  }),
                  (i.scale = function (o, y, v, r, p) {
                    for (var g = p ? i.allBodies(o) : o.bodies, E = 0; E < g.length; E++) {
                      var R = g[E],
                        D = R.position.x - r.x,
                        w = R.position.y - r.y;
                      (m.setPosition(R, { x: r.x + D * y, y: r.y + w * v }), m.scale(R, y, v));
                    }
                    return o;
                  }),
                  (i.bounds = function (o) {
                    for (var y = i.allBodies(o), v = [], r = 0; r < y.length; r += 1) {
                      var p = y[r];
                      v.push(p.bounds.min, p.bounds.max);
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
                      var y = o / c._baseDelta, v = i._motionSleepThreshold, r = 0;
                      r < m.length;
                      r++
                    ) {
                      var p = m[r],
                        g = d.getSpeed(p),
                        E = d.getAngularSpeed(p),
                        R = g * g + E * E;
                      if (p.force.x !== 0 || p.force.y !== 0) {
                        i.set(p, !1);
                        continue;
                      }
                      var D = Math.min(p.motion, R),
                        w = Math.max(p.motion, R);
                      ((p.motion = i._minBias * D + (1 - i._minBias) * w),
                        p.sleepThreshold > 0 && p.motion < v
                          ? ((p.sleepCounter += 1),
                            p.sleepCounter >= p.sleepThreshold / y && i.set(p, !0))
                          : p.sleepCounter > 0 && (p.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (m) {
                    for (var o = i._motionSleepThreshold, y = 0; y < m.length; y++) {
                      var v = m[y];
                      if (v.isActive) {
                        var r = v.collision,
                          p = r.bodyA.parent,
                          g = r.bodyB.parent;
                        if (
                          !((p.isSleeping && g.isSleeping) || p.isStatic || g.isStatic) &&
                          (p.isSleeping || g.isSleeping)
                        ) {
                          var E = p.isSleeping && !p.isStatic ? p : g,
                            R = E === p ? g : p;
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
                ((i.create = function (y, v) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: y,
                    bodyB: v,
                    parentA: y.parent,
                    parentB: v.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (y, v, r) {
                    if (
                      (i._overlapAxes(m, y.vertices, v.vertices, y.axes),
                      m.overlap <= 0 ||
                        (i._overlapAxes(o, v.vertices, y.vertices, v.axes), o.overlap <= 0))
                    )
                      return null;
                    var p = r && r.table[f.id(y, v)],
                      g;
                    (p
                      ? (g = p.collision)
                      : ((g = i.create(y, v)),
                        (g.collided = !0),
                        (g.bodyA = y.id < v.id ? y : v),
                        (g.bodyB = y.id < v.id ? v : y),
                        (g.parentA = g.bodyA.parent),
                        (g.parentB = g.bodyB.parent)),
                      (y = g.bodyA),
                      (v = g.bodyB));
                    var E;
                    m.overlap < o.overlap ? (E = m) : (E = o);
                    var R = g.normal,
                      D = g.tangent,
                      w = g.penetration,
                      L = g.supports,
                      M = E.overlap,
                      _ = E.axis,
                      O = _.x,
                      A = _.y,
                      B = v.position.x - y.position.x,
                      z = v.position.y - y.position.y;
                    (O * B + A * z >= 0 && ((O = -O), (A = -A)),
                      (R.x = O),
                      (R.y = A),
                      (D.x = -A),
                      (D.y = O),
                      (w.x = O * M),
                      (w.y = A * M),
                      (g.depth = M));
                    var H = i._findSupports(y, v, R, 1),
                      G = 0;
                    if (
                      (d.contains(y.vertices, H[0]) && (L[G++] = H[0]),
                      d.contains(y.vertices, H[1]) && (L[G++] = H[1]),
                      G < 2)
                    ) {
                      var J = i._findSupports(v, y, R, -1);
                      (d.contains(v.vertices, J[0]) && (L[G++] = J[0]),
                        G < 2 && d.contains(v.vertices, J[1]) && (L[G++] = J[1]));
                    }
                    return (G === 0 && (L[G++] = H[0]), (g.supportCount = G), g);
                  }),
                  (i._overlapAxes = function (y, v, r, p) {
                    var g = v.length,
                      E = r.length,
                      R = v[0].x,
                      D = v[0].y,
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
                        q = te.y,
                        K = R * ee + D * q,
                        ne = w * ee + L * q,
                        se = K,
                        de = ne;
                      for (J = 1; J < g; J += 1)
                        ((H = v[J].x * ee + v[J].y * q), H > se ? (se = H) : H < K && (K = H));
                      for (J = 1; J < E; J += 1)
                        ((H = r[J].x * ee + r[J].y * q), H > de ? (de = H) : H < ne && (ne = H));
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
                  (i._findSupports = function (y, v, r, p) {
                    var g = v.vertices,
                      E = g.length,
                      R = y.position.x,
                      D = y.position.y,
                      w = r.x * p,
                      L = r.y * p,
                      M = g[0],
                      _ = M,
                      O = w * (R - _.x) + L * (D - _.y),
                      A,
                      B,
                      z;
                    for (z = 1; z < E; z += 1)
                      ((_ = g[z]),
                        (B = w * (R - _.x) + L * (D - _.y)),
                        B < O && ((O = B), (M = _)));
                    return (
                      (A = g[(E + M.index - 1) % E]),
                      (O = w * (R - A.x) + L * (D - A.y)),
                      (_ = g[(M.index + 1) % E]),
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
                      v = f.contacts,
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
                y = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (v) {
                    var r = v;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var p = r.bodyA ? f.add(r.bodyA.position, r.pointA) : r.pointA,
                      g = r.bodyB ? f.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = f.magnitude(f.sub(p, g));
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
                  (i.preSolveAll = function (v) {
                    for (var r = 0; r < v.length; r += 1) {
                      var p = v[r],
                        g = p.constraintImpulse;
                      p.isStatic ||
                        (g.x === 0 && g.y === 0 && g.angle === 0) ||
                        ((p.position.x += g.x), (p.position.y += g.y), (p.angle += g.angle));
                    }
                  }),
                  (i.solveAll = function (v, r) {
                    for (var p = y.clamp(r / y._baseDelta, 0, 1), g = 0; g < v.length; g += 1) {
                      var E = v[g],
                        R = !E.bodyA || (E.bodyA && E.bodyA.isStatic),
                        D = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (R || D) && i.solve(v[g], p);
                    }
                    for (g = 0; g < v.length; g += 1)
                      ((E = v[g]),
                        (R = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (D = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !R && !D && i.solve(v[g], p));
                  }),
                  (i.solve = function (v, r) {
                    var p = v.bodyA,
                      g = v.bodyB,
                      E = v.pointA,
                      R = v.pointB;
                    if (!(!p && !g)) {
                      (p &&
                        !p.isStatic &&
                        (f.rotate(E, p.angle - v.angleA, E), (v.angleA = p.angle)),
                        g &&
                          !g.isStatic &&
                          (f.rotate(R, g.angle - v.angleB, R), (v.angleB = g.angle)));
                      var D = E,
                        w = R;
                      if (
                        (p && (D = f.add(p.position, E)),
                        g && (w = f.add(g.position, R)),
                        !(!D || !w))
                      ) {
                        var L = f.sub(D, w),
                          M = f.magnitude(L);
                        M < i._minLength && (M = i._minLength);
                        var _ = (M - v.length) / M,
                          O = v.stiffness >= 1 || v.length === 0,
                          A = O ? v.stiffness * r : v.stiffness * r * r,
                          B = v.damping * r,
                          z = f.mult(L, _ * A),
                          H = (p ? p.inverseMass : 0) + (g ? g.inverseMass : 0),
                          G = (p ? p.inverseInertia : 0) + (g ? g.inverseInertia : 0),
                          J = H + G,
                          te,
                          ee,
                          q,
                          K,
                          ne;
                        if (B > 0) {
                          var se = f.create();
                          ((q = f.div(L, M)),
                            (ne = f.sub(
                              (g && f.sub(g.position, g.positionPrev)) || se,
                              (p && f.sub(p.position, p.positionPrev)) || se
                            )),
                            (K = f.dot(q, ne)));
                        }
                        (p &&
                          !p.isStatic &&
                          ((ee = p.inverseMass / H),
                          (p.constraintImpulse.x -= z.x * ee),
                          (p.constraintImpulse.y -= z.y * ee),
                          (p.position.x -= z.x * ee),
                          (p.position.y -= z.y * ee),
                          B > 0 &&
                            ((p.positionPrev.x -= B * q.x * K * ee),
                            (p.positionPrev.y -= B * q.y * K * ee)),
                          (te =
                            (f.cross(E, z) / J) *
                            i._torqueDampen *
                            p.inverseInertia *
                            (1 - v.angularStiffness)),
                          (p.constraintImpulse.angle -= te),
                          (p.angle -= te)),
                          g &&
                            !g.isStatic &&
                            ((ee = g.inverseMass / H),
                            (g.constraintImpulse.x += z.x * ee),
                            (g.constraintImpulse.y += z.y * ee),
                            (g.position.x += z.x * ee),
                            (g.position.y += z.y * ee),
                            B > 0 &&
                              ((g.positionPrev.x += B * q.x * K * ee),
                              (g.positionPrev.y += B * q.y * K * ee)),
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
                      var p = v[r],
                        g = p.constraintImpulse;
                      if (!(p.isStatic || (g.x === 0 && g.y === 0 && g.angle === 0))) {
                        c.set(p, !1);
                        for (var E = 0; E < p.parts.length; E++) {
                          var R = p.parts[E];
                          (d.translate(R.vertices, g),
                            E > 0 && ((R.position.x += g.x), (R.position.y += g.y)),
                            g.angle !== 0 &&
                              (d.rotate(R.vertices, g.angle, p.position),
                              o.rotate(R.axes, g.angle),
                              E > 0 && f.rotateAbout(R.position, g.angle, p.position, R.position)),
                            m.update(R.bounds, R.vertices, p.velocity));
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
                      p = (v.bodyA ? v.bodyA.position.y : 0) + (v.pointA ? v.pointA.y : 0),
                      g = (v.bodyB ? v.bodyB.position.x : 0) + (v.pointB ? v.pointB.x : 0),
                      E = (v.bodyB ? v.bodyB.position.y : 0) + (v.pointB ? v.pointB.y : 0),
                      R = r - g,
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
                      v = d.normalise({ x: c[y].y - c[o].y, y: c[o].x - c[y].x }),
                      r = v.y === 0 ? 1 / 0 : v.x / v.y;
                    ((r = r.toFixed(3).toString()), (m[r] = v));
                  }
                  return f.values(m);
                }),
                  (i.rotate = function (c, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), y = Math.sin(m), v = 0; v < c.length; v++) {
                        var r = c[v],
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
                ((i.rectangle = function (y, v, r, p, g) {
                  g = g || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: y, y: v },
                    vertices: d.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + p + ' L 0 ' + p),
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
                  (i.trapezoid = function (y, v, r, p, g, E) {
                    ((E = E || {}),
                      g >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (g *= 0.5));
                    var R = (1 - g * 2) * r,
                      D = r * g,
                      w = D + R,
                      L = w + D,
                      M;
                    g < 0.5
                      ? (M = 'L 0 0 L ' + D + ' ' + -p + ' L ' + w + ' ' + -p + ' L ' + L + ' 0')
                      : (M = 'L 0 0 L ' + w + ' ' + -p + ' L ' + L + ' 0');
                    var _ = {
                      label: 'Trapezoid Body',
                      position: { x: y, y: v },
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
                  (i.circle = function (y, v, r, p, g) {
                    p = p || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    g = g || 25;
                    var R = Math.ceil(Math.max(10, Math.min(g, r)));
                    return (R % 2 === 1 && (R += 1), i.polygon(y, v, R, r, f.extend({}, E, p)));
                  }),
                  (i.polygon = function (y, v, r, p, g) {
                    if (((g = g || {}), r < 3)) return i.circle(y, v, p, g);
                    for (var E = (2 * Math.PI) / r, R = '', D = E * 0.5, w = 0; w < r; w += 1) {
                      var L = D + w * E,
                        M = Math.cos(L) * p,
                        _ = Math.sin(L) * p;
                      R += 'L ' + M.toFixed(3) + ' ' + _.toFixed(3) + ' ';
                    }
                    var O = {
                      label: 'Polygon Body',
                      position: { x: y, y: v },
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
                  (i.fromVertices = function (y, v, r, p, g, E, R, D) {
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
                          !L &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        O || !L)
                      )
                        (O ? (B = d.clockwiseSort(B)) : (B = d.hull(B)),
                          _.push({ position: { x: y, y: v }, vertices: B }));
                      else {
                        var ee = B.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          D !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, D));
                        var q = w.quickDecomp(ee);
                        for (z = 0; z < q.length; z++) {
                          var K = q[z],
                            ne = K.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            _.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (z = 0; z < _.length; z++) _[z] = c.create(f.extend(_[z], p));
                    if (g) {
                      var se = 5;
                      for (z = 0; z < _.length; z++) {
                        var de = _[z];
                        for (H = z + 1; H < _.length; H++) {
                          var j = _[H];
                          if (m.overlaps(de.bounds, j.bounds)) {
                            var F = de.vertices,
                              ae = j.vertices;
                            for (G = 0; G < de.vertices.length; G++)
                              for (te = 0; te < j.vertices.length; te++) {
                                var le = o.magnitudeSquared(o.sub(F[(G + 1) % F.length], ae[te])),
                                  oe = o.magnitudeSquared(o.sub(F[G], ae[(te + 1) % ae.length]));
                                le < se &&
                                  oe < se &&
                                  ((F[G].isInternal = !0), (ae[te].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return _.length > 1
                      ? ((M = c.create(f.extend({ parts: _.slice(0) }, p))),
                        c.setPosition(M, { x: y, y: v }),
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
                      v = i.canCollide,
                      r = f.collides,
                      p = c.collisions,
                      g = 0,
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
                          v(D.collisionFilter, z.collisionFilter)
                        ) {
                          var G = z.parts.length;
                          if (B && G === 1) {
                            var J = r(D, z, m);
                            J && (p[g++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, q = te; q < A; q++)
                              for (var K = D.parts[q], w = K.bounds, ne = ee; ne < G; ne++) {
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
                                  J && (p[g++] = J);
                                }
                              }
                        }
                      }
                    }
                    return (p.length !== g && (p.length = g), p);
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
                      v = window.pageXOffset !== void 0 ? window.pageXOffset : y.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : y.scrollTop,
                      p = f.changedTouches,
                      g,
                      E;
                    return (
                      p
                        ? ((g = p[0].pageX - o.left - v), (E = p[0].pageY - o.top - r))
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
                      var m = i.dependencies(f), o = d.topologicalSort(m), y = [], v = 0;
                      v < o.length;
                      v += 1
                    )
                      if (o[v] !== f.name) {
                        var r = i.resolve(o[v]);
                        if (!r) {
                          y.push('❌ ' + o[v]);
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
                        (c[o] = d.map(f.uses || [], function (v) {
                          i.isPlugin(v) && i.register(v);
                          var r = i.dependencyParse(v),
                            p = i.resolve(v);
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
                                  i.toString(v),
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
                      v = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: f,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: y,
                      patch: v,
                      parts: [o, y, v],
                      prerelease: m[7],
                      number: o * 1e8 + y * 1e4 + v,
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
                v = h(10),
                r = h(0),
                p = h(4);
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
                      (R.world = g.world || y.create({ label: 'World' })),
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
                      L = g.pairs,
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
                    var B = y.allBodies(D),
                      z = y.allConstraints(D);
                    for (
                      D.isModified && (c.setBodies(w, B), y.setModified(D, !1, !1, !0)),
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
                    var H = c.collisions(w);
                    (m.update(L, H, _),
                      g.enableSleeping && d.afterCollisions(L.list),
                      L.collisionStart.length > 0 &&
                        o.trigger(g, 'collisionStart', {
                          pairs: L.collisionStart,
                          timestamp: M.timestamp,
                          delta: E,
                        }));
                    var G = r.clamp(20 / g.positionIterations, 0, 1);
                    for (f.preSolvePosition(L.list), O = 0; O < g.positionIterations; O++)
                      f.solvePosition(L.list, E, G);
                    for (
                      f.postSolvePosition(B), v.preSolveAll(B), O = 0;
                      O < g.constraintIterations;
                      O++
                    )
                      v.solveAll(z, E);
                    for (
                      v.postSolveAll(B), f.preSolveVelocity(L.list), O = 0;
                      O < g.velocityIterations;
                      O++
                    )
                      f.solveVelocity(L.list, E);
                    return (
                      i._bodiesUpdateVelocities(B),
                      L.collisionActive.length > 0 &&
                        o.trigger(g, 'collisionActive', {
                          pairs: L.collisionActive,
                          timestamp: M.timestamp,
                          delta: E,
                        }),
                      L.collisionEnd.length > 0 &&
                        o.trigger(g, 'collisionEnd', {
                          pairs: L.collisionEnd,
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
                      for (var R = y.allBodies(g.world), D = 0; D < R.length; D++) {
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
                        var L = g[w];
                        L.isStatic ||
                          L.isSleeping ||
                          ((L.force.y += L.mass * E.y * R), (L.force.x += L.mass * E.x * R));
                      }
                  }),
                  (i._bodiesUpdate = function (g, E) {
                    for (var R = g.length, D = 0; D < R; D++) {
                      var w = g[D];
                      w.isStatic || w.isSleeping || p.update(w, E);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (g) {
                    for (var E = g.length, R = 0; R < E; R++) p.updateVelocities(g[R]);
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
                      v,
                      r = m.length;
                    for (o = 0; o < r; o++)
                      ((y = m[o]),
                        y.isActive &&
                          ((v = y.contactCount),
                          (y.collision.parentA.totalContacts += v),
                          (y.collision.parentB.totalContacts += v)));
                  }),
                  (i.solvePosition = function (m, o, y) {
                    var v,
                      r,
                      p,
                      g,
                      E,
                      R,
                      D,
                      w,
                      L = i._positionDampen * (y || 1),
                      M = f.clamp(o / f._baseDelta, 0, 1),
                      _ = m.length;
                    for (v = 0; v < _; v++)
                      ((r = m[v]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (g = p.parentA),
                          (E = p.parentB),
                          (R = p.normal),
                          (r.separation =
                            p.depth +
                            R.x * (E.positionImpulse.x - g.positionImpulse.x) +
                            R.y * (E.positionImpulse.y - g.positionImpulse.y))));
                    for (v = 0; v < _; v++)
                      ((r = m[v]),
                        !(!r.isActive || r.isSensor) &&
                          ((p = r.collision),
                          (g = p.parentA),
                          (E = p.parentB),
                          (R = p.normal),
                          (w = r.separation - r.slop * M),
                          (g.isStatic || E.isStatic) && (w *= 2),
                          g.isStatic ||
                            g.isSleeping ||
                            ((D = L / g.totalContacts),
                            (g.positionImpulse.x += R.x * w * D),
                            (g.positionImpulse.y += R.y * w * D)),
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
                        v = d.translate,
                        r = c.update,
                        p = 0;
                      p < y;
                      p++
                    ) {
                      var g = m[p],
                        E = g.positionImpulse,
                        R = E.x,
                        D = E.y,
                        w = g.velocity;
                      if (((g.totalContacts = 0), R !== 0 || D !== 0)) {
                        for (var L = 0; L < g.parts.length; L++) {
                          var M = g.parts[L];
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
                      y,
                      v;
                    for (y = 0; y < o; y++) {
                      var r = m[y];
                      if (!(!r.isActive || r.isSensor)) {
                        var p = r.contacts,
                          g = r.contactCount,
                          E = r.collision,
                          R = E.parentA,
                          D = E.parentB,
                          w = E.normal,
                          L = E.tangent;
                        for (v = 0; v < g; v++) {
                          var M = p[v],
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
                      v = y * y,
                      r = v * y,
                      p = -i._restingThresh * y,
                      g = i._restingThreshTangent,
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
                          q = O.friction * O.frictionStatic * E,
                          K = O.contacts,
                          ne = O.contactCount,
                          se = 1 / ne,
                          de = B.position.x - B.positionPrev.x,
                          j = B.position.y - B.positionPrev.y,
                          F = B.angle - B.anglePrev,
                          ae = z.position.x - z.positionPrev.x,
                          le = z.position.y - z.positionPrev.y,
                          oe = z.angle - z.anglePrev;
                        for (_ = 0; _ < ne; _++) {
                          var ie = K[_],
                            he = ie.vertex,
                            ye = he.x - B.position.x,
                            Ae = he.y - B.position.y,
                            Je = he.x - z.position.x,
                            ut = he.y - z.position.y,
                            Ze = de - Ae * F,
                            Kn = j + ye * F,
                            bt = ae - ut * oe,
                            Jn = le + Je * oe,
                            on = Ze - bt,
                            fn = Kn - Jn,
                            kn = H * on + G * fn,
                            dt = J * on + te * fn,
                            qt = O.separation + kn,
                            We = Math.min(qt, 1);
                          We = qt < 0 ? 0 : We;
                          var dn = We * q;
                          dt < -dn || dt > dn
                            ? ((L = dt > 0 ? dt : -dt),
                              (w = O.friction * (dt > 0 ? 1 : -1) * r),
                              w < -L ? (w = -L) : w > L && (w = L))
                            : ((w = dt), (L = R));
                          var Sa = ye * G - Ae * H,
                            st = Je * G - ut * H,
                            zt =
                              se / (ee + B.inverseInertia * Sa * Sa + z.inverseInertia * st * st),
                            wt = (1 + O.restitution) * kn * zt;
                          if (((w *= zt), kn < p)) ie.normalImpulse = 0;
                          else {
                            var xa = ie.normalImpulse;
                            ((ie.normalImpulse += wt),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (wt = ie.normalImpulse - xa));
                          }
                          if (dt < -g || dt > g) ie.tangentImpulse = 0;
                          else {
                            var pn = ie.tangentImpulse;
                            ((ie.tangentImpulse += w),
                              ie.tangentImpulse < -L && (ie.tangentImpulse = -L),
                              ie.tangentImpulse > L && (ie.tangentImpulse = L),
                              (w = ie.tangentImpulse - pn));
                          }
                          var Sn = H * wt + J * w,
                            xn = G * wt + te * w;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += Sn * B.inverseMass),
                            (B.positionPrev.y += xn * B.inverseMass),
                            (B.anglePrev += (ye * xn - Ae * Sn) * B.inverseInertia)),
                            z.isStatic ||
                              z.isSleeping ||
                              ((z.positionPrev.x -= Sn * z.inverseMass),
                              (z.positionPrev.y -= xn * z.inverseMass),
                              (z.anglePrev -= (Je * xn - ut * Sn) * z.inverseInertia)));
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
                      v = d.create,
                      r = d.setActive,
                      p = c.table,
                      g = c.list,
                      E = g.length,
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
                          : ((z = v(B, o)), (p[z.id] = z), (D[_++] = z), (g[R++] = z)));
                    for (R = 0, E = g.length, H = 0; H < E; H++)
                      ((z = g[H]),
                        z.timeUpdated >= o
                          ? (g[R++] = z)
                          : (r(z, !1, o),
                            z.collision.bodyA.sleepCounter > 0 && z.collision.bodyB.sleepCounter > 0
                              ? (g[R++] = z)
                              : ((w[O++] = z), delete p[z.id])));
                    (g.length !== R && (g.length = R),
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
                ((i.stack = function (v, r, p, g, E, R, D) {
                  for (
                    var w = d.create({ label: 'Stack' }), L = v, M = r, _, O = 0, A = 0;
                    A < g;
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
                    ((M += B + R), (L = v));
                  }
                  return w;
                }),
                  (i.chain = function (v, r, p, g, E, R) {
                    for (var D = v.bodies, w = 1; w < D.length; w++) {
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
                          pointB: { x: B * g, y: A * E },
                        },
                        H = c.extend(z, R);
                      d.addConstraint(v, f.create(H));
                    }
                    return ((v.label += ' Chain'), v);
                  }),
                  (i.mesh = function (v, r, p, g, E) {
                    var R = v.bodies,
                      D,
                      w,
                      L,
                      M,
                      _;
                    for (D = 0; D < p; D++) {
                      for (w = 1; w < r; w++)
                        ((L = R[w - 1 + D * r]),
                          (M = R[w + D * r]),
                          d.addConstraint(v, f.create(c.extend({ bodyA: L, bodyB: M }, E))));
                      if (D > 0)
                        for (w = 0; w < r; w++)
                          ((L = R[w + (D - 1) * r]),
                            (M = R[w + D * r]),
                            d.addConstraint(v, f.create(c.extend({ bodyA: L, bodyB: M }, E))),
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
                  (i.pyramid = function (v, r, p, g, E, R, D) {
                    return i.stack(v, r, p, g, E, R, function (w, L, M, _, O, A) {
                      var B = Math.min(g, Math.ceil(p / 2)),
                        z = O ? O.bounds.max.x - O.bounds.min.x : 0;
                      if (!(_ > B)) {
                        _ = B - _;
                        var H = _,
                          G = p - 1 - _;
                        if (!(M < H || M > G)) {
                          A === 1 && m.translate(O, { x: (M + (p % 2 === 1 ? 1 : -1)) * z, y: 0 });
                          var J = O ? M * z : 0;
                          return D(v + J + M * E, L, M, _, O, A);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (v, r, p, g, E) {
                    for (var R = d.create({ label: 'Newtons Cradle' }), D = 0; D < p; D++) {
                      var w = 1.9,
                        L = o.circle(v + D * (g * w), r + E, g, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        M = f.create({ pointA: { x: v + D * (g * w), y: r }, bodyB: L });
                      (d.addBody(R, L), d.addConstraint(R, M));
                    }
                    return R;
                  }),
                  y(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (v, r, p, g, E) {
                    var R = m.nextGroup(!0),
                      D = 20,
                      w = -p * 0.5 + D,
                      L = p * 0.5 - D,
                      M = 0,
                      _ = d.create({ label: 'Car' }),
                      O = o.rectangle(v, r, p, g, {
                        collisionFilter: { group: R },
                        chamfer: { radius: g * 0.5 },
                        density: 2e-4,
                      }),
                      A = o.circle(v + w, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      B = o.circle(v + L, r + M, E, {
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
                  (i.softBody = function (v, r, p, g, E, R, D, w, L, M) {
                    ((L = c.extend({ inertia: 1 / 0 }, L)),
                      (M = c.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var _ = i.stack(v, r, p, g, E, R, function (O, A) {
                      return o.circle(O, A, w, L);
                    });
                    return (i.mesh(_, p, g, D, M), (_.label = 'Soft Body'), _);
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
                  (i.update = function (m, o, y, v) {
                    var r,
                      p,
                      g,
                      E = y.world,
                      R = m.buckets,
                      D,
                      w,
                      L = !1;
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
                          for (p = O.startCol; p <= O.endCol; p++)
                            for (g = O.startRow; g <= O.endRow; g++) {
                              ((w = i._getBucketId(p, g)), (D = R[w]));
                              var A =
                                  p >= _.startCol &&
                                  p <= _.endCol &&
                                  g >= _.startRow &&
                                  g <= _.endRow,
                                B =
                                  p >= M.region.startCol &&
                                  p <= M.region.endCol &&
                                  g >= M.region.startRow &&
                                  g <= M.region.endRow;
                              (!A && B && B && D && i._bucketRemoveBody(m, D, M),
                                (M.region === _ || (A && !B) || v) &&
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
                      v = Math.max(m.endCol, o.endCol),
                      r = Math.min(m.startRow, o.startRow),
                      p = Math.max(m.endRow, o.endRow);
                    return i._createRegion(y, v, r, p);
                  }),
                  (i._getRegion = function (m, o) {
                    var y = o.bounds,
                      v = Math.floor(y.min.x / m.bucketWidth),
                      r = Math.floor(y.max.x / m.bucketWidth),
                      p = Math.floor(y.min.y / m.bucketHeight),
                      g = Math.floor(y.max.y / m.bucketHeight);
                    return i._createRegion(v, r, p, g);
                  }),
                  (i._createRegion = function (m, o, y, v) {
                    return {
                      id: m + ',' + o + ',' + y + ',' + v,
                      startCol: m,
                      endCol: o,
                      startRow: y,
                      endRow: v,
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
                    var v = m.pairs,
                      r = d.id,
                      p = o.length,
                      g;
                    for (g = 0; g < p; g++) {
                      var E = o[g];
                      if (!(y.id === E.id || (y.isStatic && E.isStatic))) {
                        var R = r(y, E),
                          D = v[R];
                        D ? (D[2] += 1) : (v[R] = [y, E, 1]);
                      }
                    }
                    o.push(y);
                  }),
                  (i._bucketRemoveBody = function (m, o, y) {
                    var v = m.pairs,
                      r = d.id,
                      p;
                    o.splice(f.indexOf(o, y), 1);
                    var g = o.length;
                    for (p = 0; p < g; p++) {
                      var E = v[r(y, o[p])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      y = m.pairs,
                      v = f.keys(y),
                      r = v.length,
                      p = [],
                      g;
                    for (g = 0; g < r; g++) ((o = y[v[g]]), o[2] > 0 ? p.push(o) : delete y[v[g]]);
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
                v = h(6),
                r = h(0),
                p = h(1);
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
                    m.on(g, 'beforeUpdate', function () {
                      var M = v.allBodies(g.world);
                      (i.update(L, M), i._triggerEvents(L));
                    }),
                    L
                  );
                }),
                  (i.update = function (g, E) {
                    var R = g.mouse,
                      D = g.constraint,
                      w = g.body;
                    if (R.button === 0) {
                      if (D.bodyB) (f.set(D.bodyB, !1), (D.pointA = R.position));
                      else
                        for (var L = 0; L < E.length; L++)
                          if (
                            ((w = E[L]),
                            p.contains(w.bounds, R.position) &&
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
                ((i.collides = function (y, v) {
                  for (
                    var r = [], p = v.length, g = y.bounds, E = f.collides, R = c.overlaps, D = 0;
                    D < p;
                    D++
                  ) {
                    var w = v[D],
                      L = w.parts.length,
                      M = L === 1 ? 0 : 1;
                    if (R(w.bounds, g))
                      for (var _ = M; _ < L; _++) {
                        var O = w.parts[_];
                        if (R(O.bounds, g)) {
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
                  (i.ray = function (y, v, r, p) {
                    p = p || 1e-100;
                    for (
                      var g = d.angle(v, r),
                        E = d.magnitude(d.sub(v, r)),
                        R = (r.x + v.x) * 0.5,
                        D = (r.y + v.y) * 0.5,
                        w = m.rectangle(R, D, E, p, { angle: g }),
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
                  (i.region = function (y, v, r) {
                    for (var p = [], g = 0; g < y.length; g++) {
                      var E = y[g],
                        R = c.overlaps(E.bounds, v);
                      ((R && !r) || (!R && r)) && p.push(E);
                    }
                    return p;
                  }),
                  (i.point = function (y, v) {
                    for (var r = [], p = 0; p < y.length; p++) {
                      var g = y[p];
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
                y = h(2),
                v = h(14);
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
                      q = M.canvas.height,
                      K = M.canvas.width,
                      ne = K / q,
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
                      H = M.context,
                      G = M.options,
                      J = M.timing,
                      te = c.allBodies(B),
                      ee = c.allConstraints(B),
                      q = G.wireframes ? G.wireframeBackground : G.background,
                      K = [],
                      ne = [],
                      se,
                      de = { timestamp: A.timing.timestamp };
                    if (
                      (o.trigger(M, 'beforeRender', de),
                      M.currentBackground !== q && L(M, q),
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
                          ae = F.bodyA,
                          le = F.bodyB,
                          oe = F.pointA,
                          ie = F.pointB;
                        (ae && (oe = y.add(ae.position, F.pointA)),
                          le && (ie = y.add(le.position, F.pointB)),
                          !(!oe || !ie) &&
                            (m.contains(M.bounds, oe) || m.contains(M.bounds, ie)) &&
                            ne.push(F));
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
                        q = 0;
                      q < z.length;
                      q += 1
                    )
                      H += z[q].parts.length;
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
                      q = O.timing.lastDelta,
                      K = E(B),
                      ne = E(z),
                      se = E(G),
                      de = E(J),
                      j = E(te),
                      F = E(H),
                      ae = F / K || 0,
                      le = Math.round(K / q),
                      oe = 1e3 / K || 0,
                      ie = 4,
                      he = 12,
                      ye = 60,
                      Ae = 34,
                      Je = 10,
                      ut = 69;
                    ((_.fillStyle = '#0e0f19'),
                      _.fillRect(0, 50, he * 5 + ye * 6 + 22, Ae),
                      i.status(
                        _,
                        Je,
                        ut,
                        ye,
                        ie,
                        B.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function (Ze) {
                          return B[Ze] / K - 1;
                        }
                      ),
                      i.status(
                        _,
                        Je + he + ye,
                        ut,
                        ye,
                        ie,
                        G.length,
                        q.toFixed(2) + ' dt',
                        i._goodDelta / q,
                        function (Ze) {
                          return G[Ze] / se - 1;
                        }
                      ),
                      i.status(
                        _,
                        Je + (he + ye) * 2,
                        ut,
                        ye,
                        ie,
                        J.length,
                        ee + ' upf',
                        Math.pow(f.clamp(de / le || 1, 0, 1), 4),
                        function (Ze) {
                          return J[Ze] / de - 1;
                        }
                      ),
                      i.status(
                        _,
                        Je + (he + ye) * 3,
                        ut,
                        ye,
                        ie,
                        te.length,
                        j.toFixed(2) + ' ut',
                        1 - (ee * j) / i._goodFps,
                        function (Ze) {
                          return te[Ze] / j - 1;
                        }
                      ),
                      i.status(
                        _,
                        Je + (he + ye) * 4,
                        ut,
                        ye,
                        ie,
                        z.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function (Ze) {
                          return z[Ze] / ne - 1;
                        }
                      ),
                      i.status(
                        _,
                        Je + (he + ye) * 5,
                        ut,
                        ye,
                        ie,
                        H.length,
                        ae.toFixed(2) + ' x',
                        ae * ae * ae,
                        function (Ze) {
                          return (H[Ze] / B[Ze] / ae || 0) - 1;
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
                                q = Math.ceil(f.clamp(B.length / 5, 12, 20)),
                                K,
                                ne = 1;
                              ne < q;
                              ne += 1
                            )
                              ((K = ne % 2 === 0 ? 1 : -1),
                                O.lineTo(
                                  G.x + te.x * (ne / q) + ee.x * K * 4,
                                  G.y + te.y * (ne / q) + ee.y * K * 4
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
                                q = w(M, ee.texture);
                              (A.translate(G.position.x, G.position.y),
                                A.rotate(G.angle),
                                A.drawImage(
                                  q,
                                  q.width * -ee.xOffset * ee.xScale,
                                  q.height * -ee.yOffset * ee.yScale,
                                  q.width * ee.xScale,
                                  q.height * ee.yScale
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
                              var q = z.axes[J];
                              (A.moveTo(z.position.x, z.position.y),
                                A.lineTo(z.position.x + q.x * 20, z.position.y + q.y * 20));
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
                        var q = z.contacts[0].vertex.x,
                          K = z.contacts[0].vertex.y;
                        (z.contactCount === 2 &&
                          ((q = (z.contacts[0].vertex.x + z.contacts[1].vertex.x) / 2),
                          (K = (z.contacts[0].vertex.y + z.contacts[1].vertex.y) / 2)),
                          H.bodyB === H.supports[0].body || H.bodyA.isStatic === !0
                            ? A.moveTo(q - H.normal.x * 8, K - H.normal.y * 8)
                            : A.moveTo(q + H.normal.x * 8, K + H.normal.y * 8),
                          A.lineTo(q, K));
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
                      var q = O[ee].data;
                      switch (
                        (_.translate(0.5, 0.5),
                        (_.lineWidth = 1),
                        (_.strokeStyle = 'rgba(255,165,0,0.9)'),
                        _.setLineDash([1, 2]),
                        q.type)
                      ) {
                        case 'body':
                          ((z = q.bounds),
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
                          var K = q.pointA;
                          (q.bodyA && (K = q.pointB),
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
                      v = c.extend(y, o);
                    return ((v.fps = 0), v);
                  }),
                  (i.run = function (o, y) {
                    return (
                      (o.timeBuffer = i._frameDeltaFallback),
                      (function v(r) {
                        ((o.frameRequestId = i._onNextFrame(o, v)),
                          r && o.enabled && i.tick(o, y, r));
                      })(),
                      o
                    );
                  }),
                  (i.tick = function (o, y, v) {
                    var r = c.now(),
                      p = o.delta,
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
                        (g += 1));
                      var O = c.now() - r,
                        A = c.now() - _,
                        B = O + (i._elapsedNextEstimate * A) / g;
                      if (g >= L || B > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / p - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((y.timing.lastUpdatesPerFrame = g),
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
                  for (var y = 0, v = o.length, r = 0; r < v; r += 1) y += o[r];
                  return y / v || 0;
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
                    v,
                    r,
                    p,
                    g,
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
                  for (g = p.concat(); _ < y; ) {
                    if (((D = f.getPathSegAtLength(_)), (r = p[D]), r != E)) {
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
                        y,
                        v,
                        r,
                        p = f.pathSegList,
                        g = 0,
                        E = 0,
                        R = p.numberOfItems,
                        D = 0;
                      D < R;
                      ++D
                    ) {
                      var w = p.getItem(D),
                        L = w.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(L)) ('x' in w && (g = w.x), 'y' in w && (E = w.y));
                      else
                        switch (
                          ('x1' in w && (o = g + w.x1),
                          'x2' in w && (v = g + w.x2),
                          'y1' in w && (y = E + w.y1),
                          'y2' in w && (r = E + w.y2),
                          'x' in w && (g += w.x),
                          'y' in w && (E += w.y),
                          L)
                        ) {
                          case 'm':
                            p.replaceItem(f.createSVGPathSegMovetoAbs(g, E), D);
                            break;
                          case 'l':
                            p.replaceItem(f.createSVGPathSegLinetoAbs(g, E), D);
                            break;
                          case 'h':
                            p.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(g), D);
                            break;
                          case 'v':
                            p.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), D);
                            break;
                          case 'c':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicAbs(g, E, o, y, v, r), D);
                            break;
                          case 's':
                            p.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(g, E, v, r), D);
                            break;
                          case 'q':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(g, E, o, y), D);
                            break;
                          case 't':
                            p.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(g, E), D);
                            break;
                          case 'a':
                            p.replaceItem(
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
                      (L == 'M' || L == 'm') && ((c = g), (m = E));
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
var tS = eS();
const Ue = h0(tS),
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
  nS = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  aS = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  lS = {
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
  iS = {
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
  uS = 256,
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
  rS = (s) => (s * (s + 1)) / 2,
  sS = (s) => ({
    id: s,
    level: s,
    name: lS[s],
    theme: iS[s],
    radius: nS[s],
    restitution: aS[s],
    friction: 0.3,
    density: 0.001,
    score: rS(s),
    svgPath: Ph(kc, s),
    color: dh[s].color,
    glowColor: dh[s].glow,
  }),
  Va = 10,
  nr = Object.fromEntries(Array.from({ length: Va }, (s, b) => b + 1).map((s) => [s, sS(s)]));
Array.from({ length: Va }, (s, b) => nr[b + 1]);
const cS = 3,
  oS = 360,
  fS = (s) => Math.min(1, s / oS),
  mh = new Map(),
  Ol = (s, b, T = kc) => {
    const x = `${s}|${b}|${T}`,
      h = mh.get(x);
    if (h) return h;
    const i = nr[s],
      d = { ...i, radius: i.radius * fS(b), svgPath: Ph(T, s) };
    return (mh.set(x, d), d);
  },
  qn = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  Vn = { wall: 1, item: 2, magnetTarget: 4 },
  Ih = Vn.wall | Vn.item | Vn.magnetTarget,
  dS = Vn.wall | Vn.magnetTarget,
  ev = typeof window < 'u' && typeof window.localStorage < 'u',
  ar = (s) => {
    if (!ev) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  lr = (s, b) => {
    if (ev)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  mS = () => {
    const s = ar(cn.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  hS = (s) => {
    lr(cn.storageKeys.bestScore, String(s));
  },
  vS = () => {
    const s = ar(cn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  gS = (s) => {
    const b = [s, ...vS()].slice(0, cn.maxScoreHistory);
    return (lr(cn.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  yS = () => {
    const s = ar(cn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  pS = (s) => {
    lr(cn.storageKeys.isSoundOn, String(s));
  },
  SS = () => {
    const s = ar(cn.storageKeys.themeId);
    return Qh(s) ? s : kc;
  },
  xS = (s) => {
    lr(cn.storageKeys.themeId, s);
  },
  ES = () => {
    const [s, b] = N.useState(0),
      [T, x] = N.useState(0),
      [h, i] = N.useState(!1),
      d = N.useRef(0),
      f = N.useRef(0);
    N.useEffect(() => {
      const y = mS();
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
          v = y > f.current;
        return (
          v && ((f.current = y), hS(y), x(y)),
          gS(y),
          i(v),
          { isNewRecord: v, finalScore: y }
        );
      }, []);
    return { score: s, bestScore: T, isNewRecord: h, add: c, reset: m, finalize: o };
  },
  bS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  TS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  MS = 0.7,
  CS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  RS = () => {
    const [s, b] = N.useState(!0),
      T = N.useRef(null),
      x = N.useRef({});
    (N.useEffect(() => {
      b(yS());
    }, []),
      N.useEffect(() => {
        const d = CS();
        if (!d) return;
        const f = new d();
        T.current = f;
        let c = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, y] of Object.entries(TS))
              try {
                const r = await (await fetch(bS(y))).arrayBuffer();
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
          return (pS(f), f);
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
          ((o.gain.value = MS), m.connect(o).connect(f.destination), m.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: h, play: i };
  },
  hh = (s, b, T, x) => {
    const h = Ue.Bodies.circle(b, T, s.radius, {
      restitution: s.restitution,
      friction: s.friction,
      density: s.density,
      label: `item-${s.level}`,
      collisionFilter: { category: Vn.item, mask: Ih },
    });
    return ((h.plugin.itemData = { level: s.level, consumed: !1, droppedAt: x }), h);
  },
  pa = (s) => s.plugin.itemData,
  AS = (s, b) => {
    const T = qn.wallThickness,
      x = {
        isStatic: !0,
        restitution: 0.2,
        friction: 0.5,
        label: 'wall',
        collisionFilter: { category: Vn.wall },
      },
      h = Ue.Bodies.rectangle(s / 2, b + T / 2, s + T * 2, T, x),
      i = Ue.Bodies.rectangle(-T / 2, b / 2, T, b * 2, x),
      d = Ue.Bodies.rectangle(s + T / 2, b / 2, T, b * 2, x);
    return { ground: h, leftWall: i, rightWall: d };
  },
  _S = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  OS = (s) => (s < 2 || s > Va ? 0 : nr[s].score),
  DS = () => nr[Va].score,
  vh = new Map(),
  tv = (s) => {
    const b = vh.get(s);
    if (b) return b;
    const T = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (vh.set(s, T), T);
  },
  wc = (s, b) => {
    const T = (b.radius * 2) / uS;
    s.render.sprite = { texture: tv(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  gh = new Set(),
  yh = (s) => {
    for (let b = 1; b <= Va; b += 1) {
      const T = Ol(b, 1, s),
        x = tv(T.svgPath);
      if (gh.has(x)) continue;
      gh.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  zS = ({ fieldWidth: s, fieldHeight: b }) => {
    const T = N.useRef(null),
      x = N.useRef(null),
      h = N.useRef(null),
      i = N.useRef(null),
      d = N.useRef(null),
      [f, c] = N.useState('idle'),
      [m, o] = N.useState(null),
      [y, v] = N.useState(null),
      r = N.useRef(null),
      p = N.useRef(null),
      g = N.useCallback((ue) => {
        ((r.current = ue), o(ue));
      }, []),
      E = N.useCallback((ue) => {
        ((p.current = ue), v(ue));
      }, []),
      R = N.useRef(!0),
      D = N.useRef(0),
      w = N.useRef('idle'),
      L = N.useRef(null),
      M = N.useRef(s),
      _ = N.useRef(b),
      [O, A] = N.useState(() => SS()),
      B = N.useRef(O);
    B.current = O;
    const z = ES(),
      H = RS(),
      G = N.useRef(z.add);
    G.current = z.add;
    const J = N.useRef(H.play);
    J.current = H.play;
    const te = N.useRef(z.finalize);
    te.current = z.finalize;
    const [ee, q] = N.useState(0),
      K = N.useRef(0),
      ne = N.useCallback((ue) => {
        ((K.current = ue), q(ue));
      }, []),
      se = N.useCallback(
        (ue) => {
          const Ee = Math.min(Dt.gaugeMax, K.current + ue);
          Ee !== K.current && ne(Ee);
        },
        [ne]
      ),
      de = N.useRef(se);
    de.current = se;
    const [j, F] = N.useState(!1),
      [ae, le] = N.useState(!1),
      oe = N.useRef(!1),
      [ie, he] = N.useState(!1),
      ye = N.useRef(null),
      Ae = N.useRef(null),
      Je = N.useRef(null),
      ut = N.useRef(null),
      Ze = N.useRef(new Set()),
      Kn = N.useCallback((ue) => {
        ((ue.collisionFilter.category = Vn.magnetTarget),
          (ue.collisionFilter.mask = dS),
          Ze.current.add(ue));
      }, []),
      bt = N.useCallback(() => {
        for (const ue of Ze.current)
          ((ue.collisionFilter.category = Vn.item), (ue.collisionFilter.mask = Ih));
        Ze.current.clear();
      }, []),
      Jn = N.useCallback(() => {
        (bt(),
          (Je.current = null),
          (ut.current = null),
          ye.current === 'magnet' && (ye.current = null));
      }, [bt]),
      on = N.useRef(Jn);
    on.current = Jn;
    const fn = N.useRef(null),
      [kn, dt] = N.useState(null),
      qt = N.useRef(null),
      We = N.useRef(new Set()),
      dn = N.useCallback(() => {
        const ue = Math.floor(Math.random() * cS) + 1;
        return Ol(ue, M.current, B.current);
      }, []);
    N.useEffect(() => {
      const ue = T.current;
      if (!ue) return;
      const Ee = M.current,
        _e = _.current,
        ve = Ue.Engine.create({ gravity: { x: 0, y: qn.gravityY } }),
        Se = Ue.Render.create({
          element: ue,
          engine: ve,
          options: {
            width: Ee,
            height: _e,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: we, leftWall: ke, rightWall: et } = AS(Ee, _e);
      ([we, ke, et].forEach((tt) => {
        tt.render.visible = !1;
      }),
        Ue.World.add(ve.world, [we, ke, et]),
        Ue.Render.run(Se));
      const Ye = Ue.Runner.create();
      (Ue.Runner.run(Ye, ve), (x.current = ve), (h.current = Se), (i.current = Ye));
      for (const tt of Jc) yh(tt.id);
      const Xe = () => {
        document.hidden
          ? (Ue.Runner.stop(Ye), Ue.Render.stop(Se))
          : (Ue.Render.run(Se), Ue.Runner.run(Ye, ve));
      };
      document.addEventListener('visibilitychange', Xe);
      const ct = We.current;
      return () => {
        (document.removeEventListener('visibilitychange', Xe),
          Ue.Runner.stop(Ye),
          Ue.Render.stop(Se),
          Ue.World.clear(ve.world, !1),
          Ue.Engine.clear(ve),
          Se.canvas.parentNode && Se.canvas.parentNode.removeChild(Se.canvas),
          (Se.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          ct.clear());
      };
    }, []);
    const Sa = N.useCallback((ue, Ee) => {
      var ct;
      const _e = x.current;
      if (!_e) return;
      const ve = pa(ue),
        Se = pa(Ee);
      if (!ve || !Se || ve.consumed || Se.consumed || ve.level !== Se.level) return;
      ((ve.consumed = !0), (Se.consumed = !0));
      const we = ve.level + 1,
        ke = _S(ue, Ee);
      (Ue.World.remove(_e.world, [ue, Ee]), We.current.delete(ue), We.current.delete(Ee));
      let et = 0,
        Ye = !1,
        Xe = H1(we);
      if (we > Va)
        ((et = DS()), (Ye = !0), (Xe += Dt.bonusOnSpecialElimination), J.current('special'));
      else {
        const tt = Ol(we, M.current, B.current),
          Nt = hh(tt, ke.x, ke.y, performance.now());
        (wc(Nt, tt),
          Ue.World.add(_e.world, Nt),
          We.current.add(Nt),
          (et = OS(we)),
          (Ye = we === Va),
          Ye && (Xe += Dt.bonusOnLevel10Created),
          J.current(Ye ? 'special' : 'merge'));
      }
      (G.current(et),
        de.current(Xe),
        (ct = d.current) == null || ct.add({ x: ke.x, y: ke.y, score: et, isSpecial: Ye }));
    }, []);
    (N.useEffect(() => {
      const ue = x.current;
      if (!ue) return;
      const Ee = (_e) => {
        for (const ve of _e.pairs) Sa(ve.bodyA, ve.bodyB);
      };
      return (
        Ue.Events.on(ue, 'collisionStart', Ee),
        () => {
          Ue.Events.off(ue, 'collisionStart', Ee);
        }
      );
    }, [Sa]),
      N.useEffect(() => {
        const ue = x.current;
        if (!ue) return;
        const Ee = qn.gameOverLineOffset;
        let _e = 0;
        const ve = () => {
            ((fn.current = null), qt.current !== null && ((qt.current = null), dt(null)));
          },
          Se = () => {
            if (Je.current !== null)
              if (performance.now() >= Je.current) on.current();
              else {
                const tt = [];
                for (const Nt of Ze.current) {
                  const En = pa(Nt);
                  En && !En.consumed && tt.push(Nt);
                }
                if (tt.length >= 2) {
                  let Nt = 0,
                    En = 0;
                  for (const Vt of tt) ((Nt += Vt.position.x), (En += Vt.position.y));
                  ((Nt /= tt.length), (En /= tt.length));
                  for (const Vt of tt) {
                    const Xa = Nt - Vt.position.x,
                      Nl = En - Vt.position.y,
                      Qa = Math.hypot(Xa, Nl);
                    if (Qa < 1) continue;
                    const nn = Dt.magnet.forceMagnitude * Vt.mass;
                    Ue.Body.applyForce(Vt, Vt.position, { x: (Xa / Qa) * nn, y: (Nl / Qa) * nn });
                  }
                } else on.current();
              }
            if (w.current !== 'playing' || ((_e = (_e + 1) % 6), _e !== 0)) return;
            const we = performance.now();
            let ke = !1;
            for (const ct of We.current) {
              const tt = pa(ct);
              if (
                !(!tt || tt.consumed) &&
                !(we - tt.droppedAt < qn.gameOverGracePeriodMs) &&
                !(Math.abs(ct.velocity.y) > qn.restingVelocityThreshold) &&
                ct.position.y - ct.circleRadius < Ee
              ) {
                ke = !0;
                break;
              }
            }
            if (!ke) {
              ve();
              return;
            }
            fn.current === null && (fn.current = we);
            const et = we - fn.current,
              Ye = qn.gameOverDangerLimitMs;
            if (et >= Ye) {
              (ve(), (w.current = 'gameover'), c('gameover'));
              const ct = te.current();
              J.current(ct.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Xe = Math.max(1, Math.ceil((Ye - et) / 1e3));
            Xe !== qt.current && ((qt.current = Xe), dt(Xe));
          };
        return (
          Ue.Events.on(ue, 'afterUpdate', Se),
          () => {
            Ue.Events.off(ue, 'afterUpdate', Se);
          }
        );
      }, []),
      N.useEffect(() => {
        if (x.current) {
          yh(O);
          for (const ve of We.current) {
            const Se = pa(ve);
            if (!Se || Se.consumed) continue;
            const we = Ol(Se.level, M.current, O);
            wc(ve, we);
          }
        }
        const Ee = r.current ? Ol(r.current.level, M.current, O) : null,
          _e = p.current ? Ol(p.current.level, M.current, O) : null;
        (g(Ee), E(_e));
      }, [O, g, E]));
    const st = N.useCallback((ue) => {
        (A(ue), xS(ue));
      }, []),
      zt = N.useCallback((ue) => {
        ((oe.current = ue), le(ue));
      }, []),
      wt = N.useCallback(
        (ue) => {
          ne(Math.max(0, K.current - ue));
        },
        [ne]
      ),
      xa = N.useCallback(() => {
        if (!x.current) return;
        ye.current = 'shake';
        const { impulseMin: Ee, impulseMax: _e, upwardBias: ve } = Dt.shake;
        for (const Se of We.current) {
          const we = pa(Se);
          if (!we || we.consumed) continue;
          const ke = Math.random() * Math.PI * 2,
            et = Ee + Math.random() * (_e - Ee),
            Ye = Math.cos(ke) * et * Se.mass,
            Xe = (Math.sin(ke) * et - ve) * Se.mass;
          Ue.Body.applyForce(Se, Se.position, { x: Ye, y: Xe });
        }
        (J.current('special'), (ye.current = null));
      }, []),
      pn = N.useCallback(() => {
        const ue = x.current;
        if (!ue || Ae.current !== null) return;
        ye.current = 'gravityFlip';
        const Ee = ue.gravity.y;
        ue.gravity.y = Ee * Dt.gravityFlip.multiplier;
        const _e = new Map();
        for (const ve of We.current)
          (_e.set(ve, ve.frictionAir), (ve.frictionAir = Dt.gravityFlip.frictionAir));
        (he(!0),
          J.current('special'),
          (Ae.current = window.setTimeout(() => {
            const ve = x.current;
            ve && (ve.gravity.y = Ee);
            for (const Se of We.current) Se.frictionAir = _e.get(Se) ?? 0.01;
            (he(!1), (Ae.current = null), ye.current === 'gravityFlip' && (ye.current = null));
          }, Dt.gravityFlip.durationMs)));
      }, []),
      Sn = N.useCallback(() => {
        ((ye.current = 'magnet'), zt(!0));
      }, [zt]),
      xn = N.useCallback(() => {
        oe.current && (zt(!1), (ye.current = null));
      }, [zt]),
      ir = N.useCallback(
        (ue, Ee) => {
          if (!oe.current) return;
          const _e = Array.from(We.current),
            ve = Ue.Query.point(_e, { x: ue, y: Ee });
          if (ve.length === 0) return;
          const Se = ve[0],
            we = pa(Se);
          if (!we) return;
          const ke = _e.filter((Ye) => {
            if (Ye === Se) return !1;
            const Xe = pa(Ye);
            return !!Xe && !Xe.consumed && Xe.level === we.level;
          });
          if (ke.length === 0) return;
          const et = ke[Math.floor(Math.random() * ke.length)];
          (Kn(Se),
            Kn(et),
            (ut.current = we.level),
            (Je.current = performance.now() + Dt.magnet.durationMs),
            zt(!1),
            J.current('special'),
            wt(Oi('magnet')));
        },
        [wt, zt, Kn]
      ),
      ur = N.useCallback(() => {
        K.current < Dt.segmentMax || (w.current === 'playing' && F(!0));
      }, []),
      Ea = N.useCallback(() => {
        F(!1);
      }, []),
      St = N.useCallback(
        (ue) => {
          const Ee = Oi(ue);
          K.current < Ee ||
            (F(!1),
            ue === 'shake'
              ? (xa(), wt(Ee))
              : ue === 'gravityFlip'
                ? (pn(), wt(Ee))
                : ue === 'magnet' && Sn());
        },
        [xa, pn, Sn, wt]
      ),
      tn = N.useCallback(() => {
        Ae.current !== null && (window.clearTimeout(Ae.current), (Ae.current = null));
        const ue = x.current;
        (ue && (ue.gravity.y = qn.gravityY),
          he(!1),
          bt(),
          (Je.current = null),
          (ut.current = null),
          (ye.current = null),
          F(!1),
          zt(!1),
          ne(0));
      }, [zt, ne, bt]),
      xt = N.useCallback(
        (ue) => {
          const Ee = x.current;
          if (!Ee || w.current !== 'playing' || !R.current) return;
          const _e = r.current;
          if (!_e) return;
          const ve = performance.now();
          if (ve - D.current < cn.dropCooldownMs) return;
          const Se = Math.max(0, Math.min(1, ue)),
            we = _e.radius + qn.wallThickness / 2,
            ke = we,
            et = M.current - we,
            Ye = ke + Se * (et - ke),
            Xe = _e.radius + 4,
            ct = hh(_e, Ye, Xe, ve);
          (wc(ct, _e),
            Ue.World.add(Ee.world, ct),
            We.current.add(ct),
            J.current('drop'),
            (R.current = !1),
            (D.current = ve),
            L.current !== null && window.clearTimeout(L.current),
            (L.current = window.setTimeout(() => {
              ((L.current = null),
                w.current === 'playing' && (g(p.current), E(dn()), (R.current = !0)));
            }, cn.dropCooldownMs)));
        },
        [dn, g, E]
      ),
      wl = N.useCallback(() => {
        var ue;
        (z.reset(),
          (ue = d.current) == null || ue.clear(),
          tn(),
          (fn.current = null),
          (qt.current = null),
          dt(null),
          g(dn()),
          E(dn()),
          (R.current = !0),
          (D.current = 0),
          (w.current = 'playing'),
          c('playing'));
      }, [z, dn, tn, g, E]),
      rr = N.useCallback(() => {
        const ue = x.current;
        if (ue) {
          for (const Ee of We.current) Ue.World.remove(ue.world, Ee);
          We.current.clear();
        }
        (L.current !== null && (window.clearTimeout(L.current), (L.current = null)), wl());
      }, [wl]),
      sr = qn.gameOverLineOffset;
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
      drop: xt,
      start: wl,
      restart: rr,
      toggleSound: H.toggle,
      setThemeId: st,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: sr,
      skillGauge: ee,
      skillGaugeMax: Dt.gaugeMax,
      skillSegmentMax: Dt.segmentMax,
      skillSegmentCount: Dt.segmentCount,
      canOpenSkillMenu: ee >= Dt.segmentMax,
      canUseSkill: {
        shake: ee >= Oi('shake'),
        gravityFlip: ee >= Oi('gravityFlip'),
        magnet: ee >= Oi('magnet'),
      },
      isSkillMenuOpen: j,
      openSkillMenu: ur,
      closeSkillMenu: Ea,
      selectSkill: St,
      isMagnetSelecting: ae,
      cancelMagnetSelecting: xn,
      selectMagnetTarget: ir,
      isGravityFlipped: ie,
      gameOverCountdown: kn,
    };
  },
  wS = ({ size: s }) => {
    const b = zS({ fieldWidth: s.width, fieldHeight: s.height }),
      [T, x] = N.useState(!1),
      h = N.useCallback(() => x(!0), []),
      i = N.useCallback(() => x(!1), []);
    return $.jsxs($.Fragment, {
      children: [
        $.jsx(P1, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          onOpenSettings: h,
        }),
        $.jsx('main', {
          className: qa.main,
          children: $.jsxs('div', {
            className: qa.field_wrapper,
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
              $.jsx(Vh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              $.jsx(qh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              $.jsx(Yh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? $.jsx('div', {
                    className: qa.skill_button_wrapper,
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
                ? $.jsx(Vp, {
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
  NS = () => {
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
            className: qa.layout,
            children: [
              $.jsx('div', { className: qa.top_bar_placeholder, 'aria-hidden': 'true' }),
              $.jsx('main', { ref: s, className: qa.main }),
            ],
          })
        : $.jsx('div', { className: qa.layout, children: $.jsx(wS, { size: b }) })
    );
  },
  BS = () => $.jsx('div', { className: dp.index, children: $.jsx(NS, {}) }),
  US = () => $.jsx('div', { children: $.jsx('h1', { children: 'Not Found' }) });
function HS() {
  return $.jsxs($.Fragment, {
    children: [
      $.jsxs(by, {
        children: [
          $.jsx(Bc, { path: '/', element: $.jsx(BS, {}) }),
          $.jsx(Bc, { path: '*', element: $.jsx(US, {}) }),
        ],
      }),
      $.jsx(op, {}),
    ],
  });
}
const nv = document.getElementById('root');
if (!nv) throw new Error('Failed to find #root element');
M0.createRoot(nv).render($.jsx(Ky, { basename: '/ochimono-game', children: $.jsx(HS, {}) }));
