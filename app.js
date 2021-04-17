const grid = document.getElementById("grid");
const gridSquares = 200; // Number of squares = 200
const gridWidth = 10;

// Create 200 divs on the workspace
for (let i = 0; i < gridSquares; i += 1) {
  const divElt = document.createElement("div");
  grid.appendChild(divElt);
}

const squaresArray = Array.from(document.querySelectorAll(".grid div"));

// The tetrominoes
const lTetromino = [
  [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 2],
  [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 2],
  [gridWidth, gridWidth * 2, gridWidth * 2 + 1, gridWidth * 2 + 2],
];

const zTetromino = [
  [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
  [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1],
  [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
  [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1],
];

const tTetromino = [
  [1, gridWidth, gridWidth + 1, gridWidth + 2],
  [1, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
  [1, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
];

const oTetromino = [
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1],
  [0, 1, gridWidth, gridWidth + 1],
];

const iTetromino = [
  [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
  [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
  [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
];

const tetrominoesArray = [
  lTetromino,
  zTetromino,
  tTetromino,
  oTetromino,
  iTetromino,
];

// Draw the tetromino
let currentPos = 4;

let random = Math.floor(Math.random() * tetrominoesArray.length);
const current = tetrominoesArray[random][0];

function drawTetromino() {
  current.forEach((index) => {
    squaresArray[currentPos + index].classList.add("tetromino");
  });
}

// undraw the tetromino
function undrawTetromino() {
  current.forEach(index => {
    squaresArray[currentPos + index].classList.remove("tetromino");
  })
}
// invoque the function
drawTetromino();


