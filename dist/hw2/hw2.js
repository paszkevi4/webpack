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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw2/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw2/index.js":
/*!**************************!*\
  !*** ./src/hw2/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const numberSetter = (strToShow) => {\r\n  let i = null;\r\n  while (!i) {\r\n    i = +prompt(strToShow);\r\n    Number.isInteger(i / 1) ? '' : (i = null);\r\n  }\r\n  return i;\r\n};\r\n\r\nconst counter = () => {\r\n  let res = 0;\r\n  for (let i = LOWER; i <= HIGHER; i++) {\r\n    if (SKIP_EVEN && i % 2 == 0) continue;\r\n    res += i;\r\n  }\r\n  return res;\r\n};\r\n\r\nconst LOWER = numberSetter('Від якого числа небхідно складати?');\r\nlet HIGHER = numberSetter('До якого числа небхідно складати?');\r\nconst SKIP_EVEN = confirm('Чи потрібно пропускати парні числа?');\r\n\r\nconst root = document.getElementById('root');\r\nconst app = () => {\r\n  root.innerHTML = `\r\n    \t<h3>Сума  всiх ${SKIP_EVEN ? 'непарних' : ''} \r\n    \tчисел від ${LOWER} до ${HIGHER} \r\n    \tдорівнює ${counter()}. </h3>\r\n\t`;\r\n};\r\n\r\nconst render = () => {\r\n  while (HIGHER <= LOWER) {\r\n    HIGHER = numberSetter(\r\n      `Число, до якого необхiдно рахувати має бути бiльше ${LOWER}. Змiнiть своє число:`,\r\n    );\r\n  }\r\n  console.log(counter());\r\n  app();\r\n};\r\nrender();\r\n\n\n//# sourceURL=webpack:///./src/hw2/index.js?");

/***/ })

/******/ });