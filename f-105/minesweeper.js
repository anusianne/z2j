const levelChooser = document.getElementById("levelChooser");
const grid = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn");
const squares = [];
let isGameOver = false;
const gridContainer = document.getElementsByClassName("grid-container");
const timerDisplay = document.getElementById("timer");
let timerInterval;
let timer = 0;
let isFirstClick = true;

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

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
  timerDisplay.innerText = "TIME:";
  resetBtn.addEventListener("click", resetClick);
  grid.classList.add("grid-container");
  grid.style.gridTemplateColumns = `repeat(${level.xSize}, 2em)`;
  grid.style.gridTemplateRows = `repeat(${level.ySize}, 2em)`;
  const mines = generateRandomMines(level.xSize, level.ySize, level.bombAmount);
  for (let y = 1; y <= level.ySize; y++) {
    for (let x = 1; x <= level.xSize; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `${x}s${y}`);
      if (mines.includes(`${x}${y}`)) {
        square.classList.add("mine");
      }
      grid.appendChild(square);
      square.addEventListener("click", () => {
        if (!isGameOver) {
          clickAction(square);
        }
      });
    }
  }
}
function generateRandomMines(xSize, ySize, bombAmount) {
  let mines = [];
  while (mines.length < bombAmount) {
    const x = Math.floor(Math.random() * xSize) + 1;
    const y = Math.floor(Math.random() * ySize) + 1;
    const squareId = `${x}${y}`;
    if (!mines.includes(squareId)) {
      mines.push(squareId);
    }
  }
  return mines;
}
//! checking gameover condition
function gameOverCheck() {
  if (isGameOver == true) {
    alert("Game over");
  }
}
function resetClick() {
  window.location.reload();
}
//! click on every square on a borad
function clickAction(square) {
  if (isFirstClick) {
    setTimer();
    isFirstClick = false;
  }
  if (square.classList.contains("mine")) {
    const mineSquares = document.querySelectorAll(".mine");
    mineSquares.forEach((mineSquare) => {
      mineSquare.style.backgroundImage = "url(photo/image-asset.jpeg)";
      mineSquare.style.backgroundColor = "black";
    });
    isGameOver = true;
    setTimeout(function () {
      alert("Game over");
      stopTimer();
      window.location.reload();
    }, 300);
  } else {
    square.classList.add("valid");
    adjacentMineFind(square);
    winnerCheck();
  }
}
//! counting adjacent mine on the board
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
    square.style.color = "rgb(229, 228, 220)";
    square.style.fontWeight = "bold";
  } else {
    for (let y = clickedY - 1; y <= clickedY + 1; y++) {
      for (let x = clickedX - 1; x <= clickedX + 1; x++) {
        const adjacentSquare = document.getElementById(`${x}s${y}`);
        if (adjacentSquare && !adjacentSquare.classList.contains("valid")) {
          clickAction(adjacentSquare);
          square.style.border = "1px solid black";
          square.style.opacity = "0.8";
        }
      }
    }
  }
}
//! set Timer:
function setTimer() {
  const timerStart = (timerDisplay.innerText = "TIME:");
  timerInterval = setInterval(function () {
    timer++;
    timerDisplay.innerText = `${timerStart} ${timer} s`;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
//! winning condition
function winnerCheck() {
  let allSquares = document.querySelectorAll(".square");
  let allRevealed = true;
  allSquares.forEach((square) => {
    if (
      !square.classList.contains("mine") &&
      !square.classList.contains("valid")
    ) {
      allRevealed = false;
    }
  });
  if (allRevealed) {
    stopTimer();
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetBtn");
    const modal = document.createElement("div");
    const gif = document.querySelector(".tenor-gif-embed");
    grid.appendChild(modal);
    modal.classList.add("modal");
    modal.innerHTML = "You von! Start again?";
    modal.appendChild(resetBtn);
    modal.appendChild(gif);
    gif.style.display = "block";
    resetBtn.style.visibility = "visible";
    resetBtn.innerText = "Start again";
    resetBtn.addEventListener("click", () => {
      location.reload();
    });
  }
}
