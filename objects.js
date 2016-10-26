//object literal
var food = {
    edible: true
}

food.edible = true
//this references the same object
// var pizza = food

// this makes a clone of an object so they are independant
var pizza = Object.create(food)
pizza.edible = false
console.log(pizza)
console.log(food)

var pizza = Object.create(food)

// New Object
var food = new Object()
food.edible = true
var tacos = Object.create(food)

// Contructor Function
var Food = function () {
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now Eating ' + this.type + '  1 of ' + this.totalEaten)
    }
}

var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)

Food.prototype.calories = 1200

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.year
        this.setYear = this.setYear.bind(this) //needed for ES6 and when method references this.
    }

    setYear(year) {
        this.year = year
    }

    drive(speed) {
        console.log(`${make} ${model} is driving ${speed}mph`)
    }
}

class Toyota extends Vehicle {
    constructor(model) {
        super('Toyota', model)
    }
}

var $4Runner = new Toyota('4Runner')
$4Runner.setYear(2006)
// $4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2009
console.log(prius)
