
// Use the built-in array method .filter() to solve all of these problems

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

//var newArr = [];
var arr1 = [3, 6, 8, 2]

function fiveAndGreaterOnly(arr1) {
        return arr1 > 5 ;
       
}

fiveAndGreaterOnly(arr1); /// [6, 8]


function newArrayOver5(){
    console.log( arr1.filter(fiveAndGreaterOnly))
}

newArrayOver5();




// 2) Given an array of numbers, return a new array that only includes the even numbers.
var arr2 = [3, 6, 8, 2];

function evensOnly(arr2) {
    if (arr2 % 2 === 0) {
        return arr2
    }
}

evensOnly(arr2); /// [6, 8, 2]

function printsEvensOnly(){
    console.log( arr2.filter(evensOnly))
}

printsEvensOnly();





//   3) Given an array of strings, return a new array that only includes those 
// that are 5 characters or fewer in length

arr3 = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharactersOrFewerOnly() {
  
    var newArray = arr3.filter(function(item){
        return item.length <= 5;
    })
    console.log(newArray)
}

fiveCharactersOrFewerOnly() // ["by", "dog", "wolf", "eaten"]




// 4) Given an array of people objects, return a new array that has filtered out all those 
// who don't belong to the club.

var arr4 = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];

function peopleWhoBelongToTheIlluminati(){

    var membersArr = arr4.filter(function(ismember){
        return ismember.member === true;
    })
    console.log(membersArr);
}

peopleWhoBelongToTheIlluminati(arr4)





// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
var ages = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function ofAge(arr){
    var oldEnough = ages.filter(function(person){
        return person.age > 17;
    })
    console.log(oldEnough);
}

ofAge()
