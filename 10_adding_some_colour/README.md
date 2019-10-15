# Adding colour to the shapes

p5.js has built-in functions to set different colours:

- background()
- stroke()
- fill()

# CSS colour strings

The easiest way to specify the colour you want is to use a CSS colour string, such as:

- 'red'
- 'blue'
- 'yellow'

**Make sure to include the quotation marks around the string.**

## Setting the background colour

The background() function sets the color used for the background of the p5.js canvas:

    background(colour_string)

## Setting the colour of lines

Sets the color used to draw lines and borders around shapes:

    stroke(colour_string)

- all shapes drawn after the stroke command will be drawn with the specified colour.

## Setting the colour of shapes

Sets the colour used to fill shapes:

    fill(colour_string)

- all shapes drawn after the fill command will be filled with the specified colour.

## Add the colours from your drawing to your sketch

Add code to your sketch to:

- make the background lightgrey
- make the grid lines grey
- colour the shapes in the colours from your drawing
- turn off the outlines of the shapes
