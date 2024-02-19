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
