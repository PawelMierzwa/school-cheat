! function(t, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.functionPlot = n() : t.functionPlot = n() }(window, (function() {
    return function(t) {
        var n = {};

        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
        return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) { return t[n] }.bind(null, i));
            return r
        }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 79)
    }([function(t, n, e) {
        "use strict";
        e.d(n, "c", (function() { return o })), e.d(n, "b", (function() { return u })), e.d(n, "a", (function() { return a }));
        var r = e(26);

        function i(t, n) { return function(e) { return t + e * n } }

        function o(t, n) { var e = n - t; return e ? i(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Object(r.a)(isNaN(t) ? n : t) }

        function u(t) {
            return 1 == (t = +t) ? a : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(r) { return Math.pow(t + r * n, e) }
                }(n, e, t) : Object(r.a)(isNaN(n) ? e : n)
            }
        }

        function a(t, n) { var e = n - t; return e ? i(t, e) : Object(r.a)(isNaN(t) ? n : t) }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return i })), e.d(n, "d", (function() { return o })), e.d(n, "c", (function() { return u })), e.d(n, "e", (function() { return x })), e.d(n, "h", (function() { return M })), e.d(n, "g", (function() { return T })), e.d(n, "b", (function() { return E })), e.d(n, "f", (function() { return P }));
        var r = e(4);

        function i() {}
        var o = .7,
            u = 1 / o,
            a = "\\s*([+-]?\\d+)\\s*",
            s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            l = /^#([0-9a-f]{3,8})$/,
            f = new RegExp("^rgb\\(" + [a, a, a] + "\\)$"),
            h = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
            p = new RegExp("^rgba\\(" + [a, a, a, s] + "\\)$"),
            d = new RegExp("^rgba\\(" + [c, c, c, s] + "\\)$"),
            y = new RegExp("^hsl\\(" + [s, c, c] + "\\)$"),
            v = new RegExp("^hsla\\(" + [s, c, c, s] + "\\)$"),
            g = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

        function _() { return this.rgb().formatHex() }

        function m() { return this.rgb().formatRgb() }

        function x(t) { var n, e; return t = (t + "").trim().toLowerCase(), (n = l.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? w(n) : 3 === e ? new E(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? b(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? b(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = f.exec(t)) ? new E(n[1], n[2], n[3], 1) : (n = h.exec(t)) ? new E(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = p.exec(t)) ? b(n[1], n[2], n[3], n[4]) : (n = d.exec(t)) ? b(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = y.exec(t)) ? N(n[1], n[2] / 100, n[3] / 100, 1) : (n = v.exec(t)) ? N(n[1], n[2] / 100, n[3] / 100, n[4]) : g.hasOwnProperty(t) ? w(g[t]) : "transparent" === t ? new E(NaN, NaN, NaN, 0) : null }

        function w(t) { return new E(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

        function b(t, n, e, r) { return r <= 0 && (t = n = e = NaN), new E(t, n, e, r) }

        function M(t) { return t instanceof i || (t = x(t)), t ? new E((t = t.rgb()).r, t.g, t.b, t.opacity) : new E }

        function T(t, n, e, r) { return 1 === arguments.length ? M(t) : new E(t, n, e, null == r ? 1 : r) }

        function E(t, n, e, r) { this.r = +t, this.g = +n, this.b = +e, this.opacity = +r }

        function A() { return "#" + k(this.r) + k(this.g) + k(this.b) }

        function O() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

        function k(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

        function N(t, n, e, r) { return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new I(t, n, e, r) }

        function S(t) {
            if (t instanceof I) return new I(t.h, t.s, t.l, t.opacity);
            if (t instanceof i || (t = x(t)), !t) return new I;
            if (t instanceof I) return t;
            var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                r = t.b / 255,
                o = Math.min(n, e, r),
                u = Math.max(n, e, r),
                a = NaN,
                s = u - o,
                c = (u + o) / 2;
            return s ? (a = n === u ? (e - r) / s + 6 * (e < r) : e === u ? (r - n) / s + 2 : (n - e) / s + 4, s /= c < .5 ? u + o : 2 - u - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new I(a, s, c, t.opacity)
        }

        function P(t, n, e, r) { return 1 === arguments.length ? S(t) : new I(t, n, e, null == r ? 1 : r) }

        function I(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

        function L(t, n, e) { return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) }
        Object(r.a)(i, x, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: _, formatHex: _, formatHsl: function() { return S(this).formatHsl() }, formatRgb: m, toString: m }), Object(r.a)(E, T, Object(r.b)(i, { brighter: function(t) { return t = null == t ? u : Math.pow(u, t), new E(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? o : Math.pow(o, t), new E(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: A, formatHex: A, formatRgb: O, toString: O })), Object(r.a)(I, P, Object(r.b)(i, {
            brighter: function(t) { return t = null == t ? u : Math.pow(u, t), new I(this.h, this.s, this.l * t, this.opacity) },
            darker: function(t) { return t = null == t ? o : Math.pow(o, t), new I(this.h, this.s, this.l * t, this.opacity) },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new E(L(t >= 240 ? t - 240 : t + 120, i, r), L(t, i, r), L(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 },
            formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") }
        }))
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "create", (function() { return o })), e.d(n, "creator", (function() { return r.a })), e.d(n, "local", (function() { return a })), e.d(n, "matcher", (function() { return c.b })), e.d(n, "namespace", (function() { return l.a })), e.d(n, "namespaces", (function() { return f.a })), e.d(n, "pointer", (function() { return h.a })), e.d(n, "pointers", (function() { return d })), e.d(n, "select", (function() { return i.a })), e.d(n, "selectAll", (function() { return g })), e.d(n, "selection", (function() { return v.b })), e.d(n, "selector", (function() { return _.a })), e.d(n, "selectorAll", (function() { return m.a })), e.d(n, "style", (function() { return x.b })), e.d(n, "window", (function() { return w.a }));
        var r = e(14),
            i = e(40),
            o = function(t) { return Object(i.a)(Object(r.a)(t).call(document.documentElement)) },
            u = 0;

        function a() { return new s }

        function s() { this._ = "@" + (++u).toString(36) }
        s.prototype = a.prototype = {
            constructor: s,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) { return t[this._] = n },
            remove: function(t) { return this._ in t && delete t[this._] },
            toString: function() { return this._ }
        };
        var c = e(13),
            l = e(22),
            f = e(16),
            h = e(41),
            p = e(43),
            d = function(t, n) { return t.target && (t = Object(p.a)(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, t => Object(h.a)(t, n)) },
            y = e(25),
            v = e(7),
            g = function(t) { return "string" == typeof t ? new v.a([document.querySelectorAll(t)], [document.documentElement]) : new v.a([null == t ? [] : Object(y.a)(t)], v.c) },
            _ = e(23),
            m = e(38),
            x = e(39),
            w = e(24)
    }, function(t, n, e) {
        "use strict";
        n.a = function(t, n) {
            return t = +t, n = +n,
                function(e) { return t * (1 - e) + n * e }
        }
    }, function(t, n, e) {
        "use strict";

        function r(t, n) { var e = Object.create(t.prototype); for (var r in n) e[r] = n[r]; return e }
        e.d(n, "b", (function() { return r })), n.a = function(t, n, e) { t.prototype = n.prototype = e, e.constructor = t }
    }, function(t, n) {
        function e() {}
        e.prototype.type = "Node", t.exports = e
    }, function(t, n, e) {
        "use strict";
        var r = e(10);
        n.a = function(t) { return (t = Object(r.b)(Math.abs(t))) ? t[1] : NaN }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "c", (function() { return rt })), e.d(n, "a", (function() { return it }));
        var r = e(23),
            i = e(25),
            o = e(38);
        var u = e(13),
            a = Array.prototype.find;

        function s() { return this.firstElementChild }
        var c = Array.prototype.filter;

        function l() { return this.children }
        var f = function(t) { return new Array(t.length) };

        function h(t, n) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n }
        h.prototype = { constructor: h, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, n) { return this._parent.insertBefore(t, n) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } };
        var p = function(t) { return function() { return t } };

        function d(t, n, e, r, i, o) { for (var u, a = 0, s = n.length, c = o.length; a < c; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new h(t, o[a]); for (; a < s; ++a)(u = n[a]) && (i[a] = u) }

        function y(t, n, e, r, i, o, u) {
            var a, s, c, l = new Map,
                f = n.length,
                p = o.length,
                d = new Array(f);
            for (a = 0; a < f; ++a)(s = n[a]) && (d[a] = c = u.call(s, s.__data__, a, n) + "", l.has(c) ? i[a] = s : l.set(c, s));
            for (a = 0; a < p; ++a) c = u.call(t, o[a], a, o) + "", (s = l.get(c)) ? (r[a] = s, s.__data__ = o[a], l.delete(c)) : e[a] = new h(t, o[a]);
            for (a = 0; a < f; ++a)(s = n[a]) && l.get(d[a]) === s && (i[a] = s)
        }

        function v(t) { return t.__data__ }

        function g(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }
        var _ = e(22);

        function m(t) { return function() { this.removeAttribute(t) } }

        function x(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

        function w(t, n) { return function() { this.setAttribute(t, n) } }

        function b(t, n) { return function() { this.setAttributeNS(t.space, t.local, n) } }

        function M(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function T(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        var E = e(39);

        function A(t) { return function() { delete this[t] } }

        function O(t, n) { return function() { this[t] = n } }

        function k(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        function N(t) { return t.trim().split(/^|\s+/) }

        function S(t) { return t.classList || new P(t) }

        function P(t) { this._node = t, this._names = N(t.getAttribute("class") || "") }

        function I(t, n) { for (var e = S(t), r = -1, i = n.length; ++r < i;) e.add(n[r]) }

        function L(t, n) { for (var e = S(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]) }

        function j(t) { return function() { I(this, t) } }

        function C(t) { return function() { L(this, t) } }

        function R(t, n) {
            return function() {
                (n.apply(this, arguments) ? I : L)(this, t)
            }
        }
        P.prototype = {
            add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) { return this._names.indexOf(t) >= 0 }
        };

        function D() { this.textContent = "" }

        function U(t) { return function() { this.textContent = t } }

        function Y(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function H() { this.innerHTML = "" }

        function F(t) { return function() { this.innerHTML = t } }

        function z(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        function B() { this.nextSibling && this.parentNode.appendChild(this) }

        function q() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }
        var X = e(14);

        function V() { return null }

        function W() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function $() {
            var t = this.cloneNode(!1),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }

        function G() {
            var t = this.cloneNode(!0),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }

        function Z(t) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var n = "",
                    e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n }
            }))
        }

        function Q(t) { return function() { var n = this.__on; if (n) { for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);++i ? n.length = i : delete this.__on } } }

        function J(t, n, e) {
            return function() {
                var r, i = this.__on,
                    o = function(t) { return function(n) { t.call(this, n, this.__data__) } }(n);
                if (i)
                    for (var u = 0, a = i.length; u < a; ++u)
                        if ((r = i[u]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                this.addEventListener(t.type, o, e), r = { type: t.type, name: t.name, value: n, listener: o, options: e }, i ? i.push(r) : this.__on = [r]
            }
        }
        var K = e(24);

        function tt(t, n, e) {
            var r = Object(K.a)(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }

        function nt(t, n) { return function() { return tt(this, t, n) } }

        function et(t, n) { return function() { return tt(this, t, n.apply(this, arguments)) } }
        var rt = [null];

        function it(t, n) { this._groups = t, this._parents = n }

        function ot() {
            return new it([
                [document.documentElement]
            ], rt)
        }
        it.prototype = ot.prototype = {
            constructor: it,
            select: function(t) {
                "function" != typeof t && (t = Object(r.a)(t));
                for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                    for (var u, a, s = n[o], c = s.length, l = i[o] = new Array(c), f = 0; f < c; ++f)(u = s[f]) && (a = t.call(u, u.__data__, f, s)) && ("__data__" in u && (a.__data__ = u.__data__), l[f] = a);
                return new it(i, this._parents)
            },
            selectAll: function(t) {
                t = "function" == typeof t ? function(t) { return function() { var n = t.apply(this, arguments); return null == n ? [] : Object(i.a)(n) } }(t) : Object(o.a)(t);
                for (var n = this._groups, e = n.length, r = [], u = [], a = 0; a < e; ++a)
                    for (var s, c = n[a], l = c.length, f = 0; f < l; ++f)(s = c[f]) && (r.push(t.call(s, s.__data__, f, c)), u.push(s));
                return new it(r, u)
            },
            selectChild: function(t) { return this.select(null == t ? s : function(t) { return function() { return a.call(this.children, t) } }("function" == typeof t ? t : Object(u.a)(t))) },
            selectChildren: function(t) { return this.selectAll(null == t ? l : function(t) { return function() { return c.call(this.children, t) } }("function" == typeof t ? t : Object(u.a)(t))) },
            filter: function(t) {
                "function" != typeof t && (t = Object(u.b)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, a = n[i], s = a.length, c = r[i] = [], l = 0; l < s; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && c.push(o);
                return new it(r, this._parents)
            },
            data: function(t, n) {
                if (!arguments.length) return Array.from(this, v);
                var e = n ? y : d,
                    r = this._parents,
                    o = this._groups;
                "function" != typeof t && (t = p(t));
                for (var u = o.length, a = new Array(u), s = new Array(u), c = new Array(u), l = 0; l < u; ++l) {
                    var f = r[l],
                        h = o[l],
                        g = h.length,
                        _ = Object(i.a)(t.call(f, f && f.__data__, l, r)),
                        m = _.length,
                        x = s[l] = new Array(m),
                        w = a[l] = new Array(m),
                        b = c[l] = new Array(g);
                    e(f, h, x, w, b, _, n);
                    for (var M, T, E = 0, A = 0; E < m; ++E)
                        if (M = x[E]) {
                            for (E >= A && (A = E + 1); !(T = w[A]) && ++A < m;);
                            M._next = T || null
                        }
                }
                return (a = new it(a, r))._enter = s, a._exit = c, a
            },
            enter: function() { return new it(this._enter || this._groups.map(f), this._parents) },
            exit: function() { return new it(this._exit || this._groups.map(f), this._parents) },
            join: function(t, n, e) {
                var r = this.enter(),
                    i = this,
                    o = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
            },
            merge: function(t) {
                if (!(t instanceof it)) throw new Error("invalid merge");
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var s, c = n[a], l = e[a], f = c.length, h = u[a] = new Array(f), p = 0; p < f; ++p)(s = c[p] || l[p]) && (h[p] = s);
                for (; a < r; ++a) u[a] = n[a];
                return new it(u, this._parents)
            },
            selection: function() { return this },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
                return this
            },
            sort: function(t) {
                function n(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e }
                t || (t = g);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = e[o], s = a.length, c = i[o] = new Array(s), l = 0; l < s; ++l)(u = a[l]) && (c[l] = u);
                    c.sort(n)
                }
                return new it(i, this._parents).order()
            },
            call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this },
            nodes: function() { return Array.from(this) },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) { var u = r[i]; if (u) return u }
                return null
            },
            size: function() { let t = 0; for (const n of this) ++t; return t },
            empty: function() { return !this.node() },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            },
            attr: function(t, n) { var e = Object(_.a)(t); if (arguments.length < 2) { var r = this.node(); return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e) } return this.each((null == n ? e.local ? x : m : "function" == typeof n ? e.local ? T : M : e.local ? b : w)(e, n)) },
            style: E.a,
            property: function(t, n) { return arguments.length > 1 ? this.each((null == n ? A : "function" == typeof n ? k : O)(t, n)) : this.node()[t] },
            classed: function(t, n) {
                var e = N(t + "");
                if (arguments.length < 2) {
                    for (var r = S(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? R : n ? j : C)(e, n))
            },
            text: function(t) { return arguments.length ? this.each(null == t ? D : ("function" == typeof t ? Y : U)(t)) : this.node().textContent },
            html: function(t) { return arguments.length ? this.each(null == t ? H : ("function" == typeof t ? z : F)(t)) : this.node().innerHTML },
            raise: function() { return this.each(B) },
            lower: function() { return this.each(q) },
            append: function(t) { var n = "function" == typeof t ? t : Object(X.a)(t); return this.select((function() { return this.appendChild(n.apply(this, arguments)) })) },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : Object(X.a)(t),
                    i = null == n ? V : "function" == typeof n ? n : Object(r.a)(n);
                return this.select((function() { return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null) }))
            },
            remove: function() { return this.each(W) },
            clone: function(t) { return this.select(t ? G : $) },
            datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ },
            on: function(t, n, e) {
                var r, i, o = Z(t + ""),
                    u = o.length;
                if (!(arguments.length < 2)) { for (a = n ? J : Q, r = 0; r < u; ++r) this.each(a(o[r], n, e)); return this }
                var a = this.node().__on;
                if (a)
                    for (var s, c = 0, l = a.length; c < l; ++c)
                        for (r = 0, s = a[c]; r < u; ++r)
                            if ((i = o[r]).type === s.type && i.name === s.name) return s.value
            },
            dispatch: function(t, n) { return this.each(("function" == typeof n ? et : nt)(t, n)) },
            [Symbol.iterator]: function*() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)(r = i[o]) && (yield r)
            }
        };
        n.b = ot
    }, , function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(1);
        e.d(n, "color", (function() { return r.e })), e.d(n, "rgb", (function() { return r.g })), e.d(n, "hsl", (function() { return r.f }));
        var i = e(28);
        e.d(n, "lab", (function() { return i.a })), e.d(n, "hcl", (function() { return i.c })), e.d(n, "lch", (function() { return i.d })), e.d(n, "gray", (function() { return i.b }));
        var o = e(59);
        e.d(n, "cubehelix", (function() { return o.a }))
    }, function(t, n, e) {
        "use strict";

        function r(t, n) { if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null; var e, r = t.slice(0, e); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)] }
        e.d(n, "b", (function() { return r })), n.a = function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) }
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "interpolate", (function() { return r.a })), e.d(n, "interpolateArray", (function() { return i.a })), e.d(n, "interpolateBasis", (function() { return o.b })), e.d(n, "interpolateBasisClosed", (function() { return u.a })), e.d(n, "interpolateDate", (function() { return a.a })), e.d(n, "interpolateDiscrete", (function() { return s })), e.d(n, "interpolateHue", (function() { return l })), e.d(n, "interpolateNumber", (function() { return f.a })), e.d(n, "interpolateNumberArray", (function() { return h.a })), e.d(n, "interpolateObject", (function() { return p.a })), e.d(n, "interpolateRound", (function() { return d.a })), e.d(n, "interpolateString", (function() { return y.a })), e.d(n, "interpolateTransformCss", (function() { return v.a })), e.d(n, "interpolateTransformSvg", (function() { return v.b })), e.d(n, "interpolateZoom", (function() { return g.a })), e.d(n, "interpolateRgb", (function() { return _.a })), e.d(n, "interpolateRgbBasis", (function() { return _.b })), e.d(n, "interpolateRgbBasisClosed", (function() { return _.c })), e.d(n, "interpolateHsl", (function() { return w })), e.d(n, "interpolateHslLong", (function() { return b })), e.d(n, "interpolateLab", (function() { return T })), e.d(n, "interpolateHcl", (function() { return A })), e.d(n, "interpolateHclLong", (function() { return O })), e.d(n, "interpolateCubehelix", (function() { return S })), e.d(n, "interpolateCubehelixLong", (function() { return P })), e.d(n, "piecewise", (function() { return I.a })), e.d(n, "quantize", (function() { return L }));
        var r = e(12),
            i = e(36),
            o = e(21),
            u = e(33),
            a = e(35),
            s = function(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } },
            c = e(0),
            l = function(t, n) { var e = Object(c.c)(+t, +n); return function(t) { var n = e(t); return n - 360 * Math.floor(n / 360) } },
            f = e(3),
            h = e(15),
            p = e(37),
            d = e(56),
            y = e(34),
            v = e(50),
            g = e(58),
            _ = e(17),
            m = e(1);

        function x(t) {
            return function(n, e) {
                var r = t((n = Object(m.f)(n)).h, (e = Object(m.f)(e)).h),
                    i = Object(c.a)(n.s, e.s),
                    o = Object(c.a)(n.l, e.l),
                    u = Object(c.a)(n.opacity, e.opacity);
                return function(t) { return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + "" }
            }
        }
        var w = x(c.c),
            b = x(c.a),
            M = e(28);

        function T(t, n) {
            var e = Object(c.a)((t = Object(M.a)(t)).l, (n = Object(M.a)(n)).l),
                r = Object(c.a)(t.a, n.a),
                i = Object(c.a)(t.b, n.b),
                o = Object(c.a)(t.opacity, n.opacity);
            return function(n) { return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "" }
        }

        function E(t) {
            return function(n, e) {
                var r = t((n = Object(M.c)(n)).h, (e = Object(M.c)(e)).h),
                    i = Object(c.a)(n.c, e.c),
                    o = Object(c.a)(n.l, e.l),
                    u = Object(c.a)(n.opacity, e.opacity);
                return function(t) { return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + "" }
            }
        }
        var A = E(c.c),
            O = E(c.a),
            k = e(59);

        function N(t) {
            return function n(e) {
                function r(n, r) {
                    var i = t((n = Object(k.a)(n)).h, (r = Object(k.a)(r)).h),
                        o = Object(c.a)(n.s, r.s),
                        u = Object(c.a)(n.l, r.l),
                        a = Object(c.a)(n.opacity, r.opacity);
                    return function(t) { return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "" }
                }
                return e = +e, r.gamma = n, r
            }(1)
        }
        var S = N(c.c),
            P = N(c.a),
            I = e(57),
            L = function(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1)); return e }
    }, function(t, n, e) {
        "use strict";
        var r = e(1),
            i = e(17),
            o = e(36),
            u = e(35),
            a = e(3),
            s = e(37),
            c = e(34),
            l = e(26),
            f = e(15);
        n.a = function(t, n) { var e, h = typeof n; return null == n || "boolean" === h ? Object(l.a)(n) : ("number" === h ? a.a : "string" === h ? (e = Object(r.e)(n)) ? (n = e, i.a) : c.a : n instanceof r.e ? i.a : n instanceof Date ? u.a : Object(f.b)(n) ? f.a : Array.isArray(n) ? o.b : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? s.a : a.a)(t, n) }
    }, function(t, n, e) {
        "use strict";

        function r(t) { return function(n) { return n.matches(t) } }
        e.d(n, "a", (function() { return r })), n.b = function(t) { return function() { return this.matches(t) } }
    }, function(t, n, e) {
        "use strict";
        var r = e(22),
            i = e(16);

        function o(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === i.b && n.documentElement.namespaceURI === i.b ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function u(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } }
        n.a = function(t) { var n = Object(r.a)(t); return (n.local ? u : o)(n) }
    }, function(t, n, e) {
        "use strict";

        function r(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }
        e.d(n, "b", (function() { return r })), n.a = function(t, n) {
            n || (n = []);
            var e, r = t ? Math.min(n.length, t.length) : 0,
                i = n.slice();
            return function(o) { for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o; return i }
        }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return r }));
        var r = "http://www.w3.org/1999/xhtml";
        n.a = { svg: "http://www.w3.org/2000/svg", xhtml: r, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return s })), e.d(n, "c", (function() { return c }));
        var r = e(1),
            i = e(21),
            o = e(33),
            u = e(0);

        function a(t) {
            return function(n) {
                var e, i, o = n.length,
                    u = new Array(o),
                    a = new Array(o),
                    s = new Array(o);
                for (e = 0; e < o; ++e) i = Object(r.g)(n[e]), u[e] = i.r || 0, a[e] = i.g || 0, s[e] = i.b || 0;
                return u = t(u), a = t(a), s = t(s), i.opacity = 1,
                    function(t) { return i.r = u(t), i.g = a(t), i.b = s(t), i + "" }
            }
        }
        n.a = function t(n) {
            var e = Object(u.b)(n);

            function i(t, n) {
                var i = e((t = Object(r.g)(t)).r, (n = Object(r.g)(n)).r),
                    o = e(t.g, n.g),
                    a = e(t.b, n.b),
                    s = Object(u.a)(t.opacity, n.opacity);
                return function(n) { return t.r = i(n), t.g = o(n), t.b = a(n), t.opacity = s(n), t + "" }
            }
            return i.gamma = t, i
        }(1);
        var s = a(i.b),
            c = a(o.a)
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = r(e(31)),
            o = {
                linspace: function(t, n, e) { const r = (n - t) / (e - 1); return Array.from({ length: e }, (n, e) => t + r * e) },
                logspace: function(t, n, e) { return this.linspace(t, n, e).map(t => Math.pow(10, t)) },
                isValidNumber: function(t) { return "number" == typeof t && !isNaN(t) },
                space: function(t, n, e) {
                    const r = n[0],
                        i = n[1];
                    return "log" === t.options.xAxis.type ? this.logspace(Math.log10(r), Math.log10(i), e) : this.linspace(r, i, e)
                },
                getterSetter: function(t, n) {
                    const e = this;
                    this[n] = function(r) { return arguments.length ? (t[n] = r, e) : t[n] }
                },
                sgn: function(t) { return t < 0 ? -1 : t > 0 ? 1 : 0 },
                color: function(t, n) { return t.color || i.default.COLORS[n].hex() }
            };
        n.default = o
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
            Object.defineProperty(n, "__esModule", { value: !0 }), n.interval = n.builtIn = void 0;
            const i = r(e(83)),
                o = { interval: r(e(75)).default, builtIn: i.default };

            function u(n) {
                function e(e, r) {
                    const i = e[r],
                        u = n + "_Expression_" + r,
                        a = n + "_Compiled_" + r;
                    i !== e[u] && (e[u] = i, e[a] = function(e) { if ("string" == typeof e) { const r = o[n](e); return t.math && "builtIn" === n ? { eval: r.evaluate || r.eval } : r } if ("function" == typeof e) return { eval: e }; throw Error("expression must be a string or a function") }(i))
                }
                return function(t, r, i) {
                    return e(t, r),
                        function(t, e) { return t[n + "_Compiled_" + e] }(t, r).eval(Object.assign({}, t.scope || {}, i))
                }
            }
            t.math && (o.builtIn = t.math.compile);
            const a = u("builtIn");
            n.builtIn = a;
            const s = u("interval");
            n.interval = s
        }).call(this, e(60))
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return i })), e.d(n, "a", (function() { return o }));
        var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function i(t) { if (!(n = r.exec(t))) throw new Error("invalid format: " + t); var n; return new o({ fill: n[1], align: n[2], sign: n[3], symbol: n[4], zero: n[5], width: n[6], comma: n[7], precision: n[8] && n[8].slice(1), trim: n[9], type: n[10] }) }

        function o(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }
        i.prototype = o.prototype, o.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type }
    }, function(t, n, e) {
        "use strict";

        function r(t, n, e, r, i) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
        }
        e.d(n, "a", (function() { return r })), n.b = function(t) {
            var n = t.length - 1;
            return function(e) {
                var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    o = t[i],
                    u = t[i + 1],
                    a = i > 0 ? t[i - 1] : 2 * o - u,
                    s = i < n - 1 ? t[i + 2] : 2 * u - o;
                return r((e - i / n) * n, a, o, u, s)
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(16);
        n.a = function(t) {
            var n = t += "",
                e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? { space: r.a[n], local: t } : t
        }
    }, function(t, n, e) {
        "use strict";

        function r() {}
        n.a = function(t) { return null == t ? r : function() { return this.querySelector(t) } }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) }
    }, function(t, n, e) {
        "use strict";
        n.a = t => () => t
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return r })), e.d(n, "a", (function() { return i }));
        const r = Math.PI / 180,
            i = 180 / Math.PI
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return c })), e.d(n, "a", (function() { return l })), e.d(n, "d", (function() { return g })), e.d(n, "c", (function() { return _ }));
        var r = e(4),
            i = e(1),
            o = e(27);
        const u = 6 / 29,
            a = 3 * u * u;

        function s(t) {
            if (t instanceof f) return new f(t.l, t.a, t.b, t.opacity);
            if (t instanceof m) return x(t);
            t instanceof i.b || (t = Object(i.h)(t));
            var n, e, r = y(t.r),
                o = y(t.g),
                u = y(t.b),
                a = h((.2225045 * r + .7168786 * o + .0606169 * u) / 1);
            return r === o && o === u ? n = e = a : (n = h((.4360747 * r + .3850649 * o + .1430804 * u) / .96422), e = h((.0139322 * r + .0971045 * o + .7141733 * u) / .82521)), new f(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
        }

        function c(t, n) { return new f(t, 0, 0, null == n ? 1 : n) }

        function l(t, n, e, r) { return 1 === arguments.length ? s(t) : new f(t, n, e, null == r ? 1 : r) }

        function f(t, n, e, r) { this.l = +t, this.a = +n, this.b = +e, this.opacity = +r }

        function h(t) { return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / a + 4 / 29 }

        function p(t) { return t > u ? t * t * t : a * (t - 4 / 29) }

        function d(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055) }

        function y(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

        function v(t) { if (t instanceof m) return new m(t.h, t.c, t.l, t.opacity); if (t instanceof f || (t = s(t)), 0 === t.a && 0 === t.b) return new m(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity); var n = Math.atan2(t.b, t.a) * o.a; return new m(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity) }

        function g(t, n, e, r) { return 1 === arguments.length ? v(t) : new m(e, n, t, null == r ? 1 : r) }

        function _(t, n, e, r) { return 1 === arguments.length ? v(t) : new m(t, n, e, null == r ? 1 : r) }

        function m(t, n, e, r) { this.h = +t, this.c = +n, this.l = +e, this.opacity = +r }

        function x(t) { if (isNaN(t.h)) return new f(t.l, 0, 0, t.opacity); var n = t.h * o.b; return new f(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity) }
        Object(r.a)(f, l, Object(r.b)(i.a, {
            brighter: function(t) { return new f(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) },
            darker: function(t) { return new f(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return n = .96422 * p(n), t = 1 * p(t), e = .82521 * p(e), new i.b(d(3.1338561 * n - 1.6168667 * t - .4906146 * e), d(-.9787684 * n + 1.9161415 * t + .033454 * e), d(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
            }
        })), Object(r.a)(m, _, Object(r.b)(i.a, { brighter: function(t) { return new m(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity) }, darker: function(t) { return new m(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity) }, rgb: function() { return x(this).rgb() } }))
    }, , function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return i })), e.d(n, "c", (function() { return o })), e.d(n, "a", (function() { return a }));
        var r, i, o, u = e(42);

        function a(t) { return r = Object(u.a)(t), i = r.format, o = r.formatPrefix, r }
        a({ thousands: ",", grouping: [3], currency: ["$", ""] })
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        const r = e(9),
            i = { COLORS: ["steelblue", "red", "#05b378", "orange", "#4040e8", "yellow", "brown", "magenta", "cyan"].map((function(t) { return r.hsl(t) })), DEFAULT_WIDTH: 550, DEFAULT_HEIGHT: 350, TIP_X_EPS: 1, DEFAULT_ITERATIONS: 1 / 0, MAX_ITERATIONS: 0 };
        i.DEFAULT_ITERATIONS = null, i.MAX_ITERATIONS = 10 * i.DEFAULT_WIDTH, n.default = i
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "arc", (function() { return N })), e.d(n, "area", (function() { return D })), e.d(n, "line", (function() { return R })), e.d(n, "pie", (function() { return H })), e.d(n, "areaRadial", (function() { return V })), e.d(n, "radialArea", (function() { return V })), e.d(n, "lineRadial", (function() { return X })), e.d(n, "radialLine", (function() { return X })), e.d(n, "pointRadial", (function() { return W })), e.d(n, "linkHorizontal", (function() { return tt })), e.d(n, "linkVertical", (function() { return nt })), e.d(n, "linkRadial", (function() { return et })), e.d(n, "symbol", (function() { return xt })), e.d(n, "symbols", (function() { return mt })), e.d(n, "symbolCircle", (function() { return rt })), e.d(n, "symbolCross", (function() { return it })), e.d(n, "symbolDiamond", (function() { return at })), e.d(n, "symbolSquare", (function() { return ht })), e.d(n, "symbolStar", (function() { return ft })), e.d(n, "symbolTriangle", (function() { return dt })), e.d(n, "symbolWye", (function() { return _t })), e.d(n, "curveBasisClosed", (function() { return At })), e.d(n, "curveBasisOpen", (function() { return kt })), e.d(n, "curveBasis", (function() { return Tt })), e.d(n, "curveBundle", (function() { return St })), e.d(n, "curveCardinalClosed", (function() { return Ct })), e.d(n, "curveCardinalOpen", (function() { return Dt })), e.d(n, "curveCardinal", (function() { return Lt })), e.d(n, "curveCatmullRomClosed", (function() { return zt })), e.d(n, "curveCatmullRomOpen", (function() { return qt })), e.d(n, "curveCatmullRom", (function() { return Ht })), e.d(n, "curveLinearClosed", (function() { return Vt })), e.d(n, "curveLinear", (function() { return L })), e.d(n, "curveMonotoneX", (function() { return tn })), e.d(n, "curveMonotoneY", (function() { return nn })), e.d(n, "curveNatural", (function() { return on })), e.d(n, "curveStep", (function() { return an })), e.d(n, "curveStepAfter", (function() { return cn })), e.d(n, "curveStepBefore", (function() { return sn })), e.d(n, "stack", (function() { return dn })), e.d(n, "stackOffsetExpand", (function() { return yn })), e.d(n, "stackOffsetDiverging", (function() { return vn })), e.d(n, "stackOffsetNone", (function() { return ln })), e.d(n, "stackOffsetSilhouette", (function() { return gn })), e.d(n, "stackOffsetWiggle", (function() { return _n })), e.d(n, "stackOrderAppearance", (function() { return mn })), e.d(n, "stackOrderAscending", (function() { return wn })), e.d(n, "stackOrderDescending", (function() { return Mn })), e.d(n, "stackOrderInsideOut", (function() { return Tn })), e.d(n, "stackOrderNone", (function() { return fn })), e.d(n, "stackOrderReverse", (function() { return En }));
        const r = Math.PI,
            i = 2 * r,
            o = i - 1e-6;

        function u() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

        function a() { return new u }
        u.prototype = a.prototype = {
            constructor: u,
            moveTo: function(t, n) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) },
            closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") },
            lineTo: function(t, n) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n) },
            quadraticCurveTo: function(t, n, e, r) { this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r) },
            bezierCurveTo: function(t, n, e, r, i, o) { this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) },
            arcTo: function(t, n, e, i, o) {
                t = +t, n = +n, e = +e, i = +i, o = +o;
                var u = this._x1,
                    a = this._y1,
                    s = e - t,
                    c = i - n,
                    l = u - t,
                    f = a - n,
                    h = l * l + f * f;
                if (o < 0) throw new Error("negative radius: " + o);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (h > 1e-6)
                    if (Math.abs(f * s - c * l) > 1e-6 && o) {
                        var p = e - u,
                            d = i - a,
                            y = s * s + c * c,
                            v = p * p + d * d,
                            g = Math.sqrt(y),
                            _ = Math.sqrt(h),
                            m = o * Math.tan((r - Math.acos((y + h - v) / (2 * g * _))) / 2),
                            x = m / _,
                            w = m / g;
                        Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * l) + "," + (n + x * f)), this._ += "A" + o + "," + o + ",0,0," + +(f * p > l * d) + "," + (this._x1 = t + w * s) + "," + (this._y1 = n + w * c)
                    } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else;
            },
            arc: function(t, n, e, u, a, s) {
                t = +t, n = +n, s = !!s;
                var c = (e = +e) * Math.cos(u),
                    l = e * Math.sin(u),
                    f = t + c,
                    h = n + l,
                    p = 1 ^ s,
                    d = s ? u - a : a - u;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + f + "," + h : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + f + "," + h), e && (d < 0 && (d = d % i + i), d > o ? this._ += "A" + e + "," + e + ",0,1," + p + "," + (t - c) + "," + (n - l) + "A" + e + "," + e + ",0,1," + p + "," + (this._x1 = f) + "," + (this._y1 = h) : d > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(d >= r) + "," + p + "," + (this._x1 = t + e * Math.cos(a)) + "," + (this._y1 = n + e * Math.sin(a))))
            },
            rect: function(t, n, e, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z" },
            toString: function() { return this._ }
        };
        var s = a,
            c = function(t) { return function() { return t } },
            l = Math.abs,
            f = Math.atan2,
            h = Math.cos,
            p = Math.max,
            d = Math.min,
            y = Math.sin,
            v = Math.sqrt,
            g = Math.PI,
            _ = g / 2,
            m = 2 * g;

        function x(t) { return t > 1 ? 0 : t < -1 ? g : Math.acos(t) }

        function w(t) { return t >= 1 ? _ : t <= -1 ? -_ : Math.asin(t) }

        function b(t) { return t.innerRadius }

        function M(t) { return t.outerRadius }

        function T(t) { return t.startAngle }

        function E(t) { return t.endAngle }

        function A(t) { return t && t.padAngle }

        function O(t, n, e, r, i, o, u, a) {
            var s = e - t,
                c = r - n,
                l = u - i,
                f = a - o,
                h = f * s - l * c;
            if (!(h * h < 1e-12)) return [t + (h = (l * (n - o) - f * (t - i)) / h) * s, n + h * c]
        }

        function k(t, n, e, r, i, o, u) {
            var a = t - e,
                s = n - r,
                c = (u ? o : -o) / v(a * a + s * s),
                l = c * s,
                f = -c * a,
                h = t + l,
                d = n + f,
                y = e + l,
                g = r + f,
                _ = (h + y) / 2,
                m = (d + g) / 2,
                x = y - h,
                w = g - d,
                b = x * x + w * w,
                M = i - o,
                T = h * g - y * d,
                E = (w < 0 ? -1 : 1) * v(p(0, M * M * b - T * T)),
                A = (T * w - x * E) / b,
                O = (-T * x - w * E) / b,
                k = (T * w + x * E) / b,
                N = (-T * x + w * E) / b,
                S = A - _,
                P = O - m,
                I = k - _,
                L = N - m;
            return S * S + P * P > I * I + L * L && (A = k, O = N), { cx: A, cy: O, x01: -l, y01: -f, x11: A * (i / M - 1), y11: O * (i / M - 1) }
        }
        var N = function() {
                var t = b,
                    n = M,
                    e = c(0),
                    r = null,
                    i = T,
                    o = E,
                    u = A,
                    a = null;

                function p() {
                    var c, p, b = +t.apply(this, arguments),
                        M = +n.apply(this, arguments),
                        T = i.apply(this, arguments) - _,
                        E = o.apply(this, arguments) - _,
                        A = l(E - T),
                        N = E > T;
                    if (a || (a = c = s()), M < b && (p = M, M = b, b = p), M > 1e-12)
                        if (A > m - 1e-12) a.moveTo(M * h(T), M * y(T)), a.arc(0, 0, M, T, E, !N), b > 1e-12 && (a.moveTo(b * h(E), b * y(E)), a.arc(0, 0, b, E, T, N));
                        else {
                            var S, P, I = T,
                                L = E,
                                j = T,
                                C = E,
                                R = A,
                                D = A,
                                U = u.apply(this, arguments) / 2,
                                Y = U > 1e-12 && (r ? +r.apply(this, arguments) : v(b * b + M * M)),
                                H = d(l(M - b) / 2, +e.apply(this, arguments)),
                                F = H,
                                z = H;
                            if (Y > 1e-12) {
                                var B = w(Y / b * y(U)),
                                    q = w(Y / M * y(U));
                                (R -= 2 * B) > 1e-12 ? (j += B *= N ? 1 : -1, C -= B) : (R = 0, j = C = (T + E) / 2), (D -= 2 * q) > 1e-12 ? (I += q *= N ? 1 : -1, L -= q) : (D = 0, I = L = (T + E) / 2)
                            }
                            var X = M * h(I),
                                V = M * y(I),
                                W = b * h(C),
                                $ = b * y(C);
                            if (H > 1e-12) {
                                var G, Z = M * h(L),
                                    Q = M * y(L),
                                    J = b * h(j),
                                    K = b * y(j);
                                if (A < g && (G = O(X, V, J, K, Z, Q, W, $))) {
                                    var tt = X - G[0],
                                        nt = V - G[1],
                                        et = Z - G[0],
                                        rt = Q - G[1],
                                        it = 1 / y(x((tt * et + nt * rt) / (v(tt * tt + nt * nt) * v(et * et + rt * rt))) / 2),
                                        ot = v(G[0] * G[0] + G[1] * G[1]);
                                    F = d(H, (b - ot) / (it - 1)), z = d(H, (M - ot) / (it + 1))
                                }
                            }
                            D > 1e-12 ? z > 1e-12 ? (S = k(J, K, X, V, M, z, N), P = k(Z, Q, W, $, M, z, N), a.moveTo(S.cx + S.x01, S.cy + S.y01), z < H ? a.arc(S.cx, S.cy, z, f(S.y01, S.x01), f(P.y01, P.x01), !N) : (a.arc(S.cx, S.cy, z, f(S.y01, S.x01), f(S.y11, S.x11), !N), a.arc(0, 0, M, f(S.cy + S.y11, S.cx + S.x11), f(P.cy + P.y11, P.cx + P.x11), !N), a.arc(P.cx, P.cy, z, f(P.y11, P.x11), f(P.y01, P.x01), !N))) : (a.moveTo(X, V), a.arc(0, 0, M, I, L, !N)) : a.moveTo(X, V), b > 1e-12 && R > 1e-12 ? F > 1e-12 ? (S = k(W, $, Z, Q, b, -F, N), P = k(X, V, J, K, b, -F, N), a.lineTo(S.cx + S.x01, S.cy + S.y01), F < H ? a.arc(S.cx, S.cy, F, f(S.y01, S.x01), f(P.y01, P.x01), !N) : (a.arc(S.cx, S.cy, F, f(S.y01, S.x01), f(S.y11, S.x11), !N), a.arc(0, 0, b, f(S.cy + S.y11, S.cx + S.x11), f(P.cy + P.y11, P.cx + P.x11), N), a.arc(P.cx, P.cy, F, f(P.y11, P.x11), f(P.y01, P.x01), !N))) : a.arc(0, 0, b, C, j, N) : a.lineTo(W, $)
                        }
                    else a.moveTo(0, 0);
                    if (a.closePath(), c) return a = null, c + "" || null
                }
                return p.centroid = function() {
                    var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - g / 2;
                    return [h(r) * e, y(r) * e]
                }, p.innerRadius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(+n), p) : t }, p.outerRadius = function(t) { return arguments.length ? (n = "function" == typeof t ? t : c(+t), p) : n }, p.cornerRadius = function(t) { return arguments.length ? (e = "function" == typeof t ? t : c(+t), p) : e }, p.padRadius = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : c(+t), p) : r }, p.startAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : c(+t), p) : i }, p.endAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : c(+t), p) : o }, p.padAngle = function(t) { return arguments.length ? (u = "function" == typeof t ? t : c(+t), p) : u }, p.context = function(t) { return arguments.length ? (a = null == t ? null : t, p) : a }, p
            },
            S = Array.prototype.slice,
            P = function(t) { return "object" == typeof t && "length" in t ? t : Array.from(t) };

        function I(t) { this._context = t }
        I.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._point = 0 },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        };
        var L = function(t) { return new I(t) };

        function j(t) { return t[0] }

        function C(t) { return t[1] }
        var R = function(t, n) {
                var e = c(!0),
                    r = null,
                    i = L,
                    o = null;

                function u(u) {
                    var a, c, l, f = (u = P(u)).length,
                        h = !1;
                    for (null == r && (o = i(l = s())), a = 0; a <= f; ++a) !(a < f && e(c = u[a], a, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(c, a, u), +n(c, a, u));
                    if (l) return o = null, l + "" || null
                }
                return t = "function" == typeof t ? t : void 0 === t ? j : c(t), n = "function" == typeof n ? n : void 0 === n ? C : c(n), u.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(+n), u) : t }, u.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : c(+t), u) : n }, u.defined = function(t) { return arguments.length ? (e = "function" == typeof t ? t : c(!!t), u) : e }, u.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), u) : i }, u.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), u) : r }, u
            },
            D = function(t, n, e) {
                var r = null,
                    i = c(!0),
                    o = null,
                    u = L,
                    a = null;

                function l(c) {
                    var l, f, h, p, d, y = (c = P(c)).length,
                        v = !1,
                        g = new Array(y),
                        _ = new Array(y);
                    for (null == o && (a = u(d = s())), l = 0; l <= y; ++l) {
                        if (!(l < y && i(p = c[l], l, c)) === v)
                            if (v = !v) f = l, a.areaStart(), a.lineStart();
                            else {
                                for (a.lineEnd(), a.lineStart(), h = l - 1; h >= f; --h) a.point(g[h], _[h]);
                                a.lineEnd(), a.areaEnd()
                            }
                        v && (g[l] = +t(p, l, c), _[l] = +n(p, l, c), a.point(r ? +r(p, l, c) : g[l], e ? +e(p, l, c) : _[l]))
                    }
                    if (d) return a = null, d + "" || null
                }

                function f() { return R().defined(i).curve(u).context(o) }
                return t = "function" == typeof t ? t : void 0 === t ? j : c(+t), n = "function" == typeof n ? n : c(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? C : c(+e), l.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(+n), r = null, l) : t }, l.x0 = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(+n), l) : t }, l.x1 = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : c(+t), l) : r }, l.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : c(+t), e = null, l) : n }, l.y0 = function(t) { return arguments.length ? (n = "function" == typeof t ? t : c(+t), l) : n }, l.y1 = function(t) { return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : c(+t), l) : e }, l.lineX0 = l.lineY0 = function() { return f().x(t).y(n) }, l.lineY1 = function() { return f().x(t).y(e) }, l.lineX1 = function() { return f().x(r).y(n) }, l.defined = function(t) { return arguments.length ? (i = "function" == typeof t ? t : c(!!t), l) : i }, l.curve = function(t) { return arguments.length ? (u = t, null != o && (a = u(o)), l) : u }, l.context = function(t) { return arguments.length ? (null == t ? o = a = null : a = u(o = t), l) : o }, l
            },
            U = function(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN },
            Y = function(t) { return t },
            H = function() {
                var t = Y,
                    n = U,
                    e = null,
                    r = c(0),
                    i = c(m),
                    o = c(0);

                function u(u) {
                    var a, s, c, l, f, h = (u = P(u)).length,
                        p = 0,
                        d = new Array(h),
                        y = new Array(h),
                        v = +r.apply(this, arguments),
                        g = Math.min(m, Math.max(-m, i.apply(this, arguments) - v)),
                        _ = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
                        x = _ * (g < 0 ? -1 : 1);
                    for (a = 0; a < h; ++a)(f = y[d[a] = a] = +t(u[a], a, u)) > 0 && (p += f);
                    for (null != n ? d.sort((function(t, e) { return n(y[t], y[e]) })) : null != e && d.sort((function(t, n) { return e(u[t], u[n]) })), a = 0, c = p ? (g - h * x) / p : 0; a < h; ++a, v = l) s = d[a], l = v + ((f = y[s]) > 0 ? f * c : 0) + x, y[s] = { data: u[s], index: a, value: f, startAngle: v, endAngle: l, padAngle: _ };
                    return y
                }
                return u.value = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(+n), u) : t }, u.sortValues = function(t) { return arguments.length ? (n = t, e = null, u) : n }, u.sort = function(t) { return arguments.length ? (e = t, n = null, u) : e }, u.startAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : c(+t), u) : r }, u.endAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : c(+t), u) : i }, u.padAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : c(+t), u) : o }, u
            },
            F = B(L);

        function z(t) { this._curve = t }

        function B(t) {
            function n(n) { return new z(t(n)) }
            return n._curve = t, n
        }

        function q(t) { var n = t.curve; return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) { return arguments.length ? n(B(t)) : n()._curve }, t }
        z.prototype = { areaStart: function() { this._curve.areaStart() }, areaEnd: function() { this._curve.areaEnd() }, lineStart: function() { this._curve.lineStart() }, lineEnd: function() { this._curve.lineEnd() }, point: function(t, n) { this._curve.point(n * Math.sin(t), n * -Math.cos(t)) } };
        var X = function() { return q(R().curve(F)) },
            V = function() {
                var t = D().curve(F),
                    n = t.curve,
                    e = t.lineX0,
                    r = t.lineX1,
                    i = t.lineY0,
                    o = t.lineY1;
                return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() { return q(e()) }, delete t.lineX0, t.lineEndAngle = function() { return q(r()) }, delete t.lineX1, t.lineInnerRadius = function() { return q(i()) }, delete t.lineY0, t.lineOuterRadius = function() { return q(o()) }, delete t.lineY1, t.curve = function(t) { return arguments.length ? n(B(t)) : n()._curve }, t
            },
            W = function(t, n) { return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)] };

        function $(t) { return t.source }

        function G(t) { return t.target }

        function Z(t) {
            var n = $,
                e = G,
                r = j,
                i = C,
                o = null;

            function u() {
                var u, a = S.call(arguments),
                    c = n.apply(this, a),
                    l = e.apply(this, a);
                if (o || (o = u = s()), t(o, +r.apply(this, (a[0] = c, a)), +i.apply(this, a), +r.apply(this, (a[0] = l, a)), +i.apply(this, a)), u) return o = null, u + "" || null
            }
            return u.source = function(t) { return arguments.length ? (n = t, u) : n }, u.target = function(t) { return arguments.length ? (e = t, u) : e }, u.x = function(t) { return arguments.length ? (r = "function" == typeof t ? t : c(+t), u) : r }, u.y = function(t) { return arguments.length ? (i = "function" == typeof t ? t : c(+t), u) : i }, u.context = function(t) { return arguments.length ? (o = null == t ? null : t, u) : o }, u
        }

        function Q(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i) }

        function J(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i) }

        function K(t, n, e, r, i) {
            var o = W(n, e),
                u = W(n, e = (e + i) / 2),
                a = W(r, e),
                s = W(r, i);
            t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], s[0], s[1])
        }

        function tt() { return Z(Q) }

        function nt() { return Z(J) }

        function et() { var t = Z(K); return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t }
        var rt = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / g);
                    t.moveTo(e, 0), t.arc(0, 0, e, 0, m)
                }
            },
            it = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / 5) / 2;
                    t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                }
            },
            ot = Math.sqrt(1 / 3),
            ut = 2 * ot,
            at = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / ut),
                        r = e * ot;
                    t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                }
            },
            st = Math.sin(g / 10) / Math.sin(7 * g / 10),
            ct = Math.sin(m / 10) * st,
            lt = -Math.cos(m / 10) * st,
            ft = {
                draw: function(t, n) {
                    var e = Math.sqrt(.8908130915292852 * n),
                        r = ct * e,
                        i = lt * e;
                    t.moveTo(0, -e), t.lineTo(r, i);
                    for (var o = 1; o < 5; ++o) {
                        var u = m * o / 5,
                            a = Math.cos(u),
                            s = Math.sin(u);
                        t.lineTo(s * e, -a * e), t.lineTo(a * r - s * i, s * r + a * i)
                    }
                    t.closePath()
                }
            },
            ht = {
                draw: function(t, n) {
                    var e = Math.sqrt(n),
                        r = -e / 2;
                    t.rect(r, r, e, e)
                }
            },
            pt = Math.sqrt(3),
            dt = {
                draw: function(t, n) {
                    var e = -Math.sqrt(n / (3 * pt));
                    t.moveTo(0, 2 * e), t.lineTo(-pt * e, -e), t.lineTo(pt * e, -e), t.closePath()
                }
            },
            yt = Math.sqrt(3) / 2,
            vt = 1 / Math.sqrt(12),
            gt = 3 * (vt / 2 + 1),
            _t = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / gt),
                        r = e / 2,
                        i = e * vt,
                        o = r,
                        u = e * vt + e,
                        a = -o,
                        s = u;
                    t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, s), t.lineTo(-.5 * r - yt * i, yt * r + -.5 * i), t.lineTo(-.5 * o - yt * u, yt * o + -.5 * u), t.lineTo(-.5 * a - yt * s, yt * a + -.5 * s), t.lineTo(-.5 * r + yt * i, -.5 * i - yt * r), t.lineTo(-.5 * o + yt * u, -.5 * u - yt * o), t.lineTo(-.5 * a + yt * s, -.5 * s - yt * a), t.closePath()
                }
            },
            mt = [rt, it, at, ht, ft, dt, _t],
            xt = function(t, n) {
                var e = null;

                function r() { var r; if (e || (e = r = s()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null }
                return t = "function" == typeof t ? t : c(t || rt), n = "function" == typeof n ? n : c(void 0 === n ? 64 : +n), r.type = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(n), r) : t }, r.size = function(t) { return arguments.length ? (n = "function" == typeof t ? t : c(+t), r) : n }, r.context = function(t) { return arguments.length ? (e = null == t ? null : t, r) : e }, r
            },
            wt = function() {};

        function bt(t, n, e) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6) }

        function Mt(t) { this._context = t }
        Mt.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 3:
                        bt(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        bt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Tt = function(t) { return new Mt(t) };

        function Et(t) { this._context = t }
        Et.prototype = {
            areaStart: wt,
            areaEnd: wt,
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        bt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var At = function(t) { return new Et(t) };

        function Ot(t) { this._context = t }
        Ot.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                            r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        bt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var kt = function(t) { return new Ot(t) };

        function Nt(t, n) { this._basis = new Mt(t), this._beta = n }
        Nt.prototype = {
            lineStart: function() { this._x = [], this._y = [], this._basis.lineStart() },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length - 1;
                if (e > 0)
                    for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, s = -1; ++s <= e;) r = s / e, this._basis.point(this._beta * t[s] + (1 - this._beta) * (i + r * u), this._beta * n[s] + (1 - this._beta) * (o + r * a));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function(t, n) { this._x.push(+t), this._y.push(+n) }
        };
        var St = function t(n) {
            function e(t) { return 1 === n ? new Mt(t) : new Nt(t, n) }
            return e.beta = function(n) { return t(+n) }, e
        }(.85);

        function Pt(t, n, e) { t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2) }

        function It(t, n) { this._context = t, this._k = (1 - n) / 6 }
        It.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        Pt(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        Pt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Lt = function t(n) {
            function e(t) { return new It(t, n) }
            return e.tension = function(n) { return t(+n) }, e
        }(0);

        function jt(t, n) { this._context = t, this._k = (1 - n) / 6 }
        jt.prototype = {
            areaStart: wt,
            areaEnd: wt,
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Pt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Ct = function t(n) {
            function e(t) { return new jt(t, n) }
            return e.tension = function(n) { return t(+n) }, e
        }(0);

        function Rt(t, n) { this._context = t, this._k = (1 - n) / 6 }
        Rt.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Pt(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Dt = function t(n) {
            function e(t) { return new Rt(t, n) }
            return e.tension = function(n) { return t(+n) }, e
        }(0);

        function Ut(t, n, e) {
            var r = t._x1,
                i = t._y1,
                o = t._x2,
                u = t._y2;
            if (t._l01_a > 1e-12) {
                var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                    s = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
            }
            if (t._l23_a > 1e-12) {
                var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                    l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l, u = (u * c + t._y1 * t._l23_2a - e * t._l12_2a) / l
            }
            t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
        }

        function Yt(t, n) { this._context = t, this._alpha = n }
        Yt.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        Ut(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Ht = function t(n) {
            function e(t) { return n ? new Yt(t, n) : new It(t, 0) }
            return e.alpha = function(n) { return t(+n) }, e
        }(.5);

        function Ft(t, n) { this._context = t, this._alpha = n }
        Ft.prototype = {
            areaStart: wt,
            areaEnd: wt,
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Ut(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var zt = function t(n) {
            function e(t) { return n ? new Ft(t, n) : new jt(t, 0) }
            return e.alpha = function(n) { return t(+n) }, e
        }(.5);

        function Bt(t, n) { this._context = t, this._alpha = n }
        Bt.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Ut(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var qt = function t(n) {
            function e(t) { return n ? new Bt(t, n) : new Rt(t, 0) }
            return e.alpha = function(n) { return t(+n) }, e
        }(.5);

        function Xt(t) { this._context = t }
        Xt.prototype = { areaStart: wt, areaEnd: wt, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, n) { t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n)) } };
        var Vt = function(t) { return new Xt(t) };

        function Wt(t) { return t < 0 ? -1 : 1 }

        function $t(t, n, e) {
            var r = t._x1 - t._x0,
                i = n - t._x1,
                o = (t._y1 - t._y0) / (r || i < 0 && -0),
                u = (e - t._y1) / (i || r < 0 && -0),
                a = (o * i + u * r) / (r + i);
            return (Wt(o) + Wt(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
        }

        function Gt(t, n) { var e = t._x1 - t._x0; return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n }

        function Zt(t, n, e) {
            var r = t._x0,
                i = t._y0,
                o = t._x1,
                u = t._y1,
                a = (o - r) / 3;
            t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
        }

        function Qt(t) { this._context = t }

        function Jt(t) { this._context = new Kt(t) }

        function Kt(t) { this._context = t }

        function tn(t) { return new Qt(t) }

        function nn(t) { return new Jt(t) }

        function en(t) { this._context = t }

        function rn(t) {
            var n, e, r = t.length - 1,
                i = new Array(r),
                o = new Array(r),
                u = new Array(r);
            for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
            for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
            return [i, o]
        }
        Qt.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        Zt(this, this._t0, Gt(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                var e = NaN;
                if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, Zt(this, Gt(this, e = $t(this, t, n)), e);
                            break;
                        default:
                            Zt(this, this._t0, e = $t(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (Jt.prototype = Object.create(Qt.prototype)).point = function(t, n) { Qt.prototype.point.call(this, n, t) }, Kt.prototype = { moveTo: function(t, n) { this._context.moveTo(n, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, n) { this._context.lineTo(n, t) }, bezierCurveTo: function(t, n, e, r, i, o) { this._context.bezierCurveTo(n, t, r, e, o, i) } }, en.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x = [], this._y = [] },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length;
                if (e)
                    if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                    else
                        for (var r = rn(t), i = rn(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function(t, n) { this._x.push(+t), this._y.push(+n) }
        };
        var on = function(t) { return new en(t) };

        function un(t, n) { this._context = t, this._t = n }
        un.prototype = {
            areaStart: function() { this._line = 0 },
            areaEnd: function() { this._line = NaN },
            lineStart: function() { this._x = this._y = NaN, this._point = 0 },
            lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        };
        var an = function(t) { return new un(t, .5) };

        function sn(t) { return new un(t, 0) }

        function cn(t) { return new un(t, 1) }
        var ln = function(t, n) {
                if ((i = t.length) > 1)
                    for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
                        for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
            },
            fn = function(t) { for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n; return e };

        function hn(t, n) { return t[n] }

        function pn(t) { const n = []; return n.key = t, n }
        var dn = function() {
                var t = c([]),
                    n = fn,
                    e = ln,
                    r = hn;

                function i(i) {
                    var o, u, a = Array.from(t.apply(this, arguments), pn),
                        s = a.length,
                        c = -1;
                    for (const t of i)
                        for (o = 0, ++c; o < s; ++o)(a[o][c] = [0, +r(t, a[o].key, c, i)]).data = t;
                    for (o = 0, u = P(n(a)); o < s; ++o) a[u[o]].index = o;
                    return e(a, u), a
                }
                return i.keys = function(n) { return arguments.length ? (t = "function" == typeof n ? n : c(Array.from(n)), i) : t }, i.value = function(t) { return arguments.length ? (r = "function" == typeof t ? t : c(+t), i) : r }, i.order = function(t) { return arguments.length ? (n = null == t ? fn : "function" == typeof t ? t : c(Array.from(t)), i) : n }, i.offset = function(t) { return arguments.length ? (e = null == t ? ln : t, i) : e }, i
            },
            yn = function(t, n) {
                if ((r = t.length) > 0) {
                    for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                        for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                        if (i)
                            for (e = 0; e < r; ++e) t[e][o][1] /= i
                    }
                    ln(t, n)
                }
            },
            vn = function(t, n) {
                if ((a = t.length) > 0)
                    for (var e, r, i, o, u, a, s = 0, c = t[n[0]].length; s < c; ++s)
                        for (o = u = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][s])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : (r[0] = 0, r[1] = i)
            },
            gn = function(t, n) {
                if ((e = t.length) > 0) {
                    for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                        for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
                        i[r][1] += i[r][0] = -a / 2
                    }
                    ln(t, n)
                }
            },
            _n = function(t, n) {
                if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                    for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                        for (var a = 0, s = 0, c = 0; a < i; ++a) {
                            for (var l = t[n[a]], f = l[u][1] || 0, h = (f - (l[u - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
                                var d = t[n[p]];
                                h += (d[u][1] || 0) - (d[u - 1][1] || 0)
                            }
                            s += f, c += h * f
                        }
                        e[u - 1][1] += e[u - 1][0] = o, s && (o -= c / s)
                    }
                    e[u - 1][1] += e[u - 1][0] = o, ln(t, n)
                }
            },
            mn = function(t) { var n = t.map(xn); return fn(t).sort((function(t, e) { return n[t] - n[e] })) };

        function xn(t) { for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e); return r }
        var wn = function(t) { var n = t.map(bn); return fn(t).sort((function(t, e) { return n[t] - n[e] })) };

        function bn(t) { for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n); return e }
        var Mn = function(t) { return wn(t).reverse() },
            Tn = function(t) {
                var n, e, r = t.length,
                    i = t.map(bn),
                    o = mn(t),
                    u = 0,
                    a = 0,
                    s = [],
                    c = [];
                for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], s.push(e)) : (a += i[e], c.push(e));
                return c.reverse().concat(s)
            },
            En = function(t) { return fn(t).reverse() }
    }, function(t, n, e) {
        "use strict";
        var r = e(21);
        n.a = function(t) {
            var n = t.length;
            return function(e) {
                var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    o = t[(i + n - 1) % n],
                    u = t[i % n],
                    a = t[(i + 1) % n],
                    s = t[(i + 2) % n];
                return Object(r.a)((e - i / n) * n, o, u, a, s)
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(3),
            i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            o = new RegExp(i.source, "g");
        n.a = function(t, n) {
            var e, u, a, s = i.lastIndex = o.lastIndex = 0,
                c = -1,
                l = [],
                f = [];
            for (t += "", n += "";
                (e = i.exec(t)) && (u = o.exec(n));)(a = u.index) > s && (a = n.slice(s, a), l[c] ? l[c] += a : l[++c] = a), (e = e[0]) === (u = u[0]) ? l[c] ? l[c] += u : l[++c] = u : (l[++c] = null, f.push({ i: c, x: Object(r.a)(e, u) })), s = o.lastIndex;
            return s < n.length && (a = n.slice(s), l[c] ? l[c] += a : l[++c] = a), l.length < 2 ? f[0] ? function(t) { return function(n) { return t(n) + "" } }(f[0].x) : function(t) { return function() { return t } }(n) : (n = f.length, function(t) { for (var e, r = 0; r < n; ++r) l[(e = f[r]).i] = e.x(t); return l.join("") })
        }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t, n) {
            var e = new Date;
            return t = +t, n = +n,
                function(r) { return e.setTime(t * (1 - r) + n * r), e }
        }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return o }));
        var r = e(12),
            i = e(15);

        function o(t, n) {
            var e, i = n ? n.length : 0,
                o = t ? Math.min(i, t.length) : 0,
                u = new Array(o),
                a = new Array(i);
            for (e = 0; e < o; ++e) u[e] = Object(r.a)(t[e], n[e]);
            for (; e < i; ++e) a[e] = n[e];
            return function(t) { for (e = 0; e < o; ++e) a[e] = u[e](t); return a }
        }
        n.a = function(t, n) { return (Object(i.b)(n) ? i.a : o)(t, n) }
    }, function(t, n, e) {
        "use strict";
        var r = e(12);
        n.a = function(t, n) {
            var e, i = {},
                o = {};
            for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = Object(r.a)(t[e], n[e]) : o[e] = n[e];
            return function(t) { for (e in i) o[e] = i[e](t); return o }
        }
    }, function(t, n, e) {
        "use strict";

        function r() { return [] }
        n.a = function(t) { return null == t ? r : function() { return this.querySelectorAll(t) } }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() { return a }));
        var r = e(24);

        function i(t) { return function() { this.style.removeProperty(t) } }

        function o(t, n, e) { return function() { this.style.setProperty(t, n, e) } }

        function u(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function a(t, n) { return t.style.getPropertyValue(n) || Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n) }
        n.a = function(t, n, e) { return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? u : o)(t, n, null == e ? "" : e)) : a(this.node(), t) }
    }, function(t, n, e) {
        "use strict";
        var r = e(7);
        n.a = function(t) {
            return "string" == typeof t ? new r.a([
                [document.querySelector(t)]
            ], [document.documentElement]) : new r.a([
                [t]
            ], r.c)
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(43);
        n.a = function(t, n) { if (t = Object(r.a)(t), void 0 === n && (n = t.currentTarget), n) { var e = n.ownerSVGElement || n; if (e.createSVGPoint) { var i = e.createSVGPoint(); return i.x = t.clientX, i.y = t.clientY, [(i = i.matrixTransform(n.getScreenCTM().inverse())).x, i.y] } if (n.getBoundingClientRect) { var o = n.getBoundingClientRect(); return [t.clientX - o.left - n.clientLeft, t.clientY - o.top - n.clientTop] } } return [t.pageX, t.pageY] }
    }, function(t, n, e) {
        "use strict";
        var r, i = e(6),
            o = e(20),
            u = e(10),
            a = function(t, n) {
                var e = Object(u.b)(t, n);
                if (!e) return t + "";
                var r = e[0],
                    i = e[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            },
            s = {
                "%": (t, n) => (100 * t).toFixed(n),
                b: t => Math.round(t).toString(2),
                c: t => t + "",
                d: u.a,
                e: (t, n) => t.toExponential(n),
                f: (t, n) => t.toFixed(n),
                g: (t, n) => t.toPrecision(n),
                o: t => Math.round(t).toString(8),
                p: (t, n) => a(100 * t, n),
                r: a,
                s: function(t, n) {
                    var e = Object(u.b)(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        o = e[1],
                        a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                        s = i.length;
                    return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Object(u.b)(t, Math.max(0, n + a - 1))[0]
                },
                X: t => Math.round(t).toString(16).toUpperCase(),
                x: t => Math.round(t).toString(16)
            },
            c = function(t) { return t },
            l = Array.prototype.map,
            f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        n.a = function(t) {
            var n, e, u = void 0 === t.grouping || void 0 === t.thousands ? c : (n = l.call(t.grouping, Number), e = t.thousands + "", function(t, r) { for (var i = t.length, o = [], u = 0, a = n[0], s = 0; i > 0 && a > 0 && (s + a + 1 > r && (a = Math.max(1, r - s)), o.push(t.substring(i -= a, i + a)), !((s += a + 1) > r));) a = n[u = (u + 1) % n.length]; return o.reverse().join(e) }),
                a = void 0 === t.currency ? "" : t.currency[0] + "",
                h = void 0 === t.currency ? "" : t.currency[1] + "",
                p = void 0 === t.decimal ? "." : t.decimal + "",
                d = void 0 === t.numerals ? c : function(t) { return function(n) { return n.replace(/[0-9]/g, (function(n) { return t[+n] })) } }(l.call(t.numerals, String)),
                y = void 0 === t.percent ? "%" : t.percent + "",
                v = void 0 === t.minus ? "−" : t.minus + "",
                g = void 0 === t.nan ? "NaN" : t.nan + "";

            function _(t) {
                var n = (t = Object(o.b)(t)).fill,
                    e = t.align,
                    i = t.sign,
                    c = t.symbol,
                    l = t.zero,
                    _ = t.width,
                    m = t.comma,
                    x = t.precision,
                    w = t.trim,
                    b = t.type;
                "n" === b ? (m = !0, b = "g") : s[b] || (void 0 === x && (x = 12), w = !0, b = "g"), (l || "0" === n && "=" === e) && (l = !0, n = "0", e = "=");
                var M = "$" === c ? a : "#" === c && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                    T = "$" === c ? h : /[%p]/.test(b) ? y : "",
                    E = s[b],
                    A = /[defgprs%]/.test(b);

                function O(t) {
                    var o, a, s, c = M,
                        h = T;
                    if ("c" === b) h = E(t) + h, t = "";
                    else {
                        var y = (t = +t) < 0 || 1 / t < 0;
                        if (t = isNaN(t) ? g : E(Math.abs(t), x), w && (t = function(t) {
                                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                    case ".":
                                        i = n = r;
                                        break;
                                    case "0":
                                        0 === i && (i = r), n = r;
                                        break;
                                    default:
                                        if (!+t[r]) break t;
                                        i > 0 && (i = 0)
                                }
                                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                            }(t)), y && 0 == +t && "+" !== i && (y = !1), c = (y ? "(" === i ? i : v : "-" === i || "(" === i ? "" : i) + c, h = ("s" === b ? f[8 + r / 3] : "") + h + (y && "(" === i ? ")" : ""), A)
                            for (o = -1, a = t.length; ++o < a;)
                                if (48 > (s = t.charCodeAt(o)) || s > 57) { h = (46 === s ? p + t.slice(o + 1) : t.slice(o)) + h, t = t.slice(0, o); break }
                    }
                    m && !l && (t = u(t, 1 / 0));
                    var O = c.length + t.length + h.length,
                        k = O < _ ? new Array(_ - O + 1).join(n) : "";
                    switch (m && l && (t = u(k + t, k.length ? _ - h.length : 1 / 0), k = ""), e) {
                        case "<":
                            t = c + t + h + k;
                            break;
                        case "=":
                            t = c + k + t + h;
                            break;
                        case "^":
                            t = k.slice(0, O = k.length >> 1) + c + t + h + k.slice(O);
                            break;
                        default:
                            t = k + c + t + h
                    }
                    return d(t)
                }
                return x = void 0 === x ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), O.toString = function() { return t + "" }, O
            }
            return {
                format: _,
                formatPrefix: function(t, n) {
                    var e = _(((t = Object(o.b)(t)).type = "f", t)),
                        r = 3 * Math.max(-8, Math.min(8, Math.floor(Object(i.a)(n) / 3))),
                        u = Math.pow(10, -r),
                        a = f[8 + r / 3];
                    return function(t) { return e(u * t) + a }
                }
            }
        }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t) { let n; for (; n = t.sourceEvent;) t = n; return t }
    }, function(t, n, e) {
        "use strict";
        var r = e(106);
        t.exports = Number.isSafeInteger || function(t) { return "number" == typeof t && t == t && t !== 1 / 0 && t !== -1 / 0 && parseInt(t, 10) === t && Math.abs(t) <= r }
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(30);
        e.d(n, "formatDefaultLocale", (function() { return r.a })), e.d(n, "format", (function() { return r.b })), e.d(n, "formatPrefix", (function() { return r.c }));
        var i = e(42);
        e.d(n, "formatLocale", (function() { return i.a }));
        var o = e(20);
        e.d(n, "formatSpecifier", (function() { return o.b })), e.d(n, "FormatSpecifier", (function() { return o.a }));
        var u = e(53);
        e.d(n, "precisionFixed", (function() { return u.a }));
        var a = e(54);
        e.d(n, "precisionPrefix", (function() { return a.a }));
        var s = e(55);
        e.d(n, "precisionRound", (function() { return s.a }))
    }, function(t, n) { t.exports = function(t, n, e) { return n < e ? t < n ? n : t > e ? e : t : t < e ? e : t > n ? n : t } }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 }), n.scatter = n.interval = n.polyline = void 0;
        const i = r(e(111));
        n.polyline = i.default;
        const o = r(e(115));
        n.interval = o.default;
        const u = r(e(116));
        n.scatter = u.default
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = r(e(31)),
            o = e(112),
            u = { interval: o.interval, builtIn: o.builtIn };
        n.default = function(t, n) {
            const e = function(t, n) { const e = n.range || [-1 / 0, 1 / 0]; return [Math.max(t.domain()[0], e[0]), Math.min(t.domain()[1], e[1])] }(t.meta.xScale, n),
                r = (0, u[n.sampler])(t, n, e, n.nSamples || Math.min(i.default.MAX_ITERATIONS, i.default.DEFAULT_ITERATIONS || 2 * t.meta.width));
            return t.emit("eval", r, n.index, n.isHelper), r
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = function(t) { return "graphType" in t || (t.graphType = "interval"), "sampler" in t || (t.sampler = "interval" !== t.graphType ? "builtIn" : "interval"), "fnType" in t || (t.fnType = "linear"), t }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return c })), e.d(n, "b", (function() { return l }));
        var r, i = e(3),
            o = 180 / Math.PI,
            u = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
            a = function(t, n, e, r, i, u) { var a, s, c; return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), { translateX: i, translateY: u, rotate: Math.atan2(n, t) * o, skewX: Math.atan(c) * o, scaleX: a, scaleY: s } };

        function s(t, n, e, r) {
            function o(t) { return t.length ? t.pop() + " " : "" }
            return function(u, a) {
                var s = [],
                    c = [];
                return u = t(u), a = t(a),
                    function(t, r, o, u, a, s) {
                        if (t !== o || r !== u) {
                            var c = a.push("translate(", null, n, null, e);
                            s.push({ i: c - 4, x: Object(i.a)(t, o) }, { i: c - 2, x: Object(i.a)(r, u) })
                        } else(o || u) && a.push("translate(" + o + n + u + e)
                    }(u.translateX, u.translateY, a.translateX, a.translateY, s, c),
                    function(t, n, e, u) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), u.push({ i: e.push(o(e) + "rotate(", null, r) - 2, x: Object(i.a)(t, n) })) : n && e.push(o(e) + "rotate(" + n + r) }(u.rotate, a.rotate, s, c),
                    function(t, n, e, u) { t !== n ? u.push({ i: e.push(o(e) + "skewX(", null, r) - 2, x: Object(i.a)(t, n) }) : n && e.push(o(e) + "skewX(" + n + r) }(u.skewX, a.skewX, s, c),
                    function(t, n, e, r, u, a) {
                        if (t !== e || n !== r) {
                            var s = u.push(o(u) + "scale(", null, ",", null, ")");
                            a.push({ i: s - 4, x: Object(i.a)(t, e) }, { i: s - 2, x: Object(i.a)(n, r) })
                        } else 1 === e && 1 === r || u.push(o(u) + "scale(" + e + "," + r + ")")
                    }(u.scaleX, u.scaleY, a.scaleX, a.scaleY, s, c), u = a = null,
                    function(t) { for (var n, e = -1, r = c.length; ++e < r;) s[(n = c[e]).i] = n.x(t); return s.join("") }
            }
        }
        var c = s((function(t) { const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + ""); return n.isIdentity ? u : a(n.a, n.b, n.c, n.d, n.e, n.f) }), "px, ", "px)", "deg)"),
            l = s((function(t) { return null == t ? u : (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "g")), r.setAttribute("transform", t), (t = r.transform.baseVal.consolidate()) ? (t = t.matrix, a(t.a, t.b, t.c, t.d, t.e, t.f)) : u) }), ", ", ")", ")")
    }, function(t, n, e) {
        "use strict";
        var r = e(101),
            i = Math.pow(2, -1074);
        t.exports = function(t, n) {
            if (isNaN(t) || isNaN(n)) return NaN;
            if (t === n) return t;
            if (0 === t) return n < 0 ? -i : i;
            var e = r.hi(t),
                o = r.lo(t);
            n > t == t > 0 ? o === -1 >>> 0 ? (e += 1, o = 0) : o += 1 : 0 === o ? (o = -1 >>> 0, e -= 1) : o -= 1;
            return r.pack(o, e)
        }
    }, , function(t, n, e) {
        "use strict";
        var r = e(6);
        n.a = function(t) { return Math.max(0, -Object(r.a)(Math.abs(t))) }
    }, function(t, n, e) {
        "use strict";
        var r = e(6);
        n.a = function(t, n) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))) - Object(r.a)(Math.abs(t))) }
    }, function(t, n, e) {
        "use strict";
        var r = e(6);
        n.a = function(t, n) { return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Object(r.a)(n) - Object(r.a)(t)) + 1 }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t, n) {
            return t = +t, n = +n,
                function(e) { return Math.round(t * (1 - e) + n * e) }
        }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return i }));
        var r = e(12);

        function i(t, n) { void 0 === n && (n = t, t = r.a); for (var e = 0, i = n.length - 1, o = n[0], u = new Array(i < 0 ? 0 : i); e < i;) u[e] = t(o, o = n[++e]); return function(t) { var n = Math.max(0, Math.min(i - 1, Math.floor(t *= i))); return u[n](t - n) } }
    }, function(t, n, e) {
        "use strict";

        function r(t) { return ((t = Math.exp(t)) + 1 / t) / 2 }
        n.a = function t(n, e, i) {
            function o(t, o) {
                var u, a, s = t[0],
                    c = t[1],
                    l = t[2],
                    f = o[0],
                    h = o[1],
                    p = o[2],
                    d = f - s,
                    y = h - c,
                    v = d * d + y * y;
                if (v < 1e-12) a = Math.log(p / l) / n, u = function(t) { return [s + t * d, c + t * y, l * Math.exp(n * t * a)] };
                else {
                    var g = Math.sqrt(v),
                        _ = (p * p - l * l + i * v) / (2 * l * e * g),
                        m = (p * p - l * l - i * v) / (2 * p * e * g),
                        x = Math.log(Math.sqrt(_ * _ + 1) - _),
                        w = Math.log(Math.sqrt(m * m + 1) - m);
                    a = (w - x) / n, u = function(t) {
                        var i, o = t * a,
                            u = r(x),
                            f = l / (e * g) * (u * (i = n * o + x, ((i = Math.exp(2 * i)) - 1) / (i + 1)) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(x));
                        return [s + f * d, c + f * y, l * u / r(n * o + x)]
                    }
                }
                return u.duration = 1e3 * a * n / Math.SQRT2, u
            }
            return o.rho = function(n) {
                var e = Math.max(.001, +n),
                    r = e * e;
                return t(e, r, r * r)
            }, o
        }(Math.SQRT2, 2, 4)
    }, function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() { return y }));
        var r = e(4),
            i = e(1),
            o = e(27),
            u = -.14861,
            a = 1.78277,
            s = -.29227,
            c = -.90649,
            l = 1.97294,
            f = l * c,
            h = l * a,
            p = a * s - c * u;

        function d(t) {
            if (t instanceof v) return new v(t.h, t.s, t.l, t.opacity);
            t instanceof i.b || (t = Object(i.h)(t));
            var n = t.r / 255,
                e = t.g / 255,
                r = t.b / 255,
                u = (p * r + f * n - h * e) / (p + f - h),
                a = r - u,
                d = (l * (e - u) - s * a) / c,
                y = Math.sqrt(d * d + a * a) / (l * u * (1 - u)),
                g = y ? Math.atan2(d, a) * o.a - 120 : NaN;
            return new v(g < 0 ? g + 360 : g, y, u, t.opacity)
        }

        function y(t, n, e, r) { return 1 === arguments.length ? d(t) : new v(t, n, e, null == r ? 1 : r) }

        function v(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }
        Object(r.a)(v, y, Object(r.b)(i.a, {
            brighter: function(t) { return t = null == t ? i.c : Math.pow(i.c, t), new v(this.h, this.s, this.l * t, this.opacity) },
            darker: function(t) { return t = null == t ? i.d : Math.pow(i.d, t), new v(this.h, this.s, this.l * t, this.opacity) },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * o.b,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    r = Math.cos(t),
                    f = Math.sin(t);
                return new i.b(255 * (n + e * (u * r + a * f)), 255 * (n + e * (s * r + c * f)), 255 * (n + e * (l * r)), this.opacity)
            }
        }))
    }, function(t, n) {
        var e;
        e = function() { return this }();
        try { e = e || new Function("return this")() } catch (t) { "object" == typeof window && (e = window) }
        t.exports = e
    }, function(t, n, e) {
        "use strict";
        t.exports = e(85)
    }, function(t, n, e) {
        "use strict";
        t.exports.Lexer = e(63), t.exports.Parser = e(86), t.exports.nodeTypes = e(87)
    }, function(t, n, e) {
        var r = e(64),
            i = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
            o = { ",": !0, "(": !0, ")": !0, "[": !0, "]": !0, ";": !0, "~": !0, "!": !0, "+": !0, "-": !0, "*": !0, "/": !0, "%": !0, "^": !0, "**": !0, "|": !0, "&": !0, "^|": !0, "=": !0, ":": !0, "?": !0, "||": !0, "&&": !0, xor: !0, "==": !0, "!=": !0, "===": !0, "!==": !0, "<": !0, ">": !0, ">=": !0, "<=": !0, ">>>": !0, "<<": !0, ">>": !0 };

        function u(t) { return t >= "0" && t <= "9" }

        function a(t) { return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || "$" === t || "_" === t }

        function s(t) { return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t }

        function c(t) { return o[t] }

        function l(t) { return "'" === t || '"' === t }

        function f() {}
        f.prototype.throwError = function(t, n) { n = void 0 === n ? this.index : n; var e = new Error(t + " at index " + n); throw e.index = n, e.description = t, e }, f.prototype.lex = function(t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                for (; s(this.peek());) this.consume();
                var n = this.peek(),
                    e = n + this.peek(1),
                    i = e + this.peek(2);
                c(i) ? (this.tokens.push({ type: r.DELIMITER, value: i }), this.consume(), this.consume(), this.consume()) : c(e) ? (this.tokens.push({ type: r.DELIMITER, value: e }), this.consume(), this.consume()) : c(n) ? (this.tokens.push({ type: r.DELIMITER, value: n }), this.consume()) : u(n) || "." === n && u(this.peek(1)) ? this.tokens.push({ type: r.NUMBER, value: this.readNumber() }) : l(n) ? this.tokens.push({ type: r.STRING, value: this.readString() }) : a(n) ? this.tokens.push({ type: r.SYMBOL, value: this.readIdentifier() }) : this.throwError("unexpected character " + n)
            }
            return this.tokens.push({ type: r.EOF }), this.tokens
        }, f.prototype.peek = function(t) { if (t = t || 0, !(this.index + t >= this.text.length)) return this.text.charAt(this.index + t) }, f.prototype.consume = function() { var t = this.peek(); return this.index += 1, t }, f.prototype.readNumber = function() {
            var t = "";
            if ("." === this.peek()) t += this.consume(), u(this.peek()) || this.throwError("number expected");
            else { for (; u(this.peek());) t += this.consume(); "." === this.peek() && (t += this.consume()) }
            for (; u(this.peek());) t += this.consume();
            if ("e" === this.peek() || "E" === this.peek())
                for (t += this.consume(), u(this.peek()) || "+" === this.peek() || "-" === this.peek() || this.throwError(), "+" !== this.peek() && "-" !== this.peek() || (t += this.consume()), u(this.peek()) || this.throwError("number expected"); u(this.peek());) t += this.consume();
            return t
        }, f.prototype.readIdentifier = function() { for (var t = ""; a(this.peek()) || u(this.peek());) t += this.consume(); return t }, f.prototype.readString = function() {
            for (var t, n = this.consume(), e = "";;) {
                var r = this.consume();
                if (r || this.throwError("string is not closed"), t) {
                    if ("u" === r) {
                        var o = this.text.substring(this.index + 1, this.index + 5);
                        o.match(/[\da-f]{4}/i) || this.throwError("invalid unicode escape"), this.index += 4, e += String.fromCharCode(parseInt(o, 16))
                    } else {
                        var u = i[r];
                        e += u || r
                    }
                    t = !1
                } else { if (r === n) break; "\\" === r ? t = !0 : e += r }
            }
            return e
        }, t.exports = f
    }, function(t, n) { t.exports = { EOF: 0, DELIMITER: 1, NUMBER: 2, STRING: 3, SYMBOL: 4 } }, function(t, n, e) {
        var r = e(5),
            i = { number: !0, string: !0, boolean: !0, undefined: !0, null: !0 };

        function o(t, n) {
            if (!i[n]) throw Error("unsupported type '" + n + "'");
            this.value = t, this.valueType = n
        }
        o.prototype = Object.create(r.prototype), o.prototype.type = "ConstantNode", t.exports = o
    }, function(t, n, e) {
        var r = e(5);

        function i(t, n) { this.op = t, this.args = n || [] }
        i.prototype = Object.create(r.prototype), i.prototype.type = "OperatorNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t, n) { this.op = t, this.argument = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "UnaryNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t) { this.name = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "SymbolNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t, n) { this.name = t, this.args = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "FunctionNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t) { this.nodes = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "ArrayNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t, n, e) { this.condition = t, this.trueExpr = n, this.falseExpr = e }
        i.prototype = Object.create(r.prototype), i.prototype.type = "ConditionalNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t, n) { this.name = t, this.expr = n }
        i.prototype = Object.create(r.prototype), i.prototype.type = "AssignmentNode", t.exports = i
    }, function(t, n, e) {
        var r = e(5);

        function i(t) { this.blocks = t }
        i.prototype = Object.create(r.prototype), i.prototype.type = "BlockNode", t.exports = i
    }, function(t, n, e) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            o = Object.defineProperty,
            u = Object.getOwnPropertyDescriptor,
            a = function(t) { return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t) },
            s = function(t) {
                if (!t || "[object Object]" !== i.call(t)) return !1;
                var n, e = r.call(t, "constructor"),
                    o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
                if (t.constructor && !e && !o) return !1;
                for (n in t);
                return void 0 === n || r.call(t, n)
            },
            c = function(t, n) { o && "__proto__" === n.name ? o(t, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 }) : t[n.name] = n.newValue },
            l = function(t, n) { if ("__proto__" === n) { if (!r.call(t, n)) return; if (u) return u(t, n).value } return t[n] };
        t.exports = function t() {
            var n, e, r, i, o, u, f = arguments[0],
                h = 1,
                p = arguments.length,
                d = !1;
            for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, h = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); h < p; ++h)
                if (null != (n = arguments[h]))
                    for (e in n) r = l(f, e), f !== (i = l(n, e)) && (d && i && (s(i) || (o = a(i))) ? (o ? (o = !1, u = r && a(r) ? r : []) : u = r && s(r) ? r : {}, c(f, { name: e, newValue: t(d, u, i) })) : void 0 !== i && c(f, { name: e, newValue: i }));
            return f
        }
    }, function(t, n, e) {
        "use strict";
        t.exports = e(100)
    }, , , , function(t, n, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(t, n, e, r) { void 0 === r && (r = e), Object.defineProperty(t, r, { enumerable: !0, get: function() { return n[e] } }) } : function(t, n, e, r) { void 0 === r && (r = e), t[r] = n[e] }),
            i = this && this.__setModuleDefault || (Object.create ? function(t, n) { Object.defineProperty(t, "default", { enumerable: !0, value: n }) } : function(t, n) { t.default = n }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t)
                    for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                return i(n, t), n
            },
            u = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 }), n.Chart = void 0;
        const a = e(32),
            s = e(45),
            c = e(119),
            l = e(122),
            f = e(120),
            h = e(2),
            p = e(11),
            d = u(e(80)),
            y = u(e(81)),
            v = u(e(82)),
            g = u(e(109)),
            _ = u(e(49)),
            m = u(e(31)),
            x = o(e(47)),
            w = o(e(19));
        e(118);
        const b = { linear: c.scaleLinear, log: c.scaleLog };
        class M extends d.default.EventEmitter {
            constructor(t) {
                super();
                const n = Math.random(),
                    e = String.fromCharCode(Math.floor(26 * n) + 97);
                this.options = t, this.id = e + n.toString(16).substr(2), this.options.id = this.id, this.markerId = this.id + "-marker", M.cache[this.id] = this, this.linkedGraphs = [this], this.meta = {}, this.setUpEventListeners()
            }
            build() { return this.internalVars(), this.drawGraphWrapper(), this }
            getDraggableNode() { return h.select(this.options.target).select(".zoom-and-drag").node() }
            getEmitInstance() { let t = this; const n = this.getDraggableNode(); return n && (t = n.instance), t }
            internalVars() {
                const t = this.meta.margin = { left: 40, right: 20, top: 20, bottom: 20 };
                this.options.title && (this.meta.margin.top = 40), this.meta.width = (this.options.width || m.default.DEFAULT_WIDTH) - t.left - t.right, this.meta.height = (this.options.height || m.default.DEFAULT_HEIGHT) - t.top - t.bottom, this.initializeAxes()
            }
            initializeAxes() {
                const t = this,
                    n = s.format("~s");
                s.format("~e");

                function e(t) { return Math.abs(t) - Math.floor(Math.abs(t)) > 0 ? t.toString() : n(t) }
                this.options.xAxis = this.options.xAxis || {}, this.options.xAxis.type = this.options.xAxis.type || "linear", this.options.yAxis = this.options.yAxis || {}, this.options.yAxis.type = this.options.yAxis.type || "linear";
                const r = this.meta.xDomain = function(t) { if (t.domain) return t.domain; if ("linear" === t.type) { const t = 12; return [-t / 2, t / 2] } if ("log" === t.type) return [1, 10]; throw Error("axis type " + t.type + " unsupported") }(this.options.xAxis),
                    i = this.meta.yDomain = function(n) { if (n.domain) return n.domain; const e = function(n) { const e = n[1] - n[0]; return t.meta.height * e / t.meta.width }(r); if ("linear" === n.type) return [-e / 2, e / 2]; if ("log" === n.type) return [1, 10]; throw Error("axis type " + n.type + " unsupported") }(this.options.yAxis);
                this.meta.xScale || (this.meta.xScale = b[this.options.xAxis.type]()), this.meta.xScale.domain(r).range(this.options.xAxis.invert ? [this.meta.width, 0] : [0, this.meta.width]), this.meta.yScale || (this.meta.yScale = b[this.options.yAxis.type]()), this.meta.yScale.domain(i).range(this.options.yAxis.invert ? [0, this.meta.height] : [this.meta.height, 0]), this.meta.xAxis || (this.meta.xAxis = l.axisBottom(this.meta.xScale)), this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(e), this.meta.yAxis || (this.meta.yAxis = l.axisLeft(this.meta.yScale)), this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(e), this.line = a.line().x((function(n) { return t.meta.xScale(n[0]) })).y((function(n) { return t.meta.yScale(n[1]) }))
            }
            drawGraphWrapper() {
                const t = this.root = h.select(this.options.target).selectAll("svg").data([this.options]);
                this.root.enter = t.enter().append("svg").attr("class", "function-plot").attr("font-size", this.getFontSize()), t.merge(this.root.enter).attr("width", this.meta.width + this.meta.margin.left + this.meta.margin.right).attr("height", this.meta.height + this.meta.margin.top + this.meta.margin.bottom), this.buildTitle(), this.buildLegend(), this.buildCanvas(), this.buildClip(), this.buildAxis(), this.buildAxisLabel(), this.draw();
                const n = this.tip = v.default(Object.assign(this.options.tip || {}, { owner: this }));
                this.canvas.merge(this.canvas.enter).call(n), this.buildZoomHelper(), this.setUpPlugins()
            }
            buildTitle() {
                const t = this.root.merge(this.root.enter).selectAll("text.title").data((function(t) { return [t.title].filter(Boolean) }));
                t.enter().append("text").merge(t).attr("class", "title").attr("y", this.meta.margin.top / 2).attr("x", this.meta.margin.left + this.meta.width / 2).attr("font-size", 25).attr("text-anchor", "middle").attr("alignment-baseline", "middle").text(this.options.title), t.exit().remove()
            }
            buildLegend() { this.root.enter.append("text").attr("class", "top-right-legend").attr("text-anchor", "end"), this.root.merge(this.root.enter).select(".top-right-legend").attr("y", this.meta.margin.top / 2).attr("x", this.meta.width + this.meta.margin.left) }
            buildCanvas() {
                const t = this.canvas = this.root.merge(this.root.enter).selectAll(".canvas").data((function(t) { return [t] }));
                this.canvas.enter = t.enter().append("g").attr("class", "canvas")
            }
            buildClip() {
                const t = this.id,
                    n = this.canvas.enter.append("defs");
                n.append("clipPath").attr("id", "function-plot-clip-" + t).append("rect").attr("class", "clip static-clip"), this.canvas.merge(this.canvas.enter).selectAll(".clip").attr("width", this.meta.width).attr("height", this.meta.height), n.append("clipPath").append("marker").attr("id", this.markerId).attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5L0,0").attr("stroke-width", "0px").attr("fill-opacity", 1).attr("fill", "#777")
            }
            buildAxis() {
                const t = this.canvas.enter;
                t.append("g").attr("class", "x axis"), t.append("g").attr("class", "y axis"), this.canvas.merge(this.canvas.enter).select(".x.axis").attr("transform", "translate(0," + this.meta.height + ")").call(this.meta.xAxis), this.canvas.merge(this.canvas.enter).select(".y.axis").call(this.meta.yAxis)
            }
            buildAxisLabel() {
                const t = this.canvas,
                    n = t.merge(t.enter).selectAll("text.x.axis-label").data((function(t) { return [t.xAxis.label].filter(Boolean) })),
                    e = n.enter().append("text").attr("class", "x axis-label").attr("text-anchor", "end");
                n.merge(e).attr("x", this.meta.width).attr("y", this.meta.height - 6).text((function(t) { return t })), n.exit().remove();
                const r = t.merge(t.enter).selectAll("text.y.axis-label").data((function(t) { return [t.yAxis.label].filter(Boolean) })),
                    i = r.enter().append("text").attr("class", "y axis-label").attr("y", 6).attr("dy", ".75em").attr("text-anchor", "end").attr("transform", "rotate(-90)");
                r.merge(i).text((function(t) { return t })), r.exit().remove()
            }
            buildContent() {
                const t = this,
                    n = this.canvas;
                n.merge(n.enter).attr("transform", "translate(" + this.meta.margin.left + "," + this.meta.margin.top + ")");
                const e = this.content = n.merge(n.enter).selectAll(":scope > g.content").data((function(t) { return [t] })),
                    r = e.enter().append("g").attr("clip-path", "url(#function-plot-clip-" + this.id + ")").attr("class", "content");
                if ("linear" === this.options.xAxis.type) {
                    const t = e.merge(r).selectAll(":scope > path.y.origin").data([
                            [
                                [0, this.meta.yScale.domain()[0]],
                                [0, this.meta.yScale.domain()[1]]
                            ]
                        ]),
                        n = t.enter().append("path").attr("class", "y origin").attr("stroke", "black").attr("opacity", .2);
                    t.merge(n).attr("d", this.line)
                }
                if ("linear" === this.options.yAxis.type) {
                    const t = e.merge(r).selectAll(":scope > path.x.origin").data([
                            [
                                [this.meta.xScale.domain()[0], 0],
                                [this.meta.xScale.domain()[1], 0]
                            ]
                        ]),
                        n = t.enter().append("path").attr("class", "x origin").attr("stroke", "black").attr("opacity", .2);
                    t.merge(n).attr("d", this.line)
                }
                e.merge(r).call(y.default({ owner: t }));
                const i = e.merge(r).selectAll(":scope > g.graph").data(t => t.data.map(_.default)),
                    o = i.enter().append("g").attr("class", "graph");
                i.merge(o).each((function(n, e) {
                    n.index = e;
                    const r = h.select(this);
                    r.call(x[n.graphType](t)), r.call(g.default(t))
                }))
            }
            buildZoomHelper() {
                const t = this;
                this.meta.zoomBehavior || (this.meta.zoomBehavior = f.zoom().on("zoom", (function(n) { t.getEmitInstance().emit("all:zoom", n) })), t.meta.zoomBehavior.xScale = t.meta.xScale.copy(), t.meta.zoomBehavior.yScale = t.meta.yScale.copy()), t.meta.zoomBehavior.xScale.range(t.meta.xScale.range()), t.meta.zoomBehavior.yScale.range(t.meta.yScale.range()), this.canvas.enter.append("rect").call(this.meta.zoomBehavior).attr("class", "zoom-and-drag").style("fill", "none").style("pointer-events", "all").on("mouseover", (function(n) { t.getEmitInstance().emit("all:mouseover", n) })).on("mouseout", (function(n) { t.getEmitInstance().emit("all:mouseout", n) })).on("mousemove", (function(n) { t.getEmitInstance().emit("all:mousemove", n) })), this.draggable = this.canvas.merge(this.canvas.enter).select(".zoom-and-drag").call(n => { n.node() && (n.node().instance = t) }).attr("width", this.meta.width).attr("height", this.meta.height)
            }
            setUpPlugins() {
                const t = this.options.plugins || [],
                    n = this;
                t.forEach((function(t) { t(n) }))
            }
            addLink() { for (let t = 0; t < arguments.length; t += 1) this.linkedGraphs.push(arguments[t]) }
            updateAxes() {
                const t = this.canvas.merge(this.canvas.enter);
                t.select(".x.axis").call(this.meta.xAxis), t.select(".y.axis").call(this.meta.yAxis), t.selectAll(".axis path, .axis line").attr("fill", "none").attr("stroke", "black").attr("shape-rendering", "crispedges").attr("opacity", .1)
            }
            syncOptions() { this.options.xAxis.domain = this.meta.xScale.domain(), this.options.yAxis.domain = this.meta.yScale.domain() }
            getFontSize() { return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8) }
            draw() { this.emit("before:draw"), this.syncOptions(), this.updateAxes(), this.buildContent(), this.emit("after:draw") }
            setUpEventListeners() {
                const t = this,
                    n = this.getEmitInstance();
                n && n.removeAllListeners();
                const e = {
                        mousemove: function(n) { t.tip.move(n) },
                        mouseover: function() { t.tip.show() },
                        mouseout: function() { t.tip.hide() },
                        zoom: function({ transform: n }) {
                            if (t.options.disableZoom) return;
                            const e = n.rescaleX(t.meta.zoomBehavior.xScale).interpolate(p.interpolateRound),
                                r = n.rescaleY(t.meta.zoomBehavior.yScale).interpolate(p.interpolateRound);
                            t.meta.xScale.domain(e.domain()).range(e.range()), t.meta.yScale.domain(r.domain()).range(r.range())
                        },
                        "tip:update": function({ x: n, y: e, index: r }) {
                            const i = t.root.merge(t.root.enter).datum().data[r],
                                o = i.title || "",
                                u = i.renderer || function(t, n) { return t.toFixed(3) + ", " + n.toFixed(3) },
                                a = [];
                            o && a.push(o), a.push(u(n, e)), t.root.select(".top-right-legend").attr("fill", m.default.COLORS[r]).text(a.join(" "))
                        }
                    },
                    r = {
                        mousemove: function(n) {
                            const e = h.pointer(n, t.draggable.node()),
                                r = { x: t.meta.xScale.invert(e[0]), y: t.meta.yScale.invert(e[1]) };
                            t.linkedGraphs.forEach((function(t) { t.emit("before:mousemove", r), t.emit("mousemove", r) }))
                        },
                        zoom: function(n) { t.linkedGraphs.forEach((function(e) { e.draggable.node().__zoom = t.draggable.node().__zoom, e.emit("zoom", n), e.draw() })), t.emit("all:mousemove", n) }
                    };
                Object.keys(e).forEach((function(n) {
                    !r[n] && t.on("all:" + n, (function() {
                        const e = Array.prototype.slice.call(arguments);
                        t.linkedGraphs.forEach((function(t) {
                            const r = e.slice();
                            r.unshift(n), t.emit.apply(t, r)
                        }))
                    })), t.on(n, e[n])
                })), Object.keys(r).forEach((function(n) { t.on("all:" + n, r[n]) }))
            }
        }

        function T(t = { target: null }) { t.data = t.data || []; let n = M.cache[t.id]; return n || (n = new M(t)), n.build() }
        n.Chart = M, M.cache = {}, T.globals = m.default, T.$eval = w, T.graphTypes = x, n.default = T
    }, function(t, n, e) {
        "use strict";
        var r, i = "object" == typeof Reflect ? Reflect : null,
            o = i && "function" == typeof i.apply ? i.apply : function(t, n, e) { return Function.prototype.apply.call(t, n, e) };
        r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) { return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)) } : function(t) { return Object.getOwnPropertyNames(t) };
        var u = Number.isNaN || function(t) { return t != t };

        function a() { a.init.call(this) }
        t.exports = a, t.exports.once = function(t, n) {
            return new Promise((function(e, r) {
                function i() { void 0 !== o && t.removeListener("error", o), e([].slice.call(arguments)) }
                var o;
                "error" !== n && (o = function(e) { t.removeListener(n, i), r(e) }, t.once("error", o)), t.once(n, i)
            }))
        }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
        var s = 10;

        function c(t) { if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t) }

        function l(t) { return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners }

        function f(t, n, e, r) {
            var i, o, u, a;
            if (c(e), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", n, e.listener ? e.listener : e), o = t._events), u = o[n]), void 0 === u) u = o[n] = e, ++t._eventsCount;
            else if ("function" == typeof u ? u = o[n] = r ? [e, u] : [u, e] : r ? u.unshift(e) : u.push(e), (i = l(t)) > 0 && u.length > i && !u.warned) {
                u.warned = !0;
                var s = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                s.name = "MaxListenersExceededWarning", s.emitter = t, s.type = n, s.count = u.length, a = s, console && console.warn && console.warn(a)
            }
            return t
        }

        function h() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

        function p(t, n, e) {
            var r = { fired: !1, wrapFn: void 0, target: t, type: n, listener: e },
                i = h.bind(r);
            return i.listener = e, r.wrapFn = i, i
        }

        function d(t, n, e) { var r = t._events; if (void 0 === r) return []; var i = r[n]; return void 0 === i ? [] : "function" == typeof i ? e ? [i.listener || i] : [i] : e ? function(t) { for (var n = new Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e]; return n }(i) : v(i, i.length) }

        function y(t) { var n = this._events; if (void 0 !== n) { var e = n[t]; if ("function" == typeof e) return 1; if (void 0 !== e) return e.length } return 0 }

        function v(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t[r]; return e }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() { return s },
            set: function(t) {
                if ("number" != typeof t || t < 0 || u(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                s = t
            }
        }), a.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, a.prototype.setMaxListeners = function(t) { if ("number" != typeof t || t < 0 || u(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + "."); return this._maxListeners = t, this }, a.prototype.getMaxListeners = function() { return l(this) }, a.prototype.emit = function(t) {
            for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
            var r = "error" === t,
                i = this._events;
            if (void 0 !== i) r = r && void 0 === i.error;
            else if (!r) return !1;
            if (r) { var u; if (n.length > 0 && (u = n[0]), u instanceof Error) throw u; var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : "")); throw a.context = u, a }
            var s = i[t];
            if (void 0 === s) return !1;
            if ("function" == typeof s) o(s, this, n);
            else {
                var c = s.length,
                    l = v(s, c);
                for (e = 0; e < c; ++e) o(l[e], this, n)
            }
            return !0
        }, a.prototype.addListener = function(t, n) { return f(this, t, n, !1) }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, n) { return f(this, t, n, !0) }, a.prototype.once = function(t, n) { return c(n), this.on(t, p(this, t, n)), this }, a.prototype.prependOnceListener = function(t, n) { return c(n), this.prependListener(t, p(this, t, n)), this }, a.prototype.removeListener = function(t, n) {
            var e, r, i, o, u;
            if (c(n), void 0 === (r = this._events)) return this;
            if (void 0 === (e = r[t])) return this;
            if (e === n || e.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, e.listener || n));
            else if ("function" != typeof e) {
                for (i = -1, o = e.length - 1; o >= 0; o--)
                    if (e[o] === n || e[o].listener === n) { u = e[o].listener, i = o; break }
                if (i < 0) return this;
                0 === i ? e.shift() : function(t, n) {
                    for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                    t.pop()
                }(e, i), 1 === e.length && (r[t] = e[0]), void 0 !== r.removeListener && this.emit("removeListener", t, u || n)
            }
            return this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
            var n, e, r;
            if (void 0 === (e = this._events)) return this;
            if (void 0 === e.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== e[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete e[t]), this;
            if (0 === arguments.length) { var i, o = Object.keys(e); for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this }
            if ("function" == typeof(n = e[t])) this.removeListener(t, n);
            else if (void 0 !== n)
                for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
            return this
        }, a.prototype.listeners = function(t) { return d(this, t, !0) }, a.prototype.rawListeners = function(t) { return d(this, t, !1) }, a.listenerCount = function(t, n) { return "function" == typeof t.listenerCount ? t.listenerCount(n) : y.call(t, n) }, a.prototype.listenerCount = y, a.prototype.eventNames = function() { return this._eventsCount > 0 ? r(this._events) : [] }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        const r = e(32),
            i = e(2);
        n.default = function(t) {
            const n = t.owner.meta.xScale,
                e = t.owner.meta.yScale,
                o = r.line().x((function(t) { return t[0] })).y((function(t) { return t[1] }));
            return function(t) {
                t.each((function() {
                    const t = i.select(this).selectAll("g.annotations").data((function(t) { return t.annotations || [] })),
                        r = t.enter().append("g").attr("class", "annotations"),
                        u = e.range(),
                        a = n.range(),
                        s = t.merge(r).selectAll("path").data((function(t) {
                            return "x" in t ? [
                                [
                                    [0, u[0]],
                                    [0, u[1]]
                                ]
                            ] : [
                                [
                                    [a[0], 0],
                                    [a[1], 0]
                                ]
                            ]
                        }));
                    s.enter().append("path").attr("stroke", "#eee").attr("d", o), s.exit().remove();
                    const c = t.merge(r).selectAll("text").data((function(t) { return [{ text: t.text || "", hasX: "x" in t }] }));
                    c.enter().append("text").attr("y", (function(t) { return t.hasX ? 3 : 0 })).attr("x", (function(t) { return t.hasX ? 0 : 3 })).attr("dy", (function(t) { return t.hasX ? 5 : -5 })).attr("text-anchor", (function(t) { return t.hasX ? "end" : "" })).attr("transform", (function(t) { return t.hasX ? "rotate(-90)" : "" })).text((function(t) { return t.text })), c.exit().remove(), t.merge(r).attr("transform", (function(t) { return "x" in t ? "translate(" + n(t.x) + ", 0)" : "translate(0, " + e(t.y) + ")" })), t.exit().remove()
                }))
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(32),
            o = e(2),
            u = r(e(46)),
            a = r(e(18)),
            s = r(e(31)),
            c = e(19);
        n.default = function(t) {
            t = Object.assign({ xLine: !1, yLine: !1, renderer: function(t, n) { return "(" + t.toFixed(3) + ", " + n.toFixed(3) + ")" }, owner: null }, t);
            const n = i.line().x((function(t) { return t[0] })).y((function(t) { return t[1] }));

            function e(t, e) { return t.append("path").datum(e).attr("stroke", "grey").attr("stroke-dasharray", "5,5").attr("opacity", .5).attr("d", n) }
            let r, l;

            function f(n) {
                const i = n.selectAll("g.tip").data((function(t) { return [t] })),
                    u = i.enter().append("g").attr("class", "tip").attr("clip-path", "url(#function-plot-clip-" + t.owner.id + ")");
                r = i.merge(u).selectAll("g.inner-tip").data((function(t) { return [t] })), l = r.enter().append("g").attr("class", "inner-tip").style("display", "none").each((function() {
                    const n = o.select(this);
                    e(n, [
                        [0, -t.owner.meta.height - 20],
                        [0, t.owner.meta.height + 20]
                    ]).attr("class", "tip-x-line").style("display", "none"), e(n, [
                        [-t.owner.meta.width - 20, 0],
                        [t.owner.meta.width + 20, 0]
                    ]).attr("class", "tip-y-line").style("display", "none"), n.append("circle").attr("r", 3), n.append("text").attr("transform", "translate(5,-5)")
                })), r.merge(l).selectAll(".tip-x-line").style("display", t.xLine ? null : "none"), r.merge(l).selectAll(".tip-y-line").style("display", t.yLine ? null : "none")
            }
            return f.move = function(n) {
                let e, i, o, h = 1 / 0,
                    p = -1;
                const d = r.merge(l),
                    y = t.owner.meta,
                    v = d.datum().data,
                    g = y.xScale,
                    _ = y.yScale,
                    m = y.width,
                    x = y.height,
                    w = n.x,
                    b = n.y;
                for (e = 0; e < v.length; e += 1) {
                    if (v[e].skipTip || "linear" !== v[e].fnType) continue;
                    const t = v[e].range || [-1e8, 1e8];
                    let n;
                    if (w > t[0] - s.default.TIP_X_EPS && w < t[1] + s.default.TIP_X_EPS) {
                        try { n = c.builtIn(v[e], "fn", { x: w }) } catch (t) {}
                        if (a.default.isValidNumber(n)) {
                            const t = Math.abs(n - b);
                            t < h && (h = t, p = e)
                        }
                    }
                }
                if (-1 !== p) {
                    i = w, v[p].range && (i = Math.max(i, v[p].range[0]), i = Math.min(i, v[p].range[1])), o = c.builtIn(v[p], "fn", { x: i }), f.show(), t.owner.emit("tip:update", { x: i, y: o, index: p });
                    const n = u.default(i, g.invert(-20), g.invert(m + 20)),
                        e = u.default(o, _.invert(x + 20), _.invert(-20)),
                        r = a.default.color(v[p], p);
                    d.style("color", "red"), d.attr("transform", "translate(" + g(n) + "," + _(e) + ")"), d.select("circle").attr("fill", r), d.select("text").attr("fill", r).text(t.renderer(i, o, p))
                } else f.hide()
            }, f.show = function() { r.merge(l).style("display", null) }, f.hide = function() { r.merge(l).style("display", "none") }, Object.keys(t).forEach((function(n) { a.default.getterSetter.call(f, t, n) })), f
        }
    }, function(t, n, e) {
        "use strict";
        t.exports = e(84)
    }, function(t, n, e) {
        "use strict";
        var r = e(61),
            i = e(99)();

        function o(t) {
            Object.keys(t).forEach((function(n) {
                var e = t[n];
                t[n] = i.factory(e)
            }))
        }
        t.exports = function(t) { return (new r).setDefs({ $$processScope: o }).parse(t).compile(i) }, t.exports.math = i
    }, function(t, n, e) {
        "use strict";
        var r = e(62).Parser,
            i = e(88),
            o = e(74);

        function u(t, n) { this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t) }
        u.prototype.setDefs = function(t) { return this.defs = o(this.defs, t), this }, u.prototype.compile = function(t) {
            if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
            if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
            this.defs.ns = t, this.defs.$$mathCodegen = { getProperty: function(t, n, e) { if (t in n) return n[t]; if (t in e) return e[t]; throw SyntaxError('symbol "' + t + '" is undefined') }, functionProxy: function(t, n) { if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function'); return t } }, this.defs.$$processScope = this.defs.$$processScope || function() {};
            var n = Object.keys(this.defs).map((function(t) { return "var " + t + ' = defs["' + t + '"]' }));
            if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
            this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
            var e = this.statements.join(";"),
                r = n.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + e, "  },", "  code: '" + e + "'", "}"].join("\n");
            return new Function("defs", r)(this.defs)
        }, u.prototype.parse = function(t) {
            var n = this,
                e = (new r).parse(t);
            return this.statements = e.blocks.map((function(t) { return n.interpreter.next(t) })), this
        }, t.exports = u
    }, function(t, n, e) {
        var r = e(64),
            i = e(63),
            o = e(65),
            u = e(66),
            a = e(67),
            s = e(68),
            c = e(69),
            l = e(70),
            f = e(71),
            h = e(72),
            p = e(73);

        function d() { this.lexer = new i, this.tokens = null }
        d.prototype.current = function() { return this.tokens[0] }, d.prototype.next = function() { return this.tokens[1] }, d.prototype.peek = function() {
            if (this.tokens.length)
                for (var t = this.tokens[0], n = 0; n < arguments.length; n += 1)
                    if (t.value === arguments[n]) return !0
        }, d.prototype.consume = function(t) { return this.tokens.shift() }, d.prototype.expect = function(t) { if (!this.peek(t)) throw Error("expected " + t); return this.consume() }, d.prototype.isEOF = function() { return this.current().type === r.EOF }, d.prototype.parse = function(t) { return this.tokens = this.lexer.lex(t), this.program() }, d.prototype.program = function() { for (var t = []; !this.isEOF();) t.push(this.assignment()), this.peek(";") && this.consume(); return this.end(), new p(t) }, d.prototype.assignment = function() { var t = this.ternary(); return t instanceof s && this.peek("=") ? (this.consume(), new h(t.name, this.assignment())) : t }, d.prototype.ternary = function() {
            var t = this.logicalOR();
            if (this.peek("?")) {
                this.consume();
                var n = this.ternary();
                this.expect(":");
                var e = this.ternary();
                return new f(t, n, e)
            }
            return t
        }, d.prototype.logicalOR = function() {
            var t = this.logicalXOR();
            if (this.peek("||")) {
                var n = this.consume(),
                    e = this.logicalOR();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.logicalXOR = function() {
            var t = this.logicalAND();
            if ("xor" === this.current().value) {
                var n = this.consume(),
                    e = this.logicalXOR();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.logicalAND = function() {
            var t = this.bitwiseOR();
            if (this.peek("&&")) {
                var n = this.consume(),
                    e = this.logicalAND();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.bitwiseOR = function() {
            var t = this.bitwiseXOR();
            if (this.peek("|")) {
                var n = this.consume(),
                    e = this.bitwiseOR();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.bitwiseXOR = function() {
            var t = this.bitwiseAND();
            if (this.peek("^|")) {
                var n = this.consume(),
                    e = this.bitwiseXOR();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.bitwiseAND = function() {
            var t = this.relational();
            if (this.peek("&")) {
                var n = this.consume(),
                    e = this.bitwiseAND();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.relational = function() {
            var t = this.shift();
            if (this.peek("==", "===", "!=", "!==", ">=", "<=", ">", "<")) {
                var n = this.consume(),
                    e = this.shift();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.shift = function() {
            var t = this.additive();
            if (this.peek(">>", "<<", ">>>")) {
                var n = this.consume(),
                    e = this.shift();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.additive = function() {
            for (var t = this.multiplicative(); this.peek("+", "-");) {
                var n = this.consume();
                t = new u(n.value, [t, this.multiplicative()])
            }
            return t
        }, d.prototype.multiplicative = function() { for (var t, n, e = this.unary(); this.peek("*", "/", "%");) t = this.consume(), e = new u(t.value, [e, this.unary()]); return this.current().type === r.SYMBOL || this.peek("(") || !(e.type instanceof o) && this.current().type === r.NUMBER ? (n = this.multiplicative(), new u("*", [e, n])) : e }, d.prototype.unary = function() {
            if (this.peek("-", "+", "~")) {
                var t = this.consume(),
                    n = this.unary();
                return new a(t.value, n)
            }
            return this.pow()
        }, d.prototype.pow = function() {
            var t = this.factorial();
            if (this.peek("^", "**")) {
                var n = this.consume(),
                    e = this.unary();
                return new u(n.value, [t, e])
            }
            return t
        }, d.prototype.factorial = function() { var t = this.symbol(); if (this.peek("!")) { var n = this.consume(); return new u(n.value, [t]) } return t }, d.prototype.symbol = function() { if (this.current().type === r.SYMBOL) { var t = this.consume(); return this.functionCall(t) } return this.string() }, d.prototype.functionCall = function(t) { var n = t.value; if (this.peek("(")) { this.consume(); for (var e = []; !this.peek(")") && !this.isEOF();) e.push(this.assignment()), this.peek(",") && this.consume(); return this.expect(")"), new c(n, e) } return new s(n) }, d.prototype.string = function() { return this.current().type === r.STRING ? new o(this.consume().value, "string") : this.array() }, d.prototype.array = function() { if (this.peek("[")) { this.consume(); for (var t = []; !this.peek("]") && !this.isEOF();) t.push(this.assignment()), this.peek(",") && this.consume(); return this.expect("]"), new l(t) } return this.number() }, d.prototype.number = function() { return this.current().type === r.NUMBER ? new o(this.consume().value, "number") : this.parentheses() }, d.prototype.parentheses = function() { if ("(" === this.current().value) { this.consume(); var t = this.assignment(); return this.expect(")"), t } return this.end() }, d.prototype.end = function() { if (this.current().type !== r.EOF) throw Error("unexpected end of expression") }, t.exports = d
    }, function(t, n, e) { t.exports = { ArrayNode: e(70), AssignmentNode: e(72), BlockNode: e(73), ConditionalNode: e(71), ConstantNode: e(65), FunctionNode: e(69), Node: e(5), OperatorNode: e(66), SymbolNode: e(68), UnaryNode: e(67) } }, function(t, n, e) {
        "use strict";
        var r = e(74),
            i = { ArrayNode: e(89), AssignmentNode: e(90), ConditionalNode: e(91), ConstantNode: e(92), FunctionNode: e(93), OperatorNode: e(94), SymbolNode: e(96), UnaryNode: e(97) },
            o = function(t, n) { this.owner = t, this.options = r({ factory: "ns.factory", raw: !1, rawArrayExpressionElements: !0, rawCallExpressionElements: !1 }, n) };
        r(o.prototype, i), o.prototype.next = function(t) { if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented"); return this[t.type](t) }, o.prototype.rawify = function(t, n) {
            var e = this.options.raw;
            t && (this.options.raw = !0), n(), t && (this.options.raw = e)
        }, t.exports = o
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) {
            var n = this,
                e = [];
            this.rawify(this.options.rawArrayExpressionElements, (function() { e = t.nodes.map((function(t) { return n.next(t) })) }));
            var r = "[" + e.join(",") + "]";
            return this.options.raw ? r : this.options.factory + "(" + r + ")"
        }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return 'scope["' + t.name + '"] = ' + this.next(t.expr) }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return "(" + ("!!(" + this.next(t.condition) + ")") + " ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")" }
    }, function(t, n, e) {
        "use strict";
        var r = e(62).nodeTypes.SymbolNode,
            i = function(t) { return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")' };
        t.exports = function(t) {
            var n = this,
                e = i.call(this, t),
                r = [];
            return this.rawify(this.options.rawCallExpressionElements, (function() { r = t.args.map((function(t) { return n.next(t) })) })), e + "(" + r.join(", ") + ")"
        }, t.exports.functionProxy = i
    }, function(t, n, e) {
        "use strict";
        var r = e(95);
        t.exports = function(t) { if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" "); var n = r[t.op]; if (!n) throw TypeError("unidentified operator"); return this.FunctionNode({ name: n, args: t.args }) }
    }, function(t, n, e) {
        "use strict";
        t.exports = { "+": "add", "-": "sub", "*": "mul", "/": "div", "^": "pow", "%": "mod", "!": "factorial", "|": "bitwiseOR", "^|": "bitwiseXOR", "&": "bitwiseAND", "||": "logicalOR", xor: "logicalXOR", "&&": "logicalAND", "<": "lessThan", ">": "greaterThan", "<=": "lessEqualThan", ">=": "greaterEqualThan", "===": "strictlyEqual", "==": "equal", "!==": "strictlyNotEqual", "!=": "notEqual", ">>": "shiftRight", "<<": "shiftLeft", ">>>": "unsignedRightShift" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)' }
    }, function(t, n, e) {
        "use strict";
        var r = e(98);
        t.exports = function(t) { if (this.options.raw) return t.op + this.next(t.argument); if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented"); var n = r[t.op]; return this.FunctionNode({ name: n, args: [t.argument] }) }
    }, function(t, n, e) {
        "use strict";
        t.exports = { "+": "positive", "-": "negative", "~": "oneComplement" }
    }, function(t, n, e) {
        "use strict";
        t.exports = function() { var t = Object.create(Math); return t.factory = function(t) { if ("number" != typeof t) throw new TypeError("built-in math factory only accepts numbers"); return Number(t) }, t.add = function(t, n) { return t + n }, t.sub = function(t, n) { return t - n }, t.mul = function(t, n) { return t * n }, t.div = function(t, n) { return t / n }, t.mod = function(t, n) { return t % n }, t.factorial = function(t) { for (var n = 1, e = 2; e <= t; e += 1) n *= e; return n }, t.nthRoot = function(t, n) { var e = n < 0; if (e && (n = -n), 0 === n) throw new Error("Root must be non-zero"); if (t < 0 && Math.abs(n) % 2 != 1) throw new Error("Root must be odd when a is negative."); if (0 === t) return 0; if (!isFinite(t)) return e ? 0 : t; var r = Math.pow(Math.abs(t), 1 / n); return r = t < 0 ? -r : r, e ? 1 / r : r }, t.logicalOR = function(t, n) { return t || n }, t.logicalXOR = function(t, n) { return t != n }, t.logicalAND = function(t, n) { return t && n }, t.bitwiseOR = function(t, n) { return t | n }, t.bitwiseXOR = function(t, n) { return t ^ n }, t.bitwiseAND = function(t, n) { return t & n }, t.lessThan = function(t, n) { return t < n }, t.lessEqualThan = function(t, n) { return t <= n }, t.greaterThan = function(t, n) { return t > n }, t.greaterEqualThan = function(t, n) { return t >= n }, t.equal = function(t, n) { return t == n }, t.strictlyEqual = function(t, n) { return t === n }, t.notEqual = function(t, n) { return t != n }, t.strictlyNotEqual = function(t, n) { return t !== n }, t.shiftRight = function(t, n) { return t >> n }, t.shiftLeft = function(t, n) { return t << n }, t.unsignedRightShift = function(t, n) { return t >>> n }, t.negative = function(t) { return -t }, t.positive = function(t) { return t }, t }
    }, function(t, n, e) {
        "use strict";
        const r = e(61),
            i = e(121).default;

        function o(t) { Object.keys(t).forEach((function(n) { const e = t[n]; "number" == typeof e || Array.isArray(e) ? t[n] = i.factory(e) : "object" == typeof e && "lo" in e && "hi" in e && (t[n] = i.factory(e.lo, e.hi)) })) }
        e(107)(i), t.exports = function(t) { return (new r).setDefs({ $$processScope: o }).parse(t).compile(i) }, t.exports.policies = e(108)(i), t.exports.Interval = i
    }, function(t, n, e) {
        (function(n) {
            var e = !1;
            if ("undefined" != typeof Float64Array) {
                var r = new Float64Array(1),
                    i = new Uint32Array(r.buffer);
                if (r[0] = 1, e = !0, 1072693248 === i[1]) { t.exports = function(t) { return r[0] = t, [i[0], i[1]] }, t.exports.pack = function(t, n) { return i[0] = t, i[1] = n, r[0] }, t.exports.lo = function(t) { return r[0] = t, i[0] }, t.exports.hi = function(t) { return r[0] = t, i[1] } } else if (1072693248 === i[0]) { t.exports = function(t) { return r[0] = t, [i[1], i[0]] }, t.exports.pack = function(t, n) { return i[1] = t, i[0] = n, r[0] }, t.exports.lo = function(t) { return r[0] = t, i[1] }, t.exports.hi = function(t) { return r[0] = t, i[0] } } else e = !1
            }
            if (!e) {
                var o = new n(8);
                t.exports = function(t) { return o.writeDoubleLE(t, 0, !0), [o.readUInt32LE(0, !0), o.readUInt32LE(4, !0)] }, t.exports.pack = function(t, n) { return o.writeUInt32LE(t, 0, !0), o.writeUInt32LE(n, 4, !0), o.readDoubleLE(0, !0) }, t.exports.lo = function(t) { return o.writeDoubleLE(t, 0, !0), o.readUInt32LE(0, !0) }, t.exports.hi = function(t) { return o.writeDoubleLE(t, 0, !0), o.readUInt32LE(4, !0) }
            }
            t.exports.sign = function(n) { return t.exports.hi(n) >>> 31 }, t.exports.exponent = function(n) { return (t.exports.hi(n) << 1 >>> 21) - 1023 }, t.exports.fraction = function(n) {
                var e = t.exports.lo(n),
                    r = t.exports.hi(n),
                    i = 1048575 & r;
                return 2146435072 & r && (i += 1 << 20), [e, i]
            }, t.exports.denormalized = function(n) { return !(2146435072 & t.exports.hi(n)) }
        }).call(this, e(102).Buffer)
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = e(103),
                i = e(104),
                o = e(105);

            function u() { return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function a(t, n) { if (u() < n) throw new RangeError("Invalid typed array length"); return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(n)).__proto__ = s.prototype : (null === t && (t = new s(n)), t.length = n), t }

            function s(t, n, e) { if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(t, n, e); if ("number" == typeof t) { if ("string" == typeof n) throw new Error("If encoding is specified then the first argument must be a string"); return f(this, t) } return c(this, t, n, e) }

            function c(t, n, e, r) {
                if ("number" == typeof n) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? function(t, n, e, r) {
                    if (n.byteLength, e < 0 || n.byteLength < e) throw new RangeError("'offset' is out of bounds");
                    if (n.byteLength < e + (r || 0)) throw new RangeError("'length' is out of bounds");
                    n = void 0 === e && void 0 === r ? new Uint8Array(n) : void 0 === r ? new Uint8Array(n, e) : new Uint8Array(n, e, r);
                    s.TYPED_ARRAY_SUPPORT ? (t = n).__proto__ = s.prototype : t = h(t, n);
                    return t
                }(t, n, e, r) : "string" == typeof n ? function(t, n, e) {
                    "string" == typeof e && "" !== e || (e = "utf8");
                    if (!s.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | d(n, e),
                        i = (t = a(t, r)).write(n, e);
                    i !== r && (t = t.slice(0, i));
                    return t
                }(t, n, e) : function(t, n) { if (s.isBuffer(n)) { var e = 0 | p(n.length); return 0 === (t = a(t, e)).length || n.copy(t, 0, 0, e), t } if (n) { if ("undefined" != typeof ArrayBuffer && n.buffer instanceof ArrayBuffer || "length" in n) return "number" != typeof n.length || (r = n.length) != r ? a(t, 0) : h(t, n); if ("Buffer" === n.type && o(n.data)) return h(t, n.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(t, n)
            }

            function l(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function f(t, n) {
                if (l(n), t = a(t, n < 0 ? 0 : 0 | p(n)), !s.TYPED_ARRAY_SUPPORT)
                    for (var e = 0; e < n; ++e) t[e] = 0;
                return t
            }

            function h(t, n) {
                var e = n.length < 0 ? 0 : 0 | p(n.length);
                t = a(t, e);
                for (var r = 0; r < e; r += 1) t[r] = 255 & n[r];
                return t
            }

            function p(t) { if (t >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes"); return 0 | t }

            function d(t, n) {
                if (s.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var e = t.length;
                if (0 === e) return 0;
                for (var r = !1;;) switch (n) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return H(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return F(t).length;
                    default:
                        if (r) return H(t).length;
                        n = ("" + n).toLowerCase(), r = !0
                }
            }

            function y(t, n, e) {
                var r = !1;
                if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
                if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                if ((e >>>= 0) <= (n >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return N(this, n, e);
                    case "utf8":
                    case "utf-8":
                        return A(this, n, e);
                    case "ascii":
                        return O(this, n, e);
                    case "latin1":
                    case "binary":
                        return k(this, n, e);
                    case "base64":
                        return E(this, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, n, e);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function v(t, n, e) {
                var r = t[n];
                t[n] = t[e], t[e] = r
            }

            function g(t, n, e, r, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof e ? (r = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                    if (i) return -1;
                    e = t.length - 1
                } else if (e < 0) {
                    if (!i) return -1;
                    e = 0
                }
                if ("string" == typeof n && (n = s.from(n, r)), s.isBuffer(n)) return 0 === n.length ? -1 : _(t, n, e, r, i);
                if ("number" == typeof n) return n &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : _(t, [n], e, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function _(t, n, e, r, i) {
                var o, u = 1,
                    a = t.length,
                    s = n.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || n.length < 2) return -1;
                    u = 2, a /= 2, s /= 2, e /= 2
                }

                function c(t, n) { return 1 === u ? t[n] : t.readUInt16BE(n * u) }
                if (i) {
                    var l = -1;
                    for (o = e; o < a; o++)
                        if (c(t, o) === c(n, -1 === l ? 0 : o - l)) { if (-1 === l && (l = o), o - l + 1 === s) return l * u } else -1 !== l && (o -= o - l), l = -1
                } else
                    for (e + s > a && (e = a - s), o = e; o >= 0; o--) {
                        for (var f = !0, h = 0; h < s; h++)
                            if (c(t, o + h) !== c(n, h)) { f = !1; break }
                        if (f) return o
                    }
                return -1
            }

            function m(t, n, e, r) {
                e = Number(e) || 0;
                var i = t.length - e;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var o = n.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var u = 0; u < r; ++u) {
                    var a = parseInt(n.substr(2 * u, 2), 16);
                    if (isNaN(a)) return u;
                    t[e + u] = a
                }
                return u
            }

            function x(t, n, e, r) { return z(H(n, t.length - e), t, e, r) }

            function w(t, n, e, r) { return z(function(t) { for (var n = [], e = 0; e < t.length; ++e) n.push(255 & t.charCodeAt(e)); return n }(n), t, e, r) }

            function b(t, n, e, r) { return w(t, n, e, r) }

            function M(t, n, e, r) { return z(F(n), t, e, r) }

            function T(t, n, e, r) { return z(function(t, n) { for (var e, r, i, o = [], u = 0; u < t.length && !((n -= 2) < 0); ++u) e = t.charCodeAt(u), r = e >> 8, i = e % 256, o.push(i), o.push(r); return o }(n, t.length - e), t, e, r) }

            function E(t, n, e) { return 0 === n && e === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(n, e)) }

            function A(t, n, e) {
                e = Math.min(t.length, e);
                for (var r = [], i = n; i < e;) {
                    var o, u, a, s, c = t[i],
                        l = null,
                        f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + f <= e) switch (f) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            128 == (192 & (o = t[i + 1])) && (s = (31 & c) << 6 | 63 & o) > 127 && (l = s);
                            break;
                        case 3:
                            o = t[i + 1], u = t[i + 2], 128 == (192 & o) && 128 == (192 & u) && (s = (15 & c) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (s < 55296 || s > 57343) && (l = s);
                            break;
                        case 4:
                            o = t[i + 1], u = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & u) && 128 == (192 & a) && (s = (15 & c) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & a) > 65535 && s < 1114112 && (l = s)
                    }
                    null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
                }
                return function(t) {
                    var n = t.length;
                    if (n <= 4096) return String.fromCharCode.apply(String, t);
                    var e = "",
                        r = 0;
                    for (; r < n;) e += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                    return e
                }(r)
            }
            n.Buffer = s, n.SlowBuffer = function(t) {+t != t && (t = 0); return s.alloc(+t) }, n.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), n.kMaxLength = u(), s.poolSize = 8192, s._augment = function(t) { return t.__proto__ = s.prototype, t }, s.from = function(t, n, e) { return c(null, t, n, e) }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, { value: null, configurable: !0 })), s.alloc = function(t, n, e) { return function(t, n, e, r) { return l(n), n <= 0 ? a(t, n) : void 0 !== e ? "string" == typeof r ? a(t, n).fill(e, r) : a(t, n).fill(e) : a(t, n) }(null, t, n, e) }, s.allocUnsafe = function(t) { return f(null, t) }, s.allocUnsafeSlow = function(t) { return f(null, t) }, s.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, s.compare = function(t, n) {
                if (!s.isBuffer(t) || !s.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
                if (t === n) return 0;
                for (var e = t.length, r = n.length, i = 0, o = Math.min(e, r); i < o; ++i)
                    if (t[i] !== n[i]) { e = t[i], r = n[i]; break }
                return e < r ? -1 : r < e ? 1 : 0
            }, s.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function(t, n) {
                if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return s.alloc(0);
                var e;
                if (void 0 === n)
                    for (n = 0, e = 0; e < t.length; ++e) n += t[e].length;
                var r = s.allocUnsafe(n),
                    i = 0;
                for (e = 0; e < t.length; ++e) {
                    var u = t[e];
                    if (!s.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                    u.copy(r, i), i += u.length
                }
                return r
            }, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var n = 0; n < t; n += 2) v(this, n, n + 1); return this }, s.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var n = 0; n < t; n += 4) v(this, n, n + 3), v(this, n + 1, n + 2); return this }, s.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var n = 0; n < t; n += 8) v(this, n, n + 7), v(this, n + 1, n + 6), v(this, n + 2, n + 5), v(this, n + 3, n + 4); return this }, s.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : y.apply(this, arguments) }, s.prototype.equals = function(t) { if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === s.compare(this, t) }, s.prototype.inspect = function() {
                var t = "",
                    e = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
            }, s.prototype.compare = function(t, n, e, r, i) {
                if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === n && (n = 0), void 0 === e && (e = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), n < 0 || e > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && n >= e) return 0;
                if (r >= i) return -1;
                if (n >= e) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (r >>>= 0), u = (e >>>= 0) - (n >>>= 0), a = Math.min(o, u), c = this.slice(r, i), l = t.slice(n, e), f = 0; f < a; ++f)
                    if (c[f] !== l[f]) { o = c[f], u = l[f]; break }
                return o < u ? -1 : u < o ? 1 : 0
            }, s.prototype.includes = function(t, n, e) { return -1 !== this.indexOf(t, n, e) }, s.prototype.indexOf = function(t, n, e) { return g(this, t, n, e, !0) }, s.prototype.lastIndexOf = function(t, n, e) { return g(this, t, n, e, !1) }, s.prototype.write = function(t, n, e, r) {
                if (void 0 === n) r = "utf8", e = this.length, n = 0;
                else if (void 0 === e && "string" == typeof n) r = n, e = this.length, n = 0;
                else {
                    if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    n |= 0, isFinite(e) ? (e |= 0, void 0 === r && (r = "utf8")) : (r = e, e = void 0)
                }
                var i = this.length - n;
                if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var o = !1;;) switch (r) {
                    case "hex":
                        return m(this, t, n, e);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, n, e);
                    case "ascii":
                        return w(this, t, n, e);
                    case "latin1":
                    case "binary":
                        return b(this, t, n, e);
                    case "base64":
                        return M(this, t, n, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, t, n, e);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, s.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };

            function O(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(127 & t[i]);
                return r
            }

            function k(t, n, e) {
                var r = "";
                e = Math.min(t.length, e);
                for (var i = n; i < e; ++i) r += String.fromCharCode(t[i]);
                return r
            }

            function N(t, n, e) {
                var r = t.length;
                (!n || n < 0) && (n = 0), (!e || e < 0 || e > r) && (e = r);
                for (var i = "", o = n; o < e; ++o) i += Y(t[o]);
                return i
            }

            function S(t, n, e) { for (var r = t.slice(n, e), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }

            function P(t, n, e) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + n > e) throw new RangeError("Trying to access beyond buffer length") }

            function I(t, n, e, r, i, o) { if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (n > i || n < o) throw new RangeError('"value" argument is out of bounds'); if (e + r > t.length) throw new RangeError("Index out of range") }

            function L(t, n, e, r) { n < 0 && (n = 65535 + n + 1); for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (n & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i) }

            function j(t, n, e, r) { n < 0 && (n = 4294967295 + n + 1); for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = n >>> 8 * (r ? i : 3 - i) & 255 }

            function C(t, n, e, r, i, o) { if (e + r > t.length) throw new RangeError("Index out of range"); if (e < 0) throw new RangeError("Index out of range") }

            function R(t, n, e, r, o) { return o || C(t, 0, e, 4), i.write(t, n, e, r, 23, 4), e + 4 }

            function D(t, n, e, r, o) { return o || C(t, 0, e, 8), i.write(t, n, e, r, 52, 8), e + 8 }
            s.prototype.slice = function(t, n) {
                var e, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < t && (n = t), s.TYPED_ARRAY_SUPPORT)(e = this.subarray(t, n)).__proto__ = s.prototype;
                else {
                    var i = n - t;
                    e = new s(i, void 0);
                    for (var o = 0; o < i; ++o) e[o] = this[o + t]
                }
                return e
            }, s.prototype.readUIntLE = function(t, n, e) { t |= 0, n |= 0, e || P(t, n, this.length); for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i; return r }, s.prototype.readUIntBE = function(t, n, e) { t |= 0, n |= 0, e || P(t, n, this.length); for (var r = this[t + --n], i = 1; n > 0 && (i *= 256);) r += this[t + --n] * i; return r }, s.prototype.readUInt8 = function(t, n) { return n || P(t, 1, this.length), this[t] }, s.prototype.readUInt16LE = function(t, n) { return n || P(t, 2, this.length), this[t] | this[t + 1] << 8 }, s.prototype.readUInt16BE = function(t, n) { return n || P(t, 2, this.length), this[t] << 8 | this[t + 1] }, s.prototype.readUInt32LE = function(t, n) { return n || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, s.prototype.readUInt32BE = function(t, n) { return n || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, s.prototype.readIntLE = function(t, n, e) { t |= 0, n |= 0, e || P(t, n, this.length); for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256);) r += this[t + o] * i; return r >= (i *= 128) && (r -= Math.pow(2, 8 * n)), r }, s.prototype.readIntBE = function(t, n, e) { t |= 0, n |= 0, e || P(t, n, this.length); for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * n)), o }, s.prototype.readInt8 = function(t, n) { return n || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, s.prototype.readInt16LE = function(t, n) { n || P(t, 2, this.length); var e = this[t] | this[t + 1] << 8; return 32768 & e ? 4294901760 | e : e }, s.prototype.readInt16BE = function(t, n) { n || P(t, 2, this.length); var e = this[t + 1] | this[t] << 8; return 32768 & e ? 4294901760 | e : e }, s.prototype.readInt32LE = function(t, n) { return n || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, s.prototype.readInt32BE = function(t, n) { return n || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, s.prototype.readFloatLE = function(t, n) { return n || P(t, 4, this.length), i.read(this, t, !0, 23, 4) }, s.prototype.readFloatBE = function(t, n) { return n || P(t, 4, this.length), i.read(this, t, !1, 23, 4) }, s.prototype.readDoubleLE = function(t, n) { return n || P(t, 8, this.length), i.read(this, t, !0, 52, 8) }, s.prototype.readDoubleBE = function(t, n) { return n || P(t, 8, this.length), i.read(this, t, !1, 52, 8) }, s.prototype.writeUIntLE = function(t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || I(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[n] = 255 & t; ++o < e && (i *= 256);) this[n + o] = t / i & 255;
                return n + e
            }, s.prototype.writeUIntBE = function(t, n, e, r) {
                (t = +t, n |= 0, e |= 0, r) || I(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var i = e - 1,
                    o = 1;
                for (this[n + i] = 255 & t; --i >= 0 && (o *= 256);) this[n + i] = t / o & 255;
                return n + e
            }, s.prototype.writeUInt8 = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1 }, s.prototype.writeUInt16LE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : L(this, t, n, !0), n + 2 }, s.prototype.writeUInt16BE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : L(this, t, n, !1), n + 2 }, s.prototype.writeUInt32LE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : j(this, t, n, !0), n + 4 }, s.prototype.writeUInt32BE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : j(this, t, n, !1), n + 4 }, s.prototype.writeIntLE = function(t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    I(this, t, n, e, i - 1, -i)
                }
                var o = 0,
                    u = 1,
                    a = 0;
                for (this[n] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o - 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
                return n + e
            }, s.prototype.writeIntBE = function(t, n, e, r) {
                if (t = +t, n |= 0, !r) {
                    var i = Math.pow(2, 8 * e - 1);
                    I(this, t, n, e, i - 1, -i)
                }
                var o = e - 1,
                    u = 1,
                    a = 0;
                for (this[n + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[n + o + 1] && (a = 1), this[n + o] = (t / u >> 0) - a & 255;
                return n + e
            }, s.prototype.writeInt8 = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1 }, s.prototype.writeInt16LE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : L(this, t, n, !0), n + 2 }, s.prototype.writeInt16BE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : L(this, t, n, !1), n + 2 }, s.prototype.writeInt32LE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : j(this, t, n, !0), n + 4 }, s.prototype.writeInt32BE = function(t, n, e) { return t = +t, n |= 0, e || I(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : j(this, t, n, !1), n + 4 }, s.prototype.writeFloatLE = function(t, n, e) { return R(this, t, n, !0, e) }, s.prototype.writeFloatBE = function(t, n, e) { return R(this, t, n, !1, e) }, s.prototype.writeDoubleLE = function(t, n, e) { return D(this, t, n, !0, e) }, s.prototype.writeDoubleBE = function(t, n, e) { return D(this, t, n, !1, e) }, s.prototype.copy = function(t, n, e, r) {
                if (e || (e = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), n || (n = 0), r > 0 && r < e && (r = e), r === e) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - n < r - e && (r = t.length - n + e);
                var i, o = r - e;
                if (this === t && e < n && n < r)
                    for (i = o - 1; i >= 0; --i) t[i + n] = this[i + e];
                else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) t[i + n] = this[i + e];
                else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), n);
                return o
            }, s.prototype.fill = function(t, n, e, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (r = n, n = 0, e = this.length) : "string" == typeof e && (r = e, e = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
                if (e <= n) return this;
                var o;
                if (n >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t)
                    for (o = n; o < e; ++o) this[o] = t;
                else {
                    var u = s.isBuffer(t) ? t : H(new s(t, r).toString()),
                        a = u.length;
                    for (o = 0; o < e - n; ++o) this[o + n] = u[o % a]
                }
                return this
            };
            var U = /[^+\/0-9A-Za-z-_]/g;

            function Y(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function H(t, n) {
                var e;
                n = n || 1 / 0;
                for (var r = t.length, i = null, o = [], u = 0; u < r; ++u) {
                    if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
                        if (!i) {
                            if (e > 56319) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (u + 1 === r) {
                                (n -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = e;
                            continue
                        }
                        if (e < 56320) {
                            (n -= 3) > -1 && o.push(239, 191, 189), i = e;
                            continue
                        }
                        e = 65536 + (i - 55296 << 10 | e - 56320)
                    } else i && (n -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, e < 128) {
                        if ((n -= 1) < 0) break;
                        o.push(e)
                    } else if (e < 2048) {
                        if ((n -= 2) < 0) break;
                        o.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((n -= 3) < 0) break;
                        o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((n -= 4) < 0) break;
                        o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return o
            }

            function F(t) { return r.toByteArray(function(t) { if ((t = function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }(t).replace(U, "")).length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }(t)) }

            function z(t, n, e, r) { for (var i = 0; i < r && !(i + e >= n.length || i >= t.length); ++i) n[i + e] = t[i]; return i }
        }).call(this, e(60))
    }, function(t, n, e) {
        "use strict";
        n.byteLength = function(t) {
            var n = c(t),
                e = n[0],
                r = n[1];
            return 3 * (e + r) / 4 - r
        }, n.toByteArray = function(t) {
            for (var n, e = c(t), r = e[0], u = e[1], a = new o(function(t, n, e) { return 3 * (n + e) / 4 - e }(0, r, u)), s = 0, l = u > 0 ? r - 4 : r, f = 0; f < l; f += 4) n = i[t.charCodeAt(f)] << 18 | i[t.charCodeAt(f + 1)] << 12 | i[t.charCodeAt(f + 2)] << 6 | i[t.charCodeAt(f + 3)], a[s++] = n >> 16 & 255, a[s++] = n >> 8 & 255, a[s++] = 255 & n;
            2 === u && (n = i[t.charCodeAt(f)] << 2 | i[t.charCodeAt(f + 1)] >> 4, a[s++] = 255 & n);
            1 === u && (n = i[t.charCodeAt(f)] << 10 | i[t.charCodeAt(f + 1)] << 4 | i[t.charCodeAt(f + 2)] >> 2, a[s++] = n >> 8 & 255, a[s++] = 255 & n);
            return a
        }, n.fromByteArray = function(t) {
            for (var n, e = t.length, i = e % 3, o = [], u = 0, a = e - i; u < a; u += 16383) o.push(l(t, u, u + 16383 > a ? a : u + 16383));
            1 === i ? (n = t[e - 1], o.push(r[n >> 2] + r[n << 4 & 63] + "==")) : 2 === i && (n = (t[e - 2] << 8) + t[e - 1], o.push(r[n >> 10] + r[n >> 4 & 63] + r[n << 2 & 63] + "="));
            return o.join("")
        };
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = u.length; a < s; ++a) r[a] = u[a], i[u.charCodeAt(a)] = a;

        function c(t) { var n = t.length; if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var e = t.indexOf("="); return -1 === e && (e = n), [e, e === n ? 0 : 4 - e % 4] }

        function l(t, n, e) { for (var i, o, u = [], a = n; a < e; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), u.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]); return u.join("") }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function(t, n) {
        n.read = function(t, n, e, r, i) {
            var o, u, a = 8 * i - r - 1,
                s = (1 << a) - 1,
                c = s >> 1,
                l = -7,
                f = e ? i - 1 : 0,
                h = e ? -1 : 1,
                p = t[n + f];
            for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[n + f], f += h, l -= 8);
            for (u = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; u = 256 * u + t[n + f], f += h, l -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === s) return u ? NaN : 1 / 0 * (p ? -1 : 1);
                u += Math.pow(2, r), o -= c
            }
            return (p ? -1 : 1) * u * Math.pow(2, o - r)
        }, n.write = function(t, n, e, r, i, o) {
            var u, a, s, c = 8 * o - i - 1,
                l = (1 << c) - 1,
                f = l >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : o - 1,
                d = r ? 1 : -1,
                y = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
            for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (a = isNaN(n) ? 1 : 0, u = l) : (u = Math.floor(Math.log(n) / Math.LN2), n * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (n += u + f >= 1 ? h / s : h * Math.pow(2, 1 - f)) * s >= 2 && (u++, s /= 2), u + f >= l ? (a = 0, u = l) : u + f >= 1 ? (a = (n * s - 1) * Math.pow(2, i), u += f) : (a = n * Math.pow(2, f - 1) * Math.pow(2, i), u = 0)); i >= 8; t[e + p] = 255 & a, p += d, a /= 256, i -= 8);
            for (u = u << i | a, c += i; c > 0; t[e + p] = 255 & u, p += d, u /= 256, c -= 8);
            t[e + p - d] |= 128 * y
        }
    }, function(t, n) {
        var e = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == e.call(t) }
    }, function(t, n, e) {
        "use strict";
        t.exports = 9007199254740991
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { t.mod = t.fmod, t.lessThan = t.lt, t.lessEqualThan = t.leq, t.greaterThan = t.gt, t.greaterEqualThan = t.geq, t.strictlyEqual = t.equal, t.strictlyNotEqual = t.notEqual, t.logicalAND = function(t, n) { return t && n }, t.logicalXOR = function(t, n) { return t ^ n }, t.logicalOR = function(t, n) { return t || n } }
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t) { return { disableRounding: function() { t.round.disable() }, enableRounding: function() { t.round.enable() } } }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = r(e(110)),
            u = r(e(117));
        n.default = function(t) {
            return function(n) {
                n.each((function() {
                    const n = i.select(this);
                    n.call(o.default(t)), n.call(u.default(t))
                }))
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = e(47),
            u = e(19),
            a = r(e(49));
        n.default = function(t) {
            const n = a.default({ isHelper: !0, skipTip: !0, skipBoundsCheck: !0, nSamples: 2, graphType: "polyline" });

            function e(t) { if (!t.derivative) return []; const e = "number" == typeof t.derivative.x0 ? t.derivative.x0 : 1 / 0; return n.index = t.index, n.scope = { m: u.builtIn(t.derivative, "fn", { x: e }), x0: e, y0: u.builtIn(t, "fn", { x: e }) }, n.fn = "m * (x - x0) + y0", [n] }

            function r(n) {
                const e = this;
                n.derivative && n.derivative.updateOnMouseMove && !n.derivative.$$mouseListener && (n.derivative.$$mouseListener = function({ x: t }) { n.derivative && (n.derivative.x0 = t), s(e) }, t.on("tip:update", n.derivative.$$mouseListener))
            }
            const s = function(n) {
                n.each((function(u) {
                    const a = i.select(this),
                        s = e.call(n, u);
                    r.call(n, u);
                    const c = a.selectAll("g.derivative").data(s),
                        l = c.enter().append("g").attr("class", "derivative");
                    c.merge(l).call(o.polyline(t)), c.merge(l).selectAll("path").attr("opacity", .5), c.exit().remove()
                }))
            };
            return s
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = e(32),
            u = r(e(46)),
            a = r(e(18)),
            s = r(e(48));
        n.default = function(t) {
            return function n(e) {
                e.each((function(e) {
                    const r = n.el = i.select(this),
                        c = e.index,
                        l = s.default(t, e),
                        f = a.default.color(e, c),
                        h = r.selectAll(":scope > path.line").data(l),
                        p = t.meta.yScale.range();
                    let d = p[0],
                        y = p[1];
                    const v = d - y;

                    function g(n) { return u.default(t.meta.yScale(n[1]), y, d) }
                    d += 1e6 * v, y -= 1e6 * v, e.skipBoundsCheck && (d = 1 / 0, y = -1 / 0);
                    const _ = o.line().curve(o.curveLinear).x((function(n) { return t.meta.xScale(n[0]) })).y(g),
                        m = o.area().x((function(n) { return t.meta.yScale(n[0]) })).y0(t.meta.yScale(0)).y1(g),
                        x = h.enter().append("path").attr("class", "line line-" + c).attr("stroke-width", 1).attr("stroke-linecap", "round");
                    h.merge(x).each((function() {
                        const n = i.select(this);
                        let r;
                        if (e.closed ? (n.attr("fill", f), n.attr("fill-opacity", .3), r = m) : (n.attr("fill", "none"), r = _), n.attr("stroke", f).attr("marker-end", (function() { return "vector" === e.fnType ? "url(#" + t.markerId + ")" : null })).attr("d", r), e.attr)
                            for (let t in e.attr) e.attr.hasOwnProperty(t) && n.attr(t, e.attr[t])
                    })), h.exit().remove()
                }))
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 }), n.interval = n.builtIn = void 0;
        const i = r(e(113));
        n.builtIn = i.default;
        const o = r(e(114));
        n.interval = o.default
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = r(e(46)),
            o = r(e(18)),
            u = e(19);

        function a(t, n, e, r, i) {
            if (!i) return { asymptote: !0, d0: t, d1: n };
            const s = t[0],
                c = n[0],
                l = o.default.linspace(s, c, 10);
            let f, h;
            for (let t = 0; t < 10; t += 1) {
                const n = l[t],
                    s = u.builtIn(e, "fn", { x: n });
                if (t && f) { const t = s - f; if (o.default.sgn(t) === r) return a([h, f], [n, s], e, r, i - 1) }
                f = s, h = n
            }
            return { asymptote: !1, d0: t, d1: n }
        }

        function s(t, n, e, r) {
            const s = o.default.space(t, e, r),
                c = t.meta.yScale.domain(),
                l = c[1] - c[0],
                f = c[0] - 1e5 * l,
                h = c[1] + 1e5 * l;
            let p = [];
            for (let t = 0; t < s.length; t += 1) {
                const e = s[t],
                    r = u.builtIn(n, "fn", { x: e });
                o.default.isValidNumber(e) && o.default.isValidNumber(r) && p.push([e, i.default(r, f, h)])
            }
            return p = function(t, n, e) {
                let r, i, u, s = [];
                const c = [],
                    l = t.meta.yScale.domain(),
                    f = l[0],
                    h = l[1];

                function p(t) { return t[1] = Math.min(t[1], h), t[1] = Math.max(t[1], f), t }
                for (e[0] && (s.push(e[0]), u = e[1][0] - e[0][0], i = o.default.sgn(e[1][1] - e[0][1])), r = 1; r < e.length;) {
                    const t = e[r - 1][1],
                        l = e[r][1] - t,
                        f = o.default.sgn(l);
                    if (i !== f && Math.abs(l / u) > 1) {
                        const t = a(e[r - 1], e[r], n, f, 3);
                        t.asymptote && (s.push(p(t.d0)), c.push(s), s = [p(t.d1)])
                    }
                    i = f, s.push(e[r]), ++r
                }
                return s.length && c.push(s), c
            }(t, n, p), p
        }

        function c(t, n, e, r) {
            const i = n.range || [0, 2 * Math.PI],
                a = o.default.space(t, i, r),
                s = [];
            for (let t = 0; t < a.length; t += 1) {
                const e = a[t],
                    r = u.builtIn(n, "x", { t: e }),
                    i = u.builtIn(n, "y", { t: e });
                s.push([r, i])
            }
            return [s]
        }

        function l(t, n, e, r) {
            const i = n.range || [-Math.PI, Math.PI],
                a = o.default.space(t, i, r),
                s = [];
            for (let t = 0; t < a.length; t += 1) {
                const e = a[t],
                    r = u.builtIn(n, "r", { theta: e }),
                    i = r * Math.cos(e),
                    o = r * Math.sin(e);
                s.push([i, o])
            }
            return [s]
        }

        function f(t, n, e, r) { return [n.points] }

        function h(t, n, e, r) {
            return n.offset = n.offset || [0, 0], [
                [n.offset, [n.vector[0] + n.offset[0], n.vector[1] + n.offset[1]]]
            ]
        }
        n.default = function(t, n, e, r) { const i = { parametric: c, polar: l, points: f, vector: h, linear: s }; if (!(n.fnType in i)) throw Error(n.fnType + " is not supported in the `builtIn` sampler"); return i[n.fnType].apply(null, arguments) }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(t, n, e, r) { void 0 === r && (r = e), Object.defineProperty(t, r, { enumerable: !0, get: function() { return n[e] } }) } : function(t, n, e, r) { void 0 === r && (r = e), t[r] = n[e] }),
            i = this && this.__setModuleDefault || (Object.create ? function(t, n) { Object.defineProperty(t, "default", { enumerable: !0, value: n }) } : function(t, n) { t.default = n }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t)
                    for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                return i(n, t), n
            },
            u = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const a = o(e(75)),
            s = e(19),
            c = u(e(18));

        function l(t, n, e, r) {
            const i = c.default.space(t, e, r),
                o = t.meta.xScale,
                u = t.meta.yScale,
                l = u.domain()[0],
                f = u.domain()[1],
                h = [];
            let p;
            for (p = 0; p < i.length - 1; p += 1) {
                const t = { lo: i[p], hi: i[p + 1] },
                    e = s.interval(n, "fn", { x: t });
                a.Interval.isEmpty(e) || a.Interval.isWhole(e) || h.push([t, e]), a.Interval.isWhole(e) && h.push(null)
            }
            for (p = 1; p < h.length - 1; p += 1)
                if (!h[p]) {
                    const t = h[p - 1],
                        n = h[p + 1];
                    t && n && !a.Interval.intervalsOverlap(t[1], n[1]) && (t[1].lo > n[1].hi && (t[1].hi = Math.max(f, t[1].hi), n[1].lo = Math.min(l, n[1].lo)), t[1].hi < n[1].lo && (t[1].lo = Math.min(l, t[1].lo), n[1].hi = Math.max(f, n[1].hi)))
                }
            return h.scaledDx = o(i[1]) - o(i[0]), [h]
        }
        let f;

        function h(t, n, e) {
            const r = s.interval(e, "fn", { x: t, y: n });
            if (!a.Interval.zeroIn(r)) return this;
            if (function(t, n) { return a.Interval.width(t) < f }(t)) return this.push([t, n]), this;
            const i = t.lo + (t.hi - t.lo) / 2,
                o = n.lo + (n.hi - n.lo) / 2,
                u = { lo: i, hi: t.hi },
                c = { lo: t.lo, hi: i },
                l = { lo: o, hi: n.hi },
                p = { lo: n.lo, hi: o };
            h.call(this, u, l, e), h.call(this, u, p, e), h.call(this, c, l, e), h.call(this, c, p, e)
        }

        function p(t, n) {
            const e = t.meta.xScale,
                r = t.meta.xScale.domain(),
                i = t.meta.yScale.domain(),
                o = { lo: r[0], hi: r[1] },
                u = { lo: i[0], hi: i[1] },
                a = [];
            return f = e.invert(1) - e.invert(0), h.call(a, o, u, n), a.scaledDx = 1, [a]
        }
        a.default.policies.disableRounding();
        n.default = function(t, n, e, r) { const i = { implicit: p, linear: l }; if (!i.hasOwnProperty(n.fnType)) throw Error(n.fnType + " is not supported in the `interval` sampler"); return i[n.fnType].apply(null, arguments) }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = r(e(48)),
            u = r(e(18));
        n.default = function(t) {
            let n;
            const e = t.meta.xScale,
                r = t.meta.yScale;

            function a(t, e, r, i) {
                if (r > i) {
                    const t = r;
                    r = i, i = t
                }
                const o = Math.min(e, i),
                    u = Math.max(t, r);
                return u > o ? [-n, 0] : [u, o]
            }
            return function s(c) {
                c.each((function(c) {
                    const l = s.el = i.select(this),
                        f = c.index,
                        h = c.closed,
                        p = o.default(t, c),
                        d = l.selectAll(":scope > path.line").data(p);
                    n = Math.max(p[0].scaledDx, 1);
                    const y = d.enter().append("path").attr("class", "line line-" + f).attr("fill", "none"),
                        v = d.merge(y).attr("stroke-width", n).attr("stroke", u.default.color(c, f)).attr("opacity", h ? .5 : 1).attr("d", (function(t) {
                            return function(t, i) {
                                let o = "";
                                const u = r.range(),
                                    s = Math.min.apply(Math, u),
                                    c = Math.max.apply(Math, u);
                                for (let u = 0, l = t.length; u < l; u += 1)
                                    if (t[u]) {
                                        const l = t[u][0],
                                            f = t[u][1];
                                        let h = f.lo,
                                            p = f.hi;
                                        i && (h = Math.min(h, 0), p = Math.max(p, 0));
                                        const d = e(l.lo) + t.scaledDx / 2,
                                            y = a(s, c, isFinite(p) ? r(p) : -1 / 0, isFinite(h) ? r(h) : 1 / 0),
                                            v = y[0],
                                            g = y[1];
                                        o += " M " + d + " " + v, o += " v " + Math.max(g - v, n)
                                    }
                                return o
                            }(t, h)
                        }));
                    if (c.attr)
                        for (let t in c.attr) c.attr.hasOwnProperty(t) && v.attr(t, c.attr[t]);
                    d.exit().remove()
                }))
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = e(9),
            u = r(e(18)),
            a = r(e(48));
        n.default = function(t) {
            const n = t.meta.xScale,
                e = t.meta.yScale;
            return function(r) {
                r.each((function(r) {
                    let s, c;
                    const l = r.index,
                        f = u.default.color(r, l),
                        h = a.default(t, r),
                        p = [];
                    for (s = 0; s < h.length; s += 1)
                        for (c = 0; c < h[s].length; c += 1) p.push(h[s][c]);
                    const d = i.select(this).selectAll(":scope > circle").data(p),
                        y = d.enter().append("circle"),
                        v = d.merge(y).attr("fill", o.hsl(f.toString()).brighter(1.5).hex()).attr("stroke", f).attr("opacity", .7).attr("r", 1).attr("cx", (function(t) { return n(t[0]) })).attr("cy", (function(t) { return e(t[1]) }));
                    if (r.attr)
                        for (let t in r.attr) r.attr.hasOwnProperty(t) && v.attr(t, r.attr[t]);
                    d.exit().remove()
                }))
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) { return t && t.__esModule ? t : { default: t } };
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = e(2),
            o = e(19),
            u = r(e(49)),
            a = e(47);
        n.default = function(t) {
            const n = u.default({ isHelper: !0, skipTip: !0, skipBoundsCheck: !0, nSamples: 2, graphType: "polyline" });

            function e(t, n) {
                if (!("x0" in n)) throw Error("secant must have the property `x0` defined");
                n.scope = n.scope || {};
                const e = n.x0,
                    r = "number" == typeof n.x1 ? n.x1 : 1 / 0;
                var i;
                Object.assign(n.scope, { x0: e, x1: r, y0: o.builtIn(t, "fn", { x: e }), y1: o.builtIn(t, "fn", { x: r }) }), (i = n.scope).m = (i.y1 - i.y0) / (i.x1 - i.x0)
            }

            function r(t, n) { e(t, n), n.fn = "m * (x - x0) + y0" }

            function s(n, r) {
                const i = this;
                r.updateOnMouseMove && !r.$$mouseListener && (r.$$mouseListener = function({ x: t }) { r.x1 = t, e(n, r), l(i) }, t.on("tip:update", r.$$mouseListener))
            }

            function c(t) {
                const e = this,
                    i = [];
                t.secants = t.secants || [];
                for (let o = 0; o < t.secants.length; o += 1) {
                    const u = t.secants[o] = Object.assign({}, n, t.secants[o]);
                    u.index = t.index, u.fn || (r.call(e, t, u), s.call(e, t, u)), i.push(u)
                }
                return i
            }
            const l = function(n) {
                n.each((function(e) {
                    const r = i.select(this),
                        o = c.call(n, e),
                        u = r.selectAll("g.secant").data(o),
                        s = u.enter().append("g").attr("class", "secant");
                    u.merge(s).call(a.polyline(t)), u.merge(s).selectAll("path").attr("opacity", .5), u.exit().remove()
                }))
            };
            return l
        }
    }, function(t, n) {
        "undefined" != typeof window && function(t, n) {
            try { t.querySelector(":scope body") } catch (e) {
                ["querySelector", "querySelectorAll"].forEach((function(e) {
                    const r = n[e];
                    n[e] = function(n) {
                        if (/(^|,)\s*:scope/.test(n)) {
                            const r = this.id;
                            this.id = "ID_" + Date.now(), n = n.replace(/((^|,)\s*):scope/g, "$1#" + this.id);
                            const i = t[e](n);
                            return this.id = r, i
                        }
                        return r.call(this, n)
                    }
                }))
            }
        }(window.document, Element.prototype)
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "scaleBand", (function() { return s })), e.d(n, "scalePoint", (function() { return l })), e.d(n, "scaleIdentity", (function() { return B })), e.d(n, "scaleLinear", (function() { return z })), e.d(n, "scaleLog", (function() { return J })), e.d(n, "scaleSymlog", (function() { return et })), e.d(n, "scaleOrdinal", (function() { return a })), e.d(n, "scaleImplicit", (function() { return u })), e.d(n, "scalePow", (function() { return at })), e.d(n, "scaleSqrt", (function() { return st })), e.d(n, "scaleRadial", (function() { return ft })), e.d(n, "scaleQuantile", (function() { return vt })), e.d(n, "scaleQuantize", (function() { return gt })), e.d(n, "scaleThreshold", (function() { return _t })), e.d(n, "scaleTime", (function() { return Ne })), e.d(n, "scaleUtc", (function() { return Re })), e.d(n, "scaleSequential", (function() { return Ye })), e.d(n, "scaleSequentialLog", (function() { return He })), e.d(n, "scaleSequentialPow", (function() { return ze })), e.d(n, "scaleSequentialSqrt", (function() { return Be })), e.d(n, "scaleSequentialSymlog", (function() { return Fe })), e.d(n, "scaleSequentialQuantile", (function() { return qe })), e.d(n, "scaleDiverging", (function() { return We })), e.d(n, "scaleDivergingLog", (function() { return $e })), e.d(n, "scaleDivergingPow", (function() { return Ze })), e.d(n, "scaleDivergingSqrt", (function() { return Qe })), e.d(n, "scaleDivergingSymlog", (function() { return Ge })), e.d(n, "tickFormat", (function() { return H }));
        var r = function(t, n, e) { t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e; for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e; return o };

        function i(t, n) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(n).domain(t)
            }
            return this
        }

        function o(t, n) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    "function" == typeof t ? this.interpolator(t) : this.range(t);
                    break;
                default:
                    this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
            }
            return this
        }
        const u = Symbol("implicit");

        function a() {
            var t = new Map,
                n = [],
                e = [],
                r = u;

            function o(i) {
                var o = i + "",
                    a = t.get(o);
                if (!a) {
                    if (r !== u) return r;
                    t.set(o, a = n.push(i))
                }
                return e[(a - 1) % e.length]
            }
            return o.domain = function(e) {
                if (!arguments.length) return n.slice();
                n = [], t = new Map;
                for (const r of e) {
                    const e = r + "";
                    t.has(e) || t.set(e, n.push(r))
                }
                return o
            }, o.range = function(t) { return arguments.length ? (e = Array.from(t), o) : e.slice() }, o.unknown = function(t) { return arguments.length ? (r = t, o) : r }, o.copy = function() { return a(n, e).unknown(r) }, i.apply(o, arguments), o
        }

        function s() {
            var t, n, e = a().unknown(void 0),
                o = e.domain,
                u = e.range,
                c = 0,
                l = 1,
                f = !1,
                h = 0,
                p = 0,
                d = .5;

            function y() {
                var e = o().length,
                    i = l < c,
                    a = i ? l : c,
                    s = i ? c : l;
                t = (s - a) / Math.max(1, e - h + 2 * p), f && (t = Math.floor(t)), a += (s - a - t * (e - h)) * d, n = t * (1 - h), f && (a = Math.round(a), n = Math.round(n));
                var y = r(e).map((function(n) { return a + t * n }));
                return u(i ? y.reverse() : y)
            }
            return delete e.unknown, e.domain = function(t) { return arguments.length ? (o(t), y()) : o() }, e.range = function(t) { return arguments.length ? ([c, l] = t, c = +c, l = +l, y()) : [c, l] }, e.rangeRound = function(t) { return [c, l] = t, c = +c, l = +l, f = !0, y() }, e.bandwidth = function() { return n }, e.step = function() { return t }, e.round = function(t) { return arguments.length ? (f = !!t, y()) : f }, e.padding = function(t) { return arguments.length ? (h = Math.min(1, p = +t), y()) : h }, e.paddingInner = function(t) { return arguments.length ? (h = Math.min(1, t), y()) : h }, e.paddingOuter = function(t) { return arguments.length ? (p = +t, y()) : p }, e.align = function(t) { return arguments.length ? (d = Math.max(0, Math.min(1, t)), y()) : d }, e.copy = function() { return s(o(), [c, l]).round(f).paddingInner(h).paddingOuter(p).align(d) }, i.apply(y(), arguments)
        }

        function c(t) { var n = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return c(n()) }, t }

        function l() { return c(s.apply(null, arguments).paddingInner(1)) }
        var f = Math.sqrt(50),
            h = Math.sqrt(10),
            p = Math.sqrt(2),
            d = function(t, n, e) {
                var r, i, o, u, a = -1;
                if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
                if ((r = n < t) && (i = t, t = n, n = i), 0 === (u = y(t, n, e)) || !isFinite(u)) return [];
                if (u > 0)
                    for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) * u;
                else
                    for (u = -u, t = Math.ceil(t * u), n = Math.floor(n * u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) / u;
                return r && o.reverse(), o
            };

        function y(t, n, e) {
            var r = (n - t) / Math.max(0, e),
                i = Math.floor(Math.log(r) / Math.LN10),
                o = r / Math.pow(10, i);
            return i >= 0 ? (o >= f ? 10 : o >= h ? 5 : o >= p ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= f ? 10 : o >= h ? 5 : o >= p ? 2 : 1)
        }

        function v(t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e),
                i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                o = r / i;
            return o >= f ? i *= 10 : o >= h ? i *= 5 : o >= p && (i *= 2), n < t ? -i : i
        }
        var g = function(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN },
            _ = function(t) {
                let n = t,
                    e = t;

                function r(t, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                        const o = r + i >>> 1;
                        e(t[o], n) < 0 ? r = o + 1 : i = o
                    }
                    return r
                }
                return 1 === t.length && (n = (n, e) => t(n) - e, e = function(t) { return (n, e) => g(t(n), e) }(t)), {
                    left: r,
                    center: function(t, e, i, o) { null == i && (i = 0), null == o && (o = t.length); const u = r(t, e, i, o - 1); return u > i && n(t[u - 1], e) > -n(t[u], e) ? u - 1 : u },
                    right: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            const o = r + i >>> 1;
                            e(t[o], n) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            };
        var m = function(t) { return null === t ? NaN : +t };
        const x = _(g),
            w = x.right;
        x.left, _(m).center;
        var b = w,
            M = e(12),
            T = e(3),
            E = e(56),
            A = function(t) { return +t },
            O = [0, 1];

        function k(t) { return t }

        function N(t, n) { return (n -= t = +t) ? function(e) { return (e - t) / n } : (e = isNaN(n) ? NaN : .5, function() { return e }); var e }

        function S(t, n, e) {
            var r = t[0],
                i = t[1],
                o = n[0],
                u = n[1];
            return i < r ? (r = N(i, r), o = e(u, o)) : (r = N(r, i), o = e(o, u)),
                function(t) { return o(r(t)) }
        }

        function P(t, n, e) {
            var r = Math.min(t.length, n.length) - 1,
                i = new Array(r),
                o = new Array(r),
                u = -1;
            for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r;) i[u] = N(t[u], t[u + 1]), o[u] = e(n[u], n[u + 1]);
            return function(n) { var e = b(t, n, 1, r) - 1; return o[e](i[e](n)) }
        }

        function I(t, n) { return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

        function L() {
            var t, n, e, r, i, o, u = O,
                a = O,
                s = M.a,
                c = k;

            function l() { var t, n, e, s = Math.min(u.length, a.length); return c !== k && (t = u[0], n = u[s - 1], t > n && (e = t, t = n, n = e), c = function(e) { return Math.max(t, Math.min(n, e)) }), r = s > 2 ? P : S, i = o = null, f }

            function f(n) { return isNaN(n = +n) ? e : (i || (i = r(u.map(t), a, s)))(t(c(n))) }
            return f.invert = function(e) { return c(n((o || (o = r(a, u.map(t), T.a)))(e))) }, f.domain = function(t) { return arguments.length ? (u = Array.from(t, A), l()) : u.slice() }, f.range = function(t) { return arguments.length ? (a = Array.from(t), l()) : a.slice() }, f.rangeRound = function(t) { return a = Array.from(t), s = E.a, l() }, f.clamp = function(t) { return arguments.length ? (c = !!t || k, l()) : c !== k }, f.interpolate = function(t) { return arguments.length ? (s = t, l()) : s }, f.unknown = function(t) { return arguments.length ? (e = t, f) : e },
                function(e, r) { return t = e, n = r, l() }
        }

        function j() { return L()(k, k) }
        var C = e(20),
            R = e(54),
            D = e(30),
            U = e(55),
            Y = e(53),
            H = function(t, n, e, r) {
                var i, o = v(t, n, e);
                switch ((r = Object(C.b)(null == r ? ",f" : r)).type) {
                    case "s":
                        var u = Math.max(Math.abs(t), Math.abs(n));
                        return null != r.precision || isNaN(i = Object(R.a)(o, u)) || (r.precision = i), Object(D.c)(r, u);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != r.precision || isNaN(i = Object(U.a)(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
                        break;
                    case "f":
                    case "%":
                        null != r.precision || isNaN(i = Object(Y.a)(o)) || (r.precision = i - 2 * ("%" === r.type))
                }
                return Object(D.b)(r)
            };

        function F(t) {
            var n = t.domain;
            return t.ticks = function(t) { var e = n(); return d(e[0], e[e.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, e) { var r = n(); return H(r[0], r[r.length - 1], null == t ? 10 : t, e) }, t.nice = function(e) {
                null == e && (e = 10);
                var r, i, o = n(),
                    u = 0,
                    a = o.length - 1,
                    s = o[u],
                    c = o[a],
                    l = 10;
                for (c < s && (i = s, s = c, c = i, i = u, u = a, a = i); l-- > 0;) {
                    if ((i = y(s, c, e)) === r) return o[u] = s, o[a] = c, n(o);
                    if (i > 0) s = Math.floor(s / i) * i, c = Math.ceil(c / i) * i;
                    else {
                        if (!(i < 0)) break;
                        s = Math.ceil(s * i) / i, c = Math.floor(c * i) / i
                    }
                    r = i
                }
                return t
            }, t
        }

        function z() { var t = j(); return t.copy = function() { return I(t, z()) }, i.apply(t, arguments), F(t) }

        function B(t) {
            var n;

            function e(t) { return isNaN(t = +t) ? n : t }
            return e.invert = e, e.domain = e.range = function(n) { return arguments.length ? (t = Array.from(n, A), e) : t.slice() }, e.unknown = function(t) { return arguments.length ? (n = t, e) : n }, e.copy = function() { return B(t).unknown(n) }, t = arguments.length ? Array.from(t, A) : [0, 1], F(e)
        }
        var q = function(t, n) {
            var e, r = 0,
                i = (t = t.slice()).length - 1,
                o = t[r],
                u = t[i];
            return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
        };

        function X(t) { return Math.log(t) }

        function V(t) { return Math.exp(t) }

        function W(t) { return -Math.log(-t) }

        function $(t) { return -Math.exp(-t) }

        function G(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

        function Z(t) { return function(n) { return -t(-n) } }

        function Q(t) {
            var n, e, r = t(X, V),
                i = r.domain,
                o = 10;

            function u() { return n = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) { return Math.log(n) / t }) }(o), e = function(t) { return 10 === t ? G : t === Math.E ? Math.exp : function(n) { return Math.pow(t, n) } }(o), i()[0] < 0 ? (n = Z(n), e = Z(e), t(W, $)) : t(X, V), r }
            return r.base = function(t) { return arguments.length ? (o = +t, u()) : o }, r.domain = function(t) { return arguments.length ? (i(t), u()) : i() }, r.ticks = function(t) {
                var r, u = i(),
                    a = u[0],
                    s = u[u.length - 1];
                (r = s < a) && (h = a, a = s, s = h);
                var c, l, f, h = n(a),
                    p = n(s),
                    y = null == t ? 10 : +t,
                    v = [];
                if (!(o % 1) && p - h < y) {
                    if (h = Math.floor(h), p = Math.ceil(p), a > 0) {
                        for (; h <= p; ++h)
                            for (l = 1, c = e(h); l < o; ++l)
                                if (!((f = c * l) < a)) {
                                    if (f > s) break;
                                    v.push(f)
                                }
                    } else
                        for (; h <= p; ++h)
                            for (l = o - 1, c = e(h); l >= 1; --l)
                                if (!((f = c * l) < a)) {
                                    if (f > s) break;
                                    v.push(f)
                                }
                    2 * v.length < y && (v = d(a, s, y))
                } else v = d(h, p, Math.min(p - h, y)).map(e);
                return r ? v.reverse() : v
            }, r.tickFormat = function(t, i) {
                if (null == i && (i = 10 === o ? ".0e" : ","), "function" != typeof i && (i = Object(D.b)(i)), t === 1 / 0) return i;
                null == t && (t = 10);
                var u = Math.max(1, o * t / r.ticks().length);
                return function(t) { var r = t / e(Math.round(n(t))); return r * o < o - .5 && (r *= o), r <= u ? i(t) : "" }
            }, r.nice = function() { return i(q(i(), { floor: function(t) { return e(Math.floor(n(t))) }, ceil: function(t) { return e(Math.ceil(n(t))) } })) }, r
        }

        function J() { var t = Q(L()).domain([1, 10]); return t.copy = function() { return I(t, J()).base(t.base()) }, i.apply(t, arguments), t }

        function K(t) { return function(n) { return Math.sign(n) * Math.log1p(Math.abs(n / t)) } }

        function tt(t) { return function(n) { return Math.sign(n) * Math.expm1(Math.abs(n)) * t } }

        function nt(t) {
            var n = 1,
                e = t(K(n), tt(n));
            return e.constant = function(e) { return arguments.length ? t(K(n = +e), tt(n)) : n }, F(e)
        }

        function et() { var t = nt(L()); return t.copy = function() { return I(t, et()).constant(t.constant()) }, i.apply(t, arguments) }

        function rt(t) { return function(n) { return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t) } }

        function it(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

        function ot(t) { return t < 0 ? -t * t : t * t }

        function ut(t) {
            var n = t(k, k),
                e = 1;

            function r() { return 1 === e ? t(k, k) : .5 === e ? t(it, ot) : t(rt(e), rt(1 / e)) }
            return n.exponent = function(t) { return arguments.length ? (e = +t, r()) : e }, F(n)
        }

        function at() { var t = ut(L()); return t.copy = function() { return I(t, at()).exponent(t.exponent()) }, i.apply(t, arguments), t }

        function st() { return at.apply(null, arguments).exponent(.5) }

        function ct(t) { return Math.sign(t) * t * t }

        function lt(t) { return Math.sign(t) * Math.sqrt(Math.abs(t)) }

        function ft() {
            var t, n = j(),
                e = [0, 1],
                r = !1;

            function o(e) { var i = lt(n(e)); return isNaN(i) ? t : r ? Math.round(i) : i }
            return o.invert = function(t) { return n.invert(ct(t)) }, o.domain = function(t) { return arguments.length ? (n.domain(t), o) : n.domain() }, o.range = function(t) { return arguments.length ? (n.range((e = Array.from(t, A)).map(ct)), o) : e.slice() }, o.rangeRound = function(t) { return o.range(t).round(!0) }, o.round = function(t) { return arguments.length ? (r = !!t, o) : r }, o.clamp = function(t) { return arguments.length ? (n.clamp(t), o) : n.clamp() }, o.unknown = function(n) { return arguments.length ? (t = n, o) : t }, o.copy = function() { return ft(n.domain(), e).round(r).clamp(n.clamp()).unknown(t) }, i.apply(o, arguments), F(o)
        }

        function ht(t, n) {
            let e;
            if (void 0 === n)
                for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);
            else { let r = -1; for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i) }
            return e
        }

        function pt(t, n) {
            let e;
            if (void 0 === n)
                for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);
            else { let r = -1; for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i) }
            return e
        }

        function dt(t, n, e) {
            const r = t[n];
            t[n] = t[e], t[e] = r
        }

        function yt(t, n, e) {
            if (r = (t = Float64Array.from(function*(t, n) {
                    if (void 0 === n)
                        for (let n of t) null != n && (n = +n) >= n && (yield n);
                    else { let e = -1; for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r) }
                }(t, e))).length) {
                if ((n = +n) <= 0 || r < 2) return pt(t);
                if (n >= 1) return ht(t);
                var r, i = (r - 1) * n,
                    o = Math.floor(i),
                    u = ht(function t(n, e, r = 0, i = n.length - 1, o = g) {
                        for (; i > r;) {
                            if (i - r > 600) {
                                const u = i - r + 1,
                                    a = e - r + 1,
                                    s = Math.log(u),
                                    c = .5 * Math.exp(2 * s / 3),
                                    l = .5 * Math.sqrt(s * c * (u - c) / u) * (a - u / 2 < 0 ? -1 : 1);
                                t(n, e, Math.max(r, Math.floor(e - a * c / u + l)), Math.min(i, Math.floor(e + (u - a) * c / u + l)), o)
                            }
                            const u = n[e];
                            let a = r,
                                s = i;
                            for (dt(n, r, e), o(n[i], u) > 0 && dt(n, r, i); a < s;) { for (dt(n, a, s), ++a, --s; o(n[a], u) < 0;) ++a; for (; o(n[s], u) > 0;) --s }
                            0 === o(n[r], u) ? dt(n, r, s) : (++s, dt(n, s, i)), s <= e && (r = s + 1), e <= s && (i = s - 1)
                        }
                        return n
                    }(t, o).subarray(0, o + 1));
                return u + (pt(t.subarray(o + 1)) - u) * (i - o)
            }
        }

        function vt() {
            var t, n = [],
                e = [],
                r = [];

            function o() {
                var t = 0,
                    i = Math.max(1, e.length);
                for (r = new Array(i - 1); ++t < i;) r[t - 1] = yt(n, t / i);
                return u
            }

            function u(n) { return isNaN(n = +n) ? t : e[b(r, n)] }
            return u.invertExtent = function(t) { var i = e.indexOf(t); return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : n[0], i < r.length ? r[i] : n[n.length - 1]] }, u.domain = function(t) {
                if (!arguments.length) return n.slice();
                n = [];
                for (let e of t) null == e || isNaN(e = +e) || n.push(e);
                return n.sort(g), o()
            }, u.range = function(t) { return arguments.length ? (e = Array.from(t), o()) : e.slice() }, u.unknown = function(n) { return arguments.length ? (t = n, u) : t }, u.quantiles = function() { return r.slice() }, u.copy = function() { return vt().domain(n).range(e).unknown(t) }, i.apply(u, arguments)
        }

        function gt() {
            var t, n = 0,
                e = 1,
                r = 1,
                o = [.5],
                u = [0, 1];

            function a(n) { return n <= n ? u[b(o, n, 0, r)] : t }

            function s() { var t = -1; for (o = new Array(r); ++t < r;) o[t] = ((t + 1) * e - (t - r) * n) / (r + 1); return a }
            return a.domain = function(t) { return arguments.length ? ([n, e] = t, n = +n, e = +e, s()) : [n, e] }, a.range = function(t) { return arguments.length ? (r = (u = Array.from(t)).length - 1, s()) : u.slice() }, a.invertExtent = function(t) { var i = u.indexOf(t); return i < 0 ? [NaN, NaN] : i < 1 ? [n, o[0]] : i >= r ? [o[r - 1], e] : [o[i - 1], o[i]] }, a.unknown = function(n) { return arguments.length ? (t = n, a) : a }, a.thresholds = function() { return o.slice() }, a.copy = function() { return gt().domain([n, e]).range(u).unknown(t) }, i.apply(F(a), arguments)
        }

        function _t() {
            var t, n = [.5],
                e = [0, 1],
                r = 1;

            function o(i) { return i <= i ? e[b(n, i, 0, r)] : t }
            return o.domain = function(t) { return arguments.length ? (n = Array.from(t), r = Math.min(n.length, e.length - 1), o) : n.slice() }, o.range = function(t) { return arguments.length ? (e = Array.from(t), r = Math.min(n.length, e.length - 1), o) : e.slice() }, o.invertExtent = function(t) { var r = e.indexOf(t); return [n[r - 1], n[r]] }, o.unknown = function(n) { return arguments.length ? (t = n, o) : t }, o.copy = function() { return _t().domain(n).range(e).unknown(t) }, i.apply(o, arguments)
        }
        var mt = new Date,
            xt = new Date;

        function wt(t, n, e, r) {
            function i(n) { return t(n = 0 === arguments.length ? new Date : new Date(+n)), n }
            return i.floor = function(n) { return t(n = new Date(+n)), n }, i.ceil = function(e) { return t(e = new Date(e - 1)), n(e, 1), t(e), e }, i.round = function(t) {
                var n = i(t),
                    e = i.ceil(t);
                return t - n < e - t ? n : e
            }, i.offset = function(t, e) { return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t }, i.range = function(e, r, o) {
                var u, a = [];
                if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
                do { a.push(u = new Date(+e)), n(e, o), t(e) } while (u < e && e < r);
                return a
            }, i.filter = function(e) {
                return wt((function(n) {
                    if (n >= n)
                        for (; t(n), !e(n);) n.setTime(n - 1)
                }), (function(t, r) {
                    if (t >= t)
                        if (r < 0)
                            for (; ++r <= 0;)
                                for (; n(t, -1), !e(t););
                        else
                            for (; --r >= 0;)
                                for (; n(t, 1), !e(t););
                }))
            }, e && (i.count = function(n, r) { return mt.setTime(+n), xt.setTime(+r), t(mt), t(xt), Math.floor(e(mt, xt)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) { return r(n) % t == 0 } : function(n) { return i.count(0, n) % t == 0 }) : i : null }), i
        }
        var bt = wt((function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }), (function(t, n) { t.setFullYear(t.getFullYear() + n) }), (function(t, n) { return n.getFullYear() - t.getFullYear() }), (function(t) { return t.getFullYear() }));
        bt.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? wt((function(n) { n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0) }), (function(n, e) { n.setFullYear(n.getFullYear() + e * t) })) : null };
        var Mt = bt,
            Tt = (bt.range, wt((function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }), (function(t, n) { t.setMonth(t.getMonth() + n) }), (function(t, n) { return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()) }), (function(t) { return t.getMonth() }))),
            Et = Tt;
        Tt.range;

        function At(t) { return wt((function(n) { n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0) }), (function(t, n) { t.setDate(t.getDate() + 7 * n) }), (function(t, n) { return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5 })) }
        var Ot = At(0),
            kt = At(1),
            Nt = At(2),
            St = At(3),
            Pt = At(4),
            It = At(5),
            Lt = At(6),
            jt = (Ot.range, kt.range, Nt.range, St.range, Pt.range, It.range, Lt.range, wt(t => t.setHours(0, 0, 0, 0), (t, n) => t.setDate(t.getDate() + n), (t, n) => (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5, t => t.getDate() - 1)),
            Ct = jt,
            Rt = (jt.range, wt((function(t) { t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes()) }), (function(t, n) { t.setTime(+t + 36e5 * n) }), (function(t, n) { return (n - t) / 36e5 }), (function(t) { return t.getHours() }))),
            Dt = Rt,
            Ut = (Rt.range, wt((function(t) { t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds()) }), (function(t, n) { t.setTime(+t + 6e4 * n) }), (function(t, n) { return (n - t) / 6e4 }), (function(t) { return t.getMinutes() }))),
            Yt = Ut,
            Ht = (Ut.range, wt((function(t) { t.setTime(t - t.getMilliseconds()) }), (function(t, n) { t.setTime(+t + 1e3 * n) }), (function(t, n) { return (n - t) / 1e3 }), (function(t) { return t.getUTCSeconds() }))),
            Ft = Ht,
            zt = (Ht.range, wt((function() {}), (function(t, n) { t.setTime(+t + n) }), (function(t, n) { return n - t })));
        zt.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? wt((function(n) { n.setTime(Math.floor(n / t) * t) }), (function(n, e) { n.setTime(+n + e * t) }), (function(n, e) { return (e - n) / t })) : zt : null };
        var Bt = zt;
        zt.range;

        function qt(t) { return wt((function(n) { n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCDate(t.getUTCDate() + 7 * n) }), (function(t, n) { return (n - t) / 6048e5 })) }
        var Xt = qt(0),
            Vt = qt(1),
            Wt = qt(2),
            $t = qt(3),
            Gt = qt(4),
            Zt = qt(5),
            Qt = qt(6),
            Jt = (Xt.range, Vt.range, Wt.range, $t.range, Gt.range, Zt.range, Qt.range, wt((function(t) { t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCDate(t.getUTCDate() + n) }), (function(t, n) { return (n - t) / 864e5 }), (function(t) { return t.getUTCDate() - 1 }))),
            Kt = Jt,
            tn = (Jt.range, wt((function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCFullYear(t.getUTCFullYear() + n) }), (function(t, n) { return n.getUTCFullYear() - t.getUTCFullYear() }), (function(t) { return t.getUTCFullYear() })));
        tn.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? wt((function(n) { n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0) }), (function(n, e) { n.setUTCFullYear(n.getUTCFullYear() + e * t) })) : null };
        var nn = tn;
        tn.range;

        function en(t) { if (0 <= t.y && t.y < 100) { var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return n.setFullYear(t.y), n } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

        function rn(t) { if (0 <= t.y && t.y < 100) { var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return n.setUTCFullYear(t.y), n } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

        function on(t, n, e) { return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 } }
        var un, an, sn, cn = { "-": "", _: " ", 0: "0" },
            ln = /^\s*\d+/,
            fn = /^%/,
            hn = /[\\^$*+?|[\]().{}]/g;

        function pn(t, n, e) {
            var r = t < 0 ? "-" : "",
                i = (r ? -t : t) + "",
                o = i.length;
            return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
        }

        function dn(t) { return t.replace(hn, "\\$&") }

        function yn(t) { return new RegExp("^(?:" + t.map(dn).join("|") + ")", "i") }

        function vn(t) { return new Map(t.map((t, n) => [t.toLowerCase(), n])) }

        function gn(t, n, e) { var r = ln.exec(n.slice(e, e + 1)); return r ? (t.w = +r[0], e + r[0].length) : -1 }

        function _n(t, n, e) { var r = ln.exec(n.slice(e, e + 1)); return r ? (t.u = +r[0], e + r[0].length) : -1 }

        function mn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.U = +r[0], e + r[0].length) : -1 }

        function xn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.V = +r[0], e + r[0].length) : -1 }

        function wn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.W = +r[0], e + r[0].length) : -1 }

        function bn(t, n, e) { var r = ln.exec(n.slice(e, e + 4)); return r ? (t.y = +r[0], e + r[0].length) : -1 }

        function Mn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1 }

        function Tn(t, n, e) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1 }

        function En(t, n, e) { var r = ln.exec(n.slice(e, e + 1)); return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1 }

        function An(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.m = r[0] - 1, e + r[0].length) : -1 }

        function On(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.d = +r[0], e + r[0].length) : -1 }

        function kn(t, n, e) { var r = ln.exec(n.slice(e, e + 3)); return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1 }

        function Nn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.H = +r[0], e + r[0].length) : -1 }

        function Sn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.M = +r[0], e + r[0].length) : -1 }

        function Pn(t, n, e) { var r = ln.exec(n.slice(e, e + 2)); return r ? (t.S = +r[0], e + r[0].length) : -1 }

        function In(t, n, e) { var r = ln.exec(n.slice(e, e + 3)); return r ? (t.L = +r[0], e + r[0].length) : -1 }

        function Ln(t, n, e) { var r = ln.exec(n.slice(e, e + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1 }

        function jn(t, n, e) { var r = fn.exec(n.slice(e, e + 1)); return r ? e + r[0].length : -1 }

        function Cn(t, n, e) { var r = ln.exec(n.slice(e)); return r ? (t.Q = +r[0], e + r[0].length) : -1 }

        function Rn(t, n, e) { var r = ln.exec(n.slice(e)); return r ? (t.s = +r[0], e + r[0].length) : -1 }

        function Dn(t, n) { return pn(t.getDate(), n, 2) }

        function Un(t, n) { return pn(t.getHours(), n, 2) }

        function Yn(t, n) { return pn(t.getHours() % 12 || 12, n, 2) }

        function Hn(t, n) { return pn(1 + Ct.count(Mt(t), t), n, 3) }

        function Fn(t, n) { return pn(t.getMilliseconds(), n, 3) }

        function zn(t, n) { return Fn(t, n) + "000" }

        function Bn(t, n) { return pn(t.getMonth() + 1, n, 2) }

        function qn(t, n) { return pn(t.getMinutes(), n, 2) }

        function Xn(t, n) { return pn(t.getSeconds(), n, 2) }

        function Vn(t) { var n = t.getDay(); return 0 === n ? 7 : n }

        function Wn(t, n) { return pn(Ot.count(Mt(t) - 1, t), n, 2) }

        function $n(t) { var n = t.getDay(); return n >= 4 || 0 === n ? Pt(t) : Pt.ceil(t) }

        function Gn(t, n) { return t = $n(t), pn(Pt.count(Mt(t), t) + (4 === Mt(t).getDay()), n, 2) }

        function Zn(t) { return t.getDay() }

        function Qn(t, n) { return pn(kt.count(Mt(t) - 1, t), n, 2) }

        function Jn(t, n) { return pn(t.getFullYear() % 100, n, 2) }

        function Kn(t, n) { return pn((t = $n(t)).getFullYear() % 100, n, 2) }

        function te(t, n) { return pn(t.getFullYear() % 1e4, n, 4) }

        function ne(t, n) { var e = t.getDay(); return pn((t = e >= 4 || 0 === e ? Pt(t) : Pt.ceil(t)).getFullYear() % 1e4, n, 4) }

        function ee(t) { var n = t.getTimezoneOffset(); return (n > 0 ? "-" : (n *= -1, "+")) + pn(n / 60 | 0, "0", 2) + pn(n % 60, "0", 2) }

        function re(t, n) { return pn(t.getUTCDate(), n, 2) }

        function ie(t, n) { return pn(t.getUTCHours(), n, 2) }

        function oe(t, n) { return pn(t.getUTCHours() % 12 || 12, n, 2) }

        function ue(t, n) { return pn(1 + Kt.count(nn(t), t), n, 3) }

        function ae(t, n) { return pn(t.getUTCMilliseconds(), n, 3) }

        function se(t, n) { return ae(t, n) + "000" }

        function ce(t, n) { return pn(t.getUTCMonth() + 1, n, 2) }

        function le(t, n) { return pn(t.getUTCMinutes(), n, 2) }

        function fe(t, n) { return pn(t.getUTCSeconds(), n, 2) }

        function he(t) { var n = t.getUTCDay(); return 0 === n ? 7 : n }

        function pe(t, n) { return pn(Xt.count(nn(t) - 1, t), n, 2) }

        function de(t) { var n = t.getUTCDay(); return n >= 4 || 0 === n ? Gt(t) : Gt.ceil(t) }

        function ye(t, n) { return t = de(t), pn(Gt.count(nn(t), t) + (4 === nn(t).getUTCDay()), n, 2) }

        function ve(t) { return t.getUTCDay() }

        function ge(t, n) { return pn(Vt.count(nn(t) - 1, t), n, 2) }

        function _e(t, n) { return pn(t.getUTCFullYear() % 100, n, 2) }

        function me(t, n) { return pn((t = de(t)).getUTCFullYear() % 100, n, 2) }

        function xe(t, n) { return pn(t.getUTCFullYear() % 1e4, n, 4) }

        function we(t, n) { var e = t.getUTCDay(); return pn((t = e >= 4 || 0 === e ? Gt(t) : Gt.ceil(t)).getUTCFullYear() % 1e4, n, 4) }

        function be() { return "+0000" }

        function Me() { return "%" }

        function Te(t) { return +t }

        function Ee(t) { return Math.floor(+t / 1e3) }
        un = function(t) {
            var n = t.dateTime,
                e = t.date,
                r = t.time,
                i = t.periods,
                o = t.days,
                u = t.shortDays,
                a = t.months,
                s = t.shortMonths,
                c = yn(i),
                l = vn(i),
                f = yn(o),
                h = vn(o),
                p = yn(u),
                d = vn(u),
                y = yn(a),
                v = vn(a),
                g = yn(s),
                _ = vn(s),
                m = { a: function(t) { return u[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return s[t.getMonth()] }, B: function(t) { return a[t.getMonth()] }, c: null, d: Dn, e: Dn, f: zn, g: Kn, G: ne, H: Un, I: Yn, j: Hn, L: Fn, m: Bn, M: qn, p: function(t) { return i[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: Te, s: Ee, S: Xn, u: Vn, U: Wn, V: Gn, w: Zn, W: Qn, x: null, X: null, y: Jn, Y: te, Z: ee, "%": Me },
                x = { a: function(t) { return u[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return s[t.getUTCMonth()] }, B: function(t) { return a[t.getUTCMonth()] }, c: null, d: re, e: re, f: se, g: me, G: we, H: ie, I: oe, j: ue, L: ae, m: ce, M: le, p: function(t) { return i[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: Te, s: Ee, S: fe, u: he, U: pe, V: ye, w: ve, W: ge, x: null, X: null, y: _e, Y: xe, Z: be, "%": Me },
                w = { a: function(t, n, e) { var r = p.exec(n.slice(e)); return r ? (t.w = d.get(r[0].toLowerCase()), e + r[0].length) : -1 }, A: function(t, n, e) { var r = f.exec(n.slice(e)); return r ? (t.w = h.get(r[0].toLowerCase()), e + r[0].length) : -1 }, b: function(t, n, e) { var r = g.exec(n.slice(e)); return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1 }, B: function(t, n, e) { var r = y.exec(n.slice(e)); return r ? (t.m = v.get(r[0].toLowerCase()), e + r[0].length) : -1 }, c: function(t, e, r) { return T(t, n, e, r) }, d: On, e: On, f: Ln, g: Mn, G: bn, H: Nn, I: Nn, j: kn, L: In, m: An, M: Sn, p: function(t, n, e) { var r = c.exec(n.slice(e)); return r ? (t.p = l.get(r[0].toLowerCase()), e + r[0].length) : -1 }, q: En, Q: Cn, s: Rn, S: Pn, u: _n, U: mn, V: xn, w: gn, W: wn, x: function(t, n, r) { return T(t, e, n, r) }, X: function(t, n, e) { return T(t, r, n, e) }, y: Mn, Y: bn, Z: Tn, "%": jn };

            function b(t, n) {
                return function(e) {
                    var r, i, o, u = [],
                        a = -1,
                        s = 0,
                        c = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++a < c;) 37 === t.charCodeAt(a) && (u.push(t.slice(s, a)), null != (i = cn[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), s = a + 1);
                    return u.push(t.slice(s, a)), u.join("")
                }
            }

            function M(t, n) { return function(e) { var r, i, o = on(1900, void 0, 1); if (T(o, t, e += "", 0) != e.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (i = (r = rn(on(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Vt.ceil(r) : Vt(r), r = Kt.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = en(on(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? kt.ceil(r) : kt(r), r = Ct.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? rn(on(o.y, 0, 1)).getUTCDay() : en(on(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, rn(o)) : en(o) } }

            function T(t, n, e, r) { for (var i, o, u = 0, a = n.length, s = e.length; u < a;) { if (r >= s) return -1; if (37 === (i = n.charCodeAt(u++))) { if (i = n.charAt(u++), !(o = w[i in cn ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1 } else if (i != e.charCodeAt(r++)) return -1 } return r }
            return m.x = b(e, m), m.X = b(r, m), m.c = b(n, m), x.x = b(e, x), x.X = b(r, x), x.c = b(n, x), { format: function(t) { var n = b(t += "", m); return n.toString = function() { return t }, n }, parse: function(t) { var n = M(t += "", !1); return n.toString = function() { return t }, n }, utcFormat: function(t) { var n = b(t += "", x); return n.toString = function() { return t }, n }, utcParse: function(t) { var n = M(t += "", !0); return n.toString = function() { return t }, n } }
        }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }), an = un.format, un.parse, sn = un.utcFormat, un.utcParse;

        function Ae(t) { return new Date(t) }

        function Oe(t) { return t instanceof Date ? +t : +new Date(+t) }

        function ke(t, n, e, r, i, o, u, a, s) {
            var c = j(),
                l = c.invert,
                f = c.domain,
                h = s(".%L"),
                p = s(":%S"),
                d = s("%I:%M"),
                y = s("%I %p"),
                g = s("%a %d"),
                m = s("%b %d"),
                x = s("%B"),
                w = s("%Y"),
                b = [
                    [u, 1, 1e3],
                    [u, 5, 5e3],
                    [u, 15, 15e3],
                    [u, 30, 3e4],
                    [o, 1, 6e4],
                    [o, 5, 3e5],
                    [o, 15, 9e5],
                    [o, 30, 18e5],
                    [i, 1, 36e5],
                    [i, 3, 108e5],
                    [i, 6, 216e5],
                    [i, 12, 432e5],
                    [r, 1, 864e5],
                    [r, 2, 1728e5],
                    [e, 1, 6048e5],
                    [n, 1, 2592e6],
                    [n, 3, 7776e6],
                    [t, 1, 31536e6]
                ];

            function M(a) { return (u(a) < a ? h : o(a) < a ? p : i(a) < a ? d : r(a) < a ? y : n(a) < a ? e(a) < a ? g : m : t(a) < a ? x : w)(a) }

            function T(n, e, r) {
                if (null == n && (n = 10), "number" == typeof n) {
                    var i, o = Math.abs(r - e) / n,
                        u = _((function(t) { return t[2] })).right(b, o);
                    return u === b.length ? (i = v(e / 31536e6, r / 31536e6, n), n = t) : u ? (i = (u = b[o / b[u - 1][2] < b[u][2] / o ? u - 1 : u])[1], n = u[0]) : (i = Math.max(v(e, r, n), 1), n = a), n.every(i)
                }
                return n
            }
            return c.invert = function(t) { return new Date(l(t)) }, c.domain = function(t) { return arguments.length ? f(Array.from(t, Oe)) : f().map(Ae) }, c.ticks = function(t) {
                var n, e = f(),
                    r = e[0],
                    i = e[e.length - 1],
                    o = i < r;
                return o && (n = r, r = i, i = n), n = (n = T(t, r, i)) ? n.range(r, i + 1) : [], o ? n.reverse() : n
            }, c.tickFormat = function(t, n) { return null == n ? M : s(n) }, c.nice = function(t) { var n = f(); return (t = T(t, n[0], n[n.length - 1])) ? f(q(n, t)) : c }, c.copy = function() { return I(c, ke(t, n, e, r, i, o, u, a, s)) }, c
        }
        var Ne = function() { return i.apply(ke(Mt, Et, Ot, Ct, Dt, Yt, Ft, Bt, an).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) },
            Se = wt((function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }), (function(t, n) { t.setUTCMonth(t.getUTCMonth() + n) }), (function(t, n) { return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()) }), (function(t) { return t.getUTCMonth() })),
            Pe = Se,
            Ie = (Se.range, wt((function(t) { t.setUTCMinutes(0, 0, 0) }), (function(t, n) { t.setTime(+t + 36e5 * n) }), (function(t, n) { return (n - t) / 36e5 }), (function(t) { return t.getUTCHours() }))),
            Le = Ie,
            je = (Ie.range, wt((function(t) { t.setUTCSeconds(0, 0) }), (function(t, n) { t.setTime(+t + 6e4 * n) }), (function(t, n) { return (n - t) / 6e4 }), (function(t) { return t.getUTCMinutes() }))),
            Ce = je,
            Re = (je.range, function() { return i.apply(ke(nn, Pe, Xt, Kt, Le, Ce, Ft, Bt, sn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) });

        function De() {
            var t, n, e, r, i, o = 0,
                u = 1,
                a = k,
                s = !1;

            function c(n) { return isNaN(n = +n) ? i : a(0 === e ? .5 : (n = (r(n) - t) * e, s ? Math.max(0, Math.min(1, n)) : n)) }

            function l(t) { return function(n) { var e, r; return arguments.length ? ([e, r] = n, a = t(e, r), c) : [a(0), a(1)] } }
            return c.domain = function(i) { return arguments.length ? ([o, u] = i, t = r(o = +o), n = r(u = +u), e = t === n ? 0 : 1 / (n - t), c) : [o, u] }, c.clamp = function(t) { return arguments.length ? (s = !!t, c) : s }, c.interpolator = function(t) { return arguments.length ? (a = t, c) : a }, c.range = l(M.a), c.rangeRound = l(E.a), c.unknown = function(t) { return arguments.length ? (i = t, c) : i },
                function(i) { return r = i, t = i(o), n = i(u), e = t === n ? 0 : 1 / (n - t), c }
        }

        function Ue(t, n) { return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown()) }

        function Ye() { var t = F(De()(k)); return t.copy = function() { return Ue(t, Ye()) }, o.apply(t, arguments) }

        function He() { var t = Q(De()).domain([1, 10]); return t.copy = function() { return Ue(t, He()).base(t.base()) }, o.apply(t, arguments) }

        function Fe() { var t = nt(De()); return t.copy = function() { return Ue(t, Fe()).constant(t.constant()) }, o.apply(t, arguments) }

        function ze() { var t = ut(De()); return t.copy = function() { return Ue(t, ze()).exponent(t.exponent()) }, o.apply(t, arguments) }

        function Be() { return ze.apply(null, arguments).exponent(.5) }

        function qe() {
            var t = [],
                n = k;

            function e(e) { if (!isNaN(e = +e)) return n((b(t, e, 1) - 1) / (t.length - 1)) }
            return e.domain = function(n) {
                if (!arguments.length) return t.slice();
                t = [];
                for (let e of n) null == e || isNaN(e = +e) || t.push(e);
                return t.sort(g), e
            }, e.interpolator = function(t) { return arguments.length ? (n = t, e) : n }, e.range = function() { return t.map((e, r) => n(r / (t.length - 1))) }, e.quantiles = function(n) { return Array.from({ length: n + 1 }, (e, r) => yt(t, r / n)) }, e.copy = function() { return qe(n).domain(t) }, o.apply(e, arguments)
        }
        var Xe = e(57);

        function Ve() {
            var t, n, e, r, i, o, u, a = 0,
                s = .5,
                c = 1,
                l = 1,
                f = k,
                h = !1;

            function p(t) { return isNaN(t = +t) ? u : (t = .5 + ((t = +o(t)) - n) * (l * t < l * n ? r : i), f(h ? Math.max(0, Math.min(1, t)) : t)) }

            function d(t) { return function(n) { var e, r, i; return arguments.length ? ([e, r, i] = n, f = Object(Xe.a)(t, [e, r, i]), p) : [f(0), f(.5), f(1)] } }
            return p.domain = function(u) { return arguments.length ? ([a, s, c] = u, t = o(a = +a), n = o(s = +s), e = o(c = +c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p) : [a, s, c] }, p.clamp = function(t) { return arguments.length ? (h = !!t, p) : h }, p.interpolator = function(t) { return arguments.length ? (f = t, p) : f }, p.range = d(M.a), p.rangeRound = d(E.a), p.unknown = function(t) { return arguments.length ? (u = t, p) : u },
                function(u) { return o = u, t = u(a), n = u(s), e = u(c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p }
        }

        function We() { var t = F(Ve()(k)); return t.copy = function() { return Ue(t, We()) }, o.apply(t, arguments) }

        function $e() { var t = Q(Ve()).domain([.1, 1, 10]); return t.copy = function() { return Ue(t, $e()).base(t.base()) }, o.apply(t, arguments) }

        function Ge() { var t = nt(Ve()); return t.copy = function() { return Ue(t, Ge()).constant(t.constant()) }, o.apply(t, arguments) }

        function Ze() { var t = ut(Ve()); return t.copy = function() { return Ue(t, Ze()).exponent(t.exponent()) }, o.apply(t, arguments) }

        function Qe() { return Ze.apply(null, arguments).exponent(.5) }
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "zoom", (function() { return Bt })), e.d(n, "zoomTransform", (function() { return jt })), e.d(n, "zoomIdentity", (function() { return Lt }));
        var r = { value: () => {} };

        function i() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new o(r)
        }

        function o(t) { this._ = t }

        function u(t, n) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var e = "",
                    r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return { type: t, name: e }
            }))
        }

        function a(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function s(t, n, e) {
            for (var i = 0, o = t.length; i < o; ++i)
                if (t[i].name === n) { t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1)); break }
            return null != e && t.push({ name: n, value: e }), t
        }
        o.prototype = i.prototype = {
            constructor: o,
            on: function(t, n) {
                var e, r = this._,
                    i = u(t + "", r),
                    o = -1,
                    c = i.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < c;)
                        if (e = (t = i[o]).type) r[e] = s(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = s(r[e], t.name, null);
                    return this
                }
                for (; ++o < c;)
                    if ((e = (t = i[o]).type) && (e = a(r[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new o(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e) }
        };
        var c = i,
            l = e(40);
        var f = function(t) { t.preventDefault(), t.stopImmediatePropagation() },
            h = function(t) {
                var n = t.document.documentElement,
                    e = Object(l.a)(t).on("dragstart.drag", f, !0);
                "onselectstart" in n ? e.on("selectstart.drag", f, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function p(t, n) {
            var e = t.document.documentElement,
                r = Object(l.a)(t).on("dragstart.drag", null);
            n && (r.on("click.drag", f, !0), setTimeout((function() { r.on("click.drag", null) }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }
        var d, y, v = e(58),
            g = e(41),
            _ = e(7),
            m = 0,
            x = 0,
            w = 0,
            b = 0,
            M = 0,
            T = 0,
            E = "object" == typeof performance && performance.now ? performance : Date,
            A = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };

        function O() { return M || (A(k), M = E.now() + T) }

        function k() { M = 0 }

        function N() { this._call = this._time = this._next = null }

        function S(t, n, e) { var r = new N; return r.restart(t, n, e), r }

        function P() {
            M = (b = E.now()) + T, m = x = 0;
            try {! function() { O(), ++m; for (var t, n = d; n;)(t = M - n._time) >= 0 && n._call.call(null, t), n = n._next;--m }() } finally {
                m = 0,
                    function() {
                        var t, n, e = d,
                            r = 1 / 0;
                        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : d = n);
                        y = t, L(r)
                    }(), M = 0
            }
        }

        function I() {
            var t = E.now(),
                n = t - b;
            n > 1e3 && (T -= n, b = t)
        }

        function L(t) { m || (x && (x = clearTimeout(x)), t - M > 24 ? (t < 1 / 0 && (x = setTimeout(P, t - E.now() - T)), w && (w = clearInterval(w))) : (w || (b = E.now(), w = setInterval(I, 1e3)), m = 1, A(P))) }
        N.prototype = S.prototype = {
            constructor: N,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? O() : +e) + (null == n ? 0 : +n), this._next || y === this || (y ? y._next = this : d = this, y = this), this._call = t, this._time = e, L()
            },
            stop: function() { this._call && (this._call = null, this._time = 1 / 0, L()) }
        };
        var j = function(t, n, e) { var r = new N; return n = null == n ? 0 : +n, r.restart(e => { r.stop(), t(e + n) }, n, e), r },
            C = c("start", "end", "cancel", "interrupt"),
            R = [],
            D = function(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) { if (e in u) return } else t.__transition = {};
                ! function(t, n, e) {
                    var r, i = t.__transition;

                    function o(s) {
                        var c, l, f, h;
                        if (1 !== e.state) return a();
                        for (c in i)
                            if ((h = i[c]).name === e.name) {
                                if (3 === h.state) return j(o);
                                4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[c]) : +c < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[c])
                            }
                        if (j((function() { 3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(s)) })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                            for (e.state = 3, r = new Array(f = e.tween.length), c = 0, l = -1; c < f; ++c)(h = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = h);
                            r.length = l + 1
                        }
                    }

                    function u(n) {
                        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1), o = -1, u = r.length; ++o < u;) r[o].call(t, i);
                        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                    }

                    function a() {
                        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                        delete t.__transition
                    }
                    i[n] = e, e.timer = S((function(t) { e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay) }), 0, e.time)
                }(t, e, { name: n, index: r, group: i, on: C, tween: R, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: 0 })
            };

        function U(t, n) { var e = H(t, n); if (e.state > 0) throw new Error("too late; already scheduled"); return e }

        function Y(t, n) { var e = H(t, n); if (e.state > 3) throw new Error("too late; already running"); return e }

        function H(t, n) { var e = t.__transition; if (!e || !(e = e[n])) throw new Error("transition not found"); return e }
        var F = function(t, n) {
                var e, r, i, o = t.__transition,
                    u = !0;
                if (o) {
                    for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                    u && delete t.__transition
                }
            },
            z = e(50),
            B = e(22);

        function q(t, n) {
            var e, r;
            return function() {
                var i = Y(this, t),
                    o = i.tween;
                if (o !== e)
                    for (var u = 0, a = (r = e = o).length; u < a; ++u)
                        if (r[u].name === n) {
                            (r = r.slice()).splice(u, 1);
                            break
                        }
                i.tween = r
            }
        }

        function X(t, n, e) {
            var r, i;
            if ("function" != typeof e) throw new Error;
            return function() {
                var o = Y(this, t),
                    u = o.tween;
                if (u !== r) {
                    i = (r = u).slice();
                    for (var a = { name: n, value: e }, s = 0, c = i.length; s < c; ++s)
                        if (i[s].name === n) { i[s] = a; break }
                    s === c && i.push(a)
                }
                o.tween = i
            }
        }

        function V(t, n, e) {
            var r = t._id;
            return t.each((function() {
                    var t = Y(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                })),
                function(t) { return H(t, r).value[n] }
        }
        var W = e(1),
            $ = e(3),
            G = e(17),
            Z = e(34),
            Q = function(t, n) { var e; return ("number" == typeof n ? $.a : n instanceof W.e ? G.a : (e = Object(W.e)(n)) ? (n = e, G.a) : Z.a)(t, n) };

        function J(t) { return function() { this.removeAttribute(t) } }

        function K(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

        function tt(t, n, e) { var r, i, o = e + ""; return function() { var u = this.getAttribute(t); return u === o ? null : u === r ? i : i = n(r = u, e) } }

        function nt(t, n, e) { var r, i, o = e + ""; return function() { var u = this.getAttributeNS(t.space, t.local); return u === o ? null : u === r ? i : i = n(r = u, e) } }

        function et(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, s = e(this);
                if (null != s) return (u = this.getAttribute(t)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, s));
                this.removeAttribute(t)
            }
        }

        function rt(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, s = e(this);
                if (null != s) return (u = this.getAttributeNS(t.space, t.local)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, s));
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function it(t, n) { return function(e) { this.setAttribute(t, n.call(this, e)) } }

        function ot(t, n) { return function(e) { this.setAttributeNS(t.space, t.local, n.call(this, e)) } }

        function ut(t, n) {
            var e, r;

            function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && ot(t, i)), e }
            return i._value = n, i
        }

        function at(t, n) {
            var e, r;

            function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && it(t, i)), e }
            return i._value = n, i
        }

        function st(t, n) { return function() { U(this, t).delay = +n.apply(this, arguments) } }

        function ct(t, n) {
            return n = +n,
                function() { U(this, t).delay = n }
        }

        function lt(t, n) { return function() { Y(this, t).duration = +n.apply(this, arguments) } }

        function ft(t, n) {
            return n = +n,
                function() { Y(this, t).duration = n }
        }

        function ht(t, n) { if ("function" != typeof n) throw new Error; return function() { Y(this, t).ease = n } }
        var pt = e(13);

        function dt(t, n, e) {
            var r, i, o = function(t) { return (t + "").trim().split(/^|\s+/).every((function(t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || "start" === t })) }(n) ? U : Y;
            return function() {
                var u = o(this, t),
                    a = u.on;
                a !== r && (i = (r = a).copy()).on(n, e), u.on = i
            }
        }
        var yt = e(23),
            vt = e(38),
            gt = _.b.prototype.constructor,
            _t = e(39);

        function mt(t) { return function() { this.style.removeProperty(t) } }

        function xt(t, n, e) { return function(r) { this.style.setProperty(t, n.call(this, r), e) } }

        function wt(t, n, e) {
            var r, i;

            function o() { var o = n.apply(this, arguments); return o !== i && (r = (i = o) && xt(t, o, e)), r }
            return o._value = n, o
        }

        function bt(t) { return function(n) { this.textContent = t.call(this, n) } }

        function Mt(t) {
            var n, e;

            function r() { var r = t.apply(this, arguments); return r !== e && (n = (e = r) && bt(r)), n }
            return r._value = t, r
        }
        var Tt = 0;

        function Et(t, n, e, r) { this._groups = t, this._parents = n, this._name = e, this._id = r }

        function At() { return ++Tt }
        var Ot = _.b.prototype;
        Et.prototype = function(t) { return Object(_.b)().transition(t) }.prototype = {
            constructor: Et,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(yt.a)(t));
                for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                    for (var a, s, c = r[u], l = c.length, f = o[u] = new Array(l), h = 0; h < l; ++h)(a = c[h]) && (s = t.call(a, a.__data__, h, c)) && ("__data__" in a && (s.__data__ = a.__data__), f[h] = s, D(f[h], n, e, h, f, H(a, e)));
                return new Et(o, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(vt.a)(t));
                for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                    for (var s, c = r[a], l = c.length, f = 0; f < l; ++f)
                        if (s = c[f]) {
                            for (var h, p = t.call(s, s.__data__, f, c), d = H(s, e), y = 0, v = p.length; y < v; ++y)(h = p[y]) && D(h, n, e, y, p, d);
                            o.push(p), u.push(s)
                        }
                return new Et(o, u, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = Object(pt.b)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, s = r[i] = [], c = 0; c < a; ++c)(o = u[c]) && t.call(o, o.__data__, c, u) && s.push(o);
                return new Et(r, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var s, c = n[a], l = e[a], f = c.length, h = u[a] = new Array(f), p = 0; p < f; ++p)(s = c[p] || l[p]) && (h[p] = s);
                for (; a < r; ++a) u[a] = n[a];
                return new Et(u, this._parents, this._name, this._id)
            },
            selection: function() { return new gt(this._groups, this._parents) },
            transition: function() {
                for (var t = this._name, n = this._id, e = At(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], s = a.length, c = 0; c < s; ++c)
                        if (u = a[c]) {
                            var l = H(u, n);
                            D(u, t, e, c, a, { time: l.time + l.delay + l.duration, delay: 0, duration: l.duration, ease: l.ease })
                        }
                return new Et(r, this._parents, t, e)
            },
            call: Ot.call,
            nodes: Ot.nodes,
            node: Ot.node,
            size: Ot.size,
            empty: Ot.empty,
            each: Ot.each,
            on: function(t, n) { var e = this._id; return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(dt(e, t, n)) },
            attr: function(t, n) {
                var e = Object(B.a)(t),
                    r = "transform" === e ? z.b : Q;
                return this.attrTween(t, "function" == typeof n ? (e.local ? rt : et)(e, r, V(this, "attr." + t, n)) : null == n ? (e.local ? K : J)(e) : (e.local ? nt : tt)(e, r, n))
            },
            attrTween: function(t, n) { var e = "attr." + t; if (arguments.length < 2) return (e = this.tween(e)) && e._value; if (null == n) return this.tween(e, null); if ("function" != typeof n) throw new Error; var r = Object(B.a)(t); return this.tween(e, (r.local ? ut : at)(r, n)) },
            style: function(t, n, e) {
                var r = "transform" == (t += "") ? z.a : Q;
                return null == n ? this.styleTween(t, function(t, n) {
                    var e, r, i;
                    return function() {
                        var o = Object(_t.b)(this, t),
                            u = (this.style.removeProperty(t), Object(_t.b)(this, t));
                        return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
                    }
                }(t, r)).on("end.style." + t, mt(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                    var r, i, o;
                    return function() {
                        var u = Object(_t.b)(this, t),
                            a = e(this),
                            s = a + "";
                        return null == a && (this.style.removeProperty(t), s = a = Object(_t.b)(this, t)), u === s ? null : u === r && s === i ? o : (i = s, o = n(r = u, a))
                    }
                }(t, r, V(this, "style." + t, n))).each(function(t, n) {
                    var e, r, i, o, u = "style." + n,
                        a = "end." + u;
                    return function() {
                        var s = Y(this, t),
                            c = s.on,
                            l = null == s.value[u] ? o || (o = mt(n)) : void 0;
                        c === e && i === l || (r = (e = c).copy()).on(a, i = l), s.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function(t, n, e) { var r, i, o = e + ""; return function() { var u = Object(_t.b)(this, t); return u === o ? null : u === r ? i : i = n(r = u, e) } }(t, r, n), e).on("end.style." + t, null)
            },
            styleTween: function(t, n, e) { var r = "style." + (t += ""); if (arguments.length < 2) return (r = this.tween(r)) && r._value; if (null == n) return this.tween(r, null); if ("function" != typeof n) throw new Error; return this.tween(r, wt(t, n, null == e ? "" : e)) },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                    }
                }(V(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + ""))
            },
            textTween: function(t) { var n = "text"; if (arguments.length < 1) return (n = this.tween(n)) && n._value; if (null == t) return this.tween(n, null); if ("function" != typeof t) throw new Error; return this.tween(n, Mt(t)) },
            remove: function() {
                return this.on("end.remove", (t = this._id, function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }));
                var t
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = H(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? q : X)(e, t, n))
            },
            delay: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? st : ct)(n, t)) : H(this.node(), n).delay },
            duration: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? lt : ft)(n, t)) : H(this.node(), n).duration },
            ease: function(t) { var n = this._id; return arguments.length ? this.each(ht(n, t)) : H(this.node(), n).ease },
            easeVarying: function(t) {
                if ("function" != typeof t) throw new Error;
                return this.each(function(t, n) {
                    return function() {
                        var e = n.apply(this, arguments);
                        if ("function" != typeof e) throw new Error;
                        Y(this, t).ease = e
                    }
                }(this._id, t))
            },
            end: function() {
                var t, n, e = this,
                    r = e._id,
                    i = e.size();
                return new Promise((function(o, u) {
                    var a = { value: u },
                        s = { value: function() { 0 == --i && o() } };
                    e.each((function() {
                        var e = Y(this, r),
                            i = e.on;
                        i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(s)), e.on = n
                    })), 0 === i && o()
                }))
            },
            [Symbol.iterator]: Ot[Symbol.iterator]
        };
        var kt = { time: null, delay: 0, duration: 250, ease: function(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 } };

        function Nt(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
            return e
        }
        _.b.prototype.interrupt = function(t) { return this.each((function() { F(this, t) })) }, _.b.prototype.transition = function(t) {
            var n, e;
            t instanceof Et ? (n = t._id, t = t._name) : (n = At(), (e = kt).time = O(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], s = a.length, c = 0; c < s; ++c)(u = a[c]) && D(u, t, n, c, a, e || Nt(u, n));
            return new Et(r, this._parents, t, n)
        };
        var St = t => () => t;

        function Pt(t, { sourceEvent: n, target: e, transform: r, dispatch: i }) { Object.defineProperties(this, { type: { value: t, enumerable: !0, configurable: !0 }, sourceEvent: { value: n, enumerable: !0, configurable: !0 }, target: { value: e, enumerable: !0, configurable: !0 }, transform: { value: r, enumerable: !0, configurable: !0 }, _: { value: i } }) }

        function It(t, n, e) { this.k = t, this.x = n, this.y = e }
        It.prototype = { constructor: It, scale: function(t) { return 1 === t ? this : new It(this.k * t, this.x, this.y) }, translate: function(t, n) { return 0 === t & 0 === n ? this : new It(this.k, this.x + this.k * t, this.y + this.k * n) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } };
        var Lt = new It(1, 0, 0);

        function jt(t) {
            for (; !t.__zoom;)
                if (!(t = t.parentNode)) return Lt;
            return t.__zoom
        }

        function Ct(t) { t.stopImmediatePropagation() }
        jt.prototype = It.prototype;
        var Rt = function(t) { t.preventDefault(), t.stopImmediatePropagation() };

        function Dt(t) { return !(t.ctrlKey && "wheel" !== t.type || t.button) }

        function Ut() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height]
            ] : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ] : [
                [0, 0],
                [t.clientWidth, t.clientHeight]
            ]
        }

        function Yt() { return this.__zoom || Lt }

        function Ht(t) { return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1) }

        function Ft() { return navigator.maxTouchPoints || "ontouchstart" in this }

        function zt(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0],
                i = t.invertX(n[1][0]) - e[1][0],
                o = t.invertY(n[0][1]) - e[0][1],
                u = t.invertY(n[1][1]) - e[1][1];
            return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
        }
        var Bt = function() {
            var t, n, e, r = Dt,
                i = Ut,
                o = zt,
                u = Ht,
                a = Ft,
                s = [0, 1 / 0],
                f = [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0]
                ],
                d = 250,
                y = v.a,
                _ = c("start", "zoom", "end"),
                m = 0,
                x = 10;

            function w(t) { t.property("__zoom", Yt).on("wheel.zoom", k).on("mousedown.zoom", N).on("dblclick.zoom", S).filter(a).on("touchstart.zoom", P).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

            function b(t, n) { return (n = Math.max(s[0], Math.min(s[1], n))) === t.k ? t : new It(n, t.x, t.y) }

            function M(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new It(t.k, r, i)
            }

            function T(t) { return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2] }

            function E(t, n, e, r) {
                t.on("start.zoom", (function() { A(this, arguments).event(r).start() })).on("interrupt.zoom end.zoom", (function() { A(this, arguments).event(r).end() })).tween("zoom", (function() {
                    var t = this,
                        o = arguments,
                        u = A(t, o).event(r),
                        a = i.apply(t, o),
                        s = null == e ? T(a) : "function" == typeof e ? e.apply(t, o) : e,
                        c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                        l = t.__zoom,
                        f = "function" == typeof n ? n.apply(t, o) : n,
                        h = y(l.invert(s).concat(c / l.k), f.invert(s).concat(c / f.k));
                    return function(t) {
                        if (1 === t) t = f;
                        else {
                            var n = h(t),
                                e = c / n[2];
                            t = new It(e, s[0] - n[0] * e, s[1] - n[1] * e)
                        }
                        u.zoom(null, t)
                    }
                }))
            }

            function A(t, n, e) { return !e && t.__zooming || new O(t, n) }

            function O(t, n) { this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0 }

            function k(t, ...n) {
                if (r.apply(this, arguments)) {
                    var e = A(this, n).event(t),
                        i = this.__zoom,
                        a = Math.max(s[0], Math.min(s[1], i.k * Math.pow(2, u.apply(this, arguments)))),
                        c = Object(g.a)(t);
                    if (e.wheel) e.mouse[0][0] === c[0] && e.mouse[0][1] === c[1] || (e.mouse[1] = i.invert(e.mouse[0] = c)), clearTimeout(e.wheel);
                    else {
                        if (i.k === a) return;
                        e.mouse = [c, i.invert(c)], F(this), e.start()
                    }
                    Rt(t), e.wheel = setTimeout(l, 150), e.zoom("mouse", o(M(b(i, a), e.mouse[0], e.mouse[1]), e.extent, f))
                }

                function l() { e.wheel = null, e.end() }
            }

            function N(t, ...n) {
                if (!e && r.apply(this, arguments)) {
                    var i = A(this, n, !0).event(t),
                        u = Object(l.a)(t.view).on("mousemove.zoom", y, !0).on("mouseup.zoom", v, !0),
                        a = Object(g.a)(t, s),
                        s = t.currentTarget,
                        c = t.clientX,
                        d = t.clientY;
                    h(t.view), Ct(t), i.mouse = [a, this.__zoom.invert(a)], F(this), i.start()
                }

                function y(t) {
                    if (Rt(t), !i.moved) {
                        var n = t.clientX - c,
                            e = t.clientY - d;
                        i.moved = n * n + e * e > m
                    }
                    i.event(t).zoom("mouse", o(M(i.that.__zoom, i.mouse[0] = Object(g.a)(t, s), i.mouse[1]), i.extent, f))
                }

                function v(t) { u.on("mousemove.zoom mouseup.zoom", null), p(t.view, i.moved), Rt(t), i.event(t).end() }
            }

            function S(t, ...n) {
                if (r.apply(this, arguments)) {
                    var e = this.__zoom,
                        u = Object(g.a)(t.changedTouches ? t.changedTouches[0] : t, this),
                        a = e.invert(u),
                        s = e.k * (t.shiftKey ? .5 : 2),
                        c = o(M(b(e, s), u, a), i.apply(this, n), f);
                    Rt(t), d > 0 ? Object(l.a)(this).transition().duration(d).call(E, c, u, t) : Object(l.a)(this).call(w.transform, c, u, t)
                }
            }

            function P(e, ...i) {
                if (r.apply(this, arguments)) {
                    var o, u, a, s, c = e.touches,
                        l = c.length,
                        f = A(this, i, e.changedTouches.length === l).event(e);
                    for (Ct(e), u = 0; u < l; ++u) a = c[u], s = [s = Object(g.a)(a, this), this.__zoom.invert(s), a.identifier], f.touch0 ? f.touch1 || f.touch0[2] === s[2] || (f.touch1 = s, f.taps = 0) : (f.touch0 = s, o = !0, f.taps = 1 + !!t);
                    t && (t = clearTimeout(t)), o && (f.taps < 2 && (n = s[0], t = setTimeout((function() { t = null }), 500)), F(this), f.start())
                }
            }

            function I(t, ...n) {
                if (this.__zooming) {
                    var e, r, i, u, a = A(this, n).event(t),
                        s = t.changedTouches,
                        c = s.length;
                    for (Rt(t), e = 0; e < c; ++e) r = s[e], i = Object(g.a)(r, this), a.touch0 && a.touch0[2] === r.identifier ? a.touch0[0] = i : a.touch1 && a.touch1[2] === r.identifier && (a.touch1[0] = i);
                    if (r = a.that.__zoom, a.touch1) {
                        var l = a.touch0[0],
                            h = a.touch0[1],
                            p = a.touch1[0],
                            d = a.touch1[1],
                            y = (y = p[0] - l[0]) * y + (y = p[1] - l[1]) * y,
                            v = (v = d[0] - h[0]) * v + (v = d[1] - h[1]) * v;
                        r = b(r, Math.sqrt(y / v)), i = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2], u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2]
                    } else {
                        if (!a.touch0) return;
                        i = a.touch0[0], u = a.touch0[1]
                    }
                    a.zoom("touch", o(M(r, i, u), a.extent, f))
                }
            }

            function L(t, ...r) {
                if (this.__zooming) {
                    var i, o, u = A(this, r).event(t),
                        a = t.changedTouches,
                        s = a.length;
                    for (Ct(t), e && clearTimeout(e), e = setTimeout((function() { e = null }), 500), i = 0; i < s; ++i) o = a[i], u.touch0 && u.touch0[2] === o.identifier ? delete u.touch0 : u.touch1 && u.touch1[2] === o.identifier && delete u.touch1;
                    if (u.touch1 && !u.touch0 && (u.touch0 = u.touch1, delete u.touch1), u.touch0) u.touch0[1] = this.__zoom.invert(u.touch0[0]);
                    else if (u.end(), 2 === u.taps && (o = Object(g.a)(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < x)) {
                        var c = Object(l.a)(this).on("dblclick.zoom");
                        c && c.apply(this, arguments)
                    }
                }
            }
            return w.transform = function(t, n, e, r) {
                var i = t.selection ? t.selection() : t;
                i.property("__zoom", Yt), t !== i ? E(t, n, e, r) : i.interrupt().each((function() { A(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end() }))
            }, w.scaleBy = function(t, n, e, r) {
                w.scaleTo(t, (function() {
                    var t = this.__zoom.k,
                        e = "function" == typeof n ? n.apply(this, arguments) : n;
                    return t * e
                }), e, r)
            }, w.scaleTo = function(t, n, e, r) {
                w.transform(t, (function() {
                    var t = i.apply(this, arguments),
                        r = this.__zoom,
                        u = null == e ? T(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                        a = r.invert(u),
                        s = "function" == typeof n ? n.apply(this, arguments) : n;
                    return o(M(b(r, s), u, a), t, f)
                }), e, r)
            }, w.translateBy = function(t, n, e, r) { w.transform(t, (function() { return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f) }), null, r) }, w.translateTo = function(t, n, e, r, u) {
                w.transform(t, (function() {
                    var t = i.apply(this, arguments),
                        u = this.__zoom,
                        a = null == r ? T(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                    return o(Lt.translate(a[0], a[1]).scale(u.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f)
                }), r, u)
            }, O.prototype = {
                event: function(t) { return t && (this.sourceEvent = t), this },
                start: function() { return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this },
                zoom: function(t, n) { return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this },
                end: function() { return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this },
                emit: function(t) {
                    var n = Object(l.a)(this.that).datum();
                    _.call(t, this.that, new Pt(t, { sourceEvent: this.sourceEvent, target: w, type: t, transform: this.that.__zoom, dispatch: _ }), n)
                }
            }, w.wheelDelta = function(t) { return arguments.length ? (u = "function" == typeof t ? t : St(+t), w) : u }, w.filter = function(t) { return arguments.length ? (r = "function" == typeof t ? t : St(!!t), w) : r }, w.touchable = function(t) { return arguments.length ? (a = "function" == typeof t ? t : St(!!t), w) : a }, w.extent = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : St([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), w) : i
            }, w.scaleExtent = function(t) { return arguments.length ? (s[0] = +t[0], s[1] = +t[1], w) : [s[0], s[1]] }, w.translateExtent = function(t) {
                return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], w) : [
                    [f[0][0], f[0][1]],
                    [f[1][0], f[1][1]]
                ]
            }, w.constrain = function(t) { return arguments.length ? (o = t, w) : o }, w.duration = function(t) { return arguments.length ? (d = +t, w) : d }, w.interpolate = function(t) { return arguments.length ? (y = t, w) : y }, w.on = function() { var t = _.on.apply(_, arguments); return t === _ ? w : t }, w.clickDistance = function(t) { return arguments.length ? (m = (t = +t) * t, w) : Math.sqrt(m) }, w.tapDistance = function(t) { return arguments.length ? (x = +t, w) : x }, w
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "Interval", (function() { return A })), e.d(n, "equal", (function() { return P })), e.d(n, "almostEqual", (function() { return j })), e.d(n, "assertIncludes", (function() { return C })), e.d(n, "notEqual", (function() { return R })), e.d(n, "lessThan", (function() { return D })), e.d(n, "lt", (function() { return U })), e.d(n, "greaterThan", (function() { return Y })), e.d(n, "gt", (function() { return H })), e.d(n, "lessEqualThan", (function() { return F })), e.d(n, "leq", (function() { return z })), e.d(n, "greaterEqualThan", (function() { return B })), e.d(n, "geq", (function() { return q })), e.d(n, "add", (function() { return X })), e.d(n, "subtract", (function() { return V })), e.d(n, "sub", (function() { return W })), e.d(n, "multiply", (function() { return $ })), e.d(n, "mul", (function() { return G })), e.d(n, "divide", (function() { return Z })), e.d(n, "div", (function() { return Q })), e.d(n, "positive", (function() { return J })), e.d(n, "negative", (function() { return K })), e.d(n, "fmod", (function() { return et })), e.d(n, "multiplicativeInverse", (function() { return rt })), e.d(n, "pow", (function() { return it })), e.d(n, "sqrt", (function() { return ot })), e.d(n, "nthRoot", (function() { return ut })), e.d(n, "cos", (function() { return At })), e.d(n, "sin", (function() { return Ot })), e.d(n, "tan", (function() { return kt })), e.d(n, "asin", (function() { return Nt })), e.d(n, "acos", (function() { return St })), e.d(n, "atan", (function() { return Pt })), e.d(n, "sinh", (function() { return It })), e.d(n, "cosh", (function() { return Lt })), e.d(n, "tanh", (function() { return jt })), e.d(n, "exp", (function() { return at })), e.d(n, "log", (function() { return st })), e.d(n, "ln", (function() { return ct })), e.d(n, "LOG_EXP_10", (function() { return lt })), e.d(n, "log10", (function() { return ft })), e.d(n, "LOG_EXP_2", (function() { return ht })), e.d(n, "log2", (function() { return pt })), e.d(n, "hull", (function() { return dt })), e.d(n, "intersection", (function() { return yt })), e.d(n, "union", (function() { return vt })), e.d(n, "difference", (function() { return gt })), e.d(n, "width", (function() { return _t })), e.d(n, "wid", (function() { return mt })), e.d(n, "abs", (function() { return xt })), e.d(n, "max", (function() { return wt })), e.d(n, "min", (function() { return bt })), e.d(n, "clone", (function() { return Mt })), e.d(n, "isInterval", (function() { return c })), e.d(n, "isEmpty", (function() { return l })), e.d(n, "isWhole", (function() { return f })), e.d(n, "isSingleton", (function() { return h })), e.d(n, "zeroIn", (function() { return p })), e.d(n, "hasValue", (function() { return d })), e.d(n, "hasInterval", (function() { return y })), e.d(n, "intervalsOverlap", (function() { return v }));
        var r = {};
        e.r(r), e.d(r, "isInterval", (function() { return c })), e.d(r, "isEmpty", (function() { return l })), e.d(r, "isWhole", (function() { return f })), e.d(r, "isSingleton", (function() { return h })), e.d(r, "zeroIn", (function() { return p })), e.d(r, "hasValue", (function() { return d })), e.d(r, "hasInterval", (function() { return y })), e.d(r, "intervalsOverlap", (function() { return v }));
        var i = {};
        e.r(i), e.d(i, "equal", (function() { return P })), e.d(i, "almostEqual", (function() { return j })), e.d(i, "assertIncludes", (function() { return C })), e.d(i, "notEqual", (function() { return R })), e.d(i, "lessThan", (function() { return D })), e.d(i, "lt", (function() { return U })), e.d(i, "greaterThan", (function() { return Y })), e.d(i, "gt", (function() { return H })), e.d(i, "lessEqualThan", (function() { return F })), e.d(i, "leq", (function() { return z })), e.d(i, "greaterEqualThan", (function() { return B })), e.d(i, "geq", (function() { return q }));
        var o = {};
        e.r(o), e.d(o, "add", (function() { return X })), e.d(o, "subtract", (function() { return V })), e.d(o, "sub", (function() { return W })), e.d(o, "multiply", (function() { return $ })), e.d(o, "mul", (function() { return G })), e.d(o, "divide", (function() { return Z })), e.d(o, "div", (function() { return Q })), e.d(o, "positive", (function() { return J })), e.d(o, "negative", (function() { return K }));
        var u = {};
        e.r(u), e.d(u, "fmod", (function() { return et })), e.d(u, "multiplicativeInverse", (function() { return rt })), e.d(u, "pow", (function() { return it })), e.d(u, "sqrt", (function() { return ot })), e.d(u, "nthRoot", (function() { return ut }));
        var a = {};
        e.r(a), e.d(a, "exp", (function() { return at })), e.d(a, "log", (function() { return st })), e.d(a, "ln", (function() { return ct })), e.d(a, "LOG_EXP_10", (function() { return lt })), e.d(a, "log10", (function() { return ft })), e.d(a, "LOG_EXP_2", (function() { return ht })), e.d(a, "log2", (function() { return pt })), e.d(a, "hull", (function() { return dt })), e.d(a, "intersection", (function() { return yt })), e.d(a, "union", (function() { return vt })), e.d(a, "difference", (function() { return gt })), e.d(a, "width", (function() { return _t })), e.d(a, "wid", (function() { return mt })), e.d(a, "abs", (function() { return xt })), e.d(a, "max", (function() { return wt })), e.d(a, "min", (function() { return bt })), e.d(a, "clone", (function() { return Mt }));
        var s = {};

        function c(t) { return "object" == typeof t && "number" == typeof t.lo && "number" == typeof t.hi }

        function l(t) { return t.lo > t.hi }

        function f(t) { return t.lo === -1 / 0 && t.hi === 1 / 0 }

        function h(t) { return t.lo === t.hi }

        function p(t) { return d(t, 0) }

        function d(t, n) { return !l(t) && (t.lo <= n && n <= t.hi) }

        function y(t, n) { return !!l(t) || !l(n) && n.lo <= t.lo && t.hi <= n.hi }

        function v(t, n) { return !l(t) && !l(n) && (t.lo <= n.lo && n.lo <= t.hi || n.lo <= t.lo && t.lo <= n.hi) }
        e.r(s), e.d(s, "cos", (function() { return At })), e.d(s, "sin", (function() { return Ot })), e.d(s, "tan", (function() { return kt })), e.d(s, "asin", (function() { return Nt })), e.d(s, "acos", (function() { return St })), e.d(s, "atan", (function() { return Pt })), e.d(s, "sinh", (function() { return It })), e.d(s, "cosh", (function() { return Lt })), e.d(s, "tanh", (function() { return jt }));
        var g = e(51),
            _ = e.n(g);

        function m(t) { return t }

        function x(t) { return t === 1 / 0 ? t : _()(t, -1 / 0) }

        function w(t) { return t === -1 / 0 ? t : _()(t, 1 / 0) }

        function b(t) { return t < 0 ? Math.ceil(t) : Math.floor(t) }
        var M = { prev: x, next: w },
            T = { safePrev: x, safeNext: w, prev: function(t) { return M.prev(t) }, next: function(t) { return M.next(t) }, addLo: function(t, n) { return T.prev(t + n) }, addHi: function(t, n) { return T.next(t + n) }, subLo: function(t, n) { return T.prev(t - n) }, subHi: function(t, n) { return T.next(t - n) }, mulLo: function(t, n) { return T.prev(t * n) }, mulHi: function(t, n) { return T.next(t * n) }, divLo: function(t, n) { return T.prev(t / n) }, divHi: function(t, n) { return T.next(t / n) }, intLo: function(t) { return b(T.prev(t)) }, intHi: function(t) { return b(T.next(t)) }, logLo: function(t) { return T.prev(Math.log(t)) }, logHi: function(t) { return T.next(Math.log(t)) }, expLo: function(t) { return T.prev(Math.exp(t)) }, expHi: function(t) { return T.next(Math.exp(t)) }, sinLo: function(t) { return T.prev(Math.sin(t)) }, sinHi: function(t) { return T.next(Math.sin(t)) }, cosLo: function(t) { return T.prev(Math.cos(t)) }, cosHi: function(t) { return T.next(Math.cos(t)) }, tanLo: function(t) { return T.prev(Math.tan(t)) }, tanHi: function(t) { return T.next(Math.tan(t)) }, asinLo: function(t) { return T.prev(Math.asin(t)) }, asinHi: function(t) { return T.next(Math.asin(t)) }, acosLo: function(t) { return T.prev(Math.acos(t)) }, acosHi: function(t) { return T.next(Math.acos(t)) }, atanLo: function(t) { return T.prev(Math.atan(t)) }, atanHi: function(t) { return T.next(Math.atan(t)) }, sinhLo: function(t) { return T.prev(Math.sinh(t)) }, sinhHi: function(t) { return T.next(Math.sinh(t)) }, coshLo: function(t) { return T.prev(Math.cosh(t)) }, coshHi: function(t) { return T.next(Math.cosh(t)) }, tanhLo: function(t) { return T.prev(Math.tanh(t)) }, tanhHi: function(t) { return T.next(Math.tanh(t)) }, powLo: function(t, n) { if (n % 1 != 0) return T.prev(Math.pow(t, n)); var e = 1 == (1 & n) ? t : 1; for (n >>= 1; n > 0;) t = T.mulLo(t, t), 1 == (1 & n) && (e = T.mulLo(t, e)), n >>= 1; return e }, powHi: function(t, n) { if (n % 1 != 0) return T.next(Math.pow(t, n)); var e = 1 == (1 & n) ? t : 1; for (n >>= 1; n > 0;) t = T.mulHi(t, t), 1 == (1 & n) && (e = T.mulHi(t, e)), n >>= 1; return e }, sqrtLo: function(t) { return T.prev(Math.sqrt(t)) }, sqrtHi: function(t) { return T.next(Math.sqrt(t)) }, disable: function() { M.next = M.prev = m }, enable: function() { M.next = w, M.prev = x } },
            E = T,
            A = function() {
                function t(t, n) {
                    if (!(this instanceof A)) return new A(t, n);
                    if (void 0 !== t && void 0 !== n) {
                        if (c(t)) {
                            if (!h(t)) throw new TypeError("Interval: interval `lo` must be a singleton");
                            t = t.lo
                        }
                        if (c(n)) {
                            if (!h(n)) throw TypeError("Interval: interval `hi` must be a singleton");
                            n = n.hi
                        }
                    } else {
                        if (void 0 !== t) return Array.isArray(t) ? new A(t[0], t[1]) : new A(t, t);
                        t = n = 0
                    }
                    this.assign(t, n)
                }
                return t.prototype.singleton = function(t) { return this.set(t, t) }, t.prototype.bounded = function(t, n) { return this.set(E.prev(t), E.next(n)) }, t.prototype.boundedSingleton = function(t) { return this.bounded(t, t) }, t.prototype.set = function(t, n) { return this.lo = t, this.hi = n, this }, t.prototype.assign = function(t, n) { if ("number" != typeof t || "number" != typeof n) throw TypeError("Interval#assign: arguments must be numbers"); return isNaN(t) || isNaN(n) || t > n ? this.setEmpty() : this.set(t, n) }, t.prototype.setEmpty = function() { return this.set(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY) }, t.prototype.setWhole = function() { return this.set(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) }, t.prototype.open = function(t, n) { return this.assign(E.safeNext(t), E.safePrev(n)) }, t.prototype.halfOpenLeft = function(t, n) { return this.assign(E.safeNext(t), n) }, t.prototype.halfOpenRight = function(t, n) { return this.assign(t, E.safePrev(n)) }, t.prototype.toArray = function() { return [this.lo, this.hi] }, t.prototype.clone = function() { return (new A).set(this.lo, this.hi) }, t.factory = t, t
            }(),
            O = 3.141592653589793,
            k = 3.1415926535897936,
            N = { PI_LOW: O, PI_HIGH: k, PI_HALF_LOW: O / 2, PI_HALF_HIGH: k / 2, PI_TWICE_LOW: 2 * O, PI_TWICE_HIGH: 2 * k, get PI() { return new A(O, k) }, get PI_HALF() { return new A(N.PI_HALF_LOW, N.PI_HALF_HIGH) }, get PI_TWICE() { return new A(N.PI_TWICE_LOW, N.PI_TWICE_HIGH) }, get ZERO() { return new A(0) }, get ONE() { return new A(1) }, get WHOLE() { return (new A).setWhole() }, get EMPTY() { return (new A).setEmpty() } },
            S = N;

        function P(t, n) { return l(t) ? l(n) : !l(n) && t.lo === n.lo && t.hi === n.hi }

        function I(t, n) { if (!t) throw new Error(n || "assertion failed") }

        function L(t, n) {
            if (!isFinite(t)) return I(t === n, "[Infinity] expected " + t + " to be " + n);
            I(Math.abs(t - n) < 1e-7, "expected " + t + " to be close to " + n)
        }

        function j(t, n) { t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), L(t[0], n[0]), L(t[1], n[1]) }

        function C(t, n) { j(t, n), t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), I(t[0] <= n[0], t[0] + " should be less/equal than " + n[0]), I(n[1] <= t[1], n[1] + " should be less/equal than " + t[1]) }

        function R(t, n) { return l(t) ? !l(n) : l(n) || t.hi < n.lo || t.lo > n.hi }

        function D(t, n) { return !l(t) && !l(n) && t.hi < n.lo }
        var U = D;

        function Y(t, n) { return !l(t) && !l(n) && t.lo > n.hi }
        var H = Y;

        function F(t, n) { return !l(t) && !l(n) && t.hi <= n.lo }
        var z = F;

        function B(t, n) { return !l(t) && !l(n) && t.lo >= n.hi }
        var q = B;

        function X(t, n) { return new A(E.addLo(t.lo, n.lo), E.addHi(t.hi, n.hi)) }

        function V(t, n) { return new A(E.subLo(t.lo, n.hi), E.subHi(t.hi, n.lo)) }
        var W = V;

        function $(t, n) {
            if (l(t) || l(n)) return S.EMPTY;
            var e = t.lo,
                r = t.hi,
                i = n.lo,
                o = n.hi,
                u = new A;
            return e < 0 ? r > 0 ? i < 0 ? o > 0 ? (u.lo = Math.min(E.mulLo(e, o), E.mulLo(r, i)), u.hi = Math.max(E.mulHi(e, i), E.mulHi(r, o))) : (u.lo = E.mulLo(r, i), u.hi = E.mulHi(e, i)) : o > 0 ? (u.lo = E.mulLo(e, o), u.hi = E.mulHi(r, o)) : (u.lo = 0, u.hi = 0) : i < 0 ? o > 0 ? (u.lo = E.mulLo(e, o), u.hi = E.mulHi(e, i)) : (u.lo = E.mulLo(r, o), u.hi = E.mulHi(e, i)) : o > 0 ? (u.lo = E.mulLo(e, o), u.hi = E.mulHi(r, i)) : (u.lo = 0, u.hi = 0) : r > 0 ? i < 0 ? o > 0 ? (u.lo = E.mulLo(r, i), u.hi = E.mulHi(r, o)) : (u.lo = E.mulLo(r, i), u.hi = E.mulHi(e, o)) : o > 0 ? (u.lo = E.mulLo(e, i), u.hi = E.mulHi(r, o)) : (u.lo = 0, u.hi = 0) : (u.lo = 0, u.hi = 0), u
        }
        var G = $;

        function Z(t, n) {
            return l(t) || l(n) ? S.EMPTY : p(n) ? 0 !== n.lo ? 0 !== n.hi ? function(t) { return 0 === t.lo && 0 === t.hi ? t : S.WHOLE }(t) : function(t, n) { return 0 === t.lo && 0 === t.hi ? t : p(t) ? S.WHOLE : t.hi < 0 ? new A(E.divLo(t.hi, n), Number.POSITIVE_INFINITY) : new A(Number.NEGATIVE_INFINITY, E.divHi(t.lo, n)) }(t, n.lo) : 0 !== n.hi ? function(t, n) { return 0 === t.lo && 0 === t.hi ? t : p(t) ? S.WHOLE : t.hi < 0 ? new A(Number.NEGATIVE_INFINITY, E.divHi(t.hi, n)) : new A(E.divLo(t.lo, n), Number.POSITIVE_INFINITY) }(t, n.hi) : S.EMPTY : function(t, n) {
                var e = t.lo,
                    r = t.hi,
                    i = n.lo,
                    o = n.hi,
                    u = new A;
                return r < 0 ? o < 0 ? (u.lo = E.divLo(r, i), u.hi = E.divHi(e, o)) : (u.lo = E.divLo(e, i), u.hi = E.divHi(r, o)) : e < 0 ? o < 0 ? (u.lo = E.divLo(r, o), u.hi = E.divHi(e, o)) : (u.lo = E.divLo(e, i), u.hi = E.divHi(r, i)) : o < 0 ? (u.lo = E.divLo(r, o), u.hi = E.divHi(e, i)) : (u.lo = E.divLo(e, o), u.hi = E.divHi(r, i)), u
            }(t, n)
        }
        var Q = Z;

        function J(t) { return new A(t.lo, t.hi) }

        function K(t) { return new A(-t.hi, -t.lo) }
        var tt = e(44),
            nt = e.n(tt);

        function et(t, n) {
            if (l(t) || l(n)) return S.EMPTY;
            var e = t.lo < 0 ? n.lo : n.hi,
                r = t.lo / e;
            return r = r < 0 ? Math.ceil(r) : Math.floor(r), W(t, G(n, new A(r)))
        }

        function rt(t) { return l(t) ? S.EMPTY : p(t) ? 0 !== t.lo ? 0 !== t.hi ? S.WHOLE : new A(Number.NEGATIVE_INFINITY, E.divHi(1, t.lo)) : 0 !== t.hi ? new A(E.divLo(1, t.hi), Number.POSITIVE_INFINITY) : S.EMPTY : new A(E.divLo(1, t.hi), E.divHi(1, t.lo)) }

        function it(t, n) {
            if (l(t)) return S.EMPTY;
            if ("object" == typeof n) {
                if (!h(n)) return S.EMPTY;
                n = n.lo
            }
            if (0 === n) return 0 === t.lo && 0 === t.hi ? S.EMPTY : S.ONE;
            if (n < 0) return it(rt(t), -n);
            if (nt()(n)) {
                if (t.hi < 0) {
                    var e = E.powLo(-t.hi, n),
                        r = E.powHi(-t.lo, n);
                    return 1 == (1 & n) ? new A(-r, -e) : new A(e, r)
                }
                return t.lo < 0 ? 1 == (1 & n) ? new A(-E.powLo(-t.lo, n), E.powHi(t.hi, n)) : new A(0, E.powHi(Math.max(-t.lo, t.hi), n)) : new A(E.powLo(t.lo, n), E.powHi(t.hi, n))
            }
            return console.warn("power is not an integer, you should use nth-root instead, returning an empty interval"), S.EMPTY
        }

        function ot(t) { return ut(t, 2) }

        function ut(t, n) {
            if (l(t) || n < 0) return S.EMPTY;
            if ("object" == typeof n) {
                if (!h(n)) return S.EMPTY;
                n = n.lo
            }
            var e = 1 / n;
            if (t.hi < 0) {
                if (nt()(n) && 1 == (1 & n)) {
                    var r = E.powHi(-t.lo, e),
                        i = E.powLo(-t.hi, e);
                    return new A(-r, -i)
                }
                return S.EMPTY
            }
            if (t.lo < 0) { var o = E.powHi(t.hi, e); if (nt()(n) && 1 == (1 & n)) { var u = -E.powHi(-t.lo, e); return new A(u, o) } return new A(0, o) }
            return new A(E.powLo(t.lo, e), E.powHi(t.hi, e))
        }

        function at(t) { return l(t) ? S.EMPTY : new A(E.expLo(t.lo), E.expHi(t.hi)) }

        function st(t) { if (l(t)) return S.EMPTY; var n = t.lo <= 0 ? Number.NEGATIVE_INFINITY : E.logLo(t.lo); return new A(n, E.logHi(t.hi)) }
        var ct = st,
            lt = st(new A(10, 10));

        function ft(t) { return l(t) ? S.EMPTY : Q(st(t), lt) }
        var ht = st(new A(2, 2));

        function pt(t) { return l(t) ? S.EMPTY : Q(st(t), ht) }

        function dt(t, n) {
            var e = l(t),
                r = l(n);
            return e && r ? S.EMPTY : e ? n.clone() : r ? t.clone() : new A(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
        }

        function yt(t, n) {
            if (l(t) || l(n)) return S.EMPTY;
            var e = Math.max(t.lo, n.lo),
                r = Math.min(t.hi, n.hi);
            return e <= r ? new A(e, r) : S.EMPTY
        }

        function vt(t, n) { if (!v(t, n)) throw Error("Interval#union: intervals do not overlap"); return new A(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi)) }

        function gt(t, n) { if (l(t) || f(n)) return S.EMPTY; if (v(t, n)) { if (t.lo < n.lo && n.hi < t.hi) throw Error("Interval.difference: difference creates multiple intervals"); return n.lo <= t.lo && n.hi === 1 / 0 || n.hi >= t.hi && n.lo === -1 / 0 ? S.EMPTY : n.lo <= t.lo ? (new A).halfOpenLeft(n.hi, t.hi) : (new A).halfOpenRight(t.lo, n.lo) } return t.clone() }

        function _t(t) { return l(t) ? 0 : E.subHi(t.hi, t.lo) }
        var mt = _t;

        function xt(t) { return l(t) || f(t) ? S.EMPTY : t.lo >= 0 ? t.clone() : t.hi <= 0 ? K(t) : new A(0, Math.max(-t.lo, t.hi)) }

        function wt(t, n) {
            var e = l(t),
                r = l(n);
            return e && r ? S.EMPTY : e ? n.clone() : r ? t.clone() : new A(Math.max(t.lo, n.lo), Math.max(t.hi, n.hi))
        }

        function bt(t, n) {
            var e = l(t),
                r = l(n);
            return e && r ? S.EMPTY : e ? n.clone() : r ? t.clone() : new A(Math.min(t.lo, n.lo), Math.min(t.hi, n.hi))
        }

        function Mt(t) { return (new A).set(t.lo, t.hi) }

        function Tt(t) { return !isFinite(t.lo) && t.lo === t.hi }

        function Et(t) {
            if (t.lo < 0)
                if (t.lo === -1 / 0) t.lo = 0, t.hi = 1 / 0;
                else {
                    var n = Math.ceil(-t.lo / S.PI_TWICE_LOW);
                    t.lo += S.PI_TWICE_LOW * n, t.hi += S.PI_TWICE_LOW * n
                }
            return t
        }

        function At(t) {
            if (l(t) || Tt(t)) return S.EMPTY;
            var n = (new A).set(t.lo, t.hi);
            Et(n);
            var e = S.PI_TWICE,
                r = et(n, e);
            if (_t(r) >= e.lo) return new A(-1, 1);
            if (r.lo >= S.PI_HIGH) return K(At(W(r, S.PI)));
            var i = r.lo,
                o = r.hi,
                u = E.cosLo(o),
                a = E.cosHi(i);
            return o <= S.PI_LOW ? new A(u, a) : o <= e.lo ? new A(-1, Math.max(u, a)) : new A(-1, 1)
        }

        function Ot(t) { return l(t) || Tt(t) ? S.EMPTY : At(W(t, S.PI_HALF)) }

        function kt(t) {
            if (l(t) || Tt(t)) return S.EMPTY;
            var n = (new A).set(t.lo, t.hi);
            Et(n);
            var e = S.PI,
                r = et(n, e);
            return r.lo >= S.PI_HALF_LOW && (r = W(r, e)), r.lo <= -S.PI_HALF_LOW || r.hi >= S.PI_HALF_LOW ? S.WHOLE : new A(E.tanLo(r.lo), E.tanHi(r.hi))
        }

        function Nt(t) {
            if (l(t) || t.hi < -1 || t.lo > 1) return S.EMPTY;
            var n = t.lo <= -1 ? -S.PI_HALF_HIGH : E.asinLo(t.lo),
                e = t.hi >= 1 ? S.PI_HALF_HIGH : E.asinHi(t.hi);
            return new A(n, e)
        }

        function St(t) {
            if (l(t) || t.hi < -1 || t.lo > 1) return S.EMPTY;
            var n = t.hi >= 1 ? 0 : E.acosLo(t.hi),
                e = t.lo <= -1 ? S.PI_HIGH : E.acosHi(t.lo);
            return new A(n, e)
        }

        function Pt(t) { return l(t) ? S.EMPTY : new A(E.atanLo(t.lo), E.atanHi(t.hi)) }

        function It(t) { return l(t) ? S.EMPTY : new A(E.sinhLo(t.lo), E.sinhHi(t.hi)) }

        function Lt(t) { return l(t) ? S.EMPTY : t.hi < 0 ? new A(E.coshLo(t.hi), E.coshHi(t.lo)) : t.lo >= 0 ? new A(E.coshLo(t.lo), E.coshHi(t.hi)) : new A(1, E.coshHi(-t.lo > t.hi ? t.lo : t.hi)) }

        function jt(t) { return l(t) ? S.EMPTY : new A(E.tanhLo(t.lo), E.tanhHi(t.hi)) }
        var Ct = Object.assign(S, E, a, r),
            Rt = Object.assign(i, o, u, s),
            Dt = Object.assign(A, Ct, Rt, { round: E });
        n.default = Dt
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "axisTop", (function() { return f })), e.d(n, "axisRight", (function() { return h })), e.d(n, "axisBottom", (function() { return p })), e.d(n, "axisLeft", (function() { return d }));
        var r = Array.prototype.slice,
            i = function(t) { return t };

        function o(t) { return "translate(" + (t + .5) + ",0)" }

        function u(t) { return "translate(0," + (t + .5) + ")" }

        function a(t) { return n => +t(n) }

        function s(t) {
            var n = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (n = Math.round(n)),
                function(e) { return +t(e) + n }
        }

        function c() { return !this.__axis }

        function l(t, n) {
            var e = [],
                l = null,
                f = null,
                h = 6,
                p = 6,
                d = 3,
                y = 1 === t || 4 === t ? -1 : 1,
                v = 4 === t || 2 === t ? "x" : "y",
                g = 1 === t || 3 === t ? o : u;

            function _(r) {
                var o = null == l ? n.ticks ? n.ticks.apply(n, e) : n.domain() : l,
                    u = null == f ? n.tickFormat ? n.tickFormat.apply(n, e) : i : f,
                    _ = Math.max(h, 0) + d,
                    m = n.range(),
                    x = +m[0] + .5,
                    w = +m[m.length - 1] + .5,
                    b = (n.bandwidth ? s : a)(n.copy()),
                    M = r.selection ? r.selection() : r,
                    T = M.selectAll(".domain").data([null]),
                    E = M.selectAll(".tick").data(o, n).order(),
                    A = E.exit(),
                    O = E.enter().append("g").attr("class", "tick"),
                    k = E.select("line"),
                    N = E.select("text");
                T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(O), k = k.merge(O.append("line").attr("stroke", "currentColor").attr(v + "2", y * h)), N = N.merge(O.append("text").attr("fill", "currentColor").attr(v, y * _).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), r !== M && (T = T.transition(r), E = E.transition(r), k = k.transition(r), N = N.transition(r), A = A.transition(r).attr("opacity", 1e-6).attr("transform", (function(t) { return isFinite(t = b(t)) ? g(t) : this.getAttribute("transform") })), O.attr("opacity", 1e-6).attr("transform", (function(t) { var n = this.parentNode.__axis; return g(n && isFinite(n = n(t)) ? n : b(t)) }))), A.remove(), T.attr("d", 4 === t || 2 == t ? p ? "M" + y * p + "," + x + "H0.5V" + w + "H" + y * p : "M0.5," + x + "V" + w : p ? "M" + x + "," + y * p + "V0.5H" + w + "V" + y * p : "M" + x + ",0.5H" + w), E.attr("opacity", 1).attr("transform", (function(t) { return g(b(t)) })), k.attr(v + "2", y * h), N.attr(v, y * _).text(u), M.filter(c).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), M.each((function() { this.__axis = b }))
            }
            return _.scale = function(t) { return arguments.length ? (n = t, _) : n }, _.ticks = function() { return e = r.call(arguments), _ }, _.tickArguments = function(t) { return arguments.length ? (e = null == t ? [] : r.call(t), _) : e.slice() }, _.tickValues = function(t) { return arguments.length ? (l = null == t ? null : r.call(t), _) : l && l.slice() }, _.tickFormat = function(t) { return arguments.length ? (f = t, _) : f }, _.tickSize = function(t) { return arguments.length ? (h = p = +t, _) : h }, _.tickSizeInner = function(t) { return arguments.length ? (h = +t, _) : h }, _.tickSizeOuter = function(t) { return arguments.length ? (p = +t, _) : p }, _.tickPadding = function(t) { return arguments.length ? (d = +t, _) : d }, _
        }

        function f(t) { return l(1, t) }

        function h(t) { return l(2, t) }

        function p(t) { return l(3, t) }

        function d(t) { return l(4, t) }
    }]).default
}));
//# sourceMappingURL=function-plot.js.map