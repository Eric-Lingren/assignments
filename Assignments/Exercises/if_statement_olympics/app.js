

// Preliminaries

if (5 > 3) {
    console.log('is greater than');
}

if ('cat'.length === 3) {
    console.log('is the length');
}

if ('cat' === 'dog') {
    console.log('they are the same animal');
} else {
    console.log('they are not the same animal');
}

//Bronze medal

var person = {
    name: "Bobby",
    age: 12
  }

if (person.age < 18){
    console.log(person.name + ' is not allowed to go to the movie.');
} else {
    console.log(person.name + ' is allowed to see the movie.');
}

if (person.name[0] === 'B'){
    console.log(person.name + ' is allowed to go to the movie.');
} else {
    console.log(person.name + ' is not allowed to see the movie.');
}

if (person.name[0] === 'B' && person.age > 18){
    console.log(person.name + ' is allowed to go to the movie.');
} else {
    console.log(person.name + ' is not allowed to see the movie.');
}


//Silver medal

if (1 === '1'){
    console.log('strict');
} else if (1 == '1'){
    console.log('loose');
} else {
    console.log('not equal at all');
}

if (1 <= 2 && 2 === 4 || (4*3 > 10 && 5 + 10 > 10)) {
        console.log('yes');
}


//Gold Medal

if ('dog'){
    console.log('this is a string');
} else {
    console.log('this is not a string');
}


if ('true' === true || 'true' === false){
    console.log('this is a boolean');
} else {
    console.log('this is not a boolean');
}


//Write an if statement that checks to see if a variable has been defined or not

var a = 'apple'
var b = 7
// 'string'
// 'number'
// 'boolean'

if(typeof c !== 'undefined') {
    console.log('this variable has been defined');
} else {
    console.log('this variable has not been defined')
}



// Write an if statement comparing letters to numbers using < and >. 
//Try to figure out what letters are going to be "greater than" other numbers or letters. 
//For example: is "s" greater than 12?




// Write a ternary statement that console.logs whether a number is odd or even.

//var myNumber = 10
//function isEven()
//myNumber = (isEven) ? console.log('this number is even') : console.log('this number is odd');

/*
for(i = 0; i < 101; i++) {
    if (i % 2){
        console.log(i + ' <-- This number is even');
    }  else {
        console.log(i + ' <-- this number is odd');
    }
}

*/
