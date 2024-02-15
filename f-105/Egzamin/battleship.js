window.addEventListener("load", createBoards);

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
    board.addEventListener("click", aiMove);
    placeComputerShips();
  }
}

function aiMove(event) {
  const computerShotIndex = Math.floor(Math.random() * 100);
  const cell = event.target;
  // Simulate hit or miss (for demonstration purposes)
  if (cell.classList.contains("ship")) {
    cell.style.backgroundColor = "red"; // Mark as hit
  } else {
    cell.style.backgroundColor = "blue";
  }
}
function placeComputerShips() {
  const aiBoard = document.getElementById("aiBoard");
  const gridCells = document.querySelectorAll(".grid-cell");
  const randomCellIndex = Math.floor(Math.random() * cells.length);
  cells[randomCellIndex].classList.add("ship");
}
