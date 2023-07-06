//1
const arr = [4, 5, 6, 7, 8];
const newArr = arr.map(Math.sqrt);
console.log(newArr);
//2
const num = [55, 44, 33, 22];
const newNum = num.map(myFunction);
function myFunction(num) {
  return num * 10;
}
console.log(newNum);
//3
let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];
let usersFullName = users.map(function (user) {
  return `${user.firstName} ${user.lastName}`;
});
console.log(usersFullName);
//4
function doubleNumbers(arr) {
  return arr.map((el) => el * 2);
}
console.log(doubleNumbers([2, 5, 100]));
//5
function stringItUp(arr) {
  return arr.map((element) => element.toString());
}
console.log(stringItUp([2, 5, 100]));
//6
function capitalizeNames(arr) {
  return arr.map(
    (name) => name[0].toUpperCase() + name.substring(1).toLowerCase()
  );
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//7
function namesOnly(arr) {
  return arr.map((userData) => userData.name);
}
console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
//8
function makeStrings(arr) {
  return arr.map((user) => {
    if (user.age >= 18) {
      console.log(`${user.name}` + " can go to the Matrix.");
    } else {
      console.log(`${user.name}` + " can't go to the Matrix.");
    }
  });
}
console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
//9
function readyToPutInTheDOM(arr) {
  return arr.map((userData) => {
    return `<h1>${userData.name}</h1> <h2>${userData.age}</h2>`;
  });
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
