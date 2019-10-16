# Animating the placement of the circle and square

We can animate the movement of the circle and square to their new positions by
using the looping mechanism of the draw() function.

Instead of assigning random values to the x and y coordinates for the new positions
on the next call to draw, we:

- declare additional variables
- assign values to them
- decrease the distance between the old and new positions on each call to draw
to move the shape to its new position
- check to see if the shape is in its new position
- generate random values for the next new position once the shape has finished moving

## Declare the new variables

We need to declare variables for the new x and y coordinates of the shape:

    let circleXNew, circleYNew;

We also need to declare variables to control the looping process:

  let circleIsDone;

## Assign initial values to the new variables

In setup(), we assign initial random values to the variables:

    circleXNew = random(width);
    circleYNew = random(height);
    circleIsDone= false;

## Decrease the distance between the old and new positions

In draw(), we need to change the x and y coordinates of the shape by 1/100 of the
distance between the starting position and the new position:

    circleX = circleX + (circleXNew-circleX)/100;
    circleY = circleY + (circleYNew-circleY)/100;

## Check to see if the shape has reached its new position

We use an if statement to see if a condition is true or false:

    if ( CONDITION ) {
      // statements to execute
    }

- if the condition is true then the statements are executed
- if the condition is false the statements are skipped over
- CONDITION can be the keywords true or false
- CONDITION can be a logical expression using operators such as <, >, ===, or !==
- logical expressions can be combined using the operators &&, ||, or !

For example:

    if (1 > 2) {
      console.log("1 is greater than 2");
    }

To check to see if the circle has reached its new position, we use this if statement:

    if (abs(circleXNew - circleX) < 1 && abs(circleYNew - circleY) < 1) {
      circleIsDone = true;
    }

- abs() is a builtin function that returns the absolute value of an number

## When the shape has reached it's new position reset the variables

After the shape's position has been changed, use another if statement to
check if the shape has reached its new position, and, if it has, reset the variables for the next call of draw():

    if (circleIsDone === true) {
      circleXNew = random(width);
      circleYNew = random(height);
      circleIsDone = false;
    }

## Animate the placement of the square

Animate the placement of the square in your sketch:

- declare the variables squareXNew, squareYNew, squareIsDone
- assign initial values to the variables
- on each loop through draw(), decrease the distance between the old and new positions
- use an if statement to check if the absolute value of the difference
between the positions is less than 1 and, if so, set the finished flag to true
- at the end of the draw() loop, use an if statement to check if the finished
flag is true and reset the variables appropriately
