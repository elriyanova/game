const size = 100
let x = size / 2 
let y = size / 2

function move(direction, step){    
    for (let i = 0; i < step; i++){
        if(direction === 'right'){
            (x < size) ? (x = x + 1) : x = 0
        }
        else if(direction === 'left'){
            (x > 0) ? (x = x - 1) : x = 100
        }
        else if(direction === 'up'){
            (y < size) ? (y = y + 1) : y = 0
        }
        else if(direction === 'down' && y > 0){
            (y > 0) ? (y = y - 1) : y = 100
        }
        else return 'Wrong direction'

        console.log(`${i}: Move to: ${direction}, x = ${x}, y = ${y}`)
    }
}

move("down", 60)