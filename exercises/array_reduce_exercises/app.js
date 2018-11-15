// Use the built-in .reduce() method on arrays to solve all of these problems

// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    let sum  = arr.reduce(function(a,b){
        return a + b;
    });
    //console.log(sum)
}

total([1,2,3]) // 6



// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    let newStr = arr.join('')
    //console.log(newStr)
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
    //console.log(voteCount)
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
    
    let sum = arr.reduce(function(acc, object){
        return acc + object.price; 
    }, 0);
    //console.log(sum)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

shoppingSpree(wishlist) // 227005



//  5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    
    let flat = arr.reduce(function (a, b){
        return a.concat(b)
    })
    //console.log(flat)
}

var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
//  Note: Take a look at Array.concat() to help with this one





//   6) Given an array of potential voters, return an object representing the results of the vote
//   Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
//   and how many of each of those age ranges actually voted. The resulting object containing this data should 
//   have 6 properties. See the example output at the bottom.

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

function voterResults(arr) {
    let youth = [];
    let mids = [];
    let olds = [];
    arr.forEach(function(person){
        if(person.age < 26){
            youth.push(person)
        } else if(person.age > 25 && person.age < 36){
            mids.push(person)
        } else {
            olds.push(person)
        }
    });

    let youthvotes = youth.reduce(function( acc, person){
        return acc + person.voted 
    }, 0);
    let midvotes = mids.reduce(function( acc, person){
        return acc + person.voted 
    }, 0);
    let oldvotes = olds.reduce(function( acc, person){
        return acc + person.voted 
    }, 0);

    let youngVotes = 'youngVotes';
    let totalYouth = 'youth'
    let middleVotes= 'midVotes';
    let totalMids = 'middleAge';
    let seniorVotes = 'oldVotes';
    let totalOlds = 'olds';
    let obj = {};
    obj[youngVotes] = youthvotes
    obj[totalYouth] = youth.length
    obj[middleVotes] = midvotes
    obj[totalMids] = mids.length
    obj[seniorVotes] = oldvotes
    obj[totalOlds] = olds.length
    console.log(obj)

};

voterResults(voters) // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/


