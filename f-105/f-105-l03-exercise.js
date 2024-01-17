let arr = new Array();
let arr1 = [];
//for...of... arr
let vegetables = ["onion", "paprica", "tomato", "cucumber"];
for (let veg of vegetables) {
  console.log(veg);
}
vegetables[0];
//mix arr
let mixData = [
  9,
  { name: "Tom" },
  false,
  "love",
  function () {
    alert("Hi");
  },
];
alert(mixData[1].name);
//multidimensional arr
let multidimensionalArr = [
  [1, 1],
  [2, 2],
  [3, 3],
];
console.log(multidimensionalArr[1][0]);
// array methods:
//filter

//1
const numbers = [30, 20, 1, 4, 50, 66, 105, 5, 6, 2, 4, 6, 22, 57];
const result = numbers.filter((number) => number > 30);
console.log(result);
//2
const num = [12, 5, 8, 130, 44];
num.filter((n) => n > 10);
//3
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumeros = numeros.filter((numero) => numero % 2 === 0);
console.log(evenNumeros);
//4
const products = [
  { name: "Product 1", price: 30 },
  { name: "Product 2", price: 40 },
  { name: "Product 3", price: 25 },
  { name: "Product 4", price: 45 },
  { name: "Product 5", price: 35 },
];
const lessThan40 = products.filter(function (product) {
  return product.price < 40;
});
console.log(lessThan40);
//5
function fiveAndGreaterOnly(arr) {
  const fiveAndGreaterOnly = arr.filter((i) => i >= 5);
  return fiveAndGreaterOnly;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
//6
function evenOnly(arr) {
  return arr.filter((i) => i % 2 === 0);
}
console.log(evenOnly([3, 6, 8, 5, 2]));
//7
function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((word) => word.length <= 5);
}
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
);
//8
function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter((person) => (person.member = true));
}
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);
//9
function ofAge(arr) {
  return arr.filter(function (person) {
    return person.age >= 18;
  });
}
console.log(
  ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ])
);
//10
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
console.log(characters.filter((ch) => ch.mass > 100));
console.log(characters.filter((h) => h.height < 200));
console.log(characters.filter((male) => male.gender === "male"));
console.log(characters.filter((fem) => fem.gender === "female"));

//forEach()
let wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"];
wizards.forEach(console.log)

//2.forEach()

let wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]
// wizards.forEach((wizard) => {console.log(wizard.name)})
// for (let wizard of wizards) {
//   wizard.isAlive = true;
// }
// console.log(wizards)
//Array methods mixed
const items = [
  {name: 'Bike', price:100},
  {name: 'TV', price:200},
  {name: 'Album', price:10},
  {name: 'Book', price:5},
  {name: 'Phone', price:500},
  {name: 'Computer', price:1000},
  {name: 'Keyboard', price:25},
    ];
const filteredItems = items.filter((item) => { return item.price <= 100});
console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.name;
})
console.log(itemNames);

const foundItem = items.find((item) => {
  return item.name === 'Book';
});
console.log(foundItem);

items.forEach((item)=> {
  console.log(item.name);
});

const hasCheapItems = items.some((item) => {
  return item.price <=100;
});
console.log(hasCheapItems)

const hasExspensiveItems = items.every((item) => {
  return item.price>1000;
})
console.log(hasExspensiveItems)

const totalCost = items.reduce((currentTotal,item) => {
  return item.price + currentTotal;
},0)
console.log(totalCost)