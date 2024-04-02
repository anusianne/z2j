import { shipSection, width } from '../battleship.js';
import { allAiCells, allPlayerCells, Cell } from './board.js';

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
            console.log('occupied');
            console.log(cellElement);
            cell.setBoom();
        } else {
            cellElement.style.backgroundColor = 'green';
            console.log('not');
            console.log(cellElement);
        }
        playerTurn = false;
        // checkScore('player', playerHits, playerSunkedShips);
        setTimeout(aiMove, 1000);
    }
}
// function checkScore(user, userHits, userSunkedShips) {
//     function checkShip(shipName, shipLength) {
//         if (
//             userHits.filter((storedShipName) => storedShipName === shipName)
//                 .length === shipLength
//         ) {
//             if (user === 'player') {
//                 playerHits = userHits.filter(
//                     (storedShipName) => storedShipName !== shipName
//                 );
//             }
//             if (user === 'ai') {
//                 aiHits = userHits.filter(
//                     (storedShipName) => storedShipName !== shipName
//                 );
//             }
//             modal.classList.add('modal');
//             modal.innerHTML = `You sunk the ai's ${shipName}.`;
//             document.body.appendChild(modal);
//             setTimeout(() => {
//                 modal.remove();
//             }, 1000);
//             userSunkedShips.push(shipName);
//         }
//     }
//     checkShip('destroyer', 2);
//     checkShip('submarine', 3);
//     checkShip('cruiser', 3);
//     checkShip('battleship', 4);
//     checkShip('carrier', 5);
//     if (playerSunkedShips.length === 5) {
//         const modalWin = document.createElement('div');
//         const restartBtn = document.createElement('button');
//         restartBtn.innerHTML = 'Restart';
//         restartBtn.classList.add('restartBtn');
//         restartBtn.addEventListener('click', () => {
//             window.location.reload();
//         });
//         modalWin.classList.add('modal');
//         modalWin.innerHTML =
//             'You won, you sunked the ai ships. Do you want to restart?';
//         modalWin.appendChild(restartBtn);
//         document.body.appendChild(modalWin);
//         gameOver = true;
//     }
//     if (aiSunkedShips.length === 5) {
//         modal.classList.add('modal');
//         modal.innerHTML = 'Ai won, you loose with your ships.';
//         document.body.appendChild(modal);
//         setTimeout(() => {
//             modal.remove();
//         }, 1000);
//         gameOver = true;
//     }
// }
function aiMove(e) {
    if (!gameOver) {
        let randomMove;
        let attempt = 0;
        do {
            randomMove = Math.floor(Math.random() * width * width);
            attempt++;
            if (attempt > width * width) break; // Prevents infinite loop
        } while (allPlayerCells[randomMove].isBoom);

        if (attempt <= width * width) {
            const cell = allPlayerCells[randomMove];
            const cells = document.querySelectorAll('#player .gridCell');
            const cellElement = cells[randomMove];

            if (cellElement) {
                if (cell.isOccupied && !cell.isBoom) {
                    cell.setBoom(true);
                    cellElement.style.backgroundColor = 'red'; // Mark hit
                    aiHits++;
                    // checkScore('ai', aiHits, aiSunkedShips);
                } else {
                    cell.setBoom(false);
                    cellElement.style.backgroundColor = 'green'; // Mark miss
                }
            }
        }
        playerTurn = true;
    }
}
