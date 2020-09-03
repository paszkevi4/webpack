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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw6/functions.js":
/*!******************************!*\
  !*** ./src/hw6/functions.js ***!
  \******************************/
/*! exports provided: getSubjects, getAverageMark, getAverage, getStudentInfo, getStudentsNames, getBestStudent, calculateWordLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSubjects\", function() { return getSubjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageMark\", function() { return getAverageMark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverage\", function() { return getAverage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentInfo\", function() { return getStudentInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentsNames\", function() { return getStudentsNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBestStudent\", function() { return getBestStudent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateWordLetters\", function() { return calculateWordLetters; });\n/*-----1. Повернення списку предметів-----*/\r\nconst getSubjects = (student) => {\r\n  let subjects = [];\r\n  subjects = Object.keys(student.subjects);\r\n  return subjects.join(' ');\r\n};\r\n\r\n/*-----2. Середня оцінка-----*/\r\nconst getAverageMark = (student) => {\r\n  const { subjects } = student;\r\n  const temp = [];\r\n  for (let sub in subjects) {\r\n    temp.push(getAverage(...subjects[sub]));\r\n  }\r\n  return getAverage(...temp).toFixed(2);\r\n};\r\n\r\nconst getAverage = (...numbers) => {\r\n  let sum = 0;\r\n  numbers.map((el) => {\r\n    sum += el;\r\n  });\r\n  return sum / numbers.length;\r\n};\r\n\r\n/*-----3. Повернення загальної інформації про студента-----*/\r\nconst getStudentInfo = (student) => {\r\n  const temp = {\r\n    course: student.course,\r\n    name: student.name,\r\n    averageMark: getAverageMark(student),\r\n  };\r\n  return temp;\r\n};\r\n\r\n/*-----4. Iмена студентів у алфавітному порядку-----*/\r\nconst getStudentsNames = (students) => {\r\n  return students.map((el) => el.name).sort();\r\n};\r\n\r\n/*-----5. Повернути iмя найкращого студента-----*/\r\nconst getBestStudent = (students) => {\r\n  const newArr = JSON.parse(JSON.stringify(students));\r\n  newArr.map((stud) => {\r\n    stud.average = getAverageMark(stud);\r\n  });\r\n  let max = newArr.reduce((prev, curr) => {\r\n    if (prev.average > curr.average) {\r\n      return prev;\r\n    }\r\n    return curr;\r\n  });\r\n  return max.name;\r\n};\r\n\r\n/*-----6. Порахувати букви-----*/\r\nconst calculateWordLetters = (word) => {\r\n  const temp = {};\r\n  [...word].forEach((el) => {\r\n    temp[el] ? (temp[el] += 1) : (temp[el] = 1);\r\n  });\r\n  return temp;\r\n};\n\n//# sourceURL=webpack:///./src/hw6/functions.js?");

/***/ }),

/***/ "./src/hw6/index.js":
/*!**************************!*\
  !*** ./src/hw6/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/hw6/functions.js\");\n\r\n//import getAverage from './functions';\r\n\r\n\r\nconst state = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hw6;\r\nconst wordForCalcs = 'aaabcccc';\r\n\r\nconsole.log('Students sorted:', Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getStudentsNames\"])(state.students))\r\n\r\nstate.students.map((el) => {\r\n    console.group(el.name)\r\n    console.log(`subjects:  ${Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getSubjects\"])(el)}`)\r\n    console.log(...Object.entries(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getStudentInfo\"])(el)))\r\n    console.log(`average:  ${Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getAverageMark\"])(el)}`)\r\n    console.groupEnd()\r\n})\r\n\r\nconsole.log('Letter counter:', ...Object.entries(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"calculateWordLetters\"])(wordForCalcs)))\n\n//# sourceURL=webpack:///./src/hw6/index.js?");

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