const levelChooser = document.getElementById("levelChooser");
const grid = document.getElementById("grid");
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
  for (let i = 0; i < level.xSize * level.ySize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", `s${i}`);
    grid.appendChild(square);
    square.oncontextmenu = (e) => {
      e.preventDefault();
    };
  }
}
console.log(Math.random());
