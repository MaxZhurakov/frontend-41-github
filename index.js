const clues = [
    { location: "Крабсбургер", clue: "Можливо штанці десь на кухні" },
    { location: "Дім Сквідварда", clue: "Пахне штанцями, але це Патрік" },
    { location: "Пляж", clue: "Штанці могли занести хвилею" },
    { location: "Ресторан", clue: "Штанці не бачили" }
];

function viewAllClueKeys() {
    clues.forEach(clue => console.log(Object.keys(clue)));
}

function viewAllClueEntries() {
    clues.forEach(clue => console.log(Object.entries(clue)));
}

function getClueTexts() {
    return clues.map(clue => Object.values(clue)[1]);
}

function containsPants(clueText) {
    return clueText.toLowerCase().includes("штанці");
}

function countWordOccurrences(words) {
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

function replacePantsWithGoldenPants(clueText) {
    return clueText.replace(/штанці/gi, "золоті штанці");
}

function filterCluesWithPants() {
    return clues.filter(clue => containsPants(clue.clue));
}

function countCluesWithPants() {
    return filterCluesWithPants().length;
}

function combineCluesIntoStory() {
    return clues.map(clue => `${clue.location}: ${clue.clue}`).join(". ");
}

console.log("Всі ключі підказок:");
viewAllClueKeys();

console.log("\nВсі пари ключ-значення підказок:");
viewAllClueEntries();

console.log("\nТексти підказок:");
console.log(getClueTexts());

console.log("\nПідказки, де згадуються штанці:");
console.log(filterCluesWithPants());

console.log("\nКількість підказок, де згадуються штанці:");
console.log(countCluesWithPants());

console.log("\nІсторія пошуку штанців:");
console.log(combineCluesIntoStory());

console.log("\nПідказки з заміною 'штанці' на 'золоті штанці':");
const modifiedClues = clues.map(clue => ({
    ...clue,
    clue: replacePantsWithGoldenPants(clue.clue)
}));
console.log(modifiedClues);

console.log("\nКількість повторень слів у підказках:");
const allWords = getClueTexts().join(" ").split(/\W+/).filter(Boolean);
console.log(countWordOccurrences(allWords));
