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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw7/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw3/functions.js":
/*!******************************!*\
  !*** ./src/hw3/functions.js ***!
  \******************************/
/*! exports provided: getRandomNumber, namePrettier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumber\", function() { return getRandomNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namePrettier\", function() { return namePrettier; });\nconst getRandomNumber = (\r\n  lower = +prompt('Шукаємо у промiжку з:'),\r\n  higher = +prompt('та до якого значення:'),\r\n) => {\r\n  const temp = Math.random() * (higher - lower) + lower;\r\n  return Math.ceil(temp);\r\n};\r\n\r\nconst namePrettier = (name = prompt(\"Введiть ваше iм'я\")) => {\r\n  let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();\r\n  return newName;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/hw3/functions.js?");

/***/ }),

/***/ "./src/hw7/functions.js":
/*!******************************!*\
  !*** ./src/hw7/functions.js ***!
  \******************************/
/*! exports provided: getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMyTaxes\", function() { return getMyTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMiddleTaxes\", function() { return getMiddleTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTotalTaxes\", function() { return getTotalTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMySalary\", function() { return getMySalary; });\nfunction getMyTaxes(salary) {\r\n  return (salary * this.tax).toFixed(2);\r\n}\r\n\r\nfunction getMiddleTaxes() {\r\n  return (this.middleSalary * this.tax).toFixed(2);\r\n}\r\n\r\nfunction getTotalTaxes() {\r\n  return this.middleSalary * this.tax * this.vacancies;\r\n}\r\n\r\nfunction getMySalary(salary) {\r\n  let answ = { salary };\r\n  answ.taxes = getMyTaxes.call(this, salary);\r\n  answ.profit = salary - answ.taxes;\r\n  return answ;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/hw7/functions.js?");

/***/ }),

/***/ "./src/hw7/index.js":
/*!**************************!*\
  !*** ./src/hw7/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _hw3_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hw3/functions */ \"./src/hw3/functions.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/hw7/functions.js\");\n\r\n\r\n\r\n\r\nconst state = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hw7;\r\nconst countries = Object.keys(state);\r\nconst mySalary = Object(_hw3_functions__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(1500, 2000);\r\n\r\nconsole.group('My taxes in different countries');\r\ncountries.map((country) =>\r\n  console.log(\r\n    `$ ${_functions__WEBPACK_IMPORTED_MODULE_2__[\"getMyTaxes\"].call(state[country], mySalary)} you would pay for taxes in ${Object(_hw3_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(\r\n      country,\r\n    )} if you had ${mySalary}-dollar salary.`,\r\n  ),\r\n);\r\nconsole.groupEnd();\r\n\r\nconsole.group('Middle countries across the countries');\r\ncountries.map((country) =>\r\n  console.log(\r\n    `$ ${_functions__WEBPACK_IMPORTED_MODULE_2__[\"getMiddleTaxes\"].call(\r\n      state[country],\r\n    )} taxes are paid by IT specialist in each ${Object(_hw3_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(country)} on average.`,\r\n  ),\r\n);\r\nconsole.groupEnd();\r\n\r\nconsole.group('Total taxes paid in different countries');\r\ncountries.map((country) =>\r\n  console.log(\r\n    `$ ${_functions__WEBPACK_IMPORTED_MODULE_2__[\"getTotalTaxes\"].call(state[country])} taxes are paid by IT specialists in ${Object(_hw3_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(\r\n      country,\r\n    )}.`,\r\n  ),\r\n);\r\nconsole.groupEnd();\r\n\r\nwindow.state = state;\r\n\n\n//# sourceURL=webpack:///./src/hw7/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet store = {\r\n  hw1: {},\r\n  hw2: {\r\n    LOWER: 2,\r\n    HIGHER: 6,\r\n    SKIP_EVEN: false,\r\n  },\r\n  hw6: {\r\n    students: [\r\n      {\r\n        name: 'Tanya',\r\n        course: 3,\r\n        subjects: {\r\n          math: [4, 4, 3, 4],\r\n          algorithms: [3, 3, 3, 4, 4, 4],\r\n          data_science: [5, 5, 3, 4],\r\n        },\r\n      },\r\n      {\r\n        name: 'Victor',\r\n        course: 4,\r\n        subjects: {\r\n          physics: [5, 5, 5, 3],\r\n          economics: [2, 3, 3, 3, 3, 5],\r\n          geometry: [5, 5, 2, 3, 5],\r\n        },\r\n      },\r\n      {\r\n        name: 'Anton',\r\n        course: 2,\r\n        subjects: {\r\n          statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n          english: [5, 3],\r\n          cosmology: [5, 5, 5, 5],\r\n        },\r\n      },\r\n    ],\r\n  },\r\n  hw7: {\r\n    ukraine: { tax: 0.195, middleSalary: 1789, vacancies: 11476 },\r\n    latvia: { tax: 0.25, middleSalary: 1586, vacancies: 3921 },\r\n    litva: { tax: 0.15, middleSalary: 1509, vacancies: 1114 },\r\n  },\r\n  hw9: {\r\n    grandSquare: new Array(5).fill(null).map(() => new Array(5).fill(null)),\r\n    colors: [\r\n      'white',\r\n      'red',\r\n      'orange',\r\n      'yellow',\r\n      'lime',\r\n      'green',\r\n      'blue',\r\n      'navy',\r\n      'purple',\r\n      'fuchsia',\r\n      'black',\r\n    ],\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\r\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });