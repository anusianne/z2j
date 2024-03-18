// Ship Class
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

//Creating boards
function createBoard(user) {
    const boardSection = document.getElementById('boardSection');
    const width = 10;
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('gameContainer');
    gameContainer.id = user;
    for (let i = 1; i <= width * width; i++) {
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
