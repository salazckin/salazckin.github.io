! function e(t, i, s) {
    function o(n, a) {
        if (!i[n]) {
            if (!t[n]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(n, !0);
                if (r) return r(n, !0);
                var h = new Error("Cannot find module '" + n + "'");
                throw h.code = "MODULE_NOT_FOUND", h
            }
            var c = i[n] = {
                exports: {}
            };
            t[n][0].call(c.exports, function(e) {
                var i = t[n][1][e];
                return o(i ? i : e)
            }, c, c.exports, e, t, i, s)
        }
        return i[n].exports
    }
    for (var r = "function" == typeof require && require, n = 0; n < s.length; n++) o(s[n]);
    return o
}({
    1: [function(e, t, i) {
        var s, o, r, n, a, l, h, c, u, p, d, g, m, f = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        n = e("./env"), d = e("./routes"), c = e("./models/base-model"), h = e("./controllers/loader-controller"), o = e("./models/base-model"), s = e("./controllers/about-controller"), l = e("./models/base-model"), a = e("./controllers/landing-controller"), m = e("./models/base-model"), g = e("./controllers/work-controller"), p = e("./models/base-model"), u = e("./controllers/pages-controller"), r = function() {
            function t() {
                this.goToPage = f(this.goToPage, this), this.goDown = f(this.goDown, this), this.goRight = f(this.goRight, this), this.goLeft = f(this.goLeft, this), this.goUp = f(this.goUp, this), this.onKeyup = f(this.onKeyup, this), this.onResize = f(this.onResize, this), this.onPagesTransended = f(this.onPagesTransended, this), HP.$win = $(window), HP.$doc = $(document), HP.$html = $("html"), HP.$body = $("body"), HP.$wrapper = $("#wrapper"), HP.$w_track_fill = null, HP.data = e("./data"), HP.utils = e("./utils"), HP.router = new d, HP.project_index = 0, HP.projects_total = HP.data.pages.work.length, HP.virgin_route = !0, HP.work_mode = !1, this.$fallback = $("#fallback"), this.active_c = null, this.$fallback.is(":hidden") && (this.$fallback.remove(), this.routes(), this.build()), HP.utils.is_mobile.any() === !1 ? HP.$html.addClass("cool-clicks") : HP.$html.addClass("finger-blaster")
            }
            return t.prototype.routes = function() {
                var e, t, i, s, o, r, n, a, l, h;
                for (HP.router.add("/", "Github"), HP.router.add("/about", "Github"), r = HP.data.pages.work, e = 0, i = r.length; i > e; e++) o = r[e], HP.router.add("/" + o.slug, "Github - " + o.title);
                for (l = HP.router.getState(), null == HP.router.routes[l.key] && History.replaceState(null, null, "/"), HP.router.on("/", this.goToPage), HP.router.on("/about", this.goToPage), n = HP.data.pages.work, a = [], t = 0, s = n.length; s > t; t++) h = n[t], a.push(HP.router.on("/" + h.slug, this.goToPage));
                return a
            }, t.prototype.build = function() {
                return this.loader_m = new c({
                    $el: $("#loader")
                }), this.loader_c = new h({
                    model: this.loader_m
                }), this.about_m = new o({
                    $el: $("#about")
                }), this.about_c = new s({
                    model: this.about_m
                }), this.landing_m = new l({
                    $el: $("#landing")
                }), this.landing_c = new a({
                    model: this.landing_m
                }), this.work_m = new m({
                    $el: $("#work")
                }), this.work_c = new g({
                    model: this.work_m
                }), this.pages_m = new p({
                    $el: $("#pages")
                }), this.pages_c = new u({
                    model: this.pages_m
                }), this.observeSomeSweetEvents()
            }, t.prototype.observeSomeSweetEvents = function() {
                return HP.$body.on("rip_pages_transended", this.onPagesTransended).on("set_projects_state", this.work_c.setState).on("rip_listeners", function(e) {
                    return function() {
                        return e.active_c.listeners()
                    }
                }(this)), HP.$win.on("resize.app", this.onResize).trigger("resize.app"), HP.$doc.on("keyup.navigate", this.onKeyup), HP.router.onAppStateChange()
            }, t.prototype.onPagesTransended = function() {
                var e;
                return e = HP.router.getPreviousState().key, HP.work_mode === !1 && "home" !== e && "about" !== e && this.work_c.suspendWorkDetail(e), HP.work_mode === !0 && "home" === e ? this.work_c.loadImages(HP.router.getState().key) : void 0
            }, t.prototype.onResize = function() {
                var e, t;
                return t = HP.$win.width() % 2 === 0 ? 0 : 1, e = HP.$win.height() % 2 === 0 ? 0 : 1, HP.$wrapper.css({
                    "padding-right": t + "px",
                    "padding-bottom": e + "px"
                })
            }, t.prototype.onKeyup = function(e) {
                var t, i, s;
                return t = e.keyCode, i = [38, 37, 39, 40, 27], s = HP.router.getState().key, _.contains(i, t) && e.preventDefault(), 38 === t && this.goUp(s), 37 === t && this.goLeft(s), 39 === t && this.goRight(s), 40 === t && this.goDown(s), 27 !== t || "about" !== s && "home" === s ? void 0 : History.pushState(null, null, "/")
            }, t.prototype.goUp = function(e) {
                var t;
                return "about" === e || HP.project_index <= 0 ? !1 : "home" === e ? (HP.$body.trigger("rip_it_up"), !1) : "home" !== e && "about" !== e ? (t = HP.data.pages.work[HP.project_index - 1].slug, History.pushState(null, null, "/" + t)) : void 0
            }, t.prototype.goLeft = function(e) {
                return "about" === e ? !1 : "home" === e ? History.pushState(null, null, "/about") : History.pushState(null, null, "/")
            }, t.prototype.goRight = function(e) {
                var t;
                return "about" !== e && "home" !== e ? !1 : (t = HP.data.pages.work[HP.project_index].slug, "about" === e && History.pushState(null, null, "/"), "home" === e ? History.pushState(null, null, "/" + t) : void 0)
            }, t.prototype.goDown = function(e) {
                var t;
                return "about" === e || HP.project_index >= HP.projects_total - 1 ? !1 : "home" === e ? (HP.$body.trigger("rip_it_down"), !1) : "home" !== e && "about" !== e ? (t = HP.data.pages.work[HP.project_index + 1].slug, History.pushState(null, null, "/" + t)) : void 0
            }, t.prototype.goToPage = function(e) {
                var t, i, s, o, r;
                return r = 0, i = "home", t = e.key, o = HP.router.getPreviousState().key, "about" === t ? (i = "about", s = this.about_c) : "home" === t ? (r = 50, s = this.landing_c) : (r = 100, i = "work", s = this.work_c, HP.project_index = _.findIndex(HP.data.pages.work, {
                    slug: t
                })), this.landing_c.setMode(i), this.pages_c.setState(r), null !== this.active_c ? (this.suspend(), this.active_c = s, this.active_c.activate()) : (this.active_c = s, this.active_c.activate()), HP.virgin_route = !1
            }, t.prototype.suspend = function() {
                return null !== this.active_c ? this.active_c.suspend() : void 0
            }, t
        }(), t.exports = r, $(function() {
            return HP.instance = new r
        })
    }, {
        "./controllers/about-controller": 2,
        "./controllers/landing-controller": 3,
        "./controllers/loader-controller": 4,
        "./controllers/pages-controller": 5,
        "./controllers/work-controller": 6,
        "./data": 8,
        "./env": 9,
        "./models/base-model": 10,
        "./routes": 12,
        "./utils": 13
    }],
    2: [function(e, t, i) {
        var s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        s = function() {
            function e(e) {
                this.onMouseUp = o(this.onMouseUp, this), this.onMouseMove = o(this.onMouseMove, this), this.onMouseDown = o(this.onMouseDown, this), this.model = e.model, this.build()
            }
            return e.prototype.build = function() {
                return this.model.setV($(JST["about-page"](HP.data.pages.about))), this.model.getE().append(this.model.getV()), this.dragging = !1
            }, e.prototype.onMouseDown = function(e) {
                return 1 === e.which || HP.utils.is_mobile.any() ? (this.dragging = !0, HP.$doc.off("mouseup.about touchend.about").one("mouseup.about touchend.about", this.onMouseUp)) : void 0
            }, e.prototype.onMouseMove = function(e) {
                return this.dragging === !0 ? (e.preventDefault(), !1) : void 0
            }, e.prototype.onMouseUp = function() {
                return this.dragging = !1
            }, e.prototype.listeners = function() {
                return this.model.getE().off("mousedown.landing touchstart.landing mousemove.landing touchmove.landing").on("mousedown.landing touchstart.landing", this.onMouseDown).on("mousemove.landing touchmove.landing", this.onMouseMove)
            }, e.prototype.activate = function() {
                return HP.virgin_route === !1 ? this.listeners() : void 0
            }, e.prototype.suspend = function() {
                return this.model.getE().off("mousedown.about touchstart.about mousemove.about touchmove.about")
            }, e
        }(), t.exports = s
    }, {}],
    3: [function(e, t, i) {
        var s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        s = function() {
            function e(e) {
                this.onClickProjectIndexItem = o(this.onClickProjectIndexItem, this), this.onClickTrackTick = o(this.onClickTrackTick, this), this.onClickLogo = o(this.onClickLogo, this), this.onClickControlBtn = o(this.onClickControlBtn, this), this.showProjectIndex = o(this.showProjectIndex, this), this.hideProjectIndex = o(this.hideProjectIndex, this), this.onClickProjectIndexRollerLink = o(this.onClickProjectIndexRollerLink, this), this.checkPercentScrolled = o(this.checkPercentScrolled, this), this.animateTrackFill = o(this.animateTrackFill, this), this.updateTrackFill = o(this.updateTrackFill, this), this.cancelRAF = o(this.cancelRAF, this), this.updateRAF = o(this.updateRAF, this), this.onMouseUp = o(this.onMouseUp, this), this.onMouseMove = o(this.onMouseMove, this), this.onMouseDown = o(this.onMouseDown, this), this.updateDragVals = o(this.updateDragVals, this), this.scrollTo = o(this.scrollTo, this), this.onMousewheelComplete = o(this.onMousewheelComplete, this), this.onMousewheel = o(this.onMousewheel, this), this.setPercenteOffset = o(this.setPercenteOffset, this), this.onResizeComplete = o(this.onResizeComplete, this), this.onResize = o(this.onResize, this), this.model = e.model, this.build()
            }
            return e.prototype.build = function() {
                return this.model.setV($(JST["landing-page"](HP.data))), this.model.getE().append(this.model.getV()), this.$title_roller = $("#title-zone .roller-inner", this.model.getV()), this.$ac_roller = $("#ac-roller", this.model.getV()), this.$pi_roller = $("#pi-roller", this.model.getV()), this.$pi_link = $("#pi-roller .lava-link", this.model.getV()), this.$project_index = $("#project-index", this.model.getV()), this.$project_index_item = $("li", this.$project_index), this.$control = $("#control", this.model.getV()), this.$logo = $("#logo", this.model.getV()), this.$fill = $(".fill", this.model.getV()), this.$track_tick = $(".track li", this.model.getV()), this.percent_offset = [], this.raf = !1, this.dragging = !1, this.process_inertia = !1, this.last_motion = 0, this.direction = 0, this.perc = 0, this.target_y = 0, this.last_y = 0, this.prev_y = 0, this.viewport_y = 0, this.rounded_viewport_y = 0, this.cur_inertia_y = 0, this.cur_vel_y = 0, this.viewport_max = this.model.getV().height(), this.viewport_min = 0, this.threshold = .01, this.velocity = .3, this.ease = .3, this.wheelie_time = null, this.resize_time = null, this.observeSomeSweetEvents()
            }, e.prototype.observeSomeSweetEvents = function() {
                return this.$pi_link.on("click", this.onClickProjectIndexRollerLink), this.$control.on("click", this.onClickControlBtn), this.$logo.on("click", this.onClickLogo)
            }, e.prototype.onResize = function() {
                return this.cancelRAF(), clearTimeout(this.resize_time), this.resize_time = setTimeout(this.onResizeComplete, 250), this.setPercenteOffset()
            }, e.prototype.onResizeComplete = function() {
                return clearTimeout(this.resize_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.setPercenteOffset = function() {
                var e, t, i, s, o;
                for (this.percent_offset = [], s = [], e = t = 0, i = this.$track_tick.length; i >= 0 ? i > t : t > i; e = i >= 0 ? ++t : --t) o = 100 / HP.projects_total * e, s.push(this.percent_offset.push(o));
                return s
            }, e.prototype.onMousewheel = function(e) {
                var t;
                return this.cancelRAF(), clearTimeout(this.wheelie_time), this.wheelie_time = setTimeout(this.onMousewheelComplete, 250), t = e.deltaY * e.deltaFactor, this.perc = Math.min(Math.max(this.perc - .003 * t, 0), 100), this.direction = 0 > t ? 1 : -1, this.updateTrackFill(), this.checkPercentScrolled(), !1
            }, e.prototype.onMousewheelComplete = function() {
                return clearTimeout(this.wheelie_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.scrollTo = function() {
                var e;
                return e = 100 / HP.projects_total, this.perc = HP.virgin_route === !0 ? 0 : HP.project_index * e + e / 2, this.updateDragVals(), this.updateTrackFill(), this.setState()
            }, e.prototype.updateDragVals = function() {
                return this.viewport_max = this.model.getV().height(), this.rounded_viewport_y = Math.round(this.viewport_max * (this.perc / 100)), this.viewport_y = this.rounded_viewport_y, this.target_y = this.rounded_viewport_y
            }, e.prototype.onMouseDown = function(e) {
                return 1 === e.which || HP.utils.is_mobile.any() ? (this.dragging = !0, this.viewport_max = this.model.getV().height(), this.cur_vel_y = 0, this.cur_inertia_y = 0, this.prev_y = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, this.last_motion = (new Date).getTime(), this.last_y = this.target_y, HP.$doc.off("mouseup.landing touchend.landing").one("mouseup.landing touchend.landing", this.onMouseUp)) : void 0
            }, e.prototype.onMouseMove = function(e) {
                var t, i, s, o;
                return this.dragging === !0 ? (e.preventDefault(), this.model.getV().addClass("dragging"), s = (new Date).getTime(), i = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, t = i - this.prev_y, Math.abs(t) < this.threshold ? !1 : (this.prev_y = i, this.last_motion = s, this.target_y -= t / 10, t = this.target_y - this.last_y, this.last_y = this.target_y, o = Math.abs(t), this.cur_vel_y += (o - this.cur_vel_y) * this.velocity, this.direction = 0 > t ? -1 : 1, !1)) : void 0
            }, e.prototype.onMouseUp = function() {
                var e, t;
                return this.dragging = !1, this.model.getV().hasClass("dragging") && (this.model.getV().removeClass("dragging"), this.cur_inertia_y = Math.abs(this.cur_vel_y), this.process_inertia = !0, t = (new Date).getTime(), e = Math.max(10, t - this.last_motion), this.last_motion = 0, this.cur_vel_y *= 1 - Math.min(1, Math.max(0, e / 100))), this.prev_y = 0
            }, e.prototype.updateRAF = function() {
                var e;
                return this.raf ? (this.process_inertia === !0 && (this.target_y += this.cur_vel_y * this.direction, this.cur_vel_y *= .9, this.target_y < this.viewport_min ? (this.cur_vel_y = 0, this.target_y = this.viewport_min, this.process_inertia = !1) : this.target_y > this.viewport_max && (this.cur_vel_y = 0, this.target_y = this.viewport_max, this.process_inertia = !1), this.cur_vel_y < .01 && (this.process_inertia = !1, this.cur_vel_y = 0)), e = (this.target_y - this.viewport_y) * this.ease, this.viewport_y += e, this.rounded_viewport_y = Math.round(this.viewport_y), this.perc = Math.min(Math.max(this.rounded_viewport_y / this.viewport_max * 100, 0), 100), this.updateTrackFill(), this.checkPercentScrolled(), requestAnimationFrame(this.updateRAF)) : void 0
            }, e.prototype.cancelRAF = function() {
                return this.raf = !1, cancelAnimationFrame(this.updateRAF)
            }, e.prototype.updateTrackFill = function() {
                return this.$fill.css(HP.utils.transform, HP.utils.translate(0, this.perc + "%"))
            }, e.prototype.animateTrackFill = function() {
                return this.cancelRAF(), this.$fill.addClass("trans"), this.scrollTo(), this.$fill.off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        return e.$fill.removeClass("trans"), e.hideProjectIndex(), e.raf = !0, e.updateRAF()
                    }
                }(this))
            }, e.prototype.checkPercentScrolled = function() {
                if (1 !== this.direction) {
                    if (this.perc < this.percent_offset[HP.project_index] && HP.project_index > 0) return HP.project_index--, this.setState()
                } else if (this.perc > this.percent_offset[HP.project_index + 1]) return HP.project_index++, this.setState()
            }, e.prototype.setState = function() {
                return this.$project_index_item.removeClass("active").eq(HP.project_index).addClass("active"), this.$track_tick.removeClass("active").eq(HP.project_index).addClass("active"), this.$title_roller.css(HP.utils.transform, HP.utils.translate(0, -100 * HP.project_index + "%")), HP.$body.trigger("set_projects_state")
            }, e.prototype.setMode = function(e) {
                return this.model.getE().removeClass().addClass("page " + e + "-mode")
            }, e.prototype.onClickProjectIndexRollerLink = function(e) {
                var t;
                return t = $(e.currentTarget), t.hasClass("passage") ? (this.showProjectIndex(), this.$pi_roller.addClass("roll-it")) : (this.hideProjectIndex(), this.$pi_roller.removeClass("roll-it"))
            }, e.prototype.hideProjectIndex = function() {
                return this.$project_index.removeClass("show"), this.$pi_roller.removeClass("roll-it")
            }, e.prototype.showProjectIndex = function() {
                return this.$project_index.addClass("show"), this.$pi_roller.addClass("roll-it")
            }, e.prototype.onClickControlBtn = function() {
                var e, t;
                return e = HP.router.getState().key, "home" === e ? (t = HP.data.pages.work[HP.project_index].slug, History.pushState(null, null, "/" + t)) : History.pushState(null, null, "/")
            }, e.prototype.onClickLogo = function() {
                var e;
                return e = HP.router.getState().key, "home" === e && History.pushState(null, null, "/about"), "about" === e ? History.pushState(null, null, "/") : void 0
            }, e.prototype.onClickTrackTick = function(e) {
                var t;
                return t = $(e.currentTarget), HP.project_index = t.index(), this.animateTrackFill()
            }, e.prototype.onClickProjectIndexItem = function(e) {
                var t;
                return t = $(e.currentTarget), t.hasClass("active") ? this.hideProjectIndex() : (HP.project_index = t.index(), this.animateTrackFill())
            }, e.prototype.listeners = function() {
                return this.$track_tick.off("click").on("click", this.onClickTrackTick), this.$project_index_item.off("click").on("click", this.onClickProjectIndexItem), this.model.getE().off("mousedown.landing touchstart.landing mousemove.landing touchmove.landing").on("mousedown.landing touchstart.landing", this.onMouseDown).on("mousemove.landing touchmove.landing", this.onMouseMove), HP.$win.off("resize.landing").on("resize.landing", this.onResize).trigger("resize.landing"), HP.$doc.off("mousewheel.landing").on("mousewheel.landing", this.onMousewheel), this.animateTrackFill(), this.model.getV().removeClass("hide")
            }, e.prototype.activate = function() {
                return HP.virgin_route === !1 ? this.listeners() : void 0
            }, e.prototype.suspend = function() {
                return this.cancelRAF(), this.$pi_roller.removeClass("roll-it"), this.$project_index.removeClass("show"), this.$track_tick.off("click"), this.$project_index_item.off("click"), this.model.getE().off("mousedown.landing touchstart.landing mousemove.landing touchmove.landing"), HP.$win.off("resize.landing"), HP.$doc.off("mousewheel.landing")
            }, e
        }(), t.exports = s
    }, {}],
    4: [function(e, t, i) {
        var s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        s = function() {
            function e(e) {
                this.destroy = o(this.destroy, this), this.activate = o(this.activate, this), this.updateTrackFill = o(this.updateTrackFill, this), this.cancelRAF = o(this.cancelRAF, this), this.updateRAF = o(this.updateRAF, this), this.onMouseUp = o(this.onMouseUp, this), this.onMouseMove = o(this.onMouseMove, this), this.onMouseDown = o(this.onMouseDown, this), this.updateDragVals = o(this.updateDragVals, this), this.onMousewheelComplete = o(this.onMousewheelComplete, this), this.onMousewheel = o(this.onMousewheel, this), this.onResizeComplete = o(this.onResizeComplete, this), this.onResize = o(this.onResize, this), this.loadComplete = o(this.loadComplete, this), this.loadingCount = o(this.loadingCount, this), this.updateProgress = o(this.updateProgress, this), this.loadImages = o(this.loadImages, this), this.model = e.model, this.build()
            }
            return e.prototype.build = function() {
                var e, t, i, s;
                for (this.model.setV($(JST.loader(HP.data.loading))), this.model.getE().append(this.model.getV()), this.$instruct_screen = $("#instruct-screen", this.model.getV()), this.$instruct_inner = $("#instruct-screen-inner", this.model.getV()), this.$instruct_track = $(".track", this.$instruct_screen), this.$instruct_fill = $(".fill", this.$instruct_screen), this.$animated_logo = $("#animated-logo", this.$instruct_screen), this.$scroll_icon = $("#scroll-icon", this.$instruct_screen), this.$loading_screen = $("#loading-screen", this.model.getV()), this.$loading_track = $(".track", this.$loading_screen), this.$loading_fill = $(".fill", this.$loading_screen), this.$counter = $("#counter", this.$loading_screen), this.assets = ["logos.svg", "logos.svg"], this.loaded_perc = 0, this.total = 0, this.loaded = 0, this.count = 0, this.raf = !1, this.dragging = !1, this.process_inertia = !1, this.last_motion = 0, this.direction = 0, this.perc = 0, this.target_y = 0, this.last_y = 0, this.prev_y = 0, this.viewport_y = 0, this.rounded_viewport_y = 0, this.cur_inertia_y = 0, this.cur_vel_y = 0, this.viewport_max = this.model.getV().height(), this.viewport_min = 0, this.threshold = .01, this.velocity = .3, this.ease = .3, this.wheelie_time = null, this.resize_time = null, "home" !== HP.router.getState().key && (this.$loading_track.addClass("right"), this.$instruct_track.addClass("right"), this.$scroll_icon.addClass("right")), i = HP.data.pages.work, e = 0, t = i.length; t > e; e++) s = i[e], this.assets.push(s.poster[0], s.poster[1]);
                return this.total = this.assets.length, setTimeout(function(e) {
                    return function() {
                        return e.$counter.addClass("counting").off(HP.utils.transition_end).one(HP.utils.transition_end, function() {
                            return e.loadImages()
                        })
                    }
                }(this), 666)
            }, e.prototype.loadImages = function() {
                var e, t, i, s;
                for (s = this.assets, e = 0, i = s.length; i > e; e++) t = s[e], this.loadOneImage(t);
                return this.loadingCount()
            }, e.prototype.loadOneImage = function(e) {
                var t;
                return t = $("<img />").attr({
                    src: e
                }).one("load", function(e) {
                    return function(t) {
                        return e.loaded++, e.updateProgress()
                    }
                }(this)), t[0].complete === !0 && t.trigger("load"), t[0]
            }, e.prototype.updateProgress = function() {
                var e;
                return e = Math.ceil(this.loaded / this.total * 100), setTimeout(function(t) {
                    return function() {
                        return t.loaded_perc = e
                    }
                }(this), 20 * e)
            }, e.prototype.loadingCount = function() {
                return this.count < 100 && (this.count < this.loaded_perc && (this.count += 1, this.$counter.text(("000" + Math.ceil(this.count)).slice(-3)), this.$loading_fill.css(HP.utils.transform, HP.utils.translate(0, this.count + "%"))), requestAnimationFrame(this.loadingCount)), this.count >= 100 ? (cancelAnimationFrame(this.loadingCount), this.loadComplete()) : void 0
            }, e.prototype.loadComplete = function() {
                return this.$counter.removeClass("counting").off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        return _.defer(function() {
                            return e.model.getE().addClass("totally-loaded").off(HP.utils.transition_end).one(HP.utils.transition_end, function() {
                                return e.$animated_logo.attr("style", ""), e.$animated_logo.attr("style", "background-image: url('"+ "')"), e.$instruct_inner.addClass("no-trans"), e.activate()
                            })
                        })
                    }
                }(this))
            }, e.prototype.onResize = function() {
                return this.cancelRAF(), clearTimeout(this.resize_time), this.resize_time = setTimeout(this.onResizeComplete, 250)
            }, e.prototype.onResizeComplete = function() {
                return clearTimeout(this.resize_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.onMousewheel = function(e) {
                var t;
                return this.cancelRAF(), clearTimeout(this.wheelie_time), this.wheelie_time = setTimeout(this.onMousewheelComplete, 250), t = e.deltaY * e.deltaFactor, this.perc = Math.min(Math.max(this.perc - .03 * t, 0), 100), this.direction = 0 > t ? 1 : -1, this.updateTrackFill(), !1
            }, e.prototype.onMousewheelComplete = function() {
                return clearTimeout(this.wheelie_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.updateDragVals = function() {
                return this.viewport_max = this.$instruct_track.height(), this.rounded_viewport_y = Math.round(this.viewport_max * (this.perc / 100)), this.viewport_y = this.rounded_viewport_y, this.target_y = this.rounded_viewport_y
            }, e.prototype.onMouseDown = function(e) {
                return 1 === e.which || HP.utils.is_mobile.any() ? (this.dragging = !0, this.viewport_max = this.$instruct_track.height(), this.cur_vel_y = 0, this.cur_inertia_y = 0, this.prev_y = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, this.last_motion = (new Date).getTime(), this.last_y = this.target_y, HP.$doc.off("mouseup.landing touchend.landing").one("mouseup.landing touchend.landing", this.onMouseUp)) : void 0
            }, e.prototype.onMouseMove = function(e) {
                var t, i, s, o;
                return this.dragging === !0 ? (e.preventDefault(), this.model.getV().addClass("dragging"), s = (new Date).getTime(), i = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, t = i - this.prev_y, Math.abs(t) < this.threshold ? !1 : (this.prev_y = i, this.last_motion = s, this.target_y -= t / 3, t = this.target_y - this.last_y, this.last_y = this.target_y, o = Math.abs(t), this.cur_vel_y += (o - this.cur_vel_y) * this.velocity, this.direction = 0 > t ? -1 : 1, !1)) : void 0
            }, e.prototype.onMouseUp = function() {
                var e, t;
                return this.dragging = !1, this.model.getV().hasClass("dragging") && (this.model.getV().removeClass("dragging"), this.cur_inertia_y = Math.abs(this.cur_vel_y), this.process_inertia = !0, t = (new Date).getTime(), e = Math.max(10, t - this.last_motion), this.last_motion = 0, this.cur_vel_y *= 1 - Math.min(1, Math.max(0, e / 100))), this.prev_y = 0
            }, e.prototype.updateRAF = function() {
                var e;
                return this.raf ? (this.process_inertia === !0 && (this.target_y += this.cur_vel_y * this.direction, this.cur_vel_y *= .9, this.target_y < this.viewport_min ? (this.cur_vel_y = 0, this.target_y = this.viewport_min, this.process_inertia = !1) : this.target_y > this.viewport_max && (this.cur_vel_y = 0, this.target_y = this.viewport_max, this.process_inertia = !1), this.cur_vel_y < .01 && (this.process_inertia = !1, this.cur_vel_y = 0)), e = (this.target_y - this.viewport_y) * this.ease, this.viewport_y += e, this.rounded_viewport_y = Math.round(this.viewport_y), this.perc = Math.min(Math.max(this.rounded_viewport_y / this.viewport_max * 100, 0), 100), this.updateTrackFill(), requestAnimationFrame(this.updateRAF)) : void 0
            }, e.prototype.cancelRAF = function() {
                return this.raf = !1, cancelAnimationFrame(this.updateRAF)
            }, e.prototype.updateTrackFill = function() {
                var e;
                return this.perc >= 100 && (this.cancelRAF(), this.destroy()), e = 1 - this.perc / 150, this.$instruct_inner.css("opacity", e), this.$instruct_fill.css(HP.utils.transform, HP.utils.translate(0, this.perc + "%"))
            }, e.prototype.activate = function() {
                return this.model.getE().off("mousedown.instruct touchstart.instruct mousemove.instruct touchmove.instruct").on("mousedown.instruct touchstart.instruct", this.onMouseDown).on("mousemove.instruct touchmove.instruct", this.onMouseMove), HP.$win.off("resize.instruct").on("resize.instruct", this.onResize).trigger("resize.instruct"), HP.$doc.off("mousewheel.instruct").on("mousewheel.instruct", this.onMousewheel)
            }, e.prototype.destroy = function() {
                return HP.$win.off("resize.instruct"), HP.$doc.off("mousewheel.instruct"), this.$instruct_inner.removeClass("no-trans"), this.model.getE().addClass("destroy").off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        return e.model.getE().off("mousedown.instruct touchstart.instruct mousemove.instruct touchmove.instruct"), HP.$body.trigger("rip_listeners"), e.model.getE().remove()
                    }
                }(this))
            }, e
        }(), t.exports = s
    }, {}],
    5: [function(e, t, i) {
        var s;
        s = function() {
            function e(e) {
                this.model = e.model
            }
            return e.prototype.setState = function(e) {
                return this.model.getE().css(HP.utils.transform, HP.utils.translate(-e + "%", 0)).off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        return HP.$body.trigger("rip_pages_transended")
                    }
                }(this))
            }, e
        }(), t.exports = s
    }, {}],
    6: [function(e, t, i) {
        var s, o, r, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        r = e("../models/work-detail-model"), o = e("./work-detail-controller"), s = function() {
            function e(e) {
                this.animateScrollReset = n(this.animateScrollReset, this), this.updateTrackFill = n(this.updateTrackFill, this), this.cancelRAF = n(this.cancelRAF, this), this.updateRAF = n(this.updateRAF, this), this.onMouseUp = n(this.onMouseUp, this), this.onMouseMove = n(this.onMouseMove, this), this.onMouseDown = n(this.onMouseDown, this), this.updateDragVals = n(this.updateDragVals, this), this.resetScroll = n(this.resetScroll, this), this.onMousewheelComplete = n(this.onMousewheelComplete, this), this.onMousewheel = n(this.onMousewheel, this), this.onResizeComplete = n(this.onResizeComplete, this), this.onResize = n(this.onResize, this), this.setState = n(this.setState, this), this.model = e.model, this.build()
            }
            return e.prototype.build = function() {
                return this.model.setV($(JST["work-page"](HP.data.pages.work))), this.model.getE().append(this.model.getV()), this.$projects = $("#projects", this.model.getV()), this.$project = $(".project", this.model.getV()), this.$track = $(".track", this.model.getV()), this.$fill = $(".fill", this.model.getV()), this.$current_article = null, this.$current_content = null, this.active_c = null, this.work_detail_m = [], this.work_detail_c = [], this.raf = !1, this.dragging = !1, this.process_inertia = !1, this.last_motion = 0, this.direction = 0, this.target_y = 0, this.last_y = 0, this.prev_y = 0, this.viewport_y = 0, this.rounded_viewport_y = 0, this.cur_inertia_y = 0, this.cur_vel_y = 0, this.viewport_max = 0, this.viewport_min = 0, this.threshold = .01, this.velocity = .3, this.ease = .3, this.perc = 0, this.wheelie_time = null, this.resize_time = null, _.each(this.$project, function(e) {
                    return function(t, i) {
                        var s, n;
                        return s = $(t), n = s.attr("id"), e.work_detail_m[n] = new r({
                            $el: s,
                            id: n
                        }), e.work_detail_c[n] = new o({
                            model: e.work_detail_m[n]
                        })
                    }
                }(this)), this.$posters = $(".posters", this.model.getV())
            }, e.prototype.setState = function() {
                return this.$projects.css(HP.utils.transform, HP.utils.translate(0, -100 * HP.project_index + "%")).off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        var t;
                        return t = HP.router.getPreviousState().key, HP.work_mode === !0 && "home" !== t && t !== HP.router.getState().key ? (e.suspendWorkDetail(t), e.loadImages(HP.router.getState().key)) : void 0
                    }
                }(this))
            }, e.prototype.onResize = function() {
                return this.cancelRAF(), clearTimeout(this.resize_time), this.resize_time = setTimeout(this.onResizeComplete, 250)
            }, e.prototype.onResizeComplete = function() {
                return clearTimeout(this.resize_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.onMousewheel = function(e) {
                var t;
                return this.cancelRAF(), clearTimeout(this.wheelie_time), this.wheelie_time = setTimeout(this.onMousewheelComplete, 250), t = e.deltaY * e.deltaFactor, this.rounded_viewport_y = Math.min(Math.max(Math.round(this.rounded_viewport_y - .33 * t), 0), this.viewport_max), this.viewport_y = this.rounded_viewport_y, this.target_y = this.rounded_viewport_y, this.perc = Math.min(Math.max(this.viewport_y / this.viewport_max * 100, 0), 100), this.direction = 0 > t ? 1 : -1, this.updateTrackFill(), !1
            }, e.prototype.onMousewheelComplete = function() {
                return clearTimeout(this.wheelie_time), this.updateDragVals(), this.raf = !0, this.updateRAF()
            }, e.prototype.resetScroll = function() {
                return this.perc = 0, this.rounded_viewport_y = 0, this.updateDragVals(), this.updateTrackFill()
            }, e.prototype.updateDragVals = function() {
                return this.viewport_max = this.$current_article.height() - this.$current_content.height(), this.rounded_viewport_y = Math.round(this.rounded_viewport_y), this.viewport_y = this.rounded_viewport_y, this.target_y = this.rounded_viewport_y
            }, e.prototype.onMouseDown = function(e) {
                return 1 === e.which || HP.utils.is_mobile.any() ? (this.dragging = !0, this.viewport_max = this.$current_article.height() - this.$current_content.height(), this.cur_vel_y = 0, this.cur_inertia_y = 0, this.prev_y = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, this.last_motion = (new Date).getTime(), this.last_y = this.target_y, HP.$doc.off("mouseup.landing touchend.landing").one("mouseup.landing touchend.landing", this.onMouseUp)) : void 0
            }, e.prototype.onMouseMove = function(e) {
                var t, i, s, o;
                return this.dragging === !0 ? (e.preventDefault(), this.model.getV().addClass("dragging"), s = (new Date).getTime(), i = HP.utils.is_mobile.any() ? e.originalEvent.targetTouches[0].pageY : e.pageY, t = i - this.prev_y, Math.abs(t) < this.threshold ? !1 : (this.prev_y = i, this.last_motion = s, this.target_y > 0 && this.target_y < this.viewport_max ? this.target_y -= t / 3 : this.target_y -= t / 10, t = this.target_y - this.last_y, this.last_y = this.target_y, o = Math.abs(t), this.cur_vel_y += (o - this.cur_vel_y) * this.velocity, this.direction = 0 > t ? -1 : 1, !1)) : void 0
            }, e.prototype.onMouseUp = function() {
                var e, t;
                return this.dragging = !1, this.model.getV().hasClass("dragging") && (this.model.getV().removeClass("dragging"), this.cur_inertia_y = Math.abs(this.cur_vel_y), this.process_inertia = !0, t = (new Date).getTime(), e = Math.max(10, t - this.last_motion), this.last_motion = 0, this.cur_vel_y *= 1 - Math.min(1, Math.max(0, e / 100))), this.prev_y = 0
            }, e.prototype.updateRAF = function() {
                var e;
                return this.raf ? (this.process_inertia === !0 && (this.target_y += this.cur_vel_y * this.direction, this.cur_vel_y *= .9, this.target_y < this.viewport_min ? (this.cur_vel_y = 0, this.target_y = this.viewport_min, this.process_inertia = !1) : this.target_y > this.viewport_max && (this.cur_vel_y = 0, this.target_y = this.viewport_max, this.process_inertia = !1), this.cur_vel_y < .01 && (this.process_inertia = !1, this.cur_vel_y = 0)), e = (this.target_y - this.viewport_y) * this.ease, this.viewport_y += e, this.rounded_viewport_y = Math.round(this.viewport_y), this.perc = Math.min(Math.max(this.rounded_viewport_y / this.viewport_max * 100, 0), 100), this.updateTrackFill(), requestAnimationFrame(this.updateRAF)) : void 0
            }, e.prototype.cancelRAF = function() {
                return this.raf = !1, cancelAnimationFrame(this.updateRAF)
            }, e.prototype.updateTrackFill = function() {
                return this.$fill.css(HP.utils.transform, HP.utils.translate(0, this.perc + "%")), this.$current_content.css(HP.utils.transform, HP.utils.translate(0, -this.rounded_viewport_y + "px"))
            }, e.prototype.animateScrollReset = function() {
                return this.cancelRAF(), this.$fill.addClass("trans"), this.resetScroll(), this.$fill.off(HP.utils.transition_end).one(HP.utils.transition_end, function(e) {
                    return function() {
                        return e.$fill.removeClass("trans"), e.raf = !0, e.updateRAF()
                    }
                }(this)), this.$current_content.css(HP.utils.transform, HP.utils.translate(0, this.rounded_viewport_y + "px"))
            }, e.prototype.loadImages = function(e) {
                return this.work_detail_c[e].loadImages()
            }, e.prototype.suspendWorkDetail = function(e) {
                return this.work_detail_c[e].suspend()
            }, e.prototype.listeners = function() {
                var e;
                return this.raf = !0, this.updateRAF(), e = HP.router.getPreviousState().key, "home" !== e && "about" !== e && 0 !== this.perc && this.animateScrollReset(), ("home" === e || "about" === e && 0 !== this.perc) && this.resetScroll(), HP.$body.off("mousedown.work touchstart.work mousemove.work touchmove.work").on("mousedown.work touchstart.work", this.onMouseDown).on("mousemove.work touchmove.work", this.onMouseMove), HP.$win.off("resize.work").on("resize.work", this.onResize).trigger("resize.work"), HP.$doc.off("mousewheel.work").on("mousewheel.work", this.onMousewheel)
            }, e.prototype.activate = function() {
                return this.setState(), HP.work_mode = !0, this.$track.addClass("show"), this.$project.removeClass("active").eq(HP.project_index).addClass("active"),
                    this.$posters.addClass("hide-front"), this.active_c = this.work_detail_c[HP.router.getState().key], this.active_c.activate(), this.$current_article = $(".project.active article", this.model.getV()), this.$current_content = $(".project.active .content", this.model.getV()), this.viewport_max = this.$current_article.height() - this.$current_content.height(), HP.virgin_route === !1 ? this.listeners() : void 0
            }, e.prototype.suspend = function() {
                return HP.work_mode = !1, this.active_c = null, this.cancelRAF(), this.$track.removeClass("show"), this.$project.removeClass("active"), this.$posters.removeClass("hide-front"), HP.$body.off("mousedown.work touchstart.work mousemove.work touchmove.work"), HP.$win.off("resize.work"), HP.$doc.off("mousewheel.work")
            }, e
        }(), t.exports = s
    }, {
        "../models/work-detail-model": 11,
        "./work-detail-controller": 7
    }],
    7: [function(e, t, i) {
        var s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        s = function() {
            function e(e) {
                this.onClickVideo = o(this.onClickVideo, this), this.loadImages = o(this.loadImages, this), this.model = e.model, this.id = this.model.getId(), this.build()
            }
            return e.prototype.build = function() {
                var e, t, i;
                return this.model.setV($(JST["work-detail-page"](_.findWhere(HP.data.pages.work, {
                    slug: this.id
                })))), this.model.getE().append(this.model.getV()), this.$content = $(".content", this.model.getV()), this.$article = $("article", this.model.getV()), this.$media_item = $(".media", this.model.getV()), this.$video = $(".video", this.model.getV()), this.$video_holder = $(".video-holder", this.model.getV()), this.loaded = !1, i = _.findIndex(HP.data.pages.work, {
                    slug: this.id
                }), i !== HP.data.pages.work.length - 1 ? (t = HP.data.pages.work[i + 1].slug, e = "<div class='roller-part'><div class='lava-link passage' data-href='/" + t + "'><h4>Следующий: " + HP.data.pages.work[i + 1].title + "<span class='tick'></span></h4></div></div>", $(".pagination", this.model.getE()).append(e)) : $(".pagination", this.model.getE()).remove()
            }, e.prototype.loadImages = function() {
                return this.loaded === !1 ? (_.each(this.$media_item, function(e) {
                    return function(t, i) {
                        var s, o;
                        return s = $(t), o = s.attr("data-src"), s.css("background-image", "url(" + o + ")"), e.loadOneImage(s, o)
                    }
                }(this)), this.loaded = !0) : void 0
            }, e.prototype.loadOneImage = function(e, t) {
                var i;
                return i = $("<img />").attr({
                    src: t
                }).one("load", function(t) {
                    return function(t) {
                        return e.addClass("loaded")
                    }
                }(this)), i[0].complete === !0 && i.trigger("load"), i[0]
            }, e.prototype.onClickVideo = function(e) {
                var t, i;
                return t = $(e.currentTarget), i = t.attr("data-id"), t.hasClass("playing") === !1 && t.hasClass("loaded") ? (t.addClass("playing"), $(".video-holder", t).empty().append("<iframe src='https://player.vimeo.com/video/" + i + "?color=ff3a1a&title=0&byline=0&portrait=0&autoplay=1&rel=0' width='720' height='405' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")) : void 0
            }, e.prototype.reset = function() {
                return this.loaded = !1, this.$video_holder.empty(), this.$video.removeClass("playing"), this.$media_item.css("background-image", "none").removeClass("loaded")
            }, e.prototype.activate = function() {
                return this.reset(), HP.virgin_route === !0 && this.loadImages(), this.$video.off("click").on("click", this.onClickVideo)
            }, e.prototype.suspend = function() {
                return this.reset(), this.$video.off("click")
            }, e
        }(), t.exports = s
    }, {}],
    8: [function(e, t, i) {
        var s;
        s = {
            loading: {
                copy: "Меня зовут Виктор.<br><span>Я делаю сайты-визитки<br>для строительных компаний.</span>"
            },
            pages: {
                about: {
					pullquote: ["реклама от 1 000 р."],
                    alt_quote: "реклама от 1 000 р.",
                    sub_quote: [""],
                    alt_sub_quote: "",
                    email: "salazckin@gmail.com",
                    socials: [{
                        name: "TELEGRAM",
                        link: "https://t.me/salazckin"
                    }, {
                        name: "TWITTER",
                        link: "https://twitter.com/VictorSalazckin"
                    }]
                },
                work: [{
                    slug: "purple",
                    title: "Застройщик",
                    category: "SVG анимация",
                    role: "Готова только главная страница.",
                    poster: ["wnc.png", "wnc.png"],
                    description: "",
                    website: "http://salazckin.github.io/first",
                    media: [{
                        type: "image",
                        src: "/images/1.png",
                        size: [1200, 613]
                    }, {
                        type: "image",
                        src: "/images/2.png",
                        size: [1200, 613]
                    }, {
                        type: "image",
                        src: "/images/3.png",
                        size: [1200, 613]
                    }]
                },{
                    slug: "yellow",
                    title: "Универсальный",
                    category: "SVG дизайн",
                    role: "Готова только главная страница.",
                    poster: ["yel.png", "yel.png"],
                    description: "",
                    website: "http://salazckin.github.io/first",
                    media: [{
                        type: "image",
                        src: "/images/ye.png",
                        size: [1024, 768]
                    }]
                }, {
                    slug: "white",
                    title: "Универсальный",
                    category: "Отличный сайт",
                    role: "Отличная мобильная версия",
                    poster: ["rer.png", "rer.png"],
                    description: "",
                    website: "http://salazckin.github.io/third",                   
                    media: [{
                        type: "image",
                        src: "/images/rer1.png",
                        size: [1200, 613]
                    }, {
                        type: "image",
                        src: "/images/rer2.png",
                        size: [1200, 613]
                    }]
                }, {
                    slug: "hammer",
                    title: "Ремонт",
                    category: "Анимированные элементы",
                    role: "мобильная версия не готова",
                    poster: ["pet1.png", "pet1.png"],
                    description: "",
                    website: "http://salazckin.github.io/fourth",
						media: [{
                        type: "image",
                        src: "/images/pet1.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/pet2.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/pet3.png",
                        size: [1024, 768]
                    }]
                }, {
                    slug: "clever",
                    title: "Умный дом",
                    category: "SVG анимация",
                    role: "мобильная версия не готова",
                    poster: ["mod.png", "mod.png"],
                    description: "",
                    website: "http://salazckin.github.io/sixth",                                     
                    media: [{
                        type: "image",
                        src: "/images/mod1.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/mod2.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/mod3.png",
                        size: [1024, 768]
                    }]
                }, 
				{
                    slug: "wood",
                    title: "Дома из бруса",
                    category: "3D анимация",
                    role: "мобильная версия не готова",
                    poster: ["ask.png", "ask.png"],
                    description: "",
                    website: "http://salazckin.github.io/seventh",                   
                    media: [{
                        type: "image",
                        src: "/images/dom1.png",
                        size: [1000, 650]
                    }, {
                        type: "image",
                        src: "/images/dom2.png",
                        size: [1000, 700]
                    }, {
                        type: "image",
                        src: "/images/dom3.png",
                        size: [1000, 768]
                    }, {
                        type: "image",
                        src: "/images/work/flyleaf/flyleaf04.jpg",
                        size: [1200, 530]
                    }]
                }, {
                    slug: "gen",
                    title: "Генподряд",
                    category: "одностраничник",
                    role: "",
                    poster: ["bour.png", "bour.png"],
                    description: "",
                    website: "http://salazckin.github.io/fifth",                   
                    media: [{
                        type: "image",
                        src: "/images/bo1.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/bo2.png",
                        size: [1024, 768]
                    }, {
                        type: "image",
                        src: "/images/bo3.png",
                        size: [1024, 768]
                    }]
                }]
            }
        }, t.exports = s
    }, {}],
    9: [function(e, t, i) {
        window.HP = window.HP || {}
    }, {}],
    10: [function(e, t, i) {
        var s;
        s = function() {
            function e(e) {
                this._$el = null, this._$view = null, this.setE(e.$el)
            }
            return e.prototype.getE = function() {
                return this._$el
            }, e.prototype.setE = function(e) {
                if (e.length > 0) return this._$el = e;
                throw "ERROR: $el does not exist"
            }, e.prototype.getV = function() {
                return this._$view
            }, e.prototype.setV = function(e) {
                if (e.length > 0) return this._$view = e;
                throw "ERROR: $view does not exist"
            }, e
        }(), t.exports = s
    }, {}],
    11: [function(e, t, i) {
        var s, o, r = function(e, t) {
                function i() {
                    this.constructor = e
                }
                for (var s in t) n.call(t, s) && (e[s] = t[s]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            },
            n = {}.hasOwnProperty;
        s = e("./base-model"), o = function(e) {
            function t(e) {
                t.__super__.constructor.call(this, e), this._id = "", this.setId(e.id)
            }
            return r(t, e), t.prototype.getId = function() {
                return this._id
            }, t.prototype.setId = function(e) {
                return this._id = e
            }, t
        }(s), t.exports = o
    }, {
        "./base-model": 10
    }],
    12: [function(e, t, i) {
        var s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        s = function() {
            function e() {
                this.onAppStateChange = o(this.onAppStateChange, this), this.onPassageClick = o(this.onPassageClick, this), HP.url_regex = /[^a-z0-9*:_-]+/gi, this.prev_state = History.getState(), this.state = History.getState(), this.routes = {}, this.observeSomeSweetEvents()
            }
            return e.prototype.observeSomeSweetEvents = function() {
                return History.Adapter.bind(window, "statechange", this.onAppStateChange), HP.$body.on("click", ".passage", this.onPassageClick)
            }, e.prototype.onPassageClick = function(e) {
                var t;
                return t = $(e.currentTarget).data("href"), History.pushState(null, null, t)
            }, e.prototype.onAppStateChange = function() {
                return this.prev_state = this.state, this.state = History.getState(), this.route(this.state.hash)
            }, e.prototype.sanitizeKey = function(e) {
                return e.replace(/^\/|\/$/g, "").split("/").join(":").replace(HP.url_regex, "")
            }, e.prototype.format = function(e) {
                var t;
                return t = {}, e = -1 !== e.indexOf("?") ? e.split("?")[0] : e, e = e.replace(/[\#\.]/g, ""), e = e.replace(/^(?!\/)(.+)$/, "/$1"), t = "/" === e ? {
                    key: "home",
                    url: e
                } : {
                    key: this.sanitizeKey(e),
                    url: e
                }
            }, e.prototype.route = function(e) {
                var t, i, s, o, r;
                if (r = this.format(e), null != this.routes[r.key]) {
                    for (o = this.routes[r.key].callbacks, i = 0, s = o.length; s > i; i++)(t = o[i])(this.format(this.state.hash));
                    return document.title = this.routes[r.key].title
                }
            }, e.prototype.on = function(e, t) {
                var i, s, o, r, n, a;
                if (a = this.format(e), -1 !== a.key.indexOf("*")) {
                    for (r = a.key.split(":")[0], n = _.keys(this.routes), i = 0, o = n.length; o > i; i++) s = n[i], -1 !== s.indexOf(r) && this.on(s, t);
                    return !1
                }
                if (null != this.routes[a.key] == !1) throw "Error: The route needs to be defined in routes.coffee!";
                return this.routes[a.key].callbacks.unshift(t)
            }, e.prototype.add = function(e, t) {
                var i;
                return i = this.format(e), this.routes[i.key] = {
                    callbacks: [],
                    title: t
                }
            }, e.prototype.getState = function() {
                return this.format(this.state.hash)
            }, e.prototype.getPreviousState = function() {
                return this.format(this.prev_state.hash)
            }, e
        }(), t.exports = s
    }, {}],
    13: [function(e, t, i) {
        var s;
        s = {
            transform: Modernizr.prefixed("transform").replace(/([A-Z])/g, function(e) {
                return function(e, t) {
                    return "-" + t.toLowerCase()
                }
            }(this)).replace(/^ms-/, "-ms-"),
            translate: function(e) {
                return function(e, t) {
                    var i, s;
                    return i = Modernizr.csstransforms3d ? "translate3d" : "translate", s = Modernizr.csstransforms3d ? "(" + e + ", " + t + ", 0)" : "(" + e + ", " + t + ")", i + s
                }
            }(this),
            transition_end: function(e) {
                return function() {
                    var e;
                    return e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    }, e[Modernizr.prefixed("transition")]
                }
            }(this)(),
            is_mobile: {
                Android: function() {
                    return /Android/i.test(navigator.userAgent)
                },
                BlackBerry: function() {
                    return /BlackBerry/i.test(navigator.userAgent)
                },
                iOS: function() {
                    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
                },
                Opera: function() {
                    return /Opera Mini/i.test(navigator.userAgent)
                },
                Windows: function() {
                    return /IEMobile/i.test(navigator.userAgent)
                },
                any: function() {
                    return /Android/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent) || /Opera Mini/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent)
                }
            }
        }, t.exports = s
    }, {}]
}, {}, [1]), window.JST || (window.JST = {}), window.JST["about-page"] = function(e) {
    e || (e = {});
    var t, i = [],
        s = function(e) {
            return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? r(e) : ""
        },
        o = e.safe,
        r = e.escape;
    return t = e.safe = function(e) {
            if (e && e.ecoSafe) return e;
            ("undefined" == typeof e || null == e) && (e = "");
            var t = new String(e);
            return t.ecoSafe = !0, t
        }, r || (r = e.escape = function(e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function() {
            (function() {
                var e, t, o, r, n, a, l, h, c, u, p;
                for (i.push('<div class="page-inner">\n  <div class="inner">\n    <div class="content">\n      <ul class="pull-quote">\n        '), h = this.pullquote, t = 0, n = h.length; n > t; t++) e = h[t], i.push("\n          <li>"), i.push(e), i.push("</li>\n        ");
                for (i.push('\n      </ul>\n      <ul class="sub-quote">\n        '), c = this.sub_quote, o = 0, a = c.length; a > o; o++) e = c[o], i.push("\n          <li>"), i.push(e), i.push("</li>\n        ");
                for (i.push('\n      </ul>\n      <ul class="alt-quote">\n        <li>'), i.push(this.alt_quote), i.push('</li>\n      </ul>\n      <ul class="alt-sub-quote">\n        <li>'), i.push(this.alt_sub_quote), i.push('</li>\n      </ul>\n      <a class="lava-link" href="mailto:'), i.push(s(this.email)), i.push('" target="_new"><h4>'), i.push(s(this.email)), i.push('<span class="tick right"></span></h4></a>\n    </div>\n    <ul class="socials">\n      '), u = this.socials, r = 0, l = u.length; l > r; r++) p = u[r], i.push('\n        <li><a class="lava-link" href="'), i.push(s(p.link)), i.push('" target="_new"><h4>'), i.push(p.name), i.push('<span class="tick right"></span></h4></a></li>\n      ');
                i.push("\n    </ul>\n  </div>\n</div>")
            }).call(this)
        }.call(e), e.safe = o, e.escape = r, i.join("")
}, window.JST || (window.JST = {}), window.JST["landing-page"] = function(e) {
    e || (e = {});
    var t, i = [],
        s = function(e) {
            return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? r(e) : ""
        },
        o = e.safe,
        r = e.escape;
    return t = e.safe = function(e) {
            if (e && e.ecoSafe) return e;
            ("undefined" == typeof e || null == e) && (e = "");
            var t = new String(e);
            return t.ecoSafe = !0, t
        }, r || (r = e.escape = function(e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function() {
            (function() {
                var e, t, o, r, n, a, l, h, c, u, p, d, g, m;
                for (i.push('<div class="page-inner hide">\n  <div class="inner">\n    <div id="logo">Github</div>\n    <div id="title-zone">\n      <div id="title-roller" class="roller">\n        <ul class="roller-inner">\n          '), u = this.pages.work, t = 0, n = u.length; n > t; t++) m = u[t], i.push('\n            <li class="roller-part">\n              <div class="lava-link passage" data-href="/'), i.push(s(m.slug)), i.push('"><h2>'), i.push(m.title), i.push('<span class="tick"></span></h2></div>\n            </li>\n          ');
                for (i.push('\n        </ul>\n      </div>\n      <div id="meta-roller" class="roller">\n        <div class="roller-inner">\n          '), p = this.pages.work, o = 0, a = p.length; a > o; o++) m = p[o], i.push('\n            <div class="roller-part">\n              <div class="lava-link passage" data-href="/'), i.push(s(m.slug)), i.push('"><h3>'), i.push(m.category), i.push("</h3><h4>"), i.push(m.role), i.push("</h4></div>\n            </div>\n          ");
                for (i.push('\n        </div>\n      </div>\n    </div>\n    <div id="ac-roller" class="roller">\n      <div class="roller-inner">\n        <div class="roller-part">\n          <div class="lava-link passage" data-href="/about"><h4>КОНТАКТЫ<span class="tick"></span></h4></div>\n        </div>\n        <div class="roller-part">\n          <div class="lava-link passage" data-href="/"><h4>НАЗАД<span class="tick"></span></h4></div>\n        </div>\n      </div>\n    </div>\n    <div id="pi-roller" class="roller">\n      <div class="roller-inner">\n        <div class="roller-part">\n          <div class="lava-link passage" data-href="/"><h4>МЕНЮ<span class="tick right"></span></h4></div>\n        </div>\n        <div class="roller-part">\n          <div class="lava-link"><h4>СКРЫТЬ<span class="tick right"></span></h4></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="control">\n    <span></span>\n    <span></span>\n  </div>\n  <div id="project-index">\n    <div id="project-index-inner">\n      <ul>\n        '), d = this.pages.work, e = r = 0, l = d.length; l > r; e = ++r) m = d[e], i.push('\n          <li style="height: '), i.push(s(100 / this.pages.work.length)), i.push('%;">\n            <h3><span>'), i.push(("000" + (e + 1)).slice(-3)), i.push(" - </span>"), i.push(m.title), i.push("</h3>\n          </li>\n        ");
                for (i.push('\n      </ul>\n    </div>\n  </div>\n  <div class="track">\n    <div class="track-inner">\n      <div class="fill"></div>\n      <ul>\n        '), g = this.pages.work, e = c = 0, h = g.length; h > c; e = ++c) m = g[e], i.push('\n          <li style="height: '), i.push(s(100 / this.pages.work.length)), i.push('%;" data-number="'), i.push(("000" + (e + 1)).slice(-3)), i.push('"></li>\n        ');
                i.push("\n      </ul>\n    </div>\n  </div>\n</div>")
            }).call(this)
        }.call(e), e.safe = o, e.escape = r, i.join("")
}, window.JST || (window.JST = {}), window.JST.loader = function(e) {
    e || (e = {});
    var t, i = [],
        s = e.safe,
        o = e.escape;
    return t = e.safe = function(e) {
            if (e && e.ecoSafe) return e;
            ("undefined" == typeof e || null == e) && (e = "");
            var t = new String(e);
            return t.ecoSafe = !0, t
        }, o || (o = e.escape = function(e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function() {
            (function() {
                i.push('<div id="loader-inner">\n  <div id="instruct-screen">\n    <div id="instruct-screen-inner">\n      <div id="animated-logo"></div>\n      <div id="directions">\n        <h2>'), i.push(this.copy), i.push('</h2>\n        <div id="scroll-zone">\n          <div id="scroll-icon"></div>\n          <div class="track">\n            <div class="track-inner">\n              <div class="fill"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="loading-screen">\n    <div class="track">\n      <div class="track-inner">\n        <div class="fill"></div>\n      </div>\n      <span id="counter">000</span>\n    </div>\n  </div>\n</div>')
            }).call(this)
        }.call(e), e.safe = s, e.escape = o, i.join("")
}, window.JST || (window.JST = {}), window.JST["work-detail-page"] = function(e) {
    e || (e = {});
    var t, i = [],
        s = function(e) {
            return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? r(e) : ""
        },
        o = e.safe,
        r = e.escape;
    return t = e.safe = function(e) {
            if (e && e.ecoSafe) return e;
            ("undefined" == typeof e || null == e) && (e = "");
            var t = new String(e);
            return t.ecoSafe = !0, t
        }, r || (r = e.escape = function(e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function() {
            (function() {
                var e, t, o, r, n, a, l, h, c, u, p, d;
                if (i.push('<div class="project-inner">\n  <div class="posters">\n    <div class="poster" style="background-image: url(\''), i.push(s(this.poster[0])), i.push('\');"></div>\n    <div class="poster" style="background-image: url(\''), i.push(s(this.poster[1])), i.push('\');"></div>\n  </div>\n  <div class="inner">\n    <div class="content">\n      <article>\n        <div class="meta">\n          <h2>'), i.push(this.title), i.push('<span class="tick"></span></h2>\n          <h3>'), i.push(this.category), i.push('<span class="tick"></span></h3>\n          <h4>'), i.push(this.role), i.push('</h4>\n          <div class="description"><span class="tick"></span><p>'), i.push(this.description), i.push("</p></div>\n          "), this.website && (i.push('\n            <p><a href="'), i.push(s(this.website)), i.push('" target="_new">перейти на сайт</a></p>\n          ')), i.push("\n          "), this.credits) {
                    for (i.push("\n            <ul>\n              <li>Credits:</li>\n              "), u = this.credits, t = 0, n = u.length; n > t; t++) e = u[t], i.push("\n                <li>"), i.push(e.copy), e.link ? (i.push(' - <a href="'), i.push(s(e.link)), i.push('" target="_new">'), i.push(e.name), i.push("</a>")) : e.name && (i.push(" - "), i.push(e.name)), i.push("</li>\n              ");
                    i.push("\n            </ul>\n          ")
                }
                if (i.push("\n          "), this.recognition) {
                    for (i.push("\n            <ul>\n              <li>Recognition:</li>\n              "), p = this.recognition, o = 0, a = p.length; a > o; o++) c = p[o], i.push("\n                <li>"), c.title && i.push(c.title), c.link && (i.push(' - <a href="'), i.push(s(c.link)), i.push('" target="_new">'), i.push(c.text), i.push("</a>")), i.push("</li>\n              ");
                    i.push("\n            </ul>\n          ")
                }
                for (i.push("\n        </div>\n        "), d = this.media, r = 0, l = d.length; l > r; r++) h = d[r], i.push("\n          "), "video" === h.type ? (i.push('\n            <div class="media video" data-id="'), i.push(s(h.id)), i.push('" data-src="'), i.push(s(h.src)), i.push('" style="padding-bottom: '), i.push(s(h.size[1] / h.size[0] * 100)), i.push('%">\n              <div class="video-holder"></div>\n              <div class="play-btn"></div>\n            </div>\n          ')) : (i.push('\n            <div class="media" data-src="'), i.push(s(h.src)), i.push('" style="padding-bottom: '), i.push(s(h.size[1] / h.size[0] * 100)), i.push('%"></div>\n          ')), i.push("\n        ");
                i.push('\n        <div class="pagination"></div>\n      </article>\n    </div>\n  </div>\n</div>')
            }).call(this)
        }.call(e), e.safe = o, e.escape = r, i.join("")
}, window.JST || (window.JST = {}), window.JST["work-page"] = function(e) {
    e || (e = {});
    var t, i = [],
        s = function(e) {
            return e && e.ecoSafe ? e : "undefined" != typeof e && null != e ? r(e) : ""
        },
        o = e.safe,
        r = e.escape;
    return t = e.safe = function(e) {
            if (e && e.ecoSafe) return e;
            ("undefined" == typeof e || null == e) && (e = "");
            var t = new String(e);
            return t.ecoSafe = !0, t
        }, r || (r = e.escape = function(e) {
            return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }),
        function() {
            (function() {
                var e, t, o;
                for (i.push('<div class="page-inner">\n  <div id="projects">\n    '), e = 0, t = this.length; t > e; e++) o = this[e], i.push('\n      <div id="'), i.push(s(o.slug)), i.push('" class="project"></div>\n    ');
                i.push('\n  </div>\n  <div class="track right">\n    <div class="track-inner">\n      <div class="fill"></div>\n    </div>\n  </div>\n</div>')
            }).call(this)
        }.call(e), e.safe = o, e.escape = r, i.join("")
};