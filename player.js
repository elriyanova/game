class Map{
    size = 100
    coordCalc(currentCoord, step){
        let result = currentCoord + step
        if (step > 0){
            return result < this.size ? result : 0
        }
        if (step < 0){
            return result > 0 ? result : this.size
        }
    }
}

class Player{
    constructor(name,map){
        this.name = name
        this.map = map
        this.x = this.getCoord()
        this.y = this.getCoord()
    }
    getCoord(){
        return Math.floor(Math.random() * this.map.size) 
    }
    move(direction, step){    
        if(typeof step !== "number"){
            throw new Error("Wrong step value")
        }
        for (let i = 0; i < step; i++){
            if(direction === 'right'){
                this.x = this.map.coordCalc(this.x, 1)
            }
            else if(direction === 'left'){
                this.x = this.map.coordCalc(this.x, -1)
            }
            else if(direction === 'up'){
                this.y = this.map.coordCalc(this.y, 1)
            }
            else if(direction === 'down'){
                this.y = this.map.coordCalc(this.y, -1)
            }
            else throw new Error("Wrong direction value")
    
            console.log(`${this.name}: Move to: ${direction}, x = ${this.x}, y = ${this.y}`)
        }
    }
}

class Game{
    constructor(playersCount){
        for(let i = 0; i < playersCount; i++){
            this.addPlayer(this.getDirection())
        }
        this.c = document.getElementById("myCanvas")
        this.ctx = this.c.getContext("2d")
    }
    map = new Map()
    players = []
    directions = []
    directionsSet = ['down',"right", "left", "up"]
    addPlayer(direction){
        this.players.push(new Player(`Player ${this.players.length}`, this.map))
        this.directions.push(direction)
    }
    run(){
        this.players.forEach((item, index) => {
            item.move(this.directions[index], this.getSpeed())
        })
    }
    getDirection(){
        let index = Math.floor(Math.random() * 4)
        return this.directionsSet[index]
    }
    getSpeed(){
        return Math.floor(Math.random() * 4) 
    }
    render(){
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        this.players.forEach((item) => {
            this.ctx.beginPath()
            this.ctx.rect(item.x, item.y, 1, 1)
            this.ctx.stroke()
        })
    }
}

function start(){
    let game = new Game(15)
    setInterval(function(){
        game.run()
        game.render()
    }, 100)
}

window.onload = start

// function debugStart(){
//     let game = new Game()

//     game.init(2)
//     game.run()
// }

// debugStart()


