/*

Varying the colour of shapes

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;
let circleWidth = 100;
let circleHeight = circleWidth;

// variables for rect
let squareX = 175;
let squareY = 225;
let squareWidth = 100;
let squareHeight = squareWidth;

// variables for colour
let colours = ['red','yellow','blue'];

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);
  shuffleArray(colours);

  // draw the circle
  fill(colours[0]);
  circleX = random(width);
  circleY = random(height);
  circleWidth = random(width);
  circleHeight = circleWidth;
  ellipse(circleX, circleY, circleWidth, circleHeight);

  // draw the square
  fill(colours[1]);
  squareX = random(width);
  squareY = random(height);
  squareWidth = random(width);
  squareHeight = squareWidth;
  rect(squareX, squareY, squareWidth, squareHeight);

  // draw the triangle
  fill(colours[2]);
  triangle(150,25,290,100,150,175);
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
        const j = floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
