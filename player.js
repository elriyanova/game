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

class AbstractItem{
    constructor(name, map){
        this.name = name
        this.map = map
        this.x = this.getCoord()
        this.y = this.getCoord()
        this.width = this.getSize()
        this.height = this.getSize()
    }
    getCoord(){
        return Math.floor(Math.random() * this.map.size) 
    }
    getSize(){
        return Math.floor(Math.random() * 5) + 3
    }
}

class Player extends AbstractItem{
    constructor(name, map, colour, x, y){
        super(name, map)
        this.colour = colour
        this.x = x
        this.y = y
    }
}

class Enemy extends AbstractItem{
    colours = ['lightBlue', 'grey', 'red', 'pink']
    constructor(name, map){
        super(name, map)
        this.colour = this.getColours()
    }
    getColours(){
        let index = Math.floor(Math.random() * 4)
        return this.colours[index]
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
    constructor(enemiesCount){
        for(let i = 0; i < enemiesCount; i++){
            this.addEnemy(this.getDirection())
        }
        this.c = document.getElementById("myCanvas")
        this.ctx = this.c.getContext("2d")
    }
    map = new Map()
    player = new Player('Player', this.map, 'black', '50', '50')
    enemies = []
    directions = []
    directionsSet = ['down',"right", "left", "up"]
    addEnemy(direction){
        this.enemies.push(new Enemy(`Enemy ${this.enemies.length}`, this.map))
        this.directions.push(direction)
    }
    run(){
        this.enemies.forEach((item, index) => {
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
    renderItem(item){
        this.ctx.beginPath()
        this.ctx.fillStyle = item.colour
        this.ctx.fillRect(item.x, item.y, item.width, item.height)
    }
    render(){
        this.ctx.clearRect(0, 0, this.c.width, this.c.height)
        this.enemies.forEach((item) => {
            this.renderItem(item)
        })
        this.renderItem(this.player)
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

