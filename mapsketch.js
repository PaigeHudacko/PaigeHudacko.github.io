var gridSize = 50
var arraySize = (gridSize*gridSize)

var numberOfLivingNeighbors
var numberOfDeadNeighbors
var r = 25
var e = 25
var deadNeighbors = []
var myDeadNeighbors = []// store neighbors' neighbors instead of checking further, just check neighbor's array[i]

//the "isAlive" array stores true/false for each of our cells telling us which ones are alive
var isAlive = []
var nextTurnIsAlive = []
var colors = []
var colorsB = []
var isForest = []
var isMountain = []


function setup() {
    createCanvas(700, 700);
    //to start, we randomly assign each cell as living or dead (boolean true or false)
    for(var i = 0;i<arraySize;i++){
        var alive = (Math.random() < chanceOfLife)
        isAlive.push(alive)
        colors.push(25)
        tree = (Math.random() < chanceOfForest)
        isForest.push(tree)
        rock = (Math.random() < chanceOfMountain)
        isMountain.push(rock)
    }
    noLoop()
    noStroke()
}

function draw() {

    for(var i = 0; i<100; i++){

        //each frame we show the cells that are alive
        showAliveCells()
        r = 25
        decideWhichCellShouldBeAliveNextTurn()
    }
    for(var i = 0; i<= 1; i++){
        showAliveCells()
        if(forests === true){
            forest()
        } if(mountains === true){
            mountain()
        }
    }
    noFill()
    stroke(0)
    strokeWeight(30)
    square(0, 0, height)
    noStroke()
}

function showAliveCells(){
    //we loop through our entire array and draw a black square if it is alive // no we dont actually
    var cellWidth = width/gridSize;
    var x = 0;
    var y = 0;
    for(var i = 0;i<arraySize;i++){
        if(isAlive[i]){
            b = random(125, 150)
            b = 125
            fill(25, 80, b)
        } else {
            g = random(75, 85)
            //g = random(78, 82)
            r = colors[i]
            fill(r, g, 25)
        }
        rect(x, y, cellWidth, cellWidth);

        x += cellWidth
        if((i+1) % gridSize == 0){
            x = 0
            y += cellWidth
        }
    }
}
