const container = document.getElementById("container");
function fetchCharacters() {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(people => new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                for (let person of people.results) {
                    const newDiv = document.createElement("div");
                    newDiv.classList.add("character");
                    const h2 = document.createElement("h2");
                    const h3 = document.createElement("h3")
                    const p = document.createElement("p");
                    p.classList.add("character_gender");
                    h2.classList.add("character_name");
                    h2.textContent = `${person.name}`
                    h3.classList.add("character_birthYear")
                    if (person.gender === "n/a") {
                        p.textContent = `Gender: ${person.name} doesn't have a gender.`;
                    } else {
                        p.textContent = `Gender: ${person.gender}`
                    }
                    h3.textContent = `Date of birth: ${person.birth_year}`;
                    container.append(newDiv);
                    container.append(h2);
                    container.append(h3);
                    container.append(p);
                }
                resolve(); // Resolve the promise once the loop is done
            });
        })
            .catch(error => {
                console.error('Error fetching characters:', error);
            }));
}
fetchCharacters();


