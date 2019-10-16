# Animating the size of the circle and square

We can animate the change in size of the circle and square using the same process
we used to animate their placement:

- declare additional variables
- assign values to them
- decrease the difference between the old and new sizes on each call to draw()
to change the shape to its new size
- check to see if the shape is its new size
- generate random values for the next new size once the shape has stopped changing

## Declare the new variables

We need to declare variables for the new x and y coordinates of the shape:

    let circleWidthNew, circleHeightNew;


## Assign initial values to the new variables

In setup(), we assign initial random values to the variables:

    circleWidthNew = random(width);
    circleHeightNew = random(height);

## Decrease the distance between the old and new positions

In draw(), we need to change the width and height of the shape by 1/100 of the
difference between the current size and the new size:

    circleWidth += (circleWidthNew - circleWidth)/100;
    circleHeight = circleWidth;

## Check to see if the shape has reached its new size

Add a condition to the if statement to check if the shape has reached its new size:

    if (abs(circleXNew - circleX) < 1 && abs(circleYNew - circleY) < 1 && abs(circleWidthNew - circleWidth < 1)) {
      circleIsDone = true;
    }

## When the shape has reached it's new size reset the variables

After the shape's size has been changed, use another if statement to
check if the shape has reached its new size, and, if it has, we reset the variables for the next call of draw():

    if (circleIsDone === true) {
      circleWidthNew = random(width);
      circleHeightNew = circleWidthNew;
      circleIsDone = false;
    }

## Animate the size of the square

Animate the size of the square in your sketch:

- declare the variables squareWidthNew, squareHeightNew, squareIsDone
- assign initial values to the variables
- on each loop through draw(), decrease the difference between the old and new sizes
- use an if statement to check if the absolute value of the difference
between the sizes is less than 1 and, if so, set the finished flag to true
- at the end of the draw() loop, use an if statement to check if the finished
flag is true and reset the variables appropriately
