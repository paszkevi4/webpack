export const getAverage = (...numbers) => {
  let sum = 0;
  numbers.map((el) => {
    sum += el;
  });
  return sum / numbers.length;
};
