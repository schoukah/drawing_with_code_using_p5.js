# Animating the Colours

We were able to vary the size of the circle and square because their functions
took parameters for the width and height which we could then replace with random numbers. The function to draw a triangle doesn't.

How can we vary the size of the triangle?

## Calculating a scaling factor

We can make the triangle larger or smaller by multiplying each of the coordinates by a scaling factor.

A scaling factor smaller than 1 will make the triangle smaller (0.5 will make it half as large).

A scaling factor greater than 1 will make the triangle larger (2 will make it twice as large).
