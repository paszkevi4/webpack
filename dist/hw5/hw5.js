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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hw5/index.js":
/*!**************************!*\
  !*** ./src/hw5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/*-----1-----*/\nvar getRandomArray = function getRandomArray(length, min, max) {\n  var tempArr = [];\n\n  for (var i = 0; i < length; i++) {\n    tempArr.push(Math.round(Math.random() * (max - min) + min));\n  }\n\n  return tempArr;\n};\n/*-----2-----*/\n\n\nvar getModa = function getModa() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  var tempArr = new Array(numbers.length).fill(0);\n\n  for (var i = 0; i < numbers.length; i++) {\n    for (var j = i + 1; j < numbers.length; j++) {\n      if (numbers[i] == numbers[j]) tempArr[i]++;\n    }\n  }\n\n  var max = Math.max.apply(Math, _toConsumableArray(tempArr));\n  var maxIndex = tempArr.findIndex(function (el) {\n    if (el == max) return true;\n  });\n  return numbers[maxIndex];\n};\n/*-----3-----*/\n\n\nvar getAverage = function getAverage() {\n  var sum = 0;\n  var floatCount = 0;\n\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n\n  numbers.map(function (el) {\n    Number.isInteger(el) ? sum += el : floatCount++;\n  });\n  return sum / (numbers.length - floatCount);\n};\n/*-----4-----*/\n\n\nvar getMedian = function getMedian() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n\n  numbers.sort(function (a, b) {\n    return a - b;\n  });\n  var index = Math.floor(numbers.length / 2);\n\n  if (numbers.length % 2) {\n    return numbers[index];\n  } else {\n    return (numbers[index] + numbers[index - 1]) / 2;\n  }\n};\n/*-----5-----*/\n\n\nvar filterEvenNumbers = function filterEvenNumbers() {\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n\n  var tempArr = numbers.filter(function (el) {\n    return el % 2;\n  });\n  return tempArr;\n};\n/*-----6-----*/\n\n\nvar countPositiveNumbers = function countPositiveNumbers() {\n  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    numbers[_key5] = arguments[_key5];\n  }\n\n  var tempArr = numbers.filter(function (el) {\n    return el > 0;\n  });\n  return tempArr.length;\n};\n/*-----7-----*/\n\n\nvar getDividedByFive = function getDividedByFive() {\n  for (var _len6 = arguments.length, numbers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n    numbers[_key6] = arguments[_key6];\n  }\n\n  var tempArr = numbers.filter(function (el) {\n    return !(el % 5);\n  });\n  return tempArr;\n};\n/*-----8-----*/\n\n\nvar replaceBadWords = function replaceBadWords(string) {\n  var badWords = [['fuck', '****'], ['shit', '****']];\n  var newString = string;\n  var tempString = '';\n\n  for (var i = 0; i < badWords.length;) {\n    tempString = newString.replace(badWords[i][0], badWords[i][1]);\n    newString !== tempString ? newString = tempString : i++;\n  }\n\n  return newString;\n};\n/*-----9-----*/\n\n\nvar divideByThree = function divideByThree(word) {\n  word = word.split(' ').join('').toLowerCase();\n  var tempArr = [];\n\n  for (var i = 0; i < word.length; i += 3) {\n    var currentPart = word.slice(i, i + 3);\n    tempArr.push(currentPart);\n  }\n\n  return tempArr;\n};\n\nconsole.group('1. random array');\nconsole.log(getRandomArray(10, -5, 3));\nconsole.groupEnd();\nconsole.group('2. find moda');\nconsole.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\nconsole.groupEnd();\nconsole.group('3. return average');\nconsole.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.2, 3.6));\nconsole.groupEnd();\nconsole.group('4. shows median');\nconsole.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\nconsole.groupEnd();\nconsole.group('5. filters even numbers');\nconsole.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));\nconsole.groupEnd();\nconsole.group('6. counts positive numbers');\nconsole.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));\nconsole.groupEnd();\nconsole.group('7. looks for numbers coud be divided by 5');\nconsole.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 56, 3, 2));\nconsole.groupEnd();\nconsole.group('8. bad words replacer');\nconsole.log(replaceBadWords(\"Are you fucking kidding? It's bullshit! fuckfuckshit\"));\nconsole.groupEnd(8);\nconsole.group('9. divide string by syllables');\nconsole.log(divideByThree('CoMm AnDe R'));\nconsole.groupEnd();\n\n//# sourceURL=webpack:///./src/hw5/index.js?");

/***/ })

/******/ });