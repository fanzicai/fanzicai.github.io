webpackJsonp([1], [function(t, e, n) {
    "use strict";
    var r = n(9);
    n(58),
    n(60);
    $(function() {
        function t(t) {
            var e = "webkitAnimationEnd animationend";
            t.each(function() {
                var t = $(this)
                  , n = t.data("animation");
                t.addClass(n).one(e, function() {
                    t.removeClass(n)
                })
            })
        }
        $("#homepage").addClass("current"),
        $("#myPhoto").carousel({
            interval: 5e3
        }),
        $(document).on("mousewheel DOMMouseScroll", function(t) {
            var e = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail
              , n = $(".copyright");
            0 > e && (n.data("show") || (n.animate({
                bottom: "1%"
            }),
            n.data("show", !0),
            setTimeout(function() {
                n.animate({
                    bottom: "-5%"
                }),
                n.data("show", !1)
            }, 5e3)))
        }),
        $("body").scroll(function() {
            copyright.animate({
                bottom: "1%"
            })
        }),
        $(".carousel-inner").swipe({
            swipeLeft: function(t, e, n, r, a) {
                $(this).parent().carousel("next")
            },
            swipeRight: function() {
                $(this).parent().carousel("prev")
            },
            swipe: function() {
                r.flag && $("#menu-toggle").click()
            },
            threshold: 0
        });
        var e = $("#myPhoto")
          , n = e.find(".item:first").find("[data-animation ^= 'animated']");
        e.carousel(),
        t(n),
        e.carousel("pause"),
        e.on("slide.bs.carousel", function(e) {
            var n = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            t(n)
        })
    })
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var r, a, o;
    !function(i) {
        n(59) && n(59).jQuery ? (a = [n(10)],
        r = i,
        o = "function" == typeof r ? r.apply(e, a) : r,
        !(void 0 !== o && (t.exports = o))) : i("undefined" != typeof t && t.exports ? n(10) : jQuery)
    }(function(t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = c),
            void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
            e || (e = {}),
            e = t.extend({}, t.fn.swipe.defaults, e),
            this.each(function() {
                var r = t(this)
                  , a = r.data(D);
                a || (a = new n(this,e),
                r.data(D, a))
            })
        }
        function n(e, n) {
            function r(e) {
                if (!(ut() || t(e.target).closest(n.excludedElements, Ft).length > 0)) {
                    var r, a = e.originalEvent ? e.originalEvent : e, o = a.touches, i = o ? o[0] : a;
                    return Xt = T,
                    o ? Vt = o.length : n.preventDefaultEvents !== !1 && e.preventDefault(),
                    jt = 0,
                    Rt = null ,
                    $t = null ,
                    Yt = null ,
                    At = 0,
                    Ut = 0,
                    Nt = 0,
                    Ct = 1,
                    Ht = 0,
                    Qt = mt(),
                    lt(),
                    dt(0, i),
                    !o || Vt === n.fingers || n.fingers === v || Q() ? (qt = St(),
                    2 == Vt && (dt(1, o[1]),
                    Ut = Nt = vt(Wt[0].start, Wt[1].start)),
                    (n.swipeStatus || n.pinchStatus) && (r = R(a, Xt))) : r = !1,
                    r === !1 ? (Xt = E,
                    R(a, Xt),
                    r) : (n.hold && (te = setTimeout(t.proxy(function() {
                        Ft.trigger("hold", [a.target]),
                        n.hold && (r = n.hold.call(Ft, a, a.target))
                    }, this), n.longTapThreshold)),
                    ct(!0),
                    null )
                }
            }
            function _(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Xt !== y && Xt !== E && !st()) {
                    var r, a = e.touches, o = a ? a[0] : e, i = ft(o);
                    if (Gt = St(),
                    a && (Vt = a.length),
                    n.hold && clearTimeout(te),
                    Xt = k,
                    2 == Vt && (0 == Ut ? (dt(1, a[1]),
                    Ut = Nt = vt(Wt[0].start, Wt[1].start)) : (ft(a[1]),
                    Nt = vt(Wt[0].end, Wt[1].end),
                    Yt = Tt(Wt[0].end, Wt[1].end)),
                    Ct = xt(Ut, Nt),
                    Ht = Math.abs(Ut - Nt)),
                    Vt === n.fingers || n.fingers === v || !a || Q()) {
                        if (Rt = Et(i.start, i.end),
                        $t = Et(i.last, i.end),
                        H(t, $t),
                        jt = kt(i.start, i.end),
                        At = wt(),
                        gt(Rt, jt),
                        r = R(e, Xt),
                        !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var l = !0;
                            if (n.triggerOnTouchLeave) {
                                var s = Ot(this);
                                l = Mt(i.end, s)
                            }
                            !n.triggerOnTouchEnd && l ? Xt = j(k) : n.triggerOnTouchLeave && !l && (Xt = j(y)),
                            Xt != E && Xt != y || R(e, Xt)
                        }
                    } else
                        Xt = E,
                        R(e, Xt);
                    r === !1 && (Xt = E,
                    R(e, Xt))
                }
            }
            function P(t) {
                var e = t.originalEvent ? t.originalEvent : t
                  , r = e.touches;
                if (r) {
                    if (r.length && !st())
                        return it(e),
                        !0;
                    if (r.length && st())
                        return !0
                }
                return st() && (Vt = Zt),
                Gt = St(),
                At = wt(),
                U() || !A() ? (Xt = E,
                R(e, Xt)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Xt === k ? (n.preventDefaultEvents !== !1 && t.preventDefault(),
                Xt = y,
                R(e, Xt)) : !n.triggerOnTouchEnd && J() ? (Xt = y,
                $(e, Xt, g)) : Xt === k && (Xt = E,
                R(e, Xt)),
                ct(!1),
                null
            }
            function z() {
                Vt = 0,
                Gt = 0,
                qt = 0,
                Ut = 0,
                Nt = 0,
                Ct = 1,
                lt(),
                ct(!1)
            }
            function L(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                n.triggerOnTouchLeave && (Xt = j(y),
                R(e, Xt))
            }
            function I() {
                Ft.unbind(_t, r),
                Ft.unbind(It, z),
                Ft.unbind(Pt, _),
                Ft.unbind(zt, P),
                Lt && Ft.unbind(Lt, L),
                ct(!1)
            }
            function j(t) {
                var e = t
                  , r = C()
                  , a = A()
                  , o = U();
                return !r || o ? e = E : !a || t != k || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !a && t == y && n.triggerOnTouchLeave && (e = E) : e = y,
                e
            }
            function R(t, e) {
                var n, r = t.touches;
                return (W() || V()) && (n = $(t, e, f)),
                (F() || Q()) && n !== !1 && (n = $(t, e, p)),
                at() && n !== !1 ? n = $(t, e, h) : ot() && n !== !1 ? n = $(t, e, m) : rt() && n !== !1 && (n = $(t, e, g)),
                e === E && (V() && (n = $(t, e, f)),
                Q() && (n = $(t, e, p)),
                z(t)),
                e === y && (r ? r.length || z(t) : z(t)),
                n
            }
            function $(e, r, c) {
                var d;
                if (c == f) {
                    if (Ft.trigger("swipeStatus", [r, Rt || null , jt || 0, At || 0, Vt, Wt, $t]),
                    n.swipeStatus && (d = n.swipeStatus.call(Ft, e, r, Rt || null , jt || 0, At || 0, Vt, Wt, $t),
                    d === !1))
                        return !1;
                    if (r == y && X()) {
                        if (clearTimeout(Kt),
                        clearTimeout(te),
                        Ft.trigger("swipe", [Rt, jt, At, Vt, Wt, $t]),
                        n.swipe && (d = n.swipe.call(Ft, e, Rt, jt, At, Vt, Wt, $t),
                        d === !1))
                            return !1;
                        switch (Rt) {
                        case a:
                            Ft.trigger("swipeLeft", [Rt, jt, At, Vt, Wt, $t]),
                            n.swipeLeft && (d = n.swipeLeft.call(Ft, e, Rt, jt, At, Vt, Wt, $t));
                            break;
                        case o:
                            Ft.trigger("swipeRight", [Rt, jt, At, Vt, Wt, $t]),
                            n.swipeRight && (d = n.swipeRight.call(Ft, e, Rt, jt, At, Vt, Wt, $t));
                            break;
                        case i:
                            Ft.trigger("swipeUp", [Rt, jt, At, Vt, Wt, $t]),
                            n.swipeUp && (d = n.swipeUp.call(Ft, e, Rt, jt, At, Vt, Wt, $t));
                            break;
                        case l:
                            Ft.trigger("swipeDown", [Rt, jt, At, Vt, Wt, $t]),
                            n.swipeDown && (d = n.swipeDown.call(Ft, e, Rt, jt, At, Vt, Wt, $t))
                        }
                    }
                }
                if (c == p) {
                    if (Ft.trigger("pinchStatus", [r, Yt || null , Ht || 0, At || 0, Vt, Ct, Wt]),
                    n.pinchStatus && (d = n.pinchStatus.call(Ft, e, r, Yt || null , Ht || 0, At || 0, Vt, Ct, Wt),
                    d === !1))
                        return !1;
                    if (r == y && Y())
                        switch (Yt) {
                        case s:
                            Ft.trigger("pinchIn", [Yt || null , Ht || 0, At || 0, Vt, Ct, Wt]),
                            n.pinchIn && (d = n.pinchIn.call(Ft, e, Yt || null , Ht || 0, At || 0, Vt, Ct, Wt));
                            break;
                        case u:
                            Ft.trigger("pinchOut", [Yt || null , Ht || 0, At || 0, Vt, Ct, Wt]),
                            n.pinchOut && (d = n.pinchOut.call(Ft, e, Yt || null , Ht || 0, At || 0, Vt, Ct, Wt))
                        }
                }
                return c == g ? r !== E && r !== y || (clearTimeout(Kt),
                clearTimeout(te),
                Z() && !tt() ? (Bt = St(),
                Kt = setTimeout(t.proxy(function() {
                    Bt = null ,
                    Ft.trigger("tap", [e.target]),
                    n.tap && (d = n.tap.call(Ft, e, e.target))
                }, this), n.doubleTapThreshold)) : (Bt = null ,
                Ft.trigger("tap", [e.target]),
                n.tap && (d = n.tap.call(Ft, e, e.target)))) : c == h ? r !== E && r !== y || (clearTimeout(Kt),
                clearTimeout(te),
                Bt = null ,
                Ft.trigger("doubletap", [e.target]),
                n.doubleTap && (d = n.doubleTap.call(Ft, e, e.target))) : c == m && (r !== E && r !== y || (clearTimeout(Kt),
                Bt = null ,
                Ft.trigger("longtap", [e.target]),
                n.longTap && (d = n.longTap.call(Ft, e, e.target)))),
                d
            }
            function A() {
                var t = !0;
                return null  !== n.threshold && (t = jt >= n.threshold),
                t
            }
            function U() {
                var t = !1;
                return null  !== n.cancelThreshold && null  !== Rt && (t = ht(Rt) - jt >= n.cancelThreshold),
                t
            }
            function N() {
                return null  !== n.pinchThreshold ? Ht >= n.pinchThreshold : !0
            }
            function C() {
                var t;
                return t = n.maxTimeThreshold ? !(At >= n.maxTimeThreshold) : !0
            }
            function H(t, e) {
                if (n.preventDefaultEvents !== !1)
                    if (n.allowPageScroll === c)
                        t.preventDefault();
                    else {
                        var r = n.allowPageScroll === d;
                        switch (e) {
                        case a:
                            (n.swipeLeft && r || !r && n.allowPageScroll != b) && t.preventDefault();
                            break;
                        case o:
                            (n.swipeRight && r || !r && n.allowPageScroll != b) && t.preventDefault();
                            break;
                        case i:
                            (n.swipeUp && r || !r && n.allowPageScroll != w) && t.preventDefault();
                            break;
                        case l:
                            (n.swipeDown && r || !r && n.allowPageScroll != w) && t.preventDefault()
                        }
                    }
            }
            function Y() {
                var t = q()
                  , e = G()
                  , n = N();
                return t && e && n
            }
            function Q() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }
            function F() {
                return !(!Y() || !Q())
            }
            function X() {
                var t = C()
                  , e = A()
                  , n = q()
                  , r = G()
                  , a = U()
                  , o = !a && r && n && e && t;
                return o
            }
            function V() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }
            function W() {
                return !(!X() || !V())
            }
            function q() {
                return Vt === n.fingers || n.fingers === v || !S
            }
            function G() {
                return 0 !== Wt[0].end.x
            }
            function J() {
                return !!n.tap
            }
            function Z() {
                return !!n.doubleTap
            }
            function B() {
                return !!n.longTap
            }
            function K() {
                if (null  == Bt)
                    return !1;
                var t = St();
                return Z() && t - Bt <= n.doubleTapThreshold
            }
            function tt() {
                return K()
            }
            function et() {
                return (1 === Vt || !S) && (isNaN(jt) || jt < n.threshold)
            }
            function nt() {
                return At > n.longTapThreshold && x > jt
            }
            function rt() {
                return !(!et() || !J())
            }
            function at() {
                return !(!K() || !Z())
            }
            function ot() {
                return !(!nt() || !B())
            }
            function it(t) {
                Jt = St(),
                Zt = t.touches.length + 1
            }
            function lt() {
                Jt = 0,
                Zt = 0
            }
            function st() {
                var t = !1;
                if (Jt) {
                    var e = St() - Jt;
                    e <= n.fingerReleaseThreshold && (t = !0)
                }
                return t
            }
            function ut() {
                return !(Ft.data(D + "_intouch") !== !0)
            }
            function ct(t) {
                Ft && (t === !0 ? (Ft.bind(Pt, _),
                Ft.bind(zt, P),
                Lt && Ft.bind(Lt, L)) : (Ft.unbind(Pt, _, !1),
                Ft.unbind(zt, P, !1),
                Lt && Ft.unbind(Lt, L, !1)),
                Ft.data(D + "_intouch", t === !0))
            }
            function dt(t, e) {
                var n = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX,
                n.start.y = n.last.y = n.end.y = e.pageY || e.clientY,
                Wt[t] = n,
                n
            }
            function ft(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0
                  , n = pt(e);
                return null  === n && (n = dt(e, t)),
                n.last.x = n.end.x,
                n.last.y = n.end.y,
                n.end.x = t.pageX || t.clientX,
                n.end.y = t.pageY || t.clientY,
                n
            }
            function pt(t) {
                return Wt[t] || null
            }
            function gt(t, e) {
                e = Math.max(e, ht(t)),
                Qt[t].distance = e
            }
            function ht(t) {
                return Qt[t] ? Qt[t].distance : void 0
            }
            function mt() {
                var t = {};
                return t[a] = bt(a),
                t[o] = bt(o),
                t[i] = bt(i),
                t[l] = bt(l),
                t
            }
            function bt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }
            function wt() {
                return Gt - qt
            }
            function vt(t, e) {
                var n = Math.abs(t.x - e.x)
                  , r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }
            function xt(t, e) {
                var n = e / t * 1;
                return n.toFixed(2)
            }
            function Tt() {
                return 1 > Ct ? u : s
            }
            function kt(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }
            function yt(t, e) {
                var n = t.x - e.x
                  , r = e.y - t.y
                  , a = Math.atan2(r, n)
                  , o = Math.round(180 * a / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)),
                o
            }
            function Et(t, e) {
                var n = yt(t, e);
                return 45 >= n && n >= 0 ? a : 360 >= n && n >= 315 ? a : n >= 135 && 225 >= n ? o : n > 45 && 135 > n ? l : i
            }
            function St() {
                var t = new Date;
                return t.getTime()
            }
            function Ot(e) {
                e = t(e);
                var n = e.offset()
                  , r = {
                    left: n.left,
                    right: n.left + e.outerWidth(),
                    top: n.top,
                    bottom: n.top + e.outerHeight()
                };
                return r
            }
            function Mt(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var n = t.extend({}, n)
              , Dt = S || M || !n.fallbackToMouseEvents
              , _t = Dt ? M ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
              , Pt = Dt ? M ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
              , zt = Dt ? M ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
              , Lt = Dt ? M ? "mouseleave" : null  : "mouseleave"
              , It = M ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel"
              , jt = 0
              , Rt = null
              , $t = null
              , At = 0
              , Ut = 0
              , Nt = 0
              , Ct = 1
              , Ht = 0
              , Yt = 0
              , Qt = null
              , Ft = t(e)
              , Xt = "start"
              , Vt = 0
              , Wt = {}
              , qt = 0
              , Gt = 0
              , Jt = 0
              , Zt = 0
              , Bt = 0
              , Kt = null
              , te = null ;
            try {
                Ft.bind(_t, r),
                Ft.bind(It, z)
            } catch (ee) {
                t.error("events not supported " + _t + "," + It + " on jQuery.swipe")
            }
            this.enable = function() {
                return Ft.bind(_t, r),
                Ft.bind(It, z),
                Ft
            }
            ,
            this.disable = function() {
                return I(),
                Ft
            }
            ,
            this.destroy = function() {
                I(),
                Ft.data(D, null ),
                Ft = null
            }
            ,
            this.option = function(e, r) {
                if ("object" == typeof e)
                    n = t.extend(n, e);
                else if (void 0 !== n[e]) {
                    if (void 0 === r)
                        return n[e];
                    n[e] = r
                } else {
                    if (!e)
                        return n;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var r = "1.6.15"
          , a = "left"
          , o = "right"
          , i = "up"
          , l = "down"
          , s = "in"
          , u = "out"
          , c = "none"
          , d = "auto"
          , f = "swipe"
          , p = "pinch"
          , g = "tap"
          , h = "doubletap"
          , m = "longtap"
          , b = "horizontal"
          , w = "vertical"
          , v = "all"
          , x = 10
          , T = "start"
          , k = "move"
          , y = "end"
          , E = "cancel"
          , S = "ontouchstart" in window
          , O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !S
          , M = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !S
          , D = "TouchSwipe"
          , _ = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null ,
            pinchThreshold: 20,
            maxTimeThreshold: null ,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null ,
            swipeLeft: null ,
            swipeRight: null ,
            swipeUp: null ,
            swipeDown: null ,
            swipeStatus: null ,
            pinchIn: null ,
            pinchOut: null ,
            pinchStatus: null ,
            click: null ,
            tap: null ,
            doubleTap: null ,
            longTap: null ,
            hold: null ,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        };
        t.fn.swipe = function(n) {
            var r = t(this)
              , a = r.data(D);
            if (a && "string" == typeof n) {
                if (a[n])
                    return a[n].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (a && "object" == typeof n)
                a.option.apply(this, arguments);
            else if (!(a || "object" != typeof n && n))
                return e.apply(this, arguments);
            return r
        }
        ,
        t.fn.swipe.version = r,
        t.fn.swipe.defaults = _,
        t.fn.swipe.phases = {
            PHASE_START: T,
            PHASE_MOVE: k,
            PHASE_END: y,
            PHASE_CANCEL: E
        },
        t.fn.swipe.directions = {
            LEFT: a,
            RIGHT: o,
            UP: i,
            DOWN: l,
            IN: s,
            OUT: u
        },
        t.fn.swipe.pageScroll = {
            NONE: c,
            HORIZONTAL: b,
            VERTICAL: w,
            AUTO: d
        },
        t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: v
        }
    })
}
, function(t, e) {
    (function(e) {
        t.exports = e
    }
    ).call(e, {})
}
, function(t, e, n) {
    var r = n(61);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(34)(r, {});
    r.locals && (t.exports = r.locals)
}
, function(t, e, n) {
    e = t.exports = n(28)(),
    e.push([t.id, ".carousel-caption{bottom:5rem}#slider1_txt{background:url(" + n(62) + ") no-repeat 50%;width:70%;padding:60% 0}#slider1_triangle,#slider1_txt{position:absolute;left:50%;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%)}#slider1_triangle{background:url(" + n(63) + ") no-repeat 50%;width:200%;padding:90% 0;top:100%}#slider2_txt{background:url(" + n(64) + ") no-repeat 50%;width:70%;padding:80% 0;position:absolute;left:50%;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%)}#slider2_triangle{background:url(" + n(65) + ") no-repeat 50%;width:150%;padding:90% 0;position:absolute;left:50%;transform:translate(-50%,-40%);-o-transform:translate(-50%,-40%);-webkit-transform:translate(-50%,-40%);-ms-transform:translate(-50%,-40%);-moz-transform:translate(-50%,-40%)}#slider3_txt{background:url(" + n(66) + ") no-repeat 50%;width:70%;padding:80% 0;position:absolute;left:50%;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%)}#slider3_triangle{background:url(" + n(67) + ") no-repeat 50%;width:150%;padding:90% 0;position:absolute;left:50%;transform:translate(-50%,-40%);-o-transform:translate(-50%,-40%);-webkit-transform:translate(-50%,-40%);-ms-transform:translate(-50%,-40%);-moz-transform:translate(-50%,-40%)}.fill2{background-image:url(" + n(68) + ")}.fill3{background-image:url(" + n(69) + ")}.fill4{background-image:url(" + n(70) + ")}.fill1{background-image:url(" + n(71) + ")}.carousel-control{width:50%}.carousel-control .arrow{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:8rem;font-weight:lighter}.left-arrow{left:0;width:7rem;height:7rem;background:url(" + n(72) + ") no-repeat 5rem 0}.right-arrow{right:0;width:7rem;height:7rem;background:url(" + n(72) + ") no-repeat -3rem 0}.carousel-control.left,.carousel-control.right{background:none!important}@media screen and (min-width:992px){.carousel-caption{height:100%;bottom:5rem}}.carousel-indicators{bottom:1rem}.carousel-indicators li{opacity:.8;border:1px solid #82dcd8}.carousel-indicators .active{background-color:#82dcd8;border:none}.carousel-caption{height:100%;bottom:5rem}@media screen and (min-width:768px){.fill-txt{width:100%;height:100%;bottom:5rem;background-size:contain}.fill-txt2{background:url(" + n(73) + ") no-repeat bottom;background-size:50%}.fill-txt3{background:url(" + n(74) + ") no-repeat bottom;background-size:35%}.fill-txt4{background:url(" + n(75) + ") no-repeat bottom;background-size:45%}.fill2{background-image:url(" + n(76) + ")}.fill3{background-image:url(" + n(77) + ")}.fill4{background-image:url(" + n(78) + ")}.fill1{background-image:url(" + n(79) + ")}#slider1_triangle{width:120%;padding:70% 0;background-image:url(" + n(80) + ")!important}#slider1_triangle,#slider2_triangle{transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%)}#slider2_triangle{width:110%;padding:60% 0;background-image:url(" + n(81) + ")!important}#slider3_triangle{width:120%;padding:70% 0;background-image:url(" + n(82) + ")!important;transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%)}#slider1_txt{width:18%!important}#slider2_txt,#slider3_txt{width:30%!important}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes zoomIn{10%{opacity:0;-webkit-transform:scale3d(.1,.1,.1);transform:scale3d(.1,.1,.1)}50%{opacity:1}}@keyframes zoomIn{10%{opacity:0;-webkit-transform:scale3d(.1,.1,.1);transform:scale3d(.1,.1,.1)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInTxt{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1);transform:scale3d(.1,.1,.1)}40%{opacity:1}}@keyframes zoomInTxt{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1);transform:scale3d(.1,.1,.1)}40%{opacity:1}}.copyright-p{top:400%;position:absolute}", ""])
}
, function(t, e, n) {
    t.exports = n.p + "4b8afa0e3c4d42335edf276cbb672fd0.svg"
}
, function(t, e, n) {
    t.exports = n.p + "17e776c7a186e38ea51b9c6f33b82b74.svg"
}
, function(t, e, n) {
    t.exports = n.p + "6f1b744236c05332b5b5919dd14216da.svg"
}
, function(t, e, n) {
    t.exports = n.p + "a13e979e1a97c9a173dec81118c3c186.svg"
}
, function(t, e, n) {
    t.exports = n.p + "9b032feae1da34a4ce60694f5530828a.svg"
}
, function(t, e, n) {
    t.exports = n.p + "315347772fb395eaf366fb44b72404d7.svg"
}
, function(t, e, n) {
    t.exports = n.p + "9941437163a343c8db80626a3eb25cd3.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "84cc6d20dc7b1fa090af909bcb83cedf.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "0c1a3450b25eb29405d16330d08cbae4.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "951062407d4c7b6a1248c98727b7c699.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "img/left-right.svg"
}
, function(t, e, n) {
    t.exports = n.p + "a4486bc214fee92c7504132578bbe7bf.png"
}
, function(t, e, n) {
    t.exports = n.p + "c7786056ee2b598e2bcc681666d5ed08.png"
}
, function(t, e, n) {
    t.exports = n.p + "112e2c83bfb3dd559ed038d525824845.png"
}
, function(t, e, n) {
    t.exports = n.p + "f91f310ab27eef6b7ad55ce3c7dccc33.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "1322f5ed4d4c1a52efa463d3a1027f36.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "d9ca9db5ec94c0eadf73505d9e308481.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "9c7d2d8509dadbcb57e5a8d15f464a22.jpg"
}
, function(t, e, n) {
    t.exports = n.p + "36f0907e15752b5d20151fe16155ae66.svg"
}
, function(t, e, n) {
    t.exports = n.p + "d869681d98793d5e6cb12f824673f141.svg"
}
, function(t, e, n) {
    t.exports = n.p + "661ee760d40d72bed5240e30962f6a47.svg"
}
]);
