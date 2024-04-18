import axios from 'axios';

const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
let previousURL = localStorage.getItem('previousURL');
let nextURL = localStorage.getItem('nextURL');
let currentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;

function fetchUrl(url, successCallback, errorCallback) {
    axios
        .get(url)
        // .then(function (response) {
        //     if (response.status === 200) {
        //         successCallback(response.data);
        //     }}
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        });
}

function fetchCharacters() {
    const url = `https://swapi.dev/api/111people/?page=${currentPage}`;
    fetchUrl(url, displayCharacters, handleFetchError);
}
function handleFetchError(error) {
    console.error('Error fetching data:', error);
    container.textContent = `Failed to fetch data: ${error}`;
}
function displayCharacters(people) {
    container.innerHTML = '';
    people.results.forEach((person) => {
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
        newDiv.append(h2, h3, p);
        container.append(newDiv);
        callHomePlanet(person.homeworld, newDiv);
    });
    previousURL = people.previous;
    nextURL = people.next;
    localStorage.setItem('previousURL', previousURL);
    localStorage.setItem('nextURL', nextURL);
    localStorage.setItem('currentPage', currentPage);
    previousBtn.disabled = !previousURL;
    nextBtn.disabled = !nextURL;
}
function callHomePlanet(planetUrl, containerElement) {
    axios
        .get(planetUrl)
        .then(function (planetResponse) {
            if (planetResponse.status === 200) {
                const h4 = document.createElement('h4');
                h4.classList.add('planet');
                h4.textContent = `Home Planet: ${planetResponse.data.name}`;
                containerElement.append(h4);
            } else {
                containerElement.textContent = `Failed to fetch data: ${planetResponse.status}`;
            }
        })
        .catch(function (error) {
            containerElement.textContent = `Failed to fetch data: ${error.message}`;
        });
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
