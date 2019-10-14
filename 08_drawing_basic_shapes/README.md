# Drawing basic shapes

p5.js has built-in functions to draw triangles, circles, and squares.

## triangle

    triangle(x1, y1, x2, y2, x3, y3)


A triangle is a plane created by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.

## circle

    ellipse(x, y, w, [h])

An ellipse with equal width and height is a circle. By default, the first two parameters set the location of the centre, and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken. The origin may be changed with the ellipseMode() function.

## rect

    rect(x, y, w, h);

Draws a rectangle to the screen. A rectangle is a four-sided shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, however, may be changed with the rectMode() function.

## Code your drawing using p5.js

Using the graphs we drew on our drawings,
figure out the coordinates and lengths to create the shapes
on your p5.js canvas.
