export default class StartScreen {


    create() {
        var style = { font: "75px Comic Sans MS", fill: "#FFFFFF" };
        this.game.add.text(125, 225, "Press Spacebar to Play", style);
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('game');
        }
    }

}