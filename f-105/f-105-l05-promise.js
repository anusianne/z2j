// Promise
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve,ms)
    });
}
delay(3000).then(() => alert('runs after 3 seconds'));
//Promise - resolve scenario
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Brought.');
    }, 5000)
})
promise.then(() => {
    alert("Its resolved succesfully!");
});
//Promise - rejected scenario
let promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Not brought.");
    }, 5000)
});
promise2.catch(() => {
    alert("Rejected");
});
// Promises next
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog.");
        }, 1500);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen.");
        }, 2500);
    });
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash.")
        }, 500);
    });
}
walkDog().then(value => {
    console.log(value);
    return cleanKitchen().then(value => {
        console.log(value)
        return takeOutTrash().then(value => {
            console.log(value)
        })
    })
})
//solving with callbacks functions
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores.");
//         });
//     });
// });
