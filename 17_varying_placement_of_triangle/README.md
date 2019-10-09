# Varying the placement of the triangle

We were able to vary the placement of the circle and square because their functions
took parameters for the X and Y coordinates which we could then replace with random numbers. The function to draw a triangle doesn't.

Why can't we just generate new sets of X and Y coordinates for the vertices
to change the location of the triangle?

How can we vary the placement of the triangle if there are no parameters for
the coordinates of the centre?

## Calculating the centroid of a triangle

We can calculate the X coordinate of the centroid by
summing up the X coordinates of the vertices and dividing by three.
We can caluclate the Y coordinate in a similar fashion

    triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
    triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;

## Generating a new centroid

Now we can use the random function to generate the coordinates for a new centroid:

    triangleNewCentreX = random(400);
    triangleNewCentreY = random(400);

## Calculating the new coordinates of the triangle

Once we have the new centre we have to use it to calculate
the new X and Y coordinates of the vertices:

    triangleX1 = triangleX1 + (triangleNewCentreX - triangleCentreX);
    triangleX2 = triangleX2 + (triangleNewCentreX - triangleCentreX);
    triangleX3 = triangleX3 + (triangleNewCentreX - triangleCentreX);
    triangleY1 = triangleY1 + (triangleNewCentreY - triangleCentreY);
    triangleY2 = triangleY2 + (triangleNewCentreY - triangleCentreY);
    triangleY3 = triangleY3 + (triangleNewCentreY - triangleCentreY);
