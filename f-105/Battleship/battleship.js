import { ships, allPlayerCells, allAiCells, Cell } from './modules/board.js';
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
    let attempt = 0;
    let success = false;
    const maxAttempts = 200;
    const boardWidth = 10; // Upewnij się, że wartość szerokości planszy jest poprawna
    const allGridCells = user === 'player' ? allPlayerCells : allAiCells;

    while (!success && attempt < maxAttempts) {
        attempt++;
        const randomBoolean = Math.random() < 0.5;
        const isHorizontal =
            user === 'player' ? Math.random() < 0.5 : randomBoolean; // Zaktualizowano logikę, aby działała bez zmiennej `angle`
        const randomStartIndex = Math.floor(
            Math.random() * boardWidth * boardWidth
        );
        const startIndex = startId !== undefined ? startId : randomStartIndex;

        let validStart = null;

        if (isHorizontal) {
            validStart =
                (startIndex % boardWidth) + ship.length <= boardWidth
                    ? startIndex
                    : null;
        } else {
            validStart =
                startIndex < boardWidth * (boardWidth - ship.length + 1)
                    ? startIndex
                    : null;
        }

        if (validStart !== null) {
            const shipCells = [];
            let isValidPlacement = true;

            for (let i = 0; i < ship.length; i++) {
                let index = isHorizontal
                    ? validStart + i
                    : validStart + i * boardWidth;
                const cell = allGridCells[index];

                if (
                    cell === undefined ||
                    cell.isOccupied ||
                    isSurroundingCellOccupied(index, allGridCells, boardWidth)
                ) {
                    isValidPlacement = false;
                    break;
                } else {
                    shipCells.push(cell);
                }
            }

            if (isValidPlacement) {
                shipCells.forEach((cell) => {
                    cell.setShip(ship);
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
function isSurroundingCellOccupied(index, allGridCells) {
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
            const cell = allGridCells[newIndex];
            if (cell && cell.isOccupied) {
                return true;
            }
        }
    }
    return false;
}
