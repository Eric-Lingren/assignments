// Use the built-in .reduce() method on arrays to solve all of these problems

// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    let sum  = arr.reduce(function(a,b){
        return a + b;
    });
    console.log(sum)
}

total([1,2,3]) // 6



// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    let newStr = arr.join('')
    console.log(newStr)
}

stringConcat([1,2,3]) // "123"




// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    let voteCount = 0
    arr.forEach(function(person){
        if(person.voted){
            voteCount += 1;
        }
    })
    console.log(voteCount)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters) // 7




// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    
        for(price in arr){
            console.log(price)
        }
        

    
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree(wishlist) // 227005



