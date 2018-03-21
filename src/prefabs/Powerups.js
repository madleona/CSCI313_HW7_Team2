export default class Powerups extends Phaser.Group {

    constructor(game, xpos, ypos)
    {
        super(game, xpos, ypos, 'enemy', 0);

        this.x = xpos;
        this.y = ypos;

        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.bounceTick = Math.random() * 2;


        console.log("powerup");
    }

    update()
    {
        //just sit there and move a little bit so it looks better
        //just bounce around or something
    }


}