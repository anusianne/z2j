const rotateBtn = document.getElementById("rotateBtn");
const startBtn = document.getElementById("startBtn");
const shipContainer = document.querySelector(".shipContainer");
const gameBoardsContainer = document.querySelector("#gameboards-container");
const shipTypes = Array.from(shipContainer.children);
//shipTypes rotate
let angle = 0;
function rotate() {
  angle = angle === 0 ? 90 : 0;
  shipTypes.forEach(
    (shipType) => (shipType.style.transform = `rotate(${angle}deg)`)
  );
}
rotateBtn.addEventListener("click", rotate);
//creating boards
const width = 10;
function createBoard(color, user) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.classList.add("gameBoard");
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;
  //create 100 gridcells for each board
  for (let i = 0; i < width * width; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.id = i;
    gameBoardContainer.append(gridCell);
  }
  gameBoardsContainer.append(gameBoardContainer);
}
function createBoards() {
  createBoard("pink", "player");
  createBoard("yellow", "ai");
}
createBoards();
// Ship class
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}
const destroyer = new Ship("destroyer", 2);
const submarine = new Ship("submarine", 3);
const cruiser = new Ship("cruiser", 3);
const battleship = new Ship("battleship", 4);
const carrier = new Ship("carrier", 5);
const ships = [destroyer, submarine, cruiser, battleship, carrier];
let notDropped;
function getValidity(allBoardCells, isHorizontal, startIndex, ship) {
  let shipCells = [];
  let validStart = isHorizontal
      ? startIndex <= width * width - ship.length
          ? startIndex
          : width * width - ship.length
      : //isVertical??
      startIndex <= width * width - width * ship.length
          ? startIndex
          : startIndex - ship.length * width + width;
  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipCells.push(allBoardCells[Number(validStart) + i]);
    } else {
      shipCells.push(allBoardCells[Number(validStart) + i * width]);
    }
  }
  let valid;
  if (isHorizontal) {
    valid = shipCells.every(
        (_shipCell, index) =>
            shipCells[0].id % width !== width - (shipCells.length - (index + 1))
    );
  } else {
    valid = shipCells.every(
        (_shipCell, index) => shipCells[0].id < 90 + (width * index + 1)
    );
  }
  const notTaken = shipCells.every(
      (shipCell) => !shipCell.classList.contains("taken")
  );
  return {shipCells, valid, notTaken}
}
//Adding randomly ship to an ai board
function addShip(user, ship, startId) {
  const allBoardCells = document.querySelectorAll(`#${user} div`);
  let randomStartIndex = Math.floor(Math.random() * width * width);
  let startIndex = startId ? startId : randomStartIndex;
  let randomBoolean = Math.random() < 0.5;
  // console.log(randomStartIndex);
  let isHorizontal = user === "player" ? angle === 0 : randomBoolean;
const {shipCells, valid, notTaken} = getValidity(allBoardCells,isHorizontal,startIndex,ship)
  if (valid && notTaken) {
    shipCells.forEach((shipCell) => {
      shipCell.classList.add(ship.name);
      shipCell.classList.add("taken");
    });
  } else {
    if (user === "ai") addShip(user, ship, startId);
    if (user === "player") notDropped = true;
  }
}
ships.forEach((ship) =>
    addShip("ai", ship));
//Drag&drop ships
let draggedShip;
shipTypes.forEach((shipType) =>
  shipType.addEventListener("dragstart", dragStart)
);
const allPlayerCells = document.querySelectorAll("#player div");
allPlayerCells.forEach((allPlayerCell) => {
  allPlayerCell.addEventListener("dragover", dragOver);
  allPlayerCell.addEventListener("drop", dropShip);
});
function dragStart(e) {
  // console.log(e.target);
  notDropped = false;
  draggedShip = e.target;
}
function dragOver(e) {
  e.preventDefault();
  const ship = ships[draggedShip.id];
  highlightArea(e.target.id, ship)
}
function dropShip(e) {
  const startId = e.target.id;
  const ship = ships[draggedShip.id];
  addShip("player", ship, startId);
  if (!notDropped) {
    draggedShip.remove();
  }
  if (shipContainer.children.length === 0) {
    shipContainer.textContent =
      "You dispatched the ships. Let's start and play!";
      rotateBtn.style.display = "none";
    const startBtn = document.getElementById("startBtn");
    startBtn.style.display = "block";
    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      shipContainer.style.display = "none";
    });
  }
}
//Highlighting
function highlightArea(startIndex, ship) {
  const allBoardBlocks =document.querySelectorAll('#player div');
  let isHorizontal = angle === 0;
  const {shipCells, valid, notTaken} = getValidity(allBoardBlocks,isHorizontal,startIndex,ship)
  if(valid&&notTaken) {
    shipCells.forEach(shipCell => {
      shipCell.classList.add('hover');
      setTimeout(() => shipCell.classList.remove('hover'), 500)
    })
  }
}
let gameOver = false;
let playerTurn;

//Start Game
function startGame() {
  if (playerTurn === undefined) {
    if (shipContainer.children.length !== 0) {
      console.log('place all ships on the board!');
    } else {
      const allBoardCells = document.querySelectorAll('#ai div');
      allBoardCells.forEach(block => block.addEventListener('click', handleClick))
    }
    playerTurn = true;
  }
}
startBtn.addEventListener('click', startGame)
let playerHits = [];
let aiHits = [];
let playerSunkShips = [];
let aiSunkShips = [];
function handleClick(e) {
  if(!gameOver) {
    if(e.target.classList.contains('taken')) {
      e.target.classList.add('boom');
      let classes = Array.from(e.target.classList);
      classes = classes.filter(className => className!== 'gridCell');
      classes = classes.filter(className => className!== 'boom');
      classes = classes.filter(className => className!== 'taken');
      playerHits.push(...classes);
      aiHits.push(...classes);
      checkScore('player',playerHits, playerSunkShips)
    }
    if (!e.target.classList.contains('taken')) {
      e.target.classList.add('empty')
    }
    playerTurn = false;
    const allBoardBlocks = document.querySelectorAll('#ai div');
    allBoardBlocks.forEach(block => block.replaceWith(block.cloneNode(true)));
    setTimeout(computerTurn, 3000);
  }
}


//Computer Turn
function computerTurn() {
  if (!gameOver) {
    setTimeout(() => {
      let randomGo = Math.floor(Math.random() * width * width);
      const allBoardBlocks = document.querySelectorAll('#player div');
      if (allBoardBlocks[randomGo].classList.contains('taken') && allBoardBlocks[randomGo].classList.contains('boom')
      ) {
        computerTurn();
        return;
      } else if (allBoardBlocks[randomGo].classList.contains('taken') && !allBoardBlocks[randomGo].classList.contains('boom')) {
        allBoardBlocks[randomGo].classList.add('boom');
        let classes = Array.from(allBoardBlocks[randomGo].classList);
        classes = classes.filter(className => className !== 'gridCell');
        classes = classes.filter(className => className !== 'boom');
        classes = classes.filter(className => className !== 'taken');
        aiHits.push(...classes);
        checkScore('ai', aiHits, aiSunkShips)
      } else {
        allBoardBlocks[randomGo].classList.add('empty');
      }
    }, 3000)
    setTimeout(() => {
playerTurn = true;
const allBoardBlocks = document.querySelectorAll('#ai div');
allBoardBlocks.forEach(block => block.addEventListener('click', handleClick))
    }, 6000)
  }
}
function checkScore(user, userHits, userSunkShips) {
function checkShip(shipName, shipLength) {
  if (userHits.filter(storedShipName => storedShipName === shipName).length === shipLength) {
    if (user === 'player') {
      console.log(`${user}'s ${shipName}`);
      playerHits = userHits.filter(storedShipName => storedShipName !== shipName);
    }
    else {
      console.log(`${user}'s ${shipName}`);
      aiHits = userHits.filter(storedShipName => storedShipName !== shipName);
    }
    userSunkShips.push(shipName);
  }
}
checkShip('destoyer', 2);
checkShip('submarine', 3);
checkShip('cruiser', 3);
checkShip('battleship', 4);
checkShip('carrier', 5);
console.log('playerHits' ,playerHits);
console.log('aiHits', aiHits);
  if(playerSunkShips.length === 5) {
    console.log('you sunk all the computers ships. You won!');
    gameOver=true;
  }
  if(aiSunkShips.length === 5) {
    console.log('computer won!');
    gameOver=true;
  }
}