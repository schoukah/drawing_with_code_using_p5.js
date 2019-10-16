/*

Varying the colour of shapes

*/

// declare the variables for ellipse
let circleX, circleY, circleWidth, circleHeight;

// declare the variables for rect
let squareX, squareY, squareWidth, squareHeight;

// declare the variables for colour
let colours = [];

function setup() {
  createCanvas(400, 400);

  // assign values to the variables for ellipse
  circleX = 75;
  circleY = 275;
  circleWidth = 100;
  circleHeight = circleWidth;

  // assign values to the variables for rect
  // adjust squareX and squareY to be the coordinates of the centre
  squareX = 175 + 100/2;
  squareY = 225 + 100/2;
  squareWidth = 100;
  squareHeight = squareWidth;

  // assign values to the variables for colour
  colours = ['red','yellow','blue'];

  rectMode(CENTER);
  noLoop();
}

function draw() {
  background('lightgrey');

  drawGrid();

  // don't draw a line around the shapes
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleX = random(width);
  circleY = random(height);
  circleWidth = random(width);
  circleHeight = circleWidth;

  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);
  squareX = random(width);
  squareY = random(height);
  squareWidth = random(width);
  squareHeight = squareWidth;

  // draw the triangle
  fill(colours[2]);
  triangle(150,25,290,100,150,175);
  
  // randomize the array of colours
  colours = shuffle(colours);

}

function mouseClicked() {
  redraw();
}

function drawGrid() {
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
