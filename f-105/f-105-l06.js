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