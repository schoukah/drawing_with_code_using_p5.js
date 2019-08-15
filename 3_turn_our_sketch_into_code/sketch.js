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
  
  // draw the shapes
  triangle(150,25,290,100,150,175);
  ellipse(75,275,100);
  rect(175,225,115,125);
}