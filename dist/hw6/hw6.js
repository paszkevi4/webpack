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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSubjects\", function() { return getSubjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageMark\", function() { return getAverageMark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverage\", function() { return getAverage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentInfo\", function() { return getStudentInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentsNames\", function() { return getStudentsNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBestStudent\", function() { return getBestStudent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateWordLetters\", function() { return calculateWordLetters; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/*-----1. Повернення списку предметів-----*/\nvar getSubjects = function getSubjects(student) {\n  var subjects = [];\n  subjects = Object.keys(student.subjects);\n  return subjects.join(' ');\n};\n/*-----2. Середня оцінка-----*/\n\nvar getAverageMark = function getAverageMark(student) {\n  var subjects = student.subjects;\n  var temp = [];\n\n  for (var sub in subjects) {\n    temp.push(getAverage.apply(void 0, _toConsumableArray(subjects[sub])));\n  }\n\n  return getAverage.apply(void 0, temp).toFixed(2);\n};\nvar getAverage = function getAverage() {\n  var sum = 0;\n\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  numbers.map(function (el) {\n    sum += el;\n  });\n  return sum / numbers.length;\n};\n/*-----3. Повернення загальної інформації про студента-----*/\n\nvar getStudentInfo = function getStudentInfo(student) {\n  var temp = {\n    course: student.course,\n    name: student.name,\n    averageMark: getAverageMark(student)\n  };\n  return temp;\n};\n/*-----4. Iмена студентів у алфавітному порядку-----*/\n\nvar getStudentsNames = function getStudentsNames(students) {\n  return students.map(function (el) {\n    return el.name;\n  }).sort();\n};\n/*-----5. Повернути iмя найкращого студента-----*/\n\nvar getBestStudent = function getBestStudent(students) {\n  var newArr = JSON.parse(JSON.stringify(students));\n  newArr.map(function (stud) {\n    stud.average = getAverageMark(stud);\n  });\n  var max = newArr.reduce(function (prev, curr) {\n    if (prev.average > curr.average) {\n      return prev;\n    }\n\n    return curr;\n  });\n  return max.name;\n};\n/*-----6. Порахувати букви-----*/\n\nvar calculateWordLetters = function calculateWordLetters(word) {\n  var temp = {};\n\n  _toConsumableArray(word).forEach(function (el) {\n    temp[el] ? temp[el] += 1 : temp[el] = 1;\n  });\n\n  return temp;\n};\n\n//# sourceURL=webpack:///./src/hw6/functions.js?");

/***/ }),

/***/ "./src/hw6/index.js":
/*!**************************!*\
  !*** ./src/hw6/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/hw6/functions.js\");\nvar _console2;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n //import getAverage from './functions';\n\n\nvar state = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hw6;\nvar wordForCalcs = 'aaabcccc';\nconsole.log('Students sorted:', Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getStudentsNames\"])(state.students));\nstate.students.map(function (el) {\n  var _console;\n\n  console.group(el.name);\n  console.log(\"subjects:  \".concat(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getSubjects\"])(el)));\n\n  (_console = console).log.apply(_console, _toConsumableArray(Object.entries(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getStudentInfo\"])(el))));\n\n  console.log(\"average:  \".concat(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"getAverageMark\"])(el)));\n  console.groupEnd();\n});\n\n(_console2 = console).log.apply(_console2, ['Letter counter:'].concat(_toConsumableArray(Object.entries(Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"calculateWordLetters\"])(wordForCalcs)))));\n\n//# sourceURL=webpack:///./src/hw6/index.js?");

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