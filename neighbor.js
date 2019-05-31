function howManyNeighborsAreAlive(index){
    var neighborsAlive = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        //count all neighbors above
        var topIndex = index-gridSize
        if(isAlive[topIndex]){
            neighborsAlive++
        }

        if(!isVeryLeft){
            if(isAlive[topIndex-1]){
                neighborsAlive++
            }
        }

        if(!isVeryRight){
            if(isAlive[topIndex+1]){
                neighborsAlive++
            }
        }
    }

    if(!isVeryBottom){
        //count all neighbors above
        var bottomIndex = index+gridSize
        if(isAlive[bottomIndex]){
            neighborsAlive++
        }

        if(!isVeryLeft){
            if(isAlive[bottomIndex-1]){
                neighborsAlive++
            }
        }

        if(!isVeryRight){
            if(isAlive[bottomIndex+1]){
                neighborsAlive++
            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(isAlive[leftIndex]){
            neighborsAlive++
        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(isAlive[rightIndex]){
            neighborsAlive++
        }
    }
    return neighborsAlive
}


function howManyNeighborsAreDead(index){
    var neighborsDead = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        //count all neighbors above
        var topIndex = index-gridSize
        if(!isAlive[topIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }

        if(!isVeryLeft){
            if(!isAlive[topIndex-1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }

        if(!isVeryRight){
            if(!isAlive[topIndex+1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }
    }

    if(!isVeryBottom){
        //count all neighbors above
        var bottomIndex = index+gridSize
        if(!isAlive[bottomIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }

        if(!isVeryLeft){
            if(!isAlive[bottomIndex-1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }

        if(!isVeryRight){
            if(!isAlive[bottomIndex+1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(!isAlive[leftIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(!isAlive[rightIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }
    }
    return neighborsDead

}

function howManyNeighborssAreDead(index){
    var neighborssDead = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        //count all neighbors above
        var topIndex = index-gridSize
        if(!isAlive[topIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }

        if(!isVeryLeft){
            if(!isAlive[topIndex-1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }

        if(!isVeryRight){
            if(!isAlive[topIndex+1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }
    }

    if(!isVeryBottom){
        //count all neighbors above
        var bottomIndex = index+gridSize
        if(!isAlive[bottomIndex]){
            neighborsDead++
            deadNeighbors[index] += 1

        }

        if(!isVeryLeft){
            if(!isAlive[bottomIndex-1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }

        if(!isVeryRight){
            if(!isAlive[bottomIndex+1]){
                neighborsDead++
                deadNeighbors[index] += 1

            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(!isAlive[leftIndex]){
            neighborssDead+=deadNeighbors[leftIndex]


        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(!isAlive[rightIndex]){
            neighborssDead+=deadNeighbors[rightIndex]


        }
    }
    return neighborssDead

}

function howManyForest(index){
    var neighborsF = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        var topIndex = index-gridSize
        if(isForest[topIndex]){
            neighborsF++
        }

        if(!isVeryLeft){
            if(isForest[topIndex-1]){
                neighborsF++
            }
        }

        if(!isVeryRight){
            if(isForest[topIndex+1]){
                neighborsF++
            }
        }
    }

    if(!isVeryBottom){
        //count all neighbors above
        var bottomIndex = index+gridSize
        if(isForest[bottomIndex]){
            neighborsF++
        }

        if(!isVeryLeft){
            if(isForest[bottomIndex-1]){
                neighborsF++
            }
        }

        if(!isVeryRight){
            if(isForest[bottomIndex+1]){
                neighborsF++
            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(isForest[leftIndex]){
            neighborsF++
        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(isForest[rightIndex]){
            neighborsF++
        }
    }
    return neighborsF
}

function howManyM(index){
    var neighborsM = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        var topIndex = index-gridSize
        if(isMountain[topIndex]){
            neighborsM++
        }

        if(!isVeryLeft){
            if(isMountain[topIndex-1]){
                neighborsM++
            }
        }

        if(!isVeryRight){
            if(isMountain[topIndex+1]){
                neighborsM++
            }
        }
    }

    if(!isVeryBottom){
        var bottomIndex = index+gridSize
        if(isMountain[bottomIndex]){
            neighborsM++
        }

        if(!isVeryLeft){
            if(isMountain[bottomIndex-1]){
                neighborsM++
            }
        }

        if(!isVeryRight){
            if(isMountain[bottomIndex+1]){
                neighborsM++
            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(isMountain[leftIndex]){
            neighborsM++
        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(isMountain[rightIndex]){
            neighborsM++
        }
    }
    return neighborsM
}
