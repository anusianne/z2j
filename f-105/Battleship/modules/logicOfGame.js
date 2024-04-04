import { shipSection, width } from '../battleship.js';
import { allAiCells, allPlayerCells, Cell, ships } from './board.js';

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
    const allBoardCells = document.querySelectorAll('#ai .gridCell');
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
    const cellId = parseInt(e.target.id, 10);
    const cell = allAiCells.find((c) => c.id == cellId);
    if (!gameOver && playerTurn && !cell.isBoom) {
        const cellElement = e.target;
        if (cell.isOccupied && !cell.isBoom) {
            cellElement.style.backgroundColor = 'red';
            cell.setBoom();
            if (cell.ship) {
                playerHits.push(cell.ship);
            }
        } else {
            cellElement.style.backgroundColor = 'green';
        }
        playerTurn = false;
        checkScore('player', playerHits, playerSunkedShips);
        setTimeout(aiMove, 1000);
    }
}
function checkScore(user, userHits, userSunkedShips) {
    function checkShip(shipName, shipLength) {
        const hitsOnShip = userHits.filter((id) => id === shipName).length;
        if (hitsOnShip === shipLength) {
            userHits = userHits.filter((id) => id !== shipName);
            if (user === 'player') {
                playerHits = userHits;
            } else if (user === 'ai') {
                aiHits = userHits;
            }
            modal.classList.add('modal');
            modal.innerHTML = `You sunk the ${user === 'ai' ? "player's" : "ai's"} ${shipName}!`;
            document.body.appendChild(modal);
            setTimeout(() => modal.remove(), 1500);
            userSunkedShips.push(shipName);
        }
    }
    checkShip('destroyer', 2);
    checkShip('submarine', 3);
    checkShip('cruiser', 3);
    checkShip('battleship', 4);
    checkShip('carrier', 5);
    if (playerSunkedShips.length === 5 || aiSunkedShips.length === 5) {
        gameOver = true;
        modal.classList.add('modal');
        modal.innerHTML =
            user === 'player'
                ? 'You won! All enemy ships have been sunk. Do you want to restart?'
                : 'AI won! All your ships have been sunk. Do you want to try again?';
        document.body.appendChild(modal);
        const restartBtn = document.createElement('button');
        restartBtn.innerHTML = 'Restart';
        restartBtn.classList.add('restartBtn');
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        });
        modal.appendChild(restartBtn);
        setTimeout(() => {
            modal.remove();
            startBtn.style.display = '';
        }, 3000);
    }
}
function aiMove(e) {
    if (!gameOver) {
        let randomMove;
        let attempt = 0;
        do {
            randomMove = Math.floor(Math.random() * width * width);
            attempt++;
            if (attempt > width * width) break;
        } while (allPlayerCells[randomMove].isBoom);
        if (attempt <= width * width) {
            const cellId = allPlayerCells[randomMove].id;
            const cell = allPlayerCells[randomMove];
            const cells = document.querySelectorAll('#player .gridCell');
            const cellElement = cells[randomMove];
            if (cellElement) {
                if (cell.isOccupied && !cell.isBoom) {
                    cell.setBoom(true);
                    cellElement.style.backgroundColor = 'red';
                    if (cell.ship) {
                        aiHits.push(cell.ship);
                    }
                    checkScore('ai', aiHits, aiSunkedShips);
                } else {
                    cell.setBoom(false);
                    cellElement.style.backgroundColor = 'green';
                }
            }
        }
        playerTurn = true;
    }
}
