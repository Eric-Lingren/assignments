// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...words) {  
    return words
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]




// Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]));




// Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
location: "Burly Idaho",
duration: "2 weeks"
};

const {location} = vacation;
const {duration} = vacation;

function parseSentence(){
let output =  `We're going to have a good time in ${location} for ${duration}`
console.log(output)
};
parseSentence();





// Use destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst([5,7,3]));






// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities;

    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))





//  Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
//  You will need to change how the arrays are passed in. 
//  You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...animals) {  
 
    let everyAnimal = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
    console.log(everyAnimal)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]





//  Try to make the following function more ES6xy:

// var numbers = [a,b,c,d,e];

// const product = (numbers) => {  
//   const answer = numbers.reduce((acc, number) => acc * number, 1)
// }




// // Make the following function more ES6xy. Use at least both the rest and spread operators:


// function unshift(array, a, b, c, d, e) {  
//   return [a, b, c, d, e].concat(array);
// }
// /////
// const array = [1,2,3,4,5];
// const a = 'A';
// const b = 'B' 
// const c = 'C' 
// const d = 'D' 
// const e = 'E' 
// let unshiftV2 = (array, a, b, c, d, e) => [a, b, c, d, e, ...array];

// console.log(unshiftV2());




function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        //console.log(name);

        //var person = Object.assign(...name.map(d => ( {['firstName']: d, ['lastName']: d} )));

        var person = {}

        for(let i = 0; i< name.length; i++){
            //console.log(name[i]);
            person['firstName'] = name[0];
            person['lastName'] = name[1];
        }
        // name.forEach(function(data){
        //     console.log(data)
        //     person['firstName'] = data;
        //     person['lastName'] = data[0][1];
        // })

        console.log(person)

        // return {
        //     firstName: firstName,
        //     lastName: lastName
        // }
    });
};

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

