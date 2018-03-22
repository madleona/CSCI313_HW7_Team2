export default class GameOver {


    create() {
        var style = { font: "75px Comic Sans MS", fill: "#FFFFFF" };
        this.game.add.text(125, 225, "Game Over", style);
    }

    update() {

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('game');
        }
    }

}