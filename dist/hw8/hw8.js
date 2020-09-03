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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw8/index.js");
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

/***/ "./src/hw8/index.js":
/*!**************************!*\
  !*** ./src/hw8/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw6_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hw6/functions */ \"./src/hw6/functions.js\");\n\r\n\r\nclass Student {\r\n  constructor(props) {\r\n    this.university = props.university;\r\n    this.course = props.course;\r\n    this.fullName = props.fullName;\r\n    this._marks = [];\r\n    this.expelled = false;\r\n  }\r\n\r\n  getInfo() {\r\n    return `Студент ${this.course} курсу, ${this.university}, ${this.fullName}`;\r\n  }\r\n  set studentsMarks(marks) {\r\n    if (!this.expelled) {\r\n      this._marks = [...this._marks, ...marks];\r\n      return this._marks;\r\n    } else {\r\n      return null;\r\n    }\r\n  }\r\n  get marks() {\r\n    if (!this.expelled) {\r\n      return this._marks;\r\n    } else {\r\n      return null;\r\n    }\r\n  }\r\n  set marks(mark) {\r\n    if (!this.expelled) {\r\n      this._marks = [...this._marks, mark];\r\n      console.log('new marks array', this._marks);\r\n      return this._marks;\r\n    } else {\r\n      return null;\r\n    }\r\n  }\r\n  getAverageMark() {\r\n    return Object(_hw6_functions__WEBPACK_IMPORTED_MODULE_0__[\"getAverage\"])(...this._marks);\r\n  }\r\n  dismiss() {\r\n    this.expelled = true;\r\n  }\r\n  recover() {\r\n    this.expelled = false;\r\n  }\r\n}\r\n\r\nclass BudgetStudent extends Student {\r\n  constructor(props) {\r\n    super(props);\r\n    this.scholarship = 1400;\r\n    setInterval(() => {\r\n      this.getScholarship();\r\n    }, 30000);\r\n  }\r\n  getScholarship() {\r\n    if (!this.expelled && this.getAverageMark() >= 4) {\r\n      console.log(`Ви отримали ${this.scholarship} грн. стипендії`);\r\n    }\r\n  }\r\n}\r\n\r\nconst ostap = new BudgetStudent({\r\n  university: 'Вищої Школи Психотерапії м.Одеса',\r\n  course: 3,\r\n  fullName: 'Остап Бендер',\r\n});\r\nostap.studentsMarks = [5, 4, 4, 5];\r\n\r\nwindow.ostap = ostap;\r\n\n\n//# sourceURL=webpack:///./src/hw8/index.js?");

/***/ })

/******/ });