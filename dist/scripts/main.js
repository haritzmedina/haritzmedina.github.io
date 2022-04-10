/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/lib/Controller.js":
/*!***************************************!*\
  !*** ./app/scripts/lib/Controller.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}

var Model = __webpack_require__(/*! ./Model */ "./app/scripts/lib/Model.js");
var View = __webpack_require__(/*! ./View */ "./app/scripts/lib/View.js");var

Controller = /*#__PURE__*/function () {
  function Controller(props) {_classCallCheck(this, Controller);
    this.model = null;
    this.view = null;
  }_createClass(Controller, [{ key: "initialize", value:

    function initialize() {var _this = this;
      // Initialize model and view
      this.view = new View();
      this.model = new Model({ view: this.view });

      // Nav-bar items content control
      document.querySelectorAll('a.barItem').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
          _this.setPageById(event.target.id);
        });
      });

      // Nav-bar language items content control
      document.querySelectorAll('a.langItem').forEach(function (elem) {
        elem.addEventListener('click', function (event) {
          if (_this.model.languages[event.target.id]) {
            // Set cookies and reload web
            _this.model.setUserLanguage(event.target.id);
            window.location.reload();
          }
        });
      });

      // Add event for cookies icon
      var cookiesMoreInfoElement = document.querySelector('.cc_more_info');
      if (cookiesMoreInfoElement instanceof window.HTMLElement) {
        cookiesMoreInfoElement.addEventListener('click', function () {
          _this.model.setPage(_this.model.getPageURI('cookies'));
        });
      }

      // Load the view of the url
      var selectedPage = window.location.hash.substr(1);
      if (typeof selectedPage !== 'string' || selectedPage.length < 1) {
        selectedPage = 'home';
      }
      this.setPageById(selectedPage);
    } }, { key: "setPageById", value:

    function setPageById(id) {
      if (this.model.pages[id]) {
        var pageURI = this.model.getPageURI(id);
        if (pageURI !== undefined) {
          this.model.setPage(pageURI);
          // Update url
          window.location.hash = '#' + id;
        } else {
          window.alert('Unable to website page, make sure the URL is correct.');
          window.location.reload('/');
        }
      } else {
        window.alert('Unable to website page, make sure the URL is correct.');
        window.location.replace(window.location.origin);
      }
    } }]);return Controller;}();


module.exports = Controller;

/***/ }),

/***/ "./app/scripts/lib/Model.js":
/*!**********************************!*\
  !*** ./app/scripts/lib/Model.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}

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
      cookies: 'cookies.html' };

    this.languages = {
      es_ES: 'es_ES',
      en_GB: 'en_GB' };

    this.cookies = new Cookies();
  }_createClass(Model, [{ key: "getPageURI", value:

    function getPageURI(pageName) {
      // Check language cookie
      var language = this.getUserLanguage();
      if (!language) {
        language = this.getUserDefaultLanguage();
        if (!language) {
          language = 'en_GB'; // Default language English
        }
      }
      return this.folder + '/' + language + '/' + this.pages[pageName];
    } }, { key: "setPage", value:

    function setPage(page) {var _this = this;
      // Retrieve page template
      fetch(page).
      then(function (response) {
        return response.text();
      }).then(function (html) {
        _this.view.showContent(html, View.container);
      }).
      catch(function () {
        window.alert('Unable to load webpage section or section does not exist.');
      });
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
    } }]);return Model;}();var


Cookies = /*#__PURE__*/function () {function Cookies() {_classCallCheck(this, Cookies);}_createClass(Cookies, [{ key: "createCookie", value:
    function createCookie(name, value, days) {
      var expires = '';
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
      }

      document.cookie = name + '=' + value + expires + '; path=/';
    } }, { key: "readCookie", value:

    function readCookie(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {c = c.substring(1, c.length);}
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    } }, { key: "eraseCookie", value:

    function eraseCookie(name) {
      this.createCookie(name, '', -1);
    } }]);return Cookies;}();


module.exports = Model;

/***/ }),

/***/ "./app/scripts/lib/View.js":
/*!*********************************!*\
  !*** ./app/scripts/lib/View.js ***!
  \*********************************/
/***/ (function(module) {

"use strict";
/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
 */

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var

View = /*#__PURE__*/function () {
  function View() {_classCallCheck(this, View);
    this.calculateBackgroundSize();
    this.currentDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    this.randomizeBackground();
  }_createClass(View, [{ key: "calculateBackgroundSize", value:

    function calculateBackgroundSize() {
      var maxSize = Math.max(window.screen.availHeight, window.screen.availWidth);
      if (maxSize <= 720) {
        this.size = 'small';
      } else if (maxSize <= 1080) {
        this.size = 'medium';
      } else {
        this.size = 'big';
      }
    } }, { key: "randomizeBackground", value:

    function randomizeBackground() {
      var randomBackground = View.backgrounds[Math.floor(Math.random() * View.backgrounds.length)];
      document.body.style.backgroundImage = 'url(' +
      this.currentDir + '/images/' + this.size + '/' + randomBackground + ')';
    } }, { key: "showContent", value:

    function showContent(htmlContent, htmlContainer) {
      document.querySelector('#' + htmlContainer).innerHTML = htmlContent;
    } }]);return View;}();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./app/scripts/main.js ***!
  \*****************************/
/**
 * Created by Haritz Medina on 09/28/2014. Last update 07/17/2019.
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
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2dHLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsZUFBcEIsR0FBc0M7QUFDcEMsV0FBS2pCLFVBRCtCLEdBQ2xCLFVBRGtCLEdBQ0wsS0FBS1UsSUFEQSxHQUNPLEdBRFAsR0FDYUMsZ0JBRGIsR0FDZ0MsR0FEdEU7QUFFRDs7QUFFRCx5QkFBYU8sV0FBYixFQUEwQkMsYUFBMUIsRUFBeUM7QUFDdkNwRyxNQUFBQSxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsTUFBTXFGLGFBQTdCLEVBQTRDQyxTQUE1QyxHQUF3REYsV0FBeEQ7QUFDRDs7O0FBR0h4RyxJQUFJLENBQUN5RCxTQUFMLEdBQWlCLGdCQUFqQjtBQUNBekQsSUFBSSxDQUFDa0csV0FBTCxHQUFtQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLENBQW5COztBQUVBaEUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkMsSUFBakI7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRixtQkFBTyxDQUFDLHlEQUFELENBQTFCOztBQUVBaUIsTUFBTSxDQUFDMkYsWUFBUCxHQUFzQixFQUF0Qjs7QUFFQTNGLE1BQU0sQ0FBQzJGLFlBQVAsQ0FBb0JDLFVBQXBCLEdBQWlDLElBQUkzRyxVQUFKLEVBQWpDOztBQUVBZSxNQUFNLENBQUMyRixZQUFQLENBQW9CQyxVQUFwQixDQUErQkMsVUFBL0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9saWIvVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIYXJpdHogTWVkaW5hIG9uIDA5LzI4LzIwMTQuIExhc3QgdXBkYXRlIDA3LzE3LzIwMTkuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG5jb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vTW9kZWwnKVxyXG5jb25zdCBWaWV3ID0gcmVxdWlyZSgnLi9WaWV3JylcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgdGhpcy5tb2RlbCA9IG51bGxcclxuICAgIHRoaXMudmlldyA9IG51bGxcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUgKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBtb2RlbCBhbmQgdmlld1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKVxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh7IHZpZXc6IHRoaXMudmlldyB9KVxyXG5cclxuICAgIC8vIE5hdi1iYXIgaXRlbXMgY29udGVudCBjb250cm9sXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmJhckl0ZW0nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFBhZ2VCeUlkKGV2ZW50LnRhcmdldC5pZClcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTmF2LWJhciBsYW5ndWFnZSBpdGVtcyBjb250ZW50IGNvbnRyb2xcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubGFuZ0l0ZW0nKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5sYW5ndWFnZXNbZXZlbnQudGFyZ2V0LmlkXSkge1xyXG4gICAgICAgICAgLy8gU2V0IGNvb2tpZXMgYW5kIHJlbG9hZCB3ZWJcclxuICAgICAgICAgIHRoaXMubW9kZWwuc2V0VXNlckxhbmd1YWdlKGV2ZW50LnRhcmdldC5pZClcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGZvciBjb29raWVzIGljb25cclxuICAgIGNvbnN0IGNvb2tpZXNNb3JlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2NfbW9yZV9pbmZvJylcclxuICAgIGlmIChjb29raWVzTW9yZUluZm9FbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvb2tpZXNNb3JlSW5mb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRQYWdlKHRoaXMubW9kZWwuZ2V0UGFnZVVSSSgnY29va2llcycpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgdGhlIHZpZXcgb2YgdGhlIHVybFxyXG4gICAgbGV0IHNlbGVjdGVkUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKVxyXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RlZFBhZ2UgIT09ICdzdHJpbmcnIHx8IHNlbGVjdGVkUGFnZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHNlbGVjdGVkUGFnZSA9ICdob21lJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRQYWdlQnlJZChzZWxlY3RlZFBhZ2UpXHJcbiAgfVxyXG5cclxuICBzZXRQYWdlQnlJZCAoaWQpIHtcclxuICAgIGlmICh0aGlzLm1vZGVsLnBhZ2VzW2lkXSkge1xyXG4gICAgICBjb25zdCBwYWdlVVJJID0gdGhpcy5tb2RlbC5nZXRQYWdlVVJJKGlkKVxyXG4gICAgICBpZiAocGFnZVVSSSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRQYWdlKHBhZ2VVUkkpXHJcbiAgICAgICAgLy8gVXBkYXRlIHVybFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgaWRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ1VuYWJsZSB0byB3ZWJzaXRlIHBhZ2UsIG1ha2Ugc3VyZSB0aGUgVVJMIGlzIGNvcnJlY3QuJylcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCcvJylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KCdVbmFibGUgdG8gd2Vic2l0ZSBwYWdlLCBtYWtlIHN1cmUgdGhlIFVSTCBpcyBjb3JyZWN0LicpXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xsZXJcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFyaXR6IE1lZGluYSBvbiAwOS8yOC8yMDE0LiBMYXN0IHVwZGF0ZSAwNy8xNy8yMDE5LlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuY29uc3QgVmlldyA9IHJlcXVpcmUoJy4vVmlldycpXHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcbiAgY29uc3RydWN0b3IgKHsgdmlldyB9KSB7XHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3IHx8IG5ldyBWaWV3KClcclxuICAgIHRoaXMuZm9sZGVyID0gJ3RlbXBsYXRlcydcclxuICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgIGhvbWU6ICdob21lLmh0bWwnLFxyXG4gICAgICBhYm91dG1lOiAnYWJvdXRtZS5odG1sJyxcclxuICAgICAgcHJvamVjdHM6ICdwcm9qZWN0cy5odG1sJyxcclxuICAgICAgcmVzZWFyY2g6ICdyZXNlYXJjaC5odG1sJyxcclxuICAgICAgY29udHJpYnV0aW9uczogJ2NvbnRyaWJ1dGlvbnMuaHRtbCcsXHJcbiAgICAgIGNvb2tpZXM6ICdjb29raWVzLmh0bWwnXHJcbiAgICB9XHJcbiAgICB0aGlzLmxhbmd1YWdlcyA9IHtcclxuICAgICAgZXNfRVM6ICdlc19FUycsXHJcbiAgICAgIGVuX0dCOiAnZW5fR0InXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBuZXcgQ29va2llcygpXHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVVJJIChwYWdlTmFtZSkge1xyXG4gICAgLy8gQ2hlY2sgbGFuZ3VhZ2UgY29va2llXHJcbiAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLmdldFVzZXJMYW5ndWFnZSgpXHJcbiAgICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICAgIGxhbmd1YWdlID0gdGhpcy5nZXRVc2VyRGVmYXVsdExhbmd1YWdlKClcclxuICAgICAgaWYgKCFsYW5ndWFnZSkge1xyXG4gICAgICAgIGxhbmd1YWdlID0gJ2VuX0dCJyAvLyBEZWZhdWx0IGxhbmd1YWdlIEVuZ2xpc2hcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZm9sZGVyICsgJy8nICsgbGFuZ3VhZ2UgKyAnLycgKyB0aGlzLnBhZ2VzW3BhZ2VOYW1lXVxyXG4gIH1cclxuXHJcbiAgc2V0UGFnZSAocGFnZSkge1xyXG4gICAgLy8gUmV0cmlldmUgcGFnZSB0ZW1wbGF0ZVxyXG4gICAgZmV0Y2gocGFnZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICB9KS50aGVuKChodG1sKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3LnNob3dDb250ZW50KGh0bWwsIFZpZXcuY29udGFpbmVyKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydCgnVW5hYmxlIHRvIGxvYWQgd2VicGFnZSBzZWN0aW9uIG9yIHNlY3Rpb24gZG9lcyBub3QgZXhpc3QuJylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHNldFVzZXJMYW5ndWFnZSAobGFuZ3VhZ2UpIHtcclxuICAgIHRoaXMuY29va2llcy5jcmVhdGVDb29raWUoJ2xhbmcnLCBsYW5ndWFnZSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJMYW5ndWFnZSAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb29raWVzLnJlYWRDb29raWUoJ2xhbmcnKVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckRlZmF1bHRMYW5ndWFnZSAoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmxhbmd1YWdlcykuZmluZCgobGFuZykgPT4ge1xyXG4gICAgICByZXR1cm4gbGFuZy5pbmNsdWRlcyh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ29va2llcyB7XHJcbiAgY3JlYXRlQ29va2llIChuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG4gICAgbGV0IGV4cGlyZXMgPSAnJ1xyXG4gICAgaWYgKGRheXMpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSlcclxuICAgICAgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9HTVRTdHJpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nXHJcbiAgfVxyXG5cclxuICByZWFkQ29va2llIChuYW1lKSB7XHJcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgJz0nXHJcbiAgICBjb25zdCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gY2FbaV1cclxuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aClcclxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgZXJhc2VDb29raWUgKG5hbWUpIHtcclxuICAgIHRoaXMuY3JlYXRlQ29va2llKG5hbWUsICcnLCAtMSlcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kZWxcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGFyaXR6IE1lZGluYSBvbiAwOS8yOC8yMDE0LiBMYXN0IHVwZGF0ZSAwNy8xNy8yMDE5LlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSgpXHJcbiAgICB0aGlzLmN1cnJlbnREaXIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDAsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKVxyXG4gICAgdGhpcy5yYW5kb21pemVCYWNrZ3JvdW5kKClcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUJhY2tncm91bmRTaXplICgpIHtcclxuICAgIGNvbnN0IG1heFNpemUgPSBNYXRoLm1heCh3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0LCB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpXHJcbiAgICBpZiAobWF4U2l6ZSA8PSA3MjApIHtcclxuICAgICAgdGhpcy5zaXplID0gJ3NtYWxsJ1xyXG4gICAgfSBlbHNlIGlmIChtYXhTaXplIDw9IDEwODApIHtcclxuICAgICAgdGhpcy5zaXplID0gJ21lZGl1bSdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2l6ZSA9ICdiaWcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByYW5kb21pemVCYWNrZ3JvdW5kICgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUJhY2tncm91bmQgPSBWaWV3LmJhY2tncm91bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFZpZXcuYmFja2dyb3VuZHMubGVuZ3RoKV1cclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICtcclxuICAgICAgdGhpcy5jdXJyZW50RGlyICsgJy9pbWFnZXMvJyArIHRoaXMuc2l6ZSArICcvJyArIHJhbmRvbUJhY2tncm91bmQgKyAnKSdcclxuICB9XHJcblxyXG4gIHNob3dDb250ZW50IChodG1sQ29udGVudCwgaHRtbENvbnRhaW5lcikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBodG1sQ29udGFpbmVyKS5pbm5lckhUTUwgPSBodG1sQ29udGVudFxyXG4gIH1cclxufVxyXG5cclxuVmlldy5jb250YWluZXIgPSAnbWFpbi1jb250YWluZXInXHJcblZpZXcuYmFja2dyb3VuZHMgPSBbJ2JnMC5qcGcnLCAnYmcxLmpwZycsICdiZzIuanBnJywgJ2JnMy5qcGcnLCAnYmc0LmpwZyddXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhhcml0eiBNZWRpbmEgb24gMDkvMjgvMjAxNC4gTGFzdCB1cGRhdGUgMDcvMTcvMjAxOS5cclxuICovXHJcblxyXG4vLyBVbmNvbW1lbnQgdG8gZW5hYmxlIEJvb3RzdHJhcCB0b29sdGlwc1xyXG4vLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjAvY29tcG9uZW50cy90b29sdGlwcy8jZXhhbXBsZS1lbmFibGUtdG9vbHRpcHMtZXZlcnl3aGVyZVxyXG4vLyAkKGZ1bmN0aW9uICgpIHsgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTsgfSk7XHJcblxyXG4vLyBVbmNvbW1lbnQgdG8gZW5hYmxlIEJvb3RzdHJhcCBwb3BvdmVyc1xyXG4vLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjAvY29tcG9uZW50cy9wb3BvdmVycy8jZXhhbXBsZS1lbmFibGUtcG9wb3ZlcnMtZXZlcnl3aGVyZVxyXG4vLyAkKGZ1bmN0aW9uICgpIHsgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTsgfSk7XHJcblxyXG5jb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9saWIvQ29udHJvbGxlcicpXHJcblxyXG53aW5kb3cuaGFyaXR6bWVkaW5hID0ge31cclxuXHJcbndpbmRvdy5oYXJpdHptZWRpbmEuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKClcclxuXHJcbndpbmRvdy5oYXJpdHptZWRpbmEuY29udHJvbGxlci5pbml0aWFsaXplKClcclxuIl0sIm5hbWVzIjpbIk1vZGVsIiwicmVxdWlyZSIsIlZpZXciLCJDb250cm9sbGVyIiwicHJvcHMiLCJtb2RlbCIsInZpZXciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldFBhZ2VCeUlkIiwidGFyZ2V0IiwiaWQiLCJsYW5ndWFnZXMiLCJzZXRVc2VyTGFuZ3VhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvb2tpZXNNb3JlSW5mb0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJzZXRQYWdlIiwiZ2V0UGFnZVVSSSIsInNlbGVjdGVkUGFnZSIsImhhc2giLCJzdWJzdHIiLCJsZW5ndGgiLCJwYWdlcyIsInBhZ2VVUkkiLCJ1bmRlZmluZWQiLCJhbGVydCIsInJlcGxhY2UiLCJvcmlnaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9sZGVyIiwiaG9tZSIsImFib3V0bWUiLCJwcm9qZWN0cyIsInJlc2VhcmNoIiwiY29udHJpYnV0aW9ucyIsImNvb2tpZXMiLCJlc19FUyIsImVuX0dCIiwiQ29va2llcyIsInBhZ2VOYW1lIiwibGFuZ3VhZ2UiLCJnZXRVc2VyTGFuZ3VhZ2UiLCJnZXRVc2VyRGVmYXVsdExhbmd1YWdlIiwicGFnZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJzaG93Q29udGVudCIsImNvbnRhaW5lciIsImNhdGNoIiwiY3JlYXRlQ29va2llIiwicmVhZENvb2tpZSIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJsYW5nIiwiaW5jbHVkZXMiLCJuYXZpZ2F0b3IiLCJzcGxpdCIsIm5hbWUiLCJ2YWx1ZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiY29va2llIiwibmFtZUVRIiwiY2EiLCJpIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSIsImN1cnJlbnREaXIiLCJwYXRobmFtZSIsImxhc3RJbmRleE9mIiwicmFuZG9taXplQmFja2dyb3VuZCIsIm1heFNpemUiLCJNYXRoIiwibWF4Iiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2l6ZSIsInJhbmRvbUJhY2tncm91bmQiLCJiYWNrZ3JvdW5kcyIsImZsb29yIiwicmFuZG9tIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaHRtbENvbnRlbnQiLCJodG1sQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiaGFyaXR6bWVkaW5hIiwiY29udHJvbGxlciIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9