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

eval("var numberSetter = function numberSetter(strToShow) {\n  var i = null;\n\n  while (!i) {\n    i = +prompt(strToShow);\n    Number.isInteger(i / 1) ? '' : i = null;\n  }\n\n  return i;\n};\n\nvar counter = function counter() {\n  var res = 0;\n\n  for (var i = LOWER; i <= HIGHER; i++) {\n    if (SKIP_EVEN && i % 2 == 0) continue;\n    res += i;\n  }\n\n  return res;\n};\n\nvar LOWER = numberSetter('Від якого числа небхідно складати?');\nvar HIGHER = numberSetter('До якого числа небхідно складати?');\nvar SKIP_EVEN = confirm('Чи потрібно пропускати парні числа?');\nvar root = document.getElementById('root');\n\nvar app = function app() {\n  root.innerHTML = \"\\n    \\t<h3>\\u0421\\u0443\\u043C\\u0430  \\u0432\\u0441i\\u0445 \".concat(SKIP_EVEN ? 'непарних' : '', \" \\n    \\t\\u0447\\u0438\\u0441\\u0435\\u043B \\u0432\\u0456\\u0434 \").concat(LOWER, \" \\u0434\\u043E \").concat(HIGHER, \" \\n    \\t\\u0434\\u043E\\u0440\\u0456\\u0432\\u043D\\u044E\\u0454 \").concat(counter(), \". </h3>\\n\\t\");\n};\n\nvar render = function render() {\n  while (HIGHER <= LOWER) {\n    HIGHER = numberSetter(\"\\u0427\\u0438\\u0441\\u043B\\u043E, \\u0434\\u043E \\u044F\\u043A\\u043E\\u0433\\u043E \\u043D\\u0435\\u043E\\u0431\\u0445i\\u0434\\u043D\\u043E \\u0440\\u0430\\u0445\\u0443\\u0432\\u0430\\u0442\\u0438 \\u043C\\u0430\\u0454 \\u0431\\u0443\\u0442\\u0438 \\u0431i\\u043B\\u044C\\u0448\\u0435 \".concat(LOWER, \". \\u0417\\u043Ci\\u043Di\\u0442\\u044C \\u0441\\u0432\\u043E\\u0454 \\u0447\\u0438\\u0441\\u043B\\u043E:\"));\n  }\n\n  console.log(counter());\n  app();\n};\n\nrender();\n\n//# sourceURL=webpack:///./src/hw2/index.js?");

/***/ })

/******/ });