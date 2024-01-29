fetch('people.json').then(function(response) {
    return response.json();
}).then(function(obj) {
    console.log(obj);
}).catch(function(err) {
    console.error("Something went wrong.");
    console.error(err)
})