// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
        super()

        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name
        this.id = id

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var trailer1 = new Trailer('SNL - Black Jeopardy', 'O7VaXlMvAvk')
var trailer2 = new Trailer('SNL - Third Debate', '-kjyltrKZSY')
var trailer3 = new Trailer('SNL - Second Debate', '-nQGBZQrtT0')
var trailer4 = new Trailer('SNL - 40th Anniversary', 'ImaYMoTi2g8')
