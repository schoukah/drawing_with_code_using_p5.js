# The p5.js web editor

We can create sketches using p5.js in two ways:

- by downloading and installing the libraries from https://p5js.org/download/
- by using the p5.js web editor at https://editor.p5js.org/

For this workshop, we are going to use the web editor:

![The p5.js web editor](web_editor.png)

## Creating an account

If you want to save your sketches or share your sketches via the p5.js editor website, you will have to create an account.

Click on the Sign Up button at the top right corner of the screen. The only information you will be asked to provide is your email address and a password.

## What are the different parts of the editor for?

Editor pane
  - Where we type in the p5.js commands that will make up our sketch

Start and Stop buttons
  - We start and stop our sketch using the buttons just above the Editor pane.

Preview pane
  - The result of playing the sketch is shown in the Preview pane.

Console pane
- If the sketch can't be played, messages about possible reasons why are shown in the Console pane.
- Our sketches can print status information to the Console pane to help us fix programming problems.

## The Editor pane

- The Edit pane is pre-filled with a skeleton of a p5.js sketch.
- All of our p5.js sketches will have at least two function definitions:
  - setup()
  - draw().

## setup()

The skeleton setup() creates a canvas to draw on:

    createCanvas(400, 400);

- the first 400 represents the width of the canvas in pixels
- the second 400 represents the height of the canvas in pixels
- try changing them and see what happens (remember to press Stop then Start if you don't have Auto-refresh checked)

## draw()

The skeleton draw() function definition draws a background on the canvas:

    background(220);

- 220 represents a shade of grey
- try changing it and see what happens

# The p5.js command reference

A full reference to the p5.js commands that  can be found at https://p5js.org/reference/. 
