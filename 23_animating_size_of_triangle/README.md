# Animating changing the size of the triangle

We can animate changing the size of the triangle using the same pattern we used to animate changing the size of the circle and square.

Instead of generating a new scale factor on each call to draw(), we:

- declare an additional variable for the new scale factor
- assign initial values to it
- decrease the difference between the initial and new scale factor on each call to draw to change the size of the shape
- check to see if the shape is its new size
- generate a random value for the next size once the new size has been reached

## Declare the new variables

We need to declare a variable for the new scale factor:

    let triangleScaleNew;

## Assign initial values to the new variables

In setup(), we assign an initial random value to the variable:

    triangleScaleNew = random(.1,3);

## Decrease the difference between the old and new sizes

In draw(), we need to change the x and y coordinates of the shape by 1/100 of the
distance between the starting position and the new position:

    triangleScale += (triangleScaleNew - triangleScale)/100;

## Check to see if the shape has reached its new position

Use an if statement to see if the current size is less than one pixel different than the new size:

    if (abs(triangleScaleNew - triangleScale) < 1) {
      triangleIsDone = true;
    }

## When the shape has reached it's new size reset the variables

Use another if statement to check if the shape has reached its new position, and, if it has, reset the variables for the next call of draw():

    if (triangleIsDone === true) {
      triangleScaleNew = random(.1,3);
      triangleIsDone = false;
    }

## Animate changing the size of the triangle

Use a pattern similar to the one we used to animate the placement of the circle and square:
- above setup(), declare the new variables triangleScaleNew
- in setup(), assign initial values to the variables
- in draw(), decrease the difference between the initial and new scale factor on each loop through draw()
- use an if statement to check if the absolute value of the difference
between the scale factors is less than 0.1 and, if so, set the finished flag to true
- at the end of the draw() loop, use an if statement to check if the finished
flag is true and generate a new random value for the scale of the next triangle
