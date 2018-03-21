//require our other components
import Player from "../prefabs/Player.js";
import Enemy from "../prefabs/Enemy.js";
import NumberBox from "../prefabs/NumberBox.js";
import HealthBar from "../prefabs/HealthBar.js";
import Powerups from "../prefabs/Powerups.js"; 


export default class Game extends Phaser.State {

    constructor() {
        //object level properties
        super();

    }

    create() {
        this.spawnChancePowerup = .2;
        this.spawnChance = .02;
        this.score = 0;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bg = this.add.tileSprite(0, 0, 1024, 768, 'bg');

        this.bullets = this.add.group();
        this.enemyBullets = this.add.group();

        //add player
        this.player = new Player(this.game, 0, 0, this.bullets);
        this.game.add.existing(this.player);

        //add a few enemeis..
        this.enemies = this.add.group();
        for (let i = 0; i < 5; i++) {
            let enemy = new Enemy(this.game, this.game.width + 100 + (Math.random() * 400), Math.random() * this.game.height, this.enemyBullets);
            this.enemies.add(enemy);
        }

        //add the group for the powerups
        this.powerups = this.add.group();

        //add the explosions
        this.explosions = this.game.add.emitter(0, 0, 200);
        this.explosions.makeParticles("hexagon");
        this.explosions.setAlpha(1, .2, 2000);

        //add UI
        this.setupUI();

        //wave timer
        this.waveTimer = this.game.time.create(false);
        this.waveTimer.loop(20000, this.incrementWave, this);
        this.waveTimer.start();
    }

    setupUI() {
        this.UILayer = this.add.group();

        this.scoreField = new NumberBox(this.game, "circle", 0);
        this.UILayer.add(this.scoreField);

        this.healthBar = new HealthBar(this.game, 120, 40, "health_bar", "health_holder");
        this.UILayer.add(this.healthBar);
    }

    update() {
        this.bg.tilePosition.x -= .5;

        if (Math.random() < this.spawnChance) {
            let enemy = new Enemy(this.game, this.game.width + 100 + (Math.random() * 400), Math.random() * this.game.height, this.enemyBullets);
            this.enemies.add(enemy);
        }

        if (Math.random() < this.spawnChancePowerup) {
            let powerup = new Powerups(this.game, this.game.width + 100 + (Math.random() * 400), Math.random() * this.game.height, 0, 'healthbox')
            this.powerups.add(powerup);
        }

        this.physics.arcade.overlap(this.enemies, this.bullets, this.damageEnemy, null, this);
        this.physics.arcade.overlap(this.player, this.enemies, this.damagePlayer, null, this);
        this.physics.arcade.overlap(this.player, this.enemyBullets, this.damagePlayer, null, this);
        this.physics.arcade.overlap(this.player, this.powerups, this.obtainPowerup, null, this)
    }

    incrementWave() {
        this.spawnChance *= 1.2;
    }

    damagePlayer(playerRef, enemyRef) {
        this.player.damage(1);
        this.healthBar.setValue(this.player.playerModel.health / this.player.playerModel.max_health);
        enemyRef.kill();

        if (this.player.playerModel.health <= 0) {
            this.game.state.start('gameOver');
        }
    }

    damageEnemy(enemy, bullet) {

        this.explosions.x = enemy.x;
        this.explosions.y = enemy.y;

        this.explosions.explode(2000, 4);

        enemy.kill();
        bullet.kill();

        this.score++;
        this.scoreField.setValue(this.score);
    }

    obtainPowerup(playerRef, powerup)
    {
        console.log(powerup);
        if (powerup.type === 'healthbox') {
            console.log('heal');
            this.player.heal(100);
            this.healthBar.setValue(this.player.playerModel.health / this.player.playerModel.max_health);
            console.log('healthbox');
        }
        else if (powerup.type === 'somethingelse') {
            console.log('somethingelse');
            //whatever code is associated with this other powerup thingy
        }

        powerup.kill();
    }

}