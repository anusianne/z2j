const boardSection = document.getElementById('boardSection');
const player = document.getElementById('player');
const ai = document.getElementById('ai');
const width = 10;

//Create Board:
function createBoard(user) {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('gameContainer');
    gameContainer.id = user;
    for (let i= 1; i <= width*width; i++) {
const gridCell = document.createElement('div');
gridCell.classList.add('gridCell');
gridCell.id=i;
gameContainer.append(gridCell);
    }
    boardSection.append(gameContainer);
}
//Create Boards:
function createBoards() {
    createBoard('player');
    createBoard('ai');
}
createBoards();