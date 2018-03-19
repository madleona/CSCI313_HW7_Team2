export default class Powerups extends Phaser.Group {

    constructor(game, xpos, ypos)
    {
        super(game);

        this.x = xpos;
        this.y = ypos;
    }

    update()
    {
        //just sit there and move a little bit so it looks better
        //just bounce around or something
    }


}