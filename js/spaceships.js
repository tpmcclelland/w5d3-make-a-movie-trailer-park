
//literal notation
var spaceship1 = {
    topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
        // setTimeout(this.land, 3000)
        $('#rocket1').addClass('animated slideOutUp');
    },
    land: function () {
        // console.log(this.shipName + ' has landed!!!')
        console.log('I\'m back!!!')
        $('#rocket1').removeClass('slideOutUp');
        $('#rocket1').addClass('slideInDown');
    }
}

spaceship1.launch()
setTimeout(spaceship1.land, 3000)

//Object new
var spaceship2 = new Object();
spaceship2.topSpeed = '14lyph'
spaceship2.shipName = 'Falcon 1'
spaceship2.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    $('#rocket2').addClass('animated slideOutUp');
    // setTimeout(this.land, 3000)
}
spaceship2.land = function() {
        // console.log(this.shipName + ' has landed!!!')
        console.log('I\'m back!!!')
        $('#rocket2').removeClass('slideOutUp');
        $('#rocket2').addClass('slideInDown');
}

spaceship2.launch()
setTimeout(spaceship2.land, 3000)

//Constructor function
var Spaceship3 = function(topSpeed = '92lyph', shipName = 'Falcon Heavy') {
    this.topSpeed = topSpeed
    this.shipName = shipName
    this.launch = function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    $('#rocket3').addClass('animated slideOutUp');
    }
}

var spaceship3 = new Spaceship3()
spaceship3.launch()

//Class
class Spaceship4 {
    constructor(topSpeed = '2lyph', shipName = 'Tom\'s Rocket') {
        this.topSpeed = topSpeed
        this.shipName = shipName
    }

    launch() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
        $('#rocket4').addClass('animated slideOutUp');
        // setTimeout(this.land, 3000)
    }

    land() {
        // console.log(this.shipName + ' has landed!!!')
        console.log('I\'m back!!!')
        $('#rocket4').removeClass('slideOutUp');
        $('#rocket4').addClass('slideInDown');
    }
}

var spaceship4 = new Spaceship4()
spaceship4.launch()
setTimeout(spaceship4.land, 3000)

//Adventure Mode
var spaceship5 = Object.create(spaceship1)
spaceship5.topSpeed = '78lph'
spaceship5.shipName = 'Cruiser 1'
spaceship5.launch()
setTimeout(spaceship5.land, 3000)

var spaceship6 = Object.create(spaceship2)
spaceship6.topSpeed = '1lph'
spaceship6.shipName = 'Cruiser 2'
spaceship6.launch()
setTimeout(spaceship6.land, 3000)

var spaceship7 = new Spaceship3('.5lyph', 'small little rocket')
spaceship7.launch()
setTimeout(spaceship7.land, 3000)
var spaceship8 = new Spaceship4('3lyph', 'medium little rocket')
spaceship8.launch()
setTimeout(spaceship8.land, 3000)

Spaceship3.prototype.land = function() {
    // console.log(this.shipName + ' has landed!!!')
    console.log('I\'m back!!!')
    $('#rocket3').removeClass('slideOutUp');
    $('#rocket3').addClass('slideInDown');
}

spaceship3.launch()
setTimeout(spaceship3.land, 3000)
