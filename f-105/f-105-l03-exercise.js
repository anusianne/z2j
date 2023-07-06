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

//1
const numbers = [30, 20, 1, 4, 50, 66, 105, 5, 6, 2, 4, 6, 22, 57];
const result = numbers.filter(number => number > 30);
console.log(result);
//2
const num = [12,5,8,130,44];
num.filter(n=>n>10);
//3 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumeros = numeros.filter(numero => numero%2===0);
console.log(evenNumeros)
//4 
const products = [
    { name: 'Product 1', price: 30 },
    { name: 'Product 2', price: 40 },
    { name: 'Product 3', price: 25 },
    { name: 'Product 4', price: 45 },
    { name: 'Product 5', price: 35 },
  ];
  const lessThan40 = products.filter(function(product) {
    return product.price < 40;
  })
  console.log(lessThan40);
  //5
  function fiveAndGreaterOnly(arr) {
    const fiveAndGreaterOnly = arr.filter(i => i>= 5);
    return fiveAndGreaterOnly;
  }
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); 
  //6 
  function evenOnly(arr) {
    return arr.filter(i=> i%2===0);
  }
  console.log(evenOnly([3,6,8,5,2]));
  //7
  function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(word => word.length <= 5);
  }
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
  //8
  function peopleWhoBelongToTheIlluminati(arr){
return arr.filter(person => person.member = true)
  }
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  //9
  function ofAge(arr){
   return arr.filter(function(person) {
    return person.age >=18;
   } )
  }
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
