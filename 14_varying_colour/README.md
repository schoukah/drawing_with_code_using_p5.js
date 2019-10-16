# Varying the colour of shapes

We can vary the colours of shapes using:

- arrays
- shuffle()

## Array

An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of colours, for example), storing the colour names in single variables could look like this:

    let colour1 = "red";
    let colour2 = "yellow";
    let colour3 = "blue";

However, what if you want to loop through the colours and find a specific one? And what if you had not 3 colours, but 300? The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

## Declaring an Array

We declare an array like other variables:

    let colours;

## Assigning values to the array

We assign values to an array by enclosing the list of comma separated values in square brackets:

    colours = [ 'red', 'yellow', 'blue'];

## Using a value in an array

We access a value in an array using the name of the array followed by the index of the value enclosed in square brackets:

    fill(colours[0]);

- **array index values start with 0**

## shuffle()

Randomizes the order of the elements of an array:

    colours = shuffle(colours);

- calling shuffle() doesn't change the original array
- it returns a new array of values that must be assigned to an array variable

## Vary the colours of the shapes in your sketch

To vary the colours of the shapes in your sketch:

- declare an array variable called colours
- assign the strings 'red', 'yellow', and 'blue' to the array
- use the the appropriate colour value to fill() your shapes
- shuffle() the colour array so the shapes will be filled with different colours on the next call to draw()
