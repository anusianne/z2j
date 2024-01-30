function fetchCharacters() {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(people => new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                for (let person of people.results) {
                    let div = document.createElement('div');
                    div.innerText = `${person.name}`;
                    document.body.append(div);
                }
                resolve(); // Resolve the promise once the loop is done
            });
        })
            .catch(error => {
                console.error('Error fetching characters:', error);
            }));
}
fetchCharacters();


