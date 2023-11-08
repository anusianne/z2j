const levelChooser = document.getElementById("levelChooser");
const grid = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn");
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
  resetBtn.style.display = "block";
  resetBtn.addEventListener("click", resetClick);
  grid.classList.add("grid-container");
  grid.style.gridTemplateColumns = `repeat(${level.xSize}, 2em)`;
  grid.style.gridTemplateRows = `repeat(${level.ySize}, 2em)`;
  // Generate random mines
  const mines = generateRandomMines(level.xSize, level.ySize, level.bombAmount);
  for (let y = 1; y <= level.ySize; y++) {
    for (let x = 1; x <= level.xSize; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `${x}s${y}`);
      // Check if this square is a mine
      if (mines.includes(`${x}${y}`)) {
        square.classList.add("mine");
      }
      grid.appendChild(square);
      square.addEventListener("click", () => {
        if (!isGameOver) {
          clickAction(square);
        }
      });
      square.oncontextmenu = (e) => {
        e.preventDefault();
        square.innerHTML = "🚩";
      };
    }
  }
}
function generateRandomMines(xSize, ySize, bombAmount) {
  const totalSquares = xSize * ySize;
  let mines = [];
  while (mines.length < bombAmount) {
    for (let y = 1; y <= ySize; y++) {
      for (let x = 1; x <= xSize; x++) {
        const randomMines = Math.floor(Math.random() * 100);
        if (
          (bombAmount / (xSize * ySize)) * 100 > randomMines &&
          mines.length < bombAmount
        ) {
          mines.push(`${x}${y}`);
        }
      }
    }
  }
  return mines;
}
function gameOverCheck() {
  if (isGameOver == true) {
    alert("Game over");
  }
}
function resetClick() {
  window.location.reload();
}
function clickAction(square) {
  if (square.classList.contains("mine")) {
    // change color for every square with class mine
    const mineSquares = document.querySelectorAll(".mine");
    mineSquares.forEach((mineSquare) => {
      mineSquare.style.backgroundColor = "red";
    });
    isGameOver = true;
    //!set Timeout added to solve the problem with synchonous appearing bomb and alert comunicated Game over
    setTimeout(function () {
      alert("Game over");
      window.location.reload();
    }, 300);
  } else {
    square.classList.add("valid");
    adjacentMineFind(square);
  }
}
function adjacentMineFind(square) {
  let counter = 0;
  const clickedX = parseInt(square.id.split("s")[0]);
  const clickedY = parseInt(square.id.split("s")[1]);
  for (let y = clickedY - 1; y <= clickedY + 1; y++) {
    for (let x = clickedX - 1; x <= clickedX + 1; x++) {
      const adjacentSquare = document.getElementById(`${x}s${y}`);
      if (adjacentSquare && adjacentSquare.classList.contains("mine")) {
        counter = counter + 1;
      }
    }
  }
  if (counter > 0) {
    square.innerHTML = counter;
  } else {
    checkAdjacentSquare(square, clickedX, clickedY);
  }
}
function checkAdjacentSquare(square, clickedX, clickedY) {
  if (square.classList.contains("valid")) {
    for (let y = clickedY - 1; y <= clickedY + 1; y++) {
      for (let x = clickedX - 1; x <= clickedX + 1; x++) {
        const adjacentSquare = document.getElementById(`${x}s${y}`);
        adjacentSquare.classList.add("valid");
        checkAdjacentSquare(adjacentSquare);
      }
    }
  }
}
