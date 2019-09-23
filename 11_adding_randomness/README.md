# Adding randomness

We can make our sketches different each time they are drawn by using the results from the builtin random() function
as the parameters to the functions that draw the shapes.

## random()

The random() function returns a number between 0 and the number you provide to it:

    random(400);

We can use the result as the parameters to the functions that draw the shapes:

    ellipse(random(400),random(400), 10,10);
