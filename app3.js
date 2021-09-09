// set variable for x coordinate
let x;

function setup() {
    createCanvas(800, 600);
    x = width;
}

function draw() {
    background(0);
  
    // draw circle at location x
    fill(100,65,76);
    circle(x, 300, 50);
  
    //move consistantly at the speed of 5 px per frame
    x = x + 5;
  
    // Reset to the left if x equals 800, the end of the screen
    if (x > 800) {
        x=0;
    }
}

