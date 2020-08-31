/* 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. */
const getMaxDigit = (number = prompt('Введiть значення, у якому треба знайти найбiльшу цифру')) => {
  number = number.toString();
  let currentMax = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > currentMax) currentMax = number[i];
  }
  return currentMax;
};

/* 2. Створити функцію, яка визначає ступінь числа. */
const degreeCounter = (
  number = prompt('Значення, яке треба множити'),
  degree = prompt('Степiнь'),
) => {
  if (degree == 0) return 1;
  let answer = number;
  for (let i = 1; i < degree; i++) {
    answer *= number;
  }
  return answer;
};

/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */
const namePrettier = (name = prompt("Введiть ваше iм'я")) => {
  newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return newName;
};

/* 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */
const salaryCount = (sal = prompt('Розрахункова ЗП')) => {
  const incomeTax = 18;
  const militaryTax = 1.5;
  const incomeFee = sal * (incomeTax / 100);
  const militaryFee = sal * (militaryTax / 100);
  return (newSal = sal - (incomeFee + militaryFee));
};

/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */
const getRandomNumber = (
  lower = +prompt('Шукаємо у промiжку з:'),
  higher = +prompt('та до якого значення:'),
) => {
  const temp = Math.random() * (higher - lower) + lower;
  return Math.ceil(temp);
};

/* 6. Функція, яка рахує скільки разів певна буква повторюється в слові. */
const countLetter = (letter = prompt('Шукати букву:'), word = prompt('У якому рядку?')) => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) counter++;
  }
  return counter;
};

/*7. Функція, яка конвертує долари в гривні та навпаки*/
const willGet = (function () {
  let sum = null;
  return {
    getSum: function () {
      return this.sum;
    },
    setSum: function (value) {
      this.sum = value;
    },
  };
})();

const usdExchange = (function () {
  let usd = null;
  return {
    setUSD: function (value) {
      this.usd = value;
    },
  };
})();

const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

let sendRequest = (method, url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

const convertCurrency = async (
  ownedMoney = prompt('How much do you have? I need $xxx or xxxUAH format'),
) => {
  await sendRequest('GET', requestURL).then(function (data) {
    usdExchange.setUSD(data[0]);
  });
  let tempCurr = null;
  if (ownedMoney[0] === '$') {
    let usd = ownedMoney.slice(1);
    tempCurr = (usd * usdExchange.usd.buy).toFixed(2);
    willGet.setSum(tempCurr + ' hryvnas');
    console.log(`7. For ${ownedMoney} dollars you can get ${tempCurr} hryvnas`);
  } else if (ownedMoney.slice(-3) === 'UAH') {
    let uah = ownedMoney.slice(0, -3);
    tempCurr = (uah / usdExchange.usd.sale).toFixed(2);
    willGet.setSum('$' + tempCurr);
    console.log(`7. For ${ownedMoney} hryvnas you can get ${tempCurr} dollars`);
  } else {
    console.log(`Unknown currency`);
  }
};

/* 8. Функція генерації випадкового паролю Довжина встановлюється користувачем або по замовчуванню = 8 символам. */
const createPassword = (
  symbolNumber = prompt('How many symbols do you want to have in your password?'),
) => {
  if (!symbolNumber) symbolNumber = 8;
  let pass = [];
  for (i = 0; i < symbolNumber; i++) {
    pass.push(Math.ceil(Math.random() * 9));
  }
  return pass.join('');
};

/* 9. Функція, яка видаляє небхiднi букви з речення. */
const deleteLetters = (
  letter = prompt('Яку букву небхiдно видалити:'),
  word = prompt('У якому рядку?'),
) => {
  let result = word.toLowerCase().split('');
  for (let i = 0; i < result.length; i++) {
    if (result[i] === letter.toLowerCase()) result.splice(i, 1);
  }
  result = result.join('');
  return result;
};

/* 10. Функція, яка перевіряє, чи є слово паліндромом. */
const isPalyndrom = (str = prompt('Яку фразу треба перевiрити?')) => {
  let spacelesString = deleteLetters(' ', str);
  let reversedString = spacelesString.split('').reverse().join('');
  const isP = spacelesString === reversedString;
  return isP;
};

/*11. Функція, яка видаляє з речення букви, які зустрічаються більше 1 разу.*/
const deleteDuplicateLetter = (string = prompt('У якому рядку необхiдно видалити повторення?')) => {
  let newString = string;
  let needToDelete = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i != j) {
        needToDelete.push(string[i]);
      }
    }
  }
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < needToDelete.length; j++) {
      if (needToDelete[j] === newString[i]) {
        newString = deleteLetters(needToDelete[j], newString);
      }
    }
  }
  return newString;
};

/*---------logging results to console---------*/

const varsForTesting = {
  maxDigit: 567321,
  pow: {
    number: 2,
    power: 5,
  },
  name: 'вЛАД',
  salary: 10000,
  random: {
    min: 2,
    max: 5,
  },
  counter: {
    letter: 'а',
    word: 'Асталавiста',
  },
  currency: '$137',
  deleteing: {
    letter: 'a',
    word: 'ababagalamaga',
  },
  palyndrom: 'Аргентина манит негра',
  duplicates: 'aabcadefb',
};

const f = [
  `Max digit out of ${varsForTesting.maxDigit} is ${getMaxDigit(varsForTesting.maxDigit)}`,
  `${varsForTesting.pow.number} в ступенi ${varsForTesting.pow.power} дорiнює ${degreeCounter(
    varsForTesting.pow.number,
    varsForTesting.pow.power,
  )}`,
  `Propper way to write ${varsForTesting.name} is ${namePrettier(varsForTesting.name)}`,
  `Маючи зп ${varsForTesting.salary} ти отримаєш тiльки ${salaryCount(varsForTesting.salary)}`,
  `Довiльне значення вiд ${varsForTesting.random.min} до ${
    varsForTesting.random.max
  } може бути, наприклад ${getRandomNumber(varsForTesting.random.min, varsForTesting.random.max)}`,
  `Буква ${varsForTesting.counter.letter} зустрiчається у рядку ${
    varsForTesting.counter.word
  } ${countLetter(varsForTesting.counter.letter, varsForTesting.counter.word)} рази`,
  `Your new password is ${createPassword()}`,
  `${varsForTesting.deleteing.word} without all the ${
    varsForTesting.deleteing.letter
  }'s is just a ${deleteLetters(varsForTesting.deleteing.letter, varsForTesting.deleteing.word)}`,
  `${varsForTesting.palyndrom} - це${isPalyndrom(varsForTesting.palyndrom) ? '' : ' не'} палiндром`,
  `${varsForTesting.duplicates} without duplicates is ${deleteDuplicateLetter(
    varsForTesting.duplicates,
  )}`,
];

const loggingResults = () => {
  for (let i = 0; i < f.length; i++) {
    console.log(`${i + 1}. ${f[i]}`);
  }
  convertCurrency(varsForTesting.currency);
};
loggingResults();
