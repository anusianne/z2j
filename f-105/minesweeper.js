const levelChooser = document.getElementById("levelChooser");
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const master = document.getElementById("master");
const levels = {
  easy_lvl: { xSize: 8, ySize: 8, bombAmount: 10 },
  medium_lvl: { xSize: 16, ySize: 16, bombAmount: 40 },
  master_lvl: { xSize: 30, ySize: 16, bombAmount: 99 },
};
easy.addEventListener("click", () => {
  createBoard(levels.easy_lvl);
});
medium.addEventListener("click", () => {
  createBoard(levels.medium_lvl);
});
master.addEventListener("click", () => {
  createBoard(levels.master_lvl);
});
function createBoard(level) {
  console.log(level.xSize);
}
