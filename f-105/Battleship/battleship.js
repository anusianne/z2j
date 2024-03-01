const boardSection = document.getElementById('boardSection');
const shipSection = document.getElementById('shipSection')
const player = document.getElementById('player');
const ai = document.getElementById('ai');
const rotateBtn = document.querySelector('.rotateBtn');
const width = 10;
let angle = 0;
const shipTypes = Array.from(shipSection.children);

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
//Rotate button to rotate ship's direction:
rotateBtn.addEventListener('click', rotateShip)
function rotateShip() {
    angle = angle === 0 ? 90 : 0;
    shipTypes.forEach(
        (shipType) => (shipType.style.transform = `rotate(${angle}deg)`)
    );
}