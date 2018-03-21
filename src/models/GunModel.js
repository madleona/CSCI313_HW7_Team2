export default class GunModel {


    constructor(bullets = 10, max_bullets = 10) {
        this.bullets = bullets;
        this.max_bullets = max_bullets;
        this.max_bullets2 = 5;
        this.max_bullets3 = 5;
        this.max_bullets4 = 5;
        this.lastFire = Date.now() - 500; //So that we can fire the gun
    }

    fire() {
        this.lastFire = Date.now();
        this.bullets -= 1;
    }

    fire2() {
        this.lastFire = Date.now();
        this.bullets2 -= 1;
    }

    fire3() {
        this.lastFire = Date.now();
        this.bullets3 -= 1;
    }

    fire4() {
        this.lastFire = Date.now();
        this.bullets4 -= 1;
    }

    canBeFired() {
        if (Date.now() - this.lastFire >= 500) {
            return true;
        } else {
            return false;
        }
    }
}