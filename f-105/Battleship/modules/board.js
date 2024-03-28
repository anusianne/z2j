class Ships {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}
const destroyer = new Ships('destroyer', 2);
const submarine = new Ships('submarine', 3);
const cruiser = new Ships('cruiser', 3);
const battleship = new Ships('battleship', 4);
const carrier = new Ships('carrier', 5);
export const ships = [destroyer, submarine, cruiser, battleship, carrier];
export const allAiCells = [];
export const allPlayerCells = [];
export class Cell {
    constructor(id) {
        this.id = id;
        this.boom = false;
        this.occupied = false;
    }
    setShip(ship) {
        this.ship = ship;
        this.setOccupied();
    }
    setOccupied() {
        this.occupied = true;
    }
    setBoom() {
        this.boom = true;
    }
    get isBoom() {
        return this.boom;
    }
    get isOccupied() {
        return this.occupied;
    }
    updateView() {
        const cellElement = document.getElementById(this.id);
        if (cellElement && this.occupied && this.ship) {
            cellElement.classList.add(`${this.ship}Player`); // Załóżmy, że `ship` przechowuje nazwę statku jako string
            // Możesz też dodać inny kolor lub klasę w zależności od typu statku
        } else if (cellElement) {
            cellElement.classList.remove(`${this.ship}Player`);
        }
    }
}
function createBoard(user) {
    const boardSection = document.getElementById('boardSection');
    const width = 10;
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('boardContainer');
    gameContainer.id = user;
    for (let i = 1; i <= width * width; i++) {
        const cell = new Cell(i);
        if (user === 'player') {
            allPlayerCells.push(cell);
        } else {
            allAiCells.push(cell);
        }
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.id = i;
        gameContainer.append(gridCell);
    }
    boardSection.append(gameContainer);
}
function createBoards() {
    createBoard('player');
    createBoard('ai');
}
createBoards();
