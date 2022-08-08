'use strict';

const income2 = +prompt('Введите полученный заработок');

let tax = 0;

if ((income2 > 0) && (income2 <= 15000)) {
  tax = tax + (income2 * 0.13);
}

if ((income2 > 15000) && (income2 <= 50000)) {
    tax = tax + (15000 * 0.13);
    tax = tax + ((income2 - 15000) * 0.2);
}

if (income2 > 50000) {
    tax = tax + (15000 * 0.13);
    tax = tax + ((50000 - 15000) * 0.2);
    tax = tax + ((income2 - 50000) * 0.3);
}

console.log(`Налог равен: ${tax}`);

