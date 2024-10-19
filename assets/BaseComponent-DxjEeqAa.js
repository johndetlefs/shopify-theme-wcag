var n, l$1, u$2, i$1, o$1, r$1, f$2, e$1, c$1, s$1, h$1 = {}, v$1 = [], p$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y$1 = Array.isArray;
function d$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function w$1(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2) "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (r2 in l2.defaultProps) void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return g(l2, f2, i2, o2, null);
}
function g(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2, __i: -1, __u: 0 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function b(n2) {
  return n2.children;
}
function k$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function x(n2, l2) {
  if (null == l2) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C$1(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !M.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(M);
}
function M() {
  var n2, u2, t2, o2, r2, e2, c2, s2;
  for (i$1.sort(f$2); n2 = i$1.shift(); ) n2.__d && (u2 = i$1.length, o2 = void 0, e2 = (r2 = (t2 = n2).__v).__e, c2 = [], s2 = [], t2.__P && ((o2 = d$1({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(o2), O(t2.__P, o2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [e2] : null, c2, null == e2 ? x(r2) : e2, !!(32 & r2.__u), s2), o2.__v = r2.__v, o2.__.__k[o2.__i] = o2, j$1(c2, o2, s2), o2.__e != e2 && C$1(o2)), i$1.length > u2 && i$1.sort(f$2));
  M.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, w2, _2 = t2 && t2.__k || v$1, g2 = l2.length;
  for (u2.__d = e2, $(u2, l2, _2), e2 = u2.__d, a2 = 0; a2 < g2; a2++) null != (y2 = u2.__k[a2]) && (p2 = -1 === y2.__i ? h$1 : _2[y2.__i] || h$1, y2.__i = a2, O(n2, y2, p2, i2, o2, r2, f2, e2, c2, s2), d2 = y2.__e, y2.ref && p2.ref != y2.ref && (p2.ref && N(p2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 65536 & y2.__u || p2.__k === y2.__k ? e2 = I(y2, e2, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e2 = y2.__d : d2 && (e2 = d2.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u2.__d = e2, u2.__e = w2;
}
function $(n2, l2, u2) {
  var t2, i2, o2, r2, f2, e2 = l2.length, c2 = u2.length, s2 = c2, a2 = 0;
  for (n2.__k = [], t2 = 0; t2 < e2; t2++) null != (i2 = l2[t2]) && "boolean" != typeof i2 && "function" != typeof i2 ? (r2 = t2 + a2, (i2 = n2.__k[t2] = "string" == typeof i2 || "number" == typeof i2 || "bigint" == typeof i2 || i2.constructor == String ? g(null, i2, null, null, null) : y$1(i2) ? g(b, { children: i2 }, null, null, null) : void 0 === i2.constructor && i2.__b > 0 ? g(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2).__ = n2, i2.__b = n2.__b + 1, o2 = null, -1 !== (f2 = i2.__i = L(i2, u2, r2, s2)) && (s2--, (o2 = u2[f2]) && (o2.__u |= 131072)), null == o2 || null === o2.__v ? (-1 == f2 && a2--, "function" != typeof i2.type && (i2.__u |= 65536)) : f2 !== r2 && (f2 == r2 - 1 ? a2-- : f2 == r2 + 1 ? a2++ : (f2 > r2 ? a2-- : a2++, i2.__u |= 65536))) : i2 = n2.__k[t2] = null;
  if (s2) for (t2 = 0; t2 < c2; t2++) null != (o2 = u2[t2]) && 0 == (131072 & o2.__u) && (o2.__e == n2.__d && (n2.__d = x(o2)), V(o2, o2));
}
function I(n2, l2, u2) {
  var t2, i2;
  if ("function" == typeof n2.type) {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = I(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = x(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 === l2.nodeType);
  return l2;
}
function L(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type && 0 == (131072 & e2.__u)) return u2;
  if (t2 > (null != e2 && 0 == (131072 & e2.__u) ? 1 : 0)) for (; r2 >= 0 || f2 < l2.length; ) {
    if (r2 >= 0) {
      if ((e2 = l2[r2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return r2;
      r2--;
    }
    if (f2 < l2.length) {
      if ((e2 = l2[f2]) && 0 == (131072 & e2.__u) && i2 == e2.key && o2 === e2.type) return f2;
      f2++;
    }
  }
  return -1;
}
function T$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || p$1.test(l2) ? u2 : u2 + "px";
}
function A$1(n2, l2, u2, t2, i2) {
  var o2;
  n: if ("style" === l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] === t2[l2] || T$1(n2.style, l2, u2[l2]);
  }
  else if ("o" === l2[0] && "n" === l2[1]) o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/i, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" === l2 || "onFocusIn" === l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = e$1, n2.addEventListener(l2, o2 ? s$1 : c$1, o2)) : n2.removeEventListener(l2, o2 ? s$1 : c$1, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = e$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, h2, v2, p2, w2, _2, g2, m2, x2, C2, S2, M2, $2, I2, H, L2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), r2 = [e2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (m2 = u2.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a2 = T2.contextType) && i2[a2.__c], S2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? g2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(m2, S2) : (u2.__c = h2 = new k$1(m2, S2), h2.constructor = T2, h2.render = q), C2 && C2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = S2, h2.__n = i2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$1({}, h2.__s)), d$1(h2.__s, T2.getDerivedStateFromProps(m2, h2.__s))), p2 = h2.props, w2 = h2.state, h2.__v = u2, v2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && m2 !== p2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, S2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, S2) || u2.__v === t2.__v)) {
        for (u2.__v !== t2.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), M2 = 0; M2 < h2._sb.length; M2++) h2.__h.push(h2._sb[M2]);
        h2._sb = [], h2.__h.length && f2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, S2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(p2, w2, _2);
      });
    }
    if (h2.context = S2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l$1.__r, I2 = 0, x2) {
      for (h2.state = h2.__s, h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
      h2._sb = [];
    } else do {
      h2.__d = false, $2 && $2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++I2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d$1(d$1({}, i2), h2.getChildContext())), x2 && !v2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(p2, w2)), P(n2, y$1(L2 = null != a2 && a2.type === b && null == a2.key ? a2.props.children : a2) ? L2 : [L2], u2, t2, i2, o2, r2, f2, e2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && f2.push(h2), g2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != r2) {
      for (u2.__u |= c2 ? 160 : 128; e2 && 8 === e2.nodeType && e2.nextSibling; ) e2 = e2.nextSibling;
      r2[r2.indexOf(e2)] = null, u2.__e = e2;
    } else u2.__e = t2.__e, u2.__k = t2.__k;
    l$1.__e(n3, u2, t2);
  }
  else null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = z$1(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l$1.diffed) && a2(u2);
}
function j$1(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++) N(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function z$1(u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, v2, p2, d2, _2, g2, m2, b2 = i2.props, k2 = t2.props, C2 = t2.type;
  if ("svg" === C2 ? r2 = "http://www.w3.org/2000/svg" : "math" === C2 ? r2 = "http://www.w3.org/1998/Math/MathML" : r2 || (r2 = "http://www.w3.org/1999/xhtml"), null != f2) {
    for (a2 = 0; a2 < f2.length; a2++) if ((_2 = f2[a2]) && "setAttribute" in _2 == !!C2 && (C2 ? _2.localName === C2 : 3 === _2.nodeType)) {
      u2 = _2, f2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null === C2) return document.createTextNode(k2);
    u2 = document.createElementNS(r2, C2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, f2), c2 = false), f2 = null;
  }
  if (null === C2) b2 === k2 || c2 && u2.data === k2 || (u2.data = k2);
  else {
    if (f2 = f2 && n.call(u2.childNodes), b2 = i2.props || h$1, !c2 && null != f2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(_2 = u2.attributes[a2]).name] = _2.value;
    for (a2 in b2) if (_2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) p2 = _2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      A$1(u2, a2, null, _2, r2);
    }
    for (a2 in k2) _2 = k2[a2], "children" == a2 ? d2 = _2 : "dangerouslySetInnerHTML" == a2 ? v2 = _2 : "value" == a2 ? g2 = _2 : "checked" == a2 ? m2 = _2 : c2 && "function" != typeof _2 || b2[a2] === _2 || A$1(u2, a2, _2, b2[a2], r2);
    if (v2) c2 || p2 && (v2.__html === p2.__html || v2.__html === u2.innerHTML) || (u2.innerHTML = v2.__html), t2.__k = [];
    else if (p2 && (u2.innerHTML = ""), P(u2, y$1(d2) ? d2 : [d2], t2, i2, o2, "foreignObject" === C2 ? "http://www.w3.org/1999/xhtml" : r2, f2, e2, f2 ? f2[0] : i2.__k && x(i2, 0), c2, s2), null != f2) for (a2 = f2.length; a2--; ) w$1(f2[a2]);
    c2 || (a2 = "value", "progress" === C2 && null == g2 ? u2.removeAttribute("value") : void 0 !== g2 && (g2 !== u2[a2] || "progress" === C2 && !g2 || "option" === C2 && g2 !== b2[a2]) && A$1(u2, a2, g2, b2[a2], r2), a2 = "checked", void 0 !== m2 && m2 !== u2[a2] && A$1(u2, a2, m2, b2[a2], r2));
  }
  return u2;
}
function N(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function V(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && V(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || w$1(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$1(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : t2.__k, f2 = [], e2 = [], O(t2, u2 = (!o2 && i2 || t2).__k = _(b, null, [u2]), r2 || h$1, h$1, t2.namespaceURI, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), j$1(f2, u2, e2);
}
n = v$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$2 = 0, k$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n2 && (n2 = n2(d$1({}, u2), this.props)), n2 && d$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), S(this));
}, k$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
}, k$1.prototype.render = b, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$2 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, M.__r = 0, e$1 = 0, c$1 = F(false), s$1 = F(true);
var f$1 = 0;
function u$1(e2, t2, n2, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, l2 = t2;
  "ref" in t2 && (a2 = t2.ref, delete t2.ref);
  var p2 = { type: e2, props: l2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === l2[c2] && (l2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(p2), p2;
}
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function d(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function h(n2) {
  return o = 1, p(D, n2);
}
function p(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = d(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.i = u2, r.__H.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function T(n2, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function j() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z), n2.__H.__h.forEach(B), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const tailwind = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.14 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.btn {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.125rem;\n  border-width: 2px;\n\n    --bg-color: #2e78a6;\n    --text-color: #fff;\n    --hover-bg-color: #1c628d;\n    --hover-text-color: #fff;\n    --focus-bg-color: #aed9f4;\n    --focus-ring-color: #619ec5;\n    --focus-text-color: #1f3e52;\n}\n.btn-primary {\n      --bg-color: #2e78a6;\n      --text-color: #fff;\n      --hover-bg-color: #1c628d;\n      --hover-text-color: #fff;\n      --focus-bg-color: #aed9f4;\n      --focus-ring-color: #619ec5;\n      --focus-text-color: #1f3e52;\n    }\n.btn-secondary {\n      --bg-color: #a62e78;\n      --text-color: #fff;\n      --hover-bg-color: #8d1c62;\n      --hover-text-color: #fff;\n      --focus-bg-color: #f4d8ae;\n      --focus-ring-color: #c5a961;\n      --focus-text-color: #523e1f;\n    }\n.btn-light {\n      --bg-color: #e5e7eb;\n      --text-color: #1f2937;\n      --hover-bg-color: #d1d5db;\n      --hover-text-color: #1f2937;\n      --focus-bg-color: #9ca3af;\n      --focus-ring-color: #e5e7eb;\n      --focus-text-color: #f3f4f6;\n    }\n.btn-dark {\n      --bg-color: #4b5563;\n      --text-color: #fff;\n      --hover-bg-color: #1f2937;\n      --hover-text-color: #fff;\n      --focus-bg-color: #9ca3af;\n      --focus-ring-color: #e5e7eb;\n      --focus-text-color: #f3f4f6;\n    }\n.btn-solid {\n  border-color: var(--bg-color);\n}\n.btn-solid {\n  background-color: var(--bg-color);\n}\n.btn-solid {\n  color: var(--text-color);\n}\n.btn-solid i {\n  color: var(--text-color);\n}\n.btn-outline {\n  border-color: var(--bg-color);\n}\n.btn-outline {\n  background-color: transparent;\n}\n.btn-outline {\n  color: var(--bg-color);\n}\n.btn-outline i {\n  color: var(--bg-color);\n}\n.btn:hover {\n  border-color: var(--hover-bg-color);\n}\n.btn:hover {\n  background-color: var(--hover-bg-color);\n}\n.btn:hover {\n  color: var(--hover-text-color);\n}\n.btn:hover i {\n  color: var(--hover-text-color);\n}\n.btn:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.btn:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.btn:focus-visible {\n  border-color: var(--focus-bg-color);\n}\n.btn:focus-visible {\n  background-color: var(--focus-bg-color);\n}\n.btn:focus-visible {\n  color: var(--focus-text-color);\n}\n.btn:focus-visible {\n  --tw-ring-color: var(--focus-ring-color);\n}\n.btn:focus-visible i {\n  color: var(--focus-text-color);\n}\n.btn-sm {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.btn-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.btn-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.btn-md {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.btn-md {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.btn-md {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.btn-lg {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.btn-lg {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.btn-lg {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.relative {\n  position: relative;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-full {\n  height: 100%;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-96 {\n  max-height: 24rem;\n}\n.w-full {\n  width: 100%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.\\!p-4 {\n  padding: 1rem !important;\n}\n.p-4 {\n  padding: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-primary-50 {\n  --tw-text-opacity: 1;\n  color: rgb(46 120 166 / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.focus-within\\:not-sr-only:focus-within {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n";
const tailwindSheet = new CSSStyleSheet();
const iconsSheet = new CSSStyleSheet();
async function loadStyleSheet(sheet, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS from ${url}, status: ${response.status}`);
    }
    const cssText = await response.text();
    sheet.replaceSync(cssText);
  } catch (error) {
    console.error("Error creating CSSStyleSheet:", error);
  }
}
tailwindSheet.replaceSync(tailwind);
loadStyleSheet(iconsSheet, "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [tailwindSheet, iconsSheet];
    }
  }
}
export {
  A,
  BaseComponent as B,
  B$1 as a,
  h,
  u$1 as u,
  y
};
