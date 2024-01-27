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