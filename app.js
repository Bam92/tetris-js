const grid = document.getElementById("grid");
const gridSquares = 211; // Number of squares = 200
const COLS = 10;

// Create 211 divs on the workspace
for (let i = 0; i < gridSquares; i += 1) {
  const divElt = document.createElement("div");
  if (i >= 200) divElt.classList.add("taken");
  grid.appendChild(divElt);
}

const squaresArray = Array.from(document.querySelectorAll(".grid div"));

// The tetrominoes
const lTetromino = [
  [0, COLS, COLS + 1, COLS * 2 + 1],
  [COLS, COLS + 1, COLS + 2, COLS * 2 + 2],
  [1, COLS + 1, COLS * 2 + 1, COLS * 2],
  [COLS, COLS * 2, COLS * 2 + 1, COLS * 2 + 2],
];

const zTetromino = [
  [0, COLS, COLS + 1, COLS * 2 + 1],
  [COLS + 1, COLS + 2, COLS * 2, COLS * 2 + 1],
  [0, COLS, COLS + 1, COLS * 2 + 1],
  [COLS + 1, COLS + 2, COLS * 2, COLS * 2 + 1],
];

const tTetromino = [
  [1, COLS, COLS + 1, COLS + 2],
  [1, COLS + 1, COLS + 2, COLS * 2 + 1],
  [COLS, COLS + 1, COLS + 2, COLS * 2 + 1],
  [1, COLS, COLS + 1, COLS * 2 + 1],
];

const oTetromino = [
  [0, 1, COLS, COLS + 1],
  [0, 1, COLS, COLS + 1],
  [0, 1, COLS, COLS + 1],
  [0, 1, COLS, COLS + 1],
];

const iTetromino = [
  [1, COLS + 1, COLS * 2 + 1, COLS * 3 + 1],
  [COLS, COLS + 1, COLS + 2, COLS + 3],
  [1, COLS + 1, COLS * 2 + 1, COLS * 3 + 1],
  [COLS, COLS + 1, COLS + 2, COLS + 3],
];

const tetrominoesArray = [
  lTetromino,
  zTetromino,
  tTetromino,
  oTetromino,
  iTetromino,
];

document.addEventListener("keyup", control);

// Draw the tetromino
let currentPos = 3;
let currentRotation = 0;

let random = Math.floor(Math.random() * tetrominoesArray.length);
let current = tetrominoesArray[random][currentRotation];

function drawTetromino() {
  current.forEach((index) => {
    squaresArray[currentPos + index].classList.add("tetromino");
  });
}

// undraw the tetromino
function undrawTetromino() {
  current.forEach((index) => {
    squaresArray[currentPos + index].classList.remove("tetromino");
  });
}

function control(e) {
  if (e.keyCode === 37) moveLeft();
  else if (e.keyCode === 38) {
    // rotate()
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
}
// Move the tetromino down
timerId = setInterval(moveDown, 1000);

function moveDown() {
  undrawTetromino();
  currentPos += COLS;
  drawTetromino();
  freeze();
}

// Move left
function moveLeft() {
  undrawTetromino();
  const isAtLeftEdge = current.some(
    (index) => (currentPos + index) % COLS === 0
  );

  if (!isAtLeftEdge) currentPos -= 1;

  if (
    current.some((index) =>
      squaresArray[currentPos + index].classList.contains("taken")
    )
  ) {
    currentPos += 1;
  }

  drawTetromino();
}

// Move right
function moveRight() {
  undrawTetromino();
  const isAtRightEdge = current.some(
    (index) => (currentPos + index) % COLS === COLS - 1
  );

  if (!isAtRightEdge) currentPos += 1;

  if (
    current.some((index) =>
      squaresArray[currentPos + index].classList.contains("taken")
    )
  ) {
    currentPos -= 1;
  }

  drawTetromino();
}

// Freeze
function freeze() {
  if (
    current.some((index) =>
      squaresArray[currentPos + index + COLS].classList.contains("taken")
    )
  ) {
    current.forEach((index) =>
      squaresArray[currentPos + index].classList.add("taken")
    );
    // new tetromino
    random = Math.floor(Math.random() * tetrominoesArray.length);
    current = tetrominoesArray[random][currentRotation];
    currentPos = 4;
    drawTetromino();
  }
}

moveDown();
