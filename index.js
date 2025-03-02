//1
let age = parseInt(prompt("Введіть ваш вік:"));

if (age >= 0 && age <= 12) {
    console.log("Ви дитина");
} else if (age > 12 && age <= 18) {
    console.log("Ви підліток");
} else if (age > 18 && age <= 60) {
    console.log("Ви дорослий");
} else if (age > 60) {
    console.log("Ви пенсіонер");
} else {
    console.log("Невірний вік");
}

//2
let digit = parseInt(prompt("Введіть число від 0 до 9:"));
let symbol;

switch (digit) {
    case 0:
        symbol = ")";
        break;
    case 1:
        symbol = "!";
        break;
    case 2:
        symbol = "@";
        break;
    case 3:
        symbol = "#";
        break;
    case 4:
        symbol = "$";
        break;
    case 5:
        symbol = "%";
        break;
    case 6:
        symbol = "^";
        break;
    case 7:
        symbol = "&";
        break;
    case 8:
        symbol = "*";
        break;
    case 9:
        symbol = "(";
        break;
    default:
        symbol = "Невірне число";
}

console.log(symbol);

//3
let num = prompt("Введіть тризначне число:");

if (num.length === 3) {
    let digit1 = num[0];
    let digit2 = num[1];
    let digit3 = num[2];

    if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
        console.log("Число містить однакові цифри");
    } else {
        console.log("Число не містить однакових цифр");
    }
} else {
    console.log("Невірне число");
}

//4
let year = parseInt(prompt("Введіть рік:"));

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Рік високосний");
} else {
    console.log("Рік не високосний");
}

//5
let palindromeNumber = prompt("Введіть п'ятирозрядне число:");

if (palindromeNumber.length === 5) {
    if (palindromeNumber[0] === palindromeNumber[4] && palindromeNumber[1] === palindromeNumber[3]) {
        console.log("Число є паліндромом");
    } else {
        console.log("Число не є паліндромом");
    }
} else {
    console.log("Невірне число");
}
