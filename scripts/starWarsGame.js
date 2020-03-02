class Game {
    constructor(){
        this.vader= new Vader({x: 5, y:5});
        this.start();
    }

    start(){
        // requestAnimationFrame
        setInterval(()=> {
            this.vader.render();
        }, 200)
    }
}