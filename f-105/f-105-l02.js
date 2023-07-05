let arr = new Array();
let arr1 = [];
//for...of... arr
let vegetables = ['onion', 'paprica', 'tomato', 'cucumber'];
for (let veg of vegetables) {
    console.log(veg);
}
vegetables[0];
//mix arr
let mixData = [9, {name: 'Tom'}, false, 'love', function() {alert('Hi')}];
alert(mixData[1].name);
//multidimensional arr
let multidimensionalArr = [ [1,1], [2,2], [3,3]];
console.log(multidimensionalArr[1][0]);
// array methods:
//filter
const numbers = [30, 20, 1, 4, 50, 66, 105, 5, 6, 2, 4, 6, 22, 57];
const result = numbers.filter(number => number > 30);
console.log(result);

const num = [12,5,8,130,44];
num.filter(n=>n>10);
