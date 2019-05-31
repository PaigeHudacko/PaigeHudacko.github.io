function setup() {
    createCanvas(windowWidth*0.8, windowHeight*0.8);
    s = 10;
    r = 0
    g = 0
    b = 0
    o = 255
}
function keyPressed() {
    if (keyCode === 49 ) {
        s = 1;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 50 ) {
        s = 5;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 51 ) {
        s = 10;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 52 ) {
        s = 15;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 53 ) {
        s = 20;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 54 ) {
        s = 45;
        fill(255);
        ellipse(10, 10, 60, 60);
    } else if (keyCode === 81 ) { // black
        r = 0
        g = 0
        b = 0
    } else if (keyCode === 87 ) { // red
        r = 154
        g = 13
        b = 13
    } else if (keyCode === 69 ) { // orange
        r = 232
        g = 98
        b = 58
    } else if (keyCode === 82 ) { // yellow
        r = 226
        g = 187
        b = 13
    } else if (keyCode === 84 ) { // green
        r = 34
        g = 145
        b = 14
    } else if (keyCode === 89 ) { // blue
        r = 14
        g = 101
        b = 145
    } else if (keyCode === 85 ) { // purple
        r = 107
        b = 145
        g = 14
    } else if (keyCode === 73 ) { // grey
        r = 122
        g = 122
        b = 122
    } else if(keyCode === 79) {
        r = 255
        g = 255
        b = 255
    } else if(keyCode === 65){
        o = 255
    } else if(keyCode === 83 && o<255){
        o+=15
    } else if(keyCode === 68 && o>0){
        o-=15
    }
}
function draw() {

    fill(r, g, b, o)
    ellipse(10, 10, s, s)
    if (mouseIsPressed) {
        noStroke();
        fill(r, g ,b, o);
        ellipse(mouseX, mouseY, s, s);

    } else {
        if (keyIsPressed === true) {
            if (keyCode === SHIFT) {
                fill(255);
                noStroke()
                ellipse(mouseX, mouseY, s, s) }
        }
    }
}
