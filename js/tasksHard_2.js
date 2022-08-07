'use strict';

const income2 = +prompt('Введите полученный заработок');

let tax = 0;

if ((income2 > 0) && (income2 <= 15000)) {
  tax = tax + (income2 * 13 / 100);
} else {
  if ((income2 > 15000) && (income2 <= 50000)) {
    tax = tax + (15000 * 13 / 100);
    const difference = income2 - 15000;
    tax = tax + (difference * 20 / 100);
  } else {
    if (income2 > 50000) {
      tax = tax + (15000 * 13 / 100);
      tax = tax + ((50000 - 15000) * 20 / 100);
      const difference2 = income2 - 50000;
      tax = tax + (difference2 * 30 / 100);
    }
    else {
      console.log('Вы ввели некорректные данные.')
    }
  }
}

console.log(`Налог равен: ${tax}`);

