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
var Lm =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function r0(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default') ? s.default : s;
}
var gc = { exports: {} },
  Ti = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm;
function s0() {
  if (jm) return Ti;
  jm = 1;
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
var Gm;
function c0() {
  return (Gm || ((Gm = 1), (gc.exports = s0())), gc.exports);
}
var W = c0(),
  yc = { exports: {} },
  Ci = {},
  pc = { exports: {} },
  Sc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function o0() {
  return (
    Ym ||
      ((Ym = 1),
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
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
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
          B = -1;
        function D() {
          return E ? !0 : !(s.unstable_now() - B < A);
        }
        function H() {
          if (((E = !1), z)) {
            var q = s.unstable_now();
            B = q;
            var K = !0;
            try {
              e: {
                ((y = !1), v && ((v = !1), O(_), (_ = -1)), (r = !0));
                var ne = g;
                try {
                  t: {
                    for (L(q), p = T(c); p !== null && !(p.expirationTime > q && D()); ) {
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
                  T(c) === null && q === T(m) && (v ? (O(_), (_ = -1)) : (v = !0), ee(C, ne - se)))
                : ((q.sortIndex = de), b(c, q), y || r || ((y = !0), z || ((z = !0), G()))),
              q
            );
          }),
          (s.unstable_shouldYield = D),
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
      })(Sc)),
    Sc
  );
}
var qm;
function f0() {
  return (qm || ((qm = 1), (pc.exports = o0())), pc.exports);
}
var xc = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function d0() {
  if (Vm) return ve;
  Vm = 1;
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
  function O() {}
  O.prototype = R.prototype;
  function w(j, F, ae) {
    ((this.props = j), (this.context = F), (this.refs = E), (this.updater = ae || y));
  }
  var L = (w.prototype = new O());
  ((L.constructor = w), v(L, R.prototype), (L.isPureReactComponent = !0));
  var C = Array.isArray;
  function z() {}
  var _ = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function B(j, F, ae) {
    var le = ae.ref;
    return { $$typeof: s, type: j, key: F, ref: le !== void 0 ? le : null, props: ae };
  }
  function D(j, F) {
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
              (oe = D(
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
    var ge = le === '' ? '.' : le + ':';
    if (C(j))
      for (var Ae = 0; Ae < j.length; Ae++)
        ((le = j[Ae]), (ie = ge + te(le, Ae)), (he += q(le, F, ae, ie, oe)));
    else if (((Ae = r(j)), typeof Ae == 'function'))
      for (j = Ae.call(j), Ae = 0; !(le = j.next()).done; )
        ((le = le.value), (ie = ge + te(le, Ae++)), (he += q(le, F, ae, ie, oe)));
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
    (ve.Activity = p),
    (ve.Children = de),
    (ve.Component = R),
    (ve.Fragment = T),
    (ve.Profiler = h),
    (ve.PureComponent = w),
    (ve.StrictMode = x),
    (ve.Suspense = c),
    (ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
    (ve.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return _.H.useMemoCache(j);
      },
    }),
    (ve.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (ve.cacheSignal = function () {
      return null;
    }),
    (ve.cloneElement = function (j, F, ae) {
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
        for (var he = Array(ie), ge = 0; ge < ie; ge++) he[ge] = arguments[ge + 2];
        le.children = he;
      }
      return B(j.type, oe, le);
    }),
    (ve.createContext = function (j) {
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
    (ve.createElement = function (j, F, ae) {
      var le,
        oe = {},
        ie = null;
      if (F != null)
        for (le in (F.key !== void 0 && (ie = '' + F.key), F))
          A.call(F, le) && le !== 'key' && le !== '__self' && le !== '__source' && (oe[le] = F[le]);
      var he = arguments.length - 2;
      if (he === 1) oe.children = ae;
      else if (1 < he) {
        for (var ge = Array(he), Ae = 0; Ae < he; Ae++) ge[Ae] = arguments[Ae + 2];
        oe.children = ge;
      }
      if (j && j.defaultProps)
        for (le in ((he = j.defaultProps), he)) oe[le] === void 0 && (oe[le] = he[le]);
      return B(j, ie, oe);
    }),
    (ve.createRef = function () {
      return { current: null };
    }),
    (ve.forwardRef = function (j) {
      return { $$typeof: f, render: j };
    }),
    (ve.isValidElement = H),
    (ve.lazy = function (j) {
      return { $$typeof: o, _payload: { _status: -1, _result: j }, _init: ne };
    }),
    (ve.memo = function (j, F) {
      return { $$typeof: m, type: j, compare: F === void 0 ? null : F };
    }),
    (ve.startTransition = function (j) {
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
    (ve.unstable_useCacheRefresh = function () {
      return _.H.useCacheRefresh();
    }),
    (ve.use = function (j) {
      return _.H.use(j);
    }),
    (ve.useActionState = function (j, F, ae) {
      return _.H.useActionState(j, F, ae);
    }),
    (ve.useCallback = function (j, F) {
      return _.H.useCallback(j, F);
    }),
    (ve.useContext = function (j) {
      return _.H.useContext(j);
    }),
    (ve.useDebugValue = function () {}),
    (ve.useDeferredValue = function (j, F) {
      return _.H.useDeferredValue(j, F);
    }),
    (ve.useEffect = function (j, F) {
      return _.H.useEffect(j, F);
    }),
    (ve.useEffectEvent = function (j) {
      return _.H.useEffectEvent(j);
    }),
    (ve.useId = function () {
      return _.H.useId();
    }),
    (ve.useImperativeHandle = function (j, F, ae) {
      return _.H.useImperativeHandle(j, F, ae);
    }),
    (ve.useInsertionEffect = function (j, F) {
      return _.H.useInsertionEffect(j, F);
    }),
    (ve.useLayoutEffect = function (j, F) {
      return _.H.useLayoutEffect(j, F);
    }),
    (ve.useMemo = function (j, F) {
      return _.H.useMemo(j, F);
    }),
    (ve.useOptimistic = function (j, F) {
      return _.H.useOptimistic(j, F);
    }),
    (ve.useReducer = function (j, F, ae) {
      return _.H.useReducer(j, F, ae);
    }),
    (ve.useRef = function (j) {
      return _.H.useRef(j);
    }),
    (ve.useState = function (j) {
      return _.H.useState(j);
    }),
    (ve.useSyncExternalStore = function (j, F, ae) {
      return _.H.useSyncExternalStore(j, F, ae);
    }),
    (ve.useTransition = function () {
      return _.H.useTransition();
    }),
    (ve.version = '19.2.5'),
    ve
  );
}
var Xm;
function Bc() {
  return (Xm || ((Xm = 1), (xc.exports = d0())), xc.exports);
}
var Ec = { exports: {} },
  pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qm;
function m0() {
  if (Qm) return pt;
  Qm = 1;
  var s = Bc();
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
var Zm;
function h0() {
  if (Zm) return Ec.exports;
  Zm = 1;
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
  return (s(), (Ec.exports = m0()), Ec.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km;
function v0() {
  if (Km) return Ci;
  Km = 1;
  var s = f0(),
    b = Bc(),
    T = h0();
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
    O = Symbol.for('react.consumer'),
    w = Symbol.for('react.context'),
    L = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    z = Symbol.for('react.suspense_list'),
    _ = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    B = Symbol.for('react.activity'),
    D = Symbol.for('react.memo_cache_sentinel'),
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
      case B:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case y:
          return 'Portal';
        case w:
          return e.displayName || 'Context';
        case O:
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
  function ge(e, t) {
    switch ((ae(ie, t), ae(oe, e), ae(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? um(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = um(t)), (e = rm(t, e)));
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
  function Ze(e) {
    e.memoizedState !== null && ae(he, e);
    var t = le.current,
      n = rm(t, e.type);
    t !== n && (ae(oe, e), ae(le, n));
  }
  function it(e) {
    (oe.current === e && (F(le), F(oe)), he.current === e && (F(he), (Si._currentValue = ne)));
  }
  var Xe, pa;
  function bt(e) {
    if (Xe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Xe = (t && t[1]) || ''),
          (pa =
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
      pa
    );
  }
  var Kn = !1;
  function cn(e, t) {
    if (!e || Kn) return '';
    Kn = !0;
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
      ((Kn = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? bt(n) : '';
  }
  function on(e, t) {
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
        return cn(e.type, !1);
      case 11:
        return cn(e.type.render, !1);
      case 1:
        return cn(e.type, !0);
      case 31:
        return bt('Activity');
      default:
        return '';
    }
  }
  function Jn(e) {
    try {
      var t = '',
        n = null;
      do ((t += on(e, n)), (n = e), (e = e.return));
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
    Yt = s.unstable_scheduleCallback,
    ut = s.unstable_cancelCallback,
    fn = s.unstable_shouldYield,
    Sa = s.unstable_requestPaint,
    st = s.unstable_now,
    Ot = s.unstable_getCurrentPriorityLevel,
    Dt = s.unstable_ImmediatePriority,
    xa = s.unstable_UserBlockingPriority,
    yn = s.unstable_NormalPriority,
    pn = s.unstable_LowPriority,
    Sn = s.unstable_IdlePriority,
    ar = s.log,
    lr = s.unstable_setDisableYieldValue,
    Ea = null,
    St = null;
  function en(e) {
    if ((typeof ar == 'function' && lr(e), St && typeof St.setStrictMode == 'function'))
      try {
        St.setStrictMode(Ea, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : ur,
    wl = Math.log,
    ir = Math.LN2;
  function ur(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((wl(e) / ir) | 0)) | 0);
  }
  var ue = 256,
    Me = 262144,
    ze = 4194304;
  function Se(e) {
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
  function xe(e, t, n) {
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
            ? (l = Se(a))
            : ((S &= M), S !== 0 ? (l = Se(S)) : n || ((n = M & ~e), n !== 0 && (l = Se(n)))))
        : ((M = a & ~u),
          M !== 0
            ? (l = Se(M))
            : S !== 0
              ? (l = Se(S))
              : n || ((n = a & ~e), n !== 0 && (l = Se(n)))),
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
  function Ke(e, t) {
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
  function $e() {
    var e = ze;
    return ((ze <<= 1), (ze & 62914560) === 0 && (ze = 4194304), e);
  }
  function Je(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ie(e, t) {
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
    var M = e.entanglements,
      U = e.expirationTimes,
      Q = e.hiddenUpdates;
    for (n = S & ~n; 0 < n; ) {
      var $ = 31 - xt(n),
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
    (a !== 0 && et(e, a, 0),
      u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(S & ~t)));
  }
  function et(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - xt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function wt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - xt(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  function xn(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : qt(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function qt(e) {
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
  function Va(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Nl() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Om(e.type));
  }
  function Xa(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var tn = Math.random().toString(36).slice(2),
    mt = '__reactFiber$' + tn,
    Tt = '__reactProps$' + tn,
    Qa = '__reactContainer$' + tn,
    rr = '__reactEvents$' + tn,
    $h = '__reactListeners$' + tn,
    Wh = '__reactHandles$' + tn,
    Zc = '__reactResources$' + tn,
    Bl = '__reactMarker$' + tn;
  function sr(e) {
    (delete e[mt], delete e[Tt], delete e[rr], delete e[$h], delete e[Wh]);
  }
  function Za(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Qa] || n[mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = hm(e); e !== null; ) {
            if ((n = e[mt])) return n;
            e = hm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ka(e) {
    if ((e = e[mt] || e[Qa])) {
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
  function Ja(e) {
    var t = e[Zc];
    return (t || (t = e[Zc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ot(e) {
    e[Bl] = !0;
  }
  var Kc = new Set(),
    Jc = {};
  function ba(e, t) {
    (ka(e, t), ka(e + 'Capture', t));
  }
  function ka(e, t) {
    for (Jc[e] = t, e = 0; e < t.length; e++) Kc.add(t[e]);
  }
  var Ph = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    kc = {},
    Fc = {};
  function Ih(e) {
    return dt.call(Fc, e)
      ? !0
      : dt.call(kc, e)
        ? !1
        : Ph.test(e)
          ? (Fc[e] = !0)
          : ((kc[e] = !0), !1);
  }
  function Ni(e, t, n) {
    if (Ih(t))
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
  function Bi(e, t, n) {
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
  function En(e, t, n, a) {
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
  function Vt(e) {
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
  function $c(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function ev(e, t, n) {
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
  function cr(e) {
    if (!e._valueTracker) {
      var t = $c(e) ? 'checked' : 'value';
      e._valueTracker = ev(e, t, '' + e[t]);
    }
  }
  function Wc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = $c(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ui(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var tv = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(tv, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function or(e, t, n, a, l, u, S, M) {
    ((e.name = ''),
      S != null && typeof S != 'function' && typeof S != 'symbol' && typeof S != 'boolean'
        ? (e.type = S)
        : e.removeAttribute('type'),
      t != null
        ? S === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Vt(t))
          : e.value !== '' + Vt(t) && (e.value = '' + Vt(t))
        : (S !== 'submit' && S !== 'reset') || e.removeAttribute('value'),
      t != null
        ? fr(e, S, Vt(t))
        : n != null
          ? fr(e, S, Vt(n))
          : a != null && e.removeAttribute('value'),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      M != null && typeof M != 'function' && typeof M != 'symbol' && typeof M != 'boolean'
        ? (e.name = '' + Vt(M))
        : e.removeAttribute('name'));
  }
  function Pc(e, t, n, a, l, u, S, M) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        cr(e);
        return;
      }
      ((n = n != null ? '' + Vt(n) : ''),
        (t = t != null ? '' + Vt(t) : n),
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
      cr(e));
  }
  function fr(e, t, n) {
    (t === 'number' && Ui(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Fa(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Vt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ic(e, t, n) {
    if (t != null && ((t = '' + Vt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Vt(n) : '';
  }
  function eo(e, t, n, a) {
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
    ((n = Vt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a),
      cr(e));
  }
  function $a(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nv = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function to(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || nv.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function no(e, t, n) {
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
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && to(e, l, a));
    } else for (var u in t) t.hasOwnProperty(u) && to(e, u, t[u]);
  }
  function dr(e) {
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
  var av = new Map([
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
    lv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hi(e) {
    return lv.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function bn() {}
  var mr = null;
  function hr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wa = null,
    Pa = null;
  function ao(e) {
    var t = Ka(e);
    if (t && (e = t.stateNode)) {
      var n = e[Tt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (or(
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
              n = n.querySelectorAll('input[name="' + Xt('' + t) + '"][type="radio"]'), t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[Tt] || null;
                if (!l) throw Error(x(90));
                or(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Wc(a));
          }
          break e;
        case 'textarea':
          Ic(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Fa(e, !!n.multiple, t, !1));
      }
    }
  }
  var vr = !1;
  function lo(e, t, n) {
    if (vr) return e(t, n);
    vr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((vr = !1),
        (Wa !== null || Pa !== null) &&
          (Tu(), Wa && ((t = Wa), (e = Pa), (Pa = Wa = null), ao(t), e)))
      )
        for (t = 0; t < e.length; t++) ao(e[t]);
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
  var Tn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    gr = !1;
  if (Tn)
    try {
      var Ll = {};
      (Object.defineProperty(Ll, 'passive', {
        get: function () {
          gr = !0;
        },
      }),
        window.addEventListener('test', Ll, Ll),
        window.removeEventListener('test', Ll, Ll));
    } catch {
      gr = !1;
    }
  var kn = null,
    yr = null,
    Li = null;
  function io() {
    if (Li) return Li;
    var e,
      t = yr,
      n = t.length,
      a,
      l = 'value' in kn ? kn.value : kn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var S = n - e;
    for (a = 1; a <= S && t[n - a] === l[u - a]; a++);
    return (Li = l.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ji(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Gi() {
    return !0;
  }
  function uo() {
    return !1;
  }
  function Ct(e) {
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
          ? Gi
          : uo),
        (this.isPropagationStopped = uo),
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
            (this.isDefaultPrevented = Gi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Gi));
        },
        persist: function () {},
        isPersistent: Gi,
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
    Yi = Ct(Ta),
    jl = p({}, Ta, { view: 0, detail: 0 }),
    iv = Ct(jl),
    pr,
    Sr,
    Gl,
    qi = p({}, jl, {
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
      getModifierState: Er,
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
                ? ((pr = e.screenX - Gl.screenX), (Sr = e.screenY - Gl.screenY))
                : (Sr = pr = 0),
              (Gl = e)),
            pr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Sr;
      },
    }),
    ro = Ct(qi),
    uv = p({}, qi, { dataTransfer: 0 }),
    rv = Ct(uv),
    sv = p({}, jl, { relatedTarget: 0 }),
    xr = Ct(sv),
    cv = p({}, Ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ov = Ct(cv),
    fv = p({}, Ta, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    dv = Ct(fv),
    mv = p({}, Ta, { data: 0 }),
    so = Ct(mv),
    hv = {
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
    vv = {
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
    gv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function yv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = gv[e]) ? !!t[e] : !1;
  }
  function Er() {
    return yv;
  }
  var pv = p({}, jl, {
      key: function (e) {
        if (e.key) {
          var t = hv[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ji(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? vv[e.keyCode] || 'Unidentified'
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
      getModifierState: Er,
      charCode: function (e) {
        return e.type === 'keypress' ? ji(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ji(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Sv = Ct(pv),
    xv = p({}, qi, {
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
    co = Ct(xv),
    Ev = p({}, jl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Er,
    }),
    bv = Ct(Ev),
    Tv = p({}, Ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cv = Ct(Tv),
    Mv = p({}, qi, {
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
    Rv = Ct(Mv),
    Av = p({}, Ta, { newState: 0, oldState: 0 }),
    zv = Ct(Av),
    _v = [9, 13, 27, 32],
    br = Tn && 'CompositionEvent' in window,
    Yl = null;
  Tn && 'documentMode' in document && (Yl = document.documentMode);
  var Ov = Tn && 'TextEvent' in window && !Yl,
    oo = Tn && (!br || (Yl && 8 < Yl && 11 >= Yl)),
    fo = ' ',
    mo = !1;
  function ho(e, t) {
    switch (e) {
      case 'keyup':
        return _v.indexOf(t.keyCode) !== -1;
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
  function vo(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Ia = !1;
  function Dv(e, t) {
    switch (e) {
      case 'compositionend':
        return vo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((mo = !0), fo);
      case 'textInput':
        return ((e = t.data), e === fo && mo ? null : e);
      default:
        return null;
    }
  }
  function wv(e, t) {
    if (Ia)
      return e === 'compositionend' || (!br && ho(e, t))
        ? ((e = io()), (Li = yr = kn = null), (Ia = !1), e)
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
        return oo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Nv = {
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
  function go(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Nv[e.type] : t === 'textarea';
  }
  function yo(e, t, n, a) {
    (Wa ? (Pa ? Pa.push(a) : (Pa = [a])) : (Wa = a),
      (t = Ou(t, 'onChange')),
      0 < t.length &&
        ((n = new Yi('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var ql = null,
    Vl = null;
  function Bv(e) {
    em(e, 0);
  }
  function Vi(e) {
    var t = Ul(e);
    if (Wc(t)) return e;
  }
  function po(e, t) {
    if (e === 'change') return t;
  }
  var So = !1;
  if (Tn) {
    var Tr;
    if (Tn) {
      var Cr = 'oninput' in document;
      if (!Cr) {
        var xo = document.createElement('div');
        (xo.setAttribute('oninput', 'return;'), (Cr = typeof xo.oninput == 'function'));
      }
      Tr = Cr;
    } else Tr = !1;
    So = Tr && (!document.documentMode || 9 < document.documentMode);
  }
  function Eo() {
    ql && (ql.detachEvent('onpropertychange', bo), (Vl = ql = null));
  }
  function bo(e) {
    if (e.propertyName === 'value' && Vi(Vl)) {
      var t = [];
      (yo(t, Vl, e, hr(e)), lo(Bv, t));
    }
  }
  function Uv(e, t, n) {
    e === 'focusin'
      ? (Eo(), (ql = t), (Vl = n), ql.attachEvent('onpropertychange', bo))
      : e === 'focusout' && Eo();
  }
  function Hv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Vi(Vl);
  }
  function Lv(e, t) {
    if (e === 'click') return Vi(t);
  }
  function jv(e, t) {
    if (e === 'input' || e === 'change') return Vi(t);
  }
  function Gv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == 'function' ? Object.is : Gv;
  function Xl(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!dt.call(t, l) || !Nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function To(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Co(e, t) {
    var n = To(e);
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
      n = To(n);
    }
  }
  function Mo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Mo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ro(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ui(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ui(e.document);
    }
    return t;
  }
  function Mr(e) {
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
  var Yv = Tn && 'documentMode' in document && 11 >= document.documentMode,
    el = null,
    Rr = null,
    Ql = null,
    Ar = !1;
  function Ao(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ar ||
      el == null ||
      el !== Ui(a) ||
      ((a = el),
      'selectionStart' in a && Mr(a)
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
        (a = Ou(Rr, 'onSelect')),
        0 < a.length &&
          ((t = new Yi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = el))));
  }
  function Ca(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var tl = {
      animationend: Ca('Animation', 'AnimationEnd'),
      animationiteration: Ca('Animation', 'AnimationIteration'),
      animationstart: Ca('Animation', 'AnimationStart'),
      transitionrun: Ca('Transition', 'TransitionRun'),
      transitionstart: Ca('Transition', 'TransitionStart'),
      transitioncancel: Ca('Transition', 'TransitionCancel'),
      transitionend: Ca('Transition', 'TransitionEnd'),
    },
    zr = {},
    zo = {};
  Tn &&
    ((zo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete tl.animationend.animation,
      delete tl.animationiteration.animation,
      delete tl.animationstart.animation),
    'TransitionEvent' in window || delete tl.transitionend.transition);
  function Ma(e) {
    if (zr[e]) return zr[e];
    if (!tl[e]) return e;
    var t = tl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in zo) return (zr[e] = t[n]);
    return e;
  }
  var _o = Ma('animationend'),
    Oo = Ma('animationiteration'),
    Do = Ma('animationstart'),
    qv = Ma('transitionrun'),
    Vv = Ma('transitionstart'),
    Xv = Ma('transitioncancel'),
    wo = Ma('transitionend'),
    No = new Map(),
    _r =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  _r.push('scrollEnd');
  function nn(e, t) {
    (No.set(e, t), ba(t, [e]));
  }
  var Xi =
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
    Qt = [],
    nl = 0,
    Or = 0;
  function Qi() {
    for (var e = nl, t = (Or = nl = 0); t < e; ) {
      var n = Qt[t];
      Qt[t++] = null;
      var a = Qt[t];
      Qt[t++] = null;
      var l = Qt[t];
      Qt[t++] = null;
      var u = Qt[t];
      if (((Qt[t++] = null), a !== null && l !== null)) {
        var S = a.pending;
        (S === null ? (l.next = l) : ((l.next = S.next), (S.next = l)), (a.pending = l));
      }
      u !== 0 && Bo(n, l, u);
    }
  }
  function Zi(e, t, n, a) {
    ((Qt[nl++] = e),
      (Qt[nl++] = t),
      (Qt[nl++] = n),
      (Qt[nl++] = a),
      (Or |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Dr(e, t, n, a) {
    return (Zi(e, t, n, a), Ki(e));
  }
  function Ra(e, t) {
    return (Zi(e, null, null, t), Ki(e));
  }
  function Bo(e, t, n) {
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
  function Ki(e) {
    if (50 < di) throw ((di = 0), (Ys = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var al = {};
  function Qv(e, t, n, a) {
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
    return new Qv(e, t, n, a);
  }
  function wr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Cn(e, t) {
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
  function Uo(e, t) {
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
  function Ji(e, t, n, a, l, u) {
    var S = 0;
    if (((a = e), typeof e == 'function')) wr(e) && (S = 1);
    else if (typeof e == 'string')
      S = Fg(e, n, le.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case B:
          return ((e = Bt(31, n, t, l)), (e.elementType = B), (e.lanes = u), e);
        case v:
          return Aa(n.children, l, u, t);
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
              case O:
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
  function Aa(e, t, n, a) {
    return ((e = Bt(7, e, a, t)), (e.lanes = n), e);
  }
  function Nr(e, t, n) {
    return ((e = Bt(6, e, null, t)), (e.lanes = n), e);
  }
  function Ho(e) {
    var t = Bt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Br(e, t, n) {
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
  var Lo = new WeakMap();
  function Zt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Lo.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Jn(t) }), Lo.set(e, t), t);
    }
    return { value: e, source: t, stack: Jn(t) };
  }
  var ll = [],
    il = 0,
    ki = null,
    Zl = 0,
    Kt = [],
    Jt = 0,
    Fn = null,
    dn = 1,
    mn = '';
  function Mn(e, t) {
    ((ll[il++] = Zl), (ll[il++] = ki), (ki = e), (Zl = t));
  }
  function jo(e, t, n) {
    ((Kt[Jt++] = dn), (Kt[Jt++] = mn), (Kt[Jt++] = Fn), (Fn = e));
    var a = dn;
    e = mn;
    var l = 32 - xt(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - xt(t) + l;
    if (30 < u) {
      var S = l - (l % 5);
      ((u = (a & ((1 << S) - 1)).toString(32)),
        (a >>= S),
        (l -= S),
        (dn = (1 << (32 - xt(t) + l)) | (n << l) | a),
        (mn = u + e));
    } else ((dn = (1 << u) | (n << l) | a), (mn = e));
  }
  function Ur(e) {
    e.return !== null && (Mn(e, 1), jo(e, 1, 0));
  }
  function Hr(e) {
    for (; e === ki; ) ((ki = ll[--il]), (ll[il] = null), (Zl = ll[--il]), (ll[il] = null));
    for (; e === Fn; )
      ((Fn = Kt[--Jt]),
        (Kt[Jt] = null),
        (mn = Kt[--Jt]),
        (Kt[Jt] = null),
        (dn = Kt[--Jt]),
        (Kt[Jt] = null));
  }
  function Go(e, t) {
    ((Kt[Jt++] = dn), (Kt[Jt++] = mn), (Kt[Jt++] = Fn), (dn = t.id), (mn = t.overflow), (Fn = e));
  }
  var ht = null,
    Ye = null,
    Re = !1,
    $n = null,
    kt = !1,
    Lr = Error(x(519));
  function Wn(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Kl(Zt(t, e)), Lr);
  }
  function Yo(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[mt] = e), (t[Tt] = a), n)) {
      case 'dialog':
        (be('cancel', t), be('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        be('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < hi.length; n++) be(hi[n], t);
        break;
      case 'source':
        be('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (be('error', t), be('load', t));
        break;
      case 'details':
        be('toggle', t);
        break;
      case 'input':
        (be('invalid', t),
          Pc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        be('invalid', t);
        break;
      case 'textarea':
        (be('invalid', t), eo(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      lm(t.textContent, n)
        ? (a.popover != null && (be('beforetoggle', t), be('toggle', t)),
          a.onScroll != null && be('scroll', t),
          a.onScrollEnd != null && be('scrollend', t),
          a.onClick != null && (t.onclick = bn),
          (t = !0))
        : (t = !1),
      t || Wn(e, !0));
  }
  function qo(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          kt = !1;
          return;
        case 27:
        case 3:
          kt = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function ul(e) {
    if (e !== ht) return !1;
    if (!Re) return (qo(e), (Re = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || tc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ye && Wn(e),
      qo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Ye = mm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      Ye = mm(e);
    } else
      t === 27
        ? ((t = Ye), fa(e.type) ? ((e = uc), (uc = null), (Ye = e)) : (Ye = t))
        : (Ye = ht ? $t(e.stateNode.nextSibling) : null);
    return !0;
  }
  function za() {
    ((Ye = ht = null), (Re = !1));
  }
  function jr() {
    var e = $n;
    return (e !== null && (zt === null ? (zt = e) : zt.push.apply(zt, e), ($n = null)), e);
  }
  function Kl(e) {
    $n === null ? ($n = [e]) : $n.push(e);
  }
  var Gr = j(null),
    _a = null,
    Rn = null;
  function Pn(e, t, n) {
    (ae(Gr, t._currentValue), (t._currentValue = n));
  }
  function An(e) {
    ((e._currentValue = Gr.current), F(Gr));
  }
  function Yr(e, t, n) {
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
  function qr(e, t, n, a) {
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
                Yr(u.return, n, e),
                a || (S = null));
              break e;
            }
          u = M.next;
        }
      } else if (l.tag === 18) {
        if (((S = l.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Yr(S, n, e), (S = null));
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
  function rl(e, t, n, a) {
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
          (e !== null ? e.push(Si) : (e = [Si]));
      }
      l = l.return;
    }
    (e !== null && qr(t, e, n, a), (t.flags |= 262144));
  }
  function Fi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Oa(e) {
    ((_a = e), (Rn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function vt(e) {
    return Vo(_a, e);
  }
  function $i(e, t) {
    return (_a === null && Oa(e), Vo(e, t));
  }
  function Vo(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Rn === null)) {
      if (e === null) throw Error(x(308));
      ((Rn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Rn = Rn.next = t;
    return n;
  }
  var Zv =
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
    Kv = s.unstable_scheduleCallback,
    Jv = s.unstable_NormalPriority,
    tt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vr() {
    return { controller: new Zv(), data: new Map(), refCount: 0 };
  }
  function Jl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Kv(Jv, function () {
          e.controller.abort();
        }));
  }
  var kl = null,
    Xr = 0,
    sl = 0,
    cl = null;
  function kv(e, t) {
    if (kl === null) {
      var n = (kl = []);
      ((Xr = 0),
        (sl = Ks()),
        (cl = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Xr++, t.then(Xo, Xo), t);
  }
  function Xo() {
    if (--Xr === 0 && kl !== null) {
      cl !== null && (cl.status = 'fulfilled');
      var e = kl;
      ((kl = null), (sl = 0), (cl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Fv(e, t) {
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
  var Qo = q.S;
  q.S = function (e, t) {
    ((zd = st()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && kv(e, t),
      Qo !== null && Qo(e, t));
  };
  var Da = j(null);
  function Qr() {
    var e = Da.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function Wi(e, t) {
    t === null ? ae(Da, Da.current) : ae(Da, t.pool);
  }
  function Zo() {
    var e = Qr();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var ol = Error(x(460)),
    Zr = Error(x(474)),
    Pi = Error(x(542)),
    Ii = { then: function () {} };
  function Ko(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Jo(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(bn, bn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Fo(e), e);
      default:
        if (typeof t.status == 'string') t.then(bn, bn);
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
            throw ((e = t.reason), Fo(e), e);
        }
        throw ((Na = t), ol);
    }
  }
  function wa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Na = n), ol) : n;
    }
  }
  var Na = null;
  function ko() {
    if (Na === null) throw Error(x(459));
    var e = Na;
    return ((Na = null), e);
  }
  function Fo(e) {
    if (e === ol || e === Pi) throw Error(x(483));
  }
  var fl = null,
    Fl = 0;
  function eu(e) {
    var t = Fl;
    return ((Fl += 1), fl === null && (fl = []), Jo(fl, e, t));
  }
  function $l(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function tu(e, t) {
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
  function $o(e) {
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
    function M(V, Y, X, P) {
      return Y === null || Y.tag !== 6
        ? ((Y = Nr(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function U(V, Y, X, P) {
      var fe = X.type;
      return fe === v
        ? $(V, Y, X.props.children, P, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && wa(fe) === Y.type))
          ? ((Y = l(Y, X.props)), $l(Y, X), (Y.return = V), Y)
          : ((Y = Ji(X.type, X.key, X.props, null, V.mode, P)), $l(Y, X), (Y.return = V), Y);
    }
    function Q(V, Y, X, P) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Br(X, V.mode, P)), (Y.return = V), Y)
        : ((Y = l(Y, X.children || [])), (Y.return = V), Y);
    }
    function $(V, Y, X, P, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = Aa(X, V.mode, P, fe)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function I(V, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Nr('' + Y, V.mode, X)), (Y.return = V), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = Ji(Y.type, Y.key, Y.props, null, V.mode, X)), $l(X, Y), (X.return = V), X);
          case y:
            return ((Y = Br(Y, V.mode, X)), (Y.return = V), Y);
          case A:
            return ((Y = wa(Y)), I(V, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = Aa(Y, V.mode, X, null)), (Y.return = V), Y);
        if (typeof Y.then == 'function') return I(V, eu(Y), X);
        if (Y.$$typeof === w) return I(V, $i(V, Y), X);
        tu(V, Y);
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
            return ((X = wa(X)), Z(V, Y, X, P));
        }
        if (ee(X) || G(X)) return fe !== null ? null : $(V, Y, X, P, null);
        if (typeof X.then == 'function') return Z(V, Y, eu(X), P);
        if (X.$$typeof === w) return Z(V, Y, $i(V, X), P);
        tu(V, X);
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
            return ((P = wa(P)), k(V, Y, X, P, fe));
        }
        if (ee(P) || G(P)) return ((V = V.get(X) || null), $(Y, V, P, fe, null));
        if (typeof P.then == 'function') return k(V, Y, X, eu(P), fe);
        if (P.$$typeof === w) return k(V, Y, X, $i(Y, P), fe);
        tu(Y, P);
      }
      return null;
    }
    function re(V, Y, X, P) {
      for (
        var fe = null, _e = null, ce = Y, pe = (Y = 0), Ce = null;
        ce !== null && pe < X.length;
        pe++
      ) {
        ce.index > pe ? ((Ce = ce), (ce = null)) : (Ce = ce.sibling);
        var Oe = Z(V, ce, X[pe], P);
        if (Oe === null) {
          ce === null && (ce = Ce);
          break;
        }
        (e && ce && Oe.alternate === null && t(V, ce),
          (Y = u(Oe, Y, pe)),
          _e === null ? (fe = Oe) : (_e.sibling = Oe),
          (_e = Oe),
          (ce = Ce));
      }
      if (pe === X.length) return (n(V, ce), Re && Mn(V, pe), fe);
      if (ce === null) {
        for (; pe < X.length; pe++)
          ((ce = I(V, X[pe], P)),
            ce !== null &&
              ((Y = u(ce, Y, pe)), _e === null ? (fe = ce) : (_e.sibling = ce), (_e = ce)));
        return (Re && Mn(V, pe), fe);
      }
      for (ce = a(ce); pe < X.length; pe++)
        ((Ce = k(ce, V, pe, X[pe], P)),
          Ce !== null &&
            (e && Ce.alternate !== null && ce.delete(Ce.key === null ? pe : Ce.key),
            (Y = u(Ce, Y, pe)),
            _e === null ? (fe = Ce) : (_e.sibling = Ce),
            (_e = Ce)));
      return (
        e &&
          ce.forEach(function (ga) {
            return t(V, ga);
          }),
        Re && Mn(V, pe),
        fe
      );
    }
    function me(V, Y, X, P) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, _e = null, ce = Y, pe = (Y = 0), Ce = null, Oe = X.next();
        ce !== null && !Oe.done;
        pe++, Oe = X.next()
      ) {
        ce.index > pe ? ((Ce = ce), (ce = null)) : (Ce = ce.sibling);
        var ga = Z(V, ce, Oe.value, P);
        if (ga === null) {
          ce === null && (ce = Ce);
          break;
        }
        (e && ce && ga.alternate === null && t(V, ce),
          (Y = u(ga, Y, pe)),
          _e === null ? (fe = ga) : (_e.sibling = ga),
          (_e = ga),
          (ce = Ce));
      }
      if (Oe.done) return (n(V, ce), Re && Mn(V, pe), fe);
      if (ce === null) {
        for (; !Oe.done; pe++, Oe = X.next())
          ((Oe = I(V, Oe.value, P)),
            Oe !== null &&
              ((Y = u(Oe, Y, pe)), _e === null ? (fe = Oe) : (_e.sibling = Oe), (_e = Oe)));
        return (Re && Mn(V, pe), fe);
      }
      for (ce = a(ce); !Oe.done; pe++, Oe = X.next())
        ((Oe = k(ce, V, pe, Oe.value, P)),
          Oe !== null &&
            (e && Oe.alternate !== null && ce.delete(Oe.key === null ? pe : Oe.key),
            (Y = u(Oe, Y, pe)),
            _e === null ? (fe = Oe) : (_e.sibling = Oe),
            (_e = Oe)));
      return (
        e &&
          ce.forEach(function (u0) {
            return t(V, u0);
          }),
        Re && Mn(V, pe),
        fe
      );
    }
    function je(V, Y, X, P) {
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
              X.type === v
                ? ((P = Aa(X.props.children, V.mode, P, X.key)), (P.return = V), (V = P))
                : ((P = Ji(X.type, X.key, X.props, null, V.mode, P)),
                  $l(P, X),
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
              ((P = Br(X, V.mode, P)), (P.return = V), (V = P));
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
        if (typeof X.then == 'function') return je(V, Y, eu(X), P);
        if (X.$$typeof === w) return je(V, Y, $i(V, X), P);
        tu(V, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(V, Y.sibling), (P = l(Y, X)), (P.return = V), (V = P))
            : (n(V, Y), (P = Nr(X, V.mode, P)), (P.return = V), (V = P)),
          S(V))
        : n(V, Y);
    }
    return function (V, Y, X, P) {
      try {
        Fl = 0;
        var fe = je(V, Y, X, P);
        return ((fl = null), fe);
      } catch (ce) {
        if (ce === ol || ce === Pi) throw ce;
        var _e = Bt(29, ce, null, V.mode);
        return ((_e.lanes = P), (_e.return = V), _e);
      } finally {
      }
    };
  }
  var Ba = $o(!0),
    Wo = $o(!1),
    In = !1;
  function Kr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jr(e, t) {
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
  function ea(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ta(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (De & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = Ki(e)),
        Bo(e, null, n),
        t
      );
    }
    return (Zi(e, a, t, n), Ki(e));
  }
  function Wl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wt(e, n));
    }
  }
  function kr(e, t) {
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
  var Fr = !1;
  function Pl() {
    if (Fr) {
      var e = cl;
      if (e !== null) throw e;
    }
  }
  function Il(e, t, n, a) {
    Fr = !1;
    var l = e.updateQueue;
    In = !1;
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
        if (k ? (Te & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === sl && (Fr = !0),
            $ !== null &&
              ($ = $.next =
                { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null }));
          e: {
            var re = e,
              me = M;
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
                I = p({}, I, Z);
                break e;
              case 2:
                In = !0;
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
        (ua |= S),
        (e.lanes = S),
        (e.memoizedState = I));
    }
  }
  function Po(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function Io(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Po(n[e], t);
  }
  var dl = j(null),
    nu = j(0);
  function ef(e, t) {
    ((e = Hn), ae(nu, e), ae(dl, t), (Hn = e | t.baseLanes));
  }
  function $r() {
    (ae(nu, Hn), ae(dl, dl.current));
  }
  function Wr() {
    ((Hn = nu.current), F(dl), F(nu));
  }
  var Ut = j(null),
    Ft = null;
  function na(e) {
    var t = e.alternate;
    (ae(We, We.current & 1),
      ae(Ut, e),
      Ft === null && (t === null || dl.current !== null || t.memoizedState !== null) && (Ft = e));
  }
  function Pr(e) {
    (ae(We, We.current), ae(Ut, e), Ft === null && (Ft = e));
  }
  function tf(e) {
    e.tag === 22 ? (ae(We, We.current), ae(Ut, e), Ft === null && (Ft = e)) : aa();
  }
  function aa() {
    (ae(We, We.current), ae(Ut, Ut.current));
  }
  function Ht(e) {
    (F(Ut), Ft === e && (Ft = null), F(We));
  }
  var We = j(0);
  function au(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || lc(n) || ic(n))) return t;
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
  var zn = 0,
    ye = null,
    He = null,
    nt = null,
    lu = !1,
    ml = !1,
    Ua = !1,
    iu = 0,
    ei = 0,
    hl = null,
    $v = 0;
  function ke() {
    throw Error(x(321));
  }
  function Ir(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function es(e, t, n, a, l, u) {
    return (
      (zn = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Gf : vs),
      (Ua = !1),
      (u = n(a, l)),
      (Ua = !1),
      ml && (u = af(t, n, a, l)),
      nf(e),
      u
    );
  }
  function nf(e) {
    q.H = ai;
    var t = He !== null && He.next !== null;
    if (((zn = 0), (nt = He = ye = null), (lu = !1), (ei = 0), (hl = null), t)) throw Error(x(300));
    e === null || at || ((e = e.dependencies), e !== null && Fi(e) && (at = !0));
  }
  function af(e, t, n, a) {
    ye = e;
    var l = 0;
    do {
      if ((ml && (hl = null), (ei = 0), (ml = !1), 25 <= l)) throw Error(x(301));
      if (((l += 1), (nt = He = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((q.H = Yf), (u = t(n, a)));
    } while (ml);
    return u;
  }
  function Wv() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ti(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function ts() {
    var e = iu !== 0;
    return ((iu = 0), e);
  }
  function ns(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function as(e) {
    if (lu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      lu = !1;
    }
    ((zn = 0), (nt = He = ye = null), (ml = !1), (ei = iu = 0), (hl = null));
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (nt === null ? (ye.memoizedState = nt = e) : (nt = nt.next = e), nt);
  }
  function Pe() {
    if (He === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = nt === null ? ye.memoizedState : nt.next;
    if (t !== null) ((nt = t), (He = e));
    else {
      if (e === null) throw ye.alternate === null ? Error(x(467)) : Error(x(310));
      ((He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        nt === null ? (ye.memoizedState = nt = e) : (nt = nt.next = e));
    }
    return nt;
  }
  function uu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return (
      (ei += 1),
      hl === null && (hl = []),
      (e = Jo(hl, e, t)),
      (t = ye),
      (nt === null ? t.memoizedState : nt.next) === null &&
        ((t = t.alternate), (q.H = t === null || t.memoizedState === null ? Gf : vs)),
      e
    );
  }
  function ru(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ti(e);
      if (e.$$typeof === w) return vt(e);
    }
    throw Error(x(438, String(e)));
  }
  function ls(e) {
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
      n === null && ((n = uu()), (ye.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = D;
    return (t.index++, n);
  }
  function _n(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function su(e) {
    var t = Pe();
    return is(t, He, e);
  }
  function is(e, t, n) {
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
        if (I !== Q.lane ? (Te & I) === I : (zn & I) === I) {
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
              I === sl && ($ = !0));
          else if ((zn & Z) === Z) {
            ((Q = Q.next), Z === sl && ($ = !0));
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
              (ye.lanes |= Z),
              (ua |= Z));
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
            U === null ? ((M = U = Z), (S = u)) : (U = U.next = Z),
            (ye.lanes |= I),
            (ua |= I));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = M),
        !Nt(u, e.memoizedState) && ((at = !0), $ && ((n = cl), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (a.lastRenderedState = u));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function us(e) {
    var t = Pe(),
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
  function lf(e, t, n) {
    var a = ye,
      l = Pe(),
      u = Re;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Nt((He || l).memoizedState, n);
    if (
      (S && ((l.memoizedState = n), (at = !0)),
      (l = l.queue),
      cs(sf.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || S || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        vl(9, { destroy: void 0 }, rf.bind(null, a, l, n, t), null),
        Ge === null)
      )
        throw Error(x(349));
      u || (zn & 127) !== 0 || uf(a, t, n);
    }
    return n;
  }
  function uf(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = uu()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function rf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), cf(t) && of(e));
  }
  function sf(e, t, n) {
    return n(function () {
      cf(t) && of(e);
    });
  }
  function cf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Ra(e, 2);
    t !== null && _t(t, e, 2);
  }
  function rs(e) {
    var t = Et();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Ua)) {
        en(!0);
        try {
          n();
        } finally {
          en(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _n,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ff(e, t, n, a) {
    return ((e.baseState = n), is(e, He, typeof a == 'function' ? a : _n));
  }
  function Pv(e, t, n, a, l) {
    if (fu(e)) throw Error(x(485));
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
          ? ((u.next = t.pending = u), df(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function df(e, t) {
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
        (U !== null && U(S, M), mf(e, t, M));
      } catch (Q) {
        ss(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (q.T = u));
      }
    } else
      try {
        ((u = n(l, a)), mf(e, t, u));
      } catch (Q) {
        ss(e, t, Q);
      }
  }
  function mf(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            hf(e, t, a);
          },
          function (a) {
            return ss(e, t, a);
          }
        )
      : hf(e, t, n);
  }
  function hf(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      vf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), df(e, n))));
  }
  function ss(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), vf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function vf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function gf(e, t) {
    return t;
  }
  function yf(e, t) {
    if (Re) {
      var n = Ge.formState;
      if (n !== null) {
        e: {
          var a = ye;
          if (Re) {
            if (Ye) {
              t: {
                for (var l = Ye, u = kt; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (((l = $t(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((u = l.data), (l = u === 'F!' || u === 'F' ? l : null));
              }
              if (l) {
                ((Ye = $t(l.nextSibling)), (a = l.data === 'F!'));
                break e;
              }
            }
            Wn(a);
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
        lastRenderedReducer: gf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Hf.bind(null, ye, a)),
      (a.dispatch = n),
      (a = rs(!1)),
      (u = hs.bind(null, ye, !1, a.queue)),
      (a = Et()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = Pv.bind(null, ye, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function pf(e) {
    var t = Pe();
    return Sf(t, He, e);
  }
  function Sf(e, t, n) {
    if (
      ((t = is(e, t, gf)[0]),
      (e = su(_n)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = ti(t);
      } catch (S) {
        throw S === ol ? Pi : S;
      }
    else a = t;
    t = Pe();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048), vl(9, { destroy: void 0 }, Iv.bind(null, l, n), null)),
      [a, u, e]
    );
  }
  function Iv(e, t) {
    e.action = t;
  }
  function xf(e) {
    var t = Pe(),
      n = He;
    if (n !== null) return Sf(t, n, e);
    (Pe(), (t = t.memoizedState), (n = Pe()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function vl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = uu()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ef() {
    return Pe().memoizedState;
  }
  function cu(e, t, n, a) {
    var l = Et();
    ((ye.flags |= e),
      (l.memoizedState = vl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function ou(e, t, n, a) {
    var l = Pe();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    He !== null && a !== null && Ir(a, He.memoizedState.deps)
      ? (l.memoizedState = vl(t, u, n, a))
      : ((ye.flags |= e), (l.memoizedState = vl(1 | t, u, n, a)));
  }
  function bf(e, t) {
    cu(8390656, 8, e, t);
  }
  function cs(e, t) {
    ou(2048, 8, e, t);
  }
  function eg(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null) ((t = uu()), (ye.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Tf(e) {
    var t = Pe().memoizedState;
    return (
      eg({ ref: t, nextImpl: e }),
      function () {
        if ((De & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Cf(e, t) {
    return ou(4, 2, e, t);
  }
  function Mf(e, t) {
    return ou(4, 4, e, t);
  }
  function Rf(e, t) {
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
  function Af(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), ou(4, 4, Rf.bind(null, t, e), n));
  }
  function os() {}
  function zf(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Ir(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function _f(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Ir(t, a[1])) return a[0];
    if (((a = e()), Ua)) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function fs(e, t, n) {
    return n === void 0 || ((zn & 1073741824) !== 0 && (Te & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Od()), (ye.lanes |= e), (ua |= e), n);
  }
  function Of(e, t, n, a) {
    return Nt(n, t)
      ? n
      : dl.current !== null
        ? ((e = fs(e, n, a)), Nt(e, t) || (at = !0), e)
        : (zn & 42) === 0 || ((zn & 1073741824) !== 0 && (Te & 261930) === 0)
          ? ((at = !0), (e.memoizedState = n))
          : ((e = Od()), (ye.lanes |= e), (ua |= e), t);
  }
  function Df(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = q.T,
      M = {};
    ((q.T = M), hs(e, !1, t, n));
    try {
      var U = l(),
        Q = q.S;
      if (
        (Q !== null && Q(M, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var $ = Fv(U, a);
        ni(e, t, $, Gt(e));
      } else ni(e, t, a, Gt(e));
    } catch (I) {
      ni(e, t, { then: function () {}, status: 'rejected', reason: I }, Gt());
    } finally {
      ((K.p = u), S !== null && M.types !== null && (S.types = M.types), (q.T = S));
    }
  }
  function tg() {}
  function ds(e, t, n, a) {
    if (e.tag !== 5) throw Error(x(476));
    var l = wf(e).queue;
    Df(
      e,
      l,
      t,
      ne,
      n === null
        ? tg
        : function () {
            return (Nf(e), n(a));
          }
    );
  }
  function wf(e) {
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
        lastRenderedReducer: _n,
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
          lastRenderedReducer: _n,
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
  function Nf(e) {
    var t = wf(e);
    (t.next === null && (t = e.alternate.memoizedState), ni(e, t.next.queue, {}, Gt()));
  }
  function ms() {
    return vt(Si);
  }
  function Bf() {
    return Pe().memoizedState;
  }
  function Uf() {
    return Pe().memoizedState;
  }
  function ng(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = ea(n);
          var a = ta(t, e, n);
          (a !== null && (_t(a, t, n), Wl(a, t, n)), (t = { cache: Vr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function ag(e, t, n) {
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
      fu(e) ? Lf(t, n) : ((n = Dr(e, t, n, a)), n !== null && (_t(n, e, a), jf(n, t, a))));
  }
  function Hf(e, t, n) {
    var a = Gt();
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
    if (fu(e)) Lf(t, l);
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
            return (Zi(e, t, l, 0), Ge === null && Qi(), !1);
        } catch {
        } finally {
        }
      if (((n = Dr(e, t, l, a)), n !== null)) return (_t(n, e, a), jf(n, t, a), !0);
    }
    return !1;
  }
  function hs(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ks(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fu(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = Dr(e, n, a, 2)), t !== null && _t(t, e, 2));
  }
  function fu(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function Lf(e, t) {
    ml = lu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function jf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wt(e, n));
    }
  }
  var ai = {
    readContext: vt,
    use: ru,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useLayoutEffect: ke,
    useInsertionEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useSyncExternalStore: ke,
    useId: ke,
    useHostTransitionStatus: ke,
    useFormState: ke,
    useActionState: ke,
    useOptimistic: ke,
    useMemoCache: ke,
    useCacheRefresh: ke,
  };
  ai.useEffectEvent = ke;
  var Gf = {
      readContext: vt,
      use: ru,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
      useEffect: bf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), cu(4194308, 4, Rf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return cu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        cu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Et();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ua) {
          en(!0);
          try {
            e();
          } finally {
            en(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = Et();
        if (n !== void 0) {
          var l = n(t);
          if (Ua) {
            en(!0);
            try {
              n(t);
            } finally {
              en(!1);
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
          (e = e.dispatch = ag.bind(null, ye, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = rs(e);
        var t = e.queue,
          n = Hf.bind(null, ye, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: os,
      useDeferredValue: function (e, t) {
        var n = Et();
        return fs(n, e, t);
      },
      useTransition: function () {
        var e = rs(!1);
        return ((e = Df.bind(null, ye, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = ye,
          l = Et();
        if (Re) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), Ge === null)) throw Error(x(349));
          (Te & 127) !== 0 || uf(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          bf(sf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          vl(9, { destroy: void 0 }, rf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = Ge.identifierPrefix;
        if (Re) {
          var n = mn,
            a = dn;
          ((n = (a & ~(1 << (32 - xt(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = iu++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = $v++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: ms,
      useFormState: yf,
      useActionState: yf,
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
        return ((t.queue = n), (t = hs.bind(null, ye, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: ls,
      useCacheRefresh: function () {
        return (Et().memoizedState = ng.bind(null, ye));
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
    vs = {
      readContext: vt,
      use: ru,
      useCallback: zf,
      useContext: vt,
      useEffect: cs,
      useImperativeHandle: Af,
      useInsertionEffect: Cf,
      useLayoutEffect: Mf,
      useMemo: _f,
      useReducer: su,
      useRef: Ef,
      useState: function () {
        return su(_n);
      },
      useDebugValue: os,
      useDeferredValue: function (e, t) {
        var n = Pe();
        return Of(n, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = su(_n)[0],
          t = Pe().memoizedState;
        return [typeof e == 'boolean' ? e : ti(e), t];
      },
      useSyncExternalStore: lf,
      useId: Bf,
      useHostTransitionStatus: ms,
      useFormState: pf,
      useActionState: pf,
      useOptimistic: function (e, t) {
        var n = Pe();
        return ff(n, He, e, t);
      },
      useMemoCache: ls,
      useCacheRefresh: Uf,
    };
  vs.useEffectEvent = Tf;
  var Yf = {
    readContext: vt,
    use: ru,
    useCallback: zf,
    useContext: vt,
    useEffect: cs,
    useImperativeHandle: Af,
    useInsertionEffect: Cf,
    useLayoutEffect: Mf,
    useMemo: _f,
    useReducer: us,
    useRef: Ef,
    useState: function () {
      return us(_n);
    },
    useDebugValue: os,
    useDeferredValue: function (e, t) {
      var n = Pe();
      return He === null ? fs(n, e, t) : Of(n, He.memoizedState, e, t);
    },
    useTransition: function () {
      var e = us(_n)[0],
        t = Pe().memoizedState;
      return [typeof e == 'boolean' ? e : ti(e), t];
    },
    useSyncExternalStore: lf,
    useId: Bf,
    useHostTransitionStatus: ms,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function (e, t) {
      var n = Pe();
      return He !== null ? ff(n, He, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ls,
    useCacheRefresh: Uf,
  };
  Yf.useEffectEvent = Tf;
  function gs(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ys = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = ea(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = ta(e, l, a)),
        t !== null && (_t(t, e, a), Wl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = ea(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = ta(e, l, a)),
        t !== null && (_t(t, e, a), Wl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Gt(),
        a = ea(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ta(e, a, n)),
        t !== null && (_t(t, e, n), Wl(t, e, n)));
    },
  };
  function qf(e, t, n, a, l, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Xl(n, a) || !Xl(l, u)
          : !0
    );
  }
  function Vf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && ys.enqueueReplaceState(t, t.state, null));
  }
  function Ha(e, t) {
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
  function Xf(e) {
    Xi(e);
  }
  function Qf(e) {
    console.error(e);
  }
  function Zf(e) {
    Xi(e);
  }
  function du(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Kf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ps(e, t, n) {
    return (
      (n = ea(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        du(e, t);
      }),
      n
    );
  }
  function Jf(e) {
    return ((e = ea(e)), (e.tag = 3), e);
  }
  function kf(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          Kf(t, n, a);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Kf(t, n, a),
          typeof l != 'function' && (ra === null ? (ra = new Set([this])) : ra.add(this)));
        var M = a.stack;
        this.componentDidCatch(a.value, { componentStack: M !== null ? M : '' });
      });
  }
  function lg(e, t, n, a, l) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && rl(t, n, l, !0), (n = Ut.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ft === null ? Cu() : n.alternate === null && Fe === 0 && (Fe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Ii
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Xs(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Ii
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  Xs(e, a, l)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Xs(e, a, l), Cu(), !1);
    }
    if (Re)
      return (
        (t = Ut.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== Lr && ((e = Error(x(422), { cause: a })), Kl(Zt(e, n))))
          : (a !== Lr && ((t = Error(x(423), { cause: a })), Kl(Zt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = Zt(a, n)),
            (l = ps(e.stateNode, a, l)),
            kr(e, l),
            Fe !== 4 && (Fe = 2)),
        !1
      );
    var u = Error(x(520), { cause: a });
    if (((u = Zt(u, n)), fi === null ? (fi = [u]) : fi.push(u), Fe !== 4 && (Fe = 2), t === null))
      return !0;
    ((a = Zt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = ps(n.stateNode, a, e)),
            kr(n, e),
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
                  (ra === null || !ra.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Jf(l)),
              kf(l, e, n, a),
              kr(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ss = Error(x(461)),
    at = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? Wo(t, null, n, a) : Ba(t, e.child, n, a);
  }
  function Ff(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var S = {};
      for (var M in a) M !== 'ref' && (S[M] = a[M]);
    } else S = a;
    return (
      Oa(t),
      (a = es(e, t, n, S, u, l)),
      (M = ts()),
      e !== null && !at
        ? (ns(e, t, l), On(e, t, l))
        : (Re && M && Ur(t), (t.flags |= 1), gt(e, t, a, l), t.child)
    );
  }
  function $f(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !wr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Wf(e, t, u, a, l))
        : ((e = Ji(n.type, null, a, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !As(e, l))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Xl), n(S, a) && e.ref === t.ref))
        return On(e, t, l);
    }
    return ((t.flags |= 1), (e = Cn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Wf(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xl(u, a) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = a = u), As(e, l))) (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), On(e, t, l));
    }
    return xs(e, t, n, a, l);
  }
  function Pf(e, t, n, a) {
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
        return If(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wi(t, u !== null ? u.cachePool : null),
          u !== null ? ef(t, u) : $r(),
          tf(t));
      else return ((a = t.lanes = 536870912), If(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (Wi(t, u.cachePool), ef(t, u), aa(), (t.memoizedState = null))
        : (e !== null && Wi(t, null), $r(), aa());
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
  function If(e, t, n, a, l) {
    var u = Qr();
    return (
      (u = u === null ? null : { parent: tt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Wi(t, null),
      $r(),
      tf(t),
      e !== null && rl(e, t, a, !0),
      (t.childLanes = l),
      null
    );
  }
  function mu(e, t) {
    return (
      (t = vu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ed(e, t, n) {
    return (
      Ba(t, e.child, null, n),
      (e = mu(t, t.pendingProps)),
      (e.flags |= 2),
      Ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function ig(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Re) {
        if (a.mode === 'hidden') return ((e = mu(t, a)), (t.lanes = 536870912), li(null, e));
        if (
          (Pr(t),
          (e = Ye)
            ? ((e = dm(e, kt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Fn !== null ? { id: dn, overflow: mn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ho(e)),
                (n.return = t),
                (t.child = n),
                (ht = t),
                (Ye = null)))
            : (e = null),
          e === null)
        )
          throw Wn(t);
        return ((t.lanes = 536870912), null);
      }
      return mu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((Pr(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = ed(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((at || rl(e, t, n, !1), (l = (n & e.childLanes) !== 0), at || l)) {
        if (((a = Ge), a !== null && ((S = xn(a, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), Ra(e, S), _t(a, e, S), Ss);
        (Cu(), (t = ed(e, t, n)));
      } else
        ((e = u.treeContext),
          (Ye = $t(S.nextSibling)),
          (ht = t),
          (Re = !0),
          ($n = null),
          (kt = !1),
          e !== null && Go(t, e),
          (t = mu(t, a)),
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
  function hu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function xs(e, t, n, a, l) {
    return (
      Oa(t),
      (n = es(e, t, n, a, void 0, l)),
      (a = ts()),
      e !== null && !at
        ? (ns(e, t, l), On(e, t, l))
        : (Re && a && Ur(t), (t.flags |= 1), gt(e, t, n, l), t.child)
    );
  }
  function td(e, t, n, a, l, u) {
    return (
      Oa(t),
      (t.updateQueue = null),
      (n = af(t, a, n, l)),
      nf(e),
      (a = ts()),
      e !== null && !at
        ? (ns(e, t, u), On(e, t, u))
        : (Re && a && Ur(t), (t.flags |= 1), gt(e, t, n, u), t.child)
    );
  }
  function nd(e, t, n, a, l) {
    if ((Oa(t), t.stateNode === null)) {
      var u = al,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = vt(S)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ys),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Kr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? vt(S) : al),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (gs(t, n, S, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && ys.enqueueReplaceState(u, u.state, null),
          Il(t, a, u, l),
          Pl(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var M = t.memoizedProps,
        U = Ha(n, M);
      u.props = U;
      var Q = u.context,
        $ = n.contextType;
      ((S = al), typeof $ == 'object' && $ !== null && (S = vt($)));
      var I = n.getDerivedStateFromProps;
      (($ = typeof I == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (M = t.pendingProps !== M),
        $ ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((M || Q !== S) && Vf(t, u, a, S)),
        (In = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Il(t, a, u, l),
        Pl(),
        (Q = t.memoizedState),
        M || Z !== Q || In
          ? (typeof I == 'function' && (gs(t, n, I, a), (Q = t.memoizedState)),
            (U = In || qf(t, n, U, a, Z, Q, S))
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
        Jr(e, t),
        (S = t.memoizedProps),
        ($ = Ha(n, S)),
        (u.props = $),
        (I = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = al),
        typeof Q == 'object' && Q !== null && (U = vt(Q)),
        (M = n.getDerivedStateFromProps),
        (Q = typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== I || Z !== U) && Vf(t, u, a, U)),
        (In = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Il(t, a, u, l),
        Pl());
      var k = t.memoizedState;
      S !== I || Z !== k || In || (e !== null && e.dependencies !== null && Fi(e.dependencies))
        ? (typeof M == 'function' && (gs(t, n, M, a), (k = t.memoizedState)),
          ($ =
            In ||
            qf(t, n, $, a, Z, k, U) ||
            (e !== null && e.dependencies !== null && Fi(e.dependencies)))
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
      hu(e, t),
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
        : (e = On(e, t, l)),
      e
    );
  }
  function ad(e, t, n, a) {
    return (za(), (t.flags |= 256), gt(e, t, n, a), t.child);
  }
  var Es = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function bs(e) {
    return { baseLanes: e, cachePool: Zo() };
  }
  function Ts(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= jt), e);
  }
  function ld(e, t, n) {
    var a = t.pendingProps,
      l = !1,
      u = (t.flags & 128) !== 0,
      S;
    if (
      ((S = u) || (S = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0),
      S && ((l = !0), (t.flags &= -129)),
      (S = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Re) {
        if (
          (l ? na(t) : aa(),
          (e = Ye)
            ? ((e = dm(e, kt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Fn !== null ? { id: dn, overflow: mn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ho(e)),
                (n.return = t),
                (t.child = n),
                (ht = t),
                (Ye = null)))
            : (e = null),
          e === null)
        )
          throw Wn(t);
        return (ic(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var M = a.children;
      return (
        (a = a.fallback),
        l
          ? (aa(),
            (l = t.mode),
            (M = vu({ mode: 'hidden', children: M }, l)),
            (a = Aa(a, l, n, null)),
            (M.return = t),
            (a.return = t),
            (M.sibling = a),
            (t.child = M),
            (a = t.child),
            (a.memoizedState = bs(n)),
            (a.childLanes = Ts(e, S, n)),
            (t.memoizedState = Es),
            li(null, a))
          : (na(t), Cs(t, M))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((M = U.dehydrated), M !== null)) {
      if (u)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = Ms(e, t, n)))
          : t.memoizedState !== null
            ? (aa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (aa(),
              (M = a.fallback),
              (l = t.mode),
              (a = vu({ mode: 'visible', children: a.children }, l)),
              (M = Aa(M, l, n, null)),
              (M.flags |= 2),
              (a.return = t),
              (M.return = t),
              (a.sibling = M),
              (t.child = a),
              Ba(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = bs(n)),
              (a.childLanes = Ts(e, S, n)),
              (t.memoizedState = Es),
              (t = li(null, a)));
      else if ((na(t), ic(M))) {
        if (((S = M.nextSibling && M.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (a = Error(x(419))),
          (a.stack = ''),
          (a.digest = S),
          Kl({ value: a, source: null, stack: null }),
          (t = Ms(e, t, n)));
      } else if ((at || rl(e, t, n, !1), (S = (n & e.childLanes) !== 0), at || S)) {
        if (((S = Ge), S !== null && ((a = xn(S, n)), a !== 0 && a !== U.retryLane)))
          throw ((U.retryLane = a), Ra(e, a), _t(S, e, a), Ss);
        (lc(M) || Cu(), (t = Ms(e, t, n)));
      } else
        lc(M)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (Ye = $t(M.nextSibling)),
            (ht = t),
            (Re = !0),
            ($n = null),
            (kt = !1),
            e !== null && Go(t, e),
            (t = Cs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (aa(),
        (M = a.fallback),
        (l = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (a = Cn(U, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (M = Cn(Q, M)) : ((M = Aa(M, l, n, null)), (M.flags |= 2)),
        (M.return = t),
        (a.return = t),
        (a.sibling = M),
        (t.child = a),
        li(null, a),
        (a = t.child),
        (M = e.child.memoizedState),
        M === null
          ? (M = bs(n))
          : ((l = M.cachePool),
            l !== null
              ? ((U = tt._currentValue), (l = l.parent !== U ? { parent: U, pool: U } : l))
              : (l = Zo()),
            (M = { baseLanes: M.baseLanes | n, cachePool: l })),
        (a.memoizedState = M),
        (a.childLanes = Ts(e, S, n)),
        (t.memoizedState = Es),
        li(e.child, a))
      : (na(t),
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
  function Cs(e, t) {
    return ((t = vu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function vu(e, t) {
    return ((e = Bt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Ms(e, t, n) {
    return (
      Ba(t, e.child, null, n),
      (e = Cs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function id(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Yr(e.return, t, n));
  }
  function Rs(e, t, n, a, l, u) {
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
  function ud(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    a = a.children;
    var S = We.current,
      M = (S & 2) !== 0;
    if (
      (M ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      ae(We, S),
      gt(e, t, a, n),
      (a = Re ? Zl : 0),
      !M && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && id(e, n, t);
        else if (e.tag === 19) id(e, n, t);
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
          ((e = n.alternate), e !== null && au(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Rs(t, !1, l, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && au(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Rs(t, !0, n, null, u, a);
        break;
      case 'together':
        Rs(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function On(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ua |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((rl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function As(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Fi(e)));
  }
  function ug(e, t, n) {
    switch (t.tag) {
      case 3:
        (ge(t, t.stateNode.containerInfo), Pn(t, tt, e.memoizedState.cache), za());
        break;
      case 27:
      case 5:
        Ze(t);
        break;
      case 4:
        ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Pr(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ld(e, t, n)
              : (na(t), (e = On(e, t, n)), e !== null ? e.sibling : null);
        na(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (rl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return ud(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ae(We, We.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Pf(e, t, n, t.pendingProps));
      case 24:
        Pn(t, tt, e.memoizedState.cache);
    }
    return On(e, t, n);
  }
  function rd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) at = !0;
      else {
        if (!As(e, n) && (t.flags & 128) === 0) return ((at = !1), ug(e, t, n));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), Re && (t.flags & 1048576) !== 0 && jo(t, Zl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = wa(t.elementType)), (t.type = e), typeof e == 'function'))
            wr(e)
              ? ((a = Ha(e, a)), (t.tag = 1), (t = nd(null, t, e, a, n)))
              : ((t.tag = 0), (t = xs(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                ((t.tag = 11), (t = Ff(null, t, e, a, n)));
                break e;
              } else if (l === _) {
                ((t.tag = 14), (t = $f(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return xs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (l = Ha(a, t.pendingProps)), nd(e, t, a, l, n));
      case 3:
        e: {
          if ((ge(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((l = u.element), Jr(e, t), Il(t, a, null, n));
          var S = t.memoizedState;
          if (
            ((a = S.cache),
            Pn(t, tt, a),
            a !== u.cache && qr(t, [tt], n, !0),
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
              t = ad(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = Zt(Error(x(424)), t)), Kl(l), (t = ad(e, t, a, n)));
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
                Ye = $t(e.firstChild),
                  ht = t,
                  Re = !0,
                  $n = null,
                  kt = !0,
                  n = Wo(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((za(), a === l)) {
              t = On(e, t, n);
              break e;
            }
            gt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          hu(e, t),
          e === null
            ? (n = pm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Re ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Du(ie.current).createElement(n)),
                (a[mt] = t),
                (a[Tt] = e),
                yt(a, n, e),
                ot(a),
                (t.stateNode = a))
            : (t.memoizedState = pm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ze(t),
          e === null &&
            Re &&
            ((a = t.stateNode = vm(t.type, t.pendingProps, ie.current)),
            (ht = t),
            (kt = !0),
            (l = Ye),
            fa(t.type) ? ((uc = l), (Ye = $t(a.firstChild))) : (Ye = l)),
          gt(e, t, t.pendingProps.children, n),
          hu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Re &&
            ((l = a = Ye) &&
              ((a = Hg(a, t.type, t.pendingProps, kt)),
              a !== null
                ? ((t.stateNode = a), (ht = t), (Ye = $t(a.firstChild)), (kt = !1), (l = !0))
                : (l = !1)),
            l || Wn(t)),
          Ze(t),
          (l = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (a = u.children),
          tc(l, u) ? (a = null) : S !== null && tc(l, S) && (t.flags |= 32),
          t.memoizedState !== null && ((l = es(e, t, Wv, null, null, n)), (Si._currentValue = l)),
          hu(e, t),
          gt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Re &&
            ((e = n = Ye) &&
              ((n = Lg(n, t.pendingProps, kt)),
              n !== null ? ((t.stateNode = n), (ht = t), (Ye = null), (e = !0)) : (e = !1)),
            e || Wn(t)),
          null
        );
      case 13:
        return ld(e, t, n);
      case 4:
        return (
          ge(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ba(t, null, a, n)) : gt(e, t, a, n),
          t.child
        );
      case 11:
        return Ff(e, t, t.type, t.pendingProps, n);
      case 7:
        return (gt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), Pn(t, t.type, a.value), gt(e, t, a.children, n), t.child);
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          Oa(t),
          (l = vt(l)),
          (a = a(l)),
          (t.flags |= 1),
          gt(e, t, a, n),
          t.child
        );
      case 14:
        return $f(e, t, t.type, t.pendingProps, n);
      case 15:
        return Wf(e, t, t.type, t.pendingProps, n);
      case 19:
        return ud(e, t, n);
      case 31:
        return ig(e, t, n);
      case 22:
        return Pf(e, t, n, t.pendingProps);
      case 24:
        return (
          Oa(t),
          (a = vt(tt)),
          e === null
            ? ((l = Qr()),
              l === null &&
                ((l = Ge),
                (u = Vr()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: a, cache: l }),
              Kr(t),
              Pn(t, tt, l))
            : ((e.lanes & n) !== 0 && (Jr(e, t), Il(t, null, null, n), Pl()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  Pn(t, tt, a))
                : ((a = u.cache), Pn(t, tt, a), a !== l.cache && qr(t, [tt], n, !0))),
          gt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function Dn(e) {
    e.flags |= 4;
  }
  function zs(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Bd()) e.flags |= 8192;
        else throw ((Na = Ii), Zr);
    } else e.flags &= -16777217;
  }
  function sd(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Tm(t)))
      if (Bd()) e.flags |= 8192;
      else throw ((Na = Ii), Zr);
  }
  function gu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? $e() : 536870912), (e.lanes |= t), (Sl |= t)));
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
  function qe(e) {
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
  function rg(e, t, n) {
    var a = t.pendingProps;
    switch ((Hr(t), t.tag)) {
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
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          An(tt),
          Ae(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ul(t)
              ? Dn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jr())),
          qe(t),
          null
        );
      case 26:
        var l = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Dn(t), u !== null ? (qe(t), sd(t, u)) : (qe(t), zs(t, l, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Dn(t), qe(t), sd(t, u))
                : (qe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Dn(t), qe(t), zs(t, l, e, a, n)),
          null
        );
      case 27:
        if ((it(t), (n = ie.current), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Dn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (qe(t), null);
          }
          ((e = le.current), ul(t) ? Yo(t) : ((e = vm(l, a, n)), (t.stateNode = e), Dn(t)));
        }
        return (qe(t), null);
      case 5:
        if ((it(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Dn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (qe(t), null);
          }
          if (((u = le.current), ul(t))) Yo(t);
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
            a && Dn(t);
          }
        }
        return (qe(t), zs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Dn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ie.current), ul(t))) {
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
                lm(e.nodeValue, n)
              )),
              e || Wn(t, !0));
          } else ((e = Du(e).createTextNode(a)), (e[mt] = t), (t.stateNode = e));
        }
        return (qe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ul(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[mt] = t;
            } else (za(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (qe(t), (e = !1));
          } else
            ((n = jr()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(x(558));
        }
        return (qe(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = ul(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(x(317));
              l[mt] = t;
            } else (za(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (qe(t), (l = !1));
          } else
            ((l = jr()),
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
              gu(t, t.updateQueue),
              qe(t),
              null)
        );
      case 4:
        return (Ae(), e === null && $s(t.stateNode.containerInfo), qe(t), null);
      case 10:
        return (An(t.type), qe(t), null);
      case 19:
        if ((F(We), (a = t.memoizedState), a === null)) return (qe(t), null);
        if (((l = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (l) ii(a, !1);
          else {
            if (Fe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = au(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ii(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      gu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Uo(n, e), (n = n.sibling));
                  return (ae(We, (We.current & 1) | 2), Re && Mn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              st() > Eu &&
              ((t.flags |= 128), (l = !0), ii(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = au(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                gu(t, e),
                ii(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Re)
              )
                return (qe(t), null);
            } else
              2 * st() - a.renderingStartTime > Eu &&
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
            (n = We.current),
            ae(We, l ? (n & 1) | 2 : n & 1),
            Re && Mn(t, a.treeForkCount),
            e)
          : (qe(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Wr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : qe(t),
          (n = t.updateQueue),
          n !== null && gu(t, n.retryQueue),
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
          e !== null && F(Da),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          An(tt),
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
  function sg(e, t) {
    switch ((Hr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          An(tt),
          Ae(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (it(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Ht(t), t.alternate === null)) throw Error(x(340));
          za();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          za();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (F(We), null);
      case 4:
        return (Ae(), null);
      case 10:
        return (An(t.type), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Wr(),
          e !== null && F(Da),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (An(tt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(e, t) {
    switch ((Hr(t), t.tag)) {
      case 3:
        (An(tt), Ae());
        break;
      case 26:
      case 27:
      case 5:
        it(t);
        break;
      case 4:
        Ae();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        F(We);
        break;
      case 10:
        An(t.type);
        break;
      case 22:
      case 23:
        (Ht(t), Wr(), e !== null && F(Da));
        break;
      case 24:
        An(tt);
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
    } catch (M) {
      Be(t, t.return, M);
    }
  }
  function la(e, t, n) {
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
                Be(l, U, $);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch ($) {
      Be(t, t.return, $);
    }
  }
  function od(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Io(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function fd(e, t, n) {
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
  function hn(e, t) {
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
  function dd(e) {
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
  function _s(e, t, n) {
    try {
      var a = e.stateNode;
      (Og(a, e.type, n, t), (a[Tt] = t));
    } catch (l) {
      Be(e, e.return, l);
    }
  }
  function md(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && fa(e.type)) || e.tag === 4
    );
  }
  function Os(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || md(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && fa(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ds(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = bn)));
    else if (
      a !== 4 &&
      (a === 27 && fa(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Ds(e, t, n), e = e.sibling; e !== null; ) (Ds(e, t, n), (e = e.sibling));
  }
  function yu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && fa(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (yu(e, t, n), e = e.sibling; e !== null; ) (yu(e, t, n), (e = e.sibling));
  }
  function hd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      (yt(t, a, n), (t[mt] = e), (t[Tt] = n));
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var wn = !1,
    lt = !1,
    ws = !1,
    vd = typeof WeakSet == 'function' ? WeakSet : Set,
    ft = null;
  function cg(e, t) {
    if (((e = e.containerInfo), (Is = ju), (e = Ro(e)), Mr(e))) {
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
    for (ec = { focusedElem: e, selectionRange: n }, ju = !1, ft = t; ft !== null; )
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
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ac(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      ac(e);
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
  function gd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Bn(e, n), a & 4 && ui(5, n));
        break;
      case 1:
        if ((Bn(e, n), a & 4))
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
        (a & 64 && od(n), a & 512 && ri(n, n.return));
        break;
      case 3:
        if ((Bn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
            Io(e, t);
          } catch (S) {
            Be(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && a & 4 && hd(n);
      case 26:
      case 5:
        (Bn(e, n), t === null && a & 4 && dd(n), a & 512 && ri(n, n.return));
        break;
      case 12:
        Bn(e, n);
        break;
      case 31:
        (Bn(e, n), a & 4 && Sd(e, n));
        break;
      case 13:
        (Bn(e, n),
          a & 4 && xd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = pg.bind(null, n)), jg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || wn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || lt), (l = wn));
          var u = lt;
          ((wn = a),
            (lt = t) && !u ? Un(e, n, (n.subtreeFlags & 8772) !== 0) : Bn(e, n),
            (wn = l),
            (lt = u));
        }
        break;
      case 30:
        break;
      default:
        Bn(e, n);
    }
  }
  function yd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), yd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && sr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ve = null,
    Mt = !1;
  function Nn(e, t, n) {
    for (n = n.child; n !== null; ) (pd(e, t, n), (n = n.sibling));
  }
  function pd(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(Ea, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (lt || hn(n, t),
          Nn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        lt || hn(n, t);
        var a = Ve,
          l = Mt;
        (fa(n.type) && ((Ve = n.stateNode), (Mt = !1)),
          Nn(e, t, n),
          gi(n.stateNode),
          (Ve = a),
          (Mt = l));
        break;
      case 5:
        lt || hn(n, t);
      case 6:
        if (((a = Ve), (l = Mt), (Ve = null), Nn(e, t, n), (Ve = a), (Mt = l), Ve !== null))
          if (Mt)
            try {
              (Ve.nodeType === 9
                ? Ve.body
                : Ve.nodeName === 'HTML'
                  ? Ve.ownerDocument.body
                  : Ve
              ).removeChild(n.stateNode);
            } catch (u) {
              Be(n, t, u);
            }
          else
            try {
              Ve.removeChild(n.stateNode);
            } catch (u) {
              Be(n, t, u);
            }
        break;
      case 18:
        Ve !== null &&
          (Mt
            ? ((e = Ve),
              om(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Al(e))
            : om(Ve, n.stateNode));
        break;
      case 4:
        ((a = Ve),
          (l = Mt),
          (Ve = n.stateNode.containerInfo),
          (Mt = !0),
          Nn(e, t, n),
          (Ve = a),
          (Mt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (la(2, n, t), lt || la(4, n, t), Nn(e, t, n));
        break;
      case 1:
        (lt ||
          (hn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && fd(n, t, a)),
          Nn(e, t, n));
        break;
      case 21:
        Nn(e, t, n);
        break;
      case 22:
        ((lt = (a = lt) || n.memoizedState !== null), Nn(e, t, n), (lt = a));
        break;
      default:
        Nn(e, t, n);
    }
  }
  function Sd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Al(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function xd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Al(e);
      } catch (n) {
        Be(t, t.return, n);
      }
  }
  function og(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new vd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new vd()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function pu(e, t) {
    var n = og(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Sg.bind(null, e, a);
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
          M = S;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 27:
              if (fa(M.type)) {
                ((Ve = M.stateNode), (Mt = !1));
                break e;
              }
              break;
            case 5:
              ((Ve = M.stateNode), (Mt = !1));
              break e;
            case 3:
            case 4:
              ((Ve = M.stateNode.containerInfo), (Mt = !0));
              break e;
          }
          M = M.return;
        }
        if (Ve === null) throw Error(x(160));
        (pd(u, S, l),
          (Ve = null),
          (Mt = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Ed(t, e), (t = t.sibling));
  }
  var an = null;
  function Ed(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Rt(t, e), At(e), a & 4 && (la(3, e, e.return), ui(3, e), la(5, e, e.return)));
        break;
      case 1:
        (Rt(t, e),
          At(e),
          a & 512 && (lt || n === null || hn(n, n.return)),
          a & 64 &&
            wn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = an;
        if ((Rt(t, e), At(e), a & 512 && (lt || n === null || hn(n, n.return)), a & 4)) {
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
                      var S = Em('link', 'href', l).get(a + (n.href || ''));
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
                      ((u = l.createElement(a)), yt(u, a, n), l.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = Em('meta', 'content', l).get(a + (n.content || '')))) {
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
                      ((u = l.createElement(a)), yt(u, a, n), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, a));
                  }
                  ((u[mt] = e), ot(u), (a = u));
                }
                e.stateNode = a;
              } else bm(l, e.type, e.stateNode);
            else e.stateNode = xm(l, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? bm(l, e.type, e.stateNode) : xm(l, a, e.memoizedProps))
              : a === null && e.stateNode !== null && _s(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Rt(t, e),
          At(e),
          a & 512 && (lt || n === null || hn(n, n.return)),
          n !== null && a & 4 && _s(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Rt(t, e), At(e), a & 512 && (lt || n === null || hn(n, n.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            $a(l, '');
          } catch (re) {
            Be(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), _s(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (ws = !0));
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
          ((Bu = null),
          (l = an),
          (an = wu(t.containerInfo)),
          Rt(t, e),
          (an = l),
          At(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Al(t.containerInfo);
          } catch (re) {
            Be(e, e.return, re);
          }
        ws && ((ws = !1), bd(e));
        break;
      case 4:
        ((a = an), (an = wu(e.stateNode.containerInfo)), Rt(t, e), At(e), (an = a));
        break;
      case 12:
        (Rt(t, e), At(e));
        break;
      case 31:
        (Rt(t, e),
          At(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), pu(e, a))));
        break;
      case 13:
        (Rt(t, e),
          At(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (xu = st()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), pu(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = wn,
          $ = lt;
        if (((wn = Q || l), (lt = $ || U), Rt(t, e), (lt = $), (wn = Q), At(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || U || wn || lt || La(e)),
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
                  l ? fm(k, !0) : fm(U.stateNode, !1);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), pu(e, n))));
        break;
      case 19:
        (Rt(t, e),
          At(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), pu(e, a))));
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
          if (md(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = Os(e);
            yu(e, u, l);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && ($a(S, ''), (n.flags &= -33));
            var M = Os(e);
            yu(e, M, S);
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo,
              Q = Os(e);
            Ds(e, Q, U);
            break;
          default:
            throw Error(x(161));
        }
      } catch ($) {
        Be(e, e.return, $);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (bd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Bn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (gd(e, t.alternate, t), (t = t.sibling));
  }
  function La(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (la(4, t, t.return), La(t));
          break;
        case 1:
          hn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && fd(t, t.return, n), La(t));
          break;
        case 27:
          gi(t.stateNode);
        case 26:
        case 5:
          (hn(t, t.return), La(t));
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
  function Un(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        l = e,
        u = t,
        S = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Un(l, u, n), ui(4, u));
          break;
        case 1:
          if ((Un(l, u, n), (a = u), (l = a.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (Q) {
              Be(a, a.return, Q);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var M = a.stateNode;
            try {
              var U = l.shared.hiddenCallbacks;
              if (U !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < U.length; l++) Po(U[l], M);
            } catch (Q) {
              Be(a, a.return, Q);
            }
          }
          (n && S & 64 && od(u), ri(u, u.return));
          break;
        case 27:
          hd(u);
        case 26:
        case 5:
          (Un(l, u, n), n && a === null && S & 4 && dd(u), ri(u, u.return));
          break;
        case 12:
          Un(l, u, n);
          break;
        case 31:
          (Un(l, u, n), n && S & 4 && Sd(l, u));
          break;
        case 13:
          (Un(l, u, n), n && S & 4 && xd(l, u));
          break;
        case 22:
          (u.memoizedState === null && Un(l, u, n), ri(u, u.return));
          break;
        case 30:
          break;
        default:
          Un(l, u, n);
      }
      t = t.sibling;
    }
  }
  function Ns(e, t) {
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
  function Bs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Jl(e)));
  }
  function ln(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Td(e, t, n, a), (t = t.sibling));
  }
  function Td(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ln(e, t, n, a), l & 2048 && ui(9, t));
        break;
      case 1:
        ln(e, t, n, a);
        break;
      case 3:
        (ln(e, t, n, a),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Jl(e))));
        break;
      case 12:
        if (l & 2048) {
          (ln(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              M = u.onPostCommit;
            typeof M == 'function' &&
              M(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (U) {
            Be(t, t.return, U);
          }
        } else ln(e, t, n, a);
        break;
      case 31:
        ln(e, t, n, a);
        break;
      case 13:
        ln(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (S = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? ln(e, t, n, a)
              : si(e, t)
            : u._visibility & 2
              ? ln(e, t, n, a)
              : ((u._visibility |= 2), gl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && Ns(S, t));
        break;
      case 24:
        (ln(e, t, n, a), l & 2048 && Bs(t.alternate, t));
        break;
      default:
        ln(e, t, n, a);
    }
  }
  function gl(e, t, n, a, l) {
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
          (gl(u, S, M, U, l), ui(8, S));
          break;
        case 23:
          break;
        case 22:
          var $ = S.stateNode;
          (S.memoizedState !== null
            ? $._visibility & 2
              ? gl(u, S, M, U, l)
              : si(u, S)
            : (($._visibility |= 2), gl(u, S, M, U, l)),
            l && Q & 2048 && Ns(S.alternate, S));
          break;
        case 24:
          (gl(u, S, M, U, l), l && Q & 2048 && Bs(S.alternate, S));
          break;
        default:
          gl(u, S, M, U, l);
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
            (si(n, a), l & 2048 && Ns(a.alternate, a));
            break;
          case 24:
            (si(n, a), l & 2048 && Bs(a.alternate, a));
            break;
          default:
            si(n, a);
        }
        t = t.sibling;
      }
  }
  var ci = 8192;
  function yl(e, t, n) {
    if (e.subtreeFlags & ci) for (e = e.child; e !== null; ) (Cd(e, t, n), (e = e.sibling));
  }
  function Cd(e, t, n) {
    switch (e.tag) {
      case 26:
        (yl(e, t, n),
          e.flags & ci && e.memoizedState !== null && $g(n, an, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        yl(e, t, n);
        break;
      case 3:
      case 4:
        var a = an;
        ((an = wu(e.stateNode.containerInfo)), yl(e, t, n), (an = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ci), (ci = 16777216), yl(e, t, n), (ci = a))
            : yl(e, t, n));
        break;
      default:
        yl(e, t, n);
    }
  }
  function Md(e) {
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
          ((ft = a), Ad(a, e));
        }
      Md(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Rd(e), (e = e.sibling));
  }
  function Rd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (oi(e), e.flags & 2048 && la(9, e, e.return));
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
          ? ((t._visibility &= -3), Su(e))
          : oi(e);
        break;
      default:
        oi(e);
    }
  }
  function Su(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((ft = a), Ad(a, e));
        }
      Md(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (la(8, t, t.return), Su(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Su(t)));
          break;
        default:
          Su(t);
      }
      e = e.sibling;
    }
  }
  function Ad(e, t) {
    for (; ft !== null; ) {
      var n = ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          la(8, n, t);
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
          if ((yd(a), a === n)) {
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
  var fg = {
      getCacheForType: function (e) {
        var t = vt(tt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return vt(tt).controller.signal;
      },
    },
    dg = typeof WeakMap == 'function' ? WeakMap : Map,
    De = 0,
    Ge = null,
    Ee = null,
    Te = 0,
    Ne = 0,
    Lt = null,
    ia = !1,
    pl = !1,
    Us = !1,
    Hn = 0,
    Fe = 0,
    ua = 0,
    ja = 0,
    Hs = 0,
    jt = 0,
    Sl = 0,
    fi = null,
    zt = null,
    Ls = !1,
    xu = 0,
    zd = 0,
    Eu = 1 / 0,
    bu = null,
    ra = null,
    rt = 0,
    sa = null,
    xl = null,
    Ln = 0,
    js = 0,
    Gs = null,
    _d = null,
    di = 0,
    Ys = null;
  function Gt() {
    return (De & 2) !== 0 && Te !== 0 ? Te & -Te : q.T !== null ? Ks() : Nl();
  }
  function Od() {
    if (jt === 0)
      if ((Te & 536870912) === 0 || Re) {
        var e = Me;
        ((Me <<= 1), (Me & 3932160) === 0 && (Me = 262144), (jt = e));
      } else jt = 536870912;
    return ((e = Ut.current), e !== null && (e.flags |= 32), jt);
  }
  function _t(e, t, n) {
    (((e === Ge && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (El(e, 0), ca(e, Te, jt, !1)),
      Ie(e, n),
      ((De & 2) === 0 || e !== Ge) &&
        (e === Ge && ((De & 2) === 0 && (ja |= n), Fe === 4 && ca(e, Te, jt, !1)), vn(e)));
  }
  function Dd(e, t, n) {
    if ((De & 6) !== 0) throw Error(x(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || we(e, t),
      l = a ? vg(e, t) : Vs(e, t, !0),
      u = a;
    do {
      if (l === 0) {
        pl && !a && ca(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !mg(n))) {
          ((l = Vs(e, t, !1)), (u = !1));
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
              l = fi;
              var U = M.current.memoizedState.isDehydrated;
              if ((U && (El(M, S).flags |= 256), (S = Vs(M, S, !1)), S !== 2)) {
                if (Us && !U) {
                  ((M.errorRecoveryDisabledLanes |= u), (ja |= u), (l = 4));
                  break e;
                }
                ((u = zt), (zt = l), u !== null && (zt === null ? (zt = u) : zt.push.apply(zt, u)));
              }
              l = S;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (El(e, 0), ca(e, t, 0, !0));
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
              ca(a, t, jt, !ia);
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(x(329));
          }
          if ((t & 62914560) === t && ((l = xu + 300 - st()), 10 < l)) {
            if ((ca(a, t, jt, !ia), xe(a, 0, !0) !== 0)) break e;
            ((Ln = t),
              (a.timeoutHandle = sm(
                wd.bind(null, a, n, zt, bu, Ls, t, jt, ja, Sl, ia, u, 'Throttled', -0, 0),
                l
              )));
            break e;
          }
          wd(a, n, zt, bu, Ls, t, jt, ja, Sl, ia, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    vn(e);
  }
  function wd(e, t, n, a, l, u, S, M, U, Q, $, I, Z, k) {
    if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bn,
      }),
        Cd(t, u, I));
      var re = (u & 62914560) === u ? xu - st() : (u & 4194048) === u ? zd - st() : 0;
      if (((re = Wg(I, re)), re !== null)) {
        ((Ln = u),
          (e.cancelPendingCommit = re(Yd.bind(null, e, t, u, n, a, l, S, M, U, $, I, null, Z, k))),
          ca(e, u, S, !Q));
        return;
      }
    }
    Yd(e, t, u, n, a, l, S, M, U);
  }
  function mg(e) {
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
  function ca(e, t, n, a) {
    ((t &= ~Hs),
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
    n !== 0 && et(e, n, t);
  }
  function Tu() {
    return (De & 6) === 0 ? (mi(0), !1) : !0;
  }
  function qs() {
    if (Ee !== null) {
      if (Ne === 0) var e = Ee.return;
      else ((e = Ee), (Rn = _a = null), as(e), (fl = null), (Fl = 0), (e = Ee));
      for (; e !== null; ) (cd(e.alternate, e), (e = e.return));
      Ee = null;
    }
  }
  function El(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Ng(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Ln = 0),
      qs(),
      (Ge = e),
      (Ee = n = Cn(e.current, null)),
      (Te = t),
      (Ne = 0),
      (Lt = null),
      (ia = !1),
      (pl = we(e, t)),
      (Us = !1),
      (Sl = jt = Hs = ja = ua = Fe = 0),
      (zt = fi = null),
      (Ls = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - xt(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return ((Hn = t), Qi(), n);
  }
  function Nd(e, t) {
    ((ye = null),
      (q.H = ai),
      t === ol || t === Pi
        ? ((t = ko()), (Ne = 3))
        : t === Zr
          ? ((t = ko()), (Ne = 4))
          : (Ne =
              t === Ss
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Lt = t),
      Ee === null && ((Fe = 1), du(e, Zt(t, e.current))));
  }
  function Bd() {
    var e = Ut.current;
    return e === null
      ? !0
      : (Te & 4194048) === Te
        ? Ft === null
        : (Te & 62914560) === Te || (Te & 536870912) !== 0
          ? e === Ft
          : !1;
  }
  function Ud() {
    var e = q.H;
    return ((q.H = ai), e === null ? ai : e);
  }
  function Hd() {
    var e = q.A;
    return ((q.A = fg), e);
  }
  function Cu() {
    ((Fe = 4),
      ia || ((Te & 4194048) !== Te && Ut.current !== null) || (pl = !0),
      ((ua & 134217727) === 0 && (ja & 134217727) === 0) || Ge === null || ca(Ge, Te, jt, !1));
  }
  function Vs(e, t, n) {
    var a = De;
    De |= 2;
    var l = Ud(),
      u = Hd();
    ((Ge !== e || Te !== t) && ((bu = null), El(e, t)), (t = !1));
    var S = Fe;
    e: do
      try {
        if (Ne !== 0 && Ee !== null) {
          var M = Ee,
            U = Lt;
          switch (Ne) {
            case 8:
              (qs(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var Q = Ne;
              if (((Ne = 0), (Lt = null), bl(e, M, U, Q), n && pl)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = Ne), (Ne = 0), (Lt = null), bl(e, M, U, Q));
          }
        }
        (hg(), (S = Fe));
        break;
      } catch ($) {
        Nd(e, $);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rn = _a = null),
      (De = a),
      (q.H = l),
      (q.A = u),
      Ee === null && ((Ge = null), (Te = 0), Qi()),
      S
    );
  }
  function hg() {
    for (; Ee !== null; ) Ld(Ee);
  }
  function vg(e, t) {
    var n = De;
    De |= 2;
    var a = Ud(),
      l = Hd();
    Ge !== e || Te !== t ? ((bu = null), (Eu = st() + 500), El(e, t)) : (pl = we(e, t));
    e: do
      try {
        if (Ne !== 0 && Ee !== null) {
          t = Ee;
          var u = Lt;
          t: switch (Ne) {
            case 1:
              ((Ne = 0), (Lt = null), bl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Ko(u)) {
                ((Ne = 0), (Lt = null), jd(t));
                break;
              }
              ((t = function () {
                ((Ne !== 2 && Ne !== 9) || Ge !== e || (Ne = 7), vn(e));
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
              Ko(u) ? ((Ne = 0), (Lt = null), jd(t)) : ((Ne = 0), (Lt = null), bl(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (Ee.tag) {
                case 26:
                  S = Ee.memoizedState;
                case 5:
                case 27:
                  var M = Ee;
                  if (S ? Tm(S) : M.stateNode.complete) {
                    ((Ne = 0), (Lt = null));
                    var U = M.sibling;
                    if (U !== null) Ee = U;
                    else {
                      var Q = M.return;
                      Q !== null ? ((Ee = Q), Mu(Q)) : (Ee = null);
                    }
                    break t;
                  }
              }
              ((Ne = 0), (Lt = null), bl(e, t, u, 5));
              break;
            case 6:
              ((Ne = 0), (Lt = null), bl(e, t, u, 6));
              break;
            case 8:
              (qs(), (Fe = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        gg();
        break;
      } catch ($) {
        Nd(e, $);
      }
    while (!0);
    return (
      (Rn = _a = null),
      (q.H = a),
      (q.A = l),
      (De = n),
      Ee !== null ? 0 : ((Ge = null), (Te = 0), Qi(), Fe)
    );
  }
  function gg() {
    for (; Ee !== null && !fn(); ) Ld(Ee);
  }
  function Ld(e) {
    var t = rd(e.alternate, e, Hn);
    ((e.memoizedProps = e.pendingProps), t === null ? Mu(e) : (Ee = t));
  }
  function jd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = td(n, t, t.pendingProps, t.type, void 0, Te);
        break;
      case 11:
        t = td(n, t, t.pendingProps, t.type.render, t.ref, Te);
        break;
      case 5:
        as(t);
      default:
        (cd(n, t), (t = Ee = Uo(t, Hn)), (t = rd(n, t, Hn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Mu(e) : (Ee = t));
  }
  function bl(e, t, n, a) {
    ((Rn = _a = null), as(t), (fl = null), (Fl = 0));
    var l = t.return;
    try {
      if (lg(e, l, t, n, Te)) {
        ((Fe = 1), du(e, Zt(n, e.current)), (Ee = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((Ee = l), u);
      ((Fe = 1), du(e, Zt(n, e.current)), (Ee = null));
      return;
    }
    t.flags & 32768
      ? (Re || a === 1
          ? (e = !0)
          : pl || (Te & 536870912) !== 0
            ? (e = !1)
            : ((ia = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ut.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Gd(t, e))
      : Mu(t);
  }
  function Mu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gd(t, ia);
        return;
      }
      e = t.return;
      var n = rg(t.alternate, t, Hn);
      if (n !== null) {
        Ee = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    Fe === 0 && (Fe = 5);
  }
  function Gd(e, t) {
    do {
      var n = sg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Ee = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ee = e;
        return;
      }
      Ee = e = n;
    } while (e !== null);
    ((Fe = 6), (Ee = null));
  }
  function Yd(e, t, n, a, l, u, S, M, U) {
    e.cancelPendingCommit = null;
    do Ru();
    while (rt !== 0);
    if ((De & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Or),
        ct(e, n, u, S, M, U),
        e === Ge && ((Ee = Ge = null), (Te = 0)),
        (xl = t),
        (sa = e),
        (Ln = n),
        (js = u),
        (Gs = l),
        (_d = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            xg(yn, function () {
              return (Zd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = q.T), (q.T = null), (l = K.p), (K.p = 2), (S = De), (De |= 4));
        try {
          cg(e, t, n);
        } finally {
          ((De = S), (K.p = l), (q.T = a));
        }
      }
      ((rt = 1), qd(), Vd(), Xd());
    }
  }
  function qd() {
    if (rt === 1) {
      rt = 0;
      var e = sa,
        t = xl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = De;
        De |= 4;
        try {
          Ed(t, e);
          var u = ec,
            S = Ro(e.containerInfo),
            M = u.focusedElem,
            U = u.selectionRange;
          if (S !== M && M && M.ownerDocument && Mo(M.ownerDocument.documentElement, M)) {
            if (U !== null && Mr(M)) {
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
                    je = U.end === void 0 ? me : Math.min(U.end, re);
                  !k.extend && me > je && ((S = je), (je = me), (me = S));
                  var V = Co(M, me),
                    Y = Co(M, je);
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
            for (I = [], k = M; (k = k.parentNode); )
              k.nodeType === 1 && I.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (typeof M.focus == 'function' && M.focus(), M = 0; M < I.length; M++) {
              var P = I[M];
              ((P.element.scrollLeft = P.left), (P.element.scrollTop = P.top));
            }
          }
          ((ju = !!Is), (ec = Is = null));
        } finally {
          ((De = l), (K.p = a), (q.T = n));
        }
      }
      ((e.current = t), (rt = 2));
    }
  }
  function Vd() {
    if (rt === 2) {
      rt = 0;
      var e = sa,
        t = xl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = De;
        De |= 4;
        try {
          gd(e, t.alternate, t);
        } finally {
          ((De = l), (K.p = a), (q.T = n));
        }
      }
      rt = 3;
    }
  }
  function Xd() {
    if (rt === 4 || rt === 3) {
      ((rt = 0), Sa());
      var e = sa,
        t = xl,
        n = Ln,
        a = _d;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (rt = 5)
        : ((rt = 0), (xl = sa = null), Qd(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (ra = null),
        Va(n),
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
            var M = a[S];
            u(M.value, { componentStack: M.stack });
          }
        } finally {
          ((q.T = t), (K.p = l));
        }
      }
      ((Ln & 3) !== 0 && Ru(),
        vn(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0 ? (e === Ys ? di++ : ((di = 0), (Ys = e))) : (di = 0),
        mi(0));
    }
  }
  function Qd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Jl(t)));
  }
  function Ru() {
    return (qd(), Vd(), Xd(), Zd());
  }
  function Zd() {
    if (rt !== 5) return !1;
    var e = sa,
      t = js;
    js = 0;
    var n = Va(Ln),
      a = q.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (q.T = null), (n = Gs), (Gs = null));
      var u = sa,
        S = Ln;
      if (((rt = 0), (xl = sa = null), (Ln = 0), (De & 6) !== 0)) throw Error(x(331));
      var M = De;
      if (
        ((De |= 4),
        Rd(u.current),
        Td(u, u.current, S, n),
        (De = M),
        mi(0, !1),
        St && typeof St.onPostCommitFiberRoot == 'function')
      )
        try {
          St.onPostCommitFiberRoot(Ea, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (q.T = a), Qd(e, t));
    }
  }
  function Kd(e, t, n) {
    ((t = Zt(n, t)),
      (t = ps(e.stateNode, t, 2)),
      (e = ta(e, t, 2)),
      e !== null && (Ie(e, 2), vn(e)));
  }
  function Be(e, t, n) {
    if (e.tag === 3) Kd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Kd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (ra === null || !ra.has(a)))
          ) {
            ((e = Zt(n, e)),
              (n = Jf(2)),
              (a = ta(t, n, 2)),
              a !== null && (kf(n, a, t, e), Ie(a, 2), vn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new dg();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || ((Us = !0), l.add(n), (e = yg.bind(null, e, t, n)), t.then(e, e));
  }
  function yg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ge === e &&
        (Te & n) === n &&
        (Fe === 4 || (Fe === 3 && (Te & 62914560) === Te && 300 > st() - xu)
          ? (De & 2) === 0 && El(e, 0)
          : (Hs |= n),
        Sl === Te && (Sl = 0)),
      vn(e));
  }
  function Jd(e, t) {
    (t === 0 && (t = $e()), (e = Ra(e, t)), e !== null && (Ie(e, t), vn(e)));
  }
  function pg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Jd(e, n));
  }
  function Sg(e, t) {
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
    (a !== null && a.delete(t), Jd(e, n));
  }
  function xg(e, t) {
    return Yt(e, t);
  }
  var Au = null,
    Tl = null,
    Qs = !1,
    zu = !1,
    Zs = !1,
    oa = 0;
  function vn(e) {
    (e !== Tl && e.next === null && (Tl === null ? (Au = Tl = e) : (Tl = Tl.next = e)),
      (zu = !0),
      Qs || ((Qs = !0), bg()));
  }
  function mi(e, t) {
    if (!Zs && zu) {
      Zs = !0;
      do
        for (var n = !1, a = Au; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var S = a.suspendedLanes,
                M = a.pingedLanes;
              ((u = (1 << (31 - xt(42 | e) + 1)) - 1),
                (u &= l & ~(S & ~M)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Wd(a, u));
          } else
            ((u = Te),
              (u = xe(
                a,
                a === Ge ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || we(a, u) || ((n = !0), Wd(a, u)));
          a = a.next;
        }
      while (n);
      Zs = !1;
    }
  }
  function Eg() {
    kd();
  }
  function kd() {
    zu = Qs = !1;
    var e = 0;
    oa !== 0 && wg() && (e = oa);
    for (var t = st(), n = null, a = Au; a !== null; ) {
      var l = a.next,
        u = Fd(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Au = l) : (n.next = l), l === null && (Tl = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (zu = !0)),
        (a = l));
    }
    ((rt !== 0 && rt !== 5) || mi(e), oa !== 0 && (oa = 0));
  }
  function Fd(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - xt(u),
        M = 1 << S,
        U = l[S];
      (U === -1
        ? ((M & n) === 0 || (M & a) !== 0) && (l[S] = Ke(M, t))
        : U <= t && (e.expiredLanes |= M),
        (u &= ~M));
    }
    if (
      ((t = Ge),
      (n = Te),
      (n = xe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && ut(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || we(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && ut(a), Va(n))) {
        case 2:
        case 8:
          n = xa;
          break;
        case 32:
          n = yn;
          break;
        case 268435456:
          n = Sn;
          break;
        default:
          n = yn;
      }
      return (
        (a = $d.bind(null, e)),
        (n = Yt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && ut(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function $d(e, t) {
    if (rt !== 0 && rt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Ru() && e.callbackNode !== n) return null;
    var a = Te;
    return (
      (a = xe(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Dd(e, a, t),
          Fd(e, st()),
          e.callbackNode != null && e.callbackNode === n ? $d.bind(null, e) : null)
    );
  }
  function Wd(e, t) {
    if (Ru()) return null;
    Dd(e, t, !0);
  }
  function bg() {
    Bg(function () {
      (De & 6) !== 0 ? Yt(Dt, Eg) : kd();
    });
  }
  function Ks() {
    if (oa === 0) {
      var e = sl;
      (e === 0 && ((e = ue), (ue <<= 1), (ue & 261888) === 0 && (ue = 256)), (oa = e));
    }
    return oa;
  }
  function Pd(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Hi('' + e);
  }
  function Id(e, t) {
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
  function Tg(e, t, n, a, l) {
    if (t === 'submit' && n && n.stateNode === l) {
      var u = Pd((l[Tt] || null).action),
        S = a.submitter;
      S &&
        ((t = (t = S[Tt] || null) ? Pd(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var M = new Yi('action', 'action', null, a, l);
      e.push({
        event: M,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (oa !== 0) {
                  var U = S ? Id(l, S) : new FormData(l);
                  ds(n, { pending: !0, data: U, method: l.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (M.preventDefault(),
                  (U = S ? Id(l, S) : new FormData(l)),
                  ds(n, { pending: !0, data: U, method: l.method, action: u }, u, U));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Js = 0; Js < _r.length; Js++) {
    var ks = _r[Js],
      Cg = ks.toLowerCase(),
      Mg = ks[0].toUpperCase() + ks.slice(1);
    nn(Cg, 'on' + Mg);
  }
  (nn(_o, 'onAnimationEnd'),
    nn(Oo, 'onAnimationIteration'),
    nn(Do, 'onAnimationStart'),
    nn('dblclick', 'onDoubleClick'),
    nn('focusin', 'onFocus'),
    nn('focusout', 'onBlur'),
    nn(qv, 'onTransitionRun'),
    nn(Vv, 'onTransitionStart'),
    nn(Xv, 'onTransitionCancel'),
    nn(wo, 'onTransitionEnd'),
    ka('onMouseEnter', ['mouseout', 'mouseover']),
    ka('onMouseLeave', ['mouseout', 'mouseover']),
    ka('onPointerEnter', ['pointerout', 'pointerover']),
    ka('onPointerLeave', ['pointerout', 'pointerover']),
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
    Rg = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(hi)
    );
  function em(e, t) {
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
              Xi($);
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
              Xi($);
            }
            ((l.currentTarget = null), (u = U));
          }
      }
    }
  }
  function be(e, t) {
    var n = t[rr];
    n === void 0 && (n = t[rr] = new Set());
    var a = e + '__bubble';
    n.has(a) || (tm(t, e, 2, !1), n.add(a));
  }
  function Fs(e, t, n) {
    var a = 0;
    (t && (a |= 4), tm(n, e, a, t));
  }
  var _u = '_reactListening' + Math.random().toString(36).slice(2);
  function $s(e) {
    if (!e[_u]) {
      ((e[_u] = !0),
        Kc.forEach(function (n) {
          n !== 'selectionchange' && (Rg.has(n) || Fs(n, !1, e), Fs(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_u] || ((t[_u] = !0), Fs('selectionchange', !1, t));
    }
  }
  function tm(e, t, n, a) {
    switch (Om(t)) {
      case 2:
        var l = e0;
        break;
      case 8:
        l = t0;
        break;
      default:
        l = fc;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !gr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Ws(e, t, n, a, l) {
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
            if (((S = Za(M)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              a = u = S;
              continue e;
            }
            M = M.parentNode;
          }
        }
        a = a.return;
      }
    lo(function () {
      var Q = u,
        $ = hr(n),
        I = [];
      e: {
        var Z = No.get(e);
        if (Z !== void 0) {
          var k = Yi,
            re = e;
          switch (e) {
            case 'keypress':
              if (ji(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = Sv;
              break;
            case 'focusin':
              ((re = 'focus'), (k = xr));
              break;
            case 'focusout':
              ((re = 'blur'), (k = xr));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = xr;
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
              k = ro;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = rv;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = bv;
              break;
            case _o:
            case Oo:
            case Do:
              k = ov;
              break;
            case wo:
              k = Cv;
              break;
            case 'scroll':
            case 'scrollend':
              k = iv;
              break;
            case 'wheel':
              k = Rv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = dv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = co;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = zv;
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
          0 < me.length && ((Z = new k(Z, re, null, n, $)), I.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            Z && n !== mr && (re = n.relatedTarget || n.fromElement) && (Za(re) || re[Qa]))
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
                (re = re ? Za(re) : null),
                re !== null &&
                  ((je = i(re)), (me = re.tag), re !== je || (me !== 5 && me !== 27 && me !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((me = ro),
              (P = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = co), (P = 'onPointerLeave'), (V = 'onPointerEnter'), (Y = 'pointer')),
              (je = k == null ? Z : Ul(k)),
              (X = re == null ? Z : Ul(re)),
              (Z = new me(P, Y + 'leave', k, n, $)),
              (Z.target = je),
              (Z.relatedTarget = X),
              (P = null),
              Za($) === Q &&
                ((me = new me(V, Y + 'enter', re, n, $)),
                (me.target = X),
                (me.relatedTarget = je),
                (P = me)),
              (je = P),
              k && re)
            )
              t: {
                for (me = Ag, V = k, Y = re, X = 0, P = V; P; P = me(P)) X++;
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
            (k !== null && nm(I, Z, k, me, !1),
              re !== null && je !== null && nm(I, je, re, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Ul(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var _e = po;
          else if (go(Z))
            if (So) _e = jv;
            else {
              _e = Hv;
              var ce = Uv;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && dr(Q.elementType) && (_e = po)
                : (_e = Lv));
          if (_e && (_e = _e(e, Q))) {
            yo(I, _e, n, $);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              fr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Ul(Q) : window), e)) {
          case 'focusin':
            (go(ce) || ce.contentEditable === 'true') && ((el = ce), (Rr = Q), (Ql = null));
            break;
          case 'focusout':
            Ql = Rr = el = null;
            break;
          case 'mousedown':
            Ar = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Ar = !1), Ao(I, n, $));
            break;
          case 'selectionchange':
            if (Yv) break;
          case 'keydown':
          case 'keyup':
            Ao(I, n, $);
        }
        var pe;
        if (br)
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
          Ia
            ? ho(e, n) && (Ce = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Ce = 'onCompositionStart');
        (Ce &&
          (oo &&
            n.locale !== 'ko' &&
            (Ia || Ce !== 'onCompositionStart'
              ? Ce === 'onCompositionEnd' && Ia && (pe = io())
              : ((kn = $), (yr = 'value' in kn ? kn.value : kn.textContent), (Ia = !0))),
          (ce = Ou(Q, Ce)),
          0 < ce.length &&
            ((Ce = new so(Ce, e, null, n, $)),
            I.push({ event: Ce, listeners: ce }),
            pe ? (Ce.data = pe) : ((pe = vo(n)), pe !== null && (Ce.data = pe)))),
          (pe = Ov ? Dv(e, n) : wv(e, n)) &&
            ((Ce = Ou(Q, 'onBeforeInput')),
            0 < Ce.length &&
              ((ce = new so('onBeforeInput', 'beforeinput', null, n, $)),
              I.push({ event: ce, listeners: Ce }),
              (ce.data = pe))),
          Tg(I, e, Q, n, $));
      }
      em(I, t);
    });
  }
  function vi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ou(e, t) {
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
  function Ag(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function nm(e, t, n, a, l) {
    for (var u = t._reactName, S = []; n !== null && n !== a; ) {
      var M = n,
        U = M.alternate,
        Q = M.stateNode;
      if (((M = M.tag), U !== null && U === a)) break;
      ((M !== 5 && M !== 26 && M !== 27) ||
        Q === null ||
        ((U = Q),
        l
          ? ((Q = Hl(n, u)), Q != null && S.unshift(vi(n, Q, U)))
          : l || ((Q = Hl(n, u)), Q != null && S.push(vi(n, Q, U)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var zg = /\r\n?/g,
    _g = /\u0000|\uFFFD/g;
  function am(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        zg,
        `
`
      )
      .replace(_g, '');
  }
  function lm(e, t) {
    return ((t = am(t)), am(e) === t);
  }
  function Le(e, t, n, a, l, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || $a(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && $a(e, '' + a);
        break;
      case 'className':
        Bi(e, 'class', a);
        break;
      case 'tabIndex':
        Bi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Bi(e, n, a);
        break;
      case 'style':
        no(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          Bi(e, 'data', a);
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
        ((a = Hi('' + a)), e.setAttribute(n, a));
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
        ((a = Hi('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = bn);
        break;
      case 'onScroll':
        a != null && be('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && be('scrollend', e);
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
        ((n = Hi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (be('beforetoggle', e), be('toggle', e), Ni(e, 'popover', a));
        break;
      case 'xlinkActuate':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        En(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Ni(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = av.get(n) || n), Ni(e, n, a));
    }
  }
  function Ps(e, t, n, a, l, u) {
    switch (n) {
      case 'style':
        no(e, a, u);
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
          ? $a(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && $a(e, '' + a);
        break;
      case 'onScroll':
        a != null && be('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && be('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = bn);
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
        if (!Jc.hasOwnProperty(n))
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : Ni(e, n, a);
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
        (be('error', e), be('load', e));
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
        be('invalid', e);
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
                  Le(e, t, a, $, n, null);
              }
          }
        Pc(e, u, M, U, Q, S, l, !1);
        return;
      case 'select':
        (be('invalid', e), (a = S = u = null));
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
                Le(e, t, l, M, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!a),
          t != null ? Fa(e, !!a, t, !1) : n != null && Fa(e, !!a, n, !0));
        return;
      case 'textarea':
        (be('invalid', e), (u = l = a = null));
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
                Le(e, t, S, M, n, null);
            }
        eo(e, a, l, u);
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
        (be('beforetoggle', e), be('toggle', e), be('cancel', e), be('close', e));
        break;
      case 'iframe':
      case 'object':
        be('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < hi.length; a++) be(hi[a], e);
        break;
      case 'image':
        (be('error', e), be('load', e));
        break;
      case 'details':
        be('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (be('error', e), be('load', e));
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
        if (dr(t)) {
          for ($ in n)
            n.hasOwnProperty($) && ((a = n[$]), a !== void 0 && Ps(e, t, $, a, n, void 0));
          return;
        }
    }
    for (M in n) n.hasOwnProperty(M) && ((a = n[M]), a != null && Le(e, t, M, a, n, null));
  }
  function Og(e, t, n, a) {
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
                k !== I && Le(e, t, Z, k, a, I);
            }
        }
        or(e, S, M, U, Q, $, u, l);
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
                a.hasOwnProperty(u) || Le(e, t, u, null, a, U);
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
                u !== U && Le(e, t, l, u, a, U);
            }
        ((t = M),
          (n = S),
          (a = k),
          Z != null
            ? Fa(e, !!n, Z, !1)
            : !!a != !!n && (t != null ? Fa(e, !!n, t, !0) : Fa(e, !!n, n ? [] : '', !1)));
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
                Le(e, t, M, null, a, l);
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
        Ic(e, Z, k);
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
        if (dr(t)) {
          for (var je in n)
            ((Z = n[je]),
              n.hasOwnProperty(je) &&
                Z !== void 0 &&
                !a.hasOwnProperty(je) &&
                Ps(e, t, je, void 0, a, Z));
          for ($ in a)
            ((Z = a[$]),
              (k = n[$]),
              !a.hasOwnProperty($) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                Ps(e, t, $, Z, a, k));
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
  function im(e) {
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
  function Dg() {
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
        if (u && M && im(S)) {
          for (S = 0, M = l.responseEnd, a += 1; a < n.length; a++) {
            var U = n[a],
              Q = U.startTime;
            if (Q > M) break;
            var $ = U.transferSize,
              I = U.initiatorType;
            $ && im(I) && ((U = U.responseEnd), (S += $ * (U < M ? 1 : (M - Q) / (U - Q))));
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
  var Is = null,
    ec = null;
  function Du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function um(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function rm(e, t) {
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
  function tc(e, t) {
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
  var nc = null;
  function wg() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === nc ? !1 : ((nc = e), !0)) : ((nc = null), !1);
  }
  var sm = typeof setTimeout == 'function' ? setTimeout : void 0,
    Ng = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    cm = typeof Promise == 'function' ? Promise : void 0,
    Bg =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof cm < 'u'
          ? function (e) {
              return cm.resolve(null).then(e).catch(Ug);
            }
          : sm;
  function Ug(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fa(e) {
    return e === 'head';
  }
  function om(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$' || n === '/&')) {
          if (a === 0) {
            (e.removeChild(l), Al(t));
            return;
          }
          a--;
        } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
        else if (n === 'html') gi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), gi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              M = u.nodeName;
            (u[Bl] ||
              M === 'SCRIPT' ||
              M === 'STYLE' ||
              (M === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && gi(e.ownerDocument.body);
      n = l;
    } while (n);
    Al(t);
  }
  function fm(e, t) {
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
  function ac(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (ac(n), sr(n));
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
  function Hg(e, t, n, a) {
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
      if (((e = $t(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Lg(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = $t(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function dm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = $t(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function lc(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function ic(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function jg(e, t) {
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
  function $t(e) {
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
  var uc = null;
  function mm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return $t(e.nextSibling);
          t--;
        } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function hm(e) {
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
  function vm(e, t, n) {
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
  function gi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    sr(e);
  }
  var Wt = new Map(),
    gm = new Set();
  function wu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var jn = K.d;
  K.d = { f: Gg, r: Yg, D: qg, C: Vg, L: Xg, m: Qg, X: Kg, S: Zg, M: Jg };
  function Gg() {
    var e = jn.f(),
      t = Tu();
    return e || t;
  }
  function Yg(e) {
    var t = Ka(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Nf(t) : jn.r(e);
  }
  var Cl = typeof document > 'u' ? null : document;
  function ym(e, t, n) {
    var a = Cl;
    if (a && typeof t == 'string' && t) {
      var l = Xt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
        gm.has(l) ||
          (gm.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement('link')), yt(t, 'link', e), ot(t), a.head.appendChild(t))));
    }
  }
  function qg(e) {
    (jn.D(e), ym('dns-prefetch', e, null));
  }
  function Vg(e, t) {
    (jn.C(e, t), ym('preconnect', e, t));
  }
  function Xg(e, t, n) {
    jn.L(e, t, n);
    var a = Cl;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + Xt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (l += '[imagesizes="' + Xt(n.imageSizes) + '"]'))
        : (l += '[href="' + Xt(e) + '"]');
      var u = l;
      switch (t) {
        case 'style':
          u = Ml(e);
          break;
        case 'script':
          u = Rl(e);
      }
      Wt.has(u) ||
        ((e = p(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Wt.set(u, e),
        a.querySelector(l) !== null ||
          (t === 'style' && a.querySelector(yi(u))) ||
          (t === 'script' && a.querySelector(pi(u))) ||
          ((t = a.createElement('link')), yt(t, 'link', e), ot(t), a.head.appendChild(t)));
    }
  }
  function Qg(e, t) {
    jn.m(e, t);
    var n = Cl;
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        l = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]',
        u = l;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Rl(e);
      }
      if (
        !Wt.has(u) &&
        ((e = p({ rel: 'modulepreload', href: e }, t)), Wt.set(u, e), n.querySelector(l) === null)
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
  function Zg(e, t, n) {
    jn.S(e, t, n);
    var a = Cl;
    if (a && e) {
      var l = Ja(a).hoistableStyles,
        u = Ml(e);
      t = t || 'default';
      var S = l.get(u);
      if (!S) {
        var M = { loading: 0, preload: null };
        if ((S = a.querySelector(yi(u)))) M.loading = 5;
        else {
          ((e = p({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Wt.get(u)) && rc(e, n));
          var U = (S = a.createElement('link'));
          (ot(U),
            yt(U, 'link', e),
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
            Nu(S, t, a));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: M }), l.set(u, S));
      }
    }
  }
  function Kg(e, t) {
    jn.X(e, t);
    var n = Cl;
    if (n && e) {
      var a = Ja(n).hoistableScripts,
        l = Rl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(pi(l))),
        u ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Wt.get(l)) && sc(e, t),
          (u = n.createElement('script')),
          ot(u),
          yt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function Jg(e, t) {
    jn.M(e, t);
    var n = Cl;
    if (n && e) {
      var a = Ja(n).hoistableScripts,
        l = Rl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(pi(l))),
        u ||
          ((e = p({ src: e, async: !0, type: 'module' }, t)),
          (t = Wt.get(l)) && sc(e, t),
          (u = n.createElement('script')),
          ot(u),
          yt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function pm(e, t, n, a) {
    var l = (l = ie.current) ? wu(l) : null;
    if (!l) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ml(n.href)),
            (n = Ja(l).hoistableStyles),
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
          e = Ml(n.href);
          var u = Ja(l).hoistableStyles,
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
              Wt.has(e) ||
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
                Wt.set(e, n),
                u || kg(l, e, n, S.state))),
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
            ? ((t = Rl(n)),
              (n = Ja(l).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function Ml(e) {
    return 'href="' + Xt(e) + '"';
  }
  function yi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Sm(e) {
    return p({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function kg(e, t, n, a) {
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
  function Rl(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function pi(e) {
    return 'script[async]' + e;
  }
  function xm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + Xt(n.href) + '"]');
          if (a) return ((t.instance = a), ot(a), a);
          var l = p({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            ot(a),
            yt(a, 'style', l),
            Nu(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = Ml(n.href);
          var u = e.querySelector(yi(l));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ot(u), u);
          ((a = Sm(n)),
            (l = Wt.get(l)) && rc(a, l),
            (u = (e.ownerDocument || e).createElement('link')),
            ot(u));
          var S = u;
          return (
            (S._p = new Promise(function (M, U) {
              ((S.onload = M), (S.onerror = U));
            })),
            yt(u, 'link', a),
            (t.state.loading |= 4),
            Nu(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Rl(n.src)),
            (l = e.querySelector(pi(u)))
              ? ((t.instance = l), ot(l), l)
              : ((a = n),
                (l = Wt.get(u)) && ((a = p({}, n)), sc(a, l)),
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
        ((a = t.instance), (t.state.loading |= 4), Nu(a, n.precedence, e));
    return t.instance;
  }
  function Nu(e, t, n) {
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
  function rc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function sc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Bu = null;
  function Em(e, t, n) {
    if (Bu === null) {
      var a = new Map(),
        l = (Bu = new Map());
      l.set(n, a);
    } else ((l = Bu), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (
        !(u[Bl] || u[mt] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function bm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Fg(e, t, n) {
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
  function Tm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function $g(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Ml(a.href),
          u = t.querySelector(yi(l));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Uu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ot(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Sm(a)),
          (l = Wt.get(l)) && rc(a, l),
          (u = u.createElement('link')),
          ot(u));
        var S = u;
        ((S._p = new Promise(function (M, U) {
          ((S.onload = M), (S.onerror = U));
        })),
          yt(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Uu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var cc = 0;
  function Wg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Lu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Lu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && cc === 0 && (cc = 62500 * Dg());
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Lu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > cc ? 50 : 800) + t
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
  function Uu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Lu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Hu = null;
  function Lu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Hu = new Map()), t.forEach(Pg, e), (Hu = null), Uu.call(e)));
  }
  function Pg(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Hu.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Hu.set(e, n));
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
        (a = Uu.bind(this)),
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
  function Ig(e, t, n, a, l, u, S, M, U) {
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
      (this.expirationTimes = Je(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Je(0)),
      (this.hiddenUpdates = Je(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function Cm(e, t, n, a, l, u, S, M, U, Q, $, I) {
    return (
      (e = new Ig(e, t, n, S, U, Q, $, I, M)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Bt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Vr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Kr(u),
      e
    );
  }
  function Mm(e) {
    return e ? ((e = al), e) : al;
  }
  function Rm(e, t, n, a, l, u) {
    ((l = Mm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = ea(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = ta(e, a, t)),
      n !== null && (_t(n, e, t), Wl(n, e, t)));
  }
  function Am(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oc(e, t) {
    (Am(e, t), (e = e.alternate) && Am(e, t));
  }
  function zm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ra(e, 67108864);
      (t !== null && _t(t, e, 67108864), oc(e, 67108864));
    }
  }
  function _m(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gt();
      t = qt(t);
      var n = Ra(e, t);
      (n !== null && _t(n, e, t), oc(e, t));
    }
  }
  var ju = !0;
  function e0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 2), fc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function t0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 8), fc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function fc(e, t, n, a) {
    if (ju) {
      var l = dc(a);
      if (l === null) (Ws(e, t, a, Gu, n), Dm(e, a));
      else if (a0(l, e, t, n, a)) a.stopPropagation();
      else if ((Dm(e, a), t & 4 && -1 < n0.indexOf(e))) {
        for (; l !== null; ) {
          var u = Ka(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Se(u.pendingLanes);
                  if (S !== 0) {
                    var M = u;
                    for (M.pendingLanes |= 2, M.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - xt(S));
                      ((M.entanglements[1] |= U), (S &= ~U));
                    }
                    (vn(u), (De & 6) === 0 && ((Eu = st() + 500), mi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((M = Ra(u, 2)), M !== null && _t(M, u, 2), Tu(), oc(u, 2));
            }
          if (((u = dc(a)), u === null && Ws(e, t, a, Gu, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Ws(e, t, a, null, n);
    }
  }
  function dc(e) {
    return ((e = hr(e)), mc(e));
  }
  var Gu = null;
  function mc(e) {
    if (((Gu = null), (e = Za(e)), e !== null)) {
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
    return ((Gu = e), null);
  }
  function Om(e) {
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
        switch (Ot()) {
          case Dt:
            return 2;
          case xa:
            return 8;
          case yn:
          case pn:
            return 32;
          case Sn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hc = !1,
    da = null,
    ma = null,
    ha = null,
    xi = new Map(),
    Ei = new Map(),
    va = [],
    n0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Dm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        da = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ma = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ha = null;
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
        t !== null && ((t = Ka(t)), t !== null && zm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function a0(e, t, n, a, l) {
    switch (t) {
      case 'focusin':
        return ((da = bi(da, e, t, n, a, l)), !0);
      case 'dragenter':
        return ((ma = bi(ma, e, t, n, a, l)), !0);
      case 'mouseover':
        return ((ha = bi(ha, e, t, n, a, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (xi.set(u, bi(xi.get(u) || null, e, t, n, a, l)), !0);
      case 'gotpointercapture':
        return ((u = l.pointerId), Ei.set(u, bi(Ei.get(u) || null, e, t, n, a, l)), !0);
    }
    return !1;
  }
  function wm(e) {
    var t = Za(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Xa(e.priority, function () {
                _m(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Xa(e.priority, function () {
                _m(n);
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
  function Yu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = dc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((mr = a), n.target.dispatchEvent(a), (mr = null));
      } else return ((t = Ka(n)), t !== null && zm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Nm(e, t, n) {
    Yu(e) && n.delete(t);
  }
  function l0() {
    ((hc = !1),
      da !== null && Yu(da) && (da = null),
      ma !== null && Yu(ma) && (ma = null),
      ha !== null && Yu(ha) && (ha = null),
      xi.forEach(Nm),
      Ei.forEach(Nm));
  }
  function qu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      hc || ((hc = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, l0)));
  }
  var Vu = null;
  function Bm(e) {
    Vu !== e &&
      ((Vu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Vu === e && (Vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != 'function') {
            if (mc(a || n) === null) continue;
            break;
          }
          var u = Ka(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ds(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Al(e) {
    function t(U) {
      return qu(U, e);
    }
    (da !== null && qu(da, e),
      ma !== null && qu(ma, e),
      ha !== null && qu(ha, e),
      xi.forEach(t),
      Ei.forEach(t));
    for (var n = 0; n < va.length; n++) {
      var a = va[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < va.length && ((n = va[0]), n.blockedOn === null); )
      (wm(n), n.blockedOn === null && va.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          S = l[Tt] || null;
        if (typeof u == 'function') S || Bm(n);
        else if (S) {
          var M = null;
          if (u && u.hasAttribute('formAction')) {
            if (((l = u), (S = u[Tt] || null))) M = S.formAction;
            else if (mc(l) !== null) continue;
          } else M = S.action;
          (typeof M == 'function' ? (n[a + 1] = M) : (n.splice(a, 3), (a -= 3)), Bm(n));
        }
      }
  }
  function Um() {
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
  function vc(e) {
    this._internalRoot = e;
  }
  ((Xu.prototype.render = vc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        a = Gt();
      Rm(n, a, e, t, null, null);
    }),
    (Xu.prototype.unmount = vc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Rm(e.current, 2, null, e, null, null), Tu(), (t[Qa] = null));
        }
      }));
  function Xu(e) {
    this._internalRoot = e;
  }
  Xu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Nl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < va.length && t !== 0 && t < va[n].priority; n++);
      (va.splice(n, 0, e), n === 0 && wm(e));
    }
  };
  var Hm = b.version;
  if (Hm !== '19.2.5') throw Error(x(527, Hm, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var i0 = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: q,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qu.isDisabled && Qu.supportsFiber)
      try {
        ((Ea = Qu.inject(i0)), (St = Qu));
      } catch {}
  }
  return (
    (Ci.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        a = '',
        l = Xf,
        u = Qf,
        S = Zf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = Cm(e, 1, !1, null, null, n, a, null, l, u, S, Um)),
        (e[Qa] = t.current),
        $s(e),
        new vc(t)
      );
    }),
    (Ci.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var a = !1,
        l = '',
        u = Xf,
        S = Qf,
        M = Zf,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (M = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = Cm(e, 1, !0, t, n ?? null, a, l, U, u, S, M, Um)),
        (t.context = Mm(null)),
        (n = t.current),
        (a = Gt()),
        (a = qt(a)),
        (l = ea(a)),
        (l.callback = null),
        ta(n, l, a),
        (n = a),
        (t.current.lanes = n),
        Ie(t, n),
        vn(t),
        (e[Qa] = t.current),
        $s(e),
        new Xu(t)
      );
    }),
    (Ci.version = '19.2.5'),
    Ci
  );
}
var Jm;
function g0() {
  if (Jm) return yc.exports;
  Jm = 1;
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
  return (s(), (yc.exports = v0()), yc.exports);
}
var y0 = g0(),
  N = Bc();
/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var km = 'popstate';
function Fm(s) {
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
function p0(s = {}) {
  function b(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: c } = i || x.location;
    return Oc(
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
    return typeof h == 'string' ? h : _i(h);
  }
  return x0(b, T, null, s);
}
function Qe(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function gn(s, b) {
  if (!s) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function S0() {
  return Math.random().toString(36).substring(2, 10);
}
function $m(s, b) {
  return {
    usr: s.state,
    key: s.key,
    idx: b,
    masked: s.unstable_mask ? { pathname: s.pathname, search: s.search, hash: s.hash } : void 0,
  };
}
function Oc(s, b, T = null, x, h) {
  return {
    pathname: typeof s == 'string' ? s : s.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Ol(b) : b),
    state: T,
    key: (b && b.key) || x || S0(),
    unstable_mask: h,
  };
}
function _i({ pathname: s = '/', search: b = '', hash: T = '' }) {
  return (
    b && b !== '?' && (s += b.charAt(0) === '?' ? b : '?' + b),
    T && T !== '#' && (s += T.charAt(0) === '#' ? T : '#' + T),
    s
  );
}
function Ol(s) {
  let b = {};
  if (s) {
    let T = s.indexOf('#');
    T >= 0 && ((b.hash = s.substring(T)), (s = s.substring(0, T)));
    let x = s.indexOf('?');
    (x >= 0 && ((b.search = s.substring(x)), (s = s.substring(0, x))), s && (b.pathname = s));
  }
  return b;
}
function x0(s, b, T, x = {}) {
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
    let O = Fm(E) ? E : Oc(v.location, E, R);
    m = o() + 1;
    let w = $m(O, m),
      L = v.createHref(O.unstable_mask || O);
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
    let O = Fm(E) ? E : Oc(v.location, E, R);
    m = o();
    let w = $m(O, m),
      L = v.createHref(O.unstable_mask || O);
    (d.replaceState(w, '', L), i && c && c({ action: f, location: v.location, delta: 0 }));
  }
  function y(E) {
    return E0(E);
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
        h.addEventListener(km, p),
        (c = E),
        () => {
          (h.removeEventListener(km, p), (c = null));
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
function E0(s, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Qe(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof s == 'string' ? s : _i(s);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function dh(s, b, T = '/') {
  return b0(s, b, T, !1);
}
function b0(s, b, T, x) {
  let h = typeof b == 'string' ? Ol(b) : b,
    i = Xn(h.pathname || '/', T);
  if (i == null) return null;
  let d = mh(s);
  T0(d);
  let f = null;
  for (let c = 0; f == null && c < d.length; ++c) {
    let m = B0(i);
    f = w0(d[c], m, x);
  }
  return f;
}
function mh(s, b = [], T = [], x = '', h = !1) {
  let i = (d, f, c = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && c) return;
      (Qe(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let p = rn([x, o.relativePath]),
      g = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (Qe(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      mh(d.children, b, g, p, c)),
      !(d.path == null && !d.index) && b.push({ path: p, score: O0(p, d.index), routesMeta: g }));
  };
  return (
    s.forEach((d, f) => {
      var c;
      if (d.path === '' || !((c = d.path) != null && c.includes('?'))) i(d, f);
      else for (let m of hh(d.path)) i(d, f, !0, m);
    }),
    b
  );
}
function hh(s) {
  let b = s.split('/');
  if (b.length === 0) return [];
  let [T, ...x] = b,
    h = T.endsWith('?'),
    i = T.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = hh(x.join('/')),
    f = [];
  return (
    f.push(...d.map((c) => (c === '' ? i : [i, c].join('/')))),
    h && f.push(...d),
    f.map((c) => (s.startsWith('/') && c === '' ? '/' : c))
  );
}
function T0(s) {
  s.sort((b, T) =>
    b.score !== T.score
      ? T.score - b.score
      : D0(
          b.routesMeta.map((x) => x.childrenIndex),
          T.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var C0 = /^:[\w-]+$/,
  M0 = 3,
  R0 = 2,
  A0 = 1,
  z0 = 10,
  _0 = -2,
  Wm = (s) => s === '*';
function O0(s, b) {
  let T = s.split('/'),
    x = T.length;
  return (
    T.some(Wm) && (x += _0),
    b && (x += R0),
    T.filter((h) => !Wm(h)).reduce((h, i) => h + (C0.test(i) ? M0 : i === '' ? A0 : z0), x)
  );
}
function D0(s, b) {
  return s.length === b.length && s.slice(0, -1).every((x, h) => x === b[h])
    ? s[s.length - 1] - b[b.length - 1]
    : 0;
}
function w0(s, b, T = !1) {
  let { routesMeta: x } = s,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let c = x[f],
      m = f === x.length - 1,
      o = i === '/' ? b : b.slice(i.length) || '/',
      p = $u({ path: c.relativePath, caseSensitive: c.caseSensitive, end: m }, o),
      g = c.route;
    if (
      (!p &&
        m &&
        T &&
        !x[x.length - 1].route.index &&
        (p = $u({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, o)),
      !p)
    )
      return null;
    (Object.assign(h, p.params),
      d.push({
        params: h,
        pathname: rn([i, p.pathname]),
        pathnameBase: j0(rn([i, p.pathnameBase])),
        route: g,
      }),
      p.pathnameBase !== '/' && (i = rn([i, p.pathnameBase])));
  }
  return d;
}
function $u(s, b) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [T, x] = N0(s.path, s.caseSensitive, s.end),
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
function N0(s, b = !1, T = !0) {
  gn(
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
function B0(s) {
  try {
    return s
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      gn(
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
var U0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function H0(s, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof s == 'string' ? Ol(s) : s,
    i;
  return (
    T ? ((T = gh(T)), T.startsWith('/') ? (i = Pm(T.substring(1), '/')) : (i = Pm(T, b))) : (i = b),
    { pathname: i, search: G0(x), hash: Y0(h) }
  );
}
function Pm(s, b) {
  let T = Wu(b).split('/');
  return (
    s.split('/').forEach((h) => {
      h === '..' ? T.length > 1 && T.pop() : h !== '.' && T.push(h);
    }),
    T.length > 1 ? T.join('/') : '/'
  );
}
function bc(s, b, T, x) {
  return `Cannot include a '${s}' character in a manually specified \`to.${b}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function L0(s) {
  return s.filter((b, T) => T === 0 || (b.route.path && b.route.path.length > 0));
}
function vh(s) {
  let b = L0(s);
  return b.map((T, x) => (x === b.length - 1 ? T.pathname : T.pathnameBase));
}
function Uc(s, b, T, x = !1) {
  let h;
  typeof s == 'string'
    ? (h = Ol(s))
    : ((h = { ...s }),
      Qe(!h.pathname || !h.pathname.includes('?'), bc('?', 'pathname', 'search', h)),
      Qe(!h.pathname || !h.pathname.includes('#'), bc('#', 'pathname', 'hash', h)),
      Qe(!h.search || !h.search.includes('#'), bc('#', 'search', 'hash', h)));
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
  let c = H0(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && T.endsWith('/');
  return (!c.pathname.endsWith('/') && (m || o) && (c.pathname += '/'), c);
}
var gh = (s) => s.replace(/\/\/+/g, '/'),
  rn = (s) => gh(s.join('/')),
  Wu = (s) => s.replace(/\/+$/, ''),
  j0 = (s) => Wu(s).replace(/^\/*/, '/'),
  G0 = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  Y0 = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s),
  q0 = class {
    constructor(s, b, T, x = !1) {
      ((this.status = s),
        (this.statusText = b || ''),
        (this.internal = x),
        T instanceof Error ? ((this.data = T.toString()), (this.error = T)) : (this.data = T));
    }
  };
function V0(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
function X0(s) {
  let b = s.map((T) => T.route.path).filter(Boolean);
  return rn(b) || '/';
}
var yh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function ph(s, b) {
  let T = s;
  if (typeof T != 'string' || !U0.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (yh)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = Xn(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      gn(
        !1,
        `<Link to="${T}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: T };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Sh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Sh);
var Q0 = ['GET', ...Sh];
new Set(Q0);
var Dl = N.createContext(null);
Dl.displayName = 'DataRouter';
var Pu = N.createContext(null);
Pu.displayName = 'DataRouterState';
var xh = N.createContext(!1);
function Z0() {
  return N.useContext(xh);
}
var Eh = N.createContext({ isTransitioning: !1 });
Eh.displayName = 'ViewTransition';
var K0 = N.createContext(new Map());
K0.displayName = 'Fetchers';
var J0 = N.createContext(null);
J0.displayName = 'Await';
var It = N.createContext(null);
It.displayName = 'Navigation';
var Oi = N.createContext(null);
Oi.displayName = 'Location';
var Qn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qn.displayName = 'Route';
var Hc = N.createContext(null);
Hc.displayName = 'RouteError';
var bh = 'REACT_ROUTER_ERROR',
  k0 = 'REDIRECT',
  F0 = 'ROUTE_ERROR_RESPONSE';
function $0(s) {
  if (s.startsWith(`${bh}:${k0}:{`))
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
function W0(s) {
  if (s.startsWith(`${bh}:${F0}:{`))
    try {
      let b = JSON.parse(s.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new q0(b.status, b.statusText, b.data);
    } catch {}
}
function P0(s, { relative: b } = {}) {
  Qe(Di(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = N.useContext(It),
    { hash: h, pathname: i, search: d } = wi(s, { relative: b }),
    f = i;
  return (
    T !== '/' && (f = i === '/' ? T : rn([T, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function Di() {
  return N.useContext(Oi) != null;
}
function Zn() {
  return (
    Qe(Di(), 'useLocation() may be used only in the context of a <Router> component.'),
    N.useContext(Oi).location
  );
}
var Th =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ch(s) {
  N.useContext(It).static || N.useLayoutEffect(s);
}
function I0() {
  let { isDataRoute: s } = N.useContext(Qn);
  return s ? dy() : ey();
}
function ey() {
  Qe(Di(), 'useNavigate() may be used only in the context of a <Router> component.');
  let s = N.useContext(Dl),
    { basename: b, navigator: T } = N.useContext(It),
    { matches: x } = N.useContext(Qn),
    { pathname: h } = Zn(),
    i = JSON.stringify(vh(x)),
    d = N.useRef(!1);
  return (
    Ch(() => {
      d.current = !0;
    }),
    N.useCallback(
      (c, m = {}) => {
        if ((gn(d.current, Th), !d.current)) return;
        if (typeof c == 'number') {
          T.go(c);
          return;
        }
        let o = Uc(c, JSON.parse(i), h, m.relative === 'path');
        (s == null && b !== '/' && (o.pathname = o.pathname === '/' ? b : rn([b, o.pathname])),
          (m.replace ? T.replace : T.push)(o, m.state, m));
      },
      [b, T, i, h, s]
    )
  );
}
N.createContext(null);
function wi(s, { relative: b } = {}) {
  let { matches: T } = N.useContext(Qn),
    { pathname: x } = Zn(),
    h = JSON.stringify(vh(T));
  return N.useMemo(() => Uc(s, JSON.parse(h), x, b === 'path'), [s, h, x, b]);
}
function ty(s, b) {
  return Mh(s, b);
}
function Mh(s, b, T) {
  var E;
  Qe(Di(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = N.useContext(It),
    { matches: h } = N.useContext(Qn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    c = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let R = (m && m.path) || '';
    Ah(
      f,
      !m || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let o = Zn(),
    p;
  if (b) {
    let R = typeof b == 'string' ? Ol(b) : b;
    (Qe(
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
  let y = dh(s, { pathname: r });
  (gn(m || y != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `),
    gn(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = uy(
    y &&
      y.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, d, R.params),
          pathname: rn([
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
              : rn([
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
        Oi.Provider,
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
function ny() {
  let s = fy(),
    b = V0(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s),
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
var ay = N.createElement(ny, null),
  Rh = class extends N.Component {
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
        const T = W0(s.digest);
        T && (s = T);
      }
      let b =
        s !== void 0
          ? N.createElement(
              Qn.Provider,
              { value: this.props.routeContext },
              N.createElement(Hc.Provider, { value: s, children: this.props.component })
            )
          : this.props.children;
      return this.context ? N.createElement(ly, { error: s }, b) : b;
    }
  };
Rh.contextType = xh;
var Tc = new WeakMap();
function ly({ children: s, error: b }) {
  let { basename: T } = N.useContext(It);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = $0(b.digest);
    if (x) {
      let h = Tc.get(b);
      if (h) throw h;
      let i = ph(x.location, T);
      if (yh && !Tc.get(b))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (Tc.set(b, d), d);
        }
      return N.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return s;
}
function iy({ routeContext: s, match: b, children: T }) {
  let x = N.useContext(Dl);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    N.createElement(Qn.Provider, { value: s }, T)
  );
}
function uy(s, b = [], T) {
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
    (Qe(
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
              unstable_pattern: X0(x.matches),
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
      (v = p.route.errorElement || ay),
      d &&
        (f < 0 && g === 0
          ? (Ah(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (y = !0),
            (E = null))
          : f === g && ((y = !0), (E = p.route.hydrateFallbackElement || null))));
    let R = b.concat(h.slice(0, g + 1)),
      O = () => {
        let w;
        return (
          r
            ? (w = v)
            : y
              ? (w = E)
              : p.route.Component
                ? (w = N.createElement(p.route.Component, null))
                : p.route.element
                  ? (w = p.route.element)
                  : (w = o),
          N.createElement(iy, {
            match: p,
            routeContext: { outlet: o, matches: R, isDataRoute: x != null },
            children: w,
          })
        );
      };
    return x && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? N.createElement(Rh, {
          location: x.location,
          revalidation: x.revalidation,
          component: v,
          error: r,
          children: O(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: m,
        })
      : O();
  }, null);
}
function Lc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ry(s) {
  let b = N.useContext(Dl);
  return (Qe(b, Lc(s)), b);
}
function sy(s) {
  let b = N.useContext(Pu);
  return (Qe(b, Lc(s)), b);
}
function cy(s) {
  let b = N.useContext(Qn);
  return (Qe(b, Lc(s)), b);
}
function jc(s) {
  let b = cy(s),
    T = b.matches[b.matches.length - 1];
  return (Qe(T.route.id, `${s} can only be used on routes that contain a unique "id"`), T.route.id);
}
function oy() {
  return jc('useRouteId');
}
function fy() {
  var x;
  let s = N.useContext(Hc),
    b = sy('useRouteError'),
    T = jc('useRouteError');
  return s !== void 0 ? s : (x = b.errors) == null ? void 0 : x[T];
}
function dy() {
  let { router: s } = ry('useNavigate'),
    b = jc('useNavigate'),
    T = N.useRef(!1);
  return (
    Ch(() => {
      T.current = !0;
    }),
    N.useCallback(
      async (h, i = {}) => {
        (gn(T.current, Th),
          T.current &&
            (typeof h == 'number'
              ? await s.navigate(h)
              : await s.navigate(h, { fromRouteId: b, ...i })));
      },
      [s, b]
    )
  );
}
var Im = {};
function Ah(s, b, T) {
  !b && !Im[s] && ((Im[s] = !0), gn(!1, T));
}
N.memo(my);
function my({ routes: s, future: b, state: T, isStatic: x, onError: h }) {
  return Mh(s, void 0, { state: T, isStatic: x, onError: h });
}
function Dc(s) {
  Qe(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function hy({
  basename: s = '/',
  children: b = null,
  location: T,
  navigationType: x = 'POP',
  navigator: h,
  static: i = !1,
  unstable_useTransitions: d,
}) {
  Qe(
    !Di(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let f = s.replace(/^\/*/, '/'),
    c = N.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = Ol(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: p = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: y,
    } = T,
    v = N.useMemo(() => {
      let E = Xn(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: p, state: g, key: r, unstable_mask: y },
            navigationType: x,
          };
    }, [f, m, o, p, g, r, x, y]);
  return (
    gn(
      v != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : N.createElement(
          It.Provider,
          { value: c },
          N.createElement(Oi.Provider, { children: b, value: v })
        )
  );
}
function vy({ children: s, location: b }) {
  return ty(wc(s), b);
}
function wc(s, b = []) {
  let T = [];
  return (
    N.Children.forEach(s, (x, h) => {
      if (!N.isValidElement(x)) return;
      let i = [...b, h];
      if (x.type === N.Fragment) {
        T.push.apply(T, wc(x.props.children, i));
        return;
      }
      (Qe(
        x.type === Dc,
        `[${typeof x.type == 'string' ? x.type : x.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Qe(!x.props.index || !x.props.children, 'An index route cannot have child routes.'));
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
      (x.props.children && (d.children = wc(x.props.children, i)), T.push(d));
    }),
    T
  );
}
var Ju = 'get',
  ku = 'application/x-www-form-urlencoded';
function Iu(s) {
  return typeof HTMLElement < 'u' && s instanceof HTMLElement;
}
function gy(s) {
  return Iu(s) && s.tagName.toLowerCase() === 'button';
}
function yy(s) {
  return Iu(s) && s.tagName.toLowerCase() === 'form';
}
function py(s) {
  return Iu(s) && s.tagName.toLowerCase() === 'input';
}
function Sy(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function xy(s, b) {
  return s.button === 0 && (!b || b === '_self') && !Sy(s);
}
var Zu = null;
function Ey() {
  if (Zu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Zu = !1));
    } catch {
      Zu = !0;
    }
  return Zu;
}
var by = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function Cc(s) {
  return s != null && !by.has(s)
    ? (gn(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ku}"`
      ),
      null)
    : s;
}
function Ty(s, b) {
  let T, x, h, i, d;
  if (yy(s)) {
    let f = s.getAttribute('action');
    ((x = f ? Xn(f, b) : null),
      (T = s.getAttribute('method') || Ju),
      (h = Cc(s.getAttribute('enctype')) || ku),
      (i = new FormData(s)));
  } else if (gy(s) || (py(s) && (s.type === 'submit' || s.type === 'image'))) {
    let f = s.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = s.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = c ? Xn(c, b) : null),
      (T = s.getAttribute('formmethod') || f.getAttribute('method') || Ju),
      (h = Cc(s.getAttribute('formenctype')) || Cc(f.getAttribute('enctype')) || ku),
      (i = new FormData(f, s)),
      !Ey())
    ) {
      let { name: m, type: o, value: p } = s;
      if (o === 'image') {
        let g = m ? `${m}.` : '';
        (i.append(`${g}x`, '0'), i.append(`${g}y`, '0'));
      } else m && i.append(m, p);
    }
  } else {
    if (Iu(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((T = Ju), (x = null), (h = ku), (d = s));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: T.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Gc(s, b) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(b);
}
function zh(s, b, T, x) {
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
          ? (h.pathname = `${Wu(b)}/_root.${x}`)
          : (h.pathname = `${Wu(h.pathname)}.${x}`),
    h
  );
}
async function Cy(s, b) {
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
function My(s) {
  return s == null
    ? !1
    : s.href == null
      ? s.rel === 'preload' && typeof s.imageSrcSet == 'string' && typeof s.imageSizes == 'string'
      : typeof s.rel == 'string' && typeof s.href == 'string';
}
async function Ry(s, b, T) {
  let x = await Promise.all(
    s.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let d = await Cy(i, T);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Oy(
    x
      .flat(1)
      .filter(My)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function eh(s, b, T, x, h, i) {
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
function Ay(s, b, { includeHydrateFallback: T } = {}) {
  return zy(
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
function zy(s) {
  return [...new Set(s)];
}
function _y(s) {
  let b = {},
    T = Object.keys(s).sort();
  for (let x of T) b[x] = s[x];
  return b;
}
function Oy(s, b) {
  let T = new Set();
  return (
    new Set(b),
    s.reduce((x, h) => {
      let i = JSON.stringify(_y(h));
      return (T.has(i) || (T.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Yc() {
  let s = N.useContext(Dl);
  return (Gc(s, 'You must render this element inside a <DataRouterContext.Provider> element'), s);
}
function Dy() {
  let s = N.useContext(Pu);
  return (
    Gc(s, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    s
  );
}
var qc = N.createContext(void 0);
qc.displayName = 'FrameworkContext';
function Vc() {
  let s = N.useContext(qc);
  return (Gc(s, 'You must render this element inside a <HydratedRouter> element'), s);
}
function wy(s, b) {
  let T = N.useContext(qc),
    [x, h] = N.useState(!1),
    [i, d] = N.useState(!1),
    { onFocus: f, onBlur: c, onMouseEnter: m, onMouseLeave: o, onTouchStart: p } = b,
    g = N.useRef(null);
  (N.useEffect(() => {
    if ((s === 'render' && d(!0), s === 'viewport')) {
      let v = (R) => {
          R.forEach((O) => {
            d(O.isIntersecting);
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
            onFocus: Mi(f, r),
            onBlur: Mi(c, y),
            onMouseEnter: Mi(m, r),
            onMouseLeave: Mi(o, y),
            onTouchStart: Mi(p, r),
          },
        ]
    : [!1, g, {}];
}
function Mi(s, b) {
  return (T) => {
    (s && s(T), T.defaultPrevented || b(T));
  };
}
function Ny({ page: s, ...b }) {
  let T = Z0(),
    { router: x } = Yc(),
    h = N.useMemo(() => dh(x.routes, s, x.basename), [x.routes, s, x.basename]);
  return h
    ? T
      ? N.createElement(Uy, { page: s, matches: h, ...b })
      : N.createElement(Hy, { page: s, matches: h, ...b })
    : null;
}
function By(s) {
  let { manifest: b, routeModules: T } = Vc(),
    [x, h] = N.useState([]);
  return (
    N.useEffect(() => {
      let i = !1;
      return (
        Ry(s, b, T).then((d) => {
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
function Uy({ page: s, matches: b, ...T }) {
  let x = Zn(),
    { future: h } = Vc(),
    { basename: i } = Yc(),
    d = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let f = zh(s, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
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
function Hy({ page: s, matches: b, ...T }) {
  let x = Zn(),
    { future: h, manifest: i, routeModules: d } = Vc(),
    { basename: f } = Yc(),
    { loaderData: c, matches: m } = Dy(),
    o = N.useMemo(() => eh(s, b, m, i, x, 'data'), [s, b, m, i, x]),
    p = N.useMemo(() => eh(s, b, m, i, x, 'assets'), [s, b, m, i, x]),
    g = N.useMemo(() => {
      if (s === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (b.forEach((O) => {
          var L;
          let w = i.routes[O.route.id];
          !w ||
            !w.hasLoader ||
            ((!o.some((C) => C.route.id === O.route.id) &&
              O.route.id in c &&
              (L = d[O.route.id]) != null &&
              L.shouldRevalidate) ||
            w.hasClientLoader
              ? (E = !0)
              : v.add(O.route.id));
        }),
        v.size === 0)
      )
        return [];
      let R = zh(s, f, h.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        E &&
          v.size > 0 &&
          R.searchParams.set(
            '_routes',
            b
              .filter((O) => v.has(O.route.id))
              .map((O) => O.route.id)
              .join(',')
          ),
        [R.pathname + R.search]
      );
    }, [f, h.unstable_trailingSlashAwareDataRequests, c, x, i, o, b, s, d]),
    r = N.useMemo(() => Ay(p, i), [p, i]),
    y = By(p);
  return N.createElement(
    N.Fragment,
    null,
    g.map((v) => N.createElement('link', { key: v, rel: 'prefetch', as: 'fetch', href: v, ...T })),
    r.map((v) => N.createElement('link', { key: v, rel: 'modulepreload', href: v, ...T })),
    y.map(({ key: v, link: E }) =>
      N.createElement('link', {
        key: v,
        nonce: T.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? T.crossOrigin,
      })
    )
  );
}
function Ly(...s) {
  return (b) => {
    s.forEach((T) => {
      typeof T == 'function' ? T(b) : T != null && (T.current = b);
    });
  };
}
var jy =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  jy && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Gy({ basename: s, children: b, unstable_useTransitions: T, window: x }) {
  let h = N.useRef();
  h.current == null && (h.current = p0({ window: x, v5Compat: !0 }));
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
    N.createElement(hy, {
      basename: s,
      children: b,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: T,
    })
  );
}
var _h = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Oh = N.forwardRef(function (
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
    let { basename: E, navigator: R, unstable_useTransitions: O } = N.useContext(It),
      w = typeof o == 'string' && _h.test(o),
      L = ph(o, E);
    o = L.to;
    let C = P0(o, { relative: h }),
      z = Zn(),
      _ = null;
    if (f) {
      let ee = Uc(f, [], z.unstable_mask ? z.unstable_mask.pathname : '/', !0);
      (E !== '/' && (ee.pathname = ee.pathname === '/' ? E : rn([E, ee.pathname])),
        (_ = R.createHref(ee)));
    }
    let [A, B, D] = wy(x, y),
      H = Xy(o, {
        replace: d,
        unstable_mask: f,
        state: c,
        target: m,
        preventScrollReset: p,
        relative: h,
        viewTransition: g,
        unstable_defaultShouldRevalidate: r,
        unstable_useTransitions: O,
      });
    function G(ee) {
      (b && b(ee), ee.defaultPrevented || H(ee));
    }
    let J = !(L.isExternal || i),
      te = N.createElement('a', {
        ...y,
        ...D,
        href: (J ? _ : void 0) || L.absoluteURL || C,
        onClick: J ? G : b,
        ref: Ly(v, B),
        target: m,
        'data-discover': !w && T === 'render' ? 'true' : void 0,
      });
    return A && !w ? N.createElement(N.Fragment, null, te, N.createElement(Ny, { page: C })) : te;
  });
Oh.displayName = 'Link';
var Yy = N.forwardRef(function (
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
  let p = wi(d, { relative: m.relative }),
    g = Zn(),
    r = N.useContext(Pu),
    { navigator: y, basename: v } = N.useContext(It),
    E = r != null && ky(p) && f === !0,
    R = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname,
    O = g.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((O = O.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && v && (w = Xn(w, v) || w));
  const L = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let C = O === R || (!h && O.startsWith(R) && O.charAt(L) === '/'),
    z = w != null && (w === R || (!h && w.startsWith(R) && w.charAt(R.length) === '/')),
    _ = { isActive: C, isPending: z, isTransitioning: E },
    A = C ? b : void 0,
    B;
  typeof x == 'function'
    ? (B = x(_))
    : (B = [x, C ? 'active' : null, z ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let D = typeof i == 'function' ? i(_) : i;
  return N.createElement(
    Oh,
    { ...m, 'aria-current': A, className: B, ref: o, style: D, to: d, viewTransition: f },
    typeof c == 'function' ? c(_) : c
  );
});
Yy.displayName = 'NavLink';
var qy = N.forwardRef(
  (
    {
      discover: s = 'render',
      fetcherKey: b,
      navigate: T,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = Ju,
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
    let { unstable_useTransitions: v } = N.useContext(It),
      E = Ky(),
      R = Jy(f, { relative: m }),
      O = d.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof f == 'string' && _h.test(f),
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
        v && T !== !1 ? N.startTransition(() => A()) : A();
      };
    return N.createElement('form', {
      ref: y,
      method: O,
      action: R,
      onSubmit: x ? c : L,
      ...r,
      'data-discover': !w && s === 'render' ? 'true' : void 0,
    });
  }
);
qy.displayName = 'Form';
function Vy(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dh(s) {
  let b = N.useContext(Dl);
  return (Qe(b, Vy(s)), b);
}
function Xy(
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
  let o = I0(),
    p = Zn(),
    g = wi(s, { relative: d });
  return N.useCallback(
    (r) => {
      if (xy(r, b)) {
        r.preventDefault();
        let y = T !== void 0 ? T : _i(p) === _i(g),
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
        m ? N.startTransition(() => v()) : v();
      }
    },
    [p, o, g, T, x, h, b, s, i, d, f, c, m]
  );
}
var Qy = 0,
  Zy = () => `__${String(++Qy)}__`;
function Ky() {
  let { router: s } = Dh('useSubmit'),
    { basename: b } = N.useContext(It),
    T = oy(),
    x = s.fetch,
    h = s.navigate;
  return N.useCallback(
    async (i, d = {}) => {
      let { action: f, method: c, encType: m, formData: o, body: p } = Ty(i, b);
      if (d.navigate === !1) {
        let g = d.fetcherKey || Zy();
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
function Jy(s, { relative: b } = {}) {
  let { basename: T } = N.useContext(It),
    x = N.useContext(Qn);
  Qe(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...wi(s || '.', { relative: b }) },
    d = Zn();
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
    T !== '/' && (i.pathname = i.pathname === '/' ? T : rn([T, i.pathname])),
    _i(i)
  );
}
function ky(s, { relative: b } = {}) {
  let T = N.useContext(Eh);
  Qe(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Dh('useViewTransitionState'),
    h = wi(s, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = Xn(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = Xn(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return $u(h.pathname, d) != null || $u(h.pathname, i) != null;
}
const Fy = 'modulepreload',
  $y = function (s) {
    return '/ochimono-game/' + s;
  },
  th = {},
  Wy = function (b, T, x) {
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
          if (((m = $y(m)), m in th)) return;
          th[m] = !0;
          const o = m.endsWith('.css'),
            p = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${p}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = o ? 'stylesheet' : Fy),
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
function Py(s = {}) {
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
        ((f = await Wy(async () => {
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
function Iy(s = {}) {
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
      Py({
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
const ep = '_banner_1qruq_1',
  tp = '_message_1qruq_21',
  np = '_button_1qruq_25',
  Mc = { banner: ep, message: tp, button: np },
  ap = () => {
    const {
      needRefresh: [s],
      updateServiceWorker: b,
    } = Iy();
    return s
      ? W.jsxs('div', {
          className: Mc.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            W.jsx('span', { className: Mc.message, children: '新しいバージョンがあります' }),
            W.jsx('button', {
              type: 'button',
              className: Mc.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  lp = '_index_r8hfh_1',
  ip = { index: lp },
  up = '_layout_u1qv8_1',
  rp = '_top_bar_placeholder_u1qv8_10',
  sp = '_main_u1qv8_15',
  cp = '_field_wrapper_u1qv8_23',
  op = '_skill_button_wrapper_u1qv8_28',
  Ya = {
    layout: up,
    top_bar_placeholder: rp,
    main: sp,
    field_wrapper: cp,
    skill_button_wrapper: op,
  },
  fp = '_surface_6wr97_1',
  dp = '_canvas_layer_6wr97_11',
  mp = '_game_over_line_6wr97_22',
  Rc = { surface: fp, canvas_layer: dp, game_over_line: mp },
  hp = '_layer_z1h0v_1',
  vp = '_effect_z1h0v_7',
  gp = '_ring_z1h0v_12',
  yp = '_score_z1h0v_24',
  pp = '_special_z1h0v_36',
  Ri = { layer: hp, effect: vp, ring: gp, score: yp, special: pp },
  wh = N.memo(
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
        W.jsx('div', { ref: T, className: Ri.layer, 'aria-hidden': 'true' })
      );
    })
  );
wh.displayName = 'MergeEffect';
const Sp = '_line_yymkz_1',
  xp = '_preview_wrap_yymkz_11',
  Ep = '_preview_yymkz_11',
  Ac = { line: Sp, preview_wrap: xp, preview: Ep },
  bp = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Nh = N.memo(
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
      return W.jsxs(W.Fragment, {
        children: [
          W.jsx('div', {
            ref: h,
            className: Ac.line,
            style: { height: `${b}px`, transform: `translate3d(${s}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          W.jsx('div', {
            ref: i,
            className: Ac.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${s - T.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: W.jsx('img', {
              src: bp(T.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Ac.preview,
            }),
          }),
        ],
      });
    })
  );
Nh.displayName = 'DropIndicator';
const Tp = (s) => Math.max(0, Math.min(1, s)),
  Cp = ({
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
      g = N.useRef(0.5),
      r = N.useRef(null),
      y = N.useRef(h);
    y.current = h;
    const v = N.useRef(b);
    v.current = b;
    const E = N.useCallback((A) => {
        const B = y.current,
          D = v.current;
        return B ? Math.max(B.radius, Math.min(D - B.radius, A * D)) : A * D;
      }, []),
      R = N.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = p.current) == null || A.setX(E(g.current)));
          }));
      }, [E]),
      O = N.useCallback(
        (A) => {
          const B = o.current;
          if (!B) return;
          const D = B.getBoundingClientRect(),
            H = Tp((A - D.left) / D.width);
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
        c || (w && (O(A.clientX), (B = o.current) == null || B.setPointerCapture(A.pointerId)));
      },
      C = (A) => {
        if (!c) {
          if (A.buttons === 0 && A.pointerType === 'mouse') {
            O(A.clientX);
            return;
          }
          O(A.clientX);
        }
      },
      z = (A) => {
        var B;
        if (c) {
          const D = o.current;
          if (!D) return;
          const H = D.getBoundingClientRect();
          m(A.clientX - H.left, A.clientY - H.top);
          return;
        }
        w &&
          (O(A.clientX),
          d(g.current),
          (B = o.current) == null || B.releasePointerCapture(A.pointerId));
      },
      _ = E(0.5);
    return W.jsxs('div', {
      ref: o,
      className: Rc.surface,
      style: { width: `${b}px`, height: `${T}px` },
      onPointerDown: L,
      onPointerMove: C,
      onPointerUp: z,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        W.jsx('div', { ref: s, className: Rc.canvas_layer }),
        W.jsx('div', {
          className: Rc.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        w ? W.jsx(Nh, { ref: p, initialX: _, fieldHeight: T, item: h }) : null,
        W.jsx(wh, { ref: f }),
      ],
    });
  },
  Mp = '_overlay_efysu_1',
  Rp = '_number_efysu_11',
  nh = { overlay: Mp, number: Rp },
  Bh = N.memo(({ seconds: s }) =>
    s === null
      ? null
      : W.jsx('div', {
          className: nh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${s}秒`,
          children: W.jsx('span', { className: nh.number, children: s }, s),
        })
  );
Bh.displayName = 'CountdownOverlay';
const Ap = '_overlay_o79hb_1',
  zp = '_panel_o79hb_13',
  _p = '_new_record_o79hb_24',
  Op = '_title_o79hb_32',
  Dp = '_scores_o79hb_40',
  wp = '_row_o79hb_46',
  Np = '_gold_o79hb_64',
  Bp = '_restart_o79hb_69',
  Gn = {
    overlay: Ap,
    panel: zp,
    new_record: _p,
    title: Op,
    scores: Dp,
    row: wp,
    gold: Np,
    restart: Bp,
  },
  Up = ({ score: s, bestScore: b, isNewRecord: T, onRestart: x }) =>
    W.jsx('div', {
      className: Gn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: W.jsxs('div', {
        className: Gn.panel,
        children: [
          T ? W.jsx('p', { className: Gn.new_record, children: '🎉 新記録！' }) : null,
          W.jsx('h2', { className: Gn.title, children: 'GAME OVER' }),
          W.jsxs('dl', {
            className: Gn.scores,
            children: [
              W.jsxs('div', {
                className: Gn.row,
                children: [
                  W.jsx('dt', { children: 'スコア' }),
                  W.jsx('dd', { className: T ? Gn.gold : '', children: s }),
                ],
              }),
              W.jsxs('div', {
                className: Gn.row,
                children: [W.jsx('dt', { children: 'ベスト' }), W.jsx('dd', { children: b })],
              }),
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: Gn.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  Hp = '_root_1svqx_1',
  Lp = '_message_1svqx_13',
  jp = '_icon_1svqx_30',
  Gp = '_text_1svqx_34',
  Yp = '_cancel_1svqx_38',
  Ai = { root: Hp, message: Lp, icon: jp, text: Gp, cancel: Yp },
  Uh = N.memo(({ active: s, onCancel: b }) =>
    s
      ? W.jsxs('div', {
          className: Ai.root,
          children: [
            W.jsxs('div', {
              className: Ai.message,
              children: [
                W.jsx('span', { className: Ai.icon, children: '🧲' }),
                W.jsx('span', { className: Ai.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            W.jsx('button', {
              type: 'button',
              className: Ai.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
Uh.displayName = 'MagnetSelectingOverlay';
const qp = '_gravity_flip_14l5j_1',
  Vp = '_arrow_14l5j_9',
  ah = { gravity_flip: qp, arrow: Vp },
  Hh = N.memo(({ effect: s }) =>
    s === 'gravityFlip'
      ? W.jsx('div', {
          className: ah.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, T) =>
            W.jsx(
              'span',
              {
                className: ah.arrow,
                style: { left: `${(T + 1) * 14}%`, animationDelay: `${T * 0.12}s` },
                children: '⬆',
              },
              T
            )
          ),
        })
      : null
  );
Hh.displayName = 'SkillEffectOverlay';
const Xp = '_overlay_1xsci_1',
  Qp = '_panel_1xsci_12',
  Zp = '_title_1xsci_22',
  Kp = '_lead_1xsci_30',
  Jp = '_start_1xsci_37',
  zi = { overlay: Xp, panel: Qp, title: Zp, lead: Kp, start: Jp },
  kp = ({ onStart: s }) =>
    W.jsx('div', {
      className: zi.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: W.jsxs('div', {
        className: zi.panel,
        children: [
          W.jsxs('h2', {
            className: zi.title,
            children: ['💖🍓🐱', W.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          W.jsxs('p', {
            className: zi.lead,
            children: [
              '同じアイテム同士をくっつけて',
              W.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          W.jsx('button', {
            type: 'button',
            className: zi.start,
            onClick: s,
            children: 'スタート',
          }),
        ],
      }),
    }),
  Fp = '_backdrop_1we7g_1',
  $p = '_drawer_1we7g_11',
  Wp = '_header_1we7g_23',
  Pp = '_title_1we7g_30',
  Ip = '_close_1we7g_38',
  e1 = '_row_1we7g_54',
  t1 = '_row_label_1we7g_62',
  n1 = '_footer_1we7g_68',
  a1 = '_version_1we7g_74',
  un = {
    backdrop: Fp,
    drawer: $p,
    header: Wp,
    title: Pp,
    close: Ip,
    row: e1,
    row_label: t1,
    footer: n1,
    version: a1,
  },
  l1 = '_toggle_1ap46_1',
  i1 = { toggle: l1 },
  Lh = N.memo(({ isOn: s, onToggle: b }) =>
    W.jsx('button', {
      type: 'button',
      className: i1.toggle,
      onClick: b,
      'aria-label': s ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': s,
      children: W.jsx('span', { 'aria-hidden': 'true', children: s ? '🔊' : '🔇' }),
    })
  );
Lh.displayName = 'SoundToggle';
const u1 = '_toggle_15urq_1',
  r1 = { toggle: u1 },
  Xc = [{ id: 'gumi', label: 'グミ' }],
  Qc = 'gumi',
  jh = (s) => typeof s == 'string' && Xc.some((b) => b.id === s),
  Gh = N.memo(({ value: s, onChange: b }) => {
    const T = (x) => {
      const h = x.target.value;
      jh(h) && b(h);
    };
    return W.jsx('select', {
      className: r1.toggle,
      value: s,
      onChange: T,
      'aria-label': 'アセットテーマ',
      children: Xc.map((x) => W.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
Gh.displayName = 'ThemeToggle';
const Yh = N.memo(
  ({ open: s, onClose: b, themeId: T, onChangeTheme: x, isSoundOn: h, onToggleSound: i }) =>
    s
      ? W.jsx('div', {
          className: un.backdrop,
          onClick: b,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '設定',
          children: W.jsxs('aside', {
            className: un.drawer,
            onClick: (d) => d.stopPropagation(),
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
                  W.jsx(Gh, { value: T, onChange: x }),
                ],
              }),
              W.jsxs('div', {
                className: un.row,
                children: [
                  W.jsx('span', { className: un.row_label, children: 'サウンド' }),
                  W.jsx(Lh, { isOn: h, onToggle: i }),
                ],
              }),
              W.jsx('footer', {
                className: un.footer,
                children: W.jsxs('span', { className: un.version, children: ['v', '1.0.14'] }),
              }),
            ],
          }),
        })
      : null
);
Yh.displayName = 'SettingsDrawer';
const s1 = '_button_dhp3t_1',
  c1 = '_gauge_dhp3t_23',
  o1 = '_gauge_track_dhp3t_31',
  f1 = '_gauge_fill_dhp3t_37',
  d1 = '_icon_dhp3t_45',
  m1 = '_ready_dhp3t_53',
  zl = { button: s1, gauge: c1, gauge_track: o1, gauge_fill: f1, icon: d1, ready: m1 },
  Nc = 32,
  lh = 2 * Math.PI * Nc,
  qh = N.memo(({ ratio: s, isReady: b, onClick: T }) => {
    const x = Math.max(0, Math.min(1, s)),
      h = lh * (1 - x);
    return W.jsxs('button', {
      type: 'button',
      className: `${zl.button} ${b ? zl.ready : ''}`,
      onClick: T,
      disabled: !b,
      'aria-label': b ? '必殺技を選択' : `必殺技ゲージ ${Math.round(x * 100)}%`,
      children: [
        W.jsxs('svg', {
          className: zl.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: [
            W.jsx('circle', { className: zl.gauge_track, cx: '40', cy: '40', r: Nc }),
            W.jsx('circle', {
              className: zl.gauge_fill,
              cx: '40',
              cy: '40',
              r: Nc,
              strokeDasharray: lh,
              strokeDashoffset: h,
              transform: 'rotate(-90 40 40)',
            }),
          ],
        }),
        W.jsx('span', { className: zl.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
qh.displayName = 'SkillButton';
const h1 = '_backdrop_1jz1a_1',
  v1 = '_menu_1jz1a_12',
  g1 = '_title_1jz1a_21',
  y1 = '_choices_1jz1a_30',
  p1 = '_choice_1jz1a_30',
  S1 = '_choice_icon_1jz1a_60',
  x1 = '_choice_label_1jz1a_67',
  E1 = '_choice_desc_1jz1a_74',
  b1 = '_cancel_1jz1a_80',
  Yn = {
    backdrop: h1,
    menu: v1,
    title: g1,
    choices: y1,
    choice: p1,
    choice_icon: S1,
    choice_label: x1,
    choice_desc: E1,
    cancel: b1,
  },
  T1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを引き寄せ',
    },
  ],
  Vh = N.memo(({ open: s, onSelect: b, onClose: T }) =>
    s
      ? W.jsx('div', {
          className: Yn.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: W.jsxs('div', {
            className: Yn.menu,
            onClick: (x) => x.stopPropagation(),
            children: [
              W.jsx('h2', { className: Yn.title, children: '必殺技を選択' }),
              W.jsx('div', {
                className: Yn.choices,
                children: T1.map((x) =>
                  W.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: Yn.choice,
                      onClick: () => b(x.kind),
                      children: [
                        W.jsx('span', {
                          className: Yn.choice_icon,
                          'aria-hidden': 'true',
                          children: x.icon,
                        }),
                        W.jsx('span', { className: Yn.choice_label, children: x.label }),
                        W.jsx('span', { className: Yn.choice_desc, children: x.description }),
                      ],
                    },
                    x.kind
                  )
                ),
              }),
              W.jsx('button', {
                type: 'button',
                className: Yn.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
Vh.displayName = 'SkillMenu';
const C1 = '_top_bar_15roj_1',
  M1 = '_right_15roj_12',
  R1 = '_settings_15roj_18',
  zc = { top_bar: C1, right: M1, settings: R1 },
  A1 = '_next_1n5pn_1',
  z1 = '_label_1n5pn_7',
  _1 = '_thumb_1n5pn_14',
  O1 = '_image_1n5pn_27',
  Ku = { next: A1, label: z1, thumb: _1, image: O1 },
  D1 = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  Xh = N.memo(({ item: s }) =>
    W.jsxs('div', {
      className: Ku.next,
      children: [
        W.jsx('span', { className: Ku.label, children: 'NEXT' }),
        W.jsx('div', {
          className: Ku.thumb,
          'data-testid': 'next-item',
          children: s
            ? W.jsx('img', { src: D1(s.svgPath), alt: s.name, className: Ku.image })
            : null,
        }),
      ],
    })
  );
Xh.displayName = 'NextItemPreview';
const w1 = '_score_display_pgke7_1',
  N1 = '_row_pgke7_7',
  B1 = '_label_pgke7_13',
  U1 = '_value_pgke7_20',
  H1 = '_label_small_pgke7_28',
  L1 = '_value_small_pgke7_35',
  Ga = { score_display: w1, row: N1, label: B1, value: U1, label_small: H1, value_small: L1 },
  Qh = N.memo(({ score: s, bestScore: b }) =>
    W.jsxs('div', {
      className: Ga.score_display,
      children: [
        W.jsxs('div', {
          className: Ga.row,
          children: [
            W.jsx('span', { className: Ga.label, children: 'SCORE' }),
            W.jsx('span', { className: Ga.value, 'data-testid': 'score-value', children: s }),
          ],
        }),
        W.jsxs('div', {
          className: Ga.row,
          children: [
            W.jsx('span', { className: Ga.label_small, children: 'BEST' }),
            W.jsx('span', { className: Ga.value_small, children: b }),
          ],
        }),
      ],
    })
  );
Qh.displayName = 'ScoreDisplay';
const j1 = ({ score: s, bestScore: b, nextItem: T, onOpenSettings: x }) =>
  W.jsxs('header', {
    className: zc.top_bar,
    children: [
      W.jsx(Qh, { score: s, bestScore: b }),
      W.jsxs('div', {
        className: zc.right,
        children: [
          W.jsx(Xh, { item: T }),
          W.jsx('button', {
            type: 'button',
            className: zc.settings,
            onClick: x,
            'aria-label': '設定を開く',
            children: W.jsx('span', { 'aria-hidden': 'true', children: '⚙' }),
          }),
        ],
      }),
    ],
  });
var Fu = { exports: {} };
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
 */ var G1 = Fu.exports,
  ih;
function Y1() {
  return (
    ih ||
      ((ih = 1),
      (function (s, b) {
        (function (x, h) {
          s.exports = h();
        })(G1, function () {
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
                          !d && typeof Lm < 'u' && (d = Lm.decomp));
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
                        O,
                        w;
                      for (w = 0; w < v; w++)
                        ((E = c[w]),
                          (R = E.x - r),
                          (O = E.y - y),
                          (E.x = r + (R * p - O * g)),
                          (E.y = y + (R * g + O * p)));
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
                        O = m[y < m.length ? y : m.length - 1];
                      if (O === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        L = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        C = Math.sqrt(2 * Math.pow(O, 2)),
                        z = d.mult(f.clone(w), O),
                        _ = d.normalise(d.mult(d.add(w, L), 0.5)),
                        A = d.sub(E, d.mult(_, C)),
                        B = o;
                      (o === -1 && (B = Math.pow(O, 0.32) * 1.75),
                        (B = f.clamp(B, p, g)),
                        B % 2 === 1 && (B += 1));
                      for (var D = Math.acos(d.dot(w, L)), H = D / B, G = 0; G < B; G++)
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
                        var O = [];
                        for (E = 0; E < y.length; E++) O = O.concat(y[E].vertices);
                        d.clockwiseSort(O);
                        var w = d.hull(O),
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
                      var O = r.parts[R];
                      ((O.position.x += E.x),
                        (O.position.y += E.y),
                        d.translate(O.vertices, E),
                        o.update(O.bounds, O.vertices, r.velocity));
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
                      var O = r.parts[R];
                      ((O.angle += E),
                        d.rotate(O.vertices, E, r.position),
                        p.rotate(O.axes, E),
                        o.update(O.bounds, O.vertices, r.velocity),
                        R > 0 && f.rotateAbout(O.position, E, r.position, O.position));
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
                        O = Math.sin(y),
                        w = r.position.x - v.x,
                        L = r.position.y - v.y;
                      (i.setPosition(r, { x: v.x + (w * R - L * O), y: v.y + (w * O + L * R) }, E),
                        i.setAngle(r, r.angle + y, E));
                    }
                  }),
                  (i.scale = function (r, y, v, E) {
                    var R = 0,
                      O = 0;
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
                        w > 0 && ((R += L.area), (O += L.inertia)),
                        (L.position.x = E.x + (L.position.x - E.x) * y),
                        (L.position.y = E.y + (L.position.y - E.y) * v),
                        o.update(L.bounds, L.vertices, r.velocity));
                    }
                    (r.parts.length > 1 &&
                      ((r.area = R),
                      r.isStatic || (i.setMass(r, r.density * R), i.setInertia(r, O))),
                      r.circleRadius &&
                        (y === v ? (r.circleRadius *= y) : (r.circleRadius = null)));
                  }),
                  (i.update = function (r, y) {
                    y = (typeof y < 'u' ? y : 1e3 / 60) * r.timeScale;
                    var v = y * y,
                      E = i._timeCorrection ? y / (r.deltaTime || y) : 1,
                      R = 1 - r.frictionAir * (y / m._baseDelta),
                      O = (r.position.x - r.positionPrev.x) * E,
                      w = (r.position.y - r.positionPrev.y) * E;
                    ((r.velocity.x = O * R + (r.force.x / r.mass) * v),
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
                      var O = E[R],
                        w = O.position.x - g.x,
                        L = O.position.y - g.y;
                      (m.setPosition(O, { x: g.x + (w * y - L * v), y: g.y + (w * v + L * y) }),
                        m.rotate(O, p));
                    }
                    return o;
                  }),
                  (i.scale = function (o, p, g, r, y) {
                    for (var v = y ? i.allBodies(o) : o.bodies, E = 0; E < v.length; E++) {
                      var R = v[E],
                        O = R.position.x - r.x,
                        w = R.position.y - r.y;
                      (m.setPosition(R, { x: r.x + O * p, y: r.y + w * g }), m.scale(R, p, g));
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
                      var O = Math.min(y.motion, R),
                        w = Math.max(y.motion, R);
                      ((y.motion = i._minBias * O + (1 - i._minBias) * w),
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
                      O = v.tangent,
                      w = v.penetration,
                      L = v.supports,
                      C = E.overlap,
                      z = E.axis,
                      _ = z.x,
                      A = z.y,
                      B = g.position.x - p.position.x,
                      D = g.position.y - p.position.y;
                    (_ * B + A * D >= 0 && ((_ = -_), (A = -A)),
                      (R.x = _),
                      (R.y = A),
                      (O.x = -A),
                      (O.y = _),
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
                      O = g[0].y,
                      w = r[0].x,
                      L = r[0].y,
                      C = y.length,
                      z = Number.MAX_VALUE,
                      _ = 0,
                      A,
                      B,
                      D,
                      H,
                      G,
                      J;
                    for (G = 0; G < C; G++) {
                      var te = y[G],
                        ee = te.x,
                        q = te.y,
                        K = R * ee + O * q,
                        ne = w * ee + L * q,
                        se = K,
                        de = ne;
                      for (J = 1; J < v; J += 1)
                        ((H = g[J].x * ee + g[J].y * q), H > se ? (se = H) : H < K && (K = H));
                      for (J = 1; J < E; J += 1)
                        ((H = r[J].x * ee + r[J].y * q), H > de ? (de = H) : H < ne && (ne = H));
                      if (
                        ((B = se - ne),
                        (D = de - K),
                        (A = B < D ? B : D),
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
                      O = p.position.y,
                      w = r.x * y,
                      L = r.y * y,
                      C = v[0],
                      z = C,
                      _ = w * (R - z.x) + L * (O - z.y),
                      A,
                      B,
                      D;
                    for (D = 1; D < E; D += 1)
                      ((z = v[D]),
                        (B = w * (R - z.x) + L * (O - z.y)),
                        B < _ && ((_ = B), (C = z)));
                    return (
                      (A = v[(E + C.index - 1) % E]),
                      (_ = w * (R - A.x) + L * (O - A.y)),
                      (z = v[(C.index + 1) % E]),
                      w * (R - z.x) + L * (O - z.y) < _
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
                      O = g[1];
                    ((O.vertex === v || E.vertex === R) && ((g[1] = E), (g[0] = E = O), (O = g[1])),
                      (E.vertex = v),
                      (O.vertex = R));
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
                        O = !E.bodyB || (E.bodyB && E.bodyB.isStatic);
                      (R || O) && i.solve(g[v], y);
                    }
                    for (v = 0; v < g.length; v += 1)
                      ((E = g[v]),
                        (R = !E.bodyA || (E.bodyA && E.bodyA.isStatic)),
                        (O = !E.bodyB || (E.bodyB && E.bodyB.isStatic)),
                        !R && !O && i.solve(g[v], y));
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
                      var O = E,
                        w = R;
                      if (
                        (y && (O = f.add(y.position, E)),
                        v && (w = f.add(v.position, R)),
                        !(!O || !w))
                      ) {
                        var L = f.sub(O, w),
                          C = f.magnitude(L);
                        C < i._minLength && (C = i._minLength);
                        var z = (C - g.length) / C,
                          _ = g.stiffness >= 1 || g.length === 0,
                          A = _ ? g.stiffness * r : g.stiffness * r * r,
                          B = g.damping * r,
                          D = f.mult(L, z * A),
                          H = (y ? y.inverseMass : 0) + (v ? v.inverseMass : 0),
                          G = (y ? y.inverseInertia : 0) + (v ? v.inverseInertia : 0),
                          J = H + G,
                          te,
                          ee,
                          q,
                          K,
                          ne;
                        if (B > 0) {
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
                          (y.constraintImpulse.x -= D.x * ee),
                          (y.constraintImpulse.y -= D.y * ee),
                          (y.position.x -= D.x * ee),
                          (y.position.y -= D.y * ee),
                          B > 0 &&
                            ((y.positionPrev.x -= B * q.x * K * ee),
                            (y.positionPrev.y -= B * q.y * K * ee)),
                          (te =
                            (f.cross(E, D) / J) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - g.angularStiffness)),
                          (y.constraintImpulse.angle -= te),
                          (y.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((ee = v.inverseMass / H),
                            (v.constraintImpulse.x += D.x * ee),
                            (v.constraintImpulse.y += D.y * ee),
                            (v.position.x += D.x * ee),
                            (v.position.y += D.y * ee),
                            B > 0 &&
                              ((v.positionPrev.x += B * q.x * K * ee),
                              (v.positionPrev.y += B * q.y * K * ee)),
                            (te =
                              (f.cross(R, D) / J) *
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
                      O = y - E;
                    return Math.sqrt(R * R + O * O);
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
                      O = r * v,
                      w = O + R,
                      L = w + O,
                      C;
                    v < 0.5
                      ? (C = 'L 0 0 L ' + O + ' ' + -y + ' L ' + w + ' ' + -y + ' L ' + L + ' 0')
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
                    for (var E = (2 * Math.PI) / r, R = '', O = E * 0.5, w = 0; w < r; w += 1) {
                      var L = O + w * E,
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
                  (i.fromVertices = function (p, g, r, y, v, E, R, O) {
                    var w = f.getDecomp(),
                      L,
                      C,
                      z,
                      _,
                      A,
                      B,
                      D,
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
                        O = typeof O < 'u' ? O : 0.01,
                        f.isArray(r[0]) || (r = [r]),
                        J = 0;
                      J < r.length;
                      J += 1
                    )
                      if (
                        ((B = r[J]),
                        (_ = d.isConvex(B)),
                        (A = !_),
                        A &&
                          !L &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        _ || !L)
                      )
                        (_ ? (B = d.clockwiseSort(B)) : (B = d.hull(B)),
                          z.push({ position: { x: p, y: g }, vertices: B }));
                      else {
                        var ee = B.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          O !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, O));
                        var q = w.quickDecomp(ee);
                        for (D = 0; D < q.length; D++) {
                          var K = q[D],
                            ne = K.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            z.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (D = 0; D < z.length; D++) z[D] = c.create(f.extend(z[D], y));
                    if (v) {
                      var se = 5;
                      for (D = 0; D < z.length; D++) {
                        var de = z[D];
                        for (H = D + 1; H < z.length; H++) {
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
                      var O = o[E],
                        w = O.bounds,
                        L = O.bounds.max.x,
                        C = O.bounds.max.y,
                        z = O.bounds.min.y,
                        _ = O.isStatic || O.isSleeping,
                        A = O.parts.length,
                        B = A === 1;
                      for (R = E + 1; R < p; R++) {
                        var D = o[R],
                          H = D.bounds;
                        if (H.min.x > L) break;
                        if (
                          !(C < H.min.y || z > H.max.y) &&
                          !(_ && (D.isStatic || D.isSleeping)) &&
                          g(O.collisionFilter, D.collisionFilter)
                        ) {
                          var G = D.parts.length;
                          if (B && G === 1) {
                            var J = r(O, D, m);
                            J && (y[v++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, q = te; q < A; q++)
                              for (var K = O.parts[q], w = K.bounds, ne = ee; ne < G; ne++) {
                                var se = D.parts[ne],
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
                      O = v.world,
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
                    var B = p.allBodies(O),
                      D = p.allConstraints(O);
                    for (
                      O.isModified && (c.setBodies(w, B), p.setModified(O, !1, !1, !0)),
                        v.enableSleeping && d.update(B, E),
                        i._bodiesApplyGravity(B, v.gravity),
                        E > 0 && i._bodiesUpdate(B, E),
                        o.trigger(v, 'beforeSolve', A),
                        g.preSolveAll(B),
                        _ = 0;
                      _ < v.constraintIterations;
                      _++
                    )
                      g.solveAll(D, E);
                    g.postSolveAll(B);
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
                      f.postSolvePosition(B), g.preSolveAll(B), _ = 0;
                      _ < v.constraintIterations;
                      _++
                    )
                      g.solveAll(D, E);
                    for (
                      g.postSolveAll(B), f.preSolveVelocity(L.list), _ = 0;
                      _ < v.velocityIterations;
                      _++
                    )
                      f.solveVelocity(L.list, E);
                    return (
                      i._bodiesUpdateVelocities(B),
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
                      i._bodiesClearForces(B),
                      o.trigger(v, 'afterUpdate', A),
                      (v.timing.lastElapsed = r.now() - R),
                      v
                    );
                  }),
                  (i.merge = function (v, E) {
                    if ((r.extend(v, E), E.world)) {
                      ((v.world = E.world), i.clear(v));
                      for (var R = p.allBodies(v.world), O = 0; O < R.length; O++) {
                        var w = R[O];
                        (d.set(w, !1), (w.id = r.nextId()));
                      }
                    }
                  }),
                  (i.clear = function (v) {
                    (m.clear(v.pairs), c.clear(v.detector));
                  }),
                  (i._bodiesClearForces = function (v) {
                    for (var E = v.length, R = 0; R < E; R++) {
                      var O = v[R];
                      ((O.force.x = 0), (O.force.y = 0), (O.torque = 0));
                    }
                  }),
                  (i._bodiesApplyGravity = function (v, E) {
                    var R = typeof E.scale < 'u' ? E.scale : 0.001,
                      O = v.length;
                    if (!((E.x === 0 && E.y === 0) || R === 0))
                      for (var w = 0; w < O; w++) {
                        var L = v[w];
                        L.isStatic ||
                          L.isSleeping ||
                          ((L.force.y += L.mass * E.y * R), (L.force.x += L.mass * E.x * R));
                      }
                  }),
                  (i._bodiesUpdate = function (v, E) {
                    for (var R = v.length, O = 0; O < R; O++) {
                      var w = v[O];
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
                      O,
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
                            ((O = L / v.totalContacts),
                            (v.positionImpulse.x += R.x * w * O),
                            (v.positionImpulse.y += R.y * w * O)),
                          E.isStatic ||
                            E.isSleeping ||
                            ((O = L / E.totalContacts),
                            (E.positionImpulse.x -= R.x * w * O),
                            (E.positionImpulse.y -= R.y * w * O))));
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
                        O = E.y,
                        w = v.velocity;
                      if (((v.totalContacts = 0), R !== 0 || O !== 0)) {
                        for (var L = 0; L < v.parts.length; L++) {
                          var C = v.parts[L];
                          (g(C.vertices, E),
                            r(C.bounds, C.vertices, w),
                            (C.position.x += R),
                            (C.position.y += O));
                        }
                        ((v.positionPrev.x += R),
                          (v.positionPrev.y += O),
                          R * w.x + O * w.y < 0
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
                          O = E.parentB,
                          w = E.normal,
                          L = E.tangent;
                        for (g = 0; g < v; g++) {
                          var C = y[g],
                            z = C.vertex,
                            _ = C.normalImpulse,
                            A = C.tangentImpulse;
                          if (_ !== 0 || A !== 0) {
                            var B = w.x * _ + L.x * A,
                              D = w.y * _ + L.y * A;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += B * R.inverseMass),
                              (R.positionPrev.y += D * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((z.x - R.position.x) * D - (z.y - R.position.y) * B))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= B * O.inverseMass),
                                (O.positionPrev.y -= D * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((z.x - O.position.x) * D - (z.y - O.position.y) * B))));
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
                      O = m.length,
                      w,
                      L,
                      C,
                      z;
                    for (C = 0; C < O; C++) {
                      var _ = m[C];
                      if (!(!_.isActive || _.isSensor)) {
                        var A = _.collision,
                          B = A.parentA,
                          D = A.parentB,
                          H = A.normal.x,
                          G = A.normal.y,
                          J = A.tangent.x,
                          te = A.tangent.y,
                          ee = _.inverseMass,
                          q = _.friction * _.frictionStatic * E,
                          K = _.contacts,
                          ne = _.contactCount,
                          se = 1 / ne,
                          de = B.position.x - B.positionPrev.x,
                          j = B.position.y - B.positionPrev.y,
                          F = B.angle - B.anglePrev,
                          ae = D.position.x - D.positionPrev.x,
                          le = D.position.y - D.positionPrev.y,
                          oe = D.angle - D.anglePrev;
                        for (z = 0; z < ne; z++) {
                          var ie = K[z],
                            he = ie.vertex,
                            ge = he.x - B.position.x,
                            Ae = he.y - B.position.y,
                            Ze = he.x - D.position.x,
                            it = he.y - D.position.y,
                            Xe = de - Ae * F,
                            pa = j + ge * F,
                            bt = ae - it * oe,
                            Kn = le + Ze * oe,
                            cn = Xe - bt,
                            on = pa - Kn,
                            Jn = H * cn + G * on,
                            dt = J * cn + te * on,
                            Yt = _.separation + Jn,
                            ut = Math.min(Yt, 1);
                          ut = Yt < 0 ? 0 : ut;
                          var fn = ut * q;
                          dt < -fn || dt > fn
                            ? ((L = dt > 0 ? dt : -dt),
                              (w = _.friction * (dt > 0 ? 1 : -1) * r),
                              w < -L ? (w = -L) : w > L && (w = L))
                            : ((w = dt), (L = R));
                          var Sa = ge * G - Ae * H,
                            st = Ze * G - it * H,
                            Ot =
                              se / (ee + B.inverseInertia * Sa * Sa + D.inverseInertia * st * st),
                            Dt = (1 + _.restitution) * Jn * Ot;
                          if (((w *= Ot), Jn < y)) ie.normalImpulse = 0;
                          else {
                            var xa = ie.normalImpulse;
                            ((ie.normalImpulse += Dt),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (Dt = ie.normalImpulse - xa));
                          }
                          if (dt < -v || dt > v) ie.tangentImpulse = 0;
                          else {
                            var yn = ie.tangentImpulse;
                            ((ie.tangentImpulse += w),
                              ie.tangentImpulse < -L && (ie.tangentImpulse = -L),
                              ie.tangentImpulse > L && (ie.tangentImpulse = L),
                              (w = ie.tangentImpulse - yn));
                          }
                          var pn = H * Dt + J * w,
                            Sn = G * Dt + te * w;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += pn * B.inverseMass),
                            (B.positionPrev.y += Sn * B.inverseMass),
                            (B.anglePrev += (ge * Sn - Ae * pn) * B.inverseInertia)),
                            D.isStatic ||
                              D.isSleeping ||
                              ((D.positionPrev.x -= pn * D.inverseMass),
                              (D.positionPrev.y -= Sn * D.inverseMass),
                              (D.anglePrev -= (Ze * Sn - it * pn) * D.inverseInertia)));
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
                      O = c.collisionStart,
                      w = c.collisionEnd,
                      L = c.collisionActive,
                      C = m.length,
                      z = 0,
                      _ = 0,
                      A = 0,
                      B,
                      D,
                      H;
                    for (H = 0; H < C; H++)
                      ((B = m[H]),
                        (D = B.pair),
                        D
                          ? (D.isActive && (L[A++] = D), p(D, B, o))
                          : ((D = g(B, o)), (y[D.id] = D), (O[z++] = D), (v[R++] = D)));
                    for (R = 0, E = v.length, H = 0; H < E; H++)
                      ((D = v[H]),
                        D.timeUpdated >= o
                          ? (v[R++] = D)
                          : (r(D, !1, o),
                            D.collision.bodyA.sleepCounter > 0 && D.collision.bodyB.sleepCounter > 0
                              ? (v[R++] = D)
                              : ((w[_++] = D), delete y[D.id])));
                    (v.length !== R && (v.length = R),
                      O.length !== z && (O.length = z),
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
                ((i.stack = function (g, r, y, v, E, R, O) {
                  for (
                    var w = d.create({ label: 'Stack' }), L = g, C = r, z, _ = 0, A = 0;
                    A < v;
                    A++
                  ) {
                    for (var B = 0, D = 0; D < y; D++) {
                      var H = O(L, C, D, A, z, _);
                      if (H) {
                        var G = H.bounds.max.y - H.bounds.min.y,
                          J = H.bounds.max.x - H.bounds.min.x;
                        (G > B && (B = G),
                          m.translate(H, { x: J * 0.5, y: G * 0.5 }),
                          (L = H.bounds.max.x + E),
                          d.addBody(w, H),
                          (z = H),
                          (_ += 1));
                      } else L += E;
                    }
                    ((C += B + R), (L = g));
                  }
                  return w;
                }),
                  (i.chain = function (g, r, y, v, E, R) {
                    for (var O = g.bodies, w = 1; w < O.length; w++) {
                      var L = O[w - 1],
                        C = O[w],
                        z = L.bounds.max.y - L.bounds.min.y,
                        _ = L.bounds.max.x - L.bounds.min.x,
                        A = C.bounds.max.y - C.bounds.min.y,
                        B = C.bounds.max.x - C.bounds.min.x,
                        D = {
                          bodyA: L,
                          pointA: { x: _ * r, y: z * y },
                          bodyB: C,
                          pointB: { x: B * v, y: A * E },
                        },
                        H = c.extend(D, R);
                      d.addConstraint(g, f.create(H));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (i.mesh = function (g, r, y, v, E) {
                    var R = g.bodies,
                      O,
                      w,
                      L,
                      C,
                      z;
                    for (O = 0; O < y; O++) {
                      for (w = 1; w < r; w++)
                        ((L = R[w - 1 + O * r]),
                          (C = R[w + O * r]),
                          d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: C }, E))));
                      if (O > 0)
                        for (w = 0; w < r; w++)
                          ((L = R[w + (O - 1) * r]),
                            (C = R[w + O * r]),
                            d.addConstraint(g, f.create(c.extend({ bodyA: L, bodyB: C }, E))),
                            v &&
                              w > 0 &&
                              ((z = R[w - 1 + (O - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: z, bodyB: C }, E)))),
                            v &&
                              w < r - 1 &&
                              ((z = R[w + 1 + (O - 1) * r]),
                              d.addConstraint(g, f.create(c.extend({ bodyA: z, bodyB: C }, E)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (i.pyramid = function (g, r, y, v, E, R, O) {
                    return i.stack(g, r, y, v, E, R, function (w, L, C, z, _, A) {
                      var B = Math.min(v, Math.ceil(y / 2)),
                        D = _ ? _.bounds.max.x - _.bounds.min.x : 0;
                      if (!(z > B)) {
                        z = B - z;
                        var H = z,
                          G = y - 1 - z;
                        if (!(C < H || C > G)) {
                          A === 1 && m.translate(_, { x: (C + (y % 2 === 1 ? 1 : -1)) * D, y: 0 });
                          var J = _ ? C * D : 0;
                          return O(g + J + C * E, L, C, z, _, A);
                        }
                      }
                    });
                  }),
                  (i.newtonsCradle = function (g, r, y, v, E) {
                    for (var R = d.create({ label: 'Newtons Cradle' }), O = 0; O < y; O++) {
                      var w = 1.9,
                        L = o.circle(g + O * (v * w), r + E, v, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        C = f.create({ pointA: { x: g + O * (v * w), y: r }, bodyB: L });
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
                      O = 20,
                      w = -y * 0.5 + O,
                      L = y * 0.5 - O,
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
                      B = o.circle(g + L, r + C, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      D = f.create({
                        bodyB: _,
                        pointB: { x: w, y: C },
                        bodyA: A,
                        stiffness: 1,
                        length: 0,
                      }),
                      H = f.create({
                        bodyB: _,
                        pointB: { x: L, y: C },
                        bodyA: B,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(z, _),
                      d.addBody(z, A),
                      d.addBody(z, B),
                      d.addConstraint(z, D),
                      d.addConstraint(z, H),
                      z
                    );
                  }),
                  p(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (g, r, y, v, E, R, O, w, L, C) {
                    ((L = c.extend({ inertia: 1 / 0 }, L)),
                      (C = c.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, C)));
                    var z = i.stack(g, r, y, v, E, R, function (_, A) {
                      return o.circle(_, A, w, L);
                    });
                    return (i.mesh(z, y, v, O, C), (z.label = 'Soft Body'), z);
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
                      O,
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
                              ((w = i._getBucketId(y, v)), (O = R[w]));
                              var A =
                                  y >= z.startCol &&
                                  y <= z.endCol &&
                                  v >= z.startRow &&
                                  v <= z.endRow,
                                B =
                                  y >= C.region.startCol &&
                                  y <= C.region.endCol &&
                                  v >= C.region.startRow &&
                                  v <= C.region.endRow;
                              (!A && B && B && O && i._bucketRemoveBody(m, O, C),
                                (C.region === z || (A && !B) || g) &&
                                  (O || (O = i._createBucket(R, w)), i._bucketAddBody(m, O, C)));
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
                          O = g[R];
                        O ? (O[2] += 1) : (g[R] = [p, E, 1]);
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
                  var O = p.create({
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
                      constraint: O,
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
                      O = v.constraint,
                      w = v.body;
                    if (R.button === 0) {
                      if (O.bodyB) (f.set(O.bodyB, !1), (O.pointA = R.position));
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
                                ((O.pointA = R.position),
                                  (O.bodyB = v.body = w),
                                  (O.pointB = {
                                    x: R.position.x - w.position.x,
                                    y: R.position.y - w.position.y,
                                  }),
                                  (O.angleB = w.angle),
                                  f.set(w, !1),
                                  m.trigger(v, 'startdrag', { mouse: R, body: w }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = v.body = null),
                        (O.pointB = null),
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
                    var r = [], y = g.length, v = p.bounds, E = f.collides, R = c.overlaps, O = 0;
                    O < y;
                    O++
                  ) {
                    var w = g[O],
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
                        O = (r.y + g.y) * 0.5,
                        w = m.rectangle(R, O, E, y, { angle: v }),
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
                    (z === 'auto' && (z = O(A)),
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
                      var B = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, D = 0;
                      D < z.length;
                      D += 1
                    ) {
                      var H = z[D],
                        G = H.bounds ? H.bounds.min : H.min || H.position || H,
                        J = H.bounds ? H.bounds.max : H.max || H.position || H;
                      G &&
                        J &&
                        (G.x < B.min.x && (B.min.x = G.x),
                        J.x > B.max.x && (B.max.x = J.x),
                        G.y < B.min.y && (B.min.y = G.y),
                        J.y > B.max.y && (B.max.y = J.y));
                    }
                    var te = B.max.x - B.min.x + 2 * _.x,
                      ee = B.max.y - B.min.y + 2 * _.y,
                      q = C.canvas.height,
                      K = C.canvas.width,
                      ne = K / q,
                      se = te / ee,
                      de = 1,
                      j = 1;
                    (se > ne ? (j = se / ne) : (de = ne / se),
                      (C.options.hasBounds = !0),
                      (C.bounds.min.x = B.min.x),
                      (C.bounds.max.x = B.min.x + te * de),
                      (C.bounds.min.y = B.min.y),
                      (C.bounds.max.y = B.min.y + ee * j),
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
                      B = _ / C.options.height;
                    (C.context.setTransform(
                      C.options.pixelRatio / A,
                      0,
                      0,
                      C.options.pixelRatio / B,
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
                      B = A.world,
                      D = C.canvas,
                      H = C.context,
                      G = C.options,
                      J = C.timing,
                      te = c.allBodies(B),
                      ee = c.allConstraints(B),
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
                      H.fillRect(0, 0, D.width, D.height),
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
                        B = A.world,
                        D = c.allBodies(B),
                        H = 0,
                        G = 55,
                        J = 44,
                        te = 0,
                        ee = 0,
                        q = 0;
                      q < D.length;
                      q += 1
                    )
                      H += D[q].parts.length;
                    var K = {
                      Part: H,
                      Body: D.length,
                      Cons: c.allConstraints(B).length,
                      Comp: c.allComposites(B).length,
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
                      B = A.deltaHistory,
                      D = A.elapsedHistory,
                      H = A.timestampElapsedHistory,
                      G = A.engineDeltaHistory,
                      J = A.engineUpdatesHistory,
                      te = A.engineElapsedHistory,
                      ee = _.timing.lastUpdatesPerFrame,
                      q = _.timing.lastDelta,
                      K = E(B),
                      ne = E(D),
                      se = E(G),
                      de = E(J),
                      j = E(te),
                      F = E(H),
                      ae = F / K || 0,
                      le = Math.round(K / q),
                      oe = 1e3 / K || 0,
                      ie = 4,
                      he = 12,
                      ge = 60,
                      Ae = 34,
                      Ze = 10,
                      it = 69;
                    ((z.fillStyle = '#0e0f19'),
                      z.fillRect(0, 50, he * 5 + ge * 6 + 22, Ae),
                      i.status(
                        z,
                        Ze,
                        it,
                        ge,
                        ie,
                        B.length,
                        Math.round(oe) + ' fps',
                        oe / i._goodFps,
                        function (Xe) {
                          return B[Xe] / K - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + he + ge,
                        it,
                        ge,
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
                        Ze + (he + ge) * 2,
                        it,
                        ge,
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
                        Ze + (he + ge) * 3,
                        it,
                        ge,
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
                        Ze + (he + ge) * 4,
                        it,
                        ge,
                        ie,
                        D.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function (Xe) {
                          return D[Xe] / ne - 1;
                        }
                      ),
                      i.status(
                        z,
                        Ze + (he + ge) * 5,
                        it,
                        ge,
                        ie,
                        H.length,
                        ae.toFixed(2) + ' x',
                        ae * ae * ae,
                        function (Xe) {
                          return (H[Xe] / B[Xe] / ae || 0) - 1;
                        }
                      ));
                  }),
                  (i.status = function (C, z, _, A, B, D, H, G, J) {
                    ((C.strokeStyle = '#888'),
                      (C.fillStyle = '#444'),
                      (C.lineWidth = 1),
                      C.fillRect(z, _ + 7, A, 1),
                      C.beginPath(),
                      C.moveTo(z, _ + 7 - B * f.clamp(0.4 * J(0), -2, 2)));
                    for (var te = 0; te < A; te += 1)
                      C.lineTo(z + te, _ + 7 - (te < D ? B * f.clamp(0.4 * J(te), -2, 2) : 0));
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
                      var B = C[A];
                      if (!(!B.render.visible || !B.pointA || !B.pointB)) {
                        var D = B.bodyA,
                          H = B.bodyB,
                          G,
                          J;
                        if (
                          (D ? (G = p.add(D.position, B.pointA)) : (G = B.pointA),
                          B.render.type === 'pin')
                        )
                          (_.beginPath(), _.arc(G.x, G.y, 3, 0, 2 * Math.PI), _.closePath());
                        else {
                          if (
                            (H ? (J = p.add(H.position, B.pointB)) : (J = B.pointB),
                            _.beginPath(),
                            _.moveTo(G.x, G.y),
                            B.render.type === 'spring')
                          )
                            for (
                              var te = p.sub(J, G),
                                ee = p.perp(p.normalise(te)),
                                q = Math.ceil(f.clamp(B.length / 5, 12, 20)),
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
                        (B.render.lineWidth &&
                          ((_.lineWidth = B.render.lineWidth),
                          (_.strokeStyle = B.render.strokeStyle),
                          _.stroke()),
                          B.render.anchors &&
                            ((_.fillStyle = B.render.strokeStyle),
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
                    var B = C.options,
                      D = B.showInternalEdges || !B.wireframes,
                      H,
                      G,
                      J,
                      te;
                    for (J = 0; J < z.length; J++)
                      if (((H = z[J]), !!H.render.visible)) {
                        for (te = H.parts.length > 1 ? 1 : 0; te < H.parts.length; te++)
                          if (((G = H.parts[te]), !!G.render.visible)) {
                            if (
                              (B.showSleeping && H.isSleeping
                                ? (A.globalAlpha = 0.5 * G.render.opacity)
                                : G.render.opacity !== 1 && (A.globalAlpha = G.render.opacity),
                              G.render.sprite && G.render.sprite.texture && !B.wireframes)
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
                                  (!G.vertices[K - 1].isInternal || D
                                    ? A.lineTo(G.vertices[K].x, G.vertices[K].y)
                                    : A.moveTo(G.vertices[K].x, G.vertices[K].y),
                                    G.vertices[K].isInternal &&
                                      !D &&
                                      A.moveTo(
                                        G.vertices[(K + 1) % G.vertices.length].x,
                                        G.vertices[(K + 1) % G.vertices.length].y
                                      ));
                                (A.lineTo(G.vertices[0].x, G.vertices[0].y), A.closePath());
                              }
                              B.wireframes
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
                      B = C.options.showInternalEdges,
                      D,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((D = z[G]), !!D.render.visible))
                        for (te = D.parts.length > 1 ? 1 : 0; te < D.parts.length; te++) {
                          for (
                            H = D.parts[te], A.moveTo(H.vertices[0].x, H.vertices[0].y), J = 1;
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
                      (A.strokeStyle = C.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (i.bodyConvexHulls = function (C, z, _) {
                    var A = _,
                      B,
                      D,
                      H;
                    for (A.beginPath(), D = 0; D < z.length; D++)
                      if (((B = z[D]), !(!B.render.visible || B.parts.length === 1))) {
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
                  (i.vertexNumbers = function (C, z, _) {
                    var A = _,
                      B,
                      D,
                      H;
                    for (B = 0; B < z.length; B++) {
                      var G = z[B].parts;
                      for (H = G.length > 1 ? 1 : 0; H < G.length; H++) {
                        var J = G[H];
                        for (D = 0; D < J.vertices.length; D++)
                          ((A.fillStyle = 'rgba(255,255,255,0.2)'),
                            A.fillText(
                              B + '_' + D,
                              J.position.x + (J.vertices[D].x - J.position.x) * 0.8,
                              J.position.y + (J.vertices[D].y - J.position.y) * 0.8
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
                    var B = C.options;
                    A.beginPath();
                    for (var D = 0; D < z.length; D++) {
                      var H = z[D];
                      if (H.render.visible)
                        for (var G = z[D].parts, J = G.length > 1 ? 1 : 0; J < G.length; J++) {
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
                  (i.bodyAxes = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var B = C.options,
                      D,
                      H,
                      G,
                      J;
                    for (A.beginPath(), H = 0; H < z.length; H++) {
                      var te = z[H],
                        ee = te.parts;
                      if (te.render.visible)
                        if (B.showAxes)
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (D = ee[G], J = 0; J < D.axes.length; J++) {
                              var q = D.axes[J];
                              (A.moveTo(D.position.x, D.position.y),
                                A.lineTo(D.position.x + q.x * 20, D.position.y + q.y * 20));
                            }
                        else
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (D = ee[G], J = 0; J < D.axes.length; J++)
                              (A.moveTo(D.position.x, D.position.y),
                                A.lineTo(
                                  (D.vertices[0].x + D.vertices[D.vertices.length - 1].x) / 2,
                                  (D.vertices[0].y + D.vertices[D.vertices.length - 1].y) / 2
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
                  (i.bodyPositions = function (C, z, _) {
                    var A = _;
                    C.engine;
                    var B = C.options,
                      D,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((D = z[G]), !!D.render.visible))
                        for (J = 0; J < D.parts.length; J++)
                          ((H = D.parts[J]),
                            A.arc(H.position.x, H.position.y, 3, 0, 2 * Math.PI, !1),
                            A.closePath());
                    for (
                      B.wireframes
                        ? (A.fillStyle = 'indianred')
                        : (A.fillStyle = 'rgba(0,0,0,0.5)'),
                        A.fill(),
                        A.beginPath(),
                        G = 0;
                      G < z.length;
                      G++
                    )
                      ((D = z[G]),
                        D.render.visible &&
                          (A.arc(D.positionPrev.x, D.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          A.closePath()));
                    ((A.fillStyle = 'rgba(255,165,0,0.8)'), A.fill());
                  }),
                  (i.bodyVelocity = function (C, z, _) {
                    var A = _;
                    A.beginPath();
                    for (var B = 0; B < z.length; B++) {
                      var D = z[B];
                      if (D.render.visible) {
                        var H = d.getVelocity(D);
                        (A.moveTo(D.position.x, D.position.y),
                          A.lineTo(D.position.x + H.x, D.position.y + H.y));
                      }
                    }
                    ((A.lineWidth = 3), (A.strokeStyle = 'cornflowerblue'), A.stroke());
                  }),
                  (i.bodyIds = function (C, z, _) {
                    var A = _,
                      B,
                      D;
                    for (B = 0; B < z.length; B++)
                      if (z[B].render.visible) {
                        var H = z[B].parts;
                        for (D = H.length > 1 ? 1 : 0; D < H.length; D++) {
                          var G = H[D];
                          ((A.font = '12px Arial'),
                            (A.fillStyle = 'rgba(255,255,255,0.5)'),
                            A.fillText(G.id, G.position.x + 10, G.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (C, z, _) {
                    var A = _,
                      B = C.options,
                      D,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((D = z[G]), !!D.isActive))
                        for (H = D.collision, J = 0; J < D.contactCount; J++) {
                          var te = D.contacts[J],
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
                      G < z.length;
                      G++
                    )
                      if (((D = z[G]), !!D.isActive && ((H = D.collision), D.contactCount > 0))) {
                        var q = D.contacts[0].vertex.x,
                          K = D.contacts[0].vertex.y;
                        (D.contactCount === 2 &&
                          ((q = (D.contacts[0].vertex.x + D.contacts[1].vertex.x) / 2),
                          (K = (D.contacts[0].vertex.y + D.contacts[1].vertex.y) / 2)),
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
                  (i.separations = function (C, z, _) {
                    var A = _,
                      B = C.options,
                      D,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), te = 0; te < z.length; te++)
                      if (((D = z[te]), !!D.isActive)) {
                        ((H = D.collision), (G = H.bodyA), (J = H.bodyB));
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
                  (i.inspector = function (C, z) {
                    C.engine;
                    var _ = C.selected,
                      A = C.render,
                      B = A.options,
                      D;
                    if (B.hasBounds) {
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
                          ((D = q.bounds),
                            z.beginPath(),
                            z.rect(
                              Math.floor(D.min.x - 3),
                              Math.floor(D.min.y - 3),
                              Math.floor(D.max.x - D.min.x + 6),
                              Math.floor(D.max.y - D.min.y + 6)
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
                      (D = C.selectBounds),
                      z.beginPath(),
                      z.rect(
                        Math.floor(D.min.x),
                        Math.floor(D.min.y),
                        Math.floor(D.max.x - D.min.x),
                        Math.floor(D.max.y - D.min.y)
                      ),
                      z.closePath(),
                      z.stroke(),
                      z.fill(),
                      z.translate(-0.5, -0.5)),
                      B.hasBounds && z.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (C, z) {
                    var _ = C.engine,
                      A = C.timing,
                      B = A.historySize,
                      D = _.timing.timestamp;
                    ((A.delta = z - A.lastTime || i._goodDelta),
                      (A.lastTime = z),
                      (A.timestampElapsed = D - A.lastTimestamp || 0),
                      (A.lastTimestamp = D),
                      A.deltaHistory.unshift(A.delta),
                      (A.deltaHistory.length = Math.min(A.deltaHistory.length, B)),
                      A.engineDeltaHistory.unshift(_.timing.lastDelta),
                      (A.engineDeltaHistory.length = Math.min(A.engineDeltaHistory.length, B)),
                      A.timestampElapsedHistory.unshift(A.timestampElapsed),
                      (A.timestampElapsedHistory.length = Math.min(
                        A.timestampElapsedHistory.length,
                        B
                      )),
                      A.engineUpdatesHistory.unshift(_.timing.lastUpdatesPerFrame),
                      (A.engineUpdatesHistory.length = Math.min(A.engineUpdatesHistory.length, B)),
                      A.engineElapsedHistory.unshift(_.timing.lastElapsed),
                      (A.engineElapsedHistory.length = Math.min(A.engineElapsedHistory.length, B)),
                      A.elapsedHistory.unshift(A.lastElapsed),
                      (A.elapsedHistory.length = Math.min(A.elapsedHistory.length, B)));
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
                  O = function (C) {
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
                        O = o.frameDeltaHistory.slice(
                          R.length * i._smoothingLowerBound,
                          R.length * i._smoothingUpperBound
                        ),
                        w = m(O);
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
                        B = _ + (i._elapsedNextEstimate * A) / v;
                      if (v >= L || B > o.maxFrameTime) {
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
                    O,
                    w = [],
                    L,
                    C,
                    z = 0,
                    _ = 0,
                    A = 0;
                  c = c || 15;
                  var B = function (H, G, J) {
                      var te = J % 2 === 1 && J > 1;
                      if (!R || H != R.x || G != R.y) {
                        R && te ? ((L = R.x), (C = R.y)) : ((L = 0), (C = 0));
                        var ee = { x: L + H, y: C + G };
                        ((te || !R) && (R = ee), w.push(ee), (_ = L + H), (A = C + G));
                      }
                    },
                    D = function (H) {
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
                        B(_, A, H.pathSegType);
                      }
                    };
                  for (
                    i._svgPathToAbsolute(f), p = f.getTotalLength(), y = [], m = 0;
                    m < f.pathSegList.numberOfItems;
                    m += 1
                  )
                    y.push(f.pathSegList.getItem(m));
                  for (v = y.concat(); z < p; ) {
                    if (((O = f.getPathSegAtLength(z)), (r = y[O]), r != E)) {
                      for (; v.length && v[0] != r; ) D(v.shift());
                      E = r;
                    }
                    switch (r.pathSegTypeAsLetter.toUpperCase()) {
                      case 'C':
                      case 'T':
                      case 'S':
                      case 'Q':
                      case 'A':
                        ((g = f.getPointAtLength(z)), B(g.x, g.y, 0));
                        break;
                    }
                    z += c;
                  }
                  for (m = 0, o = v.length; m < o; ++m) D(v[m]);
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
                        O = 0;
                      O < R;
                      ++O
                    ) {
                      var w = y.getItem(O),
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
                            y.replaceItem(f.createSVGPathSegMovetoAbs(v, E), O);
                            break;
                          case 'l':
                            y.replaceItem(f.createSVGPathSegLinetoAbs(v, E), O);
                            break;
                          case 'h':
                            y.replaceItem(f.createSVGPathSegLinetoHorizontalAbs(v), O);
                            break;
                          case 'v':
                            y.replaceItem(f.createSVGPathSegLinetoVerticalAbs(E), O);
                            break;
                          case 'c':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicAbs(v, E, o, p, g, r), O);
                            break;
                          case 's':
                            y.replaceItem(f.createSVGPathSegCurvetoCubicSmoothAbs(v, E, g, r), O);
                            break;
                          case 'q':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticAbs(v, E, o, p), O);
                            break;
                          case 't':
                            y.replaceItem(f.createSVGPathSegCurvetoQuadraticSmoothAbs(v, E), O);
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
                              O
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
      })(Fu)),
    Fu.exports
  );
}
var q1 = Y1();
const Ue = r0(q1),
  sn = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  V1 = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  X1 = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  Q1 = {
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
  Z1 = {
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
  Zh = (s, b) => {
    const T = String(b).padStart(2, '0');
    return `images/${s}/level${T}.png`;
  },
  K1 = 256,
  uh = {
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
  J1 = (s) => (s * (s + 1)) / 2,
  k1 = (s) => ({
    id: s,
    level: s,
    name: Q1[s],
    theme: Z1[s],
    radius: V1[s],
    restitution: X1[s],
    friction: 0.3,
    density: 0.001,
    score: J1(s),
    svgPath: Zh(Qc, s),
    color: uh[s].color,
    glowColor: uh[s].glow,
  }),
  qa = 10,
  er = Object.fromEntries(Array.from({ length: qa }, (s, b) => b + 1).map((s) => [s, k1(s)]));
Array.from({ length: qa }, (s, b) => er[b + 1]);
const F1 = 3,
  $1 = 360,
  W1 = (s) => Math.min(1, s / $1),
  rh = new Map(),
  _l = (s, b, T = Qc) => {
    const x = `${s}|${b}|${T}`,
      h = rh.get(x);
    if (h) return h;
    const i = er[s],
      d = { ...i, radius: i.radius * W1(b), svgPath: Zh(T, s) };
    return (rh.set(x, d), d);
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
  Kh = Vn.wall | Vn.item | Vn.magnetTarget,
  P1 = Vn.wall | Vn.magnetTarget,
  Pt = {
    gaugeMax: 100,
    bonusOnLevel10Created: 8,
    bonusOnSpecialElimination: 25,
    shake: { impulseMin: 0.04, impulseMax: 0.12, upwardBias: 0.05 },
    gravityFlip: { durationMs: 3e3, multiplier: -0.8 },
    magnet: { durationMs: 2500, forceMagnitude: 0.005 },
  },
  I1 = (s) => s,
  Jh = typeof window < 'u' && typeof window.localStorage < 'u',
  tr = (s) => {
    if (!Jh) return null;
    try {
      return window.localStorage.getItem(s);
    } catch {
      return null;
    }
  },
  nr = (s, b) => {
    if (Jh)
      try {
        window.localStorage.setItem(s, b);
      } catch {}
  },
  eS = () => {
    const s = tr(sn.storageKeys.bestScore);
    if (s === null) return 0;
    const b = Number(s);
    return Number.isFinite(b) ? b : 0;
  },
  tS = (s) => {
    nr(sn.storageKeys.bestScore, String(s));
  },
  nS = () => {
    const s = tr(sn.storageKeys.scoreHistory);
    if (s === null) return [];
    try {
      const b = JSON.parse(s);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  aS = (s) => {
    const b = [s, ...nS()].slice(0, sn.maxScoreHistory);
    return (nr(sn.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  lS = () => {
    const s = tr(sn.storageKeys.isSoundOn);
    return s === null ? !0 : s === 'true';
  },
  iS = (s) => {
    nr(sn.storageKeys.isSoundOn, String(s));
  },
  uS = () => {
    const s = tr(sn.storageKeys.themeId);
    return jh(s) ? s : Qc;
  },
  rS = (s) => {
    nr(sn.storageKeys.themeId, s);
  },
  sS = () => {
    const [s, b] = N.useState(0),
      [T, x] = N.useState(0),
      [h, i] = N.useState(!1),
      d = N.useRef(0),
      f = N.useRef(0);
    N.useEffect(() => {
      const p = eS();
      ((f.current = p), x(p));
    }, []);
    const c = N.useCallback((p) => {
        ((d.current += p), b(d.current));
      }, []),
      m = N.useCallback(() => {
        ((d.current = 0), b(0), i(!1));
      }, []),
      o = N.useCallback(() => {
        const p = d.current,
          g = p > f.current;
        return (
          g && ((f.current = p), tS(p), x(p)),
          aS(p),
          i(g),
          { isNewRecord: g, finalScore: p }
        );
      }, []);
    return { score: s, bestScore: T, isNewRecord: h, add: c, reset: m, finalize: o };
  },
  cS = (s) => `/ochimono-game/${s}`.replace(/\/{2,}/g, '/'),
  oS = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  fS = 0.7,
  dS = () => {
    if (typeof window > 'u') return null;
    const s = window;
    return s.AudioContext ?? s.webkitAudioContext ?? null;
  },
  mS = () => {
    const [s, b] = N.useState(!0),
      T = N.useRef(null),
      x = N.useRef({});
    (N.useEffect(() => {
      b(lS());
    }, []),
      N.useEffect(() => {
        const d = dS();
        if (!d) return;
        const f = new d();
        T.current = f;
        let c = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, p] of Object.entries(oS))
              try {
                const r = await (await fetch(cS(p))).arrayBuffer();
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
          return (iS(f), f);
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
          ((o.gain.value = fS), m.connect(o).connect(f.destination), m.start(0));
        },
        [s]
      );
    return { isSoundOn: s, toggle: h, play: i };
  },
  sh = (s, b, T, x) => {
    const h = Ue.Bodies.circle(b, T, s.radius, {
      restitution: s.restitution,
      friction: s.friction,
      density: s.density,
      label: `item-${s.level}`,
      collisionFilter: { category: Vn.item, mask: Kh },
    });
    return ((h.plugin.itemData = { level: s.level, consumed: !1, droppedAt: x }), h);
  },
  ya = (s) => s.plugin.itemData,
  hS = (s, b) => {
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
  vS = (s, b) => ({ x: (s.position.x + b.position.x) / 2, y: (s.position.y + b.position.y) / 2 }),
  gS = (s) => (s < 2 || s > qa ? 0 : er[s].score),
  yS = () => er[qa].score,
  ch = new Map(),
  kh = (s) => {
    const b = ch.get(s);
    if (b) return b;
    const T = `/ochimono-game/${s}`.replace(/\/{2,}/g, '/');
    return (ch.set(s, T), T);
  },
  _c = (s, b) => {
    const T = (b.radius * 2) / K1;
    s.render.sprite = { texture: kh(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  oh = new Set(),
  fh = (s) => {
    for (let b = 1; b <= qa; b += 1) {
      const T = _l(b, 1, s),
        x = kh(T.svgPath);
      if (oh.has(x)) continue;
      oh.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  pS = ({ fieldWidth: s, fieldHeight: b }) => {
    const T = N.useRef(null),
      x = N.useRef(null),
      h = N.useRef(null),
      i = N.useRef(null),
      d = N.useRef(null),
      [f, c] = N.useState('idle'),
      [m, o] = N.useState(null),
      [p, g] = N.useState(null),
      r = N.useRef(null),
      y = N.useRef(null),
      v = N.useCallback((ue) => {
        ((r.current = ue), o(ue));
      }, []),
      E = N.useCallback((ue) => {
        ((y.current = ue), g(ue));
      }, []),
      R = N.useRef(!0),
      O = N.useRef(0),
      w = N.useRef('idle'),
      L = N.useRef(null),
      C = N.useRef(s),
      z = N.useRef(b),
      [_, A] = N.useState(() => uS()),
      B = N.useRef(_);
    B.current = _;
    const D = sS(),
      H = mS(),
      G = N.useRef(D.add);
    G.current = D.add;
    const J = N.useRef(H.play);
    J.current = H.play;
    const te = N.useRef(D.finalize);
    te.current = D.finalize;
    const [ee, q] = N.useState(0),
      K = N.useRef(0),
      ne = N.useCallback((ue) => {
        ((K.current = ue), q(ue));
      }, []),
      se = N.useCallback(
        (ue) => {
          const Me = Math.min(Pt.gaugeMax, K.current + ue);
          Me !== K.current && ne(Me);
        },
        [ne]
      ),
      de = N.useRef(se);
    de.current = se;
    const [j, F] = N.useState(!1),
      [ae, le] = N.useState(!1),
      oe = N.useRef(!1),
      [ie, he] = N.useState(!1),
      ge = N.useRef(null),
      Ae = N.useRef(null),
      Ze = N.useRef(null),
      it = N.useRef(null),
      Xe = N.useRef(new Set()),
      pa = N.useCallback((ue) => {
        ((ue.collisionFilter.category = Vn.magnetTarget),
          (ue.collisionFilter.mask = P1),
          Xe.current.add(ue));
      }, []),
      bt = N.useCallback(() => {
        for (const ue of Xe.current)
          ((ue.collisionFilter.category = Vn.item), (ue.collisionFilter.mask = Kh));
        Xe.current.clear();
      }, []),
      Kn = N.useCallback(() => {
        (bt(),
          (Ze.current = null),
          (it.current = null),
          ge.current === 'magnet' && (ge.current = null));
      }, [bt]),
      cn = N.useRef(Kn);
    cn.current = Kn;
    const on = N.useRef(null),
      [Jn, dt] = N.useState(null),
      Yt = N.useRef(null),
      ut = N.useRef(new Set()),
      fn = N.useCallback(() => {
        const ue = Math.floor(Math.random() * F1) + 1;
        return _l(ue, C.current, B.current);
      }, []);
    N.useEffect(() => {
      const ue = T.current;
      if (!ue) return;
      const Me = C.current,
        ze = z.current,
        Se = Ue.Engine.create({ gravity: { x: 0, y: qn.gravityY } }),
        xe = Ue.Render.create({
          element: ue,
          engine: Se,
          options: {
            width: Me,
            height: ze,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: we, leftWall: Ke, rightWall: $e } = hS(Me, ze);
      ([we, Ke, $e].forEach((et) => {
        et.render.visible = !1;
      }),
        Ue.World.add(Se.world, [we, Ke, $e]),
        Ue.Render.run(xe));
      const Je = Ue.Runner.create();
      (Ue.Runner.run(Je, Se), (x.current = Se), (h.current = xe), (i.current = Je));
      for (const et of Xc) fh(et.id);
      const Ie = () => {
        document.hidden
          ? (Ue.Runner.stop(Je), Ue.Render.stop(xe))
          : (Ue.Render.run(xe), Ue.Runner.run(Je, Se));
      };
      document.addEventListener('visibilitychange', Ie);
      const ct = ut.current;
      return () => {
        (document.removeEventListener('visibilitychange', Ie),
          Ue.Runner.stop(Je),
          Ue.Render.stop(xe),
          Ue.World.clear(Se.world, !1),
          Ue.Engine.clear(Se),
          xe.canvas.parentNode && xe.canvas.parentNode.removeChild(xe.canvas),
          (xe.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          ct.clear());
      };
    }, []);
    const Sa = N.useCallback((ue, Me) => {
      var ct;
      const ze = x.current;
      if (!ze) return;
      const Se = ya(ue),
        xe = ya(Me);
      if (!Se || !xe || Se.consumed || xe.consumed || Se.level !== xe.level) return;
      ((Se.consumed = !0), (xe.consumed = !0));
      const we = Se.level + 1,
        Ke = vS(ue, Me);
      (Ue.World.remove(ze.world, [ue, Me]), ut.current.delete(ue), ut.current.delete(Me));
      let $e = 0,
        Je = !1,
        Ie = I1(we);
      if (we > qa)
        (($e = yS()), (Je = !0), (Ie += Pt.bonusOnSpecialElimination), J.current('special'));
      else {
        const et = _l(we, C.current, B.current),
          wt = sh(et, Ke.x, Ke.y, performance.now());
        (_c(wt, et),
          Ue.World.add(ze.world, wt),
          ut.current.add(wt),
          ($e = gS(we)),
          (Je = we === qa),
          Je && (Ie += Pt.bonusOnLevel10Created),
          J.current(Je ? 'special' : 'merge'));
      }
      (G.current($e),
        de.current(Ie),
        (ct = d.current) == null || ct.add({ x: Ke.x, y: Ke.y, score: $e, isSpecial: Je }));
    }, []);
    (N.useEffect(() => {
      const ue = x.current;
      if (!ue) return;
      const Me = (ze) => {
        for (const Se of ze.pairs) Sa(Se.bodyA, Se.bodyB);
      };
      return (
        Ue.Events.on(ue, 'collisionStart', Me),
        () => {
          Ue.Events.off(ue, 'collisionStart', Me);
        }
      );
    }, [Sa]),
      N.useEffect(() => {
        const ue = x.current;
        if (!ue) return;
        const Me = qn.gameOverLineOffset;
        let ze = 0;
        const Se = () => {
            ((on.current = null), Yt.current !== null && ((Yt.current = null), dt(null)));
          },
          xe = () => {
            if (Ze.current !== null)
              if (performance.now() >= Ze.current) cn.current();
              else {
                const et = [];
                for (const wt of Xe.current) {
                  const xn = ya(wt);
                  xn && !xn.consumed && et.push(wt);
                }
                if (et.length >= 2) {
                  let wt = 0,
                    xn = 0;
                  for (const qt of et) ((wt += qt.position.x), (xn += qt.position.y));
                  ((wt /= et.length), (xn /= et.length));
                  for (const qt of et) {
                    const Va = wt - qt.position.x,
                      Nl = xn - qt.position.y,
                      Xa = Math.hypot(Va, Nl);
                    if (Xa < 1) continue;
                    const tn = Pt.magnet.forceMagnitude * qt.mass;
                    Ue.Body.applyForce(qt, qt.position, { x: (Va / Xa) * tn, y: (Nl / Xa) * tn });
                  }
                } else cn.current();
              }
            if (w.current !== 'playing' || ((ze = (ze + 1) % 6), ze !== 0)) return;
            const we = performance.now();
            let Ke = !1;
            for (const ct of ut.current) {
              const et = ya(ct);
              if (
                !(!et || et.consumed) &&
                !(we - et.droppedAt < qn.gameOverGracePeriodMs) &&
                !(Math.abs(ct.velocity.y) > qn.restingVelocityThreshold) &&
                ct.position.y - ct.circleRadius < Me
              ) {
                Ke = !0;
                break;
              }
            }
            if (!Ke) {
              Se();
              return;
            }
            on.current === null && (on.current = we);
            const $e = we - on.current,
              Je = qn.gameOverDangerLimitMs;
            if ($e >= Je) {
              (Se(), (w.current = 'gameover'), c('gameover'));
              const ct = te.current();
              J.current(ct.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const Ie = Math.max(1, Math.ceil((Je - $e) / 1e3));
            Ie !== Yt.current && ((Yt.current = Ie), dt(Ie));
          };
        return (
          Ue.Events.on(ue, 'afterUpdate', xe),
          () => {
            Ue.Events.off(ue, 'afterUpdate', xe);
          }
        );
      }, []),
      N.useEffect(() => {
        if (x.current) {
          fh(_);
          for (const Se of ut.current) {
            const xe = ya(Se);
            if (!xe || xe.consumed) continue;
            const we = _l(xe.level, C.current, _);
            _c(Se, we);
          }
        }
        const Me = r.current ? _l(r.current.level, C.current, _) : null,
          ze = y.current ? _l(y.current.level, C.current, _) : null;
        (v(Me), E(ze));
      }, [_, v, E]));
    const st = N.useCallback((ue) => {
        (A(ue), rS(ue));
      }, []),
      Ot = N.useCallback((ue) => {
        ((oe.current = ue), le(ue));
      }, []),
      Dt = N.useCallback(() => {
        ne(0);
      }, [ne]),
      xa = N.useCallback(() => {
        if (!x.current) return;
        ge.current = 'shake';
        const { impulseMin: Me, impulseMax: ze, upwardBias: Se } = Pt.shake;
        for (const xe of ut.current) {
          const we = ya(xe);
          if (!we || we.consumed) continue;
          const Ke = Math.random() * Math.PI * 2,
            $e = Me + Math.random() * (ze - Me),
            Je = Math.cos(Ke) * $e * xe.mass,
            Ie = (Math.sin(Ke) * $e - Se) * xe.mass;
          Ue.Body.applyForce(xe, xe.position, { x: Je, y: Ie });
        }
        (J.current('special'), (ge.current = null));
      }, []),
      yn = N.useCallback(() => {
        const ue = x.current;
        if (!ue || Ae.current !== null) return;
        ge.current = 'gravityFlip';
        const Me = ue.gravity.y;
        ((ue.gravity.y = Me * Pt.gravityFlip.multiplier),
          he(!0),
          J.current('special'),
          (Ae.current = window.setTimeout(() => {
            const ze = x.current;
            (ze && (ze.gravity.y = Me),
              he(!1),
              (Ae.current = null),
              ge.current === 'gravityFlip' && (ge.current = null));
          }, Pt.gravityFlip.durationMs)));
      }, []),
      pn = N.useCallback(() => {
        ((ge.current = 'magnet'), Ot(!0));
      }, [Ot]),
      Sn = N.useCallback(() => {
        oe.current && (Ot(!1), (ge.current = null));
      }, [Ot]),
      ar = N.useCallback(
        (ue, Me) => {
          if (!oe.current) return;
          const ze = Array.from(ut.current),
            Se = Ue.Query.point(ze, { x: ue, y: Me });
          if (Se.length === 0) return;
          const xe = ya(Se[0]);
          if (!xe) return;
          const we = ze.filter((Ke) => {
            var $e;
            return (($e = ya(Ke)) == null ? void 0 : $e.level) === xe.level;
          });
          if (!(we.length < 2)) {
            for (const Ke of we) pa(Ke);
            ((it.current = xe.level),
              (Ze.current = performance.now() + Pt.magnet.durationMs),
              Ot(!1),
              J.current('special'),
              Dt());
          }
        },
        [Dt, Ot, pa]
      ),
      lr = N.useCallback(() => {
        K.current < Pt.gaugeMax || (w.current === 'playing' && F(!0));
      }, []),
      Ea = N.useCallback(() => {
        F(!1);
      }, []),
      St = N.useCallback(
        (ue) => {
          K.current < Pt.gaugeMax ||
            (F(!1),
            ue === 'shake'
              ? (xa(), Dt())
              : ue === 'gravityFlip'
                ? (yn(), Dt())
                : ue === 'magnet' && pn());
        },
        [xa, yn, pn, Dt]
      ),
      en = N.useCallback(() => {
        Ae.current !== null && (window.clearTimeout(Ae.current), (Ae.current = null));
        const ue = x.current;
        (ue && (ue.gravity.y = qn.gravityY),
          he(!1),
          bt(),
          (Ze.current = null),
          (it.current = null),
          (ge.current = null),
          F(!1),
          Ot(!1),
          ne(0));
      }, [Ot, ne, bt]),
      xt = N.useCallback(
        (ue) => {
          const Me = x.current;
          if (!Me || w.current !== 'playing' || !R.current) return;
          const ze = r.current;
          if (!ze) return;
          const Se = performance.now();
          if (Se - O.current < sn.dropCooldownMs) return;
          const xe = Math.max(0, Math.min(1, ue)),
            we = ze.radius + qn.wallThickness / 2,
            Ke = we,
            $e = C.current - we,
            Je = Ke + xe * ($e - Ke),
            Ie = ze.radius + 4,
            ct = sh(ze, Je, Ie, Se);
          (_c(ct, ze),
            Ue.World.add(Me.world, ct),
            ut.current.add(ct),
            J.current('drop'),
            (R.current = !1),
            (O.current = Se),
            L.current !== null && window.clearTimeout(L.current),
            (L.current = window.setTimeout(() => {
              ((L.current = null),
                w.current === 'playing' && (v(y.current), E(fn()), (R.current = !0)));
            }, sn.dropCooldownMs)));
        },
        [fn, v, E]
      ),
      wl = N.useCallback(() => {
        var ue;
        (D.reset(),
          (ue = d.current) == null || ue.clear(),
          en(),
          (on.current = null),
          (Yt.current = null),
          dt(null),
          v(fn()),
          E(fn()),
          (R.current = !0),
          (O.current = 0),
          (w.current = 'playing'),
          c('playing'));
      }, [D, fn, en, v, E]),
      ir = N.useCallback(() => {
        const ue = x.current;
        if (ue) {
          for (const Me of ut.current) Ue.World.remove(ue.world, Me);
          ut.current.clear();
        }
        (L.current !== null && (window.clearTimeout(L.current), (L.current = null)), wl());
      }, [wl]),
      ur = qn.gameOverLineOffset;
    return {
      status: f,
      score: D.score,
      bestScore: D.bestScore,
      isNewRecord: D.isNewRecord,
      currentItem: m,
      nextItem: p,
      isSoundOn: H.isSoundOn,
      themeId: _,
      mergeEffectRef: d,
      canvasContainerRef: T,
      drop: xt,
      start: wl,
      restart: ir,
      toggleSound: H.toggle,
      setThemeId: st,
      fieldWidth: s,
      fieldHeight: b,
      gameOverLineY: ur,
      skillGauge: ee,
      skillGaugeMax: Pt.gaugeMax,
      isSkillReady: ee >= Pt.gaugeMax,
      isSkillMenuOpen: j,
      openSkillMenu: lr,
      closeSkillMenu: Ea,
      selectSkill: St,
      isMagnetSelecting: ae,
      cancelMagnetSelecting: Sn,
      selectMagnetTarget: ar,
      isGravityFlipped: ie,
      gameOverCountdown: Jn,
    };
  },
  SS = ({ size: s }) => {
    const b = pS({ fieldWidth: s.width, fieldHeight: s.height }),
      [T, x] = N.useState(!1),
      h = N.useCallback(() => x(!0), []),
      i = N.useCallback(() => x(!1), []);
    return W.jsxs(W.Fragment, {
      children: [
        W.jsx(j1, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          onOpenSettings: h,
        }),
        W.jsx('main', {
          className: Ya.main,
          children: W.jsxs('div', {
            className: Ya.field_wrapper,
            style: { width: `${s.width}px`, height: `${s.height}px` },
            children: [
              W.jsx(Cp, {
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
              W.jsx(Hh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              W.jsx(Uh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              W.jsx(Bh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? W.jsx('div', {
                    className: Ya.skill_button_wrapper,
                    children: W.jsx(qh, {
                      ratio: b.skillGauge / b.skillGaugeMax,
                      isReady: b.isSkillReady,
                      onClick: b.openSkillMenu,
                    }),
                  })
                : null,
              b.status === 'idle' ? W.jsx(kp, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? W.jsx(Up, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
        W.jsx(Vh, { open: b.isSkillMenuOpen, onSelect: b.selectSkill, onClose: b.closeSkillMenu }),
        W.jsx(Yh, {
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
  xS = () => {
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
        ? W.jsxs('div', {
            className: Ya.layout,
            children: [
              W.jsx('div', { className: Ya.top_bar_placeholder, 'aria-hidden': 'true' }),
              W.jsx('main', { ref: s, className: Ya.main }),
            ],
          })
        : W.jsx('div', { className: Ya.layout, children: W.jsx(SS, { size: b }) })
    );
  },
  ES = () => W.jsx('div', { className: ip.index, children: W.jsx(xS, {}) }),
  bS = () => W.jsx('div', { children: W.jsx('h1', { children: 'Not Found' }) });
function TS() {
  return W.jsxs(W.Fragment, {
    children: [
      W.jsxs(vy, {
        children: [
          W.jsx(Dc, { path: '/', element: W.jsx(ES, {}) }),
          W.jsx(Dc, { path: '*', element: W.jsx(bS, {}) }),
        ],
      }),
      W.jsx(ap, {}),
    ],
  });
}
const Fh = document.getElementById('root');
if (!Fh) throw new Error('Failed to find #root element');
y0.createRoot(Fh).render(W.jsx(Gy, { basename: '/ochimono-game', children: W.jsx(TS, {}) }));
