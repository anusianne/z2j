const rotateBtn = document.getElementById("rotateBtn");
const shipContainer = document.querySelector(".shipContainer");
const gameBoardsContainer = document.querySelector("#gameboards-container");
const shipTypes = Array.from(shipContainer.children);
//shipTypes rotate
let angle = 0;
function rotate() {
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
  for (let i = 0; i < width * width; i++) {
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
let notDropped;
//Adding randomly ship to an ai board
function addShip(user, ship, startId) {
  const allBoardCells = document.querySelectorAll(`#${user} div`);
  let randomStartIndex = Math.floor(Math.random() * width * width);
  let startIndex = startId ? startId : randomStartIndex;
  let randomBoolean = Math.random() < 0.5;
  // console.log(randomStartIndex);
  let isHorizontal = user === "player" ? angle === 0 : randomBoolean;
  let shipCells = [];
  let validStart = isHorizontal
    ? startIndex <= width * width - ship.length
      ? startIndex
      : width * width - ship.length
    : //isVertical??
    startIndex <= width * width - width * ship.length
    ? startIndex
    : startIndex - ship.length * width + width;
  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipCells.push(allBoardCells[Number(validStart) + i]);
    } else {
      shipCells.push(allBoardCells[Number(validStart) + i * width]);
    }
  }
  let valid;
  if (isHorizontal) {
    valid = shipCells.every(
      (_shipCell, index) =>
        shipCells[0].id % width !== width - (shipCells.length - (index + 1))
    );
  } else {
    valid = shipCells.every(
      (_shipCell, index) => shipCells[0].id < 90 + (width * index + 1)
    );
  }
  const notTaken = shipCells.every(
    (shipCell) => !shipCell.classList.contains("taken")
  );
  if (valid && notTaken) {
    shipCells.forEach((shipCell) => {
      shipCell.classList.add(ship.name);
      shipCell.classList.add("taken");
    });
  } else {
    if (user === "ai") addShip(user, ship);
    if (user === "player") notDropped = true;
  }
}
ships.forEach((ship) => addShip("ai", ship));
//Drag&drop ships
let draggedShip;
shipTypes.forEach((shipType) =>
  shipType.addEventListener("dragstart", dragStart)
);
const allPlayerCells = document.querySelectorAll("#player div");
allPlayerCells.forEach((allPlayerCell) => {
  allPlayerCell.addEventListener("dragover", dragOver);
  allPlayerCell.addEventListener("drop", dropShip);
});
function dragStart(e) {
  // console.log(e.target);
  notDropped = false;
  draggedShip = e.target;
}
function dragOver(e) {
  e.preventDefault();
}
function dropShip(e) {
  const startId = e.target.id;
  const ship = ships[draggedShip.id];
  addShip("player", ship, startId);
  if (!notDropped) {
    draggedShip.remove();
  }
  if (shipContainer.children.length === 0) {
    shipContainer.textContent =
      "You dispatchedd the ships. Let's start and play!";
    const startBtn = document.getElementById("startBtn");
    startBtn.style.display = "block";
    startBtn.addEventListener("click", () => {
      rotateBtn.style.display = "none";
      startBtn.style.display = "none";
      shipContainer.style.display = "none";
    });
  }
}
