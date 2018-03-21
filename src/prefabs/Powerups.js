export default class Powerups extends Phaser.Sprite {

    constructor(game, x, y, frame, type) {
        if (type === 'healthbox')
            super(game, x, y, 'healthbox', frame);
        else 
            super(game, x, y, 'player', frame);
        this.type = type;
        // initialize your prefab here
        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.velocity.x = -200;
        this.bounceTick = Math.random() * 2;

        this.outOfBoundsKill = true;
    }

    update() {
        this.bounceTick += .02;
        this.y += Math.sin(this.bounceTick) * 1;
    }
}