/*

Adding colour to the shapes

*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');

  stroke('grey');
  // draw the grid
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);

  // don't draw a line around the shapes
  strokeWeight(0);

  // draw the circle
  fill('red');
  // ellipse(75,275,100,100)
  ellipse(75,275,125-25,325-225);

  // draw the square
  fill('blue');
  //  rect(175,225,115,125);
  rect(175,225,290-175,350-225);

  // draw the triangle
  fill('yellow');
  triangle(150,25,290,100,150,175);

  // set the strokeWeight back to the default
  strokeWeight(1);
}
