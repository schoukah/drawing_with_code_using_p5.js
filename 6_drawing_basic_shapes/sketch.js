/*

Drawing the basic shapes

*/

function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS); // change the way the parameters to rect() are interpreted
}

function draw() {
  background(220);

  // draw the grid
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);

  // draw the circle
  ellipse(74,274,99);

  // draw the square
//  rect(175,225,115,125);
  rect(175,225,290,350);

  // draw the triangle
  triangle(150,25,290,100,150,175);
}
