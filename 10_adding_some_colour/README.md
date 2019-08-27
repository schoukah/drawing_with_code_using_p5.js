# Adding some colour

p5.js has built-in functions to set the colour of the background, lines, and shapes.

The easiest way to specify the colour you want is to use a CSS colour string, such as:

- 'red'
- 'blue'
- 'yellow'

**Make sure to include the quotation marks around the string.**

## Setting the background colour

    background(colour_string)

The background() function sets the color used for the background of the p5.js canvas.

## Setting the colour of lines

    stroke(colour_string)

Sets the color used to draw lines and borders around shapes. All shapes drawn after the fill command will be filled with the specified colour.

## Setting the colour of shapes

    fill(colour_string)

Sets the color used to fill shapes. All shapes drawn after the fill command will be filled with the specified colour.

## Add the colours from your drawing to your sketch

In addition to colouring the shapes, make the background lightgrey and the lines grey.
