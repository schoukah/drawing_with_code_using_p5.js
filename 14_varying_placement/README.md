# Varying the placement of shapes

We can vary the placement of shapes by using variables to represent their vertices
and assigning different values to the variables each time the sketch is drawn.

## Varying the placement of the circle

We can vary the placement of the circle by replacing the x and y coordinates with variables and assigning random values to them:

    var circleX, circleY;
    circleX = random(400);
    circleY = random(400);
    ellipse(circleX,circleY, 200);

## loop(), noLoop(), and frameRate()

By default, the draw() function repeats as long as the sketch is running.

We can stop it from looping using the noLoop() builtin function:

    noLoop();

We can start it looping again using the loop() builtin function.

    loop();

By default, draw() loops 60 times a second. We can change the rate at which it loops using the frameRate() builtin function:

    frameRate(1);

## Varying the placement of the square

We can vary the placement of the square by replacing the x and y coordinates with variables and assigning random values to them:

    var squareX, squareY;
    squareX = random(400);
    squareY = random(400);
    rect(squareX, squareY, 100, 100);

## Varying the placement of the triangle

We can vary the placement of the triangle by replacing the three x and y coordinates with variables, assigning random values to the first set of coordinates, and adjusting the offset

## Advanced activities

If you've finished the other activities, try these challenges:

- Prevent shapes from spilling off the edge of the canvas
- Prevent shapes from overlapping
