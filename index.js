<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фабрика чарівних зіллів</title>
</head>
<body>
    <script>
        // Крок 1: Початкові дані
        let potions = [
            { name: "Зілля сили", effect: "Збільшує силу", price: 50, quantity: 10 },
            { name: "Зілля невидимості", effect: "Робить невидимим", price: 80, quantity: 5 },
            { name: "Зілля швидкості", effect: "Збільшує швидкість", price: 60, quantity: 8 },
            { name: "Зілля здоров'я", effect: "Відновлює здоров'я", price: 60, quantity: 8 },
            { name: "Зілля мани", effect: "Відновлює ману", price: 70, quantity: 7 }
        ];
        potions.splice(1, 1); 

        potions.unshift({ name: "Зілля розуму", effect: "Збільшує інтелект", price: 90, quantity: 4 });

        let extraPotions = [
            { name: "Зілля удачі", effect: "Приносить удачу", price: 120, quantity: 6 },
            { name: "Зілля відваги", effect: "Додає хоробрість", price: 75, quantity: 7 }
        ];
        potions = potions.concat(extraPotions);
        potions.forEach(potion => {
            if (potion.name === "Зілля здоров'я") {
                potion.quantity -= 2;
            }
        });
        let potionDescriptions = potions.map(potion =>
            `${potion.name}: ${potion.effect} (${potion.price} золотих), в наявності: ${potion.quantity} шт.`
        );
        let potionList = potions.map(potion => potion.name).join(", ");

        potions.sort((a, b) => a.price - b.price);

        let hasManaPotion = potions.some(potion => potion.name === "Зілля мани");

        let expensivePotions = potions.filter(potion => potion.price > 60);

        let topPotions = potions.filter(potion => potion.price > 70).slice(0, 3);

        console.log("Опис зіль:", potionDescriptions);
        console.log("Список зіль:", potionList);
        console.log("Чи є 'Зілля мани'?", hasManaPotion);
        console.log("Зілля, що коштують понад 60 золотих:", expensivePotions);
        console.log("Найкращі зілля:", topPotions);
    </script>
</body>
</html>
