// Завдання 1: Визначення вікової категорії
const age = parseInt(prompt("Введіть ваш вік:"));

if (age >= 0 && age <= 12) {
    console.log("Ви дитина.");
} else if (age <= 18) {
    console.log("Ви підліток.");
} else if (age <= 60) {
    console.log("Ви дорослий.");
} else {
    console.log("Ви пенсіонер.");
}

// Завдання 2: Виведення спеціального символу
const number = parseInt(prompt("Введіть число від 0 до 9:"));

switch (number) {
    case 1: console.log("!"); break;
    case 2: console.log("@"); break;
    case 3: console.log("#"); break;
    case 4: console.log("$"); break;
    case 5: console.log("%"); break;
    case 6: console.log("^"); break;
    case 7: console.log("&"); break;
    case 8: console.log("*"); break;
    case 9: console.log("("); break;
    case 0: console.log(")"); break;
    default: console.log("Невідоме число.");
}

// Завдання 3: Перевірка на однакові цифри
const num = prompt("Введіть тризначне число:");

if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) {
    console.log("Число містить однакові цифри.");
} else {
    console.log("Число не містить однакових цифр.");
}

// Завдання 4: Перевірка високосного року
const year = parseInt(prompt("Введіть рік:"));

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Рік високосний.");
} else {
    console.log("Рік не високосний.");
}

// Завдання 5: Перевірка на паліндром
const numStr = prompt("Введіть п'ятирозрядне число:");

const isPalindrome = (numStr === numStr.split('').reverse().join('')) ? "Число є паліндромом." : "Число не є паліндромом.";
console.log(isPalindrome);
