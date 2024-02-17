window.addEventListener("load", createBoards);
const rotateBtn = document.querySelector('.rotateBtn');
const shipContainer = document.querySelector('.shipContainer');
let angle = 0;
function rotateShip() {
const shipTypes = Array.from(shipContainer.children);
    angle = angle === 0 ? 90 : 0;
    shipTypes.forEach(shipType => shipType.style.transform = `rotate(${angle}deg)`);
}
rotateBtn.addEventListener('click',rotateShip)
//types of Ships
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}
const patrolBoat = new Ship("Patrol Boat", 2);
const submarine = new Ship("Submarine", 3);
const destroyer = new Ship("Destroyer", 3);
const battleship = new Ship("BattleShip", 4);
const carrier = new Ship("Carrier", 5);

const ships = [patrolBoat, submarine, destroyer, battleship, carrier]
function createBoards() {
  createBoard("playerBoard");
  createBoard("aiBoard");
}
function createBoard(boardId) {
  const board = document.getElementById(boardId);
  //adding grid cells
  for (let i = 0; i < 100; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    board.appendChild(gridCell);
  }
  if (board === "aiBoard") {
  }
}
