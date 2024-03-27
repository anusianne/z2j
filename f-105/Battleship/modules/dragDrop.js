import {
    shipTypes,
    angle,
    width,
    rotateBtn,
    shipSection,
    addShip,
} from '../battleship.js';
import { ships } from './board.js';

let draggedShip;
let notDropped;
let isShipDroppedOnBoard = false;
shipTypes.forEach((shipType) => {
    shipType.addEventListener('dragstart', dragStart);
});
export const allPlayerGridCells = document.querySelectorAll('#player div');
allPlayerGridCells.forEach((playerCell) => {
    playerCell.addEventListener('dragover', dragOver);
    playerCell.addEventListener('drop', dropShip);
});
shipTypes.forEach((shipType) => {
    shipType.addEventListener('dragend', dragEnd);
});
function dragStart(e) {
    notDropped = false;
    draggedShip = e.target;
    addShadowShip();
}
function dragOver(e) {
    e.preventDefault();
    clearHighlight();
    const cell = e.target;
    const startId = parseInt(cell.id, 10);
    const shipLength = ships.find(
        (ship) => ship.name === draggedShip.getAttribute('data-name')
    ).length;
    const cellsToHighlight = getCellsToHighlight(
        startId,
        shipLength,
        angle === 0
    );
    cellsToHighlight.forEach((id) => {
        const cell = document.querySelector(`#player div[id="${id}"]`);
        if (cell) cell.style.backgroundColor = 'pink';
    });
}
function dropShip(e) {
    isShipDroppedOnBoard = true;
    e.preventDefault();
    const startId = parseInt(e.target.id, 10) - 1;
    const shipName = draggedShip.getAttribute('data-name');
    const ship = ships.find((s) => s.name === shipName);
    const success = addShip('player', ship, startId);
    clearHighlight();
    if (success) {
        draggedShip.style.display = 'none'; // Ukryj statek po pomyślnym upuszczeniu
    } else {
        draggedShip.classList.remove('shadow');
    }
    checkAllShipsPlaced();
}
function dragEnd(e) {
    if (!isShipDroppedOnBoard) {
        alert(
            'Nie można umieścić statku poza planszą. Proszę spróbować ponownie.'
        );
        clearHighlight();
        draggedShip.classList.remove('shadow'); // Ponownie wyświetl statek
    }
    isShipDroppedOnBoard = false;
}
function clearHighlight() {
    document.querySelectorAll('#player .gridCell').forEach((cell) => {
        cell.style.backgroundColor = ''; // Reset background color
    });
}
function getCellsToHighlight(startId, length, isHorizontal) {
    const cells = [];
    for (let i = 0; i < length; i++) {
        let cellId = isHorizontal ? startId + i : startId + i * width;
        if (isHorizontal) {
            if (
                Math.floor((startId - 1) / width) !==
                Math.floor((cellId - 1) / width)
            ) {
                break;
            }
        }
        if (cellId > width * width) break; // Prevent going out of bounds
        cells.push(cellId);
    }
    return cells;
}
shipTypes.forEach((ship, index) => {
    ship.setAttribute('data-name', ships[index].name);
});
function checkAllShipsPlaced() {
    const visibleShips = Array.from(shipSection.children).filter(
        (ship) => ship.style.display !== 'none'
    );
    if (visibleShips.length === 0) {
        shipSection.style.display = 'none';
        rotateBtn.style.display = 'none';
    }
}
function addShadowShip() {
    draggedShip.classList.add('shadow');
}
