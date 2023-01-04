let map = {
    size: 100,
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

let player = {
    x: map.size / 2,
    y: map.size / 2,
    move(direction, step){    
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
    
            console.log(`${i}: Move to: ${direction}, x = ${this.x}, y = ${this.y}`)
        }
    }
}

player.move("right", 105)