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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixDQUFnQkMsSUFBOUM7QUFDQUosRUFBQUEsT0FBTyxDQUFDRyxPQUFSLENBQWdCRSxTQUFoQixHQUE0QixNQUE1QjtBQUNBQyxFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmTixJQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0JFLFNBQWhCLEdBQTRCLEVBQTVCO0FBQ0QsR0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELENBTkQsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JpcHRzL2xpYi9Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9saWIvVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSGFyaXR6IE1lZGluYSBvbiAwOS8yOC8yMDE0LiBMYXN0IHVwZGF0ZSAwNy8xNy8yMDE5LlxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vTW9kZWwnKVxuY29uc3QgVmlldyA9IHJlcXVpcmUoJy4vVmlldycpXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICB0aGlzLm1vZGVsID0gbnVsbFxuICAgIHRoaXMudmlldyA9IG51bGxcbiAgfVxuXG4gIGluaXRpYWxpemUgKCkge1xuICAgIC8vIEluaXRpYWxpemUgbW9kZWwgYW5kIHZpZXdcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh7IHZpZXc6IHRoaXMudmlldyB9KVxuXG4gICAgLy8gTmF2LWJhciBpdGVtcyBjb250ZW50IGNvbnRyb2xcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmJhckl0ZW0nKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UGFnZUJ5SWQoZXZlbnQudGFyZ2V0LmlkKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gTmF2LWJhciBsYW5ndWFnZSBpdGVtcyBjb250ZW50IGNvbnRyb2xcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmxhbmdJdGVtJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tb2RlbC5sYW5ndWFnZXNbZXZlbnQudGFyZ2V0LmlkXSkge1xuICAgICAgICAgIC8vIFNldCBjb29raWVzIGFuZCByZWxvYWQgd2ViXG4gICAgICAgICAgdGhpcy5tb2RlbC5zZXRVc2VyTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LmlkKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBBZGQgZXZlbnQgZm9yIGNvb2tpZXMgaWNvblxuICAgIGNvbnN0IGNvb2tpZXNNb3JlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2NfbW9yZV9pbmZvJylcbiAgICBpZiAoY29va2llc01vcmVJbmZvRWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgY29va2llc01vcmVJbmZvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXRQYWdlKHRoaXMubW9kZWwuZ2V0UGFnZVVSSSgnY29va2llcycpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMb2FkIHRoZSB2aWV3IG9mIHRoZSB1cmxcbiAgICBsZXQgc2VsZWN0ZWRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RlZFBhZ2UgIT09ICdzdHJpbmcnIHx8IHNlbGVjdGVkUGFnZS5sZW5ndGggPCAxKSB7XG4gICAgICBzZWxlY3RlZFBhZ2UgPSAnaG9tZSdcbiAgICB9XG4gICAgdGhpcy5zZXRQYWdlQnlJZChzZWxlY3RlZFBhZ2UpXG4gIH1cblxuICBzZXRQYWdlQnlJZCAoaWQpIHtcbiAgICBpZiAodGhpcy5tb2RlbC5wYWdlc1tpZF0pIHtcbiAgICAgIGNvbnN0IHBhZ2VVUkkgPSB0aGlzLm1vZGVsLmdldFBhZ2VVUkkoaWQpXG4gICAgICBpZiAocGFnZVVSSSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0UGFnZShwYWdlVVJJKVxuICAgICAgICAvLyBVcGRhdGUgdXJsXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgaWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hbGVydCgnVW5hYmxlIHRvIHdlYnNpdGUgcGFnZSwgbWFrZSBzdXJlIHRoZSBVUkwgaXMgY29ycmVjdC4nKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCcvJylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmFsZXJ0KCdVbmFibGUgdG8gd2Vic2l0ZSBwYWdlLCBtYWtlIHN1cmUgdGhlIFVSTCBpcyBjb3JyZWN0LicpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xsZXJcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIYXJpdHogTWVkaW5hIG9uIDA5LzI4LzIwMTQuIExhc3QgdXBkYXRlIDA3LzE3LzIwMTkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFZpZXcgPSByZXF1aXJlKCcuL1ZpZXcnKVxuXG5jbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yICh7IHZpZXcgfSkge1xuICAgIHRoaXMudmlldyA9IHZpZXcgfHwgbmV3IFZpZXcoKVxuICAgIHRoaXMuZm9sZGVyID0gJ3RlbXBsYXRlcydcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgaG9tZTogJ2hvbWUuaHRtbCcsXG4gICAgICBhYm91dG1lOiAnYWJvdXRtZS5odG1sJyxcbiAgICAgIHByb2plY3RzOiAncHJvamVjdHMuaHRtbCcsXG4gICAgICByZXNlYXJjaDogJ3Jlc2VhcmNoLmh0bWwnLFxuICAgICAgY29udHJpYnV0aW9uczogJ2NvbnRyaWJ1dGlvbnMuaHRtbCcsXG4gICAgICBjb29raWVzOiAnY29va2llcy5odG1sJ1xuICAgIH1cbiAgICB0aGlzLmxhbmd1YWdlcyA9IHtcbiAgICAgIGVzX0VTOiAnZXNfRVMnLFxuICAgICAgZW5fR0I6ICdlbl9HQidcbiAgICB9XG4gICAgdGhpcy5jb29raWVzID0gbmV3IENvb2tpZXMoKVxuICB9XG5cbiAgZ2V0UGFnZVVSSSAocGFnZU5hbWUpIHtcbiAgICAvLyBDaGVjayBsYW5ndWFnZSBjb29raWVcbiAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLmdldFVzZXJMYW5ndWFnZSgpXG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmdldFVzZXJEZWZhdWx0TGFuZ3VhZ2UoKVxuICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICBsYW5ndWFnZSA9ICdlbl9HQicgLy8gRGVmYXVsdCBsYW5ndWFnZSBFbmdsaXNoXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvbGRlciArICcvJyArIGxhbmd1YWdlICsgJy8nICsgdGhpcy5wYWdlc1twYWdlTmFtZV1cbiAgfVxuXG4gIHNldFBhZ2UgKHBhZ2UpIHtcbiAgICAvLyBSZXRyaWV2ZSBwYWdlIHRlbXBsYXRlXG4gICAgZmV0Y2gocGFnZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgICB9KS50aGVuKChodG1sKSA9PiB7XG4gICAgICAgIHRoaXMudmlldy5zaG93Q29udGVudChodG1sLCBWaWV3LmNvbnRhaW5lcilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWxlcnQoJ1VuYWJsZSB0byBsb2FkIHdlYnBhZ2Ugc2VjdGlvbiBvciBzZWN0aW9uIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICB9KVxuICB9XG5cbiAgc2V0VXNlckxhbmd1YWdlIChsYW5ndWFnZSkge1xuICAgIHRoaXMuY29va2llcy5jcmVhdGVDb29raWUoJ2xhbmcnLCBsYW5ndWFnZSlcbiAgfVxuXG4gIGdldFVzZXJMYW5ndWFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29va2llcy5yZWFkQ29va2llKCdsYW5nJylcbiAgfVxuXG4gIGdldFVzZXJEZWZhdWx0TGFuZ3VhZ2UgKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMubGFuZ3VhZ2VzKS5maW5kKChsYW5nKSA9PiB7XG4gICAgICByZXR1cm4gbGFuZy5pbmNsdWRlcyh3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF0pXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBDb29raWVzIHtcbiAgY3JlYXRlQ29va2llIChuYW1lLCB2YWx1ZSwgZGF5cykge1xuICAgIGxldCBleHBpcmVzID0gJydcbiAgICBpZiAoZGF5cykge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpXG4gICAgICBleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b0dNVFN0cmluZygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgZXhwaXJlcyArICc7IHBhdGg9LydcbiAgfVxuXG4gIHJlYWRDb29raWUgKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lRVEgPSBuYW1lICsgJz0nXG4gICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjID0gY2FbaV1cbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpXG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZXJhc2VDb29raWUgKG5hbWUpIHtcbiAgICB0aGlzLmNyZWF0ZUNvb2tpZShuYW1lLCAnJywgLTEpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbFxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhhcml0eiBNZWRpbmEgb24gMDkvMjgvMjAxNC4gTGFzdCB1cGRhdGUgMDcvMTcvMjAxOS5cbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplKClcbiAgICB0aGlzLmN1cnJlbnREaXIgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDAsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZignLycpKVxuICAgIHRoaXMucmFuZG9taXplQmFja2dyb3VuZCgpXG4gIH1cblxuICBjYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSAoKSB7XG4gICAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQsIHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aClcbiAgICBpZiAobWF4U2l6ZSA8PSA3MjApIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdzbWFsbCdcbiAgICB9IGVsc2UgaWYgKG1heFNpemUgPD0gMTA4MCkge1xuICAgICAgdGhpcy5zaXplID0gJ21lZGl1bSdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaXplID0gJ2JpZydcbiAgICB9XG4gIH1cblxuICByYW5kb21pemVCYWNrZ3JvdW5kICgpIHtcbiAgICBjb25zdCByYW5kb21CYWNrZ3JvdW5kID0gVmlldy5iYWNrZ3JvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBWaWV3LmJhY2tncm91bmRzLmxlbmd0aCldXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgK1xuICAgICAgdGhpcy5jdXJyZW50RGlyICsgJy9pbWFnZXMvJyArIHRoaXMuc2l6ZSArICcvJyArIHJhbmRvbUJhY2tncm91bmQgKyAnKSdcbiAgfVxuXG4gIHNob3dDb250ZW50IChodG1sQ29udGVudCwgaHRtbENvbnRhaW5lcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHRtbENvbnRhaW5lcikuaW5uZXJIVE1MID0gaHRtbENvbnRlbnRcbiAgfVxufVxuXG5WaWV3LmNvbnRhaW5lciA9ICdtYWluLWNvbnRhaW5lcidcblZpZXcuYmFja2dyb3VuZHMgPSBbJ2JnMC5qcGcnLCAnYmcxLmpwZycsICdiZzIuanBnJywgJ2JnMy5qcGcnLCAnYmc0LmpwZyddXG5cbm1vZHVsZS5leHBvcnRzID0gVmlld1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIYXJpdHogTWVkaW5hIG9uIDA5LzI4LzIwMTQuIExhc3QgdXBkYXRlIDAxLzA3LzIwMjIuXG4gKi9cblxuLy8gVW5jb21tZW50IHRvIGVuYWJsZSBCb290c3RyYXAgdG9vbHRpcHNcbi8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMC9jb21wb25lbnRzL3Rvb2x0aXBzLyNleGFtcGxlLWVuYWJsZS10b29sdGlwcy1ldmVyeXdoZXJlXG4vLyAkKGZ1bmN0aW9uICgpIHsgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTsgfSk7XG5cbi8vIFVuY29tbWVudCB0byBlbmFibGUgQm9vdHN0cmFwIHBvcG92ZXJzXG4vLyBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjAvY29tcG9uZW50cy9wb3BvdmVycy8jZXhhbXBsZS1lbmFibGUtcG9wb3ZlcnMtZXZlcnl3aGVyZVxuLy8gJChmdW5jdGlvbiAoKSB7ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7IH0pO1xuXG5jb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9saWIvQ29udHJvbGxlcicpXG5cbndpbmRvdy5oYXJpdHptZWRpbmEgPSB7fVxuXG53aW5kb3cuaGFyaXR6bWVkaW5hLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpXG5cbndpbmRvdy5oYXJpdHptZWRpbmEuY29udHJvbGxlci5pbml0aWFsaXplKClcblxud2luZG93Lmhhcml0em1lZGluYS5jb3B5Q2xpcGJvYXJkRXZlbnRIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZWxlbWVudC5kYXRhc2V0LmNvcHkpXG4gIGVsZW1lbnQuZGF0YXNldC5jb21wbGV0ZWQgPSAndHJ1ZSdcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5kYXRhc2V0LmNvbXBsZXRlZCA9ICcnXG4gIH0sIDMwMDApXG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJyZXF1aXJlIiwiVmlldyIsIkNvbnRyb2xsZXIiLCJwcm9wcyIsIm1vZGVsIiwidmlldyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0UGFnZUJ5SWQiLCJ0YXJnZXQiLCJpZCIsImxhbmd1YWdlcyIsInNldFVzZXJMYW5ndWFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29va2llc01vcmVJbmZvRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsInNldFBhZ2UiLCJnZXRQYWdlVVJJIiwic2VsZWN0ZWRQYWdlIiwiaGFzaCIsInN1YnN0ciIsImxlbmd0aCIsInBhZ2VzIiwicGFnZVVSSSIsInVuZGVmaW5lZCIsImFsZXJ0IiwicmVwbGFjZSIsIm9yaWdpbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb2xkZXIiLCJob21lIiwiYWJvdXRtZSIsInByb2plY3RzIiwicmVzZWFyY2giLCJjb250cmlidXRpb25zIiwiY29va2llcyIsImVzX0VTIiwiZW5fR0IiLCJDb29raWVzIiwicGFnZU5hbWUiLCJsYW5ndWFnZSIsImdldFVzZXJMYW5ndWFnZSIsImdldFVzZXJEZWZhdWx0TGFuZ3VhZ2UiLCJwYWdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiaHRtbCIsInNob3dDb250ZW50IiwiY29udGFpbmVyIiwiY2F0Y2giLCJjcmVhdGVDb29raWUiLCJyZWFkQ29va2llIiwiT2JqZWN0IiwidmFsdWVzIiwiZmluZCIsImxhbmciLCJpbmNsdWRlcyIsIm5hdmlnYXRvciIsInNwbGl0IiwibmFtZSIsInZhbHVlIiwiZGF5cyIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJuYW1lRVEiLCJjYSIsImkiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNhbGN1bGF0ZUJhY2tncm91bmRTaXplIiwiY3VycmVudERpciIsInBhdGhuYW1lIiwibGFzdEluZGV4T2YiLCJyYW5kb21pemVCYWNrZ3JvdW5kIiwibWF4U2l6ZSIsIk1hdGgiLCJtYXgiLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzaXplIiwicmFuZG9tQmFja2dyb3VuZCIsImJhY2tncm91bmRzIiwiZmxvb3IiLCJyYW5kb20iLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJodG1sQ29udGVudCIsImh0bWxDb250YWluZXIiLCJpbm5lckhUTUwiLCJoYXJpdHptZWRpbmEiLCJjb250cm9sbGVyIiwiaW5pdGlhbGl6ZSIsImNvcHlDbGlwYm9hcmRFdmVudEhhbmRsZXIiLCJlbGVtZW50IiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZGF0YXNldCIsImNvcHkiLCJjb21wbGV0ZWQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==