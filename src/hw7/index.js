import store from '../store';
import { getRandomNumber, namePrettier } from '../hw3/functions';
import { getMyTaxes, getMiddleTaxes, getTotalTaxes } from './functions';

const state = store.hw7;
const countries = Object.keys(state);
const mySalary = getRandomNumber(1500, 2000);

console.group('My taxes in different countries');
countries.map((country) =>
  console.log(
    `$ ${getMyTaxes.call(state[country], mySalary)} you would pay for taxes in ${namePrettier(
      country,
    )} if you had ${mySalary}-dollar salary.`,
  ),
);
console.groupEnd();

console.group('Middle countries across the countries');
countries.map((country) =>
  console.log(
    `$ ${getMiddleTaxes.call(
      state[country],
    )} taxes are paid by IT specialist in each ${namePrettier(country)} on average.`,
  ),
);
console.groupEnd();

console.group('Total taxes paid in different countries');
countries.map((country) =>
  console.log(
    `$ ${getTotalTaxes.call(state[country])} taxes are paid by IT specialists in ${namePrettier(
      country,
    )}.`,
  ),
);
console.groupEnd();

window.state = state;
