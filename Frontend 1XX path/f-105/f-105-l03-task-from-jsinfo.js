//1
function camelize(str) {
    let capitalizeStr = str
        .split('-')
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join()
        .replaceAll(',', '');
    return capitalizeStr.charAt(0).toLowerCase() + capitalizeStr.substring(1);
}
console.log(camelize('background-color-grey'));
//2
function filterRange(arr, a, b) {
    let newArr = arr.filter((num) => num >= a && num <= b);
    return newArr;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));
//3
function sortingDecreasing(arr) {
    let sortArr = arr.sort(function (a, b) {
        return b - a;
    });
    return sortArr;
}
console.log(sortingDecreasing(arr));
//4
function sortLanguages(arr1) {
    let sortedArr = arr1.slice().sort();
    return sortedArr;
}
let arr1 = ['HTML', 'JavaScript', 'CSS'];
console.log(sortLanguages(arr1));
console.log(arr1);
//5
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };
let users = [john, pete, mary];
function mapToName() {
    let names = users.map((name) => name.name);
    return names;
}
console.log(mapToName(users));
//6
let johnnatan = { name: 'John', surname: 'Smith', id: 1 };
let peter = { name: 'Pete', surname: 'Hunt', id: 2 };
let marianne = { name: 'Mary', surname: 'Key', id: 3 };
let userData = [johnnatan, peter, marianne];
let usersMapped = userData.map((data) => ({
    fullName: `${data.name} ${data.surname}`,
    id: data.id,
}));
console.log(usersMapped);
//7
let j = { name: 'John', age: 25 };
let p = { name: 'Pete', age: 30 };
let m = { name: 'Mary', age: 28 };
let arr = [pete, john, mary];
function sortByAge(arr) {
    let sortByAgeArr = arr.sort(function (a, b) {
        return a.age - b.age;
    });
    return sortByAgeArr;
}
console.log(sortByAge(arr));
//8
let array = [john, peter, mary];
function getAverageAge(array) {
    let averageAgeArr =
        arr.reduce((initial, current) => initial + current.age, 0) /
        array.length;
    return averageAgeArr;
}
console.log(getAverageAge(array));
//9
