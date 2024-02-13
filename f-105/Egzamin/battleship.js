window.addEventListener("load", createBoard);

function createBoards() {
  createBoard("playerBoard");
  createBoard("aiBoard");
}
function createBoard() {
  const div = document.createElement("div");
  div.classList.add("container");
  const shipDiv = document.createElement("div");
  shipDiv.classList.add("shipContainer");
  shipDiv.style.display = "grid";
  shipDiv.style.gridTemplateColumns = "repeat(10, 1fr)";
  shipDiv.style.gridTemplateRows = "repeat(10, 1fr)";

  //adding grid cells
  for (let i = 0; i < 100; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    shipDiv.appendChild(gridCell);
  }

  div.appendChild(shipDiv);
  document.body.appendChild(div);
}
