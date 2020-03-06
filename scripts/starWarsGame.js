class Game {
    constructor() {
        this.myVader = new Vader()
        this.myEmperor = new Emperor()
    }
    start() {
        game.myVader.render()
        game.myEmperor.render()
    }

}

const game = new Game()

game.start()