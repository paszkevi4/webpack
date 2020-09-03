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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw1/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw1/index.js":
/*!**************************!*\
  !*** ./src/hw1/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var APPLE_PRICE = 15.678;\nvar FUEL_PRICE = 123.965;\nvar ICECREAM_PRICE = 90.2345;\nvar basicPrices = [APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE];\n\nvar totalFlooredCount = function totalFlooredCount(firstPrise, secondPrice, thirdPrice) {\n  return Math.floor(firstPrise) + Math.floor(secondPrice) + Math.floor(thirdPrice);\n};\n\nvar ceiledTotal = function ceiledTotal(price, neededRound) {\n  return Math.ceil(price / neededRound) * neededRound;\n};\n\nvar averageCount = function averageCount(arr) {\n  var sum = 0;\n\n  for (var i = 0; i < arr.length; i++) {\n    sum += arr[i];\n  }\n\n  return +(sum / arr.length).toFixed(2);\n};\n\nvar newPriceCount = function newPriceCount() {\n  return +(prices.totalPrice * (1 - prices.discount)).toFixed(2);\n};\n\nvar profitCount = function profitCount() {\n  return prices.newPrice - prices.totalPrice / 2;\n};\n\nvar prices = {\n  theBiggestOne: Math.max(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\n  theLowestOne: Math.min(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\n  totalPrice: APPLE_PRICE + FUEL_PRICE + ICECREAM_PRICE,\n  totalPriceFloor: totalFlooredCount(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\n  totalPriceRounded: null,\n  isEven: false,\n  customerMoney: 500,\n  customerChange: null,\n  average: null,\n  discount: Math.random(),\n  newPrice: null,\n  profit: null\n};\nprices.totalPriceRounded = ceiledTotal(prices.totalPriceFloor, 100);\nprices.isEven = prices.totalPriceFloor % 2 === 0;\nprices.customerChange = (prices.customerMoney || prompt('How much does customer have?')) - prices.totalPrice;\nprices.average = averageCount(basicPrices);\nprices.newPrice = newPriceCount();\nprices.profit = profitCount();\nconsole.log(\"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430 \\u0446\\u0456\\u043D\\u0430: \".concat(prices.theBiggestOne, \" \\n\\u041C\\u0456\\u043D\\u0456\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430 \\u0446\\u0456\\u043D\\u0430: \").concat(prices.theLowestOne, \" \\n\\u0412\\u0430\\u0440\\u0442\\u0456\\u0441\\u0442\\u044C \\u0432\\u0441\\u0456\\u0445 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432: \").concat(prices.totalPrice, \" \\n\\u041E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u0430 \\u0446\\u0456\\u043B\\u0430 \\u0447\\u0430\\u0441\\u0442\\u0438\\u043D\\u0430: \").concat(prices.totalPriceFloor, \"\\n\\u0421\\u0443\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u0430 \\u0434\\u043E \\u0441\\u043E\\u0442\\u0435\\u043D\\u044C: \").concat(prices.totalPriceRounded, \"\\n\\u0427\\u0438 \\u0454 \\u0441\\u0443\\u043C\\u0430 \\u0432\\u0441\\u0456\\u0445 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432 \\u043F\\u0430\\u0440\\u043D\\u0438\\u043C \\u0447\\u0438\\u0441\\u043B\\u043E\\u043C: \").concat(prices.isEven ? 'так' : 'ні', \"\\n\\u0420\\u0435\\u0448\\u0442\\u0430: \").concat(prices.customerChange, \"\\n\\u0421\\u0435\\u0440\\u0435\\u0434\\u043D\\u0454 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u043D\\u044F \\u0446\\u0456\\u043D: \").concat(prices.average, \"\\n\\u041D\\u043E\\u0432\\u0430 \\u0446\\u0456\\u043D\\u0430: \").concat(prices.newPrice, \"\\n\\u0427\\u0438\\u0441\\u0442\\u0438\\u0439 \\u043F\\u0440\\u0438\\u0431\\u0443\\u0442\\u043E\\u043A: \").concat(prices.profit, \"\\n\"));\nvar root = document.getElementById('root');\n\nvar app = function app() {\n  var render = function render() {\n    root.innerHTML = \"\\n        \\t\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430 \\u0446\\u0456\\u043D\\u0430: \".concat(prices.theBiggestOne, \" <br />\\n\\t\\t\\t\\u041C\\u0456\\u043D\\u0456\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430 \\u0446\\u0456\\u043D\\u0430: \").concat(prices.theLowestOne, \" <br />\\n\\t\\t\\t\\u0412\\u0430\\u0440\\u0442\\u0456\\u0441\\u0442\\u044C \\u0432\\u0441\\u0456\\u0445 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432: \").concat(prices.totalPrice, \" <br />\\n\\t\\t\\t\\u041E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u0430 \\u0446\\u0456\\u043B\\u0430 \\u0447\\u0430\\u0441\\u0442\\u0438\\u043D\\u0430: \").concat(prices.totalPriceFloor, \" <br />\\n\\t\\t\\t\\u0421\\u0443\\u043C\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432 \\u043E\\u043A\\u0440\\u0443\\u0433\\u043B\\u0435\\u043D\\u0430 \\u0434\\u043E \\u0441\\u043E\\u0442\\u0435\\u043D\\u044C: \").concat(prices.totalPriceRounded, \" <br />\\n\\t\\t\\t\\u0427\\u0438 \\u0454 \\u0441\\u0443\\u043C\\u0430 \\u0432\\u0441\\u0456\\u0445 \\u0442\\u043E\\u0432\\u0430\\u0440\\u0456\\u0432 \\u043F\\u0430\\u0440\\u043D\\u0438\\u043C \\u0447\\u0438\\u0441\\u043B\\u043E\\u043C: \").concat(prices.isEven ? 'так' : 'ні', \" <br />\\n\\t\\t\\t\\u0420\\u0435\\u0448\\u0442\\u0430: \").concat(prices.customerChange, \" <br />\\n\\t\\t\\t\\u0421\\u0435\\u0440\\u0435\\u0434\\u043D\\u0454 \\u0437\\u043D\\u0430\\u0447\\u0435\\u043D\\u043D\\u044F \\u0446\\u0456\\u043D: \").concat(prices.average, \" <br />\\n\\t\\t\\t\\u041D\\u043E\\u0432\\u0430 \\u0446\\u0456\\u043D\\u0430: \").concat(prices.newPrice, \" <br />\\n\\t\\t\\t\\u0427\\u0438\\u0441\\u0442\\u0438\\u0439 \\u043F\\u0440\\u0438\\u0431\\u0443\\u0442\\u043E\\u043A: \").concat(prices.profit, \"\\n\\t\\t\");\n  };\n\n  render();\n};\n\napp();\n\n//# sourceURL=webpack:///./src/hw1/index.js?");

/***/ })

/******/ });