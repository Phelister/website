"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1876],
  {
    1876: function (e, t, n) {
      n.d(t, {
        Mt: function () {
          return re;
        },
        Ol: function () {
          return te;
        },
        Qd: function () {
          return R;
        },
        UQ: function () {
          return C;
        },
        on: function () {
          return Y;
        },
      });
      var r = n(7294);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t, n) {
        return (
          t && l(e.prototype, t),
          n && l(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d() {
        return (
          (d =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          d.apply(this, arguments)
        );
      }
      function s(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && f(e, t);
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t) {
        if (t && ("object" === typeof t || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return b(e);
      }
      function h(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = p(e);
          if (t) {
            var o = p(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return v(this, n);
        };
      }
      function g(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              a = [],
              i = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(i = (r = n.next()).done) &&
                (a.push(r.value), !t || a.length !== t);
                i = !0
              );
            } catch (u) {
              (l = !0), (o = u);
            } finally {
              try {
                i || null == n.return || n.return();
              } finally {
                if (l) throw o;
              }
            }
            return a;
          })(e, t) ||
          E(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return x(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          E(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(e, t) {
        if (e) {
          if ("string" === typeof e) return x(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? x(e, t)
              : void 0
          );
        }
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var w = u(function e(t) {
          var n = this,
            r = t.expanded,
            o = void 0 === r ? [] : r,
            l = t.allowMultipleExpanded,
            u = void 0 !== l && l,
            d = t.allowZeroExpanded,
            s = void 0 !== d && d;
          i(this, e),
            c(this, "expanded", void 0),
            c(this, "allowMultipleExpanded", void 0),
            c(this, "allowZeroExpanded", void 0),
            c(this, "toggleExpanded", function (e) {
              return n.isItemDisabled(e)
                ? n
                : n.isItemExpanded(e)
                ? n.augment({
                    expanded: n.expanded.filter(function (t) {
                      return t !== e;
                    }),
                  })
                : n.augment({
                    expanded: n.allowMultipleExpanded
                      ? [].concat(y(n.expanded), [e])
                      : [e],
                  });
            }),
            c(this, "isItemDisabled", function (e) {
              var t = n.isItemExpanded(e),
                r = 1 === n.expanded.length;
              return Boolean(t && !n.allowZeroExpanded && r);
            }),
            c(this, "isItemExpanded", function (e) {
              return -1 !== n.expanded.indexOf(e);
            }),
            c(this, "getPanelAttributes", function (e, t) {
              var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e);
              return {
                role: n.allowMultipleExpanded ? void 0 : "region",
                "aria-hidden": n.allowMultipleExpanded ? !r : void 0,
                "aria-labelledby": n.getButtonId(e),
                id: n.getPanelId(e),
                hidden: !r || void 0,
              };
            }),
            c(this, "getHeadingAttributes", function () {
              return { role: "heading" };
            }),
            c(this, "getButtonAttributes", function (e, t) {
              var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e),
                o = n.isItemDisabled(e);
              return {
                id: n.getButtonId(e),
                "aria-disabled": o,
                "aria-expanded": r,
                "aria-controls": n.getPanelId(e),
                role: "button",
                tabIndex: 0,
              };
            }),
            c(this, "getPanelId", function (e) {
              return "accordion__panel-".concat(e);
            }),
            c(this, "getButtonId", function (e) {
              return "accordion__heading-".concat(e);
            }),
            c(this, "augment", function (t) {
              return new e(
                a(
                  {
                    expanded: n.expanded,
                    allowMultipleExpanded: n.allowMultipleExpanded,
                    allowZeroExpanded: n.allowZeroExpanded,
                  },
                  t
                )
              );
            }),
            (this.expanded = o),
            (this.allowMultipleExpanded = u),
            (this.allowZeroExpanded = s);
        }),
        A = (0, r.createContext)(null),
        I = (function (e) {
          s(n, e);
          var t = h(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              c(
                b((e = t.call.apply(t, [this].concat(o)))),
                "state",
                new w({
                  expanded: e.props.preExpanded,
                  allowMultipleExpanded: e.props.allowMultipleExpanded,
                  allowZeroExpanded: e.props.allowZeroExpanded,
                })
              ),
              c(b(e), "toggleExpanded", function (t) {
                e.setState(
                  function (e) {
                    return e.toggleExpanded(t);
                  },
                  function () {
                    e.props.onChange && e.props.onChange(e.state.expanded);
                  }
                );
              }),
              c(b(e), "isItemDisabled", function (t) {
                return e.state.isItemDisabled(t);
              }),
              c(b(e), "isItemExpanded", function (t) {
                return e.state.isItemExpanded(t);
              }),
              c(b(e), "getPanelAttributes", function (t, n) {
                return e.state.getPanelAttributes(t, n);
              }),
              c(b(e), "getHeadingAttributes", function () {
                return e.state.getHeadingAttributes();
              }),
              c(b(e), "getButtonAttributes", function (t, n) {
                return e.state.getButtonAttributes(t, n);
              }),
              e
            );
          }
          return (
            u(n, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.allowZeroExpanded,
                    n = e.allowMultipleExpanded;
                  return (0, r.createElement)(
                    A.Provider,
                    {
                      value: {
                        allowMultipleExpanded: n,
                        allowZeroExpanded: t,
                        toggleExpanded: this.toggleExpanded,
                        isItemDisabled: this.isItemDisabled,
                        isItemExpanded: this.isItemExpanded,
                        getPanelAttributes: this.getPanelAttributes,
                        getHeadingAttributes: this.getHeadingAttributes,
                        getButtonAttributes: this.getButtonAttributes,
                      },
                    },
                    this.props.children || null
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent);
      c(I, "defaultProps", {
        allowMultipleExpanded: !1,
        allowZeroExpanded: !1,
      });
      var O,
        P = (function (e) {
          s(n, e);
          var t = h(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              c(
                b((e = t.call.apply(t, [this].concat(o)))),
                "renderChildren",
                function (t) {
                  return t ? e.props.children(t) : null;
                }
              ),
              e
            );
          }
          return (
            u(n, [
              {
                key: "render",
                value: function () {
                  return (0, r.createElement)(
                    A.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent),
        j = [
          "className",
          "allowMultipleExpanded",
          "allowZeroExpanded",
          "onChange",
          "preExpanded",
        ],
        C = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion" : t,
            o = e.allowMultipleExpanded,
            a = e.allowZeroExpanded,
            i = e.onChange,
            l = e.preExpanded,
            u = m(e, j);
          return (0, r.createElement)(
            I,
            {
              preExpanded: l,
              allowMultipleExpanded: o,
              allowZeroExpanded: a,
              onChange: i,
            },
            (0, r.createElement)(
              "div",
              d({ "data-accordion-component": "Accordion", className: n }, u)
            )
          );
        };
      !(function (e) {
        (e.Accordion = "Accordion"),
          (e.AccordionItem = "AccordionItem"),
          (e.AccordionItemButton = "AccordionItemButton"),
          (e.AccordionItemHeading = "AccordionItemHeading"),
          (e.AccordionItemPanel = "AccordionItemPanel");
      })(O || (O = {}));
      var D = O,
        _ = 0;
      var S =
          r.useId ||
          function () {
            var e = _;
            return (_ += 1), "raa-".concat(e);
          },
        M = /[\u0009\u000a\u000c\u000d\u0020]/g;
      function B(e) {
        return (
          ("" !== e && !M.test(e)) ||
          (console.error(
            'uuid must be a valid HTML5 id but was given "'.concat(
              e,
              '", ASCII whitespaces are forbidden'
            )
          ),
          !1)
        );
      }
      var N = (0, r.createContext)(null),
        k = function (e) {
          var t = e.children,
            n = e.uuid,
            o = e.accordionContext,
            a = e.dangerouslySetExpanded,
            i = function () {
              o.toggleExpanded(n);
            },
            l = function (e) {
              var o = null !== a && void 0 !== a ? a : e.isItemExpanded(n),
                l = e.isItemDisabled(n),
                u = e.getPanelAttributes(n, a),
                c = e.getHeadingAttributes(n),
                d = e.getButtonAttributes(n, a);
              return (0, r.createElement)(
                N.Provider,
                {
                  value: {
                    uuid: n,
                    expanded: o,
                    disabled: l,
                    toggleExpanded: i,
                    panelAttributes: u,
                    headingAttributes: c,
                    buttonAttributes: d,
                  },
                },
                t
              );
            };
          return (0, r.createElement)(P, null, l);
        },
        Z = function (e) {
          return (0, r.createElement)(P, null, function (t) {
            return (0, r.createElement)(k, d({}, e, { accordionContext: t }));
          });
        },
        H = function (e) {
          var t = e.children,
            n = function (e) {
              return e ? t(e) : null;
            };
          return (0, r.createElement)(N.Consumer, null, n);
        },
        T = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"],
        R = function (e) {
          var t = e.uuid,
            n = e.dangerouslySetExpanded,
            o = e.className,
            a = void 0 === o ? "accordion__item" : o,
            i = e.activeClassName,
            l = m(e, T),
            u = g((0, r.useState)(S()), 1)[0],
            c = null !== t && void 0 !== t ? t : u,
            s = function (e) {
              var t = e.expanded && i ? i : a;
              return (0, r.createElement)(
                "div",
                d(
                  { "data-accordion-component": "AccordionItem", className: t },
                  l
                )
              );
            };
          return (
            B(c.toString()),
            l.id && B(l.id),
            (0, r.createElement)(
              Z,
              { uuid: c, dangerouslySetExpanded: n },
              (0, r.createElement)(H, null, s)
            )
          );
        };
      function L(e) {
        return (
          e &&
          (e.matches('[data-accordion-component="Accordion"]')
            ? e
            : L(e.parentElement))
        );
      }
      function U(e) {
        var t = L(e);
        return (
          t &&
          Array.from(
            t.querySelectorAll(
              '[data-accordion-component="AccordionItemButton"]'
            )
          )
        );
      }
      R.displayName = D.AccordionItem;
      var V = "End",
        Q = "Enter",
        q = "Home",
        F = " ",
        K = "Spacebar",
        W = "ArrowUp",
        $ = "ArrowDown",
        z = "ArrowLeft",
        G = "ArrowRight",
        J = ["toggleExpanded", "className"],
        X = function (e) {
          var t = e.toggleExpanded,
            n = e.className,
            o = void 0 === n ? "accordion__button" : n,
            a = m(e, J);
          return (
            a.id && B(a.id),
            (0, r.createElement)(
              "div",
              d({ className: o }, a, {
                role: "button",
                tabIndex: 0,
                onClick: t,
                onKeyDown: function (e) {
                  var n = e.key;
                  if (
                    ((n !== Q && n !== F && n !== K) ||
                      (e.preventDefault(), t()),
                    e.target instanceof HTMLElement)
                  )
                    switch (n) {
                      case q:
                        e.preventDefault(),
                          (function (e) {
                            var t = (U(e) || [])[0];
                            t && t.focus();
                          })(e.target);
                        break;
                      case V:
                        e.preventDefault(),
                          (function (e) {
                            var t = U(e) || [],
                              n = t[t.length - 1];
                            n && n.focus();
                          })(e.target);
                        break;
                      case z:
                      case W:
                        e.preventDefault(),
                          (function (e) {
                            var t = U(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var r = t[n - 1];
                              r && r.focus();
                            }
                          })(e.target);
                        break;
                      case G:
                      case $:
                        e.preventDefault(),
                          (function (e) {
                            var t = U(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var r = t[n + 1];
                              r && r.focus();
                            }
                          })(e.target);
                    }
                },
                "data-accordion-component": "AccordionItemButton",
              })
            )
          );
        },
        Y = function (e) {
          return (0, r.createElement)(H, null, function (t) {
            var n = t.toggleExpanded,
              o = t.buttonAttributes;
            return (0, r.createElement)(X, d({ toggleExpanded: n }, e, o));
          });
        },
        ee = (function (e) {
          s(n, e);
          var t = h(n);
          function n() {
            var e;
            i(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              c(b((e = t.call.apply(t, [this].concat(o)))), "ref", void 0),
              c(b(e), "setRef", function (t) {
                e.ref = t;
              }),
              e
            );
          }
          return (
            u(
              n,
              [
                {
                  key: "componentDidUpdate",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return (0, r.createElement)(
                      "div",
                      d(
                        { "data-accordion-component": "AccordionItemHeading" },
                        this.props,
                        { ref: this.setRef }
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "VALIDATE",
                  value: function (e) {
                    if (void 0 === e) throw new Error("ref is undefined");
                    if (
                      1 !== e.childElementCount ||
                      !e.firstElementChild ||
                      "AccordionItemButton" !==
                        e.firstElementChild.getAttribute(
                          "data-accordion-component"
                        )
                    )
                      throw new Error(
                        "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n"
                      );
                  },
                },
              ]
            ),
            n
          );
        })(r.PureComponent);
      c(ee, "defaultProps", {
        className: "accordion__heading",
        "aria-level": 3,
      });
      var te = function (e) {
        return (0, r.createElement)(H, null, function (t) {
          var n = t.headingAttributes;
          return e.id && B(e.id), (0, r.createElement)(ee, d({}, e, n));
        });
      };
      te.displayName = D.AccordionItemHeading;
      var ne = ["className", "region", "id"],
        re = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion__panel" : t,
            o = e.region,
            i = e.id,
            l = m(e, ne),
            u = function (e) {
              var t = e.panelAttributes;
              i && B(i);
              var u = a(
                a({}, t),
                {},
                { "aria-labelledby": o ? t["aria-labelledby"] : void 0 }
              );
              return (0, r.createElement)(
                "div",
                d(
                  {
                    "data-accordion-component": "AccordionItemPanel",
                    className: n,
                  },
                  l,
                  u,
                  { role: o ? "region" : void 0 }
                )
              );
            };
          return (0, r.createElement)(H, null, u);
        };
    },
  },
]);
