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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSubjects\", function() { return getSubjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverageMark\", function() { return getAverageMark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAverage\", function() { return getAverage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentInfo\", function() { return getStudentInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStudentsNames\", function() { return getStudentsNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBestStudent\", function() { return getBestStudent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateWordLetters\", function() { return calculateWordLetters; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/*-----1. Повернення списку предметів-----*/\nvar getSubjects = function getSubjects(student) {\n  var subjects = [];\n  subjects = Object.keys(student.subjects);\n  return subjects.join(' ');\n};\n/*-----2. Середня оцінка-----*/\n\nvar getAverageMark = function getAverageMark(student) {\n  var subjects = student.subjects;\n  var temp = [];\n\n  for (var sub in subjects) {\n    temp.push(getAverage.apply(void 0, _toConsumableArray(subjects[sub])));\n  }\n\n  return getAverage.apply(void 0, temp).toFixed(2);\n};\nvar getAverage = function getAverage() {\n  var sum = 0;\n\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  numbers.map(function (el) {\n    sum += el;\n  });\n  return sum / numbers.length;\n};\n/*-----3. Повернення загальної інформації про студента-----*/\n\nvar getStudentInfo = function getStudentInfo(student) {\n  var temp = {\n    course: student.course,\n    name: student.name,\n    averageMark: getAverageMark(student)\n  };\n  return temp;\n};\n/*-----4. Iмена студентів у алфавітному порядку-----*/\n\nvar getStudentsNames = function getStudentsNames(students) {\n  return students.map(function (el) {\n    return el.name;\n  }).sort();\n};\n/*-----5. Повернути iмя найкращого студента-----*/\n\nvar getBestStudent = function getBestStudent(students) {\n  var newArr = JSON.parse(JSON.stringify(students));\n  newArr.map(function (stud) {\n    stud.average = getAverageMark(stud);\n  });\n  var max = newArr.reduce(function (prev, curr) {\n    if (prev.average > curr.average) {\n      return prev;\n    }\n\n    return curr;\n  });\n  return max.name;\n};\n/*-----6. Порахувати букви-----*/\n\nvar calculateWordLetters = function calculateWordLetters(word) {\n  var temp = {};\n\n  _toConsumableArray(word).forEach(function (el) {\n    temp[el] ? temp[el] += 1 : temp[el] = 1;\n  });\n\n  return temp;\n};\n\n//# sourceURL=webpack:///./src/hw6/functions.js?");

/***/ }),

/***/ "./src/hw8/index.js":
/*!**************************!*\
  !*** ./src/hw8/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw6_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hw6/functions */ \"./src/hw6/functions.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Student = /*#__PURE__*/function () {\n  function Student(props) {\n    _classCallCheck(this, Student);\n\n    this.university = props.university;\n    this.course = props.course;\n    this.fullName = props.fullName;\n    this._marks = [];\n    this.expelled = false;\n  }\n\n  _createClass(Student, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \" \\u043A\\u0443\\u0440\\u0441\\u0443, \").concat(this.university, \", \").concat(this.fullName);\n    }\n  }, {\n    key: \"getAverageMark\",\n    value: function getAverageMark() {\n      return _hw6_functions__WEBPACK_IMPORTED_MODULE_0__[\"getAverage\"].apply(void 0, _toConsumableArray(this._marks));\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      this.expelled = true;\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      this.expelled = false;\n    }\n  }, {\n    key: \"studentsMarks\",\n    set: function set(marks) {\n      if (!this.expelled) {\n        this._marks = [].concat(_toConsumableArray(this._marks), _toConsumableArray(marks));\n        return this._marks;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: \"marks\",\n    get: function get() {\n      if (!this.expelled) {\n        return this._marks;\n      } else {\n        return null;\n      }\n    },\n    set: function set(mark) {\n      if (!this.expelled) {\n        this._marks = [].concat(_toConsumableArray(this._marks), [mark]);\n        console.log('new marks array', this._marks);\n        return this._marks;\n      } else {\n        return null;\n      }\n    }\n  }]);\n\n  return Student;\n}();\n\nvar BudgetStudent = /*#__PURE__*/function (_Student) {\n  _inherits(BudgetStudent, _Student);\n\n  var _super = _createSuper(BudgetStudent);\n\n  function BudgetStudent(props) {\n    var _this;\n\n    _classCallCheck(this, BudgetStudent);\n\n    _this = _super.call(this, props);\n    _this.scholarship = 1400;\n    setInterval(function () {\n      _this.getScholarship();\n    }, 30000);\n    return _this;\n  }\n\n  _createClass(BudgetStudent, [{\n    key: \"getScholarship\",\n    value: function getScholarship() {\n      if (!this.expelled && this.getAverageMark() >= 4) {\n        console.log(\"\\u0412\\u0438 \\u043E\\u0442\\u0440\\u0438\\u043C\\u0430\\u043B\\u0438 \".concat(this.scholarship, \" \\u0433\\u0440\\u043D. \\u0441\\u0442\\u0438\\u043F\\u0435\\u043D\\u0434\\u0456\\u0457\"));\n      }\n    }\n  }]);\n\n  return BudgetStudent;\n}(Student);\n\nvar ostap = new BudgetStudent({\n  university: 'Вищої Школи Психотерапії м.Одеса',\n  course: 3,\n  fullName: 'Остап Бендер'\n});\nostap.studentsMarks = [5, 4, 4, 5];\nwindow.ostap = ostap;\n\n//# sourceURL=webpack:///./src/hw8/index.js?");

/***/ })

/******/ });