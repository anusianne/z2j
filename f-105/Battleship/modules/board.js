class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}
// Instancje statków
const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);
// Tablica statków
export const ships = [destroyer, submarine, cruiser, battleship, carrier];
// Tablice komórek gracza i AI
export const allAiCells = [];
export const allPlayerCells = [];
// Klasa Cell
export class Cell {
    constructor(id) {
        this.id = id;
        this.ship = null;
        this.boom = false;
        this.occupied = false;
        this.updateView(); // Aktualizacja widoku od razu po utworzeniu komórki
    }
    setShip(ship) {
        this.ship = ship;
        this.setOccupied();
    }
    setOccupied() {
        this.occupied = true;
        this.updateView();
    }
    setBoom() {
        this.boom = true;
        this.updateView();
    }
    updateView() {
        const cellElement = document.getElementById(this.id);
        if (cellElement) {
            if (this.boom) {
                cellElement.classList.add('boom');
            } else {
                cellElement.classList.remove('boom');
            }
        }
    }
    // Sprawdzenie, czy komórka jest pusta
    get isEmpty() {
        return !this.occupied;
    }
    // Sprawdzenie, czy komórka została trafiona
    get isBoom() {
        return this.boom;
    }
    // Sprawdzenie, czy komórka jest zajęta
    get isOccupied() {
        return this.occupied;
    }
}
// Funkcja tworząca planszę dla danego użytkownika
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
// Funkcja tworząca plansze dla obu użytkowników
function createBoards() {
    createBoard('player');
    createBoard('ai');
}
createBoards();
