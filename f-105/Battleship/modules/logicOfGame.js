import { shipSection, width } from '../battleship.js';
import { allPlayerCells } from './dragDrop.js';

const startBtn = document.querySelector('.startBtn');
const modal = document.createElement('div');
let gameOver = false;
let playerTurn;
// Start Game
startBtn.addEventListener('click', startGame);
function startGame() {
    const allShipsPlaced = Array.from(shipSection.children).every(
        (ship) => ship.style.display === 'none'
    );
    if (!allShipsPlaced) {
        modal.classList.add('modal');
        modal.innerHTML =
            'You must place all the ships on the player board first!';
        document.body.appendChild(modal);
        setTimeout(() => {
            modal.remove();
        }, 1500);
        return;
    }
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
            e.target.classList.add('boom');
            e.target.style.backgroundImage = "url('explode.png')";
        }
        let classes = Array.from(e.target.classList);
        classes = classes.filter((className) => className !== 'gridCell');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'occupied');
        playerHits.push(...classes);
        checkScore('player', playerHits, playerSunkedShips);
    }
    if (!e.target.classList.contains('occupied')) {
        e.target.innerHTML = `X`;
        e.target.style.paddingTop = '5px';
        e.target.style.textAlign = 'center';
        e.target.style.backgroundColor = '#032219';
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
            modal.classList.add('modal');
            modal.innerHTML = `You sunk the ai's ${shipName}.`;
            document.body.appendChild(modal);
            setTimeout(() => {
                modal.remove();
            }, 1000);
            userSunkedShips.push(shipName);
        }
    }
    checkShip('destroyer', 2);
    checkShip('submarine', 3);
    checkShip('cruiser', 3);
    checkShip('battleship', 4);
    checkShip('carrier', 5);
    if (playerSunkedShips.length === 5) {
        const modalWin = document.createElement('div');
        const restartBtn = document.createElement('button');
        restartBtn.innerHTML = 'Restart';
        restartBtn.classList.add('restartBtn');
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        });
        modalWin.classList.add('modal');
        modalWin.innerHTML =
            'You won, you sunked the ai ships. Do you want to restart?';
        modalWin.appendChild(restartBtn);
        document.body.appendChild(modalWin);
        gameOver = true;
    }
    if (aiSunkedShips.length === 5) {
        modal.classList.add('modal');
        modal.innerHTML = 'Ai won, you loose with your ships.';
        document.body.appendChild(modal);
        setTimeout(() => {
            modal.remove();
        }, 1500);
        gameOver = true;
    }
}
function aiMove() {
    if (!gameOver) {
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
                allPlayerCells[randomMove].classList.add('boom');
                allPlayerCells[randomMove].style.backgroundImage =
                    "url('explode.png')";
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
                allPlayerCells[randomMove].style.backgroundColor = '#032219';
            }
        }, 500);
        setTimeout(() => {
            playerTurn = true;
            const allBoardCells = document.querySelectorAll('#ai div');
            allBoardCells.forEach((cell) =>
                cell.addEventListener('click', handleClick)
            );
        }, 1000);
    }
}
