webpackJsonp([3], { "+zVg": function (t, e, n) {
        "use strict";
        var r = n("wZOE");
        e.of = r.ArrayObservable.of;
    }, "/8eP": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = [".ng4-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng4-menu-item--selected[_ngcontent-%COMP%]{background:hsla(0,0%,62%,.2);outline:0}.ng4-menu-item[_ngcontent-%COMP%]:focus{outline:0}.ng4-menu-item[_ngcontent-%COMP%]:active{background:hsla(0,0%,62%,.4)}ng4-menu-item[_nghost-%COMP%]     [ng4-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"];
    }, "/QLu": function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = [".ng4-dropdown-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:150px}.ng4-dropdown-button[_ngcontent-%COMP%]:hover{color:#222}.ng4-dropdown-button[_ngcontent-%COMP%]:active, .ng4-dropdown-button[_ngcontent-%COMP%]:focus{color:#222;border-bottom:2px solid #2196f3}.ng4-dropdown-button__label[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 95%;flex:1 1 95%}.ng4-dropdown-button__caret[_ngcontent-%COMP%]{width:12px;height:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 6%;flex:1 1 6%}.ng4-dropdown-button--icon[_nghost-%COMP%]   .ng4-dropdown-button[_ngcontent-%COMP%], .ng4-dropdown-button--icon   [_nghost-%COMP%]   .ng4-dropdown-button[_ngcontent-%COMP%]{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}.ng4-dropdown-button--icon[_nghost-%COMP%]   .ng4-dropdown-button[_ngcontent-%COMP%]:active, .ng4-dropdown-button--icon   [_nghost-%COMP%]   .ng4-dropdown-button[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.2)}"];
    }, "/oeL": function (t, e, n) {
        "use strict";
        (function (t) { function r() { if (!Mo) {
            var t = jo.Symbol;
            if (t && t.iterator)
                Mo = t.iterator;
            else
                for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                    var r = e[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Mo = r);
                }
        } return Mo; } function o(t) { Zone.current.scheduleMicroTask("scheduleMicrotask", t); } function i(t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e); } function s(t) { if ("string" == typeof t)
            return t; if (null == t)
            return "" + t; if (t.overriddenName)
            return "" + t.overriddenName; if (t.name)
            return "" + t.name; var e = t.toString(); if (null == e)
            return "" + e; var n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n); } function a(t) { return "function" == typeof t && t.hasOwnProperty("annotation") && (t = t.annotation), t; } function u(t, e) { if (t === Object || t === String || t === Function || t === Number || t === Array)
            throw new Error("Can not use native " + s(t) + " as constructor"); if ("function" == typeof t)
            return t; if (Array.isArray(t)) {
            var n = t, r = n.length - 1, o = t[r];
            if ("function" != typeof o)
                throw new Error("Last position of Class method array must be Function in key " + e + " was '" + s(o) + "'");
            if (r != o.length)
                throw new Error("Number of annotations (" + r + ") does not match number of arguments (" + o.length + ") in the function: " + s(o));
            for (var i = [], u = 0, c = n.length - 1; u < c; u++) {
                var l = [];
                i.push(l);
                var p = n[u];
                if (Array.isArray(p))
                    for (var f = 0; f < p.length; f++)
                        l.push(a(p[f]));
                else
                    "function" == typeof p ? l.push(a(p)) : l.push(p);
            }
            return Lo.defineMetadata("parameters", i, o), o;
        } throw new Error("Only Function or Array is supported in Class definition for key '" + e + "' is '" + s(t) + "'"); } function c(t) { var e = u(t.hasOwnProperty("constructor") ? t.constructor : void 0, "constructor"), n = e.prototype; if (t.hasOwnProperty("extends")) {
            if ("function" != typeof t.extends)
                throw new Error("Class definition 'extends' property must be a constructor function was: " + s(t.extends));
            e.prototype = n = Object.create(t.extends.prototype);
        } for (var r in t)
            "extends" !== r && "prototype" !== r && t.hasOwnProperty(r) && (n[r] = u(t[r], r)); this && this.annotations instanceof Array && Lo.defineMetadata("annotations", this.annotations, e); var o = e.name; return o && "constructor" !== o || (e.overriddenName = "class" + Do++), e; } function l(t, e, n, r) { function o(t) { if (!Lo || !Lo.getOwnMetadata)
            throw "reflect-metadata shim is required when using class decorators"; if (this instanceof o)
            return i.call(this, t), this; var e = new o(t), n = "function" == typeof this && Array.isArray(this.annotations) ? this.annotations : []; n.push(e); var s = function (t) { var n = Lo.getOwnMetadata("annotations", t) || []; return n.push(e), Lo.defineMetadata("annotations", n, t), t; }; return s.annotations = n, s.Class = c, r && r(s), s; } var i = p(e); return n && (o.prototype = Object.create(n.prototype)), o.prototype.toString = function () { return "@" + t; }, o.annotationCls = o, o; } function p(t) { return function () { for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n]; if (t) {
            var r = t.apply(void 0, e);
            for (var o in r)
                this[o] = r[o];
        } }; } function f(t, e, n) { function r() { function t(t, e, n) { for (var r = Lo.getOwnMetadata("parameters", t) || []; r.length <= n;)
            r.push(null); return r[n] = r[n] || [], r[n].push(i), Lo.defineMetadata("parameters", r, t), t; } for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n]; if (this instanceof r)
            return o.apply(this, e), this; var i = new (r.bind.apply(r, [void 0].concat(e))); return t.annotation = i, t; } var o = p(e); return n && (r.prototype = Object.create(n.prototype)), r.prototype.toString = function () { return "@" + t; }, r.annotationCls = r, r; } function h(t, e, n) { function r() { for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]; if (this instanceof r)
            return o.apply(this, t), this; var n = new (r.bind.apply(r, [void 0].concat(t))); return function (t, e) { var r = Lo.getOwnMetadata("propMetadata", t.constructor) || {}; r[e] = r.hasOwnProperty(e) && r[e] || [], r[e].unshift(n), Lo.defineMetadata("propMetadata", r, t.constructor); }; } var o = p(e); return n && (r.prototype = Object.create(n.prototype)), r.prototype.toString = function () { return "@" + t; }, r.annotationCls = r, r; } function d(t) { return null == t || t === Ko.Default; } function y(t) { return t.__forward_ref__ = y, t.toString = function () { return s(this()); }, t; } function m(t) { return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === y ? t() : t; } function v(t) { return t[gi]; } function g(t) { return t[bi]; } function b(t) { return t[_i] || _; } function _(t) { for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]; t.error.apply(t, e); } function w(t, e) { var n = t + " caused by: " + (e instanceof Error ? e.message : e), r = Error(n); return r[bi] = e, r; } function C(t) { for (var e = [], n = 0; n < t.length; ++n) {
            if (e.indexOf(t[n]) > -1)
                return e.push(t[n]), e;
            e.push(t[n]);
        } return e; } function S(t) { if (t.length > 1) {
            return " (" + C(t.slice().reverse()).map(function (t) { return s(t.token); }).join(" -> ") + ")";
        } return ""; } function E(t, e, n, r) { var o = [e], i = n(o), s = r ? w(i, r) : Error(i); return s.addKey = O, s.keys = o, s.injectors = [t], s.constructResolvingMessage = n, s[bi] = r, s; } function O(t, e) { this.injectors.push(t), this.keys.push(e), this.message = this.constructResolvingMessage(this.keys); } function T(t, e) { return E(t, e, function (t) { return "No provider for " + s(t[0].token) + "!" + S(t); }); } function P(t, e) { return E(t, e, function (t) { return "Cannot instantiate cyclic dependency!" + S(t); }); } function x(t, e, n, r) { return E(t, r, function (t) { var n = s(t[0].token); return e.message + ": Error during instantiation of " + n + "!" + S(t) + "."; }, e); } function R(t) { return Error("Invalid provider - only instances of Provider and Type are allowed, got: " + t); } function A(t, e) { for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            i && 0 != i.length ? n.push(i.map(s).join(" ")) : n.push("?");
        } return Error("Cannot resolve all parameters for '" + s(t) + "'(" + n.join(", ") + "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" + s(t) + "' is decorated with Injectable."); } function k(t) { return Error("Index " + t + " is out-of-bounds."); } function N(t, e) { return Error("Cannot mix multi providers and regular providers, got: " + t + " " + e); } function I(t) { return "function" == typeof t; } function j(t) { return t ? t.map(function (t) { var e = t.type, n = e.annotationCls, r = t.args ? t.args : []; return new (n.bind.apply(n, [void 0].concat(r))); }) : []; } function M(t) { var e = Object.getPrototypeOf(t.prototype); return (e ? e.constructor : null) || Object; } function D(t) { var e, n; if (t.useClass) {
            var r = m(t.useClass);
            e = Ri.factory(r), n = B(r);
        }
        else
            t.useExisting ? (e = function (t) { return t; }, n = [Ai.fromKey(Ci.get(t.useExisting))]) : t.useFactory ? (e = t.useFactory, n = H(t.useFactory, t.deps)) : (e = function () { return t.useValue; }, n = ki); return new Ii(e, n); } function L(t) { return new Ni(Ci.get(t.provide), [D(t)], t.multi || !1); } function F(t) { var e = U(t, []), n = e.map(L), r = V(n, new Map); return Array.from(r.values()); } function V(t, e) { for (var n = 0; n < t.length; n++) {
            var r = t[n], o = e.get(r.key.id);
            if (o) {
                if (r.multiProvider !== o.multiProvider)
                    throw N(o, r);
                if (r.multiProvider)
                    for (var i = 0; i < r.resolvedFactories.length; i++)
                        o.resolvedFactories.push(r.resolvedFactories[i]);
                else
                    e.set(r.key.id, r);
            }
            else {
                var s = void 0;
                s = r.multiProvider ? new Ni(r.key, r.resolvedFactories.slice(), r.multiProvider) : r, e.set(r.key.id, s);
            }
        } return e; } function U(t, e) { return t.forEach(function (t) { if (t instanceof Oi)
            e.push({ provide: t, useClass: t });
        else if (t && "object" == typeof t && void 0 !== t.provide)
            e.push(t);
        else {
            if (!(t instanceof Array))
                throw R(t);
            U(t, e);
        } }), e; } function H(t, e) { if (e) {
            var n = e.map(function (t) { return [t]; });
            return e.map(function (e) { return q(t, e, n); });
        } return B(t); } function B(t) { var e = Ri.parameters(t); if (!e)
            return []; if (e.some(function (t) { return null == t; }))
            throw A(t, e); return e.map(function (n) { return q(t, n, e); }); } function q(t, e, n) { var r = null, o = !1; if (!Array.isArray(e))
            return e instanceof ai ? z(e.token, o, null) : z(e, o, null); for (var i = null, s = 0; s < e.length; ++s) {
            var a = e[s];
            a instanceof Oi ? r = a : a instanceof ai ? r = a.token : a instanceof ui ? o = !0 : a instanceof li || a instanceof pi ? i = a : a instanceof Ao && (r = a);
        } if (null != (r = m(r)))
            return z(r, o, i); throw A(t, n); } function z(t, e, n) { return new Ai(Ci.get(t), e, n); } function K(t, e) { for (var n = new Array(t._providers.length), r = 0; r < t._providers.length; ++r)
            n[r] = e(t.getProviderAtIndex(r)); return n; } function Q(t) { return !!t && "function" == typeof t.then; } function W(t) { return !!t && "function" == typeof t.subscribe; } function G() { return "" + Z() + Z() + Z(); } function Z() { return String.fromCharCode(97 + Math.floor(25 * Math.random())); } function Y() { throw new Error("Runtime compiler is not loaded"); } function J(t) { var e = Error("No component factory found for " + s(t) + ". Did you add it to @NgModule.entryComponents?"); return e[$i] = t, e; } function X() { var t = jo.wtf; return !(!t || !(ns = t.trace)) && (rs = ns.events, !0); } function $(t, e) { return void 0 === e && (e = null), rs.createScope(t, e); } function tt(t, e) { return ns.leaveScope(t, e), e; } function et(t, e) { return ns.beginTimeRange(t, e); } function nt(t) { ns.endTimeRange(t); } function rt(t, e) { return null; } function ot(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
            try {
                t._nesting++, t.onMicrotaskEmpty.emit(null);
            }
            finally {
                if (t._nesting--, !t.hasPendingMicrotasks)
                    try {
                        t.runOutsideAngular(function () { return t.onStable.emit(null); });
                    }
                    finally {
                        t.isStable = !0;
                    }
            } } function it(t) { t._inner = t._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function (e, n, r, o, i, s) { try {
                return st(t), e.invokeTask(r, o, i, s);
            }
            finally {
                at(t);
            } }, onInvoke: function (e, n, r, o, i, s, a) { try {
                return st(t), e.invoke(r, o, i, s, a);
            }
            finally {
                at(t);
            } }, onHasTask: function (e, n, r, o) { e.hasTask(r, o), n === r && ("microTask" == o.change ? (t.hasPendingMicrotasks = o.microTask, ot(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask)); }, onHandleError: function (e, n, r, o) { return e.handleError(r, o), t.runOutsideAngular(function () { return t.onError.emit(o); }), !1; } }); } function st(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)); } function at(t) { t._nesting--, ot(t); } function ut(t) { bs = t; } function ct() { if (ws)
            throw new Error("Cannot enable prod mode after platform setup."); _s = !1; } function lt() { return ws = !0, _s; } function pt(t) { if (vs && !vs.destroyed && !vs.injector.get(Cs, !1))
            throw new Error("There can be only one platform. Destroy the previous one to create a new one."); vs = t.get(Es); var e = t.get(Bi, null); return e && e.forEach(function (t) { return t(); }), vs; } function ft(t, e, n) { void 0 === n && (n = []); var r = new Ao("Platform: " + e); return function (e) { void 0 === e && (e = []); var o = yt(); return o && !o.injector.get(Cs, !1) || (t ? t(n.concat(e).concat({ provide: r, useValue: !0 })) : pt(Mi.resolveAndCreate(n.concat(e).concat({ provide: r, useValue: !0 })))), ht(r); }; } function ht(t) { var e = yt(); if (!e)
            throw new Error("No platform exists!"); if (!e.injector.get(t, null))
            throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e; } function dt() { vs && !vs.destroyed && vs.destroy(); } function yt() { return vs && !vs.destroyed ? vs : null; } function mt(t, e, n) { try {
            var r = n();
            return Q(r) ? r.catch(function (n) { throw e.runOutsideAngular(function () { return t.handleError(n); }), n; }) : r;
        }
        catch (n) {
            throw e.runOutsideAngular(function () { return t.handleError(n); }), n;
        } } function vt(t, e) { var n = t.indexOf(e); n > -1 && t.splice(n, 1); } function gt(t, e) { var n = Ls.get(t); if (n)
            throw new Error("Duplicate module registered for " + t + " - " + n.moduleType.name + " vs " + e.moduleType.name); Ls.set(t, e); } function bt(t) { var e = Ls.get(t); if (!e)
            throw new Error("No module with ID " + t + " loaded"); return e; } function _t(t) { return t.reduce(function (t, e) { var n = Array.isArray(e) ? _t(e) : e; return t.concat(n); }, []); } function wt(t, e, n) { if (!t)
            throw new Error("Cannot find '" + n + "' in '" + e + "'"); return t; } function Ct(t) { return t.map(function (t) { return t.nativeElement; }); } function St(t, e, n) { t.childNodes.forEach(function (t) { t instanceof Zs && (e(t) && n.push(t), St(t, e, n)); }); } function Et(t, e, n) { t instanceof Zs && t.childNodes.forEach(function (t) { e(t) && n.push(t), t instanceof Zs && Et(t, e, n); }); } function Ot(t) { return Ys.get(t) || null; } function Tt(t) { Ys.set(t.nativeNode, t); } function Pt(t) { Ys.delete(t.nativeNode); } function xt(t, e) { var n = Rt(t), r = Rt(e); if (n && r)
            return At(t, e, xt); var o = t && ("object" == typeof t || "function" == typeof t), s = e && ("object" == typeof e || "function" == typeof e); return !(n || !o || r || !s) || i(t, e); } function Rt(t) { return !!Nt(t) && (Array.isArray(t) || !(t instanceof Map) && r() in t); } function At(t, e, n) { for (var o = t[r()](), i = e[r()]();;) {
            var s = o.next(), a = i.next();
            if (s.done && a.done)
                return !0;
            if (s.done || a.done)
                return !1;
            if (!n(s.value, a.value))
                return !1;
        } } function kt(t, e) { if (Array.isArray(t))
            for (var n = 0; n < t.length; n++)
                e(t[n]);
        else
            for (var o = t[r()](), i = void 0; !(i = o.next()).done;)
                e(i.value); } function Nt(t) { return null !== t && ("function" == typeof t || "object" == typeof t); } function It(t, e, n) { var r = t.previousIndex; if (null === r)
            return r; var o = 0; return n && r < n.length && (o = n[r]), r + e + o; } function jt(t) { return t.name || typeof t; } function Mt() { return Ri; } function Dt() { return ha; } function Lt() { return da; } function Ft(t) { return t || "en-US"; } function Vt(t, e) { return t.nodes[e]; } function Ut(t, e) { return t.nodes[e]; } function Ht(t, e) { return t.nodes[e]; } function Bt(t, e) { return t.nodes[e]; } function qt(t, e) { return t.nodes[e]; } function zt(t, e, n, r) { var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'."; return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), Qt(o, t); } function Kt(t, e) { return t instanceof Error || (t = new Error(t.toString())), Wt(t, e), t; } function Qt(t, e) { var n = new Error(t); return Wt(n, e), n; } function Wt(t, e) { t[gi] = e, t[_i] = e.logError.bind(e); } function Gt(t) { return !!v(t); } function Zt(t) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t); } function Yt(t) { var e = Pa.get(t); return e || (e = s(t) + "_" + Pa.size, Pa.set(t, e)), e; } function Jt(t, e, n, r) { if (r instanceof Js) {
            r = r.wrapped;
            var o = t.def.nodes[e].bindingIndex + n, i = t.oldValues[o];
            i instanceof Js && (i = i.wrapped), t.oldValues[o] = new Js(i);
        } return r; } function Xt(t) { return { id: xa, styles: t.styles, encapsulation: t.encapsulation, data: t.data }; } function $t(t) { if (t && t.id === xa) {
            var e = null != t.encapsulation && t.encapsulation !== ri.None || t.styles.length || Object.keys(t.data).length;
            t.id = e ? "c" + Aa++ : Ra;
        } return t && t.id === Ra && (t = null), t || null; } function te(t, e, n, r) { var o = t.oldValues; return !(!(2 & t.state) && i(o[e.bindingIndex + n], r)); } function ee(t, e, n, r) { return !!te(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0); } function ne(t, e, n, r) { var o = t.oldValues[e.bindingIndex + n]; if (1 & t.state || !xt(o, r))
            throw zt(Oa.createDebugContext(t, e.index), o, r, 0 != (1 & t.state)); } function re(t) { for (var e = t; e;)
            2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent; } function oe(t, e) { for (var n = t; n && n !== e;)
            n.state |= 64, n = n.viewContainerParent || n.parent; } function ie(t, e, n, r) { return re(33554432 & t.def.nodes[e].flags ? Ut(t, e).componentView : t), Oa.handleEvent(t, e, n, r); } function se(t) { if (t.parent) {
            return Ut(t.parent, t.parentNodeDef.index);
        } return null; } function ae(t) { return t.parent ? t.parentNodeDef.parent : null; } function ue(t, e) { switch (201347067 & e.flags) {
            case 1: return Ut(t, e.index).renderElement;
            case 2: return Vt(t, e.index).renderText;
        } } function ce(t, e) { return t ? t + ":" + e : e; } function le(t) { return !!t.parent && !!(32768 & t.parentNodeDef.flags); } function pe(t) { return !(!t.parent || 32768 & t.parentNodeDef.flags); } function fe(t) { return 1 << t % 32; } function he(t) { var e = {}, n = 0, r = {}; return t && t.forEach(function (t) { var o = t[0], i = t[1]; "number" == typeof o ? (e[o] = i, n |= fe(o)) : r[o] = i; }), { matchedQueries: e, references: r, matchedQueryIds: n }; } function de(t) { return t.map(function (t) { var e, n; return Array.isArray(t) ? (n = t[0], e = t[1]) : (n = 0, e = t), { flags: n, token: e, tokenKey: Yt(e) }; }); } function ye(t, e, n) { var r = n.renderParent; return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === ri.Native ? Ut(t, n.renderParent.index).renderElement : void 0 : e; } function me(t) { var e = ka.get(t); return e || (e = t(function () { return Ta; }), e.factory = t, ka.set(t, e)), e; } function ve(t) { var e = []; return ge(t, 0, void 0, void 0, e), e; } function ge(t, e, n, r, o) { 3 === e && (n = t.renderer.parentNode(ue(t, t.def.lastRenderRootNode))), be(t, e, 0, t.def.nodes.length - 1, n, r, o); } function be(t, e, n, r, o, i, s) { for (var a = n; a <= r; a++) {
            var u = t.def.nodes[a];
            11 & u.flags && we(t, u, e, o, i, s), a += u.childCount;
        } } function _e(t, e, n, r, o, i) { for (var s = t; s && !le(s);)
            s = s.parent; for (var a = s.parent, u = ae(s), c = u.index + 1, l = u.index + u.childCount, p = c; p <= l; p++) {
            var f = a.def.nodes[p];
            f.ngContentIndex === e && we(a, f, n, r, o, i), p += f.childCount;
        } if (!a.parent) {
            var h = t.root.projectableNodes[e];
            if (h)
                for (var p = 0; p < h.length; p++)
                    Ce(t, h[p], n, r, o, i);
        } } function we(t, e, n, r, o, i) { if (8 & e.flags)
            _e(t, e.ngContent.index, n, r, o, i);
        else {
            var s = ue(t, e);
            if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags) {
                if (16 & e.bindingFlags && Ce(t, s, n, r, o, i), 32 & e.bindingFlags) {
                    var a = Ut(t, e.index).componentView;
                    Ce(a, s, n, r, o, i);
                }
            }
            else
                Ce(t, s, n, r, o, i);
            if (16777216 & e.flags)
                for (var u = Ut(t, e.index).viewContainer._embeddedViews, c = 0; c < u.length; c++)
                    ge(u[c], n, r, o, i);
            1 & e.flags && !e.element.name && be(t, n, e.index + 1, e.index + e.childCount, r, o, i);
        } } function Ce(t, e, n, r, o, i) { var s = t.renderer; switch (n) {
            case 1:
                s.appendChild(r, e);
                break;
            case 2:
                s.insertBefore(r, e, o);
                break;
            case 3:
                s.removeChild(r, e);
                break;
            case 0: i.push(e);
        } } function Se(t) { if (":" === t[0]) {
            var e = t.match(Na);
            return [e[1], e[2]];
        } return ["", t]; } function Ee(t) { for (var e = 0, n = 0; n < t.length; n++)
            e |= t[n].flags; return e; } function Oe(t, e) { for (var n = "", r = 0; r < 2 * t; r += 2)
            n = n + e[r] + Pe(e[r + 1]); return n + e[2 * t]; } function Te(t, e, n, r, o, i, s, a, u, c, l, p, f, h, d, y, m, v, g, b) { switch (t) {
            case 1: return e + Pe(n) + r;
            case 2: return e + Pe(n) + r + Pe(o) + i;
            case 3: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a;
            case 4: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c;
            case 5: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c + Pe(l) + p;
            case 6: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c + Pe(l) + p + Pe(f) + h;
            case 7: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c + Pe(l) + p + Pe(f) + h + Pe(d) + y;
            case 8: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c + Pe(l) + p + Pe(f) + h + Pe(d) + y + Pe(m) + v;
            case 9: return e + Pe(n) + r + Pe(o) + i + Pe(s) + a + Pe(u) + c + Pe(l) + p + Pe(f) + h + Pe(d) + y + Pe(m) + v + Pe(g) + b;
            default: throw new Error("Does not support more than 9 expressions");
        } } function Pe(t) { return null != t ? t.toString() : ""; } function xe(t, e, n, r, o, i) { t |= 1; var s = he(e), a = s.matchedQueries, u = s.references; return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: a, matchedQueryIds: s.matchedQueryIds, references: u, ngContentIndex: n, childCount: r, bindings: [], bindingFlags: 0, outputs: [], element: { ns: null, name: null, attrs: null, template: i ? me(i) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: o || Ta }, provider: null, text: null, query: null, ngContent: null }; } function Re(t, e, n, r, o, i, s, a, u, c, l) { void 0 === i && (i = []), u || (u = Ta); var p = he(e), f = p.matchedQueries, h = p.references, d = p.matchedQueryIds, y = null, m = null; o && (I = Se(o), y = I[0], m = I[1]), s = s || []; for (var v = new Array(s.length), g = 0; g < s.length; g++) {
            var b = s[g], _ = b[0], w = b[1], C = b[2], S = Se(w), E = S[0], O = S[1], T = void 0, P = void 0;
            switch (15 & _) {
                case 4:
                    P = C;
                    break;
                case 1:
                case 8: T = C;
            }
            v[g] = { flags: _, ns: E, name: O, nonMinifiedName: O, securityContext: T, suffix: P };
        } a = a || []; for (var x = new Array(a.length), g = 0; g < a.length; g++) {
            var R = a[g], A = R[0], k = R[1];
            x[g] = { type: 0, target: A, eventName: k, propName: null };
        } i = i || []; var N = i.map(function (t) { var e = t[0], n = t[1], r = Se(e); return [r[0], r[1], n]; }); return l = $t(l), c && (t |= 33554432), t |= 1, { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: f, matchedQueryIds: d, references: h, ngContentIndex: n, childCount: r, bindings: v, bindingFlags: Ee(v), outputs: x, element: { ns: y, name: m, attrs: N, template: null, componentProvider: null, componentView: c || null, componentRendererType: l, publicProviders: null, allProviders: null, handleEvent: u || Ta }, provider: null, text: null, query: null, ngContent: null }; var I; } function Ae(t, e, n) { var r, o = n.element, i = t.root.selectorOrNode, s = t.renderer; if (t.parent || !i) {
            r = o.name ? s.createElement(o.name, o.ns) : s.createComment("");
            var a = ye(t, e, n);
            a && s.appendChild(a, r);
        }
        else
            r = s.selectRootElement(i); if (o.attrs)
            for (var u = 0; u < o.attrs.length; u++) {
                var c = o.attrs[u], l = c[0], p = c[1], f = c[2];
                s.setAttribute(r, p, f, l);
            } return r; } function ke(t, e, n, r) { for (var o = 0; o < n.outputs.length; o++) {
            var i = n.outputs[o], s = Ne(t, n.index, ce(i.target, i.eventName)), a = i.target, u = t;
            "component" === i.target && (a = null, u = e);
            var c = u.renderer.listen(a || r, i.eventName, s);
            t.disposables[n.outputIndex + o] = c;
        } } function Ne(t, e, n) { return function (r) { try {
            return ie(t, e, n, r);
        }
        catch (e) {
            t.root.errorHandler.handleError(e);
        } }; } function Ie(t, e, n, r, o, i, s, a, u, c, l, p) { var f = e.bindings.length, h = !1; return f > 0 && Me(t, e, 0, n) && (h = !0), f > 1 && Me(t, e, 1, r) && (h = !0), f > 2 && Me(t, e, 2, o) && (h = !0), f > 3 && Me(t, e, 3, i) && (h = !0), f > 4 && Me(t, e, 4, s) && (h = !0), f > 5 && Me(t, e, 5, a) && (h = !0), f > 6 && Me(t, e, 6, u) && (h = !0), f > 7 && Me(t, e, 7, c) && (h = !0), f > 8 && Me(t, e, 8, l) && (h = !0), f > 9 && Me(t, e, 9, p) && (h = !0), h; } function je(t, e, n) { for (var r = !1, o = 0; o < n.length; o++)
            Me(t, e, o, n[o]) && (r = !0); return r; } function Me(t, e, n, r) { if (!ee(t, e, n, r))
            return !1; var o = e.bindings[n], i = Ut(t, e.index), s = i.renderElement, a = o.name; switch (15 & o.flags) {
            case 1:
                De(t, o, s, o.ns, a, r);
                break;
            case 2:
                Le(t, s, a, r);
                break;
            case 4:
                Fe(t, o, s, a, r);
                break;
            case 8: Ve(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, s, a, r);
        } return !0; } function De(t, e, n, r, o, i) { var s = e.securityContext, a = s ? t.root.sanitizer.sanitize(s, i) : i; a = null != a ? a.toString() : null; var u = t.renderer; null != i ? u.setAttribute(n, o, a, r) : u.removeAttribute(n, o, r); } function Le(t, e, n, r) { var o = t.renderer; r ? o.addClass(e, n) : o.removeClass(e, n); } function Fe(t, e, n, r, o) { var i = t.root.sanitizer.sanitize(Ca.STYLE, o); if (null != i) {
            i = i.toString();
            var s = e.suffix;
            null != s && (i += s);
        }
        else
            i = null; var a = t.renderer; null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r); } function Ve(t, e, n, r, o) { var i = e.securityContext, s = i ? t.root.sanitizer.sanitize(i, o) : o; t.renderer.setProperty(n, r, s); } function Ue(t, e, n, r) { return { index: -1, deps: de(r), flags: t, token: e, value: n }; } function He(t) { for (var e = {}, n = 0; n < t.length; n++) {
            var r = t[n];
            r.index = n, e[Yt(r.token)] = r;
        } return { factory: null, providersByKey: e, providers: t }; } function Be(t) { for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
            var o = e.providers[r];
            n[r] = 4096 & o.flags ? Ma : ze(t, o);
        } } function qe(t, e, n) { if (void 0 === n && (n = mi.THROW_IF_NOT_FOUND), 8 & e.flags)
            return e.token; if (2 & e.flags && (n = null), 1 & e.flags)
            return t._parent.get(e.token, n); var r = e.tokenKey; switch (r) {
            case Da:
            case La: return t;
        } var o = t._def.providersByKey[r]; if (o) {
            var i = t._providers[o.index];
            return i === Ma && (i = t._providers[o.index] = ze(t, o)), i;
        } return t._parent.get(e.token, n); } function ze(t, e) { var n; switch (201347067 & e.flags) {
            case 512:
                n = Ke(t, e.value, e.deps);
                break;
            case 1024:
                n = Qe(t, e.value, e.deps);
                break;
            case 2048:
                n = qe(t, e.deps[0]);
                break;
            case 256: n = e.value;
        } return n; } function Ke(t, e, n) { var r, o = n.length; switch (o) {
            case 0:
                r = new e;
                break;
            case 1:
                r = new e(qe(t, n[0]));
                break;
            case 2:
                r = new e(qe(t, n[0]), qe(t, n[1]));
                break;
            case 3:
                r = new e(qe(t, n[0]), qe(t, n[1]), qe(t, n[2]));
                break;
            default:
                for (var i = new Array(o), s = 0; s < o; s++)
                    i[s] = qe(t, n[s]);
                r = new (e.bind.apply(e, [void 0].concat(i)));
        } return r; } function Qe(t, e, n) { var r, o = n.length; switch (o) {
            case 0:
                r = e();
                break;
            case 1:
                r = e(qe(t, n[0]));
                break;
            case 2:
                r = e(qe(t, n[0]), qe(t, n[1]));
                break;
            case 3:
                r = e(qe(t, n[0]), qe(t, n[1]), qe(t, n[2]));
                break;
            default:
                for (var i = Array(o), s = 0; s < o; s++)
                    i[s] = qe(t, n[s]);
                r = e.apply(void 0, i);
        } return r; } function We(t, e) { for (var n = t._def, r = 0; r < n.providers.length; r++) {
            if (131072 & n.providers[r].flags) {
                var o = t._providers[r];
                o && o !== Ma && o.ngOnDestroy();
            }
        } } function Ge(t, e, n, r) { var o = e.viewContainer._embeddedViews; null !== n && void 0 !== n || (n = o.length), r.viewContainerParent = t, nn(o, n, r), Ze(e, r), Oa.dirtyParentQueries(r), tn(e, n > 0 ? o[n - 1] : null, r); } function Ze(t, e) { var n = se(e); if (n && n !== t && !(16 & e.state)) {
            e.state |= 16;
            var r = n.template._projectedViews;
            r || (r = n.template._projectedViews = []), r.push(e), Ye(e.parent.def, e.parentNodeDef);
        } } function Ye(t, e) { if (!(4 & e.flags)) {
            t.nodeFlags |= 4, e.flags |= 4;
            for (var n = e.parent; n;)
                n.childFlags |= 4, n = n.parent;
        } } function Je(t, e) { var n = t.viewContainer._embeddedViews; if ((null == e || e >= n.length) && (e = n.length - 1), e < 0)
            return null; var r = n[e]; return r.viewContainerParent = null, rn(n, e), Oa.dirtyParentQueries(r), en(r), r; } function Xe(t) { if (16 & t.state) {
            var e = se(t);
            if (e) {
                var n = e.template._projectedViews;
                n && (rn(n, n.indexOf(t)), Oa.dirtyParentQueries(t));
            }
        } } function $e(t, e, n) { var r = t.viewContainer._embeddedViews, o = r[e]; return rn(r, e), null == n && (n = r.length), nn(r, n, o), Oa.dirtyParentQueries(o), en(o), tn(t, n > 0 ? r[n - 1] : null, o), o; } function tn(t, e, n) { var r = e ? ue(e, e.def.lastRenderRootNode) : t.renderElement; ge(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0); } function en(t) { ge(t, 3, null, null, void 0); } function nn(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n); } function rn(t, e) { e >= t.length - 1 ? t.pop() : t.splice(e, 1); } function on(t, e, n, r, o, i) { return new Va(t, e, n, r, o, i); } function sn(t) { return t.viewDefFactory; } function an(t, e, n) { return new Ha(t, e, n); } function un(t) { return new Ba(t); } function cn(t, e) { return new qa(t, e); } function ln(t, e) { return new za(t, e); } function pn(t, e) { var n = t.def.nodes[e]; if (1 & n.flags) {
            var r = Ut(t, n.index);
            return n.element.template ? r.template : r.renderElement;
        } if (2 & n.flags)
            return Vt(t, n.index).renderText; if (20240 & n.flags)
            return Ht(t, n.index).instance; throw new Error("Illegal state: read nodeValue for node index " + e); } function fn(t) { return new Ka(t.renderer); } function hn(t, e, n, r) { return new Qa(t, e, n, r); } function dn(t, e, n, r, o, i, s) { var a = []; if (i)
            for (var u in i) {
                var c = i[u], l = c[0], p = c[1];
                a[l] = { flags: 8, name: u, nonMinifiedName: p, ns: null, securityContext: null, suffix: null };
            } var f = []; if (s)
            for (var h in s)
                f.push({ type: 1, propName: h, target: null, eventName: s[h] }); return t |= 16384, vn(t, e, n, r, r, o, a, f); } function yn(t, e, n) { return t |= 16, vn(t, null, 0, e, e, n); } function mn(t, e, n, r, o) { return vn(t, e, 0, n, r, o); } function vn(t, e, n, r, o, i, s, a) { var u = he(e), c = u.matchedQueries, l = u.references, p = u.matchedQueryIds; a || (a = []), s || (s = []); var f = de(i); return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: p, references: l, ngContentIndex: -1, childCount: n, bindings: s, bindingFlags: Ee(s), outputs: a, element: null, provider: { token: r, value: o, deps: f }, text: null, query: null, ngContent: null }; } function gn(t, e) { return 4096 & e.flags ? tu : En(t, e); } function bn(t, e) { for (var n = t; n.parent && !le(n);)
            n = n.parent; return On(n.parent, ae(n), !0, e.provider.value, e.provider.deps); } function _n(t, e) { var n = (32768 & e.flags) > 0, r = On(t, e.parent, n, e.provider.value, e.provider.deps); if (e.outputs.length)
            for (var o = 0; o < e.outputs.length; o++) {
                var i = e.outputs[o], s = r[i.propName].subscribe(wn(t, e.parent.index, i.eventName));
                t.disposables[e.outputIndex + o] = s.unsubscribe.bind(s);
            } return r; } function wn(t, e, n) { return function (r) { try {
            return ie(t, e, n, r);
        }
        catch (e) {
            t.root.errorHandler.handleError(e);
        } }; } function Cn(t, e, n, r, o, i, s, a, u, c, l, p) { var f = Ht(t, e.index), h = f.instance, d = !1, y = void 0, m = e.bindings.length; return m > 0 && te(t, e, 0, n) && (d = !0, y = Rn(t, f, e, 0, n, y)), m > 1 && te(t, e, 1, r) && (d = !0, y = Rn(t, f, e, 1, r, y)), m > 2 && te(t, e, 2, o) && (d = !0, y = Rn(t, f, e, 2, o, y)), m > 3 && te(t, e, 3, i) && (d = !0, y = Rn(t, f, e, 3, i, y)), m > 4 && te(t, e, 4, s) && (d = !0, y = Rn(t, f, e, 4, s, y)), m > 5 && te(t, e, 5, a) && (d = !0, y = Rn(t, f, e, 5, a, y)), m > 6 && te(t, e, 6, u) && (d = !0, y = Rn(t, f, e, 6, u, y)), m > 7 && te(t, e, 7, c) && (d = !0, y = Rn(t, f, e, 7, c, y)), m > 8 && te(t, e, 8, l) && (d = !0, y = Rn(t, f, e, 8, l, y)), m > 9 && te(t, e, 9, p) && (d = !0, y = Rn(t, f, e, 9, p, y)), y && h.ngOnChanges(y), 2 & t.state && 65536 & e.flags && h.ngOnInit(), 262144 & e.flags && h.ngDoCheck(), d; } function Sn(t, e, n) { for (var r = Ht(t, e.index), o = r.instance, i = !1, s = void 0, a = 0; a < n.length; a++)
            te(t, e, a, n[a]) && (i = !0, s = Rn(t, r, e, a, n[a], s)); return s && o.ngOnChanges(s), 2 & t.state && 65536 & e.flags && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i; } function En(t, e) { var n, r = (8192 & e.flags) > 0, o = e.provider; switch (201347067 & e.flags) {
            case 512:
                n = On(t, e.parent, r, o.value, o.deps);
                break;
            case 1024:
                n = Tn(t, e.parent, r, o.value, o.deps);
                break;
            case 2048:
                n = Pn(t, e.parent, r, o.deps[0]);
                break;
            case 256: n = o.value;
        } return n; } function On(t, e, n, r, o) { var i, s = o.length; switch (s) {
            case 0:
                i = new r;
                break;
            case 1:
                i = new r(Pn(t, e, n, o[0]));
                break;
            case 2:
                i = new r(Pn(t, e, n, o[0]), Pn(t, e, n, o[1]));
                break;
            case 3:
                i = new r(Pn(t, e, n, o[0]), Pn(t, e, n, o[1]), Pn(t, e, n, o[2]));
                break;
            default:
                for (var a = new Array(s), u = 0; u < s; u++)
                    a[u] = Pn(t, e, n, o[u]);
                i = new (r.bind.apply(r, [void 0].concat(a)));
        } return i; } function Tn(t, e, n, r, o) { var i, s = o.length; switch (s) {
            case 0:
                i = r();
                break;
            case 1:
                i = r(Pn(t, e, n, o[0]));
                break;
            case 2:
                i = r(Pn(t, e, n, o[0]), Pn(t, e, n, o[1]));
                break;
            case 3:
                i = r(Pn(t, e, n, o[0]), Pn(t, e, n, o[1]), Pn(t, e, n, o[2]));
                break;
            default:
                for (var a = Array(s), u = 0; u < s; u++)
                    a[u] = Pn(t, e, n, o[u]);
                i = r.apply(void 0, a);
        } return i; } function Pn(t, e, n, r, o) { if (void 0 === o && (o = mi.THROW_IF_NOT_FOUND), 8 & r.flags)
            return r.token; var i = t; 2 & r.flags && (o = null); var s = r.tokenKey; for (s === Xa && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent); t;) {
            if (e)
                switch (s) {
                    case Wa:
                        var a = xn(t, e, n);
                        return fn(a);
                    case Ga:
                        var a = xn(t, e, n);
                        return a.renderer;
                    case Za: return new Ms(Ut(t, e.index).renderElement);
                    case Ya: return Ut(t, e.index).viewContainer;
                    case Ja:
                        if (e.element.template)
                            return Ut(t, e.index).template;
                        break;
                    case Xa: return un(xn(t, e, n));
                    case $a: return ln(t, e);
                    default:
                        var u = (n ? e.element.allProviders : e.element.publicProviders)[s];
                        if (u) {
                            var c = Ht(t, u.index);
                            return c.instance === tu && (c.instance = En(t, u)), c.instance;
                        }
                }
            n = le(t), e = ae(t), t = t.parent;
        } var l = i.root.injector.get(r.token, eu); return l !== eu || o === eu ? l : i.root.ngModule.injector.get(r.token, o); } function xn(t, e, n) { var r; if (n)
            r = Ut(t, e.index).componentView;
        else
            for (r = t; r.parent && !le(r);)
                r = r.parent; return r; } function Rn(t, e, n, r, o, i) { if (32768 & n.flags) {
            var s = Ut(t, n.parent.index).componentView;
            2 & s.def.flags && (s.state |= 8);
        } var a = n.bindings[r], u = a.name; if (e.instance[u] = o, 524288 & n.flags) {
            i = i || {};
            var c = t.oldValues[n.bindingIndex + r];
            c instanceof Js && (c = c.wrapped);
            i[n.bindings[r].nonMinifiedName] = new $s(c, o, 0 != (2 & t.state));
        } return t.oldValues[n.bindingIndex + r] = o, i; } function An(t, e) { if (t.def.nodeFlags & e)
            for (var n = t.def.nodes, r = 0; r < n.length; r++) {
                var o = n[r], i = o.parent;
                for (!i && o.flags & e && Nn(t, r, o.flags & e), 0 == (o.childFlags & e) && (r += o.childCount); i && 1 & i.flags && r === i.index + i.childCount;)
                    i.directChildFlags & e && kn(t, i, e), i = i.parent;
            } } function kn(t, e, n) { for (var r = e.index + 1; r <= e.index + e.childCount; r++) {
            var o = t.def.nodes[r];
            o.flags & n && Nn(t, r, o.flags & n), r += o.childCount;
        } } function Nn(t, e, n) { var r = Ht(t, e).instance; r !== tu && (Oa.setCurrentNode(t, e), 1048576 & n && r.ngAfterContentInit(), 2097152 & n && r.ngAfterContentChecked(), 4194304 & n && r.ngAfterViewInit(), 8388608 & n && r.ngAfterViewChecked(), 131072 & n && r.ngOnDestroy()); } function In(t, e, n) { var r = []; for (var o in n) {
            var i = n[o];
            r.push({ propName: o, bindingType: i });
        } return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, ngContentIndex: -1, matchedQueries: {}, matchedQueryIds: 0, references: {}, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: { id: e, filterId: fe(e), bindings: r }, ngContent: null }; } function jn() { return new Fs; } function Mn(t) { for (var e = t.def.nodeMatchedQueries; t.parent && pe(t);) {
            var n = t.parentNodeDef;
            t = t.parent;
            for (var r = n.index + n.childCount, o = 0; o <= r; o++) {
                var i = t.def.nodes[o];
                67108864 & i.flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && qt(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.index) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount);
            }
        } if (134217728 & t.def.nodeFlags)
            for (var o = 0; o < t.def.nodes.length; o++) {
                var i = t.def.nodes[o];
                134217728 & i.flags && 536870912 & i.flags && qt(t, o).setDirty(), o += i.childCount;
            } } function Dn(t, e) { var n = qt(t, e.index); if (n.dirty) {
            var r, o = void 0;
            if (67108864 & e.flags) {
                var i = e.parent.parent;
                o = Ln(t, i.index, i.index + i.childCount, e.query, []), r = Ht(t, e.parent.index).instance;
            }
            else
                134217728 & e.flags && (o = Ln(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
            n.reset(o);
            for (var s = e.query.bindings, a = !1, u = 0; u < s.length; u++) {
                var c = s[u], l = void 0;
                switch (c.bindingType) {
                    case 0:
                        l = n.first;
                        break;
                    case 1: l = n, a = !0;
                }
                r[c.propName] = l;
            }
            a && n.notifyOnChanges();
        } } function Ln(t, e, n, r, o) { for (var i = e; i <= n; i++) {
            var s = t.def.nodes[i], a = s.matchedQueries[r.id];
            if (null != a && o.push(Fn(t, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                var u = Ut(t, i);
                if ((s.childMatchedQueries & r.filterId) === r.filterId && (Ln(t, i + 1, i + s.childCount, r, o), i += s.childCount), 16777216 & s.flags)
                    for (var c = u.viewContainer._embeddedViews, l = 0; l < c.length; l++) {
                        var p = c[l], f = se(p);
                        f && f === u && Ln(p, 0, p.def.nodes.length - 1, r, o);
                    }
                var h = u.template._projectedViews;
                if (h)
                    for (var l = 0; l < h.length; l++) {
                        var d = h[l];
                        Ln(d, 0, d.def.nodes.length - 1, r, o);
                    }
            }
            (s.childMatchedQueries & r.filterId) !== r.filterId && (i += s.childCount);
        } return o; } function Fn(t, e, n) { if (null != n) {
            var r = void 0;
            switch (n) {
                case 1:
                    r = Ut(t, e.index).renderElement;
                    break;
                case 0:
                    r = new Ms(Ut(t, e.index).renderElement);
                    break;
                case 2:
                    r = Ut(t, e.index).template;
                    break;
                case 3:
                    r = Ut(t, e.index).viewContainer;
                    break;
                case 4: r = Ht(t, e.index).instance;
            }
            return r;
        } } function Vn(t, e) { return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: 8, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: t, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: null, ngContent: { index: e } }; } function Un(t, e, n) { var r = ye(t, e, n); if (r) {
            _e(t, n.ngContent.index, 1, r, null, void 0);
        } } function Hn(t) { return zn(128, new Array(t + 1)); } function Bn(t) { return zn(32, new Array(t)); } function qn(t) { for (var e = Object.keys(t), n = e.length, r = new Array(n), o = 0; o < n; o++) {
            var i = e[o];
            r[t[i]] = i;
        } return zn(64, r); } function zn(t, e) { for (var n = new Array(e.length), r = 0; r < e.length; r++) {
            var o = e[r];
            n[r] = { flags: 8, name: o, ns: null, nonMinifiedName: o, securityContext: null, suffix: null };
        } return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: n, bindingFlags: Ee(n), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null }; } function Kn(t, e) { return { value: void 0 }; } function Qn(t, e, n, r, o, i, s, a, u, c, l, p) { var f = e.bindings, h = !1, d = f.length; if (d > 0 && ee(t, e, 0, n) && (h = !0), d > 1 && ee(t, e, 1, r) && (h = !0), d > 2 && ee(t, e, 2, o) && (h = !0), d > 3 && ee(t, e, 3, i) && (h = !0), d > 4 && ee(t, e, 4, s) && (h = !0), d > 5 && ee(t, e, 5, a) && (h = !0), d > 6 && ee(t, e, 6, u) && (h = !0), d > 7 && ee(t, e, 7, c) && (h = !0), d > 8 && ee(t, e, 8, l) && (h = !0), d > 9 && ee(t, e, 9, p) && (h = !0), h) {
            var y = Bt(t, e.index), m = void 0;
            switch (201347067 & e.flags) {
                case 32:
                    m = new Array(f.length), d > 0 && (m[0] = n), d > 1 && (m[1] = r), d > 2 && (m[2] = o), d > 3 && (m[3] = i), d > 4 && (m[4] = s), d > 5 && (m[5] = a), d > 6 && (m[6] = u), d > 7 && (m[7] = c), d > 8 && (m[8] = l), d > 9 && (m[9] = p);
                    break;
                case 64:
                    m = {}, d > 0 && (m[f[0].name] = n), d > 1 && (m[f[1].name] = r), d > 2 && (m[f[2].name] = o), d > 3 && (m[f[3].name] = i), d > 4 && (m[f[4].name] = s), d > 5 && (m[f[5].name] = a), d > 6 && (m[f[6].name] = u), d > 7 && (m[f[7].name] = c), d > 8 && (m[f[8].name] = l), d > 9 && (m[f[9].name] = p);
                    break;
                case 128:
                    var v = n;
                    switch (d) {
                        case 1:
                            m = v.transform(n);
                            break;
                        case 2:
                            m = v.transform(r);
                            break;
                        case 3:
                            m = v.transform(r, o);
                            break;
                        case 4:
                            m = v.transform(r, o, i);
                            break;
                        case 5:
                            m = v.transform(r, o, i, s);
                            break;
                        case 6:
                            m = v.transform(r, o, i, s, a);
                            break;
                        case 7:
                            m = v.transform(r, o, i, s, a, u);
                            break;
                        case 8:
                            m = v.transform(r, o, i, s, a, u, c);
                            break;
                        case 9:
                            m = v.transform(r, o, i, s, a, u, c, l);
                            break;
                        case 10: m = v.transform(r, o, i, s, a, u, c, l, p);
                    }
            }
            y.value = m;
        } return h; } function Wn(t, e, n) { for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
            ee(t, e, i, n[i]) && (o = !0); if (o) {
            var s = Bt(t, e.index), a = void 0;
            switch (201347067 & e.flags) {
                case 32:
                    a = n;
                    break;
                case 64:
                    a = {};
                    for (var i = 0; i < n.length; i++)
                        a[r[i].name] = n[i];
                    break;
                case 128:
                    var u = n[0], c = n.slice(1);
                    a = u.transform.apply(u, c);
            }
            s.value = a;
        } return o; } function Gn(t, e) { for (var n = new Array(e.length - 1), r = 1; r < e.length; r++)
            n[r - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: e[r] }; return { index: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: t, childCount: 0, bindings: n, bindingFlags: Ee(n), outputs: [], element: null, provider: null, text: { prefix: e[0] }, query: null, ngContent: null }; } function Zn(t, e, n) { var r, o = t.renderer; r = o.createText(n.text.prefix); var i = ye(t, e, n); return i && o.appendChild(i, r), { renderText: r }; } function Yn(t, e, n, r, o, i, s, a, u, c, l, p) { var f = !1, h = e.bindings, d = h.length; if (d > 0 && ee(t, e, 0, n) && (f = !0), d > 1 && ee(t, e, 1, r) && (f = !0), d > 2 && ee(t, e, 2, o) && (f = !0), d > 3 && ee(t, e, 3, i) && (f = !0), d > 4 && ee(t, e, 4, s) && (f = !0), d > 5 && ee(t, e, 5, a) && (f = !0), d > 6 && ee(t, e, 6, u) && (f = !0), d > 7 && ee(t, e, 7, c) && (f = !0), d > 8 && ee(t, e, 8, l) && (f = !0), d > 9 && ee(t, e, 9, p) && (f = !0), f) {
            var y = e.text.prefix;
            d > 0 && (y += Xn(n, h[0])), d > 1 && (y += Xn(r, h[1])), d > 2 && (y += Xn(o, h[2])), d > 3 && (y += Xn(i, h[3])), d > 4 && (y += Xn(s, h[4])), d > 5 && (y += Xn(a, h[5])), d > 6 && (y += Xn(u, h[6])), d > 7 && (y += Xn(c, h[7])), d > 8 && (y += Xn(l, h[8])), d > 9 && (y += Xn(p, h[9]));
            var m = Vt(t, e.index).renderText;
            t.renderer.setValue(m, y);
        } return f; } function Jn(t, e, n) { for (var r = e.bindings, o = !1, i = 0; i < n.length; i++)
            ee(t, e, i, n[i]) && (o = !0); if (o) {
            for (var s = "", i = 0; i < n.length; i++)
                s += Xn(n[i], r[i]);
            s = e.text.prefix + s;
            var a = Vt(t, e.index).renderText;
            t.renderer.setValue(a, s);
        } return o; } function Xn(t, e) { return (null != t ? t.toString() : "") + e.suffix; } function $n(t, e, n, r) { for (var o = 0, i = 0, s = 0, a = 0, u = 0, c = null, l = !1, p = !1, f = null, h = 0; h < e.length; h++) {
            for (; c && h > c.index + c.childCount;) {
                var d = c.parent;
                d && (d.childFlags |= c.childFlags, d.childMatchedQueries |= c.childMatchedQueries), c = d;
            }
            var y = e[h];
            y.index = h, y.parent = c, y.bindingIndex = o, y.outputIndex = i;
            var m = void 0;
            if (m = c && 1 & c.flags && !c.element.name ? c.renderParent : c, y.renderParent = m, y.element) {
                var v = y.element;
                v.publicProviders = c ? c.element.publicProviders : Object.create(null), v.allProviders = v.publicProviders, l = !1, p = !1;
            }
            if (tr(c, y, e.length), s |= y.flags, u |= y.matchedQueryIds, y.element && y.element.template && (u |= y.element.template.nodeMatchedQueries), c ? (c.childFlags |= y.flags, c.directChildFlags |= y.flags, c.childMatchedQueries |= y.matchedQueryIds, y.element && y.element.template && (c.childMatchedQueries |= y.element.template.nodeMatchedQueries)) : a |= y.flags, o += y.bindings.length, i += y.outputs.length, !m && 3 & y.flags && (f = y), 20224 & y.flags) {
                l || (l = !0, c.element.publicProviders = Object.create(c.element.publicProviders), c.element.allProviders = c.element.publicProviders);
                var g = 0 != (8192 & y.flags), b = 0 != (32768 & y.flags);
                !g || b ? c.element.publicProviders[Yt(y.provider.token)] = y : (p || (p = !0, c.element.allProviders = Object.create(c.element.publicProviders)), c.element.allProviders[Yt(y.provider.token)] = y), b && (c.element.componentProvider = y);
            }
            y.childCount && (c = y);
        } for (; c;) {
            var d = c.parent;
            d && (d.childFlags |= c.childFlags, d.childMatchedQueries |= c.childMatchedQueries), c = d;
        } var _ = function (t, n, r, o) { return e[n].element.handleEvent(t, r, o); }; return { factory: null, nodeFlags: s, rootNodeFlags: a, nodeMatchedQueries: u, flags: t, nodes: e, updateDirectives: n || Ta, updateRenderer: r || Ta, handleEvent: _ || Ta, bindingCount: o, outputCount: i, lastRenderRootNode: f }; } function tr(t, e, n) { var r = e.element && e.element.template; if (r) {
            if (!r.lastRenderRootNode)
                throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
            if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
                throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.index + "!");
        } if (20224 & e.flags) {
            if (0 == (1 & (t ? t.flags : 0)))
                throw new Error("Illegal State: Provider/Directive nodes need to be children of elements or anchors, at index " + e.index + "!");
        } if (e.query) {
            if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
                throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.index + "!");
            if (134217728 & e.flags && t)
                throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.index + "!");
        } if (e.childCount) {
            var o = t ? t.index + t.childCount : n - 1;
            if (e.index <= o && e.index + e.childCount > o)
                throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.index + "!");
        } } function er(t, e, n, r) { var o = or(t.root, t.renderer, t, e, n); return ir(o, t.component, r), sr(o), o; } function nr(t, e, n) { var r = or(t, t.renderer, null, null, e); return ir(r, n, n), sr(r), r; } function rr(t, e, n, r) { var o, i = e.element.componentRendererType; return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, or(t.root, o, t, e.element.componentProvider, n); } function or(t, e, n, r, o) { var i = new Array(o.nodes.length), s = o.outputCount ? new Array(o.outputCount) : null; return { def: o, parent: n, viewContainerParent: null, parentNodeDef: r, context: null, component: null, nodes: i, state: 13, root: t, renderer: e, oldValues: new Array(o.bindingCount), disposables: s }; } function ir(t, e, n) { t.component = e, t.context = n; } function sr(t) { var e; if (le(t)) {
            var n = t.parentNodeDef;
            e = Ut(t.parent, n.parent.index).renderElement;
        } for (var r = t.def, o = t.nodes, i = 0; i < r.nodes.length; i++) {
            var s = r.nodes[i];
            Oa.setCurrentNode(t, i);
            var a = void 0;
            switch (201347067 & s.flags) {
                case 1:
                    var u = Ae(t, e, s), c = void 0;
                    if (33554432 & s.flags) {
                        var l = me(s.element.componentView);
                        c = Oa.createComponentView(t, s, l, u);
                    }
                    ke(t, c, s, u), a = { renderElement: u, componentView: c, viewContainer: null, template: s.element.template ? cn(t, s) : void 0 }, 16777216 & s.flags && (a.viewContainer = an(t, s, a));
                    break;
                case 2:
                    a = Zn(t, e, s);
                    break;
                case 512:
                case 1024:
                case 2048:
                case 256:
                    var p = gn(t, s);
                    a = { instance: p };
                    break;
                case 16:
                    var p = bn(t, s);
                    a = { instance: p };
                    break;
                case 16384:
                    var p = _n(t, s);
                    if (a = { instance: p }, 32768 & s.flags) {
                        ir(Ut(t, s.parent.index).componentView, p, p);
                    }
                    break;
                case 32:
                case 64:
                case 128:
                    a = Kn(t, s);
                    break;
                case 67108864:
                case 134217728:
                    a = jn();
                    break;
                case 8: Un(t, e, s), a = void 0;
            }
            o[i] = a;
        } br(t, nu.CreateViewNodes), Sr(t, 201326592, 268435456, 0); } function ar(t) { lr(t), Oa.updateDirectives(t, 1), _r(t, nu.CheckNoChanges), Oa.updateRenderer(t, 1), br(t, nu.CheckNoChanges), t.state &= -97; } function ur(t) { 1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, lr(t), Oa.updateDirectives(t, 0), _r(t, nu.CheckAndUpdate), Sr(t, 67108864, 536870912, 0), An(t, 2097152 | (2 & t.state ? 1048576 : 0)), Oa.updateRenderer(t, 0), br(t, nu.CheckAndUpdate), Sr(t, 134217728, 536870912, 0), An(t, 8388608 | (2 & t.state ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97; } function cr(t, e, n, r, o, i, s, a, u, c, l, p, f) { return 0 === n ? pr(t, e, r, o, i, s, a, u, c, l, p, f) : fr(t, e, r); } function lr(t) { var e = t.def; if (4 & e.nodeFlags)
            for (var n = 0; n < e.nodes.length; n++) {
                var r = e.nodes[n];
                if (4 & r.flags) {
                    var o = Ut(t, n).template._projectedViews;
                    if (o)
                        for (var i = 0; i < o.length; i++) {
                            var s = o[i];
                            s.state |= 32, oe(s, t);
                        }
                }
                else
                    0 == (4 & r.childFlags) && (n += r.childCount);
            } } function pr(t, e, n, r, o, i, s, a, u, c, l, p) { var f = !1; switch (201347067 & e.flags) {
            case 1:
                f = Ie(t, e, n, r, o, i, s, a, u, c, l, p);
                break;
            case 2:
                f = Yn(t, e, n, r, o, i, s, a, u, c, l, p);
                break;
            case 16384:
                f = Cn(t, e, n, r, o, i, s, a, u, c, l, p);
                break;
            case 32:
            case 64:
            case 128: f = Qn(t, e, n, r, o, i, s, a, u, c, l, p);
        } return f; } function fr(t, e, n) { var r = !1; switch (201347067 & e.flags) {
            case 1:
                r = je(t, e, n);
                break;
            case 2:
                r = Jn(t, e, n);
                break;
            case 16384:
                r = Sn(t, e, n);
                break;
            case 32:
            case 64:
            case 128: r = Wn(t, e, n);
        } if (r)
            for (var o = e.bindings.length, i = e.bindingIndex, s = t.oldValues, a = 0; a < o; a++)
                s[i + a] = n[a]; return r; } function hr(t, e, n, r, o, i, s, a, u, c, l, p, f) { return 0 === n ? dr(t, e, r, o, i, s, a, u, c, l, p, f) : yr(t, e, r), !1; } function dr(t, e, n, r, o, i, s, a, u, c, l, p) { var f = e.bindings.length; f > 0 && ne(t, e, 0, n), f > 1 && ne(t, e, 1, r), f > 2 && ne(t, e, 2, o), f > 3 && ne(t, e, 3, i), f > 4 && ne(t, e, 4, s), f > 5 && ne(t, e, 5, a), f > 6 && ne(t, e, 6, u), f > 7 && ne(t, e, 7, c), f > 8 && ne(t, e, 8, l), f > 9 && ne(t, e, 9, p); } function yr(t, e, n) { for (var r = 0; r < n.length; r++)
            ne(t, e, r, n[r]); } function mr(t, e) { if (qt(t, e.index).dirty)
            throw zt(Oa.createDebugContext(t, e.index), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state)); } function vr(t) { if (!(128 & t.state)) {
            if (_r(t, nu.Destroy), br(t, nu.Destroy), An(t, 131072), t.disposables)
                for (var e = 0; e < t.disposables.length; e++)
                    t.disposables[e]();
            Xe(t), t.renderer.destroyNode && gr(t), le(t) && t.renderer.destroy(), t.state |= 128;
        } } function gr(t) { for (var e = t.def.nodes.length, n = 0; n < e; n++) {
            var r = t.def.nodes[n];
            1 & r.flags ? t.renderer.destroyNode(Ut(t, n).renderElement) : 2 & r.flags && t.renderer.destroyNode(Vt(t, n).renderText);
        } } function br(t, e) { var n = t.def; if (33554432 & n.nodeFlags)
            for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                33554432 & o.flags ? wr(Ut(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount);
            } } function _r(t, e) { var n = t.def; if (16777216 & n.nodeFlags)
            for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                if (16777216 & o.flags)
                    for (var i = Ut(t, r).viewContainer._embeddedViews, s = 0; s < i.length; s++)
                        wr(i[s], e);
                else
                    0 == (16777216 & o.childFlags) && (r += o.childCount);
            } } function wr(t, e) { var n = t.state; switch (e) {
            case nu.CheckNoChanges:
                0 == (128 & n) && (12 == (12 & n) ? ar(t) : 64 & n && Cr(t, nu.CheckNoChangesProjectedViews));
                break;
            case nu.CheckNoChangesProjectedViews:
                0 == (128 & n) && (32 & n ? ar(t) : 64 & n && Cr(t, e));
                break;
            case nu.CheckAndUpdate:
                0 == (128 & n) && (12 == (12 & n) ? ur(t) : 64 & n && Cr(t, nu.CheckAndUpdateProjectedViews));
                break;
            case nu.CheckAndUpdateProjectedViews:
                0 == (128 & n) && (32 & n ? ur(t) : 64 & n && Cr(t, e));
                break;
            case nu.Destroy:
                vr(t);
                break;
            case nu.CreateViewNodes: sr(t);
        } } function Cr(t, e) { _r(t, e), br(t, e); } function Sr(t, e, n, r) { if (t.def.nodeFlags & e && t.def.nodeFlags & n)
            for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                var s = t.def.nodes[i];
                if (s.flags & e && s.flags & n)
                    switch (Oa.setCurrentNode(t, s.index), r) {
                        case 0:
                            Dn(t, s);
                            break;
                        case 1: mr(t, s);
                    }
                s.childFlags & e && s.childFlags & n || (i += s.childCount);
            } } function Er() { if (!ru) {
            ru = !0;
            var t = lt() ? Tr() : Or();
            Oa.setCurrentNode = t.setCurrentNode, Oa.createRootView = t.createRootView, Oa.createEmbeddedView = t.createEmbeddedView, Oa.createComponentView = t.createComponentView, Oa.createNgModuleRef = t.createNgModuleRef, Oa.overrideProvider = t.overrideProvider, Oa.clearProviderOverrides = t.clearProviderOverrides, Oa.checkAndUpdateView = t.checkAndUpdateView, Oa.checkNoChangesView = t.checkNoChangesView, Oa.destroyView = t.destroyView, Oa.resolveDep = Pn, Oa.createDebugContext = t.createDebugContext, Oa.handleEvent = t.handleEvent, Oa.updateDirectives = t.updateDirectives, Oa.updateRenderer = t.updateRenderer, Oa.dirtyParentQueries = Mn;
        } } function Or() { return { setCurrentNode: function () { }, createRootView: Pr, createEmbeddedView: er, createComponentView: rr, createNgModuleRef: hn, overrideProvider: Ta, clearProviderOverrides: Ta, checkAndUpdateView: ur, checkNoChangesView: ar, destroyView: vr, createDebugContext: function (t, e) { return new lu(t, e); }, handleEvent: function (t, e, n, r) { return t.def.handleEvent(t, e, n, r); }, updateDirectives: function (t, e) { return t.def.updateDirectives(0 === e ? Lr : Fr, t); }, updateRenderer: function (t, e) { return t.def.updateRenderer(0 === e ? Lr : Fr, t); } }; } function Tr() { return { setCurrentNode: Br, createRootView: xr, createEmbeddedView: Ar, createComponentView: kr, createNgModuleRef: Nr, overrideProvider: Ir, clearProviderOverrides: jr, checkAndUpdateView: Vr, checkNoChangesView: Ur, destroyView: Hr, createDebugContext: function (t, e) { return new lu(t, e); }, handleEvent: qr, updateDirectives: zr, updateRenderer: Kr }; } function Pr(t, e, n, r, o, i) { return nr(Rr(t, o, o.injector.get(Ns), e, n), r, i); } function xr(t, e, n, r, o, i) { var s = o.injector.get(Ns), a = Rr(t, o, new pu(s), e, n), u = Mr(r); return no(iu.create, nr, null, [a, u, i]); } function Rr(t, e, n, r, o) { var i = e.injector.get(Sa), s = e.injector.get(wi); return { ngModule: e, injector: t, projectableNodes: r, selectorOrNode: o, sanitizer: i, rendererFactory: n, renderer: n.createRenderer(null, null), errorHandler: s }; } function Ar(t, e, n, r) { var o = Mr(n); return no(iu.create, er, null, [t, e, o, r]); } function kr(t, e, n, r) { var o = Mr(n); return no(iu.create, rr, null, [t, e, o, r]); } function Nr(t, e, n, r) { return hn(t, e, n, Dr(r)); } function Ir(t) { ou.set(t.token, t); } function jr() { ou.clear(); } function Mr(t) { if (0 === ou.size)
            return t; var e = function (t) { for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            1 & o.flags && (n = o), n && 3840 & o.flags && ou.has(o.provider.token) && (e.push(n.index), n = null);
        } return e; }(t); if (0 === e.length)
            return t; t = t.factory(function () { return Ta; }); for (var n = 0; n < e.length; n++)
            !function (t, e) { for (var n = e + 1; n < t.nodes.length; n++) {
                var r = t.nodes[n];
                if (1 & r.flags)
                    return;
                if (3840 & r.flags) {
                    r.flags |= 4096;
                    var o = r.provider, i = ou.get(o.token);
                    i && (r.flags = -3841 & r.flags | i.flags, o.deps = de(i.deps), o.value = i.value);
                }
            } }(t, e[n]); return t; } function Dr(t) { return 0 !== ou.size && function (t) { return t.providers.some(function (t) { return !!(3840 & t.flags) && ou.has(t.token); }); }(t) ? (t = t.factory(function () { return Ta; }), function (t) { for (var e = 0; e < t.providers.length; e++) {
            var n = t.providers[e];
            n.flags |= 4096;
            var r = ou.get(n.token);
            r && (n.flags = -3841 & n.flags | r.flags, n.deps = de(r.deps), n.value = r.value);
        } }(t), t) : t; } function Lr(t, e, n, r, o, i, s, a, u, c, l, p, f) { var h = t.def.nodes[e]; return cr(t, h, n, r, o, i, s, a, u, c, l, p, f), 224 & h.flags ? Bt(t, e).value : void 0; } function Fr(t, e, n, r, o, i, s, a, u, c, l, p, f) { var h = t.def.nodes[e]; return hr(t, h, n, r, o, i, s, a, u, c, l, p, f), 224 & h.flags ? Bt(t, e).value : void 0; } function Vr(t) { return no(iu.detectChanges, ur, null, [t]); } function Ur(t) { return no(iu.checkNoChanges, ar, null, [t]); } function Hr(t) { return no(iu.destroy, vr, null, [t]); } function Br(t, e) { au = t, uu = e; } function qr(t, e, n, r) { return Br(t, e), no(iu.handleEvent, t.def.handleEvent, null, [t, e, n, r]); } function zr(t, e) { function n(t, n, r) { for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i]; var s = t.def.nodes[n]; return 0 === e ? Qr(t, s, r, o) : Wr(t, s, r, o), 16384 & s.flags && Br(t, Jr(t, n)), 224 & s.flags ? Bt(t, s.index).value : void 0; } if (128 & t.state)
            throw Zt(iu[su]); return Br(t, Jr(t, 0)), t.def.updateDirectives(n, t); } function Kr(t, e) { function n(t, n, r) { for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i]; var s = t.def.nodes[n]; return 0 === e ? Qr(t, s, r, o) : Wr(t, s, r, o), 3 & s.flags && Br(t, Xr(t, n)), 224 & s.flags ? Bt(t, s.index).value : void 0; } if (128 & t.state)
            throw Zt(iu[su]); return Br(t, Xr(t, 0)), t.def.updateRenderer(n, t); } function Qr(t, e, n, r) { if (cr.apply(void 0, [t, e, n].concat(r))) {
            var o = 1 === n ? r[0] : r;
            if (16384 & e.flags) {
                for (var i = {}, s = 0; s < e.bindings.length; s++) {
                    var a = e.bindings[s], u = o[s];
                    8 & a.flags && (i[Gr(a.nonMinifiedName)] = Yr(u));
                }
                var c = e.parent, l = Ut(t, c.index).renderElement;
                if (c.element.name)
                    for (var p in i) {
                        var u = i[p];
                        null != u ? t.renderer.setAttribute(l, p, u) : t.renderer.removeAttribute(l, p);
                    }
                else
                    t.renderer.setValue(l, "bindings=" + JSON.stringify(i, null, 2));
            }
        } } function Wr(t, e, n, r) { hr.apply(void 0, [t, e, n].concat(r)); } function Gr(t) { return "ng-reflect-" + (t = Zr(t.replace(/[$@]/g, "_"))); } function Zr(t) { return t.replace(cu, function () { for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]; return "-" + t[1].toLowerCase(); }); } function Yr(t) { try {
            return null != t ? t.toString().slice(0, 30) : t;
        }
        catch (t) {
            return "[ERROR] Exception while trying to serialize the value";
        } } function Jr(t, e) { for (var n = e; n < t.def.nodes.length; n++) {
            var r = t.def.nodes[n];
            if (16384 & r.flags && r.bindings && r.bindings.length)
                return n;
        } return null; } function Xr(t, e) { for (var n = e; n < t.def.nodes.length; n++) {
            var r = t.def.nodes[n];
            if (3 & r.flags && r.bindings && r.bindings.length)
                return n;
        } return null; } function $r(t, e) { for (var n = -1, r = 0; r <= e; r++) {
            3 & t.nodes[r].flags && n++;
        } return n; } function to(t) { for (; t && !le(t);)
            t = t.parent; return t.parent ? Ut(t.parent, ae(t).index) : null; } function eo(t, e, n) { for (var r in e.references)
            n[r] = Fn(t, e, e.references[r]); } function no(t, e, n, r) { var o = su, i = au, s = uu; try {
            su = t;
            var a = e.apply(n, r);
            return au = i, uu = s, su = o, a;
        }
        catch (t) {
            if (Gt(t) || !au)
                throw t;
            throw Kt(t, ro());
        } } function ro() { return au ? new lu(au, uu) : null; } function oo(t) { return Er(), Oa.overrideProvider(t); } function io() { return Er(), Oa.clearProviderOverrides(); } function so(t, e, n) { return new hu(t, e, n); } function ao(t, e) { return { type: 7, name: t, definitions: e, options: {} }; } function uo(t, e) { return void 0 === e && (e = null), { type: 4, styles: e, timings: t }; } function co(t, e) { return void 0 === e && (e = null), { type: 3, steps: t, options: e }; } function lo(t, e) { return void 0 === e && (e = null), { type: 2, steps: t, options: e }; } function po(t) { return { type: 6, styles: t, offset: null }; } function fo(t, e, n) { return { type: 0, name: t, styles: e, options: n }; } function ho(t) { return { type: 5, steps: t }; } function yo(t, e, n) { return void 0 === n && (n = null), { type: 1, expr: t, animation: e, options: n }; } function mo(t, e) { return ao(t, e); } function vo(t, e) { return uo(t, e); } function go(t) { return co(t); } function bo(t) { return lo(t); } function _o(t) { return po(t); } function wo(t, e) { return fo(t, e); } function Co(t) { return ho(t); } function So(t, e) { return yo(t, e); } Object.defineProperty(e, "__esModule", { value: !0 }); var Eo = n("6Xbx"), Oo = n("bKpL"), To = (n.n(Oo), n("LEug")), Po = (n.n(To), n("CE6k")), xo = (n.n(Po), n("rlar")); n.n(xo); n.d(e, "Class", function () { return c; }), n.d(e, "createPlatform", function () { return pt; }), n.d(e, "assertPlatform", function () { return ht; }), n.d(e, "destroyPlatform", function () { return dt; }), n.d(e, "getPlatform", function () { return yt; }), n.d(e, "PlatformRef", function () { return Es; }), n.d(e, "ApplicationRef", function () { return Ts; }), n.d(e, "enableProdMode", function () { return ct; }), n.d(e, "isDevMode", function () { return lt; }), n.d(e, "createPlatformFactory", function () { return ft; }), n.d(e, "NgProbeToken", function () { return Ss; }), n.d(e, "APP_ID", function () { return Ui; }), n.d(e, "PACKAGE_ROOT_URL", function () { return Ki; }), n.d(e, "PLATFORM_INITIALIZER", function () { return Bi; }), n.d(e, "PLATFORM_ID", function () { return qi; }), n.d(e, "APP_BOOTSTRAP_LISTENER", function () { return zi; }), n.d(e, "APP_INITIALIZER", function () { return Fi; }), n.d(e, "ApplicationInitStatus", function () { return Vi; }), n.d(e, "DebugElement", function () { return Zs; }), n.d(e, "DebugNode", function () { return Gs; }), n.d(e, "asNativeElements", function () { return Ct; }), n.d(e, "getDebugNode", function () { return Ot; }), n.d(e, "Testability", function () { return ys; }), n.d(e, "TestabilityRegistry", function () { return ms; }), n.d(e, "setTestabilityGetter", function () { return ut; }), n.d(e, "TRANSLATIONS", function () { return ga; }), n.d(e, "TRANSLATIONS_FORMAT", function () { return ba; }), n.d(e, "LOCALE_ID", function () { return va; }), n.d(e, "MissingTranslationStrategy", function () { return _a; }), n.d(e, "ApplicationModule", function () { return wa; }), n.d(e, "wtfCreateScope", function () { return cs; }), n.d(e, "wtfLeave", function () { return ls; }), n.d(e, "wtfStartTimeRange", function () { return ps; }), n.d(e, "wtfEndTimeRange", function () { return fs; }), n.d(e, "Type", function () { return Oi; }), n.d(e, "EventEmitter", function () { return hs; }), n.d(e, "ErrorHandler", function () { return wi; }), n.d(e, "Sanitizer", function () { return Sa; }), n.d(e, "SecurityContext", function () { return Ca; }), n.d(e, "ANALYZE_FOR_ENTRY_COMPONENTS", function () { return Fo; }), n.d(e, "Attribute", function () { return Vo; }), n.d(e, "ContentChild", function () { return Bo; }), n.d(e, "ContentChildren", function () { return Ho; }), n.d(e, "Query", function () { return Uo; }), n.d(e, "ViewChild", function () { return zo; }), n.d(e, "ViewChildren", function () { return qo; }), n.d(e, "Component", function () { return Go; }), n.d(e, "Directive", function () { return Wo; }), n.d(e, "HostBinding", function () { return Xo; }), n.d(e, "HostListener", function () { return $o; }), n.d(e, "Input", function () { return Yo; }), n.d(e, "Output", function () { return Jo; }), n.d(e, "Pipe", function () { return Zo; }), n.d(e, "CUSTOM_ELEMENTS_SCHEMA", function () { return ti; }), n.d(e, "NO_ERRORS_SCHEMA", function () { return ei; }), n.d(e, "NgModule", function () { return ni; }), n.d(e, "ViewEncapsulation", function () { return ri; }), n.d(e, "Version", function () { return ii; }), n.d(e, "VERSION", function () { return si; }), n.d(e, "forwardRef", function () { return y; }), n.d(e, "resolveForwardRef", function () { return m; }), n.d(e, "Injector", function () { return mi; }), n.d(e, "ReflectiveInjector", function () { return Mi; }), n.d(e, "ResolvedReflectiveFactory", function () { return Ii; }), n.d(e, "ReflectiveKey", function () { return Ci; }), n.d(e, "InjectionToken", function () { return Ao; }), n.d(e, "OpaqueToken", function () { return Ro; }), n.d(e, "Inject", function () { return ai; }), n.d(e, "Optional", function () { return ui; }), n.d(e, "Injectable", function () { return ci; }), n.d(e, "Self", function () { return li; }), n.d(e, "SkipSelf", function () { return pi; }), n.d(e, "Host", function () { return fi; }), n.d(e, "NgZone", function () { return ds; }), n.d(e, "RenderComponentType", function () { return xs; }), n.d(e, "Renderer", function () { return As; }), n.d(e, "Renderer2", function () { return js; }), n.d(e, "RendererFactory2", function () { return Ns; }), n.d(e, "RendererStyleFlags2", function () { return Is; }), n.d(e, "RootRenderer", function () { return ks; }), n.d(e, "COMPILER_OPTIONS", function () { return Zi; }), n.d(e, "Compiler", function () { return Gi; }), n.d(e, "CompilerFactory", function () { return Yi; }), n.d(e, "ModuleWithComponentFactories", function () { return Wi; }), n.d(e, "ComponentFactory", function () { return Xi; }), n.d(e, "ComponentRef", function () { return Ji; }), n.d(e, "ComponentFactoryResolver", function () { return es; }), n.d(e, "ElementRef", function () { return Ms; }), n.d(e, "NgModuleFactory", function () { return as; }), n.d(e, "NgModuleRef", function () { return ss; }), n.d(e, "NgModuleFactoryLoader", function () { return Ds; }), n.d(e, "getModuleFactory", function () { return bt; }), n.d(e, "QueryList", function () { return Fs; }), n.d(e, "SystemJsNgModuleLoader", function () { return Hs; }), n.d(e, "SystemJsNgModuleLoaderConfig", function () { return Vs; }), n.d(e, "TemplateRef", function () { return Bs; }), n.d(e, "ViewContainerRef", function () { return qs; }), n.d(e, "EmbeddedViewRef", function () { return Qs; }), n.d(e, "ViewRef", function () { return Ks; }), n.d(e, "ChangeDetectionStrategy", function () { return Ko; }), n.d(e, "ChangeDetectorRef", function () { return zs; }), n.d(e, "DefaultIterableDiffer", function () { return na; }), n.d(e, "IterableDiffers", function () { return ca; }), n.d(e, "KeyValueDiffers", function () { return la; }), n.d(e, "SimpleChange", function () { return $s; }), n.d(e, "WrappedValue", function () { return Js; }), n.d(e, "platformCore", function () { return ma; }), n.d(e, "ɵALLOW_MULTIPLE_PLATFORMS", function () { return Cs; }), n.d(e, "ɵAPP_ID_RANDOM_PROVIDER", function () { return Hi; }), n.d(e, "ɵValueUnwrapper", function () { return Xs; }), n.d(e, "ɵdevModeEqual", function () { return xt; }), n.d(e, "ɵisListLikeIterable", function () { return Rt; }), n.d(e, "ɵChangeDetectorStatus", function () { return Qo; }), n.d(e, "ɵisDefaultChangeDetectionStrategy", function () { return d; }), n.d(e, "ɵConsole", function () { return Qi; }), n.d(e, "ɵERROR_COMPONENT_TYPE", function () { return vi; }), n.d(e, "ɵComponentFactory", function () { return Xi; }), n.d(e, "ɵCodegenComponentFactoryResolver", function () { return os; }), n.d(e, "ɵViewMetadata", function () { return oi; }), n.d(e, "ɵReflectionCapabilities", function () { return Pi; }), n.d(e, "ɵRenderDebugInfo", function () { return Rs; }), n.d(e, "ɵglobal", function () { return jo; }), n.d(e, "ɵlooseIdentical", function () { return i; }), n.d(e, "ɵstringify", function () { return s; }), n.d(e, "ɵmakeDecorator", function () { return l; }), n.d(e, "ɵisObservable", function () { return W; }), n.d(e, "ɵisPromise", function () { return Q; }), n.d(e, "ɵclearProviderOverrides", function () { return io; }), n.d(e, "ɵoverrideProvider", function () { return oo; }), n.d(e, "ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR", function () { return eu; }), n.d(e, "ɵregisterModuleFactory", function () { return gt; }), n.d(e, "ɵEMPTY_ARRAY", function () { return Ia; }), n.d(e, "ɵEMPTY_MAP", function () { return ja; }), n.d(e, "ɵand", function () { return xe; }), n.d(e, "ɵccf", function () { return on; }), n.d(e, "ɵcmf", function () { return so; }), n.d(e, "ɵcrt", function () { return Xt; }), n.d(e, "ɵdid", function () { return dn; }), n.d(e, "ɵeld", function () { return Re; }), n.d(e, "ɵelementEventFullName", function () { return ce; }), n.d(e, "ɵgetComponentViewDefinitionFactory", function () { return sn; }), n.d(e, "ɵinlineInterpolate", function () { return Te; }), n.d(e, "ɵinterpolate", function () { return Oe; }), n.d(e, "ɵmod", function () { return He; }), n.d(e, "ɵmpd", function () { return Ue; }), n.d(e, "ɵncd", function () { return Vn; }), n.d(e, "ɵnov", function () { return pn; }), n.d(e, "ɵpid", function () { return yn; }), n.d(e, "ɵprd", function () { return mn; }), n.d(e, "ɵpad", function () { return Bn; }), n.d(e, "ɵpod", function () { return qn; }), n.d(e, "ɵppd", function () { return Hn; }), n.d(e, "ɵqud", function () { return In; }), n.d(e, "ɵted", function () { return Gn; }), n.d(e, "ɵunv", function () { return Jt; }), n.d(e, "ɵvid", function () { return $n; }), n.d(e, "AUTO_STYLE", function () { return du; }), n.d(e, "trigger", function () { return mo; }), n.d(e, "animate", function () { return vo; }), n.d(e, "group", function () { return go; }), n.d(e, "sequence", function () { return bo; }), n.d(e, "style", function () { return _o; }), n.d(e, "state", function () { return wo; }), n.d(e, "keyframes", function () { return Co; }), n.d(e, "transition", function () { return So; }), n.d(e, "ɵx", function () { return uo; }), n.d(e, "ɵy", function () { return co; }), n.d(e, "ɵbc", function () { return ho; }), n.d(e, "ɵz", function () { return lo; }), n.d(e, "ɵbb", function () { return fo; }), n.d(e, "ɵba", function () { return po; }), n.d(e, "ɵbd", function () { return yo; }), n.d(e, "ɵw", function () { return ao; }), n.d(e, "ɵk", function () { return Dt; }), n.d(e, "ɵl", function () { return Lt; }), n.d(e, "ɵm", function () { return Ft; }), n.d(e, "ɵe", function () { return Ps; }), n.d(e, "ɵf", function () { return G; }), n.d(e, "ɵg", function () { return ha; }), n.d(e, "ɵh", function () { return da; }), n.d(e, "ɵi", function () { return ta; }), n.d(e, "ɵj", function () { return sa; }), n.d(e, "ɵb", function () { return Di; }), n.d(e, "ɵc", function () { return Ai; }), n.d(e, "ɵd", function () { return F; }), n.d(e, "ɵn", function () { return us; }), n.d(e, "ɵp", function () { return $; }), n.d(e, "ɵo", function () { return X; }), n.d(e, "ɵs", function () { return nt; }), n.d(e, "ɵq", function () { return tt; }), n.d(e, "ɵr", function () { return et; }), n.d(e, "ɵa", function () { return f; }), n.d(e, "ɵt", function () { return vn; }), n.d(e, "ɵu", function () { return Ea; }); var Ro = function () { function t(t) { this._desc = t; } return t.prototype.toString = function () { return "Token " + this._desc; }, t; }(), Ao = function (t) { function e(e) { return t.call(this, e) || this; } return Eo.a(e, t), e.prototype.toString = function () { return "InjectionToken " + this._desc; }, e; }(Ro), ko = "undefined" != typeof window && window, No = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, Io = void 0 !== t && t, jo = ko || Io || No, Mo = null, Do = 0, Lo = jo.Reflect, Fo = new Ao("AnalyzeForEntryComponents"), Vo = f("Attribute", function (t) { return { attributeName: t }; }), Uo = function () { function t() { } return t; }(), Ho = h("ContentChildren", function (t, e) { return void 0 === e && (e = {}), Object.assign({ selector: t, first: !1, isViewQuery: !1, descendants: !1 }, e); }, Uo), Bo = h("ContentChild", function (t, e) { return void 0 === e && (e = {}), Object.assign({ selector: t, first: !0, isViewQuery: !1, descendants: !0 }, e); }, Uo), qo = h("ViewChildren", function (t, e) { return void 0 === e && (e = {}), Object.assign({ selector: t, first: !1, isViewQuery: !0, descendants: !0 }, e); }, Uo), zo = h("ViewChild", function (t, e) { return Object.assign({ selector: t, first: !0, isViewQuery: !0, descendants: !0 }, e); }, Uo), Ko = {}; Ko.OnPush = 0, Ko.Default = 1, Ko[Ko.OnPush] = "OnPush", Ko[Ko.Default] = "Default"; var Qo = {}; Qo.CheckOnce = 0, Qo.Checked = 1, Qo.CheckAlways = 2, Qo.Detached = 3, Qo.Errored = 4, Qo.Destroyed = 5, Qo[Qo.CheckOnce] = "CheckOnce", Qo[Qo.Checked] = "Checked", Qo[Qo.CheckAlways] = "CheckAlways", Qo[Qo.Detached] = "Detached", Qo[Qo.Errored] = "Errored", Qo[Qo.Destroyed] = "Destroyed"; var Wo = l("Directive", function (t) { return void 0 === t && (t = {}), t; }), Go = l("Component", function (t) { return void 0 === t && (t = {}), Object.assign({ changeDetection: Ko.Default }, t); }, Wo), Zo = l("Pipe", function (t) { return Object.assign({ pure: !0 }, t); }), Yo = h("Input", function (t) { return { bindingPropertyName: t }; }), Jo = h("Output", function (t) { return { bindingPropertyName: t }; }), Xo = h("HostBinding", function (t) { return { hostPropertyName: t }; }), $o = h("HostListener", function (t, e) { return { eventName: t, args: e }; }), ti = { name: "custom-elements" }, ei = { name: "no-errors-schema" }, ni = l("NgModule", function (t) { return t; }), ri = {}; ri.Emulated = 0, ri.Native = 1, ri.None = 2, ri[ri.Emulated] = "Emulated", ri[ri.Native] = "Native", ri[ri.None] = "None"; var oi = function () { function t(t) { void 0 === t && (t = {}), this.templateUrl = t.templateUrl, this.template = t.template, this.styleUrls = t.styleUrls, this.styles = t.styles, this.encapsulation = t.encapsulation, this.animations = t.animations, this.interpolation = t.interpolation; } return t; }(), ii = function () { function t(t) { this.full = t; } return Object.defineProperty(t.prototype, "major", { get: function () { return this.full.split(".")[0]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "minor", { get: function () { return this.full.split(".")[1]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "patch", { get: function () { return this.full.split(".").slice(2).join("."); }, enumerable: !0, configurable: !0 }), t; }(), si = new ii("4.3.6"), ai = f("Inject", function (t) { return { token: t }; }), ui = f("Optional"), ci = l("Injectable"), li = f("Self"), pi = f("SkipSelf"), fi = f("Host"), hi = new Object, di = hi, yi = function () { function t() { } return t.prototype.get = function (t, e) { if (void 0 === e && (e = hi), e === hi)
            throw new Error("No provider for " + s(t) + "!"); return e; }, t; }(), mi = function () { function t() { } return t.prototype.get = function (t, e) { }, t.prototype.get = function (t, e) { }, t; }(); mi.THROW_IF_NOT_FOUND = hi, mi.NULL = new yi; var vi = "ngComponentType", gi = "ngDebugContext", bi = "ngOriginalError", _i = "ngErrorLogger", wi = function () { function t(t) { this._console = console; } return t.prototype.handleError = function (t) { var e = this._findOriginalError(t), n = this._findContext(t), r = b(t); r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n); }, t.prototype._findContext = function (t) { return t ? v(t) ? v(t) : this._findContext(g(t)) : null; }, t.prototype._findOriginalError = function (t) { for (var e = g(t); e && g(e);)
            e = g(e); return e; }, t; }(), Ci = function () { function t(t, e) { if (this.token = t, this.id = e, !t)
            throw new Error("Token must be defined!"); } return Object.defineProperty(t.prototype, "displayName", { get: function () { return s(this.token); }, enumerable: !0, configurable: !0 }), t.get = function (t) { return Ei.get(m(t)); }, Object.defineProperty(t, "numberOfKeys", { get: function () { return Ei.numberOfKeys; }, enumerable: !0, configurable: !0 }), t; }(), Si = function () { function t() { this._allKeys = new Map; } return t.prototype.get = function (t) { if (t instanceof Ci)
            return t; if (this._allKeys.has(t))
            return this._allKeys.get(t); var e = new Ci(t, Ci.numberOfKeys); return this._allKeys.set(t, e), e; }, Object.defineProperty(t.prototype, "numberOfKeys", { get: function () { return this._allKeys.size; }, enumerable: !0, configurable: !0 }), t; }(), Ei = new Si, Oi = Function, Ti = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/, Pi = function () { function t(t) { this._reflect = t || jo.Reflect; } return t.prototype.isReflectionEnabled = function () { return !0; }, t.prototype.factory = function (t) { return function () { for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n]; return new (t.bind.apply(t, [void 0].concat(e))); }; }, t.prototype._zipTypesAndAnnotations = function (t, e) { var n; n = void 0 === t ? new Array(e.length) : new Array(t.length); for (var r = 0; r < n.length; r++)
            void 0 === t ? n[r] = [] : t[r] != Object ? n[r] = [t[r]] : n[r] = [], e && null != e[r] && (n[r] = n[r].concat(e[r])); return n; }, t.prototype._ownParameters = function (t, e) { if (Ti.exec(t.toString()))
            return null; if (t.parameters && t.parameters !== e.parameters)
            return t.parameters; var n = t.ctorParameters; if (n && n !== e.ctorParameters) {
            var r = "function" == typeof n ? n() : n, o = r.map(function (t) { return t && t.type; }), i = r.map(function (t) { return t && j(t.decorators); });
            return this._zipTypesAndAnnotations(o, i);
        } if (null != this._reflect && null != this._reflect.getOwnMetadata) {
            var i = this._reflect.getOwnMetadata("parameters", t), o = this._reflect.getOwnMetadata("design:paramtypes", t);
            if (o || i)
                return this._zipTypesAndAnnotations(o, i);
        } return new Array(t.length).fill(void 0); }, t.prototype.parameters = function (t) { if (!I(t))
            return []; var e = M(t), n = this._ownParameters(t, e); return n || e === Object || (n = this.parameters(e)), n || []; }, t.prototype._ownAnnotations = function (t, e) { if (t.annotations && t.annotations !== e.annotations) {
            var n = t.annotations;
            return "function" == typeof n && n.annotations && (n = n.annotations), n;
        } return t.decorators && t.decorators !== e.decorators ? j(t.decorators) : this._reflect && this._reflect.getOwnMetadata ? this._reflect.getOwnMetadata("annotations", t) : null; }, t.prototype.annotations = function (t) { if (!I(t))
            return []; var e = M(t), n = this._ownAnnotations(t, e) || []; return (e !== Object ? this.annotations(e) : []).concat(n); }, t.prototype._ownPropMetadata = function (t, e) { if (t.propMetadata && t.propMetadata !== e.propMetadata) {
            var n = t.propMetadata;
            return "function" == typeof n && n.propMetadata && (n = n.propMetadata), n;
        } if (t.propDecorators && t.propDecorators !== e.propDecorators) {
            var r = t.propDecorators, o = {};
            return Object.keys(r).forEach(function (t) { o[t] = j(r[t]); }), o;
        } return this._reflect && this._reflect.getOwnMetadata ? this._reflect.getOwnMetadata("propMetadata", t) : null; }, t.prototype.propMetadata = function (t) { if (!I(t))
            return {}; var e = M(t), n = {}; if (e !== Object) {
            var r = this.propMetadata(e);
            Object.keys(r).forEach(function (t) { n[t] = r[t]; });
        } var o = this._ownPropMetadata(t, e); return o && Object.keys(o).forEach(function (t) { var e = []; n.hasOwnProperty(t) && e.push.apply(e, n[t]), e.push.apply(e, o[t]), n[t] = e; }), n; }, t.prototype.hasLifecycleHook = function (t, e) { return t instanceof Oi && e in t.prototype; }, t.prototype.getter = function (t) { return new Function("o", "return o." + t + ";"); }, t.prototype.setter = function (t) { return new Function("o", "v", "return o." + t + " = v;"); }, t.prototype.method = function (t) { var e = "if (!o." + t + ") throw new Error('\"" + t + "\" is undefined');\n        return o." + t + ".apply(o, args);"; return new Function("o", "args", e); }, t.prototype.importUri = function (t) { return "object" == typeof t && t.filePath ? t.filePath : "./" + s(t); }, t.prototype.resourceUri = function (t) { return "./" + s(t); }, t.prototype.resolveIdentifier = function (t, e, n, r) { return r; }, t.prototype.resolveEnum = function (t, e) { return t[e]; }, t; }(), xi = function () { function t(t) { this.reflectionCapabilities = t; } return t.prototype.updateCapabilities = function (t) { this.reflectionCapabilities = t; }, t.prototype.factory = function (t) { return this.reflectionCapabilities.factory(t); }, t.prototype.parameters = function (t) { return this.reflectionCapabilities.parameters(t); }, t.prototype.annotations = function (t) { return this.reflectionCapabilities.annotations(t); }, t.prototype.propMetadata = function (t) { return this.reflectionCapabilities.propMetadata(t); }, t.prototype.hasLifecycleHook = function (t, e) { return this.reflectionCapabilities.hasLifecycleHook(t, e); }, t.prototype.getter = function (t) { return this.reflectionCapabilities.getter(t); }, t.prototype.setter = function (t) { return this.reflectionCapabilities.setter(t); }, t.prototype.method = function (t) { return this.reflectionCapabilities.method(t); }, t.prototype.importUri = function (t) { return this.reflectionCapabilities.importUri(t); }, t.prototype.resourceUri = function (t) { return this.reflectionCapabilities.resourceUri(t); }, t.prototype.resolveIdentifier = function (t, e, n, r) { return this.reflectionCapabilities.resolveIdentifier(t, e, n, r); }, t.prototype.resolveEnum = function (t, e) { return this.reflectionCapabilities.resolveEnum(t, e); }, t; }(), Ri = new xi(new Pi), Ai = function () { function t(t, e, n) { this.key = t, this.optional = e, this.visibility = n; } return t.fromKey = function (e) { return new t(e, !1, null); }, t; }(), ki = [], Ni = function () { function t(t, e, n) { this.key = t, this.resolvedFactories = e, this.multiProvider = n; } return Object.defineProperty(t.prototype, "resolvedFactory", { get: function () { return this.resolvedFactories[0]; }, enumerable: !0, configurable: !0 }), t; }(), Ii = function () { function t(t, e) { this.factory = t, this.dependencies = e; } return t; }(), ji = new Object, Mi = function () { function t() { } return t.resolve = function (t) { return F(t); }, t.resolveAndCreate = function (e, n) { var r = t.resolve(e); return t.fromResolvedProviders(r, n); }, t.fromResolvedProviders = function (t, e) { return new Di(t, e); }, t.prototype.parent = function () { }, t.prototype.resolveAndCreateChild = function (t) { }, t.prototype.createChildFromResolved = function (t) { }, t.prototype.resolveAndInstantiate = function (t) { }, t.prototype.instantiateResolved = function (t) { }, t.prototype.get = function (t, e) { }, t; }(), Di = function () { function t(t, e) { this._constructionCounter = 0, this._providers = t, this._parent = e || null; var n = t.length; this.keyIds = new Array(n), this.objs = new Array(n); for (var r = 0; r < n; r++)
            this.keyIds[r] = t[r].key.id, this.objs[r] = ji; } return t.prototype.get = function (t, e) { return void 0 === e && (e = di), this._getByKey(Ci.get(t), null, e); }, Object.defineProperty(t.prototype, "parent", { get: function () { return this._parent; }, enumerable: !0, configurable: !0 }), t.prototype.resolveAndCreateChild = function (t) { var e = Mi.resolve(t); return this.createChildFromResolved(e); }, t.prototype.createChildFromResolved = function (e) { var n = new t(e); return n._parent = this, n; }, t.prototype.resolveAndInstantiate = function (t) { return this.instantiateResolved(Mi.resolve([t])[0]); }, t.prototype.instantiateResolved = function (t) { return this._instantiateProvider(t); }, t.prototype.getProviderAtIndex = function (t) { if (t < 0 || t >= this._providers.length)
            throw k(t); return this._providers[t]; }, t.prototype._new = function (t) { if (this._constructionCounter++ > this._getMaxNumberOfObjects())
            throw P(this, t.key); return this._instantiateProvider(t); }, t.prototype._getMaxNumberOfObjects = function () { return this.objs.length; }, t.prototype._instantiateProvider = function (t) { if (t.multiProvider) {
            for (var e = new Array(t.resolvedFactories.length), n = 0; n < t.resolvedFactories.length; ++n)
                e[n] = this._instantiate(t, t.resolvedFactories[n]);
            return e;
        } return this._instantiate(t, t.resolvedFactories[0]); }, t.prototype._instantiate = function (t, e) { var n, r = this, o = e.factory; try {
            n = e.dependencies.map(function (t) { return r._getByReflectiveDependency(t); });
        }
        catch (e) {
            throw e.addKey && e.addKey(this, t.key), e;
        } var i; try {
            i = o.apply(void 0, n);
        }
        catch (e) {
            throw x(this, e, e.stack, t.key);
        } return i; }, t.prototype._getByReflectiveDependency = function (t) { return this._getByKey(t.key, t.visibility, t.optional ? null : di); }, t.prototype._getByKey = function (t, e, n) { return t === Li ? this : e instanceof li ? this._getByKeySelf(t, n) : this._getByKeyDefault(t, n, e); }, t.prototype._getObjByKeyId = function (t) { for (var e = 0; e < this.keyIds.length; e++)
            if (this.keyIds[e] === t)
                return this.objs[e] === ji && (this.objs[e] = this._new(this._providers[e])), this.objs[e]; return ji; }, t.prototype._throwOrNull = function (t, e) { if (e !== di)
            return e; throw T(this, t); }, t.prototype._getByKeySelf = function (t, e) { var n = this._getObjByKeyId(t.id); return n !== ji ? n : this._throwOrNull(t, e); }, t.prototype._getByKeyDefault = function (e, n, r) { var o; for (o = r instanceof pi ? this._parent : this; o instanceof t;) {
            var i = o, s = i._getObjByKeyId(e.id);
            if (s !== ji)
                return s;
            o = i._parent;
        } return null !== o ? o.get(e.token, n) : this._throwOrNull(e, n); }, Object.defineProperty(t.prototype, "displayName", { get: function () { return "ReflectiveInjector(providers: [" + K(this, function (t) { return ' "' + t.key.displayName + '" '; }).join(", ") + "])"; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return this.displayName; }, t; }(), Li = Ci.get(mi), Fi = new Ao("Application Initializer"), Vi = function () { function t(t) { var e = this; this.appInits = t, this.initialized = !1, this._done = !1, this._donePromise = new Promise(function (t, n) { e.resolve = t, e.reject = n; }); } return t.prototype.runInitializers = function () { var t = this; if (!this.initialized) {
            var e = [], n = function () { t._done = !0, t.resolve(); };
            if (this.appInits)
                for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    Q(o) && e.push(o);
                }
            Promise.all(e).then(function () { n(); }).catch(function (e) { t.reject(e); }), 0 === e.length && n(), this.initialized = !0;
        } }, Object.defineProperty(t.prototype, "done", { get: function () { return this._done; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "donePromise", { get: function () { return this._donePromise; }, enumerable: !0, configurable: !0 }), t; }(); Vi.decorators = [{ type: ci }], Vi.ctorParameters = function () { return [{ type: Array, decorators: [{ type: ai, args: [Fi] }, { type: ui }] }]; }; var Ui = new Ao("AppId"), Hi = { provide: Ui, useFactory: G, deps: [] }, Bi = new Ao("Platform Initializer"), qi = new Ao("Platform ID"), zi = new Ao("appBootstrapListener"), Ki = new Ao("Application Packages Root URL"), Qi = function () { function t() { } return t.prototype.log = function (t) { console.log(t); }, t.prototype.warn = function (t) { console.warn(t); }, t; }(); Qi.decorators = [{ type: ci }], Qi.ctorParameters = function () { return []; }; var Wi = function () { function t(t, e) { this.ngModuleFactory = t, this.componentFactories = e; } return t; }(), Gi = function () { function t() { } return t.prototype.compileModuleSync = function (t) { throw Y(); }, t.prototype.compileModuleAsync = function (t) { throw Y(); }, t.prototype.compileModuleAndAllComponentsSync = function (t) { throw Y(); }, t.prototype.compileModuleAndAllComponentsAsync = function (t) { throw Y(); }, t.prototype.getNgContentSelectors = function (t) { throw Y(); }, t.prototype.clearCache = function () { }, t.prototype.clearCacheFor = function (t) { }, t; }(); Gi.decorators = [{ type: ci }], Gi.ctorParameters = function () { return []; }; var Zi = new Ao("compilerOptions"), Yi = function () { function t() { } return t.prototype.createCompiler = function (t) { }, t; }(), Ji = function () { function t() { } return t.prototype.location = function () { }, t.prototype.injector = function () { }, t.prototype.instance = function () { }, t.prototype.hostView = function () { }, t.prototype.changeDetectorRef = function () { }, t.prototype.componentType = function () { }, t.prototype.destroy = function () { }, t.prototype.onDestroy = function (t) { }, t; }(), Xi = function () { function t() { } return t.prototype.selector = function () { }, t.prototype.componentType = function () { }, t.prototype.ngContentSelectors = function () { }, t.prototype.inputs = function () { }, t.prototype.outputs = function () { }, t.prototype.create = function (t, e, n, r) { }, t; }(), $i = "ngComponent", ts = function () { function t() { } return t.prototype.resolveComponentFactory = function (t) { throw J(t); }, t; }(), es = function () { function t() { } return t.prototype.resolveComponentFactory = function (t) { }, t; }(); es.NULL = new ts; var ns, rs, os = function () { function t(t, e, n) { this._parent = e, this._ngModule = n, this._factories = new Map; for (var r = 0; r < t.length; r++) {
            var o = t[r];
            this._factories.set(o.componentType, o);
        } } return t.prototype.resolveComponentFactory = function (t) { var e = this._factories.get(t); if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e)
            throw J(t); return new is(e, this._ngModule); }, t; }(), is = function (t) { function e(e, n) { var r = t.call(this) || this; return r.factory = e, r.ngModule = n, r; } return Eo.a(e, t), Object.defineProperty(e.prototype, "selector", { get: function () { return this.factory.selector; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "componentType", { get: function () { return this.factory.componentType; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "ngContentSelectors", { get: function () { return this.factory.ngContentSelectors; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "inputs", { get: function () { return this.factory.inputs; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "outputs", { get: function () { return this.factory.outputs; }, enumerable: !0, configurable: !0 }), e.prototype.create = function (t, e, n, r) { return this.factory.create(t, e, n, r || this.ngModule); }, e; }(Xi), ss = function () { function t() { } return t.prototype.injector = function () { }, t.prototype.componentFactoryResolver = function () { }, t.prototype.instance = function () { }, t.prototype.destroy = function () { }, t.prototype.onDestroy = function (t) { }, t; }(), as = function () { function t() { } return t.prototype.moduleType = function () { }, t.prototype.create = function (t) { }, t; }(), us = X(), cs = us ? $ : function (t, e) { return rt; }, ls = us ? tt : function (t, e) { return e; }, ps = us ? et : function (t, e) { return null; }, fs = us ? nt : function (t) { return null; }, hs = function (t) { function e(e) { void 0 === e && (e = !1); var n = t.call(this) || this; return n.__isAsync = e, n; } return Eo.a(e, t), e.prototype.emit = function (e) { t.prototype.next.call(this, e); }, e.prototype.subscribe = function (e, n, r) { var o, i = function (t) { return null; }, s = function () { return null; }; return e && "object" == typeof e ? (o = this.__isAsync ? function (t) { setTimeout(function () { return e.next(t); }); } : function (t) { e.next(t); }, e.error && (i = this.__isAsync ? function (t) { setTimeout(function () { return e.error(t); }); } : function (t) { e.error(t); }), e.complete && (s = this.__isAsync ? function () { setTimeout(function () { return e.complete(); }); } : function () { e.complete(); })) : (o = this.__isAsync ? function (t) { setTimeout(function () { return e(t); }); } : function (t) { e(t); }, n && (i = this.__isAsync ? function (t) { setTimeout(function () { return n(t); }); } : function (t) { n(t); }), r && (s = this.__isAsync ? function () { setTimeout(function () { return r(); }); } : function () { r(); })), t.prototype.subscribe.call(this, o, i, s); }, e; }(xo.Subject), ds = function () { function t(t) { var e = t.enableLongStackTrace, n = void 0 !== e && e; if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new hs(!1), this.onMicrotaskEmpty = new hs(!1), this.onStable = new hs(!1), this.onError = new hs(!1), "undefined" == typeof Zone)
            throw new Error("Angular requires Zone.js prolyfill."); Zone.assertZonePatched(); var r = this; r._nesting = 0, r._outer = r._inner = Zone.current, Zone.wtfZoneSpec && (r._inner = r._inner.fork(Zone.wtfZoneSpec)), n && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), it(r); } return t.isInAngularZone = function () { return !0 === Zone.current.get("isAngularZone"); }, t.assertInAngularZone = function () { if (!t.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!"); }, t.assertNotInAngularZone = function () { if (t.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!"); }, t.prototype.run = function (t) { return this._inner.run(t); }, t.prototype.runGuarded = function (t) { return this._inner.runGuarded(t); }, t.prototype.runOutsideAngular = function (t) { return this._outer.run(t); }, t; }(), ys = function () { function t(t) { this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(); } return t.prototype._watchAngularEvents = function () { var t = this; this._ngZone.onUnstable.subscribe({ next: function () { t._didWork = !0, t._isZoneStable = !1; } }), this._ngZone.runOutsideAngular(function () { t._ngZone.onStable.subscribe({ next: function () { ds.assertNotInAngularZone(), o(function () { t._isZoneStable = !0, t._runCallbacksIfReady(); }); } }); }); }, t.prototype.increasePendingRequestCount = function () { return this._pendingCount += 1, this._didWork = !0, this._pendingCount; }, t.prototype.decreasePendingRequestCount = function () { if (this._pendingCount -= 1, this._pendingCount < 0)
            throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount; }, t.prototype.isStable = function () { return this._isZoneStable && 0 == this._pendingCount && !this._ngZone.hasPendingMacrotasks; }, t.prototype._runCallbacksIfReady = function () { var t = this; this.isStable() ? o(function () { for (; 0 !== t._callbacks.length;)
            t._callbacks.pop()(t._didWork); t._didWork = !1; }) : this._didWork = !0; }, t.prototype.whenStable = function (t) { this._callbacks.push(t), this._runCallbacksIfReady(); }, t.prototype.getPendingRequestCount = function () { return this._pendingCount; }, t.prototype.findBindings = function (t, e, n) { return []; }, t.prototype.findProviders = function (t, e, n) { return []; }, t; }(); ys.decorators = [{ type: ci }], ys.ctorParameters = function () { return [{ type: ds }]; }; var ms = function () { function t() { this._applications = new Map, bs.addToWindow(this); } return t.prototype.registerApplication = function (t, e) { this._applications.set(t, e); }, t.prototype.getTestability = function (t) { return this._applications.get(t) || null; }, t.prototype.getAllTestabilities = function () { return Array.from(this._applications.values()); }, t.prototype.getAllRootElements = function () { return Array.from(this._applications.keys()); }, t.prototype.findTestabilityInTree = function (t, e) { return void 0 === e && (e = !0), bs.findTestabilityInTree(this, t, e); }, t; }(); ms.decorators = [{ type: ci }], ms.ctorParameters = function () { return []; }; var vs, gs = function () { function t() { } return t.prototype.addToWindow = function (t) { }, t.prototype.findTestabilityInTree = function (t, e, n) { return null; }, t; }(), bs = new gs, _s = !0, ws = !1, Cs = new Ao("AllowMultipleToken"), Ss = function () { function t(t, e) { this.name = t, this.token = e; } return t; }(), Es = function () { function t() { } return t.prototype.bootstrapModuleFactory = function (t) { }, t.prototype.bootstrapModule = function (t, e) { }, t.prototype.onDestroy = function (t) { }, t.prototype.injector = function () { }, t.prototype.destroy = function () { }, t.prototype.destroyed = function () { }, t; }(), Os = function (t) { function e(e) { var n = t.call(this) || this; return n._injector = e, n._modules = [], n._destroyListeners = [], n._destroyed = !1, n; } return Eo.a(e, t), e.prototype.onDestroy = function (t) { this._destroyListeners.push(t); }, Object.defineProperty(e.prototype, "injector", { get: function () { return this._injector; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "destroyed", { get: function () { return this._destroyed; }, enumerable: !0, configurable: !0 }), e.prototype.destroy = function () { if (this._destroyed)
            throw new Error("The platform has already been destroyed!"); this._modules.slice().forEach(function (t) { return t.destroy(); }), this._destroyListeners.forEach(function (t) { return t(); }), this._destroyed = !0; }, e.prototype.bootstrapModuleFactory = function (t) { return this._bootstrapModuleFactoryWithZone(t); }, e.prototype._bootstrapModuleFactoryWithZone = function (t, e) { var n = this; return e || (e = new ds({ enableLongStackTrace: lt() })), e.run(function () { var r = Mi.resolveAndCreate([{ provide: ds, useValue: e }], n.injector), o = t.create(r), i = o.injector.get(wi, null); if (!i)
            throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?"); return o.onDestroy(function () { return vt(n._modules, o); }), e.runOutsideAngular(function () { return e.onError.subscribe({ next: function (t) { i.handleError(t); } }); }), mt(i, e, function () { var t = o.injector.get(Vi); return t.runInitializers(), t.donePromise.then(function () { return n._moduleDoBootstrap(o), o; }); }); }); }, e.prototype.bootstrapModule = function (t, e) { return void 0 === e && (e = []), this._bootstrapModuleWithZone(t, e); }, e.prototype._bootstrapModuleWithZone = function (t, e, n) { var r = this; return void 0 === e && (e = []), this.injector.get(Yi).createCompiler(Array.isArray(e) ? e : [e]).compileModuleAsync(t).then(function (t) { return r._bootstrapModuleFactoryWithZone(t, n); }); }, e.prototype._moduleDoBootstrap = function (t) { var e = t.injector.get(Ts); if (t._bootstrapComponents.length > 0)
            t._bootstrapComponents.forEach(function (t) { return e.bootstrap(t); });
        else {
            if (!t.instance.ngDoBootstrap)
                throw new Error("The module " + s(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
            t.instance.ngDoBootstrap(e);
        } this._modules.push(t); }, e; }(Es); Os.decorators = [{ type: ci }], Os.ctorParameters = function () { return [{ type: mi }]; }; var Ts = function () { function t() { } return t.prototype.bootstrap = function (t, e) { }, t.prototype.tick = function () { }, t.prototype.componentTypes = function () { }, t.prototype.components = function () { }, t.prototype.attachView = function (t) { }, t.prototype.detachView = function (t) { }, t.prototype.viewCount = function () { }, t.prototype.isStable = function () { }, t; }(), Ps = function (t) { function e(e, r, i, s, a, u) { var c = t.call(this) || this; c._zone = e, c._console = r, c._injector = i, c._exceptionHandler = s, c._componentFactoryResolver = a, c._initStatus = u, c._bootstrapListeners = [], c._rootComponents = [], c._rootComponentTypes = [], c._views = [], c._runningTick = !1, c._enforceNoNewChanges = !1, c._stable = !0, c._enforceNoNewChanges = lt(), c._zone.onMicrotaskEmpty.subscribe({ next: function () { c._zone.run(function () { c.tick(); }); } }); var l = new Oo.Observable(function (t) { c._stable = c._zone.isStable && !c._zone.hasPendingMacrotasks && !c._zone.hasPendingMicrotasks, c._zone.runOutsideAngular(function () { t.next(c._stable), t.complete(); }); }), p = new Oo.Observable(function (t) { var e; c._zone.runOutsideAngular(function () { e = c._zone.onStable.subscribe(function () { ds.assertNotInAngularZone(), o(function () { c._stable || c._zone.hasPendingMacrotasks || c._zone.hasPendingMicrotasks || (c._stable = !0, t.next(!0)); }); }); }); var n = c._zone.onUnstable.subscribe(function () { ds.assertInAngularZone(), c._stable && (c._stable = !1, c._zone.runOutsideAngular(function () { t.next(!1); })); }); return function () { e.unsubscribe(), n.unsubscribe(); }; }); return c._isStable = n.i(To.merge)(l, Po.share.call(p)), c; } return Eo.a(e, t), e.prototype.attachView = function (t) { var e = t; this._views.push(e), e.attachToAppRef(this); }, e.prototype.detachView = function (t) { var e = t; vt(this._views, e), e.detachFromAppRef(); }, e.prototype.bootstrap = function (t, e) { var n = this; if (!this._initStatus.done)
            throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."); var r; r = t instanceof Xi ? t : this._componentFactoryResolver.resolveComponentFactory(t), this._rootComponentTypes.push(r.componentType); var o = r instanceof is ? null : this._injector.get(ss), i = e || r.selector, s = r.create(mi.NULL, [], i, o); s.onDestroy(function () { n._unloadComponent(s); }); var a = s.injector.get(ys, null); return a && s.injector.get(ms).registerApplication(s.location.nativeElement, a), this._loadComponent(s), lt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s; }, e.prototype._loadComponent = function (t) { this.attachView(t.hostView), this.tick(), this._rootComponents.push(t), this._injector.get(zi, []).concat(this._bootstrapListeners).forEach(function (e) { return e(t); }); }, e.prototype._unloadComponent = function (t) { this.detachView(t.hostView), vt(this._rootComponents, t); }, e.prototype.tick = function () { var t = this; if (this._runningTick)
            throw new Error("ApplicationRef.tick is called recursively"); var n = e._tickScope(); try {
            this._runningTick = !0, this._views.forEach(function (t) { return t.detectChanges(); }), this._enforceNoNewChanges && this._views.forEach(function (t) { return t.checkNoChanges(); });
        }
        catch (e) {
            this._zone.runOutsideAngular(function () { return t._exceptionHandler.handleError(e); });
        }
        finally {
            this._runningTick = !1, ls(n);
        } }, e.prototype.ngOnDestroy = function () { this._views.slice().forEach(function (t) { return t.destroy(); }); }, Object.defineProperty(e.prototype, "viewCount", { get: function () { return this._views.length; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "componentTypes", { get: function () { return this._rootComponentTypes; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "components", { get: function () { return this._rootComponents; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "isStable", { get: function () { return this._isStable; }, enumerable: !0, configurable: !0 }), e; }(Ts); Ps._tickScope = cs("ApplicationRef#tick()"), Ps.decorators = [{ type: ci }], Ps.ctorParameters = function () { return [{ type: ds }, { type: Qi }, { type: mi }, { type: wi }, { type: es }, { type: Vi }]; }; var xs = function () { function t(t, e, n, r, o, i) { this.id = t, this.templateUrl = e, this.slotCount = n, this.encapsulation = r, this.styles = o, this.animations = i; } return t; }(), Rs = function () { function t() { } return t.prototype.injector = function () { }, t.prototype.component = function () { }, t.prototype.providerTokens = function () { }, t.prototype.references = function () { }, t.prototype.context = function () { }, t.prototype.source = function () { }, t; }(), As = function () { function t() { } return t.prototype.selectRootElement = function (t, e) { }, t.prototype.createElement = function (t, e, n) { }, t.prototype.createViewRoot = function (t) { }, t.prototype.createTemplateAnchor = function (t, e) { }, t.prototype.createText = function (t, e, n) { }, t.prototype.projectNodes = function (t, e) { }, t.prototype.attachViewAfter = function (t, e) { }, t.prototype.detachView = function (t) { }, t.prototype.destroyView = function (t, e) { }, t.prototype.listen = function (t, e, n) { }, t.prototype.listenGlobal = function (t, e, n) { }, t.prototype.setElementProperty = function (t, e, n) { }, t.prototype.setElementAttribute = function (t, e, n) { }, t.prototype.setBindingDebugInfo = function (t, e, n) { }, t.prototype.setElementClass = function (t, e, n) { }, t.prototype.setElementStyle = function (t, e, n) { }, t.prototype.invokeElementMethod = function (t, e, n) { }, t.prototype.setText = function (t, e) { }, t.prototype.animate = function (t, e, n, r, o, i, s) { }, t; }(), ks = (new Ao("Renderer2Interceptor"), function () { function t() { } return t.prototype.renderComponent = function (t) { }, t; }()), Ns = function () { function t() { } return t.prototype.createRenderer = function (t, e) { }, t.prototype.begin = function () { }, t.prototype.end = function () { }, t.prototype.whenRenderingDone = function () { }, t; }(), Is = {}; Is.Important = 1, Is.DashCase = 2, Is[Is.Important] = "Important", Is[Is.DashCase] = "DashCase"; var js = function () { function t() { } return t.prototype.data = function () { }, t.prototype.destroy = function () { }, t.prototype.createElement = function (t, e) { }, t.prototype.createComment = function (t) { }, t.prototype.createText = function (t) { }, t.prototype.appendChild = function (t, e) { }, t.prototype.insertBefore = function (t, e, n) { }, t.prototype.removeChild = function (t, e) { }, t.prototype.selectRootElement = function (t) { }, t.prototype.parentNode = function (t) { }, t.prototype.nextSibling = function (t) { }, t.prototype.setAttribute = function (t, e, n, r) { }, t.prototype.removeAttribute = function (t, e, n) { }, t.prototype.addClass = function (t, e) { }, t.prototype.removeClass = function (t, e) { }, t.prototype.setStyle = function (t, e, n, r) { }, t.prototype.removeStyle = function (t, e, n) { }, t.prototype.setProperty = function (t, e, n) { }, t.prototype.setValue = function (t, e) { }, t.prototype.listen = function (t, e, n) { }, t; }(), Ms = function () { function t(t) { this.nativeElement = t; } return t; }(), Ds = function () { function t() { } return t.prototype.load = function (t) { }, t; }(), Ls = new Map, Fs = function () { function t() { this._dirty = !0, this._results = [], this._emitter = new hs; } return Object.defineProperty(t.prototype, "changes", { get: function () { return this._emitter; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "length", { get: function () { return this._results.length; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "first", { get: function () { return this._results[0]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "last", { get: function () { return this._results[this.length - 1]; }, enumerable: !0, configurable: !0 }), t.prototype.map = function (t) { return this._results.map(t); }, t.prototype.filter = function (t) { return this._results.filter(t); }, t.prototype.find = function (t) { return this._results.find(t); }, t.prototype.reduce = function (t, e) { return this._results.reduce(t, e); }, t.prototype.forEach = function (t) { this._results.forEach(t); }, t.prototype.some = function (t) { return this._results.some(t); }, t.prototype.toArray = function () { return this._results.slice(); }, t.prototype[r()] = function () { return this._results[r()](); }, t.prototype.toString = function () { return this._results.toString(); }, t.prototype.reset = function (t) { this._results = _t(t), this._dirty = !1; }, t.prototype.notifyOnChanges = function () { this._emitter.emit(this); }, t.prototype.setDirty = function () { this._dirty = !0; }, Object.defineProperty(t.prototype, "dirty", { get: function () { return this._dirty; }, enumerable: !0, configurable: !0 }), t; }(), Vs = function () { function t() { } return t; }(), Us = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" }, Hs = function () { function t(t, e) { this._compiler = t, this._config = e || Us; } return t.prototype.load = function (t) { return this._compiler instanceof Gi ? this.loadFactory(t) : this.loadAndCompile(t); }, t.prototype.loadAndCompile = function (t) { var e = this, r = t.split("#"), o = r[0], i = r[1]; return void 0 === i && (i = "default"), n("qtrl")(o).then(function (t) { return t[i]; }).then(function (t) { return wt(t, o, i); }).then(function (t) { return e._compiler.compileModuleAsync(t); }); }, t.prototype.loadFactory = function (t) { var e = t.split("#"), r = e[0], o = e[1], i = "NgFactory"; return void 0 === o && (o = "default", i = ""), n("qtrl")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (t) { return t[o + i]; }).then(function (t) { return wt(t, r, o); }); }, t; }(); Hs.decorators = [{ type: ci }], Hs.ctorParameters = function () { return [{ type: Gi }, { type: Vs, decorators: [{ type: ui }] }]; }; var Bs = function () { function t() { } return t.prototype.elementRef = function () { }, t.prototype.createEmbeddedView = function (t) { }, t; }(), qs = function () { function t() { } return t.prototype.element = function () { }, t.prototype.injector = function () { }, t.prototype.parentInjector = function () { }, t.prototype.clear = function () { }, t.prototype.get = function (t) { }, t.prototype.length = function () { }, t.prototype.createEmbeddedView = function (t, e, n) { }, t.prototype.createComponent = function (t, e, n, r, o) { }, t.prototype.insert = function (t, e) { }, t.prototype.move = function (t, e) { }, t.prototype.indexOf = function (t) { }, t.prototype.remove = function (t) { }, t.prototype.detach = function (t) { }, t; }(), zs = function () { function t() { } return t.prototype.markForCheck = function () { }, t.prototype.detach = function () { }, t.prototype.detectChanges = function () { }, t.prototype.checkNoChanges = function () { }, t.prototype.reattach = function () { }, t; }(), Ks = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Eo.a(e, t), e.prototype.destroy = function () { }, e.prototype.destroyed = function () { }, e.prototype.onDestroy = function (t) { }, e; }(zs), Qs = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return Eo.a(e, t), e.prototype.context = function () { }, e.prototype.rootNodes = function () { }, e; }(Ks), Ws = function () { function t(t, e) { this.name = t, this.callback = e; } return t; }(), Gs = function () { function t(t, e, n) { this._debugContext = n, this.nativeNode = t, e && e instanceof Zs ? e.addChild(this) : this.parent = null, this.listeners = []; } return Object.defineProperty(t.prototype, "injector", { get: function () { return this._debugContext.injector; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentInstance", { get: function () { return this._debugContext.component; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this._debugContext.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function () { return this._debugContext.references; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function () { return this._debugContext.providerTokens; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "source", { get: function () { return "Deprecated since v4"; }, enumerable: !0, configurable: !0 }), t; }(), Zs = function (t) { function e(e, n, r) { var o = t.call(this, e, n, r) || this; return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o; } return Eo.a(e, t), e.prototype.addChild = function (t) { t && (this.childNodes.push(t), t.parent = this); }, e.prototype.removeChild = function (t) { var e = this.childNodes.indexOf(t); -1 !== e && (t.parent = null, this.childNodes.splice(e, 1)); }, e.prototype.insertChildrenAfter = function (t, e) { var n = this, r = this.childNodes.indexOf(t); -1 !== r && ((o = this.childNodes).splice.apply(o, [r + 1, 0].concat(e)), e.forEach(function (t) { t.parent && t.parent.removeChild(t), t.parent = n; })); var o; }, e.prototype.insertBefore = function (t, e) { var n = this.childNodes.indexOf(t); -1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e)); }, e.prototype.query = function (t) { return this.queryAll(t)[0] || null; }, e.prototype.queryAll = function (t) { var e = []; return St(this, t, e), e; }, e.prototype.queryAllNodes = function (t) { var e = []; return Et(this, t, e), e; }, Object.defineProperty(e.prototype, "children", { get: function () { return this.childNodes.filter(function (t) { return t instanceof e; }); }, enumerable: !0, configurable: !0 }), e.prototype.triggerEventHandler = function (t, e) { this.listeners.forEach(function (n) { n.name == t && n.callback(e); }); }, e; }(Gs), Ys = new Map, Js = function () { function t(t) { this.wrapped = t; } return t.wrap = function (e) { return new t(e); }, t; }(), Xs = function () { function t() { this.hasWrappedValue = !1; } return t.prototype.unwrap = function (t) { return t instanceof Js ? (this.hasWrappedValue = !0, t.wrapped) : t; }, t.prototype.reset = function () { this.hasWrappedValue = !1; }, t; }(), $s = function () { function t(t, e, n) { this.previousValue = t, this.currentValue = e, this.firstChange = n; } return t.prototype.isFirstChange = function () { return this.firstChange; }, t; }(), ta = function () { function t() { } return t.prototype.supports = function (t) { return Rt(t); }, t.prototype.create = function (t, e) { return new na(e || t); }, t; }(), ea = function (t, e) { return e; }, na = function () { function t(t) { this._length = 0, this._collection = null, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || ea; } return Object.defineProperty(t.prototype, "collection", { get: function () { return this._collection; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "length", { get: function () { return this._length; }, enumerable: !0, configurable: !0 }), t.prototype.forEachItem = function (t) { var e; for (e = this._itHead; null !== e; e = e._next)
            t(e); }, t.prototype.forEachOperation = function (t) { for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
            var i = !n || e && e.currentIndex < It(n, r, o) ? e : n, s = It(i, r, o), a = i.currentIndex;
            if (i === n)
                r--, n = n._nextRemoved;
            else if (e = e._next, null == i.previousIndex)
                r++;
            else {
                o || (o = []);
                var u = s - r, c = a - r;
                if (u != c) {
                    for (var l = 0; l < u; l++) {
                        var p = l < o.length ? o[l] : o[l] = 0, f = p + l;
                        c <= f && f < u && (o[l] = p + 1);
                    }
                    var h = i.previousIndex;
                    o[h] = c - u;
                }
            }
            s !== a && t(i, s, a);
        } }, t.prototype.forEachPreviousItem = function (t) { var e; for (e = this._previousItHead; null !== e; e = e._nextPrevious)
            t(e); }, t.prototype.forEachAddedItem = function (t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded)
            t(e); }, t.prototype.forEachMovedItem = function (t) { var e; for (e = this._movesHead; null !== e; e = e._nextMoved)
            t(e); }, t.prototype.forEachRemovedItem = function (t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved)
            t(e); }, t.prototype.forEachIdentityChange = function (t) { var e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange)
            t(e); }, t.prototype.diff = function (t) { if (null == t && (t = []), !Rt(t))
            throw new Error("Error trying to diff '" + s(t) + "'. Only arrays and iterables are allowed"); return this.check(t) ? this : null; }, t.prototype.onDestroy = function () { }, t.prototype.check = function (t) { var e = this; this._reset(); var n, r, o, s = this._itHead, a = !1; if (Array.isArray(t)) {
            this._length = t.length;
            for (var u = 0; u < this._length; u++)
                r = t[u], o = this._trackByFn(u, r), null !== s && i(s.trackById, o) ? (a && (s = this._verifyReinsertion(s, r, o, u)), i(s.item, r) || this._addIdentityChange(s, r)) : (s = this._mismatch(s, r, o, u), a = !0), s = s._next;
        }
        else
            n = 0, kt(t, function (t) { o = e._trackByFn(n, t), null !== s && i(s.trackById, o) ? (a && (s = e._verifyReinsertion(s, t, o, n)), i(s.item, t) || e._addIdentityChange(s, t)) : (s = e._mismatch(s, t, o, n), a = !0), s = s._next, n++; }), this._length = n; return this._truncate(s), this._collection = t, this.isDirty; }, Object.defineProperty(t.prototype, "isDirty", { get: function () { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead; }, enumerable: !0, configurable: !0 }), t.prototype._reset = function () { if (this.isDirty) {
            var t = void 0, e = void 0;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
                t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
                t.previousIndex = t.currentIndex, e = t._nextMoved;
            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
        } }, t.prototype._mismatch = function (t, e, n, r) { var o; return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r), null !== t ? (i(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null), null !== t ? (i(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new ra(e, n), o, r)), t; }, t.prototype._verifyReinsertion = function (t, e, n, r) { var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }, t.prototype._truncate = function (t) { for (; null !== t;) {
            var e = t._next;
            this._addToRemovals(this._unlink(t)), t = e;
        } null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null); }, t.prototype._reinsertAfter = function (t, e, n) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); var r = t._prevRemoved, o = t._nextRemoved; return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t; }, t.prototype._moveAfter = function (t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t; }, t.prototype._addAfter = function (t, e, n) { return this._insertAfter(t, e, n), null === this._additionsTail ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }, t.prototype._insertAfter = function (t, e, n) { var r = null === e ? this._itHead : e._next; return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new ia), this._linkedRecords.put(t), t.currentIndex = n, t; }, t.prototype._remove = function (t) { return this._addToRemovals(this._unlink(t)); }, t.prototype._unlink = function (t) { null !== this._linkedRecords && this._linkedRecords.remove(t); var e = t._prev, n = t._next; return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t; }, t.prototype._addToMoves = function (t, e) { return t.previousIndex === e ? t : (null === this._movesTail ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t, t); }, t.prototype._addToRemovals = function (t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new ia), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }, t.prototype._addIdentityChange = function (t, e) { return t.item = e, null === this._identityChangesTail ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }, t.prototype.toString = function () { var t = []; this.forEachItem(function (e) { return t.push(e); }); var e = []; this.forEachPreviousItem(function (t) { return e.push(t); }); var n = []; this.forEachAddedItem(function (t) { return n.push(t); }); var r = []; this.forEachMovedItem(function (t) { return r.push(t); }); var o = []; this.forEachRemovedItem(function (t) { return o.push(t); }); var i = []; return this.forEachIdentityChange(function (t) { return i.push(t); }), "collection: " + t.join(", ") + "\nprevious: " + e.join(", ") + "\nadditions: " + n.join(", ") + "\nmoves: " + r.join(", ") + "\nremovals: " + o.join(", ") + "\nidentityChanges: " + i.join(", ") + "\n"; }, t; }(), ra = function () { function t(t, e) { this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null; } return t.prototype.toString = function () { return this.previousIndex === this.currentIndex ? s(this.item) : s(this.item) + "[" + s(this.previousIndex) + "->" + s(this.currentIndex) + "]"; }, t; }(), oa = function () { function t() { this._head = null, this._tail = null; } return t.prototype.add = function (t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }, t.prototype.get = function (t, e) { var n; for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && i(n.trackById, t))
                return n; return null; }, t.prototype.remove = function (t) { var e = t._prevDup, n = t._nextDup; return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head; }, t; }(), ia = function () { function t() { this.map = new Map; } return t.prototype.put = function (t) { var e = t.trackById, n = this.map.get(e); n || (n = new oa, this.map.set(e, n)), n.add(t); }, t.prototype.get = function (t, e) { var n = t, r = this.map.get(n); return r ? r.get(t, e) : null; }, t.prototype.remove = function (t) { var e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t; }, Object.defineProperty(t.prototype, "isEmpty", { get: function () { return 0 === this.map.size; }, enumerable: !0, configurable: !0 }), t.prototype.clear = function () { this.map.clear(); }, t.prototype.toString = function () { return "_DuplicateMap(" + s(this.map) + ")"; }, t; }(), sa = function () { function t() { } return t.prototype.supports = function (t) { return t instanceof Map || Nt(t); }, t.prototype.create = function (t) { return new aa; }, t; }(), aa = function () { function t() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null; } return Object.defineProperty(t.prototype, "isDirty", { get: function () { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead; }, enumerable: !0, configurable: !0 }), t.prototype.forEachItem = function (t) { var e; for (e = this._mapHead; null !== e; e = e._next)
            t(e); }, t.prototype.forEachPreviousItem = function (t) { var e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
            t(e); }, t.prototype.forEachChangedItem = function (t) { var e; for (e = this._changesHead; null !== e; e = e._nextChanged)
            t(e); }, t.prototype.forEachAddedItem = function (t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded)
            t(e); }, t.prototype.forEachRemovedItem = function (t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved)
            t(e); }, t.prototype.diff = function (t) { if (t) {
            if (!(t instanceof Map || Nt(t)))
                throw new Error("Error trying to diff '" + s(t) + "'. Only maps and objects are allowed");
        }
        else
            t = new Map; return this.check(t) ? this : null; }, t.prototype.onDestroy = function () { }, t.prototype.check = function (t) { var e = this; this._reset(); var n = this._mapHead; if (this._appendAfter = null, this._forEach(t, function (t, r) { if (n && n.key === r)
            e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
        else {
            var o = e._getOrCreateRecordForKey(r, t);
            n = e._insertBeforeOrAppend(n, o);
        } }), n) {
            n._prev && (n._prev._next = null), this._removalsHead = n;
            for (var r = n; null !== r; r = r._nextRemoved)
                r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null;
        } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }, t.prototype._insertBeforeOrAppend = function (t, e) { if (t) {
            var n = t._prev;
            return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t;
        } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null; }, t.prototype._getOrCreateRecordForKey = function (t, e) { if (this._records.has(t)) {
            var n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            var r = n._prev, o = n._next;
            return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n;
        } var i = new ua(t); return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i; }, t.prototype._reset = function () { if (this.isDirty) {
            var t = void 0;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
                t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
                t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
                t.previousValue = t.currentValue;
            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
        } }, t.prototype._maybeAddToChanges = function (t, e) { i(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)); }, t.prototype._addToAdditions = function (t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }, t.prototype._addToChanges = function (t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }, t.prototype._forEach = function (t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function (n) { return e(t[n], n); }); }, t; }(), ua = function () { function t(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null; } return t; }(), ca = function () { function t(t) { this.factories = t; } return t.create = function (e, n) { if (null != n) {
            var r = n.factories.slice();
            return e = e.concat(r), new t(e);
        } return new t(e); }, t.extend = function (e) { return { provide: t, useFactory: function (n) { if (!n)
                throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n); }, deps: [[t, new pi, new ui]] }; }, t.prototype.find = function (t) { var e = this.factories.find(function (e) { return e.supports(t); }); if (null != e)
            return e; throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + jt(t) + "'"); }, t; }(), la = function () { function t(t) { this.factories = t; } return t.create = function (e, n) { if (n) {
            var r = n.factories.slice();
            e = e.concat(r);
        } return new t(e); }, t.extend = function (e) { return { provide: t, useFactory: function (n) { if (!n)
                throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n); }, deps: [[t, new pi, new ui]] }; }, t.prototype.find = function (t) { var e = this.factories.find(function (e) { return e.supports(t); }); if (e)
            return e; throw new Error("Cannot find a differ supporting object '" + t + "'"); }, t; }(), pa = [new sa], fa = [new ta], ha = new ca(fa), da = new la(pa), ya = [{ provide: qi, useValue: "unknown" }, Os, { provide: Es, useExisting: Os }, { provide: xi, useFactory: Mt, deps: [] }, ms, Qi], ma = ft(null, "core", ya), va = new Ao("LocaleId"), ga = new Ao("Translations"), ba = new Ao("TranslationsFormat"), _a = {}; _a.Error = 0, _a.Warning = 1, _a.Ignore = 2, _a[_a.Error] = "Error", _a[_a.Warning] = "Warning", _a[_a.Ignore] = "Ignore"; var wa = function () { function t(t) { } return t; }(); wa.decorators = [{ type: ni, args: [{ providers: [Ps, { provide: Ts, useExisting: Ps }, Vi, Gi, Hi, { provide: ca, useFactory: Dt }, { provide: la, useFactory: Lt }, { provide: va, useFactory: Ft, deps: [[new ai(va), new ui, new pi]] }] }] }], wa.ctorParameters = function () { return [{ type: Ts }]; }; var Ca = {}; Ca.NONE = 0, Ca.HTML = 1, Ca.STYLE = 2, Ca.SCRIPT = 3, Ca.URL = 4, Ca.RESOURCE_URL = 5, Ca[Ca.NONE] = "NONE", Ca[Ca.HTML] = "HTML", Ca[Ca.STYLE] = "STYLE", Ca[Ca.SCRIPT] = "SCRIPT", Ca[Ca.URL] = "URL", Ca[Ca.RESOURCE_URL] = "RESOURCE_URL"; var Sa = function () { function t() { } return t.prototype.sanitize = function (t, e) { }, t; }(), Ea = function () { function t() { } return t.prototype.view = function () { }, t.prototype.nodeIndex = function () { }, t.prototype.injector = function () { }, t.prototype.component = function () { }, t.prototype.providerTokens = function () { }, t.prototype.references = function () { }, t.prototype.context = function () { }, t.prototype.componentRenderElement = function () { }, t.prototype.renderNode = function () { }, t.prototype.logError = function (t) { for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]; }, t; }(), Oa = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, clearProviderOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 }, Ta = function () { }, Pa = new Map, xa = "$$undefined", Ra = "$$empty", Aa = 0, ka = new WeakMap, Na = /^:([^:]+):(.+)$/, Ia = [], ja = {}, Ma = new Object, Da = Yt(mi), La = Yt(ss), Fa = new Object, Va = function (t) { function e(e, n, r, o, i, s) { var a = t.call(this) || this; return a.selector = e, a.componentType = n, a._inputs = o, a._outputs = i, a.ngContentSelectors = s, a.viewDefFactory = r, a; } return Eo.a(e, t), Object.defineProperty(e.prototype, "inputs", { get: function () { var t = [], e = this._inputs; for (var n in e) {
                var r = e[n];
                t.push({ propName: n, templateName: r });
            } return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "outputs", { get: function () { var t = []; for (var e in this._outputs) {
                var n = this._outputs[e];
                t.push({ propName: e, templateName: n });
            } return t; }, enumerable: !0, configurable: !0 }), e.prototype.create = function (t, e, n, r) { if (!r)
            throw new Error("ngModule should be provided"); var o = me(this.viewDefFactory), i = o.nodes[0].element.componentProvider.index, s = Oa.createRootView(t, e || [], n, o, r, Fa), a = Ht(s, i).instance; return n && s.renderer.setAttribute(Ut(s, 0).renderElement, "ng-version", si.full), new Ua(s, new Ba(s), a); }, e; }(Xi), Ua = function (t) { function e(e, n, r) { var o = t.call(this) || this; return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o; } return Eo.a(e, t), Object.defineProperty(e.prototype, "location", { get: function () { return new Ms(Ut(this._view, this._elDef.index).renderElement); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "injector", { get: function () { return new za(this._view, this._elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "instance", { get: function () { return this._component; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hostView", { get: function () { return this._viewRef; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "changeDetectorRef", { get: function () { return this._viewRef; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "componentType", { get: function () { return this._component.constructor; }, enumerable: !0, configurable: !0 }), e.prototype.destroy = function () { this._viewRef.destroy(); }, e.prototype.onDestroy = function (t) { this._viewRef.onDestroy(t); }, e; }(Ji), Ha = function () { function t(t, e, n) { this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []; } return Object.defineProperty(t.prototype, "element", { get: function () { return new Ms(this._data.renderElement); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function () { return new za(this._view, this._elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parentInjector", { get: function () { for (var t = this._view, e = this._elDef.parent; !e && t;)
                e = ae(t), t = t.parent; return t ? new za(t, e) : new za(this._view, null); }, enumerable: !0, configurable: !0 }), t.prototype.clear = function () { for (var t = this._embeddedViews.length, e = t - 1; e >= 0; e--) {
            var n = Je(this._data, e);
            Oa.destroyView(n);
        } }, t.prototype.get = function (t) { var e = this._embeddedViews[t]; if (e) {
            var n = new Ba(e);
            return n.attachToViewContainerRef(this), n;
        } return null; }, Object.defineProperty(t.prototype, "length", { get: function () { return this._embeddedViews.length; }, enumerable: !0, configurable: !0 }), t.prototype.createEmbeddedView = function (t, e, n) { var r = t.createEmbeddedView(e || {}); return this.insert(r, n), r; }, t.prototype.createComponent = function (t, e, n, r, o) { var i = n || this.parentInjector; o || t instanceof is || (o = i.get(ss)); var s = t.create(i, r, void 0, o); return this.insert(s.hostView, e), s; }, t.prototype.insert = function (t, e) { if (t.destroyed)
            throw new Error("Cannot insert a destroyed View in a ViewContainer!"); var n = t, r = n._view; return Ge(this._view, this._data, e, r), n.attachToViewContainerRef(this), t; }, t.prototype.move = function (t, e) { if (t.destroyed)
            throw new Error("Cannot move a destroyed View in a ViewContainer!"); var n = this._embeddedViews.indexOf(t._view); return $e(this._data, n, e), t; }, t.prototype.indexOf = function (t) { return this._embeddedViews.indexOf(t._view); }, t.prototype.remove = function (t) { var e = Je(this._data, t); e && Oa.destroyView(e); }, t.prototype.detach = function (t) { var e = Je(this._data, t); return e ? new Ba(e) : null; }, t; }(), Ba = function () { function t(t) { this._view = t, this._viewContainerRef = null, this._appRef = null; } return Object.defineProperty(t.prototype, "rootNodes", { get: function () { return ve(this._view); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this._view.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "destroyed", { get: function () { return 0 != (128 & this._view.state); }, enumerable: !0, configurable: !0 }), t.prototype.markForCheck = function () { re(this._view); }, t.prototype.detach = function () { this._view.state &= -5; }, t.prototype.detectChanges = function () { var t = this._view.root.rendererFactory; t.begin && t.begin(), Oa.checkAndUpdateView(this._view), t.end && t.end(); }, t.prototype.checkNoChanges = function () { Oa.checkNoChangesView(this._view); }, t.prototype.reattach = function () { this._view.state |= 4; }, t.prototype.onDestroy = function (t) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t); }, t.prototype.destroy = function () { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Oa.destroyView(this._view); }, t.prototype.detachFromAppRef = function () { this._appRef = null, en(this._view), Oa.dirtyParentQueries(this._view); }, t.prototype.attachToAppRef = function (t) { if (this._viewContainerRef)
            throw new Error("This view is already attached to a ViewContainer!"); this._appRef = t; }, t.prototype.attachToViewContainerRef = function (t) { if (this._appRef)
            throw new Error("This view is already attached directly to the ApplicationRef!"); this._viewContainerRef = t; }, t; }(), qa = function (t) { function e(e, n) { var r = t.call(this) || this; return r._parentView = e, r._def = n, r; } return Eo.a(e, t), e.prototype.createEmbeddedView = function (t) { return new Ba(Oa.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)); }, Object.defineProperty(e.prototype, "elementRef", { get: function () { return new Ms(Ut(this._parentView, this._def.index).renderElement); }, enumerable: !0, configurable: !0 }), e; }(Bs), za = function () { function t(t, e) { this.view = t, this.elDef = e; } return t.prototype.get = function (t, e) { void 0 === e && (e = mi.THROW_IF_NOT_FOUND); var n = !!this.elDef && 0 != (33554432 & this.elDef.flags); return Oa.resolveDep(this.view, this.elDef, n, { flags: 0, token: t, tokenKey: Yt(t) }, e); }, t; }(), Ka = function () { function t(t) { this.delegate = t; } return t.prototype.selectRootElement = function (t) { return this.delegate.selectRootElement(t); }, t.prototype.createElement = function (t, e) { var n = Se(e), r = n[0], o = n[1], i = this.delegate.createElement(o, r); return t && this.delegate.appendChild(t, i), i; }, t.prototype.createViewRoot = function (t) { return t; }, t.prototype.createTemplateAnchor = function (t) { var e = this.delegate.createComment(""); return t && this.delegate.appendChild(t, e), e; }, t.prototype.createText = function (t, e) { var n = this.delegate.createText(e); return t && this.delegate.appendChild(t, n), n; }, t.prototype.projectNodes = function (t, e) { for (var n = 0; n < e.length; n++)
            this.delegate.appendChild(t, e[n]); }, t.prototype.attachViewAfter = function (t, e) { for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++)
            this.delegate.insertBefore(n, e[o], r); }, t.prototype.detachView = function (t) { for (var e = 0; e < t.length; e++) {
            var n = t[e], r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
        } }, t.prototype.destroyView = function (t, e) { for (var n = 0; n < e.length; n++)
            this.delegate.destroyNode(e[n]); }, t.prototype.listen = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.listenGlobal = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.setElementProperty = function (t, e, n) { this.delegate.setProperty(t, e, n); }, t.prototype.setElementAttribute = function (t, e, n) { var r = Se(e), o = r[0], i = r[1]; null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o); }, t.prototype.setBindingDebugInfo = function (t, e, n) { }, t.prototype.setElementClass = function (t, e, n) { n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e); }, t.prototype.setElementStyle = function (t, e, n) { null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e); }, t.prototype.invokeElementMethod = function (t, e, n) { t[e].apply(t, n); }, t.prototype.setText = function (t, e) { this.delegate.setValue(t, e); }, t.prototype.animate = function () { throw new Error("Renderer.animate is no longer supported!"); }, t; }(), Qa = function () { function t(t, e, n, r) { this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, Be(this); } return t.prototype.get = function (t, e) { return void 0 === e && (e = mi.THROW_IF_NOT_FOUND), qe(this, { token: t, tokenKey: Yt(t), flags: 0 }, e); }, Object.defineProperty(t.prototype, "instance", { get: function () { return this.get(this._moduleType); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentFactoryResolver", { get: function () { return this.get(es); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function () { return this; }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function () { if (this._destroyed)
            throw new Error("The ng module " + s(this.instance.constructor) + " has already been destroyed."); this._destroyed = !0, We(this, 131072), this._destroyListeners.forEach(function (t) { return t(); }); }, t.prototype.onDestroy = function (t) { this._destroyListeners.push(t); }, t; }(), Wa = Yt(As), Ga = Yt(js), Za = Yt(Ms), Ya = Yt(qs), Ja = Yt(Bs), Xa = Yt(zs), $a = Yt(mi), tu = new Object, eu = {}, nu = {}; nu.CreateViewNodes = 0, nu.CheckNoChanges = 1, nu.CheckNoChangesProjectedViews = 2, nu.CheckAndUpdate = 3, nu.CheckAndUpdateProjectedViews = 4, nu.Destroy = 5, nu[nu.CreateViewNodes] = "CreateViewNodes", nu[nu.CheckNoChanges] = "CheckNoChanges", nu[nu.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", nu[nu.CheckAndUpdate] = "CheckAndUpdate", nu[nu.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", nu[nu.Destroy] = "Destroy"; var ru = !1, ou = new Map, iu = {}; iu.create = 0, iu.detectChanges = 1, iu.checkNoChanges = 2, iu.destroy = 3, iu.handleEvent = 4, iu[iu.create] = "create", iu[iu.detectChanges] = "detectChanges", iu[iu.checkNoChanges] = "checkNoChanges", iu[iu.destroy] = "destroy", iu[iu.handleEvent] = "handleEvent"; var su, au, uu, cu = /([A-Z])/g, lu = function () { function t(t, e) { this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e]; for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);)
            n = n.parent; if (!n)
            for (; !n && r;)
                n = ae(r), r = r.parent; this.elDef = n, this.elView = r; } return Object.defineProperty(t.prototype, "elOrCompView", { get: function () { return Ut(this.elView, this.elDef.index).componentView || this.view; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function () { return ln(this.elView, this.elDef); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function () { return this.elOrCompView.component; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function () { return this.elOrCompView.context; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function () { var t = []; if (this.elDef)
                for (var e = this.elDef.index + 1; e <= this.elDef.index + this.elDef.childCount; e++) {
                    var n = this.elView.def.nodes[e];
                    20224 & n.flags && t.push(n.provider.token), e += n.childCount;
                } return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function () { var t = {}; if (this.elDef) {
                eo(this.elView, this.elDef, t);
                for (var e = this.elDef.index + 1; e <= this.elDef.index + this.elDef.childCount; e++) {
                    var n = this.elView.def.nodes[e];
                    20224 & n.flags && eo(this.elView, n, t), e += n.childCount;
                }
            } return t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentRenderElement", { get: function () { var t = to(this.elOrCompView); return t ? t.renderElement : void 0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "renderNode", { get: function () { return 2 & this.nodeDef.flags ? ue(this.view, this.nodeDef) : ue(this.elView, this.elDef); }, enumerable: !0, configurable: !0 }), t.prototype.logError = function (t) { for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]; var r, o; 2 & this.nodeDef.flags ? (r = this.view.def, o = this.nodeDef.index) : (r = this.elView.def, o = this.elDef.index); var i = $r(r, o), s = -1, a = function () { return s++, s === i ? (n = t.error).bind.apply(n, [t].concat(e)) : Ta; var n; }; r.factory(a), s < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, e)); }, t; }(), pu = function () { function t(t) { this.delegate = t; } return t.prototype.createRenderer = function (t, e) { return new fu(this.delegate.createRenderer(t, e)); }, t.prototype.begin = function () { this.delegate.begin && this.delegate.begin(); }, t.prototype.end = function () { this.delegate.end && this.delegate.end(); }, t.prototype.whenRenderingDone = function () { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null); }, t; }(), fu = function () { function t(t) { this.delegate = t; } return Object.defineProperty(t.prototype, "data", { get: function () { return this.delegate.data; }, enumerable: !0, configurable: !0 }), t.prototype.destroyNode = function (t) { Pt(Ot(t)), this.delegate.destroyNode && this.delegate.destroyNode(t); }, t.prototype.destroy = function () { this.delegate.destroy(); }, t.prototype.createElement = function (t, e) { var n = this.delegate.createElement(t, e), r = ro(); if (r) {
            var o = new Zs(n, null, r);
            o.name = t, Tt(o);
        } return n; }, t.prototype.createComment = function (t) { var e = this.delegate.createComment(t), n = ro(); return n && Tt(new Gs(e, null, n)), e; }, t.prototype.createText = function (t) { var e = this.delegate.createText(t), n = ro(); return n && Tt(new Gs(e, null, n)), e; }, t.prototype.appendChild = function (t, e) { var n = Ot(t), r = Ot(e); n && r && n instanceof Zs && n.addChild(r), this.delegate.appendChild(t, e); }, t.prototype.insertBefore = function (t, e, n) { var r = Ot(t), o = Ot(e), i = Ot(n); r && o && r instanceof Zs && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n); }, t.prototype.removeChild = function (t, e) { var n = Ot(t), r = Ot(e); n && r && n instanceof Zs && n.removeChild(r), this.delegate.removeChild(t, e); }, t.prototype.selectRootElement = function (t) { var e = this.delegate.selectRootElement(t), n = ro(); return n && Tt(new Zs(e, null, n)), e; }, t.prototype.setAttribute = function (t, e, n, r) { var o = Ot(t); if (o && o instanceof Zs) {
            var i = r ? r + ":" + e : e;
            o.attributes[i] = n;
        } this.delegate.setAttribute(t, e, n, r); }, t.prototype.removeAttribute = function (t, e, n) { var r = Ot(t); if (r && r instanceof Zs) {
            var o = n ? n + ":" + e : e;
            r.attributes[o] = null;
        } this.delegate.removeAttribute(t, e, n); }, t.prototype.addClass = function (t, e) { var n = Ot(t); n && n instanceof Zs && (n.classes[e] = !0), this.delegate.addClass(t, e); }, t.prototype.removeClass = function (t, e) { var n = Ot(t); n && n instanceof Zs && (n.classes[e] = !1), this.delegate.removeClass(t, e); }, t.prototype.setStyle = function (t, e, n, r) { var o = Ot(t); o && o instanceof Zs && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r); }, t.prototype.removeStyle = function (t, e, n) { var r = Ot(t); r && r instanceof Zs && (r.styles[e] = null), this.delegate.removeStyle(t, e, n); }, t.prototype.setProperty = function (t, e, n) { var r = Ot(t); r && r instanceof Zs && (r.properties[e] = n), this.delegate.setProperty(t, e, n); }, t.prototype.listen = function (t, e, n) { if ("string" != typeof t) {
            var r = Ot(t);
            r && r.listeners.push(new Ws(e, n));
        } return this.delegate.listen(t, e, n); }, t.prototype.parentNode = function (t) { return this.delegate.parentNode(t); }, t.prototype.nextSibling = function (t) { return this.delegate.nextSibling(t); }, t.prototype.setValue = function (t, e) { return this.delegate.setValue(t, e); }, t; }(), hu = function (t) { function e(e, n, r) { var o = t.call(this) || this; return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o; } return Eo.a(e, t), e.prototype.create = function (t) { Er(); var e = me(this._ngModuleDefFactory); return Oa.createNgModuleRef(this.moduleType, t || mi.NULL, this._bootstrapComponents, e); }, e; }(as), du = "*"; }).call(e, n("fRUx"));
    }, "0NUP": function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; }, o = this && this.__metadata || function (t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(t, e); };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n("/oeL"), s = function () { function t(t) { this.element = t, this.onMenuToggled = new i.EventEmitter, this.showCaret = !0; } return t.prototype.toggleMenu = function () { this.onMenuToggled.emit(!0); }, t.prototype.getPosition = function () { return this.element.nativeElement.getBoundingClientRect(); }, t; }();
        r([i.Output(), o("design:type", i.EventEmitter)], s.prototype, "onMenuToggled", void 0), r([i.Input(), o("design:type", Object)], s.prototype, "showCaret", void 0), s = r([i.Component({ selector: "ng4-dropdown-button", styleUrls: ["./style.scss"], templateUrl: "./template.html" }), o("design:paramtypes", [i.ElementRef])], s), e.Ng4DropdownButton = s;
    }, "1eQ7": function (t, e, n) {
        "use strict";
        function r(t, e, n) { return this.lift(new a(t, e, n, this)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+"), s = n("TpsG");
        e.first = r;
        var a = function () { function t(t, e, n, r) { this.predicate = t, this.resultSelector = e, this.defaultValue = n, this.source = r; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.predicate, this.resultSelector, this.defaultValue, this.source)); }, t; }(), u = function (t) { function e(e, n, r, o, i) { t.call(this, e), this.predicate = n, this.resultSelector = r, this.defaultValue = o, this.source = i, this.index = 0, this.hasCompleted = !1, this._emitted = !1; } return o(e, t), e.prototype._next = function (t) { var e = this.index++; this.predicate ? this._tryPredicate(t, e) : this._emit(t, e); }, e.prototype._tryPredicate = function (t, e) { var n; try {
            n = this.predicate(t, e, this.source);
        }
        catch (t) {
            return void this.destination.error(t);
        } n && this._emit(t, e); }, e.prototype._emit = function (t, e) { if (this.resultSelector)
            return void this._tryResultSelector(t, e); this._emitFinal(t); }, e.prototype._tryResultSelector = function (t, e) { var n; try {
            n = this.resultSelector(t, e);
        }
        catch (t) {
            return void this.destination.error(t);
        } this._emitFinal(n); }, e.prototype._emitFinal = function (t) { var e = this.destination; this._emitted || (this._emitted = !0, e.next(t), e.complete(), this.hasCompleted = !0); }, e.prototype._complete = function () { var t = this.destination; this.hasCompleted || void 0 === this.defaultValue ? this.hasCompleted || t.error(new s.EmptyError) : (t.next(this.defaultValue), t.complete()); }, e; }(i.Subscriber);
    }, "2B7B": function (t, e, n) {
        "use strict";
        function r(t) { var e = t.Symbol; if ("function" == typeof e)
            return e.iterator || (e.iterator = e("iterator polyfill")), e.iterator; var n = t.Set; if (n && "function" == typeof (new n)["@@iterator"])
            return "@@iterator"; var r = t.Map; if (r)
            for (var o = Object.getOwnPropertyNames(r.prototype), i = 0; i < o.length; ++i) {
                var s = o[i];
                if ("entries" !== s && "size" !== s && r.prototype[s] === r.prototype.entries)
                    return s;
            } return "@@iterator"; }
        var o = n("zijX");
        e.symbolIteratorPonyfill = r, e.iterator = r(o.root), e.$$iterator = e.iterator;
    }, "3lsR": function (t, e, n) {
        "use strict";
        var r = n("bKpL"), o = function () { function t(t, e, n) { this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t; } return t.prototype.observe = function (t) { switch (this.kind) {
            case "N": return t.next && t.next(this.value);
            case "E": return t.error && t.error(this.error);
            case "C": return t.complete && t.complete();
        } }, t.prototype.do = function (t, e, n) { switch (this.kind) {
            case "N": return t && t(this.value);
            case "E": return e && e(this.error);
            case "C": return n && n();
        } }, t.prototype.accept = function (t, e, n) { return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n); }, t.prototype.toObservable = function () { switch (this.kind) {
            case "N": return r.Observable.of(this.value);
            case "E": return r.Observable.throw(this.error);
            case "C": return r.Observable.empty();
        } throw new Error("unexpected notification kind value"); }, t.createNext = function (e) { return void 0 !== e ? new t("N", e) : t.undefinedValueNotification; }, t.createError = function (e) { return new t("E", void 0, e); }, t.createComplete = function () { return t.completeNotification; }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t; }();
        e.Notification = o;
    }, "422b": function (t, e, n) {
        "use strict";
        function r(t, e) { return this.lift(new s(t, e)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+");
        e.filter = r;
        var s = function () { function t(t, e) { this.predicate = t, this.thisArg = e; } return t.prototype.call = function (t, e) { return e.subscribe(new a(t, this.predicate, this.thisArg)); }, t; }(), a = function (t) { function e(e, n, r) { t.call(this, e), this.predicate = n, this.thisArg = r, this.count = 0; } return o(e, t), e.prototype._next = function (t) { var e; try {
            e = this.predicate.call(this.thisArg, t, this.count++);
        }
        catch (t) {
            return void this.destination.error(t);
        } e && this.destination.next(t); }, e; }(i.Subscriber);
    }, "6Xbx": function (t, e, n) {
        "use strict";
        function r(t, e) { function n() { this.constructor = t; } o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }
        e.a = r;
        var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]); };
        Object.assign;
    }, "7JOC": function (t, e, n) {
        "use strict";
        var r = n("OWbQ");
        e.from = r.FromObservable.create;
    }, AHF9: function (t, e, n) {
        "use strict";
        function r(t, e) { return void 0 === e && (e = 0), this.lift(new a(t, e)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+"), s = n("3lsR");
        e.observeOn = r;
        var a = function () { function t(t, e) { void 0 === e && (e = 0), this.scheduler = t, this.delay = e; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.scheduler, this.delay)); }, t; }();
        e.ObserveOnOperator = a;
        var u = function (t) { function e(e, n, r) { void 0 === r && (r = 0), t.call(this, e), this.scheduler = n, this.delay = r; } return o(e, t), e.dispatch = function (t) { var e = t.notification, n = t.destination; e.observe(n), this.unsubscribe(); }, e.prototype.scheduleMessage = function (t) { this.add(this.scheduler.schedule(e.dispatch, this.delay, new c(t, this.destination))); }, e.prototype._next = function (t) { this.scheduleMessage(s.Notification.createNext(t)); }, e.prototype._error = function (t) { this.scheduleMessage(s.Notification.createError(t)); }, e.prototype._complete = function () { this.scheduleMessage(s.Notification.createComplete()); }, e; }(i.Subscriber);
        e.ObserveOnSubscriber = u;
        var c = function () { function t(t, e) { this.notification = t, this.destination = e; } return t; }();
        e.ObserveOnMessage = c;
    }, BkNc: function (t, e, n) {
        "use strict";
        function r(t) { return new Be(t); }
        function o(t) { var e = Error("NavigationCancelingError: " + t); return e[qe] = !0, e; }
        function i(t) { return t[qe]; }
        function s(t, e, n) { var r = n.path.split("/"); if (r.length > t.length)
            return null; if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length))
            return null; for (var o = {}, i = 0; i < r.length; i++) {
            var s = r[i], a = t[i];
            if (s.startsWith(":"))
                o[s.substring(1)] = a;
            else if (s !== a.path)
                return null;
        } return { consumed: t.slice(0, r.length), posParams: o }; }
        function a(t, e) { void 0 === e && (e = ""); for (var n = 0; n < t.length; n++) {
            var r = t[n];
            u(r, c(e, r));
        } }
        function u(t, e) { if (!t)
            throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "); if (Array.isArray(t))
            throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified"); if (!t.component && t.outlet && t.outlet !== He)
            throw new Error("Invalid configuration of route '" + e + "': a componentless route cannot have a named outlet set"); if (t.redirectTo && t.children)
            throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together"); if (t.redirectTo && t.loadChildren)
            throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together"); if (t.children && t.loadChildren)
            throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together"); if (t.redirectTo && t.component)
            throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together"); if (t.path && t.matcher)
            throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together"); if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
            throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren"); if (void 0 === t.path && void 0 === t.matcher)
            throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified"); if ("string" == typeof t.path && "/" === t.path.charAt(0))
            throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash"); if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) {
            throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
        } if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch)
            throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'"); t.children && a(t.children, e); }
        function c(t, e) { return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t; }
        function l(t, e) { if (t.length !== e.length)
            return !1; for (var n = 0; n < t.length; ++n)
            if (!p(t[n], e[n]))
                return !1; return !0; }
        function p(t, e) { var n = Object.keys(t), r = Object.keys(e); if (n.length != r.length)
            return !1; for (var o, i = 0; i < n.length; i++)
            if (o = n[i], t[o] !== e[o])
                return !1; return !0; }
        function f(t) { return Array.prototype.concat.apply([], t); }
        function h(t) { return t.length > 0 ? t[t.length - 1] : null; }
        function d(t, e) { for (var n in t)
            t.hasOwnProperty(n) && e(t[n], n); }
        function y(t, e) { if (0 === Object.keys(t).length)
            return n.i(de.of)({}); var r = [], o = [], i = {}; d(t, function (t, n) { var s = be.map.call(e(n, t), function (t) { return i[n] = t; }); n === He ? r.push(s) : o.push(s); }); var s = Ee.concatAll.call(de.of.apply(void 0, r.concat(o))), a = ge.last.call(s); return be.map.call(a, function () { return i; }); }
        function m(t) { var e = Pe.mergeAll.call(t); return me.every.call(e, function (t) { return !0 === t; }); }
        function v(t) { return n.i(le["ɵisObservable"])(t) ? t : n.i(le["ɵisPromise"])(t) ? n.i(Te.fromPromise)(Promise.resolve(t)) : n.i(de.of)(t); }
        function g() { return new Ke(new Qe([], {}), {}, null); }
        function b(t, e, n) { return n ? _(t.queryParams, e.queryParams) && w(t.root, e.root) : C(t.queryParams, e.queryParams) && S(t.root, e.root); }
        function _(t, e) { return p(t, e); }
        function w(t, e) { if (!T(t.segments, e.segments))
            return !1; if (t.numberOfChildren !== e.numberOfChildren)
            return !1; for (var n in e.children) {
            if (!t.children[n])
                return !1;
            if (!w(t.children[n], e.children[n]))
                return !1;
        } return !0; }
        function C(t, e) { return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function (n) { return e[n] === t[n]; }); }
        function S(t, e) { return E(t, e, e.segments); }
        function E(t, e, n) { if (t.segments.length > n.length) {
            var r = t.segments.slice(0, n.length);
            return !!T(r, n) && !e.hasChildren();
        } if (t.segments.length === n.length) {
            if (!T(t.segments, n))
                return !1;
            for (var o in e.children) {
                if (!t.children[o])
                    return !1;
                if (!S(t.children[o], e.children[o]))
                    return !1;
            }
            return !0;
        } var r = n.slice(0, t.segments.length), i = n.slice(t.segments.length); return !!T(t.segments, r) && (!!t.children[He] && E(t.children[He], e, i)); }
        function O(t, e) { return T(t, e) && t.every(function (t, n) { return p(t.parameters, e[n].parameters); }); }
        function T(t, e) { return t.length === e.length && t.every(function (t, n) { return t.path === e[n].path; }); }
        function P(t, e) { var n = []; return d(t.children, function (t, r) { r === He && (n = n.concat(e(t, r))); }), d(t.children, function (t, r) { r !== He && (n = n.concat(e(t, r))); }), n; }
        function x(t) { return t.segments.map(function (t) { return N(t); }).join("/"); }
        function R(t, e) { if (!t.hasChildren())
            return x(t); if (e) {
            var n = t.children[He] ? R(t.children[He], !1) : "", r = [];
            return d(t.children, function (t, e) { e !== He && r.push(e + ":" + R(t, !1)); }), r.length > 0 ? n + "(" + r.join("//") + ")" : n;
        } var o = P(t, function (e, n) { return n === He ? [R(t.children[He], !1)] : [n + ":" + R(e, !1)]; }); return x(t) + "/(" + o.join("//") + ")"; }
        function A(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";"); }
        function k(t) { return decodeURIComponent(t); }
        function N(t) { return "" + A(t.path) + I(t.parameters); }
        function I(t) { return Object.keys(t).map(function (e) { return ";" + A(e) + "=" + A(t[e]); }).join(""); }
        function j(t) { var e = Object.keys(t).map(function (e) { var n = t[e]; return Array.isArray(n) ? n.map(function (t) { return A(e) + "=" + A(t); }).join("&") : A(e) + "=" + A(n); }); return e.length ? "?" + e.join("&") : ""; }
        function M(t) { var e = t.match(Je); return e ? e[0] : ""; }
        function D(t) { var e = t.match(Xe); return e ? e[0] : ""; }
        function L(t) { var e = t.match($e); return e ? e[0] : ""; }
        function F(t) { return new Ce.Observable(function (e) { return e.error(new en(t)); }); }
        function V(t) { return new Ce.Observable(function (e) { return e.error(new nn(t)); }); }
        function U(t) { return new Ce.Observable(function (e) { return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'")); }); }
        function H(t) { return new Ce.Observable(function (e) { return e.error(o("Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false")); }); }
        function B(t, e, n, r, o) { return new rn(t, e, n, r, o).apply(); }
        function q(t, e) { var r = e.canLoad; return r && 0 !== r.length ? m(be.map.call(n.i(he.from)(r), function (n) { var r = t.get(n); return v(r.canLoad ? r.canLoad(e) : r(e)); })) : n.i(de.of)(!0); }
        function z(t, e, n) { if ("" === e.path)
            return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} } : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; var r = e.matcher || s, o = r(n, t, e); return o ? { matched: !0, consumedSegments: o.consumed, lastChild: o.consumed.length, positionalParamSegments: o.posParams } : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }; }
        function K(t, e, n, r) { if (n.length > 0 && Z(t, n, r)) {
            var o = new Qe(e, G(r, new Qe(n, t.children)));
            return { segmentGroup: Q(o), slicedSegments: [] };
        } if (0 === n.length && Y(t, n, r)) {
            var o = new Qe(t.segments, W(t, n, r, t.children));
            return { segmentGroup: Q(o), slicedSegments: n };
        } return { segmentGroup: t, slicedSegments: n }; }
        function Q(t) { if (1 === t.numberOfChildren && t.children[He]) {
            var e = t.children[He];
            return new Qe(t.segments.concat(e.segments), e.children);
        } return t; }
        function W(t, e, n, r) { for (var o = {}, i = 0, s = n; i < s.length; i++) {
            var a = s[i];
            J(t, e, a) && !r[X(a)] && (o[X(a)] = new Qe([], {}));
        } return Object.assign({}, r, o); }
        function G(t, e) { var n = {}; n[He] = e; for (var r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            "" === i.path && X(i) !== He && (n[X(i)] = new Qe([], {}));
        } return n; }
        function Z(t, e, n) { return n.some(function (n) { return J(t, e, n) && X(n) !== He; }); }
        function Y(t, e, n) { return n.some(function (n) { return J(t, e, n); }); }
        function J(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && ("" === n.path && void 0 !== n.redirectTo); }
        function X(t) { return t.outlet || He; }
        function $(t, e) { if (t === e.value)
            return e; for (var n = 0, r = e.children; n < r.length; n++) {
            var o = r[n], i = $(t, o);
            if (i)
                return i;
        } return null; }
        function tt(t, e) { if (t === e.value)
            return [e]; for (var n = 0, r = e.children; n < r.length; n++) {
            var o = r[n], i = tt(t, o);
            if (i.length)
                return i.unshift(e), i;
        } return []; }
        function et(t, e) { var n = nt(t, e), r = new pe.BehaviorSubject([new We("", {})]), o = new pe.BehaviorSubject({}), i = new pe.BehaviorSubject({}), s = new pe.BehaviorSubject({}), a = new pe.BehaviorSubject(""), u = new un(r, o, s, a, i, He, e, n.root); return u.snapshot = n.root, new an(new sn(u, []), n); }
        function nt(t, e) { var n = {}, r = {}, o = {}, i = new cn([], n, o, "", r, He, e, null, t.root, -1, {}); return new ln("", new sn(i, [])); }
        function rt(t) { for (var e = t.pathFromRoot, n = e.length - 1; n >= 1;) {
            var r = e[n], o = e[n - 1];
            if (r.routeConfig && "" === r.routeConfig.path)
                n--;
            else {
                if (o.component)
                    break;
                n--;
            }
        } return e.slice(n).reduce(function (t, e) { return { params: Object.assign({}, t.params, e.params), data: Object.assign({}, t.data, e.data), resolve: Object.assign({}, t.resolve, e._resolvedData) }; }, { params: {}, data: {}, resolve: {} }); }
        function ot(t, e) { e.value._routerState = t, e.children.forEach(function (e) { return ot(t, e); }); }
        function it(t) { var e = t.children.length > 0 ? " { " + t.children.map(it).join(", ") + " } " : ""; return "" + t.value + e; }
        function st(t) { if (t.snapshot) {
            var e = t.snapshot, n = t._futureSnapshot;
            t.snapshot = n, p(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), p(e.params, n.params) || t.params.next(n.params), l(e.url, n.url) || t.url.next(n.url), p(e.data, n.data) || t.data.next(n.data);
        }
        else
            t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data); }
        function at(t, e) { var n = p(t.params, e.params) && O(t.url, e.url), r = !t.parent != !e.parent; return n && !r && (!t.parent || at(t.parent, e.parent)); }
        function ut(t, e, n) { var r = ct(t, e._root, n ? n._root : void 0); return new an(r, e); }
        function ct(t, e, n) { if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
            var r = n.value;
            r._futureSnapshot = e.value;
            var o = pt(t, e, n);
            return new sn(r, o);
        } if (t.retrieve(e.value)) {
            var i = t.retrieve(e.value).route;
            return lt(e, i), i;
        } var r = ft(e.value), o = e.children.map(function (e) { return ct(t, e); }); return new sn(r, o); }
        function lt(t, e) { if (t.value.routeConfig !== e.value.routeConfig)
            throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route"); if (t.children.length !== e.children.length)
            throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children"); e.value._futureSnapshot = t.value; for (var n = 0; n < t.children.length; ++n)
            lt(t.children[n], e.children[n]); }
        function pt(t, e, n) { return e.children.map(function (e) { for (var r = 0, o = n.children; r < o.length; r++) {
            var i = o[r];
            if (t.shouldReuseRoute(i.value.snapshot, e.value))
                return ct(t, e, i);
        } return ct(t, e); }); }
        function ft(t) { return new un(new pe.BehaviorSubject(t.url), new pe.BehaviorSubject(t.params), new pe.BehaviorSubject(t.queryParams), new pe.BehaviorSubject(t.fragment), new pe.BehaviorSubject(t.data), t.outlet, t.component, t); }
        function ht(t, e, n, r, o) { if (0 === n.length)
            return yt(e.root, e.root, e, r, o); var i = vt(n); if (i.toRoot())
            return yt(e.root, new Qe([], {}), e, r, o); var s = gt(i, e, t), a = s.processChildren ? St(s.segmentGroup, s.index, i.commands) : Ct(s.segmentGroup, s.index, i.commands); return yt(s.segmentGroup, a, e, r, o); }
        function dt(t) { return "object" == typeof t && null != t && !t.outlets && !t.segmentPath; }
        function yt(t, e, n, r, o) { var i = {}; return r && d(r, function (t, e) { i[e] = Array.isArray(t) ? t.map(function (t) { return "" + t; }) : "" + t; }), n.root === t ? new Ke(e, i, o) : new Ke(mt(n.root, t, e), i, o); }
        function mt(t, e, n) { var r = {}; return d(t.children, function (t, o) { r[o] = t === e ? n : mt(t, e, n); }), new Qe(t.segments, r); }
        function vt(t) { if ("string" == typeof t[0] && 1 === t.length && "/" === t[0])
            return new pn(!0, 0, t); var e = 0, n = !1, r = t.reduce(function (t, r, o) { if ("object" == typeof r && null != r) {
            if (r.outlets) {
                var i = {};
                return d(r.outlets, function (t, e) { i[e] = "string" == typeof t ? t.split("/") : t; }), t.concat([{ outlets: i }]);
            }
            if (r.segmentPath)
                return t.concat([r.segmentPath]);
        } return "string" != typeof r ? t.concat([r]) : 0 === o ? (r.split("/").forEach(function (r, o) { 0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r)); }), t) : t.concat([r]); }, []); return new pn(n, e, r); }
        function gt(t, e, n) { if (t.isAbsolute)
            return new fn(e.root, !0, 0); if (-1 === n.snapshot._lastPathIndex)
            return new fn(n.snapshot._urlSegment, !0, 0); var r = dt(t.commands[0]) ? 0 : 1, o = n.snapshot._lastPathIndex + r; return bt(n.snapshot._urlSegment, o, t.numberOfDoubleDots); }
        function bt(t, e, n) { for (var r = t, o = e, i = n; i > o;) {
            if (i -= o, !(r = r.parent))
                throw new Error("Invalid number of '../'");
            o = r.segments.length;
        } return new fn(r, !1, o - i); }
        function _t(t) { return "object" == typeof t && null != t && t.outlets ? t.outlets[He] : "" + t; }
        function wt(t) { return "object" != typeof t[0] ? (e = {}, e[He] = t, e) : void 0 === t[0].outlets ? (n = {}, n[He] = t, n) : t[0].outlets; var e, n; }
        function Ct(t, e, n) { if (t || (t = new Qe([], {})), 0 === t.segments.length && t.hasChildren())
            return St(t, e, n); var r = Et(t, e, n), o = n.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
            var i = new Qe(t.segments.slice(0, r.pathIndex), {});
            return i.children[He] = new Qe(t.segments.slice(r.pathIndex), t.children), St(i, 0, o);
        } return r.match && 0 === o.length ? new Qe(t.segments, {}) : r.match && !t.hasChildren() ? Ot(t, e, n) : r.match ? St(t, 0, o) : Ot(t, e, n); }
        function St(t, e, n) { if (0 === n.length)
            return new Qe(t.segments, {}); var r = wt(n), o = {}; return d(r, function (n, r) { null !== n && (o[r] = Ct(t.children[r], e, n)); }), d(t.children, function (t, e) { void 0 === r[e] && (o[e] = t); }), new Qe(t.segments, o); }
        function Et(t, e, n) { for (var r = 0, o = e, i = { match: !1, pathIndex: 0, commandIndex: 0 }; o < t.segments.length;) {
            if (r >= n.length)
                return i;
            var s = t.segments[o], a = _t(n[r]), u = r < n.length - 1 ? n[r + 1] : null;
            if (o > 0 && void 0 === a)
                break;
            if (a && u && "object" == typeof u && void 0 === u.outlets) {
                if (!xt(a, u, s))
                    return i;
                r += 2;
            }
            else {
                if (!xt(a, {}, s))
                    return i;
                r++;
            }
            o++;
        } return { match: !0, pathIndex: o, commandIndex: r }; }
        function Ot(t, e, n) { for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
            if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                var i = Tt(n[o].outlets);
                return new Qe(r, i);
            }
            if (0 === o && dt(n[0])) {
                var s = t.segments[e];
                r.push(new We(s.path, n[0])), o++;
            }
            else {
                var a = _t(n[o]), u = o < n.length - 1 ? n[o + 1] : null;
                a && u && dt(u) ? (r.push(new We(a, Pt(u))), o += 2) : (r.push(new We(a, {})), o++);
            }
        } return new Qe(r, {}); }
        function Tt(t) { var e = {}; return d(t, function (t, n) { null !== t && (e[n] = Ot(new Qe([], {}), 0, t)); }), e; }
        function Pt(t) { var e = {}; return d(t, function (t, n) { return e[n] = "" + t; }), e; }
        function xt(t, e, n) { return t == n.path && p(e, n.parameters); }
        function Rt(t, e, n, r) { return new dn(t, e, n, r).recognize(); }
        function At(t) { t.sort(function (t, e) { return t.value.outlet === He ? -1 : e.value.outlet === He ? 1 : t.value.outlet.localeCompare(e.value.outlet); }); }
        function kt(t) { return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []; }
        function Nt(t, e, n) { if ("" === e.path) {
            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0))
                throw new hn;
            return { consumedSegments: [], lastChild: 0, parameters: {} };
        } var r = e.matcher || s, o = r(n, t, e); if (!o)
            throw new hn; var i = {}; d(o.posParams, function (t, e) { i[e] = t.path; }); var a = o.consumed.length > 0 ? Object.assign({}, i, o.consumed[o.consumed.length - 1].parameters) : i; return { consumedSegments: o.consumed, lastChild: o.consumed.length, parameters: a }; }
        function It(t) { var e = {}; t.forEach(function (t) { var n = e[t.value.outlet]; if (n) {
            var r = n.url.map(function (t) { return t.toString(); }).join("/"), o = t.value.url.map(function (t) { return t.toString(); }).join("/");
            throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.");
        } e[t.value.outlet] = t.value; }); }
        function jt(t) { for (var e = t; e._sourceSegment;)
            e = e._sourceSegment; return e; }
        function Mt(t) { for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;)
            e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0; return n - 1; }
        function Dt(t, e, n, r) { if (n.length > 0 && Vt(t, n, r)) {
            var o = new Qe(e, Ft(t, e, r, new Qe(n, t.children)));
            return o._sourceSegment = t, o._segmentIndexShift = e.length, { segmentGroup: o, slicedSegments: [] };
        } if (0 === n.length && Ut(t, n, r)) {
            var i = new Qe(t.segments, Lt(t, n, r, t.children));
            return i._sourceSegment = t, i._segmentIndexShift = e.length, { segmentGroup: i, slicedSegments: n };
        } var s = new Qe(t.segments, t.children); return s._sourceSegment = t, s._segmentIndexShift = e.length, { segmentGroup: s, slicedSegments: n }; }
        function Lt(t, e, n, r) { for (var o = {}, i = 0, s = n; i < s.length; i++) {
            var a = s[i];
            if (Ht(t, e, a) && !r[Bt(a)]) {
                var u = new Qe([], {});
                u._sourceSegment = t, u._segmentIndexShift = t.segments.length, o[Bt(a)] = u;
            }
        } return Object.assign({}, r, o); }
        function Ft(t, e, n, r) { var o = {}; o[He] = r, r._sourceSegment = t, r._segmentIndexShift = e.length; for (var i = 0, s = n; i < s.length; i++) {
            var a = s[i];
            if ("" === a.path && Bt(a) !== He) {
                var u = new Qe([], {});
                u._sourceSegment = t, u._segmentIndexShift = e.length, o[Bt(a)] = u;
            }
        } return o; }
        function Vt(t, e, n) { return n.some(function (n) { return Ht(t, e, n) && Bt(n) !== He; }); }
        function Ut(t, e, n) { return n.some(function (n) { return Ht(t, e, n); }); }
        function Ht(t, e, n) { return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && ("" === n.path && void 0 === n.redirectTo); }
        function Bt(t) { return t.outlet || He; }
        function qt(t) { return t.data || {}; }
        function zt(t) { return t.resolve || {}; }
        function Kt(t) { throw t; }
        function Qt(t) { return n.i(de.of)(null); }
        function Wt(t) { st(t.value), t.children.forEach(Wt); }
        function Gt(t) { for (var e = t.parent; e; e = e.parent) {
            var n = e._routeConfig;
            if (n && n._loadedConfig)
                return n._loadedConfig;
            if (n && n.component)
                return null;
        } return null; }
        function Zt(t) { if (!t)
            return null; for (var e = t.parent; e; e = e.parent) {
            var n = e._routeConfig;
            if (n && n._loadedConfig)
                return n._loadedConfig;
        } return null; }
        function Yt(t) { var e = {}; return t && t.children.forEach(function (t) { return e[t.value.outlet] = t; }), e; }
        function Jt(t) { for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (null == n)
                throw new Error("The requested path contains " + n + " segment at index " + e);
        } }
        function Xt(t) { return "" === t || !!t; }
        function $t() { return new le.NgProbeToken("Router", wn); }
        function te(t, e, n) { return void 0 === n && (n = {}), n.useHash ? new ce.HashLocationStrategy(t, e) : new ce.PathLocationStrategy(t, e); }
        function ee(t) { if (t)
            throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."); return "guarded"; }
        function ne(t) { return [{ provide: le.ANALYZE_FOR_ENTRY_COMPONENTS, multi: !0, useValue: t }, { provide: vn, multi: !0, useValue: t }]; }
        function re(t, e, r, o, i, s, a, u, c, l, p) { void 0 === c && (c = {}); var h = new wn(null, e, r, o, i, s, a, f(u)); if (l && (h.urlHandlingStrategy = l), p && (h.routeReuseStrategy = p), c.errorHandler && (h.errorHandler = c.errorHandler), c.enableTracing) {
            var d = n.i(xe.v)();
            h.events.subscribe(function (t) { d.logGroup("Router Event: " + t.constructor.name), d.log(t.toString()), d.log(t), d.logGroupEnd(); });
        } return h; }
        function oe(t) { return t.routerState.root; }
        function ie(t) { return t.appInitializer.bind(t); }
        function se(t) { return t.bootstrapListener.bind(t); }
        function ae() { return [Bn, { provide: le.APP_INITIALIZER, multi: !0, useFactory: ie, deps: [Bn] }, { provide: qn, useFactory: se, deps: [Bn] }, { provide: le.APP_BOOTSTRAP_LISTENER, multi: !0, useExisting: qn }]; }
        var ue = n("6Xbx"), ce = n("qbdv"), le = n("/oeL"), pe = n("gvep"), fe = (n.n(pe), n("rlar")), he = (n.n(fe), n("7JOC")), de = (n.n(he), n("+zVg")), ye = (n.n(de), n("TQn8")), me = (n.n(ye), n("THYR")), ve = (n.n(me), n("1eQ7")), ge = (n.n(ve), n("WSkQ")), be = (n.n(ge), n("lx+J")), _e = (n.n(be), n("cPhF")), we = (n.n(_e), n("Tq0x")), Ce = (n.n(we), n("bKpL")), Se = (n.n(Ce), n("ueUM")), Ee = (n.n(Se), n("I3ay")), Oe = (n.n(Ee), n("TpsG")), Te = (n.n(Oe), n("QU9E")), Pe = (n.n(Te), n("TIdC")), xe = (n.n(Pe), n("fc+i")), Re = n("422b");
        n.n(Re);
        n.d(e, "A", function () { return Tn; }), n.d(e, "z", function () { return Pn; }), n.d(e, "y", function () { return kn; }), n.d(e, "w", function () { return yn; }), n.d(e, "c", function () { return wn; }), n.d(e, "t", function () { return vn; }), n.d(e, "r", function () { return Fn; }), n.d(e, "h", function () { return qn; }), n.d(e, "x", function () { return Hn; }), n.d(e, "q", function () { return An; }), n.d(e, "d", function () { return Mn; }), n.d(e, "g", function () { return jn; }), n.d(e, "e", function () { return In; }), n.d(e, "f", function () { return Dn; }), n.d(e, "a", function () { return un; }), n.d(e, "v", function () { return bn; }), n.d(e, "p", function () { return Ze; }), n.d(e, "o", function () { return Ge; }), n.d(e, "m", function () { return Vn; }), n.d(e, "j", function () { return Bn; }), n.d(e, "l", function () { return ie; }), n.d(e, "i", function () { return se; }), n.d(e, "n", function () { return ee; }), n.d(e, "s", function () { return te; }), n.d(e, "b", function () { return oe; }), n.d(e, "k", function () { return $t; }), n.d(e, "u", function () { return re; });
        var Ae = function () { function t(t, e) { this.id = t, this.url = e; } return t.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; }, t; }(), ke = function () { function t(t, e, n) { this.id = t, this.url = e, this.urlAfterRedirects = n; } return t.prototype.toString = function () { return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"; }, t; }(), Ne = function () { function t(t, e, n) { this.id = t, this.url = e, this.reason = n; } return t.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; }, t; }(), Ie = function () { function t(t, e, n) { this.id = t, this.url = e, this.error = n; } return t.prototype.toString = function () { return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"; }, t; }(), je = function () { function t(t, e, n, r) { this.id = t, this.url = e, this.urlAfterRedirects = n, this.state = r; } return t.prototype.toString = function () { return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"; }, t; }(), Me = function () { function t(t) { this.route = t; } return t.prototype.toString = function () { return "RouteConfigLoadStart(path: " + this.route.path + ")"; }, t; }(), De = function () { function t(t) { this.route = t; } return t.prototype.toString = function () { return "RouteConfigLoadEnd(path: " + this.route.path + ")"; }, t; }(), Le = function () { function t(t, e, n, r) { this.id = t, this.url = e, this.urlAfterRedirects = n, this.state = r; } return t.prototype.toString = function () { return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"; }, t; }(), Fe = function () { function t(t, e, n, r, o) { this.id = t, this.url = e, this.urlAfterRedirects = n, this.state = r, this.shouldActivate = o; } return t.prototype.toString = function () { return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"; }, t; }(), Ve = function () { function t(t, e, n, r) { this.id = t, this.url = e, this.urlAfterRedirects = n, this.state = r; } return t.prototype.toString = function () { return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"; }, t; }(), Ue = function () { function t(t, e, n, r) { this.id = t, this.url = e, this.urlAfterRedirects = n, this.state = r; } return t.prototype.toString = function () { return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"; }, t; }(), He = "primary", Be = function () { function t(t) { this.params = t || {}; } return t.prototype.has = function (t) { return this.params.hasOwnProperty(t); }, t.prototype.get = function (t) { if (this.has(t)) {
            var e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
        } return null; }, t.prototype.getAll = function (t) { if (this.has(t)) {
            var e = this.params[t];
            return Array.isArray(e) ? e : [e];
        } return []; }, Object.defineProperty(t.prototype, "keys", { get: function () { return Object.keys(this.params); }, enumerable: !0, configurable: !0 }), t; }(), qe = "ngNavigationCancelingError", ze = function () { function t(t, e) { this.routes = t, this.module = e; } return t; }(), Ke = function () { function t(t, e, n) { this.root = t, this.queryParams = e, this.fragment = n; } return Object.defineProperty(t.prototype, "queryParamMap", { get: function () { return this._queryParamMap || (this._queryParamMap = r(this.queryParams)), this._queryParamMap; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return Ye.serialize(this); }, t; }(), Qe = function () { function t(t, e) { var n = this; this.segments = t, this.children = e, this.parent = null, d(e, function (t, e) { return t.parent = n; }); } return t.prototype.hasChildren = function () { return this.numberOfChildren > 0; }, Object.defineProperty(t.prototype, "numberOfChildren", { get: function () { return Object.keys(this.children).length; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return x(this); }, t; }(), We = function () { function t(t, e) { this.path = t, this.parameters = e; } return Object.defineProperty(t.prototype, "parameterMap", { get: function () { return this._parameterMap || (this._parameterMap = r(this.parameters)), this._parameterMap; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return N(this); }, t; }(), Ge = function () { function t() { } return t.prototype.parse = function (t) { }, t.prototype.serialize = function (t) { }, t; }(), Ze = function () { function t() { } return t.prototype.parse = function (t) { var e = new tn(t); return new Ke(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }, t.prototype.serialize = function (t) { return "/" + R(t.root, !0) + j(t.queryParams) + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : ""); }, t; }(), Ye = new Ze, Je = /^[^\/()?;=&#]+/, Xe = /^[^=?&#]+/, $e = /^[^?&#]+/, tn = function () { function t(t) { this.url = t, this.remaining = t; } return t.prototype.parseRootSegment = function () { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Qe([], {}) : new Qe([], this.parseChildren()); }, t.prototype.parseQueryParams = function () { var t = {}; if (this.consumeOptional("?"))
            do {
                this.parseQueryParam(t);
            } while (this.consumeOptional("&")); return t; }, t.prototype.parseFragment = function () { return this.consumeOptional("#") ? decodeURI(this.remaining) : null; }, t.prototype.parseChildren = function () { if ("" === this.remaining)
            return {}; this.consumeOptional("/"); var t = []; for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
            this.capture("/"), t.push(this.parseSegment()); var e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); var n = {}; return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[He] = new Qe(t, e)), n; }, t.prototype.parseSegment = function () { var t = M(this.remaining); if ("" === t && this.peekStartsWith(";"))
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'."); return this.capture(t), new We(k(t), this.parseMatrixParams()); }, t.prototype.parseMatrixParams = function () { for (var t = {}; this.consumeOptional(";");)
            this.parseParam(t); return t; }, t.prototype.parseParam = function (t) { var e = M(this.remaining); if (e) {
            this.capture(e);
            var n = "";
            if (this.consumeOptional("=")) {
                var r = M(this.remaining);
                r && (n = r, this.capture(n));
            }
            t[k(e)] = k(n);
        } }, t.prototype.parseQueryParam = function (t) { var e = D(this.remaining); if (e) {
            this.capture(e);
            var n = "";
            if (this.consumeOptional("=")) {
                var r = L(this.remaining);
                r && (n = r, this.capture(n));
            }
            var o = k(e), i = k(n);
            if (t.hasOwnProperty(o)) {
                var s = t[o];
                Array.isArray(s) || (s = [s], t[o] = s), s.push(i);
            }
            else
                t[o] = i;
        } }, t.prototype.parseParens = function (t) { var e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            var n = M(this.remaining), r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
                throw new Error("Cannot parse url '" + this.url + "'");
            var o = void 0;
            n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = He);
            var i = this.parseChildren();
            e[o] = 1 === Object.keys(i).length ? i[He] : new Qe([], i), this.consumeOptional("//");
        } return e; }, t.prototype.peekStartsWith = function (t) { return this.remaining.startsWith(t); }, t.prototype.consumeOptional = function (t) { return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0); }, t.prototype.capture = function (t) { if (!this.consumeOptional(t))
            throw new Error('Expected "' + t + '".'); }, t; }(), en = function () { function t(t) { this.segmentGroup = t || null; } return t; }(), nn = function () { function t(t) { this.urlTree = t; } return t; }(), rn = function () { function t(t, e, n, r, o) { this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(le.NgModuleRef); } return t.prototype.apply = function () { var t = this, e = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, He), n = be.map.call(e, function (e) { return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment); }); return Se._catch.call(n, function (e) { if (e instanceof nn)
            return t.allowRedirects = !1, t.match(e.urlTree); if (e instanceof en)
            throw t.noMatchError(e); throw e; }); }, t.prototype.match = function (t) { var e = this, n = this.expandSegmentGroup(this.ngModule, this.config, t.root, He), r = be.map.call(n, function (n) { return e.createUrlTree(n, t.queryParams, t.fragment); }); return Se._catch.call(r, function (t) { if (t instanceof en)
            throw e.noMatchError(t); throw t; }); }, t.prototype.noMatchError = function (t) { return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'"); }, t.prototype.createUrlTree = function (t, e, n) { var r = t.segments.length > 0 ? new Qe([], (o = {}, o[He] = t, o)) : t; return new Ke(r, e, n); var o; }, t.prototype.expandSegmentGroup = function (t, e, n, r) { return 0 === n.segments.length && n.hasChildren() ? be.map.call(this.expandChildren(t, e, n), function (t) { return new Qe([], t); }) : this.expandSegment(t, n, e, n.segments, r, !0); }, t.prototype.expandChildren = function (t, e, n) { var r = this; return y(n.children, function (n, o) { return r.expandSegmentGroup(t, e, o, n); }); }, t.prototype.expandSegment = function (t, e, r, o, i, s) { var a = this, u = de.of.apply(void 0, r), c = be.map.call(u, function (u) { var c = a.expandSegmentAgainstRoute(t, e, r, u, o, i, s); return Se._catch.call(c, function (t) { if (t instanceof en)
            return n.i(de.of)(null); throw t; }); }), l = Ee.concatAll.call(c), p = ve.first.call(l, function (t) { return !!t; }); return Se._catch.call(p, function (t, r) { if (t instanceof Oe.EmptyError) {
            if (a.noLeftoversInUrl(e, o, i))
                return n.i(de.of)(new Qe([], {}));
            throw new en(e);
        } throw t; }); }, t.prototype.noLeftoversInUrl = function (t, e, n) { return 0 === e.length && !t.children[n]; }, t.prototype.expandSegmentAgainstRoute = function (t, e, n, r, o, i, s) { return X(r) !== i ? F(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : s && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : F(e); }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) { return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i); }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (t, e, n, r) { var o = this, i = this.applyRedirectCommands([], n.redirectTo, {}); return n.redirectTo.startsWith("/") ? V(i) : _e.mergeMap.call(this.lineralizeSegments(n, i), function (n) { var i = new Qe(n, {}); return o.expandSegment(t, i, e, n, r, !1); }); }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (t, e, n, r, o, i) { var s = this, a = z(e, r, o), u = a.matched, c = a.consumedSegments, l = a.lastChild, p = a.positionalParamSegments; if (!u)
            return F(e); var f = this.applyRedirectCommands(c, r.redirectTo, p); return r.redirectTo.startsWith("/") ? V(f) : _e.mergeMap.call(this.lineralizeSegments(r, f), function (r) { return s.expandSegment(t, e, n, r.concat(o.slice(l)), i, !1); }); }, t.prototype.matchSegmentAgainstRoute = function (t, e, r, o) { var i = this; if ("**" === r.path)
            return r.loadChildren ? be.map.call(this.configLoader.load(t.injector, r), function (t) { return r._loadedConfig = t, new Qe(o, {}); }) : n.i(de.of)(new Qe(o, {})); var s = z(e, r, o), a = s.matched, u = s.consumedSegments, c = s.lastChild; if (!a)
            return F(e); var l = o.slice(c), p = this.getChildConfig(t, r); return _e.mergeMap.call(p, function (t) { var r = t.module, o = t.routes, s = K(e, u, l, o), a = s.segmentGroup, c = s.slicedSegments; if (0 === c.length && a.hasChildren()) {
            var p = i.expandChildren(r, o, a);
            return be.map.call(p, function (t) { return new Qe(u, t); });
        } if (0 === o.length && 0 === c.length)
            return n.i(de.of)(new Qe(u, {})); var f = i.expandSegment(r, a, o, c, He, !0); return be.map.call(f, function (t) { return new Qe(u.concat(t.segments), t.children); }); }); }, t.prototype.getChildConfig = function (t, e) { var r = this; return e.children ? n.i(de.of)(new ze(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? n.i(de.of)(e._loadedConfig) : _e.mergeMap.call(q(t.injector, e), function (n) { return n ? be.map.call(r.configLoader.load(t.injector, e), function (t) { return e._loadedConfig = t, t; }) : H(e); }) : n.i(de.of)(new ze([], t)); }, t.prototype.lineralizeSegments = function (t, e) { for (var r = [], o = e.root;;) {
            if (r = r.concat(o.segments), 0 === o.numberOfChildren)
                return n.i(de.of)(r);
            if (o.numberOfChildren > 1 || !o.children[He])
                return U(t.redirectTo);
            o = o.children[He];
        } }, t.prototype.applyRedirectCommands = function (t, e, n) { return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n); }, t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) { var o = this.createSegmentGroup(t, e.root, n, r); return new Ke(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }, t.prototype.createQueryParams = function (t, e) { var n = {}; return d(t, function (t, r) { if ("string" == typeof t && t.startsWith(":")) {
            var o = t.substring(1);
            n[r] = e[o];
        }
        else
            n[r] = t; }), n; }, t.prototype.createSegmentGroup = function (t, e, n, r) { var o = this, i = this.createSegments(t, e.segments, n, r), s = {}; return d(e.children, function (e, i) { s[i] = o.createSegmentGroup(t, e, n, r); }), new Qe(i, s); }, t.prototype.createSegments = function (t, e, n, r) { var o = this; return e.map(function (e) { return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n); }); }, t.prototype.findPosParam = function (t, e, n) { var r = n[e.path.substring(1)]; if (!r)
            throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'."); return r; }, t.prototype.findOrReturn = function (t, e) { for (var n = 0, r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            if (i.path === t.path)
                return e.splice(n), i;
            n++;
        } return t; }, t; }(), on = function () { function t(t) { this._root = t; } return Object.defineProperty(t.prototype, "root", { get: function () { return this._root.value; }, enumerable: !0, configurable: !0 }), t.prototype.parent = function (t) { var e = this.pathFromRoot(t); return e.length > 1 ? e[e.length - 2] : null; }, t.prototype.children = function (t) { var e = $(t, this._root); return e ? e.children.map(function (t) { return t.value; }) : []; }, t.prototype.firstChild = function (t) { var e = $(t, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }, t.prototype.siblings = function (t) { var e = tt(t, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(function (t) { return t.value; }).filter(function (e) { return e !== t; }); }, t.prototype.pathFromRoot = function (t) { return tt(t, this._root).map(function (t) { return t.value; }); }, t; }(), sn = function () { function t(t, e) { this.value = t, this.children = e; } return t.prototype.toString = function () { return "TreeNode(" + this.value + ")"; }, t; }(), an = function (t) { function e(e, n) { var r = t.call(this, e) || this; return r.snapshot = n, ot(r, e), r; } return ue.a(e, t), e.prototype.toString = function () { return this.snapshot.toString(); }, e; }(on), un = function () { function t(t, e, n, r, o, i, s, a) { this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = s, this._futureSnapshot = a; } return Object.defineProperty(t.prototype, "routeConfig", { get: function () { return this._futureSnapshot.routeConfig; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function () { return this._routerState.root; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function () { return this._routerState.parent(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "firstChild", { get: function () { return this._routerState.firstChild(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "children", { get: function () { return this._routerState.children(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pathFromRoot", { get: function () { return this._routerState.pathFromRoot(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "paramMap", { get: function () { return this._paramMap || (this._paramMap = be.map.call(this.params, function (t) { return r(t); })), this._paramMap; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "queryParamMap", { get: function () { return this._queryParamMap || (this._queryParamMap = be.map.call(this.queryParams, function (t) { return r(t); })), this._queryParamMap; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"; }, t; }(), cn = function () { function t(t, e, n, r, o, i, s, a, u, c, l) { this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = s, this._routeConfig = a, this._urlSegment = u, this._lastPathIndex = c, this._resolve = l; } return Object.defineProperty(t.prototype, "routeConfig", { get: function () { return this._routeConfig; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function () { return this._routerState.root; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function () { return this._routerState.parent(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "firstChild", { get: function () { return this._routerState.firstChild(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "children", { get: function () { return this._routerState.children(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pathFromRoot", { get: function () { return this._routerState.pathFromRoot(this); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "paramMap", { get: function () { return this._paramMap || (this._paramMap = r(this.params)), this._paramMap; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "queryParamMap", { get: function () { return this._queryParamMap || (this._queryParamMap = r(this.queryParams)), this._queryParamMap; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function () { return "Route(url:'" + this.url.map(function (t) { return t.toString(); }).join("/") + "', path:'" + (this._routeConfig ? this._routeConfig.path : "") + "')"; }, t; }(), ln = function (t) { function e(e, n) { var r = t.call(this, n) || this; return r.url = e, ot(r, n), r; } return ue.a(e, t), e.prototype.toString = function () { return it(this._root); }, e; }(on), pn = function () { function t(t, e, n) { if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && dt(n[0]))
            throw new Error("Root segment cannot have matrix parameters"); var r = n.find(function (t) { return "object" == typeof t && null != t && t.outlets; }); if (r && r !== h(n))
            throw new Error("{outlets:{}} has to be the last command"); } return t.prototype.toRoot = function () { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]; }, t; }(), fn = function () { function t(t, e, n) { this.segmentGroup = t, this.processChildren = e, this.index = n; } return t; }(), hn = function () { function t() { } return t; }(), dn = function () { function t(t, e, n, r) { this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r; } return t.prototype.recognize = function () { try {
            var t = Dt(this.urlTree.root, [], [], this.config).segmentGroup, e = this.processSegmentGroup(this.config, t, He), r = new cn([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, He, this.rootComponentType, null, this.urlTree.root, -1, {}), o = new sn(r, e), i = new ln(this.url, o);
            return this.inheritParamsAndData(i._root), n.i(de.of)(i);
        }
        catch (t) {
            return new Ce.Observable(function (e) { return e.error(t); });
        } }, t.prototype.inheritParamsAndData = function (t) { var e = this, n = t.value, r = rt(n); n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function (t) { return e.inheritParamsAndData(t); }); }, t.prototype.processSegmentGroup = function (t, e, n) { return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n); }, t.prototype.processChildren = function (t, e) { var n = this, r = P(e, function (e, r) { return n.processSegmentGroup(t, e, r); }); return It(r), At(r), r; }, t.prototype.processSegment = function (t, e, n, r) { for (var o = 0, i = t; o < i.length; o++) {
            var s = i[o];
            try {
                return this.processSegmentAgainstRoute(s, e, n, r);
            }
            catch (t) {
                if (!(t instanceof hn))
                    throw t;
            }
        } if (this.noLeftoversInUrl(e, n, r))
            return []; throw new hn; }, t.prototype.noLeftoversInUrl = function (t, e, n) { return 0 === e.length && !t.children[n]; }, t.prototype.processSegmentAgainstRoute = function (t, e, n, r) { if (t.redirectTo)
            throw new hn; if ((t.outlet || He) !== r)
            throw new hn; if ("**" === t.path) {
            var o = n.length > 0 ? h(n).parameters : {}, i = new cn(n, o, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, qt(t), r, t.component, t, jt(e), Mt(e) + n.length, zt(t));
            return [new sn(i, [])];
        } var s = Nt(e, t, n), a = s.consumedSegments, u = s.parameters, c = s.lastChild, l = n.slice(c), p = kt(t), f = Dt(e, a, l, p), d = f.segmentGroup, y = f.slicedSegments, m = new cn(a, u, Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, qt(t), r, t.component, t, jt(e), Mt(e) + a.length, zt(t)); if (0 === y.length && d.hasChildren()) {
            var v = this.processChildren(p, d);
            return [new sn(m, v)];
        } if (0 === p.length && 0 === y.length)
            return [new sn(m, [])]; var g = this.processSegment(p, d, y, He); return [new sn(m, g)]; }, t; }(), yn = function () { function t() { } return t.prototype.shouldDetach = function (t) { }, t.prototype.store = function (t, e) { }, t.prototype.shouldAttach = function (t) { }, t.prototype.retrieve = function (t) { }, t.prototype.shouldReuseRoute = function (t, e) { }, t; }(), mn = function () { function t() { } return t.prototype.shouldDetach = function (t) { return !1; }, t.prototype.store = function (t, e) { }, t.prototype.shouldAttach = function (t) { return !1; }, t.prototype.retrieve = function (t) { return null; }, t.prototype.shouldReuseRoute = function (t, e) { return t.routeConfig === e.routeConfig; }, t; }(), vn = new le.InjectionToken("ROUTES"), gn = function () { function t(t, e, n, r) { this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r; } return t.prototype.load = function (t, e) { var n = this; this.onLoadStartListener && this.onLoadStartListener(e); var r = this.loadModuleFactory(e.loadChildren); return be.map.call(r, function (r) { n.onLoadEndListener && n.onLoadEndListener(e); var o = r.create(t); return new ze(f(o.injector.get(vn)), o); }); }, t.prototype.loadModuleFactory = function (t) { var e = this; return "string" == typeof t ? n.i(Te.fromPromise)(this.loader.load(t)) : _e.mergeMap.call(v(t()), function (t) { return t instanceof le.NgModuleFactory ? n.i(de.of)(t) : n.i(Te.fromPromise)(e.compiler.compileModuleAsync(t)); }); }, t; }(), bn = function () { function t() { } return t.prototype.shouldProcessUrl = function (t) { }, t.prototype.extract = function (t) { }, t.prototype.merge = function (t, e) { }, t; }(), _n = function () { function t() { } return t.prototype.shouldProcessUrl = function (t) { return !0; }, t.prototype.extract = function (t) { return t; }, t.prototype.merge = function (t, e) { return t; }, t; }(), wn = function () { function t(t, e, n, r, o, i, s, a) { var u = this; this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = a, this.navigations = new pe.BehaviorSubject(null), this.routerEvents = new fe.Subject, this.navigationId = 0, this.errorHandler = Kt, this.navigated = !1, this.hooks = { beforePreactivation: Qt, afterPreactivation: Qt }, this.urlHandlingStrategy = new _n, this.routeReuseStrategy = new mn; var c = function (t) { return u.triggerEvent(new Me(t)); }, l = function (t) { return u.triggerEvent(new De(t)); }; this.ngModule = o.get(le.NgModuleRef), this.resetConfig(a), this.currentUrlTree = g(), this.rawUrlTree = this.currentUrlTree, this.configLoader = new gn(i, s, c, l), this.currentRouterState = et(this.currentUrlTree, this.rootComponentType), this.processNavigations(); } return t.prototype.resetRootComponentType = function (t) { this.rootComponentType = t, this.currentRouterState.root.component = this.rootComponentType; }, t.prototype.initialNavigation = function () { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }); }, t.prototype.setUpLocationChangeListener = function () { var t = this; this.locationSubscription || (this.locationSubscription = this.location.subscribe(Zone.current.wrap(function (e) { var n = t.urlSerializer.parse(e.url), r = "popstate" === e.type ? "popstate" : "hashchange"; setTimeout(function () { t.scheduleNavigation(n, r, { replaceUrl: !0 }); }, 0); }))); }, Object.defineProperty(t.prototype, "routerState", { get: function () { return this.currentRouterState; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "url", { get: function () { return this.serializeUrl(this.currentUrlTree); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "events", { get: function () { return this.routerEvents; }, enumerable: !0, configurable: !0 }), t.prototype.triggerEvent = function (t) { this.routerEvents.next(t); }, t.prototype.resetConfig = function (t) { a(t), this.config = t, this.navigated = !1; }, t.prototype.ngOnDestroy = function () { this.dispose(); }, t.prototype.dispose = function () { this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null); }, t.prototype.createUrlTree = function (t, e) { void 0 === e && (e = {}); var r = e.relativeTo, o = e.queryParams, i = e.fragment, s = e.preserveQueryParams, a = e.queryParamsHandling, u = e.preserveFragment; n.i(le.isDevMode)() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."); var c = r || this.routerState.root, l = u ? this.currentUrlTree.fragment : i, p = null; if (a)
            switch (a) {
                case "merge":
                    p = Object.assign({}, this.currentUrlTree.queryParams, o);
                    break;
                case "preserve":
                    p = this.currentUrlTree.queryParams;
                    break;
                default: p = o || null;
            }
        else
            p = s ? this.currentUrlTree.queryParams : o || null; return ht(c, this.currentUrlTree, t, p, l); }, t.prototype.navigateByUrl = function (t, e) { void 0 === e && (e = { skipLocationChange: !1 }); var n = t instanceof Ke ? t : this.parseUrl(t), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree); return this.scheduleNavigation(r, "imperative", e); }, t.prototype.navigate = function (t, e) { return void 0 === e && (e = { skipLocationChange: !1 }), Jt(t), "object" == typeof e.queryParams && null !== e.queryParams && (e.queryParams = this.removeEmptyProps(e.queryParams)), this.navigateByUrl(this.createUrlTree(t, e), e); }, t.prototype.serializeUrl = function (t) { return this.urlSerializer.serialize(t); }, t.prototype.parseUrl = function (t) { return this.urlSerializer.parse(t); }, t.prototype.isActive = function (t, e) { if (t instanceof Ke)
            return b(this.currentUrlTree, t, e); var n = this.urlSerializer.parse(t); return b(this.currentUrlTree, n, e); }, t.prototype.removeEmptyProps = function (t) { return Object.keys(t).reduce(function (e, n) { var r = t[n]; return null !== r && void 0 !== r && (e[n] = r), e; }, {}); }, t.prototype.processNavigations = function () { var t = this; ye.concatMap.call(this.navigations, function (e) { return e ? (t.executeScheduledNavigation(e), e.promise.catch(function () { })) : n.i(de.of)(null); }).subscribe(function () { }); }, t.prototype.scheduleNavigation = function (t, e, n) { var r = this.navigations.value; if (r && "imperative" !== e && "imperative" === r.source && r.rawUrl.toString() === t.toString())
            return Promise.resolve(!0); if (r && "hashchange" == e && "popstate" === r.source && r.rawUrl.toString() === t.toString())
            return Promise.resolve(!0); var o = null, i = null, s = new Promise(function (t, e) { o = t, i = e; }), a = ++this.navigationId; return this.navigations.next({ id: a, source: e, rawUrl: t, extras: n, resolve: o, reject: i, promise: s }), s.catch(function (t) { return Promise.reject(t); }); }, t.prototype.executeScheduledNavigation = function (t) { var e = this, n = t.id, r = t.rawUrl, o = t.extras, i = t.resolve, s = t.reject, a = this.urlHandlingStrategy.extract(r), u = !this.navigated || a.toString() !== this.currentUrlTree.toString(); u && this.urlHandlingStrategy.shouldProcessUrl(r) ? (this.routerEvents.next(new Ae(n, this.serializeUrl(a))), Promise.resolve().then(function (t) { return e.runNavigate(a, r, !!o.skipLocationChange, !!o.replaceUrl, n, null); }).then(i, s)) : u && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.routerEvents.next(new Ae(n, this.serializeUrl(a))), Promise.resolve().then(function (t) { return e.runNavigate(a, r, !1, !1, n, et(a, e.rootComponentType).snapshot); }).then(i, s)) : (this.rawUrlTree = r, i(null)); }, t.prototype.runNavigate = function (t, e, r, o, s, a) { var u = this; return s !== this.navigationId ? (this.location.go(this.urlSerializer.serialize(this.currentUrlTree)), this.routerEvents.next(new Ne(s, this.serializeUrl(t), "Navigation ID " + s + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function (c, l) { var p; if (a)
            p = n.i(de.of)({ appliedUrl: t, snapshot: a });
        else {
            var f = u.ngModule.injector, h = B(f, u.configLoader, u.urlSerializer, t, u.config);
            p = _e.mergeMap.call(h, function (e) { return be.map.call(Rt(u.rootComponentType, u.config, e, u.serializeUrl(e)), function (n) { return u.routerEvents.next(new je(s, u.serializeUrl(t), u.serializeUrl(e), n)), { appliedUrl: e, snapshot: n }; }); });
        } var d, y, m = _e.mergeMap.call(p, function (t) { return be.map.call(u.hooks.beforePreactivation(t.snapshot), function () { return t; }); }), v = be.map.call(m, function (t) { var e = t.appliedUrl, n = t.snapshot, r = u.ngModule.injector; return d = new En(n, u.currentRouterState.snapshot, r), d.traverse(u.rootContexts), { appliedUrl: e, snapshot: n }; }), g = _e.mergeMap.call(v, function (e) { var r = e.appliedUrl, o = e.snapshot; return u.navigationId !== s ? n.i(de.of)(!1) : (u.triggerEvent(new Le(s, u.serializeUrl(t), r, o)), be.map.call(d.checkGuards(), function (e) { return u.triggerEvent(new Fe(s, u.serializeUrl(t), r, o, e)), { appliedUrl: r, snapshot: o, shouldActivate: e }; })); }), b = _e.mergeMap.call(g, function (e) { return u.navigationId !== s ? n.i(de.of)(!1) : e.shouldActivate && d.isActivating() ? (u.triggerEvent(new Ve(s, u.serializeUrl(t), e.appliedUrl, e.snapshot)), be.map.call(d.resolveData(), function () { return u.triggerEvent(new Ue(s, u.serializeUrl(t), e.appliedUrl, e.snapshot)), e; })) : n.i(de.of)(e); }), _ = _e.mergeMap.call(b, function (t) { return be.map.call(u.hooks.afterPreactivation(t.snapshot), function () { return t; }); }), w = be.map.call(_, function (t) { var e = t.appliedUrl, n = t.snapshot, r = t.shouldActivate; if (r) {
            return { appliedUrl: e, state: ut(u.routeReuseStrategy, n, u.currentRouterState), shouldActivate: r };
        } return { appliedUrl: e, state: null, shouldActivate: r }; }), C = u.currentRouterState, S = u.currentUrlTree; w.forEach(function (t) { var n = t.appliedUrl, i = t.state; if (!t.shouldActivate || s !== u.navigationId)
            return void (y = !1); if (u.currentUrlTree = n, u.rawUrlTree = u.urlHandlingStrategy.merge(u.currentUrlTree, e), u.currentRouterState = i, !r) {
            var a = u.urlSerializer.serialize(u.rawUrlTree);
            u.location.isCurrentPathEqualTo(a) || o ? u.location.replaceState(a) : u.location.go(a);
        } new On(u.routeReuseStrategy, i, C).activate(u.rootContexts), y = !0; }).then(function () { y ? (u.navigated = !0, u.routerEvents.next(new ke(s, u.serializeUrl(t), u.serializeUrl(u.currentUrlTree))), c(!0)) : (u.resetUrlToCurrentUrlTree(), u.routerEvents.next(new Ne(s, u.serializeUrl(t), "")), c(!1)); }, function (n) { if (i(n))
            u.resetUrlToCurrentUrlTree(), u.navigated = !0, u.routerEvents.next(new Ne(s, u.serializeUrl(t), n.message)), c(!1);
        else {
            u.routerEvents.next(new Ie(s, u.serializeUrl(t), n));
            try {
                c(u.errorHandler(n));
            }
            catch (t) {
                l(t);
            }
        } u.currentRouterState = C, u.currentUrlTree = S, u.rawUrlTree = u.urlHandlingStrategy.merge(u.currentUrlTree, e), u.location.replaceState(u.serializeUrl(u.rawUrlTree)); }); }); }, t.prototype.resetUrlToCurrentUrlTree = function () { var t = this.urlSerializer.serialize(this.rawUrlTree); this.location.replaceState(t); }, t; }(), Cn = function () { function t(t) { this.path = t; } return Object.defineProperty(t.prototype, "route", { get: function () { return this.path[this.path.length - 1]; }, enumerable: !0, configurable: !0 }), t; }(), Sn = function () { function t(t, e) { this.component = t, this.route = e; } return t; }(), En = function () { function t(t, e, n) { this.future = t, this.curr = e, this.moduleInjector = n, this.canActivateChecks = [], this.canDeactivateChecks = []; } return t.prototype.traverse = function (t) { var e = this.future._root, n = this.curr ? this.curr._root : null; this.traverseChildRoutes(e, n, t, [e.value]); }, t.prototype.checkGuards = function () { var t = this; if (!this.isDeactivating() && !this.isActivating())
            return n.i(de.of)(!0); var e = this.runCanDeactivateChecks(); return _e.mergeMap.call(e, function (e) { return e ? t.runCanActivateChecks() : n.i(de.of)(!1); }); }, t.prototype.resolveData = function () { var t = this; if (!this.isActivating())
            return n.i(de.of)(null); var e = n.i(he.from)(this.canActivateChecks), r = ye.concatMap.call(e, function (e) { return t.runResolve(e.route); }); return we.reduce.call(r, function (t, e) { return t; }); }, t.prototype.isDeactivating = function () { return 0 !== this.canDeactivateChecks.length; }, t.prototype.isActivating = function () { return 0 !== this.canActivateChecks.length; }, t.prototype.traverseChildRoutes = function (t, e, n, r) { var o = this, i = Yt(e); t.children.forEach(function (t) { o.traverseRoutes(t, i[t.value.outlet], n, r.concat([t.value])), delete i[t.value.outlet]; }), d(i, function (t, e) { return o.deactivateRouteAndItsChildren(t, n.getContext(e)); }); }, t.prototype.traverseRoutes = function (t, e, n, r) { var o = t.value, i = e ? e.value : null, s = n ? n.getContext(t.value.outlet) : null; if (i && o._routeConfig === i._routeConfig) {
            var a = this.shouldRunGuardsAndResolvers(i, o, o._routeConfig.runGuardsAndResolvers);
            if (a ? this.canActivateChecks.push(new Cn(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), o.component ? this.traverseChildRoutes(t, e, s ? s.children : null, r) : this.traverseChildRoutes(t, e, n, r), a) {
                var u = s.outlet;
                this.canDeactivateChecks.push(new Sn(u.component, i));
            }
        }
        else
            i && this.deactivateRouteAndItsChildren(e, s), this.canActivateChecks.push(new Cn(r)), o.component ? this.traverseChildRoutes(t, null, s ? s.children : null, r) : this.traverseChildRoutes(t, null, n, r); }, t.prototype.shouldRunGuardsAndResolvers = function (t, e, n) { switch (n) {
            case "always": return !0;
            case "paramsOrQueryParamsChange": return !at(t, e) || !p(t.queryParams, e.queryParams);
            case "paramsChange":
            default: return !at(t, e);
        } }, t.prototype.deactivateRouteAndItsChildren = function (t, e) { var n = this, r = Yt(t), o = t.value; d(r, function (t, r) { o.component ? e ? n.deactivateRouteAndItsChildren(t, e.children.getContext(r)) : n.deactivateRouteAndItsChildren(t, null) : n.deactivateRouteAndItsChildren(t, e); }), o.component && e && e.outlet && e.outlet.isActivated ? this.canDeactivateChecks.push(new Sn(e.outlet.component, o)) : this.canDeactivateChecks.push(new Sn(null, o)); }, t.prototype.runCanDeactivateChecks = function () { var t = this, e = n.i(he.from)(this.canDeactivateChecks), r = _e.mergeMap.call(e, function (e) { return t.runCanDeactivate(e.component, e.route); }); return me.every.call(r, function (t) { return !0 === t; }); }, t.prototype.runCanActivateChecks = function () { var t = this, e = n.i(he.from)(this.canActivateChecks), r = ye.concatMap.call(e, function (e) { return m(n.i(he.from)([t.runCanActivateChild(e.path), t.runCanActivate(e.route)])); }); return me.every.call(r, function (t) { return !0 === t; }); }, t.prototype.runCanActivate = function (t) { var e = this, r = t._routeConfig ? t._routeConfig.canActivate : null; return r && 0 !== r.length ? m(be.map.call(n.i(he.from)(r), function (n) { var r, o = e.getToken(n, t); return r = v(o.canActivate ? o.canActivate(t, e.future) : o(t, e.future)), ve.first.call(r); })) : n.i(de.of)(!0); }, t.prototype.runCanActivateChild = function (t) { var e = this, r = t[t.length - 1], o = t.slice(0, t.length - 1).reverse().map(function (t) { return e.extractCanActivateChild(t); }).filter(function (t) { return null !== t; }); return m(be.map.call(n.i(he.from)(o), function (t) { return m(be.map.call(n.i(he.from)(t.guards), function (n) { var o, i = e.getToken(n, t.node); return o = v(i.canActivateChild ? i.canActivateChild(r, e.future) : i(r, e.future)), ve.first.call(o); })); })); }, t.prototype.extractCanActivateChild = function (t) { var e = t._routeConfig ? t._routeConfig.canActivateChild : null; return e && 0 !== e.length ? { node: t, guards: e } : null; }, t.prototype.runCanDeactivate = function (t, e) { var r = this, o = e && e._routeConfig ? e._routeConfig.canDeactivate : null; if (!o || 0 === o.length)
            return n.i(de.of)(!0); var i = _e.mergeMap.call(n.i(he.from)(o), function (n) { var o, i = r.getToken(n, e); return o = v(i.canDeactivate ? i.canDeactivate(t, e, r.curr, r.future) : i(t, e, r.curr, r.future)), ve.first.call(o); }); return me.every.call(i, function (t) { return !0 === t; }); }, t.prototype.runResolve = function (t) { var e = t._resolve; return be.map.call(this.resolveNode(e, t), function (e) { return t._resolvedData = e, t.data = Object.assign({}, t.data, rt(t).resolve), null; }); }, t.prototype.resolveNode = function (t, e) { var r = this, o = Object.keys(t); if (0 === o.length)
            return n.i(de.of)({}); if (1 === o.length) {
            var i = o[0];
            return be.map.call(this.getResolver(t[i], e), function (t) { return e = {}, e[i] = t, e; var e; });
        } var s = {}, a = _e.mergeMap.call(n.i(he.from)(o), function (n) { return be.map.call(r.getResolver(t[n], e), function (t) { return s[n] = t, t; }); }); return be.map.call(ge.last.call(a), function () { return s; }); }, t.prototype.getResolver = function (t, e) { var n = this.getToken(t, e); return v(n.resolve ? n.resolve(e, this.future) : n(e, this.future)); }, t.prototype.getToken = function (t, e) { var n = Zt(e); return (n ? n.module.injector : this.moduleInjector).get(t); }, t; }(), On = function () { function t(t, e, n) { this.routeReuseStrategy = t, this.futureState = e, this.currState = n; } return t.prototype.activate = function (t) { var e = this.futureState._root, n = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, n, t), st(this.futureState.root), this.activateChildRoutes(e, n, t); }, t.prototype.deactivateChildRoutes = function (t, e, n) { var r = this, o = Yt(e); t.children.forEach(function (t) { var e = t.value.outlet; r.deactivateRoutes(t, o[e], n), delete o[e]; }), d(o, function (t, e) { r.deactivateRouteAndItsChildren(t, n); }); }, t.prototype.deactivateRoutes = function (t, e, n) { var r = t.value, o = e ? e.value : null; if (r === o)
            if (r.component) {
                var i = n.getContext(r.outlet);
                i && this.deactivateChildRoutes(t, e, i.children);
            }
            else
                this.deactivateChildRoutes(t, e, n);
        else
            o && this.deactivateRouteAndItsChildren(e, n); }, t.prototype.deactivateRouteAndItsChildren = function (t, e) { this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e); }, t.prototype.detachAndStoreRouteSubtree = function (t, e) { var n = e.getContext(t.value.outlet); if (n && n.outlet) {
            var r = n.outlet.detach(), o = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: r, route: t, contexts: o });
        } }, t.prototype.deactivateRouteAndOutlet = function (t, e) { var n = this, r = e.getContext(t.value.outlet); if (r) {
            var o = Yt(t), i = t.value.component ? r.children : e;
            d(o, function (t, e) { return n.deactivateRouteAndItsChildren(t, i); }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
        } }, t.prototype.activateChildRoutes = function (t, e, n) { var r = this, o = Yt(e); t.children.forEach(function (t) { r.activateRoutes(t, o[t.value.outlet], n); }); }, t.prototype.activateRoutes = function (t, e, n) { var r = t.value, o = e ? e.value : null; if (st(r), r === o)
            if (r.component) {
                var i = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(t, e, i.children);
            }
            else
                this.activateChildRoutes(t, e, n);
        else if (r.component) {
            var i = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                var s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(s.contexts), i.attachRef = s.componentRef, i.route = s.route.value, i.outlet && i.outlet.attach(s.componentRef, s.route.value), Wt(s.route);
            }
            else {
                var a = Gt(r.snapshot), u = a ? a.module.componentFactoryResolver : null;
                i.route = r, i.resolver = u, i.outlet && i.outlet.activateWith(r, u), this.activateChildRoutes(t, null, i.children);
            }
        }
        else
            this.activateChildRoutes(t, null, n); }, t; }(), Tn = function () { function t(t, e, n, r, o) { this.router = t, this.route = e, this.commands = [], null == n && r.setAttribute(o.nativeElement, "tabindex", "0"); } return Object.defineProperty(t.prototype, "routerLink", { set: function (t) { this.commands = null != t ? Array.isArray(t) ? t : [t] : []; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "preserveQueryParams", { set: function (t) { n.i(le.isDevMode)() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t; }, enumerable: !0, configurable: !0 }), t.prototype.onClick = function () { var t = { skipLocationChange: Xt(this.skipLocationChange), replaceUrl: Xt(this.replaceUrl) }; return this.router.navigateByUrl(this.urlTree, t), !0; }, Object.defineProperty(t.prototype, "urlTree", { get: function () { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: Xt(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: Xt(this.preserveFragment) }); }, enumerable: !0, configurable: !0 }), t; }();
        Tn.decorators = [{ type: le.Directive, args: [{ selector: ":not(a)[routerLink]" }] }], Tn.ctorParameters = function () { return [{ type: wn }, { type: un }, { type: void 0, decorators: [{ type: le.Attribute, args: ["tabindex"] }] }, { type: le.Renderer2 }, { type: le.ElementRef }]; }, Tn.propDecorators = { queryParams: [{ type: le.Input }], fragment: [{ type: le.Input }], queryParamsHandling: [{ type: le.Input }], preserveFragment: [{ type: le.Input }], skipLocationChange: [{ type: le.Input }], replaceUrl: [{ type: le.Input }], routerLink: [{ type: le.Input }], preserveQueryParams: [{ type: le.Input }], onClick: [{ type: le.HostListener, args: ["click"] }] };
        var Pn = function () { function t(t, e, n) { var r = this; this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(function (t) { t instanceof ke && r.updateTargetUrlAndHref(); }); } return Object.defineProperty(t.prototype, "routerLink", { set: function (t) { this.commands = null != t ? Array.isArray(t) ? t : [t] : []; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "preserveQueryParams", { set: function (t) { n.i(le.isDevMode)() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t; }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function (t) { this.updateTargetUrlAndHref(); }, t.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); }, t.prototype.onClick = function (t, e, n, r) { if (0 !== t || e || n || r)
            return !0; if ("string" == typeof this.target && "_self" != this.target)
            return !0; var o = { skipLocationChange: Xt(this.skipLocationChange), replaceUrl: Xt(this.replaceUrl) }; return this.router.navigateByUrl(this.urlTree, o), !1; }, t.prototype.updateTargetUrlAndHref = function () { this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)); }, Object.defineProperty(t.prototype, "urlTree", { get: function () { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, preserveQueryParams: Xt(this.preserve), queryParamsHandling: this.queryParamsHandling, preserveFragment: Xt(this.preserveFragment) }); }, enumerable: !0, configurable: !0 }), t; }();
        Pn.decorators = [{ type: le.Directive, args: [{ selector: "a[routerLink]" }] }], Pn.ctorParameters = function () { return [{ type: wn }, { type: un }, { type: ce.LocationStrategy }]; }, Pn.propDecorators = { target: [{ type: le.HostBinding, args: ["attr.target"] }, { type: le.Input }], queryParams: [{ type: le.Input }], fragment: [{ type: le.Input }], queryParamsHandling: [{ type: le.Input }], preserveFragment: [{ type: le.Input }], skipLocationChange: [{ type: le.Input }], replaceUrl: [{ type: le.Input }], href: [{ type: le.HostBinding }], routerLink: [{ type: le.Input }], preserveQueryParams: [{ type: le.Input }], onClick: [{ type: le.HostListener, args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]] }] };
        var xn = function () { function t(t, e, n, r) { var o = this; this.router = t, this.element = e, this.renderer = n, this.cdr = r, this.classes = [], this.active = !1, this.routerLinkActiveOptions = { exact: !1 }, this.subscription = t.events.subscribe(function (t) { t instanceof ke && o.update(); }); } return Object.defineProperty(t.prototype, "isActive", { get: function () { return this.active; }, enumerable: !0, configurable: !0 }), t.prototype.ngAfterContentInit = function () { var t = this; this.links.changes.subscribe(function (e) { return t.update(); }), this.linksWithHrefs.changes.subscribe(function (e) { return t.update(); }), this.update(); }, Object.defineProperty(t.prototype, "routerLinkActive", { set: function (t) { var e = Array.isArray(t) ? t : t.split(" "); this.classes = e.filter(function (t) { return !!t; }); }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function (t) { this.update(); }, t.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); }, t.prototype.update = function () { var t = this; if (this.links && this.linksWithHrefs && this.router.navigated) {
            var e = this.hasActiveLinks();
            this.active !== e && (this.classes.forEach(function (n) { e ? t.renderer.addClass(t.element.nativeElement, n) : t.renderer.removeClass(t.element.nativeElement, n); }), Promise.resolve(e).then(function (e) { return t.active = e; }));
        } }, t.prototype.isLinkActive = function (t) { var e = this; return function (n) { return t.isActive(n.urlTree, e.routerLinkActiveOptions.exact); }; }, t.prototype.hasActiveLinks = function () { return this.links.some(this.isLinkActive(this.router)) || this.linksWithHrefs.some(this.isLinkActive(this.router)); }, t; }();
        xn.decorators = [{ type: le.Directive, args: [{ selector: "[routerLinkActive]", exportAs: "routerLinkActive" }] }], xn.ctorParameters = function () { return [{ type: wn }, { type: le.ElementRef }, { type: le.Renderer2 }, { type: le.ChangeDetectorRef }]; }, xn.propDecorators = { links: [{ type: le.ContentChildren, args: [Tn, { descendants: !0 }] }], linksWithHrefs: [{ type: le.ContentChildren, args: [Pn, { descendants: !0 }] }], routerLinkActiveOptions: [{ type: le.Input }], routerLinkActive: [{ type: le.Input }] };
        var Rn = function () { function t() { this.outlet = null, this.route = null, this.resolver = null, this.children = new An, this.attachRef = null; } return t; }(), An = function () { function t() { this.contexts = new Map; } return t.prototype.onChildOutletCreated = function (t, e) { var n = this.getOrCreateContext(t); n.outlet = e, this.contexts.set(t, n); }, t.prototype.onChildOutletDestroyed = function (t) { var e = this.getContext(t); e && (e.outlet = null); }, t.prototype.onOutletDeactivated = function () { var t = this.contexts; return this.contexts = new Map, t; }, t.prototype.onOutletReAttached = function (t) { this.contexts = t; }, t.prototype.getOrCreateContext = function (t) { var e = this.getContext(t); return e || (e = new Rn, this.contexts.set(t, e)), e; }, t.prototype.getContext = function (t) { return this.contexts.get(t) || null; }, t; }(), kn = function () { function t(t, e, n, r, o) { this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new le.EventEmitter, this.deactivateEvents = new le.EventEmitter, this.name = r || He, t.onChildOutletCreated(this.name, this); } return t.prototype.ngOnDestroy = function () { this.parentContexts.onChildOutletDestroyed(this.name); }, t.prototype.ngOnInit = function () { if (!this.activated) {
            var t = this.parentContexts.getContext(this.name);
            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
        } }, Object.defineProperty(t.prototype, "locationInjector", { get: function () { return this.location.injector; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "locationFactoryResolver", { get: function () { return this.resolver; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isActivated", { get: function () { return !!this.activated; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function () { if (!this.activated)
                throw new Error("Outlet is not activated"); return this.activated.instance; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activatedRoute", { get: function () { if (!this.activated)
                throw new Error("Outlet is not activated"); return this._activatedRoute; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activatedRouteData", { get: function () { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }, enumerable: !0, configurable: !0 }), t.prototype.detach = function () { if (!this.activated)
            throw new Error("Outlet is not activated"); this.location.detach(); var t = this.activated; return this.activated = null, this._activatedRoute = null, t; }, t.prototype.attach = function (t, e) { this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView); }, t.prototype.deactivate = function () { if (this.activated) {
            var t = this.component;
            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t);
        } }, t.prototype.activateWith = function (t, e) { if (this.isActivated)
            throw new Error("Cannot activate an already activated outlet"); this._activatedRoute = t; var n = t._futureSnapshot, r = n._routeConfig.component; e = e || this.resolver; var o = e.resolveComponentFactory(r), i = this.parentContexts.getOrCreateContext(this.name).children, s = new Nn(t, i, this.location.injector); this.activated = this.location.createComponent(o, this.location.length, s), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance); }, t; }();
        kn.decorators = [{ type: le.Directive, args: [{ selector: "router-outlet", exportAs: "outlet" }] }], kn.ctorParameters = function () { return [{ type: An }, { type: le.ViewContainerRef }, { type: le.ComponentFactoryResolver }, { type: void 0, decorators: [{ type: le.Attribute, args: ["name"] }] }, { type: le.ChangeDetectorRef }]; }, kn.propDecorators = { activateEvents: [{ type: le.Output, args: ["activate"] }], deactivateEvents: [{ type: le.Output, args: ["deactivate"] }] };
        var Nn = function () { function t(t, e, n) { this.route = t, this.childContexts = e, this.parent = n; } return t.prototype.get = function (t, e) { return t === un ? this.route : t === An ? this.childContexts : this.parent.get(t, e); }, t; }(), In = function () { function t() { } return t.prototype.preload = function (t, e) { }, t; }(), jn = function () { function t() { } return t.prototype.preload = function (t, e) { return Se._catch.call(e(), function () { return n.i(de.of)(null); }); }, t; }(), Mn = function () { function t() { } return t.prototype.preload = function (t, e) { return n.i(de.of)(null); }, t; }(), Dn = function () { function t(t, e, n, r, o) { this.router = t, this.injector = r, this.preloadingStrategy = o; var i = function (e) { return t.triggerEvent(new Me(e)); }, s = function (e) { return t.triggerEvent(new De(e)); }; this.loader = new gn(e, n, i, s); } return t.prototype.setUpPreloading = function () { var t = this, e = Re.filter.call(this.router.events, function (t) { return t instanceof ke; }); this.subscription = ye.concatMap.call(e, function () { return t.preload(); }).subscribe(function () { }); }, t.prototype.preload = function () { var t = this.injector.get(le.NgModuleRef); return this.processRoutes(t, this.router.config); }, t.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); }, t.prototype.processRoutes = function (t, e) { for (var r = [], o = 0, i = e; o < i.length; o++) {
            var s = i[o];
            if (s.loadChildren && !s.canLoad && s._loadedConfig) {
                var a = s._loadedConfig;
                r.push(this.processRoutes(a.module, a.routes));
            }
            else
                s.loadChildren && !s.canLoad ? r.push(this.preloadConfig(t, s)) : s.children && r.push(this.processRoutes(t, s.children));
        } return Pe.mergeAll.call(n.i(he.from)(r)); }, t.prototype.preloadConfig = function (t, e) { var n = this; return this.preloadingStrategy.preload(e, function () { var r = n.loader.load(t.injector, e); return _e.mergeMap.call(r, function (t) { return e._loadedConfig = t, n.processRoutes(t.module, t.routes); }); }); }, t; }();
        Dn.decorators = [{ type: le.Injectable }], Dn.ctorParameters = function () { return [{ type: wn }, { type: le.NgModuleFactoryLoader }, { type: le.Compiler }, { type: le.Injector }, { type: In }]; };
        var Ln = [kn, Tn, Pn, xn], Fn = new le.InjectionToken("ROUTER_CONFIGURATION"), Vn = new le.InjectionToken("ROUTER_FORROOT_GUARD"), Un = [ce.Location, { provide: Ge, useClass: Ze }, { provide: wn, useFactory: re, deps: [le.ApplicationRef, Ge, An, ce.Location, le.Injector, le.NgModuleFactoryLoader, le.Compiler, vn, Fn, [bn, new le.Optional], [yn, new le.Optional]] }, An, { provide: un, useFactory: oe, deps: [wn] }, { provide: le.NgModuleFactoryLoader, useClass: le.SystemJsNgModuleLoader }, Dn, Mn, jn, { provide: Fn, useValue: { enableTracing: !1 } }], Hn = function () { function t(t, e) { } return t.forRoot = function (e, n) { return { ngModule: t, providers: [Un, ne(e), { provide: Vn, useFactory: ee, deps: [[wn, new le.Optional, new le.SkipSelf]] }, { provide: Fn, useValue: n || {} }, { provide: ce.LocationStrategy, useFactory: te, deps: [ce.PlatformLocation, [new le.Inject(ce.APP_BASE_HREF), new le.Optional], Fn] }, { provide: In, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Mn }, { provide: le.NgProbeToken, multi: !0, useFactory: $t }, ae()] }; }, t.forChild = function (e) { return { ngModule: t, providers: [ne(e)] }; }, t; }();
        Hn.decorators = [{ type: le.NgModule, args: [{ declarations: Ln, exports: Ln }] }], Hn.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: le.Optional }, { type: le.Inject, args: [Vn] }] }, { type: wn, decorators: [{ type: le.Optional }] }]; };
        var Bn = function () { function t(t) { this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new fe.Subject; } return t.prototype.appInitializer = function () { var t = this; return this.injector.get(ce.LOCATION_INITIALIZED, Promise.resolve(null)).then(function () { var e = null, r = new Promise(function (t) { return e = t; }), o = t.injector.get(wn), i = t.injector.get(Fn); if (t.isLegacyDisabled(i) || t.isLegacyEnabled(i))
            e(!0);
        else if ("disabled" === i.initialNavigation)
            o.setUpLocationChangeListener(), e(!0);
        else {
            if ("enabled" !== i.initialNavigation)
                throw new Error("Invalid initialNavigation options: '" + i.initialNavigation + "'");
            o.hooks.afterPreactivation = function () { return t.initNavigation ? n.i(de.of)(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone); }, o.initialNavigation();
        } return r; }); }, t.prototype.bootstrapListener = function (t) { var e = this.injector.get(Fn), n = this.injector.get(Dn), r = this.injector.get(wn), o = this.injector.get(le.ApplicationRef); t === o.components[0] && (this.isLegacyEnabled(e) ? r.initialNavigation() : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(), n.setUpPreloading(), r.resetRootComponentType(o.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete()); }, t.prototype.isLegacyEnabled = function (t) { return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation; }, t.prototype.isLegacyDisabled = function (t) { return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation; }, t; }();
        Bn.decorators = [{ type: le.Injectable }], Bn.ctorParameters = function () { return [{ type: le.Injector }]; };
        var qn = new le.InjectionToken("Router Initializer");
        new le.Version("4.3.6");
    }, CE6k: function (t, e, n) {
        "use strict";
        function r() { return new s.Subject; }
        function o() { return i.multicast.call(this, r).refCount(); }
        var i = n("gonN"), s = n("rlar");
        e.share = o;
    }, CPp0: function (t, e, n) {
        "use strict";
        function r(t) { if ("string" != typeof t)
            return t; switch (t.toUpperCase()) {
            case "GET": return _.Get;
            case "POST": return _.Post;
            case "PUT": return _.Put;
            case "DELETE": return _.Delete;
            case "OPTIONS": return _.Options;
            case "HEAD": return _.Head;
            case "PATCH": return _.Patch;
        } throw new Error('Invalid request method. The method "' + t + '" is not supported.'); }
        function o(t) { return "responseURL" in t ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null; }
        function i(t) { for (var e = new Uint16Array(t.length), n = 0, r = t.length; n < r; n++)
            e[n] = t.charCodeAt(n); return e.buffer; }
        function s(t) { void 0 === t && (t = ""); var e = new Map; if (t.length > 0) {
            t.split("&").forEach(function (t) { var n = t.indexOf("="), r = -1 == n ? [t, ""] : [t.slice(0, n), t.slice(n + 1)], o = r[0], i = r[1], s = e.get(o) || []; s.push(i), e.set(o, s); });
        } return e; }
        function a(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/"); }
        function u() { var t = "object" == typeof window ? window : {}; return null === L && (L = t[D] = {}), L; }
        function c(t) { var e = new N; return Object.keys(t).forEach(function (n) { var r = t[n]; r && Array.isArray(r) ? r.forEach(function (t) { return e.append(n, t.toString()); }) : e.append(n, r.toString()); }), e; }
        function l(t, e) { return t.createConnection(e).response; }
        function p(t, e, n, r) { var o = t; return e ? o.merge(new Z({ method: e.method || n, url: e.url || r, search: e.search, params: e.params, headers: e.headers, body: e.body, withCredentials: e.withCredentials, responseType: e.responseType })) : o.merge(new Z({ method: n, url: r })); }
        function f() { return new W; }
        function h(t, e) { return new rt(t, e); }
        function d(t, e) { return new ot(t, e); }
        var y = n("6Xbx"), m = n("/oeL"), v = n("bKpL"), g = (n.n(v), n("fc+i"));
        n.d(e, "a", function () { return b; }), n.d(e, "f", function () { return G; }), n.d(e, "h", function () { return Y; }), n.d(e, "g", function () { return Z; }), n.d(e, "c", function () { return P; }), n.d(e, "b", function () { return T; }), n.d(e, "i", function () { return rt; }), n.d(e, "k", function () { return it; }), n.d(e, "d", function () { return R; }), n.d(e, "e", function () { return f; }), n.d(e, "j", function () { return h; });
        var b = function () { function t() { } return t.prototype.build = function () { return new XMLHttpRequest; }, t; }();
        b.decorators = [{ type: m.Injectable }], b.ctorParameters = function () { return []; };
        var _ = {};
        _.Get = 0, _.Post = 1, _.Put = 2, _.Delete = 3, _.Options = 4, _.Head = 5, _.Patch = 6, _[_.Get] = "Get", _[_.Post] = "Post", _[_.Put] = "Put", _[_.Delete] = "Delete", _[_.Options] = "Options", _[_.Head] = "Head", _[_.Patch] = "Patch";
        var w = {};
        w.Unsent = 0, w.Open = 1, w.HeadersReceived = 2, w.Loading = 3, w.Done = 4, w.Cancelled = 5, w[w.Unsent] = "Unsent", w[w.Open] = "Open", w[w.HeadersReceived] = "HeadersReceived", w[w.Loading] = "Loading", w[w.Done] = "Done", w[w.Cancelled] = "Cancelled";
        var C = {};
        C.Basic = 0, C.Cors = 1, C.Default = 2, C.Error = 3, C.Opaque = 4, C[C.Basic] = "Basic", C[C.Cors] = "Cors", C[C.Default] = "Default", C[C.Error] = "Error", C[C.Opaque] = "Opaque";
        var S = {};
        S.NONE = 0, S.JSON = 1, S.FORM = 2, S.FORM_DATA = 3, S.TEXT = 4, S.BLOB = 5, S.ARRAY_BUFFER = 6, S[S.NONE] = "NONE", S[S.JSON] = "JSON", S[S.FORM] = "FORM", S[S.FORM_DATA] = "FORM_DATA", S[S.TEXT] = "TEXT", S[S.BLOB] = "BLOB", S[S.ARRAY_BUFFER] = "ARRAY_BUFFER";
        var E = {};
        E.Text = 0, E.Json = 1, E.ArrayBuffer = 2, E.Blob = 3, E[E.Text] = "Text", E[E.Json] = "Json", E[E.ArrayBuffer] = "ArrayBuffer", E[E.Blob] = "Blob";
        var O = function () { function t(e) { var n = this; if (this._headers = new Map, this._normalizedNames = new Map, e)
            return e instanceof t ? void e.forEach(function (t, e) { t.forEach(function (t) { return n.append(e, t); }); }) : void Object.keys(e).forEach(function (t) { var r = Array.isArray(e[t]) ? e[t] : [e[t]]; n.delete(t), r.forEach(function (e) { return n.append(t, e); }); }); } return t.fromResponseHeaderString = function (e) { var n = new t; return e.split("\n").forEach(function (t) { var e = t.indexOf(":"); if (e > 0) {
            var r = t.slice(0, e), o = t.slice(e + 1).trim();
            n.set(r, o);
        } }), n; }, t.prototype.append = function (t, e) { var n = this.getAll(t); null === n ? this.set(t, e) : n.push(e); }, t.prototype.delete = function (t) { var e = t.toLowerCase(); this._normalizedNames.delete(e), this._headers.delete(e); }, t.prototype.forEach = function (t) { var e = this; this._headers.forEach(function (n, r) { return t(n, e._normalizedNames.get(r), e._headers); }); }, t.prototype.get = function (t) { var e = this.getAll(t); return null === e ? null : e.length > 0 ? e[0] : null; }, t.prototype.has = function (t) { return this._headers.has(t.toLowerCase()); }, t.prototype.keys = function () { return Array.from(this._normalizedNames.values()); }, t.prototype.set = function (t, e) { Array.isArray(e) ? e.length && this._headers.set(t.toLowerCase(), [e.join(",")]) : this._headers.set(t.toLowerCase(), [e]), this.mayBeSetNormalizedName(t); }, t.prototype.values = function () { return Array.from(this._headers.values()); }, t.prototype.toJSON = function () { var t = this, e = {}; return this._headers.forEach(function (n, r) { var o = []; n.forEach(function (t) { return o.push.apply(o, t.split(",")); }), e[t._normalizedNames.get(r)] = o; }), e; }, t.prototype.getAll = function (t) { return this.has(t) ? this._headers.get(t.toLowerCase()) || null : null; }, t.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); }, t.prototype.mayBeSetNormalizedName = function (t) { var e = t.toLowerCase(); this._normalizedNames.has(e) || this._normalizedNames.set(e, t); }, t; }(), T = function () { function t(t) { void 0 === t && (t = {}); var e = t.body, n = t.status, r = t.headers, o = t.statusText, i = t.type, s = t.url; this.body = null != e ? e : null, this.status = null != n ? n : null, this.headers = null != r ? r : null, this.statusText = null != o ? o : null, this.type = null != i ? i : null, this.url = null != s ? s : null; } return t.prototype.merge = function (e) { return new t({ body: e && null != e.body ? e.body : this.body, status: e && null != e.status ? e.status : this.status, headers: e && null != e.headers ? e.headers : this.headers, statusText: e && null != e.statusText ? e.statusText : this.statusText, type: e && null != e.type ? e.type : this.type, url: e && null != e.url ? e.url : this.url }); }, t; }(), P = function (t) { function e() { return t.call(this, { status: 200, statusText: "Ok", type: C.Default, headers: new O }) || this; } return y.a(e, t), e; }(T);
        P.decorators = [{ type: m.Injectable }], P.ctorParameters = function () { return []; };
        var x = function () { function t() { } return t.prototype.createConnection = function (t) { }, t; }(), R = (function () { function t() { } }(), function () { function t() { } return t.prototype.configureRequest = function (t) { }, t; }()), A = function (t) { return t >= 200 && t < 300; }, k = function () { function t() { } return t.prototype.encodeKey = function (t) { return a(t); }, t.prototype.encodeValue = function (t) { return a(t); }, t; }(), N = function () { function t(t, e) { void 0 === t && (t = ""), void 0 === e && (e = new k), this.rawParams = t, this.queryEncoder = e, this.paramsMap = s(t); } return t.prototype.clone = function () { var e = new t("", this.queryEncoder); return e.appendAll(this), e; }, t.prototype.has = function (t) { return this.paramsMap.has(t); }, t.prototype.get = function (t) { var e = this.paramsMap.get(t); return Array.isArray(e) ? e[0] : null; }, t.prototype.getAll = function (t) { return this.paramsMap.get(t) || []; }, t.prototype.set = function (t, e) { if (void 0 === e || null === e)
            return void this.delete(t); var n = this.paramsMap.get(t) || []; n.length = 0, n.push(e), this.paramsMap.set(t, n); }, t.prototype.setAll = function (t) { var e = this; t.paramsMap.forEach(function (t, n) { var r = e.paramsMap.get(n) || []; r.length = 0, r.push(t[0]), e.paramsMap.set(n, r); }); }, t.prototype.append = function (t, e) { if (void 0 !== e && null !== e) {
            var n = this.paramsMap.get(t) || [];
            n.push(e), this.paramsMap.set(t, n);
        } }, t.prototype.appendAll = function (t) { var e = this; t.paramsMap.forEach(function (t, n) { for (var r = e.paramsMap.get(n) || [], o = 0; o < t.length; ++o)
            r.push(t[o]); e.paramsMap.set(n, r); }); }, t.prototype.replaceAll = function (t) { var e = this; t.paramsMap.forEach(function (t, n) { var r = e.paramsMap.get(n) || []; r.length = 0; for (var o = 0; o < t.length; ++o)
            r.push(t[o]); e.paramsMap.set(n, r); }); }, t.prototype.toString = function () { var t = this, e = []; return this.paramsMap.forEach(function (n, r) { n.forEach(function (n) { return e.push(t.queryEncoder.encodeKey(r) + "=" + t.queryEncoder.encodeValue(n)); }); }), e.join("&"); }, t.prototype.delete = function (t) { this.paramsMap.delete(t); }, t; }(), I = function () { function t() { } return t.prototype.json = function () { return "string" == typeof this._body ? JSON.parse(this._body) : this._body instanceof ArrayBuffer ? JSON.parse(this.text()) : this._body; }, t.prototype.text = function (t) { if (void 0 === t && (t = "legacy"), this._body instanceof N)
            return this._body.toString(); if (this._body instanceof ArrayBuffer)
            switch (t) {
                case "legacy": return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case "iso-8859": return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default: throw new Error("Invalid value for encodingHint: " + t);
            } return null == this._body ? "" : "object" == typeof this._body ? JSON.stringify(this._body, null, 2) : this._body.toString(); }, t.prototype.arrayBuffer = function () { return this._body instanceof ArrayBuffer ? this._body : i(this.text()); }, t.prototype.blob = function () { if (this._body instanceof Blob)
            return this._body; if (this._body instanceof ArrayBuffer)
            return new Blob([this._body]); throw new Error("The request body isn't either a blob or an array buffer"); }, t; }(), j = function (t) { function e(e) { var n = t.call(this) || this; return n._body = e.body, n.status = e.status, n.ok = n.status >= 200 && n.status <= 299, n.statusText = e.statusText, n.headers = e.headers, n.type = e.type, n.url = e.url, n; } return y.a(e, t), e.prototype.toString = function () { return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url; }, e; }(I), M = 0, D = "__ng_jsonp__", L = null, F = function () { function t() { } return t.prototype.build = function (t) { var e = document.createElement("script"); return e.src = t, e; }, t.prototype.nextRequestID = function () { return "__req" + M++; }, t.prototype.requestCallback = function (t) { return D + "." + t + ".finished"; }, t.prototype.exposeConnection = function (t, e) { u()[t] = e; }, t.prototype.removeConnection = function (t) { u()[t] = null; }, t.prototype.send = function (t) { document.body.appendChild(t); }, t.prototype.cleanup = function (t) { t.parentNode && t.parentNode.removeChild(t); }, t; }();
        F.decorators = [{ type: m.Injectable }], F.ctorParameters = function () { return []; };
        var V = "JSONP injected script did not invoke callback.", U = "JSONP requests must use GET request method.", H = function () { function t() { } return t.prototype.finished = function (t) { }, t; }(), B = function (t) { function e(e, n, r) { var o = t.call(this) || this; if (o._dom = n, o.baseResponseOptions = r, o._finished = !1, e.method !== _.Get)
            throw new TypeError(U); return o.request = e, o.response = new v.Observable(function (t) { o.readyState = w.Loading; var i = o._id = n.nextRequestID(); n.exposeConnection(i, o); var s = n.requestCallback(o._id), a = e.url; a.indexOf("=JSONP_CALLBACK&") > -1 ? a = a.replace("=JSONP_CALLBACK&", "=" + s + "&") : a.lastIndexOf("=JSONP_CALLBACK") === a.length - "=JSONP_CALLBACK".length && (a = a.substring(0, a.length - "=JSONP_CALLBACK".length) + "=" + s); var u = o._script = n.build(a), c = function (e) { if (o.readyState !== w.Cancelled) {
            if (o.readyState = w.Done, n.cleanup(u), !o._finished) {
                var i = new T({ body: V, type: C.Error, url: a });
                return r && (i = r.merge(i)), void t.error(new j(i));
            }
            var s = new T({ body: o._responseData, url: a });
            o.baseResponseOptions && (s = o.baseResponseOptions.merge(s)), t.next(new j(s)), t.complete();
        } }, l = function (e) { if (o.readyState !== w.Cancelled) {
            o.readyState = w.Done, n.cleanup(u);
            var i = new T({ body: e.message, type: C.Error });
            r && (i = r.merge(i)), t.error(new j(i));
        } }; return u.addEventListener("load", c), u.addEventListener("error", l), n.send(u), function () { o.readyState = w.Cancelled, u.removeEventListener("load", c), u.removeEventListener("error", l), o._dom.cleanup(u); }; }), o; } return y.a(e, t), e.prototype.finished = function (t) { this._finished = !0, this._dom.removeConnection(this._id), this.readyState !== w.Cancelled && (this._responseData = t); }, e; }(H), q = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return y.a(e, t), e; }(x), z = function (t) { function e(e, n) { var r = t.call(this) || this; return r._browserJSONP = e, r._baseResponseOptions = n, r; } return y.a(e, t), e.prototype.createConnection = function (t) { return new B(t, this._browserJSONP, this._baseResponseOptions); }, e; }(q);
        z.decorators = [{ type: m.Injectable }], z.ctorParameters = function () { return [{ type: F }, { type: T }]; };
        var K = /^\)\]\}',?\n/, Q = function () { function t(t, e, n) { var r = this; this.request = t, this.response = new v.Observable(function (i) { var s = e.build(); s.open(_[t.method].toUpperCase(), t.url), null != t.withCredentials && (s.withCredentials = t.withCredentials); var a = function () { var e = 1223 === s.status ? 204 : s.status, r = null; 204 !== e && "string" == typeof (r = void 0 === s.response ? s.responseText : s.response) && (r = r.replace(K, "")), 0 === e && (e = r ? 200 : 0); var a = O.fromResponseHeaderString(s.getAllResponseHeaders()), u = o(s) || t.url, c = s.statusText || "OK", l = new T({ body: r, status: e, headers: a, statusText: c, url: u }); null != n && (l = n.merge(l)); var p = new j(l); if (p.ok = A(e), p.ok)
            return i.next(p), void i.complete(); i.error(p); }, u = function (t) { var e = new T({ body: t, type: C.Error, status: s.status, statusText: s.statusText }); null != n && (e = n.merge(e)), i.error(new j(e)); }; if (r.setDetectedContentType(t, s), null == t.headers && (t.headers = new O), t.headers.has("Accept") || t.headers.append("Accept", "application/json, text/plain, */*"), t.headers.forEach(function (t, e) { return s.setRequestHeader(e, t.join(",")); }), null != t.responseType && null != s.responseType)
            switch (t.responseType) {
                case E.ArrayBuffer:
                    s.responseType = "arraybuffer";
                    break;
                case E.Json:
                    s.responseType = "json";
                    break;
                case E.Text:
                    s.responseType = "text";
                    break;
                case E.Blob:
                    s.responseType = "blob";
                    break;
                default: throw new Error("The selected responseType is not supported");
            } return s.addEventListener("load", a), s.addEventListener("error", u), s.send(r.request.getBody()), function () { s.removeEventListener("load", a), s.removeEventListener("error", u), s.abort(); }; }); } return t.prototype.setDetectedContentType = function (t, e) { if (null == t.headers || null == t.headers.get("Content-Type"))
            switch (t.contentType) {
                case S.NONE: break;
                case S.JSON:
                    e.setRequestHeader("content-type", "application/json");
                    break;
                case S.FORM:
                    e.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                    break;
                case S.TEXT:
                    e.setRequestHeader("content-type", "text/plain");
                    break;
                case S.BLOB:
                    var n = t.blob();
                    n.type && e.setRequestHeader("content-type", n.type);
            } }, t; }(), W = function () { function t(t, e) { void 0 === t && (t = "XSRF-TOKEN"), void 0 === e && (e = "X-XSRF-TOKEN"), this._cookieName = t, this._headerName = e; } return t.prototype.configureRequest = function (t) { var e = n.i(g.v)().getCookie(this._cookieName); e && t.headers.set(this._headerName, e); }, t; }(), G = function () { function t(t, e, n) { this._browserXHR = t, this._baseResponseOptions = e, this._xsrfStrategy = n; } return t.prototype.createConnection = function (t) { return this._xsrfStrategy.configureRequest(t), new Q(t, this._browserXHR, this._baseResponseOptions); }, t; }();
        G.decorators = [{ type: m.Injectable }], G.ctorParameters = function () { return [{ type: b }, { type: T }, { type: R }]; };
        var Z = function () { function t(t) { void 0 === t && (t = {}); var e = t.method, n = t.headers, o = t.body, i = t.url, s = t.search, a = t.params, u = t.withCredentials, c = t.responseType; this.method = null != e ? r(e) : null, this.headers = null != n ? n : null, this.body = null != o ? o : null, this.url = null != i ? i : null, this.params = this._mergeSearchParams(a || s), this.withCredentials = null != u ? u : null, this.responseType = null != c ? c : null; } return Object.defineProperty(t.prototype, "search", { get: function () { return this.params; }, set: function (t) { this.params = t; }, enumerable: !0, configurable: !0 }), t.prototype.merge = function (e) { return new t({ method: e && null != e.method ? e.method : this.method, headers: e && null != e.headers ? e.headers : new O(this.headers), body: e && null != e.body ? e.body : this.body, url: e && null != e.url ? e.url : this.url, params: e && this._mergeSearchParams(e.params || e.search), withCredentials: e && null != e.withCredentials ? e.withCredentials : this.withCredentials, responseType: e && null != e.responseType ? e.responseType : this.responseType }); }, t.prototype._mergeSearchParams = function (t) { return t ? t instanceof N ? t.clone() : "string" == typeof t ? new N(t) : this._parseParams(t) : this.params; }, t.prototype._parseParams = function (t) { var e = this; void 0 === t && (t = {}); var n = new N; return Object.keys(t).forEach(function (r) { var o = t[r]; Array.isArray(o) ? o.forEach(function (t) { return e._appendParam(r, t, n); }) : e._appendParam(r, o, n); }), n; }, t.prototype._appendParam = function (t, e, n) { "string" != typeof e && (e = JSON.stringify(e)), n.append(t, e); }, t; }(), Y = function (t) { function e() { return t.call(this, { method: _.Get, headers: new O }) || this; } return y.a(e, t), e; }(Z);
        Y.decorators = [{ type: m.Injectable }], Y.ctorParameters = function () { return []; };
        var J = function (t) { function e(e) { var n = t.call(this) || this, o = e.url; n.url = e.url; var i = e.params || e.search; if (i) {
            var s = void 0;
            if (s = "object" != typeof i || i instanceof N ? i.toString() : c(i).toString(), s.length > 0) {
                var a = "?";
                -1 != n.url.indexOf("?") && (a = "&" == n.url[n.url.length - 1] ? "" : "&"), n.url = o + a + s;
            }
        } return n._body = e.body, n.method = r(e.method), n.headers = new O(e.headers), n.contentType = n.detectContentType(), n.withCredentials = e.withCredentials, n.responseType = e.responseType, n; } return y.a(e, t), e.prototype.detectContentType = function () { switch (this.headers.get("content-type")) {
            case "application/json": return S.JSON;
            case "application/x-www-form-urlencoded": return S.FORM;
            case "multipart/form-data": return S.FORM_DATA;
            case "text/plain":
            case "text/html": return S.TEXT;
            case "application/octet-stream": return this._body instanceof nt ? S.ARRAY_BUFFER : S.BLOB;
            default: return this.detectContentTypeFromBody();
        } }, e.prototype.detectContentTypeFromBody = function () { return null == this._body ? S.NONE : this._body instanceof N ? S.FORM : this._body instanceof tt ? S.FORM_DATA : this._body instanceof et ? S.BLOB : this._body instanceof nt ? S.ARRAY_BUFFER : this._body && "object" == typeof this._body ? S.JSON : S.TEXT; }, e.prototype.getBody = function () { switch (this.contentType) {
            case S.JSON:
            case S.FORM: return this.text();
            case S.FORM_DATA: return this._body;
            case S.TEXT: return this.text();
            case S.BLOB: return this.blob();
            case S.ARRAY_BUFFER: return this.arrayBuffer();
            default: return null;
        } }, e; }(I), X = function () { }, $ = "object" == typeof window ? window : X, tt = $.FormData || X, et = $.Blob || X, nt = $.ArrayBuffer || X, rt = function () { function t(t, e) { this._backend = t, this._defaultOptions = e; } return t.prototype.request = function (t, e) { var n; if ("string" == typeof t)
            n = l(this._backend, new J(p(this._defaultOptions, e, _.Get, t)));
        else {
            if (!(t instanceof J))
                throw new Error("First argument must be a url string or Request instance.");
            n = l(this._backend, t);
        } return n; }, t.prototype.get = function (t, e) { return this.request(new J(p(this._defaultOptions, e, _.Get, t))); }, t.prototype.post = function (t, e, n) { return this.request(new J(p(this._defaultOptions.merge(new Z({ body: e })), n, _.Post, t))); }, t.prototype.put = function (t, e, n) { return this.request(new J(p(this._defaultOptions.merge(new Z({ body: e })), n, _.Put, t))); }, t.prototype.delete = function (t, e) { return this.request(new J(p(this._defaultOptions, e, _.Delete, t))); }, t.prototype.patch = function (t, e, n) { return this.request(new J(p(this._defaultOptions.merge(new Z({ body: e })), n, _.Patch, t))); }, t.prototype.head = function (t, e) { return this.request(new J(p(this._defaultOptions, e, _.Head, t))); }, t.prototype.options = function (t, e) { return this.request(new J(p(this._defaultOptions, e, _.Options, t))); }, t; }();
        rt.decorators = [{ type: m.Injectable }], rt.ctorParameters = function () { return [{ type: x }, { type: Z }]; };
        var ot = function (t) { function e(e, n) { return t.call(this, e, n) || this; } return y.a(e, t), e.prototype.request = function (t, e) { if ("string" == typeof t && (t = new J(p(this._defaultOptions, e, _.Get, t))), !(t instanceof J))
            throw new Error("First argument must be a url string or Request instance."); if (t.method !== _.Get)
            throw new Error("JSONP requests must use GET request method."); return l(this._backend, t); }, e; }(rt);
        ot.decorators = [{ type: m.Injectable }], ot.ctorParameters = function () { return [{ type: x }, { type: Z }]; };
        var it = function () { function t() { } return t; }();
        it.decorators = [{ type: m.NgModule, args: [{ providers: [{ provide: rt, useFactory: h, deps: [G, Z] }, b, { provide: Z, useClass: Y }, { provide: T, useClass: P }, G, { provide: R, useFactory: f }] }] }], it.ctorParameters = function () { return []; };
        var st = function () { function t() { } return t; }();
        st.decorators = [{ type: m.NgModule, args: [{ providers: [{ provide: ot, useFactory: d, deps: [q, Z] }, F, { provide: Z, useClass: Y }, { provide: T, useClass: P }, { provide: q, useClass: z }] }] }], st.ctorParameters = function () { return []; };
        new m.Version("4.3.6");
    }, "CZc+": function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; }, o = this && this.__metadata || function (t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(t, e); };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n("/oeL"), s = n("0NUP"), a = n("EBgA"), u = n("Mc8S"), c = function () { function t(t) { this.state = t, this.dynamicUpdate = !0, this.onItemClicked = new i.EventEmitter, this.onItemSelected = new i.EventEmitter, this.onShow = new i.EventEmitter, this.onHide = new i.EventEmitter; } return t.prototype.toggleMenu = function (t) { void 0 === t && (t = this.button.getPosition()), this.state.menuState.isVisible ? this.hide() : this.show(t); }, t.prototype.hide = function () { this.menu.hide(), this.onHide.emit(this); }, t.prototype.show = function (t) { void 0 === t && (t = this.button.getPosition()), this.menu.show(), this.menu.updatePosition(t), this.onShow.emit(this); }, t.prototype.scrollListener = function () { this.state.menuState.isVisible && this.button && this.dynamicUpdate && this.menu.updatePosition(this.button.getPosition()); }, t.prototype.ngOnInit = function () { var t = this; this.state.dropdownState.onItemClicked.subscribe(function (e) { t.onItemClicked.emit(e), e.preventClose || t.hide.call(t); }), this.button && this.button.onMenuToggled.subscribe(function () { t.toggleMenu(); }), this.state.dropdownState.onItemSelected.subscribe(function (e) { return t.onItemSelected.emit(e); }); }, t; }();
        r([i.ContentChild(s.Ng4DropdownButton), o("design:type", s.Ng4DropdownButton)], c.prototype, "button", void 0), r([i.ContentChild(a.Ng4DropdownMenu), o("design:type", a.Ng4DropdownMenu)], c.prototype, "menu", void 0), r([i.Input(), o("design:type", Object)], c.prototype, "dynamicUpdate", void 0), r([i.Output(), o("design:type", i.EventEmitter)], c.prototype, "onItemClicked", void 0), r([i.Output(), o("design:type", i.EventEmitter)], c.prototype, "onItemSelected", void 0), r([i.Output(), o("design:type", i.EventEmitter)], c.prototype, "onShow", void 0), r([i.Output(), o("design:type", i.EventEmitter)], c.prototype, "onHide", void 0), r([i.HostListener("window:scroll"), o("design:type", Function), o("design:paramtypes", []), o("design:returntype", void 0)], c.prototype, "scrollListener", null), c = r([i.Component({ selector: "ng4-dropdown", templateUrl: "./template.html", providers: [u.DropdownStateService] }), o("design:paramtypes", [u.DropdownStateService])], c), e.Ng4Dropdown = c;
    }, DP67: function (t, e, n) {
        "use strict";
        function r(t) { var e, n = t.Symbol; return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e; }
        var o = n("zijX");
        e.getSymbolObservable = r, e.observable = r(o.root), e.$$observable = e.observable;
    }, EBgA: function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; }, o = this && this.__metadata || function (t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(t, e); };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n("/oeL"), s = n("EyWH"), a = n("mPAg"), u = n("gzB2"), c = n("Mc8S"), l = function () { function t(t, e, n) { this.state = t, this.element = e, this.renderer = n, this.width = 4, this.focusFirstElement = !0, this.appendToBody = !0, this.listeners = { arrowHandler: void 0, handleKeypress: void 0 }; } return t.prototype.show = function () { this.state.menuState.isVisible = !0, this.listeners.handleKeypress = this.renderer.listen(document.body, "keydown", this.handleKeypress.bind(this)), this.listeners.arrowHandler = this.renderer.listen(window, "keydown", a.arrowKeysHandler); }, t.prototype.hide = function () { this.state.menuState.isVisible = !1, this.state.dropdownState.unselect(), this.listeners.arrowHandler(), this.listeners.handleKeypress(); }, t.prototype.updatePosition = function (t) { this.position = t, this.ngDoCheck(); }, t.prototype.handleKeypress = function (t) { var e = t.keyCode, n = this.items.toArray(), r = n.indexOf(this.state.dropdownState.selectedItem); a.ACTIONS.hasOwnProperty(e) && a.ACTIONS[e].call(this, r, n, this.state.dropdownState); }, t.prototype.getMenuElement = function () { return this.element.nativeElement.children[0]; }, t.prototype.calcPositionOffset = function (t) { if (t) {
            var e = this.getMenuElement(), n = void 0 !== window.pageXOffset, r = "CSS1Compat" === (document.compatMode || ""), o = n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft, i = n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop, s = this.applyOffset(t.top + (this.appendToBody ? i - 15 : 0) + "px", t.left + o - 5 + "px"), a = s.top, u = s.left, c = e.clientWidth, l = e.clientHeight, p = parseInt(a) + l + (this.appendToBody ? 0 : i - 15), f = parseInt(u) + c, h = window.innerHeight + window.scrollY, d = window.innerWidth + window.scrollX;
            if (p >= h && (a = parseInt(a.replace("px", "")) - l + "px"), f >= d) {
                var y = f - d + 30;
                u = parseInt(u.replace("px", "")) - y + "px";
            }
            return { top: a, left: u };
        } }, t.prototype.applyOffset = function (t, e) { if (!this.offset)
            return { top: t, left: e }; var n = this.offset.split(" "); return n[1] || (n[1] = "0"), t = parseInt(t.replace("px", "")) + parseInt(n[0]) + "px", e = parseInt(e.replace("px", "")) + parseInt(n[1]) + "px", { top: t, left: e }; }, t.prototype.ngOnInit = function () { this.appendToBody && document.body.appendChild(this.element.nativeElement); }, t.prototype.ngDoCheck = function () { if (this.state.menuState.isVisible && this.position) {
            var t = this.getMenuElement(), e = this.calcPositionOffset(this.position);
            e && (this.renderer.setElementStyle(t, "top", e.top), this.renderer.setElementStyle(t, "left", e.left)), this.focusFirstElement && this.items.first && !this.state.dropdownState.selectedItem && this.state.dropdownState.select(this.items.first, !1);
        } }, t.prototype.ngOnDestroy = function () { var t = this.element.nativeElement; t.parentNode.removeChild(t), this.listeners.handleKeypress && this.listeners.handleKeypress(); }, t; }();
        r([i.Input(), o("design:type", Object)], l.prototype, "width", void 0), r([i.Input(), o("design:type", Object)], l.prototype, "focusFirstElement", void 0), r([i.Input(), o("design:type", String)], l.prototype, "offset", void 0), r([i.Input(), o("design:type", Object)], l.prototype, "appendToBody", void 0), r([i.ContentChildren(u.Ng4MenuItem), o("design:type", i.QueryList)], l.prototype, "items", void 0), l = r([i.Component({ selector: "ng4-dropdown-menu", styleUrls: ["./style.scss"], templateUrl: "./template.html", animations: [s.trigger("fade", [s.state("visible", s.style({ display: "block", overflow: "*" })), s.state("hidden", s.style({ display: "none", overflow: "hidden", width: "0" })), s.transition("hidden => visible", [s.animate(150, s.keyframes([s.style({ opacity: 0, offset: 0, height: "0", width: "0" }), s.style({ opacity: 1, offset: 1, height: "*", width: "*" })]))]), s.transition("visible => hidden", [s.animate(250, s.keyframes([s.style({ opacity: 1, offset: 0, height: "*", width: "*" }), s.style({ opacity: 0, offset: 1, height: "0", width: "0" })]))])]), s.trigger("opacity", [s.transition("hidden => visible", [s.animate(450, s.keyframes([s.style({ opacity: 0, offset: 0 }), s.style({ opacity: 1, offset: 1 })]))]), s.transition("visible => hidden", [s.animate(200, s.keyframes([s.style({ opacity: 1, offset: 0 }), s.style({ opacity: .5, offset: .3 }), s.style({ opacity: 0, offset: 1 })]))])])] }), o("design:paramtypes", [c.DropdownStateService, i.ElementRef, i.Renderer])], l), e.Ng4DropdownMenu = l;
    }, Emqh: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = function (t) { function e(e) { t.call(this), this.errors = e; var n = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function (t, e) { return e + 1 + ") " + t.toString(); }).join("\n  ") : ""); this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message; } return r(e, t), e; }(Error);
        e.UnsubscriptionError = o;
    }, EyWH: function (t, e, n) {
        "use strict";
        function r(t, e) { return { type: 7, name: t, definitions: e, options: {} }; }
        function o(t, e) { return void 0 === e && (e = null), { type: 4, styles: e, timings: t }; }
        function i(t, e) { return void 0 === e && (e = null), { type: 3, steps: t, options: e }; }
        function s(t, e) { return void 0 === e && (e = null), { type: 2, steps: t, options: e }; }
        function a(t) { return { type: 6, styles: t, offset: null }; }
        function u(t, e, n) { return { type: 0, name: t, styles: e, options: n }; }
        function c(t) { return { type: 5, steps: t }; }
        function l(t, e, n) { return void 0 === n && (n = null), { type: 1, expr: t, animation: e, options: n }; }
        function p(t, e) { return void 0 === e && (e = null), { type: 8, animation: t, options: e }; }
        function f(t) { return void 0 === t && (t = null), { type: 9, options: t }; }
        function h(t, e) { return void 0 === e && (e = null), { type: 10, animation: t, options: e }; }
        function d(t, e, n) { return void 0 === n && (n = null), { type: 11, selector: t, animation: e, options: n }; }
        function y(t, e) { return { type: 12, timings: t, animation: e }; }
        function m(t) { Promise.resolve(null).then(t); }
        Object.defineProperty(e, "__esModule", { value: !0 }), n.d(e, "AnimationBuilder", function () { return v; }), n.d(e, "AnimationFactory", function () { return g; }), n.d(e, "AUTO_STYLE", function () { return b; }), n.d(e, "animate", function () { return o; }), n.d(e, "animateChild", function () { return f; }), n.d(e, "animation", function () { return p; }), n.d(e, "group", function () { return i; }), n.d(e, "keyframes", function () { return c; }), n.d(e, "query", function () { return d; }), n.d(e, "sequence", function () { return s; }), n.d(e, "stagger", function () { return y; }), n.d(e, "state", function () { return u; }), n.d(e, "style", function () { return a; }), n.d(e, "transition", function () { return l; }), n.d(e, "trigger", function () { return r; }), n.d(e, "useAnimation", function () { return h; }), n.d(e, "NoopAnimationPlayer", function () { return _; }), n.d(e, "ɵAnimationGroupPlayer", function () { return w; }), n.d(e, "ɵPRE_STYLE", function () { return C; });
        var v = function () { function t() { } return t.prototype.build = function (t) { }, t; }(), g = function () { function t() { } return t.prototype.create = function (t, e) { }, t; }(), b = "*", _ = function () { function t() { this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this.parentPlayer = null, this.totalTime = 0; } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) { return t(); }), this._onDoneFns = []); }, t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.init = function () { }, t.prototype.play = function () { this.hasStarted() || (this.triggerMicrotask(), this._onStart()), this._started = !0; }, t.prototype.triggerMicrotask = function () { var t = this; m(function () { return t._onFinish(); }); }, t.prototype._onStart = function () { this._onStartFns.forEach(function (t) { return t(); }), this._onStartFns = []; }, t.prototype.pause = function () { }, t.prototype.restart = function () { }, t.prototype.finish = function () { this._onFinish(); }, t.prototype.destroy = function () { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(function (t) { return t(); }), this._onDestroyFns = []); }, t.prototype.reset = function () { }, t.prototype.setPosition = function (t) { }, t.prototype.getPosition = function () { return 0; }, t; }(), w = function () { function t(t) { var e = this; this._players = t, this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0; var n = 0, r = 0, o = 0, i = this._players.length; 0 == i ? m(function () { return e._onFinish(); }) : this._players.forEach(function (t) { t.parentPlayer = e, t.onDone(function () { ++n >= i && e._onFinish(); }), t.onDestroy(function () { ++r >= i && e._onDestroy(); }), t.onStart(function () { ++o >= i && e._onStart(); }); }), this.totalTime = this._players.reduce(function (t, e) { return Math.max(t, e.totalTime); }, 0); } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) { return t(); }), this._onDoneFns = []); }, t.prototype.init = function () { this._players.forEach(function (t) { return t.init(); }); }, t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype._onStart = function () { this.hasStarted() || (this._onStartFns.forEach(function (t) { return t(); }), this._onStartFns = [], this._started = !0); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.play = function () { this.parentPlayer || this.init(), this._onStart(), this._players.forEach(function (t) { return t.play(); }); }, t.prototype.pause = function () { this._players.forEach(function (t) { return t.pause(); }); }, t.prototype.restart = function () { this._players.forEach(function (t) { return t.restart(); }); }, t.prototype.finish = function () { this._onFinish(), this._players.forEach(function (t) { return t.finish(); }); }, t.prototype.destroy = function () { this._onDestroy(); }, t.prototype._onDestroy = function () { this._destroyed || (this._destroyed = !0, this._onFinish(), this._players.forEach(function (t) { return t.destroy(); }), this._onDestroyFns.forEach(function (t) { return t(); }), this._onDestroyFns = []); }, t.prototype.reset = function () { this._players.forEach(function (t) { return t.reset(); }), this._destroyed = !1, this._finished = !1, this._started = !1; }, t.prototype.setPosition = function (t) { var e = t * this.totalTime; this._players.forEach(function (t) { var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1; t.setPosition(n); }); }, t.prototype.getPosition = function () { var t = 0; return this._players.forEach(function (e) { var n = e.getPosition(); t = Math.min(n, t); }), t; }, Object.defineProperty(t.prototype, "players", { get: function () { return this._players; }, enumerable: !0, configurable: !0 }), t.prototype.beforeDestroy = function () { this.players.forEach(function (t) { t.beforeDestroy && t.beforeDestroy(); }); }, t; }(), C = "!";
    }, H6Sg: function (t, e, n) {
        "use strict";
        function r(t) { return null != t && "object" == typeof t; }
        e.isObject = r;
    }, I3ay: function (t, e, n) {
        "use strict";
        function r() { return this.lift(new o.MergeAllOperator(1)); }
        var o = n("TIdC");
        e.concatAll = r;
    }, LEug: function (t, e, n) {
        "use strict";
        var r = n("ViUi");
        e.merge = r.mergeStatic;
    }, Lhvy: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = function (t) { function e() { var e = t.call(this, "object unsubscribed"); this.name = e.name = "ObjectUnsubscribedError", this.stack = e.stack, this.message = e.message; } return r(e, t), e; }(Error);
        e.ObjectUnsubscribedError = o;
    }, LiYJ: function (t, e, n) {
        "use strict";
        e.empty = { closed: !0, next: function (t) { }, error: function (t) { throw t; }, complete: function () { } };
    }, Mc8S: function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n("/oeL"), i = n("lKg8"), s = function () { function t() { this.menuState = { isVisible: !1, toString: function () { return !0 === this.isVisible ? "visible" : "hidden"; } }, this.dropdownState = new i.Ng4DropdownState; } return t; }();
        s = r([o.Injectable()], s), e.DropdownStateService = s;
    }, MicL: function (t, e, n) {
        "use strict";
        function r(t) { return t && "function" == typeof t.schedule; }
        e.isScheduler = r;
    }, NSJx: function (t, e, n) {
        "use strict";
        e.isArray = Array.isArray || function (t) { return t && "number" == typeof t.length; };
    }, OWbQ: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("NSJx"), i = n("lhZu"), s = n("mUVF"), a = n("mihg"), u = n("TA58"), c = n("wZOE"), l = n("wCVK"), p = n("2B7B"), f = n("bKpL"), h = n("AHF9"), d = n("DP67"), y = function (t) { function e(e, n) { t.call(this, null), this.ish = e, this.scheduler = n; } return r(e, t), e.create = function (t, n) { if (null != t) {
            if ("function" == typeof t[d.observable])
                return t instanceof f.Observable && !n ? t : new e(t, n);
            if (o.isArray(t))
                return new c.ArrayObservable(t, n);
            if (s.isPromise(t))
                return new a.PromiseObservable(t, n);
            if ("function" == typeof t[p.iterator] || "string" == typeof t)
                return new u.IteratorObservable(t, n);
            if (i.isArrayLike(t))
                return new l.ArrayLikeObservable(t, n);
        } throw new TypeError((null !== t && typeof t || t) + " is not observable"); }, e.prototype._subscribe = function (t) { var e = this.ish, n = this.scheduler; return null == n ? e[d.observable]().subscribe(t) : e[d.observable]().subscribe(new h.ObserveOnSubscriber(t, n, 0)); }, e; }(f.Observable);
        e.FromObservable = y;
    }, QU9E: function (t, e, n) {
        "use strict";
        var r = n("mihg");
        e.fromPromise = r.PromiseObservable.create;
    }, R43p: function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n("CZc+");
        e.Ng4Dropdown = o.Ng4Dropdown;
        var i = n("EBgA");
        e.Ng4DropdownMenu = i.Ng4DropdownMenu;
        var s = n("0NUP");
        e.Ng4DropdownButton = s.Ng4DropdownButton;
        var a = n("gzB2");
        e.Ng4MenuItem = a.Ng4MenuItem;
        var u = n("/oeL"), c = n("qbdv"), l = n("fL27"), p = n("Mc8S");
        e.DropdownStateService = p.DropdownStateService;
        var f = function () { function t() { } return t; }();
        f = r([u.NgModule({ exports: [a.Ng4MenuItem, s.Ng4DropdownButton, i.Ng4DropdownMenu, o.Ng4Dropdown], declarations: [o.Ng4Dropdown, a.Ng4MenuItem, s.Ng4DropdownButton, i.Ng4DropdownMenu], imports: [c.CommonModule, l.BrowserAnimationsModule] })], f), e.Ng4DropdownModule = f;
    }, RdI5: function (t, e, n) {
        "use strict";
        function r() { try {
            return i.apply(this, arguments);
        }
        catch (t) {
            return s.errorObject.e = t, s.errorObject;
        } }
        function o(t) { return i = t, r; }
        var i, s = n("XRvs");
        e.tryCatch = o;
    }, "T14+": function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("fclq"), i = n("xFbG"), s = n("LiYJ"), a = n("dkwD"), u = function (t) { function e(n, r, o) { switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
            case 0:
                this.destination = s.empty;
                break;
            case 1:
                if (!n) {
                    this.destination = s.empty;
                    break;
                }
                if ("object" == typeof n) {
                    n instanceof e ? (this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new c(this, n));
                    break;
                }
            default: this.syncErrorThrowable = !0, this.destination = new c(this, n, r, o);
        } } return r(e, t), e.prototype[a.rxSubscriber] = function () { return this; }, e.create = function (t, n, r) { var o = new e(t, n, r); return o.syncErrorThrowable = !1, o; }, e.prototype.next = function (t) { this.isStopped || this._next(t); }, e.prototype.error = function (t) { this.isStopped || (this.isStopped = !0, this._error(t)); }, e.prototype.complete = function () { this.isStopped || (this.isStopped = !0, this._complete()); }, e.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this)); }, e.prototype._next = function (t) { this.destination.next(t); }, e.prototype._error = function (t) { this.destination.error(t), this.unsubscribe(); }, e.prototype._complete = function () { this.destination.complete(), this.unsubscribe(); }, e.prototype._unsubscribeAndRecycle = function () { var t = this, e = t._parent, n = t._parents; return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = n, this; }, e; }(i.Subscription);
        e.Subscriber = u;
        var c = function (t) { function e(e, n, r, i) { t.call(this), this._parentSubscriber = e; var a, u = this; o.isFunction(n) ? a = n : n && (a = n.next, r = n.error, i = n.complete, n !== s.empty && (u = Object.create(n), o.isFunction(u.unsubscribe) && this.add(u.unsubscribe.bind(u)), u.unsubscribe = this.unsubscribe.bind(this))), this._context = u, this._next = a, this._error = r, this._complete = i; } return r(e, t), e.prototype.next = function (t) { if (!this.isStopped && this._next) {
            var e = this._parentSubscriber;
            e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
        } }, e.prototype.error = function (t) { if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._error)
                e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else {
                if (!e.syncErrorThrowable)
                    throw this.unsubscribe(), t;
                e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe();
            }
        } }, e.prototype.complete = function () { var t = this; if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._complete) {
                var n = function () { return t._complete.call(t._context); };
                e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
            }
            else
                this.unsubscribe();
        } }, e.prototype.__tryOrUnsub = function (t, e) { try {
            t.call(this._context, e);
        }
        catch (t) {
            throw this.unsubscribe(), t;
        } }, e.prototype.__tryOrSetError = function (t, e, n) { try {
            e.call(this._context, n);
        }
        catch (e) {
            return t.syncErrorValue = e, t.syncErrorThrown = !0, !0;
        } return !1; }, e.prototype._unsubscribe = function () { var t = this._parentSubscriber; this._context = null, this._parentSubscriber = null, t.unsubscribe(); }, e; }(u);
    }, TA58: function (t, e, n) {
        "use strict";
        function r(t) { var e = t[l.iterator]; if (!e && "string" == typeof t)
            return new f(t); if (!e && void 0 !== t.length)
            return new h(t); if (!e)
            throw new TypeError("object is not iterable"); return t[l.iterator](); }
        function o(t) { var e = +t.length; return isNaN(e) ? 0 : 0 !== e && i(e) ? (e = s(e) * Math.floor(Math.abs(e)), e <= 0 ? 0 : e > d ? d : e) : e; }
        function i(t) { return "number" == typeof t && u.root.isFinite(t); }
        function s(t) { var e = +t; return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1; }
        var a = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, u = n("zijX"), c = n("bKpL"), l = n("2B7B"), p = function (t) { function e(e, n) { if (t.call(this), this.scheduler = n, null == e)
            throw new Error("iterator cannot be null."); this.iterator = r(e); } return a(e, t), e.create = function (t, n) { return new e(t, n); }, e.dispatch = function (t) { var e = t.index, n = t.hasError, r = t.iterator, o = t.subscriber; if (n)
            return void o.error(t.error); var i = r.next(); return i.done ? void o.complete() : (o.next(i.value), t.index = e + 1, o.closed ? void ("function" == typeof r.return && r.return()) : void this.schedule(t)); }, e.prototype._subscribe = function (t) { var n = this, r = n.iterator, o = n.scheduler; if (o)
            return o.schedule(e.dispatch, 0, { index: 0, iterator: r, subscriber: t }); for (;;) {
            var i = r.next();
            if (i.done) {
                t.complete();
                break;
            }
            if (t.next(i.value), t.closed) {
                "function" == typeof r.return && r.return();
                break;
            }
        } }, e; }(c.Observable);
        e.IteratorObservable = p;
        var f = function () { function t(t, e, n) { void 0 === e && (e = 0), void 0 === n && (n = t.length), this.str = t, this.idx = e, this.len = n; } return t.prototype[l.iterator] = function () { return this; }, t.prototype.next = function () { return this.idx < this.len ? { done: !1, value: this.str.charAt(this.idx++) } : { done: !0, value: void 0 }; }, t; }(), h = function () { function t(t, e, n) { void 0 === e && (e = 0), void 0 === n && (n = o(t)), this.arr = t, this.idx = e, this.len = n; } return t.prototype[l.iterator] = function () { return this; }, t.prototype.next = function () { return this.idx < this.len ? { done: !1, value: this.arr[this.idx++] } : { done: !0, value: void 0 }; }, t; }(), d = Math.pow(2, 53) - 1;
    }, THYR: function (t, e, n) {
        "use strict";
        function r(t, e) { return this.lift(new s(t, e, this)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+");
        e.every = r;
        var s = function () { function t(t, e, n) { this.predicate = t, this.thisArg = e, this.source = n; } return t.prototype.call = function (t, e) { return e.subscribe(new a(t, this.predicate, this.thisArg, this.source)); }, t; }(), a = function (t) { function e(e, n, r, o) { t.call(this, e), this.predicate = n, this.thisArg = r, this.source = o, this.index = 0, this.thisArg = r || this; } return o(e, t), e.prototype.notifyComplete = function (t) { this.destination.next(t), this.destination.complete(); }, e.prototype._next = function (t) { var e = !1; try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
        }
        catch (t) {
            return void this.destination.error(t);
        } e || this.notifyComplete(!1); }, e.prototype._complete = function () { this.notifyComplete(!0); }, e; }(i.Subscriber);
    }, TIdC: function (t, e, n) {
        "use strict";
        function r(t) { return void 0 === t && (t = Number.POSITIVE_INFINITY), this.lift(new a(t)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("yW9Z"), s = n("ktfo");
        e.mergeAll = r;
        var a = function () { function t(t) { this.concurrent = t; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.concurrent)); }, t; }();
        e.MergeAllOperator = a;
        var u = function (t) { function e(e, n) { t.call(this, e), this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0; } return o(e, t), e.prototype._next = function (t) { this.active < this.concurrent ? (this.active++, this.add(s.subscribeToResult(this, t))) : this.buffer.push(t); }, e.prototype._complete = function () { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(); }, e.prototype.notifyComplete = function (t) { var e = this.buffer; this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete(); }, e; }(i.OuterSubscriber);
        e.MergeAllSubscriber = u;
    }, TQn8: function (t, e, n) {
        "use strict";
        function r(t, e) { return this.lift(new o.MergeMapOperator(t, e, 1)); }
        var o = n("cPhF");
        e.concatMap = r;
    }, TpsG: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = function (t) { function e() { var e = t.call(this, "no elements in sequence"); this.name = e.name = "EmptyError", this.stack = e.stack, this.message = e.message; } return r(e, t), e; }(Error);
        e.EmptyError = o;
    }, Tq0x: function (t, e, n) {
        "use strict";
        function r(t, e) { var n = !1; return arguments.length >= 2 && (n = !0), this.lift(new s(t, e, n)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+");
        e.reduce = r;
        var s = function () { function t(t, e, n) { void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n; } return t.prototype.call = function (t, e) { return e.subscribe(new a(t, this.accumulator, this.seed, this.hasSeed)); }, t; }();
        e.ReduceOperator = s;
        var a = function (t) { function e(e, n, r, o) { t.call(this, e), this.accumulator = n, this.hasSeed = o, this.index = 0, this.hasValue = !1, this.acc = r, this.hasSeed || this.index++; } return o(e, t), e.prototype._next = function (t) { this.hasValue || (this.hasValue = this.hasSeed) ? this._tryReduce(t) : (this.acc = t, this.hasValue = !0); }, e.prototype._tryReduce = function (t) { var e; try {
            e = this.accumulator(this.acc, t, this.index++);
        }
        catch (t) {
            return void this.destination.error(t);
        } this.acc = e; }, e.prototype._complete = function () { (this.hasValue || this.hasSeed) && this.destination.next(this.acc), this.destination.complete(); }, e; }(i.Subscriber);
        e.ReduceSubscriber = a;
    }, ViUi: function (t, e, n) {
        "use strict";
        function r() { for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e]; return this.lift.call(o.apply(void 0, [this].concat(t))); }
        function o() { for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e]; var n = Number.POSITIVE_INFINITY, r = null, o = t[t.length - 1]; return u.isScheduler(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof i.Observable ? t[0] : new s.ArrayObservable(t, r).lift(new a.MergeAllOperator(n)); }
        var i = n("bKpL"), s = n("wZOE"), a = n("TIdC"), u = n("MicL");
        e.merge = r, e.mergeStatic = o;
    }, "W+RQ": function (t, e, n) {
        "use strict";
        function r(t) { return s["ɵvid"](0, [(t()(), s["ɵeld"](0, null, null, 3, "div", [["class", "ng4-menu-item"], ["role", "button"], ["tabindex", "0"]], [[2, "ng4-menu-item--selected", null]], [[null, "keydown.enter"], [null, "click"], [null, "mouseover"]], function (t, e, n) { var r = !0, o = t.component; if ("keydown.enter" === e) {
                r = !1 !== o.click() && r;
            } if ("click" === e) {
                r = !1 !== o.click() && r;
            } if ("mouseover" === e) {
                r = !1 !== o.select() && r;
            } return r; }, null, null)), (t()(), s["ɵted"](null, ["\n        "])), s["ɵncd"](null, 0), (t()(), s["ɵted"](null, ["\n"])), (t()(), s["ɵted"](null, ["\n"]))], null, function (t, e) { t(e, 0, 0, e.component.isSelected); }); }
        function o(t) { return s["ɵvid"](0, [(t()(), s["ɵeld"](0, null, null, 1, "ng4-menu-item", [], null, null, null, r, l)), s["ɵdid"](49152, null, 0, a.Ng4MenuItem, [u.DropdownStateService, s.ElementRef, s.Renderer], null, null)], null, null); }
        var i = n("/8eP"), s = n("/oeL"), a = n("gzB2"), u = (n.n(a), n("Mc8S"));
        n.n(u);
        n.d(e, "b", function () { return l; }), e.a = r;
        var c = [i.a], l = s["ɵcrt"]({ encapsulation: 0, styles: c, data: {} });
        s["ɵccf"]("ng4-menu-item", a.Ng4MenuItem, o, { preventClose: "preventClose", value: "value" }, {}, ["*"]);
    }, WSkQ: function (t, e, n) {
        "use strict";
        function r(t, e, n) { return this.lift(new a(t, e, n, this)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+"), s = n("TpsG");
        e.last = r;
        var a = function () { function t(t, e, n, r) { this.predicate = t, this.resultSelector = e, this.defaultValue = n, this.source = r; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.predicate, this.resultSelector, this.defaultValue, this.source)); }, t; }(), u = function (t) { function e(e, n, r, o, i) { t.call(this, e), this.predicate = n, this.resultSelector = r, this.defaultValue = o, this.source = i, this.hasValue = !1, this.index = 0, void 0 !== o && (this.lastValue = o, this.hasValue = !0); } return o(e, t), e.prototype._next = function (t) { var e = this.index++; if (this.predicate)
            this._tryPredicate(t, e);
        else {
            if (this.resultSelector)
                return void this._tryResultSelector(t, e);
            this.lastValue = t, this.hasValue = !0;
        } }, e.prototype._tryPredicate = function (t, e) { var n; try {
            n = this.predicate(t, e, this.source);
        }
        catch (t) {
            return void this.destination.error(t);
        } if (n) {
            if (this.resultSelector)
                return void this._tryResultSelector(t, e);
            this.lastValue = t, this.hasValue = !0;
        } }, e.prototype._tryResultSelector = function (t, e) { var n; try {
            n = this.resultSelector(t, e);
        }
        catch (t) {
            return void this.destination.error(t);
        } this.lastValue = n, this.hasValue = !0; }, e.prototype._complete = function () { var t = this.destination; this.hasValue ? (t.next(this.lastValue), t.complete()) : t.error(new s.EmptyError); }, e; }(i.Subscriber);
    }, XRvs: function (t, e, n) {
        "use strict";
        e.errorObject = { e: {} };
    }, YdN0: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = [".ng4-dropdown-menu[_ngcontent-%COMP%]{z-index:100;overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;display:block}.ng4-dropdown-menu.ng4-dropdown-menu--inside-element[_ngcontent-%COMP%]{position:fixed}.ng4-dropdown-menu.ng4-dropdown-menu--width--2[_ngcontent-%COMP%]{width:200px}.ng4-dropdown-menu.ng4-dropdown-menu--width--4[_ngcontent-%COMP%]{width:260px}.ng4-dropdown-menu.ng4-dropdown-menu--width--6[_ngcontent-%COMP%]{width:320px}.ng4-dropdown-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}[_nghost-%COMP%]     .ng4-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"];
    }, aOKN: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("bKpL"), i = function (t) { function e(e, n) { t.call(this), this.value = e, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1); } return r(e, t), e.create = function (t, n) { return new e(t, n); }, e.dispatch = function (t) { var e = t.done, n = t.value, r = t.subscriber; if (e)
            return void r.complete(); r.next(n), r.closed || (t.done = !0, this.schedule(t)); }, e.prototype._subscribe = function (t) { var n = this.value, r = this.scheduler; if (r)
            return r.schedule(e.dispatch, 0, { done: !1, value: n, subscriber: t }); t.next(n), t.closed || t.complete(); }, e; }(o.Observable);
        e.ScalarObservable = i;
    }, bKpL: function (t, e, n) {
        "use strict";
        var r = n("zijX"), o = n("rf3q"), i = n("DP67"), s = function () { function t(t) { this._isScalar = !1, t && (this._subscribe = t); } return t.prototype.lift = function (e) { var n = new t; return n.source = this, n.operator = e, n; }, t.prototype.subscribe = function (t, e, n) { var r = this.operator, i = o.toSubscriber(t, e, n); if (r ? r.call(i, this.source) : i.add(this.source ? this._subscribe(i) : this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown))
            throw i.syncErrorValue; return i; }, t.prototype._trySubscribe = function (t) { try {
            return this._subscribe(t);
        }
        catch (e) {
            t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e);
        } }, t.prototype.forEach = function (t, e) { var n = this; if (e || (r.root.Rx && r.root.Rx.config && r.root.Rx.config.Promise ? e = r.root.Rx.config.Promise : r.root.Promise && (e = r.root.Promise)), !e)
            throw new Error("no Promise impl found"); return new e(function (e, r) { var o; o = n.subscribe(function (e) { if (o)
            try {
                t(e);
            }
            catch (t) {
                r(t), o.unsubscribe();
            }
        else
            t(e); }, r, e); }); }, t.prototype._subscribe = function (t) { return this.source.subscribe(t); }, t.prototype[i.observable] = function () { return this; }, t.create = function (e) { return new t(e); }, t; }();
        e.Observable = s;
    }, cPhF: function (t, e, n) {
        "use strict";
        function r(t, e, n) { return void 0 === n && (n = Number.POSITIVE_INFINITY), "number" == typeof e && (n = e, e = null), this.lift(new a(t, e, n)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("ktfo"), s = n("yW9Z");
        e.mergeMap = r;
        var a = function () { function t(t, e, n) { void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.resultSelector = e, this.concurrent = n; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.project, this.resultSelector, this.concurrent)); }, t; }();
        e.MergeMapOperator = a;
        var u = function (t) { function e(e, n, r, o) { void 0 === o && (o = Number.POSITIVE_INFINITY), t.call(this, e), this.project = n, this.resultSelector = r, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0; } return o(e, t), e.prototype._next = function (t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t); }, e.prototype._tryNext = function (t) { var e, n = this.index++; try {
            e = this.project(t, n);
        }
        catch (t) {
            return void this.destination.error(t);
        } this.active++, this._innerSub(e, t, n); }, e.prototype._innerSub = function (t, e, n) { this.add(i.subscribeToResult(this, t, e, n)); }, e.prototype._complete = function () { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(); }, e.prototype.notifyNext = function (t, e, n, r, o) { this.resultSelector ? this._notifyResultSelector(t, e, n, r) : this.destination.next(e); }, e.prototype._notifyResultSelector = function (t, e, n, r) { var o; try {
            o = this.resultSelector(t, e, n, r);
        }
        catch (t) {
            return void this.destination.error(t);
        } this.destination.next(o); }, e.prototype.notifyComplete = function (t) { var e = this.buffer; this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete(); }, e; }(s.OuterSubscriber);
        e.MergeMapSubscriber = u;
    }, dkwD: function (t, e, n) {
        "use strict";
        var r = n("zijX"), o = r.root.Symbol;
        e.rxSubscriber = "function" == typeof o && "function" == typeof o.for ? o.for("rxSubscriber") : "@@rxSubscriber", e.$$rxSubscriber = e.rxSubscriber;
    }, f9zQ: function (t, e, n) {
        "use strict";
        function r(t) { switch (t.length) {
            case 0: return new ft.NoopAnimationPlayer;
            case 1: return t[0];
            default: return new ft["ɵAnimationGroupPlayer"](t);
        } }
        function o(t, e, n, r, o, i) { void 0 === o && (o = {}), void 0 === i && (i = {}); var s = [], a = [], u = -1, c = null; if (r.forEach(function (t) { var n = t.offset, r = n == u, l = r && c || {}; Object.keys(t).forEach(function (n) { var r = n, a = t[n]; if ("offset" !== n)
            switch (r = e.normalizePropertyName(r, s), a) {
                case ft["ɵPRE_STYLE"]:
                    a = o[n];
                    break;
                case ft.AUTO_STYLE:
                    a = i[n];
                    break;
                default: a = e.normalizeStyleValue(n, r, a, s);
            } l[r] = a; }), r || a.push(l), c = l, u = n; }), s.length) {
            throw new Error("Unable to animate due to the following errors:\n - " + s.join("\n - "));
        } return a; }
        function i(t, e, n, r) { switch (e) {
            case "start":
                t.onStart(function () { return r(n && s(n, "start", t.totalTime)); });
                break;
            case "done":
                t.onDone(function () { return r(n && s(n, "done", t.totalTime)); });
                break;
            case "destroy": t.onDestroy(function () { return r(n && s(n, "destroy", t.totalTime)); });
        } }
        function s(t, e, n) { var r = a(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, void 0 == n ? t.totalTime : n), o = t._data; return null != o && (r._data = o), r; }
        function a(t, e, n, r, o, i) { return void 0 === o && (o = ""), void 0 === i && (i = 0), { element: t, triggerName: e, fromState: n, toState: r, phaseName: o, totalTime: i }; }
        function u(t, e, n) { var r; return t instanceof Map ? (r = t.get(e)) || t.set(e, r = n) : (r = t[e]) || (r = t[e] = n), r; }
        function c(t) { var e = t.indexOf(":"); return [t.substring(1, e), t.substr(e + 1)]; }
        function l(t) { if ("number" == typeof t)
            return t; var e = t.match(/^(-?[\.\d]+)(m?s)/); return !e || e.length < 2 ? 0 : p(parseFloat(e[1]), e[2]); }
        function p(t, e) { switch (e) {
            case "s": return t * St;
            default: return t;
        } }
        function f(t, e, n) { return t.hasOwnProperty("duration") ? t : h(t, e, n); }
        function h(t, e, n) { var r, o = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i, i = 0, s = ""; if ("string" == typeof t) {
            var a = t.match(o);
            if (null === a)
                return e.push('The provided timing value "' + t + '" is invalid.'), { duration: 0, delay: 0, easing: "" };
            r = p(parseFloat(a[1]), a[2]);
            var u = a[3];
            null != u && (i = p(Math.floor(parseFloat(u)), a[4]));
            var c = a[5];
            c && (s = c);
        }
        else
            r = t; if (!n) {
            var l = !1, f = e.length;
            r < 0 && (e.push("Duration values below 0 are not allowed for this animation step."), l = !0), i < 0 && (e.push("Delay values below 0 are not allowed for this animation step."), l = !0), l && e.splice(f, 0, 'The provided timing value "' + t + '" is invalid.');
        } return { duration: r, delay: i, easing: s }; }
        function d(t, e) { return void 0 === e && (e = {}), Object.keys(t).forEach(function (n) { e[n] = t[n]; }), e; }
        function y(t) { var e = {}; return Array.isArray(t) ? t.forEach(function (t) { return m(t, !1, e); }) : m(t, !1, e), e; }
        function m(t, e, n) { if (void 0 === n && (n = {}), e)
            for (var r in t)
                n[r] = t[r];
        else
            d(t, n); return n; }
        function v(t, e) { t.style && Object.keys(e).forEach(function (n) { var r = E(n); t.style[r] = e[n]; }); }
        function g(t, e) { t.style && Object.keys(e).forEach(function (e) { var n = E(e); t.style[n] = ""; }); }
        function b(t) { return Array.isArray(t) ? 1 == t.length ? t[0] : n.i(ft.sequence)(t) : t; }
        function _(t, e, n) { var r = e.params || {}, o = w(t); o.length && o.forEach(function (t) { r.hasOwnProperty(t) || n.push("Unable to resolve the local animation param " + t + " in the given list of values"); }); }
        function w(t) { var e = []; if ("string" == typeof t) {
            for (var n = t.toString(), r = void 0; r = xt.exec(n);)
                e.push(r[1]);
            xt.lastIndex = 0;
        } return e; }
        function C(t, e, n) { var r = t.toString(), o = r.replace(xt, function (t, r) { var o = e[r]; return e.hasOwnProperty(r) || (n.push("Please provide a value for the animation param " + r), o = ""), o.toString(); }); return o == r ? t : o; }
        function S(t) { for (var e = [], n = t.next(); !n.done;)
            e.push(n.value), n = t.next(); return e; }
        function E(t) { return t.replace(Rt, function () { for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]; return t[1].toUpperCase(); }); }
        function O(t, e) { return 0 === t || 0 === e; }
        function T(t, e, n) { switch (e.type) {
            case 7: return t.visitTrigger(e, n);
            case 0: return t.visitState(e, n);
            case 1: return t.visitTransition(e, n);
            case 2: return t.visitSequence(e, n);
            case 3: return t.visitGroup(e, n);
            case 4: return t.visitAnimate(e, n);
            case 5: return t.visitKeyframes(e, n);
            case 6: return t.visitStyle(e, n);
            case 8: return t.visitReference(e, n);
            case 9: return t.visitAnimateChild(e, n);
            case 10: return t.visitAnimateRef(e, n);
            case 11: return t.visitQuery(e, n);
            case 12: return t.visitStagger(e, n);
            default: throw new Error("Unable to resolve animation metadata node #" + e.type);
        } }
        function P(t, e) { var n = []; return "string" == typeof t ? t.split(/\s*,\s*/).forEach(function (t) { return x(t, n, e); }) : n.push(t), n; }
        function x(t, e, n) { ":" == t[0] && (t = R(t, n)); var r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/); if (null == r || r.length < 4)
            return n.push('The provided transition expression "' + t + '" is not supported'), e; var o = r[1], i = r[2], s = r[3]; e.push(A(o, s)); var a = o == Wt && s == Wt; "<" != i[0] || a || e.push(A(s, o)); }
        function R(t, e) { switch (t) {
            case ":enter": return "void => *";
            case ":leave": return "* => void";
            default: return e.push('The transition alias value "' + t + '" is not supported'), "* => *";
        } }
        function A(t, e) { return function (n, r) { var o = t == Wt || t == n, i = e == Wt || e == r; return o || "boolean" != typeof n || (o = n ? "true" === t : "false" === t), i || "boolean" != typeof r || (i = r ? "true" === e : "false" === e), o && i; }; }
        function k(t, e) { return (new Xt).build(t, e); }
        function N(t) { var e = !!t.split(/\s*,\s*/).find(function (t) { return t == Gt; }); return e && (t = t.replace(Zt, "")), t = t.replace(Jt, Et).replace(Yt, Ot).replace(/@\*/g, Tt).replace(/@\w+/g, function (t) { return Tt + "-" + t.substr(1); }).replace(/:animating/g, Pt), [t, e]; }
        function I(t) { return t ? d(t) : null; }
        function j(t) { if ("string" == typeof t)
            return null; var e = null; if (Array.isArray(t))
            t.forEach(function (t) { if (M(t) && t.hasOwnProperty("offset")) {
                var n = t;
                e = parseFloat(n.offset), delete n.offset;
            } });
        else if (M(t) && t.hasOwnProperty("offset")) {
            var n = t;
            e = parseFloat(n.offset), delete n.offset;
        } return e; }
        function M(t) { return !Array.isArray(t) && "object" == typeof t; }
        function D(t, e) { var n = null; if (t.hasOwnProperty("duration"))
            n = t;
        else if ("number" == typeof t) {
            f(t, e).duration;
            return new Kt(t, 0, "");
        } var r = t; return r.split(/\s+/).some(function (t) { return "{" == t.charAt(0) && "{" == t.charAt(1); }) ? new Qt(r) : (n = n || f(r, e), new Kt(n.duration, n.delay, n.easing)); }
        function L(t) { return t ? (t = d(t), t.params && (t.params = I(t.params))) : t = {}, t; }
        function F(t, e, n, r, o, i, s, a) { return void 0 === s && (s = null), void 0 === a && (a = !1), { type: 1, element: t, keyframes: e, preStyleProps: n, postStyleProps: r, duration: o, delay: i, totalTime: o + i, easing: s, subTimeline: a }; }
        function V(t, e, n, r, o, i, s, a) { return void 0 === r && (r = {}), void 0 === o && (o = {}), void 0 === a && (a = []), (new ee).buildKeyframes(t, e, n, r, o, i, s, a); }
        function U(t, e) { void 0 === e && (e = 3); var n = Math.pow(10, e - 1); return Math.round(t * n) / n; }
        function H(t, e) { var n, r = {}; return t.forEach(function (t) { "*" === t ? (n = n || Object.keys(e), n.forEach(function (t) { r[t] = ft.AUTO_STYLE; })) : m(t, !1, r); }), r; }
        function B(t, e, n, r, o, i, s, a, u, c, l, p) { return { type: 0, element: t, triggerName: e, isRemovalTransition: o, fromState: n, fromStyles: i, toState: r, toStyles: s, timelines: a, queriedElements: u, preStyleProps: c, postStyleProps: l, errors: p }; }
        function q(t, e, n) { return t.some(function (t) { return t(e, n); }); }
        function z(t, e) { return new fe(t, e); }
        function K(t, e) { var n = [function (t, e) { return !0; }], r = new Mt([]), o = new jt(n, r); return new le(t, o, e); }
        function Q(t, e, n) { t.hasOwnProperty(e) ? t.hasOwnProperty(n) || (t[n] = t[e]) : t.hasOwnProperty(n) && (t[e] = t[n]); }
        function W(t, e, n) { var r; if (t instanceof Map) {
            if (r = t.get(e)) {
                if (r.length) {
                    var o = r.indexOf(n);
                    r.splice(o, 1);
                }
                0 == r.length && t.delete(e);
            }
        }
        else if (r = t[e]) {
            if (r.length) {
                var o = r.indexOf(n);
                r.splice(o, 1);
            }
            0 == r.length && delete t[e];
        } return r; }
        function G(t) { switch (typeof t) {
            case "boolean": return t ? "1" : "0";
            default: return null != t ? t.toString() : null;
        } }
        function Z(t) { return t && 1 === t.nodeType; }
        function Y(t) { return "start" == t || "done" == t; }
        function J(t, e) { var n = t.style.display; return t.style.display = null != e ? e : "none", n; }
        function X(t, e, n, r) { var o = e.map(function (t) { return J(t); }), i = new Map, s = []; return n.forEach(function (e, n) { var o = {}; e.forEach(function (e) { var i = o[e] = t.computeStyle(n, e, r); i && 0 != i.length || (n[ge] = ve, s.push(n)); }), i.set(n, o); }), e.forEach(function (t, e) { return J(t, o[e]); }), [i, s]; }
        function $(t) { var e, n = new Set(t), r = new Set; return e = function (t) { return !t || !n.has(t.parentNode) && (!!r.has(t.parentNode) || !!e(t.parentNode) && (r.add(t), !0)); }; }
        function tt(t, e) { if (t.classList)
            return t.classList.contains(e); var n = t[Oe]; return n && n[e]; }
        function et(t, e) { if (t.classList)
            t.classList.add(e);
        else {
            var n = t[Oe];
            n || (n = t[Oe] = {}), n[e] = !0;
        } }
        function nt(t, e) { if (t.classList)
            t.classList.remove(e);
        else {
            var n = t[Oe];
            n && delete n[e];
        } }
        function rt() { return "undefined" != typeof document ? document.body : null; }
        function ot(t, e, n) { r(n).onDone(function () { return t.processLeaveNode(e); }); }
        function it(t) { var e = []; return st(t, e), e; }
        function st(t, e) { for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r instanceof ft["ɵAnimationGroupPlayer"] ? st(r.players, e) : e.push(r);
        } }
        function at(t, e) { var n = Object.keys(t), r = Object.keys(e); if (n.length != r.length)
            return !1; for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (!e.hasOwnProperty(i) || t[i] !== e[i])
                return !1;
        } return !0; }
        function ut(t, e, n) { var r = n.get(t); if (!r)
            return !1; var o = e.get(t); return o ? r.forEach(function (t) { return o.add(t); }) : e.set(t, r), n.delete(t), !0; }
        function ct(t, e) { return window.getComputedStyle(t)[e]; }
        function lt() { return "undefined" != typeof Element && "function" == typeof Element.prototype.animate; }
        var pt = n("6Xbx"), ft = n("EyWH");
        n.d(e, "b", function () { return Ct; }), n.d(e, "c", function () { return se; }), n.d(e, "g", function () { return ae; }), n.d(e, "f", function () { return wt; }), n.d(e, "a", function () { return Te; }), n.d(e, "e", function () { return xe; }), n.d(e, "d", function () { return lt; });
        var ht = function (t, e) { return !1; }, dt = function (t, e) { return !1; }, yt = function (t, e, n) { return []; };
        if ("undefined" != typeof Element) {
            if (ht = function (t, e) { return t.contains(e); }, Element.prototype.matches)
                dt = function (t, e) { return t.matches(e); };
            else {
                var mt = Element.prototype, vt = mt.matchesSelector || mt.mozMatchesSelector || mt.msMatchesSelector || mt.oMatchesSelector || mt.webkitMatchesSelector;
                vt && (dt = function (t, e) { return vt.apply(t, [e]); });
            }
            yt = function (t, e, n) { var r = []; if (n)
                r.push.apply(r, t.querySelectorAll(e));
            else {
                var o = t.querySelector(e);
                o && r.push(o);
            } return r; };
        }
        var gt = dt, bt = ht, _t = yt, wt = function () { function t() { } return t.prototype.matchesElement = function (t, e) { return gt(t, e); }, t.prototype.containsElement = function (t, e) { return bt(t, e); }, t.prototype.query = function (t, e, n) { return _t(t, e, n); }, t.prototype.computeStyle = function (t, e, n) { return n || ""; }, t.prototype.animate = function (t, e, n, r, o, i) { return void 0 === i && (i = []), new ft.NoopAnimationPlayer; }, t; }(), Ct = function () { function t() { } return t; }();
        Ct.NOOP = new wt;
        var St = 1e3, Et = ".ng-enter", Ot = ".ng-leave", Tt = ".ng-trigger", Pt = ".ng-animating", xt = new RegExp("{{\\s*(.+?)\\s*}}", "g"), Rt = /-+([a-z0-9])/g, At = {}, kt = function () { function t() { this.options = At; } return t.prototype.visit = function (t, e) { }, Object.defineProperty(t.prototype, "params", { get: function () { return this.options.params || null; }, enumerable: !0, configurable: !0 }), t; }(), Nt = function (t) { function e(e, n, r) { var o = t.call(this) || this; return o.name = e, o.states = n, o.transitions = r, o.queryCount = 0, o.depCount = 0, o; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitTrigger(this, e); }, e; }(kt), It = function (t) { function e(e, n) { var r = t.call(this) || this; return r.name = e, r.style = n, r; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitState(this, e); }, e; }(kt), jt = function (t) { function e(e, n) { var r = t.call(this) || this; return r.matchers = e, r.animation = n, r.queryCount = 0, r.depCount = 0, r; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitTransition(this, e); }, e; }(kt), Mt = function (t) { function e(e) { var n = t.call(this) || this; return n.steps = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitSequence(this, e); }, e; }(kt), Dt = function (t) { function e(e) { var n = t.call(this) || this; return n.steps = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitGroup(this, e); }, e; }(kt), Lt = function (t) { function e(e, n) { var r = t.call(this) || this; return r.timings = e, r.style = n, r; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitAnimate(this, e); }, e; }(kt), Ft = function (t) { function e(e, n, r) { var o = t.call(this) || this; return o.styles = e, o.easing = n, o.offset = r, o.isEmptyStep = !1, o.containsDynamicStyles = !1, o; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitStyle(this, e); }, e; }(kt), Vt = function (t) { function e(e) { var n = t.call(this) || this; return n.styles = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitKeyframes(this, e); }, e; }(kt), Ut = function (t) { function e(e) { var n = t.call(this) || this; return n.animation = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitReference(this, e); }, e; }(kt), Ht = function (t) { function e() { return t.call(this) || this; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitAnimateChild(this, e); }, e; }(kt), Bt = function (t) { function e(e) { var n = t.call(this) || this; return n.animation = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitAnimateRef(this, e); }, e; }(kt), qt = function (t) { function e(e, n, r, o, i) { var s = t.call(this) || this; return s.selector = e, s.limit = n, s.optional = r, s.includeSelf = o, s.animation = i, s; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitQuery(this, e); }, e; }(kt), zt = function (t) { function e(e, n) { var r = t.call(this) || this; return r.timings = e, r.animation = n, r; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitStagger(this, e); }, e; }(kt), Kt = function (t) { function e(e, n, r) { void 0 === n && (n = 0), void 0 === r && (r = null); var o = t.call(this) || this; return o.duration = e, o.delay = n, o.easing = r, o; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitTiming(this, e); }, e; }(kt), Qt = function (t) { function e(e) { var n = t.call(this, 0, 0, "") || this; return n.value = e, n; } return pt.a(e, t), e.prototype.visit = function (t, e) { return t.visitTiming(this, e); }, e; }(Kt), Wt = "*", Gt = ":self", Zt = new RegExp("s*" + Gt + "s*,?", "g"), Yt = new RegExp(":leave", "g"), Jt = new RegExp(":enter", "g"), Xt = function () { function t() { } return t.prototype.build = function (t, e) { var n = new $t(e); return this._resetContextStyleTimingState(n), T(this, b(t), n); }, t.prototype._resetContextStyleTimingState = function (t) { t.currentQuerySelector = "", t.collectedStyles = {}, t.collectedStyles[""] = {}, t.currentTime = 0; }, t.prototype.visitTrigger = function (t, e) { var n = this, r = e.queryCount = 0, o = e.depCount = 0, i = [], s = []; t.definitions.forEach(function (t) { if (n._resetContextStyleTimingState(e), 0 == t.type) {
            var a = t, u = a.name;
            u.split(/\s*,\s*/).forEach(function (t) { a.name = t, i.push(n.visitState(a, e)); }), a.name = u;
        }
        else if (1 == t.type) {
            var c = n.visitTransition(t, e);
            r += c.queryCount, o += c.depCount, s.push(c);
        }
        else
            e.errors.push("only state() and transition() definitions can sit inside of a trigger()"); }); var a = new Nt(t.name, i, s); return a.options = L(t.options), a.queryCount = r, a.depCount = o, a; }, t.prototype.visitState = function (t, e) { var n = this.visitStyle(t.styles, e), r = t.options && t.options.params || null; if (n.containsDynamicStyles) {
            var o = new Set, i = r || {};
            if (n.styles.forEach(function (t) { if (M(t)) {
                var e = t;
                Object.keys(e).forEach(function (t) { w(e[t]).forEach(function (t) { i.hasOwnProperty(t) || o.add(t); }); });
            } }), o.size) {
                var s = S(o.values());
                e.errors.push('state("' + t.name + '", ...) must define default values for all the following style substitutions: ' + s.join(", "));
            }
        } var a = new It(t.name, n); return r && (a.options = { params: r }), a; }, t.prototype.visitTransition = function (t, e) { e.queryCount = 0, e.depCount = 0; var n = T(this, b(t.animation), e), r = P(t.expr, e.errors), o = new jt(r, n); return o.options = L(t.options), o.queryCount = e.queryCount, o.depCount = e.depCount, o; }, t.prototype.visitSequence = function (t, e) { var n = this, r = new Mt(t.steps.map(function (t) { return T(n, t, e); })); return r.options = L(t.options), r; }, t.prototype.visitGroup = function (t, e) { var n = this, r = e.currentTime, o = 0, i = t.steps.map(function (t) { e.currentTime = r; var i = T(n, t, e); return o = Math.max(o, e.currentTime), i; }); e.currentTime = o; var s = new Dt(i); return s.options = L(t.options), s; }, t.prototype.visitAnimate = function (t, e) { var r = D(t.timings, e.errors); e.currentAnimateTimings = r; var o, i = t.styles ? t.styles : n.i(ft.style)({}); if (5 == i.type)
            o = this.visitKeyframes(i, e);
        else {
            var s = t.styles, a = !1;
            if (!s) {
                a = !0;
                var u = {};
                r.easing && (u.easing = r.easing), s = n.i(ft.style)(u);
            }
            e.currentTime += r.duration + r.delay;
            var c = this.visitStyle(s, e);
            c.isEmptyStep = a, o = c;
        } return e.currentAnimateTimings = null, new Lt(r, o); }, t.prototype.visitStyle = function (t, e) { var n = this._makeStyleAst(t, e); return this._validateStyleAst(n, e), n; }, t.prototype._makeStyleAst = function (t, e) { var n = []; Array.isArray(t.styles) ? t.styles.forEach(function (t) { "string" == typeof t ? t == ft.AUTO_STYLE ? n.push(t) : e.errors.push("The provided style string value " + t + " is not allowed.") : n.push(t); }) : n.push(t.styles); var r = !1, o = null; n.forEach(function (t) { if (M(t)) {
            var e = t, n = e.easing;
            if (n && (o = n, delete e.easing), !r)
                for (var i in e) {
                    var s = e[i];
                    if (s.toString().indexOf("{{") >= 0) {
                        r = !0;
                        break;
                    }
                }
        } }); var i = new Ft(n, o, t.offset); return i.containsDynamicStyles = r, i; }, t.prototype._validateStyleAst = function (t, e) { var n = e.currentAnimateTimings, r = e.currentTime, o = e.currentTime; n && o > 0 && (o -= n.duration + n.delay), t.styles.forEach(function (t) { "string" != typeof t && Object.keys(t).forEach(function (n) { var i = e.collectedStyles[e.currentQuerySelector], s = i[n], a = !0; s && (o != r && o >= s.startTime && r <= s.endTime && (e.errors.push('The CSS property "' + n + '" that exists between the times of "' + s.startTime + 'ms" and "' + s.endTime + 'ms" is also being animated in a parallel animation between the times of "' + o + 'ms" and "' + r + 'ms"'), a = !1), o = s.startTime), a && (i[n] = { startTime: o, endTime: r }), e.options && _(t[n], e.options, e.errors); }); }); }, t.prototype.visitKeyframes = function (t, e) { var n = this; if (!e.currentAnimateTimings)
            return e.errors.push("keyframes() must be placed inside of a call to animate()"), new Vt([]); var r = 0, o = [], i = !1, s = !1, a = 0, u = t.steps.map(function (t) { var u = n._makeStyleAst(t, e), c = null != u.offset ? u.offset : j(u.styles), l = 0; return null != c && (r++, l = u.offset = c), s = s || l < 0 || l > 1, i = i || l < a, a = l, o.push(l), u; }); s && e.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), i && e.errors.push("Please ensure that all keyframe offsets are in order"); var c = t.steps.length, l = 0; r > 0 && r < c ? e.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == r && (l = 1 / (c - 1)); var p = c - 1, f = e.currentTime, h = e.currentAnimateTimings, d = h.duration; return u.forEach(function (t, r) { var i = l > 0 ? r == p ? 1 : l * r : o[r], s = i * d; e.currentTime = f + h.delay + s, h.duration = s, n._validateStyleAst(t, e), t.offset = i; }), new Vt(u); }, t.prototype.visitReference = function (t, e) { var n = T(this, b(t.animation), e), r = new Ut(n); return r.options = L(t.options), r; }, t.prototype.visitAnimateChild = function (t, e) { e.depCount++; var n = new Ht; return n.options = L(t.options), n; }, t.prototype.visitAnimateRef = function (t, e) { var n = this.visitReference(t.animation, e), r = new Bt(n); return r.options = L(t.options), r; }, t.prototype.visitQuery = function (t, e) { var n = e.currentQuerySelector, r = t.options || {}; e.queryCount++, e.currentQuery = t; var o = N(t.selector), i = o[0], s = o[1]; e.currentQuerySelector = n.length ? n + " " + i : i, u(e.collectedStyles, e.currentQuerySelector, {}); var a = T(this, b(t.animation), e); e.currentQuery = null, e.currentQuerySelector = n; var c = new qt(i, r.limit || 0, !!r.optional, s, a); return c.originalSelector = t.selector, c.options = L(t.options), c; }, t.prototype.visitStagger = function (t, e) { e.currentQuery || e.errors.push("stagger() can only be used inside of query()"); var n = "full" === t.timings ? { duration: 0, delay: 0, easing: "full" } : f(t.timings, e.errors, !0), r = T(this, b(t.animation), e); return new zt(n, r); }, t; }(), $t = function () { function t(t) { this.errors = t, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null; } return t; }(), te = function () { function t() { this._map = new Map; } return t.prototype.consume = function (t) { var e = this._map.get(t); return e ? this._map.delete(t) : e = [], e; }, t.prototype.append = function (t, e) { var n = this._map.get(t); n || this._map.set(t, n = []), n.push.apply(n, e); }, t.prototype.has = function (t) { return this._map.has(t); }, t.prototype.clear = function () { this._map.clear(); }, t; }(), ee = function () { function t() { } return t.prototype.buildKeyframes = function (t, e, n, r, o, i, s, a) { void 0 === a && (a = []), s = s || new te; var u = new re(t, e, s, a, []); u.options = i, u.currentTimeline.setStyles([r], null, u.errors, i), n.visit(this, u); var c = u.timelines.filter(function (t) { return t.containsAnimation(); }); if (c.length && Object.keys(o).length) {
            var l = c[c.length - 1];
            l.allowOnlyTimelineStyles() || l.setStyles([o], null, u.errors, i);
        } return c.length ? c.map(function (t) { return t.buildKeyframes(); }) : [F(e, [], [], [], 0, 0, "", !1)]; }, t.prototype.visitTrigger = function (t, e) { }, t.prototype.visitState = function (t, e) { }, t.prototype.visitTransition = function (t, e) { }, t.prototype.visitAnimateChild = function (t, e) { var n = e.subInstructions.consume(e.element); if (n) {
            var r = e.createSubContext(t.options), o = e.currentTimeline.currentTime, i = this._visitSubInstructions(n, r, r.options);
            o != i && e.transformIntoNewTimeline(i);
        } e.previousNode = t; }, t.prototype.visitAnimateRef = function (t, e) { var n = e.createSubContext(t.options); n.transformIntoNewTimeline(), this.visitReference(t.animation, n), e.transformIntoNewTimeline(n.currentTimeline.currentTime), e.previousNode = t; }, t.prototype._visitSubInstructions = function (t, e, n) { var r = e.currentTimeline.currentTime, o = r, i = null != n.duration ? l(n.duration) : null, s = null != n.delay ? l(n.delay) : null; return 0 !== i && t.forEach(function (t) { var n = e.appendInstructionToTimeline(t, i, s); o = Math.max(o, n.duration + n.delay); }), o; }, t.prototype.visitReference = function (t, e) { e.updateOptions(t.options, !0), t.animation.visit(this, e), e.previousNode = t; }, t.prototype.visitSequence = function (t, e) { var n = this, r = e.subContextCount, o = e, i = t.options; if (i && (i.params || i.delay) && (o = e.createSubContext(i), o.transformIntoNewTimeline(), null != i.delay)) {
            o.previousNode instanceof Ft && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = ne);
            var s = l(i.delay);
            o.delayNextStep(s);
        } t.steps.length && (t.steps.forEach(function (t) { return t.visit(n, o); }), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), e.previousNode = t; }, t.prototype.visitGroup = function (t, e) { var n = this, r = [], o = e.currentTimeline.currentTime, i = t.options && t.options.delay ? l(t.options.delay) : 0; t.steps.forEach(function (s) { var a = e.createSubContext(t.options); i && a.delayNextStep(i), s.visit(n, a), o = Math.max(o, a.currentTimeline.currentTime), r.push(a.currentTimeline); }), r.forEach(function (t) { return e.currentTimeline.mergeTimelineCollectedStyles(t); }), e.transformIntoNewTimeline(o), e.previousNode = t; }, t.prototype.visitTiming = function (t, e) { if (t instanceof Qt) {
            return f(e.params ? C(t.value, e.params, e.errors) : t.value.toString(), e.errors);
        } return { duration: t.duration, delay: t.delay, easing: t.easing }; }, t.prototype.visitAnimate = function (t, e) { var n = e.currentAnimateTimings = this.visitTiming(t.timings, e), r = e.currentTimeline; n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles()); var o = t.style; o instanceof Vt ? this.visitKeyframes(o, e) : (e.incrementTime(n.duration), this.visitStyle(o, e), r.applyStylesToKeyframe()), e.currentAnimateTimings = null, e.previousNode = t; }, t.prototype.visitStyle = function (t, e) { var n = e.currentTimeline, r = e.currentAnimateTimings; !r && n.getCurrentStyleProperties().length && n.forwardFrame(); var o = r && r.easing || t.easing; t.isEmptyStep ? n.applyEmptyStep(o) : n.setStyles(t.styles, o, e.errors, e.options), e.previousNode = t; }, t.prototype.visitKeyframes = function (t, e) { var n = e.currentAnimateTimings, r = e.currentTimeline.duration, o = n.duration, i = e.createSubContext(), s = i.currentTimeline; s.easing = n.easing, t.styles.forEach(function (t) { var n = t.offset || 0; s.forwardTime(n * o), s.setStyles(t.styles, t.easing, e.errors, e.options), s.applyStylesToKeyframe(); }), e.currentTimeline.mergeTimelineCollectedStyles(s), e.transformIntoNewTimeline(r + o), e.previousNode = t; }, t.prototype.visitQuery = function (t, e) { var n = this, r = e.currentTimeline.currentTime, o = t.options || {}, i = o.delay ? l(o.delay) : 0; i && (e.previousNode instanceof Ft || 0 == r && e.currentTimeline.getCurrentStyleProperties().length) && (e.currentTimeline.snapshotCurrentStyles(), e.previousNode = ne); var s = r, a = e.invokeQuery(t.selector, t.originalSelector, t.limit, t.includeSelf, !!o.optional, e.errors); e.currentQueryTotal = a.length; var u = null; a.forEach(function (r, o) { e.currentQueryIndex = o; var a = e.createSubContext(t.options, r); i && a.delayNextStep(i), r === e.element && (u = a.currentTimeline), t.animation.visit(n, a), a.currentTimeline.applyStylesToKeyframe(); var c = a.currentTimeline.currentTime; s = Math.max(s, c); }), e.currentQueryIndex = 0, e.currentQueryTotal = 0, e.transformIntoNewTimeline(s), u && (e.currentTimeline.mergeTimelineCollectedStyles(u), e.currentTimeline.snapshotCurrentStyles()), e.previousNode = t; }, t.prototype.visitStagger = function (t, e) { var n = e.parentContext, r = e.currentTimeline, o = t.timings, i = Math.abs(o.duration), s = i * (e.currentQueryTotal - 1), a = i * e.currentQueryIndex; switch (o.duration < 0 ? "reverse" : o.easing) {
            case "reverse":
                a = s - a;
                break;
            case "full": a = n.currentStaggerTime;
        } var u = e.currentTimeline; a && u.delayNextStep(a); var c = u.currentTime; t.animation.visit(this, e), e.previousNode = t, n.currentStaggerTime = r.currentTime - c + (r.startTime - n.currentTimeline.startTime); }, t; }(), ne = {}, re = function () { function t(t, e, n, r, o, i) { this._driver = t, this.element = e, this.subInstructions = n, this.errors = r, this.timelines = o, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = ne, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = i || new oe(e, 0), o.push(this.currentTimeline); } return Object.defineProperty(t.prototype, "params", { get: function () { return this.options.params; }, enumerable: !0, configurable: !0 }), t.prototype.updateOptions = function (t, e) { var n = this; if (t) {
            var r = t, o = this.options;
            null != r.duration && (o.duration = l(r.duration)), null != r.delay && (o.delay = l(r.delay));
            var i = r.params;
            if (i) {
                var s = o.params;
                s || (s = this.options.params = {}), Object.keys(i).forEach(function (t) { e && s.hasOwnProperty(t) || (s[t] = C(i[t], s, n.errors)); });
            }
        } }, t.prototype._copyOptions = function () { var t = {}; if (this.options) {
            var e = this.options.params;
            if (e) {
                var n = t.params = {};
                Object.keys(this.options.params).forEach(function (t) { n[t] = e[t]; });
            }
        } return t; }, t.prototype.createSubContext = function (e, n, r) { void 0 === e && (e = null); var o = n || this.element, i = new t(this._driver, o, this.subInstructions, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0)); return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i; }, t.prototype.transformIntoNewTimeline = function (t) { return this.previousNode = ne, this.currentTimeline = this.currentTimeline.fork(this.element, t), this.timelines.push(this.currentTimeline), this.currentTimeline; }, t.prototype.appendInstructionToTimeline = function (t, e, n) { var r = { duration: null != e ? e : t.duration, delay: this.currentTimeline.currentTime + (null != n ? n : 0) + t.delay, easing: "" }, o = new ie(t.element, t.keyframes, t.preStyleProps, t.postStyleProps, r, t.stretchStartingKeyframe); return this.timelines.push(o), r; }, t.prototype.incrementTime = function (t) { this.currentTimeline.forwardTime(this.currentTimeline.duration + t); }, t.prototype.delayNextStep = function (t) { t > 0 && this.currentTimeline.delayNextStep(t); }, t.prototype.invokeQuery = function (t, e, n, r, o, i) { var s = []; if (r && s.push(this.element), t.length > 0) {
            var a = 1 != n;
            s.push.apply(s, this._driver.query(this.element, t, a));
        } return o || 0 != s.length || i.push('`query("' + e + '")` returned zero elements. (Use `query("' + e + '", { optional: true })` if you wish to allow this.)'), s; }, t; }(), oe = function () { function t(t, e, n) { this.element = t, this.startTime = e, this._elementTimelineStylesLookup = n, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)), this._loadKeyframe(); } return t.prototype.containsAnimation = function () { switch (this._keyframes.size) {
            case 0: return !1;
            case 1: return this.getCurrentStyleProperties().length > 0;
            default: return !0;
        } }, t.prototype.getCurrentStyleProperties = function () { return Object.keys(this._currentKeyframe); }, Object.defineProperty(t.prototype, "currentTime", { get: function () { return this.startTime + this.duration; }, enumerable: !0, configurable: !0 }), t.prototype.delayNextStep = function (t) { var e = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length; this.duration || e ? (this.forwardTime(this.currentTime + t), e && this.snapshotCurrentStyles()) : this.startTime += t; }, t.prototype.fork = function (e, n) { return this.applyStylesToKeyframe(), new t(e, n || this.currentTime, this._elementTimelineStylesLookup); }, t.prototype._loadKeyframe = function () { this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe)); }, t.prototype.forwardFrame = function () { this.duration += 1, this._loadKeyframe(); }, t.prototype.forwardTime = function (t) { this.applyStylesToKeyframe(), this.duration = t, this._loadKeyframe(); }, t.prototype._updateStyle = function (t, e) { this._localTimelineStyles[t] = e, this._globalTimelineStyles[t] = e, this._styleSummary[t] = { time: this.currentTime, value: e }; }, t.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; }, t.prototype.applyEmptyStep = function (t) { var e = this; t && (this._previousKeyframe.easing = t), Object.keys(this._globalTimelineStyles).forEach(function (t) { e._backFill[t] = e._globalTimelineStyles[t] || ft.AUTO_STYLE, e._currentKeyframe[t] = ft.AUTO_STYLE; }), this._currentEmptyStepKeyframe = this._currentKeyframe; }, t.prototype.setStyles = function (t, e, n, r) { var o = this; e && (this._previousKeyframe.easing = e); var i = r && r.params || {}, s = H(t, this._globalTimelineStyles); Object.keys(s).forEach(function (t) { var e = C(s[t], i, n); o._pendingStyles[t] = e, o._localTimelineStyles.hasOwnProperty(t) || (o._backFill[t] = o._globalTimelineStyles.hasOwnProperty(t) ? o._globalTimelineStyles[t] : ft.AUTO_STYLE), o._updateStyle(t, e); }); }, t.prototype.applyStylesToKeyframe = function () { var t = this, e = this._pendingStyles, n = Object.keys(e); 0 != n.length && (this._pendingStyles = {}, n.forEach(function (n) { var r = e[n]; t._currentKeyframe[n] = r; }), Object.keys(this._localTimelineStyles).forEach(function (e) { t._currentKeyframe.hasOwnProperty(e) || (t._currentKeyframe[e] = t._localTimelineStyles[e]); })); }, t.prototype.snapshotCurrentStyles = function () { var t = this; Object.keys(this._localTimelineStyles).forEach(function (e) { var n = t._localTimelineStyles[e]; t._pendingStyles[e] = n, t._updateStyle(e, n); }); }, t.prototype.getFinalKeyframe = function () { return this._keyframes.get(this.duration); }, Object.defineProperty(t.prototype, "properties", { get: function () { var t = []; for (var e in this._currentKeyframe)
                t.push(e); return t; }, enumerable: !0, configurable: !0 }), t.prototype.mergeTimelineCollectedStyles = function (t) { var e = this; Object.keys(t._styleSummary).forEach(function (n) { var r = e._styleSummary[n], o = t._styleSummary[n]; (!r || o.time > r.time) && e._updateStyle(n, o.value); }); }, t.prototype.buildKeyframes = function () { var t = this; this.applyStylesToKeyframe(); var e = new Set, n = new Set, r = 1 === this._keyframes.size && 0 === this.duration, o = []; this._keyframes.forEach(function (i, s) { var a = m(i, !0); Object.keys(a).forEach(function (t) { var r = a[t]; r == ft["ɵPRE_STYLE"] ? e.add(t) : r == ft.AUTO_STYLE && n.add(t); }), r || (a.offset = s / t.duration), o.push(a); }); var i = e.size ? S(e.values()) : [], s = n.size ? S(n.values()) : []; if (r) {
            var a = o[0], u = d(a);
            a.offset = 0, u.offset = 1, o = [a, u];
        } return F(this.element, o, i, s, this.duration, this.startTime, this.easing, !1); }, t; }(), ie = function (t) { function e(e, n, r, o, i, s) { void 0 === s && (s = !1); var a = t.call(this, e, i.delay) || this; return a.element = e, a.keyframes = n, a.preStyleProps = r, a.postStyleProps = o, a._stretchStartingKeyframe = s, a.timings = { duration: i.duration, delay: i.delay, easing: i.easing }, a; } return pt.a(e, t), e.prototype.containsAnimation = function () { return this.keyframes.length > 1; }, e.prototype.buildKeyframes = function () { var t = this.keyframes, e = this.timings, n = e.delay, r = e.duration, o = e.easing; if (this._stretchStartingKeyframe && n) {
            var i = [], s = r + n, a = n / s, u = m(t[0], !1);
            u.offset = 0, i.push(u);
            var c = m(t[0], !1);
            c.offset = U(a), i.push(c);
            for (var l = t.length - 1, p = 1; p <= l; p++) {
                var f = m(t[p], !1), h = f.offset, d = n + h * r;
                f.offset = U(d / s), i.push(f);
            }
            r = s, n = 0, o = "", t = i;
        } return F(this.element, t, this.preStyleProps, this.postStyleProps, r, n, o, !0); }, e; }(oe), se = (function () { function t(t, e) { this._driver = t; var n = [], r = k(e, n); if (n.length) {
            var o = "animation validation failed:\n" + n.join("\n");
            throw new Error(o);
        } this._animationAst = r; } t.prototype.buildTimelines = function (t, e, n, r, o) { var i = Array.isArray(e) ? y(e) : e, s = Array.isArray(n) ? y(n) : n, a = []; o = o || new te; var u = V(this._driver, t, this._animationAst, i, s, r, o, a); if (a.length) {
            var c = "animation building failed:\n" + a.join("\n");
            throw new Error(c);
        } return u; }; }(), function () { function t() { } return t; }()), ae = (function () { function t() { } t.prototype.normalizePropertyName = function (t, e) { return t; }, t.prototype.normalizeStyleValue = function (t, e, n, r) { return n; }; }(), function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return pt.a(e, t), e.prototype.normalizePropertyName = function (t, e) { return E(t); }, e.prototype.normalizeStyleValue = function (t, e, n, r) { var o = "", i = n.toString().trim(); if (ue[e] && 0 !== n && "0" !== n)
            if ("number" == typeof n)
                o = "px";
            else {
                var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                s && 0 == s[1].length && r.push("Please provide a CSS unit value for " + t + ":" + n);
            } return i + o; }, e; }(se)), ue = function (t) { var e = {}; return t.forEach(function (t) { return e[t] = !0; }), e; }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")), ce = {}, le = function () { function t(t, e, n) { this._triggerName = t, this.ast = e, this._stateStyles = n; } return t.prototype.match = function (t, e) { return q(this.ast.matchers, t, e); }, t.prototype.buildStyles = function (t, e, n) { var r = this._stateStyles["*"], o = this._stateStyles[t], i = r ? r.buildStyles(e, n) : {}; return o ? o.buildStyles(e, n) : i; }, t.prototype.build = function (t, e, n, r, o, i, s) { var a = [], c = this.ast.options && this.ast.options.params || ce, l = o && o.params || ce, p = this.buildStyles(n, l, a), f = i && i.params || ce, h = this.buildStyles(r, f, a), d = new Set, y = new Map, m = new Map, v = "void" === r, g = { params: Object.assign({}, c, f) }, b = V(t, e, this.ast.animation, p, h, g, s, a); if (a.length)
            return B(e, this._triggerName, n, r, v, p, h, [], [], y, m, a); b.forEach(function (t) { var n = t.element, r = u(y, n, {}); t.preStyleProps.forEach(function (t) { return r[t] = !0; }); var o = u(m, n, {}); t.postStyleProps.forEach(function (t) { return o[t] = !0; }), n !== e && d.add(n); }); var _ = S(d.values()); return B(e, this._triggerName, n, r, v, p, h, b, _, y, m); }, t; }(), pe = function () { function t(t, e) { this.styles = t, this.defaultParams = e; } return t.prototype.buildStyles = function (t, e) { var n = {}, r = d(this.defaultParams); return Object.keys(t).forEach(function (e) { var n = t[e]; null != n && (r[e] = n); }), this.styles.styles.forEach(function (t) { if ("string" != typeof t) {
            var o = t;
            Object.keys(o).forEach(function (t) { var i = o[t]; i.length > 1 && (i = C(i, r, e)), n[t] = i; });
        } }), n; }, t; }(), fe = function () { function t(t, e) { var n = this; this.name = t, this.ast = e, this.transitionFactories = [], this.states = {}, e.states.forEach(function (t) { var e = t.options && t.options.params || {}; n.states[t.name] = new pe(t.style, e); }), Q(this.states, "true", "1"), Q(this.states, "false", "0"), e.transitions.forEach(function (e) { n.transitionFactories.push(new le(t, e, n.states)); }), this.fallbackTransition = K(t, this.states); } return Object.defineProperty(t.prototype, "containsQueries", { get: function () { return this.ast.queryCount > 0; }, enumerable: !0, configurable: !0 }), t.prototype.matchTransition = function (t, e) { return this.transitionFactories.find(function (n) { return n.match(t, e); }) || null; }, t.prototype.matchStyles = function (t, e, n) { return this.fallbackTransition.buildStyles(t, e, n); }, t; }(), he = new te, de = function () { function t(t, e) { this._driver = t, this._normalizer = e, this._animations = {}, this._playersById = {}, this.players = []; } return t.prototype.register = function (t, e) { var n = [], r = k(e, n); if (n.length)
            throw new Error("Unable to build the animation due to the following errors: " + n.join("\n")); this._animations[t] = r; }, t.prototype._buildPlayer = function (t, e, n) { var r = t.element, i = o(this._driver, this._normalizer, r, t.keyframes, e, n); return this._driver.animate(r, i, t.duration, t.delay, t.easing, []); }, t.prototype.create = function (t, e, n) { var o = this; void 0 === n && (n = {}); var i, s = [], a = this._animations[t], c = new Map; if (a ? (i = V(this._driver, e, a, {}, {}, n, he, s), i.forEach(function (t) { var e = u(c, t.element, {}); t.postStyleProps.forEach(function (t) { return e[t] = null; }); })) : (s.push("The requested animation doesn't exist or has already been destroyed"), i = []), s.length)
            throw new Error("Unable to create the animation due to the following errors: " + s.join("\n")); c.forEach(function (t, e) { Object.keys(t).forEach(function (n) { t[n] = o._driver.computeStyle(e, n, ft.AUTO_STYLE); }); }); var l = i.map(function (t) { var e = c.get(t.element); return o._buildPlayer(t, {}, e); }), p = r(l); return this._playersById[t] = p, p.onDestroy(function () { return o.destroy(t); }), this.players.push(p), p; }, t.prototype.destroy = function (t) { var e = this._getPlayer(t); e.destroy(), delete this._playersById[t]; var n = this.players.indexOf(e); n >= 0 && this.players.splice(n, 1); }, t.prototype._getPlayer = function (t) { var e = this._playersById[t]; if (!e)
            throw new Error("Unable to find the timeline player referenced by " + t); return e; }, t.prototype.listen = function (t, e, n, r) { var o = a(e, "", "", ""); return i(this._getPlayer(t), n, o, r), function () { }; }, t.prototype.command = function (t, e, n, r) { if ("register" == n)
            return void this.register(t, r[0]); if ("create" == n) {
            var o = r[0] || {};
            return void this.create(t, e, o);
        } var i = this._getPlayer(t); switch (n) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "reset":
                i.reset();
                break;
            case "restart":
                i.restart();
                break;
            case "finish":
                i.finish();
                break;
            case "init":
                i.init();
                break;
            case "setPosition":
                i.setPosition(parseFloat(r[0]));
                break;
            case "destroy": this.destroy(t);
        } }, t; }(), ye = [], me = { namespaceId: "", setForRemoval: null, hasAnimation: !1, removedBeforeQueried: !1 }, ve = { namespaceId: "", setForRemoval: null, hasAnimation: !1, removedBeforeQueried: !0 }, ge = "__ng_removed", be = function () { function t(t) { var e = t && t.hasOwnProperty("value"), n = e ? t.value : t; if (this.value = G(n), e) {
            var r = d(t);
            delete r.value, this.options = r;
        }
        else
            this.options = {}; this.options.params || (this.options.params = {}); } return Object.defineProperty(t.prototype, "params", { get: function () { return this.options.params; }, enumerable: !0, configurable: !0 }), t.prototype.absorbOptions = function (t) { var e = t.params; if (e) {
            var n = this.options.params;
            Object.keys(e).forEach(function (t) { null == n[t] && (n[t] = e[t]); });
        } }, t; }(), _e = new be("void"), we = new be("DELETED"), Ce = function () { function t(t, e, n) { this.id = t, this.hostElement = e, this._engine = n, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + t, et(e, this._hostClassName); } return t.prototype.listen = function (t, e, n, r) { var o = this; if (!this._triggers.hasOwnProperty(e))
            throw new Error('Unable to listen on the animation trigger event "' + n + '" because the animation trigger "' + e + "\" doesn't exist!"); if (null == n || 0 == n.length)
            throw new Error('Unable to listen on the animation trigger "' + e + '" because the provided event is undefined!'); if (!Y(n))
            throw new Error('The provided animation trigger event "' + n + '" for the animation trigger "' + e + '" is not supported!'); var i = u(this._elementListeners, t, []), s = { name: e, phase: n, callback: r }; i.push(s); var a = u(this._engine.statesByElement, t, {}); return a.hasOwnProperty(e) || (et(t, "ng-trigger"), et(t, "ng-trigger-" + e), a[e] = null), function () { o._engine.afterFlush(function () { var t = i.indexOf(s); t >= 0 && i.splice(t, 1), o._triggers[e] || delete a[e]; }); }; }, t.prototype.register = function (t, e) { return !this._triggers[t] && (this._triggers[t] = e, !0); }, t.prototype._getTrigger = function (t) { var e = this._triggers[t]; if (!e)
            throw new Error('The provided animation trigger "' + t + '" has not been registered!'); return e; }, t.prototype.trigger = function (t, e, n, r) { var o = this; void 0 === r && (r = !0); var i = this._getTrigger(e), s = new Ee(this.id, e, t), a = this._engine.statesByElement.get(t); a || (et(t, "ng-trigger"), et(t, "ng-trigger-" + e), this._engine.statesByElement.set(t, a = {})); var c = a[e], l = new be(n); if (!(n && n.hasOwnProperty("value")) && c && l.absorbOptions(c.options), a[e] = l, c) {
            if (c === we)
                return s;
        }
        else
            c = _e; if ("void" === l.value || c.value !== l.value) {
            var p = u(this._engine.playersByElement, t, []);
            p.forEach(function (t) { t.namespaceId == o.id && t.triggerName == e && t.queued && t.destroy(); });
            var f = i.matchTransition(c.value, l.value), h = !1;
            if (!f) {
                if (!r)
                    return;
                f = i.fallbackTransition, h = !0;
            }
            return this._engine.totalQueuedPlayers++, this._queue.push({ element: t, triggerName: e, transition: f, fromState: c, toState: l, player: s, isFallbackTransition: h }), h || (et(t, "ng-animate-queued"), s.onStart(function () { nt(t, "ng-animate-queued"); })), s.onDone(function () { var e = o.players.indexOf(s); e >= 0 && o.players.splice(e, 1); var n = o._engine.playersByElement.get(t); if (n) {
                var r = n.indexOf(s);
                r >= 0 && n.splice(r, 1);
            } }), this.players.push(s), p.push(s), s;
        } if (!at(c.params, l.params)) {
            var d = [], y = i.matchStyles(c.value, c.params, d), m = i.matchStyles(l.value, l.params, d);
            d.length ? this._engine.reportError(d) : this._engine.afterFlush(function () { g(t, y), v(t, m); });
        } }, t.prototype.deregister = function (t) { var e = this; delete this._triggers[t], this._engine.statesByElement.forEach(function (e, n) { delete e[t]; }), this._elementListeners.forEach(function (n, r) { e._elementListeners.set(r, n.filter(function (e) { return e.name != t; })); }); }, t.prototype.clearElementCache = function (t) { this._engine.statesByElement.delete(t), this._elementListeners.delete(t); var e = this._engine.playersByElement.get(t); e && (e.forEach(function (t) { return t.destroy(); }), this._engine.playersByElement.delete(t)); }, t.prototype._destroyInnerNodes = function (t, e, n) { var r = this; void 0 === n && (n = !1), this._engine.driver.query(t, Tt, !0).forEach(function (t) { if (n && tt(t, r._hostClassName)) {
            var o = r._engine.namespacesByHostElement.get(t);
            o && o.removeNode(t, e, !0), r.removeNode(t, e, !0);
        }
        else
            r.clearElementCache(t); }); }, t.prototype.removeNode = function (t, e, n) { var o = this, i = this._engine; !n && t.childElementCount && this._destroyInnerNodes(t, e, !0); var s = i.statesByElement.get(t); if (s) {
            var a = [];
            if (Object.keys(s).forEach(function (e) { if (o._triggers[e]) {
                var n = o.trigger(t, e, "void", !1);
                n && a.push(n);
            } }), a.length)
                return i.markElementAsRemoved(this.id, t, !0, e), void r(a).onDone(function () { return i.processLeaveNode(t); });
        } var u = !1; if (i.totalAnimations) {
            var c = i.players.length ? i.playersByQueriedElement.get(t) : [];
            if (c && c.length)
                u = !0;
            else
                for (var l = t; l = l.parentNode;) {
                    var p = i.statesByElement.get(l);
                    if (p) {
                        u = !0;
                        break;
                    }
                }
        } var f = this._elementListeners.get(t); if (f) {
            var h = new Set;
            f.forEach(function (e) { var n = e.name; if (!h.has(n)) {
                h.add(n);
                var r = o._triggers[n], s = r.fallbackTransition, a = i.statesByElement.get(t), u = a[n] || _e, c = new be("void"), l = new Ee(o.id, n, t);
                o._engine.totalQueuedPlayers++, o._queue.push({ element: t, triggerName: n, transition: s, fromState: u, toState: c, player: l, isFallbackTransition: !0 });
            } });
        } u ? i.markElementAsRemoved(this.id, t, !1, e) : (i.afterFlush(function () { return o.clearElementCache(t); }), i.destroyInnerAnimations(t), i._onRemovalComplete(t, e)); }, t.prototype.insertNode = function (t, e) { et(t, this._hostClassName); }, t.prototype.drainQueuedTransitions = function (t) { var e = this, n = []; return this._queue.forEach(function (r) { var o = r.player; if (!o.destroyed) {
            var s = r.element, u = e._elementListeners.get(s);
            u && u.forEach(function (e) { if (e.name == r.triggerName) {
                var n = a(s, r.triggerName, r.fromState.value, r.toState.value);
                n._data = t, i(r.player, e.phase, n, e.callback);
            } }), o.markedForDestroy ? e._engine.afterFlush(function () { o.destroy(); }) : n.push(r);
        } }), this._queue = [], n.sort(function (t, n) { var r = t.transition.ast.depCount, o = n.transition.ast.depCount; return 0 == r || 0 == o ? r - o : e._engine.driver.containsElement(t.element, n.element) ? 1 : -1; }); }, t.prototype.destroy = function (t) { this.players.forEach(function (t) { return t.destroy(); }), this._destroyInnerNodes(this.hostElement, t); }, t.prototype.elementContainsData = function (t) { var e = !1; return this._elementListeners.has(t) && (e = !0), e = !!this._queue.find(function (e) { return e.element === t; }) || e; }, t; }(), Se = function () { function t(t, e) { this.driver = t, this._normalizer = e, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = function (t, e) { }; } return t.prototype._onRemovalComplete = function (t, e) { this.onRemovalComplete(t, e); }, Object.defineProperty(t.prototype, "queuedPlayers", { get: function () { var t = []; return this._namespaceList.forEach(function (e) { e.players.forEach(function (e) { e.queued && t.push(e); }); }), t; }, enumerable: !0, configurable: !0 }), t.prototype.createNamespace = function (t, e) { var n = new Ce(t, e, this); return e.parentNode ? this._balanceNamespaceList(n, e) : (this.newHostElements.set(e, n), this.collectEnterElement(e)), this._namespaceLookup[t] = n; }, t.prototype._balanceNamespaceList = function (t, e) { var n = this._namespaceList.length - 1; if (n >= 0) {
            for (var r = !1, o = n; o >= 0; o--) {
                var i = this._namespaceList[o];
                if (this.driver.containsElement(i.hostElement, e)) {
                    this._namespaceList.splice(o + 1, 0, t), r = !0;
                    break;
                }
            }
            r || this._namespaceList.splice(0, 0, t);
        }
        else
            this._namespaceList.push(t); return this.namespacesByHostElement.set(e, t), t; }, t.prototype.register = function (t, e) { var n = this._namespaceLookup[t]; return n || (n = this.createNamespace(t, e)), n; }, t.prototype.registerTrigger = function (t, e, n) { var r = this._namespaceLookup[t]; r && r.register(e, n) && this.totalAnimations++; }, t.prototype.destroy = function (t, e) { var n = this; if (t) {
            var r = this._fetchNamespace(t);
            this.afterFlush(function () { n.namespacesByHostElement.delete(r.hostElement), delete n._namespaceLookup[t]; var e = n._namespaceList.indexOf(r); e >= 0 && n._namespaceList.splice(e, 1); }), this.afterFlushAnimationsDone(function () { return r.destroy(e); });
        } }, t.prototype._fetchNamespace = function (t) { return this._namespaceLookup[t]; }, t.prototype.trigger = function (t, e, n, r) { return !!Z(e) && (this._fetchNamespace(t).trigger(e, n, r), !0); }, t.prototype.insertNode = function (t, e, n, r) { if (Z(e)) {
            var o = e[ge];
            o && o.setForRemoval && (o.setForRemoval = !1), t && this._fetchNamespace(t).insertNode(e, n), r && this.collectEnterElement(e);
        } }, t.prototype.collectEnterElement = function (t) { this.collectedEnterElements.push(t); }, t.prototype.markElementAsDisabled = function (t, e) { e ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), et(t, "ng-animate-disabled")) : this.disabledNodes.has(t) && (this.disabledNodes.delete(t), nt(t, "ng-animate-disabled")); }, t.prototype.removeNode = function (t, e, n, r) { if (!Z(e))
            return void this._onRemovalComplete(e, n); var o = t ? this._fetchNamespace(t) : null; o ? o.removeNode(e, n, r) : this.markElementAsRemoved(t, e, !1, n); }, t.prototype.markElementAsRemoved = function (t, e, n, r) { this.collectedLeaveElements.push(e), e[ge] = { namespaceId: t, setForRemoval: r, hasAnimation: n, removedBeforeQueried: !1 }; }, t.prototype.listen = function (t, e, n, r, o) { return Z(e) ? this._fetchNamespace(t).listen(e, n, r, o) : function () { }; }, t.prototype._buildInstruction = function (t, e) { return t.transition.build(this.driver, t.element, t.fromState.value, t.toState.value, t.fromState.options, t.toState.options, e); }, t.prototype.destroyInnerAnimations = function (t) { var e = this, n = this.driver.query(t, Tt, !0); n.forEach(function (t) { var n = e.playersByElement.get(t); n && n.forEach(function (t) { t.queued ? t.markedForDestroy = !0 : t.destroy(); }); var r = e.statesByElement.get(t); r && Object.keys(r).forEach(function (t) { return r[t] = we; }); }), 0 != this.playersByQueriedElement.size && (n = this.driver.query(t, Pt, !0), n.length && n.forEach(function (t) { var n = e.playersByQueriedElement.get(t); n && n.forEach(function (t) { return t.finish(); }); })); }, t.prototype.whenRenderingDone = function () { var t = this; return new Promise(function (e) { if (t.players.length)
            return r(t.players).onDone(function () { return e(); }); e(); }); }, t.prototype.processLeaveNode = function (t) { var e = this, n = t[ge]; if (n && n.setForRemoval) {
            if (t[ge] = me, n.namespaceId) {
                this.destroyInnerAnimations(t);
                var r = this._fetchNamespace(n.namespaceId);
                r && r.clearElementCache(t);
            }
            this._onRemovalComplete(t, n.setForRemoval);
        } this.driver.matchesElement(t, ".ng-animate-disabled") && this.markElementAsDisabled(t, !1), this.driver.query(t, ".ng-animate-disabled", !0).forEach(function (n) { e.markElementAsDisabled(t, !1); }); }, t.prototype.flush = function (t) { var e = this; void 0 === t && (t = -1); var n = []; if (this.newHostElements.size && (this.newHostElements.forEach(function (t, n) { return e._balanceNamespaceList(t, n); }), this.newHostElements.clear()), this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
            var o = [];
            try {
                n = this._flushAnimations(o, t);
            }
            finally {
                for (var i = 0; i < o.length; i++)
                    o[i]();
            }
        }
        else
            for (var i = 0; i < this.collectedLeaveElements.length; i++) {
                var s = this.collectedLeaveElements[i];
                this.processLeaveNode(s);
            } if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(function (t) { return t(); }), this._flushFns = [], this._whenQuietFns.length) {
            var a = this._whenQuietFns;
            this._whenQuietFns = [], n.length ? r(n).onDone(function () { a.forEach(function (t) { return t(); }); }) : a.forEach(function (t) { return t(); });
        } }, t.prototype.reportError = function (t) { throw new Error("Unable to process animations due to the following failed trigger transitions\n " + t.join("\n")); }, t.prototype._flushAnimations = function (t, e) { var n = this, o = new te, i = [], s = new Map, a = [], c = new Map, l = new Map, p = new Map, f = new Set; this.disabledNodes.forEach(function (t) { f.add(t); for (var e = n.driver.query(t, ".ng-animate-queued", !0), r = 0; r < e.length; r++)
            f.add(e[r]); }); for (var h = rt(), d = this.collectedEnterElements.length ? this.collectedEnterElements.filter($(this.collectedEnterElements)) : [], y = 0; y < d.length; y++)
            et(d[y], "ng-enter"); for (var m = [], b = [], y = 0; y < this.collectedLeaveElements.length; y++) {
            var _ = this.collectedLeaveElements[y], w = _[ge];
            w && w.setForRemoval && (et(_, "ng-leave"), m.push(_), w.hasAnimation || b.push(_));
        } t.push(function () { d.forEach(function (t) { return nt(t, "ng-enter"); }), m.forEach(function (t) { nt(t, "ng-leave"), n.processLeaveNode(t); }); }); for (var C = [], S = [], y = this._namespaceList.length - 1; y >= 0; y--) {
            this._namespaceList[y].drainQueuedTransitions(e).forEach(function (t) { var e = t.player; C.push(e); var r = t.element; if (!h || !n.driver.containsElement(h, r))
                return void e.destroy(); var s = n._buildInstruction(t, o); if (s.errors && s.errors.length)
                return void S.push(s); if (t.isFallbackTransition)
                return e.onStart(function () { return g(r, s.fromStyles); }), e.onDestroy(function () { return v(r, s.toStyles); }), void i.push(e); s.timelines.forEach(function (t) { return t.stretchStartingKeyframe = !0; }), o.append(r, s.timelines); var f = { instruction: s, player: e, element: r }; a.push(f), s.queriedElements.forEach(function (t) { return u(c, t, []).push(e); }), s.preStyleProps.forEach(function (t, e) { var n = Object.keys(t); if (n.length) {
                var r = l.get(e);
                r || l.set(e, r = new Set), n.forEach(function (t) { return r.add(t); });
            } }), s.postStyleProps.forEach(function (t, e) { var n = Object.keys(t), r = p.get(e); r || p.set(e, r = new Set), n.forEach(function (t) { return r.add(t); }); }); });
        } if (S.length) {
            var E = [];
            S.forEach(function (t) { E.push("@" + t.triggerName + " has failed due to:\n"), t.errors.forEach(function (t) { return E.push("- " + t + "\n"); }); }), C.forEach(function (t) { return t.destroy(); }), this.reportError(E);
        } for (var O = [], y = 0; y < d.length; y++) {
            var _ = d[y];
            o.has(_) || O.push(_);
        } var T = new Map, P = []; a.forEach(function (t) { var e = t.element; o.has(e) && (P.unshift(e), n._beforeAnimationBuild(t.player.namespaceId, t.instruction, T)); }), i.forEach(function (t) { var e = t.element; n._getPreviousPlayers(e, !1, t.namespaceId, t.triggerName, null).forEach(function (t) { u(T, e, []).push(t), t.destroy(); }); }); var x = m.filter(function (t) { return ut(t, l, p); }), R = X(this.driver, b, p, ft.AUTO_STYLE), A = R[0]; R[1].forEach(function (t) { ut(t, l, p) && x.push(t); }); var k = (l.size ? X(this.driver, O, l, ft["ɵPRE_STYLE"]) : [new Map])[0]; x.forEach(function (t) { var e = A.get(t), n = k.get(t); A.set(t, Object.assign({}, e, n)); }); var N = [], I = []; a.forEach(function (t) { var e = t.element, a = t.player, u = t.instruction; if (o.has(e)) {
            if (f.has(e))
                return void i.push(a);
            var c = n._buildAnimation(a.namespaceId, u, T, s, k, A);
            a.setRealPlayer(c);
            for (var l = null, p = 0; p < P.length; p++) {
                var h = P[p];
                if (h === e)
                    break;
                if (n.driver.containsElement(h, e)) {
                    l = h;
                    break;
                }
            }
            if (l) {
                var d = n.playersByElement.get(l);
                d && d.length && (a.parentPlayer = r(d)), i.push(a);
            }
            else
                N.push(a);
        }
        else
            g(e, u.fromStyles), a.onDestroy(function () { return v(e, u.toStyles); }), I.push(a), f.has(e) && i.push(a); }), I.forEach(function (t) { var e = s.get(t.element); if (e && e.length) {
            var n = r(e);
            t.setRealPlayer(n);
        } }), i.forEach(function (t) { t.parentPlayer ? t.parentPlayer.onDestroy(function () { return t.destroy(); }) : t.destroy(); }); for (var y = 0; y < m.length; y++) {
            var _ = m[y], w = _[ge];
            if (nt(_, "ng-leave"), !w || !w.hasAnimation) {
                var j = [];
                if (c.size) {
                    var M = c.get(_);
                    M && M.length && j.push.apply(j, M);
                    for (var D = this.driver.query(_, Pt, !0), L = 0; L < D.length; L++) {
                        var F = c.get(D[L]);
                        F && F.length && j.push.apply(j, F);
                    }
                }
                var V = j.filter(function (t) { return !t.destroyed; });
                V.length ? ot(this, _, V) : this.processLeaveNode(_);
            }
        } return m.length = 0, N.forEach(function (t) { n.players.push(t), t.onDone(function () { t.destroy(); var e = n.players.indexOf(t); n.players.splice(e, 1); }), t.play(); }), N; }, t.prototype.elementContainsData = function (t, e) { var n = !1, r = e[ge]; return r && r.setForRemoval && (n = !0), this.playersByElement.has(e) && (n = !0), this.playersByQueriedElement.has(e) && (n = !0), this.statesByElement.has(e) && (n = !0), this._fetchNamespace(t).elementContainsData(e) || n; }, t.prototype.afterFlush = function (t) { this._flushFns.push(t); }, t.prototype.afterFlushAnimationsDone = function (t) { this._whenQuietFns.push(t); }, t.prototype._getPreviousPlayers = function (t, e, n, r, o) { var i = []; if (e) {
            var s = this.playersByQueriedElement.get(t);
            s && (i = s);
        }
        else {
            var a = this.playersByElement.get(t);
            if (a) {
                var u = !o || "void" == o;
                a.forEach(function (t) { t.queued || (u || t.triggerName == r) && i.push(t); });
            }
        } return (n || r) && (i = i.filter(function (t) { return (!n || n == t.namespaceId) && (!r || r == t.triggerName); })), i; }, t.prototype._beforeAnimationBuild = function (t, e, n) { var r = this, o = e.triggerName, i = e.element, s = e.isRemovalTransition ? void 0 : t, a = e.isRemovalTransition ? void 0 : o; e.timelines.map(function (t) { var o = t.element, c = o !== i, l = u(n, o, []); r._getPreviousPlayers(o, c, s, a, e.toState).forEach(function (t) { var e = t.getRealPlayer(); e.beforeDestroy && e.beforeDestroy(), t.destroy(), l.push(t); }); }), g(i, e.fromStyles); }, t.prototype._buildAnimation = function (t, e, n, i, s, a) { var c = this, l = e.triggerName, p = e.element, f = [], h = new Set, d = new Set, y = e.timelines.map(function (e) { var r = e.element; h.add(r); var u = r[ge]; if (u && u.removedBeforeQueried)
            return new ft.NoopAnimationPlayer; var y = r !== p, m = it((n.get(r) || ye).map(function (t) { return t.getRealPlayer(); })).filter(function (t) { var e = t; return !!e.element && e.element === r; }), v = s.get(r), g = a.get(r), b = o(c.driver, c._normalizer, r, e.keyframes, v, g), _ = c._buildPlayer(e, b, m); if (e.subTimeline && i && d.add(r), y) {
            var w = new Ee(t, l, r);
            w.setRealPlayer(_), f.push(w);
        } return _; }); f.forEach(function (t) { u(c.playersByQueriedElement, t.element, []).push(t), t.onDone(function () { return W(c.playersByQueriedElement, t.element, t); }); }), h.forEach(function (t) { return et(t, "ng-animating"); }); var m = r(y); return m.onDestroy(function () { h.forEach(function (t) { return nt(t, "ng-animating"); }), v(p, e.toStyles); }), d.forEach(function (t) { u(i, t, []).push(m); }), m; }, t.prototype._buildPlayer = function (t, e, n) { return e.length > 0 ? this.driver.animate(t.element, e, t.duration, t.delay, t.easing, n) : new ft.NoopAnimationPlayer; }, t; }(), Ee = function () { function t(t, e, n) { this.namespaceId = t, this.triggerName = e, this.element = n, this._player = new ft.NoopAnimationPlayer, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this._destroyed = !1, this.markedForDestroy = !1; } return Object.defineProperty(t.prototype, "queued", { get: function () { return 0 == this._containsRealPlayer; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "destroyed", { get: function () { return this._destroyed; }, enumerable: !0, configurable: !0 }), t.prototype.setRealPlayer = function (t) { var e = this; this._containsRealPlayer || (this._player = t, Object.keys(this._queuedCallbacks).forEach(function (n) { e._queuedCallbacks[n].forEach(function (e) { return i(t, n, void 0, e); }); }), this._queuedCallbacks = {}, this._containsRealPlayer = !0); }, t.prototype.getRealPlayer = function () { return this._player; }, t.prototype._queueEvent = function (t, e) { u(this._queuedCallbacks, t, []).push(e); }, t.prototype.onDone = function (t) { this.queued && this._queueEvent("done", t), this._player.onDone(t); }, t.prototype.onStart = function (t) { this.queued && this._queueEvent("start", t), this._player.onStart(t); }, t.prototype.onDestroy = function (t) { this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t); }, t.prototype.init = function () { this._player.init(); }, t.prototype.hasStarted = function () { return !this.queued && this._player.hasStarted(); }, t.prototype.play = function () { !this.queued && this._player.play(); }, t.prototype.pause = function () { !this.queued && this._player.pause(); }, t.prototype.restart = function () { !this.queued && this._player.restart(); }, t.prototype.finish = function () { this._player.finish(); }, t.prototype.destroy = function () { this._destroyed = !0, this._player.destroy(); }, t.prototype.reset = function () { !this.queued && this._player.reset(); }, t.prototype.setPosition = function (t) { this.queued || this._player.setPosition(t); }, t.prototype.getPosition = function () { return this.queued ? 0 : this._player.getPosition(); }, Object.defineProperty(t.prototype, "totalTime", { get: function () { return this._player.totalTime; }, enumerable: !0, configurable: !0 }), t; }(), Oe = "$$classes", Te = function () { function t(t, e) { var n = this; this._triggerCache = {}, this.onRemovalComplete = function (t, e) { }, this._transitionEngine = new Se(t, e), this._timelineEngine = new de(t, e), this._transitionEngine.onRemovalComplete = function (t, e) { return n.onRemovalComplete(t, e); }; } return t.prototype.registerTrigger = function (t, e, n, r, o) { var i = t + "-" + r, s = this._triggerCache[i]; if (!s) {
            var a = [], u = k(o, a);
            if (a.length)
                throw new Error('The animation trigger "' + r + '" has failed to build due to the following errors:\n - ' + a.join("\n - "));
            s = z(r, u), this._triggerCache[i] = s;
        } this._transitionEngine.registerTrigger(e, r, s); }, t.prototype.register = function (t, e) { this._transitionEngine.register(t, e); }, t.prototype.destroy = function (t, e) { this._transitionEngine.destroy(t, e); }, t.prototype.onInsert = function (t, e, n, r) { this._transitionEngine.insertNode(t, e, n, r); }, t.prototype.onRemove = function (t, e, n) { this._transitionEngine.removeNode(t, e, n); }, t.prototype.disableAnimations = function (t, e) { this._transitionEngine.markElementAsDisabled(t, e); }, t.prototype.process = function (t, e, n, r) { if ("@" == n.charAt(0)) {
            var o = c(n), i = o[0], s = o[1], a = r;
            this._timelineEngine.command(i, e, s, a);
        }
        else
            this._transitionEngine.trigger(t, e, n, r); }, t.prototype.listen = function (t, e, n, r, o) { if ("@" == n.charAt(0)) {
            var i = c(n), s = i[0], a = i[1];
            return this._timelineEngine.listen(s, e, a, o);
        } return this._transitionEngine.listen(t, e, n, r, o); }, t.prototype.flush = function (t) { void 0 === t && (t = -1), this._transitionEngine.flush(t); }, Object.defineProperty(t.prototype, "players", { get: function () { return this._transitionEngine.players.concat(this._timelineEngine.players); }, enumerable: !0, configurable: !0 }), t.prototype.whenRenderingDone = function () { return this._transitionEngine.whenRenderingDone(); }, t; }(), Pe = function () { function t(t, e, n, r) { void 0 === r && (r = []); var o = this; this.element = t, this.keyframes = e, this.options = n, this.previousPlayers = r, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.previousStyles = {}, this.currentSnapshot = {}, this._duration = n.duration, this._delay = n.delay || 0, this.time = this._duration + this._delay, O(this._duration, this._delay) && r.forEach(function (t) { var e = t.currentSnapshot; Object.keys(e).forEach(function (t) { return o.previousStyles[t] = e[t]; }); }); } return t.prototype._onFinish = function () { this._finished || (this._finished = !0, this._onDoneFns.forEach(function (t) { return t(); }), this._onDoneFns = []); }, t.prototype.init = function () { this._buildPlayer(), this._preparePlayerBeforeStart(); }, t.prototype._buildPlayer = function () { var t = this; if (!this._initialized) {
            this._initialized = !0;
            var e = this.keyframes.map(function (t) { return m(t, !1); }), n = Object.keys(this.previousStyles);
            if (n.length) {
                var r = e[0], o = [];
                if (n.forEach(function (e) { r.hasOwnProperty(e) || o.push(e), r[e] = t.previousStyles[e]; }), o.length)
                    for (var i = this, s = 1; s < e.length; s++)
                        !function () { var t = e[s]; o.forEach(function (e) { t[e] = ct(i.element, e); }); }();
            }
            this._player = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : {}, this._player.addEventListener("finish", function () { return t._onFinish(); });
        } }, t.prototype._preparePlayerBeforeStart = function () { this._delay ? this._resetDomPlayerState() : this._player.pause(); }, t.prototype._triggerWebAnimation = function (t, e, n) { return t.animate(e, n); }, Object.defineProperty(t.prototype, "domPlayer", { get: function () { return this._player; }, enumerable: !0, configurable: !0 }), t.prototype.onStart = function (t) { this._onStartFns.push(t); }, t.prototype.onDone = function (t) { this._onDoneFns.push(t); }, t.prototype.onDestroy = function (t) { this._onDestroyFns.push(t); }, t.prototype.play = function () { this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(function (t) { return t(); }), this._onStartFns = [], this._started = !0), this._player.play(); }, t.prototype.pause = function () { this.init(), this._player.pause(); }, t.prototype.finish = function () { this.init(), this._onFinish(), this._player.finish(); }, t.prototype.reset = function () { this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1; }, t.prototype._resetDomPlayerState = function () { this._player && this._player.cancel(); }, t.prototype.restart = function () { this.reset(), this.play(); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.destroy = function () { this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._onDestroyFns.forEach(function (t) { return t(); }), this._onDestroyFns = []); }, t.prototype.setPosition = function (t) { this._player.currentTime = t * this.time; }, t.prototype.getPosition = function () { return this._player.currentTime / this.time; }, Object.defineProperty(t.prototype, "totalTime", { get: function () { return this._delay + this._duration; }, enumerable: !0, configurable: !0 }), t.prototype.beforeDestroy = function () { var t = this, e = {}; this.hasStarted() && Object.keys(this._finalKeyframe).forEach(function (n) { "offset" != n && (e[n] = t._finished ? t._finalKeyframe[n] : ct(t.element, n)); }), this.currentSnapshot = e; }, t; }(), xe = function () { function t() { } return t.prototype.matchesElement = function (t, e) { return gt(t, e); }, t.prototype.containsElement = function (t, e) { return bt(t, e); }, t.prototype.query = function (t, e, n) { return _t(t, e, n); }, t.prototype.computeStyle = function (t, e, n) { return window.getComputedStyle(t)[e]; }, t.prototype.animate = function (t, e, n, r, o, i) { void 0 === i && (i = []); var s = 0 == r ? "both" : "forwards", a = { duration: n, delay: r, fill: s }; o && (a.easing = o); var u = i.filter(function (t) { return t instanceof Pe; }); return new Pe(t, e, a, u); }, t; }();
    }, fL27: function (t, e, n) {
        "use strict";
        function r(t, e, n, r, o) { return t.setProperty(e, "@@" + n + ":" + r, o); }
        function o(t) { switch (t) {
            case "body": return document.body;
            case "document": return document;
            case "window": return window;
            default: return t;
        } }
        function i(t) { var e = t.indexOf("."); return [t.substring(0, e), t.substr(e + 1)]; }
        function s() { return n.i(h.d)() ? new h.e : new h.f; }
        function a() { return new h.g; }
        function u(t, e, n) { return new v(t, e, n); }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var c = n("6Xbx"), l = n("/oeL"), p = n("fc+i"), f = n("EyWH"), h = n("f9zQ");
        n.d(e, "BrowserAnimationsModule", function () { return E; }), n.d(e, "NoopAnimationsModule", function () { return O; }), n.d(e, "ɵBrowserAnimationBuilder", function () { return d; }), n.d(e, "ɵBrowserAnimationFactory", function () { return y; }), n.d(e, "ɵAnimationRenderer", function () { return b; }), n.d(e, "ɵAnimationRendererFactory", function () { return v; }), n.d(e, "ɵa", function () { return g; }), n.d(e, "ɵf", function () { return C; }), n.d(e, "ɵg", function () { return S; }), n.d(e, "ɵb", function () { return _; }), n.d(e, "ɵd", function () { return a; }), n.d(e, "ɵe", function () { return u; }), n.d(e, "ɵc", function () { return s; });
        var d = function (t) { function e(e, n) { var r = t.call(this) || this; r._nextAnimationId = 0; var o = { id: "0", encapsulation: l.ViewEncapsulation.None, styles: [], data: { animation: [] } }; return r._renderer = e.createRenderer(n.body, o), r; } return c.a(e, t), e.prototype.build = function (t) { var e = this._nextAnimationId.toString(); this._nextAnimationId++; var o = Array.isArray(t) ? n.i(f.sequence)(t) : t; return r(this._renderer, null, e, "register", [o]), new y(e, this._renderer); }, e; }(f.AnimationBuilder);
        d.decorators = [{ type: l.Injectable }], d.ctorParameters = function () { return [{ type: l.RendererFactory2 }, { type: void 0, decorators: [{ type: l.Inject, args: [p.w] }] }]; };
        var y = function (t) { function e(e, n) { var r = t.call(this) || this; return r._id = e, r._renderer = n, r; } return c.a(e, t), e.prototype.create = function (t, e) { return new m(this._id, t, e || {}, this._renderer); }, e; }(f.AnimationFactory), m = function () { function t(t, e, n, r) { this.id = t, this.element = e, this._renderer = r, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", n); } return t.prototype._listen = function (t, e) { return this._renderer.listen(this.element, "@@" + this.id + ":" + t, e); }, t.prototype._command = function (t) { for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]; return r(this._renderer, this.element, this.id, t, e); }, t.prototype.onDone = function (t) { this._listen("done", t); }, t.prototype.onStart = function (t) { this._listen("start", t); }, t.prototype.onDestroy = function (t) { this._listen("destroy", t); }, t.prototype.init = function () { this._command("init"); }, t.prototype.hasStarted = function () { return this._started; }, t.prototype.play = function () { this._command("play"), this._started = !0; }, t.prototype.pause = function () { this._command("pause"); }, t.prototype.restart = function () { this._command("restart"); }, t.prototype.finish = function () { this._command("finish"); }, t.prototype.destroy = function () { this._command("destroy"); }, t.prototype.reset = function () { this._command("reset"); }, t.prototype.setPosition = function (t) { this._command("setPosition", t); }, t.prototype.getPosition = function () { return 0; }, t; }(), v = function () { function t(t, e, n) { this.delegate = t, this.engine = e, this._zone = n, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, e.onRemovalComplete = function (t, e) { e && e.parentNode(t) && e.removeChild(t.parentNode, t); }; } return t.prototype.createRenderer = function (t, e) { var n = this, r = this.delegate.createRenderer(t, e); if (!(t && e && e.data && e.data.animation)) {
            var o = this._rendererCache.get(r);
            return o || (o = new g("", r, this.engine), this._rendererCache.set(r, o)), o;
        } var i = e.id, s = e.id + "-" + this._currentId; return this._currentId++, this.engine.register(s, t), e.data.animation.forEach(function (e) { return n.engine.registerTrigger(i, s, t, e.name, e); }), new b(this, s, r, this.engine); }, t.prototype.begin = function () { this._cdRecurDepth++, this.delegate.begin && this.delegate.begin(); }, t.prototype._scheduleCountTask = function () { var t = this; Zone.current.scheduleMicroTask("incremenet the animation microtask", function () { return t._microtaskId++; }); }, t.prototype.scheduleListenerCallback = function (t, e, n) { var r = this; if (t >= 0 && t < this._microtaskId)
            return void this._zone.run(function () { return e(n); }); 0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(function () { r._zone.run(function () { r._animationCallbacksBuffer.forEach(function (t) { (0, t[0])(t[1]); }), r._animationCallbacksBuffer = []; }); }), this._animationCallbacksBuffer.push([e, n]); }, t.prototype.end = function () { var t = this; this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(function () { t._scheduleCountTask(), t.engine.flush(t._microtaskId); }), this.delegate.end && this.delegate.end(); }, t.prototype.whenRenderingDone = function () { return this.engine.whenRenderingDone(); }, t; }();
        v.decorators = [{ type: l.Injectable }], v.ctorParameters = function () { return [{ type: l.RendererFactory2 }, { type: h.a }, { type: l.NgZone }]; };
        var g = function () { function t(t, e, n) { this.namespaceId = t, this.delegate = e, this.engine = n, this.destroyNode = this.delegate.destroyNode ? function (t) { return e.destroyNode(t); } : null; } return Object.defineProperty(t.prototype, "data", { get: function () { return this.delegate.data; }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function () { this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy(); }, t.prototype.createElement = function (t, e) { return this.delegate.createElement(t, e); }, t.prototype.createComment = function (t) { return this.delegate.createComment(t); }, t.prototype.createText = function (t) { return this.delegate.createText(t); }, t.prototype.appendChild = function (t, e) { this.delegate.appendChild(t, e), this.engine.onInsert(this.namespaceId, e, t, !1); }, t.prototype.insertBefore = function (t, e, n) { this.delegate.insertBefore(t, e, n), this.engine.onInsert(this.namespaceId, e, t, !0); }, t.prototype.removeChild = function (t, e) { this.engine.onRemove(this.namespaceId, e, this.delegate); }, t.prototype.selectRootElement = function (t) { return this.delegate.selectRootElement(t); }, t.prototype.parentNode = function (t) { return this.delegate.parentNode(t); }, t.prototype.nextSibling = function (t) { return this.delegate.nextSibling(t); }, t.prototype.setAttribute = function (t, e, n, r) { this.delegate.setAttribute(t, e, n, r); }, t.prototype.removeAttribute = function (t, e, n) { this.delegate.removeAttribute(t, e, n); }, t.prototype.addClass = function (t, e) { this.delegate.addClass(t, e); }, t.prototype.removeClass = function (t, e) { this.delegate.removeClass(t, e); }, t.prototype.setStyle = function (t, e, n, r) { this.delegate.setStyle(t, e, n, r); }, t.prototype.removeStyle = function (t, e, n) { this.delegate.removeStyle(t, e, n); }, t.prototype.setProperty = function (t, e, n) { "@" == e.charAt(0) && "@.disabled" == e ? this.disableAnimations(t, !!n) : this.delegate.setProperty(t, e, n); }, t.prototype.setValue = function (t, e) { this.delegate.setValue(t, e); }, t.prototype.listen = function (t, e, n) { return this.delegate.listen(t, e, n); }, t.prototype.disableAnimations = function (t, e) { this.engine.disableAnimations(t, e); }, t; }(), b = function (t) { function e(e, n, r, o) { var i = t.call(this, n, r, o) || this; return i.factory = e, i.namespaceId = n, i; } return c.a(e, t), e.prototype.setProperty = function (t, e, n) { "@" == e.charAt(0) ? "." == e.charAt(1) && "@.disabled" == e ? (n = void 0 === n || !!n, this.disableAnimations(t, n)) : this.engine.process(this.namespaceId, t, e.substr(1), n) : this.delegate.setProperty(t, e, n); }, e.prototype.listen = function (t, e, n) { var r = this; if ("@" == e.charAt(0)) {
            var s = o(t), a = e.substr(1), u = "";
            return "@" != a.charAt(0) && (c = i(a), a = c[0], u = c[1]), this.engine.listen(this.namespaceId, s, a, u, function (t) { var e = t._data || -1; r.factory.scheduleListenerCallback(e, n, t); });
        } return this.delegate.listen(t, e, n); var c; }, e; }(g), _ = function (t) { function e(e, n) { return t.call(this, e, n) || this; } return c.a(e, t), e; }(h.a);
        _.decorators = [{ type: l.Injectable }], _.ctorParameters = function () { return [{ type: h.b }, { type: h.c }]; };
        var w = [{ provide: f.AnimationBuilder, useClass: d }, { provide: h.c, useFactory: a }, { provide: h.a, useClass: _ }, { provide: l.RendererFactory2, useFactory: u, deps: [p.l, h.a, l.NgZone] }], C = [{ provide: h.b, useFactory: s }].concat(w), S = [{ provide: h.b, useClass: h.f }].concat(w), E = function () { function t() { } return t; }();
        E.decorators = [{ type: l.NgModule, args: [{ exports: [p.u], providers: C }] }], E.ctorParameters = function () { return []; };
        var O = function () { function t() { } return t; }();
        O.decorators = [{ type: l.NgModule, args: [{ exports: [p.u], providers: S }] }], O.ctorParameters = function () { return []; };
    }, fRUx: function (t, e) { var n; n = function () { return this; }(); try {
        n = n || Function("return this")() || (0, eval)("this");
    }
    catch (t) {
        "object" == typeof window && (n = window);
    } t.exports = n; }, "fc+i": function (t, e, n) {
        "use strict";
        function r() { return D; }
        function o(t) { D || (D = t); }
        function i() { return z || (z = document.querySelector("base")) ? z.getAttribute("href") : null; }
        function s(t) { return B || (B = document.createElement("a")), B.setAttribute("href", t), "/" === B.pathname.charAt(0) ? B.pathname : "/" + B.pathname; }
        function a() { return !!window.history.pushState; }
        function u(t, e, n) { return function () { n.get(j.ApplicationInitStatus).donePromise.then(function () { var n = r(); Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function (e) { return n.getAttribute(e, "ng-transition") === t; }).forEach(function (t) { return n.remove(t); }); }); }; }
        function c(t, e) { X || (j["ɵglobal"].ng = X = j["ɵglobal"].ng || {}), X[t] = e; }
        function l(t) { return n.i(j.getDebugNode)(t); }
        function p(t, e) { var n = (t || []).concat(e || []); return c(tt, l), c(et, Object.assign({}, $, f(n || []))), function () { return l; }; }
        function f(t) { return t.reduce(function (t, e) { return t[e.name] = e.token, t; }, {}); }
        function h(t) { return ft.replace(lt, t); }
        function d(t) { return pt.replace(lt, t); }
        function y(t, e, n) { for (var r = 0; r < e.length; r++) {
            var o = e[r];
            Array.isArray(o) ? y(t, o, n) : (o = o.replace(lt, t), n.push(o));
        } return n; }
        function m(t) { return function (e) { !1 === t(e) && (e.preventDefault(), e.returnValue = !1); }; }
        function v(t, e) { if (t.charCodeAt(0) === yt)
            throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'); }
        function g(t) { return t = String(t), t.match(Tt) || t.match(Pt) ? t : (n.i(j.isDevMode)() && r().log("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t); }
        function b(t) { return t = String(t), t.split(",").map(function (t) { return g(t.trim()); }).join(", "); }
        function _() { if (xt)
            return xt; Rt = r(); var t = Rt.createElement("template"); if ("content" in t)
            return t; var e = Rt.createHtmlDocument(); if (null == (xt = Rt.querySelector(e, "body"))) {
            var n = Rt.createElement("html", e);
            xt = Rt.createElement("body", e), Rt.appendChild(n, xt), Rt.appendChild(e, n);
        } return xt; }
        function w(t) { for (var e = {}, n = 0, r = t.split(","); n < r.length; n++) {
            e[r[n]] = !0;
        } return e; }
        function C() { for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]; for (var n = {}, r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            for (var s in i)
                i.hasOwnProperty(s) && (n[s] = !0);
        } return n; }
        function S(t, e) { if (e && Rt.contains(t, e))
            throw new Error("Failed to sanitize html because the element is clobbered: " + Rt.getOuterHTML(t)); return e; }
        function E(t) { return t.replace(/&/g, "&amp;").replace(Bt, function (t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"; }).replace(qt, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
        function O(t) { Rt.attributeMap(t).forEach(function (e, n) { "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || Rt.removeAttribute(t, n); }); for (var e = 0, n = Rt.childNodesAsList(t); e < n.length; e++) {
            var r = n[e];
            Rt.isElementNode(r) && O(r);
        } }
        function T(t, e) { try {
            var r = _(), o = e ? String(e) : "", i = 5, s = o;
            do {
                if (0 === i)
                    throw new Error("Failed to sanitize html because the input is unstable");
                i--, o = s, Rt.setInnerHTML(r, o), t.documentMode && O(r), s = Rt.getInnerHTML(r);
            } while (o !== s);
            for (var a = new Ht, u = a.sanitizeChildren(Rt.getTemplateContent(r) || r), c = Rt.getTemplateContent(r) || r, l = 0, p = Rt.childNodesAsList(c); l < p.length; l++) {
                var f = p[l];
                Rt.removeChild(c, f);
            }
            return n.i(j.isDevMode)() && a.sanitizedSomething && Rt.log("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), u;
        }
        catch (t) {
            throw xt = null, t;
        } }
        function P(t) { for (var e = !0, n = !0, r = 0; r < t.length; r++) {
            var o = t.charAt(r);
            "'" === o && n ? e = !e : '"' === o && e && (n = !n);
        } return e && n; }
        function x(t) { if (!(t = String(t).trim()))
            return ""; var e = t.match(Kt); return e && g(e[1]) === e[1] || t.match(zt) && P(t) ? t : (n.i(j.isDevMode)() && r().log("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe"); }
        function R() { q.makeCurrent(), Y.init(); }
        function A() { return new j.ErrorHandler; }
        function k() { return document; }
        var N = n("6Xbx"), I = n("qbdv"), j = n("/oeL");
        n.d(e, "u", function () { return re; }), n.d(e, "a", function () { return ne; }), n.d(e, "n", function () { return W; }), n.d(e, "o", function () { return J; }), n.d(e, "t", function () { return nt; }), n.d(e, "w", function () { return K; }), n.d(e, "f", function () { return ot; }), n.d(e, "j", function () { return it; }), n.d(e, "d", function () { return _t; }), n.d(e, "e", function () { return wt; }), n.d(e, "b", function () { return Qt; }), n.d(e, "q", function () { return G; }), n.d(e, "v", function () { return r; }), n.d(e, "l", function () { return ht; }), n.d(e, "g", function () { return gt; }), n.d(e, "i", function () { return Ct; }), n.d(e, "h", function () { return Ot; }), n.d(e, "k", function () { return ut; }), n.d(e, "m", function () { return at; }), n.d(e, "p", function () { return A; }), n.d(e, "s", function () { return u; }), n.d(e, "r", function () { return p; }), n.d(e, "c", function () { return Wt; });
        var M, D = null, L = function () { function t() { this.resourceLoaderType = null; } return t.prototype.hasProperty = function (t, e) { }, t.prototype.setProperty = function (t, e, n) { }, t.prototype.getProperty = function (t, e) { }, t.prototype.invoke = function (t, e, n) { }, t.prototype.logError = function (t) { }, t.prototype.log = function (t) { }, t.prototype.logGroup = function (t) { }, t.prototype.logGroupEnd = function () { }, Object.defineProperty(t.prototype, "attrToPropMap", { get: function () { return this._attrToPropMap; }, set: function (t) { this._attrToPropMap = t; }, enumerable: !0, configurable: !0 }), t.prototype.contains = function (t, e) { }, t.prototype.parse = function (t) { }, t.prototype.querySelector = function (t, e) { }, t.prototype.querySelectorAll = function (t, e) { }, t.prototype.on = function (t, e, n) { }, t.prototype.onAndCancel = function (t, e, n) { }, t.prototype.dispatchEvent = function (t, e) { }, t.prototype.createMouseEvent = function (t) { }, t.prototype.createEvent = function (t) { }, t.prototype.preventDefault = function (t) { }, t.prototype.isPrevented = function (t) { }, t.prototype.getInnerHTML = function (t) { }, t.prototype.getTemplateContent = function (t) { }, t.prototype.getOuterHTML = function (t) { }, t.prototype.nodeName = function (t) { }, t.prototype.nodeValue = function (t) { }, t.prototype.type = function (t) { }, t.prototype.content = function (t) { }, t.prototype.firstChild = function (t) { }, t.prototype.nextSibling = function (t) { }, t.prototype.parentElement = function (t) { }, t.prototype.childNodes = function (t) { }, t.prototype.childNodesAsList = function (t) { }, t.prototype.clearNodes = function (t) { }, t.prototype.appendChild = function (t, e) { }, t.prototype.removeChild = function (t, e) { }, t.prototype.replaceChild = function (t, e, n) { }, t.prototype.remove = function (t) { }, t.prototype.insertBefore = function (t, e, n) { }, t.prototype.insertAllBefore = function (t, e, n) { }, t.prototype.insertAfter = function (t, e, n) { }, t.prototype.setInnerHTML = function (t, e) { }, t.prototype.getText = function (t) { }, t.prototype.setText = function (t, e) { }, t.prototype.getValue = function (t) { }, t.prototype.setValue = function (t, e) { }, t.prototype.getChecked = function (t) { }, t.prototype.setChecked = function (t, e) { }, t.prototype.createComment = function (t) { }, t.prototype.createTemplate = function (t) { }, t.prototype.createElement = function (t, e) { }, t.prototype.createElementNS = function (t, e, n) { }, t.prototype.createTextNode = function (t, e) { }, t.prototype.createScriptTag = function (t, e, n) { }, t.prototype.createStyleElement = function (t, e) { }, t.prototype.createShadowRoot = function (t) { }, t.prototype.getShadowRoot = function (t) { }, t.prototype.getHost = function (t) { }, t.prototype.getDistributedNodes = function (t) { }, t.prototype.clone = function (t) { }, t.prototype.getElementsByClassName = function (t, e) { }, t.prototype.getElementsByTagName = function (t, e) { }, t.prototype.classList = function (t) { }, t.prototype.addClass = function (t, e) { }, t.prototype.removeClass = function (t, e) { }, t.prototype.hasClass = function (t, e) { }, t.prototype.setStyle = function (t, e, n) { }, t.prototype.removeStyle = function (t, e) { }, t.prototype.getStyle = function (t, e) { }, t.prototype.hasStyle = function (t, e, n) { }, t.prototype.tagName = function (t) { }, t.prototype.attributeMap = function (t) { }, t.prototype.hasAttribute = function (t, e) { }, t.prototype.hasAttributeNS = function (t, e, n) { }, t.prototype.getAttribute = function (t, e) { }, t.prototype.getAttributeNS = function (t, e, n) { }, t.prototype.setAttribute = function (t, e, n) { }, t.prototype.setAttributeNS = function (t, e, n, r) { }, t.prototype.removeAttribute = function (t, e) { }, t.prototype.removeAttributeNS = function (t, e, n) { }, t.prototype.templateAwareRoot = function (t) { }, t.prototype.createHtmlDocument = function () { }, t.prototype.getBoundingClientRect = function (t) { }, t.prototype.getTitle = function (t) { }, t.prototype.setTitle = function (t, e) { }, t.prototype.elementMatches = function (t, e) { }, t.prototype.isTemplateElement = function (t) { }, t.prototype.isTextNode = function (t) { }, t.prototype.isCommentNode = function (t) { }, t.prototype.isElementNode = function (t) { }, t.prototype.hasShadowRoot = function (t) { }, t.prototype.isShadowRoot = function (t) { }, t.prototype.importIntoDoc = function (t) { }, t.prototype.adoptNode = function (t) { }, t.prototype.getHref = function (t) { }, t.prototype.getEventKey = function (t) { }, t.prototype.resolveAndSetHref = function (t, e, n) { }, t.prototype.supportsDOMEvents = function () { }, t.prototype.supportsNativeShadowDOM = function () { }, t.prototype.getGlobalEventTarget = function (t, e) { }, t.prototype.getHistory = function () { }, t.prototype.getLocation = function () { }, t.prototype.getBaseHref = function (t) { }, t.prototype.resetBaseElement = function () { }, t.prototype.getUserAgent = function () { }, t.prototype.setData = function (t, e, n) { }, t.prototype.getComputedStyle = function (t) { }, t.prototype.getData = function (t, e) { }, t.prototype.supportsWebAnimation = function () { }, t.prototype.performanceNow = function () { }, t.prototype.getAnimationPrefix = function () { }, t.prototype.getTransitionEnd = function () { }, t.prototype.supportsAnimation = function () { }, t.prototype.supportsCookies = function () { }, t.prototype.getCookie = function (t) { }, t.prototype.setCookie = function (t, e) { }, t; }(), F = function (t) { function e() { var e = t.call(this) || this; e._animationPrefix = null, e._transitionEnd = null; try {
            var n = e.createElement("div", document);
            if (null != e.getStyle(n, "animationName"))
                e._animationPrefix = "";
            else
                for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                    if (null != e.getStyle(n, r[o] + "AnimationName")) {
                        e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                        break;
                    }
            var i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            Object.keys(i).forEach(function (t) { null != e.getStyle(n, t) && (e._transitionEnd = i[t]); });
        }
        catch (t) {
            e._animationPrefix = null, e._transitionEnd = null;
        } return e; } return N.a(e, t), e.prototype.getDistributedNodes = function (t) { return t.getDistributedNodes(); }, e.prototype.resolveAndSetHref = function (t, e, n) { t.href = null == n ? e : e + "/../" + n; }, e.prototype.supportsDOMEvents = function () { return !0; }, e.prototype.supportsNativeShadowDOM = function () { return "function" == typeof document.body.createShadowRoot; }, e.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ""; }, e.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ""; }, e.prototype.supportsAnimation = function () { return null != this._animationPrefix && null != this._transitionEnd; }, e; }(L), V = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }, U = { "\b": "Backspace", "\t": "Tab", "": "Delete", "": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, H = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "": "NumLock" };
        j["ɵglobal"].Node && (M = j["ɵglobal"].Node.prototype.contains || function (t) { return !!(16 & this.compareDocumentPosition(t)); });
        var B, q = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.parse = function (t) { throw new Error("parse not implemented"); }, e.makeCurrent = function () { o(new e); }, e.prototype.hasProperty = function (t, e) { return e in t; }, e.prototype.setProperty = function (t, e, n) { t[e] = n; }, e.prototype.getProperty = function (t, e) { return t[e]; }, e.prototype.invoke = function (t, e, n) { t[e].apply(t, n); }, e.prototype.logError = function (t) { window.console && (console.error ? console.error(t) : console.log(t)); }, e.prototype.log = function (t) { window.console && window.console.log && window.console.log(t); }, e.prototype.logGroup = function (t) { window.console && window.console.group && window.console.group(t); }, e.prototype.logGroupEnd = function () { window.console && window.console.groupEnd && window.console.groupEnd(); }, Object.defineProperty(e.prototype, "attrToPropMap", { get: function () { return V; }, enumerable: !0, configurable: !0 }), e.prototype.contains = function (t, e) { return M.call(t, e); }, e.prototype.querySelector = function (t, e) { return t.querySelector(e); }, e.prototype.querySelectorAll = function (t, e) { return t.querySelectorAll(e); }, e.prototype.on = function (t, e, n) { t.addEventListener(e, n, !1); }, e.prototype.onAndCancel = function (t, e, n) { return t.addEventListener(e, n, !1), function () { t.removeEventListener(e, n, !1); }; }, e.prototype.dispatchEvent = function (t, e) { t.dispatchEvent(e); }, e.prototype.createMouseEvent = function (t) { var e = document.createEvent("MouseEvent"); return e.initEvent(t, !0, !0), e; }, e.prototype.createEvent = function (t) { var e = document.createEvent("Event"); return e.initEvent(t, !0, !0), e; }, e.prototype.preventDefault = function (t) { t.preventDefault(), t.returnValue = !1; }, e.prototype.isPrevented = function (t) { return t.defaultPrevented || null != t.returnValue && !t.returnValue; }, e.prototype.getInnerHTML = function (t) { return t.innerHTML; }, e.prototype.getTemplateContent = function (t) { return "content" in t && t instanceof HTMLTemplateElement ? t.content : null; }, e.prototype.getOuterHTML = function (t) { return t.outerHTML; }, e.prototype.nodeName = function (t) { return t.nodeName; }, e.prototype.nodeValue = function (t) { return t.nodeValue; }, e.prototype.type = function (t) { return t.type; }, e.prototype.content = function (t) { return this.hasProperty(t, "content") ? t.content : t; }, e.prototype.firstChild = function (t) { return t.firstChild; }, e.prototype.nextSibling = function (t) { return t.nextSibling; }, e.prototype.parentElement = function (t) { return t.parentNode; }, e.prototype.childNodes = function (t) { return t.childNodes; }, e.prototype.childNodesAsList = function (t) { for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++)
            n[r] = e[r]; return n; }, e.prototype.clearNodes = function (t) { for (; t.firstChild;)
            t.removeChild(t.firstChild); }, e.prototype.appendChild = function (t, e) { t.appendChild(e); }, e.prototype.removeChild = function (t, e) { t.removeChild(e); }, e.prototype.replaceChild = function (t, e, n) { t.replaceChild(e, n); }, e.prototype.remove = function (t) { return t.parentNode && t.parentNode.removeChild(t), t; }, e.prototype.insertBefore = function (t, e, n) { t.insertBefore(n, e); }, e.prototype.insertAllBefore = function (t, e, n) { n.forEach(function (n) { return t.insertBefore(n, e); }); }, e.prototype.insertAfter = function (t, e, n) { t.insertBefore(n, e.nextSibling); }, e.prototype.setInnerHTML = function (t, e) { t.innerHTML = e; }, e.prototype.getText = function (t) { return t.textContent; }, e.prototype.setText = function (t, e) { t.textContent = e; }, e.prototype.getValue = function (t) { return t.value; }, e.prototype.setValue = function (t, e) { t.value = e; }, e.prototype.getChecked = function (t) { return t.checked; }, e.prototype.setChecked = function (t, e) { t.checked = e; }, e.prototype.createComment = function (t) { return document.createComment(t); }, e.prototype.createTemplate = function (t) { var e = document.createElement("template"); return e.innerHTML = t, e; }, e.prototype.createElement = function (t, e) { return void 0 === e && (e = document), e.createElement(t); }, e.prototype.createElementNS = function (t, e, n) { return void 0 === n && (n = document), n.createElementNS(t, e); }, e.prototype.createTextNode = function (t, e) { return void 0 === e && (e = document), e.createTextNode(t); }, e.prototype.createScriptTag = function (t, e, n) { void 0 === n && (n = document); var r = n.createElement("SCRIPT"); return r.setAttribute(t, e), r; }, e.prototype.createStyleElement = function (t, e) { void 0 === e && (e = document); var n = e.createElement("style"); return this.appendChild(n, this.createTextNode(t)), n; }, e.prototype.createShadowRoot = function (t) { return t.createShadowRoot(); }, e.prototype.getShadowRoot = function (t) { return t.shadowRoot; }, e.prototype.getHost = function (t) { return t.host; }, e.prototype.clone = function (t) { return t.cloneNode(!0); }, e.prototype.getElementsByClassName = function (t, e) { return t.getElementsByClassName(e); }, e.prototype.getElementsByTagName = function (t, e) { return t.getElementsByTagName(e); }, e.prototype.classList = function (t) { return Array.prototype.slice.call(t.classList, 0); }, e.prototype.addClass = function (t, e) { t.classList.add(e); }, e.prototype.removeClass = function (t, e) { t.classList.remove(e); }, e.prototype.hasClass = function (t, e) { return t.classList.contains(e); }, e.prototype.setStyle = function (t, e, n) { t.style[e] = n; }, e.prototype.removeStyle = function (t, e) { t.style[e] = ""; }, e.prototype.getStyle = function (t, e) { return t.style[e]; }, e.prototype.hasStyle = function (t, e, n) { var r = this.getStyle(t, e) || ""; return n ? r == n : r.length > 0; }, e.prototype.tagName = function (t) { return t.tagName; }, e.prototype.attributeMap = function (t) { for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
            var o = n[r];
            e.set(o.name, o.value);
        } return e; }, e.prototype.hasAttribute = function (t, e) { return t.hasAttribute(e); }, e.prototype.hasAttributeNS = function (t, e, n) { return t.hasAttributeNS(e, n); }, e.prototype.getAttribute = function (t, e) { return t.getAttribute(e); }, e.prototype.getAttributeNS = function (t, e, n) { return t.getAttributeNS(e, n); }, e.prototype.setAttribute = function (t, e, n) { t.setAttribute(e, n); }, e.prototype.setAttributeNS = function (t, e, n, r) { t.setAttributeNS(e, n, r); }, e.prototype.removeAttribute = function (t, e) { t.removeAttribute(e); }, e.prototype.removeAttributeNS = function (t, e, n) { t.removeAttributeNS(e, n); }, e.prototype.templateAwareRoot = function (t) { return this.isTemplateElement(t) ? this.content(t) : t; }, e.prototype.createHtmlDocument = function () { return document.implementation.createHTMLDocument("fakeTitle"); }, e.prototype.getBoundingClientRect = function (t) { try {
            return t.getBoundingClientRect();
        }
        catch (t) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        } }, e.prototype.getTitle = function (t) { return document.title; }, e.prototype.setTitle = function (t, e) { document.title = e || ""; }, e.prototype.elementMatches = function (t, e) { return t instanceof HTMLElement && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e)); }, e.prototype.isTemplateElement = function (t) { return t instanceof HTMLElement && "TEMPLATE" == t.nodeName; }, e.prototype.isTextNode = function (t) { return t.nodeType === Node.TEXT_NODE; }, e.prototype.isCommentNode = function (t) { return t.nodeType === Node.COMMENT_NODE; }, e.prototype.isElementNode = function (t) { return t.nodeType === Node.ELEMENT_NODE; }, e.prototype.hasShadowRoot = function (t) { return null != t.shadowRoot && t instanceof HTMLElement; }, e.prototype.isShadowRoot = function (t) { return t instanceof DocumentFragment; }, e.prototype.importIntoDoc = function (t) { return document.importNode(this.templateAwareRoot(t), !0); }, e.prototype.adoptNode = function (t) { return document.adoptNode(t); }, e.prototype.getHref = function (t) { return t.href; }, e.prototype.getEventKey = function (t) { var e = t.key; if (null == e) {
            if (null == (e = t.keyIdentifier))
                return "Unidentified";
            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && H.hasOwnProperty(e) && (e = H[e]));
        } return U[e] || e; }, e.prototype.getGlobalEventTarget = function (t, e) { return "window" === e ? window : "document" === e ? document : "body" === e ? document.body : null; }, e.prototype.getHistory = function () { return window.history; }, e.prototype.getLocation = function () { return window.location; }, e.prototype.getBaseHref = function (t) { var e = i(); return null == e ? null : s(e); }, e.prototype.resetBaseElement = function () { z = null; }, e.prototype.getUserAgent = function () { return window.navigator.userAgent; }, e.prototype.setData = function (t, e, n) { this.setAttribute(t, "data-" + e, n); }, e.prototype.getData = function (t, e) { return this.getAttribute(t, "data-" + e); }, e.prototype.getComputedStyle = function (t) { return getComputedStyle(t); }, e.prototype.supportsWebAnimation = function () { return "function" == typeof Element.prototype.animate; }, e.prototype.performanceNow = function () { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime(); }, e.prototype.supportsCookies = function () { return !0; }, e.prototype.getCookie = function (t) { return n.i(I["ɵparseCookieValue"])(document.cookie, t); }, e.prototype.setCookie = function (t, e) { document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e); }, e; }(F), z = null, K = I.DOCUMENT, Q = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n._init(), n; } return N.a(e, t), e.prototype._init = function () { this._location = r().getLocation(), this._history = r().getHistory(); }, Object.defineProperty(e.prototype, "location", { get: function () { return this._location; }, enumerable: !0, configurable: !0 }), e.prototype.getBaseHrefFromDOM = function () { return r().getBaseHref(this._doc); }, e.prototype.onPopState = function (t) { r().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1); }, e.prototype.onHashChange = function (t) { r().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1); }, Object.defineProperty(e.prototype, "pathname", { get: function () { return this._location.pathname; }, set: function (t) { this._location.pathname = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "search", { get: function () { return this._location.search; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hash", { get: function () { return this._location.hash; }, enumerable: !0, configurable: !0 }), e.prototype.pushState = function (t, e, n) { a() ? this._history.pushState(t, e, n) : this._location.hash = n; }, e.prototype.replaceState = function (t, e, n) { a() ? this._history.replaceState(t, e, n) : this._location.hash = n; }, e.prototype.forward = function () { this._history.forward(); }, e.prototype.back = function () { this._history.back(); }, e; }(I.PlatformLocation);
        Q.decorators = [{ type: j.Injectable }], Q.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var W = function () { function t(t) { this._doc = t, this._dom = r(); } return t.prototype.addTag = function (t, e) { return void 0 === e && (e = !1), t ? this._getOrCreateElement(t, e) : null; }, t.prototype.addTags = function (t, e) { var n = this; return void 0 === e && (e = !1), t ? t.reduce(function (t, r) { return r && t.push(n._getOrCreateElement(r, e)), t; }, []) : []; }, t.prototype.getTag = function (t) { return t ? this._dom.querySelector(this._doc, "meta[" + t + "]") : null; }, t.prototype.getTags = function (t) { if (!t)
            return []; var e = this._dom.querySelectorAll(this._doc, "meta[" + t + "]"); return e ? [].slice.call(e) : []; }, t.prototype.updateTag = function (t, e) { if (!t)
            return null; e = e || this._parseSelector(t); var n = this.getTag(e); return n ? this._setMetaElementAttributes(t, n) : this._getOrCreateElement(t, !0); }, t.prototype.removeTag = function (t) { this.removeTagElement(this.getTag(t)); }, t.prototype.removeTagElement = function (t) { t && this._dom.remove(t); }, t.prototype._getOrCreateElement = function (t, e) { if (void 0 === e && (e = !1), !e) {
            var n = this._parseSelector(t), r = this.getTag(n);
            if (r && this._containsAttributes(t, r))
                return r;
        } var o = this._dom.createElement("meta"); this._setMetaElementAttributes(t, o); var i = this._dom.getElementsByTagName(this._doc, "head")[0]; return this._dom.appendChild(i, o), o; }, t.prototype._setMetaElementAttributes = function (t, e) { var n = this; return Object.keys(t).forEach(function (r) { return n._dom.setAttribute(e, r, t[r]); }), e; }, t.prototype._parseSelector = function (t) { var e = t.name ? "name" : "property"; return e + '="' + t[e] + '"'; }, t.prototype._containsAttributes = function (t, e) { var n = this; return Object.keys(t).every(function (r) { return n._dom.getAttribute(e, r) === t[r]; }); }, t; }();
        W.decorators = [{ type: j.Injectable }], W.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var G = new j.InjectionToken("TRANSITION_ID"), Z = [{ provide: j.APP_INITIALIZER, useFactory: u, deps: [G, K, j.Injector], multi: !0 }], Y = function () { function t() { } return t.init = function () { n.i(j.setTestabilityGetter)(new t); }, t.prototype.addToWindow = function (t) { j["ɵglobal"].getAngularTestability = function (e, n) { void 0 === n && (n = !0); var r = t.findTestabilityInTree(e, n); if (null == r)
            throw new Error("Could not find testability for element."); return r; }, j["ɵglobal"].getAllAngularTestabilities = function () { return t.getAllTestabilities(); }, j["ɵglobal"].getAllAngularRootElements = function () { return t.getAllRootElements(); }; var e = function (t) { var e = j["ɵglobal"].getAllAngularTestabilities(), n = e.length, r = !1, o = function (e) { r = r || e, 0 == --n && t(r); }; e.forEach(function (t) { t.whenStable(o); }); }; j["ɵglobal"].frameworkStabilizers || (j["ɵglobal"].frameworkStabilizers = []), j["ɵglobal"].frameworkStabilizers.push(e); }, t.prototype.findTestabilityInTree = function (t, e, n) { if (null == e)
            return null; var o = t.getTestability(e); return null != o ? o : n ? r().isShadowRoot(e) ? this.findTestabilityInTree(t, r().getHost(e), !0) : this.findTestabilityInTree(t, r().parentElement(e), !0) : null; }, t; }(), J = function () { function t(t) { this._doc = t; } return t.prototype.getTitle = function () { return r().getTitle(this._doc); }, t.prototype.setTitle = function (t) { r().setTitle(this._doc, t); }, t; }();
        J.decorators = [{ type: j.Injectable }], J.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var X, $ = { ApplicationRef: j.ApplicationRef, NgZone: j.NgZone }, tt = "probe", et = "coreTokens", nt = function () { function t(t, e) { this.name = t, this.token = e; } return t; }(), rt = [{ provide: j.APP_INITIALIZER, useFactory: p, deps: [[nt, new j.Optional], [j.NgProbeToken, new j.Optional]], multi: !0 }], ot = new j.InjectionToken("EventManagerPlugins"), it = function () { function t(t, e) { var n = this; this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function (t) { return t.manager = n; }), this._plugins = t.slice().reverse(); } return t.prototype.addEventListener = function (t, e, n) { return this._findPluginFor(e).addEventListener(t, e, n); }, t.prototype.addGlobalEventListener = function (t, e, n) { return this._findPluginFor(e).addGlobalEventListener(t, e, n); }, t.prototype.getZone = function () { return this._zone; }, t.prototype._findPluginFor = function (t) { var e = this._eventNameToPlugin.get(t); if (e)
            return e; for (var n = this._plugins, r = 0; r < n.length; r++) {
            var o = n[r];
            if (o.supports(t))
                return this._eventNameToPlugin.set(t, o), o;
        } throw new Error("No event manager plugin found for event " + t); }, t; }();
        it.decorators = [{ type: j.Injectable }], it.ctorParameters = function () { return [{ type: Array, decorators: [{ type: j.Inject, args: [ot] }] }, { type: j.NgZone }]; };
        var st = function () { function t(t) { this._doc = t; } return t.prototype.supports = function (t) { }, t.prototype.addEventListener = function (t, e, n) { }, t.prototype.addGlobalEventListener = function (t, e, n) { var o = r().getGlobalEventTarget(this._doc, t); if (!o)
            throw new Error("Unsupported event target " + o + " for event " + e); return this.addEventListener(o, e, n); }, t; }(), at = function () { function t() { this._stylesSet = new Set; } return t.prototype.addStyles = function (t) { var e = this, n = new Set; t.forEach(function (t) { e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t)); }), this.onStylesAdded(n); }, t.prototype.onStylesAdded = function (t) { }, t.prototype.getAllStyles = function () { return Array.from(this._stylesSet); }, t; }();
        at.decorators = [{ type: j.Injectable }], at.ctorParameters = function () { return []; };
        var ut = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n; } return N.a(e, t), e.prototype._addStylesToHost = function (t, e) { var n = this; t.forEach(function (t) { var r = n._doc.createElement("style"); r.textContent = t, n._styleNodes.add(e.appendChild(r)); }); }, e.prototype.addHost = function (t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t); }, e.prototype.removeHost = function (t) { this._hostNodes.delete(t); }, e.prototype.onStylesAdded = function (t) { var e = this; this._hostNodes.forEach(function (n) { return e._addStylesToHost(t, n); }); }, e.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (t) { return r().remove(t); }); }, e; }(at);
        ut.decorators = [{ type: j.Injectable }], ut.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var ct = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }, lt = /%COMP%/g, pt = "_nghost-%COMP%", ft = "_ngcontent-%COMP%", ht = function () { function t(t, e) { this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new dt(t); } return t.prototype.createRenderer = function (t, e) { if (!t || !e)
            return this.defaultRenderer; switch (e.encapsulation) {
            case j.ViewEncapsulation.Emulated:
                var n = this.rendererByCompId.get(e.id);
                return n || (n = new mt(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
            case j.ViewEncapsulation.Native: return new vt(this.eventManager, this.sharedStylesHost, t, e);
            default:
                if (!this.rendererByCompId.has(e.id)) {
                    var r = y(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
        } }, t.prototype.begin = function () { }, t.prototype.end = function () { }, t; }();
        ht.decorators = [{ type: j.Injectable }], ht.ctorParameters = function () { return [{ type: it }, { type: ut }]; };
        var dt = function () { function t(t) { this.eventManager = t, this.data = Object.create(null); } return t.prototype.destroy = function () { }, t.prototype.createElement = function (t, e) { return e ? document.createElementNS(ct[e], t) : document.createElement(t); }, t.prototype.createComment = function (t) { return document.createComment(t); }, t.prototype.createText = function (t) { return document.createTextNode(t); }, t.prototype.appendChild = function (t, e) { t.appendChild(e); }, t.prototype.insertBefore = function (t, e, n) { t && t.insertBefore(e, n); }, t.prototype.removeChild = function (t, e) { t && t.removeChild(e); }, t.prototype.selectRootElement = function (t) { var e = "string" == typeof t ? document.querySelector(t) : t; if (!e)
            throw new Error('The selector "' + t + '" did not match any elements'); return e.textContent = "", e; }, t.prototype.parentNode = function (t) { return t.parentNode; }, t.prototype.nextSibling = function (t) { return t.nextSibling; }, t.prototype.setAttribute = function (t, e, n, r) { if (r) {
            e = r + ":" + e;
            var o = ct[r];
            o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
        }
        else
            t.setAttribute(e, n); }, t.prototype.removeAttribute = function (t, e, n) { if (n) {
            var r = ct[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e);
        }
        else
            t.removeAttribute(e); }, t.prototype.addClass = function (t, e) { t.classList.add(e); }, t.prototype.removeClass = function (t, e) { t.classList.remove(e); }, t.prototype.setStyle = function (t, e, n, r) { r & j.RendererStyleFlags2.DashCase ? t.style.setProperty(e, n, r & j.RendererStyleFlags2.Important ? "important" : "") : t.style[e] = n; }, t.prototype.removeStyle = function (t, e, n) { n & j.RendererStyleFlags2.DashCase ? t.style.removeProperty(e) : t.style[e] = ""; }, t.prototype.setProperty = function (t, e, n) { v(e, "property"), t[e] = n; }, t.prototype.setValue = function (t, e) { t.nodeValue = e; }, t.prototype.listen = function (t, e, n) { return v(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, m(n)) : this.eventManager.addEventListener(t, e, m(n)); }, t; }(), yt = "@".charCodeAt(0), mt = function (t) { function e(e, n, r) { var o = t.call(this, e) || this; o.component = r; var i = y(r.id, r.styles, []); return n.addStyles(i), o.contentAttr = h(r.id), o.hostAttr = d(r.id), o; } return N.a(e, t), e.prototype.applyToHost = function (e) { t.prototype.setAttribute.call(this, e, this.hostAttr, ""); }, e.prototype.createElement = function (e, n) { var r = t.prototype.createElement.call(this, e, n); return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r; }, e; }(dt), vt = function (t) { function e(e, n, r, o) { var i = t.call(this, e) || this; i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot); for (var s = y(o.id, o.styles, []), a = 0; a < s.length; a++) {
            var u = document.createElement("style");
            u.textContent = s[a], i.shadowRoot.appendChild(u);
        } return i; } return N.a(e, t), e.prototype.nodeOrShadowRoot = function (t) { return t === this.hostEl ? this.shadowRoot : t; }, e.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); }, e.prototype.appendChild = function (e, n) { return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n); }, e.prototype.insertBefore = function (e, n, r) { return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r); }, e.prototype.removeChild = function (e, n) { return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n); }, e.prototype.parentNode = function (e) { return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))); }, e; }(dt), gt = function (t) { function e(e) { return t.call(this, e) || this; } return N.a(e, t), e.prototype.supports = function (t) { return !0; }, e.prototype.addEventListener = function (t, e, n) { return t.addEventListener(e, n, !1), function () { return t.removeEventListener(e, n, !1); }; }, e; }(st);
        gt.decorators = [{ type: j.Injectable }], gt.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var bt = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 }, _t = new j.InjectionToken("HammerGestureConfig"), wt = function () { function t() { this.events = [], this.overrides = {}; } return t.prototype.buildHammer = function (t) { var e = new Hammer(t); e.get("pinch").set({ enable: !0 }), e.get("rotate").set({ enable: !0 }); for (var n in this.overrides)
            e.get(n).set(this.overrides[n]); return e; }, t; }();
        wt.decorators = [{ type: j.Injectable }], wt.ctorParameters = function () { return []; };
        var Ct = function (t) { function e(e, n) { var r = t.call(this, e) || this; return r._config = n, r; } return N.a(e, t), e.prototype.supports = function (t) { if (!bt.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t))
            return !1; if (!window.Hammer)
            throw new Error("Hammer.js is not loaded, can not bind " + t + " event"); return !0; }, e.prototype.addEventListener = function (t, e, n) { var r = this, o = this.manager.getZone(); return e = e.toLowerCase(), o.runOutsideAngular(function () { var i = r._config.buildHammer(t), s = function (t) { o.runGuarded(function () { n(t); }); }; return i.on(e, s), function () { return i.off(e, s); }; }); }, e.prototype.isCustomEvent = function (t) { return this._config.events.indexOf(t) > -1; }, e; }(st);
        Ct.decorators = [{ type: j.Injectable }], Ct.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }, { type: wt, decorators: [{ type: j.Inject, args: [_t] }] }]; };
        var St = ["alt", "control", "meta", "shift"], Et = { alt: function (t) { return t.altKey; }, control: function (t) { return t.ctrlKey; }, meta: function (t) { return t.metaKey; }, shift: function (t) { return t.shiftKey; } }, Ot = function (t) { function e(e) { return t.call(this, e) || this; } return N.a(e, t), e.prototype.supports = function (t) { return null != e.parseEventName(t); }, e.prototype.addEventListener = function (t, n, o) { var i = e.parseEventName(n), s = e.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(function () { return r().onAndCancel(t, i.domEventName, s); }); }, e.parseEventName = function (t) { var n = t.toLowerCase().split("."), r = n.shift(); if (0 === n.length || "keydown" !== r && "keyup" !== r)
            return null; var o = e._normalizeKey(n.pop()), i = ""; if (St.forEach(function (t) { var e = n.indexOf(t); e > -1 && (n.splice(e, 1), i += t + "."); }), i += o, 0 != n.length || 0 === o.length)
            return null; var s = {}; return s.domEventName = r, s.fullKey = i, s; }, e.getEventFullKey = function (t) { var e = "", n = r().getEventKey(t); return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), St.forEach(function (r) { if (r != n) {
            (0, Et[r])(t) && (e += r + ".");
        } }), e += n; }, e.eventCallback = function (t, n, r) { return function (o) { e.getEventFullKey(o) === t && r.runGuarded(function () { return n(o); }); }; }, e._normalizeKey = function (t) { switch (t) {
            case "esc": return "escape";
            default: return t;
        } }, e; }(st);
        Ot.decorators = [{ type: j.Injectable }], Ot.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var Tt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi, Pt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i, xt = null, Rt = null, At = w("area,br,col,hr,img,wbr"), kt = w("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Nt = w("rp,rt"), It = C(Nt, kt), jt = C(kt, w("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Mt = C(Nt, w("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Dt = C(At, jt, Mt, It), Lt = w("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Ft = w("srcset"), Vt = w("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Ut = C(Lt, Ft, Vt), Ht = function () { function t() { this.sanitizedSomething = !1, this.buf = []; } return t.prototype.sanitizeChildren = function (t) { for (var e = t.firstChild; e;)
            if (Rt.isElementNode(e) ? this.startElement(e) : Rt.isTextNode(e) ? this.chars(Rt.nodeValue(e)) : this.sanitizedSomething = !0, Rt.firstChild(e))
                e = Rt.firstChild(e);
            else
                for (; e;) {
                    Rt.isElementNode(e) && this.endElement(e);
                    var n = S(e, Rt.nextSibling(e));
                    if (n) {
                        e = n;
                        break;
                    }
                    e = S(e, Rt.parentElement(e));
                } return this.buf.join(""); }, t.prototype.startElement = function (t) { var e = this, n = Rt.nodeName(t).toLowerCase(); if (!Dt.hasOwnProperty(n))
            return void (this.sanitizedSomething = !0); this.buf.push("<"), this.buf.push(n), Rt.attributeMap(t).forEach(function (t, n) { var r = n.toLowerCase(); if (!Ut.hasOwnProperty(r))
            return void (e.sanitizedSomething = !0); Lt[r] && (t = g(t)), Ft[r] && (t = b(t)), e.buf.push(" "), e.buf.push(n), e.buf.push('="'), e.buf.push(E(t)), e.buf.push('"'); }), this.buf.push(">"); }, t.prototype.endElement = function (t) { var e = Rt.nodeName(t).toLowerCase(); Dt.hasOwnProperty(e) && !At.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">")); }, t.prototype.chars = function (t) { this.buf.push(E(t)); }, t; }(), Bt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, qt = /([^\#-~ |!])/g, zt = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"), Kt = /^url\(([^)]+)\)$/, Qt = function () { function t() { } return t.prototype.sanitize = function (t, e) { }, t.prototype.bypassSecurityTrustHtml = function (t) { }, t.prototype.bypassSecurityTrustStyle = function (t) { }, t.prototype.bypassSecurityTrustScript = function (t) { }, t.prototype.bypassSecurityTrustUrl = function (t) { }, t.prototype.bypassSecurityTrustResourceUrl = function (t) { }, t; }(), Wt = function (t) { function e(e) { var n = t.call(this) || this; return n._doc = e, n; } return N.a(e, t), e.prototype.sanitize = function (t, e) { if (null == e)
            return null; switch (t) {
            case j.SecurityContext.NONE: return e;
            case j.SecurityContext.HTML: return e instanceof Zt ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), T(this._doc, String(e)));
            case j.SecurityContext.STYLE: return e instanceof Yt ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), x(e));
            case j.SecurityContext.SCRIPT:
                if (e instanceof Jt)
                    return e.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
            case j.SecurityContext.URL: return e instanceof $t || e instanceof Xt ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), g(String(e)));
            case j.SecurityContext.RESOURCE_URL:
                if (e instanceof $t)
                    return e.changingThisBreaksApplicationSecurity;
                throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
            default: throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)");
        } }, e.prototype.checkNotSafeValue = function (t, e) { if (t instanceof Gt)
            throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)"); }, e.prototype.bypassSecurityTrustHtml = function (t) { return new Zt(t); }, e.prototype.bypassSecurityTrustStyle = function (t) { return new Yt(t); }, e.prototype.bypassSecurityTrustScript = function (t) { return new Jt(t); }, e.prototype.bypassSecurityTrustUrl = function (t) { return new Xt(t); }, e.prototype.bypassSecurityTrustResourceUrl = function (t) { return new $t(t); }, e; }(Qt);
        Wt.decorators = [{ type: j.Injectable }], Wt.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [K] }] }]; };
        var Gt = function () { function t(t) { this.changingThisBreaksApplicationSecurity = t; } return t.prototype.getTypeName = function () { }, t.prototype.toString = function () { return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"; }, t; }(), Zt = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.getTypeName = function () { return "HTML"; }, e; }(Gt), Yt = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.getTypeName = function () { return "Style"; }, e; }(Gt), Jt = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.getTypeName = function () { return "Script"; }, e; }(Gt), Xt = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.getTypeName = function () { return "URL"; }, e; }(Gt), $t = function (t) { function e() { return null !== t && t.apply(this, arguments) || this; } return N.a(e, t), e.prototype.getTypeName = function () { return "ResourceURL"; }, e; }(Gt), te = [{ provide: j.PLATFORM_ID, useValue: I["ɵPLATFORM_BROWSER_ID"] }, { provide: j.PLATFORM_INITIALIZER, useValue: R, multi: !0 }, { provide: I.PlatformLocation, useClass: Q }, { provide: K, useFactory: k, deps: [] }], ee = [{ provide: j.Sanitizer, useExisting: Qt }, { provide: Qt, useClass: Wt }], ne = n.i(j.createPlatformFactory)(j.platformCore, "browser", te), re = function () { function t(t) { if (t)
            throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."); } return t.withServerTransition = function (e) { return { ngModule: t, providers: [{ provide: j.APP_ID, useValue: e.appId }, { provide: G, useExisting: j.APP_ID }, Z] }; }, t; }();
        re.decorators = [{ type: j.NgModule, args: [{ providers: [ee, { provide: j.ErrorHandler, useFactory: A, deps: [] }, { provide: ot, useClass: gt, multi: !0 }, { provide: ot, useClass: Ot, multi: !0 }, { provide: ot, useClass: Ct, multi: !0 }, { provide: _t, useClass: wt }, ht, { provide: j.RendererFactory2, useExisting: ht }, { provide: at, useExisting: ut }, ut, j.Testability, it, rt, W, J], exports: [I.CommonModule, j.ApplicationModule] }] }], re.ctorParameters = function () { return [{ type: re, decorators: [{ type: j.Optional }, { type: j.SkipSelf }] }]; };
        var oe = "undefined" != typeof window && window || {}, ie = function () { function t(t, e) { this.msPerTick = t, this.numTicks = e; } return t; }();
        (function () { function t(t) { this.appRef = t.injector.get(j.ApplicationRef); } t.prototype.timeChangeDetection = function (t) { var e = t && t.record, n = null != oe.console.profile; e && n && oe.console.profile("Change Detection"); for (var o = r().performanceNow(), i = 0; i < 5 || r().performanceNow() - o < 500;)
            this.appRef.tick(), i++; var s = r().performanceNow(); e && n && oe.console.profileEnd("Change Detection"); var a = (s - o) / i; return oe.console.log("ran " + i + " change detection cycles"), oe.console.log(a.toFixed(2) + " ms per check"), new ie(a, i); }; })(), function () { function t() { } t.all = function () { return function (t) { return !0; }; }, t.css = function (t) { return function (e) { return null != e.nativeElement && r().elementMatches(e.nativeElement, t); }; }, t.directive = function (t) { return function (e) { return -1 !== e.providerTokens.indexOf(t); }; }; }(), new j.Version("4.3.6");
    }, fclq: function (t, e, n) {
        "use strict";
        function r(t) { return "function" == typeof t; }
        e.isFunction = r;
    }, fcnB: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("bKpL"), i = function (t) { function e(e) { t.call(this), this.scheduler = e; } return r(e, t), e.create = function (t) { return new e(t); }, e.dispatch = function (t) { t.subscriber.complete(); }, e.prototype._subscribe = function (t) { var n = this.scheduler; if (n)
            return n.schedule(e.dispatch, 0, { subscriber: t }); t.complete(); }, e; }(o.Observable);
        e.EmptyObservable = i;
    }, g0Kb: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("xFbG"), i = function (t) { function e(e, n) { t.call(this), this.subject = e, this.subscriber = n, this.closed = !1; } return r(e, t), e.prototype.unsubscribe = function () { if (!this.closed) {
            this.closed = !0;
            var t = this.subject, e = t.observers;
            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                var n = e.indexOf(this.subscriber);
                -1 !== n && e.splice(n, 1);
            }
        } }, e; }(o.Subscription);
        e.SubjectSubscription = i;
    }, gonN: function (t, e, n) {
        "use strict";
        function r(t, e) { var n; if (n = "function" == typeof t ? t : function () { return t; }, "function" == typeof e)
            return this.lift(new i(n, e)); var r = Object.create(this, o.connectableObservableDescriptor); return r.source = this, r.subjectFactory = n, r; }
        var o = n("xKl2");
        e.multicast = r;
        var i = function () { function t(t, e) { this.subjectFactory = t, this.selector = e; } return t.prototype.call = function (t, e) { var n = this.selector, r = this.subjectFactory(), o = n(r).subscribe(t); return o.add(e.subscribe(r)), o; }, t; }();
        e.MulticastOperator = i;
    }, gvep: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("rlar"), i = n("Lhvy"), s = function (t) { function e(e) { t.call(this), this._value = e; } return r(e, t), Object.defineProperty(e.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !0, configurable: !0 }), e.prototype._subscribe = function (e) { var n = t.prototype._subscribe.call(this, e); return n && !n.closed && e.next(this._value), n; }, e.prototype.getValue = function () { if (this.hasError)
            throw this.thrownError; if (this.closed)
            throw new i.ObjectUnsubscribedError; return this._value; }, e.prototype.next = function (e) { t.prototype.next.call(this, this._value = e); }, e; }(o.Subject);
        e.BehaviorSubject = s;
    }, gzB2: function (t, e, n) {
        "use strict";
        var r = this && this.__decorate || function (t, e, n, r) { var o, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, n, r);
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s); return i > 3 && s && Object.defineProperty(e, n, s), s; }, o = this && this.__metadata || function (t, e) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(t, e); };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n("/oeL"), s = n("Mc8S"), a = function () { function t(t, e, n) { this.state = t, this.element = e, this.renderer = n, this.preventClose = !1; } return Object.defineProperty(t.prototype, "isSelected", { get: function () { return this === this.state.dropdownState.selectedItem; }, enumerable: !0, configurable: !0 }), t.prototype.select = function (t) { this.state.dropdownState.select(this, !0), t && (t.stopPropagation(), t.preventDefault()); }, t.prototype.click = function () { this.state.dropdownState.onItemClicked.emit(this); }, t.prototype.focus = function () { this.renderer.invokeElementMethod(this.element.nativeElement.children[0], "focus"); }, t; }();
        r([i.Input(), o("design:type", Object)], a.prototype, "preventClose", void 0), r([i.Input(), o("design:type", Object)], a.prototype, "value", void 0), a = r([i.Component({ selector: "ng4-menu-item", styleUrls: ["./style.scss"], templateUrl: "./template.html" }), o("design:paramtypes", [s.DropdownStateService, i.ElementRef, i.Renderer])], a), e.Ng4MenuItem = a;
    }, isfW: function (t, e, n) {
        "use strict";
        function r(t) { return a["ɵvid"](0, [(t()(), a["ɵeld"](0, null, null, 10, "span", [["class", "ng4-dropdown-button__caret"]], null, null, null, null, null)), (t()(), a["ɵted"](null, ["\n        "])), (t()(), a["ɵeld"](0, null, null, 7, ":svg:svg", [[":xml:space", "preserve"], [":xmlns:xlink", "http://www.w3.org/1999/xlink"], ["enable-background", "new 0 0 32 32"], ["height", "16px"], ["id", "Слой_1"], ["version", "1.1"], ["viewBox", "0 0 32 32"], ["width", "16px"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:path", [["d", "M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z"], ["fill", "#121313"], ["id", "Expand_More"]], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵeld"](0, null, null, 0, ":svg:g", [], null, null, null, null, null)), (t()(), a["ɵted"](null, ["\n    "]))], null, null); }
        function o(t) { return a["ɵvid"](0, [(t()(), a["ɵeld"](0, null, null, 9, "button", [["class", "ng4-dropdown-button"], ["tabindex", "0s"], ["type", "button"]], null, [[null, "click"]], function (t, e, n) { var r = !0, o = t.component; if ("click" === e) {
                r = !1 !== o.toggleMenu() && r;
            } return r; }, null, null)), (t()(), a["ɵted"](null, ["\n    "])), (t()(), a["ɵeld"](0, null, null, 3, "span", [["class", "ng4-dropdown-button__label"]], null, null, null, null, null)), (t()(), a["ɵted"](null, ["\n        "])), a["ɵncd"](null, 0), (t()(), a["ɵted"](null, ["\n    "])), (t()(), a["ɵted"](null, ["\n\n    "])), (t()(), a["ɵand"](16777216, null, null, 1, null, r)), a["ɵdid"](16384, null, 0, c.NgIf, [a.ViewContainerRef, a.TemplateRef], { ngIf: [0, "ngIf"] }, null), (t()(), a["ɵted"](null, ["\n"])), (t()(), a["ɵted"](null, ["\n"]))], function (t, e) { t(e, 8, 0, e.component.showCaret); }, null); }
        function i(t) { return a["ɵvid"](0, [(t()(), a["ɵeld"](0, null, null, 1, "ng4-dropdown-button", [], null, null, null, o, p)), a["ɵdid"](49152, null, 0, u.Ng4DropdownButton, [a.ElementRef], null, null)], null, null); }
        var s = n("/QLu"), a = n("/oeL"), u = n("0NUP"), c = (n.n(u), n("qbdv"));
        n.d(e, "b", function () { return p; }), e.a = o;
        var l = [s.a], p = a["ɵcrt"]({ encapsulation: 0, styles: l, data: {} });
        a["ɵccf"]("ng4-dropdown-button", u.Ng4DropdownButton, i, { showCaret: "showCaret" }, { onMenuToggled: "onMenuToggled" }, ["*"]);
    }, jqBg: function (t, e, n) {
        "use strict";
        function r(t) { return a["ɵvid"](0, [(t()(), a["ɵeld"](0, null, null, 0, "div", [["class", "ng4-dropdown-backdrop"]], null, [[null, "click"]], function (t, e, n) { var r = !0, o = t.component; if ("click" === e) {
                r = !1 !== o.hide() && r;
            } return r; }, null, null))], null, null); }
        function o(t) { return a["ɵvid"](0, [(t()(), a["ɵted"](null, ["\n"])), (t()(), a["ɵeld"](0, null, null, 6, "div", [], [[8, "className", 0], [2, "ng4-dropdown-menu--inside-element", null], [2, "ng4-dropdown-menu--open", null], [24, "@fade", 0]], null, null, null, null)), (t()(), a["ɵted"](null, ["\n        "])), (t()(), a["ɵeld"](0, null, null, 3, "div", [["class", "ng4-dropdown-menu__options-container"]], [[24, "@opacity", 0]], null, null, null, null)), (t()(), a["ɵted"](null, ["\n            "])), a["ɵncd"](null, 0), (t()(), a["ɵted"](null, ["\n        "])), (t()(), a["ɵted"](null, ["\n"])), (t()(), a["ɵted"](null, ["\n\n"])), (t()(), a["ɵted"](null, ["\n"])), (t()(), a["ɵand"](16777216, null, null, 1, null, r)), a["ɵdid"](16384, null, 0, u.NgIf, [a.ViewContainerRef, a.TemplateRef], { ngIf: [0, "ngIf"] }, null), (t()(), a["ɵted"](null, ["\n"]))], function (t, e) { t(e, 11, 0, e.component.state.menuState.isVisible); }, function (t, e) { var n = e.component; t(e, 1, 0, a["ɵinlineInterpolate"](1, "ng4-dropdown-menu ng4-dropdown-menu---width--", n.width, ""), !n.appendToBody, n.state.menuState.isVisible, n.state.menuState.toString()), t(e, 3, 0, n.state.menuState.toString()); }); }
        function i(t) { return a["ɵvid"](0, [(t()(), a["ɵeld"](0, null, null, 2, "ng4-dropdown-menu", [], null, null, null, o, f)), a["ɵdid"](507904, null, 1, c.Ng4DropdownMenu, [l.DropdownStateService, a.ElementRef, a.Renderer], null, null), a["ɵqud"](603979776, 1, { items: 1 })], function (t, e) { t(e, 1, 0); }, null); }
        var s = n("YdN0"), a = n("/oeL"), u = n("qbdv"), c = n("EBgA"), l = (n.n(c), n("Mc8S"));
        n.n(l);
        n.d(e, "b", function () { return f; }), e.a = o;
        var p = [s.a], f = a["ɵcrt"]({ encapsulation: 0, styles: p, data: { animation: [{ type: 7, name: "fade", definitions: [{ type: 0, name: "visible", styles: { type: 6, styles: { display: "block", overflow: "*" }, offset: null }, options: void 0 }, { type: 0, name: "hidden", styles: { type: 6, styles: { display: "none", overflow: "hidden", width: "0" }, offset: null }, options: void 0 }, { type: 1, expr: "hidden => visible", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, offset: 0, height: "0", width: "0" }, offset: null }, { type: 6, styles: { opacity: 1, offset: 1, height: "*", width: "*" }, offset: null }] }, timings: 150 }], options: null }, { type: 1, expr: "visible => hidden", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, offset: 0, height: "*", width: "*" }, offset: null }, { type: 6, styles: { opacity: 0, offset: 1, height: "0", width: "0" }, offset: null }] }, timings: 250 }], options: null }], options: {} }, { type: 7, name: "opacity", definitions: [{ type: 1, expr: "hidden => visible", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, offset: 1 }, offset: null }] }, timings: 450 }], options: null }, { type: 1, expr: "visible => hidden", animation: [{ type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, offset: 0 }, offset: null }, { type: 6, styles: { opacity: .5, offset: .3 }, offset: null }, { type: 6, styles: { opacity: 0, offset: 1 }, offset: null }] }, timings: 200 }], options: null }], options: {} }] } });
        a["ɵccf"]("ng4-dropdown-menu", c.Ng4DropdownMenu, i, { width: "width", focusFirstElement: "focusFirstElement", offset: "offset", appendToBody: "appendToBody" }, {}, ["*"]);
    }, kWk1: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("T14+"), i = function (t) { function e(e, n, r) { t.call(this), this.parent = e, this.outerValue = n, this.outerIndex = r, this.index = 0; } return r(e, t), e.prototype._next = function (t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this); }, e.prototype._error = function (t) { this.parent.notifyError(t, this), this.unsubscribe(); }, e.prototype._complete = function () { this.parent.notifyComplete(this), this.unsubscribe(); }, e; }(o.Subscriber);
        e.InnerSubscriber = i;
    }, ktfo: function (t, e, n) {
        "use strict";
        function r(t, e, n, r) { var f = new l.InnerSubscriber(t, n, r); if (f.closed)
            return null; if (e instanceof u.Observable)
            return e._isScalar ? (f.next(e.value), f.complete(), null) : e.subscribe(f); if (i.isArrayLike(e)) {
            for (var h = 0, d = e.length; h < d && !f.closed; h++)
                f.next(e[h]);
            f.closed || f.complete();
        }
        else {
            if (s.isPromise(e))
                return e.then(function (t) { f.closed || (f.next(t), f.complete()); }, function (t) { return f.error(t); }).then(null, function (t) { o.root.setTimeout(function () { throw t; }); }), f;
            if (e && "function" == typeof e[c.iterator])
                for (var y = e[c.iterator]();;) {
                    var m = y.next();
                    if (m.done) {
                        f.complete();
                        break;
                    }
                    if (f.next(m.value), f.closed)
                        break;
                }
            else if (e && "function" == typeof e[p.observable]) {
                var v = e[p.observable]();
                if ("function" == typeof v.subscribe)
                    return v.subscribe(new l.InnerSubscriber(t, n, r));
                f.error(new TypeError("Provided object does not correctly implement Symbol.observable"));
            }
            else {
                var g = a.isObject(e) ? "an invalid object" : "'" + e + "'", b = "You provided " + g + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                f.error(new TypeError(b));
            }
        } return null; }
        var o = n("zijX"), i = n("lhZu"), s = n("mUVF"), a = n("H6Sg"), u = n("bKpL"), c = n("2B7B"), l = n("kWk1"), p = n("DP67");
        e.subscribeToResult = r;
    }, lKg8: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n("/oeL"), o = function () { function t() { this.onItemSelected = new r.EventEmitter, this.onItemClicked = new r.EventEmitter; } return Object.defineProperty(t.prototype, "selectedItem", { get: function () { return this._selectedItem; }, enumerable: !0, configurable: !0 }), t.prototype.select = function (t, e) { void 0 === e && (e = !0), this._selectedItem = t, e && (t.focus(), this.onItemSelected.emit(t)); }, t.prototype.unselect = function () { this._selectedItem = void 0; }, t; }();
        e.Ng4DropdownState = o;
    }, lhZu: function (t, e, n) {
        "use strict";
        e.isArrayLike = function (t) { return t && "number" == typeof t.length; };
    }, lmv5: function (t, e, n) {
        "use strict";
        function r(t) { return i["ɵvid"](0, [(t()(), i["ɵeld"](0, null, null, 5, "div", [["class", "ng4-dropdown-container"]], null, null, null, null, null)), (t()(), i["ɵted"](null, ["\n    "])), i["ɵncd"](null, 0), (t()(), i["ɵted"](null, ["\n    "])), i["ɵncd"](null, 1), (t()(), i["ɵted"](null, ["\n"])), (t()(), i["ɵted"](null, ["\n"]))], null, null); }
        function o(t) { return i["ɵvid"](0, [(t()(), i["ɵeld"](0, null, null, 4, "ng4-dropdown", [], null, [["window", "scroll"]], function (t, e, n) { var r = !0; if ("window:scroll" === e) {
                r = !1 !== i["ɵnov"](t, 2).scrollListener() && r;
            } return r; }, r, c)), i["ɵprd"](512, null, s.DropdownStateService, s.DropdownStateService, []), i["ɵdid"](114688, null, 2, a.Ng4Dropdown, [s.DropdownStateService], null, null), i["ɵqud"](335544320, 1, { button: 0 }), i["ɵqud"](335544320, 2, { menu: 0 })], function (t, e) { t(e, 2, 0); }, null); }
        var i = n("/oeL"), s = n("Mc8S"), a = (n.n(s), n("CZc+"));
        n.n(a);
        n.d(e, "b", function () { return c; }), e.a = r;
        var u = [], c = i["ɵcrt"]({ encapsulation: 2, styles: u, data: {} });
        i["ɵccf"]("ng4-dropdown", a.Ng4Dropdown, o, { dynamicUpdate: "dynamicUpdate" }, { onItemClicked: "onItemClicked", onItemSelected: "onItemSelected", onShow: "onShow", onHide: "onHide" }, ["ng4-dropdown-button", "ng4-dropdown-menu"]);
    }, "lx+J": function (t, e, n) {
        "use strict";
        function r(t, e) { if ("function" != typeof t)
            throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return this.lift(new s(t, e)); }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("T14+");
        e.map = r;
        var s = function () { function t(t, e) { this.project = t, this.thisArg = e; } return t.prototype.call = function (t, e) { return e.subscribe(new a(t, this.project, this.thisArg)); }, t; }();
        e.MapOperator = s;
        var a = function (t) { function e(e, n, r) { t.call(this, e), this.project = n, this.count = 0, this.thisArg = r || this; } return o(e, t), e.prototype._next = function (t) { var e; try {
            e = this.project.call(this.thisArg, t, this.count++);
        }
        catch (t) {
            return void this.destination.error(t);
        } this.destination.next(e); }, e; }(i.Subscriber);
    }, mPAg: function (t, e, n) {
        "use strict";
        function r(t) { [38, 40].indexOf(t.keyCode) > -1 && t.preventDefault(); }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = { BACKSPACE: 9, PREV: 38, NEXT: 40, ENTER: 13 }, i = function (t, e, n) { t < e.length - 1 && n.select(e[t + 1], !0); }, s = function (t, e, n) { t > 0 && n.select(e[t - 1], !0); }, a = function (t, e, n) { t < e.length - 1 ? n.select(e[t + 1], !0) : n.select(e[0], !0); }, u = function (t, e, n) { return n.selectedItem ? n.selectedItem.click() : void 0; };
        e.ACTIONS = (c = {}, c[o.BACKSPACE] = a, c[o.PREV] = s, c[o.NEXT] = i, c[o.ENTER] = u, c), e.arrowKeysHandler = r;
        var c;
    }, mUVF: function (t, e, n) {
        "use strict";
        function r(t) { return t && "function" != typeof t.subscribe && "function" == typeof t.then; }
        e.isPromise = r;
    }, mihg: function (t, e, n) {
        "use strict";
        function r(t) { var e = t.value, n = t.subscriber; n.closed || (n.next(e), n.complete()); }
        function o(t) { var e = t.err, n = t.subscriber; n.closed || n.error(e); }
        var i = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, s = n("zijX"), a = n("bKpL"), u = function (t) { function e(e, n) { t.call(this), this.promise = e, this.scheduler = n; } return i(e, t), e.create = function (t, n) { return new e(t, n); }, e.prototype._subscribe = function (t) { var e = this, n = this.promise, i = this.scheduler; if (null == i)
            this._isScalar ? t.closed || (t.next(this.value), t.complete()) : n.then(function (n) { e.value = n, e._isScalar = !0, t.closed || (t.next(n), t.complete()); }, function (e) { t.closed || t.error(e); }).then(null, function (t) { s.root.setTimeout(function () { throw t; }); });
        else if (this._isScalar) {
            if (!t.closed)
                return i.schedule(r, 0, { value: this.value, subscriber: t });
        }
        else
            n.then(function (n) { e.value = n, e._isScalar = !0, t.closed || t.add(i.schedule(r, 0, { value: n, subscriber: t })); }, function (e) { t.closed || t.add(i.schedule(o, 0, { err: e, subscriber: t })); }).then(null, function (t) { s.root.setTimeout(function () { throw t; }); }); }, e; }(a.Observable);
        e.PromiseObservable = u;
    }, qbdv: function (t, e, n) {
        "use strict";
        function r(t, e) { return t && e.startsWith(t) ? e.substring(t.length) : e; }
        function o(t) { return t.replace(/\/index.html$/, ""); }
        function i(t, e, n) { var r = "=" + t; if (e.indexOf(r) > -1)
            return r; if (r = n.getPluralCategory(t), e.indexOf(r) > -1)
            return r; if (e.indexOf("other") > -1)
            return "other"; throw new Error('No plural message found for value "' + t + '"'); }
        function s(t, e) { "string" == typeof e && (e = parseInt(e, 10)); var n = e, r = n.toString().replace(/^[^.]*\.?/, ""), o = Math.floor(Math.abs(n)), i = r.length, s = parseInt(r, 10), a = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ""), 10) || 0; switch (t.split("-")[0].toLowerCase()) {
            case "af":
            case "asa":
            case "az":
            case "bem":
            case "bez":
            case "bg":
            case "brx":
            case "ce":
            case "cgg":
            case "chr":
            case "ckb":
            case "ee":
            case "el":
            case "eo":
            case "es":
            case "eu":
            case "fo":
            case "fur":
            case "gsw":
            case "ha":
            case "haw":
            case "hu":
            case "jgo":
            case "jmc":
            case "ka":
            case "kk":
            case "kkj":
            case "kl":
            case "ks":
            case "ksb":
            case "ky":
            case "lb":
            case "lg":
            case "mas":
            case "mgo":
            case "ml":
            case "mn":
            case "nb":
            case "nd":
            case "ne":
            case "nn":
            case "nnh":
            case "nyn":
            case "om":
            case "or":
            case "os":
            case "ps":
            case "rm":
            case "rof":
            case "rwk":
            case "saq":
            case "seh":
            case "sn":
            case "so":
            case "sq":
            case "ta":
            case "te":
            case "teo":
            case "tk":
            case "tr":
            case "ug":
            case "uz":
            case "vo":
            case "vun":
            case "wae":
            case "xog": return 1 === n ? z.One : z.Other;
            case "ak":
            case "ln":
            case "mg":
            case "pa":
            case "ti": return n === Math.floor(n) && n >= 0 && n <= 1 ? z.One : z.Other;
            case "am":
            case "as":
            case "bn":
            case "fa":
            case "gu":
            case "hi":
            case "kn":
            case "mr":
            case "zu": return 0 === o || 1 === n ? z.One : z.Other;
            case "ar": return 0 === n ? z.Zero : 1 === n ? z.One : 2 === n ? z.Two : n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10 ? z.Few : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99 ? z.Many : z.Other;
            case "ast":
            case "ca":
            case "de":
            case "en":
            case "et":
            case "fi":
            case "fy":
            case "gl":
            case "it":
            case "nl":
            case "sv":
            case "sw":
            case "ur":
            case "yi": return 1 === o && 0 === i ? z.One : z.Other;
            case "be": return n % 10 == 1 && n % 100 != 11 ? z.One : n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? z.Few : n % 10 == 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14 ? z.Many : z.Other;
            case "br": return n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91 ? z.One : n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92 ? z.Two : n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 == 9) && !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 || n % 100 >= 90 && n % 100 <= 99) ? z.Few : 0 !== n && n % 1e6 == 0 ? z.Many : z.Other;
            case "bs":
            case "hr":
            case "sr": return 0 === i && o % 10 == 1 && o % 100 != 11 || s % 10 == 1 && s % 100 != 11 ? z.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) || s % 10 === Math.floor(s % 10) && s % 10 >= 2 && s % 10 <= 4 && !(s % 100 >= 12 && s % 100 <= 14) ? z.Few : z.Other;
            case "cs":
            case "sk": return 1 === o && 0 === i ? z.One : o === Math.floor(o) && o >= 2 && o <= 4 && 0 === i ? z.Few : 0 !== i ? z.Many : z.Other;
            case "cy": return 0 === n ? z.Zero : 1 === n ? z.One : 2 === n ? z.Two : 3 === n ? z.Few : 6 === n ? z.Many : z.Other;
            case "da": return 1 === n || 0 !== a && (0 === o || 1 === o) ? z.One : z.Other;
            case "dsb":
            case "hsb": return 0 === i && o % 100 == 1 || s % 100 == 1 ? z.One : 0 === i && o % 100 == 2 || s % 100 == 2 ? z.Two : 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 3 && o % 100 <= 4 || s % 100 === Math.floor(s % 100) && s % 100 >= 3 && s % 100 <= 4 ? z.Few : z.Other;
            case "ff":
            case "fr":
            case "hy":
            case "kab": return 0 === o || 1 === o ? z.One : z.Other;
            case "fil": return 0 === i && (1 === o || 2 === o || 3 === o) || 0 === i && o % 10 != 4 && o % 10 != 6 && o % 10 != 9 || 0 !== i && s % 10 != 4 && s % 10 != 6 && s % 10 != 9 ? z.One : z.Other;
            case "ga": return 1 === n ? z.One : 2 === n ? z.Two : n === Math.floor(n) && n >= 3 && n <= 6 ? z.Few : n === Math.floor(n) && n >= 7 && n <= 10 ? z.Many : z.Other;
            case "gd": return 1 === n || 11 === n ? z.One : 2 === n || 12 === n ? z.Two : n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19) ? z.Few : z.Other;
            case "gv": return 0 === i && o % 10 == 1 ? z.One : 0 === i && o % 10 == 2 ? z.Two : 0 !== i || o % 100 != 0 && o % 100 != 20 && o % 100 != 40 && o % 100 != 60 && o % 100 != 80 ? 0 !== i ? z.Many : z.Other : z.Few;
            case "he": return 1 === o && 0 === i ? z.One : 2 === o && 0 === i ? z.Two : 0 !== i || n >= 0 && n <= 10 || n % 10 != 0 ? z.Other : z.Many;
            case "is": return 0 === a && o % 10 == 1 && o % 100 != 11 || 0 !== a ? z.One : z.Other;
            case "ksh": return 0 === n ? z.Zero : 1 === n ? z.One : z.Other;
            case "kw":
            case "naq":
            case "se":
            case "smn": return 1 === n ? z.One : 2 === n ? z.Two : z.Other;
            case "lag": return 0 === n ? z.Zero : 0 !== o && 1 !== o || 0 === n ? z.Other : z.One;
            case "lt": return n % 10 != 1 || n % 100 >= 11 && n % 100 <= 19 ? n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19) ? z.Few : 0 !== s ? z.Many : z.Other : z.One;
            case "lv":
            case "prg": return n % 10 == 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 || 2 === i && s % 100 === Math.floor(s % 100) && s % 100 >= 11 && s % 100 <= 19 ? z.Zero : n % 10 == 1 && n % 100 != 11 || 2 === i && s % 10 == 1 && s % 100 != 11 || 2 !== i && s % 10 == 1 ? z.One : z.Other;
            case "mk": return 0 === i && o % 10 == 1 || s % 10 == 1 ? z.One : z.Other;
            case "mt": return 1 === n ? z.One : 0 === n || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10 ? z.Few : n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ? z.Many : z.Other;
            case "pl": return 1 === o && 0 === i ? z.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) ? z.Few : 0 === i && 1 !== o && o % 10 === Math.floor(o % 10) && o % 10 >= 0 && o % 10 <= 1 || 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 5 && o % 10 <= 9 || 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 12 && o % 100 <= 14 ? z.Many : z.Other;
            case "pt": return n === Math.floor(n) && n >= 0 && n <= 2 && 2 !== n ? z.One : z.Other;
            case "ro": return 1 === o && 0 === i ? z.One : 0 !== i || 0 === n || 1 !== n && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19 ? z.Few : z.Other;
            case "ru":
            case "uk": return 0 === i && o % 10 == 1 && o % 100 != 11 ? z.One : 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 2 && o % 10 <= 4 && !(o % 100 >= 12 && o % 100 <= 14) ? z.Few : 0 === i && o % 10 == 0 || 0 === i && o % 10 === Math.floor(o % 10) && o % 10 >= 5 && o % 10 <= 9 || 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 11 && o % 100 <= 14 ? z.Many : z.Other;
            case "shi": return 0 === o || 1 === n ? z.One : n === Math.floor(n) && n >= 2 && n <= 10 ? z.Few : z.Other;
            case "si": return 0 === n || 1 === n || 0 === o && 1 === s ? z.One : z.Other;
            case "sl": return 0 === i && o % 100 == 1 ? z.One : 0 === i && o % 100 == 2 ? z.Two : 0 === i && o % 100 === Math.floor(o % 100) && o % 100 >= 3 && o % 100 <= 4 || 0 !== i ? z.Few : z.Other;
            case "tzm": return n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99 ? z.One : z.Other;
            default: return z.Other;
        } }
        function a(t, e) { e = encodeURIComponent(e); for (var n = 0, r = t.split(";"); n < r.length; n++) {
            var o = r[n], i = o.indexOf("="), s = -1 == i ? [o, ""] : [o.slice(0, i), o.slice(i + 1)], a = s[0], u = s[1];
            if (a.trim() === e)
                return decodeURIComponent(u);
        } return null; }
        function u(t) { return t.name || typeof t; }
        function c(t, e) { return Error("InvalidPipeArgument: '" + e + "' for pipe '" + n.i(j["ɵstringify"])(t) + "'"); }
        function l(t) { return t ? t[0].toUpperCase() + t.substr(1).toLowerCase() : t; }
        function p(t) { return function (e, n) { var r = t(e, n); return 1 == r.length ? "0" + r : r; }; }
        function f(t) { return function (e, n) { return t(e, n).split(" ")[0]; }; }
        function h(t, e, n) { return new Intl.DateTimeFormat(e, n).format(t).replace(/[\u200e\u200f]/g, ""); }
        function d(t) { var e = { hour: "2-digit", hour12: !1, timeZoneName: t }; return function (t, n) { var r = h(t, n, e); return r ? r.substring(3) : ""; }; }
        function y(t, e) { return t.hour12 = e, t; }
        function m(t, e) { var n = {}; return n[t] = 2 === e ? "2-digit" : "numeric", n; }
        function v(t, e) { var n = {}; return n[t] = e < 4 ? e > 1 ? "short" : "narrow" : "long", n; }
        function g(t) { return t.reduce(function (t, e) { return Object.assign({}, t, e); }, {}); }
        function b(t) { return function (e, n) { return h(e, n, t); }; }
        function _(t, e, n) { var r = bt[t]; if (r)
            return r(e, n); var o = t, i = wt.get(o); if (!i) {
            i = [];
            var s = void 0;
            gt.exec(t);
            for (var a = t; a;)
                s = gt.exec(a), s ? (i = i.concat(s.slice(1)), a = i.pop()) : (i.push(a), a = null);
            wt.set(o, i);
        } return i.reduce(function (t, r) { var o = _t[r]; return t + (o ? o(e, n) : w(r)); }, ""); }
        function w(t) { return "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'"); }
        function C(t, e, n, r, o, i, s) { if (void 0 === i && (i = null), void 0 === s && (s = !1), null == n)
            return null; if ("number" != typeof (n = "string" == typeof n && E(n) ? +n : n))
            throw c(t, n); var a = void 0, u = void 0, l = void 0; if (r !== mt.Currency && (a = 1, u = 0, l = 3), o) {
            var p = o.match(St);
            if (null === p)
                throw new Error(o + " is not a valid digit info for number pipes");
            null != p[1] && (a = S(p[1])), null != p[3] && (u = S(p[3])), null != p[5] && (l = S(p[5]));
        } return vt.format(n, e, r, { minimumIntegerDigits: a, minimumFractionDigits: u, maximumFractionDigits: l, currency: i, currencyAsSymbol: s }); }
        function S(t) { var e = parseInt(t); if (isNaN(e))
            throw new Error("Invalid integer literal when parsing " + t); return e; }
        function E(t) { return !isNaN(t - parseFloat(t)); }
        function O(t) { return null == t || "" === t; }
        function T(t) { return t instanceof Date && !isNaN(t.valueOf()); }
        function P(t) { var e = new Date(0), n = 0, r = 0, o = t[8] ? e.setUTCFullYear : e.setFullYear, i = t[8] ? e.setUTCHours : e.setHours; t[9] && (n = x(t[9] + t[10]), r = x(t[9] + t[11])), o.call(e, x(t[1]), x(t[2]) - 1, x(t[3])); var s = x(t[4] || "0") - n, a = x(t[5] || "0") - r, u = x(t[6] || "0"), c = Math.round(1e3 * parseFloat("0." + (t[7] || 0))); return i.call(e, s, a, u, c), e; }
        function x(t) { return parseInt(t, 10); }
        function R(t) { return t === Ft; }
        function A(t) { return t === Vt; }
        function k(t) { return t === Ut; }
        function N(t) { return t === Ht; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var I = n("6Xbx"), j = n("/oeL");
        n.d(e, "NgLocaleLocalization", function () { return q; }), n.d(e, "NgLocalization", function () { return B; }), n.d(e, "ɵparseCookieValue", function () { return a; }), n.d(e, "CommonModule", function () { return Mt; }), n.d(e, "DeprecatedI18NPipesModule", function () { return Dt; }), n.d(e, "NgClass", function () { return K; }), n.d(e, "NgFor", function () { return Y; }), n.d(e, "NgForOf", function () { return G; }), n.d(e, "NgForOfContext", function () { return W; }), n.d(e, "NgIf", function () { return J; }), n.d(e, "NgIfContext", function () { return X; }), n.d(e, "NgPlural", function () { return rt; }), n.d(e, "NgPluralCase", function () { return ot; }), n.d(e, "NgStyle", function () { return it; }), n.d(e, "NgSwitch", function () { return tt; }), n.d(e, "NgSwitchCase", function () { return et; }), n.d(e, "NgSwitchDefault", function () { return nt; }), n.d(e, "NgTemplateOutlet", function () { return st; }), n.d(e, "NgComponentOutlet", function () { return Q; }), n.d(e, "DOCUMENT", function () { return Lt; }), n.d(e, "AsyncPipe", function () { return ft; }), n.d(e, "DatePipe", function () { return xt; }), n.d(e, "I18nPluralPipe", function () { return At; }), n.d(e, "I18nSelectPipe", function () { return kt; }), n.d(e, "JsonPipe", function () { return Nt; }), n.d(e, "LowerCasePipe", function () { return ht; }), n.d(e, "CurrencyPipe", function () { return Tt; }), n.d(e, "DecimalPipe", function () { return Et; }), n.d(e, "PercentPipe", function () { return Ot; }), n.d(e, "SlicePipe", function () { return It; }), n.d(e, "UpperCasePipe", function () { return yt; }), n.d(e, "TitleCasePipe", function () { return dt; }), n.d(e, "ɵPLATFORM_BROWSER_ID", function () { return Ft; }), n.d(e, "ɵPLATFORM_SERVER_ID", function () { return Vt; }), n.d(e, "ɵPLATFORM_WORKER_APP_ID", function () { return Ut; }), n.d(e, "ɵPLATFORM_WORKER_UI_ID", function () { return Ht; }), n.d(e, "isPlatformBrowser", function () { return R; }), n.d(e, "isPlatformServer", function () { return A; }), n.d(e, "isPlatformWorkerApp", function () { return k; }), n.d(e, "isPlatformWorkerUi", function () { return N; }), n.d(e, "VERSION", function () { return Bt; }), n.d(e, "PlatformLocation", function () { return M; }), n.d(e, "LOCATION_INITIALIZED", function () { return D; }), n.d(e, "LocationStrategy", function () { return L; }), n.d(e, "APP_BASE_HREF", function () { return F; }), n.d(e, "HashLocationStrategy", function () { return U; }), n.d(e, "PathLocationStrategy", function () { return H; }), n.d(e, "Location", function () { return V; }), n.d(e, "ɵa", function () { return at; }), n.d(e, "ɵb", function () { return jt; });
        var M = function () { function t() { } return t.prototype.getBaseHrefFromDOM = function () { }, t.prototype.onPopState = function (t) { }, t.prototype.onHashChange = function (t) { }, t.prototype.pathname = function () { }, t.prototype.search = function () { }, t.prototype.hash = function () { }, t.prototype.replaceState = function (t, e, n) { }, t.prototype.pushState = function (t, e, n) { }, t.prototype.forward = function () { }, t.prototype.back = function () { }, t; }(), D = new j.InjectionToken("Location Initialized"), L = function () { function t() { } return t.prototype.path = function (t) { }, t.prototype.prepareExternalUrl = function (t) { }, t.prototype.pushState = function (t, e, n, r) { }, t.prototype.replaceState = function (t, e, n, r) { }, t.prototype.forward = function () { }, t.prototype.back = function () { }, t.prototype.onPopState = function (t) { }, t.prototype.getBaseHref = function () { }, t; }(), F = new j.InjectionToken("appBaseHref"), V = function () { function t(e) { var n = this; this._subject = new j.EventEmitter, this._platformStrategy = e; var r = this._platformStrategy.getBaseHref(); this._baseHref = t.stripTrailingSlash(o(r)), this._platformStrategy.onPopState(function (t) { n._subject.emit({ url: n.path(!0), pop: !0, type: t.type }); }); } return t.prototype.path = function (t) { return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t)); }, t.prototype.isCurrentPathEqualTo = function (e, n) { return void 0 === n && (n = ""), this.path() == this.normalize(e + t.normalizeQueryParams(n)); }, t.prototype.normalize = function (e) { return t.stripTrailingSlash(r(this._baseHref, o(e))); }, t.prototype.prepareExternalUrl = function (t) { return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t); }, t.prototype.go = function (t, e) { void 0 === e && (e = ""), this._platformStrategy.pushState(null, "", t, e); }, t.prototype.replaceState = function (t, e) { void 0 === e && (e = ""), this._platformStrategy.replaceState(null, "", t, e); }, t.prototype.forward = function () { this._platformStrategy.forward(); }, t.prototype.back = function () { this._platformStrategy.back(); }, t.prototype.subscribe = function (t, e, n) { return this._subject.subscribe({ next: t, error: e, complete: n }); }, t.normalizeQueryParams = function (t) { return t && "?" !== t[0] ? "?" + t : t; }, t.joinWithSlash = function (t, e) { if (0 == t.length)
            return e; if (0 == e.length)
            return t; var n = 0; return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e; }, t.stripTrailingSlash = function (t) { var e = t.match(/#|\?|$/), n = e && e.index || t.length, r = n - ("/" === t[n - 1] ? 1 : 0); return t.slice(0, r) + t.slice(n); }, t; }();
        V.decorators = [{ type: j.Injectable }], V.ctorParameters = function () { return [{ type: L }]; };
        var U = function (t) { function e(e, n) { var r = t.call(this) || this; return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r; } return I.a(e, t), e.prototype.onPopState = function (t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t); }, e.prototype.getBaseHref = function () { return this._baseHref; }, e.prototype.path = function (t) { void 0 === t && (t = !1); var e = this._platformLocation.hash; return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e; }, e.prototype.prepareExternalUrl = function (t) { var e = V.joinWithSlash(this._baseHref, t); return e.length > 0 ? "#" + e : e; }, e.prototype.pushState = function (t, e, n, r) { var o = this.prepareExternalUrl(n + V.normalizeQueryParams(r)); 0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o); }, e.prototype.replaceState = function (t, e, n, r) { var o = this.prepareExternalUrl(n + V.normalizeQueryParams(r)); 0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o); }, e.prototype.forward = function () { this._platformLocation.forward(); }, e.prototype.back = function () { this._platformLocation.back(); }, e; }(L);
        U.decorators = [{ type: j.Injectable }], U.ctorParameters = function () { return [{ type: M }, { type: void 0, decorators: [{ type: j.Optional }, { type: j.Inject, args: [F] }] }]; };
        var H = function (t) { function e(e, n) { var r = t.call(this) || this; if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n)
            throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); return r._baseHref = n, r; } return I.a(e, t), e.prototype.onPopState = function (t) { this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t); }, e.prototype.getBaseHref = function () { return this._baseHref; }, e.prototype.prepareExternalUrl = function (t) { return V.joinWithSlash(this._baseHref, t); }, e.prototype.path = function (t) { void 0 === t && (t = !1); var e = this._platformLocation.pathname + V.normalizeQueryParams(this._platformLocation.search), n = this._platformLocation.hash; return n && t ? "" + e + n : e; }, e.prototype.pushState = function (t, e, n, r) { var o = this.prepareExternalUrl(n + V.normalizeQueryParams(r)); this._platformLocation.pushState(t, e, o); }, e.prototype.replaceState = function (t, e, n, r) { var o = this.prepareExternalUrl(n + V.normalizeQueryParams(r)); this._platformLocation.replaceState(t, e, o); }, e.prototype.forward = function () { this._platformLocation.forward(); }, e.prototype.back = function () { this._platformLocation.back(); }, e; }(L);
        H.decorators = [{ type: j.Injectable }], H.ctorParameters = function () { return [{ type: M }, { type: void 0, decorators: [{ type: j.Optional }, { type: j.Inject, args: [F] }] }]; };
        var B = function () { function t() { } return t.prototype.getPluralCategory = function (t) { }, t; }(), q = function (t) { function e(e) { var n = t.call(this) || this; return n.locale = e, n; } return I.a(e, t), e.prototype.getPluralCategory = function (t) { switch (s(this.locale, t)) {
            case z.Zero: return "zero";
            case z.One: return "one";
            case z.Two: return "two";
            case z.Few: return "few";
            case z.Many: return "many";
            default: return "other";
        } }, e; }(B);
        q.decorators = [{ type: j.Injectable }], q.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [j.LOCALE_ID] }] }]; };
        var z = {};
        z.Zero = 0, z.One = 1, z.Two = 2, z.Few = 3, z.Many = 4, z.Other = 5, z[z.Zero] = "Zero", z[z.One] = "One", z[z.Two] = "Two", z[z.Few] = "Few", z[z.Many] = "Many", z[z.Other] = "Other";
        var K = function () { function t(t, e, n, r) { this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._initialClasses = []; } return Object.defineProperty(t.prototype, "klass", { set: function (t) { this._applyInitialClasses(!0), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyInitialClasses(!1), this._applyClasses(this._rawClass, !1); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClass", { set: function (t) { this._cleanupClasses(this._rawClass), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (n.i(j["ɵisListLikeIterable"])(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()); }, enumerable: !0, configurable: !0 }), t.prototype.ngDoCheck = function () { if (this._iterableDiffer) {
            var t = this._iterableDiffer.diff(this._rawClass);
            t && this._applyIterableChanges(t);
        }
        else if (this._keyValueDiffer) {
            var e = this._keyValueDiffer.diff(this._rawClass);
            e && this._applyKeyValueChanges(e);
        } }, t.prototype._cleanupClasses = function (t) { this._applyClasses(t, !0), this._applyInitialClasses(!1); }, t.prototype._applyKeyValueChanges = function (t) { var e = this; t.forEachAddedItem(function (t) { return e._toggleClass(t.key, t.currentValue); }), t.forEachChangedItem(function (t) { return e._toggleClass(t.key, t.currentValue); }), t.forEachRemovedItem(function (t) { t.previousValue && e._toggleClass(t.key, !1); }); }, t.prototype._applyIterableChanges = function (t) { var e = this; t.forEachAddedItem(function (t) { if ("string" != typeof t.item)
            throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + n.i(j["ɵstringify"])(t.item)); e._toggleClass(t.item, !0); }), t.forEachRemovedItem(function (t) { return e._toggleClass(t.item, !1); }); }, t.prototype._applyInitialClasses = function (t) { var e = this; this._initialClasses.forEach(function (n) { return e._toggleClass(n, !t); }); }, t.prototype._applyClasses = function (t, e) { var n = this; t && (Array.isArray(t) || t instanceof Set ? t.forEach(function (t) { return n._toggleClass(t, !e); }) : Object.keys(t).forEach(function (r) { null != t[r] && n._toggleClass(r, !e); })); }, t.prototype._toggleClass = function (t, e) { var n = this; (t = t.trim()) && t.split(/\s+/g).forEach(function (t) { n._renderer.setElementClass(n._ngEl.nativeElement, t, !!e); }); }, t; }();
        K.decorators = [{ type: j.Directive, args: [{ selector: "[ngClass]" }] }], K.ctorParameters = function () { return [{ type: j.IterableDiffers }, { type: j.KeyValueDiffers }, { type: j.ElementRef }, { type: j.Renderer }]; }, K.propDecorators = { klass: [{ type: j.Input, args: ["class"] }], ngClass: [{ type: j.Input }] };
        var Q = function () { function t(t) { this._viewContainerRef = t, this._componentRef = null, this._moduleRef = null; } return t.prototype.ngOnChanges = function (t) { if (this._viewContainerRef.clear(), this._componentRef = null, this.ngComponentOutlet) {
            var e = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (t.ngComponentOutletNgModuleFactory)
                if (this._moduleRef && this._moduleRef.destroy(), this.ngComponentOutletNgModuleFactory) {
                    var n = e.get(j.NgModuleRef);
                    this._moduleRef = this.ngComponentOutletNgModuleFactory.create(n.injector);
                }
                else
                    this._moduleRef = null;
            var r = this._moduleRef ? this._moduleRef.componentFactoryResolver : e.get(j.ComponentFactoryResolver), o = r.resolveComponentFactory(this.ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(o, this._viewContainerRef.length, e, this.ngComponentOutletContent);
        } }, t.prototype.ngOnDestroy = function () { this._moduleRef && this._moduleRef.destroy(); }, t; }();
        Q.decorators = [{ type: j.Directive, args: [{ selector: "[ngComponentOutlet]" }] }], Q.ctorParameters = function () { return [{ type: j.ViewContainerRef }]; }, Q.propDecorators = { ngComponentOutlet: [{ type: j.Input }], ngComponentOutletInjector: [{ type: j.Input }], ngComponentOutletContent: [{ type: j.Input }], ngComponentOutletNgModuleFactory: [{ type: j.Input }] };
        var W = function () { function t(t, e, n, r) { this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r; } return Object.defineProperty(t.prototype, "first", { get: function () { return 0 === this.index; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "last", { get: function () { return this.index === this.count - 1; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "even", { get: function () { return this.index % 2 == 0; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "odd", { get: function () { return !this.even; }, enumerable: !0, configurable: !0 }), t; }(), G = function () { function t(t, e, n) { this._viewContainer = t, this._template = e, this._differs = n, this._differ = null; } return Object.defineProperty(t.prototype, "ngForTrackBy", { get: function () { return this._trackByFn; }, set: function (t) { n.i(j.isDevMode)() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngForTemplate", { set: function (t) { t && (this._template = t); }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function (t) { if ("ngForOf" in t) {
            var e = t.ngForOf.currentValue;
            if (!this._differ && e)
                try {
                    this._differ = this._differs.find(e).create(this.ngForTrackBy);
                }
                catch (t) {
                    throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + u(e) + "'. NgFor only supports binding to Iterables such as Arrays.");
                }
        } }, t.prototype.ngDoCheck = function () { if (this._differ) {
            var t = this._differ.diff(this.ngForOf);
            t && this._applyChanges(t);
        } }, t.prototype._applyChanges = function (t) { var e = this, n = []; t.forEachOperation(function (t, r, o) { if (null == t.previousIndex) {
            var i = e._viewContainer.createEmbeddedView(e._template, new W(null, e.ngForOf, -1, -1), o), s = new Z(t, i);
            n.push(s);
        }
        else if (null == o)
            e._viewContainer.remove(r);
        else {
            var i = e._viewContainer.get(r);
            e._viewContainer.move(i, o);
            var s = new Z(t, i);
            n.push(s);
        } }); for (var r = 0; r < n.length; r++)
            this._perViewChange(n[r].view, n[r].record); for (var r = 0, o = this._viewContainer.length; r < o; r++) {
            var i = this._viewContainer.get(r);
            i.context.index = r, i.context.count = o;
        } t.forEachIdentityChange(function (t) { e._viewContainer.get(t.currentIndex).context.$implicit = t.item; }); }, t.prototype._perViewChange = function (t, e) { t.context.$implicit = e.item; }, t; }();
        G.decorators = [{ type: j.Directive, args: [{ selector: "[ngFor][ngForOf]" }] }], G.ctorParameters = function () { return [{ type: j.ViewContainerRef }, { type: j.TemplateRef }, { type: j.IterableDiffers }]; }, G.propDecorators = { ngForOf: [{ type: j.Input }], ngForTrackBy: [{ type: j.Input }], ngForTemplate: [{ type: j.Input }] };
        var Z = function () { function t(t, e) { this.record = t, this.view = e; } return t; }(), Y = G, J = function () { function t(t, e) { this._viewContainer = t, this._context = new X, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e; } return Object.defineProperty(t.prototype, "ngIf", { set: function (t) { this._context.$implicit = this._context.ngIf = t, this._updateView(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfThen", { set: function (t) { this._thenTemplateRef = t, this._thenViewRef = null, this._updateView(); }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfElse", { set: function (t) { this._elseTemplateRef = t, this._elseViewRef = null, this._updateView(); }, enumerable: !0, configurable: !0 }), t.prototype._updateView = function () { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))); }, t; }();
        J.decorators = [{ type: j.Directive, args: [{ selector: "[ngIf]" }] }], J.ctorParameters = function () { return [{ type: j.ViewContainerRef }, { type: j.TemplateRef }]; }, J.propDecorators = { ngIf: [{ type: j.Input }], ngIfThen: [{ type: j.Input }], ngIfElse: [{ type: j.Input }] };
        var X = function () { function t() { this.$implicit = null, this.ngIf = null; } return t; }(), $ = function () { function t(t, e) { this._viewContainerRef = t, this._templateRef = e, this._created = !1; } return t.prototype.create = function () { this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef); }, t.prototype.destroy = function () { this._created = !1, this._viewContainerRef.clear(); }, t.prototype.enforceState = function (t) { t && !this._created ? this.create() : !t && this._created && this.destroy(); }, t; }(), tt = function () { function t() { this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1; } return Object.defineProperty(t.prototype, "ngSwitch", { set: function (t) { this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0); }, enumerable: !0, configurable: !0 }), t.prototype._addCase = function () { return this._caseCount++; }, t.prototype._addDefault = function (t) { this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t); }, t.prototype._matchCase = function (t) { var e = t == this._ngSwitch; return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e; }, t.prototype._updateDefaultCases = function (t) { if (this._defaultViews && t !== this._defaultUsed) {
            this._defaultUsed = t;
            for (var e = 0; e < this._defaultViews.length; e++) {
                this._defaultViews[e].enforceState(t);
            }
        } }, t; }();
        tt.decorators = [{ type: j.Directive, args: [{ selector: "[ngSwitch]" }] }], tt.ctorParameters = function () { return []; }, tt.propDecorators = { ngSwitch: [{ type: j.Input }] };
        var et = function () { function t(t, e, n) { this.ngSwitch = n, n._addCase(), this._view = new $(t, e); } return t.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); }, t; }();
        et.decorators = [{ type: j.Directive, args: [{ selector: "[ngSwitchCase]" }] }], et.ctorParameters = function () { return [{ type: j.ViewContainerRef }, { type: j.TemplateRef }, { type: tt, decorators: [{ type: j.Host }] }]; }, et.propDecorators = { ngSwitchCase: [{ type: j.Input }] };
        var nt = function () { function t(t, e, n) { n._addDefault(new $(t, e)); } return t; }();
        nt.decorators = [{ type: j.Directive, args: [{ selector: "[ngSwitchDefault]" }] }], nt.ctorParameters = function () { return [{ type: j.ViewContainerRef }, { type: j.TemplateRef }, { type: tt, decorators: [{ type: j.Host }] }]; };
        var rt = function () { function t(t) { this._localization = t, this._caseViews = {}; } return Object.defineProperty(t.prototype, "ngPlural", { set: function (t) { this._switchValue = t, this._updateView(); }, enumerable: !0, configurable: !0 }), t.prototype.addCase = function (t, e) { this._caseViews[t] = e; }, t.prototype._updateView = function () { this._clearViews(); var t = Object.keys(this._caseViews), e = i(this._switchValue, t, this._localization); this._activateView(this._caseViews[e]); }, t.prototype._clearViews = function () { this._activeView && this._activeView.destroy(); }, t.prototype._activateView = function (t) { t && (this._activeView = t, this._activeView.create()); }, t; }();
        rt.decorators = [{ type: j.Directive, args: [{ selector: "[ngPlural]" }] }], rt.ctorParameters = function () { return [{ type: B }]; }, rt.propDecorators = { ngPlural: [{ type: j.Input }] };
        var ot = function () { function t(t, e, n, r) { this.value = t; var o = !isNaN(Number(t)); r.addCase(o ? "=" + t : t, new $(n, e)); } return t; }();
        ot.decorators = [{ type: j.Directive, args: [{ selector: "[ngPluralCase]" }] }], ot.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Attribute, args: ["ngPluralCase"] }] }, { type: j.TemplateRef }, { type: j.ViewContainerRef }, { type: rt, decorators: [{ type: j.Host }] }]; };
        var it = function () { function t(t, e, n) { this._differs = t, this._ngEl = e, this._renderer = n; } return Object.defineProperty(t.prototype, "ngStyle", { set: function (t) { this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create()); }, enumerable: !0, configurable: !0 }), t.prototype.ngDoCheck = function () { if (this._differ) {
            var t = this._differ.diff(this._ngStyle);
            t && this._applyChanges(t);
        } }, t.prototype._applyChanges = function (t) { var e = this; t.forEachRemovedItem(function (t) { return e._setStyle(t.key, null); }), t.forEachAddedItem(function (t) { return e._setStyle(t.key, t.currentValue); }), t.forEachChangedItem(function (t) { return e._setStyle(t.key, t.currentValue); }); }, t.prototype._setStyle = function (t, e) { var n = t.split("."), r = n[0], o = n[1]; e = null != e && o ? "" + e + o : e, this._renderer.setElementStyle(this._ngEl.nativeElement, r, e); }, t; }();
        it.decorators = [{ type: j.Directive, args: [{ selector: "[ngStyle]" }] }], it.ctorParameters = function () { return [{ type: j.KeyValueDiffers }, { type: j.ElementRef }, { type: j.Renderer }]; }, it.propDecorators = { ngStyle: [{ type: j.Input }] };
        var st = function () { function t(t) { this._viewContainerRef = t; } return Object.defineProperty(t.prototype, "ngOutletContext", { set: function (t) { this.ngTemplateOutletContext = t; }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function (t) { this._viewRef && this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)), this.ngTemplateOutlet && (this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext)); }, t; }();
        st.decorators = [{ type: j.Directive, args: [{ selector: "[ngTemplateOutlet]" }] }], st.ctorParameters = function () { return [{ type: j.ViewContainerRef }]; }, st.propDecorators = { ngTemplateOutletContext: [{ type: j.Input }], ngTemplateOutlet: [{ type: j.Input }], ngOutletContext: [{ type: j.Input }] };
        var at = [K, Q, G, J, st, it, tt, et, nt, rt, ot], ut = function () { function t() { } return t.prototype.createSubscription = function (t, e) { return t.subscribe({ next: e, error: function (t) { throw t; } }); }, t.prototype.dispose = function (t) { t.unsubscribe(); }, t.prototype.onDestroy = function (t) { t.unsubscribe(); }, t; }(), ct = function () { function t() { } return t.prototype.createSubscription = function (t, e) { return t.then(e, function (t) { throw t; }); }, t.prototype.dispose = function (t) { }, t.prototype.onDestroy = function (t) { }, t; }(), lt = new ct, pt = new ut, ft = function () { function t(t) { this._ref = t, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null, this._strategy = null; } return t.prototype.ngOnDestroy = function () { this._subscription && this._dispose(); }, t.prototype.transform = function (t) { return this._obj ? t !== this._obj ? (this._dispose(), this.transform(t)) : this._latestValue === this._latestReturnedValue ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, j.WrappedValue.wrap(this._latestValue)) : (t && this._subscribe(t), this._latestReturnedValue = this._latestValue, this._latestValue); }, t.prototype._subscribe = function (t) { var e = this; this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, function (n) { return e._updateLatestValue(t, n); }); }, t.prototype._selectStrategy = function (e) { if (n.i(j["ɵisPromise"])(e))
            return lt; if (n.i(j["ɵisObservable"])(e))
            return pt; throw c(t, e); }, t.prototype._dispose = function () { this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, this._obj = null; }, t.prototype._updateLatestValue = function (t, e) { t === this._obj && (this._latestValue = e, this._ref.markForCheck()); }, t; }();
        ft.decorators = [{ type: j.Pipe, args: [{ name: "async", pure: !1 }] }], ft.ctorParameters = function () { return [{ type: j.ChangeDetectorRef }]; };
        var ht = function () { function t() { } return t.prototype.transform = function (e) { if (!e)
            return e; if ("string" != typeof e)
            throw c(t, e); return e.toLowerCase(); }, t; }();
        ht.decorators = [{ type: j.Pipe, args: [{ name: "lowercase" }] }], ht.ctorParameters = function () { return []; };
        var dt = function () { function t() { } return t.prototype.transform = function (e) { if (!e)
            return e; if ("string" != typeof e)
            throw c(t, e); return e.split(/\b/g).map(function (t) { return l(t); }).join(""); }, t; }();
        dt.decorators = [{ type: j.Pipe, args: [{ name: "titlecase" }] }], dt.ctorParameters = function () { return []; };
        var yt = function () { function t() { } return t.prototype.transform = function (e) { if (!e)
            return e; if ("string" != typeof e)
            throw c(t, e); return e.toUpperCase(); }, t; }();
        yt.decorators = [{ type: j.Pipe, args: [{ name: "uppercase" }] }], yt.ctorParameters = function () { return []; };
        var mt = {};
        mt.Decimal = 0, mt.Percent = 1, mt.Currency = 2, mt[mt.Decimal] = "Decimal", mt[mt.Percent] = "Percent", mt[mt.Currency] = "Currency";
        var vt = function () { function t() { } return t.format = function (t, e, n, r) { void 0 === r && (r = {}); var o = r.minimumIntegerDigits, i = r.minimumFractionDigits, s = r.maximumFractionDigits, a = r.currency, u = r.currencyAsSymbol, c = void 0 !== u && u, l = { minimumIntegerDigits: o, minimumFractionDigits: i, maximumFractionDigits: s, style: mt[n].toLowerCase() }; return n == mt.Currency && (l.currency = "string" == typeof a ? a : void 0, l.currencyDisplay = c ? "symbol" : "code"), new Intl.NumberFormat(e, l).format(t); }, t; }(), gt = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/, bt = { yMMMdjms: b(g([m("year", 1), v("month", 3), m("day", 1), m("hour", 1), m("minute", 1), m("second", 1)])), yMdjm: b(g([m("year", 1), m("month", 1), m("day", 1), m("hour", 1), m("minute", 1)])), yMMMMEEEEd: b(g([m("year", 1), v("month", 4), v("weekday", 4), m("day", 1)])), yMMMMd: b(g([m("year", 1), v("month", 4), m("day", 1)])), yMMMd: b(g([m("year", 1), v("month", 3), m("day", 1)])), yMd: b(g([m("year", 1), m("month", 1), m("day", 1)])), jms: b(g([m("hour", 1), m("second", 1), m("minute", 1)])), jm: b(g([m("hour", 1), m("minute", 1)])) }, _t = { yyyy: b(m("year", 4)), yy: b(m("year", 2)), y: b(m("year", 1)), MMMM: b(v("month", 4)), MMM: b(v("month", 3)), MM: b(m("month", 2)), M: b(m("month", 1)), LLLL: b(v("month", 4)), L: b(v("month", 1)), dd: b(m("day", 2)), d: b(m("day", 1)), HH: p(f(b(y(m("hour", 2), !1)))), H: f(b(y(m("hour", 1), !1))), hh: p(f(b(y(m("hour", 2), !0)))), h: f(b(y(m("hour", 1), !0))), jj: b(m("hour", 2)), j: b(m("hour", 1)), mm: p(b(m("minute", 2))), m: b(m("minute", 1)), ss: p(b(m("second", 2))), s: b(m("second", 1)), sss: b(m("second", 3)), EEEE: b(v("weekday", 4)), EEE: b(v("weekday", 3)), EE: b(v("weekday", 2)), E: b(v("weekday", 1)), a: function (t) { return function (e, n) { return t(e, n).split(" ")[1]; }; }(b(y(m("hour", 1), !0))), Z: d("short"), z: d("long"), ww: b({}), w: b({}), G: b(v("era", 1)), GG: b(v("era", 2)), GGG: b(v("era", 3)), GGGG: b(v("era", 4)) }, wt = new Map, Ct = function () { function t() { } return t.format = function (t, e, n) { return _(n, t, e); }, t; }(), St = /^(\d+)?\.((\d+)(-(\d+))?)?$/, Et = function () { function t(t) { this._locale = t; } return t.prototype.transform = function (e, n) { return C(t, this._locale, e, mt.Decimal, n); }, t; }();
        Et.decorators = [{ type: j.Pipe, args: [{ name: "number" }] }], Et.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [j.LOCALE_ID] }] }]; };
        var Ot = function () { function t(t) { this._locale = t; } return t.prototype.transform = function (e, n) { return C(t, this._locale, e, mt.Percent, n); }, t; }();
        Ot.decorators = [{ type: j.Pipe, args: [{ name: "percent" }] }], Ot.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [j.LOCALE_ID] }] }]; };
        var Tt = function () { function t(t) { this._locale = t; } return t.prototype.transform = function (e, n, r, o) { return void 0 === n && (n = "USD"), void 0 === r && (r = !1), C(t, this._locale, e, mt.Currency, o, n, r); }, t; }();
        Tt.decorators = [{ type: j.Pipe, args: [{ name: "currency" }] }], Tt.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [j.LOCALE_ID] }] }]; };
        var Pt = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, xt = function () { function t(t) { this._locale = t; } return t.prototype.transform = function (e, n) { void 0 === n && (n = "mediumDate"); var r; if (O(e) || e !== e)
            return null; if ("string" == typeof e && (e = e.trim()), T(e))
            r = e;
        else if (E(e))
            r = new Date(parseFloat(e));
        else if ("string" == typeof e && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
            var o = e.split("-").map(function (t) { return parseInt(t, 10); }), i = o[0], s = o[1], a = o[2];
            r = new Date(i, s - 1, a);
        }
        else
            r = new Date(e); if (!T(r)) {
            var u = void 0;
            if ("string" != typeof e || !(u = e.match(Pt)))
                throw c(t, e);
            r = P(u);
        } return Ct.format(r, this._locale, t._ALIASES[n] || n); }, t; }();
        xt._ALIASES = { medium: "yMMMdjms", short: "yMdjm", fullDate: "yMMMMEEEEd", longDate: "yMMMMd", mediumDate: "yMMMd", shortDate: "yMd", mediumTime: "jms", shortTime: "jm" }, xt.decorators = [{ type: j.Pipe, args: [{ name: "date", pure: !0 }] }], xt.ctorParameters = function () { return [{ type: void 0, decorators: [{ type: j.Inject, args: [j.LOCALE_ID] }] }]; };
        var Rt = /#/g, At = function () { function t(t) { this._localization = t; } return t.prototype.transform = function (e, n) { if (null == e)
            return ""; if ("object" != typeof n || null === n)
            throw c(t, n); return n[i(e, Object.keys(n), this._localization)].replace(Rt, e.toString()); }, t; }();
        At.decorators = [{ type: j.Pipe, args: [{ name: "i18nPlural", pure: !0 }] }], At.ctorParameters = function () { return [{ type: B }]; };
        var kt = function () { function t() { } return t.prototype.transform = function (e, n) { if (null == e)
            return ""; if ("object" != typeof n || "string" != typeof e)
            throw c(t, n); return n.hasOwnProperty(e) ? n[e] : n.hasOwnProperty("other") ? n.other : ""; }, t; }();
        kt.decorators = [{ type: j.Pipe, args: [{ name: "i18nSelect", pure: !0 }] }], kt.ctorParameters = function () { return []; };
        var Nt = function () { function t() { } return t.prototype.transform = function (t) { return JSON.stringify(t, null, 2); }, t; }();
        Nt.decorators = [{ type: j.Pipe, args: [{ name: "json", pure: !1 }] }], Nt.ctorParameters = function () { return []; };
        var It = function () { function t() { } return t.prototype.transform = function (e, n, r) { if (null == e)
            return e; if (!this.supports(e))
            throw c(t, e); return e.slice(n, r); }, t.prototype.supports = function (t) { return "string" == typeof t || Array.isArray(t); }, t; }();
        It.decorators = [{ type: j.Pipe, args: [{ name: "slice", pure: !1 }] }], It.ctorParameters = function () { return []; };
        var jt = [ft, yt, ht, Nt, It, Et, Ot, dt, Tt, xt, At, kt], Mt = function () { function t() { } return t; }();
        Mt.decorators = [{ type: j.NgModule, args: [{ declarations: [at, jt], exports: [at, jt], providers: [{ provide: B, useClass: q }] }] }], Mt.ctorParameters = function () { return []; };
        var Dt = function () { function t() { } return t; }();
        Dt.decorators = [{ type: j.NgModule, args: [{ declarations: [], exports: [] }] }], Dt.ctorParameters = function () { return []; };
        var Lt = new j.InjectionToken("DocumentToken"), Ft = "browser", Vt = "server", Ut = "browserWorkerApp", Ht = "browserWorkerUi", Bt = new j.Version("4.3.6");
    }, rf3q: function (t, e, n) {
        "use strict";
        function r(t, e, n) { if (t) {
            if (t instanceof o.Subscriber)
                return t;
            if (t[i.rxSubscriber])
                return t[i.rxSubscriber]();
        } return t || e || n ? new o.Subscriber(t, e, n) : new o.Subscriber(s.empty); }
        var o = n("T14+"), i = n("dkwD"), s = n("LiYJ");
        e.toSubscriber = r;
    }, rlar: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("bKpL"), i = n("T14+"), s = n("xFbG"), a = n("Lhvy"), u = n("g0Kb"), c = n("dkwD"), l = function (t) { function e(e) { t.call(this, e), this.destination = e; } return r(e, t), e; }(i.Subscriber);
        e.SubjectSubscriber = l;
        var p = function (t) { function e() { t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null; } return r(e, t), e.prototype[c.rxSubscriber] = function () { return new l(this); }, e.prototype.lift = function (t) { var e = new f(this, this); return e.operator = t, e; }, e.prototype.next = function (t) { if (this.closed)
            throw new a.ObjectUnsubscribedError; if (!this.isStopped)
            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++)
                r[o].next(t); }, e.prototype.error = function (t) { if (this.closed)
            throw new a.ObjectUnsubscribedError; this.hasError = !0, this.thrownError = t, this.isStopped = !0; for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++)
            r[o].error(t); this.observers.length = 0; }, e.prototype.complete = function () { if (this.closed)
            throw new a.ObjectUnsubscribedError; this.isStopped = !0; for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++)
            n[r].complete(); this.observers.length = 0; }, e.prototype.unsubscribe = function () { this.isStopped = !0, this.closed = !0, this.observers = null; }, e.prototype._trySubscribe = function (e) { if (this.closed)
            throw new a.ObjectUnsubscribedError; return t.prototype._trySubscribe.call(this, e); }, e.prototype._subscribe = function (t) { if (this.closed)
            throw new a.ObjectUnsubscribedError; return this.hasError ? (t.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (t.complete(), s.Subscription.EMPTY) : (this.observers.push(t), new u.SubjectSubscription(this, t)); }, e.prototype.asObservable = function () { var t = new o.Observable; return t.source = this, t; }, e.create = function (t, e) { return new f(t, e); }, e; }(o.Observable);
        e.Subject = p;
        var f = function (t) { function e(e, n) { t.call(this), this.destination = e, this.source = n; } return r(e, t), e.prototype.next = function (t) { var e = this.destination; e && e.next && e.next(t); }, e.prototype.error = function (t) { var e = this.destination; e && e.error && this.destination.error(t); }, e.prototype.complete = function () { var t = this.destination; t && t.complete && this.destination.complete(); }, e.prototype._subscribe = function (t) { return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY; }, e; }(p);
        e.AnonymousSubject = f;
    }, ueUM: function (t, e, n) {
        "use strict";
        function r(t) { var e = new a(t), n = this.lift(e); return e.caught = n; }
        var o = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, i = n("yW9Z"), s = n("ktfo");
        e._catch = r;
        var a = function () { function t(t) { this.selector = t; } return t.prototype.call = function (t, e) { return e.subscribe(new u(t, this.selector, this.caught)); }, t; }(), u = function (t) { function e(e, n, r) { t.call(this, e), this.selector = n, this.caught = r; } return o(e, t), e.prototype.error = function (e) { if (!this.isStopped) {
            var n = void 0;
            try {
                n = this.selector(e, this.caught);
            }
            catch (e) {
                return void t.prototype.error.call(this, e);
            }
            this._unsubscribeAndRecycle(), this.add(s.subscribeToResult(this, n));
        } }, e; }(i.OuterSubscriber);
    }, wCVK: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("bKpL"), i = n("aOKN"), s = n("fcnB"), a = function (t) { function e(e, n) { t.call(this), this.arrayLike = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0]); } return r(e, t), e.create = function (t, n) { var r = t.length; return 0 === r ? new s.EmptyObservable : 1 === r ? new i.ScalarObservable(t[0], n) : new e(t, n); }, e.dispatch = function (t) { var e = t.arrayLike, n = t.index, r = t.length, o = t.subscriber; if (!o.closed) {
            if (n >= r)
                return void o.complete();
            o.next(e[n]), t.index = n + 1, this.schedule(t);
        } }, e.prototype._subscribe = function (t) { var n = this, r = n.arrayLike, o = n.scheduler, i = r.length; if (o)
            return o.schedule(e.dispatch, 0, { arrayLike: r, index: 0, length: i, subscriber: t }); for (var s = 0; s < i && !t.closed; s++)
            t.next(r[s]); t.complete(); }, e; }(o.Observable);
        e.ArrayLikeObservable = a;
    }, wZOE: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("bKpL"), i = n("aOKN"), s = n("fcnB"), a = n("MicL"), u = function (t) { function e(e, n) { t.call(this), this.array = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0]); } return r(e, t), e.create = function (t, n) { return new e(t, n); }, e.of = function () { for (var t = [], n = 0; n < arguments.length; n++)
            t[n - 0] = arguments[n]; var r = t[t.length - 1]; a.isScheduler(r) ? t.pop() : r = null; var o = t.length; return o > 1 ? new e(t, r) : 1 === o ? new i.ScalarObservable(t[0], r) : new s.EmptyObservable(r); }, e.dispatch = function (t) { var e = t.array, n = t.index, r = t.count, o = t.subscriber; if (n >= r)
            return void o.complete(); o.next(e[n]), o.closed || (t.index = n + 1, this.schedule(t)); }, e.prototype._subscribe = function (t) { var n = this.array, r = n.length, o = this.scheduler; if (o)
            return o.schedule(e.dispatch, 0, { array: n, index: 0, count: r, subscriber: t }); for (var i = 0; i < r && !t.closed; i++)
            t.next(n[i]); t.complete(); }, e; }(o.Observable);
        e.ArrayObservable = u;
    }, xFbG: function (t, e, n) {
        "use strict";
        function r(t) { return t.reduce(function (t, e) { return t.concat(e instanceof c.UnsubscriptionError ? e.errors : e); }, []); }
        var o = n("NSJx"), i = n("H6Sg"), s = n("fclq"), a = n("RdI5"), u = n("XRvs"), c = n("Emqh"), l = function () { function t(t) { this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t); } return t.prototype.unsubscribe = function () { var t, e = !1; if (!this.closed) {
            var n = this, l = n._parent, p = n._parents, f = n._unsubscribe, h = n._subscriptions;
            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
            for (var d = -1, y = p ? p.length : 0; l;)
                l.remove(this), l = ++d < y && p[d] || null;
            if (s.isFunction(f)) {
                var m = a.tryCatch(f).call(this);
                m === u.errorObject && (e = !0, t = t || (u.errorObject.e instanceof c.UnsubscriptionError ? r(u.errorObject.e.errors) : [u.errorObject.e]));
            }
            if (o.isArray(h))
                for (d = -1, y = h.length; ++d < y;) {
                    var v = h[d];
                    if (i.isObject(v)) {
                        var m = a.tryCatch(v.unsubscribe).call(v);
                        if (m === u.errorObject) {
                            e = !0, t = t || [];
                            var g = u.errorObject.e;
                            g instanceof c.UnsubscriptionError ? t = t.concat(r(g.errors)) : t.push(g);
                        }
                    }
                }
            if (e)
                throw new c.UnsubscriptionError(t);
        } }, t.prototype.add = function (e) { if (!e || e === t.EMPTY)
            return t.EMPTY; if (e === this)
            return this; var n = e; switch (typeof e) {
            case "function": n = new t(e);
            case "object":
                if (n.closed || "function" != typeof n.unsubscribe)
                    return n;
                if (this.closed)
                    return n.unsubscribe(), n;
                if ("function" != typeof n._addParent) {
                    var r = n;
                    n = new t, n._subscriptions = [r];
                }
                break;
            default: throw new Error("unrecognized teardown " + e + " added to Subscription.");
        } return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n; }, t.prototype.remove = function (t) { var e = this._subscriptions; if (e) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
        } }, t.prototype._addParent = function (t) { var e = this, n = e._parent, r = e._parents; n && n !== t ? r ? -1 === r.indexOf(t) && r.push(t) : this._parents = [t] : this._parent = t; }, t.EMPTY = function (t) { return t.closed = !0, t; }(new t), t; }();
        e.Subscription = l;
    }, xKl2: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("rlar"), i = n("bKpL"), s = n("T14+"), a = n("xFbG"), u = function (t) { function e(e, n) { t.call(this), this.source = e, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1; } return r(e, t), e.prototype._subscribe = function (t) { return this.getSubject().subscribe(t); }, e.prototype.getSubject = function () { var t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject; }, e.prototype.connect = function () { var t = this._connection; return t || (this._isComplete = !1, t = this._connection = new a.Subscription, t.add(this.source.subscribe(new l(this.getSubject(), this))), t.closed ? (this._connection = null, t = a.Subscription.EMPTY) : this._connection = t), t; }, e.prototype.refCount = function () { return this.lift(new p(this)); }, e; }(i.Observable);
        e.ConnectableObservable = u;
        var c = u.prototype;
        e.connectableObservableDescriptor = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: c._subscribe }, _isComplete: { value: c._isComplete, writable: !0 }, getSubject: { value: c.getSubject }, connect: { value: c.connect }, refCount: { value: c.refCount } };
        var l = function (t) { function e(e, n) { t.call(this, e), this.connectable = n; } return r(e, t), e.prototype._error = function (e) { this._unsubscribe(), t.prototype._error.call(this, e); }, e.prototype._complete = function () { this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this); }, e.prototype._unsubscribe = function () { var t = this.connectable; if (t) {
            this.connectable = null;
            var e = t._connection;
            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe();
        } }, e; }(o.SubjectSubscriber), p = function () { function t(t) { this.connectable = t; } return t.prototype.call = function (t, e) { var n = this.connectable; n._refCount++; var r = new f(t, n), o = e.subscribe(r); return r.closed || (r.connection = n.connect()), o; }, t; }(), f = function (t) { function e(e, n) { t.call(this, e), this.connectable = n; } return r(e, t), e.prototype._unsubscribe = function () { var t = this.connectable; if (!t)
            return void (this.connection = null); this.connectable = null; var e = t._refCount; if (e <= 0)
            return void (this.connection = null); if (t._refCount = e - 1, e > 1)
            return void (this.connection = null); var n = this.connection, r = t._connection; this.connection = null, !r || n && r !== n || r.unsubscribe(); }, e; }(s.Subscriber);
    }, yW9Z: function (t, e, n) {
        "use strict";
        var r = this && this.__extends || function (t, e) { function n() { this.constructor = t; } for (var r in e)
            e.hasOwnProperty(r) && (t[r] = e[r]); t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }, o = n("T14+"), i = function (t) { function e() { t.apply(this, arguments); } return r(e, t), e.prototype.notifyNext = function (t, e, n, r, o) { this.destination.next(e); }, e.prototype.notifyError = function (t, e) { this.destination.error(t); }, e.prototype.notifyComplete = function (t) { this.destination.complete(); }, e; }(o.Subscriber);
        e.OuterSubscriber = i;
    }, zijX: function (t, e, n) {
        "use strict";
        (function (t) { var n = "undefined" != typeof window && window, r = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, o = void 0 !== t && t, i = n || o || r; e.root = i, function () { if (!i)
            throw new Error("RxJS could not find any global context (window, self, global)"); }(); }).call(e, n("fRUx"));
    } });
//# sourceMappingURL=vendor.ddc8485cbc6408420cae.bundle.js.map