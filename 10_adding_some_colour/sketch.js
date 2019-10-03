/*

Adding colour to the shapes

*/

function setup() {
  createCanvas(400, 400);
  background('lightgrey');

  // set the colour and line thickness for the grid
  stroke('grey');
  strokeWeight(1);

  // draw the grid
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);

  // change the way the parameters to rect() are interpreted
  rectMode(CORNERS);
}

function draw() {

  // set the colour and line thickness for the shapes
  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill('red');
  ellipse(75,275,100);

  // draw the square
  fill('blue');
  rect(175,225,290,350);

  // draw the triangle
  fill('yellow');
  triangle(150,25,290,100,150,175);
}
