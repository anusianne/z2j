//1
function leastToGreatest(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
//2
function greatestToLeast(arr) {
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
//3
function lengthSort(arr) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
//4
function alphabetical(arr) {
  return arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
//5
function byAge(arr) {
  return arr.sort(function (a, b) {
    return a.age - b.age;
  });
}
console.log(
  byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 },
  ])
);
