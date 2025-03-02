//1
let purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
let discount = 0;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
} else if (purchaseAmount >= 500) {
    discount = 0.07;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount);
console.log(`Сума до сплати зі знижкою: ${finalAmount.toFixed(2)}`);
//2
let score = 0;

let answer1 = prompt("Яке найбільше місто України?\n1. Київ\n2. Львів\n3. Одеса");
if (answer1 === "1") {
    score += 2;
}

let answer2 = prompt("Яка річка протікає через Київ?\n1. Дніпро\n2. Дунай\n3. Дністер");
if (answer2 === "1") {
    score += 2;
}

let answer3 = prompt("Яка гора є найвищою в Україні?\n1. Говерла\n2. Петрос\n3. Поп Іван");
if (answer3 === "1") {
    score += 2;
}

console.log(`Ви набрали ${score} балів`);
//3
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
console.log(`🥪 Альтернатива піці: ${wallet < 50 ? 'Взяв дешеву закуску' : snackPrice}`);

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
