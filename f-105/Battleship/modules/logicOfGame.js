import { shipSection, width } from '../battleship.js';
import { allPlayerCells } from './dragDrop.js';

const startBtn = document.querySelector('.startBtn');
let gameOver = false;
let playerTurn;
// Start Game
startBtn.addEventListener('click', startGame);
function startGame() {
    // Sprawdza, czy wszystkie statki zostały ukryte (czyli umieszczone na planszy)
    const allShipsPlaced = Array.from(shipSection.children).every(
        (ship) => ship.style.display === 'none'
    );
    if (!allShipsPlaced) {
        console.log('You must place all the ships on the player board first!');
        return;
    }
    // Jeśli wszystkie statki są ukryte, kontynuujemy uruchamianie gry
    startBtn.style.display = 'none';
    const allBoardCells = document.querySelectorAll('#ai div');
    allBoardCells.forEach((cell) =>
        cell.addEventListener('click', handleClick)
    );
    playerTurn = true;
}
let playerHits = [];
let aiHits = [];
const playerSunkedShips = [];
const aiSunkedShips = [];
function handleClick(e) {
    if (!gameOver) {
        if (e.target.classList.contains('occupied')) {
            //basic highlighting
            e.target.classList.add('boom');
            e.target.style.backgroundImage = "url('explode.png')";
            console.log('You hit the ai ship.');
        }
        let classes = Array.from(e.target.classList);
        classes = classes.filter((className) => className !== 'gridCell');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'occupied');
        playerHits.push(...classes);
        console.log(playerHits);
        checkScore('player', playerHits, playerSunkedShips);
    }
    if (!e.target.classList.contains('occupied')) {
        e.target.innerHTML = `X`;
        e.target.style.paddingTop = '5px';
        e.target.style.textAlign = 'center';
        e.target.style.backgroundColor = '#302F2F';
    }
    playerTurn = false;
    const allBoardCells = document.querySelectorAll('#ai div');
    allBoardCells.forEach((cell) => cell.replaceWith(cell.cloneNode(true)));
    setTimeout(aiMove, 1000);
}
function checkScore(user, userHits, userSunkedShips) {
    function checkShip(shipName, shipLength) {
        if (
            userHits.filter((storedShipName) => storedShipName === shipName)
                .length === shipLength
        ) {
            if (user === 'player') {
                playerHits = userHits.filter(
                    (storedShipName) => storedShipName !== shipName
                );
            }
            if (user === 'ai') {
                aiHits = userHits.filter(
                    (storedShipName) => storedShipName !== shipName
                );
            }
            //modal needed
            //
            console.log(`You sunk the ${user}'s ${shipName}.`);
            userSunkedShips.push(shipName);
        }
    }
    checkShip('destroyer', 2);
    checkShip('submarine', 3);
    checkShip('cruiser', 3);
    checkShip('battleship', 4);
    checkShip('carrier', 5);
    console.log('playerHits', playerHits);
    console.log('playerSunkedShips', playerSunkedShips);

    if (playerSunkedShips.length === 5) {
        //modal needed
        console.log('You won, you sunked the ai ships.');
        gameOver = true;
    }
    if (aiSunkedShips.length === 5) {
        //modal needed
        console.log('Ai won, you loose with your ships.');
        gameOver = true;
    }
}
//ai move function
function aiMove() {
    if (!gameOver) {
        console.log('Computer goes!');
        setTimeout(() => {
            let randomMove = Math.floor(Math.random() * width * width);
            if (
                allPlayerCells[randomMove].classList.contains('occupied') &&
                allPlayerCells[randomMove].classList.contains('boom')
            ) {
                aiMove();
                return;
            } else if (
                allPlayerCells[randomMove].classList.contains('occupied') &&
                !allPlayerCells[randomMove].classList.contains('boom')
            ) {
                allPlayerCells[randomMove].classList.add('boom');
                e.target.classList.add('boom');
                e.target.style.backgroundImage = "url('explode.png')";
                console.log('The computer hit your ship.');
                let classes = Array.from(allPlayerCells[randomMove].classList);
                classes = classes.filter(
                    (className) => className !== 'gridCell'
                );
                classes = classes.filter((className) => className !== 'boom');
                classes = classes.filter(
                    (className) => className !== 'occupied'
                );
                aiHits.push(...classes);
                checkScore('ai', aiHits, aiSunkedShips);
            } else {
                allPlayerCells[randomMove].innerHTML = `X`;
                allPlayerCells[randomMove].style.paddingTop = '5px';
                allPlayerCells[randomMove].style.textAlign = 'center';
                allPlayerCells[randomMove].style.backgroundColor = '#302F2F';
            }
        }, 1000);
        setTimeout(() => {
            playerTurn = true;
            console.log('Your move now. ');
            const allBoardCells = document.querySelectorAll('#ai div');
            allBoardCells.forEach((cell) =>
                cell.addEventListener('click', handleClick)
            );
        }, 2000);
    }
}
