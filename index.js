//1
let products = ["хліб", "молоко", "яблука", "шоколад", "банани"];
let index = 0;

while (index < products.length) {
    let product = products[index];
    console.log(`Додаємо ${product} у кошик...`);

    if (product === "шоколад") {
        console.log("Солодке життя забезпечене!");
    }

    index++;
}

console.log("Всі продукти у кошику! Тепер можна йти на касу.");

//2
function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        console.log("Це фабрика для реальних чисел! Давай щось нормальне 😏");
        return;
    }

    console.log(`Таблиця множення для числа ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplyNumbers(5);
multiplyNumbers(101);
multiplyNumbers(-3);
