# Animating the placement of the triangle

We can animate the movement of the triangle to its new position using the same pattern we used to animate the movement of the circle and square.

Instead of assigning random values to the x and y coordinates for the new positions
on the next call to draw, we:

- declare additional variables for the new coordinates and animation flag
- assign initial values to them
- decrease the distance between the initial and new positions on each call to draw to move the shape to its new position
- check to see if the shape is in its new position
- generate random values for the next new position once the shape has finished moving

## Declare the new variables

We need to declare variables for the new x and y coordinates of the shape:

    let triangleCentreXNew, triangleCentreYNew;

We also need to declare variables to control the looping process:

    let triangleIsDone;

## Assign initial values to the new variables

In setup(), we assign initial random values to the variables:

    triangleCentreXNew = random(width);
    triangleCentreYNew = random(height);
    triangleIsDone = false;

## Decrease the distance between the old and new positions

In draw(), we need to change the x and y coordinates of the shape by 1/100 of the
distance between the starting position and the new position:

    triangleCentreX += (triangleCentreXNew - triangleCentreX)/100;
    triangleCentreY += (triangleCentreYNew - triangleCentreY)/100;

## Check to see if the shape has reached its new position

Use an if statement to see if a condition is true or false:

    if (abs(triangleCentreXNew - triangleCentreX) < 1 && abs(triangleCentreYNew - triangleCentreY) < 1) {
      triangleIsDone = true;
    }

## When the shape has reached it's new position reset the variables

Use another if statement to check if the shape has reached its new position, and, if it has, reset the variables for the next call of draw():

    if (triangleIsDone === true) {
      triangleCentreXNew = random(width);
      triangleCentreYNew = random(height);
      triangleIsDone = false;
    }

## Animate the placement of the triangle

Use a pattern similar to the one we used to animate the placement of the circle and square:
- above setup(), declare the new variables triangleCentreXNew, triangleCentreYNew, triangleIsDone
- in setup(), assign initial values to the variables
- in draw(), decrease the distance between the old and new positions on each loop through draw()
- use an if statement to check if the absolute value of the difference
between the positions is less than 1 and, if so, set the finished flag to true
- at the end of the draw() loop, use an if statement to check if the finished
flag is true and generate new random values for the centre of the triangle
