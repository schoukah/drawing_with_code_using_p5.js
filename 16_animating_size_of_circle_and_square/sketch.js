/*

Animating the size of the circle and square

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;
let circleWidth = 100;
let circleHeight = circleWidth;
let circleXNew, circleYNew, circleWidthNew, circleHeightNew;

// variables for rect
let squareX = 175;
let squareY = 225;
let squareWidth = 100;
let squareHeight = squareWidth;
let squareXNew, squareYNew, squareWidthNew, squareHeightNew;

// variables for colour
let colours = ['red','yellow','blue'];

// variables for animation flags
let circleIsDone = false;
let squareIsDone = false;

function setup() {
  createCanvas(400, 400);

  // initialize the parameters for the new circle
  circleXNew = random(width);
  circleYNew = random(height);
  circleWidthNew = random(width);
  circleHeightNew = circleWidthNew;

  // set the initial parameters for the new square
  squareXNew = random(width);
  squareYNew = random(height);
  squareWidthNew = random(width);
  squareHeightNew = squareWidthNew;
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleX += (circleXNew-circleX)/10;
  circleY += (circleYNew-circleY)/10;
  circleWidth += (circleWidthNew - circleWidth)/10;
  circleHeight = circleWidth;
  if (circleXNew - circleX < 1 && circleYNew - circleY < 1 && circleWidthNew - circleWidth < 1) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);
  squareX += (squareXNew-squareX)/10;
  squareY += (squareYNew-squareY)/10;
  squareWidth += (squareWidthNew - squareWidth)/10;
  squareHeight = squareWidth;
  if (squareXNew - squareX < 1 && squareYNew - squareY < 11 && circleWidthNew - circleWidth < 1) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  triangle(150,25,290,100,150,175);

  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true) {
    circleXNew = random(width);
    circleYNew = random(height);
    circleWidthNew = random(width);
    circleHeightNew = circleWidthNew;
    squareXNew = random(width);
    squareYNew = random(height);
    squareWidthNew = random(width);
    squareHeightNew = squareWidthNew;
    circleIsDone = false;
    squareIsDone = false;
    shuffleArray(colours);
  }
}

function drawGraph() {
  stroke('grey');
  strokeWeight(1);
  // draw a grid
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 200, 400, 200);
  line(0, 300, 400, 300);
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
