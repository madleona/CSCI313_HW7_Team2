export default class GunModel {


    constructor(bullets = 10, max_bullets = 10) {
        this.bullets = bullets;
        this.max_bullets = max_bullets;
        this.lastFire = Date.now() - 500; //So that we can fire the gun
    }

    fire() {
        this.lastFire = Date.now();
        this.bullets -= 1;
    }

    addBullets(moreBullets) {
        this.bullets += moreBullets;

        if (this.bullets > this.max_bullets)
            this.bullets = this.max_bullets;
    }

    canBeFired() {
        if (Date.now() - this.lastFire >= 500 && this.bullets > 0) {
            return true;
        } else {
            return false;
        }
    }
}