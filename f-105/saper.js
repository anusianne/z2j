const levelChooser = {
  easy: document.getElementById("easy"),
  medium: document.getElementById("medium"),
  master: document.getElementById("master"),
};
let xSize;
let ySize;
let bombAmount;
const gridContainer = document.getElementById("grid-container");

levelChooser.easy.addEventListener("click", () => createBoard("easy"));
levelChooser.medium.addEventListener("click", () => createBoard("medium"));
levelChooser.master.addEventListener("click", () => createBoard("master"));

function createBoard(levelOption) {
  switch (levelOption) {
    case "easy":
      xSize = 8;
      ySize = 8;
      bombAmount = 10;
      break;
    case "medium":
      xSize = 16;
      ySize = 16;
      bombAmount = 40;
      break;
    case "master":
      xSize = 30;
      ySize = 16;
      bombAmount = 99;
      break;
  }
  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = y;
      cell.dataset.col = x;
      cell.addEventListener("click", handleCellClick);
      gridContainer.appendChild(cell);
    }
  }

  // Generate bomb positions
  const bombPositions = generateBombPositions();

  console.log(`${xSize} x ${ySize} grid created with ${bombAmount} bombs.`);
}

function generateBombPositions() {
  const bombPositions = [];
  while (bombPositions.length < bombAmount) {
    const x = Math.floor(Math.random() * xSize);
    const y = Math.floor(Math.random() * ySize);
    const position = `${x}-${y}`;
    if (!bombPositions.includes(position)) {
      bombPositions.push(position);
      const cell = document.querySelector(`[data-row="${y}"][data-col="${x}"]`);
      cell.classList.add("bomb");
    }
  }
  return bombPositions;
}

function handleCellClick(event) {
  const cell = event.target;
  const isBomb = cell.classList.contains("bomb");
  if (isBomb) {
    // Handle game over (e.g., show all bombs and end the game)
    cell.style.backgroundColor = "red";
  } else {
    // Handle cell reveal logic (e.g., show numbers, recursively reveal adjacent cells)
    cell.style.backgroundColor = "#ddd";
    // Add logic to display numbers or recursively reveal adjacent cells
  }
}

// Call createBoard with an initial level (e.g., "easy")
createBoard("easy");

// const levelBtns = document.getElementsByClassName("level");
// const levelChooser = document.getElementById("levelChooser");
// const levelOption = {
//   easy: document.getElementById("easy"),
//   medium: document.getElementById("medium"),
//   master: document.getElementById("master"),
// };
// let mineCounter = 0;
// const boxes = document.getElementsByClassName("box");
// const totalBoxesPerOptions = { easy: 64, medium: 256, master: 480 };
// const btnUndo = document.createElement("button");
// levelOption.easy.addEventListener("click", function () {
//   let newDiv = document.createElement("div");
//   levelChooser.style.display = "none";
//   newDiv.classList.add("container");
//   document.body.appendChild(newDiv);
//   for (let y = 1; y <= 8; y++) {
//     for (let x = 1; x <= 8; x++) {
//       let box = document.createElement("div");
//       box.setAttribute("isFlagged", "false");
//       newDiv.style.gridTemplateColumns = "repeat(8,50px)";
//       newDiv.style.gridTemplateRows = "repeat(8,50px)";
//       box.classList.add("box");
//       box.setAttribute("id", "b" + y.toString() + x.toString());
//       box.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         rightClick(box);
//       });
//       newDiv.appendChild(box);
//       box.addEventListener("click", () => {
//         box.className = "clickedBox";
//         countMinesAround(box);
//       });
//     }
//   }

//   const totalBoxes = parseInt(getTotalBoxes(totalBoxesPerOptions));
//   const totalMines = parseInt(numberOfMines(totalBoxes));
//   while (mineCounter < totalMines) {
//     console.log("total mines: " + totalMines);
//     console.log(boxes);
//     for (let box = 0; box < boxes.length - 1; box++) {
//       let divider = parseFloat(totalMines / totalBoxes).toFixed(4);
//       console.log("trying to plant " + divider);
//       if (Math.random() <= parseFloat(divider) && mineCounter < totalMines) {
//         boxes.item(box).setAttribute("hasMine", "true");
//         mineCounter += 1;
//       }
//     }
//     document.body.appendChild(btnUndo);
//     btnUndo.innerText = "Undo";
//     btnUndo.addEventListener("click", function () {
//       location.reload();
//     });
//   }
// });
// levelOption.medium.addEventListener("click", function () {
//   let newDiv = document.createElement("div");
//   levelChooser.style.display = "none";
//   newDiv.classList.add("container");
//   document.body.appendChild(newDiv);
//   for (let y = 1; y <= 16; y++) {
//     for (let x = 1; x <= 16; x++) {
//       let box = document.createElement("div");
//       box.setAttribute("isFlagged", "false");
//       box.classList.add("box");
//       box.setAttribute("id", "b" + y.toString() + x.toString());
//       newDiv.style.gridTemplateColumns = "repeat(16,50px)";
//       newDiv.style.gridTemplateRows = "repeat(16,50px)";
//       box.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         rightClick(box);
//       });
//       newDiv.appendChild(box);
//       box.addEventListener("click", () => {
//         box.className = "clickedBox";
//       });
//     }
//   }
//   document.body.appendChild(btnUndo);
//   btnUndo.innerText = "Undo";
//   btnUndo.addEventListener("click", function () {
//     location.reload();
//   });
// });
// levelOption.master.addEventListener("click", function () {
//   let newDiv = document.createElement("div");
//   levelChooser.style.display = "none";
//   newDiv.classList.add("container");
//   document.body.appendChild(newDiv);
//   for (let y = 1; y <= 30; y++) {
//     for (let x = 1; x <= 16; x++) {
//       let box = document.createElement("div");
//       box.classList.add("box");
//       box.setAttribute("isFlagged", "false");
//       box.setAttribute("id", "b" + y.toString() + x.toString());
//       newDiv.style.gridTemplateColumns = "repeat(30,50px)";
//       newDiv.style.gridTemplateRows = "repeat(16,50px)";
//       box.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         rightClick(box);
//       });
//       newDiv.appendChild(box);
//       box.addEventListener("click", () => {
//         box.className = "clickedBox";
//       });
//     }
//   }
//   document.body.appendChild(btnUndo);
//   btnUndo.innerText = "Undo";
//   btnUndo.addEventListener("click", function () {
//     location.reload();
//   });
// });
// function rightClick(box) {
//   if (box.getAttribute("isFlagged") === "false") {
//     box.setAttribute("isFlagged", "true");
//   } else {
//     box.setAttribute("isFlagged", "false");
//   }
//   box.classList.toggle("isFlagged", box.getAttribute("isFlagged") === "true");
// }
// function numberOfMines(totalBoxes) {
//   switch (totalBoxes) {
//     case totalBoxes.easy:
//       return 10;
//     case totalBoxes.medium:
//       return 40;
//     case totalBoxes.master:
//       return 90;
//     default:
//       return 10;
//   }
// }
// function getTotalBoxes(totalBoxesPerOptions) {
//   switch (totalBoxesPerOptions) {
//     case totalBoxesPerOptions.easy:
//       return 64;
//     case totalBoxesPerOptions.medium:
//       return 256;
//     case totalBoxesPerOptions.master:
//       return 480;
//     default:
//       return 64;
//   }
// }
// function countMinesAround(box) {
//   let bombCount = 0;
//   const boxClickedId = box.id;
//   boxarr = boxClickedId.split("").shift();
//   console.log(boxarr);
//   for (let y = -1; y <= 1; y++) {
//     for (let x = -1; x <= 1; x++) {
//       if (y === 0 && x === 0) {
//         continue;
//       }
//       const idToSearch = "b" + y.toString() + x.toString();
//       if (boxes.some((b) => b.id === idToSearch)) {
//         bombCount++;
//       }
//     }
//   }
//   return bombCount;
// }
