function checkForShip (player, coordinate) {
    let shipPresent, ship;

    for(let i = 0; i< player.ships.length; i++){
        ship = player.ships[i]

        shipPresent = ship.locations.filter(function(actualCoordinate){
            return (actualCoordinate[0] === coordinate[0] && actualCoordinate[1] === coordinate[1])
        })[0]

        if(shipPresent){
            return true
        }
    }
    return false
}

function damageShip(ship, coordinate) {
    //at a given coordinates ship should get damaged

    // check if the ship is already damaged at a given location
    for(let i = 0; i < ship.damage.length; i++){
        if(ship.damage[i][0] === coordinate[0] && ship.damage[i][1] === coordinate[1]){
            return 'already damaged at this location'
        }
    }
    // if not then damage the ship at a given location
    ship.damage = [...ship.damage, coordinate]

    return ship
}

module.exports = {
    checkForShip,
    damageShip
}