const size = 100
let x = size / 2 
let y = size / 2

function move(direction, step){    
    if(typeof step !== "number"){
        throw new Error("Wrong step value")
    }
    for (let i = 0; i < step; i++){
        if(direction === 'right'){
            x = coordCalc(x, 1)
        }
        else if(direction === 'left'){
            x = coordCalc(x, -1)
        }
        else if(direction === 'up'){
            y = coordCalc(y, 1)
        }
        else if(direction === 'down'){
            y = coordCalc(y, -1)
        }
        else throw new Error("Wrong direction value")

        console.log(`${i}: Move to: ${direction}, x = ${x}, y = ${y}`)
    }
}

function coordCalc(currentCoord, step){
    let result = currentCoord + step
    if (step > 0){
        return result < size ? result : 0
    }
    if (step < 0){
        return result > 0 ? result : size
    }
}

move("right", 5)