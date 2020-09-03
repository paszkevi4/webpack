/* 3. Функція, яка форматує ім'я, роблячи першу букву великою. */
export const namePrettier = (name = prompt("Введiть ваше iм'я")) => {
    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
}

/* 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. */
export const getRandomNumber = (
    lower = +prompt('Шукаємо у промiжку з:'),
    higher = +prompt('та до якого значення:'),
) => {
    const temp = Math.random() * (higher - lower) + lower;
    return Math.ceil(temp);
}
