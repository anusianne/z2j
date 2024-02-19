const rotateBtn = document.getElementById("rotateBtn");
const shipContainer = document.querySelector(".shipContainer");
const gameBoardsContainer = document.querySelector("#gameboards-container");
//shipTypes rotate
let angle = 0;
function rotate() {
  const shipTypes = Array.from(shipContainer.children);
  angle = angle === 0 ? 90 : 0;
  shipTypes.forEach(
    (shipType) => (shipType.style.transform = `rotate(${angle}deg)`)
  );
}
rotateBtn.addEventListener("click", rotate);
//creating boards
const width = 10;
function createBoard(color, user) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.classList.add("gameBoard");
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;
  //create 100 gridcells for each board
  for (let i = 1; i <= width * width; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.id = i;
    gameBoardContainer.append(gridCell);
  }
  gameBoardsContainer.append(gameBoardContainer);
}
function createBoards() {
  createBoard("pink", "player");
  createBoard("yellow", "ai");
}
createBoards();
// Ship class
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}
const destroyer = new Ship("destroyer", 2);
const submarine = new Ship("submarine", 3);
const cruiser = new Ship("cruiser", 3);
const battleship = new Ship("battleship", 4);
const carrier = new Ship("carrier", 5);
const ships = [destroyer, submarine, cruiser, battleship, carrier];
//Adding randomly ship to an ai board
function addShip(ship) {
  const allBoardGrids = document.querySelectorAll("#ai div");
  let randomStartIndex = Math.floor(Math.random() * width * width);
  let randomBoolean = Math.random() < 0.5;
  console.log(randomStartIndex);
  let isHorizontal = randomBoolean;
  let shipBlocks = [];
  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardGrids[Number(randomStartIndex) + i]);
    } else {
      shipBlocks.push(allBoardGrids[Number(randomStartIndex) + i * width]);
    }
  }
  shipBlocks.forEach((shipBlock) => {
    shipBlock.classList.add(ship.name);
    shipBlock.classList.add("taken");
  });
}
addShip(destroyer);
