# Drawing basic shapes

p5.js has built-in functions to draw basic shapes:
- triangle()
- rect()
- ellipse()

## triangle()

A triangle is a plane created by connecting three points:

    triangle(x1, y1, x2, y2, x3, y3)

- x1 and y1 represent the coordinates of the first point
- x2 and y2 represent the coordinates of the second point
- x3 and y3 represent the coordinates of the third point

## ellipse()

An ellipse is created by specifying two parameters to set the location of the centre, and third and fourth parameters to set the shape's width and height. An ellipse with equal width and height is a circle:

    ellipse(x, y, w, [h])

- x and y represent the coordinates of the centre of the ellipse
- w represents the width
- h represents the height. If no height is specified, the value of width is used for both the width and height.

## rect()

A rectangle is a four-sided shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height:

    rect(x, y, w, h);

- x and y represent the coordinates of the upper-left corner of the rectangle
- w represents the width
- h represents the height

The way these parameters are interpreted, however, may be changed with the rectMode() function.

## Code your drawing using p5.js

Using the grid you drew on our drawing, figure out the coordinates and lengths to create the triangle, circle, and square on your p5.js canvas.
