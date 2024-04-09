// 1. Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
function hasOddNumber(arr) {
    return arr.some((el) => el % 2 !== 0);
}

//2. Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
function hasOnlyOddNumbers(arr) {
    return arr.every((el) => el % 2 !== 0);
}
hasOnlyOddNumbers([1, 3, 5, 7]);
hasOnlyOddNumbers([1, 2, 3, 4]);
