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
}
let square1 = new Square(25);
console.log(square1.area)