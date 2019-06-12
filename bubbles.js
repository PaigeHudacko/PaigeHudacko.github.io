var x
var y
var r
var bubbles = []
var popped = 0


class Bubble{
  constructor(){
  this.x = random(width)
  this.y = random(height)
  this.r = random(25, 45)
  this.f = 255
    this.g = random(25, 50)
    this.b = random(50, 100)
  
  }
  draw(i){
    fill(0, this.g, this.b, this.f, 200)
  if((dist(this.x, this.y, mouseX, mouseY)) <= this.r){
    this.f = random(200)
  }
  this.i = i
  if(mouseIsPressed & (dist(this.x, this.y, mouseX, mouseY)) <= this.r){
   bubbles.splice(this.i, 1)
    popped += 1
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
  createCanvas(500, 500);
  for(var i = 0;i<150;i++){ 
  	bubble = new Bubble()
bubbles.push(bubble)
  }
  //noStroke()
  strokeWeight(0.5)
}

function draw() {
  background(251);
  fill(175)
  text(popped, 10, 10, 10)
  text(bubbles.length, 10, 490, 10)
  for (let i = 0; i < bubbles.length; i++) {
bubbles[i].draw(i)
}
  if(keyIsPressed & key === " "){
   bubble = new Bubble((bubble.length+1))
    bubbles.push(bubble)         
  }
}
