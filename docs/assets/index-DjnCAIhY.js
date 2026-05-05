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
var Um =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function ag(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
var dc = { exports: {} },
  Ei = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hm;
function lg() {
  if (Hm) return Ei;
  Hm = 1;
  var c = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.fragment');
  function T(x, h, i) {
    var d = null;
    if ((i !== void 0 && (d = '' + i), h.key !== void 0 && (d = '' + h.key), 'key' in h)) {
      i = {};
      for (var f in h) f !== 'key' && (i[f] = h[f]);
    } else i = h;
    return ((h = i.ref), { $$typeof: c, type: x, key: d, ref: h !== void 0 ? h : null, props: i });
  }
  return ((Ei.Fragment = b), (Ei.jsx = T), (Ei.jsxs = T), Ei);
}
var Lm;
function ig() {
  return (Lm || ((Lm = 1), (dc.exports = lg())), dc.exports);
}
var I = ig(),
  mc = { exports: {} },
  bi = {},
  hc = { exports: {} },
  vc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm;
function ug() {
  return (
    jm ||
      ((jm = 1),
      (function (c) {
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
            else if (K.startTime <= q) (x(m), (K.sortIndex = K.expirationTime), b(s, K));
            else break;
            K = T(m);
          }
        }
        function M(q) {
          if (((v = !1), L(q), !y))
            if (T(s) !== null) ((y = !0), z || ((z = !0), G()));
            else {
              var K = T(m);
              K !== null && ee(M, K.startTime - q);
            }
        }
        var z = !1,
          D = -1,
          A = 5,
          N = -1;
        function _() {
          return E ? !0 : !(c.unstable_now() - N < A);
        }
        function H() {
          if (((E = !1), z)) {
            var q = c.unstable_now();
            N = q;
            var K = !0;
            try {
              e: {
                ((y = !1), v && ((v = !1), O(D), (D = -1)), (r = !0));
                var ne = g;
                try {
                  t: {
                    for (L(q), p = T(s); p !== null && !(p.expirationTime > q && _()); ) {
                      var se = p.callback;
                      if (typeof se == 'function') {
                        ((p.callback = null), (g = p.priorityLevel));
                        var de = se(p.expirationTime <= q);
                        if (((q = c.unstable_now()), typeof de == 'function')) {
                          ((p.callback = de), L(q), (K = !0));
                          break t;
                        }
                        (p === T(s) && x(s), L(q));
                      } else x(s);
                      p = T(s);
                    }
                    if (p !== null) K = !0;
                    else {
                      var j = T(m);
                      (j !== null && ee(M, j.startTime - q), (K = !1));
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
          D = R(function () {
            q(c.unstable_now());
          }, K);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (c.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (A = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (c.unstable_next = function (q) {
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
          (c.unstable_requestPaint = function () {
            E = !0;
          }),
          (c.unstable_runWithPriority = function (q, K) {
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
          (c.unstable_scheduleCallback = function (q, K, ne) {
            var se = c.unstable_now();
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
                  T(s) === null && q === T(m) && (v ? (O(D), (D = -1)) : (v = !0), ee(M, ne - se)))
                : ((q.sortIndex = de), b(s, q), y || r || ((y = !0), z || ((z = !0), G()))),
              q
            );
          }),
          (c.unstable_shouldYield = _),
          (c.unstable_wrapCallback = function (q) {
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
      })(vc)),
    vc
  );
}
var Gm;
function rg() {
  return (Gm || ((Gm = 1), (hc.exports = ug())), hc.exports);
}
var gc = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function sg() {
  if (Ym) return ge;
  Ym = 1;
  var c = Symbol.for('react.transitional.element'),
    b = Symbol.for('react.portal'),
    T = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
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
  var M = Array.isArray;
  function z() {}
  var D = { H: null, A: null, T: null, S: null },
    A = Object.prototype.hasOwnProperty;
  function N(j, F, ae) {
    var le = ae.ref;
    return { $$typeof: c, type: j, key: F, ref: le !== void 0 ? le : null, props: ae };
  }
  function _(j, F) {
    return N(j.type, F, j.props);
  }
  function H(j) {
    return typeof j == 'object' && j !== null && j.$$typeof === c;
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
            case c:
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
            q(oe, F, ae, '', function (Ze) {
              return Ze;
            }))
          : oe != null &&
            (H(oe) &&
              (oe = _(
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
    (ge.Suspense = s),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return D.H.useMemoCache(j);
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
      var F = D.T,
        ae = {};
      D.T = ae;
      try {
        var le = j(),
          oe = D.S;
        (oe !== null && oe(ae, le),
          typeof le == 'object' && le !== null && typeof le.then == 'function' && le.then(z, se));
      } catch (ie) {
        se(ie);
      } finally {
        (F !== null && ae.types !== null && (F.types = ae.types), (D.T = F));
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (ge.use = function (j) {
      return D.H.use(j);
    }),
    (ge.useActionState = function (j, F, ae) {
      return D.H.useActionState(j, F, ae);
    }),
    (ge.useCallback = function (j, F) {
      return D.H.useCallback(j, F);
    }),
    (ge.useContext = function (j) {
      return D.H.useContext(j);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (j, F) {
      return D.H.useDeferredValue(j, F);
    }),
    (ge.useEffect = function (j, F) {
      return D.H.useEffect(j, F);
    }),
    (ge.useEffectEvent = function (j) {
      return D.H.useEffectEvent(j);
    }),
    (ge.useId = function () {
      return D.H.useId();
    }),
    (ge.useImperativeHandle = function (j, F, ae) {
      return D.H.useImperativeHandle(j, F, ae);
    }),
    (ge.useInsertionEffect = function (j, F) {
      return D.H.useInsertionEffect(j, F);
    }),
    (ge.useLayoutEffect = function (j, F) {
      return D.H.useLayoutEffect(j, F);
    }),
    (ge.useMemo = function (j, F) {
      return D.H.useMemo(j, F);
    }),
    (ge.useOptimistic = function (j, F) {
      return D.H.useOptimistic(j, F);
    }),
    (ge.useReducer = function (j, F, ae) {
      return D.H.useReducer(j, F, ae);
    }),
    (ge.useRef = function (j) {
      return D.H.useRef(j);
    }),
    (ge.useState = function (j) {
      return D.H.useState(j);
    }),
    (ge.useSyncExternalStore = function (j, F, ae) {
      return D.H.useSyncExternalStore(j, F, ae);
    }),
    (ge.useTransition = function () {
      return D.H.useTransition();
    }),
    (ge.version = '19.2.5'),
    ge
  );
}
var qm;
function Oc() {
  return (qm || ((qm = 1), (gc.exports = sg())), gc.exports);
}
var yc = { exports: {} },
  gt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function cg() {
  if (Vm) return gt;
  Vm = 1;
  var c = Oc();
  function b(s) {
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
  function i(s, m, o) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: p == null ? null : '' + p,
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
    (gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (gt.createPortal = function (s, m) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(b(299));
      return i(s, m, null, o);
    }),
    (gt.flushSync = function (s) {
      var m = d.T,
        o = x.p;
      try {
        if (((d.T = null), (x.p = 2), s)) return s();
      } finally {
        ((d.T = m), (x.p = o), x.d.f());
      }
    }),
    (gt.preconnect = function (s, m) {
      typeof s == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
          : (m = null),
        x.d.C(s, m));
    }),
    (gt.prefetchDNS = function (s) {
      typeof s == 'string' && x.d.D(s);
    }),
    (gt.preinit = function (s, m) {
      if (typeof s == 'string' && m && typeof m.as == 'string') {
        var o = m.as,
          p = f(o, m.crossOrigin),
          g = typeof m.integrity == 'string' ? m.integrity : void 0,
          r = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        o === 'style'
          ? x.d.S(s, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: r,
            })
          : o === 'script' &&
            x.d.X(s, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: r,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (gt.preinitModule = function (s, m) {
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
    (gt.preload = function (s, m) {
      if (typeof s == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var o = m.as,
          p = f(o, m.crossOrigin);
        x.d.L(s, o, {
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
    (gt.preloadModule = function (s, m) {
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
    (gt.requestFormReset = function (s) {
      x.d.r(s);
    }),
    (gt.unstable_batchedUpdates = function (s, m) {
      return s(m);
    }),
    (gt.useFormState = function (s, m, o) {
      return d.H.useFormState(s, m, o);
    }),
    (gt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (gt.version = '19.2.5'),
    gt
  );
}
var Xm;
function og() {
  if (Xm) return yc.exports;
  Xm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (b) {
        console.error(b);
      }
  }
  return (c(), (yc.exports = cg()), yc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qm;
function fg() {
  if (Qm) return bi;
  Qm = 1;
  var c = rg(),
    b = Oc(),
    T = og();
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
    M = Symbol.for('react.suspense'),
    z = Symbol.for('react.suspense_list'),
    D = Symbol.for('react.memo'),
    A = Symbol.for('react.lazy'),
    N = Symbol.for('react.activity'),
    _ = Symbol.for('react.memo_cache_sentinel'),
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
        case D:
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
        e = (e = t.documentElement) && (e = e.namespaceURI) ? lm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = lm(t)), (e = im(t, e)));
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
      n = im(t, e.type);
    t !== n && (ae(oe, e), ae(le, n));
  }
  function Pe(e) {
    (oe.current === e && (F(le), F(oe)), he.current === e && (F(he), (yi._currentValue = ne)));
  }
  var Xe, Ha;
  function Dt(e) {
    if (Xe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Xe = (t && t[1]) || ''),
          (Ha =
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
      Ha
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
    return (n = e ? e.displayName || e.name : '') ? Dt(n) : '';
  }
  function ln(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dt(e.type);
      case 16:
        return Dt('Lazy');
      case 13:
        return e.child !== t && t !== null ? Dt('Suspense Fallback') : Dt('Suspense');
      case 19:
        return Dt('SuspenseList');
      case 0:
      case 15:
        return it(e.type, !1);
      case 11:
        return it(e.type.render, !1);
      case 1:
        return it(e.type, !0);
      case 31:
        return Dt('Activity');
      default:
        return '';
    }
  }
  function hn(e) {
    try {
      var t = '',
        n = null;
      do ((t += ln(e, n)), (n = e), (e = e.return));
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
    pt = c.unstable_scheduleCallback,
    Ot = c.unstable_cancelCallback,
    ma = c.unstable_shouldYield,
    ha = c.unstable_requestPaint,
    ut = c.unstable_now,
    La = c.unstable_getCurrentPriorityLevel,
    vn = c.unstable_ImmediatePriority,
    ja = c.unstable_UserBlockingPriority,
    Yn = c.unstable_NormalPriority,
    qn = c.unstable_LowPriority,
    un = c.unstable_IdlePriority,
    tr = c.log,
    Dl = c.unstable_setDisableYieldValue,
    va = null,
    St = null;
  function ue(e) {
    if ((typeof tr == 'function' && Dl(e), St && typeof St.setStrictMode == 'function'))
      try {
        St.setStrictMode(va, e);
      } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : Me,
    _e = Math.log,
    Ae = Math.LN2;
  function Me(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((_e(e) / Ae) | 0)) | 0);
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
    var C = a & 134217727;
    return (
      C !== 0
        ? ((a = C & ~u),
          a !== 0
            ? (l = Ye(a))
            : ((S &= C), S !== 0 ? (l = Ye(S)) : n || ((n = C & ~e), n !== 0 && (l = Ye(n)))))
        : ((C = a & ~u),
          C !== 0
            ? (l = Ye(C))
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
  function _t() {
    var e = Je;
    return ((Je <<= 1), (Je & 62914560) === 0 && (Je = 4194304), e);
  }
  function rn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wt(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function sn(e, t, n, a, l, u) {
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
      var $ = 31 - ve(n),
        P = 1 << $;
      ((C[$] = 0), (U[$] = -1));
      var Z = Q[$];
      if (Z !== null)
        for (Q[$] = null, $ = 0; $ < Z.length; $++) {
          var k = Z[$];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~P;
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
  function _l(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - ve(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  function Ga(e, t) {
    var n = t & -t;
    return ((n = (n & 42) !== 0 ? 1 : Ya(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
  }
  function Ya(e) {
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
  function nr(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function qc() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : zm(e.type));
  }
  function Vc(e, t) {
    var n = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = n;
    }
  }
  var Vn = Math.random().toString(36).slice(2),
    ft = '__reactFiber$' + Vn,
    bt = '__reactProps$' + Vn,
    qa = '__reactContainer$' + Vn,
    ar = '__reactEvents$' + Vn,
    Kh = '__reactListeners$' + Vn,
    Jh = '__reactHandles$' + Vn,
    Xc = '__reactResources$' + Vn,
    wl = '__reactMarker$' + Vn;
  function lr(e) {
    (delete e[ft], delete e[bt], delete e[ar], delete e[Kh], delete e[Jh]);
  }
  function Va(e) {
    var t = e[ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[qa] || n[ft])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = dm(e); e !== null; ) {
            if ((n = e[ft])) return n;
            e = dm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Xa(e) {
    if ((e = e[ft] || e[qa])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Nl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(x(33));
  }
  function Qa(e) {
    var t = e[Xc];
    return (t || (t = e[Xc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ct(e) {
    e[wl] = !0;
  }
  var Qc = new Set(),
    Zc = {};
  function ga(e, t) {
    (Za(e, t), Za(e + 'Capture', t));
  }
  function Za(e, t) {
    for (Zc[e] = t, e = 0; e < t.length; e++) Qc.add(t[e]);
  }
  var kh = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Kc = {},
    Jc = {};
  function Fh(e) {
    return yt.call(Jc, e)
      ? !0
      : yt.call(Kc, e)
        ? !1
        : kh.test(e)
          ? (Jc[e] = !0)
          : ((Kc[e] = !0), !1);
  }
  function _i(e, t, n) {
    if (Fh(t))
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
  function wi(e, t, n) {
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
  function gn(e, t, n, a) {
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
  function kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function $h(e, t, n) {
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
  function ir(e) {
    if (!e._valueTracker) {
      var t = kc(e) ? 'checked' : 'value';
      e._valueTracker = $h(e, t, '' + e[t]);
    }
  }
  function Fc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = '';
    return (
      e && (a = kc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ni(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Wh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(Wh, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ur(e, t, n, a, l, u, S, C) {
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
        ? rr(e, S, Yt(t))
        : n != null
          ? rr(e, S, Yt(n))
          : a != null && e.removeAttribute('value'),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null && (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (e.name = '' + Yt(C))
        : e.removeAttribute('name'));
  }
  function $c(e, t, n, a, l, u, S, C) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        ir(e);
        return;
      }
      ((n = n != null ? '' + Yt(n) : ''),
        (t = t != null ? '' + Yt(t) : n),
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
      ir(e));
  }
  function rr(e, t, n) {
    (t === 'number' && Ni(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Ka(e, t, n, a) {
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
  function Wc(e, t, n) {
    if (t != null && ((t = '' + Yt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Yt(n) : '';
  }
  function Pc(e, t, n, a) {
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
      ir(e));
  }
  function Ja(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ph = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Ic(e, t, n) {
    var a = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Ph.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function eo(e, t, n) {
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
      for (var l in t) ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && Ic(e, l, a));
    } else for (var u in t) t.hasOwnProperty(u) && Ic(e, u, t[u]);
  }
  function sr(e) {
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
  var Ih = new Map([
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
    ev =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bi(e) {
    return ev.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function yn() {}
  var cr = null;
  function or(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ka = null,
    Fa = null;
  function to(e) {
    var t = Xa(e);
    if (t && (e = t.stateNode)) {
      var n = e[bt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (ur(
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
                ur(
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
            for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Fc(a));
          }
          break e;
        case 'textarea':
          Wc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Ka(e, !!n.multiple, t, !1));
      }
    }
  }
  var fr = !1;
  function no(e, t, n) {
    if (fr) return e(t, n);
    fr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((fr = !1),
        (ka !== null || Fa !== null) &&
          (Eu(), ka && ((t = ka), (e = Fa), (Fa = ka = null), to(t), e)))
      )
        for (t = 0; t < e.length; t++) to(e[t]);
    }
  }
  function Bl(e, t) {
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
  var pn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    dr = !1;
  if (pn)
    try {
      var Ul = {};
      (Object.defineProperty(Ul, 'passive', {
        get: function () {
          dr = !0;
        },
      }),
        window.addEventListener('test', Ul, Ul),
        window.removeEventListener('test', Ul, Ul));
    } catch {
      dr = !1;
    }
  var Xn = null,
    mr = null,
    Ui = null;
  function ao() {
    if (Ui) return Ui;
    var e,
      t = mr,
      n = t.length,
      a,
      l = 'value' in Xn ? Xn.value : Xn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var S = n - e;
    for (a = 1; a <= S && t[n - a] === l[u - a]; a++);
    return (Ui = l.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Hi(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Li() {
    return !0;
  }
  function lo() {
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
      for (var C in e) e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(u) : u[C]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Li
          : lo),
        (this.isPropagationStopped = lo),
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
            (this.isDefaultPrevented = Li));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Li));
        },
        persist: function () {},
        isPersistent: Li,
      }),
      t
    );
  }
  var ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ji = Tt(ya),
    Hl = p({}, ya, { view: 0, detail: 0 }),
    tv = Tt(Hl),
    hr,
    vr,
    Ll,
    Gi = p({}, Hl, {
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
      getModifierState: yr,
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
          : (e !== Ll &&
              (Ll && e.type === 'mousemove'
                ? ((hr = e.screenX - Ll.screenX), (vr = e.screenY - Ll.screenY))
                : (vr = hr = 0),
              (Ll = e)),
            hr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : vr;
      },
    }),
    io = Tt(Gi),
    nv = p({}, Gi, { dataTransfer: 0 }),
    av = Tt(nv),
    lv = p({}, Hl, { relatedTarget: 0 }),
    gr = Tt(lv),
    iv = p({}, ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uv = Tt(iv),
    rv = p({}, ya, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    sv = Tt(rv),
    cv = p({}, ya, { data: 0 }),
    uo = Tt(cv),
    ov = {
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
    fv = {
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
    dv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function mv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dv[e]) ? !!t[e] : !1;
  }
  function yr() {
    return mv;
  }
  var hv = p({}, Hl, {
      key: function (e) {
        if (e.key) {
          var t = ov[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Hi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? fv[e.keyCode] || 'Unidentified'
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
      getModifierState: yr,
      charCode: function (e) {
        return e.type === 'keypress' ? Hi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Hi(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    vv = Tt(hv),
    gv = p({}, Gi, {
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
    ro = Tt(gv),
    yv = p({}, Hl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yr,
    }),
    pv = Tt(yv),
    Sv = p({}, ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xv = Tt(Sv),
    Ev = p({}, Gi, {
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
    bv = Tt(Ev),
    Tv = p({}, ya, { newState: 0, oldState: 0 }),
    Mv = Tt(Tv),
    Cv = [9, 13, 27, 32],
    pr = pn && 'CompositionEvent' in window,
    jl = null;
  pn && 'documentMode' in document && (jl = document.documentMode);
  var Rv = pn && 'TextEvent' in window && !jl,
    so = pn && (!pr || (jl && 8 < jl && 11 >= jl)),
    co = ' ',
    oo = !1;
  function fo(e, t) {
    switch (e) {
      case 'keyup':
        return Cv.indexOf(t.keyCode) !== -1;
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
  function mo(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var $a = !1;
  function Av(e, t) {
    switch (e) {
      case 'compositionend':
        return mo(t);
      case 'keypress':
        return t.which !== 32 ? null : ((oo = !0), co);
      case 'textInput':
        return ((e = t.data), e === co && oo ? null : e);
      default:
        return null;
    }
  }
  function zv(e, t) {
    if ($a)
      return e === 'compositionend' || (!pr && fo(e, t))
        ? ((e = ao()), (Ui = mr = Xn = null), ($a = !1), e)
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
        return so && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Dv = {
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
  function ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Dv[e.type] : t === 'textarea';
  }
  function vo(e, t, n, a) {
    (ka ? (Fa ? Fa.push(a) : (Fa = [a])) : (ka = a),
      (t = zu(t, 'onChange')),
      0 < t.length &&
        ((n = new ji('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
  }
  var Gl = null,
    Yl = null;
  function Ov(e) {
    Pd(e, 0);
  }
  function Yi(e) {
    var t = Nl(e);
    if (Fc(t)) return e;
  }
  function go(e, t) {
    if (e === 'change') return t;
  }
  var yo = !1;
  if (pn) {
    var Sr;
    if (pn) {
      var xr = 'oninput' in document;
      if (!xr) {
        var po = document.createElement('div');
        (po.setAttribute('oninput', 'return;'), (xr = typeof po.oninput == 'function'));
      }
      Sr = xr;
    } else Sr = !1;
    yo = Sr && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    Gl && (Gl.detachEvent('onpropertychange', xo), (Yl = Gl = null));
  }
  function xo(e) {
    if (e.propertyName === 'value' && Yi(Yl)) {
      var t = [];
      (vo(t, Yl, e, or(e)), no(Ov, t));
    }
  }
  function _v(e, t, n) {
    e === 'focusin'
      ? (So(), (Gl = t), (Yl = n), Gl.attachEvent('onpropertychange', xo))
      : e === 'focusout' && So();
  }
  function wv(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Yi(Yl);
  }
  function Nv(e, t) {
    if (e === 'click') return Yi(t);
  }
  function Bv(e, t) {
    if (e === 'input' || e === 'change') return Yi(t);
  }
  function Uv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == 'function' ? Object.is : Uv;
  function ql(e, t) {
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
  function Eo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bo(e, t) {
    var n = Eo(e);
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
      n = Eo(n);
    }
  }
  function To(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? To(e, t.parentNode)
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
    for (var t = Ni(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ni(e.document);
    }
    return t;
  }
  function Er(e) {
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
  var Hv = pn && 'documentMode' in document && 11 >= document.documentMode,
    Wa = null,
    br = null,
    Vl = null,
    Tr = !1;
  function Co(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tr ||
      Wa == null ||
      Wa !== Ni(a) ||
      ((a = Wa),
      'selectionStart' in a && Er(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Vl && ql(Vl, a)) ||
        ((Vl = a),
        (a = zu(br, 'onSelect')),
        0 < a.length &&
          ((t = new ji('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Wa))));
  }
  function pa(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var Pa = {
      animationend: pa('Animation', 'AnimationEnd'),
      animationiteration: pa('Animation', 'AnimationIteration'),
      animationstart: pa('Animation', 'AnimationStart'),
      transitionrun: pa('Transition', 'TransitionRun'),
      transitionstart: pa('Transition', 'TransitionStart'),
      transitioncancel: pa('Transition', 'TransitionCancel'),
      transitionend: pa('Transition', 'TransitionEnd'),
    },
    Mr = {},
    Ro = {};
  pn &&
    ((Ro = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Pa.animationend.animation,
      delete Pa.animationiteration.animation,
      delete Pa.animationstart.animation),
    'TransitionEvent' in window || delete Pa.transitionend.transition);
  function Sa(e) {
    if (Mr[e]) return Mr[e];
    if (!Pa[e]) return e;
    var t = Pa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ro) return (Mr[e] = t[n]);
    return e;
  }
  var Ao = Sa('animationend'),
    zo = Sa('animationiteration'),
    Do = Sa('animationstart'),
    Lv = Sa('transitionrun'),
    jv = Sa('transitionstart'),
    Gv = Sa('transitioncancel'),
    Oo = Sa('transitionend'),
    _o = new Map(),
    Cr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Cr.push('scrollEnd');
  function It(e, t) {
    (_o.set(e, t), ga(t, [e]));
  }
  var qi =
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
    Ia = 0,
    Rr = 0;
  function Vi() {
    for (var e = Ia, t = (Rr = Ia = 0); t < e; ) {
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
      u !== 0 && wo(n, l, u);
    }
  }
  function Xi(e, t, n, a) {
    ((Vt[Ia++] = e),
      (Vt[Ia++] = t),
      (Vt[Ia++] = n),
      (Vt[Ia++] = a),
      (Rr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Ar(e, t, n, a) {
    return (Xi(e, t, n, a), Qi(e));
  }
  function xa(e, t) {
    return (Xi(e, null, null, t), Qi(e));
  }
  function wo(e, t, n) {
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
  function Qi(e) {
    if (50 < oi) throw ((oi = 0), (Hs = null), Error(x(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var el = {};
  function Yv(e, t, n, a) {
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
    return new Yv(e, t, n, a);
  }
  function zr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sn(e, t) {
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
  function No(e, t) {
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
  function Zi(e, t, n, a, l, u) {
    var S = 0;
    if (((a = e), typeof e == 'function')) zr(e) && (S = 1);
    else if (typeof e == 'string')
      S = Z0(e, n, le.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case N:
          return ((e = Bt(31, n, t, l)), (e.elementType = N), (e.lanes = u), e);
        case v:
          return Ea(n.children, l, u, t);
        case E:
          ((S = 8), (l |= 24));
          break;
        case R:
          return ((e = Bt(12, n, t, l | 2)), (e.elementType = R), (e.lanes = u), e);
        case M:
          return ((e = Bt(13, n, t, l)), (e.elementType = M), (e.lanes = u), e);
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
              case D:
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
  function Ea(e, t, n, a) {
    return ((e = Bt(7, e, a, t)), (e.lanes = n), e);
  }
  function Dr(e, t, n) {
    return ((e = Bt(6, e, null, t)), (e.lanes = n), e);
  }
  function Bo(e) {
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
  var Uo = new WeakMap();
  function Xt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = Uo.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: hn(t) }), Uo.set(e, t), t);
    }
    return { value: e, source: t, stack: hn(t) };
  }
  var tl = [],
    nl = 0,
    Ki = null,
    Xl = 0,
    Qt = [],
    Zt = 0,
    Qn = null,
    cn = 1,
    on = '';
  function xn(e, t) {
    ((tl[nl++] = Xl), (tl[nl++] = Ki), (Ki = e), (Xl = t));
  }
  function Ho(e, t, n) {
    ((Qt[Zt++] = cn), (Qt[Zt++] = on), (Qt[Zt++] = Qn), (Qn = e));
    var a = cn;
    e = on;
    var l = 32 - ve(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - ve(t) + l;
    if (30 < u) {
      var S = l - (l % 5);
      ((u = (a & ((1 << S) - 1)).toString(32)),
        (a >>= S),
        (l -= S),
        (cn = (1 << (32 - ve(t) + l)) | (n << l) | a),
        (on = u + e));
    } else ((cn = (1 << u) | (n << l) | a), (on = e));
  }
  function _r(e) {
    e.return !== null && (xn(e, 1), Ho(e, 1, 0));
  }
  function wr(e) {
    for (; e === Ki; ) ((Ki = tl[--nl]), (tl[nl] = null), (Xl = tl[--nl]), (tl[nl] = null));
    for (; e === Qn; )
      ((Qn = Qt[--Zt]),
        (Qt[Zt] = null),
        (on = Qt[--Zt]),
        (Qt[Zt] = null),
        (cn = Qt[--Zt]),
        (Qt[Zt] = null));
  }
  function Lo(e, t) {
    ((Qt[Zt++] = cn), (Qt[Zt++] = on), (Qt[Zt++] = Qn), (cn = t.id), (on = t.overflow), (Qn = e));
  }
  var dt = null,
    qe = null,
    Ce = !1,
    Zn = null,
    Kt = !1,
    Nr = Error(x(519));
  function Kn(e) {
    var t = Error(
      x(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    );
    throw (Ql(Xt(t, e)), Nr);
  }
  function jo(e) {
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
        for (n = 0; n < di.length; n++) Ee(di[n], t);
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
          $c(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case 'select':
        Ee('invalid', t);
        break;
      case 'textarea':
        (Ee('invalid', t), Pc(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      nm(t.textContent, n)
        ? (a.popover != null && (Ee('beforetoggle', t), Ee('toggle', t)),
          a.onScroll != null && Ee('scroll', t),
          a.onScrollEnd != null && Ee('scrollend', t),
          a.onClick != null && (t.onclick = yn),
          (t = !0))
        : (t = !1),
      t || Kn(e, !0));
  }
  function Go(e) {
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
  function al(e) {
    if (e !== dt) return !1;
    if (!Ce) return (Go(e), (Ce = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || Ws(e.type, e.memoizedProps))),
        (n = !n)),
      n && qe && Kn(e),
      Go(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = fm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
      qe = fm(e);
    } else
      t === 27
        ? ((t = qe), ua(e.type) ? ((e = nc), (nc = null), (qe = e)) : (qe = t))
        : (qe = dt ? kt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ba() {
    ((qe = dt = null), (Ce = !1));
  }
  function Br() {
    var e = Zn;
    return (e !== null && (At === null ? (At = e) : At.push.apply(At, e), (Zn = null)), e);
  }
  function Ql(e) {
    Zn === null ? (Zn = [e]) : Zn.push(e);
  }
  var Ur = j(null),
    Ta = null,
    En = null;
  function Jn(e, t, n) {
    (ae(Ur, t._currentValue), (t._currentValue = n));
  }
  function bn(e) {
    ((e._currentValue = Ur.current), F(Ur));
  }
  function Hr(e, t, n) {
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
  function Lr(e, t, n, a) {
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
                Hr(u.return, n, e),
                a || (S = null));
              break e;
            }
          u = C.next;
        }
      } else if (l.tag === 18) {
        if (((S = l.return), S === null)) throw Error(x(341));
        ((S.lanes |= n), (u = S.alternate), u !== null && (u.lanes |= n), Hr(S, n, e), (S = null));
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
  function ll(e, t, n, a) {
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
          Nt(l.pendingProps.value, S.value) || (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (l === he.current) {
        if (((S = l.alternate), S === null)) throw Error(x(387));
        S.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(yi) : (e = [yi]));
      }
      l = l.return;
    }
    (e !== null && Lr(t, e, n, a), (t.flags |= 262144));
  }
  function Ji(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ma(e) {
    ((Ta = e), (En = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function mt(e) {
    return Yo(Ta, e);
  }
  function ki(e, t) {
    return (Ta === null && Ma(e), Yo(e, t));
  }
  function Yo(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), En === null)) {
      if (e === null) throw Error(x(308));
      ((En = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else En = En.next = t;
    return n;
  }
  var qv =
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
    Vv = c.unstable_scheduleCallback,
    Xv = c.unstable_NormalPriority,
    tt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jr() {
    return { controller: new qv(), data: new Map(), refCount: 0 };
  }
  function Zl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Vv(Xv, function () {
          e.controller.abort();
        }));
  }
  var Kl = null,
    Gr = 0,
    il = 0,
    ul = null;
  function Qv(e, t) {
    if (Kl === null) {
      var n = (Kl = []);
      ((Gr = 0),
        (il = Vs()),
        (ul = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Gr++, t.then(qo, qo), t);
  }
  function qo() {
    if (--Gr === 0 && Kl !== null) {
      ul !== null && (ul.status = 'fulfilled');
      var e = Kl;
      ((Kl = null), (il = 0), (ul = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Zv(e, t) {
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
  var Vo = q.S;
  q.S = function (e, t) {
    ((Rd = ut()),
      typeof t == 'object' && t !== null && typeof t.then == 'function' && Qv(e, t),
      Vo !== null && Vo(e, t));
  };
  var Ca = j(null);
  function Yr() {
    var e = Ca.current;
    return e !== null ? e : je.pooledCache;
  }
  function Fi(e, t) {
    t === null ? ae(Ca, Ca.current) : ae(Ca, t.pool);
  }
  function Xo() {
    var e = Yr();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var rl = Error(x(460)),
    qr = Error(x(474)),
    $i = Error(x(542)),
    Wi = { then: function () {} };
  function Qo(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Zo(e, t, n) {
    switch (
      ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(yn, yn), (t = n)), t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Jo(e), e);
      default:
        if (typeof t.status == 'string') t.then(yn, yn);
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
            throw ((e = t.reason), Jo(e), e);
        }
        throw ((Aa = t), rl);
    }
  }
  function Ra(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Aa = n), rl) : n;
    }
  }
  var Aa = null;
  function Ko() {
    if (Aa === null) throw Error(x(459));
    var e = Aa;
    return ((Aa = null), e);
  }
  function Jo(e) {
    if (e === rl || e === $i) throw Error(x(483));
  }
  var sl = null,
    Jl = 0;
  function Pi(e) {
    var t = Jl;
    return ((Jl += 1), sl === null && (sl = []), Zo(sl, e, t));
  }
  function kl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ii(e, t) {
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
  function ko(e) {
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
      return ((V = Sn(V, Y)), (V.index = 0), (V.sibling = null), V);
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
    function C(V, Y, X, W) {
      return Y === null || Y.tag !== 6
        ? ((Y = Dr(X, V.mode, W)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function U(V, Y, X, W) {
      var fe = X.type;
      return fe === v
        ? $(V, Y, X.props.children, W, X.key)
        : Y !== null &&
            (Y.elementType === fe ||
              (typeof fe == 'object' && fe !== null && fe.$$typeof === A && Ra(fe) === Y.type))
          ? ((Y = l(Y, X.props)), kl(Y, X), (Y.return = V), Y)
          : ((Y = Zi(X.type, X.key, X.props, null, V.mode, W)), kl(Y, X), (Y.return = V), Y);
    }
    function Q(V, Y, X, W) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== X.containerInfo ||
        Y.stateNode.implementation !== X.implementation
        ? ((Y = Or(X, V.mode, W)), (Y.return = V), Y)
        : ((Y = l(Y, X.children || [])), (Y.return = V), Y);
    }
    function $(V, Y, X, W, fe) {
      return Y === null || Y.tag !== 7
        ? ((Y = Ea(X, V.mode, W, fe)), (Y.return = V), Y)
        : ((Y = l(Y, X)), (Y.return = V), Y);
    }
    function P(V, Y, X) {
      if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
        return ((Y = Dr('' + Y, V.mode, X)), (Y.return = V), Y);
      if (typeof Y == 'object' && Y !== null) {
        switch (Y.$$typeof) {
          case r:
            return ((X = Zi(Y.type, Y.key, Y.props, null, V.mode, X)), kl(X, Y), (X.return = V), X);
          case y:
            return ((Y = Or(Y, V.mode, X)), (Y.return = V), Y);
          case A:
            return ((Y = Ra(Y)), P(V, Y, X));
        }
        if (ee(Y) || G(Y)) return ((Y = Ea(Y, V.mode, X, null)), (Y.return = V), Y);
        if (typeof Y.then == 'function') return P(V, Pi(Y), X);
        if (Y.$$typeof === w) return P(V, ki(V, Y), X);
        Ii(V, Y);
      }
      return null;
    }
    function Z(V, Y, X, W) {
      var fe = Y !== null ? Y.key : null;
      if ((typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint')
        return fe !== null ? null : C(V, Y, '' + X, W);
      if (typeof X == 'object' && X !== null) {
        switch (X.$$typeof) {
          case r:
            return X.key === fe ? U(V, Y, X, W) : null;
          case y:
            return X.key === fe ? Q(V, Y, X, W) : null;
          case A:
            return ((X = Ra(X)), Z(V, Y, X, W));
        }
        if (ee(X) || G(X)) return fe !== null ? null : $(V, Y, X, W, null);
        if (typeof X.then == 'function') return Z(V, Y, Pi(X), W);
        if (X.$$typeof === w) return Z(V, Y, ki(V, X), W);
        Ii(V, X);
      }
      return null;
    }
    function k(V, Y, X, W, fe) {
      if ((typeof W == 'string' && W !== '') || typeof W == 'number' || typeof W == 'bigint')
        return ((V = V.get(X) || null), C(Y, V, '' + W, fe));
      if (typeof W == 'object' && W !== null) {
        switch (W.$$typeof) {
          case r:
            return ((V = V.get(W.key === null ? X : W.key) || null), U(Y, V, W, fe));
          case y:
            return ((V = V.get(W.key === null ? X : W.key) || null), Q(Y, V, W, fe));
          case A:
            return ((W = Ra(W)), k(V, Y, X, W, fe));
        }
        if (ee(W) || G(W)) return ((V = V.get(X) || null), $(Y, V, W, fe, null));
        if (typeof W.then == 'function') return k(V, Y, X, Pi(W), fe);
        if (W.$$typeof === w) return k(V, Y, X, ki(Y, W), fe);
        Ii(Y, W);
      }
      return null;
    }
    function re(V, Y, X, W) {
      for (
        var fe = null, ze = null, ce = Y, Se = (Y = 0), Te = null;
        ce !== null && Se < X.length;
        Se++
      ) {
        ce.index > Se ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var De = Z(V, ce, X[Se], W);
        if (De === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && De.alternate === null && t(V, ce),
          (Y = u(De, Y, Se)),
          ze === null ? (fe = De) : (ze.sibling = De),
          (ze = De),
          (ce = Te));
      }
      if (Se === X.length) return (n(V, ce), Ce && xn(V, Se), fe);
      if (ce === null) {
        for (; Se < X.length; Se++)
          ((ce = P(V, X[Se], W)),
            ce !== null &&
              ((Y = u(ce, Y, Se)), ze === null ? (fe = ce) : (ze.sibling = ce), (ze = ce)));
        return (Ce && xn(V, Se), fe);
      }
      for (ce = a(ce); Se < X.length; Se++)
        ((Te = k(ce, V, Se, X[Se], W)),
          Te !== null &&
            (e && Te.alternate !== null && ce.delete(Te.key === null ? Se : Te.key),
            (Y = u(Te, Y, Se)),
            ze === null ? (fe = Te) : (ze.sibling = Te),
            (ze = Te)));
      return (
        e &&
          ce.forEach(function (fa) {
            return t(V, fa);
          }),
        Ce && xn(V, Se),
        fe
      );
    }
    function me(V, Y, X, W) {
      if (X == null) throw Error(x(151));
      for (
        var fe = null, ze = null, ce = Y, Se = (Y = 0), Te = null, De = X.next();
        ce !== null && !De.done;
        Se++, De = X.next()
      ) {
        ce.index > Se ? ((Te = ce), (ce = null)) : (Te = ce.sibling);
        var fa = Z(V, ce, De.value, W);
        if (fa === null) {
          ce === null && (ce = Te);
          break;
        }
        (e && ce && fa.alternate === null && t(V, ce),
          (Y = u(fa, Y, Se)),
          ze === null ? (fe = fa) : (ze.sibling = fa),
          (ze = fa),
          (ce = Te));
      }
      if (De.done) return (n(V, ce), Ce && xn(V, Se), fe);
      if (ce === null) {
        for (; !De.done; Se++, De = X.next())
          ((De = P(V, De.value, W)),
            De !== null &&
              ((Y = u(De, Y, Se)), ze === null ? (fe = De) : (ze.sibling = De), (ze = De)));
        return (Ce && xn(V, Se), fe);
      }
      for (ce = a(ce); !De.done; Se++, De = X.next())
        ((De = k(ce, V, Se, De.value, W)),
          De !== null &&
            (e && De.alternate !== null && ce.delete(De.key === null ? Se : De.key),
            (Y = u(De, Y, Se)),
            ze === null ? (fe = De) : (ze.sibling = De),
            (ze = De)));
      return (
        e &&
          ce.forEach(function (ng) {
            return t(V, ng);
          }),
        Ce && xn(V, Se),
        fe
      );
    }
    function Le(V, Y, X, W) {
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
                      (n(V, Y.sibling), (W = l(Y, X.props.children)), (W.return = V), (V = W));
                      break e;
                    }
                  } else if (
                    Y.elementType === fe ||
                    (typeof fe == 'object' && fe !== null && fe.$$typeof === A && Ra(fe) === Y.type)
                  ) {
                    (n(V, Y.sibling), (W = l(Y, X.props)), kl(W, X), (W.return = V), (V = W));
                    break e;
                  }
                  n(V, Y);
                  break;
                } else t(V, Y);
                Y = Y.sibling;
              }
              X.type === v
                ? ((W = Ea(X.props.children, V.mode, W, X.key)), (W.return = V), (V = W))
                : ((W = Zi(X.type, X.key, X.props, null, V.mode, W)),
                  kl(W, X),
                  (W.return = V),
                  (V = W));
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
                    (n(V, Y.sibling), (W = l(Y, X.children || [])), (W.return = V), (V = W));
                    break e;
                  } else {
                    n(V, Y);
                    break;
                  }
                else t(V, Y);
                Y = Y.sibling;
              }
              ((W = Or(X, V.mode, W)), (W.return = V), (V = W));
            }
            return S(V);
          case A:
            return ((X = Ra(X)), Le(V, Y, X, W));
        }
        if (ee(X)) return re(V, Y, X, W);
        if (G(X)) {
          if (((fe = G(X)), typeof fe != 'function')) throw Error(x(150));
          return ((X = fe.call(X)), me(V, Y, X, W));
        }
        if (typeof X.then == 'function') return Le(V, Y, Pi(X), W);
        if (X.$$typeof === w) return Le(V, Y, ki(V, X), W);
        Ii(V, X);
      }
      return (typeof X == 'string' && X !== '') || typeof X == 'number' || typeof X == 'bigint'
        ? ((X = '' + X),
          Y !== null && Y.tag === 6
            ? (n(V, Y.sibling), (W = l(Y, X)), (W.return = V), (V = W))
            : (n(V, Y), (W = Dr(X, V.mode, W)), (W.return = V), (V = W)),
          S(V))
        : n(V, Y);
    }
    return function (V, Y, X, W) {
      try {
        Jl = 0;
        var fe = Le(V, Y, X, W);
        return ((sl = null), fe);
      } catch (ce) {
        if (ce === rl || ce === $i) throw ce;
        var ze = Bt(29, ce, null, V.mode);
        return ((ze.lanes = W), (ze.return = V), ze);
      } finally {
      }
    };
  }
  var za = ko(!0),
    Fo = ko(!1),
    kn = !1;
  function Vr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xr(e, t) {
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
  function Fn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Oe & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = Qi(e)),
        wo(e, null, n),
        t
      );
    }
    return (Xi(e, a, t, n), Qi(e));
  }
  function Fl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), _l(e, n));
    }
  }
  function Qr(e, t) {
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
  var Zr = !1;
  function $l() {
    if (Zr) {
      var e = ul;
      if (e !== null) throw e;
    }
  }
  function Wl(e, t, n, a) {
    Zr = !1;
    var l = e.updateQueue;
    kn = !1;
    var u = l.firstBaseUpdate,
      S = l.lastBaseUpdate,
      C = l.shared.pending;
    if (C !== null) {
      l.shared.pending = null;
      var U = C,
        Q = U.next;
      ((U.next = null), S === null ? (u = Q) : (S.next = Q), (S = U));
      var $ = e.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (C = $.lastBaseUpdate),
        C !== S && (C === null ? ($.firstBaseUpdate = Q) : (C.next = Q), ($.lastBaseUpdate = U)));
    }
    if (u !== null) {
      var P = l.baseState;
      ((S = 0), ($ = Q = U = null), (C = u));
      do {
        var Z = C.lane & -536870913,
          k = Z !== C.lane;
        if (k ? (be & Z) === Z : (a & Z) === Z) {
          (Z !== 0 && Z === il && (Zr = !0),
            $ !== null &&
              ($ = $.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }));
          e: {
            var re = e,
              me = C;
            Z = t;
            var Le = n;
            switch (me.tag) {
              case 1:
                if (((re = me.payload), typeof re == 'function')) {
                  P = re.call(Le, P, Z);
                  break e;
                }
                P = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = me.payload),
                  (Z = typeof re == 'function' ? re.call(Le, P, Z) : re),
                  Z == null)
                )
                  break e;
                P = p({}, P, Z);
                break e;
              case 2:
                kn = !0;
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
            $ === null ? ((Q = $ = k), (U = P)) : ($ = $.next = k),
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
      ($ === null && (U = P),
        (l.baseState = U),
        (l.firstBaseUpdate = Q),
        (l.lastBaseUpdate = $),
        u === null && (l.shared.lanes = 0),
        (ta |= S),
        (e.lanes = S),
        (e.memoizedState = P));
    }
  }
  function $o(e, t) {
    if (typeof e != 'function') throw Error(x(191, e));
    e.call(t);
  }
  function Wo(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) $o(n[e], t);
  }
  var cl = j(null),
    eu = j(0);
  function Po(e, t) {
    ((e = _n), ae(eu, e), ae(cl, t), (_n = e | t.baseLanes));
  }
  function Kr() {
    (ae(eu, _n), ae(cl, cl.current));
  }
  function Jr() {
    ((_n = eu.current), F(cl), F(eu));
  }
  var Ut = j(null),
    Jt = null;
  function Wn(e) {
    var t = e.alternate;
    (ae(Ie, Ie.current & 1),
      ae(Ut, e),
      Jt === null && (t === null || cl.current !== null || t.memoizedState !== null) && (Jt = e));
  }
  function kr(e) {
    (ae(Ie, Ie.current), ae(Ut, e), Jt === null && (Jt = e));
  }
  function Io(e) {
    e.tag === 22 ? (ae(Ie, Ie.current), ae(Ut, e), Jt === null && (Jt = e)) : Pn();
  }
  function Pn() {
    (ae(Ie, Ie.current), ae(Ut, Ut.current));
  }
  function Ht(e) {
    (F(Ut), Jt === e && (Jt = null), F(Ie));
  }
  var Ie = j(0);
  function tu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || ec(n) || tc(n))) return t;
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
  var Tn = 0,
    pe = null,
    Ue = null,
    nt = null,
    nu = !1,
    ol = !1,
    Da = !1,
    au = 0,
    Pl = 0,
    fl = null,
    Kv = 0;
  function $e() {
    throw Error(x(321));
  }
  function Fr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Nt(e[n], t[n])) return !1;
    return !0;
  }
  function $r(e, t, n, a, l, u) {
    return (
      (Tn = u),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Lf : fs),
      (Da = !1),
      (u = n(a, l)),
      (Da = !1),
      ol && (u = tf(t, n, a, l)),
      ef(e),
      u
    );
  }
  function ef(e) {
    q.H = ti;
    var t = Ue !== null && Ue.next !== null;
    if (((Tn = 0), (nt = Ue = pe = null), (nu = !1), (Pl = 0), (fl = null), t)) throw Error(x(300));
    e === null || at || ((e = e.dependencies), e !== null && Ji(e) && (at = !0));
  }
  function tf(e, t, n, a) {
    pe = e;
    var l = 0;
    do {
      if ((ol && (fl = null), (Pl = 0), (ol = !1), 25 <= l)) throw Error(x(301));
      if (((l += 1), (nt = Ue = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((q.H = jf), (u = t(n, a)));
    } while (ol);
    return u;
  }
  function Jv() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Il(t) : t),
      (e = e.useState()[0]),
      (Ue !== null ? Ue.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Wr() {
    var e = au !== 0;
    return ((au = 0), e);
  }
  function Pr(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Ir(e) {
    if (nu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      nu = !1;
    }
    ((Tn = 0), (nt = Ue = pe = null), (ol = !1), (Pl = au = 0), (fl = null));
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
  function lu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Il(e) {
    var t = Pl;
    return (
      (Pl += 1),
      fl === null && (fl = []),
      (e = Zo(fl, e, t)),
      (t = pe),
      (nt === null ? t.memoizedState : nt.next) === null &&
        ((t = t.alternate), (q.H = t === null || t.memoizedState === null ? Lf : fs)),
      e
    );
  }
  function iu(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Il(e);
      if (e.$$typeof === w) return mt(e);
    }
    throw Error(x(438, String(e)));
  }
  function es(e) {
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
      n === null && ((n = lu()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = _;
    return (t.index++, n);
  }
  function Mn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function uu(e) {
    var t = et();
    return ts(t, Ue, e);
  }
  function ts(e, t, n) {
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
        $ = !1;
      do {
        var P = Q.lane & -536870913;
        if (P !== Q.lane ? (be & P) === P : (Tn & P) === P) {
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
              P === il && ($ = !0));
          else if ((Tn & Z) === Z) {
            ((Q = Q.next), Z === il && ($ = !0));
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
              (pe.lanes |= Z),
              (ta |= Z));
          ((P = Q.action), Da && n(u, P), (u = Q.hasEagerState ? Q.eagerState : n(u, P)));
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
            (pe.lanes |= P),
            (ta |= P));
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (
        (U === null ? (S = u) : (U.next = C),
        !Nt(u, e.memoizedState) && ((at = !0), $ && ((n = ul), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = S), (e.baseQueue = U), (a.lastRenderedState = u));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function ns(e) {
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
  function nf(e, t, n) {
    var a = pe,
      l = et(),
      u = Ce;
    if (u) {
      if (n === void 0) throw Error(x(407));
      n = n();
    } else n = t();
    var S = !Nt((Ue || l).memoizedState, n);
    if (
      (S && ((l.memoizedState = n), (at = !0)),
      (l = l.queue),
      is(uf.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || S || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        dl(9, { destroy: void 0 }, lf.bind(null, a, l, n, t), null),
        je === null)
      )
        throw Error(x(349));
      u || (Tn & 127) !== 0 || af(a, t, n);
    }
    return n;
  }
  function af(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = lu()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function lf(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), rf(t) && sf(e));
  }
  function uf(e, t, n) {
    return n(function () {
      rf(t) && sf(e);
    });
  }
  function rf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Nt(e, n);
    } catch {
      return !0;
    }
  }
  function sf(e) {
    var t = xa(e, 2);
    t !== null && zt(t, e, 2);
  }
  function as(e) {
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
  function cf(e, t, n, a) {
    return ((e.baseState = n), ts(e, Ue, typeof a == 'function' ? a : Mn));
  }
  function kv(e, t, n, a, l) {
    if (cu(e)) throw Error(x(485));
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
          ? ((u.next = t.pending = u), of(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function of(e, t) {
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
        (U !== null && U(S, C), ff(e, t, C));
      } catch (Q) {
        ls(e, t, Q);
      } finally {
        (u !== null && S.types !== null && (u.types = S.types), (q.T = u));
      }
    } else
      try {
        ((u = n(l, a)), ff(e, t, u));
      } catch (Q) {
        ls(e, t, Q);
      }
  }
  function ff(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            df(e, t, a);
          },
          function (a) {
            return ls(e, t, a);
          }
        )
      : df(e, t, n);
  }
  function df(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      mf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), of(e, n))));
  }
  function ls(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = n), mf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function mf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hf(e, t) {
    return t;
  }
  function vf(e, t) {
    if (Ce) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Ce) {
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
            Kn(a);
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
        lastRenderedReducer: hf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Bf.bind(null, pe, a)),
      (a.dispatch = n),
      (a = as(!1)),
      (u = os.bind(null, pe, !1, a.queue)),
      (a = Et()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = kv.bind(null, pe, l, u, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function gf(e) {
    var t = et();
    return yf(t, Ue, e);
  }
  function yf(e, t, n) {
    if (
      ((t = ts(e, t, hf)[0]),
      (e = uu(Mn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = Il(t);
      } catch (S) {
        throw S === rl ? $i : S;
      }
    else a = t;
    t = et();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048), dl(9, { destroy: void 0 }, Fv.bind(null, l, n), null)),
      [a, u, e]
    );
  }
  function Fv(e, t) {
    e.action = t;
  }
  function pf(e) {
    var t = et(),
      n = Ue;
    if (n !== null) return yf(t, n, e);
    (et(), (t = t.memoizedState), (n = et()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function dl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = lu()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Sf() {
    return et().memoizedState;
  }
  function ru(e, t, n, a) {
    var l = Et();
    ((pe.flags |= e),
      (l.memoizedState = dl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function su(e, t, n, a) {
    var l = et();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ue !== null && a !== null && Fr(a, Ue.memoizedState.deps)
      ? (l.memoizedState = dl(t, u, n, a))
      : ((pe.flags |= e), (l.memoizedState = dl(1 | t, u, n, a)));
  }
  function xf(e, t) {
    ru(8390656, 8, e, t);
  }
  function is(e, t) {
    su(2048, 8, e, t);
  }
  function $v(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = lu()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Ef(e) {
    var t = et().memoizedState;
    return (
      $v({ ref: t, nextImpl: e }),
      function () {
        if ((Oe & 2) !== 0) throw Error(x(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function bf(e, t) {
    return su(4, 2, e, t);
  }
  function Tf(e, t) {
    return su(4, 4, e, t);
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
  function Cf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), su(4, 4, Mf.bind(null, t, e), n));
  }
  function us() {}
  function Rf(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Fr(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Af(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Fr(t, a[1])) return a[0];
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
  function rs(e, t, n) {
    return n === void 0 || ((Tn & 1073741824) !== 0 && (be & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = zd()), (pe.lanes |= e), (ta |= e), n);
  }
  function zf(e, t, n, a) {
    return Nt(n, t)
      ? n
      : cl.current !== null
        ? ((e = rs(e, n, a)), Nt(e, t) || (at = !0), e)
        : (Tn & 42) === 0 || ((Tn & 1073741824) !== 0 && (be & 261930) === 0)
          ? ((at = !0), (e.memoizedState = n))
          : ((e = zd()), (pe.lanes |= e), (ta |= e), t);
  }
  function Df(e, t, n, a, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var S = q.T,
      C = {};
    ((q.T = C), os(e, !1, t, n));
    try {
      var U = l(),
        Q = q.S;
      if (
        (Q !== null && Q(C, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var $ = Zv(U, a);
        ei(e, t, $, Gt(e));
      } else ei(e, t, a, Gt(e));
    } catch (P) {
      ei(e, t, { then: function () {}, status: 'rejected', reason: P }, Gt());
    } finally {
      ((K.p = u), S !== null && C.types !== null && (S.types = C.types), (q.T = S));
    }
  }
  function Wv() {}
  function ss(e, t, n, a) {
    if (e.tag !== 5) throw Error(x(476));
    var l = Of(e).queue;
    Df(
      e,
      l,
      t,
      ne,
      n === null
        ? Wv
        : function () {
            return (_f(e), n(a));
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
  function _f(e) {
    var t = Of(e);
    (t.next === null && (t = e.alternate.memoizedState), ei(e, t.next.queue, {}, Gt()));
  }
  function cs() {
    return mt(yi);
  }
  function wf() {
    return et().memoizedState;
  }
  function Nf() {
    return et().memoizedState;
  }
  function Pv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Gt();
          e = Fn(n);
          var a = $n(t, e, n);
          (a !== null && (zt(a, t, n), Fl(a, t, n)), (t = { cache: jr() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Iv(e, t, n) {
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
      cu(e) ? Uf(t, n) : ((n = Ar(e, t, n, a)), n !== null && (zt(n, e, a), Hf(n, t, a))));
  }
  function Bf(e, t, n) {
    var a = Gt();
    ei(e, t, n, a);
  }
  function ei(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cu(e)) Uf(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = C), Nt(C, S)))
            return (Xi(e, t, l, 0), je === null && Vi(), !1);
        } catch {
        } finally {
        }
      if (((n = Ar(e, t, l, a)), n !== null)) return (zt(n, e, a), Hf(n, t, a), !0);
    }
    return !1;
  }
  function os(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Vs(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cu(e))
    ) {
      if (t) throw Error(x(479));
    } else ((t = Ar(e, n, a, 2)), t !== null && zt(t, e, 2));
  }
  function cu(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Uf(e, t) {
    ol = nu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Hf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), _l(e, n));
    }
  }
  var ti = {
    readContext: mt,
    use: iu,
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
  ti.useEffectEvent = $e;
  var Lf = {
      readContext: mt,
      use: iu,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: mt,
      useEffect: xf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null), ru(4194308, 4, Mf.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ru(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ru(4, 2, e, t);
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
          (e = e.dispatch = Iv.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = as(e);
        var t = e.queue,
          n = Bf.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: us,
      useDeferredValue: function (e, t) {
        var n = Et();
        return rs(n, e, t);
      },
      useTransition: function () {
        var e = as(!1);
        return ((e = Df.bind(null, pe, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, n) {
        var a = pe,
          l = Et();
        if (Ce) {
          if (n === void 0) throw Error(x(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(x(349));
          (be & 127) !== 0 || af(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          xf(uf.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          dl(9, { destroy: void 0 }, lf.bind(null, a, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Et(),
          t = je.identifierPrefix;
        if (Ce) {
          var n = on,
            a = cn;
          ((n = (a & ~(1 << (32 - ve(a) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = au++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Kv++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: cs,
      useFormState: vf,
      useActionState: vf,
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
        return ((t.queue = n), (t = os.bind(null, pe, !0, n)), (n.dispatch = t), [e, t]);
      },
      useMemoCache: es,
      useCacheRefresh: function () {
        return (Et().memoizedState = Pv.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = Et(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Oe & 2) !== 0) throw Error(x(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    fs = {
      readContext: mt,
      use: iu,
      useCallback: Rf,
      useContext: mt,
      useEffect: is,
      useImperativeHandle: Cf,
      useInsertionEffect: bf,
      useLayoutEffect: Tf,
      useMemo: Af,
      useReducer: uu,
      useRef: Sf,
      useState: function () {
        return uu(Mn);
      },
      useDebugValue: us,
      useDeferredValue: function (e, t) {
        var n = et();
        return zf(n, Ue.memoizedState, e, t);
      },
      useTransition: function () {
        var e = uu(Mn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : Il(e), t];
      },
      useSyncExternalStore: nf,
      useId: wf,
      useHostTransitionStatus: cs,
      useFormState: gf,
      useActionState: gf,
      useOptimistic: function (e, t) {
        var n = et();
        return cf(n, Ue, e, t);
      },
      useMemoCache: es,
      useCacheRefresh: Nf,
    };
  fs.useEffectEvent = Ef;
  var jf = {
    readContext: mt,
    use: iu,
    useCallback: Rf,
    useContext: mt,
    useEffect: is,
    useImperativeHandle: Cf,
    useInsertionEffect: bf,
    useLayoutEffect: Tf,
    useMemo: Af,
    useReducer: ns,
    useRef: Sf,
    useState: function () {
      return ns(Mn);
    },
    useDebugValue: us,
    useDeferredValue: function (e, t) {
      var n = et();
      return Ue === null ? rs(n, e, t) : zf(n, Ue.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ns(Mn)[0],
        t = et().memoizedState;
      return [typeof e == 'boolean' ? e : Il(e), t];
    },
    useSyncExternalStore: nf,
    useId: wf,
    useHostTransitionStatus: cs,
    useFormState: pf,
    useActionState: pf,
    useOptimistic: function (e, t) {
      var n = et();
      return Ue !== null ? cf(n, Ue, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: es,
    useCacheRefresh: Nf,
  };
  jf.useEffectEvent = Ef;
  function ds(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ms = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = Fn(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = $n(e, l, a)),
        t !== null && (zt(t, e, a), Fl(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Gt(),
        l = Fn(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = $n(e, l, a)),
        t !== null && (zt(t, e, a), Fl(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Gt(),
        a = Fn(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = $n(e, a, n)),
        t !== null && (zt(t, e, n), Fl(t, e, n)));
    },
  };
  function Gf(e, t, n, a, l, u, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, S)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ql(n, a) || !ql(l, u)
          : !0
    );
  }
  function Yf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && ms.enqueueReplaceState(t, t.state, null));
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
  function qf(e) {
    qi(e);
  }
  function Vf(e) {
    console.error(e);
  }
  function Xf(e) {
    qi(e);
  }
  function ou(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Qf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function hs(e, t, n) {
    return (
      (n = Fn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ou(e, t);
      }),
      n
    );
  }
  function Zf(e) {
    return ((e = Fn(e)), (e.tag = 3), e);
  }
  function Kf(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var u = a.value;
      ((e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          Qf(t, n, a);
        }));
    }
    var S = n.stateNode;
    S !== null &&
      typeof S.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Qf(t, n, a),
          typeof l != 'function' && (na === null ? (na = new Set([this])) : na.add(this)));
        var C = a.stack;
        this.componentDidCatch(a.value, { componentStack: C !== null ? C : '' });
      });
  }
  function e0(e, t, n, a, l) {
    if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((t = n.alternate), t !== null && ll(t, n, l, !0), (n = Ut.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Jt === null ? bu() : n.alternate === null && We === 0 && (We = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Wi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Gs(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Wi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  Gs(e, a, l)),
              !1
            );
        }
        throw Error(x(435, n.tag));
      }
      return (Gs(e, a, l), bu(), !1);
    }
    if (Ce)
      return (
        (t = Ut.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== Nr && ((e = Error(x(422), { cause: a })), Ql(Xt(e, n))))
          : (a !== Nr && ((t = Error(x(423), { cause: a })), Ql(Xt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = Xt(a, n)),
            (l = hs(e.stateNode, a, l)),
            Qr(e, l),
            We !== 4 && (We = 2)),
        !1
      );
    var u = Error(x(520), { cause: a });
    if (((u = Xt(u, n)), ci === null ? (ci = [u]) : ci.push(u), We !== 4 && (We = 2), t === null))
      return !0;
    ((a = Xt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = hs(n.stateNode, a, e)),
            Qr(n, e),
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
                  (na === null || !na.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Zf(l)),
              Kf(l, e, n, a),
              Qr(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vs = Error(x(461)),
    at = !1;
  function ht(e, t, n, a) {
    t.child = e === null ? Fo(t, null, n, a) : za(t, e.child, n, a);
  }
  function Jf(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ('ref' in a) {
      var S = {};
      for (var C in a) C !== 'ref' && (S[C] = a[C]);
    } else S = a;
    return (
      Ma(t),
      (a = $r(e, t, n, S, u, l)),
      (C = Wr()),
      e !== null && !at
        ? (Pr(e, t, l), Cn(e, t, l))
        : (Ce && C && _r(t), (t.flags |= 1), ht(e, t, a, l), t.child)
    );
  }
  function kf(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !zr(u) && u.defaultProps === void 0 && n.compare === null
        ? ((t.tag = 15), (t.type = u), Ff(e, t, u, a, l))
        : ((e = Zi(n.type, null, a, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Ts(e, l))) {
      var S = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ql), n(S, a) && e.ref === t.ref))
        return Cn(e, t, l);
    }
    return ((t.flags |= 1), (e = Sn(u, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ff(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ql(u, a) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = a = u), Ts(e, l))) (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), Cn(e, t, l));
    }
    return gs(e, t, n, a, l);
  }
  function $f(e, t, n, a) {
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
        return Wf(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fi(t, u !== null ? u.cachePool : null),
          u !== null ? Po(t, u) : Kr(),
          Io(t));
      else return ((a = t.lanes = 536870912), Wf(e, t, u !== null ? u.baseLanes | n : n, n, a));
    } else
      u !== null
        ? (Fi(t, u.cachePool), Po(t, u), Pn(), (t.memoizedState = null))
        : (e !== null && Fi(t, null), Kr(), Pn());
    return (ht(e, t, l, n), t.child);
  }
  function ni(e, t) {
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
  function Wf(e, t, n, a, l) {
    var u = Yr();
    return (
      (u = u === null ? null : { parent: tt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Fi(t, null),
      Kr(),
      Io(t),
      e !== null && ll(e, t, a, !0),
      (t.childLanes = l),
      null
    );
  }
  function fu(e, t) {
    return (
      (t = mu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Pf(e, t, n) {
    return (
      za(t, e.child, null, n),
      (e = fu(t, t.pendingProps)),
      (e.flags |= 2),
      Ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function t0(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ce) {
        if (a.mode === 'hidden') return ((e = fu(t, a)), (t.lanes = 536870912), ni(null, e));
        if (
          (kr(t),
          (e = qe)
            ? ((e = om(e, Kt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Qn !== null ? { id: cn, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Bo(e)),
                (n.return = t),
                (t.child = n),
                (dt = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Kn(t);
        return ((t.lanes = 536870912), null);
      }
      return fu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var S = u.dehydrated;
      if ((kr(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = Pf(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(x(558));
      else if ((at || ll(e, t, n, !1), (l = (n & e.childLanes) !== 0), at || l)) {
        if (((a = je), a !== null && ((S = Ga(a, n)), S !== 0 && S !== u.retryLane)))
          throw ((u.retryLane = S), xa(e, S), zt(a, e, S), vs);
        (bu(), (t = Pf(e, t, n)));
      } else
        ((e = u.treeContext),
          (qe = kt(S.nextSibling)),
          (dt = t),
          (Ce = !0),
          (Zn = null),
          (Kt = !1),
          e !== null && Lo(t, e),
          (t = fu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Sn(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function du(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(x(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function gs(e, t, n, a, l) {
    return (
      Ma(t),
      (n = $r(e, t, n, a, void 0, l)),
      (a = Wr()),
      e !== null && !at
        ? (Pr(e, t, l), Cn(e, t, l))
        : (Ce && a && _r(t), (t.flags |= 1), ht(e, t, n, l), t.child)
    );
  }
  function If(e, t, n, a, l, u) {
    return (
      Ma(t),
      (t.updateQueue = null),
      (n = tf(t, a, n, l)),
      ef(e),
      (a = Wr()),
      e !== null && !at
        ? (Pr(e, t, u), Cn(e, t, u))
        : (Ce && a && _r(t), (t.flags |= 1), ht(e, t, n, u), t.child)
    );
  }
  function ed(e, t, n, a, l) {
    if ((Ma(t), t.stateNode === null)) {
      var u = el,
        S = n.contextType;
      (typeof S == 'object' && S !== null && (u = mt(S)),
        (u = new n(a, u)),
        (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ms),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Vr(t),
        (S = n.contextType),
        (u.context = typeof S == 'object' && S !== null ? mt(S) : el),
        (u.state = t.memoizedState),
        (S = n.getDerivedStateFromProps),
        typeof S == 'function' && (ds(t, n, S, a), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((S = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          S !== u.state && ms.enqueueReplaceState(u, u.state, null),
          Wl(t, a, u, l),
          $l(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        U = Oa(n, C);
      u.props = U;
      var Q = u.context,
        $ = n.contextType;
      ((S = el), typeof $ == 'object' && $ !== null && (S = mt($)));
      var P = n.getDerivedStateFromProps;
      (($ = typeof P == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        $ ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((C || Q !== S) && Yf(t, u, a, S)),
        (kn = !1));
      var Z = t.memoizedState;
      ((u.state = Z),
        Wl(t, a, u, l),
        $l(),
        (Q = t.memoizedState),
        C || Z !== Q || kn
          ? (typeof P == 'function' && (ds(t, n, P, a), (Q = t.memoizedState)),
            (U = kn || Gf(t, n, U, a, Z, Q, S))
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
        Xr(e, t),
        (S = t.memoizedProps),
        ($ = Oa(n, S)),
        (u.props = $),
        (P = t.pendingProps),
        (Z = u.context),
        (Q = n.contextType),
        (U = el),
        typeof Q == 'object' && Q !== null && (U = mt(Q)),
        (C = n.getDerivedStateFromProps),
        (Q = typeof C == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((S !== P || Z !== U) && Yf(t, u, a, U)),
        (kn = !1),
        (Z = t.memoizedState),
        (u.state = Z),
        Wl(t, a, u, l),
        $l());
      var k = t.memoizedState;
      S !== P || Z !== k || kn || (e !== null && e.dependencies !== null && Ji(e.dependencies))
        ? (typeof C == 'function' && (ds(t, n, C, a), (k = t.memoizedState)),
          ($ =
            kn ||
            Gf(t, n, $, a, Z, k, U) ||
            (e !== null && e.dependencies !== null && Ji(e.dependencies)))
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
      du(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (n = a && typeof n.getDerivedStateFromError != 'function' ? null : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = za(t, e.child, null, l)), (t.child = za(t, null, n, l)))
            : ht(e, t, n, l),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Cn(e, t, l)),
      e
    );
  }
  function td(e, t, n, a) {
    return (ba(), (t.flags |= 256), ht(e, t, n, a), t.child);
  }
  var ys = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ps(e) {
    return { baseLanes: e, cachePool: Xo() };
  }
  function Ss(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= jt), e);
  }
  function nd(e, t, n) {
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
      if (Ce) {
        if (
          (l ? Wn(t) : Pn(),
          (e = qe)
            ? ((e = om(e, Kt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Qn !== null ? { id: cn, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Bo(e)),
                (n.return = t),
                (t.child = n),
                (dt = t),
                (qe = null)))
            : (e = null),
          e === null)
        )
          throw Kn(t);
        return (tc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = a.children;
      return (
        (a = a.fallback),
        l
          ? (Pn(),
            (l = t.mode),
            (C = mu({ mode: 'hidden', children: C }, l)),
            (a = Ea(a, l, n, null)),
            (C.return = t),
            (a.return = t),
            (C.sibling = a),
            (t.child = C),
            (a = t.child),
            (a.memoizedState = ps(n)),
            (a.childLanes = Ss(e, S, n)),
            (t.memoizedState = ys),
            ni(null, a))
          : (Wn(t), xs(t, C))
      );
    }
    var U = e.memoizedState;
    if (U !== null && ((C = U.dehydrated), C !== null)) {
      if (u)
        t.flags & 256
          ? (Wn(t), (t.flags &= -257), (t = Es(e, t, n)))
          : t.memoizedState !== null
            ? (Pn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Pn(),
              (C = a.fallback),
              (l = t.mode),
              (a = mu({ mode: 'visible', children: a.children }, l)),
              (C = Ea(C, l, n, null)),
              (C.flags |= 2),
              (a.return = t),
              (C.return = t),
              (a.sibling = C),
              (t.child = a),
              za(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = ps(n)),
              (a.childLanes = Ss(e, S, n)),
              (t.memoizedState = ys),
              (t = ni(null, a)));
      else if ((Wn(t), tc(C))) {
        if (((S = C.nextSibling && C.nextSibling.dataset), S)) var Q = S.dgst;
        ((S = Q),
          (a = Error(x(419))),
          (a.stack = ''),
          (a.digest = S),
          Ql({ value: a, source: null, stack: null }),
          (t = Es(e, t, n)));
      } else if ((at || ll(e, t, n, !1), (S = (n & e.childLanes) !== 0), at || S)) {
        if (((S = je), S !== null && ((a = Ga(S, n)), a !== 0 && a !== U.retryLane)))
          throw ((U.retryLane = a), xa(e, a), zt(S, e, a), vs);
        (ec(C) || bu(), (t = Es(e, t, n)));
      } else
        ec(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = U.treeContext),
            (qe = kt(C.nextSibling)),
            (dt = t),
            (Ce = !0),
            (Zn = null),
            (Kt = !1),
            e !== null && Lo(t, e),
            (t = xs(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (Pn(),
        (C = a.fallback),
        (l = t.mode),
        (U = e.child),
        (Q = U.sibling),
        (a = Sn(U, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = U.subtreeFlags & 65011712),
        Q !== null ? (C = Sn(Q, C)) : ((C = Ea(C, l, n, null)), (C.flags |= 2)),
        (C.return = t),
        (a.return = t),
        (a.sibling = C),
        (t.child = a),
        ni(null, a),
        (a = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = ps(n))
          : ((l = C.cachePool),
            l !== null
              ? ((U = tt._currentValue), (l = l.parent !== U ? { parent: U, pool: U } : l))
              : (l = Xo()),
            (C = { baseLanes: C.baseLanes | n, cachePool: l })),
        (a.memoizedState = C),
        (a.childLanes = Ss(e, S, n)),
        (t.memoizedState = ys),
        ni(e.child, a))
      : (Wn(t),
        (n = e.child),
        (e = n.sibling),
        (n = Sn(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((S = t.deletions), S === null ? ((t.deletions = [e]), (t.flags |= 16)) : S.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function xs(e, t) {
    return ((t = mu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function mu(e, t) {
    return ((e = Bt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Es(e, t, n) {
    return (
      za(t, e.child, null, n),
      (e = xs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ad(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Hr(e.return, t, n));
  }
  function bs(e, t, n, a, l, u) {
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
  function ld(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    a = a.children;
    var S = Ie.current,
      C = (S & 2) !== 0;
    if (
      (C ? ((S = (S & 1) | 2), (t.flags |= 128)) : (S &= 1),
      ae(Ie, S),
      ht(e, t, a, n),
      (a = Ce ? Xl : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
        else if (e.tag === 19) ad(e, n, t);
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
          ((e = n.alternate), e !== null && tu(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          bs(t, !1, l, n, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && tu(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        bs(t, !0, n, null, u, a);
        break;
      case 'together':
        bs(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Cn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ta |= t.lanes), (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ll(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
      for (e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Sn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ts(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ji(e)));
  }
  function n0(e, t, n) {
    switch (t.tag) {
      case 3:
        (ye(t, t.stateNode.containerInfo), Jn(t, tt, e.memoizedState.cache), ba());
        break;
      case 27:
      case 5:
        Ze(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
        break;
      case 10:
        Jn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), kr(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Wn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? nd(e, t, n)
              : (Wn(t), (e = Cn(e, t, n)), e !== null ? e.sibling : null);
        Wn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (ll(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return ld(e, t, n);
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
        return ((t.lanes = 0), $f(e, t, n, t.pendingProps));
      case 24:
        Jn(t, tt, e.memoizedState.cache);
    }
    return Cn(e, t, n);
  }
  function id(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) at = !0;
      else {
        if (!Ts(e, n) && (t.flags & 128) === 0) return ((at = !1), n0(e, t, n));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), Ce && (t.flags & 1048576) !== 0 && Ho(t, Xl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ra(t.elementType)), (t.type = e), typeof e == 'function'))
            zr(e)
              ? ((a = Oa(e, a)), (t.tag = 1), (t = ed(null, t, e, a, n)))
              : ((t.tag = 0), (t = gs(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                ((t.tag = 11), (t = Jf(null, t, e, a, n)));
                break e;
              } else if (l === D) {
                ((t.tag = 14), (t = kf(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(x(306, t, '')));
          }
        }
        return t;
      case 0:
        return gs(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (l = Oa(a, t.pendingProps)), ed(e, t, a, l, n));
      case 3:
        e: {
          if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(x(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((l = u.element), Xr(e, t), Wl(t, a, null, n));
          var S = t.memoizedState;
          if (
            ((a = S.cache),
            Jn(t, tt, a),
            a !== u.cache && Lr(t, [tt], n, !0),
            $l(),
            (a = S.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: S.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = td(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = Xt(Error(x(424)), t)), Ql(l), (t = td(e, t, a, n)));
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
                  Ce = !0,
                  Zn = null,
                  Kt = !0,
                  n = Fo(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((ba(), a === l)) {
              t = Cn(e, t, n);
              break e;
            }
            ht(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          du(e, t),
          e === null
            ? (n = gm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ce ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Du(ie.current).createElement(n)),
                (a[ft] = t),
                (a[bt] = e),
                vt(a, n, e),
                ct(a),
                (t.stateNode = a))
            : (t.memoizedState = gm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ze(t),
          e === null &&
            Ce &&
            ((a = t.stateNode = mm(t.type, t.pendingProps, ie.current)),
            (dt = t),
            (Kt = !0),
            (l = qe),
            ua(t.type) ? ((nc = l), (qe = kt(a.firstChild))) : (qe = l)),
          ht(e, t, t.pendingProps.children, n),
          du(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ce &&
            ((l = a = qe) &&
              ((a = w0(a, t.type, t.pendingProps, Kt)),
              a !== null
                ? ((t.stateNode = a), (dt = t), (qe = kt(a.firstChild)), (Kt = !1), (l = !0))
                : (l = !1)),
            l || Kn(t)),
          Ze(t),
          (l = t.type),
          (u = t.pendingProps),
          (S = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ws(l, u) ? (a = null) : S !== null && Ws(l, S) && (t.flags |= 32),
          t.memoizedState !== null && ((l = $r(e, t, Jv, null, null, n)), (yi._currentValue = l)),
          du(e, t),
          ht(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ce &&
            ((e = n = qe) &&
              ((n = N0(n, t.pendingProps, Kt)),
              n !== null ? ((t.stateNode = n), (dt = t), (qe = null), (e = !0)) : (e = !1)),
            e || Kn(t)),
          null
        );
      case 13:
        return nd(e, t, n);
      case 4:
        return (
          ye(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = za(t, null, a, n)) : ht(e, t, a, n),
          t.child
        );
      case 11:
        return Jf(e, t, t.type, t.pendingProps, n);
      case 7:
        return (ht(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return ((a = t.pendingProps), Jn(t, t.type, a.value), ht(e, t, a.children, n), t.child);
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
        return kf(e, t, t.type, t.pendingProps, n);
      case 15:
        return Ff(e, t, t.type, t.pendingProps, n);
      case 19:
        return ld(e, t, n);
      case 31:
        return t0(e, t, n);
      case 22:
        return $f(e, t, n, t.pendingProps);
      case 24:
        return (
          Ma(t),
          (a = mt(tt)),
          e === null
            ? ((l = Yr()),
              l === null &&
                ((l = je),
                (u = jr()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: a, cache: l }),
              Vr(t),
              Jn(t, tt, l))
            : ((e.lanes & n) !== 0 && (Xr(e, t), Wl(t, null, null, n), $l()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                  Jn(t, tt, a))
                : ((a = u.cache), Jn(t, tt, a), a !== l.cache && Lr(t, [tt], n, !0))),
          ht(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(x(156, t.tag));
  }
  function Rn(e) {
    e.flags |= 4;
  }
  function Ms(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (wd()) e.flags |= 8192;
        else throw ((Aa = Wi), qr);
    } else e.flags &= -16777217;
  }
  function ud(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Em(t)))
      if (wd()) e.flags |= 8192;
      else throw ((Aa = Wi), qr);
  }
  function hu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? _t() : 536870912), (e.lanes |= t), (gl |= t)));
  }
  function ai(e, t) {
    if (!Ce)
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
  function a0(e, t, n) {
    var a = t.pendingProps;
    switch ((wr(t), t.tag)) {
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
          bn(tt),
          Re(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (al(t)
              ? Rn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Br())),
          Ve(t),
          null
        );
      case 26:
        var l = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Rn(t), u !== null ? (Ve(t), ud(t, u)) : (Ve(t), Ms(t, l, null, a, n)))
            : u
              ? u !== e.memoizedState
                ? (Rn(t), Ve(t), ud(t, u))
                : (Ve(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== a && Rn(t), Ve(t), Ms(t, l, e, a, n)),
          null
        );
      case 27:
        if ((Pe(t), (n = ie.current), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          ((e = le.current), al(t) ? jo(t) : ((e = mm(l, a, n)), (t.stateNode = e), Rn(t)));
        }
        return (Ve(t), null);
      case 5:
        if ((Pe(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Rn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(x(166));
            return (Ve(t), null);
          }
          if (((u = le.current), al(t))) jo(t);
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
            a && Rn(t);
          }
        }
        return (Ve(t), Ms(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Rn(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(x(166));
          if (((e = ie.current), al(t))) {
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
                nm(e.nodeValue, n)
              )),
              e || Kn(t, !0));
          } else ((e = Du(e).createTextNode(a)), (e[ft] = t), (t.stateNode = e));
        }
        return (Ve(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = al(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(x(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(x(557));
              e[ft] = t;
            } else (ba(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (e = !1));
          } else
            ((n = Br()),
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
          if (((l = al(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(x(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(x(317));
              l[ft] = t;
            } else (ba(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ve(t), (l = !1));
          } else
            ((l = Br()),
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
              hu(t, t.updateQueue),
              Ve(t),
              null)
        );
      case 4:
        return (Re(), e === null && Ks(t.stateNode.containerInfo), Ve(t), null);
      case 10:
        return (bn(t.type), Ve(t), null);
      case 19:
        if ((F(Ie), (a = t.memoizedState), a === null)) return (Ve(t), null);
        if (((l = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (l) ai(a, !1);
          else {
            if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = tu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      ai(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      hu(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (No(n, e), (n = n.sibling));
                  return (ae(Ie, (Ie.current & 1) | 2), Ce && xn(t, a.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ut() > Su &&
              ((t.flags |= 128), (l = !0), ai(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = tu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                hu(t, e),
                ai(a, !0),
                a.tail === null && a.tailMode === 'hidden' && !u.alternate && !Ce)
              )
                return (Ve(t), null);
            } else
              2 * ut() - a.renderingStartTime > Su &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ai(a, !1), (t.lanes = 4194304));
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
            Ce && xn(t, a.treeForkCount),
            e)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Jr(),
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
          n !== null && hu(t, n.retryQueue),
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
          e !== null && F(Ca),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          bn(tt),
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
  function l0(e, t) {
    switch ((wr(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          bn(tt),
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
          ba();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(x(340));
          ba();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (F(Ie), null);
      case 4:
        return (Re(), null);
      case 10:
        return (bn(t.type), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Jr(),
          e !== null && F(Ca),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (bn(tt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rd(e, t) {
    switch ((wr(t), t.tag)) {
      case 3:
        (bn(tt), Re());
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
        bn(t.type);
        break;
      case 22:
      case 23:
        (Ht(t), Jr(), e !== null && F(Ca));
        break;
      case 24:
        bn(tt);
    }
  }
  function li(e, t) {
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
      Ne(t, t.return, C);
    }
  }
  function In(e, t, n) {
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
  function sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Wo(t, n);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function cd(e, t, n) {
    ((n.props = Oa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function ii(e, t) {
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
  function fn(e, t) {
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
  function od(e) {
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
  function Cs(e, t, n) {
    try {
      var a = e.stateNode;
      (R0(a, e.type, n, t), (a[bt] = t));
    } catch (l) {
      Ne(e, e.return, l);
    }
  }
  function fd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ua(e.type)) || e.tag === 4
    );
  }
  function Rs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && ua(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function As(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = yn)));
    else if (
      a !== 4 &&
      (a === 27 && ua(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (As(e, t, n), e = e.sibling; e !== null; ) (As(e, t, n), (e = e.sibling));
  }
  function vu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && (a === 27 && ua(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for (vu(e, t, n), e = e.sibling; e !== null; ) (vu(e, t, n), (e = e.sibling));
  }
  function dd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      (vt(t, a, n), (t[ft] = e), (t[bt] = n));
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var An = !1,
    lt = !1,
    zs = !1,
    md = typeof WeakSet == 'function' ? WeakSet : Set,
    ot = null;
  function i0(e, t) {
    if (((e = e.containerInfo), (Fs = Hu), (e = Mo(e)), Er(e))) {
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
              $ = 0,
              P = e,
              Z = null;
            t: for (;;) {
              for (
                var k;
                P !== n || (l !== 0 && P.nodeType !== 3) || (C = S + l),
                  P !== u || (a !== 0 && P.nodeType !== 3) || (U = S + a),
                  P.nodeType === 3 && (S += P.nodeValue.length),
                  (k = P.firstChild) !== null;
              )
                ((Z = P), (P = k));
              for (;;) {
                if (P === e) break t;
                if (
                  (Z === n && ++Q === l && (C = S),
                  Z === u && ++$ === a && (U = S),
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
    for ($s = { focusedElem: e, selectionRange: n }, Hu = !1, ot = t; ot !== null; )
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
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) Is(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Is(e);
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
  function hd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Dn(e, n), a & 4 && li(5, n));
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
        (a & 64 && sd(n), a & 512 && ii(n, n.return));
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
            Wo(e, t);
          } catch (S) {
            Ne(n, n.return, S);
          }
        }
        break;
      case 27:
        t === null && a & 4 && dd(n);
      case 26:
      case 5:
        (Dn(e, n), t === null && a & 4 && od(n), a & 512 && ii(n, n.return));
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        (Dn(e, n), a & 4 && yd(e, n));
        break;
      case 13:
        (Dn(e, n),
          a & 4 && pd(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = h0.bind(null, n)), B0(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || An), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || lt), (l = An));
          var u = lt;
          ((An = a),
            (lt = t) && !u ? On(e, n, (n.subtreeFlags & 8772) !== 0) : Dn(e, n),
            (An = l),
            (lt = u));
        }
        break;
      case 30:
        break;
      default:
        Dn(e, n);
    }
  }
  function vd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), vd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && lr(t)),
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
    Mt = !1;
  function zn(e, t, n) {
    for (n = n.child; n !== null; ) (gd(e, t, n), (n = n.sibling));
  }
  function gd(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == 'function')
      try {
        St.onCommitFiberUnmount(va, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (lt || fn(n, t),
          zn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        lt || fn(n, t);
        var a = Qe,
          l = Mt;
        (ua(n.type) && ((Qe = n.stateNode), (Mt = !1)),
          zn(e, t, n),
          hi(n.stateNode),
          (Qe = a),
          (Mt = l));
        break;
      case 5:
        lt || fn(n, t);
      case 6:
        if (((a = Qe), (l = Mt), (Qe = null), zn(e, t, n), (Qe = a), (Mt = l), Qe !== null))
          if (Mt)
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
          (Mt
            ? ((e = Qe),
              sm(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode
              ),
              Ml(e))
            : sm(Qe, n.stateNode));
        break;
      case 4:
        ((a = Qe),
          (l = Mt),
          (Qe = n.stateNode.containerInfo),
          (Mt = !0),
          zn(e, t, n),
          (Qe = a),
          (Mt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (In(2, n, t), lt || In(4, n, t), zn(e, t, n));
        break;
      case 1:
        (lt ||
          (fn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && cd(n, t, a)),
          zn(e, t, n));
        break;
      case 21:
        zn(e, t, n);
        break;
      case 22:
        ((lt = (a = lt) || n.memoizedState !== null), zn(e, t, n), (lt = a));
        break;
      default:
        zn(e, t, n);
    }
  }
  function yd(e, t) {
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
  function pd(e, t) {
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
  function u0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new md()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new md()),
          t
        );
      default:
        throw Error(x(435, e.tag));
    }
  }
  function gu(e, t) {
    var n = u0(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = v0.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Ct(e, t) {
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
              if (ua(C.type)) {
                ((Qe = C.stateNode), (Mt = !1));
                break e;
              }
              break;
            case 5:
              ((Qe = C.stateNode), (Mt = !1));
              break e;
            case 3:
            case 4:
              ((Qe = C.stateNode.containerInfo), (Mt = !0));
              break e;
          }
          C = C.return;
        }
        if (Qe === null) throw Error(x(160));
        (gd(u, S, l),
          (Qe = null),
          (Mt = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Sd(t, e), (t = t.sibling));
  }
  var en = null;
  function Sd(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ct(t, e), Rt(e), a & 4 && (In(3, e, e.return), li(3, e), In(5, e, e.return)));
        break;
      case 1:
        (Ct(t, e),
          Rt(e),
          a & 512 && (lt || n === null || fn(n, n.return)),
          a & 64 &&
            An &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = en;
        if ((Ct(t, e), Rt(e), a & 512 && (lt || n === null || fn(n, n.return)), a & 4)) {
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
                          u[wl] ||
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
                      var S = Sm('link', 'href', l).get(a + (n.href || ''));
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
                      ((u = l.createElement(a)), vt(u, a, n), l.head.appendChild(u));
                      break;
                    case 'meta':
                      if ((S = Sm('meta', 'content', l).get(a + (n.content || '')))) {
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
                      ((u = l.createElement(a)), vt(u, a, n), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(x(468, a));
                  }
                  ((u[ft] = e), ct(u), (a = u));
                }
                e.stateNode = a;
              } else xm(l, e.type, e.stateNode);
            else e.stateNode = pm(l, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                a === null ? xm(l, e.type, e.stateNode) : pm(l, a, e.memoizedProps))
              : a === null && e.stateNode !== null && Cs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ct(t, e),
          Rt(e),
          a & 512 && (lt || n === null || fn(n, n.return)),
          n !== null && a & 4 && Cs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((Ct(t, e), Rt(e), a & 512 && (lt || n === null || fn(n, n.return)), e.flags & 32)) {
          l = e.stateNode;
          try {
            Ja(l, '');
          } catch (re) {
            Ne(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), Cs(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (zs = !0));
        break;
      case 6:
        if ((Ct(t, e), Rt(e), a & 4)) {
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
          ((wu = null),
          (l = en),
          (en = Ou(t.containerInfo)),
          Ct(t, e),
          (en = l),
          Rt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ml(t.containerInfo);
          } catch (re) {
            Ne(e, e.return, re);
          }
        zs && ((zs = !1), xd(e));
        break;
      case 4:
        ((a = en), (en = Ou(e.stateNode.containerInfo)), Ct(t, e), Rt(e), (en = a));
        break;
      case 12:
        (Ct(t, e), Rt(e));
        break;
      case 31:
        (Ct(t, e),
          Rt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), gu(e, a))));
        break;
      case 13:
        (Ct(t, e),
          Rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (pu = ut()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), gu(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var U = n !== null && n.memoizedState !== null,
          Q = An,
          $ = lt;
        if (((An = Q || l), (lt = $ || U), Ct(t, e), (lt = $), (An = Q), Rt(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || U || An || lt || _a(e)),
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
                    var P = U.memoizedProps.style,
                      Z = P != null && P.hasOwnProperty('display') ? P.display : null;
                    C.style.display = Z == null || typeof Z == 'boolean' ? '' : ('' + Z).trim();
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
                  l ? cm(k, !0) : cm(U.stateNode, !1);
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
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), gu(e, n))));
        break;
      case 19:
        (Ct(t, e),
          Rt(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), gu(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ct(t, e), Rt(e));
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (fd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(x(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = Rs(e);
            vu(e, u, l);
            break;
          case 5:
            var S = n.stateNode;
            n.flags & 32 && (Ja(S, ''), (n.flags &= -33));
            var C = Rs(e);
            vu(e, C, S);
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo,
              Q = Rs(e);
            As(e, Q, U);
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
  function xd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (xd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (hd(e, t.alternate, t), (t = t.sibling));
  }
  function _a(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (In(4, t, t.return), _a(t));
          break;
        case 1:
          fn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && cd(t, t.return, n), _a(t));
          break;
        case 27:
          hi(t.stateNode);
        case 26:
        case 5:
          (fn(t, t.return), _a(t));
          break;
        case 22:
          t.memoizedState === null && _a(t);
          break;
        case 30:
          _a(t);
          break;
        default:
          _a(t);
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
          (On(l, u, n), li(4, u));
          break;
        case 1:
          if ((On(l, u, n), (a = u), (l = a.stateNode), typeof l.componentDidMount == 'function'))
            try {
              l.componentDidMount();
            } catch (Q) {
              Ne(a, a.return, Q);
            }
          if (((a = u), (l = a.updateQueue), l !== null)) {
            var C = a.stateNode;
            try {
              var U = l.shared.hiddenCallbacks;
              if (U !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < U.length; l++) $o(U[l], C);
            } catch (Q) {
              Ne(a, a.return, Q);
            }
          }
          (n && S & 64 && sd(u), ii(u, u.return));
          break;
        case 27:
          dd(u);
        case 26:
        case 5:
          (On(l, u, n), n && a === null && S & 4 && od(u), ii(u, u.return));
          break;
        case 12:
          On(l, u, n);
          break;
        case 31:
          (On(l, u, n), n && S & 4 && yd(l, u));
          break;
        case 13:
          (On(l, u, n), n && S & 4 && pd(l, u));
          break;
        case 22:
          (u.memoizedState === null && On(l, u, n), ii(u, u.return));
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
      e !== n && (e != null && e.refCount++, n != null && Zl(n)));
  }
  function Os(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Zl(e)));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Ed(e, t, n, a), (t = t.sibling));
  }
  function Ed(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tn(e, t, n, a), l & 2048 && li(9, t));
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
            t !== e && (t.refCount++, e != null && Zl(e))));
        break;
      case 12:
        if (l & 2048) {
          (tn(e, t, n, a), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              S = u.id,
              C = u.onPostCommit;
            typeof C == 'function' &&
              C(S, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
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
              : ui(e, t)
            : u._visibility & 2
              ? tn(e, t, n, a)
              : ((u._visibility |= 2), ml(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && Ds(S, t));
        break;
      case 24:
        (tn(e, t, n, a), l & 2048 && Os(t.alternate, t));
        break;
      default:
        tn(e, t, n, a);
    }
  }
  function ml(e, t, n, a, l) {
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
          (ml(u, S, C, U, l), li(8, S));
          break;
        case 23:
          break;
        case 22:
          var $ = S.stateNode;
          (S.memoizedState !== null
            ? $._visibility & 2
              ? ml(u, S, C, U, l)
              : ui(u, S)
            : (($._visibility |= 2), ml(u, S, C, U, l)),
            l && Q & 2048 && Ds(S.alternate, S));
          break;
        case 24:
          (ml(u, S, C, U, l), l && Q & 2048 && Os(S.alternate, S));
          break;
        default:
          ml(u, S, C, U, l);
      }
      t = t.sibling;
    }
  }
  function ui(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (ui(n, a), l & 2048 && Ds(a.alternate, a));
            break;
          case 24:
            (ui(n, a), l & 2048 && Os(a.alternate, a));
            break;
          default:
            ui(n, a);
        }
        t = t.sibling;
      }
  }
  var ri = 8192;
  function hl(e, t, n) {
    if (e.subtreeFlags & ri) for (e = e.child; e !== null; ) (bd(e, t, n), (e = e.sibling));
  }
  function bd(e, t, n) {
    switch (e.tag) {
      case 26:
        (hl(e, t, n),
          e.flags & ri && e.memoizedState !== null && K0(n, en, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        hl(e, t, n);
        break;
      case 3:
      case 4:
        var a = en;
        ((en = Ou(e.stateNode.containerInfo)), hl(e, t, n), (en = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ri), (ri = 16777216), hl(e, t, n), (ri = a))
            : hl(e, t, n));
        break;
      default:
        hl(e, t, n);
    }
  }
  function Td(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((ot = a), Cd(a, e));
        }
      Td(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Md(e), (e = e.sibling));
  }
  function Md(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (si(e), e.flags & 2048 && In(9, e, e.return));
        break;
      case 3:
        si(e);
        break;
      case 12:
        si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), yu(e))
          : si(e);
        break;
      default:
        si(e);
    }
  }
  function yu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((ot = a), Cd(a, e));
        }
      Td(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (In(8, t, t.return), yu(t));
          break;
        case 22:
          ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), yu(t)));
          break;
        default:
          yu(t);
      }
      e = e.sibling;
    }
  }
  function Cd(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          In(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Zl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (ot = a));
      else
        e: for (n = e; ot !== null; ) {
          a = ot;
          var l = a.sibling,
            u = a.return;
          if ((vd(a), a === n)) {
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
  var r0 = {
      getCacheForType: function (e) {
        var t = mt(tt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return mt(tt).controller.signal;
      },
    },
    s0 = typeof WeakMap == 'function' ? WeakMap : Map,
    Oe = 0,
    je = null,
    xe = null,
    be = 0,
    we = 0,
    Lt = null,
    ea = !1,
    vl = !1,
    _s = !1,
    _n = 0,
    We = 0,
    ta = 0,
    wa = 0,
    ws = 0,
    jt = 0,
    gl = 0,
    ci = null,
    At = null,
    Ns = !1,
    pu = 0,
    Rd = 0,
    Su = 1 / 0,
    xu = null,
    na = null,
    st = 0,
    aa = null,
    yl = null,
    wn = 0,
    Bs = 0,
    Us = null,
    Ad = null,
    oi = 0,
    Hs = null;
  function Gt() {
    return (Oe & 2) !== 0 && be !== 0 ? be & -be : q.T !== null ? Vs() : qc();
  }
  function zd() {
    if (jt === 0)
      if ((be & 536870912) === 0 || Ce) {
        var e = Ke;
        ((Ke <<= 1), (Ke & 3932160) === 0 && (Ke = 262144), (jt = e));
      } else jt = 536870912;
    return ((e = Ut.current), e !== null && (e.flags |= 32), jt);
  }
  function zt(e, t, n) {
    (((e === je && (we === 2 || we === 9)) || e.cancelPendingCommit !== null) &&
      (pl(e, 0), la(e, be, jt, !1)),
      wt(e, n),
      ((Oe & 2) === 0 || e !== je) &&
        (e === je && ((Oe & 2) === 0 && (wa |= n), We === 4 && la(e, be, jt, !1)), dn(e)));
  }
  function Dd(e, t, n) {
    if ((Oe & 6) !== 0) throw Error(x(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fe(e, t),
      l = a ? f0(e, t) : js(e, t, !0),
      u = a;
    do {
      if (l === 0) {
        vl && !a && la(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !c0(n))) {
          ((l = js(e, t, !1)), (u = !1));
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
              l = ci;
              var U = C.current.memoizedState.isDehydrated;
              if ((U && (pl(C, S).flags |= 256), (S = js(C, S, !1)), S !== 2)) {
                if (_s && !U) {
                  ((C.errorRecoveryDisabledLanes |= u), (wa |= u), (l = 4));
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
          (pl(e, 0), la(e, t, 0, !0));
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
              la(a, t, jt, !ea);
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
          if ((t & 62914560) === t && ((l = pu + 300 - ut()), 10 < l)) {
            if ((la(a, t, jt, !ea), rt(a, 0, !0) !== 0)) break e;
            ((wn = t),
              (a.timeoutHandle = um(
                Od.bind(null, a, n, At, xu, Ns, t, jt, wa, gl, ea, u, 'Throttled', -0, 0),
                l
              )));
            break e;
          }
          Od(a, n, At, xu, Ns, t, jt, wa, gl, ea, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    dn(e);
  }
  function Od(e, t, n, a, l, u, S, C, U, Q, $, P, Z, k) {
    if (((e.timeoutHandle = -1), (P = t.subtreeFlags), P & 8192 || (P & 16785408) === 16785408)) {
      ((P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yn,
      }),
        bd(t, u, P));
      var re = (u & 62914560) === u ? pu - ut() : (u & 4194048) === u ? Rd - ut() : 0;
      if (((re = J0(P, re)), re !== null)) {
        ((wn = u),
          (e.cancelPendingCommit = re(jd.bind(null, e, t, u, n, a, l, S, C, U, $, P, null, Z, k))),
          la(e, u, S, !Q));
        return;
      }
    }
    jd(e, t, u, n, a, l, S, C, U);
  }
  function c0(e) {
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
  function la(e, t, n, a) {
    ((t &= ~ws),
      (t &= ~wa),
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
  function Eu() {
    return (Oe & 6) === 0 ? (fi(0), !1) : !0;
  }
  function Ls() {
    if (xe !== null) {
      if (we === 0) var e = xe.return;
      else ((e = xe), (En = Ta = null), Ir(e), (sl = null), (Jl = 0), (e = xe));
      for (; e !== null; ) (rd(e.alternate, e), (e = e.return));
      xe = null;
    }
  }
  function pl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), D0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (wn = 0),
      Ls(),
      (je = e),
      (xe = n = Sn(e.current, null)),
      (be = t),
      (we = 0),
      (Lt = null),
      (ea = !1),
      (vl = Fe(e, t)),
      (_s = !1),
      (gl = jt = ws = wa = ta = We = 0),
      (At = ci = null),
      (Ns = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - ve(a),
          u = 1 << l;
        ((t |= e[l]), (a &= ~u));
      }
    return ((_n = t), Vi(), n);
  }
  function _d(e, t) {
    ((pe = null),
      (q.H = ti),
      t === rl || t === $i
        ? ((t = Ko()), (we = 3))
        : t === qr
          ? ((t = Ko()), (we = 4))
          : (we =
              t === vs
                ? 8
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? 6
                  : 1),
      (Lt = t),
      xe === null && ((We = 1), ou(e, Xt(t, e.current))));
  }
  function wd() {
    var e = Ut.current;
    return e === null
      ? !0
      : (be & 4194048) === be
        ? Jt === null
        : (be & 62914560) === be || (be & 536870912) !== 0
          ? e === Jt
          : !1;
  }
  function Nd() {
    var e = q.H;
    return ((q.H = ti), e === null ? ti : e);
  }
  function Bd() {
    var e = q.A;
    return ((q.A = r0), e);
  }
  function bu() {
    ((We = 4),
      ea || ((be & 4194048) !== be && Ut.current !== null) || (vl = !0),
      ((ta & 134217727) === 0 && (wa & 134217727) === 0) || je === null || la(je, be, jt, !1));
  }
  function js(e, t, n) {
    var a = Oe;
    Oe |= 2;
    var l = Nd(),
      u = Bd();
    ((je !== e || be !== t) && ((xu = null), pl(e, t)), (t = !1));
    var S = We;
    e: do
      try {
        if (we !== 0 && xe !== null) {
          var C = xe,
            U = Lt;
          switch (we) {
            case 8:
              (Ls(), (S = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var Q = we;
              if (((we = 0), (Lt = null), Sl(e, C, U, Q), n && vl)) {
                S = 0;
                break e;
              }
              break;
            default:
              ((Q = we), (we = 0), (Lt = null), Sl(e, C, U, Q));
          }
        }
        (o0(), (S = We));
        break;
      } catch ($) {
        _d(e, $);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (En = Ta = null),
      (Oe = a),
      (q.H = l),
      (q.A = u),
      xe === null && ((je = null), (be = 0), Vi()),
      S
    );
  }
  function o0() {
    for (; xe !== null; ) Ud(xe);
  }
  function f0(e, t) {
    var n = Oe;
    Oe |= 2;
    var a = Nd(),
      l = Bd();
    je !== e || be !== t ? ((xu = null), (Su = ut() + 500), pl(e, t)) : (vl = Fe(e, t));
    e: do
      try {
        if (we !== 0 && xe !== null) {
          t = xe;
          var u = Lt;
          t: switch (we) {
            case 1:
              ((we = 0), (Lt = null), Sl(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Qo(u)) {
                ((we = 0), (Lt = null), Hd(t));
                break;
              }
              ((t = function () {
                ((we !== 2 && we !== 9) || je !== e || (we = 7), dn(e));
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
              Qo(u) ? ((we = 0), (Lt = null), Hd(t)) : ((we = 0), (Lt = null), Sl(e, t, u, 7));
              break;
            case 5:
              var S = null;
              switch (xe.tag) {
                case 26:
                  S = xe.memoizedState;
                case 5:
                case 27:
                  var C = xe;
                  if (S ? Em(S) : C.stateNode.complete) {
                    ((we = 0), (Lt = null));
                    var U = C.sibling;
                    if (U !== null) xe = U;
                    else {
                      var Q = C.return;
                      Q !== null ? ((xe = Q), Tu(Q)) : (xe = null);
                    }
                    break t;
                  }
              }
              ((we = 0), (Lt = null), Sl(e, t, u, 5));
              break;
            case 6:
              ((we = 0), (Lt = null), Sl(e, t, u, 6));
              break;
            case 8:
              (Ls(), (We = 6));
              break e;
            default:
              throw Error(x(462));
          }
        }
        d0();
        break;
      } catch ($) {
        _d(e, $);
      }
    while (!0);
    return (
      (En = Ta = null),
      (q.H = a),
      (q.A = l),
      (Oe = n),
      xe !== null ? 0 : ((je = null), (be = 0), Vi(), We)
    );
  }
  function d0() {
    for (; xe !== null && !ma(); ) Ud(xe);
  }
  function Ud(e) {
    var t = id(e.alternate, e, _n);
    ((e.memoizedProps = e.pendingProps), t === null ? Tu(e) : (xe = t));
  }
  function Hd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = If(n, t, t.pendingProps, t.type, void 0, be);
        break;
      case 11:
        t = If(n, t, t.pendingProps, t.type.render, t.ref, be);
        break;
      case 5:
        Ir(t);
      default:
        (rd(n, t), (t = xe = No(t, _n)), (t = id(n, t, _n)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Tu(e) : (xe = t));
  }
  function Sl(e, t, n, a) {
    ((En = Ta = null), Ir(t), (sl = null), (Jl = 0));
    var l = t.return;
    try {
      if (e0(e, l, t, n, be)) {
        ((We = 1), ou(e, Xt(n, e.current)), (xe = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((xe = l), u);
      ((We = 1), ou(e, Xt(n, e.current)), (xe = null));
      return;
    }
    t.flags & 32768
      ? (Ce || a === 1
          ? (e = !0)
          : vl || (be & 536870912) !== 0
            ? (e = !1)
            : ((ea = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ut.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ld(t, e))
      : Tu(t);
  }
  function Tu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ld(t, ea);
        return;
      }
      e = t.return;
      var n = a0(t.alternate, t, _n);
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
  function Ld(e, t) {
    do {
      var n = l0(e.alternate, e);
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
  function jd(e, t, n, a, l, u, S, C, U) {
    e.cancelPendingCommit = null;
    do Mu();
    while (st !== 0);
    if ((Oe & 6) !== 0) throw Error(x(327));
    if (t !== null) {
      if (t === e.current) throw Error(x(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Rr),
        sn(e, n, u, S, C, U),
        e === je && ((xe = je = null), (be = 0)),
        (yl = t),
        (aa = e),
        (wn = n),
        (Bs = u),
        (Us = l),
        (Ad = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            g0(Yn, function () {
              return (Xd(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = q.T), (q.T = null), (l = K.p), (K.p = 2), (S = Oe), (Oe |= 4));
        try {
          i0(e, t, n);
        } finally {
          ((Oe = S), (K.p = l), (q.T = a));
        }
      }
      ((st = 1), Gd(), Yd(), qd());
    }
  }
  function Gd() {
    if (st === 1) {
      st = 0;
      var e = aa,
        t = yl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = Oe;
        Oe |= 4;
        try {
          Sd(t, e);
          var u = $s,
            S = Mo(e.containerInfo),
            C = u.focusedElem,
            U = u.selectionRange;
          if (S !== C && C && C.ownerDocument && To(C.ownerDocument.documentElement, C)) {
            if (U !== null && Er(C)) {
              var Q = U.start,
                $ = U.end;
              if (($ === void 0 && ($ = Q), 'selectionStart' in C))
                ((C.selectionStart = Q), (C.selectionEnd = Math.min($, C.value.length)));
              else {
                var P = C.ownerDocument || document,
                  Z = (P && P.defaultView) || window;
                if (Z.getSelection) {
                  var k = Z.getSelection(),
                    re = C.textContent.length,
                    me = Math.min(U.start, re),
                    Le = U.end === void 0 ? me : Math.min(U.end, re);
                  !k.extend && me > Le && ((S = Le), (Le = me), (me = S));
                  var V = bo(C, me),
                    Y = bo(C, Le);
                  if (
                    V &&
                    Y &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== V.node ||
                      k.anchorOffset !== V.offset ||
                      k.focusNode !== Y.node ||
                      k.focusOffset !== Y.offset)
                  ) {
                    var X = P.createRange();
                    (X.setStart(V.node, V.offset),
                      k.removeAllRanges(),
                      me > Le
                        ? (k.addRange(X), k.extend(Y.node, Y.offset))
                        : (X.setEnd(Y.node, Y.offset), k.addRange(X)));
                  }
                }
              }
            }
            for (P = [], k = C; (k = k.parentNode); )
              k.nodeType === 1 && P.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (typeof C.focus == 'function' && C.focus(), C = 0; C < P.length; C++) {
              var W = P[C];
              ((W.element.scrollLeft = W.left), (W.element.scrollTop = W.top));
            }
          }
          ((Hu = !!Fs), ($s = Fs = null));
        } finally {
          ((Oe = l), (K.p = a), (q.T = n));
        }
      }
      ((e.current = t), (st = 2));
    }
  }
  function Yd() {
    if (st === 2) {
      st = 0;
      var e = aa,
        t = yl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = q.T), (q.T = null));
        var a = K.p;
        K.p = 2;
        var l = Oe;
        Oe |= 4;
        try {
          hd(e, t.alternate, t);
        } finally {
          ((Oe = l), (K.p = a), (q.T = n));
        }
      }
      st = 3;
    }
  }
  function qd() {
    if (st === 4 || st === 3) {
      ((st = 0), ha());
      var e = aa,
        t = yl,
        n = wn,
        a = Ad;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (st = 5)
        : ((st = 0), (yl = aa = null), Vd(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (na = null),
        nr(n),
        (t = t.stateNode),
        St && typeof St.onCommitFiberRoot == 'function')
      )
        try {
          St.onCommitFiberRoot(va, t, void 0, (t.current.flags & 128) === 128);
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
      ((wn & 3) !== 0 && Mu(),
        dn(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0 ? (e === Hs ? oi++ : ((oi = 0), (Hs = e))) : (oi = 0),
        fi(0));
    }
  }
  function Vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Zl(t)));
  }
  function Mu() {
    return (Gd(), Yd(), qd(), Xd());
  }
  function Xd() {
    if (st !== 5) return !1;
    var e = aa,
      t = Bs;
    Bs = 0;
    var n = nr(wn),
      a = q.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (q.T = null), (n = Us), (Us = null));
      var u = aa,
        S = wn;
      if (((st = 0), (yl = aa = null), (wn = 0), (Oe & 6) !== 0)) throw Error(x(331));
      var C = Oe;
      if (
        ((Oe |= 4),
        Md(u.current),
        Ed(u, u.current, S, n),
        (Oe = C),
        fi(0, !1),
        St && typeof St.onPostCommitFiberRoot == 'function')
      )
        try {
          St.onPostCommitFiberRoot(va, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (q.T = a), Vd(e, t));
    }
  }
  function Qd(e, t, n) {
    ((t = Xt(n, t)),
      (t = hs(e.stateNode, t, 2)),
      (e = $n(e, t, 2)),
      e !== null && (wt(e, 2), dn(e)));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) Qd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (na === null || !na.has(a)))
          ) {
            ((e = Xt(n, e)),
              (n = Zf(2)),
              (a = $n(t, n, 2)),
              a !== null && (Kf(n, a, t, e), wt(a, 2), dn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new s0();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || ((_s = !0), l.add(n), (e = m0.bind(null, e, t, n)), t.then(e, e));
  }
  function m0(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      je === e &&
        (be & n) === n &&
        (We === 4 || (We === 3 && (be & 62914560) === be && 300 > ut() - pu)
          ? (Oe & 2) === 0 && pl(e, 0)
          : (ws |= n),
        gl === be && (gl = 0)),
      dn(e));
  }
  function Zd(e, t) {
    (t === 0 && (t = _t()), (e = xa(e, t)), e !== null && (wt(e, t), dn(e)));
  }
  function h0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Zd(e, n));
  }
  function v0(e, t) {
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
    (a !== null && a.delete(t), Zd(e, n));
  }
  function g0(e, t) {
    return pt(e, t);
  }
  var Cu = null,
    xl = null,
    Ys = !1,
    Ru = !1,
    qs = !1,
    ia = 0;
  function dn(e) {
    (e !== xl && e.next === null && (xl === null ? (Cu = xl = e) : (xl = xl.next = e)),
      (Ru = !0),
      Ys || ((Ys = !0), p0()));
  }
  function fi(e, t) {
    if (!qs && Ru) {
      qs = !0;
      do
        for (var n = !1, a = Cu; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var S = a.suspendedLanes,
                C = a.pingedLanes;
              ((u = (1 << (31 - ve(42 | e) + 1)) - 1),
                (u &= l & ~(S & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), Fd(a, u));
          } else
            ((u = be),
              (u = rt(
                a,
                a === je ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Fe(a, u) || ((n = !0), Fd(a, u)));
          a = a.next;
        }
      while (n);
      qs = !1;
    }
  }
  function y0() {
    Kd();
  }
  function Kd() {
    Ru = Ys = !1;
    var e = 0;
    ia !== 0 && z0() && (e = ia);
    for (var t = ut(), n = null, a = Cu; a !== null; ) {
      var l = a.next,
        u = Jd(a, t);
      (u === 0
        ? ((a.next = null), n === null ? (Cu = l) : (n.next = l), l === null && (xl = n))
        : ((n = a), (e !== 0 || (u & 3) !== 0) && (Ru = !0)),
        (a = l));
    }
    ((st !== 0 && st !== 5) || fi(e), ia !== 0 && (ia = 0));
  }
  function Jd(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var S = 31 - ve(u),
        C = 1 << S,
        U = l[S];
      (U === -1
        ? ((C & n) === 0 || (C & a) !== 0) && (l[S] = xt(C, t))
        : U <= t && (e.expiredLanes |= C),
        (u &= ~C));
    }
    if (
      ((t = je),
      (n = be),
      (n = rt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (a = e.callbackNode),
      n === 0 || (e === t && (we === 2 || we === 9)) || e.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && Ot(a), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((n & 3) === 0 || Fe(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Ot(a), nr(n))) {
        case 2:
        case 8:
          n = ja;
          break;
        case 32:
          n = Yn;
          break;
        case 268435456:
          n = un;
          break;
        default:
          n = Yn;
      }
      return (
        (a = kd.bind(null, e)),
        (n = pt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Ot(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function kd(e, t) {
    if (st !== 0 && st !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Mu() && e.callbackNode !== n) return null;
    var a = be;
    return (
      (a = rt(e, e === je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Dd(e, a, t),
          Jd(e, ut()),
          e.callbackNode != null && e.callbackNode === n ? kd.bind(null, e) : null)
    );
  }
  function Fd(e, t) {
    if (Mu()) return null;
    Dd(e, t, !0);
  }
  function p0() {
    O0(function () {
      (Oe & 6) !== 0 ? pt(vn, y0) : Kd();
    });
  }
  function Vs() {
    if (ia === 0) {
      var e = il;
      (e === 0 && ((e = Ge), (Ge <<= 1), (Ge & 261888) === 0 && (Ge = 256)), (ia = e));
    }
    return ia;
  }
  function $d(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Bi('' + e);
  }
  function Wd(e, t) {
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
  function S0(e, t, n, a, l) {
    if (t === 'submit' && n && n.stateNode === l) {
      var u = $d((l[bt] || null).action),
        S = a.submitter;
      S &&
        ((t = (t = S[bt] || null) ? $d(t.formAction) : S.getAttribute('formAction')),
        t !== null && ((u = t), (S = null)));
      var C = new ji('action', 'action', null, a, l);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ia !== 0) {
                  var U = S ? Wd(l, S) : new FormData(l);
                  ss(n, { pending: !0, data: U, method: l.method, action: u }, null, U);
                }
              } else
                typeof u == 'function' &&
                  (C.preventDefault(),
                  (U = S ? Wd(l, S) : new FormData(l)),
                  ss(n, { pending: !0, data: U, method: l.method, action: u }, u, U));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Xs = 0; Xs < Cr.length; Xs++) {
    var Qs = Cr[Xs],
      x0 = Qs.toLowerCase(),
      E0 = Qs[0].toUpperCase() + Qs.slice(1);
    It(x0, 'on' + E0);
  }
  (It(Ao, 'onAnimationEnd'),
    It(zo, 'onAnimationIteration'),
    It(Do, 'onAnimationStart'),
    It('dblclick', 'onDoubleClick'),
    It('focusin', 'onFocus'),
    It('focusout', 'onBlur'),
    It(Lv, 'onTransitionRun'),
    It(jv, 'onTransitionStart'),
    It(Gv, 'onTransitionCancel'),
    It(Oo, 'onTransitionEnd'),
    Za('onMouseEnter', ['mouseout', 'mouseover']),
    Za('onMouseLeave', ['mouseout', 'mouseover']),
    Za('onPointerEnter', ['pointerout', 'pointerover']),
    Za('onPointerLeave', ['pointerout', 'pointerover']),
    ga('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    ga(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    ga('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ga('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    ga(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    ga(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var di =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    b0 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(di)
    );
  function Pd(e, t) {
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
            } catch ($) {
              qi($);
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
            } catch ($) {
              qi($);
            }
            ((l.currentTarget = null), (u = U));
          }
      }
    }
  }
  function Ee(e, t) {
    var n = t[ar];
    n === void 0 && (n = t[ar] = new Set());
    var a = e + '__bubble';
    n.has(a) || (Id(t, e, 2, !1), n.add(a));
  }
  function Zs(e, t, n) {
    var a = 0;
    (t && (a |= 4), Id(n, e, a, t));
  }
  var Au = '_reactListening' + Math.random().toString(36).slice(2);
  function Ks(e) {
    if (!e[Au]) {
      ((e[Au] = !0),
        Qc.forEach(function (n) {
          n !== 'selectionchange' && (b0.has(n) || Zs(n, !1, e), Zs(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Au] || ((t[Au] = !0), Zs('selectionchange', !1, t));
    }
  }
  function Id(e, t, n, a) {
    switch (zm(t)) {
      case 2:
        var l = $0;
        break;
      case 8:
        l = W0;
        break;
      default:
        l = rc;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !dr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Js(e, t, n, a, l) {
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
            if (((S = Va(C)), S === null)) return;
            if (((U = S.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              a = u = S;
              continue e;
            }
            C = C.parentNode;
          }
        }
        a = a.return;
      }
    no(function () {
      var Q = u,
        $ = or(n),
        P = [];
      e: {
        var Z = _o.get(e);
        if (Z !== void 0) {
          var k = ji,
            re = e;
          switch (e) {
            case 'keypress':
              if (Hi(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = vv;
              break;
            case 'focusin':
              ((re = 'focus'), (k = gr));
              break;
            case 'focusout':
              ((re = 'blur'), (k = gr));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = gr;
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
              k = io;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = av;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = pv;
              break;
            case Ao:
            case zo:
            case Do:
              k = uv;
              break;
            case Oo:
              k = xv;
              break;
            case 'scroll':
            case 'scrollend':
              k = tv;
              break;
            case 'wheel':
              k = bv;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = sv;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = ro;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = Mv;
          }
          var me = (t & 4) !== 0,
            Le = !me && (e === 'scroll' || e === 'scrollend'),
            V = me ? (Z !== null ? Z + 'Capture' : null) : Z;
          me = [];
          for (var Y = Q, X; Y !== null; ) {
            var W = Y;
            if (
              ((X = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                X === null ||
                V === null ||
                ((W = Bl(Y, V)), W != null && me.push(mi(Y, W, X))),
              Le)
            )
              break;
            Y = Y.return;
          }
          0 < me.length && ((Z = new k(Z, re, null, n, $)), P.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            Z && n !== cr && (re = n.relatedTarget || n.fromElement) && (Va(re) || re[qa]))
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
                (re = re ? Va(re) : null),
                re !== null &&
                  ((Le = i(re)), (me = re.tag), re !== Le || (me !== 5 && me !== 27 && me !== 6)) &&
                  (re = null))
              : ((k = null), (re = Q)),
            k !== re)
          ) {
            if (
              ((me = io),
              (W = 'onMouseLeave'),
              (V = 'onMouseEnter'),
              (Y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((me = ro), (W = 'onPointerLeave'), (V = 'onPointerEnter'), (Y = 'pointer')),
              (Le = k == null ? Z : Nl(k)),
              (X = re == null ? Z : Nl(re)),
              (Z = new me(W, Y + 'leave', k, n, $)),
              (Z.target = Le),
              (Z.relatedTarget = X),
              (W = null),
              Va($) === Q &&
                ((me = new me(V, Y + 'enter', re, n, $)),
                (me.target = X),
                (me.relatedTarget = Le),
                (W = me)),
              (Le = W),
              k && re)
            )
              t: {
                for (me = T0, V = k, Y = re, X = 0, W = V; W; W = me(W)) X++;
                W = 0;
                for (var fe = Y; fe; fe = me(fe)) W++;
                for (; 0 < X - W; ) ((V = me(V)), X--);
                for (; 0 < W - X; ) ((Y = me(Y)), W--);
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
            (k !== null && em(P, Z, k, me, !1),
              re !== null && Le !== null && em(P, Le, re, me, !0));
          }
        }
        e: {
          if (
            ((Z = Q ? Nl(Q) : window),
            (k = Z.nodeName && Z.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && Z.type === 'file'))
          )
            var ze = go;
          else if (ho(Z))
            if (yo) ze = Bv;
            else {
              ze = wv;
              var ce = _v;
            }
          else
            ((k = Z.nodeName),
              !k || k.toLowerCase() !== 'input' || (Z.type !== 'checkbox' && Z.type !== 'radio')
                ? Q && sr(Q.elementType) && (ze = go)
                : (ze = Nv));
          if (ze && (ze = ze(e, Q))) {
            vo(P, ze, n, $);
            break e;
          }
          (ce && ce(e, Z, Q),
            e === 'focusout' &&
              Q &&
              Z.type === 'number' &&
              Q.memoizedProps.value != null &&
              rr(Z, 'number', Z.value));
        }
        switch (((ce = Q ? Nl(Q) : window), e)) {
          case 'focusin':
            (ho(ce) || ce.contentEditable === 'true') && ((Wa = ce), (br = Q), (Vl = null));
            break;
          case 'focusout':
            Vl = br = Wa = null;
            break;
          case 'mousedown':
            Tr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Tr = !1), Co(P, n, $));
            break;
          case 'selectionchange':
            if (Hv) break;
          case 'keydown':
          case 'keyup':
            Co(P, n, $);
        }
        var Se;
        if (pr)
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
          $a
            ? fo(e, n) && (Te = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (Te = 'onCompositionStart');
        (Te &&
          (so &&
            n.locale !== 'ko' &&
            ($a || Te !== 'onCompositionStart'
              ? Te === 'onCompositionEnd' && $a && (Se = ao())
              : ((Xn = $), (mr = 'value' in Xn ? Xn.value : Xn.textContent), ($a = !0))),
          (ce = zu(Q, Te)),
          0 < ce.length &&
            ((Te = new uo(Te, e, null, n, $)),
            P.push({ event: Te, listeners: ce }),
            Se ? (Te.data = Se) : ((Se = mo(n)), Se !== null && (Te.data = Se)))),
          (Se = Rv ? Av(e, n) : zv(e, n)) &&
            ((Te = zu(Q, 'onBeforeInput')),
            0 < Te.length &&
              ((ce = new uo('onBeforeInput', 'beforeinput', null, n, $)),
              P.push({ event: ce, listeners: Te }),
              (ce.data = Se))),
          S0(P, e, Q, n, $));
      }
      Pd(P, t);
    });
  }
  function mi(e, t, n) {
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
          ((l = Bl(e, n)),
          l != null && a.unshift(mi(e, l, u)),
          (l = Bl(e, t)),
          l != null && a.push(mi(e, l, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function T0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function em(e, t, n, a, l) {
    for (var u = t._reactName, S = []; n !== null && n !== a; ) {
      var C = n,
        U = C.alternate,
        Q = C.stateNode;
      if (((C = C.tag), U !== null && U === a)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        Q === null ||
        ((U = Q),
        l
          ? ((Q = Bl(n, u)), Q != null && S.unshift(mi(n, Q, U)))
          : l || ((Q = Bl(n, u)), Q != null && S.push(mi(n, Q, U)))),
        (n = n.return));
    }
    S.length !== 0 && e.push({ event: t, listeners: S });
  }
  var M0 = /\r\n?/g,
    C0 = /\u0000|\uFFFD/g;
  function tm(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        M0,
        `
`
      )
      .replace(C0, '');
  }
  function nm(e, t) {
    return ((t = tm(t)), tm(e) === t);
  }
  function He(e, t, n, a, l, u) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || Ja(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && Ja(e, '' + a);
        break;
      case 'className':
        wi(e, 'class', a);
        break;
      case 'tabIndex':
        wi(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        wi(e, n, a);
        break;
      case 'style':
        eo(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          wi(e, 'data', a);
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
        ((a = Bi('' + a)), e.setAttribute(n, a));
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
        ((a = Bi('' + a)), e.setAttribute(n, a));
        break;
      case 'onClick':
        a != null && (e.onclick = yn);
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
        ((n = Bi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
        (Ee('beforetoggle', e), Ee('toggle', e), _i(e, 'popover', a));
        break;
      case 'xlinkActuate':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        gn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        gn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        gn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        gn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        _i(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Ih.get(n) || n), _i(e, n, a));
    }
  }
  function ks(e, t, n, a, l, u) {
    switch (n) {
      case 'style':
        eo(e, a, u);
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
          ? Ja(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Ja(e, '' + a);
        break;
      case 'onScroll':
        a != null && Ee('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && Ee('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = yn);
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
        if (!Zc.hasOwnProperty(n))
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
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : _i(e, n, a);
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
        var C = (u = S = l = null),
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
                  C = $;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if ($ != null) throw Error(x(137, t));
                  break;
                default:
                  He(e, t, a, $, n, null);
              }
          }
        $c(e, u, C, U, Q, S, l, !1);
        return;
      case 'select':
        (Ee('invalid', e), (a = S = u = null));
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
                He(e, t, l, C, n, null);
            }
        ((t = u),
          (n = S),
          (e.multiple = !!a),
          t != null ? Ka(e, !!a, t, !1) : n != null && Ka(e, !!a, n, !0));
        return;
      case 'textarea':
        (Ee('invalid', e), (u = l = a = null));
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
                He(e, t, S, C, n, null);
            }
        Pc(e, a, l, u);
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
        for (a = 0; a < di.length; a++) Ee(di[a], e);
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
        if (sr(t)) {
          for ($ in n)
            n.hasOwnProperty($) && ((a = n[$]), a !== void 0 && ks(e, t, $, a, n, void 0));
          return;
        }
    }
    for (C in n) n.hasOwnProperty(C) && ((a = n[C]), a != null && He(e, t, C, a, n, null));
  }
  function R0(e, t, n, a) {
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
          $ = null;
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
                a.hasOwnProperty(k) || He(e, t, k, null, a, P);
            }
        }
        for (var Z in a) {
          var k = a[Z];
          if (((P = n[Z]), a.hasOwnProperty(Z) && (k != null || P != null)))
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
                C = k;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (k != null) throw Error(x(137, t));
                break;
              default:
                k !== P && He(e, t, Z, k, a, P);
            }
        }
        ur(e, S, C, U, Q, $, u, l);
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
                a.hasOwnProperty(u) || He(e, t, u, null, a, U);
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
                u !== U && He(e, t, l, u, a, U);
            }
        ((t = C),
          (n = S),
          (a = k),
          Z != null
            ? Ka(e, !!n, Z, !1)
            : !!a != !!n && (t != null ? Ka(e, !!n, t, !0) : Ka(e, !!n, n ? [] : '', !1)));
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
                He(e, t, C, null, a, l);
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
        Wc(e, Z, k);
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
        if (sr(t)) {
          for (var Le in n)
            ((Z = n[Le]),
              n.hasOwnProperty(Le) &&
                Z !== void 0 &&
                !a.hasOwnProperty(Le) &&
                ks(e, t, Le, void 0, a, Z));
          for ($ in a)
            ((Z = a[$]),
              (k = n[$]),
              !a.hasOwnProperty($) ||
                Z === k ||
                (Z === void 0 && k === void 0) ||
                ks(e, t, $, Z, a, k));
          return;
        }
    }
    for (var V in n)
      ((Z = n[V]),
        n.hasOwnProperty(V) && Z != null && !a.hasOwnProperty(V) && He(e, t, V, null, a, Z));
    for (P in a)
      ((Z = a[P]),
        (k = n[P]),
        !a.hasOwnProperty(P) || Z === k || (Z == null && k == null) || He(e, t, P, Z, a, k));
  }
  function am(e) {
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
  function A0() {
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
        if (u && C && am(S)) {
          for (S = 0, C = l.responseEnd, a += 1; a < n.length; a++) {
            var U = n[a],
              Q = U.startTime;
            if (Q > C) break;
            var $ = U.transferSize,
              P = U.initiatorType;
            $ && am(P) && ((U = U.responseEnd), (S += $ * (U < C ? 1 : (C - Q) / (U - Q))));
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
  var Fs = null,
    $s = null;
  function Du(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function lm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function im(e, t) {
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
  function Ws(e, t) {
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
  var Ps = null;
  function z0() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === Ps ? !1 : ((Ps = e), !0)) : ((Ps = null), !1);
  }
  var um = typeof setTimeout == 'function' ? setTimeout : void 0,
    D0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    rm = typeof Promise == 'function' ? Promise : void 0,
    O0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof rm < 'u'
          ? function (e) {
              return rm.resolve(null).then(e).catch(_0);
            }
          : um;
  function _0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ua(e) {
    return e === 'head';
  }
  function sm(e, t) {
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
        else if (n === 'html') hi(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), hi(n));
          for (var u = n.firstChild; u; ) {
            var S = u.nextSibling,
              C = u.nodeName;
            (u[wl] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = S));
          }
        } else n === 'body' && hi(e.ownerDocument.body);
      n = l;
    } while (n);
    Ml(t);
  }
  function cm(e, t) {
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
  function Is(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Is(n), lr(n));
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
  function w0(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[wl])
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
  function N0(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = kt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function om(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
        ((e = kt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ec(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function tc(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function B0(e, t) {
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
  var nc = null;
  function fm(e) {
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
  function dm(e) {
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
  function mm(e, t, n) {
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
  function hi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    lr(e);
  }
  var Ft = new Map(),
    hm = new Set();
  function Ou(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Nn = K.d;
  K.d = { f: U0, r: H0, D: L0, C: j0, L: G0, m: Y0, X: V0, S: q0, M: X0 };
  function U0() {
    var e = Nn.f(),
      t = Eu();
    return e || t;
  }
  function H0(e) {
    var t = Xa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? _f(t) : Nn.r(e);
  }
  var El = typeof document > 'u' ? null : document;
  function vm(e, t, n) {
    var a = El;
    if (a && typeof t == 'string' && t) {
      var l = qt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == 'string' && (l += '[crossorigin="' + n + '"]'),
        hm.has(l) ||
          (hm.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement('link')), vt(t, 'link', e), ct(t), a.head.appendChild(t))));
    }
  }
  function L0(e) {
    (Nn.D(e), vm('dns-prefetch', e, null));
  }
  function j0(e, t) {
    (Nn.C(e, t), vm('preconnect', e, t));
  }
  function G0(e, t, n) {
    Nn.L(e, t, n);
    var a = El;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + qt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' && (l += '[imagesizes="' + qt(n.imageSizes) + '"]'))
        : (l += '[href="' + qt(e) + '"]');
      var u = l;
      switch (t) {
        case 'style':
          u = bl(e);
          break;
        case 'script':
          u = Tl(e);
      }
      Ft.has(u) ||
        ((e = p(
          { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
          n
        )),
        Ft.set(u, e),
        a.querySelector(l) !== null ||
          (t === 'style' && a.querySelector(vi(u))) ||
          (t === 'script' && a.querySelector(gi(u))) ||
          ((t = a.createElement('link')), vt(t, 'link', e), ct(t), a.head.appendChild(t)));
    }
  }
  function Y0(e, t) {
    Nn.m(e, t);
    var n = El;
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
          u = Tl(e);
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
            if (n.querySelector(gi(u))) return;
        }
        ((a = n.createElement('link')), vt(a, 'link', e), ct(a), n.head.appendChild(a));
      }
    }
  }
  function q0(e, t, n) {
    Nn.S(e, t, n);
    var a = El;
    if (a && e) {
      var l = Qa(a).hoistableStyles,
        u = bl(e);
      t = t || 'default';
      var S = l.get(u);
      if (!S) {
        var C = { loading: 0, preload: null };
        if ((S = a.querySelector(vi(u)))) C.loading = 5;
        else {
          ((e = p({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Ft.get(u)) && ac(e, n));
          var U = (S = a.createElement('link'));
          (ct(U),
            vt(U, 'link', e),
            (U._p = new Promise(function (Q, $) {
              ((U.onload = Q), (U.onerror = $));
            })),
            U.addEventListener('load', function () {
              C.loading |= 1;
            }),
            U.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            _u(S, t, a));
        }
        ((S = { type: 'stylesheet', instance: S, count: 1, state: C }), l.set(u, S));
      }
    }
  }
  function V0(e, t) {
    Nn.X(e, t);
    var n = El;
    if (n && e) {
      var a = Qa(n).hoistableScripts,
        l = Tl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(gi(l))),
        u ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Ft.get(l)) && lc(e, t),
          (u = n.createElement('script')),
          ct(u),
          vt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function X0(e, t) {
    Nn.M(e, t);
    var n = El;
    if (n && e) {
      var a = Qa(n).hoistableScripts,
        l = Tl(e),
        u = a.get(l);
      u ||
        ((u = n.querySelector(gi(l))),
        u ||
          ((e = p({ src: e, async: !0, type: 'module' }, t)),
          (t = Ft.get(l)) && lc(e, t),
          (u = n.createElement('script')),
          ct(u),
          vt(u, 'link', e),
          n.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(l, u));
    }
  }
  function gm(e, t, n, a) {
    var l = (l = ie.current) ? Ou(l) : null;
    if (!l) throw Error(x(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = bl(n.href)),
            (n = Qa(l).hoistableStyles),
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
          e = bl(n.href);
          var u = Qa(l).hoistableStyles,
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
              (u = l.querySelector(vi(e))) && !u._p && ((S.instance = u), (S.state.loading = 5)),
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
                u || Q0(l, e, n, S.state))),
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
            ? ((t = Tl(n)),
              (n = Qa(l).hoistableScripts),
              (a = n.get(t)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(x(444, e));
    }
  }
  function bl(e) {
    return 'href="' + qt(e) + '"';
  }
  function vi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function ym(e) {
    return p({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Q0(e, t, n, a) {
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
  function Tl(e) {
    return '[src="' + qt(e) + '"]';
  }
  function gi(e) {
    return 'script[async]' + e;
  }
  function pm(e, t, n) {
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
            _u(a, n.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          l = bl(n.href);
          var u = e.querySelector(vi(l));
          if (u) return ((t.state.loading |= 4), (t.instance = u), ct(u), u);
          ((a = ym(n)),
            (l = Ft.get(l)) && ac(a, l),
            (u = (e.ownerDocument || e).createElement('link')),
            ct(u));
          var S = u;
          return (
            (S._p = new Promise(function (C, U) {
              ((S.onload = C), (S.onerror = U));
            })),
            vt(u, 'link', a),
            (t.state.loading |= 4),
            _u(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Tl(n.src)),
            (l = e.querySelector(gi(u)))
              ? ((t.instance = l), ct(l), l)
              : ((a = n),
                (l = Ft.get(u)) && ((a = p({}, n)), lc(a, l)),
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
        ((a = t.instance), (t.state.loading |= 4), _u(a, n.precedence, e));
    return t.instance;
  }
  function _u(e, t, n) {
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
  function ac(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function lc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var wu = null;
  function Sm(e, t, n) {
    if (wu === null) {
      var a = new Map(),
        l = (wu = new Map());
      l.set(n, a);
    } else ((l = wu), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (
        !(u[wl] || u[ft] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
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
  function xm(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Z0(e, t, n) {
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
  function Em(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function K0(e, t, n, a) {
    if (
      n.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = bl(a.href),
          u = t.querySelector(vi(l));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Nu.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = u),
            ct(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = ym(a)),
          (l = Ft.get(l)) && ac(a, l),
          (u = u.createElement('link')),
          ct(u));
        var S = u;
        ((S._p = new Promise(function (C, U) {
          ((S.onload = C), (S.onerror = U));
        })),
          vt(u, 'link', a),
          (n.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Nu.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var ic = 0;
  function J0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Uu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Uu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && ic === 0 && (ic = 62500 * A0());
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && Uu(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > ic ? 50 : 800) + t
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
  function Nu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Uu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Bu = null;
  function Uu(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Bu = new Map()), t.forEach(k0, e), (Bu = null), Nu.call(e)));
  }
  function k0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Bu.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Bu.set(e, n));
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
        (a = Nu.bind(this)),
        l.addEventListener('load', a),
        l.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var yi = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function F0(e, t, n, a, l, u, S, C, U) {
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
      (this.expirationTimes = rn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = rn(0)),
      (this.hiddenUpdates = rn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = S),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()));
  }
  function bm(e, t, n, a, l, u, S, C, U, Q, $, P) {
    return (
      (e = new F0(e, t, n, S, U, Q, $, P, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Bt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = jr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Vr(u),
      e
    );
  }
  function Tm(e) {
    return e ? ((e = el), e) : el;
  }
  function Mm(e, t, n, a, l, u) {
    ((l = Tm(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = Fn(t)),
      (a.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (n = $n(e, a, t)),
      n !== null && (zt(n, e, t), Fl(n, e, t)));
  }
  function Cm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function uc(e, t) {
    (Cm(e, t), (e = e.alternate) && Cm(e, t));
  }
  function Rm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xa(e, 67108864);
      (t !== null && zt(t, e, 67108864), uc(e, 67108864));
    }
  }
  function Am(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gt();
      t = Ya(t);
      var n = xa(e, t);
      (n !== null && zt(n, e, t), uc(e, t));
    }
  }
  var Hu = !0;
  function $0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 2), rc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function W0(e, t, n, a) {
    var l = q.T;
    q.T = null;
    var u = K.p;
    try {
      ((K.p = 8), rc(e, t, n, a));
    } finally {
      ((K.p = u), (q.T = l));
    }
  }
  function rc(e, t, n, a) {
    if (Hu) {
      var l = sc(a);
      if (l === null) (Js(e, t, a, Lu, n), Dm(e, a));
      else if (I0(l, e, t, n, a)) a.stopPropagation();
      else if ((Dm(e, a), t & 4 && -1 < P0.indexOf(e))) {
        for (; l !== null; ) {
          var u = Xa(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var S = Ye(u.pendingLanes);
                  if (S !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; S; ) {
                      var U = 1 << (31 - ve(S));
                      ((C.entanglements[1] |= U), (S &= ~U));
                    }
                    (dn(u), (Oe & 6) === 0 && ((Su = ut() + 500), fi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = xa(u, 2)), C !== null && zt(C, u, 2), Eu(), uc(u, 2));
            }
          if (((u = sc(a)), u === null && Js(e, t, a, Lu, n), u === l)) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Js(e, t, a, null, n);
    }
  }
  function sc(e) {
    return ((e = or(e)), cc(e));
  }
  var Lu = null;
  function cc(e) {
    if (((Lu = null), (e = Va(e)), e !== null)) {
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
    return ((Lu = e), null);
  }
  function zm(e) {
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
        switch (La()) {
          case vn:
            return 2;
          case ja:
            return 8;
          case Yn:
          case qn:
            return 32;
          case un:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var oc = !1,
    ra = null,
    sa = null,
    ca = null,
    pi = new Map(),
    Si = new Map(),
    oa = [],
    P0 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Dm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ra = null;
        break;
      case 'dragenter':
      case 'dragleave':
        sa = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ca = null;
        break;
      case 'pointerover':
      case 'pointerout':
        pi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Si.delete(t.pointerId);
    }
  }
  function xi(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = Xa(t)), t !== null && Rm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function I0(e, t, n, a, l) {
    switch (t) {
      case 'focusin':
        return ((ra = xi(ra, e, t, n, a, l)), !0);
      case 'dragenter':
        return ((sa = xi(sa, e, t, n, a, l)), !0);
      case 'mouseover':
        return ((ca = xi(ca, e, t, n, a, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (pi.set(u, xi(pi.get(u) || null, e, t, n, a, l)), !0);
      case 'gotpointercapture':
        return ((u = l.pointerId), Si.set(u, xi(Si.get(u) || null, e, t, n, a, l)), !0);
    }
    return !1;
  }
  function Om(e) {
    var t = Va(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Vc(e.priority, function () {
                Am(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = f(n)), t !== null)) {
            ((e.blockedOn = t),
              Vc(e.priority, function () {
                Am(n);
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
  function ju(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((cr = a), n.target.dispatchEvent(a), (cr = null));
      } else return ((t = Xa(n)), t !== null && Rm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function _m(e, t, n) {
    ju(e) && n.delete(t);
  }
  function eg() {
    ((oc = !1),
      ra !== null && ju(ra) && (ra = null),
      sa !== null && ju(sa) && (sa = null),
      ca !== null && ju(ca) && (ca = null),
      pi.forEach(_m),
      Si.forEach(_m));
  }
  function Gu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      oc || ((oc = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, eg)));
  }
  var Yu = null;
  function wm(e) {
    Yu !== e &&
      ((Yu = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Yu === e && (Yu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != 'function') {
            if (cc(a || n) === null) continue;
            break;
          }
          var u = Xa(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ss(u, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function Ml(e) {
    function t(U) {
      return Gu(U, e);
    }
    (ra !== null && Gu(ra, e),
      sa !== null && Gu(sa, e),
      ca !== null && Gu(ca, e),
      pi.forEach(t),
      Si.forEach(t));
    for (var n = 0; n < oa.length; n++) {
      var a = oa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < oa.length && ((n = oa[0]), n.blockedOn === null); )
      (Om(n), n.blockedOn === null && oa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          u = n[a + 1],
          S = l[bt] || null;
        if (typeof u == 'function') S || wm(n);
        else if (S) {
          var C = null;
          if (u && u.hasAttribute('formAction')) {
            if (((l = u), (S = u[bt] || null))) C = S.formAction;
            else if (cc(l) !== null) continue;
          } else C = S.action;
          (typeof C == 'function' ? (n[a + 1] = C) : (n.splice(a, 3), (a -= 3)), wm(n));
        }
      }
  }
  function Nm() {
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
  function fc(e) {
    this._internalRoot = e;
  }
  ((qu.prototype.render = fc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(x(409));
      var n = t.current,
        a = Gt();
      Mm(n, a, e, t, null, null);
    }),
    (qu.prototype.unmount = fc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Mm(e.current, 2, null, e, null, null), Eu(), (t[qa] = null));
        }
      }));
  function qu(e) {
    this._internalRoot = e;
  }
  qu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = qc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < oa.length && t !== 0 && t < oa[n].priority; n++);
      (oa.splice(n, 0, e), n === 0 && Om(e));
    }
  };
  var Bm = b.version;
  if (Bm !== '19.2.5') throw Error(x(527, Bm, '19.2.5'));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(x(188))
        : ((e = Object.keys(e).join(',')), Error(x(268, e)));
    return ((e = m(t)), (e = e !== null ? o(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var tg = {
    bundleType: 0,
    version: '19.2.5',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: q,
    reconcilerVersion: '19.2.5',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Vu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vu.isDisabled && Vu.supportsFiber)
      try {
        ((va = Vu.inject(tg)), (St = Vu));
      } catch {}
  }
  return (
    (bi.createRoot = function (e, t) {
      if (!h(e)) throw Error(x(299));
      var n = !1,
        a = '',
        l = qf,
        u = Vf,
        S = Xf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (S = t.onRecoverableError)),
        (t = bm(e, 1, !1, null, null, n, a, null, l, u, S, Nm)),
        (e[qa] = t.current),
        Ks(e),
        new fc(t)
      );
    }),
    (bi.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(x(299));
      var a = !1,
        l = '',
        u = qf,
        S = Vf,
        C = Xf,
        U = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (S = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (U = n.formState)),
        (t = bm(e, 1, !0, t, n ?? null, a, l, U, u, S, C, Nm)),
        (t.context = Tm(null)),
        (n = t.current),
        (a = Gt()),
        (a = Ya(a)),
        (l = Fn(a)),
        (l.callback = null),
        $n(n, l, a),
        (n = a),
        (t.current.lanes = n),
        wt(t, n),
        dn(t),
        (e[qa] = t.current),
        Ks(e),
        new qu(t)
      );
    }),
    (bi.version = '19.2.5'),
    bi
  );
}
var Zm;
function dg() {
  if (Zm) return mc.exports;
  Zm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (b) {
        console.error(b);
      }
  }
  return (c(), (mc.exports = fg()), mc.exports);
}
var mg = dg(),
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
 */ var Km = 'popstate';
function Jm(c) {
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
function hg(c = {}) {
  function b(x, h) {
    var m;
    let i = (m = h.state) == null ? void 0 : m.masked,
      { pathname: d, search: f, hash: s } = i || x.location;
    return Rc(
      '',
      { pathname: d, search: f, hash: s },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || 'default',
      i
        ? { pathname: x.location.pathname, search: x.location.search, hash: x.location.hash }
        : void 0
    );
  }
  function T(x, h) {
    return typeof h == 'string' ? h : Ai(h);
  }
  return gg(b, T, null, c);
}
function ke(c, b) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(b);
}
function mn(c, b) {
  if (!c) {
    typeof console < 'u' && console.warn(b);
    try {
      throw new Error(b);
    } catch {}
  }
}
function vg() {
  return Math.random().toString(36).substring(2, 10);
}
function km(c, b) {
  return {
    usr: c.state,
    key: c.key,
    idx: b,
    masked: c.unstable_mask ? { pathname: c.pathname, search: c.search, hash: c.hash } : void 0,
  };
}
function Rc(c, b, T = null, x, h) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof b == 'string' ? Al(b) : b),
    state: T,
    key: (b && b.key) || x || vg(),
    unstable_mask: h,
  };
}
function Ai({ pathname: c = '/', search: b = '', hash: T = '' }) {
  return (
    b && b !== '?' && (c += b.charAt(0) === '?' ? b : '?' + b),
    T && T !== '#' && (c += T.charAt(0) === '#' ? T : '#' + T),
    c
  );
}
function Al(c) {
  let b = {};
  if (c) {
    let T = c.indexOf('#');
    T >= 0 && ((b.hash = c.substring(T)), (c = c.substring(0, T)));
    let x = c.indexOf('?');
    (x >= 0 && ((b.search = c.substring(x)), (c = c.substring(0, x))), c && (b.pathname = c));
  }
  return b;
}
function gg(c, b, T, x = {}) {
  let { window: h = document.defaultView, v5Compat: i = !1 } = x,
    d = h.history,
    f = 'POP',
    s = null,
    m = o();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ''));
  function o() {
    return (d.state || { idx: null }).idx;
  }
  function p() {
    f = 'POP';
    let E = o(),
      R = E == null ? null : E - m;
    ((m = E), s && s({ action: f, location: v.location, delta: R }));
  }
  function g(E, R) {
    f = 'PUSH';
    let O = Jm(E) ? E : Rc(v.location, E, R);
    m = o() + 1;
    let w = km(O, m),
      L = v.createHref(O.unstable_mask || O);
    try {
      d.pushState(w, '', L);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      h.location.assign(L);
    }
    i && s && s({ action: f, location: v.location, delta: 1 });
  }
  function r(E, R) {
    f = 'REPLACE';
    let O = Jm(E) ? E : Rc(v.location, E, R);
    m = o();
    let w = km(O, m),
      L = v.createHref(O.unstable_mask || O);
    (d.replaceState(w, '', L), i && s && s({ action: f, location: v.location, delta: 0 }));
  }
  function y(E) {
    return yg(E);
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
        h.addEventListener(Km, p),
        (s = E),
        () => {
          (h.removeEventListener(Km, p), (s = null));
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
function yg(c, b = !1) {
  let T = 'http://localhost';
  (typeof window < 'u' &&
    (T = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    ke(T, 'No window.location.(origin|href) available to create URL'));
  let x = typeof c == 'string' ? c : Ai(c);
  return ((x = x.replace(/ $/, '%20')), !b && x.startsWith('//') && (x = T + x), new URL(x, T));
}
function oh(c, b, T = '/') {
  return pg(c, b, T, !1);
}
function pg(c, b, T, x) {
  let h = typeof b == 'string' ? Al(b) : b,
    i = Ln(h.pathname || '/', T);
  if (i == null) return null;
  let d = fh(c);
  Sg(d);
  let f = null;
  for (let s = 0; f == null && s < d.length; ++s) {
    let m = Og(i);
    f = zg(d[s], m, x);
  }
  return f;
}
function fh(c, b = [], T = [], x = '', h = !1) {
  let i = (d, f, s = h, m) => {
    let o = {
      relativePath: m === void 0 ? d.path || '' : m,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    if (o.relativePath.startsWith('/')) {
      if (!o.relativePath.startsWith(x) && s) return;
      (ke(
        o.relativePath.startsWith(x),
        `Absolute route path "${o.relativePath}" nested under path "${x}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (o.relativePath = o.relativePath.slice(x.length)));
    }
    let p = nn([x, o.relativePath]),
      g = T.concat(o);
    (d.children &&
      d.children.length > 0 &&
      (ke(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      fh(d.children, b, g, p, s)),
      !(d.path == null && !d.index) && b.push({ path: p, score: Rg(p, d.index), routesMeta: g }));
  };
  return (
    c.forEach((d, f) => {
      var s;
      if (d.path === '' || !((s = d.path) != null && s.includes('?'))) i(d, f);
      else for (let m of dh(d.path)) i(d, f, !0, m);
    }),
    b
  );
}
function dh(c) {
  let b = c.split('/');
  if (b.length === 0) return [];
  let [T, ...x] = b,
    h = T.endsWith('?'),
    i = T.replace(/\?$/, '');
  if (x.length === 0) return h ? [i, ''] : [i];
  let d = dh(x.join('/')),
    f = [];
  return (
    f.push(...d.map((s) => (s === '' ? i : [i, s].join('/')))),
    h && f.push(...d),
    f.map((s) => (c.startsWith('/') && s === '' ? '/' : s))
  );
}
function Sg(c) {
  c.sort((b, T) =>
    b.score !== T.score
      ? T.score - b.score
      : Ag(
          b.routesMeta.map((x) => x.childrenIndex),
          T.routesMeta.map((x) => x.childrenIndex)
        )
  );
}
var xg = /^:[\w-]+$/,
  Eg = 3,
  bg = 2,
  Tg = 1,
  Mg = 10,
  Cg = -2,
  Fm = (c) => c === '*';
function Rg(c, b) {
  let T = c.split('/'),
    x = T.length;
  return (
    T.some(Fm) && (x += Cg),
    b && (x += bg),
    T.filter((h) => !Fm(h)).reduce((h, i) => h + (xg.test(i) ? Eg : i === '' ? Tg : Mg), x)
  );
}
function Ag(c, b) {
  return c.length === b.length && c.slice(0, -1).every((x, h) => x === b[h])
    ? c[c.length - 1] - b[b.length - 1]
    : 0;
}
function zg(c, b, T = !1) {
  let { routesMeta: x } = c,
    h = {},
    i = '/',
    d = [];
  for (let f = 0; f < x.length; ++f) {
    let s = x[f],
      m = f === x.length - 1,
      o = i === '/' ? b : b.slice(i.length) || '/',
      p = ku({ path: s.relativePath, caseSensitive: s.caseSensitive, end: m }, o),
      g = s.route;
    if (
      (!p &&
        m &&
        T &&
        !x[x.length - 1].route.index &&
        (p = ku({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, o)),
      !p)
    )
      return null;
    (Object.assign(h, p.params),
      d.push({
        params: h,
        pathname: nn([i, p.pathname]),
        pathnameBase: Bg(nn([i, p.pathnameBase])),
        route: g,
      }),
      p.pathnameBase !== '/' && (i = nn([i, p.pathnameBase])));
  }
  return d;
}
function ku(c, b) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [T, x] = Dg(c.path, c.caseSensitive, c.end),
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
    pattern: c,
  };
}
function Dg(c, b = !1, T = !0) {
  mn(
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
            let p = o.charAt(m + d.length);
            return p && p !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    c.endsWith('*')
      ? (x.push({ paramName: '*' }), (h += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : T
        ? (h += '\\/*$')
        : c !== '' && c !== '/' && (h += '(?:(?=\\/|$))'),
    [new RegExp(h, b ? void 0 : 'i'), x]
  );
}
function Og(c) {
  try {
    return c
      .split('/')
      .map((b) => decodeURIComponent(b).replace(/\//g, '%2F'))
      .join('/');
  } catch (b) {
    return (
      mn(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${b}).`
      ),
      c
    );
  }
}
function Ln(c, b) {
  if (b === '/') return c;
  if (!c.toLowerCase().startsWith(b.toLowerCase())) return null;
  let T = b.endsWith('/') ? b.length - 1 : b.length,
    x = c.charAt(T);
  return x && x !== '/' ? null : c.slice(T) || '/';
}
var _g = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function wg(c, b = '/') {
  let { pathname: T, search: x = '', hash: h = '' } = typeof c == 'string' ? Al(c) : c,
    i;
  return (
    T ? ((T = hh(T)), T.startsWith('/') ? (i = $m(T.substring(1), '/')) : (i = $m(T, b))) : (i = b),
    { pathname: i, search: Ug(x), hash: Hg(h) }
  );
}
function $m(c, b) {
  let T = Fu(b).split('/');
  return (
    c.split('/').forEach((h) => {
      h === '..' ? T.length > 1 && T.pop() : h !== '.' && T.push(h);
    }),
    T.length > 1 ? T.join('/') : '/'
  );
}
function pc(c, b, T, x) {
  return `Cannot include a '${c}' character in a manually specified \`to.${b}\` field [${JSON.stringify(x)}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ng(c) {
  return c.filter((b, T) => T === 0 || (b.route.path && b.route.path.length > 0));
}
function mh(c) {
  let b = Ng(c);
  return b.map((T, x) => (x === b.length - 1 ? T.pathname : T.pathnameBase));
}
function _c(c, b, T, x = !1) {
  let h;
  typeof c == 'string'
    ? (h = Al(c))
    : ((h = { ...c }),
      ke(!h.pathname || !h.pathname.includes('?'), pc('?', 'pathname', 'search', h)),
      ke(!h.pathname || !h.pathname.includes('#'), pc('#', 'pathname', 'hash', h)),
      ke(!h.search || !h.search.includes('#'), pc('#', 'search', 'hash', h)));
  let i = c === '' || h.pathname === '',
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
  let s = wg(h, f),
    m = d && d !== '/' && d.endsWith('/'),
    o = (i || d === '.') && T.endsWith('/');
  return (!s.pathname.endsWith('/') && (m || o) && (s.pathname += '/'), s);
}
var hh = (c) => c.replace(/\/\/+/g, '/'),
  nn = (c) => hh(c.join('/')),
  Fu = (c) => c.replace(/\/+$/, ''),
  Bg = (c) => Fu(c).replace(/^\/*/, '/'),
  Ug = (c) => (!c || c === '?' ? '' : c.startsWith('?') ? c : '?' + c),
  Hg = (c) => (!c || c === '#' ? '' : c.startsWith('#') ? c : '#' + c),
  Lg = class {
    constructor(c, b, T, x = !1) {
      ((this.status = c),
        (this.statusText = b || ''),
        (this.internal = x),
        T instanceof Error ? ((this.data = T.toString()), (this.error = T)) : (this.data = T));
    }
  };
function jg(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Gg(c) {
  let b = c.map((T) => T.route.path).filter(Boolean);
  return nn(b) || '/';
}
var vh =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function gh(c, b) {
  let T = c;
  if (typeof T != 'string' || !_g.test(T)) return { absoluteURL: void 0, isExternal: !1, to: T };
  let x = T,
    h = !1;
  if (vh)
    try {
      let i = new URL(window.location.href),
        d = T.startsWith('//') ? new URL(i.protocol + T) : new URL(T),
        f = Ln(d.pathname, b);
      d.origin === i.origin && f != null ? (T = f + d.search + d.hash) : (h = !0);
    } catch {
      mn(
        !1,
        `<Link to="${T}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: x, isExternal: h, to: T };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var yh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(yh);
var Yg = ['GET', ...yh];
new Set(Yg);
var zl = B.createContext(null);
zl.displayName = 'DataRouter';
var $u = B.createContext(null);
$u.displayName = 'DataRouterState';
var ph = B.createContext(!1);
function qg() {
  return B.useContext(ph);
}
var Sh = B.createContext({ isTransitioning: !1 });
Sh.displayName = 'ViewTransition';
var Vg = B.createContext(new Map());
Vg.displayName = 'Fetchers';
var Xg = B.createContext(null);
Xg.displayName = 'Await';
var Wt = B.createContext(null);
Wt.displayName = 'Navigation';
var zi = B.createContext(null);
zi.displayName = 'Location';
var jn = B.createContext({ outlet: null, matches: [], isDataRoute: !1 });
jn.displayName = 'Route';
var wc = B.createContext(null);
wc.displayName = 'RouteError';
var xh = 'REACT_ROUTER_ERROR',
  Qg = 'REDIRECT',
  Zg = 'ROUTE_ERROR_RESPONSE';
function Kg(c) {
  if (c.startsWith(`${xh}:${Qg}:{`))
    try {
      let b = JSON.parse(c.slice(28));
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
function Jg(c) {
  if (c.startsWith(`${xh}:${Zg}:{`))
    try {
      let b = JSON.parse(c.slice(40));
      if (
        typeof b == 'object' &&
        b &&
        typeof b.status == 'number' &&
        typeof b.statusText == 'string'
      )
        return new Lg(b.status, b.statusText, b.data);
    } catch {}
}
function kg(c, { relative: b } = {}) {
  ke(Di(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: T, navigator: x } = B.useContext(Wt),
    { hash: h, pathname: i, search: d } = Oi(c, { relative: b }),
    f = i;
  return (
    T !== '/' && (f = i === '/' ? T : nn([T, i])),
    x.createHref({ pathname: f, search: d, hash: h })
  );
}
function Di() {
  return B.useContext(zi) != null;
}
function Gn() {
  return (
    ke(Di(), 'useLocation() may be used only in the context of a <Router> component.'),
    B.useContext(zi).location
  );
}
var Eh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function bh(c) {
  B.useContext(Wt).static || B.useLayoutEffect(c);
}
function Fg() {
  let { isDataRoute: c } = B.useContext(jn);
  return c ? sy() : $g();
}
function $g() {
  ke(Di(), 'useNavigate() may be used only in the context of a <Router> component.');
  let c = B.useContext(zl),
    { basename: b, navigator: T } = B.useContext(Wt),
    { matches: x } = B.useContext(jn),
    { pathname: h } = Gn(),
    i = JSON.stringify(mh(x)),
    d = B.useRef(!1);
  return (
    bh(() => {
      d.current = !0;
    }),
    B.useCallback(
      (s, m = {}) => {
        if ((mn(d.current, Eh), !d.current)) return;
        if (typeof s == 'number') {
          T.go(s);
          return;
        }
        let o = _c(s, JSON.parse(i), h, m.relative === 'path');
        (c == null && b !== '/' && (o.pathname = o.pathname === '/' ? b : nn([b, o.pathname])),
          (m.replace ? T.replace : T.push)(o, m.state, m));
      },
      [b, T, i, h, c]
    )
  );
}
B.createContext(null);
function Oi(c, { relative: b } = {}) {
  let { matches: T } = B.useContext(jn),
    { pathname: x } = Gn(),
    h = JSON.stringify(mh(T));
  return B.useMemo(() => _c(c, JSON.parse(h), x, b === 'path'), [c, h, x, b]);
}
function Wg(c, b) {
  return Th(c, b);
}
function Th(c, b, T) {
  var E;
  ke(Di(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: x } = B.useContext(Wt),
    { matches: h } = B.useContext(jn),
    i = h[h.length - 1],
    d = i ? i.params : {},
    f = i ? i.pathname : '/',
    s = i ? i.pathnameBase : '/',
    m = i && i.route;
  {
    let R = (m && m.path) || '';
    Ch(
      f,
      !m || R.endsWith('*') || R.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === '/' ? '*' : `${R}/*`}">.`
    );
  }
  let o = Gn(),
    p;
  if (b) {
    let R = typeof b == 'string' ? Al(b) : b;
    (ke(
      s === '/' || ((E = R.pathname) == null ? void 0 : E.startsWith(s)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${R.pathname}" was given in the \`location\` prop.`
    ),
      (p = R));
  } else p = o;
  let g = p.pathname || '/',
    r = g;
  if (s !== '/') {
    let R = s.replace(/^\//, '').split('/');
    r = '/' + g.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let y = oh(c, { pathname: r });
  (mn(m || y != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `),
    mn(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let v = ny(
    y &&
      y.map((R) =>
        Object.assign({}, R, {
          params: Object.assign({}, d, R.params),
          pathname: nn([
            s,
            x.encodeLocation
              ? x.encodeLocation(
                  R.pathname.replace(/%/g, '%25').replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : R.pathname,
          ]),
          pathnameBase:
            R.pathnameBase === '/'
              ? s
              : nn([
                  s,
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
              ...p,
            },
            navigationType: 'POP',
          },
        },
        v
      )
    : v;
}
function Pg() {
  let c = ry(),
    b = jg(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
    T = c instanceof Error ? c.stack : null,
    x = 'rgba(200,200,200, 0.5)',
    h = { padding: '0.5rem', backgroundColor: x },
    i = { padding: '2px 4px', backgroundColor: x },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
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
var Ig = B.createElement(Pg, null),
  Mh = class extends B.Component {
    constructor(c) {
      (super(c),
        (this.state = { location: c.location, revalidation: c.revalidation, error: c.error }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, b) {
      return b.location !== c.location || (b.revalidation !== 'idle' && c.revalidation === 'idle')
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : b.error,
            location: b.location,
            revalidation: c.revalidation || b.revalidation,
          };
    }
    componentDidCatch(c, b) {
      this.props.onError
        ? this.props.onError(c, b)
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
        const T = Jg(c.digest);
        T && (c = T);
      }
      let b =
        c !== void 0
          ? B.createElement(
              jn.Provider,
              { value: this.props.routeContext },
              B.createElement(wc.Provider, { value: c, children: this.props.component })
            )
          : this.props.children;
      return this.context ? B.createElement(ey, { error: c }, b) : b;
    }
  };
Mh.contextType = ph;
var Sc = new WeakMap();
function ey({ children: c, error: b }) {
  let { basename: T } = B.useContext(Wt);
  if (typeof b == 'object' && b && 'digest' in b && typeof b.digest == 'string') {
    let x = Kg(b.digest);
    if (x) {
      let h = Sc.get(b);
      if (h) throw h;
      let i = gh(x.location, T);
      if (vh && !Sc.get(b))
        if (i.isExternal || x.reloadDocument) window.location.href = i.absoluteURL || i.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, { replace: x.replace })
          );
          throw (Sc.set(b, d), d);
        }
      return B.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return c;
}
function ty({ routeContext: c, match: b, children: T }) {
  let x = B.useContext(zl);
  return (
    x &&
      x.static &&
      x.staticContext &&
      (b.route.errorElement || b.route.ErrorBoundary) &&
      (x.staticContext._deepestRenderedBoundaryId = b.route.id),
    B.createElement(jn.Provider, { value: c }, T)
  );
}
function ny(c, b = [], T) {
  let x = T == null ? void 0 : T.state;
  if (c == null) {
    if (!x) return null;
    if (x.errors) c = x.matches;
    else if (b.length === 0 && !x.initialized && x.matches.length > 0) c = x.matches;
    else return null;
  }
  let h = c,
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
  let s = T == null ? void 0 : T.onError,
    m =
      x && s
        ? (o, p) => {
            var g, r;
            s(o, {
              location: x.location,
              params:
                ((r = (g = x.matches) == null ? void 0 : g[0]) == null ? void 0 : r.params) ?? {},
              unstable_pattern: Gg(x.matches),
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
      (v = p.route.errorElement || Ig),
      d &&
        (f < 0 && g === 0
          ? (Ch(
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
                ? (w = B.createElement(p.route.Component, null))
                : p.route.element
                  ? (w = p.route.element)
                  : (w = o),
          B.createElement(ty, {
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
          children: O(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
          onError: m,
        })
      : O();
  }, null);
}
function Nc(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ay(c) {
  let b = B.useContext(zl);
  return (ke(b, Nc(c)), b);
}
function ly(c) {
  let b = B.useContext($u);
  return (ke(b, Nc(c)), b);
}
function iy(c) {
  let b = B.useContext(jn);
  return (ke(b, Nc(c)), b);
}
function Bc(c) {
  let b = iy(c),
    T = b.matches[b.matches.length - 1];
  return (ke(T.route.id, `${c} can only be used on routes that contain a unique "id"`), T.route.id);
}
function uy() {
  return Bc('useRouteId');
}
function ry() {
  var x;
  let c = B.useContext(wc),
    b = ly('useRouteError'),
    T = Bc('useRouteError');
  return c !== void 0 ? c : (x = b.errors) == null ? void 0 : x[T];
}
function sy() {
  let { router: c } = ay('useNavigate'),
    b = Bc('useNavigate'),
    T = B.useRef(!1);
  return (
    bh(() => {
      T.current = !0;
    }),
    B.useCallback(
      async (h, i = {}) => {
        (mn(T.current, Eh),
          T.current &&
            (typeof h == 'number'
              ? await c.navigate(h)
              : await c.navigate(h, { fromRouteId: b, ...i })));
      },
      [c, b]
    )
  );
}
var Wm = {};
function Ch(c, b, T) {
  !b && !Wm[c] && ((Wm[c] = !0), mn(!1, T));
}
B.memo(cy);
function cy({ routes: c, future: b, state: T, isStatic: x, onError: h }) {
  return Th(c, void 0, { state: T, isStatic: x, onError: h });
}
function Ac(c) {
  ke(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function oy({
  basename: c = '/',
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
  let f = c.replace(/^\/*/, '/'),
    s = B.useMemo(
      () => ({ basename: f, navigator: h, static: i, unstable_useTransitions: d, future: {} }),
      [f, h, i, d]
    );
  typeof T == 'string' && (T = Al(T));
  let {
      pathname: m = '/',
      search: o = '',
      hash: p = '',
      state: g = null,
      key: r = 'default',
      unstable_mask: y,
    } = T,
    v = B.useMemo(() => {
      let E = Ln(m, f);
      return E == null
        ? null
        : {
            location: { pathname: E, search: o, hash: p, state: g, key: r, unstable_mask: y },
            navigationType: x,
          };
    }, [f, m, o, p, g, r, x, y]);
  return (
    mn(
      v != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${o}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : B.createElement(
          Wt.Provider,
          { value: s },
          B.createElement(zi.Provider, { children: b, value: v })
        )
  );
}
function fy({ children: c, location: b }) {
  return Wg(zc(c), b);
}
function zc(c, b = []) {
  let T = [];
  return (
    B.Children.forEach(c, (x, h) => {
      if (!B.isValidElement(x)) return;
      let i = [...b, h];
      if (x.type === B.Fragment) {
        T.push.apply(T, zc(x.props.children, i));
        return;
      }
      (ke(
        x.type === Ac,
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
      (x.props.children && (d.children = zc(x.props.children, i)), T.push(d));
    }),
    T
  );
}
var Zu = 'get',
  Ku = 'application/x-www-form-urlencoded';
function Wu(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function dy(c) {
  return Wu(c) && c.tagName.toLowerCase() === 'button';
}
function my(c) {
  return Wu(c) && c.tagName.toLowerCase() === 'form';
}
function hy(c) {
  return Wu(c) && c.tagName.toLowerCase() === 'input';
}
function vy(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function gy(c, b) {
  return c.button === 0 && (!b || b === '_self') && !vy(c);
}
var Xu = null;
function yy() {
  if (Xu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Xu = !1));
    } catch {
      Xu = !0;
    }
  return Xu;
}
var py = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function xc(c) {
  return c != null && !py.has(c)
    ? (mn(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`
      ),
      null)
    : c;
}
function Sy(c, b) {
  let T, x, h, i, d;
  if (my(c)) {
    let f = c.getAttribute('action');
    ((x = f ? Ln(f, b) : null),
      (T = c.getAttribute('method') || Zu),
      (h = xc(c.getAttribute('enctype')) || Ku),
      (i = new FormData(c)));
  } else if (dy(c) || (hy(c) && (c.type === 'submit' || c.type === 'image'))) {
    let f = c.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = c.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((x = s ? Ln(s, b) : null),
      (T = c.getAttribute('formmethod') || f.getAttribute('method') || Zu),
      (h = xc(c.getAttribute('formenctype')) || xc(f.getAttribute('enctype')) || Ku),
      (i = new FormData(f, c)),
      !yy())
    ) {
      let { name: m, type: o, value: p } = c;
      if (o === 'image') {
        let g = m ? `${m}.` : '';
        (i.append(`${g}x`, '0'), i.append(`${g}y`, '0'));
      } else m && i.append(m, p);
    }
  } else {
    if (Wu(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((T = Zu), (x = null), (h = Ku), (d = c));
  }
  return (
    i && h === 'text/plain' && ((d = i), (i = void 0)),
    { action: x, method: T.toLowerCase(), encType: h, formData: i, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Uc(c, b) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(b);
}
function Rh(c, b, T, x) {
  let h =
    typeof c == 'string'
      ? new URL(c, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : c;
  return (
    T
      ? h.pathname.endsWith('/')
        ? (h.pathname = `${h.pathname}_.${x}`)
        : (h.pathname = `${h.pathname}.${x}`)
      : h.pathname === '/'
        ? (h.pathname = `_root.${x}`)
        : b && Ln(h.pathname, b) === '/'
          ? (h.pathname = `${Fu(b)}/_root.${x}`)
          : (h.pathname = `${Fu(h.pathname)}.${x}`),
    h
  );
}
async function xy(c, b) {
  if (c.id in b) return b[c.id];
  try {
    let T = await import(c.module);
    return ((b[c.id] = T), T);
  } catch (T) {
    return (
      console.error(`Error loading route module \`${c.module}\`, reloading page...`),
      console.error(T),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ey(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === 'preload' && typeof c.imageSrcSet == 'string' && typeof c.imageSizes == 'string'
      : typeof c.rel == 'string' && typeof c.href == 'string';
}
async function by(c, b, T) {
  let x = await Promise.all(
    c.map(async (h) => {
      let i = b.routes[h.route.id];
      if (i) {
        let d = await xy(i, T);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Ry(
    x
      .flat(1)
      .filter(Ey)
      .filter((h) => h.rel === 'stylesheet' || h.rel === 'preload')
      .map((h) =>
        h.rel === 'stylesheet' ? { ...h, rel: 'prefetch', as: 'style' } : { ...h, rel: 'prefetch' }
      )
  );
}
function Pm(c, b, T, x, h, i) {
  let d = (s, m) => (T[m] ? s.route.id !== T[m].route.id : !0),
    f = (s, m) => {
      var o;
      return (
        T[m].pathname !== s.pathname ||
        (((o = T[m].route.path) == null ? void 0 : o.endsWith('*')) &&
          T[m].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? b.filter((s, m) => d(s, m) || f(s, m))
    : i === 'data'
      ? b.filter((s, m) => {
          var p;
          let o = x.routes[s.route.id];
          if (!o || !o.hasLoader) return !1;
          if (d(s, m) || f(s, m)) return !0;
          if (s.route.shouldRevalidate) {
            let g = s.route.shouldRevalidate({
              currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
              currentParams: ((p = T[0]) == null ? void 0 : p.params) || {},
              nextUrl: new URL(c, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == 'boolean') return g;
          }
          return !0;
        })
      : [];
}
function Ty(c, b, { includeHydrateFallback: T } = {}) {
  return My(
    c
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
function My(c) {
  return [...new Set(c)];
}
function Cy(c) {
  let b = {},
    T = Object.keys(c).sort();
  for (let x of T) b[x] = c[x];
  return b;
}
function Ry(c, b) {
  let T = new Set();
  return (
    new Set(b),
    c.reduce((x, h) => {
      let i = JSON.stringify(Cy(h));
      return (T.has(i) || (T.add(i), x.push({ key: i, link: h })), x);
    }, [])
  );
}
function Hc() {
  let c = B.useContext(zl);
  return (Uc(c, 'You must render this element inside a <DataRouterContext.Provider> element'), c);
}
function Ay() {
  let c = B.useContext($u);
  return (
    Uc(c, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    c
  );
}
var Lc = B.createContext(void 0);
Lc.displayName = 'FrameworkContext';
function jc() {
  let c = B.useContext(Lc);
  return (Uc(c, 'You must render this element inside a <HydratedRouter> element'), c);
}
function zy(c, b) {
  let T = B.useContext(Lc),
    [x, h] = B.useState(!1),
    [i, d] = B.useState(!1),
    { onFocus: f, onBlur: s, onMouseEnter: m, onMouseLeave: o, onTouchStart: p } = b,
    g = B.useRef(null);
  (B.useEffect(() => {
    if ((c === 'render' && d(!0), c === 'viewport')) {
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
  }, [c]),
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
    ? c !== 'intent'
      ? [i, g, {}]
      : [
          i,
          g,
          {
            onFocus: Ti(f, r),
            onBlur: Ti(s, y),
            onMouseEnter: Ti(m, r),
            onMouseLeave: Ti(o, y),
            onTouchStart: Ti(p, r),
          },
        ]
    : [!1, g, {}];
}
function Ti(c, b) {
  return (T) => {
    (c && c(T), T.defaultPrevented || b(T));
  };
}
function Dy({ page: c, ...b }) {
  let T = qg(),
    { router: x } = Hc(),
    h = B.useMemo(() => oh(x.routes, c, x.basename), [x.routes, c, x.basename]);
  return h
    ? T
      ? B.createElement(_y, { page: c, matches: h, ...b })
      : B.createElement(wy, { page: c, matches: h, ...b })
    : null;
}
function Oy(c) {
  let { manifest: b, routeModules: T } = jc(),
    [x, h] = B.useState([]);
  return (
    B.useEffect(() => {
      let i = !1;
      return (
        by(c, b, T).then((d) => {
          i || h(d);
        }),
        () => {
          i = !0;
        }
      );
    }, [c, b, T]),
    x
  );
}
function _y({ page: c, matches: b, ...T }) {
  let x = Gn(),
    { future: h } = jc(),
    { basename: i } = Hc(),
    d = B.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let f = Rh(c, i, h.unstable_trailingSlashAwareDataRequests, 'rsc'),
        s = !1,
        m = [];
      for (let o of b)
        typeof o.route.shouldRevalidate == 'function' ? (s = !0) : m.push(o.route.id);
      return (
        s && m.length > 0 && f.searchParams.set('_routes', m.join(',')),
        [f.pathname + f.search]
      );
    }, [i, h.unstable_trailingSlashAwareDataRequests, c, x, b]);
  return B.createElement(
    B.Fragment,
    null,
    d.map((f) => B.createElement('link', { key: f, rel: 'prefetch', as: 'fetch', href: f, ...T }))
  );
}
function wy({ page: c, matches: b, ...T }) {
  let x = Gn(),
    { future: h, manifest: i, routeModules: d } = jc(),
    { basename: f } = Hc(),
    { loaderData: s, matches: m } = Ay(),
    o = B.useMemo(() => Pm(c, b, m, i, x, 'data'), [c, b, m, i, x]),
    p = B.useMemo(() => Pm(c, b, m, i, x, 'assets'), [c, b, m, i, x]),
    g = B.useMemo(() => {
      if (c === x.pathname + x.search + x.hash) return [];
      let v = new Set(),
        E = !1;
      if (
        (b.forEach((O) => {
          var L;
          let w = i.routes[O.route.id];
          !w ||
            !w.hasLoader ||
            ((!o.some((M) => M.route.id === O.route.id) &&
              O.route.id in s &&
              (L = d[O.route.id]) != null &&
              L.shouldRevalidate) ||
            w.hasClientLoader
              ? (E = !0)
              : v.add(O.route.id));
        }),
        v.size === 0)
      )
        return [];
      let R = Rh(c, f, h.unstable_trailingSlashAwareDataRequests, 'data');
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
    }, [f, h.unstable_trailingSlashAwareDataRequests, s, x, i, o, b, c, d]),
    r = B.useMemo(() => Ty(p, i), [p, i]),
    y = Oy(p);
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
function Ny(...c) {
  return (b) => {
    c.forEach((T) => {
      typeof T == 'function' ? T(b) : T != null && (T.current = b);
    });
  };
}
var By =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  By && (window.__reactRouterVersion = '7.14.2');
} catch {}
function Uy({ basename: c, children: b, unstable_useTransitions: T, window: x }) {
  let h = B.useRef();
  h.current == null && (h.current = hg({ window: x, v5Compat: !0 }));
  let i = h.current,
    [d, f] = B.useState({ action: i.action, location: i.location }),
    s = B.useCallback(
      (m) => {
        T === !1 ? f(m) : B.startTransition(() => f(m));
      },
      [T]
    );
  return (
    B.useLayoutEffect(() => i.listen(s), [i, s]),
    B.createElement(oy, {
      basename: c,
      children: b,
      location: d.location,
      navigationType: d.action,
      navigator: i,
      unstable_useTransitions: T,
    })
  );
}
var Ah = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zh = B.forwardRef(function (
    {
      onClick: b,
      discover: T = 'render',
      prefetch: x = 'none',
      relative: h,
      reloadDocument: i,
      replace: d,
      unstable_mask: f,
      state: s,
      target: m,
      to: o,
      preventScrollReset: p,
      viewTransition: g,
      unstable_defaultShouldRevalidate: r,
      ...y
    },
    v
  ) {
    let { basename: E, navigator: R, unstable_useTransitions: O } = B.useContext(Wt),
      w = typeof o == 'string' && Ah.test(o),
      L = gh(o, E);
    o = L.to;
    let M = kg(o, { relative: h }),
      z = Gn(),
      D = null;
    if (f) {
      let ee = _c(f, [], z.unstable_mask ? z.unstable_mask.pathname : '/', !0);
      (E !== '/' && (ee.pathname = ee.pathname === '/' ? E : nn([E, ee.pathname])),
        (D = R.createHref(ee)));
    }
    let [A, N, _] = zy(x, y),
      H = Gy(o, {
        replace: d,
        unstable_mask: f,
        state: s,
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
      te = B.createElement('a', {
        ...y,
        ..._,
        href: (J ? D : void 0) || L.absoluteURL || M,
        onClick: J ? G : b,
        ref: Ny(v, N),
        target: m,
        'data-discover': !w && T === 'render' ? 'true' : void 0,
      });
    return A && !w ? B.createElement(B.Fragment, null, te, B.createElement(Dy, { page: M })) : te;
  });
zh.displayName = 'Link';
var Hy = B.forwardRef(function (
  {
    'aria-current': b = 'page',
    caseSensitive: T = !1,
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
  let p = Oi(d, { relative: m.relative }),
    g = Gn(),
    r = B.useContext($u),
    { navigator: y, basename: v } = B.useContext(Wt),
    E = r != null && Qy(p) && f === !0,
    R = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname,
    O = g.pathname,
    w = r && r.navigation && r.navigation.location ? r.navigation.location.pathname : null;
  (T || ((O = O.toLowerCase()), (w = w ? w.toLowerCase() : null), (R = R.toLowerCase())),
    w && v && (w = Ln(w, v) || w));
  const L = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let M = O === R || (!h && O.startsWith(R) && O.charAt(L) === '/'),
    z = w != null && (w === R || (!h && w.startsWith(R) && w.charAt(R.length) === '/')),
    D = { isActive: M, isPending: z, isTransitioning: E },
    A = M ? b : void 0,
    N;
  typeof x == 'function'
    ? (N = x(D))
    : (N = [x, M ? 'active' : null, z ? 'pending' : null, E ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let _ = typeof i == 'function' ? i(D) : i;
  return B.createElement(
    zh,
    { ...m, 'aria-current': A, className: N, ref: o, style: _, to: d, viewTransition: f },
    typeof s == 'function' ? s(D) : s
  );
});
Hy.displayName = 'NavLink';
var Ly = B.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: b,
      navigate: T,
      reloadDocument: x,
      replace: h,
      state: i,
      method: d = Zu,
      action: f,
      onSubmit: s,
      relative: m,
      preventScrollReset: o,
      viewTransition: p,
      unstable_defaultShouldRevalidate: g,
      ...r
    },
    y
  ) => {
    let { unstable_useTransitions: v } = B.useContext(Wt),
      E = Vy(),
      R = Xy(f, { relative: m }),
      O = d.toLowerCase() === 'get' ? 'get' : 'post',
      w = typeof f == 'string' && Ah.test(f),
      L = (M) => {
        if ((s && s(M), M.defaultPrevented)) return;
        M.preventDefault();
        let z = M.nativeEvent.submitter,
          D = (z == null ? void 0 : z.getAttribute('formmethod')) || d,
          A = () =>
            E(z || M.currentTarget, {
              fetcherKey: b,
              method: D,
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
      method: O,
      action: R,
      onSubmit: x ? s : L,
      ...r,
      'data-discover': !w && c === 'render' ? 'true' : void 0,
    });
  }
);
Ly.displayName = 'Form';
function jy(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dh(c) {
  let b = B.useContext(zl);
  return (ke(b, jy(c)), b);
}
function Gy(
  c,
  {
    target: b,
    replace: T,
    unstable_mask: x,
    state: h,
    preventScrollReset: i,
    relative: d,
    viewTransition: f,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: m,
  } = {}
) {
  let o = Fg(),
    p = Gn(),
    g = Oi(c, { relative: d });
  return B.useCallback(
    (r) => {
      if (gy(r, b)) {
        r.preventDefault();
        let y = T !== void 0 ? T : Ai(p) === Ai(g),
          v = () =>
            o(c, {
              replace: y,
              unstable_mask: x,
              state: h,
              preventScrollReset: i,
              relative: d,
              viewTransition: f,
              unstable_defaultShouldRevalidate: s,
            });
        m ? B.startTransition(() => v()) : v();
      }
    },
    [p, o, g, T, x, h, b, c, i, d, f, s, m]
  );
}
var Yy = 0,
  qy = () => `__${String(++Yy)}__`;
function Vy() {
  let { router: c } = Dh('useSubmit'),
    { basename: b } = B.useContext(Wt),
    T = uy(),
    x = c.fetch,
    h = c.navigate;
  return B.useCallback(
    async (i, d = {}) => {
      let { action: f, method: s, encType: m, formData: o, body: p } = Sy(i, b);
      if (d.navigate === !1) {
        let g = d.fetcherKey || qy();
        await x(g, T, d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: p,
          formMethod: d.method || s,
          formEncType: d.encType || m,
          flushSync: d.flushSync,
        });
      } else
        await h(d.action || f, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: o,
          body: p,
          formMethod: d.method || s,
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
function Xy(c, { relative: b } = {}) {
  let { basename: T } = B.useContext(Wt),
    x = B.useContext(jn);
  ke(x, 'useFormAction must be used inside a RouteContext');
  let [h] = x.matches.slice(-1),
    i = { ...Oi(c || '.', { relative: b }) },
    d = Gn();
  if (c == null) {
    i.search = d.search;
    let f = new URLSearchParams(i.search),
      s = f.getAll('index');
    if (s.some((o) => o === '')) {
      (f.delete('index'), s.filter((p) => p).forEach((p) => f.append('index', p)));
      let o = f.toString();
      i.search = o ? `?${o}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      h.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    T !== '/' && (i.pathname = i.pathname === '/' ? T : nn([T, i.pathname])),
    Ai(i)
  );
}
function Qy(c, { relative: b } = {}) {
  let T = B.useContext(Sh);
  ke(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: x } = Dh('useViewTransitionState'),
    h = Oi(c, { relative: b });
  if (!T.isTransitioning) return !1;
  let i = Ln(T.currentLocation.pathname, x) || T.currentLocation.pathname,
    d = Ln(T.nextLocation.pathname, x) || T.nextLocation.pathname;
  return ku(h.pathname, d) != null || ku(h.pathname, i) != null;
}
const Zy = 'modulepreload',
  Ky = function (c) {
    return '/ochimono-game/' + c;
  },
  Im = {},
  Jy = function (b, T, x) {
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
        s = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute('nonce'));
      h = d(
        T.map((m) => {
          if (((m = Ky(m)), m in Im)) return;
          Im[m] = !0;
          const o = m.endsWith('.css'),
            p = o ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${m}"]${p}`)) return;
          const g = document.createElement('link');
          if (
            ((g.rel = o ? 'stylesheet' : Zy),
            o || (g.as = 'script'),
            (g.crossOrigin = ''),
            (g.href = m),
            s && g.setAttribute('nonce', s),
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
function ky(c = {}) {
  const {
    immediate: b = !1,
    onNeedRefresh: T,
    onOfflineReady: x,
    onRegistered: h,
    onRegisteredSW: i,
    onRegisterError: d,
  } = c;
  let f, s, m;
  const o = async (g = !0) => {
    (await s, m == null || m());
  };
  async function p() {
    if ('serviceWorker' in navigator) {
      if (
        ((f = await Jy(async () => {
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
  return ((s = p()), o);
}
function Fy(c = {}) {
  const {
      immediate: b = !0,
      onNeedRefresh: T,
      onOfflineReady: x,
      onRegistered: h,
      onRegisteredSW: i,
      onRegisterError: d,
    } = c,
    [f, s] = B.useState(!1),
    [m, o] = B.useState(!1),
    [p] = B.useState(() =>
      ky({
        immediate: b,
        onOfflineReady() {
          (o(!0), x == null || x());
        },
        onNeedRefresh() {
          (s(!0), T == null || T());
        },
        onRegistered: h,
        onRegisteredSW: i,
        onRegisterError: d,
      })
    );
  return { needRefresh: [f, s], offlineReady: [m, o], updateServiceWorker: p };
}
const $y = '_banner_1qruq_1',
  Wy = '_message_1qruq_21',
  Py = '_button_1qruq_25',
  Ec = { banner: $y, message: Wy, button: Py },
  Iy = () => {
    const {
      needRefresh: [c],
      updateServiceWorker: b,
    } = Fy();
    return c
      ? I.jsxs('div', {
          className: Ec.banner,
          role: 'status',
          'aria-live': 'polite',
          children: [
            I.jsx('span', { className: Ec.message, children: '新しいバージョンがあります' }),
            I.jsx('button', {
              type: 'button',
              className: Ec.button,
              onClick: () => b(!0),
              children: '更新',
            }),
          ],
        })
      : null;
  },
  ep = '_index_r8hfh_1',
  tp = { index: ep },
  np = '_layout_u1qv8_1',
  ap = '_top_bar_placeholder_u1qv8_10',
  lp = '_main_u1qv8_15',
  ip = '_field_wrapper_u1qv8_23',
  up = '_skill_button_wrapper_u1qv8_28',
  Ba = {
    layout: np,
    top_bar_placeholder: ap,
    main: lp,
    field_wrapper: ip,
    skill_button_wrapper: up,
  },
  rp = '_surface_6wr97_1',
  sp = '_canvas_layer_6wr97_11',
  cp = '_game_over_line_6wr97_22',
  bc = { surface: rp, canvas_layer: sp, game_over_line: cp },
  op = '_layer_z1h0v_1',
  fp = '_effect_z1h0v_7',
  dp = '_ring_z1h0v_12',
  mp = '_score_z1h0v_24',
  hp = '_special_z1h0v_36',
  Mi = { layer: op, effect: fp, ring: dp, score: mp, special: hp },
  Oh = B.memo(
    B.forwardRef((c, b) => {
      const T = B.useRef(null),
        x = B.useCallback((i) => {
          const d = T.current;
          if (!d) return;
          const f = document.createElement('div');
          ((f.className = `${Mi.effect} ${i.isSpecial ? Mi.special : ''}`),
            (f.style.left = `${i.x}px`),
            (f.style.top = `${i.y}px`),
            f.setAttribute('aria-hidden', 'true'));
          const s = document.createElement('span');
          ((s.className = Mi.ring), f.appendChild(s));
          const m = () => {
            (s.removeEventListener('animationend', m), f.parentNode === d && d.removeChild(f));
          };
          if ((s.addEventListener('animationend', m), i.score > 0)) {
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
        I.jsx('div', { ref: T, className: Mi.layer, 'aria-hidden': 'true' })
      );
    })
  );
Oh.displayName = 'MergeEffect';
const vp = '_line_yymkz_1',
  gp = '_preview_wrap_yymkz_11',
  yp = '_preview_yymkz_11',
  Tc = { line: vp, preview_wrap: gp, preview: yp },
  pp = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  _h = B.memo(
    B.forwardRef(({ initialX: c, fieldHeight: b, item: T }, x) => {
      const h = B.useRef(null),
        i = B.useRef(null),
        d = B.useRef((T == null ? void 0 : T.radius) ?? 0);
      if (
        ((d.current = (T == null ? void 0 : T.radius) ?? 0),
        B.useImperativeHandle(
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
        !T)
      )
        return null;
      const f = T.radius * 2;
      return I.jsxs(I.Fragment, {
        children: [
          I.jsx('div', {
            ref: h,
            className: Tc.line,
            style: { height: `${b}px`, transform: `translate3d(${c}px, 0, 0)` },
            'aria-hidden': 'true',
          }),
          I.jsx('div', {
            ref: i,
            className: Tc.preview_wrap,
            style: {
              width: `${f}px`,
              height: `${f}px`,
              transform: `translate3d(${c - T.radius}px, 0, 0)`,
            },
            'aria-hidden': 'true',
            children: I.jsx('img', {
              src: pp(T.svgPath),
              alt: '',
              'aria-hidden': 'true',
              className: Tc.preview,
            }),
          }),
        ],
      });
    })
  );
_h.displayName = 'DropIndicator';
const Sp = (c) => Math.max(0, Math.min(1, c)),
  xp = ({
    canvasContainerRef: c,
    fieldWidth: b,
    fieldHeight: T,
    gameOverLineY: x,
    currentItem: h,
    canInteract: i,
    onDrop: d,
    mergeEffectRef: f,
    isMagnetSelecting: s,
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
          _ = v.current;
        return N ? Math.max(N.radius, Math.min(_ - N.radius, A * _)) : A * _;
      }, []),
      R = B.useCallback(() => {
        r.current === null &&
          (r.current = window.requestAnimationFrame(() => {
            var A;
            ((r.current = null), (A = p.current) == null || A.setX(E(g.current)));
          }));
      }, [E]),
      O = B.useCallback(
        (A) => {
          const N = o.current;
          if (!N) return;
          const _ = N.getBoundingClientRect(),
            H = Sp((A - _.left) / _.width);
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
    const w = i && !s,
      L = (A) => {
        var N;
        s || (w && (O(A.clientX), (N = o.current) == null || N.setPointerCapture(A.pointerId)));
      },
      M = (A) => {
        if (!s) {
          if (A.buttons === 0 && A.pointerType === 'mouse') {
            O(A.clientX);
            return;
          }
          O(A.clientX);
        }
      },
      z = (A) => {
        var N;
        if (s) {
          const _ = o.current;
          if (!_) return;
          const H = _.getBoundingClientRect();
          m(A.clientX - H.left, A.clientY - H.top);
          return;
        }
        w &&
          (O(A.clientX),
          d(g.current),
          (N = o.current) == null || N.releasePointerCapture(A.pointerId));
      },
      D = E(0.5);
    return I.jsxs('div', {
      ref: o,
      className: bc.surface,
      style: { width: `${b}px`, height: `${T}px` },
      onPointerDown: L,
      onPointerMove: M,
      onPointerUp: z,
      role: 'application',
      'aria-label': 'ゲームフィールド',
      children: [
        I.jsx('div', { ref: c, className: bc.canvas_layer }),
        I.jsx('div', {
          className: bc.game_over_line,
          style: { top: `${x}px` },
          'aria-hidden': 'true',
        }),
        w ? I.jsx(_h, { ref: p, initialX: D, fieldHeight: T, item: h }) : null,
        I.jsx(Oh, { ref: f }),
      ],
    });
  },
  Ep = '_overlay_efysu_1',
  bp = '_number_efysu_11',
  eh = { overlay: Ep, number: bp },
  wh = B.memo(({ seconds: c }) =>
    c === null
      ? null
      : I.jsx('div', {
          className: eh.overlay,
          'aria-live': 'assertive',
          'aria-label': `ゲームオーバーまで${c}秒`,
          children: I.jsx('span', { className: eh.number, children: c }, c),
        })
  );
wh.displayName = 'CountdownOverlay';
const Tp = '_overlay_o79hb_1',
  Mp = '_panel_o79hb_13',
  Cp = '_new_record_o79hb_24',
  Rp = '_title_o79hb_32',
  Ap = '_scores_o79hb_40',
  zp = '_row_o79hb_46',
  Dp = '_gold_o79hb_64',
  Op = '_restart_o79hb_69',
  Bn = {
    overlay: Tp,
    panel: Mp,
    new_record: Cp,
    title: Rp,
    scores: Ap,
    row: zp,
    gold: Dp,
    restart: Op,
  },
  _p = ({ score: c, bestScore: b, isNewRecord: T, onRestart: x }) =>
    I.jsx('div', {
      className: Bn.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'ゲームオーバー',
      children: I.jsxs('div', {
        className: Bn.panel,
        children: [
          T ? I.jsx('p', { className: Bn.new_record, children: '🎉 新記録！' }) : null,
          I.jsx('h2', { className: Bn.title, children: 'GAME OVER' }),
          I.jsxs('dl', {
            className: Bn.scores,
            children: [
              I.jsxs('div', {
                className: Bn.row,
                children: [
                  I.jsx('dt', { children: 'スコア' }),
                  I.jsx('dd', { className: T ? Bn.gold : '', children: c }),
                ],
              }),
              I.jsxs('div', {
                className: Bn.row,
                children: [I.jsx('dt', { children: 'ベスト' }), I.jsx('dd', { children: b })],
              }),
            ],
          }),
          I.jsx('button', {
            type: 'button',
            className: Bn.restart,
            onClick: x,
            children: 'もう一度あそぶ',
          }),
        ],
      }),
    }),
  wp = '_root_1svqx_1',
  Np = '_message_1svqx_13',
  Bp = '_icon_1svqx_30',
  Up = '_text_1svqx_34',
  Hp = '_cancel_1svqx_38',
  Ci = { root: wp, message: Np, icon: Bp, text: Up, cancel: Hp },
  Nh = B.memo(({ active: c, onCancel: b }) =>
    c
      ? I.jsxs('div', {
          className: Ci.root,
          children: [
            I.jsxs('div', {
              className: Ci.message,
              children: [
                I.jsx('span', { className: Ci.icon, children: '🧲' }),
                I.jsx('span', { className: Ci.text, children: '引き寄せたいアイテムをタップ' }),
              ],
            }),
            I.jsx('button', {
              type: 'button',
              className: Ci.cancel,
              onClick: b,
              children: 'キャンセル',
            }),
          ],
        })
      : null
  );
Nh.displayName = 'MagnetSelectingOverlay';
const Lp = '_gravity_flip_14l5j_1',
  jp = '_arrow_14l5j_9',
  th = { gravity_flip: Lp, arrow: jp },
  Bh = B.memo(({ effect: c }) =>
    c === 'gravityFlip'
      ? I.jsx('div', {
          className: th.gravity_flip,
          'aria-hidden': 'true',
          children: Array.from({ length: 6 }).map((b, T) =>
            I.jsx(
              'span',
              {
                className: th.arrow,
                style: { left: `${(T + 1) * 14}%`, animationDelay: `${T * 0.12}s` },
                children: '⬆',
              },
              T
            )
          ),
        })
      : null
  );
Bh.displayName = 'SkillEffectOverlay';
const Gp = '_overlay_1xsci_1',
  Yp = '_panel_1xsci_12',
  qp = '_title_1xsci_22',
  Vp = '_lead_1xsci_30',
  Xp = '_start_1xsci_37',
  Ri = { overlay: Gp, panel: Yp, title: qp, lead: Vp, start: Xp },
  Qp = ({ onStart: c }) =>
    I.jsx('div', {
      className: Ri.overlay,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'スタート画面',
      children: I.jsxs('div', {
        className: Ri.panel,
        children: [
          I.jsxs('h2', {
            className: Ri.title,
            children: ['💖🍓🐱', I.jsx('br', {}), 'にゃんハートいちごパズル'],
          }),
          I.jsxs('p', {
            className: Ri.lead,
            children: [
              '同じアイテム同士をくっつけて',
              I.jsx('br', {}),
              'にゃんハートいちごをめざそう！',
            ],
          }),
          I.jsx('button', {
            type: 'button',
            className: Ri.start,
            onClick: c,
            children: 'スタート',
          }),
        ],
      }),
    }),
  Zp = '_button_dhp3t_1',
  Kp = '_gauge_dhp3t_23',
  Jp = '_gauge_track_dhp3t_31',
  kp = '_gauge_fill_dhp3t_37',
  Fp = '_icon_dhp3t_45',
  $p = '_ready_dhp3t_53',
  Cl = { button: Zp, gauge: Kp, gauge_track: Jp, gauge_fill: kp, icon: Fp, ready: $p },
  Dc = 32,
  nh = 2 * Math.PI * Dc,
  Uh = B.memo(({ ratio: c, isReady: b, onClick: T }) => {
    const x = Math.max(0, Math.min(1, c)),
      h = nh * (1 - x);
    return I.jsxs('button', {
      type: 'button',
      className: `${Cl.button} ${b ? Cl.ready : ''}`,
      onClick: T,
      disabled: !b,
      'aria-label': b ? '必殺技を選択' : `必殺技ゲージ ${Math.round(x * 100)}%`,
      children: [
        I.jsxs('svg', {
          className: Cl.gauge,
          viewBox: '0 0 80 80',
          'aria-hidden': 'true',
          children: [
            I.jsx('circle', { className: Cl.gauge_track, cx: '40', cy: '40', r: Dc }),
            I.jsx('circle', {
              className: Cl.gauge_fill,
              cx: '40',
              cy: '40',
              r: Dc,
              strokeDasharray: nh,
              strokeDashoffset: h,
              transform: 'rotate(-90 40 40)',
            }),
          ],
        }),
        I.jsx('span', { className: Cl.icon, 'aria-hidden': 'true', children: '⚡' }),
      ],
    });
  });
Uh.displayName = 'SkillButton';
const Wp = '_backdrop_1jz1a_1',
  Pp = '_menu_1jz1a_12',
  Ip = '_title_1jz1a_21',
  e1 = '_choices_1jz1a_30',
  t1 = '_choice_1jz1a_30',
  n1 = '_choice_icon_1jz1a_60',
  a1 = '_choice_label_1jz1a_67',
  l1 = '_choice_desc_1jz1a_74',
  i1 = '_cancel_1jz1a_80',
  Un = {
    backdrop: Wp,
    menu: Pp,
    title: Ip,
    choices: e1,
    choice: t1,
    choice_icon: n1,
    choice_label: a1,
    choice_desc: l1,
    cancel: i1,
  },
  u1 = [
    { kind: 'shake', icon: '🌪', label: 'シェイク', description: '盤面を揺らして詰まりを解す' },
    { kind: 'gravityFlip', icon: '⬆️', label: '重力反転', description: '3秒だけ重力を逆さに' },
    {
      kind: 'magnet',
      icon: '🧲',
      label: '同レベル吸引',
      description: 'タップしたアイテムと同レベルを引き寄せ',
    },
  ],
  Hh = B.memo(({ open: c, onSelect: b, onClose: T }) =>
    c
      ? I.jsx('div', {
          className: Un.backdrop,
          onClick: T,
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': '必殺技を選択',
          children: I.jsxs('div', {
            className: Un.menu,
            onClick: (x) => x.stopPropagation(),
            children: [
              I.jsx('h2', { className: Un.title, children: '必殺技を選択' }),
              I.jsx('div', {
                className: Un.choices,
                children: u1.map((x) =>
                  I.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: Un.choice,
                      onClick: () => b(x.kind),
                      children: [
                        I.jsx('span', {
                          className: Un.choice_icon,
                          'aria-hidden': 'true',
                          children: x.icon,
                        }),
                        I.jsx('span', { className: Un.choice_label, children: x.label }),
                        I.jsx('span', { className: Un.choice_desc, children: x.description }),
                      ],
                    },
                    x.kind
                  )
                ),
              }),
              I.jsx('button', {
                type: 'button',
                className: Un.cancel,
                onClick: T,
                children: 'キャンセル',
              }),
            ],
          }),
        })
      : null
  );
Hh.displayName = 'SkillMenu';
const r1 = '_top_bar_1dke1_1',
  s1 = '_right_1dke1_12',
  c1 = '_version_1dke1_18',
  Mc = { top_bar: r1, right: s1, version: c1 },
  o1 = '_next_1n5pn_1',
  f1 = '_label_1n5pn_7',
  d1 = '_thumb_1n5pn_14',
  m1 = '_image_1n5pn_27',
  Qu = { next: o1, label: f1, thumb: d1, image: m1 },
  h1 = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  Lh = B.memo(({ item: c }) =>
    I.jsxs('div', {
      className: Qu.next,
      children: [
        I.jsx('span', { className: Qu.label, children: 'NEXT' }),
        I.jsx('div', {
          className: Qu.thumb,
          'data-testid': 'next-item',
          children: c
            ? I.jsx('img', { src: h1(c.svgPath), alt: c.name, className: Qu.image })
            : null,
        }),
      ],
    })
  );
Lh.displayName = 'NextItemPreview';
const v1 = '_score_display_pgke7_1',
  g1 = '_row_pgke7_7',
  y1 = '_label_pgke7_13',
  p1 = '_value_pgke7_20',
  S1 = '_label_small_pgke7_28',
  x1 = '_value_small_pgke7_35',
  Na = { score_display: v1, row: g1, label: y1, value: p1, label_small: S1, value_small: x1 },
  jh = B.memo(({ score: c, bestScore: b }) =>
    I.jsxs('div', {
      className: Na.score_display,
      children: [
        I.jsxs('div', {
          className: Na.row,
          children: [
            I.jsx('span', { className: Na.label, children: 'SCORE' }),
            I.jsx('span', { className: Na.value, 'data-testid': 'score-value', children: c }),
          ],
        }),
        I.jsxs('div', {
          className: Na.row,
          children: [
            I.jsx('span', { className: Na.label_small, children: 'BEST' }),
            I.jsx('span', { className: Na.value_small, children: b }),
          ],
        }),
      ],
    })
  );
jh.displayName = 'ScoreDisplay';
const E1 = '_toggle_1ap46_1',
  b1 = { toggle: E1 },
  Gh = B.memo(({ isOn: c, onToggle: b }) =>
    I.jsx('button', {
      type: 'button',
      className: b1.toggle,
      onClick: b,
      'aria-label': c ? 'サウンドをOFFにする' : 'サウンドをONにする',
      'aria-pressed': c,
      children: I.jsx('span', { 'aria-hidden': 'true', children: c ? '🔊' : '🔇' }),
    })
  );
Gh.displayName = 'SoundToggle';
const T1 = '_toggle_15urq_1',
  M1 = { toggle: T1 },
  Gc = [{ id: 'gumi', label: 'グミ' }],
  Yc = 'gumi',
  Yh = (c) => typeof c == 'string' && Gc.some((b) => b.id === c),
  qh = B.memo(({ value: c, onChange: b }) => {
    const T = (x) => {
      const h = x.target.value;
      Yh(h) && b(h);
    };
    return I.jsx('select', {
      className: M1.toggle,
      value: c,
      onChange: T,
      'aria-label': 'アセットテーマ',
      children: Gc.map((x) => I.jsx('option', { value: x.id, children: x.label }, x.id)),
    });
  });
qh.displayName = 'ThemeToggle';
const C1 = ({
  score: c,
  bestScore: b,
  nextItem: T,
  isSoundOn: x,
  onToggleSound: h,
  themeId: i,
  onChangeTheme: d,
}) =>
  I.jsxs('header', {
    className: Mc.top_bar,
    children: [
      I.jsx(jh, { score: c, bestScore: b }),
      I.jsxs('div', {
        className: Mc.right,
        children: [
          I.jsx(Lh, { item: T }),
          I.jsx(qh, { value: i, onChange: d }),
          I.jsx(Gh, { isOn: x, onToggle: h }),
          I.jsxs('span', {
            className: Mc.version,
            'aria-label': 'ビルドバージョン',
            children: ['v', '1.0.12'],
          }),
        ],
      }),
    ],
  });
var Ju = { exports: {} };
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
 */ var R1 = Ju.exports,
  ah;
function A1() {
  return (
    ah ||
      ((ah = 1),
      (function (c, b) {
        (function (x, h) {
          c.exports = h();
        })(R1, function () {
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
                      var s, m;
                      typeof f == 'boolean' ? ((s = 2), (m = f)) : ((s = 1), (m = !0));
                      for (var o = s; o < arguments.length; o++) {
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
                      var p = f.split('.').slice(m, o);
                      return ((h.get(d, f, 0, -1)[p[p.length - 1]] = s), s);
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
                      var p = m[d] || [];
                      s[d] = !0;
                      for (var g = 0; g < p.length; g += 1) {
                        var r = p[g];
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
                          !d && typeof Um < 'u' && (d = Um.decomp));
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
                      var p = f.x + ((i.x - f.x) * m - (i.y - f.y) * o);
                      return ((s.y = f.y + ((i.x - f.x) * o + (i.y - f.y) * m)), (s.x = p), s);
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
                ((i.create = function (s, m) {
                  for (var o = [], p = 0; p < s.length; p++) {
                    var g = s[p],
                      r = { x: g.x, y: g.y, index: p, body: m, isInternal: !1 };
                    o.push(r);
                  }
                  return o;
                }),
                  (i.fromPath = function (s, m) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      p = [];
                    return (
                      s.replace(o, function (g, r, y) {
                        p.push({ x: parseFloat(r), y: parseFloat(y) });
                      }),
                      i.create(p, m)
                    );
                  }),
                  (i.centre = function (s) {
                    for (
                      var m = i.area(s, !0), o = { x: 0, y: 0 }, p, g, r, y = 0;
                      y < s.length;
                      y++
                    )
                      ((r = (y + 1) % s.length),
                        (p = d.cross(s[y], s[r])),
                        (g = d.mult(d.add(s[y], s[r]), p)),
                        (o = d.add(o, g)));
                    return d.div(o, 6 * m);
                  }),
                  (i.mean = function (s) {
                    for (var m = { x: 0, y: 0 }, o = 0; o < s.length; o++)
                      ((m.x += s[o].x), (m.y += s[o].y));
                    return d.div(m, s.length);
                  }),
                  (i.area = function (s, m) {
                    for (var o = 0, p = s.length - 1, g = 0; g < s.length; g++)
                      ((o += (s[p].x - s[g].x) * (s[p].y + s[g].y)), (p = g));
                    return m ? o / 2 : Math.abs(o) / 2;
                  }),
                  (i.inertia = function (s, m) {
                    for (var o = 0, p = 0, g = s, r, y, v = 0; v < g.length; v++)
                      ((y = (v + 1) % g.length),
                        (r = Math.abs(d.cross(g[y], g[v]))),
                        (o += r * (d.dot(g[y], g[y]) + d.dot(g[y], g[v]) + d.dot(g[v], g[v]))),
                        (p += r));
                    return (m / 6) * (o / p);
                  }),
                  (i.translate = function (s, m, o) {
                    o = typeof o < 'u' ? o : 1;
                    var p = s.length,
                      g = m.x * o,
                      r = m.y * o,
                      y;
                    for (y = 0; y < p; y++) ((s[y].x += g), (s[y].y += r));
                    return s;
                  }),
                  (i.rotate = function (s, m, o) {
                    if (m !== 0) {
                      var p = Math.cos(m),
                        g = Math.sin(m),
                        r = o.x,
                        y = o.y,
                        v = s.length,
                        E,
                        R,
                        O,
                        w;
                      for (w = 0; w < v; w++)
                        ((E = s[w]),
                          (R = E.x - r),
                          (O = E.y - y),
                          (E.x = r + (R * p - O * g)),
                          (E.y = y + (R * g + O * p)));
                      return s;
                    }
                  }),
                  (i.contains = function (s, m) {
                    for (var o = m.x, p = m.y, g = s.length, r = s[g - 1], y, v = 0; v < g; v++) {
                      if (((y = s[v]), (o - r.x) * (y.y - r.y) + (p - r.y) * (r.x - y.x) > 0))
                        return !1;
                      r = y;
                    }
                    return !0;
                  }),
                  (i.scale = function (s, m, o, p) {
                    if (m === 1 && o === 1) return s;
                    p = p || i.centre(s);
                    for (var g, r, y = 0; y < s.length; y++)
                      ((g = s[y]),
                        (r = d.sub(g, p)),
                        (s[y].x = p.x + r.x * m),
                        (s[y].y = p.y + r.y * o));
                    return s;
                  }),
                  (i.chamfer = function (s, m, o, p, g) {
                    (typeof m == 'number' ? (m = [m]) : (m = m || [8]),
                      (o = typeof o < 'u' ? o : -1),
                      (p = p || 2),
                      (g = g || 14));
                    for (var r = [], y = 0; y < s.length; y++) {
                      var v = s[y - 1 >= 0 ? y - 1 : s.length - 1],
                        E = s[y],
                        R = s[(y + 1) % s.length],
                        O = m[y < m.length ? y : m.length - 1];
                      if (O === 0) {
                        r.push(E);
                        continue;
                      }
                      var w = d.normalise({ x: E.y - v.y, y: v.x - E.x }),
                        L = d.normalise({ x: R.y - E.y, y: E.x - R.x }),
                        M = Math.sqrt(2 * Math.pow(O, 2)),
                        z = d.mult(f.clone(w), O),
                        D = d.normalise(d.mult(d.add(w, L), 0.5)),
                        A = d.sub(E, d.mult(D, M)),
                        N = o;
                      (o === -1 && (N = Math.pow(O, 0.32) * 1.75),
                        (N = f.clamp(N, p, g)),
                        N % 2 === 1 && (N += 1));
                      for (var _ = Math.acos(d.dot(w, L)), H = _ / N, G = 0; G < N; G++)
                        r.push(d.add(d.rotate(z, H * G), A));
                    }
                    return r;
                  }),
                  (i.clockwiseSort = function (s) {
                    var m = i.mean(s);
                    return (
                      s.sort(function (o, p) {
                        return d.angle(m, o) - d.angle(m, p);
                      }),
                      s
                    );
                  }),
                  (i.isConvex = function (s) {
                    var m = 0,
                      o = s.length,
                      p,
                      g,
                      r,
                      y;
                    if (o < 3) return null;
                    for (p = 0; p < o; p++)
                      if (
                        ((g = (p + 1) % o),
                        (r = (p + 2) % o),
                        (y = (s[g].x - s[p].x) * (s[r].y - s[g].y)),
                        (y -= (s[g].y - s[p].y) * (s[r].x - s[g].x)),
                        y < 0 ? (m |= 1) : y > 0 && (m |= 2),
                        m === 3)
                      )
                        return !1;
                    return m !== 0 ? !0 : null;
                  }),
                  (i.hull = function (s) {
                    var m = [],
                      o = [],
                      p,
                      g;
                    for (
                      s = s.slice(0),
                        s.sort(function (r, y) {
                          var v = r.x - y.x;
                          return v !== 0 ? v : r.y - y.y;
                        }),
                        g = 0;
                      g < s.length;
                      g += 1
                    ) {
                      for (
                        p = s[g];
                        o.length >= 2 && d.cross3(o[o.length - 2], o[o.length - 1], p) <= 0;
                      )
                        o.pop();
                      o.push(p);
                    }
                    for (g = s.length - 1; g >= 0; g -= 1) {
                      for (
                        p = s[g];
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
                s = h(7),
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
                      var M = r.parts[L];
                      (d.translate(M.vertices, r.velocity),
                        L > 0 && ((M.position.x += r.velocity.x), (M.position.y += r.velocity.y)),
                        r.angularVelocity !== 0 &&
                          (d.rotate(M.vertices, r.angularVelocity, r.position),
                          p.rotate(M.axes, r.angularVelocity),
                          L > 0 &&
                            f.rotateAbout(M.position, r.angularVelocity, r.position, M.position)),
                        o.update(M.bounds, M.vertices, r.velocity));
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
                ((i.on = function (f, s, m) {
                  for (var o = s.split(' '), p, g = 0; g < o.length; g++)
                    ((p = o[g]),
                      (f.events = f.events || {}),
                      (f.events[p] = f.events[p] || []),
                      f.events[p].push(m));
                  return m;
                }),
                  (i.off = function (f, s, m) {
                    if (!s) {
                      f.events = {};
                      return;
                    }
                    typeof s == 'function' && ((m = s), (s = d.keys(f.events).join(' ')));
                    for (var o = s.split(' '), p = 0; p < o.length; p++) {
                      var g = f.events[o[p]],
                        r = [];
                      if (m && g) for (var y = 0; y < g.length; y++) g[y] !== m && r.push(g[y]);
                      f.events[o[p]] = r;
                    }
                  }),
                  (i.trigger = function (f, s, m) {
                    var o,
                      p,
                      g,
                      r,
                      y = f.events;
                    if (y && d.keys(y).length > 0) {
                      (m || (m = {}), (o = s.split(' ')));
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
                    return s.create(g);
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(4),
                f = h(5),
                s = h(0);
              (function () {
                ((i._motionWakeThreshold = 0.18),
                  (i._motionSleepThreshold = 0.08),
                  (i._minBias = 0.9),
                  (i.update = function (m, o) {
                    for (
                      var p = o / s._baseDelta, g = i._motionSleepThreshold, r = 0;
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
                var s = [],
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
                      M = E.overlap,
                      z = E.axis,
                      D = z.x,
                      A = z.y,
                      N = g.position.x - p.position.x,
                      _ = g.position.y - p.position.y;
                    (D * N + A * _ >= 0 && ((D = -D), (A = -A)),
                      (R.x = D),
                      (R.y = A),
                      (O.x = -A),
                      (O.y = D),
                      (w.x = D * M),
                      (w.y = A * M),
                      (v.depth = M));
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
                      M = y.length,
                      z = Number.MAX_VALUE,
                      D = 0,
                      A,
                      N,
                      _,
                      H,
                      G,
                      J;
                    for (G = 0; G < M; G++) {
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
                        ((N = se - ne),
                        (_ = de - K),
                        (A = N < _ ? N : _),
                        A < z && ((z = A), (D = G), A <= 0))
                      )
                        break;
                    }
                    ((p.axis = y[D]), (p.overlap = z));
                  }),
                  (i._findSupports = function (p, g, r, y) {
                    var v = g.vertices,
                      E = v.length,
                      R = p.position.x,
                      O = p.position.y,
                      w = r.x * y,
                      L = r.y * y,
                      M = v[0],
                      z = M,
                      D = w * (R - z.x) + L * (O - z.y),
                      A,
                      N,
                      _;
                    for (_ = 1; _ < E; _ += 1)
                      ((z = v[_]),
                        (N = w * (R - z.x) + L * (O - z.y)),
                        N < D && ((D = N), (M = z)));
                    return (
                      (A = v[(E + M.index - 1) % E]),
                      (D = w * (R - A.x) + L * (O - A.y)),
                      (z = v[(M.index + 1) % E]),
                      w * (R - z.x) + L * (O - z.y) < D
                        ? ((s[0] = M), (s[1] = z), s)
                        : ((s[0] = M), (s[1] = A), s)
                    );
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(16);
              (function () {
                ((i.create = function (f, s) {
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
                      timeCreated: s,
                      timeUpdated: s,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (i.update(p, f, s), p);
                }),
                  (i.update = function (f, s, m) {
                    var o = s.supports,
                      p = s.supportCount,
                      g = f.contacts,
                      r = s.parentA,
                      y = s.parentB;
                    ((f.isActive = !0),
                      (f.timeUpdated = m),
                      (f.collision = s),
                      (f.separation = s.depth),
                      (f.inverseMass = r.inverseMass + y.inverseMass),
                      (f.friction = r.friction < y.friction ? r.friction : y.friction),
                      (f.frictionStatic =
                        r.frictionStatic > y.frictionStatic ? r.frictionStatic : y.frictionStatic),
                      (f.restitution =
                        r.restitution > y.restitution ? r.restitution : y.restitution),
                      (f.slop = r.slop > y.slop ? r.slop : y.slop),
                      (f.contactCount = p),
                      (s.pair = f));
                    var v = o[0],
                      E = g[0],
                      R = o[1],
                      O = g[1];
                    ((O.vertex === v || E.vertex === R) && ((g[1] = E), (g[0] = E = O), (O = g[1])),
                      (E.vertex = v),
                      (O.vertex = R));
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
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(3),
                f = h(2),
                s = h(7),
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
                          M = f.magnitude(L);
                        M < i._minLength && (M = i._minLength);
                        var z = (M - g.length) / M,
                          D = g.stiffness >= 1 || g.length === 0,
                          A = D ? g.stiffness * r : g.stiffness * r * r,
                          N = g.damping * r,
                          _ = f.mult(L, z * A),
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
                          ((q = f.div(L, M)),
                            (ne = f.sub(
                              (v && f.sub(v.position, v.positionPrev)) || se,
                              (y && f.sub(y.position, y.positionPrev)) || se
                            )),
                            (K = f.dot(q, ne)));
                        }
                        (y &&
                          !y.isStatic &&
                          ((ee = y.inverseMass / H),
                          (y.constraintImpulse.x -= _.x * ee),
                          (y.constraintImpulse.y -= _.y * ee),
                          (y.position.x -= _.x * ee),
                          (y.position.y -= _.y * ee),
                          N > 0 &&
                            ((y.positionPrev.x -= N * q.x * K * ee),
                            (y.positionPrev.y -= N * q.y * K * ee)),
                          (te =
                            (f.cross(E, _) / J) *
                            i._torqueDampen *
                            y.inverseInertia *
                            (1 - g.angularStiffness)),
                          (y.constraintImpulse.angle -= te),
                          (y.angle -= te)),
                          v &&
                            !v.isStatic &&
                            ((ee = v.inverseMass / H),
                            (v.constraintImpulse.x += _.x * ee),
                            (v.constraintImpulse.y += _.y * ee),
                            (v.position.x += _.x * ee),
                            (v.position.y += _.y * ee),
                            N > 0 &&
                              ((v.positionPrev.x += N * q.x * K * ee),
                              (v.positionPrev.y += N * q.y * K * ee)),
                            (te =
                              (f.cross(R, _) / J) *
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
                        s.set(y, !1);
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
                ((i.fromVertices = function (s) {
                  for (var m = {}, o = 0; o < s.length; o++) {
                    var p = (o + 1) % s.length,
                      g = d.normalise({ x: s[p].y - s[o].y, y: s[o].x - s[p].x }),
                      r = g.y === 0 ? 1 / 0 : g.x / g.y;
                    ((r = r.toFixed(3).toString()), (m[r] = g));
                  }
                  return f.values(m);
                }),
                  (i.rotate = function (s, m) {
                    if (m !== 0)
                      for (var o = Math.cos(m), p = Math.sin(m), g = 0; g < s.length; g++) {
                        var r = s[g],
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
                s = h(4),
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
                  return s.create(f.extend({}, E, v));
                }),
                  (i.trapezoid = function (p, g, r, y, v, E) {
                    ((E = E || {}),
                      v >= 1 && f.warn('Bodies.trapezoid: slope parameter must be < 1.'),
                      (v *= 0.5));
                    var R = (1 - v * 2) * r,
                      O = r * v,
                      w = O + R,
                      L = w + O,
                      M;
                    v < 0.5
                      ? (M = 'L 0 0 L ' + O + ' ' + -y + ' L ' + w + ' ' + -y + ' L ' + L + ' 0')
                      : (M = 'L 0 0 L ' + w + ' ' + -y + ' L ' + L + ' 0');
                    var z = {
                      label: 'Trapezoid Body',
                      position: { x: p, y: g },
                      vertices: d.fromPath(M),
                    };
                    if (E.chamfer) {
                      var D = E.chamfer;
                      ((z.vertices = d.chamfer(
                        z.vertices,
                        D.radius,
                        D.quality,
                        D.qualityMin,
                        D.qualityMax
                      )),
                        delete E.chamfer);
                    }
                    return s.create(f.extend({}, z, E));
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
                        M = Math.cos(L) * y,
                        z = Math.sin(L) * y;
                      R += 'L ' + M.toFixed(3) + ' ' + z.toFixed(3) + ' ';
                    }
                    var D = {
                      label: 'Polygon Body',
                      position: { x: p, y: g },
                      vertices: d.fromPath(R),
                    };
                    if (v.chamfer) {
                      var A = v.chamfer;
                      ((D.vertices = d.chamfer(
                        D.vertices,
                        A.radius,
                        A.quality,
                        A.qualityMin,
                        A.qualityMax
                      )),
                        delete v.chamfer);
                    }
                    return s.create(f.extend({}, D, v));
                  }),
                  (i.fromVertices = function (p, g, r, y, v, E, R, O) {
                    var w = f.getDecomp(),
                      L,
                      M,
                      z,
                      D,
                      A,
                      N,
                      _,
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
                        ((N = r[J]),
                        (D = d.isConvex(N)),
                        (A = !D),
                        A &&
                          !L &&
                          f.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                          ),
                        D || !L)
                      )
                        (D ? (N = d.clockwiseSort(N)) : (N = d.hull(N)),
                          z.push({ position: { x: p, y: g }, vertices: N }));
                      else {
                        var ee = N.map(function (ie) {
                          return [ie.x, ie.y];
                        });
                        (w.makeCCW(ee),
                          E !== !1 && w.removeCollinearPoints(ee, E),
                          O !== !1 && w.removeDuplicatePoints && w.removeDuplicatePoints(ee, O));
                        var q = w.quickDecomp(ee);
                        for (_ = 0; _ < q.length; _++) {
                          var K = q[_],
                            ne = K.map(function (ie) {
                              return { x: ie[0], y: ie[1] };
                            });
                          (R > 0 && d.area(ne) < R) ||
                            z.push({ position: d.centre(ne), vertices: ne });
                        }
                      }
                    for (_ = 0; _ < z.length; _++) z[_] = s.create(f.extend(z[_], y));
                    if (v) {
                      var se = 5;
                      for (_ = 0; _ < z.length; _++) {
                        var de = z[_];
                        for (H = _ + 1; H < z.length; H++) {
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
                      ? ((M = s.create(f.extend({ parts: z.slice(0) }, y))),
                        s.setPosition(M, { x: p, y: g }),
                        M)
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
                      p = o.length,
                      g = i.canCollide,
                      r = f.collides,
                      y = s.collisions,
                      v = 0,
                      E,
                      R;
                    for (o.sort(i._compareBoundsX), E = 0; E < p; E++) {
                      var O = o[E],
                        w = O.bounds,
                        L = O.bounds.max.x,
                        M = O.bounds.max.y,
                        z = O.bounds.min.y,
                        D = O.isStatic || O.isSleeping,
                        A = O.parts.length,
                        N = A === 1;
                      for (R = E + 1; R < p; R++) {
                        var _ = o[R],
                          H = _.bounds;
                        if (H.min.x > L) break;
                        if (
                          !(M < H.min.y || z > H.max.y) &&
                          !(D && (_.isStatic || _.isSleeping)) &&
                          g(O.collisionFilter, _.collisionFilter)
                        ) {
                          var G = _.parts.length;
                          if (N && G === 1) {
                            var J = r(O, _, m);
                            J && (y[v++] = J);
                          } else
                            for (var te = A > 1 ? 1 : 0, ee = G > 1 ? 1 : 0, q = te; q < A; q++)
                              for (var K = O.parts[q], w = K.bounds, ne = ee; ne < G; ne++) {
                                var se = _.parts[ne],
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
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
                        p = m.changedTouches;
                      (p && ((s.button = 0), m.preventDefault()),
                        (s.absolute.x = o.x),
                        (s.absolute.y = o.y),
                        (s.position.x = s.absolute.x * s.scale.x + s.offset.x),
                        (s.position.y = s.absolute.y * s.scale.y + s.offset.y),
                        (s.sourceEvents.mousemove = m));
                    }),
                    (s.mousedown = function (m) {
                      var o = i._getRelativeMousePosition(m, s.element, s.pixelRatio),
                        p = m.changedTouches;
                      (p ? ((s.button = 0), m.preventDefault()) : (s.button = m.button),
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
                        p = m.changedTouches;
                      (p && m.preventDefault(),
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
                        x: v / ((s.clientWidth / (s.width || s.clientWidth)) * m),
                        y: E / ((s.clientHeight / (s.height || s.clientHeight)) * m),
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
                  (i.dependencies = function (f, s) {
                    var m = i.dependencyParse(f),
                      o = m.name;
                    if (((s = s || {}), !(o in s))) {
                      ((f = i.resolve(f) || f),
                        (s[o] = d.map(f.uses || [], function (g) {
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
                      for (var p = 0; p < s[o].length; p += 1) i.dependencies(s[o][p], s);
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
                s = h(13),
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
                      (R.detector = v.detector || s.create()),
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
                      M = v.timing,
                      z = M.timestamp,
                      D;
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
                    var N = p.allBodies(O),
                      _ = p.allConstraints(O);
                    for (
                      O.isModified && (s.setBodies(w, N), p.setModified(O, !1, !1, !0)),
                        v.enableSleeping && d.update(N, E),
                        i._bodiesApplyGravity(N, v.gravity),
                        E > 0 && i._bodiesUpdate(N, E),
                        o.trigger(v, 'beforeSolve', A),
                        g.preSolveAll(N),
                        D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      g.solveAll(_, E);
                    g.postSolveAll(N);
                    var H = s.collisions(w);
                    (m.update(L, H, z),
                      v.enableSleeping && d.afterCollisions(L.list),
                      L.collisionStart.length > 0 &&
                        o.trigger(v, 'collisionStart', {
                          pairs: L.collisionStart,
                          timestamp: M.timestamp,
                          delta: E,
                        }));
                    var G = r.clamp(20 / v.positionIterations, 0, 1);
                    for (f.preSolvePosition(L.list), D = 0; D < v.positionIterations; D++)
                      f.solvePosition(L.list, E, G);
                    for (
                      f.postSolvePosition(N), g.preSolveAll(N), D = 0;
                      D < v.constraintIterations;
                      D++
                    )
                      g.solveAll(_, E);
                    for (
                      g.postSolveAll(N), f.preSolveVelocity(L.list), D = 0;
                      D < v.velocityIterations;
                      D++
                    )
                      f.solveVelocity(L.list, E);
                    return (
                      i._bodiesUpdateVelocities(N),
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
                      i._bodiesClearForces(N),
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
                    (m.clear(v.pairs), s.clear(v.detector));
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
                      M = f.clamp(o / f._baseDelta, 0, 1),
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
                          (w = r.separation - r.slop * M),
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
                        r = s.update,
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
                          var M = v.parts[L];
                          (g(M.vertices, E),
                            r(M.bounds, M.vertices, w),
                            (M.position.x += R),
                            (M.position.y += O));
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
                          var M = y[g],
                            z = M.vertex,
                            D = M.normalImpulse,
                            A = M.tangentImpulse;
                          if (D !== 0 || A !== 0) {
                            var N = w.x * D + L.x * A,
                              _ = w.y * D + L.y * A;
                            (R.isStatic ||
                              R.isSleeping ||
                              ((R.positionPrev.x += N * R.inverseMass),
                              (R.positionPrev.y += _ * R.inverseMass),
                              (R.anglePrev +=
                                R.inverseInertia *
                                ((z.x - R.position.x) * _ - (z.y - R.position.y) * N))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= N * O.inverseMass),
                                (O.positionPrev.y -= _ * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((z.x - O.position.x) * _ - (z.y - O.position.y) * N))));
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
                      M,
                      z;
                    for (M = 0; M < O; M++) {
                      var D = m[M];
                      if (!(!D.isActive || D.isSensor)) {
                        var A = D.collision,
                          N = A.parentA,
                          _ = A.parentB,
                          H = A.normal.x,
                          G = A.normal.y,
                          J = A.tangent.x,
                          te = A.tangent.y,
                          ee = D.inverseMass,
                          q = D.friction * D.frictionStatic * E,
                          K = D.contacts,
                          ne = D.contactCount,
                          se = 1 / ne,
                          de = N.position.x - N.positionPrev.x,
                          j = N.position.y - N.positionPrev.y,
                          F = N.angle - N.anglePrev,
                          ae = _.position.x - _.positionPrev.x,
                          le = _.position.y - _.positionPrev.y,
                          oe = _.angle - _.anglePrev;
                        for (z = 0; z < ne; z++) {
                          var ie = K[z],
                            he = ie.vertex,
                            ye = he.x - N.position.x,
                            Re = he.y - N.position.y,
                            Ze = he.x - _.position.x,
                            Pe = he.y - _.position.y,
                            Xe = de - Re * F,
                            Ha = j + ye * F,
                            Dt = ae - Pe * oe,
                            Pt = le + Ze * oe,
                            it = Xe - Dt,
                            ln = Ha - Pt,
                            hn = H * it + G * ln,
                            yt = J * it + te * ln,
                            pt = D.separation + hn,
                            Ot = Math.min(pt, 1);
                          Ot = pt < 0 ? 0 : Ot;
                          var ma = Ot * q;
                          yt < -ma || yt > ma
                            ? ((L = yt > 0 ? yt : -yt),
                              (w = D.friction * (yt > 0 ? 1 : -1) * r),
                              w < -L ? (w = -L) : w > L && (w = L))
                            : ((w = yt), (L = R));
                          var ha = ye * G - Re * H,
                            ut = Ze * G - Pe * H,
                            La =
                              se / (ee + N.inverseInertia * ha * ha + _.inverseInertia * ut * ut),
                            vn = (1 + D.restitution) * hn * La;
                          if (((w *= La), hn < y)) ie.normalImpulse = 0;
                          else {
                            var ja = ie.normalImpulse;
                            ((ie.normalImpulse += vn),
                              ie.normalImpulse > 0 && (ie.normalImpulse = 0),
                              (vn = ie.normalImpulse - ja));
                          }
                          if (yt < -v || yt > v) ie.tangentImpulse = 0;
                          else {
                            var Yn = ie.tangentImpulse;
                            ((ie.tangentImpulse += w),
                              ie.tangentImpulse < -L && (ie.tangentImpulse = -L),
                              ie.tangentImpulse > L && (ie.tangentImpulse = L),
                              (w = ie.tangentImpulse - Yn));
                          }
                          var qn = H * vn + J * w,
                            un = G * vn + te * w;
                          (N.isStatic ||
                            N.isSleeping ||
                            ((N.positionPrev.x += qn * N.inverseMass),
                            (N.positionPrev.y += un * N.inverseMass),
                            (N.anglePrev += (ye * un - Re * qn) * N.inverseInertia)),
                            _.isStatic ||
                              _.isSleeping ||
                              ((_.positionPrev.x -= qn * _.inverseMass),
                              (_.positionPrev.y -= un * _.inverseMass),
                              (_.anglePrev -= (Ze * un - Pe * qn) * _.inverseInertia)));
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
                    var p = d.update,
                      g = d.create,
                      r = d.setActive,
                      y = s.table,
                      v = s.list,
                      E = v.length,
                      R = E,
                      O = s.collisionStart,
                      w = s.collisionEnd,
                      L = s.collisionActive,
                      M = m.length,
                      z = 0,
                      D = 0,
                      A = 0,
                      N,
                      _,
                      H;
                    for (H = 0; H < M; H++)
                      ((N = m[H]),
                        (_ = N.pair),
                        _
                          ? (_.isActive && (L[A++] = _), p(_, N, o))
                          : ((_ = g(N, o)), (y[_.id] = _), (O[z++] = _), (v[R++] = _)));
                    for (R = 0, E = v.length, H = 0; H < E; H++)
                      ((_ = v[H]),
                        _.timeUpdated >= o
                          ? (v[R++] = _)
                          : (r(_, !1, o),
                            _.collision.bodyA.sleepCounter > 0 && _.collision.bodyB.sleepCounter > 0
                              ? (v[R++] = _)
                              : ((w[D++] = _), delete y[_.id])));
                    (v.length !== R && (v.length = R),
                      O.length !== z && (O.length = z),
                      w.length !== D && (w.length = D),
                      L.length !== A && (L.length = A));
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
                  (i.before = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), f.chainPathBefore(i, s, m));
                  }),
                  (i.after = function (s, m) {
                    return ((s = s.replace(/^Matter./, '')), f.chainPathAfter(i, s, m));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(6),
                f = h(10),
                s = h(0),
                m = h(4),
                o = h(12),
                p = s.deprecated;
              (function () {
                ((i.stack = function (g, r, y, v, E, R, O) {
                  for (
                    var w = d.create({ label: 'Stack' }), L = g, M = r, z, D = 0, A = 0;
                    A < v;
                    A++
                  ) {
                    for (var N = 0, _ = 0; _ < y; _++) {
                      var H = O(L, M, _, A, z, D);
                      if (H) {
                        var G = H.bounds.max.y - H.bounds.min.y,
                          J = H.bounds.max.x - H.bounds.min.x;
                        (G > N && (N = G),
                          m.translate(H, { x: J * 0.5, y: G * 0.5 }),
                          (L = H.bounds.max.x + E),
                          d.addBody(w, H),
                          (z = H),
                          (D += 1));
                      } else L += E;
                    }
                    ((M += N + R), (L = g));
                  }
                  return w;
                }),
                  (i.chain = function (g, r, y, v, E, R) {
                    for (var O = g.bodies, w = 1; w < O.length; w++) {
                      var L = O[w - 1],
                        M = O[w],
                        z = L.bounds.max.y - L.bounds.min.y,
                        D = L.bounds.max.x - L.bounds.min.x,
                        A = M.bounds.max.y - M.bounds.min.y,
                        N = M.bounds.max.x - M.bounds.min.x,
                        _ = {
                          bodyA: L,
                          pointA: { x: D * r, y: z * y },
                          bodyB: M,
                          pointB: { x: N * v, y: A * E },
                        },
                        H = s.extend(_, R);
                      d.addConstraint(g, f.create(H));
                    }
                    return ((g.label += ' Chain'), g);
                  }),
                  (i.mesh = function (g, r, y, v, E) {
                    var R = g.bodies,
                      O,
                      w,
                      L,
                      M,
                      z;
                    for (O = 0; O < y; O++) {
                      for (w = 1; w < r; w++)
                        ((L = R[w - 1 + O * r]),
                          (M = R[w + O * r]),
                          d.addConstraint(g, f.create(s.extend({ bodyA: L, bodyB: M }, E))));
                      if (O > 0)
                        for (w = 0; w < r; w++)
                          ((L = R[w + (O - 1) * r]),
                            (M = R[w + O * r]),
                            d.addConstraint(g, f.create(s.extend({ bodyA: L, bodyB: M }, E))),
                            v &&
                              w > 0 &&
                              ((z = R[w - 1 + (O - 1) * r]),
                              d.addConstraint(g, f.create(s.extend({ bodyA: z, bodyB: M }, E)))),
                            v &&
                              w < r - 1 &&
                              ((z = R[w + 1 + (O - 1) * r]),
                              d.addConstraint(g, f.create(s.extend({ bodyA: z, bodyB: M }, E)))));
                    }
                    return ((g.label += ' Mesh'), g);
                  }),
                  (i.pyramid = function (g, r, y, v, E, R, O) {
                    return i.stack(g, r, y, v, E, R, function (w, L, M, z, D, A) {
                      var N = Math.min(v, Math.ceil(y / 2)),
                        _ = D ? D.bounds.max.x - D.bounds.min.x : 0;
                      if (!(z > N)) {
                        z = N - z;
                        var H = z,
                          G = y - 1 - z;
                        if (!(M < H || M > G)) {
                          A === 1 && m.translate(D, { x: (M + (y % 2 === 1 ? 1 : -1)) * _, y: 0 });
                          var J = D ? M * _ : 0;
                          return O(g + J + M * E, L, M, z, D, A);
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
                        M = f.create({ pointA: { x: g + O * (v * w), y: r }, bodyB: L });
                      (d.addBody(R, L), d.addConstraint(R, M));
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
                      M = 0,
                      z = d.create({ label: 'Car' }),
                      D = o.rectangle(g, r, y, v, {
                        collisionFilter: { group: R },
                        chamfer: { radius: v * 0.5 },
                        density: 2e-4,
                      }),
                      A = o.circle(g + w, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      N = o.circle(g + L, r + M, E, {
                        collisionFilter: { group: R },
                        friction: 0.8,
                      }),
                      _ = f.create({
                        bodyB: D,
                        pointB: { x: w, y: M },
                        bodyA: A,
                        stiffness: 1,
                        length: 0,
                      }),
                      H = f.create({
                        bodyB: D,
                        pointB: { x: L, y: M },
                        bodyA: N,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      d.addBody(z, D),
                      d.addBody(z, A),
                      d.addBody(z, N),
                      d.addConstraint(z, _),
                      d.addConstraint(z, H),
                      z
                    );
                  }),
                  p(i, 'car', 'Composites.car ➤ moved to car example'),
                  (i.softBody = function (g, r, y, v, E, R, O, w, L, M) {
                    ((L = s.extend({ inertia: 1 / 0 }, L)),
                      (M = s.extend({ stiffness: 0.2, render: { type: 'line', anchors: !1 } }, M)));
                    var z = i.stack(g, r, y, v, E, R, function (D, A) {
                      return o.circle(D, A, w, L);
                    });
                    return (i.mesh(z, y, v, O, M), (z.label = 'Soft Body'), z);
                  }),
                  p(i, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples'));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
                        var z = i._getRegion(m, M);
                        if (!M.region || z.id !== M.region.id || g) {
                          (!M.region || g) && (M.region = z);
                          var D = i._regionUnion(z, M.region);
                          for (y = D.startCol; y <= D.endCol; y++)
                            for (v = D.startRow; v <= D.endRow; v++) {
                              ((w = i._getBucketId(y, v)), (O = R[w]));
                              var A =
                                  y >= z.startCol &&
                                  y <= z.endCol &&
                                  v >= z.startRow &&
                                  v <= z.endRow,
                                N =
                                  y >= M.region.startCol &&
                                  y <= M.region.endCol &&
                                  v >= M.region.startRow &&
                                  v <= M.region.endRow;
                              (!A && N && N && O && i._bucketRemoveBody(m, O, M),
                                (M.region === z || (A && !N) || g) &&
                                  (O || (O = i._createBucket(R, w)), i._bucketAddBody(m, O, M)));
                            }
                          ((M.region = z), (L = !0));
                        }
                      }
                    }
                    L && (m.pairsList = i._createActivePairsList(m));
                  }),
                  s(i, 'update', 'Grid.update ➤ replaced by Matter.Detector'),
                  (i.clear = function (m) {
                    ((m.buckets = {}), (m.pairs = {}), (m.pairsList = []));
                  }),
                  s(i, 'clear', 'Grid.clear ➤ replaced by Matter.Detector'),
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
                s = h(14),
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
                      ? (R = s.create(v.render.canvas))
                      : E && E.element
                        ? (R = s.create(E.element))
                        : ((R = s.create()),
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
                      var M = g.allBodies(v.world);
                      (i.update(L, M), i._triggerEvents(L));
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
                            for (var M = w.parts.length > 1 ? 1 : 0; M < w.parts.length; M++) {
                              var z = w.parts[M];
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
                      s.clearSourceEvents(E));
                  }));
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
              var d = h(2),
                f = h(8),
                s = h(1),
                m = h(12),
                o = h(3);
              (function () {
                ((i.collides = function (p, g) {
                  for (
                    var r = [], y = g.length, v = p.bounds, E = f.collides, R = s.overlaps, O = 0;
                    O < y;
                    O++
                  ) {
                    var w = g[O],
                      L = w.parts.length,
                      M = L === 1 ? 0 : 1;
                    if (R(w.bounds, v))
                      for (var z = M; z < L; z++) {
                        var D = w.parts[z];
                        if (R(D.bounds, v)) {
                          var A = E(D, p);
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
                        M = 0;
                      M < L.length;
                      M += 1
                    ) {
                      var z = L[M];
                      z.body = z.bodyB = z.bodyA;
                    }
                    return L;
                  }),
                  (i.region = function (p, g, r) {
                    for (var y = [], v = 0; v < p.length; v++) {
                      var E = p[v],
                        R = s.overlaps(E.bounds, g);
                      ((R && !r) || (!R && r)) && y.push(E);
                    }
                    return y;
                  }),
                  (i.point = function (p, g) {
                    for (var r = [], y = 0; y < p.length; y++) {
                      var v = p[y];
                      if (s.contains(v.bounds, g))
                        for (var E = v.parts.length === 1 ? 0 : 1; E < v.parts.length; E++) {
                          var R = v.parts[E];
                          if (s.contains(R.bounds, g) && o.contains(R.vertices, g)) {
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
                s = h(6),
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
                      D = f.extend(z, M);
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
                      (D.controller = i),
                      (D.options.showBroadphase = !1),
                      D.options.pixelRatio !== 1 && i.setPixelRatio(D, D.options.pixelRatio),
                      f.isElement(D.element) && D.element.appendChild(D.canvas),
                      D
                    );
                  }),
                  (i.run = function (M) {
                    (function z(D) {
                      ((M.frameRequestId = r(z)),
                        v(M, D),
                        i.world(M, D),
                        M.context.setTransform(
                          M.options.pixelRatio,
                          0,
                          0,
                          M.options.pixelRatio,
                          0,
                          0
                        ),
                        (M.options.showStats || M.options.showDebug) && i.stats(M, M.context, D),
                        (M.options.showPerformance || M.options.showDebug) &&
                          i.performance(M, M.context, D),
                        M.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (i.stop = function (M) {
                    y(M.frameRequestId);
                  }),
                  (i.setPixelRatio = function (M, z) {
                    var D = M.options,
                      A = M.canvas;
                    (z === 'auto' && (z = O(A)),
                      (D.pixelRatio = z),
                      A.setAttribute('data-pixel-ratio', z),
                      (A.width = D.width * z),
                      (A.height = D.height * z),
                      (A.style.width = D.width + 'px'),
                      (A.style.height = D.height + 'px'));
                  }),
                  (i.setSize = function (M, z, D) {
                    ((M.options.width = z),
                      (M.options.height = D),
                      (M.bounds.max.x = M.bounds.min.x + z),
                      (M.bounds.max.y = M.bounds.min.y + D),
                      M.options.pixelRatio !== 1
                        ? i.setPixelRatio(M, M.options.pixelRatio)
                        : ((M.canvas.width = z), (M.canvas.height = D)));
                  }),
                  (i.lookAt = function (M, z, D, A) {
                    ((A = typeof A < 'u' ? A : !0),
                      (z = f.isArray(z) ? z : [z]),
                      (D = D || { x: 0, y: 0 }));
                    for (
                      var N = { min: { x: 1 / 0, y: 1 / 0 }, max: { x: -1 / 0, y: -1 / 0 } }, _ = 0;
                      _ < z.length;
                      _ += 1
                    ) {
                      var H = z[_],
                        G = H.bounds ? H.bounds.min : H.min || H.position || H,
                        J = H.bounds ? H.bounds.max : H.max || H.position || H;
                      G &&
                        J &&
                        (G.x < N.min.x && (N.min.x = G.x),
                        J.x > N.max.x && (N.max.x = J.x),
                        G.y < N.min.y && (N.min.y = G.y),
                        J.y > N.max.y && (N.max.y = J.y));
                    }
                    var te = N.max.x - N.min.x + 2 * D.x,
                      ee = N.max.y - N.min.y + 2 * D.y,
                      q = M.canvas.height,
                      K = M.canvas.width,
                      ne = K / q,
                      se = te / ee,
                      de = 1,
                      j = 1;
                    (se > ne ? (j = se / ne) : (de = ne / se),
                      (M.options.hasBounds = !0),
                      (M.bounds.min.x = N.min.x),
                      (M.bounds.max.x = N.min.x + te * de),
                      (M.bounds.min.y = N.min.y),
                      (M.bounds.max.y = N.min.y + ee * j),
                      A &&
                        ((M.bounds.min.x += te * 0.5 - te * de * 0.5),
                        (M.bounds.max.x += te * 0.5 - te * de * 0.5),
                        (M.bounds.min.y += ee * 0.5 - ee * j * 0.5),
                        (M.bounds.max.y += ee * 0.5 - ee * j * 0.5)),
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
                  (i.startViewTransform = function (M) {
                    var z = M.bounds.max.x - M.bounds.min.x,
                      D = M.bounds.max.y - M.bounds.min.y,
                      A = z / M.options.width,
                      N = D / M.options.height;
                    (M.context.setTransform(
                      M.options.pixelRatio / A,
                      0,
                      0,
                      M.options.pixelRatio / N,
                      0,
                      0
                    ),
                      M.context.translate(-M.bounds.min.x, -M.bounds.min.y));
                  }),
                  (i.endViewTransform = function (M) {
                    M.context.setTransform(M.options.pixelRatio, 0, 0, M.options.pixelRatio, 0, 0);
                  }),
                  (i.world = function (M, z) {
                    var D = f.now(),
                      A = M.engine,
                      N = A.world,
                      _ = M.canvas,
                      H = M.context,
                      G = M.options,
                      J = M.timing,
                      te = s.allBodies(N),
                      ee = s.allConstraints(N),
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
                      H.fillRect(0, 0, _.width, _.height),
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
                        (ae && (oe = p.add(ae.position, F.pointA)),
                          le && (ie = p.add(le.position, F.pointB)),
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
                      (J.lastElapsed = f.now() - D));
                  }),
                  (i.stats = function (M, z, D) {
                    for (
                      var A = M.engine,
                        N = A.world,
                        _ = s.allBodies(N),
                        H = 0,
                        G = 55,
                        J = 44,
                        te = 0,
                        ee = 0,
                        q = 0;
                      q < _.length;
                      q += 1
                    )
                      H += _[q].parts.length;
                    var K = {
                      Part: H,
                      Body: _.length,
                      Cons: s.allConstraints(N).length,
                      Comp: s.allComposites(N).length,
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
                  (i.performance = function (M, z) {
                    var D = M.engine,
                      A = M.timing,
                      N = A.deltaHistory,
                      _ = A.elapsedHistory,
                      H = A.timestampElapsedHistory,
                      G = A.engineDeltaHistory,
                      J = A.engineUpdatesHistory,
                      te = A.engineElapsedHistory,
                      ee = D.timing.lastUpdatesPerFrame,
                      q = D.timing.lastDelta,
                      K = E(N),
                      ne = E(_),
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
                        _.length,
                        ne.toFixed(2) + ' rt',
                        1 - ne / i._goodFps,
                        function (Xe) {
                          return _[Xe] / ne - 1;
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
                  (i.status = function (M, z, D, A, N, _, H, G, J) {
                    ((M.strokeStyle = '#888'),
                      (M.fillStyle = '#444'),
                      (M.lineWidth = 1),
                      M.fillRect(z, D + 7, A, 1),
                      M.beginPath(),
                      M.moveTo(z, D + 7 - N * f.clamp(0.4 * J(0), -2, 2)));
                    for (var te = 0; te < A; te += 1)
                      M.lineTo(z + te, D + 7 - (te < _ ? N * f.clamp(0.4 * J(te), -2, 2) : 0));
                    (M.stroke(),
                      (M.fillStyle = 'hsl(' + f.clamp(25 + 95 * G, 0, 120) + ',100%,60%)'),
                      M.fillRect(z, D - 7, 4, 4),
                      (M.font = '12px Arial'),
                      (M.textBaseline = 'middle'),
                      (M.textAlign = 'right'),
                      (M.fillStyle = '#eee'),
                      M.fillText(H, z + A, D - 5));
                  }),
                  (i.constraints = function (M, z) {
                    for (var D = z, A = 0; A < M.length; A++) {
                      var N = M[A];
                      if (!(!N.render.visible || !N.pointA || !N.pointB)) {
                        var _ = N.bodyA,
                          H = N.bodyB,
                          G,
                          J;
                        if (
                          (_ ? (G = p.add(_.position, N.pointA)) : (G = N.pointA),
                          N.render.type === 'pin')
                        )
                          (D.beginPath(), D.arc(G.x, G.y, 3, 0, 2 * Math.PI), D.closePath());
                        else {
                          if (
                            (H ? (J = p.add(H.position, N.pointB)) : (J = N.pointB),
                            D.beginPath(),
                            D.moveTo(G.x, G.y),
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
                                D.lineTo(
                                  G.x + te.x * (ne / q) + ee.x * K * 4,
                                  G.y + te.y * (ne / q) + ee.y * K * 4
                                ));
                          D.lineTo(J.x, J.y);
                        }
                        (N.render.lineWidth &&
                          ((D.lineWidth = N.render.lineWidth),
                          (D.strokeStyle = N.render.strokeStyle),
                          D.stroke()),
                          N.render.anchors &&
                            ((D.fillStyle = N.render.strokeStyle),
                            D.beginPath(),
                            D.arc(G.x, G.y, 3, 0, 2 * Math.PI),
                            D.arc(J.x, J.y, 3, 0, 2 * Math.PI),
                            D.closePath(),
                            D.fill()));
                      }
                    }
                  }),
                  (i.bodies = function (M, z, D) {
                    var A = D;
                    M.engine;
                    var N = M.options,
                      _ = N.showInternalEdges || !N.wireframes,
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
                                  (!G.vertices[K - 1].isInternal || _
                                    ? A.lineTo(G.vertices[K].x, G.vertices[K].y)
                                    : A.moveTo(G.vertices[K].x, G.vertices[K].y),
                                    G.vertices[K].isInternal &&
                                      !_ &&
                                      A.moveTo(
                                        G.vertices[(K + 1) % G.vertices.length].x,
                                        G.vertices[(K + 1) % G.vertices.length].y
                                      ));
                                (A.lineTo(G.vertices[0].x, G.vertices[0].y), A.closePath());
                              }
                              N.wireframes
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
                  (i.bodyWireframes = function (M, z, D) {
                    var A = D,
                      N = M.options.showInternalEdges,
                      _,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((_ = z[G]), !!_.render.visible))
                        for (te = _.parts.length > 1 ? 1 : 0; te < _.parts.length; te++) {
                          for (
                            H = _.parts[te], A.moveTo(H.vertices[0].x, H.vertices[0].y), J = 1;
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
                      (A.strokeStyle = M.options.wireframeStrokeStyle),
                      A.stroke());
                  }),
                  (i.bodyConvexHulls = function (M, z, D) {
                    var A = D,
                      N,
                      _,
                      H;
                    for (A.beginPath(), _ = 0; _ < z.length; _++)
                      if (((N = z[_]), !(!N.render.visible || N.parts.length === 1))) {
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
                  (i.vertexNumbers = function (M, z, D) {
                    var A = D,
                      N,
                      _,
                      H;
                    for (N = 0; N < z.length; N++) {
                      var G = z[N].parts;
                      for (H = G.length > 1 ? 1 : 0; H < G.length; H++) {
                        var J = G[H];
                        for (_ = 0; _ < J.vertices.length; _++)
                          ((A.fillStyle = 'rgba(255,255,255,0.2)'),
                            A.fillText(
                              N + '_' + _,
                              J.position.x + (J.vertices[_].x - J.position.x) * 0.8,
                              J.position.y + (J.vertices[_].y - J.position.y) * 0.8
                            ));
                      }
                    }
                  }),
                  (i.mousePosition = function (M, z, D) {
                    var A = D;
                    ((A.fillStyle = 'rgba(255,255,255,0.8)'),
                      A.fillText(
                        z.position.x + '  ' + z.position.y,
                        z.position.x + 5,
                        z.position.y - 5
                      ));
                  }),
                  (i.bodyBounds = function (M, z, D) {
                    var A = D;
                    M.engine;
                    var N = M.options;
                    A.beginPath();
                    for (var _ = 0; _ < z.length; _++) {
                      var H = z[_];
                      if (H.render.visible)
                        for (var G = z[_].parts, J = G.length > 1 ? 1 : 0; J < G.length; J++) {
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
                  (i.bodyAxes = function (M, z, D) {
                    var A = D;
                    M.engine;
                    var N = M.options,
                      _,
                      H,
                      G,
                      J;
                    for (A.beginPath(), H = 0; H < z.length; H++) {
                      var te = z[H],
                        ee = te.parts;
                      if (te.render.visible)
                        if (N.showAxes)
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (_ = ee[G], J = 0; J < _.axes.length; J++) {
                              var q = _.axes[J];
                              (A.moveTo(_.position.x, _.position.y),
                                A.lineTo(_.position.x + q.x * 20, _.position.y + q.y * 20));
                            }
                        else
                          for (G = ee.length > 1 ? 1 : 0; G < ee.length; G++)
                            for (_ = ee[G], J = 0; J < _.axes.length; J++)
                              (A.moveTo(_.position.x, _.position.y),
                                A.lineTo(
                                  (_.vertices[0].x + _.vertices[_.vertices.length - 1].x) / 2,
                                  (_.vertices[0].y + _.vertices[_.vertices.length - 1].y) / 2
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
                  (i.bodyPositions = function (M, z, D) {
                    var A = D;
                    M.engine;
                    var N = M.options,
                      _,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((_ = z[G]), !!_.render.visible))
                        for (J = 0; J < _.parts.length; J++)
                          ((H = _.parts[J]),
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
                      ((_ = z[G]),
                        _.render.visible &&
                          (A.arc(_.positionPrev.x, _.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                          A.closePath()));
                    ((A.fillStyle = 'rgba(255,165,0,0.8)'), A.fill());
                  }),
                  (i.bodyVelocity = function (M, z, D) {
                    var A = D;
                    A.beginPath();
                    for (var N = 0; N < z.length; N++) {
                      var _ = z[N];
                      if (_.render.visible) {
                        var H = d.getVelocity(_);
                        (A.moveTo(_.position.x, _.position.y),
                          A.lineTo(_.position.x + H.x, _.position.y + H.y));
                      }
                    }
                    ((A.lineWidth = 3), (A.strokeStyle = 'cornflowerblue'), A.stroke());
                  }),
                  (i.bodyIds = function (M, z, D) {
                    var A = D,
                      N,
                      _;
                    for (N = 0; N < z.length; N++)
                      if (z[N].render.visible) {
                        var H = z[N].parts;
                        for (_ = H.length > 1 ? 1 : 0; _ < H.length; _++) {
                          var G = H[_];
                          ((A.font = '12px Arial'),
                            (A.fillStyle = 'rgba(255,255,255,0.5)'),
                            A.fillText(G.id, G.position.x + 10, G.position.y - 10));
                        }
                      }
                  }),
                  (i.collisions = function (M, z, D) {
                    var A = D,
                      N = M.options,
                      _,
                      H,
                      G,
                      J;
                    for (A.beginPath(), G = 0; G < z.length; G++)
                      if (((_ = z[G]), !!_.isActive))
                        for (H = _.collision, J = 0; J < _.contactCount; J++) {
                          var te = _.contacts[J],
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
                      if (((_ = z[G]), !!_.isActive && ((H = _.collision), _.contactCount > 0))) {
                        var q = _.contacts[0].vertex.x,
                          K = _.contacts[0].vertex.y;
                        (_.contactCount === 2 &&
                          ((q = (_.contacts[0].vertex.x + _.contacts[1].vertex.x) / 2),
                          (K = (_.contacts[0].vertex.y + _.contacts[1].vertex.y) / 2)),
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
                  (i.separations = function (M, z, D) {
                    var A = D,
                      N = M.options,
                      _,
                      H,
                      G,
                      J,
                      te;
                    for (A.beginPath(), te = 0; te < z.length; te++)
                      if (((_ = z[te]), !!_.isActive)) {
                        ((H = _.collision), (G = H.bodyA), (J = H.bodyB));
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
                  (i.inspector = function (M, z) {
                    M.engine;
                    var D = M.selected,
                      A = M.render,
                      N = A.options,
                      _;
                    if (N.hasBounds) {
                      var H = A.bounds.max.x - A.bounds.min.x,
                        G = A.bounds.max.y - A.bounds.min.y,
                        J = H / A.options.width,
                        te = G / A.options.height;
                      (z.scale(1 / J, 1 / te), z.translate(-A.bounds.min.x, -A.bounds.min.y));
                    }
                    for (var ee = 0; ee < D.length; ee++) {
                      var q = D[ee].data;
                      switch (
                        (z.translate(0.5, 0.5),
                        (z.lineWidth = 1),
                        (z.strokeStyle = 'rgba(255,165,0,0.9)'),
                        z.setLineDash([1, 2]),
                        q.type)
                      ) {
                        case 'body':
                          ((_ = q.bounds),
                            z.beginPath(),
                            z.rect(
                              Math.floor(_.min.x - 3),
                              Math.floor(_.min.y - 3),
                              Math.floor(_.max.x - _.min.x + 6),
                              Math.floor(_.max.y - _.min.y + 6)
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
                    (M.selectStart !== null &&
                      (z.translate(0.5, 0.5),
                      (z.lineWidth = 1),
                      (z.strokeStyle = 'rgba(255,165,0,0.6)'),
                      (z.fillStyle = 'rgba(255,165,0,0.1)'),
                      (_ = M.selectBounds),
                      z.beginPath(),
                      z.rect(
                        Math.floor(_.min.x),
                        Math.floor(_.min.y),
                        Math.floor(_.max.x - _.min.x),
                        Math.floor(_.max.y - _.min.y)
                      ),
                      z.closePath(),
                      z.stroke(),
                      z.fill(),
                      z.translate(-0.5, -0.5)),
                      N.hasBounds && z.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var v = function (M, z) {
                    var D = M.engine,
                      A = M.timing,
                      N = A.historySize,
                      _ = D.timing.timestamp;
                    ((A.delta = z - A.lastTime || i._goodDelta),
                      (A.lastTime = z),
                      (A.timestampElapsed = _ - A.lastTimestamp || 0),
                      (A.lastTimestamp = _),
                      A.deltaHistory.unshift(A.delta),
                      (A.deltaHistory.length = Math.min(A.deltaHistory.length, N)),
                      A.engineDeltaHistory.unshift(D.timing.lastDelta),
                      (A.engineDeltaHistory.length = Math.min(A.engineDeltaHistory.length, N)),
                      A.timestampElapsedHistory.unshift(A.timestampElapsed),
                      (A.timestampElapsedHistory.length = Math.min(
                        A.timestampElapsedHistory.length,
                        N
                      )),
                      A.engineUpdatesHistory.unshift(D.timing.lastUpdatesPerFrame),
                      (A.engineUpdatesHistory.length = Math.min(A.engineUpdatesHistory.length, N)),
                      A.engineElapsedHistory.unshift(D.timing.lastElapsed),
                      (A.engineElapsedHistory.length = Math.min(A.engineElapsedHistory.length, N)),
                      A.elapsedHistory.unshift(A.lastElapsed),
                      (A.elapsedHistory.length = Math.min(A.elapsedHistory.length, N)));
                  },
                  E = function (M) {
                    for (var z = 0, D = 0; D < M.length; D += 1) z += M[D];
                    return z / M.length || 0;
                  },
                  R = function (M, z) {
                    var D = document.createElement('canvas');
                    return (
                      (D.width = M),
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
                  O = function (M) {
                    var z = M.getContext('2d'),
                      D = window.devicePixelRatio || 1,
                      A =
                        z.webkitBackingStorePixelRatio ||
                        z.mozBackingStorePixelRatio ||
                        z.msBackingStorePixelRatio ||
                        z.oBackingStorePixelRatio ||
                        z.backingStorePixelRatio ||
                        1;
                    return D / A;
                  },
                  w = function (M, z) {
                    var D = M.textures[z];
                    return D || ((D = M.textures[z] = new Image()), (D.src = z), D);
                  },
                  L = function (M, z) {
                    var D = z;
                    (/(jpg|gif|png)$/.test(z) && (D = 'url(' + z + ')'),
                      (M.canvas.style.background = D),
                      (M.canvas.style.backgroundSize = 'contain'),
                      (M.currentBackground = z));
                  };
              })();
            },
            function (T, x, h) {
              var i = {};
              T.exports = i;
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
                      g = s.extend(p, o);
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
                    var r = s.now(),
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
                      (o.timeBuffer = s.clamp(
                        o.timeBuffer,
                        0,
                        o.frameDelta + y * i._timeBufferMargin
                      )),
                      (o.lastUpdatesDeferred = 0));
                    var L = o.maxUpdates || Math.ceil(o.maxFrameTime / y),
                      M = { timestamp: p.timing.timestamp };
                    (d.trigger(o, 'beforeTick', M), d.trigger(o, 'tick', M));
                    for (var z = s.now(); y > 0 && o.timeBuffer >= y * i._timeBufferMargin; ) {
                      (d.trigger(o, 'beforeUpdate', M),
                        f.update(p, y),
                        d.trigger(o, 'afterUpdate', M),
                        (o.timeBuffer -= y),
                        (v += 1));
                      var D = s.now() - r,
                        A = s.now() - z,
                        N = D + (i._elapsedNextEstimate * A) / v;
                      if (v >= L || N > o.maxFrameTime) {
                        o.lastUpdatesDeferred = Math.round(
                          Math.max(0, o.timeBuffer / y - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    ((p.timing.lastUpdatesPerFrame = v),
                      d.trigger(o, 'afterTick', M),
                      o.frameDeltaHistory.length >= 100 &&
                        (o.lastUpdatesDeferred && Math.round(o.frameDelta / y) > L
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
                s = f.deprecated;
              (function () {
                ((i.collides = function (m, o) {
                  return d.collides(m, o);
                }),
                  s(i, 'collides', 'SAT.collides ➤ replaced by Collision.collides'));
              })();
            },
            function (T, x, h) {
              var i = {};
              ((T.exports = i), h(1));
              var d = h(0);
              (function () {
                ((i.pathToVertices = function (f, s) {
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
                    M,
                    z = 0,
                    D = 0,
                    A = 0;
                  s = s || 15;
                  var N = function (H, G, J) {
                      var te = J % 2 === 1 && J > 1;
                      if (!R || H != R.x || G != R.y) {
                        R && te ? ((L = R.x), (M = R.y)) : ((L = 0), (M = 0));
                        var ee = { x: L + H, y: M + G };
                        ((te || !R) && (R = ee), w.push(ee), (D = L + H), (A = M + G));
                      }
                    },
                    _ = function (H) {
                      var G = H.pathSegTypeAsLetter.toUpperCase();
                      if (G !== 'Z') {
                        switch (G) {
                          case 'M':
                          case 'L':
                          case 'T':
                          case 'C':
                          case 'S':
                          case 'Q':
                            ((D = H.x), (A = H.y));
                            break;
                          case 'H':
                            D = H.x;
                            break;
                          case 'V':
                            A = H.y;
                            break;
                        }
                        N(D, A, H.pathSegType);
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
                      for (; v.length && v[0] != r; ) _(v.shift());
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
                    z += s;
                  }
                  for (m = 0, o = v.length; m < o; ++m) _(v[m]);
                  return w;
                }),
                  (i._svgPathToAbsolute = function (f) {
                    for (
                      var s,
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
                            ((v = s), (E = m));
                            break;
                        }
                      (L == 'M' || L == 'm') && ((s = v), (m = E));
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
      })(Ju)),
    Ju.exports
  );
}
var z1 = A1();
const Be = ag(z1),
  an = {
    dropCooldownMs: 500,
    maxScoreHistory: 10,
    storageKeys: {
      bestScore: 'ochimono.bestScore',
      scoreHistory: 'ochimono.scoreHistory',
      isSoundOn: 'ochimono.isSoundOn',
      themeId: 'ochimono.themeId',
    },
  },
  D1 = { 1: 20, 2: 26, 3: 32, 4: 38, 5: 45, 6: 52, 7: 60, 8: 68, 9: 76, 10: 86 },
  O1 = { 1: 0.5, 2: 0.5, 3: 0.45, 4: 0.45, 5: 0.4, 6: 0.4, 7: 0.35, 8: 0.35, 9: 0.3, 10: 0.25 },
  _1 = {
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
  w1 = {
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
  Vh = (c, b) => {
    const T = String(b).padStart(2, '0');
    return `images/${c}/level${T}.png`;
  },
  N1 = 256,
  lh = {
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
  B1 = (c) => (c * (c + 1)) / 2,
  U1 = (c) => ({
    id: c,
    level: c,
    name: _1[c],
    theme: w1[c],
    radius: D1[c],
    restitution: O1[c],
    friction: 0.3,
    density: 0.001,
    score: B1(c),
    svgPath: Vh(Yc, c),
    color: lh[c].color,
    glowColor: lh[c].glow,
  }),
  Ua = 10,
  Pu = Object.fromEntries(Array.from({ length: Ua }, (c, b) => b + 1).map((c) => [c, U1(c)]));
Array.from({ length: Ua }, (c, b) => Pu[b + 1]);
const H1 = 3,
  L1 = 360,
  j1 = (c) => Math.min(1, c / L1),
  ih = new Map(),
  Rl = (c, b, T = Yc) => {
    const x = `${c}|${b}|${T}`,
      h = ih.get(x);
    if (h) return h;
    const i = Pu[c],
      d = { ...i, radius: i.radius * j1(b), svgPath: Vh(T, c) };
    return (ih.set(x, d), d);
  },
  Hn = {
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
  G1 = (c) => c,
  Xh = typeof window < 'u' && typeof window.localStorage < 'u',
  Iu = (c) => {
    if (!Xh) return null;
    try {
      return window.localStorage.getItem(c);
    } catch {
      return null;
    }
  },
  er = (c, b) => {
    if (Xh)
      try {
        window.localStorage.setItem(c, b);
      } catch {}
  },
  Y1 = () => {
    const c = Iu(an.storageKeys.bestScore);
    if (c === null) return 0;
    const b = Number(c);
    return Number.isFinite(b) ? b : 0;
  },
  q1 = (c) => {
    er(an.storageKeys.bestScore, String(c));
  },
  V1 = () => {
    const c = Iu(an.storageKeys.scoreHistory);
    if (c === null) return [];
    try {
      const b = JSON.parse(c);
      return Array.isArray(b) ? b.filter((T) => typeof T == 'number' && Number.isFinite(T)) : [];
    } catch {
      return [];
    }
  },
  X1 = (c) => {
    const b = [c, ...V1()].slice(0, an.maxScoreHistory);
    return (er(an.storageKeys.scoreHistory, JSON.stringify(b)), b);
  },
  Q1 = () => {
    const c = Iu(an.storageKeys.isSoundOn);
    return c === null ? !0 : c === 'true';
  },
  Z1 = (c) => {
    er(an.storageKeys.isSoundOn, String(c));
  },
  K1 = () => {
    const c = Iu(an.storageKeys.themeId);
    return Yh(c) ? c : Yc;
  },
  J1 = (c) => {
    er(an.storageKeys.themeId, c);
  },
  k1 = () => {
    const [c, b] = B.useState(0),
      [T, x] = B.useState(0),
      [h, i] = B.useState(!1),
      d = B.useRef(0),
      f = B.useRef(0);
    B.useEffect(() => {
      const p = Y1();
      ((f.current = p), x(p));
    }, []);
    const s = B.useCallback((p) => {
        ((d.current += p), b(d.current));
      }, []),
      m = B.useCallback(() => {
        ((d.current = 0), b(0), i(!1));
      }, []),
      o = B.useCallback(() => {
        const p = d.current,
          g = p > f.current;
        return (
          g && ((f.current = p), q1(p), x(p)),
          X1(p),
          i(g),
          { isNewRecord: g, finalScore: p }
        );
      }, []);
    return { score: c, bestScore: T, isNewRecord: h, add: s, reset: m, finalize: o };
  },
  F1 = (c) => `/ochimono-game/${c}`.replace(/\/{2,}/g, '/'),
  $1 = { merge: 'sounds/punyu.mp3', special: 'sounds/punyu.mp3' },
  W1 = 0.7,
  P1 = () => {
    if (typeof window > 'u') return null;
    const c = window;
    return c.AudioContext ?? c.webkitAudioContext ?? null;
  },
  I1 = () => {
    const [c, b] = B.useState(!0),
      T = B.useRef(null),
      x = B.useRef({});
    (B.useEffect(() => {
      b(Q1());
    }, []),
      B.useEffect(() => {
        const d = P1();
        if (!d) return;
        const f = new d();
        T.current = f;
        let s = !1;
        const m = {};
        return (
          (async () => {
            for (const [o, p] of Object.entries($1))
              try {
                const r = await (await fetch(F1(p))).arrayBuffer();
                if (s) return;
                const y = await f.decodeAudioData(r);
                if (s) return;
                m[o] = y;
              } catch {}
            x.current = m;
          })(),
          () => {
            ((s = !0), f.close().catch(() => {}), (T.current = null), (x.current = {}));
          }
        );
      }, []));
    const h = B.useCallback(() => {
        b((d) => {
          const f = !d;
          return (Z1(f), f);
        });
      }, []),
      i = B.useCallback(
        (d) => {
          if (!c) return;
          const f = T.current,
            s = x.current[d];
          if (!f || !s) return;
          f.state === 'suspended' && f.resume().catch(() => {});
          const m = f.createBufferSource();
          m.buffer = s;
          const o = f.createGain();
          ((o.gain.value = W1), m.connect(o).connect(f.destination), m.start(0));
        },
        [c]
      );
    return { isSoundOn: c, toggle: h, play: i };
  },
  uh = (c, b, T, x) => {
    const h = Be.Bodies.circle(b, T, c.radius, {
      restitution: c.restitution,
      friction: c.friction,
      density: c.density,
      label: `item-${c.level}`,
    });
    return ((h.plugin.itemData = { level: c.level, consumed: !1, droppedAt: x }), h);
  },
  da = (c) => c.plugin.itemData,
  eS = (c, b) => {
    const T = Hn.wallThickness,
      x = { isStatic: !0, restitution: 0.2, friction: 0.5, label: 'wall' },
      h = Be.Bodies.rectangle(c / 2, b + T / 2, c + T * 2, T, x),
      i = Be.Bodies.rectangle(-T / 2, b / 2, T, b * 2, x),
      d = Be.Bodies.rectangle(c + T / 2, b / 2, T, b * 2, x);
    return { ground: h, leftWall: i, rightWall: d };
  },
  tS = (c, b) => ({ x: (c.position.x + b.position.x) / 2, y: (c.position.y + b.position.y) / 2 }),
  nS = (c) => (c < 2 || c > Ua ? 0 : Pu[c].score),
  aS = () => Pu[Ua].score,
  rh = new Map(),
  Qh = (c) => {
    const b = rh.get(c);
    if (b) return b;
    const T = `/ochimono-game/${c}`.replace(/\/{2,}/g, '/');
    return (rh.set(c, T), T);
  },
  Cc = (c, b) => {
    const T = (b.radius * 2) / N1;
    c.render.sprite = { texture: Qh(b.svgPath), xScale: T, yScale: T, xOffset: 0.5, yOffset: 0.5 };
  },
  sh = new Set(),
  ch = (c) => {
    for (let b = 1; b <= Ua; b += 1) {
      const T = Rl(b, 1, c),
        x = Qh(T.svgPath);
      if (sh.has(x)) continue;
      sh.add(x);
      const h = new Image();
      h.src = x;
    }
  },
  lS = ({ fieldWidth: c, fieldHeight: b }) => {
    const T = B.useRef(null),
      x = B.useRef(null),
      h = B.useRef(null),
      i = B.useRef(null),
      d = B.useRef(null),
      [f, s] = B.useState('idle'),
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
      O = B.useRef(0),
      w = B.useRef('idle'),
      L = B.useRef(null),
      M = B.useRef(c),
      z = B.useRef(b),
      [D, A] = B.useState(() => K1()),
      N = B.useRef(D);
    N.current = D;
    const _ = k1(),
      H = I1(),
      G = B.useRef(_.add);
    G.current = _.add;
    const J = B.useRef(H.play);
    J.current = H.play;
    const te = B.useRef(_.finalize);
    te.current = _.finalize;
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
      [Ha, Dt] = B.useState(null),
      Pt = B.useRef(null),
      it = B.useRef(new Set()),
      ln = B.useCallback(() => {
        const ue = Math.floor(Math.random() * H1) + 1;
        return Rl(ue, M.current, N.current);
      }, []);
    B.useEffect(() => {
      const ue = T.current;
      if (!ue) return;
      const ve = M.current,
        _e = z.current,
        Ae = Be.Engine.create({ gravity: { x: 0, y: Hn.gravityY } }),
        Me = Be.Render.create({
          element: ue,
          engine: Ae,
          options: {
            width: ve,
            height: _e,
            wireframes: !1,
            background: 'transparent',
            pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
          },
        }),
        { ground: Ge, leftWall: Ke, rightWall: Je } = eS(ve, _e);
      ([Ge, Ke, Je].forEach((xt) => {
        xt.render.visible = !1;
      }),
        Be.World.add(Ae.world, [Ge, Ke, Je]),
        Be.Render.run(Me));
      const Ye = Be.Runner.create();
      (Be.Runner.run(Ye, Ae), (x.current = Ae), (h.current = Me), (i.current = Ye));
      for (const xt of Gc) ch(xt.id);
      const rt = () => {
        document.hidden
          ? (Be.Runner.stop(Ye), Be.Render.stop(Me))
          : (Be.Render.run(Me), Be.Runner.run(Ye, Ae));
      };
      document.addEventListener('visibilitychange', rt);
      const Fe = it.current;
      return () => {
        (document.removeEventListener('visibilitychange', rt),
          Be.Runner.stop(Ye),
          Be.Render.stop(Me),
          Be.World.clear(Ae.world, !1),
          Be.Engine.clear(Ae),
          Me.canvas.parentNode && Me.canvas.parentNode.removeChild(Me.canvas),
          (Me.textures = {}),
          (x.current = null),
          (h.current = null),
          (i.current = null),
          Fe.clear());
      };
    }, []);
    const hn = B.useCallback((ue, ve) => {
      var Fe;
      const _e = x.current;
      if (!_e) return;
      const Ae = da(ue),
        Me = da(ve);
      if (!Ae || !Me || Ae.consumed || Me.consumed || Ae.level !== Me.level) return;
      ((Ae.consumed = !0), (Me.consumed = !0));
      const Ge = Ae.level + 1,
        Ke = tS(ue, ve);
      (Be.World.remove(_e.world, [ue, ve]), it.current.delete(ue), it.current.delete(ve));
      let Je = 0,
        Ye = !1,
        rt = G1(Ge);
      if (Ge > Ua)
        ((Je = aS()), (Ye = !0), (rt += $t.bonusOnSpecialElimination), J.current('special'));
      else {
        const xt = Rl(Ge, M.current, N.current),
          _t = uh(xt, Ke.x, Ke.y, performance.now());
        (Cc(_t, xt),
          Be.World.add(_e.world, _t),
          it.current.add(_t),
          (Je = nS(Ge)),
          (Ye = Ge === Ua),
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
      const ve = (_e) => {
        for (const Ae of _e.pairs) hn(Ae.bodyA, Ae.bodyB);
      };
      return (
        Be.Events.on(ue, 'collisionStart', ve),
        () => {
          Be.Events.off(ue, 'collisionStart', ve);
        }
      );
    }, [hn]),
      B.useEffect(() => {
        const ue = x.current;
        if (!ue) return;
        const ve = Hn.gameOverLineOffset;
        let _e = 0;
        const Ae = () => {
            ((Xe.current = null), Pt.current !== null && ((Pt.current = null), Dt(null)));
          },
          Me = () => {
            if (Ze.current !== null)
              if (performance.now() >= Ze.current)
                ((Ze.current = null), (Pe.current = null), (ye.current = null));
              else {
                const xt = Pe.current;
                if (xt !== null) {
                  const _t = [];
                  for (const rn of it.current) {
                    const wt = da(rn);
                    wt && !wt.consumed && wt.level === xt && _t.push(rn);
                  }
                  if (_t.length >= 2) {
                    let rn = 0,
                      wt = 0;
                    for (const sn of _t) ((rn += sn.position.x), (wt += sn.position.y));
                    ((rn /= _t.length), (wt /= _t.length));
                    for (const sn of _t) {
                      const Ol = rn - sn.position.x,
                        _l = wt - sn.position.y,
                        Ga = Math.hypot(Ol, _l);
                      if (Ga < 1) continue;
                      const Ya = $t.magnet.forceMagnitude * sn.mass;
                      Be.Body.applyForce(sn, sn.position, { x: (Ol / Ga) * Ya, y: (_l / Ga) * Ya });
                    }
                  } else ((Ze.current = null), (Pe.current = null), (ye.current = null));
                }
              }
            if (w.current !== 'playing' || ((_e = (_e + 1) % 6), _e !== 0)) return;
            const Ge = performance.now();
            let Ke = !1;
            for (const Fe of it.current) {
              const xt = da(Fe);
              if (
                !(!xt || xt.consumed) &&
                !(Ge - xt.droppedAt < Hn.gameOverGracePeriodMs) &&
                !(Math.abs(Fe.velocity.y) > Hn.restingVelocityThreshold) &&
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
              Ye = Hn.gameOverDangerLimitMs;
            if (Je >= Ye) {
              (Ae(), (w.current = 'gameover'), s('gameover'));
              const Fe = te.current();
              J.current(Fe.isNewRecord ? 'highscore' : 'gameover');
              return;
            }
            const rt = Math.max(1, Math.ceil((Ye - Je) / 1e3));
            rt !== Pt.current && ((Pt.current = rt), Dt(rt));
          };
        return (
          Be.Events.on(ue, 'afterUpdate', Me),
          () => {
            Be.Events.off(ue, 'afterUpdate', Me);
          }
        );
      }, []),
      B.useEffect(() => {
        if (x.current) {
          ch(D);
          for (const Ae of it.current) {
            const Me = da(Ae);
            if (!Me || Me.consumed) continue;
            const Ge = Rl(Me.level, M.current, D);
            Cc(Ae, Ge);
          }
        }
        const ve = r.current ? Rl(r.current.level, M.current, D) : null,
          _e = y.current ? Rl(y.current.level, M.current, D) : null;
        (v(ve), E(_e));
      }, [D, v, E]));
    const yt = B.useCallback((ue) => {
        (A(ue), J1(ue));
      }, []),
      pt = B.useCallback((ue) => {
        ((oe.current = ue), le(ue));
      }, []),
      Ot = B.useCallback(() => {
        ne(0);
      }, [ne]),
      ma = B.useCallback(() => {
        if (!x.current) return;
        ye.current = 'shake';
        const { impulseMin: ve, impulseMax: _e, upwardBias: Ae } = $t.shake;
        for (const Me of it.current) {
          const Ge = da(Me);
          if (!Ge || Ge.consumed) continue;
          const Ke = Math.random() * Math.PI * 2,
            Je = ve + Math.random() * (_e - ve),
            Ye = Math.cos(Ke) * Je * Me.mass,
            rt = (Math.sin(Ke) * Je - Ae) * Me.mass;
          Be.Body.applyForce(Me, Me.position, { x: Ye, y: rt });
        }
        (J.current('special'), (ye.current = null));
      }, []),
      ha = B.useCallback(() => {
        const ue = x.current;
        if (!ue || Re.current !== null) return;
        ye.current = 'gravityFlip';
        const ve = ue.gravity.y;
        ((ue.gravity.y = ve * $t.gravityFlip.multiplier),
          he(!0),
          J.current('special'),
          (Re.current = window.setTimeout(() => {
            const _e = x.current;
            (_e && (_e.gravity.y = ve),
              he(!1),
              (Re.current = null),
              ye.current === 'gravityFlip' && (ye.current = null));
          }, $t.gravityFlip.durationMs)));
      }, []),
      ut = B.useCallback(() => {
        ((ye.current = 'magnet'), pt(!0));
      }, [pt]),
      La = B.useCallback(() => {
        oe.current && (pt(!1), (ye.current = null));
      }, [pt]),
      vn = B.useCallback(
        (ue, ve) => {
          if (!oe.current) return;
          const _e = Array.from(it.current),
            Ae = Be.Query.point(_e, { x: ue, y: ve });
          if (Ae.length === 0) return;
          const Me = da(Ae[0]);
          !Me ||
            _e.filter((Ke) => {
              var Je;
              return ((Je = da(Ke)) == null ? void 0 : Je.level) === Me.level;
            }).length < 2 ||
            ((Pe.current = Me.level),
            (Ze.current = performance.now() + $t.magnet.durationMs),
            pt(!1),
            J.current('special'),
            Ot());
        },
        [Ot, pt]
      ),
      ja = B.useCallback(() => {
        K.current < $t.gaugeMax || (w.current === 'playing' && F(!0));
      }, []),
      Yn = B.useCallback(() => {
        F(!1);
      }, []),
      qn = B.useCallback(
        (ue) => {
          K.current < $t.gaugeMax ||
            (F(!1),
            ue === 'shake'
              ? (ma(), Ot())
              : ue === 'gravityFlip'
                ? (ha(), Ot())
                : ue === 'magnet' && ut());
        },
        [ma, ha, ut, Ot]
      ),
      un = B.useCallback(() => {
        Re.current !== null && (window.clearTimeout(Re.current), (Re.current = null));
        const ue = x.current;
        (ue && (ue.gravity.y = Hn.gravityY),
          he(!1),
          (Ze.current = null),
          (Pe.current = null),
          (ye.current = null),
          F(!1),
          pt(!1),
          ne(0));
      }, [pt, ne]),
      tr = B.useCallback(
        (ue) => {
          const ve = x.current;
          if (!ve || w.current !== 'playing' || !R.current) return;
          const _e = r.current;
          if (!_e) return;
          const Ae = performance.now();
          if (Ae - O.current < an.dropCooldownMs) return;
          const Me = Math.max(0, Math.min(1, ue)),
            Ge = _e.radius + Hn.wallThickness / 2,
            Ke = Ge,
            Je = M.current - Ge,
            Ye = Ke + Me * (Je - Ke),
            rt = _e.radius + 4,
            Fe = uh(_e, Ye, rt, Ae);
          (Cc(Fe, _e),
            Be.World.add(ve.world, Fe),
            it.current.add(Fe),
            J.current('drop'),
            (R.current = !1),
            (O.current = Ae),
            L.current !== null && window.clearTimeout(L.current),
            (L.current = window.setTimeout(() => {
              ((L.current = null),
                w.current === 'playing' && (v(y.current), E(ln()), (R.current = !0)));
            }, an.dropCooldownMs)));
        },
        [ln, v, E]
      ),
      Dl = B.useCallback(() => {
        var ue;
        (_.reset(),
          (ue = d.current) == null || ue.clear(),
          un(),
          (Xe.current = null),
          (Pt.current = null),
          Dt(null),
          v(ln()),
          E(ln()),
          (R.current = !0),
          (O.current = 0),
          (w.current = 'playing'),
          s('playing'));
      }, [_, ln, un, v, E]),
      va = B.useCallback(() => {
        const ue = x.current;
        if (ue) {
          for (const ve of it.current) Be.World.remove(ue.world, ve);
          it.current.clear();
        }
        (L.current !== null && (window.clearTimeout(L.current), (L.current = null)), Dl());
      }, [Dl]),
      St = Hn.gameOverLineOffset;
    return {
      status: f,
      score: _.score,
      bestScore: _.bestScore,
      isNewRecord: _.isNewRecord,
      currentItem: m,
      nextItem: p,
      isSoundOn: H.isSoundOn,
      themeId: D,
      mergeEffectRef: d,
      canvasContainerRef: T,
      drop: tr,
      start: Dl,
      restart: va,
      toggleSound: H.toggle,
      setThemeId: yt,
      fieldWidth: c,
      fieldHeight: b,
      gameOverLineY: St,
      skillGauge: ee,
      skillGaugeMax: $t.gaugeMax,
      isSkillReady: ee >= $t.gaugeMax,
      isSkillMenuOpen: j,
      openSkillMenu: ja,
      closeSkillMenu: Yn,
      selectSkill: qn,
      isMagnetSelecting: ae,
      cancelMagnetSelecting: La,
      selectMagnetTarget: vn,
      isGravityFlipped: ie,
      gameOverCountdown: Ha,
    };
  },
  iS = ({ size: c }) => {
    const b = lS({ fieldWidth: c.width, fieldHeight: c.height });
    return I.jsxs(I.Fragment, {
      children: [
        I.jsx(C1, {
          score: b.score,
          bestScore: b.bestScore,
          nextItem: b.nextItem,
          isSoundOn: b.isSoundOn,
          onToggleSound: b.toggleSound,
          themeId: b.themeId,
          onChangeTheme: b.setThemeId,
        }),
        I.jsx('main', {
          className: Ba.main,
          children: I.jsxs('div', {
            className: Ba.field_wrapper,
            style: { width: `${c.width}px`, height: `${c.height}px` },
            children: [
              I.jsx(xp, {
                canvasContainerRef: b.canvasContainerRef,
                fieldWidth: c.width,
                fieldHeight: c.height,
                gameOverLineY: b.gameOverLineY,
                currentItem: b.currentItem,
                mergeEffectRef: b.mergeEffectRef,
                canInteract: b.status === 'playing',
                onDrop: b.drop,
                isMagnetSelecting: b.isMagnetSelecting,
                onMagnetSelect: b.selectMagnetTarget,
              }),
              I.jsx(Bh, { effect: b.isGravityFlipped ? 'gravityFlip' : null }),
              I.jsx(Nh, { active: b.isMagnetSelecting, onCancel: b.cancelMagnetSelecting }),
              I.jsx(wh, { seconds: b.status === 'playing' ? b.gameOverCountdown : null }),
              b.status === 'playing'
                ? I.jsx('div', {
                    className: Ba.skill_button_wrapper,
                    children: I.jsx(Uh, {
                      ratio: b.skillGauge / b.skillGaugeMax,
                      isReady: b.isSkillReady,
                      onClick: b.openSkillMenu,
                    }),
                  })
                : null,
              b.status === 'idle' ? I.jsx(Qp, { onStart: b.start }) : null,
              b.status === 'gameover'
                ? I.jsx(_p, {
                    score: b.score,
                    bestScore: b.bestScore,
                    isNewRecord: b.isNewRecord,
                    onRestart: b.restart,
                  })
                : null,
            ],
          }),
        }),
        I.jsx(Hh, { open: b.isSkillMenuOpen, onSelect: b.selectSkill, onClose: b.closeSkillMenu }),
      ],
    });
  },
  uS = () => {
    const c = B.useRef(null),
      [b, T] = B.useState(null);
    return (
      B.useLayoutEffect(() => {
        const x = c.current;
        if (!x) return;
        const h = x.getBoundingClientRect();
        T({ width: Math.floor(h.width), height: Math.floor(h.height) });
      }, []),
      b === null
        ? I.jsxs('div', {
            className: Ba.layout,
            children: [
              I.jsx('div', { className: Ba.top_bar_placeholder, 'aria-hidden': 'true' }),
              I.jsx('main', { ref: c, className: Ba.main }),
            ],
          })
        : I.jsx('div', { className: Ba.layout, children: I.jsx(iS, { size: b }) })
    );
  },
  rS = () => I.jsx('div', { className: tp.index, children: I.jsx(uS, {}) }),
  sS = () => I.jsx('div', { children: I.jsx('h1', { children: 'Not Found' }) });
function cS() {
  return I.jsxs(I.Fragment, {
    children: [
      I.jsxs(fy, {
        children: [
          I.jsx(Ac, { path: '/', element: I.jsx(rS, {}) }),
          I.jsx(Ac, { path: '*', element: I.jsx(sS, {}) }),
        ],
      }),
      I.jsx(Iy, {}),
    ],
  });
}
const Zh = document.getElementById('root');
if (!Zh) throw new Error('Failed to find #root element');
mg.createRoot(Zh).render(I.jsx(Uy, { basename: '/ochimono-game', children: I.jsx(cS, {}) }));
