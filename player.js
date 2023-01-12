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
        this.x = map.size / 2
        this.y = map.size / 2
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
    map = new Map()
    players = []
    directions = []
    directionsSet = ['down',"right", "left", "up"]
    addPlayer(direction){
        this.players.push(new Player(`Player ${this.players.length}`, this.map))
        this.directions.push(direction)
    }
    init(playersCount){
        for(let i = 0; i < playersCount; i++){
            this.addPlayer(this.getDirection())
        }
    }
    run(){
        setInterval(() => 
        {
            this.players.forEach((item, index) => {
                item.move(this.directions[index],1)
            })
        }, 2000)
    }
    getDirection(){
        let index = Math.floor(Math.random() * 4);
        return this.directionsSet[index]
    }
}

// // function start(){
// //     const c = document.getElementById("myCanvas");
// //     const ctx = c.getContext("2d");
// //     ctx.beginPath();
// //     ctx.rect(50, 50, 1, 1);
// //     ctx.stroke();
// // }

// // window.onload = start

function debugStart(){
    let game = new Game()

    game.init(2)
    game.run()
}

debugStart()


