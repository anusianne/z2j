const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
let previousURL = null;
let nextURL = null;
let currentPage = 1;

function fetchUrl(url, successCallback, errorCallback) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(
                    `Request failed with status ${response.status}: ${response.statusText}`
                );
            }
        })
        .then(successCallback)
        .catch(errorCallback);
}
function fetchCharacters() {
    const url = `https://swapi.dev/api/people123/?page=${currentPage}`;
    fetchUrl(url, displayCharacters, handleFetchError);
}
function handleFetchError(error) {
    console.error('Error fetching data:', error);
    container.textContent = `Failed to fetch data: ${error.message}`;
}
function displayCharacters(people) {
    container.innerHTML = '';
    for (let person of people.results) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('character');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        p.classList.add('character_gender');
        h2.classList.add('character_name');
        h2.textContent = `${person.name}`;
        h3.classList.add('character_birthYear');
        if (person.gender === 'n/a') {
            p.textContent = `Gender: ${person.name} doesn't have a gender.`;
        } else {
            p.textContent = `Gender: ${person.gender}`;
        }
        h3.textContent = `Date of birth: ${person.birth_year}`;
        container.append(newDiv);
        newDiv.append(h2);
        newDiv.append(h3);
        newDiv.append(p);
        callHomePlanet(person.homeworld, newDiv);
    }
    previousURL = people.previous;
    nextURL = people.next;
    previousBtn.disabled = !previousURL;
    nextBtn.disabled = !nextURL;
}
function callHomePlanet(planetUrl, containerElement) {
    fetchUrl(
        planetUrl,
        (planet) => {
            const h4 = document.createElement('h4');
            h4.classList.add('planet');
            h4.textContent = `Home Planet: ${planet.name}`;
            containerElement.append(h4);
        },
        handleFetchError
    );
}
function loadPreviousButton() {
    if (previousURL) {
        container.innerHTML = '';
        currentPage--;
        fetchCharacters();
    }
}
function loadNextButton() {
    if (nextURL) {
        container.innerHTML = '';
        currentPage++;
        fetchCharacters();
    }
}
fetchCharacters();
previousBtn.addEventListener('click', loadPreviousButton);
nextBtn.addEventListener('click', loadNextButton);
