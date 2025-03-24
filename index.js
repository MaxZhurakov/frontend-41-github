// 1
const Button = {
    width: 100,
    height: 50,
    text: "Click me",
    showInfo: function() {
        console.log(`Button: ${this.text}, Width: ${this.width}, Height: ${this.height}`);
    }
};

const BootstrapButton = Object.create(Button);
BootstrapButton.color = "blue";
BootstrapButton.showInfo = function() {
    Button.showInfo.call(this);
    console.log(`Color: ${this.color}`);
};

console.log(Object.getPrototypeOf(BootstrapButton) === Button); // true

BootstrapButton.showInfo();
// 2
const Shape = {
    getName: function() {
        return "Shape";
    },
    getInfo: function() {
        console.log("Information about the shape.");
    },
    getArea: function() {
        return null;
    },
    getPerimeter: function() {
        return null;
    }
};

const Square = Object.create(Shape);
Square.sideLength = 5;
Square.getName = function() {
    return "Square";
};
Square.getArea = function() {
    return this.sideLength * this.sideLength;
};
Square.getPerimeter = function() {
    return 4 * this.sideLength;
};

const Rectangle = Object.create(Shape);
Rectangle.width = 4;
Rectangle.height = 6;
Rectangle.getName = function() {
    return "Rectangle";
};
Rectangle.getArea = function() {
    return this.width * this.height;
};
Rectangle.getPerimeter = function() {
    return 2 * (this.width + this.height);
};

const Triangle = Object.create(Shape);
Triangle.side1 = 3;
Triangle.side2 = 4;
Triangle.side3 = 5;
Triangle.getName = function() {
    return "Triangle";
};
Triangle.getArea = function() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
};
Triangle.getPerimeter = function() {
    return this.side1 + this.side2 + this.side3;
};

console.log(Object.getPrototypeOf(Square) === Shape); 
console.log(Object.getPrototypeOf(Rectangle) === Shape); 
console.log(Object.getPrototypeOf(Triangle) === Shape); 

console.log(Square.getName(), Square.getArea(), Square.getPerimeter());
console.log(Rectangle.getName(), Rectangle.getArea(), Rectangle.getPerimeter());
console.log(Triangle.getName(), Triangle.getArea(), Triangle.getPerimeter());

// 3
const ExtendedArray = Object.create(Array.prototype);

ExtendedArray.getString = function(separator = ",") {
    return this.join(separator);
};

ExtendedArray.getHtml = function(tagName = "div") {
    if (tagName === "li") {
        return `<ul><li>${this.join(`</li><li>`)}</li></ul>`;
    }
    return this.map(item => `<${tagName}>${item}</${tagName}>`).join("");
};

const myArray = Object.create(ExtendedArray);
Object.assign(myArray, ["item1", "item2", "item3"]);

console.log(Object.getPrototypeOf(myArray) === ExtendedArray); 

console.log(myArray.getString(" - "));
console.log(myArray.getHtml("li"));
console.log(myArray.getHtml("span"));
