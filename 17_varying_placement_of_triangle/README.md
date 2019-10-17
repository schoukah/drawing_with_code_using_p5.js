# Varying the placement of the triangle

We were able to vary the placement of the circle and square because their functions
took parameters for the X and Y coordinates which we could then replace with random numbers. The triangle() function doesn't take a parameter for the centre, just for the coordinates of the three corners.

What will happen if we try to generate new sets of X and Y coordinates for the corners of the triangle as a way of changing its location?

To change the location of the triangle we're going to:
- calculate the centre of a triangle
- use some of the p5.js transformation functions:
  - push()
  - translate()
  - pop()


## Calculating the centroid of a triangle

We can calculate the coordinate of the centre (or more properly, the centroid) of a triangle by summing up the values for the coordinates of the vertices and dividing by three:

    triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
    triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;

## Calculating the coordinates of the vertices in relationship to the centroid

Once we've generated the coordinates of the centroid, we need to express the coordinates of the corners in relationship to the coordinates to the centroid:

    triangleX1 = triangleX1 - triangleCentreX;
    triangleY1 = triangleY1 - triangleCentreY;
    triangleX2 = triangleX2 - triangleCentreX;
    triangleY2 = triangleY2 - triangleCentreY;
    triangleX3 = triangleX3 - triangleCentreX;
    triangleY3 = triangleY3 - triangleCentreY;

By doing this, we can move the centroid, and the vertices will follow along.

## Using translate() to set the location of the triangle

Up to now, the coordinates of everything we've' drawn have been in relationship to the origin (0,0) at the top left corner of the canvas.

p5.js has transformation functions that let us change where we draw by changing the position of the origin. Then, we can draw our triangle using the coordinates expressed in relationship to the centroid:

    push();
    translate(triangleCentreX,triangleCentreY);
    triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
    pop();

## Generating new coordinates for the centroid

We can draw our next triangle in a different location by generating new random values for the centroid:

    triangleCentreX = random(width);
    triangleCentreY = random(height);

## Vary the placement of the triangle in your drawing

Using the same pattern we used to vary the placement of the circle and square:

- above setup(), declare the variables for the triangle: triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3, triangleCentreX, triangleCentreY
- in setup(), assign the initial values to the variables for the corners, use them to calculate the coordinates for the centroid, and then use the centroids to calculate and assign values for the corners in relationship to the coordinates for the centroid
- in draw(), save the environment with push(), translate the origin to the centroid, draw the triangle, and restore the environment with pop()
- generate new random values for the coordinates to be used on the next iteration of the drawing
