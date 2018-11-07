

var shopper = {
    firstName: 'Sam',
    age: 40,
    hasBasket: true,
    groceryCart: ['apples', ' bread', ' eggs'],
    description: function() {
        console.log(this.firstName + ' is a ' + this.age + ' year old shopper who has ' + this.groceryCart + ' in his cart.');
        if (hasBasket = true) {
            console.log('He is using a basket')
        } else {
            console.log('He is using a cart.')
        }
    }
}

shopper.description() ;


