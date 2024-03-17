const boardSection = document.getElementById('boardSection');
const shipSection = document.getElementById('shipSection');
const player = document.querySelector('#player');
const ai = document.getElementById('ai');
const rotateBtn = document.querySelector('.rotateBtn');
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
const destroyer = new Ships('destroyer', 2);
const submarine = new Ships('submarine', 3);
const cruiser = new Ships('cruiser', 3);
const battleship = new Ships('battleship', 4);
const carrier = new Ships('carrier', 5);
const ships = [destroyer, submarine, cruiser, battleship, carrier];
let notDropped;
//Create Board:
function createBoard(user) {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('gameContainer');
    gameContainer.id = user;
    for (let i = 1; i <= width * width; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        gridCell.id = i;
        gameContainer.append(gridCell);
    }
    boardSection.append(gameContainer);
}
//Create Boards:
function createBoards() {
    createBoard('player');
    createBoard('ai');
}
createBoards();
//Rotate button to rotate ship's direction:
rotateBtn.addEventListener('click', rotateShip);
function rotateShip() {
    angle = angle === 0 ? 90 : 0;
    shipTypes.forEach(
        (shipType) => (shipType.style.transform = `rotate(${angle}deg)`)
    );
}
//Add Ship
function addShip(user, ship, startId) {
    const allBoardCells = document.querySelectorAll(`#${user} div`);
    let attempt = 0;
    let success = false;
    const maxAttempts = 200;
    const boardWidth = width;

    while (!success && attempt < maxAttempts) {
        attempt++;
        const randomBoolean = Math.random() < 0.5;
        const isHorizontal = user === 'player' ? angle === 0 : randomBoolean;
        const randomStartIndex = Math.floor(Math.random() * width * width);
        const startIndex = startId !== undefined ? startId : randomStartIndex;
        let validStart;

        if (isHorizontal) {
            if (isHorizontal) {
                validStart =
                    (startIndex % boardWidth) + ship.length <= boardWidth
                        ? startIndex
                        : null;
            }
        } else {
            validStart =
                startIndex < boardWidth * (boardWidth - ship.length + 1)
                    ? startIndex
                    : null;
        }
        let isValidPlacement;
        if (validStart !== null) {
            const shipCells = [];
            for (let i = 0; i < ship.length; i++) {
                let index = isHorizontal
                    ? Number(validStart) + i
                    : Number(validStart) + i * boardWidth;
                if (index >= allBoardCells.length || index < 0) {
                    isValidPlacement = false;
                    break;
                }
                const cell = allBoardCells[index];
                if (
                    cell.classList.contains('occupied') ||
                    isSurroundingCellOccupied(index, allBoardCells)
                ) {
                    isValidPlacement = false;
                    break;
                } else {
                    isValidPlacement = true;
                }
                shipCells.push(cell);
            }
            if (isValidPlacement) {
                shipCells.forEach((shipCell) => {
                    shipCell.classList.add(ship.name);
                    shipCell.classList.add('occupied');
                });
                success = true;
            }
        }
        if (!success && startId !== undefined) {
            alert(
                'Nie można umieścić statku w tej lokalizacji. Proszę spróbować gdzie indziej.'
            );
            return false;
        }
    }
    return success;
}
ships.forEach((ship) => {
    addShip('ai', ship);
});
function isSurroundingCellOccupied(index, allBoardCells) {
    const boardWidth = width;
    const row = Math.floor(index / boardWidth);
    const col = index % boardWidth;
    const positions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    for (let pos of positions) {
        const newRow = row + pos[0];
        const newCol = col + pos[1];
        const newIndex = newRow * boardWidth + newCol;
        if (
            newRow >= 0 &&
            newRow <= boardWidth - 1 &&
            newCol >= 0 &&
            newCol <= boardWidth - 1
        ) {
            const cell = allBoardCells[newIndex];
            if (cell && cell.classList.contains('occupied')) {
                return true;
            }
        }
    }
    return false;
}
// Draggable elements
let draggedShip;
let isShipDroppedOnBoard = false;
shipTypes.forEach((shipType) => {
    shipType.addEventListener('dragstart', dragStart);
});
const allPlayerCells = document.querySelectorAll('#player div');
allPlayerCells.forEach((playerCell) => {
    playerCell.addEventListener('dragover', dragOver);
    playerCell.addEventListener('drop', dropShip);
});
// Dodajemy obsługę zdarzenia dragend dla statków
shipTypes.forEach((shipType) => {
    shipType.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    notDropped = false;
    draggedShip = e.target;
    addShadowShip();
}
function dragOver(e) {
    e.preventDefault();
    clearHighlight();
    // Clear existing highlights before setting new ones
    const cell = e.target;
    const startId = parseInt(cell.id, 10);
    const shipLength = ships.find(
        (ship) => ship.name === draggedShip.getAttribute('data-name')
    ).length;
    const cellsToHighlight = getCellsToHighlight(
        startId,
        shipLength,
        angle === 0
    );
    cellsToHighlight.forEach((id) => {
        const cell = document.querySelector(`#player div[id="${id}"]`);
        if (cell) cell.style.backgroundColor = 'pink';
    });
}

function dropShip(e) {
    isShipDroppedOnBoard = true;
    e.preventDefault();
    const startId = parseInt(e.target.id, 10) - 1;
    const shipName = draggedShip.getAttribute('data-name');
    const ship = ships.find((s) => s.name === shipName);
    const success = addShip('player', ship, startId);
    clearHighlight();
    if (success) {
        draggedShip.style.display = 'none'; // Ukryj statek po pomyślnym upuszczeniu
    } else {
        // Przenieś statek z powrotem do shipSection
        draggedShip.classList.remove('shadow');
        draggedShip.style.visibility = 'visible';
    }
    checkAllShipsPlaced();
}
function dragEnd(e) {
    // Sprawdź, czy statek nie został upuszczony na planszy
    if (!isShipDroppedOnBoard) {
        alert(
            'Nie można umieścić statku poza planszą. Proszę spróbować ponownie.'
        );
        clearHighlight();
        // Przenieś statek z powrotem do shipSection
        draggedShip.style.visibility = 'visible';
        draggedShip.classList.remove('shadow'); // Ponownie wyświetl statek
    }
    // Reset flagi na przyszłość
    isShipDroppedOnBoard = false;
}
// Helper function to clear highlighted cells
function clearHighlight() {
    document.querySelectorAll('#player .gridCell').forEach((cell) => {
        cell.style.backgroundColor = ''; // Reset background color
    });
}
// Helper function to get cells to highlight
function getCellsToHighlight(startId, length, isHorizontal) {
    const cells = [];
    for (let i = 0; i < length; i++) {
        let cellId = isHorizontal ? startId + i : startId + i * width;
        if (isHorizontal) {
            // Prevent wrapping: if moving to the next row, break
            if (
                Math.floor((startId - 1) / width) !==
                Math.floor((cellId - 1) / width)
            ) {
                break;
            }
        }
        if (cellId > width * width) break; // Prevent going out of bounds
        cells.push(cellId);
    }
    return cells;
}
shipTypes.forEach((ship, index) => {
    ship.setAttribute('data-name', ships[index].name);
});

function checkAllShipsPlaced() {
    const visibleShips = Array.from(shipSection.children).filter(
        (ship) => ship.style.display !== 'none'
    );
    if (visibleShips.length === 0) {
        shipSection.style.display = 'none';
        rotateBtn.style.display = 'none';
    }
}
function addShadowShip() {
    draggedShip.classList.add('shadow');
}
let gameOver = false;
let playerTurn;
// Start Game
function startGame() {
    if (shipSection.children.length !== 0) {
        console.log('You must place the ships on the player board first!');
    } else {
        startBtn.style.display = 'none';
        const allBoardCells = document.querySelectorAll('#ai div');
        allBoardCells.forEach((cell) =>
            cell.addEventListener('click', handleClick)
        );
    }
    playerTurn = true;
}
startBtn.addEventListener('click', startGame);
let playerHits = [];
let aiHits = [];
const playerSunkedShips = [];
const aiSunkedShips = [];
function handleClick(e) {
    if (!gameOver) {
        if (e.target.classList.contains('occupied')) {
            //basic highlighting
            e.target.style.backgroundColor = 'red';
            e.target.classList.add('boom');
            console.log('You hit the ai ship.');
        }
        let classes = Array.from(e.target.classList);
        classes = classes.filter((className) => className !== 'gridCell');
        classes = classes.filter((className) => className !== 'boom');
        classes = classes.filter((className) => className !== 'occupied');
        playerHits.push(...classes);
        console.log(playerHits);
        checkScore('player', playerHits, playerSunkedShips);
    }
    if (!e.target.classList.contains('occupied')) {
        console.log('Nothing hit this time.');
        e.target.style.backgroundColor = 'grey';
    }
    playerTurn = false;
    const allBoardCells = document.querySelectorAll('#ai div');
    allBoardCells.forEach((cell) => cell.replaceWith(cell.cloneNode(true)));
    setTimeout(aiMove, 2000);
}
function checkScore(user, userHits, userSunkedShips) {
    function checkShip(shipName, shipLength) {
        if (
            userHits.filter((storedShipName) => storedShipName === shipName)
                .length === shipLength
        ) {
            if (user === 'player') {
                playerHits = userHits.filter(
                    (storedShipName) => storedShipName !== shipName
                );
            }
            if (user === 'ai') {
                aiHits = userHits.filter(
                    (storedShipName) => storedShipName !== shipName
                );
            }
            console.log(`You sunk the ${user}'s ${shipName}.`);
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
            if (
                allPlayerCells[randomMove].classList.contains('occupied') &&
                allPlayerCells[randomMove].classList.contains('boom')
            ) {
                aiMove();
                return;
            } else if (
                allPlayerCells[randomMove].classList.contains('occupied') &&
                !allPlayerCells[randomMove].classList.contains('boom')
            ) {
                allPlayerCells[randomMove].classList.add('boom');
                console.log('The computer hit your ship.');
                let classes = Array.from(allPlayerCells[randomMove].classList);
                classes = classes.filter(
                    (className) => className !== 'gridCell'
                );
                classes = classes.filter((className) => className !== 'boom');
                classes = classes.filter(
                    (className) => className !== 'occupied'
                );
                aiHits.push(...classes);
                checkScore('ai', aiHits, aiSunkedShips);
            } else {
                console.log('Nothing hit this time.');
                allPlayerCells[randomMove].style.backgroundColor = 'grey';
            }
        }, 3000);
        setTimeout(() => {
            playerTurn = true;
            console.log('Your move now. ');
            const allBoardCells = document.querySelectorAll('#ai div');
            allBoardCells.forEach((cell) =>
                cell.addEventListener('click', handleClick)
            );
        }, 6000);
    }
}
