/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ListyElement/Listy.js":
/*!***********************************!*\
  !*** ./src/ListyElement/Listy.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Listy\n/* harmony export */ });\n\nclass Listy {\n\n    constructor() {\n        this.theArray = [];    \n\n    }\n\n    addItem(item) {\n        if (typeof(item) == 'string') this.theArray.push(item);\n    }\n\n    removeItem(position) {\n        if (this.theArray.length > position);\n    }\n\n    parse(jsString) {\n        // Implement take in a string and parse into the array.        \n    }\n\n    toString() {\n        return this.theArray.toString();\n    }\n\n    sortOnCharacterPosition(position) {\n        if (this.theArray)\n            this.theArray.sort(this.__sortOnCharacterPosition(position));\n    }\n\n    /*\n    __sortOnCharacterPosition     Sorts an array based on the passed character position.\n                                Usage: myArray.sortOnCharacterPosition(2).\n    */\n    __sortOnCharacterPosition (position) {\n        return (a, b) => {\n\n            if (isNaN(position)) position = 0; // instead of error.\n\n            // Limit position to last character of string.\n            if (a.length > position) {\n                a = a.charAt(position);\n            } else {\n                a = a.charAt(a.length - 1);\n            }\n\n            // Limit position to last character of string.\n            if (b.length > position) {\n                b = b.charAt(position);\n            } else {\n                b = b.charAt(b.length - 1);\n            }\n\n            if (a < b) return -1;\n            if (a > b) return 1;\n\n            return 0;\n        };\n    }\n\n}\n\n//# sourceURL=webpack://fbx/./src/ListyElement/Listy.js?");

/***/ }),

/***/ "./src/ListyElement/ListyElement.js":
/*!******************************************!*\
  !*** ./src/ListyElement/ListyElement.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ListyElement\n/* harmony export */ });\n/* harmony import */ var _Listy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listy */ \"./src/ListyElement/Listy.js\");\n\n\n\nclass ListyElement {\n\n    constructor () {\n\n        this.setupElements();\n        this.setupEvents();\n        this.setupProperties();\n\n    }\n    \n    setupElements() {\n        this._mainContainer = document.createElement('div');\n        this._mainContainer.className = 'mainContainer';\n        \n        // Position Container.\n        this._positionContainer = document.createElement('div');\n        this._positionContainer.classList.add('positionContainer');\n\n        this._positionContainerInput = document.createElement('input');\n        this._positionContainerInput.classList.add('positionContainerInput');\n\n        this._positionContainerLabel = document.createElement('p');\n        this._positionContainerLabel.classList.add('positionContainerLabel');\n\n        this._positionContainer.appendChild(this._positionContainerLabel);\n        this._positionContainer.appendChild(this._positionContainerInput);\n\n        // Items List.\n        this._itemsListContainer = document.createElement('div');\n        this._itemsListContainer.classList.add('itemsListContainer');\n\n        this._itemsListContainerTop = document.createElement('div');\n        this._itemsListContainerTop.classList.add('itemsListContainerTop');\n\n        this._itemsListContainerMiddle = document.createElement('div');\n        this._itemsListContainerMiddle.classList.add('itemsListContainerMiddle');\n\n        this._itemsListContainerBottom = document.createElement('div');\n        this._itemsListContainerBottom.classList.add('itemsListContainerBottom');\n\n        this._itemsListInput = document.createElement('input');\n        this._itemsListInput.classList.add('itemsListInput');\n\n        this._itemsListAddButton = document.createElement('input');\n        this._itemsListAddButton.classList.add('itemsListAddButton');\n\n        this._itemsListList = document.createElement('ol');\n        this._itemsListList.classList.add('itemsListList');\n\n        this._itemsListSortButton = document.createElement('button');\n        this._itemsListSortButton.classList.add('itemsListSortButton');\n\n        this._itemsListContainerTop.appendChild(this._itemsListInput);\n        this._itemsListContainerMiddle.appendChild(this._itemsListList);\n        this._itemsListContainerBottom.appendChild(this._itemsListSortButton);\n\n        this._itemsListContainer.appendChild(this._itemsListContainerTop);\n        this._itemsListContainer.appendChild(this._itemsListContainerMiddle);\n        this._itemsListContainer.appendChild(this._itemsListContainerBottom);\n\n        // Main Container Appending.\n        this._mainContainer.appendChild(this._positionInput);\n        this._mainContainer.appendChild(this._itemsList);\n\n    }\n\n    setupEvents() {\n        this._positionInput.addEventListener('change', () => {console.log('change position input')});\n        this._itemsListSortButton.addEventListener('click', () => {console.log('sort button clicked')});\n    }\n\n    setupProperties() {\n        this._characterPosition = 0;\n\n        this._listy = new _Listy__WEBPACK_IMPORTED_MODULE_0__.default();\n    }\n\n    get element() {\n        return this._mainContainer;\n    }\n\n    _addItemToList(item) {\n        console.log('_addItemToList called');\n        this._listy.addItem(this._itemsListInput);\n    }\n\n    _sortList() {\n        console.log('_sortList called');\n        this._listy.sortOnCharacterPosition(this._characterPosition);\n        this._refreshList();\n    }\n\n    _refreshList() {\n        console.log('_refreshList called');\n    }\n\n    \n}\n\n//# sourceURL=webpack://fbx/./src/ListyElement/ListyElement.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ListyElement_ListyElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListyElement/ListyElement */ \"./src/ListyElement/ListyElement.js\");\n\nconsole.log('INSIDE MAIN.JS');\n\n// import ListyElement from './ListyElement/ListyElement';\n\n\nmain = () => {\n  \n  undefined.listyElement = new _ListyElement_ListyElement__WEBPACK_IMPORTED_MODULE_0__.default();\n\n  undefined.container = undefined.ListyElement;\n\n  document.appendChild(undefined.container);\n  \n  console.log('inside main function');\n\n}\n\nmain();\n\n\n\n\n\n\n\n//# sourceURL=webpack://fbx/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;