const levelChooser = document.getElementById("levelChooser");
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
  console.log(level.xSize);
}
