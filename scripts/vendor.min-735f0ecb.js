! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return X.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + s.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
    }

    function v(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (me.hasData(e) && (o = me.access(e), a = me.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
        }
    }

    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function x(e) {
        var t = K,
            n = Re[e];
        return n || (n = b(e, t), "none" !== n && n || (Pe = (Pe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = b(e, t), Pe.detach()), Re[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), _e.test(a) && Ue.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function S(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Qe.length; i--;)
            if (t = Qe[i] + n, t in e) return t;
        return r
    }

    function C(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + Se[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + Se[o] + "Width", !0, i)));
        return a
    }

    function j(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = We(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), _e.test(i)) return i;
            r = a && (Y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = me.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Te(r) && (o[a] = me.access(r, "olddisplay", x(r.nodeName)))) : (i = Te(r), "none" === n && i || me.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function A() {
        return setTimeout(function() {
            Ye = void 0
        }), Ye = Z.now()
    }

    function N(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function I(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function D(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Te(e),
            g = me.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? me.get(e, "olddisplay") || x(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ge.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? x(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = me.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                me.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) a = I(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function L(e, t, n) {
        var r, i, o = 0,
            a = tt.length,
            s = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Ye || A(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ye || A(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (O(c, l.opts.specialEasing); a > o; o++)
            if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, I, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function M(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === bt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function B(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function F(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function P(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || Ct.test(e) ? r(e, i) : R(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) R(e + "[" + i + "]", t[i], n, r)
    }

    function U(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var _ = [],
        W = _.slice,
        $ = _.concat,
        z = _.push,
        X = _.indexOf,
        V = {},
        J = V.toString,
        Q = V.hasOwnProperty,
        Y = {},
        K = e.document,
        G = "2.1.4",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: G,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: z,
        sort: _.sort,
        splice: _.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Z.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[J.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return $.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = W.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(W.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : R) !== D && I(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && L) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return G.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!q || !q.test(e))) {
                    if (d = f = P, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(xe, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = be.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return G.apply(n, h.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) S.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = _++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [U, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === U && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[P] && (i = m(i)), o && !o[P] && (o = m(o, a)), r(function(r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    m = r || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : v(m, p, e, s, u),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = v(b, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : G.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, a, !0), l = d(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== H) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = S.relative[e[s].type]) c = [d(h(c), n)];
                else {
                    if (n = S.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !S.relative[e[r].type]; r++);
                        return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = H,
                        b = r || o && S.find.TAG("*", l),
                        x = U += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (H = a !== D && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (U = x)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, m, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = Y.call(u));
                            m = v(m)
                        }
                        G.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (U = x, H = y), g
                };
            return i ? r(a) : a
        }
        var x, w, S, T, C, k, j, E, H, A, N, I, D, O, L, q, M, B, F, P = "sizzle" + 1 * new Date,
            R = e.document,
            U = 0,
            _ = 0,
            W = n(),
            $ = n(),
            z = n(),
            X = function(e, t) {
                return e === t && (N = !0), 0
            },
            V = 1 << 31,
            J = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            K = Q.push,
            G = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Se = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                I()
            };
        try {
            G.apply(Q = Z.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
        } catch (Ce) {
            G = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), L = !C(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(r.getElementsByClassName), w.getById = i(function(e) {
                return O.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
            }), w.getById ? (S.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(we, Se);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(we, Se);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), S.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, S.find.CLASS = w.getElementsByClassName && function(e, t) {
                return L ? t.getElementsByClassName(e) : void 0
            }, M = [], q = [], (w.qsa = me.test(r.querySelectorAll)) && (i(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || q.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (w.matchesSelector = me.test(B = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), M.push("!=", ae)
            }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(O.compareDocumentPosition), F = t || me.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && F(R, e) ? -1 : t === r || t.ownerDocument === R && F(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, r) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && I(e), n = n.replace(fe, "='$1']"), w.matchesSelector && L && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                var r = B.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && I(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && I(e);
            var n = S.attrHandle[t.toLowerCase()],
                r = n && J.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (N = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(X), N) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Se), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Se).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (c = v[P] || (v[P] = {}), l = c[e] || [], d = l[0] === U && l[1], p = l[0] === U && l[2], f = d && v.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [U, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === U) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++p || (y && ((f[P] || (f[P] = {}))[e] = [U, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = j(e.replace(ue, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Se),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Se).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) S.pseudos[x] = u(x);
        return f.prototype = S.filters = S.pseudos, S.setFilters = new f, k = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = $[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = S.preFilter; s;) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in S.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : $(e, u).slice(0)
        }, j = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = z(e, b(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && L && S.relative[o[1].type]) {
                    if (t = (S.find.ID(a.matches[0].replace(we, Se), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);)
                    if ((u = S.find[s]) && (r = u(a.matches[0].replace(we, Se), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return G.apply(n, r), n;
                        break
                    }
            }
            return (l || j(e, f))(r, t, !L, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(X).join("") === P, w.detectDuplicates = !!N, I(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ce.prototype = Z.fn, ue = Z(K);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(Z(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g,
        he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                    if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? a = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var a = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = W.call(arguments),
                a = o.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(K, [Z]), Z.fn.triggerHandler && (Z(K).triggerHandler("ready"), Z(K).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
    }, Z.ready.promise();
    var ve = Z.access = function(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Z(e), n)
            })), t))
            for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var me = new s,
        ye = new s,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || me.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return me.access(e, t, n)
        },
        _removeData: function(e, t) {
            me.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    me.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : ve(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = me.get(e, t), n && (!r || Z.isArray(n) ? r = me.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                a = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return me.get(e, n) || me.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    me.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = me.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Te = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Ce = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div")),
            n = K.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Y.focusinBubbles = "onfocusin" in e;
    var je = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Ae = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = me.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(de) || [""], l = t.length; l--;) s = Ae.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = me.hasData(e) && me.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;)
                    if (s = Ae.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Z.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete v.handle, me.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || K],
                d = Q.call(t, "type") ? t.type : t,
                h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, He.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || K) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (me.get(a, "events") || {})[t.type] && me.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (s = r[l], s && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, a = [],
                s = W.call(arguments),
                u = (me.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ee.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = me.access(r, t);
                i || r.addEventListener(e, n, !0), me.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = me.access(r, t) - 1;
                i ? me.access(r, t, i) : (r.removeEventListener(e, n, !0), me.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        De = /<|&#?\w+;/,
        Oe = /<(?:script|style|link)/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^$|\/(?:java|ecma)script/i,
        Me = /^true\/(.*)/,
        Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (a = m(s), o = m(e), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || m(e), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                else v(e, s);
            return a = m(s, "script"), a.length > 0 && g(a, !u && m(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (De.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), a = (Ie.exec(i) || ["", ""])[1].toLowerCase(), s = Fe[a] || Fe._default, o.innerHTML = s[1] + i.replace(Ne, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) qe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (i = n[me.expando], i && (t = me.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    me.cache[i] && delete me.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !Fe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ne, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = $.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Y.checkClone && Le.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(m(n, "script"), d), o = i.length; l > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, m(a, "script"))), t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) a = i[u], qe.test(a.type || "") && !me.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Be, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Pe, Re = {},
        Ue = /^margin/,
        _e = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = K.documentElement,
            o = K.createElement("div"),
            a = K.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(Y, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(K.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var $e = /^(none|table(?!-c[ea]).+)/,
        ze = new RegExp("^(" + we + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qe = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Xe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? $e.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                    return j(e, t, r)
                }) : j(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && We(e);
                return C(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = S(Y.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ue.test(e) || (Z.cssHooks[e + t].set = C)
    }), Z.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Z.isArray(t)) {
                    for (r = We(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Te(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = H.prototype.init, Z.fx.step = {};
    var Ye, Ke, Ge = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [D],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ze.exec(t),
                    o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                    a = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(L, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    a = function() {
                        var t = L(this, Z.extend({}, e), o);
                        (i || me.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        a = me.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = me.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Ye = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Ye = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Ke || (Ke = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Ke), Ke = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
        }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return ve(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Y.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return ve(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = Z.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : me.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], (n.selected || u === i) && (Y.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(),
        ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft = /#.*$/,
        pt = /([?&])_=[^&]*/,
        dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        bt = {},
        xt = "*/".concat("*"),
        wt = e.location.href,
        St = mt.exec(wt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: ht.test(St[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, Z.ajaxSettings), t) : B(Z.ajaxSettings, e)
        },
        ajaxPrefilter: q(yt),
        ajaxTransport: q(bt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, m, y, x, S = t;
                2 !== b && (b = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = F(f, w, n)), y = P(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === e || "HEAD" === f.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, c = y.data, m = y.error, u = !m)) : (m = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || S) + "", u ? h.resolveWith(p, [c, S, w]) : h.rejectWith(p, [w, S, m]), w.statusCode(v), v = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : m]), g.fireWith(p, [w, S]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                v = f.statusCode || {},
                m = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = dt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(vt, St[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = mt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === St[1] && u[2] === St[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), M(yt, f, t, w), 2 === b) return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](f[c]);
            if (r = M(bt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, r.send(m, n)
                } catch (S) {
                    if (!(2 > b)) throw S;
                    n(-1, S)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
        Ct = /\[\]$/,
        kt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Et.test(this.nodeName) && !jt.test(e) && (this.checked || !Ce.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Ht = 0,
        At = {},
        Nt = {
            0: 200,
            1223: 204
        },
        It = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in At) At[e]()
    }), Y.cors = !!It && "withCredentials" in It, Y.ajax = It = !!It, Z.ajaxTransport(function(e) {
        var t;
        return Y.cors || It && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    a = ++Ht;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete At[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Nt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = At[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Dt = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Dt.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || Z.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Dt.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var r = ae.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Lt = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var qt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = U(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || qt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || qt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return ve(this, function(t, i, o) {
                var a = U(t);
                return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = S(Y.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), _e.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return ve(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Mt = e.jQuery,
        Bt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Bt), t && e.jQuery === Z && (e.jQuery = Mt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
}),
function() {
    function e(e) {
        function t(t, n, r, i, o, a) {
            for (; o >= 0 && a > o; o += e) {
                var s = i ? i[o] : o;
                r = n(r, t[s], s, t)
            }
            return r
        }
        return function(n, r, i, o) {
            r = b(r, o, 4);
            var a = !j(n) && y.keys(n),
                s = (a || n).length,
                u = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
        }
    }

    function t(e) {
        return function(t, n, r) {
            n = x(n, r);
            for (var i = k(t), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
                if (n(t[o], o, t)) return o;
            return -1
        }
    }

    function n(e, t, n) {
        return function(r, i, o) {
            var a = 0,
                s = k(r);
            if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
            else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
            if (i !== i) return o = t(c.call(r, a, s), y.isNaN), o >= 0 ? o + a : -1;
            for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
                if (r[o] === i) return o;
            return -1
        }
    }

    function r(e, t) {
        var n = I.length,
            r = e.constructor,
            i = y.isFunction(r) && r.prototype || s,
            o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) o = I[n], o in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
    }
    var i = this,
        o = i._,
        a = Array.prototype,
        s = Object.prototype,
        u = Function.prototype,
        l = a.push,
        c = a.slice,
        f = s.toString,
        p = s.hasOwnProperty,
        d = Array.isArray,
        h = Object.keys,
        g = u.bind,
        v = Object.create,
        m = function() {},
        y = function(e) {
            return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
    var b = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        x = function(e, t, n) {
            return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
        };
    y.iteratee = function(e, t) {
        return x(e, t, 1 / 0)
    };
    var w = function(e, t) {
            return function(n) {
                var r = arguments.length;
                if (2 > r || null == n) return n;
                for (var i = 1; r > i; i++)
                    for (var o = arguments[i], a = e(o), s = a.length, u = 0; s > u; u++) {
                        var l = a[u];
                        t && void 0 !== n[l] || (n[l] = o[l])
                    }
                return n
            }
        },
        S = function(e) {
            if (!y.isObject(e)) return {};
            if (v) return v(e);
            m.prototype = e;
            var t = new m;
            return m.prototype = null, t
        },
        T = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        },
        C = Math.pow(2, 53) - 1,
        k = T("length"),
        j = function(e) {
            var t = k(e);
            return "number" == typeof t && t >= 0 && C >= t
        };
    y.each = y.forEach = function(e, t, n) {
        t = b(t, n);
        var r, i;
        if (j(e))
            for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
        else {
            var o = y.keys(e);
            for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
        }
        return e
    }, y.map = y.collect = function(e, t, n) {
        t = x(t, n);
        for (var r = !j(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e)
        }
        return o
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
        var r;
        return r = j(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0
    }, y.filter = y.select = function(e, t, n) {
        var r = [];
        return t = x(t, n), y.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        }), r
    }, y.reject = function(e, t, n) {
        return y.filter(e, y.negate(x(t)), n)
    }, y.every = y.all = function(e, t, n) {
        t = x(t, n);
        for (var r = !j(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e)) return !1
        }
        return !0
    }, y.some = y.any = function(e, t, n) {
        t = x(t, n);
        for (var r = !j(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(e, t, n, r) {
        return j(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), y.indexOf(e, t, n) >= 0
    }, y.invoke = function(e, t) {
        var n = c.call(arguments, 2),
            r = y.isFunction(t);
        return y.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
        })
    }, y.pluck = function(e, t) {
        return y.map(e, y.property(t))
    }, y.where = function(e, t) {
        return y.filter(e, y.matcher(t))
    }, y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t))
    }, y.max = function(e, t, n) {
        var r, i, o = -(1 / 0),
            a = -(1 / 0);
        if (null == t && null != e) {
            e = j(e) ? e : y.values(e);
            for (var s = 0, u = e.length; u > s; s++) r = e[s], r > o && (o = r)
        } else t = x(t, n), y.each(e, function(e, n, r) {
            i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
        });
        return o
    }, y.min = function(e, t, n) {
        var r, i, o = 1 / 0,
            a = 1 / 0;
        if (null == t && null != e) {
            e = j(e) ? e : y.values(e);
            for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
        } else t = x(t, n), y.each(e, function(e, n, r) {
            i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
        });
        return o
    }, y.shuffle = function(e) {
        for (var t, n = j(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = y.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
    }, y.sample = function(e, t, n) {
        return null == t || n ? (j(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }, y.sortBy = function(e, t, n) {
        return t = x(t, n), y.pluck(y.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var E = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = x(n, r), y.each(t, function(r, o) {
                var a = n(r, o, t);
                e(i, r, a)
            }), i
        }
    };
    y.groupBy = E(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), y.indexBy = E(function(e, t, n) {
        e[n] = t
    }), y.countBy = E(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1
    }), y.toArray = function(e) {
        return e ? y.isArray(e) ? c.call(e) : j(e) ? y.map(e, y.identity) : y.values(e) : []
    }, y.size = function(e) {
        return null == e ? 0 : j(e) ? e.length : y.keys(e).length
    }, y.partition = function(e, t, n) {
        t = x(t, n);
        var r = [],
            i = [];
        return y.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e)
        }), [r, i]
    }, y.first = y.head = y.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t)
    }, y.initial = function(e, t, n) {
        return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, y.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }, y.rest = y.tail = y.drop = function(e, t, n) {
        return c.call(e, null == t || n ? 1 : t)
    }, y.compact = function(e) {
        return y.filter(e, y.identity)
    };
    var H = function(e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, s = k(e); s > a; a++) {
            var u = e[a];
            if (j(u) && (y.isArray(u) || y.isArguments(u))) {
                t || (u = H(u, t, n));
                var l = 0,
                    c = u.length;
                for (i.length += c; c > l;) i[o++] = u[l++]
            } else n || (i[o++] = u)
        }
        return i
    };
    y.flatten = function(e, t) {
        return H(e, t, !1)
    }, y.without = function(e) {
        return y.difference(e, c.call(arguments, 1))
    }, y.uniq = y.unique = function(e, t, n, r) {
        y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = x(n, r));
        for (var i = [], o = [], a = 0, s = k(e); s > a; a++) {
            var u = e[a],
                l = n ? n(u, a, e) : u;
            t ? (a && o === l || i.push(u), o = l) : n ? y.contains(o, l) || (o.push(l), i.push(u)) : y.contains(i, u) || i.push(u)
        }
        return i
    }, y.union = function() {
        return y.uniq(H(arguments, !0, !0))
    }, y.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = k(e); i > r; r++) {
            var o = e[r];
            if (!y.contains(t, o)) {
                for (var a = 1; n > a && y.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, y.difference = function(e) {
        var t = H(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(e) {
        for (var t = e && y.max(e, k).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = y.pluck(e, r);
        return n
    }, y.object = function(e, t) {
        for (var n = {}, r = 0, i = k(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
        n = x(n, r, 1);
        for (var i = n(t), o = 0, a = k(e); a > o;) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
        return i
    };
    var A = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = S(e.prototype),
            a = e.apply(o, i);
        return y.isObject(a) ? a : o
    };
    y.bind = function(e, t) {
        if (g && e.bind === g) return g.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2),
            r = function() {
                return A(e, r, t, this, n.concat(c.call(arguments)))
            };
        return r
    }, y.partial = function(e) {
        var t = c.call(arguments, 1),
            n = function() {
                for (var r = 0, i = t.length, o = Array(i), a = 0; i > a; a++) o[a] = t[a] === y ? arguments[r++] : t[a];
                for (; r < arguments.length;) o.push(arguments[r++]);
                return A(e, n, this, this, o)
            };
        return n
    }, y.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++) n = arguments[t], e[n] = y.bind(e[n], e);
        return e
    }, y.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache,
                o = "" + (t ? t.apply(this, arguments) : r);
            return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
    }, y.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
        var r, i, o, a = null,
            s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null)
        };
        return function() {
            var l = y.now();
            s || n.leading !== !1 || (s = l);
            var c = t - (l - s);
            return r = this, i = arguments, 0 >= c || c > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
        }
    }, y.debounce = function(e, t, n) {
        var r, i, o, a, s, u = function() {
            var l = y.now() - a;
            t > l && l >= 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
        };
        return function() {
            o = this, i = arguments, a = y.now();
            var l = n && !r;
            return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s
        }
    }, y.wrap = function(e, t) {
        return y.partial(t, e)
    }, y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, y.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
        }
    }, y.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, y.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var N = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(e) {
        if (!y.isObject(e)) return [];
        if (h) return h(e);
        var t = [];
        for (var n in e) y.has(e, n) && t.push(n);
        return N && r(e, t), t
    }, y.allKeys = function(e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return N && r(e, t), t
    }, y.values = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, y.mapObject = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = t(e[r], r, e);
        return a
    }, y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, y.invert = function(e) {
        for (var t = {}, n = y.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e) y.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
        t = x(t, n);
        for (var r, i = y.keys(e), o = 0, a = i.length; a > o; o++)
            if (r = i[o], t(e[r], r, e)) return r
    }, y.pick = function(e, t, n) {
        var r, i, o = {},
            a = e;
        if (null == a) return o;
        y.isFunction(t) ? (i = y.allKeys(a), r = b(t, n)) : (i = H(arguments, !1, !1, 1), r = function(e, t, n) {
            return t in n
        }, a = Object(a));
        for (var s = 0, u = i.length; u > s; s++) {
            var l = i[s],
                c = a[l];
            r(c, l, a) && (o[l] = c)
        }
        return o
    }, y.omit = function(e, t, n) {
        if (y.isFunction(t)) t = y.negate(t);
        else {
            var r = y.map(H(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(r, t)
            }
        }
        return y.pick(e, t, n)
    }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
        var n = S(e);
        return t && y.extendOwn(n, t), n
    }, y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }, y.tap = function(e, t) {
        return t(e), e
    }, y.isMatch = function(e, t) {
        var n = y.keys(t),
            r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; r > o; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i)) return !1
        }
        return !0
    };
    var D = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var i = f.call(e);
        if (i !== f.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;)
            if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), o) {
            if (u = e.length, u !== t.length) return !1;
            for (; u--;)
                if (!D(e[u], t[u], n, r)) return !1
        } else {
            var l, c = y.keys(e);
            if (u = c.length, y.keys(t).length !== u) return !1;
            for (; u--;)
                if (l = c[u], !y.has(t, l) || !D(e[l], t[l], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
    };
    y.isEqual = function(e, t) {
        return D(e, t)
    }, y.isEmpty = function(e) {
        return null == e ? !0 : j(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
    }, y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, y.isArray = d || function(e) {
        return "[object Array]" === f.call(e)
    }, y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        y["is" + e] = function(t) {
            return f.call(t) === "[object " + e + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1
    }), y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e
    }, y.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" === f.call(e)
    }, y.isNull = function(e) {
        return null === e
    }, y.isUndefined = function(e) {
        return void 0 === e
    }, y.has = function(e, t) {
        return null != e && p.call(e, t)
    }, y.noConflict = function() {
        return i._ = o, this
    }, y.identity = function(e) {
        return e
    }, y.constant = function(e) {
        return function() {
            return e
        }
    }, y.noop = function() {}, y.property = T, y.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    }, y.matcher = y.matches = function(e) {
        return e = y.extendOwn({}, e),
            function(t) {
                return y.isMatch(t, e)
            }
    }, y.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var i = 0; e > i; i++) r[i] = t(i);
        return r
    }, y.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, y.now = Date.now || function() {
        return (new Date).getTime()
    };
    var O = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        L = y.invert(O),
        q = function(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + y.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        };
    y.escape = q(O), y.unescape = q(L), y.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r
    };
    var M = 0;
    y.uniqueId = function(e) {
        var t = ++M + "";
        return e ? e + t : t
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var B = /(.)^/,
        F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        P = /\\|'|\r|\n|\u2028|\u2029/g,
        R = function(e) {
            return "\\" + F[e]
        };
    y.template = function(e, t, n) {
        !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
        var r = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
        e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(P, R), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var u = function(e) {
                return a.call(this, e, y)
            },
            l = t.variable || "obj";
        return u.source = "function(" + l + "){\n" + o + "}", u
    }, y.chain = function(e) {
        var t = y(e);
        return t._chain = !0, t
    };
    var U = function(e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function(e) {
        y.each(y.functions(e), function(t) {
            var n = y[t] = e[t];
            y.prototype[t] = function() {
                var e = [this._wrapped];
                return l.apply(e, arguments), U(this, n.apply(y, e))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], U(this, n)
        }
    }), y.each(["concat", "join", "slice"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            return U(this, t.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var a = t || window.event,
                s = u.call(arguments, 1),
                l = 0,
                f = 0,
                p = 0,
                d = 0,
                h = 0,
                g = 0;
            if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (p = -1 * a.detail), "wheelDelta" in a && (p = a.wheelDelta), "wheelDeltaY" in a && (p = a.wheelDeltaY), "wheelDeltaX" in a && (f = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (f = -1 * p, p = 0), l = 0 === p ? f : p, "deltaY" in a && (p = -1 * a.deltaY, l = p), "deltaX" in a && (f = a.deltaX, 0 === p && (l = -1 * f)), 0 !== p || 0 !== f) {
                if (1 === a.deltaMode) {
                    var v = e.data(this, "mousewheel-line-height");
                    l *= v, p *= v, f *= v
                } else if (2 === a.deltaMode) {
                    var m = e.data(this, "mousewheel-page-height");
                    l *= m, p *= m, f *= m
                }
                if (d = Math.max(Math.abs(p), Math.abs(f)), (!o || o > d) && (o = d, r(a, d) && (o /= 40)), r(a, d) && (l /= 40, f /= 40, p /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    h = t.clientX - y.left, g = t.clientY - y.top
                }
                return t.deltaX = f, t.deltaY = p, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, l, f, p), i && clearTimeout(i), i = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, s)
            }
        }

        function n() {
            o = null
        }

        function r(e, t) {
            return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var i, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            u = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var l = a.length; l;) e.event.fixHooks[a[--l]] = e.event.mouseHooks;
        var c = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = s.length; n;) this.addEventListener(s[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = s.length; n;) this.removeEventListener(s[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    r = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return r.length || (r = e("body")), parseInt(r.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return 10 > e ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, o, a, s = gap,
                u = t[e];
            switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
                case "string":
                    return quote(u);
                case "number":
                    return isFinite(u) ? String(u) : "null";
                case "boolean":
                case "null":
                    return String(u);
                case "object":
                    if (!u) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                        for (o = u.length, n = 0; o > n; n += 1) a[n] = str(n, u) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i));
                    else
                        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; n > r; r += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if ("undefined" != typeof n.Adapter) throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, n, r) {
                var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
                return i
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, "undefined" != typeof n.init && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            o = e.setInterval || o,
            a = e.History = e.History || {};
        if ("undefined" != typeof a.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        a.initHtml4 = function() {
            return "undefined" != typeof a.initHtml4.initialized ? !1 : (a.initHtml4.initialized = !0, a.enabled = !0, a.savedHashes = [], a.isLastHash = function(e) {
                var t, n = a.getHashByIndex();
                return t = e === n
            }, a.isHashEqual = function(e, t) {
                return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
            }, a.saveHash = function(e) {
                return a.isLastHash(e) ? !1 : (a.savedHashes.push(e), !0)
            }, a.getHashByIndex = function(e) {
                var t = null;
                return t = "undefined" == typeof e ? a.savedHashes[a.savedHashes.length - 1] : 0 > e ? a.savedHashes[a.savedHashes.length + e] : a.savedHashes[e]
            }, a.discardedHashes = {}, a.discardedStates = {}, a.discardState = function(e, t, n) {
                var r, i = a.getHashByState(e);
                return r = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, a.discardedStates[i] = r, !0
            }, a.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return a.discardedHashes[e] = r, !0
            }, a.discardedState = function(e) {
                var t, n = a.getHashByState(e);
                return t = a.discardedStates[n] || !1
            }, a.discardedHash = function(e) {
                var t = a.discardedHashes[e] || !1;
                return t
            }, a.recycleState = function(e) {
                var t = a.getHashByState(e);
                return a.discardedState(e) && delete a.discardedStates[t], !0
            }, a.emulated.hashChange && (a.hashChangeInit = function() {
                a.checkerFunction = null;
                var t, r, i, s, u = "",
                    l = Boolean(a.getHash());
                return a.isInternetExplorer() ? (t = "historyjs-iframe", r = n.createElement("iframe"), r.setAttribute("id", t), r.setAttribute("src", "#"), r.style.display = "none", n.body.appendChild(r), r.contentWindow.document.open(), r.contentWindow.document.close(), i = "", s = !1, a.checkerFunction = function() {
                    if (s) return !1;
                    s = !0;
                    var t = a.getHash(),
                        n = a.getHash(r.contentWindow.document);
                    return t !== u ? (u = t, n !== t && (i = n = t, r.contentWindow.document.open(), r.contentWindow.document.close(), r.contentWindow.document.location.hash = a.escapeHash(t)), a.Adapter.trigger(e, "hashchange")) : n !== i && (i = n, l && "" === n ? a.back() : a.setHash(n, !1)), s = !1, !0
                }) : a.checkerFunction = function() {
                    var t = a.getHash() || "";
                    return t !== u && (u = t, a.Adapter.trigger(e, "hashchange")), !0
                }, a.intervalList.push(o(a.checkerFunction, a.options.hashChangeInterval)), !0
            }, a.Adapter.onDomLoad(a.hashChangeInit)), a.emulated.pushState && (a.onHashChange = function(t) {
                var n, r = t && t.newURL || a.getLocationHref(),
                    i = a.getHashByUrl(r),
                    o = null,
                    s = null;
                return a.isLastHash(i) ? (a.busy(!1), !1) : (a.doubleCheckComplete(), a.saveHash(i), i && a.isTraditionalAnchor(i) ? (a.Adapter.trigger(e, "anchorchange"), a.busy(!1), !1) : (o = a.extractState(a.getFullUrl(i || a.getLocationHref()), !0), a.isLastSavedState(o) ? (a.busy(!1), !1) : (s = a.getHashByState(o), n = a.discardedState(o), n ? (a.getHashByIndex(-2) === a.getHashByState(n.forwardState) ? a.back(!1) : a.forward(!1), !1) : (a.pushState(o.data, o.title, encodeURI(o.url), !1), !0))))
            }, a.Adapter.bind(e, "hashchange", a.onHashChange), a.pushState = function(t, n, r, i) {
                if (r = encodeURI(r).replace(/%25/g, "%"), a.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && a.busy()) return a.pushQueue({
                    scope: a,
                    callback: a.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                a.busy(!0);
                var o = a.createStateObject(t, n, r),
                    s = a.getHashByState(o),
                    u = a.getState(!1),
                    l = a.getHashByState(u),
                    c = a.getHash(),
                    f = a.expectedStateId == o.id;
                return a.storeState(o), a.expectedStateId = o.id, a.recycleState(o), a.setTitle(o), s === l ? (a.busy(!1), !1) : (a.saveState(o), f || a.Adapter.trigger(e, "statechange"), !a.isHashEqual(s, c) && !a.isHashEqual(s, a.getShortUrl(a.getLocationHref())) && a.setHash(s, !1), a.busy(!1), !0)
            }, a.replaceState = function(t, n, r, i) {
                if (r = encodeURI(r).replace(/%25/g, "%"), a.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && a.busy()) return a.pushQueue({
                    scope: a,
                    callback: a.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                a.busy(!0);
                var o = a.createStateObject(t, n, r),
                    s = a.getHashByState(o),
                    u = a.getState(!1),
                    l = a.getHashByState(u),
                    c = a.getStateByIndex(-2);
                return a.discardState(u, o, c), s === l ? (a.storeState(o), a.expectedStateId = o.id, a.recycleState(o), a.setTitle(o), a.saveState(o), a.Adapter.trigger(e, "statechange"), a.busy(!1)) : a.pushState(o.data, o.title, o.url, !1), !0
            }), a.emulated.pushState && a.getHash() && !a.emulated.hashChange && a.Adapter.onDomLoad(function() {
                a.Adapter.trigger(e, "hashchange")
            }), void 0)
        }, "undefined" != typeof a.init && a.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            o = e.sessionStorage || !1,
            a = e.setTimeout,
            s = e.clearTimeout,
            u = e.setInterval,
            l = e.clearInterval,
            c = e.JSON,
            f = e.alert,
            p = e.History = e.History || {},
            d = e.history;
        try {
            o.setItem("TEST", "1"), o.removeItem("TEST")
        } catch (h) {
            o = !1
        }
        if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, "undefined" != typeof p.init) throw new Error("History.js Core has already been loaded...");
        p.init = function(e) {
            return "undefined" == typeof p.Adapter ? !1 : ("undefined" != typeof p.initCore && p.initCore(), "undefined" != typeof p.initHtml4 && p.initHtml4(), !0)
        }, p.initCore = function(h) {
            if ("undefined" != typeof p.initCore.initialized) return !1;
            if (p.initCore.initialized = !0, p.options = p.options || {}, p.options.hashChangeInterval = p.options.hashChangeInterval || 100, p.options.safariPollInterval = p.options.safariPollInterval || 500, p.options.doubleCheckInterval = p.options.doubleCheckInterval || 500, p.options.disableSuid = p.options.disableSuid || !1, p.options.storeInterval = p.options.storeInterval || 1e3, p.options.busyDelay = p.options.busyDelay || 250, p.options.debug = p.options.debug || !1, p.options.initialTitle = p.options.initialTitle || r.title, p.options.html4Mode = p.options.html4Mode || !1, p.options.delayInit = p.options.delayInit || !1, p.intervalList = [], p.clearAllIntervals = function() {
                    var e, t = p.intervalList;
                    if ("undefined" != typeof t && null !== t) {
                        for (e = 0; e < t.length; e++) l(t[e]);
                        p.intervalList = null
                    }
                }, p.debug = function() {
                    (p.options.debug || !1) && p.log.apply(p, arguments)
                }, p.log = function() {
                    var e, t, i, o, a, s = "undefined" != typeof n && "undefined" != typeof n.log && "undefined" != typeof n.log.apply,
                        u = r.getElementById("log");
                    for (s ? (o = Array.prototype.slice.call(arguments), e = o.shift(), "undefined" != typeof n.debug ? n.debug.apply(n, [e, o]) : n.log.apply(n, [e, o])) : e = "\n" + arguments[0] + "\n", t = 1, i = arguments.length; i > t; ++t) {
                        if (a = arguments[t], "object" == typeof a && "undefined" != typeof c) try {
                            a = c.stringify(a)
                        } catch (l) {}
                        e += "\n" + a + "\n"
                    }
                    return u ? (u.value += e + "\n-----\n", u.scrollTop = u.scrollHeight - u.clientHeight) : s || f(e), !0
                }, p.getInternetExplorerMajorVersion = function() {
                    var e = p.getInternetExplorerMajorVersion.cached = "undefined" != typeof p.getInternetExplorerMajorVersion.cached ? p.getInternetExplorerMajorVersion.cached : function() {
                        for (var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                            (t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0];);
                        return e > 4 ? e : !1
                    }();
                    return e
                }, p.isInternetExplorer = function() {
                    var e = p.isInternetExplorer.cached = "undefined" != typeof p.isInternetExplorer.cached ? p.isInternetExplorer.cached : Boolean(p.getInternetExplorerMajorVersion());
                    return e
                }, p.options.html4Mode ? p.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : p.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                    hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8)
                }, p.enabled = !p.emulated.pushState, p.bugs = {
                    setHash: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    safariPoll: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === i.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                    ieDoubleCheck: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 7)
                }, p.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, p.cloneObject = function(e) {
                    var t, n;
                    return e ? (t = c.stringify(e), n = c.parse(t)) : n = {}, n
                }, p.getRootUrl = function() {
                    var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                    return r.location.port && (e += ":" + r.location.port), e += "/"
                }, p.getBaseHref = function() {
                    var e = r.getElementsByTagName("base"),
                        t = null,
                        n = "";
                    return 1 === e.length && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
                }, p.getBaseUrl = function() {
                    var e = p.getBaseHref() || p.getBasePageUrl() || p.getRootUrl();
                    return e
                }, p.getPageUrl = function() {
                    var e, t = p.getState(!1, !1),
                        n = (t || {}).url || p.getLocationHref();
                    return e = n.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    })
                }, p.getBasePageUrl = function() {
                    var e = p.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    }).replace(/\/+$/, "") + "/";
                    return e
                }, p.getFullUrl = function(e, t) {
                    var n = e,
                        r = e.substring(0, 1);
                    return t = "undefined" == typeof t ? !0 : t, /[a-z]+\:\/\//.test(e) || (n = "/" === r ? p.getRootUrl() + e.replace(/^\/+/, "") : "#" === r ? p.getPageUrl().replace(/#.*/, "") + e : "?" === r ? p.getPageUrl().replace(/[\?#].*/, "") + e : t ? p.getBaseUrl() + e.replace(/^(\.\/)+/, "") : p.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, p.getShortUrl = function(e) {
                    var t = e,
                        n = p.getBaseUrl(),
                        r = p.getRootUrl();
                    return p.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), p.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, p.getLocationHref = function(e) {
                    return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                }, p.store = {}, p.idToState = p.idToState || {}, p.stateToId = p.stateToId || {}, p.urlToId = p.urlToId || {}, p.storedStates = p.storedStates || [], p.savedStates = p.savedStates || [], p.normalizeStore = function() {
                    p.store.idToState = p.store.idToState || {}, p.store.urlToId = p.store.urlToId || {}, p.store.stateToId = p.store.stateToId || {}
                }, p.getState = function(e, t) {
                    "undefined" == typeof e && (e = !0), "undefined" == typeof t && (t = !0);
                    var n = p.getLastSavedState();
                    return !n && t && (n = p.createStateObject()), e && (n = p.cloneObject(n), n.url = n.cleanUrl || n.url), n
                }, p.getIdByState = function(e) {
                    var t, n = p.extractId(e.url);
                    if (!n)
                        if (t = p.getStateString(e), "undefined" != typeof p.stateToId[t]) n = p.stateToId[t];
                        else if ("undefined" != typeof p.store.stateToId[t]) n = p.store.stateToId[t];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof p.idToState[n] || "undefined" != typeof p.store.idToState[n];);
                        p.stateToId[t] = n, p.idToState[n] = e
                    }
                    return n
                }, p.normalizeState = function(e) {
                    var t, n;
                    return e && "object" == typeof e || (e = {}), "undefined" != typeof e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), t = {}, t.normalized = !0, t.title = e.title || "", t.url = p.getFullUrl(e.url ? e.url : p.getLocationHref()), t.hash = p.getShortUrl(t.url), t.data = p.cloneObject(e.data), t.id = p.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !p.isEmptyObject(t.data), (t.title || n) && p.options.disableSuid !== !0 && (t.hash = p.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = p.getFullUrl(t.hash), (p.emulated.pushState || p.bugs.safariPoll) && p.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                }, p.createStateObject = function(e, t, n) {
                    var r = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return r = p.normalizeState(r)
                }, p.getStateById = function(e) {
                    e = String(e);
                    var n = p.idToState[e] || p.store.idToState[e] || t;
                    return n
                }, p.getStateString = function(e) {
                    var t, n, r;
                    return t = p.normalizeState(e), n = {
                        data: t.data,
                        title: e.title,
                        url: e.url
                    }, r = c.stringify(n)
                }, p.getStateId = function(e) {
                    var t, n;
                    return t = p.normalizeState(e), n = t.id
                }, p.getHashByState = function(e) {
                    var t, n;
                    return t = p.normalizeState(e), n = t.hash
                }, p.extractId = function(e) {
                    var t, n, r, i;
                    return i = -1 != e.indexOf("#") ? e.split("#")[0] : e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
                }, p.isTraditionalAnchor = function(e) {
                    var t = !/[\/\?\.]/.test(e);
                    return t
                }, p.extractState = function(e, t) {
                    var n, r, i = null;
                    return t = t || !1, n = p.extractId(e), n && (i = p.getStateById(n)), i || (r = p.getFullUrl(e), n = p.getIdByUrl(r) || !1, n && (i = p.getStateById(n)), !i && t && !p.isTraditionalAnchor(e) && (i = p.createStateObject(null, null, r))), i
                }, p.getIdByUrl = function(e) {
                    var n = p.urlToId[e] || p.store.urlToId[e] || t;
                    return n
                }, p.getLastSavedState = function() {
                    return p.savedStates[p.savedStates.length - 1] || t
                }, p.getLastStoredState = function() {
                    return p.storedStates[p.storedStates.length - 1] || t
                }, p.hasUrlDuplicate = function(e) {
                    var t, n = !1;
                    return t = p.extractState(e.url), n = t && t.id !== e.id
                }, p.storeState = function(e) {
                    return p.urlToId[e.url] = e.id, p.storedStates.push(p.cloneObject(e)), e
                }, p.isLastSavedState = function(e) {
                    var t, n, r, i = !1;
                    return p.savedStates.length && (t = e.id, n = p.getLastSavedState(), r = n.id, i = t === r), i
                }, p.saveState = function(e) {
                    return p.isLastSavedState(e) ? !1 : (p.savedStates.push(p.cloneObject(e)), !0)
                }, p.getStateByIndex = function(e) {
                    var t = null;
                    return t = "undefined" == typeof e ? p.savedStates[p.savedStates.length - 1] : 0 > e ? p.savedStates[p.savedStates.length + e] : p.savedStates[e]
                }, p.getCurrentIndex = function() {
                    var e = null;
                    return e = p.savedStates.length < 1 ? 0 : p.savedStates.length - 1
                }, p.getHash = function(e) {
                    var t, n = p.getLocationHref(e);
                    return t = p.getHashByUrl(n)
                }, p.unescapeHash = function(e) {
                    var t = p.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, p.normalizeHash = function(e) {
                    var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return t
                }, p.setHash = function(e, t) {
                    var n, i;
                    return t !== !1 && p.busy() ? (p.pushQueue({
                        scope: p,
                        callback: p.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (p.busy(!0), n = p.extractState(e, !0), n && !p.emulated.pushState ? p.pushState(n.data, n.title, n.url, !1) : p.getHash() !== e && (p.bugs.setHash ? (i = p.getPageUrl(), p.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), p)
                }, p.escapeHash = function(t) {
                    var n = p.normalizeHash(t);
                    return n = e.encodeURIComponent(n), p.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, p.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = p.unescapeHash(t)
                }, p.setTitle = function(e) {
                    var t, n = e.title;
                    n || (t = p.getStateByIndex(0), t && t.url === e.url && (n = t.title || p.options.initialTitle));
                    try {
                        r.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (i) {}
                    return r.title = n, p
                }, p.queues = [], p.busy = function(e) {
                    if ("undefined" != typeof e ? p.busy.flag = e : "undefined" == typeof p.busy.flag && (p.busy.flag = !1), !p.busy.flag) {
                        s(p.busy.timeout);
                        var t = function() {
                            var e, n, r;
                            if (!p.busy.flag)
                                for (e = p.queues.length - 1; e >= 0; --e) n = p.queues[e], 0 !== n.length && (r = n.shift(), p.fireQueueItem(r), p.busy.timeout = a(t, p.options.busyDelay))
                        };
                        p.busy.timeout = a(t, p.options.busyDelay)
                    }
                    return p.busy.flag
                }, p.busy.flag = !1, p.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || p, e.args || [])
                }, p.pushQueue = function(e) {
                    return p.queues[e.queue || 0] = p.queues[e.queue || 0] || [], p.queues[e.queue || 0].push(e), p
                }, p.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                        callback: e
                    }), "undefined" != typeof t && (e.queue = t), p.busy() ? p.pushQueue(e) : p.fireQueueItem(e), p
                }, p.clearQueue = function() {
                    return p.busy.flag = !1, p.queues = [], p
                }, p.stateChanged = !1, p.doubleChecker = !1, p.doubleCheckComplete = function() {
                    return p.stateChanged = !0, p.doubleCheckClear(), p
                }, p.doubleCheckClear = function() {
                    return p.doubleChecker && (s(p.doubleChecker), p.doubleChecker = !1), p
                }, p.doubleCheck = function(e) {
                    return p.stateChanged = !1, p.doubleCheckClear(), p.bugs.ieDoubleCheck && (p.doubleChecker = a(function() {
                        return p.doubleCheckClear(), p.stateChanged || e(), !0
                    }, p.options.doubleCheckInterval)), p
                }, p.safariStatePoll = function() {
                    var t, n = p.extractState(p.getLocationHref());
                    return p.isLastSavedState(n) ? void 0 : (t = n, t || (t = p.createStateObject()), p.Adapter.trigger(e, "popstate"), p)
                }, p.back = function(e) {
                    return e !== !1 && p.busy() ? (p.pushQueue({
                        scope: p,
                        callback: p.back,
                        args: arguments,
                        queue: e
                    }), !1) : (p.busy(!0), p.doubleCheck(function() {
                        p.back(!1)
                    }), d.go(-1), !0)
                }, p.forward = function(e) {
                    return e !== !1 && p.busy() ? (p.pushQueue({
                        scope: p,
                        callback: p.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (p.busy(!0), p.doubleCheck(function() {
                        p.forward(!1)
                    }), d.go(1), !0)
                }, p.go = function(e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; e >= n; ++n) p.forward(t);
                    else {
                        if (!(0 > e)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; n >= e; --n) p.back(t)
                    }
                    return p
                }, p.emulated.pushState) {
                var g = function() {};
                p.pushState = p.pushState || g, p.replaceState = p.replaceState || g
            } else p.onPopState = function(t, n) {
                var r, i, o = !1,
                    a = !1;
                return p.doubleCheckComplete(), r = p.getHash(), r ? (i = p.extractState(r || p.getLocationHref(), !0), i ? p.replaceState(i.data, i.title, i.url, !1) : (p.Adapter.trigger(e, "anchorchange"), p.busy(!1)), p.expectedStateId = !1, !1) : (o = p.Adapter.extractEventData("state", t, n) || !1, a = o ? p.getStateById(o) : p.expectedStateId ? p.getStateById(p.expectedStateId) : p.extractState(p.getLocationHref()), a || (a = p.createStateObject(null, null, p.getLocationHref())), p.expectedStateId = !1, p.isLastSavedState(a) ? (p.busy(!1), !1) : (p.storeState(a), p.saveState(a), p.setTitle(a), p.Adapter.trigger(e, "statechange"), p.busy(!1), !0))
            }, p.Adapter.bind(e, "popstate", p.onPopState), p.pushState = function(t, n, r, i) {
                if (p.getHashByUrl(r) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && p.busy()) return p.pushQueue({
                    scope: p,
                    callback: p.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                p.busy(!0);
                var o = p.createStateObject(t, n, r);
                return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, d.pushState(o.id, o.title, o.url), p.Adapter.trigger(e, "popstate")), !0
            }, p.replaceState = function(t, n, r, i) {
                if (p.getHashByUrl(r) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && p.busy()) return p.pushQueue({
                    scope: p,
                    callback: p.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                p.busy(!0);
                var o = p.createStateObject(t, n, r);
                return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, d.replaceState(o.id, o.title, o.url), p.Adapter.trigger(e, "popstate")), !0
            };
            if (o) {
                try {
                    p.store = c.parse(o.getItem("History.store")) || {}
                } catch (v) {
                    p.store = {}
                }
                p.normalizeStore()
            } else p.store = {}, p.normalizeStore();
            p.Adapter.bind(e, "unload", p.clearAllIntervals), p.saveState(p.storeState(p.extractState(p.getLocationHref(), !0))), o && (p.onUnload = function() {
                var e, t, n;
                try {
                    e = c.parse(o.getItem("History.store")) || {}
                } catch (r) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in p.idToState) p.idToState.hasOwnProperty(t) && (e.idToState[t] = p.idToState[t]);
                for (t in p.urlToId) p.urlToId.hasOwnProperty(t) && (e.urlToId[t] = p.urlToId[t]);
                for (t in p.stateToId) p.stateToId.hasOwnProperty(t) && (e.stateToId[t] = p.stateToId[t]);
                p.store = e, p.normalizeStore(), n = c.stringify(e);
                try {
                    o.setItem("History.store", n)
                } catch (i) {
                    if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                    o.length && (o.removeItem("History.store"), o.setItem("History.store", n))
                }
            }, p.intervalList.push(u(p.onUnload, p.options.storeInterval)), p.Adapter.bind(e, "beforeunload", p.onUnload), p.Adapter.bind(e, "unload", p.onUnload)), p.emulated.pushState || (p.bugs.safariPoll && p.intervalList.push(u(p.safariStatePoll, p.options.safariPollInterval)), ("Apple Computer, Inc." === i.vendor || "Mozilla" === (i.appCodeName || "")) && (p.Adapter.bind(e, "hashchange", function() {
                p.Adapter.trigger(e, "popstate")
            }), p.getHash() && p.Adapter.onDomLoad(function() {
                p.Adapter.trigger(e, "hashchange")
            })))
        }, (!p.options || !p.options.delayInit) && p.init()
    }(window);