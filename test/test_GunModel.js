import GunModel from "../src/models/GunModel.js";

describe("Gun Model", function () {
    let assert = chai.assert;

    it("Can be created", function () {
        let model = new GunModel();
        assert.isOk(true);
    });

    it('initially has 10 bullets with maximum capacity of 10', function () {
        let model = new GunModel();
        assert.equal(model.bullets, 10);
        assert.equal(model.max_bullets, 10);
    });

    it('can be created with a specified number of bullets and maximum capacity', function () {
        let model = new GunModel(12, 25);
        assert.equal(model.bullets, 12);
        assert.equal(model.max_bullets, 25);
    });

    it('removes one bullet when fired', function () {
        let model = new GunModel();
        model.fire();
        assert.equal(model.bullets, 9);
    });

    it('has a method to check to see if it can be fired', function () {
        let model = new GunModel();
        assert.equal(model.canBeFired(), true);
    });

    it('can not be fired again if it has been fired immediately before', function () {
        let model = new GunModel();
        model.fire();
        assert.equal(model.canBeFired(), false);
    });

    it('can be fired 500 milliseconds after the last firing', function () {
        let clock = sinon.useFakeTimers();
        let model = new GunModel();
        model.fire();
        //Stub the clock ahead by 500 milliseconds
        clock.tick(500);

        assert.equal(model.canBeFired(), true);
        clock.restore()
    });

});