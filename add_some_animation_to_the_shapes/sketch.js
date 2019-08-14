// introduce arrays
var colours = ['red','yellow','blue'];
var initialCircle = [], terminalCircle = [];
var initialRectangle = [], terminalRectangle = [];
var initialTriangle = [], terminalTriangle = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
  
  // setup arrays of initial and terminal points
  initialCircle = [random(400),random(400),random(400)];
  terminalCircle = [random(400),random(400),random(400)];
  initialRectangle = [random(400),random(400),random(400),random(400)];
  terminalRectangle = [random(400),random(400),random(400),random(400)];
  initialTriangle = [random(400),random(400),random(400),random(400),random(400),random(400)];
  terminalTriangle = [random(400),random(400),random(400),random(400),random(400),random(400)];
}

function draw() {
  background('lightgrey');
  
  drawGraph();
  
  stroke('black');
  strokeWeight(0);
  
  fill(colours[int(random(3))]);
  triangle(initialTriangle[0],initialTriangle[1],initialTriangle[2],initialTriangle[3],initialTriangle[4],initialTriangle[5]);
 
  fill(colours[int(random(3))]);
  circleX = [initialCircle[0] + (
  ellipse(circleX,circleY,radius);

  fill(colours[int(random(3))]);
  rect(random(400),random(400),random(400),random(400));
  
  frameRate(1);
}

function drawGraph() {
  // move this into a function to introduce functions
  stroke('grey');
  strokeWeight(1);
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);
}