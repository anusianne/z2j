// Async
async function print() {
    return "I am print 1."
}
print().then(response=>console.log(response));
const printOut = async() => {
    return "I have been printed."
}
printOut().then(response => console.log(response));
//await keyword
async function getData() {
    const response = await fetch("https://swapi.dev/api/planets/")
    const data = await response.json()
    return data;
}
getData().then(data=>console.log(data.results)).catch(err=> console.log("errors: " + err.message));
//Call async from non-async. We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
function f() {
    wait().then(response=>console.log(response))
}
f();
// Rewrite using async/await, rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
async function loadJson(url) {
    const fetchData = await fetch(url)
    if (response.status == 200) {
        const data = await response.json()
        return data
    }
                throw new Error(response.status);
}
loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404