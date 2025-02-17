//Цикл у супермаркеті
const products = ["хліб", "молоко", "яблука", "шоколад", "банани"];
let i = 0;

while (i < products.length) {
    const product = products[i];
    console.log(`Додаємо ${product} у кошик...`);

    if (product === "шоколад") {
        console.log("Солодке життя забезпечене!");
    }

    i++;
}

console.log("Всі продукти у кошику! Тепер можна йти на касу.");

function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        console.log("Це фабрика для реальних чисел! Давай щось нормальне 😏");
        return;
    }
//Математична фабрика
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multiplyNumbers(5);
multiplyNumbers(101);
multiplyNumbers(-3);
