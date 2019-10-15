/*

Drawing a grid

*/

function setup() {
  createCanvas(400, 400);
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
}
