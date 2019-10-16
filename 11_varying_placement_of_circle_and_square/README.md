# Varying placement

We can introduce variability into our sketches by using:

- random()
- variables

What are things that we could have change each time the sketch is run? What were some of the ways our drawings were different?

## random()

Returns a random floating-point number:

    random([min],[max])

- if no argument is given, returns a random number from 0 up to (but not including) 1
- if one argument is given, returns a random number from 0 up to (but not including) the number
- if two arguments are given, returns a random number from the first argument up to (but not including) the second argument

We can use the random() function to generate random numbers that we can pass as the parameters for the X and Y coordinates to the functions that draw our shapes:

    ellipse(random(400),random(400), 100,100);

## Using variables to save our coordinates

Before we start replacing the original X and Y coordinates we calculated from our drawings, we can save them in variables so we can use them again later:

    let circleX;
    let circleY;

    circleX = 75;
    circleY = 275;

Before we can use a variable we have to:

- pick a name for it so we can refer to it later
- declare it using the "let" keyword
- assign it a value.

### Variable scope

Where we declare a variable determines which other parts of our program will be
able to use it. We are going to declare our variables at the very top of the program
outside of the setup(), draw(), or any other functions. This will let every other part of our program use them.

## Builtin variables

p5.js comes with a number of builtin variables.

### width and height

Two builtin variables that will be useful in our sketches are:

    width
    height

- width represents the width of the canvas in pixels
- height represents the height of the canvas in pixels

We don't have to declare built-in variables before we use them:

    circleX = random(width);
    circleY = random(height);

### mouseX and mouseY

Two additional builtin variables that we are not going to use but are useful to know about are:

    mouseX
    mouseY

- mouseX returns the x coordinate of the mouse pointer
- mouseY returns the y coordinate of the mouse pointer

We could use them like this:

    circleX = mouseX;
    circleY = mouseY;

What do you think this will do?

## Builtin functions

p5.js also comes with a number of builtin functions. We are going to use:

    noLoop()
    loop()
    redraw()
    mouseclicked()

### noLoop() and loop()

noLoop() stops p5.js from continuously executing the code within draw(). If loop() is called, the code in draw() begins to run continuously again.

### redraw()

Executes the code within draw() one time. This functions allows the program to update the display window only when necessary.

### mouseClicked()

The mouseClicked() function is called once after a mouse button has been pressed and then released.

By default, this function does nothing. To be useful to us, we have to declare the function and add the code we want to be executed:

    function mouseClicked() {
      redraw();
    }

- this function should be declared below the draw function so it is accessible in all other functions

## Vary the placement of the circle and square in your sketch

Use what we've learned to:

- save the original values for the x and y coordinates of the circle and square in variables called circleX, circleY, squareX, and squareY
- draw the circle and square using the variables instead of numbers as the parameters
- assign random values based on the width and height of the canvas to the variables used as the parameters so that they will be in a different location on the next call to draw()
