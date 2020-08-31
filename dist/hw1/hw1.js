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

eval("const APPLE_PRICE = 15.678;\r\nconst FUEL_PRICE = 123.965;\r\nconst ICECREAM_PRICE = 90.2345;\r\n\r\nlet basicPrices = [APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE];\r\n\r\nconst totalFlooredCount = (firstPrise, secondPrice, thirdPrice) => {\r\n  return Math.floor(firstPrise) + Math.floor(secondPrice) + Math.floor(thirdPrice);\r\n};\r\n\r\nconst ceiledTotal = (price, neededRound) => {\r\n  return Math.ceil(price / neededRound) * neededRound;\r\n};\r\n\r\nconst averageCount = (arr) => {\r\n  let sum = 0;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    sum += arr[i];\r\n  }\r\n  return +(sum / arr.length).toFixed(2);\r\n};\r\n\r\nconst newPriceCount = () => {\r\n  return +(prices.totalPrice * (1 - prices.discount)).toFixed(2);\r\n};\r\n\r\nconst profitCount = () => {\r\n  return prices.newPrice - prices.totalPrice / 2;\r\n};\r\n\r\nlet prices = {\r\n  theBiggestOne: Math.max(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\r\n  theLowestOne: Math.min(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\r\n  totalPrice: APPLE_PRICE + FUEL_PRICE + ICECREAM_PRICE,\r\n  totalPriceFloor: totalFlooredCount(APPLE_PRICE, FUEL_PRICE, ICECREAM_PRICE),\r\n  totalPriceRounded: null,\r\n  isEven: false,\r\n  customerMoney: 500,\r\n  customerChange: null,\r\n  average: null,\r\n  discount: Math.random(),\r\n  newPrice: null,\r\n  profit: null,\r\n};\r\n\r\nprices.totalPriceRounded = ceiledTotal(prices.totalPriceFloor, 100);\r\nprices.isEven = prices.totalPriceFloor % 2 === 0;\r\nprices.customerChange =\r\n  (prices.customerMoney || prompt('How much does customer have?')) - prices.totalPrice;\r\nprices.average = averageCount(basicPrices);\r\nprices.newPrice = newPriceCount();\r\nprices.profit = profitCount();\r\n\r\nconsole.log(\r\n  `Максимальна ціна: ${prices.theBiggestOne} \r\nМінімальна ціна: ${prices.theLowestOne} \r\nВартість всіх товарів: ${prices.totalPrice} \r\nОкруглена ціла частина: ${prices.totalPriceFloor}\r\nСума товарів округлена до сотень: ${prices.totalPriceRounded}\r\nЧи є сума всіх товарів парним числом: ${prices.isEven ? 'так' : 'ні'}\r\nРешта: ${prices.customerChange}\r\nСереднє значення цін: ${prices.average}\r\nНова ціна: ${prices.newPrice}\r\nЧистий прибуток: ${prices.profit}\r\n`,\r\n);\r\n\r\nconst root = document.getElementById('root');\r\nconst app = () => {\r\n  const render = () => {\r\n    root.innerHTML = `\r\n        \tМаксимальна ціна: ${prices.theBiggestOne} <br />\r\n\t\t\tМінімальна ціна: ${prices.theLowestOne} <br />\r\n\t\t\tВартість всіх товарів: ${prices.totalPrice} <br />\r\n\t\t\tОкруглена ціла частина: ${prices.totalPriceFloor} <br />\r\n\t\t\tСума товарів округлена до сотень: ${prices.totalPriceRounded} <br />\r\n\t\t\tЧи є сума всіх товарів парним числом: ${prices.isEven ? 'так' : 'ні'} <br />\r\n\t\t\tРешта: ${prices.customerChange} <br />\r\n\t\t\tСереднє значення цін: ${prices.average} <br />\r\n\t\t\tНова ціна: ${prices.newPrice} <br />\r\n\t\t\tЧистий прибуток: ${prices.profit}\r\n\t\t`;\r\n  };\r\n  render();\r\n};\r\napp();\r\n\n\n//# sourceURL=webpack:///./src/hw1/index.js?");

/***/ })

/******/ });