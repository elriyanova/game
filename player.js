function Map(){
    this.size = 100,
    this.coordCalc = function(currentCoord, step){
        let result = currentCoord + step
        if (step > 0){
            return result < this.size ? result : 0
        }
        if (step < 0){
            return result > 0 ? result : this.size
        }
    }
}

function Player(name){
    this.name = name
    this.x = map.size / 2,
    this.y = map.size / 2,
    this.move = function(direction, step){    
        if(typeof step !== "number"){
            throw new Error("Wrong step value")
        }
        for (let i = 0; i < step; i++){
            if(direction === 'right'){
                this.x = map.coordCalc(this.x, 1)
            }
            else if(direction === 'left'){
                this.x = map.coordCalc(this.x, -1)
            }
            else if(direction === 'up'){
                this.y = map.coordCalc(this.y, 1)
            }
            else if(direction === 'down'){
                this.y = map.coordCalc(this.y, -1)
            }
            else throw new Error("Wrong direction value")
    
            console.log(`${this.name}: Move to: ${direction}, x = ${this.x}, y = ${this.y}`)
        }
    }
}

let map = new Map()
let player = new Player("Player1")
let player2 = new Player("Player2")

player.move("right", 5)
setInterval(() => player2.move("down", 2), 2000)