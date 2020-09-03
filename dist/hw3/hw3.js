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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hw3/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commonFuncs/functions.js":
/*!**************************************!*\
  !*** ./src/commonFuncs/functions.js ***!
  \**************************************/
/*! exports provided: namePrettier, getRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"namePrettier\", function() { return namePrettier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumber\", function() { return getRandomNumber; });\n/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */\r\nconst namePrettier = (name = prompt(\"Введiть ваше iм'я\")) => {\r\n    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();\r\n    return newName;\r\n}\r\n\r\n/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */\r\nconst getRandomNumber = (\r\n    lower = +prompt('Шукаємо у промiжку з:'),\r\n    higher = +prompt('та до якого значення:'),\r\n) => {\r\n    const temp = Math.random() * (higher - lower) + lower;\r\n    return Math.ceil(temp);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/commonFuncs/functions.js?");

/***/ }),

/***/ "./src/hw3/index.js":
/*!**************************!*\
  !*** ./src/hw3/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _commonFuncs_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFuncs/functions */ \"./src/commonFuncs/functions.js\");\n\r\n\r\n\r\n/* 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. */\r\nconst getMaxDigit = (number = prompt('Введiть значення, у якому треба знайти найбiльшу цифру')) => {\r\n  number = number.toString();\r\n  let currentMax = number[0];\r\n  for (let i = 1; i < number.length; i++) {\r\n    if (number[i] > currentMax) currentMax = number[i];\r\n  }\r\n  return currentMax;\r\n};\r\n\r\n/* 2. Створити функцію, яка визначає ступінь числа. */\r\nconst degreeCounter = (\r\n  number = prompt('Значення, яке треба множити'),\r\n  degree = prompt('Степiнь'),\r\n) => {\r\n  if (degree == 0) return 1;\r\n  let answer = number;\r\n  for (let i = 1; i < degree; i++) {\r\n    answer *= number;\r\n  }\r\n  return answer;\r\n}\r\n\r\n// /* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */\r\n// function namePrettier(name = prompt(\"Введiть ваше iм'я\")) {\r\n//   const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();\r\n//   return newName;\r\n// }\r\n\r\n// module.exports.namePrettier = namePrettier\r\n\r\n/* 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */\r\nconst salaryCount = (sal = prompt('Розрахункова ЗП')) => {\r\n  const incomeTax = 18;\r\n  const militaryTax = 1.5;\r\n  const incomeFee = sal * (incomeTax / 100);\r\n  const militaryFee = sal * (militaryTax / 100);\r\n  return sal - (incomeFee + militaryFee);\r\n}\r\n\r\n// /* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */\r\n// const getRandomNumber = (\r\n//   lower = +prompt('Шукаємо у промiжку з:'),\r\n//   higher = +prompt('та до якого значення:'),\r\n// ) => {\r\n//   const temp = Math.random() * (higher - lower) + lower;\r\n//   return Math.ceil(temp);\r\n// }\r\n\r\n// module.exports.getRandomNumber = getRandomNumber\r\n\r\n// export { namePrettier, getRandomNumber }\r\n\r\n/* 6. Функція, яка рахує скільки разів певна буква повторюється в слові. */\r\nconst countLetter = (letter = prompt('Шукати букву:'), word = prompt('У якому рядку?')) => {\r\n  let counter = 0;\r\n  for (let i = 0; i < word.length; i++) {\r\n    if (word[i].toLowerCase() === letter.toLowerCase()) counter++;\r\n  }\r\n  return counter;\r\n}\r\n\r\n/*7. Функція, яка конвертує долари в гривні та навпаки*/\r\nconst willGet = (function () {\r\n  let sum = null;\r\n  return {\r\n    getSum: function () {\r\n      return this.sum;\r\n    },\r\n    setSum: function (value) {\r\n      this.sum = value;\r\n    },\r\n  };\r\n})();\r\n\r\nconst usdExchange = (function () {\r\n  let usd = null;\r\n  return {\r\n    setUSD: function (value) {\r\n      this.usd = value;\r\n    },\r\n  };\r\n})();\r\n\r\nconst requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';\r\n\r\nlet sendRequest = (method, url) => {\r\n  return fetch(url).then((response) => {\r\n    return response.json();\r\n  });\r\n};\r\n\r\nconst convertCurrency = async (\r\n  ownedMoney = prompt('How much do you have? I need $xxx or xxxUAH format'),\r\n) => {\r\n  await sendRequest('GET', requestURL).then(function (data) {\r\n    usdExchange.setUSD(data[0]);\r\n  });\r\n  let tempCurr = null;\r\n  if (ownedMoney[0] === '$') {\r\n    let usd = ownedMoney.slice(1);\r\n    tempCurr = (usd * usdExchange.usd.buy).toFixed(2);\r\n    willGet.setSum(tempCurr + ' hryvnas');\r\n    console.log(`7. For ${ownedMoney} dollars you can get ${tempCurr} hryvnas`);\r\n  } else if (ownedMoney.slice(-3) === 'UAH') {\r\n    let uah = ownedMoney.slice(0, -3);\r\n    tempCurr = (uah / usdExchange.usd.sale).toFixed(2);\r\n    willGet.setSum('$' + tempCurr);\r\n    console.log(`7. For ${ownedMoney} hryvnas you can get ${tempCurr} dollars`);\r\n  } else {\r\n    console.log(`Unknown currency`);\r\n  }\r\n};\r\n\r\n/* 8. Функція генерації випадкового паролю Довжина встановлюється користувачем або по замовчуванню = 8 символам. */\r\nconst createPassword = (symbolNumber = 4) => {\r\n  if (!symbolNumber) symbolNumber = 8;\r\n  let pass = [];\r\n  for (let i = 0; i < symbolNumber; i++) {\r\n    pass.push(Math.ceil(Math.random() * 9));\r\n  }\r\n  return pass.join('');\r\n};\r\n\r\n/* 9. Функція, яка видаляє небхiднi букви з речення. */\r\nconst deleteLetters = (\r\n  letter = prompt('Яку букву небхiдно видалити:'),\r\n  word = prompt('У якому рядку?'),\r\n) => {\r\n  let result = word.toLowerCase().split('');\r\n  for (let i = 0; i < result.length; i++) {\r\n    if (result[i] === letter.toLowerCase()) result.splice(i, 1);\r\n  }\r\n  result = result.join('');\r\n  return result;\r\n};\r\n\r\n/* 10. Функція, яка перевіряє, чи є слово паліндромом. */\r\nconst isPalyndrom = (str = prompt('Яку фразу треба перевiрити?')) => {\r\n  let spacelesString = deleteLetters(' ', str);\r\n  let reversedString = spacelesString.split('').reverse().join('');\r\n  const isP = spacelesString === reversedString;\r\n  return isP;\r\n};\r\n\r\n/*11. Функція, яка видаляє з речення букви, які зустрічаються більше 1 разу.*/\r\nconst deleteDuplicateLetter = (string = prompt('У якому рядку необхiдно видалити повторення?')) => {\r\n  let newString = string;\r\n  let needToDelete = [];\r\n  for (let i = 0; i < string.length; i++) {\r\n    for (let j = 0; j < string.length; j++) {\r\n      if (string[i] === string[j] && i != j) {\r\n        needToDelete.push(string[i]);\r\n      }\r\n    }\r\n  }\r\n  for (let i = 0; i < string.length; i++) {\r\n    for (let j = 0; j < needToDelete.length; j++) {\r\n      if (needToDelete[j] === newString[i]) {\r\n        newString = deleteLetters(needToDelete[j], newString);\r\n      }\r\n    }\r\n  }\r\n  return newString;\r\n};\r\n\r\n/*---------logging results to console---------*/\r\n\r\nconst varsForTesting = {\r\n  maxDigit: 567321,\r\n  pow: {\r\n    number: 2,\r\n    power: 5,\r\n  },\r\n  name: 'вЛАД',\r\n  salary: 10000,\r\n  random: {\r\n    min: 2,\r\n    max: 5,\r\n  },\r\n  counter: {\r\n    letter: 'а',\r\n    word: 'Асталавiста',\r\n  },\r\n  currency: '$137',\r\n  deleteing: {\r\n    letter: 'a',\r\n    word: 'ababagalamaga',\r\n  },\r\n  palyndrom: 'Аргентина манит негра',\r\n  duplicates: 'aabcadefb',\r\n};\r\n\r\nconst f = [\r\n  `Max digit out of ${varsForTesting.maxDigit} is ${getMaxDigit(varsForTesting.maxDigit)}`,\r\n  `${varsForTesting.pow.number} в ступенi ${varsForTesting.pow.power} дорiнює ${degreeCounter(\r\n    varsForTesting.pow.number,\r\n    varsForTesting.pow.power,\r\n  )}`,\r\n  `Propper way to write ${varsForTesting.name} is ${Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_0__[\"namePrettier\"])(varsForTesting.name)}`,\r\n  `Маючи зп ${varsForTesting.salary} ти отримаєш тiльки ${salaryCount(varsForTesting.salary)}`,\r\n  `Довiльне значення вiд ${varsForTesting.random.min} до ${\r\n  varsForTesting.random.max\r\n  } може бути, наприклад ${Object(_commonFuncs_functions__WEBPACK_IMPORTED_MODULE_0__[\"getRandomNumber\"])(varsForTesting.random.min, varsForTesting.random.max)}`,\r\n  `Буква ${varsForTesting.counter.letter} зустрiчається у рядку ${\r\n  varsForTesting.counter.word\r\n  } ${countLetter(varsForTesting.counter.letter, varsForTesting.counter.word)} рази`,\r\n  `Your new password is ${createPassword()}`,\r\n  `${varsForTesting.deleteing.word} without all the ${\r\n  varsForTesting.deleteing.letter\r\n  }'s is just a ${deleteLetters(varsForTesting.deleteing.letter, varsForTesting.deleteing.word)}`,\r\n  `${varsForTesting.palyndrom} - це${isPalyndrom(varsForTesting.palyndrom) ? '' : ' не'} палiндром`,\r\n  `${varsForTesting.duplicates} without duplicates is ${deleteDuplicateLetter(\r\n    varsForTesting.duplicates,\r\n  )}`,\r\n];\r\n\r\nconst loggingResults = () => {\r\n  for (let i = 0; i < f.length; i++) {\r\n    console.log(`${i + 1}. ${f[i]}`);\r\n  }\r\n  convertCurrency(varsForTesting.currency);\r\n};\r\nloggingResults();\r\n\n\n//# sourceURL=webpack:///./src/hw3/index.js?");

/***/ })

/******/ });