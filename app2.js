function setup(){
    createCanvas(400,300);
}

function draw(){
    background(0);
    //if the mouse X coordinate is less than or equal to 200
    if(mouseX<=200){
        //fill with blue
        fill(0,30,255);
        //draw circle at mouse location
        circle(mouseX, mouseY, 20);
    }
    //if mouse X coordinate is greater than 200 
    if (mouseX>200){
        //fill with red
        fill(255,0,30);
        //draw circle at mouse location
        circle(mouseX, mouseY, 20);
    }
}