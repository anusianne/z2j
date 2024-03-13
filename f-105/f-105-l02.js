// let arr = new Array();
// let arr1 = [];
// //for...of... arr
// let vegetables = ['onion', 'paprica', 'tomato', 'cucumber'];
// for (let veg of vegetables) {
//     console.log(veg);
// }
// vegetables[0];
// //mix arr
// let mixData = [9, {name: 'Tom'}, false, 'love', function() {alert('Hi')}];
// alert(mixData[1].name);
// //multidimensional arr
// let multidimensionalArr = [ [1,1], [2,2], [3,3]];
// console.log(multidimensionalArr[1][0]);
// // array methods:
// //filter
// const numbers = [30, 20, 1, 4, 50, 66, 105, 5, 6, 2, 4, 6, 22, 57];
// const result = numbers.filter(number => number > 30);
// console.log(result);
//
// const num = [12,5,8,130,44];
// num.filter(n=>n>10);

//Write the code, one line for each action:
//  Create an empty object user. Add the property name with the value John. Add the property surname with the value Smith. Change the value of the name to Pete. Remove the property name from the object.
let user = new Obj();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum;
sum = salaries.John + salaries.Ann + salaries.Pete;
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};
function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}
multiplyNumeric(menu);
//constructor function
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
        console.log(`You drive the ${this.model}`);
    };
}
const car1 = new Car('Ford', 'Mustang', 2024, 'red');
const car2 = new Car('Chevrolet', 'Camaro', 2018, 'green');
const car3 = new Car('Dodge', 'Charger', 2016, 'silver');
car1.drive();
car2.drive();
car3.drive();

//User Constructor
function User(fName, lName, age, fMovie, fSport) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.movie = fMovie;
    this.sport = fSport;
}

//using User Conctructor

let user = new User('Anna', 'Beck', 55, 'Interstellar', 'Swimming');
console.log(user);

//let num = new Number();
//Finding the minimum value:
function min(arr) {
    return Math.min(...arr);
}
min([1, 2, 3, 4, 100]);

//Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.To judge the number n. If n is one of the above five constants, return one of these string:
function whatNumberIsIt(n) {
    if (n === Number.MAX_VALUE) {
        return 'Input number is Number.MAX_VALUE';
    } else if (n === Number.MIN_VALUE) {
        return 'Input number is Number.MIN_VALUE';
    } else if (isNaN(n)) {
        return 'Input number is Number.NaN';
    } else if (n === Number.NEGATIVE_INFINITY) {
        return 'Input number is Number.NEGATIVE_INFINITY';
    } else if (n === Number.POSITIVE_INFINITY) {
        return 'Input number is Number.POSITIVE_INFINITY';
    } else {
        return 'Input number is ' + n;
    }
}

//strings
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

//Write a program that takes a user's input and calculates the length of the input string using the length property.
function lengthInput(user) {
    return user.length;
}
lengthInput('Maxymilian');

//Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.
function charAtMethod(str, i) {
    return str.indexOf(i);
}
charAtMethod('Bejbe', 'j');

//Take a sentence with extra whitespace and use string methods to remove the extra spaces, leaving only single spaces between words.
function removeWhiteSpace(string) {
    return string.trim();
}
removeWhiteSpace('       Ole ole ole ole       ');
