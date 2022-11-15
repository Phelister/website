"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2808],
  {
    2808: function (a, e, s) {
      var l = s(4111),
        i = s(1438),
        c = s(2951),
        n = s(4924),
        r = s(8029),
        t = s(460),
        m = s(5893),
        h = s(7294),
        d = s(3823),
        v = (function (a) {
          (0, r.Z)(s, a);
          var e = (0, t.Z)(s);
          function s() {
            var a;
            return (
              (0, i.Z)(this, s),
              (a = e.apply(this, arguments)),
              (0, n.Z)((0, l.Z)(a), "state", { searchForm: !1 }),
              (0, n.Z)((0, l.Z)(a), "handleSearchForm", function () {
                a.setState(function (a) {
                  return { searchForm: !a.searchForm };
                });
              }),
              (0, n.Z)((0, l.Z)(a), "_isMounted", !1),
              (0, n.Z)((0, l.Z)(a), "state", { display: !1, collapsed: !0 }),
              (0, n.Z)((0, l.Z)(a), "toggleNavbar", function () {
                a.setState({ collapsed: !a.state.collapsed });
              }),
              a
            );
          }
          return (
            (0, c.Z)(s, [
              {
                key: "componentDidMount",
                value: function () {
                  var a = document.getElementById("navbar");
                  document.addEventListener("scroll", function () {
                    window.scrollY > 170
                      ? a.classList.add("is-sticky")
                      : a.classList.remove("is-sticky");
                  });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var a = this.state.collapsed,
                    e = a
                      ? "collapse navbar-collapse"
                      : "collapse navbar-collapse show",
                    s = a
                      ? "navbar-toggler navbar-toggler-right collapsed"
                      : "navbar-toggler navbar-toggler-right";
                  return (0, m.jsx)(m.Fragment, {
                    children: (0, m.jsx)("div", {
                      id: "navbar",
                      className: "navbar-area",
                      children: (0, m.jsx)("div", {
                        className: "main-nav",
                        children: (0, m.jsx)("div", {
                          className: "container",
                          children: (0, m.jsxs)("nav", {
                            className: "navbar navbar-expand-md navbar-light",
                            children: [
                              (0, m.jsx)(d.Z, {
                                href: "/",
                                children: (0, m.jsxs)("a", {
                                  className: "navbar-brand",
                                  children: [
                                    (0, m.jsx)("img", {
                                      src: "/images/white-logo.png",
                                      className: "main-logo",
                                      alt: "logo",
                                    }),
                                    (0, m.jsx)("img", {
                                      src: "/images/black-logo.png",
                                      className: "optional-logo",
                                      alt: "logo",
                                    }),
                                  ],
                                }),
                              }),
                              (0, m.jsxs)("button", {
                                onClick: this.toggleNavbar,
                                className: s,
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                  (0, m.jsx)("span", {
                                    className: "icon-bar top-bar",
                                  }),
                                  (0, m.jsx)("span", {
                                    className: "icon-bar middle-bar",
                                  }),
                                  (0, m.jsx)("span", {
                                    className: "icon-bar bottom-bar",
                                  }),
                                ],
                              }),
                              (0, m.jsxs)("div", {
                                className: e,
                                id: "navbarSupportedContent",
                                children: [
                                  (0, m.jsxs)("ul", {
                                    className: "navbar-nav",
                                    children: [
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            activeClassName: "active",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              onClick: function (a) {
                                                return a.preventDefault();
                                              },
                                              children: [
                                                "Home ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 1",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-2",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 2",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-3",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 3",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-4",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 4",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-5",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 5",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-6",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 6",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-7",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 7",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/index-8",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Home Demo - 8",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              onClick: function (a) {
                                                return a.preventDefault();
                                              },
                                              children: [
                                                "Pages ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/about",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "About Us",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/about-two",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "About Us Two",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/team",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Team",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/pricing",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Pricing",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/feedback",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Feedback",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/partner",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Partner",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/faq",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Faq",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/coming-soon",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Coming Soon",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/404",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "404 Error",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            activeClassName: "active",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              children: [
                                                "Services ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/services",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Services Style One",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/services-two",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Services Style Two",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/services-three",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Services Style Three",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/services-four",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Services Style Four",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/service-details",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Service Details",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              children: [
                                                "Projects ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/projects",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Projects",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/projects-details",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Projects Details",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              children: [
                                                "Shop ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/shop",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Shop",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/single-products",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Single Products",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/cart",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Cart",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/checkout",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Checkout",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("li", {
                                        className: "nav-item",
                                        children: [
                                          (0, m.jsx)(d.Z, {
                                            href: "#",
                                            children: (0, m.jsxs)("a", {
                                              className: "nav-link",
                                              children: [
                                                "Blog ",
                                                (0, m.jsx)("i", {
                                                  className:
                                                    "fas fa-chevron-down",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, m.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            children: [
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/blog",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Blog Grid",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/blog2",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children:
                                                      "Blog Right Sidebar",
                                                  }),
                                                }),
                                              }),
                                              (0, m.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, m.jsx)(d.Z, {
                                                  href: "/blog-details",
                                                  activeClassName: "active",
                                                  children: (0, m.jsx)("a", {
                                                    className: "nav-link",
                                                    children: "Blog Details",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, m.jsx)("li", {
                                        className: "nav-item",
                                        children: (0, m.jsx)(d.Z, {
                                          href: "/contact",
                                          activeClassName: "active",
                                          children: (0, m.jsx)("a", {
                                            className: "nav-link",
                                            children: "Contact",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("div", {
                                    className: "others-options",
                                    children: [
                                      (0, m.jsx)(d.Z, {
                                        href: "/cart",
                                        children: (0, m.jsxs)("a", {
                                          className: "cart-btn",
                                          children: [
                                            (0, m.jsx)("i", {
                                              className:
                                                "flaticon-commerce-and-shopping",
                                            }),
                                            (0, m.jsx)("span", {
                                              children: "1",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, m.jsxs)("div", {
                                        className: "option-item",
                                        children: [
                                          (0, m.jsx)("i", {
                                            onClick: this.handleSearchForm,
                                            className:
                                              "search-btn flaticon-search",
                                            style: {
                                              display: this.state.searchForm
                                                ? "none"
                                                : "block",
                                            },
                                          }),
                                          (0, m.jsx)("i", {
                                            onClick: this.handleSearchForm,
                                            className:
                                              "close-btn fas fa-times ".concat(
                                                this.state.searchForm
                                                  ? "active"
                                                  : ""
                                              ),
                                          }),
                                          (0, m.jsx)("div", {
                                            className:
                                              "search-overlay search-popup",
                                            style: {
                                              display: this.state.searchForm
                                                ? "block"
                                                : "none",
                                            },
                                            children: (0, m.jsx)("div", {
                                              className: "search-box",
                                              children: (0, m.jsxs)("form", {
                                                className: "search-form",
                                                children: [
                                                  (0, m.jsx)("input", {
                                                    className: "search-input",
                                                    name: "search",
                                                    placeholder: "Search",
                                                    type: "text",
                                                  }),
                                                  (0, m.jsx)("button", {
                                                    className: "search-button",
                                                    type: "submit",
                                                    children: (0, m.jsx)("i", {
                                                      className:
                                                        "fas fa-search",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, m.jsx)(d.Z, {
                                        href: "/contact",
                                        children: (0, m.jsx)("a", {
                                          className: "btn btn-primary",
                                          children: "Schedule a Demo",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(h.Component);
      e.Z = v;
    },
  },
]);
