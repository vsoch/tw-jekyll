!(function (n) {
    var r = {};
    function o(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    (o.m = n),
        (o.c = r),
        (o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
        }),
        (o.r = function (e) {
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = ""),
        o((o.s = 7));
})([
    function (e, t, n) {
        "use strict";
        function r(i, a, c, u) {
            return new (c = c || Promise)(function (e, t) {
                function n(e) {
                    try {
                        o(u.next(e));
                    } catch (e) {
                        t(e);
                    }
                }
                function r(e) {
                    try {
                        o(u.throw(e));
                    } catch (e) {
                        t(e);
                    }
                }
                function o(t) {
                    t.done
                        ? e(t.value)
                        : new c(function (e) {
                              e(t.value);
                          }).then(n, r);
                }
                o((u = u.apply(i, a || [])).next());
            });
        }
        function o(n, r) {
            var o,
                i,
                a,
                e,
                c = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: [],
                };
            return (
                (e = { next: t(0), throw: t(1), return: t(2) }),
                "function" == typeof Symbol &&
                    (e[Symbol.iterator] = function () {
                        return this;
                    }),
                e
            );
            function t(t) {
                return function (e) {
                    return (function (t) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; c; )
                            try {
                                if (((o = 1), i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done)) return a;
                                switch (((i = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return c.label++, { value: t[1], done: !1 };
                                    case 5:
                                        c.label++, (i = t[1]), (t = [0]);
                                        continue;
                                    case 7:
                                        (t = c.ops.pop()), c.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            c = 0;
                                            continue;
                                        }
                                        if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                                            c.label = t[1];
                                            break;
                                        }
                                        if (6 === t[0] && c.label < a[1]) {
                                            (c.label = a[1]), (a = t);
                                            break;
                                        }
                                        if (a && c.label < a[2]) {
                                            (c.label = a[2]), c.ops.push(t);
                                            break;
                                        }
                                        a[2] && c.ops.pop(), c.trys.pop();
                                        continue;
                                }
                                t = r.call(n, c);
                            } catch (e) {
                                (t = [6, e]), (i = 0);
                            } finally {
                                o = a = 0;
                            }
                        if (5 & t[0]) throw t[1];
                        return { value: t[0] ? t[1] : void 0, done: !0 };
                    })([t, e]);
                };
            }
        }
        n.r(t),
            n.d(t, "DT", function () {
                return u;
            }),
            n.d(t, "read", function () {
                return _;
            }),
            n.d(t, "readText", function () {
                return b;
            }),
            n.d(t, "setDebugLog", function () {
                return m;
            }),
            n.d(t, "suppressWarnings", function () {
                return h;
            }),
            n.d(t, "write", function () {
                return v;
            }),
            n.d(t, "writeText", function () {
                return y;
            });
        var i = ["text/plain", "text/html"],
            a = function () {
                (console.warn || console.log).call(arguments);
            }.bind(console, "[clipboard-polyfill]"),
            c = !0,
            u =
                ((f.prototype.setData = function (e, t) {
                    c && -1 === i.indexOf(e) && a("Unknown data type: " + e, "Call clipboard.suppressWarnings() to suppress this warning."), (this.m[e] = t);
                }),
                (f.prototype.getData = function (e) {
                    return this.m[e];
                }),
                (f.prototype.forEach = function (e) {
                    for (var t in this.m) e(this.m[t], t);
                }),
                f),
            l = function (e) {},
            s = !0;
        function f() {
            this.m = {};
        }
        var p = function () {
                (console.warn || console.log).apply(console, arguments);
            }.bind("[clipboard-polyfill]"),
            d = "text/plain";
        function m(e) {
            l = e;
        }
        function h() {
            c = s = !1;
        }
        function v(n) {
            return r(this, void 0, void 0, function () {
                var t;
                return o(this, function (e) {
                    if (
                        (s && !n.getData(d) && p("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), k())
                    ) {
                        if (
                            (function () {
                                var e = n.getData(d);
                                if (void 0 !== e) return window.clipboardData.setData("Text", e);
                                throw new Error("No `text/plain` value was specified.");
                            })()
                        )
                            return [2];
                        throw new Error("Copying failed, possibly because the user rejected it.");
                    }
                    if (E(n)) return l("regular execCopy worked"), [2];
                    if (-1 < navigator.userAgent.indexOf("Edge")) return l('UA "Edge" => assuming success'), [2];
                    if (j(document.body, n)) return l("copyUsingTempSelection worked"), [2];
                    if (
                        (function (e) {
                            var t = document.createElement("div");
                            t.setAttribute("style", "-webkit-user-select: text !important"), (t.textContent = "temporary element"), document.body.appendChild(t);
                            var n = j(t, e);
                            return document.body.removeChild(t), n;
                        })(n)
                    )
                        return l("copyUsingTempElem worked"), [2];
                    if (
                        void 0 !== (t = n.getData(d)) &&
                        (function (e) {
                            l("copyTextUsingDOM");
                            var t = document.createElement("div");
                            t.setAttribute("style", "-webkit-user-select: text !important");
                            var n = t;
                            t.attachShadow && (l("Using shadow DOM."), (n = t.attachShadow({ mode: "open" })));
                            var r = document.createElement("span");
                            (r.innerText = e), n.appendChild(r), document.body.appendChild(t), P(r);
                            var o = document.execCommand("copy");
                            return I(), document.body.removeChild(t), o;
                        })(t)
                    )
                        return l("copyTextUsingDOM worked"), [2];
                    throw new Error("Copy command failed.");
                });
            });
        }
        function y(t) {
            return r(this, void 0, void 0, function () {
                return o(this, function (e) {
                    return navigator.clipboard && navigator.clipboard.writeText ? (l("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(t)]) : [2, v(D(t))];
                });
            });
        }
        function _() {
            return r(this, void 0, void 0, function () {
                var t;
                return o(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = D), [4, b()];
                        case 1:
                            return [2, t.apply(void 0, [e.sent()])];
                    }
                });
            });
        }
        function b() {
            return r(this, void 0, void 0, function () {
                return o(this, function (e) {
                    if (navigator.clipboard && navigator.clipboard.readText) return l("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()];
                    if (k())
                        return (
                            l("Reading text using IE strategy."),
                            [
                                2,
                                (function () {
                                    return r(this, void 0, void 0, function () {
                                        var t;
                                        return o(this, function (e) {
                                            if ("" === (t = window.clipboardData.getData("Text"))) throw new Error("Empty clipboard or could not read plain text from clipboard");
                                            return [2, t];
                                        });
                                    });
                                })(),
                            ]
                        );
                    throw new Error("Read is not supported in your browser.");
                });
            });
        }
        var g = !1;
        function O() {
            g ||
                (s && p('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),
                (g = !0));
        }
        var S = {
                DT: u,
                setDebugLog: function (e) {
                    return O(), m(e);
                },
                suppressWarnings: function () {
                    return O(), h();
                },
                write: function (t) {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return O(), [2, v(t)];
                        });
                    });
                },
                writeText: function (t) {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return O(), [2, y(t)];
                        });
                    });
                },
                read: function () {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return O(), [2, _()];
                        });
                    });
                },
                readText: function () {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return O(), [2, b()];
                        });
                    });
                },
            },
            w = function () {
                this.success = !1;
            };
        function E(e) {
            var t = new w(),
                n = function (r, e, o) {
                    l("listener called"),
                        (r.success = !0),
                        e.forEach(function (e, t) {
                            var n = o.clipboardData;
                            n.setData(t, e), t === d && n.getData(t) !== e && (l("setting text/plain failed"), (r.success = !1));
                        }),
                        o.preventDefault();
                }.bind(this, t, e);
            document.addEventListener("copy", n);
            try {
                document.execCommand("copy");
            } finally {
                document.removeEventListener("copy", n);
            }
            return t.success;
        }
        function j(e, t) {
            P(e);
            var n = E(t);
            return I(), n;
        }
        function P(e) {
            var t = document.getSelection();
            if (t) {
                var n = document.createRange();
                n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n);
            }
        }
        function I() {
            var e = document.getSelection();
            e && e.removeAllRanges();
        }
        function D(e) {
            var t = new u();
            return t.setData(d, e), t;
        }
        function k() {
            return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData;
        }
        t.default = S;
    },
    function (e, t, n) {
        "use strict";
        window.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (e, t) {
                t = t || window;
                for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
            });
    },
    function (e, t, n) {
        "use strict";
        Element.prototype.closest ||
            (Element.prototype.closest = function (e) {
                var t = this;
                if (!document.documentElement.contains(t)) return null;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement;
                } while (null !== t);
                return null;
            });
    },
    function (e, t, n) {
        "use strict";
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    },
    function (e, t, n) {
        "use strict";
        "function" != typeof Object.assign &&
            (Object.assign = function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                }
                return t;
            });
    },
    function (e, t, n) {
        "use strict";
        "document" in self &&
            ("classList" in document.createElement("_")
                ? (function () {
                      var e = document.createElement("_");
                      if ((e.classList.add("c1", "c2"), !e.classList.contains("c2"))) {
                          var t = function (e) {
                              var r = DOMTokenList.prototype[e];
                              DOMTokenList.prototype[e] = function (e) {
                                  var t,
                                      n = arguments.length;
                                  for (t = 0; t < n; t++) (e = arguments[t]), r.call(this, e);
                              };
                          };
                          t("add"), t("remove");
                      }
                      if ((e.classList.toggle("c3", !1), e.classList.contains("c3"))) {
                          var n = DOMTokenList.prototype.toggle;
                          DOMTokenList.prototype.toggle = function (e, t) {
                              return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
                          };
                      }
                      e = null;
                  })()
                : (function (e) {
                      if ("Element" in e) {
                          var t = "classList",
                              n = "prototype",
                              r = e.Element[n],
                              o = Object,
                              i =
                                  String[n].trim ||
                                  function () {
                                      return this.replace(/^\s+|\s+$/g, "");
                                  },
                              a =
                                  Array[n].indexOf ||
                                  function (e) {
                                      for (var t = 0; t < this.length; t++) if (t in this && this[t] === e) return t;
                                      return -1;
                                  },
                              c = function (e, t) {
                                  (this.name = e), (this.code = DOMException[e]), (this.message = t);
                              },
                              u = function (e, t) {
                                  if ("" === t) throw new c("SYNTAX_ERR", "An invalid or illegal string was specified");
                                  if (/\s/.test(t)) throw new c("INVALID_CHARACTER_ERR", "String contains an invalid character");
                                  return a.call(e, t);
                              },
                              l = function (e) {
                                  for (var t = i.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], r = 0; r < n.length; r++) this.push(n[r]);
                                  this._updateClassName = function () {
                                      e.setAttribute("class", this.toString());
                                  };
                              },
                              s = (l[n] = []),
                              f = function () {
                                  return new l(this);
                              };
                          if (
                              ((c[n] = Error[n]),
                              (s.item = function (e) {
                                  return this[e] || null;
                              }),
                              (s.contains = function (e) {
                                  return -1 !== u(this, (e += ""));
                              }),
                              (s.add = function () {
                                  for (var e, t = arguments, n = 0, r = t.length, o = !1; -1 === u(this, (e = t[n] + "")) && (this.push(e), (o = !0)), ++n < r; );
                                  o && this._updateClassName();
                              }),
                              (s.remove = function () {
                                  var e,
                                      t,
                                      n = arguments,
                                      r = 0,
                                      o = n.length,
                                      i = !1;
                                  do {
                                      for (t = u(this, (e = n[r] + "")); -1 !== t; ) this.splice(t, 1), (i = !0), (t = u(this, e));
                                  } while (++r < o);
                                  i && this._updateClassName();
                              }),
                              (s.toggle = function (e, t) {
                                  e += "";
                                  var n = this.contains(e),
                                      r = n ? !0 !== t && "remove" : !1 !== t && "add";
                                  return r && this[r](e), !0 === t || !1 === t ? t : !n;
                              }),
                              (s.toString = function () {
                                  return this.join(" ");
                              }),
                              o.defineProperty)
                          ) {
                              var p = { get: f, enumerable: !0, configurable: !0 };
                              try {
                                  o.defineProperty(r, t, p);
                              } catch (e) {
                                  -2146823252 === e.number && ((p.enumerable = !1), o.defineProperty(r, t, p));
                              }
                          } else o[n].__defineGetter__ && r.__defineGetter__(t, f);
                      }
                  })(self));
    },
    function (e, t, n) {
        e.exports = (function () {
            "use strict";
            function c(e) {
                return (c =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function e() {
                return (e =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function t(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function y(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? t(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : t(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function f(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                (o = !0), (i = e);
                            } finally {
                                try {
                                    r || null == c.return || c.return();
                                } finally {
                                    if (o) throw i;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    n(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function a(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return r(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    n(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function n(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                }
            }
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var O,
                o,
                i,
                u,
                l,
                S = {},
                w = [],
                s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function E(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function j(e) {
                var t = e.parentNode;
                t && t.removeChild(e);
            }
            function p(e, t, n) {
                var r,
                    o,
                    i,
                    a = arguments,
                    c = {};
                for (i in t) "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (c[i] = t[i]);
                if (3 < arguments.length) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
                if ((null != n && (c.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === c[i] && (c[i] = e.defaultProps[i]);
                return b(e, c, r, o, null);
            }
            function b(e, t, n, r, o) {
                var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++O.__v : o };
                return null != O.vnode && O.vnode(i), i;
            }
            function P(e) {
                return e.children;
            }
            function I(e, t) {
                (this.props = e), (this.context = t);
            }
            function g(e, t) {
                if (null == t) return e.__ ? g(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? g(e) : null;
            }
            function d(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break;
                        }
                    return d(e);
                }
            }
            function m(e) {
                ((!e.__d && (e.__d = !0) && o.push(e) && !h.__r++) || u !== O.debounceRendering) && ((u = O.debounceRendering) || i)(h);
            }
            function h() {
                for (var e; (h.__r = o.length); )
                    (e = o.sort(function (e, t) {
                        return e.__v.__b - t.__v.__b;
                    })),
                        (o = []),
                        e.some(function (e) {
                            var t, n, r, o, i, a;
                            e.__d &&
                                ((i = (o = (t = e).__v).__e),
                                (a = t.__P) && ((n = []), ((r = E({}, o)).__v = o.__v + 1), T(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? g(o) : i, o.__h), L(n, o), o.__e != i && d(o)));
                        });
            }
            function D(e, t, n, r, o, i, a, c, u, l) {
                var s,
                    f,
                    p,
                    d,
                    m,
                    h,
                    v,
                    y = (r && r.__k) || w,
                    _ = y.length;
                for (n.__k = [], s = 0; s < t.length; s++)
                    if (
                        null !=
                        (d = n.__k[s] =
                            null == (d = t[s]) || "boolean" == typeof d
                                ? null
                                : "string" == typeof d || "number" == typeof d
                                ? b(null, d, null, null, d)
                                : Array.isArray(d)
                                ? b(P, { children: d }, null, null, null)
                                : 0 < d.__b
                                ? b(d.type, d.props, d.key, null, d.__v)
                                : d)
                    ) {
                        if (((d.__ = n), (d.__b = n.__b + 1), null === (p = y[s]) || (p && d.key == p.key && d.type === p.type))) y[s] = void 0;
                        else
                            for (f = 0; f < _; f++) {
                                if ((p = y[f]) && d.key == p.key && d.type === p.type) {
                                    y[f] = void 0;
                                    break;
                                }
                                p = null;
                            }
                        T(e, d, (p = p || S), o, i, a, c, u, l),
                            (m = d.__e),
                            (f = d.ref) && p.ref != f && ((v = v || []), p.ref && v.push(p.ref, null, d), v.push(f, d.__c || m, d)),
                            null != m
                                ? (null == h && (h = m),
                                  "function" == typeof d.type && null != d.__k && d.__k === p.__k ? (d.__d = u = k(d, u, e)) : (u = x(e, d, p, y, m, u)),
                                  l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : (e.value = ""))
                                : u && p.__e == u && u.parentNode != e && (u = g(p));
                    }
                for (n.__e = h, s = _; s--; ) null != y[s] && ("function" == typeof n.type && null != y[s].__e && y[s].__e == n.__d && (n.__d = g(r, s + 1)), M(y[s], y[s]));
                if (v) for (s = 0; s < v.length; s++) R(v[s], v[++s], v[++s]);
            }
            function k(e, t, n) {
                var r, o;
                for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && ((o.__ = e), (t = "function" == typeof o.type ? k(o, t, n) : x(n, o, o, e.__k, o.__e, t)));
                return t;
            }
            function v(e, t) {
                return (
                    (t = t || []),
                    null == e ||
                        "boolean" == typeof e ||
                        (Array.isArray(e)
                            ? e.some(function (e) {
                                  v(e, t);
                              })
                            : t.push(e)),
                    t
                );
            }
            function x(e, t, n, r, o, i) {
                var a, c, u;
                if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
                else if (null == n || o != i || null == o.parentNode)
                    e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
                    else {
                        for (c = i, u = 0; (c = c.nextSibling) && u < r.length; u += 2) if (c == o) break e;
                        e.insertBefore(o, i), (a = i);
                    }
                return void 0 !== a ? a : o.nextSibling;
            }
            function _(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : (e[t] = null == n ? "" : "number" != typeof n || s.test(t) ? n : n + "px");
            }
            function C(e, t, n, r, o) {
                var i;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) (n && t in n) || _(e.style, t, "");
                        if (n) for (t in n) (r && n[t] === r[t]) || _(e.style, t, n[t]);
                    }
                else if ("o" === t[0] && "n" === t[1])
                    (i = t !== (t = t.replace(/Capture$/, ""))),
                        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
                        e.l || (e.l = {}),
                        (e.l[t + i] = n),
                        n ? r || e.addEventListener(t, i ? N : A, i) : e.removeEventListener(t, i ? N : A, i);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                    else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e)
                        try {
                            e[t] = null == n ? "" : n;
                            break e;
                        } catch (e) {}
                    "function" == typeof n || (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
                }
            }
            function A(e) {
                this.l[e.type + !1](O.event ? O.event(e) : e);
            }
            function N(e) {
                this.l[e.type + !0](O.event ? O.event(e) : e);
            }
            function T(e, t, n, r, o, i, a, c, u) {
                var l,
                    s,
                    f,
                    p,
                    d,
                    m,
                    h,
                    v,
                    y,
                    _,
                    b,
                    g = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && ((u = n.__h), (c = t.__e = n.__e), (t.__h = null), (i = [c])), (l = O.__b) && l(t);
                try {
                    e: if ("function" == typeof g) {
                        if (
                            ((v = t.props),
                            (y = (l = g.contextType) && r[l.__c]),
                            (_ = l ? (y ? y.props.value : l.__) : r),
                            n.__c
                                ? (h = (s = t.__c = n.__c).__ = s.__E)
                                : ("prototype" in g && g.prototype.render ? (t.__c = s = new g(v, _)) : ((t.__c = s = new I(v, _)), (s.constructor = g), (s.render = H)),
                                  y && y.sub(s),
                                  (s.props = v),
                                  s.state || (s.state = {}),
                                  (s.context = _),
                                  (s.__n = r),
                                  (f = s.__d = !0),
                                  (s.__h = [])),
                            null == s.__s && (s.__s = s.state),
                            null != g.getDerivedStateFromProps && (s.__s == s.state && (s.__s = E({}, s.__s)), E(s.__s, g.getDerivedStateFromProps(v, s.__s))),
                            (p = s.props),
                            (d = s.state),
                            f)
                        )
                            null == g.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount);
                        else {
                            if (
                                (null == g.getDerivedStateFromProps && v !== p && null != s.componentWillReceiveProps && s.componentWillReceiveProps(v, _),
                                (!s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(v, s.__s, _)) || t.__v === n.__v)
                            ) {
                                (s.props = v), (s.state = s.__s), t.__v !== n.__v && (s.__d = !1), ((s.__v = t).__e = n.__e), (t.__k = n.__k), s.__h.length && a.push(s);
                                break e;
                            }
                            null != s.componentWillUpdate && s.componentWillUpdate(v, s.__s, _),
                                null != s.componentDidUpdate &&
                                    s.__h.push(function () {
                                        s.componentDidUpdate(p, d, m);
                                    });
                        }
                        (s.context = _),
                            (s.props = v),
                            (s.state = s.__s),
                            (l = O.__r) && l(t),
                            (s.__d = !1),
                            (s.__v = t),
                            (s.__P = e),
                            (l = s.render(s.props, s.state, s.context)),
                            (s.state = s.__s),
                            null != s.getChildContext && (r = E(E({}, r), s.getChildContext())),
                            f || null == s.getSnapshotBeforeUpdate || (m = s.getSnapshotBeforeUpdate(p, d)),
                            (b = null != l && l.type === P && null == l.key ? l.props.children : l),
                            D(e, Array.isArray(b) ? b : [b], t, n, r, o, i, a, c, u),
                            (s.base = t.__e),
                            (t.__h = null),
                            s.__h.length && a.push(s),
                            h && (s.__E = s.__ = null),
                            (s.__e = !1);
                    } else
                        null == i && t.__v === n.__v
                            ? ((t.__k = n.__k), (t.__e = n.__e))
                            : (t.__e = (function (e, t, n, r, o, i, a, c) {
                                  var u,
                                      l,
                                      s,
                                      f,
                                      p = n.props,
                                      d = t.props,
                                      m = t.type,
                                      h = 0;
                                  if (("svg" === m && (o = !0), null != i))
                                      for (; h < i.length; h++)
                                          if ((u = i[h]) && (u === e || (m ? u.localName == m : 3 == u.nodeType))) {
                                              (e = u), (i[h] = null);
                                              break;
                                          }
                                  if (null == e) {
                                      if (null === m) return document.createTextNode(d);
                                      (e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, d.is && d)), (i = null), (c = !1);
                                  }
                                  if (null === m) p === d || (c && e.data === d) || (e.data = d);
                                  else {
                                      if (((i = i && w.slice.call(e.childNodes)), (l = (p = n.props || S).dangerouslySetInnerHTML), (s = d.dangerouslySetInnerHTML), !c)) {
                                          if (null != i) for (p = {}, f = 0; f < e.attributes.length; f++) p[e.attributes[f].name] = e.attributes[f].value;
                                          (s || l) && ((s && ((l && s.__html == l.__html) || s.__html === e.innerHTML)) || (e.innerHTML = (s && s.__html) || ""));
                                      }
                                      if (
                                          ((function (e, t, n, r, o) {
                                              var i;
                                              for (i in n) "children" === i || "key" === i || i in t || C(e, i, null, n[i], r);
                                              for (i in t) (o && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || C(e, i, t[i], n[i], r);
                                          })(e, d, p, o, c),
                                          s)
                                      )
                                          t.__k = [];
                                      else if (((h = t.props.children), D(e, Array.isArray(h) ? h : [h], t, n, r, o && "foreignObject" !== m, i, a, e.firstChild, c), null != i)) for (h = i.length; h--; ) null != i[h] && j(i[h]);
                                      c ||
                                          ("value" in d && void 0 !== (h = d.value) && (h !== e.value || ("progress" === m && !h)) && C(e, "value", h, p.value, !1),
                                          "checked" in d && void 0 !== (h = d.checked) && h !== e.checked && C(e, "checked", h, p.checked, !1));
                                  }
                                  return e;
                              })(n.__e, t, n, r, o, i, a, u));
                    (l = O.diffed) && l(t);
                } catch (e) {
                    (t.__v = null), (!u && null == i) || ((t.__e = c), (t.__h = !!u), (i[i.indexOf(c)] = null)), O.__e(e, t, n);
                }
            }
            function L(e, t) {
                O.__c && O.__c(t, e),
                    e.some(function (t) {
                        try {
                            (e = t.__h),
                                (t.__h = []),
                                e.some(function (e) {
                                    e.call(t);
                                });
                        } catch (e) {
                            O.__e(e, t.__v);
                        }
                    });
            }
            function R(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : (e.current = t);
                } catch (e) {
                    O.__e(e, n);
                }
            }
            function M(e, t, n) {
                var r, o, i;
                if ((O.unmount && O.unmount(e), (r = e.ref) && ((r.current && r.current !== e.__e) || R(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), (e.__e = e.__d = void 0), null != (r = e.__c))) {
                    if (r.componentWillUnmount)
                        try {
                            r.componentWillUnmount();
                        } catch (e) {
                            O.__e(e, t);
                        }
                    r.base = r.__P = null;
                }
                if ((r = e.__k)) for (i = 0; i < r.length; i++) r[i] && M(r[i], t, n);
                null != o && j(o);
            }
            function H(e, t, n) {
                return this.constructor(e, n);
            }
            function q(e, t, n) {
                var r, o, i;
                O.__ && O.__(e, t),
                    (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
                    (i = []),
                    T(t, (e = ((!r && n) || t).__k = p(P, null, [e])), o || S, S, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? w.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r),
                    L(i, e);
            }
            function U(e, t) {
                q(e, t, U);
            }
            (O = {
                __e: function (e, t) {
                    for (var n, r, o; (t = t.__); )
                        if ((n = t.__c) && !n.__)
                            try {
                                if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)), null != n.componentDidCatch && (n.componentDidCatch(e), (o = n.__d)), o))
                                    return (n.__E = n);
                            } catch (t) {
                                e = t;
                            }
                    throw e;
                },
                __v: 0,
            }),
                (I.prototype.setState = function (e, t) {
                    var n;
                    (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = E({}, this.state))),
                        "function" == typeof e && (e = e(E({}, n), this.props)),
                        e && E(n, e),
                        null != e && this.__v && (t && this.__h.push(t), m(this));
                }),
                (I.prototype.forceUpdate = function (e) {
                    this.__v && ((this.__e = !0), e && this.__h.push(e), m(this));
                }),
                (I.prototype.render = P),
                (o = []),
                (i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout);
            var F,
                B,
                V,
                z = (l = h.__r = 0),
                W = [],
                K = O.__b,
                J = O.__r,
                $ = O.diffed,
                Q = O.__c,
                G = O.unmount;
            function Y(e, t) {
                O.__h && O.__h(B, e, z || t), (z = 0);
                var n = B.__H || (B.__H = { __: [], __h: [] });
                return e >= n.__.length && n.__.push({}), n.__[e];
            }
            function X(e, t, n) {
                var r = Y(F++, 2);
                return (
                    (r.t = e),
                    r.__c ||
                        ((r.__ = [
                            n ? n(t) : ae(void 0, t),
                            function (e) {
                                var t = r.t(r.__[0], e);
                                r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}));
                            },
                        ]),
                        (r.__c = B)),
                    r.__
                );
            }
            function Z(e, t) {
                var n = Y(F++, 4);
                !O.__s && ie(n.__H, t) && ((n.__ = e), (n.__H = t), B.__h.push(n));
            }
            function ee(e, t) {
                var n = Y(F++, 7);
                return ie(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
            }
            function te() {
                W.forEach(function (t) {
                    if (t.__P)
                        try {
                            t.__H.__h.forEach(re), t.__H.__h.forEach(oe), (t.__H.__h = []);
                        } catch (e) {
                            (t.__H.__h = []), O.__e(e, t.__v);
                        }
                }),
                    (W = []);
            }
            (O.__b = function (e) {
                (B = null), K && K(e);
            }),
                (O.__r = function (e) {
                    J && J(e), (F = 0);
                    var t = (B = e.__c).__H;
                    t && (t.__h.forEach(re), t.__h.forEach(oe), (t.__h = []));
                }),
                (O.diffed = function (e) {
                    $ && $(e);
                    var t = e.__c;
                    t &&
                        t.__H &&
                        t.__H.__h.length &&
                        ((1 !== W.push(t) && V === O.requestAnimationFrame) ||
                            (
                                (V = O.requestAnimationFrame) ||
                                function (e) {
                                    var t,
                                        n = function () {
                                            clearTimeout(r), ne && cancelAnimationFrame(t), setTimeout(e);
                                        },
                                        r = setTimeout(n, 100);
                                    ne && (t = requestAnimationFrame(n));
                                }
                            )(te)),
                        (B = void 0);
                }),
                (O.__c = function (e, n) {
                    n.some(function (t) {
                        try {
                            t.__h.forEach(re),
                                (t.__h = t.__h.filter(function (e) {
                                    return !e.__ || oe(e);
                                }));
                        } catch (e) {
                            n.some(function (e) {
                                e.__h && (e.__h = []);
                            }),
                                (n = []),
                                O.__e(e, t.__v);
                        }
                    }),
                        Q && Q(e, n);
                }),
                (O.unmount = function (e) {
                    G && G(e);
                    var t = e.__c;
                    if (t && t.__H)
                        try {
                            t.__H.__.forEach(re);
                        } catch (e) {
                            O.__e(e, t.__v);
                        }
                });
            var ne = "function" == typeof requestAnimationFrame;
            function re(e) {
                var t = B;
                "function" == typeof e.__c && e.__c(), (B = t);
            }
            function oe(e) {
                var t = B;
                (e.__c = e.__()), (B = t);
            }
            function ie(n, e) {
                return (
                    !n ||
                    n.length !== e.length ||
                    e.some(function (e, t) {
                        return e !== n[t];
                    })
                );
            }
            function ae(e, t) {
                return "function" == typeof t ? t(e) : t;
            }
            function ce(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function ue(e, t) {
                for (var n in e) if ("__source" !== n && !(n in t)) return !0;
                for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1;
            }
            function le(e) {
                this.props = e;
            }
            ((le.prototype = new I()).isPureReactComponent = !0),
                (le.prototype.shouldComponentUpdate = function (e, t) {
                    return ue(this.props, e) || ue(this.state, t);
                });
            var se = O.__b;
            O.__b = function (e) {
                e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), se && se(e);
            };
            var fe = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911,
                pe = function (e, t) {
                    return null == e ? null : v(v(e).map(t));
                },
                de = {
                    map: pe,
                    forEach: pe,
                    count: function (e) {
                        return e ? v(e).length : 0;
                    },
                    only: function (e) {
                        var t = v(e);
                        if (1 !== t.length) throw "Children.only";
                        return t[0];
                    },
                    toArray: v,
                },
                me = O.__e;
            function he() {
                (this.__u = 0), (this.t = null), (this.__b = null);
            }
            function ve(e) {
                var t = e.__.__c;
                return t && t.__e && t.__e(e);
            }
            function ye() {
                (this.u = null), (this.o = null);
            }
            (O.__e = function (e, t, n) {
                if (e.then) for (var r, o = t; (o = o.__); ) if ((r = o.__c) && r.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
                me(e, t, n);
            }),
                ((he.prototype = new I()).__c = function (e, t) {
                    var n = t.__c,
                        r = this;
                    null == r.t && (r.t = []), r.t.push(n);
                    var o = ve(r.__v),
                        i = !1,
                        a = function () {
                            i || ((i = !0), (n.componentWillUnmount = n.__c), o ? o(c) : c());
                        };
                    (n.__c = n.componentWillUnmount),
                        (n.componentWillUnmount = function () {
                            a(), n.__c && n.__c();
                        });
                    var c = function () {
                            if (!--r.__u) {
                                if (r.state.__e) {
                                    var e = r.state.__e;
                                    r.__v.__k[0] = (function t(e, n, r) {
                                        return (
                                            e &&
                                                ((e.__v = null),
                                                (e.__k =
                                                    e.__k &&
                                                    e.__k.map(function (e) {
                                                        return t(e, n, r);
                                                    })),
                                                e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = r))),
                                            e
                                        );
                                    })(e, e.__c.__P, e.__c.__O);
                                }
                                var t;
                                for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate();
                            }
                        },
                        u = !0 === t.__h;
                    r.__u++ || u || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(a, a);
                }),
                (he.prototype.componentWillUnmount = function () {
                    this.t = [];
                }),
                (he.prototype.render = function (e, t) {
                    if (this.__b) {
                        if (this.__v.__k) {
                            var n = document.createElement("div"),
                                r = this.__v.__k[0].__c;
                            this.__v.__k[0] = (function t(e, n, r) {
                                return (
                                    e &&
                                        (e.__c &&
                                            e.__c.__H &&
                                            (e.__c.__H.__.forEach(function (e) {
                                                "function" == typeof e.__c && e.__c();
                                            }),
                                            (e.__c.__H = null)),
                                        null != (e = ce({}, e)).__c && (e.__c.__P === r && (e.__c.__P = n), (e.__c = null)),
                                        (e.__k =
                                            e.__k &&
                                            e.__k.map(function (e) {
                                                return t(e, n, r);
                                            }))),
                                    e
                                );
                            })(this.__b, n, (r.__O = r.__P));
                        }
                        this.__b = null;
                    }
                    var o = t.__e && p(P, null, e.fallback);
                    return o && (o.__h = null), [p(P, null, t.__e ? null : e.children), o];
                });
            var _e = function (e, t, n) {
                if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)))
                    for (n = e.u; n; ) {
                        for (; 3 < n.length; ) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2];
                    }
            };
            function be(e) {
                return (
                    (this.getChildContext = function () {
                        return e.context;
                    }),
                    e.children
                );
            }
            function ge(e) {
                var n = this,
                    t = e.i;
                (n.componentWillUnmount = function () {
                    q(null, n.l), (n.l = null), (n.i = null);
                }),
                    n.i && n.i !== t && n.componentWillUnmount(),
                    e.__v
                        ? (n.l ||
                              ((n.i = t),
                              (n.l = {
                                  nodeType: 1,
                                  parentNode: t,
                                  childNodes: [],
                                  appendChild: function (e) {
                                      this.childNodes.push(e), n.i.appendChild(e);
                                  },
                                  insertBefore: function (e, t) {
                                      this.childNodes.push(e), n.i.appendChild(e);
                                  },
                                  removeChild: function (e) {
                                      this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e);
                                  },
                              })),
                          q(p(be, { context: n.context }, e.__v), n.l))
                        : n.l && n.componentWillUnmount();
            }
            function Oe(e, t) {
                return p(ge, { __v: e, i: t });
            }
            ((ye.prototype = new I()).__e = function (n) {
                var r = this,
                    o = ve(r.__v),
                    i = r.o.get(n);
                return (
                    i[0]++,
                    function (e) {
                        var t = function () {
                            r.props.revealOrder ? (i.push(e), _e(r, n, i)) : e();
                        };
                        o ? o(t) : t();
                    }
                );
            }),
                (ye.prototype.render = function (e) {
                    (this.u = null), (this.o = new Map());
                    var t = v(e.children);
                    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
                    return e.children;
                }),
                (ye.prototype.componentDidUpdate = ye.prototype.componentDidMount = function () {
                    var n = this;
                    this.o.forEach(function (e, t) {
                        _e(n, t, e);
                    });
                });
            var Se = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
                we = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            function Ee(e, t, n) {
                return null == t.__k && (t.textContent = ""), q(e, t), "function" == typeof n && n(), e ? e.__c : null;
            }
            (I.prototype.isReactComponent = {}),
                ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
                    Object.defineProperty(I.prototype, t, {
                        configurable: !0,
                        get: function () {
                            return this["UNSAFE_" + t];
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
                        },
                    });
                });
            var je = O.event;
            function Pe() {}
            function Ie() {
                return this.cancelBubble;
            }
            function De() {
                return this.defaultPrevented;
            }
            O.event = function (e) {
                return je && (e = je(e)), (e.persist = Pe), (e.isPropagationStopped = Ie), (e.isDefaultPrevented = De), (e.nativeEvent = e);
            };
            var ke,
                xe = {
                    configurable: !0,
                    get: function () {
                        return this.class;
                    },
                },
                Ce = O.vnode;
            O.vnode = function (e) {
                var t,
                    n = e.type,
                    r = e.props,
                    o = r;
                if ("string" == typeof n) {
                    for (var i in ((o = {}), r)) {
                        var a = r[i];
                        ("value" === i && "defaultValue" in r && null == a) ||
                            ("defaultValue" === i && "value" in r && null == r.value
                                ? (i = "value")
                                : "download" === i && !0 === a
                                ? (a = "")
                                : /ondoubleclick/i.test(i)
                                ? (i = "ondblclick")
                                : /^onchange(textarea|input)/i.test(i + n) && ((t = r.type), !("undefined" != typeof Symbol && "symbol" == c(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(t))
                                ? (i = "oninput")
                                : /^on(Ani|Tra|Tou|BeforeInp)/.test(i)
                                ? (i = i.toLowerCase())
                                : we.test(i)
                                ? (i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                                : null === a && (a = void 0),
                            (o[i] = a));
                    }
                    "select" == n &&
                        o.multiple &&
                        Array.isArray(o.value) &&
                        (o.value = v(r.children).forEach(function (e) {
                            e.props.selected = -1 != o.value.indexOf(e.props.value);
                        })),
                        "select" == n &&
                            null != o.defaultValue &&
                            (o.value = v(r.children).forEach(function (e) {
                                e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value;
                            })),
                        (e.props = o);
                }
                n && r.class != r.className && ((xe.enumerable = "className" in r), null != r.className && (o.class = r.className), Object.defineProperty(o, "className", xe)), (e.$$typeof = Se), Ce && Ce(e);
            };
            var Ae = O.__r;
            O.__r = function (e) {
                Ae && Ae(e), (ke = e.__c);
            };
            var Ne = {
                ReactCurrentDispatcher: {
                    current: {
                        readContext: function (e) {
                            return ke.__n[e.__c].props.value;
                        },
                    },
                },
            };
            function Te(e) {
                return !!e && e.$$typeof === Se;
            }
            "object" == ("undefined" == typeof performance ? "undefined" : c(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
            var Le = {
                useState: function (e) {
                    return (z = 1), X(ae, e);
                },
                useReducer: X,
                useEffect: function (e, t) {
                    var n = Y(F++, 3);
                    !O.__s && ie(n.__H, t) && ((n.__ = e), (n.__H = t), B.__H.__h.push(n));
                },
                useLayoutEffect: Z,
                useRef: function (e) {
                    return (
                        (z = 5),
                        ee(function () {
                            return { current: e };
                        }, [])
                    );
                },
                useImperativeHandle: function (e, t, n) {
                    (z = 6),
                        Z(
                            function () {
                                "function" == typeof e ? e(t()) : e && (e.current = t());
                            },
                            null == n ? n : n.concat(e)
                        );
                },
                useMemo: ee,
                useCallback: function (e, t) {
                    return (
                        (z = 8),
                        ee(function () {
                            return e;
                        }, t)
                    );
                },
                useContext: function (e) {
                    var t = B.context[e.__c],
                        n = Y(F++, 9);
                    return (n.__c = e), t ? (null == n.__ && ((n.__ = !0), t.sub(B)), t.props.value) : e.__;
                },
                useDebugValue: function (e, t) {
                    O.useDebugValue && O.useDebugValue(t ? t(e) : e);
                },
                version: "16.8.0",
                Children: de,
                render: Ee,
                hydrate: function (e, t, n) {
                    return U(e, t), "function" == typeof n && n(), e ? e.__c : null;
                },
                unmountComponentAtNode: function (e) {
                    return !!e.__k && (q(null, e), !0);
                },
                createPortal: Oe,
                createElement: p,
                createContext: function (e, r) {
                    var t = {
                        __c: (r = "__cC" + l++),
                        __: e,
                        Consumer: function (e, t) {
                            return e.children(t);
                        },
                        Provider: function (e) {
                            var n, t;
                            return (
                                this.getChildContext ||
                                    ((n = []),
                                    (((t = {})[r] = this).getChildContext = function () {
                                        return t;
                                    }),
                                    (this.shouldComponentUpdate = function (e) {
                                        this.props.value !== e.value && n.some(m);
                                    }),
                                    (this.sub = function (e) {
                                        n.push(e);
                                        var t = e.componentWillUnmount;
                                        e.componentWillUnmount = function () {
                                            n.splice(n.indexOf(e), 1), t && t.call(e);
                                        };
                                    })),
                                e.children
                            );
                        },
                    };
                    return (t.Provider.__ = t.Consumer.contextType = t);
                },
                createFactory: function (e) {
                    return p.bind(null, e);
                },
                cloneElement: function (e) {
                    return Te(e)
                        ? function (e, t, n) {
                              var r,
                                  o,
                                  i,
                                  a = arguments,
                                  c = E({}, e.props);
                              for (i in t) "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (c[i] = t[i]);
                              if (3 < arguments.length) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
                              return null != n && (c.children = n), b(e.type, c, r || e.key, o || e.ref, null);
                          }.apply(null, arguments)
                        : e;
                },
                createRef: function () {
                    return { current: null };
                },
                Fragment: P,
                isValidElement: Te,
                findDOMNode: function (e) {
                    return (e && (e.base || (1 === e.nodeType && e))) || null;
                },
                Component: I,
                PureComponent: le,
                memo: function (t, r) {
                    function n(e) {
                        var t = this.props.ref,
                            n = t == e.ref;
                        return !n && t && (t.call ? t(null) : (t.current = null)), r ? !r(this.props, e) || !n : ue(this.props, e);
                    }
                    function e(e) {
                        return (this.shouldComponentUpdate = n), p(t, e);
                    }
                    return (e.displayName = "Memo(" + (t.displayName || t.name) + ")"), (e.prototype.isReactComponent = !0), (e.__f = !0), e;
                },
                forwardRef: function (r) {
                    function e(e, t) {
                        var n = ce({}, e);
                        return delete n.ref, r(n, (t = e.ref || t) && ("object" != c(t) || "current" in t) ? t : null);
                    }
                    return (e.$$typeof = fe), ((e.render = e).prototype.isReactComponent = e.__f = !0), (e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")"), e;
                },
                unstable_batchedUpdates: function (e, t) {
                    return e(t);
                },
                StrictMode: P,
                Suspense: he,
                SuspenseList: ye,
                lazy: function (t) {
                    var n, r, o;
                    function e(e) {
                        if (
                            (n ||
                                (n = t()).then(
                                    function (e) {
                                        r = e.default || e;
                                    },
                                    function (e) {
                                        o = e;
                                    }
                                ),
                            o)
                        )
                            throw o;
                        if (!r) throw n;
                        return p(r, e);
                    }
                    return (e.displayName = "Lazy"), (e.__f = !0), e;
                },
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ne,
            };
            function Re() {
                return Le.createElement(
                    "svg",
                    { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" },
                    Le.createElement("path", {
                        d:
                            "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
                        strokeWidth: "1.2",
                        stroke: "currentColor",
                        fill: "none",
                        strokeLinecap: "square",
                    })
                );
            }
            function Me() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" },
                    Le.createElement("path", {
                        d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                        stroke: "currentColor",
                        fill: "none",
                        fillRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    })
                );
            }
            var He = ["translations"];
            function qe() {
                return (qe =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var Ue = Le.forwardRef(function (e, t) {
                var n = e.translations,
                    r = void 0 === n ? {} : n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(e, He),
                    i = r.buttonText,
                    a = void 0 === i ? "Search" : i,
                    c = r.buttonAriaLabel,
                    u = void 0 === c ? "Search" : c,
                    l = ee(function () {
                        return "undefined" != typeof navigator ? (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl") : null;
                    }, []);
                return Le.createElement(
                    "button",
                    qe({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u }, o, { ref: t }),
                    Le.createElement("span", { className: "DocSearch-Button-Container" }, Le.createElement(Me, null), Le.createElement("span", { className: "DocSearch-Button-Placeholder" }, a)),
                    Le.createElement(
                        "span",
                        { className: "DocSearch-Button-Keys" },
                        null !== l &&
                            Le.createElement(
                                Le.Fragment,
                                null,
                                Le.createElement("span", { className: "DocSearch-Button-Key" }, "Ctrl" === l ? Le.createElement(Re, null) : l),
                                Le.createElement("span", { className: "DocSearch-Button-Key" }, "K")
                            )
                    )
                );
            });
            function Fe(e) {
                return e.reduce(function (e, t) {
                    return e.concat(t);
                }, []);
            }
            var Be = 0;
            function Ve(e) {
                return 0 === e.collections.length
                    ? 0
                    : e.collections.reduce(function (e, t) {
                          return e + t.items.length;
                      }, 0);
            }
            var ze = function () {},
                We = [{ segment: "autocomplete-core", version: "1.5.0" }];
            function Ke(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Je(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function $e(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Je(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : Je(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function Qe(e, t, n, r) {
                if (!n) return null;
                if (e < 0 && (null === t || (null !== r && 0 === t))) return n + e;
                var o = (null === t ? -1 : t) + e;
                return o <= -1 || n <= o ? (null === r ? null : 0) : o;
            }
            function Ge(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ye(e) {
                var t = (function (n) {
                    var e = n.collections
                        .map(function (e) {
                            return e.items.length;
                        })
                        .reduce(function (e, t, n) {
                            var r = (e[n - 1] || 0) + t;
                            return e.push(r), e;
                        }, [])
                        .reduce(function (e, t) {
                            return t <= n.activeItemId ? e + 1 : e;
                        }, 0);
                    return n.collections[e];
                })(e);
                if (!t) return null;
                var n =
                        t.items[
                            (function (e) {
                                for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
                                    var a = t.collections[o];
                                    if (a === n) {
                                        r = !0;
                                        break;
                                    }
                                    (i += a.items.length), o++;
                                }
                                return t.activeItemId - i;
                            })({ state: e, collection: t })
                        ],
                    r = t.source;
                return { item: n, itemInputValue: r.getItemInputValue({ item: n, state: e }), itemUrl: r.getItemUrl({ item: n, state: e }), source: r };
            }
            function Xe(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ze(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Xe(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : Xe(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function et(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function tt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function nt(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? tt(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : tt(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function rt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function ot(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? rt(Object(n), !0).forEach(function (e) {
                              it(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : rt(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function it(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
            function at(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function ct(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function ut(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? ct(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : ct(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function lt(e) {
                return Boolean(e.execute);
            }
            function st(e) {
                var t = e
                    .reduce(function (e, t) {
                        if (!lt(t)) return e.push(t), e;
                        var n = t.searchClient,
                            r = t.execute,
                            o = t.requests,
                            i = e.find(function (e) {
                                return lt(t) && lt(e) && e.searchClient === n && e.execute === r;
                            });
                        if (i) {
                            var a;
                            (a = i.items).push.apply(
                                a,
                                (function (e) {
                                    return (
                                        (function (e) {
                                            if (Array.isArray(e)) return at(e);
                                        })(e) ||
                                        (function (e) {
                                            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                        })(e) ||
                                        (function (e) {
                                            if (e) {
                                                if ("string" == typeof e) return at(e, void 0);
                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                return (
                                                    "Object" === t && e.constructor && (t = e.constructor.name),
                                                    "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? at(e, void 0) : void 0
                                                );
                                            }
                                        })(e) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()
                                    );
                                })(o)
                            );
                        } else {
                            var c = { execute: r, items: o, searchClient: n };
                            e.push(c);
                        }
                        return e;
                    }, [])
                    .map(function (e) {
                        if (!lt(e)) return Promise.resolve(e);
                        var t = e,
                            n = t.execute,
                            r = t.items;
                        return n({ searchClient: t.searchClient, requests: r });
                    });
                return Promise.all(t).then(function (e) {
                    return Fe(e);
                });
            }
            var ft = ["event", "nextState", "props", "query", "refresh", "store"];
            function pt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function dt(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? pt(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : pt(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            var mt,
                ht,
                vt,
                yt = null,
                _t =
                    ((ht = mt = -1),
                    (vt = void 0),
                    function (e) {
                        var t = ++mt;
                        return Promise.resolve(e).then(function (e) {
                            return vt && t < ht ? vt : ((ht = t), (vt = e));
                        });
                    });
            function bt(e) {
                var u = e.event,
                    t = e.nextState,
                    l = void 0 === t ? {} : t,
                    s = e.props,
                    f = e.query,
                    p = e.refresh,
                    d = e.store,
                    m = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(e, ft);
                yt && s.environment.clearTimeout(yt);
                var h = m.setCollections,
                    v = m.setIsOpen,
                    n = m.setQuery,
                    r = m.setActiveItemId,
                    y = m.setStatus;
                if ((n(f), r(s.defaultActiveItemId), f || !1 !== s.openOnFocus))
                    return (
                        y("loading"),
                        (yt = s.environment.setTimeout(function () {
                            y("stalled");
                        }, s.stallThreshold)),
                        _t(
                            s.getSources(dt({ query: f, refresh: p, state: d.getState() }, m)).then(function (t) {
                                return Promise.all(
                                    t.map(function (t) {
                                        return Promise.resolve(t.getItems(dt({ query: f, refresh: p, state: d.getState() }, m))).then(function (e) {
                                            return (function (t, n) {
                                                return (
                                                    (e = t),
                                                    Boolean(null == e ? void 0 : e.execute)
                                                        ? ut(
                                                              ut({}, t),
                                                              {},
                                                              {
                                                                  requests: t.queries.map(function (e) {
                                                                      return { query: e, sourceId: n, transformResponse: t.transformResponse };
                                                                  }),
                                                              }
                                                          )
                                                        : { items: t, sourceId: n }
                                                );
                                                var e;
                                            })(e, t.sourceId);
                                        });
                                    })
                                )
                                    .then(st)
                                    .then(function (e) {
                                        return (function (a, e) {
                                            return e.map(function (t) {
                                                var e,
                                                    n = a.filter(function (e) {
                                                        return e.sourceId === t.sourceId;
                                                    }),
                                                    r = n.map(function (e) {
                                                        return e.items;
                                                    }),
                                                    o = n[0].transformResponse,
                                                    i = o
                                                        ? o({
                                                              results: (e = r.map(function (t) {
                                                                  var e;
                                                                  return Ze(
                                                                      Ze({}, t),
                                                                      {},
                                                                      {
                                                                          hits:
                                                                              null === (e = t.hits) || void 0 === e
                                                                                  ? void 0
                                                                                  : e.map(function (e) {
                                                                                        return Ze(Ze({}, e), {}, { __autocomplete_indexName: t.index, __autocomplete_queryID: t.queryID });
                                                                                    }),
                                                                      }
                                                                  );
                                                              })),
                                                              hits: e
                                                                  .map(function (e) {
                                                                      return e.hits;
                                                                  })
                                                                  .filter(Boolean),
                                                              facetHits: e
                                                                  .map(function (e) {
                                                                      var t;
                                                                      return null === (t = e.facetHits) || void 0 === t
                                                                          ? void 0
                                                                          : t.map(function (e) {
                                                                                return { label: e.value, count: e.count, _highlightResult: { label: { value: e.highlighted } } };
                                                                            });
                                                                  })
                                                                  .filter(Boolean),
                                                          })
                                                        : r;
                                                return (
                                                    i.every(Boolean),
                                                    'The `getItems` function from source "'
                                                        .concat(t.sourceId, '" must return an array of items but returned ')
                                                        .concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),
                                                    { source: t, items: i }
                                                );
                                            });
                                        })(e, t);
                                    })
                                    .then(function (e) {
                                        return (function (e) {
                                            var t = e.collections,
                                                n = e.props,
                                                r = e.state,
                                                o = t.reduce(function (e, t) {
                                                    return ot(
                                                        ot({}, e),
                                                        {},
                                                        it(
                                                            {},
                                                            t.source.sourceId,
                                                            ot(
                                                                ot({}, t.source),
                                                                {},
                                                                {
                                                                    getItems: function () {
                                                                        return Fe(t.items);
                                                                    },
                                                                }
                                                            )
                                                        )
                                                    );
                                                }, {});
                                            return Fe(n.reshape({ sources: Object.values(o), sourcesBySourceId: o, state: r }))
                                                .filter(Boolean)
                                                .map(function (e) {
                                                    return { source: e, items: e.getItems() };
                                                });
                                        })({ collections: e, props: s, state: d.getState() });
                                    });
                            })
                        )
                            .then(function (e) {
                                var t;
                                y("idle"), h(e);
                                var n = s.shouldPanelOpen({ state: d.getState() });
                                v(null !== (t = l.isOpen) && void 0 !== t ? t : (s.openOnFocus && !f && n) || n);
                                var r = Ye(d.getState());
                                if (null !== d.getState().activeItemId && r) {
                                    var o = r.item,
                                        i = r.itemInputValue,
                                        a = r.itemUrl,
                                        c = r.source;
                                    c.onActive(dt({ event: u, item: o, itemInputValue: i, itemUrl: a, refresh: p, source: c, state: d.getState() }, m));
                                }
                            })
                            .finally(function () {
                                yt && s.environment.clearTimeout(yt);
                            })
                    );
                var o,
                    i = d.getState().collections.map(function (e) {
                        return dt(dt({}, e), {}, { items: [] });
                    });
                return (
                    y("idle"),
                    h(i),
                    v(null !== (o = l.isOpen) && void 0 !== o ? o : s.shouldPanelOpen({ state: d.getState() })),
                    _t(i).then(function () {
                        return Promise.resolve();
                    })
                );
            }
            var gt = ["event", "props", "refresh", "store"];
            function Ot(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function St(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Ot(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : Ot(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            var wt = ["props", "refresh", "store"],
                Et = ["inputElement", "formElement", "panelElement"],
                jt = ["inputElement"],
                Pt = ["inputElement", "maxLength"],
                It = ["item", "source"];
            function Dt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function kt(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Dt(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : Dt(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function xt(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
            }
            function Ct(e) {
                var u = e.props,
                    l = e.refresh,
                    s = e.store,
                    f = xt(e, wt);
                return {
                    getEnvironmentProps: function (e) {
                        var t = e.inputElement,
                            n = e.formElement,
                            o = e.panelElement;
                        return kt(
                            {
                                onTouchStart: function (r) {
                                    !1 !== s.getState().isOpen &&
                                        r.target !== t &&
                                        !1 ===
                                            [n, o].some(function (e) {
                                                return (t = e), (n = r.target), t === n || t.contains(n);
                                                var t, n;
                                            }) &&
                                        s.dispatch("blur", null);
                                },
                                onTouchMove: function (e) {
                                    !1 !== s.getState().isOpen && t === u.environment.document.activeElement && e.target !== t && t.blur();
                                },
                            },
                            xt(e, Et)
                        );
                    },
                    getRootProps: function (e) {
                        return kt(
                            { role: "combobox", "aria-expanded": s.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": s.getState().isOpen ? "".concat(u.id, "-list") : void 0, "aria-labelledby": "".concat(u.id, "-label") },
                            e
                        );
                    },
                    getFormProps: function (n) {
                        return (
                            n.inputElement,
                            kt(
                                {
                                    action: "",
                                    noValidate: !0,
                                    role: "search",
                                    onSubmit: function (e) {
                                        var t;
                                        e.preventDefault(), u.onSubmit(kt({ event: e, refresh: l, state: s.getState() }, f)), s.dispatch("submit", null), null === (t = n.inputElement) || void 0 === t || t.blur();
                                    },
                                    onReset: function (e) {
                                        var t;
                                        e.preventDefault(), u.onReset(kt({ event: e, refresh: l, state: s.getState() }, f)), s.dispatch("reset", null), null === (t = n.inputElement) || void 0 === t || t.focus();
                                    },
                                },
                                xt(n, jt)
                            )
                        );
                    },
                    getLabelProps: function (e) {
                        return kt({ htmlFor: "".concat(u.id, "-input"), id: "".concat(u.id, "-label") }, e);
                    },
                    getInputProps: function (t) {
                        function n(e) {
                            (u.openOnFocus || Boolean(s.getState().query)) && bt(kt({ event: e, props: u, query: s.getState().completion || s.getState().query, refresh: l, store: s }, f)), s.dispatch("focus", null);
                        }
                        var e = "ontouchstart" in u.environment,
                            r = t || {},
                            o = (r.inputElement, r.maxLength),
                            i = void 0 === o ? 512 : o,
                            a = xt(r, Pt),
                            c = Ye(s.getState());
                        return kt(
                            {
                                "aria-autocomplete": "both",
                                "aria-activedescendant": s.getState().isOpen && null !== s.getState().activeItemId ? "".concat(u.id, "-item-").concat(s.getState().activeItemId) : void 0,
                                "aria-controls": s.getState().isOpen ? "".concat(u.id, "-list") : void 0,
                                "aria-labelledby": "".concat(u.id, "-label"),
                                value: s.getState().completion || s.getState().query,
                                id: "".concat(u.id, "-input"),
                                autoComplete: "off",
                                autoCorrect: "off",
                                autoCapitalize: "off",
                                enterKeyHint: null != c && c.itemUrl ? "go" : "search",
                                spellCheck: "false",
                                autoFocus: u.autoFocus,
                                placeholder: u.placeholder,
                                maxLength: i,
                                type: "search",
                                onChange: function (e) {
                                    bt(kt({ event: e, props: u, query: e.currentTarget.value.slice(0, i), refresh: l, store: s }, f));
                                },
                                onKeyDown: function (e) {
                                    !(function (e) {
                                        var i = e.event,
                                            t = e.props,
                                            a = e.refresh,
                                            c = e.store,
                                            u = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    o = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            r,
                                                            o = {},
                                                            i = Object.keys(e);
                                                        for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                                        return o;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var i = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                                }
                                                return o;
                                            })(e, gt);
                                        if ("ArrowUp" === i.key || "ArrowDown" === i.key) {
                                            var n = function () {
                                                    var e = t.environment.document.getElementById("".concat(t.id, "-item-").concat(c.getState().activeItemId));
                                                    e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
                                                },
                                                r = function () {
                                                    var e = Ye(c.getState());
                                                    if (null !== c.getState().activeItemId && e) {
                                                        var t = e.item,
                                                            n = e.itemInputValue,
                                                            r = e.itemUrl,
                                                            o = e.source;
                                                        o.onActive(St({ event: i, item: t, itemInputValue: n, itemUrl: r, refresh: a, source: o, state: c.getState() }, u));
                                                    }
                                                };
                                            i.preventDefault(),
                                                !1 === c.getState().isOpen && (t.openOnFocus || Boolean(c.getState().query))
                                                    ? bt(St({ event: i, props: t, query: c.getState().query, refresh: a, store: c }, u)).then(function () {
                                                          c.dispatch(i.key, { nextActiveItemId: t.defaultActiveItemId }), r(), setTimeout(n, 0);
                                                      })
                                                    : (c.dispatch(i.key, {}), r(), n());
                                        } else if ("Escape" === i.key) i.preventDefault(), c.dispatch(i.key, null);
                                        else if ("Enter" === i.key) {
                                            if (
                                                null === c.getState().activeItemId ||
                                                c.getState().collections.every(function (e) {
                                                    return 0 === e.items.length;
                                                })
                                            )
                                                return;
                                            i.preventDefault();
                                            var o = Ye(c.getState()),
                                                l = o.item,
                                                s = o.itemInputValue,
                                                f = o.itemUrl,
                                                p = o.source;
                                            if (i.metaKey || i.ctrlKey)
                                                void 0 !== f &&
                                                    (p.onSelect(St({ event: i, item: l, itemInputValue: s, itemUrl: f, refresh: a, source: p, state: c.getState() }, u)),
                                                    t.navigator.navigateNewTab({ itemUrl: f, item: l, state: c.getState() }));
                                            else if (i.shiftKey)
                                                void 0 !== f &&
                                                    (p.onSelect(St({ event: i, item: l, itemInputValue: s, itemUrl: f, refresh: a, source: p, state: c.getState() }, u)),
                                                    t.navigator.navigateNewWindow({ itemUrl: f, item: l, state: c.getState() }));
                                            else if (i.altKey);
                                            else {
                                                if (void 0 !== f)
                                                    return (
                                                        p.onSelect(St({ event: i, item: l, itemInputValue: s, itemUrl: f, refresh: a, source: p, state: c.getState() }, u)), t.navigator.navigate({ itemUrl: f, item: l, state: c.getState() })
                                                    );
                                                bt(St({ event: i, nextState: { isOpen: !1 }, props: t, query: s, refresh: a, store: c }, u)).then(function () {
                                                    p.onSelect(St({ event: i, item: l, itemInputValue: s, itemUrl: f, refresh: a, source: p, state: c.getState() }, u));
                                                });
                                            }
                                        }
                                    })(kt({ event: e, props: u, refresh: l, store: s }, f));
                                },
                                onFocus: n,
                                onBlur: function () {
                                    e || s.dispatch("blur", null);
                                },
                                onClick: function (e) {
                                    t.inputElement !== u.environment.document.activeElement || s.getState().isOpen || n(e);
                                },
                            },
                            a
                        );
                    },
                    getPanelProps: function (e) {
                        return kt(
                            {
                                onMouseDown: function (e) {
                                    e.preventDefault();
                                },
                                onMouseLeave: function () {
                                    s.dispatch("mouseleave", null);
                                },
                            },
                            e
                        );
                    },
                    getListProps: function (e) {
                        return kt({ role: "listbox", "aria-labelledby": "".concat(u.id, "-label"), id: "".concat(u.id, "-list") }, e);
                    },
                    getItemProps: function (e) {
                        var a = e.item,
                            r = e.source,
                            t = xt(e, It);
                        return kt(
                            {
                                id: "".concat(u.id, "-item-").concat(a.__autocomplete_id),
                                role: "option",
                                "aria-selected": s.getState().activeItemId === a.__autocomplete_id,
                                onMouseMove: function (e) {
                                    if (a.__autocomplete_id !== s.getState().activeItemId) {
                                        s.dispatch("mousemove", a.__autocomplete_id);
                                        var t = Ye(s.getState());
                                        if (null !== s.getState().activeItemId && t) {
                                            var n = t.item,
                                                r = t.itemInputValue,
                                                o = t.itemUrl,
                                                i = t.source;
                                            i.onActive(kt({ event: e, item: n, itemInputValue: r, itemUrl: o, refresh: l, source: i, state: s.getState() }, f));
                                        }
                                    }
                                },
                                onMouseDown: function (e) {
                                    e.preventDefault();
                                },
                                onClick: function (e) {
                                    var t = r.getItemInputValue({ item: a, state: s.getState() }),
                                        n = r.getItemUrl({ item: a, state: s.getState() });
                                    (n ? Promise.resolve() : bt(kt({ event: e, nextState: { isOpen: !1 }, props: u, query: t, refresh: l, store: s }, f))).then(function () {
                                        r.onSelect(kt({ event: e, item: a, itemInputValue: t, itemUrl: n, refresh: l, source: r, state: s.getState() }, f));
                                    });
                                },
                            },
                            t
                        );
                    },
                };
            }
            function At(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Nt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
            function Tt(e) {
                var t,
                    n,
                    r,
                    o,
                    i = e.plugins,
                    a = e.options,
                    c = null === (t = ((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
                    u = c ? Nt({}, c, Object.keys((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
                return {
                    plugins: i.map(function (e) {
                        return { name: e.name, options: Object.keys(e.__autocomplete_pluginOptions || []) };
                    }),
                    options: (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2
                                ? At(Object(n), !0).forEach(function (e) {
                                      Nt(t, e, n[e]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : At(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  });
                        }
                        return t;
                    })({ "autocomplete-core": Object.keys(a) }, u),
                    ua: We.concat((null === (o = a.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || []),
                };
            }
            function Lt(e) {
                var t,
                    n = e.state;
                return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = Ye(n)) || void 0 === t ? void 0 : t.itemInputValue) || null;
            }
            function Rt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Mt(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Rt(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : Rt(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            var Ht = function (e, t) {
                switch (t.type) {
                    case "setActiveItemId":
                    case "mousemove":
                        return Mt(Mt({}, e), {}, { activeItemId: t.payload });
                    case "setQuery":
                        return Mt(Mt({}, e), {}, { query: t.payload, completion: null });
                    case "setCollections":
                        return Mt(Mt({}, e), {}, { collections: t.payload });
                    case "setIsOpen":
                        return Mt(Mt({}, e), {}, { isOpen: t.payload });
                    case "setStatus":
                        return Mt(Mt({}, e), {}, { status: t.payload });
                    case "setContext":
                        return Mt(Mt({}, e), {}, { context: Mt(Mt({}, e.context), t.payload) });
                    case "ArrowDown":
                        var n = Mt(Mt({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : Qe(1, e.activeItemId, Ve(e), t.props.defaultActiveItemId) });
                        return Mt(Mt({}, n), {}, { completion: Lt({ state: n }) });
                    case "ArrowUp":
                        var r = Mt(Mt({}, e), {}, { activeItemId: Qe(-1, e.activeItemId, Ve(e), t.props.defaultActiveItemId) });
                        return Mt(Mt({}, r), {}, { completion: Lt({ state: r }) });
                    case "Escape":
                        return e.isOpen ? Mt(Mt({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : Mt(Mt({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
                    case "submit":
                        return Mt(Mt({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
                    case "reset":
                        return Mt(Mt({}, e), {}, { activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
                    case "focus":
                        return Mt(Mt({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
                    case "blur":
                        return t.props.debug ? e : Mt(Mt({}, e), {}, { isOpen: !1, activeItemId: null });
                    case "mouseleave":
                        return Mt(Mt({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
                    default:
                        return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e;
                }
            };
            function qt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ut(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? qt(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : qt(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function Ft(e) {
                var n = [],
                    r = (function (r, o) {
                        var e,
                            i = "undefined" != typeof window ? window : {},
                            a = r.plugins || [];
                        return nt(
                            nt(
                                {
                                    debug: !1,
                                    openOnFocus: !1,
                                    placeholder: "",
                                    autoFocus: !1,
                                    defaultActiveItemId: null,
                                    stallThreshold: 300,
                                    environment: i,
                                    shouldPanelOpen: function (e) {
                                        return 0 < Ve(e.state);
                                    },
                                    reshape: function (e) {
                                        return e.sources;
                                    },
                                },
                                r
                            ),
                            {},
                            {
                                id: null !== (e = r.id) && void 0 !== e ? e : "autocomplete-".concat(Be++),
                                plugins: a,
                                initialState: nt({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, r.initialState),
                                onStateChange: function (n) {
                                    var e;
                                    null === (e = r.onStateChange) || void 0 === e || e.call(r, n),
                                        a.forEach(function (e) {
                                            var t;
                                            return null === (t = e.onStateChange) || void 0 === t ? void 0 : t.call(e, n);
                                        });
                                },
                                onSubmit: function (n) {
                                    var e;
                                    null === (e = r.onSubmit) || void 0 === e || e.call(r, n),
                                        a.forEach(function (e) {
                                            var t;
                                            return null === (t = e.onSubmit) || void 0 === t ? void 0 : t.call(e, n);
                                        });
                                },
                                onReset: function (n) {
                                    var e;
                                    null === (e = r.onReset) || void 0 === e || e.call(r, n),
                                        a.forEach(function (e) {
                                            var t;
                                            return null === (t = e.onReset) || void 0 === t ? void 0 : t.call(e, n);
                                        });
                                },
                                getSources: function (t) {
                                    return Promise.all(
                                        []
                                            .concat(
                                                (function (e) {
                                                    return (
                                                        (function (e) {
                                                            if (Array.isArray(e)) return et(e);
                                                        })(e) ||
                                                        (function (e) {
                                                            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                                        })(e) ||
                                                        (function (e) {
                                                            if (e) {
                                                                if ("string" == typeof e) return et(e, void 0);
                                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                                return (
                                                                    "Object" === t && e.constructor && (t = e.constructor.name),
                                                                    "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? et(e, void 0) : void 0
                                                                );
                                                            }
                                                        })(e) ||
                                                        (function () {
                                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                        })()
                                                    );
                                                })(
                                                    a.map(function (e) {
                                                        return e.getSources;
                                                    })
                                                ),
                                                [r.getSources]
                                            )
                                            .filter(Boolean)
                                            .map(function (e) {
                                                return (function (e, t) {
                                                    var n = [];
                                                    return Promise.resolve(e(t)).then(function (e) {
                                                        return Promise.all(
                                                            e
                                                                .filter(function (e) {
                                                                    return Boolean(e);
                                                                })
                                                                .map(function (e) {
                                                                    if ((e.sourceId, n.includes(e.sourceId))) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                                                                    n.push(e.sourceId);
                                                                    var t = (function (o) {
                                                                        for (var e = 1; e < arguments.length; e++) {
                                                                            var i = null != arguments[e] ? arguments[e] : {};
                                                                            e % 2
                                                                                ? Ge(Object(i), !0).forEach(function (e) {
                                                                                      var t, n, r;
                                                                                      (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                                                                                  })
                                                                                : Object.getOwnPropertyDescriptors
                                                                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                                                                                : Ge(Object(i)).forEach(function (e) {
                                                                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                                                                                  });
                                                                        }
                                                                        return o;
                                                                    })(
                                                                        {
                                                                            getItemInputValue: function (e) {
                                                                                return e.state.query;
                                                                            },
                                                                            getItemUrl: function () {},
                                                                            onSelect: function (e) {
                                                                                (0, e.setIsOpen)(!1);
                                                                            },
                                                                            onActive: ze,
                                                                        },
                                                                        e
                                                                    );
                                                                    return Promise.resolve(t);
                                                                })
                                                        );
                                                    });
                                                })(e, t);
                                            })
                                    )
                                        .then(function (e) {
                                            return Fe(e);
                                        })
                                        .then(function (e) {
                                            return e.map(function (e) {
                                                return nt(
                                                    nt({}, e),
                                                    {},
                                                    {
                                                        onSelect: function (n) {
                                                            e.onSelect(n),
                                                                o.forEach(function (e) {
                                                                    var t;
                                                                    return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n);
                                                                });
                                                        },
                                                        onActive: function (n) {
                                                            e.onActive(n),
                                                                o.forEach(function (e) {
                                                                    var t;
                                                                    return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n);
                                                                });
                                                        },
                                                    }
                                                );
                                            });
                                        });
                                },
                                navigator: nt(
                                    {
                                        navigate: function (e) {
                                            var t = e.itemUrl;
                                            i.location.assign(t);
                                        },
                                        navigateNewTab: function (e) {
                                            var t = e.itemUrl,
                                                n = i.open(t, "_blank", "noopener");
                                            null == n || n.focus();
                                        },
                                        navigateNewWindow: function (e) {
                                            var t = e.itemUrl;
                                            i.open(t, "_blank", "noopener");
                                        },
                                    },
                                    r.navigator
                                ),
                            }
                        );
                    })(e, n),
                    t = (function (r, o, i) {
                        var a = o.initialState;
                        return {
                            getState: function () {
                                return a;
                            },
                            dispatch: function (e, t) {
                                var n = (function (o) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var i = null != arguments[e] ? arguments[e] : {};
                                        e % 2
                                            ? Ke(Object(i), !0).forEach(function (e) {
                                                  var t, n, r;
                                                  (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                                            : Ke(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                                              });
                                    }
                                    return o;
                                })({}, a);
                                (a = r(a, { type: e, props: o, payload: t })), i({ state: a, prevState: n });
                            },
                        };
                    })(Ht, r, function (e) {
                        var t = e.prevState,
                            n = e.state;
                        r.onStateChange(Ut({ prevState: t, state: n, refresh: a }, o));
                    }),
                    o = (function (e) {
                        var r = e.store;
                        return {
                            setActiveItemId: function (e) {
                                r.dispatch("setActiveItemId", e);
                            },
                            setQuery: function (e) {
                                r.dispatch("setQuery", e);
                            },
                            setCollections: function (e) {
                                var t = 0,
                                    n = e.map(function (e) {
                                        return $e(
                                            $e({}, e),
                                            {},
                                            {
                                                items: Fe(e.items).map(function (e) {
                                                    return $e($e({}, e), {}, { __autocomplete_id: t++ });
                                                }),
                                            }
                                        );
                                    });
                                r.dispatch("setCollections", n);
                            },
                            setIsOpen: function (e) {
                                r.dispatch("setIsOpen", e);
                            },
                            setStatus: function (e) {
                                r.dispatch("setStatus", e);
                            },
                            setContext: function (e) {
                                r.dispatch("setContext", e);
                            },
                        };
                    })({ store: t }),
                    i = Ct(Ut({ props: r, refresh: a, store: t }, o));
                function a() {
                    return bt(Ut({ event: new Event("input"), nextState: { isOpen: t.getState().isOpen }, props: r, query: t.getState().query, refresh: a, store: t }, o));
                }
                return (
                    r.plugins.forEach(function (e) {
                        var t;
                        return null === (t = e.subscribe) || void 0 === t
                            ? void 0
                            : t.call(
                                  e,
                                  Ut(
                                      Ut({}, o),
                                      {},
                                      {
                                          refresh: a,
                                          onSelect: function (e) {
                                              n.push({ onSelect: e });
                                          },
                                          onActive: function (e) {
                                              n.push({ onActive: e });
                                          },
                                      }
                                  )
                              );
                    }),
                    (function (e) {
                        var t,
                            n = e.metadata,
                            r = e.environment;
                        if (null === (t = r.navigator) || void 0 === t ? void 0 : t.userAgent.includes("Algolia Crawler")) {
                            var o = r.document.createElement("meta"),
                                i = r.document.querySelector("head");
                            (o.name = "algolia:metadata"),
                                setTimeout(function () {
                                    (o.content = JSON.stringify(n)), i.appendChild(o);
                                }, 0);
                        }
                    })({ metadata: Tt({ plugins: r.plugins, options: e }), environment: r.environment }),
                    Ut(Ut({ refresh: a }, i), o)
                );
            }
            function Bt(e) {
                var t = e.translations,
                    n = (void 0 === t ? {} : t).searchByText,
                    r = void 0 === n ? "Search by" : n;
                return Le.createElement(
                    "a",
                    { href: "https://www.algolia.com/docsearch", target: "_blank", rel: "noopener noreferrer" },
                    Le.createElement("span", { className: "DocSearch-Label" }, r),
                    Le.createElement(
                        "svg",
                        { width: "77", height: "19" },
                        Le.createElement("path", {
                            d:
                                "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
                            fill: "currentColor",
                            fillRule: "evenodd",
                        })
                    )
                );
            }
            function Vt(e) {
                return Le.createElement("svg", { width: "15", height: "15" }, Le.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
            }
            function zt(e) {
                var t = e.translations,
                    n = void 0 === t ? {} : t,
                    r = n.selectText,
                    o = void 0 === r ? "to select" : r,
                    i = n.navigateText,
                    a = void 0 === i ? "to navigate" : i,
                    c = n.closeText,
                    u = void 0 === c ? "to close" : c,
                    l = n.searchByText,
                    s = void 0 === l ? "Search by" : l;
                return Le.createElement(
                    Le.Fragment,
                    null,
                    Le.createElement("div", { className: "DocSearch-Logo" }, Le.createElement(Bt, { translations: { searchByText: s } })),
                    Le.createElement(
                        "ul",
                        { className: "DocSearch-Commands" },
                        Le.createElement(
                            "li",
                            null,
                            Le.createElement("span", { className: "DocSearch-Commands-Key" }, Le.createElement(Vt, null, Le.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))),
                            Le.createElement("span", { className: "DocSearch-Label" }, o)
                        ),
                        Le.createElement(
                            "li",
                            null,
                            Le.createElement("span", { className: "DocSearch-Commands-Key" }, Le.createElement(Vt, null, Le.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))),
                            Le.createElement("span", { className: "DocSearch-Commands-Key" }, Le.createElement(Vt, null, Le.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))),
                            Le.createElement("span", { className: "DocSearch-Label" }, a)
                        ),
                        Le.createElement(
                            "li",
                            null,
                            Le.createElement(
                                "span",
                                { className: "DocSearch-Commands-Key" },
                                Le.createElement(
                                    Vt,
                                    null,
                                    Le.createElement("path", {
                                        d:
                                            "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
                                    })
                                )
                            ),
                            Le.createElement("span", { className: "DocSearch-Label" }, u)
                        )
                    )
                );
            }
            function Wt(e) {
                var t = e.hit,
                    n = e.children;
                return Le.createElement("a", { href: t.url }, n);
            }
            function Kt() {
                return Le.createElement(
                    "svg",
                    { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" },
                    Le.createElement(
                        "g",
                        { fill: "none", fillRule: "evenodd" },
                        Le.createElement(
                            "g",
                            { transform: "translate(1 1)", strokeWidth: "2" },
                            Le.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }),
                            Le.createElement(
                                "path",
                                { d: "M36 18c0-9.94-8.06-18-18-18" },
                                Le.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })
                            )
                        )
                    )
                );
            }
            function Jt() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement(
                        "g",
                        { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                        Le.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }),
                        Le.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })
                    )
                );
            }
            function $t() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })
                );
            }
            function Qt() {
                return Le.createElement(
                    "svg",
                    { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement(
                        "g",
                        { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                        Le.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }),
                        Le.createElement("path", { d: "M8 17l-6-6 6-6" })
                    )
                );
            }
            var Gt = function () {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" })
                );
            };
            function Yt(e) {
                switch (e.type) {
                    case "lvl1":
                        return Le.createElement(Gt, null);
                    case "content":
                        return Le.createElement(Zt, null);
                    default:
                        return Le.createElement(Xt, null);
                }
            }
            function Xt() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })
                );
            }
            function Zt() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" })
                );
            }
            function en() {
                return Le.createElement(
                    "svg",
                    { width: "20", height: "20", viewBox: "0 0 20 20" },
                    Le.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" })
                );
            }
            function tn() {
                return Le.createElement(
                    "svg",
                    { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
                    Le.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" })
                );
            }
            function nn() {
                return Le.createElement(
                    "svg",
                    { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
                    Le.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" })
                );
            }
            function rn(e) {
                var t = e.translations,
                    n = void 0 === t ? {} : t,
                    r = n.titleText,
                    o = void 0 === r ? "Unable to fetch results" : r,
                    i = n.helpText,
                    a = void 0 === i ? "You might want to check your network connection." : i;
                return Le.createElement(
                    "div",
                    { className: "DocSearch-ErrorScreen" },
                    Le.createElement("div", { className: "DocSearch-Screen-Icon" }, Le.createElement(tn, null)),
                    Le.createElement("p", { className: "DocSearch-Title" }, o),
                    Le.createElement("p", { className: "DocSearch-Help" }, a)
                );
            }
            var on = ["translations"];
            function an(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function cn(e) {
                var t = e.translations,
                    n = void 0 === t ? {} : t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(e, on),
                    o = n.noResultsText,
                    i = void 0 === o ? "No results for" : o,
                    a = n.suggestedQueryText,
                    c = void 0 === a ? "Try searching for" : a,
                    u = n.openIssueText,
                    l = void 0 === u ? "Believe this query should return results?" : u,
                    s = n.openIssueLinkText,
                    f = void 0 === s ? "Let us know" : s,
                    p = r.state.context.searchSuggestions;
                return Le.createElement(
                    "div",
                    { className: "DocSearch-NoResults" },
                    Le.createElement("div", { className: "DocSearch-Screen-Icon" }, Le.createElement(nn, null)),
                    Le.createElement("p", { className: "DocSearch-Title" }, i, ' "', Le.createElement("strong", null, r.state.query), '"'),
                    p &&
                        0 < p.length &&
                        Le.createElement(
                            "div",
                            { className: "DocSearch-NoResults-Prefill-List" },
                            Le.createElement("p", { className: "DocSearch-Help" }, c, ":"),
                            Le.createElement(
                                "ul",
                                null,
                                p.slice(0, 3).reduce(function (e, t) {
                                    return [].concat(
                                        (function (e) {
                                            return (
                                                (function (e) {
                                                    if (Array.isArray(e)) return an(e);
                                                })(e) ||
                                                (function (e) {
                                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                                                })(e) ||
                                                (function (e) {
                                                    if (e) {
                                                        if ("string" == typeof e) return an(e, void 0);
                                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                                        return (
                                                            "Object" === t && e.constructor && (t = e.constructor.name),
                                                            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? an(e, void 0) : void 0
                                                        );
                                                    }
                                                })(e) ||
                                                (function () {
                                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                })()
                                            );
                                        })(e),
                                        [
                                            Le.createElement(
                                                "li",
                                                { key: t },
                                                Le.createElement(
                                                    "button",
                                                    {
                                                        className: "DocSearch-Prefill",
                                                        key: t,
                                                        type: "button",
                                                        onClick: function () {
                                                            r.setQuery(t.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
                                                        },
                                                    },
                                                    t
                                                )
                                            ),
                                        ]
                                    );
                                }, [])
                            )
                        ),
                    Le.createElement(
                        "p",
                        { className: "DocSearch-Help" },
                        "".concat(l, " "),
                        Le.createElement(
                            "a",
                            {
                                href: "https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=[".concat(r.indexName, ']+Missing+results+for+query+"').concat(r.state.query, '"'),
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                            f
                        ),
                        "."
                    )
                );
            }
            var un = ["hit", "attribute", "tagName"];
            function ln(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function sn(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? ln(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : ln(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function fn(e, t) {
                return t.split(".").reduce(function (e, t) {
                    return null != e && e[t] ? e[t] : null;
                }, e);
            }
            function pn(e) {
                var t = e.hit,
                    n = e.attribute,
                    r = e.tagName;
                return p(
                    void 0 === r ? "span" : r,
                    sn(
                        sn(
                            {},
                            (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            o = {},
                                            i = Object.keys(e);
                                        for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                        return o;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                }
                                return o;
                            })(e, un)
                        ),
                        {},
                        { dangerouslySetInnerHTML: { __html: fn(t, "_snippetResult.".concat(n, ".value")) || fn(t, n) } }
                    )
                );
            }
            function dn(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                (o = !0), (i = e);
                            } finally {
                                try {
                                    r || null == c.return || c.return();
                                } finally {
                                    if (o) throw i;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return mn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mn(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function mn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function hn() {
                return (hn =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function vn(n) {
                return n.collection && 0 !== n.collection.items.length
                    ? Le.createElement(
                          "section",
                          { className: "DocSearch-Hits" },
                          Le.createElement("div", { className: "DocSearch-Hit-source" }, n.title),
                          Le.createElement(
                              "ul",
                              n.getListProps(),
                              n.collection.items.map(function (e, t) {
                                  return Le.createElement(yn, hn({ key: [n.title, e.objectID].join(":"), item: e, index: t }, n));
                              })
                          )
                      )
                    : null;
            }
            function yn(e) {
                var t = e.item,
                    n = e.index,
                    r = e.renderIcon,
                    o = e.renderAction,
                    i = e.getItemProps,
                    a = e.onItemClick,
                    c = e.collection,
                    u = e.hitComponent,
                    l = dn(Le.useState(!1), 2),
                    s = l[0],
                    f = l[1],
                    p = dn(Le.useState(!1), 2),
                    d = p[0],
                    m = p[1],
                    h = Le.useRef(null),
                    v = u;
                return Le.createElement(
                    "li",
                    hn(
                        {
                            className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", d && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
                            onTransitionEnd: function () {
                                h.current && h.current();
                            },
                        },
                        i({
                            item: t,
                            source: c.source,
                            onClick: function () {
                                a(t);
                            },
                        })
                    ),
                    Le.createElement(
                        v,
                        { hit: t },
                        Le.createElement(
                            "div",
                            { className: "DocSearch-Hit-Container" },
                            r({ item: t, index: n }),
                            t.hierarchy[t.type] &&
                                "lvl1" === t.type &&
                                Le.createElement(
                                    "div",
                                    { className: "DocSearch-Hit-content-wrapper" },
                                    Le.createElement(pn, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }),
                                    t.content && Le.createElement(pn, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })
                                ),
                            t.hierarchy[t.type] &&
                                ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) &&
                                Le.createElement(
                                    "div",
                                    { className: "DocSearch-Hit-content-wrapper" },
                                    Le.createElement(pn, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }),
                                    Le.createElement(pn, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })
                                ),
                            "content" === t.type &&
                                Le.createElement(
                                    "div",
                                    { className: "DocSearch-Hit-content-wrapper" },
                                    Le.createElement(pn, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }),
                                    Le.createElement(pn, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })
                                ),
                            o({
                                item: t,
                                runDeleteTransition: function (e) {
                                    f(!0), (h.current = e);
                                },
                                runFavoriteTransition: function (e) {
                                    m(!0), (h.current = e);
                                },
                            })
                        )
                    )
                );
            }
            function _n(e, r) {
                return e.reduce(function (e, t) {
                    var n = r(t);
                    return e.hasOwnProperty(n) || (e[n] = []), e[n].length < 5 && e[n].push(t), e;
                }, {});
            }
            function bn(e) {
                return e;
            }
            function gn() {}
            var On = /(<mark>|<\/mark>)/g,
                Sn = RegExp(On.source);
            function wn(e) {
                var t,
                    n,
                    r,
                    o,
                    i,
                    a = e;
                if (!a.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
                var c = (
                    (a.__docsearch_parent
                        ? null === (t = a.__docsearch_parent) || void 0 === t || null === (n = t._highlightResult) || void 0 === n || null === (r = n.hierarchy) || void 0 === r
                            ? void 0
                            : r.lvl0
                        : null === (o = e._highlightResult) || void 0 === o || null === (i = o.hierarchy) || void 0 === i
                        ? void 0
                        : i.lvl0) || {}
                ).value;
                return c && Sn.test(c) ? c.replace(On, "") : c;
            }
            function En() {
                return (En =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function jn(t) {
                return Le.createElement(
                    "div",
                    { className: "DocSearch-Dropdown-Container" },
                    t.state.collections.map(function (o) {
                        if (0 === o.items.length) return null;
                        var e = wn(o.items[0]);
                        return Le.createElement(
                            vn,
                            En({}, t, {
                                key: o.source.sourceId,
                                title: e,
                                collection: o,
                                renderIcon: function (e) {
                                    var t,
                                        n = e.item,
                                        r = e.index;
                                    return Le.createElement(
                                        Le.Fragment,
                                        null,
                                        n.__docsearch_parent &&
                                            Le.createElement(
                                                "svg",
                                                { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" },
                                                Le.createElement(
                                                    "g",
                                                    { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                                                    n.__docsearch_parent !== (null === (t = o.items[r + 1]) || void 0 === t ? void 0 : t.__docsearch_parent)
                                                        ? Le.createElement("path", { d: "M8 6v21M20 27H8.3" })
                                                        : Le.createElement("path", { d: "M8 6v42M20 27H8.3" })
                                                )
                                            ),
                                        Le.createElement("div", { className: "DocSearch-Hit-icon" }, Le.createElement(Yt, { type: n.type }))
                                    );
                                },
                                renderAction: function () {
                                    return Le.createElement("div", { className: "DocSearch-Hit-action" }, Le.createElement(Qt, null));
                                },
                            })
                        );
                    }),
                    t.resultsFooterComponent && Le.createElement("section", { className: "DocSearch-HitsFooter" }, Le.createElement(t.resultsFooterComponent, { state: t.state }))
                );
            }
            var Pn = ["translations"];
            function In() {
                return (In =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Dn(e) {
                var t = e.translations,
                    n = void 0 === t ? {} : t,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(e, Pn),
                    r = n.recentSearchesTitle,
                    i = void 0 === r ? "Recent" : r,
                    a = n.noRecentSearchesText,
                    c = void 0 === a ? "No recent searches" : a,
                    u = n.saveRecentSearchButtonTitle,
                    l = void 0 === u ? "Save this search" : u,
                    s = n.removeRecentSearchButtonTitle,
                    f = void 0 === s ? "Remove this search from history" : s,
                    p = n.favoriteSearchesTitle,
                    d = void 0 === p ? "Favorite" : p,
                    m = n.removeFavoriteSearchButtonTitle,
                    h = void 0 === m ? "Remove this search from favorites" : m;
                return "idle" === o.state.status && !1 === o.hasCollections
                    ? o.disableUserPersonalization
                        ? null
                        : Le.createElement("div", { className: "DocSearch-StartScreen" }, Le.createElement("p", { className: "DocSearch-Help" }, c))
                    : !1 === o.hasCollections
                    ? null
                    : Le.createElement(
                          "div",
                          { className: "DocSearch-Dropdown-Container" },
                          Le.createElement(
                              vn,
                              In({}, o, {
                                  title: i,
                                  collection: o.state.collections[0],
                                  renderIcon: function () {
                                      return Le.createElement("div", { className: "DocSearch-Hit-icon" }, Le.createElement(Jt, null));
                                  },
                                  renderAction: function (e) {
                                      var t = e.item,
                                          n = e.runFavoriteTransition,
                                          r = e.runDeleteTransition;
                                      return Le.createElement(
                                          Le.Fragment,
                                          null,
                                          Le.createElement(
                                              "div",
                                              { className: "DocSearch-Hit-action" },
                                              Le.createElement(
                                                  "button",
                                                  {
                                                      className: "DocSearch-Hit-action-button",
                                                      title: l,
                                                      type: "submit",
                                                      onClick: function (e) {
                                                          e.preventDefault(),
                                                              e.stopPropagation(),
                                                              n(function () {
                                                                  o.favoriteSearches.add(t), o.recentSearches.remove(t), o.refresh();
                                                              });
                                                      },
                                                  },
                                                  Le.createElement(en, null)
                                              )
                                          ),
                                          Le.createElement(
                                              "div",
                                              { className: "DocSearch-Hit-action" },
                                              Le.createElement(
                                                  "button",
                                                  {
                                                      className: "DocSearch-Hit-action-button",
                                                      title: f,
                                                      type: "submit",
                                                      onClick: function (e) {
                                                          e.preventDefault(),
                                                              e.stopPropagation(),
                                                              r(function () {
                                                                  o.recentSearches.remove(t), o.refresh();
                                                              });
                                                      },
                                                  },
                                                  Le.createElement($t, null)
                                              )
                                          )
                                      );
                                  },
                              })
                          ),
                          Le.createElement(
                              vn,
                              In({}, o, {
                                  title: d,
                                  collection: o.state.collections[1],
                                  renderIcon: function () {
                                      return Le.createElement("div", { className: "DocSearch-Hit-icon" }, Le.createElement(en, null));
                                  },
                                  renderAction: function (e) {
                                      var t = e.item,
                                          n = e.runDeleteTransition;
                                      return Le.createElement(
                                          "div",
                                          { className: "DocSearch-Hit-action" },
                                          Le.createElement(
                                              "button",
                                              {
                                                  className: "DocSearch-Hit-action-button",
                                                  title: h,
                                                  type: "submit",
                                                  onClick: function (e) {
                                                      e.preventDefault(),
                                                          e.stopPropagation(),
                                                          n(function () {
                                                              o.favoriteSearches.remove(t), o.refresh();
                                                          });
                                                  },
                                              },
                                              Le.createElement($t, null)
                                          )
                                      );
                                  },
                              })
                          )
                      );
            }
            var kn = ["translations"];
            function xn() {
                return (xn =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var Cn = Le.memo(
                    function (e) {
                        var t = e.translations,
                            n = void 0 === t ? {} : t,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            o = {},
                                            i = Object.keys(e);
                                        for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                        return o;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                }
                                return o;
                            })(e, kn);
                        if ("error" === r.state.status) return Le.createElement(rn, { translations: null == n ? void 0 : n.errorScreen });
                        var o = r.state.collections.some(function (e) {
                            return 0 < e.items.length;
                        });
                        return r.state.query
                            ? !1 === o
                                ? Le.createElement(cn, xn({}, r, { translations: null == n ? void 0 : n.noResultsScreen }))
                                : Le.createElement(jn, r)
                            : Le.createElement(Dn, xn({}, r, { hasCollections: o, translations: null == n ? void 0 : n.startScreen }));
                    },
                    function (e, t) {
                        return "loading" === t.state.status || "stalled" === t.state.status;
                    }
                ),
                An = ["translations"];
            function Nn() {
                return (Nn =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function Tn(e) {
                var t = e.translations,
                    n = void 0 === t ? {} : t,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(e, An),
                    o = n.resetButtonTitle,
                    i = void 0 === o ? "Clear the query" : o,
                    a = n.resetButtonAriaLabel,
                    c = void 0 === a ? "Clear the query" : a,
                    u = n.cancelButtonText,
                    l = void 0 === u ? "Cancel" : u,
                    s = n.cancelButtonAriaLabel,
                    f = void 0 === s ? "Cancel" : s,
                    p = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
                return (
                    Le.useEffect(
                        function () {
                            r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
                        },
                        [r.autoFocus, r.inputRef]
                    ),
                    Le.useEffect(
                        function () {
                            r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
                        },
                        [r.isFromSelection, r.inputRef]
                    ),
                    Le.createElement(
                        Le.Fragment,
                        null,
                        Le.createElement(
                            "form",
                            {
                                className: "DocSearch-Form",
                                onSubmit: function (e) {
                                    e.preventDefault();
                                },
                                onReset: p,
                            },
                            Le.createElement("label", Nn({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()), Le.createElement(Me, null)),
                            Le.createElement("div", { className: "DocSearch-LoadingIndicator" }, Le.createElement(Kt, null)),
                            Le.createElement("input", Nn({ className: "DocSearch-Input", ref: r.inputRef }, r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }))),
                            Le.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": c, hidden: !r.state.query }, Le.createElement($t, null))
                        ),
                        Le.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f, onClick: r.onClose }, l)
                    )
                );
            }
            var Ln = ["_highlightResult", "_snippetResult"];
            function Rn(e) {
                var t = e.key,
                    n = e.limit,
                    o = void 0 === n ? 5 : n,
                    i = (function (t) {
                        return !1 ===
                            (function () {
                                var e = "__TEST_KEY__";
                                try {
                                    return localStorage.setItem(e, ""), localStorage.removeItem(e), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()
                            ? {
                                  setItem: function () {},
                                  getItem: function () {
                                      return [];
                                  },
                              }
                            : {
                                  setItem: function (e) {
                                      return window.localStorage.setItem(t, JSON.stringify(e));
                                  },
                                  getItem: function () {
                                      var e = window.localStorage.getItem(t);
                                      return e ? JSON.parse(e) : [];
                                  },
                              };
                    })(t),
                    a = i.getItem().slice(0, o);
                return {
                    add: function (e) {
                        var t = e,
                            n =
                                (t._highlightResult,
                                t._snippetResult,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                o = {},
                                                i = Object.keys(e);
                                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                            return o;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                    }
                                    return o;
                                })(t, Ln)),
                            r = a.findIndex(function (e) {
                                return e.objectID === n.objectID;
                            });
                        -1 < r && a.splice(r, 1), a.unshift(n), (a = a.slice(0, o)), i.setItem(a);
                    },
                    remove: function (t) {
                        (a = a.filter(function (e) {
                            return e.objectID !== t.objectID;
                        })),
                            i.setItem(a);
                    },
                    getAll: function () {
                        return a;
                    },
                };
            }
            var Mn = ["facetName", "facetQuery"];
            function Hn() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
                    c = {};
                return {
                    get: function (e, t) {
                        var n =
                                2 < arguments.length && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {
                                          miss: function () {
                                              return Promise.resolve();
                                          },
                                      },
                            r = JSON.stringify(e);
                        if (r in c) return Promise.resolve(a.serializable ? JSON.parse(c[r]) : c[r]);
                        var o = t(),
                            i =
                                (n && n.miss) ||
                                function () {
                                    return Promise.resolve();
                                };
                        return o
                            .then(function (e) {
                                return i(e);
                            })
                            .then(function () {
                                return o;
                            });
                    },
                    set: function (e, t) {
                        return (c[JSON.stringify(e)] = a.serializable ? JSON.stringify(t) : t), Promise.resolve(t);
                    },
                    delete: function (e) {
                        return delete c[JSON.stringify(e)], Promise.resolve();
                    },
                    clear: function () {
                        return (c = {}), Promise.resolve();
                    },
                };
            }
            function qn(t, n) {
                return (
                    n &&
                        Object.keys(n).forEach(function (e) {
                            t[e] = n[e](t);
                        }),
                    t
                );
            }
            function Un(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var o = 0;
                return e.replace(/%s/g, function () {
                    return encodeURIComponent(n[o++]);
                });
            }
            var Fn = "4.8.5",
                Bn = { WithinQueryParameters: 0, WithinHeaders: 1 };
            function Vn(e, t) {
                var n = e || {},
                    r = n.data || {};
                return (
                    Object.keys(n).forEach(function (e) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e]);
                    }),
                    { data: 0 < Object.entries(r).length ? r : void 0, timeout: n.timeout || t, headers: n.headers || {}, queryParameters: n.queryParameters || {}, cacheable: n.cacheable }
                );
            }
            var zn = { Read: 1, Write: 2, Any: 3 },
                Wn = 1,
                Kn = 3,
                Jn = 12e4;
            function $n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Wn;
                return y(y({}, e), {}, { status: t, lastUpdate: Date.now() });
            }
            function Qn(e) {
                return "string" == typeof e ? { protocol: "https", url: e, accept: zn.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || zn.Any };
            }
            var Gn = "POST";
            function Yn(u, e, l, s) {
                var f = [],
                    p = (function (e, t) {
                        if ("GET" !== e.method && (void 0 !== e.data || void 0 !== t.data)) {
                            var n = Array.isArray(e.data) ? e.data : y(y({}, e.data), t.data);
                            return JSON.stringify(n);
                        }
                    })(l, s),
                    d = (function (e, t) {
                        var n = y(y({}, e.headers), t.headers),
                            r = {};
                        return (
                            Object.keys(n).forEach(function (e) {
                                var t = n[e];
                                r[e.toLowerCase()] = t;
                            }),
                            r
                        );
                    })(u, s),
                    m = l.method,
                    t = "GET" !== l.method ? {} : y(y({}, l.data), s.data),
                    h = y(y(y({ "x-algolia-agent": u.userAgent.value }, u.queryParameters), t), s.queryParameters),
                    v = 0,
                    n = function n(r, o) {
                        var i = r.pop();
                        if (void 0 === i) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Zn(f) };
                        var a = {
                                data: p,
                                headers: d,
                                method: m,
                                url: (function (e, t, n) {
                                    var r = Xn(n),
                                        o = ""
                                            .concat(e.protocol, "://")
                                            .concat(e.url, "/")
                                            .concat("/" === t.charAt(0) ? t.substr(1) : t);
                                    return r.length && (o += "?".concat(r)), o;
                                })(i, l.path, h),
                                connectTimeout: o(v, u.timeouts.connect),
                                responseTimeout: o(v, s.timeout),
                            },
                            c = function (e) {
                                var t = { request: a, response: e, host: i, triesLeft: r.length };
                                return f.push(t), t;
                            },
                            t = {
                                onSucess: function (e) {
                                    return (function (t) {
                                        try {
                                            return JSON.parse(t.content);
                                        } catch (e) {
                                            throw (function (e, t) {
                                                return { name: "DeserializationError", message: e, response: t };
                                            })(e.message, t);
                                        }
                                    })(e);
                                },
                                onRetry: function (e) {
                                    var t = c(e);
                                    return (
                                        e.isTimedOut && v++,
                                        Promise.all([u.logger.info("Retryable failure", er(t)), u.hostsCache.set(i, $n(i, e.isTimedOut ? Kn : 2))]).then(function () {
                                            return n(r, o);
                                        })
                                    );
                                },
                                onFail: function (e) {
                                    throw (
                                        (c(e),
                                        (function (e, t) {
                                            var n = e.content,
                                                r = e.status,
                                                o = n;
                                            try {
                                                o = JSON.parse(n).message;
                                            } catch (e) {}
                                            return (function (e, t, n) {
                                                return { name: "ApiError", message: e, status: t, transporterStackTrace: n };
                                            })(o, r, t);
                                        })(e, Zn(f)))
                                    );
                                },
                            };
                        return u.requester.send(a).then(function (e) {
                            return (function (e, t) {
                                return (function (e) {
                                    var t = e.status;
                                    return (
                                        e.isTimedOut ||
                                        (function (e) {
                                            var t = e.isTimedOut,
                                                n = e.status;
                                            return !t && 0 == ~~n;
                                        })(e) ||
                                        (2 != ~~(t / 100) && 4 != ~~(t / 100))
                                    );
                                })(e)
                                    ? t.onRetry(e)
                                    : 2 == ~~(e.status / 100)
                                    ? t.onSucess(e)
                                    : t.onFail(e);
                            })(e, t);
                        });
                    };
                return (function (t, o) {
                    return Promise.all(
                        o.map(function (e) {
                            return t.get(e, function () {
                                return Promise.resolve($n(e));
                            });
                        })
                    ).then(function (e) {
                        var t = e.filter(function (e) {
                                return (t = e).status === Wn || Date.now() - t.lastUpdate > Jn;
                                var t;
                            }),
                            n = e.filter(function (e) {
                                return (t = e).status === Kn && Date.now() - t.lastUpdate <= Jn;
                                var t;
                            }),
                            r = [].concat(a(t), a(n));
                        return {
                            getTimeout: function (e, t) {
                                return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
                            },
                            statelessHosts:
                                0 < r.length
                                    ? r.map(function (e) {
                                          return Qn(e);
                                      })
                                    : o,
                        };
                    });
                })(u.hostsCache, e).then(function (e) {
                    return n(a(e.statelessHosts).reverse(), e.getTimeout);
                });
            }
            function Xn(n) {
                return Object.keys(n)
                    .map(function (e) {
                        return Un("%s=%s", e, ((t = n[e]), "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? JSON.stringify(n[e]) : n[e]));
                        var t;
                    })
                    .join("&");
            }
            function Zn(e) {
                return e.map(function (e) {
                    return er(e);
                });
            }
            function er(e) {
                var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
                return y(y({}, e), {}, { request: y(y({}, e.request), {}, { headers: y(y({}, e.request.headers), t) }) });
            }
            var tr = function (e) {
                    var t = e.appId,
                        n = (function (e, t, n) {
                            var r = { "x-algolia-api-key": n, "x-algolia-application-id": t };
                            return {
                                headers: function () {
                                    return e === Bn.WithinHeaders ? r : {};
                                },
                                queryParameters: function () {
                                    return e === Bn.WithinQueryParameters ? r : {};
                                },
                            };
                        })(void 0 !== e.authMode ? e.authMode : Bn.WithinHeaders, t, e.apiKey),
                        r = (function (e) {
                            var t = e.hostsCache,
                                n = e.logger,
                                r = e.requester,
                                o = e.requestsCache,
                                i = e.responsesCache,
                                a = e.timeouts,
                                c = e.userAgent,
                                u = e.hosts,
                                l = e.queryParameters,
                                s = {
                                    hostsCache: t,
                                    logger: n,
                                    requester: r,
                                    requestsCache: o,
                                    responsesCache: i,
                                    timeouts: a,
                                    userAgent: c,
                                    headers: e.headers,
                                    queryParameters: l,
                                    hosts: u.map(function (e) {
                                        return Qn(e);
                                    }),
                                    read: function (e, t) {
                                        var n = Vn(t, s.timeouts.read),
                                            r = function () {
                                                return Yn(
                                                    s,
                                                    s.hosts.filter(function (e) {
                                                        return 0 != (e.accept & zn.Read);
                                                    }),
                                                    e,
                                                    n
                                                );
                                            };
                                        if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return r();
                                        var o = { request: e, mappedRequestOptions: n, transporter: { queryParameters: s.queryParameters, headers: s.headers } };
                                        return s.responsesCache.get(
                                            o,
                                            function () {
                                                return s.requestsCache.get(o, function () {
                                                    return s.requestsCache
                                                        .set(o, r())
                                                        .then(
                                                            function (e) {
                                                                return Promise.all([s.requestsCache.delete(o), e]);
                                                            },
                                                            function (e) {
                                                                return Promise.all([s.requestsCache.delete(o), Promise.reject(e)]);
                                                            }
                                                        )
                                                        .then(function (e) {
                                                            var t = f(e, 2);
                                                            return t[0], t[1];
                                                        });
                                                });
                                            },
                                            {
                                                miss: function (e) {
                                                    return s.responsesCache.set(o, e);
                                                },
                                            }
                                        );
                                    },
                                    write: function (e, t) {
                                        return Yn(
                                            s,
                                            s.hosts.filter(function (e) {
                                                return 0 != (e.accept & zn.Write);
                                            }),
                                            e,
                                            Vn(t, s.timeouts.write)
                                        );
                                    },
                                };
                            return s;
                        })(
                            y(
                                y(
                                    {
                                        hosts: [
                                            { url: "".concat(t, "-dsn.algolia.net"), accept: zn.Read },
                                            { url: "".concat(t, ".algolia.net"), accept: zn.Write },
                                        ].concat(
                                            (function (e) {
                                                for (var t = e.length - 1; 0 < t; t--) {
                                                    var n = Math.floor(Math.random() * (t + 1)),
                                                        r = e[t];
                                                    (e[t] = e[n]), (e[n] = r);
                                                }
                                                return e;
                                            })([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])
                                        ),
                                    },
                                    e
                                ),
                                {},
                                { headers: y(y(y({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: y(y({}, n.queryParameters()), e.queryParameters) }
                            )
                        ),
                        o = {
                            transporter: r,
                            appId: t,
                            addAlgoliaAgent: function (e, t) {
                                r.userAgent.add({ segment: e, version: t });
                            },
                            clearCache: function () {
                                return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(function () {});
                            },
                        };
                    return qn(o, e.methods);
                },
                nr = function (r) {
                    return function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = { transporter: r.transporter, appId: r.appId, indexName: e };
                        return qn(n, t.methods);
                    };
                },
                rr = function (r) {
                    return function (e, t) {
                        var n = e.map(function (e) {
                            return y(y({}, e), {}, { params: Xn(e.params || {}) });
                        });
                        return r.transporter.read({ method: Gn, path: "1/indexes/*/queries", data: { requests: n }, cacheable: !0 }, t);
                    };
                },
                or = function (a) {
                    return function (e, i) {
                        return Promise.all(
                            e.map(function (e) {
                                var t = e.params,
                                    n = t.facetName,
                                    r = t.facetQuery,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            o = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    o = {},
                                                    i = Object.keys(e);
                                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                                return o;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                                        }
                                        return o;
                                    })(t, Mn);
                                return nr(a)(e.indexName, { methods: { searchForFacetValues: cr } }).searchForFacetValues(n, r, y(y({}, i), o));
                            })
                        );
                    };
                },
                ir = function (r) {
                    return function (e, t, n) {
                        return r.transporter.read({ method: Gn, path: Un("1/answers/%s/prediction", r.indexName), data: { query: e, queryLanguages: t }, cacheable: !0 }, n);
                    };
                },
                ar = function (n) {
                    return function (e, t) {
                        return n.transporter.read({ method: Gn, path: Un("1/indexes/%s/query", n.indexName), data: { query: e }, cacheable: !0 }, t);
                    };
                },
                cr = function (r) {
                    return function (e, t, n) {
                        return r.transporter.read({ method: Gn, path: Un("1/indexes/%s/facets/%s/query", r.indexName, e), data: { facetQuery: t }, cacheable: !0 }, n);
                    };
                },
                ur = 1,
                lr = 2,
                sr = 3;
            function fr(e, t, n) {
                var r,
                    o = {
                        appId: e,
                        apiKey: t,
                        timeouts: { connect: 1, read: 2, write: 30 },
                        requester: {
                            send: function (i) {
                                return new Promise(function (n) {
                                    var r = new XMLHttpRequest();
                                    r.open(i.method, i.url, !0),
                                        Object.keys(i.headers).forEach(function (e) {
                                            return r.setRequestHeader(e, i.headers[e]);
                                        });
                                    var e,
                                        t = function (e, t) {
                                            return setTimeout(function () {
                                                r.abort(), n({ status: 0, content: t, isTimedOut: !0 });
                                            }, 1e3 * e);
                                        },
                                        o = t(i.connectTimeout, "Connection timeout");
                                    (r.onreadystatechange = function () {
                                        r.readyState > r.OPENED && void 0 === e && (clearTimeout(o), (e = t(i.responseTimeout, "Socket timeout")));
                                    }),
                                        (r.onerror = function () {
                                            0 === r.status && (clearTimeout(o), clearTimeout(e), n({ content: r.responseText || "Network request failed", status: r.status, isTimedOut: !1 }));
                                        }),
                                        (r.onload = function () {
                                            clearTimeout(o), clearTimeout(e), n({ content: r.responseText, status: r.status, isTimedOut: !1 });
                                        }),
                                        r.send(i.data);
                                });
                            },
                        },
                        logger:
                            ((r = sr),
                            {
                                debug: function (e, t) {
                                    return r <= ur && console.debug(e, t), Promise.resolve();
                                },
                                info: function (e, t) {
                                    return r <= lr && console.info(e, t), Promise.resolve();
                                },
                                error: function (e, t) {
                                    return console.error(e, t), Promise.resolve();
                                },
                            }),
                        responsesCache: Hn(),
                        requestsCache: Hn({ serializable: !1 }),
                        hostsCache: (function r(e) {
                            var o = a(e.caches),
                                i = o.shift();
                            return void 0 === i
                                ? {
                                      get: function (e, t) {
                                          var n =
                                              2 < arguments.length && void 0 !== arguments[2]
                                                  ? arguments[2]
                                                  : {
                                                        miss: function () {
                                                            return Promise.resolve();
                                                        },
                                                    };
                                          return t()
                                              .then(function (e) {
                                                  return Promise.all([e, n.miss(e)]);
                                              })
                                              .then(function (e) {
                                                  return f(e, 1)[0];
                                              });
                                      },
                                      set: function (e, t) {
                                          return Promise.resolve(t);
                                      },
                                      delete: function (e) {
                                          return Promise.resolve();
                                      },
                                      clear: function () {
                                          return Promise.resolve();
                                      },
                                  }
                                : {
                                      get: function (e, t) {
                                          var n =
                                              2 < arguments.length && void 0 !== arguments[2]
                                                  ? arguments[2]
                                                  : {
                                                        miss: function () {
                                                            return Promise.resolve();
                                                        },
                                                    };
                                          return i.get(e, t, n).catch(function () {
                                              return r({ caches: o }).get(e, t, n);
                                          });
                                      },
                                      set: function (e, t) {
                                          return i.set(e, t).catch(function () {
                                              return r({ caches: o }).set(e, t);
                                          });
                                      },
                                      delete: function (e) {
                                          return i.delete(e).catch(function () {
                                              return r({ caches: o }).delete(e);
                                          });
                                      },
                                      clear: function () {
                                          return i.clear().catch(function () {
                                              return r({ caches: o }).clear();
                                          });
                                      },
                                  };
                        })({
                            caches: [
                                (function (e) {
                                    function r() {
                                        return void 0 === t && (t = e.localStorage || window.localStorage), t;
                                    }
                                    function i() {
                                        return JSON.parse(r().getItem(o) || "{}");
                                    }
                                    var t,
                                        o = "algoliasearch-client-js-".concat(e.key);
                                    return {
                                        get: function (n, r) {
                                            var o =
                                                2 < arguments.length && void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : {
                                                          miss: function () {
                                                              return Promise.resolve();
                                                          },
                                                      };
                                            return Promise.resolve()
                                                .then(function () {
                                                    var e = JSON.stringify(n),
                                                        t = i()[e];
                                                    return Promise.all([t || r(), void 0 !== t]);
                                                })
                                                .then(function (e) {
                                                    var t = f(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return Promise.all([n, r || o.miss(n)]);
                                                })
                                                .then(function (e) {
                                                    return f(e, 1)[0];
                                                });
                                        },
                                        set: function (t, n) {
                                            return Promise.resolve().then(function () {
                                                var e = i();
                                                return (e[JSON.stringify(t)] = n), r().setItem(o, JSON.stringify(e)), n;
                                            });
                                        },
                                        delete: function (t) {
                                            return Promise.resolve().then(function () {
                                                var e = i();
                                                delete e[JSON.stringify(t)], r().setItem(o, JSON.stringify(e));
                                            });
                                        },
                                        clear: function () {
                                            return Promise.resolve().then(function () {
                                                r().removeItem(o);
                                            });
                                        },
                                    };
                                })({ key: "".concat(Fn, "-").concat(e) }),
                                Hn(),
                            ],
                        }),
                        userAgent: (function (e) {
                            var n = {
                                value: "Algolia for JavaScript (".concat(e, ")"),
                                add: function (e) {
                                    var t = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                    return -1 === n.value.indexOf(t) && (n.value = "".concat(n.value).concat(t)), n;
                                },
                            };
                            return n;
                        })(Fn).add({ segment: "Browser", version: "lite" }),
                        authMode: Bn.WithinQueryParameters,
                    };
                return tr(
                    y(
                        y(y({}, o), n),
                        {},
                        {
                            methods: {
                                search: rr,
                                searchForFacetValues: or,
                                multipleQueries: rr,
                                multipleSearchForFacetValues: or,
                                initIndex: function (t) {
                                    return function (e) {
                                        return nr(t)(e, { methods: { search: ar, searchForFacetValues: cr, findAnswers: ir } });
                                    };
                                },
                            },
                        }
                    )
                );
            }
            fr.version = Fn;
            var pr = "3.0.0-alpha.42",
                dr = ["footer", "searchBox"];
            function mr() {
                return (mr =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function hr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function vr(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? hr(Object(i), !0).forEach(function (e) {
                              var t, n, r;
                              (t = o), (r = i[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                        : hr(Object(i)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                          });
                }
                return o;
            }
            function yr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function _r(e) {
                var t = e.appId,
                    n = void 0 === t ? "BH4D9OD16A" : t,
                    r = e.apiKey,
                    o = e.indexName,
                    i = e.placeholder,
                    a = void 0 === i ? "Search docs" : i,
                    c = e.searchParameters,
                    u = e.onClose,
                    l = void 0 === u ? gn : u,
                    s = e.transformItems,
                    f = void 0 === s ? bn : s,
                    p = e.hitComponent,
                    d = void 0 === p ? Wt : p,
                    m = e.resultsFooterComponent,
                    h =
                        void 0 === m
                            ? function () {
                                  return null;
                              }
                            : m,
                    v = e.navigator,
                    y = e.initialScrollY,
                    _ = void 0 === y ? 0 : y,
                    b = e.transformSearchClient,
                    g = void 0 === b ? bn : b,
                    O = e.disableUserPersonalization,
                    S = void 0 !== O && O,
                    w = e.initialQuery,
                    E = void 0 === w ? "" : w,
                    j = e.translations,
                    P = void 0 === j ? {} : j,
                    I = P.footer,
                    D = P.searchBox,
                    k = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
                                return o;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                        }
                        return o;
                    })(P, dr),
                    x = (function (e, t) {
                        return (
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })(e) ||
                            (function (e, t) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                    } catch (e) {
                                        (o = !0), (i = e);
                                    } finally {
                                        try {
                                            r || null == c.return || c.return();
                                        } finally {
                                            if (o) throw i;
                                        }
                                    }
                                    return n;
                                }
                            })(e, t) ||
                            (function (e, t) {
                                if (e) {
                                    if ("string" == typeof e) return yr(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return (
                                        "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yr(e, t) : void 0
                                    );
                                }
                            })(e, t) ||
                            (function () {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()
                        );
                    })(Le.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2),
                    C = x[0],
                    A = x[1],
                    N = Le.useRef(null),
                    T = Le.useRef(null),
                    L = Le.useRef(null),
                    R = Le.useRef(null),
                    M = Le.useRef(null),
                    H = Le.useRef(10),
                    q = Le.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current,
                    U = Le.useRef(E || q).current,
                    F = (function (t, n, r) {
                        return Le.useMemo(
                            function () {
                                var e = fr(t, n);
                                return e.addAlgoliaAgent("docsearch", pr), !1 === /docsearch.js \(.*\)/.test(e.transporter.userAgent.value) && e.addAlgoliaAgent("docsearch-react", pr), r(e);
                            },
                            [t, n, r]
                        );
                    })(n, r, g),
                    B = Le.useRef(Rn({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(o), limit: 10 })).current,
                    V = Le.useRef(Rn({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(o), limit: 0 === B.getAll().length ? 7 : 4 })).current,
                    z = Le.useCallback(
                        function (e) {
                            if (!S) {
                                var t = "content" === e.type ? e.__docsearch_parent : e;
                                t &&
                                    -1 ===
                                        B.getAll().findIndex(function (e) {
                                            return e.objectID === t.objectID;
                                        }) &&
                                    V.add(t);
                            }
                        },
                        [B, V, S]
                    ),
                    W = Le.useMemo(
                        function () {
                            return Ft({
                                id: "docsearch",
                                defaultActiveItemId: 0,
                                placeholder: a,
                                openOnFocus: !0,
                                initialState: { query: U, context: { searchSuggestions: [] } },
                                navigator: v,
                                onStateChange: function (e) {
                                    A(e.state);
                                },
                                getSources: function (e) {
                                    var t = e.query,
                                        i = e.state,
                                        a = e.setContext,
                                        n = e.setStatus;
                                    return t
                                        ? F.search([
                                              {
                                                  query: t,
                                                  indexName: o,
                                                  params: vr(
                                                      {
                                                          attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
                                                          attributesToSnippet: [
                                                              "hierarchy.lvl1:".concat(H.current),
                                                              "hierarchy.lvl2:".concat(H.current),
                                                              "hierarchy.lvl3:".concat(H.current),
                                                              "hierarchy.lvl4:".concat(H.current),
                                                              "hierarchy.lvl5:".concat(H.current),
                                                              "hierarchy.lvl6:".concat(H.current),
                                                              "content:".concat(H.current),
                                                          ],
                                                          snippetEllipsisText: "…",
                                                          highlightPreTag: "<mark>",
                                                          highlightPostTag: "</mark>",
                                                          hitsPerPage: 20,
                                                      },
                                                      c
                                                  ),
                                              },
                                          ])
                                              .catch(function (e) {
                                                  throw ("RetryError" === e.name && n("error"), e);
                                              })
                                              .then(function (e) {
                                                  var t = e.results[0],
                                                      n = t.hits,
                                                      r = t.nbHits,
                                                      o = _n(n, function (e) {
                                                          return wn(e);
                                                      });
                                                  return (
                                                      i.context.searchSuggestions.length < Object.keys(o).length && a({ searchSuggestions: Object.keys(o) }),
                                                      a({ nbHits: r }),
                                                      Object.values(o).map(function (e, t) {
                                                          return {
                                                              sourceId: "hits".concat(t),
                                                              onSelect: function (e) {
                                                                  var t = e.item,
                                                                      n = e.event;
                                                                  z(t), n.shiftKey || n.ctrlKey || n.metaKey || l();
                                                              },
                                                              getItemUrl: function (e) {
                                                                  return e.item.url;
                                                              },
                                                              getItems: function () {
                                                                  return Object.values(
                                                                      _n(e, function (e) {
                                                                          return e.hierarchy.lvl1;
                                                                      })
                                                                  )
                                                                      .map(f)
                                                                      .map(function (e) {
                                                                          return e.map(function (t) {
                                                                              return vr(
                                                                                  vr({}, t),
                                                                                  {},
                                                                                  {
                                                                                      __docsearch_parent:
                                                                                          "lvl1" !== t.type &&
                                                                                          e.find(function (e) {
                                                                                              return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1;
                                                                                          }),
                                                                                  }
                                                                              );
                                                                          });
                                                                      })
                                                                      .flat();
                                                              },
                                                          };
                                                      })
                                                  );
                                              })
                                        : S
                                        ? []
                                        : [
                                              {
                                                  sourceId: "recentSearches",
                                                  onSelect: function (e) {
                                                      var t = e.item,
                                                          n = e.event;
                                                      z(t), n.shiftKey || n.ctrlKey || n.metaKey || l();
                                                  },
                                                  getItemUrl: function (e) {
                                                      return e.item.url;
                                                  },
                                                  getItems: function () {
                                                      return V.getAll();
                                                  },
                                              },
                                              {
                                                  sourceId: "favoriteSearches",
                                                  onSelect: function (e) {
                                                      var t = e.item,
                                                          n = e.event;
                                                      z(t), n.shiftKey || n.ctrlKey || n.metaKey || l();
                                                  },
                                                  getItemUrl: function (e) {
                                                      return e.item.url;
                                                  },
                                                  getItems: function () {
                                                      return B.getAll();
                                                  },
                                              },
                                          ];
                                },
                            });
                        },
                        [o, c, F, l, V, B, z, U, a, v, f, S]
                    ),
                    K = W.getEnvironmentProps,
                    J = W.getRootProps,
                    $ = W.refresh;
                return (
                    (function (e) {
                        var r = e.getEnvironmentProps,
                            o = e.panelElement,
                            i = e.formElement,
                            a = e.inputElement;
                        Le.useEffect(
                            function () {
                                if (o && i && a) {
                                    var e = r({ panelElement: o, formElement: i, inputElement: a }),
                                        t = e.onTouchStart,
                                        n = e.onTouchMove;
                                    return (
                                        window.addEventListener("touchstart", t),
                                        window.addEventListener("touchmove", n),
                                        function () {
                                            window.removeEventListener("touchstart", t), window.removeEventListener("touchmove", n);
                                        }
                                    );
                                }
                            },
                            [r, o, i, a]
                        );
                    })({ getEnvironmentProps: K, panelElement: R.current, formElement: L.current, inputElement: M.current }),
                    (function (e) {
                        var o = e.container;
                        Le.useEffect(
                            function () {
                                if (o) {
                                    var e = o.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),
                                        t = e[0],
                                        n = e[e.length - 1];
                                    return (
                                        o.addEventListener("keydown", r),
                                        function () {
                                            o.removeEventListener("keydown", r);
                                        }
                                    );
                                }
                                function r(e) {
                                    "Tab" === e.key && (e.shiftKey ? document.activeElement === t && (e.preventDefault(), n.focus()) : document.activeElement === n && (e.preventDefault(), t.focus()));
                                }
                            },
                            [o]
                        );
                    })({ container: N.current }),
                    Le.useEffect(function () {
                        return (
                            document.body.classList.add("DocSearch--active"),
                            function () {
                                var e, t;
                                document.body.classList.remove("DocSearch--active"), null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, _);
                            }
                        );
                    }, []),
                    Le.useEffect(function () {
                        window.matchMedia("(max-width: 750px)").matches && (H.current = 5);
                    }, []),
                    Le.useEffect(
                        function () {
                            R.current && (R.current.scrollTop = 0);
                        },
                        [C.query]
                    ),
                    Le.useEffect(
                        function () {
                            0 < U.length && ($(), M.current && M.current.focus());
                        },
                        [U, $]
                    ),
                    Le.useEffect(function () {
                        function e() {
                            if (T.current) {
                                var e = 0.01 * window.innerHeight;
                                T.current.style.setProperty("--docsearch-vh", "".concat(e, "px"));
                            }
                        }
                        return (
                            e(),
                            window.addEventListener("resize", e),
                            function () {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, []),
                    Le.createElement(
                        "div",
                        mr({ ref: N }, J({ "aria-expanded": !0 }), {
                            className: ["DocSearch", "DocSearch-Container", "stalled" === C.status && "DocSearch-Container--Stalled", "error" === C.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
                            role: "button",
                            tabIndex: 0,
                            onMouseDown: function (e) {
                                e.target === e.currentTarget && l();
                            },
                        }),
                        Le.createElement(
                            "div",
                            { className: "DocSearch-Modal", ref: T },
                            Le.createElement(
                                "header",
                                { className: "DocSearch-SearchBar", ref: L },
                                Le.createElement(Tn, mr({}, W, { state: C, autoFocus: 0 === U.length, inputRef: M, isFromSelection: Boolean(U) && U === q, translations: D, onClose: l }))
                            ),
                            Le.createElement(
                                "div",
                                { className: "DocSearch-Dropdown", ref: R },
                                Le.createElement(
                                    Cn,
                                    mr({}, W, {
                                        indexName: o,
                                        state: C,
                                        hitComponent: d,
                                        resultsFooterComponent: h,
                                        disableUserPersonalization: S,
                                        recentSearches: V,
                                        favoriteSearches: B,
                                        inputRef: M,
                                        translations: k,
                                        onItemClick: function (e) {
                                            z(e), l();
                                        },
                                    })
                                )
                            ),
                            Le.createElement("footer", { className: "DocSearch-Footer" }, Le.createElement(zt, { translations: I }))
                        )
                    )
                );
            }
            function br() {
                return (br =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function gr(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                (o = !0), (i = e);
                            } finally {
                                try {
                                    r || null == c.return || c.return();
                                } finally {
                                    if (o) throw i;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return Or(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Or(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function Or(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function Sr(e) {
                var t,
                    n,
                    r = Le.useRef(null),
                    o = gr(Le.useState(!1), 2),
                    i = o[0],
                    a = o[1],
                    c = gr(Le.useState((null == e ? void 0 : e.initialQuery) || void 0), 2),
                    u = c[0],
                    l = c[1],
                    s = Le.useCallback(
                        function () {
                            a(!0);
                        },
                        [a]
                    ),
                    f = Le.useCallback(
                        function () {
                            a(!1);
                        },
                        [a]
                    );
                return (
                    (function (e) {
                        var t = e.isOpen,
                            n = e.onOpen,
                            r = e.onClose,
                            o = e.onInput,
                            i = e.searchButtonRef;
                        Le.useEffect(
                            function () {
                                function e(e) {
                                    ((27 === e.keyCode && t) ||
                                        ("k" === e.key && (e.metaKey || e.ctrlKey)) ||
                                        (!(function (e) {
                                            var t = e.target,
                                                n = t.tagName;
                                            return t.isContentEditable || "INPUT" === n || "SELECT" === n || "TEXTAREA" === n;
                                        })(e) &&
                                            "/" === e.key &&
                                            !t)) &&
                                        (e.preventDefault(), t ? r() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n()),
                                        i && i.current === document.activeElement && o && /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) && o(e);
                                }
                                return (
                                    window.addEventListener("keydown", e),
                                    function () {
                                        window.removeEventListener("keydown", e);
                                    }
                                );
                            },
                            [t, n, r, o, i]
                        );
                    })({
                        isOpen: i,
                        onOpen: s,
                        onClose: f,
                        onInput: Le.useCallback(
                            function (e) {
                                a(!0), l(e.key);
                            },
                            [a, l]
                        ),
                        searchButtonRef: r,
                    }),
                    Le.createElement(
                        Le.Fragment,
                        null,
                        Le.createElement(Ue, { ref: r, translations: null == e || null === (t = e.translations) || void 0 === t ? void 0 : t.button, onClick: s }),
                        i && Oe(Le.createElement(_r, br({}, e, { initialScrollY: window.scrollY, initialQuery: u, translations: null == e || null === (n = e.translations) || void 0 === n ? void 0 : n.modal, onClose: f })), document.body)
                    )
                );
            }
            return function (t) {
                Ee(
                    Le.createElement(
                        Sr,
                        e({}, t, {
                            transformSearchClient: function (e) {
                                return e.addAlgoliaAgent("docsearch.js", pr), t.transformSearchClient ? t.transformSearchClient(e) : e;
                            },
                        })
                    ),
                    (function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window;
                        return "string" == typeof e ? t.document.querySelector(e) : e;
                    })(t.container, t.environment)
                );
            };
        })();
    },
    function (e, t, n) {
        "use strict";
        var r,
            o = n(6),
            i = (r = o) && r.__esModule ? r : { default: r };
        n(5), n(4), n(3), n(2), n(1), (0, i.default)({ apiKey: "8aeceef7bd879649457b26dc6cc03481", indexName: "fly", container: "#docsearch", placeholder: "Search the docs", debug: !1 });
        var a,
            c,
            u,
            l = n(0);
        document.body.addEventListener(
            "click",
            function (e) {
                var n = e.target,
                    t = n.getAttribute("data-copy-target");
                if (!t) return !1;
                e.preventDefault();
                var r = "sibling" === t ? n.nextElementSibling : document.querySelector(t);
                l.writeText(r.innerText).then(
                    function () {
                        var e =
                                "" === n.innerHTML
                                    ? '<svg class="pointer:off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M17.257 8.502l-7.43 6.996-3.083-3.083" /><path d="M21.995 3.778c0-1.706-1.347-3.091-3.006-3.091H4.96c-1.659 0-3.006 1.385-3.006 3.091v14.424c0 1.706 1.347 3.091 3.006 3.091h14.029c1.659 0 3.006-1.385 3.006-3.091V3.778z" transform="matrix(.99798 0 0 .97057 .05 1.333)" /></svg>'
                                    : n.innerHTML,
                            t = n.getAttribute("data-copy-success") ? decodeURIComponent(n.getAttribute("data-copy-success")) : "Copied!";
                        (n.style.pointerEvents = "none"),
                            n.blur(),
                            (n.innerHTML = t),
                            setTimeout(function () {
                                (n.innerHTML = e), (n.style.pointerEvents = "");
                            }, 2e3);
                    },
                    function (e) {
                        n.innerHTML = "Error";
                    }
                );
            },
            !0
        ),
            (u = c = a = void 0),
            document.addEventListener(
                "click",
                function (e) {
                    e.target.closest("[data-menu-toggle]") &&
                        ((document.body.dataset.menuState = "on" === document.body.dataset.menuState ? "off" : "on"),
                        "on" === document.body.dataset.menuState
                            ? (s("[data-menu]", !0),
                              (a = document
                                  .querySelector("[data-menu-container]")
                                  .querySelectorAll(
                                      'a[href]:not([tabindex="-1"]), area[href]:not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), iframe:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [contentEditable=true]:not([tabindex="-1"])'
                                  )),
                              (c = a[0]),
                              (u = a[a.length - 1]))
                            : s("[data-menu]", !1));
                },
                !1
            ),
            document.addEventListener(
                "keydown",
                function (e) {
                    if (((e = e || window.event), "on" !== document.body.dataset.menuState)) return !1;
                    switch (e.keyCode) {
                        case 9:
                            if (1 === a.length) {
                                e.preventDefault();
                                break;
                            }
                            e.shiftKey ? document.activeElement === c && (e.preventDefault(), u.focus()) : document.activeElement === u && (e.preventDefault(), c.focus());
                            break;
                        case 27:
                            s("[data-menu]", !(document.body.dataset.menuState = "off"));
                    }
                },
                !1
            );
        function s(e, t) {
            var n = document.querySelector(e);
            n.querySelectorAll("button, [href], input, select, textarea").forEach(function (e) {
                return e.setAttribute("tabindex", t ? "" : "-1");
            }),
                n.classList.toggle("hidden"),
                n.classList.toggle("grid");
        }
        document.addEventListener("DOMContentLoaded", function () {
            ({
                container: document.querySelector(".outline-list"),
                links: null,
                headings: null,
                intersectionOptions: { rootMargin: "0px", threshold: 1 },
                previousSection: null,
                observer: null,
                init: function () {
                    (this.handleObserver = this.handleObserver.bind(this)), this.setUpObserver(), this.findLinksAndHeadings(), this.observeSections();
                },
                handleObserver: function (e, t) {
                    var r = this;
                    e.forEach(function (e) {
                        var t = "#" + e.target.getAttribute("id"),
                            n = r.links.find(function (e) {
                                return e.getAttribute("href") === t;
                            });
                        e.isIntersecting && 1 <= e.intersectionRatio ? (n.classList.add("visible"), (r.previousSection = e.target.getAttribute("id"))) : n.classList.remove("visible"), r.highlightFirstActive();
                    });
                },
                highlightFirstActive: function () {
                    var e = this.container.querySelector(".visible");
                    this.links.forEach(function (e) {
                        e.classList.remove("active");
                    }),
                        e && e.classList.add("active"),
                        !e && this.previousSection && this.container.querySelector('a[href="#' + this.previousSection + '"]').classList.add("active");
                },
                observeSections: function () {
                    var t = this;
                    this.headings.forEach(function (e) {
                        t.observer.observe(e);
                    });
                },
                setUpObserver: function () {
                    this.observer = new IntersectionObserver(this.handleObserver, this.intersectionOptions);
                },
                findLinksAndHeadings: function () {
                    (this.links = [].concat(
                        (function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n;
                            }
                            return Array.from(e);
                        })(this.container.querySelectorAll("a"))
                    )),
                        (this.headings = this.links.map(function (e) {
                            var t = e.getAttribute("href");
                            return document.querySelector(t);
                        }));
                },
            }.init());
        })
    },
]);
