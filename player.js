const size = 100
let x = size / 2 
let y = size / 2

function move(direction, step){    
    for (let i = 0; i < step; i++){
        if(direction === 'right'){
            x = x + 1
        }
        else if(direction === 'left'){
            x = x - 1
        }
        else if(direction === 'up'){
            y = y + 1
        }
        else if(direction === 'down'){
            y = y - 1
        }
        else return 'Wrong direction'

        console.log(`Move to: ${direction}, x = ${x}, y = ${y}`)
    }
}

move("up", 101)