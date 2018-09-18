/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _organisms_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organisms/dialog */ \"./source/js/organisms/dialog.js\");\n\n\n// Check if the users browser supports these features\nconst enhance = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.documentElement;\n\n// If the users browser browser supports the features we need, remove the no-enhance class from the html element and execute our video JS\nif(enhance) {\n    document.documentElement.classList.remove('no-enhance');\n\n    // Find all dialog organisms and create a new instance of the Dialog\n    const dialogs = document.querySelectorAll('.js-dialog');\n    Array.from(dialogs).forEach((dialog) => {\n        const dialogEl = new _organisms_dialog__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dialog);\n    });\n}\n\n\n//# sourceURL=webpack:///./source/js/main.js?");

/***/ }),

/***/ "./source/js/organisms/dialog.js":
/*!***************************************!*\
  !*** ./source/js/organisms/dialog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import PolyfillDialog from 'dialog-polyfill';\n\nclass Dialog {\n\tconstructor(dialog) {\n\t\tthis.dialog = dialog;\n\t\tthis.openButton = document.querySelector('.js-dialog-open');\n\t\tthis.closeButton = this.dialog.querySelector('.js-dialog-close');\n\t\tthis.hash = this.dialog.getAttribute('data-hash');\n\n\t\tthis.openDialog = this.openDialog.bind(this);\n\t\tthis.closeDialogBackdrop = this.closeDialogBackdrop.bind(this);\n        this.closeDialog = this.closeDialog.bind(this);\n\t\tthis.animateCloseDialog = this.animateCloseDialog.bind(this);\n\n\t\t// this.polyfillDialog();\n\t\tthis.openDialogOnPageLoad();\n        this.addEventListeners();\n\t}\n\n\taddEventListeners() {\n\t\tthis.openButton.addEventListener('click', this.openDialog);\n\t\tthis.closeButton.addEventListener('click', this.closeDialog);\n\t\tthis.dialog.addEventListener('cancel', this.closeDialog);\n\t\tthis.dialog.addEventListener('click', this.closeDialogBackdrop);\n\t}\n\n\tpolyfillDialog() {\n\t\t// PolyfillDialog.registerDialog(this.dialog);\n\t}\n\n\topenDialogOnPageLoad() {\n\t\t// If the page url hash matches the `data-hash` attribute value of the dialog element, show the dialog\n\t\tif(window.location.hash === this.hash) {\n\t\t\tthis.openDialog();\n\t\t}\n\t}\n\n    openDialog(event) {\n\t\t// If the trigger to open the dialog has an event, prevent the default behaviour\n\t\tif(event) {\n\t\t\tevent.preventDefault();\n\t\t}\n\n\t\t// Show the dialog\n\t\tthis.dialog.showModal();\n\n\t\t// Add hash value to the URL\n\t\twindow.location = this.hash;\n    }\n\n\tcloseDialogBackdrop() {\n\t\tconst rect = this.dialog.getBoundingClientRect();\n\t\tconst isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);\n\n\t\t// If the user has clicked the backdrop (not the dialog), close the dialog\n\t\tif(!isInDialog) {\n\t\t\tthis.closeDialog();\n\t\t}\n\t}\n\n    closeDialog(event) {\n\t\t// If the trigger to close the dialog has an event, prevent the default behaviour\n\t\tif(event) {\n\t\t\tevent.preventDefault();\n\t\t}\n\n\t\t// Remove the hash value from the URL\n\t\thistory.replaceState({}, document.title, '.');\n\n\t\t// Begin the close animation\n\t\tthis.dialog.classList.add('is-hiding');\n\t\tthis.dialog.addEventListener('animationend', this.animateCloseDialog);\n    }\n\n\tanimateCloseDialog() {\n\t\t// Once the CSS animation to close the dialog has finished, reset dialog state and close\n\t\tthis.dialog.classList.remove('is-hiding');\n\t\tthis.dialog.close();\n\t\tthis.dialog.removeEventListener('animationend', this.animateCloseDialog);\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialog);\n\n//# sourceURL=webpack:///./source/js/organisms/dialog.js?");

/***/ })

/******/ });