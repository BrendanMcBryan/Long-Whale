/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ctc-gallery-viewer/ctc_overlay.js":
/*!********************************************************!*\
  !*** ./node_modules/ctc-gallery-viewer/ctc_overlay.js ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/brendanmcbryan/Local Sites/long-whale/app/public/wp-content/plugins/longwhaleblocks/node_modules/ctc-gallery-viewer/ctc_overlay.js'");

/***/ }),

/***/ "./node_modules/js-masonry/js-masonry.js":
/*!***********************************************!*\
  !*** ./node_modules/js-masonry/js-masonry.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/brendanmcbryan/Local Sites/long-whale/app/public/wp-content/plugins/longwhaleblocks/node_modules/js-masonry/js-masonry.js'");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/masongallery/frontend.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ctc_gallery_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ctc-gallery-viewer */ "./node_modules/ctc-gallery-viewer/ctc_overlay.js");
/* harmony import */ var ctc_gallery_viewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ctc_gallery_viewer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-masonry */ "./node_modules/js-masonry/js-masonry.js");
/* harmony import */ var js_masonry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_masonry__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener("DOMContentLoaded", () => {
  Array.from(document.querySelectorAll('.mas-gal-gallery')).map(x => {
    let imgArr = Array.from(x.querySelectorAll('img'));
    imgArr.map((y, i) => {
      let img = new Image();
      img.src = y.src;
      img.addEventListener('load', e => {
        if (i == imgArr.length - 1) {
          new js_masonry__WEBPACK_IMPORTED_MODULE_1__.jsMasonry(`#${x.getAttribute('id')}`, {
            percentWidth: true,
            elMargin: parseInt(x.getAttribute('data-gut-wd')),
            callback: el => el.style.opacity = ''
          });
        }
      });
    });
  });
  new ctc_gallery_viewer__WEBPACK_IMPORTED_MODULE_0__.ctcOverlayViewer('.ctc-gal-overlay');
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map