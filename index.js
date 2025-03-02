//1
const detectiveStoryCharacters = [
    { name: "Alice", age: 27, profession: "Investigator", mysterySolved: true },
    { name: "Bob", age: 32, profession: "Analyst", mysterySolved: false },
    { name: "Charlie", age: 29, profession: "Forensic Expert", mysterySolved: true }
];

function showCharacterDetails(characters) {
    characters.forEach(character => {
        console.log(`Character Name: ${character.name}, Age: ${character.age}`);
    });
}

showCharacterDetails(detectiveStoryCharacters);

delete detectiveStoryCharacters[1].mysterySolved;
console.log('mysterySolved' in detectiveStoryCharacters[1]); 

function hasProperty(character, propertyName) {
    return character.hasOwnProperty(propertyName);
}

console.log(hasProperty(detectiveStoryCharacters[2], 'age')); 

const additionalCharacter = Object.create(detectiveStoryCharacters[0]);
additionalCharacter.name = "Diana";
additionalCharacter.age = 31;
console.log(additionalCharacter);

function listAllProperties(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`Property: ${prop}, Value: ${obj[prop]}`);
        }
    }
}

listAllProperties(detectiveStoryCharacters[2]);

const teamMembers = ["Alice", "Bob", "Charlie", "Diana"];

function showNames(arr) {
    console.log(`Second member: ${arr[1]}`);
    console.log(`Fourth member: ${arr[3]}`);
}

showNames(teamMembers);

function displayTeamMembers(arr) {
    arr.forEach(member => {
        console.log(`Character ${member} is part of the investigation team.`);
    });
}

displayTeamMembers(teamMembers);

const investigator = {
    name: "Alice",
    showName: function() {
        console.log(`Investigator's Name: ${this.name}`);
    }
};

investigator.showName();

const baseInvestigator = {
    name: "Alice",
    age: 27
};

const specializedInvestigator = Object.create(baseInvestigator);
specializedInvestigator.role = "Lead Investigator";

console.log(`Name: ${specializedInvestigator.name}, Age: ${specializedInvestigator.age}, Role: ${specializedInvestigator.role}`);
