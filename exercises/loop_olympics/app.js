var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"];

for (var i = 0; i < eventsAtWork.length; i++) {
    if (eventsAtWork[i]==='party'){
        console.log('horray');
    }
}


var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var computerCount = 0

for (var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === 'computer'){
        computerCount++;
    }
}
console.log('There are ' + computerCount + ' computers.');




//Loop through the following array and log to the console "old enough" if they are 18 or older, 
//and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 


for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max.  Let HIM in.');
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max.  Let HER in.');
        }
    } else {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old not enough to see Mad Max.  Do not let HIM in.');
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max.  Do not let HER in.');
        }
    }
}



//Imagine you have a button that toggles a light on and off. 
//Loop through the following array of numbers and toggle the button the numbers of times for each number. 
//The array [2, 3, 2] would toggle the button 7 times.

//The light is off to start with. Log to the console whether or not the light is on at the end.
/*
Sample Arrays:

[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"
*/

lightSwitch1 = [1, 3, 6, 2]
lightSwitch2 = []
var arraySum1 = 0
var arraySum2 = 0


for (i = 0; i < lightSwitch1.length; i++) {
    arraySum1 += lightSwitch1[i];
}

if(arraySum1 % 2 === 0 ){
    console.log('The number is ' + arraySum1 + ' and the light is on.');
} else {
    console.log('The number is ' + arraySum1 + ' and the light is off.');
}


for(i = 0; i < 3; i++){
    // function randomNumber() {
        lightSwitch2.push(Math.floor(Math.random()*11));
    // }
}
// randomNumber();
console.log(lightSwitch2);

for (i = 0; i < lightSwitch2.length; i++) {
    arraySum2 += lightSwitch2[i];
}

if(arraySum2 % 2 === 0 ){
    console.log('The number is ' + arraySum2 + ' and the light is on.');
} else {
    console.log('The number is ' + arraySum2 + ' and the light is off.');
}



// Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.

for (i = 0; i < 10; i++) {
    console.log(i);
}

//Write a for loop that prints to the console 9 through 0.]

for (i = 9; (i < 10 && i >=0) ; i--) {
    console.log(i);
}

//Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"];

for(i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


//Bronze Medal
//Write a for loop that will push the numbers 0 through 9 to an array.
var array0to9 = []

for (i = 0; i < 10; i++){
    array0to9.push(i);
}
console.log(array0to9);

//Write a for loop that prints to the console only even numbers 0 through 100.
for(i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Write a for loop that will push every other fruit to an array.
var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for(i = 0; i < fruit2.length; i++){
    if (i % 2 === 0){
        console.log(fruit2[i]);
    }
}



//Silver Medal

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//Write a loop that will print out all the names of the people of the people array

for (i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}


//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var peopleNamesArray = [];
var peopleOccupationsArray = [];

for(i = 0; i < peopleArray.length; i++){
    peopleNamesArray.push(peopleArray[i].name);
    peopleOccupationsArray.push(peopleArray[i].occupation);
}
console.log(peopleNamesArray);
console.log(peopleOccupationsArray);


//Write a loop that pushes every other name to an array starting with "Harrison Ford", 
//and every other occupation to another array starting with "Singer".
var everyOtherNameArray = [];
var everyOtherOccupationArray = [];

for(i = 0; i < peopleNamesArray.length; i++){
    if(i % 2 != 0){
        everyOtherNameArray.push(peopleNamesArray[i]);
    }
}
for(i = 0; i < peopleOccupationsArray.length; i++){
    if(i % 2 != 0){
        everyOtherOccupationArray.push(peopleOccupationsArray[i]);
    }
}
console.log(everyOtherNameArray);
console.log(everyOtherOccupationArray);



// Gold Medal

// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
var tripleZeroArray = [];

for(i = 0; i < 3; i++){
    tripleZeroArray.push([0,0,0]);
}

console.log(tripleZeroArray);


// 2.Create an array that mimics a grid like the following using for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var zeroOneTwoArray = [];

for(i = 0; i < 3; i++){
    zeroOneTwoArray.push([i,i,i]);
}
console.log(zeroOneTwoArray)


// 3.Create an array that mimics a grid like the following using for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

var zeroOneTwoArraySequence = [];

for(i = 0; i < 3; i++){
    zeroOneTwoArraySequence.push([0,1,2]);
}
console.log(zeroOneTwoArraySequence)


// 4. Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...], 
//            [0, ...], 
//            [0,...], ...] 

var numbersToBeReplacedArray = []
var replaceArrayNumbersWithX = []

for(i = 0; i < 3; i++){
    numbersToBeReplacedArray.push([0,0,0]);
    numbersToBeReplacedArray[i].push('x');

}
console.log(numbersToBeReplacedArray);
console.log(replaceArrayNumbersWithX);





// Friday Warm Up

for(var i = 0; i <=10; i++){
    console.log(i);
}


for(var i = 0; i < 101; i += 2){
        console.log(i); 
}


for( var i = 100; i >= 0; i -= 5) {
    console.log(i);
}

var friends = [
    {
        name: "Rick",
        age: 70
    },
    {
        name: "Morty",
        age: 14
    },
    {
        name: "Jerry",
        age: 54
    },
    {
        name: "Summer",
        age: 18
    },
    {
        name: "Mr. Poopie Butthole",
        age: 31
    },
    {
        name: "Pickle Rick",
        age: 70
    }
]


for(i = 0; i < friends.length; i++){
    console.log(friends[i].name);
}


for(i = 0; i < friends.length; i++){
    console.log(friends[i].name + ' is ' + friends[i].age + ' years old.');
}

for(i = 0; i < friends.length; i++){
    friends[i].isCool = true;
    friends[i].howManySeries = 5;
}

console.log(friends)



