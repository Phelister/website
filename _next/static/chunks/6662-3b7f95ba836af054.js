"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6662],
  {
    6662: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return g;
        },
      });
      var i = a(4111),
        n = a(1438),
        r = a(2951),
        l = a(4924),
        t = a(8029),
        c = a(460),
        o = a(5893),
        m = a(7294),
        d = a(1664),
        h = a.n(d),
        g = (function (e) {
          (0, t.Z)(a, e);
          var s = (0, c.Z)(a);
          function a() {
            var e;
            return (
              (0, n.Z)(this, a),
              (e = s.apply(this, arguments)),
              (0, l.Z)((0, i.Z)(e), "openTabSection", function (e, s) {
                var a, i, n;
                for (
                  i = document.getElementsByClassName("tabs-item"), a = 0;
                  a < i.length;
                  a++
                )
                  i[a].classList.remove("animate__fadeInUp"),
                    (i[a].style.display = "none");
                for (
                  n = document.getElementsByTagName("li"), a = 0;
                  a < n.length;
                  a++
                )
                  n[a].className = n[a].className.replace("current", "");
                (document.getElementById(s).style.display = "block"),
                  (document.getElementById(s).className +=
                    " animate__fadeInUp animate__animated"),
                  (e.currentTarget.className += "current");
              }),
              e
            );
          }
          return (
            (0, r.Z)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (0, o.jsxs)("div", {
                    className: "services-section bg-f2f6f9 ptb-110",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "container",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "section-title",
                            children: [
                              (0, o.jsx)("h2", {
                                children: "We Offer Professional Solutions",
                              }),
                              (0, o.jsx)("p", {
                                children:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "tab services-tab-list",
                            children: (0, o.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, o.jsx)("div", {
                                  className: "col-lg-4 col-md-4",
                                  children: (0, o.jsxs)("ul", {
                                    className: "tabs",
                                    children: [
                                      (0, o.jsxs)("li", {
                                        className: "current",
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab1");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-income",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Data Analysis",
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("li", {
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab2");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-automatic",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Automation Optimization",
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("li", {
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab3");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-locked",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Security & Surveillance",
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("li", {
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab4");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-molecular",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Health & Manufacturing",
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("li", {
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab5");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-gear",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "Software Engineers",
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("li", {
                                        onClick: function (s) {
                                          return e.openTabSection(s, "tab6");
                                        },
                                        children: [
                                          (0, o.jsx)("i", {
                                            className: "flaticon-ceo",
                                          }),
                                          (0, o.jsx)("span", {
                                            children: "IT Professional",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, o.jsx)("div", {
                                  className: "col-lg-8 col-md-8",
                                  children: (0, o.jsxs)("div", {
                                    className: "tab-content",
                                    children: [
                                      (0, o.jsxs)("div", {
                                        id: "tab1",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        id: "tab2",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        id: "tab3",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        id: "tab4",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        id: "tab5",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, o.jsxs)("div", {
                                        id: "tab6",
                                        className: "tabs-item",
                                        children: [
                                          (0, o.jsx)("div", {
                                            className: "image",
                                            children: (0, o.jsx)("img", {
                                              src: "/images/services-img1.png",
                                              alt: "image",
                                            }),
                                          }),
                                          (0, o.jsxs)("div", {
                                            className: "content",
                                            children: [
                                              (0, o.jsx)("p", {
                                                children:
                                                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.",
                                              }),
                                              (0, o.jsx)(h(), {
                                                href: "/service-details",
                                                children: (0, o.jsx)("a", {
                                                  className: "btn btn-primary",
                                                  children: "Read More",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: "shape-img1",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/shape1.png",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "shape-img3",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/shape3.png",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "shape-img2",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/shape2.svg",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "shape-img5",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/shape5.svg",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "shape-img4",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/shape4.svg",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "dot-shape1",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/dot1.png",
                          alt: "image",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: "dot-shape2",
                        children: (0, o.jsx)("img", {
                          src: "/images/shape/dot3.png",
                          alt: "image",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(m.Component);
    },
  },
]);
