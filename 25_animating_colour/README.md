# Animating the Colours

We can animate the transition between the colours of the shapes using a pattern similar to the animation of placement and size.

To animate the transition between the colours we are going to:
- use an RGB colour representation
- use a two dimensional array

## RGB colour representation

So far we've been representing our colours as strings:

    fill('red');

p5.js also lets us represent colours as numbers. In this system a colour is made up of different levels of three colours: Red, Green, and Blue (RGB). Levels can range from 0 to 255. An RGB representation for red would look like:

    fill(255,0,0);

- the red component of the colour is at it's highest value
- the green and blue components are at their lowest values

Using RGB representations also allows us to set the transparency level of the colour (more properly, the alpha value) using a fourth number, also ranging from 0 (fully transparent) to 255 (fully saturated). A red at three quarters transparency would look like:

    fill(255,0,0,196);

## Two dimensional arrays

So far, we've been storing our colour strings in a one dimensional array:

    colours = ['red','yellow','blue'];

Each of our RGB colour representations can also be stored in a one dimensional array:

    colourRed = [255,0,0,196]
    colourYellow = [255,255,0,196];
    colourBlue = [0,0,255,196];

But our code expects the colours of the shapes to be in a single dimensional array called colours.

We can store the three arrays representing the RGB colours in a two dimensional array:

    colours = [ [255,0,0,196], [255,255,0,196], [0,0,255,196] ];

We can still reference a specific colour using a single index:

    fill(colours[0]);

We can also reference a specific RGB component of a specific colour using a double index:

    colourRedComponentRed = colours[0][0];

## Declare the new variables

We need to declare a variable for the new colours:

    let coloursNew;

## Assign initial values to the new variables

In setup(), we initialize the original variable with new colour format:

    colours = [ [255,0,0,196], [255,255,0,196], [0,0,255,196] ];

We also assign initial values to the new variable:

    coloursNew = shuffle([ [255,0,0,196], [255,255,0,196], [0,0,255,196] ]);

## Decrease the difference between the old and new colours

In draw(), we need to change the values of each of the components of each colour by 1/100 of the difference between the starting colour and the new colour:

    colours[0][0] += (coloursNew[0][0] - colours[0][0])/100;
    colours[0][1] += (coloursNew[0][1] - colours[0][1])/100;
    colours[0][2] += (coloursNew[0][2] - colours[0][2])/100;

## Check to see if the colour has fully changed

Use an if statement to see if the colour is less than one unit different than the new colour:

    if (abs(coloursNew[0][0] - colours[0][0]) < 1 && abs(coloursNew[0][1] - colours[0][1]) < 1 && abs(coloursNew[0][2] - colours[0][2]) < 1 ) {
      circleIsDone = true;
    }

## When the shape is being filled by its new colour reset the variables

In the if statement to check if all of the shapes have reached their new parameters, add the code to reset the variables for the next call of draw():

    if (circleIsDone === true && squareIsDone === true && triangleIsDone === true) {
      colours = coloursNew;
      coloursNew = shuffle([ [255,0,0,196], [255,255,0,196], [0,0,255,196] ]);
    }

## Animate the transition between the colours of the shapes in your sketch

Use a pattern similar to the one we used to animate the placement of the circle and square:
- above setup(), declare the new variable coloursNew
- in setup(), assign initial values to colours and coloursNew variables using the RGB colour representation
- in draw(), for each shape, decrease the difference between the components of the initial and new colours for that shape on each loop through draw()
- in the first if statement, add a check to see if the absolute value of the differences between the components of the colours are less than 1 before setting the finished flag to true
- at the end of the draw() loop, in the if statement to check if the finished
flags are true, generate new set of colours in RGB representation for coloursNew
