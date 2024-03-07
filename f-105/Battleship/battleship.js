const boardSection = document.getElementById("boardSection");
const shipSection = document.getElementById("shipSection");
const player = document.querySelector("#player");
const ai = document.getElementById("ai");
const rotateBtn = document.querySelector(".rotateBtn");
const startBtn = document.querySelector('.startBtn');
const width = 10;
let angle = 0;
const shipTypes = Array.from(shipSection.children);
// Ship Class
class Ships {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}
const destroyer = new Ships("destroyer", 2);
const submarine = new Ships("submarine", 3);
const cruiser = new Ships("cruiser", 3);
const battleship = new Ships("battleship", 4);
const carrier = new Ships("carrier", 5);
const ships = [destroyer, submarine, cruiser, battleship, carrier];
let notDropped;
//Create Board:
function createBoard(user) {
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("gameContainer");
  gameContainer.id = user;
  for (let i = 1; i <= width * width; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.id = i;
    gameContainer.append(gridCell);
  }
  boardSection.append(gameContainer);
}
//Create Boards:
function createBoards() {
  createBoard("player");
  createBoard("ai");
}
createBoards();
//Rotate button to rotate ship's direction:
rotateBtn.addEventListener("click", rotateShip);
function rotateShip() {
  angle = angle === 0 ? 90 : 0;
  shipTypes.forEach(
    (shipType) => (shipType.style.transform = `rotate(${angle}deg)`)
  );
}
//Add Ship
function addShip(user, ship, startId) {
  const allBoardCells = document.querySelectorAll(`#${user} div`);
  let attempt = 0; // To avoid infinite loops
  let success = false;
  while (!success && attempt < 200) {
    // Limit attempts to prevent infinite loop
    attempt++;
    let randomBoolean = Math.random() < 0.5;
    let isHorizontal = user === "player" ? angle === 0 : randomBoolean;
    let randomStartIndex = Math.floor(Math.random() * width * width);
    let startIndex = startId ? startId : randomStartIndex;
    let validStart = isHorizontal
      ? startIndex % width <= width - ship.length
        ? startIndex
        : null // Horizontal invalid start
      : startIndex < width * (width - ship.length + 1)
      ? startIndex
      : null; // Vertical invalid start
    let shipCells = [];
    let isValidPlacement = true;
    for (let i = 0; i < ship.length; i++) {
      let index = isHorizontal
        ? Number(validStart) + i
        : Number(validStart) + i * width;
      const cell = allBoardCells[index];
      // Define a function to check surrounding cells
      const isSurroundingCellOccupied = (index) => {
        const surroundingOffsets = [
          -1,
          1,
          -width,
          width,
          -width - 1,
          -width + 1,
          width - 1,
          width + 1,
        ];
        return surroundingOffsets.some((offset) => {
          const surroundingIndex = index + offset;
          // Check bounds
          if (surroundingIndex < 0 || surroundingIndex >= width * width)
            return false;
          // Check horizontal wrapping
          if (
            Math.abs(offset) === 1 &&
            Math.floor((index + offset) / width) !== Math.floor(index / width)
          )
            return false;
          return allBoardCells[surroundingIndex]?.classList.contains(
            "occupied"
          );
        });
      };
      // Check if the cell or its surroundings are already occupied
      if (
        cell.classList.contains("occupied") ||
        isSurroundingCellOccupied(index)
      ) {
        isValidPlacement = false;
        break;
      }
      shipCells.push(cell);
    }
    if (isValidPlacement) {
      shipCells.forEach((shipCell) => {
        shipCell.classList.add(ship.name);
        shipCell.classList.add("occupied");
      });
      success = true;
    } else {
      if (user === "player") addShip("player", ship, startId);
    }
  }
}
ships.forEach((ship) => {
  addShip("ai", ship);
});
// Draggable elements
let draggedShip;
shipTypes.forEach((shipType) =>
  shipType.addEventListener("dragstart", dragStart)
);
const allPlayerCells = document.querySelectorAll("#player div");
allPlayerCells.forEach((playerCell) => {
  playerCell.addEventListener("dragover", dragOver);
  playerCell.addEventListener("drop", dropShip);
});
function dragStart(e) {
  notDropped = false;
  draggedShip = e.target;
  console.log(e.target);
  addShadowShip();
}
function dragOver(e) {
  e.preventDefault();
}
function dropShip(e) {
  const startId = e.target.id - 1;
  console.log(startId);
  const ship = ships[draggedShip.id];
  addShip("player", ship, startId);
  if (!notDropped) {
    draggedShip.remove();
  }
    if(shipSection.children.length === 0) {
        shipSection.style.display = "none";
        rotateBtn.style.display = "none"
    }
  removeShadowShip();
}
function addShadowShip() {
  draggedShip.classList.add("shadow");
}
function removeShadowShip() {
  draggedShip.classList.remove("shadow");
}
let gameOver = false;
let playerTurn;
// Start Game
function startGame() {
    if (shipSection.children.length!==0) {
      console.log('You must place the ships on the player board first!')
    } else {
      startBtn.style.display = 'none';
      const allBoardCells = document.querySelectorAll('#ai div');
      allBoardCells.forEach(cell=> cell.addEventListener('click', handleClick));
    }
    playerTurn = true;
}
startBtn.addEventListener('click', startGame);
let playerHits = [];
let aiHits = [];
const playerSunkedShips = [];
const aiSunkedShips = [];
function handleClick(e) {
  if(!gameOver) {
    if(e.target.classList.contains('occupied')) {
      //basic highlighting
            e.target.style.backgroundColor = "red";
            e.target.classList.add('boom');
        console.log('You hit the ai ship.');
    }
      let classes = Array.from(e.target.classList);
      classes = classes.filter(className=>className !== 'gridCell');
      classes = classes.filter(className=>className !== 'boom');
      classes = classes.filter(className=>className !== 'occupied');
      playerHits.push(...classes);
      console.log(playerHits)
    checkScore('player', playerHits, playerSunkedShips);
    }
    if (!e.target.classList.contains('occupied')) {
      console.log('Nothing hit this time.');
      e.target.style.backgroundColor = 'grey';
    }
    playerTurn = false;
    const allBoardCells = document.querySelectorAll('#ai div');
    allBoardCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
    setTimeout(aiMove, 2000)
}
function checkScore(user, userHits, userSunkedShips) {
  function checkShip(shipName, shipLength) {
    if(userHits.filter(storedShipName => storedShipName === shipName).length === shipLength) {
      if(user === 'player') {
        playerHits = userHits.filter(storedShipName => storedShipName !== shipName);
      }
      if(user === 'ai') {
        aiHits = userHits.filter(storedShipName => storedShipName !== shipName);
      }
      console.log(`You sunk the ${user}'s ${shipName}.`)
      userSunkedShips.push(shipName);
    }
  }
  checkShip('destroyer', 2);
  checkShip('submarine', 3);
  checkShip('cruiser', 3);
  checkShip('battleship', 4);
  checkShip('carrier', 5);
  console.log('playerHits', playerHits);
  console.log('playerSunkedShips', playerSunkedShips);

  if (playerSunkedShips === 5) {
    console.log('You won, you sunked the ai ships.');
    gameOver = true;
  }
  if (aiSunkedShips === 5) {
    console.log('Ai won, you loose with your ships.');
    gameOver = true;
  }
}
//ai move function
function aiMove() {
  if (!gameOver) {
    console.log('Computer goes!');
    setTimeout(() => {
      let randomMove = Math.floor(Math.random() * width * width);
      if(allPlayerCells[randomMove].classList.contains('occupied') &&
          allPlayerCells[randomMove].classList.contains('boom')
      ) {
        aiMove()
        return;
      } else if (
          allPlayerCells[randomMove].classList.contains('occupied') &&
          !allPlayerCells[randomMove].classList.contains('boom'))
      {
        allPlayerCells[randomMove].classList.add('boom');
        console.log('The computer hit your ship.');
        let classes = Array.from(allPlayerCells[randomMove].classList);
        classes = classes.filter(className=>className !== 'gridCell');
        classes = classes.filter(className=>className !== 'boom');
        classes = classes.filter(className=>className !== 'occupied');
        aiHits.push(...classes);
        checkScore('ai', aiHits, aiSunkedShips);
      } else {
        console.log("Nothing hit this time.");
        allPlayerCells[randomMove].style.backgroundColor = 'grey';
      }
    }, 3000);
    setTimeout(() => {
      playerTurn = true;
      console.log('Your move now. ');
      const allBoardCells = document.querySelectorAll('#ai div');
      allBoardCells.forEach(cell => cell.addEventListener('click', handleClick))
    }, 6000)
  }
}