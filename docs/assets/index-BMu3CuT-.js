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
var Hm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function i0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var mc = { exports: {} },
  bi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm;
function u0() {
  if (Lm) return bi;
  Lm = 1;
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
  return ((bi.Fragment = b), (bi.jsx = T), (bi.jsxs = T), bi);
}
var jm;
function r0() {
  return (jm || ((jm = 1), (mc.exports = u0())), mc.exports);
}
var W = r0(),
  hc = { exports: {} },
  Ti = {},
  vc = { exports: {} },
  gc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm;
function s0() {
  return (
    Gm ||
      ((Gm = 1),
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
          p = null,
          g = 3,
          r = !1,
          y = !1,
          v = !1,
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
        function C(q) {
          if (((v = !1), L(q), !y))
            if (T(c) !== null) ((y = !0), z || ((z = !0), G()));
            else {
              var K = T(m);
              K !== null && ee(C, K.startTime - q);
            }
        }
        var z = !1,
          _ = -1,
          A = 5,
          N = -1;
        function O() {
          return E ? !0 : !(s.unstable_now() - N < A);
        }
        function H() {
          if (((E = !1), z)) {
            var q = s.unstable_now();
            N = q;
            var K = !0;
            try {
              e: {
                ((y = !1), v && ((v = !1), D(_), (_ = -1)), (r = !0));
                var ne = g;
                try {
                  t: {
                    for (L(q), p = T(c); p !== null && !(p.expirationTime > q && O()); ) {
                      var se = p.callback;
                      if (typeof se == 'function') {
                        ((p.callback = null), (g = p.priorityLevel));
                        var de = se(p.expirationTime <= q);
                        if (((q = s.unstable_now()), typeof de == 'function')) {
                          ((p.callback = de), L(q), (K = !0));
                          break t;
                        }
                        (p === T(c) && x(c), L(q));
                      } else x(c);
                      p = T(c);
                    }
                    if (p !== null) K = !0;
                    else {
                      var j = T(m);
                      (j !== null && ee(C, j.startTime - q), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((p = null), (g = ne), (r = !1));
                }
                K = void 0;
              }
            } finally {
              K ? G() : (z = !1);
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
          _ = R(function () {
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
            return g;
          }),
          (s.unstable_next = function (q) {
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
              return q();
            } finally {
              g = ne;
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
            var ne = g;
            g = q;
            try {
              return K();
            } finally {
              g = ne;
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
                  T(c) === null && q === T(m) && (v ? (D(_), (_ = -1)) : (v = !0), ee(C, ne - se)))
                : ((q.sortIndex = de), b(c, q), y || r || ((y = !0), z || ((z = !0), G()))),
              q
            );
          }),
          (s.unstable_shouldYield = O),
          (s.unstable_wrapCallback = function (q) {
            var K = g;
            return function () {
              var ne = g;
              g = K;
              try {
                return q.apply(this, arguments);
              } finally {
                g = ne;
              }
            };
          }));
      })(gc)),
    gc
  );
}
var Ym;
function c0() {
  return (Ym || ((Ym = 1), (vc.exports = s0())), vc.exports);
}
var yc = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qm;
function o0() {
  if (qm) return ge;
  qm = 1;
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
    g = Symbol.iterator;
  function r(j) {
    return j === null || typeof j != 'object'
      ? null
      : ((j = (g && j[g]) || j['@@iterator']), typeof j == 'function' ? j : null);
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
    E = {};
  function R(j, F, ae) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = ae || y));
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
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = ae || y));
  }
  var L = (w.prototype = new D());
  ((L.constructor = w), v(L, R.prototype), (L.isPureReactComponent = !0));
  var C = Array.isArray;
  function z() {}
  var _ = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function N(j, F, ae) {
    var le = ae.ref;
    return { $$typeof: s, type: j, key: F, ref: le !== void 0 ? le : null, props: ae };
  }
  function O(j, F) {
    return N(j.type, F, j.props);
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
            ? j.then(z, z)
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
        C(oe)
          ? ((ae = ''),
            he != null && (ae = he.replace(J, '$&/') + '/'),
            q(oe, F, ae, '', function (Ze) {
              return Ze;
            }))
          : oe != null &&
            (H(oe) &&
              (oe = O(
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
    if (C(j))
      for (var Re = 0; Re < j.length; Re++)
        ((le = j[Re]), (ie = ye + te(le, Re)), (he += q(le, F, ae, ie, oe)));
    else if (((Re = r(j)), typeof Re == 'function'))
      for (j = Re.call(j), Re = 0; !(le = j.next()).done; )
        ((le = le.value), (ie = ye + te(le, Re++)), (he += q(le, F, ae, ie, oe)));
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
    (ge.Activity = p),
    (ge.Children = de),
    (ge.Component = R),
    (ge.Fragment = T),
    (ge.Profiler = h),
    (ge.PureComponent = w),
    (ge.StrictMode = x),
    (ge.Suspense = c),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return _.H.useMemoCache(j);
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
      var le = v({}, j.props),
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
      return N(j.type, oe, le);
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
        for (var ye = Array(he), Re = 0; Re < he; Re++) ye[Re] = arguments[Re + 2];
        oe.children = ye;
      }
      if (j && j.defaultProps)
        for (le in ((he = j.defaultProps), he)) oe[le] === void 0 && (oe[le] = he[le]);
      return N(j, ie, oe);
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
      var F = _.T,
        ae = {};
      _.T = ae;
      try {
        var le = j(),
          oe = _.S;
        (oe !== null && oe(ae, le),
          typeof le == 'object' && le !== null && typeof le.then == 'function' && le.then(z, se));
      } catch (ie) {
        se(ie);
      } finally {
        (F !== null && ae.types !== null && (F.types = ae.types), (_.T = F));
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return _.H.useCacheRefresh();
    }),
    (ge.use = function (j) {
      return _.H.use(j);
    }),
    (ge.useActionState = function (j, F, ae) {
      return _.H.useActionState(j, F, ae);
    }),
    (ge.useCallback = function (j, F) {
      return _.H.useCallback(j, F);
    }),
    (ge.useContext = function (j) {
      return _.H.useContext(j);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (j, F) {
      return _.H.useDeferredValue(j, F);
    }),
    (ge.useEffect = function (j, F) {
      return _.H.useEffect(j, F);
    }),
    (ge.useEffectEvent = function (j) {
      return _.H.useEffectEvent(j);
    }),
    (ge.useId = function () {
      return _.H.useId();
    }),
    (ge.useImperativeHandle = function (j, F, ae) {
      return _.H.useImperativeHandle(j, F, ae);
    }),
    (ge.useInsertionEffect = function (j, F) {
      return _.H.useInsertionEffect(j, F);
    }),
    (ge.useLayoutEffect = function (j, F) {
      return _.H.useLayoutEffect(j, F);
    }),
    (ge.useMemo = function (j, F) {
      return _.H.useMemo(j, F);
    }),
    (ge.useOptimistic = function (j, F) {
      return _.H.useOptimistic(j, F);
    }),
    (ge.useReducer = function (j, F, ae) {
      return _.H.useReducer(j, F, ae);
    }),
    (ge.useRef = function (j) {
      return _.H.useRef(j);
    }),
    (ge.useState = function (j) {
      return _.H.useState(j);
    }),
    (ge.useSyncExternalStore = function (j, F, ae) {
      return _.H.useSyncExternalStore(j, F, ae);
    }),
    (ge.useTransition = function () {
      return _.H.useTransition();
    }),
    (ge.version = '19.2.5'),
    ge
  );
}
var Vm;
function Oc() {
  return (Vm || ((Vm = 1), (yc.exports = o0())), yc.exports);
}
var pc = { exports: {} },
  gt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm;
function f0() {
  if (Xm) return gt;
  Xm = 1;
  var s = Oc();
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
    (gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (gt.createPortal = function (c, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(b(299));
      return i(c, m, null, o);
    }),
    (gt.flushSync = function (c) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), c)) return c();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
      }
    }),
    (gt.preconnect = function (c, m) {
      typeof c == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(c, m));
    }),
    (gt.prefetchDNS = function (c) {
      typeof c == 'string' && x.d.D(c);
    }),
    (gt.preinit = function (c, m) {
      if (typeof c == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          p = f(o, m.crossOrigin),
          g = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(c, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(c, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (gt.preinitModule = function (c, m) {
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
    (gt.preload = function (c, m) {
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
    (gt.preloadModule = function (c, m) {
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
    (gt.requestFormReset = function (c) {
      x.d.r(c);
    }),
    (gt.unstable_batchedUpdates = function (c, m) {
      return c(m);
    }),
    (gt.useFormState = function (c, m, o) {
      return d.H.useFormState(c, m, o);
    }),
    (gt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (gt.version = '19.2.5'),
    gt
  );
}
var Qm;
function d0() {
  if (Qm) return pc.exports;
  Qm = 1;
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
  return (s(), (pc.exports = f0()), pc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function m0() {
  if (Zm) return Ti;
  Zm = 1;
  var s = c0(),
    b = Oc(),
    T = d0();
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
        for (var S = !1, M = l.child; M; ) {
          if (M === n) {
            ((S = !0), (n = l), (a = u));
            break;
          }
          if (M === a) {
            ((S = !0), (a = l), (n = u));
            break;
          }
          M = M.sibling;
        }
        if (!S) {
          for (M = u.child; M; ) {
            if (M === n) {
              ((S = !0), (n = u), (a = l));
              break;
            }
            if (M === a) {
              ((S = !0), (a = u), (n = l));
              break;
            }
            M = M.sibling;
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
  var p = Object.assign,
    g = Symbol.for('react.element'),
    r = Symbol.for('react.transitional.element'),
    y = Symbol.for('react.portal'),
    v = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    D = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    L = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    z = Symbol.for('react.suspense_list'),
    _ = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    N = Symbol.for('react.activity'),
    O = Symbol.for('react.memo_cache_sentinel'),
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
      case C:
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
        case _:
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
        e = (e = t.documentElement) && (e = e.namespaceURI) ? im(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = im(t)), (e = um(t, e)));
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
  function Re() {
    (F(le), F(oe), F(ie));
  }
  function Ze(e) {
    e.memoizedState !== null && ae(he, e);
    var t = le.current,
      n = um(t, e.type);
    t !== n && (ae(oe, e), ae(le, n));
  }
  function Pe(e) {
    (oe.current === e && (F(le), F(oe)), he.current === e && (F(he), (pi._currentValue = ne)));
  }
  var Xe, La;
  function _t(e) {
    if (Xe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Xe = (t && t[1]) || ''),
          (La =
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
      Xe +
      e +
      La
    );
  }
  var Pt = !1;
  function it(e, t) {
    if (!e || Pt) return '';
    Pt = !0;
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
        M = u[1];
      if (S && M) {
        var U = S.split(`
`),
          Q = M.split(`
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
                  var $ =
                    `
` + U[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      $.includes('<anonymous>') &&
                      ($ = $.replace('<anonymous>', e.displayName)),
                    $
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Pt = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? _t(n) : '';
  }
  function un(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return _t(e.type);
      case 16:
        return _t('Lazy');
      case 13:
        return e.child !== t && t !== null ? _t('Suspense Fallback') : _t('Suspense');
      case 19:
        return _t('SuspenseList');
      case 0:
      case 15:
        return it(e.type, !1);
      case 11:
        return it(e.type.render, !1);
      case 1:
        return it(e.type, !0);
      case 31:
        return _t('Activity');
      default:
        return '';
    }
  }
  function vn(e) {
    try {
      var t = '',
        n = null;
      do ((t += un(e, n)), (n = e), (e = e.return));
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
  var yt = Object.prototype.hasOwnProperty,
    pt = s.unstable_scheduleCallback,
    Dt = s.unstable_cancelCallback,
    ha = s.unstable_shouldYield,
    va = s.unstable_requestPaint,
    ut = s.unstable_now,
    ja = s.unstable_getCurrentPriorityLevel,
    gn = s.unstable_ImmediatePriority,
    Ga = s.unstable_UserBlockingPriority,
    qn = s.unstable_NormalPriority,
    Vn = s.unstable_LowPriority,
    rn = s.unstable_IdlePriority,
    nr = s.log,
    Dl = s.unstable_setDisableYieldValue,
    ga = null,
    St = null;
  function ue(e) {
    if ((typeof nr == 'function' && Dl(e), St && typeof St.setStrictMode == 'function'))
      try {
        St.setStrictMode(ga, e);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : Ce,
    Oe = Math.log,
    Ae = Math.LN2;
  function Ce(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Oe(e) / Ae) | 0)) | 0);
  }
  var Ge = 256,
    Ke = 262144,
    Je = 4194304;
  function Ye(e) {
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
  function rt(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      S = e.pingedLanes;
    e = e.warmLanes;
    var M = a & 134217727;
    return (
      M !== 0
        ? ((a = M & ~u),
          a !== 0
            ? (l = Ye(a))
            : ((S &= M), S !== 0 ? (l = Ye(S)) : n || ((n = M & ~e), n !== 0 && (l = Ye(n)))))
        : ((M = a & ~u),
          M !== 0
            ? (l = Ye(M))
            : S !== 0
              ? (l = Ye(S))
              : n || ((n = a & ~e), n !== 0 && (l = Ye(n)))),
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
  function Fe(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xt(e, t) {
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
  function Ot() {
    var e = Je;
    return ((Je <<= 1), (Je & 62914560) === 0 && (Je = 4194304), e);
  }
  function sn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wt(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function cn(e, t, n, a, l, u) {
    var S = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var M = e.entanglements,
      U = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (n = S & ~n; 0 < n; ) {
      var $ = 31 - ve(n),
        I = 1 << $;
      ((M[$] = 0), (U[$] = -1));
      var Z = Q[$];
      if (Z !== null)
        for (Q[$] = null, $ = 0; $ < Z.length; $++) {
          var k = Z[$];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~I;
    }
    (a !== 0 && Ol(e, a, 0),
      u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function Ol(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ve(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function wl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - ve(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  function Ya(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : qa(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function qa(e) {
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
  function ar(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Vc() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : _m(e.type));
  }
  function Xc(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var Xn = Math.random().toString(36).slice(2),
    ft = '__reactFiber$' + Xn,
    bt = '__reactProps$' + Xn,
    Va = '__reactContainer$' + Xn,
    lr = '__reactEvents$' + Xn,
    kh = '__reactListeners$' + Xn,
    Fh = '__reactHandles$' + Xn,
    Qc = '__reactResources$' + Xn,
    Nl = '__reactMarker$' + Xn;
  function ir(e) {
    (delete e[ft], delete e[bt], delete e[lr], delete e[kh], delete e[Fh]);
  }
  function Xa(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Va] || n[ft])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = mm(e); e !== null; ) {
            if ((n = e[ft])) return n;
            e = mm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Qa(e) {
    if ((e = e[ft] || e[Va])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Bl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function Za(e) {
    var t = e[Qc];
    return (t || (t = e[Qc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ct(e) {
    e[Nl] = !0;
  }
  var Zc = new Set(),
    Kc = {};
  function ya(e, t) {
    (Ka(e, t), Ka(e + 'Capture', t));
  }
  function Ka(e, t) {
    for (Kc[e] = t, e = 0; e < t.length; e++) Zc.add(t[e]);
  }
  var $h = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Jc = {},
    kc = {};
  function Wh(e) {
    return yt.call(kc, e)
      ? !0
      : yt.call(Jc, e)
        ? !1
        : $h.test(e)
          ? (kc[e] = !0)
          : ((Jc[e] = !0), !1);
  }
  function wi(e, t, n) {
    if (Wh(t))
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
  function Ni(e, t, n) {
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
  function yn(e, t, n, a) {
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
  function Yt(e) {
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
  function Fc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function Ph(e, t, n) {
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
  function ur(e) {
    if (!e._valueTracker) {
      var t = Fc(e) ? 'checked' : 'value';
      e._valueTracker = Ph(e, t, '' + e[t]);
    }
  }
  function $c(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = Fc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Bi(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ih = /[\n"\\]/g;
  function qt(e) {
    return e.replace(Ih, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function rr(e, t, n, a, l, u, S, M) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Yt(t))
          : e.value !== '' + Yt(t) && (e.value = '' + Yt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? sr(e, S, Yt(t))
        : n != null
          ? sr(e, S, Yt(n))
          : a != null && e.removeAttribute('value'),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      M != null && typeof M != 'function' && typeof M != 'symbol' && typeof M != 'boolean'
        ? (e.name = '' + Yt(M))
        : e.removeAttribute('name'));
  }
  function Wc(e, t, n, a, l, u, S, M) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        ur(e);
        return;
      }
      ((n = n != null ? '' + Yt(n) : ''),
        (t = t != null ? '' + Yt(t) : n),
        M || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? l),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = M ? e.checked : !!a),
      (e.defaultChecked = !!a),
      S != null &&
        typeof S != 'function' &&
        typeof S != 'symbol' &&
        typeof S != 'boolean' &&
        (e.name = S),
      ur(e));
  }
  function sr(e, t, n) {
    (t === 'number' && Bi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Ja(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Yt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Pc(e, t, n) {
    if (t != null && ((t = '' + Yt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Yt(n) : '';
  }
  function Ic(e, t, n, a) {
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
    ((n = Yt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      ur(e));
  }
  function ka(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ev = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function eo(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || ev.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function to(e, t, n) {
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
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && eo(e, l, a));
    } else for (var u in t) t.hasOwnProperty(u) && eo(e, u, t[u]);
  }
  function cr(e) {
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
  var tv = new Map([
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
    nv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ui(e) {
    return nv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function pn() {}
  var or = null;
  function fr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Fa = null,
    $a = null;
  function no(e) {
    var t = Qa(e);
    if (t && (e = t.stateNode)) {
      var n = e[bt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (rr(
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
              n = n.querySelectorAll('input[name="' + qt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[bt] || null;
                if (!l) throw Error(x(90));
                rr(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && $c(a));
          }
          break e;
        case 'textarea':
          Pc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Ja(e, !!n.multiple, t, !1));
      }
    }
  }
  var dr = !1;
  function ao(e, t, n) {
    if (dr) return e(t, n);
    dr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((dr = !1),
        (Fa !== null || $a !== null) &&
          (bu(), Fa && ((t = Fa), (e = $a), ($a = Fa = null), no(t), e)))
      )
        for (t = 0; t < e.length; t++) no(e[t]);
    }
  }
  function Ul(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[bt] || null;
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
  var Sn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    mr = !1;
  if (Sn)
    try {
      var Hl = {};
      (Object.defineProperty(Hl, 'passive', {
        get: function () {
          mr = !0;
        },
      }),
        window.addEventListener('test', Hl, Hl),
        window.removeEventListener('test', Hl, Hl));
    } catch {
      mr = !1;
    }
  var Qn = null,
    hr = null,
    Hi = null;
  function lo() {
    if (Hi) return Hi;
    var e,
      t = hr,
      n = t.length,
      a,
      l = 'value' in Qn ? Qn.value : Qn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var S = n - e;
    for (a = 1; a <= S && t[n - a] === l[u - a]; a++);
    return (Hi = l.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Li(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ji() {
    return !0;
  }
  function io() {
    return !1;
  }
  function Tt(e) {
    function t(n, a, l, u, S) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = S),
        (this.currentTarget = null));
      for (var M in e) e.hasOwnProperty(M) && ((n = e[M]), (this[M] = n ? n(u) : u[M]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? ji
          : io),
        (this.isPropagationStopped = io),
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
            (this.isDefaultPrevented = ji));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ji));
        },
        persist: function () {},
        isPersistent: ji,
      }),
      t
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gi = Tt(pa),
    Ll = p({}, pa, { view: 0, detail: 0 }),
    av = Tt(Ll),
    vr,
    gr,
    jl,
    Yi = p({}, Ll, {
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
      getModifierState: pr,
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
          : (e !== jl &&
              (jl && e.type === 'mousemove'
                ? ((vr = e.screenX - jl.screenX), (gr = e.screenY - jl.screenY))
                : (gr = vr = 0),
              (jl = e)),
            vr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : gr;
      },
    }),
    uo = Tt(Yi),
    lv = p({}, Yi, { dataTransfer: 0 }),
    iv = Tt(lv),
    uv = p({}, Ll, { relatedTarget: 0 }),
    yr = Tt(uv),
    rv = p({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sv = Tt(rv),
    cv = p({}, pa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ov = Tt(cv),
    fv = p({}, pa, { data: 0 }),
    ro = Tt(fv),
    dv = {
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
    mv = {
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
    hv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function vv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hv[e]) ? !!t[e] : !1;
  }
  function pr() {
    return vv;
  }
  var gv = p({}, Ll, {
      key: function (e) {
        if (e.key) {
          var t = dv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Li(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? mv[e.keyCode] || 'Unidentified'
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
      getModifierState: pr,
      charCode: function (e) {
        return e.type === 'keypress' ? Li(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Li(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    yv = Tt(gv),
    pv = p({}, Yi, {
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
    so = Tt(pv),
    Sv = p({}, Ll, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pr,
    }),
    xv = Tt(Sv),
    Ev = p({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bv = Tt(Ev),
    Tv = p({}, Yi, {
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
    Cv = Tt(Tv),
    Mv = p({}, pa, { newState: 0, oldState: 0 }),
    Rv = Tt(Mv),
    Av = [9, 13, 27, 32],
    Sr = Sn && 'CompositionEvent' in window,
    Gl = null;
  Sn && 'documentMode' in document && (Gl = document.documentMode);
  var zv = Sn && 'TextEvent' in window && !Gl,
    co = Sn && (!Sr || (Gl && 8 < Gl && 11 >= Gl)),
    oo = ' ',
    fo = !1;
  function mo(e, t) {
    switch (e) {
      case 'keyup':
        return Av.indexOf(t.keyCode) !== -1;
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
  function ho(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Wa = !1;
  function _v(e, t) {
    switch (e) {
      case 'compositionend':
        return ho(t);
      case 'keypress':
        return t.which !== 32 ? null : ((fo = !0), oo);
      case 'textInput':
        return ((e = t.data), e === oo && fo ? null : e);
      default:
        return null;
    }
  }
  function Dv(e, t) {
    if (Wa)
      return e === 'compositionend' || (!Sr && mo(e, t))
        ? ((e = lo()), (Hi = hr = Qn = null), (Wa = !1), e)
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
        return co && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Ov = {
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
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Ov[e.type] : t === 'textarea';
  }
  function go(e, t, n, a) {
    (Fa ? ($a ? $a.push(a) : ($a = [a])) : (Fa = a),
      (t = _u(t, 'onChange')),
      0 < t.length &&
        ((n = new Gi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var Yl = null,
    ql = null;
  function wv(e) {
    Id(e, 0);
  }
  function qi(e) {
    var t = Bl(e);
    if ($c(t)) return e;
  }
  function yo(e, t) {
    if (e === 'change') return t;
  }
  var po = !1;
  if (Sn) {
    var xr;
    if (Sn) {
      var Er = 'oninput' in document;
      if (!Er) {
        var So = document.createElement('div');
        (So.setAttribute('oninput', 'return;'), (Er = typeof So.oninput == 'function'));
      }
      xr = Er;
    } else xr = !1;
    po = xr && (!document.documentMode || 9 < document.documentMode);
  }
  function xo() {
    Yl && (Yl.detachEvent('onpropertychange', Eo), (ql = Yl = null));
  }
  function Eo(e) {
    if (e.propertyName === 'value' && qi(ql)) {
      var t = [];
      (go(t, ql, e, fr(e)), ao(wv, t));
    }
  }
  function Nv(e, t, n) {
    e === 'focusin'
      ? (xo(), (Yl = t), (ql = n), Yl.attachEvent('onpropertychange', Eo))
      : e === 'focusout' && xo();
  }
  function Bv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qi(ql);
  }
  function Uv(e, t) {
    if (e === 'click') return qi(t);
  }
  function Hv(e, t) {
    if (e === 'input' || e === 'change') return qi(t);
  }
  function Lv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == 'function' ? Object.is : Lv;
  function Vl(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!yt.call(t, l) || !Nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function bo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function To(e, t) {
    var n = bo(e);
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
      n = bo(n);
    }
  }
  function Co(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Co(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Mo(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Bi(e.document);
    }
    return t;
  }
  function br(e) {
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
  var jv = Sn && 'documentMode' in document && 11 >= document.documentMode,
    Pa = null,
    Tr = null,
    Xl = null,
    Cr = !1;
  function Ro(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Cr ||
      Pa == null ||
      Pa !== Bi(a) ||
      ((a = Pa),
      'selectionStart' in a && br(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Xl && Vl(Xl, a)) ||
        ((Xl = a),
        (a = _u(Tr, 'onSelect')),
        0 < a.length &&
          ((t = new Gi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Pa))));
  }
  function Sa(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Ia = {
      animationend: Sa('Animation', 'AnimationEnd'),
      animationiteration: Sa('Animation', 'AnimationIteration'),
      animationstart: Sa('Animation', 'AnimationStart'),
      transitionrun: Sa('Transition', 'TransitionRun'),
      transitionstart: Sa('Transition', 'TransitionStart'),
      transitioncancel: Sa('Transition', 'TransitionCancel'),
      transitionend: Sa('Transition', 'TransitionEnd'),
    },
    Mr = {},
    Ao = {};
  Sn &&
    ((Ao = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    'TransitionEvent' in window || delete Ia.transitionend.transition);
  function xa(e) {
    if (Mr[e]) return Mr[e];
    if (!Ia[e]) return e;
    var t = Ia[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ao) return (Mr[e] = t[n]);
    return e;
  }
  var zo = xa('animationend'),
    _o = xa('animationiteration'),
    Do = xa('animationstart'),
    Gv = xa('transitionrun'),
    Yv = xa('transitionstart'),
    qv = xa('transitioncancel'),
    Oo = xa('transitionend'),
    wo = new Map(),
    Rr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Rr.push('scrollEnd');
  function It(e, t) {
    (wo.set(e, t), ya(t, [e]));
  }
  var Vi =
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
    Vt = [],
    el = 0,
    Ar = 0;
  function Xi() {
    for (var e = el, t = (Ar = el = 0); t < e; ) {
      var n = Vt[t];
      Vt[t++] = null;
      var a = Vt[t];
      Vt[t++] = null;
      var l = Vt[t];
      Vt[t++] = null;
      var u = Vt[t];
      if (((Vt[t++] = null), a !== null && l !== null)) {
        var S = a.pending;
        (S === null ? (l.next = l) : ((l.next = S.next), (S.next = l)), (a.pending = l));
      }
      u !== 0 && No(n, l, u);
    }
  }
  function Qi(e, t, n, a) {
    ((Vt[el++] = e),
      (Vt[el++] = t),
      (Vt[el++] = n),
      (Vt[el++] = a),
      (Ar |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function zr(e, t, n, a) {
    return (Qi(e, t, n, a), Zi(e));
  }
  function Ea(e, t) {
    return (Qi(e, null, null, t), Zi(e));
  }
  function No(e, t, n) {
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
          ((l = 31 - ve(n)),
          (e = u.hiddenUpdates),
          (a = e[l]),
          a === null ? (e[l] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Zi(e) {
    if (50 < fi) throw ((fi = 0), (Ls = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var tl = {};
  function Vv(e, t, n, a) {
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
  function Bt(e, t, n, a) {
    return new Vv(e, t, n, a);
  }
  function _r(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function xn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Bt(e.tag, t, e.key, e.mode)),
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
  function Bo(e, t) {
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
  function Ki(e, t, n, a, l, u) {
    var S = 0;
    if (((a = e), typeof e == 'function')) _r(e) && (S = 1);
    else if (typeof e == 'string')
      S = Jg(e, n, le.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case N:
          return ((e = Bt(31, n, t, l)), (e.elementType = N), (e.lanes = u), e);
        case v:
          return ba(n.children, l, u, t);
        case E:
          ((S = 8), (l |= 24));
          break;
        case R:
          return ((e = Bt(12, n, t, l | 2)), (e.elementType = R), (e.lanes = u), e);
        case C:
          return ((e = Bt(13, n, t, l)), (e.elementType = C), (e.lanes = u), e);
        case z:
          return ((e = Bt(19, n, t, l)), (e.elementType = z), (e.lanes = u), e);
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
              case _:
                S = 14;
                break e;
              case A:
                ((S = 16), (a = null));
                break e;
            }
          ((S = 29), (n = Error(x(130, e === null ? 'null' : typeof e, ''))), (a = null));
      }
    return ((t = Bt(S, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = u), t);
  }
  function ba(e, t, n, a) {
    return ((e = Bt(7, e, a, t)), (e.lanes = n), e);
  }
  function Dr(e, t, n) {
    return ((e = Bt(6, e, null, t)), (e.lanes = n), e);
  }
  function Uo(e) {
    var t = Bt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Or(e, t, n) {
    return (
      (t = Bt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ho = new WeakMap();
  function Xt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Ho.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: vn(t) }), Ho.set(e, t), t);
    }
    return { value: e, source: t, stack: vn(t) };
  }
  var nl = [],
    al = 0,
    Ji = null,
    Ql = 0,
    Qt = [],
    Zt = 0,
    Zn = null,
    on = 1,
    fn = '';
  function En(e, t) {
    ((nl[al++] = Ql), (nl[al++] = Ji), (Ji = e), (Ql = t));
  }
  function Lo(e, t, n) {
    ((Qt[Zt++] = on), (Qt[Zt++] = fn), (Qt[Zt++] = Zn), (Zn = e));
    var a = on;
    e = fn;
    var l = 32 - ve(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - ve(t) + l;
    if (30 < u) {
      var S = l - (l % 5);
      ((u = (a & ((1 << S) - 1)).toString(32)),
        (a >>= S),
        (l -= S),
        (on = (1 << (32 - ve(t) + l)) | (n << l) | a),
        (fn = u + e));
    } else ((on = (1 << u) | (n << l) | a), (fn = e));
  }
  function wr(e) {
    e.return !== null && (En(e, 1), Lo(e, 1, 0));
  }
  function Nr(e) {
    for (; e === Ji; ) ((Ji = nl[--al]), (nl[al] = null), (Ql = nl[--al]), (nl[al] = null));
    for (; e === Zn; )
      ((Zn = Qt[--Zt]),
        (Qt[Zt] = null),
        (fn = Qt[--Zt]),
        (Qt[Zt] = null),
        (on = Qt[--Zt]),
        (Qt[Zt] = null));
  }
  function jo(e, t) {
    ((Qt[Zt++] = on), (Qt[Zt++] = fn), (Qt[Zt++] = Zn), (on = t.id), (fn = t.overflow), (Zn = e));
  }
  var dt = null,
    qe = null,
    Me = !1,
    Kn = null,
    Kt = !1,
    Br = Error(x(519));
  function Jn(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Zl(Xt(t, e)), Br);
  }
  function Go(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[ft] = e), (t[bt] = a), n)) {
      case 'dialog':
        (Ee('cancel', t), Ee('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ee('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < mi.length; n++) Ee(mi[n], t);
        break;
      case 'source':
        Ee('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ee('error', t), Ee('load', t));
        break;
      case 'details':
        Ee('toggle', t);
        break;
      case 'input':
        (Ee('invalid', t),
          Wc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        Ee('invalid', t);
        break;
      case 'textarea':
        (Ee('invalid', t), Ic(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      am(t.textContent, n)
        ? (a.popover != null && (Ee('beforetoggle', t), Ee('toggle', t)),
          a.onScroll != null && Ee('scroll', t),
          a.onScrollEnd != null && Ee('scrollend', t),
          a.onClick != null && (t.onclick = pn),
          (t = !0))
        : (t = !1),
      t || Jn(e, !0));
  }
  function Yo(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          Kt = !1;
          return;
        case 27:
        case 3:
          Kt = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function ll(e) {
    if (e !== dt) return !1;
    if (!Me) return (Yo(e), (Me = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || Ps(e.type, e.memoizedProps))),
        (n = !n)),
      n && qe && Jn(e),
      Yo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = dm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = dm(e);
    } else
      t === 27
        ? ((t = qe), ra(e.type) ? ((e = ac), (ac = null), (qe = e)) : (qe = t))
        : (qe = dt ? kt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ta() {
    ((qe = dt = null), (Me = !1));
  }
  function Ur() {
    var e = Kn;
    return (e !== null && (At === null ? (At = e) : At.push.apply(At, e), (Kn = null)), e);
  }
  function Zl(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  var Hr = j(null),
    Ca = null,
    bn = null;
  function kn(e, t, n) {
    (ae(Hr, t._currentValue), (t._currentValue = n));
  }
  function Tn(e) {
    ((e._currentValue = Hr.current), F(Hr));
  }
  function Lr(e, t, n) {
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
  function jr(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var S = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var M = u;
          u = l;
          for (var U = 0; U < t.length; U++)
            if (M.context === t[U]) {
              ((u.lanes |= n),
                (M = u.alternate),
                M !== null && (M.lanes |= n),
                Lr(u.return, n, e),
                a || (S = null));
              break e;
            }
          u = M.next;
        }
      } else if (l.tag === 18) {
        if (((S = l.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Lr(S, n, e), (S = null));
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
  function il(e, t, n, a) {
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
          var M = l.type;
          Nt(l.pendingProps.value, S.value) || (e !== null ? e.push(M) : (e = [M]));
        }
      } else if (l === he.current) {
        if (((S = l.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(pi) : (e = [pi]));
      }
      l = l.return;
    }
    (e !== null && jr(t, e, n, a), (t.flags |= 262144));
  }
  function ki(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ma(e) {
    ((Ca = e), (bn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function mt(e) {
    return qo(Ca, e);
  }
  function Fi(e, t) {
    return (Ca === null && Ma(e), qo(e, t));
  }
  function qo(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), bn === null)) {
      if (e === null) throw Error(x(308));
      ((bn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else bn = bn.next = t;
    return n;
  }
  var Xv =
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
    Qv = s.unstable_scheduleCallback,
    Zv = s.unstable_NormalPriority,
    tt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Gr() {
    return { controller: new Xv(), data: new Map(), refCount: 0 };
  }
  function Kl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Qv(Zv, function () {
          e.controller.abort();
        }));
  }
  var Jl = null,
    Yr = 0,
    ul = 0,
    rl = null;
  function Kv(e, t) {
    if (Jl === null) {
      var n = (Jl = []);
      ((Yr = 0),
        (ul = Xs()),
        (rl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Yr++, t.then(Vo, Vo), t);
  }
  function Vo() {
    if (--Yr === 0 && Jl !== null) {
      rl !== null && (rl.status = 'fulfilled');
      var e = Jl;
      ((Jl = null), (ul = 0), (rl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Jv(e, t) {
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
  var Xo = q.S;
  q.S = function (e, t) {
    ((Ad = ut()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Kv(e, t),
      Xo !== null && Xo(e, t));
  };
  var Ra = j(null);
  function qr() {
    var e = Ra.current;
    return e !== null ? e : je.pooledCache;
  }
  function $i(e, t) {
    t === null ? ae(Ra, Ra.current) : ae(Ra, t.pool);
  }
  function Qo() {
    var e = qr();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var sl = Error(x(460)),
    Vr = Error(x(474)),
    Wi = Error(x(542)),
    Pi = { then: function () {} };
  function Zo(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Ko(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(pn, pn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), ko(e), e);
      default:
        if (typeof t.status == 'string') t.then(pn, pn);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter)) throw Error(x(482));
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
            throw ((e = t.reason), ko(e), e);
        }
        throw ((za = t), sl);
    }
  }
  function Aa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((za = n), sl) : n;
    }
  }
  var za = null;
  function Jo() {
    if (za === null) throw Error(x(459));
    var e = za;
    return ((za = null), e);
  }
  function ko(e) {
    if (e === sl || e === Wi) throw Error(x(483));
  }
  var cl = null,
    kl = 0;
  function Ii(e) {
    var t = kl;
    return ((kl += 1), cl === null && (cl = []), Ko(cl, e, t));
  }
  function Fl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function eu(e, t) {
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
  function Fo(e) {
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
      return ((V = xn(V, Y)), (V.index = 0), (V.sibling = null), V);
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
    function M(V, Y, X, P) {
      return Y === null || Y.tag !== 6
        ? ((Y = Dr(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function U(V, Y, X, P) {
      var fe = X.type;
      return fe === v
        ? $(V, Y, X.props.children, P, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && Aa(fe) === Y.type))
          ? ((Y = l(Y, X.props)), Fl(Y, X), (Y.return = V), Y)
          : ((Y = Ki(X.type, X.key, X.props, null, V.mode, P)), Fl(Y, X), (Y.return = V), Y);
    }
    function Q(V, Y, X, P) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Or(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X.children || [])), (Y.return = V), Y);
    }
    function $(V, Y, X, P, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = ba(X, V.mode, P, fe)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function I(V, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Dr('' + Y, V.mode, X)), (Y.return = V), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = Ki(Y.type, Y.key, Y.props, null, V.mode, X)), Fl(X, Y), (X.return = V), X);
          case y:
            return ((Y = Or(Y, V.mode, X)), (Y.return = V), Y);
          case A:
            return ((Y = Aa(Y)), I(V, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = ba(Y, V.mode, X, null)), (Y.return = V), Y);
        if (typeof Y.then == 'function') return I(V, Ii(Y), X);
        if (Y.$$typeof === w) return I(V, Fi(V, Y), X);
        eu(V, Y);
      }
      return null;
    }
    function Z(V, Y, X, P) {
      var fe = Y !== null ? Y.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : M(V, Y, '' + X, P);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? U(V, Y, X, P) : null;
          case y:
            return X.key === fe ? Q(V, Y, X, P) : null;
          case A:
            return ((X = Aa(X)), Z(V, Y, X, P));
        }
        if (ee(X) || G(X)) return fe !== null ? null : $(V, Y, X, P, null);
        if (typeof X.then == 'function') return Z(V, Y, Ii(X), P);
        if (X.$$typeof === w) return Z(V, Y, Fi(V, X), P);
        eu(V, X);
      }
      return null;
    }
    function k(V, Y, X, P, fe) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number' || typeof P == 'bigint')
        return ((V = V.get(X) || null), M(Y, V, '' + P, fe));
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case r:
            return ((V = V.get(P.key === null ? X : P.key) || null), U(Y, V, P, fe));
          case y:
            return ((V = V.get(P.key === null ? X : P.key) || null), Q(Y, V, P, fe));
          case A:
            return ((P = Aa(P)), k(V, Y, X, P, fe));
        }
        if (ee(P) || G(P)) return ((V = V.get(X) || null), $(Y, V, P, fe, null));
        if (typeof P.then == 'function') return k(V, Y, X, Ii(P), fe);
        if (P.$$typeof === w) return k(V, Y, X, Fi(Y, P), fe);
        eu(Y, P);
      }
      return null;
    }
    function re(V, Y, X, P) {
      for (
        var fe = null, ze = null, ce = Y, Se = (Y = 0), Te = null;
        ce !== null && Se < X.length;
        Se++
      ) {
        ce.index > Se ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var _e = Z(V, ce, X[Se], P);
        if (_e === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && _e.alternate === null && t(V, ce),
          (Y = u(_e, Y, Se)),
          ze === null ? (fe = _e) : (ze.sibling = _e),
          (ze = _e),
          (ce = Te));
      }
      if (Se === X.length) return (n(V, ce), Me && En(V, Se), fe);
      if (ce === null) {
        for (; Se < X.length; Se++)
          ((ce = I(V, X[Se], P)),
            ce !== null &&
              ((Y = u(ce, Y, Se)), ze === null ? (fe = ce) : (ze.sibling = ce), (ze = ce)));
        return (Me && En(V, Se), fe);
      }
      for (ce = a(ce); Se < X.length; Se++)
        ((Te = k(ce, V, Se, X[Se], P)),
          Te !== null &&
            (e && Te.alternate !== null && ce.delete(Te.key === null ? Se : Te.key),
            (Y = u(Te, Y, Se)),
            ze === null ? (fe = Te) : (ze.sibling = Te),
            (ze = Te)));
      return (
        e &&
          ce.forEach(function (da) {
            return t(V, da);
          }),
        Me && En(V, Se),
        fe
      );
    }
    function me(V, Y, X, P) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, ze = null, ce = Y, Se = (Y = 0), Te = null, _e = X.next();
        ce !== null && !_e.done;
        Se++, _e = X.next()
      ) {
        ce.index > Se ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var da = Z(V, ce, _e.value, P);
        if (da === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && da.alternate === null && t(V, ce),
          (Y = u(da, Y, Se)),
          ze === null ? (fe = da) : (ze.sibling = da),
          (ze = da),
          (ce = Te));
      }
      if (_e.done) return (n(V, ce), Me && En(V, Se), fe);
      if (ce === null) {
        for (; !_e.done; Se++, _e = X.next())
          ((_e = I(V, _e.value, P)),
            _e !== null &&
              ((Y = u(_e, Y, Se)), ze === null ? (fe = _e) : (ze.sibling = _e), (ze = _e)));
        return (Me && En(V, Se), fe);
      }
      for (ce = a(ce); !_e.done; Se++, _e = X.next())
        ((_e = k(ce, V, Se, _e.value, P)),
          _e !== null &&
            (e && _e.alternate !== null && ce.delete(_e.key === null ? Se : _e.key),
            (Y = u(_e, Y, Se)),
            ze === null ? (fe = _e) : (ze.sibling = _e),
            (ze = _e)));
      return (
        e &&
          ce.forEach(function (l0) {
            return t(V, l0);
          }),
        Me && En(V, Se),
        fe
      );
    }
    function Le(V, Y, X, P) {
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
                      (n(V, Y.sibling), (P = l(Y, X.props.children)), (P.return = V), (V = P));
                      break e;
                    }
                  } else if (
                    Y.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === A && Aa(fe) === Y.type)
                  ) {
                    (n(V, Y.sibling), (P = l(Y, X.props)), Fl(P, X), (P.return = V), (V = P));
                    break e;
                  }
                  n(V, Y);
                  break;
                } else t(V, Y);
                Y = Y.sibling;
              }
              X.type === v
                ? ((P = ba(X.props.children, V.mode, P, X.key)), (P.return = V), (V = P))
                : ((P = Ki(X.type, X.key, X.props, null, V.mode, P)),
                  Fl(P, X),
                  (P.return = V),
                  (V = P));
            }
            return S(V);
          case y:
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
              ((P = Or(X, V.mode, P)), (P.return = V), (V = P));
            }
            return S(V);
          case A:
            return ((X = Aa(X)), Le(V, Y, X, P));
        }
        if (ee(X)) return re(V, Y, X, P);
        if (G(X)) {
          if (((fe = G(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(V, Y, X, P));
        }
        if (typeof X.then == 'function') return Le(V, Y, Ii(X), P);
        if (X.$$typeof === w) return Le(V, Y, Fi(V, X), P);
        eu(V, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(V, Y.sibling), (P = l(Y, X)), (P.return = V), (V = P))
            : (n(V, Y), (P = Dr(X, V.mode, P)), (P.return = V), (V = P)),
          S(V))
        : n(V, Y);
    }
    return function (V, Y, X, P) {
      try {
        kl = 0;
        var fe = Le(V, Y, X, P);
        return ((cl = null), fe);
      } catch (ce) {
        if (ce === sl || ce === Wi) throw ce;
        var ze = Bt(29, ce, null, V.mode);
        return ((ze.lanes = P), (ze.return = V), ze);
      } finally {
      }
    };
  }
  var _a = Fo(!0),
    $o = Fo(!1),
    Fn = !1;
  function Xr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Qr(e, t) {
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
  function $n(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Wn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (De & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = Zi(e)),
        No(e, null, n),
        t
      );
    }
    return (Qi(e, a, t, n), Zi(e));
  }
  function $l(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wl(e, n));
    }
  }
  function Zr(e, t) {
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
  var Kr = !1;
  function Wl() {
    if (Kr) {
      var e = rl;
      if (e !== null) throw e;
    }
  }
  function Pl(e, t, n, a) {
    Kr = !1;
    var l = e.updateQueue;
    Fn = !1;
    var u = l.firstBaseUpdate,
      S = l.lastBaseUpdate,
      M = l.shared.pending;
    if (M !== null) {
      l.shared.pending = null;
      var U = M,
        Q = U.next;
      ((U.next = null), S === null ? (u = Q) : (S.next = Q), (S = U));
      var $ = e.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (M = $.lastBaseUpdate),
        M !== S && (M === null ? ($.firstBaseUpdate = Q) : (M.next = Q), ($.lastBaseUpdate = U)));
    }
    if (u !== null) {
      var I = l.baseState;
      ((S = 0), ($ = Q = U = null), (M = u));
      do {
        var Z = M.lane & -536870913,
          k = Z !== M.lane;
        if (k ? (be & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === ul && (Kr = !0),
            $ !== null &&
              ($ = $.next =
                { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null }));
          e: {
            var re = e,
              me = M;
            Z = t;
            var Le = n;
            switch (me.tag) {
              case 1:
                if (((re = me.payload), typeof re == 'function')) {
                  I = re.call(Le, I, Z);
                  break e;
                }
                I = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = me.payload),
                  (Z = typeof re == 'function' ? re.call(Le, I, Z) : re),
                  Z == null)
                )
                  break e;
                I = p({}, I, Z);
                break e;
              case 2:
                Fn = !0;
            }
          }
          ((Z = M.callback),
            Z !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = l.callbacks),
              k === null ? (l.callbacks = [Z]) : k.push(Z)));
        } else
          ((k = { lane: Z, tag: M.tag, payload: M.payload, callback: M.callback, next: null }),
            $ === null ? ((Q = $ = k), (U = I)) : ($ = $.next = k),
            (S |= Z));
        if (((M = M.next), M === null)) {
          if (((M = l.shared.pending), M === null)) break;
          ((k = M),
            (M = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null));
        }
      } while (!0);
      ($ === null && (U = I),
        (l.baseState = U),
        (l.firstBaseUpdate = Q),
        (l.lastBaseUpdate = $),
        u === null && (l.shared.lanes = 0),
        (na |= S),
        (e.lanes = S),
        (e.memoizedState = I));
    }
  }
  function Wo(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function Po(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Wo(n[e], t);
  }
  var ol = j(null),
    tu = j(0);
  function Io(e, t) {
    ((e = wn), ae(tu, e), ae(ol, t), (wn = e | t.baseLanes));
  }
  function Jr() {
    (ae(tu, wn), ae(ol, ol.current));
  }
  function kr() {
    ((wn = tu.current), F(ol), F(tu));
  }
  var Ut = j(null),
    Jt = null;
  function Pn(e) {
    var t = e.alternate;
    (ae(Ie, Ie.current & 1),
      ae(Ut, e),
      Jt === null && (t === null || ol.current !== null || t.memoizedState !== null) && (Jt = e));
  }
  function Fr(e) {
    (ae(Ie, Ie.current), ae(Ut, e), Jt === null && (Jt = e));
  }
  function ef(e) {
    e.tag === 22 ? (ae(Ie, Ie.current), ae(Ut, e), Jt === null && (Jt = e)) : In();
  }
  function In() {
    (ae(Ie, Ie.current), ae(Ut, Ut.current));
  }
  function Ht(e) {
    (F(Ut), Jt === e && (Jt = null), F(Ie));
  }
  var Ie = j(0);
  function nu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || tc(n) || nc(n))) return t;
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
  var Cn = 0,
    pe = null,
    Ue = null,
    nt = null,
    au = !1,
    fl = !1,
    Da = !1,
    lu = 0,
    Il = 0,
    dl = null,
    kv = 0;
  function $e() {
    throw Error(x(321));
  }
  function $r(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function Wr(e, t, n, a, l, u) {
    return (
      (Cn = u),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? jf : ds),
      (Da = !1),
      (u = n(a, l)),
      (Da = !1),
      fl && (u = nf(t, n, a, l)),
      tf(e),
      u
    );
  }
  function tf(e) {
    q.H = ni;
    var t = Ue !== null && Ue.next !== null;
    if (((Cn = 0), (nt = Ue = pe = null), (au = !1), (Il = 0), (dl = null), t)) throw Error(x(300));
    e === null || at || ((e = e.dependencies), e !== null && ki(e) && (at = !0));
  }
  function nf(e, t, n, a) {
    pe = e;
    var l = 0;
    do {
      if ((fl && (dl = null), (Il = 0), (fl = !1), 25 <= l)) throw Error(x(301));
      if (((l += 1), (nt = Ue = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((q.H = Gf), (u = t(n, a)));
    } while (fl);
    return u;
  }
  function Fv() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ei(t) : t),
      (e = e.useState()[0]),
      (Ue !== null ? Ue.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Pr() {
    var e = lu !== 0;
    return ((lu = 0), e);
  }
  function Ir(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function es(e) {
    if (au) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      au = !1;
    }
    ((Cn = 0), (nt = Ue = pe = null), (fl = !1), (Il = lu = 0), (dl = null));
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (nt === null ? (pe.memoizedState = nt = e) : (nt = nt.next = e), nt);
  }
  function et() {
    if (Ue === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = nt === null ? pe.memoizedState : nt.next;
    if (t !== null) ((nt = t), (Ue = e));
    else {
      if (e === null) throw pe.alternate === null ? Error(x(467)) : Error(x(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        nt === null ? (pe.memoizedState = nt = e) : (nt = nt.next = e));
    }
    return nt;
  }
  function iu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ei(e) {
    var t = Il;
    return (
      (Il += 1),
      dl === null && (dl = []),
      (e = Ko(dl, e, t)),
      (t = pe),
      (nt === null ? t.memoizedState : nt.next) === null &&
        ((t = t.alternate), (q.H = t === null || t.memoizedState === null ? jf : ds)),
      e
    );
  }
  function uu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ei(e);
      if (e.$$typeof === w) return mt(e);
    }
    throw Error(x(438, String(e)));
  }
  function ts(e) {
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
      n === null && ((n = iu()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = O;
    return (t.index++, n);
  }
  function Mn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ru(e) {
    var t = et();
    return ns(t, Ue, e);
  }
  function ns(e, t, n) {
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
      var M = (S = null),
        U = null,
        Q = t,
        $ = !1;
      do {
        var I = Q.lane & -536870913;
        if (I !== Q.lane ? (be & I) === I : (Cn & I) === I) {
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
              I === ul && ($ = !0));
          else if ((Cn & Z) === Z) {
            ((Q = Q.next), Z === ul && ($ = !0));
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
              U === null ? ((M = U = I), (S = u)) : (U = U.next = I),
              (pe.lanes |= Z),
              (na |= Z));
          ((I = Q.action), Da && n(u, I), (u = Q.hasEagerState ? Q.eagerState : n(u, I)));
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
            U === null ? ((M = U = Z), (S = u)) : (U = U.next = Z),
            (pe.lanes |= I),
            (na |= I));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = M),
        !Nt(u, e.memoizedState) && ((at = !0), $ && ((n = rl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (a.lastRenderedState = u));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function as(e) {
    var t = et(),
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
      (Nt(u, t.memoizedState) || (at = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function af(e, t, n) {
    var a = pe,
      l = et(),
      u = Me;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Nt((Ue || l).memoizedState, n);
    if (
      (S && ((l.memoizedState = n), (at = !0)),
      (l = l.queue),
      us(rf.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || S || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ml(9, { destroy: void 0 }, uf.bind(null, a, l, n, t), null),
        je === null)
      )
        throw Error(x(349));
      u || (Cn & 127) !== 0 || lf(a, t, n);
    }
    return n;
  }
  function lf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = iu()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function uf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), sf(t) && cf(e));
  }
  function rf(e, t, n) {
    return n(function () {
      sf(t) && cf(e);
    });
  }
  function sf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function cf(e) {
    var t = Ea(e, 2);
    t !== null && zt(t, e, 2);
  }
  function ls(e) {
    var t = Et();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Da)) {
        ue(!0);
        try {
          n();
        } finally {
          ue(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function of(e, t, n, a) {
    return ((e.baseState = n), ns(e, Ue, typeof a == 'function' ? a : Mn));
  }
  function $v(e, t, n, a, l) {
    if (ou(e)) throw Error(x(485));
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
          ? ((u.next = t.pending = u), ff(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function ff(e, t) {
    var n = t.action,
      a = t.payload,
      l = e.state;
    if (t.isTransition) {
      var u = q.T,
        S = {};
      q.T = S;
      try {
        var M = n(l, a),
          U = q.S;
        (U !== null && U(S, M), df(e, t, M));
      } catch (Q) {
        is(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (q.T = u));
      }
    } else
      try {
        ((u = n(l, a)), df(e, t, u));
      } catch (Q) {
        is(e, t, Q);
      }
  }
  function df(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            mf(e, t, a);
          },
          function (a) {
            return is(e, t, a);
          }
        )
      : mf(e, t, n);
  }
  function mf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      hf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), ff(e, n))));
  }
  function is(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), hf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function hf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function vf(e, t) {
    return t;
  }
  function gf(e, t) {
    if (Me) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Me) {
            if (qe) {
              t: {
                for (var l = qe, u = Kt; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (((l = kt(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((u = l.data), (l = u === 'F!' || u === 'F' ? l : null));
              }
              if (l) {
                ((qe = kt(l.nextSibling)), (a = l.data === 'F!'));
                break e;
              }
            }
            Jn(a);
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
        lastRenderedReducer: vf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Uf.bind(null, pe, a)),
      (a.dispatch = n),
      (a = ls(!1)),
      (u = fs.bind(null, pe, !1, a.queue)),
      (a = Et()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = $v.bind(null, pe, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function yf(e) {
    var t = et();
    return pf(t, Ue, e);
  }
  function pf(e, t, n) {
    if (
      ((t = ns(e, t, vf)[0]),
      (e = ru(Mn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = ei(t);
      } catch (S) {
        throw S === sl ? Wi : S;
      }
    else a = t;
    t = et();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048), ml(9, { destroy: void 0 }, Wv.bind(null, l, n), null)),
      [a, u, e]
    );
  }
  function Wv(e, t) {
    e.action = t;
  }
  function Sf(e) {
    var t = et(),
      n = Ue;
    if (n !== null) return pf(t, n, e);
    (et(), (t = t.memoizedState), (n = et()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function ml(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = iu()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function xf() {
    return et().memoizedState;
  }
  function su(e, t, n, a) {
    var l = Et();
    ((pe.flags |= e),
      (l.memoizedState = ml(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function cu(e, t, n, a) {
    var l = et();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ue !== null && a !== null && $r(a, Ue.memoizedState.deps)
      ? (l.memoizedState = ml(t, u, n, a))
      : ((pe.flags |= e), (l.memoizedState = ml(1 | t, u, n, a)));
  }
  function Ef(e, t) {
    su(8390656, 8, e, t);
  }
  function us(e, t) {
    cu(2048, 8, e, t);
  }
  function Pv(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = iu()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function bf(e) {
    var t = et().memoizedState;
    return (
      Pv({ ref: t, nextImpl: e }),
      function () {
        if ((De & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Tf(e, t) {
    return cu(4, 2, e, t);
  }
  function Cf(e, t) {
    return cu(4, 4, e, t);
  }
  function Mf(e, t) {
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
  function Rf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), cu(4, 4, Mf.bind(null, t, e), n));
  }
  function rs() {}
  function Af(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && $r(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function zf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && $r(t, a[1])) return a[0];
    if (((a = e()), Da)) {
      ue(!0);
      try {
        e();
      } finally {
        ue(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function ss(e, t, n) {
    return n === void 0 || ((Cn & 1073741824) !== 0 && (be & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = _d()), (pe.lanes |= e), (na |= e), n);
  }
  function _f(e, t, n, a) {
    return Nt(n, t)
      ? n
      : ol.current !== null
        ? ((e = ss(e, n, a)), Nt(e, t) || (at = !0), e)
        : (Cn & 42) === 0 || ((Cn & 1073741824) !== 0 && (be & 261930) === 0)
          ? ((at = !0), (e.memoizedState = n))
          : ((e = _d()), (pe.lanes |= e), (na |= e), t);
  }
  function Df(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = q.T,
      M = {};
    ((q.T = M), fs(e, !1, t, n));
    try {
      var U = l(),
        Q = q.S;
      if (
        (Q !== null && Q(M, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var $ = Jv(U, a);
        ti(e, t, $, Gt(e));
      } else ti(e, t, a, Gt(e));
    } catch (I) {
      ti(e, t, { then: function () {}, status: 'rejected', reason: I }, Gt());
    } finally {
      ((K.p = u), S !== null && M.types !== null && (S.types = M.types), (q.T = S));
    }
  }
  function Iv() {}
  function cs(e, t, n, a) {
    if (e.tag !== 5) throw Error(x(476));
    var l = Of(e).queue;
    Df(
      e,
      l,
      t,
      ne,
      n === null
        ? Iv
        : function () {
            return (wf(e), n(a));
          }
    );
  }
  function Of(e) {
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
        lastRenderedReducer: Mn,
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
          lastRenderedReducer: Mn,
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
  function wf(e) {
    var t = Of(e);
    (t.next === null && (t = e.alternate.memoizedState), ti(e, t.next.queue, {}, Gt()));
  }
  function os() {
    return mt(pi);
  }
  function Nf() {
    return et().memoizedState;
  }
  function Bf() {
    return et().memoizedState;
  }
  function eg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = $n(n);
          var a = Wn(t, e, n);
          (a !== null && (zt(a, t, n), $l(a, t, n)), (t = { cache: Gr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function tg(e, t, n) {
    var a = Gt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ou(e) ? Hf(t, n) : ((n = zr(e, t, n, a)), n !== null && (zt(n, e, a), Lf(n, t, a))));
  }
  function Uf(e, t, n) {
    var a = Gt();
    ti(e, t, n, a);
  }
  function ti(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ou(e)) Hf(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var S = t.lastRenderedState,
            M = u(S, n);
          if (((l.hasEagerState = !0), (l.eagerState = M), Nt(M, S)))
            return (Qi(e, t, l, 0), je === null && Xi(), !1);
        } catch {
        } finally {
        }
      if (((n = zr(e, t, l, a)), n !== null)) return (zt(n, e, a), Lf(n, t, a), !0);
    }
    return !1;
  }
  function fs(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Xs(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ou(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = zr(e, n, a, 2)), t !== null && zt(t, e, 2));
  }
  function ou(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Hf(e, t) {
    fl = au = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Lf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wl(e, n));
    }
  }
  var ni = {
    readContext: mt,
    use: uu,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useLayoutEffect: $e,
    useInsertionEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useSyncExternalStore: $e,
    useId: $e,
    useHostTransitionStatus: $e,
    useFormState: $e,
    useActionState: $e,
    useOptimistic: $e,
    useMemoCache: $e,
    useCacheRefresh: $e,
  };
  ni.useEffectEvent = $e;
  var jf = {
      readContext: mt,
      use: uu,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: mt,
      useEffect: Ef,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), su(4194308, 4, Mf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return su(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        su(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Et();
        t = t === void 0 ? null : t;
        var a = e();
        if (Da) {
          ue(!0);
          try {
            e();
          } finally {
            ue(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Et();
        if (n !== void 0) {
          var l = n(t);
          if (Da) {
            ue(!0);
            try {
              n(t);
            } finally {
              ue(!1);
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
          (e = e.dispatch = tg.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ls(e);
        var t = e.queue,
          n = Uf.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: rs,
      useDeferredValue: function (e, t) {
        var n = Et();
        return ss(n, e, t);
      },
      useTransition: function () {
        var e = ls(!1);
        return ((e = Df.bind(null, pe, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = pe,
          l = Et();
        if (Me) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(x(349));
          (be & 127) !== 0 || lf(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Ef(rf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          ml(9, { destroy: void 0 }, uf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = je.identifierPrefix;
        if (Me) {
          var n = fn,
            a = on;
          ((n = (a & ~(1 << (32 - ve(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = lu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = kv++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: os,
      useFormState: gf,
      useActionState: gf,
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
        return ((t.queue = n), (t = fs.bind(null, pe, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: ts,
      useCacheRefresh: function () {
        return (Et().memoizedState = eg.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = Et(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((De & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ds = {
      readContext: mt,
      use: uu,
      useCallback: Af,
      useContext: mt,
      useEffect: us,
      useImperativeHandle: Rf,
      useInsertionEffect: Tf,
      useLayoutEffect: Cf,
      useMemo: zf,
      useReducer: ru,
      useRef: xf,
      useState: function () {
        return ru(Mn);
      },
      useDebugValue: rs,
      useDeferredValue: function (e, t) {
        var n = et();
        return _f(n, Ue.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ru(Mn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : ei(e), t];
      },
      useSyncExternalStore: af,
      useId: Nf,
      useHostTransitionStatus: os,
      useFormState: yf,
      useActionState: yf,
      useOptimistic: function (e, t) {
        var n = et();
        return of(n, Ue, e, t);
      },
      useMemoCache: ts,
      useCacheRefresh: Bf,
    };
  ds.useEffectEvent = bf;
  var Gf = {
    readContext: mt,
    use: uu,
    useCallback: Af,
    useContext: mt,
    useEffect: us,
    useImperativeHandle: Rf,
    useInsertionEffect: Tf,
    useLayoutEffect: Cf,
    useMemo: zf,
    useReducer: as,
    useRef: xf,
    useState: function () {
      return as(Mn);
    },
    useDebugValue: rs,
    useDeferredValue: function (e, t) {
      var n = et();
      return Ue === null ? ss(n, e, t) : _f(n, Ue.memoizedState, e, t);
    },
    useTransition: function () {
      var e = as(Mn)[0],
        t = et().memoizedState;
      return [typeof e == 'boolean' ? e : ei(e), t];
    },
    useSyncExternalStore: af,
    useId: Nf,
    useHostTransitionStatus: os,
    useFormState: Sf,
    useActionState: Sf,
    useOptimistic: function (e, t) {
      var n = et();
      return Ue !== null ? of(n, Ue, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ts,
    useCacheRefresh: Bf,
  };
  Gf.useEffectEvent = bf;
  function ms(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var hs = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = $n(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = Wn(e, l, a)),
        t !== null && (zt(t, e, a), $l(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = $n(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = Wn(e, l, a)),
        t !== null && (zt(t, e, a), $l(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Gt(),
        a = $n(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Wn(e, a, n)),
        t !== null && (zt(t, e, n), $l(t, e, n)));
    },
  };
  function Yf(e, t, n, a, l, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Vl(n, a) || !Vl(l, u)
          : !0
    );
  }
  function qf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && hs.enqueueReplaceState(t, t.state, null));
  }
  function Oa(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var a in t) a !== 'ref' && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = p({}, n));
      for (var l in e) n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Vf(e) {
    Vi(e);
  }
  function Xf(e) {
    console.error(e);
  }
  function Qf(e) {
    Vi(e);
  }
  function fu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Zf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function vs(e, t, n) {
    return (
      (n = $n(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        fu(e, t);
      }),
      n
    );
  }
  function Kf(e) {
    return ((e = $n(e)), (e.tag = 3), e);
  }
  function Jf(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          Zf(t, n, a);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Zf(t, n, a),
          typeof l != 'function' && (aa === null ? (aa = new Set([this])) : aa.add(this)));
        var M = a.stack;
        this.componentDidCatch(a.value, { componentStack: M !== null ? M : '' });
      });
  }
  function ng(e, t, n, a, l) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && il(t, n, l, !0), (n = Ut.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Jt === null ? Tu() : n.alternate === null && We === 0 && (We = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Pi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Ys(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Pi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  Ys(e, a, l)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Ys(e, a, l), Tu(), !1);
    }
    if (Me)
      return (
        (t = Ut.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== Br && ((e = Error(x(422), { cause: a })), Zl(Xt(e, n))))
          : (a !== Br && ((t = Error(x(423), { cause: a })), Zl(Xt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = Xt(a, n)),
            (l = vs(e.stateNode, a, l)),
            Zr(e, l),
            We !== 4 && (We = 2)),
        !1
      );
    var u = Error(x(520), { cause: a });
    if (((u = Xt(u, n)), oi === null ? (oi = [u]) : oi.push(u), We !== 4 && (We = 2), t === null))
      return !0;
    ((a = Xt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = vs(n.stateNode, a, e)),
            Zr(n, e),
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
                  (aa === null || !aa.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Kf(l)),
              Jf(l, e, n, a),
              Zr(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var gs = Error(x(461)),
    at = !1;
  function ht(e, t, n, a) {
    t.child = e === null ? $o(t, null, n, a) : _a(t, e.child, n, a);
  }
  function kf(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var S = {};
      for (var M in a) M !== 'ref' && (S[M] = a[M]);
    } else S = a;
    return (
      Ma(t),
      (a = Wr(e, t, n, S, u, l)),
      (M = Pr()),
      e !== null && !at
        ? (Ir(e, t, l), Rn(e, t, l))
        : (Me && M && wr(t), (t.flags |= 1), ht(e, t, a, l), t.child)
    );
  }
  function Ff(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !_r(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), $f(e, t, u, a, l))
        : ((e = Ki(n.type, null, a, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Cs(e, l))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Vl), n(S, a) && e.ref === t.ref))
        return Rn(e, t, l);
    }
    return ((t.flags |= 1), (e = xn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function $f(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Vl(u, a) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = a = u), Cs(e, l))) (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), Rn(e, t, l));
    }
    return ys(e, t, n, a, l);
  }
  function Wf(e, t, n, a) {
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
        return Pf(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $i(t, u !== null ? u.cachePool : null),
          u !== null ? Io(t, u) : Jr(),
          ef(t));
      else return ((a = t.lanes = 536870912), Pf(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? ($i(t, u.cachePool), Io(t, u), In(), (t.memoizedState = null))
        : (e !== null && $i(t, null), Jr(), In());
    return (ht(e, t, l, n), t.child);
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
  function Pf(e, t, n, a, l) {
    var u = qr();
    return (
      (u = u === null ? null : { parent: tt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && $i(t, null),
      Jr(),
      ef(t),
      e !== null && il(e, t, a, !0),
      (t.childLanes = l),
      null
    );
  }
  function du(e, t) {
    return (
      (t = hu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function If(e, t, n) {
    return (
      _a(t, e.child, null, n),
      (e = du(t, t.pendingProps)),
      (e.flags |= 2),
      Ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function ag(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Me) {
        if (a.mode === 'hidden') return ((e = du(t, a)), (t.lanes = 536870912), ai(null, e));
        if (
          (Fr(t),
          (e = qe)
            ? ((e = fm(e, Kt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Zn !== null ? { id: on, overflow: fn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Uo(e)),
                (n.return = t),
                (t.child = n),
                (dt = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Jn(t);
        return ((t.lanes = 536870912), null);
      }
      return du(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((Fr(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = If(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((at || il(e, t, n, !1), (l = (n & e.childLanes) !== 0), at || l)) {
        if (((a = je), a !== null && ((S = Ya(a, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Ea(e, S), zt(a, e, S), gs);
        (Tu(), (t = If(e, t, n)));
      } else
        ((e = u.treeContext),
          (qe = kt(S.nextSibling)),
          (dt = t),
          (Me = !0),
          (Kn = null),
          (Kt = !1),
          e !== null && jo(t, e),
          (t = du(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = xn(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function mu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ys(e, t, n, a, l) {
    return (
      Ma(t),
      (n = Wr(e, t, n, a, void 0, l)),
      (a = Pr()),
      e !== null && !at
        ? (Ir(e, t, l), Rn(e, t, l))
        : (Me && a && wr(t), (t.flags |= 1), ht(e, t, n, l), t.child)
    );
  }
  function ed(e, t, n, a, l, u) {
    return (
      Ma(t),
      (t.updateQueue = null),
      (n = nf(t, a, n, l)),
      tf(e),
      (a = Pr()),
      e !== null && !at
        ? (Ir(e, t, u), Rn(e, t, u))
        : (Me && a && wr(t), (t.flags |= 1), ht(e, t, n, u), t.child)
    );
  }
  function td(e, t, n, a, l) {
    if ((Ma(t), t.stateNode === null)) {
      var u = tl,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = mt(S)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = hs),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Xr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? mt(S) : tl),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (ms(t, n, S, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && hs.enqueueReplaceState(u, u.state, null),
          Pl(t, a, u, l),
          Wl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var M = t.memoizedProps,
        U = Oa(n, M);
      u.props = U;
      var Q = u.context,
        $ = n.contextType;
      ((S = tl), typeof $ == 'object' && $ !== null && (S = mt($)));
      var I = n.getDerivedStateFromProps;
      (($ = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (M = t.pendingProps !== M),
        $ ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((M || Q !== S) && qf(t, u, a, S)),
        (Fn = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Pl(t, a, u, l),
        Wl(),
        (Q = t.memoizedState),
        M || Z !== Q || Fn
          ? (typeof I == 'function' && (ms(t, n, I, a), (Q = t.memoizedState)),
            (U = Fn || Yf(t, n, U, a, Z, Q, S))
              ? ($ ||
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
        Qr(e, t),
        (S = t.memoizedProps),
        ($ = Oa(n, S)),
        (u.props = $),
        (I = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = tl),
        typeof Q == 'object' && Q !== null && (U = mt(Q)),
        (M = n.getDerivedStateFromProps),
        (Q = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== I || Z !== U) && qf(t, u, a, U)),
        (Fn = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Pl(t, a, u, l),
        Wl());
      var k = t.memoizedState;
      S !== I || Z !== k || Fn || (e !== null && e.dependencies !== null && ki(e.dependencies))
        ? (typeof M == 'function' && (ms(t, n, M, a), (k = t.memoizedState)),
          ($ =
            Fn ||
            Yf(t, n, $, a, Z, k, U) ||
            (e !== null && e.dependencies !== null && ki(e.dependencies)))
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
          (a = $))
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
      mu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = _a(t, e.child, null, l)), (t.child = _a(t, null, n, l)))
            : ht(e, t, n, l),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Rn(e, t, l)),
      e
    );
  }
  function nd(e, t, n, a) {
    return (Ta(), (t.flags |= 256), ht(e, t, n, a), t.child);
  }
  var ps = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ss(e) {
    return { baseLanes: e, cachePool: Qo() };
  }
  function xs(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= jt), e);
  }
  function ad(e, t, n) {
    var a = t.pendingProps,
      l = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (Ie.current & 2) !== 0),
      S && ((l = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Me) {
        if (
          (l ? Pn(t) : In(),
          (e = qe)
            ? ((e = fm(e, Kt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Zn !== null ? { id: on, overflow: fn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Uo(e)),
                (n.return = t),
                (t.child = n),
                (dt = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Jn(t);
        return (nc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var M = a.children;
      return (
        (a = a.fallback),
        l
          ? (In(),
            (l = t.mode),
            (M = hu({ mode: 'hidden', children: M }, l)),
            (a = ba(a, l, n, null)),
            (M.return = t),
            (a.return = t),
            (M.sibling = a),
            (t.child = M),
            (a = t.child),
            (a.memoizedState = Ss(n)),
            (a.childLanes = xs(e, S, n)),
            (t.memoizedState = ps),
            ai(null, a))
          : (Pn(t), Es(t, M))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((M = U.dehydrated), M !== null)) {
      if (u)
        t.flags & 256
          ? (Pn(t), (t.flags &= -257), (t = bs(e, t, n)))
          : t.memoizedState !== null
            ? (In(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (In(),
              (M = a.fallback),
              (l = t.mode),
              (a = hu({ mode: 'visible', children: a.children }, l)),
              (M = ba(M, l, n, null)),
              (M.flags |= 2),
              (a.return = t),
              (M.return = t),
              (a.sibling = M),
              (t.child = a),
              _a(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Ss(n)),
              (a.childLanes = xs(e, S, n)),
              (t.memoizedState = ps),
              (t = ai(null, a)));
      else if ((Pn(t), nc(M))) {
        if (((S = M.nextSibling && M.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (a = Error(x(419))),
          (a.stack = ''),
          (a.digest = S),
          Zl({ value: a, source: null, stack: null }),
          (t = bs(e, t, n)));
      } else if ((at || il(e, t, n, !1), (S = (n & e.childLanes) !== 0), at || S)) {
        if (((S = je), S !== null && ((a = Ya(S, n)), a !== 0 && a !== U.retryLane)))
          throw ((U.retryLane = a), Ea(e, a), zt(S, e, a), gs);
        (tc(M) || Tu(), (t = bs(e, t, n)));
      } else
        tc(M)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (qe = kt(M.nextSibling)),
            (dt = t),
            (Me = !0),
            (Kn = null),
            (Kt = !1),
            e !== null && jo(t, e),
            (t = Es(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (In(),
        (M = a.fallback),
        (l = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (a = xn(U, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (M = xn(Q, M)) : ((M = ba(M, l, n, null)), (M.flags |= 2)),
        (M.return = t),
        (a.return = t),
        (a.sibling = M),
        (t.child = a),
        ai(null, a),
        (a = t.child),
        (M = e.child.memoizedState),
        M === null
          ? (M = Ss(n))
          : ((l = M.cachePool),
            l !== null
              ? ((U = tt._currentValue), (l = l.parent !== U ? { parent: U, pool: U } : l))
              : (l = Qo()),
            (M = { baseLanes: M.baseLanes | n, cachePool: l })),
        (a.memoizedState = M),
        (a.childLanes = xs(e, S, n)),
        (t.memoizedState = ps),
        ai(e.child, a))
      : (Pn(t),
        (n = e.child),
        (e = n.sibling),
        (n = xn(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((S = t.deletions), S === null ? ((t.deletions = [e]), (t.flags |= 16)) : S.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Es(e, t) {
    return ((t = hu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function hu(e, t) {
    return ((e = Bt(22, e, null, t)), (e.lanes = 0), e);
  }
  function bs(e, t, n) {
    return (
      _a(t, e.child, null, n),
      (e = Es(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ld(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Lr(e.return, t, n));
  }
  function Ts(e, t, n, a, l, u) {
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
  function id(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    a = a.children;
    var S = Ie.current,
      M = (S & 2) !== 0;
    if (
      (M ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      ae(Ie, S),
      ht(e, t, a, n),
      (a = Me ? Ql : 0),
      !M && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, n, t);
        else if (e.tag === 19) ld(e, n, t);
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
          ((e = n.alternate), e !== null && nu(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Ts(t, !1, l, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && nu(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Ts(t, !0, n, null, u, a);
        break;
      case 'together':
        Ts(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Rn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (na |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((il(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Cs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && ki(e)));
  }
  function lg(e, t, n) {
    switch (t.tag) {
      case 3:
        (ye(t, t.stateNode.containerInfo), kn(t, tt, e.memoizedState.cache), Ta());
        break;
      case 27:
      case 5:
        Ze(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        kn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Fr(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Pn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ad(e, t, n)
              : (Pn(t), (e = Rn(e, t, n)), e !== null ? e.sibling : null);
        Pn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (il(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return id(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ae(Ie, Ie.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Wf(e, t, n, t.pendingProps));
      case 24:
        kn(t, tt, e.memoizedState.cache);
    }
    return Rn(e, t, n);
  }
  function ud(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) at = !0;
      else {
        if (!Cs(e, n) && (t.flags & 128) === 0) return ((at = !1), lg(e, t, n));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), Me && (t.flags & 1048576) !== 0 && Lo(t, Ql, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Aa(t.elementType)), (t.type = e), typeof e == 'function'))
            _r(e)
              ? ((a = Oa(e, a)), (t.tag = 1), (t = td(null, t, e, a, n)))
              : ((t.tag = 0), (t = ys(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                ((t.tag = 11), (t = kf(null, t, e, a, n)));
                break e;
              } else if (l === _) {
                ((t.tag = 14), (t = Ff(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return ys(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (l = Oa(a, t.pendingProps)), td(e, t, a, l, n));
      case 3:
        e: {
          if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((l = u.element), Qr(e, t), Pl(t, a, null, n));
          var S = t.memoizedState;
          if (
            ((a = S.cache),
            kn(t, tt, a),
            a !== u.cache && jr(t, [tt], n, !0),
            Wl(),
            (a = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = nd(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = Xt(Error(x(424)), t)), Zl(l), (t = nd(e, t, a, n)));
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
                qe = kt(e.firstChild),
                  dt = t,
                  Me = !0,
                  Kn = null,
                  Kt = !0,
                  n = $o(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ta(), a === l)) {
              t = Rn(e, t, n);
              break e;
            }
            ht(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          mu(e, t),
          e === null
            ? (n = ym(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Me ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Du(ie.current).createElement(n)),
                (a[ft] = t),
                (a[bt] = e),
                vt(a, n, e),
                ct(a),
                (t.stateNode = a))
            : (t.memoizedState = ym(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ze(t),
          e === null &&
            Me &&
            ((a = t.stateNode = hm(t.type, t.pendingProps, ie.current)),
            (dt = t),
            (Kt = !0),
            (l = qe),
            ra(t.type) ? ((ac = l), (qe = kt(a.firstChild))) : (qe = l)),
          ht(e, t, t.pendingProps.children, n),
          mu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Me &&
            ((l = a = qe) &&
              ((a = Bg(a, t.type, t.pendingProps, Kt)),
              a !== null
                ? ((t.stateNode = a), (dt = t), (qe = kt(a.firstChild)), (Kt = !1), (l = !0))
                : (l = !1)),
            l || Jn(t)),
          Ze(t),
          (l = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ps(l, u) ? (a = null) : S !== null && Ps(l, S) && (t.flags |= 32),
          t.memoizedState !== null && ((l = Wr(e, t, Fv, null, null, n)), (pi._currentValue = l)),
          mu(e, t),
          ht(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Me &&
            ((e = n = qe) &&
              ((n = Ug(n, t.pendingProps, Kt)),
              n !== null ? ((t.stateNode = n), (dt = t), (qe = null), (e = !0)) : (e = !1)),
            e || Jn(t)),
          null
        );
      case 13:
        return ad(e, t, n);
      case 4:
        return (
          ye(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = _a(t, null, a, n)) : ht(e, t, a, n),
          t.child
        );
      case 11:
        return kf(e, t, t.type, t.pendingProps, n);
      case 7:
        return (ht(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), kn(t, t.type, a.value), ht(e, t, a.children, n), t.child);
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          Ma(t),
          (l = mt(l)),
          (a = a(l)),
          (t.flags |= 1),
          ht(e, t, a, n),
          t.child
        );
      case 14:
        return Ff(e, t, t.type, t.pendingProps, n);
      case 15:
        return $f(e, t, t.type, t.pendingProps, n);
      case 19:
        return id(e, t, n);
      case 31:
        return ag(e, t, n);
      case 22:
        return Wf(e, t, n, t.pendingProps);
      case 24:
        return (
          Ma(t),
          (a = mt(tt)),
          e === null
            ? ((l = qr()),
              l === null &&
                ((l = je),
                (u = Gr()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: a, cache: l }),
              Xr(t),
              kn(t, tt, l))
            : ((e.lanes & n) !== 0 && (Qr(e, t), Pl(t, null, null, n), Wl()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  kn(t, tt, a))
                : ((a = u.cache), kn(t, tt, a), a !== l.cache && jr(t, [tt], n, !0))),
          ht(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function An(e) {
    e.flags |= 4;
  }
  function Ms(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nd()) e.flags |= 8192;
        else throw ((za = Pi), Vr);
    } else e.flags &= -16777217;
  }
  function rd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !bm(t)))
      if (Nd()) e.flags |= 8192;
      else throw ((za = Pi), Vr);
  }
  function vu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Ot() : 536870912), (e.lanes |= t), (yl |= t)));
  }
  function li(e, t) {
    if (!Me)
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
  function ig(e, t, n) {
    var a = t.pendingProps;
    switch ((Nr(t), t.tag)) {
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
          Tn(tt),
          Re(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ll(t)
              ? An(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ur())),
          Ve(t),
          null
        );
      case 26:
        var l = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (An(t), u !== null ? (Ve(t), rd(t, u)) : (Ve(t), Ms(t, l, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (An(t), Ve(t), rd(t, u))
                : (Ve(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && An(t), Ve(t), Ms(t, l, e, a, n)),
          null
        );
      case 27:
        if ((Pe(t), (n = ie.current), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && An(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          ((e = le.current), ll(t) ? Go(t) : ((e = hm(l, a, n)), (t.stateNode = e), An(t)));
        }
        return (Ve(t), null);
      case 5:
        if ((Pe(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && An(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          if (((u = le.current), ll(t))) Go(t);
          else {
            var S = Du(ie.current);
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
            ((u[ft] = t), (u[bt] = a));
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
            e: switch ((vt(u, l, a), l)) {
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
            a && An(t);
          }
        }
        return (Ve(t), Ms(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && An(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ie.current), ll(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (l = dt), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((e[ft] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                am(e.nodeValue, n)
              )),
              e || Jn(t, !0));
          } else ((e = Du(e).createTextNode(a)), (e[ft] = t), (t.stateNode = e));
        }
        return (Ve(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ll(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[ft] = t;
            } else (Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (e = !1));
          } else
            ((n = Ur()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (Ve(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = ll(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(x(317));
              l[ft] = t;
            } else (Ta(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (l = !1));
          } else
            ((l = Ur()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return (
          Ht(t),
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
              vu(t, t.updateQueue),
              Ve(t),
              null)
        );
      case 4:
        return (Re(), e === null && Js(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (Tn(t.type), Ve(t), null);
      case 19:
        if ((F(Ie), (a = t.memoizedState), a === null)) return (Ve(t), null);
        if (((l = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (l) li(a, !1);
          else {
            if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = nu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      li(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      vu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Bo(n, e), (n = n.sibling));
                  return (ae(Ie, (Ie.current & 1) | 2), Me && En(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ut() > xu &&
              ((t.flags |= 128), (l = !0), li(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = nu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                vu(t, e),
                li(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Me)
              )
                return (Ve(t), null);
            } else
              2 * ut() - a.renderingStartTime > xu &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), li(a, !1), (t.lanes = 4194304));
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
            (n = Ie.current),
            ae(Ie, l ? (n & 1) | 2 : n & 1),
            Me && En(t, a.treeForkCount),
            e)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          kr(),
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
          n !== null && vu(t, n.retryQueue),
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
          e !== null && F(Ra),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Tn(tt),
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
  function ug(e, t) {
    switch ((Nr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          Tn(tt),
          Re(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Pe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Ht(t), t.alternate === null)) throw Error(x(340));
          Ta();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          Ta();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (F(Ie), null);
      case 4:
        return (Re(), null);
      case 10:
        return (Tn(t.type), null);
      case 22:
      case 23:
        return (
          Ht(t),
          kr(),
          e !== null && F(Ra),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Tn(tt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sd(e, t) {
    switch ((Nr(t), t.tag)) {
      case 3:
        (Tn(tt), Re());
        break;
      case 26:
      case 27:
      case 5:
        Pe(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        F(Ie);
        break;
      case 10:
        Tn(t.type);
        break;
      case 22:
      case 23:
        (Ht(t), kr(), e !== null && F(Ra));
        break;
      case 24:
        Tn(tt);
    }
  }
  function ii(e, t) {
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
    } catch (M) {
      Ne(t, t.return, M);
    }
  }
  function ea(e, t, n) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var S = a.inst,
              M = S.destroy;
            if (M !== void 0) {
              ((S.destroy = void 0), (l = t));
              var U = n,
                Q = M;
              try {
                Q();
              } catch ($) {
                Ne(l, U, $);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch ($) {
      Ne(t, t.return, $);
    }
  }
  function cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Po(t, n);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function od(e, t, n) {
    ((n.props = Oa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function ui(e, t) {
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
      Ne(e, t, l);
    }
  }
  function dn(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (l) {
          Ne(e, t, l);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (l) {
          Ne(e, t, l);
        }
      else n.current = null;
  }
  function fd(e) {
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
      Ne(e, e.return, l);
    }
  }
  function Rs(e, t, n) {
    try {
      var a = e.stateNode;
      (zg(a, e.type, n, t), (a[bt] = t));
    } catch (l) {
      Ne(e, e.return, l);
    }
  }
  function dd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ra(e.type)) || e.tag === 4
    );
  }
  function As(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || dd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && ra(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zs(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = pn)));
    else if (
      a !== 4 &&
      (a === 27 && ra(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (zs(e, t, n), e = e.sibling; e !== null; ) (zs(e, t, n), (e = e.sibling));
  }
  function gu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && ra(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (gu(e, t, n), e = e.sibling; e !== null; ) (gu(e, t, n), (e = e.sibling));
  }
  function md(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      (vt(t, a, n), (t[ft] = e), (t[bt] = n));
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var zn = !1,
    lt = !1,
    _s = !1,
    hd = typeof WeakSet == 'function' ? WeakSet : Set,
    ot = null;
  function rg(e, t) {
    if (((e = e.containerInfo), ($s = Lu), (e = Mo(e)), br(e))) {
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
              M = -1,
              U = -1,
              Q = 0,
              $ = 0,
              I = e,
              Z = null;
            t: for (;;) {
              for (
                var k;
                I !== n || (l !== 0 && I.nodeType !== 3) || (M = S + l),
                  I !== u || (a !== 0 && I.nodeType !== 3) || (U = S + a),
                  I.nodeType === 3 && (S += I.nodeValue.length),
                  (k = I.firstChild) !== null;
              )
                ((Z = I), (I = k));
              for (;;) {
                if (I === e) break t;
                if (
                  (Z === n && ++Q === l && (M = S),
                  Z === u && ++$ === a && (U = S),
                  (k = I.nextSibling) !== null)
                )
                  break;
                ((I = Z), (Z = I.parentNode));
              }
              I = k;
            }
            n = M === -1 || U === -1 ? null : { start: M, end: U };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ws = { focusedElem: e, selectionRange: n }, Lu = !1, ot = t; ot !== null; )
      if (((t = ot), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (ot = e));
      else
        for (; ot !== null; ) {
          switch (((t = ot), (u = t.alternate), (e = t.flags), t.tag)) {
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
                  var re = Oa(n.type, l);
                  ((e = a.getSnapshotBeforeUpdate(re, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (me) {
                  Ne(n, n.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ec(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      ec(e);
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
            ((e.return = t.return), (ot = e));
            break;
          }
          ot = t.return;
        }
  }
  function vd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Dn(e, n), a & 4 && ii(5, n));
        break;
      case 1:
        if ((Dn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              Ne(n, n.return, S);
            }
          else {
            var l = Oa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              Ne(n, n.return, S);
            }
          }
        (a & 64 && cd(n), a & 512 && ui(n, n.return));
        break;
      case 3:
        if ((Dn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            Po(e, t);
          } catch (S) {
            Ne(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && a & 4 && md(n);
      case 26:
      case 5:
        (Dn(e, n), t === null && a & 4 && fd(n), a & 512 && ui(n, n.return));
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        (Dn(e, n), a & 4 && pd(e, n));
        break;
      case 13:
        (Dn(e, n),
          a & 4 && Sd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = gg.bind(null, n)), Hg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || zn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || lt), (l = zn));
          var u = lt;
          ((zn = a),
            (lt = t) && !u ? On(e, n, (n.subtreeFlags & 8772) !== 0) : Dn(e, n),
            (zn = l),
            (lt = u));
        }
        break;
      case 30:
        break;
      default:
        Dn(e, n);
    }
  }
  function gd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), gd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ir(t)),
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
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) (yd(e, t, n), (n = n.sibling));
  }
  function yd(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(ga, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (lt || dn(n, t),
          _n(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        lt || dn(n, t);
        var a = Qe,
          l = Ct;
        (ra(n.type) && ((Qe = n.stateNode), (Ct = !1)),
          _n(e, t, n),
          vi(n.stateNode),
          (Qe = a),
          (Ct = l));
        break;
      case 5:
        lt || dn(n, t);
      case 6:
        if (((a = Qe), (l = Ct), (Qe = null), _n(e, t, n), (Qe = a), (Ct = l), Qe !== null))
          if (Ct)
            try {
              (Qe.nodeType === 9
                ? Qe.body
                : Qe.nodeName === 'HTML'
                  ? Qe.ownerDocument.body
                  : Qe
              ).removeChild(n.stateNode);
            } catch (u) {
              Ne(n, t, u);
            }
          else
            try {
              Qe.removeChild(n.stateNode);
            } catch (u) {
              Ne(n, t, u);
            }
        break;
      case 18:
        Qe !== null &&
          (Ct
            ? ((e = Qe),
              cm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Ml(e))
            : cm(Qe, n.stateNode));
        break;
      case 4:
        ((a = Qe),
          (l = Ct),
          (Qe = n.stateNode.containerInfo),
          (Ct = !0),
          _n(e, t, n),
          (Qe = a),
          (Ct = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ea(2, n, t), lt || ea(4, n, t), _n(e, t, n));
        break;
      case 1:
        (lt ||
          (dn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && od(n, t, a)),
          _n(e, t, n));
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        ((lt = (a = lt) || n.memoizedState !== null), _n(e, t, n), (lt = a));
        break;
      default:
        _n(e, t, n);
    }
  }
  function pd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ml(e);
      } catch (n) {
        Ne(t, t.return, n);
      }
    }
  }
  function Sd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ml(e);
      } catch (n) {
        Ne(t, t.return, n);
      }
  }
  function sg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new hd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new hd()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function yu(e, t) {
    var n = sg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = yg.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          u = e,
          S = t,
          M = S;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (ra(M.type)) {
                ((Qe = M.stateNode), (Ct = !1));
                break e;
              }
              break;
            case 5:
              ((Qe = M.stateNode), (Ct = !1));
              break e;
            case 3:
            case 4:
              ((Qe = M.stateNode.containerInfo), (Ct = !0));
              break e;
          }
          M = M.return;
        }
        if (Qe === null) throw Error(x(160));
        (yd(u, S, l),
          (Qe = null),
          (Ct = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (xd(t, e), (t = t.sibling));
  }
  var en = null;
  function xd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Mt(t, e), Rt(e), a & 4 && (ea(3, e, e.return), ii(3, e), ea(5, e, e.return)));
        break;
      case 1:
        (Mt(t, e),
          Rt(e),
          a & 512 && (lt || n === null || dn(n, n.return)),
          a & 64 &&
            zn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = en;
        if ((Mt(t, e), Rt(e), a & 512 && (lt || n === null || dn(n, n.return)), a & 4)) {
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
                          u[Nl] ||
                          u[ft] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = l.createElement(a)),
                          l.head.insertBefore(u, l.querySelector('head > title'))),
                        vt(u, a, n),
                        (u[ft] = e),
                        ct(u),
                        (a = u));
                      break e;
                    case 'link':
                      var S = xm('link', 'href', l).get(a + (n.href || ''));
                      if (S) {
                        for (var M = 0; M < S.length; M++)
                          if (
                            ((u = S[M]),
                            u.getAttribute('href') ===
                              (n.href == null || n.href === '' ? null : n.href) &&
                              u.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                              u.getAttribute('title') === (n.title == null ? null : n.title) &&
                              u.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            S.splice(M, 1);
                            break t;
                          }
                      }
                      ((u = l.createElement(a)), vt(u, a, n), l.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = xm('meta', 'content', l).get(a + (n.content || '')))) {
                        for (M = 0; M < S.length; M++)
                          if (
                            ((u = S[M]),
                            u.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              u.getAttribute('name') === (n.name == null ? null : n.name) &&
                              u.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                          ) {
                            S.splice(M, 1);
                            break t;
                          }
                      }
                      ((u = l.createElement(a)), vt(u, a, n), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, a));
                  }
                  ((u[ft] = e), ct(u), (a = u));
                }
                e.stateNode = a;
              } else Em(l, e.type, e.stateNode);
            else e.stateNode = Sm(l, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? Em(l, e.type, e.stateNode) : Sm(l, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Rs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Mt(t, e),
          Rt(e),
          a & 512 && (lt || n === null || dn(n, n.return)),
          n !== null && a & 4 && Rs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Mt(t, e), Rt(e), a & 512 && (lt || n === null || dn(n, n.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            ka(l, '');
          } catch (re) {
            Ne(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), Rs(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (_s = !0));
        break;
      case 6:
        if ((Mt(t, e), Rt(e), a & 4)) {
          if (e.stateNode === null) throw Error(x(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (re) {
            Ne(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((Nu = null),
          (l = en),
          (en = Ou(t.containerInfo)),
          Mt(t, e),
          (en = l),
          Rt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ml(t.containerInfo);
          } catch (re) {
            Ne(e, e.return, re);
          }
        _s && ((_s = !1), Ed(e));
        break;
      case 4:
        ((a = en), (en = Ou(e.stateNode.containerInfo)), Mt(t, e), Rt(e), (en = a));
        break;
      case 12:
        (Mt(t, e), Rt(e));
        break;
      case 31:
        (Mt(t, e),
          Rt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), yu(e, a))));
        break;
      case 13:
        (Mt(t, e),
          Rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Su = ut()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), yu(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = zn,
          $ = lt;
        if (((zn = Q || l), (lt = $ || U), Mt(t, e), (lt = $), (zn = Q), Rt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || U || zn || lt || wa(e)),
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
                    M = U.stateNode;
                    var I = U.memoizedProps.style,
                      Z = I != null && I.hasOwnProperty('display') ? I.display : null;
                    M.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
                  }
                } catch (re) {
                  Ne(U, U.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = l ? '' : U.memoizedProps;
                } catch (re) {
                  Ne(U, U.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                U = t;
                try {
                  var k = U.stateNode;
                  l ? om(k, !0) : om(U.stateNode, !1);
                } catch (re) {
                  Ne(U, U.return, re);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), yu(e, n))));
        break;
      case 19:
        (Mt(t, e),
          Rt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), yu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Mt(t, e), Rt(e));
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (dd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = As(e);
            gu(e, u, l);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (ka(S, ''), (n.flags &= -33));
            var M = As(e);
            gu(e, M, S);
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo,
              Q = As(e);
            zs(e, Q, U);
            break;
          default:
            throw Error(x(161));
        }
      } catch ($) {
        Ne(e, e.return, $);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ed(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Ed(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (vd(e, t.alternate, t), (t = t.sibling));
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ea(4, t, t.return), wa(t));
          break;
        case 1:
          dn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && od(t, t.return, n), wa(t));
          break;
        case 27:
          vi(t.stateNode);
        case 26:
        case 5:
          (dn(t, t.return), wa(t));
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      e = e.sibling;
    }
  }
  function On(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        l = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (On(l, u, n), ii(4, u));
          break;
        case 1:
          if ((On(l, u, n), (a = u), (l = a.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (Q) {
              Ne(a, a.return, Q);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var M = a.stateNode;
            try {
              var U = l.shared.hiddenCallbacks;
              if (U !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < U.length; l++) Wo(U[l], M);
            } catch (Q) {
              Ne(a, a.return, Q);
            }
          }
          (n && S & 64 && cd(u), ui(u, u.return));
          break;
        case 27:
          md(u);
        case 26:
        case 5:
          (On(l, u, n), n && a === null && S & 4 && fd(u), ui(u, u.return));
          break;
        case 12:
          On(l, u, n);
          break;
        case 31:
          (On(l, u, n), n && S & 4 && pd(l, u));
          break;
        case 13:
          (On(l, u, n), n && S & 4 && Sd(l, u));
          break;
        case 22:
          (u.memoizedState === null && On(l, u, n), ui(u, u.return));
          break;
        case 30:
          break;
        default:
          On(l, u, n);
      }
      t = t.sibling;
    }
  }
  function Ds(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Kl(n)));
  }
  function Os(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Kl(e)));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (bd(e, t, n, a), (t = t.sibling));
  }
  function bd(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tn(e, t, n, a), l & 2048 && ii(9, t));
        break;
      case 1:
        tn(e, t, n, a);
        break;
      case 3:
        (tn(e, t, n, a),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Kl(e))));
        break;
      case 12:
        if (l & 2048) {
          (tn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              M = u.onPostCommit;
            typeof M == 'function' &&
              M(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (U) {
            Ne(t, t.return, U);
          }
        } else tn(e, t, n, a);
        break;
      case 31:
        tn(e, t, n, a);
        break;
      case 13:
        tn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? tn(e, t, n, a)
              : ri(e, t)
            : u._visibility & 2
              ? tn(e, t, n, a)
              : ((u._visibility |= 2), hl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && Ds(S, t));
        break;
      case 24:
        (tn(e, t, n, a), l & 2048 && Os(t.alternate, t));
        break;
      default:
        tn(e, t, n, a);
    }
  }
  function hl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e,
        S = t,
        M = n,
        U = a,
        Q = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          (hl(u, S, M, U, l), ii(8, S));
          break;
        case 23:
          break;
        case 22:
          var $ = S.stateNode;
          (S.memoizedState !== null
            ? $._visibility & 2
              ? hl(u, S, M, U, l)
              : ri(u, S)
            : (($._visibility |= 2), hl(u, S, M, U, l)),
            l && Q & 2048 && Ds(S.alternate, S));
          break;
        case 24:
          (hl(u, S, M, U, l), l && Q & 2048 && Os(S.alternate, S));
          break;
        default:
          hl(u, S, M, U, l);
      }
      t = t.sibling;
    }
  }
  function ri(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (ri(n, a), l & 2048 && Ds(a.alternate, a));
            break;
          case 24:
            (ri(n, a), l & 2048 && Os(a.alternate, a));
            break;
          default:
            ri(n, a);
        }
        t = t.sibling;
      }
  }
  var si = 8192;
  function vl(e, t, n) {
    if (e.subtreeFlags & si) for (e = e.child; e !== null; ) (Td(e, t, n), (e = e.sibling));
  }
  function Td(e, t, n) {
    switch (e.tag) {
      case 26:
        (vl(e, t, n),
          e.flags & si && e.memoizedState !== null && kg(n, en, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        vl(e, t, n);
        break;
      case 3:
      case 4:
        var a = en;
        ((en = Ou(e.stateNode.containerInfo)), vl(e, t, n), (en = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = si), (si = 16777216), vl(e, t, n), (si = a))
            : vl(e, t, n));
        break;
      default:
        vl(e, t, n);
    }
  }
  function Cd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((ot = a), Rd(a, e));
        }
      Cd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Md(e), (e = e.sibling));
  }
  function Md(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ci(e), e.flags & 2048 && ea(9, e, e.return));
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), pu(e))
          : ci(e);
        break;
      default:
        ci(e);
    }
  }
  function pu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((ot = a), Rd(a, e));
        }
      Cd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ea(8, t, t.return), pu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), pu(t)));
          break;
        default:
          pu(t);
      }
      e = e.sibling;
    }
  }
  function Rd(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Kl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (ot = a));
      else
        e: for (n = e; ot !== null; ) {
          a = ot;
          var l = a.sibling,
            u = a.return;
          if ((gd(a), a === n)) {
            ot = null;
            break e;
          }
          if (l !== null) {
            ((l.return = u), (ot = l));
            break e;
          }
          ot = u;
        }
    }
  }
  var cg = {
      getCacheForType: function (e) {
        var t = mt(tt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return mt(tt).controller.signal;
      },
    },
    og = typeof WeakMap == 'function' ? WeakMap : Map,
    De = 0,
    je = null,
    xe = null,
    be = 0,
    we = 0,
    Lt = null,
    ta = !1,
    gl = !1,
    ws = !1,
    wn = 0,
    We = 0,
    na = 0,
    Na = 0,
    Ns = 0,
    jt = 0,
    yl = 0,
    oi = null,
    At = null,
    Bs = !1,
    Su = 0,
    Ad = 0,
    xu = 1 / 0,
    Eu = null,
    aa = null,
    st = 0,
    la = null,
    pl = null,
    Nn = 0,
    Us = 0,
    Hs = null,
    zd = null,
    fi = 0,
    Ls = null;
  function Gt() {
    return (De & 2) !== 0 && be !== 0 ? be & -be : q.T !== null ? Xs() : Vc();
  }
  function _d() {
    if (jt === 0)
      if ((be & 536870912) === 0 || Me) {
        var e = Ke;
        ((Ke <<= 1), (Ke & 3932160) === 0 && (Ke = 262144), (jt = e));
      } else jt = 536870912;
    return ((e = Ut.current), e !== null && (e.flags |= 32), jt);
  }
  function zt(e, t, n) {
    (((e === je && (we === 2 || we === 9)) || e.cancelPendingCommit !== null) &&
      (Sl(e, 0), ia(e, be, jt, !1)),
      wt(e, n),
      ((De & 2) === 0 || e !== je) &&
        (e === je && ((De & 2) === 0 && (Na |= n), We === 4 && ia(e, be, jt, !1)), mn(e)));
  }
  function Dd(e, t, n) {
    if ((De & 6) !== 0) throw Error(x(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fe(e, t),
      l = a ? mg(e, t) : Gs(e, t, !0),
      u = a;
    do {
      if (l === 0) {
        gl && !a && ia(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !fg(n))) {
          ((l = Gs(e, t, !1)), (u = !1));
          continue;
        }
        if (l === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var S = 0;
          else
            ((S = e.pendingLanes & -536870913), (S = S !== 0 ? S : S & 536870912 ? 536870912 : 0));
          if (S !== 0) {
            t = S;
            e: {
              var M = e;
              l = oi;
              var U = M.current.memoizedState.isDehydrated;
              if ((U && (Sl(M, S).flags |= 256), (S = Gs(M, S, !1)), S !== 2)) {
                if (ws && !U) {
                  ((M.errorRecoveryDisabledLanes |= u), (Na |= u), (l = 4));
                  break e;
                }
                ((u = At), (At = l), u !== null && (At === null ? (At = u) : At.push.apply(At, u)));
              }
              l = S;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Sl(e, 0), ia(e, t, 0, !0));
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
              ia(a, t, jt, !ta);
              break e;
            case 2:
              At = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((t & 62914560) === t && ((l = Su + 300 - ut()), 10 < l)) {
            if ((ia(a, t, jt, !ta), rt(a, 0, !0) !== 0)) break e;
            ((Nn = t),
              (a.timeoutHandle = rm(
                Od.bind(null, a, n, At, Eu, Bs, t, jt, Na, yl, ta, u, 'Throttled', -0, 0),
                l
              )));
            break e;
          }
          Od(a, n, At, Eu, Bs, t, jt, Na, yl, ta, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    mn(e);
  }
  function Od(e, t, n, a, l, u, S, M, U, Q, $, I, Z, k) {
    if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn,
      }),
        Td(t, u, I));
      var re = (u & 62914560) === u ? Su - ut() : (u & 4194048) === u ? Ad - ut() : 0;
      if (((re = Fg(I, re)), re !== null)) {
        ((Nn = u),
          (e.cancelPendingCommit = re(Gd.bind(null, e, t, u, n, a, l, S, M, U, $, I, null, Z, k))),
          ia(e, u, S, !Q));
        return;
      }
    }
    Gd(e, t, u, n, a, l, S, M, U);
  }
  function fg(e) {
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
            if (!Nt(u(), l)) return !1;
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
  function ia(e, t, n, a) {
    ((t &= ~Ns),
      (t &= ~Na),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var l = t; 0 < l; ) {
      var u = 31 - ve(l),
        S = 1 << u;
      ((a[u] = -1), (l &= ~S));
    }
    n !== 0 && Ol(e, n, t);
  }
  function bu() {
    return (De & 6) === 0 ? (di(0), !1) : !0;
  }
  function js() {
    if (xe !== null) {
      if (we === 0) var e = xe.return;
      else ((e = xe), (bn = Ca = null), es(e), (cl = null), (kl = 0), (e = xe));
      for (; e !== null; ) (sd(e.alternate, e), (e = e.return));
      xe = null;
    }
  }
  function Sl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Og(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Nn = 0),
      js(),
      (je = e),
      (xe = n = xn(e.current, null)),
      (be = t),
      (we = 0),
      (Lt = null),
      (ta = !1),
      (gl = Fe(e, t)),
      (ws = !1),
      (yl = jt = Ns = Na = na = We = 0),
      (At = oi = null),
      (Bs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - ve(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return ((wn = t), Xi(), n);
  }
  function wd(e, t) {
    ((pe = null),
      (q.H = ni),
      t === sl || t === Wi
        ? ((t = Jo()), (we = 3))
        : t === Vr
          ? ((t = Jo()), (we = 4))
          : (we =
              t === gs
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Lt = t),
      xe === null && ((We = 1), fu(e, Xt(t, e.current))));
  }
  function Nd() {
    var e = Ut.current;
    return e === null
      ? !0
      : (be & 4194048) === be
        ? Jt === null
        : (be & 62914560) === be || (be & 536870912) !== 0
          ? e === Jt
          : !1;
  }
  function Bd() {
    var e = q.H;
    return ((q.H = ni), e === null ? ni : e);
  }
  function Ud() {
    var e = q.A;
    return ((q.A = cg), e);
  }
  function Tu() {
    ((We = 4),
      ta || ((be & 4194048) !== be && Ut.current !== null) || (gl = !0),
      ((na & 134217727) === 0 && (Na & 134217727) === 0) || je === null || ia(je, be, jt, !1));
  }
  function Gs(e, t, n) {
    var a = De;
    De |= 2;
    var l = Bd(),
      u = Ud();
    ((je !== e || be !== t) && ((Eu = null), Sl(e, t)), (t = !1));
    var S = We;
    e: do
      try {
        if (we !== 0 && xe !== null) {
          var M = xe,
            U = Lt;
          switch (we) {
            case 8:
              (js(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var Q = we;
              if (((we = 0), (Lt = null), xl(e, M, U, Q), n && gl)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = we), (we = 0), (Lt = null), xl(e, M, U, Q));
          }
        }
        (dg(), (S = We));
        break;
      } catch ($) {
        wd(e, $);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (bn = Ca = null),
      (De = a),
      (q.H = l),
      (q.A = u),
      xe === null && ((je = null), (be = 0), Xi()),
      S
    );
  }
  function dg() {
    for (; xe !== null; ) Hd(xe);
  }
  function mg(e, t) {
    var n = De;
    De |= 2;
    var a = Bd(),
      l = Ud();
    je !== e || be !== t ? ((Eu = null), (xu = ut() + 500), Sl(e, t)) : (gl = Fe(e, t));
    e: do
      try {
        if (we !== 0 && xe !== null) {
          t = xe;
          var u = Lt;
          t: switch (we) {
            case 1:
              ((we = 0), (Lt = null), xl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Zo(u)) {
                ((we = 0), (Lt = null), Ld(t));
                break;
              }
              ((t = function () {
                ((we !== 2 && we !== 9) || je !== e || (we = 7), mn(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              we = 7;
              break e;
            case 4:
              we = 5;
              break e;
            case 7:
              Zo(u) ? ((we = 0), (Lt = null), Ld(t)) : ((we = 0), (Lt = null), xl(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (xe.tag) {
                case 26:
                  S = xe.memoizedState;
                case 5:
                case 27:
                  var M = xe;
                  if (S ? bm(S) : M.stateNode.complete) {
                    ((we = 0), (Lt = null));
                    var U = M.sibling;
                    if (U !== null) xe = U;
                    else {
                      var Q = M.return;
                      Q !== null ? ((xe = Q), Cu(Q)) : (xe = null);
                    }
                    break t;
                  }
              }
              ((we = 0), (Lt = null), xl(e, t, u, 5));
              break;
            case 6:
              ((we = 0), (Lt = null), xl(e, t, u, 6));
              break;
            case 8:
              (js(), (We = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        hg();
        break;
      } catch ($) {
        wd(e, $);
      }
    while (!0);
    return (
      (bn = Ca = null),
      (q.H = a),
      (q.A = l),
      (De = n),
      xe !== null ? 0 : ((je = null), (be = 0), Xi(), We)
    );
  }
  function hg() {
    for (; xe !== null && !ha(); ) Hd(xe);
  }
  function Hd(e) {
    var t = ud(e.alternate, e, wn);
    ((e.memoizedProps = e.pendingProps), t === null ? Cu(e) : (xe = t));
  }
  function Ld(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ed(n, t, t.pendingProps, t.type, void 0, be);
        break;
      case 11:
        t = ed(n, t, t.pendingProps, t.type.render, t.ref, be);
        break;
      case 5:
        es(t);
      default:
        (sd(n, t), (t = xe = Bo(t, wn)), (t = ud(n, t, wn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Cu(e) : (xe = t));
  }
  function xl(e, t, n, a) {
    ((bn = Ca = null), es(t), (cl = null), (kl = 0));
    var l = t.return;
    try {
      if (ng(e, l, t, n, be)) {
        ((We = 1), fu(e, Xt(n, e.current)), (xe = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((xe = l), u);
      ((We = 1), fu(e, Xt(n, e.current)), (xe = null));
      return;
    }
    t.flags & 32768
      ? (Me || a === 1
          ? (e = !0)
          : gl || (be & 536870912) !== 0
            ? (e = !1)
            : ((ta = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ut.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        jd(t, e))
      : Cu(t);
  }
  function Cu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        jd(t, ta);
        return;
      }
      e = t.return;
      var n = ig(t.alternate, t, wn);
      if (n !== null) {
        xe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        xe = t;
        return;
      }
      xe = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function jd(e, t) {
    do {
      var n = ug(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (xe = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        xe = e;
        return;
      }
      xe = e = n;
    } while (e !== null);
    ((We = 6), (xe = null));
  }
  function Gd(e, t, n, a, l, u, S, M, U) {
    e.cancelPendingCommit = null;
    do Mu();
    while (st !== 0);
    if ((De & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Ar),
        cn(e, n, u, S, M, U),
        e === je && ((xe = je = null), (be = 0)),
        (pl = t),
        (la = e),
        (Nn = n),
        (Us = u),
        (Hs = l),
        (zd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            pg(qn, function () {
              return (Qd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = q.T), (q.T = null), (l = K.p), (K.p = 2), (S = De), (De |= 4));
        try {
          rg(e, t, n);
        } finally {
          ((De = S), (K.p = l), (q.T = a));
        }
      }
      ((st = 1), Yd(), qd(), Vd());
    }
  }
  function Yd() {
    if (st === 1) {
      st = 0;
      var e = la,
        t = pl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = De;
        De |= 4;
        try {
          xd(t, e);
          var u = Ws,
            S = Mo(e.containerInfo),
            M = u.focusedElem,
            U = u.selectionRange;
          if (S !== M && M && M.ownerDocument && Co(M.ownerDocument.documentElement, M)) {
            if (U !== null && br(M)) {
              var Q = U.start,
                $ = U.end;
              if (($ === void 0 && ($ = Q), 'selectionStart' in M))
                ((M.selectionStart = Q), (M.selectionEnd = Math.min($, M.value.length)));
              else {
                var I = M.ownerDocument || document,
                  Z = (I && I.defaultView) || window;
                if (Z.getSelection) {
                  var k = Z.getSelection(),
                    re = M.textContent.length,
                    me = Math.min(U.start, re),
                    Le = U.end === void 0 ? me : Math.min(U.end, re);
                  !k.extend && me > Le && ((S = Le), (Le = me), (me = S));
                  var V = To(M, me),
                    Y = To(M, Le);
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
                      me > Le
                        ? (k.addRange(X), k.extend(Y.node, Y.offset))
                        : (X.setEnd(Y.node, Y.offset), k.addRange(X)));
                  }
                }
              }
            }
            for (I = [], k = M; (k = k.parentNode); )
              k.nodeType === 1 && I.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (typeof M.focus == 'function' && M.focus(), M = 0; M < I.length; M++) {
              var P = I[M];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((Lu = !!$s), (Ws = $s = null));
        } finally {
          ((De = l), (K.p = a), (q.T = n));
        }
      }
      ((e.current = t), (st = 2));
    }
  }
  function qd() {
    if (st === 2) {
      st = 0;
      var e = la,
        t = pl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = De;
        De |= 4;
        try {
          vd(e, t.alternate, t);
        } finally {
          ((De = l), (K.p = a), (q.T = n));
        }
      }
      st = 3;
    }
  }
  function Vd() {
    if (st === 4 || st === 3) {
      ((st = 0), va());
      var e = la,
        t = pl,
        n = Nn,
        a = zd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (st = 5)
        : ((st = 0), (pl = la = null), Xd(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (aa = null),
        ar(n),
        (t = t.stateNode),
        St && typeof St.onCommitFiberRoot == 'function')
      )
        try {
          St.onCommitFiberRoot(ga, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = q.T), (l = K.p), (K.p = 2), (q.T = null));
        try {
          for (var u = e.onRecoverableError, S = 0; S < a.length; S++) {
            var M = a[S];
            u(M.value, { componentStack: M.stack });
          }
        } finally {
          ((q.T = t), (K.p = l));
        }
      }
      ((Nn & 3) !== 0 && Mu(),
        mn(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0 ? (e === Ls ? fi++ : ((fi = 0), (Ls = e))) : (fi = 0),
        di(0));
    }
  }
  function Xd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Kl(t)));
  }
  function Mu() {
    return (Yd(), qd(), Vd(), Qd());
  }
  function Qd() {
    if (st !== 5) return !1;
    var e = la,
      t = Us;
    Us = 0;
    var n = ar(Nn),
      a = q.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (q.T = null), (n = Hs), (Hs = null));
      var u = la,
        S = Nn;
      if (((st = 0), (pl = la = null), (Nn = 0), (De & 6) !== 0)) throw Error(x(331));
      var M = De;
      if (
        ((De |= 4),
        Md(u.current),
        bd(u, u.current, S, n),
        (De = M),
        di(0, !1),
        St && typeof St.onPostCommitFiberRoot == 'function')
      )
        try {
          St.onPostCommitFiberRoot(ga, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (q.T = a), Xd(e, t));
    }
  }
  function Zd(e, t, n) {
    ((t = Xt(n, t)),
      (t = vs(e.stateNode, t, 2)),
      (e = Wn(e, t, 2)),
      e !== null && (wt(e, 2), mn(e)));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) Zd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (aa === null || !aa.has(a)))
          ) {
            ((e = Xt(n, e)),
              (n = Kf(2)),
              (a = Wn(t, n, 2)),
              a !== null && (Jf(n, a, t, e), wt(a, 2), mn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ys(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new og();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || ((ws = !0), l.add(n), (e = vg.bind(null, e, t, n)), t.then(e, e));
  }
  function vg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      je === e &&
        (be & n) === n &&
        (We === 4 || (We === 3 && (be & 62914560) === be && 300 > ut() - Su)
          ? (De & 2) === 0 && Sl(e, 0)
          : (Ns |= n),
        yl === be && (yl = 0)),
      mn(e));
  }
  function Kd(e, t) {
    (t === 0 && (t = Ot()), (e = Ea(e, t)), e !== null && (wt(e, t), mn(e)));
  }
  function gg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Kd(e, n));
  }
  function yg(e, t) {
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
    (a !== null && a.delete(t), Kd(e, n));
  }
  function pg(e, t) {
    return pt(e, t);
  }
  var Ru = null,
    El = null,
    qs = !1,
    Au = !1,
    Vs = !1,
    ua = 0;
  function mn(e) {
    (e !== El && e.next === null && (El === null ? (Ru = El = e) : (El = El.next = e)),
      (Au = !0),
      qs || ((qs = !0), xg()));
  }
  function di(e, t) {
    if (!Vs && Au) {
      Vs = !0;
      do
        for (var n = !1, a = Ru; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var S = a.suspendedLanes,
                M = a.pingedLanes;
              ((u = (1 << (31 - ve(42 | e) + 1)) - 1),
                (u &= l & ~(S & ~M)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), $d(a, u));
          } else
            ((u = be),
              (u = rt(
                a,
                a === je ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Fe(a, u) || ((n = !0), $d(a, u)));
          a = a.next;
        }
      while (n);
      Vs = !1;
    }
  }
  function Sg() {
    Jd();
  }
  function Jd() {
    Au = qs = !1;
    var e = 0;
    ua !== 0 && Dg() && (e = ua);
    for (var t = ut(), n = null, a = Ru; a !== null; ) {
      var l = a.next,
        u = kd(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Ru = l) : (n.next = l), l === null && (El = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Au = !0)),
        (a = l));
    }
    ((st !== 0 && st !== 5) || di(e), ua !== 0 && (ua = 0));
  }
  function kd(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - ve(u),
        M = 1 << S,
        U = l[S];
      (U === -1
        ? ((M & n) === 0 || (M & a) !== 0) && (l[S] = xt(M, t))
        : U <= t && (e.expiredLanes |= M),
        (u &= ~M));
    }
    if (
      ((t = je),
      (n = be),
      (n = rt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (we === 2 || we === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Dt(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || Fe(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Dt(a), ar(n))) {
        case 2:
        case 8:
          n = Ga;
          break;
        case 32:
          n = qn;
          break;
        case 268435456:
          n = rn;
          break;
        default:
          n = qn;
      }
      return (
        (a = Fd.bind(null, e)),
        (n = pt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Dt(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Fd(e, t) {
    if (st !== 0 && st !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Mu() && e.callbackNode !== n) return null;
    var a = be;
    return (
      (a = rt(e, e === je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Dd(e, a, t),
          kd(e, ut()),
          e.callbackNode != null && e.callbackNode === n ? Fd.bind(null, e) : null)
    );
  }
  function $d(e, t) {
    if (Mu()) return null;
    Dd(e, t, !0);
  }
  function xg() {
    wg(function () {
      (De & 6) !== 0 ? pt(gn, Sg) : Jd();
    });
  }
  function Xs() {
    if (ua === 0) {
      var e = ul;
      (e === 0 && ((e = Ge), (Ge <<= 1), (Ge & 261888) === 0 && (Ge = 256)), (ua = e));
    }
    return ua;
  }
  function Wd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ui('' + e);
  }
  function Pd(e, t) {
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
  function Eg(e, t, n, a, l) {
    if (t === 'submit' && n && n.stateNode === l) {
      var u = Wd((l[bt] || null).action),
        S = a.submitter;
      S &&
        ((t = (t = S[bt] || null) ? Wd(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var M = new Gi('action', 'action', null, a, l);
      e.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ua !== 0) {
                  var U = S ? Pd(l, S) : new FormData(l);
                  cs(n, { pending: !0, data: U, method: l.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (M.preventDefault(),
                  (U = S ? Pd(l, S) : new FormData(l)),
                  cs(n, { pending: !0, data: U, method: l.method, action: u }, u, U));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Qs = 0; Qs < Rr.length; Qs++) {
    var Zs = Rr[Qs],
      bg = Zs.toLowerCase(),
      Tg = Zs[0].toUpperCase() + Zs.slice(1);
    It(bg, 'on' + Tg);
  }
  (It(zo, 'onAnimationEnd'),
    It(_o, 'onAnimationIteration'),
    It(Do, 'onAnimationStart'),
    It('dblclick', 'onDoubleClick'),
    It('focusin', 'onFocus'),
    It('focusout', 'onBlur'),
    It(Gv, 'onTransitionRun'),
    It(Yv, 'onTransitionStart'),
    It(qv, 'onTransitionCancel'),
    It(Oo, 'onTransitionEnd'),
    Ka('onMouseEnter', ['mouseout', 'mouseover']),
    Ka('onMouseLeave', ['mouseout', 'mouseover']),
    Ka('onPointerEnter', ['pointerout', 'pointerover']),
    Ka('onPointerLeave', ['pointerout', 'pointerover']),
    ya('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ya(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ya('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ya('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ya(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ya(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var mi =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Cg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(mi)
    );
  function Id(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var S = a.length - 1; 0 <= S; S--) {
            var M = a[S],
              U = M.instance,
              Q = M.currentTarget;
            if (((M = M.listener), U !== u && l.isPropagationStopped())) break e;
            ((u = M), (l.currentTarget = Q));
            try {
              u(l);
            } catch ($) {
              Vi($);
            }
            ((l.currentTarget = null), (u = U));
          }
        else
          for (S = 0; S < a.length; S++) {
            if (
              ((M = a[S]),
              (U = M.instance),
              (Q = M.currentTarget),
              (M = M.listener),
              U !== u && l.isPropagationStopped())
            )
              break e;
            ((u = M), (l.currentTarget = Q));
            try {
              u(l);
            } catch ($) {
              Vi($);
            }
            ((l.currentTarget = null), (u = U));
          }
      }
    }
  }
  function Ee(e, t) {
    var n = t[lr];
    n === void 0 && (n = t[lr] = new Set());
    var a = e + '__bubble';
    n.has(a) || (em(t, e, 2, !1), n.add(a));
  }
  function Ks(e, t, n) {
    var a = 0;
    (t && (a |= 4), em(n, e, a, t));
  }
  var zu = '_reactListening' + Math.random().toString(36).slice(2);
  function Js(e) {
    if (!e[zu]) {
      ((e[zu] = !0),
        Zc.forEach(function (n) {
          n !== 'selectionchange' && (Cg.has(n) || Ks(n, !1, e), Ks(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zu] || ((t[zu] = !0), Ks('selectionchange', !1, t));
    }
  }
  function em(e, t, n, a) {
    switch (_m(t)) {
      case 2:
        var l = Pg;
        break;
      case 8:
        l = Ig;
        break;
      default:
        l = sc;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !mr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ks(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var S = a.tag;
        if (S === 3 || S === 4) {
          var M = a.stateNode.containerInfo;
          if (M === l) break;
          if (S === 4)
            for (S = a.return; S !== null; ) {
              var U = S.tag;
              if ((U === 3 || U === 4) && S.stateNode.containerInfo === l) return;
              S = S.return;
            }
          for (; M !== null; ) {
            if (((S = Xa(M)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              a = u = S;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
    ao(function () {
      var Q = u,
        $ = fr(n),
        I = [];
      e: {
        var Z = wo.get(e);
        if (Z !== void 0) {
          var k = Gi,
            re = e;
          switch (e) {
            case 'keypress':
              if (Li(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = yv;
              break;
            case 'focusin':
              ((re = 'focus'), (k = yr));
              break;
            case 'focusout':
              ((re = 'blur'), (k = yr));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = yr;
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
              k = uo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = iv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = xv;
              break;
            case zo:
            case _o:
            case Do:
              k = sv;
              break;
            case Oo:
              k = bv;
              break;
            case 'scroll':
            case 'scrollend':
              k = av;
              break;
            case 'wheel':
              k = Cv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = ov;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = so;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = Rv;
          }
          var me = (t & 4) !== 0,
            Le = !me && (e === 'scroll' || e === 'scrollend'),
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
                ((P = Ul(Y, V)), P != null && me.push(hi(Y, P, X))),
              Le)
            )
              break;
            Y = Y.return;
          }
          0 < me.length && ((Z = new k(Z, re, null, n, $)), I.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            Z && n !== or && (re = n.relatedTarget || n.fromElement) && (Xa(re) || re[Va]))
          )
            break e;
          if (
            (k || Z) &&
            ((Z =
              $.window === $
                ? $
                : (Z = $.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            k
              ? ((re = n.relatedTarget || n.toElement),
                (k = Q),
                (re = re ? Xa(re) : null),
                re !== null &&
                  ((Le = i(re)), (me = re.tag), re !== Le || (me !== 5 && me !== 27 && me !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((me = uo),
              (P = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = so), (P = 'onPointerLeave'), (V = 'onPointerEnter'), (Y = 'pointer')),
              (Le = k == null ? Z : Bl(k)),
              (X = re == null ? Z : Bl(re)),
              (Z = new me(P, Y + 'leave', k, n, $)),
              (Z.target = Le),
              (Z.relatedTarget = X),
              (P = null),
              Xa($) === Q &&
                ((me = new me(V, Y + 'enter', re, n, $)),
                (me.target = X),
                (me.relatedTarget = Le),
                (P = me)),
              (Le = P),
              k && re)
            )
              t: {
                for (me = Mg, V = k, Y = re, X = 0, P = V; P; P = me(P)) X++;
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
            (k !== null && tm(I, Z, k, me, !1),
              re !== null && Le !== null && tm(I, Le, re, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Bl(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var ze = yo;
          else if (vo(Z))
            if (po) ze = Hv;
            else {
              ze = Bv;
              var ce = Nv;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && cr(Q.elementType) && (ze = yo)
                : (ze = Uv));
          if (ze && (ze = ze(e, Q))) {
            go(I, ze, n, $);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              sr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Bl(Q) : window), e)) {
          case 'focusin':
            (vo(ce) || ce.contentEditable === 'true') && ((Pa = ce), (Tr = Q), (Xl = null));
            break;
          case 'focusout':
            Xl = Tr = Pa = null;
            break;
          case 'mousedown':
            Cr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Cr = !1), Ro(I, n, $));
            break;
          case 'selectionchange':
            if (jv) break;
          case 'keydown':
          case 'keyup':
            Ro(I, n, $);
        }
        var Se;
        if (Sr)
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
          Wa
            ? mo(e, n) && (Te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Te = 'onCompositionStart');
        (Te &&
          (co &&
            n.locale !== 'ko' &&
            (Wa || Te !== 'onCompositionStart'
              ? Te === 'onCompositionEnd' && Wa && (Se = lo())
              : ((Qn = $), (hr = 'value' in Qn ? Qn.value : Qn.textContent), (Wa = !0))),
          (ce = _u(Q, Te)),
          0 < ce.length &&
            ((Te = new ro(Te, e, null, n, $)),
            I.push({ event: Te, listeners: ce }),
            Se ? (Te.data = Se) : ((Se = ho(n)), Se !== null && (Te.data = Se)))),
          (Se = zv ? _v(e, n) : Dv(e, n)) &&
            ((Te = _u(Q, 'onBeforeInput')),
            0 < Te.length &&
              ((ce = new ro('onBeforeInput', 'beforeinput', null, n, $)),
              I.push({ event: ce, listeners: Te }),
              (ce.data = Se))),
          Eg(I, e, Q, n, $));
      }
      Id(I, t);
    });
  }
  function hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _u(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          u === null ||
          ((l = Ul(e, n)),
          l != null && a.unshift(hi(e, l, u)),
          (l = Ul(e, t)),
          l != null && a.push(hi(e, l, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Mg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function tm(e, t, n, a, l) {
    for (var u = t._reactName, S = []; n !== null && n !== a; ) {
      var M = n,
        U = M.alternate,
        Q = M.stateNode;
      if (((M = M.tag), U !== null && U === a)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        Q === null ||
        ((U = Q),
        l
          ? ((Q = Ul(n, u)), Q != null && S.unshift(hi(n, Q, U)))
          : l || ((Q = Ul(n, u)), Q != null && S.push(hi(n, Q, U)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var Rg = /\r\n?/g,
    Ag = /\u0000|\uFFFD/g;
  function nm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Rg,
        `
`
      )
      .replace(Ag, '');
  }
  function am(e, t) {
    return ((t = nm(t)), nm(e) === t);
  }
  function He(e, t, n, a, l, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || ka(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && ka(e, '' + a);
        break;
      case 'className':
        Ni(e, 'class', a);
        break;
      case 'tabIndex':
        Ni(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ni(e, n, a);
        break;
      case 'style':
        to(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Ni(e, 'data', a);
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
        ((a = Ui('' + a)), e.setAttribute(n, a));
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
              ? (t !== 'input' && He(e, t, 'name', l.name, l, null),
                He(e, t, 'formEncType', l.formEncType, l, null),
                He(e, t, 'formMethod', l.formMethod, l, null),
                He(e, t, 'formTarget', l.formTarget, l, null))
              : (He(e, t, 'encType', l.encType, l, null),
                He(e, t, 'method', l.method, l, null),
                He(e, t, 'target', l.target, l, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((a = Ui('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = pn);
        break;
      case 'onScroll':
        a != null && Ee('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ee('scrollend', e);
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
        ((n = Ui('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Ee('beforetoggle', e), Ee('toggle', e), wi(e, 'popover', a));
        break;
      case 'xlinkActuate':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        yn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        yn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        wi(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = tv.get(n) || n), wi(e, n, a));
    }
  }
  function Fs(e, t, n, a, l, u) {
    switch (n) {
      case 'style':
        to(e, a, u);
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
          ? ka(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && ka(e, '' + a);
        break;
      case 'onScroll':
        a != null && Ee('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ee('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = pn);
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
        if (!Kc.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((l = n.endsWith('Capture')),
              (t = n.slice(2, l ? n.length - 7 : void 0)),
              (u = e[bt] || null),
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : wi(e, n, a);
          }
    }
  }
  function vt(e, t, n) {
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
        (Ee('error', e), Ee('load', e));
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
                  He(e, t, u, S, n, null);
              }
          }
        (l && He(e, t, 'srcSet', n.srcSet, n, null), a && He(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Ee('invalid', e);
        var M = (u = S = l = null),
          U = null,
          Q = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var $ = n[a];
            if ($ != null)
              switch (a) {
                case 'name':
                  l = $;
                  break;
                case 'type':
                  S = $;
                  break;
                case 'checked':
                  U = $;
                  break;
                case 'defaultChecked':
                  Q = $;
                  break;
                case 'value':
                  u = $;
                  break;
                case 'defaultValue':
                  M = $;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if ($ != null) throw Error(x(137, t));
                  break;
                default:
                  He(e, t, a, $, n, null);
              }
          }
        Wc(e, u, M, U, Q, S, l, !1);
        return;
      case 'select':
        (Ee('invalid', e), (a = S = u = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((M = n[l]), M != null))
            switch (l) {
              case 'value':
                u = M;
                break;
              case 'defaultValue':
                S = M;
                break;
              case 'multiple':
                a = M;
              default:
                He(e, t, l, M, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!a),
          t != null ? Ja(e, !!a, t, !1) : n != null && Ja(e, !!a, n, !0));
        return;
      case 'textarea':
        (Ee('invalid', e), (u = l = a = null));
        for (S in n)
          if (n.hasOwnProperty(S) && ((M = n[S]), M != null))
            switch (S) {
              case 'value':
                a = M;
                break;
              case 'defaultValue':
                l = M;
                break;
              case 'children':
                u = M;
                break;
              case 'dangerouslySetInnerHTML':
                if (M != null) throw Error(x(91));
                break;
              default:
                He(e, t, S, M, n, null);
            }
        Ic(e, a, l, u);
        return;
      case 'option':
        for (U in n)
          if (n.hasOwnProperty(U) && ((a = n[U]), a != null))
            switch (U) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                He(e, t, U, a, n, null);
            }
        return;
      case 'dialog':
        (Ee('beforetoggle', e), Ee('toggle', e), Ee('cancel', e), Ee('close', e));
        break;
      case 'iframe':
      case 'object':
        Ee('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < mi.length; a++) Ee(mi[a], e);
        break;
      case 'image':
        (Ee('error', e), Ee('load', e));
        break;
      case 'details':
        Ee('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ee('error', e), Ee('load', e));
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
                He(e, t, Q, a, n, null);
            }
        return;
      default:
        if (cr(t)) {
          for ($ in n)
            n.hasOwnProperty($) && ((a = n[$]), a !== void 0 && Fs(e, t, $, a, n, void 0));
          return;
        }
    }
    for (M in n) n.hasOwnProperty(M) && ((a = n[M]), a != null && He(e, t, M, a, n, null));
  }
  function zg(e, t, n, a) {
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
          M = null,
          U = null,
          Q = null,
          $ = null;
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
                a.hasOwnProperty(k) || He(e, t, k, null, a, I);
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
                $ = k;
                break;
              case 'value':
                S = k;
                break;
              case 'defaultValue':
                M = k;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (k != null) throw Error(x(137, t));
                break;
              default:
                k !== I && He(e, t, Z, k, a, I);
            }
        }
        rr(e, S, M, U, Q, $, u, l);
        return;
      case 'select':
        k = S = M = Z = null;
        for (u in n)
          if (((U = n[u]), n.hasOwnProperty(u) && U != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                k = U;
              default:
                a.hasOwnProperty(u) || He(e, t, u, null, a, U);
            }
        for (l in a)
          if (((u = a[l]), (U = n[l]), a.hasOwnProperty(l) && (u != null || U != null)))
            switch (l) {
              case 'value':
                Z = u;
                break;
              case 'defaultValue':
                M = u;
                break;
              case 'multiple':
                S = u;
              default:
                u !== U && He(e, t, l, u, a, U);
            }
        ((t = M),
          (n = S),
          (a = k),
          Z != null
            ? Ja(e, !!n, Z, !1)
            : !!a != !!n && (t != null ? Ja(e, !!n, t, !0) : Ja(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        k = Z = null;
        for (M in n)
          if (((l = n[M]), n.hasOwnProperty(M) && l != null && !a.hasOwnProperty(M)))
            switch (M) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                He(e, t, M, null, a, l);
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
                l !== u && He(e, t, S, l, a, u);
            }
        Pc(e, Z, k);
        return;
      case 'option':
        for (var re in n)
          if (((Z = n[re]), n.hasOwnProperty(re) && Z != null && !a.hasOwnProperty(re)))
            switch (re) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                He(e, t, re, null, a, Z);
            }
        for (U in a)
          if (((Z = a[U]), (k = n[U]), a.hasOwnProperty(U) && Z !== k && (Z != null || k != null)))
            switch (U) {
              case 'selected':
                e.selected = Z && typeof Z != 'function' && typeof Z != 'symbol';
                break;
              default:
                He(e, t, U, Z, a, k);
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
            n.hasOwnProperty(me) && Z != null && !a.hasOwnProperty(me) && He(e, t, me, null, a, Z));
        for (Q in a)
          if (((Z = a[Q]), (k = n[Q]), a.hasOwnProperty(Q) && Z !== k && (Z != null || k != null)))
            switch (Q) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(x(137, t));
                break;
              default:
                He(e, t, Q, Z, a, k);
            }
        return;
      default:
        if (cr(t)) {
          for (var Le in n)
            ((Z = n[Le]),
              n.hasOwnProperty(Le) &&
                Z !== void 0 &&
                !a.hasOwnProperty(Le) &&
                Fs(e, t, Le, void 0, a, Z));
          for ($ in a)
            ((Z = a[$]),
              (k = n[$]),
              !a.hasOwnProperty($) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                Fs(e, t, $, Z, a, k));
          return;
        }
    }
    for (var V in n)
      ((Z = n[V]),
        n.hasOwnProperty(V) && Z != null && !a.hasOwnProperty(V) && He(e, t, V, null, a, Z));
    for (I in a)
      ((Z = a[I]),
        (k = n[I]),
        !a.hasOwnProperty(I) || Z === k || (Z == null && k == null) || He(e, t, I, Z, a, k));
  }
  function lm(e) {
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
  function _g() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          u = l.transferSize,
          S = l.initiatorType,
          M = l.duration;
        if (u && M && lm(S)) {
          for (S = 0, M = l.responseEnd, a += 1; a < n.length; a++) {
            var U = n[a],
              Q = U.startTime;
            if (Q > M) break;
            var $ = U.transferSize,
              I = U.initiatorType;
            $ && lm(I) && ((U = U.responseEnd), (S += $ * (U < M ? 1 : (M - Q) / (U - Q))));
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
  var $s = null,
    Ws = null;
  function Du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function im(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function um(e, t) {
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
  function Ps(e, t) {
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
  var Is = null;
  function Dg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Is ? !1 : ((Is = e), !0)) : ((Is = null), !1);
  }
  var rm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Og = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    sm = typeof Promise == 'function' ? Promise : void 0,
    wg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof sm < 'u'
          ? function (e) {
              return sm.resolve(null).then(e).catch(Ng);
            }
          : rm;
  function Ng(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ra(e) {
    return e === 'head';
  }
  function cm(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(l), Ml(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') vi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), vi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              M = u.nodeName;
            (u[Nl] ||
              M === 'SCRIPT' ||
              M === 'STYLE' ||
              (M === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && vi(e.ownerDocument.body);
      n = l;
    } while (n);
    Ml(t);
  }
  function om(e, t) {
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
  function ec(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (ec(n), ir(n));
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
  function Bg(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Nl])
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
      if (((e = kt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ug(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = kt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function fm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = kt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function tc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function nc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function Hg(e, t) {
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
  function kt(e) {
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
  var ac = null;
  function dm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return kt(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function mm(e) {
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
  function hm(e, t, n) {
    switch (((t = Du(n)), e)) {
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
  function vi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ir(e);
  }
  var Ft = new Map(),
    vm = new Set();
  function Ou(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Bn = K.d;
  K.d = { f: Lg, r: jg, D: Gg, C: Yg, L: qg, m: Vg, X: Qg, S: Xg, M: Zg };
  function Lg() {
    var e = Bn.f(),
      t = bu();
    return e || t;
  }
  function jg(e) {
    var t = Qa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? wf(t) : Bn.r(e);
  }
  var bl = typeof document > 'u' ? null : document;
  function gm(e, t, n) {
    var a = bl;
    if (a && typeof t == 'string' && t) {
      var l = qt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
        vm.has(l) ||
          (vm.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement('link')), vt(t, 'link', e), ct(t), a.head.appendChild(t))));
    }
  }
  function Gg(e) {
    (Bn.D(e), gm('dns-prefetch', e, null));
  }
  function Yg(e, t) {
    (Bn.C(e, t), gm('preconnect', e, t));
  }
  function qg(e, t, n) {
    Bn.L(e, t, n);
    var a = bl;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + qt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (l += '[imagesizes="' + qt(n.imageSizes) + '"]'))
        : (l += '[href="' + qt(e) + '"]');
      var u = l;
      switch (t) {
        case 'style':
          u = Tl(e);
          break;
        case 'script':
          u = Cl(e);
      }
      Ft.has(u) ||
        ((e = p(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Ft.set(u, e),
        a.querySelector(l) !== null ||
          (t === 'style' && a.querySelector(gi(u))) ||
          (t === 'script' && a.querySelector(yi(u))) ||
          ((t = a.createElement('link')), vt(t, 'link', e), ct(t), a.head.appendChild(t)));
    }
  }
  function Vg(e, t) {
    Bn.m(e, t);
    var n = bl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + qt(a) + '"][href="' + qt(e) + '"]',
        u = l;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Cl(e);
      }
      if (
        !Ft.has(u) &&
        ((e = p({ rel: 'modulepreload', href: e }, t)), Ft.set(u, e), n.querySelector(l) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(yi(u))) return;
        }
        ((a = n.createElement('link')), vt(a, 'link', e), ct(a), n.head.appendChild(a));
      }
    }
  }
  function Xg(e, t, n) {
    Bn.S(e, t, n);
    var a = bl;
    if (a && e) {
      var l = Za(a).hoistableStyles,
        u = Tl(e);
      t = t || 'default';
      var S = l.get(u);
      if (!S) {
        var M = { loading: 0, preload: null };
        if ((S = a.querySelector(gi(u)))) M.loading = 5;
        else {
          ((e = p({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Ft.get(u)) && lc(e, n));
          var U = (S = a.createElement('link'));
          (ct(U),
            vt(U, 'link', e),
            (U._p = new Promise(function (Q, $) {
              ((U.onload = Q), (U.onerror = $));
            })),
            U.addEventListener('load', function () {
              M.loading |= 1;
            }),
            U.addEventListener('error', function () {
              M.loading |= 2;
            }),
            (M.loading |= 4),
            wu(S, t, a));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: M }), l.set(u, S));
      }
    }
  }
  function Qg(e, t) {
    Bn.X(e, t);
    var n = bl;
    if (n && e) {
      var a = Za(n).hoistableScripts,
        l = Cl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(yi(l))),
        u ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Ft.get(l)) && ic(e, t),
          (u = n.createElement('script')),
          ct(u),
          vt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function Zg(e, t) {
    Bn.M(e, t);
    var n = bl;
    if (n && e) {
      var a = Za(n).hoistableScripts,
        l = Cl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(yi(l))),
        u ||
          ((e = p({ src: e, async: !0, type: 'module' }, t)),
          (t = Ft.get(l)) && ic(e, t),
          (u = n.createElement('script')),
          ct(u),
          vt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function ym(e, t, n, a) {
    var l = (l = ie.current) ? Ou(l) : null;
    if (!l) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Tl(n.href)),
            (n = Za(l).hoistableStyles),
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
          e = Tl(n.href);
          var u = Za(l).hoistableStyles,
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
              (u = l.querySelector(gi(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
              Ft.has(e) ||
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
                Ft.set(e, n),
                u || Kg(l, e, n, S.state))),
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
            ? ((t = Cl(n)),
              (n = Za(l).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function Tl(e) {
    return 'href="' + qt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function pm(e) {
    return p({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Kg(e, t, n, a) {
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
        vt(t, 'link', n),
        ct(t),
        e.head.appendChild(t));
  }
  function Cl(e) {
    return '[src="' + qt(e) + '"]';
  }
  function yi(e) {
    return 'script[async]' + e;
  }
  function Sm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + qt(n.href) + '"]');
          if (a) return ((t.instance = a), ct(a), a);
          var l = p({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            ct(a),
            vt(a, 'style', l),
            wu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = Tl(n.href);
          var u = e.querySelector(gi(l));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ct(u), u);
          ((a = pm(n)),
            (l = Ft.get(l)) && lc(a, l),
            (u = (e.ownerDocument || e).createElement('link')),
            ct(u));
          var S = u;
          return (
            (S._p = new Promise(function (M, U) {
              ((S.onload = M), (S.onerror = U));
            })),
            vt(u, 'link', a),
            (t.state.loading |= 4),
            wu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Cl(n.src)),
            (l = e.querySelector(yi(u)))
              ? ((t.instance = l), ct(l), l)
              : ((a = n),
                (l = Ft.get(u)) && ((a = p({}, n)), ic(a, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                ct(l),
                vt(l, 'link', a),
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
        ((a = t.instance), (t.state.loading |= 4), wu(a, n.precedence, e));
    return t.instance;
  }
  function wu(e, t, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        l = a.length ? a[a.length - 1] : null,
        u = l,
        S = 0;
      S < a.length;
      S++
    ) {
      var M = a[S];
      if (M.dataset.precedence === t) u = M;
      else if (u !== l) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function lc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ic(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Nu = null;
  function xm(e, t, n) {
    if (Nu === null) {
      var a = new Map(),
        l = (Nu = new Map());
      l.set(n, a);
    } else ((l = Nu), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (
        !(u[Nl] || u[ft] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var S = u.getAttribute(t) || '';
        S = e + S;
        var M = a.get(S);
        M ? M.push(u) : a.set(S, [u]);
      }
    }
    return a;
  }
  function Em(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Jg(e, t, n) {
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
  function bm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function kg(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Tl(a.href),
          u = t.querySelector(gi(l));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Bu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ct(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = pm(a)),
          (l = Ft.get(l)) && lc(a, l),
          (u = u.createElement('link')),
          ct(u));
        var S = u;
        ((S._p = new Promise(function (M, U) {
          ((S.onload = M), (S.onerror = U));
        })),
          vt(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Bu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var uc = 0;
  function Fg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Hu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Hu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && uc === 0 && (uc = 62500 * _g());
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Hu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > uc ? 50 : 800) + t
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
  function Bu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Hu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Uu = null;
  function Hu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Uu = new Map()), t.forEach($g, e), (Uu = null), Bu.call(e)));
  }
  function $g(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Uu.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Uu.set(e, n));
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
        (a = Bu.bind(this)),
        l.addEventListener('load', a),
        l.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var pi = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function Wg(e, t, n, a, l, u, S, M, U) {
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
      (this.expirationTimes = sn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = sn(0)),
      (this.hiddenUpdates = sn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function Tm(e, t, n, a, l, u, S, M, U, Q, $, I) {
    return (
      (e = new Wg(e, t, n, S, U, Q, $, I, M)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Bt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Gr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Xr(u),
      e
    );
  }
  function Cm(e) {
    return e ? ((e = tl), e) : tl;
  }
  function Mm(e, t, n, a, l, u) {
    ((l = Cm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = $n(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = Wn(e, a, t)),
      n !== null && (zt(n, e, t), $l(n, e, t)));
  }
  function Rm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rc(e, t) {
    (Rm(e, t), (e = e.alternate) && Rm(e, t));
  }
  function Am(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ea(e, 67108864);
      (t !== null && zt(t, e, 67108864), rc(e, 67108864));
    }
  }
  function zm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gt();
      t = qa(t);
      var n = Ea(e, t);
      (n !== null && zt(n, e, t), rc(e, t));
    }
  }
  var Lu = !0;
  function Pg(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 2), sc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function Ig(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 8), sc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function sc(e, t, n, a) {
    if (Lu) {
      var l = cc(a);
      if (l === null) (ks(e, t, a, ju, n), Dm(e, a));
      else if (t0(l, e, t, n, a)) a.stopPropagation();
      else if ((Dm(e, a), t & 4 && -1 < e0.indexOf(e))) {
        for (; l !== null; ) {
          var u = Qa(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Ye(u.pendingLanes);
                  if (S !== 0) {
                    var M = u;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - ve(S));
                      ((M.entanglements[1] |= U), (S &= ~U));
                    }
                    (mn(u), (De & 6) === 0 && ((xu = ut() + 500), di(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = Ea(u, 2)), M !== null && zt(M, u, 2), bu(), rc(u, 2));
            }
          if (((u = cc(a)), u === null && ks(e, t, a, ju, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else ks(e, t, a, null, n);
    }
  }
  function cc(e) {
    return ((e = fr(e)), oc(e));
  }
  var ju = null;
  function oc(e) {
    if (((ju = null), (e = Xa(e)), e !== null)) {
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
    return ((ju = e), null);
  }
  function _m(e) {
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
        switch (ja()) {
          case gn:
            return 2;
          case Ga:
            return 8;
          case qn:
          case Vn:
            return 32;
          case rn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fc = !1,
    sa = null,
    ca = null,
    oa = null,
    Si = new Map(),
    xi = new Map(),
    fa = [],
    e0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Dm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        sa = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ca = null;
        break;
      case 'mouseover':
      case 'mouseout':
        oa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Si.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        xi.delete(t.pointerId);
    }
  }
  function Ei(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = Qa(t)), t !== null && Am(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function t0(e, t, n, a, l) {
    switch (t) {
      case 'focusin':
        return ((sa = Ei(sa, e, t, n, a, l)), !0);
      case 'dragenter':
        return ((ca = Ei(ca, e, t, n, a, l)), !0);
      case 'mouseover':
        return ((oa = Ei(oa, e, t, n, a, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (Si.set(u, Ei(Si.get(u) || null, e, t, n, a, l)), !0);
      case 'gotpointercapture':
        return ((u = l.pointerId), xi.set(u, Ei(xi.get(u) || null, e, t, n, a, l)), !0);
    }
    return !1;
  }
  function Om(e) {
    var t = Xa(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Xc(e.priority, function () {
                zm(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Xc(e.priority, function () {
                zm(n);
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
  function Gu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = cc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((or = a), n.target.dispatchEvent(a), (or = null));
      } else return ((t = Qa(n)), t !== null && Am(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function wm(e, t, n) {
    Gu(e) && n.delete(t);
  }
  function n0() {
    ((fc = !1),
      sa !== null && Gu(sa) && (sa = null),
      ca !== null && Gu(ca) && (ca = null),
      oa !== null && Gu(oa) && (oa = null),
      Si.forEach(wm),
      xi.forEach(wm));
  }
  function Yu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      fc || ((fc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, n0)));
  }
  var qu = null;
  function Nm(e) {
    qu !== e &&
      ((qu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        qu === e && (qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != 'function') {
            if (oc(a || n) === null) continue;
            break;
          }
          var u = Qa(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            cs(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Ml(e) {
    function t(U) {
      return Yu(U, e);
    }
    (sa !== null && Yu(sa, e),
      ca !== null && Yu(ca, e),
      oa !== null && Yu(oa, e),
      Si.forEach(t),
      xi.forEach(t));
    for (var n = 0; n < fa.length; n++) {
      var a = fa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < fa.length && ((n = fa[0]), n.blockedOn === null); )
      (Om(n), n.blockedOn === null && fa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          S = l[bt] || null;
        if (typeof u == 'function') S || Nm(n);
        else if (S) {
          var M = null;
          if (u && u.hasAttribute('formAction')) {
            if (((l = u), (S = u[bt] || null))) M = S.formAction;
            else if (oc(l) !== null) continue;
          } else M = S.action;
          (typeof M == 'function' ? (n[a + 1] = M) : (n.splice(a, 3), (a -= 3)), Nm(n));
        }
      }
  }
  function Bm() {
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
  function dc(e) {
    this._internalRoot = e;
  }
  ((Vu.prototype.render = dc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        a = Gt();
      Mm(n, a, e, t, null, null);
    }),
    (Vu.prototype.unmount = dc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Mm(e.current, 2, null, e, null, null), bu(), (t[Va] = null));
        }
      }));
  function Vu(e) {
    this._internalRoot = e;
  }
  Vu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fa.length && t !== 0 && t < fa[n].priority; n++);
      (fa.splice(n, 0, e), n === 0 && Om(e));
    }
  };
  var Um = b.version;
  if (Um !== '19.2.5') throw Error(x(527, Um, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var a0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: q,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        ((ga = Xu.inject(a0)), (St = Xu));
      } catch {}
  }
  return (
    (Ti.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        a = '',
        l = Vf,
        u = Xf,
        S = Qf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = Tm(e, 1, !1, null, null, n, a, null, l, u, S, Bm)),
        (e[Va] = t.current),
        Js(e),
        new dc(t)
      );
    }),
    (Ti.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var a = !1,
        l = '',
        u = Vf,
        S = Xf,
        M = Qf,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (M = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = Tm(e, 1, !0, t, n ?? null, a, l, U, u, S, M, Bm)),
        (t.context = Cm(null)),
        (n = t.current),
        (a = Gt()),
        (a = qa(a)),
        (l = $n(a)),
        (l.callback = null),
        Wn(n, l, a),
        (n = a),
        (t.current.lanes = n),
        wt(t, n),
        mn(t),
        (e[Va] = t.current),
        Js(e),
        new Vu(t)
      );
    }),
    (Ti.version = '19.2.5'),
    Ti
  );
}
var Km;
function h0() {
  if (Km) return hc.exports;
  Km = 1;
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
  return (s(), (hc.exports = m0()), hc.exports);
}
var v0 = h0(),
  B = Oc();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Jm = 'popstate';
function km(s) {
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
function g0(s = {}) {
  function b(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: c } = i || x.location;
    return Ac(
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
    return typeof h == 'string' ? h : zi(h);
  }
  return p0(b, T, null, s);
}
function ke(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function hn(s, b) {
  if (!s) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function y0() {
  return Math.random().toString(36).substring(2, 10);
}
function Fm(s, b) {
  return {
    usr: s.state,
    key: s.key,
    idx: b,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Ac(s, b, T = null, x, h) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? zl(b) : b),
    state: T,
    key: (b && b.key) || x || y0(),
    unstable_mask: h,
  };
}
function zi({ pathname: s = '/', search: b = '', hash: T = '' }) {
  return (
    b && b !== '?' && (s += b.charAt(0) === '?' ? b : '?' + b),
    T && T !== '#' && (s += T.charAt(0) === '#' ? T : '#' + T),
    s
  );
}
function zl(s) {
  let b = {};
  if (s) {
    let T = s.indexOf('#');
    T >= 0 && ((b.hash = s.substring(T)), (s = s.substring(0, T)));
    let x = s.indexOf('?');
    (x >= 0 && ((b.search = s.substring(x)), (s = s.substring(0, x))), s && (b.pathname = s));
  }
  return b;
}
function p0(s, b, T, x = {}) {
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
    ((m = E), c && c({ action: f, location: v.location, delta: R }));
  }
  function g(E, R) {
    f = 'PUSH';
    let D = km(E) ? E : Ac(v.location, E, R);
    m = o() + 1;
    let w = Fm(D, m),
      L = v.createHref(D.unstable_mask || D);
    try {
      d.pushState(w, '', L);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      h.location.assign(L);
    }
    i && c && c({ action: f, location: v.location, delta: 1 });
  }
  function r(E, R) {
    f = 'REPLACE';
    let D = km(E) ? E : Ac(v.location, E, R);
    m = o();
    let w = Fm(D, m),
      L = v.createHref(D.unstable_mask || D);
    (d.replaceState(w, '', L), i && c && c({ action: f, location: v.location, delta: 0 }));
  }
  function y(E) {
    return S0(E);
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
        h.addEventListener(Jm, p),
        (c = E),
        () => {
          (h.removeEventListener(Jm, p), (c = null));
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
    push: g,
    replace: r,
    go(E) {
      return d.go(E);
    },
  };
  return v;
}
function S0(s, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    ke(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof s == 'string' ? s : zi(s);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function fh(s, b, T = '/') {
  return x0(s, b, T, !1);
}
function x0(s, b, T, x) {
  let h = typeof b == 'string' ? zl(b) : b,
    i = jn(h.pathname || '/', T);
  if (i == null) return null;
  let d = dh(s);
  E0(d);
  let f = null;
  for (let c = 0; f == null && c < d.length; ++c) {
    let m = w0(i);
    f = D0(d[c], m, x);
  }
  return f;
}
function dh(s, b = [], T = [], x = '', h = !1) {
  let i = (d, f, c = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && c) return;
      (ke(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let p = an([x, o.relativePath]),
      g = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (ke(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      dh(d.children, b, g, p, c)),
      !(d.path == null && !d.index) && b.push({ path: p, score: z0(p, d.index), routesMeta: g }));
  };
  return (
    s.forEach((d, f) => {
      var c;
      if (d.path === '' || !((c = d.path) != null && c.includes('?'))) i(d, f);
      else for (let m of mh(d.path)) i(d, f, !0, m);
    }),
    b
  );
}
function mh(s) {
  let b = s.split('/');
  if (b.length === 0) return [];
  let [T, ...x] = b,
    h = T.endsWith('?'),
    i = T.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = mh(x.join('/')),
    f = [];
  return (
    f.push(...d.map((c) => (c === '' ? i : [i, c].join('/')))),
    h && f.push(...d),
    f.map((c) => (s.startsWith('/') && c === '' ? '/' : c))
  );
}
function E0(s) {
  s.sort((b, T) =>
    b.score !== T.score
      ? T.score - b.score
      : _0(
          b.routesMeta.map((x) => x.childrenIndex),
          T.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var b0 = /^:[\w-]+$/,
  T0 = 3,
  C0 = 2,
  M0 = 1,
  R0 = 10,
  A0 = -2,
  $m = (s) => s === '*';
function z0(s, b) {
  let T = s.split('/'),
    x = T.length;
  return (
    T.some($m) && (x += A0),
    b && (x += C0),
    T.filter((h) => !$m(h)).reduce((h, i) => h + (b0.test(i) ? T0 : i === '' ? M0 : R0), x)
  );
}
function _0(s, b) {
  return s.length === b.length && s.slice(0, -1).every((x, h) => x === b[h])
    ? s[s.length - 1] - b[b.length - 1]
    : 0;
}
function D0(s, b, T = !1) {
  let { routesMeta: x } = s,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let c = x[f],
      m = f === x.length - 1,
      o = i === '/' ? b : b.slice(i.length) || '/',
      p = Fu({ path: c.relativePath, caseSensitive: c.caseSensitive, end: m }, o),
      g = c.route;
    if (
      (!p &&
        m &&
        T &&
        !x[x.length - 1].route.index &&
        (p = Fu({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, o)),
      !p)
    )
      return null;
    (Object.assign(h, p.params),
      d.push({
        params: h,
        pathname: an([i, p.pathname]),
        pathnameBase: H0(an([i, p.pathnameBase])),
        route: g,
      }),
      p.pathnameBase !== '/' && (i = an([i, p.pathnameBase])));
  }
  return d;
}
function Fu(s, b) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [T, x] = O0(s.path, s.caseSensitive, s.end),
    h = b.match(T);
  if (!h) return null;
  let i = h[0],
    d = i.replace(/(.)\/+$/, '$1'),
    f = h.slice(1);
  return {
    params: x.reduce((m, { paramName: o, isOptional: p }, g) => {
      if (o === '*') {
        let y = f[g] || '';
        d = i.slice(0, i.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const r = f[g];
      return (p && !r ? (m[o] = void 0) : (m[o] = (r || '').replace(/%2F/g, '/')), m);
    }, {}),
    pathname: i,
    pathnameBase: d,
    pattern: s,
  };
}
function O0(s, b = !1, T = !0) {
  hn(
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
function w0(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      hn(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      s
    );
  }
}
function jn(s, b) {
  if (b === '/') return s;
  if (!s.toLowerCase().startsWith(b.toLowerCase())) return null;
  let T = b.endsWith('/') ? b.length - 1 : b.length,
    x = s.charAt(T);
  return x && x !== '/' ? null : s.slice(T) || '/';
}
var N0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function B0(s, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof s == 'string' ? zl(s) : s,
    i;
  return (
    T ? ((T = vh(T)), T.startsWith('/') ? (i = Wm(T.substring(1), '/')) : (i = Wm(T, b))) : (i = b),
    { pathname: i, search: L0(x), hash: j0(h) }
  );
}
function Wm(s, b) {
  let T = $u(b).split('/');
  return (
    s.split('/').forEach((h) => {
      h === '..' ? T.length > 1 && T.pop() : h !== '.' && T.push(h);
    }),
    T.length > 1 ? T.join('/') : '/'
  );
}
function Sc(s, b, T, x) {
  return `Cannot include a '${s}' character in a manually specified \`to.${b}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function U0(s) {
  return s.filter((b, T) => T === 0 || (b.route.path && b.route.path.length > 0));
}
function hh(s) {
  let b = U0(s);
  return b.map((T, x) => (x === b.length - 1 ? T.pathname : T.pathnameBase));
}
function wc(s, b, T, x = !1) {
  let h;
  typeof s == 'string'
    ? (h = zl(s))
    : ((h = { ...s }),
      ke(!h.pathname || !h.pathname.includes('?'), Sc('?', 'pathname', 'search', h)),
      ke(!h.pathname || !h.pathname.includes('#'), Sc('#', 'pathname', 'hash', h)),
      ke(!h.search || !h.search.includes('#'), Sc('#', 'search', 'hash', h)));
  let i = s === '' || h.pathname === '',
    d = i ? '/' : h.pathname,
    f;
  if (d == null) f = T;
  else {
    let p = b.length - 1;
    if (!x && d.startsWith('..')) {
      let g = d.split('/');
      for (; g[0] === '..'; ) (g.shift(), (p -= 1));
      h.pathname = g.join('/');
    }
    f = p >= 0 ? b[p] : '/';
  }
  let c = B0(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && T.endsWith('/');
  return (!c.pathname.endsWith('/') && (m || o) && (c.pathname += '/'), c);
}
var vh = (s) => s.replace(/\/\/+/g, '/'),
  an = (s) => vh(s.join('/')),
  $u = (s) => s.replace(/\/+$/, ''),
  H0 = (s) => $u(s).replace(/^\/*/, '/'),
  L0 = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  j0 = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  G0 = class {
    constructor(s, b, T, x = !1) {
      ((this.status = s),
        (this.statusText = b || ''),
        (this.internal = x),
        T instanceof Error ? ((this.data = T.toString()), (this.error = T)) : (this.data = T));
    }
  };
function Y0(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function q0(s) {
  let b = s.map((T) => T.route.path).filter(Boolean);
  return an(b) || '/';
}
var gh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function yh(s, b) {
  let T = s;
  if (typeof T != 'string' || !N0.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (gh)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = jn(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      hn(
        !1,
        `<Link to="${T}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: T };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var ph = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(ph);
var V0 = ['GET', ...ph];
new Set(V0);
var _l = B.createContext(null);
_l.displayName = 'DataRouter';
var Wu = B.createContext(null);
Wu.displayName = 'DataRouterState';
var Sh = B.createContext(!1);
function X0() {
  return B.useContext(Sh);
}
var xh = B.createContext({ isTransitioning: !1 });
xh.displayName = 'ViewTransition';
var Q0 = B.createContext(new Map());
Q0.displayName = 'Fetchers';
var Z0 = B.createContext(null);
Z0.displayName = 'Await';
var Wt = B.createContext(null);
Wt.displayName = 'Navigation';
var _i = B.createContext(null);
_i.displayName = 'Location';
var Gn = B.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Gn.displayName = 'Route';
var Nc = B.createContext(null);
Nc.displayName = 'RouteError';
var Eh = 'REACT_ROUTER_ERROR',
  K0 = 'REDIRECT',
  J0 = 'ROUTE_ERROR_RESPONSE';
function k0(s) {
  if (s.startsWith(`${Eh}:${K0}:{`))
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
function F0(s) {
  if (s.startsWith(`${Eh}:${J0}:{`))
    try {
      let b = JSON.parse(s.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new G0(b.status, b.statusText, b.data);
    } catch {}
}
function $0(s, { relative: b } = {}) {
  ke(Di(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = B.useContext(Wt),
    { hash: h, pathname: i, search: d } = Oi(s, { relative: b }),
    f = i;
  return (
    T !== '/' && (f = i === '/' ? T : an([T, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function Di() {
  return B.useContext(_i) != null;
}
function Yn() {
  return (
    ke(Di(), 'useLocation() may be used only in the context of a <Router> component.'),
    B.useContext(_i).location
  );
}
var bh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Th(s) {
  B.useContext(Wt).static || B.useLayoutEffect(s);
}
function W0() {
  let { isDataRoute: s } = B.useContext(Gn);
  return s ? oy() : P0();
}
function P0() {
  ke(Di(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = B.useContext(_l),
    { basename: b, navigator: T } = B.useContext(Wt),
    { matches: x } = B.useContext(Gn),
    { pathname: h } = Yn(),
    i = JSON.stringify(hh(x)),
    d = B.useRef(!1);
  return (
    Th(() => {
      d.current = !0;
    }),
    B.useCallback(
      (c, m = {}) => {
        if ((hn(d.current, bh), !d.current)) return;
        if (typeof c == 'number') {
          T.go(c);
          return;
        }
        let o = wc(c, JSON.parse(i), h, m.relative === 'path');
        (s == null && b !== '/' && (o.pathname = o.pathname === '/' ? b : an([b, o.pathname])),
          (m.replace ? T.replace : T.push)(o, m.state, m));
      },
      [b, T, i, h, s]
    )
  );
}
B.createContext(null);
function Oi(s, { relative: b } = {}) {
  let { matches: T } = B.useContext(Gn),
    { pathname: x } = Yn(),
    h = JSON.stringify(hh(T));
  return B.useMemo(() => wc(s, JSON.parse(h), x, b === 'path'), [s, h, x, b]);
}
function I0(s, b) {
  return Ch(s, b);
}
function Ch(s, b, T) {
  var E;
  ke(Di(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = B.useContext(Wt),
    { matches: h } = B.useContext(Gn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    c = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let R = (m && m.path) || '';
    Rh(
      f,
      !m || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let o = Yn(),
    p;
  if (b) {
    let R = typeof b == 'string' ? zl(b) : b;
    (ke(
      c === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (p = R));
  } else p = o;
  let g = p.pathname || '/',
    r = g;
  if (c !== '/') {
    let R = c.replace(/^\//, '').split('/');
    r = '/' + g.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let y = fh(s, { pathname: r });
  (hn(m || y != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `),
    hn(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = ly(
    y &&
      y.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, d, R.params),
          pathname: an([
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
              : an([
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
    ? B.createElement(
        _i.Provider,
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
        v
      )
    : v;
}
function ey() {
  let s = cy(),
    b = Y0(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
    T = s instanceof Error ? s.stack : null,
    x = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: x },
    i = { padding: '2px 4px', backgroundColor: x },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', s),
    (d = B.createElement(
      B.Fragment,
      null,
      B.createElement('p', null, '💿 Hey developer 👋'),
      B.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        B.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        B.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    B.createElement(
      B.Fragment,
      null,
      B.createElement('h2', null, 'Unexpected Application Error!'),
      B.createElement('h3', { style: { fontStyle: 'italic' } }, b),
      T ? B.createElement('pre', { style: h }, T) : null,
      d
    )
  );
}
var ty = B.createElement(ey, null),
  Mh = class extends B.Component {
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
        const T = F0(s.digest);
        T && (s = T);
      }
      let b =
        s !== void 0
          ? B.createElement(
              Gn.Provider,
              { value: this.props.routeContext },
              B.createElement(Nc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? B.createElement(ny, { error: s }, b) : b;
    }
  };
Mh.contextType = Sh;
var xc = new WeakMap();
function ny({ children: s, error: b }) {
  let { basename: T } = B.useContext(Wt);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = k0(b.digest);
    if (x) {
      let h = xc.get(b);
      if (h) throw h;
      let i = yh(x.location, T);
      if (gh && !xc.get(b))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (xc.set(b, d), d);
        }
      return B.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return s;
}
function ay({ routeContext: s, match: b, children: T }) {
  let x = B.useContext(_l);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    B.createElement(Gn.Provider, { value: s }, T)
  );
}
function ly(s, b = [], T) {
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
    (ke(
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
        let { loaderData: g, errors: r } = x,
          y = p.route.loader && !g.hasOwnProperty(p.route.id) && (!r || r[p.route.id] === void 0);
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
            var g, r;
            c(o, {
              location: x.location,
              params:
                ((r = (g = x.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: q0(x.matches),
              errorInfo: p,
            });
          }
        : void 0;
  return h.reduceRight((o, p, g) => {
    let r,
      y = !1,
      v = null,
      E = null;
    x &&
      ((r = i && p.route.id ? i[p.route.id] : void 0),
      (v = p.route.errorElement || ty),
      d &&
        (f < 0 && g === 0
          ? (Rh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (E = null))
          : f === g && ((y = !0), (E = p.route.hydrateFallbackElement || null))));
    let R = b.concat(h.slice(0, g + 1)),
      D = () => {
        let w;
        return (
          r
            ? (w = v)
            : y
              ? (w = E)
              : p.route.Component
                ? (w = B.createElement(p.route.Component, null))
                : p.route.element
                  ? (w = p.route.element)
                  : (w = o),
          B.createElement(ay, {
            match: p,
            routeContext: { outlet: o, matches: R, isDataRoute: x != null },
            children: w,
          })
        );
      };
    return x && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? B.createElement(Mh, {
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
function Bc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iy(s) {
  let b = B.useContext(_l);
  return (ke(b, Bc(s)), b);
}
function uy(s) {
  let b = B.useContext(Wu);
  return (ke(b, Bc(s)), b);
}
function ry(s) {
  let b = B.useContext(Gn);
  return (ke(b, Bc(s)), b);
}
function Uc(s) {
  let b = ry(s),
    T = b.matches[b.matches.length - 1];
  return (ke(T.route.id, `${s} can only be used on routes that contain a unique "id"`), T.route.id);
}
function sy() {
  return Uc('useRouteId');
}
function cy() {
  var x;
  let s = B.useContext(Nc),
    b = uy('useRouteError'),
    T = Uc('useRouteError');
  return s !== void 0 ? s : (x = b.errors) == null ? void 0 : x[T];
}
function oy() {
  let { router: s } = iy('useNavigate'),
    b = Uc('useNavigate'),
    T = B.useRef(!1);
  return (
    Th(() => {
      T.current = !0;
    }),
    B.useCallback(
      async (h, i = {}) => {
        (hn(T.current, bh),
          T.current &&
            (typeof h == 'number'
              ? await s.navigate(h)
              : await s.navigate(h, { fromRouteId: b, ...i })));
      },
      [s, b]
    )
  );
}
var Pm = {};
function Rh(s, b, T) {
  !b && !Pm[s] && ((Pm[s] = !0), hn(!1, T));
}
B.memo(fy);
function fy({ routes: s, future: b, state: T, isStatic: x, onError: h }) {
  return Ch(s, void 0, { state: T, isStatic: x, onError: h });
}
function zc(s) {
  ke(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function dy({
  basename: s = '/',
  children: b = null,
  location: T,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: d,
}) {
  ke(
    !Di(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = s.replace(/^\/*/, '/'),
    c = B.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = zl(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: p = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: y,
    } = T,
    v = B.useMemo(() => {
      let E = jn(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: p, state: g, key: r, unstable_mask: y },
            navigationType: x,
          };
    }, [f, m, o, p, g, r, x, y]);
  return (
    hn(
      v != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : B.createElement(
          Wt.Provider,
          { value: c },
          B.createElement(_i.Provider, { children: b, value: v })
        )
  );
}
function my({ children: s, location: b }) {
  return I0(_c(s), b);
}
function _c(s, b = []) {
  let T = [];
  return (
    B.Children.forEach(s, (x, h) => {
      if (!B.isValidElement(x)) return;
      let i = [...b, h];
      if (x.type === B.Fragment) {
        T.push.apply(T, _c(x.props.children, i));
        return;
      }
      (ke(
        x.type === zc,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ke(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
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
      (x.props.children && (d.children = _c(x.props.children, i)), T.push(d));
    }),
    T
  );
}
var Ku = 'get',
  Ju = 'application/x-www-form-urlencoded';
function Pu(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function hy(s) {
  return Pu(s) && s.tagName.toLowerCase() === 'button';
}
function vy(s) {
  return Pu(s) && s.tagName.toLowerCase() === 'form';
}
function gy(s) {
  return Pu(s) && s.tagName.toLowerCase() === 'input';
}
function yy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function py(s, b) {
  return s.button === 0 && (!b || b === '_self') && !yy(s);
}
var Qu = null;
function Sy() {
  if (Qu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Qu = !1));
    } catch {
      Qu = !0;
    }
  return Qu;
}
var xy = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Ec(s) {
  return s != null && !xy.has(s)
    ? (hn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ju}"`
      ),
      null)
    : s;
}
function Ey(s, b) {
  let T, x, h, i, d;
  if (vy(s)) {
    let f = s.getAttribute('action');
    ((x = f ? jn(f, b) : null),
      (T = s.getAttribute('method') || Ku),
      (h = Ec(s.getAttribute('enctype')) || Ju),
      (i = new FormData(s)));
  } else if (hy(s) || (gy(s) && (s.type === 'submit' || s.type === 'image'))) {
    let f = s.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = s.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = c ? jn(c, b) : null),
      (T = s.getAttribute('formmethod') || f.getAttribute('method') || Ku),
      (h = Ec(s.getAttribute('formenctype')) || Ec(f.getAttribute('enctype')) || Ju),
      (i = new FormData(f, s)),
      !Sy())
    ) {
      let { name: m, type: o, value: p } = s;
      if (o === 'image') {
        let g = m ? `${m}.` : '';
        (i.append(`${g}x`, '0'), i.append(`${g}y`, '0'));
      } else m && i.append(m, p);
    }
  } else {
    if (Pu(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((T = Ku), (x = null), (h = Ju), (d = s));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: T.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Hc(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function Ah(s, b, T, x) {
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
        : b && jn(h.pathname, b) === '/'
          ? (h.pathname = `${$u(b)}/_root.${x}`)
          : (h.pathname = `${$u(h.pathname)}.${x}`),
    h
  );
}
async function by(s, b) {
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
function Ty(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Cy(s, b, T) {
  let x = await Promise.all(
    s.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let d = await by(i, T);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return zy(
    x
      .flat(1)
      .filter(Ty)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function Im(s, b, T, x, h, i) {
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
            let g = c.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((p = T[0]) == null ? void 0 : p.params) || {},
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
function My(s, b, { includeHydrateFallback: T } = {}) {
  return Ry(
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
function Ry(s) {
  return [...new Set(s)];
}
function Ay(s) {
  let b = {},
    T = Object.keys(s).sort();
  for (let x of T) b[x] = s[x];
  return b;
}
function zy(s, b) {
  let T = new Set();
  return (
    new Set(b),
    s.reduce((x, h) => {
      let i = JSON.stringify(Ay(h));
      return (T.has(i) || (T.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Lc() {
  let s = B.useContext(_l);
  return (Hc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function _y() {
  let s = B.useContext(Wu);
  return (
    Hc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var jc = B.createContext(void 0);
jc.displayName = 'FrameworkContext';
function Gc() {
  let s = B.useContext(jc);
  return (Hc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function Dy(s, b) {
  let T = B.useContext(jc),
    [x, h] = B.useState(!1),
    [i, d] = B.useState(!1),
    { onFocus: f, onBlur: c, onMouseEnter: m, onMouseLeave: o, onTouchStart: p } = b,
    g = B.useRef(null);
  (B.useEffect(() => {
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
    B.useEffect(() => {
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
    y = () => {
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
            onBlur: Ci(c, y),
            onMouseEnter: Ci(m, r),
            onMouseLeave: Ci(o, y),
            onTouchStart: Ci(p, r),
          },
        ]
    : [!1, g, {}];
}
function Ci(s, b) {
  return (T) => {
    (s && s(T), T.defaultPrevented || b(T));
  };
}
function Oy({ page: s, ...b }) {
  let T = X0(),
    { router: x } = Lc(),
    h = B.useMemo(() => fh(x.routes, s, x.basename), [x.routes, s, x.basename]);
  return h
    ? T
      ? B.createElement(Ny, { page: s, matches: h, ...b })
      : B.createElement(By, { page: s, matches: h, ...b })
    : null;
}
function wy(s) {
  let { manifest: b, routeModules: T } = Gc(),
    [x, h] = B.useState([]);
  return (
    B.useEffect(() => {
      let i = !1;
      return (
        Cy(s, b, T).then((d) => {
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
function Ny({ page: s, matches: b, ...T }) {
  let x = Yn(),
    { future: h } = Gc(),
    { basename: i } = Lc(),
    d = B.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let f = Ah(s, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        c = !1,
        m = [];
      for (let o of b)
        typeof o.route.shouldRevalidate == 'function' ? (c = !0) : m.push(o.route.id);
      return (
        c && m.length > 0 && f.searchParams.set('_routes', m.join(',')),
        [f.pathname + f.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, s, x, b]);
  return B.createElement(
    B.Fragment,
    null,
    d.map((f) => B.createElement('link', { key: f, rel: 'prefetch', as: 'fetch', href: f, ...T }))
  );
}
function By({ page: s, matches: b, ...T }) {
  let x = Yn(),
    { future: h, manifest: i, routeModules: d } = Gc(),
    { basename: f } = Lc(),
    { loaderData: c, matches: m } = _y(),
    o = B.useMemo(() => Im(s, b, m, i, x, 'data'), [s, b, m, i, x]),
    p = B.useMemo(() => Im(s, b, m, i, x, 'assets'), [s, b, m, i, x]),
    g = B.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (b.forEach((D) => {
          var L;
          let w = i.routes[D.route.id];
          !w ||
            !w.hasLoader ||
            ((!o.some((C) => C.route.id === D.route.id) &&
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
      let R = Ah(s, f, h.unstable_trailingSlashAwareDataRequests, 'data');
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
    r = B.useMemo(() => My(p, i), [p, i]),
    y = wy(p);
  return B.createElement(
    B.Fragment,
    null,
    g.map((v) => B.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...T })),
    r.map((v) => B.createElement('link', { key: v, rel: 'modulepreload', href: v, ...T })),
    y.map(({ key: v, link: E }) =>
      B.createElement('link', {
        key: v,
        nonce: T.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? T.crossOrigin,
      })
    )
  );
}
function Uy(...s) {
  return (b) => {
    s.forEach((T) => {
      typeof T == 'function' ? T(b) : T != null && (T.current = b);
    });
  };
}
var Hy =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  Hy && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Ly({ basename: s, children: b, unstable_useTransitions: T, window: x }) {
  let h = B.useRef();
  h.current == null && (h.current = g0({ window: x, v5Compat: !0 }));
  let i = h.current,
    [d, f] = B.useState({ action: i.action, location: i.location }),
    c = B.useCallback(
      (m) => {
        T === !1 ? f(m) : B.startTransition(() => f(m));
      },
      [T]
    );
  return (
    B.useLayoutEffect(() => i.listen(c), [i, c]),
    B.createElement(dy, {
      basename: s,
      children: b,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: T,
    })
  );
}
var zh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _h = B.forwardRef(function (
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
      viewTransition: g,
      unstable_defaultShouldRevalidate: r,
      ...y
    },
    v
  ) {
    let { basename: E, navigator: R, unstable_useTransitions: D } = B.useContext(Wt),
      w = typeof o == 'string' && zh.test(o),
      L = yh(o, E);
    o = L.to;
    let C = $0(o, { relative: h }),
      z = Yn(),
      _ = null;
    if (f) {
      let ee = wc(f, [], z.unstable_mask ? z.unstable_mask.pathname : '/', !0);
      (E !== '/' && (ee.pathname = ee.pathname === '/' ? E : an([E, ee.pathname])),
        (_ = R.createHref(ee)));
    }
    let [A, N, O] = Dy(x, y),
      H = qy(o, {
        replace: d,
        unstable_mask: f,
        state: c,
        target: m,
        preventScrollReset: p,
        relative: h,
        viewTransition: g,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: D,
      });
    function G(ee) {
      (b && b(ee), ee.defaultPrevented || H(ee));
    }
    let J = !(L.isExternal || i),
      te = B.createElement('a', {
        ...y,
        ...O,
        href: (J ? _ : void 0) || L.absoluteURL || C,
        onClick: J ? G : b,
        ref: Uy(v, N),
        target: m,
        'data-discover': !w && T === 'render' ? 'true' : void 0,
      });
    return A && !w ? B.createElement(B.Fragment, null, te, B.createElement(Oy, { page: C })) : te;
  });
_h.displayName = 'Link';
var jy = B.forwardRef(function (
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
  let p = Oi(d, { relative: m.relative }),
    g = Yn(),
    r = B.useContext(Wu),
    { navigator: y, basename: v } = B.useContext(Wt),
    E = r != null && Ky(p) && f === !0,
    R = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname,
    D = g.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((D = D.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && v && (w = jn(w, v) || w));
  const L = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let C = D === R || (!h && D.startsWith(R) && D.charAt(L) === '/'),
    z = w != null && (w === R || (!h && w.startsWith(R) && w.charAt(R.length) === '/')),
    _ = { isActive: C, isPending: z, isTransitioning: E },
    A = C ? b : void 0,
    N;
  typeof x == 'function'
    ? (N = x(_))
    : (N = [x, C ? 'active' : null, z ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let O = typeof i == 'function' ? i(_) : i;
  return B.createElement(
    _h,
    { ...m, 'aria-current': A, className: N, ref: o, style: O, to: d, viewTransition: f },
    typeof c == 'function' ? c(_) : c
  );
});
jy.displayName = 'NavLink';
var Gy = B.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: b,
      navigate: T,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = Ku,
      action: f,
      onSubmit: c,
      relative: m,
      preventScrollReset: o,
      viewTransition: p,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    y
  ) => {
    let { unstable_useTransitions: v } = B.useContext(Wt),
      E = Qy(),
      R = Zy(f, { relative: m }),
      D = d.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof f == 'string' && zh.test(f),
      L = (C) => {
        if ((c && c(C), C.defaultPrevented)) return;
        C.preventDefault();
        let z = C.nativeEvent.submitter,
          _ = (z == null ? void 0 : z.getAttribute('formmethod')) || d,
          A = () =>
            E(z || C.currentTarget, {
              fetcherKey: b,
              method: _,
              navigate: T,
              replace: h,
              state: i,
              relative: m,
              preventScrollReset: o,
              viewTransition: p,
              unstable_defaultShouldRevalidate: g,
            });
        v && T !== !1 ? B.startTransition(() => A()) : A();
      };
    return B.createElement('form', {
      ref: y,
      method: D,
      action: R,
      onSubmit: x ? c : L,
      ...r,
      'data-discover': !w && s === 'render' ? 'true' : void 0,
    });
  }
);
Gy.displayName = 'Form';
function Yy(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dh(s) {
  let b = B.useContext(_l);
  return (ke(b, Yy(s)), b);
}
function qy(
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
  let o = W0(),
    p = Yn(),
    g = Oi(s, { relative: d });
  return B.useCallback(
    (r) => {
      if (py(r, b)) {
        r.preventDefault();
        let y = T !== void 0 ? T : zi(p) === zi(g),
          v = () =>
            o(s, {
              replace: y,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: d,
              viewTransition: f,
              unstable_defaultShouldRevalidate: c,
            });
        m ? B.startTransition(() => v()) : v();
      }
    },
    [p, o, g, T, x, h, b, s, i, d, f, c, m]
  );
}
var Vy = 0,
  Xy = () => `__${String(++Vy)}__`;
function Qy() {
  let { router: s } = Dh('useSubmit'),
    { basename: b } = B.useContext(Wt),
    T = sy(),
    x = s.fetch,
    h = s.navigate;
  return B.useCallback(
    async (i, d = {}) => {
      let { action: f, method: c, encType: m, formData: o, body: p } = Ey(i, b);
      if (d.navigate === !1) {
        let g = d.fetcherKey || Xy();
        await x(g, T, d.action || f, {
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
function Zy(s, { relative: b } = {}) {
  let { basename: T } = B.useContext(Wt),
    x = B.useContext(Gn);
  ke(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...Oi(s || '.', { relative: b }) },
    d = Yn();
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
    T !== '/' && (i.pathname = i.pathname === '/' ? T : an([T, i.pathname])),
    zi(i)
  );
}
function Ky(s, { relative: b } = {}) {
  let T = B.useContext(xh);
  ke(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Dh('useViewTransitionState'),
    h = Oi(s, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = jn(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = jn(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return Fu(h.pathname, d) != null || Fu(h.pathname, i) != null;
}
const Jy = 'modulepreload',
  ky = function (s) {
    return '/ochimono-game/' + s;
  },
  eh = {},
  Fy = function (b, T, x) {
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
          if (((m = ky(m)), m in eh)) return;
          eh[m] = !0;
          const o = m.endsWith('.css'),
            p = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${p}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = o ? 'stylesheet' : Jy),
            o || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = m),
            c && g.setAttribute('nonce', c),
            document.head.appendChild(g),
            o)
          )
            return new Promise((r, y) => {
              (g.addEventListener('load', r),
                g.addEventListener('error', () => y(new Error(`Unable to preload CSS for ${m}`))));
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
function $y(s = {}) {
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
  async function p() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await Fy(async () => {
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
              f.addEventListener('controlling', (y) => {
                y.isUpdate && window.location.reload();
              }),
            T == null || T());
        };
        (f.addEventListener('installed', (y) => {
          typeof y.isUpdate > 'u'
            ? typeof y.isExternal < 'u' && y.isExternal
              ? r()
              : !g && (x == null || x())
            : y.isUpdate || x == null || x();
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
  return ((c = p()), o);
}
function Wy(s = {}) {
  const {
      immediate: b = !0,
      onNeedRefresh: T,
      onOfflineReady: x,
      onRegistered: h,
      onRegisteredSW: i,
      onRegisterError: d,
    } = s,
    [f, c] = B.useState(!1),
    [m, o] = B.useState(!1),
    [p] = B.useState(() =>
      $y({
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
const Py = '_banner_1qruq_1',
  Iy = '_message_1qruq_21',
  ep = '_button_1qruq_25',
  bc = { banner: Py, message: Iy, button: ep },
  tp = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: b,
    } = Wy();
    return s
      ? W.jsxs('div', {
          className: bc.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            W.jsx('span', { className: bc.message, children: '新しいバージョンがあります' }),
            W.jsx('button', {
              type: 'button',
              className: bc.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  np = '_index_r8hfh_1',
  ap = { index: np },
  lp = '_layout_u1qv8_1',
  ip = '_top_bar_placeholder_u1qv8_10',
  up = '_main_u1qv8_15',
  rp = '_field_wrapper_u1qv8_23',
  sp = '_skill_button_wrapper_u1qv8_28',
  Ua = {
    layout: lp,
    top_bar_placeholder: ip,
    main: up,
    field_wrapper: rp,
    skill_button_wrapper: sp,
  },
  cp = '_surface_6wr97_1',
  op = '_canvas_layer_6wr97_11',
  fp = '_game_over_line_6wr97_22',
  Tc = { surface: cp, canvas_layer: op, game_over_line: fp },
  dp = '_layer_z1h0v_1',
  mp = '_effect_z1h0v_7',
  hp = '_ring_z1h0v_12',
  vp = '_score_z1h0v_24',
  gp = '_special_z1h0v_36',
  Mi = { layer: dp, effect: mp, ring: hp, score: vp, special: gp },
  Oh = B.memo(
    B.forwardRef((s, b) => {
      const T = B.useRef(null),
        x = B.useCallback((i) => {
          const d = T.current;
          if (!d) return;
          const f = document.createElement('div');
          ((f.className = `${Mi.effect} ${i.isSpecial ? Mi.special : ''}`),
            (f.style.left = `${i.x}px`),
            (f.style.top = `${i.y}px`),
            f.setAttribute('aria-hidden', 'true'));
          const c = document.createElement('span');
          ((c.className = Mi.ring), f.appendChild(c));
          const m = () => {
            (c.removeEventListener('animationend', m), f.parentNode === d && d.removeChild(f));
          };
          if ((c.addEventListener('animationend', m), i.score > 0)) {
            const o = document.createElement('span');
            ((o.className = Mi.score), (o.textContent = `+${i.score}`), f.appendChild(o));
          }
          d.appendChild(f);
        }, []),
        h = B.useCallback(() => {
          const i = T.current;
          if (i) for (; i.firstChild; ) i.removeChild(i.firstChild);
        }, []);
      return (
        B.useImperativeHandle(b, () => ({ add: x, clear: h }), [x, h]),
        W.jsx('div', { ref: T, className: Mi.layer, 'aria-hidden': 'true' })
      );
    })
  );
Oh.displayName = 'MergeEffect';
const yp = '_line_yymkz_1',
  pp = '_preview_wrap_yymkz_11',
  Sp = '_preview_yymkz_11',
  Cc = { line: yp, preview_wrap: pp, preview: Sp },
  xp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  wh = B.memo(
    B.forwardRef(({ initialX: s, fieldHeight: b, item: T }, x) => {
      const h = B.useRef(null),
        i = B.useRef(null),
        d = B.useRef((T == null ? void 0 : T.radius) ?? 0);
      if (
        ((d.current = (T == null ? void 0 : T.radius) ?? 0),
        B.useImperativeHandle(
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
      return W.jsxs(W.Fragment, {
        children: [
          W.jsx('div', {
            ref: h,
            className: Cc.line,
            style: { height: `${b}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          W.jsx('div', {
            ref: i,
            className: Cc.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${s - T.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: W.jsx('img', {
              src: xp(T.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Cc.preview,
            }),
          }),
        ],
      });
    })
  );
wh.displayName = 'DropIndicator';
const Ep = (s) => Math.max(0, Math.min(1, s)),
  bp = ({
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
    const o = B.useRef(null),
      p = B.useRef(null),
      g = B.useRef(0.5),
      r = B.useRef(null),
      y = B.useRef(h);
    y.current = h;
    const v = B.useRef(b);
    v.current = b;
    const E = B.useCallback((A) => {
        const N = y.current,
          O = v.current;
        return N ? Math.max(N.radius, Math.min(O - N.radius, A * O)) : A * O;
      }, []),
      R = B.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = p.current) == null || A.setX(E(g.current)));
          }));
      }, [E]),
      D = B.useCallback(
        (A) => {
          const N = o.current;
          if (!N) return;
          const O = N.getBoundingClientRect(),
            H = Ep((A - O.left) / O.width);
          ((g.current = H), R());
        },
        [R]
      );
    (B.useEffect(() => {
      ((g.current = 0.5), R());
    }, [h == null ? void 0 : h.level, R]),
      B.useEffect(
        () => () => {
          r.current !== null && (window.cancelAnimationFrame(r.current), (r.current = null));
        },
        []
      ));
    const w = i && !c,
      L = (A) => {
        var N;
        c || (w && (D(A.clientX), (N = o.current) == null || N.setPointerCapture(A.pointerId)));
      },
      C = (A) => {
        if (!c) {
          if (A.buttons === 0 && A.pointerType === 'mouse') {
            D(A.clientX);
            return;
          }
          D(A.clientX);
        }
      },
      z = (A) => {
        var N;
        if (c) {
          const O = o.current;
          if (!O) return;
          const H = O.getBoundingClientRect();
          m(A.clientX - H.left, A.clientY - H.top);
          return;
        }
        w &&
          (D(A.clientX),
          d(g.current),
          (N = o.current) == null || N.releasePointerCapture(A.pointerId));
      },
      _ = E(0.5);
    return W.jsxs('div', {
      ref: o,
      className: Tc.surface,
      style: { width: `${b}px`, height: `${T}px` },
      onPointerDown: L,
      onPointerMove: C,
      onPointerUp: z,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        W.jsx('div', { ref: s, className: Tc.canvas_layer }),
        W.jsx('div', {
          className: Tc.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        w ? W.jsx(wh, { ref: p, initialX: _, fieldHeight: T, item: h }) : null,
        W.jsx(Oh, { ref: f }),
      ],
    });
  },
  Tp = '_overlay_efysu_1',
  Cp = '_number_efysu_11',
  th = { overlay: Tp, number: Cp },
  Nh = B.memo(({ seconds: s }) =>
    s === null
      ? null
      : W.jsx('div', {
          className: th.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: W.jsx('span', { className: th.number, children: s }, s),
        })
  );
Nh.displayName = 'CountdownOverlay';
const Mp = '_overlay_o79hb_1',
  Rp = '_panel_o79hb_13',
  Ap = '_new_record_o79hb_24',
  zp = '_title_o79hb_32',
  _p = '_scores_o79hb_40',
  Dp = '_row_o79hb_46',
  Op = '_gold_o79hb_64',
  wp = '_restart_o79hb_69',
  Un = {
    overlay: Mp,
    panel: Rp,
    new_record: Ap,
    title: zp,
    scores: _p,
    row: Dp,
    gold: Op,
    restart: wp,
  },
  Np = ({ score: s, bestScore: b, isNewRecord: T, onRestart: x }) =>
    W.jsx('div', {
      className: Un.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: W.jsxs('div', {
        className: Un.panel,
        children: [
          T ? W.jsx('p', { className: Un.new_record, children: '🎉 新記録！' }) : null,
          W.jsx('h2', { className: Un.title, children: 'GAME OVER' }),
          W.jsxs('dl', {
            className: Un.scores,
            children: [
              W.jsxs('div', {
                className: Un.row,
                children: [
                  W.jsx('dt', { children: 'スコア' }),
                  W.jsx('dd', { className: T ? Un.gold : '', children: s }),
                ],
              }),
              W.jsxs('div', {
                className: Un.row,
                children: [W.jsx('dt', { children: 'ベスト' }), W.jsx('dd', { children: b })],
              }),
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: Un.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Bp = '_root_1svqx_1',
  Up = '_message_1svqx_13',
  Hp = '_icon_1svqx_30',
  Lp = '_text_1svqx_34',
  jp = '_cancel_1svqx_38',
  Ri = { root: Bp, message: Up, icon: Hp, text: Lp, cancel: jp },
  Bh = B.memo(({ active: s, onCancel: b }) =>
    s
      ? W.jsxs('div', {
          className: Ri.root,
          children: [
            W.jsxs('div', {
              className: Ri.message,
              children: [
                W.jsx('span', { className: Ri.icon, children: '🧲' }),
                W.jsx('span', { className: Ri.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            W.jsx('button', {
              type: 'button',
              className: Ri.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
Bh.displayName = 'MagnetSelectingOverlay';
const Gp = '_gravity_flip_14l5j_1',
  Yp = '_arrow_14l5j_9',
  nh = { gravity_flip: Gp, arrow: Yp },
  Uh = B.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? W.jsx('div', {
          className: nh.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, T) =>
            W.jsx(
              'span',
              {
                className: nh.arrow,
                style: { left: `${(T + 1) * 14}%`, animationDelay: `${T * 0.12}s` },
                children: '⬆',
              },
              T
            )
          ),
        })
      : null
  );
Uh.displayName = 'SkillEffectOverlay';
const qp = '_overlay_1xsci_1',
  Vp = '_panel_1xsci_12',
  Xp = '_title_1xsci_22',
  Qp = '_lead_1xsci_30',
  Zp = '_start_1xsci_37',
  Ai = { overlay: qp, panel: Vp, title: Xp, lead: Qp, start: Zp },
  Kp = ({ onStart: s }) =>
    W.jsx('div', {
      className: Ai.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: W.jsxs('div', {
        className: Ai.panel,
        children: [
          W.jsxs('h2', {
            className: Ai.title,
            children: ['💖🍓🐱', W.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          W.jsxs('p', {
            className: Ai.lead,
            children: [
              '同じアイテム同士をくっつけて',
              W.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: Ai.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  Jp = '_backdrop_1we7g_1',
  kp = '_drawer_1we7g_11',
  Fp = '_header_1we7g_23',
  $p = '_title_1we7g_30',
  Wp = '_close_1we7g_38',
  Pp = '_row_1we7g_54',
  Ip = '_row_label_1we7g_62',
  e1 = '_footer_1we7g_68',
  t1 = '_version_1we7g_74',
  nn = {
    backdrop: Jp,
    drawer: kp,
    header: Fp,
    title: $p,
    close: Wp,
    row: Pp,
    row_label: Ip,
    footer: e1,
    version: t1,
  },
  n1 = '_toggle_1ap46_1',
  a1 = { toggle: n1 },
  Hh = B.memo(({ isOn: s, onToggle: b }) =>
    W.jsx('button', {
      type: 'button',
      className: a1.toggle,
      onClick: b,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: W.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
Hh.displayName = 'SoundToggle';
const l1 = '_toggle_15urq_1',
  i1 = { toggle: l1 },
  Yc = [{ id: 'gumi', label: 'グミ' }],
  qc = 'gumi',
  Lh = (s) => typeof s == 'string' && Yc.some((b) => b.id === s),
  jh = B.memo(({ value: s, onChange: b }) => {
    const T = (x) => {
      const h = x.target.value;
      Lh(h) && b(h);
    };
    return W.jsx('select', {
      className: i1.toggle,
      value: s,
      onChange: T,
      'aria-label': 'アセットテーマ',
      children: Yc.map((x) => W.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
jh.displayName = 'ThemeToggle';
const Gh = B.memo(
  ({ open: s, onClose: b, themeId: T, onChangeTheme: x, isSoundOn: h, onToggleSound: i }) =>
    s
      ? W.jsx('div', {
          className: nn.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: W.jsxs('aside', {
            className: nn.drawer,
            onClick: (d) => d.stopPropagation(),
            children: [
              W.jsxs('header', {
                className: nn.header,
                children: [
                  W.jsx('h2', { className: nn.title, children: '設定' }),
                  W.jsx('button', {
                    type: 'button',
                    className: nn.close,
                    onClick: b,
                    'aria-label': '設定を閉じる',
                    children: '✕',
                  }),
                ],
              }),
              W.jsxs('div', {
                className: nn.row,
                children: [
                  W.jsx('span', { className: nn.row_label, children: 'テーマ' }),
                  W.jsx(jh, { value: T, onChange: x }),
                ],
              }),
              W.jsxs('div', {
                className: nn.row,
                children: [
                  W.jsx('span', { className: nn.row_label, children: 'サウンド' }),
                  W.jsx(Hh, { isOn: h, onToggle: i }),
                ],
              }),
              W.jsx('footer', {
                className: nn.footer,
                children: W.jsxs('span', { className: nn.version, children: ['v', '1.0.13'] }),
              }),
            ],
          }),
        })
      : null
);
Gh.displayName = 'SettingsDrawer';
const u1 = '_button_dhp3t_1',
  r1 = '_gauge_dhp3t_23',
  s1 = '_gauge_track_dhp3t_31',
  c1 = '_gauge_fill_dhp3t_37',
  o1 = '_icon_dhp3t_45',
  f1 = '_ready_dhp3t_53',
  Rl = { button: u1, gauge: r1, gauge_track: s1, gauge_fill: c1, icon: o1, ready: f1 },
  Dc = 32,
  ah = 2 * Math.PI * Dc,
  Yh = B.memo(({ ratio: s, isReady: b, onClick: T }) => {
    const x = Math.max(0, Math.min(1, s)),
      h = ah * (1 - x);
    return W.jsxs('button', {
      type: 'button',
      className: `${Rl.button} ${b ? Rl.ready : ''}`,
      onClick: T,
      disabled: !b,
      'aria-label': b ? '必殺技を選択' : `必殺技ゲージ ${Math.round(x * 100)}%`,
      children: [
        W.jsxs('svg', {
          className: Rl.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: [
            W.jsx('circle', { className: Rl.gauge_track, cx: '40', cy: '40', r: Dc }),
            W.jsx('circle', {
              className: Rl.gauge_fill,
              cx: '40',
              cy: '40',
              r: Dc,
              strokeDasharray: ah,
              strokeDashoffset: h,
              transform: 'rotate(-90 40 40)',
            }),
          ],
        }),
        W.jsx('span', { className: Rl.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
Yh.displayName = 'SkillButton';
const d1 = '_backdrop_1jz1a_1',
  m1 = '_menu_1jz1a_12',
  h1 = '_title_1jz1a_21',
  v1 = '_choices_1jz1a_30',
  g1 = '_choice_1jz1a_30',
  y1 = '_choice_icon_1jz1a_60',
  p1 = '_choice_label_1jz1a_67',
  S1 = '_choice_desc_1jz1a_74',
  x1 = '_cancel_1jz1a_80',
  Hn = {
    backdrop: d1,
    menu: m1,
    title: h1,
    choices: v1,
    choice: g1,
    choice_icon: y1,
    choice_label: p1,
    choice_desc: S1,
    cancel: x1,
  },
  E1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを引き寄せ',
    },
  ],
  qh = B.memo(({ open: s, onSelect: b, onClose: T }) =>
    s
      ? W.jsx('div', {
          className: Hn.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: W.jsxs('div', {
            className: Hn.menu,
            onClick: (x) => x.stopPropagation(),
            children: [
              W.jsx('h2', { className: Hn.title, children: '必殺技を選択' }),
              W.jsx('div', {
                className: Hn.choices,
                children: E1.map((x) =>
                  W.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: Hn.choice,
                      onClick: () => b(x.kind),
                      children: [
                        W.jsx('span', {
                          className: Hn.choice_icon,
                          'aria-hidden': 'true',
                          children: x.icon,
                        }),
                        W.jsx('span', { className: Hn.choice_label, children: x.label }),
                        W.jsx('span', { className: Hn.choice_desc, children: x.description }),
                      ],
                    },
                    x.kind
                  )
                ),
              }),
              W.jsx('button', {
                type: 'button',
                className: Hn.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
qh.displayName = 'SkillMenu';
const b1 = '_top_bar_15roj_1',
  T1 = '_right_15roj_12',
  C1 = '_settings_15roj_18',
  Mc = { top_bar: b1, right: T1, settings: C1 },
  M1 = '_next_1n5pn_1',
  R1 = '_label_1n5pn_7',
  A1 = '_thumb_1n5pn_14',
  z1 = '_image_1n5pn_27',
  Zu = { next: M1, label: R1, thumb: A1, image: z1 },
  _1 = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Vh = B.memo(({ item: s }) =>
    W.jsxs('div', {
      className: Zu.next,
      children: [
        W.jsx('span', { className: Zu.label, children: 'NEXT' }),
        W.jsx('div', {
          className: Zu.thumb,
          'data-testid': 'next-item',
          children: s
            ? W.jsx('img', { src: _1(s.svgPath), alt: s.name, className: Zu.image })
            : null,
        }),
      ],
    })
  );
Vh.displayName = 'NextItemPreview';
const D1 = '_score_display_pgke7_1',
  O1 = '_row_pgke7_7',
  w1 = '_label_pgke7_13',
  N1 = '_value_pgke7_20',
  B1 = '_label_small_pgke7_28',
  U1 = '_value_small_pgke7_35',
  Ba = { score_display: D1, row: O1, label: w1, value: N1, label_small: B1, value_small: U1 },
  Xh = B.memo(({ score: s, bestScore: b }) =>
    W.jsxs('div', {
      className: Ba.score_display,
      children: [
        W.jsxs('div', {
          className: Ba.row,
          children: [
            W.jsx('span', { className: Ba.label, children: 'SCORE' }),
            W.jsx('span', { className: Ba.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        W.jsxs('div', {
          className: Ba.row,
          children: [
            W.jsx('span', { className: Ba.label_small, children: 'BEST' }),
            W.jsx('span', { className: Ba.value_small, children: b }),
          ],
        }),
      ],
    })
  );
Xh.displayName = 'ScoreDisplay';
const H1 = ({ score: s, bestScore: b, nextItem: T, onOpenSettings: x }) =>
  W.jsxs('header', {
    className: Mc.top_bar,
    children: [
      W.jsx(Xh, { score: s, bestScore: b }),
      W.jsxs('div', {
        className: Mc.right,
        children: [
          W.jsx(Vh, { item: T }),
          W.jsx('button', {
            type: 'button',
            className: Mc.settings,
            onClick: x,
            'aria-label': '設定を開く',
            children: W.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var ku = { exports: {} };
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
 */ var L1 = ku.exports,
  lh;
function j1() {
  return (
    lh ||
      ((lh = 1),
      (function (s, b) {
        (function (x, h) {
          s.exports = h();
        })(L1, function () {
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
                          for (var g in p)
                            m &&
                            p[g] &&
                            p[g].constructor === Object &&
                            (!d[g] || d[g].constructor === Object)
                              ? ((d[g] = d[g] || {}), h.extend(d[g], m, p[g]))
                              : (d[g] = p[g]);
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
                      for (var g = 0; g < p.length; g += 1) {
                        var r = p[g];
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
                          var o, p = new Array(arguments.length), g = 0, r = arguments.length;
                          g < r;
                          g++
                        )
                          p[g] = arguments[g];
                        for (g = 0; g < d.length; g += 1) {
                          var y = d[g].apply(o, p);
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
                          !d && typeof Hm < 'u' && (d = Hm.decomp));
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
                    var g = c[p],
                      r = { x: g.x, y: g.y, index: p, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (c, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      p = [];
                    return (
                      c.replace(o, function (g, r, y) {
                        p.push({ x: parseFloat(r), y: parseFloat(y) });
                      }),
                      i.create(p, m)
                    );
                  }),
                  (i.centre = function (c) {
                    for (
                      var m = i.area(c, !0), o = { x: 0, y: 0 }, p, g, r, y = 0;
                      y < c.length;
                      y++
                    )
                      ((r = (y + 1) % c.length),
                        (p = d.cross(c[y], c[r])),
                        (g = d.mult(d.add(c[y], c[r]), p)),
                        (o = d.add(o, g)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (c) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < c.length; o++)
                      ((m.x += c[o].x), (m.y += c[o].y));
                    return d.div(m, c.length);
                  }),
                  (i.area = function (c, m) {
                    for (var o = 0, p = c.length - 1, g = 0; g < c.length; g++)
                      ((o += (c[p].x - c[g].x) * (c[p].y + c[g].y)), (p = g));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (c, m) {
                    for (var o = 0, p = 0, g = c, r, y, v = 0; v < g.length; v++)
                      ((y = (v + 1) % g.length),
                        (r = Math.abs(d.cross(g[y], g[v]))),
                        (o += r * (d.dot(g[y], g[y]) + d.dot(g[y], g[v]) + d.dot(g[v], g[v]))),
                        (p += r));
                    return (m / 6) * (o / p);
                  }),
                  (i.translate = function (c, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var p = c.length,
                      g = m.x * o,
                      r = m.y * o,
                      y;
                    for (y = 0; y < p; y++) ((c[y].x += g), (c[y].y += r));
                    return c;
                  }),
                  (i.rotate = function (c, m, o) {
                    if (m !== 0) {
                      var p = Math.cos(m),
                        g = Math.sin(m),
                        r = o.x,
                        y = o.y,
                        v = c.length,
                        E,
                        R,
                        D,
                        w;
                      for (w = 0; w < v; w++)
                        ((E = c[w]),
                          (R = E.x - r),
                          (D = E.y - y),
                          (E.x = r + (R * p - D * g)),
                          (E.y = y + (R * g + D * p)));
                      return c;
                    }
                  }),
                  (i.contains = function (c, m) {
                    for (var o = m.x, p = m.y, g = c.length, r = c[g - 1], y, v = 0; v < g; v++) {
                      if (((y = c[v]), (o - r.x) * (y.y - r.y) + (p - r.y) * (r.x - y.x) > 0))
                        return !1;
                      r = y;
                    }
                    return !0;
                  }),
                  (i.scale = function (c, m, o, p) {
                    if (m === 1 && o === 1) return c;
                    p = p || i.centre(c);
                    for (var g, r, y = 0; y < c.length; y++)
                      ((g = c[y]),
                        (r = d.sub(g, p)),
                        (c[y].x = p.x + r.x * m),
                        (c[y].y = p.y + r.y * o));
                    return c;
                  }),
                  (i.chamfer = function (c, m, o, p, g) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (p = p || 2),
                      (g = g || 14));
                    for (var r = [], y = 0; y < c.length; y++) {
                      var v = c[y - 1 >= 0 ? y - 1 : c.length - 1],
                        E = c[y],
                        R = c[(y + 1) % c.length],
                        D = m[y < m.length ? y : m.length - 1];
                      if (D === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        L = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        C = Math.sqrt(2 * Math.pow(D, 2)),
                        z = d.mult(f.clone(w), D),
                        _ = d.normalise(d.mult(d.add(w, L), 0.5)),
                        A = d.sub(E, d.mult(_, C)),
                        N = o;
                      (o === -1 && (N = Math.pow(D, 0.32) * 1.75),
                        (N = f.clamp(N, p, g)),
                        N % 2 === 1 && (N += 1));
                      for (var O = Math.acos(d.dot(w, L)), H = O / N, G = 0; G < N; G++)
                        r.push(d.add(d.rotate(z, H * G), A));
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
                      g,
                      r,
                      y;
                    if (o < 3) return null;
                    for (p = 0; p < o; p++)
                      if (
                        ((g = (p + 1) % o),
                        (r = (p + 2) % o),
                        (y = (c[g].x - c[p].x) * (c[r].y - c[g].y)),
                        (y -= (c[g].y - c[p].y) * (c[r].x - c[g].x)),
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
                      g;
                    for (
                      c = c.slice(0),
                        c.sort(function (r, y) {
                          var v = r.x - y.x;
                          return v !== 0 ? v : r.y - y.y;
                        }),
                        g = 0;
                      g < c.length;
                      g += 1
                    ) {
                      for (
                        p = c[g];
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], p) <= 0;
                      )
                        o.pop();
                      o.push(p);
                    }
                    for (g = c.length - 1; g >= 0; g -= 1) {
                      for (
                        p = c[g];
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
                      v = m.extend(y, r);
                    return (g(v, r), v);
                  }),
                  (i.nextGroup = function (r) {
                    return r ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return ((i._nextCategory = i._nextCategory << 1), i._nextCategory);
                  }));
                var g = function (r, y) {
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
                ((i.set = function (r, y, v) {
                  var E;
                  typeof y == 'string' && ((E = y), (y = {}), (y[E] = v));
                  for (E in y)
                    if (Object.prototype.hasOwnProperty.call(y, E))
                      switch (((v = y[E]), E)) {
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
                  (i.setStatic = function (r, y) {
                    for (var v = 0; v < r.parts.length; v++) {
                      var E = r.parts[v];
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
                    (y[0].body === r ? (r.vertices = y) : (r.vertices = d.create(y, r)),
                      (r.axes = p.fromVertices(r.vertices)),
                      (r.area = d.area(r.vertices)),
                      i.setMass(r, r.density * r.area));
                    var v = d.centre(r.vertices);
                    (d.translate(r.vertices, v, -1),
                      i.setInertia(r, i._inertiaScale * d.inertia(r.vertices, r.mass)),
                      d.translate(r.vertices, r.position),
                      o.update(r.bounds, r.vertices, r.velocity));
                  }),
                  (i.setParts = function (r, y, v) {
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
                      if (((v = typeof v < 'u' ? v : !0), v)) {
                        var D = [];
                        for (E = 0; E < y.length; E++) D = D.concat(y[E].vertices);
                        d.clockwiseSort(D);
                        var w = d.hull(D),
                          L = d.centre(w);
                        (i.setVertices(r, w), d.translate(r.vertices, L));
                      }
                      var C = i._totalProperties(r);
                      ((r.area = C.area),
                        (r.parent = r),
                        (r.position.x = C.centre.x),
                        (r.position.y = C.centre.y),
                        (r.positionPrev.x = C.centre.x),
                        (r.positionPrev.y = C.centre.y),
                        i.setMass(r, C.mass),
                        i.setInertia(r, C.inertia),
                        i.setPosition(r, C.centre));
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
                    var E = f.sub(y, r.position);
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
                  (i.setAngle = function (r, y, v) {
                    var E = y - r.angle;
                    v
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
                    var v = r.deltaTime / i._baseDelta;
                    ((r.positionPrev.x = r.position.x - y.x * v),
                      (r.positionPrev.y = r.position.y - y.y * v),
                      (r.velocity.x = (r.position.x - r.positionPrev.x) / v),
                      (r.velocity.y = (r.position.y - r.positionPrev.y) / v),
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
                    i.setAngularVelocity(r, m.sign(i.getAngularVelocity(r)) * y);
                  }),
                  (i.translate = function (r, y, v) {
                    i.setPosition(r, f.add(r.position, y), v);
                  }),
                  (i.rotate = function (r, y, v, E) {
                    if (!v) i.setAngle(r, r.angle + y, E);
                    else {
                      var R = Math.cos(y),
                        D = Math.sin(y),
                        w = r.position.x - v.x,
                        L = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (w * R - L * D), y: v.y + (w * D + L * R) }, E),
                        i.setAngle(r, r.angle + y, E));
                    }
                  }),
                  (i.scale = function (r, y, v, E) {
                    var R = 0,
                      D = 0;
                    E = E || r.position;
                    for (var w = 0; w < r.parts.length; w++) {
                      var L = r.parts[w];
                      (d.scale(L.vertices, y, v, E),
                        (L.axes = p.fromVertices(L.vertices)),
                        (L.area = d.area(L.vertices)),
                        i.setMass(L, r.density * L.area),
                        d.translate(L.vertices, { x: -L.position.x, y: -L.position.y }),
                        i.setInertia(L, i._inertiaScale * d.inertia(L.vertices, L.mass)),
                        d.translate(L.vertices, { x: L.position.x, y: L.position.y }),
                        w > 0 && ((R += L.area), (D += L.inertia)),
                        (L.position.x = E.x + (L.position.x - E.x) * y),
                        (L.position.y = E.y + (L.position.y - E.y) * v),
                        o.update(L.bounds, L.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (i.setMass(r, r.density * R), i.setInertia(r, D))),
                      r.circleRadius &&
                        (y === v ? (r.circleRadius *= y) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, y) {
                    y = (typeof y < 'u' ? y : 1e3 / 60) * r.timeScale;
                    var v = y * y,
                      E = i._timeCorrection ? y / (r.deltaTime || y) : 1,
                      R = 1 - r.frictionAir * (y / m._baseDelta),
                      D = (r.position.x - r.positionPrev.x) * E,
                      w = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = D * R + (r.force.x / r.mass) * v),
                      (r.velocity.y = w * R + (r.force.y / r.mass) * v),
                      (r.positionPrev.x = r.position.x),
                      (r.positionPrev.y = r.position.y),
                      (r.position.x += r.velocity.x),
                      (r.position.y += r.velocity.y),
                      (r.deltaTime = y),
                      (r.angularVelocity =
                        (r.angle - r.anglePrev) * R * E + (r.torque / r.inertia) * v),
                      (r.anglePrev = r.angle),
                      (r.angle += r.angularVelocity));
                    for (var L = 0; L < r.parts.length; L++) {
                      var C = r.parts[L];
                      (d.translate(C.vertices, r.velocity),
                        L > 0 && ((C.position.x += r.velocity.x), (C.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (d.rotate(C.vertices, r.angularVelocity, r.position),
                          p.rotate(C.axes, r.angularVelocity),
                          L > 0 &&
                            f.rotateAbout(C.position, r.angularVelocity, r.position, C.position)),
                        o.update(C.bounds, C.vertices, r.velocity));
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
                    var E = { x: y.x - r.position.x, y: y.y - r.position.y };
                    ((r.force.x += v.x), (r.force.y += v.y), (r.torque += E.x * v.y - E.y * v.x));
                  }),
                  (i._totalProperties = function (r) {
                    for (
                      var y = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                        v = r.parts.length === 1 ? 0 : 1;
                      v < r.parts.length;
                      v++
                    ) {
                      var E = r.parts[v],
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
                  for (var o = c.split(' '), p, g = 0; g < o.length; g++)
                    ((p = o[g]),
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
                      var g = f.events[o[p]],
                        r = [];
                      if (m && g) for (var y = 0; y < g.length; y++) g[y] !== m && r.push(g[y]);
                      f.events[o[p]] = r;
                    }
                  }),
                  (i.trigger = function (f, c, m) {
                    var o,
                      p,
                      g,
                      r,
                      y = f.events;
                    if (y && d.keys(y).length > 0) {
                      (m || (m = {}), (o = c.split(' ')));
                      for (var v = 0; v < o.length; v++)
                        if (((p = o[v]), (g = y[p]), g)) {
                          ((r = d.clone(m, !1)), (r.name = p), (r.source = f));
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
                  (i.setModified = function (o, p, g, r) {
                    if (
                      ((o.isModified = p),
                      p &&
                        o.cache &&
                        ((o.cache.allBodies = null),
                        (o.cache.allConstraints = null),
                        (o.cache.allComposites = null)),
                      g && o.parent && i.setModified(o.parent, p, g, r),
                      r)
                    )
                      for (var y = 0; y < o.composites.length; y++) {
                        var v = o.composites[y];
                        i.setModified(v, p, g, r);
                      }
                  }),
                  (i.add = function (o, p) {
                    var g = [].concat(p);
                    d.trigger(o, 'beforeAdd', { object: p });
                    for (var r = 0; r < g.length; r++) {
                      var y = g[r];
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
                  (i.remove = function (o, p, g) {
                    var r = [].concat(p);
                    d.trigger(o, 'beforeRemove', { object: p });
                    for (var y = 0; y < r.length; y++) {
                      var v = r[y];
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
                    return (d.trigger(o, 'afterRemove', { object: p }), o);
                  }),
                  (i.addComposite = function (o, p) {
                    return (o.composites.push(p), (p.parent = o), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeComposite = function (o, p, g) {
                    var r = f.indexOf(o.composites, p);
                    if (r !== -1) {
                      var y = i.allBodies(p);
                      i.removeCompositeAt(o, r);
                      for (var v = 0; v < y.length; v++) y[v].sleepCounter = 0;
                    }
                    if (g)
                      for (var v = 0; v < o.composites.length; v++)
                        i.removeComposite(o.composites[v], p, !0);
                    return o;
                  }),
                  (i.removeCompositeAt = function (o, p) {
                    return (o.composites.splice(p, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.addBody = function (o, p) {
                    return (o.bodies.push(p), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.removeBody = function (o, p, g) {
                    var r = f.indexOf(o.bodies, p);
                    if ((r !== -1 && (i.removeBodyAt(o, r), (p.sleepCounter = 0)), g))
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
                  (i.removeConstraint = function (o, p, g) {
                    var r = f.indexOf(o.constraints, p);
                    if ((r !== -1 && i.removeConstraintAt(o, r), g))
                      for (var y = 0; y < o.composites.length; y++)
                        i.removeConstraint(o.composites[y], p, !0);
                    return o;
                  }),
                  (i.removeConstraintAt = function (o, p) {
                    return (o.constraints.splice(p, 1), i.setModified(o, !0, !0, !1), o);
                  }),
                  (i.clear = function (o, p, g) {
                    if (g)
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
                    for (var p = [].concat(o.bodies), g = 0; g < o.composites.length; g++)
                      p = p.concat(i.allBodies(o.composites[g]));
                    return (o.cache && (o.cache.allBodies = p), p);
                  }),
                  (i.allConstraints = function (o) {
                    if (o.cache && o.cache.allConstraints) return o.cache.allConstraints;
                    for (var p = [].concat(o.constraints), g = 0; g < o.composites.length; g++)
                      p = p.concat(i.allConstraints(o.composites[g]));
                    return (o.cache && (o.cache.allConstraints = p), p);
                  }),
                  (i.allComposites = function (o) {
                    if (o.cache && o.cache.allComposites) return o.cache.allComposites;
                    for (var p = [].concat(o.composites), g = 0; g < o.composites.length; g++)
                      p = p.concat(i.allComposites(o.composites[g]));
                    return (o.cache && (o.cache.allComposites = p), p);
                  }),
                  (i.get = function (o, p, g) {
                    var r, y;
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
                      ? ((y = r.filter(function (v) {
                          return v.id.toString() === p.toString();
                        })),
                        y.length === 0 ? null : y[0])
                      : null;
                  }),
                  (i.move = function (o, p, g) {
                    return (i.remove(o, p), i.add(g, p), o);
                  }),
                  (i.rebase = function (o) {
                    for (
                      var p = i.allBodies(o).concat(i.allConstraints(o)).concat(i.allComposites(o)),
                        g = 0;
                      g < p.length;
                      g++
                    )
                      p[g].id = f.nextId();
                    return o;
                  }),
                  (i.translate = function (o, p, g) {
                    for (var r = g ? i.allBodies(o) : o.bodies, y = 0; y < r.length; y++)
                      m.translate(r[y], p);
                    return o;
                  }),
                  (i.rotate = function (o, p, g, r) {
                    for (
                      var y = Math.cos(p),
                        v = Math.sin(p),
                        E = r ? i.allBodies(o) : o.bodies,
                        R = 0;
                      R < E.length;
                      R++
                    ) {
                      var D = E[R],
                        w = D.position.x - g.x,
                        L = D.position.y - g.y;
                      (m.setPosition(D, { x: g.x + (w * y - L * v), y: g.y + (w * v + L * y) }),
                        m.rotate(D, p));
                    }
                    return o;
                  }),
                  (i.scale = function (o, p, g, r, y) {
                    for (var v = y ? i.allBodies(o) : o.bodies, E = 0; E < v.length; E++) {
                      var R = v[E],
                        D = R.position.x - r.x,
                        w = R.position.y - r.y;
                      (m.setPosition(R, { x: r.x + D * p, y: r.y + w * g }), m.scale(R, p, g));
                    }
                    return o;
                  }),
                  (i.bounds = function (o) {
                    for (var p = i.allBodies(o), g = [], r = 0; r < p.length; r += 1) {
                      var y = p[r];
                      g.push(y.bounds.min, y.bounds.max);
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
                      var p = o / c._baseDelta, g = i._motionSleepThreshold, r = 0;
                      r < m.length;
                      r++
                    ) {
                      var y = m[r],
                        v = d.getSpeed(y),
                        E = d.getAngularSpeed(y),
                        R = v * v + E * E;
                      if (y.force.x !== 0 || y.force.y !== 0) {
                        i.set(y, !1);
                        continue;
                      }
                      var D = Math.min(y.motion, R),
                        w = Math.max(y.motion, R);
                      ((y.motion = i._minBias * D + (1 - i._minBias) * w),
                        y.sleepThreshold > 0 && y.motion < g
                          ? ((y.sleepCounter += 1),
                            y.sleepCounter >= y.sleepThreshold / p && i.set(y, !0))
                          : y.sleepCounter > 0 && (y.sleepCounter -= 1));
                    }
                  }),
                  (i.afterCollisions = function (m) {
                    for (var o = i._motionSleepThreshold, p = 0; p < m.length; p++) {
                      var g = m[p];
                      if (g.isActive) {
                        var r = g.collision,
                          y = r.bodyA.parent,
                          v = r.bodyB.parent;
                        if (
                          !((y.isSleeping && v.isSleeping) || y.isStatic || v.isStatic) &&
                          (y.isSleeping || v.isSleeping)
                        ) {
                          var E = y.isSleeping && !y.isStatic ? y : v,
                            R = E === y ? v : y;
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
                ((i.create = function (p, g) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: p,
                    bodyB: g,
                    parentA: p.parent,
                    parentB: g.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (i.collides = function (p, g, r) {
                    if (
                      (i._overlapAxes(m, p.vertices, g.vertices, p.axes),
                      m.overlap <= 0 ||
                        (i._overlapAxes(o, g.vertices, p.vertices, g.axes), o.overlap <= 0))
                    )
                      return null;
                    var y = r && r.table[f.id(p, g)],
                      v;
                    (y
                      ? (v = y.collision)
                      : ((v = i.create(p, g)),
                        (v.collided = !0),
                        (v.bodyA = p.id < g.id ? p : g),
                        (v.bodyB = p.id < g.id ? g : p),
                        (v.parentA = v.bodyA.parent),
                        (v.parentB = v.bodyB.parent)),
                      (p = v.bodyA),
                      (g = v.bodyB));
                    var E;
                    m.overlap < o.overlap ? (E = m) : (E = o);
                    var R = v.normal,
                      D = v.tangent,
                      w = v.penetration,
                      L = v.supports,
                      C = E.overlap,
                      z = E.axis,
                      _ = z.x,
                      A = z.y,
                      N = g.position.x - p.position.x,
                      O = g.position.y - p.position.y;
                    (_ * N + A * O >= 0 && ((_ = -_), (A = -A)),
                      (R.x = _),
                      (R.y = A),
                      (D.x = -A),
                      (D.y = _),
                      (w.x = _ * C),
                      (w.y = A * C),
                      (v.depth = C));
                    var H = i._findSupports(p, g, R, 1),
                      G = 0;
                    if (
                      (d.contains(p.vertices, H[0]) && (L[G++] = H[0]),
                      d.contains(p.vertices, H[1]) && (L[G++] = H[1]),
                      G < 2)
                    ) {
                      var J = i._findSupports(g, p, R, -1);
                      (d.contains(g.vertices, J[0]) && (L[G++] = J[0]),
                        G < 2 && d.contains(g.vertices, J[1]) && (L[G++] = J[1]));
                    }
                    return (G === 0 && (L[G++] = H[0]), (v.supportCount = G), v);
                  }),
                  (i._overlapAxes = function (p, g, r, y) {
                    var v = g.length,
                      E = r.length,
                      R = g[0].x,
                      D = g[0].y,
                      w = r[0].x,
                      L = r[0].y,
                      C = y.length,
                      z = Number.MAX_VALUE,
                      _ = 0,
                      A,
                      N,
                      O,
                      H,
                      G,
                      J;
                    for (G = 0; G < C; G++) {
                      var te = y[G],
                        ee = te.x,
                        q = te.y,
                        K = R * ee + D * q,
                        ne = w * ee + L * q,
                        se = K,
                        de = ne;
                      for (J = 1; J < v; J += 1)
                        ((H = g[J].x * ee + g[J].y * q), H > se ? (se = H) : H < K && (K = H));
                      for (J = 1; J < E; J += 1)
                        ((H = r[J].x * ee + r[J].y * q), H > de ? (de = H) : H < ne && (ne = H));
                      if (
                        ((N = se - ne),
                        (O = de - K),
                        (A = N < O ? N : O),
                        A < z && ((z = A), (_ = G), A <= 0))
                      )
                        break;
                    }
                    ((p.axis = y[_]), (p.overlap = z));
                  }),
                  (i._findSupports = function (p, g, r, y) {
                    var v = g.vertices,
                      E = v.length,
                      R = p.position.x,
                      D = p.position.y,
                      w = r.x * y,
                      L = r.y * y,
                      C = v[0],
                      z = C,
                      _ = w * (R - z.x) + L * (D - z.y),
                      A,
                      N,
                      O;
                    for (O = 1; O < E; O += 1)
                      ((z = v[O]),
                        (N = w * (R - z.x) + L * (D - z.y)),
                        N < _ && ((_ = N), (C = z)));
                    return (
                      (A = v[(E + C.index - 1) % E]),
                      (_ = w * (R - A.x) + L * (D - A.y)),
                      (z = v[(C.index + 1) % E]),
                      w * (R - z.x) + L * (D - z.y) < _
                        ? ((c[0] = C), (c[1] = z), c)
                        : ((c[0] = C), (c[1] = A), c)
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
                      g = f.contacts,
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
                p = h(0);
              (function () {
                ((i._warming = 0.4),
                  (i._torqueDampen = 1),
                  (i._minLength = 1e-6),
                  (i.create = function (g) {
                    var r = g;
                    (r.bodyA && !r.pointA && (r.pointA = { x: 0, y: 0 }),
                      r.bodyB && !r.pointB && (r.pointB = { x: 0, y: 0 }));
                    var y = r.bodyA ? f.add(r.bodyA.position, r.pointA) : r.pointA,
                      v = r.bodyB ? f.add(r.bodyB.position, r.pointB) : r.pointB,
                      E = f.magnitude(f.sub(y, v));
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
                  (i.preSolveAll = function (g) {
                    for (var r = 0; r < g.length; r += 1) {
                      var y = g[r],
                        v = y.constraintImpulse;
                      y.isStatic ||
                        (v.x === 0 && v.y === 0 && v.angle === 0) ||
                        ((y.position.x += v.x), (y.position.y += v.y), (y.angle += v.angle));
                    }
                  }),
                  (i.solveAll = function (g, r) {
                    for (var y = p.clamp(r / p._baseDelta, 0, 1), v = 0; v < g.length; v += 1) {
                      var E = g[v],
                        R = !E.bodyA || (E.bodyA && E.bodyA.isStatic),
                        D = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (R || D) && i.solve(g[v], y);
                    }
                    for (v = 0; v < g.length; v += 1)
                      ((E = g[v]),
                        (R = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (D = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !R && !D && i.solve(g[v], y));
                  }),
                  (i.solve = function (g, r) {
                    var y = g.bodyA,
                      v = g.bodyB,
                      E = g.pointA,
                      R = g.pointB;
                    if (!(!y && !v)) {
                      (y &&
                        !y.isStatic &&
                        (f.rotate(E, y.angle - g.angleA, E), (g.angleA = y.angle)),
                        v &&
                          !v.isStatic &&
                          (f.rotate(R, v.angle - g.angleB, R), (g.angleB = v.angle)));
                      var D = E,
                        w = R;
                      if (
                        (y && (D = f.add(y.position, E)),
                        v && (w = f.add(v.position, R)),
                        !(!D || !w))
                      ) {
                        var L = f.sub(D, w),
                          C = f.magnitude(L);
                        C < i._minLength && (C = i._minLength);
                        var z = (C - g.length) / C,
                          _ = g.stiffness >= 1 || g.length === 0,
                          A = _ ? g.stiffness * r : g.stiffness * r * r,
                          N = g.damping * r,
                          O = f.mult(L, z * A),
                          H = (y ? y.inverseMass : 0) + (v ? v.inverseMass : 0),
                          G = (y ? y.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          J = H + G,
                          te,
                          ee,
                          q,
                          K,
                          ne;
                        if (N > 0) {
                          var se = f.create();
                          ((q = f.div(L, C)),
                            (ne = f.sub(
                              (v && f.sub(v.position, v.positionPrev)) || se,
                              (y && f.sub(y.position, y.positionPrev)) || se
                            )),
                            (K = f.dot(q, ne)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((ee = y.inverseMass / H),
                          (y.constraintImpulse.x -= O.x * ee),
                          (y.constraintImpulse.y -= O.y * ee),
                          (y.position.x -= O.x * ee),
                          (y.position.y -= O.y * ee),
                          N > 0 &&
                            ((y.positionPrev.x -= N * q.x * K * ee),
                            (y.positionPrev.y -= N * q.y * K * ee)),
                          (te =
                            (f.cross(E, O) / J) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - g.angularStiffness)),
                          (y.constraintImpulse.angle -= te),
                          (y.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((ee = v.inverseMass / H),
                            (v.constraintImpulse.x += O.x * ee),
                            (v.constraintImpulse.y += O.y * ee),
                            (v.position.x += O.x * ee),
                            (v.position.y += O.y * ee),
                            N > 0 &&
                              ((v.positionPrev.x += N * q.x * K * ee),
                              (v.positionPrev.y += N * q.y * K * ee)),
                            (te =
                              (f.cross(R, O) / J) *
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
                      var y = g[r],
                        v = y.constraintImpulse;
                      if (!(y.isStatic || (v.x === 0 && v.y === 0 && v.angle === 0))) {
                        c.set(y, !1);
                        for (var E = 0; E < y.parts.length; E++) {
                          var R = y.parts[E];
                          (d.translate(R.vertices, v),
                            E > 0 && ((R.position.x += v.x), (R.position.y += v.y)),
                            v.angle !== 0 &&
                              (d.rotate(R.vertices, v.angle, y.position),
                              o.rotate(R.axes, v.angle),
                              E > 0 && f.rotateAbout(R.position, v.angle, y.position, R.position)),
                            m.update(R.bounds, R.vertices, y.velocity));
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
                      y = (g.bodyA ? g.bodyA.position.y : 0) + (g.pointA ? g.pointA.y : 0),
                      v = (g.bodyB ? g.bodyB.position.x : 0) + (g.pointB ? g.pointB.x : 0),
                      E = (g.bodyB ? g.bodyB.position.y : 0) + (g.pointB ? g.pointB.y : 0),
                      R = r - v,
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
                      g = d.normalise({ x: c[p].y - c[o].y, y: c[o].x - c[p].x }),
                      r = g.y === 0 ? 1 / 0 : g.x / g.y;
                    ((r = r.toFixed(3).toString()), (m[r] = g));
                  }
                  return f.values(m);
                }),
                  (i.rotate = function (c, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), p = Math.sin(m), g = 0; g < c.length; g++) {
                        var r = c[g],
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
                ((i.rectangle = function (p, g, r, y, v) {
                  v = v || {};
                  var E = {
                    label: 'Rectangle Body',
                    position: { x: p, y: g },
                    vertices: d.fromPath('L 0 0 L ' + r + ' 0 L ' + r + ' ' + y + ' L 0 ' + y),
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
                  (i.trapezoid = function (p, g, r, y, v, E) {
                    ((E = E || {}),
                      v >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var R = (1 - v * 2) * r,
                      D = r * v,
                      w = D + R,
                      L = w + D,
                      C;
                    v < 0.5
                      ? (C = 'L 0 0 L ' + D + ' ' + -y + ' L ' + w + ' ' + -y + ' L ' + L + ' 0')
                      : (C = 'L 0 0 L ' + w + ' ' + -y + ' L ' + L + ' 0');
                    var z = {
                      label: 'Trapezoid Body',
                      position: { x: p, y: g },
                      vertices: d.fromPath(C),
                    };
                    if (E.chamfer) {
                      var _ = E.chamfer;
                      ((z.vertices = d.chamfer(
                        z.vertices,
                        _.radius,
                        _.quality,
                        _.qualityMin,
                        _.qualityMax
                      )),
                        delete E.chamfer);
                    }
                    return c.create(f.extend({}, z, E));
                  }),
                  (i.circle = function (p, g, r, y, v) {
                    y = y || {};
                    var E = { label: 'Circle Body', circleRadius: r };
                    v = v || 25;
                    var R = Math.ceil(Math.max(10, Math.min(v, r)));
                    return (R % 2 === 1 && (R += 1), i.polygon(p, g, R, r, f.extend({}, E, y)));
                  }),
                  (i.polygon = function (p, g, r, y, v) {
                    if (((v = v || {}), r < 3)) return i.circle(p, g, y, v);
                    for (var E = (2 * Math.PI) / r, R = '', D = E * 0.5, w = 0; w < r; w += 1) {
                      var L = D + w * E,
                        C = Math.cos(L) * y,
                        z = Math.sin(L) * y;
                      R += 'L ' + C.toFixed(3) + ' ' + z.toFixed(3) + ' ';
                    }
                    var _ = {
                      label: 'Polygon Body',
                      position: { x: p, y: g },
                      vertices: d.fromPath(R),
                    };
                    if (v.chamfer) {
                      var A = v.chamfer;
                      ((_.vertices = d.chamfer(
                        _.vertices,
                        A.radius,
                        A.quality,
                        A.qualityMin,
                        A.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return c.create(f.extend({}, _, v));
                  }),
                  (i.fromVertices = function (p, g, r, y, v, E, R, D) {
                    var w = f.getDecomp(),
                      L,
                      C,
                      z,
                      _,
                      A,
                      N,
                      O,
                      H,
                      G,
                      J,
                      te;
                    for (
                      L = !!(w && w.quickDecomp),
                        y = y || {},
                        z = [],
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
                        ((N = r[J]),
                        (_ = d.isConvex(N)),
                        (A = !_),
                        A &&
                          !L &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        _ || !L)
                      )
                        (_ ? (N = d.clockwiseSort(N)) : (N = d.hull(N)),
                          z.push({ position: { x: p, y: g }, vertices: N }));
                      else {
                        var ee = N.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          D !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, D));
                        var q = w.quickDecomp(ee);
                        for (O = 0; O < q.length; O++) {
                          var K = q[O],
                            ne = K.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            z.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (O = 0; O < z.length; O++) z[O] = c.create(f.extend(z[O], y));
                    if (v) {
                      var se = 5;
                      for (O = 0; O < z.length; O++) {
                        var de = z[O];
                        for (H = O + 1; H < z.length; H++) {
                          var j = z[H];
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
                    return z.length > 1
                      ? ((C = c.create(f.extend({ parts: z.slice(0) }, y))),
                        c.setPosition(C, { x: p, y: g }),
                        C)
                      : z[0];
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
                      g = i.canCollide,
                      r = f.collides,
                      y = c.collisions,
                      v = 0,
                      E,
                      R;
                    for (o.sort(i._compareBoundsX), E = 0; E < p; E++) {
                      var D = o[E],
                        w = D.bounds,
                        L = D.bounds.max.x,
                        C = D.bounds.max.y,
                        z = D.bounds.min.y,
                        _ = D.isStatic || D.isSleeping,
                        A = D.parts.length,
                        N = A === 1;
                      for (R = E + 1; R < p; R++) {
                        var O = o[R],
                          H = O.bounds;
                        if (H.min.x > L) break;
                        if (
                          !(C < H.min.y || z > H.max.y) &&
                          !(_ && (O.isStatic || O.isSleeping)) &&
                          g(D.collisionFilter, O.collisionFilter)
                        ) {
                          var G = O.parts.length;
                          if (N && G === 1) {
                            var J = r(D, O, m);
                            J && (y[v++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, q = te; q < A; q++)
                              for (var K = D.parts[q], w = K.bounds, ne = ee; ne < G; ne++) {
                                var se = O.parts[ne],
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
                                  J && (y[v++] = J);
                                }
                              }
                        }
                      }
                    }
                    return (y.length !== v && (y.length = v), y);
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
                      g = window.pageXOffset !== void 0 ? window.pageXOffset : p.scrollLeft,
                      r = window.pageYOffset !== void 0 ? window.pageYOffset : p.scrollTop,
                      y = f.changedTouches,
                      v,
                      E;
                    return (
                      y
                        ? ((v = y[0].pageX - o.left - g), (E = y[0].pageY - o.top - r))
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
                      var m = i.dependencies(f), o = d.topologicalSort(m), p = [], g = 0;
                      g < o.length;
                      g += 1
                    )
                      if (o[g] !== f.name) {
                        var r = i.resolve(o[g]);
                        if (!r) {
                          p.push('❌ ' + o[g]);
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
                        (c[o] = d.map(f.uses || [], function (g) {
                          i.isPlugin(g) && i.register(g);
                          var r = i.dependencyParse(g),
                            y = i.resolve(g);
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
                                  i.toString(g),
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
                      g = Number(m[6]);
                    return {
                      isRange: !!(m[1] || m[2]),
                      version: m[3],
                      range: f,
                      operator: m[1] || m[2] || '',
                      major: o,
                      minor: p,
                      patch: g,
                      parts: [o, p, g],
                      prerelease: m[7],
                      number: o * 1e8 + p * 1e4 + g,
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
                g = h(10),
                r = h(0),
                y = h(4);
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
                      (R.world = v.world || p.create({ label: 'World' })),
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
                      C = v.timing,
                      z = C.timestamp,
                      _;
                    (E > i._deltaMax &&
                      r.warnOnce(
                        'Matter.Engine.update: delta argument is recommended to be less than or equal to',
                        i._deltaMax.toFixed(3),
                        'ms.'
                      ),
                      (E = typeof E < 'u' ? E : r._baseDelta),
                      (E *= C.timeScale),
                      (C.timestamp += E),
                      (C.lastDelta = E));
                    var A = { timestamp: C.timestamp, delta: E };
                    o.trigger(v, 'beforeUpdate', A);
                    var N = p.allBodies(D),
                      O = p.allConstraints(D);
                    for (
                      D.isModified && (c.setBodies(w, N), p.setModified(D, !1, !1, !0)),
                        v.enableSleeping && d.update(N, E),
                        i._bodiesApplyGravity(N, v.gravity),
                        E > 0 && i._bodiesUpdate(N, E),
                        o.trigger(v, 'beforeSolve', A),
                        g.preSolveAll(N),
                        _ = 0;
                      _ < v.constraintIterations;
                      _++
                    )
                      g.solveAll(O, E);
                    g.postSolveAll(N);
                    var H = c.collisions(w);
                    (m.update(L, H, z),
                      v.enableSleeping && d.afterCollisions(L.list),
                      L.collisionStart.length > 0 &&
                        o.trigger(v, 'collisionStart', {
                          pairs: L.collisionStart,
                          timestamp: C.timestamp,
                          delta: E,
                        }));
                    var G = r.clamp(20 / v.positionIterations, 0, 1);
                    for (f.preSolvePosition(L.list), _ = 0; _ < v.positionIterations; _++)
                      f.solvePosition(L.list, E, G);
                    for (
                      f.postSolvePosition(N), g.preSolveAll(N), _ = 0;
                      _ < v.constraintIterations;
                      _++
                    )
                      g.solveAll(O, E);
                    for (
                      g.postSolveAll(N), f.preSolveVelocity(L.list), _ = 0;
                      _ < v.velocityIterations;
                      _++
                    )
                      f.solveVelocity(L.list, E);
                    return (
                      i._bodiesUpdateVelocities(N),
                      L.collisionActive.length > 0 &&
                        o.trigger(v, 'collisionActive', {
                          pairs: L.collisionActive,
                          timestamp: C.timestamp,
                          delta: E,
                        }),
                      L.collisionEnd.length > 0 &&
                        o.trigger(v, 'collisionEnd', {
                          pairs: L.collisionEnd,
                          timestamp: C.timestamp,
                          delta: E,
                        }),
                      i._bodiesClearForces(N),
                      o.trigger(v, 'afterUpdate', A),
                      (v.timing.lastElapsed = r.now() - R),
                      v
                    );
                  }),
                  (i.merge = function (v, E) {
                    if ((r.extend(v, E), E.world)) {
                      ((v.world = E.world), i.clear(v));
                      for (var R = p.allBodies(v.world), D = 0; D < R.length; D++) {
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
                      w.isStatic || w.isSleeping || y.update(w, E);
                    }
                  }),
                  (i._bodiesUpdateVelocities = function (v) {
                    for (var E = v.length, R = 0; R < E; R++) y.updateVelocities(v[R]);
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
                      g,
                      r = m.length;
                    for (o = 0; o < r; o++)
                      ((p = m[o]),
                        p.isActive &&
                          ((g = p.contactCount),
                          (p.collision.parentA.totalContacts += g),
                          (p.collision.parentB.totalContacts += g)));
                  }),
                  (i.solvePosition = function (m, o, p) {
                    var g,
                      r,
                      y,
                      v,
                      E,
                      R,
                      D,
                      w,
                      L = i._positionDampen * (p || 1),
                      C = f.clamp(o / f._baseDelta, 0, 1),
                      z = m.length;
                    for (g = 0; g < z; g++)
                      ((r = m[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (v = y.parentA),
                          (E = y.parentB),
                          (R = y.normal),
                          (r.separation =
                            y.depth +
                            R.x * (E.positionImpulse.x - v.positionImpulse.x) +
                            R.y * (E.positionImpulse.y - v.positionImpulse.y))));
                    for (g = 0; g < z; g++)
                      ((r = m[g]),
                        !(!r.isActive || r.isSensor) &&
                          ((y = r.collision),
                          (v = y.parentA),
                          (E = y.parentB),
                          (R = y.normal),
                          (w = r.separation - r.slop * C),
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
                        p = m.length,
                        g = d.translate,
                        r = c.update,
                        y = 0;
                      y < p;
                      y++
                    ) {
                      var v = m[y],
                        E = v.positionImpulse,
                        R = E.x,
                        D = E.y,
                        w = v.velocity;
                      if (((v.totalContacts = 0), R !== 0 || D !== 0)) {
                        for (var L = 0; L < v.parts.length; L++) {
                          var C = v.parts[L];
                          (g(C.vertices, E),
                            r(C.bounds, C.vertices, w),
                            (C.position.x += R),
                            (C.position.y += D));
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
                      p,
                      g;
                    for (p = 0; p < o; p++) {
                      var r = m[p];
                      if (!(!r.isActive || r.isSensor)) {
                        var y = r.contacts,
                          v = r.contactCount,
                          E = r.collision,
                          R = E.parentA,
                          D = E.parentB,
                          w = E.normal,
                          L = E.tangent;
                        for (g = 0; g < v; g++) {
                          var C = y[g],
                            z = C.vertex,
                            _ = C.normalImpulse,
                            A = C.tangentImpulse;
                          if (_ !== 0 || A !== 0) {
                            var N = w.x * _ + L.x * A,
                              O = w.y * _ + L.y * A;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += N * R.inverseMass),
                              (R.positionPrev.y += O * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((z.x - R.position.x) * O - (z.y - R.position.y) * N))),
                              D.isStatic ||
                                D.isSleeping ||
                                ((D.positionPrev.x -= N * D.inverseMass),
                                (D.positionPrev.y -= O * D.inverseMass),
                                (D.anglePrev -=
                                  D.inverseInertia *
                                  ((z.x - D.position.x) * O - (z.y - D.position.y) * N))));
                          }
                        }
                      }
                    }
                  }),
                  (i.solveVelocity = function (m, o) {
                    var p = o / f._baseDelta,
                      g = p * p,
                      r = g * p,
                      y = -i._restingThresh * p,
                      v = i._restingThreshTangent,
                      E = i._frictionNormalMultiplier * p,
                      R = i._frictionMaxStatic,
                      D = m.length,
                      w,
                      L,
                      C,
                      z;
                    for (C = 0; C < D; C++) {
                      var _ = m[C];
                      if (!(!_.isActive || _.isSensor)) {
                        var A = _.collision,
                          N = A.parentA,
                          O = A.parentB,
                          H = A.normal.x,
                          G = A.normal.y,
                          J = A.tangent.x,
                          te = A.tangent.y,
                          ee = _.inverseMass,
                          q = _.friction * _.frictionStatic * E,
                          K = _.contacts,
                          ne = _.contactCount,
                          se = 1 / ne,
                          de = N.position.x - N.positionPrev.x,
                          j = N.position.y - N.positionPrev.y,
                          F = N.angle - N.anglePrev,
                          ae = O.position.x - O.positionPrev.x,
                          le = O.position.y - O.positionPrev.y,
                          oe = O.angle - O.anglePrev;
                        for (z = 0; z < ne; z++) {
                          var ie = K[z],
                            he = ie.vertex,
                            ye = he.x - N.position.x,
                            Re = he.y - N.position.y,
                            Ze = he.x - O.position.x,
                            Pe = he.y - O.position.y,
                            Xe = de - Re * F,
                            La = j + ye * F,
                            _t = ae - Pe * oe,
                            Pt = le + Ze * oe,
                            it = Xe - _t,
                            un = La - Pt,
                            vn = H * it + G * un,
                            yt = J * it + te * un,
                            pt = _.separation + vn,
                            Dt = Math.min(pt, 1);
                          Dt = pt < 0 ? 0 : Dt;
                          var ha = Dt * q;
                          yt < -ha || yt > ha
                            ? ((L = yt > 0 ? yt : -yt),
                              (w = _.friction * (yt > 0 ? 1 : -1) * r),
                              w < -L ? (w = -L) : w > L && (w = L))
                            : ((w = yt), (L = R));
                          var va = ye * G - Re * H,
                            ut = Ze * G - Pe * H,
                            ja =
                              se / (ee + N.inverseInertia * va * va + O.inverseInertia * ut * ut),
                            gn = (1 + _.restitution) * vn * ja;
                          if (((w *= ja), vn < y)) ie.normalImpulse = 0;
                          else {
                            var Ga = ie.normalImpulse;
                            ((ie.normalImpulse += gn),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (gn = ie.normalImpulse - Ga));
                          }
                          if (yt < -v || yt > v) ie.tangentImpulse = 0;
                          else {
                            var qn = ie.tangentImpulse;
                            ((ie.tangentImpulse += w),
                              ie.tangentImpulse < -L && (ie.tangentImpulse = -L),
                              ie.tangentImpulse > L && (ie.tangentImpulse = L),
                              (w = ie.tangentImpulse - qn));
                          }
                          var Vn = H * gn + J * w,
                            rn = G * gn + te * w;
                          (N.isStatic ||
                            N.isSleeping ||
                            ((N.positionPrev.x += Vn * N.inverseMass),
                            (N.positionPrev.y += rn * N.inverseMass),
                            (N.anglePrev += (ye * rn - Re * Vn) * N.inverseInertia)),
                            O.isStatic ||
                              O.isSleeping ||
                              ((O.positionPrev.x -= Vn * O.inverseMass),
                              (O.positionPrev.y -= rn * O.inverseMass),
                              (O.anglePrev -= (Ze * rn - Pe * Vn) * O.inverseInertia)));
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
                      g = d.create,
                      r = d.setActive,
                      y = c.table,
                      v = c.list,
                      E = v.length,
                      R = E,
                      D = c.collisionStart,
                      w = c.collisionEnd,
                      L = c.collisionActive,
                      C = m.length,
                      z = 0,
                      _ = 0,
                      A = 0,
                      N,
                      O,
                      H;
                    for (H = 0; H < C; H++)
                      ((N = m[H]),
                        (O = N.pair),
                        O
                          ? (O.isActive && (L[A++] = O), p(O, N, o))
                          : ((O = g(N, o)), (y[O.id] = O), (D[z++] = O), (v[R++] = O)));
                    for (R = 0, E = v.length, H = 0; H < E; H++)
                      ((O = v[H]),
                        O.timeUpdated >= o
                          ? (v[R++] = O)
                          : (r(O, !1, o),
                            O.collision.bodyA.sleepCounter > 0 && O.collision.bodyB.sleepCounter > 0
                              ? (v[R++] = O)
                              : ((w[_++] = O), delete y[O.id])));
                    (v.length !== R && (v.length = R),
                      D.length !== z && (D.length = z),
                      w.length !== _ && (w.length = _),
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
                p = c.deprecated;
              (function () {
                ((i.stack = function (g, r, y, v, E, R, D) {
                  for (
                    var w = d.create({ label: 'Stack' }), L = g, C = r, z, _ = 0, A = 0;
                    A < v;
                    A++
                  ) {
                    for (var N = 0, O = 0; O < y; O++) {
                      var H = D(L, C, O, A, z, _);
                      if (H) {
                        var G = H.bounds.max.y - H.bounds.min.y,
                          J = H.bounds.max.x - H.bounds.min.x;
                        (G > N && (N = G),
                          m.translate(H, { x: J * 0.5, y: G * 0.5 }),
                          (L = H.bounds.max.x + E),
                          d.addBody(w, H),
                          (z = H),
                          (_ += 1));
                      } else L += E;
                    }
                    ((C += N + R), (L = g));
                  }
                  return w;
                }),
                  (i.chain = function (g, r, y, v, E, R) {
                    for (var D = g.bodies, w = 1; w < D.length; w++) {
                      var L = D[w - 1],
                        C = D[w],
                        z = L.bounds.max.y - L.bounds.min.y,
                        _ = L.bounds.max.x - L.bounds.min.x,
                        A = C.bounds.max.y - C.bounds.min.y,
                        N = C.bounds.max.x - C.bounds.min.x,
                        O = {
                          bodyA: L,
                          pointA: { x: _ * r, y: z * y },
                          bodyB: C,
                          pointB: { x: N * v, y: A * E },
                        },
                        H = c.extend(O, R);
                      d.addConstraint(g, f.create(H));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (i.mesh = function (g, r, y, v, E) {
                    var R = g.bodies,
                      D,
                      w,
                      L,
                      C,
                      z;
                    for (D = 0; D < y; D++) {
                      for (w = 1; w < r; w++)
                        ((L = R[w - 1 + D * r]),
                          (C = R[w + D * r]),
                          d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: C }, E))));
                      if (D > 0)
                        for (w = 0; w < r; w++)
                          ((L = R[w + (D - 1) * r]),
                            (C = R[w + D * r]),
                            d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: C }, E))),
                            v &&
                              w > 0 &&
                              ((z = R[w - 1 + (D - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: z, bodyB: C }, E)))),
                            v &&
                              w < r - 1 &&
                              ((z = R[w + 1 + (D - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: z, bodyB: C }, E)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (i.pyramid = function (g, r, y, v, E, R, D) {
                    return i.stack(g, r, y, v, E, R, function (w, L, C, z, _, A) {
                      var N = Math.min(v, Math.ceil(y / 2)),
                        O = _ ? _.bounds.max.x - _.bounds.min.x : 0;
                      if (!(z > N)) {
                        z = N - z;
                        var H = z,
                          G = y - 1 - z;
                        if (!(C < H || C > G)) {
                          A === 1 && m.translate(_, { x: (C + (y % 2 === 1 ? 1 : -1)) * O, y: 0 });
                          var J = _ ? C * O : 0;
                          return D(g + J + C * E, L, C, z, _, A);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (g, r, y, v, E) {
                    for (var R = d.create({ label: 'Newtons Cradle' }), D = 0; D < y; D++) {
                      var w = 1.9,
                        L = o.circle(g + D * (v * w), r + E, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        C = f.create({ pointA: { x: g + D * (v * w), y: r }, bodyB: L });
                      (d.addBody(R, L), d.addConstraint(R, C));
                    }
                    return R;
                  }),
                  p(
                    i,
                    'newtonsCradle',
                    'Composites.newtonsCradle ➤ moved to newtonsCradle example'
                  ),
                  (i.car = function (g, r, y, v, E) {
                    var R = m.nextGroup(!0),
                      D = 20,
                      w = -y * 0.5 + D,
                      L = y * 0.5 - D,
                      C = 0,
                      z = d.create({ label: 'Car' }),
                      _ = o.rectangle(g, r, y, v, {
                        collisionFilter: { group: R },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      A = o.circle(g + w, r + C, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      N = o.circle(g + L, r + C, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      O = f.create({
                        bodyB: _,
                        pointB: { x: w, y: C },
                        bodyA: A,
                        stiffness: 1,
                        length: 0,
                      }),
                      H = f.create({
                        bodyB: _,
                        pointB: { x: L, y: C },
                        bodyA: N,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(z, _),
                      d.addBody(z, A),
                      d.addBody(z, N),
                      d.addConstraint(z, O),
                      d.addConstraint(z, H),
                      z
                    );
                  }),
                  p(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (g, r, y, v, E, R, D, w, L, C) {
                    ((L = c.extend({ inertia: 1 / 0 }, L)),
                      (C = c.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, C)));
                    var z = i.stack(g, r, y, v, E, R, function (_, A) {
                      return o.circle(_, A, w, L);
                    });
                    return (i.mesh(z, y, v, D, C), (z.label = 'Soft Body'), z);
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
                  (i.update = function (m, o, p, g) {
                    var r,
                      y,
                      v,
                      E = p.world,
                      R = m.buckets,
                      D,
                      w,
                      L = !1;
                    for (r = 0; r < o.length; r++) {
                      var C = o[r];
                      if (
                        !(C.isSleeping && !g) &&
                        !(
                          E.bounds &&
                          (C.bounds.max.x < E.bounds.min.x ||
                            C.bounds.min.x > E.bounds.max.x ||
                            C.bounds.max.y < E.bounds.min.y ||
                            C.bounds.min.y > E.bounds.max.y)
                        )
                      ) {
                        var z = i._getRegion(m, C);
                        if (!C.region || z.id !== C.region.id || g) {
                          (!C.region || g) && (C.region = z);
                          var _ = i._regionUnion(z, C.region);
                          for (y = _.startCol; y <= _.endCol; y++)
                            for (v = _.startRow; v <= _.endRow; v++) {
                              ((w = i._getBucketId(y, v)), (D = R[w]));
                              var A =
                                  y >= z.startCol &&
                                  y <= z.endCol &&
                                  v >= z.startRow &&
                                  v <= z.endRow,
                                N =
                                  y >= C.region.startCol &&
                                  y <= C.region.endCol &&
                                  v >= C.region.startRow &&
                                  v <= C.region.endRow;
                              (!A && N && N && D && i._bucketRemoveBody(m, D, C),
                                (C.region === z || (A && !N) || g) &&
                                  (D || (D = i._createBucket(R, w)), i._bucketAddBody(m, D, C)));
                            }
                          ((C.region = z), (L = !0));
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
                    var p = Math.min(m.startCol, o.startCol),
                      g = Math.max(m.endCol, o.endCol),
                      r = Math.min(m.startRow, o.startRow),
                      y = Math.max(m.endRow, o.endRow);
                    return i._createRegion(p, g, r, y);
                  }),
                  (i._getRegion = function (m, o) {
                    var p = o.bounds,
                      g = Math.floor(p.min.x / m.bucketWidth),
                      r = Math.floor(p.max.x / m.bucketWidth),
                      y = Math.floor(p.min.y / m.bucketHeight),
                      v = Math.floor(p.max.y / m.bucketHeight);
                    return i._createRegion(g, r, y, v);
                  }),
                  (i._createRegion = function (m, o, p, g) {
                    return {
                      id: m + ',' + o + ',' + p + ',' + g,
                      startCol: m,
                      endCol: o,
                      startRow: p,
                      endRow: g,
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
                    var g = m.pairs,
                      r = d.id,
                      y = o.length,
                      v;
                    for (v = 0; v < y; v++) {
                      var E = o[v];
                      if (!(p.id === E.id || (p.isStatic && E.isStatic))) {
                        var R = r(p, E),
                          D = g[R];
                        D ? (D[2] += 1) : (g[R] = [p, E, 1]);
                      }
                    }
                    o.push(p);
                  }),
                  (i._bucketRemoveBody = function (m, o, p) {
                    var g = m.pairs,
                      r = d.id,
                      y;
                    o.splice(f.indexOf(o, p), 1);
                    var v = o.length;
                    for (y = 0; y < v; y++) {
                      var E = g[r(p, o[y])];
                      E && (E[2] -= 1);
                    }
                  }),
                  (i._createActivePairsList = function (m) {
                    var o,
                      p = m.pairs,
                      g = f.keys(p),
                      r = g.length,
                      y = [],
                      v;
                    for (v = 0; v < r; v++) ((o = p[g[v]]), o[2] > 0 ? y.push(o) : delete p[g[v]]);
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
                g = h(6),
                r = h(0),
                y = h(1);
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
                    L = r.extend(w, E);
                  return (
                    m.on(v, 'beforeUpdate', function () {
                      var C = g.allBodies(v.world);
                      (i.update(L, C), i._triggerEvents(L));
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
                            y.contains(w.bounds, R.position) &&
                              o.canCollide(w.collisionFilter, v.collisionFilter))
                          )
                            for (var C = w.parts.length > 1 ? 1 : 0; C < w.parts.length; C++) {
                              var z = w.parts[C];
                              if (d.contains(z.vertices, R.position)) {
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
                ((i.collides = function (p, g) {
                  for (
                    var r = [], y = g.length, v = p.bounds, E = f.collides, R = c.overlaps, D = 0;
                    D < y;
                    D++
                  ) {
                    var w = g[D],
                      L = w.parts.length,
                      C = L === 1 ? 0 : 1;
                    if (R(w.bounds, v))
                      for (var z = C; z < L; z++) {
                        var _ = w.parts[z];
                        if (R(_.bounds, v)) {
                          var A = E(_, p);
                          if (A) {
                            r.push(A);
                            break;
                          }
                        }
                      }
                  }
                  return r;
                }),
                  (i.ray = function (p, g, r, y) {
                    y = y || 1e-100;
                    for (
                      var v = d.angle(g, r),
                        E = d.magnitude(d.sub(g, r)),
                        R = (r.x + g.x) * 0.5,
                        D = (r.y + g.y) * 0.5,
                        w = m.rectangle(R, D, E, y, { angle: v }),
                        L = i.collides(w, p),
                        C = 0;
                      C < L.length;
                      C += 1
                    ) {
                      var z = L[C];
                      z.body = z.bodyB = z.bodyA;
                    }
                    return L;
                  }),
                  (i.region = function (p, g, r) {
                    for (var y = [], v = 0; v < p.length; v++) {
                      var E = p[v],
                        R = c.overlaps(E.bounds, g);
                      ((R && !r) || (!R && r)) && y.push(E);
                    }
                    return y;
                  }),
                  (i.point = function (p, g) {
                    for (var r = [], y = 0; y < p.length; y++) {
                      var v = p[y];
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
                p = h(2),
                g = h(14);
              (function () {
                var r, y;
                (typeof window < 'u' &&
                  ((r =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (C) {
                      window.setTimeout(function () {
                        C(f.now());
                      }, 1e3 / 60);
                    }),
                  (y =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (i._goodFps = 30),
                  (i._goodDelta = 1e3 / 60),
                  (i.create = function (C) {
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
                          hasBounds: !!C.bounds,
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
                      _ = f.extend(z, C);
                    return (
                      _.canvas &&
                        ((_.canvas.width = _.options.width || _.canvas.width),
                        (_.canvas.height = _.options.height || _.canvas.height)),
                      (_.mouse = C.mouse),
                      (_.engine = C.engine),
                      (_.canvas = _.canvas || R(_.options.width, _.options.height)),
                      (_.context = _.canvas.getContext('2d')),
                      (_.textures = {}),
                      (_.bounds = _.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: _.canvas.width, y: _.canvas.height },
                      }),
                      (_.controller = i),
                      (_.options.showBroadphase = !1),
                      _.options.pixelRatio !== 1 && i.setPixelRatio(_, _.options.pixelRatio),
                      f.isElement(_.element) && _.element.appendChild(_.canvas),
                      _
                    );
                  }),
                  (i.run = function (C) {
                    (function z(_) {
                      ((C.frameRequestId = r(z)),
                        v(C, _),
                        i.world(C, _),
                        C.context.setTransform(
                          C.options.pixelRatio,
                          0,
                          0,
                          C.options.pixelRatio,
                          0,
                          0
                        ),
                        (C.options.showStats || C.options.showDebug) && i.stats(C, C.context, _),
                        (C.options.showPerformance || C.options.showDebug) &&
                          i.performance(C, C.context, _),
                        C.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (i.stop = function (C) {
                    y(C.frameRequestId);
                  }),
                  (i.setPixelRatio = function (C, z) {
                    var _ = C.options,
                      A = C.canvas;
                    (z === 'auto' && (z = D(A)),
                      (_.pixelRatio = z),
                      A.setAttribute('data-pixel-ratio', z),
                      (A.width = _.width * z),
                      (A.height = _.height * z),
                      (A.style.width = _.width + 'px'),
                      (A.style.height = _.height + 'px'));
                  }),
                  (i.setSize = function (C, z, _) {
                    ((C.options.width = z),
                      (C.options.height = _),
                      (C.bounds.max.x = C.bounds.min.x + z),
                      (C.bounds.max.y = C.bounds.min.y + _),
                      C.options.pixelRatio !== 1
                        ? i.setPixelRatio(C, C.options.pixelRatio)
                        : ((C.canvas.width = z), (C.canvas.height = _)));
                  }),
                  (i.lookAt = function (C, z, _, A) {
                    ((A = typeof A < 'u' ? A : !0),
                      (z = f.isArray(z) ? z : [z]),
                      (_ = _ || { x: 0, y: 0 }));
                    for (
                      var N = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, O = 0;
                      O < z.length;
                      O += 1
                    ) {
                      var H = z[O],
                        G = H.bounds ? H.bounds.min : H.min || H.position || H,
                        J = H.bounds ? H.bounds.max : H.max || H.position || H;
                      G &&
                        J &&
                        (G.x < N.min.x && (N.min.x = G.x),
                        J.x > N.max.x && (N.max.x = J.x),
                        G.y < N.min.y && (N.min.y = G.y),
                        J.y > N.max.y && (N.max.y = J.y));
                    }
                    var te = N.max.x - N.min.x + 2 * _.x,
                      ee = N.max.y - N.min.y + 2 * _.y,
                      q = C.canvas.height,
                      K = C.canvas.width,
                      ne = K / q,
                      se = te / ee,
                      de = 1,
                      j = 1;
                    (se > ne ? (j = se / ne) : (de = ne / se),
                      (C.options.hasBounds = !0),
                      (C.bounds.min.x = N.min.x),
                      (C.bounds.max.x = N.min.x + te * de),
                      (C.bounds.min.y = N.min.y),
                      (C.bounds.max.y = N.min.y + ee * j),
                      A &&
                        ((C.bounds.min.x += te * 0.5 - te * de * 0.5),
                        (C.bounds.max.x += te * 0.5 - te * de * 0.5),
                        (C.bounds.min.y += ee * 0.5 - ee * j * 0.5),
                        (C.bounds.max.y += ee * 0.5 - ee * j * 0.5)),
                      (C.bounds.min.x -= _.x),
                      (C.bounds.max.x -= _.x),
                      (C.bounds.min.y -= _.y),
                      (C.bounds.max.y -= _.y),
                      C.mouse &&
                        (g.setScale(C.mouse, {
                          x: (C.bounds.max.x - C.bounds.min.x) / C.canvas.width,
                          y: (C.bounds.max.y - C.bounds.min.y) / C.canvas.height,
                        }),
                        g.setOffset(C.mouse, C.bounds.min)));
                  }),
                  (i.startViewTransform = function (C) {
                    var z = C.bounds.max.x - C.bounds.min.x,
                      _ = C.bounds.max.y - C.bounds.min.y,
                      A = z / C.options.width,
                      N = _ / C.options.height;
                    (C.context.setTransform(
                      C.options.pixelRatio / A,
                      0,
                      0,
                      C.options.pixelRatio / N,
                      0,
                      0
                    ),
                      C.context.translate(-C.bounds.min.x, -C.bounds.min.y));
                  }),
                  (i.endViewTransform = function (C) {
                    C.context.setTransform(C.options.pixelRatio, 0, 0, C.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (C, z) {
                    var _ = f.now(),
                      A = C.engine,
                      N = A.world,
                      O = C.canvas,
                      H = C.context,
                      G = C.options,
                      J = C.timing,
                      te = c.allBodies(N),
                      ee = c.allConstraints(N),
                      q = G.wireframes ? G.wireframeBackground : G.background,
                      K = [],
                      ne = [],
                      se,
                      de = { timestamp: A.timing.timestamp };
                    if (
                      (o.trigger(C, 'beforeRender', de),
                      C.currentBackground !== q && L(C, q),
                      (H.globalCompositeOperation = 'source-in'),
                      (H.fillStyle = 'transparent'),
                      H.fillRect(0, 0, O.width, O.height),
                      (H.globalCompositeOperation = 'source-over'),
                      G.hasBounds)
                    ) {
                      for (se = 0; se < te.length; se++) {
                        var j = te[se];
                        m.overlaps(j.bounds, C.bounds) && K.push(j);
                      }
                      for (se = 0; se < ee.length; se++) {
                        var F = ee[se],
                          ae = F.bodyA,
                          le = F.bodyB,
                          oe = F.pointA,
                          ie = F.pointB;
                        (ae && (oe = p.add(ae.position, F.pointA)),
                          le && (ie = p.add(le.position, F.pointB)),
                          !(!oe || !ie) &&
                            (m.contains(C.bounds, oe) || m.contains(C.bounds, ie)) &&
                            ne.push(F));
                      }
                      (i.startViewTransform(C),
                        C.mouse &&
                          (g.setScale(C.mouse, {
                            x: (C.bounds.max.x - C.bounds.min.x) / C.options.width,
                            y: (C.bounds.max.y - C.bounds.min.y) / C.options.height,
                          }),
                          g.setOffset(C.mouse, C.bounds.min)));
                    } else
                      ((ne = ee),
                        (K = te),
                        C.options.pixelRatio !== 1 &&
                          C.context.setTransform(
                            C.options.pixelRatio,
                            0,
                            0,
                            C.options.pixelRatio,
                            0,
                            0
                          ));
                    (!G.wireframes || (A.enableSleeping && G.showSleeping)
                      ? i.bodies(C, K, H)
                      : (G.showConvexHulls && i.bodyConvexHulls(C, K, H),
                        i.bodyWireframes(C, K, H)),
                      G.showBounds && i.bodyBounds(C, K, H),
                      (G.showAxes || G.showAngleIndicator) && i.bodyAxes(C, K, H),
                      G.showPositions && i.bodyPositions(C, K, H),
                      G.showVelocity && i.bodyVelocity(C, K, H),
                      G.showIds && i.bodyIds(C, K, H),
                      G.showSeparations && i.separations(C, A.pairs.list, H),
                      G.showCollisions && i.collisions(C, A.pairs.list, H),
                      G.showVertexNumbers && i.vertexNumbers(C, K, H),
                      G.showMousePosition && i.mousePosition(C, C.mouse, H),
                      i.constraints(ne, H),
                      G.hasBounds && i.endViewTransform(C),
                      o.trigger(C, 'afterRender', de),
                      (J.lastElapsed = f.now() - _));
                  }),
                  (i.stats = function (C, z, _) {
                    for (
                      var A = C.engine,
                        N = A.world,
                        O = c.allBodies(N),
                        H = 0,
                        G = 55,
                        J = 44,
                        te = 0,
                        ee = 0,
                        q = 0;
                      q < O.length;
                      q += 1
                    )
                      H += O[q].parts.length;
                    var K = {
                      Part: H,
                      Body: O.length,
                      Cons: c.allConstraints(N).length,
                      Comp: c.allComposites(N).length,
                      Pair: A.pairs.list.length,
                    };
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(te, ee, G * 5.5, J),
                      (z.font = '12px Arial'),
                      (z.textBaseline = 'top'),
                      (z.textAlign = 'right'));
                    for (var ne in K) {
                      var se = K[ne];
                      ((z.fillStyle = '#aaa'),
                        z.fillText(ne, te + G, ee + 8),
                        (z.fillStyle = '#eee'),
                        z.fillText(se, te + G, ee + 26),
                        (te += G));
                    }
                  }),
                  (i.performance = function (C, z) {
                    var _ = C.engine,
                      A = C.timing,
                      N = A.deltaHistory,
                      O = A.elapsedHistory,
                      H = A.timestampElapsedHistory,
                      G = A.engineDeltaHistory,
                      J = A.engineUpdatesHistory,
                      te = A.engineElapsedHistory,
                      ee = _.timing.lastUpdatesPerFrame,
                      q = _.timing.lastDelta,
                      K = E(N),
                      ne = E(O),
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
                      Re = 34,
                      Ze = 10,
                      Pe = 69;
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(0, 50, he * 5 + ye * 6 + 22, Re),
                      i.status(
                        z,
                        Ze,
                        Pe,
                        ye,
                        ie,
                        N.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function (Xe) {
                          return N[Xe] / K - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + he + ye,
                        Pe,
                        ye,
                        ie,
                        G.length,
                        q.toFixed(2) + ' dt',
                        i._goodDelta / q,
                        function (Xe) {
                          return G[Xe] / se - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + (he + ye) * 2,
                        Pe,
                        ye,
                        ie,
                        J.length,
                        ee + ' upf',
                        Math.pow(f.clamp(de / le || 1, 0, 1), 4),
                        function (Xe) {
                          return J[Xe] / de - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + (he + ye) * 3,
                        Pe,
                        ye,
                        ie,
                        te.length,
                        j.toFixed(2) + ' ut',
                        1 - (ee * j) / i._goodFps,
                        function (Xe) {
                          return te[Xe] / j - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + (he + ye) * 4,
                        Pe,
                        ye,
                        ie,
                        O.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function (Xe) {
                          return O[Xe] / ne - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + (he + ye) * 5,
                        Pe,
                        ye,
                        ie,
                        H.length,
                        ae.toFixed(2) + ' x',
                        ae * ae * ae,
                        function (Xe) {
                          return (H[Xe] / N[Xe] / ae || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (C, z, _, A, N, O, H, G, J) {
                    ((C.strokeStyle = '#888'),
                      (C.fillStyle = '#444'),
                      (C.lineWidth = 1),
                      C.fillRect(z, _ + 7, A, 1),
                      C.beginPath(),
                      C.moveTo(z, _ + 7 - N * f.clamp(0.4 * J(0), -2, 2)));
                    for (var te = 0; te < A; te += 1)
                      C.lineTo(z + te, _ + 7 - (te < O ? N * f.clamp(0.4 * J(te), -2, 2) : 0));
                    (C.stroke(),
                      (C.fillStyle = 'hsl(' + f.clamp(25 + 95 * G, 0, 120) + ',100%,60%)'),
                      C.fillRect(z, _ - 7, 4, 4),
                      (C.font = '12px Arial'),
                      (C.textBaseline = 'middle'),
                      (C.textAlign = 'right'),
                      (C.fillStyle = '#eee'),
                      C.fillText(H, z + A, _ - 5));
                  }),
                  (i.constraints = function (C, z) {
                    for (var _ = z, A = 0; A < C.length; A++) {
                      var N = C[A];
                      if (!(!N.render.visible || !N.pointA || !N.pointB)) {
                        var O = N.bodyA,
                          H = N.bodyB,
                          G,
                          J;
                        if (
                          (O ? (G = p.add(O.position, N.pointA)) : (G = N.pointA),
                          N.render.type === 'pin')
                        )
                          (_.beginPath(), _.arc(G.x, G.y, 3, 0, 2 * Math.PI), _.closePath());
                        else {
                          if (
                            (H ? (J = p.add(H.position, N.pointB)) : (J = N.pointB),
                            _.beginPath(),
                            _.moveTo(G.x, G.y),
                            N.render.type === 'spring')
                          )
                            for (
                              var te = p.sub(J, G),
                                ee = p.perp(p.normalise(te)),
                                q = Math.ceil(f.clamp(N.length / 5, 12, 20)),
                                K,
                                ne = 1;
                              ne < q;
                              ne += 1
                            )
                              ((K = ne % 2 === 0 ? 1 : -1),
                                _.lineTo(
                                  G.x + te.x * (ne / q) + ee.x * K * 4,
                                  G.y + te.y * (ne / q) + ee.y * K * 4
                                ));
                          _.lineTo(J.x, J.y);
                        }
                        (N.render.lineWidth &&
                          ((_.lineWidth = N.render.lineWidth),
                          (_.strokeStyle = N.render.strokeStyle),
                          _.stroke()),
                          N.render.anchors &&
                            ((_.fillStyle = N.render.strokeStyle),
                            _.beginPath(),
                            _.arc(G.x, G.y, 3, 0, 2 * Math.PI),
                            _.arc(J.x, J.y, 3, 0, 2 * Math.PI),
                            _.closePath(),
                            _.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var N = C.options,
                      O = N.showInternalEdges || !N.wireframes,
                      H,
                      G,
                      J,
                      te;
                    for (J = 0; J < z.length; J++)
                      if (((H = z[J]), !!H.render.visible)) {
                        for (te = H.parts.length > 1 ? 1 : 0; te < H.parts.length; te++)
                          if (((G = H.parts[te]), !!G.render.visible)) {
                            if (
                              (N.showSleeping && H.isSleeping
                                ? (A.globalAlpha = 0.5 * G.render.opacity)
                                : G.render.opacity !== 1 && (A.globalAlpha = G.render.opacity),
                              G.render.sprite && G.render.sprite.texture && !N.wireframes)
                            ) {
                              var ee = G.render.sprite,
                                q = w(C, ee.texture);
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
                                  (!G.vertices[K - 1].isInternal || O
                                    ? A.lineTo(G.vertices[K].x, G.vertices[K].y)
                                    : A.moveTo(G.vertices[K].x, G.vertices[K].y),
                                    G.vertices[K].isInternal &&
                                      !O &&
                                      A.moveTo(
                                        G.vertices[(K + 1) % G.vertices.length].x,
                                        G.vertices[(K + 1) % G.vertices.length].y
                                      ));
                                (A.lineTo(G.vertices[0].x, G.vertices[0].y), A.closePath());
                              }
                              N.wireframes
                                ? ((A.lineWidth = 1),
                                  (A.strokeStyle = C.options.wireframeStrokeStyle),
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
                  (i.bodyWireframes = function (C, z, _) {
                    var A = _,
                      N = C.options.showInternalEdges,
                      O,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((O = z[G]), !!O.render.visible))
                        for (te = O.parts.length > 1 ? 1 : 0; te < O.parts.length; te++) {
                          for (
                            H = O.parts[te], A.moveTo(H.vertices[0].x, H.vertices[0].y), J = 1;
                            J < H.vertices.length;
                            J++
                          )
                            (!H.vertices[J - 1].isInternal || N
                              ? A.lineTo(H.vertices[J].x, H.vertices[J].y)
                              : A.moveTo(H.vertices[J].x, H.vertices[J].y),
                              H.vertices[J].isInternal &&
                                !N &&
                                A.moveTo(
                                  H.vertices[(J + 1) % H.vertices.length].x,
                                  H.vertices[(J + 1) % H.vertices.length].y
                                ));
                          A.lineTo(H.vertices[0].x, H.vertices[0].y);
                        }
                    ((A.lineWidth = 1),
                      (A.strokeStyle = C.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (i.bodyConvexHulls = function (C, z, _) {
                    var A = _,
                      N,
                      O,
                      H;
                    for (A.beginPath(), O = 0; O < z.length; O++)
                      if (((N = z[O]), !(!N.render.visible || N.parts.length === 1))) {
                        for (
                          A.moveTo(N.vertices[0].x, N.vertices[0].y), H = 1;
                          H < N.vertices.length;
                          H++
                        )
                          A.lineTo(N.vertices[H].x, N.vertices[H].y);
                        A.lineTo(N.vertices[0].x, N.vertices[0].y);
                      }
                    ((A.lineWidth = 1), (A.strokeStyle = 'rgba(255,255,255,0.2)'), A.stroke());
                  }),
                  (i.vertexNumbers = function (C, z, _) {
                    var A = _,
                      N,
                      O,
                      H;
                    for (N = 0; N < z.length; N++) {
                      var G = z[N].parts;
                      for (H = G.length > 1 ? 1 : 0; H < G.length; H++) {
                        var J = G[H];
                        for (O = 0; O < J.vertices.length; O++)
                          ((A.fillStyle = 'rgba(255,255,255,0.2)'),
                            A.fillText(
                              N + '_' + O,
                              J.position.x + (J.vertices[O].x - J.position.x) * 0.8,
                              J.position.y + (J.vertices[O].y - J.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (C, z, _) {
                    var A = _;
                    ((A.fillStyle = 'rgba(255,255,255,0.8)'),
                      A.fillText(
                        z.position.x + '  ' + z.position.y,
                        z.position.x + 5,
                        z.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var N = C.options;
                    A.beginPath();
                    for (var O = 0; O < z.length; O++) {
                      var H = z[O];
                      if (H.render.visible)
                        for (var G = z[O].parts, J = G.length > 1 ? 1 : 0; J < G.length; J++) {
                          var te = G[J];
                          A.rect(
                            te.bounds.min.x,
                            te.bounds.min.y,
                            te.bounds.max.x - te.bounds.min.x,
                            te.bounds.max.y - te.bounds.min.y
                          );
                        }
                    }
                    (N.wireframes
                      ? (A.strokeStyle = 'rgba(255,255,255,0.08)')
                      : (A.strokeStyle = 'rgba(0,0,0,0.1)'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (i.bodyAxes = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var N = C.options,
                      O,
                      H,
                      G,
                      J;
                    for (A.beginPath(), H = 0; H < z.length; H++) {
                      var te = z[H],
                        ee = te.parts;
                      if (te.render.visible)
                        if (N.showAxes)
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (O = ee[G], J = 0; J < O.axes.length; J++) {
                              var q = O.axes[J];
                              (A.moveTo(O.position.x, O.position.y),
                                A.lineTo(O.position.x + q.x * 20, O.position.y + q.y * 20));
                            }
                        else
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (O = ee[G], J = 0; J < O.axes.length; J++)
                              (A.moveTo(O.position.x, O.position.y),
                                A.lineTo(
                                  (O.vertices[0].x + O.vertices[O.vertices.length - 1].x) / 2,
                                  (O.vertices[0].y + O.vertices[O.vertices.length - 1].y) / 2
                                ));
                    }
                    (N.wireframes
                      ? ((A.strokeStyle = 'indianred'), (A.lineWidth = 1))
                      : ((A.strokeStyle = 'rgba(255, 255, 255, 0.4)'),
                        (A.globalCompositeOperation = 'overlay'),
                        (A.lineWidth = 2)),
                      A.stroke(),
                      (A.globalCompositeOperation = 'source-over'));
                  }),
                  (i.bodyPositions = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var N = C.options,
                      O,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((O = z[G]), !!O.render.visible))
                        for (J = 0; J < O.parts.length; J++)
                          ((H = O.parts[J]),
                            A.arc(H.position.x, H.position.y, 3, 0, 2 * Math.PI, !1),
                            A.closePath());
                    for (
                      N.wireframes
                        ? (A.fillStyle = 'indianred')
                        : (A.fillStyle = 'rgba(0,0,0,0.5)'),
                        A.fill(),
                        A.beginPath(),
                        G = 0;
                      G < z.length;
                      G++
                    )
                      ((O = z[G]),
                        O.render.visible &&
                          (A.arc(O.positionPrev.x, O.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          A.closePath()));
                    ((A.fillStyle = 'rgba(255,165,0,0.8)'), A.fill());
                  }),
                  (i.bodyVelocity = function (C, z, _) {
                    var A = _;
                    A.beginPath();
                    for (var N = 0; N < z.length; N++) {
                      var O = z[N];
                      if (O.render.visible) {
                        var H = d.getVelocity(O);
                        (A.moveTo(O.position.x, O.position.y),
                          A.lineTo(O.position.x + H.x, O.position.y + H.y));
                      }
                    }
                    ((A.lineWidth = 3), (A.strokeStyle = 'cornflowerblue'), A.stroke());
                  }),
                  (i.bodyIds = function (C, z, _) {
                    var A = _,
                      N,
                      O;
                    for (N = 0; N < z.length; N++)
                      if (z[N].render.visible) {
                        var H = z[N].parts;
                        for (O = H.length > 1 ? 1 : 0; O < H.length; O++) {
                          var G = H[O];
                          ((A.font = '12px Arial'),
                            (A.fillStyle = 'rgba(255,255,255,0.5)'),
                            A.fillText(G.id, G.position.x + 10, G.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (C, z, _) {
                    var A = _,
                      N = C.options,
                      O,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((O = z[G]), !!O.isActive))
                        for (H = O.collision, J = 0; J < O.contactCount; J++) {
                          var te = O.contacts[J],
                            ee = te.vertex;
                          A.rect(ee.x - 1.5, ee.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      N.wireframes
                        ? (A.fillStyle = 'rgba(255,255,255,0.7)')
                        : (A.fillStyle = 'orange'),
                        A.fill(),
                        A.beginPath(),
                        G = 0;
                      G < z.length;
                      G++
                    )
                      if (((O = z[G]), !!O.isActive && ((H = O.collision), O.contactCount > 0))) {
                        var q = O.contacts[0].vertex.x,
                          K = O.contacts[0].vertex.y;
                        (O.contactCount === 2 &&
                          ((q = (O.contacts[0].vertex.x + O.contacts[1].vertex.x) / 2),
                          (K = (O.contacts[0].vertex.y + O.contacts[1].vertex.y) / 2)),
                          H.bodyB === H.supports[0].body || H.bodyA.isStatic === !0
                            ? A.moveTo(q - H.normal.x * 8, K - H.normal.y * 8)
                            : A.moveTo(q + H.normal.x * 8, K + H.normal.y * 8),
                          A.lineTo(q, K));
                      }
                    (N.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.7)')
                      : (A.strokeStyle = 'orange'),
                      (A.lineWidth = 1),
                      A.stroke());
                  }),
                  (i.separations = function (C, z, _) {
                    var A = _,
                      N = C.options,
                      O,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), te = 0; te < z.length; te++)
                      if (((O = z[te]), !!O.isActive)) {
                        ((H = O.collision), (G = H.bodyA), (J = H.bodyB));
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
                    (N.wireframes
                      ? (A.strokeStyle = 'rgba(255,165,0,0.5)')
                      : (A.strokeStyle = 'orange'),
                      A.stroke());
                  }),
                  (i.inspector = function (C, z) {
                    C.engine;
                    var _ = C.selected,
                      A = C.render,
                      N = A.options,
                      O;
                    if (N.hasBounds) {
                      var H = A.bounds.max.x - A.bounds.min.x,
                        G = A.bounds.max.y - A.bounds.min.y,
                        J = H / A.options.width,
                        te = G / A.options.height;
                      (z.scale(1 / J, 1 / te), z.translate(-A.bounds.min.x, -A.bounds.min.y));
                    }
                    for (var ee = 0; ee < _.length; ee++) {
                      var q = _[ee].data;
                      switch (
                        (z.translate(0.5, 0.5),
                        (z.lineWidth = 1),
                        (z.strokeStyle = 'rgba(255,165,0,0.9)'),
                        z.setLineDash([1, 2]),
                        q.type)
                      ) {
                        case 'body':
                          ((O = q.bounds),
                            z.beginPath(),
                            z.rect(
                              Math.floor(O.min.x - 3),
                              Math.floor(O.min.y - 3),
                              Math.floor(O.max.x - O.min.x + 6),
                              Math.floor(O.max.y - O.min.y + 6)
                            ),
                            z.closePath(),
                            z.stroke());
                          break;
                        case 'constraint':
                          var K = q.pointA;
                          (q.bodyA && (K = q.pointB),
                            z.beginPath(),
                            z.arc(K.x, K.y, 10, 0, 2 * Math.PI),
                            z.closePath(),
                            z.stroke());
                          break;
                      }
                      (z.setLineDash([]), z.translate(-0.5, -0.5));
                    }
                    (C.selectStart !== null &&
                      (z.translate(0.5, 0.5),
                      (z.lineWidth = 1),
                      (z.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (z.fillStyle = 'rgba(255,165,0,0.1)'),
                      (O = C.selectBounds),
                      z.beginPath(),
                      z.rect(
                        Math.floor(O.min.x),
                        Math.floor(O.min.y),
                        Math.floor(O.max.x - O.min.x),
                        Math.floor(O.max.y - O.min.y)
                      ),
                      z.closePath(),
                      z.stroke(),
                      z.fill(),
                      z.translate(-0.5, -0.5)),
                      N.hasBounds && z.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (C, z) {
                    var _ = C.engine,
                      A = C.timing,
                      N = A.historySize,
                      O = _.timing.timestamp;
                    ((A.delta = z - A.lastTime || i._goodDelta),
                      (A.lastTime = z),
                      (A.timestampElapsed = O - A.lastTimestamp || 0),
                      (A.lastTimestamp = O),
                      A.deltaHistory.unshift(A.delta),
                      (A.deltaHistory.length = Math.min(A.deltaHistory.length, N)),
                      A.engineDeltaHistory.unshift(_.timing.lastDelta),
                      (A.engineDeltaHistory.length = Math.min(A.engineDeltaHistory.length, N)),
                      A.timestampElapsedHistory.unshift(A.timestampElapsed),
                      (A.timestampElapsedHistory.length = Math.min(
                        A.timestampElapsedHistory.length,
                        N
                      )),
                      A.engineUpdatesHistory.unshift(_.timing.lastUpdatesPerFrame),
                      (A.engineUpdatesHistory.length = Math.min(A.engineUpdatesHistory.length, N)),
                      A.engineElapsedHistory.unshift(_.timing.lastElapsed),
                      (A.engineElapsedHistory.length = Math.min(A.engineElapsedHistory.length, N)),
                      A.elapsedHistory.unshift(A.lastElapsed),
                      (A.elapsedHistory.length = Math.min(A.elapsedHistory.length, N)));
                  },
                  E = function (C) {
                    for (var z = 0, _ = 0; _ < C.length; _ += 1) z += C[_];
                    return z / C.length || 0;
                  },
                  R = function (C, z) {
                    var _ = document.createElement('canvas');
                    return (
                      (_.width = C),
                      (_.height = z),
                      (_.oncontextmenu = function () {
                        return !1;
                      }),
                      (_.onselectstart = function () {
                        return !1;
                      }),
                      _
                    );
                  },
                  D = function (C) {
                    var z = C.getContext('2d'),
                      _ = window.devicePixelRatio || 1,
                      A =
                        z.webkitBackingStorePixelRatio ||
                        z.mozBackingStorePixelRatio ||
                        z.msBackingStorePixelRatio ||
                        z.oBackingStorePixelRatio ||
                        z.backingStorePixelRatio ||
                        1;
                    return _ / A;
                  },
                  w = function (C, z) {
                    var _ = C.textures[z];
                    return _ || ((_ = C.textures[z] = new Image()), (_.src = z), _);
                  },
                  L = function (C, z) {
                    var _ = z;
                    (/(jpg|gif|png)$/.test(z) && (_ = 'url(' + z + ')'),
                      (C.canvas.style.background = _),
                      (C.canvas.style.backgroundSize = 'contain'),
                      (C.currentBackground = z));
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
                      g = c.extend(p, o);
                    return ((g.fps = 0), g);
                  }),
                  (i.run = function (o, p) {
                    return (
                      (o.timeBuffer = i._frameDeltaFallback),
                      (function g(r) {
                        ((o.frameRequestId = i._onNextFrame(o, g)),
                          r && o.enabled && i.tick(o, p, r));
                      })(),
                      o
                    );
                  }),
                  (i.tick = function (o, p, g) {
                    var r = c.now(),
                      y = o.delta,
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
                        o.frameDelta + y * i._timeBufferMargin
                      )),
                      (o.lastUpdatesDeferred = 0));
                    var L = o.maxUpdates || Math.ceil(o.maxFrameTime / y),
                      C = { timestamp: p.timing.timestamp };
                    (d.trigger(o, 'beforeTick', C), d.trigger(o, 'tick', C));
                    for (var z = c.now(); y > 0 && o.timeBuffer >= y * i._timeBufferMargin; ) {
                      (d.trigger(o, 'beforeUpdate', C),
                        f.update(p, y),
                        d.trigger(o, 'afterUpdate', C),
                        (o.timeBuffer -= y),
                        (v += 1));
                      var _ = c.now() - r,
                        A = c.now() - z,
                        N = _ + (i._elapsedNextEstimate * A) / v;
                      if (v >= L || N > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((p.timing.lastUpdatesPerFrame = v),
                      d.trigger(o, 'afterTick', C),
                      o.frameDeltaHistory.length >= 100 &&
                        (o.lastUpdatesDeferred && Math.round(o.frameDelta / y) > L
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
                  for (var p = 0, g = o.length, r = 0; r < g; r += 1) p += o[r];
                  return p / g || 0;
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
                    g,
                    r,
                    y,
                    v,
                    E,
                    R,
                    D,
                    w = [],
                    L,
                    C,
                    z = 0,
                    _ = 0,
                    A = 0;
                  c = c || 15;
                  var N = function (H, G, J) {
                      var te = J % 2 === 1 && J > 1;
                      if (!R || H != R.x || G != R.y) {
                        R && te ? ((L = R.x), (C = R.y)) : ((L = 0), (C = 0));
                        var ee = { x: L + H, y: C + G };
                        ((te || !R) && (R = ee), w.push(ee), (_ = L + H), (A = C + G));
                      }
                    },
                    O = function (H) {
                      var G = H.pathSegTypeAsLetter.toUpperCase();
                      if (G !== 'Z') {
                        switch (G) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((_ = H.x), (A = H.y));
                            break;
                          case 'H':
                            _ = H.x;
                            break;
                          case 'V':
                            A = H.y;
                            break;
                        }
                        N(_, A, H.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(f), p = f.getTotalLength(), y = [], m = 0;
                    m < f.pathSegList.numberOfItems;
                    m += 1
                  )
                    y.push(f.pathSegList.getItem(m));
                  for (v = y.concat(); z < p; ) {
                    if (((D = f.getPathSegAtLength(z)), (r = y[D]), r != E)) {
                      for (; v.length && v[0] != r; ) O(v.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = f.getPointAtLength(z)), N(g.x, g.y, 0));
                        break;
                    }
                    z += c;
                  }
                  for (m = 0, o = v.length; m < o; ++m) O(v[m]);
                  return w;
                }),
                  (i._svgPathToAbsolute = function (f) {
                    for (
                      var c,
                        m,
                        o,
                        p,
                        g,
                        r,
                        y = f.pathSegList,
                        v = 0,
                        E = 0,
                        R = y.numberOfItems,
                        D = 0;
                      D < R;
                      ++D
                    ) {
                      var w = y.getItem(D),
                        L = w.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(L)) ('x' in w && (v = w.x), 'y' in w && (E = w.y));
                      else
                        switch (
                          ('x1' in w && (o = v + w.x1),
                          'x2' in w && (g = v + w.x2),
                          'y1' in w && (p = E + w.y1),
                          'y2' in w && (r = E + w.y2),
                          'x' in w && (v += w.x),
                          'y' in w && (E += w.y),
                          L)
                        ) {
                          case 'm':
                            y.replaceItem(f.createSVGPathSegMovetoAbs(v, E), D);
                            break;
                          case 'l':
                            y.replaceItem(f.createSVGPathSegLinetoAbs(v, E), D);
                            break;
                          case 'h':
                            y.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(v), D);
                            break;
                          case 'v':
                            y.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), D);
                            break;
                          case 'c':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicAbs(v, E, o, p, g, r), D);
                            break;
                          case 's':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(v, E, g, r), D);
                            break;
                          case 'q':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(v, E, o, p), D);
                            break;
                          case 't':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(v, E), D);
                            break;
                          case 'a':
                            y.replaceItem(
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
      })(ku)),
    ku.exports
  );
}
var G1 = j1();
const Be = i0(G1),
  ln = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  Y1 = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  q1 = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  V1 = {
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
  X1 = {
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
  Qh = (s, b) => {
    const T = String(b).padStart(2, '0');
    return `images/${s}/level${T}.png`;
  },
  Q1 = 256,
  ih = {
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
  Z1 = (s) => (s * (s + 1)) / 2,
  K1 = (s) => ({
    id: s,
    level: s,
    name: V1[s],
    theme: X1[s],
    radius: Y1[s],
    restitution: q1[s],
    friction: 0.3,
    density: 0.001,
    score: Z1(s),
    svgPath: Qh(qc, s),
    color: ih[s].color,
    glowColor: ih[s].glow,
  }),
  Ha = 10,
  Iu = Object.fromEntries(Array.from({ length: Ha }, (s, b) => b + 1).map((s) => [s, K1(s)]));
Array.from({ length: Ha }, (s, b) => Iu[b + 1]);
const J1 = 3,
  k1 = 360,
  F1 = (s) => Math.min(1, s / k1),
  uh = new Map(),
  Al = (s, b, T = qc) => {
    const x = `${s}|${b}|${T}`,
      h = uh.get(x);
    if (h) return h;
    const i = Iu[s],
      d = { ...i, radius: i.radius * F1(b), svgPath: Qh(T, s) };
    return (uh.set(x, d), d);
  },
  Ln = {
    gravityY: 1.5,
    wallThickness: 20,
    gameOverLineOffset: 80,
    restingVelocityThreshold: 0.5,
    gameOverGracePeriodMs: 1e3,
    gameOverDangerLimitMs: 5e3,
  },
  $t = {
    gaugeMax: 100,
    bonusOnLevel10Created: 8,
    bonusOnSpecialElimination: 25,
    shake: { impulseMin: 0.04, impulseMax: 0.12, upwardBias: 0.05 },
    gravityFlip: { durationMs: 3e3, multiplier: -0.8 },
    magnet: { durationMs: 1500, forceMagnitude: 0.0012 },
  },
  $1 = (s) => s,
  Zh = typeof window < 'u' && typeof window.localStorage < 'u',
  er = (s) => {
    if (!Zh) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  tr = (s, b) => {
    if (Zh)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  W1 = () => {
    const s = er(ln.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  P1 = (s) => {
    tr(ln.storageKeys.bestScore, String(s));
  },
  I1 = () => {
    const s = er(ln.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  eS = (s) => {
    const b = [s, ...I1()].slice(0, ln.maxScoreHistory);
    return (tr(ln.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  tS = () => {
    const s = er(ln.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  nS = (s) => {
    tr(ln.storageKeys.isSoundOn, String(s));
  },
  aS = () => {
    const s = er(ln.storageKeys.themeId);
    return Lh(s) ? s : qc;
  },
  lS = (s) => {
    tr(ln.storageKeys.themeId, s);
  },
  iS = () => {
    const [s, b] = B.useState(0),
      [T, x] = B.useState(0),
      [h, i] = B.useState(!1),
      d = B.useRef(0),
      f = B.useRef(0);
    B.useEffect(() => {
      const p = W1();
      ((f.current = p), x(p));
    }, []);
    const c = B.useCallback((p) => {
        ((d.current += p), b(d.current));
      }, []),
      m = B.useCallback(() => {
        ((d.current = 0), b(0), i(!1));
      }, []),
      o = B.useCallback(() => {
        const p = d.current,
          g = p > f.current;
        return (
          g && ((f.current = p), P1(p), x(p)),
          eS(p),
          i(g),
          { isNewRecord: g, finalScore: p }
        );
      }, []);
    return { score: s, bestScore: T, isNewRecord: h, add: c, reset: m, finalize: o };
  },
  uS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  rS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  sS = 0.7,
  cS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  oS = () => {
    const [s, b] = B.useState(!0),
      T = B.useRef(null),
      x = B.useRef({});
    (B.useEffect(() => {
      b(tS());
    }, []),
      B.useEffect(() => {
        const d = cS();
        if (!d) return;
        const f = new d();
        T.current = f;
        let c = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, p] of Object.entries(rS))
              try {
                const r = await (await fetch(uS(p))).arrayBuffer();
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
    const h = B.useCallback(() => {
        b((d) => {
          const f = !d;
          return (nS(f), f);
        });
      }, []),
      i = B.useCallback(
        (d) => {
          if (!s) return;
          const f = T.current,
            c = x.current[d];
          if (!f || !c) return;
          f.state === 'suspended' && f.resume().catch(() => {});
          const m = f.createBufferSource();
          m.buffer = c;
          const o = f.createGain();
          ((o.gain.value = sS), m.connect(o).connect(f.destination), m.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: h, play: i };
  },
  rh = (s, b, T, x) => {
    const h = Be.Bodies.circle(b, T, s.radius, {
      restitution: s.restitution,
      friction: s.friction,
      density: s.density,
      label: `item-${s.level}`,
    });
    return ((h.plugin.itemData = { level: s.level, consumed: !1, droppedAt: x }), h);
  },
  ma = (s) => s.plugin.itemData,
  fS = (s, b) => {
    const T = Ln.wallThickness,
      x = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = Be.Bodies.rectangle(s / 2, b + T / 2, s + T * 2, T, x),
      i = Be.Bodies.rectangle(-T / 2, b / 2, T, b * 2, x),
      d = Be.Bodies.rectangle(s + T / 2, b / 2, T, b * 2, x);
    return { ground: h, leftWall: i, rightWall: d };
  },
  dS = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  mS = (s) => (s < 2 || s > Ha ? 0 : Iu[s].score),
  hS = () => Iu[Ha].score,
  sh = new Map(),
  Kh = (s) => {
    const b = sh.get(s);
    if (b) return b;
    const T = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (sh.set(s, T), T);
  },
  Rc = (s, b) => {
    const T = (b.radius * 2) / Q1;
    s.render.sprite = { texture: Kh(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  ch = new Set(),
  oh = (s) => {
    for (let b = 1; b <= Ha; b += 1) {
      const T = Al(b, 1, s),
        x = Kh(T.svgPath);
      if (ch.has(x)) continue;
      ch.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  vS = ({ fieldWidth: s, fieldHeight: b }) => {
    const T = B.useRef(null),
      x = B.useRef(null),
      h = B.useRef(null),
      i = B.useRef(null),
      d = B.useRef(null),
      [f, c] = B.useState('idle'),
      [m, o] = B.useState(null),
      [p, g] = B.useState(null),
      r = B.useRef(null),
      y = B.useRef(null),
      v = B.useCallback((ue) => {
        ((r.current = ue), o(ue));
      }, []),
      E = B.useCallback((ue) => {
        ((y.current = ue), g(ue));
      }, []),
      R = B.useRef(!0),
      D = B.useRef(0),
      w = B.useRef('idle'),
      L = B.useRef(null),
      C = B.useRef(s),
      z = B.useRef(b),
      [_, A] = B.useState(() => aS()),
      N = B.useRef(_);
    N.current = _;
    const O = iS(),
      H = oS(),
      G = B.useRef(O.add);
    G.current = O.add;
    const J = B.useRef(H.play);
    J.current = H.play;
    const te = B.useRef(O.finalize);
    te.current = O.finalize;
    const [ee, q] = B.useState(0),
      K = B.useRef(0),
      ne = B.useCallback((ue) => {
        ((K.current = ue), q(ue));
      }, []),
      se = B.useCallback(
        (ue) => {
          const ve = Math.min($t.gaugeMax, K.current + ue);
          ve !== K.current && ne(ve);
        },
        [ne]
      ),
      de = B.useRef(se);
    de.current = se;
    const [j, F] = B.useState(!1),
      [ae, le] = B.useState(!1),
      oe = B.useRef(!1),
      [ie, he] = B.useState(!1),
      ye = B.useRef(null),
      Re = B.useRef(null),
      Ze = B.useRef(null),
      Pe = B.useRef(null),
      Xe = B.useRef(null),
      [La, _t] = B.useState(null),
      Pt = B.useRef(null),
      it = B.useRef(new Set()),
      un = B.useCallback(() => {
        const ue = Math.floor(Math.random() * J1) + 1;
        return Al(ue, C.current, N.current);
      }, []);
    B.useEffect(() => {
      const ue = T.current;
      if (!ue) return;
      const ve = C.current,
        Oe = z.current,
        Ae = Be.Engine.create({ gravity: { x: 0, y: Ln.gravityY } }),
        Ce = Be.Render.create({
          element: ue,
          engine: Ae,
          options: {
            width: ve,
            height: Oe,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: Ge, leftWall: Ke, rightWall: Je } = fS(ve, Oe);
      ([Ge, Ke, Je].forEach((xt) => {
        xt.render.visible = !1;
      }),
        Be.World.add(Ae.world, [Ge, Ke, Je]),
        Be.Render.run(Ce));
      const Ye = Be.Runner.create();
      (Be.Runner.run(Ye, Ae), (x.current = Ae), (h.current = Ce), (i.current = Ye));
      for (const xt of Yc) oh(xt.id);
      const rt = () => {
        document.hidden
          ? (Be.Runner.stop(Ye), Be.Render.stop(Ce))
          : (Be.Render.run(Ce), Be.Runner.run(Ye, Ae));
      };
      document.addEventListener('visibilitychange', rt);
      const Fe = it.current;
      return () => {
        (document.removeEventListener('visibilitychange', rt),
          Be.Runner.stop(Ye),
          Be.Render.stop(Ce),
          Be.World.clear(Ae.world, !1),
          Be.Engine.clear(Ae),
          Ce.canvas.parentNode && Ce.canvas.parentNode.removeChild(Ce.canvas),
          (Ce.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          Fe.clear());
      };
    }, []);
    const vn = B.useCallback((ue, ve) => {
      var Fe;
      const Oe = x.current;
      if (!Oe) return;
      const Ae = ma(ue),
        Ce = ma(ve);
      if (!Ae || !Ce || Ae.consumed || Ce.consumed || Ae.level !== Ce.level) return;
      ((Ae.consumed = !0), (Ce.consumed = !0));
      const Ge = Ae.level + 1,
        Ke = dS(ue, ve);
      (Be.World.remove(Oe.world, [ue, ve]), it.current.delete(ue), it.current.delete(ve));
      let Je = 0,
        Ye = !1,
        rt = $1(Ge);
      if (Ge > Ha)
        ((Je = hS()), (Ye = !0), (rt += $t.bonusOnSpecialElimination), J.current('special'));
      else {
        const xt = Al(Ge, C.current, N.current),
          Ot = rh(xt, Ke.x, Ke.y, performance.now());
        (Rc(Ot, xt),
          Be.World.add(Oe.world, Ot),
          it.current.add(Ot),
          (Je = mS(Ge)),
          (Ye = Ge === Ha),
          Ye && (rt += $t.bonusOnLevel10Created),
          J.current(Ye ? 'special' : 'merge'));
      }
      (G.current(Je),
        de.current(rt),
        (Fe = d.current) == null || Fe.add({ x: Ke.x, y: Ke.y, score: Je, isSpecial: Ye }));
    }, []);
    (B.useEffect(() => {
      const ue = x.current;
      if (!ue) return;
      const ve = (Oe) => {
        for (const Ae of Oe.pairs) vn(Ae.bodyA, Ae.bodyB);
      };
      return (
        Be.Events.on(ue, 'collisionStart', ve),
        () => {
          Be.Events.off(ue, 'collisionStart', ve);
        }
      );
    }, [vn]),
      B.useEffect(() => {
        const ue = x.current;
        if (!ue) return;
        const ve = Ln.gameOverLineOffset;
        let Oe = 0;
        const Ae = () => {
            ((Xe.current = null), Pt.current !== null && ((Pt.current = null), _t(null)));
          },
          Ce = () => {
            if (Ze.current !== null)
              if (performance.now() >= Ze.current)
                ((Ze.current = null), (Pe.current = null), (ye.current = null));
              else {
                const xt = Pe.current;
                if (xt !== null) {
                  const Ot = [];
                  for (const sn of it.current) {
                    const wt = ma(sn);
                    wt && !wt.consumed && wt.level === xt && Ot.push(sn);
                  }
                  if (Ot.length >= 2) {
                    let sn = 0,
                      wt = 0;
                    for (const cn of Ot) ((sn += cn.position.x), (wt += cn.position.y));
                    ((sn /= Ot.length), (wt /= Ot.length));
                    for (const cn of Ot) {
                      const Ol = sn - cn.position.x,
                        wl = wt - cn.position.y,
                        Ya = Math.hypot(Ol, wl);
                      if (Ya < 1) continue;
                      const qa = $t.magnet.forceMagnitude * cn.mass;
                      Be.Body.applyForce(cn, cn.position, { x: (Ol / Ya) * qa, y: (wl / Ya) * qa });
                    }
                  } else ((Ze.current = null), (Pe.current = null), (ye.current = null));
                }
              }
            if (w.current !== 'playing' || ((Oe = (Oe + 1) % 6), Oe !== 0)) return;
            const Ge = performance.now();
            let Ke = !1;
            for (const Fe of it.current) {
              const xt = ma(Fe);
              if (
                !(!xt || xt.consumed) &&
                !(Ge - xt.droppedAt < Ln.gameOverGracePeriodMs) &&
                !(Math.abs(Fe.velocity.y) > Ln.restingVelocityThreshold) &&
                Fe.position.y - Fe.circleRadius < ve
              ) {
                Ke = !0;
                break;
              }
            }
            if (!Ke) {
              Ae();
              return;
            }
            Xe.current === null && (Xe.current = Ge);
            const Je = Ge - Xe.current,
              Ye = Ln.gameOverDangerLimitMs;
            if (Je >= Ye) {
              (Ae(), (w.current = 'gameover'), c('gameover'));
              const Fe = te.current();
              J.current(Fe.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const rt = Math.max(1, Math.ceil((Ye - Je) / 1e3));
            rt !== Pt.current && ((Pt.current = rt), _t(rt));
          };
        return (
          Be.Events.on(ue, 'afterUpdate', Ce),
          () => {
            Be.Events.off(ue, 'afterUpdate', Ce);
          }
        );
      }, []),
      B.useEffect(() => {
        if (x.current) {
          oh(_);
          for (const Ae of it.current) {
            const Ce = ma(Ae);
            if (!Ce || Ce.consumed) continue;
            const Ge = Al(Ce.level, C.current, _);
            Rc(Ae, Ge);
          }
        }
        const ve = r.current ? Al(r.current.level, C.current, _) : null,
          Oe = y.current ? Al(y.current.level, C.current, _) : null;
        (v(ve), E(Oe));
      }, [_, v, E]));
    const yt = B.useCallback((ue) => {
        (A(ue), lS(ue));
      }, []),
      pt = B.useCallback((ue) => {
        ((oe.current = ue), le(ue));
      }, []),
      Dt = B.useCallback(() => {
        ne(0);
      }, [ne]),
      ha = B.useCallback(() => {
        if (!x.current) return;
        ye.current = 'shake';
        const { impulseMin: ve, impulseMax: Oe, upwardBias: Ae } = $t.shake;
        for (const Ce of it.current) {
          const Ge = ma(Ce);
          if (!Ge || Ge.consumed) continue;
          const Ke = Math.random() * Math.PI * 2,
            Je = ve + Math.random() * (Oe - ve),
            Ye = Math.cos(Ke) * Je * Ce.mass,
            rt = (Math.sin(Ke) * Je - Ae) * Ce.mass;
          Be.Body.applyForce(Ce, Ce.position, { x: Ye, y: rt });
        }
        (J.current('special'), (ye.current = null));
      }, []),
      va = B.useCallback(() => {
        const ue = x.current;
        if (!ue || Re.current !== null) return;
        ye.current = 'gravityFlip';
        const ve = ue.gravity.y;
        ((ue.gravity.y = ve * $t.gravityFlip.multiplier),
          he(!0),
          J.current('special'),
          (Re.current = window.setTimeout(() => {
            const Oe = x.current;
            (Oe && (Oe.gravity.y = ve),
              he(!1),
              (Re.current = null),
              ye.current === 'gravityFlip' && (ye.current = null));
          }, $t.gravityFlip.durationMs)));
      }, []),
      ut = B.useCallback(() => {
        ((ye.current = 'magnet'), pt(!0));
      }, [pt]),
      ja = B.useCallback(() => {
        oe.current && (pt(!1), (ye.current = null));
      }, [pt]),
      gn = B.useCallback(
        (ue, ve) => {
          if (!oe.current) return;
          const Oe = Array.from(it.current),
            Ae = Be.Query.point(Oe, { x: ue, y: ve });
          if (Ae.length === 0) return;
          const Ce = ma(Ae[0]);
          !Ce ||
            Oe.filter((Ke) => {
              var Je;
              return ((Je = ma(Ke)) == null ? void 0 : Je.level) === Ce.level;
            }).length < 2 ||
            ((Pe.current = Ce.level),
            (Ze.current = performance.now() + $t.magnet.durationMs),
            pt(!1),
            J.current('special'),
            Dt());
        },
        [Dt, pt]
      ),
      Ga = B.useCallback(() => {
        K.current < $t.gaugeMax || (w.current === 'playing' && F(!0));
      }, []),
      qn = B.useCallback(() => {
        F(!1);
      }, []),
      Vn = B.useCallback(
        (ue) => {
          K.current < $t.gaugeMax ||
            (F(!1),
            ue === 'shake'
              ? (ha(), Dt())
              : ue === 'gravityFlip'
                ? (va(), Dt())
                : ue === 'magnet' && ut());
        },
        [ha, va, ut, Dt]
      ),
      rn = B.useCallback(() => {
        Re.current !== null && (window.clearTimeout(Re.current), (Re.current = null));
        const ue = x.current;
        (ue && (ue.gravity.y = Ln.gravityY),
          he(!1),
          (Ze.current = null),
          (Pe.current = null),
          (ye.current = null),
          F(!1),
          pt(!1),
          ne(0));
      }, [pt, ne]),
      nr = B.useCallback(
        (ue) => {
          const ve = x.current;
          if (!ve || w.current !== 'playing' || !R.current) return;
          const Oe = r.current;
          if (!Oe) return;
          const Ae = performance.now();
          if (Ae - D.current < ln.dropCooldownMs) return;
          const Ce = Math.max(0, Math.min(1, ue)),
            Ge = Oe.radius + Ln.wallThickness / 2,
            Ke = Ge,
            Je = C.current - Ge,
            Ye = Ke + Ce * (Je - Ke),
            rt = Oe.radius + 4,
            Fe = rh(Oe, Ye, rt, Ae);
          (Rc(Fe, Oe),
            Be.World.add(ve.world, Fe),
            it.current.add(Fe),
            J.current('drop'),
            (R.current = !1),
            (D.current = Ae),
            L.current !== null && window.clearTimeout(L.current),
            (L.current = window.setTimeout(() => {
              ((L.current = null),
                w.current === 'playing' && (v(y.current), E(un()), (R.current = !0)));
            }, ln.dropCooldownMs)));
        },
        [un, v, E]
      ),
      Dl = B.useCallback(() => {
        var ue;
        (O.reset(),
          (ue = d.current) == null || ue.clear(),
          rn(),
          (Xe.current = null),
          (Pt.current = null),
          _t(null),
          v(un()),
          E(un()),
          (R.current = !0),
          (D.current = 0),
          (w.current = 'playing'),
          c('playing'));
      }, [O, un, rn, v, E]),
      ga = B.useCallback(() => {
        const ue = x.current;
        if (ue) {
          for (const ve of it.current) Be.World.remove(ue.world, ve);
          it.current.clear();
        }
        (L.current !== null && (window.clearTimeout(L.current), (L.current = null)), Dl());
      }, [Dl]),
      St = Ln.gameOverLineOffset;
    return {
      status: f,
      score: O.score,
      bestScore: O.bestScore,
      isNewRecord: O.isNewRecord,
      currentItem: m,
      nextItem: p,
      isSoundOn: H.isSoundOn,
      themeId: _,
      mergeEffectRef: d,
      canvasContainerRef: T,
      drop: nr,
      start: Dl,
      restart: ga,
      toggleSound: H.toggle,
      setThemeId: yt,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: St,
      skillGauge: ee,
      skillGaugeMax: $t.gaugeMax,
      isSkillReady: ee >= $t.gaugeMax,
      isSkillMenuOpen: j,
      openSkillMenu: Ga,
      closeSkillMenu: qn,
      selectSkill: Vn,
      isMagnetSelecting: ae,
      cancelMagnetSelecting: ja,
      selectMagnetTarget: gn,
      isGravityFlipped: ie,
      gameOverCountdown: La,
    };
  },
  gS = ({ size: s }) => {
    const b = vS({ fieldWidth: s.width, fieldHeight: s.height }),
      [T, x] = B.useState(!1),
      h = B.useCallback(() => x(!0), []),
      i = B.useCallback(() => x(!1), []);
    return W.jsxs(W.Fragment, {
      children: [
        W.jsx(H1, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          onOpenSettings: h,
        }),
        W.jsx('main', {
          className: Ua.main,
          children: W.jsxs('div', {
            className: Ua.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              W.jsx(bp, {
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
              W.jsx(Uh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              W.jsx(Bh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              W.jsx(Nh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? W.jsx('div', {
                    className: Ua.skill_button_wrapper,
                    children: W.jsx(Yh, {
                      ratio: b.skillGauge / b.skillGaugeMax,
                      isReady: b.isSkillReady,
                      onClick: b.openSkillMenu,
                    }),
                  })
                : null,
              b.status === 'idle' ? W.jsx(Kp, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? W.jsx(Np, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
        W.jsx(qh, { open: b.isSkillMenuOpen, onSelect: b.selectSkill, onClose: b.closeSkillMenu }),
        W.jsx(Gh, {
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
  yS = () => {
    const s = B.useRef(null),
      [b, T] = B.useState(null);
    return (
      B.useLayoutEffect(() => {
        const x = s.current;
        if (!x) return;
        const h = x.getBoundingClientRect();
        T({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      b === null
        ? W.jsxs('div', {
            className: Ua.layout,
            children: [
              W.jsx('div', { className: Ua.top_bar_placeholder, 'aria-hidden': 'true' }),
              W.jsx('main', { ref: s, className: Ua.main }),
            ],
          })
        : W.jsx('div', { className: Ua.layout, children: W.jsx(gS, { size: b }) })
    );
  },
  pS = () => W.jsx('div', { className: ap.index, children: W.jsx(yS, {}) }),
  SS = () => W.jsx('div', { children: W.jsx('h1', { children: 'Not Found' }) });
function xS() {
  return W.jsxs(W.Fragment, {
    children: [
      W.jsxs(my, {
        children: [
          W.jsx(zc, { path: '/', element: W.jsx(pS, {}) }),
          W.jsx(zc, { path: '*', element: W.jsx(SS, {}) }),
        ],
      }),
      W.jsx(tp, {}),
    ],
  });
}
const Jh = document.getElementById('root');
if (!Jh) throw new Error('Failed to find #root element');
v0.createRoot(Jh).render(W.jsx(Ly, { basename: '/ochimono-game', children: W.jsx(xS, {}) }));
