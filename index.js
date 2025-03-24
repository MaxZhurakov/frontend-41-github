// 1
const Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};
const ElectricCar = Object.create(Car);
ElectricCar.batteryCapacity = "75 kWh";
ElectricCar.getInfo = function() {
    return `${Car.getInfo.call(this)}, Battery: ${this.batteryCapacity}`;
};
console.log(Object.getPrototypeOf(ElectricCar) === Car); 
console.log(ElectricCar.getInfo());
// 2
const Book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};
const Ebook = Object.create(Book);
Ebook.fileSize = "2 MB";
Ebook.getSummary = function() {
    return `${Book.getSummary.call(this)}, File Size: ${this.fileSize}`;
};
const library = [
    Object.create(Book),
    Object.create(Ebook)
];
library[0].title = "To Kill a Mockingbird";
library[0].author = "Harper Lee";
library[0].year = 1960;
library[1].title = "Brave New World";
library[1].author = "Aldous Huxley";
library[1].year = 1932;
library[1].fileSize = "1.5 MB";
library.forEach(book => console.log(book.getSummary()));

// 3
const BankAccount = {
    owner: "John Doe",
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds.");
        }
    }
};

const SavingsAccount = Object.create(BankAccount);
SavingsAccount.interestRate = 0.02;
SavingsAccount.addInterest = function() {
    this.balance += this.balance * this.interestRate;
};

console.log(Object.getPrototypeOf(SavingsAccount) === BankAccount); // true

SavingsAccount.deposit(500);
SavingsAccount.addInterest();
console.log(SavingsAccount.balance); 

SavingsAccount.withdraw(200);
console.log(SavingsAccount.balance); 

