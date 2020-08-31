const newFontGenerator = (size = 16) => {
  return {
    next(direction) {
      if (direction === 'up') {
        if (size >= 72) {
          return { value: size, done: false };
        }
        return { value: (size += 2), done: false };
      } else if (direction === 'down') {
        if (size <= 6) {
          return { value: size, done: false };
        }
        return { value: (size -= 2), done: false };
      } else {
        return { value: size, done: false };
      }
    },
  };
};
const fontGenerator = newFontGenerator(14);

let generatorValue = 0;

function* infiniteGenerator() {
  while (true) {
    generatorValue++;
    yield generatorValue;
  }
}

window.fontGenerator = fontGenerator;
window.infiniteGenerator = infiniteGenerator();

console.table([
  {
    fontGenerator: 'fontGenerator.next("up")',
    infiniteGenerator: 'infiniteGenerator.next().value',
  },
  { fontGenerator: 'fontGenerator.next("down")', infiniteGenerator: '' },
]);
