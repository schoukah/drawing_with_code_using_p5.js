# Drawing points and lines

p5.js has built-in functions to draw points and lines, and to change their widths:

- point()
- line()
- strokeWeight()

## point()

Draws a point, a coordinate in space at the dimension of one pixel.

    point(x, y)

### What are x and y?

x and y are numbers that identify a location on the canvas.

- the top left corner of the canvas has the coordinates (0,0).
- x is the horizontal distance of a pixel from the top left corner  
- y is the vertical distance of a pixel from the top left corner

## line()

Draws a line, a direct path between two points.

    line(x1, y1, x2, y2)

- x1 and y1 are the coordinates of the starting point of the line
- x2 and y2 are the coordinates of the ending point of the line

## strokeWeight

Sets the width of the stroke used for lines, points, and the border around shapes.

    strokeWeight(weight)

- widths are set in units of pixels
- the default width is 1 pixel
- a weight of 0 prevents lines from being drawn around shapes

## Draw a grid on your sketch

On your drawing:

- enclose the triangle, circle, and square in a square
- draw a line from the centre of the top to the centre of the bottom
- draw a line from the centre of the left side to the centre of the right
- divide each of the resultant squares in the same way; you should end up with a grid of 16 squares.
- number the intersections on the top 0, 100, 200, 300, 400
- number the intersections on the left side in the same way

Use the line() function to divide your p5.js canvas into a similar grid. The first line of code would look like this:

    line(100,0,100,400);

- Where do you think you should put your lines of code? In setup() or in draw()? - What happens if you change the strokeWeight()?
