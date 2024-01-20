//Classes
class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
product1.displayProduct();
product2.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $ ${total.toFixed(2)}`);

//Classes inheritance
class Animal{
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}
class Rabbit extends Animal {
    name = "rabbit";
}
class Fish extends Animal {
    name = "fish";
}
class Cat extends Animal {
    name = "kitty";
}
const rabbit = new Rabbit();
const fish = new Fish();
const cat = new Cat();

console.log(rabbit.alive);
rabbit.eat();
cat.sleep();
//Classes with FreeCodeCamp
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.width * this.height;
    }
    printDescription() {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
    }
}
let myRectangle1 = new Rectangle(5,2,"red");
let myRectangle2 = new Rectangle(6,3,"orange");
console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
myRectangle2.printDescription();
