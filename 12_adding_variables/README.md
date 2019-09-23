# Adding variables

We can make our sketches different each time they are drawn by using variables and the builtin random() function.

A variable is a name that represents a value.

    var x = 200;
    var y = 200;

## Built-in variables

### width and height  

### mouseX and mouseY

## random()

The random() function returns a number between 0 and the number you provide to it:

    random(400);

We can assign the value to a variable:

    x = random(400);
    y = random(400);

We can use them in our sketches in place of using the numbers:

        point(x,y);

## Adding variability to our sketches

    What are things that we could have change each time the sketch is run? What were some of the ways our drawings were different?

    - placement
    - size
    - colour

## Using variables

## Mouse position variables

We can change the length of the line by stopping the commands, changing the parameters to the line command, and then playing the commands again. Not very interesting.

We can also change the length of the line while the commands are playing by having p5.js tell us the x and y coordinates of the mouse and using those values as the parameters to the line command:

1. Change the last two numbers in the line() command to be the words mouseX and mouseY:

      line(x, y, mouseX, mouseY);

2. Play the sketch and move your mouse around the canvas to see what happens.

Sometimes it's useful to know what the values for mouseX and mouseY are. We can do that by adding another three lines to our sketch:

    function mouseClicked() {
      print(mouseX,mouseY);
}
