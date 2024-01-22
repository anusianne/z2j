//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const anotherCircle = new Circle(3);
//class with get method behaves like a property
class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }
    get area() {
        return this.width * this.height;
    }
    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}
let square1 = new Square(4);
square1.area = 25;
console.log(square1.width)

// Getters (readable) & setters (writeable)
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number")
        }
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get area() {
        return this._width * this._height;
    }
}
const rect = new Rectangle(3, 4);
console.log(rect.width);
console.log(rect.height)
console.log(rect.area)
// ex. 2 with getter & setter
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string.")
        }
    }
    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string.")
        }
    }
    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._newAge = newAge;
        }
        else {
            console.error("Age must be a non-empty number.")
        }
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    get age() {
        return this._newAge;
    }
}
const person = new Person("Spongebob", "Square", 99);
console.log(person.firstName, person.lastName, person.age)
console.log(person.fullName);