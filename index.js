// Завдання 7: Знижка на покупку
const purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
let discount = 0;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 3;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 5;
} else if (purchaseAmount >= 500) {
    discount = 7;
}

const finalAmount = purchaseAmount - (purchaseAmount * discount / 100);
console.log(`Сума до сплати зі знижкою: ${finalAmount.toFixed(2)}`);

// Завдання 8: Вікторина
let score = 0;

const answer1 = prompt("Столиця Франції? a) Лондон, b) Париж, c) Берлін");
if (answer1 === "b") {
    score += 2;
}

const answer2 = prompt("2 + 2 = ? a) 3, b) 4, c) 5");
if (answer2 === "b") {
    score += 2;
}

const answer3 = prompt("Столиця Німеччини? a) Лондон, b) Париж, c) Берлін");
if (answer3 === "c") {
    score += 2;
}

console.log(`Ви набрали ${score} балів.`);

// Завдання 9: Пригоди в Кодовці
let hungerLevel = 10;
let wallet = 100;
let pizzaAvailable = null;
let mood = "😐";

if (hungerLevel !== 0) {
    console.log("🍕 Я дуже хочу піцу! Голодування — це не про мене!");
} else {
    console.log("👌 Я ситий і готовий до кодування!");
}

let availablePizza = pizzaAvailable ?? "На жаль, сьогодні без піци... 😢";
console.log(`🔍 Результат пошуку піци: ${availablePizza}`);

let buyPizza = wallet >= 50 && hungerLevel > 5;
if (buyPizza) {
    console.log("💸 Трата виправдана, піца того варта!");
    wallet -= 50;
    hungerLevel -= 7;
    mood = "😋";
} else {
    console.log("🤑 Ні-ні, гроші краще зберегти!");
}

let snackPrice = wallet < 50 || "Закуска не по кишені...";
console.log(`🥪 Альтернатива піці: ${wallet >= 50 ? 'Взяв дешеву закуску' : snackPrice}`);

let energyLevel = 8;
energyLevel -= 5;
console.log(`🚶‍♂️ Енергія після пошуків: ${energyLevel}`);
if (energyLevel > 3) {
    console.log("💪 Йду гуляти! Енергії вистачить!");
    energyLevel += 3;
} else {
    console.log("😴 Лежу вдома, сил немає...");
}

let daySummary = mood === "😋" || "День був звичайним";
let finalMood = daySummary ?? "Взагалі все було сумно...";
console.log(`📅 Підсумок дня: ${finalMood}`);

if (pizzaAvailable) {
    hungerLevel *= 0.5;
    console.log(`🍕 Голод тепер на рівні: ${hungerLevel}`);
} else {
    console.log("❌ Піцу так і не знайшов...");
}

console.log("🌙 Лягаю спати. Мій гаманець: " + wallet + ", настрій: " + mood);
