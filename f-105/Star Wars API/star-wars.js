const container = document.getElementById("container");
const h4 = document.createElement("h4");
function fetchCharacters() {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(people => {
                for (let person of people.results) {
                    const newDiv = document.createElement("div");
                    newDiv.classList.add("character");
                    const h2 = document.createElement("h2");
                    const h3 = document.createElement("h3");
                    const p = document.createElement("p");
                    p.classList.add("character_gender");
                    h2.classList.add("character_name");
                    h2.textContent = `${person.name}`;
                    h3.classList.add("character_birthYear");
                    if (person.gender === "n/a") {
                        p.textContent = `Gender: ${person.name} doesn't have a gender.`;
                    } else {
                        p.textContent = `Gender: ${person.gender}`
                    }
                    h3.textContent = `Date of birth: ${person.birth_year}`;
                    container.append(newDiv);
                    newDiv.append(h2);
                    newDiv.append(h3);
                    newDiv.append(p);
                    // Call the function to fetch and display home planet
                    callHomePlanet(person.homeworld, newDiv);
                }
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
}
function callHomePlanet(planetUrl, containerElement) {
    fetch(planetUrl)
        .then(response => response.json())
        .then(planet => {
            const h4 = document.createElement("h4");
            h4.classList.add("planet");
            h4.textContent = `Home Planet: ${planet.name}`;
            containerElement.append(h4);
        })
        .catch(error => {
            console.error('Error fetching home planet:', error);
        });}
fetchCharacters();



