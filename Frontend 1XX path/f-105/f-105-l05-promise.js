// Promise
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
delay(3000).then(() => alert('runs after 3 seconds'));
//Promise - resolve scenario
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Brought.');
    }, 5000);
});
promise.then(() => {
    alert('Its resolved succesfully!');
});
//Promise - rejected scenario
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Not brought.');
    }, 5000);
});
promise2.catch(() => {
    alert('Rejected');
});
// Promises next
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You walk the dog.');
        }, 1500);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You clean the kitchen.');
        }, 2500);
    });
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You take out the trash.');
        }, 500);
    });
}
walkDog().then((value) => {
    console.log(value);
    return cleanKitchen().then((value) => {
        console.log(value);
        return takeOutTrash().then((value) => {
            console.log(value);
        });
    });
});
//solving with callbacks functions
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores.");
//         });
//     });
// });

//Promise with WebDev
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success.');
    } else {
        reject('Failed.');
    }
});
p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});
//Video Promises
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded.');
});
const recordedVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded.');
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded.');
});
Promise.all([recordVideoOne, recordedVideoTwo, recordVideoThree]).then(
    (message) => {
        console.log(message);
    }
);
// Promises chaining
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        alert(result);
        return result * 2;
    })
    .then(function (result) {
        alert(result);
        return result * 2;
    })
    .then(function (result) {
        alert(result);
    });

// Chaining 2
let promise3 = new Promise((resolve, reject) => {
    resolve();
});
promise3
    .then(() => {
        console.log('first then');
    })
    .then(() => {
        console.log('second then');
    })
    .then(() => {
        console.log('third then');
    });

// Chaining promise 3
