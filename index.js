alert("Ласка, введіть своє ім'я.");

const userName = prompt("Введіть ваше ім'я:");
console.log("Введене ім'я:", userName);

const isConfirmed = confirm("Ви впевнені, що хочете продовжити?");
console.log("Підтвердження:", isConfirmed);

const book = {
    title: "1984",
    author: "Джордж Оруелл",
    year: 1949,
    genre: "Дистопія"
};

console.log("Назва книги:", book.title);
console.log("Автор:", book.author);
console.log("Рік видання:", book.year);
console.log("Жанр:", book.genre);

const colors = ["червоний", "синій", "зелений", "жовтий"];

console.log("Перший колір:", colors[0]);
console.log("Останній колір:", colors[colors.length - 1]);
