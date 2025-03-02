//1
const pizzaShop = {
    takeOrder: function(pizzaName, callback) {
        console.log(`Піцайоло Марко прийняв замовлення на піцу: ${pizzaName}`);
        callback.call(this, pizzaName);
    }
};

function orderReady(pizzaName) {
    console.log(`Піца ${pizzaName} готова!`);
}

pizzaShop.takeOrder("Пепероні", orderReady);
//2
const theater = {
    actors: ["Олег", "Марина", "Вася"],
    assignRole: function(actorName, callback) {
        const role = "Гамлет";
        callback.call(this, actorName, role);
    }
};

function assignRoleCallback(actorName, role) {
    console.log(`Актор ${actorName} грає роль: ${role}`);
}

theater.assignRole("Олег", assignRoleCallback);
//3
const taxiDriver = {
    name: "Іван",
    pickUpPassenger: function(passengerName, callback) {
        callback.call(this, passengerName);
    }
};

function pickUpCallback(passengerName) {
    console.log(`Таксист ${this.name} підбирає пасажира ${passengerName}`);
    console.log("Поїздка почалась!");
}

taxiDriver.pickUpPassenger("Марія", pickUpCallback);
//4
const concert = {
    startShow: function(callback) {
        const song = "Літній вечір";
        callback.call(this, song);
    }
};

function startShowCallback(song) {
    console.log(`Співак Олександр виконує пісню: "${song}"`);
}

concert.startShow(startShowCallback);
