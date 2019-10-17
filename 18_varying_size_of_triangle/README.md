# Varying the size of the triangle

Calculating the centroid is also useful to change the size of the triangle.

To change the size of the triangle we're going to:
- introduce a new variable to scale the distance between the centroid and the corners of the vertices:

      let triangleScale;
      triangleScale = 1;


- use another of the p5.js transformation functions:
      scale(triangleScale);

## Using scale()

scale() increases or decreases the size of a shape by expanding and contracting vertices relative to the origin of the coordinate system:

    scale(triangleScale);

  - a scaling factor smaller than 1 will make the triangle smaller (0.5 will make it half as large).
  - a scaling factor greater than 1 will make the triangle larger (2 will make it twice as large).
  - in general, we want to call translate() before we call scale()

Where would we put the scale() statement in our sketches?

## Changing the scale of the triangle

We can make the triangle larger or smaller by generating a new random value for triangeScale:

    triangleScale = random(.1,3);

- this form of the random function takes two parameters, an upper and a lower bound.
- your choice of values to use as the upper and lower bounds will depend on the initial size of your triangle

## Vary the size of the triangle in your drawing

Use a pattern similar to the one we used to vary the size of the circle and square:
- above setup(), declare the new variable triangleScale
- in setup(), assign an initial value to the new variable
- in draw(), use scale() in between the push() and pull() statements to scale the size of the rectangle
- in the appropriate location in draw(), generate new random values for the scale factor to be used on the next iteration of the drawing
