class Vader {
    constructor(startPostionArr){
        this.travelLog = [];
        this.direction = "S";
        this.position = startPostionArr;
    }
    turnLeft(){
        switch(this.direction){
            case "N":
                this.direction = "W";
                break;
            case "W":
                this.direction = "S";
                break;
            case "S":
                this.direction = "E";
                break;
            case "E":
                this.direction = "N";
                break;
            default:
        }
    
    }
    turnRight(){
        switch(this.direction){
            case "N":
                this.direction = "E";
                break;
            case "W":
                this.direction = "N";
                break;
            case "S":
                this.direction = "W";
                break;
            case "E":
                this.direction = "S";
                break;
            default:
        }
        
    }
    moveForward(){
        this.travelLog.push(this.position);
        switch(this.direction){
            case "N":  
                if(this.position[1] === 0) {
                    
                } else {
                    this.position[1]--;
                }
                break;
            case "W":
                if(this.position[0] === 0) {
                    
                } else {
                    this.position[0]--;
                }
                break;
            case "S":
                if(this.position[1] === 9) {
            
                } else {
                    this.position[1]++;
                }
                break;
            case "E":
                if(this.position[0] === 9) {
            
                } else {
                    this.position[0]++;
                }
                break;  
            default:
        }
    }
    instructRover(listOfCommands){
        for(let i = 0; i < listOfCommands.length; i++) {
            switch(listOfCommands[i]){
                case "l":
                    this.turnLeft();
                    break;
                case "r":
                    this.turnRight();
                    break;
                case "f":
                    this.moveForward();
                    break;
                default:
                    
            }
        }
    }
    outOfBounds(){
        if(this.position[1] === 0 && this.direction === "N") {
            
        } 
        else if(this.position[0] === 0 && this.direction === "W") {
            
        } 
        else if(this.position[1] === 9 && this.position === "S") {
            
        }
        else if(this.position[0] === 9 && this.direction === "E") {
            
        }  else {
            return false
        }
    }
}
