(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/about.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/cv.pdf";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/resume2023.bbf53d4e.pdf";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/logoUtn.png";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/logoCtp.png";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/work3.09b0176f.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/work4.cc24c066.jpg";
    },
    ,
    function (e, a, t) {
      e.exports = t(32);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(0),
        c = t.n(l),
        n = t(3),
        i = t.n(n),
        s = (t(21), t(1)),
        r =
          (t(22),
          function () {
            window.addEventListener("scroll", function () {
              var e = document.querySelector(".header");
              this.scrollY >= 80
                ? e.classList.add("scroll-header")
                : e.classList.remove("scroll-header");
            });
            var e = Object(l.useState)(!1),
              a = Object(s.a)(e, 2),
              t = a[0],
              n = a[1],
              i = Object(l.useState)("#home"),
              r = Object(s.a)(i, 2),
              m = r[0],
              o = r[1];
            return c.a.createElement(
              "header",
              { className: "header" },
              c.a.createElement(
                "nav",
                { className: "nav container" },
                c.a.createElement(
                  "a",
                  { href: "index.html", className: "nav__logo" },
                  "maria"
                ),
                c.a.createElement(
                  "div",
                  { className: t ? "nav__menu show-menu" : "nav__menu" },
                  c.a.createElement(
                    "ul",
                    { className: "nav__list grid" },
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#home",
                          onClick: function () {
                            return o("#home");
                          },
                          className:
                            "#home" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-estate nav__icon",
                        }),
                        " Home"
                      )
                    ),
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#about",
                          onClick: function () {
                            return o("#about");
                          },
                          className:
                            "#about" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-user nav__icon",
                        }),
                        " About"
                      )
                    ),
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#skills",
                          onClick: function () {
                            return o("#skills");
                          },
                          className:
                            "#skills" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-file-alt nav__icon",
                        }),
                        " Skills"
                      )
                    ),
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#education",
                          onClick: function () {
                            return o("#education");
                          },
                          className:
                            "#education" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-file-alt nav__icon",
                        }),
                        "Education"
                      )
                    ),
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#courses",
                          onClick: function () {
                            return o("#courses");
                          },
                          className:
                            "#courses" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-file-alt nav__icon",
                        }),
                        "Courses"
                      )
                    ),
                    c.a.createElement(
                      "li",
                      { className: "nav__item" },
                      c.a.createElement(
                        "a",
                        {
                          href: "#contact",
                          onClick: function () {
                            return o("#contact");
                          },
                          className:
                            "#contact" === m
                              ? "nav__link active-link"
                              : "nav__link",
                        },
                        c.a.createElement("i", {
                          className: "uil uil-message nav__icon",
                        }),
                        " Contact"
                      )
                    )
                  ),
                  c.a.createElement("i", {
                    className: "uil uil-times nav__close",
                    onClick: function () {
                      return n(!t);
                    },
                  })
                ),
                c.a.createElement(
                  "div",
                  {
                    className: "nav__toggle",
                    onClick: function () {
                      return n(!t);
                    },
                  },
                  c.a.createElement("i", { className: "uil uil-apps" })
                )
              )
            );
          }),
        m =
          (t(23),
          function () {
            return c.a.createElement(
              "div",
              { className: "home__social" },
              c.a.createElement(
                "a",
                {
                  href: "https://www.instagram.com/mariarodme",
                  className: "home__social-icon",
                  target: "_blank",
                },
                c.a.createElement("i", { className: "uil uil-instagram" })
              ),
              c.a.createElement(
                "a",
                {
                  href: "https://www.linkedin.com/in/mariarodmez/",
                  className: "home__social-icon",
                  target: "_blank",
                },
                c.a.createElement("i", { class: "uil uil-linkedin" })
              )
            );
          }),
        o = function () {
          return c.a.createElement(
            "div",
            { className: "home__data" },
            c.a.createElement(
              "h1",
              { className: "home__title" },
              "Beatriz Rodríguez"
            ),
            c.a.createElement(
              "h3",
              { className: "home__subtitle" },
              "Administrative Accountant"
            ),
            c.a.createElement(
              "p",
              { className: "home__description" },
              "Experienced Administrative Accountant specializing in financial statements, spreadsheets, payment systems, electronic invoicing and auditing."
            ),
            c.a.createElement(
              "a",
              { href: "#contact", className: "button button--flex" },
              "Contact me",
              c.a.createElement(
                "svg",
                {
                  class: "button__icon",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                },
                c.a.createElement("path", {
                  d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                  fill: "var(--container-color)",
                }),
                c.a.createElement("path", {
                  d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                  fill: "var(--container-color)",
                })
              )
            )
          );
        },
        _ = function () {
          return c.a.createElement(
            "div",
            { className: "home__scroll" },
            c.a.createElement(
              "a",
              { href: "#about", className: "home__scroll-button button--flex" },
              c.a.createElement(
                "svg",
                {
                  width: "32px",
                  height: "32px",
                  class: "home__scroll-mouse",
                  viewBox: "0 0 247 390",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                  },
                },
                c.a.createElement("path", {
                  class: "wheel",
                  d: "M123.359,79.775l0,72.843",
                  style: {
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "20px",
                  },
                }),
                c.a.createElement("path", {
                  id: "mouse",
                  d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                  style: {
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "20px",
                  },
                })
              ),
              c.a.createElement(
                "span",
                { className: "home__scroll-name" },
                "Scroll Down"
              ),
              c.a.createElement("i", {
                class: "uil uil-arrow-down home__scroll-arrow",
              })
            )
          );
        },
        u = function () {
          return c.a.createElement(
            "section",
            { className: "home section", id: "home" },
            c.a.createElement(
              "div",
              { className: "home__container container grid" },
              c.a.createElement(
                "div",
                { className: "home__content grid" },
                c.a.createElement(m, null),
                c.a.createElement("div", { className: "home__img" }),
                c.a.createElement(o, null)
              ),
              c.a.createElement(_, null)
            )
          );
        },
        E = (t(24), t(4)),
        d = t.n(E),
        v = t(5),
        N = t.n(v),
        f = function () {
          return c.a.createElement(
            "div",
            { className: "about__info grid" },
            c.a.createElement(
              "div",
              { className: "about__box" },
              c.a.createElement("i", { class: "bx bx-award about__icon" }),
              c.a.createElement(
                "h3",
                { className: "about__title" },
                "Experience"
              ),
              c.a.createElement(
                "span",
                { className: "about__subtitle" },
                "2 years working"
              )
            ),
            c.a.createElement(
              "div",
              { className: "about__box" },
              c.a.createElement("i", { class: "bx bx-map-pin about__icon" }),
              c.a.createElement(
                "h3",
                { className: "about__title" },
                "Location"
              ),
              c.a.createElement(
                "span",
                { className: "about__subtitle" },
                "Costa Rica"
              )
            ),
            c.a.createElement(
              "div",
              { className: "about__box" },
              c.a.createElement("i", {
                class: "bx bx-conversation about__icon",
              }),
              c.a.createElement(
                "h3",
                { className: "about__title" },
                "Languages"
              ),
              c.a.createElement("span", { className: "about__subtitle" }, "+2")
            )
          );
        },
        p = function () {
          return c.a.createElement(
            "section",
            { className: "about section", id: "about" },
            c.a.createElement(
              "h2",
              { className: "section__title" },
              "About Me"
            ),
            c.a.createElement(
              "span",
              { className: "section__subtitle" },
              "My personal description"
            ),
            c.a.createElement(
              "div",
              { className: "about__container container grid" },
              c.a.createElement("img", {
                src: "static/media/about.jpg",
                alt: "",
                className: "about__img",
              }),
              c.a.createElement(
                "div",
                { className: "about__data" },
                c.a.createElement(f, null),
                c.a.createElement(
                  "p",
                  { className: "about__description" },
                  "Professional in Business Administration with experience in document management, customer service and financial control."
                ),
                c.a.createElement(
                  "a",
                  {
                    download: "",
                    href: "static/media/cv.pdf",
                    className: "button button--flex",
                  },
                  "Download CV",
                  c.a.createElement(
                    "svg",
                    {
                      class: "button__icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                    },
                    c.a.createElement("path", {
                      d: "M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",
                      fill: "var(--container-color)",
                    }),
                    c.a.createElement("path", {
                      d: "M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",
                      fill: "var(--container-color)",
                    }),
                    c.a.createElement("path", {
                      d: "M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",
                      fill: "var(--container-color)",
                    }),
                    c.a.createElement("path", {
                      d: "M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",
                      fill: "var(--container-color)",
                    })
                  )
                )
              )
            )
          );
        },
        h =
          (t(25),
          function () {
            return c.a.createElement(
              "div",
              { className: "skills__content" },
              c.a.createElement("h3", { className: "skills__title" }, ""),
              c.a.createElement(
                "div",
                { className: "skills__box" },
                c.a.createElement(
                  "div",
                  { className: "skills__group" },
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "Communication"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Advanced"
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "Time management"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Advanced"
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "Teamwork"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Advanced"
                      )
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "skills__group" },
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "Customer service"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Advanced"
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "GitHub"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Advanced"
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "skills__data" },
                    c.a.createElement("i", { class: "bx bx-badge-check" }),
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h3",
                        { className: "skills__name" },
                        "Attention to details"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "skills__level" },
                        "Intermediate"
                      )
                    )
                  )
                )
              )
            );
          }),
        b = function () {
          return c.a.createElement(
            "div",
            { className: "skills__content" },
            c.a.createElement("h3", { className: "skills__title" }, ""),
            c.a.createElement(
              "div",
              { className: "skills__box" },
              c.a.createElement(
                "div",
                { className: "skills__group" },
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "Excel"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "Quickbooks"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "Rentec direct"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                )
              ),
              c.a.createElement(
                "div",
                { className: "skills__group" },
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "PowerPoint"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "GTI"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "skills__data" },
                  c.a.createElement("i", { class: "bx bx-badge-check" }),
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "h3",
                      { className: "skills__name" },
                      "SCRUM"
                    ),
                    c.a.createElement(
                      "span",
                      { className: "skills__level" },
                      "Intermediate"
                    )
                  )
                )
              )
            )
          );
        },
        k = function () {
          return c.a.createElement(
            "section",
            { className: "skills section", id: "skills" },
            c.a.createElement("h2", { className: "section__title" }, "Skills"),
            c.a.createElement(
              "span",
              { className: "section__subtitle" },
              "Tech Stack"
            ),
            c.a.createElement(
              "div",
              { className: "skills__container container grid" },
              c.a.createElement(h, null),
              c.a.createElement(b, null)
            )
          );
        },
        j =
          (t(25),
          function () {
            let expandedIndex = null;

            const handleCardClick = (index) => {
              if (expandedIndex === index) {
                expandedIndex = null;
              } else {
                expandedIndex = index;
              }
            };

            return c.a.createElement(
              "div",
              { className: "education-container", id: "education" },
              c.a.createElement(
                "h2",
                { className: "section-title" },
                "Education"
              ),
              c.a.createElement(
                "div",
                { className: "degree-cards-container" },
                c.a.createElement(
                  "div",
                  {
                    key: 0,
                    className: `degree-card ${
                      expandedIndex === 0 ? "expanded" : ""
                    }`,
                    onClick: () => handleCardClick(0),
                  },
                  c.a.createElement("img", {
                    src: "static/media/logoUtn.png",
                    alt: "Universidad Técnica Nacional",
                    className: "degree-logo",
                  }),
                  c.a.createElement(
                    "h3",
                    { className: "degree-title" },
                    "Universidad Técnica Nacional"
                  ),
                  c.a.createElement(
                    "h4",
                    { className: "degree-subtitle" },
                    "Bachelor's degree Business Management Administration"
                  ),
                  expandedIndex === 0 &&
                    c.a.createElement(
                      "div",
                      { className: "degree-info" },
                      c.a.createElement(
                        "p",
                        null,
                        "I have studied basic business administration subjects like marketing, project management, cost accounting, occupational safety, business law, etc."
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        "Apart from this, I have done courses on Word, Excel, spreadsheets, customer service."
                      ),
                      c.a.createElement("a", {
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })
                    )
                ),
                c.a.createElement(
                  "div",
                  {
                    key: 1,
                    className: `degree-card ${
                      expandedIndex === 1 ? "expanded" : ""
                    }`,
                    onClick: () => handleCardClick(1),
                  },
                  c.a.createElement("img", {
                    src: "static/media/logoCtp.png",
                    alt: "CTP Ricardo Castro Beer",
                    className: "degree-logo",
                  }),
                  c.a.createElement(
                    "h3",
                    { className: "degree-title" },
                    "CTP Ricardo Castro Beer"
                  ),
                  c.a.createElement(
                    "h4",
                    { className: "degree-subtitle" },
                    "Executive Secretarial Technician"
                  ),
                  expandedIndex === 1 &&
                    c.a.createElement(
                      "div",
                      { className: "degree-info" },
                      c.a.createElement(
                        "p",
                        null,
                        "Proficient in various office software suites such as Microsoft Office (Word, Excel, PowerPoint, Outlook) and Google Workspace."
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        "Experienced in maintaining confidential records, drafting documents, and proofreading reports with a high level of accuracy."
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        "Strong interpersonal and communication skills, adept at interacting with clients, executives, and colleagues professionally and courteously."
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        "Knowledgeable about office etiquette, protocols, and best practices to maintain a professional and organized work environment."
                      ),
                      c.a.createElement(
                        "p",
                        null,
                        "Capable of multitasking and prioritizing tasks efficiently to meet deadlines and support the smooth functioning of the executive's office."
                      ),
                      c.a.createElement("a", {
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })
                    )
                )
              )
            );
          }),
        cou =
          (t(25),
          function () {
            return c.a.createElement(
              "section",
              { className: "courses section", id: "courses" },
              c.a.createElement(
                "h2",
                { className: "section__title" },
                "Courses"
              ),
              c.a.createElement(
                "div",
                { className: "courses__container container grid" },
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=873873",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/scrum.png",
                          alt: "SCRUMStudy",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Scrum Fundamentals Certified (SFC™)"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "SCRUMStudy"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.linkedin.com/learning/certificates/02cff069cbc420bfcd8f2facc75b9449d420e1672a6a3727b52a20f50b145727?trk=backfilled_certificate",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/linkedin.png",
                          alt: "LinkedIn",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Office/Microsoft 365: Trabajo colaborativo"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "LinkedIn"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: " https://www.linkedin.com/learning/certificates/68c910c6da27dabbfedff2a230c94dcab213ff0623b40f13340804d16191cf54?trk=backfilled_certificate",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/linkedin.png",
                          alt: "Linkedin",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Fundamentals of customer service"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "Linkedin"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/cenecoop.png",
                          alt: "CENECOOP",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Customer service"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "CENECOOP"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/ipai.png",
                          alt: "IPAI",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "English conversational"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "IPAI Language school"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/una.png",
                          alt: "UNA",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Receptionist"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "UNA"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/cenecoop.png",
                          alt: "CENECOOP",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Accounting"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "CENECOOP"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.coursera.org/account/accomplishments/verify/YQZ2HW6WTXXP",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/uandes.png",
                          alt: "business",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Fundamentals of business finance"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "Universidad de los andes"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/camcop.png",
                          alt: "CAMCOP",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Dynamic tables"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "CAMCOP"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.coursera.org/account/accomplishments/certificate/QLKRRN8VGDLT",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/uab.png",
                          alt: "UAB",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Microsoft 365"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "Universidad Autónoma de Barcelona"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://www.coursera.org/account/accomplishments/certificate/P5L3T3D9NJZ7",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/unam.png",
                          alt: "UNAM",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Accounting for non-accountants"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "Universidad Nacional Autónoma de México"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "cert-card" },
                  c.a.createElement(
                    "div",
                    { className: "content" },
                    c.a.createElement(
                      "a",
                      {
                        href: "https://fcas.cclearning.accenture.com/cas/login?service=https%3A%2F%2Ffundaula-lms.cclearning.accenture.com%2Flogin%2Findex.php",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      c.a.createElement("div", {
                        className: "content-overlay",
                      }),
                      c.a.createElement(
                        "div",
                        {
                          className: "cert-header",
                          style: { backgroundColor: "#dddddd" },
                        },
                        c.a.createElement("img", {
                          className: "logo_img",
                          src: "static/media/accenture.png",
                          alt: "accenture",
                        })
                      ),
                      c.a.createElement(
                        "div",
                        { className: "content-details fadeIn-top" },
                        c.a.createElement(
                          "h3",
                          { className: "title" },
                          "Certificate"
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "cert-body" },
                    c.a.createElement(
                      "h2",
                      { className: "cert-body-title" },
                      "Customer service"
                    ),
                    c.a.createElement(
                      "h3",
                      { className: "cert-body-subtitle" },
                      "Accenture"
                    )
                  )
                )
              )
            );
          }),
        T = t(11),
        W =
          (t(29),
          function () {
            var e = Object(l.useRef)();
            return c.a.createElement(
              "section",
              { className: "contact section", id: "contact" },
              c.a.createElement(
                "h2",
                { className: "section__title" },
                "Where to find me"
              ),
              c.a.createElement(
                "span",
                { className: "section__subtitle" },
                "Contact Me"
              ),
              c.a.createElement(
                "div",
                { className: "contact__container container grid" },
                c.a.createElement(
                  "div",
                  { className: "contact__content" },
                  c.a.createElement(
                    "h3",
                    { className: "contact__title" },
                    "Talk to me"
                  ),
                  c.a.createElement(
                    "div",
                    { className: "contact__info" },
                    c.a.createElement(
                      "div",
                      { className: "contact__card" },
                      c.a.createElement("i", {
                        className: "bx bx-mail-send contact__card-icon",
                      }),
                      c.a.createElement(
                        "h3",
                        { className: "contact__card-title" },
                        "Email"
                      ),
                      c.a.createElement(
                        "span",
                        { className: "contact__card-data" },
                        "mabeatriz.rm@gmail.com"
                      ),
                      c.a.createElement(
                        "a",
                        {
                          href: "mailto:mabeatriz.rm@gmail.com",
                          className: "contact__button",
                        },
                        "Send me an email",
                        " ",
                        c.a.createElement("i", {
                          className:
                            "bx bx-right-arrow-alt contact__button-icon",
                        })
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: "contact__card" },
                      c.a.createElement("i", {
                        className: "bx bxl-whatsapp contact__card-icon",
                      }),
                      c.a.createElement(
                        "h3",

                        {
                          className: "contact__card-title",
                        },
                        "Whatsaap"
                      ),
                      c.a.createElement(
                        "a",
                        {
                          href: "https://api.whatsapp.com/qr/Z5ACVMM2IIQ6G1?autoload=1&app_absent=0",
                          className: "contact__button",
                        },
                        "Send me a message",
                        " ",
                        c.a.createElement("i", {
                          className:
                            "bx bx-right-arrow-alt contact__button-icon",
                        })
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: "contact__card" },
                      c.a.createElement("i", {
                        className: "bx bxl-linkedin contact__card-icon",
                      }),
                      c.a.createElement(
                        "h3",
                        { className: "contact__card-title" },
                        "Linkedin"
                      ),
                      c.a.createElement(
                        "a",
                        {
                          href: "https://www.linkedin.com/in/mariarodmez/",
                          className: "contact__button",
                        },
                        "Connect on linkedin",
                        " ",
                        c.a.createElement("i", {
                          className:
                            "bx bx-right-arrow-alt contact__button-icon",
                        })
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { className: "contact__card" },
                      c.a.createElement("i", {
                        className: "bx bxl-instagram contact__card-icon",
                      }),
                      c.a.createElement(
                        "h3",
                        { className: "contact__card-title" },
                        "Instagram"
                      ),
                      c.a.createElement(
                        "a",
                        {
                          href: "https://www.instagram.com/mariarodme/",
                          className: "contact__button",
                        },
                        "Follow or DM on Instagram",
                        " ",
                        c.a.createElement("i", {
                          className:
                            "bx bx-right-arrow-alt contact__button-icon",
                        })
                      )
                    )
                  )
                )
              )
            );
          }),
        G =
          (t(30),
          function () {
            return c.a.createElement(
              "footer",
              { className: "footer" },
              c.a.createElement(
                "div",
                { className: "footer__container container" },
                c.a.createElement("h1", { className: "footer__title" }, ""),
                c.a.createElement(
                  "ul",
                  { className: "footer__list" },
                  c.a.createElement(
                    "li",
                    null,
                    c.a.createElement(
                      "a",
                      { href: "#about", className: "footer__link" },
                      "About"
                    )
                  ),
                  c.a.createElement(
                    "li",
                    null,
                    c.a.createElement(
                      "a",
                      { href: "#skills", className: "footer__link" },
                      "Skills"
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: "footer__social" },
                  c.a.createElement(
                    "a",
                    {
                      href: "https://linkedin.com/in/mariarodmez",
                      className: "footer__social-link",
                      target: "_blank",
                    },
                    c.a.createElement("i", { class: "bx bxl-linkedin" })
                  ),
                  c.a.createElement(
                    "a",
                    {
                      href: "https://www.instagram.com/mariarodme",
                      className: "footer__social-link",
                      target: "_blank",
                    },
                    c.a.createElement("i", { className: "bx bxl-instagram" })
                  ),
                  c.a.createElement(
                    "a",
                    {
                      href: "https://api.whatsapp.com/qr/Z5ACVMM2IIQ6G1?autoload=1&app_absent=0",
                      className: "footer__social-link",
                      target: "_blank",
                    },
                    c.a.createElement("i", { class: "bx bxl-whatsapp" })
                  )
                ),
                c.a.createElement(
                  "span",
                  { className: "footer__copy" },
                  "\xa9 Made with Love <3."
                )
              )
            );
          }),
        F =
          (t(31),
          function () {
            return (
              window.addEventListener("scroll", function () {
                var e = document.querySelector(".scrollup");
                this.scrollY >= 560
                  ? e.classList.add("show-scroll")
                  : e.classList.remove("show-scroll");
              }),
              c.a.createElement(
                "a",
                { href: "#", className: "scrollup" },
                c.a.createElement("i", {
                  className: "uil uil-arrow-up scrollup__icon",
                })
              )
            );
          }),
        Z = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(r, null),
            c.a.createElement(
              "main",
              { className: "main" },
              c.a.createElement(u, null),
              c.a.createElement(p, null),
              c.a.createElement(k, null),
              c.a.createElement(j, null),
              c.a.createElement(cou, null),
              c.a.createElement(W, null)
            ),
            c.a.createElement(G, null),
            c.a.createElement(F, null)
          );
        };
        i.a
          .createRoot(document.getElementById("root"))
          .render(
            c.a.createElement(c.a.StrictMode, null, c.a.createElement(Z, null))
          );
      },
    ],
    [[12, 1, 2]],
  ]);
  