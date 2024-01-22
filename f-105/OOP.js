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

// Getters (readeable) & setters (writeable)
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