window.addEventListener("load", createBoards);
const rotateBtn = document.querySelector('.rotateBtn');
const shipContainer = document.querySelector('.shipContainer');
let angle = 0;
const width = 10;
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
const patrolBoat = new Ship("Patrol Boat", 3);
const submarine = new Ship("Submarine", 3);
const destroyer = new Ship("Destroyer", 2);
const battleship = new Ship("BattleShip", 4);
const carrier = new Ship("Carrier", 5);

const ships = [patrolBoat, submarine, destroyer, battleship, carrier]
function createBoards() {
  createBoard("playerBoard","player");
  createBoard("aiBoard","ai");
}
function createBoard(boardId, user) {
  const board = document.getElementById(boardId);
  //adding grid cells
  for (let i = 1; i < width*width; i++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("gridCell");
      gridCell.id = `${user}${i}`;
      board.appendChild(gridCell);
  }}

//random ships for ai board
function addShipRandomly(ship) {
    const allBoardGrids = document.querySelectorAll('#aiBoard div');
    let randomBoolean = Math.random() < 0.5;
    let isHorizontal = true;
    // console.log(allBoardGrids)
    let randomStartIndex = Math.floor(Math.random() * width * width);

    let ShipBlocks = [];
    // console.log(randomStartIndex)
    for (let i = 0; i < ship.length; i++) {
        if(isHorizontal) {
        console.log(allBoardGrids[Number(randomStartIndex) + i]);
        }
    }
}
addShipRandomly(destroyer)