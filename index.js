var userName = "John Doe";
let userEmail = "john.doe@example.com";
const userAge = 30;

console.log("User Name:", userName);
console.log("User Email:", userEmail);
console.log("User Age:", userAge);

userName = "Jane Doe";
userEmail = "jane.doe@example.com";

console.log("Updated User Name:", userName);
console.log("Updated User Email:", userEmail);

console.warn("Cannot change the value of a const variable.");

var globVariable = "var Видима глобально";
console.log(globVariable);

{
    globVariable = "var Перезапис глобальної змінної";
    console.log(globVariable);

    var globVariable = "var Перевизначення глобально і в блоці";
    console.log(globVariable);
}

console.log(globVariable);

let blockScopedVariable = "Видима глобально";
console.log(blockScopedVariable);

{
    let blockScopedVariable = "Видима тільки в цьому блоці";
    console.log(blockScopedVariable);
}

console.log(blockScopedVariable);

blockScopedVariable = "Перезапис глобальної змінної";
console.log(blockScopedVariable);

const constVariable = "Видима глобально";
console.log(constVariable);

{
    let constVariable = "Видима тільки в цьому блоці";
    console.log(constVariable);
}

console.log(constVariable);

console.error("Cannot reassign a value to a const variable.");
