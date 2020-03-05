class Game {
    constructor() {
        this.myVader = new Vader()
        this.myEmperor = new Emperor()
    }

}

const game = new Game()
game.myVader.render()
game.myEmperor.render()