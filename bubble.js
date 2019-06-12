var x
var y
var r
var bubbles = []


class Bubble{
  constructor(){
  this.x = random(width)
  this.y = random(height)
  this.r = random(25, 45)
  this.f = 255
  }
  draw(){
    fill(this.f, 200)
  if((dist(this.x, this.y, mouseX, mouseY)) <= this.r){
    this.f = random(255)
  }
  
  if(mouseIsPressed & (dist(this.x, this.y, mouseX, mouseY)) <= this.r){
   this.x = mouseX
   this.y = mouseY
   this.f = 0
} else {
  this.x += random(-5, 5)
  this.y += random(-5, 5)
}
  ellipse(this.x, this.y, this.r)
  if(this.x <= 0){
  this.x = 1
  }if(this.x >= width){
    this.x = width-1
  }if(this.y <= 0){
    this.y = 1
  }if(this.y >=height){
    this.y = height - 1
  }
  }
  
}

function setup() {
  createCanvas(400, 400);
  for(var i = 0;i<50;i++){ 
  	bubbles[i] = new Bubble(random(0, width), random(0, height), random(10, 100))
}
  //noStroke()
  strokeWeight(0.5)
}

function draw() {
  background(251);
  for (let i = 0; i < bubbles.length; i++) {
bubbles[i].draw()
}
  if(keyIsPressed & key === " "){
   b = new Bubble(mouseX, mouseY, random(10, 100))
    bubbles.push(b)         
  }
  
}
