var expect = require('chai').expect;

describe('checkForShip', function (){
    var checkForShip = require('../controller/gameLogic/shipMethod').checkForShip;
    //test specs
    it('should correctly report no ship at a given players coordinate', function(){
        var player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9,9])).to.be.false
    });

    it('should correctly report a ship located at a given players coordinate', function(){
        var player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [0,0])).to.be.true
    });
})

describe('damageShip', function(){
    var damageShip = require('../controller/gameLogic/shipMethod').damageShip;

    it('should register damage on a given ship at a given location', function(){
        var ship = {
            location: [[0.0]],
            damage: []
        }

        damageShip(ship, [0,0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0,0])
    })

    it('should register damage is already done at a given ship at a given location', function(){
        var ship = {
            location: [[0.0]],
            damage: [[0,0]]
        }

        damageShip(ship, [0,0]);

        expect(ship.damage).to.not.be.empty;
        // expect(ship.damage)
        // expect(ship.damage[0]).to.deep.equal([0,0])
    })
})