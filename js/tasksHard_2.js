'use strict';

const income2 = +prompt('Введите полученный заработок');

if (income2 <= 15000) {
  const tax = income2 * 13 / 100;
  console.log(`Налог равен: ${tax}`);
} if ((income2 > 15000) && (income2 <= 50000)) {
    const tax20 = (income2 - 15000) * 20 / 100;
    console.log(`Налог равен: ${tax20}`);
} if (income2 > 50000) {
    const tax30 = (income2 - 50000) * 30 / 100;
    console.log(`Налог равен: ${tax30}`);
}


