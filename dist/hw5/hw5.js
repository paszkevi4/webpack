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

eval("/*-----1-----*/\r\nconst getRandomArray = (length, min, max) => {\r\n  const tempArr = [];\r\n  for (let i = 0; i < length; i++) {\r\n    tempArr.push(Math.round(Math.random() * (max - min) + min));\r\n  }\r\n  return tempArr;\r\n};\r\n\r\n/*-----2-----*/\r\nconst getModa = (...numbers) => {\r\n  const tempArr = new Array(numbers.length).fill(0);\r\n  for (let i = 0; i < numbers.length; i++) {\r\n    for (let j = i + 1; j < numbers.length; j++) {\r\n      if (numbers[i] == numbers[j]) tempArr[i]++;\r\n    }\r\n  }\r\n  let max = Math.max(...tempArr);\r\n  let maxIndex = tempArr.findIndex((el) => {\r\n    if (el == max) return true;\r\n  });\r\n  return numbers[maxIndex];\r\n};\r\n\r\n/*-----3-----*/\r\nconst getAverage = (...numbers) => {\r\n  let sum = 0;\r\n  let floatCount = 0;\r\n  numbers.map((el) => {\r\n    Number.isInteger(el) ? (sum += el) : floatCount++;\r\n  });\r\n  return sum / (numbers.length - floatCount);\r\n};\r\n\r\n/*-----4-----*/\r\nconst getMedian = (...numbers) => {\r\n  numbers.sort((a, b) => a - b);\r\n  let index = Math.floor(numbers.length / 2);\r\n  if (numbers.length % 2) {\r\n    return numbers[index];\r\n  } else {\r\n    return (numbers[index] + numbers[index - 1]) / 2;\r\n  }\r\n};\r\n\r\n/*-----5-----*/\r\nconst filterEvenNumbers = (...numbers) => {\r\n  let tempArr = numbers.filter((el) => {\r\n    return el % 2;\r\n  });\r\n  return tempArr;\r\n};\r\n\r\n/*-----6-----*/\r\nconst countPositiveNumbers = (...numbers) => {\r\n  let tempArr = numbers.filter((el) => {\r\n    return el > 0;\r\n  });\r\n  return tempArr.length;\r\n};\r\n\r\n/*-----7-----*/\r\nconst getDividedByFive = (...numbers) => {\r\n  let tempArr = numbers.filter((el) => {\r\n    return !(el % 5);\r\n  });\r\n  return tempArr;\r\n};\r\n\r\n/*-----8-----*/\r\nconst replaceBadWords = (string) => {\r\n  const badWords = [\r\n    ['fuck', '****'],\r\n    ['shit', '****'],\r\n  ];\r\n  let newString = string;\r\n  let tempString = '';\r\n  for (let i = 0; i < badWords.length; ) {\r\n    tempString = newString.replace(badWords[i][0], badWords[i][1]);\r\n    newString !== tempString ? (newString = tempString) : i++;\r\n  }\r\n  return newString;\r\n};\r\n\r\n/*-----9-----*/\r\nconst divideByThree = (word) => {\r\n  word = word.split(' ').join('').toLowerCase();\r\n  const tempArr = [];\r\n  for (let i = 0; i < word.length; i += 3) {\r\n    let currentPart = word.slice(i, i + 3);\r\n    tempArr.push(currentPart);\r\n  }\r\n  return tempArr;\r\n};\r\n\r\nconsole.group('1. random array');\r\nconsole.log(getRandomArray(10, -5, 3));\r\nconsole.groupEnd();\r\nconsole.group('2. find moda');\r\nconsole.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.groupEnd();\r\nconsole.group('3. return average');\r\nconsole.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.2, 3.6));\r\nconsole.groupEnd();\r\nconsole.group('4. shows median');\r\nconsole.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\r\nconsole.groupEnd();\r\nconsole.group('5. filters even numbers');\r\nconsole.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));\r\nconsole.groupEnd();\r\nconsole.group('6. counts positive numbers');\r\nconsole.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));\r\nconsole.groupEnd();\r\nconsole.group('7. looks for numbers coud be divided by 5');\r\nconsole.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 56, 3, 2));\r\nconsole.groupEnd();\r\nconsole.group('8. bad words replacer');\r\nconsole.log(replaceBadWords(\"Are you fucking kidding? It's bullshit! fuckfuckshit\"));\r\nconsole.groupEnd(8);\r\nconsole.group('9. divide string by syllables');\r\nconsole.log(divideByThree('CoMm AnDe R'));\r\nconsole.groupEnd();\r\n\n\n//# sourceURL=webpack:///./src/hw5/index.js?");

/***/ })

/******/ });