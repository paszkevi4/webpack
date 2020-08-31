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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw4/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw4/index.js":
/*!**************************!*\
  !*** ./src/hw4/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];\r\nconst themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\nconst themedPairs = [];\r\n\r\nconst getPairs = () => {\r\n  const pairs = [];\r\n  let j = 0;\r\n  for (let i = 0; i < students.length; i++) {\r\n    if (students[i] == 'Олександр' || students[i] == 'Ігор' || students[i] == 'Олексій') {\r\n      pairs.push([students[i]]);\r\n    } else {\r\n      pairs[j].push(students[i]);\r\n      j++;\r\n    }\r\n  }\r\n  return pairs;\r\n};\r\n\r\nconst combiner = (pairs, themes) => {\r\n  for (let i = 0; i < pairs.length; i++) {\r\n    const pairString = pairs[i].join(' та ');\r\n    themedPairs.push([pairString, themes[i]]);\r\n  }\r\n  return themedPairs;\r\n};\r\n\r\nconst markStudents = () => {\r\n  const marked = [];\r\n  students.map((el) => {\r\n    marked.push([el, marks[students.indexOf(el)]]);\r\n  });\r\n  return marked;\r\n};\r\n\r\nconst markPairs = () => {\r\n  let finalResult = [];\r\n  themedPairs.map((el) => {\r\n    finalResult.push([...el]);\r\n  });\r\n  finalResult.map((el) => {\r\n    el.push(Math.ceil(Math.random() * 5));\r\n  });\r\n  return finalResult;\r\n};\r\n\r\nconsole.group('new values');\r\nconsole.log('students in pairs:', getPairs());\r\nconsole.log('pairs with themes:', combiner(getPairs(), themes));\r\nconsole.log('students with marks:', markStudents());\r\nconsole.log('pairs with marks:', markPairs());\r\nconsole.groupEnd('');\r\nconsole.group('making sure start values has not changed');\r\nconsole.log(students);\r\nconsole.log(themes);\r\nconsole.log(marks);\r\n\n\n//# sourceURL=webpack:///./src/hw4/index.js?");

/***/ })

/******/ });