// import { allAiCells, allPlayerCells, ships, Cell } from './board.js';
// import { allPlayerGridCells } from './dragDrop.js';
// import { width } from '../battleship.js';
//
// const startBtn = document.querySelector('.startBtn');
// const modal = document.createElement('div');
// let gameOver = false;
// let playerTurn;
//
// startBtn.addEventListener('click', startGame);
//
// function startGame() {
//     const allShipsPlaced = Array.from(shipSection.children).every(
//         (ship) => ship.style.display === 'none'
//     );
//
//     if (!allShipsPlaced) {
//         modal.classList.add('modal');
//         modal.innerHTML =
//             'You must place all the ships on the player board first!';
//         document.body.appendChild(modal);
//         setTimeout(() => {
//             modal.remove();
//         }, 1500);
//         return;
//     }
//
//     startBtn.style.display = 'none';
//
//     const allBoardCells = document.querySelectorAll('#ai div');
//     allBoardCells.forEach((cell) =>
//         cell.addEventListener('click', handleClick)
//     );
//
//     playerTurn = true;
// }
//
// let playerHits = [];
// let aiHits = [];
// const playerSunkedShips = [];
// const aiSunkedShips = [];
//
// function updateView(user) {}
//
// function handleClick(e) {
//     setTimeout(() => {
//         if (!gameOver) {
//             const cellIndex = parseInt(e.target.id) - 1;
//             const targetCell = allAiCells[cellIndex];
//
//             if (targetCell.isOccupied) {
//                 targetCell.setBoom();
//             }
//
//             playerHits.push(targetCell);
//             checkScore('player', playerHits, playerSunkedShips);
//         }
//
//         if (!targetCell.isOccupied) {
//             e.target.innerHTML = `X`;
//         }
//
//         playerTurn = false;
//         setTimeout(aiMove, 100);
//     }, 150);
// }
//
// function checkScore(user, userHits, userSunkedShips) {
//     function checkShip(shipName, shipLength) {
//         if (
//             userHits.filter((cell) => cell.ship === shipName).length ===
//             shipLength
//         ) {
//             const index = userHits.findIndex((cell) => cell.ship === shipName);
//             userHits.splice(index, shipLength);
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
//
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
//
// function aiMove() {
//     if (!gameOver) {
//         playerTurn = false;
//         setTimeout(() => {
//             let randomMove = Math.floor(Math.random() * width * width);
//             const targetCell = allPlayerCells[randomMove];
//
//             if (targetCell.isOccupied && !targetCell.isBoom) {
//                 targetCell.setBoom();
//                 allPlayerGridCells[randomMove].innerHTML = 'X';
//                 checkScore('ai', aiHits, aiSunkedShips);
//             } else {
//                 allPlayerGridCells[randomMove].innerHTML = 'X';
//             }
//         }, 200);
//     }
// }
