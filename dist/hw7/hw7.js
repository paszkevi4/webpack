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

/***/ "./src/commonFuncs/functions.js":
/*!**************************************!*\
  !*** ./src/commonFuncs/functions.js ***!
  \**************************************/
/*! exports provided: namePrettier, getRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namePrettier\", function() { return namePrettier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumber\", function() { return getRandomNumber; });\n/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */\nvar namePrettier = function namePrettier() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prompt(\"Введiть ваше iм'я\");\n  var newName = name[0].toUpperCase() + name.slice(1).toLowerCase();\n  return newName;\n};\n/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */\n\nvar getRandomNumber = function getRandomNumber() {\n  var lower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +prompt('Шукаємо у промiжку з:');\n  var higher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +prompt('та до якого значення:');\n  var temp = Math.random() * (higher - lower) + lower;\n  return Math.ceil(temp);\n};\n\n//# sourceURL=webpack:///./src/commonFuncs/functions.js?");

/***/ }),

/***/ "./src/hw7/functions.js":
/*!******************************!*\
  !*** ./src/hw7/functions.js ***!
  \******************************/
/*! exports provided: getMyTaxes, getMiddleTaxes, getTotalTaxes, getMySalary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMyTaxes\", function() { return getMyTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMiddleTaxes\", function() { return getMiddleTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTotalTaxes\", function() { return getTotalTaxes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMySalary\", function() { return getMySalary; });\nfunction getMyTaxes(salary) {\n  return (salary * this.tax).toFixed(2);\n}\nfunction getMiddleTaxes() {\n  return (this.middleSalary * this.tax).toFixed(2);\n}\nfunction getTotalTaxes() {\n  return this.middleSalary * this.tax * this.vacancies;\n}\nfunction getMySalary(salary) {\n  var answ = {\n    salary: salary\n  };\n  answ.taxes = getMyTaxes.call(this, salary);\n  answ.profit = salary - answ.taxes;\n  return answ;\n}\n\n//# sourceURL=webpack:///./src/hw7/functions.js?");

/***/ }),

/***/ "./src/hw7/index.js":
/*!**************************!*\
  !*** ./src/hw7/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _commonFuncs_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonFuncs/functions */ \"./src/commonFuncs/functions.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/hw7/functions.js\");\n //import { namePrettier, getRandomNumber } from '../hw3/index';\n\n //let someModule = require('../hw3/index');\n\n\nvar state = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hw7;\nvar countries = Object.keys(state);\nvar mySalary = Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(1500, 2000);\nconsole.group('My taxes in different countries');\ncountries.map(function (country) {\n  return console.log(\"$ \".concat(_functions__WEBPACK_IMPORTED_MODULE_2__[\"getMyTaxes\"].call(state[country], mySalary), \" you would pay for taxes in \").concat(Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(country), \" if you had \").concat(mySalary, \"-dollar salary.\"));\n});\nconsole.groupEnd();\nconsole.group('Middle countries across the countries');\ncountries.map(function (country) {\n  return console.log(\"$ \".concat(_functions__WEBPACK_IMPORTED_MODULE_2__[\"getMiddleTaxes\"].call(state[country]), \" taxes are paid by IT specialist in each \").concat(Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(country), \" on average.\"));\n});\nconsole.groupEnd();\nconsole.group('Total taxes paid in different countries');\ncountries.map(function (country) {\n  return console.log(\"$ \".concat(_functions__WEBPACK_IMPORTED_MODULE_2__[\"getTotalTaxes\"].call(state[country]), \" taxes are paid by IT specialists in \").concat(Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_1__[\"namePrettier\"])(country), \".\"));\n});\nconsole.groupEnd();\nwindow.state = state;\n\n//# sourceURL=webpack:///./src/hw7/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar store = {\n  hw1: {},\n  hw2: {\n    LOWER: 2,\n    HIGHER: 6,\n    SKIP_EVEN: false\n  },\n  hw6: {\n    students: [{\n      name: 'Tanya',\n      course: 3,\n      subjects: {\n        math: [4, 4, 3, 4],\n        algorithms: [3, 3, 3, 4, 4, 4],\n        data_science: [5, 5, 3, 4]\n      }\n    }, {\n      name: 'Victor',\n      course: 4,\n      subjects: {\n        physics: [5, 5, 5, 3],\n        economics: [2, 3, 3, 3, 3, 5],\n        geometry: [5, 5, 2, 3, 5]\n      }\n    }, {\n      name: 'Anton',\n      course: 2,\n      subjects: {\n        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n        english: [5, 3],\n        cosmology: [5, 5, 5, 5]\n      }\n    }]\n  },\n  hw7: {\n    ukraine: {\n      tax: 0.195,\n      middleSalary: 1789,\n      vacancies: 11476\n    },\n    latvia: {\n      tax: 0.25,\n      middleSalary: 1586,\n      vacancies: 3921\n    },\n    litva: {\n      tax: 0.15,\n      middleSalary: 1509,\n      vacancies: 1114\n    }\n  },\n  hw9: {\n    grandSquare: new Array(5).fill(null).map(function () {\n      return new Array(5).fill(null);\n    }),\n    colors: ['white', 'red', 'orange', 'yellow', 'lime', 'green', 'blue', 'navy', 'purple', 'fuchsia', 'black']\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });