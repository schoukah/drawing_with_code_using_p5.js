# Drawing points and lines

p5.js has built-in functions to draw points and lines.

## Points

    point(x, y)

Draws a point, a coordinate in space at the dimension of one pixel.

## What are x and y?

x and y are numbers that identify a point on the canvas.
The top left corner of the canvas has the coordinates (0,0).

- x is the horizontal distance of a pixel from the top left corner  
- y is the vertical distance of a pixel from the top left corner

## Lines

    line(x1, y1, x2, y2)

Draws a line, a direct path between two points.

## Let's draw some lines

On your drawing:

- enclose the triangle, circle, and square in a square
- draw a line from the centre of the top to the centre of the bottom
- draw a line from the centre of the left side to the centre of the right
- divide each of the resultant squares in the same way;
you should end up with a grid of 16 squares.
- number the intersections on the top 0, 100, 200, 300, 400
- number the intersections on the left side in the same way

Use the line() function to divide your p5.js canvas into a similar grid
