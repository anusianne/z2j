import { ships, Cell, allAiCells, allPlayerCells } from './modules/board.js';
export const shipSection = document.getElementById('shipSection');
export const rotateBtn = document.querySelector('.rotateBtn');
export const width = 10;
export let angle = 0;
export const shipTypes = Array.from(shipSection.children);

rotateBtn.addEventListener('click', rotateShip);
function rotateShip() {
    angle = angle === 0 ? 90 : 0;
    shipTypes.forEach((shipType) => {
        shipType.style.transform = `rotate(${angle}deg)`;
    });
}
export function addShip(user, ship, startId) {
    const allBoardCells = document.querySelectorAll(`#${user} div`);
    let attempt = 0;
    let success = false;
    const maxAttempts = 200;
    const boardWidth = width;
    while (!success && attempt < maxAttempts) {
        attempt++;
        const randomBoolean = Math.random() < 0.5;
        const isHorizontal = user === 'player' ? angle === 0 : randomBoolean;
        const randomStartIndex = Math.floor(Math.random() * width * width);
        const startIndex = startId !== undefined ? startId : randomStartIndex;
        let validStart;
        if (isHorizontal) {
            if (isHorizontal) {
                validStart =
                    (startIndex % boardWidth) + ship.length <= boardWidth
                        ? startIndex
                        : null;
            }
        } else {
            validStart =
                startIndex < boardWidth * (boardWidth - ship.length + 1)
                    ? startIndex
                    : null;
        }
        let isValidPlacement;
        if (validStart !== null) {
            const shipCells = [];
            for (let i = 0; i < ship.length; i++) {
                let index = isHorizontal
                    ? Number(validStart) + i
                    : Number(validStart) + i * boardWidth;
                if (index >= allBoardCells.length || index < 0) {
                    isValidPlacement = false;
                    break;
                }
                let allCells = user === 'player' ? allPlayerCells : allAiCells;
                if (
                    allCells[index].isOccupied ||
                    isSurroundingCellOccupied(index, allCells)
                ) {
                    isValidPlacement = false;
                    break;
                } else {
                    isValidPlacement = true;
                }
                shipCells.push(allCells[index]);
            }
            if (isValidPlacement) {
                shipCells.forEach((shipCell) => {
                    if (user === 'player') {
                        shipCell.setOccupied();
                        shipCell.setShip(ship.name);
                        shipCell.updateView();
                        // shipCell.setShip(ship.name);
                        // shipCell.classList.add(ship.name);
                        // shipCell.classList.add(`${ship.name}Player`);
                    } else {
                        shipCell.setOccupied();
                        shipCell.setShip(ship.name);
                        console.log('statki komputerka');
                        console.log(shipCell.id);
                        // shipCell.classList.add(ship.name);
                        // shipCell.classList.add('occupied');
                    }
                });
                success = true;
            }
        }
        if (!success && startId !== undefined) {
            alert(
                'Nie można umieścić statku w tej lokalizacji. Proszę spróbować gdzie indziej.'
            );
            return false;
        }
    }
    return success;
}
ships.forEach((ship) => {
    addShip('ai', ship);
});
function isSurroundingCellOccupied(index, allCells) {
    const boardWidth = width;
    const row = Math.floor(index / boardWidth);
    const col = index % boardWidth;
    const positions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    for (let pos of positions) {
        const newRow = row + pos[0];
        const newCol = col + pos[1];
        const newIndex = newRow * boardWidth + newCol;
        if (
            newRow >= 0 &&
            newRow <= boardWidth - 1 &&
            newCol >= 0 &&
            newCol <= boardWidth - 1
        ) {
            const cell = allCells[newIndex];
            if (cell && cell.isOccupied) {
                return true;
            }
        }
    }
    return false;
}
