# Getting our sketches ready to share

We can get our sketches ready to share by:
- removing the grid
- changing the background to white
- creating a canvas the full width and height of the browser window

## removing the grid

Remove the gird by commending out the call to the function that draws the grid:

    // drawGrid();

## changing the background to white

Change the background to white:

background('white');

## creating a canvas the full width and height of the browser window

Use the p5.js builtin variables for window width and window height when creating the canvas:

    createCanvas(windowWidth,windowHeight);
