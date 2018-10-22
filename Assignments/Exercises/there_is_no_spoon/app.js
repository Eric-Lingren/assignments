

// Create 10 objects from things you see.
// Each object should have at least 3 keys (properties).
// Have at least one boolean, string, number, array, nested object, etc.
// Each object should have at least one method.
var myObjects = [ {
        name: 'macbook',
        color: 'black',
        price: 1200,
        isPC: false,
        definition: function() {
            console.log('I am a ' + this.color + ' macbook that costs $' + this.price)
        }
    }, {
        name: 'phone',
        color: 'black',
        price: 800,
        isiphone: false,
        definition: function() {
            console.log('I am a ' + this.color + ' phone that costs $' + this.price)
        }
    }, {
        name: 'coffee',
        color: 'brown',
        price: 2,
        isTea: false,
        definition: function() {
            console.log('I am a ' + this.color + ' coffee that costs $' + this.price)
        }
    }, {
        name: 'soda',
        color: 'green',
        price: 1,
        isHealthy: false,
        definition: function() {
            console.log('I am a ' + this.color + ' soda that costs $' + this.price)
        }
    }, {
        name: 'water',
        color: 'clear',
        price: 0,
        isHealthy: true,
        definition: function() {
            console.log('I am a ' + this.color + ' water that costs $' + this.price)
        }
    }, {
        name: 'table',
        color: 'white',
        price: 100,
        isBeingUsed: true,
        definition: function() {
            console.log('I am a ' + this.color + ' table that costs $' + this.price)
        }
    }, {
        name: 'me',
        color: 'not tan',
        price: 1000000000000,
        isAwesome: true,
        definition: function() {
            console.log('I am a ' + this.color + ' human being that costs $' + this.price)
        }
    }, {
        name: 'jacket',
        color: 'grey',
        price: 20,
        isWarm: true,
        definition: function() {
            console.log('I am a ' + this.color + ' jacket that costs $' + this.price)
        }
    }, {
        name: 'door',
        color: 'brown',
        price: 300,
        isClosed: true,
        definition: function() {
            console.log('I am a ' + this.color + ' door that costs $' + this.price)
        }
    }, {
        name: 'basketball',
        color: 'orange',
        price: 10,
        isRound: true,
        definition: function() {
            console.log('I am a ' + this.color + ' basketball that costs $' + this.price)
        },
        otherBalls: {
            name: 'basketball',
            color: 'white and red',
            price: 8,
            isRound: true,
            definition: function() {
                console.log('I am a ' + this.color + ' baseball that costs $' + this.price)
            }
        }
    },
];
/*
macbook.definition();
phone.definition();
coffee.definition();
soda.definition();
water.definition();
table.definition();
me.definition();
jacket.definition();
door.definition();
*/
//Extra Credit:

// Call a method from one object that then calls a method nested in another.
//basketball.otherBalls.definition();

// Place all of your objects into an array and call your functions.
myObjects[0].definition();
myObjects[1].definition();
myObjects[2].definition();
myObjects[3].definition();
myObjects[4].definition();
myObjects[5].definition();
myObjects[6].definition();
myObjects[7].definition();
myObjects[8].definition();
myObjects[9].definition();

// Nest one object within another, within another object, within another.
// Create and call a method in one object that calls a method nested at the deepest 
// level of your deeply nested object.
myObjects[9].otherBalls.definition();
