# Varying the placement of the circle and square

We can make our sketches different each time they are drawn by using the results from the builtin random() function as the parameters to the functions that draw the shapes.

## Adding variability to our sketches

  What are things that we could have change each time the sketch is run? What were some of the ways our drawings were different?

  - placement
  - size
  - colour

## Randomness

We can introduce variability into our sketches by using the random() function to generate random numbers that we can pass as the parameters for the X and Y coordinates to the functions that draw our shapes:

    ellipse(random(400),random(400), 10,10);

## Using variables to save our coordinates

Before we start replacing the original X and Y coordinates we calculated from our drawings we can save them in variables so we can use them again later.

Before we can use a variable we have to pick a name for it so we can refer to it later, declare it using the "let" keyword, and optionally assign it an initial value.

    let circleX = 75;
    let circleY = 275;

Where we declare a variable determines which other parts of our program will be
able to use it. We are going to declare our variables at the top of the program
outside of the setup(), draw(), or any other functions. This will let every other part of our program use them.

## Built-in variables

### width and height  

### mouseX and mouseY

We can change the length of the line by stopping the commands, changing the parameters to the line command, and then playing the commands again. Not very interesting.

We can also change the length of the line while the commands are playing by having p5.js tell us the x and y coordinates of the mouse and using those values as the parameters to the line command:

1. Change the last two numbers in the line() command to be the words mouseX and mouseY:

      line(x, y, mouseX, mouseY);

2. Play the sketch and move your mouse around the canvas to see what happens.

Sometimes it's useful to know what the values for mouseX and mouseY are. We can do that by adding another three lines to our sketch:

    function mouseClicked() {
      print(mouseX,mouseY);
}
