export const getRandomNumber = (
  lower = +prompt('Шукаємо у промiжку з:'),
  higher = +prompt('та до якого значення:'),
) => {
  const temp = Math.random() * (higher - lower) + lower;
  return Math.ceil(temp);
};

export const namePrettier = (name = prompt("Введiть ваше iм'я")) => {
  let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return newName;
};
