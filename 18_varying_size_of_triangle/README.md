# Varying the size of the triangle

Calculating the centroid is also useful to change the size of the triangle.

To change the size of the triangle we're going to:
- introduce a new variable to scale the distance between the centroid and the corners of the vertices:
  - triangleScale


- use another of the p5.js transformation functions:
  - scale()

## Calculating a scaling factor

We can make the triangle larger or smaller by multiplying each of the coordinates by a scaling factor.
- a scaling factor smaller than 1 will make the triangle smaller (0.5 will make it half as large).
- a scaling factor greater than 1 will make the triangle larger (2 will make it twice as large).
