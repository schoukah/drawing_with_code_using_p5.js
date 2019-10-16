# Animating the placement of the circle and square

We can animate the movement of the circle and square to their new positions by
using the looping mechanism of the draw() function.

Instead of assigning random values to the x and y coordinates for the new positions
on the next call to draw, we:

- declare additional variables
- assign values to them
- decrease the distance between the old and new positions on each call to draw
to move the shape to its new position
- generate random values for a new position once the shape has finished moving

## Declaring the variables

We need to declare variables for the new x and y coordinates of the shape:

    let circleXNew, circleYNew;

We also need to declare variables to control the looping process:

  let circleIsDone;

## Assigning random values to the additional variables

In setup(), we assign initial random values to the variables:

    circleXNew = random(width);
    circleYNew = random(height);

## Animating the placement of the circle

In draw(), we need to change the x and y coordinates of the shape by 1/100 of the
distance between the starting position and the new position:

    circleX = circleX + (circleXNew-circleX)/100;
    circleY = circleY + (circleYNew-circleY)/100;

## Checking to see if the shape has reached the new position

    if (abs(circleXNew - circleX) < 1 && abs(circleYNew - circleY) < 1) {
      circleIsDone = true;
    }


## Animate the placement of the square
