# Varying the size of the circle and the square

We were able to vary the placement of the circle and square by generating random numbers to use as the parameters
for the X and Y coordinates.

We can vary the size of the circle and square by generating random numbers to use as the parameters for width and height.

## Using variables to represent width and height

We need to add some new variables at the top of our program:

    let circleX = 75;
    let circleY = 275;
    let circleWidth = 100;
    let circleHeight = circleWidth;
    let circleNewX, circleNewY, circleNewWidth, circleNewHeight;

And substitute them for the numbers used as parameters in the ellipse statement:

    circleNewX = random(circleX);
    circleNewY = random(circleY);
    circleNewWidth = random(circleWidth);
    circleNewHeight = circleNewWidth;
    ellipse(circleNewX, circleNewY, circleNewWidth, circleNewHeight);

## Activity

Vary the size of the square following the same procedure.
