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
  grid.classList.add("grid-container");
  grid.style.gridTemplateColumns = `repeat(${level.xSize}, 2em)`;
  grid.style.gridTemplateRows = `repeat(${level.ySize}, 2em)`;
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
      if (!isGameOver) {
        clickAction(square, level);
      }
    });
    square.oncontextmenu = (e) => {
      e.preventDefault();
      square.innerHTML = "🚩";
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
function gameOverCheck() {
  if (isGameOver == true) {
    alert("Game over");
  }
}
function clickAction(square) {
  let currentId = square.id;
  if (square.classList.contains("mine")) {
    const mineSquares = document.querySelectorAll(".mine");
    mineSquares.forEach((mineSquare) => {
      mineSquare.style.backgroundColor = "red";
    });
    isGameOver = true;
    setTimeout(function () {
      alert("Game over");
      window.location.reload();
    }, 300);
  } else {
    let total = square.getAttribute("data");
    if (total !== 0) {
      square.classList.add("checked");
      square.innerHTML = total;
      return;
    }
    square.classList.add("checked");
  }
}
