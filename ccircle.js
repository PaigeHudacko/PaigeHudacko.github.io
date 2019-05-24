function setup() {
    createCanvas(400, 400);
    cr = random(2, 5);
    cg = random(2, 5);
    cb = random(2, 5);
    r = random(255);
    g = random(255);
    b = random(255)
}

function draw() {
    ellipse(200, 200, 25);
    fill(r,b,g);
    r+=cr;
    g+=cg;
    b+=cb;
    if(r >= 255 || r<=0){
        cr*= -(random(0.5, 1.5))
    }
    if(g >= 255 || r<=0){
        cg*= -(random(0.5, 1.5))
    }
    if(b >= 255 || r<=0){
        cb*= -(random(0.5, 1.5))
    }

}
