
function decideWhichCellShouldBeAliveNextTurn(){

    for(var i = 0;i<arraySize;i++){
        var numberOfDeadNeighbors = howManyNeighborsAreDead(i)
        var numberOfLivingNeighbors = howManyNeighborsAreAlive(i)
        nextTurnIsAlive[i] = isAlive[i] // put if is alive back into loop

        if(isAlive[i] && numberOfLivingNeighbors < 1){
            nextTurnIsAlive[i] = false
        }
        if(!isAlive[i] && numberOfLivingNeighbors > 3){
            nextTurnIsAlive[i] = false
        }
        if(!isAlive[i] && numberOfLivingNeighbors === 2){
            nextTurnIsAlive[i] = false
        }
        if(!isAlive[i] && numberOfLivingNeighbors === 3){
            nextTurnIsAlive[i] = true
        }
        if(!isAlive[i] && numberOfLivingNeighbors >= 4){
            nextTurnIsAlive[i] = true
            colors[i] = 25
        }
        if(!isAlive[i] && numberOfLivingNeighbors + numberOfDeadNeighbors < 8){
            if(island === true){
                nextTurnIsAlive[i] = true
            }
            colors[i] = 200
        }
    }
    for(var i = 0;i<arraySize;i++){
        var numberOfDeadNeighbors = howManyNeighborsAreDead(i)

        if(!isAlive[i] && numberOfDeadNeighbors === 3){
            nextTurnIsAlive[i] = false
        }
        if(!isAlive[i] && numberOfDeadNeighbors > 4){
            nextTurnIsAlive[i] = false
        }
        if(!isAlive[i] && numberOfDeadNeighbors > 6){
            colors[i] = 75
        }
        if(!isAlive[i] && numberOfDeadNeighbors === 8){
            colors[i] = 125
        }

    }

    for(var i = 0;i<arraySize;i++){
        isAlive[i] = nextTurnIsAlive[i]
    }
}

function forest(){
    for(var i = 0;i<arraySize;i++){
        var numberOfForestNeighbors = howManyForest(i)
        if(isForest[i] && isMountain[i]){
            isMountain[i] = false

        }

        if(!isAlive[i] && numberOfForestNeighbors >= 1){
            qw = int(random(0, 4))
            if(qw === 2){
                colors[i] = 15
            } else {
                colors[i] = 25
            }
        }
        if(!isAlive[i] && isForest[i]){
            colors[i] = 25
        }
        if(!isForest[i] && numberOfForestNeighbors >=3){
            isForest[i] = true
        }
    }
}
function mountain(){
    for(var i = 0;i<arraySize;i++){
        var numberOfMNeighbors = howManyM(i)
        var numberOfLivingNeighbors = howManyNeighborsAreAlive(i)
        if(isMountain[i] && numberOfLivingNeighbors >= 2) {
            isMountain[i] = false
        }

        if(!isAlive[i] && numberOfMNeighbors >= 2){
            qw = int(random(0, 4))
            if(qw === 2){
                colors[i] = 120
            } else {
                colors[i] = 160
            }
        }
        if(!isAlive[i] && isMountain[i] && numberOfMNeighbors >= 4){
            colors[i] = 175
        }
    }
}
