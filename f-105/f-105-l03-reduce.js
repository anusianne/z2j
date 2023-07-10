//1
function total(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
console.log(total([1, 2, 3]));
//2
function stringConcat(arr) {
  return arr.toString().replaceAll(",", "");
}
console.log(stringConcat([1, 2, 3])); // "123"
//3
function totalVotes(arr) {
  let voter = arr.filter((voter) => voter.voted === true);
  return voter.length;
}
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters));
//4
function shoppingSpree(arr) {
  return wishlist.reduce((sum, curr) => sum + curr.price, 0);
}
let wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];
console.log(shoppingSpree(wishlist));
//5
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
function voterResults(arr) {
  let result = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };
  arr.reduce((initial, voter) => {
    if (voter.age >= 18 && voter.age <= 25) {
      result.numYoungPeople++;
      if (voter.voted) {
        result.numYoungVotes++;
      }
    } else if (voter.age >= 26 && voter.age <= 35) {
      result.numMidsPeople++;
      if (voter.voted) {
        result.numMidVotesPeople++;
      }
    } else if (voter.age >= 36 && voter.age <= 55) {
      result.numOldsPeople++;
      if (voter.voted) {
        result.numOldVotesPeople++;
      }
    }
    return initial;
  }, result);
  return result;
}
console.log(voterResults(voters));
