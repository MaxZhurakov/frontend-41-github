//1
for (let step = 1; step <= 7; step++) {
    switch (step) {
        case 1:
            console.log("1: Візьміть яйця.");
            break;
        case 2:
            console.log("2: Розбийте їх у миску.");
            break;
        case 3:
            if (confirm("Чи хочете додати сіль?")) {
                console.log("3: Додайте сіль і перець.");
            } else {
                console.log("3: Пропускаємо додавання солі.");
                continue;
            }
            break;
        case 4:
            console.log("4: Добре збийте.");
            break;
        case 5:
            console.log("5: Нагрійте сковорідку.");
            if (confirm("Чи ви вже голодні?")) {
                console.log("Ну, тоді їж сирі яйця 😅");
                break;
            }
            break;
        case 6:
            console.log("6: Вилийте яйця на сковорідку.");
            break;
        case 7:
            console.log("7: Готуйте до готовності.");
            break;
    }
}
//2
function greetUser(name, age) {
    if (age < 18) {
        return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`;
    } else if (age === 0) {
        return `Ого, ${name}! Ти мабуть не існуєш!`;
    } else if (age >= 18 && age <= 30) {
        return `Привіт, ${name}! Час вивчати JS і будувати кар'єру!`;
    } else {
        return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`;
    }
}

console.log(greetUser("Аліса", 16));
console.log(greetUser("Боб", 0));
console.log(greetUser("Карл", 25));
console.log(greetUser("Дейв", 35));
//3
function greetUser(name, age) {
    if (age < 18) {
        return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`;
    } else if (age === 0) {
        return `Ого, ${name}! Ти мабуть не існуєш!`;
    } else if (age >= 18 && age <= 30) {
        return `Привіт, ${name}! Час вивчати JS і будувати кар'єру!`;
    } else {
        return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`;
    }
}

console.log(greetUser("Аліса", 16));
console.log(greetUser("Боб", 0));
console.log(greetUser("Карл", 25));
console.log(greetUser("Дейв", 35));
