import { shipSection, width } from '../battleship.js';
import { allPlayerCells } from './dragDrop.js';

const startBtn = document.querySelector('.startBtn');
const modal = document.createElement('div');
let gameOver = false;
let playerTurn;
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
    setTimeout(() => {
        if (!gameOver) {
            if (e.target.classList.contains('occupied')) {
                e.target.classList.add('boom');
                e.target.style.backgroundImage = "url('explode.png')";
            }
            let classes = Array.from(e.target.classList);
            playerHits.push(...classes);
            checkScore('player', playerHits, playerSunkedShips);
        }
        if (!e.target.classList.contains('occupied')) {
            e.target.classList.add('empty');
            e.target.innerHTML = `X`;
        }
        playerTurn = false;
        setTimeout(aiMove, 100);
    }, 150);
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
        }, 1000);
        gameOver = true;
    }
}
function aiMove() {
    if (!gameOver) {
        playerTurn = false;
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
                allPlayerCells[randomMove].style.backgroundImage =
                    "url('explode.png')";
                checkScore('ai', aiHits, aiSunkedShips);
            } else {
                allPlayerCells[randomMove].classList.add('empty');
                allPlayerCells[randomMove].innerHTML = `X`;
            }
        }, 200);
    }
}
