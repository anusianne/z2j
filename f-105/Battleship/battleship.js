const boardSection = document.getElementById('boardSection');
const shipSection = document.getElementById('shipSection');
const player = document.querySelector('#player');
const ai = document.getElementById('ai');
const rotateBtn = document.querySelector('.rotateBtn');
const width = 10;
let angle = 0;
const shipTypes = Array.from(shipSection.children);
const draggables = document.querySelectorAll('.draggable');

// Ship Class
class Ships {
    constructor(name,length) {
        this.name = name;
        this.length = length;
    }
}
const destroyer = new Ships('destroyer', 2);
const submarine = new Ships('submarine', 3);
const cruiser = new Ships('cruiser', 3);
const battleship = new Ships('battleship', 4);
const carrier = new Ships('carrier', 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];


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
// Draggable elements
let draggedShip;
shipTypes.forEach(shipType =>
    shipType.addEventListener('dragstart', dragStart));
const allPlayerBlocks = document.querySelectorAll('#player div');
allPlayerBlocks.forEach(playerBlock => {
    playerBlock.addEventListener('dragover', dragOver)
    playerBlock.addEventListener('drop', ()=> {
        playerBlock.append(draggedShip);
    })
});
function dragStart(e) {
   draggedShip = e.target;
}
function dragOver(e) {
    e.preventDefault();
}
// function dropShip(e) {
//     const startId = e.target.id;
//     const ship = ships[draggedShip.id];
// }







