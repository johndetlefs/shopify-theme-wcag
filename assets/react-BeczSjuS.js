var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_react_003 = __commonJS({
  "react-BeczSjuS.js"(exports, module) {
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      (function(c, x) {
        "object" === typeof exports && "undefined" !== typeof module ? x(exports) : "function" === typeof define && define.amd ? define(["exports"], x) : (c = c || self, x(c.React = {}));
      })(this, function(c) {
        function x(a) {
          if (null === a || "object" !== typeof a) return null;
          a = V && a[V] || a["@@iterator"];
          return "function" === typeof a ? a : null;
        }
        function w(a, b, e) {
          this.props = a;
          this.context = b;
          this.refs = W;
          this.updater = e || X;
        }
        function Y() {
        }
        function K(a, b, e) {
          this.props = a;
          this.context = b;
          this.refs = W;
          this.updater = e || X;
        }
        function Z(a, b, e) {
          var m, d = {}, c2 = null, h = null;
          if (null != b) for (m in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (c2 = "" + b.key), b) aa.call(b, m) && !ba.hasOwnProperty(m) && (d[m] = b[m]);
          var l = arguments.length - 2;
          if (1 === l) d.children = e;
          else if (1 < l) {
            for (var f = Array(l), k2 = 0; k2 < l; k2++) f[k2] = arguments[k2 + 2];
            d.children = f;
          }
          if (a && a.defaultProps) for (m in l = a.defaultProps, l) void 0 === d[m] && (d[m] = l[m]);
          return { $$typeof: y, type: a, key: c2, ref: h, props: d, _owner: L.current };
        }
        function oa(a, b) {
          return { $$typeof: y, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
        }
        function M(a) {
          return "object" === typeof a && null !== a && a.$$typeof === y;
        }
        function pa(a) {
          var b = { "=": "=0", ":": "=2" };
          return "$" + a.replace(/[=:]/g, function(a2) {
            return b[a2];
          });
        }
        function N(a, b) {
          return "object" === typeof a && null !== a && null != a.key ? pa("" + a.key) : b.toString(36);
        }
        function B(a, b, e, m, d) {
          var c2 = typeof a;
          if ("undefined" === c2 || "boolean" === c2) a = null;
          var h = false;
          if (null === a) h = true;
          else switch (c2) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case y:
                case qa:
                  h = true;
              }
          }
          if (h) return h = a, d = d(h), a = "" === m ? "." + N(h, 0) : m, ca(d) ? (e = "", null != a && (e = a.replace(da, "$&/") + "/"), B(d, b, e, "", function(a2) {
            return a2;
          })) : null != d && (M(d) && (d = oa(d, e + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(da, "$&/") + "/") + a)), b.push(d)), 1;
          h = 0;
          m = "" === m ? "." : m + ":";
          if (ca(a)) for (var l = 0; l < a.length; l++) {
            c2 = a[l];
            var f = m + N(c2, l);
            h += B(c2, b, e, f, d);
          }
          else if (f = x(a), "function" === typeof f) for (a = f.call(a), l = 0; !(c2 = a.next()).done; ) c2 = c2.value, f = m + N(c2, l++), h += B(c2, b, e, f, d);
          else if ("object" === c2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
          return h;
        }
        function C(a, b, e) {
          if (null == a) return a;
          var c2 = [], d = 0;
          B(a, c2, "", "", function(a2) {
            return b.call(e, a2, d++);
          });
          return c2;
        }
        function ra(a) {
          if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(function(b2) {
              if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
            }, function(b2) {
              if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
            });
            -1 === a._status && (a._status = 0, a._result = b);
          }
          if (1 === a._status) return a._result.default;
          throw a._result;
        }
        function O(a, b) {
          var e = a.length;
          a.push(b);
          a: for (; 0 < e; ) {
            var c2 = e - 1 >>> 1, d = a[c2];
            if (0 < D(d, b)) a[c2] = b, a[e] = d, e = c2;
            else break a;
          }
        }
        function p(a) {
          return 0 === a.length ? null : a[0];
        }
        function E(a) {
          if (0 === a.length) return null;
          var b = a[0], e = a.pop();
          if (e !== b) {
            a[0] = e;
            a: for (var c2 = 0, d = a.length, k2 = d >>> 1; c2 < k2; ) {
              var h = 2 * (c2 + 1) - 1, l = a[h], f = h + 1, g2 = a[f];
              if (0 > D(l, e)) f < d && 0 > D(g2, l) ? (a[c2] = g2, a[f] = e, c2 = f) : (a[c2] = l, a[h] = e, c2 = h);
              else if (f < d && 0 > D(g2, e)) a[c2] = g2, a[f] = e, c2 = f;
              else break a;
            }
          }
          return b;
        }
        function D(a, b) {
          var c2 = a.sortIndex - b.sortIndex;
          return 0 !== c2 ? c2 : a.id - b.id;
        }
        function P(a) {
          for (var b = p(r); null !== b; ) {
            if (null === b.callback) E(r);
            else if (b.startTime <= a) E(r), b.sortIndex = b.expirationTime, O(q, b);
            else break;
            b = p(r);
          }
        }
        function Q(a) {
          z = false;
          P(a);
          if (!u) if (null !== p(q)) u = true, R(S);
          else {
            var b = p(r);
            null !== b && T(Q, b.startTime - a);
          }
        }
        function S(a, b) {
          u = false;
          z && (z = false, ea(A), A = -1);
          F = true;
          var c2 = k;
          try {
            P(b);
            for (n = p(q); null !== n && (!(n.expirationTime > b) || a && !fa()); ) {
              var m = n.callback;
              if ("function" === typeof m) {
                n.callback = null;
                k = n.priorityLevel;
                var d = m(n.expirationTime <= b);
                b = v();
                "function" === typeof d ? n.callback = d : n === p(q) && E(q);
                P(b);
              } else E(q);
              n = p(q);
            }
            if (null !== n) var g2 = true;
            else {
              var h = p(r);
              null !== h && T(Q, h.startTime - b);
              g2 = false;
            }
            return g2;
          } finally {
            n = null, k = c2, F = false;
          }
        }
        function fa() {
          return v() - ha < ia ? false : true;
        }
        function R(a) {
          G = a;
          H || (H = true, I());
        }
        function T(a, b) {
          A = ja(function() {
            a(v());
          }, b);
        }
        function ka(a) {
          throw Error("act(...) is not supported in production builds of React.");
        }
        var y = Symbol.for("react.element"), qa = Symbol.for("react.portal"), sa = Symbol.for("react.fragment"), ta = Symbol.for("react.strict_mode"), ua = Symbol.for("react.profiler"), va = Symbol.for("react.provider"), wa = Symbol.for("react.context"), xa = Symbol.for("react.forward_ref"), ya = Symbol.for("react.suspense"), za = Symbol.for("react.memo"), Aa = Symbol.for("react.lazy"), V = Symbol.iterator, X = { isMounted: function(a) {
          return false;
        }, enqueueForceUpdate: function(a, b, c2) {
        }, enqueueReplaceState: function(a, b, c2, m) {
        }, enqueueSetState: function(a, b, c2, m) {
        } }, la = Object.assign, W = {};
        w.prototype.isReactComponent = {};
        w.prototype.setState = function(a, b) {
          if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, a, b, "setState");
        };
        w.prototype.forceUpdate = function(a) {
          this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        Y.prototype = w.prototype;
        var t = K.prototype = new Y();
        t.constructor = K;
        la(t, w.prototype);
        t.isPureReactComponent = true;
        var ca = Array.isArray, aa = Object.prototype.hasOwnProperty, L = { current: null }, ba = { key: true, ref: true, __self: true, __source: true }, da = /\/+/g, g = { current: null }, J = { transition: null };
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var Ba = performance;
          var v = function() {
            return Ba.now();
          };
        } else {
          var ma = Date, Ca = ma.now();
          v = function() {
            return ma.now() - Ca;
          };
        }
        var q = [], r = [], Da = 1, n = null, k = 3, F = false, u = false, z = false, ja = "function" === typeof setTimeout ? setTimeout : null, ea = "function" === typeof clearTimeout ? clearTimeout : null, na = "undefined" !== typeof setImmediate ? setImmediate : null;
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var H = false, G = null, A = -1, ia = 5, ha = -1, U = function() {
          if (null !== G) {
            var a = v();
            ha = a;
            var b = true;
            try {
              b = G(true, a);
            } finally {
              b ? I() : (H = false, G = null);
            }
          } else H = false;
        };
        if ("function" === typeof na) var I = function() {
          na(U);
        };
        else if ("undefined" !== typeof MessageChannel) {
          t = new MessageChannel();
          var Ea = t.port2;
          t.port1.onmessage = U;
          I = function() {
            Ea.postMessage(null);
          };
        } else I = function() {
          ja(U, 0);
        };
        t = {
          ReactCurrentDispatcher: g,
          ReactCurrentOwner: L,
          ReactCurrentBatchConfig: J,
          Scheduler: { __proto__: null, unstable_ImmediatePriority: 1, unstable_UserBlockingPriority: 2, unstable_NormalPriority: 3, unstable_IdlePriority: 5, unstable_LowPriority: 4, unstable_runWithPriority: function(a, b) {
            switch (a) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                a = 3;
            }
            var c2 = k;
            k = a;
            try {
              return b();
            } finally {
              k = c2;
            }
          }, unstable_next: function(a) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var b = 3;
                break;
              default:
                b = k;
            }
            var c2 = k;
            k = b;
            try {
              return a();
            } finally {
              k = c2;
            }
          }, unstable_scheduleCallback: function(a, b, c2) {
            var e = v();
            "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? e + c2 : e) : c2 = e;
            switch (a) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            d = c2 + d;
            a = { id: Da++, callback: b, priorityLevel: a, startTime: c2, expirationTime: d, sortIndex: -1 };
            c2 > e ? (a.sortIndex = c2, O(r, a), null === p(q) && a === p(r) && (z ? (ea(A), A = -1) : z = true, T(Q, c2 - e))) : (a.sortIndex = d, O(q, a), u || F || (u = true, R(S)));
            return a;
          }, unstable_cancelCallback: function(a) {
            a.callback = null;
          }, unstable_wrapCallback: function(a) {
            var b = k;
            return function() {
              var c2 = k;
              k = b;
              try {
                return a.apply(this, arguments);
              } finally {
                k = c2;
              }
            };
          }, unstable_getCurrentPriorityLevel: function() {
            return k;
          }, unstable_shouldYield: fa, unstable_requestPaint: function() {
          }, unstable_continueExecution: function() {
            u || F || (u = true, R(S));
          }, unstable_pauseExecution: function() {
          }, unstable_getFirstCallbackNode: function() {
            return p(q);
          }, get unstable_now() {
            return v;
          }, unstable_forceFrameRate: function(a) {
            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ia = 0 < a ? Math.floor(1e3 / a) : 5;
          }, unstable_Profiling: null }
        };
        c.Children = { map: C, forEach: function(a, b, c2) {
          C(a, function() {
            b.apply(this, arguments);
          }, c2);
        }, count: function(a) {
          var b = 0;
          C(a, function() {
            b++;
          });
          return b;
        }, toArray: function(a) {
          return C(a, function(a2) {
            return a2;
          }) || [];
        }, only: function(a) {
          if (!M(a)) throw Error("React.Children.only expected to receive a single React element child.");
          return a;
        } };
        c.Component = w;
        c.Fragment = sa;
        c.Profiler = ua;
        c.PureComponent = K;
        c.StrictMode = ta;
        c.Suspense = ya;
        c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t;
        c.act = ka;
        c.cloneElement = function(a, b, c2) {
          if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
          var e = la({}, a.props), d = a.key, k2 = a.ref, h = a._owner;
          if (null != b) {
            void 0 !== b.ref && (k2 = b.ref, h = L.current);
            void 0 !== b.key && (d = "" + b.key);
            if (a.type && a.type.defaultProps) var l = a.type.defaultProps;
            for (f in b) aa.call(b, f) && !ba.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== l ? l[f] : b[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) e.children = c2;
          else if (1 < f) {
            l = Array(f);
            for (var g2 = 0; g2 < f; g2++) l[g2] = arguments[g2 + 2];
            e.children = l;
          }
          return { $$typeof: y, type: a.type, key: d, ref: k2, props: e, _owner: h };
        };
        c.createContext = function(a) {
          a = { $$typeof: wa, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
          a.Provider = { $$typeof: va, _context: a };
          return a.Consumer = a;
        };
        c.createElement = Z;
        c.createFactory = function(a) {
          var b = Z.bind(null, a);
          b.type = a;
          return b;
        };
        c.createRef = function() {
          return { current: null };
        };
        c.forwardRef = function(a) {
          return {
            $$typeof: xa,
            render: a
          };
        };
        c.isValidElement = M;
        c.lazy = function(a) {
          return { $$typeof: Aa, _payload: { _status: -1, _result: a }, _init: ra };
        };
        c.memo = function(a, b) {
          return { $$typeof: za, type: a, compare: void 0 === b ? null : b };
        };
        c.startTransition = function(a, b) {
          b = J.transition;
          J.transition = {};
          try {
            a();
          } finally {
            J.transition = b;
          }
        };
        c.unstable_act = ka;
        c.useCallback = function(a, b) {
          return g.current.useCallback(a, b);
        };
        c.useContext = function(a) {
          return g.current.useContext(a);
        };
        c.useDebugValue = function(a, b) {
        };
        c.useDeferredValue = function(a) {
          return g.current.useDeferredValue(a);
        };
        c.useEffect = function(a, b) {
          return g.current.useEffect(a, b);
        };
        c.useId = function() {
          return g.current.useId();
        };
        c.useImperativeHandle = function(a, b, c2) {
          return g.current.useImperativeHandle(a, b, c2);
        };
        c.useInsertionEffect = function(a, b) {
          return g.current.useInsertionEffect(a, b);
        };
        c.useLayoutEffect = function(a, b) {
          return g.current.useLayoutEffect(a, b);
        };
        c.useMemo = function(a, b) {
          return g.current.useMemo(a, b);
        };
        c.useReducer = function(a, b, c2) {
          return g.current.useReducer(a, b, c2);
        };
        c.useRef = function(a) {
          return g.current.useRef(a);
        };
        c.useState = function(a) {
          return g.current.useState(a);
        };
        c.useSyncExternalStore = function(a, b, c2) {
          return g.current.useSyncExternalStore(a, b, c2);
        };
        c.useTransition = function() {
          return g.current.useTransition();
        };
        c.version = "18.3.1";
      });
    })();
  }
});
export default require_react_003();
