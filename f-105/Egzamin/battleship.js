window.addEventListener("load", createBoards);

const shipTypes = [
  { name: "Carrier", length: 5 },
  { name: "Battleship", length: 4 },
  { name: "Destroyer", length: 3 },
  { name: "Submarine", length: 3 },
  { name: "Patrol Boat", length: 2 },
];

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
