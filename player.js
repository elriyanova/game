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

function Player(name, map){
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

function Game(){
    let map = new Map()
    let players = []
    let directions = []
    let directionsSet = ['down',"right", "left", "up"]
    this.addPlayer = function(direction){
        players.push(new Player(`Player ${players.length}`, map))
        directions.push(direction)
    }
    this.init = function(playersCount){
        for(let i = 0; i < playersCount; i++){
            this.addPlayer(this.getDirection())
        }
    }
    this.run = function(){
        setInterval(() => 
        {
            players.forEach((item, index) => {
                item.move(directions[index],1)
            })
            // for (let i = 0; i < players.length; i++){
            //     players[i].move(directions[i],1)
            // }
        }, 2000)
    }
    this.getDirection = function(){
        let index = Math.floor(Math.random() * 4);
        return directionsSet[index]
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


