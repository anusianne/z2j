//try catch finally
// try {
//     console.log(x);
// }
// catch(error) {
//     console.log(error);
// }
// finally {
//     console.log("This always executes.");
// }
//dividers errors
// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
//     if (divisor === 0) {
//         throw new Error("You can't divide by 0");
//     }
//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Values must be numbers!");
//     }
//     const result = dividend/divisor;
//     console.log(result);
// }
// catch (e) {
//     console.error(e)
// }
// console.log("Reached!");

//Callbacks ex.1
const btn = document.getElementById("btn");
btn.addEventListener('click',function () {
    console.log("The button was pressed.")
})
const nameList = {
    names: [],
    onNewName: null,
    init: function (newNameCallback) {
        this.onNewName = newNameCallback;
},
    addName: function(name) {
        this.names.push(name);
        this.onNewName(name);
    }
};
nameList.init(function(newName) {
    console.log(newName);
})
nameList.addName("Domenic");

//Callback ex. 2
hello(goodbye);
function hello(callback) {
    console.log("Hello");
    callback();
}
function goodbye() {
    console.log("Goodbye");
}
//Callback ex. 3
sum(displayPage, 2, 4)
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayConsole(result) {
    console.log(result);
}
function displayPage(result) {
    document.getElementById("h1").textContent = result;
}
//Callback ex. 4
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue"
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
const delayedColorChange = (newColor, delay, doNext) => {
setTimeout(() => {
document.body.style.backgroundColor = newColor;
doNext && doNext();
}, delay)
}
delayedColorChange("red", 1000,() => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("yellow", 1000, () => {
            delayedColorChange("green", 1000, () => {
                delayedColorChange("blue", 1000, () => {
                })
            })
        })
    })
});


