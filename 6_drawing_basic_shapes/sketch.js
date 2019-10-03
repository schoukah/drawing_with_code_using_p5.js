/*

Drawing the basic shapes

*/

function setup() {
  createCanvas(400, 400);
  background(220);

  // draw the grid
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);

}

function draw() {

  // draw the shapes by filling in the X and Y coordinates from your drawing
  // and calculating the width and height for the circle and square

  // draw the circle
  // ellipse(centreX,centreY,width,height)
  ellipse(75,275,100,100);

  // draw the square
  // rect(centreX,centreY,width,height)
  //  rect(175,225,115,125);
  rect(175,225,290-175,350-225);

  // draw the triangle
  // triangle(x1,y1,x2,y2,x3,y3)
  triangle(150,25,290,100,150,175);
}
