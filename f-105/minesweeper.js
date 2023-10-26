const levelChooser = document.getElementById("levelChooser");
const grid = document.getElementById("grid");
const squares = [];
let isGameOver = false;
// Define a function to handle the click event for all level buttons
function handleLevelClick(xSize, ySize, bombAmount) {
  return function () {
    createBoard({ xSize, ySize, bombAmount });
  };
}
const levels = {
  easy: { xSize: 8, ySize: 8, bombAmount: 10 },
  medium: { xSize: 16, ySize: 16, bombAmount: 40 },
  master: { xSize: 30, ySize: 16, bombAmount: 99 },
};
// Add click event listeners for each level button
for (const level in levels) {
  document
    .getElementById(level)
    .addEventListener(
      "click",
      handleLevelClick(
        levels[level].xSize,
        levels[level].ySize,
        levels[level].bombAmount
      )
    );
}
function createBoard(level) {
  levelChooser.style.display = "none";
  console.log(level.xSize);
  grid.classList.add("grid-container");
  grid.style.gridTemplateColumns = `repeat(${level.xSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${level.ySize}, 1fr)`;
  // Generate random mines
  const mines = generateRandomMines(level.xSize, level.ySize, level.bombAmount);
  for (let i = 0; i < level.xSize * level.ySize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", `s${i}`);
    // Check if this square is a mine
    if (mines.includes(i)) {
      square.classList.add("mine");
    }
    grid.appendChild(square);
    square.addEventListener("click", () => {
      clickAction(square);
    });
    square.oncontextmenu = (e) => {
      e.preventDefault();
    };
  }
}
function generateRandomMines(xSize, ySize, bombAmount) {
  const totalSquares = xSize * ySize;
  const mines = [];
  while (mines.length < bombAmount) {
    const randomMines = Math.floor(Math.random() * totalSquares);
    if (!mines.includes(randomMines)) {
      mines.push(randomMines);
    }
  }
  return mines;
}
function gameOver(square) {
  // isGameOver = true;
  squares.forEach((square) => {
    if (square.classList.contains("mine")) {
      console.log("bomb");
      square.style.backgroundColor = "red";
    }
  });
}
function clickAction(square) {
  if (square.classList.contains("mine")) {
    console.log("game over");
    square.style.backgroundColor = "red";
    // change color for every square with class mine
    const mineSquares = document.querySelectorAll(".mine");
    mineSquares.forEach((mineSquare) => {
      mineSquare.style.backgroundColor = "red";
    });
  }
}
