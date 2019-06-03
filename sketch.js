function setup(){
    createCanvas(100, 100)
    noCursor()
}
function draw(){
    ellipse(mouseX, mouseY, 10)
}
var t = function( p ) {
    var x = 100.0;
    var y = 100;
    var speed = 2.5;
    p.setup = function() {
        p.createCanvas(400, 200);
        p.noStroke()
        p.noCursor()
    };

    p.draw = function() {
        p.background(255);
        x += speed;
        if(p.mouseIsPressed && x > p.width){
            x = 0;
        } else if(x>p.width+50){
            x = -50
        }
        p.fill(100)
        p.rect(0, 0, 100, p.height)
        p.fill(1)
        p.ellipse(x,y,50,50);
        p.ellipse(mouseX, mouseY+200, 10)

    };
};
var myp5 = new p5(t, 'c2');
