class Vader {
    constructor(startPostionArr){
        this.travelLog = [];
        this.direction = "S";
        this.position = {
            x: 0,
            y: 0
        };
    }
    turnLeft(){
        switch (this.position) {
            case "S":
                this.position="E"
                break;
            case "N":
                this.position="W"
                break;
            case "W":
                this.position="S"
                break;
            case "E":
                this.position="N"
                break;
        }
    }
    turnRight(){
        switch (this.position) {
            case "S":
                this.position="W"
                break;
            case "N":
                this.position="E"
                break;
            case "W":
                this.position="N"
                break;
            case "E":
                this.position="S"
                break;
        }
    }
    moveForward(){
        this.travelLog.push(this.position);
        switch (this.position) {
            case "S":
                if(this.position[1] === 9){
                    console.log("Cant move there")
                } else {
                    this.position[1]++;
                }
                break;
            case "N":
                if(this.position[1] === 0){
                    console.log("Cant move there")
                } else {
                    this.position[1]--;
                }
                break;
            case "W":
                if(this.position[0] === 0){
                    console.log("Cant move there")
                } else {
                    this.position[0]++;
                }
                break;
            case "E":
                if(this.position[0] === 9){
                    console.log("Cant move there")
                } else {
                    this.position[0]++;
                }
                break;
        }
    }    
    render(){
        const $vader = document.querySelector('#vader');
        $vader.style.transform = 'scale(1,1)';
        $vader.style.bottom = `${this.position.y}px`;
        $vader.style.left = `${this.position.x}px`;
    }
    
}