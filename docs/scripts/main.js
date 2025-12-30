/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/lib/Controller.js":
/*!***************************************!*\
  !*** ./app/scripts/lib/Controller.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _regenerator() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r = "function" == typeof Symbol ? Symbol : {},n = r.iterator || "@@iterator",o = r.toStringTag || "@@toStringTag";function i(r, n, o, i) {var c = n && n.prototype instanceof Generator ? n : Generator,u = Object.create(c.prototype);return _regeneratorDefine2(u, "_invoke", function (r, n, o) {var i,c,u,f = 0,p = o || [],y = !1,G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) {return i = t, c = 0, u = e, G.n = r, a;} };function d(r, n) {for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {var o,i = p[t],d = G.p,l = i[2];r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));}if (o || r > 1) return a;throw y = !0, n;}return function (o, p, l) {if (f > 1) throw TypeError("Generator is already running");for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);try {if (f = 2, i) {if (c || (o = "next"), t = i[o]) {if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");if (!t.done) return t;u = t.value, c < 2 && (c = 0);} else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);i = e;} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;} catch (t) {i = e, c = 1, u = t;} finally {f = 1;}}return { value: t, done: y };};}(r, o, i), !0), u;}var a = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}t = Object.getPrototypeOf;var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {return this;}), t),u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);function f(e) {return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;}return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {return this;}), _regeneratorDefine2(u, "toString", function () {return "[object Generator]";}), (_regenerator = function _regenerator() {return { w: i, m: f };})();}function _regeneratorDefine2(e, r, n, t) {var i = Object.defineProperty;try {i({}, "", {});} catch (e) {i = 0;}_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {function o(r, n) {_regeneratorDefine2(e, r, function (e) {return this._invoke(r, n, e);});}r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));}, _regeneratorDefine2(e, r, n, t);}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}

var Model = __webpack_require__(/*! ./Model */ "./app/scripts/lib/Model.js");
var View = __webpack_require__(/*! ./View */ "./app/scripts/lib/View.js");var

Controller = /*#__PURE__*/function () {
  function Controller(props) {_classCallCheck(this, Controller);
    this.model = null;
    this.view = null;
  }return _createClass(Controller, [{ key: "initialize", value:

    function initialize() {
      // Initialize model and view
      this.view = new View();
      this.model = new Model({ view: this.view });

      // Use event delegation for better performance and memory management
      this.setupEventListeners();

      // Load the view of the url
      var selectedPage = this.getSelectedPageFromHash();
      this.setPageById(selectedPage);
    } }, { key: "setupEventListeners", value:

    function setupEventListeners() {var _this = this;
      // Nav-bar items content control
      document.querySelectorAll('a.barItem').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
          event.preventDefault();
          _this.setPageById(event.target.id);
        });
      });

      // Nav-bar language items content control
      document.querySelectorAll('a.langItem').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
          event.preventDefault();
          if (_this.model.languages[event.target.id]) {
            // Set cookies and reload web
            _this.model.setUserLanguage(event.target.id);
            window.location.reload();
          }
        });
      });

      // Add event for cookies icon
      var cookiesMoreInfoElement = document.querySelector('.cc_more_info');
      if (cookiesMoreInfoElement instanceof HTMLElement) {
        cookiesMoreInfoElement.addEventListener('click', function (event) {
          event.preventDefault();
          _this.model.setPage(_this.model.getPageURI('cookies'));
        });
      }

      // Listen for hash changes (back/forward button support)
      window.addEventListener('hashchange', function () {
        var selectedPage = _this.getSelectedPageFromHash();
        if (_this.model.pages[selectedPage]) {
          var pageURI = _this.model.getPageURI(selectedPage);
          _this.model.setPage(pageURI);
        }
      });
    } }, { key: "getSelectedPageFromHash", value:

    function getSelectedPageFromHash() {
      var hash = window.location.hash.substring(1); // Remove # prefix
      if (hash && typeof hash === 'string' && hash.length > 0) {
        return hash;
      }
      return 'home';
    } }, { key: "setPageById", value: function () {var _setPageById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(

        function _callee(id) {var pageURI, _t;return _regenerator().w(function (_context) {while (1) switch (_context.p = _context.n) {case 0:if (
                this.model.pages[id]) {_context.n = 1;break;}
                console.error("Page \"".concat(id, "\" not found in model.pages"));
                this.redirectToHome();return _context.a(2);case 1:



                pageURI = this.model.getPageURI(id);if (!
                pageURI) {_context.n = 6;break;}_context.p = 2;_context.n = 3;return (

                  this.model.setPage(pageURI));case 3:
                // Update url hash
                window.location.hash = "#".concat(id);_context.n = 5;break;case 4:_context.p = 4;_t = _context.v;

                console.error('Error setting page:', _t);
                this.showErrorMessage('Unable to load the requested page.');case 5:_context.n = 7;break;case 6:


                console.error("Could not get URI for page \"".concat(id, "\""));
                this.showErrorMessage('Unable to load website page, make sure the URL is correct.');case 7:return _context.a(2);}}, _callee, this, [[2, 4]]);}));function setPageById(_x) {return _setPageById.apply(this, arguments);}return setPageById;}() }, { key: "showErrorMessage", value:



    function showErrorMessage(message) {
      var container = document.querySelector("#".concat(View.container));
      if (container) {
        container.innerHTML = "<div class=\"alert alert-warning\" role=\"alert\"><strong>Notice:</strong> ".concat(message, "</div>");
      }
    } }, { key: "redirectToHome", value:

    function redirectToHome() {
      window.location.hash = '#home';
    } }]);}();


module.exports = Controller;

/***/ }),

/***/ "./app/scripts/lib/Model.js":
/*!**********************************!*\
  !*** ./app/scripts/lib/Model.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _regenerator() {/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,r = "function" == typeof Symbol ? Symbol : {},n = r.iterator || "@@iterator",o = r.toStringTag || "@@toStringTag";function i(r, n, o, i) {var c = n && n.prototype instanceof Generator ? n : Generator,u = Object.create(c.prototype);return _regeneratorDefine2(u, "_invoke", function (r, n, o) {var i,c,u,f = 0,p = o || [],y = !1,G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) {return i = t, c = 0, u = e, G.n = r, a;} };function d(r, n) {for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {var o,i = p[t],d = G.p,l = i[2];r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));}if (o || r > 1) return a;throw y = !0, n;}return function (o, p, l) {if (f > 1) throw TypeError("Generator is already running");for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);try {if (f = 2, i) {if (c || (o = "next"), t = i[o]) {if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");if (!t.done) return t;u = t.value, c < 2 && (c = 0);} else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);i = e;} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;} catch (t) {i = e, c = 1, u = t;} finally {f = 1;}}return { value: t, done: y };};}(r, o, i), !0), u;}var a = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}t = Object.getPrototypeOf;var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {return this;}), t),u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);function f(e) {return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;}return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {return this;}), _regeneratorDefine2(u, "toString", function () {return "[object Generator]";}), (_regenerator = function _regenerator() {return { w: i, m: f };})();}function _regeneratorDefine2(e, r, n, t) {var i = Object.defineProperty;try {i({}, "", {});} catch (e) {i = 0;}_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {function o(r, n) {_regeneratorDefine2(e, r, function (e) {return this._invoke(r, n, e);});}r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));}, _regeneratorDefine2(e, r, n, t);}function asyncGeneratorStep(n, t, e, r, o, a, c) {try {var i = n[a](c),u = i.value;} catch (n) {return void e(n);}i.done ? t(u) : Promise.resolve(u).then(r, o);}function _asyncToGenerator(n) {return function () {var t = this,e = arguments;return new Promise(function (r, o) {var a = n.apply(t, e);function _next(n) {asyncGeneratorStep(a, r, o, _next, _throw, "next", n);}function _throw(n) {asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);}_next(void 0);});};}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}

var View = __webpack_require__(/*! ./View */ "./app/scripts/lib/View.js");var

Model = /*#__PURE__*/function () {
  function Model(_ref) {var view = _ref.view;_classCallCheck(this, Model);
    this.view = view || new View();
    this.folder = 'templates';
    this.pages = {
      home: 'home.html',
      aboutme: 'aboutme.html',
      projects: 'projects.html',
      research: 'research.html',
      contributions: 'contributions.html',
      cookies: 'cookies.html'
    };
    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB'
    };
    this.cookies = new Cookies();
    this.loadingTimeoutMs = 5000; // 5 second timeout for page loads
  }return _createClass(Model, [{ key: "getPageURI", value:

    function getPageURI(pageName) {
      // Check language cookie
      var language = this.getUserLanguage();
      if (!language) {
        language = this.getUserDefaultLanguage();
        if (!language) {
          language = 'en_GB'; // Default language English
        }
      }
      return "".concat(this.folder, "/").concat(language, "/").concat(this.pages[pageName]);
    } }, { key: "setPage", value: function () {var _setPage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(

        function _callee(page) {var response, html, _t;return _regenerator().w(function (_context) {while (1) switch (_context.p = _context.n) {case 0:_context.p = 0;_context.n = 1;return (

                  this.fetchWithTimeout(page, this.loadingTimeoutMs));case 1:response = _context.v;if (
                response.ok) {_context.n = 2;break;}throw (
                  new Error("HTTP error! status: ".concat(response.status)));case 2:_context.n = 3;return (

                  response.text());case 3:html = _context.v;
                this.view.showContent(html, View.container);_context.n = 5;break;case 4:_context.p = 4;_t = _context.v;

                console.error('Error loading page:', _t);
                this.showErrorMessage('Unable to load webpage section or section does not exist.');case 5:return _context.a(2);}}, _callee, this, [[0, 4]]);}));function setPage(_x) {return _setPage.apply(this, arguments);}return setPage;}() }, { key: "fetchWithTimeout", value: function () {var _fetchWithTimeout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(



        function _callee2(url, timeoutMs) {var controller, timeoutId, response, _t2;return _regenerator().w(function (_context2) {while (1) switch (_context2.p = _context2.n) {case 0:
                controller = new AbortController();
                timeoutId = setTimeout(function () {return controller.abort();}, timeoutMs);_context2.p = 1;_context2.n = 2;return (


                  fetch(url, { signal: controller.signal }));case 2:response = _context2.v;
                clearTimeout(timeoutId);return _context2.a(2,
                response);case 3:_context2.p = 3;_t2 = _context2.v;

                clearTimeout(timeoutId);throw _t2;case 4:return _context2.a(2);}}, _callee2, null, [[1, 3]]);}));function fetchWithTimeout(_x2, _x3) {return _fetchWithTimeout.apply(this, arguments);}return fetchWithTimeout;}() }, { key: "showErrorMessage", value:




    function showErrorMessage(message) {
      // Create a more user-friendly error message instead of alert
      var container = document.querySelector("#".concat(View.container));
      if (container) {
        container.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><strong>Error:</strong> ".concat(message, "</div>");
      }
    } }, { key: "setUserLanguage", value:

    function setUserLanguage(language) {
      this.cookies.createCookie('lang', language);
    } }, { key: "getUserLanguage", value:

    function getUserLanguage() {
      return this.cookies.readCookie('lang');
    } }, { key: "getUserDefaultLanguage", value:

    function getUserDefaultLanguage() {
      return Object.values(this.languages).find(function (lang) {
        return lang.includes(window.navigator.language.split('-')[0]);
      });
    } }]);}();var


Cookies = /*#__PURE__*/function () {function Cookies() {_classCallCheck(this, Cookies);}return _createClass(Cookies, [{ key: "createCookie", value:
    function createCookie(name, value, days) {
      var expires = '';
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=".concat(date.toUTCString());
      }

      document.cookie = "".concat(name, "=").concat(value).concat(expires, "; path=/; SameSite=Strict");
    } }, { key: "readCookie", value:

    function readCookie(name) {
      var nameEQ = "".concat(name, "=");
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length);
        }
      }
      return null;
    } }, { key: "eraseCookie", value:

    function eraseCookie(name) {
      this.createCookie(name, '', -1);
    } }]);}();


module.exports = Model;

/***/ }),

/***/ "./app/scripts/lib/View.js":
/*!*********************************!*\
  !*** ./app/scripts/lib/View.js ***!
  \*********************************/
/***/ (function(module) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 12/30/2025.
 */

function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

View = /*#__PURE__*/function () {
  function View() {var _this = this;_classCallCheck(this, View);
    this.calculateBackgroundSize();
    this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    this.randomizeBackground();
    // Add window resize listener for responsive background updates
    window.addEventListener('resize', function () {return _this.handleResize();});
  }return _createClass(View, [{ key: "calculateBackgroundSize", value:

    function calculateBackgroundSize() {
      var maxSize = Math.max(window.screen.availHeight, window.screen.availWidth);
      if (maxSize <= 720) {
        this.size = 'small';
      } else if (maxSize <= 1080) {
        this.size = 'medium';
      } else {
        this.size = 'big';
      }
    } }, { key: "handleResize", value:

    function handleResize() {
      var newSize = this.size;
      this.calculateBackgroundSize();
      // Only update background if screen size category changed
      if (newSize !== this.size) {
        this.randomizeBackground();
      }
    } }, { key: "randomizeBackground", value:

    function randomizeBackground() {
      var randomBackground = View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)];
      var backgroundUrl = "".concat(this.currentDir, "/images/").concat(this.size, "/").concat(randomBackground);
      document.body.style.backgroundImage = "url('".concat(backgroundUrl, "')");
    } }, { key: "showContent", value:

    function showContent(htmlContent, htmlContainer) {
      var container = document.querySelector("#".concat(htmlContainer));
      if (container instanceof HTMLElement) {
        // Use textContent to sanitize + innerHTML for HTML content
        // This prevents XSS attacks from untrusted content
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        // Clear existing content and append sanitized content
        container.innerHTML = '';
        while (tempDiv.firstChild) {
          container.appendChild(tempDiv.firstChild);
        }
      } else {
        console.error("Container #".concat(htmlContainer, " not found"));
      }
    } }]);}();


View.container = 'main-container';
View.backgrounds = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg'];

module.exports = View;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./app/scripts/main.js ***!
  \*****************************/
/**
 * Created by Haritz Medina on 09/28/2014. Last update 01/07/2022.
 */

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

var Controller = __webpack_require__(/*! ./lib/Controller */ "./app/scripts/lib/Controller.js");

window.haritzmedina = {};

window.haritzmedina.controller = new Controller();

window.haritzmedina.controller.initialize();

window.haritzmedina.copyClipboardEventHandler = function (element) {
  navigator.clipboard.writeText(element.dataset.copy);
  element.dataset.completed = 'true';
  setTimeout(function () {
    element.dataset.completed = '';
  }, 3000);
};
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsZ0JBQWdCO0FBQ2pDN0MsSUFBSSxDQUFDZ0ksV0FBVyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7QUFFMUVqRixNQUFNLENBQUNDLE9BQU8sR0FBR2hELElBQUksQzs7Ozs7O1VDOURyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUdGLG1CQUFPLENBQUMseURBQWtCLENBQUM7O0FBRTlDdUIsTUFBTSxDQUFDdUgsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFFeEJ2SCxNQUFNLENBQUN1SCxZQUFZLENBQUM5RCxVQUFVLEdBQUcsSUFBSTlFLFVBQVUsQ0FBQyxDQUFDOztBQUVqRHFCLE1BQU0sQ0FBQ3VILFlBQVksQ0FBQzlELFVBQVUsQ0FBQzFFLFVBQVUsQ0FBQyxDQUFDOztBQUUzQ2lCLE1BQU0sQ0FBQ3VILFlBQVksQ0FBQ0MseUJBQXlCLEdBQUcsVUFBQ0MsT0FBTyxFQUFLO0VBQzNEOUMsU0FBUyxDQUFDK0MsU0FBUyxDQUFDQyxTQUFTLENBQUNGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLENBQUM7RUFDbkRKLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRSxTQUFTLEdBQUcsTUFBTTtFQUNsQ2hFLFVBQVUsQ0FBQyxZQUFNO0lBQ2YyRCxPQUFPLENBQUNHLE9BQU8sQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7RUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNWLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9saWIvVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIYXJpdHogTWVkaW5hIG9uIDA5LzI4LzIwMTQuIExhc3QgdXBkYXRlIDEyLzMwLzIwMjUuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG5jb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vTW9kZWwnKVxyXG5jb25zdCBWaWV3ID0gcmVxdWlyZSgnLi9WaWV3JylcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5tb2RlbCA9IG51bGxcclxuICAgIHRoaXMudmlldyA9IG51bGxcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUgKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBtb2RlbCBhbmQgdmlld1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKVxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh7IHZpZXc6IHRoaXMudmlldyB9KVxyXG5cclxuICAgIC8vIFVzZSBldmVudCBkZWxlZ2F0aW9uIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIG1lbW9yeSBtYW5hZ2VtZW50XHJcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuICAgIC8vIExvYWQgdGhlIHZpZXcgb2YgdGhlIHVybFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gdGhpcy5nZXRTZWxlY3RlZFBhZ2VGcm9tSGFzaCgpXHJcbiAgICB0aGlzLnNldFBhZ2VCeUlkKHNlbGVjdGVkUGFnZSlcclxuICB9XHJcblxyXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgLy8gTmF2LWJhciBpdGVtcyBjb250ZW50IGNvbnRyb2xcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EuYmFySXRlbScpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLnNldFBhZ2VCeUlkKGV2ZW50LnRhcmdldC5pZClcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTmF2LWJhciBsYW5ndWFnZSBpdGVtcyBjb250ZW50IGNvbnRyb2xcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubGFuZ0l0ZW0nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwubGFuZ3VhZ2VzW2V2ZW50LnRhcmdldC5pZF0pIHtcclxuICAgICAgICAgIC8vIFNldCBjb29raWVzIGFuZCByZWxvYWQgd2ViXHJcbiAgICAgICAgICB0aGlzLm1vZGVsLnNldFVzZXJMYW5ndWFnZShldmVudC50YXJnZXQuaWQpXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFkZCBldmVudCBmb3IgY29va2llcyBpY29uXHJcbiAgICBjb25zdCBjb29raWVzTW9yZUluZm9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNjX21vcmVfaW5mbycpXHJcbiAgICBpZiAoY29va2llc01vcmVJbmZvRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvb2tpZXNNb3JlSW5mb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRQYWdlKHRoaXMubW9kZWwuZ2V0UGFnZVVSSSgnY29va2llcycpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgaGFzaCBjaGFuZ2VzIChiYWNrL2ZvcndhcmQgYnV0dG9uIHN1cHBvcnQpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gdGhpcy5nZXRTZWxlY3RlZFBhZ2VGcm9tSGFzaCgpXHJcbiAgICAgIGlmICh0aGlzLm1vZGVsLnBhZ2VzW3NlbGVjdGVkUGFnZV0pIHtcclxuICAgICAgICBjb25zdCBwYWdlVVJJID0gdGhpcy5tb2RlbC5nZXRQYWdlVVJJKHNlbGVjdGVkUGFnZSlcclxuICAgICAgICB0aGlzLm1vZGVsLnNldFBhZ2UocGFnZVVSSSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkUGFnZUZyb21IYXNoICgpIHtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgLy8gUmVtb3ZlICMgcHJlZml4XHJcbiAgICBpZiAoaGFzaCAmJiB0eXBlb2YgaGFzaCA9PT0gJ3N0cmluZycgJiYgaGFzaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBoYXNoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2hvbWUnXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRQYWdlQnlJZCAoaWQpIHtcclxuICAgIGlmICghdGhpcy5tb2RlbC5wYWdlc1tpZF0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgUGFnZSBcIiR7aWR9XCIgbm90IGZvdW5kIGluIG1vZGVsLnBhZ2VzYClcclxuICAgICAgdGhpcy5yZWRpcmVjdFRvSG9tZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhZ2VVUkkgPSB0aGlzLm1vZGVsLmdldFBhZ2VVUkkoaWQpXHJcbiAgICBpZiAocGFnZVVSSSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwuc2V0UGFnZShwYWdlVVJJKVxyXG4gICAgICAgIC8vIFVwZGF0ZSB1cmwgaGFzaFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCMke2lkfWBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZXR0aW5nIHBhZ2U6JywgZXJyb3IpXHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdVbmFibGUgdG8gbG9hZCB0aGUgcmVxdWVzdGVkIHBhZ2UuJylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGdldCBVUkkgZm9yIHBhZ2UgXCIke2lkfVwiYClcclxuICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCdVbmFibGUgdG8gbG9hZCB3ZWJzaXRlIHBhZ2UsIG1ha2Ugc3VyZSB0aGUgVVJMIGlzIGNvcnJlY3QuJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dFcnJvck1lc3NhZ2UgKG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1ZpZXcuY29udGFpbmVyfWApXHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj48c3Ryb25nPk5vdGljZTo8L3N0cm9uZz4gJHttZXNzYWdlfTwvZGl2PmBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9Ib21lICgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNob21lJ1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhhcml0eiBNZWRpbmEgb24gMDkvMjgvMjAxNC4gTGFzdCB1cGRhdGUgMTIvMzAvMjAyNS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbmNvbnN0IFZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKVxyXG5cclxuY2xhc3MgTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yICh7IHZpZXcgfSkge1xyXG4gICAgdGhpcy52aWV3ID0gdmlldyB8fCBuZXcgVmlldygpXHJcbiAgICB0aGlzLmZvbGRlciA9ICd0ZW1wbGF0ZXMnXHJcbiAgICB0aGlzLnBhZ2VzID0ge1xyXG4gICAgICBob21lOiAnaG9tZS5odG1sJyxcclxuICAgICAgYWJvdXRtZTogJ2Fib3V0bWUuaHRtbCcsXHJcbiAgICAgIHByb2plY3RzOiAncHJvamVjdHMuaHRtbCcsXHJcbiAgICAgIHJlc2VhcmNoOiAncmVzZWFyY2guaHRtbCcsXHJcbiAgICAgIGNvbnRyaWJ1dGlvbnM6ICdjb250cmlidXRpb25zLmh0bWwnLFxyXG4gICAgICBjb29raWVzOiAnY29va2llcy5odG1sJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYW5ndWFnZXMgPSB7XHJcbiAgICAgIGVzX0VTOiAnZXNfRVMnLFxyXG4gICAgICBlbl9HQjogJ2VuX0dCJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb29raWVzID0gbmV3IENvb2tpZXMoKVxyXG4gICAgdGhpcy5sb2FkaW5nVGltZW91dE1zID0gNTAwMCAvLyA1IHNlY29uZCB0aW1lb3V0IGZvciBwYWdlIGxvYWRzXHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVVJJIChwYWdlTmFtZSkge1xyXG4gICAgLy8gQ2hlY2sgbGFuZ3VhZ2UgY29va2llXHJcbiAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLmdldFVzZXJMYW5ndWFnZSgpXHJcbiAgICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICAgIGxhbmd1YWdlID0gdGhpcy5nZXRVc2VyRGVmYXVsdExhbmd1YWdlKClcclxuICAgICAgaWYgKCFsYW5ndWFnZSkge1xyXG4gICAgICAgIGxhbmd1YWdlID0gJ2VuX0dCJyAvLyBEZWZhdWx0IGxhbmd1YWdlIEVuZ2xpc2hcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3RoaXMuZm9sZGVyfS8ke2xhbmd1YWdlfS8ke3RoaXMucGFnZXNbcGFnZU5hbWVdfWBcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldFBhZ2UgKHBhZ2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaFdpdGhUaW1lb3V0KHBhZ2UsIHRoaXMubG9hZGluZ1RpbWVvdXRNcylcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgICAgdGhpcy52aWV3LnNob3dDb250ZW50KGh0bWwsIFZpZXcuY29udGFpbmVyKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBwYWdlOicsIGVycm9yKVxyXG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoJ1VuYWJsZSB0byBsb2FkIHdlYnBhZ2Ugc2VjdGlvbiBvciBzZWN0aW9uIGRvZXMgbm90IGV4aXN0LicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaFdpdGhUaW1lb3V0ICh1cmwsIHRpbWVvdXRNcykge1xyXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXRNcylcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0pXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXHJcbiAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcclxuICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dFcnJvck1lc3NhZ2UgKG1lc3NhZ2UpIHtcclxuICAgIC8vIENyZWF0ZSBhIG1vcmUgdXNlci1mcmllbmRseSBlcnJvciBtZXNzYWdlIGluc3RlYWQgb2YgYWxlcnRcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1ZpZXcuY29udGFpbmVyfWApXHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPjxzdHJvbmc+RXJyb3I6PC9zdHJvbmc+ICR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyTGFuZ3VhZ2UgKGxhbmd1YWdlKSB7XHJcbiAgICB0aGlzLmNvb2tpZXMuY3JlYXRlQ29va2llKCdsYW5nJywgbGFuZ3VhZ2UpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyTGFuZ3VhZ2UgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29va2llcy5yZWFkQ29va2llKCdsYW5nJylcclxuICB9XHJcblxyXG4gIGdldFVzZXJEZWZhdWx0TGFuZ3VhZ2UgKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5sYW5ndWFnZXMpLmZpbmQoKGxhbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGxhbmcuaW5jbHVkZXMod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENvb2tpZXMge1xyXG4gIGNyZWF0ZUNvb2tpZSAobmFtZSwgdmFsdWUsIGRheXMpIHtcclxuICAgIGxldCBleHBpcmVzID0gJydcclxuICAgIGlmIChkYXlzKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpXHJcbiAgICAgIGV4cGlyZXMgPSBgOyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWBcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfSR7ZXhwaXJlc307IHBhdGg9LzsgU2FtZVNpdGU9U3RyaWN0YFxyXG4gIH1cclxuXHJcbiAgcmVhZENvb2tpZSAobmFtZSkge1xyXG4gICAgY29uc3QgbmFtZUVRID0gYCR7bmFtZX09YFxyXG4gICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjID0gY2FbaV0udHJpbSgpXHJcbiAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgZXJhc2VDb29raWUgKG5hbWUpIHtcclxuICAgIHRoaXMuY3JlYXRlQ29va2llKG5hbWUsICcnLCAtMSlcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kZWxcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFyaXR6IE1lZGluYSBvbiAwOS8yOC8yMDE0LiBMYXN0IHVwZGF0ZSAxMi8zMC8yMDI1LlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSgpXHJcbiAgICB0aGlzLmN1cnJlbnREaXIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDAsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKVxyXG4gICAgdGhpcy5yYW5kb21pemVCYWNrZ3JvdW5kKClcclxuICAgIC8vIEFkZCB3aW5kb3cgcmVzaXplIGxpc3RlbmVyIGZvciByZXNwb25zaXZlIGJhY2tncm91bmQgdXBkYXRlc1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMuaGFuZGxlUmVzaXplKCkpXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSAoKSB7XHJcbiAgICBjb25zdCBtYXhTaXplID0gTWF0aC5tYXgod2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCwgd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoKVxyXG4gICAgaWYgKG1heFNpemUgPD0gNzIwKSB7XHJcbiAgICAgIHRoaXMuc2l6ZSA9ICdzbWFsbCdcclxuICAgIH0gZWxzZSBpZiAobWF4U2l6ZSA8PSAxMDgwKSB7XHJcbiAgICAgIHRoaXMuc2l6ZSA9ICdtZWRpdW0nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpemUgPSAnYmlnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVzaXplICgpIHtcclxuICAgIGNvbnN0IG5ld1NpemUgPSB0aGlzLnNpemVcclxuICAgIHRoaXMuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUoKVxyXG4gICAgLy8gT25seSB1cGRhdGUgYmFja2dyb3VuZCBpZiBzY3JlZW4gc2l6ZSBjYXRlZ29yeSBjaGFuZ2VkXHJcbiAgICBpZiAobmV3U2l6ZSAhPT0gdGhpcy5zaXplKSB7XHJcbiAgICAgIHRoaXMucmFuZG9taXplQmFja2dyb3VuZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByYW5kb21pemVCYWNrZ3JvdW5kICgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUJhY2tncm91bmQgPSBWaWV3LmJhY2tncm91bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFZpZXcuYmFja2dyb3VuZHMubGVuZ3RoKV1cclxuICAgIGNvbnN0IGJhY2tncm91bmRVcmwgPSBgJHt0aGlzLmN1cnJlbnREaXJ9L2ltYWdlcy8ke3RoaXMuc2l6ZX0vJHtyYW5kb21CYWNrZ3JvdW5kfWBcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtiYWNrZ3JvdW5kVXJsfScpYFxyXG4gIH1cclxuXHJcbiAgc2hvd0NvbnRlbnQgKGh0bWxDb250ZW50LCBodG1sQ29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtodG1sQ29udGFpbmVyfWApXHJcbiAgICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgLy8gVXNlIHRleHRDb250ZW50IHRvIHNhbml0aXplICsgaW5uZXJIVE1MIGZvciBIVE1MIGNvbnRlbnRcclxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBYU1MgYXR0YWNrcyBmcm9tIHVudHJ1c3RlZCBjb250ZW50XHJcbiAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IGh0bWxDb250ZW50XHJcbiAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgYW5kIGFwcGVuZCBzYW5pdGl6ZWQgY29udGVudFxyXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcclxuICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGl2LmZpcnN0Q2hpbGQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvbnRhaW5lciAjJHtodG1sQ29udGFpbmVyfSBub3QgZm91bmRgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVmlldy5jb250YWluZXIgPSAnbWFpbi1jb250YWluZXInXHJcblZpZXcuYmFja2dyb3VuZHMgPSBbJ2JnMC5qcGcnLCAnYmcxLmpwZycsICdiZzIuanBnJywgJ2JnMy5qcGcnLCAnYmc0LmpwZyddXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFyaXR6IE1lZGluYSBvbiAwOS8yOC8yMDE0LiBMYXN0IHVwZGF0ZSAwMS8wNy8yMDIyLlxyXG4gKi9cclxuXHJcbi8vIFVuY29tbWVudCB0byBlbmFibGUgQm9vdHN0cmFwIHRvb2x0aXBzXHJcbi8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9jb21wb25lbnRzL3Rvb2x0aXBzLyNleGFtcGxlLWVuYWJsZS10b29sdGlwcy1ldmVyeXdoZXJlXHJcbi8vICQoZnVuY3Rpb24gKCkgeyAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpOyB9KTtcclxuXHJcbi8vIFVuY29tbWVudCB0byBlbmFibGUgQm9vdHN0cmFwIHBvcG92ZXJzXHJcbi8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9jb21wb25lbnRzL3BvcG92ZXJzLyNleGFtcGxlLWVuYWJsZS1wb3BvdmVycy1ldmVyeXdoZXJlXHJcbi8vICQoZnVuY3Rpb24gKCkgeyAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpOyB9KTtcclxuXHJcbmNvbnN0IENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2xpYi9Db250cm9sbGVyJylcclxuXHJcbndpbmRvdy5oYXJpdHptZWRpbmEgPSB7fVxyXG5cclxud2luZG93Lmhhcml0em1lZGluYS5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKVxyXG5cclxud2luZG93Lmhhcml0em1lZGluYS5jb250cm9sbGVyLmluaXRpYWxpemUoKVxyXG5cclxud2luZG93Lmhhcml0em1lZGluYS5jb3B5Q2xpcGJvYXJkRXZlbnRIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcclxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlbGVtZW50LmRhdGFzZXQuY29weSlcclxuICBlbGVtZW50LmRhdGFzZXQuY29tcGxldGVkID0gJ3RydWUnXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBlbGVtZW50LmRhdGFzZXQuY29tcGxldGVkID0gJydcclxuICB9LCAzMDAwKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfcmVnZW5lcmF0b3IiLCJlIiwidCIsInIiLCJuIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsInJldHVybiIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIk1vZGVsIiwicmVxdWlyZSIsIlZpZXciLCJDb250cm9sbGVyIiwicHJvcHMiLCJtb2RlbCIsInZpZXciLCJpbml0aWFsaXplIiwic2V0dXBFdmVudExpc3RlbmVycyIsInNlbGVjdGVkUGFnZSIsImdldFNlbGVjdGVkUGFnZUZyb21IYXNoIiwic2V0UGFnZUJ5SWQiLCJfdGhpcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJpZCIsImxhbmd1YWdlcyIsInNldFVzZXJMYW5ndWFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29va2llc01vcmVJbmZvRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsInNldFBhZ2UiLCJnZXRQYWdlVVJJIiwicGFnZXMiLCJwYWdlVVJJIiwiaGFzaCIsInN1YnN0cmluZyIsIl9zZXRQYWdlQnlJZCIsIl9jYWxsZWUiLCJfdCIsIl9jb250ZXh0IiwiY29uc29sZSIsImVycm9yIiwiY29uY2F0IiwicmVkaXJlY3RUb0hvbWUiLCJzaG93RXJyb3JNZXNzYWdlIiwiX3giLCJtZXNzYWdlIiwiY29udGFpbmVyIiwiaW5uZXJIVE1MIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9yZWYiLCJmb2xkZXIiLCJob21lIiwiYWJvdXRtZSIsInByb2plY3RzIiwicmVzZWFyY2giLCJjb250cmlidXRpb25zIiwiY29va2llcyIsImVzX0VTIiwiZW5fR0IiLCJDb29raWVzIiwibG9hZGluZ1RpbWVvdXRNcyIsInBhZ2VOYW1lIiwibGFuZ3VhZ2UiLCJnZXRVc2VyTGFuZ3VhZ2UiLCJnZXRVc2VyRGVmYXVsdExhbmd1YWdlIiwiX3NldFBhZ2UiLCJwYWdlIiwicmVzcG9uc2UiLCJodG1sIiwiZmV0Y2hXaXRoVGltZW91dCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJ0ZXh0Iiwic2hvd0NvbnRlbnQiLCJfZmV0Y2hXaXRoVGltZW91dCIsIl9jYWxsZWUyIiwidXJsIiwidGltZW91dE1zIiwiY29udHJvbGxlciIsInRpbWVvdXRJZCIsIl90MiIsIl9jb250ZXh0MiIsIkFib3J0Q29udHJvbGxlciIsInNldFRpbWVvdXQiLCJhYm9ydCIsImZldGNoIiwic2lnbmFsIiwiY2xlYXJUaW1lb3V0IiwiX3gyIiwiX3gzIiwiY3JlYXRlQ29va2llIiwicmVhZENvb2tpZSIsInZhbHVlcyIsImZpbmQiLCJsYW5nIiwiaW5jbHVkZXMiLCJuYXZpZ2F0b3IiLCJzcGxpdCIsIm5hbWUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsImNvb2tpZSIsIm5hbWVFUSIsImNhIiwidHJpbSIsImluZGV4T2YiLCJlcmFzZUNvb2tpZSIsImNhbGN1bGF0ZUJhY2tncm91bmRTaXplIiwiY3VycmVudERpciIsInBhdGhuYW1lIiwibGFzdEluZGV4T2YiLCJyYW5kb21pemVCYWNrZ3JvdW5kIiwiaGFuZGxlUmVzaXplIiwibWF4U2l6ZSIsIk1hdGgiLCJtYXgiLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzaXplIiwibmV3U2l6ZSIsInJhbmRvbUJhY2tncm91bmQiLCJiYWNrZ3JvdW5kcyIsImZsb29yIiwicmFuZG9tIiwiYmFja2dyb3VuZFVybCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImh0bWxDb250ZW50IiwiaHRtbENvbnRhaW5lciIsInRlbXBEaXYiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaGFyaXR6bWVkaW5hIiwiY29weUNsaXBib2FyZEV2ZW50SGFuZGxlciIsImVsZW1lbnQiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJkYXRhc2V0IiwiY29weSIsImNvbXBsZXRlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9