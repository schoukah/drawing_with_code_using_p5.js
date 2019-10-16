# Varying size

We were able to vary the placement of the circle and square by generating random numbers to use as the parameters for the X and Y coordinates. We can vary the size of the circle and square by generating random numbers to use as the parameters for their width and height.

In the area above setup(), declare the variables:

    let circleWidth, circleHeight;

In setup(), assign values to the variables:

    circleWidth = 100;
    circleHeight = circleWidth;

## Changing the way we draw our squares

By default, p5.js interprets the x and y parameters passed to rect() as the coordinates of the top left corner. We can change this behaviour using:

    rectMode(CENTER);

- rectMode(CENTER) interprets the first two parameters of rect() as the shape's center point

## Vary the size of your circle and square

Using a similar procedure as in the last exercise:

- save the original values for the width and height of the circle and square in variables called circleWidth, circleHeight, squareWidth, and squareHeight
- draw the circle and square using the variables instead of numbers as the parameters
- assign random values based on the width and height of the canvas to the variables used as the parameters so that they will have a different size on the next call to draw()
