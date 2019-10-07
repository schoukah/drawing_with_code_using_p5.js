# Varying the colour of shapes

We can vary the colours of shapes by storing the colour names in an array
and using a function to shuffle the contents of the array on each run.

## Using arrays

An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

    let car1 = "Saab";
    let car2 = "Volvo";
    let car3 = "BMW";

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300? The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

## Creating an Array

    let cars = ["Saab", "Volvo", "BMW"];

## Using functions

We can use a freely available function to shuffle our array.

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = floor(random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
