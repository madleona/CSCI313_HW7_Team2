export default class GunModel {


    constructor(bullets = 10, bullets2 = 5, bullets3 = 2, bullets4 = 1, max_bullets = 10, max_bullets2 = 5, max_bullets3 = 2, max_bullets4 = 1) {
        this.bullets = bullets;
        this.bullets2 = bullets2;
        this.bullets3 = bullets3;
        this.bullets4 = bullets4;
        this.max_bullets = max_bullets;
        this.max_bullets2 = max_bullets2;
        this.max_bullets3 = max_bullets3;
        this.max_bullets4 = max_bullets4;
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

    addBullets() {
        this.bullets += 5;
        this.bullets2 += 3;
        this.bullets3 += 2;
        this.bullets4 += 1;

        if (this.bullets > this.max_bullets)
            this.bullets = this.max_bullets;

        if (this.bullets2 > this.max_bullets2)
            this.bullets2 = this.max_bullets2;

        if (this.bullets3 > this.max_bullets3)
            this.bullets3 = this.max_bullets3;

        if (this.bullets4 > this.max_bullets4)
            this.bullets4 = this.max_bullets4;
    }



    canBeFired() {
        if (Date.now() - this.lastFire >= 500 && this.bullets > 0) {
            return true;
        } else {
            return false;
        }
    }

    canBeFired2() {
        if (Date.now() - this.lastFire >= 500 && this.bullets2 > 0) {
            return true;
        } else {
            return false;
        }
    }

    canBeFired3() {
        if (Date.now() - this.lastFire >= 500 && this.bullets3 > 0) {
            return true;
        } else {
            return false;
        }
    }

    canBeFired4() {
        if (Date.now() - this.lastFire >= 500 && this.bullets4 > 0) {
            return true;
        } else {
            return false;
        }
    }
}