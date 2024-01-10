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
user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name;
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.
let salaries= {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum;
sum = salaries.John + salaries.Ann + salaries.Pete;
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key]*=2;
        }
    }
    return obj;
}
multiplyNumeric(menu);


